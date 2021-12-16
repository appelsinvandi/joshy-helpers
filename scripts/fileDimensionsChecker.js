const fs = require('fs')
const path = require('path')
const sizeOf = require('image-size')

const inputFolder = path.resolve(__dirname, '..', 'inputs', 'fileDimensionsChecker')

function checkPngsDeep(folder) {
  const files = fs.readdirSync(folder)
  files.forEach((file) => {
    const filePath = path.resolve(folder, file)
    if (fs.statSync(filePath).isDirectory()) {
      checkPngsDeep(filePath)
    } else if (path.extname(file) === '.png') {
      const dimensions = sizeOf(filePath)
      if (dimensions.width !== 2070 || dimensions.height !== 2070) {
        console.log(`${filePath} has wrong dimensions: ${dimensions.width}x${dimensions.height}`)
      }
    }
  })
}

checkPngsDeep(inputFolder)
