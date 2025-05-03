import Link from "next/link";

// const mockData = [
//   {
//     year: 2025,
//     event_id: 1,
//     description: "",
//     start_date: "2025-01-01",
//     end_date: "2025-01-01",
//     event_date: "2025-01-01",
//     event_name: "",
//     hist_image: [""],
//     hist_video: [""],
//     key_figures: "",
//   },
// ];

const mockData = [
  {
    year: 2025,
    event_id: 1,
    description: "",
    start_date: "2025-01-01",
    end_date: "2025-01-01",
    event_date: "2025-01-01",
    event_name: "",
    hist_image: [
      { id: "1", url: "/images/photo1.jpg", position: 1 },
      { id: "2", url: "/images/photo2.jpg", position: 2 },
      { id: "3", url: "/images/photo3.jpg", position: 3 },
      { id: "4", url: "/images/photo4.jpg", position: 4 },
    ],
    hist_video: [
      { id: "1", url: "/images/photo1.jpg", position: 1 },
      { id: "2", url: "/images/photo2.jpg", position: 2 },
      { id: "3", url: "/images/photo3.jpg", position: 3 },
      { id: "4", url: "/images/photo4.jpg", position: 4 },
    ],
    key_figures: "",
  },
];

export default function Admin() {
  return (
    <div>
      <h1>역사 사건 목록</h1>

      {mockData.map((histEvent) => {
        return (
          <li key={histEvent.event_id} className="w-full">
            <Link href={`/admin/${histEvent.event_id}`}>{histEvent.year}</Link>
          </li>
        );
      })}
    </div>
  );
}
