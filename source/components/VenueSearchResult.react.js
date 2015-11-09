var React = require('react');
var Immutable = require('immutable');
var VenueStore = require('../stores/VenueStore');
var VenueItem = require('./VenueItem.react');

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


        return (
            <div>
                {
                    venues.map(function (venueItem) {
                        return (<VenueItem  key={venueItem.id} venue={venueItem}/>)
                    })
                }
            </div>
        );
    }

});


module.exports = VenuesSearchResult;
