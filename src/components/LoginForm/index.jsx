import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Link, TextField, Typography } from '@mui/material';

import { useLoginMutation } from '@/api/authApi';

const LoginForm = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [loginError, setLoginError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    try {
      setLoginError('');

      const user = await login(data).unwrap();

      if (user.accessToken) {
        localStorage.setItem('token', user.accessToken);
        navigate('/account');
      }
    } catch (err) {
      setLoginError(err.data.message || 'Invalid username or password');
    }
  };

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
        Login
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{ width: '100%' }}
      >
        <TextField
          fullWidth
          {...register('username', { required: 'Username is required' })}
          label="Username"
          sx={{ mb: 3 }}
          error={!!errors.username}
          helperText={errors.username ? errors.username.message : ''}
        />

        <TextField
          fullWidth
          {...register('password', { required: 'Password is required' })}
          label="Password"
          type="password"
          sx={{ mb: 3 }}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />

        {loginError && (
          <Typography color="error" sx={{ mb: 2 }}>
            {loginError}
          </Typography>
        )}

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
            to="/forgotpassword"
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
          disabled={isLoading}
          sx={{
            py: 1.5,
            mb: 3,
            bgcolor: '#000',
            color: '#fff',
            '&:hover': { bgcolor: '#333' },
            fontWeight: 600,
          }}
        >
          {isLoading ? 'Logging in...' : 'Login'}
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
