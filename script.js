const versions = [
    {
        id: "v1_5",
        name: "Android 1.5 Cupcake",
        year: "2009",
        img: "imagenes/v15.png",
        desc: `Lanzada en abril de 2009, fue la versión que definió la identidad de Android mediante nombres de postres.
        * **Teclado Virtual:** Permitió el diseño de teléfonos modernos sin necesidad de teclados físicos deslizantes.
        * **Widgets:** Introdujo la capacidad de personalizar el escritorio con mini-aplicaciones interactivas.
        * **YouTube:** Primera integración profunda para subir videos directamente desde la cámara del móvil.`
    },
    {
        id: "v1_6",
        name: "Android 1.6 Donut",
        year: "2009",
        img: "imagenes/v16.png",
        desc: `Una actualización crítica que permitió a Android adaptarse a la explosión de nuevos dispositivos en el mercado.
        * **Resoluciones:** Introdujo el soporte para diversas densidades de pantalla, permitiendo teléfonos de todos los tamaños.
        * **Búsqueda Universal:** Unificó la búsqueda de contactos, archivos locales y resultados de la web en una sola barra.
        * **Síntesis de Voz:** Añadio el motor multilingüe "Text-to-Speech" para que las aplicaciones pudieran hablar.`
    },
    {
        id: "v2_0",
        name: "Android 2.0 Eclair",
        year: "2009",
        img: "imagenes/v20.png",
        desc: `Marcó la madurez del sistema y el inicio de la competencia real contra otros sistemas operativos móviles.
        * **Google Maps:** Debutó la navegación GPS gratuita giro a giro con mapas en 3D y capas de tráfico.
        * **Cuentas Múltiples:** Permitió sincronizar varias cuentas de Google y de empresa (Exchange) simultáneamente.
        * **Cámara:** Añadió por primera vez soporte nativo para flash, zoom digital y efectos de color.`
    },
    {
        id: "v2_2",
        name: "Android 2.2 Froyo",
        year: "2010",
        img: "imagenes/v22.png",
        desc: `Enfocada en la velocidad extrema, Froyo convirtió a los smartphones en herramientas de productividad potentes.
        * **Rendimiento JIT:** Optimizó el procesador para que las aplicaciones funcionaran hasta 5 veces más rápido.
        * **Hotspot:** Introdujo la función nativa para compartir el internet móvil mediante Wi-Fi con otros equipos.
        * **Navegador:** Mejoró drásticamente el soporte para JavaScript y permitió el uso de Adobe Flash.`
    },
    {
        id: "v2_3",
        name: "Android 2.3 Gingerbread",
        year: "2010",
        img: "imagenes/v23.png",
        desc: `Es una de las versiones más icónicas, diseñada para mejorar la experiencia de usuario y la eficiencia energética.
        * **NFC:** Introdujo la tecnología de corto alcance para futuros pagos móviles y transferencia de datos.
        * **Gaming:** Añadió controladores de bajo nivel para que los juegos tuvieran mejores gráficos y menor latencia.
        * **Gestión de Energía:** Rediseñó el panel de batería para dar control total sobre las apps que consumen recursos.`
    },
    {
        id: "v3_0",
        name: "Android 3.0 Honeycomb",
        year: "2011",
        img: "imagenes/v30.png",
        desc: `Un experimento audaz diseñado exclusivamente para el formato de tablets de pantalla grande.
        * **Interfaz Holo:** Introdujo una estética futurista "holográfica" y eliminó los botones físicos de navegación.
        * **Barra de Acción:** Permitió a los desarrolladores poner menús contextuales siempre visibles en la parte superior.
        * **Multitarea:** Rediseñó el panel de apps recientes con capturas de pantalla reales en lugar de solo iconos.`
    },
    {
        id: "v4_0",
        name: "Android 4.0 Ice Cream Sandwich",
        year: "2011",
        img: "imagenes/v40.png",
        desc: `Logró la hazaña de unificar el software de tablets y teléfonos en un sistema operativo coherente.
        * **Roboto:** Creó una nueva tipografía moderna diseñada específicamente para la lectura en pantallas HD.
        * **Control de Datos:** Añadió gráficos detallados para evitar que los usuarios excedieran sus planes de internet.
        * **Carpetas:** Introdujo la capacidad de agrupar aplicaciones simplemente arrastrando una sobre otra.`
    },
    {
        id: "v4_1",
        name: "Android 4.1 Jelly Bean",
        year: "2012",
        img: "imagenes/v41.png",
        desc: `Priorizó la suavidad visual y la inteligencia artificial para mejorar la respuesta al tacto del usuario.
        * **Project Butter:** Logró que la interfaz corriera a 60fps constantes, eliminando el "lag" al navegar.
        * **Google Now:** El antecesor de los asistentes modernos, capaz de mostrar información útil según tu ubicación.
        * **Notificaciones Expandibles:** Permitió ver fotos o responder mensajes directamente desde la barra de alertas.`
    },
    {
        id: "v4_4",
        name: "Android 4.4 KitKat",
        year: "2013",
        img: "imagenes/v44.png",
        desc: `Representó un esfuerzo de Google por llevar Android a los siguientes mil millones de usuarios.
        * **Project Svelte:** Optimizó el sistema para que funcionara fluido incluso en teléfonos con solo 512MB de RAM.
        * **Modo Inmersivo:** Permitió que las apps usaran cada píxel de la pantalla ocultando las barras del sistema.
        * **Búsqueda de Contactos:** Integró la búsqueda de Google en el marcador para encontrar números de negocios.`
    },
    {
        id: "v5_0",
        name: "Android 5.0 Lollipop",
        year: "2014",
        img: "imagenes/v50.png",
        desc: `Revolucionó la estética con Material Design, basándose en sombras y capas de "papel digital".
        * **Motor ART:** Reemplazó el antiguo motor Dalvik, logrando que las aplicaciones se abrieran mucho más rápido.
        * **Notificaciones Inteligentes:** Introdujo las alertas prioritarias que aparecen sobre las apps (Heads-up).
        * **Multi-usuario:** Permitió crear perfiles de invitados para prestar el teléfono con total seguridad.`
    },
    {
        id: "v6_0",
        name: "Android 6.0 Marshmallow",
        year: "2015",
        img: "imagenes/v60.png",
        desc: `Se centró en pulir la experiencia de Lollipop y dar más poder de decisión al usuario final.
        * **Permisos Granulares:** Las apps dejaron de pedir acceso total para pedir permisos solo cuando los necesitan.
        * **Doze:** Una función inteligente que "duerme" las apps en segundo plano para estirar la duración de la batería.
        * **USB-C:** Añadió soporte nativo para la carga rápida reversible y transferencia de archivos de alta velocidad.`
    },
    {
        id: "v7_0",
        name: "Android 7.0 Nougat",
        year: "2016",
        img: "imagenes/v70.png",
        desc: `Enfocada en la productividad multitarea y en mejorar el rendimiento gráfico para jugadores.
        * **Pantalla Dividida:** Introdujo el soporte oficial para usar dos aplicaciones de forma simultánea.
        * **Vulkan:** Una nueva tecnología gráfica que permite juegos más complejos con menor consumo de recursos.
        * **Cambio Rápido:** Permitió saltar entre las dos últimas apps abiertas con solo tocar dos veces el botón de recientes.`
    },
    {
        id: "v8_0",
        name: "Android 8.0 Oreo",
        year: "2017",
        img: "imagenes/v80.png",
        desc: `Mejoró los cimientos del sistema para facilitar las actualizaciones de los fabricantes.
        * **Project Treble:** El cambio técnico más grande para que los teléfonos se actualicen meses antes que antes.
        * **Picture-in-Picture:** Permitió seguir viendo un video de YouTube o Maps en una esquina mientras haces otra cosa.
        * **Autocompletado:** Integró gestores de contraseñas para iniciar sesión en apps con un solo toque.`
    },
    {
        id: "v9_0",
        name: "Android 9 Pie",
        year: "2018",
        img: "imagenes/v90.png",
        desc: `La Inteligencia Artificial se convirtió en el motor principal para personalizar la experiencia del usuario.
        * **Batería Adaptativa:** Aprende qué apps usas menos para limitar su consumo de energía de forma automática.
        * **Bienestar Digital:** Introdujo herramientas para ver cuánto tiempo pasas en el móvil y ponerte límites.
        * **Brillo Adaptativo:** Aprende tus preferencias de luz en diferentes lugares para no tener que ajustarlo a mano.`
    },
    {
        id: "v10",
        name: "Android 10",
        year: "2019",
        img: "imagenes/v10.png",
        desc: `Celebró el 10º aniversario eliminando los dulces y enfocándose en la privacidad y el minimalismo.
        * **Modo Oscuro:** Implementó un tema negro real en todo el sistema para ahorrar batería y cuidar la vista.
        * **Gestos de Navegación:** Eliminó los botones tradicionales por un sistema de deslizamientos laterales.
        * **Project Mainline:** Permitió que partes críticas de seguridad se actualicen directamente desde la Play Store.`
    },
    {
        id: "v11",
        name: "Android 11",
        year: "2020",
        img: "imagenes/v11.png",
        desc: `Lanzada para mejorar la forma en que nos comunicamos y controlamos nuestro entorno inteligente.
        * **Burbujas de Chat:** Permite mantener conversaciones flotantes sobre cualquier otra aplicación abierta.
        * **Control de Dispositivos:** Añadió un menú de acceso rápido para apagar luces o cámaras de casa.
        * **Permisos Únicos:** Introdujo la opción de dar permiso a la cámara o micro solo por una vez.`
    },
    {
        id: "v12",
        name: "Android 12",
        year: "2021",
        img: "imagenes/v12.png",
        desc: `Introdujo Material You, el cambio estético más personalizable de la historia del sistema.
        * **Temas Dinámicos:** Los colores de los menús y botones cambian automáticamente según tu fondo de pantalla.
        * **Panel de Privacidad:** Un historial que muestra exactamente qué apps usaron tus sensores en las últimas 24h.
        * **Indicadores:** Un punto verde en la esquina te avisa si una app está usando el micrófono o la cámara.`
    },
    {
        id: "v13",
        name: "Android 13",
        year: "2022",
        img: "imagenes/v13.png",
        desc: `Una versión de refinamiento que extendió la personalización a más partes del software.
        * **Idiomas por Aplicación:** Permitió configurar, por ejemplo, Instagram en inglés y el sistema en español.
        * **Audio Espacial:** Añadió soporte para sonido envolvente 360 grados en auriculares compatibles.
        * **Portapapeles:** Introdujo una ventana visual para editar textos copiados antes de pegarlos.`
    },
    {
        id: "v14",
        name: "Android 14",
        year: "2023",
        img: "imagenes/v14.png",
        desc: `Enfocada en mejorar la accesibilidad, la eficiencia y la seguridad de los datos personales.
        * **Ultra HDR:** Soporte para capturar y mostrar fotos con colores mucho más vibrantes y luces reales.
        * **Escalado de Texto:** Permitió aumentar el tamaño de la letra hasta un 200% sin romper el diseño de las apps.
        * **Salud:** Integró Health Connect para unificar los datos de pasos y sueño entre distintas aplicaciones.`
    },
    {
        id: "v15",
        name: "Android 15",
        year: "2025",
        img: "imagenes/v15r.png",
        desc: `La versión más inteligente hasta la fecha, con IA generativa integrada en el núcleo del sistema.
        * **Espacio Privado:** Crea un compartimento oculto y cifrado para aplicaciones bancarias o fotos sensibles.
        * **Protección Anti-Robo:** El móvil se bloquea solo si detecta que alguien te lo arrebata de la mano violentamente.
        * **Multitarea:** Mejoró drásticamente el uso de pantallas plegables y tablets con una nueva barra de tareas.`
    }
];

