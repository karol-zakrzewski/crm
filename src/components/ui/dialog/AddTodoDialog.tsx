import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { addTodo, Todo } from "../../../api/todos";
import json from "../../../assets/data.json";

type Props = {
  companyId: string | undefined;
  openAddTodoDialog: boolean;
  handleClose: () => void;
};

type Inputs = {
  name: string;
  expire: string;
};

const AddTodoDialog = ({
  companyId,
  openAddTodoDialog,
  handleClose,
}: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { name: "", expire: "" } });

  const onSubmit = async (data: Omit<Todo, "id" | "checked">) => {
    try {
      if (typeof companyId !== "string") {
        throw new Error("Niepoprawne id zadania");
      }
      await addTodo(companyId, { ...data, checked: false });
    } catch (error) {
      if (error instanceof Error) {
        // TODO show error message
        alert(error);
      }
    }
  };

  return (
    <Dialog open={openAddTodoDialog} onClose={handleClose}>
      <DialogTitle>{json.dialog.addTodo.title}</DialogTitle>
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
            name="expire"
            control={control}
            rules={{
              required: {
                value: true,
                message: json.validation.required,
              },
            }}
            render={({ field }) => (
              <TextField
                label="Date"
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                {...field}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Anuluj</Button>
          <Button type="submit">Dodaj</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddTodoDialog;
