const androidData = [
    {
        id: "v1_5",
        name: "Android 1.5 Cupcake",
        year: "2009",
        img: "imagenes/v15.png",
        desc: `El inicio de la era de los postres y la personalización.
        * **Teclado Virtual:** Introdujo el teclado en pantalla con predicción de texto.
        * **Widgets:** Permitió a las apps mostrar contenido en vivo en el escritorio.
        * **YouTube:** Primera integración para subir videos directamente.`
    },
    {
        id: "v1_6",
        name: "Android 1.6 Donut",
        year: "2009",
        img: "imagenes/v16.png",
        desc: `La expansión hacia múltiples resoluciones de pantalla.
        * **Búsqueda Rápida:** Caja de búsqueda unificada para web y archivos locales.
        * **Text-to-Speech:** Motor de voz para que el sistema pudiera "leer" textos.
        * **Galería:** Nueva interfaz para gestionar fotos y videos rápidamente.`
    },
    {
        id: "v2_0",
        name: "Android 2.0 Eclair",
        year: "2009",
        img: "imagenes/v20.png",
        desc: `Transformó el smartphone en un navegador GPS real.
        * **Google Maps Nav:** Lanzamiento de la navegación con guía por voz gratuita.
        * **Soporte Multi-Touch:** Implementación nativa del gesto "pellizcar para zoom".
        * **Cuentas Múltiples:** Soporte para varias cuentas de correo de terceros.`
    },
    {
        id: "v2_2",
        name: "Android 2.2 Froyo",
        year: "2010",
        img: "imagenes/v22.png",
        desc: `Enfoque total en el rendimiento y la velocidad.
        * **Motor JIT:** Hizo que las aplicaciones fueran hasta 5 veces más rápidas.
        * **Hotspot:** Capacidad de compartir internet vía Wi-Fi de forma nativa.
        * **Adobe Flash:** Soporte para contenido multimedia en el navegador.`
    },
    {
        id: "v2_3",
        name: "Android 2.3 Gingerbread",
        year: "2010",
        img: "imagenes/v23.png",
        desc: `Refinamiento para juegos y eficiencia energética.
        * **Soporte NFC:** Inicio de los pagos móviles y lectura de etiquetas.
        * **Gestión de Batería:** Panel detallado para ver qué app consumía más energía.
        * **API de Juegos:** Drivers optimizados para gráficos 3D de alta calidad.`
    },
    {
        id: "v3_0",
        name: "Android 3.0 Honeycomb",
        year: "2011",
        img: "imagenes/v30.png",
        desc: `Diseño futurista "Holo" exclusivo para tablets.
        * **System Bar:** Introducción de botones virtuales (atrás, inicio, recientes).
        * **Multitarea:** Panel visual con capturas de las apps abiertas.
        * **Aceleración:** Uso de la GPU para mover la interfaz de usuario.`
    },
    {
        id: "v4_0",
        name: "Android 4.0 Ice Cream Sandwich",
        year: "2011",
        img: "imagenes/v40.png",
        desc: `La gran unificación entre teléfonos y tablets.
        * **Face Unlock:** Primer sistema de seguridad mediante reconocimiento facial.
        * **Carpetas:** Organización intuitiva arrastrando apps una sobre otra.
        * **Control de Datos:** Gráficos para limitar el consumo de internet móvil.`
    },
    {
        id: "v4_1",
        name: "Android 4.1 Jelly Bean",
        year: "2012",
        img: "imagenes/v41.png",
        desc: `Llegada de la fluidez extrema con Project Butter.
        * **60 FPS:** Sincronización vertical para una interfaz suave como la seda.
        * **Google Now:** Asistente predictivo con tarjetas de información útil.
        * **Notificaciones:** Capacidad de responder mensajes desde la alerta.`
    },
    {
        id: "v4_4",
        name: "Android 4.4 KitKat",
        year: "2013",
        img: "imagenes/v44.png",
        desc: `Optimizado para hardware de entrada con Project Svelte.
        * **Ok Google:** Acceso al asistente mediante comandos de voz.
        * **Modo Inmersivo:** Las apps podían usar el 100% de la pantalla táctil.
        * **512MB RAM:** Capacidad de correr fluido en equipos de gama baja.`
    },
    {
        id: "v5_0",
        name: "Android 5.0 Lollipop",
        year: "2014",
        img: "imagenes/v50.png",
        desc: `El nacimiento del lenguaje visual Material Design.
        * **Material Design:** Animaciones fluidas, capas y sombras realistas.
        * **Motor ART:** Nuevo motor de ejecución mucho más rápido que Dalvik.
        * **Notificaciones:** Alertas interactivas en la pantalla de bloqueo.`
    },
    {
        id: "v6_0",
        name: "Android 6.0 Marshmallow",
        year: "2015",
        img: "imagenes/v60.png",
        desc: `Control total sobre la privacidad y la batería.
        * **Modo Doze:** Hibernación inteligente para ahorrar energía al estar quieto.
        * **Permisos:** Control granular para aceptar o denegar accesos a las apps.
        * **USB-C:** Soporte nativo para el nuevo estándar de carga rápida.`
    },
    {
        id: "v7_0",
        name: "Android 7.0 Nougat",
        year: "2016",
        img: "imagenes/v70.png",
        desc: `Productividad mejorada con multitarea real.
        * **Split Screen:** Uso de dos aplicaciones al mismo tiempo en pantalla.
        * **Vulkan API:** Gráficos 3D de alta gama para juegos móviles.
        * **Emojis:** Introducción de más de 1,500 iconos de expresión.`
    },
    {
        id: "v8_0",
        name: "Android 8.0 Oreo",
        year: "2017",
        img: "imagenes/v80.png",
        desc: `Modularidad para actualizaciones más rápidas.
        * **Project Treble:** Separación del sistema operativo del hardware.
        * **Picture-in-Picture:** Ver videos en miniatura sobre otras apps.
        * **Autocompletado:** Gestión nativa de contraseñas en formularios.`
    },
    {
        id: "v9_0",
        name: "Android 9 Pie",
        year: "2018",
        img: "imagenes/v90.png",
        desc: `La Inteligencia Artificial llega al núcleo del sistema.
        * **Batería Adaptativa:** Prioriza energía para las apps que más usas.
        * **Bienestar Digital:** Herramientas para controlar el tiempo en el móvil.
        * **Navegación:** Introducción de gestos para sustituir los botones.`
    },
    {
        id: "v10",
        name: "Android 10",
        year: "2019",
        img: "imagenes/v10.png",
        desc: `Foco total en la privacidad y modo oscuro.
        * **Dark Mode:** Tema negro puro para todo el sistema y aplicaciones.
        * **Privacidad:** Control estricto sobre el acceso a la ubicación.
        * **Live Caption:** Subtitulado automático de cualquier video en el móvil.`
    },
    {
        id: "v15",
        name: "Android 15",
        year: "2024",
        img: "imagenes/v15r.png",
        desc: `Seguridad moderna y hardware avanzado.
        * **Espacio Privado:** Bóveda oculta para aplicaciones bancarias o sensibles.
        * **Antirrobo IA:** Bloqueo automático si detecta un tirón de mano.
        * **Satélite:** Soporte nativo para mensajes de emergencia sin señal.`
    },
    {
        id: "v26",
        name: "Android 26",
        year: "Actualidad y Futuro:",
        img: "imagenes/v14.png",
        desc: `Futuro neural y computación invisible.
        * **Enlace Cerebral:** Interfaz pensamiento-móvil de baja latencia.
        * **Hologramas:** Proyección de la pantalla en el espacio físico.
        * **IA Autónoma:** Asistente con razonamiento propio independiente.`
    }
];