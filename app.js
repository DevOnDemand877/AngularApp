 /**
 Listing: http://202.164.36.11/others/anuj/testing/test/pages/selectPosts.php
 ***/
 
 
 var mainApp = angular.module("mainApp", ['ngRoute']);
      
      mainApp.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/addStudent', {
                  templateUrl: 'templates/addStudent.html',
                  controller: 'addStudentController'
               }).
               when('/viewStudents', {
                  templateUrl: 'templates/list.html',
                  controller: 'userListController'
               }).
               when('/editStudent/:stdId', {
                  templateUrl: 'templates/editStudent.html',
                  controller: 'studentController'
               }).
               otherwise({
                  redirectTo: '/viewStudents'
               });
         }]);

		mainApp.controller('addStudentController',function($scope,$http) {
		var url="data.txt";
		   $http.get(url).success( function(response) {
				$scope.students = response;
			});
		});
   
       
		mainApp.controller('userListController',function($scope,$http) {
			var url="services/listing.txt";
			$http.get(url).success( function(response) {
				$scope.students = response;
			});
		});
		mainApp.controller('studentController', function($scope,$http,$routeParams) {
			$scope.stdId  = $routeParams.stdId;
			var url="services/single.txt";
			$http.get(url).success( function(response) {
				$scope.student = response;
				console.log($scope.student);
			});
		});