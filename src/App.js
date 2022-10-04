import React from "react";
import PersonCard from "./componentes/PersonCard/PersonCard";


class App extends React.Component {

  render() {

    return(
      <div className="container">

        <PersonCard color="gris" nombre="Jorge" apellido="Velez" age={30}/>
        <PersonCard color="verde" nombre="Maria" apellido="Franco" age={42}/>
        <PersonCard color="azul" nombre="Johana" apellido="Fernandez" age={20}/>
        <PersonCard color="miel" nombre="Ferney" apellido="Sossa" age={13}/>

      </div>
    );
  }
}
export default App;
