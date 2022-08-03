import React from "react";
import "./order.css";
import * as imgs from "../home/images";

class Order extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Colors",
        src: [imgs[0]],
        description: "Samusng something",
        content: "colors i guess",
        price: 1200,
        colors: ["black", "white", "pinkgold", "green"],
        count: 1,
      },
    ],
  };
  render() {
    const { products } = this.state;
    console.log(products);
    return (
      <div className="App">
        {products.map((item) => {
          <div className="details">
            <div className="big-img">
              <img src={item.src[0]} alt="" />
            </div>
          </div>;
        })}
      </div>
    );
  }
}
export default Order;
