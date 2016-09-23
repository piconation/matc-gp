/**
 * Created by isaacwatts on 9/13/16.
 */

(function () {

  angular.module('starter')
    .controller('locationController', locationController);
  
  function locationController() {
   
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
