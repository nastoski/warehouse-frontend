import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStoresRequest, addStoreRequest, updateStoreRequest, deleteStoreRequest } from '../actions/storeActions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography, Button, Modal, TextField } from '@mui/material';

const StorePage = () => {
  const dispatch = useDispatch();
  const { stores, loading, error } = useSelector((state) => state.store);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openViewItems, setOpenViewItems] = useState(false);
  const [currentStore, setCurrentStore] = useState(null);
  const [newStore, setNewStore] = useState({ name: '', location: '' });

  useEffect(() => {
    dispatch(fetchStoresRequest());
  }, [dispatch]);

  const handleOpenEdit = (store) => {
    setCurrentStore(store);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setCurrentStore(null);
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
    setNewStore({ name: '', location: '' });
  };

  const handleOpenViewItems = (store) => {
    setCurrentStore(store);
    setOpenViewItems(true);
  };

  const handleCloseViewItems = () => {
    setOpenViewItems(false);
  };

  const handleUpdate = () => {
    const updatedData = {
      name: currentStore.name,
      location: currentStore.location,
    };
    dispatch(updateStoreRequest(currentStore._id, updatedData));
    handleCloseEdit();
  };

  const handleDelete = (storeId) => {
    dispatch(deleteStoreRequest(storeId));
  };

  const handleAdd = () => {
    dispatch(addStoreRequest(newStore));
    handleCloseAdd();
  };

  return (
    <Container>
      <Typography variant="h4">Stores</Typography>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error.message}</Typography>}
      <Button variant="contained" color="primary" onClick={handleOpenAdd}>Add Store</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Store ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stores.map((store) => (
              <TableRow key={store._id}>
                <TableCell>{store._id}</TableCell>
                <TableCell>{store.name}</TableCell>
                <TableCell>{store.location}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleOpenEdit(store)}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(store._id)}>Delete</Button>
                  <Button variant="contained" color="primary" onClick={() => handleOpenViewItems(store)}>View Items</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <div style={{ padding: '20px', background: 'white', margin: 'auto', marginTop: '10%', width: '30%' }}>
          <h2 id="edit-modal-title">Edit Store</h2>
          {currentStore && (
            <>
              <TextField
                label="Name"
                value={currentStore.name}
                onChange={(e) => setCurrentStore({ ...currentStore, name: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Location"
                value={currentStore.location}
                onChange={(e) => setCurrentStore({ ...currentStore, location: e.target.value })}
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
            </>
          )}
        </div>
      </Modal>

      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="add-modal-title"
        aria-describedby="add-modal-description"
      >
        <div style={{ padding: '20px', background: 'white', margin: 'auto', marginTop: '10%', width: '30%' }}>
          <h2 id="add-modal-title">Add Store</h2>
          <TextField
            label="Name"
            value={newStore.name}
            onChange={(e) => setNewStore({ ...newStore, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            value={newStore.location}
            onChange={(e) => setNewStore({ ...newStore, location: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>
        </div>
      </Modal>

      <Modal
        open={openViewItems}
        onClose={handleCloseViewItems}
        aria-labelledby="view-items-modal-title"
        aria-describedby="view-items-modal-description"
      >
        <div style={{ padding: '20px', background: 'white', margin: 'auto', marginTop: '10%', width: '50%' }}>
          <h2 id="view-items-modal-title">Items in {currentStore?.name}</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentStore?.items?.map((item) => (
                  <TableRow key={item.item._id}>
                    <TableCell>{item.item._id}</TableCell>
                    <TableCell>{item.item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Modal>
    </Container>
  );
};

export default StorePage;
