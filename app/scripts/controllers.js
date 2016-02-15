(function () {
  'use strict';
  angular.module('starter.controllers', [])

    .controller('ContactsCtrl', function ($scope, Contacts) {
        $scope.contacts = Contacts.all();
    })

    .controller('ChatsCtrl', function ($scope, Chats) {
      $scope.chats = Chats.all();

    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
      $scope.chat = Chats.get($stateParams.chatId);
      console.log($scope.chat);
    })

    .controller('AccountCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });
})();
