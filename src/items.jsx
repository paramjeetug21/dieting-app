import "bootstrap/dist/css/bootstrap.min.css";
import style from "./items.module.css";
import "./App.css";
const Items = ({ food }) => {
  const clicked = (fooditem) => {
    console.log(`this is click as ${fooditem}`);
  };
  return (
    <ul className="list-group ">
      {food.map((item) => (
        <li key={item} className="list-group-item " style={{ color: "red" }}>
          {item}
          <button
            type="button"
            className="btn btn-primary le"
            onClick={() => clicked(item)}
          >
            buy{" "}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Items;
