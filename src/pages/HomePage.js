import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth } from '../actions/authActions';
import { fetchWarehousesRequest } from '../actions/warehouseActions';
import { fetchStoresRequest } from '../actions/storeActions';
import { fetchItemsRequest } from '../actions/itemActions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Modal, Box } from '@mui/material';

const HomePage = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [modalTitle, setModalTitle] = useState('');

    const { warehouses } = useSelector((state) => state.warehouse);
    const { stores } = useSelector((state) => state.store);
    const { items } = useSelector((state) => state.item);

    useEffect(() => {
        dispatch(checkAuth());
        dispatch(fetchWarehousesRequest());
        dispatch(fetchStoresRequest());
        dispatch(fetchItemsRequest());
    }, [dispatch]);

    const handleOpen = (items, title) => {
        setSelectedItems(items);
        setModalTitle(title);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItems([]);
    };

    return (
        <div>
            <Typography variant="h3" my={3}>Welcome to our warehouse management system</Typography>

            {/* Warehouses displayed */}
            <Typography variant="h4" mb={2}>Warehouses</Typography>
            <TableContainer sx={{ mb: 5 }} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Warehouse ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Items</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {warehouses.map((warehouse) => (
                            <TableRow key={warehouse._id}>
                                <TableCell>{warehouse._id}</TableCell>
                                <TableCell>{warehouse.name}</TableCell>
                                <TableCell>{warehouse.location}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" onClick={() => handleOpen(warehouse.items, `Items in Warehouse: ${warehouse.name}`)}>
                                        View Items
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Stores displayed */}
            <Typography variant="h4" mb={2}>Stores</Typography>
            <TableContainer sx={{ mb: 5 }} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Store ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Items</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stores.map((store) => (
                            <TableRow key={store._id}>
                                <TableCell>{store._id}</TableCell>
                                <TableCell>{store.name}</TableCell>
                                <TableCell>{store.location}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" onClick={() => handleOpen(store.items, `Items in Store: ${store.name}`)}>
                                        View Items
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Items displayed */}
            <Typography variant="h4" mb={2}>Available Items</Typography>
            <TableContainer sx={{ mb: 5 }} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item._id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>${item.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal open={open} onClose={handleClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" component="h2">{modalTitle}</Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item Name</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Quantity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {selectedItems.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.item.name}</TableCell>
                                        <TableCell>${item.item.price}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
                        Close
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default HomePage;