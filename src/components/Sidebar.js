import React from 'react';
import { useDispatch } from 'react-redux';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, Inventory, Store, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { logout as logoutAction } from '../actions/authActions';

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const menuItems = [
        { text: 'Home', icon: <Home />, path: '/' },
        { text: 'Items', icon: <Inventory />, path: '/items' },
        { text: 'Warehouses', icon: <Inventory />, path: '/warehouses' },
        { text: 'Stores', icon: <Store />, path: '/stores' },
    ];

    const handleMenuItemClick = (path) => {
        navigate(path);
        onClose();
    };

    const handleLogout = () => {
        dispatch(logoutAction());
        onClose();
    };

    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={onClose}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },
            }}
        >
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => handleMenuItemClick(item.path)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
                <Divider />
                <ListItem button onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
