'use strict';

// Load modules

const Hapi = require('hapi');
const Version = require('./version');
const Private = require('./private');
const Blipp = require('./plugins/blipp');


// Declare internals

const internals = {};


exports.init = function (port, next) {

    const server = new Hapi.Server();
    server.connection({ port });
    server.register([Version, Private, Blipp], (err) => {

        if (err) {
            return next(err);
        }

        server.start((err) => {

            return next(err, server);
        });
    });
};
