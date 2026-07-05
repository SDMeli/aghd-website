/**
 * Google Photos Library API helper
 *
 * Required env vars:
 *   NEXT_PUBLIC_GOOGLE_PHOTOS_ALBUM_ID — shared album ID
 *   NEXT_PHOTOS_API_KEY — API key (for upload step; note: batchCreate requires OAuth 2.0)
 *
 * See .env.local.example for setup instructions.
 */

const ALBUM_ID = process.env.NEXT_PUBLIC_GOOGLE_PHOTOS_ALBUM_ID || "";
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PHOTOS_API_KEY || "";

export async function uploadToGooglePhotos(file: File, guestName?: string) {
  if (!ALBUM_ID || !API_KEY) {
    throw new Error(
      "Google Photos credentials not configured. Set NEXT_PUBLIC_GOOGLE_PHOTOS_ALBUM_ID and NEXT_PUBLIC_GOOGLE_PHOTOS_API_KEY in .env.local"
    );
  }

  const tokenResponse = await fetch(
    `https://photoslibrary.googleapis.com/v1/uploads?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
        "X-Goog-Upload-Content-Type": file.type,
        "X-Goog-Upload-Protocol": "raw",
      },
      body: file,
    }
  );

  if (!tokenResponse.ok) {
    throw new Error(`Upload token request failed: ${tokenResponse.statusText}`);
  }

  const uploadToken = await tokenResponse.text();

  const createResponse = await fetch(
    `https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        albumId: ALBUM_ID,
        newMediaItems: [
          {
            description: guestName ? `آپلود شده توسط ${guestName}` : "",
            simpleMediaItem: { uploadToken },
          },
        ],
      }),
    }
  );

  if (!createResponse.ok) {
    throw new Error(`Media item creation failed: ${createResponse.statusText}`);
  }

  return await createResponse.json();
}
