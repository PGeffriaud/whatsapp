/**
 * Created by pierreg on 24/02/16.
 */
(function () {
  'use strict';
  angular.module('whatsapp.controllers')

    // Get le whole list of chats
    .controller('ChatsCtrl', function ($scope, ChatsSrv) {
      ChatsSrv.getChats().then(function (chats) {
        $scope.chats = chats;
      });

    })

    // Get messages of one chat
    .controller('ChatDetailCtrl', function ($scope, $stateParams, ChatsSrv, MessagesSrv) {
      ChatsSrv.getChat($stateParams.chatId).then(function (chat) {
        $scope.chat = chat;
      });
      MessagesSrv.getMessages($stateParams.chatId).then(function (messages) {
        $scope.messages = messages;
      });
    })

    // Create a new chat
    .controller('ChatAddCtrl', function ($scope, ChatsSrv) {
      // TODO create a new chat
    })
})();
