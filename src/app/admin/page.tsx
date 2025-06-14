import Link from "next/link";

async function getData() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/hist-events/grouped-by-year`, {
      cache: 'no-store', // SSR을 위해 캐싱 비활성화
    });

    //fetch메서드는 네트워크 오류(예: 서버 연결 실패)가 아닌 한, 404나 500 같은 HTTP 오류 상태 코드에서도 reject되지 않는다. 
    //직접 thow error처리 필요
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return { data, error: null };

  } catch (error:any) {
    console.error('Error fetching data:', error);
    return { data: null, error: error.message };
  }
}


export default async function Admin() {
  const {data:events,error} = await getData();

  return (
    <div>
      <h1>역사 사건 목록</h1>

      {Object.keys(events).length?
      <>
        {Object.keys(events).map((year) => {
          return (
            <div key={year}>
              {events[year].map((eventItem:any)=>{
                return(
                  <li key={eventItem.eventId} className="w-full">
                    <Link href={`/admin/${eventItem.eventId}`}>
                      <span>{year}</span>
                      <span>{eventItem.eventName}</span>
                      <span>{eventItem.eventDate}</span>
                      <span>{eventItem.description}</span>
                    </Link>
                  </li>
                )
              })

              }
            </div>
          );
        })}
      </>:
      <div>데이터 없음</div>
      }  
    </div>
  );
}


