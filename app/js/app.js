var app = angular.module('myApp',['ngRoute']);
//定义路由表
//write---write.html
//recieve---recieve.html
//telbox---telbox.html
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/write',{
		templateUrl:'tips/write.html'
	}).when('/recieve',{
		templateUrl:'tips/recieve.html'
	}).when('/telbox',{
		templateUrl:'tips/telbox.html'
	}).when('/first',{
		templateUrl:'tips/first.html'
	}).otherwise({redirectTo:'/first'})
}])
