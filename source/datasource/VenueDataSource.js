var request = require('superagent');
var util = require('util');
var Immutable = require('immutable');

var venueActionCreators = require('../actions/VenueActionCreators');


function handleAction(action) {
    if (action.type === 'received_venues') {
        console.log('handleAction ' + JSON.stringify(action));
        setVenues(action.venues);
        emitChange();
    }
}

function searchForVenue(inputtedVenueName) {
    var key = require('./../../config/secrets.json');

    request.post('https://api.foursquare.com/v2/venues/search')
        .send({client_id: key.client_id})
        .send({client_secret: key.client_secret})
        .send({
            query: inputtedVenueName,
            intent: 'global',
            v: '20130815'
        })
        .type('form')
        .set('Accept', 'application/json')
        .end(function (err, res) {
            if (res.ok) {
                venueActionCreators.receivedVenues(Immutable.fromJS(res.body.response.venues));
            } else {
                console.log('Oh no! error ' + util.inspect(res, {showHidden: false, depth: 2}));
            }
        });
}

function searchforVenueRecomendations(venue) {
    var key = require('./../../config/secrets.json');

    request.get('https://api.foursquare.com/v2/venues/explore')
        .query({client_id: key.client_id})
        .query({client_secret: key.client_secret})
        .query({ll: venue.location.lat + "," + venue.location.lng})
        .query({limit: '5'})
        .query({v: '20130815'})
        .set('Accept', 'application/json')
        .end(function(err, res){
            if (res.ok) {
                venueActionCreators.receivedVenueRecomendations(Immutable.fromJS(res.body.response.groups[0].items));
            } else {
                console.log('Oh no! error ' + util.inspect(res, {showHidden: false, depth: 2}));
            }
        });

}

module.exports = {
    searchForVenue: searchForVenue,
    searchforVenueRecomendations: searchforVenueRecomendations
};