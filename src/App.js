import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AppBar from "./components/AppBar";
import DrawerHeader from "./components/DrawerHeader";
import Drawer from "./components/Drawer";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

function App() {
  const [open, setOpen] = useState(false);

  const ToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <BrowserRouter>
        <AppBar open={open} ToggleDrawer={ToggleDrawer} />
        <Drawer
          open={open}
          ToggleDrawer={ToggleDrawer}
          drawerWidth={drawerWidth}
        />
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </Box>
  );
}

export default App;
