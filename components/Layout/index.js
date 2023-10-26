import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import AppBarLayout from "./AppBarLayout";
import DrawerLayout from "./DrawerLayout";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Layout = (props) => {
  const { children, t, locale } = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarLayout open={open} handleDrawerOpen={handleDrawerOpen} t={t} />
      <DrawerLayout
        open={open}
        handleDrawerClose={handleDrawerClose}
        t={t}
        locale={locale}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
