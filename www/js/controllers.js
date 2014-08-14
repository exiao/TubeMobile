angular.module('starter.controllers', [])

.controller('campaigns_controller', function($scope, Campaigns) {
    $scope.campaigns = Campaigns.all();
})

.controller('FriendsCtrl', function($scope, Friends) {
    $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
