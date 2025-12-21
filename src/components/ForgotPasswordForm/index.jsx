import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography, Box } from '@mui/material';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const email = data.email;

    console.log(email);
    const fakeServerToken = '123';

    navigate(`/resetpassword/${fakeServerToken}`);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Please enter the email address associated with your account. We will
        promptly send you a link to reset your password.
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{ width: '100%' }}
      >
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
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            py: 1.5,
            mb: 3,
            bgcolor: '#000',
            color: '#fff',
            '&:hover': { bgcolor: '#333' },
            fontWeight: 600,
          }}
        >
          Send reset link
        </Button>
      </form>
    </Box>
  );
};

export default ForgotPasswordForm;
