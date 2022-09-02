import { Box, Modal, TextField, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  handleClose: () => void;
};

const AddCompany = ({ open, handleClose }: Props) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        component="form"
        autoComplete="off"
        noValidate
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h3"
            margin="normal"
          >
            Dodaj firmę
          </Typography>
          <TextField required id="outlined-required" label="Nazwa firmy" />
          <TextField
            id="outlined-number"
            label="NIP"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField required id="outlined-required" label="City" />
          <TextField required id="outlined-required" label="Street" />
          <TextField required id="outlined-required" label="Zipcode" />
          <TextField required id="outlined-required" label="Phone number" />
          <TextField required id="outlined-required" label="Email" />
          <TextField required id="outlined-required" label="Person" />
        </Box>
      </Modal>
    </div>
  );
};

export default AddCompany;
