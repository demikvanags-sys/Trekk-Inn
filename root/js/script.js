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




// home screen in
$('#welcome-screen').on('click', function() {
  $(this).addClass('slide-up');
  
  // Mostramos el nav superior y la home screen con un delay o fade
  $('#nav-bar').fadeIn(400);
  $('#home-screen').fadeIn(400);
});

// Payment info
$('#showFormBtn').on('click', function() {
    $('#paymentForm').css('display', 'flex').hide().fadeIn(100);
    $(this).hide();
});

// Card number validation
CardNumberInput.oninput = function () {

  let number = this.value.replace(/\D/g, "");

  if (number.length > 4) {
    number = number.slice(0, 4) + " " + number.slice(4);
  }

  if (number.length > 9) {
    number = number.slice(0, 9) + " " + number.slice(9);
  }

  if (number.length > 14) {
    number = number.slice(0, 14) + " " + number.slice(14);
  }

  this.value = number;
};


// Expiry date validation
ExpiryInput.oninput = function () {

  let date = this.value.replace(/\D/g, "");

  if (date.length > 2) {
    date = date.slice(0, 2) + "/" + date.slice(2);
  }

  this.value = date;
};


// CVV validation
CVVInput.oninput = function () {

  let cvv = this.value.replace(/\D/g, "");

  this.value = cvv;
};


// Menu 

$('#burger-button').on('click', function() {
  $(this).hide();

  $('#home-screen, #paymentForm, #confirmation-screen').hide();
  
  $('#menu').css({ 'display': 'flex', 'opacity': 100 });
});


// About us 

$('showAbout').on('click', function() {
    $('#about').css('display', 'flex').hide().fadeIn(100);
    $(this).hide();
});

// Terms and conditions 

$('showTerms').on('click', function() {
    $('#terms').css('display', 'flex').hide().fadeIn(100);
    $(this).hide();
});