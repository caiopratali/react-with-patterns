import { Logo } from '@/presentation/components/Logo';
import { Spinner } from '@/presentation/components/Spinner';
import React from 'react';

import styles from './styles.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <Logo />
        <h1>4Dev - Enquetes para Programadores</h1>
      </header>
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
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default Login;
