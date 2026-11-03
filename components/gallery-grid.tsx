import type { GalleryImage as GalleryImageData } from "@/lib/cloudinary";
import { GalleryImage } from "@/components/gallery-image";
import placeholder from "@/logo1.jpg";

const placeholders: GalleryImageData[] = Array.from({ length: 6 }, (_, index) => ({
  publicId: `placeholder-${index}`,
  url: placeholder.src,
  width: placeholder.width,
  height: placeholder.height,
  alt: "Gallery layout placeholder",
}));

export function GalleryGrid({ images }: { images: GalleryImageData[] }) {
  const displayedImages = images.length ? images : placeholders;

  return (
    <div className="gallery-grid">
      {displayedImages.map((image) => (
        <GalleryImage image={image} key={image.publicId} />
      ))}
    </div>
  );
}
