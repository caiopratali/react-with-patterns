import React from 'react';

import { Footer } from '@/presentation/components';
import { Header, Form } from './components';

import styles from './styles.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default Login;
