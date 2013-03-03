'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
//angular.module('myApp.services', []).
//  value('version', '0.1');

angular.module('jsonService', ['ngResource'])
.factory('JsonService', function($resource) {
  // Load dummy data
  return $resource('trips.json');
});
