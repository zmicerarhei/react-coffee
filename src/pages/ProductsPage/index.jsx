import morning_coffee from '../../assets/img/morning_coffee.png';
import Card from '../../components/Card/Card';
import { DividerWithIcon } from '../../partials';

import styles from './ProductsPage.module.scss';

const ProductsPage = ({ products }) => {
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
                Afraid at highly months do things on at. Situation recommend objection do intention
                <br />
                so questions.
              </p>
              <p className="description">
                As greatly removed calling pleased improve an.
                <br />
                Last ask him cold feel
                <br />
                met spot shy want. Children me laughing we prospect answered followed. At it went
                <br />
                is song that held help face.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className={styles.divider} />
      <section className={styles.products}>
        <div className="container">
          <div className={styles.filters}>
            <div className={styles.filters__search}>
              <label htmlFor="search">Lookiing for</label>
              <input
                type="text"
                className={styles.filters__input}
                id="search"
                name="search"
                placeholder="start typing here..."
              ></input>
            </div>
            <div className={styles.filters__sort}>
              <span>Or filter</span>
              <div className={styles.filters__btns}>
                <button>Brazil</button>
                <button>Kenya</button>
                <button>Peru</button>
              </div>
            </div>
          </div>
          <div className={styles.products__wrapper}>
            {products.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
