import { GalleryGrid } from "@/components/gallery-grid";
import { galleries, type GalleryCategory } from "@/lib/gallery";
import { listGalleryImages } from "@/lib/cloudinary";

export async function GalleryPage({ category }: { category: GalleryCategory }) {
  const gallery = galleries[category];
  const images = await listGalleryImages(category);

  return (
    <main className="gallery-page">
      <h1 className="sr-only">{gallery.title}</h1>
      <GalleryGrid images={images} />
    </main>
  );
}
