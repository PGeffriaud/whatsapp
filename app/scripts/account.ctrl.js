(function () {
  'use strict';

  angular.module('whatsapp.controllers')
    .controller('AccountCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });

})();
