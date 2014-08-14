angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {
    
})

.controller('CampaignsCtrl', function($scope, Campaigns) {
    $scope.campaigns = Campaigns.all();
})

.controller('CampaignsDetailCtrl', function($scope, $stateParams, Campaigns) {
    $scope.campaign = Campaigns.get($stateParams.campaignId);
});