// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  });

var config = {
  apiKey: "AIzaSyD8yymwpm2Vdn3-iZ_xhDqSpyuqzlKNTSo",
  authDomain: "matc-gp.firebaseapp.com",
  databaseURL: "https://matc-gp.firebaseio.com",
  storageBucket: "matc-gp.appspot.com",
};
firebase.initializeApp(config);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('intro', {
      url: '/',
      templateUrl: 'templates/index.html',
      controller: 'IntroCtrl'
    })
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/"
    })
});
