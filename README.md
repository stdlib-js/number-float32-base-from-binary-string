<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# From Binary String

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a [single-precision floating-point number][ieee754] from an [IEEE 754 literal bit representation][@stdlib/number/float32/base/to-binary-string].



<section class="usage">

## Usage

To use in Observable,

```javascript
fromBinaryStringf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-from-binary-string@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var fromBinaryStringf = require( 'path/to/vendor/umd/number-float32-base-from-binary-string/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-from-binary-string@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.fromBinaryStringf;
})();
</script>
```

#### fromBinaryStringf( bstr )

Creates a [single-precision floating-point number][ieee754] from an [IEEE 754 literal bit representation][@stdlib/number/float32/base/to-binary-string].

```javascript
var bstr = '01000000100000000000000000000000';
var v = fromBinaryStringf( bstr );
// returns 4.0

bstr = '01000000010010010000111111011011';
v = fromBinaryStringf( bstr );
// returns ~3.14

bstr = '11111111011011000011101000110011';
v = fromBinaryStringf( bstr );
// returns ~-3.14e+38
```

The function handles [subnormals][subnormals].

```javascript
var bstr = '10000000000000000000000000010110';
var val = fromBinaryStringf( bstr );
// returns ~-3.08e-44

bstr = '00000000000000000000000000000001';
val = fromBinaryStringf( bstr );
// returns ~1.40e-45
```

The function handles special values.

```javascript
var bstr = '00000000000000000000000000000000';
var val = fromBinaryStringf( bstr );
// returns 0.0

bstr = '10000000000000000000000000000000';
val = fromBinaryStringf( bstr );
// returns -0.0

bstr = '01111111110000000000000000000000';
val = fromBinaryStringf( bstr );
// returns NaN

bstr = '01111111100000000000000000000000';
val = fromBinaryStringf( bstr );
// returns Infinity

bstr = '11111111100000000000000000000000';
val = fromBinaryStringf( bstr );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-to-binary-string@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-from-binary-string@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var frac;
var sign;
var exp;
var b;
var x;
var y;
var i;

// Convert random numbers to IEEE 754 literal bit representations and then convert them back...
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    frac = randu() * 10.0;
    exp = round( randu()*100.0 );
    if ( randu() < 0.5 ) {
        exp = -exp;
    }
    x = sign * frac * pow( 2.0, exp );
    x = toFloat32( x );

    b = toBinaryStringf( x );
    y = fromBinaryStringf( b );

    console.log( '%d => %s => %d', x, b, y );
    console.log( x === y );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float32-base-from-binary-string.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float32-base-from-binary-string

[test-image]: https://github.com/stdlib-js/number-float32-base-from-binary-string/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float32-base-from-binary-string/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float32-base-from-binary-string/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float32-base-from-binary-string?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float32-base-from-binary-string.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float32-base-from-binary-string/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float32-base-from-binary-string/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float32-base-from-binary-string/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float32-base-from-binary-string/tree/esm
[branches-url]: https://github.com/stdlib-js/number-float32-base-from-binary-string/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float32-base-from-binary-string/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[subnormals]: https://en.wikipedia.org/wiki/Denormal_number

[@stdlib/number/float32/base/to-binary-string]: https://github.com/stdlib-js/number-float32-base-to-binary-string/tree/umd

</section>

<!-- /.links -->
