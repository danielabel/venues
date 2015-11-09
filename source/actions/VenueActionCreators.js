var AppDispatcher = require('../dispatcher/AppDispatcher');

function searchForVenue(inputtedVenueName) {

    var action = {
        type: 'receive_venue_name',
        venueName: inputtedVenueName
    };

    AppDispatcher.dispatch(action);
}

module.exports = {
    searchForVenue: searchForVenue
};