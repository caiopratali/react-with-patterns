import React from 'react';

import styles from './styles.scss';

type Props = React.HTMLAttributes<HTMLElement>;

const Spinner: React.FC<Props> = props => {
  return <div className={[styles.ldsDualRing, props.className].join(' ')} />;
};

export { Spinner };
