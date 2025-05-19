import React from "react";

import styles from "./Ticket.module.scss";

function Ticket({ price, carrier, segments }) {
  const getStopsLabel = (count) => {
    if (count === 0) return "Без пересадок";
    if (count === 1) return "1 пересадка";
    if (count < 5) return `${count} пересадки`;
    return `${count} пересадок`;
  };

  function formatTime(dateStr, durationMinutes) {
    const departure = new Date(dateStr);
    const arrival = new Date(departure.getTime() + durationMinutes * 60000);

    const format = (d) => d.toTimeString().slice(0, 5);
    return `${format(departure)} – ${format(arrival)}`;
  }

  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>{price} ₽</div>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt="Airline logo"
          className={styles.logo}
        />
      </div>

      {segments.map((segment) => (
        <div
          className={styles.segments}
          key={`${segment.origin}-${segment.destination}`}
        >
          <div className={styles.segment}>
            <div className={styles.label}>
              {segment.origin} – {segment.destination}
            </div>
            <div className={styles.value}>
              {formatTime(segment.date, segment.duration)}
            </div>
          </div>
          <div className={styles.segment}>
            <div className={styles.label}>В пути</div>
            <div className={styles.value}>
              {Math.floor(segment.duration / 60)}ч {segment.duration % 60}м
            </div>
          </div>
          <div className={styles.segment}>
            <div className={styles.label}>
              {getStopsLabel(segment.stops.length)}
            </div>
            <div className={styles.value}>{segment.stops.join(", ")}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ticket;
