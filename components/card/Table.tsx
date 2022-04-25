import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
import { TableData } from "../../models/ComponentModel";

type TableProps = {
  variant: string;
  tableCaption: string;
  headers: string[];
  data: TableData[];
};

const data: TableData[] = [{ dataItems: ["abc", "pqr"] }, { dataItems: ["prq", "xyz"] }];

const TableComponent: React.FC<TableProps> = ({ variant = "simple", tableCaption = "", headers, data }) => {
  return (
    <TableContainer>
      <Table variant={variant}>
        <TableCaption>{tableCaption}</TableCaption>
        <Thead>
          <Tr>
            {headers.map((header, index) => {
              return <Th key={index}>{header}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((items, index) => {
            console.log(items);
            return items.dataItems.map((item, itemIndex) => {
              return <Td key={itemIndex}>{item}</Td>;
            });
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
