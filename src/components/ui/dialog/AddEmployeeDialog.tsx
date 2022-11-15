import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog as MuiDialog,
} from "@mui/material";
import {
  Control,
  Controller,
  FieldErrorsImpl,
  UseFormHandleSubmit,
} from "react-hook-form";
import json from "../../../assets/data.json";

type Props = {
  control: Control<Inputs, any>;
  errors: FieldErrorsImpl<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  onSubmit: (data: Inputs) => void;
  open: boolean;
  handleClose: () => void;
  handleAddEmployee: () => void;
};

type Inputs = {
  name: string;
  phone: number;
  email: string;
};

const AddEmployeeDialog = ({
  control,
  errors,
  handleSubmit,
  onSubmit,
  open,
  handleClose,
  handleAddEmployee,
}: Props) => {
  return (
    <MuiDialog open={open} onClose={handleClose}>
      <DialogTitle>{json.dialog.addEmployee.title}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: json.validation.required,
              },
            }}
            render={({ field }) => (
              <TextField
                label="Name"
                variant="outlined"
                error={errors["name"] ? true : undefined}
                helperText={errors["name"] && errors["name"]?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: json.validation.required,
              },
            }}
            render={({ field }) => (
              <TextField
                label="Email"
                variant="outlined"
                error={errors["email"] ? true : undefined}
                helperText={errors["email"] && errors["email"]?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            rules={{
              required: {
                value: true,
                message: json.validation.required,
              },
            }}
            render={({ field }) => (
              <TextField
                type="number"
                label="Phone number"
                variant="outlined"
                error={errors["phone"] ? true : undefined}
                helperText={errors["phone"] && errors["phone"]?.message}
                {...field}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Anuluj</Button>
          <Button onClick={handleAddEmployee} type="submit">
            Dodaj pracownika
          </Button>
        </DialogActions>
      </form>
    </MuiDialog>
  );
};

export default AddEmployeeDialog;
