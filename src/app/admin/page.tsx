import Link from "next/link";
import { api, type EventsByYear } from "@/lib/api/client";
import type { TimelineEvent } from "@/types/timeline";

async function getData(): Promise<{ data: EventsByYear | null; error: string | null }> {
  try {
    const data = await api.getEventsByYear();
    return { data, error: null };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[admin] BE fetch failed:", msg);
    return { data: null, error: msg };
  }
}

export default async function Admin() {
  const { data: events, error } = await getData();

  return (
    <div>
      <h1>역사 사건 목록</h1>

      {error && <div className="text-red-600 text-sm mb-2">BE 응답 실패: {error}</div>}

      {events && Object.keys(events).length > 0 ? (
        Object.keys(events).map((year) => (
          <div key={year}>
            <h2 className="font-bold mt-4">{year}</h2>
            {(events[year] as TimelineEvent[]).map((eventItem) => (
              <li key={eventItem.eventId} className="w-full list-none">
                <Link href={`/admin/${eventItem.eventId}`} className="flex gap-2 hover:bg-gray-100 px-2 py-1">
                  <span>{year}</span>
                  <span className="font-medium">{eventItem.eventName}</span>
                  <span className="text-gray-500">{eventItem.eventDate ?? ""}</span>
                  <span className="text-gray-400 truncate max-w-md">{eventItem.description ?? ""}</span>
                </Link>
              </li>
            ))}
          </div>
        ))
      ) : (
        !error && <div>데이터 없음</div>
      )}
    </div>
  );
}
