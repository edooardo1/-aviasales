import React, { useState, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";

import store from "./Store";
import TicketList from "./components/TicketList/TicketList";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import SortTabs from "./components/SortTabs/SortTabs";
import { fetchTickets } from "./Store/ticketsSlice";

function MainApp() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div className={styles.app}>
      <Header />
      <button
        type="button"
        onClick={handleOpenSidebar}
        className={styles.mobileOpenBtn}
      >
        Фильтры
      </button>

      <div className={styles.mainLayout}>
        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

        <main className={styles.ticketSection}>
          <SortTabs />
          <TicketList />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
