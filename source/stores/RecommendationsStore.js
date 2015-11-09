var AppDispatcher = require('../dispatcher/AppDispatcher');
var Immutable = require('immutable');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// our store and initial value
var recommendations = Immutable.Map({});

function setRecommendations(receivedRecommendations) {
    recommendations = receivedRecommendations;
}

function emitChange() {
    RecommendationsStore.emit('change');
}

var RecommendationsStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },

    getRecommendations: function () {
        return recommendations;
    }
});

function handleAction(action) {
    if (action.type === 'received_recommendations') {
        setRecommendations(action.recommendations);
        emitChange();
    }
}

RecommendationsStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = RecommendationsStore;
