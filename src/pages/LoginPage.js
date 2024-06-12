import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { loginRequest } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.auth.user)

    const handleLogin = () => {
        dispatch(loginRequest(email, password));
    };

    useEffect(() => {
        if (currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4">Login</Typography>
                <Typography variant="h6">You can use a test user, or <a href="/register">Register</a> a new user!</Typography>
                <Typography variant="h6">Credentials:
                    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                        <li>email: johndoe@example.com</li>
                        <li>password: john</li>
                    </ul>
                </Typography>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                {error && error.response && error.response.status === 401 ? null : (
                    <Typography color="error">{error && error.message}</Typography>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                    sx={{ mt: 3 }}
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </Button>
            </Box>
        </Container>
    );
};

export default LoginPage;
