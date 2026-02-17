let currentSystem = 'android';

function switchTimeline(system) {
    currentSystem = system;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(system === 'android' ? 'tab-android' : 'tab-ios').classList.add('active');

    const title = document.getElementById('main-title');
    const line = document.getElementById('main-line');
    const color = system === 'android' ? '#3ddc84' : '#007aff';

    title.innerText = `LÍNEA DEL TIEMPO ${system.toUpperCase()}`;
    title.style.color = color;
    line.style.background = color;

    renderTimeline(system === 'android' ? androidData : iosData);
    
    // Reiniciar el scroll al principio al cambiar de sistema
    document.querySelector('.timeline-container').scrollLeft = 0;
}

function renderTimeline(data) {
    const container = document.getElementById("timeline-content");
    container.innerHTML = ""; 

    data.forEach(v => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        item.onclick = () => openModal(v);
        const color = currentSystem === 'android' ? '#3ddc84' : '#007aff';
        
        let iconHtml = currentSystem === 'android' 
            ? `<div class="icon-box" style="border-color: ${color}"><img src="${v.img}"></div>`
            : `<div class="icon-box ios-box" style="border-color: ${color}">${v.num}</div>`;

        item.innerHTML = `
            ${iconHtml}
            <div class="dot" style="background: ${color}"></div>
            <div class="year" style="color: ${color}">${v.year}</div>
        `;
        container.appendChild(item);
    });
}

function openModal(version) {
    const color = currentSystem === 'android' ? '#3ddc84' : '#007aff';
    const formattedDesc = version.desc.replace(/\n/g, '<br>').replace(/\* \*\*(.*?)\*\*/g, '<li><strong>$1</strong>');
    
    document.getElementById("modal-title").innerText = version.name;
    document.getElementById("modal-title").style.color = color;
    
    const imgHtml = version.img ? `<img src="${version.img}" style="width:70px; display:block; margin:0 auto 15px;">` : '';
    document.getElementById("modal-content").innerHTML = `${imgHtml}<div>${formattedDesc}</div>`;
    
    const btn = document.getElementById("modal-btn");
    btn.style.background = color;
    btn.style.color = currentSystem === 'android' ? 'black' : 'white';
    document.getElementById("overlay").style.display = "flex";
}

function closeModal() { document.getElementById("overlay").style.display = "none"; }
window.onclick = e => { if (e.target == document.getElementById("overlay")) closeModal(); }

window.onload = () => switchTimeline('android');