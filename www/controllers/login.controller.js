 (function() {
  angular.module('starter')
    .controller('loginController', loginController);

  function loginController(User) {
    // component properties
    var vm = this;
    vm.showLogin = false;
    vm.email = undefined;
    vm.password = undefined;
    vm.displayName = User.displayName;
    vm.errorMessage = undefined;
    vm.playerData = [];

    // component functions
    vm.showEmailLogin = showEmailLogin;
    vm.login = login;
    vm.loginWithEmail = loginWithEmail;
    vm.logout = logout;
    vm.gameStart = gameStart;

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
    function gameStart() {
      console.log("send request to service");
      Game.gameStart();
    }

    window.fbAsyncInit = function() {
      FB.init({
        appId: '{1760337584239123}',
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.5' // use graph api version 2.5
      });
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
