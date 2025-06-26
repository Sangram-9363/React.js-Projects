import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../store/BagSlice.js";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);

  const handleAddtoBag = () => {
    dispatch(BagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(BagActions.remove(item.id));
  };

  const itemFound = bagItems.indexOf(item.id) >= 0;

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {itemFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemove}
        >
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddtoBag}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
