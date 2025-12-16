import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from '@mui/material';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.username.trim().length < 2)
      newErrors.username = 'Username must be at least 2 characters';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email';

    if (formData.password.length < 8)
      newErrors.password = 'At least 8 characters';
    else if (!/[a-z]/.test(formData.password))
      newErrors.password = 'Need lowercase letter';
    else if (!/[A-Z]/.test(formData.password))
      newErrors.password = 'Need uppercase letter';
    else if (!/[0-9]/.test(formData.password))
      newErrors.password = 'Need number';
    else if (!/[!@#$%^&*]/.test(formData.password))
      newErrors.password = 'Need special character';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const user = await response.json();
      console.log('User created:', user);

      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () =>
    formData.username.trim() &&
    formData.email.trim() &&
    formData.password &&
    formData.terms;

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 600,
          mb: 4,
        }}
      >
        Sign up
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={!!errors.username}
          helperText={errors.username}
          label="Username"
          sx={{ mb: 3 }}
          autoComplete="username"
        />

        <TextField
          fullWidth
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          label="Email"
          sx={{ mb: 3 }}
          autoComplete="email"
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
          sx={{ mb: 2 }}
          autoComplete="new-password"
        />

        <FormControlLabel
          control={
            <Checkbox
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              sx={{ '&.Mui-checked': { color: '#000' } }}
            />
          }
          label={
            <Typography variant="body2" color="text.secondary">
              By Creating An Account You Agree With Our{' '}
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

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isSubmitting || !isFormValid()}
          sx={{
            mt: 3,
            py: 1.5,
            bgcolor: '#000',
            color: '#fff',
            '&:hover': { bgcolor: '#333' },
          }}
        >
          {isSubmitting ? 'Creating...' : 'Create Account'}
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
