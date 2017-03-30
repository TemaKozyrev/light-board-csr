$(document).ready(function() { 
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal'); 
    var close = $('#modal_close, #overlay'); 
    var modal = $('#modal_form'); 

     open_modal.click( function(event){ 
         event.preventDefault(); 
         var div = $(this).attr('href'); 
         overlay.fadeIn(400, 
             function(){ 
                 modal.append("<div id='modal_content'>" + div + "</div>")
                 modal 
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); 
         });
     });

     close.click( function(){ 
            modal 
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); 
                 }
             );
             $('#modal_content').remove();
     });

     $('#open_registration_modal').click(function () {
         overlay.fadeIn(400,
             function(){
                 modal.load('/html/registration.html');
                 modal
                     .css('display', 'block')
                     .animate({opacity: 1, top: '50%'}, 200);
             });
     });

     $.get( "http://localhost:3000/account/info", function( data ) {
        if (data.error) {
            $('#user').load('/html/login.html')
        } else {

        }
    });
});