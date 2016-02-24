/**
 * Created by pierreg on 24/02/16.
 */
(function () {
  'use strict';

  angular.module('whatsapp.controllers', [])
    .controller('ContactsCtrl', function ($scope, ContactsSrv) {
      ContactsSrv.getContacts().then(function (contacts) {
        $scope.contacts = contacts;
      });
    });

})();
