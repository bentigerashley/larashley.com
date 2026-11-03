import Image from "next/image";

import type { GalleryImage as GalleryImageData } from "@/lib/cloudinary";

function transformed(url: string, width: number) {
  return url.replace("/image/upload/", `/image/upload/f_auto,q_auto,c_limit,w_${width}/`);
}

export function GalleryImage({ image }: { image: GalleryImageData }) {
  const ratio = `${image.width} / ${image.height}`;
  const isCloudinaryImage = image.url.includes("/image/upload/");

  return (
    <a
      className="gallery-image"
      href={image.url}
      rel="noreferrer"
      target="_blank"
      aria-label={`${image.alt}. Open full-size image in a new tab.`}
    >
      {isCloudinaryImage ? (
        <img
          src={transformed(image.url, 960)}
          srcSet={[480, 720, 960, 1440].map((width) => `${transformed(image.url, width)} ${width}w`).join(", ")}
          sizes="(max-width: 699px) 92vw, (max-width: 1099px) 45vw, 30vw"
          width={image.width}
          height={image.height}
          style={{ aspectRatio: ratio }}
          alt={image.alt}
          loading="lazy"
        />
      ) : (
        <Image
          src={image.url}
          sizes="(max-width: 1120px) 33vw, 360px"
          width={image.width}
          height={image.height}
          style={{ aspectRatio: ratio }}
          alt={image.alt}
        />
      )}
    </a>
  );
}
