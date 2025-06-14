import { useEffect, useState } from "react";

interface ManageGalleryProps {
  sectionTitle: string,
  imgData:any[]
}


export default function ManageGallery({ sectionTitle = "", imgData = [] }:ManageGalleryProps) {
  const boxStyle = "p-4 border rounded shadow-sm bg-white";
  const imgDropZoneStyle = "";
  const dropZoneBaseStyle = "";
  const imgItemStyle = "";


  const [imgList, setImgList] =useState<any[]>([]);
  const [dragTargetPosition, setDragTargetPosition] = useState<null|number>(null);
  const [dragOverPosition, setDragOverPosition] = useState<null|number>(null);

  useEffect(()=>{
    setImgList(imgData)
  },[imgData])


  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, targetNum: number) => {
    //
    e.dataTransfer.setData('text/plain', targetNum.toString());
    setDragTargetPosition(targetNum)
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, dragOverNum:null|number) => {
    e.preventDefault(); 
    setDragOverPosition(dragOverNum)
  };

  const handleDragLeave = ()=>{
    setDragOverPosition(null)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropPostionNum: number) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    if (dragIndex === dropPostionNum) return;

    // 이미지 배열 재정렬
    const newImages = [...imgList];
    const [draggedImage] = newImages.splice(dragIndex, 1);
    newImages.splice(dropPostionNum, 0, draggedImage);

    setImgList(newImages);
    setDragOverPosition(null)

    //position데이터 변경 api전송

  };

  return (
    <div className={`${boxStyle}`}>
      {sectionTitle ? <h2>{sectionTitle}</h2> : <></>}
      <p>드래그&드롭 하여 사용자에게 표출되는 이미지 순서를 변경가능합니다.</p>
      
      <div
        id="validDropZone"
        className={`${imgDropZoneStyle} ${dropZoneBaseStyle}`}
      >
    
        <div className="grid grid-cols-4 gap-4 max-w-4xl w-full">
        <div className="aspect-square bg-white rounded-lg shadow-md cursor-move">
          <div>+ 이미지추가</div>
        </div>

        {imgList.map((imgItem,index) => {
          const positionNum = imgItem.position

          return (
            <div
              key={imgItem.imageId}
              className={`aspect-square bg-white rounded-lg shadow-md cursor-move ${dragOverPosition === positionNum? "bg-[#7dc1f3]":""}`}
              draggable
              onDragStart={(e) => handleDragStart(e, positionNum)}
              onDragOver={(e)=>handleDragOver(e,positionNum)}
              onDragLeave={(e)=>{handleDragLeave()}}
              onDrop={(e) => handleDrop(e, positionNum)}
            >
              <div>{positionNum}</div>
              <img
                src={imgItem.imageUrl}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          );
        })}
        </div>

        
      </div>
    </div>
  );
}
