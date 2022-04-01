// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).fromBinaryStringf=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return e&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,i=n;var a=function(r){return i.call(r)},o=Object.prototype.hasOwnProperty;var u=function(r,e){return null!=r&&o.call(r,e)},f="function"==typeof Symbol?Symbol.toStringTag:"",c=u,l=f,s=n;var v=function(r){var e,t,n;if(null==r)return s.call(r);t=r[l],e=c(r,l);try{r[l]=void 0}catch(e){return s.call(r)}return n=s.call(r),e?r[l]=t:delete r[l],n},p=a,g=v,y=t()?g:p,d=y,h="function"==typeof Float32Array;var m=function(r){return h&&r instanceof Float32Array||"[object Float32Array]"===d(r)},w=Number.POSITIVE_INFINITY,b="function"==typeof Float32Array?Float32Array:null,E=m,j=w,A=b;var P=function(){var r,e;if("function"!=typeof A)return!1;try{e=new A([1,3.14,-3.14,5e40]),r=E(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===j}catch(e){r=!1}return r};var _="function"==typeof Float32Array?Float32Array:void 0,O=function(){throw new Error("not implemented")},T=P()?_:O,x=y,V="function"==typeof Uint32Array;var S="function"==typeof Uint32Array?Uint32Array:null,F=function(r){return V&&r instanceof Uint32Array||"[object Uint32Array]"===x(r)},I=S;var U=function(){var r,e;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,4294967296,4294967297]),r=F(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var k="function"==typeof Uint32Array?Uint32Array:void 0,N=function(){throw new Error("not implemented")},M=U()?k:N,R=M,$=new T(1);new R($.buffer)[0]=2139095040;var G=$[0],C=M,L=new T(1);new C(L.buffer)[0]=4286578688;var B=L[0];var H=function(r){return r!=r},W=Math.floor;var Z=function(r){return W(r)===r},X=Z;var q=function(r){return X(r/2)};var z=function(r){return q(r>0?r-1:r+1)},Y=Number,D=Y.NEGATIVE_INFINITY,J=w,K=D;var Q=function(r){return r===J||r===K},rr=Math.sqrt;var er=function(r){return Math.abs(r)},tr=y,nr="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null,ar=function(r){return nr&&r instanceof Float64Array||"[object Float64Array]"===tr(r)},or=ir;var ur=function(){var r,e;if("function"!=typeof or)return!1;try{e=new or([1,3.14,-3.14,NaN]),r=ar(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var fr="function"==typeof Float64Array?Float64Array:void 0,cr=function(){throw new Error("not implemented")},lr=ur()?fr:cr,sr=y,vr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null,gr=function(r){return vr&&r instanceof Uint8Array||"[object Uint8Array]"===sr(r)},yr=pr;var dr=function(){var r,e;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,256,257]),r=gr(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var hr="function"==typeof Uint8Array?Uint8Array:void 0,mr=function(){throw new Error("not implemented")},wr=dr()?hr:mr,br=y,Er="function"==typeof Uint16Array;var jr="function"==typeof Uint16Array?Uint16Array:null,Ar=function(r){return Er&&r instanceof Uint16Array||"[object Uint16Array]"===br(r)},Pr=jr;var _r=function(){var r,e;if("function"!=typeof Pr)return!1;try{e=new Pr(e=[1,3.14,-3.14,65536,65537]),r=Ar(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Or,Tr="function"==typeof Uint16Array?Uint16Array:void 0,xr=function(){throw new Error("not implemented")},Vr={uint16:_r()?Tr:xr,uint8:wr};(Or=new Vr.uint16(1))[0]=4660;var Sr,Fr,Ir=52===new Vr.uint8(Or.buffer)[0];!0===Ir?(Sr=1,Fr=0):(Sr=0,Fr=1);var Ur=M,kr={HIGH:Sr,LOW:Fr},Nr=new lr(1),Mr=new Ur(Nr.buffer),Rr=kr.HIGH,$r=kr.LOW;var Gr=function(r,e){return Nr[0]=e,r[0]=Mr[Rr],r[1]=Mr[$r],r};var Cr=function(r,e){return 1===arguments.length?Gr([0,0],r):Gr(r,e)},Lr=Cr,Br=M,Hr=!0===Ir?0:1,Wr=new lr(1),Zr=new Br(Wr.buffer);var Xr=function(r,e){return Wr[0]=r,Zr[Hr]=e>>>0,Wr[0]},qr=Xr;var zr=function(r){return 0|r},Yr=M,Dr=!0===Ir?1:0,Jr=new lr(1),Kr=new Yr(Jr.buffer);var Qr,re,ee=function(r){return Jr[0]=r,Kr[Dr]};!0===Ir?(Qr=1,re=0):(Qr=0,re=1);var te=M,ne={HIGH:Qr,LOW:re},ie=new lr(1),ae=new te(ie.buffer),oe=ne.HIGH,ue=ne.LOW;var fe=function(r,e){return ae[oe]=r,ae[ue]=e,ie[0]},ce=fe,le=Lr,se=ee,ve=ce,pe=[0,0];var ge=function(r,e){var t,n;return le(pe,r),t=pe[0],t&=2147483647,n=se(e),ve(t|=n&=2147483648,pe[1])},ye=z,de=ge,he=D,me=w;var we=function(r,e){return e===he?me:e===me?0:e>0?ye(e)?r:0:ye(e)?de(me,r):me},be=ee;var Ee=function(r,e){return(2147483647&be(r))<=1072693247?e<0?1/0:0:e>0?1/0:0},je=er,Ae=w;var Pe=function(r,e){return-1===r?(r-r)/(r-r):1===r?1:je(r)<1==(e===Ae)?0:Ae},_e=M,Oe=!0===Ir?1:0,Te=new lr(1),xe=new _e(Te.buffer);var Ve=function(r,e){return Te[0]=r,xe[Oe]=e>>>0,Te[0]};var Se=ee,Fe=qr,Ie=Ve,Ue=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},ke=1048576,Ne=[1,1.5],Me=[0,.5849624872207642],Re=[0,1.350039202129749e-8];var $e=function(r,e,t){var n,i,a,o,u,f,c,l,s,v,p,g,y,d,h,m,w,b,E,j;return b=0,t<ke&&(b-=53,t=Se(e*=9007199254740992)),b+=(t>>20)-1023|0,t=1072693248|(E=1048575&t|0),E<=235662?j=0:E<767610?j=1:(j=0,b+=1,t-=ke),n=524288+(t>>1|536870912),u=(w=1/((e=Ie(e,t))+(c=Ne[j])))*((m=e-c)-(o=Fe(i=m*w,0))*(f=Ie(0,n+=j<<18))-o*(e-(f-c))),h=(a=i*i)*a*Ue(a),f=Fe(f=3+(a=o*o)+(h+=u*(o+i)),0),y=(p=-7.028461650952758e-9*(s=Fe(s=(m=o*f)+(w=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(w-(s-m))+Re[j])-((g=Fe(g=(v=.9617967009544373*s)+p+(l=Me[j])+(d=b),0))-d-l-v),r[0]=g,r[1]=y,r};var Ge=qr,Ce=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Le=function(r,e){var t,n,i,a,o;return t=(o=1.9259629911266175e-8*(i=e-1)-1.4426950408889634*(i*i*Ce(i)))-((n=Ge(n=(a=1.4426950216293335*i)+o,0))-a),r[0]=n,r[1]=t,r},Be=Q,He=H,We=er;var Ze=function(r,e){return He(e)||Be(e)?(r[0]=e,r[1]=0,r):0!==e&&We(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var Xe=function(r,e){return 1===arguments.length?Ze([0,0],r):Ze(r,e)},qe=ee;var ze=function(r){var e=qe(r);return(e=(2146435072&e)>>>20)-1023|0},Ye=w,De=D,Je=H,Ke=Q,Qe=ge,rt=Xe,et=ze,tt=Lr,nt=ce,it=[0,0],at=[0,0];var ot=function(r,e){var t,n;return 0===e||0===r||Je(r)||Ke(r)?r:(rt(it,r),e+=it[1],(e+=et(r=it[0]))<-1074?Qe(0,r):e>1023?r<0?De:Ye:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,tt(at,r),t=at[0],t&=2148532223,n*nt(t|=e+1023<<20,at[1])))};var ut=ee,ft=Ve,ct=qr,lt=zr,st=ot,vt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},pt=2147483647,gt=1048575,yt=1048576;var dt=function(r,e,t){var n,i,a,o,u,f,c,l,s;return s=((l=r&pt|0)>>20)-1023|0,c=0,l>1071644672&&(i=ft(0,((c=r+(yt>>s+1)>>>0)&~(gt>>(s=((c&pt)>>20)-1023|0)))>>>0),c=(c&gt|yt)>>20-s>>>0,r<0&&(c=-c),e-=i),u=(o=.6931471805599453*(t-((i=ct(i=t+e,0))-e))+-1.904654299957768e-9*i)-((f=(a=.6931471824645996*i)+o)-a),n=f-(i=f*f)*vt(i),r=ut(f=1-(f*n/(n-2)-(u+f*u)-f)),r=lt(r),f=(r+=c<<20>>>0)>>20<=0?st(f,c):ft(f,r)},ht=H,mt=z,wt=Q,bt=Z,Et=rr,jt=er,At=Lr,Pt=qr,_t=zr,Ot=D,Tt=w,xt=we,Vt=Ee,St=Pe,Ft=$e,It=Le,Ut=dt,kt=2147483647,Nt=1083179008,Mt=1e300,Rt=1e-300,$t=[0,0],Gt=[0,0];var Ct=function r(e,t){var n,i,a,o,u,f,c,l,s,v,p,g,y,d;if(ht(e)||ht(t))return NaN;if(At($t,t),u=$t[0],0===$t[1]){if(0===t)return 1;if(1===t)return e;if(-1===t)return 1/e;if(.5===t)return Et(e);if(-.5===t)return 1/Et(e);if(2===t)return e*e;if(3===t)return e*e*e;if(4===t)return(e*=e)*e;if(wt(t))return St(e,t)}if(At($t,e),o=$t[0],0===$t[1]){if(0===o)return xt(e,t);if(1===e)return 1;if(-1===e&&mt(t))return-1;if(wt(e))return e===Ot?r(-0,-t):t<0?0:Tt}if(e<0&&!1===bt(t))return(e-e)/(e-e);if(a=jt(e),n=o&kt|0,i=u&kt|0,c=u>>>31|0,f=(f=o>>>31|0)&&mt(t)?-1:1,i>1105199104){if(i>1139802112)return Vt(e,t);if(n<1072693247)return 1===c?f*Mt*Mt:f*Rt*Rt;if(n>1072693248)return 0===c?f*Mt*Mt:f*Rt*Rt;p=It(Gt,a)}else p=Ft(Gt,a,n);if(v=(t-(l=Pt(t,0)))*p[0]+t*p[1],s=l*p[0],At($t,g=v+s),y=_t($t[0]),d=_t($t[1]),y>=Nt){if(0!=(y-Nt|d))return f*Mt*Mt;if(v+8008566259537294e-32>g-s)return f*Mt*Mt}else if((y&kt)>=1083231232){if(0!=(y-3230714880|d))return f*Rt*Rt;if(v<=g-s)return f*Rt*Rt}return f*(g=Ut(y,s,v))},Lt=Ct,Bt="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ht=function(){try{return Bt({},"x",{}),!0}catch(r){return!1}},Wt=Object.defineProperty,Zt=Object.prototype,Xt=Zt.toString,qt=Zt.__defineGetter__,zt=Zt.__defineSetter__,Yt=Zt.__lookupGetter__,Dt=Zt.__lookupSetter__;var Jt=function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Xt.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===Xt.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(Yt.call(r,e)||Dt.call(r,e)?(n=r.__proto__,r.__proto__=Zt,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&qt&&qt.call(r,e,t.get),o&&zt&&zt.call(r,e,t.set),r},Kt=Wt,Qt=Jt,rn=Ht()?Kt:Qt;var en=function(r,e,t){rn(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},tn=en;var nn=function(r){return"string"==typeof r},an=String.prototype.valueOf;var on=y,un=function(r){try{return an.call(r),!0}catch(r){return!1}},fn=t();var cn=function(r){return"object"==typeof r&&(r instanceof String||(fn?un(r):"[object String]"===on(r)))},ln=nn,sn=cn;var vn=tn,pn=function(r){return ln(r)||sn(r)},gn=cn;vn(pn,"isPrimitive",nn),vn(pn,"isObject",gn);var yn=pn,dn=Z;var hn=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&dn(r.length)&&r.length>=0&&r.length<=9007199254740991};var mn=function(r){return"number"==typeof r},wn=Y.prototype.toString;var bn=y,En=Y,jn=function(r){try{return wn.call(r),!0}catch(r){return!1}},An=t();var Pn=function(r){return"object"==typeof r&&(r instanceof En||(An?jn(r):"[object Number]"===bn(r)))},_n=mn,On=Pn;var Tn=tn,xn=function(r){return _n(r)||On(r)},Vn=Pn;Tn(xn,"isPrimitive",mn),Tn(xn,"isObject",Vn);var Sn=xn,Fn=w,In=D,Un=Z;var kn=function(r){return r<Fn&&r>In&&Un(r)},Nn=Sn.isPrimitive,Mn=kn;var Rn=function(r){return Nn(r)&&Mn(r)},$n=Sn.isObject,Gn=kn;var Cn=function(r){return $n(r)&&Gn(r.valueOf())},Ln=Rn,Bn=Cn;var Hn=tn,Wn=function(r){return Ln(r)||Bn(r)},Zn=Cn;Hn(Wn,"isPrimitive",Rn),Hn(Wn,"isObject",Zn);var Xn=Wn,qn=Sn.isPrimitive,zn=H;var Yn=function(r){return qn(r)&&zn(r)},Dn=Sn.isObject,Jn=H;var Kn=function(r){return Dn(r)&&Jn(r.valueOf())},Qn=Yn,ri=Kn;var ei=tn,ti=function(r){return Qn(r)||ri(r)},ni=Kn;ei(ti,"isPrimitive",Yn),ei(ti,"isObject",ni);var ii=hn,ai=Xn.isPrimitive,oi=yn.isPrimitive,ui=ti.isPrimitive;var fi=function(r,e,t){var n,i,a;if(!ii(r)&&!oi(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ai(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(oi(r)){if(!oi(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,ui(e)){for(a=i;a<n;a++)if(ui(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},ci=fi,li=yn.isPrimitive;var si=function(r){if(!li(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},vi=yn.isPrimitive;var pi=function(r){if(!vi(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},gi=si,yi=pi,di=yn.isPrimitive;var hi=function(r){return di(r)&&r===yi(r)&&r!==gi(r)},mi=w,wi=D;var bi=function(r){return r==r&&r>wi&&r<mi},Ei=Xn.isPrimitive;var ji=function(r){return Ei(r)&&r>=0},Ai=Xn.isObject;var Pi=function(r){return Ai(r)&&r.valueOf()>=0},_i=ji,Oi=Pi;var Ti=tn,xi=function(r){return _i(r)||Oi(r)},Vi=Pi;Ti(xi,"isPrimitive",ji),Ti(xi,"isObject",Vi);var Si=xi.isPrimitive,Fi=yn.isPrimitive;var Ii=function(r,e){var t,n;if(!Fi(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Si(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Ui=Xn.isPrimitive,ki=yn.isPrimitive;var Ni=function(r,e,t){var n,i;if(!ki(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ki(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Ui(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Mi=Ii,Ri=Ni;var $i=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Ri(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Mi("0",i):Mi("0",i)+r,n&&(r="-"+r)),r},Gi=hi,Ci=pi,Li=si,Bi=bi,Hi=Sn.isPrimitive,Wi=$i;var Zi=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Bi(n)){if(!Hi(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Wi(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Wi(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Gi(r.specifier)?Ci(t):Li(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Xi=yn.isPrimitive,qi=/[-\/\\^$*+?.()|[\]{}]/g;var zi=function(r){var e,t;if(!Xi(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(qi,"\\$&"):(e=(e=r.substring(1,t)).replace(qi,"\\$&"),r=r[0]+e+r.substring(t))},Yi=/./;var Di=function(r){return"boolean"==typeof r},Ji=Boolean.prototype.toString;var Ki=y,Qi=function(r){try{return Ji.call(r),!0}catch(r){return!1}},ra=t();var ea=function(r){return"object"==typeof r&&(r instanceof Boolean||(ra?Qi(r):"[object Boolean]"===Ki(r)))},ta=Di,na=ea;var ia=tn,aa=function(r){return ta(r)||na(r)},oa=ea;ia(aa,"isPrimitive",Di),ia(aa,"isObject",oa);var ua=aa;var fa=function(){return new Function("return this;")()},ca="object"==typeof self?self:null,la="object"==typeof window?window:null,sa="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},va="object"==typeof sa?sa:null;module.exports=va;var pa=ua.isPrimitive,ga=fa,ya=ca,da=la,ha=r(Object.freeze({__proto__:null}));var ma=function(r){if(arguments.length){if(!pa(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ga()}if(ya)return ya;if(da)return da;if(ha)return ha;throw new Error("unexpected error. Unable to resolve global object.")},wa=ma(),ba=wa.document&&wa.document.childNodes,Ea=Int8Array,ja=Yi,Aa=ba,Pa=Ea;var _a=function(){return"function"==typeof ja||"object"==typeof Pa||"function"==typeof Aa};var Oa=function(){return/^\s*function\s*([^(]*)/i},Ta=Oa;tn(Ta,"REGEXP",Oa());var xa=Ta,Va=y;var Sa=Array.isArray?Array.isArray:function(r){return"[object Array]"===Va(r)};var Fa=function(r){return null!==r&&"object"==typeof r};tn(Fa,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Sa(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Fa));var Ia=Fa;var Ua=y,ka=xa.REGEXP,Na=function(r){return Ia(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Ma=function(r){var e,t,n;if(("Object"===(t=Ua(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ka.exec(n.toString()))return e[1]}return Na(r)?"Buffer":t},Ra=Ma;var $a=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ra(r).toLowerCase():e},Ga=Ma;var Ca=function(r){return Ga(r).toLowerCase()},La=$a,Ba=Ca,Ha=_a()?Ba:La;var Wa=function(r){return"function"===Ha(r)},Za=RegExp.prototype.exec;var Xa=y,qa=function(r){try{return Za.call(r),!0}catch(r){return!1}},za=t();var Ya=zi,Da=Wa,Ja=yn.isPrimitive,Ka=function(r){return"object"==typeof r&&(r instanceof RegExp||(za?qa(r):"[object RegExp]"===Xa(r)))};var Qa=hi,ro=pi,eo=si,to=function(r,e,t){if(!Ja(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Ja(e))e=Ya(e),e=new RegExp(e,"g");else if(!Ka(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Ja(t)&&!Da(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},no=bi,io=Sn.isPrimitive,ao=er,oo=/e\+(\d)$/,uo=/e-(\d)$/,fo=/^(\d+)$/,co=/^(\d+)e/,lo=/\.0$/,so=/\.0*e/,vo=/(\..*[^0])0*e/;var po=function(r){var e,t,n=parseFloat(r.arg);if(!no(n)){if(!io(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":ao(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=to(t,vo,"$1e"),t=to(t,so,"e"),t=to(t,lo,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=to(t,oo,"e+0$1"),t=to(t,uo,"e-0$1"),r.alternate&&(t=to(t,fo,"$1."),t=to(t,co,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Qa(r.specifier)?ro(t):eo(t)},go=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var yo=Ii;var ho=yn.isPrimitive,mo=ci,wo=H,bo=Zi,Eo=po,jo=function(r){var e,t,n,i,a;for(e=0,n=[],a=go.exec(r);a;)(t=r.slice(e,go.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=go.lastIndex,a=go.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Ao=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+yo(" ",n):yo(" ",n)+r},Po=$i,_o=String.fromCharCode;var Oo=function(r){var e,t,n,i,a,o,u,f,c;if(!ho(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=jo(r),o="",u=1,f=0;f<e.length;f++)if(n=e[f],ho(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!mo(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,wo(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,wo(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=bo(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!wo(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=wo(a)?String(n.arg):_o(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Eo(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Po(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ao(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},To=Oo,xo="function"==typeof Math.fround?Math.fround:null,Vo=new T(1);var So=xo;"function"!=typeof So&&(So=function(r){return Vo[0]=r,Vo[0]});var Fo=Lt;var Io=G,Uo=B,ko=127,No=Lt,Mo=To,Ro=So,$o=function(r){var e,t=0;for(e=0;e<r.length;e++)"1"===r[e]&&(t+=Fo(2,-(e+1)));return t};return function(r){var e,t,n;if(32!==r.length)throw new Error(Mo("invalid argument. Input string must have a length equal to `%u`. Value: `%s`.",32,r));if(e="1"===r[0]?-1:1,n=parseInt(r.substring(1,9),2)-ko,t=$o(r.substring(9)),-127===n){if(0===t)return 1===e?0:-0;n=-126}else{if(128===n)return 0===t?1===e?Io:Uo:NaN;t+=1}return Ro(e*t*No(2,n))}}));
//# sourceMappingURL=bundle.js.map
