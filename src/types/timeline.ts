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
  url: string;
  alt?: string;
  source: string;
  sourceUrl?: string;
  author?: string;
  license: ImageLicense;
  licenseUrl?: string;
}

export interface TimelineEvent {
  eventId: number;
  eventName: string;
  description: string;
  event_date: string;
  start_date: string;
  end_date: string;
  thumbnail: ImageMeta | null;
  images?: ImageMeta[];
  videos?: { url: string; source?: string }[];
}

export type TimelineData = {
  [year: number]: TimelineEvent[];
};
