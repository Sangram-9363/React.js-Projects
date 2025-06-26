import React from "react";
import BagItem from "../Components/BagItem";
import BagSummery from "../Components/BagSummery";
import { useSelector } from "react-redux";
const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bag);

  const finalItems = items.filter((item) => {
    const itemFound = bagItems.indexOf(item.id);
    return itemFound >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummery></BagSummery>
      </div>
    </main>
  );
};

export default Bag;
