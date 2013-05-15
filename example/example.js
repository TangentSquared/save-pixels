var ndarray = require("ndarray")
var savePixels = require("../save-pixels.js")

//Create an image
var x = ndarray.zeros([32, 32], "uint8")
x.set(16, 16, 255)

//Save to a file
savePixels(x, "png").pipe(process.stdout)