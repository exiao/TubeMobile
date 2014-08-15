angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $location) {
    $scope.signIn = function(user) {
        $location.path('/tab/campaigns');
    };
})

.controller('CampaignsCtrl', function($scope, Campaigns) {
    Campaigns.all('rtb_tests@tubemogul.com').then(function(data) {
    	$scope.rtb_tests_campaigns = data;
    });
    Campaigns.all('cadreon.us@tubemogul.com').then(function(data) {
        $scope.cadreon_campaigns = data;
    });
    Campaigns.all('accuen.us@tubemogul.com').then(function(data) {
        $scope.accuen_campaigns = data;
    });
    Campaigns.all('btacy@doner.com').then(function(data) {
        $scope.btacy_campaigns = data;
    });
})

.controller('CampaignsDetailCtrl', function($scope, $stateParams, $http, Campaigns, Placements) {
    Campaigns.all($stateParams.email).then(function(data) {
        $scope.campaign = data[0];
        $scope.campaign.campaign_key = $stateParams.campaignKey;
        Campaigns.get($scope.campaign.campaign_key).then(function(data) {
            $scope.click_rate = data.response.ctr;
            $scope.completion_rate = data.response.pct_completions_100;
            $scope.cost = data.response.cost / 1000000.0;
            $scope.impressions = data.response.impressions;
            $scope.placements = data.response.details.entry;
        });
        
        if ($stateParams.email == 'cadreon.us@tubemogul.com')
            $scope.campaign.campaign_name = "2014 Johnson's Baby NMT Video";
        else if ($stateParams.email == 'accuen.us@tubemogul.com')
            $scope.campaign.campaign_name = 'Mitsubishi Q2 Upper Funnel 2014';
        else if ($stateParams.email == 'btacy@doner.com')
            $scope.campaign.campaign_name = '2014 Detroit Zoo Summer Plan';
    });
})

.controller('PlacementsDetailCtrl', function($scope, $stateParams, Placements) {
    Placements.get($stateParams.campaignKey, $stateParams.placementId).then(function(data) {
        $scope.click_rate = data.response.ctr;
        $scope.completion_rate = data.response.pct_completions_100;
        $scope.placement = data.response.details.entry;
        
        $scope.cost = $scope.placement.cost / 1000000.0;
        $scope.impressions = $scope.placement.impressions;
    });
});