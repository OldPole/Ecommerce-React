import AppBreadcrumbs from '@/components/ui/AppBreadcrumbs';
import SingupForm from '@/components/ui/SingupForm';
import React from 'react';

const Signup = () => {
  return (
    <>
      <AppBreadcrumbs items={['Sign up']} />
      <SingupForm />
    </>
  );
};

export default Signup;
