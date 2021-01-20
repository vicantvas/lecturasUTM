import React from 'react';
import '../css/comentario.css';
//import M from 'materialize-css/dist/js/materialize.min.js';

export default class Comentario extends React.Component {
render(){
	return (
        <div className="col comentario">
            {this.props.comm}
        </div>
    );
}
}