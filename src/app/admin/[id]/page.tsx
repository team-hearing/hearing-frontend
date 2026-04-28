"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ManageGallery from "../(components)/ManageGallery";
import ManageInform from "../(components)/ManageInform";
import { api, ApiError } from "@/lib/api/client";
import type { TimelineEvent } from "@/types/timeline";

export default function AdminDetail() {
  const boxStyle = "p-4 border rounded shadow-sm bg-white";

  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [eventDetail, setEventDetail] = useState<TimelineEvent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!Number.isFinite(id)) return;
    let cancelled = false;
    api
      .getEvent(id)
      .then((data) => {
        if (!cancelled) setEventDetail(data);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        if (err instanceof ApiError) {
          setError(`BE ${err.status}: ${err.message}`);
        } else {
          setError(err instanceof Error ? err.message : String(err));
        }
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  // ManageInform이 받는 형태로 변환
  const informItem = eventDetail
    ? {
        eventName: eventDetail.eventName,
        eventDate: eventDetail.eventDate ?? undefined,
        startDate: eventDetail.startDate ?? undefined,
        endDate: eventDetail.endDate ?? undefined,
        description: eventDetail.description,
      }
    : null;

  return (
    <div className="flex flex-col gap-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}

      <div className={boxStyle}>
        <ManageInform item={informItem} />
      </div>

      <div className={boxStyle}>
        <ManageGallery
          sectionTitle="PHOTO"
          imgData={(eventDetail?.images ?? []).map((img, idx) => ({
            imageId: img.imageId,
            imageUrl: img.url,
            position: idx,
          }))}
        />
      </div>
    </div>
  );
}
