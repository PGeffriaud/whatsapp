/**
 * Created by pierreg on 24/02/16.
 */
(function () {
  'use strict';
  angular.module('whatsapp.services')
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

      this.createChat = function (chat) {
        return loadChats().then(function (chats) {
          chats.push(chat);
        });
      };
    }]);
})();
