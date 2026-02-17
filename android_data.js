const androidData = [
    {
        id: "v1_5",
        name: "Android 1.5 Cupcake",
        year: "2009",
        img: "imagenes/v15.png",
        desc: `El inicio de la era táctil moderna y la personalización.
        * **Teclado Virtual:** Introdujo el teclado predictivo en pantalla, eliminando la necesidad de botones físicos.
        * **Widgets:** Permitió por primera vez que aplicaciones de terceros mostraran datos en vivo en el escritorio.
        * **Framework de Animación:** Se añadieron transiciones animadas al abrir y cerrar aplicaciones.`
    },
    {
        id: "v1_6",
        name: "Android 1.6 Donut",
        year: "2009",
        img: "imagenes/v16.png",
        desc: `La expansión hacia la diversidad de hardware.
        * **Soporte CDMA/EvDo:** Permitió que Android llegara a operadoras como Verizon y Sprint en EE.UU.
        * **Motor Text-to-Speech:** Introdujo la capacidad de que el teléfono "leyera" textos en voz alta.
        * **Búsqueda Rápida:** Una caja de búsqueda unificada que indexaba contactos, apps y el historial web.`
    },
    {
        id: "v2_0",
        name: "Android 2.0 Eclair",
        year: "2009",
        img: "imagenes/v20.png",
        desc: `Transformó el smartphone en una herramienta profesional.
        * **Google Maps Nav:** Lanzamiento de la navegación GPS gratuita con guía por voz giro a giro.
        * **Soporte Multi-touch:** Implementación nativa de gestos como el "pinch-to-zoom" en fotos y mapas.
        * **HTML5:** El navegador web comenzó a soportar video y etiquetas avanzadas del estándar moderno.`
    },
    {
        id: "v2_2",
        name: "Android 2.2 Froyo",
        year: "2010",
        img: "imagenes/v22.png",
        desc: `Optimización extrema para hardware limitado.
        * **Compilador JIT:** Mejoró la velocidad de ejecución de código hasta 5 veces mediante optimización en tiempo real.
        * **Tethering:** Introdujo la capacidad de compartir el plan de datos vía USB o Wi-Fi (Hotspot).
        * **Cloud to Device:** El inicio de las notificaciones push modernas para sincronizar datos desde la nube.`
    },
    {
        id: "v2_3",
        name: "Android 2.3 Gingerbread",
        year: "2010",
        img: "imagenes/v23.png",
        desc: `Refinamiento visual y enfoque en el gaming.
        * **Soporte NFC:** Permitió los primeros experimentos de pagos móviles y lectura de etiquetas inteligentes.
        * **Drivers de Video:** Se optimizaron las librerías gráficas para permitir juegos 3D más complejos.
        * **Gestión de Energía:** Se añadió un panel detallado para ver exactamente qué app drenaba la batería.`
    },
    {
        id: "v3_0",
        name: "Android 3.0 Honeycomb",
        year: "2011",
        img: "imagenes/v30.png",
        desc: `Diseño radicalmente futurista exclusivo para tablets.
        * **System Bar:** Introdujo la navegación por software (atrás, inicio, recientes) eliminando botones físicos.
        * **Aceleración por Hardware:** El sistema empezó a usar el procesador gráfico (GPU) para mover la interfaz.
        * **Cifrado de Datos:** Primera versión en ofrecer cifrado de disco completo para usuarios corporativos.`
    },
    {
        id: "v4_0",
        name: "Android 4.0 Ice Cream Sandwich",
        year: "2011",
        img: "imagenes/v40.png",
        desc: `La gran unificación estética de Google.
        * **Face Unlock:** Uso de reconocimiento facial básico para desbloqueo mediante la cámara frontal.
        * **Control de Datos:** Gráficos integrados para poner límites al consumo de datos móviles y evitar cobros extra.
        * **Beam:** Transferencia de archivos rápida entre teléfonos simplemente tocando sus espaldas (vía NFC).`
    },
    {
        id: "v4_1",
        name: "Android 4.1 Jelly Bean",
        year: "2012",
        img: "imagenes/v41.png",
        desc: `Prioridad absoluta a la experiencia de usuario.
        * **Project Butter:** Sincronización vertical (V-Sync) para que la interfaz se moviera a 60 FPS constantes.
        * **Google Now:** Un asistente que predecía tus necesidades mostrando tarjetas con el clima o tráfico.
        * **Notificaciones Expandibles:** Permitieron realizar acciones (como archivar correos) sin entrar a la app.`
    },
    {
        id: "v4_4",
        name: "Android 4.4 KitKat",
        year: "2013",
        img: "imagenes/v44.png",
        desc: `Eficiencia para el mercado global.
        * **Project Svelte:** Reducción drástica del uso de memoria, permitiendo que corriera en equipos con 512MB de RAM.
        * **Modo Inmersivo:** Las barras de navegación y estado se ocultaban para dar prioridad total al contenido.
        * **Smart Dialer:** El marcador de teléfono buscaba números de negocios cercanos automáticamente.`
    },
    {
        id: "v5_0",
        name: "Android 5.0 Lollipop",
        year: "2014",
        img: "imagenes/v50.png",
        desc: `Revolución visual y técnica de 64 bits.
        * **Material Design:** Un lenguaje visual basado en sombras, capas y colores vibrantes que simulaban papel.
        * **Runtime ART:** Se sustituyó Dalvik por ART, mejorando el rendimiento y la vida útil de la batería.
        * **Project Volta:** Un conjunto de herramientas para que los desarrolladores auditaran el gasto energético.`
    },
    {
        id: "v6_0",
        name: "Android 6.0 Marshmallow",
        year: "2015",
        img: "imagenes/v60.png",
        desc: `Seguridad y gestión inteligente de recursos.
        * **Doze Mode:** Sensores de movimiento detectaban cuando el móvil estaba quieto para suspender procesos.
        * **Permisos en Ejecución:** Las apps empezaron a pedir acceso a la cámara o contactos solo al usarlos.
        * **USB-C Nativo:** Soporte oficial para el conector reversible y carga rápida USB Power Delivery.`
    },
    {
        id: "v7_0",
        name: "Android 7.0 Nougat",
        year: "2016",
        img: "imagenes/v70.png",
        desc: `Productividad y gráficos de nueva generación.
        * **Multi-Window:** Soporte nativo para dividir la pantalla y usar dos apps activas simultáneamente.
        * **Vulkan:** Una API gráfica que permitía a los juegos acceder directamente al hardware para mejores visuales.
        * **Actualizaciones Directas:** El sistema se actualizaba en segundo plano sin interrumpir el uso del usuario.`
    },
    {
        id: "v8_0",
        name: "Android 8.0 Oreo",
        year: "2017",
        img: "imagenes/v80.png",
        desc: `Velocidad de arranque y modularidad.
        * **Project Treble:** Separación del código del sistema del código del fabricante para actualizaciones rápidas.
        * **Iconos Adaptativos:** Los iconos podían cambiar de forma (círculo, cuadrado, lágrima) según el lanzador.
        * **Autofill API:** El sistema empezó a recordar contraseñas para autocompletarlas en cualquier aplicación.`
    },
    {
        id: "v9_0",
        name: "Android 9 Pie",
        year: "2018",
        img: "imagenes/v90.png",
        desc: `La Inteligencia Artificial se vuelve el núcleo.
        * **Batería Adaptativa:** IA que detecta qué aplicaciones usas menos para "congelarlas" y ahorrar energía.
        * **Bienestar Digital:** Gráficos para monitorear el uso del móvil y poner temporizadores a apps adictivas.
        * **Brillo Adaptativo:** Aprendizaje automático sobre cómo ajustas el brillo según la luz ambiente.`
    },
    {
        id: "v10",
        name: "Android 10",
        year: "2019",
        img: "imagenes/v10.png",
        desc: `Foco extremo en privacidad y modo oscuro.
        * **Modo Oscuro Sistémico:** Implementación de un tema negro puro (OLED) que forzaba a las apps a oscurecerse.
        * **Gestos de Navegación:** Eliminación del botón "Atrás" por deslizamientos laterales desde el borde.
        * **Project Mainline:** Actualizaciones de seguridad críticas enviadas directamente a través de Google Play Store.`
    },
    {
        id: "v15",
        name: "Android 15",
        year: "2024",
        img: "imagenes/v15r.png",
        desc: `Seguridad proactiva y hardware avanzado.
        * **Espacio Privado:** Creación de un perfil de usuario aislado y oculto para apps bancarias o privadas.
        * **Detección de Robo:** Uso de acelerómetros e IA para bloquear el móvil si detecta un "tirón" violento de mano.
        * **Soporte de Pantalla Completa:** Las apps ahora dibujan obligatoriamente debajo de las barras de sistema.`
    },
    {
        id: "v26",
        name: "Android 26",
        year: "2035",
        img: "imagenes/v14.png",
        desc: `La era de la computación invisible y neural.
        * **Enlace Neural Pro:** Sincronización de notificaciones directamente con estímulos sensoriales.
        * **IA Autónoma:** Tu asistente puede realizar compras, trámites y llamadas complejas con tu voz autorizada.
        * **Cifrado Post-Cuántico:** Seguridad invulnerable ante la capacidad de cómputo de las futuras supercomputadoras.`
    }
];