const listData = [];
const getAll = () => {
  return listData;
};
const addListing = (activity, time) => {
  const listing = {
    activity,
    time,
  };
  return listing;
};
export default {
  getAll,
  addListing,
};
