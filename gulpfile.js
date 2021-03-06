var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sh = require('shelljs');
var webpack = require('webpack');

gulp.task('default', [ 'webpack' ]);

gulp.task('watch', function () {
  gulp.watch([
    'www/**/*',
    '!www/lib/**/*',
    '!www/bundle.js',
    '!www/bundle.js.map'
  ], [
    'webpack'
  ]);
});

gulp.task('webpack', [], function (done) {
  webpack(require('./webpack.config'), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    done();
  });
});

// below are tasks created by Ionic by default

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
