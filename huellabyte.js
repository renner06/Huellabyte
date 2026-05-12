function verMascotas() {
    window.location.href = "./mascotas.html";
}
function borrarLogin() {
    document.getElementById("usuario").value = "";
    document.getElementById("contrasena").value = "";
}

function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuario === "renzoracca" && contrasena === "Nemo&Rowi") {
        window.location.href = "./form.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function enviarSolicitud() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var edad = document.getElementById("edad").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var vivienda = document.getElementById("vivienda").value;
    var mascotas = document.getElementById("mascotas").value;
    var acuerdo = document.getElementById("acuerdo").value;
    var tiempoSola = document.getElementById("tiempo-sola").value;
    var veterinario = document.getElementById("veterinario").value;
    var motivo = document.getElementById("motivo").value.trim();
    var compromiso = document.getElementById("compromiso").value.trim();
    var resultado = document.getElementById("resultado");

    if (!nombre || !apellido || !edad || !telefono || !correo || !direccion ||
        !vivienda || !mascotas || !acuerdo || !tiempoSola || !veterinario ||
        !motivo || !compromiso) {
        document.getElementById("error-formulario").textContent = "Por favor completá todos los campos antes de enviar la solicitud.";
        return;
    }

    document.getElementById("exito-formulario").textContent = "¡Muchas gracias! Ya estamos revisando tu solicitud. Pronto nos pondremos en contacto con vos para darte las buenas noticias. 🐾";
}