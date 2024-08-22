import { useEffect, useState } from 'react';
import { DividerWithIcon } from '../../partials';
import styles from './ProductPage.module.scss';

import { useParams } from 'react-router';
import { useHttp } from '../../hooks/http.hook';

const ProductPage = () => {
  const { request } = useHttp();
  const params = useParams();
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    request(`https://json-server-online.vercel.app/products/${params.id}`)
      .then(res => {
        setCurrentProduct(res);
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  return (
    <section className={styles.product}>
      <div className={`container ${styles.product__container}`}>
        <div className={styles.product__image}>
          <img src={process.env.PUBLIC_URL + `/images/goods/${currentProduct.img}.png`} alt="product_img" />
        </div>
        <div className={styles.product__about}>
          <h2 className="title">About it</h2>
          <DividerWithIcon color="black" mb="25" />
          <p className="description">
            <b>Brand: </b>
            {currentProduct.title}
          </p>
          <p className="description">
            <b>Country:</b> {currentProduct.country}
          </p>
          <p className="description">
            <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="description">
            <b>Price:</b> <span>{currentProduct.price}$</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
