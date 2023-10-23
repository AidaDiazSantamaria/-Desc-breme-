let deck = [
    { personaje: "Boris", pistas: ["Tengo un solo ojo.", "Llevo gorra.", "No llevo coletas.", "Tengo la boca abierta.", "No tengo el pelo largo.", "No tengo cuernos.", "Mi ropa es azul.", "Mi piel es azul.", "Mi piel no es naranja.", "Mi cabeza no es redonda."] },
    { personaje: "Celia", pistas: ["Tengo cuatro ojos.", "Llevo coletas.", "Mi ropa es naranja.", "No llevo gorra.", "Estoy sonriendo.", "No tengo orejas.", "Mi piel es rosa.", "Mi piel no es azul.", "No tengo cuernos.", "No se me ve la lengua.", "Mi piel no es moteada.", "Tengo cuatro cejas."] },
    { personaje: "Eve", pistas: ["Tengo cuatro ojos.", "Mi piel es naranja.", "Mi boca es grande.", "Mi ropa es rosa.", "No llevo gorra.", "No tengo pelo.", "No estoy sonriendo.", "Tengo la boca cerrada.", "No tengo cuernos.", "No llevo diadema.", "No tengo cejas.", "Mi piel es moteada."] },
    { personaje: "Gina", pistas: ["Tengo tres ojos.", "Llevo el pelo largo.", "Tengo una diadema.", "Estoy sonriendo.", "Tengo la boca abierta.", "Mis orejas son puntiagudas.", "Llevo flequillo.", "Mi piel no es azul.", "Mi piel no es rosa.", "No llevo coletas.", "No tengo cuernos.", "No llevo gorra."] },
    { personaje: "Jason", pistas: ["Mi nariz es grande.", "Tengo cuernos.", "Tengo dos ojos.", "Llevo gorra.", "Mi piel no es azul.", "Mi piel no es amarilla.", "Mi ropa no es verde.", "Mi gorra no es rosa.", "Tengo dos orejas.", "No estoy sonriendo.", "Llevo flequillo.", "No tengo cuatro cejas."] },
    { personaje: "Lawrence", pistas: ["Mi cabeza no es alargada.", "No estoy sonriendo.", "No tengo dos ojos.", "Mi ropa es verde.", "No llevo gorra.", "Mi piel es azul.", "No tengo cuernos.", "No tengo pelo.", "No llevo diadema.", "No tengo orejas.", "Mi piel no es moteada.", "Mi piel no es rosa."] },
    { personaje: "Molly", pistas: ["Mi pelo es largo.", "Llevo flequillo.", "Tengo cuernos.", "Mis orejas son puntiagudas.", "Tengo tres ojos.", "No estoy sonriendo.", "Mi piel no es amarilla.", "Mi piel no es rosa.", "No llevo gorra.", "Mi ropa no es azul.", "No tengo nariz.", "No se me ve la lengua."] },
    { personaje: "Peter", pistas: ["Tengo tres ojos.", "Tengo cuernos.", "Tengo cejas.", "Estoy sonriendo.", "Mi pelo es rizado.", "Mi piel no es azul.", "Mi ropa no es rosa.", "Mi piel es amarilla.", "No tengo pestañas.", "No llevo gorra.", "No se me ve la lengua.", "No tengo orejas."] },
    { personaje: "Quill", pistas: ["Mi piel es naranja.", "Tengo cresta.", "Mi piel es moteada.", "Mi ropa no es amarilla.", "No tengo pelo.", "No llevo gorra.", "No tengo cuernos.", "No llevo coletas.", "No tengo la boca cerrada.", "No tengo nariz.", "Mi ropa no es rosa.", "Tengo cejas."] },
    { personaje: "Telly", pistas: ["No tengo el pelo rizado.", "No tengo el pelo largo.", "Mi nariz es pequeña.", "Tengo un ojo.", "No estoy sonriendo.", "Mi ropa no es verde.", "No llevo gorra.", "No llevo diadema.", "No tengo flequillo.", "No tengo cuernos.", "Mi piel no es amarilla.", "Mi piel no es azul."] },
    { personaje: "Umberto", pistas: ["Tengo cuatro ojos.", "Tengo cejas.", "Llevo gorra.", "No estoy sonriendo.", "Mi piel no es azul.", "Mi gorra no es azul.", "Mi ropa no es rosa.", "No tengo cuernos.", "No tengo el pelo largo.", "No llevo flequillo.", "No llevo coletas.", "No tengo nariz."] },
    { personaje: "Violet", pistas: ["Tengo dos ojos.", "Tengo cejas.", "No tengo nariz.", "No tengo orejas.", "Mi piel es moteada.", "Mi piel no es naranja.", "Tengo cresta.", "Mi ropa no es azul.", "No tengo el pelo largo.", "No tengo cuernos.", "No llevo coletas.", "No llevo gorra."] },
    { personaje: "Albert", pistas: ["Tengo cresta.", "Estoy sonriendo.", "Mi piel no es azul.", "Mi ropa no es verde.", "No llevo gorra.", "No tengo cuernos.", "Tengo un ojo.", "Mi piel es naranja.", "Mi nariz es pequeña.", "No llevo diadema.", "No se me ve la lengua.", "Mi piel no es rosa."] },
    { personaje: "Edith", pistas: ["Mi piel es verde.", "Estoy sonriendo.", "Tengo tres ojos.", "No se me ve la lengua.", "Mi ropa no es azul.", "Mi ropa no es verde.", "Mi piel no es rosa.", "No tengo cuernos.", "No llevo diadema.", "Mis pestañas son largas.", "No tengo nariz.", "Mi ropa es rosa."] },
    { personaje: "Hakem", pistas: ["Tengo tres ojos.", "Tengo la boca abierta.", "Estoy sonriendo.", "No tengo cejas.", "Mi piel es amarilla.", "Mi ropa no es rosa.", "Mi ropa no es verde.", "No tengo cuernos.", "No tengo cejas.", "No llevo gorra.", "No tengo pestañas.", "Mi ropa no es naranja."] },
    { personaje: "Richard", pistas: ["Tengo cuatro ojos.", "Llevo gafas.", "Estoy sonriendo.", "Tengo cuernos.", "Mi ropa es azul.", "Mi piel es verde.", "No llevo coletas.", "No tengo flequillo.", "No llevo gorra.", "Mi piel no es moteada.", "No tengo cejas.", "Mi piel no es azul."] },
    { personaje: "Sam", pistas: ["Tengo dos ojos.", "Tengo cejas.", "Tengo cresta.", "Mi piel no es moteada.", "Mi piel es morada.", "Mi ropa no es verde.", "Mi ropa no es naranja.", "No llevo gorra.", "No llevo coletas.", "Estoy sonriendo.", "No llevo gafas.", "No llevo diadema."] },
    { personaje: "Walter", pistas: ["Llevo gorra.", "Mi pelo es azul.", "No estoy sonriendo.", "No se me ve la lengua.", "Mi ropa no es rosa.", "Mi piel no es naranja.", "Tengo dos ojos.", "No llevo gafas.", "Tengo cejas.", "Mi piel no es moteada.", "No tengo cresta.", "No llevo coletas."] }
];

