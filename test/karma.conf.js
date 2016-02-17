module.exports = function(config) {
  config.set({

    basePath: '../',

    files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/firebase/firebase.js',
            'bower_components/angularfire/dist/angularfire.min.js',
            'js/**/*.js',
            'test/**/*.spec.js'
    ],

    exclude: [],

    autoWatch: true,

    frameworks: ['jasmine'],

    reporters: ['verbose', 'progress'],

    preprocessors: {
    },

    browsers: ['Firefox'],

    plugins: [
      'karma-verbose-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    colors: true,

    logLevel: config.LOG_INFO,

    singleRun: true,

    concurrency: Infinity
  });
};
