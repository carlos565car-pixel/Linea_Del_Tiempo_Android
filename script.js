const androidDatabase = {
    'v1': {
        title: "Android 1.0 y 1.1 (2008–2009)",
        desc: "Android fue creado por Android Inc. y comprado por Google en 2005.",
        items: ["Integración con Google (Gmail, Maps)", "Navegador basado en WebKit", "Android Market original", "Notificaciones en barra superior"]
    },
    'v15': {
        title: "Android 1.5 Cupcake (2009)",
        desc: "Primera versión con nombre de postre.",
        items: ["Teclado virtual en pantalla", "Widgets en inicio", "Grabación de video", "Soporte Bluetooth"]
    },
    'v16': {
        title: "Android 1.6 Donut (2009)",
        desc: "Android empezó a adaptarse a muchos dispositivos.",
        items: ["Soporte para diferentes tamaños de pantalla", "Búsqueda rápida universal", "Mejor cámara y galería"]
    },
    'v20': {
        title: "Android 2.0–2.1 Eclair (2009)",
        desc: "Comienza la competencia real con el iPhone.",
        items: ["Google Maps con navegación GPS", "Fondos de pantalla animados", "Múltiples cuentas de Google"]
    },
    'v22': {
        title: "Android 2.2 Froyo (2010)",
        desc: "Un salto masivo en velocidad.",
        items: ["Hotspot Wi-Fi", "Rendimiento JIT más rápido", "Instalación de apps en tarjeta SD"]
    },
    'v23': {
        title: "Android 2.3 Gingerbread (2010)",
        desc: "Refinamiento para smartphones modernos.",
        items: ["Soporte para NFC", "Mejor gestión de batería", "Cámaras frontales"]
    },
    'v30': {
        title: "Android 3.0 Honeycomb (2011)",
        desc: "Versión exclusiva para tablets.",
        items: ["Interfaz holográfica", "Botones virtuales", "Multitarea avanzada"]
    },
    'v40': {
        title: "Android 4.0 Ice Cream Sandwich (2011)",
        desc: "Unificó teléfonos y tablets.",
        items: ["Face Unlock", "Diseño Holo y fuente Roboto", "Android Beam"]
    },
    'v41': {
        title: "Android 4.1 Jelly Bean (2012)",
        desc: "Project Butter: Fluidez total.",
        items: ["Google Now", "Animaciones a 60fps", "Notificaciones interactivas"]
    },
    'v44': {
        title: "Android 4.4 KitKat (2013)",
        desc: "Optimizado para celulares económicos.",
        items: ["Soporte para 512MB de RAM", "Modo inmersivo", "Comando Ok Google"]
    },
    'v50': {
        title: "Android 5.0 Lollipop (2014)",
        desc: "Introducción de Material Design.",
        items: ["Nuevo diseño visual", "Soporte 64 bits", "Project Volta para batería"]
    },
    'v60': {
        title: "Android 6.0 Marshmallow (2015)",
        desc: "Control total de la privacidad.",
        items: ["Permisos individuales de apps", "Modo Doze", "Soporte USB-C"]
    },
    'v70': {
        title: "Android 7.0 Nougat (2016)",
        desc: "Multitarea real.",
        items: ["Pantalla dividida", "Actualizaciones inteligentes", "Mejor VR"]
    },
    'v80': {
        title: "Android 8.0 Oreo (2017)",
        desc: "Rápido y ordenado.",
        items: ["Picture-in-Picture", "Canales de notificaciones", "Arranque más rápido"]
    },
    'v90': {
        title: "Android 9 Pie (2018)",
        desc: "Inteligencia Artificial aplicada.",
        items: ["Navegación por gestos", "Batería adaptativa", "Bienestar Digital"]
    },
    'v10': {
        title: "Android 10 (2019)",
        desc: "Privacidad y Modo Oscuro nativo.",
        items: ["Modo oscuro sistémico", "Soporte para plegables", "Subtítulos automáticos"]
    },
    'v11': {
        title: "Android 11 (2020)",
        desc: "Mejoras en mensajería.",
        items: ["Burbujas de chat", "Grabador de pantalla", "Permisos temporales"]
    },
    'v12': {
        title: "Android 12 (2021)",
        desc: "Material You: Colores dinámicos.",
        items: ["Rediseño completo", "Panel de privacidad", "Indicadores de cámara/micrófono"]
    },
    'v13': {
        title: "Android 13 (2022)",
        desc: "Personalización y privacidad.",
        items: ["Permiso para notificaciones", "Idiomas por app", "Mejor seguridad"]
    },
    'v14': {
        title: "Android 14 (2023)",
        desc: "Optimización y personalización.",
        items: ["Pantallas de bloqueo personalizadas", "Mejor eficiencia", "Accesibilidad mejorada"]
    },
    'v15_real': {
        title: "Android 15 (2024)",
        desc: "Sandbox y seguridad total.",
        items: ["Privacidad avanzada", "Rendimiento mejorado", "Multitarea avanzada"]
    },
    'v16_real': {
        title: "Android 16 (2025)",
        desc: "El futuro de la IA.",
        items: ["IA integrada profundamente", "Notificaciones dinámicas", "Soporte XR"]
    }
};

function openModal(id) {
    const data = androidDatabase[id];
    const container = document.getElementById('modal-content');
    
    let listHtml = data.items.map(i => `<li>${i}</li>`).join('');

    container.innerHTML = `
        <h2 style="color: var(--android-green);">${data.title}</h2>
        <p>${data.desc}</p>
        <hr style="border: 0.5px solid #444; margin: 20px 0;">
        <h4 style="margin-bottom: 10px;">🚀 Novedades importantes:</h4>
        <ul style="line-height: 1.8;">${listHtml}</ul>
    `;

    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}