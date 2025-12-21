import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import { useRegisterMutation } from '@/api/authApi';

const SignupForm = () => {
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async data => {
    try {
      const result = await registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
      }).unwrap();

      console.log('Registration success:', result);

      navigate('/login');
    } catch (err) {
      console.error(err.data?.message || 'Registration failed.');
    }
  };

  const isTermsAccepted = watch('terms');

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 600, mb: 4 }}
      >
        Sign up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          fullWidth
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 2,
              message: 'Username must be at least 2 characters',
            },
          })}
          label="Username"
          error={!!errors.username}
          helperText={errors.username?.message}
          sx={{ mb: 3 }}
          autoComplete="username"
        />

        <TextField
          fullWidth
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          label="Email"
          type="email"
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{ mb: 3 }}
          autoComplete="email"
        />

        <TextField
          fullWidth
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'At least 8 characters',
            },
            validate: {
              lowercase: value =>
                /[a-z]/.test(value) || 'Need lowercase letter',
              uppercase: value =>
                /[A-Z]/.test(value) || 'Need uppercase letter',
              number: value => /[0-9]/.test(value) || 'Need number',
              specialChar: value =>
                /[!@#$%^&*]/.test(value) || 'Need special character',
            },
          })}
          label="Password"
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ mb: 2 }}
          autoComplete="new-password"
        />

        <FormControlLabel
          control={
            <Checkbox
              {...register('terms', { required: 'You must accept the terms' })}
              sx={{ '&.Mui-checked': { color: '#000' } }}
            />
          }
          label={
            <Typography variant="body2" color="text.secondary">
              By creating an account, you agree with our{' '}
              <Link
                component={RouterLink}
                to="/terms"
                underline="hover"
                color="text.secondary"
                fontWeight={600}
              >
                Terms
              </Link>
              ,{' '}
              <Link
                component={RouterLink}
                to="/privacy"
                underline="hover"
                color="text.secondary"
                fontWeight={600}
              >
                Privacy
              </Link>
            </Typography>
          }
          sx={{ mt: 2, mb: 1 }}
        />
        {errors.terms && (
          <Typography color="error" sx={{ mb: 2 }}>
            {errors.terms.message}
          </Typography>
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isLoading || !isTermsAccepted}
          sx={{
            mt: 3,
            py: 1.5,
            bgcolor: '#000',
            color: '#fff',
            '&:hover': { bgcolor: '#333' },
          }}
        >
          {isLoading ? 'Creating...' : 'Create Account'}
        </Button>
      </form>

      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 3, color: 'text.secondary' }}
      >
        Already have an account?{' '}
        <Link
          component={RouterLink}
          to="/login"
          underline="hover"
          color="inherit"
          fontWeight="bold"
        >
          Log in
        </Link>
      </Typography>
    </Box>
  );
};

export default SignupForm;
