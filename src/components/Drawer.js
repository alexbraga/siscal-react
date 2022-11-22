import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { InfoOutlined } from "@mui/icons-material";
import CalculateIcon from "@mui/icons-material/Calculate";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DrawerHeader from "./DrawerHeader";

const MyDrawer = ({ drawerWidth, open, ToggleDrawer }) => {
  const theme = useTheme();

  const iconColor = { color: "#3aa021" };

  const menuEntries = [
    {
      title: "Cálculo de Compensação",
      icon: <CalculateIcon sx={iconColor} />,
      path: "/",
    },
    {
      title: "Informações",
      icon: <InfoOutlined sx={iconColor} />,
      path: "/about",
    },
    {
      title: "Contato",
      icon: <AlternateEmailIcon sx={iconColor} />,
      path: "/contact",
    },
  ];

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
        {menuEntries.map((entry, index) => (
          <Link
            key={entry.title}
            className="drawer-link"
            to={entry.path}
            onClick={ToggleDrawer}
          >
            <ListItem disablePadding>
              <div className="menu-button">
                <ListItemIcon sx={{ mr: -2 }}>{entry.icon}</ListItemIcon>
                <ListItemText primary={entry.title} />
              </div>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default MyDrawer;
