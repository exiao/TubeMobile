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