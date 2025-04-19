import { useState } from "react";

const mockData = {
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
};

export default function AdminDetail() {
  const [images, setImages] = useState(mockData.hist_image);
  const [draggedIndex, setDraggedIndex] = useState<null | number>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // 필수! drop 허용
  };

  const handleDrop = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;

    const updated = [...images];
    const [moved] = updated.splice(draggedIndex, 1);
    updated.splice(index, 0, moved);
    setImages(updated);
    setDraggedIndex(null);
  };

  return (
    <div>
      <h1>{mockData.event_name}</h1>

      <div>
        <h2>thumbnail</h2>
        <div>
          <div>
            <label>Event Name</label>
            <input type="text" name="event_name" id="" />
          </div>
          <div>
            <label>Event Date</label>
            <input type="text" name="event_name" id="" />
          </div>
          <div>
            <label>Event Start Date</label>
            <input type="text" name="event_name" id="" />
          </div>
          <div>
            <label>Event End Date</label>
            <input type="text" name="event_name" id="" />
          </div>
        </div>
      </div>

      <div>
        <h2>Description</h2>
        <div></div>
      </div>

      <div>
        <h2>Photo</h2>
        <div>
          {mockData.hist_image.map((imgItem) => {
            return (
              <div
                key={imgItem.id}
                draggable
                onDragStart={() => handleDragStart(imgItem.position)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(imgItem.position)}
              >
                <img src="" alt="image" />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2>Video</h2>
        <div></div>
      </div>
    </div>
  );
}
