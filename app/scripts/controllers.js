(function () {
  'use strict';
  angular.module('whatsapp.controllers', [])

    .controller('ContactsCtrl', function ($scope, Contacts) {
        $scope.contacts = Contacts.all();
    })

    .controller('ChatsCtrl', function ($scope, Chats) {
      $scope.chats = Chats.all();

    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats, Messages) {
      $scope.chat = Chats.get($stateParams.chatId);
      $scope.messages = Messages.fromChat($stateParams.chatId);
    })

    .controller('ChatAddCtrl', function ($scope, Chats) {

    })

    .controller('AccountCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });
})();
