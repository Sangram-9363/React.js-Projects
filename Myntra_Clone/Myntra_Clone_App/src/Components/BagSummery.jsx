import React from "react";
import { useSelector } from "react-redux";

const BagSummery = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => {
    const itemFound = bagItems.indexOf(item.id);
    return itemFound >= 0;
  });

  const ConvenienceFee = 99;
  let totalItem = finalItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + ConvenienceFee;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS {totalItem} Items</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{ConvenienceFee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button
        className="btn-place-order"
        onClick={() => {
          console.log("clicked on place order in cart");
        }}
      >
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummery;
