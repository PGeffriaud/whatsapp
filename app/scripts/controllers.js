(function () {
  'use strict';
  angular.module('whatsapp.controllers', [])

    .controller('ContactsCtrl', function ($scope, ContactsSrv) {
      ContactsSrv.getContacts().then(function(contacts) {
        $scope.contacts = contacts;
      });
    })

    .controller('ChatsCtrl', function ($scope, ChatsSrv) {
      ChatsSrv.getChats().then(function(chats){
        $scope.chats = chats;
      });

    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, ChatsSrv, MessagesSrv) {
      ChatsSrv.getChat($stateParams.chatId).then(function (chat) {
        $scope.chat = chat;
      });
      MessagesSrv.getMessages($stateParams.chatId).then(function (messages) {
        $scope.messages = messages;
      });
    })

    .controller('ChatAddCtrl', function ($scope, ChatsSrv) {
      // TODO create a new chat
    })

    .controller('AccountCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });
})();
