import React, { Component } from "react";
import renderer from "react-test-renderer";

import PizzaCard from "../";

const details = {
  id: "2",
  title: "FETA & MIEL - LARDONS",
  description: "Base crème fraîche, mozzarella, lardons fumés, feta, miel doux",
  price: 1199,
  currency: "€",
  image: {
    url:
      "http://thumb.nespi.1mag.kz/A6SzcsAbTHfti_2Jc1p1f1gWO78=/250x0/smart/http://nespi.kz/media/places/photos/c6/7f/a6/12/c67fa61255d756a710cd3a7218529708.jpg"
  }
};
const mutations = [
  {
    name: "renders with addOrder",
    component: PizzaCard,
    props: {
      details: details
    }
  }
];

mutations.forEach(mutation => {
  it(`renders ${mutation.name}`, () => {
    const myComponent = renderer.create(
      <mutation.component {...mutation.props} />
    );
    expect(myComponent.toJSON()).toMatchSnapshot();
  });
});

// it("renders without crashing", () => {
//   const details = {
//     id: "2",
//     title: "FETA & MIEL - LARDONS",
//     description:
//       "Base crème fraîche, mozzarella, lardons fumés, feta, miel doux",
//     price: 1199,
//     currency: "€",
//     image: {
//       url:
//         "http://thumb.nespi.1mag.kz/A6SzcsAbTHfti_2Jc1p1f1gWO78=/250x0/smart/http://nespi.kz/media/places/photos/c6/7f/a6/12/c67fa61255d756a710cd3a7218529708.jpg"
//     }
//   };
//   const myComponent = renderer.create(<PizzaCard details={details} />);
//   expect(myComponent.toJSON()).toMatchSnapshot();
// });

// it("renders with addOrder", () => {
//   const myComponent = <PizzaCard addOrder={() => {}} />;
//   expect(myComponent).toMatchSnapshot();
// });

// it("renders with details", () => {
//   const details = {
//     id: "2",
//     title: "FETA & MIEL - LARDONS",
//     description:
//       "Base crème fraîche, mozzarella, lardons fumés, feta, miel doux",
//     price: 1199,
//     currency: "€",
//     image: {
//       url:
//         "http://thumb.nespi.1mag.kz/A6SzcsAbTHfti_2Jc1p1f1gWO78=/250x0/smart/http://nespi.kz/media/places/photos/c6/7f/a6/12/c67fa61255d756a710cd3a7218529708.jpg"
//     }
//   };
//   const myComponent = <PizzaCard details={details} />;
//   expect(myComponent).toMatchSnapshot();
// });
