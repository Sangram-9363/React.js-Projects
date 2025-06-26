import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FeachingStatusActions } from "../store/FetchingStatusSlice";
import { itemActions } from "../store/ItemSlice";

const FeatchingStatus = () => {
  const featchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (featchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(FeachingStatusActions.FEATCHINGSTARTED());
    fetch("http://localhost:8080/items", { signal })
      .then((data) => data.json())
      .then(({items}) => {
        dispatch(FeachingStatusActions.MARKFEATCHDONE());
        dispatch(FeachingStatusActions.FEATCHINGFINISHED());
        dispatch(itemActions.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }),
    [featchStatus];
  return <></>;
};

export default FeatchingStatus;
