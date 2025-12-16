import React from 'react';

import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <>
      <AppBreadcrumbs items={['Forgot Password']} />;
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPassword;
