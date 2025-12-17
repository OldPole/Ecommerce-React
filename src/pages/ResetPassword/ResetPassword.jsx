import React from 'react';
import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import ResetPasswordForm from '@/components/ResetPasswordForm';

const ResetPassword = () => {
  return (
    <>
      <AppBreadcrumbs items={['Reset Password']} />
      <ResetPasswordForm />
    </>
  );
};

export default ResetPassword;
