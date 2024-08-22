import ProductList from '../../components/ProductList/ProductList';
import { DividerWithIcon } from '../../partials';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <section className={styles.about}>
        <div className="container">
          <h2 className="title">About Us</h2>
          <DividerWithIcon color="black" mb="40" />
          <p className={`description ${styles.about__description}`}>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months
            do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased
            improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At
            it went is song that held help face.
          </p>
          <p className={`description ${styles.about__description}`}>
            Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for
            ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness
            furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.
          </p>
        </div>
      </section>
      <section className={styles.best}>
        <div className="container">
          <h2 className="title">Our best</h2>
          <ProductList best={true} />
        </div>
      </section>
    </>
  );
};

export default MainPage;
