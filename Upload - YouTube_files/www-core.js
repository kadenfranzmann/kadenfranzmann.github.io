(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var h;function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function ha(a,b){if(b)a:{for(var c=fa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&da(c,d,{configurable:!0,writable:!0,value:f})}}
ha("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;da(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
ha("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(ca(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ja(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}}
function ka(a){if(!(a instanceof Array)){a=ja(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=la(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),na;
if("function"==typeof Object.setPrototypeOf)na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=na;
function sa(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
ha("Reflect",function(a){return a?a:{}});
ha("Reflect.construct",function(){return ma});
ha("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.f=[];var k=this.j();try{g(k.resolve,k.reject)}catch(l){k.reject(l)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(k){k(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var k=this;this.i(function(){k.l()})}this.f.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.l=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var k=0;k<g.length;++k){var l=g[k];g[k]=null;try{l()}catch(m){this.j(m)}}}this.f=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(m){return function(n){l||(l=!0,m.call(k,n))}}
var k=this,l=!1;return{resolve:g(this.D),reject:g(this.l)}};
b.prototype.D=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var k=null!=g;break a;case "function":k=!0;break a;default:k=!1}k?this.B(g):this.A(g)}};
b.prototype.B=function(g){var k=void 0;try{k=g.then}catch(l){this.l(l);return}"function"==typeof k?this.M(k,g):this.A(g)};
b.prototype.l=function(g){this.F(2,g)};
b.prototype.A=function(g){this.F(1,g)};
b.prototype.F=function(g,k){if(0!=this.g)throw Error("Cannot settle("+g+", "+k+"): Promise already settled in state"+this.g);this.g=g;this.i=k;this.G()};
b.prototype.G=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.J=function(g){var k=this.j();g.Lb(k.resolve,k.reject)};
b.prototype.M=function(g,k){var l=this.j();try{g.call(k,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,k){function l(u,w){return"function"==typeof u?function(E){try{m(u(E))}catch(aa){n(aa)}}:w}
var m,n,t=new b(function(u,w){m=u;n=w});
this.Lb(l(g,m),l(k,n));return t};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.Lb=function(g,k){function l(){switch(m.g){case 1:g(m.i);break;case 2:k(m.i);break;default:throw Error("Unexpected state: "+m.g);}}
var m=this;null==this.f?f.g(l):this.f.push(l)};
b.resolve=d;b.reject=function(g){return new b(function(k,l){l(g)})};
b.race=function(g){return new b(function(k,l){for(var m=ja(g),n=m.next();!n.done;n=m.next())d(n.value).Lb(k,l)})};
b.all=function(g){var k=ja(g),l=k.next();return l.done?d([]):new b(function(m,n){function t(E){return function(aa){u[E]=aa;w--;0==w&&m(u)}}
var u=[],w=0;do u.push(void 0),w++,d(l.value).Lb(t(u.length-1),n),l=k.next();while(!l.done)})};
return b});
function ta(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ha("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ta(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ha("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ta(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
ha("WeakMap",function(a){function b(l){this.f=(k+=Math.random()+1).toString();if(l){l=ja(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!ua(l,g)){var m=new c;da(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),n=new a([[l,2],[m,3]]);if(2!=n.get(l)||3!=n.get(m))return!1;n["delete"](l);n.set(m,4);return!n.has(l)&&4==n.get(m)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var k=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ua(l,g))throw Error("WeakMap key fail: "+l);l[g][this.f]=m;return this};
b.prototype.get=function(l){return d(l)&&ua(l,g)?l[g][this.f]:void 0};
b.prototype.has=function(l){return d(l)&&ua(l,g)&&ua(l[g],this.f)};
b.prototype["delete"]=function(l){return d(l)&&ua(l,g)&&ua(l[g],this.f)?delete l[g][this.f]:!1};
return b});
ha("Map",function(a){function b(){var k={};return k.previous=k.next=k.head=k}
function c(k,l){var m=k.f;return ia(function(){if(m){for(;m.head!=k.f;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(k,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var n=k.g[m];if(n&&ua(k.g,m))for(var t=0;t<n.length;t++){var u=n[t];if(l!==l&&u.key!==u.key||l===u.key)return{id:m,list:n,index:t,da:u}}return{id:m,list:n,index:-1,da:void 0}}
function e(k){this.g={};this.f=b();this.size=0;if(k){k=ja(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var k=Object.seal({x:4}),l=new a(ja([[k,"s"]]));if("s"!=l.get(k)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),n=m.next();if(n.done||n.value[0]!=k||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(t){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(k,l){k=0===k?0:k;var m=d(this,k);m.list||(m.list=this.g[m.id]=[]);m.da?m.da.value=l:(m.da={next:this.f,previous:this.f.previous,head:this.f,key:k,value:l},m.list.push(m.da),this.f.previous.next=m.da,this.f.previous=m.da,this.size++);return this};
e.prototype["delete"]=function(k){k=d(this,k);return k.da&&k.list?(k.list.splice(k.index,1),k.list.length||delete this.g[k.id],k.da.previous.next=k.da.next,k.da.next.previous=k.da.previous,k.da.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(k){return!!d(this,k).da};
e.prototype.get=function(k){return(k=d(this,k).da)&&k.value};
e.prototype.entries=function(){return c(this,function(k){return[k.key,k.value]})};
e.prototype.keys=function(){return c(this,function(k){return k.key})};
e.prototype.values=function(){return c(this,function(k){return k.value})};
e.prototype.forEach=function(k,l){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,k.call(l,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function va(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
ha("Array.prototype.keys",function(a){return a?a:function(){return va(this,function(b){return b})}});
ha("Set",function(a){function b(c){this.f=new Map;if(c){c=ja(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ja([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ha("Array.prototype.values",function(a){return a?a:function(){return va(this,function(b,c){return c})}});
var wa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
ha("Object.assign",function(a){return a||wa});
ha("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
ha("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
ha("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
ha("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push([d,b[d]]);return c}});
ha("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ta(this,b,"includes").indexOf(b,c||0)}});
var xa=xa||{},p=this||self;function q(a,b,c){a=a.split(".");c=c||p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ya(a){if(a&&a!=p)return za(a.document);null===Aa&&(Aa=za(p.document));return Aa}
var Ba=/^[\w+/_-]+[=]{0,2}$/,Aa=null;function za(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ba.test(a)?a:""}
function r(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ca(){}
function Da(a){a.ea=void 0;a.getInstance=function(){return a.ea?a.ea:a.ea=new a}}
function Ea(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Fa(a){var b=Ea(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ga(a){return"function"==Ea(a)}
function Ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ia(a){return Object.prototype.hasOwnProperty.call(a,Ja)&&a[Ja]||(a[Ja]=++Ka)}
var Ja="closure_uid_"+(1E9*Math.random()>>>0),Ka=0;function La(a,b,c){return a.call.apply(a.bind,arguments)}
function Ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=La:v=Ma;return v.apply(null,arguments)}
function Na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Oa(a,b){for(var c in b)a[c]=b[c]}
var x=Date.now;function y(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Ra(a){return a}
function Sa(a){var b=null,c=p.trustedTypes;if(!c||!c.createPolicy)return b;try{b=c.createPolicy(a,{createHTML:Ra,createScript:Ra,createScriptURL:Ra})}catch(d){p.console&&p.console.error(d.message)}return b}
;function Ta(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ta);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(Ta,Error);Ta.prototype.name="CustomError";var Ua;function Va(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");Ta.call(this,d+c[e])}
y(Va,Ta);Va.prototype.name="AssertionError";function Wa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;var Xa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ya=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===
typeof a?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},$a=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},bb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
z(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},cb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},db=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function eb(a,b,c){b=fb(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function fb(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function gb(a,b){a:{var c="string"===typeof a?a.split(""):a;for(var d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){c=d;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function hb(a,b){return 0<=Xa(a,b)}
function ib(a,b){hb(a,b)||a.push(b)}
function jb(a,b){var c=Xa(a,b),d;(d=0<=c)&&kb(a,c);return d}
function kb(a,b){Array.prototype.splice.call(a,b,1)}
function lb(a,b){var c=fb(a,b,void 0);0<=c&&kb(a,c)}
function mb(a){return Array.prototype.concat.apply([],arguments)}
function nb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ob(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function pb(a,b,c,d){return Array.prototype.splice.apply(a,qb(arguments,1))}
function qb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function rb(a,b){if(!Fa(a)||!Fa(b)||a.length!=b.length)return!1;for(var c=a.length,d=sb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}
function tb(a,b){return a>b?1:a<b?-1:0}
function sb(a,b){return a===b}
function ub(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192){var f=qb(d,e,e+8192);f=ub.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b}
function vb(a){for(var b=Math.random,c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}}
;function wb(){return function(){return""}}
function xb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function yb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function zb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function Ab(a){var b=0,c;for(c in a)b++;return b}
function Bb(a,b){return Cb(a,b)}
function Db(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Eb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Cb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Fb(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}
function Gb(a){for(var b in a)return!1;return!0}
function Hb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ib(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Jb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Lb(a){var b=Ea(a);if("object"==b||"array"==b){if(Ga(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Lb(a[c]);return b}return a}
var Mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Mb.length;f++)c=Mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Ob(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return Ob.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var Pb={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var Qb;function Rb(){void 0===Qb&&(Qb=Sa("goog#html"));return Qb}
;function Sb(a,b){this.f=a===Tb&&b||"";this.g=Ub}
Sb.prototype.Ka=!0;Sb.prototype.qa=function(){return this.f};
function Vb(a){return a instanceof Sb&&a.constructor===Sb&&a.g===Ub?a.f:"type_error:Const"}
function Wb(a){return new Sb(Tb,a)}
var Ub={},Tb={};var Xb=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),Yb=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");function Zb(a,b){this.g=a===bc&&b||"";this.i=cc}
Zb.prototype.Ka=!0;Zb.prototype.qa=function(){return this.g.toString()};
Zb.prototype.Cc=!0;Zb.prototype.f=function(){return 1};
function dc(a){if(a instanceof Zb&&a.constructor===Zb&&a.i===cc)return a.g;Ea(a);return"type_error:TrustedResourceUrl"}
var cc={};function ec(a){var b=Rb();a=b?b.createScriptURL(a):a;return new Zb(bc,a)}
var bc={};function fc(a){return/^[\s\xa0]*$/.test(a)}
var gc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function hc(a,b){if(b)a=a.replace(ic,"&amp;").replace(jc,"&lt;").replace(kc,"&gt;").replace(lc,"&quot;").replace(mc,"&#39;").replace(nc,"&#0;");else{if(!oc.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ic,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(jc,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(kc,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(lc,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(mc,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(nc,"&#0;"))}return a}
var ic=/&/g,jc=/</g,kc=/>/g,lc=/"/g,mc=/'/g,nc=/\x00/g,oc=/[\x00&<>"']/;
function pc(a,b){for(var c=0,d=gc(String(a)).split("."),e=gc(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",l=e[g]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=qc(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||qc(0==k[2].length,0==l[2].length)||qc(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function qc(a,b){return a<b?-1:a>b?1:0}
;function rc(a,b){this.g=a===sc&&b||"";this.i=tc}
rc.prototype.Ka=!0;rc.prototype.qa=function(){return this.g.toString()};
rc.prototype.Cc=!0;rc.prototype.f=function(){return 1};
function wc(a){if(a instanceof rc&&a.constructor===rc&&a.i===tc)return a.g;Ea(a);return"type_error:SafeUrl"}
var xc=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,yc=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,zc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ac(a){if(a instanceof rc)return a;a="object"==typeof a&&a.Ka?a.qa():String(a);return zc.test(a)?new rc(sc,a):null}
function Bc(a,b){if(a instanceof rc)return a;a="object"==typeof a&&a.Ka?a.qa():String(a);if(b&&/^data:/i.test(a)){var c=String(a);c=c.replace(/(%0A|%0D)/g,"");var d=c.match(yc);c=(d&&xc.test(d[1])?new rc(sc,c):null)||Cc;if(c.qa()==a)return c}zc.test(a)||(a="about:invalid#zClosurez");return new rc(sc,a)}
var tc={},Cc=new rc(sc,"about:invalid#zClosurez"),sc={};function Dc(){this.f="";this.g=Ec}
Dc.prototype.Ka=!0;var Ec={};Dc.prototype.qa=function(){return this.f};
function Fc(a){var b=new Dc;b.f=a;return b}
var Gc=Fc("");function Hc(a){if(a instanceof rc)return'url("'+wc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof Sb?Vb(a):Ic(String(a));if(/[{;}]/.test(a))throw new Va("Value does not allow [{;}], got: %s.",[a]);return a}
function Ic(a){var b=a.replace(Jc,"$1").replace(Jc,"$1").replace(Kc,"url");if(Lc.test(b)){if(Mc.test(a))return"zClosurez";for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}if(!b||!c||!Nc(a))return"zClosurez"}else return"zClosurez";return Oc(a)}
function Nc(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Lc=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Kc=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Jc=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),Mc=/\/\*/;function Oc(a){return a.replace(Kc,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,k,l){f=k;return l});
b=(Ac(d)||Cc).qa();return c+f+b+f+e})}
;var Pc;a:{var Qc=p.navigator;if(Qc){var Rc=Qc.userAgent;if(Rc){Pc=Rc;break a}}Pc=""}function A(a){return-1!=Pc.indexOf(a)}
;function Sc(){return A("Trident")||A("MSIE")}
function Tc(){return A("Firefox")||A("FxiOS")}
function Uc(){return A("Safari")&&!(Vc()||A("Coast")||A("Opera")||A("Edge")||A("Edg/")||A("OPR")||Tc()||A("Silk")||A("Android"))}
function Vc(){return(A("Chrome")||A("CriOS"))&&!A("Edge")}
function Wc(){return A("Android")&&!(Vc()||Tc()||A("Opera")||A("Silk"))}
;function Xc(){this.g="";this.j=Yc;this.i=null}
Xc.prototype.Cc=!0;Xc.prototype.f=function(){return this.i};
Xc.prototype.Ka=!0;Xc.prototype.qa=function(){return this.g.toString()};
function Zc(a){if(a instanceof Xc&&a.constructor===Xc&&a.j===Yc)return a.g;Ea(a);return"type_error:SafeHtml"}
function $c(a){if(a instanceof Xc)return a;var b="object"==typeof a,c=null;b&&a.Cc&&(c=a.f());return ad(hc(b&&a.Ka?a.qa():String(a)),c)}
var bd=/^[a-zA-Z0-9-]+$/,cd={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},dd={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
function ed(a,b,c){var d=String(a);if(!bd.test(d))throw Error("");if(d.toUpperCase()in dd)throw Error("");a=String(a);d=null;var e="<"+a,f="";if(b)for(t in b){if(!bd.test(t))throw Error("");var g=b[t];if(null!=g){var k=t;var l=g;if(l instanceof Sb)l=Vb(l);else if("style"==k.toLowerCase()){g=void 0;if(!Ha(l))throw Error("");if(!(l instanceof Dc)){var m="";for(g in l){if(!/^[-_a-zA-Z0-9]+$/.test(g))throw Error("Name allows only [-_a-zA-Z0-9], got: "+g);var n=l[g];null!=n&&(n=Array.isArray(n)?$a(n,Hc).join(" "):
Hc(n),m+=g+":"+n+";")}l=m?Fc(m):Gc}l instanceof Dc&&l.constructor===Dc&&l.g===Ec?g=l.f:(Ea(l),g="type_error:SafeStyle");l=g}else{if(/^on/i.test(k))throw Error("");if(k.toLowerCase()in cd)if(l instanceof Zb)l=dc(l).toString();else if(l instanceof rc)l=wc(l);else if("string"===typeof l)l=(Ac(l)||Cc).qa();else throw Error("");}l.Ka&&(l=l.qa());k=k+'="'+hc(String(l))+'"';f+=" "+k}}var t=e+f;null==c?c=[]:Array.isArray(c)||(c=[c]);!0===Pb[a.toLowerCase()]?t+=">":(c=fd(c),t+=">"+Zc(c).toString()+"</"+a+
">",d=c.f());(b=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(b)?d=0:d=null);return gd(t,d)}
function hd(a){function b(f){Array.isArray(f)?z(f,b):(f=$c(f),e.push(Zc(f).toString()),f=f.f(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=$c(id),d=c.f(),e=[];z(a,b);return ad(e.join(Zc(c).toString()),d)}
function fd(a){return hd(Array.prototype.slice.call(arguments))}
var Yc={};function ad(a,b){return gd(a,b)}
function gd(a,b){var c=new Xc,d=Rb();c.g=d?d.createHTML(a):a;c.i=b;return c}
var jd=new Xc;jd.g=p.trustedTypes&&p.trustedTypes.emptyHTML?p.trustedTypes.emptyHTML:"";jd.i=0;var id=jd,kd=gd("<br>",0);function ld(a,b){Vb(a);Vb(a);return gd(b,null)}
;var md=xb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Zc(id);return!b.parentElement});
function qd(a,b){if(md())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Zc(b)}
function rd(a,b){qd(a,b)}
function sd(a,b){var c=b instanceof rc?b:Bc(b);a.href=wc(c)}
function td(a,b){var c=b instanceof rc?b:Bc(b,/^data:image\//i.test(b));a.src=wc(c)}
function ud(a,b){a.src=dc(b);var c=ya(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
function vd(a,b){var c=b instanceof rc?b:Bc(b);a.href=wc(c)}
function wd(a,b,c,d){a=a instanceof rc?a:Bc(a);b=b||p;c=c instanceof Sb?Vb(c):c||"";return b.open(wc(a),c,d,void 0)}
;function xd(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
function yd(a){return encodeURIComponent(String(a))}
function zd(a){return decodeURIComponent(a.replace(/\+/g," "))}
function Ad(a){return a=hc(a,void 0)}
function Bd(a){return-1!=a.indexOf("&")?"document"in p?Cd(a):Dd(a):a}
function Cd(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=p.document.createElement("div");return a.replace(Ed,function(d,e){var f=b[d];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(f=ld(Wb("Single HTML entity."),d+" "),qd(c,f),f=c.firstChild.nodeValue.slice(0,-1));return b[d]=f})}
function Dd(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return b}})}
var Ed=/&([^;\s<&]+);?/g,Fd={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},Gd={"'":"\\'"};function Hd(a){return null==a?"":String(a)}
function Id(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Jd(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Kd(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;var Ld=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Md(a){return a?decodeURI(a):a}
function Nd(a,b){return b.match(Ld)[a]||null}
function Od(a){return Md(Nd(3,a))}
function Pd(a){var b=a.match(Ld);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Qd(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?zd(f):"")}}
function Rd(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Sd(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Sd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+yd(b)))}
function Td(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Sd(a[d],a[d+1],c);return c.join("&")}
function Ud(a){var b=[],c;for(c in a)Sd(c,a[c],b);return b.join("&")}
function Vd(a,b){var c=2==arguments.length?Td(arguments[1],0):Td(arguments,1);return Rd(a,c)}
function Wd(a,b){var c=Ud(b);return Rd(a,c)}
function Yd(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Zd=/#|$/;function $d(a,b){var c=a.search(Zd),d=Yd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return zd(a.substr(d,e-d))}
var ae=/[?&]($|#)/;function be(a,b){for(var c=a.search(Zd),d=0,e,f=[];0<=(e=Yd(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(ae,"$1")}
function ce(a){var b=de();a=be(a,"lact");b=null!=b?"="+yd(b):"";return Rd(a,"lact"+b)}
;var ee=0,fe=0;function ge(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));ee=c;fe=a}
function he(a){var b=0>a?1:0;a=b?-a:a;if(0===a)fe=0<1/a?0:2147483648,ee=0;else if(isNaN(a))fe=2147483647,ee=4294967295;else if(1.7976931348623157E308<a)fe=(b<<31|2146435072)>>>0,ee=0;else if(2.2250738585072014E-308>a)a/=Math.pow(2,-1074),fe=(b<<31|a/4294967296)>>>0,ee=a>>>0;else{var c=a,d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;a*=Math.pow(2,-d);fe=(b<<31|d+1023<<20|1048576*a&1048575)>>>0;ee=4503599627370496*a>>>0}}
;function ie(){this.f=[]}
ie.prototype.length=function(){return this.f.length};
ie.prototype.end=function(){var a=this.f;this.f=[];return a};
function je(a){for(var b=ee,c=fe;0<c||127<b;)a.f.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.f.push(b)}
function ke(a,b){for(;127<b;)a.f.push(b&127|128),b>>>=7;a.f.push(b)}
function le(a,b){if(0<=b)ke(a,b);else{for(var c=0;9>c;c++)a.f.push(b&127|128),b>>=7;a.f.push(1)}}
function me(a,b){a.f.push(b>>>0&255);a.f.push(b>>>8&255);a.f.push(b>>>16&255);a.f.push(b>>>24&255)}
;function ne(){return A("iPhone")&&!A("iPod")&&!A("iPad")}
function oe(){return ne()||A("iPad")||A("iPod")}
;function pe(a){pe[" "](a);return a}
pe[" "]=Ca;function qe(a,b){try{return pe(a[b]),!0}catch(c){}return!1}
function re(a,b){var c=se;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var te=A("Opera"),B=Sc(),ue=A("Edge"),ve=ue||B,we=A("Gecko")&&!(-1!=Pc.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),xe=-1!=Pc.toLowerCase().indexOf("webkit")&&!A("Edge"),ye=A("Macintosh"),ze=A("Windows"),Ae=A("Android"),Be=ne(),Ce=A("iPad"),De=A("iPod"),Ee=oe();function Fe(){var a=p.document;return a?a.documentMode:void 0}
var Ge;a:{var He="",Ie=function(){var a=Pc;if(we)return/rv:([^\);]+)(\)|;)/.exec(a);if(ue)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(xe)return/WebKit\/(\S+)/.exec(a);if(te)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ie&&(He=Ie?Ie[1]:"");if(B){var Je=Fe();if(null!=Je&&Je>parseFloat(He)){Ge=String(Je);break a}}Ge=He}var Ke=Ge,se={};function Qe(a){return re(a,function(){return 0<=pc(Ke,a)})}
function Re(a){return Number(Se)>=a}
var Te;if(p.document&&B){var Ue=Fe();Te=Ue?Ue:parseInt(Ke,10)||void 0}else Te=void 0;var Se=Te;var Ve=Tc(),We=ne()||A("iPod"),Xe=A("iPad"),Ye=Wc(),Ze=Vc(),$e=Uc()&&!oe();var af={},bf=null;
function cf(a,b){Fa(a);void 0===b&&(b=0);if(!bf){bf={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));af[e]=f;for(var g=0;g<f.length;g++){var k=f[g];void 0===bf[k]&&(bf[k]=g)}}}c=af[b];d=[];for(e=0;e<a.length;e+=3){var l=a[e],m=(f=e+1<a.length)?a[e+1]:0,n=(g=e+2<a.length)?a[e+2]:0;k=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|n>>6;n&=63;g||(n=64,f||(m=64));d.push(c[k],c[l],c[m]||"",c[n]||"")}return d.join("")}
;function df(){this.i=[];this.g=0;this.f=new ie}
function ef(a,b){ff(a,b,2);var c=a.f.end();a.i.push(c);a.g+=c.length;c.push(a.g);return c}
function gf(a,b){var c=b.pop();for(c=a.g+a.f.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.g++;b.push(c);a.g++}
df.prototype.reset=function(){this.i=[];this.f.end();this.g=0};
function ff(a,b,c){ke(a.f,8*b+c)}
function hf(a,b,c){null!=c&&(ff(a,b,1),a=a.f,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,ee=b,fe=c,me(a,ee),me(a,fe))}
function jf(a,b,c){null!=c&&(ff(a,b,0),a.f.f.push(c?1:0))}
function kf(a,b,c){if(null!=c){b=ef(a,b);for(var d=a.f,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.f.push(f);else if(2048>f)d.f.push(f>>6|192),d.f.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var g=c.charCodeAt(e+1);56320<=g&&57343>=g&&(f=1024*(f-55296)+g-56320+65536,d.f.push(f>>18|240),d.f.push(f>>12&63|128),d.f.push(f>>6&63|128),d.f.push(f&63|128),e++)}else d.f.push(f>>12|224),d.f.push(f>>6&63|128),d.f.push(f&63|128)}gf(a,b)}}
function lf(a,b,c,d){null!=c&&(b=ef(a,b),d(c,a),gf(a,b))}
function mf(a,b,c,d){if(null!=c)for(var e=0;e<c.length;e++){var f=ef(a,b);d(c[e],a);gf(a,f)}}
;function nf(){}
var of="function"==typeof Uint8Array;function pf(a,b,c,d){a.f=null;b||(b=[]);a.G=void 0;a.j=-1;a.g=b;a:{if(b=a.g.length){--b;var e=a.g[b];if(!(null===e||"object"!=typeof e||Array.isArray(e)||of&&e instanceof Uint8Array)){a.l=b-a.j;a.i=e;break a}}a.l=Number.MAX_VALUE}a.A={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.l?(e+=a.j,a.g[e]=a.g[e]||qf):(rf(a),a.i[e]=a.i[e]||qf);if(d&&d.length)for(b=0;b<d.length;b++)sf(a,d[b])}
var qf=[];function rf(a){var b=a.l+a.j;a.g[b]||(a.i=a.g[b]={})}
function tf(a,b){if(b<a.l){var c=b+a.j,d=a.g[c];return d===qf?a.g[c]=[]:d}if(a.i)return d=a.i[b],d===qf?a.i[b]=[]:d}
function uf(a,b,c){b<a.l?a.g[b+a.j]=c:(rf(a),a.i[b]=c);return a}
function vf(a,b,c,d){(c=sf(a,c))&&c!==b&&void 0!==d&&(a.f&&c in a.f&&(a.f[c]=void 0),uf(a,c,void 0));uf(a,b,d)}
function sf(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],g=tf(a,f);null!=g&&(c=f,d=g,uf(a,f,void 0))}return c?(uf(a,c,d),c):0}
function wf(a,b,c){a.f||(a.f={});if(!a.f[c]){var d=tf(a,c);d&&(a.f[c]=new b(d))}return a.f[c]}
function xf(a,b,c){a.f||(a.f={});if(!a.f[c]){for(var d=tf(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.f[c]=e}b=a.f[c];b==qf&&(b=a.f[c]=[]);return b}
function yf(a,b,c){a.f||(a.f={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=zf(c[e]);a.f[b]=c;uf(a,b,d)}
function Af(a){if(a.f)for(var b in a.f){var c=a.f[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&zf(c[d]);else c&&zf(c)}}
function zf(a){Af(a);return a.g}
nf.prototype.toString=function(){Af(this);return this.g.toString()};
nf.prototype.clone=function(){return new this.constructor(Bf(zf(this)))};
function Bf(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Bf(d):d)}return b}if(of&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Bf(d):d);return b}
;function Cf(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var Df=Cf("loadCastFramework")||Cf("loadCastApplicationFramework");function Ef(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var Ff=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];function Gf(a){a.length?Hf(a.shift(),function(){Gf(a)}):If()}
function Jf(a){return"chrome-extension://"+a+"/cast_sender.js"}
function Hf(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function If(){var a=Ef();a&&a(!1,"No cast extension found")}
function Kf(){if(Df){var a=2,b=Ef(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Hf("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",If,c)}}
function Lf(){Kf();var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);Gf(["//www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//www.gstatic.com/eureka/clank/cast_sender.js"])}
;function Mf(a){this.ad=a}
;function Sf(a,b,c){this.j=a;this.g=b;this.f=c||[];this.fb=new Map}
h=Sf.prototype;h.jh=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.fb.set(this.sd(c),[new Mf(a)])};
h.rd=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.sd(b);return this.fb.has(b)?this.fb.get(b):void 0};
h.ef=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.rd(b))&&b.length?b[0]:void 0};
h.clear=function(){this.fb.clear()};
h.sd=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};function Tf(a,b){Sf.call(this,a,3,b)}
sa(Tf,Sf);Tf.prototype.i=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.ef(c);e&&(d=e.ad);this.jh(d+a,c)};function Uf(){this.G=this.G;this.F=this.F}
Uf.prototype.G=!1;Uf.prototype.R=function(){return this.G};
Uf.prototype.dispose=function(){this.G||(this.G=!0,this.K())};
function Vf(a,b){a.G?b():(a.F||(a.F=[]),a.F.push(b))}
Uf.prototype.K=function(){if(this.F)for(;this.F.length;)this.F.shift()()};
function Wf(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Xf(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1}
Xf.prototype.stopPropagation=function(){this.f=!0};
Xf.prototype.preventDefault=function(){this.defaultPrevented=!0};function Yf(a){var b=r("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Zf[b]?b=Zf[b]:(b=String(b),Zf[b]||(c=/function\s+([^\(]+)/m.exec(b),Zf[b]=c?c[1]:"[Anonymous]"),b=Zf[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Zf={};var $f=!B||Re(9),ag=B&&!Qe("9"),bg=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{p.addEventListener("test",Ca,b),p.removeEventListener("test",Ca,b)}catch(c){}return a}();var cg;cg=xe?"webkitTransitionEnd":te?"otransitionend":"transitionend";function dg(a,b){Xf.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
y(dg,Xf);var eg={2:"touch",3:"pen",4:"mouse"};
dg.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?we&&(qe(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:eg[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
dg.prototype.stopPropagation=function(){dg.L.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
dg.prototype.preventDefault=function(){dg.L.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ag)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var fg="closure_listenable_"+(1E6*Math.random()|0),gg=0;function hg(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.Rb=e;this.key=++gg;this.nb=this.Kb=!1}
function ig(a){a.nb=!0;a.listener=null;a.f=null;a.src=null;a.Rb=null}
;function jg(a){this.src=a;this.listeners={};this.f=0}
jg.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=kg(a,b,d,e);-1<g?(b=a[g],c||(b.Kb=!1)):(b=new hg(b,this.src,f,!!d,e),b.Kb=c,a.push(b));return b};
jg.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=kg(e,b,c,d);return-1<b?(ig(e[b]),kb(e,b),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function lg(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(ig(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function kg(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.nb&&f.listener==b&&f.capture==!!c&&f.Rb==d)return e}return-1}
;var mg="closure_lm_"+(1E6*Math.random()|0),ng={},og=0;function pg(a,b,c,d,e){if(d&&d.once)return qg(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)pg(a,b[f],c,d,e);return null}c=rg(c);a&&a[fg]?f=a.g.add(String(b),c,!1,Ha(d)?!!d.capture:!!d,e):f=sg(a,b,c,!1,d,e);return f}
function sg(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ha(e)?!!e.capture:!!e,k=tg(a);k||(a[mg]=k=new jg(a));c=k.add(b,c,d,g,f);if(c.f)return c;d=ug();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)bg||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(vg(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");og++;return c}
function ug(){var a=wg,b=$f?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function qg(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)qg(a,b[f],c,d,e);return null}c=rg(c);return a&&a[fg]?a.g.add(String(b),c,!0,Ha(d)?!!d.capture:!!d,e):sg(a,b,c,!0,d,e)}
function xg(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)xg(a,b[f],c,d,e);else(d=Ha(d)?!!d.capture:!!d,c=rg(c),a&&a[fg])?a.g.remove(String(b),c,d,e):a&&(a=tg(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=kg(b,c,d,e)),(c=-1<a?b[a]:null)&&yg(c))}
function yg(a){if("number"!==typeof a&&a&&!a.nb){var b=a.src;if(b&&b[fg])lg(b.g,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(vg(c),d):b.addListener&&b.removeListener&&b.removeListener(d);og--;(c=tg(b))?(lg(c,a),0==c.f&&(c.src=null,b[mg]=null)):ig(a)}}}
function vg(a){return a in ng?ng[a]:ng[a]="on"+a}
function zg(a,b,c,d){var e=!0;if(a=tg(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.nb&&(f=Ag(f,d),e=e&&!1!==f)}return e}
function Ag(a,b){var c=a.listener,d=a.Rb||a.src;a.Kb&&yg(a);return c.call(d,b)}
function wg(a,b){if(a.nb)return!0;if(!$f){var c=b||r("window.event"),d=new dg(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.f&&0<=g;g--){d.currentTarget=c[g];var k=zg(c[g],f,!0,d);e=e&&k}for(g=0;!d.f&&g<c.length;g++)d.currentTarget=c[g],k=zg(c[g],f,!1,d),e=e&&k}return e}return Ag(a,new dg(b,this))}
function tg(a){a=a[mg];return a instanceof jg?a:null}
var Bg="__closure_events_fn_"+(1E9*Math.random()>>>0);function rg(a){if(Ga(a))return a;a[Bg]||(a[Bg]=function(b){return a.handleEvent(b)});
return a[Bg]}
;function Cg(){Uf.call(this);this.g=new jg(this);this.xb=this;this.na=null}
y(Cg,Uf);Cg.prototype[fg]=!0;Cg.prototype.addEventListener=function(a,b,c,d){pg(this,a,b,c,d)};
Cg.prototype.removeEventListener=function(a,b,c,d){xg(this,a,b,c,d)};
Cg.prototype.dispatchEvent=function(a){var b=this.na;if(b){var c=[];for(var d=1;b;b=b.na)c.push(b),++d}b=this.xb;d=a.type||a;if("string"===typeof a)a=new Xf(a,b);else if(a instanceof Xf)a.target=a.target||b;else{var e=a;a=new Xf(d,b);Nb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.f&&0<=f;f--){var g=a.currentTarget=c[f];e=Dg(g,d,!0,a)&&e}a.f||(g=a.currentTarget=b,e=Dg(g,d,!0,a)&&e,a.f||(e=Dg(g,d,!1,a)&&e));if(c)for(f=0;!a.f&&f<c.length;f++)g=a.currentTarget=c[f],e=Dg(g,d,!1,a)&&e;return e};
Cg.prototype.K=function(){Cg.L.K.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ig(d[e]);delete a.listeners[c];a.f--}}this.na=null};
function Dg(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.nb&&g.capture==c){var k=g.listener,l=g.Rb||g.src;g.Kb&&lg(a.g,g);e=!1!==k.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function Eg(a,b){this.i=a;this.j=b;this.g=0;this.f=null}
Eg.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function Fg(a,b){a.j(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;var Gg=!B||Re(9),Hg=!we&&!B||B&&Re(9)||we&&Qe("1.9.1"),Ig=B&&!Qe("9"),Jg=B||te||xe;function Kg(a,b,c){return a+c*(b-a)}
;function Lg(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
h=Lg.prototype;h.clone=function(){return new Lg(this.x,this.y)};
h.equals=function(a){return a instanceof Lg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Mg(a,b){return new Lg(a.x-b.x,a.y-b.y)}
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ng(a,b){this.width=a;this.height=b}
h=Ng.prototype;h.clone=function(){return new Ng(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Og(a){return a?new Pg(Qg(a)):Ua||(Ua=new Pg)}
function C(a){return Rg(document,a)}
function Rg(a,b){return"string"===typeof b?a.getElementById(b):b}
function Sg(a){return Rg(document,a)}
function Tg(a,b,c){return Ug(document,a,b,c)}
function Vg(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Ug(document,"*",a,b)}
function F(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:d=Wg("*",a,b);return d||null}
function Ug(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&hb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function Wg(a,b,c){var d=document,e=c||d,f=a&&"*"!=a?String(a).toUpperCase():"";return e.querySelectorAll&&e.querySelector&&(f||b)?e.querySelector(f+(b?"."+b:"")):Ug(d,a,b,c)[0]||null}
function Xg(a,b){yb(b,function(c,d){c&&"object"==typeof c&&c.Ka&&(c=c.qa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Yg.hasOwnProperty(d)?a.setAttribute(Yg[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Yg={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Zg(a){a=a.document;a=$g(a)?a.documentElement:a.body;return new Ng(a.clientWidth,a.clientHeight)}
function ah(a){var b=bh(a);a=ch(a);return B&&Qe("10")&&a.pageYOffset!=b.scrollTop?new Lg(b.scrollLeft,b.scrollTop):new Lg(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function bh(a){return a.scrollingElement?a.scrollingElement:!xe&&$g(a)?a.documentElement:a.body||a.documentElement}
function ch(a){return a.parentWindow||a.defaultView}
function dh(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Gg&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ad(g.name),'"');if(g.type){f.push(' type="',Ad(g.type),'"');var k={};Nb(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=eh(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Xg(f,g));2<d.length&&fh(e,f,d,2);return f}
function fh(a,b,c,d){function e(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(;d<c.length;d++){var f=c[d];!Fa(f)||Ha(f)&&0<f.nodeType?e(f):z(gh(f)?nb(f):f,e)}}
function hh(a){return eh(document,a)}
function eh(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function ih(a){var b=document,c=eh(b,"DIV");B?(a=fd(kd,a),qd(c,a),c.removeChild(c.firstChild)):qd(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(b=b.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);c=b}return c}
function $g(a){return"CSS1Compat"==a.compatMode}
function jh(a,b){fh(Qg(a),a,arguments,1)}
function kh(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function lh(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function mh(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}
function nh(a){return Hg&&void 0!=a.children?a.children:Za(a.childNodes,function(b){return 1==b.nodeType})}
function oh(a){return void 0!==a.firstElementChild?a.firstElementChild:ph(a.firstChild,!0)}
function ph(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}
function qh(a){return Ha(a)&&1==a.nodeType}
function rh(a){var b;if(Jg&&!(B&&Qe("9")&&!Qe("10")&&p.SVGElement&&a instanceof p.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return qh(b)?b:null}
function sh(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Qg(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function th(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{kh(a);var c=Qg(a);a.appendChild(c.createTextNode(String(b)))}}
function uh(a,b){var c=[];return vh(a,b,c,!0)?c[0]:void 0}
function vh(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||vh(a,b,c,d))return!0;a=a.nextSibling}return!1}
var wh={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},xh={IMG:" ",BR:"\n"};function yh(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!zh(a)||Ah(a)):zh(a)&&Ah(a))&&B){var c;!Ga(a.getBoundingClientRect)||B&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function zh(a){return B&&!Qe("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Ah(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function Bh(a){if(Ig&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Ch(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Ig||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Ch(a,b,c){if(!(a.nodeName in wh))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in xh)b.push(xh[a.nodeName]);else for(a=a.firstChild;a;)Ch(a,b,c),a=a.nextSibling}
function gh(a){if(a&&"number"==typeof a.length){if(Ha(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ga(a))return"function"==typeof a.item}return!1}
function Dh(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Eh(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&hb(f.className.split(/\s+/),c))},!0,d)}
function G(a,b){return Dh(a,null,b,void 0)}
function Eh(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Pg(a){this.f=a||p.document||document}
h=Pg.prototype;h.uc=function(){return Rg(this.f,void 0)};
h.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
h.createElement=function(a){return eh(this.f,a)};
h.appendChild=function(a,b){a.appendChild(b)};
h.isElement=qh;function Fh(a){p.setTimeout(function(){throw a;},0)}
var Gh;function Hh(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var e=hh("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=v(function(l){if(("*"==k||l.origin==k)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&!Sc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Zc;c.Zc=null;e()}};
return function(e){d.next={Zc:e};d=d.next;b.port2.postMessage(0)}}return function(e){p.setTimeout(e,0)}}
;function Ih(){this.g=this.f=null}
var Kh=new Eg(function(){return new Jh},function(a){a.reset()});
Ih.prototype.add=function(a,b){var c=Kh.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Ih.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Jh(){this.next=this.scope=this.ua=null}
Jh.prototype.set=function(a,b){this.ua=a;this.scope=b;this.next=null};
Jh.prototype.reset=function(){this.next=this.scope=this.ua=null};function Lh(a,b){Mh||Nh();di||(Mh(),di=!0);ei.add(a,b)}
var Mh;function Nh(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);Mh=function(){a.then(fi)}}else Mh=function(){var b=fi;
!Ga(p.setImmediate)||p.Window&&p.Window.prototype&&!A("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Gh||(Gh=Hh()),Gh(b)):p.setImmediate(b)}}
var di=!1,ei=new Ih;function fi(){for(var a;a=ei.remove();){try{a.ua.call(a.scope)}catch(b){Fh(b)}Fg(Kh,a)}di=!1}
;function gi(a){this.f=0;this.F=void 0;this.j=this.g=this.i=null;this.l=this.A=!1;if(a!=Ca)try{var b=this;a.call(void 0,function(c){hi(b,2,c)},function(c){hi(b,3,c)})}catch(c){hi(this,3,c)}}
function ii(){this.next=this.context=this.onRejected=this.i=this.f=null;this.g=!1}
ii.prototype.reset=function(){this.context=this.onRejected=this.i=this.f=null;this.g=!1};
var ji=new Eg(function(){return new ii},function(a){a.reset()});
function ki(a,b,c){var d=ji.get();d.i=a;d.onRejected=b;d.context=c;return d}
function li(a){if(a instanceof gi)return a;var b=new gi(Ca);hi(b,2,a);return b}
function mi(a,b,c){ni(a,b,c,null)||Lh(Na(b,a))}
function oi(a){return new gi(function(b,c){var d=a.length,e=[];if(d)for(var f=function(m,n){d--;e[m]=n;0==d&&b(e)},g=function(m){c(m)},k=0,l;k<a.length;k++)l=a[k],mi(l,Na(f,k),g);
else b(e)})}
gi.prototype.then=function(a,b,c){return pi(this,Ga(a)?a:null,Ga(b)?b:null,c)};
gi.prototype.$goog_Thenable=!0;function qi(a,b){var c=ki(b,b,void 0);c.g=!0;ri(a,c)}
gi.prototype.cancel=function(a){if(0==this.f){var b=new si(a);Lh(function(){ti(this,b)},this)}};
function ti(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.g||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?ti(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):ui(c),vi(c,e,3,b)))}a.i=null}else hi(a,3,b)}
function ri(a,b){a.g||2!=a.f&&3!=a.f||wi(a);a.j?a.j.next=b:a.g=b;a.j=b}
function pi(a,b,c,d){var e=ki(null,null,null);e.f=new gi(function(f,g){e.i=b?function(k){try{var l=b.call(d,k);f(l)}catch(m){g(m)}}:f;
e.onRejected=c?function(k){try{var l=c.call(d,k);void 0===l&&k instanceof si?g(k):f(l)}catch(m){g(m)}}:g});
e.f.i=a;ri(a,e);return e.f}
gi.prototype.B=function(a){this.f=0;hi(this,2,a)};
gi.prototype.D=function(a){this.f=0;hi(this,3,a)};
function hi(a,b,c){0==a.f&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.f=1,ni(c,a.B,a.D,a)||(a.F=c,a.f=b,a.i=null,wi(a),3!=b||c instanceof si||xi(a,c)))}
function ni(a,b,c,d){if(a instanceof gi)return ri(a,ki(b||Ca,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Ha(a))try{var f=a.then;if(Ga(f))return yi(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function yi(a,b,c,d,e){function f(l){k||(k=!0,d.call(e,l))}
function g(l){k||(k=!0,c.call(e,l))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function wi(a){a.A||(a.A=!0,Lh(a.G,a))}
function ui(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);return b}
gi.prototype.G=function(){for(var a;a=ui(this);)vi(this,a,this.f,this.F);this.A=!1};
function vi(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.l;a=a.i)a.l=!1;if(b.f)b.f.i=null,zi(b,c,d);else try{b.g?b.i.call(b.context):zi(b,c,d)}catch(e){Ai.call(null,e)}Fg(ji,b)}
function zi(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function xi(a,b){a.l=!0;Lh(function(){a.l&&Ai.call(null,b)})}
var Ai=Fh;function si(a){Ta.call(this,a)}
y(si,Ta);si.prototype.name="cancel";function Bi(a,b){Cg.call(this);this.i=a||1;this.f=b||p;this.j=v(this.mf,this);this.l=x()}
y(Bi,Cg);h=Bi.prototype;h.enabled=!1;h.va=null;h.setInterval=function(a){this.i=a;this.va&&this.enabled?(this.stop(),this.start()):this.va&&this.stop()};
h.mf=function(){if(this.enabled){var a=x()-this.l;0<a&&a<.8*this.i?this.va=this.f.setTimeout(this.j,this.i-a):(this.va&&(this.f.clearTimeout(this.va),this.va=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
h.start=function(){this.enabled=!0;this.va||(this.va=this.f.setTimeout(this.j,this.i),this.l=x())};
h.stop=function(){this.enabled=!1;this.va&&(this.f.clearTimeout(this.va),this.va=null)};
h.K=function(){Bi.L.K.call(this);this.stop();delete this.f};
function Ci(a,b,c){if(Ga(a))c&&(a=v(a,c));else if(a&&"function"==typeof a.handleEvent)a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:p.setTimeout(a,b||0)}
;function Di(){this.D=new Ei;this.i=new Map;this.G=new Set;this.l=0;this.A=100;this.flushInterval=3E4;this.f=new Bi(this.flushInterval);this.f.g.add("tick",this.F,!1,!1,this)}
Di.prototype.F=function(){var a=this.i.values();a=[].concat(ka(a)).filter(function(b){return b.fb.size});
a.length&&this.D.flush(a);Fi(a);this.l=0;this.f.enabled&&this.f.stop()};
Di.prototype.g=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.i.has(a)||this.i.set(a,new Tf(a,c))};
Di.prototype.j=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.B.apply(this,[a,1].concat(ka(c)))};
Di.prototype.B=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=this.G.has(a)?void 0:this.i.get(a))&&e instanceof Tf&&(e.i(b,d),this.f.enabled||this.f.start(),this.l++,this.l>=this.A&&this.F())};
function Fi(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Gi(){this.f=Hi();this.f.g("/client_streamz/youtube/web/network/one_platform_requests",{Ya:3,Xa:"request_url"})}
function Ii(){this.f=Hi();this.f.g("/client_streamz/youtube/web/network/one_platform_redirects",{Ya:2,Xa:"response_code"},{Ya:3,Xa:"request_url"},{Ya:3,Xa:"response_url"})}
function Ji(a,b,c,d){a.f.j("/client_streamz/youtube/web/network/one_platform_redirects",b,c,d)}
function Ki(){this.f=Hi();this.f.g("/client_streamz/youtube/web/network/one_platform_request_success",{Ya:3,Xa:"request_url"})}
function Li(){this.f=Hi();this.f.g("/client_streamz/youtube/web/network/one_platform_request_failed",{Ya:2,Xa:"response_code"},{Ya:3,Xa:"request_url"})}
;var Mi=document,Ni=window;function Oi(){}
;var Pi={};function Qi(a){this.f=a||{cookie:""}}
h=Qi.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Cj;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var k=c.Gc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===k&&(k=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";k=0>k?"":0==k?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*k)).toUTCString();this.f.cookie=a+"="+b+c+g+k+d+(null!=e?";samesite="+e:
"")};
h.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=gc(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Gc:0,path:b,domain:c});return d};
h.Ca=function(){return Ri(this).keys};
h.ra=function(){return Ri(this).values};
h.isEmpty=function(){return!this.f.cookie};
h.clear=function(){for(var a=Ri(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ri(a){a=(a.f.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=gc(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Si=new Qi("undefined"==typeof document?null:document);function Ti(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}
;function Ui(a){Vi();return gd(a,null)}
function Wi(a){Vi();return ec(a)}
var Vi=Ca;function Xi(a){try{return!!a&&null!=a.location.href&&qe(a,"foo")}catch(b){return!1}}
function Yi(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}
function Zi(a){var b=[];Yi(a,function(c){b.push(c)});
return b}
var $i={Oh:"allow-forms",Ph:"allow-modals",Qh:"allow-orientation-lock",Rh:"allow-pointer-lock",Sh:"allow-popups",Th:"allow-popups-to-escape-sandbox",Uh:"allow-presentation",Vh:"allow-same-origin",Wh:"allow-scripts",Xh:"allow-top-navigation",Yh:"allow-top-navigation-by-user-activation"},aj=xb(function(){return Zi($i)});
function bj(){var a=hh("IFRAME"),b={};z(aj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function cj(){var a=dj(Ni),b=ej();this.D=a;this.pubWin=b;this.f=(this.iframeWin=Ni)||{};this.j=-1;this.G=!1;this.B="";this.l=this.g=0;this.i=this.A=this.F=""}
;function fj(){this.f=function(a){return void 0===a?!1:a};
this.g=function(a){return void 0===a?0:a}}
Da(fj);function gj(){var a=void 0===a?!1:a;return fj.getInstance().f(a)}
function hj(){var a=void 0===a?0:a;return fj.getInstance().g(a)}
;function ij(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
h=ij.prototype;h.getHeight=function(){return this.bottom-this.top};
h.clone=function(){return new ij(this.top,this.right,this.bottom,this.left)};
function jj(a,b){return a&&b?b instanceof ij?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1}
function kj(a,b){return a.left<=b.right&&b.left<=a.right&&a.top<=b.bottom&&b.top<=a.bottom}
h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function lj(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
lj.prototype.clone=function(){return new lj(this.left,this.top,this.width,this.height)};
lj.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
lj.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
lj.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var mj={"AMP-CAROUSEL":"ac","AMP-FX-FLYING-CARPET":"fc","AMP-LIGHTBOX":"lb","AMP-STICKY-AD":"sa"};function nj(a){a=void 0===a?p:a;var b=a.context||a.AMP_CONTEXT_DATA;if(!b)try{b=a.parent.context||a.parent.AMP_CONTEXT_DATA}catch(c){}try{if(b&&b.pageViewId&&b.canonicalUrl)return b}catch(c){}return null}
;function oj(a,b){p.google_image_requests||(p.google_image_requests=[]);var c=p.document.createElement("img");if(b){var d=function(e){b&&b(e);c.removeEventListener&&c.removeEventListener("load",d,!1);c.removeEventListener&&c.removeEventListener("error",d,!1)};
Ti(c,"load",d);Ti(c,"error",d)}c.src=a;p.google_image_requests.push(c)}
;function pj(){return xe?"Webkit":we?"Moz":B?"ms":te?"O":null}
function qj(){return xe?"-webkit":we?"-moz":B?"-ms":te?"-o":null}
;function rj(a,b,c){if("string"===typeof b)(b=sj(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=sj(c,d);f&&(c.style[f]=e)}}
var tj={};function sj(a,b){var c=tj[b];if(!c){var d=Jd(b);c=d;void 0===a.style[d]&&(d=pj()+Kd(d),void 0!==a.style[d]&&(c=d));tj[b]=c}return c}
function uj(a,b){var c=Qg(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function vj(a,b){return uj(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function wj(a){return vj(a,"position")}
function xj(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}}
function yj(a){if(B&&!Re(8))return a.offsetParent;var b=Qg(a),c=vj(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=vj(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function zj(a){for(var b=new ij(0,Infinity,Infinity,0),c=Og(a),d=c.f.body,e=c.f.documentElement,f=bh(c.f);a=yj(a);)if(!(B&&0==a.clientWidth||xe&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=vj(a,"overflow")){var g=Aj(a),k=new Lg(a.clientLeft,a.clientTop);g.x+=k.x;g.y+=k.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);
c=Zg(ch(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Aj(a){var b=Qg(a),c=new Lg(0,0);var d=b?Qg(b):document;d=!B||Re(9)||$g(Og(d).f)?d.documentElement:d.body;if(a==d)return c;a=xj(a);b=ah(Og(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Bj(a){return Aj(a).x}
function Cj(a){a=xj(a);return new Lg(a.left,a.top)}
function Dj(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Ej(a){var b=Fj;if("none"!=vj(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Fj(a){var b=a.offsetWidth,c=a.offsetHeight,d=xe&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=xj(a),new Ng(a.right-a.left,a.bottom-a.top)):new Ng(b,c)}
function Gj(a){var b=Aj(a);a=Ej(a);return new lj(b.x,b.y,a.width,a.height)}
function Hj(a){return"rtl"==vj(a,"direction")}
function Ij(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Jj(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Ij(a,c):0}
var Kj={thin:2,medium:4,thick:6};function Lj(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Kj?Kj[c]:Ij(a,c)}
;function Mj(a,b){return typeof a===b}
function Nj(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}
function Oj(a){return!(!a||!a.call)&&Mj(a,"function")}
function Pj(a,b){if(a.filter)return a.filter(b,void 0);for(var c=[],d=0;d<a.length;d++)b.call(void 0,a[d],d,a)&&c.push(a[d]);return c}
function Qj(a,b){var c=b.slice(-1),d="?"===c||"#"===c?"":"&",e=[b];Nj(a,function(f,g){if(f||0===f||!1===f)Mj(f,"boolean")&&(f=f?1:0),e.push(d),e.push(g),e.push("="),e.push(encodeURIComponent(String(f))),d="&"});
return e.join("")}
function Rj(){var a=void 0===a?Ni:a;try{return a.history.length}catch(b){return 0}}
function Sj(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=Rj();a.u_java=!!Ni.navigator&&!Mj(Ni.navigator.javaEnabled,"unknown")&&!!Ni.navigator.javaEnabled&&Ni.navigator.javaEnabled();Ni.screen&&(a.u_h=Ni.screen.height,a.u_w=Ni.screen.width,a.u_ah=Ni.screen.availHeight,a.u_aw=Ni.screen.availWidth,a.u_cd=Ni.screen.colorDepth);Ni.navigator&&Ni.navigator.plugins&&(a.u_nplug=Ni.navigator.plugins.length);Ni.navigator&&Ni.navigator.mimeTypes&&(a.u_nmime=Ni.navigator.mimeTypes.length)}
var Tj=!!window.google_async_iframe_id,Uj=Tj&&window.parent||window;function ej(){if(Tj&&!Xi(Uj)){var a="."+Mi.domain;try{for(;2<a.split(".").length&&!Xi(Uj);)Mi.domain=a=a.substr(a.indexOf(".")+1),Uj=window.parent}catch(b){}Xi(Uj)||(Uj=window)}return Uj}
ec(Vb(Wb("//fonts.googleapis.com/css")));
function Vj(){var a,b=window.ActiveXObject;if(navigator.plugins&&navigator.mimeTypes.length){if((a=navigator.plugins["Shockwave Flash"])&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else{if(navigator.userAgent&&0<=navigator.userAgent.indexOf("Windows CE")){var c=3;for(a=1;a;)try{a=new b("ShockwaveFlash.ShockwaveFlash."+(c+1)),c++}catch(d){a=null}return c.toString()}if(Sc()){a=null;try{a=new b("ShockwaveFlash.ShockwaveFlash.7")}catch(d){c=0;try{a=new b("ShockwaveFlash.ShockwaveFlash.6"),
c=6,a.AllowScriptAccess="always"}catch(e){if(6===c)return c.toString()}try{a=new b("ShockwaveFlash.ShockwaveFlash")}catch(e){}}if(a)return c=a.GetVariable("$version").split(" ")[1],c.replace(/,/g,".")}}return"0"}
function dj(a){a=a.top;return Xi(a)?a:null}
;var H={},Wj=(H.google_ad_channel="channel",H.google_ad_type="ad_type",H.google_ad_format="format",H.google_color_bg="color_bg",H.google_color_border="color_border",H.google_color_link="color_link",H.google_color_text="color_text",H.google_color_url="color_url",H.google_page_url="url",H.google_allow_expandable_ads="ea",H.google_ad_section="region",H.google_cpm="cpm",H.google_encoding="oe",H.google_safe="adsafe",H.google_flash_version="flash",H.google_font_face="f",H.google_font_size="fs",H.google_hints=
"hints",H.google_ad_host="host",H.google_ad_host_channel="h_ch",H.google_ad_host_tier_id="ht_id",H.google_kw_type="kw_type",H.google_kw="kw",H.google_contents="contents",H.google_targeting="targeting",H.google_adtest="adtest",H.google_alternate_color="alt_color",H.google_alternate_ad_url="alternate_ad_url",H.google_cust_age="cust_age",H.google_cust_ch="cust_ch",H.google_cust_gender="cust_gender",H.google_cust_interests="cust_interests",H.google_cust_job="cust_job",H.google_cust_l="cust_l",H.google_cust_lh=
"cust_lh",H.google_cust_u_url="cust_u_url",H.google_cust_id="cust_id",H.google_language="hl",H.google_city="gcs",H.google_country="gl",H.google_region="gr",H.google_content_recommendation_ad_positions="ad_pos",H.google_content_recommendation_columns_num="cr_col",H.google_content_recommendation_rows_num="cr_row",H.google_content_recommendation_ui_type="crui",H.google_content_recommendation_use_square_imgs="cr_sq_img",H.google_color_line="color_line",H.google_disable_video_autoplay="disable_video_autoplay",
H.google_full_width_responsive_allowed="fwr",H.google_full_width_responsive="fwrattr",H.efwr="efwr",H.google_pgb_reactive="pra",H.google_resizing_allowed="rs",H.google_resizing_height="rh",H.google_resizing_width="rw",H.rpe="rpe",H.google_responsive_formats="resp_fmts",H.google_safe_for_responsive_override="sfro",H.google_video_doc_id="video_doc_id",H.google_video_product_type="video_product_type",H.google_webgl_support="wgl",H.google_refresh_count="rc",H),I={},Xj=(I.google_ad_block="ad_block",I.google_ad_client=
"client",I.google_ad_output="output",I.google_ad_callback="callback",I.google_ad_height="h",I.google_ad_resize="twa",I.google_ad_slot="slotname",I.google_ad_unit_key="adk",I.google_ad_dom_fingerprint="adf",I.google_ad_width="w",I.google_captcha_token="captok",I.google_content_recommendation_columns_num="cr_col",I.google_content_recommendation_rows_num="cr_row",I.google_ctr_threshold="ctr_t",I.google_cust_criteria="cust_params",I.gfwrnwer="fwrn",I.gfwrnher="fwrnh",I.google_bfa="bfa",I.ebfa="ebfa",
I.ebfaca="ebfaca",I.google_image_size="image_size",I.google_last_modified_time="lmt",I.google_loeid="loeid",I.google_max_num_ads="num_ads",I.google_max_radlink_len="max_radlink_len",I.google_mtl="mtl",I.google_native_settings_key="nsk",I.google_enable_content_recommendations="ecr",I.google_num_radlinks="num_radlinks",I.google_num_radlinks_per_unit="num_radlinks_per_unit",I.google_pucrd="pucrd",I.google_reactive_plaf="plaf",I.google_reactive_plat="plat",I.google_reactive_fba="fba",I.google_reactive_sra_channels=
"plach",I.google_responsive_auto_format="rafmt",I.armr="armr",I.google_rl_dest_url="rl_dest_url",I.google_rl_filtering="rl_filtering",I.google_rl_mode="rl_mode",I.google_rt="rt",I.google_source_type="src_type",I.google_restrict_data_processing="rdp",I.google_tag_for_child_directed_treatment="tfcd",I.google_tag_for_under_age_of_consent="tfua",I.google_tag_origin="to",I.google_ad_semantic_area="sem",I.google_tfs="tfs",I.google_package="pwprc",I.google_tag_partner="tp",I.fra="fpla",I.google_ml_rank=
"mlr",I.google_apsail="psa",I),Yj={},Zj=(Yj.google_core_dbp="dbp",Yj.google_lact="lact",Yj.google_only_pyv_ads="pyv",Yj.google_scs="scs",Yj.google_video_url_to_fetch="durl",Yj.google_yt_pt="yt_pt",Yj.google_yt_up="yt_up",Yj);function ak(a){var b=a.f;null==b.google_ad_output&&(b.google_ad_output="html");if(null!=b.google_ad_client){var c;(c=String(b.google_ad_client))?(c=c.toLowerCase())&&"ca-"!=c.substring(0,3)&&(c="ca-"+c):c="";b.google_ad_client=c}null!=b.google_ad_slot&&(b.google_ad_slot=String(b.google_ad_slot));if(null==b.google_flash_version){try{var d=Vj()}catch(e){d="0"}b.google_flash_version=d}b.google_webgl_support=!!Ni.WebGLRenderingContext;b.google_ad_section=b.google_ad_section||b.google_ad_region||"";b.google_country=
b.google_country||b.google_gl||"";d=(new Date).getTime();Array.isArray(b.google_color_bg)&&(b.google_color_bg=bk(a,b.google_color_bg,d));Array.isArray(b.google_color_text)&&(b.google_color_text=bk(a,b.google_color_text,d));Array.isArray(b.google_color_link)&&(b.google_color_link=bk(a,b.google_color_link,d));Array.isArray(b.google_color_url)&&(b.google_color_url=bk(a,b.google_color_url,d));Array.isArray(b.google_color_border)&&(b.google_color_border=bk(a,b.google_color_border,d));Array.isArray(b.google_color_line)&&
(b.google_color_line=bk(a,b.google_color_line,d))}
function ck(){var a=window;Nj(Wj,function(b,c){a[c]=null});
Nj(Xj,function(b,c){a[c]=null});
Nj(Zj,function(b,c){a[c]=null});
a.google_container_id=null;a.google_eids=null;a.google_page_location=null;a.google_referrer_url=null;a.google_enable_single_iframe=null;a.google_ad_region=null;a.google_gl=null;a.google_loader_used=null;a.google_loader_features_used=null;a.google_debug_params=null}
function bk(a,b,c){a.g|=2;return b[c%b.length]}
;function dk(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c}
;var ek=[/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i,/^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i,/^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i,/^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i,/^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i,/^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i];function fk(a){return cb(ek,function(b){return b.test(a)})}
function gk(a){if(a=/[-\w]+\.[-\w]+$/.exec(a))switch(Id(a[0].toLowerCase())){case 1967261364:return 0;case 3147493546:return 1;case 1567346461:return 2;case 2183041838:return 3;case 763236279:return 4;case 1342279801:return 5;case 526831769:return 6;case 352806002:return 7;case 2755048925:return 8;case 3306848407:return 9;case 2207000920:return 10;case 484037040:return 11;case 3506871055:return 12;case 672143848:return 13;case 2528751226:return 14;case 2744854768:return 15;case 3703278665:return 16;
case 2014749173:return 17;case 133063824:return 18;case 2749334602:return 19;case 3131239845:return 20;case 2074086763:return 21;case 795772493:return 22;case 290857819:return 23;case 3035947606:return 24;case 2983138003:return 25;case 2197138676:return 26;case 4216016165:return 27;case 239803524:return 28;case 975993579:return 29;case 1794940339:return 30;case 1314429186:return 31;case 1643618937:return 32;case 497159982:return 33;case 3882239661:return 34}return-1}
function hk(a){if(!a.length)return 0;for(var b=[],c=0;34>=c;c++)b[c]=0;for(c=a.length-1;0<=c;c--){var d=gk(a[c]);0<=d&&(b[34-d]=1)}return parseInt(b.join(""),2)}
;var ik=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function jk(a){a=(this.g=a||p)||p;this.i=a.top==a?1:Xi(a.top)?2:3;3!=this.i&&(this.lastModifiedTime=Date.parse(p.top.document.lastModified)/1E3);this.f=kk(this.g)}
function lk(a){for(var b=[],c=Math.min(a.f.length,27),d=1;d<c;d++)a.f[d]&&a.f[d].url&&(b[d-1]=a.f[d].url);return mk(a,b.reverse())}
function nk(a){var b=a.g.document&&a.g.document.scripts?a.g.document.scripts:[];if(!b)return 0;for(var c=[],d=b.length-1;0<=d&&26>c.length;)b[d].src&&c.unshift(b[d].src),d--;return mk(a,c)}
function mk(a,b){for(var c,d=0,e=(c=a.f[Math.max(a.f.length-1,0)].url||null)&&Od(c),f=Math.min(b.length,26),g=0;g<f;g++)c=null!=b[g]&&Od(b[g])||"",d*=4,c&&(e&&c==e?d+=3:fk(b[g])?d+=2:c&&0<=gk(c)&&(d+=1));return d}
function ok(a){a=a.f;for(var b=[],c=a.length-1;0<c;c--){var d=a[c];d&&null!=d.url&&b.push(Od(d.url))}return hk(b)}
function Mk(a){a=a.g.document&&a.g.document.scripts?a.g.document.scripts:[];if(!a)return 0;for(var b=[],c=a.length-1;0<=c;c--){var d=a[c];d&&null!=d.src&&b.push(Od(d.src))}return hk(b)}
function kk(a){var b=a||p,c=[],d=null;do{var e=b;if(Xi(e)){var f=e.location.href;d=e.document&&e.document.referrer||null}else f=d,d=null;c.push(new Nk(f||"",e));try{b=e.parent}catch(g){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||p;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.Ed=!0);return c}
function Ok(a,b){this.f=a;this.g=b}
function Nk(a,b,c){this.url=a;this.sb=b;this.Ed=!!c;this.depth=null}
;function Pk(){this.i="&";this.j=!1;this.g={};this.l=0;this.f=[]}
function Qk(a,b){var c={};c[a]=b;return[c]}
function Rk(a,b,c,d,e){var f=[];Yi(a,function(g,k){var l=Sk(g,b,c,d,e);l&&f.push(k+"="+l)});
return f.join(b)}
function Sk(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Sk(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Rk(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}
function Tk(a,b,c,d){a.f.push(b);a.g[b]=Qk(c,d)}
function Uk(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=Vk(a)-c.length;if(0>d)return"";a.f.sort(function(n,t){return n-t});
c=null;for(var e="",f=0;f<a.f.length;f++)for(var g=a.f[f],k=a.g[g],l=0;l<k.length;l++){if(!d){c=null==c?g:c;break}var m=Rk(k[l],a.i,",$");if(m){m=e+m;if(d>=m.length){d-=m.length;b+=m;e=a.i;break}a.j&&(e=d,m[e-1]==a.i&&--e,b+=m.substr(0,e),e=a.i,d=0);c=null==c?g:c}}a="";null!=c&&(a=e+"trn="+c);return b+a+""}
function Vk(a){var b=1,c;for(c in a.g)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
;function Wk(a,b,c,d,e,f){if((d?a.f:Math.random())<(e||.01))try{if(c instanceof Pk)var g=c;else g=new Pk,Yi(c,function(l,m){var n=g,t=n.l++,u=Qk(m,l);n.f.push(t);n.g[t]=u});
var k=Uk(g,a.g,"/pagead/gen_204?id="+b+"&");k&&("undefined"!==typeof f?oj(k,void 0===f?null:f):oj(k,null))}catch(l){}}
;var Xk=null;function Yk(a){this.g={};this.f={};a=a||[];for(var b=0,c=a.length;b<c;++b)this.f[a[b]]=""}
function Zk(){var a=$k(),b=new Yk;Yi(a.g,function(c,d){b.g[d]=c});
Yi(a.f,function(c,d){b.f[d]=c});
return b}
function al(a){var b=[];Yi(a.g,function(c,d){b.push(d)});
Yi(a.f,function(c){""!=c&&b.push(c)});
return b}
;function bl(){var a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):x()}
function cl(){var a=void 0===a?p:a;return(a=a.performance)&&a.now?a.now():null}
;function dl(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}
;var el=p.performance,fl=!!(el&&el.mark&&el.measure&&el.clearMarks),gl=xb(function(){var a;if(a=fl){var b;if(null===Xk){Xk="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(Xk=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Xk;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function hl(){var a=il;this.events=[];this.g=a||p;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.f=gl()||(null!=b?b:1>Math.random())}
hl.prototype.disable=function(){this.f=!1;this.events!=this.g.google_js_reporting_queue&&(gl()&&z(this.events,jl),this.events.length=0)};
function jl(a){a&&el&&gl()&&(el.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),el.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}
hl.prototype.start=function(a,b){if(!this.f)return null;var c=cl()||bl();c=new dl(a,b,c);var d="goog_"+c.label+"_"+c.uniqueId+"_start";el&&gl()&&el.mark(d);return c};
hl.prototype.end=function(a){if(this.f&&"number"===typeof a.value){var b=cl()||bl();a.duration=b-a.value;b="goog_"+a.label+"_"+a.uniqueId+"_end";el&&gl()&&el.mark(b);!this.f||2048<this.events.length||this.events.push(a)}};function kl(){var a=ll;this.l=ml;this.g=null;this.A=this.j;this.f=void 0===a?null:a;this.i=!1}
function nl(a,b,c){try{if(a.f&&a.f.f){var d=a.f.start(b.toString(),3);var e=c();a.f.end(d)}else e=c()}catch(g){c=!0;try{jl(d);var f=new dk(g,{message:ol(g)});c=a.A(b,f,void 0,void 0)}catch(k){a.j(217,k)}if(!c)throw g;}return e}
function pl(a,b){var c=ql;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return nl(c,a,function(){return b.apply(void 0,e)})}}
kl.prototype.j=function(a,b,c,d,e){e=e||"jserror";try{var f=new Pk;f.j=!0;Tk(f,1,"context",a);b.error&&b.meta&&b.id||(b=new dk(b,{message:ol(b)}));b.msg&&Tk(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(this.g)try{this.g(g)}catch(w){}if(d)try{d(g)}catch(w){}b=[g];f.f.push(3);f.g[3]=b;var k=kk(),l=new Nk(p.location.href,p,!1);b=null;var m=k.length-1;for(d=m;0<=d;--d){var n=k[d];!b&&ik.test(n.url)&&(b=n);if(n.url&&!n.Ed){l=n;break}}n=null;var t=k.length&&k[m].url;0!=l.depth&&t&&(n=k[m]);var u=
new Ok(l,n);u.g&&Tk(f,4,"top",u.g.url||"");Tk(f,5,"url",u.f.url||"");Wk(this.l,e,f,this.i,c)}catch(w){try{Wk(this.l,e,{context:"ecmserr",rctx:a,msg:ol(w),url:u&&u.f.url},this.i,c)}catch(E){}}return!0};
function ol(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b}
;var ml,ql,il=ej(),ll=new hl;ml=new function(){var a=void 0===a?Ni:a;this.g="http:"===a.location.protocol?"http:":"https:";this.f=Math.random()};
"number"!==typeof il.google_srt&&(il.google_srt=Math.random());var rl=ml,sl=il.google_srt;0<=sl&&1>=sl&&(rl.f=sl);ql=new kl;ql.g=function(a){var b=Ni.jerExpIds;if(Array.isArray(b)&&0!==b.length){var c=a.eid;if(c){b=[].concat(ka(c.split(",")),ka(b));c={};for(var d=0,e=0;e<b.length;){var f=b[e++];var g=f;g=Ha(g)?"o"+Ia(g):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(c,g)||(c[g]=!0,b[d++]=f)}b.length=d;a.eid=b.join(",")}else a.eid=b.join(",")}(b=Ni.jerUserAgent)&&(a.useragent=b)};
ql.i=!0;"complete"==il.document.readyState?il.google_measure_js_timing||ll.disable():ll.f&&Ti(il,"load",function(){il.google_measure_js_timing||ll.disable()});
function tl(a,b){return pl(a,b)}
;var ul={Qi:0,oi:1,ri:2,wi:8,aj:9,Ji:10,Ki:11,Yi:16,ki:17,ji:24,Hi:25,bi:26,Zh:27,Pe:30,Bi:32,Ei:40};function vl(){this.wasPlaTagProcessed=!1;this.wasReactiveAdConfigReceived={};this.adCount={};this.wasReactiveAdVisible={};this.stateForType={};this.reactiveTypeEnabledInAsfe={};this.wasReactiveTagRequestSent=!1;this.reactiveTypeDisabledByPublisher={};this.tagSpecificState={};this.improveCollisionDetection=1;this.messageValidationEnabled=!1;this.floatingAdsStacking=new wl}
function xl(a){a.google_reactive_ads_global_state?null==a.google_reactive_ads_global_state.floatingAdsStacking&&(a.google_reactive_ads_global_state.floatingAdsStacking=new wl):a.google_reactive_ads_global_state=new vl;return a.google_reactive_ads_global_state}
function wl(){this.maxZIndexRestrictions={};this.nextRestrictionId=0;this.maxZIndexListeners=[]}
;var yl=728*1.38;function zl(a){return a!=a.top?512:0}
function Al(a,b){var c=Bl(a).clientWidth;return c?c>(void 0===b?420:b)?32768:320>c?65536:0:16384}
function Cl(a){var b=Bl(a).clientWidth;a=a.innerWidth;return(b=b&&a?b/a:0)?1.05<b?262144:.95>b?524288:0:131072}
function Bl(a){a=a.document;var b={};a&&(b="CSS1Compat"==a.compatMode?a.documentElement:a.body);return b||{}}
function Dl(a,b){if(!a.adCount)return!1;if(1==b||2==b)return!(!a.adCount[1]&&!a.adCount[2]);var c=a.adCount[b];return c&&27!=b&&26!=b?1<=c:!1}
;var El=null;function Fl(a,b){for(var c=0,d=a,e=0;a&&a!=a.parent;)if(a=a.parent,e++,Xi(a))d=a,c=e;else if(b)break;return{sb:d,level:c}}
function Gl(){El||(El=Fl(p,!0).sb);return El}
;function Hl(a){Yk.call(this,a);this.dfltBktExt=this.g;this.lrsExt=this.f}
sa(Hl,Yk);function Il(){this.S={}}
function Jl(){if(Kl)return Kl;var a=Ll(),b=a.google_persistent_state_async;return null!=b&&"object"==typeof b&&null!=b.S&&"object"==typeof b.S?Kl=b:a.google_persistent_state_async=Kl=new Il}
function Ml(a,b,c){b=Nl[b]||"google_ps_"+b;a=a.S;var d=a[b];return void 0===d?a[b]=c:d}
function Ll(){var a=nj();return(a?Xi(a.master)?a.master:null:null)||ej()}
var Kl=null,Ol={},Nl=(Ol[8]="google_prev_ad_formats_by_region",Ol[9]="google_prev_ad_slotnames_by_region",Ol);var Pl=navigator;function Ql(){try{return Pl.javaEnabled()}catch(a){return!1}}
function Rl(a){var b=1,c;if(void 0!=a&&""!=a)for(b=0,c=a.length-1;0<=c;c--){var d=a.charCodeAt(c);b=(b<<6&268435455)+d+(d<<14);d=b&266338304;b=0!=d?b^d>>21:b}return b}
function Sl(a,b){if(!a||"none"==a)return 1;a=String(a);"auto"==a&&(a=b,"www."==a.substring(0,4)&&(a=a.substring(4,a.length)));return Rl(a.toLowerCase())}
var Tl=/^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,Ul=/^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,Vl=/^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;xe&&hh("IFRAME");var Wl={ci:"google_ads_preview",mi:"google_mc_lab",ti:"google_anchor_debug",si:"google_bottom_anchor_debug",INTERSTITIAL:"google_ia_debug",Ai:"google_scr_debug",Di:"google_ia_debug_allow_onclick",Ni:"googleads",Pe:"google_pedestal_debug",Ui:"google_resize_debug",bj:"google_shoppable_images_debug",cj:"google_shoppable_images_cookie",dj:"google_shoppable_images_forced",Vi:"google_responsive_slot_debug",Xi:"google_responsive_slot_preview",Wi:"google_responsive_dummy_ad"},Xl={},Yl=(Xl.google_bottom_anchor_debug=
1,Xl.google_anchor_debug=2,Xl.google_ia_debug=8,Xl.google_resize_debug=16,Xl.google_scr_debug=9,Xl.googleads=2,Xl.google_pedestal_debug=30,Xl);function Zl(a,b){if(!a)return!1;var c=a.hash;if(!c||!c.indexOf)return!1;if(-1!=c.indexOf(b))return!0;var d=$l(b);return"go"!=d&&-1!=c.indexOf(d)?!0:!1}
function $l(a){var b="";Nj(a.split("_"),function(c){b+=c.substr(0,2)});
return b}
;function am(a,b){try{return(void 0===b?0:b)?(new Ng(a.innerWidth,a.innerHeight)).round():Zg(a||window).round()}catch(c){return new Ng(-12245933,-12245933)}}
;function bm(a,b){var c;if("relative"===a)return b;c||(c="https");p.location&&"https:"==p.location.protocol&&"http"==c&&(c="https");return[c,"://",a,b].join("")}
;function cm(a,b){Nj(a,function(c,d){b[d]=c})}
function dm(a){var b=a.location.href;if(a==a.top)return{url:b,Ec:!0};var c=!1,d=a.document;d&&d.referrer&&(b=d.referrer,a.parent==a.top&&(c=!0));(a=a.location.ancestorOrigins)&&(a=a[a.length-1])&&-1==b.indexOf(a)&&(c=!1,b=a);return{url:b,Ec:c}}
function em(a,b){if(a.URL!==b)return null;if(gj()){try{var c=Math.round(Date.parse(a.lastModified)/1E3)||null}catch(d){c=null}return c}try{return Date.parse(a.lastModified)/1E3}catch(d){}return null}
function fm(){var a=ej();if(a==a.top)return 0;for(;a&&a!=a.top&&Xi(a);a=a.parent){if(a.sf_)return 2;if(a.$sf)return 3;if(a.inGptIF)return 4;if(a.inDapIF)return 5}return 1}
;var gm={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1},hm=/(corp|borg)\.google\.com:\d+$/;function im(a){a=a.google_reactive_ad_format;return Cb(ul,a)?""+a:null}
function jm(a){return!!im(a)||null!=a.google_pgb_reactive}
;var km=!B&&!Uc();function lm(a,b){if(/-[a-z]/.test(b))return null;if(km&&a.dataset){if(Wc()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function mm(a){try{a.setItem("__storage_test__","__storage_test__");var b=a.getItem("__storage_test__");a.removeItem("__storage_test__");return"__storage_test__"==b}catch(c){return!1}}
function nm(a){try{if(null==a||!mm(a))return null;var b=a.getItem("__lsv__");if(!b)return[];try{var c=JSON.parse(b)}catch(d){}return!Array.isArray(c)||cb(c,function(d){return!Number.isInteger(d)})?(a.removeItem("__lsv__"),[]):om(c)}catch(d){return null}}
function om(a){a=void 0===a?[]:a;var b=Date.now();return Za(a,function(c){return 36E5>b-c})}
function pm(a){return!!a&&1>a.length}
;var qm={},rm=(qm[16]=4,qm[27]=512,qm[26]=128,qm);
function sm(a,b,c,d){switch(c){case 0:return 0;case 1:case 2:d=0;try{d|=zl(a);var e=Math.min(a.screen.width||0,a.screen.height||0);d|=e?320>e?8192:0:2048;var f;if(f=a.navigator){var g=a.navigator.userAgent;f=/Firefox/.test(g)||/Android 2/.test(g)||/iPhone OS [34]_/.test(g)||/Windows Phone (?:OS )?[67]/.test(g)}d|=f?1048576:0}catch(t){d|=32}var k=0;try{k|=a.innerHeight>=a.innerWidth?0:8,k|=Al(a,yl),k|=Cl(a)}catch(t){k|=32}if(c=2==c){var l=a.innerWidth;c=xl(a).improveCollisionDetection;var m=Math.round(a.innerWidth/
320*50+15),n=[];for(e=0;3>e;e++)for(f=0;3>f;f++)n.push({x:f/2*(l-0),y:e/2*(m-0)});a:{for(l=0;l<n.length;l++){b:if(m=a,b=n[l],e=c,f=m.document,f.elementFromPoint(b.x,b.y),g=b.x,b=b.y,f.hasOwnProperty("_goog_efp_called_")||(f._goog_efp_called_=f.elementFromPoint(g,b)),f=f.elementFromPoint(g,b))if("fixed"==wj(f))m=f;else{if(1==e){c:{m=m.document;for(e=f.offsetParent;e&&e!=m.body;e=e.offsetParent)if("fixed"==wj(e)){m=e;break c}m=null}if(m)break b}m=null}else m=null;if(m){a=m;break a}}a=null}c=null!=a}c&&
!gj()&&(k|=16777216);return d|k;case 8:c=!("on"===b.google_adtest||Zl(a.location,"google_ia_debug"));n=0;try{n|=zl(a),n|=a.navigator&&/Android 2/.test(a.navigator.userAgent)?1048576:0}catch(t){n|=32}l=0;try{l|=Al(a,0<hj()?hj():yl),gj()&&(k=Bl(a).clientHeight,l|=k?320>k?-2147483648:0:1073741824),l|=Cl(a),c&&!pm(nm(d))&&(l|=134217728)}catch(t){l|=32}return n|l;case 9:k=gj()&&!("on"===b.google_adtest||Zl(a.location,"google_scr_debug"));d=0;try{d|=zl(a);d|=Cl(a);d|=Al(a);d|=a.innerHeight>=a.innerWidth?
0:8;d|=a.navigator&&/Android 2/.test(a.navigator.userAgent)?1048576:0;if(n=k){k=null;try{k=a.localStorage}catch(t){}n=!pm(nm(k))}n&&(d|=134217728)}catch(t){d|=32}return d;case 16:return b.google_ad_resizable&&!b.google_reactive_ad_format&&a.navigator&&/iPhone|iPod|iPad|Android|BlackBerry/.test(a.navigator.userAgent)&&a.top==a?0:8388608;case 30:d=0;try{d|=zl(a);d|=a.getComputedStyle?0:2097152;!(A("iPad")||A("Android")&&!A("Mobile")||A("Silk"))&&(A("iPod")||A("iPhone")||A("Android")||A("IEMobile"))||
(d|=1048576);1200>=Math.floor(a.document.body.getBoundingClientRect().width)||(d|=32768);a:{m=a.document.getElementsByClassName("adsbygoogle");for(a=0;a<m.length;a++)if("autorelaxed"==lm(m[a],"adFormat")){l=!0;break a}l=!1}l&&(d|=33554432)}catch(t){d|=32}return d;case 26:d=0;try{d|=zl(a),d|=a.getComputedStyle?0:2097152,d|=a.document.querySelectorAll&&a.document.querySelector?0:4194304,d|=Al(a,1E4)}catch(t){d|=32}return d;case 27:d=0;try{d|=zl(a),d|=a.getComputedStyle?0:2097152,d|=Al(a,1E4)}catch(t){d|=
32}return d;default:return 32}}
function tm(a){if(!a.hash)return null;var b=null;Nj(Wl,function(c){!b&&Zl(a,c)&&(b=Yl[c])});
return b}
function um(a,b,c){if(!b)return null;var d=xl(b),e=0;Nj(ul,function(f){var g=rm[f];g&&0===vm(a,b,f,c)&&(e|=g)});
d.wasPlaTagProcessed&&(e|=256);a.google_reactive_tag_first&&(e|=1024);return e?""+e:null}
function vm(a,b,c,d){if(!b)return 256;var e=0,f=xl(b),g=Dl(f,c);if(a.google_reactive_ad_format==c||26!=c&&27!=c&&g)e|=64;var k=!1;Nj(f.reactiveTypeDisabledByPublisher,function(l,m){String(c)===m&&(k=!0)});
k&&tm(b.location)!==c&&(e|=128);return e|sm(b,a,c,d)}
;var wm={yi:5,ni:7,di:41,Ri:62,Si:82,Ti:83,Mi:87,gi:89,li:103,zi:106,hj:107,gj:126,Nh:128,Ii:138},xm=null;function ym(a){try{return!!a&&pe(!0)}catch(b){return!1}}
function zm(){if(ym(xm))return!0;var a=Jl();if(a=Ml(a,3,null)){if(a&&a.dfltBktExt&&a.lrsExt){var b=new Hl;b.g=a.dfltBktExt;b.dfltBktExt=b.g;b.f=a.lrsExt;b.lrsExt=b.f;a=b}else a=null;a||(a=new Hl,b={context:"ps::gpes::cf",url:ej().location.href},Wk(ml,"jserror",b,!0,void 0,void 0))}return ym(a)?(xm=a,!0):!1}
function $k(){if(zm())return xm;var a=Jl(),b=new Hl(Zi(wm));return xm=a.S[Nl[3]||"google_ps_3"]=b}
var Am=null;function Bm(){Am||(Am=Zk());return Am}
var Cm={};ej();function Dm(a){a=void 0===a?Bm():a;return Pj(al(a),function(b){return!!Cm[b]})}
function Em(a){a=void 0===a?Bm():a;return Pj(al(a),function(b){return!Cm[b]})}
;pe("script");/*

 Copyright 2019 The AMP HTML Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Fm={"image-top":0,"image-middle":1,"image-side":2,"text-only":3,"in-article":4};function Gm(a){this.j=[];this.g=a||window;this.f=0;this.i=null;this.l=0}
var Hm;h=Gm.prototype;h.Ze=function(a,b){0!=this.f||0!=this.j.length||b&&b!=window?this.nd(a,b):(this.f=2,this.me(new Im(a,window)))};
h.nd=function(a,b){this.j.push(new Im(a,b||this.g));Jm(this)};
h.Vg=function(a){this.f=1;if(a){var b=tl(188,v(this.le,this,!0));this.i=this.g.setTimeout(b,a)}};
h.le=function(a){a&&++this.l;1==this.f&&(null!=this.i&&(this.g.clearTimeout(this.i),this.i=null),this.f=0);Jm(this)};
h.oh=function(){return!(!window||!Array)};
h.lf=function(){return this.l};
function Jm(a){var b=tl(189,v(a.qh,a));a.g.setTimeout(b,0)}
h.qh=function(){if(0==this.f&&this.j.length){var a=this.j.shift();this.f=2;var b=tl(190,v(this.me,this,a));a.sb.setTimeout(b,0);Jm(this)}};
h.me=function(a){this.f=0;a.ua()};
function Km(a){try{return a.sz()}catch(b){return!1}}
Gm.prototype.nq=Gm.prototype.Ze;Gm.prototype.nqa=Gm.prototype.nd;Gm.prototype.al=Gm.prototype.Vg;Gm.prototype.rl=Gm.prototype.le;Gm.prototype.sz=Gm.prototype.oh;Gm.prototype.tc=Gm.prototype.lf;function Im(a,b){this.ua=a;this.sb=b}
;var Lm=(new Date).getTime();function Mm(a,b,c){a-=b;return a>=(void 0===c?1E5:c)?"M":0<=a?a:"-M"}
;Ad("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");function Nm(a){this.i=a;this.f=new Qi(a.document);this.g=0}
Nm.prototype.isSupported=function(){if(!gj())return this.f.isEnabled();if(0===this.g){if(this.read())var a=!0;else this.f.set("GoogleAdServingTest","Good"),(a="Good"===this.f.get("GoogleAdServingTest"))&&this.f.remove("GoogleAdServingTest");this.g=a?2:1}return 2===this.g};
Nm.prototype.read=function(){return this.f.get("__gads","")};
Nm.prototype.write=function(a){var b=a.getValue();this.f.set("__gads",b,{Gc:a.F()-this.i.Date.now()/1E3,path:a.D(),domain:a.B(),secure:!1})};var Om=/^\.google\.(com?\.)?[a-z]{2,3}$/,Pm=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,Qm=p,Rm,Sm;function Tm(){Qm=p;Rm=Qm.googleToken=Qm.googleToken||{};var a=x();Rm[1]&&Rm[3]>a&&0<Rm[2]||(Rm[1]="",Rm[2]=-1,Rm[3]=-1,Rm[4]="",Rm[6]="");Sm=Qm.googleIMState=Qm.googleIMState||{};a=Sm[1];Om.test(a)&&!Pm.test(a)||(Sm[1]=".google.com");Array.isArray(Sm[5])||(Sm[5]=[]);"boolean"!==typeof Sm[6]&&(Sm[6]=!1);Array.isArray(Sm[7])||(Sm[7]=[]);"number"!==typeof Sm[8]&&(Sm[8]=0)}
;pe("script");function Um(a){try{var b=a.screenX;var c=a.screenY}catch(k){}try{var d=a.outerWidth;var e=a.outerHeight}catch(k){}try{var f=a.innerWidth;var g=a.innerHeight}catch(k){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,g]}
;var Vm=/^blogger$/,Wm=/^wordpress(.|\s|$)/i,Xm=/^joomla!/i,Ym=/^drupal/i,Zm=/\/wp-content\//,$m=/\/wp-content\/plugins\/advanced-ads/,an=/\/wp-content\/themes\/genesis/,bn=/\/wp-content\/plugins\/genesis/;
function cn(a){for(var b=a.getElementsByTagName("script"),c=b.length,d=0;d<c;++d){var e=b[d];if(e.hasAttribute("src")){e=e.getAttribute("src");if($m.test(e))return 5;if(bn.test(e))return 6}}b=a.getElementsByTagName("link");c=b.length;for(d=0;d<c;++d)if(e=b[d],e.hasAttribute("href")&&(e=e.getAttribute("href"),an.test(e)||bn.test(e)))return 6;a=a.getElementsByTagName("meta");d=a.length;for(e=0;e<d;++e){var f=a[e];if("generator"==f.getAttribute("name")&&f.hasAttribute("content")){f=f.getAttribute("content");
if(Vm.test(f))return 1;if(Wm.test(f))return 2;if(Xm.test(f))return 3;if(Ym.test(f))return 4}}for(a=0;a<c;++a)if(d=b[a],"stylesheet"==d.getAttribute("rel")&&d.hasAttribute("href")&&(d=d.getAttribute("href"),Zm.test(d)))return 2;return 0}
;function dn(){this.g=[];this.f=-1}
dn.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
dn.prototype.get=function(a){return!!this.g[a]};
function en(a){-1==a.f&&(a.f=bb(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function fn(){var a=new dn;p.SVGElement&&p.document.createElementNS&&a.set(0);var b=bj();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);p.crypto&&p.crypto.subtle&&a.set(3);p.TextDecoder&&p.TextEncoder&&a.set(4);return en(a)}
;function gn(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0}
;var hn=xb(function(){if(B)return Qe("10.0");var a=hh("DIV"),b=qj(),c={transition:"opacity 1s linear"};b&&(c[b+"-transition"]="opacity 1s linear");b=ed("div",{style:c});qd(a,b);a=a.firstChild;b=a.style[Jd("transition")];return""!=("undefined"!==typeof b?b:a.style[sj(a,"transition")]||"")});for(var jn="margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),kn=0;kn<jn.length;kn++);jn="margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");for(var ln=0;ln<jn.length;ln++);var mn=/[+, ]/;
function nn(a){var b=a.f,c=ej().document,d={},e=ej(),f;var g=Fl(ej(),!1).sb;var k=dm(g);a:{var l=ej(),m=b.google_ad_width||l.google_ad_width,n=b.google_ad_height||l.google_ad_height;if(l&&l.top==l)var t=!1;else{var u=c.documentElement;if(m&&n){var w=1,E=1;l.innerHeight?(w=l.innerWidth,E=l.innerHeight):u&&u.clientHeight?(w=u.clientWidth,E=u.clientHeight):c.body&&(w=c.body.clientWidth,E=c.body.clientHeight);if(E>2*n||w>2*m){t=!1;break a}}t=!0}}var aa=f=t,ba=k.Ec,uc=ej();var Pa=uc.top==uc?0:Xi(uc.top)?
1:2;var ab=4;aa||1!=Pa?aa||2!=Pa?aa&&1==Pa?ab=7:aa&&2==Pa&&(ab=8):ab=6:ab=5;ba&&(ab|=16);var Le=""+ab;var Me=fm();var Ro=g,So=f,To=!!b.google_page_url;d.google_iframing=Le;0!=Me&&(d.google_iframing_environment=Me);if(!To&&"ad.yieldmanager.com"==c.domain){for(var Oh=c.URL.substring(c.URL.lastIndexOf("http"));-1<Oh.indexOf("%");)try{Oh=decodeURIComponent(Oh)}catch($b){break}b.google_page_url=Oh;To=!!Oh}To?(d.google_page_url=b.google_page_url,d.google_page_location=(So?c.referrer:c.URL)||"EMPTY"):(So&&
Xi(e.top)&&c.referrer&&e.top.document.referrer===c.referrer?d.google_page_url=e.top.document.URL:d.google_page_url=So?c.referrer:c.URL,d.google_page_location=null);d.google_last_modified_time=em(c,d.google_page_url);if(Ro==Ro.top)var rw=Ro.document.referrer;else{var sw=nj();rw=sw&&sw.referrer||""}d.google_referrer_url=rw;cm(d,b);var pk=b.google_page_location||b.google_page_url;"EMPTY"==pk&&(pk=b.google_page_url);if(pk){var vc=pk.toString();0==vc.indexOf("http://")?vc=vc.substring(7,vc.length):0==
vc.indexOf("https://")&&(vc=vc.substring(8,vc.length));var Uo=vc.indexOf("/");-1==Uo&&(Uo=vc.length);var tw=vc.substring(0,Uo);if(hm.test(tw))var Vo=!1;else{var Nf=tw.split("."),qk=!1;3<=Nf.length&&(qk=Nf[Nf.length-3]in gm);2<=Nf.length&&(qk=qk||Nf[Nf.length-2]in gm);Vo=qk}}else Vo=!1;var uw=Vo?"pagead2.googlesyndication.com":"googleads.g.doubleclick.net",D={};on(a,D);Tm();D.adsid=Rm[1];Tm();D.pucrd=Rm[6];var ac=a.f,Ph=a.f;D.dt=Lm;Ph.google_async_iframe_id&&Ph.google_bpp&&(D.bpp=Ph.google_bpp);var xH=
ej();b:{var yH=ej();try{var Of=yH.performance;if(Of&&Of.timing&&Of.now){var vw=Of.timing.navigationStart+Math.round(Of.now())-Of.timing.domLoading;break b}}catch($b){}vw=null}var ww=vw;if(ww){var zH=xH.Date.now()-Lm;var xw=Mm(ww,zH,1E6)}else xw=null;var yw=xw;yw&&(D.bdt=yw);var zw=Ph.google_iframe_start_time;if("number"!==typeof zw)var Aw=null;else Ph.google_iframe_start_time=null,Aw=Mm(zw,Lm);var Bw=Aw;null!=Bw&&(D.fdt=Bw);D.idt=Mm(0,Lm);var rk=a.f;D.shv="r20100101";D.cbv="/r20100101".replace("/",
"");"sa"==rk.google_loader_used?D.ptt=5:"aa"==rk.google_loader_used&&(D.ptt=9);/^\w{1,3}$/.test(rk.google_loader_used)&&(D.saldr=rk.google_loader_used);var Wo=nj(a.pubWin);if(Wo){D.is_amp=1;var Xo=Wo||nj();D.amp_v=Xo&&Xo.mode?+Xo.mode.version||null:null;var Yo=Wo||nj();if(Yo&&Yo.container){for(var Cw=Yo.container.split(","),Dw=[],Zo=0;Zo<Cw.length;Zo++)Dw.push(mj[Cw[Zo]]||"x");var Ew=Dw.join()}else Ew=null;var Fw=Ew;Fw&&(D.act=Fw)}ej()==window.top&&(D.abxe=1);if("_gfp_a_"in a.pubWin){var $o=a.pubWin._gfp_a_;
if("boolean"!==typeof $o)throw Error("Illegal value of _gfp_a_: "+$o);if($o&&gj()){var Gw=(new Nm(a.pubWin)).read();Gw&&(D.cookie=Gw)}}var Xd=Jl(),Hw=Ml(Xd,8,{}),sk=ac.google_ad_section;Hw[sk]&&(D.prev_fmts=Hw[sk]);var Iw=Ml(Xd,9,{});Iw[sk]&&(D.prev_slotnames=Iw[sk].toLowerCase());var ap=Ml(Xd,8,{}),bp=Ml(Xd,9,{}),Pf=ac.google_ad_section,cp=ac.google_ad_format,dp=ac.google_ad_slot;cp?ap[Pf]=ap[Pf]?ap[Pf]+(","+cp):cp:dp&&(bp[Pf]=bp[Pf]?bp[Pf]+(","+dp):dp);var Jw=Ml(Xd,15,0);0<Jw&&(D.nras=String(Jw));
var Kw=ej(),Lw=nj(Kw);if(Lw){var ep=Lw||nj();if(ep){var Mw=ep.pageViewId,Nw=ep.clientId;"string"===typeof Nw&&(Mw+=Nw.replace(/\D/g,"").substr(0,6));var Ow=Mw}else Ow=null;var Pw=+Ow}else{var Qw=Fl(Kw,!1).sb,fp=Qw.google_global_correlator;fp||(Qw.google_global_correlator=fp=1+Math.floor(Math.random()*Math.pow(2,43)));Pw=fp}D.correlator=Ml(Xd,7,Pw);Bm().g["21060549"]&&(D.rume=1);if(ac.google_ad_channel){for(var Rw=Ml(Xd,10,{}),Sw="",Tw=ac.google_ad_channel.split(mn),gp=0;gp<Tw.length;gp++){var hp=
Tw[gp];Rw[hp]?Sw+=hp+"+":Rw[hp]=!0}D.pv_ch=Sw}if(ac.google_ad_host_channel){for(var tk=Ml(Xd,11,[]),Uw=ac.google_ad_host_channel.split("|"),uk=-1,ip=[],nd=0;nd<Uw.length;nd++){var Vw=Uw[nd].split(mn);tk[nd]||(tk[nd]={});for(var Qh="",jp=0;jp<Vw.length;jp++){var vk=Vw[jp];""!==vk&&(tk[nd][vk]?Qh+="+"+vk:tk[nd][vk]=!0)}Qh=Qh.slice(1);ip[nd]=Qh;""!==Qh&&(uk=nd)}var kp="";if(-1<uk){for(var lp=0;lp<uk;lp++)kp+=ip[lp]+"|";kp+=ip[uk]}D.pv_h_ch=kp}D.frm=ac.google_iframing;D.ife=ac.google_iframing_environment;
var Ww=ac.google_ad_client;try{var Xw=Gl(),wk=Xw.google_prev_clients;wk||(wk=Xw.google_prev_clients={});if(Ww in wk)var mp=1;else wk[Ww]=!0,mp=2}catch($b){mp=0}D.pv=mp;var np=a.pubWin.document,Yw=a.f,Zw="";try{Zw=np.cookie}catch($b){}var $w=np.domain,Rh=Zw,xk=a.pubWin.screen,AH=np.referrer,BH=Rj();if(nj())var ax=ej().gaGlobal||{};else{var op=Math.round((new Date).getTime()/1E3),pp=Yw.google_analytics_domain_name,yk="undefined"==typeof pp?Sl("auto",$w):Sl(pp,$w),CH=-1<Rh.indexOf("__utma="+yk+"."),
DH=-1<Rh.indexOf("__utmb="+yk),qp;if(!(qp=Ll().gaGlobal)){var EH={};qp=Ll().gaGlobal=EH}var Qa=qp,bx=!1;if(CH){var rp=Rh.split("__utma="+yk+".")[1].split(";")[0].split(".");DH?Qa.sid=rp[3]+"":Qa.sid||(Qa.sid=op+"");Qa.vid=rp[0]+"."+rp[1];Qa.from_cookie=!0}else{Qa.sid||(Qa.sid=op+"");if(!Qa.vid){bx=!0;var FH=Math.round(2147483647*Math.random()),cx=BH,dx,Ne=[Pl.appName,Pl.version,Pl.language?Pl.language:Pl.browserLanguage,Pl.platform,Pl.userAgent,Ql()?1:0].join("");if(xk)Ne+=xk.width+"x"+xk.height+
xk.colorDepth;else if(p.java&&p.java.awt){var ex=p.java.awt.Toolkit.getDefaultToolkit().getScreenSize();Ne+=ex.screen.width+"x"+ex.screen.height}Ne=Ne+Rh+(AH||"");for(dx=Ne.length;0<cx;)Ne+=cx--^dx++;Qa.vid=(FH^Rl(Ne)&2147483647)+"."+op}Qa.from_cookie=!1}if(!Qa.cid){b:{var Qf=pp,fx=999;Qf&&(Qf=0==Qf.indexOf(".")?Qf.substr(1):Qf,fx=(""+Qf).split(".").length);for(var gx,hx=999,zk=Rh.split(";"),Sh=0;Sh<zk.length;Sh++){var Ak=Tl.exec(zk[Sh])||Ul.exec(zk[Sh])||Vl.exec(zk[Sh]);if(Ak){var sp=Ak[1]||0;if(sp==
fx){var ix=Ak[2];break b}sp<hx&&(hx=sp,gx=Ak[2])}}ix=gx}var Th=ix;bx&&Th&&-1!=Th.search(/^\d+\.\d+$/)?(Qa.vid=Th,Qa.from_cookie=!0):Th!=Qa.vid&&(Qa.cid=Th)}Qa.dh=yk;Qa.hid||(Qa.hid=Math.round(2147483647*Math.random()));ax=Qa}var Uh=ax;D.ga_vid=Uh.vid;D.ga_sid=Uh.sid;D.ga_hid=Uh.hid;D.ga_fc=Uh.from_cookie;D.ga_cid=Uh.cid;D.ga_wpids=Yw.google_analytics_uacct;var Vh=a.pubWin,Wh=new jk(Vh);Vh.location&&Vh.location.ancestorOrigins&&(D.iag=lk(Wh));D.icsg=nk(Wh);var tp=Wh.f[0].depth;tp&&0<tp&&(D.nhd=tp);
D.dssz=Vh.document.scripts?Vh.document.scripts.length:0;D.mdo=ok(Wh);D.mso=Mk(Wh);var up=ac.google_ad_layout;up&&0<=Fm[up]&&(D.rplot=Fm[up]);Sj(D);var vp,jx=nj(),Bk=jx&&jx.initialIntersection;if(vp=(Bk&&Ha(Bk.rootBounds)?new Ng(Bk.rootBounds.width,Bk.rootBounds.height):null)||am(a.pubWin.top))D.biw=vp.width,D.bih=vp.height;var kx=a.pubWin;if(kx.top!=kx){var wp=am(a.pubWin);wp&&(D.isw=wp.width,D.ish=wp.height)}var Oe=a.pubWin;if(null!==Oe&&Oe!=Oe.top){var Ck=[Oe.document.URL];Oe.name&&Ck.push(Oe.name);
var lx=am(Oe,!1);Ck.push(lx.width.toString());Ck.push(lx.height.toString());var mx=Ck.join(""),nx=mx.length;if(0==nx)var xp=0;else{for(var Rf=305419896,yp=0;yp<nx;yp++)Rf^=(Rf<<5)+(Rf>>2)+mx.charCodeAt(yp)&4294967295;xp=0<Rf?Rf:4294967296+Rf}}else xp=0;var ox=xp;0!==ox&&(D.ifk=ox);var Dk=dj(a.pubWin);if(Dk&&Dk.document){var Ek=Dk.document,Xh=Dk;Xh=void 0===Xh?p:Xh;var px=Ek.scrollingElement||("CSS1Compat"==Ek.compatMode?Ek.documentElement:Ek.body);var qx=new Lg(Xh.pageXOffset||px.scrollLeft,Xh.pageYOffset||
px.scrollTop)}else qx=new Lg(-12245933,-12245933);var rx=qx;D.scr_x=Math.round(rx.x);D.scr_y=Math.round(rx.y);var sx=Bm(),tx=Em(sx),Fk=a.f.google_eids;if(Array.isArray(Fk)){a.g|=64;for(var Gk=0;Gk<Fk.length;Gk++)"string"===typeof Fk[Gk]&&tx.push(Fk[Gk])}D.eid=tx.join();var ux=Dm(sx),vx=a.f.google_loeid;"string"===typeof vx&&(a.g|=4096,ob(ux,vx.split(",")));D.loeid=ux.join();a.l&&(D.oid=a.l);var GH=Jl(),wx=Ml(GH,20,{})[a.f.google_ad_client];wx&&(D.psts=wx.join());var zp=a.pubWin;if("number"!==typeof zp.goog_pvsid)try{Object.defineProperty(zp,
"goog_pvsid",{value:Math.floor(Math.random()*Math.pow(2,52))})}catch($b){}D.pvsid=Number(zp.goog_pvsid)||-1;try{var Ap=a.pubWin.localStorage}catch($b){Ap=null}a:{var Hk=-1;try{Ap&&(Hk=parseInt(Ap.getItem("goog_pem_mod"),10))}catch($b){var xx=null;break a}xx=0<=Hk&&1E3>Hk?Hk:null}D.pem=xx;var Kb=a.f,Bp=a.pubWin,Yh=a.D,HH=Gl();D.ref=Kb.google_referrer_url;D.loc=Kb.google_page_location;var Ik=nj(Bp);if(Ik&&Ha(Ik.data)&&"string"===typeof Ik.data.type){var Cp=Ik.data.type.toLowerCase();var yx="doubleclick"==
Cp||"adsense"==Cp?null:Cp}else yx=null;var zx=yx;zx&&(D.apn=zx.substr(0,10));var Zh=dm(HH);D.url||D.loc||!Zh.url||(D.url=Zh.url,Zh.Ec||(D.usrc=1));Zh.url!=(D.loc||D.url)&&(D.top=Zh.url);Kb.google_async_rrc&&(D.rr=Kb.google_async_rrc);D.rx=0;var Ax;if(Hm&&Km(Hm))var Bx=Hm;else{var Dp=Gl(),od=Dp.google_jobrunner;Bx=od&&(Mj(od,"object")||Mj(od,"function"))&&Km(od)&&Oj(od.nq)&&Oj(od.nqa)&&Oj(od.al)&&Oj(od.rl)?Hm=od:Dp.google_jobrunner=Hm=new Gm(Dp)}var Cx=Bx;(Ax=Oj(Cx.tc)?Cx.tc():null)&&(D.jtc=Ax);0<=
a.j&&(D.eae=a.j);var Dx=null;try{Dx=Yh&&Yh.localStorage}catch($b){}var Ex=um(Kb,Yh,Dx);Ex&&(D.fc=Ex);var Fx=Kb.google_ad_format;if(!(Fx&&0<Fx.indexOf("_0ads"))){var $h=(a.iframeWin||a.pubWin).document,Gx="";if($h.documentMode){var Pe=(new Pg($h)).createElement("IFRAME");Pe.frameBorder="0";Pe.style.height=0;Pe.style.width=0;Pe.style.position="absolute";if($h.body){$h.body.appendChild(Pe);try{var Jk=Pe.contentWindow.document;Jk.open();Jk.write("<!DOCTYPE html>");Jk.close();Gx+=Jk.documentMode}catch($b){}$h.body.removeChild(Pe)}}D.docm=
Gx}D.brdim=Um(Bp).join();var Hx=0;void 0===p.postMessage&&(Hx|=1);var Ix=Hx;0<Ix&&(D.osd=Ix);D.vis=gn(Bp.document);if(!jm(Kb)){a:{var ai=Number(Kb.google_ad_width),bi=Number(Kb.google_ad_height);if(!(0<ai&&0<bi)){b:{try{var Ep=String(Kb.google_ad_format);if(Ep&&Ep.match){var Fp=Ep.match(/(\d+)x(\d+)/i);if(Fp){var Jx=parseInt(Fp[1],10),Kx=parseInt(Fp[2],10);if(0<Jx&&0<Kx){var Lx={width:Jx,height:Kx};break b}}}}catch($b){}Lx=null}var Gp=Lx;if(!Gp){var Mx=null;break a}ai=0<ai?ai:Gp.width;bi=0<bi?bi:
Gp.height}Mx={width:ai,height:bi}}var Hp=Mx;if(Hp){var Nx=0;a:{try{var Ox=Kb.google_async_iframe_id,Px=ej().document;if(Ox)var Qx=Px.getElementById(Ox);else{var Rx=Px.getElementsByTagName("script"),Sx=Rx[Rx.length-1];Qx=Sx&&Sx.parentNode||null}var Tx=Qx;if(Tx){for(var ci=[],Kk=Tx,IH=0,JH=Date.now();100>=++IH&&50>Date.now()-JH&&(Kk=pn(Kk));)1===Kk.nodeType&&ci.push(Kk);b:{for(var Ip=0;Ip<ci.length;Ip++){c:{var pd=ci[Ip];try{if(pd.parentNode&&0<pd.offsetWidth&&0<pd.offsetHeight&&pd.style&&"none"!==
pd.style.display&&"hidden"!==pd.style.visibility&&(!pd.style.opacity||0!==Number(pd.style.opacity))){var Ux=pd.getBoundingClientRect();var Vx=0<Ux.right&&0<Ux.bottom;break c}}catch($b){}Vx=!1}if(!Vx){var Wx=!1;break b}}Wx=!0}if(Wx){b:{for(var LH=Date.now(),MH=/^html|body$/i,NH=/^fixed/i,Jp=0;Jp<ci.length&&50>Date.now()-LH;Jp++){var Lk=ci[Jp];if(!MH.test(Lk.tagName)&&NH.test(Lk.style.position||wj(Lk))){var Kp=Lk;break b}}Kp=null}break a}}}catch($b){}Kp=null}var Lp=Kp;Lp&&Lp.offsetWidth*Lp.offsetHeight<=
4*Hp.width*Hp.height&&(Nx=1);D.pfx=Nx}}var Xx=Bm();if("26835106"===(Xx.f.hasOwnProperty(41)?Xx.f[41]:"")&&Yh){try{var Yx=Yh.document.getElementsByTagName("head")[0];var Zx=Yx?cn(Yx):0}catch($b){Zx=0}var $x=Zx;0!==$x&&(D.cms=$x)}"r20100101"!==Kb.google_lrv&&(D.alvm=Kb.google_lrv||"none");D.fu=a.g;D.bc=fn();Tm();D.jar=Rm[4];var ay=a.f,OH=ay.google_ad_channel,by="/pagead/ads?";"ca-pub-6219811747049371"===ay.google_ad_client&&qn.test(OH)&&(by="/pagead/lopri?");var Mp=bm(uw,by);3===gn(a.pubWin.document)&&
(a.G=!0,a.B=Mp,Mp=bm(uw,"/pagead/blank.gif#?"));var QH=Qj(D,Mp+"");return b.google_ad_url=QH}
function pn(a){try{if(a.parentNode)return a.parentNode}catch(e){return null}if(9===a.nodeType)a:{try{var b=a?ch(a):window;if(b){var c=b.frameElement;if(c&&Xi(b.parent)){var d=c;break a}}}catch(e){}d=null}else d=null;return d}
function rn(a,b){a.F&&(b.us_privacy=a.F);a.A&&(b.gdpr_consent=a.A);a.i&&(b.addtl_consent=a.i)}
function on(a,b){var c=a.f;Nj(Xj,function(d,e){b[d]=c[e]});
rn(a,b);Nj(Wj,function(d,e){b[d]=c[e]});
Nj(Zj,function(d,e){b[d]=c[e]});
jm(c)&&(b.fa=im(c))}
var qn=/YtLoPri/;function sn(a){this.f=a;a.then(v(function(){},this))}
function tn(a,b,c){a.f.then(function(d){var e=d[b];if(!e)throw Error("Method not found: "+b);return e.apply(d,c)})}
function un(a,b,c){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=vn(a,b).then(function(f){return f.apply(null,d)});
return new sn(e)}
var wn={};function vn(a,b){var c=wn[b];if(c)return c;c=(c=r(b))?li(c):(new gi(function(d,e){var f=(new Pg(document)).createElement("SCRIPT");f.async=!0;ud(f,ec(Vb(a)));f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||d()};
f.onerror=e;(document.head||document.getElementsByTagName("head")[0]).appendChild(f)})).then(function(){var d=r(b);
if(!d)throw Error("Failed to load "+b+" from "+a);return d});
return wn[b]=c}
;function xn(a){this.f=a}
xn.prototype.i=function(a){tn(this.f,"startFeedback",arguments)};
xn.prototype.j=function(a){tn(this.f,"startHelp",arguments)};
xn.prototype.g=function(a){tn(this.f,"loadChatSupport",arguments)};
function yn(a,b){var c=b||{};c=un(zn,"help.service.Lazy.create",a,{apiKey:c.apiKey||c.apiKey,environment:c.oj||c.environment,helpCenterPath:c.sj||c.helpCenterPath,locale:c.locale||c.locale||"en".replace(/-/g,"_"),nonce:c.nonce||c.nonce,productData:c.productData||c.productData,receiverUri:c.wj||c.receiverUri,renderApiUri:c.yj||c.renderApiUri,theme:c.theme||c.theme,window:c.window||c.window});return new xn(c)}
var zn=Wb("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");function An(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Bn=window,Cn=document,Dn=Bn.location;function En(){}
var Fn=/\[native code\]/;function Gn(a,b,c){return a[b]=a[b]||c}
function Hn(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function In(){var a;if((a=Object.create)&&Fn.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Jn=Gn(Bn,"gapi",{});var Kn;Kn=Gn(Bn,"___jsl",In());Gn(Kn,"I",0);Gn(Kn,"hel",10);function Ln(){var a=Dn.href;if(Kn.dpo)var b=Kn.h;else{b=Kn.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Mn(a){var b=Gn(Kn,"PQ",[]);Kn.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Nn(a){return Gn(Gn(Kn,"H",In()),a,In())}
;function On(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(t){for(var u=g,w=0;64>w;w+=4)u[w/4]=t[w]<<24|t[w+1]<<16|t[w+2]<<8|t[w+3];for(w=16;80>w;w++)t=u[w-3]^u[w-8]^u[w-14]^u[w-16],u[w]=(t<<1|t>>>31)&4294967295;t=e[0];var E=e[1],aa=e[2],ba=e[3],uc=e[4];for(w=0;80>w;w++){if(40>w)if(20>w){var Pa=ba^E&(aa^ba);var ab=1518500249}else Pa=E^aa^ba,ab=1859775393;else 60>w?(Pa=E&aa|ba&(E|aa),ab=2400959708):(Pa=E^aa^ba,ab=3395469782);Pa=((t<<5|t>>>27)&4294967295)+Pa+uc+ab+u[w]&4294967295;uc=ba;ba=aa;aa=(E<<30|E>>>2)&4294967295;E=t;t=Pa}e[0]=e[0]+t&4294967295;
e[1]=e[1]+E&4294967295;e[2]=e[2]+aa&4294967295;e[3]=e[3]+ba&4294967295;e[4]=e[4]+uc&4294967295}
function c(t,u){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var w=[],E=0,aa=t.length;E<aa;++E)w.push(t.charCodeAt(E));t=w}u||(u=t.length);w=0;if(0==m)for(;w+64<u;)b(t.slice(w,w+64)),w+=64,n+=64;for(;w<u;)if(f[m++]=t[w++],n++,64==m)for(m=0,b(f);w+64<u;)b(t.slice(w,w+64)),w+=64,n+=64}
function d(){var t=[],u=8*n;56>m?c(k,56-m):c(k,64-(m-56));for(var w=63;56<=w;w--)f[w]=u&255,u>>>=8;b(f);for(w=u=0;5>w;w++)for(var E=24;0<=E;E-=8)t[u++]=e[w]>>E&255;return t}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,n;a();return{reset:a,update:c,digest:d,Ve:function(){for(var t=d(),u="",w=0;w<t.length;w++)u+="0123456789ABCDEF".charAt(Math.floor(t[w]/16))+"0123456789ABCDEF".charAt(t[w]%16);return u}}}
;function Pn(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],z(d,function(k){e.push(k)}),Qn(e.join(" "));
var f=[],g=[];z(c,function(k){g.push(k.key);f.push(k.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];z(d,function(k){e.push(k)});
a=Qn(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Qn(a){var b=On();b.update(a);return b.Ve().toLowerCase()}
;function Rn(a){var b=An(String(p.location.href)),c;(c=p.__SAPISID||p.__APISID||p.__OVERRIDE_SID)?c=!0:(c=new Qi(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,c||(c=new Qi(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&c&&b?[b,Pn(An(d),c,a||null)].join(" "):null}return null}
;var Sn=Gn(Kn,"perf",In());Gn(Sn,"g",In());var Tn=Gn(Sn,"i",In());Gn(Sn,"r",[]);In();In();function Un(a,b,c){b&&0<b.length&&(b=Vn(b),c&&0<c.length&&(b+="___"+Vn(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=Gn(Tn,"_p",In()),Gn(b,c,In())[a]=(new Date).getTime(),b=Sn.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Vn(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Wn=In(),Xn=[];function Yn(a){throw Error("Bad hint"+(a?": "+a:""));}
Xn.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Kn[b]=Gn(Kn,b,[]).concat(c):Gn(Kn,b,c)}if(b=a.u)a=Gn(Kn,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Zn=/^(\/[a-zA-Z0-9_\-]+)+$/,$n=[/\/amp\//,/\/amp$/,/^\/amp$/],ao=/^[a-zA-Z0-9\-_\.,!]+$/,bo=/^gapi\.loaded_[0-9]+$/,co=/^[a-zA-Z0-9,._-]+$/;function eo(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Wn[f],k=null;g?k=g(e,b,c,d):Yn("no hint processor for: "+f);k||Yn("failed to generate load url");b=k;c=b.match(fo);(d=b.match(go))&&1===d.length&&ho.test(b)&&c&&1===c.length||Yn("failed sanity: "+a);return k}
function io(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=jo(a);bo.test(c)||Yn("invalid_callback");b=ko(b);d=d&&d.length?ko(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Sc?"/am="+e(a.Sc):"",a.ke?"/rs="+e(a.ke):"",a.Oe?"/t="+e(a.Oe):"","/cb=",e(c)].join("")}
function jo(a){"/"!==a.charAt(0)&&Yn("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Yn("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");Zn.test(b)||Yn("invalid_prefix");c=0;for(d=$n.length;c<d;++c)$n[c].test(b)&&Yn("invalid_prefix");c=lo(a,
"k",!0);d=lo(a,"am");e=lo(a,"rs");a=lo(a,"t");return{pathPrefix:b,version:c,Sc:d,ke:e,Oe:a}}
function ko(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");co.test(e)&&b.push(e)}return b.join(",")}
function lo(a,b,c){a=a[b];!a&&c&&Yn("missing: "+b);if(a){if(ao.test(a))return a;Yn("invalid: "+b)}return null}
var ho=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,go=/\/cb=/g,fo=/\/\//g;function mo(){var a=Ln();if(!a)throw Error("Bad hint");return a}
Wn.m=function(a,b,c,d){(a=a[0])||Yn("missing_hint");return"https://apis.google.com"+io(a,b,c,d)};
var no=decodeURI("%73cript"),oo=/^[-+_0-9\/A-Za-z]+={0,2}$/;function po(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function qo(){var a=Kn.nonce;return void 0!==a?a&&a===String(a)&&a.match(oo)?a:Kn.nonce=null:Cn.querySelector?(a=Cn.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(oo)?Kn.nonce=a:Kn.nonce=null):null:null}
function ro(a){if("loading"!=Cn.readyState)so(a);else{var b=qo(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+no+' src="'+encodeURI(a)+'"'+c+"></"+no+">";Cn.write(to?to.createHTML(a):a)}}
function so(a){var b=Cn.createElement(no);b.setAttribute("src",to?to.createScriptURL(a):a);a=qo();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Cn.getElementsByTagName(no)[0])?a.parentNode.insertBefore(b,a):(Cn.head||Cn.body||Cn.documentElement).appendChild(b)}
function uo(a,b){var c=b&&b._c;if(c)for(var d=0;d<Xn.length;d++){var e=Xn[d][0],f=Xn[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function vo(a,b,c){wo(function(){var d=b===Ln()?Gn(Jn,"_",In()):In();d=Gn(Nn(b),"_",d);a(d)},c)}
function xo(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);uo(a,c);var d=a?a.split(":"):[],e=c.h||mo(),f=Gn(Kn,"ah",In());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var l=k.split(".");l=f[k]||f[l[1]&&"ns:"+l[0]||""]||e;var m=g.length&&g[g.length-1]||null,n=m;m&&m.hint==l||(n={hint:l,features:[]},g.push(n));n.features.push(k)}var t=g.length;if(1<t){var u=c.callback;u&&(c.callback=function(){0==--t&&u()})}for(;d=g.shift();)yo(d.features,c,d.hint)}else yo(d||[],c,e)}
function yo(a,b,c){function d(Pa,ab){if(t)return 0;Bn.clearTimeout(n);u.push.apply(u,E);var Le=((Jn||{}).config||{}).update;Le?Le(f):f&&Gn(Kn,"cu",[]).push(f);if(ab){Un("me0",Pa,w);try{vo(ab,c,m)}finally{Un("me1",Pa,w)}}return 1}
a=Hn(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var n=null,t=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=Gn(Nn(c),"r",[]).sort();var u=Gn(Nn(c),"L",[]).sort(),w=[].concat(l);0<g&&(n=Bn.setTimeout(function(){t=!0;k()},g));
var E=po(a,u);if(E.length){E=po(a,l);var aa=Gn(Kn,"CP",[]),ba=aa.length;aa[ba]=function(Pa){function ab(){var Me=aa[ba+1];Me&&Me()}
function Le(Me){aa[ba]=null;d(E,Pa)&&Mn(function(){e&&e();Me()})}
if(!Pa)return 0;Un("ml1",E,w);0<ba&&aa[ba-1]?aa[ba]=function(){Le(ab)}:Le(ab)};
if(E.length){var uc="loaded_"+Kn.I++;Jn[uc]=function(Pa){aa[ba](Pa);Jn[uc]=null};
a=eo(c,E,"gapi."+uc,l);l.push.apply(l,E);Un("ml0",E,w);b.sync||Bn.___gapisync?ro(a):so(a)}else aa[ba](En)}else d(E)&&e&&e()}
var to=Sa("goog#gapi");function wo(a,b){if(Kn.hee&&0<Kn.hel)try{return a()}catch(c){b&&b(c),Kn.hel--,xo("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Jn.load=function(a,b){return wo(function(){return xo(a,b)})};function zo(){this.g=-1}
;function Ao(){this.g=64;this.f=[];this.A=[];this.F=[];this.j=[];this.j[0]=128;for(var a=1;a<this.g;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
y(Ao,zo);Ao.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.i=0};
function Bo(a,b,c){c||(c=0);var d=a.F;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],k=a.f[3],l=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):
(f=c^g^k,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+l&4294967295}
Ao.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.A,f=this.i;d<b;){if(0==f)for(;d<=c;)Bo(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Bo(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Bo(this,e);f=0;break}}this.i=f;this.l+=b}};
Ao.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.A[c]=b&255,b/=256;Bo(this,this.A);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function Co(a){pf(this,a,Do,null)}
y(Co,nf);function Eo(a){pf(this,a,null,null)}
y(Eo,nf);var Do=[1];function Fo(a,b){var c=xf(a,Eo,1);0<c.length&&mf(b,1,c,Go)}
function Go(a,b){var c=tf(a,1);if(null!=c&&null!=c){ff(b,1,1);var d=b.f;he(c);me(d,ee);me(d,fe)}c=tf(a,2);null!=c&&null!=c&&null!=c&&(ff(b,2,0),d=b.f,ge(c),je(d))}
;function Ho(a){pf(this,a,Io,null)}
y(Ho,nf);function Jo(a){pf(this,a,null,Ko)}
y(Jo,nf);function Lo(a){pf(this,a,null,null)}
y(Lo,nf);function Mo(a){pf(this,a,null,null)}
y(Mo,nf);function No(a){pf(this,a,Oo,null)}
y(No,nf);function Po(a){pf(this,a,null,Qo)}
y(Po,nf);function Np(a){pf(this,a,null,Op)}
y(Np,nf);var Io=[3,6,4],Ko=[[1,2]];function Pp(a,b){var c=wf(a,Lo,1);null!=c&&lf(b,1,c,Qp);c=wf(a,Mo,2);null!=c&&lf(b,2,c,Rp)}
function Qp(a,b){var c=tf(a,1);null!=c&&kf(b,1,c);c=tf(a,2);null!=c&&kf(b,2,c);c=tf(a,3);null!=c&&jf(b,3,c)}
function Rp(a,b){var c=tf(a,1);null!=c&&kf(b,1,c);c=tf(a,2);null!=c&&kf(b,2,c);c=tf(a,3);null!=c&&null!=c&&null!=c&&(ff(b,3,0),le(b.f,c));c=tf(a,4);null!=c&&jf(b,4,c)}
var Oo=[1];function Sp(a,b){var c=xf(a,Po,1);0<c.length&&mf(b,1,c,Tp);c=wf(a,Np,2);null!=c&&lf(b,2,c,Up)}
var Qo=[[1,2,3]];function Tp(a,b){var c=tf(a,1);null!=c&&kf(b,1,c);c=tf(a,2);null!=c&&null!=c&&null!=c&&(ff(b,2,0),le(b.f,c));c=tf(a,3);null!=c&&jf(b,3,c)}
var Op=[[1,2,3]];function Up(a,b){var c=tf(a,1);if(null!=c&&null!=c&&null!=c){ff(b,1,0);var d=b.f;ge(c);je(d)}c=tf(a,2);null!=c&&null!=c&&(ff(b,2,1),d=b.f,he(c),me(d,ee),me(d,fe));c=wf(a,Co,3);null!=c&&lf(b,3,c,Fo)}
;Ob("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Vp(a,b,c){Uf.call(this);this.f=a;this.j=b||0;this.g=c;this.i=v(this.vd,this)}
y(Vp,Uf);h=Vp.prototype;h.Cb=0;h.K=function(){Vp.L.K.call(this);this.stop();delete this.f;delete this.g};
h.start=function(a){this.stop();this.Cb=Ci(this.i,void 0!==a?a:this.j)};
h.stop=function(){this.isActive()&&p.clearTimeout(this.Cb);this.Cb=0};
h.isActive=function(){return 0!=this.Cb};
h.vd=function(){this.Cb=0;this.f&&this.f.call(this.g)};function Wp(a,b,c){Uf.call(this);this.A=null!=c?a.bind(c):a;this.l=b;this.j=null;this.g=!1;this.i=0;this.f=null}
sa(Wp,Uf);h=Wp.prototype;h.Xf=function(a){this.j=arguments;this.f||this.i?this.g=!0:Xp(this)};
h.stop=function(){this.f&&(p.clearTimeout(this.f),this.f=null,this.g=!1,this.j=null)};
h.pause=function(){this.i++};
h.resume=function(){this.i--;this.i||!this.g||this.f||(this.g=!1,Xp(this))};
h.K=function(){Uf.prototype.K.call(this);this.stop()};
function Xp(a){a.f=Ci(function(){a.f=null;a.g&&!a.i&&(a.g=!1,Xp(a))},a.l);
var b=a.j;a.j=null;a.A.apply(null,b)}
;var Yp="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function Zp(){}
Zp.prototype.next=function(){throw Yp;};
Zp.prototype.Ga=function(){return this};
function $p(a){if(a instanceof Zp)return a;if("function"==typeof a.Ga)return a.Ga(!1);if(Fa(a)){var b=0,c=new Zp;c.next=function(){for(;;){if(b>=a.length)throw Yp;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function aq(a,b,c){if(Fa(a))try{z(a,b,c)}catch(d){if(d!==Yp)throw d;}else{a=$p(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Yp)throw d;}}}
function bq(a){if(Fa(a))return nb(a);a=$p(a);var b=[];aq(a,function(c){b.push(c)});
return b}
;function cq(a,b){this.g={};this.f=[];this.Ta=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof cq)for(c=a.Ca(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
h=cq.prototype;h.ra=function(){dq(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.g[this.f[b]]);return a};
h.Ca=function(){dq(this);return this.f.concat()};
h.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||eq;dq(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function eq(a,b){return a===b}
h.isEmpty=function(){return 0==this.i};
h.clear=function(){this.g={};this.Ta=this.i=this.f.length=0};
h.remove=function(a){return fq(this.g,a)?(delete this.g[a],this.i--,this.Ta++,this.f.length>2*this.i&&dq(this),!0):!1};
function dq(a){if(a.i!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];fq(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.i!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],fq(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
h.get=function(a,b){return fq(this.g,a)?this.g[a]:b};
h.set=function(a,b){fq(this.g,a)||(this.i++,this.f.push(a),this.Ta++);this.g[a]=b};
h.forEach=function(a,b){for(var c=this.Ca(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new cq(this)};
h.Ga=function(a){dq(this);var b=0,c=this.Ta,d=this,e=new Zp;e.next=function(){if(c!=d.Ta)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Yp;var f=d.f[b++];return a?f:d.g[f]};
return e};
function fq(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function gq(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function hq(a){return a.classList?a.classList:gq(a).match(/\S+/g)||[]}
function iq(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function J(a,b){return a.classList?a.classList.contains(b):hb(hq(a),b)}
function K(a,b){if(a.classList)a.classList.add(b);else if(!J(a,b)){var c=gq(a);iq(a,c+(0<c.length?" "+b:b))}}
function jq(a,b){if(a.classList)z(b,function(f){K(a,f)});
else{var c={};z(hq(a),function(f){c[f]=!0});
z(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;iq(a,d)}}
function kq(a,b){a.classList?a.classList.remove(b):J(a,b)&&iq(a,Za(hq(a),function(c){return c!=b}).join(" "))}
function lq(a,b){a.classList?z(b,function(c){kq(a,c)}):iq(a,Za(hq(a),function(c){return!hb(b,c)}).join(" "))}
function mq(a,b,c){c?K(a,b):kq(a,b)}
function nq(a,b,c){J(a,b)&&(kq(a,b),K(a,c))}
function oq(a,b){var c=!J(a,b);mq(a,b,c);return c}
;function pq(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function qq(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;function rq(a){Uf.call(this);this.g=a;this.f={}}
y(rq,Uf);var sq=[];function tq(a,b,c,d){Array.isArray(c)||(c&&(sq[0]=c.toString()),c=sq);for(var e=0;e<c.length;e++){var f=pg(b,c[e],d||a.handleEvent,!1,a.g||a);if(!f)break;a.f[f.key]=f}}
function uq(a){yb(a.f,function(b,c){this.f.hasOwnProperty(c)&&yg(b)},a);
a.f={}}
rq.prototype.K=function(){rq.L.K.call(this);uq(this)};
rq.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function vq(a){return Bd(gc(a.replace(wq,function(b,c){return xq.test(c)?"":" "}).replace(/[\t\n ]+/g," ")))}
var xq=/^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,wq=/<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;function yq(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function zq(a){var b=[];Aq(new Bq,a,b);return b.join("")}
function Bq(){}
function Aq(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Aq(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Cq(d,c),c.push(":"),Aq(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Cq(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Dq={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Eq=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Cq(a,b){b.push('"',a.replace(Eq,function(c){var d=Dq[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Dq[c]=d);return d}),'"')}
;function Fq(a){if(p.JSON)try{return p.JSON.parse(a)}catch(b){}return yq(a)}
;function Gq(){}
Gq.prototype.stringify=function(a){return p.JSON.stringify(a,void 0)};
Gq.prototype.parse=function(a){return p.JSON.parse(a,void 0)};function Hq(a,b,c,d,e,f,g,k){this.f=a;this.l=b;this.i=c;this.A=d;this.j=e;this.F=f;this.g=g;this.G=k}
Hq.prototype.clone=function(){return new Hq(this.f,this.l,this.i,this.A,this.j,this.F,this.g,this.G)};
Hq.prototype.equals=function(a){return this.f==a.f&&this.l==a.l&&this.i==a.i&&this.A==a.A&&this.j==a.j&&this.F==a.F&&this.g==a.g&&this.G==a.G};
function Iq(a,b){if(0==b)return a.f;if(1==b)return a.g;var c=Kg(a.f,a.i,b),d=Kg(a.i,a.j,b),e=Kg(a.j,a.g,b);c=Kg(c,d,b);d=Kg(d,e,b);return Kg(c,d,b)}
function Jq(a,b){var c=(b-a.f)/(a.g-a.f);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,g=0;8>g;g++){f=Iq(a,c);var k=(Iq(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(k))break;else f<b?d=c:e=c,c-=(f-b)/k}for(g=0;1E-6<Math.abs(f-b)&&8>g;g++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=Iq(a,c);return c}
function Kq(a,b){var c=Jq(a,b);if(0==c)c=a.l;else if(1==c)c=a.G;else{var d=Kg(a.l,a.A,c),e=Kg(a.A,a.F,c),f=Kg(a.F,a.G,c);d=Kg(d,e,c);e=Kg(e,f,c);c=Kg(d,e,c)}return c}
;function Lq(){}
Lq.prototype.f=null;Lq.prototype.getOptions=function(){var a;(a=this.f)||(a={},Mq(this)&&(a[0]=!0,a[1]=!0),a=this.f=a);return a};var Nq;function Oq(){}
y(Oq,Lq);function Pq(a){return(a=Mq(a))?new ActiveXObject(a):new XMLHttpRequest}
function Mq(a){if(!a.g&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.g=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.g}
Nq=new Oq;function Qq(a,b,c,d){this.f=a;this.i=b;this.G=c;this.F=d||1;this.l=45E3;this.j=new rq(this);this.g=new Bi;this.g.setInterval(250)}
h=Qq.prototype;h.Za=null;h.xa=!1;h.rb=null;h.Pc=null;h.ob=null;h.pb=null;h.La=null;h.Ra=null;h.bb=null;h.aa=null;h.Ib=0;h.ya=null;h.lc=null;h.Pa=null;h.Eb=-1;h.oe=!0;h.Ua=!1;h.Bc=0;h.ac=null;var Rq={},Sq={};h=Qq.prototype;h.setTimeout=function(a){this.l=a};
function Tq(a,b,c){a.pb=1;a.La=Uq(b.clone());a.bb=c;a.A=!0;Vq(a,null)}
function Wq(a,b,c,d,e){a.pb=1;a.La=Uq(b.clone());a.bb=null;a.A=c;e&&(a.oe=!1);Vq(a,d)}
function Vq(a,b){a.ob=x();Xq(a);a.Ra=a.La.clone();Yq(a.Ra,"t",a.F);a.Ib=0;a.aa=a.f.sc(a.f.Hb()?b:null);0<a.Bc&&(a.ac=new Wp(v(a.xe,a,a.aa),a.Bc));tq(a.j,a.aa,"readystatechange",a.Yg);var c=a.Za?Jb(a.Za):{};a.bb?(a.lc="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.aa.send(a.Ra,a.lc,a.bb,c)):(a.lc="GET",a.oe&&!xe&&(c.Connection="close"),a.aa.send(a.Ra,a.lc,null,c));a.f.wa(1)}
h.Yg=function(a){a=a.target;var b=this.ac;b&&3==Zq(a)?b.Xf():this.xe(a)};
h.xe=function(a){try{if(a==this.aa)a:{var b=Zq(this.aa),c=this.aa.A,d=this.aa.getStatus();if(B&&!Re(10)||xe&&!Qe("420+")){if(4>b)break a}else if(3>b||3==b&&!te&&!$q(this.aa))break a;this.Ua||4!=b||7==c||(8==c||0>=d?this.f.wa(3):this.f.wa(2));ar(this);var e=this.aa.getStatus();this.Eb=e;var f=$q(this.aa);(this.xa=200==e)?(4==b&&br(this),this.A?(cr(this,b,f),te&&this.xa&&3==b&&(tq(this.j,this.g,"tick",this.Wg),this.g.start())):dr(this,f),this.xa&&!this.Ua&&(4==b?this.f.Wb(this):(this.xa=!1,Xq(this)))):
(400==e&&0<f.indexOf("Unknown SID")?(this.Pa=3,er(13)):(this.Pa=0,er(14)),br(this),fr(this))}}catch(g){this.aa&&$q(this.aa)}finally{}};
function cr(a,b,c){for(var d=!0;!a.Ua&&a.Ib<c.length;){var e=gr(a,c);if(e==Sq){4==b&&(a.Pa=4,er(15),d=!1);break}else if(e==Rq){a.Pa=4;er(16);d=!1;break}else dr(a,e)}4==b&&0==c.length&&(a.Pa=1,er(17),d=!1);a.xa=a.xa&&d;d||(br(a),fr(a))}
h.Wg=function(){var a=Zq(this.aa),b=$q(this.aa);this.Ib<b.length&&(ar(this),cr(this,a,b),this.xa&&4!=a&&Xq(this))};
function gr(a,b){var c=a.Ib,d=b.indexOf("\n",c);if(-1==d)return Sq;c=Number(b.substring(c,d));if(isNaN(c))return Rq;d+=1;if(d+c>b.length)return Sq;var e=b.substr(d,c);a.Ib=d+c;return e}
function hr(a,b){a.ob=x();Xq(a);var c=b?window.location.hostname:"";a.Ra=a.La.clone();ir(a.Ra,"DOMAIN",c);ir(a.Ra,"t",a.F);try{a.ya=new ActiveXObject("htmlfile")}catch(m){br(a);a.Pa=7;er(22);fr(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var g=c.charAt(f);if("<"==g)e+="\\x3c";else if(">"==g)e+="\\x3e";else{var k=g;if(k in Gd)g=Gd[k];else if(k in Fd)g=Gd[k]=Fd[k];else{var l=k.charCodeAt(0);if(31<l&&127>l)g=k;else{if(256>l){if(g="\\x",16>l||256<l)g+="0"}else g="\\u",4096>l&&
(g+="0");g+=l.toString(16).toUpperCase()}g=Gd[k]=g}e+=g}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=ld(Wb("b/12014412"),d+"</body></html>");a.ya.open();a.ya.write(Zc(c));a.ya.close();a.ya.parentWindow.m=v(a.Pg,a);a.ya.parentWindow.d=v(a.ee,a,!0);a.ya.parentWindow.rpcClose=v(a.ee,a,!1);c=a.ya.createElement("DIV");a.ya.parentWindow.document.body.appendChild(c);d=Ac(a.Ra.toString())||Cc;d=Ad(wc(d));d=ld(Wb("b/12014412"),'<iframe src="'+d+'"></iframe>');qd(c,d);a.f.wa(1)}
h.Pg=function(a){jr(v(this.Og,this,a),0)};
h.Og=function(a){this.Ua||(ar(this),dr(this,a),Xq(this))};
h.ee=function(a){jr(v(this.Ng,this,a),0)};
h.Ng=function(a){this.Ua||(br(this),this.xa=a,this.f.Wb(this),this.f.wa(4))};
h.cancel=function(){this.Ua=!0;br(this)};
function Xq(a){a.Pc=x()+a.l;kr(a,a.l)}
function kr(a,b){if(null!=a.rb)throw Error("WatchDog timer not null");a.rb=jr(v(a.Sg,a),b)}
function ar(a){a.rb&&(p.clearTimeout(a.rb),a.rb=null)}
h.Sg=function(){this.rb=null;var a=x();0<=a-this.Pc?(2!=this.pb&&this.f.wa(3),br(this),this.Pa=2,er(18),fr(this)):kr(this,this.Pc-a)};
function fr(a){a.f.Dd()||a.Ua||a.f.Wb(a)}
function br(a){ar(a);Wf(a.ac);a.ac=null;a.g.stop();uq(a.j);if(a.aa){var b=a.aa;a.aa=null;b.abort();b.dispose()}a.ya&&(a.ya=null)}
h.getLastError=function(){return this.Pa};
function dr(a,b){try{a.f.Zd(a,b),a.f.wa(4)}catch(c){}}
;function lr(a){if(a.ra&&"function"==typeof a.ra)return a.ra();if("string"===typeof a)return a.split("");if(Fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Db(a)}
function mr(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Fa(a)||"string"===typeof a)z(a,b,c);else{if(a.Ca&&"function"==typeof a.Ca)var d=a.Ca();else if(a.ra&&"function"==typeof a.ra)d=void 0;else if(Fa(a)||"string"===typeof a){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=Eb(a);e=lr(a);f=e.length;for(var g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function nr(a,b){this.i=this.G=this.j="";this.F=null;this.l=this.f="";this.A=!1;var c;a instanceof nr?(this.A=void 0!==b?b:a.A,or(this,a.j),this.G=a.G,pr(this,a.i),qr(this,a.F),this.f=a.f,rr(this,a.g.clone()),this.l=a.l):a&&(c=String(a).match(Ld))?(this.A=!!b,or(this,c[1]||"",!0),this.G=sr(c[2]||""),pr(this,c[3]||"",!0),qr(this,c[4]),this.f=sr(c[5]||"",!0),rr(this,c[6]||"",!0),this.l=sr(c[7]||"")):(this.A=!!b,this.g=new tr(null,this.A))}
nr.prototype.toString=function(){var a=[],b=this.j;b&&a.push(ur(b,vr,!0),":");var c=this.i;if(c||"file"==b)a.push("//"),(b=this.G)&&a.push(ur(b,vr,!0),"@"),a.push(yd(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.F,null!=c&&a.push(":",String(c));if(c=this.f)this.i&&"/"!=c.charAt(0)&&a.push("/"),a.push(ur(c,"/"==c.charAt(0)?wr:xr,!0));(c=this.g.toString())&&a.push("?",c);(c=this.l)&&a.push("#",ur(c,yr));return a.join("")};
nr.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?or(b,a.j):c=!!a.G;c?b.G=a.G:c=!!a.i;c?pr(b,a.i):c=null!=a.F;var d=a.f;if(c)qr(b,a.F);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.i&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.g.toString();c?rr(b,a.g.clone()):c=!!a.l;c&&(b.l=a.l);return b};
nr.prototype.clone=function(){return new nr(this)};
function or(a,b,c){a.j=c?sr(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function pr(a,b,c){a.i=c?sr(b,!0):b}
function qr(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.F=b}else a.F=null}
function rr(a,b,c){b instanceof tr?(a.g=b,zr(a.g,a.A)):(c||(b=ur(b,Ar)),a.g=new tr(b,a.A))}
function ir(a,b,c){a.g.set(b,c)}
function Yq(a,b,c){Array.isArray(c)||(c=[String(c)]);Br(a.g,b,c)}
function Uq(a){ir(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36));return a}
function Cr(a){return a instanceof nr?a.clone():new nr(a,void 0)}
function Dr(a,b,c,d){var e=new nr(null,void 0);a&&or(e,a);b&&pr(e,b);c&&qr(e,c);d&&(e.f=d);return e}
function sr(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function ur(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Er),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Er(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var vr=/[#\/\?@]/g,xr=/[#\?:]/g,wr=/[#\?]/g,Ar=/[#\?@]/g,yr=/#/g;function tr(a,b){this.g=this.f=null;this.i=a||null;this.j=!!b}
function Fr(a){a.f||(a.f=new cq,a.g=0,a.i&&Qd(a.i,function(b,c){a.add(zd(b),c)}))}
h=tr.prototype;h.add=function(a,b){Fr(this);this.i=null;a=Gr(this,a);var c=this.f.get(a);c||this.f.set(a,c=[]);c.push(b);this.g=this.g+1;return this};
h.remove=function(a){Fr(this);a=Gr(this,a);return fq(this.f.g,a)?(this.i=null,this.g=this.g-this.f.get(a).length,this.f.remove(a)):!1};
h.clear=function(){this.f=this.i=null;this.g=0};
h.isEmpty=function(){Fr(this);return 0==this.g};
function Hr(a,b){Fr(a);b=Gr(a,b);return fq(a.f.g,b)}
h.forEach=function(a,b){Fr(this);this.f.forEach(function(c,d){z(c,function(e){a.call(b,e,d,this)},this)},this)};
h.Ca=function(){Fr(this);for(var a=this.f.ra(),b=this.f.Ca(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.ra=function(a){Fr(this);var b=[];if("string"===typeof a)Hr(this,a)&&(b=mb(b,this.f.get(Gr(this,a))));else{a=this.f.ra();for(var c=0;c<a.length;c++)b=mb(b,a[c])}return b};
h.set=function(a,b){Fr(this);this.i=null;a=Gr(this,a);Hr(this,a)&&(this.g=this.g-this.f.get(a).length);this.f.set(a,[b]);this.g=this.g+1;return this};
h.get=function(a,b){if(!a)return b;var c=this.ra(a);return 0<c.length?String(c[0]):b};
function Br(a,b,c){a.remove(b);0<c.length&&(a.i=null,a.f.set(Gr(a,b),nb(c)),a.g=a.g+c.length)}
h.toString=function(){if(this.i)return this.i;if(!this.f)return"";for(var a=[],b=this.f.Ca(),c=0;c<b.length;c++){var d=b[c],e=yd(d);d=this.ra(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+yd(d[f]));a.push(g)}}return this.i=a.join("&")};
h.clone=function(){var a=new tr;a.i=this.i;this.f&&(a.f=this.f.clone(),a.g=this.g);return a};
function Gr(a,b){var c=String(b);a.j&&(c=c.toLowerCase());return c}
function zr(a,b){b&&!a.j&&(Fr(a),a.i=null,a.f.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),Br(this,e,c))},a));
a.j=b}
h.extend=function(a){for(var b=0;b<arguments.length;b++)mr(arguments[b],function(c,d){this.add(d,c)},this)};function Ir(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Jr(a,b,function(g){g?c(!0):p.setTimeout(function(){Ir(a,b,c,d,f)},f)})}}
function Jr(a,b,c){var d=new Image;d.onload=function(){try{Kr(d),c(!0)}catch(e){}};
d.onerror=function(){try{Kr(d),c(!1)}catch(e){}};
d.onabort=function(){try{Kr(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Kr(d),c(!1)}catch(e){}};
p.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
td(d,a)}
function Kr(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function Lr(a){this.f=a;this.g=new Gq}
h=Lr.prototype;h.zc=null;h.ja=null;h.cc=!1;h.se=null;h.Nb=null;h.Fc=null;h.Ac=null;h.sa=null;h.Ja=-1;h.Db=null;h.yb=null;h.connect=function(a){this.Ac=a;a=Mr(this.f,null,this.Ac);er(3);this.se=x();var b=this.f.G;null!=b?(this.Db=b[0],(this.yb=b[1])?(this.sa=1,Nr(this)):(this.sa=2,Or(this))):(Yq(a,"MODE","init"),this.ja=new Qq(this,void 0,void 0,void 0),this.ja.Za=this.zc,Wq(this.ja,a,!1,null,!0),this.sa=0)};
function Nr(a){var b=Mr(a.f,a.yb,"/mail/images/cleardot.gif");Uq(b);Ir(b.toString(),5E3,v(a.Te,a),3,2E3);a.wa(1)}
h.Te=function(a){if(a)this.sa=2,Or(this);else{er(4);var b=this.f;b.Da=b.Ma.Ja;Pr(b,9)}a&&this.wa(2)};
function Or(a){var b=a.f.B;if(null!=b)er(5),b?(er(11),Qr(a.f,a,!1)):(er(12),Qr(a.f,a,!0));else if(a.ja=new Qq(a,void 0,void 0,void 0),a.ja.Za=a.zc,b=a.f,b=Mr(b,b.Hb()?a.Db:null,a.Ac),er(5),!B||Re(10))Yq(b,"TYPE","xmlhttp"),Wq(a.ja,b,!1,a.Db,!1);else{Yq(b,"TYPE","html");var c=a.ja;a=!!a.Db;c.pb=3;c.La=Uq(b.clone());hr(c,a)}}
h.sc=function(a){return this.f.sc(a)};
h.abort=function(){this.ja&&(this.ja.cancel(),this.ja=null);this.Ja=-1};
h.Dd=function(){return!1};
h.Zd=function(a,b){this.Ja=a.Eb;if(0==this.sa)if(b){try{var c=this.g.parse(b)}catch(d){c=this.f;c.Da=this.Ja;Pr(c,2);return}this.Db=c[0];this.yb=c[1]}else c=this.f,c.Da=this.Ja,Pr(c,2);else if(2==this.sa)if(this.cc)er(7),this.Fc=x();else if("11111"==b){if(er(6),this.cc=!0,this.Nb=x(),c=this.Nb-this.se,!B||Re(10)||500>c)this.Ja=200,this.ja.cancel(),er(12),Qr(this.f,this,!0)}else er(8),this.Nb=this.Fc=x(),this.cc=!1};
h.Wb=function(){this.Ja=this.ja.Eb;if(this.ja.xa)0==this.sa?this.yb?(this.sa=1,Nr(this)):(this.sa=2,Or(this)):2==this.sa&&((!B||Re(10)?!this.cc:200>this.Fc-this.Nb)?(er(11),Qr(this.f,this,!1)):(er(12),Qr(this.f,this,!0)));else{0==this.sa?er(9):2==this.sa&&er(10);var a=this.f;this.ja.getLastError();a.Da=this.Ja;Pr(a,2)}};
h.Hb=function(){return this.f.Hb()};
h.isActive=function(){return this.f.isActive()};
h.wa=function(a){this.f.wa(a)};function Rr(a){Cg.call(this);this.headers=new cq;this.V=a||null;this.i=!1;this.T=this.f=null;this.za=this.J="";this.A=0;this.j="";this.l=this.ca=this.D=this.Z=!1;this.B=0;this.M=null;this.Aa="";this.O=this.ka=!1}
y(Rr,Cg);var Sr=/^https?$/i,Tr=["POST","PUT"];h=Rr.prototype;
h.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.J+"; newUri="+a);b=b?b.toUpperCase():"GET";this.J=a;this.j="";this.A=0;this.za=b;this.Z=!1;this.i=!0;this.f=this.V?Pq(this.V):Pq(Nq);this.T=this.V?this.V.getOptions():Nq.getOptions();this.f.onreadystatechange=v(this.Yd,this);try{Oi(Ur(this,"Opening Xhr")),this.ca=!0,this.f.open(b,String(a),!0),this.ca=!1}catch(f){Oi(Ur(this,"Error opening Xhr: "+f.message));Vr(this,f);return}a=c||"";var e=
this.headers.clone();d&&mr(d,function(f,g){e.set(g,f)});
d=eb(e.Ca(),Wr);c=p.FormData&&a instanceof p.FormData;!hb(Tr,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,g){this.f.setRequestHeader(g,f)},this);
this.Aa&&(this.f.responseType=this.Aa);"withCredentials"in this.f&&this.f.withCredentials!==this.ka&&(this.f.withCredentials=this.ka);try{Xr(this),0<this.B&&(this.O=Yr(this.f),Oi(Ur(this,"Will abort after "+this.B+"ms if incomplete, xhr2 "+this.O)),this.O?(this.f.timeout=this.B,this.f.ontimeout=v(this.wd,this)):this.M=Ci(this.wd,this.B,this)),Oi(Ur(this,"Sending request")),this.D=!0,this.f.send(a),this.D=!1}catch(f){Oi(Ur(this,"Send error: "+f.message)),Vr(this,f)}};
function Yr(a){return B&&Qe(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
function Wr(a){return"content-type"==a.toLowerCase()}
h.wd=function(){"undefined"!=typeof xa&&this.f&&(this.j="Timed out after "+this.B+"ms, aborting",this.A=8,Ur(this,this.j),this.dispatchEvent("timeout"),this.abort(8))};
function Vr(a,b){a.i=!1;a.f&&(a.l=!0,a.f.abort(),a.l=!1);a.j=b;a.A=5;Zr(a);$r(a)}
function Zr(a){a.Z||(a.Z=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
h.abort=function(a){this.f&&this.i&&(Ur(this,"Aborting"),this.i=!1,this.l=!0,this.f.abort(),this.l=!1,this.A=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),$r(this))};
h.K=function(){this.f&&(this.i&&(this.i=!1,this.l=!0,this.f.abort(),this.l=!1),$r(this,!0));Rr.L.K.call(this)};
h.Yd=function(){this.R()||(this.ca||this.D||this.l?as(this):this.Eg())};
h.Eg=function(){as(this)};
function as(a){if(a.i&&"undefined"!=typeof xa)if(a.T[1]&&4==Zq(a)&&2==a.getStatus())Ur(a,"Local request error detected and ignored");else if(a.D&&4==Zq(a))Ci(a.Yd,0,a);else if(a.dispatchEvent("readystatechange"),4==Zq(a)){Ur(a,"Request complete");a.i=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=Nd(1,String(a.J));if(!f&&p.self&&p.self.location){var g=p.self.location.protocol;
f=g.substr(0,g.length-1)}e=!Sr.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.A=6;try{var k=2<Zq(a)?a.f.statusText:""}catch(l){k=""}a.j=k+" ["+a.getStatus()+"]";Zr(a)}}finally{$r(a)}}}
function $r(a,b){if(a.f){Xr(a);var c=a.f,d=a.T[0]?Ca:null;a.f=null;a.T=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}}
function Xr(a){a.f&&a.O&&(a.f.ontimeout=null);a.M&&(p.clearTimeout(a.M),a.M=null)}
h.isActive=function(){return!!this.f};
function Zq(a){return a.f?a.f.readyState:0}
h.getStatus=function(){try{return 2<Zq(this)?this.f.status:-1}catch(a){return-1}};
function $q(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
h.getLastError=function(){return"string"===typeof this.j?this.j:String(this.j)};
function Ur(a,b){return b+" ["+a.za+" "+a.J+" "+a.getStatus()+"]"}
;function bs(a,b,c){this.f=1;this.g=[];this.j=[];this.l=new Gq;this.G=a||null;this.B=null!=b?b:null;this.A=c||!1}
function cs(a,b){this.f=a;this.map=b;this.context=null}
h=bs.prototype;h.zb=null;h.ha=null;h.X=null;h.yc=null;h.Pb=null;h.Wc=null;h.Qb=null;h.Fb=0;h.cg=0;h.ba=null;h.Oa=null;h.Ha=null;h.Wa=null;h.Ma=null;h.kc=null;h.kb=-1;h.Gd=-1;h.Da=-1;h.ib=0;h.eb=0;h.Va=8;var ds=new Cg;function es(a){Xf.call(this,"statevent",a)}
y(es,Xf);function fs(a,b){Xf.call(this,"timingevent",a);this.size=b}
y(fs,Xf);function gs(a){Xf.call(this,"serverreachability",a)}
y(gs,Xf);h=bs.prototype;h.connect=function(a,b,c,d,e){er(0);this.yc=b;this.zb=c||{};d&&void 0!==e&&(this.zb.OSID=d,this.zb.OAID=e);this.A?(jr(v(this.ld,this,a),100),hs(this)):this.ld(a)};
function is(a){js(a);if(3==a.f){var b=a.Fb++,c=a.Pb.clone();ir(c,"SID",a.i);ir(c,"RID",b);ir(c,"TYPE","terminate");ks(a,c);b=new Qq(a,a.i,b,void 0);b.pb=2;b.La=Uq(c.clone());td(new Image,b.La.toString());b.ob=x();Xq(b)}ls(a)}
h.ld=function(a){this.Ma=new Lr(this);this.Ma.zc=null;this.Ma.g=this.l;this.Ma.connect(a)};
function hs(a){a.af(1,0);a.Pb=Mr(a,null,a.yc);ms(a)}
function js(a){a.Ma&&(a.Ma.abort(),a.Ma=null);a.X&&(a.X.cancel(),a.X=null);a.Ha&&(p.clearTimeout(a.Ha),a.Ha=null);ns(a);a.ha&&(a.ha.cancel(),a.ha=null);a.Oa&&(p.clearTimeout(a.Oa),a.Oa=null)}
function os(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.g.push(new cs(a.cg++,b));2!=a.f&&3!=a.f||ms(a)}
h.Dd=function(){return 0==this.f};
function ms(a){a.ha||a.Oa||(a.Oa=jr(v(a.de,a),0),a.ib=0)}
h.de=function(a){this.Oa=null;ps(this,a)};
function ps(a,b){if(1==a.f){if(!b){a.Fb=Math.floor(1E5*Math.random());var c=a.Fb++,d=new Qq(a,"",c,void 0);d.Za=null;var e=qs(a),f=a.Pb.clone();ir(f,"RID",c);ir(f,"CVER","1");ks(a,f);Tq(d,f,e);a.ha=d;a.f=2}}else 3==a.f&&(b?rs(a,b):0==a.g.length||a.ha||rs(a))}
function rs(a,b){if(b)if(6<a.Va){a.g=a.j.concat(a.g);a.j.length=0;var c=a.Fb-1;var d=qs(a)}else c=b.G,d=b.bb;else c=a.Fb++,d=qs(a);var e=a.Pb.clone();ir(e,"SID",a.i);ir(e,"RID",c);ir(e,"AID",a.kb);ks(a,e);c=new Qq(a,a.i,c,a.ib+1);c.Za=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ha=c;Tq(c,e,d)}
function ks(a,b){if(a.ba){var c=a.ba.qd();c&&yb(c,function(d,e){ir(b,e,d)})}}
function qs(a){var b=Math.min(a.g.length,1E3),c=["count="+b];if(6<a.Va&&0<b){var d=a.g[0].f;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.g[e].f,g=a.g[e].map;f=6>=a.Va?e:f-d;try{yb(g,function(k,l){c.push("req"+f+"_"+l+"="+encodeURIComponent(k))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.j=a.j.concat(a.g.splice(0,b));
return c.join("&")}
function ss(a){a.X||a.Ha||(a.F=1,a.Ha=jr(v(a.ce,a),0),a.eb=0)}
function ts(a){if(a.X||a.Ha||3<=a.eb)return!1;a.F++;a.Ha=jr(v(a.ce,a),us(a,a.eb));a.eb++;return!0}
h.ce=function(){this.Ha=null;this.X=new Qq(this,this.i,"rpc",this.F);this.X.Za=null;this.X.Bc=0;var a=this.Wc.clone();ir(a,"RID","rpc");ir(a,"SID",this.i);ir(a,"CI",this.kc?"0":"1");ir(a,"AID",this.kb);ks(this,a);if(!B||Re(10))ir(a,"TYPE","xmlhttp"),Wq(this.X,a,!0,this.Qb,!1);else{ir(a,"TYPE","html");var b=this.X,c=!!this.Qb;b.pb=3;b.La=Uq(a.clone());hr(b,c)}};
function Qr(a,b,c){a.kc=c;a.Da=b.Ja;a.A||hs(a)}
h.Zd=function(a,b){if(0!=this.f&&(this.X==a||this.ha==a))if(this.Da=a.Eb,this.ha==a&&3==this.f)if(7<this.Va){try{var c=this.l.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Ha){if(this.X)if(this.X.ob+3E3<this.ha.ob)ns(this),this.X.cancel(),this.X=null;else break a;ts(this);er(19)}}else this.Gd=c[1],0<this.Gd-this.kb&&37500>c[2]&&this.kc&&0==this.eb&&!this.Wa&&(this.Wa=jr(v(this.fg,this),6E3));else Pr(this,11)}else b!=Pi.ii.f&&Pr(this,11);else if(this.X==a&&ns(this),
!fc(b)){c=this.l.parse(b);Array.isArray(c);for(var d=0;d<c.length;d++){var e=c[d];this.kb=e[0];e=e[1];2==this.f?"c"==e[0]?(this.i=e[1],this.Qb=e[2],e=e[3],null!=e?this.Va=e:this.Va=6,this.f=3,this.ba&&this.ba.dd(),this.Wc=Mr(this,this.Hb()?this.Qb:null,this.yc),ss(this)):"stop"==e[0]&&Pr(this,7):3==this.f&&("stop"==e[0]?Pr(this,7):"noop"!=e[0]&&this.ba&&this.ba.cd(e),this.eb=0)}}};
h.fg=function(){null!=this.Wa&&(this.Wa=null,this.X.cancel(),this.X=null,ts(this),er(20))};
function ns(a){null!=a.Wa&&(p.clearTimeout(a.Wa),a.Wa=null)}
h.Wb=function(a){if(this.X==a){ns(this);this.X=null;var b=2}else if(this.ha==a)this.ha=null,b=1;else return;this.Da=a.Eb;if(0!=this.f)if(a.xa)1==b?(b=x()-a.ob,ds.dispatchEvent(new fs(ds,a.bb?a.bb.length:0,b,this.ib)),ms(this),this.j.length=0):ss(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Da)){if(d=1==b)this.ha||this.Oa||1==this.f||2<=this.ib?d=!1:(this.Oa=jr(v(this.de,this,a),us(this,this.ib)),this.ib++,d=!0);d=!(d||2==b&&ts(this))}if(d)switch(c){case 1:Pr(this,5);break;case 4:Pr(this,
10);break;case 3:Pr(this,6);break;case 7:Pr(this,12);break;default:Pr(this,2)}}};
function us(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
h.af=function(a){if(!hb(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function Pr(a,b){if(2==b||9==b){var c=null;a.ba&&(c=null);var d=v(a.ph,a);c||(c=new nr("//www.google.com/images/cleardot.gif"),Uq(c));Jr(c.toString(),1E4,d)}else er(2);vs(a,b)}
h.ph=function(a){a?er(2):(er(1),vs(this,8))};
function vs(a,b){a.f=0;a.ba&&a.ba.bd(b);ls(a);js(a)}
function ls(a){a.f=0;a.Da=-1;if(a.ba)if(0==a.j.length&&0==a.g.length)a.ba.pc();else{nb(a.j);var b=nb(a.g);a.j.length=0;a.g.length=0;a.ba.pc(b)}}
function Mr(a,b,c){var d=Cr(c);if(""!=d.i)b&&pr(d,b+"."+d.i),qr(d,d.F);else{var e=window.location;d=Dr(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.zb&&yb(a.zb,function(f,g){ir(d,g,f)});
ir(d,"VER",a.Va);ks(a,d);return d}
h.sc=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Rr;a.ka=!1;return a};
h.isActive=function(){return!!this.ba&&this.ba.isActive(this)};
function jr(a,b){if(!Ga(a))throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){a()},b)}
h.wa=function(a){ds.dispatchEvent(new gs(ds,a))};
function er(a){ds.dispatchEvent(new es(ds,a))}
h.Hb=function(){return!(!B||Re(10))};
function ws(){}
h=ws.prototype;h.dd=function(){};
h.cd=function(){};
h.bd=function(){};
h.pc=function(){};
h.qd=function(){return{}};
h.isActive=function(){return!0};var xs=function(){if(ze){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Pc))?a[1]:"0"}return ye?(a=/10[_.][0-9_.]+/,(a=a.exec(Pc))?a[0].replace(/_/g,"."):"10"):Ae?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Pc))?a[1]:""):Be||Ce||De?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Pc))?a[1].replace(/_/g,"."):""):""}();function ys(a){return(a=a.exec(Pc))?a[1]:""}
var zs=function(){if(Ve)return ys(/Firefox\/([0-9.]+)/);if(B||ue||te)return Ke;if(Ze)return oe()?ys(/CriOS\/([0-9.]+)/):ys(/Chrome\/([0-9.]+)/);if($e&&!oe())return ys(/Version\/([0-9.]+)/);if(We||Xe){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Pc);if(a)return a[1]+"."+a[2]}else if(Ye)return(a=ys(/Android\s+([0-9.]+)/))?a:ys(/Version\/([0-9.]+)/);return""}();
function As(a){return 0<=pc(zs,a)}
;function Bs(a,b,c,d,e,f,g){var k;if(k=c.offsetParent){var l="HTML"==k.tagName||"BODY"==k.tagName;if(!l||"static"!=wj(k)){var m=Aj(k);if(!l){l=Hj(k);var n;if(n=l){n=$e&&As(10);var t;if(t=Ee)t=0<=pc(xs,10);n=we||n||t}l=n?-k.scrollLeft:!l||ve&&Qe("8")||"visible"==vj(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft;m=Mg(m,new Lg(l,k.scrollTop))}}}k=m||new Lg;m=Gj(a);if(l=zj(a)){var u=new lj(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(m.left,u.left);n=Math.min(m.left+m.width,
u.left+u.width);l<=n&&(t=Math.max(m.top,u.top),u=Math.min(m.top+m.height,u.top+u.height),t<=u&&(m.left=l,m.top=t,m.width=n-l,m.height=u-t))}l=Og(a);t=Og(c);if(l.f!=t.f){n=l.f.body;t=ch(t.f);u=new Lg(0,0);var w=(w=Qg(n))?ch(w):window;if(qe(w,"parent")){var E=n;do{var aa=w==t?Aj(E):Cj(E);u.x+=aa.x;u.y+=aa.y}while(w&&w!=t&&w!=w.parent&&(E=w.frameElement)&&(w=w.parent))}n=Mg(u,Aj(n));!B||Re(9)||$g(l.f)||(n=Mg(n,ah(l.f)));m.left+=n.x;m.top+=n.y}a=Cs(a,b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new Lg(b,
m.top+(a&1?m.height:0));b=Mg(b,k);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var ba;g&&(ba=zj(c))&&(ba.top-=k.y,ba.right-=k.x,ba.bottom-=k.y,ba.left-=k.x);return Ds(b,c,d,f,ba,g,void 0)}
function Ds(a,b,c,d,e,f,g){a=a.clone();var k=Cs(b,c);c=Ej(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var l=0;if(d||0!=k)k&4?a.x-=g.width+(d?d.right:0):k&2?a.x-=g.width/2:d&&(a.x+=d.left),k&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;k=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var m=d.x;d.x<e.left&&(d.x=e.left,l|=4);d.x+k.width>e.right&&(k.width=Math.min(e.right-d.x,
m+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.x+k.width>e.right&&f&1&&(d.x=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+k.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(m=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.y,m+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.y+k.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.y<e.top?64:0)|(d.y+k.height>e.bottom?128:0));e=l}else e=
256;l=e}f=new lj(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;a=new Lg(f.left,f.top);a instanceof Lg?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=Dj(g,!1);b.style.top=Dj(a,!1);g=new Ng(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=Qg(b),a=$g(Og(g).f),!B||Qe("10")||a&&Qe("8")?(b=b.style,we?b.MozBoxSizing="border-box":xe?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,
0)+"px"):(g=b.style,a?(B?(a=Jj(b,"paddingLeft"),f=Jj(b,"paddingRight"),d=Jj(b,"paddingTop"),k=Jj(b,"paddingBottom"),a=new ij(d,f,k,a)):(a=uj(b,"paddingLeft"),f=uj(b,"paddingRight"),d=uj(b,"paddingTop"),k=uj(b,"paddingBottom"),a=new ij(parseFloat(d),parseFloat(f),parseFloat(k),parseFloat(a))),B&&!Re(9)?(f=Lj(b,"borderLeft"),d=Lj(b,"borderRight"),k=Lj(b,"borderTop"),b=Lj(b,"borderBottom"),b=new ij(k,d,b,f)):(f=uj(b,"borderLeftWidth"),d=uj(b,"borderRightWidth"),k=uj(b,"borderTopWidth"),b=uj(b,"borderBottomWidth"),
b=new ij(parseFloat(k),parseFloat(d),parseFloat(b),parseFloat(f))),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function Cs(a,b){return(b&8&&Hj(a)?b^4:b)&-9}
;function Es(a){Uf.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.g={};this.A=!!a}
y(Es,Uf);h=Es.prototype;h.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Fs(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.ta(d),b.apply(void 0,arguments))},a)}
function Gs(a,b,c,d){if(b=a.g[b]){var e=a.f;(b=eb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ta(b)}}
h.ta=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ca):(c&&jb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
h.la=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Hs(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.ta(c)}}return 0!=e}return!1};
function Hs(a,b,c){Lh(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.g[a];b&&(z(b,this.ta,this),delete this.g[a])}else this.f.length=0,this.g={}};
function Is(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=Is(a,d);return c}
h.K=function(){Es.L.K.call(this);this.clear();this.i.length=0};function Js(a){this.f=a}
Js.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,zq(b))};
Js.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Js.prototype.remove=function(a){this.f.remove(a)};function Ks(a){this.f=a}
y(Ks,Js);function Ls(a){this.data=a}
function Ms(a){return void 0===a||a instanceof Ls?a:new Ls(a)}
Ks.prototype.set=function(a,b){Ks.L.set.call(this,a,Ms(b))};
Ks.prototype.g=function(a){a=Ks.L.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ks.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ns(a){this.f=a}
y(Ns,Ks);function Os(a){var b=a.creation;a=a.expiration;return!!a&&a<x()||!!b&&b>x()}
Ns.prototype.set=function(a,b,c){if(b=Ms(b)){if(c){if(c<x()){Ns.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}Ns.L.set.call(this,a,b)};
Ns.prototype.g=function(a,b){var c=Ns.L.g.call(this,a);if(c)if(!b&&Os(c))Ns.prototype.remove.call(this,a);else return c};function Ps(a){this.f=a}
y(Ps,Ns);function Qs(a,b){var c=[];aq(b,function(d){try{var e=Ps.prototype.g.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):Os(e)&&c.push(d)},a);
return c}
function Rs(a,b){var c=Qs(a,b);z(c,function(d){Ps.prototype.remove.call(this,d)},a)}
;function Ss(){}
;function Ts(){}
y(Ts,Ss);Ts.prototype.clear=function(){var a=bq(this.Ga(!0)),b=this;z(a,function(c){b.remove(c)})};function Us(a){this.f=a}
y(Us,Ts);h=Us.prototype;h.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeItem(a)};
h.Ga=function(a){var b=0,c=this.f,d=new Zp;d.next=function(){if(b>=c.length)throw Yp;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){this.f.clear()};
h.key=function(a){return this.f.key(a)};function Vs(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
y(Vs,Us);function Ws(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
y(Ws,Us);function Xs(a,b){this.g=a;this.f=null;if(B&&!Re(9)){Ys||(Ys=new cq);this.f=Ys.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Ys.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
y(Xs,Ts);var Zs={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ys=null;function $s(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Zs[b]})}
h=Xs.prototype;h.isAvailable=function(){return!!this.f};
h.set=function(a,b){this.f.setAttribute($s(a),b);at(this)};
h.get=function(a){a=this.f.getAttribute($s(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeAttribute($s(a));at(this)};
h.Ga=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Zp;d.next=function(){if(b>=c.length)throw Yp;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);at(this)};
function at(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function bt(a,b){this.g=a;this.f=b+"::"}
y(bt,Ts);bt.prototype.set=function(a,b){this.g.set(this.f+a,b)};
bt.prototype.get=function(a){return this.g.get(this.f+a)};
bt.prototype.remove=function(a){this.g.remove(this.f+a)};
bt.prototype.Ga=function(a){var b=this.g.Ga(!0),c=this,d=new Zp;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function ct(a){var b=new Vs;return b.isAvailable()?a?new bt(b,a):b:null}
;function dt(){this.f=[];this.g=[]}
dt.prototype.isEmpty=function(){return 0==this.f.length&&0==this.g.length};
dt.prototype.clear=function(){this.f=[];this.g=[]};
dt.prototype.remove=function(a){var b=this.f;var c=Ya(b,a);0<=c?(kb(b,c),b=!0):b=!1;return b||jb(this.g,a)};
dt.prototype.ra=function(){for(var a=[],b=this.f.length-1;0<=b;--b)a.push(this.f[b]);var c=this.g.length;for(b=0;b<c;++b)a.push(this.g[b]);return a};function et(){}
Da(et);et.prototype.f=0;function ft(a){Cg.call(this);this.J=a||Og();this.ka=null;this.jb=!1;this.j=null;this.B=void 0;this.Z=null;this.za=!1}
y(ft,Cg);h=ft.prototype;h.Hf=et.getInstance();h.getId=function(){return this.ka||(this.ka=":"+(this.Hf.f++).toString(36))};
h.uc=function(){return this.j};
function gt(a,b){return a.j?F(b,a.j||a.J.f):null}
function ht(a,b){if(a.jb)throw Error("Component already rendered");if(b){a.za=!0;var c=Qg(b);a.J&&a.J.f==c||(a.J=Og(b));a.j=b;a.hb()}else throw Error("Invalid element to decorate");}
h.hb=function(){this.jb=!0;it(this,function(a){!a.jb&&a.uc()&&a.hb()})};
h.Na=function(){it(this,function(a){a.jb&&a.Na()});
this.B&&uq(this.B);this.jb=!1};
h.K=function(){this.jb&&this.Na();this.B&&(this.B.dispose(),delete this.B);it(this,function(a){a.dispose()});
!this.za&&this.j&&lh(this.j);this.j=this.Z=null;ft.L.K.call(this)};
function it(a,b){a.Z&&z(a.Z,b,void 0)}
;function jt(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||p,e=d.document,f=a.nonce||ya(d);f&&!a.nonce&&(a.nonce=f);if("help"==a.flow){var g=r("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var k=JSON.stringify(b);(g=1200>=k.length)&&(a.psdJson=k)}g||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);else{d=
c+"/load.js?";for(var l in a)b=a[l],null==b||Ha(b)||(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=Og(e).createElement("SCRIPT");f&&a.setAttribute("nonce",f);ud(a,Wi(d));e.body.appendChild(a)}}
q("userfeedback.api.startFeedback",jt,void 0);q("userfeedback.api.isBrowserSupportedForGenie",function(){return kt()},void 0);
function kt(){return B?As("8"):Ve?As("15"):$e?As("5"):Ze||ue}
q("userfeedback.api.isBrowserSupportedForHelp",kt,void 0);function lt(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var mt=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",mt,void 0);function nt(a){lt(mt,arguments)}
function L(a,b){return a in mt?mt[a]:b}
function ot(a){var b=mt.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var pt=[];function qt(a){pt.forEach(function(b){return b(a)})}
function rt(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){st(b),qt(b)}}:a}
function st(a){var b=r("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=L("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),nt("ERRORS",b))}
function tt(a){var b=r("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=L("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),nt("ERRORS",b))}
;function ut(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=zd(e[0]||""),g=zd(e[1]||"");f in b?Array.isArray(b[f])?ob(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(l){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};st(k)}}}return b}
function vt(a){var b=[];yb(a,function(c,d){var e=yd(d),f;Array.isArray(c)?f=c:f=[c];z(f,function(g){""==g?b.push(e):b.push(e+"="+yd(g))})});
return b.join("&")}
function wt(a){"?"==a.charAt(0)&&(a=a.substr(1));return ut(a)}
function xt(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),wt(1<a.length?a[1]:a[0])):{}}
function zt(a,b){return At(a,b||{},!0)}
function At(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=wt(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Wd(a,e)+d}
function Bt(a){if(!b)var b=window.location.href;var c=Nd(1,a),d=Od(a);c&&d?(a=a.match(Ld),b=b.match(Ld),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Od(b)==d&&(Number(Nd(4,b))||null)==(Number(Nd(4,a))||null):!0;return a}
function Ct(){var a=Od(Dt);return null!==a?a.split(".").reverse():null}
;function Et(a){var b=Ft;a=void 0===a?r("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Gt(b),Ht(b));b.ca_type="image";a&&(b.bid=a);return b}
function Gt(a){var b={};b.dt=Lm;b.flash="0";a:{try{var c=a.f.top.location.href}catch(d){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);Sj(b);return b}
function Ht(a){var b=Um(a.f),c=am(a.f.top),d={};return d.bc=fn(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=gn(a.g),d.wgl=!!Ni.WebGLRenderingContext,d}
var Ft=new function(){var a=window.document;this.f=window;this.g=a};
q("yt.ads_.signals_.getAdSignalsString",function(a){return vt(Et(a))},void 0);x();function M(a){a=It(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Jt(a,b){var c=It(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function It(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function Kt(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Lt=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Mt(){if(!Lt)return null;var a=Lt();return"open"in a?a:null}
;function N(a,b){Ga(a)&&(a=rt(a));return window.setTimeout(a,b)}
function Nt(a,b){Ga(a)&&(a=rt(a));return window.setInterval(a,b)}
function O(a){window.clearTimeout(a)}
function Ot(a){window.clearInterval(a)}
;var Pt={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Qt="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Rt=!1;
function St(a,b){b=void 0===b?{}:b;var c=Bt(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in Pt){var f=L(Pt[e]);!f||!c&&!Tt(a,e)||d&&void 0!==b[e]||(b[e]=f)}if(c||Tt(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Tt(a,"X-YouTube-Time-Zone"))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||Tt(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=vt(Et(void 0));return b}
function Ut(a){var b=window.location.search,c=Od(a),d=Md(Nd(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=wt(b),f={};z(Qt,function(g){e[g]&&(f[g]=e[g])});
return At(a,f||{},!1)}
function Tt(a,b){var c=L("CORS_HEADER_WHITELIST")||{},d=Od(a);return d?(c=c[d])?hb(c,b):!1:!0}
function Vt(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Wt(a,b);var d=Xt(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&O(f);var k=g.ok,l=function(m){m=m||{};var n=b.context||p;k?b.onSuccess&&b.onSuccess.call(n,m,g):b.onError&&b.onError.call(n,m,g);b.ga&&b.ga.call(n,m,g)};
"JSON"==(b.format||"JSON")&&(k||400<=g.status&&500>g.status)?g.json().then(l,function(){l(null)}):l(null)}});
b.Ud&&0<b.timeout&&(f=N(function(){e||(e=!0,O(f),b.Ud.call(b.context||p))},b.timeout))}else Yt(a,b)}
function Yt(a,b){var c=b.format||"JSON";a=Wt(a,b);var d=Xt(a,b),e=!1,f=Zt(a,function(l){if(!e){e=!0;k&&O(k);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var m=!0;break a;default:m=!1}var n=null,t=400<=l.status&&500>l.status,u=500<=l.status&&600>l.status;if(m||t||u)n=$t(a,c,l,b.Ia);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};t=b.context||p;
m?b.onSuccess&&b.onSuccess.call(t,l,n):b.onError&&b.onError.call(t,l,n);b.ga&&b.ga.call(t,l,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.ab&&0<b.timeout){var g=b.ab;var k=N(function(){e||(e=!0,f.abort(),O(k),g.call(b.context||p,f))},b.timeout)}return f}
function Wt(a,b){b.tj&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME",void 0),d=b.Fa;d&&(d[c]&&delete d[c],a=zt(a,d));return a}
function Xt(a,b){var c=L("XSRF_FIELD_NAME",void 0),d=L("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.P,g=L("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.pj||Od(a)&&!b.withCredentials&&Od(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.P&&b.P[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=wt(e),Nb(e,f),e=b.ge&&"JSON"==b.ge?JSON.stringify(e):Ud(e));f=e||f&&!Gb(f);!Rt&&f&&"POST"!=b.method&&(Rt=!0,st(Error("AJAX request with postData should use POST")));
return e}
function $t(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,tt(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?au(a):null)e={},z(a.getElementsByTagName("*"),function(g){e[g.tagName]=bu(g)})}d&&cu(e);
return e}
function cu(a){if(Ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=ld(Wb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):cu(a[b])}}
function au(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function bu(a){var b="";z(a.childNodes,function(c){b+=c.nodeValue});
return b}
function du(a,b){if(!a)return null;var c=a.getElementsByTagName(b);return c&&0<c.length?bu(c[0]):null}
var eu=au;function Zt(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&rt(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Mt();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;M("debug_forward_web_query_parameters")&&(a=Ut(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=St(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var fu={},gu=0;function hu(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Pc,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=wc(Ac(a)||Cc),"about:invalid#zClosurez"===a?a="":(a=Zc($c(a)).toString(),a=yd(zq(a))),fc(a)||(a=dh("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),Qg(a).body.appendChild(a))):e?Zt(a,b,"POST",e,d):L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Zt(a,b,"GET","",d):iu(a,b)||ju(a,b))}
function iu(a,b){if(!ot("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(ot("use_sonic_js_library_for_v4_support")){a:{try{var c=new Wa({url:a});if(c.i&&c.g||c.j){var d=Md(Nd(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==$d(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=Md(Nd(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==$d(a,"ae")||"1"!==$d(a,"act"))return!1;return ku(a)?(b&&b(),!0):!1}
function ku(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function ju(a,b){var c=new Image,d=""+gu++;fu[d]=c;c.onload=c.onerror=function(){b&&fu[d]&&b();delete fu[d]};
c.src=a}
;var lu=0;function mu(a){var b=a.__yt_uid_key;b||(b=nu(),a.__yt_uid_key=b);return b}
function ou(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?z(a.childNodes,function(c){b.appendChild(ou(c))}):b.innerHTML=a.innerHTML;
return b}
function pu(a,b){a=C(a);b=C(b);return!!Eh(a,function(c){return c===b},!0,void 0)}
function qu(a,b){var c=Tg(a,null,b);return c.length?c[0]:null}
function ru(){var a=document,b;cb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function su(){mq(document.body,"hide-players",!1);var a=Vg("preserve-players");z(a,function(b){kq(b,"preserve-players")})}
var nu=r("ytDomDomGetNextId")||function(){return++lu};
q("ytDomDomGetNextId",nu,void 0);var tu={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function uu(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in tu||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function vu(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
uu.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
uu.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
uu.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var wu=p.ytEventsEventsListeners||{};q("ytEventsEventsListeners",wu,void 0);var xu=p.ytEventsEventsCounter||{count:0};q("ytEventsEventsCounter",xu,void 0);
function yu(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Fb(wu,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ha(e[4])&&Ha(d)&&Ib(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function P(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=yu(a,b,c,d);if(e)return e;e=++xu.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(k){k=new uu(k);if(!Eh(k.relatedTarget,function(l){return l==a},!0))return k.currentTarget=a,k.type=b,c.call(a,k)}:function(k){k=new uu(k);
k.currentTarget=a;return c.call(a,k)};
g=rt(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),zu()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);wu[e]=[a,b,c,g,d];return e}
function Au(a,b,c,d){var e=a||document;return P(e,b,function(f){var g=Eh(f.target,function(k){return k===e||d(k)},!0);
g&&g!==e&&!g.disabled&&(f.currentTarget=g,c.call(g,f))})}
function Q(a){a&&("string"==typeof a&&(a=[a]),z(a,function(b){if(b in wu){var c=wu[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?zu()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete wu[b]}}))}
function Bu(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Cu(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()}
var zu=xb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Du(a,b,c,d){return Au(a,b,c,function(e){return J(e,d)})}
function Eu(a,b){if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}else c=document.createEventObject(),a.fireEvent("on"+b,c)}
function Fu(a,b,c){var d=void 0===d?{}:d;var e=P(a,b,function(){Q(e);c.apply(a,arguments)},d)}
function Gu(a){for(var b in wu)wu[b][0]==a&&Q(b)}
;var Hu=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/,Iu=/^https?:\/\/(www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/slav)/,Ju=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/;var Ku=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Lu(a){this.O=a;this.f=null;this.j=0;this.A=null;this.l=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.i=0;this.D=P(window,"mousemove",v(this.J,this));this.M=Nt(v(this.B,this),25)}
y(Lu,Uf);Lu.prototype.J=function(a){void 0===a.f&&vu(a);var b=a.f;void 0===a.g&&vu(a);this.f=new Lg(b,a.g)};
Lu.prototype.B=function(){if(this.f){var a=Ku();if(0!=this.j){var b=this.A,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.g[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.O();this.l=d}this.j=a;this.A=this.f;this.i=(this.i+1)%4}};
Lu.prototype.K=function(){Ot(this.M);Q(this.D)};function Mu(){}
function Nu(a,b){return Ou(a,1,b)}
;function Pu(){}
sa(Pu,Mu);function Ou(a,b,c){isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):N(a,c||0)}
function Qu(a){if(!isNaN(a)){var b=r("yt.scheduler.instance.cancelJob");b?b(a):O(a)}}
Pu.prototype.start=function(){var a=r("yt.scheduler.instance.start");a&&a()};
Pu.prototype.pause=function(){var a=r("yt.scheduler.instance.pause");a&&a()};
Da(Pu);Pu.getInstance();var Ru={};
function Su(a){var b=void 0===a?{}:a;a=void 0===b.Jf?!0:b.Jf;b=void 0===b.Xg?!1:b.Xg;if(null==r("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?x()-Math.max(c,0):-1;q("_lact",c,window);q("_fact",c,window);-1==c&&Tu();P(document,"keydown",Tu);P(document,"keyup",Tu);P(document,"mousedown",Tu);P(document,"mouseup",Tu);a&&(b?P(window,"touchmove",function(){Uu("touchmove",200)},{passive:!0}):(P(window,"resize",function(){Uu("resize",200)}),P(window,"scroll",function(){Uu("scroll",200)})));
new Lu(function(){Uu("mouse",100)});
P(document,"touchstart",Tu,{passive:!0});P(document,"touchend",Tu,{passive:!0})}}
function Uu(a,b){Ru[a]||(Ru[a]=!0,Nu(function(){Tu();Ru[a]=!1},b))}
function Tu(){null==r("_lact",window)&&Su();var a=x();q("_lact",a,window);-1==r("_fact",window)&&q("_fact",a,window);(a=r("ytglobal.ytUtilActivityCallback_"))&&a()}
function de(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;var Vu=p.ytPubsubPubsubInstance||new Es;Es.prototype.subscribe=Es.prototype.subscribe;Es.prototype.unsubscribeByKey=Es.prototype.ta;Es.prototype.publish=Es.prototype.la;Es.prototype.clear=Es.prototype.clear;q("ytPubsubPubsubInstance",Vu,void 0);var Wu=p.ytPubsubPubsubSubscribedKeys||{};q("ytPubsubPubsubSubscribedKeys",Wu,void 0);var Xu=p.ytPubsubPubsubTopicToKeys||{};q("ytPubsubPubsubTopicToKeys",Xu,void 0);var Yu=p.ytPubsubPubsubIsSynchronous||{};q("ytPubsubPubsubIsSynchronous",Yu,void 0);
function R(a,b,c){var d=Zu();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){Wu[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{Yu[a]?g():N(g,0)}catch(k){st(k)}},c);
Wu[e]=!0;Xu[a]||(Xu[a]=[]);Xu[a].push(e);return e}return 0}
function $u(a,b,c){var d=R(a,function(e){b.apply(c,arguments);av(d)},c)}
function av(a){var b=Zu();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),z(a,function(c){b.unsubscribeByKey(c);delete Wu[c]}))}
function S(a,b){var c=Zu();return c?c.publish.apply(c,arguments):!1}
function bv(a,b){Yu[a]=!0;var c=Zu();c=c?c.publish.apply(c,arguments):!1;Yu[a]=!1;return c}
function cv(a){var b=Zu();if(b)if(b.clear(a),a)dv(a);else for(var c in Xu)dv(c)}
function Zu(){return p.ytPubsubPubsubInstance}
function dv(a){Xu[a]&&(a=Xu[a],z(a,function(b){Wu[b]&&delete Wu[b]}),a.length=0)}
;var ev=window,fv=ev.ytcsi&&ev.ytcsi.now?ev.ytcsi.now:ev.performance&&ev.performance.timing&&ev.performance.now&&ev.performance.timing.navigationStart?function(){return ev.performance.timing.navigationStart+ev.performance.now()}:function(){return(new Date).getTime()};var gv=Jt("initial_gel_batch_timeout",1E3),hv=Math.pow(2,16)-1,iv=null,jv=0,kv=void 0,lv=0,mv=0,nv=0,ov=!0,pv=p.ytLoggingTransportLogPayloadsQueue_||{};q("ytLoggingTransportLogPayloadsQueue_",pv,void 0);var qv=p.ytLoggingTransportGELQueue_||new Map;q("ytLoggingTransportGELQueue_",qv,void 0);var rv=p.ytLoggingTransportTokensToCttTargetIds_||{};q("ytLoggingTransportTokensToCttTargetIds_",rv,void 0);
function sv(){O(lv);O(mv);mv=0;kv&&kv.isReady()?(tv(qv),"log_event"in pv&&tv(Object.entries(pv.log_event)),qv.clear(),delete pv.log_event):uv()}
function uv(){M("web_gel_timeout_cap")&&!mv&&(mv=N(sv,6E4));O(lv);var a=L("LOGGING_BATCH_TIMEOUT",Jt("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&ov&&(a=gv);lv=N(sv,a)}
function tv(a){var b=kv,c=Math.round(fv());a=ja(a);for(var d=a.next();!d.done;d=a.next()){var e=ja(d.value);d=e.next().value;var f=e.next().value;e=Lb({context:vv(b.f||wv())});e.events=f;(f=rv[d])&&xv(e,d,f);delete rv[d];yv(e,c);zv(b,"log_event",e,{retry:!0,onSuccess:function(){jv=Math.round(fv()-c)}});
ov=!1}}
function yv(a,b){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=L("EVENT_ID",void 0);if(c){var d=L("BATCH_CLIENT_COUNTER",void 0)||0;!d&&M("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*hv/2));d++;d>hv&&(d=1);nt("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;iv&&jv&&M("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:iv,roundtripMs:String(jv)});iv=c;jv=0}}
function xv(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Av=p.ytLoggingGelSequenceIdObj_||{};q("ytLoggingGelSequenceIdObj_",Av,void 0);
function Bv(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||fv());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:de())};M("log_sequence_info_on_gel_web")&&d.ec&&(a=e.context,b=d.ec,Av[b]=b in Av?Av[b]+1:0,a.sequence={index:Av[b],groupKey:b},d.Ye&&delete Av[d.ec]);d=d.md;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),rv[d.token]=a,a=d.token);d=qv.get(a)||[];qv.set(a,d);d.push(e);c&&(kv=new c);c=Jt("web_logging_max_batch")||100;
e=fv();d.length>=c?sv():10<=e-nv&&(uv(),nv=e)}
;function Cv(){for(var a={},b=ja(Object.entries(wt(L("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=ja(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Dv(){return"INNERTUBE_API_KEY"in mt&&"INNERTUBE_API_VERSION"in mt}
function wv(){return{innertubeApiKey:L("INNERTUBE_API_KEY",void 0),innertubeApiVersion:L("INNERTUBE_API_VERSION",void 0),Lf:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Mf:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Of:L("INNERTUBE_CONTEXT_HL",void 0),Nf:L("INNERTUBE_CONTEXT_GL",void 0),Pf:L("INNERTUBE_HOST_OVERRIDE",void 0)||"",Qf:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function vv(a){a={client:{hl:a.Of,gl:a.Nf,clientName:a.Mf,clientVersion:a.innertubeContextClientVersion,configInfo:a.Lf}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=L("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=Kt();0<b.length&&(a.request={internalExperimentFlags:b});L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,Cv());return a}
function Ev(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.nj||L("AUTHORIZATION"))||(a?b="Bearer "+r("gapi.auth.getToken")().kj:b=Rn([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
function Fv(a){a=Object.assign({},a);delete a.Authorization;var b=Rn();if(b){var c=new Ao;c.update(L("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=cf(c.digest(),3)}return a}
;function Gv(a,b,c,d,e,f){Si.set(""+a,b,{Gc:c,path:d,domain:void 0===e?"youtube.com":e,secure:void 0===f?!1:f})}
function Hv(a,b){return Si.get(""+a,b)}
function Iv(a,b,c){return Si.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
;function Jv(){var a;(a=ct("yt.innertube"))||(a=new Xs("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Ns(a):null;this.g=document.domain||window.location.hostname}
Jv.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,x()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(zq(b))}catch(f){return}else e=escape(b);Gv(a,e,c,"/",this.g)};
Jv.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Hv(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Jv.prototype.remove=function(a){this.f&&this.f.remove(a);Iv(a,"/",this.g)};var Kv=new Jv;function Lv(a,b,c,d){if(d)return null;d=Kv.get("nextId",!0)||1;var e=Kv.get("requests",!0)||{};e[d]={method:a,request:b,authState:Fv(c),requestTime:Math.round(fv())};Kv.set("nextId",d+1,86400,!0);Kv.set("requests",e,86400,!0);return d}
function Mv(a){var b=Kv.get("requests",!0)||{};delete b[a];Kv.set("requests",b,86400,!0)}
function Nv(a){var b=Kv.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(fv())-d.requestTime)){var e=d.authState,f=Fv(Ev(!1));Ib(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(fv())),zv(a,d.method,e,{}));delete b[c]}}Kv.set("requests",b,86400,!0)}}
;function Ov(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(ka(c))}
sa(Ov,Error);function Pv(a){var b=this;this.f=null;a?this.f=a:Dv()&&(this.f=wv());Ou(function(){Nv(b)},0,5E3)}
Pv.prototype.isReady=function(){!this.f&&Dv()&&(this.f=wv());return!!this.f};
function zv(a,b,c,d){!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&tt(new Ov("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw b=new Ov("innertube xhrclient not ready",b,c,d),st(b),b.f=0,b;var e={headers:{"Content-Type":"application/json"},method:"POST",P:c,ge:"JSON",ab:function(){d.ab()},
Ud:d.ab,onSuccess:function(u,w){if(d.onSuccess)d.onSuccess(w)},
Td:function(u){if(d.onSuccess)d.onSuccess(u)},
onError:function(u,w){if(d.onError)d.onError(w)},
vj:function(u){if(d.onError)d.onError(u)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Pf;g&&(f=g);g=a.f.Qf||!1;var k=Ev(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=zt(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),m;if(d.retry&&M("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Lv(b,c,k,g))){var n=e.onSuccess,t=e.Td;e.onSuccess=function(u,w){Mv(m);n(u,w)};
c.Td=function(u,w){Mv(m);t(u,w)}}try{M("use_fetch_for_op_xhr")?Vt(l,e):(e.method="POST",e.P||(e.P={}),Yt(l,e))}catch(u){if("InvalidAccessError"==u.name)m&&(Mv(m),m=0),tt(Error("An extension is blocking network request."));
else throw u;}m&&Ou(function(){Nv(a)},0,5E3)}
;function Qv(a,b,c){c=void 0===c?{}:c;var d=Pv;L("ytLoggingEventsDefaultDisabled",!1)&&Pv==Pv&&(d=null);Bv(a,b,d,c)}
function Rv(){sv()}
;var Sv=[{Hd:function(a){return"Cannot read property '"+a.key+"'"},
Ic:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Hd:function(a){return"Cannot call '"+
a.key+"'"},
Ic:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var Tv=new Set,Uv=0,Vv=void 0;function Wv(a){Xv(a)}
function Yv(a){Xv(a,"WARNING")}
function Xv(a,b,c,d,e){e=void 0===e?{}:e;e.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=e||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var f=void 0===f?!1:f;if(a&&(M("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),(window&&
window.yterr||f)&&!(5<=Uv)&&0!==a.f)){var g=Yf(a);f=g.message||"Unknown Error";d=g.name||"UnknownError";e=g.lineNumber||"Not available";var k=g.fileName||"Not available";g=g.stack||a.g||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0,m=0;m<a.args.length;m++){var n=a.args[m],t="params."+m;l+=t.length;if(n)if(Array.isArray(n))for(var u=c,w=0;w<n.length&&!(n[w]&&(l+=Zv(w,n[w],t,u),500<l));w++);else if("object"===typeof n)for(u in u=void 0,w=c,n){if(n[u]&&(l+=Zv(u,n[u],
t,w),500<l))break}else c[t]=String(JSON.stringify(n)).substring(0,500),l+=c[t].length;else c[t]=String(JSON.stringify(n)).substring(0,500),l+=c[t].length;if(500<=l)break}else if(a.hasOwnProperty("params")&&a.params)if(n=a.params,"object"===typeof a.params)for(m in t=0,n){if(n[m]&&(l="params."+m,u=String(JSON.stringify(n[m])).substr(0,500),c[l]=u,t+=l.length+u.length,500<t))break}else c.params=String(JSON.stringify(n)).substr(0,500);c={message:f,name:d,lineNumber:e,fileName:k,stack:g,params:c};a=Number(a.columnNumber);
isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);void 0===Vv&&(Vv=Math.random()<Jt("log_js_error_clusters"));if(!0===Vv)a:for(d=ja(Sv),a=d.next();!a.done;a=d.next())if(a=a.value,a.Ic[c.name])for(e=ja(a.Ic[c.name]),f=e.next();!f.done;f=e.next())if(k=f.value,f=c.message.match(k.regexp)){c.params["error.original"]=f[0];d=k.groups;e={};for(k=0;k<d.length;k++)e[d[k]]=f[k+1],c.params["error."+d[k]]=f[k+1];c.message=a.Hd(e);break a}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(Tv.has(c.message)||
0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){if(M("kevlar_gel_error_routing")){a=b;var E;f={stackTrace:c.stack};c.fileName&&(f.filename=c.fileName);d=(null===(E=c.lineNumber)||void 0===E?0:E.split)?c.lineNumber.split(":"):[];0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(f.lineNumber=Number(d[0]),f.columnNumber=Number(d[1])):f.lineNumber=Number(d[0]));E={level:"ERROR_LEVEL_UNKNOWN",message:c.message};"ERROR"===
a?E.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(E.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:f};f={pageUrl:window.location.href,kvPairs:[]};if(d=c.params)for(e=ja(Object.keys(d)),k=e.next();!k.done;k=e.next())k=k.value,f.kvPairs.push({key:"client."+k,value:String(d[k])});Qv("clientError",{errorMetadata:f,stackTrace:a,logMessage:E});sv()}E=c.params||{};b={Fa:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":E.name},P:{url:L("PAGE_NAME",
window.location.href),file:c.fileName},method:"POST"};E.version&&(b["client.version"]=E.version);if(b.P){c.stack&&(b.P.stack=c.stack);a=ja(Object.keys(E));for(f=a.next();!f.done;f=a.next())f=f.value,b.P["client."+f]=E[f];if(E=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(a=ja(Object.keys(E)),f=a.next();!f.done;f=a.next())f=f.value,b.P[f]=E[f];E=L("SERVER_NAME",void 0);a=L("SERVER_VERSION",void 0);E&&a&&(b.P["server.name"]=E,b.P["server.version"]=a)}Yt(L("ECATCHER_REPORT_HOST","")+"/error_204",
b);Tv.add(c.message);Uv++}}}
function Zv(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function $v(a,b,c,d){!a&&(void 0===c?0:c)&&Yv(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a}
function aw(a){var b=void 0===b?!1:b;if(!(b=$v(Hu&&Hu.test(a)?!0:!1,a,b,"Active View 3rd Party Integration URL"))){var c=void 0===c?!1:c;b=$v(Iu&&Iu.test(a)?!0:!1,a,c,"Google/YouTube Brand Lift URL")}if(!(c=b)){var d=void 0===d?!1:d;c=$v(Ju&&Ju.test(a)?!0:!1,a,d,"Nielsen OCR URL")}return c}
;var bw=x().toString();
function cw(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=x();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(bw)for(a=1,b=0;b<bw.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^bw.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var dw=p.ytLoggingDocDocumentNonce_||cw();q("ytLoggingDocDocumentNonce_",dw,void 0);function ew(a){this.f=a}
function fw(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,void 0!==a.f.veCounter&&(b.veCounter=a.f.veCounter),void 0!==a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=fw(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
ew.prototype.toString=function(){return JSON.stringify(fw(this))};function gw(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function hw(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function iw(a){return L(hw(void 0===a?0:a),void 0)}
q("yt_logging_screen.getRootVeType",iw,void 0);function jw(){var a=L("csn-to-ctt-auth-info");a||(a={},nt("csn-to-ctt-auth-info",a));return a}
function kw(a){a=void 0===a?0:a;var b=L(gw(a));if(!b&&!L("USE_CSN_FALLBACK",!0))return null;b||0!=a||(M("kevlar_client_side_screens")||M("c3_client_side_screens")?b="UNDEFINED_CSN":b=L("EVENT_ID"));return b?b:null}
q("yt_logging_screen.getCurrentCsn",kw,void 0);function lw(a,b,c){var d=jw();(c=kw(c))&&delete d[c];b&&(d[a]=b)}
function mw(a){return jw()[a]}
q("yt_logging_screen.getCttAuthInfo",mw,void 0);q("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==L(gw(c))||b!==L(hw(c)))if(lw(a,d,c),nt(gw(c),a),nt(hw(c),b),0==c||M("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&Bv("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:dw,clientScreenNonce:a},Pv)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()},void 0);function nw(a,b,c){var d=void 0===d?!0:d;var e=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Od(window.location.href);f&&e.push(f);f=Od(a);if(hb(e,f)||!f&&0==a.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(e=document.createElement("a"),sd(e,a),a=e.href),a&&(a=Pd(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:kw()},b)),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+Id(a).toString(36),b=b?Ud(b):"",Gv(d,b,c||5,"/"))):(c=b,b="ST-"+Id(a).toString(36),c=c?
Ud(c):"",Gv(b,c,5,"/"))}
;function ow(a,b,c,d){Uf.call(this);this.l=a;this.g=b;this.M=c;this.j=d;this.i=dh("DIV",{"class":"ads-mute-button"});th(this.i,String.fromCharCode(215));this.f=dh("DIV");rd(this.f,pw(this));this.A=F("ads-mute-undo",this.f);P(this.i,"click",v(this.B,this));this.l.firstElementChild.appendChild(this.i);a=Eb(this.g.mute_survey);vb(a);z(a,function(e){var f=dh("INPUT",{"class":"yt-uix-form-input-radio",type:"radio"}),g=dh("SPAN",{"class":"yt-uix-form-input-radio-element"});f=dh("SPAN",{"class":"yt-uix-form-input-radio-container"},
f,g);f=dh("LABEL","ads-mute-option",f,e);P(f,"click",v(this.D,this,this.g.mute_survey[e]));this.f.firstChild.appendChild(f)},this);
P(this.f,"click",Cu);P(this.A,"click",v(this.J,this));$u("dispose",this.dispose,this)}
y(ow,Uf);function pw(a){var b=a.g.mute_gone||id,c=a.g.mute_question||id;a=a.g.mute_undo||id;return ed("div",{"class":"ads-mute-survey"},fd(ed("span",{"class":"ads-mute-check"}),ed("b",{},b)," ",c,ed("div",{"class":"ads-mute-undo"},a)))}
ow.prototype.K=function(){z(Vg("ads-mute-option",this.f),function(a){Gu(a)});
Gu(this.i);lh(this.i);Gu(this.f);lh(this.f);Gu(this.A)};
ow.prototype.B=function(a){a.stopPropagation();a.preventDefault();this.j&&hu(this.g.mute_url);this.l.firstElementChild.appendChild(this.f);K(rh(this.f),"contains-mute-survey")};
ow.prototype.J=function(a){a.stopPropagation();a.preventDefault();this.g.mute_undo_url&&this.j&&hu(this.g.mute_undo_url);kq(rh(this.f),"contains-mute-survey");lh(this.f)};
ow.prototype.D=function(a,b){b.stopPropagation();b.preventDefault();this.j&&hu(a);lh(this.l);this.M();this.dispose()};function qw(){var a=new jk(Ni),b=a.f[0].depth,c={};c=(c.dssz=Mi.scripts?Mi.scripts.length:0,c.icsg=nk(a),c.mdo=ok(a),c.mso=Mk(a),c);Ni.location&&Ni.location.ancestorOrigins&&(c.iag=lk(a));0<b&&(c.nhd=b);return c}
;function cy(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!dy(a)||c.some(function(e){return!dy(e)}))throw Error("Only objects may be merged.");
c=ja(c);for(d=c.next();!d.done;d=c.next())ey(a,d.value);return a}
function ey(a,b){for(var c in b)if(dy(b[c])){if(c in a&&!dy(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ey(a[c],b[c])}else if(fy(b[c])){if(c in a&&!fy(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);gy(a[c],b[c])}else a[c]=b[c];return a}
function gy(a,b){for(var c=ja(b),d=c.next();!d.done;d=c.next())d=d.value,dy(d)?a.push(ey({},d)):fy(d)?a.push(gy([],d)):a.push(d);return a}
function dy(a){return"object"===typeof a&&!Array.isArray(a)}
function fy(a){return"object"===typeof a&&Array.isArray(a)}
;function hy(a,b){this.version=a;this.args=b}
;function iy(a,b){this.topic=a;this.f=b}
iy.prototype.toString=function(){return this.topic};var jy=r("ytPubsub2Pubsub2Instance")||new Es;Es.prototype.subscribe=Es.prototype.subscribe;Es.prototype.unsubscribeByKey=Es.prototype.ta;Es.prototype.publish=Es.prototype.la;Es.prototype.clear=Es.prototype.clear;q("ytPubsub2Pubsub2Instance",jy,void 0);var ky=r("ytPubsub2Pubsub2SubscribedKeys")||{};q("ytPubsub2Pubsub2SubscribedKeys",ky,void 0);var ly=r("ytPubsub2Pubsub2TopicToKeys")||{};q("ytPubsub2Pubsub2TopicToKeys",ly,void 0);var my=r("ytPubsub2Pubsub2IsAsync")||{};
q("ytPubsub2Pubsub2IsAsync",my,void 0);q("ytPubsub2Pubsub2SkipSubKey",null,void 0);function T(a,b){var c=ny();return c?c.publish.call(c,a.toString(),a,b):!1}
function oy(a,b,c){var d=ny();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var k=r("ytPubsub2Pubsub2SkipSubKey");k&&k==e||(k=function(){if(ky[e])try{if(g&&a instanceof iy&&a!=f)try{var l=a.f,m=g;if(!m.args||!m.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!l.Ta){var n=new l;l.Ta=n.version}var t=l.Ta}catch(u){}if(!t||m.version!=t)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(l,
nb(m.args))}catch(u){throw u.message="yt.pubsub2.Data.deserialize(): "+u.message,u;}}catch(u){throw u.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+u.message,u;}b.call(c||window,g)}catch(u){st(u)}},my[a.toString()]?r("yt.scheduler.instance")?Nu(k):N(k,0):k())});
ky[e]=!0;ly[a.toString()]||(ly[a.toString()]=[]);ly[a.toString()].push(e);return e}
function py(){var a=qy,b=oy(ry,function(c){a.apply(void 0,arguments);sy(b)},void 0);
return b}
function sy(a){var b=ny();b&&("number"===typeof a&&(a=[a]),z(a,function(c){b.unsubscribeByKey(c);delete ky[c]}))}
function ny(){return r("ytPubsub2Pubsub2Instance")}
;function ty(a,b){hy.call(this,1,arguments)}
sa(ty,hy);function uy(a,b){hy.call(this,1,arguments)}
sa(uy,hy);var vy=new iy("aft-recorded",ty),wy=new iy("timing-sent",uy);var xy=window;function yy(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var zy=xy.performance||xy.mozPerformance||xy.msPerformance||xy.webkitPerformance||new yy;var Ay=!1;v(zy.clearResourceTimings||zy.webkitClearResourceTimings||zy.mozClearResourceTimings||zy.msClearResourceTimings||zy.oClearResourceTimings||Ca,zy);function By(a){var b=Cy(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Dy(a){return!!r("yt.timing."+(a||"")+"pingSent_")}
function Ey(a){var b;(b=r("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},q("ytcsi."+(a||"")+"data_",b,void 0));return b}
function Fy(a){a=Ey(a);a.info||(a.info={});return a.info}
function Cy(a){a=Ey(a);a.tick||(a.tick={});return a.tick}
function Gy(a){var b=Ey(a).nonce;b||(b=cw(),Ey(a).nonce=b);return b}
function Hy(a){var b=Cy(a||""),c=By(a);c&&!Ay&&(T(vy,new ty(Math.round(c-b._start),a)),Ay=!0)}
;function Iy(){var a=r("ytcsi.debug");a||(a=[],q("ytcsi.debug",a,void 0),q("ytcsi.reference",{},void 0));return a}
function Jy(a){a=a||"";var b=r("ytcsi.reference");b||(Iy(),b=r("ytcsi.reference"));if(b[a])return b[a];var c=Iy(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Ky=p.ytLoggingLatencyUsageStats_||{};q("ytLoggingLatencyUsageStats_",Ky,void 0);function Ly(){this.f=0}
function My(){Ly.f||(Ly.f=new Ly);return Ly.f}
Ly.prototype.tick=function(a,b,c){Ny(this,"tick_"+a+"_"+b)||Qv("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Ly.prototype.info=function(a,b){var c=Object.keys(a).join("");Ny(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,Qv("latencyActionInfo",c))};
Ly.prototype.span=function(a,b){var c=Object.keys(a).join("");Ny(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Qv("latencyActionSpan",a))};
function Ny(a,b){Ky[b]=Ky[b]||{count:0};var c=Ky[b];c.count++;c.time=fv();a.f||(a.f=Ou(function(){var d=fv(),e;for(e in Ky)Ky[e]&&6E4<d-Ky[e].time&&delete Ky[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Ov("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Yv(c)),!0):!1}
;var U={},Oy=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.cseg="creatorInfo.creatorSegment",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid=
"requestIds",U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.ncnp="webInfo.nonPreloadedNodeCount",
U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt="playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm="shellStartupDurationMs",U.aq=
"tvInfo.appQuality",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",
U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),Py="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Qy={},Ry=(Qy.ccs="CANARY_STATE_",
Qy.mver="MEASUREMENT_VERSION_",Qy.pis="PLAYER_INITIALIZED_STATE_",Qy.yt_pt="LATENCY_PLAYER_",Qy.pa="LATENCY_ACTION_",Qy.yt_vst="VIDEO_STREAM_TYPE_",Qy),Sy="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Ty(a){return!!L("FORCE_CSI_ON_GEL",!1)||M("csi_on_gel")||!!Ey(a).useGel}
function Uy(a){a=Ey(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Vy(a,b,c){if(null!==b)if(Fy(c)[a]=b,Ty(c)){var d=b;b=Uy(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in Oy){b=Oy[a];hb(Py,b)&&(d=!!d);a in Ry&&"string"===typeof d&&(d=Ry[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},k=0;k<d.length-1;k++){var l=d[k];g[l]={};g=g[l]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=cy({},e)}else hb(Sy,a)||Yv(new Ov("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Ty(c)&&(b=Jy(c||""),cy(b.info,f),b=Uy(c),"gelInfos"in b||(b.gelInfos={}),cy(b.gelInfos,f),c=Gy(c),My().info(f,c))}else Jy(c||"").info[a]=b}
function Wy(a,b,c){var d=Cy(c);if(M("use_first_tick")&&Xy(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;zy.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),zy.mark(e))}e=b||fv();d[a]=e;e=Uy(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||fv();if(Ty(c)){Jy(c||"").tick[a]=b||fv();e=Gy(c);if("_start"===a){var f=My();Ny(f,"baseline_"+e)||Qv("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else My().tick(a,e,b);Hy(c);e=!0}else e=!1;e||(Yy(!1,c),Jy(c||"").tick[a]=b||fv());
return d[a]}
function Xy(a,b){var c=Cy(b);return a in c}
function Yy(a,b){if(!Dy(b)){var c=L((b||"")+"TIMING_ACTION",void 0),d=Cy(b);if(r("ytglobal.timing"+(b||"")+"ready_")&&c&&Xy("_start")&&By(b))if(Hy(b),a||b)Zy(b);else{c=!0;var e=L("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in d)){c=!1;break}c&&Zy(b)}}}
function Zy(a){if(!Ty(a)){var b=Cy(a),c=Fy(a),d=b._start,e=L("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:L((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=By(a);var k=Cy(a),l=k.pbr,m=k.vc;k=k.pbs;l&&m&&k&&l<m&&m<k&&Fy(a).yt_pvis&&"youtube"===e&&(Vy("yt_lt","hot_bg",a),e=b.vc,l=b.pbs,delete b.aft,c.aft=Math.round(l-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=fv();n={};e=[];for(var t in b)"_"!==t.charAt(0)&&(l=Math.round(b[t]-d),n[t]=l,e.push(t+"."+l));f.rt=
e.join(",");b=!!c.ap;M("debug_csi_data")&&(c=r("yt.timing.csiData"),c||(c=[],q("yt.timing.csiData",c,void 0)),c.push({page:location.href,time:new Date,args:f}));c="";for(var u in f)f.hasOwnProperty(u)&&(c+="&"+u+"="+f[u]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var w=void 0===w?"":w;ku(f,w)||hu(f,void 0,void 0,void 0,w)}else hu(f);q("yt.timing."+(a||"")+"pingSent_",!0,void 0);T(wy,new uy(n.aft+(Number(g)||0),a))}}
if(M("overwrite_polyfill_on_logging_lib_loaded")){var $y=window;$y.ytcsi&&($y.ytcsi.info=Vy,$y.ytcsi.tick=Wy)};var az="",bz=[],cz="";function dz(a,b){var c=a.media_template_data;(c=Array.isArray(c)?eb(c,function(d){return!!d.imageUrl}):null)?(cz=c.videoId,c={video_id:c.videoId,
ad_type:"watch_related",headline:Bd(a.line1),image_url:c.imageUrl,description1:Bd(a.line2),description2:Bd(a.line3),channel_title:c.channelName,visible_url:Bd(a.visible_url)},az=Bd(a.url),(new nr(az)).g.get("adurl"),fc(Hd(a.creative_view_url))||bz.push(ez(Bd(a.creative_view_url))),fc(Hd(a.p_creative_view_url))||bz.push(ez(Bd(a.p_creative_view_url))),fc(Hd(a.engaged_view_url))||ez(Bd(a.engaged_view_url)),fc(Hd(a.p_engaged_view_url))||ez(Bd(a.p_engaged_view_url)),fc(Hd(a.videoplaytime_25_url))||ez(Bd(a.videoplaytime_25_url)),
fc(Hd(a.p_videoplaytime_25_url))||ez(Bd(a.p_videoplaytime_25_url)),fc(Hd(a.videoplaytime_50_url))||ez(Bd(a.videoplaytime_50_url)),fc(Hd(a.p_videoplaytime_50_url))||ez(Bd(a.p_videoplaytime_50_url)),fc(Hd(a.videoplaytime_75_url))||ez(Bd(a.videoplaytime_75_url)),fc(Hd(a.p_videoplaytime_75_url))||ez(Bd(a.p_videoplaytime_75_url)),fc(Hd(a.videoplaytime_100_url))||ez(Bd(a.videoplaytime_100_url)),fc(Hd(a.p_videoplaytime_100_url))||ez(Bd(a.p_videoplaytime_100_url)),Yt("/pyv?"+Ud(c),{format:"XML",onSuccess:function(d,
e){b&&b(d,e)},
onError:function(){fz()},
Ia:!0})):fz()}
function gz(a){Wy("parc");0==a.length?fz():dz(a[0],function(b,c){var d=c.html_content,e=C(window.pyv_related_box_id||"watch-related");if(e){var f=e.innerHTML;d&&0!=f.indexOf(Zc(d).toString())&&e.insertBefore(ih(d),e.firstChild);if(d=C("pyv-watch-related-dest-url"))e=!L("PYV_DISABLE_MUTE")&&a[0].mute_url&&a[0].mute_survey,d.setAttribute("href",az),e&&(d=rh(d),K(d,"contains-mute-button"),new ow(d,a[0],Ca,!0));Wy("parn");hz();z(bz,function(g){hu(g,void 0,aw(g))})}})}
window.google_ad_request_done=function(a){gz(a)};
function iz(a){if(!a||fc(a.responseText))fz();else try{eval(a.responseText)}catch(b){throw fz(),b;}}
function jz(){var a={};return a.dff="times new roman",a.dfs="16",a.ppjl="u",a.rsz="||n|",a}
function hz(){var a={ad_id:"",ad_sys:"",ad_v:cz,break_type:6,content_v:L("VIDEO_ID",void 0),cpn:(r("yt.www.watch.player.getClientPlaybackNonce")||wb())(),device:"1",devicever:"html5",ei:L("GET_PLAYER_EVENT_ID",void 0),el:"detailpage",event:2,format:"2_6",mt:"0",ns:1,slot_pos:"0",ver:"2.0",wt:(new Date).getTime()};a=Wd("/api/stats/ads",a);hu(a,void 0,aw(a))}
function fz(){var a=L("TIMING_WAIT",[]);jb(a,"parn")&&(nt("TIMING_WAIT",a),Yy())}
function ez(a){if("https:"==window.location.protocol){var b=new nr(a);if("https"==b.j)return a;or(b,"https");return b.toString()}return a}
;function kz(a,b,c){a&&(a.dataset?a.dataset[lz(b)]=String(c):a.setAttribute("data-"+b,c))}
function V(a,b){return a?a.dataset?a.dataset[lz(b)]:a.getAttribute("data-"+b):null}
function mz(a,b){a&&(a.dataset?delete a.dataset[lz(b)]:a.removeAttribute("data-"+b))}
var nz={};function lz(a){return nz[a]||(nz[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var oz=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,pz=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function qz(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(oz,""),c=c.replace(pz,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b);return null}return rz(a,b,c)}
function rz(a,b,c){c=void 0===c?null:c;var d=sz(a),e=document.getElementById(d),f=e&&V(e,"loaded"),g=e&&!f;if(f)return b&&b(),e;b&&(f=R(d,b),b=""+Ia(b),tz[b]=f);return g?e:e=uz(a,d,function(){V(e,"loaded")||(kz(e,"loaded","true"),S(d),N(Na(cv,d),0))},c)}
function uz(a,b,c,d){d=void 0===d?null:d;var e=hh("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);ud(e,Wi(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function sz(a){var b=document.createElement("a");sd(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Id(a)}
var tz={};function vz(a,b,c){hu("/gen_204?a="+(a+(b?"&"+b:"")),c)}
;function wz(){this.i=1E3/24;this.g=null;this.f=[]}
var xz=new wz;wz.prototype.j=function(){for(var a=x(),b=this.f.length-1;0<=b;b--)yz(this.f[b],a)&&zz(this,b)};
wz.prototype.add=function(a){this.f.push(a);this.g||(this.g=Nt(v(this.j,this),this.i))};
wz.prototype.remove=function(a){a=Xa(this.f,a);0<=a&&zz(this,a)};
function zz(a,b){kb(a.f,b);a.f.length||(Ot(a.g),delete a.g)}
;function Az(a,b){this.f=new Hq(0,0,a.x,a.y,b.x,b.y,1,1)}
function Bz(a){return a}
var Cz=new Az({x:.25,y:.1},{x:.25,y:1});function Dz(a){return Kq(Cz.f,a)}
var Ez=new Az({x:.42,y:0},{x:1,y:1});function Fz(a){return Kq(Ez.f,a)}
var Gz=new Az({x:0,y:0},{x:.58,y:1});function Hz(a){return Kq(Gz.f,a)}
var Iz=new Az({x:.42,y:0},{x:.58,y:1});function Jz(a){return Kq(Iz.f,a)}
function Kz(a){switch(a){case "linear":return Bz;case "ease-in":return Fz;case "ease-out":return Hz;case "ease-in-out":return Jz;default:return Dz}}
;function Lz(a,b){var c=b||{};this.el=a;this.duration=c.duration||.25;this.Vb=c.ga||null;this.Oc=c.Oc||"ease";this.setup(c);c.uj||this.play()}
Lz.prototype.setup=function(){};function Mz(a,b){this.g=this.f=0;this.i=xz;this.F=null;Lz.call(this,a,b)}
y(Mz,Lz);Mz.prototype.setup=function(a){this.f=0;this.i=a.loop||xz;this.F=Kz(this.Oc)};
Mz.prototype.play=function(){this.g=x();yz(this,this.g);this.i.add(this)};
Mz.prototype.pause=function(){this.i.remove(this)};
function yz(a,b){var c=1E3*a.duration;a.f=Math.min(a.f+(b-a.g),c);a.g=b;var d=a.F(a.f/c);d=a.A-(a.A-a.l)*d;a.j?a.el.style.filter="alpha(opacity="+Math.floor(100*d)+")":a.el.style.opacity=d;if(c=a.f>=c)a.ga(),a.Vb&&N(v(a.Vb,p,a),0);return c}
Mz.prototype.ga=function(){};function Nz(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Jb(b);this.assets=a.assets||{};this.attrs=a.attrs||Jb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Nz.prototype.clone=function(){var a=new Nz,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ea(c)?a[b]=Jb(c):a[b]=c}return a};function Oz(){return parseInt(L("DCLKSTAT",0),10)}
;function Pz(){this.g=!1;this.f=null}
Pz.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,qz(b,function(){g.g=!1;if(window.botguard)Qz(g,c,d,f);else{var k=sz(b),l=document.getElementById(k);l&&(cv(k),l.parentNode.removeChild(l));Yv(new Ov("Unable to load Botguard","from "+b))}},e)):a&&(eval(a),window.botguard?Qz(this,c,d,f):Yv(Error("Unable to load Botguard from JS")))};
function Qz(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Ca)}catch(e){Yv(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){Yv(e)}c&&c(b)}}
Pz.prototype.dispose=function(){this.f=null};var Rz=new Pz;function Sz(){return!!Rz.f}
function Tz(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Rz.f?Rz.f.invoke(void 0,void 0,a):null}
;function Uz(a,b,c,d){b=void 0===b?{}:b;c=void 0===c?"":c;d=void 0===d?window:d;vd(d.location,Wd(a,b)+c)}
function Vz(a,b){b&&nw(a,b);(window.ytspf||{}).enabled?spf.navigate(a):Uz(a)}
function Wz(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));b&&nw(a,b);if(c)return!1;Vz(a);return!0}
;function Xz(){Uf.call(this);this.f=[]}
sa(Xz,Uf);Xz.prototype.K=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.callback)}Uf.prototype.K.call(this)};var Yz=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Zz(a,b){a=a||"";if(window.spf){var c=a.match(Yz);spf.style.load(a,c?c[1]:"",b);return null}return $z(a,b)}
function $z(a,b){var c=aA(a),d=document.getElementById(c),e=d&&V(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;b&&(R(c,b),Ia(b));return f?d:d=bA(a,c,function(){V(d,"loaded")||(kz(d,"loaded","true"),S(c),N(Na(cv,c),0))})}
function bA(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Wi(a);d.rel="stylesheet";d.href=dc(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function aA(a){var b=hh("A"),c=Wb("This URL is never added to the DOM");Vb(c);Vb(c);sd(b,new rc(sc,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Id(a)}
;function cA(a,b,c,d){Uf.call(this);var e=this;this.A=this.za=a;this.ca=b;this.B=!1;this.api={};this.na=this.M=null;this.J=new Es;Vf(this,Na(Wf,this.J));this.j={};this.T=this.ka=this.g=this.oc=this.f=null;this.O=!1;this.l=this.D=null;this.Aa={};this.Qe=["onReady"];this.xb=null;this.Rc=NaN;this.V={};this.i=d;dA(this);this.Jb("WATCH_LATER_VIDEO_ADDED",this.Bg.bind(this));this.Jb("WATCH_LATER_VIDEO_REMOVED",this.Cg.bind(this));this.Jb("onAdAnnounce",this.Se.bind(this));this.Re=new Xz(this);Vf(this,Na(Wf,
this.Re));this.Z=0;c?this.Z=N(function(){e.loadNewVideoConfig(c)},0):d&&(eA(this),fA(this))}
sa(cA,Uf);h=cA.prototype;h.getId=function(){return this.ca};
h.loadNewVideoConfig=function(a){if(!this.R()){this.Z&&(O(this.Z),this.Z=0);a instanceof Nz||(a=new Nz(a));this.oc=a;this.f=a.clone();eA(this);this.ka||(this.ka=gA(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.A.style.width=Dj(Number(a)||a,!0);if(a=this.f.attrs.height)this.A.style.height=Dj(Number(a)||a,!0);fA(this);this.B&&hA(this)}};
function eA(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.g=b||a.g;"video-player"==a.g&&(a.g=a.ca,a.f.attrs.id=a.ca);a.A.id==a.g&&(a.g+="-player",a.f.attrs.id=a.g)}
h.ff=function(){return this.oc};
function hA(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function iA(a){var b=!0,c=jA(a);c&&a.f&&(a=kA(a),b=V(c,"version")===a);return b&&!!r("yt.player.Application.create")}
function fA(a){if(!a.R()&&!a.O){var b=iA(a);if(b&&"html5"==(jA(a)?"html5":null))a.T="html5",a.B||lA(a);else if(mA(a),a.T="html5",b&&a.l)a.za.appendChild(a.l),lA(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.D=function(){c=!0;if(a.i)var d=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==ut(d||"").player_bootstrap_method?r("yt.player.Application.createAlternate")||r("yt.player.Application.create"):r("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.za,e,a.i);
lA(a)};
a.O=!0;b?a.D():(qz(kA(a),a.D),(b=a.i?a.i.cssUrl:a.f.assets.css)&&Zz(b),nA(a)&&!c&&q("yt.player.Application.create",null,void 0))}}}
function jA(a){var b=C(a.g);!b&&a.A&&a.A.querySelector&&(b=a.A.querySelector("#"+a.g));return b}
function lA(a){if(!a.R()){var b=jA(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.O=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||oA(a)):a.Rc=N(function(){lA(a)},50)}}
function oA(a){dA(a);a.B=!0;var b=jA(a);b.addEventListener&&(a.M=pA(a,b,"addEventListener"));b.removeEventListener&&(a.na=pA(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=pA(a,b,e))}for(var f in a.j)a.M(f,a.j[f]);hA(a);a.ka&&a.ka(a.api);a.J.la("onReady",a.api)}
function pA(a,b,c){var d=b[c];return function(){try{return a.xb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.xb=e,tt(e))}}}
function dA(a){a.B=!1;if(a.na)for(var b in a.j)a.na(b,a.j[b]);for(var c in a.V)O(parseInt(c,10));a.V={};a.M=null;a.na=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Jb.bind(a);a.api.removeEventListener=a.ah.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.gf.bind(a);a.api.getPlayerType=a.jf.bind(a);a.api.getCurrentVideoConfig=a.ff.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Zf.bind(a)}
h.Zf=function(){return this.B};
h.Jb=function(a,b){var c=this,d=gA(this,b);if(d){if(!hb(this.Qe,a)&&!this.j[a]){var e=qA(this,a);this.M&&this.M(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.B&&N(function(){d(c.api)},0)}};
h.ah=function(a,b){if(!this.R()){var c=gA(this,b);c&&Gs(this.J,a,c)}};
function gA(a,b){var c=b;if("string"==typeof b){if(a.Aa[b])return a.Aa[b];c=function(){var d=r(b);d&&d.apply(p,arguments)};
a.Aa[b]=c}return c?c:null}
function qA(a,b){var c="ytPlayer"+b+a.ca;a.j[b]=c;p[c]=function(d){var e=N(function(){if(!a.R()){a.J.la(b,d);var f=a.V,g=String(e);g in f&&delete f[g]}},0);
Hb(a.V,String(e))};
return c}
h.Se=function(a){S("a11y-announce",a)};
h.Bg=function(a){S("WATCH_LATER_VIDEO_ADDED",a)};
h.Cg=function(a){S("WATCH_LATER_VIDEO_REMOVED",a)};
h.jf=function(){return this.T||(jA(this)?"html5":null)};
h.gf=function(){return this.xb};
function mA(a){a.cancel();dA(a);a.T=null;a.f&&(a.f.loaded=!1);var b=jA(a);b&&(iA(a)||!nA(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));kh(a.za)}
h.cancel=function(){if(this.D){var a=kA(this),b=this.D;a&&b&&(a=""+Ia(b),(a=tz[a])&&av(a))}O(this.Rc);this.O=!1};
h.K=function(){mA(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){st(b)}this.Aa=null;for(var a in this.j)p[this.j[a]]=null;this.oc=this.f=this.api=null;delete this.za;delete this.A;Uf.prototype.K.call(this)};
function nA(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function kA(a){return a.i?a.i.jsUrl:a.f.assets.js}
;var rA={},sA="player_uid_"+(1E9*Math.random()>>>0);function tA(a){delete rA[a.getId()]}
function uA(){var a;if(a=document.getElementById("player-api")){var b=sA+"_"+Ia(a),c=rA[b];c||(c=new cA(a,b),rA[b]=c);a=c.api}else a=null;return a}
;var vA="",wA="",xA=!1;function yA(a,b){a||(a="");b||(b=!1);var c=C("watch-channel-brand-div");c&&mq(c,"collapsible",b);if(c=C("google_companion_ad_div"))c.innerHTML=a}
function zA(a){var b=Math.round(1E4*Math.random());return['<iframe src="',a,'" name="ifr_300x250ad',b,'" id="ifr_300x250ad',b,'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("")}
function AA(a){return!!a.match("/ad_companion.*render=video_wall_companion")}
function BA(){window.google_ad_output="html";window.google_ad_height="250";window.google_ad_format="300x250_as";window.google_container_id="google_companion_ad_div"}
function CA(){var a=document.getElementById("google_companion_ad_div");if(a&&(a=a.firstElementChild)){"DIV"==a.nodeName&&(a=a.firstElementChild);try{var b=encodeURIComponent(vA)+","+encodeURIComponent(wA);a.contentWindow.postMessage(b,"*");a.width=370;a.height=null!=vA?210:185}catch(c){}}}
function DA(){var a=document.getElementById("movie_player");a&&a.pauseVideo()}
function EA(a){if(!xA&&a)if(M("remove_yt_uds")){xA=!0;window.google_ad_client=a.afv_vars.google_ad_client;window.google_page_url=a.afv_vars.google_page_url;window.google_page_location=window.location.href;var b=a.afc_vars,c;for(c in b){var d=b[c];if("no_initial_ads"==c&&d){ck();return}if("format"!=c||fc(Hd(d)))if("loeid"!=c||fc(Hd(d))){var e="google_"+c;(Wj[e]||Xj[e]||Zj[e])&&(window[e]=d)}else window.google_loeid=Hd(d);else if(d=Hd(d),e=d.match(/(\d+)x(\d+)/))window.google_ad_width=e[1],window.google_ad_height=
e[2],window.google_ad_format=d}b=new cj;ak(b);window.google_loader_used="yt";(b=nn(b))&&FA(b);ck()}else(b=r("google.ads.Ad"))?(xA=!0,new b(a.afv_vars.google_ad_client,"google_companion_ad_div",a.afc_vars)):N(function(){EA(a)},200)}
function FA(a){var b=C("google_companion_ad_div");null!=b&&(a=dh("IFRAME",{width:window.google_ad_width,height:window.google_ad_height,frameBorder:0,marginWidth:0,marginHeight:0,vpsace:0,hspace:0,allowTransparency:"true",scrolling:"no",src:a,style:{visibility:"visible"}}),b.appendChild(a))}
var GA=[];q("yt.www.watch.ads.setAdId",function(a){window.ad_debug=a},void 0);
q("yt.www.watch.ads.setCompanion",yA,void 0);q("yt.www.watch.ads.showForcedMpu",function(a){var b=zA(a);a=AA(a);yA(b,a)},void 0);
q("yt.www.watch.ads.setGutSlotSizes",function(){},void 0);
q("yt.www.watch.ads.handleSetCompanion",function(a){a=a.replace(";dc_seed=",";kmyd=watch-channel-brand-div;dc_seed=");var b=zA(a);a=AA(a);yA(b,a)},void 0);
q("yt.www.watch.ads.handleSetAfvCompanionVars",BA,void 0);q("yt.www.watch.ads.companionSetupComplete",CA,void 0);q("yt.www.watch.ads.pauseVideo",DA,void 0);q("yt.www.watch.ads.loadAfc",EA,void 0);q("yt.www.watch.ads.isAfcAdVisible",function(){var a=C("google_companion_ad_div");return a?(a=oh(a))&&"IFRAME"==a.tagName?-1!=a.src.indexOf("youtube.com%2Fad_frame"):!1:!1},void 0);
q("yt.www.watch.ads.checkInit",function(){},void 0);
q("yt.www.watch.ads.initVideoWallCompanionListeners",function(a,b){vA=a;wA=b;window.addEventListener("message",function(c){"companion-setup-complete"==c.data?CA():"pause-video"==c.data&&DA()},!1)},void 0);
q("yt.www.watch.ads.getGlobals",function(){return GA},void 0);
q("window.google_ad_request_done",window.rj,void 0);q("yt.www.ads.pyv.pyvWatchAfcCallback",gz,void 0);q("yt.www.ads.pyv.loadPyvAjax",function(a){var b=Gt(Ft);Oa(b,Ht(Ft));M("desktop_pyv_on_watch_missing_params")&&(Oa(b,jz()),Oa(b,qw()));a=Wd(a,b);M("desktop_pyv_on_watch_override_lact")&&(a=ce(a));Yt(a,{format:"RAW",onSuccess:iz,onError:function(){fz()},
withCredentials:!0});Wy("parq")},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){hu(a+"mac_204?action_fcts=1");return!0},void 0);
q("yt.www.watch.ads.isPromotionShelfSlotExist",function(){return null!=C("promotion-shelf")},void 0);
q("yt.www.watch.ads.promotionShelfClear",function(){var a=C("promotion-shelf");a&&(K(a,"hid"),kh(a))},void 0);
q("yt.www.watch.ads.promotionShelfShow",function(a){var b=C("promotion-shelf");b&&(b.appendChild(a),kq(b,"hid"))},void 0);
q("yt.www.watch.ads.addInstreamCompanionWtaUi",function(a){var b=C("google_companion_ad_div");if(b){var c=F("iv-cards-companion",b)||F("iv-website-companion",b)||b;K(b,"companion-with-wta");c.appendChild(a)}else st(Error("Cannot find google_companion_ad_div"))},void 0);
q("setAfvCompanionVars",BA,void 0);var HA=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",HA,void 0);function IA(a){lt(HA,arguments)}
function JA(a,b,c){b=void 0===b?{}:b;a=(a=a in HA?HA[a]:c)||"";c={};for(var d in b){c.wb=d;var e=function(f){return function(){return String(b[f.wb])}}(c);
a=a.replace(new RegExp("\\$\\{"+c.wb+"\\}","gi"),e);a=a.replace(new RegExp("\\$"+c.wb,"gi"),e);c={wb:c.wb}}return a}
function KA(a){lt(HA,arguments)}
;function LA(a,b,c){var d=c&&0<c?c:0;c=d?x()+1E3*d:0;if((d=d?MA():NA())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function OA(a){var b=NA(),c=MA();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d}
function PA(a){try{var b=NA(),c=MA();b&&b.remove(a);c&&c.remove(a)}catch(d){}}
function QA(){var a=MA();a&&Rs(a,a.f.Ga(!0))}
var MA=xb(function(){var a=new Vs;return a.isAvailable()?new Ps(a):null}),NA=xb(function(){var a=new Ws;
return a.isAvailable()?new Ps(a):null});function RA(a,b){(a=C(a))&&a.style&&(a.style.display=b?"":"none",mq(a,"hid",!b))}
function SA(a){return(a=C(a))?"none"!=a.style.display&&!J(a,"hid"):!1}
function TA(a){if(a=C(a))SA(a)?(a.style.display="none",K(a,"hid")):(a.style.display="",kq(a,"hid"))}
function UA(a){z(arguments,function(b){!Fa(b)||b instanceof Element?RA(b,!0):z(b,function(c){UA(c)})})}
function VA(a){z(arguments,function(b){!Fa(b)||b instanceof Element?RA(b,!1):z(b,function(c){VA(c)})})}
function WA(a){z(arguments,function(b){Fa(b)?z(b,function(c){WA(c)}):TA(b)})}
var XA={};function YA(a){if(a in XA)return XA[a];var b;if((b=document.body.style)&&a in b)b=a;else{var c=pj();c?(c=c.toLowerCase(),c+=Kd(a),b=void 0===b||c in b?c:null):b=null}return XA[a]=b}
function ZA(a){if(!hn()||!a)return null;var b=YA("transitionProperty");b=uj(a,b);var c=YA("transitionDuration");a=uj(a,c);if(!b||!a)return null;var d={},e=b.split(",");z(a.split(","),function(f,g){var k=e[g].trim();k&&(d[k]=-1<f.indexOf("ms")?parseInt(f,10):Math.round(1E3*parseFloat(f)))});
return d}
;var $A={},aB="ontouchstart"in document;function bB(a,b,c){b in $A||($A[b]=new Es);$A[b].subscribe(a,c)}
function cB(a,b,c){if(b in $A){var d=$A[b];Gs(d,a,c);0>=Is(d)&&(d.dispose(),delete $A[b])}}
function dB(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Eh(c,function(e){return J(e,b)},!0,d)}
function eB(a){var b="mouseover"==a.type&&"mouseenter"in $A||"mouseout"==a.type&&"mouseleave"in $A,c=a.type in $A||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=$A[b];for(var d in c.g){var e=dB(b,d,a.target);e&&!Eh(a.relatedTarget,function(f){return f==e},!0)&&c.la(d,e,b,a)}}if(b=$A[a.type])for(d in b.g)(e=dB(a.type,d,a.target))&&b.la(d,e,a.type,a)}}
P(document,"blur",eB,!0);P(document,"change",eB,!0);P(document,"click",eB);P(document,"focus",eB,!0);P(document,"mouseover",eB);P(document,"mouseout",eB);P(document,"mousedown",eB);P(document,"keydown",eB);P(document,"keyup",eB);P(document,"keypress",eB);P(document,"cut",eB);P(document,"paste",eB);aB&&(P(document,"touchstart",eB),P(document,"touchend",eB),P(document,"touchcancel",eB));function W(a){this.l=a;this.F={};this.D=[];this.B=[]}
h=W.prototype;h.W=function(a){return G(a,X(this))};
function X(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
h.unregister=function(){av(this.D);this.D.length=0;sy(this.B);this.B.length=0};
h.init=Ca;h.dispose=Ca;h.ia=function(a,b){this.D.push(R(a,b,this))};
function fB(a,b,c){a.B.push(oy(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=v(c,a);bB(d,b,e);a.F[c]=e}
function Z(a,b,c,d){cB(X(a,d),b,a.F[c]);delete a.F[c]}
h.Ba=function(a,b,c){var d=this.C(a,b);if(d&&(d=r(d))){var e=qb(arguments,2);pb(e,0,0,a);d.apply(null,e)}};
h.C=function(a,b){return V(a,b)};
function gB(a,b){kz(a,"tooltip-text",b)}
function hB(a,b,c){return F(X(a,b),c)}
;function iB(){W.call(this,"button");this.f=null;this.i=[];this.g={}}
y(iB,W);Da(iB);h=iB.prototype;h.register=function(){Y(this,"click",this.Ce);Y(this,"keydown",this.Fd);Y(this,"keypress",this.De);this.ia("page-scroll",this.Bf)};
h.unregister=function(){Z(this,"click",this.Ce);Z(this,"keydown",this.Fd);Z(this,"keypress",this.De);jB(this);this.g={};iB.L.unregister.call(this)};
h.Ce=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
h.Fd=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=kB(this,a))){var d=function(g){var k="";g.tagName&&(k=g.tagName.toLowerCase());return"ul"==k||"table"==k},e;
d(b)?e=b:e=uh(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Wf;else"table"==e&&(f=this.Vf);f&&lB(this,a,b,c,v(f,this))}}};
h.Bf=function(){var a=this.g;if(0!=Ab(a))for(var b in a){var c=a[b],d=mB(this,c);if(void 0==d||void 0==c)break;nB(this,d,c,!0)}};
function lB(a,b,c,d,e){var f=SA(c),g=9==d.keyCode;g||32==d.keyCode||13==d.keyCode?(d=oB(a,c))?(b=oh(d),"a"==b.tagName.toLowerCase()?Uz(b.href):Eu(b,"click")):g&&pB(a,b):f?27==d.keyCode?(oB(a,c),pB(a,b)):e(b,c,d):(a=J(b,X(a,"reverse"))?38:40,d.keyCode==a&&(Eu(b,"click"),d.preventDefault()))}
h.De=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=kB(this,a),SA(a)&&c.preventDefault())};
function oB(a,b){var c=X(a,"menu-item-highlight"),d=F(c,b);d&&kq(d,c);return d}
function qB(a,b,c){K(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Ia(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.Vf=function(a,b,c){var d=oB(this,b);b=qu("table",b);var e=qu("tr",b);e=Tg("td",null,e).length;b=Tg("td",null,b);d=rB(d,b,e,c);-1!=d&&(qB(this,a,b[d]),c.preventDefault())};
h.Wf=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=oB(this,b);b=Za(Tg("li",null,b),SA);d=rB(d,b,1,c);qB(this,a,b[d]);c.preventDefault()}};
function rB(a,b,c,d){var e=b.length;a=Xa(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function sB(a,b){var c=b.iframeMask;c||(c=hh("IFRAME"),c.src='javascript:""',iq(c,X(a,"menu-mask")),VA(c),b.iframeMask=c);return c}
function nB(a,b,c,d){var e=G(b,X(a,"group")),f=!!a.C(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,k=Gj(b);if(J(b,X(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(n){}}J(b,"flip")&&(J(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.C(b,"button-has-sibling-menu")?l=yj(e):a.C(b,"button-menu-root-container")&&(l=tB(a,b));B&&!Qe("8")&&(l=null);if(l){var m=Gj(l);m=new ij(-m.top,m.left,m.top,-m.left)}l=new Lg(0,1);J(b,X(a,"center-menu"))&&(l.x-=Math.round((Ej(c).width-Ej(b).width)/
2));d&&(l.y+=ah(document).y);if(a=sB(a,b))b=Ej(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Bs(e,f,a,g,l,m,197),d&&rj(a,"position","fixed");Bs(e,f,c,g,l,m,197)}
function tB(a,b){if(a.C(b,"button-menu-root-container")){var c=a.C(b,"button-menu-root-container");return G(b,c)}return document.body}
h.Fe=function(a){if(a){var b=kB(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.C(a,"button-has-sibling-menu")?c=a.parentNode:c=tB(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=sB(this,a);d&&c.appendChild(d);(c=!!this.C(a,"button-menu-fixed"))&&(this.g[mu(a).toString()]=b);nB(this,a,b,c);bv("yt-uix-button-menu-before-show",a,b);UA(b);d&&UA(d);
this.Ba(a,"button-menu-action",!0);K(a,X(this,"active"));b=v(this.Ee,this,a,!1);d=v(this.Ee,this,a,!0);c=v(this.sh,this,a,void 0);this.f&&kB(this,this.f)==kB(this,a)||jB(this);S("yt-uix-button-menu-show",a);Q(this.i);this.i=[P(document,"click",d),P(document,"contextmenu",b),P(window,"resize",c)];this.f=a}}};
function pB(a,b){if(b){var c=kB(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");VA(c);a.Ba(b,"button-menu-action",!1);var d=sB(a,b),e=mu(c).toString();delete a.g[e];N(function(){d&&d.parentNode&&(VA(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=G(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));lq(b,f);S("yt-uix-button-menu-hide",b);Q(a.i);a.i.length=0}}
h.sh=function(a,b){var c=kB(this,a);if(c){b&&(b instanceof Xc?qd(c,b):th(c,b));var d=!!this.C(a,"button-menu-fixed");nB(this,a,c,d)}};
function mB(a,b){return G(b.activeButtonNode||b.parentNode,X(a))}
h.Ee=function(a,b,c){c=Bu(c);var d=G(c,X(this));if(d){d=kB(this,d);var e=kB(this,a);if(d==e)return}d=G(c,X(this,"menu"));e=d==kB(this,a);var f=J(c,X(this,"menu-item")),g=J(c,X(this,"menu-close"));if(!d||e&&(f||g))pB(this,a),d&&b&&this.C(a,"button-menu-indicate-selected")&&((a=F(X(this,"content"),a))&&th(a,Bh(c)),uB(this,d,c))};
function uB(a,b,c){var d=X(a,"menu-item-selected");a=Vg(d,b);z(a,function(e){kq(e,d)});
K(c.parentNode,d)}
function kB(a,b){if(!b.widgetMenu){var c=a.C(b,"button-menu-id");c=c&&C(c);var d=X(a,"menu");c?jq(c,[d,X(a,"menu-external")]):c=F(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return J(a,X(this,"toggled"))};
h.toggle=function(a){if(this.C(a,"button-toggle")){var b=G(a,X(this,"group")),c=X(this,"toggled"),d=J(a,c);if(b&&this.C(b,"button-toggle-group")){var e=this.C(b,"button-toggle-group");b=Vg(X(this),b);z(b,function(f){f!=a||"optional"==e&&d?(kq(f,c),f.removeAttribute("aria-pressed")):(K(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),oq(a,c)}};
h.click=function(a){if(kB(this,a)){var b=kB(this,a);if(b){var c=mB(this,b);c&&c!=a?(pB(this,c),N(v(this.Fe,this,a),1)):SA(b)?pB(this,a):this.Fe(a)}a.focus()}this.Ba(a,"button-action")};
function jB(a){a.f&&pB(a,a.f)}
;function vB(a){W.call(this,a);this.i=null}
y(vB,W);h=vB.prototype;h.W=function(a){var b=W.prototype.W.call(this,a);return b?b:a};
h.register=function(){this.ia("yt-uix-kbd-nav-move-out-done",this.hide)};
h.dispose=function(){wB(this);vB.L.dispose.call(this)};
h.C=function(a,b){var c=vB.L.C.call(this,a,b);return c?c:(c=vB.L.C.call(this,a,"card-config"))&&(c=r(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.W(a);if(b){K(b,X(this,"active"));var c=xB(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;yB(this,a,c);var d=X(this,"card-visible"),e=this.C(a,"card-delegate-show")&&this.C(b,"card-action");this.Ba(b,"card-action",a);this.i=a;VA(c);N(v(function(){e||(UA(c),S("yt-uix-card-show",b,a,c));zB(c);K(c,d);S("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function xB(a,b,c){var d=c||b,e=X(a,"card");c=AB(a,d);var f=C(X(a,"card")+mu(d));if(f)return a=F(X(a,"card-body"),f),sh(a,c)||(lh(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+mu(d);iq(f,e);(d=a.C(d,"card-class"))&&jq(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.C(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;lh(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function yB(a,b,c){var d=a.C(b,"orientation")||"horizontal";var e=F(X(a,"anchor"),b)||b;var f=a.C(b,"position"),g=!!a.C(b,"force-position"),k=a.C(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var n=13;var t=8}else m&&!l?(n=12,t=9):!m&&l?(n=9,t=12):(n=8,t=13);var u=Hj(document.body);f=Hj(b);u!=f&&(n^=4);if(d){f=b.offsetHeight/2-12;var w=new Lg(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,w=new Lg(b.offsetWidth+6,-12);var E=
Ej(c);f=Math.min(f,(d?E.height:E.width)-24-6);6>f&&(f=6,d?w.y+=12-b.offsetHeight/2:w.x+=12-b.offsetWidth/2);E=null;g||(E=10);b=X(a,"card-flip");a=X(a,"card-reverse");mq(c,b,m);mq(c,a,l);E=Bs(e,n,c,t,w,null,E);!g&&E&&(E&48&&(m=!m,n^=4,t^=4),E&192&&(l=!l,n^=1,t^=1),mq(c,b,m),mq(c,a,l),Bs(e,n,c,t,w));k&&(e=parseInt(c.style.top,10),g=ah(document).y,rj(c,"position","fixed"),rj(c,"top",e-g+"px"));u&&(c.style.right="",e=Gj(c),e.left=e.left||parseInt(c.style.left,10),g=Zg(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=F("yt-uix-card-body-arrow",c);g=F("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!u&&m||u&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=F("yt-uix-card-arrow",c);m=F("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?Ej(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
h.hide=function(a){if(a=this.W(a)){var b=C(X(this,"card")+mu(a));b&&(kq(a,X(this,"active")),kq(b,X(this,"card-visible")),VA(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(lh(b.cardMask),b.cardMask=null))}};
function wB(a){a.i&&a.hide(a.i)}
h.rh=function(a,b){var c=this.W(a);if(c){if(b){var d=AB(this,c);if(!d)return;b instanceof Xc?qd(d,b):th(d,b)}J(c,X(this,"active"))&&(c=xB(this,a,c),yB(this,a,c),UA(c),zB(c))}};
h.isActive=function(a){return(a=this.W(a))?J(a,X(this,"active")):!1};
function AB(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.C(b,"card-id"))?C(c):F(d,b))||(c=document.createElement("div"));var f=c;kq(f,d);K(f,e);b.cardContentNode=c}return c}
function zB(a){var b=a.cardMask;b||(b=hh("IFRAME"),b.src='javascript:""',jq(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function BB(){W.call(this,"kbd-nav")}
var CB;y(BB,W);Da(BB);h=BB.prototype;h.register=function(){Y(this,"keydown",this.Ge);this.ia("yt-uix-kbd-nav-move-in",this.Pd);this.ia("yt-uix-kbd-nav-move-in-to",this.ag);this.ia("yt-uix-kbd-move-next",this.Qd);this.ia("yt-uix-kbd-nav-move-to",this.Ob)};
h.unregister=function(){Z(this,"keydown",this.Ge);Q(CB)};
h.Ge=function(a,b,c){var d=c.keyCode;if(a=G(a,X(this)))switch(d){case 13:case 32:this.Pd(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=lm(a,"kbdNavMoveOut");!c;){c=G(a.parentElement,X(this));if(!c)break a;c=lm(c,"kbdNavMoveOut")}c=C(c);this.Ob(c);S("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&J(a,X(this,"list")))switch(d){case 40:this.Qd(b,a);break;case 38:d=document.activeElement==a,a=DB(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),EB(this,a[b]))}c.preventDefault()}};
h.Pd=function(a){var b=lm(a,"kbdNavMoveIn");b=C(b);FB(this,a,b);this.Ob(b)};
h.ag=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}FB(this,d,a);this.Ob(a)};
h.Ob=function(a){if(a)if(yh(a))a.focus();else{var b=uh(a,function(c){return qh(c)?yh(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function FB(a,b,c){if(b&&c)if(K(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,km&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
h.Qd=function(a,b){var c=document.activeElement==b,d=DB(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),EB(this,d[c]))};
function EB(a,b){if(b){var c=Dh(b,"LI");c&&(K(c,X(a,"highlight")),CB=P(b,"blur",v(function(d){kq(d,X(this,"highlight"));Q(CB)},a,c)))}}
function DB(a){if("UL"!=a.tagName.toUpperCase())return[];a=Za(nh(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Za($a(a,function(b){return SA(b)?uh(b,function(c){return qh(c)?yh(c):!1}):!1}),function(b){return!!b})}
;function GB(){W.call(this,"menu");this.g=this.f=null;this.i={};this.A={};this.j=null}
y(GB,W);Da(GB);function HB(a){var b=GB.getInstance();if(J(a,X(b)))return a;var c=b.W(a);return c?c:G(a,X(b,"content"))==b.f?b.g:null}
h=GB.prototype;h.register=function(){Y(this,"click",this.He);Y(this,"mouseenter",this.xf);this.ia("page-scroll",this.Fh);this.ia("yt-uix-kbd-nav-move-out-done",function(a){a=this.W(a);IB(this,a)});
this.j=new Es};
h.unregister=function(){Z(this,"click",this.He);this.g=this.f=null;Q(ub(Db(this.i)));this.i={};yb(this.A,function(a){lh(a)},this);
this.A={};Wf(this.j);this.j=null;GB.L.unregister.call(this)};
h.He=function(a,b,c){a&&(b=JB(this,a),!b.disabled&&pu(c.target,b)&&KB(this,a))};
h.xf=function(a,b,c){a&&J(a,X(this,"hover"))&&(b=JB(this,a),pu(c.target,b)&&KB(this,a,!0))};
h.Fh=function(){this.f&&this.g&&LB(this,this.g,this.f)};
function LB(a,b,c){var d=MB(a,b);if(d){var e=Ej(c);if(e instanceof Ng){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Dj(e,!0);d.style.height=Dj(f,!0)}c==a.f&&(e=9,f=8,J(b,X(a,"reversed"))&&(e^=1,f^=1),J(b,X(a,"flipped"))&&(e^=4,f^=4),a=new Lg(0,1),d&&Bs(b,e,d,f,a,null,197),Bs(b,e,c,f,a,null,197))}
function KB(a,b,c){NB(a,b)&&!c?IB(a,b):(OB(a,b),!a.f||pu(b,a.f)?a.Ie(b):Fs(a.j,v(a.Ie,a,b)))}
h.Ie=function(a){if(a){var b=PB(this,a);if(b){bv("yt-uix-menu-before-show",a,b);if(this.f)pu(a,this.f)||IB(this,this.g);else{this.g=a;this.f=b;J(a,X(this,"sibling-content"))||(lh(b),document.body.appendChild(b));var c=JB(this,a).offsetWidth-2;b.style.minWidth=c+"px"}(c=MB(this,a))&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);kq(b,X(this,"content-hidden"));LB(this,a,b);jq(JB(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);S("yt-uix-menu-show",a);QB(b);RB(this,a);S("yt-uix-kbd-nav-move-in-to",
b);var d=v(this.Gh,this,a),e=v(this.Tf,this,a);c=Ia(a).toString();this.i[c]=[P(b,"click",e),P(document,"click",d)];J(a,X(this,"indicate-selected"))&&(d=v(this.Uf,this,a),this.i[c].push(P(b,"click",d)));J(a,X(this,"hover"))&&(a=v(this.yf,this,a),this.i[c].push(P(document,"mousemove",a)))}}};
h.yf=function(a,b){var c=Bu(b);if(c){var d=JB(this,a);pu(c,d)||SB(this,c)||TB(this,a)}};
h.Gh=function(a,b){var c=Bu(b);if(c){if(SB(this,c)){var d=G(c,X(this,"content")),e=Dh(c,"LI");e&&d&&sh(d,e)&&bv("yt-uix-menu-item-clicked",c);c=G(c,X(this,"close-on-select"));if(!c)return;d=HB(c)}IB(this,d||a)}};
function OB(a,b){if(b){var c=G(b,X(a,"content"));c&&(c=Vg(X(a),c),z(c,function(d){!pu(d,b)&&NB(this,d)&&TB(this,d)},a))}}
function IB(a,b){if(b){var c=[];c.push(b);var d=PB(a,b);d&&(d=Vg(X(a),d),d=nb(d),c=c.concat(d),z(c,function(e){NB(this,e)&&TB(this,e)},a))}}
function TB(a,b){if(b){var c=PB(a,b);lq(JB(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);K(c,X(a,"content-hidden"));var d=PB(a,b);d&&Xg(d,{"aria-expanded":"false"});(d=MB(a,b))&&d.parentNode&&lh(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.j&&a.j.la("ROOT_MENU_REMOVED"));S("yt-uix-menu-hide",b);c=Ia(b).toString();Q(a.i[c]);delete a.i[c]}}
h.Tf=function(a,b){var c=Bu(b);c&&UB(this,a,c)};
h.Uf=function(a,b){var c=Bu(b);if(c){var d=JB(this,a);if(d&&(c=Dh(c,"LI")))if(c=Bh(c).trim(),d.hasChildNodes()){var e=iB.getInstance();(d=F(X(e,"content"),d))&&th(d,c)}else th(d,c)}};
function RB(a,b){var c=PB(a,b);if(c){z(c.children,function(e){"LI"==e.tagName&&Xg(e,{role:"menuitem"})});
Xg(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ia(c),c.id=d);(c=JB(a,b))&&Xg(c,{"aria-controls":d})}}
function UB(a,b,c){var d=PB(a,b);d&&J(b,X(a,"checked"))&&(a=Dh(c,"LI"))&&(a=F("yt-ui-menu-item-checked-hid",a))&&(d=Vg("yt-ui-menu-item-checked",d),z(d,function(e){nq(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),nq(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function NB(a,b){var c=PB(a,b);return c?!J(c,X(a,"content-hidden")):!1}
function QB(a){a=Tg("UL",null,a);z(a,function(b){b.tabIndex=0;var c=BB.getInstance();jq(b,[X(c),X(c,"list")])})}
function PB(a,b){var c=V(b,"menu-content-id");return c&&(c=C(c))?(jq(c,[X(a,"content"),X(a,"content-external")]),c):b==a.g?a.f:F(X(a,"content"),b)}
function MB(a,b){var c=Ia(b).toString(),d=a.A[c];if(!d){d=hh("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];z(hq(b),function(f){e.push(f+"-mask")});
jq(d,e);a.A[c]=d}return d||null}
function JB(a,b){return F(X(a,"trigger"),b)}
function SB(a,b){return pu(b,a.f)||pu(b,a.g)}
;function VB(){vB.call(this,"clickcard");this.f={};this.g={}}
y(VB,vB);Da(VB);h=VB.prototype;h.register=function(){VB.L.register.call(this);Y(this,"click",this.hd,"target");Y(this,"click",this.ed,"close")};
h.unregister=function(){VB.L.unregister.call(this);Z(this,"click",this.hd,"target");Z(this,"click",this.ed,"close");for(var a in this.f)Q(this.f[a]);this.f={};for(a in this.g)Q(this.g[a]);this.g={}};
h.hd=function(a,b,c){c.preventDefault();b=Dh(c.target,"button");b&&b.disabled||(a=(b=this.C(a,"card-target"))?Sg(b):a,b=this.W(a),this.C(b,"disabled")||(J(b,X(this,"active"))?(this.hide(a),kq(b,X(this,"active"))):(this.show(a),K(b,X(this,"active")))))};
h.show=function(a){VB.L.show.call(this,a);var b=this.W(a),c=Ia(a).toString();if(!V(b,"click-outside-persists")){if(this.f[c])return;b=P(document,"click",v(this.jd,this,a));var d=P(window,"blur",v(this.jd,this,a));this.f[c]=[b,d]}a=P(window,"resize",v(this.rh,this,a,void 0));this.g[c]=a};
h.hide=function(a){VB.L.hide.call(this,a);a=Ia(a).toString();var b=this.f[a];b&&(Q(b),this.f[a]=null);if(b=this.g[a])Q(b),delete this.g[a]};
h.jd=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=G(b.target,c)||G(HB(b.target),c));(d=d||G(document.activeElement,c)||(document.activeElement?G(HB(document.activeElement),c):null))||this.hide(a)};
h.ed=function(a){(a=G(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function WB(){vB.call(this,"hovercard")}
y(WB,vB);Da(WB);h=WB.prototype;h.register=function(){Y(this,"mouseenter",this.Jd,"target");Y(this,"mouseleave",this.Ld,"target");Y(this,"mouseenter",this.Kd,"card");Y(this,"mouseleave",this.Md,"card")};
h.unregister=function(){Z(this,"mouseenter",this.Jd,"target");Z(this,"mouseleave",this.Ld,"target");Z(this,"mouseenter",this.Kd,"card");Z(this,"mouseleave",this.Md,"card")};
h.Jd=function(a){if(XB!=a){XB&&(this.hide(XB),XB=null);var b=v(this.show,this,a),c=parseInt(this.C(a,"delay-show"),10);b=N(b,-1<c?c:200);kz(a,"card-timer",b.toString());XB=a;a.alt&&(kz(a,"card-alt",a.alt),a.alt="");a.title&&(kz(a,"card-title",a.title),a.title="")}};
h.Ld=function(a){var b=parseInt(this.C(a,"card-timer"),10);O(b);this.W(a).isCardHidable=!0;b=parseInt(this.C(a,"delay-hide"),10);b=-1<b?b:200;N(v(this.Gf,this,a),b);if(b=this.C(a,"card-alt"))a.alt=b;if(b=this.C(a,"card-title"))a.title=b};
h.Gf=function(a){this.W(a).isCardHidable&&(this.hide(a),XB=null)};
h.Kd=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.Md=function(a){a&&this.hide(a.cardTargetNode)};
var XB=null;function YB(a,b,c,d,e,f){this.f=a;this.G=null;this.i=F("yt-dialog-fg",this.f)||this.f;if(a=F("yt-dialog-title",this.i)){var g="yt-dialog-title-"+Ia(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.O=F("yt-dialog-focus-trap",this.f);this.T=!1;this.j=new Es;this.B=[];this.B.push(Du(this.f,"click",v(this.rg,this),"yt-dialog-dismiss"));this.B.push(P(this.O,"focus",v(this.bf,this),!0));ZB(this,"content");this.V=b;this.ca=c;this.Z=d;this.M=
e;this.ka=f;this.J=this.F=this.A=null}
var $B={LOADING:"loading",fi:"content",jj:"working"};function aC(a,b,c){a.R()||a.j.subscribe((c?"pre-":"post-")+"all",b)}
function ZB(a,b){var c=F("yt-dialog-fg-content",a.f),d=[];yb($B,function(e){d.push("yt-dialog-show-"+e)});
lq(c,d);K(c,"yt-dialog-show-"+b)}
h=YB.prototype;
h.show=function(a){if(!this.R()){this.G=document.activeElement;if(!this.Z){this.g||(this.g=C("yt-dialog-bg"),this.g||(this.g=hh("div"),this.g.id="yt-dialog-bg",iq(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var b=window,c=b.document;var d=0;if(c){d=c.body;var e=c.documentElement;if(e&&d)if(b=Zg(b).height,$g(c)&&e.scrollHeight)d=e.scrollHeight!=b?e.scrollHeight:e.offsetHeight;else{c=e.scrollHeight;var f=e.offsetHeight;e.clientHeight!=f&&(c=d.scrollHeight,f=d.offsetHeight);d=c>b?c>f?
c:f:c<f?c:f}else d=0}this.g.style.height=d+"px";UA(this.g)}this.Cd();d=bC(this);cC(d);this.A=P(document,"keydown",v(this.Rf,this));d=this.f;e=R("player-added",this.Cd,this);kz(d,"player-ready-pubsub-key",e);this.ca&&(this.F=P(document,"click",v(this.Ug,this)));UA(this.f);this.i.setAttribute("tabindex","0");dC(this);this.M||K(document.body,"yt-dialog-active");jB(iB.getInstance());wB(VB.getInstance());wB(WB.getInstance());this.J=a;S("yt-ui-dialog-show-complete",this)}};
function eC(){var a=Vg("yt-dialog");return cb(a,function(b){return SA(b)})}
h.Cd=function(){if(!this.ka){var a=this.f;mq(document.body,"hide-players",!0);a&&mq(a,"preserve-players",!0)}};
function bC(a){var b=Tg("iframe",null,a.f);z(b,function(c){var d=V(c,"onload");d&&(d=r(d))&&P(c,"load",d);if(d=V(c,"src"))c.src=d},a);
return nb(b)}
function cC(a){z(document.getElementsByTagName("iframe"),function(b){-1==Xa(a,b)&&K(b,"iframe-hid")})}
function fC(){var a=Vg("iframe-hid");z(a,function(b){kq(b,"iframe-hid")})}
h.rg=function(a){a=a.currentTarget;a.disabled||(a=V(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.R()){this.j.la("pre-all");this.j.la("pre-"+a);VA(this.f);wB(VB.getInstance());wB(WB.getInstance());this.i.setAttribute("tabindex","-1");eC()||(VA(this.g),this.M||kq(document.body,"yt-dialog-active"),su(),fC());this.A&&(Q(this.A),this.A=null);this.F&&(Q(this.F),this.F=null);var b=this.f;if(b){var c=V(b,"player-ready-pubsub-key");c&&(av(c),mz(b,"player-ready-pubsub-key"))}this.j.la("post-all");S("yt-ui-dialog-hide-complete",this);"cancel"==a&&S("yt-ui-dialog-cancelled",
this);this.j&&this.j.la("post-"+a);this.J=null;this.G&&this.G.focus()}};
h.setTitle=function(a){th(F("yt-dialog-title",this.f),a)};
h.Rf=function(a){N(v(function(){this.V||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&J(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.Ug=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.R=function(){return this.T};
h.dispose=function(){SA(this.f)&&this.dismiss("dispose");Q(this.B);this.B.length=0;N(v(function(){this.G=null},this),0);
this.O=this.i=null;this.j.dispose();this.j=null;this.T=!0};
h.bf=function(a){a.stopPropagation();dC(this)};
function dC(a){N(v(function(){this.i&&this.i.focus()},a),0)}
q("yt.ui.Dialog",YB,void 0);function gC(a){ft.call(this,a);this.ca=[];this.Aa=[]}
y(gC,ft);function hC(a,b,c,d,e,f){b=Du(f||a.uc(),b,v(d,e||a),c);a.ca.push(b)}
gC.prototype.Na=function(){z(this.ca,Q);av(this.Aa);gC.L.Na.call(this)};
gC.prototype.ia=function(a,b){var c=R(a,v(b,this));this.Aa.push(c)};function iC(){W.call(this,"form-input")}
y(iC,W);Da(iC);h=iC.prototype;
h.register=function(){B&&!Qe(9)&&(Y(this,"click",this.Qa,"checkbox"),Y(this,"keypressed",this.Qa,"checkbox"),Y(this,"click",this.dc,"radio"),Y(this,"keypressed",this.dc,"radio"));B&&!Qe(10)&&Y(this,"click",this.zd,"placeholder");Y(this,"change",this.Qa,"checkbox");Y(this,"blur",this.Yc,"select-element");Y(this,"change",this.Sa,"select-element");Y(this,"keyup",this.Sa,"select-element");Y(this,"focus",this.pd,"select-element");Y(this,"keyup",this.mb,"text");Y(this,"keyup",this.mb,"textarea");Y(this,
"keyup",this.mb,"bidi");Y(this,"click",this.Cf,"reset")};
h.unregister=function(){B&&!Qe(9)&&(Z(this,"click",this.Qa,"checkbox"),Z(this,"keypressed",this.Qa,"checkbox"),Z(this,"click",this.dc,"radio"),Z(this,"keypressed",this.dc,"radio"));B&&!Qe(10)&&Z(this,"click",this.zd,"placeholder");Z(this,"change",this.Qa,"checkbox");Z(this,"blur",this.Yc,"select-element");Z(this,"change",this.Sa,"select-element");Z(this,"keyup",this.Sa,"select-element");Z(this,"focus",this.pd,"select-element");Z(this,"keyup",this.mb,"text");Z(this,"keyup",this.mb,"textarea");Z(this,
"keyup",this.mb,"bidi");iC.L.unregister.call(this)};
h.Qa=function(a){var b=G(a,X(this,"checkbox-container"));a.checked&&J(b,"partial")&&(a.checked=!1,a.indeterminate=!1,kq(b,"partial"));mq(b,"checked",a.checked)};
h.Zg=function(a){var b=G(a,X(this,"radio-container"));b&&mq(b,"checked",a.checked)};
h.dc=function(){jC()};
h.mb=function(a){var b=a.value;Yb.test(b)?a.dir="rtl":Xb.test(b)?a.dir="ltr":a.removeAttribute("dir");B&&!Qe(10)&&(b=G(a,X(this,"container")))&&mq(b,X(this,"non-empty"),!!a.value)};
h.zd=function(a){(a=G(a,X(this,"container")))&&(a=hB(this,"text",a)||hB(this,"textarea",a))&&a.focus()};
h.pd=function(a){var b=G(a,X(this,"select"));K(b,"focused");this.Sa(a)};
h.Yc=function(a){var b=G(a,X(this,"select"));kq(b,"focused");this.Sa(a)};
h.Sa=function(a){var b=G(a,X(this,"select")),c=F(X(this,"select-value"),b),d=kC(a);if(d)for(""!=c.innerHTML&&d.innerHTML!=c.innerHTML&&this.Ba(a,"onchange-callback"),d=ou(d),kh(c);0<d.childNodes.length;)c.appendChild(d.childNodes[0]);mq(b,X(this,"select-disabled"),a.disabled)};
h.Cf=function(){var a=iC.getInstance(),b=Vg(X(a,"checkbox"));z(b,a.Qa,a);jC();lC()};
function kC(a){return a.options[Math.max(a.selectedIndex,0)]}
function mC(a,b){a.checked=b;iC.getInstance().Qa(a)}
function jC(){var a=iC.getInstance(),b=Vg(X(a,"radio"));z(b,a.Zg,a)}
function lC(){var a=iC.getInstance(),b=Vg(X(a,"select-element"));z(b,a.Sa,a)}
function nC(){var a;return(a=(oC||document).querySelector('input[type="radio"][name="overlay-confirmation-preferences-update-frequency"]:checked'))?a.value:null}
;function pC(a,b){YB.call(this,a,!0,!1);this.Ea=b;this.l=rh(a);this.D=null}
sa(pC,YB);pC.prototype.show=function(a){YB.prototype.show.call(this,a);this.D=new qC(this.Ea,this.na.bind(this));ht(this.D,this.f)};
pC.prototype.dismiss=function(a){YB.prototype.dismiss.call(this,a);this.D=null;lh(this.l)};
pC.prototype.na=function(a,b){var c=this,d=rh(this.l);mh(a,this.l);this.l=oh(d);d=F("yt-dialog",d);d=new YB(d,!1,!1);aC(d,function(e){lh(c.l);b(e)},!0);
d.show()};
function qC(a,b){gC.call(this);this.Ea=a;this.M=b;this.f=this.D=this.i=this.l=this.A=null}
sa(qC,gC);h=qC.prototype;
h.hb=function(){gC.prototype.hb.call(this);this.A=gt(this,"legal-report-details-form-renderer-description");this.l=gt(this,"legal-report-details-form-renderer-issue-type-select");this.i=gt(this,"legal-report-details-form-renderer-affiliation-select");this.D=gt(this,"legal-report-details-form-renderer-name");this.f=gt(this,"legal-report-details-form-renderer-submit-button");hC(this,"keyup","legal-report-details-form-renderer-description",this.Sb.bind(this));hC(this,"change","legal-report-details-form-renderer-issue-type-select",
this.Sb.bind(this));hC(this,"change","legal-report-details-form-renderer-affiliation-select",this.Sb.bind(this));hC(this,"click","yt-dialog-content",this.Sb.bind(this));hC(this,"click","legal-report-details-form-renderer-submit-button",this.Yf.bind(this));lC()};
h.Na=function(){this.f=this.D=this.i=this.l=this.A=null;gC.prototype.Na.call(this)};
h.Yf=function(){var a=V(this.f,"flag-url"),b=V(this.f,"flag-action"),c=this.A.value,d=parseInt(this.l.options[this.l.selectedIndex].value||"0",10),e=parseInt(this.i.options[this.i.selectedIndex].value||"0",10),f=this.D.value;a&&b&&c&&d&&e&&(b={flagging_action:b,report_issue:d,report_affiliation:e,report_description:c},f&&(b.report_full_name=f),this.f.disabled=!0,Yt(a,{format:"JSON",method:"POST",Ia:!0,onSuccess:this.Lg.bind(this),onError:this.Kg.bind(this),P:b}))};
h.Lg=function(a,b){var c=this;this.f.disabled=!1;if(b.html_content){var d=ih(b.html_content);this.M(d,function(){S("commentreported",c.Ea,b.feedback_text)})}else S("commentreported",this.Ea,b.feedback_text)};
h.Kg=function(){this.f.disabled=!1};
h.Sb=function(){this.f.disabled=this.A&&this.l&&this.i&&this.A.value&&this.l.selectedIndex&&this.i.selectedIndex?!1:!0};function rC(a){gC.call(this);this.V=this.O=this.M=this.Y=null;this.Ea=a;this.i=this.D=this.T=this.l=this.f=this.A=this.he=null}
y(rC,gC);function sC(a){if("radio"==a.type)return a=G(a,"option-selectable-item-renderer-radio-container"),F("option-selectable-item-renderer-confirm-dialog",a);a=kC(a);return C(a?a.value||a.text:null)}
function tC(a){a=Dh(a,"LI");return F("option-item-supported-renderers-sub-options",a)}
h=rC.prototype;h.tg=function(a){a=a.target;lC();if(this.f){kq(this.f,"option-selectable-item-renderer-radio-selected");var b=tC(this.f);b&&VA(b)}this.l=null;this.f=a;K(this.f,"option-selectable-item-renderer-radio-selected");(a=tC(this.f))?(UA(a),a=F("yt-uix-form-input-select-element",a),a=!!V(kC(a),"disable-submit"),uC(this,a)):uC(this,!1);this.D&&(F("yt-uix-form-input-checkbox",this.D).checked=!1,mq(this.D,"checked",!1));VA(this.i);UA(this.A);vC(this,this.f)};
function wC(a){if(a.M&&a.O){var b={flagging_action:a.M};Yt(a.O,{format:"JSON",method:"POST",Ia:!0,onSuccess:v(function(c,d){d.feedback_text&&(this.he=d.feedback_text);if(d.html_content){var e=ih(d.html_content);this.Y?mh(e,this.Y):document.body.appendChild(e);e=new YB(C("flagging-response-message-dialog"),!1,!0);aC(e,v(this.Zb,this),!0);e.show()}else this.Zb()},a),
onError:v(function(){uC(this,!1)},a),
P:b})}else xC(a)}
function xC(a){if(a.V){var b={feedback_tokens:a.V};Yt("/feed_change_ajax?action_give_feedback=1",{format:"JSON",method:"POST",Ia:!0,onSuccess:v(function(c,d){if(d.feedback_responses){var e=new YB(this.Y,!1,!0);aC(e,v(this.Zb,this),!0);e.dismiss("close");yC(this,d)}else this.Zb()},a),
onError:v(function(){uC(this,!1)},a),
P:b})}}
function yC(a,b){var c=F("service-endpoint-replace-enclosing-action-notification",a.Ea);var d=a.Ea;var e=G(d,"yt-lockup"),f=G(d,"feed-item-container");if(e){var g=F("yt-lockup-notifications-container",e);d=F("yt-lockup-dismissable",e)}else if(f)g=F("feed-item-dismissal-notices",f),d=F("feed-item-dismissable",f);else return;g&&c&&(kh(g),jh(g,c));var k;g&&(k=function(){UA(g);c&&UA(c)});
d?zC(d,k):k&&k();S("yt-dom-content-change",e||f);e=document.createElement("div");b.feedback_responses.length?(k=b.feedback_responses[0].follow_up_confirmation_html,qd(e,k)):e.textContent="Thanks for the report";e.className="follow-up-confirmation hid";k=F("replace-enclosing-action-options",c);c.insertBefore(e,c.firstChild);c.removeChild(k);e=F("replace-enclosing-action-message",c);K(e,"hid");e=F("follow-up-confirmation",c);kq(e,"hid")}
function zC(a,b){VA(a);b&&b();S("yt-dom-content-change",a)}
h.Eh=function(){uC(this,!0);this.O=V(this.f,"flag-url");this.M=V(this.f,"flag-action");this.V=V(this.f,"feedback-token");var a=sC(this.f),b=tC(this.f);b&&(a=F("yt-uix-form-input-select-element",b),a=sC(a));a?(this.Y?mh(a,this.Y):document.body.appendChild(a),b=new YB(a,!1,!0),hC(this,"click","option-selectable-item-renderer-confirm-button",this.qg,null,a),b.show()):wC(this)};
h.qg=function(a){var b=G(a.target,"option-selectable-item-renderer-confirm-button"),c=V(b,"url");a=V(b,"flag-action");b=V(b,"flag-url");if(c){var d=Ac(c)||Cc;d=wc(d);c!=d&&tt(Error("Unsafe window.open URL: "+c));c=d;window.open(c,Id(c).toString(36))}a&&b&&(this.M=a,this.O=b);wC(this)};
h.Zb=function(){S("commentreported",this.Ea,this.he)};
h.jg=function(a){this.l=kC(a.target);vC(this,this.l);a=!!V(this.l,"disable-submit");uC(this,a)};
h.pg=function(a){a.target.checked?(VA(this.A),UA(this.i)):(VA(this.i),UA(this.A))};
function uC(a,b){a.A.disabled=b;a.i&&(a.i.disabled=b)}
h.sg=function(){uC(this,!0);var a=V(this.i,"flag-url"),b=V(this.l?this.l:this.f,"flag-action");a&&b?(b={flagging_action:b,flagging_checkbox_checked:1},Yt(a,{format:"JSON",method:"POST",Ia:!0,onSuccess:v(function(c,d){if(d.html_content&&this.Y){var e=ih(d.html_content),f=rh(rh(this.Y));mh(e,rh(this.Y));this.Y=e=F("yt-dialog",f);(new pC(e,this.Ea)).show()}else uC(this,!1)},this),
onError:v(function(){uC(this,!1)},this),
P:b})):uC(this,!1)};
function vC(a,b){b&&(V(b,"action-legal-checkbox-show")?UA(a.T):V(b,"action-legal-checkbox-hide")&&VA(a.T))}
h.hb=function(){rC.L.hb.call(this);this.A=gt(this,"options-renderer-submit-button");this.Y=G(this.A,"yt-dialog");this.T=gt(this,"legal-report-checkbox-container");this.D=gt(this,"legal-report-checkbox");this.i=gt(this,"report-form-modal-renderer-next-button");hC(this,"click","options-renderer-submit-button",this.Eh);hC(this,"click","option-selectable-item-renderer-radio",this.tg);hC(this,"change","yt-uix-form-input-select-element",this.jg);hC(this,"click","legal-report-checkbox",this.pg);hC(this,
"click","report-form-modal-renderer-next-button",this.sg)};
h.Na=function(){this.i=this.D=this.T=this.Ea=this.l=this.f=this.A=this.Y=null;rC.L.Na.call(this)};function AC(a){YB.call(this,a,!1,!0);this.na=C("report-form-modal-renderer");this.l=null;this.f=a}
y(AC,YB);AC.prototype.D=function(){this.dismiss("close")};
AC.prototype.show=function(a){AC.L.show.call(this,a);this.l=new rC(this.J);a=F("yt-dialog-fg-content",this.f);ht(this.l,a);$u("yt-ui-dialog-hide-complete",v(this.D,this))};
AC.prototype.dismiss=function(a){AC.L.dismiss.call(this,a);this.l&&(this.l=null);lh(this.na)};function BC(){W.call(this,"report-thumb-wrap");this.f=null;this.g=!1}
sa(BC,W);BC.prototype.register=function(){Y(this,"click",this.i)};
BC.prototype.unregister=function(){Z(this,"click",this.i);W.prototype.unregister.call(this)};
BC.prototype.i=function(a){var b=HB(a);b=G(b,"yt-lockup");this.f=dh("DIV",{"class":"video-renderer-abuse"});var c=dh("DIV",{"class":"video-renderer-abuse-content"});this.f.appendChild(c);b.appendChild(this.f);CC(this,oh(this.f),a,b);UA(this.f)};
function CC(a,b,c,d){if(!a.g){var e=V(c,"url");(c=V(c,"params"))&&e&&(c={params:c},a.g=!0,Yt(e,{format:"JSON",method:"POST",Ia:!0,onSuccess:function(f,g){a.g=!1;if(!C("report-form-modal-renderer")){var k=ih(g.html_content);b.appendChild(k);k=F("yt-dialog",C("report-form-modal-renderer"));(new AC(k)).show(d)}},
onError:function(){a.g=!1},
P:c}))}}
Da(BC);function DC(){W.call(this,"overlay");this.j=this.g=this.i=this.f=null}
y(DC,W);Da(DC);h=DC.prototype;h.register=function(){Y(this,"click",this.Nc,"target");Y(this,"click",this.hide,"close");EC(this)};
h.unregister=function(){DC.L.unregister.call(this);Z(this,"click",this.Nc,"target");Z(this,"click",this.hide,"close");this.j&&(av(this.j),this.j=null);this.g&&(Q(this.g),this.g=null)};
h.Nc=function(a){if(!this.f||!SA(this.f.f)){var b=this.W(a);a=FC(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.C(b,"disable-shortcuts")||!1,d=!!this.C(b,"disable-outside-click-dismiss")||!1;this.f=new YB(a,c);this.i=b;var e=F("yt-dialog-fg",a);if(e){var f=this.C(b,"overlay-class")||"",g=this.C(b,"overlay-style")||"default",k=this.C(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,k));jq(e,f)}this.f.show();S("yt-uix-kbd-nav-move-to",e||a);EC(this);c||
d||(c=v(function(l){J(l.target,"yt-dialog-base")&&GC(this)},this),a=F("yt-dialog-base",a),this.g=P(a,"click",c));
this.Ba(b,"overlay-shown");S("yt-uix-overlay-shown",b)}}};
function EC(a){a.j||(a.j=R("yt-uix-overlay-hide",HC));a.f&&aC(a.f,function(){var b=DC.getInstance();b.i=null;b.f.dispose();b.f=null})}
function GC(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.Ba(b,"overlay-hidden");a.i=null;a.g&&(Q(a.g),a.g=null);a.f=null}}
function FC(a,b){var c;if(a)if(c=F("yt-dialog",a)){var d=C("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=G(b,"yt-dialog"));return c}
function IC(){var a=DC.getInstance();if(a.i)a=F("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=Vg("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=G(a[b],"yt-dialog");if(SA(c)){a=a[b];break a}}a=null}return a}
h.hide=function(a){a&&a.disabled||S("yt-uix-overlay-hide")};
function HC(){GC(DC.getInstance())}
h.show=function(a){this.Nc(a)};function JC(){W.call(this,"char-counter")}
y(JC,W);Da(JC);JC.prototype.register=function(){Y(this,"keydown",this.f,"input");Y(this,"paste",this.f,"input");Y(this,"cut",this.f,"input");Y(this,"blur",this.f,"input")};
JC.prototype.unregister=function(){Z(this,"keydown",this.f,"input");Z(this,"paste",this.f,"input");Z(this,"cut",this.f,"input");Z(this,"blur",this.f,"input")};
JC.prototype.f=function(a){var b=this.W(a);if(b){var c="true"==this.C(b,"count-char-by-size"),d=parseInt(this.C(b,"char-limit"),10);isNaN(d)||0>=d||N(v(function(){var e="true"==this.C(b,"use-plaintext-length");KC(a,c,e);var f=parseInt(this.C(b,"warn-at-chars-remaining"),10);isNaN(f)&&(f=0);var g=d-LC(a,c,e);mq(b,X(this,"maxed-out"),g<f);mq(b,X(this,"maxed-out-singular"),1==Math.abs(g));"true"==this.C(b,"maxed-out-as-positive")&&(g=Math.abs(g));e=Vg(X(this,"remaining"),b);z(e,function(k){th(k,g)})},
this),0)}};
function KC(a,b,c){var d=parseInt(a.getAttribute("maxlength"),10);if(!isNaN(d)){var e=LC(a,b,c);if(b){if(e>d){b=a.value;c=b.length;var f=0;d=e-d;e="";do{e+=b[c-f];var g=unescape(encodeURIComponent(e)).length;f++}while(g<d);a.value=a.value.substring(0,c-f)}}else e>d&&(a.value=a.value.substring(0,d))}}
function LC(a,b,c){a=a.value;c&&(a=vq(a));return b?unescape(encodeURIComponent(a)).length:a.length}
;function MC(){W.call(this,"close")}
y(MC,W);Da(MC);MC.prototype.register=function(){Y(this,"click",this.f)};
MC.prototype.unregister=function(){Z(this,"click",this.f)};
MC.prototype.f=function(a){var b,c=this.C(a,"close-parent-class"),d=this.C(a,"close-parent-id");d?b=C(d):c&&(b=G(a,c));b&&(VA(b),c=this.C(a,"close-focus-target-id"))&&(c=C(c))&&(d=iB.getInstance(),d.isToggled(c)&&d.toggle(c),c.focus());this.Ba(a,"close-callback",b)};function NC(){W.call(this,"expander")}
y(NC,W);Da(NC);NC.prototype.register=function(){Y(this,"click",this.f,"head");Y(this,"keypress",this.g,"head")};
NC.prototype.unregister=function(){Z(this,"click",this.f,"head");Z(this,"keypress",this.g,"head")};
NC.prototype.f=function(a){OC(this,a)};
NC.prototype.g=function(a,b,c){c&&13==c.keyCode&&OC(this,a)};
function OC(a,b){var c=a.W(b);if(c){c&&(yh(c)||Xg(c,{tabIndex:"0"}),c.focus());oq(c,X(a,"collapsed"));var d=!J(c,X(a,"collapsed"));S("yt-uix-expander-toggle",c,d);S("yt-dom-content-change",c);a.Ba(c,"expander-action")}}
;function PC(){W.call(this,"languagepicker");this.f={}}
y(PC,W);Da(PC);h=PC.prototype;h.register=function(){Y(this,"click",this.yd,"menu-item");Y(this,"keyup",this.ne,"search-input");Y(this,"keydown",this.Bd,"search-input");Y(this,"blur",this.Ad,"search-input");Y(this,"focus",this.xd);this.ia("yt-uix-button-menu-before-show",this.wf);this.ia("yt-uix-button-menu-hide",this.vf)};
h.unregister=function(){Z(this,"click",this.yd,"menu-item");Z(this,"keyup",this.ne,"search-input");Z(this,"keydown",this.Bd,"search-input");Z(this,"blur",this.Ad,"search-input");Z(this,"focus",this.xd);Q(Db(this.f));this.f={};PC.L.unregister.call(this)};
h.wf=function(a){if(J(a,"yt-languagepicker-button")){var b=Ia(a);a=P(a,"keydown",v(this.rf,this));this.f[b]=a}};
h.vf=function(a){J(a,"yt-languagepicker-button")&&(a=Ia(a),Q(this.f[a]),delete this.f[a])};
function QC(a,b){return db(b,function(c){return!db(a,function(d){return 0!=d.lastIndexOf(c,0)})})}
function RC(a,b,c){z(a,function(d){var e=lm(d,"value"),f=SC(d);RA(d,e!=c&&f&&QC(f,b))})}
function SC(a){if("undefined"===typeof a.f){var b=lm(a,"searchTerms");b?(a.f=[],z(b.split(";"),function(c){ob(a.f,TC(c))})):a.f=TC(Bh(a))}return a.f}
function TC(a){return a.toLowerCase().match(/[^ \(\)\[\]]+/g)||[]}
function UC(a,b){var c=iB.getInstance(),d=mB(c,a);oB(c,a);qB(c,d,b)}
h.ne=function(a){var b=this.W(a),c=hB(this,"search-result",b),d=TC(a.value);if(d){var e=nh(c);a=lm(b,"fallbackOption");RC(e,d,a);d=eb(e,SA);a=c.querySelector('li[data-value="'+a+'"]');RA(c,!(!d&&!a));d?UC(b,d):a&&(UA(a),UC(b,a))}else RA(c,!1)};
h.Bd=function(a,b,c){b=iB.getInstance();a=this.W(a);var d=mB(b,a);switch(c.keyCode){case 13:case 9:(b=oB(b,a))&&Eu(oh(b),"click");c.preventDefault();break;case 27:oB(b,a);pB(b,d);c.preventDefault();break;case 38:case 40:d.focus(),c.preventDefault()}};
h.yd=function(a){var b=lm(a,"value"),c=this.W(a),d=lm(c,"languagepickerInputId");d=C(d);d.value=b;Eu(d,"change");(d=hB(this,"suggestions",c))&&!d.querySelector('li[data-value="'+b+'"]')&&((b=hB(this,"selected",c))&&lh(b),a=a.cloneNode(!0),K(a,X(this,"selected")),d.insertBefore(a,d.childNodes[0]||null))};
function VC(a,b){var c=iB.getInstance(),d=a.W(b);mB(c,d).focus()}
h.Ad=function(a){VC(this,a)};
h.xd=function(a,b,c){"INPUT"!=c.target.tagName&&VC(this,a)};
h.rf=function(a){if(38!=a.keyCode&&40!=a.keyCode){var b=a.target,c=iB.getInstance();b=kB(c,b);b=hB(this,"search-input",b);13!=a.keyCode&&9!=a.keyCode&&32!=a.keyCode&&(b.value="");b.focus()}};var WC;function XC(){if(void 0===WC){var a=document.createElement("div");void 0!==a.style.MozTransition?WC="Moz":void 0!==a.style.WebkitTransition?WC="Webkit":void 0!==a.style.f?WC="O":WC=null}return WC}
;function YC(a,b){Lz.call(this,a,b)}
y(YC,Lz);function ZC(a,b,c){b=XC()+b;a.el.style[b]=c}
YC.prototype.play=function(){this.el.style.opacity=this.g;N(v(function(){ZC(this,"TransitionTimingFunction",this.Oc);ZC(this,"TransitionDuration",this.duration+"s");ZC(this,"TransitionProperty","opacity");Fu(this.el,xe?"webkitTransitionEnd":te?"oTransitionEnd":"transitionend",v(function(){ZC(this,"TransitionTimingFunction","");ZC(this,"TransitionDuration","");ZC(this,"TransitionProperty","");this.Vb&&this.Vb(this)},this));
this.el.style.opacity=this.f},this),20)};function $C(a,b){this.A=1;this.l=0;this.j=!1;Mz.call(this,a,b)}
y($C,Mz);$C.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.A=isNaN(b)?1:b;this.l=isNaN(c)?0:c;this.j=void 0===this.el.style.opacity;$C.L.setup.call(this,a)};
$C.prototype.ga=function(){this.j&&1==this.l&&(this.el.style.filter="")};
function aD(a,b){this.g=1;this.f=0;Lz.call(this,a,b)}
y(aD,YC);aD.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.g=isNaN(b)?1:b;this.f=isNaN(c)?0:c;aD.L.setup.call(this,a)};function bD(a,b,c){var d={duration:.5};d.start=b;d.end=c;XC()?new aD(a,d):new $C(a,d)}
;function cD(a){hy.call(this,1,arguments);this.csn=a}
sa(cD,hy);var ry=new iy("screen-created",cD),dD=[],eD=0;function fD(a,b,c){dD.push({payloadName:a,payload:b,options:c});eD||(eD=py())}
function qy(a){if(dD){for(var b=ja(dD),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Bv(c.payloadName,c.payload,null,c.options));dD.length=0}eD=0}
;function gD(a,b){var c=M("use_default_events_client")?void 0:Pv;z(b,function(d){var e=!0;e=void 0===e?!1:e;d={csn:a,ve:fw(d),eventType:e?16:8};e={md:mw(a),ec:a,Ye:e};"UNDEFINED_CSN"==a?fD("visualElementHidden",d,e):c?Bv("visualElementHidden",d,c,e):Qv("visualElementHidden",d,e)})}
;function hD(){W.call(this,"mouseover-img-wrap");this.j=this.f=!1;this.G=this.A=this.g=-1;this.i=""}
y(hD,W);Da(hD);var iD=0,jD=0;h=hD.prototype;h.register=function(){Y(this,"mouseover",this.ub);Y(this,"focusin",this.ub);Y(this,"focus",this.ub);Y(this,"mouseout",this.tb);Y(this,"focusout",this.tb);Y(this,"blur",this.tb);Y(this,"click",this.Je);Y(this,"mousedown",this.Nd)};
h.unregister=function(){O(iD);O(jD);Z(this,"mouseover",this.ub);Z(this,"focusin",this.ub);Z(this,"focus",this.ub);Z(this,"mouseout",this.tb);Z(this,"focusout",this.tb);Z(this,"blur",this.tb);Z(this,"click",this.Je);Z(this,"mousedown",this.Nd);hD.L.unregister.call(this)};
function kD(a){a=a.getElementsByTagName("img");return 0<a.length?a[0]:null}
function lD(a){return(a=a.match(/\/([a-zA-Z0-9_-]{11})\//))?a[1]:""}
function mD(a,b){if(a.j){var c={isMovingThumbnail:a.f};if(a.f&&0<a.g){var d=a.G-a.A;0<a.A&&0<d&&(c.movingThumbnailLoadingDurationMs=Math.round(d));c.durationHoveredMs=Math.round(Ku()-a.g)}a.i&&(c.videoId=a.i);d=kw();var e=V(b,"visibility-tracking");if(d&&e){var f={thumbnailHoveredData:c};c=M("use_default_events_client")?void 0:Pv;e={csn:d,ve:fw(new ew({trackingParams:e})),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_HOVER"};f&&(e.clientData=f);f={md:mw(d),ec:d};"UNDEFINED_CSN"==d?fD("visualElementGestured",
e,f):c?Bv("visualElementGestured",e,c,f):Qv("visualElementGestured",e,f)}a.j=!1;a.f=!1;a.g=-1;a.A=-1;a.G=-1;a.i=""}}
function nD(a,b){var c=a.C(b,"mouseover-src");return dh("IMG",{"class":"mouseover-img",src:c,width:b.width,height:b.height})}
function oD(a){return F("mouseover-img",a)}
function pD(a,b,c){120!=b.naturalWidth?(a.g=Ku(),a.G=Ku(),iD=N(a.Ff,2500),bD(b,0,1)):c&&bD(c,0,1)}
h.Ff=function(a){O(iD);iD=0;var b=oD(a);b&&(bD(b,1,0),(a=F("mouseover-play",a))&&bD(a,0,1))};
function qD(){var a=dh("DIV",{"class":"mouseover-play"}),b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttribute("width","48px");b.setAttribute("height","48px");b.setAttribute("viewBox","0 0 24 24");b.setAttribute("fill","#fff");var c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M8 5v14l11-7z");b.appendChild(c);a.appendChild(b);return a}
function rD(a){return"none"!=(uj(a,"display")||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display)}
h.Nd=function(a){O(jD);jD=0;(a=oD(a))&&!a.complete&&(td(a,""),a.onload=null,O(iD),iD=0)};
h.ub=function(a){var b=kD(a);if(b){var c=this.C(b,"mouseover-src"),d=F("mouseover-play",a),e=oD(a);if(!d||c&&!e)c?(this.f=!0,this.i=lD(c)):(this.f=!1,b.src&&(this.i=lD(b.src))),d||(d=qD(),b.parentNode.appendChild(d)),O(jD),jD=0,this.j=!1,jD=N(function(){this.A=Ku();this.j=!0;d&&!c&&bD(d,0,1);c&&!e&&(e=nD(this,b),b.parentNode.appendChild(e),e.complete?pD(this,e,d):e.onload=function(){pD(this,e,d)}.bind(this))}.bind(this),150)}};
h.tb=function(a){var b=kD(a);if(null!=b){var c=this.C(b,"mouseover-src");b=this.C(b,"mouseover-log");var d=F("mouseover-play",a),e=oD(a);if(d&&!rD(d)||c&&e&&!rD(e))O(jD),jD=0,d&&d.parentNode.removeChild(d),e&&(e.onload=null,e.complete&&120!=e.naturalWidth||(this.g=0),O(iD),iD=0,td(e,""),e.parentNode.removeChild(e)),b&&mD(this,G(a,"yt-lockup-video"))}};
h.Je=function(a){var b=kD(a);null!=b&&this.C(b,"mouseover-log")&&mD(this,G(a,"yt-lockup-video"))};function sD(){W.call(this,"redirect-link")}
y(sD,W);Da(sD);sD.prototype.register=function(){Y(this,"click",this.f)};
sD.prototype.unregister=function(){Z(this,"click",this.f)};
sD.prototype.f=function(a){if(!V(a,"redirect-href-updated")){kz(a,"redirect-href-updated","true");var b=L("XSRF_REDIRECT_TOKEN");if(b){var c={};c.q=a.href;c.redir_token=b;sd(a,Wd("/redirect",c))}}};function tD(){W.call(this,"scroller");this.f={}}
y(tD,W);Da(tD);h=tD.prototype;h.register=function(){Y(this,"mouseenter",this.Od);Y(this,"mouseleave",this.Tb)};
h.unregister=function(){Z(this,"mouseenter",this.Od);Z(this,"mouseleave",this.Tb);for(var a in this.f)this.Tb(this.f[a]);this.f={};tD.L.unregister.call(this)};
h.dispose=function(){for(var a in this.f)this.Tb(this.f[a]);this.f={}};
h.Od=function(a){var b=P(a,"mousewheel",v(this.zf,this,a));kz(a,"scroller-mousewheel-listener",b);b=P(a,"scroll",v(this.Hh,this,a));kz(a,"scroller-scroll-listener",b);a&&(b=Ia(a).toString(),this.f[b]=a)};
h.Tb=function(a){var b=this.C(a,"scroller-mousewheel-listener")||"";kz(a,"scroller-mousewheel-listener","");var c=this.C(a,"scroller-scroll-listener")||"";kz(a,"scroller-scroll-listener","");Q(b);Q(c);kz(a,"scroller-scroll-listener","");a&&(a=Ia(a).toString(),delete this.f[a])};
h.zf=function(a,b){var c=b||window.event;var d=0;"MozMousePixelScroll"==c.type?d=0==(c.axis==c.HORIZONTAL_AXIS)?c.detail:0:window.opera?d=c.detail:d=0==c.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.chrome&&0==navigator.platform.indexOf("Mac")?c.wheelDeltaY/-30:c.wheelDeltaY/-1.2:c.wheelDelta/-1.6:c.wheelDeltaY/-3;if(c=d)d=a.scrollTop,a.scrollTop+=c,d==a.scrollTop&&this.C(a,"scroller-allow-pagescroll")||b.preventDefault()};
h.Hh=function(a){this.Ba(a,"scroll-action");S("yt-dom-content-change",a)};function uD(){W.call(this,"sessionlink")}
y(uD,W);Da(uD);uD.prototype.register=function(){Y(this,"mousedown",this.f);Y(this,"click",this.f)};
uD.prototype.unregister=function(){Z(this,"mousedown",this.f);Z(this,"click",this.f)};
uD.prototype.f=function(a){vD(a)};
function vD(a){var b;if(b=V(a,"sessionlink-target")||a.href||""){var c=V(a,"sessionlink")||"";c=wt(c);(a=parseInt(V(a,"sessionlink-lifetime"),10))?nw(b,c,a):nw(b,c)}}
;function wD(a){W.call(this,a||"slider");this.g=0;this.f=null}
y(wD,W);Da(wD);h=wD.prototype;h.register=function(){Y(this,"click",this.gd,"prev");Y(this,"click",this.fd,"next");Y(this,"keyup",this.Vd,"item");this.f=P(window,"resize",v(this.Af,this));this.ia("yt-uix-expander-toggle",this.ic)};
h.unregister=function(){Z(this,"click",this.gd,"prev");Z(this,"click",this.fd,"next");Z(this,"click",this.Vd,"item");Q(this.f);wD.L.unregister.call(this)};
h.ic=function(){var a=Vg(X(this));z(a,function(b){xD(this,b)},this)};
h.Af=function(){O(this.g);this.g=N(v(this.ic,this),200)};
function yD(a,b,c){var d=a.W(b);if(!J(d,X(a,"is-moving"))){b=hB(a,"list",d);var e=hB(a,"body",d),f=nb(Vg(X(a,"item"),d));if(f){var g=f[0];if("forward"==c){var k=zD(d,e,f);c=void 0!==k.nextElementSibling?k.nextElementSibling:ph(k.nextSibling,!0);if(!c)return;k=AD(a,c,e,f);g=c}else if("back"==c){k=BD(d,e,f);c=void 0!==k.previousElementSibling?k.previousElementSibling:ph(k.previousSibling,!1);if(!c)return;k=CD(a,c,e,f);g=c}K(d,X(a,"is-moving"));Hj(d)?b.style.right=(parseInt(b.style.right,10)||0)-k+"px":
b.style.left=(parseInt(b.style.left,10)||0)+k+"px";var l=N(v(a.ie,a,d,g),510);Fu(b,cg,v(function(m){O(l);this.ie(d,m)},a,g))}}}
h.fd=function(a){yD(this,a,"forward")};
h.gd=function(a){yD(this,a,"back")};
h.Vd=function(a){(a=this.W(a))&&S("yt-dom-content-change",a)};
function BD(a,b,c){return Hj(a)?DD(a,b,c):ED(a,b,c)}
function zD(a,b,c){return Hj(a)?ED(a,b,c):DD(a,b,c)}
function ED(a,b,c){function d(f){return Bj(f)>e-1}
var e=Bj(b);return Hj(a)?gb(c,d):eb(c,d)}
function DD(a,b,c){function d(f){f=Bj(f)+f.offsetWidth;return e>f-1}
var e=Bj(b)+b.offsetWidth;return Hj(a)?eb(c,d):gb(c,d)}
function CD(a,b,c,d){var e=a.W(b);var f=Bj(c);var g=f+c.offsetWidth,k=Bj(b);b=k+b.offsetWidth;var l=d[0];d=Bj(l);l=d+l.offsetWidth;Hj(e)?(c=a.wc(e,c)-k,f=g-l):(c=a.xc(e,c)-b,f-=d);mq(e,X(a,"at-tail"),!1);if(Math.abs(c)+1<Math.abs(f))return c;mq(e,X(a,"at-head"),!0);return f}
function AD(a,b,c,d){var e=a.W(b);var f=Bj(c);var g=f+c.offsetWidth,k=Bj(b);b=k+b.offsetWidth;var l=d[d.length-1];d=Bj(l);l=d+l.offsetWidth;Hj(e)?(c=a.xc(e,c)-b,f-=d):(c=a.wc(e,c)-k,f=g-l);mq(e,X(a,"at-head"),!1);if(Math.abs(c)+1<Math.abs(f))return c;mq(e,X(a,"at-tail"),!0);return f}
h.wc=function(a,b){return Bj(b)};
h.xc=function(a,b){return Bj(b)+b.offsetWidth};
h.ie=function(a,b){a&&(kq(a,X(this,"is-moving")),xD(this,a),S("yt-uix-slider-slide-shown",b),S("yt-dom-content-change",a))};
function xD(a,b){var c=hB(a,"body",b),d=nb(Vg(X(a,"item"),b));if(d&&d.length){var e=BD(b,c,d);c=zD(b,c,d);e=e==d[0];d=c==d[d.length-1]}else e=d=!0;mq(b,X(a,"at-head"),e);mq(b,X(a,"at-tail"),d);if(a.C(b,"disable-slider-buttons")){if(c=hB(a,"prev",b))c.disabled=e;if(e=hB(a,"next",b))e.disabled=d}}
;function FD(){W.call(this,"tabs")}
y(FD,W);Da(FD);FD.prototype.register=function(){Y(this,"click",this.f,"tab");Y(this,"keydown",this.g,"tab")};
FD.prototype.unregister=function(){Z(this,"click",this.f,"tab");Z(this,"keydown",this.g,"tab");FD.L.unregister.call(this)};
FD.prototype.f=function(a){if(!J(a,"disabled")){var b=this.W(a),c=X(this,"selected"),d=this.C(b,"uix-tabs-selected-extra-class");if(b=F(c,b)){var e=GD(this,b);kq(b,c);d&&kq(b,d);VA(e)}b=GD(this,a);K(a,c);d&&K(a,d);UA(b);S("yt-uix-tabs-after-shown",a,b)}};
FD.prototype.g=function(a,b,c){13==c.keyCode&&this.f(a)};
function GD(a,b){var c=a.C(b,"uix-tabs-target-id");return C(c)}
;function HD(){W.call(this,"tile")}
y(HD,W);Da(HD);HD.prototype.register=function(){Y(this,"click",this.f)};
HD.prototype.unregister=function(){Z(this,"click",this.f)};
HD.prototype.f=function(a,b,c){Dh(c.target,"a")||Dh(c.target,"button")||!(a=F(X(this,"link"),a))||(B&&!Qe(9)?a.click():(J(a,"yt-uix-sessionlink")&&vD(a),J(a,"spf-link")?Vz(a.href):Uz(a.href)))};function ID(){var a=void 0===a?!1:a;var b=ru();if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;function JD(){W.call(this,"tooltip");this.f=0;this.g={}}
y(JD,W);Da(JD);h=JD.prototype;h.register=function(){Y(this,"mouseover",this.nc);Y(this,"mouseout",this.cb);Y(this,"focus",this.od);Y(this,"blur",this.Xc);Y(this,"click",this.cb);Y(this,"touchstart",this.te);Y(this,"touchend",this.hc);Y(this,"touchcancel",this.hc)};
h.unregister=function(){Z(this,"mouseover",this.nc);Z(this,"mouseout",this.cb);Z(this,"focus",this.od);Z(this,"blur",this.Xc);Z(this,"click",this.cb);Z(this,"touchstart",this.te);Z(this,"touchend",this.hc);Z(this,"touchcancel",this.hc);this.dispose();JD.L.unregister.call(this)};
h.dispose=function(){for(var a in this.g)this.cb(this.g[a]);this.g={}};
h.nc=function(a){if(!(this.f&&1E3>x()-this.f)){var b=parseInt(this.C(a,"tooltip-hide-timer"),10);b&&(mz(a,"tooltip-hide-timer"),O(b));b=v(function(){KD(this,a);mz(a,"tooltip-show-timer")},this);
var c=parseInt(this.C(a,"tooltip-show-delay"),10)||0;b=N(b,c);kz(a,"tooltip-show-timer",b.toString());a.title&&(gB(a,LD(this,a)),a.title="");b=Ia(a).toString();this.g[b]=a}};
h.cb=function(a){var b=parseInt(this.C(a,"tooltip-show-timer"),10);b&&(O(b),mz(a,"tooltip-show-timer"));b=v(function(){if(a){var c=C(MD(this,a));c&&(ND(c),lh(c),mz(a,"content-id"));c=C(MD(this,a,"arialabel"));lh(c)}mz(a,"tooltip-hide-timer")},this);
b=N(b,50);kz(a,"tooltip-hide-timer",b.toString());if(b=this.C(a,"tooltip-text"))a.title=b;b=Ia(a).toString();delete this.g[b]};
h.od=function(a,b){this.f=0;this.nc(a,b)};
h.Xc=function(a){this.f=0;this.cb(a)};
h.te=function(a,b,c){c.changedTouches&&(this.f=0,(a=dB(b,X(this),c.changedTouches[0].target))&&this.nc(a,b))};
h.hc=function(a,b,c){c.changedTouches&&(this.f=x(),(a=dB(b,X(this),c.changedTouches[0].target))&&this.cb(a))};
function OD(a,b,c){gB(b,c);a=a.C(b,"content-id");(a=C(a))&&th(a,c)}
function LD(a,b){return a.C(b,"tooltip-text")||b.title}
function KD(a,b){if(b){var c=LD(a,b);if(c){var d=C(MD(a,b));if(!d){d=document.createElement("div");d.id=MD(a,b);iq(d,X(a,"tip"));var e=document.createElement("div");iq(e,X(a,"tip-body"));var f=document.createElement("div");iq(f,X(a,"tip-arrow"));var g=document.createElement("div");g.setAttribute("aria-hidden","true");iq(g,X(a,"tip-content"));var k=PD(a,b),l=MD(a,b,"content");g.id=l;kz(b,"content-id",l);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var m=Bh(b);l=MD(a,b,"arialabel");
f=document.createElement("div");K(f,X(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;th(f,m);b.setAttribute("aria-labelledby",l);l=ID()||document.body;l.appendChild(f);l.appendChild(d);OD(a,b,c);(c=parseInt(a.C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",K(g,X(a,"normal-wrap")));g=J(b,X(a,"reverse"));QD(a,b,d,e,k,g)||QD(a,b,d,e,k,!g);var n=X(a,"tip-visible");N(function(){K(d,n)},0)}}}}
function QD(a,b,c,d,e,f){mq(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var k=Ej(b);f=new Lg((k.width-10)/2,f?k.height:0);var l=Aj(b);Ds(new Lg(l.x+f.x,l.y+f.y),c,g);f=Zg(window);if(1==c.nodeType)var m=Cj(c);else c=c.changedTouches?c.changedTouches[0]:c,m=new Lg(c.clientX,c.clientY);c=Ej(d);var n=Math.floor(c.width/2);g=!!(f.height<m.y+k.height);k=!!(m.y<k.height);l=!!(m.x<n);f=!!(f.width<m.x+n);m=(c.width+3)/-2- -5;a=a.C(b,"force-tooltip-direction");if("left"==a||l)m=-5;else if("right"==a||f)m=20-c.width-
3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||k)}
function MD(a,b,c){a=X(a)+mu(b);c&&(a+="-"+c);return a}
function PD(a,b){var c=null;ze&&J(b,X(a,"masked"))&&((c=C("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),UA(c)):(c=hh("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",iq(c,X(a,"tip-mask"))));return c}
function ND(a){var b=C("yt-uix-tooltip-shared-mask"),c=b&&Eh(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),VA(b),document.body.appendChild(b))}
;var RD=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",RD,void 0);function SD(a){a=a.getInstance();var b=X(a);b in RD||(a.register(),a.ia("yt-uix-init-"+b,a.init),a.ia("yt-uix-dispose-"+b,a.dispose),RD[b]=a)}
;function TD(){this.i=[]}
h=TD.prototype;h.Sd=function(){};
h.dispose=function(){this.i&&(Q(this.i),this.i=[]);this.Sd()};
function UD(a,b,c,d,e){a.i.push(Du(b,c,v(d,a),e))}
h.redirect=function(a){Uz(a)};
function VD(a,b){if(!b)return!1;var c=b.redirect_url;if(!c)try{var d=eu(b);c=du(d,"redirect_url")}catch(e){c=null}if(!c)return!1;a.redirect(c);return!0}
h.Ub=function(){};
h.dg=function(a,b,c){(c=JSON.parse(c.responseText))&&(a&&VD(this,c)||b&&b.call(this,c))};
function WD(a,b,c,d,e,f,g){a={format:b,method:"POST",onError:g||v(a.Ub,a),ga:void 0,onSuccess:f,P:e||{},Fa:d||{},Ia:!0};Yt(c,a)}
;function XD(){this.i=[];this.F=this.A="";this.B=null;this.G=this.j=!1;this.D=null;this.M=this.J=""}
y(XD,TD);h=XD.prototype;h.Rd=function(){};
h.close=function(a){this.G=!1;this.f.dismiss(a||"close");this.dispose()};
h.create=function(a,b,c,d){this.G&&(b&&(this.B=b),c&&(this.D=c),a&&!this.j?this.gh({},d):this.qc())};
h.open=function(a,b,c,d,e,f,g,k,l){this.A=a;this.J=b;if(this.l=C(this.A+"-lb")){(a=uA())&&a.pauseVideo&&a.pauseVideo();if(this.j)this.reset();else{this.f=new YB(this.l,k);try{this.f.setTitle("")}catch(m){}}YD(this,"loading");this.f.show();this.G=!0}d&&this.create(e,f,g,l)};
h.reset=function(){this.j&&ZD(this)};
h.setClass=function(a,b){mq(this.Y,a,b)};
function $D(a,b){aC(a.f,b)}
h.gh=function(a,b,c,d,e){arguments.length&&YD(this,e||"loading");var f=a||{};this.B&&(f.feature=this.B);this.D&&(f.next=this.D);WD(this,"XML",this.J,f,b||{},v(this.eg,this,c),d)};
function YD(a,b){switch(b){case "content":ZB(a.f,"content");break;case "loading":ZB(a.f,"loading");break;case "working":ZB(a.f,"working")}}
function ZD(a,b){if(a.j){var c=b||a.M;if(c){if(a.F){var d=a.Y;kq(d,a.F);K(d,c)}else K(a.Y,c);a.F=c}}}
h.qc=function(a,b){a&&qd(C(this.A+"-dialog"),a);if(b)try{this.f.setTitle(b)}catch(d){}this.Y=F("yt-dialog-fg",this.l);var c=F("yt-pd-params",this.l);this.M=V(c,"start-page")||"";UD(this,this.Y,"click",this.ug,"yt-pd-close");UD(this,this.Y,"click",this.og,"yt-pd-setclass");UD(this,this.Y,"click",this.Ag,"yt-pd-setpage");this.Rd();YD(this,"content");this.j=!0;ZD(this)};
h.ug=function(){this.close("cancel")};
h.og=function(a){a=G(a.target,"yt-pd-setclass");var b=V(a,"off");b&&this.setClass(b,!1);(a=V(a,"on"))&&this.setClass(a,!0)};
h.Ag=function(a){a=G(a.target,"yt-pd-setpage");(a=V(a,"state-container-id"))&&ZD(this,a)};
h.Ub=function(a){XD.L.Ub.call(this,a);this.close()};
h.eg=function(a,b,c){var d=eu(b);if(d){var e=du(d,"not_eligible"),f=du(d,"error_message");e||f?this.Ub(b):VD(this,b)||(c=c.html_content||void 0,d=du(d,"title")||void 0,a?a(b,v(this.qc,this,c,d)):this.qc(c,d))}};function aE(){this.i=[];this.J=this.B=null;this.D=this.j=!1}
y(aE,TD);h=aE.prototype;h.Hc=function(){};
h.Yb=function(){};
h.init=function(a,b,c,d,e){this.B=a||null;this.J=b||null;c?d&&e&&(UD(this,d,"mousedown",this.Le,e),UD(this,d,"click",this.re,e)):(this.Le(),this.re())};
h.Mb=function(a,b){("string"===typeof a?r(a+".init"):a.init).apply(this,Array.prototype.slice.call(arguments,1))};
h.Le=function(){this.j||(this.B&&Zz(this.B),this.J&&qz(this.J,v(function(){(this.j=!0,this.D)&&this.Yb()},this)))};
h.re=function(a){this.Hc(a);this.D=!0;this.j&&this.D&&this.Yb()};var bE={};function cE(a){var b=Ia(a),c=bE[b];c||(c=new a,bE[b]=c);return c}
;function dE(){aE.call(this);this.l=null}
y(dE,aE);dE.prototype.Hc=function(a){a&&(this.l=V(a.currentTarget,"pageid"))};
dE.prototype.Yb=function(){this.Mb("yt.www.account.AddNewChannelDialog",this.l)};function eE(){aE.call(this);this.g=this.f=null;this.O=!1;this.A=this.F=this.G=null}
y(eE,aE);function fE(a,b,c,d,e){var f=cE(eE);b&&(f.f=b);c&&(f.G=c);d&&(f.F=d);e&&(f.A=e);f.init(L("CREATE_CHANNEL_CSS_URL",void 0),L("CREATE_CHANNEL_JS_URL",void 0),!a,C("body-container"),"create-channel-lightbox")}
eE.prototype.Hc=function(a){this.f||(a&&(a=V(a.currentTarget,"upsell"),"settings"==a||"upload"==a||"playlist"==a||"guide"==a||"comment"==a||"message"==a||"captions"==a||"live_chat"==a||"tbd_channel_account"==a)&&(this.f=a),this.f||(this.f="default"))};
eE.prototype.Yb=function(){switch(this.f){case "settings":this.g="/profile";break;case "guide":this.g=L("CREATE_CHANNEL_NEXT_URL_GUIDE",void 0);break;case "upload":this.g=L("CREATE_CHANNEL_NEXT_URL_UPLOAD",void 0);break;default:this.g=document.location.href}L("CREATE_CHANNEL_NEXT_URL")&&(this.g=L("CREATE_CHANNEL_NEXT_URL",void 0));if(!this.O){this.O=!0;var a=v(this.dg,this,!1,this.T||null);WD(this,"JSON","/create_channel_ajax",{action_get_type:1},{},a)}};
eE.prototype.M=function(){var a=L("CREATE_CHANNEL_NEXT_URL",void 0);a&&("/"==a?Uz(a):window.history.back())};
eE.prototype.T=function(a){this.O=!1;if(a.open_generic_dialog)gE(this);else if("success"in a&&a.success)switch(a.type){case 15:case 17:case 18:this.Mb("yt.www.account.CreateCoreIdChannelDialog",this.M,this.f,this.g,this.G,this.F,this.A);break;case 8:Uz("/oops");break;case 5:Uz("/create_channel?action_blocked_misc=1");break;case 9:if("tbd_channel_account"==this.f){this.Mb("yt.www.account.CreateCoreIdChannelDialog",this.M,this.f,this.g,this.G,this.F,this.A);break}default:this.Mb("yt.www.account.CreateChannelDialog",
this.M,this.f,this.g)}else"redirect_url"in a&&a.redirect_url?Uz(a.redirect_url):Uz("/oops")};
function gE(a){var b=cE(XD),c=a.g;c&&(-1<c.indexOf("create_channel")||-1<c.indexOf("upload")||-1<c.indexOf("profile"))&&(c="/");b.open("create-channel-identity","/create_channel_ajax","create_channel_ajax",!0,!0,a.f,c);c&&$D(b,function(){Uz(c)})}
;function hE(a,b){if(hn()){var c=ZA(a),d=0,e=qj()+"-opacity";c&&(c.opacity||c[e])&&(d=c.opacity||c[e]);var f=N(function(){Q(g);b.call(a)},d+100),g=P(a,cg,function(k){k.target==a&&"opacity"==k.propertyName&&(Q(g),O(f),b.call(a))})}else N(function(){b.call(a)},0)}
;var iE=Db({SUCCESS:"yt-alert-success",ERROR:"yt-alert-error",ij:"yt-alert-warn",INFO:"yt-alert-info",Oi:"yt-alert-promo"});function jE(a,b,c){if(c){var d=Vg("yt-alert",c);z(d,function(f){hE(f,function(){f.parentNode&&f.parentNode.removeChild(f)});
K(f,"yt-alert-fading")});
b.removeAttribute("id");lq(b,iE);K(b,"yt-alert-success");d=F("yt-alert-message",b);var e=F("yt-alert-content",b);(d||e).innerHTML=a;c.appendChild(b);UA(b)}}
;function kE(a,b){this.f=new YB(a,!0);this.l=b;this.j=this.g=this.A=""}
var lE=[],mE=[],nE=null;function oE(a,b,c,d){var e=C("feed-privacy-lb");e&&(nE=new kE(e,a),nE.A=b||"",nE.g=c||"",nE.j=d||"",a=nE,Zz(L("FEED_PRIVACY_CSS_URL",void 0)),pE(a,null,{channel_id:a.g,setting_type:a.l,playlist_id:a.j,video_id:a.A}))}
function qE(a){oE("SUBSCRIPTIONS",void 0,a)}
function rE(a){oE("LIKES",a)}
function sE(a){oE("FAVORITES",a)}
function tE(a,b){oE("PLAYLISTS",a,void 0,b)}
function uE(a){oE("LIKE_PLAYLISTS",void 0,void 0,a)}
kE.prototype.dismiss=function(){this.f.dismiss("cancel")};
function pE(a,b,c){a={method:"POST",format:"XML",Fa:b||{},P:c||{},Ia:!0,onSuccess:v(a.F,a),onError:v(a.G,a)};Yt("/feed_privacy_ajax",a)}
kE.prototype.F=function(a,b){var c=eu(a),d=du(c,"invalid_request"),e=du(c,"missing_setting_type"),f=du(c,"already_seen_dialog");if(!(d||e||f))if(d=C("feed-privacy-dialog"),e=uA(),c=du(c,"success_message")){f=C("alerts");var g=Zc(b.alert_template_html).toString();g=g.replace(/^[\s\xa0]+/,"");var k=String(g.substr(0,3)).toLowerCase();0==("<tr"<k?-1:"<tr"==k?0:1)?(g=ih(Ui("<table><tbody>"+g+"</tbody></table>")),g=qu("tr",g)):(k=document.createElement("div"),k.innerHTML=g,g=oh(k));jE(c,g,f);Gu(d);window.scroll(0,
0);this.dismiss();e&&e.playVideo&&e.playVideo()}else e&&e.pauseVideo&&e.pauseVideo(),qd(d,b.html_content),mE.push(Du(d,"click",v(this.i,this,!1),"make-activity-public-button")),mE.push(Du(d,"click",v(this.i,this,!0),"make-activity-private-button")),S("yt-dom-content-change",d),ZB(this.f,"content"),this.f.show()};
kE.prototype.G=function(){this.dismiss()};
kE.prototype.i=function(a){var b={};b[a?"action_make_private":"action_make_public"]="1";a={setting_type:this.l};ZB(this.f,"working");pE(this,b,a)};function vE(){XD.call(this);this.g=[];Zz(L("IDENTITY_PROMPT_CSS_URL",void 0))}
y(vE,XD);h=vE.prototype;h.Rd=function(){this.g.push(Du(this.Y,"click",v(this.sf,this),"identity-prompt-account-list-item"));this.g.push(Du(this.Y,"click",v(this.Ef,this),"specialized-identity-prompt-account-item"));this.g.push(Du(this.Y,"click",v(this.pf,this),"authuser-mismatch-identity-prompt-account-item"))};
h.Sd=function(){Q(this.g);this.g.length=0};
h.sf=function(a){var b=C("identity-prompt-form");a=Tg("input",void 0,a.currentTarget);b&&b.action&&a&&1==a.length&&(b.action=zt(b.action,{pageId:a[0].value}));var c=C("identity-prompt-confirm-button");c?c.disabled=!1:b&&a&&1==a.length&&(a[0].checked=!0,b.submit())};
h.Ef=function(a){a=V(a.currentTarget,"switch-url");C("dont_ask_again").checked&&(a+="&dont_ask_again=on");Uz(a)};
h.pf=function(a){a=V(a.currentTarget,"switch-url");Uz(a)};function wE(a){this.g=a;this.f=null;a=xE(this.g);a=xd("__%s__","("+a.join("|")+")");this.f=new RegExp(a,"g");this.i={}}
var yE=/__([a-z]+(?:_[a-z]+)*)__/g;function xE(a){var b=[],c={};a.replace(yE,function(d,e){e in c||(c[e]=!0,b.push(e))});
return b}
function zE(a,b){var c=v(function(d,e){return b[e]||this.i[e]||""},a);
return a.g.replace(a.f,c)}
;function AE(a){Object.assign(a,BE());a.o=CE().o;return a}
function BE(){var a={};void 0!==(void 0!==CE().earst?DE():CE().ar)&&(a.ar=void 0!==CE().earst?DE():CE().ar);void 0!==CE().nv&&(a.nv=CE().nv);return a}
var EE=Date.now(),FE=Date.now();function DE(){var a=Date.now()-FE;a=EE+a;return""+(a-100*Math.floor(a%1E3/100)-1E5*Math.floor(a%1E6/1E5))}
function CE(){return L("CREATOR_CONTEXT",GE)}
var GE={o:"U"},HE=CE().earst;void 0!==HE&&(EE=HE,FE=Date.now());function IE(){this.A=null;this.f=[];this.promo=null;this.l="";this.g=null;this.T=Sg("mcn-affiliate-agreement-overlay-template");var a=C(this.T).innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");a=a.replace(/(\s*--\x3e)?\s*$/,"");this.O=new wE(a);this.i=!1}
y(IE,Uf);IE.prototype.init=function(a,b,c){this.promo=a;this.l=b;this.g=c;this.f.push(P(this.promo,"click",v(this.Z,this)));this.f.push(Du(this.g,"click",v(this.V,this),this.l));this.f.push(Du(this.g,"click",v(this.B,this),"yt-uix-overlay-close"));a=IC();this.f.push(Du(a,"click",v(this.B,this),"yt-dialog-close"));this.f.push(Du(this.g,"click",v(this.J,this),"mcn-affiliate-agreement-checkbox"));this.f.push(Du(this.g,"change",v(this.J,this),"commerce-creator-signup-text-fields"))};
IE.prototype.B=Ca;IE.prototype.J=function(){var a=Sg("agreement-checkbox-1"),b=Sg("agreement-checkbox-2"),c=Sg("agreement-checkbox-3"),d=!0;this.i&&(d=Sg("sign-contract-form"),d=J(d,"ng-valid"));F(this.l,void 0).disabled=!(a.checked&&b.checked&&c.checked&&d)};
function JE(a,b,c,d,e){b=AE({action_load_agreement:1,is_modal:b});Yt("/account_mcn_affiliate_monetization_ajax",{method:"POST",Fa:b,context:a,onSuccess:v(function(f,g){this.A=g.contract_tags;this.i="user_contact_info_form"in g;c(g);this.i&&(angular.module("mcnAffiliateAgreement",[]),angular.bootstrap(document,["mcnAffiliateAgreement"]))},a),
onError:v(function(){this.A=null;d()},a),
ga:function(){e()}})}
function KE(){var a=Ad(Sg("full_name").value),b=Ad(Sg("title").value),c=Ad(Sg("email_address").value),d=Ad(Sg("phone_number").value),e=Ad(Sg("company_name").value);return{full_name:a,title:b,email_address:c,phone_number:d,company_name:e}}
function LE(a,b,c){Sg("agreement-checkbox-1").disabled=!0;Sg("agreement-checkbox-2").disabled=!0;Sg("agreement-checkbox-3").disabled=!0;var d=Sg("agreement-email-yes"),e=AE({action_sign_up:1});d={contract_tags:a.A.join(),has_commerce_feature:a.i,receive_emails:d.checked};if(a.i){var f=KE();Nb(d,f)}Yt("/account_mcn_affiliate_monetization_ajax",{method:"POST",Fa:e,P:d,context:a,onSuccess:v(function(){b()},a),
onError:v(function(){c()},a)})}
IE.prototype.K=function(){Q(this.f);this.f.length=0;IE.L.K.call(this)};function ME(a){IE.call(this);var b=Sg("mcn-affiliate-signup-button"),c=Sg("mcn-affiliate-agreement");this.init(b,"mcn-affiliate-sign-agreement-button",c);this.D=a;this.j=!1;L("SHOW_MCNA_YPE_MODAL")&&(this.j=!0,a=L("MCNA_YPE_CONTRACT_CSS_URL",void 0),c=L("ACCOUNT_MONETIZATION_CSS_URL",void 0),Zz(L("MCNA_YPE_COMMERCE_CREATOR_CSS_URL",void 0)),Zz(a),Zz(c),qz(L("ANGULAR_JS",void 0)),b.click())}
y(ME,IE);
ME.prototype.Z=function(a){a.preventDefault();a.stopPropagation();var b=a.currentTarget;b.disabled=!0;JE(this,this.j,v(function(c){a.currentTarget.disabled=!1;var d=a.currentTarget;DC.getInstance().show(d);d=IC();F("yt-dialog-content",d).innerHTML=zE(this.O,{agreements_title:c.agreements_title,agreements_disclaimer:c.agreements_disclaimer,agreements:c.agreements,review_disclaimer:c.review_disclaimer,underage_message:c.underage_message,agreements_action_buttons:c.agreements_action_buttons,user_contact_info_form:c.user_contact_info_form});
a.currentTarget.disabled=!0},this),function(){UA(Sg("mcn-affiliate-promo-error-msg"))},function(){b.disabled=!1})};
ME.prototype.V=function(a){a.preventDefault();a.stopPropagation();a=a.currentTarget;a.disabled||(a.disabled=!0,this.j||(Sg("agreement-close-button").disabled=!0),LE(this,v(this.M,this),function(){DC.getInstance().hide();UA(Sg("mcn-affiliate-promo-error-msg"))}))};
ME.prototype.B=function(){if(this.j){var a=AE({action_ask_me_later:1});Yt("/account_mcn_affiliate_monetization_ajax",{method:"POST",Fa:a,context:this})}};
ME.prototype.M=function(){this.D?Uz(this.D):(DC.getInstance().hide(),RA(this.promo,!1))};var NE=r("ytglobal.prefsUserPrefsPrefs_")||{};q("ytglobal.prefsUserPrefsPrefs_",NE,void 0);function OE(){this.f=L("ALT_PREF_COOKIE_NAME","PREF");var a=Hv(this.f);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(NE[d]=c.toString())}}}
h=OE.prototype;h.get=function(a,b){PE(a);QE(a);var c=void 0!==NE[a]?NE[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){PE(a);QE(a);if(null==b)throw Error("ExpectedNotNull");NE[a]=b.toString()};
function RE(a,b){return!!((SE("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
h.remove=function(a){PE(a);QE(a);delete NE[a]};
h.save=function(){Gv(this.f,this.dump(),63072E3,"/")};
h.clear=function(){for(var a in NE)delete NE[a]};
h.dump=function(){var a=[],b;for(b in NE)a.push(b+"="+encodeURIComponent(String(NE[b])));return a.join("&")};
function QE(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function PE(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function SE(a){a=void 0!==NE[a]?NE[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Da(OE);function TE(a,b){Uf.call(this);this.g=a;this.l=b;this.f=null;this.i=C("page");this.f=P(C("premium-yva-close"),"click",v(this.we,this));var c=this.g;OE.getInstance().get("HIDDEN_MASTHEAD_ID")==c||K(this.i,"masthead-ad-expanded");this.j=P(window,"message",v(this.nf,this))}
y(TE,Uf);var UE=/^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;h=TE.prototype;h.nf=function(a){a&&a.origin&&UE.test(a.origin)&&"creative2yt_requestClose"==a.data&&this.Ke()};
h.K=function(){TE.L.K.call(this);Q(this.f);Q(this.j);this.j=this.f=null};
h.Ke=function(){VA("ad_creative_1");S("ads-masthead-hide");S("yt-dom-content-change");this.l&&VA("ad_creative_collapse_btn_1");UA("ad_creative_expand_btn_1");kq(this.i,"masthead-ad-expanded");VE(this.g);vz("homepage_collapse_masthead_ad")};
h.we=function(){UA("ad_creative_expand_btn_1");lh(C("premium-yva"));lh(C("video-masthead"));S("yt-dom-content-change");VE(this.g)};
function VE(a){var b=OE.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);b.save()}
h.Ih=function(){var a=OE.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);a.save();vz("homepage_expand_masthead_ad");Uz(document.location.href)};function WE(){wD.call(this,"shelfslider")}
y(WE,wD);Da(WE);WE.prototype.wc=function(a){a=Hj(a)?hB(this,"next",a):hB(this,"prev",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?Bj(a)+a.offsetWidth-NaN:Bj(a)+a.offsetWidth};
WE.prototype.xc=function(a){a=Hj(a)?hB(this,"prev",a):hB(this,"next",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?Bj(a)+void 0:Bj(a)};var XE=!1,YE=!1;function ZE(a){a=void 0===a?{}:a;Ga(a)&&(a={callback:a});a._c&&a._c.jsl&&a._c.jsl.h||Nb(a,{_c:{jsl:{h:L("GAPI_HINT_PARAMS",void 0)}}});if(a.gapiHintOverride||L("GAPI_HINT_OVERRIDE")){var b=xt(document.location.href).gapi_jsh;b&&Nb(a,{_c:{jsl:{h:b}}})}xo("client",a)}
;var $E=[],aF={},bF=[],cF=!1;function dF(){$E.push(Du(document.body,"click",eF,"yt-google-help-link"))}
function eF(a){a.preventDefault();var b=V(a.currentTarget,"ghelp-anchor")||a.currentTarget,c=V(a.currentTarget,"ghelp-tracking-param")||"";b=document.getElementById(b);var d=a.currentTarget,e=L("GOOGLE_HELP_CONTEXT",void 0);a=L("GOOGLE_HELP_PRODUCT_ID",void 0)||V(a.currentTarget,"feedback-product-id");d=!!V(d,"load-chat-support");fF(b,a,e,L("GOOGLE_HELP_PRODUCT_DATA"),d,!1,c)}
function gF(a,b){var c=L("FEEDBACK_LOCALE_LANGUAGE"),d=aF;Nb(d,L("FEEDBACK_LOCALE_EXTRAS",{}));a&&Nb(d,a);try{var e=uA();e&&e.pauseVideo&&e.pauseVideo();e&&(d.playback_id=e.getVideoData().cpn,e.getLastError&&(d.api_error=e.getLastError()))}catch(f){}b&&Nb(d,{trackingParam:b});return{helpCenterPath:"/youtube",locale:c,productData:d}}
function hF(){var a=L("SESSION_INDEX"),b=L("FEEDBACK_BUCKET_ID"),c={abuseLink:"https://support.google.com/youtube/bin/answer.py?answer=140536",customZIndex:"2000000005",allowNonLoggedInFeedback:!0};a&&(c.authuser=a+"");b&&(c.bucket=b);return c}
function iF(a,b,c,d){a={context:b,anchor:a,enableSendFeedback:c?!1:!0,defaultHelpArticleId:d};Nb(a,hF());return a}
function fF(a,b,c,d,e,f,g,k){var l=(b||"59")+"",m=gF(d,g),n=iF(a,c,f,k),t=e||M("web_always_load_chat_support");ZE(function(){var u=yn(l,m);if(t&&!cF)try{u.g(n),cF=!0}catch(w){}u.j(n)});
return!1}
function jF(){if(!(B?As("7"):Ve?As("3.6"):$e?As("5"):Ze||ue)){var a=Vg("reportbug");z(a,function(b){RA(b,!1)})}}
;var kF,lF=[];function mF(a){nF("keyboard");27!=a.keyCode||a.event&&!1===a.event.returnValue||!document.activeElement||document.activeElement.blur()}
function oF(a){0>=a.event.clientX&&0>=a.event.clientY||nF("mouse")}
function nF(a){kF!==a&&(kF=a,Q(lF),lF.length=0,"keyboard"==kF?(pF(!0),lF=[P(window,"click",oF),P(window,"mousemove",oF)]):"mouse"==kF&&(pF(!1),lF=[P(window,"keydown",mF)]))}
function pF(a){mq(document.documentElement,"no-focus-outline",!a)}
;function qF(a){var b=["guide"];b=rF(b);if(b.length){var c=a||{};c.frags=b.join(",");a=L("XSRF_FIELD_NAME",void 0);var d=L("XSRF_TOKEN",void 0),e="/watch_fragments_ajax";M("use_watch_fragments2")&&(e="/watch_fragments2_ajax");c=Wd(e,c);e={};e[a]=d;e.client_url=window.location.href;a=Ud(e);sF.push(spf.load(c,{method:"POST",postData:a,onDone:function(){if(hb(b,"guide")){var f=r("yt.www.guide.setup");f&&f(!1);f=L("GUIDE_SELECTED_ITEM",void 0);var g=r("yt.www.guide.selectGuideItem");g&&g(f);S("appbar-guide-delay-load")}S("yt-www-pageFrameCssNotifications-load")}}));
tF=mb(tF,b)}}
function uF(){var a=xt(window.location.href);a.tr="nonwatch";qF(a)}
function rF(a){return Za(a,function(b){return!hb(tF,b)})}
var sF=[],tF=[],vF=[];function wF(){}
function xF(){var a={},b=Rn([]);b&&(a.Authorization=b,a["X-Goog-AuthUser"]=L("SESSION_INDEX",0),a["X-Origin"]=L("INNERTUBE_HOST_OVERRIDE",window.location.origin),M("pageid_as_header_web")&&(a["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return li(a)}
;var yF={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var zF=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),AF=["/fashion","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ","/channel/UCTApTkbpcqiLL39WUlne4ig","/channel/UCW5PCzG3KQvbOX4zc3KY0lQ"];function BF(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;var b=Md(Nd(5,a));if(CF(b))return"USER_INTERFACE_THEME_DARK";a=xt(a).theme;return zF.get(a)||null}
function CF(a){var b=AF.map(function(c){return c.toLowerCase()});
return!M("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1}
;function DF(){this.f={};var a=Hv("CONSISTENCY");a&&EF(this,{encryptedTokenJarContents:a})}
DF.prototype.replace=function(a,b){for(var c=ja(a),d=c.next();!d.done;d=c.next())delete this.f[d.value.encryptedTokenJarContents];EF(this,b)};
function EF(a,b){if(b.encryptedTokenJarContents&&(a.f[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.f[b.encryptedTokenJarContents]},1E3*c);
Gv("CONSISTENCY",b.encryptedTokenJarContents,c,"/",void 0,!0)}}
;function FF(a,b){this.f=a;this.i=b;this.g=Wv}
function GF(a){if(!HF){var b={kd:{playlistEditEndpoint:IF,subscribeEndpoint:JF,unsubscribeEndpoint:KF,modifyChannelNotificationPreferenceEndpoint:LF}};MF.f||(MF.f=new MF);var c=MF.f;wF.f||(wF.f=new wF);FF.f=new FF(b,c);HF=FF.f}b=HF;var d=void 0===d?yF:d;a:{var e,f;if((null===(e=a.signalServiceEndpoint)||void 0===e?0:e.signal)&&b.f.nh&&(e=b.f.nh[a.signalServiceEndpoint.signal])){var g=new e;break a}if((null===(f=a.continuationCommand)||void 0===f?0:f.request)&&b.f.Ue&&(f=b.f.Ue[a.continuationCommand.request])){g=
new f;break a}for(g in a)if(b.f.kd[g]&&(f=b.f.kd[g])){g=new f;break a}g=void 0}if(!g)return b.g(new Ov("Error: No request builder found for command.",a)),li({});f=void 0;f=void 0===f?{}:f;e=a.clickTrackingParams;var k=void 0===k?!0:k;if(c=L("INNERTUBE_CONTEXT")){c=Lb(c);c.client||(c.client={});var l=c.client;"MWEB"===l.clientName&&(l.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");l.screenWidthPoints=window.innerWidth;l.screenHeightPoints=window.innerHeight;l.screenPixelDensity=
Math.round(window.devicePixelRatio)||1;l.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var m=void 0===m?!1:m;OE.getInstance();var n=RE(0,165)?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT";M("kevlar_apply_prefers_color_theme")&&(n=RE(0,165)?"USER_INTERFACE_THEME_DARK":RE(0,174)?"USER_INTERFACE_THEME_LIGHT":window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT");
m=m?n:BF()||n;l.userInterfaceTheme=m;(m=Hv("EXPERIMENTS_DEBUG"))?l.experimentsToken="ZERO"===m?"GgIQAQ%3D%3D":m:delete l.experimentsToken;m=Kt();DF.f||(DF.f=new DF);l=Db(DF.f.f);c.request=Object.assign(Object.assign({},c.request),{internalExperimentFlags:m,consistencyTokenJars:l});m=RE(OE.getInstance(),58);c.user=Object.assign({},c.user);m&&(c.user.enableSafetyMode=m);(m=L("DELEGATED_SESSION_ID"))&&!M("pageid_as_header_web")&&(c.user.onBehalfOfUser=m);k&&(k=kw())&&(c.clientScreenNonce=k);e&&(c.clickTracking=
{clickTrackingParams:e});k=c}else Xv(Error("Error: No InnerTubeContext shell provided in ytconfig.")),k={};k={context:k};(m=g.i(a))?g.f(k,m,f):(Xv(new Ov("Error: Failed to create Request from Command.",a)),k=void 0);if(!k)return b.g(new Ov("Error: Failed to build request for command.",a)),li({});f=NF("/youtubei/v1/"+OF(g.g()));var t;var u=(a=null===(t=null===(u=a.commandMetadata)||void 0===u?void 0:u.webCommandMetadata)||void 0===t?void 0:t.apiUrl)?NF(a):void 0;u&&(f=u);return PF(b,k,f,d,g.j())}
function PF(a,b,c,d,e){d=void 0===d?yF:d;var f=JSON.stringify(b),g=Bt(c)?"same-origin":"cors",k=Bt(c)?"same-origin":"include";return QF().then(function(l){l={method:"POST",mode:g,headers:l,body:f};M("op_credentials_killswitch")||(l.credentials=k);var m;e&&(m=Object.assign({zj:c,Aj:l,identity:d,requestTime:fv(),Bj:0},e));return a.i.fetch(c,l,m)}).then(function(l){return li(l)})}
function NF(a){a=At(a,{key:L("INNERTUBE_API_KEY")},!1);var b=L("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(Pd(a)));return a}
function QF(){return xF().then(function(a){a=Object.assign({"Content-Type":"application/json","X-Goog-Visitor-Id":L("VISITOR_DATA")},a);return li(a)})}
;var RF=["notification/modify_channel_preference"],SF=["browse/edit_playlist"],TF=["subscription/subscribe"],UF=["subscription/unsubscribe"];var VF={},WF=(VF.WEB_UNPLUGGED="^unplugged/",VF.WEB_UNPLUGGED_ONBOARDING="^unplugged/",VF.WEB_UNPLUGGED_OPS="^unplugged/",VF.WEB_UNPLUGGED_PUBLIC="^unplugged/",VF.WEB_CREATOR="^creator/",VF.WEB_KIDS="^kids/",VF.WEB_EXPERIMENTS="^experiments/",VF.WEB_MUSIC="^music/",VF.WEB_REMIX="^music/",VF.WEB_MUSIC_EMBEDDED_PLAYER="^music/",VF.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",VF);
function OF(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=WF[b];if(c){var d=new RegExp(c),e=ja(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(WF).forEach(function(g){var k=ja(g);g=k.next().value;k=k.next().value;b!==g&&f.push(k)});
d=new RegExp(f.join("|"));a.sort(function(g,k){return g.length-k.length});
e=ja(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function XF(){}
XF.prototype.j=function(){};function JF(){}
sa(JF,XF);JF.prototype.g=function(){return TF};
JF.prototype.j=function(){return{}};
JF.prototype.i=function(a){return a.subscribeEndpoint};
JF.prototype.f=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse)};function KF(){}
sa(KF,XF);KF.prototype.g=function(){return UF};
KF.prototype.j=function(){return{}};
KF.prototype.i=function(a){return a.unsubscribeEndpoint};
KF.prototype.f=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};function LF(){}
sa(LF,XF);LF.prototype.g=function(){return RF};
LF.prototype.i=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
LF.prototype.f=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function IF(){}
sa(IF,XF);IF.prototype.g=function(){return SF};
IF.prototype.i=function(a){return a.playlistEditEndpoint};
IF.prototype.f=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Ei(){}
Ei.prototype.flush=function(a){a=void 0===a?[]:a;if(M("enable_client_streamz_web")){a=ja(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new Ho;c=uf(c,1,b.j);for(var d=b,e=[],f=0;f<d.f.length;f++)e.push(d.f[f].Xa);c=uf(c,3,e||[]);d=[];e=[];f=ja(b.fb.keys());for(var g=f.next();!g.done;g=f.next())e.push(g.value.split(","));for(f=0;f<e.length;f++){g=e[f];var k=b.g;for(var l=b.rd(g)||[],m=[],n=0;n<l.length;n++){var t=l[n];t=t&&t.ad;var u=new Np;switch(k){case 3:vf(u,1,Op[0],Number(t));break;
case 2:vf(u,2,Op[0],Number(t))}m.push(u)}k=m;for(l=0;l<k.length;l++){n=k[l];m=new No;m.f||(m.f={});t=n?zf(n):n;m.f[2]=n;m=uf(m,2,t);n=g;t=[];u=b;for(var w=[],E=0;E<u.f.length;E++)w.push(u.f[E].Ya);u=w;for(w=0;w<u.length;w++){E=u[w];var aa=n[w],ba=new Po;switch(E){case 3:vf(ba,1,Qo[0],String(aa));break;case 2:vf(ba,2,Qo[0],Number(aa));break;case 1:vf(ba,3,Qo[0],"true"==aa)}t.push(ba)}yf(m,1,t);d.push(m)}}yf(c,4,d);d=b=new df;e=tf(c,1);null!=e&&kf(d,1,e);e=tf(c,5);null!=e&&hf(d,5,e);e=wf(c,Jo,2);null!=
e&&lf(d,2,e,Pp);e=tf(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)kf(d,3,e[f]);e=tf(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)hf(d,6,e[f]);e=xf(c,No,4);0<e.length&&mf(d,4,e,Sp);c=new Uint8Array(b.g+b.f.length());e=b.i;f=e.length;for(g=d=0;g<f;g++)k=e[g],c.set(k,d),d+=k.length;e=b.f.end();c.set(e,d);b.i=[c];b={serializedIncrementBatch:cf(c)};Qv("streamzIncremented",b)}}};var YF;function Hi(){if(!YF){YF=new Di;var a=Jt("client_streamz_web_flush_count",-1);-1!==a&&(YF.A=a)}return YF}
;var ZF=["SAPISID","__Secure-1PAPISID","__Secure-3PAPISID"];function $F(){Cg.call(this);this.pollingInterval=3E3;this.f=[null,null,null];aG(this)}
sa($F,Cg);$F.prototype.verifyUser=function(){var a=aG(this),b=a.Sf;if(!a.ih)return!0;this.dispatchEvent("ytsessionchange");b&&this.dispatchEvent("ytuserinvalid");return!1};
function aG(a){var b=ZF.map(function(e){var f;return null!==(f=Si.get(e))&&void 0!==f?f:""}),c=b.some(function(e,f){return a.f&&""!==a.f[f]&&""===e}),d=b.some(function(e,f){return a.f&&a.f[f]!==e});
a.f=b;return{Sf:c,ih:d}}
$F.prototype.clearTimeout=function(){this.i&&(Qu(this.i),this.i=void 0)};function MF(){this.j=new Gi;this.g=new Ii;this.i=new Ki;this.f=new Li}
MF.prototype.fetch=function(a,b){var c=this,d=new Request(a,b),e=Md(Nd(5,be(d.url,"key")));this.j.f.j("/client_streamz/youtube/web/network/one_platform_requests",e);return li(fetch(d).then(function(f){return bG(c,f,e)})["catch"](function(f){Yv(f)}))};
function bG(a,b,c){var d=b.json();b.redirected?Ji(a.g,b.status,c,Md(Nd(5,b.url))):b.ok?a.i.f.j("/client_streamz/youtube/web/network/one_platform_request_success",c):(a.f.f.j("/client_streamz/youtube/web/network/one_platform_request_failed",b.status,c),d.then(function(e){$F.f||($F.f=new $F);Yv(new Ov("Error: API fetch failed",b.status,b.url,e,{Dj:$F.f.verifyUser()}))}));
return d}
;var HF;function cG(a,b){var c={list_id:"WL"},d=GF({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/browse/edit_playlist",url:"/service_ajax",sendPost:!0}},playlistEditEndpoint:{playlistId:"WL",actions:b}});qi(d.then(function(e){if(e&&"STATUS_SUCCEEDED"===e.status){if(a.onSuccess)a.onSuccess({},c)}else if(a.onError)a.onError({},c)}),function(){a.ga&&a.ga({},c)})}
function dG(a,b,c){M("web_classic_playlist_one_platform_update")?cG(a,[{addedVideoId:a.videoIds,action:"ACTION_ADD_VIDEO"}]):eG("add_to_watch_later_list",a,b,c)}
function fG(a){M("web_classic_playlist_one_platform_update")?cG(a,[{removedVideoId:a.videoIds,action:"ACTION_REMOVE_VIDEO_BY_VIDEO_ID"}]):eG("delete_from_watch_later_list",a,void 0,void 0)}
function eG(a,b,c,d){Yt(c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1",{method:"POST",Fa:{feature:b.feature||null,authuser:b.mj||null,pageid:b.pageId||null},P:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.xj||null,add_to_playlists:b.lj||null,plid:L("PLAYBACK_ID")||null},context:b.context,onError:b.onError,onSuccess:function(e,f){b.onSuccess.call(this,e,f)},
ga:b.ga,withCredentials:!!d})}
;var gG=[],hG="";function iG(){bB("addto-watch-later-button","click",jG);bB("addto-watch-later-button-success","click",kG);bB("addto-watch-later-button-remove","click",lG);bB("addto-watch-later-button-sign-in","click",mG);var a=C("shared-addto-watch-later-login");gG.push(Du(a,"click",nG,"sign-in-link"));gG.push(Du(a,"focusout",oG,"sign-in-link"))}
function mG(a){hG=V(a,"video-ids");var b=F("sign-in-link",C("shared-addto-watch-later-login"));b&&(K(a,"addto-wl-focused"),N(function(){b.focus()},0))}
function oG(){var a=F("addto-wl-focused");a&&(kq(a,"addto-wl-focused"),N(function(){a.focus()},0))}
function nG(a){var b=zt("/addto_ajax",{action_redirect_to_signin_with_add:1,video_ids:hG,next_url:document.location}),c=hh("form");c.action=b;c.method="POST";b=hh("input");b.type="hidden";b.name=L("XSRF_FIELD_NAME",void 0);b.value=L("XSRF_TOKEN",void 0);c.appendChild(b);document.body.appendChild(c);c.submit();a.preventDefault()}
function jG(a){nq(a,"addto-watch-later-button","addto-watch-later-button-loading");Xg(a,{"aria-pressed":"true"});var b=V(a,"video-ids");dG({videoIds:b,onSuccess:function(c,d){var e=d.list_id;pG(e,b,a);S("playlist-addto",b,e)},
onError:function(c,d){6==d.return_code?pG(d.list_id,b,a):qG(a,d)}})}
function kG(a){nq(a,"addto-watch-later-button-success","addto-watch-later-button-loading");var b=V(a,"video-ids");fG({videoIds:b,onSuccess:function(){nq(a,"addto-watch-later-button-loading","addto-watch-later-button");var c=JA("ADDTO_WATCH_LATER");OD(JD.getInstance(),a,c);S("WATCH_LATER_VIDEO_REMOVED")},
onError:function(c,d){qG(a,d)}})}
function lG(a){var b=V(a,"video-ids");fG({videoIds:b,onSuccess:function(c,d){S("WATCH_LATER_VIDEO_REMOVED",a,d.result.video_count)},
onError:function(c,d){qG(a,d)}})}
function pG(a,b,c){nq(c,"addto-watch-later-button-loading","addto-watch-later-button-success");var d=JA("ADDTO_WATCH_LATER_ADDED");OD(JD.getInstance(),c,d);S("WATCH_LATER_VIDEO_ADDED",a,b.split(","))}
function qG(a,b){nq(a,"addto-watch-later-button-loading","addto-watch-later-button-error");var c=b.error_message||JA("ADDTO_WATCH_LATER_ERROR");OD(JD.getInstance(),a,c)}
;function rG(a){if(!sG||a)sG=Zg(window);return sG}
function tG(){return uG=ah(document)}
function vG(){wG||(wG=Nu(xG,100))}
function xG(){wG=0;yG?bv("page-mouse",yG.f||new Lg):tt(Error("MouseTracker missing during publish."))}
function zG(){AG||(AG=Nu(BG,200))}
function BG(){AG=0;var a=rG(!0);bv("page-resize",a)}
function CG(){DG||(DG=Nu(EG,200))}
function EG(){DG=0;var a=tG();bv("page-scroll",a)}
var sG=null,uG=null,FG=[],yG=null,wG=0,AG=0,DG=0;var GG,HG,IG,JG,KG,LG,MG=0,NG=!1;function OG(){NG||(r("yt.www.page.visibilitymonitor").dispose(),HG={},IG={},GG={},JG={},LG=[],KG=PG(),LG.push(R("page-resize",QG)),LG.push(R("page-scroll",RG)),LG.push(R("yt-dom-content-change",SG)),NG=!0,TG(!0))}
function UG(){NG&&(av(LG),VG(),HG={},IG={},GG={},JG={},LG.length=0,KG=null,NG=!1)}
function QG(){KG=PG();SG()}
function RG(){KG=PG();WG()}
function PG(){var a=tG(),b=rG();return new ij(a.y,a.x+b.width-1,a.y+b.height-1,a.x)}
function XG(a){var b=mu(a),c=GG[b];if(c)return c;c=P(a,"scroll",YG);return c=GG[b]={el:a,fh:c,qb:null}}
function VG(){yb(GG,function(a,b){var c=GG[b];c&&Q(c.fh);delete GG[b]})}
function YG(a){SG(a.target)}
function ZG(a,b){var c=[mu(a),b.complete];if(b.transform){var d=b.transform;c.push(d.top,d.right,d.bottom,d.left)}return c.join(":")}
function $G(a,b){var c;b?c=a:c=rh(a);return c?(c=G(c,"yt-viewport"))?XG(c):null:null}
function aH(a,b){if(a.qb&&!b)return a.qb;var c=bH(a.el),d=$G(a.el);d&&(d=aH(d,b),c=cH(c,d));return a.qb=c}
function bH(a){var b=Aj(a);a=new Ng(a.offsetWidth,a.offsetHeight);return new ij(b.y,b.x+a.width-1,b.y+a.height-1,b.x)}
function cH(a){var b=[],c=[],d=[],e=[];z(arguments,function(m){b.push(m.top);c.push(m.right);d.push(m.bottom);e.push(m.left)});
var f=Math.max.apply(Math,b),g=Math.min.apply(Math,c),k=Math.min.apply(Math,d),l=Math.max.apply(Math,e);return f>k||l>g?new ij(0,0,0,0):new ij(f,g,k,l)}
function dH(a,b){var c=KG,d=bH(a);if(b.transform){var e=b.transform;Ha(e)?(d.top-=e.top,d.right+=e.right,d.bottom+=e.bottom,d.left-=e.left):(d.top-=e,d.right+=Number(void 0),d.bottom+=Number(void 0),d.left-=Number(void 0))}var f;b.complete?f=jj:f=kj;if(!f.call(ij,c,d))return!1;e=$G(a);if(!e)return!0;aH(e);c=cH(c,e.qb);return f.call(ij,c,d)}
function eH(a,b,c){var d=ZG(a,c);b.hasOwnProperty(d)||(b[d]=dH(a,c));return b[d]}
function fH(a,b,c){a=ZG(a,c);if(!!JG[a]!=b)return b?"visible":"hidden"}
function gH(a,b){yb(HG,function(c){if(c&&(!b||sh(b,c.el))){var d=eH(c.el,a,c.options);(d=fH(c.el,d,c.options))&&d==c.type&&N(Na(c.ua,c.el),0)}})}
function hH(a,b){yb(IG,function(c){if(c&&(!b||sh(c.el,b)||sh(b,c.el))){var d=c.filter(c.el);if(d&&d.length){var e=[],f=[],g=[];z(d,function(k){var l=eH(k,a,c.options);l?f.push(k):g.push(k);(l=fH(k,l,c.options))&&l==c.type&&e.push(k)});
e.length&&N(Na(c.ua,e,f,g),0)}}})}
function WG(a){var b={};gH(b,a);hH(b,a);Nb(JG,b)}
function iH(a,b,c,d){return Fb(HG,function(e){return e.el==a&&e.type==b&&e.ua==c&&Ib(e.options,d)})}
function jH(a,b,c,d,e){return Fb(IG,function(f){return f.el==a&&f.type==b&&f.ua==c&&f.className==d&&Ib(f.options,e)})}
function kH(a,b){var c=Vg("yt-viewport",b);z(c,a)}
function lH(a){kH(function(b){XG(b)},a);
qh(a)&&$G(a,!0)}
function mH(a,b){yb(GG,function(c){b&&!sh(b,c.el)||b==c.el||a(c)})}
function nH(a){var b=aH(a,!0);a=a.qb;return!(a==b||a&&b&&a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left)}
function SG(a){if(NG){var b;if(a)for(b=$G(a,!0);b&&nH(b);)b=$G(a);mH(function(c){delete c.qb},b?b.el:a);
WG(a)}}
function oH(a,b){if(!NG)throw Error("yt.www.page.visibilitymonitor is not initialized.");return dH(a,b||{})}
function pH(a,b,c,d){if(!NG)return"";d=d||{transform:void 0,complete:void 0};var e=iH(a,b,c,d);if(e)return e;lH(a);e=++MG+"";HG[e]={el:a,type:b,ua:c,options:d};return e}
function qH(a,b,c,d,e){if(!NG)return"";a=a||document;e=e||{transform:void 0,complete:void 0};var f=jH(a,b,c,d,e);if(f)return f;lH(a);f=++MG+"";IG[f]={el:a,type:b,ua:c,filter:function(g){return Vg(d,g)},
className:d,options:e};return f}
function rH(a){NG&&(delete HG[a],delete IG[a])}
function TG(a){var b=r("yt.www.page.visibilitymonitor");if(a||!b)q("yt.www.page.visibilitymonitor.States.VISIBLE","visible",void 0),q("yt.www.page.visibilitymonitor.States.HIDDEN","hidden",void 0),q("yt.www.page.visibilitymonitor.init",OG,void 0),q("yt.www.page.visibilitymonitor.dispose",UG,void 0),q("yt.www.page.visibilitymonitor.refresh",SG,void 0),q("yt.www.page.visibilitymonitor.isVisible",oH,void 0),q("yt.www.page.visibilitymonitor.listen",pH,void 0),q("yt.www.page.visibilitymonitor.delegateByClass",
qH,void 0),q("yt.www.page.visibilitymonitor.unlistenByKey",rH,void 0)}
TG(!1);function sH(){(function(){try{for(var a=this;a.parent!=a;){if("$"==a.frameElement.src)throw Error("odd");a=a.parent}if(null!=a.frameElement)throw Error("busted");}catch(b){document.close(),document.open(),window.open("/","_top"),vd(top.location,"/")}})()}
function tH(a){"block"==a.responseText&&sH()}
if(window!=window.top){var Dt=document.referrer;if(window.parent!=window.top)sH();else{var uH=Ct();if(null===uH?0:"com"==uH[0]&&uH[1].match(/^youtube(?:kids|-nocookie)?$/))sH();else{var vH=Ct();if(!(null===vH?0:"google"==vH[1]||"google"==vH[2]&&("au"==vH[0]&&"com"==vH[1]||"uk"==vH[0]&&"co"==vH[1]))){var wH={location:encodeURIComponent(Dt),self:encodeURIComponent(window.location.href),user_agent:encodeURIComponent(navigator.userAgent)};Yt("/roger_rabbit",{format:"RAW",method:"POST",Fa:wH,onSuccess:tH})}}}};function KH(a){hy.call(this,1,arguments);this.f=a}
y(KH,hy);function PH(a){hy.call(this,1,arguments);this.f=a}
y(PH,hy);function RH(a,b,c){hy.call(this,3,arguments);this.i=a;this.f=b;this.g=null!=c?!!c:null}
y(RH,hy);function SH(a,b){hy.call(this,1,arguments);this.button=a;this.f=b}
y(SH,hy);function TH(a,b,c,d,e,f){hy.call(this,2,arguments);this.f=a;this.g=b;this.j=c||null;this.i=d||null;this.source=e||null;this.params=f||null}
y(TH,hy);function UH(a,b,c){hy.call(this,1,arguments);this.f=a;this.g=b}
y(UH,hy);function VH(a,b,c,d,e,f,g,k){hy.call(this,1,arguments);this.f=a;this.l=b;this.g=c;this.A=d||null;this.j=e||null;this.i=f||null;this.source=g||null;this.params=k||null}
y(VH,hy);
var WH=new iy("subscription-batch-subscribe",KH),XH=new iy("subscription-batch-unsubscribe",KH),YH=new iy("subscription-show-pref-overlay",SH),ZH=new iy("subscription-subscribe",TH),$H=new iy("subscription-subscribe-loading",PH),aI=new iy("subscription-subscribe-loaded",PH),bI=new iy("subscription-subscribe-success",UH),cI=new iy("subscription-subscribe-external",TH),dI=new iy("subscription-unsubscribe",VH),eI=new iy("subscription-unsubscirbe-loading",PH),fI=new iy("subscription-unsubscribe-loaded",PH),
gI=new iy("subscription-unsubscribe-success",PH),hI=new iy("subscription-external-unsubscribe",VH),iI=new iy("subscription-enable-ypc",PH),jI=new iy("subscription-disable-ypc",PH),kI=new iy("subscription-prefs",RH),lI=new iy("subscription-prefs-success",RH),mI=new iy("subscription-prefs-failure",RH);var oC,nI=[],oI=[],pI=null,qI=null;function rI(a){pI=a.f;qI=a.g}
function sI(){if(pI){var a=Vg("overlay-confirmation-preferences-update-frequency",oC);if(a=eb(a,function(b){return b.value==pI}))a.checked=!0,jC()}(a=F("receive-post-updates-checkbox",oC))&&null!==qI&&mC(a,qI)}
function tI(){return F("receive-post-updates-checkbox",oC)}
function uI(){var a=tI();a&&!a.disabled&&(qI=a.checked)}
function vI(){var a=tI();a&&("receive-no-updates"==nC()?(mC(a,!1),a.disabled=!0):(a.disabled=!1,null!==qI&&mC(a,qI)))}
function wI(a){a=G(a.currentTarget,"overlay-confirmation-content");var b=F("updates-frequency-menu",a);b&&(b.disabled=!F("receive-all-updates",a).checked)}
function xI(a){var b=a.currentTarget;a=V(b,"frequency");var c=iB.getInstance();b=G(b,X(c,"menu"));c=iB.getInstance();b=mB(c,b);V(b,"frequency")!=a&&kz(b,"frequency",a)}
function yI(a){a=F("subscription-preferences-overlay-container",rh(a));return F("yt-dialog",a)}
function zI(a){oC||(oC=yI(a.button));AI(!0);DC.getInstance().show(oC);var b={};b.c=a.f;Yt("/subscription_ajax?action_get_subscription_preferences_overlay=1",{method:"POST",P:b,Ia:!0,onSuccess:function(c,d){var e=d.content_html;AI(!1);var f=F("subscription-preferences-overlay-content",oC);qd(f,e);e=IC();f=F("overlay-confirmation-save-button",e);Q(oI);oI.length=0;oI.push(P(f,"click",BI),Du(e,"click",wI,"receive-all-updates"),Du(e,"keypressed",wI,"receive-all-updates"),Du(e,"click",uI,"receive-post-updates"),
Du(e,"keypressed",uI,"receive-post-updates"),Du(e,"click",vI,"overlay-confirmation-preferences-update-frequency"),Du(e,"keypressed",vI,"overlay-confirmation-preferences-update-frequency"),Du(document.body,"click",xI,"updates-frequency-choice"));pI=nC();qI=(e=tI())?e.checked:null},
onError:function(){DC.getInstance().hide()}})}
function AI(a){var b=oC,c=F("subscription-preferences-overlay-loading",b);b=F("subscription-preferences-overlay-content",b);RA(c,a);RA(b,!a)}
function BI(a){var b=G(a.currentTarget,"yt-dialog-fg");if(b){a=V(a.currentTarget,"channel-external-id");var c=nC(),d=tI();if(c)a=new RH(a,c,d?d.checked:null);else{c=F("receive-all-updates",b);var e=F("updates-frequency-menu",b);b=!1;var f=!e||J(e,"hidden");f||"occasionally"!=V(e,"frequency")||(b=!0);e="receive-highlight-updates";c.checked&&!b?e="receive-all-updates":f||c.checked||(e="receive-no-updates");a=new RH(a,e,d?d.checked:null)}T(kI,a);DC.getInstance().hide()}}
;function CI(a,b){hy.call(this,1,arguments);this.container=a;this.offerId=b||null}
y(CI,hy);function DI(a){hy.call(this,1,arguments);this.callback=a}
y(DI,hy);function EI(a,b){hy.call(this,2,arguments);this.g=a;this.f=b}
y(EI,hy);function FI(a,b,c,d){hy.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
y(FI,hy);function GI(a,b){hy.call(this,1,arguments);this.g=a;this.f=b||null}
y(GI,hy);function HI(a){hy.call(this,1,arguments);this.f=a}
y(HI,hy);var II=new iy("ypc-init-purchase-for-container",CI),JI=new iy("ypc-core-load",DI),KI=new iy("ypc-guide-sync-success",EI),LI=new iy("ypc-purchase-success",FI),MI=new iy("ypc-subscription-cancel",HI),NI=new iy("ypc-subscription-cancel-success",GI),OI=new iy("ypc-init-subscription",HI);var PI=[];function QI(a){a.g?T(JI,new DI(function(){T(OI,new HI(a.g))})):M("web_classic_innertube_subscription_update")?RI(a.f,a.params):SI(a.f,a.j,a.i,a.source,a.params)}
function TI(a){a.g?T(JI,new DI(function(){T(MI,new HI(a.g))})):M("web_classic_innertube_subscription_update")?UI(a.f,a.params):VI(a.f,a.l,a.j,a.i,a.source)}
function WI(a){XI(nb(a.f))}
function YI(a){ZI(nb(a.f))}
function $I(a){aJ(a.i,a.f,a.g)}
function bJ(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&T(bI,new UH(b,c,a.f.channelInfo))}
function cJ(a){var b=a.f;yb(a.g,function(c,d){T(bI,new UH(d,c,b[d]))})}
function dJ(a){T(gI,new PH(a.g.itemId));a.f&&a.f.length&&(eJ(a.f,gI),eJ(a.f,iI))}
function RI(a,b){var c=new PH(a);T($H,c);qi(GF({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/subscribe"}},subscribeEndpoint:{channelIds:[a],params:b}}).then(function(){T(bI,new UH(a,Math.round(1E4*Math.random()).toString(),{thumbnail:"",title:"",url:"",qj:a}))}),function(){T(aI,c)})}
function SI(a,b,c,d,e){var f=new PH(a);T($H,f);var g={};g.c=a;c&&(g.eurl=c);d&&(g.source=d);c={};(d=L("PLAYBACK_ID"))&&(c.plid=d);(d=L("EVENT_ID"))&&(c.ei=d);e&&(c.params=e);b&&fJ(b,c);Yt("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Fa:g,P:c,onSuccess:function(k,l){var m=l.response;T(bI,new UH(a,m.id,m.channel_info));m.show_feed_privacy_dialog&&S("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
ga:function(){T(aI,f)}})}
function UI(a,b){var c=new PH(a);T(eI,c);qi(GF({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/unsubscribe"}},unsubscribeEndpoint:{channelIds:[a],params:b}}).then(function(){T(gI,c)}),function(){T(fI,c)})}
function VI(a,b,c,d,e){var f=new PH(a);T(eI,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=L("PLAYBACK_ID"))&&(d.plid=a);(a=L("EVENT_ID"))&&(d.ei=a);c&&fJ(c,d);Yt("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Fa:g,P:d,onSuccess:function(){T(gI,f)},
ga:function(){T(fI,f)}})}
function aJ(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new RH(a,b,c);Yt("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",P:d,onError:function(){T(mI,e)},
onSuccess:function(){T(lI,e)}})}}
function XI(a){if(a.length){var b=pb(a,0,40);T("subscription-batch-subscribe-loading");eJ(b,$H);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");eJ(b,aI)};
Yt("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",P:c,onSuccess:function(e,f){d();var g=f.response,k=g.id;if(Array.isArray(k)&&k.length==b.length){var l=g.channel_info_map;z(k,function(m,n){var t=b[n];T(bI,new UH(t,m,l[t]))});
a.length?XI(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function ZI(a){if(a.length){var b=pb(a,0,40);T("subscription-batch-unsubscribe-loading");eJ(b,eI);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");eJ(b,fI)};
Yt("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",P:c,onSuccess:function(){d();eJ(b,gI);a.length&&ZI(a)},
onError:function(){d()}})}}
function eJ(a,b){z(a,function(c){T(b,new PH(c))})}
function fJ(a,b){var c=wt(a);Oa(b,c)}
;var gJ={},hJ=[];function iJ(a){a=G(a,"yt-uix-button-subscription-container");a=F("unsubscribe-confirmation-overlay-container",a);return F("yt-dialog",a)}
function jJ(a,b){Q(hJ);hJ.length=0;gJ[b]||(gJ[b]=iJ(a));DC.getInstance().show(gJ[b]);var c=IC();return new gi(function(d){hJ.push(Du(c,"click",function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function kJ(a){for(var b=0,c=a.length;b<c;b++){var d;if(d=Wg("IMG",null,a[b])){var e=V(d,"thumb");e&&(d.src=e,mz(d,"thumb"))}}}
;function lJ(){var a=L("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!L("SESSION_INDEX")&&!L("LOGGED_IN"))}
;function mJ(){W.call(this,"simple-thumb-wrap")}
var nJ,oJ;y(mJ,W);Da(mJ);var pJ="",qJ=/__VIDEO_ID__/g;
mJ.prototype.register=function(){if(pJ=L("WATCH_LATER_BUTTON",void 0)){nJ=L("WATCH_QUEUE_BUTTON",void 0);oJ=L("WATCH_QUEUE_MENU",void 0);var a=Vg(X(this));z(a,function(b){var c=lJ(),d=G(b,"thumb-wrapper");if(!(d&&(c?F("addto-watch-later-button",d):F("addto-watch-later-button-sign-in",d)))){var e=this.C(b,"vid");c=pJ.replace(qJ,e);d=nJ.replace(qJ,e);e=oJ.replace(qJ,e);var f=G(b,"thumb-wrapper");f.appendChild(ih(Ui(c)));f.appendChild(ih(Ui(e)));f.appendChild(ih(Ui(d)));(b=G(b,"video-list-item"))&&kq(b,
"show-video-time")}},this)}};
mJ.prototype.unregister=function(){mJ.L.unregister.call(this);oJ=nJ=pJ=""};function rJ(a){var b=sJ();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=R("LOGGED_IN",function(d){av(L("LOGGED_IN_PUBSUB_KEY",void 0));nt("LOGGED_IN",!0);a(d)});
nt("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function sJ(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=Vd(a,"mode","subscribe");a=Vd("/signin?context=popup","next",a);return a=Vd(a,"feature","sub_button")}
q("yt.pubsub.publish",S,void 0);function tJ(){W.call(this,"subscription-button")}
y(tJ,W);Da(tJ);h=tJ.prototype;h.register=function(){Y(this,"click",this.Qc);fB(this,$H,this.Xd);fB(this,aI,this.Wd);fB(this,bI,this.Kh);fB(this,eI,this.Xd);fB(this,fI,this.Wd);fB(this,gI,this.Qg);fB(this,iI,this.yg);fB(this,jI,this.xg)};
h.unregister=function(){Z(this,"click",this.Qc);tJ.L.unregister.call(this)};
h.isSubscribed=function(a){return!!this.C(a,"is-subscribed")};
h.Qc=function(a){var b=this.C(a,"href"),c=this.C(a,"insecure");if(b)a=this.C(a,"target")||"_self",window.open(b,a);else if(!c)if(lJ()){b=this.Ab(a);c=this.C(a,"clicktracking");var d=uJ(this,a),e=this.C(a,"parent-url");if(this.C(a,"is-subscribed")){var f=this.C(a,"subscription-id"),g=this.C(a,"unsubscribe-params"),k=new VH(b,f,d,a,c,e,g);this.C(a,"show-unsub-confirm-dialog")?jJ(a,b).then(function(){T(dI,k)}):T(dI,k)}else a=this.C(a,"params"),T(ZH,new TH(b,d,c,e,void 0,a))}else vJ(this,a)};
h.Xd=function(a){this.vb(a.f,this.pe,!0)};
h.Wd=function(a){this.vb(a.f,this.pe,!1)};
h.Kh=function(a){this.vb(a.f,this.qe,!0,a.g)};
h.Qg=function(a){this.vb(a.f,this.qe,!1)};
h.yg=function(a){this.vb(a.f,this.Xe)};
h.xg=function(a){this.vb(a.f,this.We)};
h.qe=function(a,b,c){b?(kz(a,"is-subscribed","true"),c&&kz(a,"subscription-id",c)):(mz(a,"is-subscribed"),mz(a,"subscription-id"));wJ(this,a)};
h.Ab=function(a){return this.C(a,"channel-external-id")};
function uJ(a,b){if(!a.C(b,"ypc-enabled"))return null;var c=a.C(b,"ypc-item-type"),d=a.C(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
h.pe=function(a,b){var c=G(a,"yt-uix-button-subscription-container");mq(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function wJ(a,b){var c=a.C(b,"style-type"),d=!!a.C(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;mq(b,"yt-uix-button-subscribe"+c,!d);mq(b,e,d);a.C(b,"subscriber-count-tooltip")&&!a.C(b,"subscriber-count-show-when-subscribed")&&(c=X(JD.getInstance()),mq(b,c,!d),b.title=d?"":a.C(b,"subscriber-count-title"));d?N(function(){K(b,"hover-enabled")},1E3):kq(b,"hover-enabled")}
h.Xe=function(a){var b=!!this.C(a,"ypc-item-type"),c=!!this.C(a,"ypc-item-id");!this.C(a,"ypc-enabled")&&b&&c&&(K(a,"ypc-enabled"),kz(a,"ypc-enabled","true"))};
h.We=function(a){this.C(a,"ypc-enabled")&&(kq(a,"ypc-enabled"),mz(a,"ypc-enabled"))};
function xJ(a,b){var c=Vg(X(a));return Za(c,function(d){return b==this.Ab(d)},a)}
h.Jh=function(a,b,c){var d=qb(arguments,2);z(a,function(e){b.apply(this,mb(e,d))},this)};
h.vb=function(a,b,c){var d=xJ(this,a);d=mb([d],qb(arguments,1));this.Jh.apply(this,d)};
function vJ(a,b){var c=v(function(d){d.discoverable_subscriptions&&nt("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.Qc(b)},a);
rJ(c)}
;function yJ(){W.call(this,"subscription-preferences-button")}
y(yJ,W);Da(yJ);yJ.prototype.register=function(){Y(this,"click",this.Ne);fB(this,bI,this.Mh);fB(this,lI,this.Rg)};
yJ.prototype.unregister=function(){Z(this,"click",this.Ne);yJ.L.unregister.call(this)};
var zJ={"receive-all-updates":"yt-uix-subscription-notifications-all","receive-highlight-updates":"yt-uix-subscription-notifications-highlights","receive-no-updates":"yt-uix-subscription-notifications-none"};h=yJ.prototype;h.Ne=function(a){var b=this.Ab(a);T(YH,new SH(a,b))};
h.ue=function(a,b){lq(a,["yt-uix-subscription-notifications-all","yt-uix-subscription-notifications-highlights","yt-uix-subscription-notifications-none"]);K(a,b)};
h.Rg=function(a){this.Me(a.i,this.ue,zJ[a.f])};
h.Mh=function(a){this.Me(a.f,this.ue,"yt-uix-subscription-notifications-highlights")};
h.Ab=function(a){return this.C(a,"channel-external-id")};
h.Me=function(a,b,c){var d=AJ(this,a);d=mb([d],qb(arguments,1));this.Lh.apply(this,d)};
function AJ(a,b){var c=Vg(X(a));return Za(c,function(d){return b==this.Ab(d)},a)}
h.Lh=function(a,b,c){var d=qb(arguments,2);z(a,function(e){b.apply(this,mb(e,d))},this)};var BJ=0,CJ=null,DJ=null;var EJ=0,FJ=[],GJ=[],HJ=0,IJ={},JJ={},LJ=new Vp(KJ,1E3);function MJ(){HJ++;var a=Zg(window),b=new lj(0,0,a.width,a.height);Vy("vph",a.height);Vy("vpw",a.width);Wy("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[];LJ.start();for(var e=0;e<c;e++){var f=a[e];NJ(f,b)&&(f=OJ(f),f.then(PJ),d.push(f),FJ.push(f))}Wy("vpcc");b=oi(d).then(QJ);pi(b,null,RJ,void 0);b.then(SJ);FJ.push(b);return b}
function SJ(){LJ.stop()}
function RJ(){Wy("vpr")}
function NJ(a,b){for(var c=a,d=[];c!=document.body;){var e=mu(c);if(e in IJ)return!0;if(e in JJ)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return JJ[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return JJ[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)IJ[d[c]]=!0;return!0}
function QJ(a){var b=Zg(window);b=new lj(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;NJ(a[d].If,b)&&c<f&&(c=f)}return c}
function OJ(a){var b=HJ;return new gi(function(c,d){var e={If:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){HJ!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},GJ.push(a))})}
function PJ(a){LJ.start();a=a.time;EJ<a&&(EJ=a,Wy("lim",a))}
function KJ(){Wy("vptl",EJ);Wy("vpl",EJ)}
function TJ(){FJ.forEach(function(a){a.cancel()});
EJ=FJ.length=0;IJ={};JJ={};GJ.forEach(function(a){a.slt=void 0});
GJ.length=0}
;function UJ(){Wy("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){Wy("cpt");S("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(Wy("cpt"),S("on_cpt_tick",(new Date).getTime())):setTimeout(function(){Wy("cpt");
S("on_cpt_tick",(new Date).getTime())},0);
VJ();L("CSI_VIEWPORT")&&(WJ=MJ(),WJ.then(function(a){Wy("vpl",a);WJ=null},function(){}))}
function VJ(){XJ("init");var a=L("PAGE_NAME",void 0);a&&XJ("init-"+a)}
var WJ=null;function XJ(a){r("yt.scheduler.instance")?YJ.push(Nu(Na(bv,a),0)):S(a)}
var YJ=[];var ZJ;function $J(){if(!ZJ){var a=C("watch-queue");if(!a)return[];ZJ=F("watch-queue-items-list",a)}if(!ZJ)return[];var b=[];a=nh(ZJ);z(a,function(c){(c=V(c,"video-id"))&&b.push(c)});
return b}
;var aK={ai:"atp",fj:"ska",Pi:"que",Li:"mus",ej:"sus",xi:"dsp",Zi:"seq"};function bK(a){this.port=this.domain="";this.f="/api/lounge";this.g=!0;a=a||document.location.href;var b=Number(Nd(4,a))||"";b&&(this.port=":"+b);this.domain=Od(a)||"";a=Pc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>pc(a,"10.0")&&(this.g=!1))}
function cK(a,b){var c=a.f;a.g&&(c="https://"+a.domain+a.port+a.f);return Wd(c+b,{})}
function dK(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:Na(a.j,d,!0),onError:Na(a.i,e),ab:Na(a.l,e)};c&&(a.P=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Yt(b,a)}
bK.prototype.j=function(a,b,c,d){b?a(d):a({text:c.responseText})};
bK.prototype.i=function(a,b){a(Error("Request error: "+b.status))};
bK.prototype.l=function(a){a(Error("request timed out"))};var eK=x(),fK=null,gK=Array(50),hK=-1,iK=!1;function jK(){var a=kK;lK();fK.push(a);mK(fK)}
function nK(a,b){lK();var c=fK,d=oK(a,String(b));0==c.length?pK(d):(mK(c),z(c,function(e){e(d)}))}
function lK(){fK||(fK=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",fK,void 0))}
function pK(a){var b=(hK+1)%50;hK=b;gK[b]=a;iK||(iK=49==b)}
function mK(a){var b=gK;if(b[0]){var c=hK,d=iK?c:-1;do{d=(d+1)%50;var e=b[d];z(a,function(f){f(e)})}while(d!=c);
gK=Array(50);hK=-1;iK=!1}}
function oK(a,b){var c=(x()-eK)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function qK(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function rK(a,b){return!!b&&(a.id==b||a.uuid==b)}
function sK(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function tK(a){return new qK(a)}
function uK(a){return Array.isArray(a)?$a(a,tK):[]}
function vK(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function wK(a){return Array.isArray(a)?"["+$a(a,vK).join(",")+"]":"null"}
;function xK(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function yK(a,b){return eb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})}
function zK(a,b){return eb(a,function(c){return rK(c,b)})}
;function AK(a){a=void 0===a?!1:a;Uf.call(this);this.A=new Es(a);Vf(this,Na(Wf,this.A))}
y(AK,Uf);AK.prototype.subscribe=function(a,b,c){return this.R()?0:this.A.subscribe(a,b,c)};
AK.prototype.Id=function(a,b){this.R()||Gs(this.A,a,b,void 0)};
AK.prototype.ta=function(a){return this.R()?!1:this.A.ta(a)};
AK.prototype.H=function(a,b){this.R()||this.A.la.apply(this.A,arguments)};function BK(a){AK.call(this);this.B=a;this.screens=[]}
y(BK,AK);BK.prototype.oa=function(){return this.screens};
BK.prototype.mc=function(a){return!!yK(this.screens,a)};
BK.prototype.get=function(a){return a?zK(this.screens,a):null};
function CK(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0}
function DK(a,b){var c=a.screens.length!=b.length;a.screens=Za(a.screens,function(f){return!!yK(b,f)});
for(var d=0,e=b.length;d<e;d++)c=CK(a,b[d])||c;return c}
function EK(a,b){var c=a.screens.length;a.screens=Za(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c}
BK.prototype.info=function(a){nK(this.B,a)};function FK(a,b,c,d){AK.call(this);this.D=a;this.B=b;this.j=c;this.l=d;this.i=0;this.f=null;this.g=NaN}
sa(FK,AK);h=FK.prototype;h.start=function(){!this.f&&isNaN(this.g)&&this.fe()};
h.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.g)||(O(this.g),this.g=NaN)};
h.K=function(){this.stop();AK.prototype.K.call(this)};
h.fe=function(){this.g=NaN;this.f=Yt(cK(this.D,"/pairing/get_screen"),{method:"POST",P:{pairing_code:this.B},timeout:5E3,onSuccess:v(this.wh,this),onError:v(this.vh,this),ab:v(this.xh,this)})};
h.wh=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.j;c.name=this.l;this.H("pairingComplete",new qK(c))};
h.vh=function(a){this.f=null;a.status&&404==a.status?this.i>=GK.length?this.H("pairingFailed",Error("DIAL polling timed out")):(a=GK[this.i],this.g=N(v(this.fe,this),a),this.i++):this.H("pairingFailed",Error("Server error "+a.status))};
h.xh=function(){this.f=null;this.H("pairingFailed",Error("Server not responding"))};
var GK=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];function HK(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.i=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new cq;this.f=this.g="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",IK(this,a.capabilities||""),JK(this,a.experiments||""),this.g=
a.remoteControllerUrl||"",this.f=a.localChannelEncryptionKey||"")}
HK.prototype.copy=function(){var a=new HK({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.i=this.i;a.g=this.g;a.f=this.f;return a};
HK.prototype.equals=function(a){return a?this.id==a.id:!1};
function IK(a,b){a.capabilities.clear();Za(b.split(","),Na(Bb,aK)).forEach(function(c){a.capabilities.add(c)})}
function JK(a,b){a.experiments.clear();b.split(",").forEach(function(c){a.experiments.add(c)})}
;var KK;function LK(){var a=MK(),b=NK();hb(a,b);if(OK()){var c=a;var d=0;for(var e=c.length,f;d<e;){var g=d+(e-d>>>1);var k=tb(b,c[g]);0<k?d=g+1:(e=g,f=!k)}d=f?d:-d-1;0>d&&pb(c,-(d+1),0,b)}a=PK(a);if(0==a.length)try{Iv("remote_sid")}catch(l){}else try{Gv("remote_sid",a.join(","),-1,"/")}catch(l){}}
function MK(){var a=OA("yt-remote-connected-devices")||[];a.sort(tb);return a}
function PK(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return $a(a,function(d,e){return 0==e?d:d.substring(c.length)})}
function QK(a){LA("yt-remote-connected-devices",a,86400)}
function NK(){if(RK)return RK;var a=OA("yt-remote-device-id");a||(a=xK(),LA("yt-remote-device-id",a,31536E3));for(var b=MK(),c=1,d=a;hb(b,d);)c++,d=a+"#"+c;return RK=d}
function SK(){return OA("yt-remote-session-browser-channel")}
function OK(){return OA("yt-remote-session-screen-id")}
function TK(a){5<a.length&&(a=a.slice(a.length-5));var b=$a(UK(),function(d){return d.loungeToken}),c=$a(a,function(d){return d.loungeToken});
db(c,function(d){return!hb(b,d)})&&VK();
LA("yt-remote-local-screens",a,31536E3)}
function UK(){return OA("yt-remote-local-screens")||[]}
function VK(){LA("yt-remote-lounge-token-expiration",!0,86400)}
function WK(a,b){LA("yt-remote-session-browser-channel",a);LA("yt-remote-session-screen-id",b);var c=MK(),d=NK();hb(c,d)||c.push(d);QK(c);LK()}
function XK(a){a||(PA("yt-remote-session-screen-id"),PA("yt-remote-session-video-id"));LK();a=MK();jb(a,NK());QK(a)}
function YK(){if(!KK){var a=ct();a&&(KK=new Js(a))}return KK?!!KK.get("yt-remote-use-staging-server"):!1}
var RK="";function ZK(a){BK.call(this,"LocalScreenService");this.g=a;this.f=NaN;$K(this);this.info("Initializing with "+wK(this.screens))}
y(ZK,BK);h=ZK.prototype;h.start=function(){$K(this)&&this.H("screenChange");!OA("yt-remote-lounge-token-expiration")&&aL(this);O(this.f);this.f=N(v(this.start,this),1E4)};
h.add=function(a,b){$K(this);CK(this,a);bL(this,!1);this.H("screenChange");b(a);a.token||aL(this)};
h.remove=function(a,b){var c=$K(this);EK(this,a)&&(bL(this,!1),c=!0);b(a);c&&this.H("screenChange")};
h.jc=function(a,b,c,d){var e=$K(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,bL(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.H("screenChange")};
h.K=function(){O(this.f);ZK.L.K.call(this)};
function aL(a){if(a.screens.length){var b=$a(a.screens,function(d){return d.id}),c=cK(a.g,"/pairing/get_lounge_token_batch");
dK(a.g,c,{screen_ids:b.join(",")},v(a.uf,a),v(a.tf,a))}}
h.uf=function(a){$K(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}bL(this,!b);b&&nK(this.B,"Missed "+b+" lounge tokens.")};
h.tf=function(a){nK(this.B,"Requesting lounge tokens failed: "+a)};
function $K(a){var b=uK(UK());b=Za(b,function(c){return!c.uuid});
return DK(a,b)}
function bL(a,b){TK($a(a.screens,sK));b&&VK()}
;function cL(a,b){AK.call(this);this.B=b;var c=OA("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.B(),f=0,g=e.length;f<g;++f){var k=e[f].id;d[k]=hb(c,k)}this.f=d;this.l=a;this.i=this.j=NaN;this.g=null;dL("Initialized with "+zq(this.f))}
sa(cL,AK);h=cL.prototype;h.start=function(){var a=parseInt(OA("yt-remote-fast-check-period")||"0",10);(this.j=x()-144E5<a?0:a)?eL(this):(this.j=x()+3E5,LA("yt-remote-fast-check-period",this.j),this.Jc())};
h.isEmpty=function(){return Gb(this.f)};
h.update=function(){dL("Updating availability on schedule.");var a=this.B(),b=zb(this.f,function(c,d){return c&&!!zK(a,d)},this);
fL(this,b)};
function gL(a,b,c){var d=cK(a.l,"/pairing/get_screen_availability");dK(a.l,d,{lounge_token:b.token},v(function(e){e=e.screens||[];for(var f=0,g=e.length;f<g;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),v(function(){c(!1)},a))}
h.K=function(){O(this.i);this.i=NaN;this.g&&(this.g.abort(),this.g=null);AK.prototype.K.call(this)};
function fL(a,b){a:if(Ab(b)!=Ab(a.f))var c=!1;else{c=Eb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(dL("Updated online screens: "+zq(a.f)),a.f=b,a.H("screenChange"));hL(a)}
function eL(a){isNaN(a.i)||O(a.i);a.i=N(v(a.Jc,a),0<a.j&&a.j<x()?2E4:1E4)}
h.Jc=function(){O(this.i);this.i=NaN;this.g&&this.g.abort();var a=iL(this);if(Ab(a)){var b=cK(this.l,"/pairing/get_screen_availability");this.g=dK(this.l,b,{lounge_token:Eb(a).join(",")},v(this.Ig,this,a),v(this.Hg,this))}else fL(this,{}),eL(this)};
h.Ig=function(a,b){this.g=null;var c=Eb(iL(this));if(rb(c,Eb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;fL(this,d);eL(this)}else this.U("Changing Screen set during request."),this.Jc()};
h.Hg=function(a){this.U("Screen availability failed: "+a);this.g=null;eL(this)};
function dL(a){nK("OnlineScreenService",a)}
h.U=function(a){nK("OnlineScreenService",a)};
function iL(a){var b={};z(a.B(),function(c){c.token?b[c.token]=c.id:this.U("Requesting availability of screen w/o lounge token.")});
return b}
function hL(a){a=Eb(zb(a.f,function(b){return b}));
a.sort(tb);a.length?LA("yt-remote-online-screen-ids",a.join(","),60):PA("yt-remote-online-screen-ids")}
;function jL(a){BK.call(this,"ScreenService");this.l=a;this.f=this.g=null;this.i=[];this.j={};kL(this)}
y(jL,BK);h=jL.prototype;h.start=function(){this.g.start();this.f.start();this.screens.length&&(this.H("screenChange"),this.f.isEmpty()||this.H("onlineScreenChange"))};
h.add=function(a,b,c){this.g.add(a,b,c)};
h.remove=function(a,b,c){this.g.remove(a,b,c);this.f.update()};
h.jc=function(a,b,c,d){this.g.mc(a)?this.g.jc(a,b,c,d):(a="Updating name of unknown screen: "+a.name,nK(this.B,a),d(Error(a)))};
h.oa=function(a){return a?this.screens:mb(this.screens,Za(this.i,function(b){return!this.mc(b)},this))};
h.ye=function(){return Za(this.oa(!0),function(a){return!!this.f.f[a.id]},this)};
function lL(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.j[b]);var g=a.oa();if(g=(c?zK(g,c):null)||zK(g,b)){g.uuid=b;var k=mL(a,g);gL(a.f,k,function(l){e(l?k:null)})}else c?nL(a,c,v(function(l){var m=mL(this,new qK({name:d,
screenId:c,loungeToken:l,dialId:b||""}));gL(this.f,m,function(n){e(n?m:null)})},a),f):e(null)}
h.ze=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new FK(this.l,a,b,c);f.subscribe("pairingComplete",v(function(g){Wf(f);d(mL(this,g))},this));
f.subscribe("pairingFailed",function(g){Wf(f);e(g)});
f.start();return v(f.stop,f)};
function oL(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
h.zh=function(a,b,c,d){Yt(cK(this.l,"/pairing/get_screen"),{method:"POST",P:{pairing_code:a},timeout:5E3,onSuccess:v(function(e,f){var g=new qK(f.screen||{});if(!g.name||oL(this,g.name)){a:{var k=g.name;for(var l=2,m=b(k,l);oL(this,m);){l++;if(20<l)break a;m=b(k,l)}k=m}g.name=k}c(mL(this,g))},this),
onError:v(function(e){d(Error("pairing request failed: "+e.status))},this),
ab:v(function(){d(Error("pairing request timed out."))},this)})};
h.K=function(){Wf(this.g);Wf(this.f);jL.L.K.call(this)};
function nL(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={P:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,g){var k=g&&g.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Yt(cK(a.l,"/pairing/get_lounge_token_batch"),e)}
function pL(a){a.screens=a.g.oa();var b=a.j,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+wK(a.screens))}
h.Df=function(){pL(this);this.H("screenChange");this.f.update()};
function kL(a){qL(a);a.g=new ZK(a.l);a.g.subscribe("screenChange",v(a.Df,a));pL(a);a.i=uK(OA("yt-remote-automatic-screen-cache")||[]);qL(a);a.info("Initializing automatic screens: "+wK(a.i));a.f=new cL(a.l,v(a.oa,a,!0));a.f.subscribe("screenChange",v(function(){this.H("onlineScreenChange")},a))}
function mL(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=zK(a.i,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.i.push(b),LA("yt-remote-automatic-screen-cache",$a(a.i,sK)));qL(a);a.j[b.uuid]=b.id;LA("yt-remote-device-id-map",a.j,31536E3);return b}
function qL(a){a.j=OA("yt-remote-device-id-map")||{}}
jL.prototype.dispose=jL.prototype.dispose;function rL(a,b,c){AK.call(this);this.V=c;this.M=a;this.f=b;this.J=null}
y(rL,AK);h=rL.prototype;h.getScreen=function(){return this.J};
h.Xb=function(a){this.J=a;this.H("sessionScreen",this.J)};
h.ma=function(a){this.R()||(a&&sL(this,""+a),this.J=null,this.H("sessionScreen",null))};
h.info=function(a){nK(this.V,a)};
function sL(a,b){nK(a.V,b)}
h.Be=function(){return null};
h.Lc=function(a){var b=this.f;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,v(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),v(function(){sL(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
h.K=function(){this.Lc("");rL.L.K.call(this)};function tL(a,b){rL.call(this,a,b,"CastSession");this.g=null;this.i=0;this.l=v(this.Ah,this);this.j=v(this.Tg,this);this.i=N(v(function(){uL(this,null)},this),12E4)}
y(tL,rL);h=tL.prototype;h.Kc=function(a){if(this.g){if(this.g==a)return;sL(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.l);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j)}this.g=a;this.g.addUpdateListener(this.l);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.j);vL(this)};
h.lb=function(a){this.info("launchWithParams no-op for Cast: "+zq(a))};
h.stop=function(){this.g?this.g.stop(v(function(){this.ma()},this),v(function(){this.ma(Error("Failed to stop receiver app."))},this)):this.ma(Error("Stopping cast device witout session."))};
h.Lc=Ca;h.K=function(){this.info("disposeInternal");O(this.i);this.i=0;this.g&&(this.g.removeUpdateListener(this.l),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j));this.g=null;tL.L.K.call(this)};
function vL(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+zq(void 0));var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,Ca,v(function(){sL(this,"Failed to send message: getMdxSessionStatus.")},a)):sL(a,"Sending yt message without session: "+zq(b))}
h.Tg=function(a,b){if(!this.R())if(b){var c=Fq(b);if(Ha(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+zq(c));switch(d){case "mdxSessionStatus":uL(this,c.screenId);break;default:sL(this,"Unknown youtube message: "+d)}}else sL(this,"Unable to parse message.")}else sL(this,"No data in message.")};
function uL(a,b){O(a.i);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.getScreen()||a.getScreen().id!=b){var c=v(a.Xb,a),d=v(a.ma,a);a.ud(b,c,d,5)}}else a.ma(Error("Waiting for session status timed out."))}
h.ud=function(a,b,c,d){lL(this.M,this.f.label,a,this.f.friendlyName,v(function(e){e?b(e):0<=d?(sL(this,"Screen "+a+" appears to be offline. "+d+" retries left."),N(v(this.ud,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
h.Be=function(){return this.g};
h.Ah=function(a){this.R()||a||(sL(this,"Cast session died."),this.ma())};function wL(a,b,c){rL.call(this,a,b,"DialSession");this.i=this.D=null;this.O="";this.Z=c;this.j=null;this.B=Ca;this.l=NaN;this.T=v(this.Dh,this);this.g=Ca}
y(wL,rL);h=wL.prototype;h.Kc=function(a){this.i=a;this.i.addUpdateListener(this.T)};
h.lb=function(a){this.j=a;this.B()};
h.stop=function(){this.g();this.g=Ca;O(this.l);this.i?this.i.stop(v(this.ma,this,null),v(this.ma,this,"Failed to stop DIAL device.")):this.ma()};
h.K=function(){this.g();this.g=Ca;O(this.l);this.i&&this.i.removeUpdateListener(this.T);this.i=null;wL.L.K.call(this)};
function xL(a){a.g=a.M.ze(a.O,a.f.label,a.f.friendlyName,v(function(b){this.g=Ca;this.Xb(b)},a),v(function(b){this.g=Ca;
this.ma(b)},a))}
h.Dh=function(a){this.R()||a||(sL(this,"DIAL session died."),this.g(),this.g=Ca,this.ma())};
function yL(a){var b={};b.pairingCode=a.O;b.theme=a.Z;if(a.j){var c=a.j.currentTime||0;b.v=a.j.videoId;b.t=c}YK()&&(b.env_useStageMdx=1);return Ud(b)}
h.Dc=function(a){this.O=xK();if(this.j){var b=new chrome.cast.DialLaunchResponse(!0,yL(this));a(b);xL(this)}else this.B=v(function(){O(this.l);this.B=Ca;this.l=NaN;var c=new chrome.cast.DialLaunchResponse(!0,yL(this));a(c);xL(this)},this),this.l=N(v(function(){this.B()},this),100)};
h.Kf=function(a,b,c){lL(this.M,this.D.receiver.label,a,this.f.friendlyName,v(function(d){d&&d.token?(this.Xb(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Dc(b,c)},this),v(function(d){sL(this,"Failed to get DIAL screen: "+d);
this.Dc(b,c)},this))};function zL(a,b){rL.call(this,a,b,"ManualSession");this.g=N(v(this.lb,this,null),150)}
y(zL,rL);zL.prototype.stop=function(){this.ma()};
zL.prototype.Kc=Ca;zL.prototype.lb=function(){O(this.g);this.g=NaN;var a=zK(this.M.oa(),this.f.label);a?this.Xb(a):this.ma(Error("No such screen"))};
zL.prototype.K=function(){O(this.g);this.g=NaN;zL.L.K.call(this)};function AL(a,b,c,d){AK.call(this);this.g=a;this.D=b||"233637DE";this.B=c||"cl";this.J=d||!1;this.f=null;this.l=!1;this.i=[];this.j=v(this.Fg,this)}
y(AL,AK);h=AL.prototype;
h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.D);this.J||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=v(this.Gg,this);c=new chrome.cast.ApiConfig(c,v(this.ae,this),f,d,e);c.customDialLaunchCallback=v(this.wg,this);chrome.cast.initialize(c,v(function(){this.R()||(chrome.cast.addReceiverActionListener(this.j),
jK(),this.g.subscribe("onlineScreenChange",v(this.Ae,this)),this.i=BL(this),chrome.cast.setCustomReceivers(this.i,Ca,v(function(g){this.U("Failed to set initial custom receivers: "+zq(g))},this)),this.H("yt-remote-cast2-availability-change",CL(this)),b(!0))},this),v(function(g){this.U("Failed to initialize API: "+zq(g));
b(!1)},this))};
h.kh=function(a,b){DL("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.getScreen();if(!a||c&&c.id!=a)DL("Unsetting old screen status: "+this.f.f.friendlyName),EL(this,null)}if(a&&b){if(!this.f){c=zK(this.g.oa(),a);if(!c){DL("setConnectedScreenStatus: Unknown screen.");return}var d=FL(this,c);d||(DL("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.i.push(d),chrome.cast.setCustomReceivers(this.i,
Ca,v(function(e){this.U("Failed to set initial custom receivers: "+zq(e))},this)));
DL("setConnectedScreenStatus: new active receiver: "+d.friendlyName);EL(this,new zL(this.g,d),!0)}this.f.Lc(b)}else DL("setConnectedScreenStatus: no screen.")};
function FL(a,b){return b?eb(a.i,function(c){return rK(b,c.label)},a):null}
h.lh=function(a){this.R()?this.U("Setting connection data on disposed cast v2"):this.f?this.f.lb(a):this.U("Setting connection data without a session")};
h.Ch=function(){this.R()?this.U("Stopping session on disposed cast v2"):this.f?(this.f.stop(),EL(this,null)):DL("Stopping non-existing session")};
h.requestSession=function(){chrome.cast.requestSession(v(this.ae,this),v(this.Jg,this))};
h.K=function(){this.g.Id("onlineScreenChange",v(this.Ae,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.j);jb(r("yt.mdx.remote.debug.handlers_")||[],kK);Wf(this.f);AL.L.K.call(this)};
function DL(a){nK("Controller",a)}
h.U=function(a){nK("Controller",a)};
function kK(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function CL(a){return a.l||!!a.i.length||!!a.f}
function EL(a,b,c){b!=a.f&&(Wf(a.f),(a.f=b)?(c?a.H("yt-remote-cast2-receiver-resumed",b.f):a.H("yt-remote-cast2-receiver-selected",b.f),b.subscribe("sessionScreen",v(a.be,a,b)),b.getScreen()?a.H("yt-remote-cast2-session-change",b.getScreen()):c&&a.f.lb(null)):a.H("yt-remote-cast2-session-change",null))}
h.be=function(a,b){this.f==a&&(b||EL(this,null),this.H("yt-remote-cast2-session-change",b))};
h.Fg=function(a,b){if(!this.R())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),DL("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.f.label!=a.label)DL("onReceiverAction_: Stopping active receiver: "+this.f.f.friendlyName),this.f.stop();else{DL("onReceiverAction_: Casting to active receiver.");this.f.getScreen()&&this.H("yt-remote-cast2-session-change",this.f.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:EL(this,
new zL(this.g,a));break;case chrome.cast.ReceiverType.DIAL:EL(this,new wL(this.g,a,this.B));break;case chrome.cast.ReceiverType.CAST:EL(this,new tL(this.g,a));break;default:this.U("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.f.label==a.label?this.f.stop():this.U("Stopping receiver w/o session: "+a.friendlyName)}else this.U("onReceiverAction_ called without receiver.")};
h.wg=function(a){if(this.R())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.U("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.f:null;if(!c||c.label!=b.label)return this.U("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.getScreen())return DL("Reselecting dial screen."),
this.H("yt-remote-cast2-session-change",this.f.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.U('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);EL(this,new wL(this.g,b,this.B))}b=this.f;b.D=a;return b.D.appState==chrome.cast.DialAppState.RUNNING?new Promise(v(b.Kf,b,(b.D.extraData||{}).screenId||null)):new Promise(v(b.Dc,b))};
h.ae=function(a){if(!this.R()){DL("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)DL("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),EL(this,new tL(this.g,b),!0);else{this.U("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.f,d=zK(this.g.oa(),c.label);d&&rK(d,b.label)&&c.receiverType!=
chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(DL("onSessionEstablished_: manual to cast session change "+b.friendlyName),Wf(this.f),this.f=new tL(this.g,b),this.f.subscribe("sessionScreen",v(this.be,this,this.f)),this.f.lb(null));this.f.Kc(a)}}};
h.Bh=function(){return this.f?this.f.Be():null};
h.Jg=function(a){this.R()||(this.U("Failed to estabilish a session: "+zq(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&EL(this,null))};
h.Gg=function(a){DL("Receiver availability updated: "+a);if(!this.R()){var b=CL(this);this.l=a==chrome.cast.ReceiverAvailability.AVAILABLE;CL(this)!=b&&this.H("yt-remote-cast2-availability-change",CL(this))}};
function BL(a){var b=a.g.ye(),c=a.f&&a.f.f;a=$a(b,function(d){c&&rK(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=FL(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
h.Ae=function(){this.R()||(this.i=BL(this),DL("Updating custom receivers: "+zq(this.i)),chrome.cast.setCustomReceivers(this.i,Ca,v(function(){this.U("Failed to set custom receivers.")},this)),this.H("yt-remote-cast2-availability-change",CL(this)))};
AL.prototype.setLaunchParams=AL.prototype.lh;AL.prototype.setConnectedScreenStatus=AL.prototype.kh;AL.prototype.stopSession=AL.prototype.Ch;AL.prototype.getCastSession=AL.prototype.Bh;AL.prototype.requestSession=AL.prototype.requestSession;AL.prototype.init=AL.prototype.init;AL.prototype.dispose=AL.prototype.dispose;function GL(a,b,c,d,e,f){HL()?JL(a,d,e,f)&&(KL(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?LL(b):(window.__onGCastApiAvailable=function(g,k){g?LL(b):(ML("Failed to load cast API: "+k),NL(!1),KL(!1),PA("yt-remote-cast-available"),PA("yt-remote-cast-receiver"),OL(),b(!1))},c?qz("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?Lf():!window.chrome||!window.navigator.presentation||
0<=window.navigator.userAgent.indexOf("Edge")?If():(Kf(),Gf(Ff.map(Jf))))):IL("Cannot initialize because not running Chrome")}
function OL(){IL("dispose");var a=PL();a&&a.dispose();q("yt.mdx.remote.cloudview.instance_",null,void 0);QL(!1);av(RL);RL.length=0}
function SL(){IL("clearCurrentReceiver");PA("yt-remote-cast-receiver")}
function TL(){return OA("yt-remote-cast-installed")?PL()?PL().getCastSession():(ML("getCastSelector: Cast is not initialized."),null):(ML("getCastSelector: Cast API is not installed!"),null)}
function UL(a,b){VL()?PL().setConnectedScreenStatus(a,b):ML("setConnectedScreenStatus called before ready.")}
function HL(){var a=0<=Pc.search(/ (CrMo|Chrome|CriOS)\//);return Ze||a}
function JL(a,b,c,d){var e=!1;PL()||(a=new AL(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){LA("yt-remote-cast-available",f);bv("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){IL("onReceiverSelected: "+f.friendlyName);
LA("yt-remote-cast-receiver",f);bv("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){IL("onReceiverResumed: "+f.friendlyName);
LA("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){IL("onSessionChange: "+vK(f));
f||PA("yt-remote-cast-receiver");bv("yt-remote-cast2-session-change",f)}),q("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
IL("cloudview.createSingleton_: "+e);return e}
function PL(){return r("yt.mdx.remote.cloudview.instance_")}
function LL(a){NL(!0);KL(!1);PL().init(!1,function(b){b?(QL(!0),S("yt-remote-cast2-api-ready")):(ML("Failed to initialize cast API."),NL(!1),PA("yt-remote-cast-available"),PA("yt-remote-cast-receiver"),OL());a(b)})}
function IL(a){nK("cloudview",a)}
function ML(a){nK("cloudview",a)}
function NL(a){IL("setCastInstalled_ "+a);LA("yt-remote-cast-installed",a)}
function VL(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function QL(a){IL("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function KL(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var RL=[];function WL(a,b){this.action=a;this.params=b||{}}
;function XL(a,b){Uf.call(this);this.f=new Vp(this.Mg,0,this);Vf(this,Na(Wf,this.f));this.i=5E3;this.g=0;if(Ga(a))b&&(a=v(a,b));else if(a&&Ga(a.handleEvent))a=v(a.handleEvent,a);else throw Error("Invalid listener argument");this.j=a}
y(XL,Uf);h=XL.prototype;h.Mg=function(){this.i=Math.min(3E5,2*this.i);this.j();this.g&&this.start()};
h.start=function(){var a=this.i+15E3*Math.random(),b=this.f;b.isActive()||b.start(a);this.g=x()+a};
h.stop=function(){this.f.stop();this.g=0};
h.isActive=function(){return this.f.isActive()};
h.reset=function(){this.f.stop();this.i=5E3};function YL(a,b,c){this.J=a;this.A=b;this.i=new Es;this.g=new XL(this.eh,this);this.f=null;this.D=!1;this.l=null;this.B="";this.G=this.j=0;this.F=[];this.M=c||!1}
y(YL,ws);h=YL.prototype;h.subscribe=function(a,b,c){return this.i.subscribe(a,b,c)};
h.Id=function(a,b){Gs(this.i,a,b,void 0)};
h.ta=function(a){return this.i.ta(a)};
h.H=function(a,b){this.i.la.apply(this.i,arguments)};
h.dispose=function(){this.D||(this.D=!0,Wf(this.i),ZL(this),Wf(this.g),this.g=null)};
h.R=function(){return this.D};
function $L(a){return{firstTestResults:[""],secondTestResults:!a.f.kc,sessionId:a.f.i,arrayId:a.f.kb}}
h.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.B="";this.g.stop();this.l=a||null;this.j=b||0;a=this.J+"/test";b=this.J+"/bind";var d=new bs(c?c.firstTestResults:null,c?c.secondTestResults:null,this.M),e=this.f;e&&(e.ba=null);d.ba=this;this.f=d;e?this.f.connect(a,b,this.A,e.i,e.kb):c?this.f.connect(a,b,this.A,c.sessionId,c.arrayId):this.f.connect(a,b,this.A)}};
function ZL(a,b){a.G=b||0;a.g.stop();a.f&&(3==a.f.f&&ps(a.f),is(a.f));a.G=0}
h.sendMessage=function(a,b){var c={_sc:a};b&&Nb(c,b);this.g.isActive()||2==(this.f?this.f.f:0)?this.F.push(c):aM(this)&&os(this.f,c)};
h.dd=function(){this.g.reset();this.l=null;this.j=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)os(this.f,a[b])}this.H("handlerOpened")};
h.bd=function(a){var b=2==a&&401==this.f.Da;4==a||b||this.g.start();this.H("handlerError",a)};
h.pc=function(a){if(!this.g.isActive())this.H("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.F.push(d)}};
h.qd=function(){var a={v:2};this.B&&(a.gsessionid=this.B);0!=this.j&&(a.ui=""+this.j);0!=this.G&&(a.ui=""+this.G);this.l&&Nb(a,this.l);return a};
h.cd=function(a){"S"==a[0]?this.B=a[1]:"gracefulReconnect"==a[0]?(this.g.start(),is(this.f)):this.H("handlerMessage",new WL(a[0],a[1]))};
function aM(a){return!!a.f&&3==a.f.f}
function bM(a,b){(a.A.loungeIdToken=b)||a.g.stop()}
h.eh=function(){this.g.isActive();var a=this.f,b=0;a.X&&b++;a.ha&&b++;0==b&&this.connect(this.l,this.j)};function cM(a){this.index=-1;this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.i=this.j=0;this.f=null;this.hasNext=this.A=!1;this.G=this.g=this.B=this.D=0;this.l=NaN;this.F=!1;this.reset(a)}
function dM(a){a.audioTrackId=null;a.f=null;a.playerState=-1;a.A=!1;a.hasNext=!1;a.j=0;a.i=x();a.D=0;a.B=0;a.g=0;a.G=0;a.l=NaN;a.F=!1}
cM.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";dM(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.f=a.trackData,this.A=a.hasPrevious,this.hasNext=a.hasNext,this.j=a.playerTime,this.i=a.playerTimeAt,this.D=a.seekableStart,this.B=a.seekableEnd,this.g=a.duration,this.G=a.loadedTime,this.l=a.liveIngestionTime,this.F=
!isNaN(this.l))};
cM.prototype.isAdPlaying=function(){return 1081==this.playerState};
function eM(a,b){a.j=b;a.i=x()}
function fM(a){switch(a.playerState){case 1:case 1081:return(x()-a.i)/1E3+a.j;case -1E3:return 0}return a.j}
cM.prototype.getDuration=function(){return this.F?this.g+(1==this.playerState?(x()-this.i)/1E3:0):this.g};
function gM(a,b,c){var d=a.videoId;a.videoId=b;a.index=c;b!=d&&dM(a)}
function hM(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=Lb(a.f);b.hasPrevious=a.A;b.hasNext=a.hasNext;b.playerTime=a.j;b.playerTimeAt=a.i;b.seekableStart=a.D;b.seekableEnd=a.B;b.duration=a.g;b.loadedTime=a.G;b.liveIngestionTime=a.l;return b}
cM.prototype.clone=function(){return new cM(hM(this))};function iM(a,b){AK.call(this);this.f=0;this.j=a;this.B=[];this.l=new dt;this.i=this.g=null;this.M=v(this.hg,this);this.D=v(this.Gb,this);this.J=v(this.gg,this);this.O=v(this.vg,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Mc,this),jM(this))):c=3;0!=c&&(b?this.Mc(c):N(v(function(){this.Mc(c)},this),0));
var d=TL();d&&kM(this,d);this.subscribe("yt-remote-cast2-session-change",this.O)}
sa(iM,AK);function lM(a){return new cM(a.j.getPlayerContextData())}
h=iM.prototype;h.play=function(){1==this.f?(this.g?this.g.play(null,Ca,mM(this,"play")):nM(this,"play"),oM(this,1,fM(lM(this))),this.H("remotePlayerChange")):pM(this,this.play)};
h.pause=function(){1==this.f?(this.g?this.g.pause(null,Ca,mM(this,"pause")):nM(this,"pause"),oM(this,2,fM(lM(this))),this.H("remotePlayerChange")):pM(this,this.pause)};
h.seekTo=function(a){if(1==this.f){if(this.g){var b=lM(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.g.seek(c,Ca,mM(this,"seekTo",{newTime:a}))}else nM(this,"seekTo",{newTime:a});oM(this,3,a);this.H("remotePlayerChange")}else pM(this,Na(this.seekTo,a))};
h.stop=function(){if(1==this.f){this.g?this.g.stop(null,Ca,mM(this,"stopVideo")):nM(this,"stopVideo");var a=lM(this);a.index=-1;a.videoId="";dM(a);qM(this,a);this.H("remotePlayerChange")}else pM(this,this.stop)};
h.setVolume=function(a,b){if(1==this.f){var c=lM(this);if(this.i){if(c.volume!=a){var d=Math.round(a)/100;this.i.setReceiverVolumeLevel(d,v(function(){nK("CP","set receiver volume: "+d)},this),v(function(){this.U("failed to set receiver volume.")},this))}c.muted!=b&&this.i.setReceiverMuted(b,v(function(){nK("CP","set receiver muted: "+b)},this),v(function(){this.U("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);nM(this,"setVolume",e)}c.muted=b;c.volume=a;qM(this,c)}else pM(this,Na(this.setVolume,a,b))};
h.setAudioTrack=function(a,b){if(1==this.f){var c=b.getLanguageInfo().getId();nM(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=lM(this);d.audioTrackId=c;qM(this,d)}else pM(this,Na(this.setAudioTrack,a,b))};
h.Uc=function(a){1==this.f?nM(this,"addVideo",{videoId:a}):pM(this,Na(this.Uc,a))};
h.Tc=function(a){1==this.f?nM(this,"addVideos",{listId:a}):pM(this,Na(this.Tc,a))};
h.Vc=function(a){0==a.length?this.U("Ignore add videos request due to empty list"):1==this.f?nM(this,"addVideos",{videoIds:a.join(",")}):pM(this,Na(this.Vc,a))};
h.je=function(a){1==this.f?nM(this,"removeVideo",{videoId:a}):pM(this,Na(this.je,a))};
h.playVideo=function(a,b,c,d,e,f,g){var k=lM(this);c=c||0;var l={videoId:a,currentIndex:c};gM(k,a,c);void 0!==b&&(eM(k,b),l.currentTime=b);void 0!==d&&(l.listId=d);null!=e&&(l.playerParams=e);null!=f&&(l.clickTrackingParams=f);null!=g&&(l.locationInfo=zq(g));nM(this,"setPlaylist",l);d||qM(this,k)};
h.nextVideo=function(a,b){if(1==this.f){if(a&&b){var c=lM(this);gM(c,a,b);qM(this,c)}nM(this,"next")}else pM(this,Na(this.nextVideo,a,b))};
h.dispose=function(){if(3!=this.f){var a=this.f;this.f=3;this.H("proxyStateChange",a,this.f)}AK.prototype.dispose.call(this)};
h.K=function(){rM(this);this.j=null;this.l.clear();kM(this,null);AK.prototype.K.call(this)};
function jM(a){z("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.B.push(this.j.subscribe(b,Na(this.Dg,b),this))},a)}
function rM(a){z(a.B,function(b){this.j.unsubscribeByKey(b)},a);
a.B.length=0}
function pM(a,b){var c=a.l;50>c.f.length+c.g.length&&a.l.g.push(b)}
function oM(a,b,c){var d=lM(a);eM(d,c);-1E3!=d.playerState&&(d.playerState=b);qM(a,d)}
function nM(a,b,c){a.j.sendMessage(b,c)}
function qM(a,b){rM(a);a.j.setPlayerContextData(hM(b));jM(a)}
h.Mc=function(a){if((a!=this.f||2==a)&&3!=this.f&&0!=a){var b=this.f;this.f=a;this.H("proxyStateChange",b,a);if(1==a)for(;!this.l.isEmpty();)b=a=this.l,0==b.f.length&&(b.f=b.g,b.f.reverse(),b.g=[]),a.f.pop().apply(this);else 3==a&&this.dispose()}};
h.Dg=function(a,b){this.H(a,b)};
function kM(a,b){a.i&&(a.i.removeUpdateListener(a.M),a.i.removeMediaListener(a.D),a.Gb(null));a.i=b;a.i&&(nK("CP","Setting cast session: "+a.i.sessionId),a.i.addUpdateListener(a.M),a.i.addMediaListener(a.D),a.i.media.length&&a.Gb(a.i.media[0]))}
h.hg=function(a){if(!a)this.Gb(null),kM(this,null);else if(this.i.receiver.volume){a=this.i.receiver.volume;var b=lM(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)nK("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,qM(this,b)}};
h.Gb=function(a){nK("CP","Cast media: "+!!a);this.g&&this.g.removeUpdateListener(this.J);if(this.g=a)this.g.addUpdateListener(this.J),sM(this),this.H("remotePlayerChange")};
function sM(a){var b=a.g.media,c=a.g.customData;if(b&&c){var d=lM(a);b.contentId!=d.videoId&&nK("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;eM(d,a.g.getEstimatedTime());qM(a,d)}else nK("CP","No cast media video. Ignoring state update.")}
h.gg=function(a){a?(sM(this),this.H("remotePlayerChange")):this.Gb(null)};
h.vg=function(){var a=TL();a&&kM(this,a)};
h.U=function(a){nK("CP",a)};
function mM(a,b,c){return v(function(d){this.U("Failed to "+b+" with cast v2 channel. Error code: "+d.code);d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.U("Retrying "+b+" using MDx browser channel."),nM(this,b,c))},a)}
;function tM(a,b,c){AK.call(this);this.l=NaN;this.V=!1;this.J=this.D=this.O=this.T=NaN;this.M=[];this.j=this.B=this.i=this.N=this.f=null;this.ca=a;this.M.push(P(window,"beforeunload",v(this.qf,this)));this.g=[];this.N=new cM;this.Z=b.id;this.f=uM(this,c);this.f.subscribe("handlerOpened",this.ng,this);this.f.subscribe("handlerClosed",this.kg,this);this.f.subscribe("handlerError",this.lg,this);this.f.subscribe("handlerMessage",this.mg,this);bM(this.f,b.token);this.subscribe("remoteQueueChange",function(){var d=
this.N.videoId;OK()&&LA("yt-remote-session-video-id",d)},this)}
sa(tM,AK);h=tM.prototype;
h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,g=b.index,k={videoId:d},l=b.currentTime,m=b.locationInfo;void 0!==l&&(k.currentTime=5>=l?0:l);e&&(k.playerParams=e);m&&(k.locationInfo=m);f&&(k.clickTrackingParams=f);c&&(k.listId=c);void 0!==g&&(k.currentIndex=g);c&&(this.N.listId=c);this.N.videoId=d;this.N.index=g||0;this.N.state=3;eM(this.N,l);this.j="UNSUPPORTED";vM("Connecting with setPlaylist and params: "+zq(k));this.f.connect({method:"setPlaylist",params:zq(k)},
a,SK())}else vM("Connecting without params"),this.f.connect({},a,SK());wM(this)};
h.dispose=function(){this.R()||(this.H("beforeDispose"),xM(this,3));AK.prototype.dispose.call(this)};
h.K=function(){yM(this);zM(this);AM(this);O(this.D);this.D=NaN;O(this.J);this.J=NaN;this.i=null;Q(this.M);this.M.length=0;this.f.dispose();AK.prototype.K.call(this);this.j=this.B=this.g=this.N=this.f=null};
function vM(a){nK("conn",a)}
h.qf=function(){this.gb(2)};
function uM(a,b){return new YL(cK(a.ca,"/bc"),b)}
function xM(a,b){a.H("proxyStateChange",b)}
function wM(a){a.l=N(v(function(){vM("Connecting timeout");this.gb(1)},a),2E4)}
function yM(a){O(a.l);a.l=NaN}
function AM(a){O(a.T);a.T=NaN}
function BM(a){zM(a);a.O=N(v(function(){CM(this,"getNowPlaying")},a),2E4)}
function zM(a){O(a.O);a.O=NaN}
h.ng=function(){vM("Channel opened");this.V&&(this.V=!1,AM(this),this.T=N(v(function(){vM("Timing out waiting for a screen.");this.gb(1)},this),15E3));
WK($L(this.f),this.Z)};
h.kg=function(){vM("Channel closed");isNaN(this.l)?XK(!0):XK();this.dispose()};
h.lg=function(a){XK();isNaN(this.Bb())?(vM("Channel error: "+a+" without reconnection"),this.dispose()):(this.V=!0,vM("Channel error: "+a+" with reconnection in "+this.Bb()+" ms"),xM(this,2))};
function DM(a,b){b&&(yM(a),AM(a));b==(aM(a.f)&&isNaN(a.l))?b&&(xM(a,1),CM(a,"getSubtitlesTrack")):b?(a.td()&&a.N.reset(),xM(a,1),CM(a,"getNowPlaying"),EM(a)):a.gb(1)}
function FM(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.N.videoId&&(Gb(b.params)?a.N.f=null:a.N.f=b.params,a.H("remotePlayerChange"))}
function GM(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.N.listId=b.params.listId||a.N.listId;gM(a.N,c,d);a.H("remoteQueueChange")}
function HM(a,b){b.params=b.params||{};GM(a,b);IM(a,b);a.H("autoplayDismissed")}
function IM(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);eM(a.N,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.N.playerState&&(c=-1E3);a.N.playerState=c;c=Number(b.params.loadedTime);a.N.G=isNaN(c)?0:c;c=Number(b.params.duration);a.N.g=isNaN(c)?0:c;c=a.N;var d=Number(b.params.liveIngestionTime);c.l=d;c.F=isNaN(d)?!1:!0;c=a.N;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.D=isNaN(d)?0:d;c.B=isNaN(e)?0:e;1==a.N.playerState?
BM(a):zM(a);a.H("remotePlayerChange")}
function JM(a,b){if(-1E3!=a.N.playerState){var c=1085;switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.N.playerState=c;c=parseInt(b.params.currentTime,10);eM(a.N,isNaN(c)?0:c);a.H("remotePlayerChange")}}
function KM(a,b){var c="true"==b.params.muted;a.N.volume=parseInt(b.params.volume,10);a.N.muted=c;a.H("remotePlayerChange")}
function LM(a,b){a.B=b.params.videoId;a.H("nowAutoplaying",parseInt(b.params.timeout,10))}
function MM(a,b){var c="true"==b.params.hasNext;a.N.A="true"==b.params.hasPrevious;a.N.hasNext=c;a.H("previousNextChange")}
h.mg=function(a){a.params?vM("Received: action="+a.action+", params="+zq(a.params)):vM("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Fq(a.params.devices);this.g=$a(a,function(c){return new HK(c)});
a=!!eb(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
DM(this,a);break;case "loungeScreenDisconnected":lb(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
DM(this,!1);break;case "remoteConnected":var b=new HK(Fq(a.params.device));eb(this.g,function(c){return c.equals(b)})||ib(this.g,b);
break;case "remoteDisconnected":b=new HK(Fq(a.params.device));lb(this.g,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":GM(this,a);break;case "nowPlaying":HM(this,a);break;case "onStateChange":IM(this,a);break;case "onAdStateChange":JM(this,a);break;case "onVolumeChanged":KM(this,a);break;case "onSubtitlesTrackChanged":FM(this,a);break;case "nowAutoplaying":LM(this,a);break;case "autoplayDismissed":this.H("autoplayDismissed");break;case "autoplayUpNext":this.B=a.params.videoId||null;this.H("autoplayUpNext",this.B);break;case "onAutoplayModeChanged":this.j=
a.params.autoplayMode;this.H("autoplayModeChange",this.j);"DISABLED"==this.j&&this.H("autoplayDismissed");break;case "onHasPreviousNextChanged":MM(this,a);break;case "requestAssistedSignIn":this.H("assistedSignInRequested",a.params.authCode);break;default:vM("Unrecognized action: "+a.action)}};
h.bh=function(){if(this.i){var a=this.i;this.i=null;this.N.videoId!=a&&CM(this,"getNowPlaying")}};
h.kf=function(){var a=3;this.R()||(a=0,isNaN(this.Bb())?aM(this.f)&&isNaN(this.l)&&(a=1):a=2);return a};
h.gb=function(a){vM("Disconnecting with "+a);yM(this);this.H("beforeDisconnect",a);1==a&&XK();ZL(this.f,a);this.dispose()};
h.hf=function(){var a=this.N;this.i&&(a=this.N.clone(),gM(a,this.i,a.index));return hM(a)};
h.mh=function(a){var b=new cM(a);b.videoId&&b.videoId!=this.N.videoId&&(this.i=b.videoId,O(this.D),this.D=N(v(this.bh,this),5E3));var c=[];this.N.listId==b.listId&&this.N.videoId==b.videoId&&this.N.index==b.index||c.push("remoteQueueChange");this.N.playerState==b.playerState&&this.N.volume==b.volume&&this.N.muted==b.muted&&fM(this.N)==fM(b)&&zq(this.N.f)==zq(b.f)||c.push("remotePlayerChange");this.N.reset(a);z(c,function(d){this.H(d)},this)};
h.td=function(){var a=this.f.A.id,b=eb(this.g,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
h.Bb=function(){var a=this.f;return a.g.isActive()?a.g.g-x():NaN};
h.cf=function(){return this.j||"UNSUPPORTED"};
h.df=function(){return this.B||""};
h.uh=function(){if(!isNaN(this.Bb())){var a=this.f.g,b=a.f;b.stop();b.vd();a.start()}};
function EM(a){O(a.J);a.J=N(v(a.gb,a,1),864E5)}
function CM(a,b,c){c?vM("Sending: action="+b+", params="+zq(c)):vM("Sending: action="+b);a.f.sendMessage(b,c)}
h.hh=function(a,b){CM(this,a,b);EM(this)};
tM.prototype.subscribe=tM.prototype.subscribe;tM.prototype.unsubscribeByKey=tM.prototype.ta;tM.prototype.getProxyState=tM.prototype.kf;tM.prototype.disconnect=tM.prototype.gb;tM.prototype.getPlayerContextData=tM.prototype.hf;tM.prototype.setPlayerContextData=tM.prototype.mh;tM.prototype.getOtherConnectedRemoteId=tM.prototype.td;tM.prototype.getReconnectTimeout=tM.prototype.Bb;tM.prototype.getAutoplayMode=tM.prototype.cf;tM.prototype.getAutoplayVideoId=tM.prototype.df;tM.prototype.reconnect=tM.prototype.uh;
tM.prototype.sendMessage=tM.prototype.hh;function NM(a){BK.call(this,"ScreenServiceProxy");this.ea=a;this.f=[];this.f.push(this.ea.$_s("screenChange",v(this.yh,this)));this.f.push(this.ea.$_s("onlineScreenChange",v(this.zg,this)))}
sa(NM,BK);h=NM.prototype;h.oa=function(a){return this.ea.$_gs(a)};
h.mc=function(a){return!!this.ea.$_c(a)};
h.get=function(a){return this.ea.$_g(a)};
h.start=function(){this.ea.$_st()};
h.add=function(a,b,c){this.ea.$_a(a,b,c)};
h.remove=function(a,b,c){this.ea.$_r(a,b,c)};
h.jc=function(a,b,c,d){this.ea.$_un(a,b,c,d)};
h.K=function(){for(var a=0,b=this.f.length;a<b;++a)this.ea.$_ubk(this.f[a]);this.f.length=0;this.ea=null;BK.prototype.K.call(this)};
h.yh=function(){this.H("screenChange")};
h.zg=function(){this.H("onlineScreenChange")};
jL.prototype.$_st=jL.prototype.start;jL.prototype.$_gspc=jL.prototype.zh;jL.prototype.$_gsppc=jL.prototype.ze;jL.prototype.$_c=jL.prototype.mc;jL.prototype.$_g=jL.prototype.get;jL.prototype.$_a=jL.prototype.add;jL.prototype.$_un=jL.prototype.jc;jL.prototype.$_r=jL.prototype.remove;jL.prototype.$_gs=jL.prototype.oa;jL.prototype.$_gos=jL.prototype.ye;jL.prototype.$_s=jL.prototype.subscribe;jL.prototype.$_ubk=jL.prototype.ta;function OM(){var a=L("MDX_CONFIG")||a;QA();LK();PM||(PM=new bK(a?a.loungeApiHost:void 0),YK()&&(PM.f="/api/loungedev"));QM||(QM=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",QM,void 0));RM();var b=SM();if(!b){var c=new jL(PM);q("yt.mdx.remote.screenService_",c,void 0);b=SM();var d=!1,e=void 0,f=void 0,g=!1;a&&(d=!!a.loadCastApiSetupScript,e=a.appId,f=a.theme,g=!!a.disableDial);GL(c,function(k){k?TM()&&UL(TM(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){bv("yt-remote-receiver-availability-change")})},
d,e,f,g)}a&&!r("yt.mdx.remote.initialized_")&&(q("yt.mdx.remote.initialized_",!0,void 0),UM("Initializing: "+zq(a)),VM.push(R("yt-remote-cast2-availability-change",function(){bv("yt-remote-receiver-availability-change")})),VM.push(R("yt-remote-cast2-receiver-selected",function(){WM();
bv("yt-remote-auto-connect","cast-selector-receiver")})),VM.push(R("yt-remote-cast2-receiver-resumed",function(){bv("yt-remote-receiver-resumed","cast-selector-receiver")})),VM.push(R("yt-remote-cast2-session-change",XM)),VM.push(R("yt-remote-connection-change",function(k){k?UL(TM(),"YouTube TV"):YM()||(UL(null,null),SL())})),d=ZM(),a.isAuto&&(d.id+="#dial"),M("desktop_enable_autoplay")&&(d.capabilities=["atp"]),d.name=a.device,d.app=a.app,(f=a.theme)&&(d.theme=f),UM(" -- with channel params: "+zq(d)),
$M(d),b.start(),TM()||aN())}
function bN(){av(VM);VM.length=0;Wf(cN);cN=null;QM&&(z(QM,function(a){a(null)}),QM.length=0,QM=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
PM=null}
function dN(){var a=TM();if(!a)return null;var b=SM().oa();return zK(b,a)}
function XM(a){UM("remote.onCastSessionChange_: "+vK(a));if(a){var b=dN();b&&b.id==a.id?UL(b.id,"YouTube TV"):(b&&eN(),fN(a,1))}else gN()&&eN()}
function eN(){VL()?PL().stopSession():ML("stopSession called before API ready.");var a=gN();a&&(a.disconnect(1),hN(null))}
function iN(){var a=gN();return a&&3!=a.getProxyState()?new iM(gN(),void 0):null}
function UM(a){nK("remote",a)}
function SM(){if(!cN){var a=r("yt.mdx.remote.screenService_");cN=a?new NM(a):null}return cN}
function TM(){return r("yt.mdx.remote.currentScreenId_")}
function jN(a){q("yt.mdx.remote.currentScreenId_",a,void 0)}
function WM(){q("yt.mdx.remote.connectData_",null,void 0)}
function gN(){return r("yt.mdx.remote.connection_")}
function hN(a){var b=gN();WM();a||jN("");q("yt.mdx.remote.connection_",a,void 0);QM&&(z(QM,function(c){c(a)}),QM.length=0);
b&&!a?bv("yt-remote-connection-change",!1):!b&&a&&bv("yt-remote-connection-change",!0)}
function YM(){var a=OK();if(!a)return null;var b=SM();if(!b)return null;b=b.oa();return zK(b,a)}
function fN(a,b){dN()&&dN();jN(a.id);var c=new tM(PM,a,ZM());c.connect(b,r("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(d){bv("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){gN()&&hN(null)});
hN(c)}
function aN(){var a=YM();a?(UM("Resume connection to: "+vK(a)),fN(a,0)):(XK(),SL(),UM("Skipping connecting because no session screen found."))}
var PM=null,QM=null,cN=null;function RM(){var a=ZM();if(Gb(a)){a=NK();var b=OA("yt-remote-session-name")||"",c=OA("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};q("yt.mdx.remote.channelParams_",a,void 0)}}
function ZM(){return r("yt.mdx.remote.channelParams_")||{}}
function $M(a){a?(LA("yt-remote-session-app",a.app),LA("yt-remote-session-name",a.name)):(PA("yt-remote-session-app"),PA("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var VM=[];var kN;function lN(a,b){this.type=a;this.videoIds=b||[]}
function mN(a,b,c){var d=[];0==d.length?c&&c():"string"===typeof a?nN(a,b,c):nN(d,b,c)}
function nN(a,b,c){var d="";"string"===typeof a&&(d=a,a=[d]);var e=new lN(0,a);kN&&oN(function(){d?kN.Uc(d):kN.Vc(a)},e,b,c)}
function pN(a,b,c){"string"===typeof a&&(a=[a]);var d=new lN(1,a);kN&&oN(function(){z(a,function(e){kN.je(e)})},d,b,c)}
function qN(a,b,c){var d=new lN(2);kN?oN(function(){kN.Tc(a)},d,b,c):c&&N(function(){c("Not implemented")},0)}
function rN(a,b){var c=new lN(2);kN?oN(function(){},c,a,b):b&&N(function(){b("Not implemented")},0)}
function sN(a){kN=a;kN.subscribe("remoteQueueChange",function(){S("queue-change",new lN(2))})}
function tN(){var a=iN();Wf(kN);kN=null;a?sN(a):S("queue-change",new lN(2))}
function oN(a,b,c,d){kN&&1==kN.f?(a.call(p),c&&N(function(){c()},0),void 0!==b&&S("queue-change",b)):d&&N(function(){d()},0)}
var uN=[];function vN(a,b){var c=L("RESUME_COOKIE_NAME",void 0);if(c){var d=Hv(c,"").split(",");d=Za(d,function(e){return 0!=e.indexOf(a)&&!!e.length});
4<=d.length&&d.shift();d.push(a+":"+b);Gv(c,d.join(","),1814400,"/")}}
function wN(a){var b=L("RESUME_COOKIE_NAME",void 0);if(b){var c=Hv(b,"").split(",");c=Za(c,function(d){return 0!=d.indexOf(a)});
0==c.length?Iv(b):Gv(b,c.join(","),1814400,"/")}}
;function xN(){OM();uN.push(R("yt-remote-connection-change",tN));var a=iN();a&&sN(a);bB("addto-watch-queue-button","click",yN);bB("addto-tv-queue-button","click",yN);bB("addto-watch-queue-button-success","click",zN);bB("addto-watch-queue-menu-choice","click",AN);BN.push(R("watch-queue-update",CN));CN()}
function DN(a){return"tv-queue"==V(a,"style")?"addto-tv-queue-button":"addto-watch-queue-button"}
function yN(a){var b=DN(a);nq(a,b,"addto-watch-queue-button-loading");var c=V(a,"video-ids"),d=V(a,"list-id"),e=LD(JD.getInstance(),a);d?qN(d,function(){EN(a)},function(f){FN(a,b,e,f)}):mN(c,function(){EN(a)},function(f){FN(a,b,e,f)})}
function AN(a){var b=V(a,"action");b=GN[b];var c=V(a,"video-ids");c&&("string"===typeof c&&(c=[c]),0==c.length&&b(a))}
function zN(a){nq(a,"addto-watch-queue-button-success","addto-watch-queue-button-loading");var b=V(a,"video-ids"),c=V(a,"list-id"),d=LD(JD.getInstance(),a);c?rN(function(){HN(a)},function(e){FN(a,"addto-watch-queue-button-success",d,e)}):pN(b,function(){HN(a)},function(e){FN(a,"addto-watch-queue-button-success",d,e)})}
function EN(a){nq(a,"addto-watch-queue-button-loading","addto-watch-queue-button-success");var b=JA("ADDTO_WATCH_QUEUE_ADDED");OD(JD.getInstance(),a,b);V(a,"list-id")?S("watch-queue-addto-playlist-added"):S("watch-queue-addto-video-added")}
function HN(a){var b=DN(a);nq(a,"addto-watch-queue-button-loading",b);b="addto-watch-queue-button"==b?JA("ADDTO_WATCH_QUEUE"):JA("ADDTO_TV_QUEUE");OD(JD.getInstance(),a,b);V(a,"list-id")?S("watch-queue-addto-playlist-removed"):S("watch-queue-addto-video-removed")}
function FN(a,b,c,d){nq(a,"addto-watch-queue-button-loading","addto-watch-queue-button-error");d=d||JA("ADDTO_WATCH_QUEUE_ERROR");OD(JD.getInstance(),a,d);N(function(){nq(a,"addto-watch-queue-button-error",b);OD(JD.getInstance(),a,c)},5E3)}
function CN(){var a=$J();if(!rb(IN,a)){IN=a;var b={};z(IN,function(c){b[c]=!0});
a=Vg("addto-queue-button");z(a,function(c){var d=V(c,"video-ids");if(d&&"string"===typeof d){var e=DN(c);b[d]?(nq(c,e,"addto-watch-queue-button-success"),d=JA("ADDTO_WATCH_QUEUE_ADDED")):(nq(c,"addto-watch-queue-button-success",e),d="addto-watch-queue-button"==e?JA("ADDTO_WATCH_QUEUE"):JA("ADDTO_TV_QUEUE"));OD(JD.getInstance(),c,d)}})}}
var GN={"play-next":function(a){var b=V(a,"list-id");a=V(a,"video-ids");b?S("watch-queue-addto-playlist-play-next",b,a):S("watch-queue-addto-video-play-next",a)},
"play-now":function(a){var b=V(a,"list-id");a=V(a,"video-ids");b?S("watch-queue-addto-playlist-play-now",b,a):S("watch-queue-addto-video-play-now",a)}},BN=[],IN=[];var JN=[];var KN=[],LN=!1;function MN(a){var b=L("YPC_LOADER_CSS",void 0),c=L("YPC_LOADER_JS",void 0);LN&&(c="www/ypc_core");KN.length||(KN.push(new gi(function(d){Zz(b,d)})),KN.push(new gi(function(d){qz(c,d)})));
oi(KN).then(function(){a&&a()})}
;function NN(a,b,c,d,e,f,g,k,l,m,n,t,u){a={config:{couponCode:e,fromPurchaseIds:f,flowType:d},itemData:{itemId:c,itemType:b},offerData:{offerId:a}};if(g||k)b={},g&&(b.jwt=g),k&&(b.encryptedPurchaseParams=k),a.walletPrefetchdata=b;l&&(a.innertubeRequestParams=l);m&&(a.transactionAction=m);n&&(a.transactionParams=n);t&&(a.transactionLoggingParams=t);u&&(a.gtmData=u);return a}
function ON(a,b){if(!a)return null;var c=V(a,"ypc-item-type"),d=V(a,"ypc-item-id"),e=V(a,"ypc-offer-id"),f=V(a,"coupon-code"),g=V(a,"ypc-from-purchase-ids"),k=V(a,"ypc-gtm-data"),l=V(a,"ypc-offer-jwt"),m=V(a,"ypc-offer-encrypted-purchase-params"),n=V(a,"ypc-irp"),t=V(a,"ypc-transaction-action"),u=V(a,"ypc-transaction-params"),w=V(a,"ypc-serialized-transaction-flow-logging-params");return NN(e,c,d,b,f,g,l,m,n,t,u,w,k)}
function PN(a){var b=a.itemData.itemId,c=a.config.flowType,d=a.offerData?a.offerData.offerId:null,e=a.innertubeRequestParams,f=a.transactionAction,g={};g.ypc_it=a.itemData.itemType;g.ypc_ii=b;g.ypc_ft=c;e&&(g.ypc_irp=e);d&&(g.ypc_oi=d);f&&(g.ypc_ta=f);return g}
;function QN(a,b,c,d,e){if(lJ())MN(function(){r("yt.ypc.checkout.showYpcOverlay")(a,b,c,d,e)});
else{var f={ypc_it:a,ypc_ii:b,ypc_ft:c};d&&(f.ypc_irp=d);e&&(f.ypc_cc=e);f=RN(f);Uz(f)}}
function SN(a){if(lJ())MN(function(){r("yt.ypc.checkout.showPrepurchaseOverlay")(a)});
else{var b=RN({});Uz(b)}}
function TN(a,b){if(lJ())MN(function(){r("yt.ypc.checkout.showYpcOverlayForInnertubeRequestParams")(a,b)});
else{var c=RN({ypc_ft:a,ypc_irp:b});Uz(c)}}
function UN(a,b,c){lJ()?MN(function(){r("yt.ypc.checkout.offerpurchaser.purchaseOffer")(a,c)}):(b=RN(b),Uz(b))}
function VN(a,b){if(lJ())MN(function(){r("yt.ypc.subscription.openUnsubscribeOverlay")(a,b)});
else throw Error("Unsubscribe triggered when user not signed in.");}
function RN(a){a=zt(window.location.href,a);var b=L("YPC_SIGNIN_URL",void 0),c=xt(b)["continue"];c=zt(c,{next:a});return zt(b,{"continue":c})}
;var WN=[],XN=[];function YN(a){if(a=a.currentTarget)ZN(a),(a=V(a,"ytr-prepurchase-html"))&&SN(Bd(a))}
function $N(a){var b=a.currentTarget;if(b)if(a=V(b,"ypc-transaction-action"),b=ON(b,"D")){if(b.gtmData){var c=JSON.parse(b.gtmData);c&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(c))}(a="start_payment"==a)&&aO("inline-offer-button-click",b.itemData);UN(b,PN(b),a);setTimeout(Rv,0)}else st(Error("ypc-offer-button does not contain purchaseFlowData."))}
function bO(a){(a=a.currentTarget)&&cO(a)}
function dO(a){MN(a.callback)}
function eO(a){aO("container-button-click-attempt");var b=F("ypc-checkout-button",a.container);(a=F("ytr-purchase-button",a.container))?(b=J(a,"ypc-offer-button"),(a.href||b)&&a.click()):b&&cO(b)}
function fO(a){var b=a.f;a=b.itemId;var c=b.itemType;b=b.flowType;aO("paid-subscribe-button-click",{itemType:c,itemId:a});QN(c,a,b)}
function cO(a){var b=V(a,"ypc-item-type"),c=V(a,"ypc-item-id"),d=V(a,"ypc-flow-type");a=V(a,"ypc-irp")||void 0;lJ()?aO("purchase-button-click",{itemId:c,itemType:b}):aO("signin-button-click");QN(b,c,d,a)}
function gO(a){var b=a.currentTarget;a=V(b,"ypc-item-type");b=V(b,"ypc-item-id");a&&b&&(aO("unsubscribe-button-click",{itemId:b,itemType:a}),VN(a,b))}
function hO(a){var b=a.f;a=b.itemType;b=b.itemId;aO("paid-unsubscribe-button-click",{itemType:a,itemId:b});VN(a,b)}
function aO(a,b){var c={};Nb(c,{label:a,pageName:L("PAGE_NAME")});b&&Nb(c,b);vz("ypc-checkout",Ud(c))}
function ZN(a){var b;J(a,"yt-unlimited-more-offer-button")?b="YTO_GTM_2_BUTTON_CLICK_DATA":J(a,"ypc-offer-button")&&(b="YTO_GTM_1_BUTTON_CLICK_DATA");b&&(a=L(b,""))&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(a))}
function iO(a){a=a.currentTarget;var b=V(a,"tab-id");if(b){for(var c=Vg("offer-module-tab-content"),d=0;d<c.length;d++)c[d].classList.remove("active-tab");c=Vg("offer-module-tab");for(d=0;d<c.length;d++)c[d].classList.remove("active-tab");C(b).classList.add("active-tab");a.classList.add("active-tab")}}
function jO(a){if(a=a.currentTarget){ZN(a);var b=ON(a,"U");b?(MN(function(){r("yt.ypc.checkout.offerpurchaser.completeTransaction")(b)}),setTimeout(Rv,0)):st(Error("ypc-complete-transaction-button does not contain purchaseFlowData"))}}
function kO(a){a=a.currentTarget;var b=V(a,"feedback-token");b&&(a={itct:V(a,"innertube-clicktracking"),feedback_tokens:[b],wait_for_response:1},Yt("/feed_change_ajax?action_give_feedback=1",{method:"POST",onSuccess:function(c,d){d&&d.actions&&wd(d.actions.url_endpoint.url,window,Wb("_self"))},
P:a}))}
;var lO=B&&8<=document.documentMode||we&&Qe("1.9.2")||xe&&Qe("532.1"),mO=B&&!lO;function nO(){var a=oO,b=C("legacy-history-iframe");this.j=this.i=this.f=null;this.g=a;this.A=mO?b:null;this.G=window;this.l=this.G.location;this.B=this.l.href.split("#")[0];this.F=v(this.J,this)}
nO.prototype.D=function(a,b){this.i&&(Q(this.i),delete this.i);this.j&&(Ot(this.j),delete this.j);if(a){this.f=pO(this);if(mO){var c=this.A.contentWindow.document.body;c&&c.innerHTML||qO(this,this.f)}b||this.g(this.f);lO?this.i=P(this.G,"hashchange",this.F):this.j=Nt(this.F,200)}};
nO.prototype.J=function(){if(mO){var a=(a=this.A.contentWindow.document.body)?zd(Bh(a).substring(1)):"";a!=this.f?(this.f=a,rO(this,a),this.g(a)):(a=pO(this),a!=this.f&&(this.f=a,qO(this,a),this.g(a)))}else a=pO(this),a!=this.f&&(this.f=a,this.g(a))};
function pO(a){a=a.l.href;var b=a.indexOf("#");return 0>b?"":a.substring(b+1)}
function rO(a,b){var c=a.B+"#"+b,d=a.l.href;d!=c&&d+"#"!=c&&vd(a.l,c)}
function qO(a,b){var c=a.A.contentWindow.document,d=c.body?c.body.innerHTML:"",e="#"+yd(b);d!=e&&(d=fd(ed("title",{},window.document.title||""),ed("body")),c.open("text/html"),c.write(Zc(d)),th(c.body,e),c.close())}
nO.prototype.add=function(a,b,c){this.f=""+a;mO&&qO(this,a);rO(this,a);c||this.g(this.f)};function sO(){var a=oO;this.l=this.A=this.f=null;this.i=a;this.j=window;this.g=this.j.location;this.F=v(this.G,this)}
sO.prototype.B=function(a,b){this.l&&(Q(this.l),delete this.l);this.A&&(Ot(this.A),delete this.A);a&&tO&&(this.f=this.g.href,b||this.i(this.f),this.l=P(this.j,"popstate",this.F))};
sO.prototype.G=function(a){var b=this.g.href;if((a=a.state)||b!=this.f)this.f=b,this.i(b,a)};
sO.prototype.add=function(a,b,c){if(a||b)a=a||this.g.href,this.j.history.pushState(b,"",a),this.f=a,c||this.i(a,b)};
sO.prototype.replace=function(a,b,c){if(a||b)a=a||this.g.href,this.j.history.replaceState(b,"",a),this.f=a,c||this.i(a,b)};
var tO=!!window.history.pushState&&(!xe||xe&&Qe("534.11"));function uO(){var a=vO("state");a.setEnabled.call(a,!0,!0)}
function wO(a){var b=null,c=vO();b=b||window.history&&window.history.state;c.replace.call(c,a,b,!0)}
function vO(a){var b=r("ytglobal.HistoryHistoryInstance");b||("state"==(void 0===a?"hash":a)?(b=new sO,sO.prototype.setEnabled=sO.prototype.B,sO.prototype.add=sO.prototype.add,sO.prototype.replace=sO.prototype.replace):(b=new nO,nO.prototype.setEnabled=nO.prototype.D,nO.prototype.add=nO.prototype.add,nO.prototype.replace=nO.prototype.add),q("ytglobal.HistoryHistoryInstance",b,void 0));return b}
function oO(a,b){S("navigate",a,b)}
;var xO={hi:"ypc_cc",vi:"ypc_ft",Ci:"ypc_irp",Fi:"ypc_ii",Gi:"ypc_it"};function yO(){var a=xt(window.location.href);if(tO){yb(xO,function(c){c in a&&delete a[c]});
var b=Wd(window.location.href.split("?",2)[0],a);uO();wO(b)}}
;function zO(a){LN=!!a;F("ypc-delayedloader-target")&&MN();a=xt(window.location.href);var b=a.ypc_it,c=a.ypc_ii,d=a.ypc_ft||"D",e=a.ypc_oi,f=a.ypc_irp,g=a.ypc_cc,k=a.ypc_ta;"channel"==L("PAGE_NAME")&&"ypc_cc"in a&&(b="U",c=L("CHANNEL_ID",void 0));if(f||c&&b)yO(),"start_payment"==k?(a=NN(e,b,c,d,g,null,"","",f,k),UN(a,PN(a),!0)):c&&b?QN(b,c,d,f,g):TN(d,f);WN.push(Du(document.body,"click",bO,"ypc-checkout-button"),Du(document.body,"click",$N,"ypc-offer-button"),Du(document.body,"click",jO,"ypc-complete-transaction-button"),
Du(document.body,"click",YN,"ytr-pre-purchase-button"),Du(document.documentElement,"click",gO,"ypc-unsubscribe-link"),Du(document.documentElement,"click",gO,"ypc-unsubscribe-button"),Du(document.documentElement,"click",iO,"offer-module-tab"),Du(document.documentElement,"click",kO,"yt-unlimited-more-offer-button"));XN.push(oy(JI,dO),oy(II,eO),oy(OI,fO),oy(MI,hO))}
;window.onload=function(){UJ()};
window.onunload=function(){L("TIMING_REPORT_ON_UNLOAD")&&Yy(!0);if(Ty(void 0))Xy("_start",void 0)&&Wy("aa",void 0,void 0);else if(!Dy(void 0)){var a=L("CSI_SERVICE_NAME","youtube");L("TIMING_ACTION",void 0)&&a&&(Wy("aa",void 0,void 0),Vy("ap",1,void 0),Vy("yt_fss","u",void 0),Zy(void 0))}if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"!=DJ){DJ="FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND";a=-1;CJ&&(a=Math.round(fv()-CJ));var b=String;var c=r("_fact",window);c=null==c||-1==c?-1:Math.max(x()-c,0);a={firstActivityMs:b(c),
clientDocumentNonce:dw,index:String(BJ),lastEventDeltaMs:String(a),trigger:"FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"};Bv("foregroundHeartbeat",a,Pv);q("_fact",-1,window);BJ++;CJ=fv()}a=(a=iw(0))?new ew({veType:a,youtubeData:void 0}):null;(b=kw())&&a&&gD(b,[a]);sv();a=YJ;b=0;for(c=a.length;b<c;b++)Qu(a[b]);YJ.length=0;TJ();WJ&&(WJ.cancel(),WJ=null);(a=L("PAGE_NAME",void 0))&&bv("dispose-"+a);bv("dispose");bv("pageunload")};
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=ot("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var k=0,l=g.length;k<l;k++)if(0<g[k].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new Ov(g),e.name="UnhandledWindowError",e.message=
g,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Xv(e):Yv(e))};
window.yt=window.yt||{};q("_gel",C,void 0);q("_hasclass",J,void 0);q("_addclass",K,void 0);q("_removeclass",kq,void 0);q("_toggleclass",oq,void 0);q("_showdiv",UA,void 0);q("_hidediv",VA,void 0);q("_ajax",Zt,void 0);q("yt.style.show",UA,void 0);q("yt.style.hide",VA,void 0);q("goog.bind",v,void 0);q("goog.dom.getElementByClass",F,void 0);q("goog.dom.getElementsByTagNameAndClass",Tg,void 0);q("goog.dom.getFirstElementChild",oh,void 0);q("goog.array.forEach",z,void 0);q("goog.array.indexOf",Xa,void 0);
q("goog.array.contains",hb,void 0);q("yt.setConfig",nt,void 0);q("yt.config.set",nt,void 0);q("yt.getConfig",L,void 0);q("yt.config.get",L,void 0);q("yt.logging.errors.log",function(a,b,c,d,e,f){Xv(a,void 0===b?"ERROR":b,c,d,f)},void 0);
q("yt.setTimeout",N,void 0);q("yt.setInterval",Nt,void 0);q("yt.clearTimeout",O,void 0);q("yt.clearInterval",Ot,void 0);q("yt.timers.setTimeout",N,void 0);q("yt.timers.setInterval",Nt,void 0);q("yt.timers.clearTimeout",O,void 0);q("yt.timers.clearInterval",Ot,void 0);q("yt.setMsg",IA,void 0);q("yt.setGoogMsg",KA,void 0);q("yt.getMsg",JA,void 0);q("yt.msgs.set",IA,void 0);q("yt.msgs.setGoog",KA,void 0);q("yt.msgs.get",JA,void 0);q("yt.events.listen",P,void 0);
q("yt.events.unlisten",function(a,b,c,d){d=void 0===d?{}:d;(a=yu(a,b,c,d))&&Q(a)},void 0);
q("yt.events.stopPropagation",Cu,void 0);q("yt.events.preventDefault",function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault();return!1},void 0);
q("yt.events.getTarget",Bu,void 0);q("yt.events.clear",function(){for(var a in wu)Q(a)},void 0);
q("yt.events.Event",uu,void 0);uu.prototype.preventDefault=uu.prototype.preventDefault;uu.prototype.stopPropagation=uu.prototype.stopPropagation;q("yt.pubsub.subscribe",R,void 0);q("yt.pubsub.unsubscribeByKey",av,void 0);q("yt.pubsub.publish",S,void 0);q("yt.pubsub2.publish",T,void 0);
R("init",function(){yG=new Lu(vG);FG.push(P(window,"resize",zG));FG.push(P(window,"scroll",CG));K(document.body,"page-loaded");var a=OE.getInstance(),b=RE(0,119),c=1<window.devicePixelRatio;document.body&&J(document.body,"exp-invert-logo")&&(c&&!J(document.body,"inverted-hdpi")?K(document.body,"inverted-hdpi"):!c&&J(document.body,"inverted-hdpi")&&kq(document.body,"inverted-hdpi"));if(b!=c){b="f"+(Math.floor(119/31)+1);var d=SE(b)||0;d=c?d|67108864:d&-67108865;0==d?delete NE[b]:(c=d.toString(16),
NE[b]=c.toString());a.save()}});
R("dispose",QA);R("init",QA);nF("keyboard");q("yt.uix.FormInput.selectOnChangeActionIE",function(a){iC.getInstance().Sa(a)},void 0);
R("init",function(){lC()});
q("goog.i18n.bidi.setDirAttribute",function(a,b){var c=b.value,d="";Yb.test(c)?d="rtl":Yb.test(c)||(d="ltr");b.dir=d},void 0);
q("yt.style.toggle",WA,void 0);q("yt.style.setDisplayed",RA,void 0);q("yt.style.isDisplayed",SA,void 0);q("yt.style.setVisible",function(a,b){if(a=C(a))a.style.visibility=b?"visible":"hidden"},void 0);
q("yt.net.ajax.sendWithOptionsFromUncompiled",function(a,b){return Yt(a,{format:b.format,method:b.method,postBody:b.postBody,onSuccess:b.onSuccess})},void 0);
q("yt.net.ajax.ResponseFormat.JSON","JSON",void 0);q("yt.net.ajax.ResponseFormat.RAW","RAW",void 0);q("yt.net.ajax.ResponseFormat.LEGACY_XML","XML",void 0);q("yt.net.ajax.getRootNode",eu,void 0);q("yt.net.ajax.getNodeValue",du,void 0);q("yt.net.scriptloader.load",qz,void 0);q("yt.net.styleloader.load",Zz,void 0);
q("goog.dom.forms.getFormDataString",function(a){for(var b=[],c=a.elements,d,e=0;d=c.item(e);e++)if(d.form==a&&!d.disabled&&"FIELDSET"!=d.tagName){var f=d.name;switch(d.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":d=qq(d);if(null!=d)for(var g,k=0;g=d[k];k++)pq(b,f,g);break;default:g=qq(d),null!=g&&pq(b,f,g)}}c=a.getElementsByTagName("INPUT");for(e=0;d=c[e];e++)d.form==a&&"image"==d.type.toLowerCase()&&(f=d.name,pq(b,f,d.value),pq(b,f+".x","0"),
pq(b,f+".y","0"));return b.join("&")},void 0);
q("yt.uri.buildQueryData",Ud,void 0);q("yt.uri.appendQueryData",Wd,void 0);q("yt.www.feedback.init",dF,void 0);q("yt.www.feedback.start",function(a,b){try{var c=(a||"59")+"",d=gF(b),e=hF();M("gfeedback_for_signed_out_users_enabled")?(e.productId=c,e.locale=d.locale,e.helpCenterPath=d.helpCenterPath,jt(e,d.productData)):yn(c,d).i(e);return!1}catch(f){return!0}},void 0);
q("yt.www.feedback.startHelp",fF,void 0);q("yt.www.feedback.displayLink",jF,void 0);R("init",dF);R("init",jF);R("dispose",function(){av(bF);Q($E);bF.length=0;$E.length=0;aF={}});
q("yt.net.cookies.set",Gv,void 0);q("yt.net.cookies.get",Hv,void 0);q("yt.net.cookies.remove",Iv,void 0);q("yt.window.redirect",Uz,void 0);
q("yt.window.popup",function(a,b){b=void 0===b?{}:b;b.target=b.target||"YouTube";b.width=b.width||"600";b.height=b.height||"600";var c;(c=b)||(c={});var d=window;var e=a instanceof rc?a:Ac("undefined"!=typeof a.href?a.href:String(a))||Cc;var f=c.target||a.target,g=[],k;for(k in c)switch(k){case "width":case "height":case "top":case "left":g.push(k+"="+c[k]);break;case "target":case "noopener":case "noreferrer":break;default:g.push(k+"="+(c[k]?1:0))}g=g.join(",");if(oe()&&d.navigator&&d.navigator.standalone&&
f&&"_self"!=f)g=hh("A"),sd(g,e),g.setAttribute("target",f),c.noreferrer&&g.setAttribute("rel","noreferrer"),c=document.createEvent("MouseEvent"),c.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(c),d={};else if(c.noreferrer){if(d=wd("",d,f,g),c=wc(e),d&&(ve&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),d.opener=null,c=ld(Wb("b/12014412, meta tag with sanitized URL"),'<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Ad(c)+'">'),e=d.document))e.write(Zc(c)),
e.close()}else(d=wd(e,d,f,g))&&c.noopener&&(d.opener=null);c=d;if(!c)return null;c.opener||(c.opener=window);c.focus();return c},void 0);
q("yt.window.navigate",Vz,void 0);R("init",function(){wD.getInstance().ic();WE.getInstance().ic()});
R("init",function(){var a=!!F("guide-module-loading");window.spf&&spf.load&&a&&(L("GUIDE_DELAY_LOAD")||uF(),vF.push(R("appbar-show-guide",uF)))});
SD(iB);SD(JC);SD(VB);SD(MC);SD(NC);SD(iC);SD(WB);SD(BB);SD(PC);SD(GB);SD(hD);SD(BC);SD(DC);SD(sD);SD(tD);SD(uD);SD(mJ);SD(WE);SD(wD);SD(tJ);SD(yJ);SD(FD);SD(HD);SD(JD);
q("yt.player.instances.create",function(a,b){var c=a;var d=void 0===d?!0:d;c="string"===typeof c?Sg(c):c;var e=sA+"_"+Ia(c),f=rA[e];f&&d?b&&b.args&&b.args.fflags&&b.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(b.args||null):f.loadNewVideoConfig(b):(f=new cA(c,e,b,void 0),rA[e]=f,S("player-added",f.api),Vf(f,Na(tA,f)));c=f.api;return c},void 0);
q("yt.www.watch.player.seekTo",function(){},void 0);
q("yt.www.watch.player.saveResumeOffset",function(a){var b;(b=L("PAGE_NAME"))&&"watch"!=b?(Yv(new Ov("getPlayer called on:",b)),b=null):b=uA();if(b&&b.isReady()){a&&nt("RESUME_COOKIE_NAME",a);a=L("VIDEO_ID",void 0);var c=b.getDuration();b=Math.floor(b.getCurrentTime());0==c||120>=b||b+120>=c?wN(a):vN(a,Math.floor(b))}},void 0);
q("yt.www.lists.data.addto.saveToWatchLater",dG,void 0);q("yt.www.lists.addtowatchlater.init",iG,void 0);R("init",iG);R("dispose",function(){cB("addto-watch-later-button","click",jG);cB("addto-watch-later-button-success","click",kG);cB("addto-watch-later-button-remove","click",lG);cB("addto-watch-later-button-sign-in","click",mG);Q(gG);gG=[]});
q("yt.www.watchqueue.addtowatchqueue.init",xN,void 0);R("init",xN);R("dispose",function(){av(BN);BN.length=0;IN=[];cB("addto-watch-queue-button","click",yN);cB("addto-tv-queue-button","click",yN);cB("addto-watch-queue-button-success","click",zN);cB("addto-watch-queue-menu-choice","click",AN);Wf(kN);kN=null;av(uN);uN.length=0;bN()});
q("yt.dom.datasets.get",V,void 0);q("yt.dom.datasets.set",kz,void 0);q("yt.abuse.player.botguardInitialized",r("yt.abuse.player.botguardInitialized")||Sz,void 0);q("yt.abuse.player.invokeBotguard",r("yt.abuse.player.invokeBotguard")||Tz,void 0);q("yt.abuse.dclkstatus.checkDclkStatus",r("yt.abuse.dclkstatus.checkDclkStatus")||Oz,void 0);q("yt.player.exports.navigate",r("yt.player.exports.navigate")||Wz,void 0);q("yt.util.activity.init",r("yt.util.activity.init")||Su,void 0);
q("yt.util.activity.getTimeSinceActive",r("yt.util.activity.getTimeSinceActive")||de,void 0);q("yt.util.activity.setTimestamp",r("yt.util.activity.setTimestamp")||Tu,void 0);
var AO=R("init",function(){OG();r("yt.www.page.visibilitymonitor.delegateByClass")(null,r("yt.www.page.visibilitymonitor.States.VISIBLE"),kJ,"yt-thumb");r("yt.www.page.visibilitymonitor.delegateByClass")(null,r("yt.www.page.visibilitymonitor.States.VISIBLE"),kJ,"yt-uix-simple-thumb-wrap");r("yt.www.page.visibilitymonitor.refresh")();Wy("tdl");av(AO)});
R("init",function(){for(var a=0;a<document.forms.length;a++){for(var b=!1,c=0;c<JN.length;c++)document.forms[a].name==JN[c]&&(b=!0);c=document.forms[a];if("post"==c.method.toLowerCase()&&0==b){b=!1;for(var d=0;d<c.elements.length;d++)c.elements[d].name==L("XSRF_FIELD_NAME")&&(b=!0);b||(b=L("XSRF_TOKEN"),d=document.createElement("input"),d.setAttribute("name",L("XSRF_FIELD_NAME")),d.setAttribute("type","hidden"),d.setAttribute("value",b),c.appendChild(d))}}});
q("yt.www.ads.MastheadAd",TE,void 0);TE.prototype.collapse_ad=TE.prototype.Ke;TE.prototype.expand_ad=TE.prototype.Ih;TE.prototype.userCollapsePremiumYva=TE.prototype.we;q("yt.www.feed.ui.ads.workaroundIE",function(a){!YE&&XE&&(YE=!0,N(function(){a.focus()},0))},void 0);
q("yt.www.feed.ui.ads.workaroundLoad",function(){XE=!0},void 0);
q("yt.net.ping.send",hu,void 0);q("yt.tracking.doubleclick.trackActivity",function(a,b,c){a=("https:"==document.location.protocol?"https://":"http://")+"fls.doubleclick.net/activityi;src="+yd(L("DBLCLK_ADVERTISER_ID"))+";type="+yd(a)+";cat="+yd(b);c&&!c.ord&&(a+=";ord=1");for(var d in c)a+=";"+yd(d)+"="+yd(c[d]);a+=";num="+x();c=hh("IFRAME");c.src=a;c.style.display="none";document.body.appendChild(c)},void 0);
q("yt.tracking.track",vz,void 0);q("yt.tracking.share",function(a,b,c,d,e,f){var g={};b&&(g.v=b);c&&(g.list=c);d&&(g.url=d);a={name:a,locale:e,feature:f};for(var k in g)a[k]=g[k];g=Wd("/sharing_services",a);hu(g)},void 0);
q("yt.www.subscription.autoaction.continueAction",function(a,b,c){T(ZH,new TH(a,{itemType:b,itemId:c}))},void 0);
R("init",function(a){a=!!a;PI.push(oy(ZH,QI),oy(dI,TI));a||PI.push(oy(cI,QI),oy(hI,TI),oy(WH,WI),oy(XH,YI),oy(kI,$I),oy(LI,bJ),oy(NI,dJ),oy(KI,cJ))});
R("init",function(){nI.push(oy(YH,zI),oy(mI,sI),oy(lI,rI))});
R("dispose",function(){sy(nI);nI.length=0;Q(oI);oI.length=0;oC&&(lh(oC),oC=null)});
R("init",function(){});
R("dispose",function(){Q(hJ);hJ.length=0;Object.keys(gJ).forEach(function(a){lh(gJ[a])});
gJ={}});
R("init",function(){L("CREATE_CHANNEL_LIGHTBOX")&&fE();L("FEED_PRIVACY_LIGHTBOX_ENABLED")&&(lE.push(R("SHOW-FEED-PRIVACY-FAVORITE-DIALOG",sE)),lE.push(R("SHOW-FEED-PRIVACY-LIKE-DIALOG",rE)),lE.push(R("SHOW-FEED-PRIVACY-ADD-TO-PLAYLIST-DIALOG",tE)),lE.push(R("SHOW-FEED-PRIVACY-LIKE-PLAYLIST-DIALOG",uE)),lE.push(R("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",qE)));if(L("SHOW_IDENTITY_PROMPT_LIGHTBOX")){var a=cE(vE);var b=L("IDENTITY_PROMPT_NEXT_URL",document.location.href),c=L("IDENTITY_PROMPT_AUTHUSER",void 0),
d=L("IDENTITY_PROMPT_PAGEID",void 0),e={};c&&(e.authuser=c);d&&(e.pageid=d);a.open("identity-prompt","/identity_prompt_ajax","identity_prompt_ajax",!0,!0,void 0,b,!0,e)}L("SHOW_MCNA_YPE_MODAL")&&new ME("")});
R("dispose",function(){});
q("yt.www.account.AddNewChannelLoader.init",function(){var a=cE(dE);a.l=L("ADD_NEW_CHANNEL_PAGE_ID",void 0)||null;a.init(L("ADD_NEW_CHANNEL_CSS_URL",void 0),L("ADD_NEW_CHANNEL_JS_URL",void 0),!a.l,C("body-container"),"add-secondary-channel")},void 0);
q("yt.www.account.CreateChannelLoader.show",function(a,b,c,d){fE(!0,a,b,c,d)},void 0);
R("init",zO);q("yt.ypc.bootstrap.init",zO,void 0);var BO=R("init",function(){L("PAGEFRAME_JS")&&qz(L("PAGEFRAME_JS",void 0),function(){r("ytbin.www.pageframe.setup")()});
av(BO)});}).call(this);
