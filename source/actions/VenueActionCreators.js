var AppDispatcher = require('../dispatcher/AppDispatcher');

function searchForVenue(inputtedVenueName) {

    var action = {
        type: 'receive_venue_name',
        venueName: inputtedVenueName
    };

    AppDispatcher.dispatch(action);
}


function receivedVenues(venues) {

    var action = {
        type: 'received_venues',
        venues: venues
    };

    AppDispatcher.dispatch(action);
}

module.exports = {
    searchForVenue: searchForVenue,
    receivedVenues: receivedVenues
};