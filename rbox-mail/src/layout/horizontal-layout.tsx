import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, CssBaseline, SvgIcon } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';

import HomeIcon from '../icons/svg/home';
import ContactIcon from '../icons/svg/contact';
import InboxIcon from '../icons/svg/inbox';
import MessageIcon from '../icons/svg/message';
import MenuIcon from '../icons/svg/menu';
import ItemIcon from '../icons/svg/item';
import StatisticIcon from '../icons/svg/statistic';
import LogoIcon from '../icons/svg/logo';

const sidebarWidth = 60;

const sidebarItems = [
  { icon: <HomeIcon />, path: '/home' },
  { icon: <ContactIcon />, path: '/about' },
  { icon: <InboxIcon />, path: '/contact' },
  { icon: <MessageIcon />, path: '/home' },
  { icon: <MenuIcon />, path: '/about' },
  { icon: <ItemIcon />, path: '/inbox' },
  { icon: <StatisticIcon />, path: '/contact' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Handle logout logic
    handleMenuClose();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <CssBaseline />
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: `${sidebarWidth}px`,
          height: '100%',
          bgcolor: theme.palette.background.paper,
          boxShadow: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          zIndex: theme.zIndex.drawer + 1, 
        }}
      >
        <Box sx={{ mb: 6 }}>
          <SvgIcon component={LogoIcon} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position:'sticky' }}>
          {sidebarItems.map((item, index) => (
            <IconButton
              key={index}
              color="inherit"
              sx={{ my: 1 }}
              onClick={() => window.location.href = item.path}
            >
              <SvgIcon>{item.icon}</SvgIcon>
            </IconButton>
          ))}
        </Box>
      </Box>

      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${sidebarWidth}px)`,
          marginLeft: `${sidebarWidth}px`,
          bgcolor: theme.palette.primary.main,
          boxShadow: 'none',
          zIndex: theme.zIndex.drawer, // Ensure AppBar is below sidebar
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Onebox
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="toggle dark mode"
              onClick={toggleDarkMode}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="account menu"
              onClick={handleMenuClick}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${sidebarWidth}px`,
          pt: `${theme.spacing(8)}px`,
          overflow: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
