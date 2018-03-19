import { GET_PIZZAS } from "./actions";
import pizzas from "../../samplePizzas";

const initialState = {
  pizzas: []
};

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PIZZAS:
      return { pizzas };
      break;
    default:
      return initialState;
  }
};
