import React from "react";

import styles from "./SortTabs.module.scss";

const tabs = [
  { id: "cheap", label: "Самый дешевый" },
  { id: "fast", label: "Самый быстрый" },
  { id: "optimal", label: "Оптимальный" },
];

function SortTabs() {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`${styles.tab} ${tab.id === "cheap" ? styles.active : ""}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default SortTabs;
