$( document ).ready(function() {
  
    $("#slider_strip").on('click', function(){
      
      if( $(this).find('.fa').hasClass('fa-arrow-left') ){
        $(".o_sub_menu").animate({
          margin: '0 0 0 -200px',
        }, 300, function(){
            $(this).find('.fa')
              .removeClass('fa-arrow-left')
              .addClass('fa-arrow-right')
        })
      } else {
        $(".o_sub_menu").animate({
          margin: '0 0 0 0px',
        }, 300, function(){
            $(this).find('.fa')
              .removeClass('fa-arrow-right')
              .addClass('fa-arrow-left')
        })                          
      }
    })
  
});
