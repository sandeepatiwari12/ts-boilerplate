import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiList from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MuiListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import breakpoints from '../../utils/breakpoints';

// Router
import { Link as RouteLink, useLocation } from 'react-router-dom';

import { navItems } from './constant';
import colors from '../../Theme/colors';

const openedMixin = (theme: Theme): CSSObject => ({
  width: breakpoints.drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: breakpoints.drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const List = styled(MuiList)(() => ({
  padding: '8px',
}));

interface ListItemProps {
  active: boolean;
}

const ListItem = styled(MuiListItem)(({ active }: ListItemProps) => ({
  borderRadius: '8px',
  marginBottom: '5px',
  transition: '0.3s ease-in',
  backgroundColor: active && active ? colors.purpleLight : '',
  color: active && active ? colors.primary : '',
  ':hover': {
    transition: '0.3s ease-out',
    backgroundColor: colors.gray,
    color: colors.black,
  },
}));

export const Link = styled(RouteLink)(() => ({
  color: 'inherit',
  textDecoration: 'none !important',
  '& :hover': {
    textDecoration: 'none',
  },
}));

interface SidenavProps {
  open?: boolean;
}

const Sidenav = ({ open }: SidenavProps) => {
  const location = useLocation();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>{'Logo'}</DrawerHeader>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <Link to={item.path} key={`NavLink__${item.name}`}>
            <ListItem
              key={item.name}
              disablePadding={true}
              sx={{ display: 'block' }}
              active={location.pathname === item.path}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};
export default React.memo(Sidenav);
