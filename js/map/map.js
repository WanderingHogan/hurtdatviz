var mapStuff = angular.module('mapStuff',['ngRoute']);

mapStuff.controller('mapController', ['$scope', 'stormData',
	function($scope, stormData){

			// default baltimore starts
		    var startX = 39.290452,
		        startY = -76.614090,
		        startZ = 13;


		    var map = L.map('map',{
		    	'inertia': false,
		        'minZoom': 11,
		        'maxZoom': 6,
		        'zoomControl': false, 
		        'scrollWheelZoom': false
		    }).setView([startX, startY], startZ);

		    this.basemap = L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
		        'maxZoom': 18,
		        'attribution': '© mapbox',
		        'id': 'examples.map-20v6611k'
		    }).addTo(map);

		    this.satellite = L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
		        'maxZoom': 18,
		        'attribution': '© mapbox',
		        'id': 'mapbox.streets'
		    }).addTo(map);
	//
}]);

mapStuff.directive('map', function() {
	return {
		templateUrl: 'js/layout/partials/map.tpl.html',
		restrict: 'E',
		controller: 'mapController'

	};
});