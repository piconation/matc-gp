(function () {

  angular.module('starter')
    .service('User', User);

  function User($firebaseAuth, $firebaseObject, $log, $q, $ionicPopup, $state) {

    // User properties
    var self = this;
    self.displayName = undefined; // used to determine if user is logged in
    self.playerData = [];

    // User functions
    self.login = login;
    self.loginWithEmail = loginWithEmail;
    self.logout = logout;
    self.gameStart = gameStart;
    self.loadGame = loadGame;

    var userData = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyD8yymwpm2Vdn3-iZ_xhDqSpyuqzlKNTSo:[DEFAULT]'));
    self.displayName = userData ? userData.displayName || userData.email : undefined;
    self.playerData = userData ? userData.playerData : [];

    // login with third-party provider
    function login(provider) {
      var auth = $firebaseAuth();
      return auth.$signInWithPopup(provider)
        .then(loginSuccess)
        .catch(loginError);
    }

    function loginWithEmail(email, password) {
      var auth = $firebaseAuth();
      return auth.$createUserWithEmailAndPassword(email, password)
        .then(function () {
          auth.$signInWithEmailAndPassword(email, password)
            .then(loginSuccess)
            .catch(loginError);
        }, function (error) {
          if (error.code == "auth/weak-password") {
            loginError(error);
          } else if (error.code === "auth/email-already-in-use") {
            auth.$signInWithEmailAndPassword(email, password)
              .then(loginSuccess)
              .catch(loginError);
          } else {
            $log.error(error);
          }
        })
        .catch(loginError);
    }

    function logout() {
      var auth = $firebaseAuth();
      $log.log(self.displayName + " has been logged out.");
      auth.$signOut();
    }

    function gameStart() {
      //If game exists, prompt to start new game.
      if (self.playerData) {
        $scope.showConfirm = function () {
          var confirmPopup = $ionicPopup.confirm({
            title: 'Create New Game?',
            template: 'Are you sure you want to overwrite your existing game with a new game?'
          });

          confirmPopup.then(function (res) {
            if (res) {
              //reset game and go to game screen
              console.log('Yes I want to overwrite my existing game and start a new game.');
            } else {
              //leave them there.
              console.log('No, I do not want to start a new game.');
            }
          });
        };
      }
    }

    function loadGame() {
      if (self.playerData){
        //go to game screen(homebase JS).
        $state.go('app.homebase');
      }
    }

    // User private functions
    function loginSuccess(firebaseUser) {
      var deferred = $q.defer();
      $log.log(firebaseUser);

      var providerUser = firebaseUser.user ? firebaseUser.user : firebaseUser;
      var ref = firebase.database().ref("users");
      var profileRef = ref.child(providerUser.uid);

      self.user = $firebaseObject(profileRef);
      self.user.$loaded().then(function () {
        if (!self.user.displayName) {
          $log.log("Logging in...");
          profileRef.set({
            displayName: providerUser.displayName || providerUser.email,
            email: providerUser.email,
            photoURL: providerUser.photoURL,
            lastLogin: firebase.database.ServerValue.TIMESTAMP,
            playerData: []
          }).then(function () {
            $log.log("Logged in.");
          }, function () {
            $log.log("User could not be updated.");
          });
        } else {
          $log.log('You are now logged in.');
        }
        self.displayName = providerUser.displayName;
        deferred.start();
      });
      return deferred.promise;
    }

    function loginError(error) {
      $log.log("Authentication failed:", error);
    }

  }

})();
