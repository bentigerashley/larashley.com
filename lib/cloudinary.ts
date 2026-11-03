import "server-only";

import { v2 as cloudinary } from "cloudinary";

import { galleries, type GalleryCategory } from "@/lib/gallery";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export { cloudinary };

export const cloudinaryConfigured = Boolean(
  process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET,
);

export type GalleryImage = {
  publicId: string;
  url: string;
  width: number;
  height: number;
  alt: string;
};

type CloudinaryResource = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  created_at: string;
  context?: { custom?: { alt?: string } };
};

export async function listGalleryImages(category: GalleryCategory): Promise<GalleryImage[]> {
  if (!cloudinaryConfigured) return [];

  const result = (await cloudinary.api.resources({
    prefix: `${galleries[category].folder}/`,
    max_results: 100,
    context: true,
  })) as { resources: CloudinaryResource[] };

  return result.resources
    .sort((a, b) => b.created_at.localeCompare(a.created_at))
    .map((image) => ({
      publicId: image.public_id,
      url: image.secure_url,
      width: image.width,
      height: image.height,
      alt: image.context?.custom?.alt || "Ceramic work by Lara Ashley",
    }));
}
