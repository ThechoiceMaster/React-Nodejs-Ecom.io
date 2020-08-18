import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILED,
} from "../../constants/ProductConstants";
import axios from "axios";

const listProducts = () => async (dispatch) => {
  try {
    dispatch(PRODUCT_LIST_REQUEST);
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAILED, payload: error.message });
  }
};

export { listProducts };
