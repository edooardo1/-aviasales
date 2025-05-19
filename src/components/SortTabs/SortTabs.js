import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSort } from "../../Store/sortSlice";

import styles from "./SortTabs.module.scss";

const tabs = [
  { id: "cheap", label: "Самый дешевый" },
  { id: "fast", label: "Самый быстрый" },
  { id: "optimal", label: "Оптимальный" },
];

function SortTabs() {
  const activeSort = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => dispatch(setSort(tab.id))}
          className={`${styles.tab} ${tab.id === activeSort ? styles.active : ""}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default SortTabs;
