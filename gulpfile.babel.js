'use strict';

/**
 * @todo Switch to globing of names to reduce the need to import and breaks task into
 * their own files
 */

import gulp     from 'gulp';
import webpack  from 'webpack';
import path     from 'path';
import sass     from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import sync     from 'run-sequence';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';
import gutil    from 'gulp-util';
import serve    from 'browser-sync';
import del      from 'del';
import cssMqpacker from 'css-mqpacker';
import postcssEmMediaQuery from 'postcss-em-media-query';
import cssnano from 'cssnano';
import postcss from 'gulp-postcss';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported      from 'supports-color';
import historyApiFallback   from 'connect-history-api-fallback';


let root = 'client';

// helper method for resolving paths
let resolveToApp = (glob = '') => {
  return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob = '') => {
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  appScss: resolveToApp('scss/app.scss'), // stylesheets
  scss: resolveToApp('scss/**/*.scss'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  htmlPath: resolveToApp('**/*.html'),
  img: resolveToApp('./**/*.{png,jpg}'),
  entry: [
    'babel-polyfill',
    path.join(__dirname, root, 'app/app.js')
  ],
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  dest: path.join(__dirname, 'dist')
};

const processors = [
  cssMqpacker({
    sort: true
  }),
  postcssEmMediaQuery(),
  cssnano({
    discardComments: {
      removeAll: true
    },
    core: false
  })
];

// use webpack.config.js to build modules
gulp.task('webpack', ['clean', 'copyImg', 'copyImg:watch', 'sass', 'sass:watch'], (cb) => {
  const config = require('./webpack.dist.config');
  config.entry.app = paths.entry;

  webpack(config, (err, stats) => {
    if(err)  {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));

    cb();
  });
});

gulp.task('serve', ['webpack'], function() {
    const config = require('./webpack.dev.config');
    config.entry.app = [
      // this modules required to make HRM working
      // it responsible for all this webpack magic
      'webpack-hot-middleware/client?reload=true',
      // application entry point
    ].concat(paths.entry);

    var compiler = webpack(config)

    serve.init({
      port: process.env.PORT || 3000,
      open: false,
      server: './dist',
      middleware: [
        historyApiFallback(),
        webpackDevMiddleware(compiler, {
          stats: {
            colors: colorsSupported,
            chunks: false,
            modules: false
          },
          publicPath: config.output.publicPath
        }),
        webpackHotMiddleware(compiler)
      ]
    });

    gulp.watch(paths.scss, ['sass']).on('change', serve.reload);
    gulp.watch(paths.img, ['copyImg']).on('change', serve.reload);
});

gulp.task('sass', function () {
  return gulp.src(paths.appScss)
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'))
    .pipe(serve.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch(paths.scss, ['sass']);
});

gulp.task('copyImg', function() {
   gulp.src(paths.img)
   .pipe(gulp.dest('./dist'))
   .pipe(serve.stream());
});

gulp.task('copyImg:watch', function () {
  gulp.watch(paths.img, ['copyImg']);
});



gulp.task('watch', ['serve', 'sass:watch']);

gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});


gulp.task('clean', (cb) => {
  del([paths.dest]).then(function (paths) {
    gutil.log('[clean]', paths);
    cb();
  })
});

gulp.task('default', ['watch']);
