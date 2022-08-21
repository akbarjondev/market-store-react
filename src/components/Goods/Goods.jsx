import React, { useEffect, useLayoutEffect, useRef } from "react";
import { TransitionGroup } from "react-transition-group";
import "./Goods.scss";
import { sanitizeUrl } from "../../helpers";

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

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Goods() {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current = true;
  });

  useLayoutEffect(() => {
    console.log(myRef);
  });

  return (
    <TransitionGroup timeout={duration}>
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
    </TransitionGroup>
  );
}

export default Goods;
