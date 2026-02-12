const androidDatabase = {
    'v1': {
        title: "Android 1.0 y 1.1 (2008–2009)",
        desc: "Nacimiento del sistema operativo comprado por Google en 2005.",
        items: ["Integración con Gmail, Maps y Contactos", "Navegador basado en WebKit", "Android Market original", "Primer sistema de notificaciones"]
    },
    'v15': {
        title: "Android 1.5 Cupcake (2009)",
        desc: "Primera versión con nombre de postre e innovaciones clave.",
        items: ["Teclado virtual en pantalla", "Uso de Widgets", "Grabación de video", "Soporte Bluetooth estéreo"]
    },
    'v16': {
        title: "Android 1.6 Donut (2009)",
        desc: "Adaptación a múltiples dispositivos.",
        items: ["Soporte para varios tamaños de pantalla", "Búsqueda rápida universal", "Mejoras en cámara y galería"]
    },
    'v20': {
        title: "Android 2.0–2.1 Eclair (2009)",
        desc: "Comienza la competencia real con el iPhone.",
        items: ["Google Maps con navegación GPS", "Fondos de pantalla animados", "Múltiples cuentas de Google"]
    },
    'v22': {
        title: "Android 2.2 Froyo (2010)",
        desc: "Un salto masivo en velocidad.",
        items: ["Hotspot Wi-Fi (Tethering)", "Compilador JIT (más rápido)", "Instalación de apps en SD"]
    },
    'v23': {
        title: "Android 2.3 Gingerbread (2010)",
        desc: "Refinamiento para smartphones modernos.",
        items: ["Soporte oficial para NFC", "Gestión de batería mejorada", "Soporte para cámara frontal"]
    },
    'v30': {
        title: "Android 3.0 Honeycomb (2011)",
        desc: "Versión exclusiva para tablets.",
        items: ["Interfaz holográfica azul", "Botones virtuales en pantalla", "Multitarea avanzada para tablets"]
    },
    'v40': {
        title: "Android 4.0 Ice Cream Sandwich (2011)",
        desc: "La unificación de teléfonos y tablets.",
        items: ["Desbloqueo facial (Face Unlock)", "Diseño Holo y fuente Roboto", "Android Beam via NFC"]
    },
    'v41': {
        title: "Android 4.1–4.3 Jelly Bean (2012–2013)",
        desc: "Enfoque total en la fluidez del sistema.",
        items: ["Project Butter (60fps)", "Google Now", "Notificaciones interactivas"]
    },
    'v44': {
        title: "Android 4.4 KitKat (2013)",
        desc: "Optimización para todos.",
        items: ["Funciona con solo 512MB de RAM", "Modo inmersivo", "Comando 'Ok Google'"]
    },
    'v50': {
        title: "Android 5.0 Lollipop (2014)",
        desc: "La llegada de Material Design.",
        items: ["Nuevo lenguaje visual Material", "Arquitectura de 64 bits", "Notificaciones en pantalla de bloqueo"]
    },
    'v60': {
        title: "Android 6.0 Marshmallow (2015)",
        desc: "Seguridad y eficiencia.",
        items: ["Gestión individual de permisos", "Modo Doze para batería", "Soporte nativo para USB-C"]
    },
    'v70': {
        title: "Android 7.0 Nougat (2016)",
        desc: "Multitarea real.",
        items: ["Pantalla dividida", "Actualizaciones en segundo plano", "Soporte para Vulkan API"]
    },
    'v80': {
        title: "Android 8.0 Oreo (2017)",
        desc: "Orden y optimización.",
        items: ["Modo Picture-in-Picture", "Canales de notificación", "Google Play Protect"]
    },
    'v90': {
        title: "Android 9 Pie (2018)",
        desc: "La llegada de la Inteligencia Artificial.",
        items: ["Navegación por gestos", "Batería adaptativa por IA", "Bienestar Digital"]
    },
    'v10': {
        title: "Android 10 (2019)",
        desc: "Privacidad y Modo Oscuro.",
        items: ["Modo oscuro en todo el sistema", "Nuevos controles de ubicación", "Soporte para plegables"]
    },
    'v11': {
        title: "Android 11 (2020)",
        desc: "Mejor comunicación.",
        items: ["Burbujas de chat", "Grabación de pantalla integrada", "Control de dispositivos inteligentes"]
    },
    'v12': {
        title: "Android 12 (2021)",
        desc: "Material You.",
        items: ["Colores dinámicos basados en fondo", "Panel de privacidad", "Indicadores de cámara/micrófono"]
    },
    'v13': {
        title: "Android 13 (2022)",
        desc: "Personalización profunda.",
        items: ["Permiso para enviar notificaciones", "Idiomas distintos por app", "Audio espacial nativo"]
    },
    'v14': {
        title: "Android 14 (2023)",
        desc: "Eficiencia y accesibilidad.",
        items: ["Personalización de pantalla de bloqueo", "Mejoras de rendimiento", "Fuentes más grandes y legibles"]
    },
    'v15_real': {
        title: "Android 15 (2024)",
        desc: "Seguridad avanzada.",
        items: ["Sandbox para aplicaciones", "Multitarea profesional", "Privacidad de datos mejorada"]
    },
    'v16_real': {
        title: "Android 16 (2025)",
        desc: "El futuro inteligente.",
        items: ["IA integrada profundamente", "Notificaciones dinámicas", "Soporte XR y plegables"]
    }
};

function openModal(id) {
    const data = androidDatabase[id];
    const container = document.getElementById('modal-content');
    
    let listHtml = data.items.map(i => `<li>${i}</li>`).join('');

    container.innerHTML = `
        <h2 style="color: var(--android-green); font-size: 2rem;">${data.title}</h2>
        <p style="font-size: 1.1rem; margin: 15px 0;">${data.desc}</p>
        <hr style="border: 0.5px solid #444; margin: 20px 0;">
        <h3 style="margin-bottom: 10px;">🧠 Novedades:</h3>
        <ul style="line-height: 1.8; font-size: 1rem; padding-left: 20px;">${listHtml}</ul>
    `;

    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Cerrar modal con tecla Escape
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
});