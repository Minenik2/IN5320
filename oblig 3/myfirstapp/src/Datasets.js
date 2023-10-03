import React from "react";
import { Menu } from '@dhis2-ui/menu';
import { MenuItem } from '@dhis2-ui/menu';
import { useDataQuery } from '@dhis2/app-runtime';

import {
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableFoot,
  TableHead,
  TableRow,
  TableRowHead,
} from '@dhis2/ui';

export function Datasets() {
  // FETCH DATA STEP 3
  const request = {
    request0: {
      resource: "/dataSets",
      params: {
        fields: "id, displayName, created",
        paging: "false"
      }
    }
  }
  
  const sendRequest = () => {
      const { loading, error, data } = useDataQuery(request)
      if (error) {
          return <span>ERROR: {error.message}</span>
      }
  
      if (loading) {
          return <span>Loading...</span>
      }
  
      if (data) {
         console.log("API response:",data)
         //To-do: return a component using the data response 
         return <><h1>Datasets worked</h1>
          <Menu>
            {data.request0.dataSets.map((liste) => <MenuItem label={liste.displayName} /> )}
          </Menu>
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
                                <TableCell>test</TableCell>
                                <TableCell>test</TableCell>
                                <TableCell>test</TableCell>
                            </TableRow>
                </TableBody>
            </Table>
          </>;
      }
  }
  // end of fetch data

  const requestTT = sendRequest();

  return requestTT;
}