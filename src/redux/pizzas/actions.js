export const GET_PIZZAS = "GET_PIZZAS";

export const getPizzas = url => ({
  type: GET_PIZZAS,
  paylooad: { url }
});
