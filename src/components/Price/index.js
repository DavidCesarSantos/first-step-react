import React from "react";
import Typography from "material-ui/Typography";
import centsToEuro from "../../lib/cents-to-euro";
import formatPrice from "../../lib/format-price";

export default props => {
  const total = formatPrice(centsToEuro(props.price));
  return (
    <Typography component="p">
      {total}
      {props.currency}
    </Typography>
  );
};
