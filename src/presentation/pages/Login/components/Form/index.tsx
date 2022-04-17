import React, { useState } from 'react';

import { Input } from '@/presentation/components/Form';
import Context from '@/presentation/contexts/form/form';
import { Feedback } from '../Feedback';

import './styles.scss';

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
};

const Form: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  });

  return (
    <Context.Provider value={state}>
      <form action="">
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite o seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Digite o sua senha"
        />
        <button data-testid="submit" type="submit" disabled>
          Entrar
        </button>
        <span>Criar conta</span>
        <Feedback />
      </form>
    </Context.Provider>
  );
};

export { Form };
