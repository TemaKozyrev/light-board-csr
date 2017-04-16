var api = new _api();

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
                 modal.append("<div id='modal_content'><img src='/images/elep.jpg' class='item-img'><p>test/test</p><p>test-test</p></div>");
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

     api.getSortOffers(function (data) {
       data.cat.forEach(function (item) {
         $("#catrgory-list").append('<li class="category"><a>' + item.name + '</a></li>');
       });
       data.offers.forEach(function (item) {
         $("#offer-list").append('<li class="flex-offer"><p>' + item.title + '</p><p>' + item.description + '</p></li>')
       })
     });

     api.getUserInfo(function (name) {
       $('#user').load('/html/user_info.html', function () {
           $('.username').append('<a href="http://localhost:3000/html/profile.html">' + name + '</a>')
       });
     }, function () {
       $('#user').load('/html/login.html');
     })

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

    //submit login form
    $(document).on("submit", ".login_form", function (event, data) {
        event.preventDefault();
        var $inputs = $('.login_form :input');

        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });

        api.postUser(values, function(name) {
          $('#user.user-form-flex').remove();
          $('#user').load('/html/user_info.html', function () {
              $('.username').append('<a>' + name + '</a>')
          });
        });
    });

    //logout
    $(document).on( "click", ".logout", function(event) {
        event.preventDefault();
        api.logOut(function() {
          $('#user.user-form-flex').remove();
          $('#user').load('/html/login.html');
        })
    });
});
