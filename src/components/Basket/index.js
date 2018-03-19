import React, { Component } from "react";
import OrderList from "../OrderList";
import OrderList2 from "../OrderList2";
import Button from "material-ui/Button";
import PayIcon from "material-ui-icons/Payment";

export default class Basket extends Component {
  render() {
    if (this.props.orderList.length === 0) {
      return <p>Empty Basket</p>;
    }
    return (
      <div id="order">
        <OrderList2
          orderList={this.props.orderList}
          pizzas={this.props.pizzas}
          removeFormOrder={this.props.removeFormOrder}
        />
        {/* 5 - Déclarer un composant Order 3 props removeOrder, pizzas et order
                removeOrder est une méthode, pizzas et orders récupèrent leur state respectifs */}
        <Button variant="raised" color="primary">
          <PayIcon />
        </Button>
      </div>
    );
  }
}
