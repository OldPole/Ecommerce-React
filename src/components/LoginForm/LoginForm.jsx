import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Button, Link, TextField, Typography } from '@mui/material';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        // вынести в отдельную api.js
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Login failed! status: ${response.status}`);
      }

      const user = await response.json();
      console.log('Login successful:', user);

      localStorage.setItem('token', user.token);

      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setErrors({
        password: 'Invalid username or password',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => formData.username.trim() && formData.password;

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        p: 3,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 600,
          mb: 4,
        }}
      >
        Log in
      </Typography>

      <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
        <TextField
          fullWidth
          name="username"
          value={formData.username}
          onChange={handleChange}
          label="Username"
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          label="Password"
          sx={{ mb: 3 }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 3,
          }}
        >
          <Link
            variant="body2"
            component={RouterLink}
            to="/forgot-password"
            underline="hover"
            sx={{
              color: 'text.secondary',
            }}
          >
            Forgot Password?
          </Link>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isSubmitting || !isFormValid()}
          sx={{
            py: 1.5,
            mb: 3,
            bgcolor: '#000',
            color: '#fff',
            '&:hover': { bgcolor: '#333' },
            fontWeight: 600,
          }}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>

      <Typography
        variant="body2"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        Dont have an account?{' '}
        <Link
          component={RouterLink}
          to="/signup"
          underline="hover"
          sx={{
            color: 'inherit',
            fontWeight: 'bold',
          }}
        >
          Sign up
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
