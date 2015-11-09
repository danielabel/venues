var React = require('react');
var VenueSearchForm = require('./VenueSearchForm.react');
var VenueSearchResult = require('./VenueSearchResult.react');

var Application = React.createClass({

    render: function () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <VenueSearchForm/>
                    </div>
                    <div className="col-md-8">
                        <VenueSearchResult/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Application;