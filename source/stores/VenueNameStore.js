var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// our stored values
var venueName = "search for venue";

var VenueNameStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },

    getVenueName: function () {
        return venueName;
    }
});

function handleAction(action) {
    if (action.type === 'receive_venue_name') {
        venueName = action.venueName;
        VenueNameStore.emit('change');
    }
}

VenueNameStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = VenueNameStore;