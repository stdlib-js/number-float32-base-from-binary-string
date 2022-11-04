// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@v0.0.7-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@v0.0.7-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@v0.0.8-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";function o(o){var m,a,d;if(32!==o.length)throw new Error(r("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,o));if(m="1"===o[0]?-1:1,d=parseInt(o.substring(1,9),2)-n,a=function(t){var s,n=0;for(s=0;s<t.length;s++)"1"===t[s]&&(n+=e(2,-(s+1)));return n}(o.substring(9)),d===-n){if(0===a)return 1===m?0:-0;d=-(n-1)}else{if(d===n+1)return 0===a?1===m?t:s:NaN;a+=1}return i(m*a*e(2,d))}export{o as default};
//# sourceMappingURL=index.mjs.map
