import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Basket = () => {
  const [price, setPrice] = useState(0);
  const [basket, setBasket] = useOutletContext();
  const handleChange = useOutletContext();

  const handleRemove = (id) => {
    const arr = basket.filter((item) => item.id !== id);
    setBasket(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    basket.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {basket.map((item, index) => (
        <div className="basket-box" key={index}>
          <div className="basket-img">
            <img src={item.image} alt="item-image" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Basket</span>
        <span>$ - {price}</span>
      </div>
    </article>
  );
};

export default Basket;
