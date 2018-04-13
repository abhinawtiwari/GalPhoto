angular.module('galPhoto')

.factory('instagram', function($resource){
	return {
		fetchPopular: function(callback){
			var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
				client_id: '658817c0eeb94bf6bf52b033ef1bbe24'
			},{
				fetch:{method:'JSONP'}
			});

			api.fetch(function(response){
				callback(response.data);
			});
		}
	}
})
