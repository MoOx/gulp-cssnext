var tape = require("tape")
var gutil = require("gulp-util")
var cssnext = require("..")

var fs = require("fs")
var path = require("path")

tape("cssnext", function(test){
  var stream = cssnext()
  var file = new gutil.File({
    base : ".",
    path : ".",
    contents : new Buffer(
      fs.readFileSync(
        path.resolve(__dirname, "./fixtures/index.css"),
        "utf8"
      )
    )
  })
  stream.on("data", function(file){
    test.equal(
      file.contents.toString(),
      fs.readFileSync(
        path.resolve(__dirname, "./expected/index.css"),
        "utf8"
      )
    )
    test.end()
  })
  stream.end(file)
})

tape("cssnext throws if stream", function(test){
  var stream = cssnext()
  var file = new gutil.File({
    base : ".",
    path : ".",
    contents : fs.createReadStream(
        path.resolve(__dirname, "./fixtures/index.css"),
        "utf8"
      )
  })
  stream.on("error", function(err){
    test.equal(err.message, "streaming not supported")
    test.equal(err instanceof gutil.PluginError, true)
    test.end()
  })
  stream.end(file)
})

tape("throws on cssnext error", function(test){
  var stream = cssnext()
  var file = new gutil.File({
    base : ".",
    path : ".",
    contents : new Buffer(
      fs.readFileSync(
        path.resolve(__dirname, "./fixtures/error.css"),
        "utf8"
      )
    )
  })
  stream.on("error", function(err){
    test.equal(err.message, path.resolve(".") + ":2:13: Unclosed bracket")
    test.equal(err instanceof gutil.PluginError, true)
    test.end()
  })
  stream.end(file)
})
