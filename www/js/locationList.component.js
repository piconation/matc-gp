/**
 * Created by isaacwatts on 9/13/16.
 */

(function () {

  angular.module('starter')
    .component('locationList', { // the tag for using this is <location-list>
      templateUrl: "templates/locations.html",
      controller: locationController
    })
    .config(locationConfig);

  function locationConfig($stateProvider) {
    $stateProvider.state('locations', {
      url: '/locations',
      template: "<location-list></location-list>"
    })
  }

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

})();
