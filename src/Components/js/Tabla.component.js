import React from 'react';
import '../css/tabla.css';
import M from 'materialize-css/dist/js/materialize.min.js';

export default class Tabla extends React.Component {
	componentDidMount(){
		M.Tabs.init(document.querySelector(".tabs"));
	}
render(){
	return (
  <div className="row tabla">
    <div className="col s12">
      <div className="texto-semestre">Semestre</div>
      <ul className="tabs">
        <li className="tab col sv2"><a className="active" href="#t1">1°</a></li>
        <li className="tab col sv2"><a href="#t3">3°</a></li>
        <li className="tab col sv2"><a href="#t5">5°</a></li>
        <li className="tab col sv2"><a href="#t7">7°</a></li>
        <li className="tab col sv2"><a href="#t9">9°</a></li>
      </ul>
    </div>
    <div id="t1" className="col s12" >
      <table className="tabla-cuerpo">
        <thead>
          <tr>
              <th>Carrera</th>
              <th>Primera</th>
              <th>Segunda</th>
              <th>Tercera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Diseño Empresariales Alimentos Industrial Meca Automotriz Civil</td>
            <td>26-Oct</td>
            <td>24-Nov</td>
            <td>11-Ene</td>
          </tr>
          <tr>
            <td>Computación Electronica Matemáticas Física</td>
            <td>27-Oct</td>
            <td>25-Nov</td>
            <td>12-Ene</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="t3" className="col s12" >
      <table className="tabla-cuerpo">
        <thead>
          <tr>
              <th>Carrera</th>
              <th>Primera</th>
              <th>Segunda</th>
              <th>Tercera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Computación, Diseño, Empresariales y Meca</td>
            <td>27-Oct</td>
            <td>25-Nov</td>
            <td>12-Ene</td>
          </tr>
          <tr>
            <td>Electronica, Alimentos, Matematicas, Industrial y Fisica</td>
            <td>28-Oct</td>
            <td>26-Nov</td>
            <td>13-Ene</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="t5" className="col s12" >
      <table className="tabla-cuerpo">
        <thead>
          <tr>
              <th>Carrera</th>
              <th>Primera</th>
              <th>Segunda</th>
              <th>Tercera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Todas las carreras</td>
            <td>28-Oct</td>
            <td>26-Nov</td>
            <td>13-Ene</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="t7" className="col s12" >
      <table className="tabla-cuerpo">
        <thead>
          <tr>
              <th>Carrera</th>
              <th>Primera</th>
              <th>Segunda</th>
              <th>Tercera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Todas las carreras</td>
            <td>29-Oct</td>
            <td>27-Nov</td>
            <td>14-Ene</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="t9" className="col s12" >
      <table className="tabla-cuerpo">
        <thead>
          <tr>
              <th>Carrera</th>
              <th>Primera</th>
              <th>Segunda</th>
              <th>Tercera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Todas las carreras</td>
            <td>30-Oct</td>
            <td>28-Nov</td>
            <td>15-Ene</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
		);
}
}

