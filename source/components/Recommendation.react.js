var React = require('react');
var util = require('util');
var VenueDataSource = require('../datasource/VenueDataSource');


var Recommendation = React.createClass({

    render: function () {

        var recommendation = this.props.recommendation;

        var url = 'https://foursquare.com/v/' + recommendation.id;
        return (
            <p>
                <a href={url}  target='_blank'>
                    {recommendation.name}
                </a>
            </p>
        );
    }
});

module.exports = Recommendation;