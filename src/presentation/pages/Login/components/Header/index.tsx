import React, { memo } from 'react';

import { Logo } from '@/presentation/components';

import './styles.scss';

const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  );
};

export default memo(Header);
