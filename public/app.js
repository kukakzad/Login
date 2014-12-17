angular.module('App', ['App.service'])
.controller('AppController', ['$scope','Armoires', function($scope,Armoires) 
{
	        $scope.Pro = [];

$scope.add = function(user, pass) {
        Armoires.addItem(user, pass, function(data) {
            
        //  window.location.href="https://armoireapp.herokuapp.com/";   
        });
    };
$scope.addData = function(text) {
        Armoires.addData(text,localStorage.User, function(data) {
            
        //  window.location.href="https://armoireapp.herokuapp.com/";   
        });
    };

$scope.check = function(user, pass) {
        Armoires.check(user, pass, function(data) {
             $scope.Pro = data;
            var p=data[0].user;
        //    var n=data[0].name;
            localStorage.User= p;
        //    localStorage.Name= n;
        // if (localStorage.User!=""&&localStorage.Name!="") {
        //    window.location.href="https://armoireapp.herokuapp.com/";
        // };
     
        });

        
    };


}]);