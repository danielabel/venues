# venues

## prerequisites

* [Node/NPM](https://nodejs.org/en/)
* [Gulp](http://gulpjs.com/)


## To build

Create `config/secrets.json` from template provided. You'll need to [register and create an app](https://foursquare.com/developers/apps) for these codes.

Run

* `npm install`
* `gulp`


browse to ./build/index.html. For example on a mac `open ./build/index.html`

## Known issues

* Using Immutable maps for the data structure from FrorSquare uses an experimental feature
* Potential race conditions for slow networks and fast clicks
* only supports javascript 6 - build is slow with Babel down compiling to JS5