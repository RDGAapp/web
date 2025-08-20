import LogoLoader from 'components/LogoLoader';

import styles from './styles.module.css';

const Loading = () => (
  <div className={styles.container}>
    <LogoLoader />
  </div>
);

export default Loading;
