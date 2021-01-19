import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Book } from "../../assets/img/book.svg";

import PeopleIcon from "@material-ui/icons/People";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import FastfoodIcon from "@material-ui/icons/Fastfood";

import { isMobile } from "react-device-detect";

import Router from "../routers/";

import ActionRouter from "../../redux/ducks/location";
import { useDispatch } from "react-redux";

const drawerWidth = 300;

const colors = {
  red: "#BF1B39",

  bege: "#E4D3D7",

  cinza: "#A6A8AA",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Svg = (props) => {
  return (
    <SvgIcon {...props}>
      <Book />
    </SvgIcon>
  );
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const dispatch = useDispatch();

  const changeRouter = (location) => {
    dispatch(ActionRouter.changerPage(location));
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          button
          style={{
            paddingLeft: "30px",
            height: "56px",
            paddingTop: "30px",
            paddingBottom: "30px",
            color: colors.cinza,
          }}
          onClick={() => changeRouter("categories")}
        >
          <ListItemIcon style={{ color: "#A4A4A4" }}>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="Categoria" />
        </ListItem>
        <ListItem
          button
          style={{
            paddingLeft: "30px",
            height: "56px",
            paddingTop: "30px",
            paddingBottom: "30px",
            color: colors.cinza,
          }}
          onClick={() => changeRouter("products")}
        >
          <ListItemIcon style={{ color: "#A4A4A4" }}>
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText primary="Produtos" />
        </ListItem>

        <ListItem
          button
          style={{
            paddingLeft: "30px",
            height: "56px",
            paddingTop: "30px",
            paddingBottom: "30px",
            color: colors.cinza,
          }}
          onClick={() => changeRouter("equip")}
        >
          <ListItemIcon style={{ color: "#A4A4A4" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Equipe" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const Bar = ({ mobile }) => {
    console.log(mobile);

    if (mobile) {
      return (
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Bar mobile={isMobile} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router />
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
