interface ManageInformItem {
  eventName?: string;
  eventDate?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export default function ManageInform({ item }: { item: ManageInformItem | null | undefined }) {
  const inputStyle = "border rounded w-full";
  const inputItemStyle = "flex flex-col gap-1";

  return item && (
    <div>
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
              name="eventName"
              id=""
              value={item.eventName }
            />
          </div>
          <div className={`${inputItemStyle}`}>
            <label>Event Date</label>
            <input
              className={`${inputStyle}`}
              type="text"
              name="eventDate"
              id=""
              value={item.eventDate}
            />
          </div>
          <div className={`${inputItemStyle}`}>
            <label>Event Start Date</label>
            <input
              className={`${inputStyle}`}
              type="date"
              name="startDate"
              id=""
              value={item.startDate}
            />
          </div>
          <div className={`${inputItemStyle}`}>
            <label>Event End Date</label>
            <input
              className={`${inputStyle}`}
              type="date"
              name="endDate"
              id=""
              value={item.endDate}
            />
          </div>
        </div>
      </div>
      <div>
        <h2>Description</h2>
        <textarea value={item.description}></textarea>
      </div>
    </div>
  );
}
