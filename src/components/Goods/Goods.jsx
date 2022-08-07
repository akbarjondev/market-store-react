import React from "react";
import "./Goods.scss";

const dataFromGlobalFetchingStore = [
  {
    id: "scsdcsd",
    name: "Car toy",
    price: "12300",
    numberInStore: 0,
    category: 1,
  },
  {
    id: "1scsdcsd",
    name: "Knife",
    price: "22300",
    numberInStore: 10,
    category: 2,
  },
  {
    id: "2scsdcsd",
    name: "Computer",
    price: "312300",
    numberInStore: 99,
    category: 3,
  },
];

function Goods() {
  return (
    <div className="goods">
      <div className="goods__form">
        <label className="goods__label">
          <span className="goods__search">Search:</span>
          <input
            className="goods__input"
            type="text"
            placeholder="Good's name"
          />
        </label>
      </div>
      {/* End of form */}
    </div>
  );
}

export default Goods;
