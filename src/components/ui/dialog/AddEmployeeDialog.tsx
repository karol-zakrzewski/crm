import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog as MuiDialog,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import json from "../../../assets/data.json";

type Props = {
  open: boolean;
  handleClose: () => void;
  handleAddEmployee: () => void;
};

type Inputs = {
  name: string;
  phone: number;
  email: string;
};

const AddEmployeeDialog = ({ open, handleClose, handleAddEmployee }: Props) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <MuiDialog open={open} onClose={handleClose}>
      <DialogTitle>{json.dialog.addEmployee.title}</DialogTitle>
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
              message: "",
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
              message: "",
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
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAddEmployee} type="submit">
          Subscribe
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};

export default AddEmployeeDialog;
