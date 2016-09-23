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
      if (provider === 'facebook') {
      }
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

    window.fbAsyncInit = function() {
      FB.init({
        appId: '{1760337584239123}',
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.5' // use graph api version 2.5
      });

      // Now that we've initialized the JavaScript SDK, we call
      // FB.getLoginStatus().  This function gets the state of the
      // person visiting this page and can return one of three states to
      // the callback you provide.  They can be:
      //
      // 1. Logged into your app ('connected')
      // 2. Logged into Facebook, but not your app ('not_authorized')
      // 3. Not logged into Facebook and can't tell if they are logged into
      //    your app or not.
      //
      // These three cases are handled in the callback function.
    }
  }
})();

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7&appId=1760337584239123";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
