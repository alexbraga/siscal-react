import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { InfoOutlined } from "@mui/icons-material";
import CalculateIcon from "@mui/icons-material/Calculate";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DrawerHeader from "./DrawerHeader";

const MyDrawer = ({ drawerWidth, open, ToggleDrawer }) => {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={ToggleDrawer}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Link underline="none" to="/" key="home">
          <ListItemButton>
            <ListItemIcon>
              <CalculateIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Cálculo de Compensação" />
          </ListItemButton>
        </Link>
        <Link underline="none" to="/about" key="about">
          <ListItemButton>
            <ListItemIcon>
              <InfoOutlined color="primary" />
            </ListItemIcon>
            <ListItemText primary="Informações" />
          </ListItemButton>
        </Link>
        <Link underline="none" to="/contact" key="contact">
          <ListItemButton>
            <ListItemIcon>
              <AlternateEmailIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Contato" />
          </ListItemButton>
        </Link>
      </List>
    </Drawer>
  );
};

export default MyDrawer;
