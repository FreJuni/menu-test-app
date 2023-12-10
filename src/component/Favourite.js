import React from "react";
import { GlobalContent } from "../context";

const Favourite = () => {
  const { favourite, removeFromList, singleInfo, setModel } = GlobalContent();
  const handle = (id) => {
    singleInfo(id, true);
    setModel(true);
  };
  return (
    <>
      {favourite.length > 0 && (
        <div className="favourite-con">
          {favourite.map((item) => {
            const { id } = item;
            return (
              <div key={id}>
                <div className="fav-image" onClick={() => handle(id)}>
                  <img src={item.image} alt={item.area} />
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromList(id)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Favourite;
