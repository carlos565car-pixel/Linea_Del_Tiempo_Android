const versions = [

/* ANDROID 1.X ERA */
{
id: 'v1',
year: '2008',
name: 'Android 1.0 Apple Pie',
img: 'v1.png',
desc: `
Android 1.0 fue la primera versión pública del sistema operativo Android, lanzada con el HTC Dream.
Incluía Google Maps, Gmail, Android Market (antecesor de Google Play) y un navegador web basado en WebKit.
Permitía sincronizar contactos, calendario y correo con Google, asi marcando el inicio del ecosistema Android.
`
},

{
id: 'v15',
year: '2009',
name: 'Android 1.5 Cupcake',
img: 'v15.png',
desc: `
Cupcake introdujo el teclado virtual en pantalla, los widgets en la pantalla de inicio y la grabación de video.
También añadió soporte para subir videos a YouTube y fotos a Picasa.
Fue la primera versión en usar nombres de postres en orden alfabético.
`
},

{
id: 'v16',
year: '2009',
name: 'Android 1.6 Donut',
img: 'v16.png',
desc: `
Donut mejoró la compatibilidad con diferentes resoluciones y tamaños de pantalla.
Introdujo búsqueda rápida universal y mejoras en la cámara.
También añadió soporte para redes CDMA y mejor rendimiento del sistema.
`
},

/* ANDROID 2.X ERA */
{
id: 'v20',
year: '2009',
name: 'Android 2.0/2.1 Eclair',
img: 'v20.png',
desc: `
Eclair introdujo Google Maps Navigation gratuito, fondos animados y soporte para múltiples cuentas.
La cámara recibió flash digital, zoom y efectos.
También añadió Bluetooth 2.1 y mejoras de rendimiento importantes.
`
},

{
id: 'v22',
year: '2010',
name: 'Android 2.2 Froyo',
img: 'v22.png',
desc: `
Froyo trajo grandes mejoras de velocidad con el compilador JIT.
Permitió usar el teléfono como hotspot WiFi y soportó Adobe Flash.
El sistema se volvió mucho más fluido y rápido.
`
},

{
id: 'v23',
year: '2010',
name: 'Android 2.3 Gingerbread',
img: 'v23.png',
desc: `
Gingerbread mejoró la batería y el rendimiento.
Introdujo soporte para NFC, cámaras frontales, sensores giroscópicos y mejores juegos.
También renovó la interfaz con colores oscuros para ahorrar energía.
`
},

/* ANDROID 3.X TABLET ERA */
{
id: 'v30',
year: '2011',
name: 'Android 3.0 Honeycomb',
img: 'v30.png',
desc: `
Honeycomb fue diseñado exclusivamente para tablets.
Introdujo la interfaz holográfica, botones virtuales en pantalla y multitarea avanzada.
Marcó el inicio del diseño moderno de Android.
`
},

/* ANDROID 4.X ERA */
{
id: 'v40',
year: '2011',
name: 'Android 4.0 Ice Cream Sandwich',
img: 'v40.png',
desc: `
Ice Cream Sandwich unificó Android para tablets y teléfonos.
Introdujo el diseño Holo, desbloqueo facial, control de datos y multitarea con gestos.
Fue una de las versiones más importantes del sistema.
`
},

{
id: 'v44',
year: '2013',
name: 'Android 4.4 KitKat',
img: 'v44.png',
desc: `
KitKat optimizó Android para dispositivos con poca RAM (512 MB).
Introdujo OK Google, modo inmersivo de pantalla completa y mejoras de rendimiento.
Permitió que Android dominara teléfonos de gama baja.
`
},

/* ANDROID 5.X ERA */
{
id: 'v50',
year: '2014',
name: 'Android 5.0 Lollipop',
img: 'v50.png',
desc: `
Lollipop introdujo Material Design, un diseño completamente nuevo.
Cambió Dalvik por ART para mejor rendimiento.
Añadió notificaciones en la pantalla de bloqueo y Project Volta para batería.
`
},

/* ANDROID 6.X ERA */
{
id: 'v60',
year: '2015',
name: 'Android 6.0 Marshmallow',
img: 'v60.png',
desc: `
Marshmallow introdujo permisos por aplicación, Google Now on Tap y el modo Doze.
Añadió soporte nativo para lectores de huellas digitales.
Mejoró mucho la seguridad y batería.
`
},

/* ANDROID 7.X ERA */
{
id: 'v70',
year: '2016',
name: 'Android 7.0 Nougat',
img: 'v70.png',
desc: `
Nougat añadió pantalla dividida, respuestas rápidas en notificaciones y Vulkan API para gráficos.
También introdujo actualizaciones sin reinicio (A/B Seamless Updates).
`
},

/* ANDROID 8.X ERA */
{
id: 'v80',
year: '2017',
name: 'Android 8.0 Oreo',
img: 'v80.png',
desc: `
Oreo introdujo Picture-in-Picture, canales de notificaciones y puntos de notificación.
Mejoró la velocidad de arranque y Project Treble para actualizaciones más rápidas.
`
},

/* ANDROID 9 */
{
id: 'v90',
year: '2018',
name: 'Android 9 Pie',
img: 'v90.png',
desc: `
Android Pie introdujo navegación por gestos, batería adaptativa con IA y Bienestar Digital.
Limitó apps en segundo plano para ahorrar batería.
`
},

/* ANDROID 10+ ERA */
{
id: 'v10',
year: '2019',
name: 'Android 10',
img: 'v10.png',
desc: `
Android 10 eliminó los nombres de postres públicamente.
Introdujo modo oscuro nativo, control de privacidad y gestos completamente nuevos.
`
},

{
id: 'v11',
year: '2020',
name: 'Android 11',
img: 'v11.png',
desc: `
Android 11 se centró en conversaciones con burbujas de chat.
Añadió grabación de pantalla, controles de dispositivos inteligentes y permisos temporales.
`
},

{
id: 'v12',
year: '2021',
name: 'Android 12',
img: 'v12.png',
desc: `
Android 12 introdujo Material You, que cambia colores según el fondo.
Añadió paneles de privacidad y rediseño completo del sistema.
`
},

{
id: 'v13',
year: '2022',
name: 'Android 13',
img: 'v13.png',
desc: `
Android 13 mejoró personalización, idioma por app y permisos de notificaciones obligatorios.
También optimizó tablets y pantallas grandes.
`
},

{
id: 'v14',
year: '2023',
name: 'Android 14',
img: 'v14.png',
desc: `
Android 14 mejoró batería, pantalla de bloqueo y accesibilidad.
Bloqueó apps antiguas por seguridad y añadió más personalización visual.
`
},

{
id: 'v15r',
year: '2024',
name: 'Android 15',
img: 'v15r.png',
desc: `
Android 15 introdujo Espacio Privado con biometría, detección de robo por IA,
mejoras en conectividad satelital, optimización de rendimiento y privacidad avanzada.
`
}

];

/* GENERAR LINEA DEL TIEMPO */
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

/* MODAL */
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
