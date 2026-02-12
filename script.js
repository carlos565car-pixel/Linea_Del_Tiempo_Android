const versions = [
    { id: 'v1', year: '2008', name: 'Android 1.0 Apple Pie', img: 'v1.png', desc: 'El inicio de la era Android. Lanzado con el HTC Dream, introdujo servicios vitales como Google Maps y Gmail. Sentó las bases de un sistema abierto y personalizable.' },
    { id: 'v15', year: '2009', name: 'Cupcake (1.5)', img: 'v15.png', desc: 'Introdujo el teclado virtual en pantalla y los widgets. Fue la primera versión en usar nombres de postres y permitió subir videos directamente a YouTube.' },
    { id: 'v16', year: '2009', name: 'Donut (1.6)', img: 'v16.png', desc: 'Añadió soporte para diversas resoluciones de pantalla y el cuadro de búsqueda rápida. Mejoró la velocidad de la cámara significativamente.' },
    { id: 'v20', year: '2009', name: 'Eclair (2.1)', img: 'v20.png', desc: 'Trajo la navegación GPS gratuita de Google Maps y soporte para fondos de pantalla animados. La cámara recibió flash digital y zoom.' },
    { id: 'v22', year: '2010', name: 'Froyo (2.2)', img: 'v22.png', desc: 'Se enfocó en la velocidad con el compilador JIT. Introdujo el Hotspot Wi-Fi y el soporte para Adobe Flash en el navegador web.' },
    { id: 'v23', year: '2010', name: 'Gingerbread (2.3)', img: 'v23.png', desc: 'Rediseñó la interfaz para ahorrar batería y añadió soporte para NFC. Habilitó el uso de cámaras frontales para selfies.' },
    { id: 'v30', year: '2011', name: 'Honeycomb (3.0)', img: 'v30.png', desc: 'Versión exclusiva para tablets con interfaz holográfica. Introdujo los botones virtuales que hoy son el estándar.' },
    { id: 'v40', year: '2011', name: 'Ice Cream Sandwich (4.0)', img: 'v40.png', desc: 'Unificó el diseño de tablets y móviles con el estilo Holo. Introdujo el desbloqueo facial y el cierre de apps deslizando.' },
    { id: 'v44', year: '2013', name: 'KitKat (4.4)', img: 'v44.png', desc: 'Optimizado para dispositivos con poca RAM. Introdujo el comando "OK Google" y el modo inmersivo para pantalla completa.' },
    { id: 'v50', year: '2014', name: 'Lollipop (5.0)', img: 'v50.png', desc: 'Llegada de Material Design. Cambió a ART para mejor rendimiento y añadió notificaciones en la pantalla de bloqueo.' },
    { id: 'v60', year: '2015', name: 'Marshmallow (6.0)', img: 'v60.png', desc: 'Introdujo permisos individuales de apps y el modo Doze para ahorrar batería. Añadió soporte nativo para lectores de huellas.' },
    { id: 'v70', year: '2016', name: 'Nougat (7.0)', img: 'v70.png', desc: 'Añadió el modo de pantalla dividida y respuestas rápidas desde notificaciones. Mejoró los gráficos con la API Vulkan.' },
    { id: 'v80', year: '2017', name: 'Oreo (8.0)', img: 'v80.png', desc: 'Introdujo el modo Picture-in-Picture y puntos de notificación. El sistema arrancaba el doble de rápido.' },
    { id: 'v90', year: '2018', name: 'Pie (9.0)', img: 'v90.png', desc: 'Introdujo la IA para batería adaptativa y navegación por gestos. Bienestar Digital debutó para controlar el tiempo de uso.' },
    { id: 'v10', year: '2019', name: 'Android 10', img: 'v10.png', desc: 'Primer versión sin nombre de postre público. Introdujo el Modo Oscuro nativo y mejoras profundas en privacidad.' },
    { id: 'v11', year: '2020', name: 'Android 11', img: 'v11.png', desc: 'Se centró en conversaciones con burbujas de chat y grabación de pantalla nativa. Añadió controles para hogar inteligente.' },
    { id: 'v12', year: '2021', name: 'Android 12', img: 'v12.png', desc: 'Revolución visual con Material You. El sistema cambia de color según tu fondo de pantalla y añade paneles de privacidad.' },
    { id: 'v13', year: '2022', name: 'Android 13', img: 'v13.png', desc: 'Refinó la personalización e introdujo permisos de notificaciones obligatorios. Permitió elegir idiomas por app.' },
    { id: 'v14', year: '2023', name: 'Android 14', img: 'v14.png', desc: 'Mejoró la eficiencia energética y personalización de pantalla de bloqueo. Bloqueó apps antiguas por seguridad.' },
    { id: 'v15r', year: '2024', name: 'Android 15', img: 'v15r.png', desc: 'Introdujo el Espacio Privado bajo biometría y detección de robo mediante IA. Optimizado para conectividad satelital.' }
];

const container = document.getElementById('timeline-content');

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
        <h2>${data.name}</h2>
        <p>${data.desc}</p>
    `;
    document.getElementById('overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('overlay').style.display = 'none';
}
