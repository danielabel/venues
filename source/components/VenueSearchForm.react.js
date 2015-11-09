var React = require('react');
var VenueActionCreators = require('../actions/VenueActionCreators');
var VenueDataSource = require('../datasource/VenueDataSource');

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
        VenueDataSource.searchForVenue(this.state.venueName);
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

                <input type='submit' value='search' className='btn btn-default' onClick={this.handleFormSubmit}/>


            </form>
        );
    }
});

module.exports = VenuesSearchForm;