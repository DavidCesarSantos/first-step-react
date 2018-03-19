import { connect } from "react-redux";

import HomePage from "../HomePage";
import { getPizzas } from "../../redux/pizzas/actions";

const mapStateToProps = state => ({ pizzas: state.pizzas });

const mapDispatchToProps = dispatch => ({
  loadPizzas: url => {
    dispatch(getPizzas(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
