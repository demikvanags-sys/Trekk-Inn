$(document).ready(function() {

    $('#welcome-screen').on('click', function() {
        // 1. Deslizamos la pantalla de bienvenida hacia arriba
        $(this).addClass('slide-up');
        
        // 2. Hacemos que el nav-bar aparezca suavemente (fade) 
        // o aparezca de golpe justo cuando empieza la animación
        $('#nav-bar').fadeIn(400);
        $('#home-screen').hide();
        $('#home-screen').fadeIn(400);

        // 3. Opcional: Quitar el welcome del DOM después de que termine la animación
        setTimeout(function() {
            $('#welcome-screen').hide();
        }, 800);
    });

    // Evento del burger menu
    $('#burger-button').on('click', function() {
        $(this).toggleClass('active');
        console.log("Menú abierto");
    });

    

});



// Payment info
$('.showFormBtn').on('click', function() {

    $('#checkout-page').fadeOut(200);

    $('#paymentForm')
        .css({
            'display': 'flex'
        })
        .hide()
        .fadeIn(300);

});

$('#backArrow').on('click', function(e) {

    e.preventDefault();

    $('#paymentForm').fadeOut(200, function() {

        $('#checkout-page').fadeIn(300);

    });

});

$('.gpay-btn').on('click', function() {

    $('#checkout-page').fadeOut(200);

    $('#success-page').fadeIn(300);

});

$('#paymentForm').on('submit', function(e) {

    e.preventDefault();

    $('#paymentForm').fadeOut(200);

    $('#checkout-page').fadeOut(200);

    $('#success-page').fadeIn(300);

});

$('#close-success').on('click', function() {

    $('#success-page').fadeOut(200, function() {

        $('#home-screen').fadeIn(300);

    });

});

// Card number validation
$('#CardNumberInput').on('input', function () {

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

  $(this).val(number);
});


// Expiry date validation
$('#ExpiryInput').on('input', function () {

  let date = this.value.replace(/\D/g, "");

  if (date.length > 2) {
    date = date.slice(0, 2) + "/" + date.slice(2);
  }

  $(this).val(date);
});


// CVV validation
$('#CVVInput').on('input', function () {

  let cvv = this.value.replace(/\D/g, "");

  $(this).val(cvv);
});



//Product Page
$('.carousel-item').on('click', function() {
    selectedTentImage = $(this).find('img').attr('src');
    $('#product-dynamic-img').attr('src', selectedTentImage);
    var categoryTitle = $(this).closest('.category-section').find('.category-title').text();
    $('#product-page .back-category-title').text(categoryTitle);
    $('#nav-bar').show();
    $('.bottom-nav').css('display', 'flex');
    $('#home-screen').fadeOut(200, function() {
        $('#product-page').fadeIn(300);
    });
});

$('#back-to-home').on('click', function() {
        $('#nav-bar').show();
        $('.bottom-nav').css('display', 'flex');
        $('#product-page').fadeOut(200, function() {
            $('#home-screen').fadeIn(300);
        });
    });

//checkout page
$('.add-to-cart-btn').on('click', function() {
        if (selectedTentImage !== "") {
            $('#checkout-dynamic-img').attr('src', selectedTentImage);
        }
        $('#checkout-page .back-category-title').text('Check Out');
        $('#product-page').fadeOut(200, function() {
            $('#checkout-page').fadeIn(300);
        });
    });

    $('#back-to-product').on('click', function() {
        $('#checkout-page').fadeOut(200, function() {
            $('#product-page').fadeIn(300);
        });
    });

// Menu 

let lastOpenPage = '#home-screen';

$('#burger-button').on('click', function() {

    if ($('#product-page').is(':visible')) {
        lastOpenPage = '#product-page';
    }
    else if ($('#checkout-page').is(':visible')) {
        lastOpenPage = '#checkout-page';
    }
    else {
        lastOpenPage = '#home-screen';
    }

    $(this).hide();

    $(lastOpenPage).hide();

    $('#menu').css({
        'display': 'flex',
        'opacity': 1
    });

    $('#menu-back').css('display', 'block');

});

$('#menu-back').on('click', function() {

    $('#menu').fadeOut(200);
    $('#about').fadeOut(200);
    $('#terms').fadeOut(200);

    $('#menu-back').hide();

    $('#burger-button').show();

    $(lastOpenPage).fadeIn(300);

});

// About us 

$('#about-link').on('click', function() {
  
  $('#home-screen, #paymentForm, #confirmation-screen, #menu').hide();
  
  $('#about, #menu-back').css({ 'display': 'flex', 'opacity': 1 });
  
});

// Terms and conditions 

$('#terms-link').on('click', function() {
  
  $('#home-screen, #paymentForm, #confirmation-screen, #menu, #about').hide();
  
  $('#terms, #menu-back').css({ 'display': 'flex', 'opacity': 1 });
});


// Confirm booking
function confirmBooking() {
    // Generate booking ID
    const bookingId = 'BK' + Date.now().toString().slice(-8);
    
    document.getElementById('bookingId').textContent = bookingId;
    document.getElementById('confirmationScreen').classList.remove('active');
    document.getElementById('successMessage').classList.add('active');
    
}

// Nav button click behavior

document.addEventListener('DOMContentLoaded', () => {
  const homeBtn = document.getElementById('homeBtn');

  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      window.location.href = 'product-page.html'; //click home button, go to product page
    });
  }
});

// About back button
$('#about-back-btn').on('click', function() {

    $('#about').fadeOut(200, function() {

        $('#menu').fadeIn(300);

    });

});

// Terms back button
$('#terms-back-btn').on('click', function() {

    $('#terms').fadeOut(200, function() {

        $('#menu').fadeIn(300);

    });

});
