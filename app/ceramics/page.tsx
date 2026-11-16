import type { Metadata } from "next";

import { GalleryPage } from "@/components/gallery-page";

export const metadata: Metadata = { title: "Ceramics" };
export const dynamic = "force-dynamic";

export default function CeramicsPage() {
  return <GalleryPage category="functional" />;
}
