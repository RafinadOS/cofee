$(document).ready(function() {
  $("#cofee-slider").owlCarousel({
    autoPlay: 8000, //Set AutoPlay to 3 seconds
    items :6,
    navigation : true,
    pagination : false,
    navigationText : [" "," "],
    itemsDesktop : [1300,4],
    itemsDesktopSmall : [979,3]
  });

  $("#cofee-slider_single").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true,
    navigationText : [" "," "] 
  });

  $("#show-panel").click(function(){
    $("#popup").toggleClass("popup-shw");
  });

  $("#close-panel").click(function(){
    $("#popup").toggleClass("popup-shw");
  });
});


$(document).ready(function(){
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
            $('#popup').removeClass('popup-shw');
    });
});


// А эта хреновина для плавных скролов к якорям
$(document).ready(function(){
    $('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
      var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });
});
