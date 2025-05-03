"use client";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const mockData = {
  year: 2025,
  event_id: 1,
  description: "",
  start_date: "2025-01-01",
  end_date: "2025-01-01",
  event_date: "2025-01-01",
  event_name: "",
  thumbnail: "",
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
};

export default function AdminDetail() {
  const boxStyle = "p-4 border rounded shadow-sm bg-white";
  const inputStyle = "border rounded w-full";
  const imgDropZoneStyle = "flex flex-row gap-2";
  const imgItemStyle = "min-w-xl w-[300px] h-[300px] border rounded";
  const inputItemStyle = "flex flex-col gap-1";
  const subTitleStyle = "";
  const dropZoneBaseStyle =
    "flex flex-row gap-2 p-4 border-2 border-dashed rounded min-h-[320px]";
  const dropZoneHighlightStyle = "bg-red-50 ring-2 ring-red-300";
  const draggingItemStyle = "opacity-50 cursor-grabbing";

  const pathname = usePathname();
  const crumbs = useMemo(() => {
    const pathParts = pathname.split("/").filter(Boolean); // ['admin', '2025']
    return ["main", ...pathParts.map((p) => (p === "2025" ? "2025년" : p))];
  }, [pathname]);
  // const [images, setImages] = useState(mockData.hist_image);

  const [isOverValidZone, setIsOverValidZone] = useState(false);

  const handleDragStart = (e: any) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const handleDragOver = (e: any, isValidZone: boolean) => {
    // 드래그 중인 요소가 드롭 가능한 영역 위를 지날 때 동작하는 이벤트
    // 사용자가 어떤 영역에 드롭 가능한지를 표시해주는 동작을 구현할 수 있다.
    if (isValidZone) {
      e.preventDefault();
      setIsOverValidZone(true);
    }
  };

  const handleDragLeave = () => {
    setIsOverValidZone(false);
  };

  const handleDrop = (e: any, isValidZone: boolean) => {
    e.preventDefault();
    setIsOverValidZone(false);

    if (!isValidZone) return;

    const id = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(id);

    e.target.appendChild(draggedElement);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        {crumbs.map((crumb, idx) => (
          <span key={idx}>
            {crumb}
            {idx < crumbs.length - 1 && " > "}
          </span>
        ))}
      </div>

      <div>
        <h1>{mockData.event_name}</h1>
      </div>

      <div className={`${boxStyle} flex flex-col gap-2`}>
        <div className={`flex flex-row gap-2`}>
          <div className={`w-1/2 border rounded`}>
            <img src="" alt="thumbnail" />
          </div>
          <div className="w-1/2">
            <div className={`${inputItemStyle}`}>
              <label>Event Name</label>
              <input
                className={`${inputStyle}`}
                type="text"
                name="event_name"
                id=""
              />
            </div>
            <div className={`${inputItemStyle}`}>
              <label>Event Date</label>
              <input
                className={`${inputStyle}`}
                type="text"
                name="event_name"
                id=""
              />
            </div>
            <div className={`${inputItemStyle}`}>
              <label>Event Start Date</label>
              <input
                className={`${inputStyle}`}
                type="date"
                name="event_name"
                id=""
              />
            </div>
            <div className={`${inputItemStyle}`}>
              <label>Event End Date</label>
              <input
                className={`${inputStyle}`}
                type="date"
                name="event_name"
                id=""
              />
            </div>
          </div>
        </div>

        <div>
          <h2>Description</h2>
          <textarea className={`${boxStyle} w-full`}></textarea>
        </div>
      </div>

      <div className={`${boxStyle}`}>
        <h2>Photo</h2>
        <p>
          드래그&드롭 하여 사용자에게 표출되는 이미지 순서를 변경가능합니다.
        </p>
        <div
          id="validDropZone"
          onDragOver={(e) => handleDragOver(e, true)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, true)}
          className={`${imgDropZoneStyle} ${dropZoneBaseStyle} ${
            isOverValidZone ? "dropZoneHighlightStyle " : ""
          }`}
        >
          <div className={`${imgItemStyle}flex justify-center items-center`}>
            <div>+ 이미지추가</div>
          </div>
          {mockData.hist_image.map((imgItem) => {
            return (
              <div
                key={imgItem.id}
                className={`${imgItemStyle} `}
                draggable
                onDragStart={() => handleDragStart(imgItem.position)}
              >
                <img
                  src=""
                  alt="image"
                  className={`object-cover w-full h-full rounded`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${boxStyle}`}>
        <h2>Video</h2>
        <div></div>
      </div>
    </div>
  );
}
