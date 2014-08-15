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
})

.controller('DatePickerCtrl', function($scope) {

});
