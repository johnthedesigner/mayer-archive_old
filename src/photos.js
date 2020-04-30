import Parse from "papaparse"

const fs = require("fs")

const csvData = ""
const photos = {}

fs.createReadStream("../photos.csv")
  .pipe()
  .on("data", row => {
    csvData += row
    console.log(row)
  })
  .on("end", () => {
    photos = Parse(csvData)
    console.log("CSV file successfully processed", photos)
  })

export default photos
