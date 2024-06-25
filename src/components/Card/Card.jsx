import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

const Card = ({ id, img, title, country, price }) => {
  return (
    <Link to={`/products/${id}`} className={styles.card}>
      <img src={process.env.PUBLIC_URL + `/images/goods/${img}.png`} alt={title} />
      <p className={styles.card__title}>{title}</p>
      <p className={styles.card__country}>{country}</p>
      <p className={styles.card__price}>{price}$</p>
    </Link>
  );
};

export default Card;
