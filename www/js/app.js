// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider,$httpProvider) {

    $ionicConfigProvider.tabs.position('bottom');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('signin', {
        url: '/sign-in',
        templateUrl: 'templates/login.html',
        controller: 'SignInCtrl'
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })


    .state('tab.writeBlog', {
        url: '/writeBlog',
        views: {
        'tab-dash': {
         templateUrl: 'newTemplate/writeBlog.html',
         controller: 'blogPostCtrl'
         }
     }
    })

     .state('tab.blog.All', {
        url: '/tab.dash-All',
        views: {
        'tab-dash': {
         templateUrl: 'newTemplate/subCategory.html',
         controller: 'blogPostCtrl'
         }
     }
    })
    

    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'newTemplate/dashboard.html',
                controller: 'DashboardCtrl'
            }
        }
    })

    .state('tab.dash-subCategory', {
        url: '/tab.dash-subCategory',
        views: {
        'tab-dash': {
        templateUrl: 'newTemplate/subCategory.html',
        controller: 'CategoryCtrl'
            }
        }
    })
     .state('tab.dash-postDetails', {
        url: '/tab.dash-postDetails',
        views: {
        'tab-dash':{
        templateUrl: 'newTemplate/selectedPostDetails.html',
        controller: 'postDetailsCtrl'
        }
        }
    })

    .state('tab.dash-subCategoryDetails1', {
        url: '/tab.dash-subCategoryDetails1',
        views: {
        'tab-dash':{
        templateUrl: 'newTemplate/subCategoryDetails.html',
        controller: 'subCategoryDetails1Ctrl'
          }
        }
    })
     .state('tab.dash-subCategoryDetails2', {
        url: '/tab.dash-subCategoryDetails2',
        views: {
        'tab-dash':{
        templateUrl: 'newTemplate/subCategoryDetails2.html',
        controller: 'subCategoryDetails2Ctrl'
          }
        }
    })


    .state('tab.dash-subCategoryInnovate', {
        url: '/tab.dash-subCategoryInnovate',
        views: {
        'tab-dash': {
        templateUrl: 'newTemplate/subCategoryInnovate.html',
        controller: 'InnovateCategoryCtrl'
            }
        }
    })

     .state('tab.dash-subCategoryExternal', {
        url: '/tab.dash-subCategoryExternal',
        views: {
        'tab-dash': {
        templateUrl: 'newTemplate/subCategoryExternal.html',
        controller: 'ExternalCategoryCtrl'
            }
        }
    })

     .state('tab.dash-subCategoryGroup', {
            url: '/tab.dash-subCategoryGroup',
            views: {
            'tab-dash': {
            templateUrl: 'newTemplate/subCategoryGroup.html',
            controller: 'GroupCategoryCtrl'
                }
            }
        })
      .state('tab.dash-subCategoryCommunity', {
            url: '/tab.dash-subCategoryCommunity',
            views: {
            'tab-dash': {
            templateUrl: 'newTemplate/subCategoryCommunity.html',
            controller: 'CommunityCategoryCtrl'
                }
            }
        })
    

    .state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/tab-chats.html',
                    controller: 'ChatsCtrl'
                }
            }
    })

    .state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/chat-detail.html',
                    controller: 'ChatDetailCtrl'
                }
            }
    })

    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    })

    .state('tab.profile', {
        url: '/profile',
        views: {
            'tab-profile': {
                templateUrl: 'templates/tab-profile.html',
                controller: 'ProfileCtrl'
            }
        }
    })

    .state('tab.notifications', {
        url: '/notifications',
        views: {
            'tab-notifications': {
                templateUrl: 'newTemplate/Notification/notificationInDetails.html',
                controller: 'NotificationsCtrl'
            }
        }
    })

    .state('tab.logout', {
        url: '/logout',
        views: {
            'tab-logout': {
                templateUrl: 'templates/tab-logout.html',
                controller: 'LogoutCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/sign-in');
   
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common = 'Content-Type: application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];


});