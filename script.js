const androidData = {
    'android1': {
        title: "Android 1.0 & 1.1",
        year: "2008",
        api: "API Level 1",
        features: "Introdujo Google Maps, Navegador, y el primer Market (ahora Play Store)."
    },
    'froyo': {
        title: "Android 2.2 Froyo",
        year: "2010",
        api: "API Level 8",
        features: "Soporte para Flash, Hotspot Wi-Fi y mejoras de velocidad notables (JIT)."
    },
    'kitkat': {
        title: "Android 4.4 KitKat",
        year: "2013",
        api: "API Level 19",
        features: "Diseño más limpio, comando 'Ok Google' y optimización para dispositivos con poca RAM."
    },
    'lollipop': {
        title: "Android 5.0 Lollipop",
        year: "2014",
        api: "API Level 21",
        features: "Introducción de Material Design, notificaciones en pantalla de bloqueo y arquitectura de 64 bits."
    }
};

function openModal(version) {
    const data = androidData[version];
    const modalBody = document.getElementById('modal-data');
    const overlay = document.getElementById('modal-overlay');

    modalBody.innerHTML = `
        <h2 style="color: #3ddc84">${data.title}</h2>
        <p><strong>Año:</strong> ${data.year}</p>
        <p><strong>Nivel de API:</strong> ${data.api}</p>
        <hr style="border: 0.5px solid #333">
        <p>${data.features}</p>
    `;

    overlay.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}