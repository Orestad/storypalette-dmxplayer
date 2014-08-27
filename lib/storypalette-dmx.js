var dmxpro      = require('dmxpro');

var universe    = null;
var groups      = {};

function resolveFixtures(value, room) {
  value.fixtures = [];
  for (var i in value.groups) {        
    var g = value.groups[i];
    if (g in groups) {
      value.fixtures = value.fixtures.concat(groups[g].fixtures);
    }
  }
  return value;
}

module.exports = function() {
  return {
    start: function(room) { 
      var dmxconf = room.dmx;

      for (var i in dmxconf.groups) {
        group = dmxconf.groups[i];
        groups[group.id] = {name: group.name, fixtures: group.fixtures};
        console.log("loaded group " + group.id);
      }

      try {
        universe = dmxpro.alloc();
        dmxpro.init(universe, dmxconf);
        console.log("dmx initialized!");
        dmxpro.start(universe); //if fading is needed..
      } catch(e) {
        console.log("dmx failed to start!");
        if (universe !== null) {
          dmxpro.shutdown(universe);
        }
        universe = null;
      }
    },

    shutdown: function() {
      if (universe !== null) {
        dmxpro.black(universe);
        dmxpro.shutdown(universe);
        console.log("dmx shutdown!");
      }    
    },

    message: function(value, room) {
      if (typeof value.colour !== "undefined" && typeof value.groups !== "undefined") {
        value = resolveFixtures(value, room);
        console.log('sending message to dmxpro', value);
        dmxpro.message(universe, value); 
      }
    }
  };
  
}; // end module.exports
