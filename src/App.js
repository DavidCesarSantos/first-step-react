import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";

// Importer Header, Section, Product, Order
// Importer le fichier samplePizzas et nommé le Pizzas

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
