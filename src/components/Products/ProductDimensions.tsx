export default function ProductDimensions({ data }:any) {
  // Use a card grid for mobile
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
    gap: '1.3rem',
    maxWidth: 500
  };
  return (
    <div style={gridStyle}>
      <div>
        <div style={{color:'#b9bcbe'}}>Height</div>
        <div style={{fontWeight:600}}>{data.height}</div>
      </div>
      <div>
        <div style={{color:'#b9bcbe'}}>Width</div>
        <div style={{fontWeight:600}}>{data.width}</div>
      </div>
      <div>
        <div style={{color:'#b9bcbe'}}>Depth</div>
        <div style={{fontWeight:600}}>{data.depth}</div>
      </div>
      <div>
        <div style={{color:'#b9bcbe'}}>Weight</div>
        <div style={{fontWeight:600}}>{data.weight}</div>
      </div>
      <div>
        <div style={{color:'#b9bcbe'}}>Voltage</div>
        <div style={{fontWeight:600}}>{data.voltage}</div>
      </div>
      <div>
        <div style={{color:'#b9bcbe'}}>Power Rating</div>
        <div style={{fontWeight:600}}>{data.powerRating}</div>
      </div>
    </div>
  );
}
