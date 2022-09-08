import React from "react";
import "./CheckoutProducts.css";
import { useStateValue } from "./StateProvider";

function CheckoutProducts({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProducts">
      <img src={image} className="checkoutProducts_image" alt="demo" />
      <div className="checkoutProducts_info">
        <p className="checkoutProducts_title">{title}</p>
        <p className="checkoutProducts_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProducts_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="donut">
                ⭐
              </span>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProducts;
