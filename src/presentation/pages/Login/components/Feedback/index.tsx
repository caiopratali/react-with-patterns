import React, { useContext } from 'react';

import { Spinner } from '@/presentation/components';
import Context from '@/presentation/contexts/form/form';

import styles from './styles.scss';

const Feedback: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context);
  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      {isLoading && <Spinner className={styles.spinner} />}
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export { Feedback };
