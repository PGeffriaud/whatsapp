(function () {
  'use strict';

  angular.module('whatsapp.services', [])
    .service('ChatsSrv', ['$http', '$q', function ($http, $q) {
      var chats;

      function loadChats() {
        if (!chats) {
          return $http.get('json/chats.json').then(function (response) {
            chats = response.data;
            return chats;
          }, function (error) {
            console.log('Request failed: ' + error);
          });
        } else {
          return $q.when(chats);
        }
      }

      function getChatIndexFromId(id) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i]._id === id) {
            return i;
          }
        }
      }

      this.getChats = function () {
        return loadChats();
      };

      this.getChat = function (id) {
        return loadChats().then(function () {
          return chats[getChatIndexFromId(id)];
        });
      };
    }])
    .service('ContactsSrv', ['$http', '$q', function ($http, $q) {
      var contacts;

      function loadContacts() {
        if (!contacts) {
          return $http.get('json/contacts.json').then(function (response) {
            contacts = response.data;
            return contacts;
          }, function (error) {
            console.log('Request failed: ' + error);
          });
        } else {
          return $q.when(contacts);
        }
      }

      this.getContacts = function(){
        return loadContacts();
      };

    }])
    .service('MessagesSrv', ['$http', '$q', function($http, $q) {
      var messages;

      function loadMessages() {
        if(!messages) {
          return $http.get('json/messages.json').then(function(response) {
            messages = response.data;
            return messages;
          }, function (error){
            console.log('Request failed: ' + error);
          });
        } else {
          return $q.when(messages);
        }
      }

      function getMessagesFromChatId(chatId) {
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].chatId === chatId) {
            return messages[i].messages;
          }
        }
      }

      this.getMessages = function (chatId) {
        return loadMessages().then(function () {
          return getMessagesFromChatId(chatId);
        });
      };
    }]);
})();
