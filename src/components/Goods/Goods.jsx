import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByValue } from "../../redux/counter";
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
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

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
      <div className="goods__body">
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByValue(2))}>+2</button>
      </div>
    </div>
  );
}

export default Goods;
