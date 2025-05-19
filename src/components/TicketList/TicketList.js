import React, { useState } from "react";
import { useSelector } from "react-redux";

import Ticket from "../Ticket/Ticket";

import styles from "./TicketList.module.scss";

export default function TicketList() {
  const [visibleCount, setVisibleCount] = useState(5);

  const { tickets, loading } = useSelector((state) => state.tickets);
  const filters = useSelector((state) => state.filters);
  const sort = useSelector((state) => state.sort);

  const activeTransfers = Object.entries(filters)
    .filter(([key, value]) => key !== "all" && value)
    .map(([key]) => {
      if (key === "noTransfers") return 0;
      if (key === "oneTransfer") return 1;
      if (key === "twoTransfers") return 2;
      if (key === "threeTransfers") return 3;
      return null;
    });

  const filtered = tickets.filter((ticket) =>
    ticket.segments.some((segment) =>
      activeTransfers.includes(segment.stops.length),
    ),
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "cheap") return a.price - b.price;
    if (sort === "fast") {
      const aDuration = a.segments.reduce((sum, s) => sum + s.duration, 0);
      const bDuration = b.segments.reduce((sum, s) => sum + s.duration, 0);
      return aDuration - bDuration;
    }
    return 0;
  });

  const displayed = sorted.slice(0, visibleCount);

  const showMore = () => setVisibleCount((prev) => prev + 5);

  return (
    <div className={styles.ticketList}>
      {displayed.map((ticket) => (
        <Ticket
          key={`${ticket.carrier}-${ticket.price}-${ticket.segments[0].origin}-${ticket.segments[0].destination}-${ticket.segments[0].date}`}
          price={ticket.price}
          carrier={ticket.carrier}
          segments={ticket.segments}
        />
      ))}

      {loading && <p>Загрузка билетов...</p>}

      {!loading && displayed.length === 0 && (
        <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
      )}

      {displayed.length < sorted.length && (
        <button type="button" onClick={showMore} className={styles.showMoreBtn}>
          Показать ещё 5 билетов
        </button>
      )}
    </div>
  );
}
