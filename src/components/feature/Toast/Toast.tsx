import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toastActions } from "../../../store/toast-slice";
import { Store } from "../../../types/store";

const Toast = () => {
  const { message, isOpen, status } = useSelector(
    (state: Store) => state.toast
  );
  const dispatch = useDispatch();

  const hiddenToast = () => {
    dispatch(
      toastActions.showToast({
        isOpen: false,
        message: "",
        status: undefined,
      })
    );
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={isOpen}
      autoHideDuration={5000}
      onClose={hiddenToast}
    >
      <Alert onClose={hiddenToast} severity={status}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
