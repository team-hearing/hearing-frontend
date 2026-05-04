"use client";

import { useEffect, useState } from "react";
import type { EventUpdateBody } from "@/lib/api/client";

export interface ManageInformItem {
  eventName?: string;
  eventDate?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  keyFigures?: string;
}

interface ManageInformProps {
  item: ManageInformItem | null | undefined;
  onSave?: (updated: EventUpdateBody) => Promise<void>;
}

export default function ManageInform({ item, onSave }: ManageInformProps) {
  const inputStyle = "border rounded w-full px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400";
  const labelStyle = "text-xs font-medium text-gray-600";
  const fieldStyle = "flex flex-col gap-1";

  const [form, setForm] = useState<ManageInformItem>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (item) setForm(item);
  }, [item]);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSaved(false);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    if (!onSave) return;
    setSaving(true);
    try {
      await onSave({
        eventName: form.eventName,
        eventDate: form.eventDate,
        startDate: form.startDate,
        endDate: form.endDate,
        description: form.description,
        keyFigures: form.keyFigures,
      });
      setSaved(true);
    } finally {
      setSaving(false);
    }
  };

  if (!item) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        {/* 좌: 날짜·기간 */}
        <div className="w-1/2 flex flex-col gap-3">
          <div className={fieldStyle}>
            <label className={labelStyle}>Event Name</label>
            <input
              className={inputStyle}
              type="text"
              name="eventName"
              value={form.eventName ?? ""}
              onChange={handle}
            />
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle}>Event Date</label>
            <input
              className={inputStyle}
              type="date"
              name="eventDate"
              value={form.eventDate ?? ""}
              onChange={handle}
            />
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle}>Start Date</label>
            <input
              className={inputStyle}
              type="date"
              name="startDate"
              value={form.startDate ?? ""}
              onChange={handle}
            />
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle}>End Date</label>
            <input
              className={inputStyle}
              type="date"
              name="endDate"
              value={form.endDate ?? ""}
              onChange={handle}
            />
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle}>Key Figures</label>
            <input
              className={inputStyle}
              type="text"
              name="keyFigures"
              value={form.keyFigures ?? ""}
              onChange={handle}
            />
          </div>
        </div>

        {/* 우: 설명 */}
        <div className="w-1/2 flex flex-col gap-1">
          <label className={labelStyle}>Description</label>
          <textarea
            className={`${inputStyle} resize-none flex-1 h-full min-h-[160px]`}
            name="description"
            value={form.description ?? ""}
            onChange={handle}
          />
        </div>
      </div>

      {/* 저장 */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={saving || !onSave}
          className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? "저장 중…" : "저장"}
        </button>
        {saved && <span className="text-sm text-green-600">저장 완료</span>}
      </div>
    </div>
  );
}
