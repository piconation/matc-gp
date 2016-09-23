/**
 * Created by mattpowell on 9/20/16.
 */

(function() {
  angular.module('starter')
    .component('login', {
      templateUrl:'templates/login.html',
      controller:loginController,
      controllerAs: 'vm'
    })
    .config(loginConfig);

  function loginConfig($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      template: "<login></login>"
    });
  }

  function loginController(User) {
    // component properties
    var vm = this;
    vm.showLogin = false;
    vm.email = undefined;
    vm.password = undefined;
    vm.displayName = User.displayName;
    vm.errorMessage = undefined;

    // component functions
    vm.showEmailLogin = showEmailLogin;
    vm.login = login;
    vm.loginWithEmail = loginWithEmail;
    vm.logout = logout;

    function showEmailLogin() {
      vm.showLogin = !vm.showLogin;
    }

    function login(provider) {
      vm.errorMessage = undefined;
      User.login(provider)
        .then(function () {
          vm.displayName = User.displayName;
          vm.showLogin = false;
        });
    }

    function loginWithEmail() {
      vm.errorMessage = undefined;
      User.loginWithEmail(vm.email, vm.password)
        .then(function () {
          if (User.displayName) {
            vm.displayName = User.displayName;
            vm.showLogin = false;
            vm.password = undefined;
          } else {
            vm.errorMessage = "Error. Please try again.";
          }
        }, function(error) {
          vm.errorMessage = error.message;
        });
    }

    function logout() {
      User.logout();
      vm.displayName = undefined;
    }

  }
})();
