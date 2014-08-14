angular.module('starter.services', [])

.factory('Campaigns', function() {
    var campaigns = [
        { id: 0, key: '38Qq7nrw8ev9gKoW7p6m', name: 'Campaign 0', detail0: 'detail0' },
        { id: 1, key: 'geLeRHA85447IMxdZh8E', name: 'Campaign 1', detail0: 'detail0' }
    ];

    return {
        all: function() {
            return campaigns;
        },
        get: function(id) {
            return campaigns[id];
        }
    }
});