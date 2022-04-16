import React from 'react';

import { Spinner } from '@/presentation/components';

import styles from './styles.scss';

const Feedback: React.FC = () => {
  return (
    <div className={styles.errorWrap}>
      <Spinner className={styles.spinner} />
      <span>Erro</span>
    </div>
  );
};

export { Feedback };
