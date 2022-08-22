import * as React from 'react';

import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const menusItems = [
  {
    name: 'Login',
    path: '/login',
  },
  {
    name: 'Register',
    path: '/register',
  },
  {
    name: 'About Us',
    path: '/about',
  },
];

const UnAuthorizedMenu = () => {
  return (
    <Box display={'flex'}>
      {menusItems.map((menu) => (
        <Link to={menu.path} style={{ textDecoration: 'none' }} key={menu.name}>
          <Button variant="text" color="warning">
            {menu.name}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default UnAuthorizedMenu;
