import { describe, expect, it, vi } from "vitest";

import { publicGalleryImages } from "../lib/public-gallery";

describe("public gallery availability", () => {
  it("adds uploaded work after the bundled work", async () => {
    const images = await publicGalleryImages("functional", async () => [
      {
        publicId: "larashley/functional/new-mug",
        url: "https://res.cloudinary.com/example/image/upload/new-mug.jpg",
        width: 1200,
        height: 1600,
        alt: "New ceramic mug",
      },
    ]);

    expect(images.map(({ publicId }) => publicId)).toEqual([
      "starter/mugs",
      "larashley/functional/new-mug",
    ]);
  });

  it("keeps bundled work visible when uploaded images cannot be loaded", async () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined);

    const images = await publicGalleryImages("art", async () => {
      throw new Error("Cloudinary unavailable");
    });

    expect(images.map(({ publicId }) => publicId)).toEqual(["starter/burnin", "starter/seashell"]);
    expect(consoleError).toHaveBeenCalledOnce();
    consoleError.mockRestore();
  });
});
