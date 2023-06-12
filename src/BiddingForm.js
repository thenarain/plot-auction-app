import {
  Dialog,
  TextField,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import { useState } from "react";
const BiddingForm = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const { details } = props;
  const propertyID = details["Property ID"];
  const bidAmount = details["Reserved price"];
  const endDate = details["Auction end date"];
  const accountName = details["Account Name"];

  const handleChange = (event) => {
    const enteredAmount = event.target.value;
    setValue(enteredAmount);

    if (enteredAmount >= bidAmount) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={props.isBidModalVisible}
      onClose={() => {
        props.setBidModalVisibility(false);
      }}
    >
      <DialogTitle>Bid Details and Payments</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div>property ID: {propertyID}</div>
          <div>Account Name: {accountName}</div>
          <div>Bid Amount: {bidAmount}</div>
          <div>Close Date: {new Date(endDate).toDateString()}</div>  
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Bid Amount"
          type="Number"
          fullWidth
          variant="standard"
          value={value}
          onChange={handleChange}
          error={error}
          helperText={
            error
              ? "Please enter a amount greater than or equal to bid Amount."
              : ""
          }
        />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Pay</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BiddingForm;
