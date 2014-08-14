angular.module('starter.controllers', [])

.controller('login_controller', function($scope) {
    
})

.controller('campaigns_controller', function($scope, Campaigns) {
    $scope.campaigns = Campaigns.all();
})


.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope, $location) {
        $scope.signIn = function(user) {
            $location.path('tab/campaigns');
        }
    })

.controller('campaigns_detail_controller', function($scope, $stateParams, Campaigns) {
    $scope.campaign = Campaigns.get($stateParams.campaignId);
});
