import React from 'react';
import './App.css';
import firebase, {fb} from './fb.js';
import M from 'materialize-css/dist/js/materialize.min.js';

import Tabla from './Components/js/Tabla.component.js';
import Libro from './Components/js/Libro.component.js';
import Dash from './Components/js/Dash.component.js';

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marque: '',
      libros: [],
      librero: '',
      dash: null,
      slideI:0,
    }
    this.crearLibrero=this.crearLibrero.bind(this);
    this.viewDash=this.viewDash.bind(this);
    this.viewSlide=this.viewSlide.bind(this);
    this.plusSlides=this.plusSlides.bind(this);
    this.mover=this.mover.bind(this);
    
  }
  plusSlides(n){
    if(this.state.slideI==0 && n==-1)
      this.setState({slideI:document.getElementsByClassName("card-informativo").length-1});
    else if(this.state.slideI+1==document.getElementsByClassName("card-informativo").length)
      this.setState({slideI:0});
    else this.setState({slideI:this.state.slideI+n});
    this.viewSlide();
  }
  mover(){
    this.plusSlides(1);
    setTimeout(this.mover,5000);
  }
  viewSlide(){
    let slides = document.getElementsByClassName("card-informativo");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[this.state.slideI].style.display = "block"; 
  }
  viewDash(nombre){
    let dash=[];
    let libro=this.state.libros.find(libro=>libro.nombre===nombre);
    dash.push(<Dash key={2} auth={auth} id={libro.id} firebase={fb} db={db} autor={libro.autor} name={libro.nombre} descripcion={libro.descripcion} imagen={libro.imagen} url2={libro.epub} pdf={libro.pdf}/>)
    this.setState({dash:dash});
    if(document.getElementById("dash")){document.getElementById("dash").style.left = "-4%";}
  }
  componentDidMount(){
    this.mover();
    this.viewSlide();
    let html = 'Bienvenido a Lecturas UTM';
    M.toast({html: html});
    db.collection("marque").doc("marque1").get().then((doc) => {
      if (doc.exists) {
          this.setState({marque:doc.data().texto});
      }
    });
    let libros=[];
    db.collection("libros").get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        const data=doc.data()
        const libro={
          id: doc.id,
          nombre: data.nombre,
          paginas: data.paginas,
          imagen: '',
          pdf: '',
          epub: '',
          calif: data.calif,
          descripcion: data.descripcion,
          autor: data.autor,
          componente: ''
        }
        storage.ref().child(data.nombre.replace('¿','').replace('?', '')+'.epub').getDownloadURL().then((epub)=> {libro.epub=epub});
        storage.ref().child(data.nombre.replace('¿','').replace('?', '')+'.pdf').getDownloadURL().then((pdf)=> {libro.pdf=pdf});
        storage.ref().child(data.nombre.replace('¿','').replace('?', '')+'.jpg').getDownloadURL().then((imagen)=> {libro.imagen=imagen
          libro.componente=<Libro pag={data.paginas} detalles={this.viewDash} key={doc.id} url={libro.imagen} url2={libro.epub}  namelibro={data.nombre} autorlibro={data.autor}/>
          libros.push(libro);
          this.setState({libros:libros});
          this.crearLibrero();
        });

      });
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }
  crearLibrero(){
    let librero;
    if (document.getElementById("orden").checked === false) {
      librero=this.state.libros.sort((a,b)=>{
        if(a.nombre<b.nombre){return -1;}
        if(a.nombre===b.nombre){return 0;}
        if(a.nombre>b.nombre){return 1;}
        return 0;
      })
    }else{
      librero=this.state.libros.sort((a,b)=>{
        if(a.paginas<b.paginas){return -1;}
        if(a.paginas===b.paginas){return 0;}
        if(a.paginas>b.paginas){return 1;}
        return 0;
      })
    }
    librero=librero.map(obj=>obj.componente);
    this.setState({librero:librero});
  }
  render(){
    return (
    <div className="App">
      {this.state.dash}
      <header>
        <nav className="top-nav">
          <div className="nav-wrapper center">
            <h1 className="header">Lecturas UTM</h1>
          </div>
        </nav>
        <div className="noticias-deslizables">
          <marquee className="container">{this.state.marque}</marquee>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="col m8 offset-m1 principal">
            <div className="row">
              <div className="switch right pulse"> 
                <div className="col s4" style={{'fontSize':12, 'width':100, 'paddingTop':2}}>Ordenar por </div>
                <label>
                  Nombre
                  <input type="checkbox" id="orden"  onClick={this.crearLibrero}/>
                  <span className="lever grey"></span>
                  Número de páginas
                </label>
              </div>
            </div>
            <div className="row contenedor-librero">
              {this.state.librero}
            </div>
          </div>
          <div className="col m3 panel-derecho">
            <div class="slideshow-container">
              <div className="card-panel fade card-informativo white-text">Recuerda leer un libro al semestre y enviar su respectiva reseña al correo: <a className="white-text" href="mailto:lecturas@mixteco.utm.mx">lecturas@mixteco.utm.mx</a></div>
              <div className="card-panel fade card-informativo white-text">Los reportes pueden ser entregados hasta con una semana de anticipación.</div>
              <a class="prev" onClick={()=>{this.plusSlides(-1)}}>&#10094;</a>
              <a class="next" onClick={()=>{this.plusSlides(1)}}>&#10095;</a>
            </div>
            <Tabla/>
          </div>
        </div>
      </main>
    </div>
  );
  }
}