"use strict";var u=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var o=u(function(w,n){"use strict";var f=require("@stdlib/math-base-special-pow");function q(i){var r=0,e;for(e=0;e<i.length;e++)i[e]==="1"&&(r+=f(2,-(e+1)));return r}n.exports=q});var v=u(function(x,s){"use strict";var g=require("@stdlib/constants-float32-pinf"),l=require("@stdlib/constants-float32-ninf"),a=require("@stdlib/constants-float32-exponent-bias"),p=require("@stdlib/math-base-special-pow"),c=require("@stdlib/string-format"),m=require("@stdlib/number-float64-base-to-float32"),h=o();function F(i){var r,e,t;if(i.length!==32)throw new Error(c("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,i));if(r=i[0]==="1"?-1:1,t=parseInt(i.substring(1,9),2)-a,e=h(i.substring(9)),t===-a){if(e===0)return r===1?0:-0;t=-(a-1)}else{if(t===a+1)return e===0?r===1?g:l:NaN;e+=1}return m(r*e*p(2,t))}s.exports=F});var I=v();module.exports=I;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
