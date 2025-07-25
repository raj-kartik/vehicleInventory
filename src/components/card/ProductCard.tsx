import { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Card = styled.div`
  background: #2f323c;
  color: #fff;
  border-radius: 16px;
  margin-bottom: 2rem;
  padding: 0;
  box-shadow: 0 2px 32px #00000012;
  max-width: 1100px;
  width: 100vw;
  @media (max-width: 700px) {
    border-radius: 10px;
    max-width: 100vw;
  }
`;

const CardHeader = styled.div`
  padding: 1.3rem 2rem 1.3rem 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.12rem;
  border-radius: 16px 16px 0 0;
  @media (max-width: 600px) {
    padding: 1rem 1rem 1rem 1rem;
    font-size: 1rem;
  }
`;

const CardContent = styled.div`
  padding: 0 2rem 2rem 2rem;
  @media (max-width: 600px) {
    padding: 0 0.8rem 1.3rem 0.8rem;
  }
`;

const ChevronButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.5em;
  display: flex;
  align-items: center;
`;

export default function CollapsibleCard({ title, children }: any) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((o) => !o);

  return (
    <Card>
      <CardHeader onClick={toggle}>
        {title}
        <ChevronButton aria-label={open ? "Collapse" : "Expand"}>
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </ChevronButton>
      </CardHeader>
      {open && <CardContent>{children}</CardContent>}
    </Card>
  );
}
