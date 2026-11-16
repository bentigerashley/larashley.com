import burnin from "../burnin.jpg";
import mugs from "../mugs.jpg";
import seashell from "../seashell.jpg";
import type { GalleryImage } from "@/lib/cloudinary";
import type { GalleryCategory } from "@/lib/gallery";

export const starterGalleryImages = {
  functional: [
    {
      publicId: "starter/mugs",
      url: mugs.src,
      width: mugs.width,
      height: mugs.height,
      alt: "Three handmade ceramic mugs with blue and green glazes",
    },
  ],
  art: [
    {
      publicId: "starter/burnin",
      url: burnin.src,
      width: burnin.width,
      height: burnin.height,
      alt: "Sculptural ceramic work with a weathered tree-like form",
    },
    {
      publicId: "starter/seashell",
      url: seashell.src,
      width: seashell.width,
      height: seashell.height,
      alt: "White sculptural ceramic vessel with layered shell-like edges",
    },
  ],
} satisfies Record<GalleryCategory, GalleryImage[]>;
