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
    $scope.campaign = Campaigns.get($stateParams.campaignId);
    $scope.placements = Placements.all_by_username('justin.sung@tubemogul.com');
    $scope.isError = function(status) {
    	return status === 'error';
    }
})

.controller('PlacementsDetailCtrl', function($scope, $stateParams, Placements) {
    $scope.placement = Placements.get($stateParams.placementId);
})

.controller('DatePickerCtrl', function($scope) {

})
;