let deckpj = [
    { personaje: "Boris", pistas: ["Tengo un solo ojo.", "Llevo gorra.", "No llevo coletas.", "Tengo la boca abierta.", "No tengo el pelo largo.", "No tengo cuernos.", "Mi ropa es azul.", "Mi piel es azul.", "Mi piel no es naranja.", "Mi cabeza no es redonda."] },
    { personaje: "Celia", pistas: ["Tengo cuatro ojos.", "Llevo coletas.", "Mi ropa es naranja.", "No llevo gorra.", "Estoy sonriendo.", "No tengo orejas.", "Mi piel es rosa.", "Mi piel no es azul.", "No tengo cuernos.", "No se me ve la lengua.", "Mi piel no es moteada.", "Tengo cuatro cejas."] },
    { personaje: "Eve", pistas: ["Tengo cuatro ojos.", "Mi piel es naranja.", "Mi boca es grande.", "Mi ropa es rosa.", "No llevo gorra.", "No tengo pelo.", "No estoy sonriendo.", "Tengo la boca cerrada.", "No tengo cuernos.", "No llevo diadema.", "No tengo cejas.", "Mi piel es moteada."] },
    { personaje: "Gina", pistas: ["Tengo tres ojos.", "Llevo el pelo largo.", "Tengo una diadema.", "Estoy sonriendo.", "Tengo la boca abierta.", "Mis orejas son puntiagudas.", "Llevo flequillo.", "Mi piel no es azul.", "Mi piel no es rosa.", "No llevo coletas.", "No tengo cuernos.", "No llevo gorra."] },
    { personaje: "Jason", pistas: ["Mi nariz es grande.", "Tengo cuernos.", "Tengo dos ojos.", "Llevo gorra.", "Mi piel no es azul.", "Mi piel no es amarilla.", "Mi ropa no es verde.", "Mi gorra no es rosa.", "Tengo dos orejas.", "No estoy sonriendo.", "Llevo flequillo.", "No tengo cuatro cejas."] },
    { personaje: "Lawrence", pistas: ["Mi cabeza no es alargada.", "No estoy sonriendo.", "No tengo dos ojos.", "Mi ropa es verde.", "No llevo gorra.", "Mi piel es azul.", "No tengo cuernos.", "No tengo pelo.", "No llevo diadema.", "No tengo orejas.", "Mi piel no es moteada.", "Mi piel no es rosa."] },
    { personaje: "Molly", pistas: ["Mi pelo es largo.", "Llevo flequillo.", "Tengo cuernos.", "Mis orejas son puntiagudas.", "Tengo tres ojos.", "No estoy sonriendo.", "Mi piel no es amarilla.", "Mi piel no es rosa.", "No llevo gorra.", "Mi ropa no es azul.", "No tengo nariz.", "No se me ve la lengua."] },
    { personaje: "Peter", pistas: ["Tengo tres ojos.", "Tengo cuernos.", "Tengo cejas.", "Estoy sonriendo.", "Mi pelo es rizado.", "Mi piel no es azul.", "Mi ropa no es rosa.", "Mi piel es amarilla.", "No tengo pestañas.", "No llevo gorra.", "No se me ve la lengua.", "No tengo orejas."] },
    { personaje: "Quill", pistas: ["Mi piel es naranja.", "Tengo cresta.", "Mi piel es moteada.", "Mi ropa no es amarilla.", "No tengo pelo.", "No llevo gorra.", "No tengo cuernos.", "No llevo coletas.", "No tengo la boca cerrada.", "No tengo nariz.", "Mi ropa no es rosa.", "Tengo cejas."] },
    { personaje: "Telly", pistas: ["No tengo el pelo rizado.", "No tengo el pelo largo.", "Mi nariz es pequeña.", "Tengo un ojo.", "No estoy sonriendo.", "Mi ropa no es verde.", "No llevo gorra.", "No llevo diadema.", "No tengo flequillo.", "No tengo cuernos.", "Mi piel no es amarilla.", "Mi piel no es azul."] },
    { personaje: "Umberto", pistas: ["Tengo cuatro ojos.", "Tengo cejas.", "Llevo gorra.", "No estoy sonriendo.", "Mi piel no es azul.", "Mi gorra no es azul.", "Mi ropa no es rosa.", "No tengo cuernos.", "No tengo el pelo largo.", "No llevo flequillo.", "No llevo coletas.", "No tengo nariz."] },
    { personaje: "Violet", pistas: ["Tengo dos ojos.", "Tengo cejas.", "No tengo nariz.", "No tengo orejas.", "Mi piel es moteada.", "Mi piel no es naranja.", "Tengo cresta.", "Mi ropa no es azul.", "No tengo el pelo largo.", "No tengo cuernos.", "No llevo coletas.", "No llevo gorra."] },
    { personaje: "Albert", pistas: ["Tengo cresta.", "Estoy sonriendo.", "Mi piel no es azul.", "Mi ropa no es verde.", "No llevo gorra.", "No tengo cuernos.", "Tengo un ojo.", "Mi piel es naranja.", "Mi nariz es pequeña.", "No llevo diadema.", "No se me ve la lengua.", "Mi piel no es rosa."] },
    { personaje: "Edith", pistas: ["Mi piel es verde.", "Estoy sonriendo.", "Tengo tres ojos.", "No se me ve la lengua.", "Mi ropa no es azul.", "Mi ropa no es verde.", "Mi piel no es rosa.", "No tengo cuernos.", "No llevo diadema.", "Mis pestañas son largas.", "No tengo nariz.", "Mi ropa es rosa."] },
    { personaje: "Hakem", pistas: ["Tengo tres ojos.", "Tengo la boca abierta.", "Estoy sonriendo.", "No tengo cejas.", "Mi piel es amarilla.", "Mi ropa no es rosa.", "Mi ropa no es verde.", "No tengo cuernos.", "No tengo cejas.", "No llevo gorra.", "No tengo pestañas.", "Mi ropa no es naranja."] },
    { personaje: "Richard", pistas: ["Tengo cuatro ojos.", "Llevo gafas.", "Estoy sonriendo.", "Tengo cuernos.", "Mi ropa es azul.", "Mi piel es verde.", "No llevo coletas.", "No tengo flequillo.", "No llevo gorra.", "Mi piel no es moteada.", "No tengo cejas.", "Mi piel no es azul."] },
    { personaje: "Sam", pistas: ["Tengo dos ojos.", "Tengo cejas.", "Tengo cresta.", "Mi piel no es moteada.", "Mi piel es morada.", "Mi ropa no es verde.", "Mi ropa no es naranja.", "No llevo gorra.", "No llevo coletas.", "Estoy sonriendo.", "No llevo gafas.", "No llevo diadema."] },
    { personaje: "Walter", pistas: ["Llevo gorra.", "Mi pelo es azul.", "No estoy sonriendo.", "No se me ve la lengua.", "Mi ropa no es rosa.", "Mi piel no es naranja.", "Tengo dos ojos.", "No llevo gafas.", "Tengo cejas.", "Mi piel no es moteada.", "No tengo cresta.", "No llevo coletas."] }
];

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
    btnNuevo = document.querySelector('#btnNuevo');

