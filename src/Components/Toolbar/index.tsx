import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import AdbIcon from '@mui/icons-material/Adb';

import breakpoints from '../../utils/breakpoints';
import AuthorizedMenu from './AuthorizedMenu';
import UnAuthorizedMenu from './UnAuthorizedMenu';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  isauthorized: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, isauthorized }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open &&
    isauthorized && {
      marginLeft: breakpoints.drawerWidth,
      width: `calc(100% - ${breakpoints.drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

interface ToolbarProps {
  toggleDrawer: any;
  open: boolean;
  authorized: boolean;
}

const Toolbar = ({ open, authorized, toggleDrawer }: ToolbarProps) => {
  return (
    <AppBar position="fixed" open={open} isauthorized={authorized}>
      <MuiToolbar>
        {authorized && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <AdbIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap={true}
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        {authorized ? <AuthorizedMenu /> : <UnAuthorizedMenu />}
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
