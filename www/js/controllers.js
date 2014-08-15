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
    };
})

.controller('CampaignsCtrl', function($scope, Campaigns) {
    Campaigns.all('stanley.ng@themig.com').then(function(data) {
    	$scope.campaigns = data;
	    // Divide campaigns into 3 sets
	    var setSize = $scope.campaigns.length > 3 ? $scope.campaigns.length / 3 : 3;
	    $scope.testsCampaigns = $scope.campaigns.slice(setSize, setSize*2);
	    $scope.ticklesCampaigns = $scope.campaigns.slice(setSize*2, setSize*3);
    });
})

.controller('CampaignsDetailCtrl', function($scope, $stateParams, $http, Campaigns, Placements) {
    console.log($stateParams.campaignId);
    $scope.campaign = Campaigns.get($stateParams.campaignId);
    $scope.placements = Placements.all_by_campaign($scope.campaign.campaign_key);
    $scope.init = function() {
    	$scope.campaign_details = Campaigns.getDetails($scope.campaign.campaign_key);
    }
    $scope.isError = function(status) {
    	return status === 'error';
    }
    $scope.init();
})

.controller('PlacementsDetailCtrl', function($scope, $stateParams, Placements) {
    $scope.placement = Placements.get($stateParams.placementId);
    $scope.init = function() {
    	$scope.placement_details = Placements.getDetails($scope.placement.campaign_placement_key);
    }
    $scope.init();
});
