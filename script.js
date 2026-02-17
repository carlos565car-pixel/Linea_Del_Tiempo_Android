const versions = [
    {
        id: "android15",
        name: "Android 1.5 Cupcake (2009)",
        year: "2009",
        img: "imagenes/v15.png",
        desc: `
        **El inicio de la era de los postres.** Cupcake fue la primera versión en utilizar un nombre en clave basado en dulces, una tradición que duraría una década. 
        
        **Mejoras clave:**
        * **Teclado Virtual:** Introdujo el primer teclado QWERTY en pantalla, permitiendo teléfonos sin teclados físicos.
        * **Widgets:** Permitió que desarrolladores externos crearan widgets para la pantalla de inicio.
        * **Multimedia:** Se añadió la capacidad de grabar y reproducir videos en formato MPEG-4 y 3GP.
        * **Integración Web:** Permitió subir videos directamente a YouTube y fotos a Picasa.
        * **Interfaz:** Incluyó transiciones animadas entre pantallas y la función de autorrotación.
        `
    },
    {
        id: "android16",
        name: "Android 1.6 Donut (2009)",
        year: "2009",
        img: "imagenes/v16.png",
        desc: `
        **Expandiendo horizontes.** Donut fue fundamental porque permitió que Android se ejecutara en una variedad mucho mayor de hardware.
        
        **Mejoras clave:**
        * **Soporte de Pantalla:** Introdujo soporte para resoluciones WVGA, permitiendo pantallas más nítidas y de distintos tamaños.
        * **Quick Search Box:** Un cuadro de búsqueda global que permitía buscar contactos, apps y contenido en la web desde la pantalla de inicio.
        * **Android Market Renovado:** Se rediseñó la tienda de aplicaciones con un sistema de categorías y capturas de pantalla.
        * **Síntesis de voz:** Introdujo el motor 'Text-to-Speech' para que las aplicaciones pudieran "hablar".
        `
    },
    {
        id: "android20",
        name: "Android 2.0/2.1 Eclair (2009)",
        year: "2009",
        img: "imagenes/v20.png",
        desc: `
        **El salto a la madurez.** Lanzado con el icónico Motorola Droid, Eclair transformó a Android en un competidor serio para el iPhone.
        
        **Mejoras clave:**
        * **Google Maps Navigation:** Introdujo navegación GPS paso a paso gratuita con vistas 3D y guía de voz.
        * **Multicuenta:** Soporte nativo para varias cuentas de Google y Microsoft Exchange por primera vez.
        * **Cámara:** Se añadieron funciones de flash, zoom digital, modo de escena, balance de blancos y efectos de color.
        * **Fondos animados:** Introdujo los 'Live Wallpapers', permitiendo que el fondo de pantalla reaccionara al tacto.
        `
    },
    {
        id: "android22",
        name: "Android 2.2 Froyo (2010)",
        year: "2010",
        img: "imagenes/v22.png",
        desc: `
        **Velocidad pura.** 'Frozen Yogurt' se enfocó en optimizar el motor del sistema para hacerlo mucho más rápido que las versiones anteriores.
        
        **Mejoras clave:**
        * **Compilador JIT:** Mejoró la velocidad de procesamiento de las apps entre 2 y 5 veces.
        * **Wi-Fi Hotspot:** Permitió convertir el teléfono en un módem inalámbrico para compartir internet con otros dispositivos.
        * **Adobe Flash:** Soporte completo para contenido Flash en el navegador web.
        * **Actualización del Market:** Permitió las actualizaciones automáticas de aplicaciones.
        `
    },
    {
        id: "android23",
        name: "Android 2.3 Gingerbread (2010)",
        year: "2010",
        img: "imagenes/v23.png",
        desc: `
        **Refinamiento y Gaming.** Gingerbread es recordado por su estabilidad y por ser la versión que dominó el mercado durante años.
        
        **Mejoras clave:**
        * **Interfaz Oscura:** Se rediseñó la barra de estado y los menús con tonos negros y verdes para ahorrar batería.
        * **Soporte NFC:** Introdujo la tecnología de comunicación de campo cercano para futuros pagos móviles.
        * **Gestión de Batería:** Un nuevo administrador que mostraba exactamente qué app estaba consumiendo más energía.
        * **Cámara Frontal:** Soporte oficial para cámaras múltiples, impulsando las videollamadas.
        `
    },
    {
        id: "android30",
        name: "Android 3.0 Honeycomb (2011)",
        year: "2011",
        img: "imagenes/v30.png",
        desc: `
        **La era de las Tablets.** Fue una versión exclusiva para pantallas grandes, rompiendo con el diseño tradicional de los teléfonos.
        
        **Mejoras clave:**
        * **Interfaz Holográfica:** Un diseño futurista en azul neón llamado 'Holo'.
        * **Botones Virtuales:** Eliminó la necesidad de botones físicos (Atrás, Inicio, Menú) integrándolos en la pantalla.
        * **Barra de Acción:** Introdujo un menú superior dentro de las apps para controlar funciones comunes.
        * **Multitarea Visual:** Una lista con miniaturas de las aplicaciones abiertas recientemente.
        `
    },
    {
        id: "android40",
        name: "Android 4.0 Ice Cream Sandwich (2011)",
        year: "2011",
        img: "imagenes/v40.png",
        desc: `
        **La gran unificación.** Juntó lo mejor de los teléfonos y las tablets en un solo sistema operativo moderno y cohesivo.
        
        **Mejoras clave:**
        * **Tipografía Roboto:** Una nueva fuente diseñada específicamente para pantallas de alta resolución.
        * **Face Unlock:** El primer sistema nativo de reconocimiento facial para desbloquear el dispositivo.
        * **Control de Datos:** Herramientas integradas para poner límites al consumo de datos móviles.
        * **Carpetas:** La capacidad de arrastrar una app sobre otra para organizar el escritorio fácilmente.
        `
    },
    {
        id: "android41",
        name: "Android 4.1 Jelly Bean (2012)",
        year: "2012",
        img: "imagenes/v41.png",
        desc: `
        **Suavidad extrema.** Esta versión se centró en la respuesta táctil y la fluidez de la interfaz de usuario.
        
        **Mejoras clave:**
        * **Project Butter:** Una tecnología que sincronizaba los gráficos para eliminar el lag y hacer que el sistema corriera a 60 FPS.
        * **Google Now:** Un asistente que mostraba "tarjetas" con información relevante (clima, tráfico) antes de que la pidieras.
        * **Notificaciones Expandibles:** Podías ver fotos o responder mensajes directamente desde la barra de notificaciones sin abrir la app.
        `
    },
    {
        id: "android44",
        name: "Android 4.4 KitKat (2013)",
        year: "2013",
        img: "imagenes/v44.png",
        desc: `
        **Eficiencia para todos.** KitKat fue diseñado para ser tan ligero que pudiera correr en teléfonos de gama baja con solo 512 MB de RAM.
        
        **Mejoras clave:**
        * **Modo Inmersivo:** Las barras de navegación y estado se ocultaban automáticamente al leer o jugar.
        * **Project Svelte:** Reducción drástica del uso de memoria del sistema operativo.
        * **OK Google:** Activación del asistente de voz desde la pantalla de inicio por primera vez.
        * **Emojis:** Integración nativa de emojis coloridos en el teclado de Google.
        `
    },
    {
        id: "android50",
        name: "Android 5.0 Lollipop (2014)",
        year: "2014",
        img: "imagenes/v50.png",
        desc: `
        **Material Design.** Lollipop trajo el cambio visual más radical en la historia de Android, basado en sombras, capas y colores vibrantes.
        
        **Mejoras clave:**
        * **Runtime ART:** Reemplazó a Dalvik, permitiendo que las apps se abrieran mucho más rápido.
        * **Notificaciones en Bloqueo:** Las notificaciones aparecieron finalmente en la pantalla de bloqueo.
        * **Arquitectura de 64 bits:** Soporte para los procesadores móviles más potentes del momento.
        * **Smart Lock:** Desbloqueo automático cuando el teléfono está cerca de un dispositivo Bluetooth de confianza.
        `
    },
    {
        id: "android60",
        name: "Android 6.0 Marshmallow (2015)",
        year: "2015",
        img: "imagenes/v60.png",
        desc: `
        **Control y Seguridad.** Marshmallow no cambió mucho visualmente, pero mejoró profundamente el funcionamiento interno.
        
        **Mejoras clave:**
        * **Permisos Granulares:** Las apps empezaron a pedir permiso (cámara, micro) justo cuando necesitaban usarlo, no al instalarse.
        * **Modo Doze:** Hibernación profunda del teléfono cuando está en reposo para ahorrar batería significativamente.
        * **Google Now on Tap:** Buscaba información basada en lo que estabas viendo en pantalla en ese momento.
        * **USB-C:** Soporte nativo para carga rápida y transferencia de datos mediante el nuevo estándar.
        `
    },
    {
        id: "android70",
        name: "Android 7.0 Nougat (2016)",
        year: "2016",
        img: "imagenes/v70.png",
        desc: `
        **Productividad total.** Nougat se enfocó en permitir que los usuarios hicieran más cosas al mismo tiempo.
        
        **Mejoras clave:**
        * **Multi-ventana:** Soporte nativo para usar dos aplicaciones al mismo tiempo en pantalla dividida.
        * **Vulkan API:** Un nuevo motor gráfico que permitió juegos con calidad casi de consola.
        * **Actualizaciones en segundo plano:** El sistema podía descargar e instalar actualizaciones sin interrumpir al usuario.
        * **Respuesta Rápida:** Responder mensajes directamente desde la burbuja de notificación.
        `
    },
    {
        id: "android80",
        name: "Android 8.0 Oreo (2017)",
        year: "2017",
        img: "imagenes/v80.png",
        desc: `
        **Más inteligente y veloz.** Oreo optimizó los tiempos de carga y la gestión de procesos invisibles para el usuario.
        
        **Mejoras clave:**
        * **Picture-in-Picture (PiP):** Ver un video en una ventana flotante mientras usas otra aplicación.
        * **Puntos de Notificación:** Pequeños círculos sobre los iconos de las apps que indicaban notificaciones pendientes.
        * **Project Treble:** Una arquitectura nueva que permitía a los fabricantes actualizar Android mucho más rápido.
        * **Google Play Protect:** Escaneo de seguridad integrado para detectar apps maliciosas en tiempo real.
        `
    },
    {
        id: "android90",
        name: "Android 9 Pie (2018)",
        year: "2018",
        img: "imagenes/v90.png",
        desc: `
        **Inteligencia Artificial.** Pie utilizó el aprendizaje automático para adaptarse a la forma en que cada persona usa su teléfono.
        
        **Mejoras clave:**
        * **Batería Adaptativa:** Prioriza la energía para las apps que más usas y la quita de las que no.
        * **Navegación por Gestos:** Eliminó los tres botones clásicos por una "píldora" central táctil.
        * **Bienestar Digital:** Un panel para ver cuánto tiempo pasas en cada app y poner límites de uso.
        * **Brillo Adaptativo:** Ajusta el brillo basándose en tus preferencias personales y no solo en la luz ambiental.
        `
    },
    {
        id: "android10",
        name: "Android 10 (2019)",
        year: "2019",
        img: "imagenes/v10.png",
        desc: `
        **Adiós a los dulces.** Google decidió profesionalizar la marca usando solo números. Fue la versión que abrazó el cambio de forma de los teléfonos.
        
        **Mejoras clave:**
        * **Modo Oscuro Integral:** Un tema oscuro que afectaba a todo el sistema y a las aplicaciones compatibles.
        * **Nuevos Gestos:** Eliminación total de botones, usando deslizamientos desde los bordes para navegar.
        * **Live Caption:** Subtítulos generados por IA en tiempo real para cualquier video o audio que se reproduzca.
        * **Soporte Plegable:** Optimización para los primeros teléfonos con pantallas que se doblan.
        `
    },
    {
        id: "android11",
        name: "Android 11 (2020)",
        year: "2020",
        img: "imagenes/v11.png",
        desc: `
        **Centrado en las Personas.** Android 11 se enfocó en organizar las conversaciones y los dispositivos inteligentes.
        
        **Mejoras clave:**
        * **Burbujas de Chat:** Ventanas flotantes para conversaciones (estilo Messenger) para cualquier app de mensajería.
        * **Control de Dispositivos:** Un nuevo menú al mantener el botón de encendido para controlar luces y termostatos.
        * **Permisos Únicos:** Posibilidad de dar permiso a una app para usar el micro o cámara "solo esta vez".
        * **Grabación de Pantalla:** Por fin incluyó una herramienta nativa para grabar lo que pasa en el móvil con audio.
        `
    },
    {
        id: "android12",
        name: "Android 12 (2021)",
        year: "2021",
        img: "imagenes/v12.png",
        desc: `
        **Material You.** La mayor revolución de diseño desde Lollipop. El sistema ahora es capaz de extraer colores de tu fondo de pantalla.
        
        **Mejoras clave:**
        * **Personalización Dinámica:** Todo el sistema (botones, menús, widgets) cambia de color según tu wallpaper.
        * **Panel de Privacidad:** Un historial detallado de qué apps accedieron a tu ubicación o cámara en las últimas 24h.
        * **Indicadores de Privacidad:** Un punto verde en la esquina avisa si el micrófono o la cámara están activos.
        * **Scroll Screenshots:** Capturas de pantalla largas que permiten capturar toda una página web.
        `
    },
    {
        id: "android13",
        name: "Android 13 (2022)",
        year: "2022",
        img: "imagenes/v13.png",
        desc: `
        **Refinamiento y Audio.** No buscó cambiar el diseño, sino pulir la experiencia del usuario y la conectividad.
        
        **Mejoras clave:**
        * **Idiomas por App:** Configurar el sistema en español pero una app específica (como Twitter) en inglés.
        * **Bluetooth LE Audio:** Nuevo estándar para menor latencia y mayor calidad de sonido usando menos batería.
        * **Permisos de Notificaciones:** Las apps ya no pueden enviarte notificaciones por defecto, deben pedir permiso primero.
        * **Selector de Fotos:** Permite compartir solo fotos específicas con una app en lugar de darle acceso a toda tu galería.
        `
    },
    {
        id: "android14",
        name: "Android 14 (2023)",
        year: "2023",
        img: "imagenes/v14.png",
        desc: `
        **Eficiencia y Pantallas Grandes.** Enfocado en optimizar el rendimiento y la personalización de la pantalla de bloqueo.
        
        **Mejoras clave:**
        * **Personalización de Reloj:** Nuevos estilos de reloj y accesos directos personalizables en la pantalla de bloqueo.
        * **Ultra HDR:** Soporte para capturar y mostrar fotos con colores mucho más vibrantes y mayor rango dinámico.
        * **Health Connect:** Un centro integrado para gestionar todos los datos de salud de distintas apps de forma segura.
        * **Fuentes Grandes:** Mejor escalado de texto hasta un 200% para mejorar la accesibilidad.
        `
    },
    {
        id: "android15",
        name: "Android 15 (2024/2025)",
        year: "2025",
        img: "imagenes/v15r.png",
        desc: `
        **Seguridad y Productividad de Nueva Generación.** Se enfoca en la protección contra robos y la inteligencia artificial integrada.
        
        **Mejoras clave:**
        * **Espacio Privado:** Una caja fuerte digital para esconder apps sensibles (bancos, citas) que requiere autenticación extra.
        * **Detección de Robo:** Usa IA y sensores para detectar si alguien te arrebata el móvil y bloquearlo instantáneamente.
        * **Multitarea en Plegables:** Permite guardar combinaciones de apps en pantalla dividida para abrirlas con un toque.
        * **Mensajería Satelital:** Soporte nativo para enviar mensajes de emergencia sin cobertura celular.
        `
    }
];

// ===== RENDERIZADO DE LA LÍNEA DEL TIEMPO =====
const container = document.getElementById("timeline-content");

versions.forEach(v => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.onclick = () => openModal(v.id);

    item.innerHTML = `
        <div class="icon-box"><img src="${v.img}" alt="${v.name}"></div>
        <div class="dot"></div>
        <div class="year">${v.year}</div>
    `;

    container.appendChild(item);
});

// ===== FUNCIONES DEL MODAL =====
function openModal(id) {
    const v = versions.find(x => x.id === id);

    // Formatear el texto para convertir los puntos de viñeta en una lista HTML
    const formattedDesc = v.desc
        .replace(/\n/g, '<br>')
        .replace(/\* \*\*(.*?)\*\*/g, '<li><strong>$1</strong>')
        .replace(/\*\*/g, '');

    document.getElementById("modal-content").innerHTML = `
        <img src="${v.img}" style="width: 70px; margin-bottom: 10px;">
        <h2 style="color: #a4c639; margin-bottom: 5px;">${v.name}</h2>
        <div style="text-align: left; font-size: 0.95rem; color: #eee;">
            ${formattedDesc}
        </div>
    `;

    document.getElementById("overlay").style.display = "flex";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
}