# gulp-[cssnext](https://github.com/cssnext/cssnext)

[![Build Status](http://img.shields.io/travis/cssnext/gulp-cssnext.svg)](https://travis-ci.org/cssnext/gulp-cssnext)
[![NPM version](http://img.shields.io/npm/v/gulp-cssnext.svg)](https://www.npmjs.org/package/gulp-cssnext)

> Use tomorrow's CSS syntax, today. Via Gulp.

**Issues with the output should be reported on [cssnext issue tracker](https://github.com/cssnext/cssnext/issues).**

## Install

```console
$ npm install gulp-cssnext
```

## Usage

```js
var cssnext = require("gulp-cssnext")

gulp.task("stylesheets", function() {
  gulp.src("src/stylesheets/index.css")
    .pipe(cssnext({
        compress: true
    }))
    .pipe(gulp.dest("./dist/stylesheets"))
});
```

### Options

Options are directly passed to cssnext, so checkout [cssnext options](https://github.com/cssnext/cssnext#nodejs-options) directly.

_Note: `from` option is by default automatically specified using gulp source._

---

## Contributing

Work on a branch, install dev-dependencies, respect coding style & run tests before submitting a bug fix or a feature.

    $ git clone https://github.com/cssnext/gulp-cssnext.git
    $ git checkout -b patch-1
    $ npm install
    $ npm test

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
