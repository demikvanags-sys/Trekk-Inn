$(document).ready(function() {

    $('#welcome-screen').on('click', function() {
        $(this).addClass('slide-up');
        
        // Esto hace que después de subir, la capa no moleste para tocar lo que haya debajo
        setTimeout(function() {
            $('#welcome-screen').css('display', 'none');
        }, 700); 
    });

});