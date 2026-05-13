$(document).ready(function() {

    $('#welcome-screen').on('click', function() {
        // 1. Deslizamos la pantalla de bienvenida hacia arriba
        $(this).addClass('slide-up');
        
        // 2. Hacemos que el nav-bar aparezca suavemente (fade) 
        // o aparezca de golpe justo cuando empieza la animación
        $('#nav-bar').fadeIn(400); 

        // 3. Opcional: Quitar el welcome del DOM después de que termine la animación
        setTimeout(function() {
            $('#welcome-screen').hide();
        }, 800);
    });

    // Evento del burger menu
    $('#open-menu').on('click', function() {
        $(this).toggleClass('active');
        console.log("Menú abierto");
    });

    

});

$('#showFormBtn').on('click', function() {
    $('#paymentForm').fadeIn(100);
    $(this).hide();
});