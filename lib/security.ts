const ADMIN_EMAILS = new Set(["lara.ashley@gmail.com", "bentiger.ashley@gmail.com"]);

export function isAllowedAdminEmail(email: string | null | undefined) {
  return ADMIN_EMAILS.has(email?.trim().toLowerCase() ?? "");
}

export function isAllowedGoogleProfile(email: string | null | undefined, emailVerified: boolean) {
  return emailVerified && isAllowedAdminEmail(email);
}
