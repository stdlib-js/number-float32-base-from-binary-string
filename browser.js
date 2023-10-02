// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,t=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";r=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,o,u,f;if(null==r)return n.call(r);i=r[a],f=a,e=null!=(u=r)&&t.call(u,f);try{r[a]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[a]=i:delete r[a],o}:function(r){return n.call(r)};var o,u=r,f="function"==typeof Float32Array,c=Number.POSITIVE_INFINITY,s="function"==typeof Float32Array?Float32Array:null,l="function"==typeof Float32Array?Float32Array:void 0;o=function(){var r,e,n;if("function"!=typeof s)return!1;try{e=new s([1,3.14,-3.14,5e40]),n=e,r=(f&&n instanceof Float32Array||"[object Float32Array]"===u(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===c}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,y=o,g="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,h="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var r,e,n;if("function"!=typeof d)return!1;try{e=new d(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(g&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?h:function(){throw new Error("not implemented")};var v=p,w=new y(1);new v(w.buffer)[0]=2139095040;var b=w[0],m=new y(1);new v(m.buffer)[0]=4286578688;var A=m[0],_=127;function E(r){return r!=r}var F=Math.floor;function U(r){return F(r)===r}function I(r){return U(r/2)}function S(r){return I(r>0?r-1:r+1)}var j=Number.NEGATIVE_INFINITY;function k(r){return r===c||r===j}var x=Math.sqrt;function T(r){return Math.abs(r)}var N="function"==typeof Object.defineProperty?Object.defineProperty:null,O=Object.defineProperty;function V(r){return"number"==typeof r}function $(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function G(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+$(i):$(i)+r,t&&(r="-"+r)),r}var C=String.prototype.toLowerCase,H=String.prototype.toUpperCase;function L(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!V(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=G(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=G(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===H.call(r.specifier)?H.call(n):C.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function W(r){return"string"==typeof r}var P=Math.abs,R=String.prototype.toLowerCase,M=String.prototype.toUpperCase,Z=String.prototype.replace,X=/e\+(\d)$/,Y=/e-(\d)$/,q=/^(\d+)$/,z=/^(\d+)e/,B=/\.0$/,Q=/\.0*e/,D=/(\..*[^0])0*e/;function J(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!V(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":P(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=Z.call(n,D,"$1e"),n=Z.call(n,Q,"e"),n=Z.call(n,B,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Z.call(n,X,"e+0$1"),n=Z.call(n,Y,"e-0$1"),r.alternate&&(n=Z.call(n,q,"$1."),n=Z.call(n,z,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===M.call(r.specifier)?M.call(n):R.call(n)}function K(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function rr(r,e,n){var t=e-r.length;return t<0?r:r=n?r+K(t):K(t)+r}var er=String.fromCharCode,nr=isNaN,tr=Array.isArray;function ir(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ar(r){var e,n,t,i,a,o,u,f,c;if(!tr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(W(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=ir(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,nr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,nr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=L(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!nr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=nr(a)?String(t.arg):er(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=J(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=G(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=rr(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ur(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function fr(r){var e,n,t,i;for(n=[],i=0,t=or.exec(r);t;)(e=r.slice(i,or.lastIndex-t[0].length)).length&&n.push(e),n.push(ur(t)),i=or.lastIndex,t=or.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function cr(r){return"string"==typeof r}function sr(r){var e,n,t;if(!cr(r))throw new TypeError(sr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=fr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return ar.apply(null,n)}var lr=Object.prototype,pr=lr.toString,yr=lr.__defineGetter__,gr=lr.__defineSetter__,dr=lr.__lookupGetter__,hr=lr.__lookupSetter__,vr=function(){try{return N({},"x",{}),!0}catch(r){return!1}}()?O:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===pr.call(r))throw new TypeError(sr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===pr.call(n))throw new TypeError(sr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(dr.call(r,e)||hr.call(r,e)?(t=r.__proto__,r.__proto__=lr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&yr&&yr.call(r,e,n.get),o&&gr&&gr.call(r,e,n.set),r};function wr(r,e,n){vr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var br,mr="function"==typeof Float64Array,Ar="function"==typeof Float64Array?Float64Array:null,_r="function"==typeof Float64Array?Float64Array:void 0;br=function(){var r,e,n;if("function"!=typeof Ar)return!1;try{e=new Ar([1,3.14,-3.14,NaN]),n=e,r=(mr&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Fr=br,Ur="function"==typeof Uint8Array,Ir="function"==typeof Uint8Array?Uint8Array:null,Sr="function"==typeof Uint8Array?Uint8Array:void 0;Er=function(){var r,e,n;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,256,257]),n=e,r=(Ur&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var jr,kr=Er,xr="function"==typeof Uint16Array,Tr="function"==typeof Uint16Array?Uint16Array:null,Nr="function"==typeof Uint16Array?Uint16Array:void 0;jr=function(){var r,e,n;if("function"!=typeof Tr)return!1;try{e=new Tr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(xr&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Or,Vr={uint16:jr,uint8:kr};(Or=new Vr.uint16(1))[0]=4660;var $r,Gr,Cr=52===new Vr.uint8(Or.buffer)[0];!0===Cr?($r=1,Gr=0):($r=0,Gr=1);var Hr={HIGH:$r,LOW:Gr},Lr=new Fr(1),Wr=new v(Lr.buffer),Pr=Hr.HIGH,Rr=Hr.LOW;function Mr(r,e,n,t){return Lr[0]=r,e[t]=Wr[Pr],e[t+n]=Wr[Rr],e}function Zr(r){return Mr(r,[0,0],1,0)}wr(Zr,"assign",Mr);var Xr=!0===Cr?0:1,Yr=new Fr(1),qr=new v(Yr.buffer);function zr(r,e){return Yr[0]=r,qr[Xr]=e>>>0,Yr[0]}function Br(r){return 0|r}var Qr,Dr,Jr=2147483647,Kr=!0===Cr?1:0,re=new Fr(1),ee=new v(re.buffer);function ne(r){return re[0]=r,ee[Kr]}!0===Cr?(Qr=1,Dr=0):(Qr=0,Dr=1);var te={HIGH:Qr,LOW:Dr},ie=new Fr(1),ae=new v(ie.buffer),oe=te.HIGH,ue=te.LOW;function fe(r,e){return ae[oe]=r,ae[ue]=e,ie[0]}var ce=[0,0];function se(r,e){var n,t;return Zr.assign(r,ce,1,0),n=ce[0],n&=Jr,t=ne(e),fe(n|=t&=2147483648,ce[1])}var le=!0===Cr?1:0,pe=new Fr(1),ye=new v(pe.buffer);function ge(r,e){return pe[0]=r,ye[le]=e>>>0,pe[0]}var de=1023,he=1048576,ve=[1,1.5],we=[0,.5849624872207642],be=[0,1.350039202129749e-8];function me(r,e,n,t){return E(r)||k(r)?(e[t]=r,e[t+n]=0,e):0!==r&&T(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}wr((function(r){return me(r,[0,0],1,0)}),"assign",me);var Ae=[0,0],_e=[0,0];function Ee(r,e){var n,t;return 0===e||0===r||E(r)||k(r)?r:(me(r,Ae,1,0),e+=Ae[1],e+=function(r){var e=ne(r);return(e=(2146435072&e)>>>20)-de|0}(r=Ae[0]),e<-1074?se(0,r):e>1023?r<0?j:c:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Zr.assign(r,_e,1,0),n=_e[0],n&=2148532223,t*fe(n|=e+de<<20,_e[1])))}var Fe=1048575,Ue=1048576,Ie=1083179008,Se=1e300,je=1e-300,ke=[0,0],xe=[0,0];function Te(r,e){var n,t,i,a,o,u,f,s,l,p,y,g,d,h;if(E(r)||E(e))return NaN;if(Zr.assign(e,ke,1,0),o=ke[0],0===ke[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return x(r);if(-.5===e)return 1/x(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(k(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:T(r)<1==(e===c)?0:c}(r,e)}if(Zr.assign(r,ke,1,0),a=ke[0],0===ke[1]){if(0===a)return function(r,e){return e===j?c:e===c?0:e>0?S(e)?r:0:S(e)?se(c,r):c}(r,e);if(1===r)return 1;if(-1===r&&S(e))return-1;if(k(r))return r===j?Te(-0,-e):e<0?0:c}if(r<0&&!1===U(e))return(r-r)/(r-r);if(i=T(r),n=a&Jr|0,t=o&Jr|0,f=o>>>31|0,u=(u=a>>>31|0)&&S(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(ne(r)&Jr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*Se*Se:u*je*je;if(n>1072693248)return 0===f?u*Se*Se:u*je*je;y=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=zr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(xe,i)}else y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,h,v,w,b,m,A,_,E;return m=0,n<he&&(m-=53,n=ne(e*=9007199254740992)),m+=(n>>20)-de|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=he),o=zr(i=(w=(e=ge(e,n))-(c=ve[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=ge(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=zr(f=3+(a=o*o)+(v+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=zr(l=(w=o*f)+(b=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+be[_])-((g=zr(g=(p=.9617967009544373*l)+y+(s=we[_])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(xe,i,n);if(g=(p=(e-(s=zr(e,0)))*y[0]+e*y[1])+(l=s*y[0]),Zr.assign(g,ke,1,0),d=Br(ke[0]),h=Br(ke[1]),d>=Ie){if(0!=(d-Ie|h))return u*Se*Se;if(p+8008566259537294e-32>g-l)return u*Se*Se}else if((d&Jr)>=1083231232){if(0!=(d-3230714880|h))return u*je*je;if(p<=g-l)return u*je*je}return g=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Jr|0)>>20)-de|0,c=0,s>1071644672&&(i=ge(0,((c=r+(Ue>>l+1)>>>0)&~(Fe>>(l=((c&Jr)>>20)-de|0)))>>>0),c=(c&Fe|Ue)>>20-l>>>0,r<0&&(c=-c),e-=i),r=Br(r=ne(f=1-((f=(a=.6931471824645996*(i=zr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Ee(f,c):ge(f,r)}(d,l,p),u*g}var Ne="function"==typeof Math.fround?Math.fround:null,Oe=new y(1),Ve="function"==typeof Ne?Ne:function(r){return Oe[0]=r,Oe[0]};return function(r){var e,n,t;if(32!==r.length)throw new Error(function(){var r,e=arguments,n="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}("0kj60,LQ",32,r));if(e="1"===r[0]?-1:1,t=parseInt(r.substring(1,9),2)-_,n=function(r){var e,n=0;for(e=0;e<r.length;e++)"1"===r[e]&&(n+=Te(2,-(e+1)));return n}(r.substring(9)),-127===t){if(0===n)return 1===e?0:-0;t=-126}else{if(128===t)return 0===n?1===e?b:A:NaN;n+=1}return Ve(e*n*Te(2,t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).fromBinaryStringf=e();
//# sourceMappingURL=browser.js.map