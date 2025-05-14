import React from "react";

import Header from "./components/Header/Header";
import SortTabs from "./components/SortTabs/SortTabs";
import TicketList from "./components/TicketList/TicketList";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <div className={styles.content}>
          <SortTabs />
          <TicketList />
        </div>
      </div>
    </div>
  );
}

export default App;
