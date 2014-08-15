angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $location) {
    $scope.signIn = function(user) {
        $location.path('/tab/campaigns');
    };
})

.controller('CampaignsCtrl', function($scope, Campaigns) {
    $scope.campaigns = Campaigns.all();

    // Divide campaigns into 3 sets
    var setSize = $scope.campaigns.length / 3;
    $scope.myCampaigns = $scope.campaigns.slice(0, setSize);
    $scope.testsCampaigns = $scope.campaigns.slice(setSize, setSize*2);
    $scope.ticklesCampaigns = $scope.campaigns.slice(setSize*2, setSize*3);
})

.controller('CampaignsDetailCtrl', function($scope, $stateParams, $http, Campaigns, Placements) {
    console.log($stateParams.campaignId);
    $scope.campaign = Campaigns.get($stateParams.campaignId);
    $scope.placements = Placements.all_by_campaign($scope.campaign.campaign_key);
    $scope.init = function() {
    	$scope.campaign_details = $scope.getCampaignDetail($scope.campaign.campaign_placement_key);
    }
    $scope.isError = function(status) {
    	return status === 'error';
    }
    $scope.getCampaignDetail = function(key) {
    	/* TODO: Use Stats API to get campaign details */
    	var data = {
    		impressions: 100000,
    		completion_rate: .85,
    		click_rate: 1.25,
    		cost: 1000
    	}
    	return data;
    	/*
    	$http({
    			method: 'GET',
    			url: '',
    			data: {campaign_key: key}
    		})
    		.success(function(data) {
    			console.log(data);
    			$scope.current_campaign = data;
    		});
		*/
    }
    $scope.init();
})

.controller('PlacementsDetailCtrl', function($scope, $stateParams, Placements) {
    $scope.placement = Placements.get($stateParams.placementId);
})

.controller('DatePickerCtrl', function($scope) {

});
