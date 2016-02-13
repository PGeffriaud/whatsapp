(function () {
  'use strict';

  angular.module('starter.services', [])

    .factory('Contacts', function () {

      // Some fake testing data
      var contacts = [
        {
          "_id": "56bdabc05a103fcd46d81282",
          "firstName": "Tracey",
          "lastName": "Hoover",
          "email": "traceyhoover@biotica.com",
          "picture": "images/default.png"
        },
        {
          "_id": "56bdabc0f476b54f85304500",
          "firstName": "Hunt",
          "lastName": "Russell",
          "email": "huntrussell@biotica.com",
          "picture": "images/default.png"
        },
        {
          "_id": "56bdabc099ac746e3431b274",
          "firstName": "Cabrera",
          "lastName": "Yates",
          "email": "cabrerayates@biotica.com",
          "picture": "images/default.png"
        },
        {
          "_id": "56bdabc0f0380d1af47be561",
          "firstName": "Althea",
          "lastName": "Adkins",
          "email": "altheaadkins@biotica.com",
          "picture": "images/default.png"
        },
        {
          "_id": "56bdabc0e5832ad323798d1e",
          "firstName": "Eileen",
          "lastName": "Rodgers",
          "email": "eileenrodgers@biotica.com",
          "picture": "images/default.png"
        },
        {
          "_id": "56bdabc0ee35ffc71e19ce92",
          "firstName": "Dejesus",
          "lastName": "Baird",
          "email": "dejesusbaird@biotica.com",
          "picture": "images/default.png"
        },
        {
          "_id": "56bdabc0d31185378be92efe",
          "firstName": "Jeanine",
          "lastName": "Kidd",
          "email": "jeaninekidd@biotica.com",
          "picture": "images/default.png"
        },
        {
          "_id": "56bdabc087701f2a6fea3a2b",
          "firstName": "Helga",
          "lastName": "Byrd",
          "email": "helgabyrd@biotica.com",
          "picture": "images/default.png"
        },
        {
          "_id": "56bdabc00b44bbd46f349943",
          "firstName": "Lancaster",
          "lastName": "Morris",
          "email": "lancastermorris@biotica.com",
          "picture": "images/default.png"
        },
        {
          "_id": "56bdabc0ad56beec78ca93a2",
          "firstName": "Dianna",
          "lastName": "Jones",
          "email": "diannajones@biotica.com",
          "picture": "images/default.png"
        }
      ];

      return {
        all: function () {
          return contacts;
        },
        remove: function (c) {
          contacts.splice(contacts.indexOf(c), 1);
        },
        get: function (cId) {
          for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].id === parseInt(cId)) {
              return contacts[i];
            }
          }
          return null;
        }
      };
    });
})();