// Generar línea de tiempo
const timeline = document.getElementById("timeline-content");
versions.forEach(v => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.onclick = () => openModal(v.id);
    item.innerHTML = `
        <div class="icon-box"><img src="${v.img}" alt="${v.name}"></div>
        <div class="dot"></div>
        <div class="year">${v.year}</div>
    `;
    timeline.appendChild(item);
});

// Funciones del Modal
function openModal(id) {
    const v = versions.find(x => x.id === id);
    const formattedDesc = v.desc.replace(/\n/g, '<br>').replace(/\* \*\*(.*?)\*\*/g, '<li><strong>$1</strong>');
    
    document.getElementById("modal-title").innerText = v.name;
    document.getElementById("modal-content").innerHTML = `
        <img src="${v.img}" style="width:70px; display:block; margin:0 auto 10px;">
        <div style="font-size: 0.95rem;">${formattedDesc}</div>
    `;
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("modal-content").scrollTop = 0;
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
}

window.onclick = function(e) {
    if (e.target == document.getElementById("overlay")) closeModal();
};

// Base de datos de Android (Tu info reducida anterior)
const androidData = [
    { id: "v15", name: "Android 15", year: "2024", img: "imagenes/v15.png", desc: "Enfocado en la privacidad y eficiencia del sistema. * **Private Space:** Permite ocultar apps sensibles tras una capa extra. * **Detección de Robo:** Bloqueo inteligente si el teléfono es arrebatado. * **Mensajería Satelital:** Conexión de emergencia sin cobertura móvil." },
    { id: "v16", name: "Android 16", year: "2025", img: "imagenes/v16.png", desc: "Introducción de la IA generativa en el núcleo del sistema. * **IA Proactiva:** El asistente predice acciones según el contexto diario. * **Dashboard:** Nuevo panel de control de recursos más visual. * **Mejoras:** Mayor fluidez en dispositivos plegables." },
    { id: "v17", name: "Android 17", year: "2026", img: "imagenes/v12.png", desc: "Integración total con dispositivos vestibles y domótica. * **Conectividad:** Sincronización instantánea con cualquier gadget. * **Salud:** Sensores de monitoreo en tiempo real avanzados. * **Diseño:** Evolución de Material You con texturas táctiles." },
    { id: "v18", name: "Android 18", year: "2027", img: "imagenes/v13.png", desc: "Enfoque en la sostenibilidad y computación en la nube. * **Cloud OS:** Ejecución de procesos pesados en servidores remotos. * **Eco-Mode:** Reducción drástica del consumo energético. * **Privacidad:** Cifrado cuántico para todos los datos del usuario." },
    { id: "v26", name: "Android 26", year: "2035", img: "imagenes/v14.png", desc: "El futuro de la interacción humano-máquina. * **Interfaz Neural:** Soporte nativo para interfaces cerebro-computadora. * **Realidad:** Integración invisible con gafas de realidad aumentada. * **IA Sentiente:** Personalidad virtual altamente avanzada." }
];

