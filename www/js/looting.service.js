(function () {

  angular.module('starter')
      .service('Looting', Looting);

  function Looting() {
      var self = this;
      self.latestRoll = null;
      self.playerData = [];
    
      // FUNCTIONS
      self.getLoot = getLoot;
      self.lootRoll = lootRoll;
      self.lootPick = lootPick;

      function getLoot () {
          var self = this;
          self.lootRoll();
      }
  
      function lootRoll() {
          /*RAND CHOICE FOR LOOT, uses 2-12 range with odd increase to 7*/
          var self = this;
          var d1 = Math.floor(Math.random() * 6) + 1;
          var d2 = Math.floor(Math.random() * 6) + 1;
        
          self.latestRoll = d1 + d2;
          self.lootPick(self.latestRoll);
      }

      function lootPick(latestRoll) {
          var self = this;
          var newLoot = '';
          if (latestRoll) {
              switch (latestRoll) {
                  case 2:
                      newLoot = loot[0];
                      break;
                  case 3:
                      newLoot = loot[1];
                      break;
                  case 4:
                      newLoot = loot[2];
                      break;
                  case 5:
                      newLoot = loot[3];
                      break;
                  case 6:
                  case 7:
                      newLoot = loot[4];
                      break;
                  case 8:
                      newLoot = loot[5];
                      break;
                  case 9:
                      newLoot = loot[6];
                    break;
                  case 10:
                      newLoot = loot[7];
                    break;
                  case 11:
                      newLoot = loot[8];
                      break;
                  case 12:
                    newLoot = loot[9];
                    break;
              }
          }
    
          /*CHECK IF PLAYER ALREADY HAS OBJECT*/
          function containsObject(obj, list) {
              var x;
              for (x in list) {
                  if (list.hasOwnProperty(x) && list[x] === obj) {
                      return true;
                  }
              }
              return false;
          }
    
          /*UPDATE THE AMOUNT OF OBJECTS*/
          function updateVal(key, amnt) {
              for (var i in self.playerData) {
                  if (playerData[i] == key) {
                      playerData[i].lootCount += amnt;
                      break; //Stop this loop, we found it!
                  }
              }
          }
      
          var contains = containsObject(newLoot, self.playerData);
          if (!(contains)) {
              self.playerData.push(newLoot);
          }
          updateVal(newLoot, 1);
          console.log(self.playerData);
      }
  }
})();
