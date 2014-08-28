var config      = require('config');

process.on('SIGINT', function() {
  dmx.shutdown();
  process.exit();
});

var dmx = require('./lib/storypalette-dmx')();

// Start socket server. 
var io = require('socket.io')(config.port);
console.log('\nstorypalette-dmxplayer available at ws://localhost:' + config.port);

var numConns = 0;

io.on('connection', function(socket) {
  console.log('socket', socket.id, 'connected to dmxplayer');

  socket.on('disconnect', function() {
    console.log('dmxplayer disconnected');
    dmx.shutdown();
  });
  
  socket.on('init', function(data) {
    console.log('init:', data.room.name);
    room = data.room;
    dmx.start(room);
  });

  socket.on('onValueUpdate', function(value) {
    console.log('onValueUpdate', value.colour);
    dmx.message(value, room);
  });

  socket.on('reset', function() {
    console.log('reset');
    dmx.reset();
  });
});
