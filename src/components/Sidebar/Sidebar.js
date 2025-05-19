import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { toggleFilter } from "../../Store/filtersSlice";

import styles from "./Sidebar.module.scss";

const filterLabels = [
  { id: "all", label: "Все" },
  { id: "noTransfers", label: "Без пересадок" },
  { id: "oneTransfer", label: "1 пересадка" },
  { id: "twoTransfers", label: "2 пересадки" },
  { id: "threeTransfers", label: "3 пересадки" },
];

export default function Sidebar({ isOpen, onClose }) {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleChange = (filterId) => {
    dispatch(toggleFilter(filterId));
  };

  const sidebarClass = classNames(styles.sidebarContainer, {
    [styles.open]: isOpen,
  });

  return (
    <>
      <div className={sidebarClass}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрыть фильтры"
        >
          ✕
        </button>

        <div className={styles.sidebarContent}>
          {filterLabels.map(({ id, label }) => (
            <div key={id} className={styles.filterGroup}>
              <input
                type="checkbox"
                id={id}
                checked={filters[id]}
                onChange={() => handleChange(id)}
              />
              <label htmlFor={id}>{label}</label>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={onClose}
          role="presentation"
        />
      )}
    </>
  );
}
