import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  created_at: string;
  tags: string[];
}

export async function GET() {
  try {
    const result = await cloudinary.v2.search
      .expression("tags:wedding_aghd")
      .sort_by("created_at", "desc")
      .max_results(500)
      .execute();

    const items = (result.resources as CloudinaryResource[]).map((r) => ({
      id: r.public_id,
      url: r.secure_url,
      width: r.width,
      height: r.height,
      createdAt: r.created_at,
    }));

    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: [] });
  }
}
