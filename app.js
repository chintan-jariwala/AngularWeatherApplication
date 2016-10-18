(function(){

  'use strict';

  var app = angular.module('weatherApp', []);

  app.controller('MainCtrl', ['$scope','$http',function($scope,$http){
    $scope.APIKEY = "YOUR API KEY GOES HERE";
    $scope.test = 'My Weather Application';
    $scope.city = "";
    $scope.details = "";
    $scope.places = [];
    function weatherData(city, weather){
      this.city = city;
      this.weather = weather;
    }

    $scope.searchWeather= function(){
      console.log($scope.city);
      $http.get("http://api.openweathermap.org/data/2.5/weather?q="+$scope.city+"&&appid="+$scope.APIKEY)
    .then(
      function(response){
        $scope.details = response.data;
        console.log($scope.details.weather[0].description);
        $scope.places.push(new weatherData($scope.city,$scope.details.weather[0].description));
      });

    }



  }]);

})()
