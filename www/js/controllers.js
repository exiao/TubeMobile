angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $location) {
    $scope.signIn = function(user) {
        $location.path('/tab/campaigns');
    };
})

.controller('CampaignsCtrl', function($scope, Campaigns) {
    $scope.campaigns = Campaigns.all();
})

.controller('CampaignsDetailCtrl', function($scope, $stateParams, Campaigns) {
    $scope.campaign = Campaigns.get($stateParams.campaignId);
});
