/**
 * Created by isaacwatts on 9/13/16.
 */



(function(){

  angular.module('starter')
    .component('locationList', { // the tag for using this is <location-list>
      templateUrl: "templates/locations.html",
      controller: locationController
    });

  function locationController() {

    // variables
    var self = this;
    self.locations = [
      {
        'id': 0,
        'sortkey': "establish odds",
        'name': 'Classroom'
      },
      {
        'id': 1,
        'sortkey': "establish odds",
        'name': 'Mall'
      },
      {
        'id': 2,
        'sortkey': "establish odds",
        'name': 'Junkyard'
      },
      {
        'id': 3,
        'sortkey': "establish odds",
        'name': 'Woods'
      },
      {
        'id': 4,
        'sortkey': "establish odds",
        'name': 'Homebase'
      }
    ];
  }

  var app = angular.module("starter", []);

  app.run(function($rootScope) {
    document.addEventListener("keyup", function(e) {
      if (e.keyCode === 27)
        $rootScope.$broadcast("escapePressed", e.target);
    });

    document.addEventListener("click", function(e) {
      $rootScope.$broadcast("documentClicked", e.target);
    });
  });

  app.controller("modalDemo", function($scope, $rootScope) {
    $scope.leftVisible = false;
    $scope.rightVisible = false;

    $scope.close = function() {
      $scope.leftVisible = false;
      $scope.rightVisible = false;
    };

    $scope.showLeft = function(e) {
      $scope.leftVisible = true;
      e.stopPropagation();
    };

    $scope.showRight = function(e) {
      $scope.rightVisible = true;
      e.stopPropagation();
    }

    $rootScope.$on("documentClicked", _close);
    $rootScope.$on("escapePressed", _close);

    function _close() {
      $scope.$apply(function() {
        $scope.close();
      });
    }
  });

  app.directive("menu", function() {
    return {
      restrict: "E",
      template: "<div ng-class='{ show: visible, left: alignment === \"left\", right: alignment === \"right\" }' ng-transclude></div>",
      transclude: true,
      scope: {
        visible: "=",
        alignment: "@"
      }
    };
  });

  app.directive("menuItem", function() {
    return {
      restrict: "E",
      template: "<div ng-click='navigate()' ng-transclude></div>",
      transclude: true,
      scope: {
        hash: "@"
      },
      link: function($scope) {
        $scope.navigate = function() {
          window.location.hash = $scope.hash;
        }
      }
    }
  });



})();
