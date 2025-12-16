import React from 'react';

import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <>
      <AppBreadcrumbs items={['Log in']} />;
      <LoginForm />
    </>
  );
};

export default Login;
