import AppBreadcrumbs from '@/components/ui/AppBreadcrumbs';
import LoginForm from '@/components/ui/LoginForm';
import React from 'react';

const Login = () => {
  return (
    <>
      <AppBreadcrumbs items={['Log in']} />;
      <LoginForm />
    </>
  );
};

export default Login;
