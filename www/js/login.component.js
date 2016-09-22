/**
 * Created by mattpowell on 9/20/16.
 */

(function() {
  angular.module('starter')
    .component('login', {
      templateUrl:'templates/login.html',
      controller:loginController
    })
    .config(loginConfig);

  function loginController($firebaseAuth) {
    var self = this;
    self.authObj = $firebaseAuth();
    self.authObj.$signInWithPopup("google").then(function(result) {
      console.log("Signed in as:", result.user.uid);
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  }

  function loginConfig($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      template: "<login></login>"
    });
    var config = {
      apiKey: "AIzaSyD8yymwpm2Vdn3-iZ_xhDqSpyuqzlKNTSo",
      authDomain: "matc-gp.firebaseapp.com",
      databaseURL: "https://matc-gp.firebaseio.com",
      storageBucket: "matc-gp.appspot.com",
    };
    firebase.initializeApp(config);
  }
})();
