// Contenido del mapa
    var items = [
        // Contenido de texto; texto con imagen
        {
            type: "text", //Tipo del contenido
            title: "Point Prometheus", //Titulo
            description: "Situado en las afueras de la ciudad, Point Prometheus es el centro de investigación genética de Rapture, centrado principalmente en el desarrollo de plásmidos y modificaciones genéticas. También cuenta con la Mendel Memorial Research Library, que alberga una colección de libros científicos sobre genética, y con su propio Museo Conmemorativo dedicado a la biología y, en particular, a la vida marina de Rapture. Las instalaciones fueron dirigidas por el Dr. Yi Suchong bajo la dirección de Frank Fontaine y, posteriormente, de Andrew Ryan tras la nacionalización de Fontaine Futuristics.", //Descripcion
            position: { //Posición en el mapa
                left: 420,
                top: 160
            },
            picturePath: "Imagenes/Optimized_Eugenics.png", //Imagen
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "text", //Tipo del contenido
            title: "Neptune's Bounty", //Titulo
            description: "Es el mayor complejo portuario de Rapture, donde se encuentran la gran mayoría de los negocios pesqueros de la ciudad. Dado que el marisco representa una parte importante de la dieta del ciudadano medio de Rapture y es un recurso natural muy frecuente en el fondo del mar, Neptune's Bounty, y los negocios que en él se encuentran, son extremadamente importantes para la estabilidad de Rapture.", //Descripcion
            position: { //Posición en el mapa
                left: 240,
                top: 748
            },
            picturePath: "Imagenes/Neptune.png", //Imagen
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "text", //Tipo del contenido
            title: "Olympia Heights", //Titulo
            description: "Cuenta con una ruta central de tranvía para conectar los distritos residenciales con el resto de la ciudad. El distrito alberga algunos de los edificios de apartamentos más consolidados de toda Rapture. El bistró situado en el centro del distrito ofrece comida fina y bebidas caras, y el Adonis Luxury Resort, situado en la zona, también proporciona una escapada de relax y ofrece varios tratamientos de spa e instalaciones recreativas.", //Descripcion
            position: { //Posición en el mapa
                left: 492,
                top: 383
            },
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "text", //Tipo del contenido
            title: "Arcadia", //Titulo
            description: "Arcadia es el corazón vivo de Rapture. Sus frondosos bosques y su abundante vida vegetal sirven para generar el oxígeno vital que la ciudad necesita. Es un refugio tranquilo para aquellos que buscan un respiro de los rigores diarios de la vida en la ciudad para relajarse en soledad entre los numerosos árboles y colinas cubiertas de hierba. Los veraneantes que buscan algo más relajante que las luces parpadeantes de Fort Frolic pueden encontrar paz y serenidad en la encantadora Gruta de la Cascada, el Jardín del Té y otros refugios bajo las copas de los árboles. La Arcadia es muy popular en el día de San Valentín entre las parejas, por ser un entorno amoroso.", //Descripcion
            position: { //Posición en el mapa
                left: 466,
                top: 748
            },
            picturePath: "Imagenes/Arcadia.png", //Imagen
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "text", //Tipo del contenido
            title: "Hephaestus", //Titulo
            description: "Es la principal fuente de producción de energía de Rapture y está situada en el extremo sur de la ciudad. Diseñada por Andrew Ryan, aprovecha el calor de los respiraderos geotérmicos del fondo del océano. Hephaestus fue una de las instalaciones iniciales construidas en Rapture; sin ella, Rapture no podría haber recibido energía. Hephaestus también contiene el despacho privado de Andrew Ryan.", //Descripcion
            position: { //Posición en el mapa
                left: 240,
                top: 998
            },
            picturePath: "Imagenes/Hephaestus.jpg", //Imagen
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "text", //Tipo del contenido
            title: "Fontaine Futuristics", //Titulo
            description: "La sede principal contiene la división de marketing de Fontaine Futuristics, así como varias atracciones turísticas para complacer a los clientes visitantes. Esto incluye una pequeña sala de laboratorio simulada y una gran sala de exposición de plásmidos para mostrar el poder de los plásmidos.", //Descripcion
            position: { //Posición en el mapa
                left: 699,
                top: 737
            },
            picturePath: "Imagenes/Fontaine_Futuristics.jpg", //Imagen
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "text", //Tipo del contenido
            title: "Fontaine's", //Titulo
            description: "Fontaine's es un gran centro comercial que sirve de exposición de los productos de varias empresas.  El edificio central, los Grandes Almacenes, vende a los clientes prendas de vestir al tiempo que ofrece a los visitantes zonas de recreación como 'Rapture on Ice', una pista de patinaje sobre hielo artificial. La tienda está conectada con los otros dos edificios que flotan a su lado mediante un tranvía que se mueve por raíles flexibles.", //Descripcion
            position: { //Posición en el mapa
                left: 208,
                top: 1050
            },
            picturePath: "Imagenes/Fontaine.png", //Imagen
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "text", //Tipo del contenido
            title: "Pauper's Drop", //Titulo
            description: "Era originalmente el Puesto de Mantenimiento 17 del ferrocarril Atlantic Express, y se convirtió en alojamiento para los trabajadores y sus familias una vez finalizada la construcción de la red ferroviaria.", //Descripcion
            position: { //Posición en el mapa
                left: 408,
                top: 868
            },
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "text", //Tipo del contenido
            title: "Minerva's Den", //Titulo
            description: "La fuente de informatización de Rapture, la Rapture Central Computing Corporation fue fundada en la Guarida de Minerva durante los primeros días del desarrollo de Rapture. La Red de Interpretación de Datos Operativos de Rapture (apodada 'El Pensador'), el ordenador central que ejecuta muchos de los procesos automatizados de Rapture, está escondido en las entrañas de la Guarida, en la parte de Operaciones de Informática Central de Rapture.", //Descripcion
            position: { //Posición en el mapa
                left: 175,
                top: 994
            },
            picturePath: "Imagenes/Minerva.jpg", //Imagen
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "text", //Tipo del contenido
            title: "Atlantic Express Depot", //Titulo
            description: "El Depósito del Expreso del Atlántico, también conocido como Depósito de Mantenimiento, es el centro principal y la administración del ferrocarril del Expreso del Atlántico, y contiene las instalaciones de fabricación y reparación de trenes del sistema ferroviario.", //Descripcion
            position: { //Posición en el mapa
                left: 105,
                top: 868
            },
            picturePath: "Imagenes/Atlantic.jpg", //Imagen
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },


        // Contenido de imagenes con leyenda.
        {
            type: "picture", //Tipo del contenido
            path: "Imagenes/Entrada.png", //Imagen
            caption: "El Centro de Bienvenida es la puerta de entrada a una nueva vida en Rapture.", //Descripcion
            position: { //Posición en el mapa
                left: 393,
                top: 585
            },
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "picture", //Tipo del contenido
            path: "Imagenes/Dionysus.png", //Imagen
            caption: "El Parque de Dionisio es un refugio seguro en el que todos los artistas pueden presentar sus obras sin restricciones.", //Descripcion
            position: { //Posición en el mapa
                left: 543,
                top: 808
            },
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "picture", //Tipo del contenido
            path: "Imagenes/High.png", //Imagen
            caption: "Mientras que Fort Frolic era el centro de arte y entretenimiento de la ciudad, High Street se estableció para el comercio de ocio.", //Descripcion
            position: { //Posición en el mapa
                left: 362,
                top: 752
            },
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        // Contenido de audio con descripción.
        {
            type: "audio", //Tipo del contenido
            path: "Multimedia/Cohens_Masterpiece.mp3",
            caption: "Toda sociedad, incluso la que se encuentra en el fondo del Océano Atlántico, necesita un lugar para relajarse: un lugar donde los adultos puedan darse un capricho con un par de copas, gastar en un día de compras, asistir a un espectáculo o probar suerte en un casino. En Rapture, uno de esos lugares es Fort Frolic. Decorado con luces de neón, columnas de antorchas y azulejos en forma de tablero de ajedrez, es un entorno glamuroso que ofrece desde las bellas artes, como la música, el cine y el teatro, hasta las distracciones más salaces, como los clubes de striptease y el juego. También es un destino de compras, con muchas boutiques que venden desde la ropa más lujosa hasta tabaco y licor.", //Descripcion
            position: { //Posición en el mapa
                left: 635,
                top: 622
            },
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "audio", //Tipo del contenido
            path: "Multimedia/The_Ocean.mp3",
            caption: "El ala de exposiciones especiales Fontaine del Museo Conmemorativo muestra las mejores exposiciones que ofrece el museo.", //Descripcion
            position: { //Posición en el mapa
                left: 651,
                top: 815
            },
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        // Contenido de video con descripción.
        {
            type: "video", //Tipo del contenido
            path: "Multimedia/The_Lighthouse.mp4",
            caption: "El faro es una torre de navegación que se levanta en una pequeña isla rocosa situada aproximadamente a 63° N, 32° W en medio del Océano Atlántico. La estructura monolítica tiene más de cinco pisos de altura y está diseñada con una serie de retranqueos decorados con relieves geométricos que recrean un rascacielos de estilo Art Decó. En el vértice del faro se alza una imponente estatua alada de estilo Art Decó que sostiene el emisor de luz de la torre. La figura también se utiliza habitualmente como símbolo de la ciudad de Rapture y está representada en sus diversas artes y decoraciones.", //Descripcion
            position: { //Posición en el mapa
                left: 191,
                top: 735
            },
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "video", //Tipo del contenido
            path: "Multimedia/Market.mp4",
            caption: "Market Street sirve como paseo recreativo y residencial. La zona atiende a los ciudadanos de clase media y alta de Rapture como un centro donde pueden cenar y vivir con estilo. Con sus espectaculares vistas al mar, Market Street es un verdadero escaparate del mejor diseño de Rapture.", //Descripcion
            position: { //Posición en el mapa
                left: 466,
                top: 652
            },
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },

        {
            type: "video", //Tipo del contenido
            path: "Multimedia/Tour.mp4",
            caption: "Ryan Amusements es un parque temático destinado a enseñar la filosofía de Andrew Ryan a los jóvenes de Rapture. Además de la atracción, Ryan Amusements cuenta con el Museo de Rapture, dedicado a la fundación de la ciudad, el Salón del Futuro, donde se hacen demostraciones de plásmidos y se venden a los visitantes, el Salón El Dorado, donde pueden reponerse mientras disfrutan de un espectáculo, y una tienda de regalos. También se ofrecen tonicos genéticos promocionales a los visitantes en la entrada del parque.", //Descripcion
            position: { //Posición en el mapa
                left: 225,
                top: 813
            },
            sticky: true //Se mantiene abierto hasta que se presione la "X"
        },
    ];

    // Configuracion del plugin
    var options = {
        debug: false,                                                 // Mostrar mensajes de consola
        allowHtml: true,                                             // Permitir HTML dentro de los items
        shareBox: false,                                              // Mostrar la caja de compartir en redes sociales
        triggerEvent: 'click',                                       // Evento que ocasiona la aparición de los elementos
    };

    // Activación del plugin
    $(document).ready(function() {
        $("#my-interactive-image").interactiveImage(items, options); //Se incluye el contenido en el documento.
    });