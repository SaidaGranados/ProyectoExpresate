import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListaplantasService {

  constructor(private route:Router) { }

  public descripcion: string = 'default';

  public titulo: string = 'default';

  public datosplantas:any[] = [

    {nombre:"Panda",imagen:"assets/Imagenes/Panda.jpg.webp",id:1,precio:25000,descripcion:"Tiene un follaje difuso cubierto de pelos diminutos, teñidos con manchas marrones en los bordes."},
    {nombre:"Lirio de la paz",imagen:"assets/Imagenes/PeaceLily.jpg.webp",id:2,precio:28000,descripcion:"Sus brácteas aparecen en primavera y se ven impresionantes con el follaje verde."},
    {nombre:"Monstera",imagen:"assets/Imagenes/monstera.jpg",id:3,precio:30000,descripcion:"Esta planta adapta muy bien a espacios cerrados, hermosa y mediana planta. Ordenala ya!."},
    {nombre:"Poinsettia",imagen:"assets/Imagenes/Poinsettia.jpg.webp",id:4,precio:40000,descripcion:"Agregue estilo y dramatismo a su decoración interior con el colorido follaje de Poinsettia."},
    {nombre:"Moon Cactus",imagen:"assets/Imagenes/MoonCactus.jpg.webp",id:5,precio:20000,descripcion:"Gracias a este jardín de cactus miniatura es posible agregar un paisaje desértico a tu espacio."},
    {nombre:"Phalaenopsis",imagen:"assets/Imagenes/Phalaenopsis.jpg",id:6,precio:25000,descripcion:"Usar una cortina que deje pasar algo de luz natural también puede ser una muy buena opción."},
    {nombre:"Anthurium",imagen:"assets/Imagenes/Anthurium.jpg",id:7,precio:28000,descripcion:"Planta de interior muy utilizada para decorar los hogares por sus llamativas hojas en tonos rojos."},
    {nombre:"Dracaena",imagen:"assets/Imagenes/Dracaena.jpg",id:8,precio:30000,descripcion:"Es capaz de controlar la humedad en un ambiente cerrado, evitando así enfermedades."},
  ]

  cargarplantas(){
    this.route.navigate(['/padre'])

    this.descripcion = 'Las plantas que te enviamos son seleccionadas y empaquetadas con mucho cariño para que recibas los mejores ejemplares.Seleccionamos a mano las mejores plantas para ti y las preparamos cuidadosamente para que se mantengan frescas durante el viaje.'

    this.titulo = '¡Plantas de interior!'

    this.datosplantas = [

      {nombre:"Panda",imagen:"assets/Imagenes/Panda.jpg.webp",id:1,precio:25000,descripcion:"Tiene un follaje difuso cubierto de pelos diminutos, teñidos con manchas marrones en los bordes."},
      {nombre:"Lirio de la paz",imagen:"assets/Imagenes/PeaceLily.jpg.webp",id:2,precio:28000,descripcion:"Sus brácteas aparecen en primavera y se ven impresionantes con el follaje verde."},
      {nombre:"Monstera",imagen:"assets/Imagenes/monstera.jpg",id:3,precio:30000,descripcion:"Esta planta adapta muy bien a espacios cerrados, hermosa y mediana planta. Ordenala ya!."},
      {nombre:"Poinsettia",imagen:"assets/Imagenes/Poinsettia.jpg.webp",id:4,precio:40000,descripcion:"Agregue estilo y dramatismo a su decoración interior con el colorido follaje de Poinsettia."},
      {nombre:"Moon Cactus",imagen:"assets/Imagenes/MoonCactus.jpg.webp",id:5,precio:20000,descripcion:"Gracias a este jardín de cactus miniatura es posible agregar un paisaje desértico a tu espacio."},
      {nombre:"Phalaenopsis",imagen:"assets/Imagenes/Phalaenopsis.jpg",id:6,precio:25000,descripcion:"Usar una cortina que deje pasar algo de luz natural también puede ser una muy buena opción."},
      {nombre:"Anthurium",imagen:"assets/Imagenes/Anthurium.jpg",id:7,precio:28000,descripcion:"Planta de interior muy utilizada para decorar los hogares por sus llamativas hojas en tonos rojos."},
      {nombre:"Dracaena",imagen:"assets/Imagenes/Dracaena.jpg",id:8,precio:30000,descripcion:"Es capaz de controlar la humedad en un ambiente cerrado, evitando así enfermedades."},
    ]

  }

  cargaramor(){
    this.route.navigate(['/padre'])


    this.descripcion = 'Que no te de miedo expresar lo que sientes, a veces las personas somos tan orgullosas que decidimos callar. Anda y conquistal@, ¿Algo mejor que las flores para tu traga? No, aquí tienes diferentes opciones para que l@s enamores:'
    
    this.titulo = '¡Ramos florales para enamorar!'

    this.datosplantas = [

      {nombre:"Te adoro",imagen:"assets/Imagenes/tragado1.jpg",id:9,precio:105000,descripcion:"Hermosas rosas acompañadas de follaje y yute con un moño decorativo muy elegante."},
      {nombre:"Demonos una oportunidad",imagen:"assets/Imagenes/arrepentido.png",id:10,precio:85000,descripcion:"Hermoso ramo de rosas y orquideas con peluche incluye tarjeta."},
      {nombre:"Dulce reconciliación",imagen:"assets/Imagenes/arrepentido1.jpg",id:11,precio:75000,descripcion:"Este corazón con rosas y chocolates importados pueden salvar cualquier relación."},
      {nombre:"Flores para conquistar",imagen:"assets/Imagenes/tragado.webp",id:12,precio:55900,descripcion:"Ramillete de quince rosas rosadas por perfectamente envueltas envueltas en delicada cinta."},
      {nombre:"La ternura del amor",imagen:"assets/Imagenes/amor6.jpg",id:13,precio:95000,descripcion:"Hermoso arreglo de diez y ocho rosas rojas acompañado de un tierno oso de peluche."},
      {nombre:"Pasión de amor",imagen:"assets/Imagenes/amor2.webp",id:13,precio:95000,descripcion:"Elegante caja de doce rosas perfectamente decorada con tierno peluche y globo metálico en forma de corazón"},  
      {nombre:"Te extraño",imagen:"assets/Imagenes/amor3.webp",id:13,precio:65000,descripcion:"Bello arreglo de doce rosas rojas de la mejora calidad para expresar tus sentimientos."},    
      {nombre:"Sorprendel@ con un bello ramo",imagen:"assets/Imagenes/amor7.jpg",id:13,precio:65000,descripcion:"Bello bouquet de rosas y un girasol perfectamente envueltos."},    

      
  ]
  }

  cargarecuperacion(){
    this.route.navigate(['/padre'])

    this.descripcion = 'Llevar flores a alguien cuando está enfermo es un gesto que alegra a cualquiera. Una forma bonita para hacerlo es llevándole flores, dale animo a esa persona que tanto amas y visítala con este hermoso detalle. Aquí te presentamos algunos de ellos'

    this.titulo = '¡Arreglos florales para reconfortar!'

    this.datosplantas = [

      {nombre:"Arreglo floral exótico",imagen:"assets/Imagenes/recuperacion4.jpg",id:1,precio:75000,descripcion:"Coloridas rosas, gladiolos y ruscos en una excelente presentación que alegran la vida."},
      {nombre:"Flores que recuperan el aliento",imagen:"assets/Imagenes/recuperacion2.jpg",id:1,precio:95000,descripcion:"Ramo de rosas, lirios y orquideas colocados en base de ceramica."},     
      {nombre:"Alegra la vida de esa persona con este lindo ramo",imagen:"assets/Imagenes/recuperacion5.jpg",id:1,precio:85000,descripcion:"Arreglo floral con Orquídeas y tarjeta personalizada."},
      {nombre:"Flores de encanto rosa silvestre",imagen:"assets/Imagenes/recuperacion.jpg",id:1,precio:105000,descripcion:"Rosas y Lirios con Campana de Irlanda perfectamente decoradas"},
      {nombre:"Arcoiris",imagen:"assets/Imagenes/recuperacion1.webp",id:1,precio:105000,descripcion:"Los hermosos y vibrantes colores de este elegante arreglo floral revivirán a cualquiera."},
      {nombre:"Sabor tropical",imagen:"assets/Imagenes/tropical.webp",id:1,precio:105000,descripcion:"Un ramo acompañado con frutas y hermosas flores exóticas de diferentes colores dan un tono de elegancia."},
      {nombre:"Recuperate pronto",imagen:"assets/Imagenes/recup.jpg",id:1,precio:105000,descripcion:"Encantador arreglo floral acompañado de botellitas de yogurt, un peluche y globo metálico."},
      {nombre:"Reanímate",imagen:"assets/Imagenes/recuperacion6.jpg",id:1,precio:105000,descripcion:"Elegante caja exagonal con flores lila perfectamente docoradas con tarjeta personalizada."},
      
      
  ]
  }

  cargarfechasespeciales(){
    this.route.navigate(['/padre'])

    this.descripcion = 'Un año más de vida es una gran oportunidad para celebrar la existencia de esa persona tan especial, al regalar una flor regalas alegría. Elige y lleva felicidad a esa persona en su cumpleaños, grado o simplemente porque tomas la decisión de ser luz en la vida de alguien.'
    
    this.titulo = '¡Arreglos florales para fechas especiales!'

    this.datosplantas = [      
      
      {nombre:"Cumpleaños inolvidables",imagen:"assets/Imagenes/cumple.jpeg",id:1,precio:85000,descripcion:"Rosas blush naranjas en caja veinte unidades,tarjeta y globo metalico."},
      {nombre:"Arreglo flores exoticas para cumpleaños",imagen:"assets/Imagenes/cumple1.jpg",id:1,precio:85000,descripcion:"Elegante carretilla de madera con flores coloridas y variadas."},
      {nombre:"Flores nacimiento",imagen:"assets/Imagenes/nacimiento.jpg",id:1,precio:85000,descripcion:"Para celebrar el nacimiento de una hermosa bebe un ramo de flores frescas con un peluche."},      
      {nombre:"Día de la mujer",imagen:"assets/Imagenes/mujer.jpg",id:1,precio:85000,descripcion:"Expresale la gran mujer que es con este hermoso arreglo flores con frutas y vino gato negro."},
      {nombre:"Amor y amistad",imagen:"assets/Imagenes/amoryamistad.jpg",id:1,precio:85000,descripcion:"Arreglo con flores, peluche y chocolastes en elegante carretilla de madera ideal para San Valentín."},
      {nombre:"Aniversario para recordar",imagen:"assets/Imagenes/aniversario.webp",id:1,precio:25000,descripcion:"Preciosas rosas rojas acompañadas de chocolates y un tierno peluche."},      
      {nombre:"Cumpleaños abuelita",imagen:"assets/Imagenes/aniversario.jpg",id:1,precio:85000,descripcion:"Hermoso Arreglo floral en caja con una lida muñeca decorativa y tarjeta personalizada"},
      {nombre:"Sonríe mamá",imagen:"assets/Imagenes/diamadre.jpg",id:1,precio:85000,descripcion:"Elegante caja de 6 rosas de exportación con chocolates Ferrero, perfecta para esta fecha especial."},
      
  ]
  }
}
