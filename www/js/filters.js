angular.module('starter.filters', [])

.filter('toPercent', function() {
    return function(value) {
    	return value*100+'%';
    }
});
