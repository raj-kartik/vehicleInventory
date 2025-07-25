import styled from "styled-components";

// All styled components below Panel from your previous code!
const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 1.2rem;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.6rem;
    margin-bottom: 1rem;
  }
`;
const SectionTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
const ActionButtons = styled.div`
  display: flex;
  gap: 0.7em;
`;
const ActionButton = styled.button`
  background: #181924;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.46em 1.2em;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #5e84ed;
  }
`;
const PropertiesGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3vw;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2vw;
  }
`;
const ImageWrapper = styled.div`
  background: #181924;
  border-radius: 8px;
  padding: 3vw 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 140px;
  max-width: 250px;
  width: 100%;
  @media (max-width: 900px) {
    min-width: 0;
    max-width: 100%;
    padding: 6vw 2vw;
    margin-bottom: 2rem;
  }
`;
const ProductImage = styled.img`
  width: 65%;
  max-width: 140px;
  height: auto;
  margin-bottom: 0.7em;
  @media (max-width: 600px) {
    width: 90%;
    max-width: 120px;
  }
`;
const ImageLabel = styled.div`
  margin-top: 0.5em;
  font-size: 1rem;
  color: #dedede;
  letter-spacing: 0.02em;
  text-align: center;
`;
const PropsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5vw 5vw;
  margin-left: 1.5vw;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.7rem 0;
    margin-left: 0;
  }
`;
const PropCol = styled.div`
  min-width: 160px;
  flex: 1 1 180px;
  @media (max-width: 500px) {
    min-width: 0;
    width: 100%;
  }
`;
const PropLabel = styled.div`
  font-size: 0.97rem;
  color: #a6a7b7;
`;
const PropValue = styled.div`
  font-size: 1.08rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 7px;
  word-break: break-word;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
const GreenTag = styled.span`
  display: inline-block;
  background: #277c6b;
  color: #fff;
  padding: 2px 10px;
  border-radius: 8px;
  font-size: 0.96em;
`;
const SectionBlock = styled.div`
  margin-top: 2.2rem;
  @media (max-width: 600px) {
    margin-top: 1.2rem;
  }
`;
const DescTitle = styled.div`
  color: #b9bcbe;
  font-weight: 600;
  margin-bottom: 0.3em;
  font-size: 1.05rem;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
const DescText = styled.div`
  color: #fff;
  font-size: 0.97rem;
  margin-bottom: 0.8em;
`;
const QrCode = styled.img`
  width: 3.2em;
  height: 3.2em;
  border-radius: 4px;
  margin-top: 8px;
  @media (max-width: 500px) {
    width: 2.4em;
    height: 2.4em;
  }
`;

// Pure content component:
export default function ProductDetails({ data }:any) {
  return (
    <>
      <HeaderRow>
        <SectionTitle>
          <span role="img" aria-label="icon">🔍</span> Product Base Properties
        </SectionTitle>
        <ActionButtons>
          <ActionButton>View</ActionButton>
          <ActionButton>Share</ActionButton>
        </ActionButtons>
      </HeaderRow>
      <PropertiesGrid>
        {/* Product Image column */}
        <ImageWrapper>
          <ProductImage src={data.image.src} alt={data.image.alt} />
          <ImageLabel>{data.image.label}</ImageLabel>
        </ImageWrapper>
        {/* Info Columns */}
        <PropsList>
          <PropCol>
            <PropLabel>Inventory Class*</PropLabel>
            <PropValue><GreenTag>{data.inventoryClass}</GreenTag></PropValue>
            <PropLabel>Part Number*</PropLabel>
            <PropValue>{data.partNumber}</PropValue>
            <PropLabel>Line*</PropLabel>
            <PropValue>{data.line}</PropValue>
            <PropLabel>QR Code</PropLabel>
            <QrCode src={data.qrCode} alt="QR Code" />
          </PropCol>
          <PropCol>
            <PropLabel>SKU(ID)</PropLabel>
            <PropValue>{data.sku}</PropValue>
            <PropLabel>Category*</PropLabel>
            <PropValue>{data.category}</PropValue>
            <PropLabel>Series</PropLabel>
            <PropValue>{data.series}</PropValue>
          </PropCol>
          <PropCol>
            <PropLabel>Product Type*</PropLabel>
            <PropValue>{data.productType}</PropValue>
            <PropLabel>Family*</PropLabel>
            <PropValue>{data.family}</PropValue>
            <PropLabel>Warranty</PropLabel>
            <PropValue>
              {data.warranty.duration}{" "}
              <span style={{ color: "#5e84ed" }}>{data.warranty.code}</span>
            </PropValue>
          </PropCol>
        </PropsList>
      </PropertiesGrid>
      {/* Descriptions Section */}
      <SectionBlock>
        <DescTitle>Description</DescTitle>
        <DescText>
          <strong>{data.descriptions.description.split(".")[0]}.</strong>
          {data.descriptions.description.substring(data.descriptions.description.indexOf("."))}
        </DescText>
        <DescTitle>Long Description</DescTitle>
        <DescText>{data.descriptions.longDescription}</DescText>
        <DescTitle>Marketing Description</DescTitle>
        <DescText>{data.descriptions.marketingDescription}</DescText>
      </SectionBlock>
    </>
  );
}
