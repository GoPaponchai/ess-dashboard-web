import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { drawerWidth } from "./constant";

const AppBarCustom = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBarLayout = (props) => {
  const { open, handleDrawerOpen, t } = props;
  return (
    <AppBarCustom position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon fontSize="medium" />
        </IconButton>
        <Typography variant="h4" noWrap component="div">
          {t.mainTitle}
        </Typography>
      </Toolbar>
    </AppBarCustom>
  );
};

AppBarLayout.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};
export default AppBarLayout;
