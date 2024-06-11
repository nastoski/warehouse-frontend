import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { updateItemRequest } from '../actions/itemActions';

const EditItemModal = ({ open, onClose, itemId }) => {
    const dispatch = useDispatch();
    const item = useSelector((state) =>
        state.item.items.find((item) => item._id === itemId)
    );

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (item) {
            setName(item.name);
            setPrice(item.price);
        }
    }, [item]);

    const handleUpdate = () => {
        dispatch(updateItemRequest(itemId, { name, price }));
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="edit-item-modal"
            aria-describedby="edit-item-form"
        >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                <Typography variant="h6" id="edit-item-modal">Edit Item</Typography>
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpdate}
                >
                    Update
                </Button>
            </Box>
        </Modal>
    );
};

export default EditItemModal;
