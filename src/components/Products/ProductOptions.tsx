import styled from "styled-components";

const SectionBlock = styled.div`
  margin-bottom: 1.5em;
`;

/* Colors: Squares in a row, wrap on small screens */
const ColorsRow = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`;

const ColorDot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({ color }) => color};
  border: 2px solid #2b2c39;
  box-shadow: 0 1px 4px #0001;
`;

/* Tags for Dimensions */
const Tag = styled.span`
  background: #181924;
  color: #fff;
  border-radius: 7px;
  padding: 0.30em 0.9em;
  font-size: 1em;
  font-weight: 500;
  margin-right: 0.6em;
  margin-bottom: 0.4em;
  display: inline-block;
`;

/* Button style for controls */
const ControlBtn = styled.button`
  background: #181924;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 0.42em 1.2em;
  font-size: 1em;
  font-weight: 500;
  margin-right: 0.6em;
  margin-bottom: 0.4em;
  cursor: pointer;
  &:hover { background: #5e84ed; }
`;

const Label = styled.div`
  font-size: 0.98rem;
  color: #dedede;
  margin-bottom: 0.45em;
  font-weight: 500;
`;

/* Responsive container for sections */
const ResponsiveBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3em;

  @media (max-width: 400px) {
    gap: 0.7em;
  }
`;

export default function ProductOptions({ data }:any) {
  return (
    <ResponsiveBlock>
      {/* Colors */}
      <SectionBlock>
        <Label>Colors*</Label>
        <ColorsRow>
          {data.colors.map((clr:any, i:number) => (
            <ColorDot key={i} color={clr.code} title={clr.label} />
          ))}
        </ColorsRow>
      </SectionBlock>

      {/* Dimensions */}
      <SectionBlock>
        <Label>Dimensions*</Label>
        <div style={{display: "flex", gap: ".6em", flexWrap: "wrap"}}>
          {data.dimensions.map((dim:any, i:number) => (
            <Tag key={i}>{dim.h} H × {dim.w} W (cm)</Tag>
          ))}
        </div>
      </SectionBlock>

      {/* Controls */}
      <SectionBlock>
        <Label>Control</Label>
        <div style={{display: "flex", gap: ".6em", flexWrap: "wrap"}}>
          {data.controls.map((c:any, i:number) => (
            <ControlBtn key={i}>{c.name}</ControlBtn>
          ))}
        </div>
      </SectionBlock>
    </ResponsiveBlock>
  );
}
