import MoonLoader from 'react-spinners/MoonLoader';

import styles from './Preloader.module.scss';

const Preloader = () => {
  const override = {
    display: 'block',
    borderColor: '#000',
  };

  return (
    <div className={styles.loader}>
      <MoonLoader loading={true} cssOverride={override} />
    </div>
  );
};

export default Preloader;
