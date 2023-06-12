import React, { useState, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, Button } from "@mui/material";

import { data } from "./mock-data";
import { user } from "./user.js";
import BiddingForm from "./BiddingForm.js";
import Withdraw from "./Withdraw";

import User from "./SignUpAndLogout";

const App = () => {
  const [isBidModalVisible, setBidModalVisibility] = useState(false);
  const [isWithdrawModalVisible, setWithdrawModalVisibility] = useState(false);
  const [details, setDetails] = useState(null);

  const handleClick = (row, isAlreadyBid) => {
    if (!isAlreadyBid) {
      setBidModalVisibility(true);
      setDetails(row);
    } else {
      setWithdrawModalVisibility(true);
      setDetails(row);
    }
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "SrNo",
        Header: "Sr.No.",
        size: 5,
      },
      {
        accessorKey: "Property ID",
        Header: "Property ID",
        size: 20,
      },
      {
        accessorKey: "property Address",
        Header: "Address",
      },
      {
        accessorKey: "Reserved price",
        Header: "price(Rs.)",
        size: 10,
      },
      {
        accessorFn: (row) => {
          return new Date(row["Auction open date"]).toDateString();
        },
        id: "Auction open date",
        Header: "open date",
        size: 20,
      },
      {
        accessorFn: (row) => {
          return new Date(row["Auction end date"]).toDateString();
        },
        id: "Auction end date",
        Header: "end date",
        size: 20,
      },
      {
        accessorKey: "Property Area",
        Header: "Area",
        size: 10,
      },
      {
        accessorKey: "Account Name",
        Header: "Account Name",
        size: 20,
      },
      {
        accessorKey: "Bid Status",
        Header: "Bid Status",
        Cell: ({ cell, row }) => {
          const isAlreadyBid = user.find(
            (item) => item["Property ID"] === row.original["Property ID"]
          );
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Button
                // color="error"
                // disabled={!table.getIsSomeRowsSelected()}
                onClick={() => {
                  handleClick(row.original, isAlreadyBid);
                }}
                variant="contained"
              >
                {isAlreadyBid ? "Withdraw" : "Bid Now"}
              </Button>
            </Box>
          );
        },
      },
    ],
    []
  );

  return (
    <div>
      <User />
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        muiTableBodyRowProps={{ hover: false }}
        muiTableProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, 1)",
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, 1)",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, 1)",
          },
        }}
      />
      {details && (
        <BiddingForm
          isBidModalVisible={isBidModalVisible}
          setBidModalVisibility={setBidModalVisibility}
          details={details}
        />
      )}
      {details && (
        <Withdraw
          isWithdrawModalVisible={isWithdrawModalVisible}
          setWithdrawModalVisibility={setWithdrawModalVisibility}
          details={details}
        />
      )}
    </div>
  );
};

export default App;
