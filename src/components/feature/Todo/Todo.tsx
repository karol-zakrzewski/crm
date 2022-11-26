import { List, ListSubheader, Button, Divider } from "@mui/material";
import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toastActions } from "../../../store/toast-slice";
import { fetchTodosThunk } from "../../../store/todos-slice";
import { Store } from "../../../types/store";
import AddTodoDialog from "../../ui/dialog/AddTodoDialog";
import TodoElement from "./TodoElement/TodoElement";

const Todo = () => {
  const { id } = useParams();
  const [openAddTodoDialog, setOpenAddTodoDialog] = useState(false);
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();
  const { todosList } = useSelector((state: Store) => state.todos);

  useEffect(() => {
    try {
      if (typeof id !== "string") {
        throw new Error("Cannot fetch todos");
      }
      dispatch(fetchTodosThunk(id));
    } catch (error) {
      if (error instanceof FirebaseError) {
        dispatch(
          toastActions.showToast({
            isOpen: true,
            message: error.message,
            status: "error",
          })
        );
      }
    }
  }, [id, dispatch]);
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        subheader={
          <ListSubheader
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Todo</p>
            <Button size="small" onClick={() => setOpenAddTodoDialog(true)}>
              Add
            </Button>
          </ListSubheader>
        }
      >
        <Divider />
        {todosList &&
          todosList.map((todo, index) => {
            return (
              <TodoElement
                key={`${todo.id}-${index}`}
                todo={todo}
                companyId={id}
              />
            );
          })}
      </List>
      <AddTodoDialog
        companyId={id}
        openAddTodoDialog={openAddTodoDialog}
        handleClose={() => setOpenAddTodoDialog(false)}
      />
    </>
  );
};

export default Todo;
