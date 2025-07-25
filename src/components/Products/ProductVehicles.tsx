import styled from "styled-components";
import { vehicleData } from "../../data/Product/ProductVehicleData";

// Responsive Table Styles
const TableContainer = styled.div`
  background: #232531;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  overflow-x: auto;
  box-shadow: 0 2px 24px #00000010;
  max-width: 1100px;
  margin: 0 auto;
  
  @media (max-width: 600px) {
    padding: 1rem 0.3rem;
    border-radius: 10px;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  min-width: 650px;
  color: #fff;
  font-family: "Segoe UI", Arial, sans-serif;
  background: transparent;

  th, td {
    padding: 0.7rem 1.1rem;
    text-align: left;
    border-bottom: 1px solid #313346;
    font-size: 1rem;
  }
  th {
    background: #292945;
    color: #dedede;
    font-size: .97rem;
    font-weight: 700;
    letter-spacing: 0.02em;
  }
  tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: 800px) {
    th, td {
      padding: 0.55rem 0.55rem;
      font-size: .94rem;
    }
  }
  
  /* Hide header on mobile, cards instead */
  @media (max-width: 520px) {
    thead {
      display: none;
    }
    tr, td {
      display: block;
      width: 100%;
    }
    td {
      padding: 0.62rem 0.7rem;
      position: relative;
      text-align: left;
      border-bottom: 1px solid #39394c;
      font-size: .94rem;
      background: #181924;
      margin-bottom: 2px;
    }
    tr {
      background: #232531;
      margin-bottom: 1.3rem;
      border-radius: 10px;
      box-shadow: 0 1px 10px #00000007;
      margin-top: 0.8rem;
    }
    td::before {
      content: attr(data-label);
      float: left;
      font-weight: 700;
      color: #a6a7b7;
      width: 54%;
      text-transform: uppercase;
      font-size: .89em;
      letter-spacing: 0.01em;
    }
  }
`;

export default function ProductVehicle() {
  // Table columns
  const headers = [
    { label: "Identifier", key: "identifier" },
    { label: "Make", key: "make" },
    { label: "Model", key: "model" },
    { label: "Year", key: "year" },
    { label: "Trim", key: "trim" },
    { label: "Trim Description", key: "trimDescription" }
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {headers.map(h => (
              <th key={h.key}>{h.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {vehicleData.map((row:any, rIdx) => (
            <tr key={rIdx}>
              {headers.map(h => (
                <td key={h.key} data-label={h.label}>{row[h.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}