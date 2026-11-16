import type { GalleryImage } from "./cloudinary";
import type { GalleryCategory } from "./gallery";
import { starterGalleryImages } from "./starter-gallery";

export async function publicGalleryImages(
  category: GalleryCategory,
  loadUploadedImages: (category: GalleryCategory) => Promise<GalleryImage[]>,
): Promise<GalleryImage[]> {
  try {
    return [...starterGalleryImages[category], ...(await loadUploadedImages(category))];
  } catch (error) {
    console.error(`Unable to load ${category} gallery uploads`, error);
    return starterGalleryImages[category];
  }
}
