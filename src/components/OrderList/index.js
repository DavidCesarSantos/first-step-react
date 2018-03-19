import React, { Component } from "react";
import Table, { TableBody, TableCell, TableRow } from "material-ui/Table";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import { countBy } from "ramda";

import Price from "../Price";

export default class OrderList extends Component {
  render() {
    const orderList = this.props.orderList;
    const pizzas = this.props.pizzas;
    return (
      <Table>
        <TableBody>
          {pizzas.map(n => {
            const orderNumber = countBy(i => i)(orderList);
            console.log(orderNumber[n.id]);
            if (orderNumber[n.id] === undefined) {
              return null;
            }
            return (
              <TableRow key={n.id}>
                <TableCell numeric>X{orderNumber[n.id]}</TableCell>
                <TableCell>{n.title}</TableCell>
                <TableCell numeric>
                  <Price price={n.price} currency={n.currency} />
                </TableCell>
                <TableCell numeric>
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}
