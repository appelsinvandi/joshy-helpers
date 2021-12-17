const fs = require('fs')
const path = require('path')

const inputFile = path.resolve(__dirname, '..', 'inputs', 'formatAddresses.txt')
const inputFileContents = fs.readFileSync(inputFile, 'utf8')

console.log('["' + inputFileContents.replace(/\s+/gi, '\n').split('\n').filter(Boolean).join('","') + '"]')
