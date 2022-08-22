import React from 'react';
import { styled } from '@mui/material/styles';
import colors from '../../Theme/colors';
import breakpoints from '../../utils/breakpoints';

interface MainProps {
  theme?: any;
  open: boolean;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }: MainProps) => ({
    flexGrow: 1,
    backgroundColor: colors.lightBG,
    height: '100vh',
    paddingTop: breakpoints.toolbarHeight + 40 + 'px',
    paddingBottom: breakpoints.toolbarHeight + 40 + 'px',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

export default React.memo(Main);
