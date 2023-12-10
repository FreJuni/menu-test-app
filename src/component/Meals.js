import React from "react";
import { GlobalContent } from "../context";

const Meals = () => {
  const { content, setModel, singleInfo, Favourite } = GlobalContent();

  if (content === null) {
    console.log("helo");
    return (
      <div className="Error-con">
        <h1>There is no food that you are looking for.</h1>
      </div>
    );
  }

  const handler = (id) => {
    Favourite(id);
  };

  const handle = (id) => {
    setModel(true);
    singleInfo(id);
  };

  return (
    <div className="meal-container">
      {content.length > 0 &&
        content.map((item) => {
          const { id, area, image, category, tag } = item;
          return (
            <article key={id}>
              <img
                className="meal-img"
                src={image}
                alt={area}
                onClick={() => handle(id)}
              />
              <div className="meals-con ">
                <h3>{area}</h3>
                <button className="meal-btn" onClick={() => handler(id)}>
                  <i className="fa-regular fa-thumbs-up"></i>
                </button>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default Meals;