// Base de datos de iOS (NUEVA)
const iosData = [
    { id: "ios15", name: "iOS 15", year: "2021", img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/IOS_15_logo.png", desc: "Mejoras en la conexión y enfoque personal. * **FaceTime:** Introducción de SharePlay y aislamiento de voz. * **Modos de Concentración:** Filtros de notificaciones según actividad. * **Live Text:** Reconocimiento de texto en fotos en tiempo real." },
    { id: "ios16", name: "iOS 16", year: "2022", img: "https://upload.wikimedia.org/wikipedia/commons/3/30/IOS_16_logo.png", desc: "Reinvención de la pantalla de bloqueo. * **Personalización:** Fondos de pantalla dinámicos y widgets en el bloqueo. * **Mensajes:** Capacidad de editar y cancelar envíos. * **Dictado:** Sistema híbrido voz-teclado simultáneo." },
    { id: "ios17", name: "iOS 17", year: "2023", img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/IOS_17_logo.svg", desc: "Mejoras en la comunicación básica del día a día. * **Contact Posters:** Pósters personalizados para llamadas. * **StandBy:** Nuevo modo para usar el iPhone como reloj de mesa. * **Check In:** Notificaciones automáticas de seguridad al llegar a casa." },
    { id: "ios18", name: "iOS 18", year: "2024", img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/IOS_18_logo.png", desc: "La era de Apple Intelligence. * **Apple Intelligence:** IA integrada para redacción y edición de fotos. * **Personalización:** Iconos con colores libres y centro de control rediseñado. * **Siri:** Interacciones más naturales y contextuales." },
    { id: "ios26", name: "iOS 26", year: "2032", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/IPhone_logo_2024.svg", desc: "Proyección futurista del ecosistema Apple. * **Vision OS Link:** Integración total con hardware de realidad espacial. * **Biometría:** Escaneo de salud preventivo en tiempo real. * **IA Autónoma:** Gestión inteligente total de la vida digital." }
];

let currentTimeline = 'android';

// Función para cambiar entre pestañas
function switchTimeline(type) {
    currentTimeline = type;
    
    // Actualizar visual de pestañas
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    // Cambiar Título
    document.getElementById('main-title').innerText = `LÍNEA DEL TIEMPO ${type.toUpperCase()}`;
    
    // Renderizar datos correspondientes
    renderTimeline(type === 'android' ? androidData : iosData);
}

// Función para renderizar la línea del tiempo
function renderTimeline(data) {
    const container = document.getElementById("timeline-content");
    container.innerHTML = ""; // Limpiar antes de llenar

    data.forEach(v => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        item.onclick = () => openModal(v, data);
        item.innerHTML = `
            <div class="icon-box"><img src="${v.img}" alt="${v.name}"></div>
            <div class="dot"></div>
            <div class="year">${v.year}</div>
        `;
        container.appendChild(item);
    });
}

// Función del Modal
function openModal(version, dataSet) {
    const formattedDesc = version.desc.replace(/\n/g, '<br>').replace(/\* \*\*(.*?)\*\*/g, '<li><strong>$1</strong>');
    
    document.getElementById("modal-title").innerText = version.name;
    document.getElementById("modal-content").innerHTML = `
        <img src="${version.img}" style="width:70px; display:block; margin:0 auto 10px;">
        <div style="font-size: 0.95rem;">${formattedDesc}</div>
    `;
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("modal-content").scrollTop = 0;
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
}

// Iniciar con Android
renderTimeline(androidData);