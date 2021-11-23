import listingsService from "../services/listingsService";

const listingsReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_LISTINGS":
      return action.data;
    case "ADD_LISTING":
      return [...state, action.data];
    default:
      return state;
  }
};

export const initListings = () => {
  return async (dispatch) => {
    const listings = await listingsService.getAll();
    dispatch({
      type: "INIT_LISTINGS",
      data: listings,
    });
  };
};

export const addListing = (activity, time) => {
  return async (dispatch) => {
    const listing = await listingsService.addListing(activity, time);
    dispatch({
      type: "ADD_LISTING",
      data: listing,
    });
  };
};

export default listingsReducer;
