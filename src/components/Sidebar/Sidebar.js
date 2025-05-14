import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleFilter } from "../../Store/filtersSlice";

import styles from "./Sidebar.module.scss";

function Sidebar() {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleChange = (filterName) => {
    dispatch(toggleFilter(filterName));
  };

  return (
    <div className={styles.sidebar}>
      <p className={styles.title}>Количество пересадок</p>
      <div className={styles.checkbox}>
        <label htmlFor="all">
          <input
            id="all"
            type="checkbox"
            name="all"
            checked={filters.all}
            onChange={handleChange}
          />
          Все
        </label>
      </div>

      <div className={styles.checkbox}>
        <label htmlFor="noTransfers">
          <input
            id="noTransfers"
            type="checkbox"
            name="noTransfers"
            checked={filters.noTransfers}
            onChange={handleChange}
          />
          Без пересадок
        </label>
      </div>

      <div className={styles.checkbox}>
        <label htmlFor="oneTransfer">
          <input
            id="oneTransfer"
            type="checkbox"
            name="oneTransfer"
            checked={filters.oneTransfer}
            onChange={handleChange}
          />
          1 пересадка
        </label>
      </div>

      <div className={styles.checkbox}>
        <label htmlFor="twoTransfers">
          <input
            id="twoTransfers"
            type="checkbox"
            name="twoTransfers"
            checked={filters.twoTransfers}
            onChange={handleChange}
          />
          2 пересадки
        </label>
      </div>

      <div className={styles.checkbox}>
        <label htmlFor="threeTransfers">
          <input
            id="threeTransfers"
            type="checkbox"
            name="threeTransfers"
            checked={filters.threeTransfers}
            onChange={handleChange}
          />
          3 пересадки
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
