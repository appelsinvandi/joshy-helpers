const metadata = require('../inputs/hashlipsMetadatChecker/_metadata.json')

let attributes = {}

for (let meta of metadata) {
  meta.attributes.forEach((attr) => {
    attributes[attr.value] = attributes[attr.value] != null ? attributes[attr.value] + 1 : 1
  })
}

console.table(Object.fromEntries(Object.entries(attributes).sort((a, b) => a[1] - b[1])))
