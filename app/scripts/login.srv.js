/**
 * Created by pierreg on 26/02/16.
 */
(function () {
  'use strict';
  angular.module('whatsapp.services')
    .service('LoginSrv', function () {
      var userConnected = {};

      this.getUserConnected = function () {
        return userConnected;
      };

      this.setUserConnected = function (user) {
        userConnected = user;
      };
    });
})();
