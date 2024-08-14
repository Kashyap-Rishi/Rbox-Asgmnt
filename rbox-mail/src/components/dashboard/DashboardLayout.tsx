import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Popover,
  Button,
  SvgIcon,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from '../../icons/svg/home';
import ContactIcon from '../../icons/svg/contact';
import InboxIcon from '../../icons/svg/inbox';
import MessageIcon from '../../icons/svg/message';
import MenuIcon from '../../icons/svg/menu';
import ItemIcon from '../../icons/svg/item';
import StatisticIcon from '../../icons/svg/statistic';


import { styled } from "@mui/system";
import LogoWhite from "../../icons/svg/logo-white";
import DarkModeToggle from "./ToggleSwitch";
import EmptyInbox from "../inbox/EmptyInbox";
import Inbox from "../inbox/Inbox";

const drawerWidth = 56;

const Sidebar = styled("div")(({ theme }) => ({
  width: drawerWidth,
  height: "100%",
  position: "fixed",
  top: "0px",
  zIndex: 9999,
  left: 0,
  backgroundColor: "#f0f0f0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Main = styled("main")(({ theme }) => ({
  marginLeft: drawerWidth,
  marginTop: "64px",
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingTop: "1px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));

const drawerItems = [
    { icon: <HomeIcon />, component: <EmptyInbox/> },
    { icon: <ContactIcon />, component: <EmptyInbox/> },
    { icon: <InboxIcon />, component: <EmptyInbox/> },
    { icon: <MessageIcon />, component: <EmptyInbox/> },
    { icon: <MenuIcon />, component: <EmptyInbox/> },
    { icon: <ItemIcon />, component: <Inbox/> },
    { icon: <StatisticIcon />, component: <EmptyInbox/> },
  ];  

  const DashboardLayout: React.FC = () => {
    const navigate=useNavigate();
    const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(<EmptyInbox />);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const handlePopoverToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const drawer = (
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#FAFAFA", borderRight: "1px solid #D8D8D8", pt: 2 }}>
        <SvgIcon component={LogoWhite} sx={{ mb: 6 }} />
        <List sx={{ alignItems: "center", justifyContent: "center" }}>
          {drawerItems.map((item, index) => (
            <ListItem
              button
              key={index}
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 1.5, pr: "8px", minWidth: drawerWidth, "&:hover, &.active": { backgroundColor: "#E9EAEB", "& .MuiSvgIcon-root": { color: "#595A5B" } }}}
              onClick={() => {
                setSelectedComponent(item.component); 
                if (isMobile) handleDrawerToggle();
              }}
            >
              <ListItemIcon sx={{ display: "flex", justifyContent: "center", minWidth: 0 }}>
                <SvgIcon>{item.icon}</SvgIcon>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    return (
      <Box>
        <CssBaseline />
        <AppBar position="fixed" sx={{ backgroundColor: "#ffffff", border: "1px solid #DEDEDE" }}>
          <Toolbar>
            {isMobile && (
              <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography sx={{ fontSize: '16px', color: '#5B5F66', lineHeight: '21.7px', fontWeight: 700, ml: '56px' }}>
              Onebox
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <DarkModeToggle />
              <Typography sx={{ fontSize: '14px', color: '#5B5F66', lineHeight: '21.7px', fontWeight: 600 }} noWrap>
                Kashyap's Workspace
              </Typography>
              <IconButton onClick={handlePopoverToggle} size="small" sx={{ ml: 1 }}>
                <ArrowDropDownIcon />
              </IconButton>
            </Box>
            <Popover
              id="mouse-over-popover"
              sx={{ pointerEvents: "auto" }}
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Box sx={{ p: 1, bgcolor: "background.paper", boxShadow: 1 }}>
                <Button sx={{ fontSize: "10px", color: "#4D869C" }} onClick={() => { navigate(`/`); handlePopoverClose(); }}>
                  Logout
                </Button>
              </Box>
            </Popover>
          </Toolbar>
        </AppBar>
        <Sidebar>{drawer}</Sidebar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }, backgroundColor: "#4D869C" }}
        >
          {drawer}
        </Drawer>
        <Main>
          {selectedComponent}
        </Main>
      </Box>
    );
  };
  
  export default DashboardLayout;
  


