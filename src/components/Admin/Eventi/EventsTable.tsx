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

export const EventsTable = ({ columns, data, skipPageReset }: Props) => {
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
        <MaUTable {...getTableProps()} className="w-full">
          <TableHead>
            {headerGroups.map((headerGroup, rdx) => (
              <TableRow
                {...headerGroup.getHeaderGroupProps()}
                key={`row-${rdx}`}
              >
                {headerGroup.headers.map((column: any, cidx) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`${
                      column.id === "nazivEventa"
                        ? "border-none border-b border-gray-300 min-w-[500px]"
                        : "border-none"
                    }`}
                    key={`column-${cidx}`}
                  >
                    <div
                      className={`${
                        column.id === "nazivEventa"
                          ? "flex items-center justify-start w-full h-full text-center"
                          : "flex items-center justify-center w-full h-full text-center"
                      }`}
                    >
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

                        if (cell.column.id === "nazivEventa") {
                          return (
                            <TableCell
                              {...cell.getCellProps()}
                              className="border-none border-b border-gray-300 min-w-[500px]"
                              key={lidx}
                            >
                              <div className="flex items-center justify-start w-full h-full text-center">
                                <p className="font-sans font-semibold text-base text-gray-400">
                                  {cell.render("Cell")}
                                </p>
                              </div>
                            </TableCell>
                          );
                        }

                        if (cell.column.id === "povezanaGalerija") {
                          return (
                            <TableCell
                              {...cell.getCellProps()}
                              className="border-none border-b border-gray-300"
                              key={lidx}
                            >
                              <div className="flex items-center justify-center w-full h-full text-center">
                                <a
                                  href="#"
                                  className="font-sans font-semibold text-base text-orange-500 underline"
                                >
                                  {cell.render("Cell")}
                                </a>
                              </div>
                            </TableCell>
                          );
                        }

                        if (cell.column.id === "action") {
                          return (
                            <TableCell
                              {...cell.getCellProps()}
                              className="border-none border-b border-gray-300"
                              key={lidx}
                            >
                              <div className="flex items-center justify-center w-full h-full">
                                <p className="font-sans font-semibold text-base text-gray-400">
                                  {cell.render("Cell")}
                                </p>
                              </div>
                            </TableCell>
                          );
                        }

                        return (
                          <TableCell
                            {...cell.getCellProps()}
                            className="border-none border-b border-gray-300"
                            key={lidx}
                          >
                            <div className="flex items-center justify-center w-full h-full text-center">
                              <p className="font-sans font-semibold text-base text-gray-400">
                                {cell.render("Cell")}
                              </p>
                            </div>
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
