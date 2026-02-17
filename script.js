const versions = [
    {
        id: "android1_5",
        name: "Android 1.5 Cupcake",
        year: "2009",
        img: "imagenes/v15.png", // Corregido a v15 según tu carpeta
        desc: `
        **El inicio de la tradición.** Cupcake fue la primera versión con nombre de postre, marcando un hito en la identidad de Google. 
        
        **Mejoras clave:**
        * **Teclado Virtual:** Introdujo el primer teclado en pantalla para dispositivos sin teclas físicas.
        * **Widgets:** Permitió colocar herramientas interactivas en el escritorio.
        * **YouTube:** Integró la opción de subir videos directamente desde el móvil.
        * **Copiar y Pegar:** Se añadió esta función esencial en el navegador web.
        `
    },
    {
        id: "android1_6",
        name: "Android 1.6 Donut",
        year: "2009",
        img: "imagenes/v16.png", // Corregido a v16
        desc: `
        **Búsqueda universal.** Donut hizo que encontrar contenido fuera mucho más fácil y rápido.
        
        **Mejoras clave:**
        * **Cuadro de búsqueda:** Permitió buscar en la web y en el teléfono simultáneamente.
        * **Soporte de pantalla:** Android empezó a adaptarse a diferentes tamaños y resoluciones.
        * **Galería mejorada:** Se rediseñó la interfaz para ver fotos y videos.
        * **Motor de voz:** Introdujo la síntesis de voz (Text-to-speech).
        `
    },
    {
        id: "android2_0",
        name: "Android 2.0 Eclair",
        year: "2009",
        img: "imagenes/v20.png", // Corregido a v20
        desc: `
        **Navegación inteligente.** Esta versión trajo el GPS gratuito a las masas a través de Google Maps.
        
        **Mejoras clave:**
        * **Google Maps Navigation:** Navegación paso a paso con guía de voz gratuita.
        * **Multicuenta:** Soporte para varias cuentas de Google en un solo equipo.
        * **Bluetooth 2.1:** Mejoras significativas en la transferencia de datos inalámbrica.
        * **Cámara:** Soporte para flash, zoom digital y efectos de color.
        `
    },
    {
        id: "android2_2",
        name: "Android 2.2 Froyo",
        year: "2010",
        img: "imagenes/v22.png", // Corregido a v22
        desc: `
        **Velocidad máxima.** Froyo se centró en optimizar el rendimiento del procesador.
        
        **Mejoras clave:**
        * **Hotspot Wi-Fi:** Permitió compartir el internet del celular con otros equipos.
        * **Compilador JIT:** Hizo que las aplicaciones fueran hasta 5 veces más rápidas.
        * **Adobe Flash:** Soporte para ver videos y juegos flash en el navegador.
        * **Notificaciones Push:** Permitió a las apps enviar alertas en tiempo real.
        `
    },
    {
        id: "android2_3",
        name: "Android 2.3 Gingerbread",
        year: "2010",
        img: "imagenes/v23.png", // Corregido a v23
        desc: `
        **Dominio del mercado.** Gingerbread fue la versión más utilizada durante años debido a su estabilidad.
        
        **Mejoras clave:**
        * **Soporte NFC:** Introdujo la tecnología para futuros pagos sin contacto.
        * **Sensor de Giroscopio:** Mejoró drásticamente la experiencia en juegos.
        * **Gestión de Energía:** Un menú detallado para ver qué app gastaba más batería.
        * **Cámara Frontal:** Soporte nativo para videollamadas.
        `
    },
    {
        id: "android3_0",
        name: "Android 3.0 Honeycomb",
        year: "2011",
        img: "imagenes/v30.png", // Corregido a v30
        desc: `
        **Pensado para Tablets.** Una versión exclusiva para pantallas grandes con diseño futurista.
        
        **Mejoras clave:**
        * **Interfaz Holo:** Un diseño azul neón que eliminó los botones físicos por virtuales.
        * **Multitarea Visual:** Una lista con miniaturas de las apps abiertas recientemente.
        * **Barra de Acción:** Menús contextuales dentro de las aplicaciones.
        * **Aceleración por Hardware:** Gráficos mucho más fluidos.
        `
    },
    {
        id: "android4_0",
        name: "Android 4.0 Ice Cream Sandwich",
        year: "2011",
        img: "imagenes/v40.png", // Corregido a v40
        desc: `
        **La Gran Unificación.** Juntó el sistema de tablets y teléfonos en uno solo.
        
        **Mejoras clave:**
        * **Face Unlock:** Desbloqueo mediante reconocimiento facial por primera vez.
        * **Carpetas:** Organización de apps arrastrando iconos unos sobre otros.
        * **Uso de Datos:** Herramienta nativa para limitar el consumo de internet.
        * **Roboto:** Introducción de la nueva fuente tipográfica oficial.
        `
    },
    {
        id: "android4_1",
        name: "Android 4.1 Jelly Bean",
        year: "2012",
        img: "imagenes/v41.png", // Corregido a v41
        desc: `
        **Project Butter.** El objetivo principal fue eliminar el "lag" de la interfaz.
        
        **Mejoras clave:**
        * **60 FPS:** Una interfaz extremadamente suave y fluida al tacto.
        * **Google Now:** Tarjetas inteligentes con información predictiva (clima, tráfico).
        * **Notificaciones Expandibles:** Interactuar con alertas sin abrir la app.
        * **Dictado por voz offline:** Reconocimiento de voz sin necesidad de internet.
        `
    },
    {
        id: "android4_4",
        name: "Android 4.4 KitKat",
        year: "2013",
        img: "imagenes/v44.png", // Corregido a v44
        desc: `
        **Eficiencia total.** Diseñado para funcionar incluso en equipos muy básicos.
        
        **Mejoras clave:**
        * **Modo Inmersivo:** Las barras de sistema se ocultan para dar más espacio a las apps.
        * **OK Google:** Activación por voz desde la pantalla de inicio.
        * **Project Svelte:** Optimización del sistema para usar solo 512MB de RAM.
        * **Cloud Printing:** Soporte nativo para imprimir documentos por Wi-Fi.
        `
    },
    {
        id: "android5_0",
        name: "Android 5.0 Lollipop",
        year: "2014",
        img: "imagenes/v50.png", // Corregido a v50
        desc: `
        **Material Design.** El cambio estético más importante con sombras y capas físicas.
        
        **Mejoras clave:**
        * **Diseño Plano:** Colores vivos y animaciones basadas en la física.
        * **Notificaciones en Bloqueo:** Ver alertas sin desbloquear el equipo.
        * **ART Runtime:** Reemplazó a Dalvik para abrir apps mucho más rápido.
        * **Multiusuario:** Permitió crear perfiles para diferentes personas en un teléfono.
        `
    },
    {
        id: "android6_0",
        name: "Android 6.0 Marshmallow",
        year: "2015",
        img: "imagenes/v60.png", // Corregido a v60
        desc: `
        **Control de Privacidad.** Se enfocó en dar más poder al usuario sobre sus datos.
        
        **Mejoras clave:**
        * **Permisos Individuales:** Elegir qué puede usar cada app (cámara, micro, etc.).
        * **Modo Doze:** Ahorro de batería extremo cuando el móvil está quieto.
        * **Lector de Huellas:** Soporte oficial para seguridad biométrica.
        * **USB-C:** Soporte nativo para el nuevo estándar de carga rápida.
        `
    },
    {
        id: "android7_0",
        name: "Android 7.0 Nougat",
        year: "2016",
        img: "imagenes/v70.png", // Corregido a v70
        desc: `
        **Productividad Elevada.** Introdujo funciones para hacer más en menos tiempo.
        
        **Mejoras clave:**
        * **Pantalla Dividida:** Usar dos aplicaciones al mismo tiempo en pantalla.
        * **Vulkan:** Gráficos 3D de alta calidad para juegos pesados.
        * **Respuesta Rápida:** Escribir en chats directamente desde la notificación.
        * **Daydream:** Soporte nativo para Realidad Virtual.
        `
    },
    {
        id: "android8_0",
        name: "Android 8.0 Oreo",
        year: "2017",
        img: "imagenes/v80.png", // Corregido a v80
        desc: `
        **Experiencia Fluida.** Se centró en la multitarea y la facilidad de uso.
        
        **Mejoras clave:**
        * **Picture-in-Picture:** Ver videos en una ventanita mientras haces otra cosa.
        * **Project Treble:** Cambió la estructura de Android para actualizaciones más rápidas.
        * **Autocompletar:** El sistema recuerda contraseñas de apps automáticamente.
        * **Iconos Adaptativos:** Iconos que cambian de forma según el tema.
        `
    },
    {
        id: "android9_0",
        name: "Android 9 Pie",
        year: "2018",
        img: "imagenes/v90.png", // Corregido a v90
        desc: `
        **Inteligencia Artificial.** El sistema empezó a aprender de tus hábitos.
        
        **Mejoras clave:**
        * **Batería Adaptativa:** Prioriza la energía para las apps que más usas.
        * **Navegación por gestos:** Introdujo la barra horizontal para navegar.
        * **Bienestar Digital:** Herramientas para controlar el tiempo que pasas al celular.
        * **Brillo Inteligente:** Ajusta la luz de la pantalla según tus gustos personales.
        `
    },
    {
        id: "android10",
        name: "Android 10",
        year: "2019",
        img: "imagenes/v10.png", // Corregido a v10
        desc: `
        **Privacidad y Oscuridad.** Eliminó los nombres de postres y trajo el modo oscuro.
        
        **Mejoras clave:**
        * **Modo Oscuro:** Tema negro para todo el sistema y aplicaciones.
        * **Privacidad de Ubicación:** Controlar si una app te rastrea "solo si está abierta".
        * **Live Caption:** Genera subtítulos automáticos para cualquier video o audio.
        * **Soporte Plegable:** Adaptación para los nuevos teléfonos que se doblan.
        `
    },
    {
        id: "android11",
        name: "Android 11",
        year: "2020",
        img: "imagenes/v11.png", // Corregido a v11
        desc: `
        **Comunicación primero.** Organizó todas las charlas en un solo lugar.
        
        **Mejoras clave:**
        * **Burbujas de Chat:** Conversaciones flotantes sobre cualquier aplicación.
        * **Grabación de Pantalla:** Herramienta nativa para grabar video del celular.
        * **Control de Hogar:** Acceso rápido a luces y dispositivos inteligentes.
        * **Permisos Temporales:** Dar permiso a una app "solo por esta vez".
        `
    },
    {
        id: "android12",
        name: "Android 12",
        year: "2021",
        img: "imagenes/v12.png", // Corregido a v12
        desc: `
        **Material You.** El sistema cambia de color según tu fondo de pantalla.
        
        **Mejoras clave:**
        * **Personalización dinámica:** Colores automáticos en todo el sistema.
        * **Panel de Privacidad:** Historial de qué apps usaron tu cámara o micro.
        * **Indicadores:** Un punto verde avisa si la cámara está encendida.
        * **Captura de Scroll:** Tomar fotos de páginas web completas hacia abajo.
        `
    },
    {
        id: "android13",
        name: "Android 13",
        year: "2022",
        img: "imagenes/v13.png", // Corregido a v13
        desc: `
        **Refinamiento y Seguridad.** Mejoras en la privacidad de las fotos y el audio.
        
        **Mejoras clave:**
        * **Idiomas por app:** Poner Facebook en inglés y el sistema en español.
        * **Bluetooth LE Audio:** Audio de alta calidad con muy bajo consumo.
        * **Selector de Fotos:** Compartir fotos específicas sin dar acceso a toda la galería.
        * **Permiso de Notificación:** Las apps deben preguntar antes de enviarte alertas.
        `
    },
    {
        id: "android14",
        name: "Android 14",
        year: "2023",
        img: "imagenes/v14.png", // Corregido a v14
        desc: `
        **Eficiencia y Accesibilidad.** Enfocado en mejorar la vida útil de la batería.
        
        **Mejoras clave:**
        * **Ultra HDR:** Fotos con colores mucho más reales y brillantes.
        * **Fuentes Gigantes:** Mejor escalado de texto para personas con problemas visuales.
        * **Health Connect:** Gestión unificada de datos de salud y ejercicio.
        * **Batería Optimizada:** Mejor gestión de procesos en segundo plano.
        `
    },
    {
        id: "android15",
        name: "Android 15",
        year: "2025",
        img: "imagenes/v15r.png", // Corregido a v15r según tu carpeta
        desc: `
        **Seguridad Inteligente.** La versión más avanzada con protección contra robos.
        
        **Mejoras clave:**
        * **Espacio Privado:** Una zona oculta para apps bancarias o personales.
        * **Bloqueo por Robo:** La IA detecta si alguien te arrebata el móvil y lo bloquea.
        * **Conexión Satelital:** Mensajes de emergencia sin señal celular.
        * **IA Integrada:** Mejoras drásticas en el asistente Gemini nativo.
        `
    }
];

// ===== RENDERIZADO =====
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

// ===== MODAL =====
function openModal(id) {
    const v = versions.find(x => x.id === id);

    // Formatear texto para el modal (convierte * en <li>)
    const formattedDesc = v.desc
        .replace(/\n/g, '<br>')
        .replace(/\* \*\*(.*?)\*\*/g, '<li><strong>$1</strong>')
        .replace(/\*\*/g, '');

    document.getElementById("modal-title").innerText = v.name;
    document.getElementById("modal-content").innerHTML = `
        <img src="${v.img}" style="width: 80px; display: block; margin: 0 auto 20px;">
        <div style="text-align: left; font-family: sans-serif; line-height: 1.6;">
            ${formattedDesc}
        </div>
    `;

    document.getElementById("overlay").style.display = "flex";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
}

// Cerrar al hacer clic fuera del modal
window.onclick = function(event) {
    const overlay = document.getElementById("overlay");
    if (event.target == overlay) {
        closeModal();
    }
}