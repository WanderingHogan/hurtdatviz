var mapStuff = angular.module('mapStuff',['ngRoute']);

mapStuff.controller('mapController', ['$scope', 'stormData', 
	function($scope, stormData){
		console.log('hey');

	//
}]);

'use strict';

mapStuff.directive('map', ['$rootScope', '$scope',
	function($rootScope, $scope) {
		
		return {
			templateUrl: 'js/layout/partials/map.tpl.html',
			restrict: 'E',
			controller: 'mapController',
			link: function (scope, element, attrs) {
				// default baltimore starts
			    var startX = 39.290452,
			        startY = -76.614090,
			        startZ = 13,
			        tractsQueue = [],
			        isMapMoving = false;

			    var tractLayer,
			        geocodedMarkers = [];

			    var map = L.map('map',{
			    	'inertia': false,
			        'minZoom': 11,
			        'maxZoom': 16,
			        'zoomControl': false, 
			        'scrollWheelZoom': false
			    }).setView([startX, startY], startZ);

			    window.basemap = L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			        'maxZoom': 18,
			        'attribution': '© mapbox',
			        'id': 'examples.map-20v6611k'
			    }).addTo(map);

		    }

		};
	}
]);