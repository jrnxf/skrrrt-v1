// @ts-nocheck
import { ArrowDown, ArrowUp } from '@/components'
import React, { FC } from 'react'
import { useFilters, useSortBy, useTable } from 'react-table'

type Props = {
  data: any[]
  columns: any[]
  sortTypes?: any
  getRowProps?: (row: any) => void
  getCellProps?: (row: any) => void
}
export const Table: FC<Props> = ({
  data,
  columns,
  sortTypes = {},
  getRowProps = () => ({}),
  getCellProps = () => ({}),
}) => {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    rows, // rows for the table based on the data passed
  } = useTable(
    {
      columns,
      data,
      sortTypes,
    },
    useFilters,
    useSortBy,
  )

  return (
    <table
      {...getTableProps()}
      className="relative w-full overflow-x-auto rounded-md table-auto bg-nord6 dark:bg-nord0 whitespace-nowrap"
    >
      <thead className="text-left select-none label">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={`px-4 py-2 bg-nord5 dark:bg-nord1 sticky top-0 z-10 ${
                  column.isSorted ? (column.isSortedDesc ? 'sort-desc' : 'sort-asc') : ''
                }`}
              >
                <div className="flex items-center">
                  {column.render('Header')}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <ArrowDown size={12} strokeWidth={3} className="ml-1" />
                    ) : (
                      <ArrowUp size={12} strokeWidth={3} className="ml-1" />
                    )
                  ) : (
                    ''
                  )}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="divide-y-2 divide-nord5 dark:divide-nord1">
        {rows.map((row, rowIdx) => {
          prepareRow(row)
          return (
            <tr
              className="cursor-pointer"
              tabIndex={0}
              key={rowIdx}
              {...row.getRowProps(getRowProps(row))}
            >
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps(getCellProps(cell))} className="px-4 py-2 truncate">
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
