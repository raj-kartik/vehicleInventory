
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { productAssets } from "../../data/Product/ProductVehicleData";

const TableContainer = styled.div`
  background: #232531;
  border-radius: 16px;
  padding: 2rem 1.2rem;
  max-width: 900px;
  box-shadow: 0 6px 16px #0001;
  margin: 1.2rem auto;
  overflow-x: auto;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background: transparent;
  min-width: 660px;

  thead tr {
    background: linear-gradient(90deg, #563d7c 0, #6f42c1 100%);
  }

  th, td {
    padding: 0.75rem 1rem;
    text-align: center;
  }

  th {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border: none;
  }

  td {
    color: #dedede;
    border-bottom: 1px solid #38395c;
    font-size: 0.98rem;
    vertical-align: middle;
    background: #232531;
  }

  tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: 720px) {
    min-width: 520px;
    th, td { padding: 0.55rem 0.5rem; }
  }
  @media (max-width: 540px) {
    min-width: 420px;
    th, td { padding: 0.5rem 0.32rem; font-size: 0.96rem; }
  }
`;

const Img = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: #171821;
  object-fit: contain;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 0.6em;
  justify-content: center;
`;

const ActionBtn = styled.button`
  background: none;
  border: none;
  color: #ff7f50;
  font-size: 1.15em;
  cursor: pointer;

  &:hover { color: #5e84ed; }
`;

const StyledLink = styled.a`
  color: #6f9ae6;
  text-decoration: underline;
  word-break: break-all;
  &:hover { color: #b7d8fd; }
`;

// const AddBtn = styled.button`
//   background: #6f42c1;
//   color: #fff;
//   border: none;
//   border-radius: 50%;
//   width: 2.5em;
//   height: 2.5em;
//   font-size: 2em;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   float: right;
//   margin-bottom: 1rem;
//   cursor: pointer;
//   box-shadow: 0 2px 8px #0002;
//   transition: background 0.1s;
//   &:hover { background: #896fe2; }
// `;

export default function ProductManagement() {
  return (
    <TableContainer>
      {/* <AddBtn title="Add Asset">+</AddBtn> */}
      <Table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Image</th>
            <th>Image Info</th>
            <th>Image URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productAssets.map((row, idx) => (
            <tr key={row.id}>
              <td>{idx + 1}</td>
              <td><Img src={row.image} alt={row.info} /></td>
              <td>{row.info}</td>
              <td>
                <StyledLink href={row.url} target="_blank" rel="noopener noreferrer">
                  {row.url}
                </StyledLink>
              </td>
              <td>
                <ActionGroup>
                  <ActionBtn title="Edit"><FaEdit /></ActionBtn>
                  <ActionBtn title="Delete"><FaTrash /></ActionBtn>
                </ActionGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}
