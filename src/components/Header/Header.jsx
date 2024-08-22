import { NavLink, useLocation } from 'react-router-dom';

import classNames from 'classnames';

import styles from './Header.module.scss';

import { DividerWithIcon } from '../../partials';
import NavLinks from '../NavLinks/NavLinks';

const Header = () => {
  const { pathname } = useLocation();

  const headerClasses = classNames(styles.header, {
    [styles.header__main]: pathname === '/',
    [styles.header__products]: pathname.includes('products'),
    [styles.header__beans]: pathname.includes('gallery'),
  });

  const title = pathname.includes('products') ? 'Our coffee' : 'Everything You Love About Coffee';

  return (
    <header className={headerClasses}>
      <NavLinks />
      <div className="container">
        <div className={styles.promo}>
          <h1 className={styles.promo__title}>{title}</h1>
          {pathname === '/' && (
            <>
              <DividerWithIcon mb="34" />
              <h2 className={styles.promo__subtitle}>We makes every day full of energy and taste</h2>
              <h2 className={styles.promo__subtitle}>Want to try our beans?</h2>
              <NavLink to="/products" className={styles.promo__button}>
                More
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
