/**
 * Created by pierreg on 24/02/16.
 */
(function () {
  'use strict';
  angular.module('whatsapp.controllers')

    // The whole list of chats
    .controller('ChatsCtrl', function ($scope, ChatsSrv) {
      ChatsSrv.getChats().then(function (chats) {
        $scope.chats = chats;
      });
    })

    // Messages of one chat
    .controller('ChatDetailCtrl', function ($scope, $stateParams, $location, $ionicScrollDelegate, $timeout, uuid2, ChatsSrv, MessagesSrv) {
      ChatsSrv.getChat($stateParams.chatId).then(function (chat) {
        $scope.chat = chat;
      });
      MessagesSrv.getMessages($stateParams.chatId).then(function (messages) {
        $scope.messages = messages;
      });

      // Function to scroll to the bottom of the page
      function scrollBottom() {
        $timeout(function () {
          $ionicScrollDelegate.scrollBottom(true);
        });
      }

      scrollBottom();
      $scope.newMsg = {};

      // Function to send a new message in the conversation
      $scope.sendMessage = function () {
        $scope.newMsg._id = uuid2.newuuid();
        $scope.newMsg.sender = 'Tracey'; // TODO add current user
        $scope.newMsg.sentDate = new Date().toISOString();
        MessagesSrv.sendMessage($scope.chat, $scope.newMsg);
        $scope.newMsg = {};
        scrollBottom();
      };
    })

    // Creation of a new chat
    .controller('ChatAddCtrl', function ($scope, $location, uuid2, ChatsSrv) {
      $scope.chat = {};
      $scope.addChat = function () {
        $scope.chat._id = uuid2.newguid();
        $scope.chat.creationDate = new Date().toISOString();
        ChatsSrv.createChat($scope.chat);
        $location.path('/tab/chats');
      };
    });
})();
