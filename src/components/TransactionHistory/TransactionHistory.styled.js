import styled from "@emotion/styled";

export const TransactionTable = styled.table`
    border-collapse: collapse;
    margin: 0 auto;
    margin-top: 50px;
    width: 50%;
    text-align: center;
    box-shadow: ${props => props.theme.filters.shadow};
    margin-bottom: 50px;
`;

export const TableHeaders = styled.th`
    text-transform: uppercase;
     border: 1px solid #ddd;
  padding: 12px;
  background-color: #4ac8db;
  color: white;
`;

export const TableRows = styled.tr`
    :nth-of-type(even){background-color: #f2f2f2;}
`;

export const TableData = styled.td`
     border: 1px solid #ddd;
     text-transform: capitalize;
     padding: 6px 0;
  padding: 8px;
  color: ${props => props.theme.colors.grayText};
`;