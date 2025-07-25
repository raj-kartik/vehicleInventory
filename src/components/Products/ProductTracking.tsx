export default function ProductTracking({ data }:any) {

    // console.log("---- data in the tracking ----", data)
  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:'1.5rem'}}>
      {data.map((row:any, idx:number) => (
        <div style={{display:'flex', gap:'1.5rem'}} key={idx}>
          {row.map((pair:any, jdx:number) => (
            <div
              key={jdx}
              style={{
                background:'#181924',
                borderRadius:'8px',
                padding:'1rem 2.1rem 1rem 1.1rem',
                minWidth:'160px',
                margin:'0.2rem 0'
              }}
            >
              <div style={{color:'#a6a7b7', fontSize:'0.93rem'}}>Batch Number</div>
              <div style={{fontWeight:500}}>{pair.batch}</div>
              <div style={{color:'#a6a7b7', fontSize:'0.93rem'}}>Serial Number</div>
              <div style={{fontWeight:500}}>{pair.serial}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
