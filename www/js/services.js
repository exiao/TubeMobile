angular.module('starter.services', [])

.factory('Campaigns', function() {
    var campaigns = [
        { id: 0, name: 'Campaign 0' },
        { id: 1, name: 'Campaign 1' },
        { id: 2, name: 'Campaign 2' },
        { id: 3, name: 'Campaign 3' }
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

.factory('Friends', function() {
    var friends = [
        { id: 0, name: 'Scruff McGruff' },
        { id: 1, name: 'G.I. Joe' },
        { id: 2, name: 'Miss Frizzle' },
        { id: 3, name: 'Ash Ketchum' }
    ];

    return {
        all: function() {
          return friends;
        },
        get: function(friendId) {
          return friends[friendId];
        }
    }
});