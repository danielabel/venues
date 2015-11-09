var React = require('react');
var VenueNameStore = require('../stores/VenueNameStore');

var VenuesSearchResult = React.createClass({

    getInitialState: function () {
        return {
            venue: VenueNameStore.getVenueName()
        }
    },

    componentDidMount: function () {
        VenueNameStore.addChangeListener(this.onSearchVenue);
    },

    componentWillUnmount: function () {
        VenueNameStore.removeChangeListener(this.onSearchVenue);
    },

    onSearchVenue: function () {
        this.setState({
            venue: VenueNameStore.getVenueName()
        });
    },

    render: function () {
        return (<div>{this.state.venue}</div>);
    }
});

module.exports = VenuesSearchResult;
