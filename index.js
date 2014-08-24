var through = require("through2")
var cssnext = require("cssnext")
var gutil = require("gulp-util")
var PluginError = gutil.PluginError

module.exports = function(options){
  return through.obj(transform(options))
}

function transform(options) {
  options = options || {}
  return function(file, enc, cb){
    var contents
    var transformed
    if(file.isStream()) {
      return cb(
        new PluginError("gulp-cssnext", "streaming not supported")
      )
    }
    if(file.isBuffer()) {
      contents = file.contents.toString()
      try {
        options.from = options.from === undefined ? (file.path !== null ? file.path : undefined) : options.from
        transformed = cssnext(contents, options)
      }
      catch(err) {
        return cb(
          new PluginError("gulp-cssnext", err)
        )
      }
      file.contents = new Buffer(transformed)
      cb(null, file)
    }
  }
}
