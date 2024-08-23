document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("La geolocalización no es soportada por este navegador.");
        }
    }, 3000);
});

function showPosition(position) {
    alert("Latitud: " + position.coords.latitude + "\nLongitud: " + position.coords.longitude);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("El usuario denegó la solicitud de geolocalización.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("La información de la ubicación no está disponible.");
            break;
        case error.TIMEOUT:
            alert("La solicitud de ubicación ha expirado.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Ha ocurrido un error desconocido.");
            break;
    }
}
