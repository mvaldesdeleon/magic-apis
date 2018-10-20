const ezp = require('ezp');

/*

const P = ezp({
    // get: function(props) { ... }
    // set: function(props, value) { ... }
    // delete: function(props) { ... }
    // has: function(props, value) { ... }
    // apply: function(props, args) { ... }
}, '$');

*/

const probe = ezp({
    apply: function(props, args) {
        console.log(`[${props[0].toUpperCase()}]`, ...args);
    }
});

const P = ezp(probe, '$');
