const del = require('del')
const config = require('../config')

function cleanBuild() {
  return del([`${config.build}/**`])
}

module.exports = {
  cleanBuild: cleanBuild
}