var React = require('react');
var util = require('util');


var VenueItem = React.createClass({

    handleClick: function(event) {
        console.log("click" + this.props.venue.name);

    },

    render: function() {
        var venue = this.props.venue;
        return (
            <p onClick={this.handleClick}>
                {venue.name}
            </p>
        );
    }
});

module.exports = VenueItem;