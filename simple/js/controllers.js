var app = angular.module('angularjs-starter', ['jsonService']);

app.controller('MainCtrl', function($scope, JsonService) {

   $scope.routes = [{"origin": "Bayreuth", "destination": "Pegnitz", "trips": [{"arrival": "2013-03-01T12:23:00", "departure": "2013-03-01T12:03:00"}, {"arrival": "2013-03-01T13:23:00", "departure": "2013-03-01T13:04:00"}, {"arrival": "2013-03-01T13:37:00", "departure": "2013-03-01T13:10:00"}, {"arrival": "2013-03-01T14:23:00", "departure": "2013-03-01T14:03:00"}]}, {"origin": "Bayreuth", "destination": "Kirchenlaibach", "trips": [{"arrival": "2013-03-01T11:56:00", "departure": "2013-03-01T11:40:00"}, {"arrival": "2013-03-01T12:45:00", "departure": "2013-03-01T12:30:00"}, {"arrival": "2013-03-01T13:33:00", "departure": "2013-03-01T13:11:00"}, {"arrival": "2013-03-01T13:56:00", "departure": "2013-03-01T13:40:00"}]}, {"origin": "Pegnitz", "destination": "Bayreuth", "trips": [{"arrival": "2013-03-01T11:56:00", "departure": "2013-03-01T11:36:00"}, {"arrival": "2013-03-01T12:55:00", "departure": "2013-03-01T12:38:00"}, {"arrival": "2013-03-01T13:56:00", "departure": "2013-03-01T13:36:00"}, {"arrival": "2013-03-01T14:55:00", "departure": "2013-03-01T14:38:00"}]}, {"origin": "Pegnitz", "destination": "Kirchenlaibach", "trips": [{"arrival": "2013-03-01T12:45:00", "departure": "2013-03-01T11:36:00"}, {"arrival": "2013-03-01T12:48:00", "departure": "2013-03-01T12:33:00"}, {"arrival": "2013-03-01T13:33:00", "departure": "2013-03-01T12:38:00"}, {"arrival": "2013-03-01T13:46:00", "departure": "2013-03-01T13:32:00"}]}, {"origin": "Kirchenlaibach", "destination": "Bayreuth", "trips": [{"arrival": "2013-03-01T12:28:00", "departure": "2013-03-01T12:15:00"}, {"arrival": "2013-03-01T13:28:00", "departure": "2013-03-01T13:13:00"}, {"arrival": "2013-03-01T14:18:00", "departure": "2013-03-01T14:02:00"}, {"arrival": "2013-03-01T14:28:00", "departure": "2013-03-01T14:15:00"}]}, {"origin": "Kirchenlaibach", "destination": "Pegnitz", "trips": [{"arrival": "2013-03-01T13:23:00", "departure": "2013-03-01T12:15:00"}, {"arrival": "2013-03-01T13:27:00", "departure": "2013-03-01T13:11:00"}, {"arrival": "2013-03-01T14:23:00", "departure": "2013-03-01T13:13:00"}, {"arrival": "2013-03-01T14:27:00", "departure": "2013-03-01T14:12:00"}]}];

  /*
  JsonService.get(function(routes){
    $scope.routes = routes;
  });
  */
});
