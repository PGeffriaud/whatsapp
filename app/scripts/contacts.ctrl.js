/**
 * Created by pierreg on 24/02/16.
 */
(function () {
  'use strict';

  angular.module('whatsapp.controllers', [])
    .controller('ContactsCtrl', ['$scope', '$location', 'ContactsSrv', 'LoginSrv',
      function ($scope, $location, ContactsSrv, LoginSrv) {
        if (!LoginSrv.isLogged()) {
          $location.path('/login');
        }
        ContactsSrv.getContacts().then(function (contacts) {
          $scope.contacts = contacts;
        });
      }]);

})();
