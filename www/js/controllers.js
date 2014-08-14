angular.module('starter.controllers', [])

.controller('login_controller', function($scope) {
    
})

.controller('campaigns_controller', function($scope, Campaigns) {
    $scope.campaigns = Campaigns.all();
})

.controller('campaigns_detail_controller', function($scope, $stateParams, Campaigns) {
    $scope.campaign = Campaigns.get($stateParams.campaignId);
});