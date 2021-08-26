$(function(){
  
  $('.parallax').parallax(); //inicializador do parallax
  
  $(document).scroll(function(){
    let topWindow = $(window).scrollTop();
    if(topWindow > 60){
      $("header").addClass("header_fixed");
      $(".barra").addClass("barra_fixed");
    } else {
      $("header").removeClass("header_fixed");
      $(".barra").removeClass("barra_fixed");
    };
  })
  $(".menu").on("click", function(){
    $(".nav-items").toggleClass("nav-show");
  });

  $("a.tooltip").mouseover(function(){
    let texto = $(this).attr('data-tooltip');
    $(this).children(".text_tooltip").html(texto);
    $(this).children(".text_tooltip").css('opacity', '1');
  });

  $("a.tooltip").mouseout(function(){
    $(this).children(".text_tooltip").css('opacity', '0');
  });
  //este código faz com que ao sair do icone, o tooltip se esconda, caso contrario, ele permanecerá ativo.
  $(".text_tooltip").mouseover(function(e){
    e.stopPropagation();
  });


  /* 
  Código demonstrativo como criar um scrool smooth com jQuery
  Isso hoje é feito com css usando	scroll-behavior: smooth;
  
  var page = $('html, body');
  $('a.tooltip').click(function() {
  page.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
  });
  */
})