// Variables para almacenar las referencias a elementos HTML
const mensajeErrorElement = document.getElementById('mensajeError');
const inputNombre = document.getElementById('inputNombre');

let prota;
let indicePistaActual = 0;
let descartes = [];
let cartaSeleccionadaProta = null;
let pistasMostradas = [];
let nickModalInstance = null; // Variable para almacenar la instancia del modal

// Evento click del botón "Aceptar" dentro del modal
document.getElementById('btnAceptar').addEventListener('click', () => {
    const nombreJugador = document.getElementById('inputNombre').value;
    if (nombreJugador.trim() !== '') {
        const jugadorElement = document.getElementById('jugador');
        jugadorElement.textContent = nombreJugador;
        // Cerrar el modal
        nickModalInstance.hide();
        inicializarJuego();
        manoPJ();
        mostrarBaraja();
        // Llamar a soyX solo cuando el jugador ha ingresado su nombre
        soyX();

    } else {
        // Mostrar mensaje de error dentro del modal
        mensajeErrorElement.textContent = '¡Dime tu nombre para poder jugar!.';
    }
});

// Función para mostrar el modal personalizado de nick
const showNickModal = () => {
    // Si hay una instancia de modal abierta, eliminarla antes de mostrar un nuevo modal
    if (nickModalInstance) {
        nickModalInstance.dispose();
        nickModalInstance = null;
    }

    // Restablecer el mensaje de error a su estado predeterminado
    const mensajeErrorElement = document.getElementById('mensajeError');
    mensajeErrorElement.textContent = '';

    // Mostrar el modal
    nickModalInstance = new bootstrap.Modal(document.getElementById('nickModal'));
    nickModalInstance.show();

    // Enfocar el campo de entrada al abrir el modal
    document.getElementById('inputNombre').focus();
};

