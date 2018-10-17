
 $(function(){  
     
     var item_Text = $('#item1');

     
     
    $(window).scroll(function(){
        
     var height = $(this).scrollTop();
     var img_move = $('#Sub_3_img').offset().top;   
        
        
 
        
      $('#Sub_3_img').css({"top" : height / -7}); 
    
         });
     
});
