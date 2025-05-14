import React from "react";

import logo from "../../assets/airlane.png";

import styles from "./Ticket.module.scss";

function Ticket() {
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>13 400 ₽</div>
        <img src={logo} alt="Airline logo" className={styles.logo} />
      </div>
      <div className={styles.segments}>
        <div className={styles.segment}>
          <div className={styles.label}>MOW – HKT</div>
          <div className={styles.value}>10:45 – 08:00</div>
        </div>
        <div className={styles.segment}>
          <div className={styles.label}>В ПУТИ</div>
          <div className={styles.value}>21ч 15м</div>
        </div>
        <div className={styles.segment}>
          <div className={styles.label}>2 ПЕРЕСАДКИ</div>
          <div className={styles.value}>HKG, JNB</div>
        </div>
      </div>
      <div className={styles.segments}>
        <div className={styles.segment}>
          <div className={styles.label}>HKT – MOW</div>
          <div className={styles.value}>11:20 – 23:50</div>
        </div>
        <div className={styles.segment}>
          <div className={styles.label}>В ПУТИ</div>
          <div className={styles.value}>12ч 30м</div>
        </div>
        <div className={styles.segment}>
          <div className={styles.label}>1 ПЕРЕСАДКА</div>
          <div className={styles.value}>DXB</div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
