(function () {
  'use strict';

  angular.module('starter.services', [])
    .factory('Chats', function(){
      // Some fake testing chats
      var chats = [
        {
          "_id": "56c20618aa880f8fee6c265f",
          "name": "enim",
          "description": "Duis proident anim eiusmod enim ut sint et minim occaecat amet ea.",
          "creationDate": "Mon Feb 15 2016 18:08:40 GMT+0100 (CET)"
        },
        {
          "_id": "56c206187edc1d013e664a8d",
          "name": "ullamco",
          "description": "Nulla amet nisi sunt enim ad nisi laborum in ad esse nulla anim id velit.",
          "creationDate": "Mon Feb 15 2016 18:08:40 GMT+0100 (CET)"
        },
        {
          "_id": "56c20618ef23c3fee2c3ab04",
          "name": "commodo",
          "description": "Magna esse mollit est pariatur dolor pariatur exercitation ex.",
          "creationDate": "Mon Feb 15 2016 18:08:40 GMT+0100 (CET)"
        },
        {
          "_id": "56c206186b0bf0bccea50f24",
          "name": "eu",
          "description": "Amet consequat officia qui magna laborum Lorem commodo do.",
          "creationDate": "Mon Feb 15 2016 18:08:40 GMT+0100 (CET)"
        },
        {
          "_id": "56c20618170b57cb126ae703",
          "name": "ea",
          "description": "Consectetur laboris in eiusmod ad fugiat.",
          "creationDate": "Mon Feb 15 2016 18:08:40 GMT+0100 (CET)"
        },
        {
          "_id": "56c206188289245138001e5f",
          "name": "sint",
          "description": "Deserunt est esse quis aute tempor cillum.",
          "creationDate": "Mon Feb 15 2016 18:08:40 GMT+0100 (CET)"
        },
        {
          "_id": "56c2061869621dc86904da5d",
          "name": "deserunt",
          "description": "Minim proident eiusmod irure aute dolore mollit.",
          "creationDate": "Mon Feb 15 2016 18:08:40 GMT+0100 (CET)"
        },
        {
          "_id": "56c206189be3892a4613687c",
          "name": "esse",
          "description": "Magna id do proident in veniam cillum eu.",
          "creationDate": "Mon Feb 15 2016 18:08:40 GMT+0100 (CET)"
        },
        {
          "_id": "56c2061837bd928835e92705",
          "name": "magna",
          "description": "Ipsum tempor amet tempor anim nulla ea proident proident dolore reprehenderit esse consectetur.",
          "creationDate": "Mon Feb 15 2016 18:08:40 GMT+0100 (CET)"
        },
        {
          "_id": "56c2061816426eb386ec7cb3",
          "name": "enim",
          "description": "Deserunt pariatur ullamco adipisicing eiusmod magna tempor.",
          "creationDate": "Mon Feb 15 2016 18:08:40 GMT+0100 (CET)"
        }
      ];
      return {
        all: function () {
          return chats;
        },
        get: function (cId) {
          for (var i = 0; i < chats.length; i++) {
            if (chats[i]._id == cId) {
              return chats[i];
            }
          }
          return null;
        }
      };
    })
    .factory('Contacts', function () {

      // Some fake testing contacts
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
        }
      };
    });
})();
