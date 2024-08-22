import morning_coffee from '../../assets/img/morning_coffee.png';
import ProductList from '../../components/ProductList/ProductList';
import { DividerWithIcon } from '../../partials';
import Filters from '../../components/Filters/Filters';

import styles from './ProductsPage.module.scss';

const ProductsPage = () => {
  return (
    <>
      <section className={styles.about}>
        <div className="container">
          <div className={styles.about__wrapper}>
            <div className={styles.about__img}>
              <img src={morning_coffee} alt="morning coffee" />
            </div>
            <div className={styles.about__text}>
              <h2 className="title mb-20">About our coffee</h2>
              <DividerWithIcon color="black" mb="34" />
              <p className="description mb-20">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              </p>
              <p className="description mb-20">
                Afraid at highly months do things on at. Situation recommend objection do intention so questions.
              </p>
              <p className="description">
                As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me
                laughing we prospect answered followed. At it went is song that held help face.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className={styles.divider} />
      <section className={styles.products}>
        <div className="container">
          <Filters />
          <ProductList />
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
