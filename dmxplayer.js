var config      = require('config');

process.on('SIGINT', function() {
  dmx.shutdown();
  process.exit();
});

var dmx = require('./lib/storypalette-dmx')();

// Start socket server. 
var io = require('socket.io')(config.port);
console.log('storypalette-dmxplayer available at http://localhost:' + config.port);

io.on('connection', function(socket) {
  console.log('socket', socket.id, 'connected to dmxplayer');

  socket.on('disconnect', function () {
    console.log('dmxplayer disconnected');
  });
  
  socket.on('init', function(data) {
    console.log('room', data.room);
    room = data.room;
    dmx.start(room);
  });

  socket.on('onValueUpdate', function(value) {
    console.log('valueUpdate', value);
    dmx.message(value, room);
  });
});
