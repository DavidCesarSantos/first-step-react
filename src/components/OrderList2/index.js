import React, { Component } from "react";
import Table, { TableBody, TableCell, TableRow } from "material-ui/Table";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import orderToBasketLines from "../../business/order-to-basket-lines";

import Price from "../Price";

export default class OrderList2 extends Component {
  static defaultProps = {
    removeFormOrder: Function.prototype
  };

  renderRow(orderDetail, removeFormOrder) {
    return (
      <TableRow key={orderDetail.id}>
        <TableCell numeric>X{orderDetail.number}</TableCell>
        <TableCell>{orderDetail.title}</TableCell>
        <TableCell numeric>
          <Price price={orderDetail.price} currency={orderDetail.currency} />
        </TableCell>
        <TableCell numeric>
          <IconButton
            aria-label="Delete"
            onClick={() => this.props.removeFormOrder(orderDetail.id)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
  render() {
    const orderList = this.props.orderList;
    const pizzas = this.props.pizzas;
    const removeFormOrder = this.props.removeFormOrder;

    const basketLinesData = orderToBasketLines(orderList, pizzas);
    return (
      <Table>
        <TableBody>
          {basketLinesData.map(basketLine =>
            this.renderRow(basketLine, removeFormOrder)
          )}
        </TableBody>
      </Table>
    );
  }
}
