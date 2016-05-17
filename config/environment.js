/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    'ember-cli-toggle': {
      includedThemes: ['light', 'default', 'flip', 'ios'],
    },
    apiHost: 'https://fohbi.herokuapp.com',

    modulePrefix: 'final-project',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    cloudinary: {
      cloudName: `dvxis3hbo`,
      uploadPreset: `emberez`,
    },

    googleFonts: [
      'Open+Sans:300',
      'Exo+2:400,300,600,700,800,900:latin'
    ],

    'ember-simple-auth': {
      routeIfAlreadyAuthenticated: `admin`,
      routeAfterAuthentication: `admin`,
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
