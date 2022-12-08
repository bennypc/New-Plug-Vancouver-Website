import React from "react";
import "./subcss/about.css";
import ShopItem from "../../components/ShopItem.js";

const ShopPage = () => {
  return (
    <div className="flex justify-center">
      <div className="about-container">
        <h1>Thanks for your order!</h1>
        <p>
          We appreciate your business! If you have any questions, please email
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default ShopPage;
