'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const University = require('../../lib');
const BLipp = require('../../lib/plugins/blipp');
const BlippPlugin = require('blipp');


// Declare internals

const internals = {};


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.experiment;
const expect = Code.expect;
const it = lab.test;
const afterEach = lab.afterEach;

// describe('/blipp', () => {

//     it('errors on failed registering blipp registration plugin', { parallel: false }, (done) => {

//         const orig = BLipp.register;

//         BLipp.register = function (plugin, options, next) {

//             BLipp.register = orig;
//             return next(new Error('fail'));
//         };

//         BLipp.register.attributes = {
//             name: 'fake blipp'
//         };

//         University.init(internals.manifest, internals.composeOptions, (err) => {

//             expect(err).to.exist();
//             done();
//         });
//     });

//     it('errors on failed registering of blipp plugin', { parallel: false }, (done) => {

//         const orig = BlippPlugin.register;

//         BlippPlugin.register = function (plugin, options, next) {

//             BlippPlugin.register = orig;
//             return next(new Error('fail'));
//         };

//         BlippPlugin.register.attributes = {
//             name: 'fake blipp failure'
//         };

//         University.init(internals.manifest, internals.composeOptions, (err) => {

//             expect(err).to.exist();
//             done();
//         });
//     });

//     it('success registered blipp', { parallel: false }, (done) => {

//         University.init(internals.manifest, internals.composeOptions, (err) => {

//             expect(err).to.not.exist();
//             done();
//         });
//     });
// });
