// import React, { useEffect, useState } from "react";
import React from "react";
// import axios from "axios";

import styles from "./details.module.css";

export default function Details() {
  // const [error, setError] = useState("");

  // console.log(lines);
  // useEffect(() => {
  //   getLinesDetails();
  // }, [lines]);

  const isBusCrowded = (numOfPassenger) => {
    if (numOfPassenger <= 12) {
      return "Bus is Empty";
    } else if (numOfPassenger <= 25) {
      return "Bus is Normal";
    } else if (numOfPassenger < 37) {
      return "Bus is Full";
    }
    return "Bus is Crowded";
  };

  console.log(isBusCrowded(4));

  return (
    <div className={styles.DetailsPage}>
      <div className={styles.mainCon}>
        <section className={styles.searchCont}>
          <div className={styles.search}>
            <input type="text" placeholder="Search.." />
          </div>
        </section>
        <section className={styles.lineDetailsCont}>
          {/* <h3>Line Number:{lines.busLine}</h3>
          <h3>From {lines.start}</h3>
          <h3>To {lines.end}</h3> */}
          <button className={styles.ChangeDirectionBtn}>
            Change Direction
          </button>
        </section>
        <section className={styles.stationCont}>
          {/* <h3>Current Station: {lines.stations[lines.currentStation]}</h3> */}
        </section>
        <section className={styles.mapCont}></section>
        <section className={styles.statusCont}>
          <div className={styles.statusEmpty}>Empty</div>
          <div className={styles.statusNormal}>Normal</div>
          <div className={styles.statusFull}>Full</div>
          <div className={styles.statusCrowded}>Crowded</div>
        </section>
      </div>
    </div>
  );
}
