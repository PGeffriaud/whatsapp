/**
 * Created by pierreg on 26/02/16.
 */
(function () {
  'use strict';
  angular.module('whatsapp.controllers')
    .controller('LoginCtrl', ['$scope', '$location', 'ContactsSrv', 'LoginSrv',
      function ($scope, $location, ContactsSrv, LoginSrv) {

        ContactsSrv.getContacts().then(function (contacts) {
          $scope.users = contacts;
        });
        $scope.form = {};
        $scope.login = function () {
          LoginSrv.setUserConnected($scope.form.user);
          $location.path('/tab/contacts');
        };
      }]);

})();
