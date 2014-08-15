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
                    this.lastEmail = email;
	            })
	            .error(function(data) {
	                deferred.reject(data);
	            });
        	return deferred.promise;
        },
        get: function(campaign_key, start, end) {
            var deferred = $q.defer();
            $http({
                    method: 'GET',
                    url: api_host+'/cp_key/'+campaign_key+'/start/'+start+'/end/'+end,
                })
                .success(function(data) {
                    deferred.resolve(data);
                    this.lastGetResponse;
                })
                .error(function(data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        },
        // TODO: everything below here is a crappy hardcoded hack
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
        },
        lastEmail : null,
        lastGetResponse: null
    }
})

.factory('Placements', function($http, $q) {
    var api_host = 'http://172.16.131.105:8080';
    // TODO: Don't judge me, I just want swiping to work. Swipe says these are the 4 campaigns to the right
    var placementRoutes = [
        '/tab/campaigns/ak0Y3lt4lr2RacUNYH03/placements/pu4SGl9ZGqOUL8KYaaHA',
        '/tab/campaigns/ak0Y3lt4lr2RacUNYH03/placements/5jfGJl01BH03u4RRjXJd',
        '/tab/campaigns/ak0Y3lt4lr2RacUNYH03/placements/KFM47IP8F9iT87YCTU4j',
        '/tab/campaigns/ak0Y3lt4lr2RacUNYH03/placements/FbRF9fFGcSICCXv6j9E3'
    ];

    var currentRoute = 0;
    
    return {
        get: function(campaign_key, placement_id, start, end) {
            var deferred = $q.defer();
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
        },
        // TODO: Everything below here is a hardcoded crappy hack
        getNextRoute: function() {
            if (currentRoute >= 0 && currentRoute < placementRoutes.length) {
                var route = placementRoutes[currentRoute];
                if (currentRoute !== placementRoutes.length - 1) {
                    currentRoute++;
                }
                return route;
            }

            return null;
        },
        getPrevRoute: function() {
            if (currentRoute >= 0 && currentRoute < placementRoutes.length){
                var route = placementRoutes[currentRoute];
                if (currentRoute !== 0) {
                    currentRoute--;
                }
                return route;
            }

            return null;
        }
    }
})

.factory('DateState', function() {
    var date = new Date(),
    	endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0),
    	currentDate = {
	        start: date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate(),
	        end: endDate.getFullYear()+'-'+(endDate.getMonth()+1)+'-'+endDate.getDate(),
	    };
    return {
        get: function() {
            return currentDate;
        },
        get_for_api: function() {
            var start_for_api = start;
        },
        set: function(start, end) {
            currentDate.start = start;
            currentDate.end = end;
        }

    }
});
