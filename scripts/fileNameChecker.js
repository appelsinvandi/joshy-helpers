const fs = require('fs')
const path = require('path')

const inputFolder = path.resolve(__dirname, '..', 'inputs', 'fileNameChecker')
const pngs = discoverAllPngsDeep(inputFolder).sort((a, b) => a.localeCompare(b))

for (const png of pngs) {
  if (!/^[0-9a-zA-Z ]+#\d+\.png$/.test(path.basename(png))) {
    console.log(`${png} has wrong file name`)
  }
}

function discoverAllPngsDeep(folder) {
  const files = fs.readdirSync(folder)
  const pngs = []
  files.forEach((file) => {
    const filePath = path.resolve(folder, file)
    if (fs.statSync(filePath).isDirectory()) {
      pngs.push(...discoverAllPngsDeep(filePath))
    } else if (path.extname(file) === '.png') {
      pngs.push(filePath)
    }
  })
  return pngs
}
