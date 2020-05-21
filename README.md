<img src="admin/logo-ionic.svg" alt="Logo" width="100" height="100">

# ioBroker.ionic

[![NPM version](http://img.shields.io/npm/v/iobroker.ionic.svg)](https://www.npmjs.com/package/iobroker.ionic)
[![Downloads](https://img.shields.io/npm/dm/iobroker.ionic.svg)](https://www.npmjs.com/package/iobroker.ionic)

[![NPM](https://nodei.co/npm/iobroker.ionic.png?downloads=true)](https://nodei.co/npm/iobroker.ionic/)

## Usage
Provides the [Ionic Framework](https://ionicframework.com/) at the configured route for the chosen web instances
at a central place installed only once.

Afterwards you can use it in your individual web visualization(s).

## Configuration
You can configure following parameters at the adapter configuration.

### Extended WEB adapter
Here you can choose the instance(s), which shall be extended by the framework. The default is **all** web instances.

### Route path
Here you can specify the route path, where the distributed files of the framework are available on the web server.
The default route is *ionic*.

## Routes
You can find the javascript source files in the sub folder `js` of your route 
and the stylesheet files in the sub folder `css` of your route.

### Example
Find here the pattern of the resulting URL to the sub folders
> **Javascript:** ([protocol]://[host|ip]:[port])/[route]/js/

> **Stylesheet:** ([protocol]://[host|ip]:[port])/[route]/css/

As example
```html
...
<script type="module" src="/ionic/js/ionic.esm.js"></script>
...
<link rel="stylesheet" href="/ionic/css/ionic.bundle.css" />
...
```

## License
MIT License

Copyright (c) 2020 [Armin Junge](mailto:armin.junge.81@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.