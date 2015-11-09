var React = require('react');
var Immutable = require('immutable');
var VenueStore = require('../stores/VenueStore');

var VenuesSearchResult = React.createClass({

    getInitialState: function () {
        return {
            venues: VenueStore.getVenues()
        }
    },

    componentDidMount: function () {
        VenueStore.addChangeListener(this.onVenuesChange);
    },

    componentWillUnmount: function () {
        VenueStore.removeChangeListener(this.onVenuesChange);
    },

    onVenuesChange: function () {
        this.setState({
            venues: VenueStore.getVenues().toJS()
        });
    },


    render: function () {
        var venues = this.state.venues;
        return (<ul>
            {
                venues.map(function (venue) {
                    return (<li key={venue.id}>{venue.name}</li>)
                })
            }
        </ul>);
    }

});

module.exports = VenuesSearchResult;
