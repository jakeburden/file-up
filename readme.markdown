## file-up

[![build status](http://img.shields.io/travis/jekrb/file-up.svg?style=flat)](http://travis-ci.org/jekrb/file-up)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


Upload files like you would with [curl --upload-file](https://curl.haxx.se/docs/manpage.html#-T) (almost).

```
npm install file-up -g
```

### Usage

``` bash
file-up file.txt example.com
```

### api

`file-up` can be used as a command that takes a filename and url as arguments, or you can pass it optional parameters.

#### `-T` or `--upload-file`
specifies the file to upload

#### `--url`
specifies the url (default `localhost`)

#### `-p` or `--port`
specifies the port (default `80`)

#### `-m` or `--method`
specifies the method (default `PUT`)



### Notes

You can specify one -T for each URL on the command line. Each -T + URL pair specifies what to upload and to where.

#### Todos

1. Support URL globbing (like curl).
2. Write better test.
3. Probably lots of other things. I haven't had time to find edge cases.


### License

MIT
