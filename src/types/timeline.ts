export type ImageLicense =
  | "CC0"
  | "CC-BY"
  | "CC-BY-SA"
  | "PUBLIC_DOMAIN"
  | "KOGL_TYPE1"
  | "KOGL_TYPE2"
  | "KOGL_TYPE3"
  | "KOGL_TYPE4"
  | "OTHER";

export interface ImageMeta {
  imageId?: number;
  url: string;
  alt?: string;
  source: string;
  sourceUrl?: string;
  author?: string;
  license: ImageLicense;
  licenseUrl?: string;
  sortOrder?: number;
}

export interface VideoMeta {
  videoId?: number;
  url: string;
  source?: string;
}

/**
 * BE 응답(camelCase, ISO date string)을 그대로 매칭한 타입.
 * - eventDate/startDate/endDate는 ISO 8601 형식의 "YYYY-MM-DD" 문자열
 */
export type EventKind = "KOREAN" | "WORLD";

export interface TimelineEvent {
  eventId: number;
  eventKind?: EventKind;
  region?: string | null;
  eventName: string;
  description?: string;
  keyFigures?: string;
  eventDate?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  thumbnail?: ImageMeta | null;
  images?: ImageMeta[];
  videos?: VideoMeta[];
}

export type TimelineDataMap = {
  [year: string]: TimelineEvent[];
};
