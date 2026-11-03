"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { type FormEvent, useRef, useState } from "react";

import { ALT_TEXT_MAX_LENGTH, galleries, type GalleryCategory } from "@/lib/gallery";

export function SignOutButton() {
  return (
    <button className="text-button" onClick={() => signOut({ callbackUrl: "/admin" })} type="button">
      Sign out
    </button>
  );
}

export function UploadForm({ category }: { category: GalleryCategory }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const title = galleries[category].title;

  async function upload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("Preparing upload…");

    const form = new FormData(event.currentTarget);
    const file = form.get("file");
    const alt = form.get("alt");

    try {
      if (!(file instanceof File) || !file.size) throw new Error("Choose an image");

      const signedResponse = await fetch("/api/admin/upload-signature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, alt }),
      });
      const signed = await signedResponse.json();
      if (!signedResponse.ok) throw new Error(signed.error || "Upload could not be authorized");

      const uploadData = new FormData();
      uploadData.set("file", file);
      for (const key of ["apiKey", "context", "folder", "signature", "timestamp"] as const) {
        uploadData.set(key === "apiKey" ? "api_key" : key, String(signed[key]));
      }

      setStatus("Uploading image…");
      const response = await fetch(`https://api.cloudinary.com/v1_1/${signed.cloudName}/image/upload`, {
        method: "POST",
        body: uploadData,
      });
      if (!response.ok) throw new Error("Cloudinary rejected the upload");

      formRef.current?.reset();
      setStatus("Uploaded.");
      router.refresh();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="upload-form" onSubmit={upload} ref={formRef}>
      <h3>Add {title.toLowerCase()}</h3>
      <label>
        Image
        <input accept="image/*" name="file" required type="file" />
      </label>
      <label>
        Image description
        <input maxLength={ALT_TEXT_MAX_LENGTH} name="alt" placeholder="Speckled stoneware mug with blue glaze" required />
      </label>
      <button className="button" disabled={busy} type="submit">
        {busy ? "Uploading…" : `Add to ${title}`}
      </button>
      <p aria-live="polite" className="form-status">{status}</p>
    </form>
  );
}

export function DeleteButton({ publicId, alt }: { publicId: string; alt: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function remove() {
    if (!window.confirm(`Delete “${alt}”? This cannot be undone.`)) return;
    setBusy(true);
    try {
      const response = await fetch("/api/admin/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "The image could not be deleted");
      }

      router.refresh();
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "The image could not be deleted");
    } finally {
      setBusy(false);
    }
  }

  return (
    <button className="delete-button" disabled={busy} onClick={remove} type="button">
      {busy ? "Deleting…" : "Delete"}
    </button>
  );
}
