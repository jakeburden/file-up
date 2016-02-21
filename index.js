#! /usr/bin/env node

var url = require('url')
var upload = require('file-upload-stream')
var minimist = require('minimist')

var argv = minimist(process.argv.slice(2), {
  alias: {
    p: 'port',
    m: 'method',
    T: 'file',
    'upload-file': 'file'
  }
})

var file = argv.file || argv._[0]
var dest = argv.url || argv._[1]

var opts = {
  port: argv.port || 80,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  method: argv.method || 'PUT'
}

if (dest) {
  var urlParts = url.parse(dest)
  var host = urlParts.host
  var path = urlParts.pathname

  if (host) opts.hostname = host
  if (path) opts.path = path
}

if (!file) {
  console.error('Missing name of file.')
  process.exit()
}

if (file instanceof Array) {
  file.forEach(function (f) {
    upload(f, opts)
  })
} else upload(file, opts)

