const versions = [
{
 id:'v20', year:'2009', name:'Android 2.0 / 2.1 Eclair', img:'v20.png',
 desc:`Eclair marcó el inicio del Android moderno. Introdujo navegación GPS gratuita, soporte multi-cuenta, teclado mejorado, Bluetooth 2.1, fondos animados y mejoras de cámara con zoom y flash.`
},
{
 id:'v22', year:'2010', name:'Android 2.2 Froyo', img:'v22.png',
 desc:`Se centró en rendimiento con compilador JIT. Añadió hotspot WiFi, soporte Flash, instalación en SD y navegador más rápido.`
},
{
 id:'v23', year:'2010', name:'Android 2.3 Gingerbread', img:'v23.png',
 desc:`Optimización de batería, soporte NFC, cámaras frontales, sensores avanzados y teclado mejorado.`
},
{
 id:'v30', year:'2011', name:'Android 3.0 Honeycomb', img:'v30.png',
 desc:`Diseñado para tablets con interfaz holográfica, botones virtuales y multitarea avanzada.`
},
{
 id:'v40', year:'2011', name:'Android 4.0 Ice Cream Sandwich', img:'v40.png',
 desc:`Unificó tablets y teléfonos, Face Unlock, Android Beam, interfaz Holo y multitarea con deslizamiento.`
},
{
 id:'v41', year:'2012', name:'Android 4.1-4.3 Jelly Bean', img:'v41.png',
 desc:`Project Butter, Google Now, notificaciones expandibles y multiusuario en tablets.`
},
{
 id:'v44', year:'2013', name:'Android 4.4 KitKat', img:'v44.png',
 desc:`Optimizado para dispositivos baratos, OK Google, modo inmersivo y mejor gestión de memoria.`
},
{
 id:'v50', year:'2014', name:'Android 5.0 Lollipop', img:'v50.png',
 desc:`Material Design, ART runtime, notificaciones en pantalla bloqueo y soporte 64-bit.`
},
{
 id:'v60', year:'2015', name:'Android 6.0 Marshmallow', img:'v60.png',
 desc:`Permisos por app, modo Doze, huellas dactilares y Google Now on Tap.`
},
{
 id:'v70', year:'2016', name:'Android 7.0 Nougat', img:'v70.png',
 desc:`Pantalla dividida, Vulkan API, respuestas rápidas y actualizaciones sin reinicio.`
},
{
 id:'v80', year:'2017', name:'Android 8.0 Oreo', img:'v80.png',
 desc:`Picture-in-Picture, Project Treble, autofill y arranque más rápido.`
},
{
 id:'v90', year:'2018', name:'Android 9 Pie', img:'v90.png',
 desc:`Gestos, IA para batería, Bienestar Digital y brillo adaptativo.`
},
{
 id:'v10', year:'2019', name:'Android 10', img:'v10.png',
 desc:`Modo oscuro, privacidad avanzada, grabación pantalla y soporte plegables.`
},
{
 id:'v11', year:'2020', name:'Android 11', img:'v11.png',
 desc:`Burbujas chat, permisos temporales y control hogar inteligente.`
},
{
 id:'v12', year:'2021', name:'Android 12', img:'v12.png',
 desc:`Material You, indicadores mic/cámara y panel privacidad.`
},
{
 id:'v13', year:'2022', name:'Android 13', img:'v13.png',
 desc:`Permisos notificaciones, idioma por app y mejoras tablets.`
},
{
 id:'v14', year:'2023', name:'Android 14', img:'v14.png',
 desc:`Más personalización, bloqueo apps antiguas y eficiencia energética.`
},
{
 id:'v15', year:'2024', name:'Android 15', img:'v15.png',
 desc:`Espacio privado, detección robo IA y mejoras plegables.`
}
];

const container = document.getElementById("timeline-content");

versions.forEach(v=>{
 const item=document.createElement("div");
 item.className="timeline-item";
 item.onclick=()=>openModal(v.id);

 item.innerHTML=`
 <div class="icon-box"><img src="${v.img}"></div>
 <div class="dot"></div>
 <div class="year">${v.year}</div>
 `;
 container.appendChild(item);
});

function openModal(id){
 const v=versions.find(x=>x.id===id);
 document.getElementById("modal-content").innerHTML=`<h2>${v.name}</h2><p>${v.desc}</p>`;
 document.getElementById("overlay").style.display="flex";
}

function closeModal(){
 document.getElementById("overlay").style.display="none";
}
