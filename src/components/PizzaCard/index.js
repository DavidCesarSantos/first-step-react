import React, { Component } from "react";
import Button from "material-ui/Button";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
import { func } from "prop-types";

import Price from "../Price";
import { pizza } from "./types";

import { PizzaCardMedia } from "./styles";

export default class Product extends Component {
  static propTypes = {
    details: pizza,
    addOrder: func
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.addOrder(this.props.details.id);
  }

  render() {
    const { title, description, price, currency, image } = this.props.details;
    return (
      <Card>
        <PizzaCardMedia image={image.url} title={title} />
        <CardContent>
          <Typography variant="headline" component="h4">
            {title}
          </Typography>
          <Typography component="p">{description}</Typography>
          <Price price={price} currency={currency} />
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.onClick}>
            Ajouter
          </Button>
        </CardActions>
      </Card>
    );
  }
}
