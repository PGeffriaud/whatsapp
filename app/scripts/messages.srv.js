(function () {
  'use strict';

  angular.module('whatsapp.services')
    .service('MessagesSrv', ['$http', '$q', function ($http, $q) {
      var messages;

      function loadMessages() {
        if (!messages) {
          return $http.get('json/messages.json').then(function (response) {
            messages = response.data;
            return messages;
          }, function (error) {
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
        // in the case of the chat does not exist in messages.json
        messages.push({
          'chatId': chatId,
          'messages': []
        });
        return messages[messages.length - 1].messages;
      }

      this.getMessages = function (chatId) {
        return loadMessages().then(function () {
          return getMessagesFromChatId(chatId);
        });
      };

      this.sendMessage = function (chat, message) {
        loadMessages().then(function () {
          getMessagesFromChatId(chat._id).push(message);
        });
      };
    }]);
})();
