import styled from "@emotion/styled";
import {
  Box,
  Divider,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { Fragment } from "react";
import { FaDollarSign, FaHome } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { paths } from "../../../utils/paths";
import Link from "../links/Link";

const StyledListItemIcon = styled(ListItemIcon)`
  font-size: x-large;
`;

const menuItems = [
  {
    name: "Home",
    href: paths.home,
    icon: <FaHome />,
  },
  {
    name: "Companies",
    href: paths.companies,
    icon: <MdContactPhone />,
  },
  {
    name: "Deals",
    href: paths.deal,
    icon: <FaDollarSign />,
  },
];

type Props = {
  open: boolean;
  handleClose: () => void;
};

const Drawer = ({ open, handleClose }: Props) => {
  return (
    <MuiDrawer open={open} onClose={handleClose}>
      <Box
        onKeyDown={handleClose}
        onClick={handleClose}
        sx={{ width: 250 }}
        role="presentation"
      >
        <List>
          {menuItems.map((item, index) => {
            return (
              <Fragment key={`${item.name}-${index}`}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link href={item.href}>
                      <>
                        <StyledListItemIcon>{item.icon}</StyledListItemIcon>
                        <ListItemText primary={item.name} />
                      </>
                    </Link>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Fragment>
            );
          })}
        </List>
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
