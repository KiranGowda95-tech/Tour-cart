import "./styles.css";
import React, { useState, useEffect } from "react";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

export default function Home() {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="App">
      <main>
        <Tours tours={tours} />
      </main>
    </div>
  );
}
