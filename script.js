const versions = [

{
 id: 'v20',
 year: '2009',
 name: 'Android 2.0 / 2.1 Eclair',
 img: 'v20.png',
 desc: `Eclair marcó el inicio del Android moderno. Introdujo Google Maps Navigation con GPS gratuito, soporte para múltiples cuentas de Google y Exchange, mejoras en Bluetooth 2.1, teclado mejorado y una cámara más avanzada con zoom digital y flash. También agregó fondos animados y mayor optimización del sistema.`
},

{
 id: 'v22',
 year: '2010',
 name: 'Android 2.2 Froyo',
 img: 'v22.png',
 desc: `Froyo se enfocó en el rendimiento con el compilador JIT, haciendo Android mucho más rápido. Introdujo hotspot Wi-Fi, soporte para Adobe Flash, instalación de apps en tarjeta SD y mejoras en Chrome V8 para navegación web más rápida.`
},

{
 id: 'v23',
 year: '2010',
 name: 'Android 2.3 Gingerbread',
 img: 'v23.png',
 desc: `Gingerbread optimizó la batería y el rendimiento. Añadió soporte NFC, sensores giroscópicos, cámaras frontales para videollamadas, un nuevo teclado más preciso y soporte para juegos con mejores gráficos. Fue muy popular en smartphones.`
},

{
 id: 'v30',
 year: '2011',
 name: 'Android 3.0 Honeycomb',
 img: 'v30.png',
 desc: `Diseñado exclusivamente para tablets. Introdujo una interfaz holográfica futurista, barra de navegación virtual, multitarea avanzada y soporte para procesadores multinúcleo. Sentó las bases del diseño moderno de Android.`
},

{
 id: 'v40',
 year: '2011',
 name: 'Android 4.0 Ice Cream Sandwich',
 img: 'v40.png',
 desc: `Unificó tablets y teléfonos con la interfaz Holo. Introdujo Face Unlock, Android Beam (NFC), multitarea con deslizamiento para cerrar apps y mejor integración con Google+. También mejoró la cámara y el navegador.`
},

{
 id: 'v41',
 year: '2012',
 name: 'Android 4.1–4.3 Jelly Bean',
 img: 'v41.png',
 desc: `Incluyó Project Butter para animaciones suaves, Google Now, notificaciones expandibles, soporte multiusuario en tablets y mejoras en accesibilidad. Hizo Android mucho más fluido.`
},

{
 id: 'v44',
 year: '2013',
 name: 'Android 4.4 KitKat',
 img: 'v44.png',
 desc: `Optimizado para dispositivos con solo 512 MB de RAM. Introdujo el modo inmersivo, OK Google sin tocar el dispositivo, impresión inalámbrica, y mejoras en almacenamiento. Fue clave para Android barato.`
},

{
 id: 'v50',
 year: '2014',
 name: 'Android 5.0 Lollipop',
 img: 'v50.png',
 desc: `Presentó Material Design, una nueva estética moderna. Cambió Dalvik por ART para mejor rendimiento, agregó notificaciones en pantalla de bloqueo, Project Volta para batería y soporte para dispositivos 64-bit.`
},

{
 id: 'v60',
 year: '2015',
 name: 'Android 6.0 Marshmallow',
 img: 'v60.png',
 desc: `Introdujo permisos por aplicación, modo Doze para ahorro de batería, Google Now on Tap, soporte nativo de huellas dactilares y USB-C. Mejoró mucho la privacidad y eficiencia.`
},

{
 id: 'v70',
 year: '2016',
 name: 'Android 7.0 Nougat',
 img: 'v70.png',
 desc: `Añadió pantalla dividida, respuestas rápidas en notificaciones, Vulkan API para juegos, Data Saver, y actualizaciones sin reiniciar (A/B Seamless Updates). Mejoró la multitarea.`
},

{
 id: 'v80',
 year: '2017',
 name: 'Android 8.0 Oreo',
 img: 'v80.png',
 desc: `Incluyó Picture-in-Picture, puntos de notificación, Project Treble para actualizaciones más rápidas, autofill API, límites de apps en segundo plano y arranque más rápido del sistema.`
},

{
 id: 'v90',
 year: '2018',
 name: 'Android 9 Pie',
 img: 'v90.png',
 desc: `Introdujo navegación por gestos, batería adaptativa con IA, brillo adaptativo, bienestar digital, y restricciones a apps en segundo plano para mejorar rendimiento y privacidad.`
},

{
 id: 'v10',
 year: '2019',
 name: 'Android 10',
 img: 'v10.png',
 desc: `Primera versión sin nombre de postre. Añadió modo oscuro nativo, gestos completos, controles de privacidad avanzados, grabación de pantalla y soporte para pantallas plegables.`
},

{
 id: 'v11',
 year: '2020',
 name: 'Android 11',
 img: 'v11.png',
 desc: `Enfocado en comunicación. Añadió burbujas de chat, grabación de pantalla integrada, permisos temporales, controles de hogar inteligente y mejoras en multimedia.`
},

{
 id: 'v12',
 year: '2021',
 name: 'Android 12',
 img: 'v12.png',
 desc: `Gran rediseño Material You con colores dinámicos. Añadió panel de privacidad, indicadores de cámara/micrófono, mejoras en rendimiento y nuevas animaciones del sistema.`
},

{
 id: 'v13',
 year: '2022',
 name: 'Android 13',
 img: 'v13.png',
 desc: `Refinó Material You, permisos de notificaciones, selector de idioma por app, Bluetooth LE Audio, mejoras en tablets y privacidad avanzada.`
},

{
 id: 'v14',
 year: '2023',
 name: 'Android 14',
 img: 'v14.png',
 desc: `Mejor eficiencia energética, bloqueo de apps antiguas inseguras, personalización avanzada de pantalla de bloqueo, mejoras en accesibilidad y rendimiento en pantallas grandes.`
},

{
 id: 'v15',
 year: '2024',
 name: 'Android 15',
 img: 'v15.png',
 desc: `Introdujo Espacio Privado protegido por biometría, detección de robo con IA, mejoras en multitarea, conectividad satelital y optimización para tablets y plegables.`
}

];

const container = document.getElementById("timeline-content");

versions.forEach(v => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.onclick = () => openModal(v.id);

    item.innerHTML = `
        <div class="icon-box">
            <img src="${v.img}" alt="${v.name}">
        </div>
        <div class="dot"></div>
        <div class="year">${v.year}</div>
    `;

    container.appendChild(item);
});

function openModal(id){
    const data = versions.find(v => v.id === id);
    document.getElementById("modal-content").innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.desc}</p>
    `;
    document.getElementById("overlay").style.display = "flex";
}

function closeModal(){
    document.getElementById("overlay").style.display = "none";
}
