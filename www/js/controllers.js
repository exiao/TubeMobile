angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $location, $timeout) {
	$scope.loadingScreen = function() {
		$scope.overlay_on = true;
		var endOverlay = function() {
			$scope.overlay_on = false;
		}
		var endAnimation = function() {
			$scope.overlay_animate = false;
			$location.path('/tab/campaigns');
		}
		var startAnimation = function() {
			$scope.overlay_animate = true;
			$timeout(endAnimation, 3800);
		}
		$timeout(startAnimation, 50);
	}
    $scope.signIn = function(user) {
    	$scope.loadingScreen();
        // $location.path('/tab/campaigns');
    }
})

.controller('CampaignsCtrl', function($scope, Campaigns) {
    Campaigns.all('rtb_tests@tubemogul.com').then(function(data) {
    	$scope.campaigns = data;
	    // Divide campaigns into 3 sets
	    var setSize = $scope.campaigns.length > 3 ? $scope.campaigns.length / 3 : 3;
	    $scope.testsCampaigns = $scope.campaigns.slice(setSize, setSize*2);
	    $scope.ticklesCampaigns = $scope.campaigns.slice(setSize*2, setSize*3);
    });
})

.controller('CampaignsDetailCtrl', function($scope, $stateParams, $http, Campaigns, Placements) {
    Campaigns.all('rtb_tests@tubemogul.com').then(function(data) {
        $scope.campaign = data[0];
        $scope.campaign.campaign_key = 'U99AkIDItAJ6KupW4cDF';
        Campaigns.get($scope.campaign.campaign_key).then(function(data) {
            $scope.cost = data.response.cost;
            $scope.impressions = data.response.impressions;
            $scope.placements = data.response.details.entry;
        });
    });
})

.controller('PlacementsDetailCtrl', function($scope, $stateParams, Placements) {
    Placements.get($stateParams.campaignKey, $stateParams.placementId).then(function(data) {
        $scope.placement = data.response.details.entry;
        $scope.cost = $scope.placement.cost;
        $scope.impressions = $scope.placement.impressions;
    });
});
