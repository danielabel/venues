var React = require('react');
var Immutable = require('immutable');
var RecommendationsStore = require('../stores/RecommendationsStore');
var Recommendation = require('./Recommendation.react');

var VenueRecommendations = React.createClass({

    getInitialState: function () {
        return {
            recommendations: RecommendationsStore.getRecommendations()
        }
    },

    componentDidMount: function () {
        RecommendationsStore.addChangeListener(this.onRecommendationsChange);
    },

    componentWillUnmount: function () {
        RecommendationsStore.removeChangeListener(this.onRecommendationsChange);
    },

    onRecommendationsChange: function () {
        this.setState({
            recommendations: RecommendationsStore.getRecommendations().toJS()
        });
    },


    render: function () {
        var recommendations = this.state.recommendations;

        return (
            <div>
                {
                    recommendations.map(function (item) {
                        return (<Recommendation  key={item.venue.id} recommendation={item.venue}/>)
                    })
                }
            </div>
        );
    }

});


module.exports = VenueRecommendations;
