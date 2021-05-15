import React from 'react';
import '../css/tabla.css';
import M from 'materialize-css/dist/js/materialize.min.js';

export default class Tabla extends React.Component {
	componentDidMount(){
		M.Tabs.init(document.querySelector(".tabs"));
	}
render(){
	return (
  <div className="tabla">
    <div className="col s12 padingcero">
      <div className="texto-semestre">Fechas de entrega</div>
      <div className="texto-semestre2">Semestre</div>
      <ul className="tabs">
        <li className="tab col sv2"><a className="active" href="#t1">2°</a></li>
        <li className="tab col sv2"><a href="#t3">4°</a></li>
        <li className="tab col sv2"><a href="#t5">6°</a></li>
        <li className="tab col sv2"><a href="#t7">8°</a></li>
        <li className="tab col sv2"><a href="#t9">10°</a></li>
      </ul>
    </div>
    <div id="t1" className="col s12  padingcero" >
      <table className="tabla-cuerpo">
        <thead>
          <tr>
              <th className="greentitle">Carrera</th>
              <th className="greentitle">Primera</th>
              <th className="greentitle">Segunda</th>
              <th className="greentitle">Tercera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fondoutm">Diseño, Empresariales, Alimentos, Industrial, Mecatrónica, Automotriz y Civil</td>
            <td className="fondoutm">16-Mar</td>
            <td className="fondoutm">22-Abr</td>
            <td className="fondoutm">27-May</td>
          </tr>
          <tr>
            <td className="fondoutm">Computación, Electronica, Matemáticas y Física</td>
            <td className="fondoutm">17-Mar</td>
            <td className="fondoutm">23-Abr</td>
            <td className="fondoutm">28-May</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="t3" className="col s12  padingcero" >
      <table className="tabla-cuerpo">
        <thead>
          <tr>
              <th className="greentitle">Carrera</th>
              <th className="greentitle">Primera</th>
              <th className="greentitle">Segunda</th>
              <th className="greentitle">Tercera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fondoutm">Computación, Diseño, Empresariales y Mecatrónica</td>
            <td className="fondoutm">17-Mar</td>
            <td className="fondoutm">23-Abr</td>
            <td className="fondoutm">28-May</td>
          </tr>
          <tr>
            <td className="fondoutm">Electronica, Alimentos, Matematicas, Industrial, Fisica y Automotriz</td>
            <td className="fondoutm">18-Mar</td>
            <td className="fondoutm">26-Abr</td>
            <td className="fondoutm">31-May</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="t5" className="col s12 padingcero" >
      <table className="tabla-cuerpo">
        <thead>
          <tr>
              <th className="greentitle">Carrera</th>
              <th className="greentitle">Primera</th>
              <th className="greentitle">Segunda</th>
              <th className="greentitle">Tercera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fondoutm">Todas las carreras</td>
            <td className="fondoutm">18-Mar</td>
            <td className="fondoutm">26-Abr</td>
            <td className="fondoutm">31-May</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="t7" className="col s12 padingcero" >
      <table className="tabla-cuerpo">
        <thead>
          <tr>
              <th className="greentitle">Carrera</th>
              <th className="greentitle">Primera</th>
              <th className="greentitle">Segunda</th>
              <th className="greentitle">Tercera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fondoutm">Todas las carreras</td>
            <td className="fondoutm">19-Mar</td>
            <td className="fondoutm">27-Abr</td>
            <td className="fondoutm">01-Jun</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="t9" className="col s12 padingcero" >
      <table className="tabla-cuerpo">
        <thead>
          <tr>
              <th className="greentitle">Carrera</th>
              <th className="greentitle">Primera</th>
              <th className="greentitle">Segunda</th>
              <th className="greentitle">Tercera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fondoutm">Todas las carreras</td>
            <td className="fondoutm">19-Mar</td>
            <td className="fondoutm">27-Abr</td>
            <td className="fondoutm">01-Jun</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
		);
}
}

