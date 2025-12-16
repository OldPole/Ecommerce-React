import React from 'react';
import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import ResetForm from '@/components/ResetForm';

const Reset = () => {
  return (
    <>
      <AppBreadcrumbs items={['Reset Password']} />
      <ResetForm />
    </>
  );
};

export default Reset;
