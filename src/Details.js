import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const url = "https://course-api.com/react-tours-project?id=";

const Details = () => {
  const { id } = useParams();
  //const [detail, setDetail] = useState();

  React.useEffect(() => {
    async function showDetails() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {}
    }
    showDetails();
  }, [id]);

  return (
    <div>
      <h1>this is detail page :{id}</h1>
      <p>{}</p>
      <Link to="/">home</Link>
    </div>
  );
};

export default Details;
