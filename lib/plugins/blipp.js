'use strict';

// Load modules

const Blipp = require('blipp');

// Declare internals

const internals = {};


exports.register = (server, options, next) => {

    server.register({ register: Blipp, options: { showAuth: true } }, (err) => {

        if (err) {
            return next(err);
        }

        return next();
    });

};

exports.register.attributes = {
    name: 'Blipp'
};


