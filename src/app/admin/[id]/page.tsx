"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ManageGallery from "../(components)/ManageGallery";
import ManageInform, { type ManageInformItem } from "../(components)/ManageInform";
import { api, ApiError, type EventUpdateBody } from "@/lib/api/client";
import type { TimelineEvent } from "@/types/timeline";
import Link from "next/link";

export default function AdminDetail() {
  const boxStyle = "p-4 border rounded shadow-sm bg-white";

  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [eventDetail, setEventDetail] = useState<TimelineEvent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    if (!Number.isFinite(id)) return;
    let cancelled = false;
    api
      .getEvent(id)
      .then((data) => { if (!cancelled) setEventDetail(data); })
      .catch((err: unknown) => {
        if (cancelled) return;
        if (err instanceof ApiError) setError(`BE ${err.status}: ${err.message}`);
        else setError(err instanceof Error ? err.message : String(err));
      });
    return () => { cancelled = true; };
  }, [id]);

  // ManageInform이 받는 형태로 변환
  const informItem: ManageInformItem | null = eventDetail
    ? {
        eventName: eventDetail.eventName,
        eventDate: eventDetail.eventDate ?? undefined,
        startDate: eventDetail.startDate ?? undefined,
        endDate: eventDetail.endDate ?? undefined,
        description: eventDetail.description,
        keyFigures: eventDetail.keyFigures,
      }
    : null;

  const handleSave = async (updated: EventUpdateBody) => {
    setSaveError(null);
    try {
      const result = await api.updateEvent(id, updated);
      setEventDetail(result);
    } catch (err) {
      const msg = err instanceof ApiError
        ? `저장 실패 (${err.status}): ${err.message}`
        : `저장 실패: ${err instanceof Error ? err.message : String(err)}`;
      setSaveError(msg);
      throw err; // ManageInform에서 저장 완료 표시 안 되도록
    }
  };

  // 갤러리 이미지 업데이트 시 eventDetail 동기화
  const handleGalleryUpdate = (newImages: { imageId: number; imageUrl: string; alt?: string; position: number }[]) => {
    setEventDetail((prev) =>
      prev
        ? {
            ...prev,
            images: newImages.map((img) => ({
              imageId: img.imageId,
              url: img.imageUrl,
              alt: img.alt,
              source: "",
              license: "OTHER" as const,
            })),
          }
        : prev
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {/* 헤더 */}
      <div className="flex items-center gap-3">
        <Link href="/admin" className="text-sm text-gray-500 hover:text-gray-700">← 목록</Link>
        <h1 className="font-bold text-lg">{eventDetail?.eventName ?? `사건 #${id}`}</h1>
      </div>

      {error && <div className="text-red-600 text-sm">{error}</div>}
      {saveError && <div className="text-red-500 text-sm">{saveError}</div>}

      {/* 기초 정보 */}
      <div className={boxStyle}>
        <h2 className="font-semibold text-sm mb-3">기초 정보</h2>
        <ManageInform item={informItem} onSave={handleSave} />
      </div>

      {/* 이미지 갤러리 */}
      <div className={boxStyle}>
        <ManageGallery
          sectionTitle="PHOTO"
          eventId={id}
          imgData={(eventDetail?.images ?? []).map((img, idx) => ({
            imageId: img.imageId!,
            imageUrl: img.url,
            alt: img.alt,
            position: img.sortOrder ?? idx,
          }))}
          onUpdate={handleGalleryUpdate}
        />
      </div>
    </div>
  );
}
