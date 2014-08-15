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

.controller('CampaignsDetailCtrl', function($scope, $stateParams, $http, Campaigns, Placements, DateState, $location) {
	var start = DateState.get().start;
	var end = DateState.get().end;
    Campaigns.all($stateParams.email).then(function(data) {
        $scope.campaign = data[0];
        $scope.campaign.campaign_key = $stateParams.campaignKey;
        
        Campaigns.get($scope.campaign.campaign_key, start, end).then(function(data) {
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
    $scope.dateState = DateState.get();


    $scope.onSwipeRight = function() {
        var nextRoute = Campaigns.getNextRoute();
        if (nextRoute) {
            $location.path(nextRoute);
        }
    }

    $scope.onSwipeLeft = function() {
        var prevRoute = Campaigns.getPrevRoute()
        if (prevRoute) {
            $location.path(prevRoute);
        }
    }
})

.controller('PlacementsDetailCtrl', function($scope, $stateParams, Placements, DateState, $location, Campaigns) {
	var email = Campaigns.lastEmail ? Campaigns.lastEmail : 'cadreon.us@tubemogul.com';
	$scope.back_link = '#/tab/campaigns/'+email+'/'+$stateParams.campaignKey;
	var start = DateState.get().start;
	var end = DateState.get().end;
    console.log('i ran');
    Placements.get($stateParams.campaignKey, $stateParams.placementId, start, end).then(function(data) {
        $scope.click_rate = data.response.ctr;
        $scope.completion_rate = data.response.pct_completions_100;
        $scope.placement = data.response.details.entry;
        
        $scope.cost = $scope.placement.cost / 1000000.0;
        $scope.impressions = $scope.placement.impressions;
    });

    console.log('i ran too');
    $scope.dateState = DateState.get();

    console.log($scope.dateState);

    // TODO: duplicated and campaign detail
    $scope.onSwipeRight = function() {
        var nextRoute = Placements.getNextRoute();
        if (nextRoute) {
            $location.path(nextRoute);
        }
    }

    $scope.onSwipeLeft = function() {
        var prevRoute = Placements.getPrevRoute()
        if (prevRoute) {
            $location.path(prevRoute);
        }
    }
})

.controller('DatePickerCtrl', function($scope, $ionicNavBarDelegate, DateState) {
    $scope.goBack = function() {
        $ionicNavBarDelegate.back();
    };

    $scope.updateDateState = function (start, end) {
        DateState.set(start, end);
        $scope.goBack();
    }

    $scope.dateState = DateState.get();
});
