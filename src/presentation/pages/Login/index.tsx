import React from 'react';

import { Spinner } from '@/presentation/components';

import Footer from '@/presentation/components/Footer';
import Header from './components/Header';

import styles from './styles.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <form action="">
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Digite o seu e-mail" />
        <input
          type="password"
          name="password"
          placeholder="Digite o sua senha"
        />
        <button type="submit">Entrar</button>
        <span>Criar conta</span>
        <div className={styles.errorWrap}>
          <Spinner className={styles.spinner} />
          <span>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
