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
    })

    .controller('ChatAddCtrl', function ($scope, Chats) {

    })

    .controller('AccountCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });
})();
