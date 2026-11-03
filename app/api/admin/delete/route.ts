import { getAdminSession } from "@/lib/auth";
import { cloudinary, cloudinaryConfigured } from "@/lib/cloudinary";
import { isManagedPublicId } from "@/lib/gallery";

export async function POST(request: Request) {
  if (!(await getAdminSession())) {
    return Response.json({ error: "Not authorized" }, { status: 403 });
  }

  if (!cloudinaryConfigured) {
    return Response.json({ error: "Image storage is not configured" }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  if (!isManagedPublicId(body?.publicId)) {
    return Response.json({ error: "Invalid image" }, { status: 400 });
  }

  const result = await cloudinary.uploader.destroy(body.publicId, {
    invalidate: true,
  });

  if (result.result !== "ok" && result.result !== "not found") {
    return Response.json({ error: "Image could not be deleted" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
