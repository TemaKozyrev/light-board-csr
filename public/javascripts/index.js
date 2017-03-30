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
             $('.registration_form').remove();
     });

     $.get( "http://localhost:3000/account/info", function( data ) {
        if (data.error) {
            $('#user').load('/html/login.html');
        } else {
            $('#user').load('/html/user_info.html', function () {
                $('.username').append('<a>' + data + '</a>')
            });
        }
    });

    $(document).on( "click", ".registration", function(event) {
        event.preventDefault();
        overlay.fadeIn(400,
            function(){
                modal.load('/html/registration.html')
                modal
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $(document).on("submit", ".login_form", function (event, data) {
        event.preventDefault();
        var $inputs = $('.login_form :input');

        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });

        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/account/login",
            data: {
                "username": values.username,
                "password": values.password
            },
            success: function (data) {
                if (!data.error) {
                    $('#user.user-form-flex').remove();
                    $('#user').load('/html/user_info.html', function () {
                        $('.username').append('<a>' + data + '</a>')
                    });
                } else
                    alert(data.error)
            },
        });
    });

    $(document).on( "click", ".logout", function(event) {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: "http://localhost:3000/account/logout",
            success: function (data) {
                $('#user.user-form-flex').remove();
                $('#user').load('/html/login.html');
            },
        });
    });
});