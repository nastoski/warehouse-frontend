import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, IconButton, AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomePage from './pages/HomePage';
import WarehousePage from './pages/WarehousePage';
import StorePage from './pages/StorePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ItemsPage from './pages/ItemsPage';
import PrivateRoute from './components/PrivateRoute';
import Sidebar from './components/Sidebar';
import { checkAuth, loginSuccess } from './actions/authActions';

const App = () => {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      dispatch(loginSuccess(JSON.parse(user)));
    }
    dispatch(checkAuth());
  }, [dispatch]);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <PrivateRoute>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleSidebarToggle}
            >
              <MenuIcon />
            </IconButton>
          </PrivateRoute>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Warehouse Management
          </Typography>
        </Toolbar>
      </AppBar>
      <PrivateRoute>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </PrivateRoute>
      <Container>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/items" element={<PrivateRoute><ItemsPage /></PrivateRoute>} />
          <Route path="/warehouses" element={<PrivateRoute><WarehousePage /></PrivateRoute>} />
          <Route path="/stores" element={<PrivateRoute><StorePage /></PrivateRoute>} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
