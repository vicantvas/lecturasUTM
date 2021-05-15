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
			UserName: '',
			UserFoto: '',
			UserEmail: '',
    	};
	}
	cerrar(){
		document.getElementById("dash").style.left = "-2000px";
		this.setState({coment:null})
	}
	coment(){
		const comentario={
			UserName: this.state.UserName,
			UserFoto: this.state.UserFoto,
			comentario: document.getElementById('textarea2').value,
			timestamp: this.props.firebase.firestore.FieldValue.serverTimestamp(),
		};
		this.props.db.collection("libros").doc(this.props.id).collection("coments").doc(this.state.UserEmail)
			.set(comentario)
			.then(()=>{console.log("Comentario enviado")})
			.catch((e)=>{console.log("Tu comentario no se pudo guardar: "+e)})
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
		let html = 'Para calificar un libro necesitas iniciar sesión con GOOGLE';
    	M.toast({html: html});
		html = 'Tranquilo, solo pedimos tu nombre y foto de perfil';
    	setTimeout(() => { M.toast({html: html}); }, 3000);
		setTimeout(()=>{document.getElementById("dash").style.left = "-4%";
						M.CharacterCounter.init(document.getElementById("textarea2"));},20);
		this.estrellashover();
		let modal=M.Modal.init(document.querySelectorAll('.modal'),{onOpenStart:()=>{
			const provider= new this.props.firebase.auth.GoogleAuthProvider();
			this.props.auth.signInWithPopup(provider).then(result=>{
				document.getElementById("modal1").className = "calificar modal";
				this.setState({UserName:result.user.displayName, UserFoto: result.user.photoURL, UserEmail:result.user.email})
				//.email
			});
		},
		onCloseEnd:()=>{
			this.props.auth.signOut().then(()=>console.log("Sesion Cerrada, Bye"));
			document.getElementById("modal1").className = "calificar modal oculto";
		}});
		
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
                    <a className={this.props.url2?"boton-descarga waves-effect waves-light btn col s9 ":"boton-descarga waves-effect waves-light btn col s9 disabled"} href={this.props.url2}>descargar epub</a>
                    <a className={this.props.pdf?"boton-descarga waves-effect waves-light btn col s9 red":"boton-descarga waves-effect waves-light btn col s9 red disabled"} href={this.props.pdf}>descargar pdf</a>
				</div>
			</div>
			<div className="col s8 m8 derecha">
				<i className="material-icons close red-text text-darken-4" onClick={this.cerrar} style={{"fontSize": 60}}>close</i>
				<div  className="scroll-vic">
					<h3>{this.props.name}</h3>
					<div className="text-autor2">{this.props.autor}</div>
					<div className="des" >{this.props.descripcion}</div>
					<div className="Njo8s"></div>
					<div>
					<button data-target="modal1" class="btn modal-trigger btn-calif">Calificar</button>
					<div id="modal1" className="calificar modal oculto">
					  <h5 className="calificar-title">Calificar</h5>
					  <div className="info-comentario container">Las reseñas son públicas y no se pueden modificar. El desarrollador puede eliminar por completo cualquier reseña.</div>
					  <div className="">
						<div className="col m3">
							<img className="libro-imagen2" src={this.props.imagen} alt="img" width="80%" height="35%" />
						</div>
						<form className="col m9 formu">
					          <div className="input-field">
					            <textarea id="textarea2" className="materialize-textarea" data-length="180"></textarea>
					            <label htmlFor="textarea2">Tu opinión</label>
					          </div>
							  <div className="estrellas3">
								<i id="star1" className="material-icons">star_border</i>
								<i id="star2" className="material-icons">star_border</i>
								<i id="star3" className="material-icons">star_border</i>
								<i id="star4" className="material-icons">star_border</i>
								<i id="star5" className="material-icons">star_border</i>
								<span style={{fontSize:10, color: 'grey'}}>Calificación obligatoria</span>
							  </div>
							  <div className="enviar-com btn waves-effect waves-light grey darken-1" onClick={this.coment} > Enviar
									<i className="material-icons right">send</i>
							  </div>
					    </form>
	                  </div>		
					</div>
					<div className="row" style={{height:500, marginLeft:10, marginTop:-60}}>
						<div className="row">
							<div className="col s12" style={{marginBottom:20}}>
								<h6>Calificaciones de este libro:</h6>
							</div>
							{this.state.coment}
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
		);
}
}