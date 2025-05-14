import React, { useState, useEffect } from "react";

import Ticket from "../Ticket/Ticket";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./TicketList.module.scss";

function TicketList() {
  const [visibleTickets, setVisibleTickets] = useState(5);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const tickets = new Array(10).fill(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sidebarOpen]);

  const handleShowMore = () => {
    setVisibleTickets((prev) => prev + 5);
  };

  return (
    <div className={styles.ticketListWrapper}>
      {isMobile ? (
        <>
          <button
            type="button"
            className={styles.toggleSidebar}
            onClick={() => setSidebarOpen(true)}
          >
            Фильтры
          </button>
          {sidebarOpen && (
            <div className={styles.modalSidebar}>
              <div className={styles.modalContent}>
                <button
                  type="button"
                  className={styles.closeSidebar}
                  onClick={() => setSidebarOpen(false)}
                >
                  &times;
                </button>
                <Sidebar />
              </div>
            </div>
          )}
        </>
      ) : (
        <Sidebar />
      )}

      <div className={styles.ticketList}>
        {tickets.slice(0, visibleTickets).map(() => (
          <Ticket key={Math.random()} />
        ))}
        {visibleTickets < tickets.length && (
          <button
            className={styles.showMore}
            type="button"
            onClick={handleShowMore}
          >
            Показать ещё 5 билетов!
          </button>
        )}
      </div>
    </div>
  );
}

export default TicketList;
