// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.filters' is found in filters.js
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.filters'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })
    
    .state('tab.campaigns', {
        url: '/campaigns',
        views: {
            'tab-campaigns': {
                templateUrl: 'templates/tab-campaigns.html',
                controller: 'CampaignsCtrl'
            }
        }
    })
    .state('tab.campaign-detail', {
        url: '/campaigns/:campaignKey',
            views: {
                'tab-campaigns': {
                templateUrl: 'templates/campaigns-detail.html',
                controller: 'CampaignsDetailCtrl'
            }
        }
    })
    .state('tab.placement-detail', {
        url: '/campaigns/:campaignKey/placements/:placementId',
            views: {
                'tab-campaigns': {
                templateUrl: 'templates/placements-detail.html',
                controller: 'PlacementsDetailCtrl'
            }
        }
    })

//      .state('tab.date-picker'), {
//      url: '/date-picker',
//      views: {
//          'tab-date-picker': {
//              templateUrl: 'templates/tab-date-picker.html',
//              controller: ''
//          }
//      }
//  }

    .state('login', {
        url: '/login',
        controller: 'LoginCtrl',
        templateUrl: "templates/login.html"
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/campaigns');
});