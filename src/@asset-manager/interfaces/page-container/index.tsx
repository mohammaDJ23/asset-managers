import { FC } from 'react';
import styles from './styles.module.css';

const PageContainer: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageContainer;
