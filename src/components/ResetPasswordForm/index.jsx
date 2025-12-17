import React from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography, Box, Link } from '@mui/material';

const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const onSubmit = data => {
    const { newPassword } = data;
    console.log(newPassword);
    navigate('/login');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Reset Password
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{ width: '100%' }}
      >
        <TextField
          fullWidth
          {...register('newPassword', {
            required: 'New password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
          label="New password"
          type="password"
          error={!!errors.newPassword}
          helperText={errors.newPassword?.message}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: value =>
              value === watch('newPassword') || 'Passwords do not match',
          })}
          label="Confirm password"
          type="password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          sx={{ mb: 2 }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isSubmitting}
          sx={{
            py: 1.5,
            mb: 3,
            bgcolor: '#000',
            color: '#fff',
            '&:hover': { bgcolor: '#333' },
            fontWeight: 600,
          }}
        >
          Reset password
        </Button>
      </form>
      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 3, color: 'text.secondary' }}
      >
        Remember your password?{' '}
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

export default ResetPasswordForm;
