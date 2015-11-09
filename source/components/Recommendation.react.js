var React = require('react');
var util = require('util');
var VenueDataSource = require('../datasource/VenueDataSource');


var Recommendation = React.createClass({

    render: function() {

        var recommendation = this.props.recommendation;

        return (
            <p >
                {recommendation.name}
            </p>
        );
    }
});

module.exports = Recommendation;