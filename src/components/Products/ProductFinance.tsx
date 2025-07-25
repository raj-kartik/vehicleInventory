export default function ProductFinance({ data }:any) {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1.3rem',
    maxWidth: 700
  };
  return (
    <div style={gridStyle}>
      <div>
        <div style={{color:'#b9bcbe'}}>Material Cost</div>
        <div style={{fontWeight:600}}>{data.materialCost}</div>
      </div>
      <div>
        <div style={{color:'#b9bcbe'}}>Labor Cost</div>
        <div style={{fontWeight:600}}>{data.laborCost}</div>
      </div>
      <div>
        <div style={{color:'#b9bcbe'}}>Process Cost</div>
        <div style={{fontWeight:600}}>{data.processCost}</div>
      </div>
      <div>
        <div style={{color:'#b9bcbe'}}>Misc. Cost</div>
        <div style={{fontWeight:600}}>{data.miscCost}</div>
      </div>
      <div>
        <div style={{color:'#b9bcbe'}}>Last Price</div>
        <div style={{fontWeight:600}}>{data.lastPrice}</div>
      </div>
    </div>
  );
}
