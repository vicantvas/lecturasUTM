import React from 'react';
import '../css/dash.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Comentario from './Comentario.component.js';

export default class Dash extends React.Component {
	constructor(props){
		super(props);
		this.cerrar=this.cerrar.bind(this);
		this.estrellashover=this.estrellashover.bind(this);
		this.coment=this.coment.bind(this);
		this.state = {
			star1:true,
			star2:true,
			star3:true,
			star4:true,
			star5:true,
			coment:null,
    	};
	}
	cerrar(){
		document.getElementById("dash").style.left = "-2000px";
		this.setState({coment:null})
	}
	coment(){
		let comens=this.state.coment;
		if(comens===null){
			comens=[];
		}else{
			comens=[];
			this.state.coment.map(a=>{comens.push(a)})
		}
		comens.push(<Comentario key={comens.length+1} comm={document.getElementById('textarea2').value}/>)
		this.setState({coment:comens})
	}
estrellashover(){
		let star1=document.getElementById("star1");
		let star2=document.getElementById("star2");
		let star3=document.getElementById("star3");
		let star4=document.getElementById("star4");
		let star5=document.getElementById("star5");
		document.getElementById("star1").addEventListener("click",event=>{
			this.setState({star1:false,star2:true,star3:true,star4:true,star5:true});
		});
		document.getElementById("star2").addEventListener("click",event=>{
			this.setState({star1:false,star2:false,star3:true,star4:true,star5:true});
		});
		document.getElementById("star3").addEventListener("click",event=>{
			this.setState({star1:false,star2:false,star3:false,star4:true,star5:true});
		});
		document.getElementById("star4").addEventListener("click",event=>{
			this.setState({star1:false,star2:false,star3:false,star4:false,star5:true});
		});
		document.getElementById("star5").addEventListener("click",event=>{
			this.setState({star1:false,star2:false,star3:false,star4:false,star5:false});
		});
		document.getElementById("star1").addEventListener("mouseover",event=>{
			star1.innerHTML='star';
		});
		document.getElementById("star1").addEventListener("mouseout",event=>{
			if (this.state.star1) {
				star1.innerHTML='star_border';
			}
			if (this.state.star2) {
				star2.innerHTML='star_border';
			}
			if (this.state.star3) {
				star3.innerHTML='star_border';
			}
			if (this.state.star4) {
				star4.innerHTML='star_border';
			}
			if (this.state.star5) {
				star5.innerHTML='star_border';
			}
		});
		document.getElementById("star2").addEventListener("mouseover",event=>{
			star1.innerHTML='star';
			star2.innerHTML='star';
		});
		document.getElementById("star2").addEventListener("mouseout",event=>{
			if (this.state.star1) {
				star1.innerHTML='star_border';
			}
			if (this.state.star2) {
				star2.innerHTML='star_border';
			}
			if (this.state.star3) {
				star3.innerHTML='star_border';
			}
			if (this.state.star4) {
				star4.innerHTML='star_border';
			}
			if (this.state.star5) {
				star5.innerHTML='star_border';
			}
		});
		document.getElementById("star3").addEventListener("mouseover",event=>{
			star1.innerHTML='star';
			star2.innerHTML='star';
			star3.innerHTML='star';
		});
		document.getElementById("star3").addEventListener("mouseout",event=>{
			if (this.state.star1) {
				star1.innerHTML='star_border';
			}
			if (this.state.star2) {
				star2.innerHTML='star_border';
			}
			if (this.state.star3) {
				star3.innerHTML='star_border';
			}
			if (this.state.star4) {
				star4.innerHTML='star_border';
			}
			if (this.state.star5) {
				star5.innerHTML='star_border';
			}
		});
		document.getElementById("star4").addEventListener("mouseover",event=>{
			star1.innerHTML='star';
			star2.innerHTML='star';
			star3.innerHTML='star';
			star4.innerHTML='star';
		});
		document.getElementById("star4").addEventListener("mouseout",event=>{
			if (this.state.star1) {
				star1.innerHTML='star_border';
			}
			if (this.state.star2) {
				star2.innerHTML='star_border';
			}
			if (this.state.star3) {
				star3.innerHTML='star_border';
			}
			if (this.state.star4) {
				star4.innerHTML='star_border';
			}
			if (this.state.star5) {
				star5.innerHTML='star_border';
			}
		});
		document.getElementById("star5").addEventListener("mouseover",event=>{
			star1.innerHTML='star';
			star2.innerHTML='star';
			star3.innerHTML='star';
			star4.innerHTML='star';
			star5.innerHTML='star';
		});
		document.getElementById("star5").addEventListener("mouseout",event=>{
			if (this.state.star1) {
				star1.innerHTML='star_border';
			}
			if (this.state.star2) {
				star2.innerHTML='star_border';
			}
			if (this.state.star3) {
				star3.innerHTML='star_border';
			}
			if (this.state.star4) {
				star4.innerHTML='star_border';
			}
			if (this.state.star5) {
				star5.innerHTML='star_border';
			}
		});
}
	componentDidMount(){
		setTimeout(()=>{document.getElementById("dash").style.left = "-4%";M.CharacterCounter.init(document.getElementById("textarea2"));},20);
		this.estrellashover();
	}
render(){
	return (
		<div className="row dash-container" id="dash">
			<div className="col s4 m4 izquierda">
				<div>
					<img className="libro-imagen" src={this.props.imagen} alt="img" width="80%" height="35%" />
				    <div className="estrellas2">
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star_border</i>
                    </div>
                    <a className="boton-descarga waves-effect waves-light btn col s9 " href={this.props.url2}>descargar epub</a>
                    <a className="boton-descarga waves-effect waves-light btn col s9 red" href={this.props.url2}>descargar pdf</a>
				</div>
			</div>
			<div className="col s8 m8 derecha">
				<i className="material-icons close red-text text-darken-4" onClick={this.cerrar} style={{"fontSize": 60}}>close</i>
				<div  className="scroll-vic">
					<h3>{this.props.name}</h3>
					<div className="text-autor2">{this.props.autor}</div>
					<div className="des" >{this.props.descripcion}</div>
					<div className="calificar">
					  <div className="row">
						<h5 className="col s3">Calificar</h5>
					    <div className="estrellas3 col s5">
	                      <i id="star1" className="material-icons">star_border</i>
	                      <i id="star2" className="material-icons">star_border</i>
	                      <i id="star3" className="material-icons">star_border</i>
	                      <i id="star4" className="material-icons">star_border</i>
	                      <i id="star5" className="material-icons">star_border</i>
	                    </div>
	                  </div>		
					    <div className="row">
					      <form className="col s12">
					        <div className="row">
					          <div className="input-field col s12">
					            <textarea id="textarea2" className="materialize-textarea" data-length="180"></textarea>
					            <label for="textarea2">Tu opinión</label>
					          </div>
							  <div className="btn waves-effect waves-light grey darken-1" onClick={this.coment} style={{marginLeft: '73%',marginBottom: 20}}> Enviar
									<i className="material-icons right">send</i>
							  </div>
					        </div>
					      </form>
					    </div>
					</div>
					<div className="row" style={{height:500, marginLeft:10, marginTop:-80}}>
					<div className="row">
						<div className="col s12" style={{marginBottom:20}}>
							<h6>Comentarios:</h6>
						</div>
						{this.state.coment}
					</div>
					</div>
				</div>
			</div>
		</div>
		);
}
}