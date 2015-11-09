var React = require('react');
var VenueActionCreators = require('../actions/VenueActionCreators');

var VenuesSearchForm = React.createClass({

    getInitialState: function() {
        return {
            venueName: ''
        };
    },

    setInputVenueName: function (inputValue) {
        this.setState({
            venueName: inputValue
        });
    },

    handleInputVenueChange: function (event) {
        this.setInputVenueName(event.target.value);
    },

    handleFormSubmit: function (event) {
        event.preventDefault();
        VenueActionCreators.searchForVenue(this.state.venueName);
    },


    render: function () {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <input
                        className="form-control"
                        onChange={this.handleInputVenueChange}
                        value={this.state.venueName}
                        ref="venueName" />
                </div>

                <button type="button"  onClick={this.handleFormSubmit}>Search</button>

            </form>
        );
    }
});

module.exports = VenuesSearchForm;