import { DeleteButton } from "@/components/admin-controls";
import { GalleryImage } from "@/components/gallery-image";
import type { GalleryImage as GalleryImageData } from "@/lib/cloudinary";

export function AdminGallery({ images }: { images: GalleryImageData[] }) {
  if (!images.length) return <p className="admin-empty">No images yet.</p>;

  return (
    <div className="admin-grid">
      {images.map((image) => (
        <div className="admin-image" key={image.publicId}>
          <GalleryImage image={image} />
          <div>
            <span>{image.alt}</span>
            <DeleteButton alt={image.alt} publicId={image.publicId} />
          </div>
        </div>
      ))}
    </div>
  );
}
