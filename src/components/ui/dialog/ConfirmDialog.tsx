import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import json from "../../../assets/data.json";

type Props = {
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
};

const ConfirmDialog = ({ open, handleClose, handleDelete }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {json.confirmDialog.text}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          {json.button.cancel}
        </Button>
        <Button onClick={handleDelete} variant="contained" color="error">
          {json.button.delete}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
