import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  IconButton,
} from "@mui/material";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toastActions } from "../../../../store/toast-slice";
import { deleteTodoThunk, editTodoThunk } from "../../../../store/todos-slice";
import { Todo } from "../../../../types/todo";
import jsonText from "../../../../assets/data.json";

type Props = {
  companyId: string | undefined;
  todo: Todo;
};

const TodoElement = ({ companyId, todo }: Props) => {
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();
  const handleChangeChecked = () => {
    try {
      if (typeof companyId !== "string") {
        throw new Error(jsonText.toastMessage.failedEditTodo);
      }
      dispatch(editTodoThunk(companyId, todo.id, { checked: !todo.checked }));
      dispatch(
        toastActions.showToast({
          isOpen: true,
          message: jsonText.toastMessage.successEditTodo,
          status: "success",
        })
      );
    } catch (error) {
      if (error instanceof Error) {
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

  const handleDeleteTodo = () => {
    try {
      if (typeof companyId !== "string") {
        throw new Error(jsonText.toastMessage.failedDeleteTodo);
      }

      dispatch(deleteTodoThunk(companyId, todo.id));
    } catch (error) {
      if (error instanceof Error) {
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
    <ListItem
      disablePadding
      divider
      secondaryAction={
        <IconButton edge="end" aria-label="trash" onClick={handleDeleteTodo}>
          <FaTrash />
        </IconButton>
      }
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.checked}
            disableRipple
            onClick={handleChangeChecked}
          />
        </ListItemIcon>
        <ListItemText id={todo.id} primary={todo.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoElement;
