/**
 * Created by mattpowell on 9/20/16.
 */

(function() {
  angular.module('starter')
    .component('login', {
      templateUrl:'templates/login.html',
      controller:loginController(firebaseService)
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
    })
  }
})();
