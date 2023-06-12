import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";

const Withdraw = (props) => {
  const { details } = props;
  const propertyID = details["Property ID"];
  const bidAmount = details["Reserved price"];
  const endDate = details["Auction end date"];
  const accountName = details["Account Name"];

  return (
    <Dialog
      open={props.isWithdrawModalVisible}
      onClose={() => {
        props.setWithdrawModalVisibility(false);
      }}
    >
      <DialogTitle>Withdraw your Bid</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div>property ID: {propertyID}</div>
          <div>Account Name: {accountName}</div>
          <div>Bid Amount: {bidAmount}</div>
          <div>Close Date: {new Date(endDate).toDateString()}</div>
          
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Withdraw</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Withdraw;
