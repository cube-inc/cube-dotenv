const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

const defaults = {
  path: path.resolve(process.cwd(), '.env')
}

function load (envPath) {
  if (fs.existsSync(envPath)) {
    const env = dotenv.config({ path: envPath })
    dotenvExpand(env)
  }
}

module.exports.config = function (options = {}) {
  const { path } = Object.assign({}, defaults, options)
  const localPath = `${path}.local`
  load(localPath)
  load(path)
}
