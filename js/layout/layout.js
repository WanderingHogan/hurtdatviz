var appLayout = angular.module('appLayout',['ngRoute', 'ui.bootstrap']);

appLayout.controller('layoutController', ['$scope', '$rootScope', 'stormData', function($scope, $rootScope, stormData){
	$scope.tabs = [
		{ title:'Main'},
		{ title:'Output'},
		{ title:'About'}
	];
	// $scope.stormData = stormData.processStorms().then(function(Data){
	// 	return Data;
	// });

	//layer toggler
	$scope.layerToggle = function(layer){
		$rootScope.$broadcast('baseLayerChange', layer);
	};
	//set specific button to start as active
	$scope.radioModel = 'Road';
}]);

angular.module( 'appLayout')
    .directive('mainTab',function(){
	    return {
	        restrict: 'E',
	        templateUrl: 'js/layout/partials/main-tab.tpl.html',
	        controller: 'layoutController'
	    };
	}).directive('outputTab',function(){
	    return {
	        restrict: 'E',
	        templateUrl: 'js/layout/partials/output-tab.tpl.html',
	        controller: 'layoutController'
	    };
	}).directive('aboutTab',function(){
	    return {
	        restrict: 'E',
	        templateUrl: 'js/layout/partials/about-tab.tpl.html',
	        controller: 'layoutController'
	    };
	});