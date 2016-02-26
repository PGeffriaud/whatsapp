/**
 * Created by pierreg on 26/02/16.
 */
(function () {
  'use strict';
  angular.module('whatsapp.services')
    .service('LoginSrv', function () {

      var userConnected = {};

      this.isLogged = function () {
        return Object.keys(userConnected).length;
      };

      this.setUserConnected = function (user) {
        userConnected = user;
      };
    });

})();
