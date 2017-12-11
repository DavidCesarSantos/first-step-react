import React from "react";
import "./App.css";

// Importer Header, Section, Product, Order
// Importer le fichier samplePizzas et nommé le Pizzas


class App extends React.Component {
  constructor(){
    super();
    // 1 - Déclarer un state a l'aide de this.state = {} avec 2 property pizzas et order, chaque property a pour valeur {}
  }
  componentDidMount() {
    this.setState({
      pizzas : Pizzas
    })
  }
  render() {
    return (
      <div className="App">
        {/*  2 - Appeler le composant Header et passé lui un title en props et un className="header" */}
        <section id="container">
          <Section styleId="list" sectiontitle="♨️ Choose your pizza">
            <div className="corner-ribbon top-left sticky red shadow">Hot Deals</div>
            <ul>
              {/* 3 - Créer un loop a l'aide de { Object.keys(this.state.pizzas).map(key => ...) }
                  4 - Ecrire le composant Product a la place des ... dans la loop Object
                   <Product addOrder={this.addOrder} index={key} key={key} size={150} details={this.state.pizzas[key]} /> */
              }
            </ul>
          </Section>
          <Section styleId="cart" sectiontitle="💵 Order your pizza">
            <div id="order">
                {/* 5 - Déclarer un composant Order 3 props removeOrder, pizzas et order
                  removeOrder est une méthode, pizzas et orders récupèrent leur state respectifs */}
                <button type="button" className="btn btn-success">Commander</button>
            </div>
          </Section>
        </section>
      </div>
    );
  }
}

export default App;
