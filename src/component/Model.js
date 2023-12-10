import React from "react";
import { GlobalContent } from "../context";

const Model = () => {
  const { single, CloseModel } = GlobalContent();
  const { area, id, image, tag, youtube, category } = single;

  return (
    <div className="model-overlay">
      <div className="model-con">
        <img src={image} alt={area} className="single-image" />
        <div className="info">
          <h2>{area}</h2>
          <p>{category}</p>
          <div>
            <button className="button-btn">
              <a href={youtube}>Wath Trailer</a>
            </button>
          </div>
          <div className="close-con">
            <button className="meal-close" onClick={CloseModel}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
