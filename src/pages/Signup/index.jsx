import React from 'react';

import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import SingupForm from '@/components/SingupForm';

const Signup = () => {
  return (
    <>
      <AppBreadcrumbs items={['Sign up']} />
      <SingupForm />
    </>
  );
};

export default Signup;
