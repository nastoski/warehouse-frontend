# Warehouse Management System

## Overview

This project is a Warehouse Management System with frontend and backend components. The frontend is built using React, Redux, and Redux-Saga for state management and side effects, while the backend is implemented using Node.js, Express, and MongoDB.

---

## Table of Contents

1. [Frontend Setup](#frontend-setup)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
    - [Environment Variables](#environment-variables)
    - [Available Scripts](#available-scripts)
2. [Backend Setup](#backend-setup)
    - [Installation](#installation-1)
    - [Running the Application](#running-the-application-1)
    - [Environment Variables](#environment-variables-1)
    - [API Endpoints](#api-endpoints)
3. [How to Use the Application](#how-to-use-the-application)

---

## Frontend Setup

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/nastoski/warehouse-frontend.git
    cd warehouse-frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to:
    ```sh
    http://localhost:3000
    ```

### Environment Variables

Create a `.env` file in the `frontend` directory and add the following environment variables:

REACT_APP_API_BASE_URL=http://localhost:8080/api

### Available Scripts

- `npm start`: Starts the development server.
- `npm build`: Builds the application for production.
- `npm test`: Runs the test suite.
- `npm eject`: Ejects the configuration files (use with caution).

---

## Backend Setup

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/nastoski/warehouse-backend.git
    cd warehouse-backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

1. Start the server:
    ```sh
    npm start
    ```

2. The server will start on:
    ```sh
    http://localhost:8080
    ```

### Environment Variables

Create a `.env` file in the `warehouse-backend` directory and add the following environment variables:

    
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.3zbkqdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    
    MONGODB_DB_NAME=warehousedb
    
    JWT=your_jwt_secret
    
    NODE_ENV=(local for development, production when deployed)
    

### API Endpoints

- **Authentication**
  - `POST /auth/login`: Login user
  - `POST /auth/register`: Register user
  - `POST /auth/logout`: Logout user
  - `GET /auth/check-status`: Check authentication status

- **Warehouses**
  - `GET /warehouses`: Get all warehouses
  - `POST /warehouses`: Create a new warehouse
  - `PUT /warehouses/:id`: Update warehouse by ID
  - `DELETE /warehouses/:id`: Delete warehouse by ID

- **Stores**
  - `GET /stores`: Get all stores
  - `POST /stores`: Create a new store
  - `PUT /stores/:id`: Update store by ID
  - `DELETE /stores/:id`: Delete store by ID

- **Items**
  - `GET /items`: Get all items
  - `POST /items`: Create a new item
  - `PUT /items/:id`: Update item by ID
  - `DELETE /items/:id`: Delete item by ID

- **Add Item to Warehouse**
  - `POST /warehouses/add-item`
- **Transfer Item from Warehouse to Store**
  - `POST /transfers/transfer-to-store`

---

## How to Use the Application

### 1. Register a New User

1. Navigate to the registration page:
    ```sh
    http://localhost:3000/register
    ```

2. Fill in the required fields (email and password) and submit the form to create a new account.

### 2. Login

1. Navigate to the login page:
    ```sh
    http://localhost:3000/login
    ```

2. Enter your credentials and submit the form to log in.

### 3. Navigate the Dashboard

1. Once logged in, you will be redirected to the home page:
    ```sh
    http://localhost:3000/
    ```

2. Use the sidebar to navigate between different sections of the application:
    - Home
    - Items
    - Warehouses
    - Stores

### 4. Manage Warehouses

1. Navigate to the Warehouses page:
    ```sh
    http://localhost:3000/warehouses
    ```

2. Here you can:
    - View all warehouses
    - Add a new warehouse
    - Update an existing warehouse
    - Delete a warehouse
    - View warehouse items
    - Add item to warehouse
    - Transfer item from warehouse to store

### 5. Manage Stores

1. Navigate to the Stores page:
    ```sh
    http://localhost:3000/stores
    ```

2. Here you can:
    - View all stores
    - Add a new store
    - Update an existing store
    - Delete a store
    - View store items

### 6. Manage Items

1. Navigate to the Items page:
    ```sh
    http://localhost:3000/items
    ```

2. Here you can:
    - View all items
    - Add a new item
    - Update an existing item
    - Delete an item

### 7. Logout

1. To log out, simply click the logout button available in the navigation bar. This will clear your session and redirect you to the login page.
