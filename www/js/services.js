angular.module('starter.services', [])

.factory('Notification', function($http, $q) {
    // FIXME: Replace with API call

})
.factory('Campaigns', function($http, $q) {
    var api_host = 'http://172.16.131.105:8080';

    return {
        all: function(email) {
        	var deferred = $q.defer();
	    	$http({
	    			method: 'GET',
	    			url: api_host+'/email/'+email,
	    		})
	    		.success(function(data) {
	                deferred.resolve(data);
	            })
	            .error(function(data) {
	                deferred.reject(data);
	            });
        	return deferred.promise;
        },
        get: function(campaign_key) {
            var deferred = $q.defer(),
                start = '2014-08-02',
                end = '2014-09-12';
            $http({
                    method: 'GET',
                    url: api_host+'/cp_key/'+campaign_key+'/start/'+start+'/end/'+end,
                })
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        }
    }
})

.factory('Placements', function($http, $q) {
    var api_host = 'http://172.16.131.105:8080';
    
    return {
        get: function(campaign_key, placement_id) {
            var deferred = $q.defer(),
                start = '2014-08-02',
                end = '2014-09-12';
            $http({
                    method: 'GET',
                    url: api_host+'/cp_key/'+campaign_key+'/placement_id/'+placement_id+'/start/'+start+'/end/'+end,
                })
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        }
    }
});
