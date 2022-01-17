//https://react-table.tanstack.com/docs/examples/pagination
import React from 'react'
import styled from 'styled-components'
import TablePagination from './TablePagination'
import { useTable, usePagination } from 'react-table'


const DivTable=styled.div`
  background-color:#faf8f4;
  border-radius:8px;
  color:#737170;
  padding:20px;
  margin-top:4px;
`
const Select =styled.select`
  background-color:white;
  padding:5px 15px 5px 10px;
  border-radius:6px;
  border:solid 1px #dfd9ce;
  color:#737170;
  background:url(images/itemDetail/icon-updown.svg) no-repeat 95% 50%;
  appearance: none;
  &::-ms-expand { 
    display: none;
  }
  &:hover{
    cursor: pointer;
  }
`
const Option=styled.div`
  position:absolute;
  right:0;
`
const Span=styled.span`
  color:black;
  margin-right:4px;
`

const Styles = styled.div`
  table {
      width: 100%;
        //테이블 둥글게 처리 각 tr,td의 첫요소, 마지막 요소에 radius 삽입
        tbody tr:first-child td:first-child {
          border-top-left-radius: 12px;
        }
        tbody tr:last-child td:first-child {
          border-bottom-left-radius: 12px;
        }
        tbody tr:first-child td:last-child {
          border-top-right-radius: 12px;
        }
        tbody tr:last-child td:last-child {
          border-bottom-right-radius: 12px;
        }



        tbody tr {
          color:white;

          &:nth-child(odd){ 
            background-color:#c6b2a4;
          }
          &:nth-child(even){
            background-color:#9c7e6a;
          }

        }

        th,
        td {
            text-align:left;
            padding: 1rem;
            font-size:1rem;
        }
  }


  .pagination {
      padding: 0.5rem;
      display:flex;
      margin-top:16px;
      align-items:center;
      position:relative;
  }
`



function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <DivTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <TablePagination
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                previousPage={previousPage}
                canPreviousPage={canPreviousPage}
                nextPage={nextPage}
                canNextPage={canNextPage}
                gotoPage={gotoPage}
        />
        <Option>
          <Span>show:</Span>
            <Select
                value={pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}>
                {[5, 10, 15, 20, 25].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize} rows
                  </option>
          ))}
            </Select>
        </Option>
      </div>
    </DivTable>
  )
}

function TablePag() {
  const columns = [
          {
            Header: 'TRANSACTION ID',
            accessor: 'id',
          },
          {
            Header: 'TRANSACTION TYPE',
            accessor: 'type',
          },
          {
            Header: 'TIME',
            accessor: 'time',
          },
          {
            Header: 'TOTAL AMOUNT',
            accessor: 'totalamount',
          },
          {
            Header: 'BUYER',
            accessor: 'buyer',
          },
          {
            Header: 'SELLER',
            accessor: 'seller',
          }
    ]
  
  const data=[
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 2 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 3 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 4 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 8 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 6 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 3 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 6 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 1 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 2 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 2 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 3 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 6 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 1 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 2 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Cancel Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 5 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    },
    {
      id:'4qNtY…idr2zxq',
      type:'Listing',
      time:'about 2 hours ago',
      totalamount:'147 SOL',
      buyer:'ASDF',
      seller:'3Q44n…LQ3'
    }
  ]

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default TablePag;
