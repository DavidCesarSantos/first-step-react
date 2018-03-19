import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AboutPage from "./components/AboutPage";
import HomePageContainer from "./components/HomePageContainer";
import pizzasReducers from "./redux/pizzas/reducers";
// Importer Header, Section, Product, Order
// Importer le fichier samplePizzas et nommé le Pizzas

const store = createStore(pizzasReducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
