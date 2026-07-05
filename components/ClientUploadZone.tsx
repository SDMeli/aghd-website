"use client";

import dynamic from "next/dynamic";

const UploadZone = dynamic(() => import("./UploadZone"), { ssr: false });

export default function ClientUploadZone() {
  return <UploadZone />;
}
