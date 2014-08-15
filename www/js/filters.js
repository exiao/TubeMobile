angular.module('starter.filters', [])

.filter('formatPercent', function() {
    return function(value) {
    	return parseInt(value)+'%';
    }
})
.filter('formatNumberCommas', function() {
    return function(value) {
    	return value.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
})
.filter('formatPrice', function() {
    return function(value) {
    	return '$' + Math.round(value*100)/100;
    }
});
