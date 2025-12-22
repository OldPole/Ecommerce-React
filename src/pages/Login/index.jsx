import React from 'react';

import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <>
      <AppBreadcrumbs items={['Login']} />;
      <LoginForm />
    </>
  );
};

export default Login;
