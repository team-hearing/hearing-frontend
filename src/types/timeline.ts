export interface TimelineEvent {
  eventId: number;
  eventName: string;
  description: string;
  event_date: string;
  start_date: string;
  end_date: string;
  thumbnail: string; // 파일 경로
  // hist_video?: string[];
  // hist_image?: string[];
}

export type TimelineData = {
  [year: number]: TimelineEvent[];
}; 