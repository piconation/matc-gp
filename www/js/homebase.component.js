/**
 * Created by mattpowell on 9/16/16.
 */

(function () {

  angular.module('starter')
    .component('homebase', { // the tag for using this is <homebase>
      templateUrl: "templates/homebase.html",
      controller: homebaseController
    })
    .config(homebaseConfig);

  function homebaseConfig($stateProvider) {
    $stateProvider.state('homebase', {
      url: '/homebase',
      template: "<homebase></homebase>"
    })
  }

  function homebaseController(user, $state) {
    var self = this;
    //self.homebase = this.homebase;
  }
})();
