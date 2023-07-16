import { useState } from "react";

interface Props {
  title: string;
  description: string;
  url: string;
  imgURL: string;
}

function Card({ title, description, url, imgURL }: Props) {
  const [imageURL, setImageURL] = useState(imgURL);
  const fallbackURL = "/newspaper.png";

  function handleError() {
    setImageURL(fallbackURL);
  }

  return (
    <>
      <div className="card">
        <img
          className="card-img-top"
          src={imageURL ? imageURL : fallbackURL}
          alt=""
          onError={handleError}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-dark">
            Read More...
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
