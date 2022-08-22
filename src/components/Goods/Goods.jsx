import { increment, decrement } from "../../redux/counter";
import { useDispatch, useSelector } from "react-redux";
import "./Goods.scss";

function Goods() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

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
        <h3>{count}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default Goods;
