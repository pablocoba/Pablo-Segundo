const rayas = Array(60).fill("-").join("")

window.setInterval(()=>{
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    document.getElementById('lblRayaHoras').value = rayas.substring(0, horas)
    document.getElementById('lblRayaMinutos').value = rayas.substring(0, minutos)
    document.getElementById('lblRayaSegundos').value = rayas.substring(0, segundos)

    document.getElementById('lblHoras').value = `${hora}h`
})