export const galleries = {
  functional: {
    title: "Functional Ware",
    folder: "larashley/functional",
  },
  art: {
    title: "Art Pieces",
    folder: "larashley/art",
  },
} as const;

export type GalleryCategory = keyof typeof galleries;
export const ALT_TEXT_MAX_LENGTH = 280;

export function galleryFor(value: unknown) {
  return typeof value === "string" && value in galleries
    ? galleries[value as GalleryCategory]
    : null;
}

export function isManagedPublicId(value: unknown): value is string {
  return (
    typeof value === "string" &&
    !value.includes("..") &&
    !value.includes("\\") &&
    Object.values(galleries).some(({ folder }) => value.startsWith(`${folder}/`))
  );
}

export function normalizeAltText(value: unknown) {
  if (typeof value !== "string") return null;
  const alt = value.trim();
  return alt.length > 0 && alt.length <= ALT_TEXT_MAX_LENGTH ? alt : null;
}

export function cloudinaryContext(alt: string) {
  return `alt=${alt.replace(/[\\|=]/g, "\\$&")}`;
}
