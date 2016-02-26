/**
 * Created by pierreg on 24/02/16.
 */
(function () {
  'use strict';
  angular.module('whatsapp.controllers')

    // The whole list of chats
    .controller('ChatsCtrl', ['$scope', '$location', 'ChatsSrv', 'LoginSrv',
      function ($scope, $location, ChatsSrv, LoginSrv) {

        if (!LoginSrv.isLogged()) {
          $location.path('/login');
        }
        ChatsSrv.getChats().then(function (chats) {
          $scope.chats = chats;
        });

      }])

    // Messages of one chat
    .controller('ChatDetailCtrl', ['$scope', '$stateParams', '$location', '$ionicScrollDelegate', '$timeout', 'uuid2', 'ChatsSrv', 'MessagesSrv', 'LoginSrv',
      function ($scope, $stateParams, $location, $ionicScrollDelegate, $timeout, uuid2, ChatsSrv, MessagesSrv, LoginSrv) {

        if (!LoginSrv.isLogged()) {
          $location.path('/login');
        }
        ChatsSrv.getChat($stateParams.chatId).then(function (chat) {
          $scope.chat = chat;
        });
        MessagesSrv.getMessages($stateParams.chatId).then(function (messages) {
          $scope.messages = messages;
        });
        $scope.currentUser = LoginSrv.getUserConnected();

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
          $scope.newMsg.sender = $scope.currentUser.firstName;
          $scope.newMsg.sentDate = new Date().toISOString();
          MessagesSrv.sendMessage($scope.chat, $scope.newMsg);
          $scope.newMsg = {};
          scrollBottom();
        };

      }])

    // Creation of a new chat
    .controller('ChatAddCtrl', ['$scope', '$location', 'uuid2', 'ChatsSrv', 'LoginSrv',
      function ($scope, $location, uuid2, ChatsSrv, LoginSrv) {

        if (!LoginSrv.isLogged()) {
          $location.path('/login');
        }

        $scope.chat = {};
        $scope.addChat = function () {
          $scope.chat._id = uuid2.newguid();
          $scope.chat.creationDate = new Date().toISOString();
          ChatsSrv.createChat($scope.chat);
          $location.path('/tab/chats');
        };

      }]);
})();
