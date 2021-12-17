const fs = require('fs')
const path = require('path')

const inputFile = path.resolve(__dirname, '..', 'inputs', 'formatAddresses.txt')
const inputFileContents = fs.readFileSync(inputFile, 'utf8')

const addresses = inputFileContents.replace(/\s+/gi, '\n').split('\n').filter(Boolean)

console.log('["' + addresses.join('","') + '"]')
if (addresses.length > 250) {
  console.warn('= WARNING =')
  console.warn('Too many elements in input! Got ' + addresses.length + ' elements.')
}
