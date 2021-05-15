import React from 'react';
import '../css/libro.css';

export default class Libro extends React.Component {
  constructor(props){
    super(props);
    this.descargar=this.descargar.bind(this);
  }
  descargar(){
    let menss="¿Quiere descargar "+this.props.namelibro+'.epub?'
    if(window.confirm(menss) && this.props.url2){
      window.open(this.props.url2);
    }
  }
render(){
	return (
              <div className="col s6 m2">
                <div className="libro">
                  <div className="libro-img">
                    <img className="libro-img-i" src={this.props.url} alt="img" width="166" height="250" />
                    <div className="libro-hover">
                      <div className="infor waves-effect waves-light btn col s9 " onClick={this.descargar}>descargar</div>
                      <div onClick={()=>{this.props.detalles(this.props.namelibro)}} className="infor2 waves-effect waves-light btn col s9">detalles</div>
                    </div>
                  </div>
                  <div className="libro-calif">
                      <div onClick={()=>{this.props.detalles(this.props.namelibro)}} className="text-namelibro" >{this.props.namelibro}</div>
                      <div className="text-autor">{this.props.autorlibro}</div>
                  </div>
                </div>
                <div className="estrellas">
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star_border</i>
                    </div>
                <div className="pag">{this.props.pag} pp.</div>
              </div>
	)
	}
}