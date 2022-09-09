// @ts-nocheck
import { ArrowDown, ArrowUp } from '@/components'
import moment from 'moment'
import React, { useMemo } from 'react'
import { useFilters, useSortBy, useTable } from 'react-table'
export const AuthdUserTable = ({ users }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'full_name',
      },
      {
        Header: 'Username',
        accessor: 'username',
      },
    ],
    [],
  )

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    rows, // rows for the table based on the data passed
  } = useTable(
    {
      columns,
      data: users,
    },
    useFilters,
    useSortBy,
  )

  return (
    <div className="border-2 rounded-md bg-nord5 dark:bg-nord1">
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="w-full border-collapse table-auto whitespace-nowrap">
          <thead className="sticky top-0 text-xs text-left border-b-2 select-none label">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`px-4 py-2 ${
                      column.isSorted ? (column.isSortedDesc ? 'sort-desc' : 'sort-asc') : ''
                    }
                          `}
                  >
                    <div className="flex items-center">
                      {column.render('Header')}
                      {column.isSorted ? (
                        <>
                          column.isSortedDesc (
                          <ArrowDown size={12} strokeWidth={3} className="ml-1" />
                          ) : (
                          <ArrowUp size={12} strokeWidth={3} className="ml-1" />)
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, rowIdx) => {
              prepareRow(row)
              return (
                <tr
                  className="text-sm border-t-2 cursor-pointer keyboard-focus-visible"
                  onClick={() => routeTo(row.original.username)}
                  onKeyPress={() => routeTo(row.original.username)}
                  tabIndex={0}
                  key={rowIdx}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="px-4 py-2 truncate">
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
