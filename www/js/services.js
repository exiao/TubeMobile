angular.module('starter.services', [])

.factory('Campaigns', function() {
    var campaigns = [
        { id: 0, name: 'Campaign 0', detail0: 'detail0' },
        { id: 1, name: 'Campaign 1', detail0: 'detail0' },
        { id: 2, name: 'Campaign 2', detail0: 'detail0' },
        { id: 3, name: 'Campaign 3', detail0: 'detail0' }
    ];

    return {
        all: function() {
            return campaigns;
        },
        get: function(id) {
            return campaigns[id];
        }
    }
})
.factory('CampaignsTest', function($http) {
  // Might use a resource here that returns a JSON array

  // Get campaign data
  return {
    all: function() {
      $http({method: 'GET', url: 'http://stats-api-test01/data/v2/?partner_id=f7a342b291ae48ba67efb36d77b7fc4f873dc064&method=get_feed_by_time&account_id=409290&max_results=500&feed_id=c5C7ckU83rHywnIsw7RN&scope=account&start=2014-07-06&end=2014-08-12&timezone=Australia%2FSydney&date=1407883543&auth=cfda27092cbedb56fe739a9d1db34ea496caa41e'}).
        success(function(data, status, headers, config) {
         return data;
        }).
        error(function(data, status, headers, config) {
          return 'you suck';
        });
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }

});
