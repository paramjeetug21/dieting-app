import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Items from "./items";
import Error from "./com/erorr";
import Foodinput from "./foodinput";
import { useState } from "react";

function App() {
  // let [food, changed] = useState(["DAL", "Roti", "Rayta", "SAlAD", "dessert"]);
  // console.log(`current value ${food}`);
  // const handondown = (event) => {
  //   console.log(event.target.value);
  //   changed(event.target.value);
  // };
  let food = ["one", "two", "three"];
  let [texttoshow, settextstate] = useState();
  let [fooditems, setfooditems] = useState(["DAL", "Roti"]);
  const handondown = (event) => {
    if (event.key === "Enter" && event.target.value != "") {
      let newfood = event.target.value;
      let newarr = [...fooditems, newfood];
      console.log("food value is enter=>" + newfood);
      setfooditems(newarr);
      event.target.value = "";
    }

    // console.log(event.target.value);
    // settextstate(event.target.value);
  };

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "5%",
        backgroundColor: "violet",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "brown",
          borderRadius: "25%",
          color: "chocolate",
        }}
      >
        Healthy Food
      </h1>
      <Error food={food}></Error>
      <Foodinput handondown={handondown}></Foodinput>

      <Items food={fooditems}></Items>
    </div>
  );
}

export default App;
