import { describe, expect, it } from "vitest";

import {
  isAdminPreviewEnabled,
  isAllowedAdminEmail,
  isAllowedGoogleProfile,
} from "../lib/security";

describe("admin preview", () => {
  it("can only be enabled outside production", () => {
    expect(isAdminPreviewEnabled("true", "development")).toBe(true);
    expect(isAdminPreviewEnabled("true", "production")).toBe(false);
    expect(isAdminPreviewEnabled("false", "development")).toBe(false);
  });
});

describe("admin authorization", () => {
  it.each(["lara.ashley@gmail.com", "bentiger.ashley@gmail.com", "LARA.ASHLEY@GMAIL.COM"])(
    "allows %s",
    (email) => expect(isAllowedAdminEmail(email)).toBe(true),
  );

  it.each([undefined, null, "", "someone@gmail.com", "lara.ashley@gmail.com.evil.test"])(
    "rejects %s",
    (email) => expect(isAllowedAdminEmail(email)).toBe(false),
  );

  it("requires Google to have verified the address at sign-in", () => {
    expect(isAllowedGoogleProfile("lara.ashley@gmail.com", true)).toBe(true);
    expect(isAllowedGoogleProfile("lara.ashley@gmail.com", false)).toBe(false);
    expect(isAllowedGoogleProfile("someone@gmail.com", true)).toBe(false);
  });
});
