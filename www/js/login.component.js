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
  }

  function loginConfig($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      template: "<login></login>"
    })
  }
})();
