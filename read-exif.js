const read = require("read-directory")
const ExifReader = require("exifreader")

read("./photos", function(err, contents) {
  let tags = ExifReader.load(contents)
  tags.forEach(tag => {
    console.log(tag)
  })
})
