var tape = require("tape")
var through = require("through2")
var gutil = require("gulp-util")
var cssnext = require("..")

var fs = require("fs")
var path = require("path")

tape("cssnext with options", function(test){
  var stream = cssnext({
    compress : true
  })
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
      file.contents.toString() + "\n",
      fs.readFileSync(
        path.resolve(__dirname, "./expected/compressed.css"),
        "utf8"
      )
    )
    test.end()
  })
  stream.end(file)
})
