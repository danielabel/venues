var React = require('react');
var util = require('util');
var VenueDataSource = require('../datasource/VenueDataSource');


var VenueItem = React.createClass({

    handleClick: function (event) {
        VenueDataSource.searchforVenueRecomendations(this.props.venue);
    },

    render: function () {
        var venue = this.props.venue;
        return (
            <a className="list-group-item" href="#" onClick={this.handleClick}>
                {venue.name}, {venue.location.city}
            </a>

        );
    }
});

module.exports = VenueItem;