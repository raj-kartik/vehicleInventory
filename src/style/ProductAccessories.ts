import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
  @media (max-width: 700px) {
    gap: 0.8rem;
  }
`;

export const Card = styled.div`
  background: #181924;
  border-radius: 10px;
  padding: 1rem 0.8rem;
  min-width: 95px;
  max-width: 112px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 8px #0002;
  @media (max-width: 600px) {
    min-width: 70px;
    max-width: 92px;
    padding: 0.65rem 0.3rem;
  }
`;

export const Img = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
  background: #232531;
  border-radius: 8px;
`;

export const Label = styled.div`
  color: #dedede;
  font-size: .97rem;
  margin-top: 0.75em;
  text-align: center;
  word-break: break-word;
`;
