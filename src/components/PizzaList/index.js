import React, { Component } from "react";
import { arrayOf, func } from "prop-types";

import { pizza } from "../PizzaCard/types";

import Product from "../PizzaCard";
import "./styles.css";
import { LinearProgress } from "material-ui/Progress";

export default class PizzaList extends Component {
  static propTypes = {
    pizzas: arrayOf(pizza),
    addOrder: func
  };

  render() {
    if (this.props.pizzas.length === 0) {
      return <LinearProgress mode="indeterminate" />;
    }
    return (
      <ul>
        {this.props.pizzas.map(pizza => (
          <li className="pizza-card" key={pizza.id}>
            <Product
              addOrder={this.props.addOrder}
              index={pizza.id}
              size={150}
              details={pizza}
            />
          </li>
        ))}
      </ul>
    );
  }
}
