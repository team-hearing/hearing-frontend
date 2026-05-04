"use client";

import { useEffect, useRef, useState } from "react";
import { api } from "@/lib/api/client";

interface GalleryImage {
  imageId: number;
  imageUrl: string;
  alt?: string;
  position: number;
}

interface ManageGalleryProps {
  sectionTitle?: string;
  eventId: number;
  imgData: GalleryImage[];
  onUpdate?: (newImages: GalleryImage[]) => void;
}

export default function ManageGallery({
  sectionTitle = "",
  eventId,
  imgData = [],
  onUpdate,
}: ManageGalleryProps) {
  const [imgList, setImgList] = useState<GalleryImage[]>([]);
  const [dragTargetId, setDragTargetId] = useState<number | null>(null);
  const [dragOverId, setDragOverId] = useState<number | null>(null);

  // 이미지 추가 폼
  const [showAddForm, setShowAddForm] = useState(false);
  const [addUrl, setAddUrl] = useState("");
  const [addAlt, setAddAlt] = useState("");
  const [addSource, setAddSource] = useState("");
  const [adding, setAdding] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const urlInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setImgList(imgData);
  }, [imgData]);

  useEffect(() => {
    if (showAddForm) urlInputRef.current?.focus();
  }, [showAddForm]);

  // ── 드래그&드롭 ──────────────────────────────────────────────────────────────

  const handleDragStart = (e: React.DragEvent, imageId: number) => {
    e.dataTransfer.setData("text/plain", imageId.toString());
    setDragTargetId(imageId);
  };

  const handleDragOver = (e: React.DragEvent, imageId: number) => {
    e.preventDefault();
    setDragOverId(imageId);
  };

  const handleDragLeave = () => setDragOverId(null);

  const handleDrop = async (e: React.DragEvent, dropId: number) => {
    e.preventDefault();
    const dragId = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (dragId === dropId) {
      setDragOverId(null);
      return;
    }

    const newList = [...imgList];
    const fromIdx = newList.findIndex((i) => i.imageId === dragId);
    const toIdx = newList.findIndex((i) => i.imageId === dropId);
    if (fromIdx === -1 || toIdx === -1) return;

    const [moved] = newList.splice(fromIdx, 1);
    newList.splice(toIdx, 0, moved);
    const reindexed = newList.map((img, idx) => ({ ...img, position: idx }));

    setImgList(reindexed);
    setDragOverId(null);
    setDragTargetId(null);

    try {
      setError(null);
      await api.reorderImages(eventId, reindexed.map((i) => i.imageId));
      onUpdate?.(reindexed);
    } catch (err) {
      setError("순서 변경 실패: " + (err instanceof Error ? err.message : "오류"));
      setImgList(imgData); // 롤백
    }
  };

  // ── 이미지 추가 ──────────────────────────────────────────────────────────────

  const handleAdd = async () => {
    if (!addUrl.trim()) return;
    setAdding(true);
    setError(null);
    try {
      const updated = await api.addImage(eventId, {
        url: addUrl.trim(),
        alt: addAlt.trim() || undefined,
        source: addSource.trim() || "직접 추가",
        primary: imgList.length === 0,
      });
      const newImgs: GalleryImage[] = (updated.images ?? []).map((img, idx) => ({
        imageId: img.imageId!,
        imageUrl: img.url,
        alt: img.alt,
        position: img.sortOrder ?? idx,
      }));
      setImgList(newImgs);
      onUpdate?.(newImgs);
      setAddUrl("");
      setAddAlt("");
      setAddSource("");
      setShowAddForm(false);
    } catch (err) {
      setError("추가 실패: " + (err instanceof Error ? err.message : "오류"));
    } finally {
      setAdding(false);
    }
  };

  // ── 이미지 삭제 ──────────────────────────────────────────────────────────────

  const handleDelete = async (imageId: number) => {
    setError(null);
    const prev = imgList;
    setImgList((list) => list.filter((i) => i.imageId !== imageId));
    try {
      await api.deleteImage(eventId, imageId);
      const next = prev.filter((i) => i.imageId !== imageId).map((img, idx) => ({ ...img, position: idx }));
      onUpdate?.(next);
    } catch (err) {
      setError("삭제 실패: " + (err instanceof Error ? err.message : "오류"));
      setImgList(prev); // 롤백
    }
  };

  // ── 렌더 ─────────────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col gap-3">
      {sectionTitle && <h2 className="font-semibold text-sm">{sectionTitle}</h2>}
      <p className="text-xs text-gray-500">드래그&드롭으로 순서 변경 가능. 첫 번째 이미지가 썸네일(primary)이 됩니다.</p>

      {error && <p className="text-xs text-red-500">{error}</p>}

      <div className="grid grid-cols-4 gap-3">
        {/* 이미지 추가 버튼 */}
        <div
          className="aspect-square bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors"
          onClick={() => setShowAddForm(true)}
        >
          <span className="text-2xl text-gray-400">+</span>
          <span className="text-xs text-gray-400 mt-1">이미지 추가</span>
        </div>

        {imgList.map((imgItem, index) => (
          <div
            key={imgItem.imageId}
            className={`relative aspect-square bg-white rounded-lg shadow-sm cursor-move border-2 transition-colors ${
              dragOverId === imgItem.imageId
                ? "border-blue-400 bg-blue-50"
                : index === 0
                ? "border-yellow-400"
                : "border-transparent"
            }`}
            draggable
            onDragStart={(e) => handleDragStart(e, imgItem.imageId)}
            onDragOver={(e) => handleDragOver(e, imgItem.imageId)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, imgItem.imageId)}
          >
            <img
              src={imgItem.imageUrl}
              alt={imgItem.alt ?? `Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
              draggable={false}
            />
            {index === 0 && (
              <span className="absolute top-1 left-1 bg-yellow-400 text-xs px-1 rounded font-medium">
                Primary
              </span>
            )}
            <button
              className="absolute top-1 right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center hover:bg-red-600"
              onClick={() => handleDelete(imgItem.imageId)}
              title="삭제"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* 이미지 추가 폼 */}
      {showAddForm && (
        <div className="border rounded-lg p-3 bg-gray-50 flex flex-col gap-2">
          <p className="text-sm font-medium">이미지 URL 추가</p>
          <input
            ref={urlInputRef}
            className="border rounded px-2 py-1 text-sm w-full"
            type="url"
            placeholder="이미지 URL *"
            value={addUrl}
            onChange={(e) => setAddUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
          <input
            className="border rounded px-2 py-1 text-sm w-full"
            type="text"
            placeholder="Alt 텍스트"
            value={addAlt}
            onChange={(e) => setAddAlt(e.target.value)}
          />
          <input
            className="border rounded px-2 py-1 text-sm w-full"
            type="text"
            placeholder="출처 (미입력 시 '직접 추가')"
            value={addSource}
            onChange={(e) => setAddSource(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              disabled={adding || !addUrl.trim()}
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {adding ? "추가 중…" : "추가"}
            </button>
            <button
              onClick={() => { setShowAddForm(false); setAddUrl(""); setAddAlt(""); setAddSource(""); }}
              className="px-3 py-1 bg-gray-200 text-sm rounded hover:bg-gray-300"
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
