import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h1>its my tour</h1>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
