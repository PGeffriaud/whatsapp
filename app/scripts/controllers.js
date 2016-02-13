(function () {
  'use strict';
  angular.module('starter.controllers', [])

    .controller('ContactsCtrl', function ($scope, Contacts) {
        $scope.contacts = Contacts.all();
    })

    .controller('ChatsCtrl', function ($scope, Contacts) {
      // With the new view caching in Ionic, Controllers are only called
      // when they are recreated or on app start, instead of every page change.
      // To listen for when this page is active (for example, to refresh data),
      // listen for the $ionicView.enter event:
      //
      //$scope.$on('$ionicView.enter', function(e) {
      //});

      $scope.chats = Contacts.all();
      $scope.remove = function (c) {
        Contacts.remove(c);
      };
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Contacts) {
      $scope.chat = Contacts.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });
})();
