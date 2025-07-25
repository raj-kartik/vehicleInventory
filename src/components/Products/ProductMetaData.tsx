export default function ProductMetaData({ data }:any) {
  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:'3rem 4rem'}}>
      <div>
        <div style={{color:'#b9bcbe', fontWeight:600}}>Foot Type</div>
        <div style={{fontWeight:500}}>{data.footType}</div>
        <div style={{color:'#b9bcbe', fontWeight:600}}>Height</div>
        <div style={{fontWeight:500}}>{data.height.join(', ')}</div>
      </div>
      <div>
        <div style={{color:'#b9bcbe', fontWeight:600}}>Foot Distance</div>
        <div style={{fontWeight:500}}>{data.footDistance.join(', ')}</div>
        <div style={{color:'#b9bcbe', fontWeight:600}}>Hardware</div>
        <div style={{fontWeight:500}}>{data.hardware.join(', ')}</div>
      </div>
      <div>
        <div style={{color:'#b9bcbe', fontWeight:600}}>Technology</div>
        <div style={{fontWeight:500}}>{data.technology}</div>
      </div>
    </div>
  );
}