//Función que baraja las cartas
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

//Función que selecciona el personaje a adivinar
const soyX = () => {
    shuffleArray(deckpj);

    prota = deckpj.pop();
    indicePistaActual = 0;

    cartaSeleccionadaProta = prota.personaje;
    console.log(prota);
    return prota;
};

// Definir una función para obtener un índice aleatorio sin repeticiones
const obtenerIndiceAleatorioSinRepeticion = (longitud, indicesMostrados) => {
    let indiceAleatorio = Math.floor(Math.random() * longitud);
    while (indicesMostrados.includes(indiceAleatorio)) {
        indiceAleatorio = (indiceAleatorio + 1) % longitud;
    }
    return indiceAleatorio;
};

//Función que obtiene las pistas del array
const pedirPista = () => {
    // Obtener las pistas del personaje seleccionado
    const pistas = prota.pistas;
    const cantidadPistas = pistas.length;

    // Si se han mostrado todas las pistas, reiniciar el arreglo de pistas mostradas
    if (pistasMostradas.length === cantidadPistas) {
        pistasMostradas = [];
    }

    // Generar un índice aleatorio sin repetición
    let indiceAleatorio = obtenerIndiceAleatorioSinRepeticion(cantidadPistas, pistasMostradas);

    // Agregar el índice al arreglo de pistas mostradas
    pistasMostradas.push(indiceAleatorio);

    return pistas[indiceAleatorio];
};

