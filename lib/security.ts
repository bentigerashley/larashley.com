const ADMIN_EMAILS = new Set(["lara.ashley@gmail.com", "bentiger.ashley@gmail.com"]);

export function isAdminPreviewEnabled(
  previewMode = process.env.ADMIN_PREVIEW_MODE,
  nodeEnv = process.env.NODE_ENV,
) {
  return previewMode === "true" && nodeEnv !== "production";
}

export function isAllowedAdminEmail(email: string | null | undefined) {
  return ADMIN_EMAILS.has(email?.trim().toLowerCase() ?? "");
}

export function isAllowedGoogleProfile(email: string | null | undefined, emailVerified: boolean) {
  return emailVerified && isAllowedAdminEmail(email);
}
