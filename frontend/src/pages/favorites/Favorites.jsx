import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import styles from "./favorites.module.css";
import axios from "axios";

export default function Favorites({ auth, setDetails, favorites, setFavorites }) {
  const [redirectToDetails, setRedirectToDetails] = useState(false);
  const [favoriteLines, setFavoriteLines] = useState([]);


  useEffect(() => {
    online()
  })

  function online() {
    axios.get("/lines")
      .then(res => {
        let temp = [];
        for (let i = 0; i < res.data.length; i++) {
          if (favorites.includes(res.data[i].busLine)) {
            temp.push(res.data[i])
          }
        }
        setFavoriteLines(temp)
      })
      .catch(err => console.log(err))
  }

  function removeLineFromFavoriteList(busLine) {
    const temp = [...favorites]
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === busLine) {
        temp.splice(i, 1)
        setFavorites(temp)
        deleteFromAtlas(temp);
        online();
        break;
      }
    }
  }

  function deleteFromAtlas(temp) {
    axios.patch(`users/delete/${auth.localId}`, { "favorites": temp })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const lines = favoriteLines.map((line, i) => (
    <div className={styles.favoritesDiv} key={i}>
      <section className={styles.headers}>
        <p>Bus NO. {line.busLine} |</p>
        <p>
          From: {line.start}{" "}
          <img className={styles.rightArrow} src={line.imgSrc} alt="" />
        </p>
        <p>To: {line.end}</p>
      </section>
      <button onClick={() => {
        setDetails(line)
        setRedirectToDetails(true)
      }}>More Details</button>
      <button onClick={() => { removeLineFromFavoriteList(line.busLine) }}>Delete From Favorites</button>
    </div>
  ));


  if (redirectToDetails) {
    return <Redirect to="/Details" />;
  }
  return (
    <div><br></br><br></br><br></br><br></br>
      <h1>Favorites</h1>
      {lines}
    </div>
  );
}
