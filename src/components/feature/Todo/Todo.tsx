import {
  List,
  ListItem,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListSubheader,
  Button,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddTodoDialog from "../../ui/dialog/AddTodoDialog";

const Todo = () => {
  const { id } = useParams();
  const [openAddTodoDialog, setOpenAddTodoDialog] = useState(false);
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log(checked);
  };
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
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="comments"></IconButton>
              }
              disablePadding
              divider
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              </ListItemButton>
            </ListItem>
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
