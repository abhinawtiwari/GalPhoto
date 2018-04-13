var app = angular.module('galPhoto',['ngRoute', 'ngResource', 'ngSanitize']);

app.config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider){
	$routeProvider.
		when('/gallery', {
			templateUrl: 'views/gallery.view.html',
			controller: 'GalleryCtrl'
		})
		.otherwise({redirectTo: '/gallery'});

		$sceDelegateProvider
		//.resourceUrlWhitelist(['^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?\(vimeo|youtube|api.instagram)\.com(/.*)?$', 'self']);
		.resourceUrlWhitelist(['^(?:https://api.instagram.com(/.*)?$', 'self']);
}]);
//https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK
