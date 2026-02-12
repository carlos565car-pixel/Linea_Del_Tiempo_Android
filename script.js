const versions = [
 {year:"2009", name:"Android 2.0 Eclair", desc:"Introdujo Google Maps Navigation, soporte multi-cuenta, Bluetooth 2.1 y mejoras en cámara."},
 {year:"2010", name:"Android 2.3 Gingerbread", desc:"Mejor rendimiento, soporte NFC, nuevo teclado, ahorro de batería y soporte para cámaras frontales."},
 {year:"2011", name:"Android 3.0 Honeycomb", desc:"Diseñado para tablets, interfaz holográfica, multitarea mejorada."},
 {year:"2011", name:"Android 4.0 Ice Cream Sandwich", desc:"Unificó tablets y móviles, Face Unlock, Android Beam y diseño Holo."},
 {year:"2012", name:"Android 4.1-4.3 Jelly Bean", desc:"Project Butter, Google Now, notificaciones expandibles."},
 {year:"2013", name:"Android 4.4 KitKat", desc:"Optimizado para baja RAM, modo inmersivo, OK Google."},
 {year:"2014", name:"Android 5.0 Lollipop", desc:"Material Design, ART runtime, notificaciones en pantalla de bloqueo."},
 {year:"2015", name:"Android 6.0 Marshmallow", desc:"Permisos por app, Doze Mode, huella digital."},
 {year:"2016", name:"Android 7.0 Nougat", desc:"Multiventana, Vulkan API, ahorro de datos."},
 {year:"2017", name:"Android 8.0 Oreo", desc:"Picture-in-picture, Project Treble, arranque rápido."},
 {year:"2018", name:"Android 9 Pie", desc:"Gestos, IA batería, bienestar digital."},
 {year:"2019", name:"Android 10", desc:"Modo oscuro, privacidad avanzada, gestos completos."},
 {year:"2020", name:"Android 11", desc:"Burbujas chat, grabación pantalla, permisos temporales."},
 {year:"2021", name:"Android 12", desc:"Material You, privacidad micrófono y cámara."},
 {year:"2022", name:"Android 13", desc:"Idioma por app, Bluetooth LE Audio."},
 {year:"2023", name:"Android 14", desc:"Mejor batería, apps optimizadas."},
 {year:"2024", name:"Android 15", desc:"IA integrada, privacidad mejorada, pantallas grandes."}
];

const container = document.getElementById("timeline-content");

versions.forEach(v => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
        <div class="icon-box"><img src="img/android.png"></div>
        <div class="dot"></div>
        <div class="year">${v.year}</div>
    `;
    item.onclick = () => openModal(v.name, v.desc);
    container.appendChild(item);
});

function openModal(name, desc){
    document.getElementById("modal-content").innerHTML = `<h2>${name}</h2><p>${desc}</p>`;
    document.getElementById("overlay").style.display = "flex";
}

function closeModal(){
    document.getElementById("overlay").style.display = "none";
}
