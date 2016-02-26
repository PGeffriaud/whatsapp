/**
 * Created by pierreg on 24/02/16.
 */
(function () {
  'use strict';
  angular.module('whatsapp.services', [])
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

      this.getContacts = function () {
        return loadContacts();
      };

      this.addContact = function (contact) {
        loadContacts().then(function (contacts) {
          contacts.push(contact);
        });
      };

    }]);
})();
