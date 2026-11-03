import type { Metadata } from "next";

import { GalleryPage } from "@/components/gallery-page";

export const metadata: Metadata = { title: "Art Pieces" };
export const dynamic = "force-dynamic";

export default function ArtPiecesPage() {
  return <GalleryPage category="art" />;
}
