import React from 'react';

import Footer from '@/presentation/components/Footer';
import Header from './components/Header';

import styles from './styles.scss';
import { Form } from './components/Form';

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
