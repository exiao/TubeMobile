angular.module('starter.filters', [])

.filter('formatPercent', function() {
    return function(value) {
    	return parseFloat(Math.round(value*100)/100)+'%';
    }
})
.filter('formatNumberCommas', function() {
    return function(value) {
    	return value.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
})
.filter('formatPrice', function() {
    return function(value) {
    	return '$'+(Math.round(value*100)/100).toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
})
.filter('limitString', function() {
    return function(str, chars) {
    	if(!chars) {
    		return str;
    	} else {
	    	return (str.length < chars ? str : str.substring(0, chars)+'...');
    	}
    }
});