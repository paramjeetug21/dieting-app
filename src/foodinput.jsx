import style from "./foodinput.module.css";
const btao = (event) => {
  console.log(event.target.value);
};
const Foodinput = ({ handondown }) => {
  return (
    <input
      style={{ width: "100%", margin: "10px" }}
      className={style.foodinput}
      type="text"
      placeholder="ha bhai kya khana hai "
      onKeyDown={handondown}
    />
  );
};
export default Foodinput;
