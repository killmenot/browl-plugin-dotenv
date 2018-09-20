# browl-plugin-dotenv

[![Build Status](https://travis-ci.org/killmenot/browl-plugin-dotenv.svg?branch=master)](https://travis-ci.org/killmenot/browl-plugin-dotenv) [![Coverage Status](https://coveralls.io/repos/github/killmenot/browl-plugin-yaml/badge.svg?branch=master)](https://coveralls.io/github/killmenot/browl-plugin-dotenv?branch=master) [![Dependency Status](https://david-dm.org/killmenot/browl-plugin-dotenv.svg)](hhttps://david-dm.org/killmenot/browl-plugin-dotenv) [![npm version](https://img.shields.io/npm/v/browl-plugin-dotenv.svg)](https://www.npmjs.com/package/browl-plugin-dotenv)

Browl plugin that copies an environment file to instance work directory.


## Configuration

### source
Type: `string`
The absolute or relative path (relative to repo directory) to the source of environment file
*Default*: './templates/.env'

### destination
Type: `string`
The absolute path where environment file should be copied.
*Default*: '/path/to/instance/dir/.env'


## Example
```ini
[dotenv]
source = /path/to/.env
destination = /path/to/webapp/develop/.env
```

## License

    The MIT License (MIT)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
