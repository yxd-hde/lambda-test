module.exports = Noop;

function Noop() {}

Noop.run = function() {
    console.log('noop');
};
