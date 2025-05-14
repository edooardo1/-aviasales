import React from "react";

import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2>Количество пересадок</h2>
      <div className={styles.checkbox}>
        <label htmlFor="all">
          <input id="all" type="checkbox" />
          Все
        </label>
      </div>
      <div className={styles.checkbox}>
        <label htmlFor="noTransfers">
          <input id="noTransfers" type="checkbox" />
          Без пересадок
        </label>
      </div>
      <div className={styles.checkbox}>
        <label htmlFor="oneTransfer">
          <input id="oneTransfer" type="checkbox" />1 пересадка
        </label>
      </div>
      <div className={styles.checkbox}>
        <label htmlFor="twoTransfers">
          <input id="twoTransfers" type="checkbox" />2 пересадки
        </label>
      </div>
      <div className={styles.checkbox}>
        <label htmlFor="threeTransfers">
          <input id="threeTransfers" type="checkbox" />3 пересадки
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
