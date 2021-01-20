import React from 'react';
import './App.css';
import storage from './fb';

import Libro from './Components/js/Libro.component.js';
import Dash from './Components/js/Dash.component.js';
import Tabla from './Components/js/Tabla.component.js';

class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      libros: null,
      librero: null,
      carga:1,
      dash: null,
    };
    this.cargarLibrero=this.cargarLibrero.bind(this);
    this.creaLibros=this.creaLibros.bind(this);
    this.crearLibrero=this.crearLibrero.bind(this);
    this.viewDash=this.viewDash.bind(this);
  }
cargarLibrero(){
  let cargar=[];
  cargar.push(<div key={0} className="progress" style={{'marginTop': 40}}>
      <div className="determinate" style={{'width':this.state.carga+'%'}}></div>
  </div>);
  if(this.state.carga<101 && ((this.state.librero && this.state.librero.length===1) || !this.state.librero)){
    setTimeout(this.cargarLibrero,10);
    this.setState({carga:this.state.carga+1,librero:cargar});
  }
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
componentDidMount(){
  this.creaLibros();
  this.cargarLibrero();
  setTimeout(()=>{this.crearLibrero('nombre');},4000);
}
viewDash(nombre){
  let dash=[];
  let libro=this.state.libros.find(libro=>libro.nombre===nombre);
  dash.push(<Dash autor={libro.autor} name={libro.nombre} descripcion={libro.des} imagen={libro.imagen} url2={libro.descarga}/>)
  this.setState({dash:dash});
  if(document.getElementById("dash")){document.getElementById("dash").style.left = "-4%";}
}
creaLibros(){
    let nombres=['El codigo del dinero - Raimon Samsoimage.jpg',
    '2001. Una odisea espacial - Arthur C. Clarkeimage.jpg',
    'El cuadrante del flujo del dinero - Robert Toru Kiyosakiimage.jpg',
    'El negocio del siglo 21 - Robert Toru Kiyosakiimage.jpg',
    'Los enamoramientos - Javier Mariasimage.jpg',
    'Padre rico padre pobre - Robert Toru Kiyosakiimage.jpg',
    'Los once de la tribu - Villoro Juanimage.jpg',
    'El mundo de yarek - Elia Barceloimage.jpg',
    'Al sur de la frontera, al oeste del sol - Harukiimage.jpg',
    'La profecía de cloostedd - Josephimage.jpg',
    'En recuerdo de Nezahualcóyotl - Marco Antonioimage.jpg',
    'La casa en el confín de la tierra - Williamimage.jpg',
    'Cuadernos de la cárcel - Ho Chiimage.jpg',
    'Como ser mujer - Caitlin Moranimage.jpg',
    'El mundo perdido - Arthur Conanimage.jpg',
    'La vida era eso - Carmen Amoragaimage.jpg',
    'Cartucho - Nellie Campobelloimage.jpg'];
    let descripcion=[
      '¿Quieres alcanzar la independencia financiera? ¿Te gustaría duplicar tus ingresos en un año? ¿Deseas conocer los secretos de los emprendedores de éxito? El Código del Dinero contiene todo lo que necesitas saber para conquistar tu libertad financiera.',
      'Un sobrecogedor viaje interestelar en busca de la evidencia de que el ser humano no está solo en el cosmos. Una expedición a los confines del universo y a los del alma, en la que pasado, presente y futuro se amalgaman en un continuo enigmático. ¿Qué esencia última nos rige? ¿Qué lugar ocupa el hombre en el complejo entramado del infinito? ¿Qué es el tiempo, la vida, la muerte..? Una grandiosa novela de dimensiones épicas cuyo amplio abanico de interpretaciones ofrece una visión totalizadora. Arthur C. Clarke colaboró estrechamente con Stanley Kubrick en la producción de la célebre película homónima.',
      'Un libro para todos aquellos que no desean seguir atados a la seguridad laboral; para las personas que están listas para realizar cambios trascendentales en el mundo en el que vivimos, donde la información es indispensable para conquistar la libertad financiera. De Robert T. Kiyosaki, autor de Padre Rico, Padre Pobre, el libro #1 de finanzas personales. Este libro te revelará por qué algunas personas trabajan menos, ganan más, pagan menos impuestos y se sienten más seguras financieramente que las demás. La respuesta es sencilla: se trata de saber en qué sección del cuadrante del flujo de dinero trabajar y cuándo hacerlo. El cuadrante del flujo de dinero ha sido escrito para todos aquellos que no desean seguir atados a la seguridad laboral; para las personas que están listas para realizar cambios trascendentales en el mundo en el que vivimos, donde la información es indispensable para conquistar la libertad financiera.',
      'En El negocio del siglo 21 Robert T. Kiyosaki te explica que el problema no es la economía; el problema, eres tú. ¿Te molesta la corrupción en el mundo corporativo? ¿Estás enojado con Wall Street y los grandes bancos? ¿También estás enfadado con el gobierno por tomar decisiones muy malas y realizar muy pocas acciones buenas? ¿O tal vez estás enojado contigo mismo porque no tomaste el control de tus finanzas desde hace tiempo? Sin duda, la vida es dura, pero ahora la pregunta ineludible es, ¿qué vas a hacer al respecto? Quejarte y lamentarte por el estado actual de la economía o culpar a otros por no hacer nada respecto a tu futuro financiero. Si quieres riqueza, necesitas trabajar por ella. Necesitas tomar las riendas de tu futuro y controlar tus fuentes de ingresos, ¡ahora!',
      '«La última vez que vi a Miguel Desvern o Deverne fue también la última que lo vio su mujer, Luisa, lo cual no dejó de ser extraño y quizá injusto, ya que ella era eso, su mujer, y yo era en cambio una desconocida…» Así comienza Los enamoramientos, la nueva novela de Javier Marías, consagrado como uno de los mejores novelistas contemporáneos.',
      'Con un estilo claro y ameno, esta obra, de la serie escrita por Robert T. Kiyosaki, te mostrará cómo lograr que el dinero trabaje para ti. Su contenido no sólo refiere a la sorprendente historia de su autor, sino además, te enseñará cuestiones que impactarán tu vida y aprenderás a tomar el tipo de decisiones que te harán rico, aún en la juventud.',
      'Los once de las tribus es una celebración del juego (del fútbol a los juegos de pelota prehispánicos) y un retrato íntimo de la cultura de masas. Un libro ruidoso, apasionado, donde los datos y la mirada oblicua del testigo aspiran a demostrar que la realidad ocurre para ser narrada.',
      'Yarek, un especialista en vida alienígena, está condenado a vivir una terrible experiencia; 20 años en un planeta deshabitado y estéril. Un clásico del género que dio a conocer a una de las más importantes autoras españolas. Para quienes aún no saben que la ciencia ficción puede dar novelas de enorme calidad literaria',
      'Hajime vive una existencia relativamente feliz –se ha casado, es padre de dos niñas y dueño de un club de jazz– cuando se reencuentra con Shimamoto, su mejor amiga de la infancia y la adolescencia. Y la atracción renace Hajime parece dispuesto a dejarlo todo por ella... Una historia sobre amores perdidos y recobrados, sobre la consumación de una promesa de plenitud, que destila la indefinible sensación de desajuste con el mundo que acucia al hombre contemporáneo',
      'La profecia de cloostedd: Es la historia de una vieja rivalidad entre dos familias de un pequeño pueblo de Inglaterra, Golden Friars, y de una terrible venganza. Sir Bale Mardykes, un avaro baronet, culpa a su joven secretario Phillip Feltram de la desaparición de un pagaré bancario. Apesadumbrado, Phillip huye de la casa en medio de una terrible tormenta y horas después es encontrado en el lago.',
      'Es una reconstrucción novelada de la vida del antiguo señor de Texcoco pero también, de la historia, de la religión y de los mitos de los antiguos mexicanos, en especial de los pueblos que llevaron a cabo la grandeza imperial: mexicas, texcocanos y tacubenses. Más que un personaje de mito o leyenda, Nezahualcóyotl -quizá el personaje más completo y querido del México antiguo- se delinea aquí en todas sus vigorosas contradicciones como hombre de poder y hombre de espíritu. ',
      'La casa en el confín de la tierra trata de un caserón solitario y temido de Irlanda, que constituye el centro de espantosas fuerzas del trasmundo y soporta el asedio de híbridas y blasfemas anormalidades que surgen de secretos abismos inferiores. Los vagabundeos del espíritu del narrador durante ilimitados años-luz del espacio cósmico y kalpas de eternidad y su asistencia a la destrucción final del sistema solar, son algo casi único en la literatura fantástica. Por lo demás, a lo largo de la historia se pone de manifiesto la capacidad del autor para sugerir horrores vagos y emboscados en un escenario natural.',
      'El libro trae una breve introducción de Félix Pita Rodríguez, que además es el traductor de los poemas al castellano, y un texto sobre Ho Chi Minh de Jorge Montealegre. La edición es trilingüe: chino, vietnamita y español. Recordemos que Ho Chi Minh escribió su Diario de prisión en China mientras permanecía prisionero y lo hizo en el idioma de aquel país. Ho Chi Minh fue detenido el 29 de agosto de 1942 y estuvo preso en diferentes cárceles hasta el 19 de septiembre de 1943, cuando fue liberado. ',
      'No hubo nunca mejor época que ésta para ser mujer: tenemos el voto y la píldora, y desde 1727 ya no nos envían a la hoguera por brujas. Pero, ¿cómo ser mujer? Esa es precisamente la gran, eterna pregunta a la que Caitlin Moran se propone responder en una obra que aborda a calzón quitado –a veces literalmente–, con inteligencia, desvergüenza e ironía y también una salvaje franqueza, los principales aspectos de la condición femenina. Mezcla de libro de memorias y de divertida vociferación, apoyándose siempre en sus experiencias como mujer, feminista e hija de una familia numerosa y proletaria, Caitlin Moran se describe con una sinceridad y una audacia militantes, y habla con absoluta sinceridad de su relación con su cuerpo. Y con la comida, con los hombres, con el trabajo, la sexualidad, la maternidad, el aborto. Pero también escribe sobre la importancia de Lady Gaga, y los errores y horrores de la depilación más íntima, o el botox. Y sobre mucho más. Así, alternando provocativas observaciones sobre la vida de las mujeres con historias ferozmente divertidas sobre sí mismas, desnuda, deconstruye y arroja al fuego la imagen políticamente correcta de la mujer del siglo XXI. Y nos descubre página tras página esos secretos que se cuentan en voz baja las amigas verdaderas, y no esas equívocas colegas que jamás se quitan la máscara de la feminidad perfecta.',
      'El estrambótico, arrollador e hilarante profesor George Edward Challenger, un cerebro superdotado en un cuerpo de hombre de las cavernas, decide emprender una expedición a la desconocida tierra de Maple White, para demostrar a su incrédulo público y a sus escépticos compañeros de ciencia la existencia de especies prehistóricas y, si es posible, darles en las narices siquiera con un diplodoquito. En el transcurso de la aventura se mezclan momentos de gran dramatismo con las divertidas escaramuzas dialécticas entre los profesores Challenger y Summerlee. Esta prodigiosa odisea en busca de un mundo perdido tendrá un final tan simpático como inesperado.',
      'Esta es una novela que trata sobre la pérdida y la superación. Y contarlo es la mejor manera de superarlo a pesar de que, con las redes sociales, las formas de contarlo hayan cambiado. Es la historia de Giuliana, una mujer argentina que pierde lo más importante que puede perder una mujer, que es su compañero y decide afrontar la muerte haciendo suya la pasión de su marido por las redes sociales. Y así, tirando del hilo de esa nueva forma de comunicación y adentrándose en un mundo que le resulta “hostil”, Giuliana empieza a escribir sus impresiones en Facebook para relatar cómo ha sido la muerte de su marido.',
      'Es un texto literario compuesto por viñetas que proporcionan un vívido retrato de los héroes y villanos, y de la experiencia personal, de la Revolución mexicana. Está narrado en primera persona desde la perspectiva de una niña. Mientras que consiste en varias historias contadas en mayor parte por la niña, su madre también contribuye a unos cuentos, y hay otros dictados a la narradora por otra gente. La autora veía estas historias como su testimonio sobre la Revolución mexicana'
    ];
    let urlLibros=[];
    for (let i = 0; i < nombres.length; i++) {
      storage.ref().child(nombres[i]).getDownloadURL().then((url)=> {
        storage.ref().child(nombres[i].split('image')[0]+'.epub').getDownloadURL().then((url2)=> {
          urlLibros.push({
                            nombre: nombres[i].split('-')[0],
                            paginas: 50-i,
                            imagen:url,
                            descarga:url2,
                            calificacion: 0,
                            des: descripcion[i],
                            autor: nombres[i].split('- ')[1].split('image')[0],
                            componente:<Libro pag={50-i} detalles={this.viewDash} key={i} url={url} url2={url2} namelibro={nombres[i].split('-')[0]} autorlibro={nombres[i].split('- ')[1].split('image')[0]}/>
                        });
          this.setState({libros:urlLibros});
        }).catch(err=>{
          urlLibros.push({
            nombre: nombres[i].split('-')[0],
            paginas: 50-i,
            imagen:url,
            descarga:'#',
            calificacion: 0,
            des: descripcion[i],
            autor: nombres[i].split('- ')[1].split('image')[0],
            componente:<Libro pag={50-i} detalles={this.viewDash} key={i} url={url} url2={null} namelibro={nombres[i].split('-')[0]} autorlibro={nombres[i].split('- ')[1].split('image')[0]}/>
        });
          this.setState({libros:urlLibros});
        });
      })
    };
}
  render(){
    return (
    <div className="App">
      {this.state.dash}
      <header>
        <nav className="top-nav">
          <div className="container">
            <div className="nav-wrapper">
              <div className="row">
                <div className="col s12 m10 offset-m1">
                <h1 className="header">Lecturas UTM</h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="noticias-deslizables grey lighten-1">
          <marquee className="container ">Proximas entregas: Primer semestre Lunes 11 de enero - Tercer semestre Martes 12 de enero - Quinto semestre Miercoles 13 de enero - Septimo semestre Jueves 14 de enero - Noveno semestre Viernes 15 de enero</marquee>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="col s12 m8 offset-m1 x17 offset-x11">
          <div className="row">
            <div className="switch right"> 
            <div className="col s4" style={{'color':'#909090', 'fontSize':12, 'width':100, 'paddingTop':2}}>Ordenar por </div>
              <label>
                Nombre
                <input type="checkbox" id="orden" onClick={this.crearLibrero}/>
                <span className="lever grey"></span>
                Número de páginas
              </label>
            </div>
          </div>
          <div className="row">
            {this.state.librero}
          </div>
          </div>
          <div className="col m3 x13 offset-x11">
          <Tabla/>
          </div>
        </div>
      </main>
    </div>
  );
  }
}


export default App;
