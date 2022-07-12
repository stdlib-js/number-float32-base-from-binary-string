// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,t=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"";r=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,a,o,f,u;if(null==r)return e.call(r);a=r[i],u=i,n=null!=(f=r)&&t.call(f,u);try{r[i]=void 0}catch(n){return e.call(r)}return o=e.call(r),n?r[i]=a:delete r[i],o}:function(r){return e.call(r)};var a,o=r,f="function"==typeof Float32Array,u=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,s="function"==typeof Float32Array?Float32Array:void 0;a=function(){var r,n,e;if("function"!=typeof c)return!1;try{n=new c([1,3.14,-3.14,5e40]),e=n,r=(f&&e instanceof Float32Array||"[object Float32Array]"===o(e))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===u}catch(n){r=!1}return r}()?s:function(){throw new Error("not implemented")};var l,p=a,y="function"==typeof Uint32Array,g="function"==typeof Uint32Array?Uint32Array:null,h="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var r,n,e;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(y&&e instanceof Uint32Array||"[object Uint32Array]"===o(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var d=l,w=new p(1);new d(w.buffer)[0]=2139095040;var v=w[0],b=new p(1);new d(b.buffer)[0]=4286578688;var m=b[0],A=127;function E(r){return r!=r}var F=Math.floor;function I(r){return F(r)===r}function U(r){return I(r/2)}function S(r){return U(r>0?r-1:r+1)}var x=Number.NEGATIVE_INFINITY;function k(r){return r===u||r===x}var N=Math.sqrt;function T(r){return Math.abs(r)}var V,$="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,j="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,n,e;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),e=n,r=($&&e instanceof Float64Array||"[object Float64Array]"===o(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var H,W=V,G="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,C="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,n,e;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),e=n,r=(G&&e instanceof Uint8Array||"[object Uint8Array]"===o(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var M,R=H,Z="function"==typeof Uint16Array,P="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,e;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,65536,65537]),e=n,r=(Z&&e instanceof Uint16Array||"[object Uint16Array]"===o(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var X,Y={uint16:M,uint8:R};(X=new Y.uint16(1))[0]=4660;var _,z,B=52===new Y.uint8(X.buffer)[0];!0===B?(_=1,z=0):(_=0,z=1);var D={HIGH:_,LOW:z},J=new W(1),K=new d(J.buffer),Q=D.HIGH,rr=D.LOW;function nr(r,n){return J[0]=n,r[0]=K[Q],r[1]=K[rr],r}function er(r,n){return 1===arguments.length?nr([0,0],r):nr(r,n)}var tr=!0===B?0:1,ir=new W(1),ar=new d(ir.buffer);function or(r,n){return ir[0]=r,ar[tr]=n>>>0,ir[0]}function fr(r){return 0|r}var ur,cr,sr=!0===B?1:0,lr=new W(1),pr=new d(lr.buffer);function yr(r){return lr[0]=r,pr[sr]}!0===B?(ur=1,cr=0):(ur=0,cr=1);var gr={HIGH:ur,LOW:cr},hr=new W(1),dr=new d(hr.buffer),wr=gr.HIGH,vr=gr.LOW;function br(r,n){return dr[wr]=r,dr[vr]=n,hr[0]}var mr=[0,0];function Ar(r,n){var e,t;return er(mr,r),e=mr[0],e&=2147483647,t=yr(n),br(e|=t&=2147483648,mr[1])}var Er=!0===B?1:0,Fr=new W(1),Ir=new d(Fr.buffer);function Ur(r,n){return Fr[0]=r,Ir[Er]=n>>>0,Fr[0]}var Sr=1023,xr=1048576,kr=[1,1.5],Nr=[0,.5849624872207642],Tr=[0,1.350039202129749e-8];function Vr(r,n){return E(n)||k(n)?(r[0]=n,r[1]=0,r):0!==n&&T(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var $r=[0,0],Or=[0,0];function jr(r,n){var e,t;return 0===n||0===r||E(r)||k(r)?r:(function(r,n){1===arguments.length?Vr([0,0],r):Vr(r,n)}($r,r),n+=$r[1],n+=function(r){var n=yr(r);return(n=(2146435072&n)>>>20)-Sr|0}(r=$r[0]),n<-1074?Ar(0,r):n>1023?r<0?x:u:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,er(Or,r),e=Or[0],e&=2148532223,t*br(e|=n+Sr<<20,Or[1])))}var Hr=2147483647,Wr=1048575,Gr=1048576,Lr=2147483647,Cr=1083179008,Mr=1e300,Rr=1e-300,Zr=[0,0],Pr=[0,0];function qr(r,n){var e,t,i,a,o,f,c,s,l,p,y,g,h,d;if(E(r)||E(n))return NaN;if(er(Zr,n),o=Zr[0],0===Zr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return N(r);if(-.5===n)return 1/N(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(k(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:T(r)<1==(n===u)?0:u}(r,n)}if(er(Zr,r),a=Zr[0],0===Zr[1]){if(0===a)return function(r,n){return n===x?u:n===u?0:n>0?S(n)?r:0:S(n)?Ar(u,r):u}(r,n);if(1===r)return 1;if(-1===r&&S(n))return-1;if(k(r))return r===x?qr(-0,-n):n<0?0:u}if(r<0&&!1===I(n))return(r-r)/(r-r);if(i=T(r),e=a&Lr|0,t=o&Lr|0,c=o>>>31|0,f=(f=a>>>31|0)&&S(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(2147483647&yr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===c?f*Mr*Mr:f*Rr*Rr;if(e>1072693248)return 0===c?f*Mr*Mr:f*Rr*Rr;y=function(r,n){var e,t,i,a,o,f;return e=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((t=or(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=e,r}(Pr,i)}else y=function(r,n,e){var t,i,a,o,f,u,c,s,l,p,y,g,h,d,w,v,b,m,A,E,F;return m=0,e<xr&&(m-=53,e=yr(n*=9007199254740992)),m+=(e>>20)-Sr|0,e=1072693248|(A=1048575&e|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,e-=xr),o=or(i=(v=(n=Ur(n,e))-(c=kr[E]))*(b=1/(n+c)),0),t=524288+(e>>1|536870912),u=Ur(0,t+=E<<18),w=(a=i*i)*a*(0===(F=a)?.5999999999999946:.5999999999999946+F*(.4285714285785502+F*(.33333332981837743+F*(.272728123808534+F*(.23066074577556175+.20697501780033842*F))))),u=or(u=3+(a=o*o)+(w+=(f=b*(v-o*u-o*(n-(u-c))))*(o+i)),0),h=(y=-7.028461650952758e-9*(l=or(l=(v=o*u)+(b=f*u+(w-(u-3-a))*i),0))+.9617966939259756*(b-(l-v))+Tr[E])-((g=or(g=(p=.9617967009544373*l)+y+(s=Nr[E])+(d=m),0))-d-s-p),r[0]=g,r[1]=h,r}(Pr,i,e);if(p=(n-(s=or(n,0)))*y[0]+n*y[1],l=s*y[0],er(Zr,g=p+l),h=fr(Zr[0]),d=fr(Zr[1]),h>=Cr){if(0!=(h-Cr|d))return f*Mr*Mr;if(p+8008566259537294e-32>g-l)return f*Mr*Mr}else if((h&Lr)>=1083231232){if(0!=(h-3230714880|d))return f*Rr*Rr;if(p<=g-l)return f*Rr*Rr}return g=function(r,n,e){var t,i,a,o,f,u,c,s,l,p;return l=((s=r&Hr|0)>>20)-Sr|0,c=0,s>1071644672&&(i=Ur(0,((c=r+(Gr>>l+1)>>>0)&~(Wr>>(l=((c&Hr)>>20)-Sr|0)))>>>0),c=(c&Wr|Gr)>>20-l>>>0,r<0&&(c=-c),n-=i),r=fr(r=yr(u=1-((u=(a=.6931471824645996*(i=or(i=e+n,0)))+(o=.6931471805599453*(e-(i-n))+-1.904654299957768e-9*i))*(t=u-(i=u*u)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((f=o-(u-a))+u*f)-u))),(r+=c<<20>>>0)>>20<=0?jr(u,c):Ur(u,r)}(h,l,p),f*g}function Xr(r){return"number"==typeof r}function Yr(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function _r(r,n,e){var t=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=e?r+Yr(i):Yr(i)+r,t&&(r="-"+r)),r}var zr=String.prototype.toLowerCase,Br=String.prototype.toUpperCase;function Dr(r){var n,e,t;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,t=parseInt(e,10),!isFinite(t)){if(!Xr(e))throw new Error("invalid integer. Value: "+e);t=0}return t<0&&("u"===r.specifier||10!==n)&&(t=4294967295+t+1),t<0?(e=(-t).toString(n),r.precision&&(e=_r(e,r.precision,r.padRight)),e="-"+e):(e=t.toString(n),t||r.precision?r.precision&&(e=_r(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===Br.call(r.specifier)?Br.call(e):zr.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function Jr(r){return"string"==typeof r}var Kr=Math.abs,Qr=String.prototype.toLowerCase,rn=String.prototype.toUpperCase,nn=String.prototype.replace,en=/e\+(\d)$/,tn=/e-(\d)$/,an=/^(\d+)$/,on=/^(\d+)e/,fn=/\.0$/,un=/\.0*e/,cn=/(\..*[^0])0*e/;function sn(r){var n,e,t=parseFloat(r.arg);if(!isFinite(t)){if(!Xr(r.arg))throw new Error("invalid floating-point number. Value: "+e);t=r.arg}switch(r.specifier){case"e":case"E":e=t.toExponential(r.precision);break;case"f":case"F":e=t.toFixed(r.precision);break;case"g":case"G":Kr(t)<1e-4?((n=r.precision)>0&&(n-=1),e=t.toExponential(n)):e=t.toPrecision(r.precision),r.alternate||(e=nn.call(e,cn,"$1e"),e=nn.call(e,un,"e"),e=nn.call(e,fn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=nn.call(e,en,"e+0$1"),e=nn.call(e,tn,"e-0$1"),r.alternate&&(e=nn.call(e,an,"$1."),e=nn.call(e,on,"$1.e")),t>=0&&r.sign&&(e=r.sign+e),e=r.specifier===rn.call(r.specifier)?rn.call(e):Qr.call(e)}function ln(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function pn(r,n,e){var t=n-r.length;return t<0?r:r=e?r+ln(t):ln(t)+r}var yn=String.fromCharCode,gn=isNaN,hn=Array.isArray;function dn(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function wn(r){var n,e,t,i,a,o,f,u,c;if(!hn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",f=1,u=0;u<r.length;u++)if(Jr(t=r[u]))o+=t;else{if(n=void 0!==t.precision,!(t=dn(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),e=t.flags,c=0;c<e.length;c++)switch(i=e.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,gn(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,gn(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=Dr(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!gn(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=gn(a)?String(t.arg):yn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=sn(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=_r(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=pn(t.arg,t.width,t.padRight)),o+=t.arg||"",f+=1}return o}var vn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function bn(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function mn(r){var n,e,t,i;for(e=[],i=0,t=vn.exec(r);t;)(n=r.slice(i,vn.lastIndex-t[0].length)).length&&e.push(n),e.push(bn(t)),i=vn.lastIndex,t=vn.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function An(r){return"string"==typeof r}function En(r){var n,e,t;if(!An(r))throw new TypeError(En("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=mn(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return wn.apply(null,e)}var Fn="function"==typeof Math.fround?Math.fround:null,In=new p(1),Un="function"==typeof Fn?Fn:function(r){return In[0]=r,In[0]};return function(r){var n,e,t;if(32!==r.length)throw new Error(En("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));if(n="1"===r[0]?-1:1,t=parseInt(r.substring(1,9),2)-A,e=function(r){var n,e=0;for(n=0;n<r.length;n++)"1"===r[n]&&(e+=qr(2,-(n+1)));return e}(r.substring(9)),-127===t){if(0===e)return 1===n?0:-0;t=-126}else{if(128===t)return 0===e?1===n?v:m:NaN;e+=1}return Un(n*e*qr(2,t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).fromBinaryStringf=n();
//# sourceMappingURL=browser.js.map
