var http = require('http')
var exec = require('child_process').exec
var test = require('tape')
var formBody = require('body/form')

var cmd = process.execPath + ' ' + __dirname + '/../index.js --upload-file test/test.txt -T test/test2.txt -p 9090'
var expected = ['{"hello!\\n":""}', '{"wow\\n":""}']

test('basic', function (t) {
  t.plan(1)
  var results = []
  var server = http.createServer(function (req, res) {
    formBody(req, res, function (err, body) {
      if (err) console.error(err)
      results.push(JSON.stringify(body))
      if (results.length === 2) {
        t.same(results, expected)
        t.end()
        res.end()
        process.exit()
      }
    })
  })
  server.listen(9090)
  server.on('listening', function () {
    console.log(cmd)
    exec(cmd)
  })
})

