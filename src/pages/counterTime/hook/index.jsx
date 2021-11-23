import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initListings, addListing } from "../../../redux/listingsReducer";

const useCounterTime = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(false);
  const [nameActivity, setNameActivity] = useState("");

  useEffect(() => {
    dispatch(initListings());
  }, [dispatch]);

  useEffect(() => {
    const intervalId =
      startTime &&
      setInterval(() => {
        setTime(time + 1);
      }, 1000);

    return () => clearInterval(intervalId);
  });

  const handleInput = (e) => {
    setNameActivity(e.target.value);
  };

  const saveActivity = () => {
    setStartTime(false);
    dispatch(addListing(nameActivity, time));
    setNameActivity("");
    setTime(0);
  };

  return {
    setStartTime,
    saveActivity,
    time,
    handleInput,
    listings,
    nameActivity,
  };
};
export default useCounterTime;
