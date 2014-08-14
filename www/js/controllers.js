angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {
    
})

.controller('CampaignsCtrl', function($scope, Campaigns) {
    $scope.campaigns = Campaigns.all();
})

.controller('CampaignsDetailCtrl', function($scope, $stateParams, Campaigns, Placements) {
    $scope.campaign = Campaigns.get($stateParams.campaignId);
    $scope.placements = Placements.all_by_username('justin.sung@tubemogul.com');
})

.controller('PlacementsDetailCtrl', function($scope, $stateParams, Placements) {
    $scope.placement = Placements.get($stateParams.placementId);
});