const versions = [
    { id: 'v1', year: '2008', name: 'Android 1.0', img: 'v1.png', desc: 'Lanzado con el HTC Dream, fue el inicio de todo. Introdujo la integración nativa con Gmail y Google Maps, además del Android Market original. Su sistema de notificaciones desplegable fue una innovación que definió la industria móvil. Aunque no permitía grabar video y era visualmente básico, demostró que un sistema abierto podía competir con el iPhone, sentando las bases de la personalización total.' },
    { id: 'v15', year: '2009', name: 'Cupcake', img: 'v15.png', desc: 'Introdujo el teclado virtual en pantalla, permitiendo smartphones sin botones físicos deslizantes. Fue la primera versión en usar nombres de postres y añadió los widgets, una función icónica de Android. También permitió por primera vez subir videos a YouTube directamente desde el teléfono. Esta versión pulió la experiencia de usuario y trajo las animaciones de transición que hicieron el sistema mucho más fluido.' },
    { id: 'v20', year: '2009', name: 'Eclair', img: 'v20.png', desc: 'Trajo la navegación GPS gratuita paso a paso a través de Google Maps, lo que cambió el mercado de los viajes. Añadió soporte para fondos de pantalla animados y múltiples cuentas de correo en un solo dispositivo. La cámara recibió mejoras críticas como el soporte para flash digital y zoom. Fue el salto necesario para que Android fuera visto como una herramienta profesional poderosa y no solo un experimento de software.' },
    { id: 'v22', year: '2010', name: 'Froyo', img: 'v22.png', desc: 'Se centró en la velocidad pura gracias al compilador JIT, haciendo que el sistema fuera 5 veces más rápido que antes. Introdujo el Hotspot Wi-Fi para compartir datos y el soporte para Adobe Flash en el navegador. Las notificaciones push de Google permitieron que las apps se sincronizaran en tiempo real. Fue la versión que consolidó a Android como el sistema operativo más rápido y versátil del mercado mundial.' },
    { id: 'v23', year: '2010', name: 'Gingerbread', img: 'v23.png', desc: 'Rediseñó la interfaz con colores oscuros para optimizar las nuevas pantallas OLED y mejorar la duración de la batería. Introdujo el soporte para tecnología NFC y sensores como el giroscopio para juegos avanzados. También habilitó el soporte para múltiples cámaras, facilitando el inicio de la era de las selfies. Fue una versión extremadamente estable que muchos dispositivos usaron durante años por su gran eficiencia.' },
    { id: 'v40', year: '2011', name: 'Ice Cream Sandwich', img: 'v40.png', desc: 'Unificó el diseño de tablets y celulares bajo el estilo Holo y la elegante fuente Roboto. Introdujo botones virtuales en pantalla y el cierre de apps mediante deslizamiento lateral en la multitarea. Estrenó el desbloqueo facial y el uso de Android Beam para compartir archivos por contacto. Representó el mayor cambio estético en la historia de Android, haciendo que el sistema fuera visualmente hermoso y moderno.' },
    { id: 'v44', year: '2013', name: 'KitKat', img: 'v44.png', desc: 'Fue optimizado para funcionar en dispositivos con solo 512MB de RAM, llevando Android moderno a los celulares más económicos. Introdujo el comando "OK Google" y el modo inmersivo que ocultaba las barras para ver contenido a pantalla completa. Los contactos se organizaban de forma inteligente según con quién hablaras más. Fue una actualización clave para reducir la fragmentación y estandarizar la experiencia en todo el mundo.' },
    { id: 'v50', year: '2014', name: 'Lollipop', img: 'v50.png', desc: 'Marcó la llegada de Material Design, un sistema visual basado en sombras y capas de papel digital. Introdujo el motor ART para un rendimiento mucho más suave y el soporte nativo para arquitecturas de 64 bits. Las notificaciones aparecieron por primera vez en la pantalla de bloqueo y el Proyecto Volta mejoró la gestión de energía. Fue una renovación total que convirtió a Android en una plataforma visualmente coherente y vibrante.' },
    { id: 'v80', year: '2017', name: 'Oreo', img: 'v80.png', desc: 'Introdujo el modo Picture-in-Picture para ver videos mientras usas otras apps y los canales de notificación para un control granular. Estrenó Android Go para hardware limitado y los iconos adaptativos que cambian de forma según el fabricante. Se enfocó en la seguridad con Google Play Protect y un arranque el doble de rápido. Fue una versión de refinamiento que hizo al sistema mucho más inteligente, ordenado y seguro para el usuario.' },
    { id: 'v13', year: '2022', name: 'Android 13', img: 'v13.png', desc: 'Llevó la personalización de Material You al siguiente nivel, permitiendo que los iconos de terceros adopten el color del fondo de pantalla. Mejoró la privacidad permitiendo elegir qué fotos específicas compartir con cada app en lugar de toda la galería. Añadió soporte para audio Bluetooth LE de baja energía y una barra de tareas mejorada para tablets. Se centró en dar al usuario control total sobre sus datos y una estética impecable.' },
    { id: 'v15', year: '2024', name: 'Android 15', img: 'v15r.png', desc: 'Enfocado en la seguridad avanzada y la inteligencia artificial integrada en el núcleo del sistema. Introduce el "Espacio Privado" para esconder apps sensibles bajo biometría y mejoras en la conectividad satelital nativa. Optimiza la multitarea en dispositivos plegables y ofrece una gestión de batería ultra eficiente que aprende de tus hábitos. Es la culminación de años de evolución, priorizando la privacidad absoluta y el rendimiento en hardware moderno.' }
];

const container = document.getElementById('timeline-content');

// Crear los elementos en el HTML
versions.forEach(v => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.onclick = () => openModal(v.id);
    item.innerHTML = `
        <div class="icon-box"><img src="${v.img}" alt="${v.name}"></div>
        <div class="dot"></div>
        <div class="year">${v.year}</div>
    `;
    container.appendChild(item);
});

function openModal(id) {
    const data = versions.find(v => v.id === id);
    document.getElementById('modal-content').innerHTML = `
        <h2>${data.name} (${data.year})</h2>
        <p>${data.desc}</p>
    `;
    document.getElementById('overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('overlay').style.display = 'none';
}