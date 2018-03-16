// Importer React de la lib react
// Créer un composant fonctionel sous forme de fontion nommé Header avec
// props comme param.
// Le composant doit retourner un titre H2 à l'aide de props
// Exporter le composant Header
import React from "react";

const Header = props => {
  return <h2 className="header">{props.title}</h2>;
};

export default Header;
