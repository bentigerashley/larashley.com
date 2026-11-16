import type { GalleryImage as GalleryImageData } from "@/lib/cloudinary";
import { GalleryImage } from "@/components/gallery-image";

export function GalleryGrid({ images }: { images: GalleryImageData[] }) {
  return (
    <div className="gallery-grid">
      {images.map((image) => (
        <GalleryImage image={image} key={image.publicId} />
      ))}
    </div>
  );
}
