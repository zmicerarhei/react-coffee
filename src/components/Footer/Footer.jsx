import styles from './Footer.module.scss';

import { DividerWithIcon } from '../../partials';
import NavLinks from '../NavLinks/NavLinks';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <NavLinks parent="footer" />
        <DividerWithIcon color="black" />
      </div>
    </footer>
  );
};

export default Footer;
