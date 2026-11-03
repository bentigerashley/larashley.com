import type { Metadata } from "next";

import { GalleryPage } from "@/components/gallery-page";

export const metadata: Metadata = { title: "Functional Ware" };
export const dynamic = "force-dynamic";

export default function FunctionalWarePage() {
  return <GalleryPage category="functional" />;
}
