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

export const DnevnePonudeTable = ({ columns, data, skipPageReset }: Props) => {
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
        <MaUTable {...getTableProps()}>
          <TableHead>
            {headerGroups &&
              headerGroups.map((headerGroup, rdx) => (
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
                      <div
                        className={
                          !(column.id === "action1" || column.id === "action")
                            ? "w-full h-full flex items-center justify-center text-center"
                            : "w-full h-full flex items-center justify-center text-center"
                        }
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
                        if (
                          cell.column.id === "action" ||
                          cell.column.id === "action1"
                        ) {
                          return (
                            <TableCell
                              {...cell.getCellProps()}
                              className="border-none border-b border-light-gray"
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
                            className="border-none border-b border-light-gray"
                            key={lidx}
                          >
                            <div className="w-full h-full flex items-center justify-start text-center">
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