//Función que muestra las pistas del array
const manoPJ = () => {
    const divJuego = document.getElementById('juego');
    divJuego.innerHTML = '';

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/ABAJO.png`;
    imgCarta.classList.add('carta');
    divJuego.appendChild(imgCarta); // Agregar la imagen al div

    const divPistas = document.createElement('div'); // Crear el div para mostrar las pistas
    divPistas.id = 'divPistas'; // Asignar el id necesario

    divJuego.appendChild(divPistas); // Agregar el div de pistas al div del juego
};

// Esta función inicializa el juego 
const inicializarJuego = () => {
    btnPedir.disabled = false;
    prota = '';
    descartes = []; // Vaciar el array de descartes para una nueva partida
}

// Evento del botón btnPedir
btnPedir.addEventListener('click', () => {
    // Obtener la pista actual
    const pista = pedirPista();

    // Crear un nuevo elemento párrafo para mostrar la pista
    const pistaElement = document.createElement('p');
    pistaElement.textContent = pista;

    // Obtener el div de pistas
    const divPistas = document.getElementById('divPistas');

    // Limpiar el contenido anterior y agregar la nueva pista
    divPistas.innerHTML = '';
    divPistas.appendChild(pistaElement);
});

// Evento del botón btnNuevo
btnNuevo.addEventListener('click', () => {
    showNickModal(); // Mostrar el modal personalizado       
});

// Función para mostrar el mensaje de ganador o perdedor
const finJuego = (ganador) => {
    const mensaje = ganador ? (confetti(), '¡Enhorabuena, has adivinado el personaje!') : '¡Ooooh, no has adivinado el personaje!';

    // Mostrar el mensaje y la carta de prota en el div "juego"
    const divJuego = document.getElementById('juego');
    divJuego.innerHTML = '';

    // Crear el contenedor para la carta del prota
    const contenedorCartaProta = document.createElement('div');
    contenedorCartaProta.style.display = 'inline-block';
    contenedorCartaProta.style.marginRight = '20px';
    divJuego.appendChild(contenedorCartaProta);

    // Mostrar la carta de prota en el contenedor
    const imgCartaProta = document.createElement('img');
    imgCartaProta.src = `assets/cartas/${prota.personaje}.png`;
    imgCartaProta.classList.add('carta-jugador');
    contenedorCartaProta.appendChild(imgCartaProta); // Agregar la imagen al contenedor

    // Mostrar el mensaje en el div "juego"
    const mensajeElement = document.createElement('p');
    mensajeElement.textContent = mensaje;
    divJuego.appendChild(mensajeElement);

    // Imprimir las cartas de prota y la última carta en la mano
    console.log('Carta de prota:', prota);
    console.log('Última carta en la mano:', deck[deck.length - 1]);
    console.log('Última carta en la mano:', deck);
    console.log('Última carta en la mano:', descartes);


    // Deshabilitar la selección de cartas
    const cartasJugador = document.getElementsByClassName('carta-jugador');
    for (let i = 0; i < cartasJugador.length; i++) {
        cartasJugador[i].removeEventListener('click', seleccionarCarta);
    }
};

// Función para mostrar el mensaje de girar la pantalla, en caso de ser de tablet o móvil
const mostrarMensajeGirar = () => {
    const h1MsjGirar = document.getElementById('msjGirar');

    // Obtener el ancho de la ventana del navegador
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Determinar si la pantalla es menor que un ancho considerado como tablet (aproximadamente 10.5 pulgadas / 1200 píxeles)
    const isTablet = windowWidth < 1024 && windowHeight > windowWidth;

    // Mostrar u ocultar el mensaje según la condición
    h1MsjGirar.style.display = isTablet ? 'block' : 'none';
};

// Mostrar el mensaje al cargar la página
mostrarMensajeGirar();

// Evento para mostrar el mensaje al cambiar el tamaño de la ventana
window.addEventListener('resize', mostrarMensajeGirar);

// Evento para ocultar el mensaje al girar la pantalla
window.addEventListener('orientationchange', mostrarMensajeGirar);

//Función jquery para usar el icono de las instrucciones
$(document).ready(function () {
    // Hacer clic en el icono de información
    $(document).on('click', '.infoIcon', function (event) {
        event.preventDefault();
        var hiddenText = $(this).next('.hidden-text');
        hiddenText.fadeToggle(200);
    });
});

//Función que muestra la baraja boca arriba
const mostrarBaraja = () => {
    const divJugadorCartas = document.getElementById('jugador-cartas');
    divJugadorCartas.innerHTML = '';

    // Iterar por el array deck en lugar de cartas para mantener el orden
    deck.forEach((carta, index) => {
        const imgCarta = new Image(); // Crear un elemento de imagen
        imgCarta.classList.add('carta-jugador');
        imgCarta.src = `assets/cartas/${carta.personaje}.png`; // Establecer la ruta de la imagen
        imgCarta.dataset.personaje = carta.personaje; // Agregar el atributo "data-personaje"
        imgCarta.dataset.index = index; // Agregar el atributo "data-index"
        // Agregar el evento de clic para dar vuelta a la carta
        imgCarta.addEventListener('click', () => {
            seleccionarCarta(imgCarta, index); // Pasar el índice de la carta seleccionada
        });

        divJugadorCartas.appendChild(imgCarta);
    });
};

//Función que da la vuelta a las cartas y opera con ellas entre arrays
const seleccionarCarta = (imgCarta, index) => {
    const cartaSeleccionada = imgCarta.dataset.personaje;
    console.log(`Has dado vuelta a la carta: ${cartaSeleccionada}`);
  
    // Verificar si la carta ya está en el array de descartes
    const enDescartes = descartes.some((descarte) => descarte.personaje === cartaSeleccionada);
  
    if (index !== -1 && !enDescartes) {
      // Agregar la carta seleccionada al array de descartes
      descartes.push(deck[index]);
  
      // Dar vuelta a la carta (mostrar imagen ABAJO.png)
      imgCarta.src = "assets/cartas/ABAJO.png";
    } else if (enDescartes) {
      console.log(`La carta ${cartaSeleccionada} ya está en el array de descartes.`);
    }
  
    console.log(deck);
    console.log(descartes);
  
    // Verificar si quedan cartas en la mano
    if (descartes.length === 17) {
      const cartaUnicaDeck = deck[0];
  
      // Encontrar la carta única en el array deck que no está en el array descartes
      const cartaUnica = deck.find((carta) => !descartes.some((descarte) => descarte.personaje === carta.personaje));
      console.log(cartaUnica);
  
      // Verificar si la carta única es la misma que la carta del protagonista
      if (cartaUnica && cartaUnica.personaje === cartaSeleccionadaProta) {
        finJuego(true); // Ganador
      } else {
        finJuego(false); // Perdedor
      }
    }
  };
  








