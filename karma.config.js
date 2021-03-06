var path = require('path');
var argv = require('yargs').argv;
process.env.BABEL_ENV = 'karma';

const coverage_reporters = [
  { type: 'text-summary' },
];
const reporters = [
  'spec',
  'coverage',
];

if (process.env.TRAVIS) {
  console.log('On Travis sending coveralls');
  coverage_reporters.push( { type : 'lcov', dir : 'coverage' } );
  reporters.push('coveralls');
} else {
  console.log('Not on Travis so not sending coveralls');
  coverage_reporters.push( { type : 'html', dir : 'coverage', 'subdir' : '.' } );
}

module.exports = function (config) {
  config.set({
    coverageReporter: {
      reporters: coverage_reporters,
    },
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      'tests.webpack.js',
    ],
    singleRun: !argv.watch,
    frameworks: [
      'mocha',
      'chai-sinon',
      'chai-as-promised',
      'chai',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: reporters,
    plugins: [
      'karma-chai',
      'karma-chai-as-promised',
      'karma-chai-sinon',
      'karma-coverage',
      'karma-coveralls',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-webpack',
    ],
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /spec\.js$/,
            include: /src/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.js?$/,
            include: /src/,
            exclude: /(node_modules|bower_components|spec)/,
            loader: 'babel-istanbul',
            query: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.js$/,
            include: path.resolve(__dirname, '../src'),
            exclude: /(bower_components|node_modules|spec)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
        ],
      },
    },
  });
};
