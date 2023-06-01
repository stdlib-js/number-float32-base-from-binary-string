// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var t,i="function"==typeof Symbol?Symbol.toStringTag:"";t=r&&"symbol"==typeof Symbol.toStringTag?function(r){var t,a,o,u,f;if(null==r)return e.call(r);a=r[i],f=i,t=null!=(u=r)&&n.call(u,f);try{r[i]=void 0}catch(n){return e.call(r)}return o=e.call(r),t?r[i]=a:delete r[i],o}:function(r){return e.call(r)};var a=t,o="function"==typeof Float32Array;var u=Number.POSITIVE_INFINITY,f="function"==typeof Float32Array?Float32Array:null;var c,l="function"==typeof Float32Array?Float32Array:void 0;c=function(){var r,e,n;if("function"!=typeof f)return!1;try{e=new f([1,3.14,-3.14,5e40]),n=e,r=(o&&n instanceof Float32Array||"[object Float32Array]"===a(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===u}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var s=c,p="function"==typeof Uint32Array;var y="function"==typeof Uint32Array?Uint32Array:null;var g,v="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var r,e,n;if("function"!=typeof y)return!1;try{e=new y(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(p&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?v:function(){throw new Error("not implemented")};var d=g,h=new s(1);new d(h.buffer)[0]=2139095040;var w=h[0],b=new s(1);new d(b.buffer)[0]=4286578688;var m=b[0];function A(r){return r!=r}var _=Math.floor;function E(r){return _(r)===r}function F(r){return E(r/2)}function I(r){return F(r>0?r-1:r+1)}var U=Number.NEGATIVE_INFINITY;function S(r){return r===u||r===U}var k=Math.sqrt;function x(r){return Math.abs(r)}var j="function"==typeof Object.defineProperty?Object.defineProperty:null;var N=Object.defineProperty,T=Object.prototype,V=T.toString,O=T.__defineGetter__,$=T.__defineSetter__,G=T.__lookupGetter__,H=T.__lookupSetter__;var W=function(){try{return j({},"x",{}),!0}catch(r){return!1}}()?N:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((i="value"in n)&&(G.call(r,e)||H.call(r,e)?(t=r.__proto__,r.__proto__=T,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,n.get),o&&$&&$.call(r,e,n.set),r};function C(r,e,n){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var L="function"==typeof Float64Array;var P="function"==typeof Float64Array?Float64Array:null;var M,R="function"==typeof Float64Array?Float64Array:void 0;M=function(){var r,e,n;if("function"!=typeof P)return!1;try{e=new P([1,3.14,-3.14,NaN]),n=e,r=(L&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?R:function(){throw new Error("not implemented")};var Z=M,q="function"==typeof Uint8Array;var X="function"==typeof Uint8Array?Uint8Array:null;var Y,z="function"==typeof Uint8Array?Uint8Array:void 0;Y=function(){var r,e,n;if("function"!=typeof X)return!1;try{e=new X(e=[1,3.14,-3.14,256,257]),n=e,r=(q&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B=Y,D="function"==typeof Uint16Array;var J="function"==typeof Uint16Array?Uint16Array:null;var K,Q="function"==typeof Uint16Array?Uint16Array:void 0;K=function(){var r,e,n;if("function"!=typeof J)return!1;try{e=new J(e=[1,3.14,-3.14,65536,65537]),n=e,r=(D&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,er={uint16:K,uint8:B};(rr=new er.uint16(1))[0]=4660;var nr,tr,ir=52===new er.uint8(rr.buffer)[0];!0===ir?(nr=1,tr=0):(nr=0,tr=1);var ar={HIGH:nr,LOW:tr},or=new Z(1),ur=new d(or.buffer),fr=ar.HIGH,cr=ar.LOW;function lr(r,e,n,t){return or[0]=r,e[t]=ur[fr],e[t+n]=ur[cr],e}function sr(r){return lr(r,[0,0],1,0)}C(sr,"assign",lr);var pr=!0===ir?0:1,yr=new Z(1),gr=new d(yr.buffer);function vr(r,e){return yr[0]=r,gr[pr]=e>>>0,yr[0]}function dr(r){return 0|r}var hr,wr,br=!0===ir?1:0,mr=new Z(1),Ar=new d(mr.buffer);function _r(r){return mr[0]=r,Ar[br]}!0===ir?(hr=1,wr=0):(hr=0,wr=1);var Er={HIGH:hr,LOW:wr},Fr=new Z(1),Ir=new d(Fr.buffer),Ur=Er.HIGH,Sr=Er.LOW;function kr(r,e){return Ir[Ur]=r,Ir[Sr]=e,Fr[0]}var xr=[0,0];function jr(r,e){var n,t;return sr.assign(r,xr,1,0),n=xr[0],n&=2147483647,t=_r(e),kr(n|=t&=2147483648,xr[1])}var Nr=!0===ir?1:0,Tr=new Z(1),Vr=new d(Tr.buffer);function Or(r,e){return Tr[0]=r,Vr[Nr]=e>>>0,Tr[0]}var $r=[1,1.5],Gr=[0,.5849624872207642],Hr=[0,1.350039202129749e-8];function Wr(r,e,n,t){return A(r)||S(r)?(e[t]=r,e[t+n]=0,e):0!==r&&x(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}C((function(r){return Wr(r,[0,0],1,0)}),"assign",Wr);var Cr=[0,0],Lr=[0,0];function Pr(r,e){var n,t;return 0===e||0===r||A(r)||S(r)?r:(Wr(r,Cr,1,0),e+=Cr[1],e+=function(r){var e=_r(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Cr[0]),e<-1074?jr(0,r):e>1023?r<0?U:u:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,sr.assign(r,Lr,1,0),n=Lr[0],n&=2148532223,t*kr(n|=e+1023<<20,Lr[1])))}var Mr=1e300,Rr=1e-300,Zr=[0,0],qr=[0,0];function Xr(r,e){var n,t,i,a,o,f,c,l,s,p,y,g,v,d;if(A(r)||A(e))return NaN;if(sr.assign(e,Zr,1,0),o=Zr[0],0===Zr[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return k(r);if(-.5===e)return 1/k(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(S(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:x(r)<1==(e===u)?0:u}(r,e)}if(sr.assign(r,Zr,1,0),a=Zr[0],0===Zr[1]){if(0===a)return function(r,e){return e===U?u:e===u?0:e>0?I(e)?r:0:I(e)?jr(u,r):u}(r,e);if(1===r)return 1;if(-1===r&&I(e))return-1;if(S(r))return r===U?Xr(-0,-e):e<0?0:u}if(r<0&&!1===E(e))return(r-r)/(r-r);if(i=x(r),n=2147483647&a|0,t=2147483647&o|0,c=o>>>31|0,f=(f=a>>>31|0)&&I(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&_r(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?f*Mr*Mr:f*Rr*Rr;if(n>1072693248)return 0===c?f*Mr*Mr:f*Rr*Rr;y=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=vr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(qr,i)}else y=function(r,e,n){var t,i,a,o,u,f,c,l,s,p,y,g,v,d,h,w,b,m,A,_,E;return m=0,n<1048576&&(m-=53,n=_r(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=1048576),o=vr(i=(w=(e=Or(e,n))-(c=$r[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Or(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=vr(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),v=(y=-7.028461650952758e-9*(s=vr(s=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(s-w))+Hr[_])-((g=vr(g=(p=.9617967009544373*s)+y+(l=Gr[_])+(d=m),0))-d-l-p),r[0]=g,r[1]=v,r}(qr,i,n);if(g=(p=(e-(l=vr(e,0)))*y[0]+e*y[1])+(s=l*y[0]),sr.assign(g,Zr,1,0),v=dr(Zr[0]),d=dr(Zr[1]),v>=1083179008){if(0!=(v-1083179008|d))return f*Mr*Mr;if(p+8008566259537294e-32>g-s)return f*Mr*Mr}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|d))return f*Rr*Rr;if(p<=g-s)return f*Rr*Rr}return g=function(r,e,n){var t,i,a,o,u,f,c,l,s,p,y;return p=((s=2147483647&r|0)>>20)-1023|0,l=0,s>1071644672&&(t=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),e-=a=Or(0,t)),r=dr(r=_r(c=1-((c=(o=.6931471824645996*(a=vr(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Pr(c,l):Or(c,r)}(v,s,p),f*g}function Yr(r){return"number"==typeof r}function zr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Br(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+zr(i):zr(i)+r,t&&(r="-"+r)),r}var Dr=String.prototype.toLowerCase,Jr=String.prototype.toUpperCase;function Kr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Yr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Br(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Br(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===Jr.call(r.specifier)?Jr.call(n):Dr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function Qr(r){return"string"==typeof r}var re=Math.abs,ee=String.prototype.toLowerCase,ne=String.prototype.toUpperCase,te=String.prototype.replace,ie=/e\+(\d)$/,ae=/e-(\d)$/,oe=/^(\d+)$/,ue=/^(\d+)e/,fe=/\.0$/,ce=/\.0*e/,le=/(\..*[^0])0*e/;function se(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Yr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":re(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=te.call(n,le,"$1e"),n=te.call(n,ce,"e"),n=te.call(n,fe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=te.call(n,ie,"e+0$1"),n=te.call(n,ae,"e-0$1"),r.alternate&&(n=te.call(n,oe,"$1."),n=te.call(n,ue,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===ne.call(r.specifier)?ne.call(n):ee.call(n)}function pe(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function ye(r,e,n){var t=e-r.length;return t<0?r:r=n?r+pe(t):pe(t)+r}var ge=String.fromCharCode,ve=isNaN,de=Array.isArray;function he(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function we(r){var e,n,t,i,a,o,u,f,c;if(!de(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(Qr(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=he(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,ve(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,ve(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Kr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!ve(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ve(a)?String(t.arg):ge(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=se(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Br(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ye(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var be=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function me(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ae(r){var e,n,t,i;for(n=[],i=0,t=be.exec(r);t;)(e=r.slice(i,be.lastIndex-t[0].length)).length&&n.push(e),n.push(me(t)),i=be.lastIndex,t=be.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function _e(r){return"string"==typeof r}function Ee(r){var e,n,t;if(!_e(r))throw new TypeError(Ee("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Ae(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return we.apply(null,n)}var Fe="function"==typeof Math.fround?Math.fround:null,Ie=new s(1);var Ue="function"==typeof Fe?Fe:function(r){return Ie[0]=r,Ie[0]};function Se(r){var e,n,t;if(32!==r.length)throw new Error(Ee("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));if(e="1"===r[0]?-1:1,t=parseInt(r.substring(1,9),2)-127,n=function(r){var e,n=0;for(e=0;e<r.length;e++)"1"===r[e]&&(n+=Xr(2,-(e+1)));return n}(r.substring(9)),-127===t){if(0===n)return 1===e?0:-0;t=-126}else{if(128===t)return 0===n?1===e?w:m:NaN;n+=1}return Ue(e*n*Xr(2,t))}export{Se as default};
//# sourceMappingURL=mod.js.map