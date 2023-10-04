import React from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import { CircularLoader } from "@dhis2/ui";

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

const request = {
  dataSets: {
    resource: "/dataSets/aLpVgfXiz0f",
    params: {
      fields: ["name", "id", "dataSetElements[dataElement[id, displayName]"],
    },
  },
  dataValueSets: {
    resource: "dataValueSets",
    params: {
      orgUnit: "KiheEgvUZ0i",
      dataSet: "aLpVgfXiz0f",
      period: "2020",
    },
  },
};

function mergeData(data) {
  return data.dataSets.dataSetElements.map((d) => {
    let matchedValue = data.dataValueSets.dataValues.find((dataValues) => {
      if (dataValues.dataElement == d.dataElement.id) {
        return true;
      }
    });

    return {
      displayName: d.dataElement.displayName,
      id: d.dataElement.id,
      value: matchedValue.value,
    };
  });
}

const sendRequest = () => {
  const { loading, error, data } = useDataQuery(request);
  if (error) {
    return <span>ERROR: {error.message}</span>;
  }

  if (loading) {
    return <CircularLoader large />;
  }

  if (data) {
    console.log("API response:", data);
    let mergedData = mergeData(data);
    console.log(mergedData);
    //To-do: return a component using the data response
    // returnerer en komponent som ligner side bar menu i dhis2 storybook
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
          {mergedData.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.displayName}</TableCell>
                <TableCell>{row.value}</TableCell>
                <TableCell>{row.id}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }

  return <h1>loading</h1>;
};

export function Browse() {
  return sendRequest();
}
