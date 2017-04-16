var api = new _api();

$(document).ready(function() {
  api.getProfileInfo(function (data) {
    data.offers.forEach(function (item) {
      $('#offer-list').append('<li class="flex-item"><p>' + item.title + '</p><p>'+ item.description +'</p></li>')
    });
    data.cat.forEach(function (item) {
      $('#category-select').append('<option value="' + item.name + '">' + item.name + '</option>')
    })
  });

  api.getUserInfo(function (name) {
    $('#nav-list').append('<li><a href="#">' + name + '</a></li>');
    $('#user-info').append('<p>' + name + '</p>')
  }, function () {
    $('#user').load('/html/login.html');
  });

  $(document).on("submit", "#add-offer-form", function (event, data) {
      event.preventDefault();
      var $inputs = $('#add-offer-form :input');

      var values = {};
      $inputs.each(function() {
          values[this.name] = $(this).val();
      });

      api.createOffer(values, function() {
        //createOffer stub
      });
  });
});
