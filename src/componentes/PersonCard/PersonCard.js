import React from "react";

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
            age: this.props.age
        }
    }

    cumpleaños = () => {
        this.setState({age: this.state.age+1})
    }

    render() {
        const { nombre, apellido, color } = this.props;
        return( 
            <div className="border border-dark border boder-5 rounded-3 p-3 mb-2 ">
                <h4>{nombre}, {apellido}</h4>
                <p><b>Edad: </b> {this.state.age}</p>
                <p><b>Color de ojos: </b> {color}</p>
                <button className="btn btn-info border border-dark border border-2" onClick={this.cumpleaños}>Botón de Cumpleaños {nombre} {apellido}</button>
            </div>
        )
    }
}
export default PersonCard; //para exportar este componente con el nombre de la clase

