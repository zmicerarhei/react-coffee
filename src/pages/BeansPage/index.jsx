import smoking_cofee from '../../assets/img/smoking_coffee.png';
import { DividerWithIcon } from '../../partials';

import styles from './BeansPage.module.scss';

const BeansPage = () => {
  return (
    <>
      <section className={styles.about}>
        <div className="container">
          <div className={styles.about__wrapper}>
            <div className={styles.about__img}>
              <img src={smoking_cofee} alt="morning coffee" />
            </div>
            <div className={styles.about__text}>
              <h2 className="title mb-20">About our beans</h2>
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
    </>
  );
};

export default BeansPage;
