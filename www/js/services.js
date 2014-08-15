angular.module('starter.services', [])

.factory('Notification', function($http, $q) {
    // FIXME: Replace with API call

})
.factory('Campaigns', function($http, $q) {
    var api_host = 'http://172.16.131.105:8080';

    // TODO: Don't judge me, I just want swiping to work. Swipe says these are the 4 campaigns to the right
    var campaignRoutes = [
            '/tab/campaigns/cadreon.us@tubemogul.com/ak0Y3lt4lr2RacUNYH03',
            '/tab/campaigns/accuen.us@tubemogul.com/fn4fUF1wLGN7D5YX3vqX',
            '/tab/campaigns/btacy@doner.com/geLeRHA85447IMxdZh8E',
            '/tab/campaigns/rtb_tests@tubemogul.com/U99AkIDItAJ6KupW4cDF'
        ];

    var currentRoute = 0;

    return {
        all: function(email) {
        	var deferred = $q.defer();
	    	$http({
	    			method: 'GET',
	    			url: api_host+'/email/'+email,
	    		})
	    		.success(function(data) {
	                deferred.resolve(data);
                    lastAllResponse = data;
	            })
	            .error(function(data) {
	                deferred.reject(data);
	            });
        	return deferred.promise;
        },
        get: function(campaign_key) {
            var deferred = $q.defer()
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
        },
        getNextRoute: function() {
            if (currentRoute >= 0 && currentRoute < campaignRoutes.length) {
                var route = campaignRoutes[currentRoute];
                if (currentRoute !== campaignRoutes.length - 1) {
                    currentRoute++;
                }
                return route;
            }

            return null;
        },
        getPrevRoute: function() {
            if (currentRoute >= 0 && currentRoute < campaignRoutes.length){
                var route = campaignRoutes[currentRoute];
                if (currentRoute !== 0) {
                    currentRoute--;
                }
                return route;
            }

            return null;
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
})

.factory('DateState', function() {
    var date = new Date();
    var currentDate = {
        start: new Date(date.getFullYear(), date.getMonth(), 1),
        end: new Date(date.getFullYear(), date.getMonth() + 1, 0)
    };

    return {
        get: function() {
            return currentDate;
        },
        set: function(start, end) {
            currentDate.start = start;
            currentDate.end = end;
        }

    }
});
