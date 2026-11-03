import type { Metadata } from "next";

import { AdminGallery } from "@/components/admin-gallery";
import { SignOutButton, UploadForm } from "@/components/admin-controls";
import { getAdminSession } from "@/lib/auth";
import { cloudinaryConfigured, listGalleryImages } from "@/lib/cloudinary";

export const metadata: Metadata = { title: "Gallery Admin", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getAdminSession();

  if (!session) {
    return (
      <main className="admin-login">
        <p className="eyebrow">Lara Ashley Ceramics</p>
        <h1>Gallery admin</h1>
        <a className="google-button" href="/api/auth/signin/google?callbackUrl=/admin">
          Sign in with Google
        </a>
      </main>
    );
  }

  const [functional, art] = await Promise.all([
    listGalleryImages("functional"),
    listGalleryImages("art"),
  ]);

  return (
    <main className="admin-page">
      <header className="admin-heading">
        <div>
          <p className="eyebrow">Gallery admin</p>
          <h1>Manage the work</h1>
          <p>Signed in as {session.user?.email}</p>
        </div>
        <SignOutButton />
      </header>

      {!cloudinaryConfigured && (
        <p className="setup-warning">Add the Cloudinary environment variables before uploading images.</p>
      )}

      <section className="upload-section" aria-label="Upload images">
        <UploadForm category="functional" />
        <UploadForm category="art" />
      </section>

      <section className="admin-collection">
        <h2>Functional Ware</h2>
        <AdminGallery images={functional} />
      </section>
      <section className="admin-collection">
        <h2>Art Pieces</h2>
        <AdminGallery images={art} />
      </section>
    </main>
  );
}
