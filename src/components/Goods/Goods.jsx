import { Link } from "react-router-dom";
import "./Goods.scss";

const dataFromGlobalFetchingStore = [
  {
    id: "scsdcsd",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "scsdcsd1",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "scsdcsd2",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "scsdcsd3",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "scsdcsd",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "scsdcsd1",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "scsdcsd2",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "scsdcsd3",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "scsdcsd",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "scsdcsd1",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "scsdcsd2",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "scsdcsd3",
    title: "Nutrition",
    desc: "Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar. Bir narsa ma'lumotlar.",
    image: "https://via.placeholder.com/200",
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
      <div className="list goods__body">
        {dataFromGlobalFetchingStore.map((item) => (
          <Link className="list__item" to={`/goods/:${item.id}`} key={item.id}>
            <img
              className="list__image"
              src={item.image}
              alt={item.title}
              width="200"
              height="200"
            />
            <div className="list__body">
              <h4 className="list__heading">{item.title}</h4>
              <p className="list__desc">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Goods;
