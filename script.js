const versions = [
 { id:'v1', year:'2008', name:'Android 1.0', img:'v1.png', desc:'Primera versión oficial con Gmail, Maps y Android Market.' },
 { id:'v15', year:'2009', name:'Cupcake 1.5', img:'v15.png', desc:'Teclado virtual y widgets.' },
 { id:'v16', year:'2009', name:'Donut 1.6', img:'v16.png', desc:'Soporte para varias pantallas.' },
 { id:'v20', year:'2009', name:'Eclair 2.1', img:'v20.png', desc:'Navegación GPS y fondos animados.' },
 { id:'v22', year:'2010', name:'Froyo 2.2', img:'v22.png', desc:'Hotspot WiFi y más velocidad.' },
 { id:'v23', year:'2010', name:'Gingerbread 2.3', img:'v23.png', desc:'NFC y cámara frontal.' },
 { id:'v30', year:'2011', name:'Honeycomb 3.0', img:'v30.png', desc:'Diseñado para tablets.' },
 { id:'v40', year:'2011', name:'Ice Cream Sandwich 4.0', img:'v40.png', desc:'Unificó tablets y celulares.' },
 { id:'v44', year:'2013', name:'KitKat 4.4', img:'v44.png', desc:'Optimizado para celulares baratos.' },
 { id:'v50', year:'2014', name:'Lollipop 5.0', img:'v50.png', desc:'Material Design.' },
 { id:'v60', year:'2015', name:'Marshmallow 6.0', img:'v60.png', desc:'Permisos y ahorro de batería.' },
 { id:'v70', year:'2016', name:'Nougat 7.0', img:'v70.png', desc:'Pantalla dividida.' },
 { id:'v80', year:'2017', name:'Oreo 8.0', img:'v80.png', desc:'Picture-in-picture.' },
 { id:'v90', year:'2018', name:'Pie 9', img:'v90.png', desc:'Gestos e IA.' },
 { id:'v10', year:'2019', name:'Android 10', img:'v10.png', desc:'Modo oscuro.' },
 { id:'v11', year:'2020', name:'Android 11', img:'v11.png', desc:'Burbujas de chat.' },
 { id:'v12', year:'2021', name:'Android 12', img:'v12.png', desc:'Material You.' },
 { id:'v13', year:'2022', name:'Android 13', img:'v13.png', desc:'Idiomas por app.' },
 { id:'v14', year:'2023', name:'Android 14', img:'v14.png', desc:'Más eficiencia.' },
 { id:'v15r', year:'2024', name:'Android 15', img:'v15r.png', desc:'Espacio privado.' }
];

const container = document.getElementById("timeline-content");

versions.forEach(v => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.onclick = () => openModal(v.id);
    item.innerHTML = `
        <div class="icon-box"><img src="${v.img}"></div>
        <div class="dot"></div>
        <div class="year">${v.year}</div>
    `;
    container.appendChild(item);
});

function openModal(id) {
    const v = versions.find(x => x.id === id);
    document.getElementById("modal-content").innerHTML = `
        <h2>${v.name}</h2>
        <p>${v.desc}</p>
    `;
    document.getElementById("overlay").style.display = "flex";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
}
