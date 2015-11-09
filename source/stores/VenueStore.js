var AppDispatcher = require('../dispatcher/AppDispatcher');
var Immutable = require('immutable');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// our store and initial value
var venues = Immutable.Map({});

function setVenues(receivedVenus) {
    venues = receivedVenus;
}

function emitChange() {
    VenueStore.emit('change');
}

var VenueStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },

    getVenues: function () {
        return venues;
    }
});

function handleAction(action) {
    if (action.type === 'received_venues') {
        setVenues(action.venues);
        emitChange();
    }
}

VenueStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = VenueStore;
