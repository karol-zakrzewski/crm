import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import json from "../../../assets/data.json";
import { toastActions } from "../../../store/toast-slice";
import { addTodoThunk } from "../../../store/todos-slice";
import { Todo } from "../../../types/todo";

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
  const [isDisabledAddBtn, setIsDisabledAddBtn] = useState(false);
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { name: "", expire: "" } });

  const onSubmit = async (data: Omit<Todo, "id" | "checked">) => {
    try {
      if (typeof companyId !== "string") {
        throw new Error(json.toastMessage.failedAddTodo);
      }
      setIsDisabledAddBtn(true);
      dispatch(addTodoThunk(companyId, { ...data, checked: false }));
      handleClose();
      setIsDisabledAddBtn(false);
      reset();
    } catch (error) {
      if (error instanceof Error) {
        setIsDisabledAddBtn(false);
        dispatch(
          toastActions.showToast({
            isOpen: true,
            message: error.message,
            status: "error",
          })
        );
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
          <Button variant="outlined" onClick={handleClose}>
            Anuluj
          </Button>
          <Button variant="contained" type="submit" disabled={isDisabledAddBtn}>
            Dodaj
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddTodoDialog;
