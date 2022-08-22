import * as React from 'react';
import IconButton from '@mui/material/IconButton';

import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Box } from '@mui/material';

const menuOtions = [
  {
    name: 'Home',
    path: '/home',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'Logout',
    path: '/logout',
  },
];

const AuthorizedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted={true}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuOtions.map((menu) => (
          <MenuItem onClick={handleClose} key={menu.name}>
            {menu.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AuthorizedMenu;
