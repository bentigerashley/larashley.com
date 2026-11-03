import { getAdminSession } from "@/lib/auth";
import { cloudinary, cloudinaryConfigured } from "@/lib/cloudinary";
import { cloudinaryContext, galleryFor, normalizeAltText } from "@/lib/gallery";

export async function POST(request: Request) {
  if (!(await getAdminSession())) {
    return Response.json({ error: "Not authorized" }, { status: 403 });
  }

  if (!cloudinaryConfigured) {
    return Response.json({ error: "Image storage is not configured" }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const gallery = galleryFor(body?.category);
  const alt = normalizeAltText(body?.alt);

  if (!gallery || !alt) {
    return Response.json({ error: "Choose a gallery and provide alt text" }, { status: 400 });
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const context = cloudinaryContext(alt);
  const signature = cloudinary.utils.api_sign_request(
    { context, folder: gallery.folder, timestamp },
    process.env.CLOUDINARY_API_SECRET!,
  );

  return Response.json({
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    context,
    folder: gallery.folder,
    signature,
    timestamp,
  });
}
