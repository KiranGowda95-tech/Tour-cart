import React from "react";
//import { useState } from "react";
import { Link } from "react-router-dom";

const Tour = ({ id, image, name, price, info }) => {
  //const [readMore,setReadMore]=useState(false);
  return (
    <article className="single-tour">
      {/* <h1>lead architect</h1> */}
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">₹ {price}</h4>
        </div>
        {/* <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p> */}
        <Link to={`/details/${id}`} className="detail-btn">
          Details
        </Link>
      </footer>
    </article>
  );
};

export default Tour;
