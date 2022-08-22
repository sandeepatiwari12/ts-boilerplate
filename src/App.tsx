import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

// Custom Components
import Sidenav, { DrawerHeader } from './Components/Sidenav';
import Toolbar from './Components/Toolbar';
import theme from './Theme';
import Main from './Modules/Main';
import { useSelector } from 'react-redux';
import { RootState } from './Redux/store';
// Routes (Login)
import LoginRoutes from './Routes/LoginRoutes';
// Routes (Auth)
import AuthRoutes from './Routes/AuthRoutes';

const App = () => {
  const { isAuthorized } = useSelector((state: RootState) => state.auth);
  console.log('isAuthorized', isAuthorized);

  const [open, setOpen] = React.useState<boolean>(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Toolbar authorized={isAuthorized} open={open} toggleDrawer={() => setOpen(!open)} />
        {isAuthorized && <Sidenav open={open} />}
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Main open={open}>
            <DrawerHeader />
            {isAuthorized ? <AuthRoutes /> : <LoginRoutes />}
          </Main>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default App;
