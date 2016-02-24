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
      $scope.chat = ChatsSrv.getChat($stateParams.chatId);
      MessagesSrv.getMessages().then(function(messages){
        $scope.messages = messages.filter(function(m){
          return m.chatId === $stateParams.chatId;
        });
      });
    })

    .controller('ChatAddCtrl', function ($scope, ChatsSrv) {

    })

    .controller('AccountCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });
})();
