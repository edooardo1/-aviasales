import React, { useState } from "react";
import { useSelector } from "react-redux";

import Ticket from "../Ticket/Ticket";

import styles from "./TicketList.module.scss";

export default function TicketList() {
  const tickets = useSelector((state) => state.tickets.tickets);
  const [visibleCount, setVisibleCount] = useState(5);

  const showMore = () => setVisibleCount((prev) => prev + 5);

  return (
    <div className={styles.ticketList}>
      {tickets.slice(0, visibleCount).map((ticket) => (
        <Ticket
          key={`${ticket.carrier}-${ticket.price}-${ticket.segments[0].origin}-${ticket.segments[0].destination}`}
          price={ticket.price}
          carrier={ticket.carrier}
          segments={ticket.segments}
        />
      ))}
      {visibleCount < tickets.length && (
        <button type="button" onClick={showMore} className={styles.showMoreBtn}>
          Показать ещё 5 билетов
        </button>
      )}
    </div>
  );
}
