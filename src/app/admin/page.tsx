import Link from "next/link";

const mockData = [
  {
    year: 2025,
    event_id: 1,
    description: "",
    start_date: "2025-01-01",
    end_date: "2025-01-01",
    event_date: "2025-01-01",
    event_name: "",
    hist_image: [""],
    hist_video: [""],
    key_figures: "",
  },
];

export default function Admin() {
  return (
    <div>
      <h1>역사 사건 목록</h1>

      {mockData.map((histEvent) => {
        return (
          <li key={histEvent.event_id}>
            <Link href={`/admin/${histEvent.event_id}`}>{histEvent.year}</Link>
          </li>
        );
      })}
    </div>
  );
}
