# venues

Venues is a Javascript application written in React and Flux, and uses Browserify to get it all in a browser. 
it uses FourSquare as a data source, which needs a little set up (see below). It's intended to be a demo application,
and so has been scripted to be built and run locally. The technologies should allow deploying as a web app, but that 
would involve quite a bit of fiddling about.  

## prerequisites

* [Node/NPM](https://nodejs.org/en/)
* [Gulp](http://gulpjs.com/)


## To build

Create `config/secrets.json` from template provided. You'll need to [register and create an app](https://foursquare.com/developers/apps) for these codes.

Run

* `npm install`
* `gulp`


browse to ./build/index.html. For example on a mac `open ./build/index.html`

## Enhancements
* As a demo app their aren't any unit tests, if it were to be used further, automation testing would need to be added.
* The Foursquare data format is used thorough the app, and its not perfect or clear for our uses. We should consider replacing it with a bespoke data format.

## Known issues

* Using Immutable maps for the data structure from FrorSquare uses an experimental feature
* Potential race conditions for slow networks and fast clicks
* only supports javascript 6 - build is slow with Babel down compiling to JS5. If you wish to run it in an older browser add `"presets": ["es2015"]` to .babelrc 
