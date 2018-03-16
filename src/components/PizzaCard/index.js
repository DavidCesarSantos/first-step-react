import React, { Component } from "react";
import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import { func } from "prop-types";

import Price from "../Price";
import { pizza } from "./types";

import "./styles.css";

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
        <CardMedia
          image={image.url}
          title={title}
          className="pizza-card-media"
        />
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
