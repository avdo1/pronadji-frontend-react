import React from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import MaUTable from "@mui/material/Table";
import { useSortBy, useTable, useExpanded } from "react-table";

type Props = {
  columns: any;
  data: any;
  skipPageReset: boolean;
};

export const PricesTable = ({ columns, data, skipPageReset }: Props) => {
  const { getTableProps, headerGroups, prepareRow, rows } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded,
  );

  return (
    <div className="w-full h-full">
      <TableContainer>
        <MaUTable {...getTableProps()} className="w-full border-none">
          <TableHead>
            {headerGroups.map((headerGroup, rdx) => (
              <TableRow
                {...headerGroup.getHeaderGroupProps()}
                key={`row-${rdx}`}
              >
                {headerGroup.headers.map((column: any, cidx) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-none"
                    key={`column-${cidx}`}
                  >
                    <div className="flex items-center justify-center w-full h-full text-center">
                      <p className="font-sans font-bold text-lg text-gray-500">
                        {column.render("Header")}
                        <TableSortLabel
                          active={column.isSorted}
                          direction={column.isSortedDesc ? "desc" : "asc"}
                        />
                      </p>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {rows.length > 0 &&
              rows.map((row, i) => {
                prepareRow(row);
                return (
                  <React.Fragment key={`row-${i}`}>
                    <TableRow className="m-0 p-0" {...row.getRowProps()}>
                      {row.cells.map((cell: any, lidx) => {
                        const value = cell.render("Cell");

                        if (
                          cell.column.id === "nazivProizvoda" ||
                          cell.column.id === "cijenaProizvoda" ||
                          cell.column.id === "opisProizvoda"
                        ) {
                          const data: any = row;
                          let dataToShow: any = [];
                          let keyOfElement: string;
                          switch (cell.column.id) {
                            case "nazivProizvoda":
                              dataToShow = data.original.nazivProizvoda;
                              keyOfElement = "naziv";
                              break;
                            case "cijenaProizvoda":
                              dataToShow = data.original.cijenaProizvoda;
                              keyOfElement = "cijena";
                              break;
                            case "opisProizvoda":
                              dataToShow = data.original.opisProizvoda;
                              keyOfElement = "opis";
                              break;
                            default:
                              break;
                          }

                          return (
                            <TableCell
                              {...cell.getCellProps()}
                              className="border-b border-gray-300"
                              key={lidx}
                            >
                              {cell.render(() => {
                                return (
                                  <div className="flex flex-col items-start gap-2 w-full">
                                    {dataToShow.map((element: any) => (
                                      <p
                                        key={element.id}
                                        className="font-sans font-semibold text-base text-gray-400"
                                      >
                                        {element[keyOfElement] || "-"}
                                      </p>
                                    ))}
                                  </div>
                                );
                              })}
                            </TableCell>
                          );
                        }

                        if (cell.column.id === "action") {
                          return (
                            <TableCell
                              {...cell.getCellProps()}
                              className="border-b border-gray-300"
                              key={lidx}
                            >
                              {cell.render(() => {
                                return (
                                  <div className="flex items-center justify-center w-full h-full">
                                    <p className="font-sans font-semibold text-lg leading-6 text-gray-600">
                                      {cell.render("Cell")}
                                    </p>
                                  </div>
                                );
                              })}
                            </TableCell>
                          );
                        }

                        return (
                          <TableCell
                            {...cell.getCellProps()}
                            className="border-b border-gray-300"
                            key={lidx}
                          >
                            {cell.render(() => {
                              return (
                                <div className="flex items-start w-full h-full">
                                  <p className="font-sans font-semibold text-base text-gray-400">
                                    {cell.render("Cell")}
                                  </p>
                                </div>
                              );
                            })}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </React.Fragment>
                );
              })}
          </TableBody>
        </MaUTable>
      </TableContainer>
    </div>
  );
};
