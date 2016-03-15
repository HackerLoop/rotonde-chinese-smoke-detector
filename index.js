'use strict';

const fetch = require('node-fetch');

const client = require('rotonde-client/node/rotonde-client')('ws://rotonde:4224');

client.eventHandlers.attach('SMOKE_DETECTOR', () => {
  fetch('');
});

client.connect();
