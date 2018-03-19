import axios from "axios";
import { object, func } from "prop-types";
import React from "react";
import { remove } from "ramda";

import Basket from "../Basket";
import Page from "../Page";
import PizzaList from "../PizzaList";
import pizzas from "../../samplePizzas";
import Section from "../Section";

export default class HomePage extends React.Component {
  static PropsTypes = {
    pizzas: object,
    dispatch: func
  };

  constructor(props) {
    super(props);
    this.state = {
      order: []
    };
  }

  componentDidMount() {
    // axios
    //   .get("https://pizza-rapid-store.surge.sh/api/pizzas.json")
    //   .then(this.initPizza)
    //   .catch(error => {
    //     console.log(error);
    //   });
    this.props.loadPizzas("");
  }

  // initPizza = response => {
  //   const pizzas = response.data;
  //   this.setState({
  //     pizzas
  //   });
  // };

  addOrder = pizzaId => {
    this.setState(previousState => ({
      order: [...previousState.order, pizzaId]
    }));
  };

  removeFormOrder = pizzaId => {
    this.setState(previousState => ({
      order: remove(
        previousState.order.lastIndexOf(pizzaId),
        1,
        previousState.order
      )
    }));
  };

  render() {
    return (
      <Page>
        <Section id="list" sectionTitle="♨️ Choose your pizza">
          <PizzaList pizzas={this.props.pizzas} addOrder={this.addOrder} />
        </Section>
        <Section id="cart" sectionTitle="💵 Order your pizza">
          <Basket
            orderList={this.state.order}
            pizzas={this.props.pizzas}
            removeFormOrder={this.removeFormOrder}
          />
        </Section>
      </Page>
    );
  }
}
