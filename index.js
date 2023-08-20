// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"";r=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,i,u,f,a;if(null==r)return t.call(r);i=r[o],a=o,n=null!=(f=r)&&e.call(f,a);try{r[o]=void 0}catch(n){return t.call(r)}return u=t.call(r),n?r[o]=i:delete r[o],u}:function(r){return t.call(r)};var i,u=r,f="function"==typeof Float32Array,a=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,l="function"==typeof Float32Array?Float32Array:void 0;i=function(){var r,n,t;if("function"!=typeof c)return!1;try{n=new c([1,3.14,-3.14,5e40]),t=n,r=(f&&t instanceof Float32Array||"[object Float32Array]"===u(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===a}catch(n){r=!1}return r}()?l:function(){throw new Error("not implemented")};var y,p=i,v="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(v&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var w=y,d=new p(1);new w(d.buffer)[0]=2139095040;var A=d[0],m=new p(1);new w(m.buffer)[0]=4286578688;var h=m[0],_=127;function g(r){return r!=r}var U=Math.floor;function j(r){return U(r)===r}function F(r){return j(r/2)}function I(r){return F(r>0?r-1:r+1)}var N=Number.NEGATIVE_INFINITY;function S(r){return r===a||r===N}var E=Math.sqrt;function O(r){return Math.abs(r)}var T="function"==typeof Object.defineProperty?Object.defineProperty:null,H=Object.defineProperty,G=Object.prototype,P=G.toString,L=G.__defineGetter__,M=G.__defineSetter__,V=G.__lookupGetter__,W=G.__lookupSetter__,k=function(){try{return T({},"x",{}),!0}catch(r){return!1}}()?H:function(r,n,t){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(V.call(r,n)||W.call(r,n)?(e=r.__proto__,r.__proto__=G,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(r,n,t.get),u&&M&&M.call(r,n,t.set),r};function x(r,n,t){k(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C,Y="function"==typeof Float64Array,q="function"==typeof Float64Array?Float64Array:null,B="function"==typeof Float64Array?Float64Array:void 0;C=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q([1,3.14,-3.14,NaN]),t=n,r=(Y&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?B:function(){throw new Error("not implemented")};var Q,R=C,z="function"==typeof Uint8Array,D="function"==typeof Uint8Array?Uint8Array:null,J="function"==typeof Uint8Array?Uint8Array:void 0;Q=function(){var r,n,t;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,256,257]),t=n,r=(z&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,X=Q,Z="function"==typeof Uint16Array,$="function"==typeof Uint16Array?Uint16Array:null,rr="function"==typeof Uint16Array?Uint16Array:void 0;K=function(){var r,n,t;if("function"!=typeof $)return!1;try{n=new $(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Z&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var nr,tr={uint16:K,uint8:X};(nr=new tr.uint16(1))[0]=4660;var er,or,ir=52===new tr.uint8(nr.buffer)[0];!0===ir?(er=1,or=0):(er=0,or=1);var ur={HIGH:er,LOW:or},fr=new R(1),ar=new w(fr.buffer),cr=ur.HIGH,lr=ur.LOW;function yr(r,n,t,e){return fr[0]=r,n[e]=ar[cr],n[e+t]=ar[lr],n}function pr(r){return yr(r,[0,0],1,0)}x(pr,"assign",yr);var vr=!0===ir?0:1,sr=new R(1),br=new w(sr.buffer);function wr(r,n){return sr[0]=r,br[vr]=n>>>0,sr[0]}function dr(r){return 0|r}var Ar,mr,hr=2147483647,_r=!0===ir?1:0,gr=new R(1),Ur=new w(gr.buffer);function jr(r){return gr[0]=r,Ur[_r]}!0===ir?(Ar=1,mr=0):(Ar=0,mr=1);var Fr={HIGH:Ar,LOW:mr},Ir=new R(1),Nr=new w(Ir.buffer),Sr=Fr.HIGH,Er=Fr.LOW;function Or(r,n){return Nr[Sr]=r,Nr[Er]=n,Ir[0]}var Tr=[0,0];function Hr(r,n){var t,e;return pr.assign(r,Tr,1,0),t=Tr[0],t&=hr,e=jr(n),Or(t|=e&=2147483648,Tr[1])}var Gr=!0===ir?1:0,Pr=new R(1),Lr=new w(Pr.buffer);function Mr(r,n){return Pr[0]=r,Lr[Gr]=n>>>0,Pr[0]}var Vr=1023,Wr=1048576,kr=[1,1.5],xr=[0,.5849624872207642],Cr=[0,1.350039202129749e-8];function Yr(r,n,t,e){return g(r)||S(r)?(n[e]=r,n[e+t]=0,n):0!==r&&O(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}x((function(r){return Yr(r,[0,0],1,0)}),"assign",Yr);var qr=[0,0],Br=[0,0];function Qr(r,n){var t,e;return 0===n||0===r||g(r)||S(r)?r:(Yr(r,qr,1,0),n+=qr[1],n+=function(r){var n=jr(r);return(n=(2146435072&n)>>>20)-Vr|0}(r=qr[0]),n<-1074?Hr(0,r):n>1023?r<0?N:a:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,pr.assign(r,Br,1,0),t=Br[0],t&=2148532223,e*Or(t|=n+Vr<<20,Br[1])))}var Rr=1048575,zr=1048576,Dr=1083179008,Jr=1e300,Kr=1e-300,Xr=[0,0],Zr=[0,0];function $r(r,n){var t,e,o,i,u,f,c,l,y,p,v,s,b,w;if(g(r)||g(n))return NaN;if(pr.assign(n,Xr,1,0),u=Xr[0],0===Xr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return E(r);if(-.5===n)return 1/E(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(S(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:O(r)<1==(n===a)?0:a}(r,n)}if(pr.assign(r,Xr,1,0),i=Xr[0],0===Xr[1]){if(0===i)return function(r,n){return n===N?a:n===a?0:n>0?I(n)?r:0:I(n)?Hr(a,r):a}(r,n);if(1===r)return 1;if(-1===r&&I(n))return-1;if(S(r))return r===N?$r(-0,-n):n<0?0:a}if(r<0&&!1===j(n))return(r-r)/(r-r);if(o=O(r),t=i&hr|0,e=u&hr|0,c=u>>>31|0,f=(f=i>>>31|0)&&I(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(jr(r)&hr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===c?f*Jr*Jr:f*Kr*Kr;if(t>1072693248)return 0===c?f*Jr*Jr:f*Kr*Kr;v=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=wr(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Zr,o)}else v=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,w,d,A,m,h,_,g,U;return h=0,t<Wr&&(h-=53,t=jr(n*=9007199254740992)),h+=(t>>20)-Vr|0,t=1072693248|(_=1048575&t|0),_<=235662?g=0:_<767610?g=1:(g=0,h+=1,t-=Wr),u=wr(o=(A=(n=Mr(n,t))-(c=kr[g]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Mr(0,e+=g<<18),d=(i=o*o)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=wr(a=3+(i=u*u)+(d+=(f=m*(A-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=wr(y=(A=u*a)+(m=f*a+(d-(a-3-i))*o),0))+.9617966939259756*(m-(y-A))+Cr[g])-((s=wr(s=(p=.9617967009544373*y)+v+(l=xr[g])+(w=h),0))-w-l-p),r[0]=s,r[1]=b,r}(Zr,o,t);if(s=(p=(n-(l=wr(n,0)))*v[0]+n*v[1])+(y=l*v[0]),pr.assign(s,Xr,1,0),b=dr(Xr[0]),w=dr(Xr[1]),b>=Dr){if(0!=(b-Dr|w))return f*Jr*Jr;if(p+8008566259537294e-32>s-y)return f*Jr*Jr}else if((b&hr)>=1083231232){if(0!=(b-3230714880|w))return f*Kr*Kr;if(p<=s-y)return f*Kr*Kr}return s=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&hr|0)>>20)-Vr|0,c=0,l>1071644672&&(o=Mr(0,((c=r+(zr>>y+1)>>>0)&~(Rr>>(y=((c&hr)>>20)-Vr|0)))>>>0),c=(c&Rr|zr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=dr(r=jr(a=1-((a=(i=.6931471824645996*(o=wr(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Qr(a,c):Mr(a,r)}(b,y,p),f*s}var rn="function"==typeof Math.fround?Math.fround:null,nn=new p(1),tn="function"==typeof rn?rn:function(r){return nn[0]=r,nn[0]};return function(r){var n,t,e;if(32!==r.length)throw new Error(function(){var r,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(r=1;r<n.length;r++)t+="&arg[]="+encodeURIComponent(n[r]);return t}("0kj60,LQ",32,r));if(n="1"===r[0]?-1:1,e=parseInt(r.substring(1,9),2)-_,t=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=$r(2,-(n+1)));return t}(r.substring(9)),-127===e){if(0===t)return 1===n?0:-0;e=-126}else{if(128===e)return 0===t?1===n?A:h:NaN;t+=1}return tn(n*t*$r(2,e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).fromBinaryStringf=n();
//# sourceMappingURL=index.js.map
