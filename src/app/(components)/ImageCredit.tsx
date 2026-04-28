import type { ImageMeta } from "@/types/timeline";

interface ImageCreditProps {
  meta: ImageMeta;
  className?: string;
}

const licenseLabel: Record<ImageMeta["license"], string> = {
  CC0: "CC0",
  "CC-BY": "CC BY",
  "CC-BY-SA": "CC BY-SA",
  PUBLIC_DOMAIN: "Public Domain",
  KOGL_TYPE1: "공공누리 1유형",
  KOGL_TYPE2: "공공누리 2유형",
  KOGL_TYPE3: "공공누리 3유형",
  KOGL_TYPE4: "공공누리 4유형",
  OTHER: "기타",
};

export default function ImageCredit({ meta, className = "" }: ImageCreditProps) {
  const sourceText = meta.author ? `${meta.source} / ${meta.author}` : meta.source;
  const license = licenseLabel[meta.license];

  return (
    <p className={`text-[10px] sm:text-xs text-gray-500 leading-tight mt-1 ${className}`}>
      ©{" "}
      {meta.sourceUrl ? (
        <a
          href={meta.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          {sourceText}
        </a>
      ) : (
        sourceText
      )}
      {" · "}
      {meta.licenseUrl ? (
        <a
          href={meta.licenseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          {license}
        </a>
      ) : (
        license
      )}
    </p>
  );
}
