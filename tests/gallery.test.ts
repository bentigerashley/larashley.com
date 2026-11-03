import { describe, expect, it } from "vitest";

import {
  cloudinaryContext,
  galleryFor,
  isManagedPublicId,
  normalizeAltText,
} from "../lib/gallery";

describe("gallery boundaries", () => {
  it("accepts only the two gallery categories", () => {
    expect(galleryFor("functional")?.folder).toBe("larashley/functional");
    expect(galleryFor("art")?.folder).toBe("larashley/art");
    expect(galleryFor("archive")).toBeNull();
    expect(galleryFor(null)).toBeNull();
  });

  it("accepts deletions only inside a managed folder", () => {
    expect(isManagedPublicId("larashley/functional/mug-1")).toBe(true);
    expect(isManagedPublicId("larashley/art/vessel-1")).toBe(true);
    expect(isManagedPublicId("another-site/art/vessel-1")).toBe(false);
    expect(isManagedPublicId("larashley/functionalish/mug-1")).toBe(false);
    expect(isManagedPublicId("larashley/art/../private/vessel-1")).toBe(false);
  });

  it("normalizes useful alt text and rejects empty or excessive text", () => {
    expect(normalizeAltText("  Speckled clay mug  ")).toBe("Speckled clay mug");
    expect(normalizeAltText("   ")).toBeNull();
    expect(normalizeAltText("x".repeat(281))).toBeNull();
  });

  it("escapes Cloudinary context separators", () => {
    expect(cloudinaryContext("Mug | blue = glaze")).toBe("alt=Mug \\| blue \\= glaze");
  });
});
