import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsRequest, deleteItemRequest, addItemRequest } from '../actions/itemActions';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography } from '@mui/material';
import EditItemModal from '../components/EditItemModal';

const ItemsPage = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.item);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [newItem, setNewItem] = useState({ name: '', price: '' });

    useEffect(() => {
        dispatch(fetchItemsRequest());
    }, [dispatch]);

    const handleEditClick = (itemId) => {
        setSelectedItemId(itemId);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItemId(null);
    };

    const handleDelete = (itemId) => {
        dispatch(deleteItemRequest(itemId));
    };

    const handleAddItem = () => {
        dispatch(addItemRequest(newItem));
        setNewItem({ name: '', price: '' });
    };

    return (
        <Container>
            <Typography my={3} variant="h4">Items</Typography>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography color="error">{error.message}</Typography>}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item._id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleEditClick(item._id)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography my={3} variant="h5">Add New Item</Typography>
            <TextField
                label="Name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Price"
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleAddItem}>Add Item</Button>

            <EditItemModal
                open={isModalOpen}
                onClose={handleCloseModal}
                itemId={selectedItemId}
            />
        </Container>
    );
};

export default ItemsPage;