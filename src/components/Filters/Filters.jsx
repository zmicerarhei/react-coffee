import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { activeFilterChanged, searchChanged, fetchFilters } from '../../slices/filtersSlice';
import { useHttp } from '../../hooks/http.hook';

import styles from './Filters.module.scss';

const Filters = () => {
  const dispatch = useDispatch();
  const { filtersLoadingStatus, activeFilter, searchValue, filters } = useSelector(state => state.filtersReducer);
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchFilters(request));
  }, []);

  const onSearchVal = e => {
    const value = e.currentTarget.value;
    dispatch(searchChanged(value));
  };

  const setActiveFilter = filter => {
    dispatch(activeFilterChanged(filter));
  };

  const filterButtons = filters.map(({ label, id }) => {
    const classes = classNames(styles.filters__btn, {
      [styles.filters__btn_active]: label === activeFilter,
    });

    return (
      <button className={classes} key={id} onClick={() => setActiveFilter(label)}>
        {label}
      </button>
    );
  });

  return (
    <div className={styles.filters}>
      <div className={styles.filters__search}>
        <label htmlFor="search">Lookiing for</label>
        <input
          type="text"
          value={searchValue}
          onChange={onSearchVal}
          className={styles.filters__input}
          id="search"
          name="search"
          placeholder="start typing here..."
        ></input>
      </div>
      <div className={styles.filters__sort}>
        <span>Or filter</span>
        <div className={styles.filters__btns}>{filterButtons}</div>
      </div>
    </div>
  );
};

export default Filters;
