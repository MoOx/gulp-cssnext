# gulp-cssnext

[![Build Status](https://travis-ci.org/putaindecode/gulp-cssnext.svg)](https://travis-ci.org/putaindecode/gulp-cssnext)


## information

<table>
<tr>
<td>package</td><td>gulp-cssnext</td>
</tr>
<tr>
<td>description</td>
<td>compiles to css using cssnext</td>
</tr>
<tr>
<td>Node Version</td>
<td>≥ 0.10</td>
</tr>
</table>

## api

### cssnext(options)

```javascript
var cssnext = require("gulp-cssnext")

gulp.task("stylesheets", function() {
  gulp.src("src/stylesheets/index.css")
    .pipe(cssnext({
        compress : true
    }))
    .pipe(gulp.dest("./dist/stylesheets"))
});
```

### options

[list of the available options](https://github.com/putaindecode/cssnext#nodejs-options)
