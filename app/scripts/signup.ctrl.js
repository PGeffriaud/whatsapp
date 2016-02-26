/**
 * Created by pierreg on 26/02/16.
 */
(function () {
  'use strict';

  angular.module('whatsapp.controllers')
    .controller('SignupCtrl', ['$scope', '$location', 'uuid2', 'ContactsSrv', 'LoginSrv',
      function ($scope, $location, uuid2, ContactsSrv, LoginSrv) {
        $scope.account = {};
        $scope.signup = function () {
          $scope.account._id = uuid2.newuuid();
          $scope.account.picture = 'images/default.png';
          ContactsSrv.addContact($scope.account);
          LoginSrv.setUserConnected($scope.account);
          $location.path('/tab/contacts');
        };
      }]);
})();
