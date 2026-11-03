import { describe, expect, it } from "vitest";

import { starterGalleryImages } from "../lib/starter-gallery";

describe("starter gallery content", () => {
  it("places the supplied work in the correct galleries", () => {
    expect(starterGalleryImages.art.map(({ publicId }) => publicId)).toEqual([
      "starter/burnin",
      "starter/seashell",
    ]);
    expect(starterGalleryImages.functional.map(({ publicId }) => publicId)).toEqual([
      "starter/mugs",
    ]);
  });
});
