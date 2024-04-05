import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LinkButton from "./LinkButton";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
export default function Navigation() {
  /**
   * DrawerList
   */
  const DrawerList = (
    <>
      <List>
        <LinkButton name={"Main"} />
        <LinkButton name={"Registries"} />
      </List>
      <Divider />
    </>
  );
  /**
   * Непосредственно компонент Drawer (drovosek)
   */
  const theme = useTheme();
  const [drawerStateOpen, drawerStateSetOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    drawerStateSetOpen(true);
  };
  const handleDrawerClose = () => {
    drawerStateSetOpen(false);
  };
  const AppBarText = "AppBarText";
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(drawerStateOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {AppBarText}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerStateOpen} onClose={() => {}}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>{DrawerList}</List>
      </Drawer>
    </Box>
  );
}
