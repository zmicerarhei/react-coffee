import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import styles from './BeansPage.module.scss';

const BeansPage = () => {
  return (
    <>
      <section className={styles.about}>
        <div className="container">
          <Splide
            onPaginationMounted={splide => {
              const items = splide.Components.Pagination.items;
            }}
            options={{
              type: 'loop',
              width: '100%',
              height: 500,
              interval: 5000,
              speed: 2500,
              arrows: true,
              pagination: false,
            }}
            aria-label="Homepage Slider"
          >
            <SplideSlide>
              <img
                className={styles.slider__img}
                src={process.env.PUBLIC_URL + `/images/gallery/raw_beans.png`}
                alt="raw_beans"
              />
              <h1>HELLO</h1>
            </SplideSlide>
            <SplideSlide>
              <img
                className={styles.slider__img}
                src={process.env.PUBLIC_URL + `/images/gallery/roasted_beans.png`}
                alt="raw_beans"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className={styles.slider__img}
                src={process.env.PUBLIC_URL + `/images/gallery/plantation.png`}
                alt="raw_beans"
              />
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </>
  );
};

export default BeansPage;
