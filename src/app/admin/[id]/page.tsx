"use client";
import { usePathname } from "next/navigation";
import ManageGallery from "../(components)/ManageGallery";
import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "next/navigation";
import ManageInform from "../(components)/ManageInform";


export default function AdminDetail() {
  
  const boxStyle = "p-4 border rounded shadow-sm bg-white";
  // const inputStyle = "border rounded w-full";
  // const inputItemStyle = "flex flex-col gap-1";

  // const pathname = usePathname();
  // const [images, setImages] = useState(mockData.hist_image);

  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState(null);
  const [eventImages, setEventImages] = useState([])

  const getEventDetail = async()=>{
    try {
      const res = await fetch(`/api/hist-events/${id}`,{cache: 'no-store'});
      const data = await res.json(); 
      setEventDetail(data)
    } catch (error) {
      
    }
  }

  const getEventImage = async()=>{
    try {
      const res = await fetch(`/api/hist-images/${id}`,{cache: 'no-store'});
      const data = await res.json(); 
      setEventImages(data)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getEventDetail();
    getEventImage();
  
  },[])


  return (
    <div className="flex flex-col gap-4">

      <div className={`${boxStyle}`}>
        <ManageInform item ={eventDetail}></ManageInform>
      </div>

      <div className={`${boxStyle}`}>
        <ManageGallery sectionTitle="PHOTO" imgData={eventImages}></ManageGallery>
      </div>

      <div className={`${boxStyle}`}></div>
    </div>
  );
}
