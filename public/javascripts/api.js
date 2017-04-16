function _api() {

  this.getSortOffers = function(callback) {
    $.ajax({
        type: 'GET',
        url: "http://localhost:3000/",
        data: {},
        success: function (data) {
            callback(data);
        }
    });
  };

  this.postUser = function(values, callback) {
    $.ajax({
        type: 'POST',
        url: "http://localhost:3000/account/login",
        data: {
            "username": values.username,
            "password": values.password
        },
        success: function (data) {
            if (!data.error) {
                callback(data);
            } else
                return false;
        },
    });
  };

  this.logOut = function(callback) {
    $.ajax({
        type: 'GET',
        url: "http://localhost:3000/account/logout",
        success: function (data) {
            callback();
        },
    });
  };

  this.getUserInfo = function(cb, err_cb) {
    $.get( "http://localhost:3000/account/info", function( data ) {
       if (data.error) {
           err_cb();
       } else {
           cb(data);
       }
   });
 };

 this.getProfileInfo = function(callback) {
   $.ajax({
       type: 'GET',
       url: "http://localhost:3000/account/profile",
       success: function (data) {
           callback(data);
       },
   });
 };

 this.createOffer = function(values, callback) {
   $.ajax({
       type: 'POST',
       url: "http://localhost:3000/offer/create",
       data: {
           "catname": values.catname,
           "oname": values.oname,
           "sdesc": values.sdesc,
           "desc": values.desc,
           "file": values.file
       },
       success: function (data) {
           callback();
       },
   });
 }
}
