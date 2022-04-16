import React from 'react';

import { Input } from '@/presentation/components/Form';
import { Feedback } from '../Feedback';

import './styles.scss';

const Form: React.FC = () => {
  return (
    <form action="">
      <h2>Login</h2>
      <Input type="email" name="email" placeholder="Digite o seu e-mail" />
      <Input type="password" name="password" placeholder="Digite o sua senha" />
      <button type="submit">Entrar</button>
      <span>Criar conta</span>
      <Feedback />
    </form>
  );
};

export { Form };
