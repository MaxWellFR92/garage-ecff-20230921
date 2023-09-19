$(document).ready(function(){
  alert("Jquery OK");

  $('#scroll-right-usedcar').click(function() {
    // ----- retire element first child et l'ajoute a la fin ------
    $('.card-content-usedcar').append($('.card-usedcar:nth-child(1)'));
    // ----- REDEFINITION DU STYLE DE CHAQUE CARD -----
    //$('.card-content .card:nth-child(1)').css('transform', 'scale(1)').css('z-index', '0').css('opacity', '0.2');
    //$('.card-content .card:nth-child(2)').css('transform','scale(1.1)').css('z-index','1').css('opacity','0.7');
    //$('.card-content .card:nth-child(3)').css('transform','scale(1.3)').css('z-index','2').css('opacity','1');
    //$('.card-content .card:nth-child(4)').css('transform','scale(1.1)').css('z-index','1').css('opacity','0.7');
    //$('.card-content .card:nth-child(5)').css('transform', 'scale(1)').css('z-index', '0').css('opacity', '0.2');
  })

  $('#scroll-left-usedcar').click(function() {
    // ----- retire dernier element child et l'ajoute au début ------
    $('.card-content-usedcar').prepend($('.card-usedcar:nth-child(5)'));
    // ----- REDEFINITION DU STYLE DE CHAQUE CARD -----
    //$('.card-content .card:nth-child(1)').css('transform', 'scale(1)').css('z-index', '0').css('opacity', '0.2');
    //$('.card-content .card:nth-child(2)').css('transform', 'scale(1.1)').css('z-index', '1').css('opacity', '0.7');
    //$('.card-content .card:nth-child(3)').css('transform','scale(1.3)').css('z-index','2').css('opacity','1');
    //$('.card-content .card:nth-child(4)').css('transform', 'scale(1.1)').css('z-index', '1').css('opacity', '0.7');
    //$('.card-content .card:nth-child(5)').css('transform', 'scale(1)').css('z-index', '0').css('opacity', '0.2');
  })

  $('#scroll-right-testimony').click(function() {
    // ----- retire element first child et l'ajoute a la fin ------
    $('.card-content-testimony').append($('.card-testimony:nth-child(1)'));
  })

  $('#scroll-left-testimony').click(function() {
    // ----- retire element first child et l'ajoute a la fin ------
    $('.card-content-testimony').prepend($('.card-testimony:nth-child(5)'));
  })
});