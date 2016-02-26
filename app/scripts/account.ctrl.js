(function () {
  'use strict';

  angular.module('whatsapp.controllers')
    .controller('AccountCtrl', ['$scope', '$location', 'LoginSrv',
      function ($scope, $location, LoginSrv) {

        if (!LoginSrv.isLogged()) {
          $location.path('/login');
        }
        $scope.logout = function () {
          $location.path('/login');
        };
      }]);

})();
