import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWarehousesRequest, addWarehouseRequest, updateWarehouseRequest, deleteWarehouseRequest, addItemToWarehouseRequest } from '../actions/warehouseActions';
import { fetchStoresRequest } from '../actions/storeActions';
import { transferItemToStoreRequest } from '../actions/transferActions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography, Button, Modal, TextField, MenuItem } from '@mui/material';

const WarehousePage = () => {
  const dispatch = useDispatch();
  const { warehouses, loading, error } = useSelector((state) => state.warehouse);
  const { items } = useSelector((state) => state.item);
  const { stores } = useSelector((state) => state.store);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openAddItem, setOpenAddItem] = useState(false);
  const [openTransferItem, setOpenTransferItem] = useState(false);
  const [openViewItems, setOpenViewItems] = useState(false);
  const [currentWarehouse, setCurrentWarehouse] = useState(null);
  const [newWarehouse, setNewWarehouse] = useState({ name: '', location: '' });
  const [itemData, setItemData] = useState({ itemId: '', quantity: 0 });
  const [transferData, setTransferData] = useState({ itemId: '', quantity: 0, storeId: '' });

  useEffect(() => {
    dispatch(fetchWarehousesRequest());
    dispatch(fetchStoresRequest());
  }, [dispatch]);

  const handleOpenEdit = (warehouse) => {
    setCurrentWarehouse(warehouse);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setCurrentWarehouse(null);
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
    setNewWarehouse({ name: '', location: '' });
  };

  const handleOpenAddItem = (warehouse) => {
    setCurrentWarehouse(warehouse);
    setOpenAddItem(true);
  };

  const handleCloseAddItem = () => {
    setOpenAddItem(false);
    setItemData({ itemId: '', quantity: 0 });
  };

  const handleOpenViewItems = (warehouse) => {
    setCurrentWarehouse(warehouse);
    setOpenViewItems(true);
  };

  const handleCloseViewItems = () => {
    setOpenViewItems(false);
  };

  const handleOpenTransferItem = (warehouse) => {
    setCurrentWarehouse(warehouse);
    setOpenTransferItem(true);
  };

  const handleCloseTransferItem = () => {
    setOpenTransferItem(false);
    setTransferData({ itemId: '', quantity: 0, storeId: '' });
  };

  const handleUpdate = () => {
    const updatedData = {
      name: currentWarehouse.name,
      location: currentWarehouse.location
    };
    dispatch(updateWarehouseRequest(currentWarehouse._id, updatedData));
    handleCloseEdit();
  };

  const handleDelete = (warehouseId) => {
    dispatch(deleteWarehouseRequest(warehouseId));
  };

  const handleAdd = () => {
    dispatch(addWarehouseRequest(newWarehouse));
    handleCloseAdd();
  };

  const handleAddItem = () => {
    const data = {
      itemId: itemData.itemId,
      quantity: itemData.quantity,
      warehouseId: currentWarehouse._id
    };
    dispatch(addItemToWarehouseRequest(data));
    handleCloseAddItem();
  };

  const handleTransferItem = () => {
    const data = {
      itemId: transferData.itemId,
      quantity: transferData.quantity,
      warehouseId: currentWarehouse._id,
      storeId: transferData.storeId
    };
    dispatch(transferItemToStoreRequest(data));
    handleCloseTransferItem();
  };

  return (
    <Container>
      <Typography variant="h4">Warehouses</Typography>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error.message}</Typography>}
      <Button variant="contained" color="primary" onClick={handleOpenAdd}>Add Warehouse</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Warehouse ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {warehouses.map((warehouse) => (
              <TableRow key={warehouse._id}>
                <TableCell>{warehouse._id}</TableCell>
                <TableCell>{warehouse.name}</TableCell>
                <TableCell>{warehouse.location}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleOpenEdit(warehouse)}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(warehouse._id)}>Delete</Button>
                  <Button variant="contained" color="primary" onClick={() => handleOpenAddItem(warehouse)}>Add Item</Button>
                  <Button variant="contained" color="secondary" onClick={() => handleOpenViewItems(warehouse)}>View Items</Button>
                  <Button variant="contained" color="primary" onClick={() => handleOpenTransferItem(warehouse)}>Transfer Item</Button>
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
          <h2 id="edit-modal-title">Edit Warehouse</h2>
          {currentWarehouse && (
            <>
              <TextField
                label="Name"
                value={currentWarehouse.name}
                onChange={(e) => setCurrentWarehouse({ ...currentWarehouse, name: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Location"
                value={currentWarehouse.location}
                onChange={(e) => setCurrentWarehouse({ ...currentWarehouse, location: e.target.value })}
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
          <h2 id="add-modal-title">Add Warehouse</h2>
          <TextField
            label="Name"
            value={newWarehouse.name}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            value={newWarehouse.location}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, location: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>
        </div>
      </Modal>

      <Modal
        open={openAddItem}
        onClose={handleCloseAddItem}
        aria-labelledby="add-item-modal-title"
        aria-describedby="add-item-modal-description"
      >
        <div style={{ padding: '20px', background: 'white', margin: 'auto', marginTop: '10%', width: '30%' }}>
          <h2 id="add-item-modal-title">Add Item to Warehouse</h2>
          <TextField
            label="Item ID"
            value={itemData.itemId}
            onChange={(e) => setItemData({ ...itemData, itemId: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Quantity"
            value={itemData.quantity}
            onChange={(e) => setItemData({ ...itemData, quantity: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddItem}>Add Item</Button>
        </div>
      </Modal>

      <Modal
        open={openViewItems}
        onClose={handleCloseViewItems}
        aria-labelledby="view-items-modal-title"
        aria-describedby="view-items-modal-description"
      >
        <div style={{ padding: '20px', background: 'white', margin: 'auto', marginTop: '10%', width: '50%' }}>
          <h2 id="view-items-modal-title">Items in {currentWarehouse?.name}</h2>
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
                {currentWarehouse?.items?.map((item) => (
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

      <Modal
        open={openTransferItem}
        onClose={handleCloseTransferItem}
        aria-labelledby="transfer-item-modal-title"
        aria-describedby="transfer-item-modal-description"
      >
        <div style={{ padding: '20px', background: 'white', margin: 'auto', marginTop: '10%', width: '30%' }}>
          <h2 id="transfer-item-modal-title">Transfer Item to Store</h2>
          <TextField
            select
            label="Select Item"
            value={transferData.itemId}
            onChange={(e) => setTransferData({ ...transferData, itemId: e.target.value })}
            fullWidth
            margin="normal"
          >
            {currentWarehouse?.items.map((item) => (
              <MenuItem key={item.item._id} value={item.item._id}>
                {item.item.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Quantity"
            value={transferData.quantity}
            onChange={(e) => setTransferData({ ...transferData, quantity: e.target.value })}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            select
            label="Select Store"
            value={transferData.storeId}
            onChange={(e) => setTransferData({ ...transferData, storeId: e.target.value })}
            fullWidth
            margin="normal"
          >
            {stores.map((store) => (
              <MenuItem key={store._id} value={store._id}>
                {store.name}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" color="primary" onClick={handleTransferItem}>Transfer</Button>
        </div>
      </Modal>

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
    </Container>
  );
};

export default WarehousePage;
