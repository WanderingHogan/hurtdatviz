var appLayout = angular.module('appLayout',['ngRoute', 'ui.bootstrap']);

appLayout.controller('layoutController', ['$scope', '$window', 'stormData', function($scope, $window, stormData){
	$scope.tabs = [
		{ title:'Main'},
		{ title:'Output'},
		{ title:'About'}
	];
	$scope.stormData = stormData.processStorms().then(function(Data){
		return Data;
	});
}]);

angular.module( 'appLayout')
    .directive('mainTab',function(){
	    return {
	        restrict: 'E',
	        templateUrl: 'js/layout/partials/main-tab.tpl.html'
	    };
	}).directive('outputTab',function(){
	    return {
	        restrict: 'E',
	        templateUrl: 'js/layout/partials/output-tab.tpl.html'
	    };
	}).directive('aboutTab',function(){
	    return {
	        restrict: 'E',
	        templateUrl: 'js/layout/partials/about-tab.tpl.html'
	    };
	});