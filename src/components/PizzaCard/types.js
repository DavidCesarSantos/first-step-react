import { exact, string, number } from "prop-types";

export const pizza = exact({
  id: string,
  title: string,
  description: string,
  price: number,
  currency: string,
  image: exact({
    url: string
  })
});
