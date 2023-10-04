import React from "react";
import { Menu } from "@dhis2-ui/menu";
import { MenuItem } from "@dhis2-ui/menu";
import { useDataQuery } from "@dhis2/app-runtime";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableFoot,
  TableHead,
  TableRow,
  TableRowHead,
} from "@dhis2/ui";

// lager en funskjon som printer ut en table basert på api dataen den får med seg, 
// brukes sammen med useState activeTable
const getTable = (liste) => {
  if (liste === null) {
    return false;
  }
  return (
    <Table>
      <TableHead>
        <TableRowHead>
          <TableCellHead>Display Name</TableCellHead>
          <TableCellHead>Value</TableCellHead>
          <TableCellHead>ID</TableCellHead>
        </TableRowHead>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{liste.displayName}</TableCell>
          <TableCell>{liste.created}</TableCell>
          <TableCell>{liste.id}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export function Datasets() {
  // hook
  const [activeTable, setActiveTable] = useState(0);

  // FETCH DATA STEP 3
  const request = {
    request0: {
      resource: "/dataSets",
      params: {
        fields: "id, displayName, created",
        paging: "false",
      },
    },
  };

  const sendRequest = () => {
    const { loading, error, data } = useDataQuery(request);
    if (error) {
      return <span>ERROR: {error.message}</span>;
    }

    if (loading) {
      return <span>Loading...</span>;
    }

    if (data) {
      console.log("API response:", data);
      //To-do: return a component using the data response
      return (
        <>
          <h1>Datasets worked</h1>
          <Menu>
            {data.request0.dataSets.map((liste, index) => (
              <MenuItem
                key={liste.id}
                onClick={() => setActiveTable(index)}
                label={liste.displayName}
              />
            ))}
          </Menu>
          {getTable(data.request0.dataSets[activeTable])}
        </>
      );
    }
  };
  // end of fetch data

  const requestTT = sendRequest();

  return requestTT;
}
