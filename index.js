// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,t=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"";r=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,a,o,u,f;if(null==r)return n.call(r);a=r[i],f=i,e=null!=(u=r)&&t.call(u,f);try{r[i]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[i]=a:delete r[i],o}:function(r){return n.call(r)};var a,o=r,u="function"==typeof Float32Array,f=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,l="function"==typeof Float32Array?Float32Array:void 0;a=function(){var r,e,n;if("function"!=typeof c)return!1;try{e=new c([1,3.14,-3.14,5e40]),n=e,r=(u&&n instanceof Float32Array||"[object Float32Array]"===o(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===f}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var s,p=a,y="function"==typeof Uint32Array,g="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,e,n;if("function"!=typeof g)return!1;try{e=new g(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(y&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=s,v=new p(1);new h(v.buffer)[0]=2139095040;var w=v[0],b=new p(1);new h(b.buffer)[0]=4286578688;var m=b[0],A=127;function _(r){return r!=r}var E=Math.floor;function F(r){return E(r)===r}function I(r){return F(r/2)}function U(r){return I(r>0?r-1:r+1)}var S=Number.NEGATIVE_INFINITY;function x(r){return r===f||r===S}var j=Math.sqrt;function k(r){return Math.abs(r)}var T="function"==typeof Object.defineProperty?Object.defineProperty:null,N=Object.defineProperty,V=Object.prototype,O=V.toString,$=V.__defineGetter__,G=V.__defineSetter__,H=V.__lookupGetter__,W=V.__lookupSetter__,C=function(){try{return T({},"x",{}),!0}catch(r){return!1}}()?N:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===O.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=V,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var P,M="function"==typeof Float64Array,R="function"==typeof Float64Array?Float64Array:null,Z="function"==typeof Float64Array?Float64Array:void 0;P=function(){var r,e,n;if("function"!=typeof R)return!1;try{e=new R([1,3.14,-3.14,NaN]),n=e,r=(M&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var q,X=P,Y="function"==typeof Uint8Array,z="function"==typeof Uint8Array?Uint8Array:null,B="function"==typeof Uint8Array?Uint8Array:void 0;q=function(){var r,e,n;if("function"!=typeof z)return!1;try{e=new z(e=[1,3.14,-3.14,256,257]),n=e,r=(Y&&n instanceof Uint8Array||"[object Uint8Array]"===o(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")};var D,J=q,K="function"==typeof Uint16Array,Q="function"==typeof Uint16Array?Uint16Array:null,rr="function"==typeof Uint16Array?Uint16Array:void 0;D=function(){var r,e,n;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,65536,65537]),n=e,r=(K&&n instanceof Uint16Array||"[object Uint16Array]"===o(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er,nr={uint16:D,uint8:J};(er=new nr.uint16(1))[0]=4660;var tr,ir,ar=52===new nr.uint8(er.buffer)[0];!0===ar?(tr=1,ir=0):(tr=0,ir=1);var or={HIGH:tr,LOW:ir},ur=new X(1),fr=new h(ur.buffer),cr=or.HIGH,lr=or.LOW;function sr(r,e,n,t){return ur[0]=r,e[t]=fr[cr],e[t+n]=fr[lr],e}function pr(r){return sr(r,[0,0],1,0)}L(pr,"assign",sr);var yr=!0===ar?0:1,gr=new X(1),dr=new h(gr.buffer);function hr(r,e){return gr[0]=r,dr[yr]=e>>>0,gr[0]}function vr(r){return 0|r}var wr,br,mr=2147483647,Ar=!0===ar?1:0,_r=new X(1),Er=new h(_r.buffer);function Fr(r){return _r[0]=r,Er[Ar]}!0===ar?(wr=1,br=0):(wr=0,br=1);var Ir={HIGH:wr,LOW:br},Ur=new X(1),Sr=new h(Ur.buffer),xr=Ir.HIGH,jr=Ir.LOW;function kr(r,e){return Sr[xr]=r,Sr[jr]=e,Ur[0]}var Tr=[0,0];function Nr(r,e){var n,t;return pr.assign(r,Tr,1,0),n=Tr[0],n&=mr,t=Fr(e),kr(n|=t&=2147483648,Tr[1])}var Vr=!0===ar?1:0,Or=new X(1),$r=new h(Or.buffer);function Gr(r,e){return Or[0]=r,$r[Vr]=e>>>0,Or[0]}var Hr=1023,Wr=1048576,Cr=[1,1.5],Lr=[0,.5849624872207642],Pr=[0,1.350039202129749e-8];function Mr(r,e,n,t){return _(r)||x(r)?(e[t]=r,e[t+n]=0,e):0!==r&&k(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return Mr(r,[0,0],1,0)}),"assign",Mr);var Rr=[0,0],Zr=[0,0];function qr(r,e){var n,t;return 0===e||0===r||_(r)||x(r)?r:(Mr(r,Rr,1,0),e+=Rr[1],e+=function(r){var e=Fr(r);return(e=(2146435072&e)>>>20)-Hr|0}(r=Rr[0]),e<-1074?Nr(0,r):e>1023?r<0?S:f:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,pr.assign(r,Zr,1,0),n=Zr[0],n&=2148532223,t*kr(n|=e+Hr<<20,Zr[1])))}var Xr=1048575,Yr=1048576,zr=1083179008,Br=1e300,Dr=1e-300,Jr=[0,0],Kr=[0,0];function Qr(r,e){var n,t,i,a,o,u,c,l,s,p,y,g,d,h;if(_(r)||_(e))return NaN;if(pr.assign(e,Jr,1,0),o=Jr[0],0===Jr[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return j(r);if(-.5===e)return 1/j(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(x(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:k(r)<1==(e===f)?0:f}(r,e)}if(pr.assign(r,Jr,1,0),a=Jr[0],0===Jr[1]){if(0===a)return function(r,e){return e===S?f:e===f?0:e>0?U(e)?r:0:U(e)?Nr(f,r):f}(r,e);if(1===r)return 1;if(-1===r&&U(e))return-1;if(x(r))return r===S?Qr(-0,-e):e<0?0:f}if(r<0&&!1===F(e))return(r-r)/(r-r);if(i=k(r),n=a&mr|0,t=o&mr|0,c=o>>>31|0,u=(u=a>>>31|0)&&U(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(Fr(r)&mr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*Br*Br:u*Dr*Dr;if(n>1072693248)return 0===c?u*Br*Br:u*Dr*Dr;y=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=hr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Kr,i)}else y=function(r,e,n){var t,i,a,o,u,f,c,l,s,p,y,g,d,h,v,w,b,m,A,_,E;return m=0,n<Wr&&(m-=53,n=Fr(e*=9007199254740992)),m+=(n>>20)-Hr|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=Wr),o=hr(i=(w=(e=Gr(e,n))-(c=Cr[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Gr(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=hr(f=3+(a=o*o)+(v+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(s=hr(s=(w=o*f)+(b=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(b-(s-w))+Pr[_])-((g=hr(g=(p=.9617967009544373*s)+y+(l=Lr[_])+(h=m),0))-h-l-p),r[0]=g,r[1]=d,r}(Kr,i,n);if(g=(p=(e-(l=hr(e,0)))*y[0]+e*y[1])+(s=l*y[0]),pr.assign(g,Jr,1,0),d=vr(Jr[0]),h=vr(Jr[1]),d>=zr){if(0!=(d-zr|h))return u*Br*Br;if(p+8008566259537294e-32>g-s)return u*Br*Br}else if((d&mr)>=1083231232){if(0!=(d-3230714880|h))return u*Dr*Dr;if(p<=g-s)return u*Dr*Dr}return g=function(r,e,n){var t,i,a,o,u,f,c,l,s,p;return s=((l=r&mr|0)>>20)-Hr|0,c=0,l>1071644672&&(i=Gr(0,((c=r+(Yr>>s+1)>>>0)&~(Xr>>(s=((c&mr)>>20)-Hr|0)))>>>0),c=(c&Xr|Yr)>>20-s>>>0,r<0&&(c=-c),e-=i),r=vr(r=Fr(f=1-((f=(a=.6931471824645996*(i=hr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?qr(f,c):Gr(f,r)}(d,s,p),u*g}function re(r){return"number"==typeof r}function ee(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function ne(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+ee(i):ee(i)+r,t&&(r="-"+r)),r}var te=String.prototype.toLowerCase,ie=String.prototype.toUpperCase;function ae(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!re(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=ne(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=ne(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===ie.call(r.specifier)?ie.call(n):te.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function oe(r){return"string"==typeof r}var ue=Math.abs,fe=String.prototype.toLowerCase,ce=String.prototype.toUpperCase,le=String.prototype.replace,se=/e\+(\d)$/,pe=/e-(\d)$/,ye=/^(\d+)$/,ge=/^(\d+)e/,de=/\.0$/,he=/\.0*e/,ve=/(\..*[^0])0*e/;function we(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!re(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":ue(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=le.call(n,ve,"$1e"),n=le.call(n,he,"e"),n=le.call(n,de,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=le.call(n,se,"e+0$1"),n=le.call(n,pe,"e-0$1"),r.alternate&&(n=le.call(n,ye,"$1."),n=le.call(n,ge,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===ce.call(r.specifier)?ce.call(n):fe.call(n)}function be(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function me(r,e,n){var t=e-r.length;return t<0?r:r=n?r+be(t):be(t)+r}var Ae=String.fromCharCode,_e=isNaN,Ee=Array.isArray;function Fe(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ie(r){var e,n,t,i,a,o,u,f,c;if(!Ee(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(oe(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=Fe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,_e(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,_e(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=ae(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_e(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_e(a)?String(t.arg):Ae(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=we(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ne(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=me(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Ue=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Se(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function xe(r){var e,n,t,i;for(n=[],i=0,t=Ue.exec(r);t;)(e=r.slice(i,Ue.lastIndex-t[0].length)).length&&n.push(e),n.push(Se(t)),i=Ue.lastIndex,t=Ue.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function je(r){return"string"==typeof r}function ke(r){var e,n,t;if(!je(r))throw new TypeError(ke("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=xe(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Ie.apply(null,n)}var Te="function"==typeof Math.fround?Math.fround:null,Ne=new p(1),Ve="function"==typeof Te?Te:function(r){return Ne[0]=r,Ne[0]};return function(r){var e,n,t;if(32!==r.length)throw new Error(ke("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));if(e="1"===r[0]?-1:1,t=parseInt(r.substring(1,9),2)-A,n=function(r){var e,n=0;for(e=0;e<r.length;e++)"1"===r[e]&&(n+=Qr(2,-(e+1)));return n}(r.substring(9)),-127===t){if(0===n)return 1===e?0:-0;t=-126}else{if(128===t)return 0===n?1===e?w:m:NaN;n+=1}return Ve(e*n*Qr(2,t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).fromBinaryStringf=e();
//# sourceMappingURL=index.js.map