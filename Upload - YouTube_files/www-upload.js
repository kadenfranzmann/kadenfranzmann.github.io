(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function ea(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
ea("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.g=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d=0;return b});
ea("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ja(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ka(a){if(!(a instanceof Array)){a=ja(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function ra(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.J=b.prototype}
function sa(){this.A=!1;this.g=null;this.F=void 0;this.j=1;this.C=0;this.l=null}
function ta(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
sa.prototype.B=function(a){this.F=a};
function ua(a,b){a.l={Lo:b,gr:!0};a.j=a.C}
sa.prototype["return"]=function(a){this.l={"return":a};this.j=this.C};
function va(a){this.g=new sa;this.j=a}
function wa(a,b){ta(a.g);var c=a.g.g;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g["return"]);
a.g["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.g.g,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.A=!1,e;var f=e.value}catch(g){return a.g.g=null,ua(a.g,g),ya(a)}a.g.g=null;d.call(a.g,f);return ya(a)}
function ya(a){for(;a.g.j;)try{var b=a.j(a.g);if(b)return a.g.A=!1,{value:b.value,done:!1}}catch(c){a.g.F=void 0,ua(a.g,c)}a.g.A=!1;if(a.g.l){b=a.g.l;a.g.l=null;if(b.gr)throw b.Lo;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){ta(a.g);a.g.g?b=xa(a,a.g.g.next,b,a.g.B):(a.g.B(b),b=ya(a));return b};
this["throw"]=function(b){ta(a.g);a.g.g?b=xa(a,a.g.g["throw"],b,a.g.B):(ua(a.g,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Aa(a){function b(d){return a.next(d)}
function c(d){return a["throw"](d)}
new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
ea("Promise",function(a){function b(g){this.j=0;this.l=void 0;this.g=[];var k=this.B();try{g(k.resolve,k.reject)}catch(l){k.reject(l)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(k){k(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.g){this.g=[];var k=this;this.l(function(){k.B()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.B=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var k=0;k<g.length;++k){var l=g[k];g[k]=null;try{l()}catch(m){this.A(m)}}}this.g=null};
c.prototype.A=function(g){this.l(function(){throw g;})};
b.prototype.B=function(){function g(m){return function(n){l||(l=!0,m.call(k,n))}}
var k=this,l=!1;return{resolve:g(this.K),reject:g(this.A)}};
b.prototype.K=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.M(g);else{a:switch(typeof g){case "object":var k=null!=g;break a;case "function":k=!0;break a;default:k=!1}k?this.L(g):this.C(g)}};
b.prototype.L=function(g){var k=void 0;try{k=g.then}catch(l){this.A(l);return}"function"==typeof k?this.P(k,g):this.C(g)};
b.prototype.A=function(g){this.F(2,g)};
b.prototype.C=function(g){this.F(1,g)};
b.prototype.F=function(g,k){if(0!=this.j)throw Error("Cannot settle("+g+", "+k+"): Promise already settled in state"+this.j);this.j=g;this.l=k;this.D()};
b.prototype.D=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.j(this.g[g]);this.g=null}};
var f=new c;b.prototype.M=function(g){var k=this.B();g.Tf(k.resolve,k.reject)};
b.prototype.P=function(g,k){var l=this.B();try{g.call(k,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,k){function l(r,v){return"function"==typeof r?function(B){try{m(r(B))}catch(E){n(E)}}:v}
var m,n,t=new b(function(r,v){m=r;n=v});
this.Tf(l(g,m),l(k,n));return t};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.Tf=function(g,k){function l(){switch(m.j){case 1:g(m.l);break;case 2:k(m.l);break;default:throw Error("Unexpected state: "+m.j);}}
var m=this;null==this.g?f.j(l):this.g.push(l)};
b.resolve=d;b.reject=function(g){return new b(function(k,l){l(g)})};
b.race=function(g){return new b(function(k,l){for(var m=ja(g),n=m.next();!n.done;n=m.next())d(n.value).Tf(k,l)})};
b.all=function(g){var k=ja(g),l=k.next();return l.done?d([]):new b(function(m,n){function t(B){return function(E){r[B]=E;v--;0==v&&m(r)}}
var r=[],v=0;do r.push(void 0),v++,d(l.value).Tf(t(r.length-1),n),l=k.next();while(!l.done)})};
return b});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ea("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ea("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
ea("WeakMap",function(a){function b(l){this.g=(k+=Math.random()+1).toString();if(l){l=ja(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!Ca(l,g)){var m=new c;ba(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),n=new a([[l,2],[m,3]]);if(2!=n.get(l)||3!=n.get(m))return!1;n["delete"](l);n.set(m,4);return!n.has(l)&&4==n.get(m)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var k=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!Ca(l,g))throw Error("WeakMap key fail: "+l);l[g][this.g]=m;return this};
b.prototype.get=function(l){return d(l)&&Ca(l,g)?l[g][this.g]:void 0};
b.prototype.has=function(l){return d(l)&&Ca(l,g)&&Ca(l[g],this.g)};
b.prototype["delete"]=function(l){return d(l)&&Ca(l,g)&&Ca(l[g],this.g)?delete l[g][this.g]:!1};
return b});
ea("Map",function(a){function b(){var k={};return k.previous=k.next=k.head=k}
function c(k,l){var m=k.g;return ha(function(){if(m){for(;m.head!=k.g;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(k,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var n=k.j[m];if(n&&Ca(k.j,m))for(var t=0;t<n.length;t++){var r=n[t];if(l!==l&&r.key!==r.key||l===r.key)return{id:m,list:n,index:t,kb:r}}return{id:m,list:n,index:-1,kb:void 0}}
function e(k){this.j={};this.g=b();this.size=0;if(k){k=ja(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var k=Object.seal({x:4}),l=new a(ja([[k,"s"]]));if("s"!=l.get(k)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),n=m.next();if(n.done||n.value[0]!=k||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(t){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(k,l){k=0===k?0:k;var m=d(this,k);m.list||(m.list=this.j[m.id]=[]);m.kb?m.kb.value=l:(m.kb={next:this.g,previous:this.g.previous,head:this.g,key:k,value:l},m.list.push(m.kb),this.g.previous.next=m.kb,this.g.previous=m.kb,this.size++);return this};
e.prototype["delete"]=function(k){k=d(this,k);return k.kb&&k.list?(k.list.splice(k.index,1),k.list.length||delete this.j[k.id],k.kb.previous.next=k.kb.next,k.kb.next.previous=k.kb.previous,k.kb.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.j={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(k){return!!d(this,k).kb};
e.prototype.get=function(k){return(k=d(this,k).kb)&&k.value};
e.prototype.entries=function(){return c(this,function(k){return[k.key,k.value]})};
e.prototype.keys=function(){return c(this,function(k){return k.key})};
e.prototype.values=function(){return c(this,function(k){return k.value})};
e.prototype.forEach=function(k,l){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,k.call(l,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Da(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
ea("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
ea("Set",function(a){function b(c){this.g=new Map;if(c){c=ja(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ja([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype["delete"]=function(c){c=this.g["delete"](c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ea("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
var Ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
ea("Object.assign",function(a){return a||Ea});
ea("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
ea("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
ea("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
ea("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
ea("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
ea("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
var Fa=Fa||{},p=this||self;function q(a,b,c){a=a.split(".");c=c||p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var Ga=/^[\w+/_-]+[=]{0,2}$/,Ha=null;function Ia(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ga.test(a)?a:""}
function u(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ja(){}
function Ka(a){a.Qi=void 0;a.V=function(){return a.Qi?a.Qi:a.Qi=new a}}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){return"function"==La(a)}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=Sa:w=Ta;return w.apply(null,arguments)}
function Ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var x=Date.now;function y(a,b,c){c&&c.html&&(a=a.replace(/</g,"&lt;"));b&&(a=a.replace(/\{\$([^}]+)}/g,function(d,e){return null!=b&&e in b?b[e]:d}));
return a}
function Va(a,b){q(a,b,void 0)}
function z(a,b){function c(){}
c.prototype=b.prototype;a.J=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
function Xa(a){var b=null,c=p.trustedTypes;if(!c||!c.createPolicy)return b;try{b=c.createPolicy(a,{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(d){p.console&&p.console.error(d.message)}return b}
;function Ya(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(Ya,Error);Ya.prototype.name="CustomError";var Za;function $a(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");Ya.call(this,d+c[e])}
z($a,Ya);$a.prototype.name="AssertionError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.A=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.j=c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},cb=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function db(a,b,c){for(var d="string"===typeof a?a.split(""):a,e=a.length-1;0<=e;--e)e in d&&b.call(c,d[e],e,a)}
var eb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},fb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
A(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},hb=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},ib=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function jb(a,b,c){a:{for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a)){b=f;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function kb(a,b){var c=lb(a,b,void 0);return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function lb(a,b,c){for(var d="string"===typeof a?a.split(""):a,e=a.length-1;0<=e;e--)if(e in d&&b.call(c,d[e],e,a))return e;return-1}
function mb(a,b){return 0<=bb(a,b)}
function nb(a){if(!Array.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}
function ob(a,b,c){var d;2==arguments.length||0>(d=bb(a,c))?a.push(b):pb(a,d,0,b)}
function qb(a,b){var c=bb(a,b),d;(d=0<=c)&&rb(a,c);return d}
function rb(a,b){return 1==Array.prototype.splice.call(a,b,1).length}
function sb(a){return Array.prototype.concat.apply([],arguments)}
function tb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ub(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function pb(a,b,c,d){return Array.prototype.splice.apply(a,vb(arguments,1))}
function vb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function wb(a,b){return yb(a,b,!0,void 0,void 0)}
function yb(a,b,c,d,e){for(var f=0,g=a.length,k;f<g;){var l=f+(g-f>>>1),m;c?m=b.call(e,a[l],l,a):m=b(d,a[l]);0<m?f=l+1:(g=l,k=!m)}return k?f:-f-1}
function zb(a,b){a.sort(b||Ab)}
function Bb(a,b){var c=Ab;zb(a,function(d,e){return c(b(d),b(e))})}
function Cb(a){Bb(a,function(b){return b.name})}
function Db(a,b){if(!Ma(a)||!Ma(b)||a.length!=b.length)return!1;for(var c=a.length,d=Eb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}
function Ab(a,b){return a>b?1:a<b?-1:0}
function Eb(a,b){return a===b}
function Fb(a,b,c){c=yb(a,c||Ab,!1,b);0>c&&pb(a,-(c+1),0,b)}
function Gb(a,b,c){b=yb(a,c||Ab,!1,b);0<=b&&rb(a,b)}
function Hb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192){var f=vb(d,e,e+8192);f=Hb.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b}
;function Ib(a){return function(){return a}}
function Jb(){return null}
function Kb(a){return a}
function Lb(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}}
function Mb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Nb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Ob(a,b){var c={},d;for(d in a)b.call(void 0,a[d],d,a)&&(c[d]=a[d]);return c}
function Pb(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}
function Qb(a){var b=0,c;for(c in a)b++;return b}
function Rb(a){for(var b in a)return a[b]}
function Sb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Tb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Ub(a,b){var c=Ma(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Vb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Wb(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}
function Xb(a){for(var b in a)return!1;return!0}
function Yb(a,b){b in a&&delete a[b]}
function Zb(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c}
function $b(a,b,c){return null!==a&&b in a?a[b]:c}
function ac(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function bc(a){var b={},c;for(c in a)b[c]=a[c];return b}
function cc(a){var b=La(a);if("object"==b||"array"==b){if(Na(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=cc(a[c]);return b}return a}
var dc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ec(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<dc.length;f++)c=dc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function fc(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return fc.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var gc={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var hc;function ic(){void 0===hc&&(hc=Xa("goog#html"));return hc}
;function jc(a,b){this.g=a===kc&&b||"";this.j=lc}
jc.prototype.mc=!0;jc.prototype.Nb=function(){return this.g};
function nc(a){return a instanceof jc&&a.constructor===jc&&a.j===lc?a.g:"type_error:Const"}
function oc(a){return new jc(kc,a)}
var lc={},kc={};function pc(){var a=void 0!==p.URL&&void 0!==p.URL.createObjectURL?p.URL:void 0!==p.webkitURL&&void 0!==p.webkitURL.createObjectURL?p.webkitURL:void 0!==p.createObjectURL?p:null;if(null!=a)return a;throw Error("This browser doesn't seem to support blob URLs");}
;function qc(a){var b=p.BlobBuilder||p.WebKitBlobBuilder;if(void 0!==b){b=new b;for(var c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=tb(arguments);c=p.BlobBuilder||p.WebKitBlobBuilder;if(void 0!==c){c=new c;for(var d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(void 0!==p.Blob)b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b}
;var rc=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),sc=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");function tc(a,b){this.j=a===uc&&b||"";this.l=vc}
tc.prototype.mc=!0;tc.prototype.Nb=function(){return this.j.toString()};
tc.prototype.Pi=!0;tc.prototype.g=function(){return 1};
function wc(a){return xc(a).toString()}
function xc(a){if(a instanceof tc&&a.constructor===tc&&a.l===vc)return a.j;La(a);return"type_error:TrustedResourceUrl"}
function yc(a){var b={},c=nc(a);if(!zc.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(Ac,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));var f=b[e];return f instanceof jc?nc(f):encodeURIComponent(String(f))});
return Bc(a)}
var Ac=/%{(\w+)}/g,zc=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,Cc=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;function Dc(a){return Bc(nc(a))}
var vc={};function Bc(a){var b=ic();a=b?b.createScriptURL(a):a;return new tc(uc,a)}
function Ec(a,b,c){if(null==c)return b;if("string"===typeof c)return c?a+encodeURIComponent(c):"";for(var d in c){var e=c[d];e=Array.isArray(e)?e:[e];for(var f=0;f<e.length;f++){var g=e[f];null!=g&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(d)+"="+encodeURIComponent(String(g)))}}return b}
var uc={};function Fc(a,b){return 0==a.lastIndexOf(b,0)}
function Gc(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}
function Hc(a){a=String(a.substr(0,3)).toLowerCase();return 0==("<tr"<a?-1:"<tr"==a?0:1)}
function Ic(a){return/^[\s\xa0]*$/.test(a)}
var Jc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Kc(a,b){if(b)a=a.replace(Lc,"&amp;").replace(Mc,"&lt;").replace(Nc,"&gt;").replace(Oc,"&quot;").replace(Pc,"&#39;").replace(Qc,"&#0;");else{if(!Rc.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Lc,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Mc,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Nc,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Oc,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Pc,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Qc,"&#0;"))}return a}
var Lc=/&/g,Mc=/</g,Nc=/>/g,Oc=/"/g,Pc=/'/g,Qc=/\x00/g,Rc=/[\x00&<>"']/;function Sc(a,b){return-1!=a.indexOf(b)}
function Tc(a,b){for(var c=0,d=Jc(String(a)).split("."),e=Jc(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",l=e[g]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=Uc(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||Uc(0==k[2].length,0==l[2].length)||Uc(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function Uc(a,b){return a<b?-1:a>b?1:0}
;function Vc(a,b){this.j=a===Wc&&b||"";this.l=Xc}
Vc.prototype.mc=!0;Vc.prototype.Nb=function(){return this.j.toString()};
Vc.prototype.Pi=!0;Vc.prototype.g=function(){return 1};
function Yc(a){if(a instanceof Vc&&a.constructor===Vc&&a.l===Xc)return a.j;La(a);return"type_error:SafeUrl"}
var Zc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function $c(a){if(a instanceof Vc)return a;a="object"==typeof a&&a.mc?a.Nb():String(a);return Zc.test(a)?ad(a):null}
function bd(a){if(a instanceof Vc)return a;a="object"==typeof a&&a.mc?a.Nb():String(a);Zc.test(a)||(a="about:invalid#zClosurez");return ad(a)}
var Xc={};function ad(a){return new Vc(Wc,a)}
var cd=ad("about:invalid#zClosurez"),Wc={};function dd(){this.g="";this.j=ed}
dd.prototype.mc=!0;var ed={};dd.prototype.Nb=function(){return this.g};
function fd(a){var b=new dd;b.g=a;return b}
var gd=fd("");function hd(a){if(a instanceof Vc)return'url("'+Yc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof jc?nc(a):id(String(a));if(/[{;}]/.test(a))throw new $a("Value does not allow [{;}], got: %s.",[a]);return a}
function id(a){var b=a.replace(jd,"$1").replace(jd,"$1").replace(kd,"url");if(ld.test(b)){if(md.test(a))return"zClosurez";for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}if(!b||!c||!nd(a))return"zClosurez"}else return"zClosurez";return od(a)}
function nd(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var ld=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,kd=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),jd=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),md=/\/\*/;function od(a){return a.replace(kd,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,k,l){f=k;return l});
b=($c(d)||cd).Nb();return c+f+b+f+e})}
;function pd(){this.g="";this.j=qd}
pd.prototype.mc=!0;var qd={};function rd(a){function b(d){Array.isArray(d)?A(d,b):c+=td(d)}
var c="";A(arguments,b);return ud(c)}
function vd(a){a=nc(a);return 0===a.length?wd:ud(a)}
pd.prototype.Nb=function(){return this.g};
function td(a){if(a instanceof pd&&a.constructor===pd&&a.j===qd)return a.g;La(a);return"type_error:SafeStyleSheet"}
function ud(a){var b=new pd;b.g=a;return b}
var wd=ud("");var xd;a:{var yd=p.navigator;if(yd){var zd=yd.userAgent;if(zd){xd=zd;break a}}xd=""}function Ad(a){return Sc(xd,a)}
;function Bd(){return Ad("Firefox")||Ad("FxiOS")}
function Cd(){return Ad("Safari")&&!(Dd()||Ad("Coast")||Ad("Opera")||Ad("Edge")||Ad("Edg/")||Ad("OPR")||Bd()||Ad("Silk")||Ad("Android"))}
function Dd(){return(Ad("Chrome")||Ad("CriOS"))&&!Ad("Edge")}
function Ed(){return Ad("Android")&&!(Dd()||Bd()||Ad("Opera")||Ad("Silk"))}
;function Fd(){this.j="";this.A=Gd;this.l=null}
Fd.prototype.Pi=!0;Fd.prototype.g=function(){return this.l};
Fd.prototype.mc=!0;Fd.prototype.Nb=function(){return this.j.toString()};
function Hd(a){if(a instanceof Fd&&a.constructor===Fd&&a.A===Gd)return a.j;La(a);return"type_error:SafeHtml"}
function Id(a){if(a instanceof Fd)return a;var b="object"==typeof a,c=null;b&&a.Pi&&(c=a.g());return Jd(Kc(b&&a.mc?a.Nb():String(a)),c)}
function Kd(a){if(a instanceof Fd)return a;a=Id(a);var b=Hd(a).toString().replace(/  /g," &#160;").replace(/(\r\n|\r|\n)/g,"<br>");return Ld(b,a.g())}
var Md=/^[a-zA-Z0-9-]+$/,Nd={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},Od={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};function Pd(a,b,c){var d=String(a);if(!Md.test(d))throw Error("");if(d.toUpperCase()in Od)throw Error("");return Qd(String(a),b,c)}
function Rd(a){var b=Sd({type:"text/css"},void 0),c="";a=sb(a);for(var d=0;d<a.length;d++)c+=td(a[d]);a=Ld(c,0);return Qd("style",b,a)}
function Td(a){function b(f){Array.isArray(f)?A(f,b):(f=Id(f),e.push(Hd(f).toString()),f=f.g(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=Id(Ud),d=c.g(),e=[];A(a,b);return Jd(e.join(Hd(c).toString()),d)}
function Vd(a){return Td(Array.prototype.slice.call(arguments))}
var Gd={};function Jd(a,b){return Ld(a,b)}
function Ld(a,b){var c=new Fd,d=ic();c.j=d?d.createHTML(a):a;c.l=b;return c}
function Qd(a,b,c){var d=null,e="";if(b)for(n in b){if(!Md.test(n))throw Error("");var f=b[n];if(null!=f){var g=n;var k=f;if(k instanceof jc)k=nc(k);else if("style"==g.toLowerCase()){f=void 0;if(!Oa(k))throw Error("");if(!(k instanceof dd)){var l="";for(f in k){if(!/^[-_a-zA-Z0-9]+$/.test(f))throw Error("Name allows only [-_a-zA-Z0-9], got: "+f);var m=k[f];null!=m&&(m=Array.isArray(m)?fb(m,hd).join(" "):hd(m),l+=f+":"+m+";")}k=l?fd(l):gd}k instanceof dd&&k.constructor===dd&&k.j===ed?f=k.g:(La(k),
f="type_error:SafeStyle");k=f}else{if(/^on/i.test(g))throw Error("");if(g.toLowerCase()in Nd)if(k instanceof tc)k=wc(k);else if(k instanceof Vc)k=Yc(k);else if("string"===typeof k)k=($c(k)||cd).Nb();else throw Error("");}k.mc&&(k=k.Nb());g=g+'="'+Kc(String(k))+'"';e+=" "+g}}var n="<"+a+e;null==c?c=[]:Array.isArray(c)||(c=[c]);!0===gc[a.toLowerCase()]?n+=">":(d=Vd(c),n+=">"+Hd(d).toString()+"</"+a+">",d=d.g());(a=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(a)?d=0:d=null);return Ld(n,d)}
function Sd(a,b){var c={},d={},e;for(e in a)d[e]=a[e];for(e in c)d[e]=c[e];if(b)for(e in b){var f=e.toLowerCase();if(f in a)throw Error("");f in c&&delete d[f];d[e]=b[e]}return d}
var Wd=new Fd;Wd.j=p.trustedTypes&&p.trustedTypes.emptyHTML?p.trustedTypes.emptyHTML:"";Wd.l=0;var Ud=Wd,Xd=Ld("<br>",0);function Yd(a,b,c){nc(a);nc(a);return Ld(b,c||null)}
function Zd(a,b){nc(a);nc(a);return ad(b)}
;var $d=Mb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Hd(Ud);return!b.parentElement});
function ae(a,b){if($d())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Hd(b)}
function be(a,b){var c=b instanceof Vc?b:bd(b);a.action=Yc(c)}
function ce(a,b){var c=b instanceof Vc?b:bd(b);a.href=Yc(c)}
function de(a,b){a.src=wc(b)}
function ee(a,b){a.src=xc(b);var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=p?c=Ia(c.document):(null===Ha&&(Ha=Ia(p.document)),c=Ha);c&&a.setAttribute("nonce",c)}
function fe(a,b,c,d){a=a instanceof Vc?a:bd(a);b=b||p;c=c instanceof jc?nc(c):c||"";return b.open(Yc(a),c,d,void 0)}
;function ge(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
function he(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")}
function ie(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}
function je(a){return encodeURIComponent(String(a))}
function ke(a){return decodeURIComponent(a.replace(/\+/g," "))}
function le(a){return a=Kc(a,void 0)}
function me(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=p.document.createElement("div");return a.replace(ne,function(d,e){var f=b[d];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(f=Yd(oc("Single HTML entity."),d+" "),ae(c,f),f=c.firstChild.nodeValue.slice(0,-1));return b[d]=f})}
function oe(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return b}})}
var ne=/&([^;\s<&]+);?/g;function pe(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a}
function qe(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")}
var re=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function se(a,b){var c=String(a),d=c.indexOf(".");-1==d&&(d=c.length);return re("0",Math.max(0,b-d))+c}
function te(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36)}
function ue(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function ve(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function we(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()}
function xe(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
function ye(a){var b=3;a=a.split(":");for(var c=[];0<b&&a.length;)c.push(a.shift()),b--;a.length&&c.push(a.join(":"));return c}
;function ze(a,b,c,d,e,f,g){var k="";a&&(k+=a+":");c&&(k+="//",b&&(k+=b+"@"),k+=c,d&&(k+=":"+d));e&&(k+=e);f&&(k+="?"+f);g&&(k+="#"+g);return k}
var Ae=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Be(a){return a?decodeURI(a):a}
function Ce(a,b){return b.match(Ae)[a]||null}
function De(a){return Be(Ce(3,a))}
function Ee(){var a=document.location.href.match(Ae);return ze(a[1],a[2],a[3],a[4])}
function Fe(a){a=a.match(Ae);return ze(null,null,null,null,a[5],a[6],a[7])}
function Ge(a,b){var c=a.match(Ae),d=b.match(Ae);return c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]}
function He(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?ke(f):"")}}
function Ie(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}
function Je(a,b){return b?a?a+"&"+b:b:a}
function Ke(a,b){if(!b)return a;var c=Ie(a);c[1]=Je(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Le(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Le(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+je(b)))}
function Me(a){var b=[],c;for(c in a)Le(c,a[c],b);return b.join("&")}
function Ne(a,b){var c=Me(b);return Ke(a,c)}
function Oe(a,b,c){c=null!=c?"="+je(c):"";return Ke(a,b+c)}
function Pe(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Qe=/#|$/;function Re(a,b){var c=a.search(Qe),d=Pe(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return ke(a.substr(d,e-d))}
var Se=/[?&]($|#)/;function Te(a,b){for(var c=a.search(Qe),d=0,e,f=[];0<=(e=Pe(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(Se,"$1")}
function Ue(a,b,c){return Oe(Te(a,b),b,c)}
function Ve(a){var b=We();a=Ie(a);var c=a[1],d=[];c&&A(c.split("&"),function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});
a[1]=Je(d.join("&"),Me(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
;function Xe(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b}
function Ye(a){return fb(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")}
function Ze(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=a[c++];var g=a[c++],k=a[c++];e=((e&7)<<18|(f&63)<<12|(g&63)<<6|k&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],g=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|g&63)}return b.join("")}
;var $e=0,af=0;function bf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));$e=c;af=a}
function cf(a){var b=0>a?1:0;a=b?-a:a;if(0===a)af=0<1/a?0:2147483648,$e=0;else if(isNaN(a))af=2147483647,$e=4294967295;else if(1.7976931348623157E308<a)af=(b<<31|2146435072)>>>0,$e=0;else if(2.2250738585072014E-308>a)a/=Math.pow(2,-1074),af=(b<<31|a/4294967296)>>>0,$e=a>>>0;else{var c=a,d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;a*=Math.pow(2,-d);af=(b<<31|d+1023<<20|1048576*a&1048575)>>>0;$e=4503599627370496*a>>>0}}
;function df(){this.g=[]}
df.prototype.length=function(){return this.g.length};
df.prototype.end=function(){var a=this.g;this.g=[];return a};
function ef(a){for(var b=$e,c=af;0<c||127<b;)a.g.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.g.push(b)}
function ff(a,b){for(;127<b;)a.g.push(b&127|128),b>>>=7;a.g.push(b)}
function gf(a,b){if(0<=b)ff(a,b);else{for(var c=0;9>c;c++)a.g.push(b&127|128),b>>=7;a.g.push(1)}}
function hf(a,b){a.g.push(b>>>0&255);a.g.push(b>>>8&255);a.g.push(b>>>16&255);a.g.push(b>>>24&255)}
;function jf(){return Ad("iPhone")&&!Ad("iPod")&&!Ad("iPad")}
function kf(){return jf()||Ad("iPad")||Ad("iPod")}
;function lf(a){lf[" "](a);return a}
lf[" "]=Ja;function mf(a,b){try{return lf(a[b]),!0}catch(c){}return!1}
function nf(a,b){var c=of;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var pf=Ad("Opera"),C=Ad("Trident")||Ad("MSIE"),qf=Ad("Edge"),rf=qf||C,sf=Ad("Gecko")&&!(Sc(xd.toLowerCase(),"webkit")&&!Ad("Edge"))&&!(Ad("Trident")||Ad("MSIE"))&&!Ad("Edge"),tf=Sc(xd.toLowerCase(),"webkit")&&!Ad("Edge"),uf=tf&&Ad("Mobile"),vf=Ad("Macintosh"),wf=Ad("Windows"),xf=Ad("Linux")||Ad("CrOS"),yf=Ad("Android"),zf=jf(),Af=Ad("iPad"),Bf=Ad("iPod"),Cf=kf();function Df(){var a=p.document;return a?a.documentMode:void 0}
var Ef;a:{var Ff="",Gf=function(){var a=xd;if(sf)return/rv:([^\);]+)(\)|;)/.exec(a);if(qf)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(tf)return/WebKit\/(\S+)/.exec(a);if(pf)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Gf&&(Ff=Gf?Gf[1]:"");if(C){var Hf=Df();if(null!=Hf&&Hf>parseFloat(Ff)){Ef=String(Hf);break a}}Ef=Ff}var If=Ef,of={};function Jf(a){return nf(a,function(){return 0<=Tc(If,a)})}
function Kf(a){return Number(Lf)>=a}
var Mf;if(p.document&&C){var Nf=Df();Mf=Nf?Nf:parseInt(If,10)||void 0}else Mf=void 0;var Lf=Mf;var Of=Bd(),Pf=jf()||Ad("iPod"),Qf=Ad("iPad"),Rf=Ed(),Sf=Dd(),Tf=Cd()&&!kf();var Uf={},Vf=null;function Wf(a,b){Ma(a);void 0===b&&(b=0);Xf();for(var c=Uf[b],d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,n=f>>2;f=(f&3)<<4|k>>4;k=(k&15)<<2|m>>6;m&=63;l||(m=64,g||(k=64));d.push(c[n],c[f],c[k]||"",c[m]||"")}return d.join("")}
function Yf(a){var b=[];Zf(a,function(c){b.push(c)});
return b}
function Zf(a,b){function c(l){for(;d<a.length;){var m=a.charAt(d++),n=Vf[m];if(null!=n)return n;if(!Ic(m))throw Error("Unknown base64 encoding at char: "+m);}return l}
Xf();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}}
function Xf(){if(!Vf){Vf={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Uf[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Vf[f]&&(Vf[f]=e)}}}}
;function $f(){this.l=[];this.j=0;this.g=new df}
function ag(a,b){bg(a,b,2);var c=a.g.end();a.l.push(c);a.j+=c.length;c.push(a.j);return c}
function cg(a,b){var c=b.pop();for(c=a.j+a.g.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.j++;b.push(c);a.j++}
$f.prototype.reset=function(){this.l=[];this.g.end();this.j=0};
function bg(a,b,c){ff(a.g,8*b+c)}
function dg(a,b,c){null!=c&&(bg(a,b,1),a=a.g,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,$e=b,af=c,hf(a,$e),hf(a,af))}
function eg(a,b,c){null!=c&&(bg(a,b,0),a.g.g.push(c?1:0))}
function fg(a,b,c){if(null!=c){b=ag(a,b);for(var d=a.g,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.g.push(f);else if(2048>f)d.g.push(f>>6|192),d.g.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var g=c.charCodeAt(e+1);56320<=g&&57343>=g&&(f=1024*(f-55296)+g-56320+65536,d.g.push(f>>18|240),d.g.push(f>>12&63|128),d.g.push(f>>6&63|128),d.g.push(f&63|128),e++)}else d.g.push(f>>12|224),d.g.push(f>>6&63|128),d.g.push(f&63|128)}cg(a,b)}}
function gg(a,b,c,d){null!=c&&(b=ag(a,b),d(c,a),cg(a,b))}
function hg(a,b,c,d){if(null!=c)for(var e=0;e<c.length;e++){var f=ag(a,b);d(c[e],a);cg(a,f)}}
;function ig(a){this.j=a;this.g={};this.l=!0;if(0<this.j.length){for(a=0;a<this.j.length;a++){var b=this.j[a],c=b[0];this.g[c.toString()]=new jg(c,b[1])}this.l=!0}}
h=ig.prototype;h.Kb=function(){var a;if(!this.l){this.j.length=0;var b=kg(this);b.sort();for(var c=0;c<b.length;c++){var d=this.g[b[c]];(a=d.g)&&a.Kb();this.j.push([d.key,d.value])}this.l=!0}return this.j};
h.clear=function(){this.g={};this.l=!1};
h.entries=function(){var a=[],b=kg(this);b.sort();for(var c=0;c<b.length;c++){var d=this.g[b[c]];a.push([d.key,d.value])}return new lg(a)};
h.keys=function(){var a=[],b=kg(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.g[b[c]].key);return new lg(a)};
h.values=function(){var a=[],b=kg(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.g[b[c]].value);return new lg(a)};
h.forEach=function(a,b){var c=kg(this);c.sort();for(var d=0;d<c.length;d++){var e=this.g[c[d]];a.call(b,e.value,e.key,this)}};
h.set=function(a,b){var c=new jg(a);c.value=b;this.g[a.toString()]=c;this.l=!1;return this};
h.get=function(a){if(a=this.g[a.toString()])return a.value};
h.has=function(a){return a.toString()in this.g};
function kg(a){a=a.g;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}
function jg(a,b){this.key=a;this.value=b;this.g=void 0}
function lg(a){this.g=0;this.j=a}
lg.prototype.next=function(){return this.g<this.j.length?{done:!1,value:this.j[this.g++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.iterator&&(lg.prototype[Symbol.iterator]=function(){return this});function D(){}
var mg="function"==typeof Uint8Array;function F(a,b,c,d,e,f){a.g=null;b||(b=c?[c]:[]);a.M=c?String(c):void 0;a.B=0===c?-1:0;a.A=b;a:{c=a.A.length;b=-1;if(c&&(b=c-1,c=a.A[b],!(null===c||"object"!=typeof c||Array.isArray(c)||mg&&c instanceof Uint8Array))){a.C=b-a.B;a.l=c;break a}-1<d?(a.C=Math.max(d,b+1-a.B),a.l=null):a.C=Number.MAX_VALUE}a.K={};if(e)for(d=0;d<e.length;d++)b=e[d],b<a.C?(b+=a.B,a.A[b]=a.A[b]||ng):(og(a),a.l[b]=a.l[b]||ng);if(f&&f.length)for(d=0;d<f.length;d++)pg(a,f[d])}
var ng=[];function og(a){var b=a.C+a.B;a.A[b]||(a.l=a.A[b]={})}
function qg(a,b){if(b<a.C){var c=b+a.B,d=a.A[c];return d===ng?a.A[c]=[]:d}if(a.l)return d=a.l[b],d===ng?a.l[b]=[]:d}
function rg(a,b){var c=qg(a,b);return null==c?c:!!c}
function G(a,b,c){a=qg(a,b);return null==a?c:a}
function sg(a,b,c){a=rg(a,b);return null==a?c:a}
function H(a,b,c){b<a.C?a.A[b+a.B]=c:(og(a),a.l[b]=c);return a}
function tg(a,b,c){return ug(a,b,c,0)}
function ug(a,b,c,d){c!==d?H(a,b,c):b<a.C?a.A[b+a.B]=null:(og(a),delete a.l[b]);return a}
function vg(a,b,c){qg(a,b).push(c);return a}
function wg(a,b,c,d){(c=pg(a,c))&&c!==b&&void 0!==d&&(a.g&&c in a.g&&(a.g[c]=void 0),H(a,c,void 0));return H(a,b,d)}
function pg(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],g=qg(a,f);null!=g&&(c=f,d=g,H(a,f,void 0))}return c?(H(a,c,d),c):0}
function xg(a,b,c){a.g||(a.g={});if(!a.g[c]){var d=qg(a,c);d&&(a.g[c]=new b(d))}return a.g[c]}
function yg(a,b,c){zg(a,b,c);b=a.g[c];b==ng&&(b=a.g[c]=[]);return b}
function zg(a,b,c){a.g||(a.g={});if(!a.g[c]){for(var d=qg(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.g[c]=e}}
function Ag(a,b,c){a.g||(a.g={});var d=c?c.Kb():c;a.g[b]=c;return H(a,b,d)}
function Bg(a,b,c,d){a.g||(a.g={});var e=d?d.Kb():d;a.g[b]=d;return wg(a,b,c,e)}
function Cg(a,b,c){a.g||(a.g={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].Kb();a.g[b]=c;return H(a,b,d)}
function Dg(a,b,c,d){zg(a,d,b);var e=a.g[b];e||(e=a.g[b]=[]);c=c?c:new d;a=qg(a,b);e.push(c);a.push(c.Kb())}
function Eg(a){if(a.g)for(var b in a.g){var c=a.g[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].Kb();else c&&c.Kb()}}
D.prototype.Kb=function(){Eg(this);return this.A};
D.prototype.j=mg?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return Wf(this)};
try{return JSON.stringify(this.A&&this.Kb(),Fg)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.A&&this.Kb(),Fg)};
function Fg(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)}
D.prototype.toString=function(){Eg(this);return this.A.toString()};
function Gg(a){var b=Hg;og(a);a.g||(a.g={});var c=b.fieldIndex;return b.isRepeated?b.g?(a.g[c]||(a.g[c]=fb(a.l[c]||[],function(d){return new b.g(d)})),a.g[c]):a.l[c]=a.l[c]||[]:b.g?(!a.g[c]&&a.l[c]&&(a.g[c]=new b.g(a.l[c])),a.g[c]):a.l[c]}
D.prototype.clone=function(){return Ig(this)};
function Ig(a){return new a.constructor(Jg(a.Kb()))}
function Jg(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Jg(d):d)}return b}if(mg&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Jg(d):d);return b}
;function Kg(a){F(this,a,0,-1,null,null)}
z(Kg,D);function Lg(a){F(this,a,0,-1,null,null)}
z(Lg,D);Lg.prototype.getSeconds=function(){return G(this,1,0)};
Lg.prototype.setSeconds=function(a){return ug(this,1,a,0)};function Mg(a){F(this,a,0,-1,null,null)}
z(Mg,D);Mg.prototype.getOrigin=function(){return G(this,1,"")};function Ng(a){F(this,a,0,-1,null,null)}
z(Ng,D);function Og(a){F(this,a,0,-1,null,null)}
z(Og,D);Og.prototype.getId=function(){return G(this,1,"")};function Pg(a){F(this,a,0,-1,null,null)}
z(Pg,D);Pg.prototype.getHeight=function(){return G(this,2,0)};function Qg(a){F(this,a,0,-1,null,null)}
z(Qg,D);function Rg(a){F(this,a,0,-1,Sg,null)}
z(Rg,D);var Sg=[1,2];function Tg(a){F(this,a,0,-1,null,null)}
z(Tg,D);function Ug(a){F(this,a,0,-1,null,null)}
z(Ug,D);function Vg(a){F(this,a,0,-1,null,null)}
z(Vg,D);function Wg(a){F(this,a,0,-1,Xg,null)}
z(Wg,D);var Xg=[5,10,22];Wg.prototype.getId=function(){return xg(this,Og,1)};
Wg.prototype.getName=function(){return G(this,2,"")};
function Yg(a){return G(a,3,"")}
Wg.prototype.setDescription=function(a){return ug(this,3,a,"")};
function Zg(a){return yg(a,Pg,10)}
;function $g(a){F(this,a,0,-1,null,null)}
z($g,D);$g.prototype.getHeight=function(){return G(this,2,0)};function ah(a){F(this,a,0,-1,bh,null)}
z(ah,D);var bh=[1,2,3,4];function ch(a,b){vg(a,1,b)}
;function dh(a){F(this,a,0,-1,null,null)}
z(dh,D);function eh(a){F(this,a,0,-1,null,fh)}
z(eh,D);var fh=[[2,3,4]];eh.prototype.getId=function(){return G(this,1,0)};
function gh(a){var b=new eh;return tg(b,1,a)}
;function hh(a){F(this,a,0,-1,null,null)}
z(hh,D);function ih(a){F(this,a,0,-1,jh,null)}
z(ih,D);var jh=[18,28];function kh(){var a=new ih;return tg(a,23,20)}
function lh(a,b){return ug(a,8,b,"")}
ih.prototype.setTitle=function(a){return ug(this,9,a,"")};
function mh(a){var b=new Mg;var c=window.location.origin;c||(c=nh(oh(new ph,window.location.protocol),window.location.host).toString());b=ug(b,1,c,"");b=tg(b,3,2);return Ag(a,20,b)}
;function qh(a){F(this,a,0,-1,rh,null)}
z(qh,D);var rh=[2];qh.prototype.getStatus=function(){return G(this,1,0)};function sh(a){F(this,a,0,-1,null,null)}
z(sh,D);sh.prototype.pg=function(){return G(this,1,"")};function th(a){F(this,a,0,-1,null,null)}
z(th,D);function uh(a){F(this,a,0,-1,vh,null)}
z(uh,D);var vh=[1,3];function wh(a){F(this,a,0,-1,null,null)}
z(wh,D);function xh(a){F(this,a,0,-1,null,null)}
z(xh,D);function yh(a){F(this,a,0,-1,null,null)}
z(yh,D);function zh(a){F(this,a,0,-1,Ah,null)}
z(zh,D);var Ah=[8];function Bh(a){F(this,a,0,-1,Ch,null)}
z(Bh,D);var Ch=[14];Bh.prototype.getName=function(){return G(this,8,"")};
function Dh(a,b){return ug(a,8,b,"")}
;function Eh(a){F(this,a,0,-1,Fh,null)}
z(Eh,D);var Fh=[1];function Gh(a,b){Dg(a,1,b,Bh)}
;function Hh(a){F(this,a,0,-1,Ih,null)}
z(Hh,D);var Ih=[3,7];function Jh(a){F(this,a,0,-1,Kh,null)}
z(Jh,D);var Kh=[4];function Lh(a){F(this,a,"ireq",-1,Mh,null)}
z(Lh,D);var Mh=[2];Lh.messageId="ireq";Lh.prototype.setConfig=function(a){return Ag(this,1,a)};
function Nh(a,b){return Cg(a,2,b)}
;function Oh(a){this.tk=a}
;function Ph(a,b,c){this.A=a;this.j=b;this.g=c||[];this.Xd=new Map}
h=Ph.prototype;h.Yv=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.Xd.set(this.jm(c),[new Oh(a)])};
h.Tk=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.jm(b);return this.Xd.has(b)?this.Xd.get(b):void 0};
h.Wo=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.Tk(b))&&b.length?b[0]:void 0};
h.clear=function(){this.Xd.clear()};
h.jm=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};function Qh(a,b){Ph.call(this,a,3,b)}
ra(Qh,Ph);Qh.prototype.l=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.Wo(c);e&&(d=e.tk);this.Yv(d+a,c)};function I(){this.hc=this.hc;this.hb=this.hb}
I.prototype.hc=!1;I.prototype.Pb=function(){return this.hc};
I.prototype.dispose=function(){this.hc||(this.hc=!0,this.N())};
function Rh(a,b){Sh(a,Ua(Th,b))}
function Sh(a,b,c){a.hc?void 0!==c?b.call(c):b():(a.hb||(a.hb=[]),a.hb.push(void 0!==c?w(b,c):b))}
I.prototype.N=function(){if(this.hb)for(;this.hb.length;)this.hb.shift()()};
function Th(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Uh(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?Uh.apply(null,d):Th(d)}}
;function J(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.j=!1}
J.prototype.stopPropagation=function(){this.j=!0};
J.prototype.preventDefault=function(){this.defaultPrevented=!0};function Vh(a){var b=u("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(b=
a.constructor&&a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:Wh(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
function Xh(a){var b=Error();if(Error.captureStackTrace)Error.captureStackTrace(b,a||Xh),b=String(b.stack);else{try{throw b;}catch(c){b=c}b=(b=b.stack)?String(b):null}b||(b=Yh(a||arguments.callee.caller,[]));return b}
function Yh(a,b){var c=[];if(mb(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(Wh(a)+"(");for(var d=a.arguments,e=0;d&&e<d.length;e++){0<e&&c.push(", ");var f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=Wh(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(Yh(a.caller,b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?
c.push("[...long stack...]"):c.push("[end]");return c.join("")}
function Wh(a){if(Zh[a])return Zh[a];a=String(a);if(!Zh[a]){var b=/function\s+([^\(]+)/m.exec(a);Zh[a]=b?b[1]:"[Anonymous]"}return Zh[a]}
var Zh={};var $h=!C||Kf(9),ai=!C||Kf(9),bi=C&&!Jf("9"),ci=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{p.addEventListener("test",Ja,b),p.removeEventListener("test",Ja,b)}catch(c){}return a}();var di={Rd:"mousedown",Sd:"mouseup",Me:"mousecancel",Jx:"mousemove",Lx:"mouseover",Kx:"mouseout",Hx:"mouseenter",Ix:"mouseleave"};function ei(a,b){J.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.l=!1;this.pointerId=0;this.pointerType="";this.Ba=null;a&&this.init(a,b)}
z(ei,J);var fi=[1,4,2],gi={2:"touch",3:"pen",4:"mouse"};
ei.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?sf&&(mf(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.l=vf?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:gi[a.pointerType]||"";this.state=a.state;this.Ba=
a;a.defaultPrevented&&this.preventDefault()};
function hi(a){return($h?0==a.Ba.button:"click"==a.type?!0:!!(a.Ba.button&fi[0]))&&!(vf&&a.ctrlKey)}
ei.prototype.stopPropagation=function(){ei.J.stopPropagation.call(this);this.Ba.stopPropagation?this.Ba.stopPropagation():this.Ba.cancelBubble=!0};
ei.prototype.preventDefault=function(){ei.J.preventDefault.call(this);var a=this.Ba;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,bi)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ii="closure_listenable_"+(1E6*Math.random()|0);function ji(a){return!(!a||!a[ii])}
var ki=0;function li(a,b,c,d,e){this.listener=a;this.g=null;this.src=b;this.type=c;this.capture=!!d;this.sa=e;this.key=++ki;this.Be=this.Sf=!1}
function mi(a){a.Be=!0;a.listener=null;a.g=null;a.src=null;a.sa=null}
;function ni(a){this.src=a;this.listeners={};this.g=0}
ni.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=oi(a,b,d,e);-1<g?(b=a[g],c||(b.Sf=!1)):(b=new li(b,this.src,f,!!d,e),b.Sf=c,a.push(b));return b};
ni.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=oi(e,b,c,d);return-1<b?(mi(e[b]),rb(e,b),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function pi(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=qb(a.listeners[c],b);d&&(mi(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--));return d}
function qi(a,b){var c=b&&b.toString(),d=0,e;for(e in a.listeners)if(!c||e==c){for(var f=a.listeners[e],g=0;g<f.length;g++)++d,mi(f[g]);delete a.listeners[e];a.g--}}
ni.prototype.bf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=oi(a,b,c,d));return-1<e?a[e]:null};
ni.prototype.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return Pb(this.listeners,function(f){for(var g=0;g<f.length;++g)if(!(c&&f[g].type!=d||e&&f[g].capture!=b))return!0;return!1})};
function oi(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Be&&f.listener==b&&f.capture==!!c&&f.sa==d)return e}return-1}
;var ri="closure_lm_"+(1E6*Math.random()|0),si={},ti=0;function K(a,b,c,d,e){if(d&&d.once)return ui(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)K(a,b[f],c,d,e);return null}c=vi(c);return ji(a)?a.G(b,c,Oa(d)?!!d.capture:!!d,e):wi(a,b,c,!1,d,e)}
function wi(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,k=xi(a);k||(a[ri]=k=new ni(a));c=k.add(b,c,d,g,f);if(c.g)return c;d=yi();c.g=d;d.src=a;d.listener=c;if(a.addEventListener)ci||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(zi(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ti++;return c}
function yi(){var a=Ai,b=ai?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function ui(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)ui(a,b[f],c,d,e);return null}c=vi(c);return ji(a)?a.Xg(b,c,Oa(d)?!!d.capture:!!d,e):wi(a,b,c,!0,d,e)}
function Bi(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Bi(a,b[f],c,d,e);else d=Oa(d)?!!d.capture:!!d,c=vi(c),ji(a)?a.Z(b,c,d,e):a&&(a=xi(a))&&(b=a.bf(b,c,d,e))&&Ci(b)}
function Ci(a){if("number"===typeof a||!a||a.Be)return!1;var b=a.src;if(ji(b))return pi(b.Mb,a);var c=a.type,d=a.g;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(zi(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ti--;(c=xi(b))?(pi(c,a),0==c.g&&(c.src=null,b[ri]=null)):mi(a);return!0}
function Di(a,b){if(a)if(ji(a))a.Mb&&qi(a.Mb,b);else{var c=xi(a);if(c){var d=0,e=b&&b.toString(),f;for(f in c.listeners)if(!e||f==e)for(var g=c.listeners[f].concat(),k=0;k<g.length;++k)Ci(g[k])&&++d}}}
function zi(a){return a in si?si[a]:si[a]="on"+a}
function Ei(a,b,c,d){var e=!0;if(a=xi(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Be&&(f=Fi(f,d),e=e&&!1!==f)}return e}
function Fi(a,b){var c=a.listener,d=a.sa||a.src;a.Sf&&Ci(a);return c.call(d,b)}
function Ai(a,b){if(a.Be)return!0;if(!ai){var c=b||u("window.event"),d=new ei(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.j&&0<=g;g--){d.currentTarget=c[g];var k=Ei(c[g],f,!0,d);e=e&&k}for(g=0;!d.j&&g<c.length;g++)d.currentTarget=c[g],k=Ei(c[g],f,!1,d),e=e&&k}return e}return Fi(a,new ei(b,this))}
function xi(a){a=a[ri];return a instanceof ni?a:null}
var Gi="__closure_events_fn_"+(1E9*Math.random()>>>0);function vi(a){if(Na(a))return a;a[Gi]||(a[Gi]=function(b){return a.handleEvent(b)});
return a[Gi]}
;function L(){I.call(this);this.Mb=new ni(this);this.bo=this;this.sj=null}
z(L,I);L.prototype[ii]=!0;h=L.prototype;h.kg=function(){return this.sj};
h.Jb=function(a){this.sj=a};
h.addEventListener=function(a,b,c,d){K(this,a,b,c,d)};
h.removeEventListener=function(a,b,c,d){Bi(this,a,b,c,d)};
h.dispatchEvent=function(a){var b=this.kg();if(b){var c=[];for(var d=1;b;b=b.kg())c.push(b),++d}b=this.bo;d=a.type||a;if("string"===typeof a)a=new J(a,b);else if(a instanceof J)a.target=a.target||b;else{var e=a;a=new J(d,b);ec(a,e)}e=!0;if(c)for(var f=c.length-1;!a.j&&0<=f;f--){var g=a.currentTarget=c[f];e=Hi(g,d,!0,a)&&e}a.j||(g=a.currentTarget=b,e=Hi(g,d,!0,a)&&e,a.j||(e=Hi(g,d,!1,a)&&e));if(c)for(f=0;!a.j&&f<c.length;f++)g=a.currentTarget=c[f],e=Hi(g,d,!1,a)&&e;return e};
h.N=function(){L.J.N.call(this);this.Mb&&qi(this.Mb,void 0);this.sj=null};
h.G=function(a,b,c,d){return this.Mb.add(String(a),b,!1,c,d)};
h.Xg=function(a,b,c,d){return this.Mb.add(String(a),b,!0,c,d)};
h.Z=function(a,b,c,d){return this.Mb.remove(String(a),b,c,d)};
function Hi(a,b,c,d){b=a.Mb.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Be&&g.capture==c){var k=g.listener,l=g.sa||g.src;g.Sf&&pi(a.Mb,g);e=!1!==k.call(l,d)&&e}}return e&&!d.defaultPrevented}
h.bf=function(a,b,c,d){return this.Mb.bf(String(a),b,c,d)};
h.hasListener=function(a,b){return this.Mb.hasListener(void 0!==a?String(a):void 0,b)};function Ii(a,b){this.l=a;this.A=b;this.j=0;this.g=null}
Ii.prototype.get=function(){if(0<this.j){this.j--;var a=this.g;this.g=a.next;a.next=null}else a=this.l();return a};
function Ji(a,b){a.A(b);100>a.j&&(a.j++,b.next=a.g,a.g=b)}
;var Ki;a:{try{Ki=!!(new self.OffscreenCanvas(0,0)).getContext("2d");break a}catch(a){}Ki=!1}var Li=Ki,Mi=!C||Kf(9),Ni=!sf&&!C||C&&Kf(9)||sf&&Jf("1.9.1"),Oi=C&&!Jf("9"),Pi=C||pf||tf;function Qi(a,b){return a+Math.random()*(b-a)}
function Ri(a,b,c){return Math.min(Math.max(a,b),c)}
function Si(a,b,c){return a+c*(b-a)}
;function Ti(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
h=Ti.prototype;h.clone=function(){return new Ti(this.x,this.y)};
h.equals=function(a){return a instanceof Ti&&Ui(this,a)};
function Ui(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1}
function Vi(a,b){return new Ti(a.x-b.x,a.y-b.y)}
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Wi(a,b){this.width=a;this.height=b}
h=Wi.prototype;h.clone=function(){return new Wi(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
function Xi(a,b){return a.width<=b.width&&a.height<=b.height}
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
function Yi(a,b){var c=a.aspectRatio()>b.aspectRatio()?b.width/a.width:b.height/a.height;a.width*=c;a.height*=c;return a}
;function Zi(a){return a?new $i(aj(a)):Za||(Za=new $i)}
function M(a){return bj(document,a)}
function bj(a,b){return"string"===typeof b?a.getElementById(b):b}
function cj(a,b){return(b||document).getElementsByTagName(String(a))}
function dj(a,b,c){return ej(document,a,b,c)}
function fj(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):ej(document,"*",a,b)}
function N(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:d=gj("*",a,b);return d||null}
function ej(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&mb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function gj(a,b,c){var d=document,e=c||d,f=a&&"*"!=a?String(a).toUpperCase():"";return e.querySelectorAll&&e.querySelector&&(f||b)?e.querySelector(f+(b?"."+b:"")):ej(d,a,b,c)[0]||null}
function hj(a,b){Nb(b,function(c,d){c&&"object"==typeof c&&c.mc&&(c=c.Nb());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:ij.hasOwnProperty(d)?a.setAttribute(ij[d],c):Fc(d,"aria-")||Fc(d,"data-")?a.setAttribute(d,c):a[d]=c})}
var ij={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function jj(a){return kj(a||window)}
function kj(a){a=a.document;a=lj(a)?a.documentElement:a.body;return new Wi(a.clientWidth,a.clientHeight)}
function mj(a){var b=nj(a);a=a.parentWindow||a.defaultView;return C&&Jf("10")&&a.pageYOffset!=b.scrollTop?new Ti(b.scrollLeft,b.scrollTop):new Ti(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function nj(a){return a.scrollingElement?a.scrollingElement:!tf&&lj(a)?a.documentElement:a.body||a.documentElement}
function oj(a){return a?a.parentWindow||a.defaultView:window}
function pj(a,b,c){return qj(document,arguments)}
function qj(a,b){var c=String(b[0]),d=b[1];if(!Mi&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',le(d.name),'"');if(d.type){c.push(' type="',le(d.type),'"');var e={};ec(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=rj(a,c);d&&("string"===typeof d?c.className=d:Array.isArray(d)?c.className=d.join(" "):hj(c,d));2<b.length&&sj(a,c,b,2);return c}
function sj(a,b,c,d){function e(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(;d<c.length;d++){var f=c[d];!Ma(f)||Oa(f)&&0<f.nodeType?e(f):A(tj(f)?tb(f):f,e)}}
function uj(a){return rj(document,a)}
function rj(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function vj(a){var b=document,c=rj(b,"DIV");C?(a=Vd(Xd,a),ae(c,a),c.removeChild(c.firstChild)):ae(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(b=b.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);c=b}return c}
function lj(a){return"CSS1Compat"==a.compatMode}
function wj(a,b){sj(aj(a),a,arguments,1)}
function xj(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function yj(a,b){b.parentNode&&b.parentNode.insertBefore(a,b)}
function zj(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)}
function Aj(a,b){a.insertBefore(b,a.childNodes[0]||null)}
function Bj(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function Cj(a){return Ni&&void 0!=a.children?a.children:eb(a.childNodes,function(b){return 1==b.nodeType})}
function Dj(a){return void 0!==a.firstElementChild?a.firstElementChild:Ej(a.firstChild,!0)}
function Fj(a){return void 0!==a.nextElementSibling?a.nextElementSibling:Ej(a.nextSibling,!0)}
function Ej(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}
function Gj(a){return Oa(a)&&1==a.nodeType}
function Hj(a){var b;if(Pi&&!(C&&Jf("9")&&!Jf("10")&&p.SVGElement&&a instanceof p.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return Gj(b)?b:null}
function Ij(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function aj(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Jj(a){return a.contentDocument||a.contentWindow.document}
function Kj(a){try{return a.contentWindow||(a.contentDocument?oj(a.contentDocument):null)}catch(b){}return null}
function Lj(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{xj(a);var c=aj(a);a.appendChild(c.createTextNode(String(b)))}}
function Mj(a,b){var c=[];return Nj(a,b,c,!0)?c[0]:void 0}
function Nj(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Nj(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Oj={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Pj={IMG:" ",BR:"\n"};function Qj(a){return Rj(a)&&Sj(a)}
function Tj(a,b){b?a.tabIndex=0:(a.tabIndex=-1,a.removeAttribute("tabIndex"))}
function Uj(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Rj(a)||Sj(a)):Qj(a))&&C){var c;!Na(a.getBoundingClientRect)||C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Rj(a){return C&&!Jf("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Sj(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function Vj(a){if(Oi&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Wj(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Oi||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Xj(a){var b=[];Wj(a,b,!1);return b.join("")}
function Wj(a,b,c){if(!(a.nodeName in Oj))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Pj)b.push(Pj[a.nodeName]);else for(a=a.firstChild;a;)Wj(a,b,c),a=a.nextSibling}
function tj(a){if(a&&"number"==typeof a.length){if(Oa(a))return"function"==typeof a.item||"string"==typeof a.item;if(Na(a))return"function"==typeof a.item}return!1}
function Yj(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Zj(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&mb(f.className.split(/\s+/),c))},!0,d)}
function ak(a,b){return Yj(a,null,b,void 0)}
function Zj(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function bk(a){try{var b=a&&a.activeElement;return b&&b.nodeName?b:null}catch(c){return null}}
function $i(a){this.g=a||p.document||document}
h=$i.prototype;h.H=function(a){return bj(this.g,a)};
h.getElementsByTagName=function(a,b){return(b||this.g).getElementsByTagName(String(a))};
h.cw=hj;h.W=function(a,b,c){return qj(this.g,arguments)};
h.createElement=function(a){return rj(this.g,a)};
function ck(a){a=a.g;return a.parentWindow||a.defaultView}
h.appendChild=function(a,b){a.appendChild(b)};
h.append=wj;h.pp=xj;h.pf=zj;h.md=Bj;h.np=Cj;h.isElement=Gj;h.contains=Ij;function dk(a){p.setTimeout(function(){throw a;},0)}
function ek(a,b){var c=a;b&&(c=w(a,b));c=fk(c);!Na(p.setImmediate)||p.Window&&p.Window.prototype&&!Ad("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(gk||(gk=hk()),gk(c)):p.setImmediate(c)}
var gk;function hk(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Ad("Presto")&&(a=function(){var e=uj("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=w(function(l){if(("*"==k||l.origin==k)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&!Ad("Trident")&&!Ad("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.sk;c.sk=null;e()}};
return function(e){d.next={sk:e};d=d.next;b.port2.postMessage(0)}}return function(e){p.setTimeout(e,0)}}
var fk=Kb;function ik(){this.j=this.g=null}
var kk=new Ii(function(){return new jk},function(a){a.reset()});
ik.prototype.add=function(a,b){var c=kk.get();c.set(a,b);this.j?this.j.next=c:this.g=c;this.j=c};
ik.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.j=null),a.next=null);return a};
function jk(){this.next=this.scope=this.lb=null}
jk.prototype.set=function(a,b){this.lb=a;this.scope=b;this.next=null};
jk.prototype.reset=function(){this.next=this.scope=this.lb=null};function lk(a,b){mk||nk();ok||(mk(),ok=!0);pk.add(a,b)}
var mk;function nk(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);mk=function(){a.then(qk)}}else mk=function(){ek(qk)}}
var ok=!1,pk=new ik;function qk(){for(var a;a=pk.remove();){try{a.lb.call(a.scope)}catch(b){dk(b)}Ji(kk,a)}ok=!1}
;function rk(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function sk(a,b){this.g=0;this.F=void 0;this.A=this.j=this.l=null;this.B=this.C=!1;if(a!=Ja)try{var c=this;a.call(b,function(d){tk(c,2,d)},function(d){tk(c,3,d)})}catch(d){tk(this,3,d)}}
function uk(){this.next=this.context=this.onRejected=this.l=this.g=null;this.j=!1}
uk.prototype.reset=function(){this.context=this.onRejected=this.l=this.g=null;this.j=!1};
var vk=new Ii(function(){return new uk},function(a){a.reset()});
function wk(a,b,c){var d=vk.get();d.l=a;d.onRejected=b;d.context=c;return d}
function xk(a){if(a instanceof sk)return a;var b=new sk(Ja);tk(b,2,a);return b}
function yk(a){return new sk(function(b,c){c(a)})}
function zk(a,b,c){Ak(a,b,c,null)||lk(Ua(b,a))}
function Bk(a){return new sk(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],zk(e,b,c)})}
function Ck(a){return new sk(function(b,c){var d=a.length,e=[];if(d)for(var f=function(m,n){d--;e[m]=n;0==d&&b(e)},g=function(m){c(m)},k=0,l;k<a.length;k++)l=a[k],zk(l,Ua(f,k),g);
else b(e)})}
function Dk(a){return new sk(function(b,c){var d=a.length,e=[];if(d)for(var f=function(m){b(m)},g=function(m,n){d--;
e[m]=n;0==d&&c(e)},k=0,l;k<a.length;k++)l=a[k],zk(l,f,Ua(g,k));
else b(void 0)})}
function Ek(){var a,b,c=new sk(function(d,e){a=d;b=e});
return new Fk(c,a,b)}
sk.prototype.then=function(a,b,c){return Gk(this,Na(a)?a:null,Na(b)?b:null,c)};
sk.prototype.$goog_Thenable=!0;function Hk(a,b){var c=wk(b,b,void 0);c.j=!0;Ik(a,c);return a}
function Jk(a,b){return Gk(a,null,b,void 0)}
sk.prototype.cancel=function(a){if(0==this.g){var b=new Kk(a);lk(function(){Lk(this,b)},this)}};
function Lk(a,b){if(0==a.g)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.j||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Lk(c,b):(f?(d=f,d.next==c.A&&(c.A=d),d.next=d.next.next):Mk(c),Nk(c,e,3,b)))}a.l=null}else tk(a,3,b)}
function Ik(a,b){a.j||2!=a.g&&3!=a.g||Ok(a);a.A?a.A.next=b:a.j=b;a.A=b}
function Gk(a,b,c,d){var e=wk(null,null,null);e.g=new sk(function(f,g){e.l=b?function(k){try{var l=b.call(d,k);f(l)}catch(m){g(m)}}:f;
e.onRejected=c?function(k){try{var l=c.call(d,k);void 0===l&&k instanceof Kk?g(k):f(l)}catch(m){g(m)}}:g});
e.g.l=a;Ik(a,e);return e.g}
sk.prototype.L=function(a){this.g=0;tk(this,2,a)};
sk.prototype.K=function(a){this.g=0;tk(this,3,a)};
function tk(a,b,c){0==a.g&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.g=1,Ak(c,a.L,a.K,a)||(a.F=c,a.g=b,a.l=null,Ok(a),3!=b||c instanceof Kk||Pk(a,c)))}
function Ak(a,b,c,d){if(a instanceof sk)return Ik(a,wk(b||Ja,c||null,d)),!0;if(rk(a))return a.then(b,c,d),!0;if(Oa(a))try{var e=a.then;if(Na(e))return Qk(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Qk(a,b,c,d,e){function f(l){k||(k=!0,d.call(e,l))}
function g(l){k||(k=!0,c.call(e,l))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Ok(a){a.C||(a.C=!0,lk(a.D,a))}
function Mk(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.A=null);return b}
sk.prototype.D=function(){for(var a;a=Mk(this);)Nk(this,a,this.g,this.F);this.C=!1};
function Nk(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.B;a=a.l)a.B=!1;if(b.g)b.g.l=null,Rk(b,c,d);else try{b.j?b.l.call(b.context):Rk(b,c,d)}catch(e){Sk.call(null,e)}Ji(vk,b)}
function Rk(a,b,c){2==b?a.l.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Pk(a,b){a.B=!0;lk(function(){a.B&&Sk.call(null,b)})}
var Sk=dk;function Kk(a){Ya.call(this,a)}
z(Kk,Ya);Kk.prototype.name="cancel";function Fk(a,b,c){this.g=a;this.resolve=b;this.reject=c}
;function Tk(a,b){L.call(this);this.g=a||1;this.j=b||p;this.l=w(this.kp,this);this.A=x()}
z(Tk,L);h=Tk.prototype;h.enabled=!1;h.ea=null;h.setInterval=function(a){this.g=a;this.ea&&this.enabled?(this.stop(),this.start()):this.ea&&this.stop()};
h.kp=function(){if(this.enabled){var a=x()-this.A;0<a&&a<.8*this.g?this.ea=this.j.setTimeout(this.l,this.g-a):(this.ea&&(this.j.clearTimeout(this.ea),this.ea=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
h.start=function(){this.enabled=!0;this.ea||(this.ea=this.j.setTimeout(this.l,this.g),this.A=x())};
h.stop=function(){this.enabled=!1;this.ea&&(this.j.clearTimeout(this.ea),this.ea=null)};
h.N=function(){Tk.J.N.call(this);this.stop();delete this.j};
function Uk(a,b,c){if(Na(a))c&&(a=w(a,c));else if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:p.setTimeout(a,b||0)}
function Vk(a){p.clearTimeout(a)}
function Wk(a,b){var c=null;return Jk(new sk(function(d,e){c=Uk(function(){d(b)},a);
-1==c&&e(Error("Failed to schedule timer."))}),function(d){Vk(c);
throw d;})}
;function Xk(){this.K=new Yk;this.l=new Map;this.D=new Set;this.B=0;this.C=100;this.flushInterval=3E4;this.g=new Tk(this.flushInterval);this.g.G("tick",this.F,!1,this)}
Xk.prototype.F=function(){var a=this.l.values();a=[].concat(ka(a)).filter(function(b){return b.Xd.size});
a.length&&this.K.flush(a);Zk(a);this.B=0;this.g.enabled&&this.g.stop()};
Xk.prototype.j=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.l.has(a)||this.l.set(a,new Qh(a,c))};
Xk.prototype.A=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.L.apply(this,[a,1].concat(ka(c)))};
Xk.prototype.L=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=this.D.has(a)?void 0:this.l.get(a))&&e instanceof Qh&&(e.l(b,d),this.g.enabled||this.g.start(),this.B++,this.B>=this.C&&this.F())};
function Zk(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function $k(){this.g=al();this.g.j("/client_streamz/youtube/web/network/one_platform_requests",{ld:3,kd:"request_url"})}
function bl(){this.g=al();this.g.j("/client_streamz/youtube/web/network/one_platform_redirects",{ld:2,kd:"response_code"},{ld:3,kd:"request_url"},{ld:3,kd:"response_url"})}
function cl(a,b,c,d){a.g.A("/client_streamz/youtube/web/network/one_platform_redirects",b,c,d)}
function dl(){this.g=al();this.g.j("/client_streamz/youtube/web/network/one_platform_request_success",{ld:3,kd:"request_url"})}
function el(){this.g=al();this.g.j("/client_streamz/youtube/web/network/one_platform_request_failed",{ld:2,kd:"response_code"},{ld:3,kd:"request_url"})}
;var fl=window;function gl(a){this.j=a;this.g=null}
function hl(a,b){this.name=a;this.value=b}
hl.prototype.toString=function(){return this.name};
var il=new hl("OFF",Infinity),jl=new hl("SHOUT",1200),kl=new hl("SEVERE",1E3),ll=new hl("WARNING",900),ml=new hl("INFO",800),nl=[il,jl,kl,ll,ml,new hl("CONFIG",700),new hl("FINE",500),new hl("FINER",400),new hl("FINEST",300),new hl("ALL",0)],ol=null;function pl(){if(!ol){ol={};for(var a=0,b;b=nl[a];a++)ol[b.value]=b,ol[b.name]=b}}
h=gl.prototype;h.getName=function(){return this.j};
h.log=function(){};
h.warning=function(){};
h.info=function(){};
h.config=function(){};
var ql={},rl=null;function sl(){rl||(rl=new gl(""),ql[""]=rl)}
function tl(a){sl();var b;if(!(b=ql[a])){b=new gl(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=tl(a.substr(0,c));c.g||(c.g={});c.g[d]=b;ql[a]=b}return b}
;function ul(){}
function vl(){}
;function wl(a){this.g=a||{cookie:""}}
h=wl.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.By;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var k=c.em}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===k&&(k=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";k=0>k?"":0==k?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*k)).toUTCString();this.g.cookie=a+"="+b+c+g+k+d+(null!=e?";samesite="+e:
"")};
h.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Jc(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{em:0,path:b,domain:c});return d};
h.Ga=function(){return xl(this).keys};
h.ia=function(){return xl(this).values};
h.isEmpty=function(){return!this.g.cookie};
h.ha=function(){return this.g.cookie?(this.g.cookie||"").split(";").length:0};
h.Lc=function(a){for(var b=xl(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
h.clear=function(){for(var a=xl(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function xl(a){a=(a.g.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Jc(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var yl=new wl("undefined"==typeof document?null:document);var zl={Yj:["BC","AD"],Rn:["Before Christ","Anno Domini"],Sn:"JFMAMJJASOND".split(""),Un:"JFMAMJJASOND".split(""),Jf:"January February March April May June July August September October November December".split(" "),Td:"January February March April May June July August September October November December".split(" "),Kf:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Gh:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ih:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
bk:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Fh:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Hh:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Mx:"SMTWTFS".split(""),Vn:"SMTWTFS".split(""),ak:["Q1","Q2","Q3","Q4"],Zj:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Eh:["AM","PM"],Ic:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],Lf:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Xj:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],Ke:6,Jh:[5,6],Le:5},Al=zl;
Al=zl;var Bl=/^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/,Cl=/^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/,Dl=/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;function El(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31}
function Fl(a,b,c,d,e){a=new Date(a,b,c);e=e||0;return a.valueOf()+864E5*(((void 0!==d?d:3)-e+7)%7-((a.getDay()+6)%7-e+7)%7)}
function Gl(a,b,c,d,e,f){"string"===typeof a?(this.g="y"==a?b:0,this.months="m"==a?b:0,this.days="d"==a?b:0,this.hours="h"==a?b:0,this.minutes="n"==a?b:0,this.seconds="s"==a?b:0):(this.g=a||0,this.months=b||0,this.days=c||0,this.hours=d||0,this.minutes=e||0,this.seconds=f||0)}
h=Gl.prototype;
h.Nd=function(a){var b=Math.min(this.g,this.months,this.days,this.hours,this.minutes,this.seconds),c=Math.max(this.g,this.months,this.days,this.hours,this.minutes,this.seconds);if(0>b&&0<c)return null;if(!a&&0==b&&0==c)return"PT0S";c=[];0>b&&c.push("-");c.push("P");(this.g||a)&&c.push(Math.abs(this.g)+"Y");(this.months||a)&&c.push(Math.abs(this.months)+"M");(this.days||a)&&c.push(Math.abs(this.days)+"D");if(this.hours||this.minutes||this.seconds||a)c.push("T"),(this.hours||a)&&c.push(Math.abs(this.hours)+"H"),
(this.minutes||a)&&c.push(Math.abs(this.minutes)+"M"),(this.seconds||a)&&c.push(Math.abs(this.seconds)+"S");return c.join("")};
h.equals=function(a){return a.g==this.g&&a.months==this.months&&a.days==this.days&&a.hours==this.hours&&a.minutes==this.minutes&&a.seconds==this.seconds};
h.clone=function(){return new Gl(this.g,this.months,this.days,this.hours,this.minutes,this.seconds)};
h.times=function(a){return new Gl(this.g*a,this.months*a,this.days*a,this.hours*a,this.minutes*a,this.seconds*a)};
h.add=function(a){this.g+=a.g;this.months+=a.months;this.days+=a.days;this.hours+=a.hours;this.minutes+=a.minutes;this.seconds+=a.seconds};
function Hl(a,b,c){"number"===typeof a?(this.date=Il(a,b||0,c||1),Jl(this,c||1)):Oa(a)?(this.date=Il(a.getFullYear(),a.getMonth(),a.getDate()),Jl(this,a.getDate())):(this.date=new Date(x()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Jl(this,a))}
function Il(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
h=Hl.prototype;h.Mc=Al.Ke;h.Ze=Al.Le;h.clone=function(){var a=new Hl(this.date);a.Mc=this.Mc;a.Ze=this.Ze;return a};
h.getFullYear=function(){return this.date.getFullYear()};
h.getYear=function(){return this.getFullYear()};
h.getMonth=function(){return this.date.getMonth()};
h.getDate=function(){return this.date.getDate()};
h.getTime=function(){return this.date.getTime()};
h.getDay=function(){return this.date.getDay()};
h.getUTCFullYear=function(){return this.date.getUTCFullYear()};
h.getUTCMonth=function(){return this.date.getUTCMonth()};
h.getUTCDate=function(){return this.date.getUTCDate()};
h.getUTCDay=function(){return this.date.getDay()};
h.getUTCHours=function(){return this.date.getUTCHours()};
h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
h.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
h.setFullYear=function(a){this.date.setFullYear(a)};
h.setYear=function(a){this.setFullYear(a)};
h.setMonth=function(a){this.date.setMonth(a)};
h.setDate=function(a){this.date.setDate(a)};
h.setTime=function(a){this.date.setTime(a)};
h.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
h.setUTCMonth=function(a){this.date.setUTCMonth(a)};
h.setUTCDate=function(a){this.date.setUTCDate(a)};
h.add=function(a){if(a.g||a.months){var b=this.getMonth()+a.months+12*a.g,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);var d=Math.min(El(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),Jl(this,a.getDate()))};
h.Nd=function(a){return[this.getFullYear(),se(this.getMonth()+1,2),se(this.getDate(),2)].join(a?"-":"")+""};
h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
h.toString=function(){return this.Nd()};
function Jl(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}}
h.valueOf=function(){return this.date.valueOf()};
function Kl(a,b){return a.getTime()-b.getTime()}
function Ll(a,b,c,d,e,f,g){this.date="number"===typeof a?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():x())}
z(Ll,Hl);h=Ll.prototype;h.getHours=function(){return this.date.getHours()};
h.getMinutes=function(){return this.date.getMinutes()};
h.getSeconds=function(){return this.date.getSeconds()};
h.getMilliseconds=function(){return this.date.getMilliseconds()};
h.getUTCDay=function(){return this.date.getUTCDay()};
h.getUTCHours=function(){return this.date.getUTCHours()};
h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
h.getUTCSeconds=function(){return this.date.getUTCSeconds()};
h.getUTCMilliseconds=function(){return this.date.getUTCMilliseconds()};
h.setHours=function(a){this.date.setHours(a)};
h.setMinutes=function(a){this.date.setMinutes(a)};
h.setSeconds=function(a){this.date.setSeconds(a)};
h.setMilliseconds=function(a){this.date.setMilliseconds(a)};
h.setUTCHours=function(a){this.date.setUTCHours(a)};
h.setUTCMinutes=function(a){this.date.setUTCMinutes(a)};
h.setUTCSeconds=function(a){this.date.setUTCSeconds(a)};
h.setUTCMilliseconds=function(a){this.date.setUTCMilliseconds(a)};
h.add=function(a){Hl.prototype.add.call(this,a);a.hours&&this.setUTCHours(this.date.getUTCHours()+a.hours);a.minutes&&this.setUTCMinutes(this.date.getUTCMinutes()+a.minutes);a.seconds&&this.setUTCSeconds(this.date.getUTCSeconds()+a.seconds)};
h.Nd=function(a){var b=Hl.prototype.Nd.call(this,a);return a?b+"T"+se(this.getHours(),2)+":"+se(this.getMinutes(),2)+":"+se(this.getSeconds(),2):b+"T"+se(this.getHours(),2)+se(this.getMinutes(),2)+se(this.getSeconds(),2)};
h.equals=function(a){return this.getTime()==a.getTime()};
h.toString=function(){return this.Nd()};
h.clone=function(){var a=new Ll(this.date);a.Mc=this.Mc;a.Ze=this.Ze;return a};
function Ml(a){var b=new Ll(2E3);a=Jc(a);a=a.split(-1==a.indexOf("T")?" ":"T");var c=a[0].match(Bl);if(c){var d=Number(c[2]),e=Number(c[3]),f=Number(c[4]);var g=Number(c[5]);var k=Number(c[6])||1;b.setFullYear(Number(c[1]));f?(b.setDate(1),b.setMonth(0),b.add(new Gl("d",f-1))):g?(b.setMonth(0),b.setDate(1),c=b.getDay()||7,b.add(new Gl("d",(4>=c?1-c:8-c)+(Number(k)+7*(Number(g)-1))-1))):(d&&(b.setDate(1),b.setMonth(d-1)),e&&b.setDate(e));g=!0}else g=!1;if(g&&!(g=2>a.length)){a=a[1];g=a.match(Dl);if(g)if(a=
a.substring(0,a.length-g[0].length),"Z"===g[0])var l=0;else l=60*Number(g[2])+Number(g[3]),l*="-"==g[1]?1:-1;(a=a.match(Cl))?(g?(g=b.getYear(),k=b.getMonth(),c=b.getDate(),b.setTime(Date.UTC(g,k,c,Number(a[1]),Number(a[2])||0,Number(a[3])||0,a[4]?1E3*Number(a[4]):0)+6E4*l)):(b.setHours(Number(a[1])),b.setMinutes(Number(a[2])||0),b.setSeconds(Number(a[3])||0),b.setMilliseconds(a[4]?1E3*Number(a[4]):0)),g=!0):g=!1}return g?b:null}
;function Nl(a){Ol();return Ld(a,null)}
function Pl(a){Ol();return Bc(a)}
var Ol=Ja;function Ql(){return Ad("iPad")||Ad("Android")&&!Ad("Mobile")||Ad("Silk")}
;function Rl(a){var b=Sl;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Tl(){var a=[];Rl(function(b){a.push(b)});
return a}
var Sl={Sw:"allow-forms",Tw:"allow-modals",Uw:"allow-orientation-lock",Vw:"allow-pointer-lock",Ww:"allow-popups",Xw:"allow-popups-to-escape-sandbox",Yw:"allow-presentation",Zw:"allow-same-origin",ax:"allow-scripts",bx:"allow-top-navigation",ex:"allow-top-navigation-by-user-activation"},Ul=Mb(function(){return Tl()});
function Vl(){var a=uj("IFRAME"),b={};A(Ul(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Wl(){this.j=0;this.g=[]}
h=Wl.prototype;h.add=function(a){var b=this.g[this.j];this.g[this.j]=a;this.j=(this.j+1)%500;return b};
h.get=function(a){a=Xl(this,a);return this.g[a]};
h.set=function(a,b){a=Xl(this,a);this.g[a]=b};
h.ha=function(){return this.g.length};
h.isEmpty=function(){return 0==this.g.length};
h.clear=function(){this.j=this.g.length=0};
h.ia=function(){var a=this.ha(),b=this.ha(),c=[];for(a=this.ha()-a;a<b;a++)c.push(this.get(a));return c};
h.Ga=function(){for(var a=[],b=this.ha(),c=0;c<b;c++)a[c]=c;return a};
h.Lc=function(a){for(var b=this.ha(),c=0;c<b;c++)if(this.get(c)==a)return!0;return!1};
function Xl(a,b){if(b>=a.g.length)throw Error("Out of bounds exception");return 500>a.g.length?b:(a.j+Number(b))%500}
;function Yl(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
h=Yl.prototype;h.getHeight=function(){return this.bottom-this.top};
h.clone=function(){return new Yl(this.top,this.right,this.bottom,this.left)};
h.contains=function(a){return Zl(this,a)};
h.expand=function(a,b,c,d){Oa(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};
function Zl(a,b){return a&&b?b instanceof Yl?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1}
function $l(a,b){return a.left<=b.right&&b.left<=a.right&&a.top<=b.bottom&&b.top<=a.bottom}
h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function am(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
h=am.prototype;h.clone=function(){return new am(this.left,this.top,this.width,this.height)};
h.contains=function(a){return a instanceof Ti?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function bm(a,b,c){if("string"===typeof b)(b=cm(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=cm(c,d);f&&(c.style[f]=e)}}
var dm={};function cm(a,b){var c=dm[b];if(!c){var d=ve(b);c=d;void 0===a.style[d]&&(d=(tf?"Webkit":sf?"Moz":C?"ms":pf?"O":null)+xe(d),void 0!==a.style[d]&&(c=d));dm[b]=c}return c}
function em(a,b){var c=aj(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function fm(a,b){return em(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function gm(a){return fm(a,"position")}
function hm(a,b,c){if(b instanceof Ti){var d=b.x;b=b.y}else d=b,b=c;a.style.left=im(d,!1);a.style.top=im(b,!1)}
function jm(a){return new Ti(a.offsetLeft,a.offsetTop)}
function km(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}}
function lm(a){if(C&&!Kf(8))return a.offsetParent;var b=aj(a),c=fm(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=fm(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function mm(a){for(var b=new Yl(0,Infinity,Infinity,0),c=Zi(a),d=c.g.body,e=c.g.documentElement,f=nj(c.g);a=lm(a);)if(!(C&&0==a.clientWidth||tf&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=fm(a,"overflow")){var g=nm(a),k=new Ti(a.clientLeft,a.clientTop);g.x+=k.x;g.y+=k.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);
c=jj(ck(c));b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function om(a,b,c){var d=b||nj(document),e=nm(a),f=nm(d),g=pm(d);d==nj(document)?(b=e.x-d.scrollLeft,e=e.y-d.scrollTop,C&&!Kf(10)&&(b+=g.left,e+=g.top)):(b=e.x-f.x-g.left,e=e.y-f.y-g.top);g=qm(a);a=d.clientWidth-g.width;g=d.clientHeight-g.height;f=d.scrollLeft;d=d.scrollTop;c?(f+=b-a/2,d+=e-g/2):(f+=Math.min(b,Math.max(b-a,0)),d+=Math.min(e,Math.max(e-g,0)));return new Ti(f,d)}
function rm(a,b){var c=b||nj(document),d=om(a,c,void 0);c.scrollLeft=d.x;c.scrollTop=d.y}
function nm(a){var b=aj(a),c=new Ti(0,0);var d=b?aj(b):document;d=!C||Kf(9)||lj(Zi(d).g)?d.documentElement:d.body;if(a==d)return c;a=km(a);b=mj(Zi(b).g);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function sm(a,b){var c=tm(a),d=tm(b);return new Ti(c.x-d.x,c.y-d.y)}
function um(a){a=km(a);return new Ti(a.left,a.top)}
function tm(a){if(1==a.nodeType)return um(a);a=a.changedTouches?a.changedTouches[0]:a;return new Ti(a.clientX,a.clientY)}
function vm(a,b,c){if(b instanceof Wi)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");wm(a,b);a.style.height=im(c,!0)}
function im(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function wm(a,b){a.style.width=im(b,!0)}
function xm(a){var b=qm;if("none"!=fm(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function qm(a){var b=a.offsetWidth,c=a.offsetHeight,d=tf&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=km(a),new Wi(a.right-a.left,a.bottom-a.top)):new Wi(b,c)}
function ym(a){var b=nm(a);a=xm(a);return new am(b.x,b.y,a.width,a.height)}
function zm(a,b){var c=a.style;"opacity"in c?c.opacity=b:"MozOpacity"in c?c.MozOpacity=b:"filter"in c&&(c.filter=""===b?"":"alpha(opacity="+100*Number(b)+")")}
function Cm(a,b){a.style.display=b?"":"none"}
function Dm(a){return"none"!=a.style.display}
function Em(a){var b=td(Fm);C&&void 0!==a.cssText?a.cssText=b:p.trustedTypes?Lj(a,b):a.innerHTML=b}
function Gm(a){return"rtl"==fm(a,"direction")}
var Hm=sf?"MozUserSelect":tf||qf?"WebkitUserSelect":null;function Im(a,b){var c=b?null:a.getElementsByTagName("*");if(Hm){var d="none";a.style&&(a.style[Hm]=d);if(c)for(var e=0,f;f=c[e];e++)f.style&&(f.style[Hm]=d)}else if(C||pf)if(d="on",a.setAttribute("unselectable",d),c)for(e=0;f=c[e];e++)f.setAttribute("unselectable",d)}
function Jm(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Km(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Jm(a,c):0}
function Lm(a,b){if(C){var c=Km(a,b+"Left"),d=Km(a,b+"Right"),e=Km(a,b+"Top"),f=Km(a,b+"Bottom");return new Yl(e,d,f,c)}c=em(a,b+"Left");d=em(a,b+"Right");e=em(a,b+"Top");f=em(a,b+"Bottom");return new Yl(parseFloat(e),parseFloat(d),parseFloat(f),parseFloat(c))}
var Mm={thin:2,medium:4,thick:6};function Nm(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Mm?Mm[c]:Jm(a,c)}
function pm(a){if(C&&!Kf(9)){var b=Nm(a,"borderLeft"),c=Nm(a,"borderRight"),d=Nm(a,"borderTop");a=Nm(a,"borderBottom");return new Yl(d,c,a,b)}b=em(a,"borderLeftWidth");c=em(a,"borderRightWidth");d=em(a,"borderTopWidth");a=em(a,"borderBottomWidth");return new Yl(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}
;Dc(oc("//fonts.googleapis.com/css"));var Om=(new Date).getTime();function Pm(a){F(this,a,0,-1,Qm,null)}
z(Pm,D);var Qm=[2];function Rm(a){F(this,a,0,-1,Sm,null)}
z(Rm,D);var Sm=[1,2,3,4];function Tm(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;var Um=window;Zi(window.document);new L;var Vm=function(){if(wf){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(xd))?a[1]:"0"}return vf?(a=/10[_.][0-9_.]+/,(a=a.exec(xd))?a[0].replace(/_/g,"."):"10"):yf?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(xd))?a[1]:""):zf||Af||Bf?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(xd))?a[1].replace(/_/g,"."):""):""}();function Wm(a){return(a=a.exec(xd))?a[1]:""}
var Xm=function(){if(Of)return Wm(/Firefox\/([0-9.]+)/);if(C||qf||pf)return If;if(Sf)return kf()?Wm(/CriOS\/([0-9.]+)/):Wm(/Chrome\/([0-9.]+)/);if(Tf&&!kf())return Wm(/Version\/([0-9.]+)/);if(Pf||Qf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(xd);if(a)return a[1]+"."+a[2]}else if(Rf)return(a=Wm(/Android\s+([0-9.]+)/))?a:Wm(/Version\/([0-9.]+)/);return""}();function Ym(){var a;if(a=Tf)a=0<=Tc(Xm,10);var b;if(b=Cf)b=0<=Tc(Vm,10);return sf||a||b}
;function Zm(a,b,c,d,e,f,g,k,l){var m;if(m=c.offsetParent){var n="HTML"==m.tagName||"BODY"==m.tagName;if(!n||"static"!=gm(m)){var t=nm(m);n||(n=(n=Gm(m))&&Ym()?-m.scrollLeft:!n||rf&&Jf("8")||"visible"==fm(m,"overflowX")?m.scrollLeft:m.scrollWidth-m.clientWidth-m.scrollLeft,t=Vi(t,new Ti(n,m.scrollTop)))}}m=t||new Ti;t=ym(a);if(n=mm(a)){var r=new am(n.left,n.top,n.right-n.left,n.bottom-n.top);n=Math.max(t.left,r.left);var v=Math.min(t.left+t.width,r.left+r.width);if(n<=v){var B=Math.max(t.top,r.top);
r=Math.min(t.top+t.height,r.top+r.height);B<=r&&(t.left=n,t.top=B,t.width=v-n,t.height=r-B)}}n=Zi(a);B=Zi(c);if(n.g!=B.g){v=n.g.body;B=ck(B);r=new Ti(0,0);var E=oj(aj(v));if(mf(E,"parent")){var X=v;do{var fa=E==B?nm(X):um(X);r.x+=fa.x;r.y+=fa.y}while(E&&E!=B&&E!=E.parent&&(X=E.frameElement)&&(E=E.parent))}v=Vi(r,nm(v));!C||Kf(9)||lj(n.g)||(v=Vi(v,mj(n.g)));t.left+=v.x;t.top+=v.y}a=$m(a,b);b=t.left;a&4?b+=t.width:a&2&&(b+=t.width/2);b=new Ti(b,t.top+(a&1?t.height:0));b=Vi(b,m);e&&(b.x+=(a&4?-1:1)*
e.x,b.y+=(a&1?-1:1)*e.y);if(g)if(l)var ia=l;else if(ia=mm(c))ia.top-=m.y,ia.right-=m.x,ia.bottom-=m.y,ia.left-=m.x;return an(b,c,d,f,ia,g,k)}
function an(a,b,c,d,e,f,g){a=a.clone();var k=$m(b,c);c=xm(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var l=0;if(d||0!=k)k&4?a.x-=g.width+(d?d.right:0):k&2?a.x-=g.width/2:d&&(a.x+=d.left),k&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;k=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var m=d.x;d.x<e.left&&(d.x=e.left,l|=4);d.x+k.width>e.right&&(k.width=Math.min(e.right-d.x,
m+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.x+k.width>e.right&&f&1&&(d.x=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+k.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(m=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.y,m+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.y+k.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.y<e.top?64:0)|(d.y+k.height>e.bottom?128:0));e=l}else e=
256;l=e}f=new am(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;hm(b,new Ti(f.left,f.top));g=new Wi(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=aj(b),a=lj(Zi(g).g),!C||Jf("10")||a&&Jf("8")?(b=b.style,sf?b.MozBoxSizing="border-box":tf?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+"px"):(g=b.style,a?(a=Lm(b,"padding"),b=pm(b),g.pixelWidth=c.width-b.left-a.left-
a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function $m(a,b){return(b&8&&Gm(a)?b^4:b)&-9}
;var bn=!C||Jf(9);function cn(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function dn(a){return a.classList?a.classList:cn(a).match(/\S+/g)||[]}
function en(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function O(a,b){return a.classList?a.classList.contains(b):mb(dn(a),b)}
function P(a,b){if(a.classList)a.classList.add(b);else if(!O(a,b)){var c=cn(a);en(a,c+(0<c.length?" "+b:b))}}
function fn(a,b){if(a.classList)A(b,function(f){P(a,f)});
else{var c={};A(dn(a),function(f){c[f]=!0});
A(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;en(a,d)}}
function gn(a,b){a.classList?a.classList.remove(b):O(a,b)&&en(a,eb(dn(a),function(c){return c!=b}).join(" "))}
function hn(a,b){a.classList?A(b,function(c){gn(a,c)}):en(a,eb(dn(a),function(c){return!mb(b,c)}).join(" "))}
function jn(a,b,c){c?P(a,b):gn(a,b)}
function kn(a,b,c){O(a,b)&&(gn(a,b),P(a,c))}
function ln(a,b){var c=!O(a,b);jn(a,b,c)}
;var mn={};function nn(a){if(!a.tagName||a.readOnly)return!1;switch(a.tagName.toUpperCase()){case "TEXTAREA":return!0;case "INPUT":return mb("EMAIL NUMBER SEARCH TEL TEXT URL".split(" "),a.type.toUpperCase());case "IFRAME":try{var b=on(a);return!!b&&!!(b.designMode&&"ON"==b.designMode.toUpperCase()||b.body&&b.body.isContentEditable)}catch(c){return!1}default:return!!a.isContentEditable}}
function on(a){var b=Pa(document),c=Pa(a),d=mn[b];d||(d=mn[b]={});try{var e=window.location.href||"";if(!(c in d))if(a.src){var f=a.src.indexOf("//"),g=0>f?"N/A":a.src.slice(0,f);d[c]=""!=g&&"http:"!=g&&"https:"!=g||Ge(a.src,e)}else d[c]=!0;return d[c]?Jj(a):null}catch(k){return d[c]=!1,null}}
function pn(a){a=a||document;var b=[],c=[];ub(b,cj("IFRAME",a),cj("FRAME",a));A(b,function(d){(d=on(d))&&c.push(d)});
return c}
;function qn(a){I.call(this);this.j=a;this.g={}}
z(qn,I);var rn=[];h=qn.prototype;h.G=function(a,b,c,d){Array.isArray(b)||(b&&(rn[0]=b.toString()),b=rn);for(var e=0;e<b.length;e++){var f=K(a,b[e],c||this.handleEvent,d||!1,this.j||this);if(!f)break;this.g[f.key]=f}return this};
h.Xg=function(a,b,c,d){return sn(this,a,b,c,d)};
function sn(a,b,c,d,e,f){if(Array.isArray(c))for(var g=0;g<c.length;g++)sn(a,b,c[g],d,e,f);else{b=ui(b,c,d||a.handleEvent,e,f||a.j||a);if(!b)return a;a.g[b.key]=b}return a}
h.Z=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)this.Z(a,b[f],c,d,e);else c=c||this.handleEvent,d=Oa(d)?!!d.capture:!!d,e=e||this.j||this,c=vi(c),d=!!d,b=ji(a)?a.bf(b,c,d,e):a?(a=xi(a))?a.bf(b,c,d,e):null:null,b&&(Ci(b),delete this.g[b.key]);return this};
function tn(a){Nb(a.g,function(b,c){this.g.hasOwnProperty(c)&&Ci(b)},a);
a.g={}}
h.N=function(){qn.J.N.call(this);tn(this)};
h.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function un(a){L.call(this);this.g={};this.A=Ma(a)?a[0]:a;this.j=null;this.l=new qn(this);vn(this,a)}
ra(un,L);function vn(a,b){var c=Ma(b)?b:[b],d=C?"focusin":"focus",e=C?"focusout":"blur";A(c,function(f){var g=Pa(f);this.g[g]||(this.g[g]=!0,f=tf?oj(f):f,this.l.G(f,d,this.B,bn),this.l.G(f,e,this.C,bn))},a)}
un.prototype.B=function(a){var b=a.target;b&&b!=Um&&(b.frameElement&&(b=b.frameElement),wn(this,a,b))};
un.prototype.C=function(a){var b=this,c=bc(a.Ba);Uk(function(){return xn(b,b.A,new ei(c))},0)};
function xn(a,b,c){if(a.g){var d=Zi(b);A(pn(d.g),function(f){try{vn(this,f)}catch(g){}},a);
if(b=bk(b)){d=b;for(var e=b.tagName;e&&("IFRAME"==e||"FRAME"==e)&&(!b.src||Ge(b.src,window.location.href));){d=Jj(b);if(!d)break;vn(a,d);e=bk(d);if(!e)break;d=b;b=e;if((e=b.tagName)&&"BODY"==e.toUpperCase()){b=d;break}}wn(a,c,b)}}}
function wn(a,b,c){c!=a.j&&(a.j=c,b=new ei(b.Ba),b.target=c,b.type="aec",a.dispatchEvent(b))}
un.prototype.N=function(){L.prototype.N.call(this);try{Th(this.l)}catch(a){}delete this.g;delete this.j};var yn={tx:"GHELP_SEARCH",sx:"GHELP_AUTOCOMPLETE",ux:"GHELP_SUGGEST",qx:"GHELP_ARTICLE",zx:"LINK",vx:"HELPCENTER",nx:"EMAIL",ix:"CHAT",px:"FORUM",Ax:"MARKETING",Ox:"ONEBOX",lx:"CUSTOM",gx:"AUTO",Vx:"TESTING"};function zn(){var a=(yl.get("GuidedHelpResume")||"").split(":"),b=a[2];return{flowId:parseInt(a[0],10)||0,Md:a[1]||"",source:(Vb(yn,b)?b:void 0)||"CUSTOM"}}
;q("help.common.helpapiservice.Environment.PROD","https://clients6.google.com",void 0);q("help.common.helpapiservice.Environment.STAGING","https://content-googleapis-staging.sandbox.google.com",void 0);q("help.common.helpapiservice.Environment.TEST","https://content-googleapis-test.sandbox.google.com",void 0);/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function An(a,b){this.B=[];this.hb=a;this.P=b||null;this.A=this.g=!1;this.l=void 0;this.M=this.U=this.F=!1;this.C=0;this.j=null;this.D=0}
h=An.prototype;h.cancel=function(a){if(this.g)this.l instanceof An&&this.l.cancel();else{if(this.j){var b=this.j;delete this.j;a?b.cancel(a):(b.D--,0>=b.D&&b.cancel())}this.hb?this.hb.call(this.P,this):this.M=!0;this.g||this.hd(new Bn(this))}};
h.Dk=function(a,b){this.F=!1;Cn(this,a,b)};
function Cn(a,b,c){a.g=!0;a.l=c;a.A=!b;Dn(a)}
function En(a){if(a.g){if(!a.M)throw new Fn(a);a.M=!1}}
h.Ea=function(a){En(this);Cn(this,!0,a)};
h.hd=function(a){En(this);Cn(this,!1,a)};
function Gn(a,b,c){Hn(a,b,null,c)}
function In(a,b,c){return Hn(a,null,b,c)}
function Hn(a,b,c,d){a.B.push([b,c,d]);a.g&&Dn(a);return a}
h.then=function(a,b,c){var d,e,f=new sk(function(g,k){d=g;e=k});
Hn(this,d,function(g){g instanceof Bn?f.cancel():e(g)});
return f.then(a,b,c)};
An.prototype.$goog_Thenable=!0;An.prototype.isError=function(a){return a instanceof Error};
function Jn(a){return hb(a.B,function(b){return Na(b[1])})}
function Dn(a){if(a.C&&a.g&&Jn(a)){var b=a.C,c=Kn[b];c&&(p.clearTimeout(c.g),delete Kn[b]);a.C=0}a.j&&(a.j.D--,delete a.j);b=a.l;for(var d=c=!1;a.B.length&&!a.F;){var e=a.B.shift(),f=e[0],g=e[1];e=e[2];if(f=a.A?g:f)try{var k=f.call(e||a.P,b);void 0!==k&&(a.A=a.A&&(k==b||a.isError(k)),a.l=b=k);if(rk(b)||"function"===typeof p.Promise&&b instanceof p.Promise)d=!0,a.F=!0}catch(l){b=l,a.A=!0,Jn(a)||(c=!0)}}a.l=b;d&&(k=w(a.Dk,a,!0),d=w(a.Dk,a,!1),b instanceof An?(Hn(b,k,d),b.U=!0):b.then(k,d));c&&(b=new Ln(b),
Kn[b.g]=b,a.C=b.g)}
function Fn(){Ya.call(this)}
z(Fn,Ya);Fn.prototype.message="Deferred has already fired";Fn.prototype.name="AlreadyCalledError";function Bn(){Ya.call(this)}
z(Bn,Ya);Bn.prototype.message="Deferred was canceled";Bn.prototype.name="CanceledError";function Ln(a){this.g=p.setTimeout(w(this.l,this),0);this.j=a}
Ln.prototype.l=function(){delete Kn[this.g];throw this.j;};
var Kn={};function Mn(a){var b={},c=b.document||document,d=wc(a),e=uj("SCRIPT"),f={Ym:e,Sb:void 0},g=new An(Nn,f),k=null,l=null!=b.timeout?b.timeout:5E3;0<l&&(k=window.setTimeout(function(){On(e,!0);g.hd(new Pn(1,"Timeout reached for loading script "+d))},l),f.Sb=k);
e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(On(e,b.ly||!1,k),g.Ea(null))};
e.onerror=function(){On(e,!0,k);g.hd(new Pn(0,"Error while loading script "+d))};
f=b.attributes||{};ec(f,{type:"text/javascript",charset:"UTF-8"});hj(e,f);ee(e,a);Qn(c).appendChild(e);return g}
function Qn(a){var b=cj("HEAD",a);return b&&0!=b.length?b[0]:a.documentElement}
function Nn(){if(this&&this.Ym){var a=this.Ym;a&&"SCRIPT"==a.tagName&&On(a,!0,this.Sb)}}
function On(a,b,c){null!=c&&p.clearTimeout(c);a.onload=Ja;a.onerror=Ja;a.onreadystatechange=Ja;b&&window.setTimeout(function(){Bj(a)},0)}
function Pn(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);Ya.call(this,c);this.code=a}
z(Pn,Ya);var Rn="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function Sn(){}
Sn.prototype.next=function(){throw Rn;};
Sn.prototype.qb=function(){return this};
function Tn(a){if(a instanceof Sn)return a;if("function"==typeof a.qb)return a.qb(!1);if(Ma(a)){var b=0,c=new Sn;c.next=function(){for(;;){if(b>=a.length)throw Rn;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Un(a,b,c){if(Ma(a))try{A(a,b,c)}catch(d){if(d!==Rn)throw d;}else{a=Tn(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Rn)throw d;}}}
function Vn(a){if(Ma(a))return tb(a);a=Tn(a);var b=[];Un(a,function(c){b.push(c)});
return b}
;function Wn(a,b){this.j={};this.g=[];this.A=this.l=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&Xn(this,a)}
h=Wn.prototype;h.ha=function(){return this.l};
h.ia=function(){Yn(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.j[this.g[b]]);return a};
h.Ga=function(){Yn(this);return this.g.concat()};
h.Lc=function(a){for(var b=0;b<this.g.length;b++){var c=this.g[b];if(Zn(this.j,c)&&this.j[c]==a)return!0}return!1};
h.equals=function(a,b){if(this===a)return!0;if(this.l!=a.ha())return!1;var c=b||$n;Yn(this);for(var d,e=0;d=this.g[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function $n(a,b){return a===b}
h.isEmpty=function(){return 0==this.l};
h.clear=function(){this.j={};this.A=this.l=this.g.length=0};
h.remove=function(a){return Zn(this.j,a)?(delete this.j[a],this.l--,this.A++,this.g.length>2*this.l&&Yn(this),!0):!1};
function Yn(a){if(a.l!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Zn(a.j,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.l!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],Zn(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
h.get=function(a,b){return Zn(this.j,a)?this.j[a]:b};
h.set=function(a,b){Zn(this.j,a)||(this.l++,this.g.push(a),this.A++);this.j[a]=b};
function Xn(a,b){if(b instanceof Wn)for(var c=b.Ga(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])}
h.forEach=function(a,b){for(var c=this.Ga(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new Wn(this)};
function ao(a){Yn(a);for(var b={},c=0;c<a.g.length;c++){var d=a.g[c];b[d]=a.j[d]}return b}
h.qb=function(a){Yn(this);var b=0,c=this.A,d=this,e=new Sn;e.next=function(){if(c!=d.A)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)throw Rn;var f=d.g[b++];return a?f:d.j[f]};
return e};
function Zn(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function bo(a){return a.ha&&"function"==typeof a.ha?a.ha():Ma(a)||"string"===typeof a?a.length:Qb(a)}
function co(a){if(a.ia&&"function"==typeof a.ia)return a.ia();if("string"===typeof a)return a.split("");if(Ma(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Sb(a)}
function eo(a){if(a.Ga&&"function"==typeof a.Ga)return a.Ga();if(!a.ia||"function"!=typeof a.ia){if(Ma(a)||"string"===typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Tb(a)}}
function fo(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Ma(a)||"string"===typeof a)A(a,b,c);else for(var d=eo(a),e=co(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}
function go(a,b){if("function"==typeof a.some)return a.some(b,void 0);if(Ma(a)||"string"===typeof a)return hb(a,b,void 0);for(var c=eo(a),d=co(a),e=d.length,f=0;f<e;f++)if(b.call(void 0,d[f],c&&c[f],a))return!0;return!1}
function ho(a,b,c){if("function"==typeof a.every)return a.every(b,c);if(Ma(a)||"string"===typeof a)return ib(a,b,c);for(var d=eo(a),e=co(a),f=e.length,g=0;g<f;g++)if(!b.call(c,e[g],d&&d[g],a))return!1;return!0}
;function ph(a,b){this.A=this.C=this.l="";this.F=null;this.D=this.g="";this.B=!1;var c;a instanceof ph?(this.B=void 0!==b?b:a.B,oh(this,a.l),this.C=a.C,nh(this,a.A),io(this,a.F),jo(this,a.g),ko(this,a.j.clone()),lo(this,a.D)):a&&(c=String(a).match(Ae))?(this.B=!!b,oh(this,c[1]||"",!0),this.C=mo(c[2]||""),nh(this,c[3]||"",!0),io(this,c[4]),jo(this,c[5]||"",!0),ko(this,c[6]||"",!0),lo(this,c[7]||"",!0)):(this.B=!!b,this.j=new no(null,this.B))}
ph.prototype.toString=function(){var a=[],b=this.l;b&&a.push(oo(b,po,!0),":");var c=this.A;if(c||"file"==b)a.push("//"),(b=this.C)&&a.push(oo(b,po,!0),"@"),a.push(je(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.F,null!=c&&a.push(":",String(c));if(c=this.g)this.A&&"/"!=c.charAt(0)&&a.push("/"),a.push(oo(c,"/"==c.charAt(0)?qo:ro,!0));(c=this.j.toString())&&a.push("?",c);(c=this.D)&&a.push("#",oo(c,so));return a.join("")};
ph.prototype.resolve=function(a){var b=this.clone(),c=!!a.l;c?oh(b,a.l):c=!!a.C;c?b.C=a.C:c=!!a.A;c?nh(b,a.A):c=null!=a.F;var d=a.g;if(c)io(b,a.F);else if(c=!!a.g){if("/"!=d.charAt(0))if(this.A&&!this.g)d="/"+d;else{var e=b.g.lastIndexOf("/");-1!=e&&(d=b.g.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(Sc(e,"./")||Sc(e,"/.")){d=Fc(e,"/");e=e.split("/");for(var f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&
f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?jo(b,d):c=""!==a.j.toString();c?ko(b,a.j.clone()):c=!!a.D;c&&lo(b,a.D);return b};
ph.prototype.clone=function(){return new ph(this)};
function oh(a,b,c){a.l=c?mo(b,!0):b;a.l&&(a.l=a.l.replace(/:$/,""));return a}
function nh(a,b,c){a.A=c?mo(b,!0):b;return a}
function io(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.F=b}else a.F=null;return a}
function jo(a,b,c){a.g=c?mo(b,!0):b;return a}
function ko(a,b,c){b instanceof no?(a.j=b,to(a.j,a.B)):(c||(b=oo(b,uo)),a.j=new no(b,a.B));return a}
function vo(a,b,c){a.j.set(b,c);return a}
function wo(a,b){return a.j.get(b)}
function lo(a,b,c){a.D=c?mo(b):b;return a}
function xo(a){return a instanceof ph?a.clone():new ph(a,void 0)}
function yo(a,b){a instanceof ph||(a=xo(a));b instanceof ph||(b=xo(b));return a.resolve(b)}
function mo(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function oo(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,zo),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function zo(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var po=/[#\/\?@]/g,ro=/[#\?:]/g,qo=/[#\?]/g,uo=/[#\?@]/g,so=/#/g;function no(a,b){this.j=this.g=null;this.l=a||null;this.A=!!b}
function Ao(a){a.g||(a.g=new Wn,a.j=0,a.l&&He(a.l,function(b,c){a.add(ke(b),c)}))}
function Bo(a){var b=eo(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new no(null,void 0);a=co(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];Array.isArray(f)?Co(c,e,f):c.add(e,f)}return c}
h=no.prototype;h.ha=function(){Ao(this);return this.j};
h.add=function(a,b){Ao(this);this.l=null;a=Do(this,a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.j=this.j+1;return this};
h.remove=function(a){Ao(this);a=Do(this,a);return Zn(this.g.j,a)?(this.l=null,this.j=this.j-this.g.get(a).length,this.g.remove(a)):!1};
h.clear=function(){this.g=this.l=null;this.j=0};
h.isEmpty=function(){Ao(this);return 0==this.j};
function Eo(a,b){Ao(a);b=Do(a,b);return Zn(a.g.j,b)}
h.Lc=function(a){var b=this.ia();return mb(b,a)};
h.forEach=function(a,b){Ao(this);this.g.forEach(function(c,d){A(c,function(e){a.call(b,e,d,this)},this)},this)};
h.Ga=function(){Ao(this);for(var a=this.g.ia(),b=this.g.Ga(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.ia=function(a){Ao(this);var b=[];if("string"===typeof a)Eo(this,a)&&(b=sb(b,this.g.get(Do(this,a))));else{a=this.g.ia();for(var c=0;c<a.length;c++)b=sb(b,a[c])}return b};
h.set=function(a,b){Ao(this);this.l=null;a=Do(this,a);Eo(this,a)&&(this.j=this.j-this.g.get(a).length);this.g.set(a,[b]);this.j=this.j+1;return this};
h.get=function(a,b){if(!a)return b;var c=this.ia(a);return 0<c.length?String(c[0]):b};
function Co(a,b,c){a.remove(b);0<c.length&&(a.l=null,a.g.set(Do(a,b),tb(c)),a.j=a.j+c.length)}
h.toString=function(){if(this.l)return this.l;if(!this.g)return"";for(var a=[],b=this.g.Ga(),c=0;c<b.length;c++){var d=b[c],e=je(d);d=this.ia(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+je(d[f]));a.push(g)}}return this.l=a.join("&")};
h.clone=function(){var a=new no;a.l=this.l;this.g&&(a.g=this.g.clone(),a.j=this.j);return a};
function Do(a,b){var c=String(b);a.A&&(c=c.toLowerCase());return c}
function to(a,b){b&&!a.A&&(Ao(a),a.l=null,a.g.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),Co(this,e,c))},a));
a.A=b}
h.extend=function(a){for(var b=0;b<arguments.length;b++)fo(arguments[b],function(c,d){this.add(d,c)},this)};var Fo={},Go=Dc(oc("https://ssl.gstatic.com/inproduct_help/guidedhelp/guide_inproduct.js"));function Ho(a,b){return Io({theme:b.theme,document:b.document,Xe:b.Xe||"https://clients6.google.com",apiKey:b.apiKey,nf:b.nf,locale:b.locale}).then(function(){return u("help.guide.loadFlow")(a,b.Md,b.Jv,b.Go,b.source||"CUSTOM",b.document)})}
function Jo(a,b,c,d,e,f,g,k,l,m,n,t){Jk(Ho(a,{apiKey:t||"",Go:l||!1,document:m||void 0,Xe:n||void 0,nf:c,locale:d,theme:e||void 0,source:"CUSTOM",Md:k||void 0}),Ja)}
function Ko(a){a=xo(a);var b=wo(a,"ghstartsource")||"";return{flowId:parseInt(wo(a,"ghstartflowid"),10)||0,Md:wo(a,"ghstartstepid")||"",source:{helpcenter:"HELPCENTER",email:"EMAIL",chat:"CHAT",forum:"FORUM",marketing:"MARKETING",onebox:"ONEBOX",testing:"TESTING"}[b]||"LINK"}}
function Io(a){window.guidedhelp=window.guidedhelp||{};if(window.guidedhelp.loaded)var b=xk();else Lo||(Lo=Mn(Go).then()),b=Lo;return b.then(function(){u("help.guide.init")(a.nf,a.locale,a.theme,a.document,a.Xe,a.apiKey,Fo)})}
var Lo=null;function Mo(a,b,c,d,e,f,g,k,l){if(!zn().flowId)return!1;a=l||"";g=g||void 0;k=k||void 0;d=d||void 0;e=zn();e.flowId?(yl.remove("GuidedHelpResume","/",""),b=Ho(e.flowId,{apiKey:a,document:g,Xe:k,nf:b,locale:c,Jv:!1,Md:e.Md||void 0,theme:d,source:e.source})):b=yk();Jk(b,Ja);return!0}
q("hgb.loadFlow",Jo,void 0);q("hgb.resumeCookiedFlow",Mo,void 0);q("hgb.startFlowFromUrl",function(a,b,c,d,e,f,g,k,l,m){a=m||oj().top.location;if(!Ko(a).flowId)return!1;l=l||"";k=k||void 0;d=d||void 0;a=Ko(a||oj().top.location);b=a.flowId?Ho(a.flowId,{apiKey:l,document:g,Xe:k,nf:b,locale:c,source:a.source,Md:a.Md,theme:d}):yk();Jk(b,Ja);return!0},void 0);/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var No=window,Oo=document,Po=No.location;function Qo(){}
var Ro=/\[native code\]/;function So(a,b,c){return a[b]=a[b]||c}
function To(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Uo(){var a;if((a=Object.create)&&Ro.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Vo=So(No,"gapi",{});var Wo;Wo=So(No,"___jsl",Uo());So(Wo,"I",0);So(Wo,"hel",10);function Xo(){var a=Po.href;if(Wo.dpo)var b=Wo.h;else{b=Wo.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Yo(a){var b=So(Wo,"PQ",[]);Wo.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Zo(a){return So(So(Wo,"H",Uo()),a,Uo())}
;function $o(a){this.g=a}
$o.prototype.value=function(){return this.g};
$o.prototype.getHeight=function(){return this.g.height};function ap(){this.g={}}
ap.prototype.value=function(){return this.g};
ap.prototype.getId=function(){return this.g.id};
function bp(a){a.g.attributes=a.g.attributes||{};return new $o(a.g.attributes)}
;function cp(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(t){for(var r=g,v=0;64>v;v+=4)r[v/4]=t[v]<<24|t[v+1]<<16|t[v+2]<<8|t[v+3];for(v=16;80>v;v++)t=r[v-3]^r[v-8]^r[v-14]^r[v-16],r[v]=(t<<1|t>>>31)&4294967295;t=e[0];var B=e[1],E=e[2],X=e[3],fa=e[4];for(v=0;80>v;v++){if(40>v)if(20>v){var ia=X^B&(E^X);var xb=1518500249}else ia=B^E^X,xb=1859775393;else 60>v?(ia=B&E|X&(B|E),xb=2400959708):(ia=B^E^X,xb=3395469782);ia=((t<<5|t>>>27)&4294967295)+ia+fa+xb+r[v]&4294967295;fa=X;X=E;E=(B<<30|B>>>2)&4294967295;B=t;t=ia}e[0]=e[0]+t&4294967295;e[1]=e[1]+
B&4294967295;e[2]=e[2]+E&4294967295;e[3]=e[3]+X&4294967295;e[4]=e[4]+fa&4294967295}
function c(t,r){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var v=[],B=0,E=t.length;B<E;++B)v.push(t.charCodeAt(B));t=v}r||(r=t.length);v=0;if(0==m)for(;v+64<r;)b(t.slice(v,v+64)),v+=64,n+=64;for(;v<r;)if(f[m++]=t[v++],n++,64==m)for(m=0,b(f);v+64<r;)b(t.slice(v,v+64)),v+=64,n+=64}
function d(){var t=[],r=8*n;56>m?c(k,56-m):c(k,64-(m-56));for(var v=63;56<=v;v--)f[v]=r&255,r>>>=8;b(f);for(v=r=0;5>v;v++)for(var B=24;0<=B;B-=8)t[r++]=e[v]>>B&255;return t}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,n;a();return{reset:a,update:c,digest:d,Fo:function(){for(var t=d(),r="",v=0;v<t.length;v++)r+="0123456789ABCDEF".charAt(Math.floor(t[v]/16))+"0123456789ABCDEF".charAt(t[v]%16);return r}}}
;function dp(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],A(d,function(k){e.push(k)}),ep(e.join(" "));
var f=[],g=[];A(c,function(k){g.push(k.key);f.push(k.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];A(d,function(k){e.push(k)});
a=ep(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ep(a){var b=cp();b.update(a);return b.Fo().toLowerCase()}
;function fp(a){var b=Tm(String(p.location.href)),c;(c=p.__SAPISID||p.__APISID||p.__OVERRIDE_SID)?c=!0:(c=new wl(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,c||(c=new wl(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&c&&b?[b,dp(Tm(d),c,a||null)].join(" "):null}return null}
;function gp(a,b){Ya.call(this,b);this.code=a}
ra(gp,Ya);function hp(){var a=xo(window.location.href).D;return(new no(a)).get("redirect_state",null)}
;var ip=new Set(["tos_url","privacy_policy_url","learn_more_url"]),jp=/(\[.*?\]\(\$\{.*?\}\))/,kp=/^\[(.*?)\]\(\$\{(.*?)\}\)$/;function lp(a){this.C=a;this.j=this.l=this.A=this.g=null}
lp.prototype.open=function(a,b){this.g&&(this.l(void 0),mp(this));return new sk(function(c,d){this.A=c;this.l=d;this.g=fe(a,null,oc(""),b);K(window,"message",this.B,!1,this);np(this)},this)};
lp.prototype.B=function(a){a=a.Ba;if(a.source===this.g){var b=a.data;this.C(b,a.origin)&&(this.A(b),mp(this))}};
function mp(a){a.j&&(a.j.cancel(),a.j=null);a.g&&a.g.close();Bi(window,"message",a.B,!1,a);a.g=null;a.A=null;a.l=null}
function np(a){a.j=Wk(100).then(function(){if(a.g)a.g.closed?op(a):np(a);else{var b={error:new gp("POPUP_BLOCKED")};a.l(b);mp(a)}},function(){})}
function op(a){a.j=Wk(100).then(function(){a.l(void 0);mp(a)},function(){})}
;function pp(){this.g={}}
pp.prototype.get=function(a){return void 0!==this.g[a]?this.g[a]:null};
pp.prototype.set=function(a,b){this.g[a]=b};
pp.prototype.remove=function(a){delete this.g[a]};function qp(){this.g=new pp}
qp.prototype.addToken=function(a,b){var c=this.g.get(a)||[];c.push(b);this.g.set(a,c)};
qp.prototype.og=function(a,b){var c=b||[],d=this.g.get(a)||[];d=eb(d,function(g){return!(Math.floor(x()/1E3)>g.expireTime-30)});
this.g.set(a,d);for(var e=0;e<d.length;e++){var f=d[e];if(rp(c,f.yf||[]))return f}return null};
function rp(a,b){for(var c=new Set(b),d=ja(a),e=d.next();!e.done;e=d.next())if(!c.has(e.value))return!1;return!0}
;function sp(){}
sp.prototype.close=function(){};
function tp(){}
;function up(a,b,c,d){this.request=a;this.service=b;this.yh=c;this.options=d}
up.prototype.fetch=function(){var a=this;return this.A().then(function(b){"COMPLETE"===b.status&&b.token&&a.yh.addToken(a.request.serviceId,b.token);return b})};
function vp(a,b,c){c=c||{};c.gdiState=b;c.serviceId=a.request.serviceId;c.scopes=a.request.yf;a.request.Ye&&!Ic(a.request.Ye)&&(c.extraRedirectState=a.request.Ye);a.request.Kc&&!Ic(a.request.Kc)&&(c.completionUrl=a.request.Kc);a.options.bucket&&(c.header={bucket:a.options.bucket});return wp(a.service,"/v1/token:getForService","POST",c)}
function xp(a,b){var c=b.tokenInfo,d=c.accessToken;if(!d)throw new gp("INTERNAL_ERROR");d={accessToken:d};a.request.yf&&(d.yf=a.request.yf);if(c=c.expireTime&&Ml(c.expireTime))d.expireTime=Math.floor(c.getTime()/1E3);return{status:"COMPLETE",token:d}}
;function yp(){this.g=[]}
function zp(a,b,c,d){Ap(a,"click",b,c,d)}
function Ap(a,b,c,d,e){c=c.getElementsByClassName(d);for(d=0;d<c.length;d++){var f=K(c[d],b,e,!1);a.g.push(f)}}
;var Fm=vd(oc(".goi-dialog{color:rgba(0,0,0,0.87);font:14px Roboto,arial,sans-serif;width:100%}.goi-dialog-body{margin:24px}.goi-dialog-form{margin-bottom:24px}.goi-dialog-header{font-size:20px;font-weight:500;margin:0 0 20px 0}.goi-dialog-footer{font-size:12px;font-weight:500}.goi-dialog-action{border-radius:2px;color:#4285f4;display:inline-block;font-size:14px;font-weight:500;float:right;line-height:36px;margin:8px;padding:0 16px;text-decoration:none;text-transform:uppercase}.goi-link{color:#4285f4}.goi-input{border:none;border-bottom:1px solid rgba(0,0,0,0.12);font:14px Roboto,arial,sans-serif;padding:0 0 4px;margin-bottom:1px;outline:none}.goi-input:focus{border-bottom:2px solid #4285f4;margin-bottom:0px}.goi-input-label{display:block;margin-bottom:8px}.goi-select{background-color:#fff;border:none;color:rgba(0,0,0,0.87);font:14px Roboto,arial,sans-serif;width:100%;padding:4px 0}.goi-body-text{margin-bottom:16px}.goi-fineprint{color:rgba(0,0,0,0.54);font-size:12px;margin-bottom:16px}.goi-button{border:none;border-radius:2px;cursor:pointer;font:14px Roboto,arial,sans-serif;font-weight:500;outline:none;padding:10px 0;text-transform:uppercase}.goi-blue-button{background-color:#4285f4;color:white;text-align:center;width:100%}.goi-transparent-button{background-color:transparent;color:#4285f4;text-align:right;width:100%}.goi-hr{color:#d5d5d5;height:1px;width:100%}.goi-padding-bottom{padding:0 0 18px 0}.goi-padding-top{padding:18px 0 0 0}.goi-inline-error{color:red;display:block;font-size:12px;margin-top:3px;position:absolute}.goi-linkaccount-account-list{list-style:none;margin:0;padding:0}.goi-linkaccount-width{width:100%}.goi-linkaccount-photo-wrapper{display:table-cell;vertical-align:middle}.goi-linkaccount-photo{border-radius:50%;float:left;height:36px;width:36px}.goi-linkaccount-account-info{display:table-cell;padding:18px 0 18px 20px;vertical-align:middle;word-break:break-word}.goi-linkaccount-display-name{color:rgba(0,0,0,0.87);font-size:16px;line-height:16px;margin-bottom:2px}.goi-linkaccount-username{color:rgba(0,0,0,0.87);font-size:14px;line-height:20px}.goi-phoneentry-country{text-align:center;width:24px}.goi-phoneentry-phone{margin-left:12px;width:200px}.goi-loading-id-page{padding:40px;text-align:center}"));function Bp(){this.g=null}
Bp.prototype.install=function(){if(!this.g){var a=Zi(void 0);var b=a.g;if(C&&b.createStyleSheet)a=b.createStyleSheet(),Em(a);else{b=ej(a.g,"HEAD",void 0,void 0)[0];if(!b){var c=ej(a.g,"BODY",void 0,void 0)[0];b=a.W("HEAD");c.parentNode.insertBefore(b,c)}c=a.W("STYLE");Em(c);a.appendChild(b,c);a=c}this.g=a}};
Ka(Bp);function Cp(){L.call(this);this.element=null;this.g=new yp}
ra(Cp,L);Cp.prototype.N=function(){for(var a=this.g,b=0;b<a.g.length;b++)Ci(a.g[b]);a.g=[];this.element&&(this.element=null);L.prototype.N.call(this)};
Cp.prototype.za=function(){if(this.element)return this.element;this.element=this.l();this.j(this.element);Bp.V().install();return this.element};
Cp.prototype.j=function(a){var b=this;zp(this.g,a,"goi-dialog-id-primary",function(){b.dispatchEvent(new J("dialogPrimary"))});
zp(this.g,a,"goi-dialog-id-cancel",function(){b.dispatchEvent(new J("dialogCancel"))});
zp(this.g,a,"goi-dialog-id-back",function(){b.dispatchEvent(new J("dialogBack"))})};var Dp={},Ep={},Fp={};function Gp(){throw Error("Do not instantiate directly");}
Gp.prototype.bi=null;Gp.prototype.getContent=function(){return this.content};
Gp.prototype.toString=function(){return this.content};
function Hp(){Gp.call(this)}
z(Hp,Gp);Hp.prototype.Ac=Dp;function Ip(a){if(null!=a)switch(a.bi){case 1:return 1;case -1:return-1;case 0:return 0}return null}
function Jp(a){return null!=a&&a.Ac===Dp?a:a instanceof Fd?Kp(Hd(a).toString(),a.g()):Kp(le(String(String(a))),Ip(a))}
var Kp=function(a){function b(c){this.content=c}
b.prototype=a.prototype;return function(c,d){var e=new b(String(c));void 0!==d&&(e.bi=d);return e}}(Hp);
function Lp(a,b){return a&&b&&a.jr&&b.jr?a.Ac!==b.Ac?!1:a.toString()===b.toString():a instanceof Gp&&b instanceof Gp?a.Ac!=b.Ac?!1:a.toString()==b.toString():a==b}
function Q(a){return null!=a&&a.Ac===Dp?String(String(a.getContent()).replace(Mp,"").replace(Np,"&lt;")).replace(Op,Pp):le(String(a))}
var Qp={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function Pp(a){return Qp[a]}
var Rp={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",
")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB",
"\uff3d":"%EF%BC%BD"};function Sp(a){return Rp[a]}
var Op=/[\x00\x22\x27\x3c\x3e]/g,Tp=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Up=/^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,Mp=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Np=/</g;function Vp(a,b){var c=a(b||Wp,void 0);var d=Zi().createElement("DIV");c=Xp(c);ae(d,c);1==d.childNodes.length&&(c=d.firstChild,1==c.nodeType&&(d=c));return d}
function Xp(a){if(!Oa(a))return Id(String(a));if(a instanceof Gp){if(a.Ac!==Dp)throw Error("Sanitized content was not of kind HTML.");return Yd(oc("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."),a.toString(),a.bi)}return Id("zSoyz")}
var Wp={};function Yp(a){var b=a.ao,c=a.serviceName;a='<div class="'+Q("goi-dialog")+" "+Q("goi-linkaccount-id-page")+'"><div class="'+Q("goi-dialog-body")+'"><h1 class="'+Q("goi-dialog-header")+'">';c=y("Link {$serviceName} to your Google Account",{serviceName:Jp(c)},{html:!0});a+=c;c='</h1><ul class="'+Q("goi-linkaccount-account-list")+'"><li><div class="'+Q("goi-linkaccount-photo-wrapper")+'"><img class="'+Q("goi-linkaccount-photo")+'" src="';var d=b.photoUrl;null!=d&&d.Ac===Ep||null!=d&&d.Ac===Fp?d=String(d).replace(Tp,
Sp):d instanceof Vc?d=String(Yc(d)).replace(Tp,Sp):d instanceof tc?d=String(wc(d)).replace(Tp,Sp):(d=String(d),d=Up.test(d)?d.replace(Tp,Sp):"about:invalid#zSoyz");a+=c+Q(d)+'" alt=""/></div><div class="'+Q("goi-linkaccount-account-info")+'"><div class="'+Q("goi-linkaccount-display-name")+'">'+Jp(b.displayName)+'</div><div class="'+Q("goi-linkaccount-username")+'">'+Jp(b.username)+'</div></div></li><li><button class="'+Q("goi-linkaccount-width")+" "+Q("goi-button")+" "+Q("goi-blue-button")+" "+Q("goi-linkaccount-button")+
'" data-account-id="'+Q(b.accountId)+'">';b=y("LINK ACCOUNTS",{},{html:!0});a=a+b+"</button></li></ul></div></div>";return Kp(a)}
function Zp(a){var b=a.serviceName;null==a.phoneNumbers||Array.isArray(a.phoneNumbers);var c=a.phoneNumbers;var d=a.Ld,e=a.Ph,f=a.consentText;a='<div class="'+Q("goi-dialog")+" "+Q("goi-createaccount-id-page")+'"><div class="'+Q("goi-dialog-body")+'"><h1 class="'+Q("goi-dialog-header")+" "+Q("goi-createaccount-padding")+'">';var g=y("Don't have {$serviceName} account? Create one with your Google Account",{serviceName:Jp(b)},{html:!0});a=a+g+"</h1>";if(c){a+='<label for="goi-createaccount-phone" class="'+
Q("goi-input-label")+'">';g=y("Phone number",{},{html:!0});a=a+g+('</label><div class="'+Q("goi-dialog-form")+'"><select class="'+Q("goi-select")+" "+Q("goi-createaccount-id-phone-select")+'">');g=c.length;for(var k=0;k<g;k++){var l=c[k];a+=(d instanceof Gp?d.getContent():d)&&Lp(d,l)?'<option class="'+Q("goi-option")+'" value="'+Q(l)+'" selected>'+Jp(l)+"</option>":'<option class="'+Q("goi-option")+'" value="'+Q(l)+'">'+Jp(l)+"</option>"}e&&(a+='<option class="'+Q("goi-option")+'" value="'+Q(e)+'">',
c=y("Add new phone number",{},{html:!0}),a+=c,a+="</option>");a+="</select></div>"}a+=(f?'<div class="'+Q("goi-fineprint")+'">'+Jp(f)+"</div>":"")+'<button class="'+Q("goi-button")+" "+Q("goi-blue-button")+" "+Q("goi-dialog-id-primary")+'">';c=y("create",{},{html:!0});a+=c;a+='</button><hr class="'+Q("goi-hr")+'"/><button class="'+Q("goi-button")+" "+Q("goi-transparent-button")+" "+Q("goi-createaccount-id-use-other-email")+'">';b=y("I already have {$serviceName} account",{serviceName:Jp(b)},{html:!0});
a+=b;a+='</button><button class="'+Q("goi-button")+" "+Q("goi-transparent-button")+" "+Q("goi-dialog-id-cancel")+'">';b=y("Cancel",{},{html:!0});a+=b;a+="</button></div></div>";return Kp(a)}
function $p(a){a=a.consentText;a='<div class="'+Q("goi-dialog")+" "+Q("goi-providerconsent-id-page")+'"><div class="'+Q("goi-dialog-body")+'"><h1 class="'+Q("goi-dialog-header")+'">'+Jp(a)+'</h1></div><div class="'+Q("goi-dialog-footer")+'"><a href="javascript:void(0);" class="'+Q("goi-dialog-action")+" "+Q("goi-dialog-id-primary")+'">';var b=y("Link",{},{html:!0});a+=b;b='<a href="javascript:void(0);" class="'+Q("goi-dialog-action")+" "+Q("goi-dialog-id-cancel")+'">';var c=y("Cancel",{},{html:!0});
b=Kp(b+c+"</a>");return Kp(a+("</a>"+b+"</div></div>"))}
function aq(){return Kp('<div class="'+Q("goi-dialog")+" "+Q("goi-loading-id-page")+'"><div class="mdl-spinner mdl-js-spinner mdl-spinner--single-color is-active"></div></div>')}
function bq(a){var b=a.errorType;a='<div class="'+Q("goi-dialog")+" "+Q("goi-genericerror-id-page")+'"><div class="'+Q("goi-dialog-body")+'"><h1 class="'+Q("goi-dialog-header")+'">';Lp(b,"NETWORK_ERROR")?(b=y("Can't reach the internet. Check your connection and try again.",{},{html:!0}),a+=b):(b=y("Trouble completing request. Try again later.",{},{html:!0}),a+=b);a+='</h1></div><div class="'+Q("goi-dialog-footer")+'"><a href="javascript:void(0);" class="'+Q("goi-dialog-action")+" "+Q("goi-dialog-id-cancel")+
'">';b=y("Close",{},{html:!0});return Kp(a+b+"</a></div></div>")}
function cq(){var a='<a href="javascript:void(0);" class="'+Q("goi-dialog-action")+" "+Q("goi-dialog-id-back")+'">',b=y("Back",{},{html:!0});return Kp(a+b+"</a>")}
function dq(a){var b=a.serviceName;a='<div class="'+Q("goi-dialog")+" "+Q("goi-appauth-id-page")+'"><div class="'+Q("goi-dialog-body")+'"><h1 class="'+Q("goi-dialog-header")+'">';b=y("We weren't able to link your accounts. Please sign in to {$serviceName} to continue.",{serviceName:Jp(b)},{html:!0});a=a+b+('</h1></div><div class="'+Q("goi-dialog-footer")+'"><a href="javascript:void(0);" class="'+Q("goi-dialog-action")+" "+Q("goi-dialog-id-primary")+'">');b=y("Sign in",{},{html:!0});a=a+b+('</a><a href="javascript:void(0);" class="'+
Q("goi-dialog-action")+" "+Q("goi-dialog-id-cancel")+'">');b=y("Cancel",{},{html:!0});a+=b;a+="</a></div></div>";return Kp(a)}
function eq(a){a=a||{};var b=a.Nk;a='<div class="'+Q("goi-dialog")+" "+Q("goi-phoneentry-id-page")+'"><div class="'+Q("goi-dialog-body")+'"><h1 class="'+Q("goi-dialog-header")+'">';var c=y("Add your phone number",{},{html:!0});a=a+c+('</h1><label for="goi-phoneentry-phone" class="'+Q("goi-input-label")+'">');c=y("Phone number",{},{html:!0});a=a+c+('</label><div class="'+Q("goi-dialog-form")+'">+<input class="'+Q("goi-input")+" "+Q("goi-phoneentry-country")+" "+Q("goi-phoneentry-id-country")+'" type="tel" value="1"/><input autofocus type="tel" name="goi-phoneentry-phone" placeholder="(123)456-7890" class="'+
Q("goi-input")+" "+Q("goi-phoneentry-phone")+" "+Q("goi-phoneentry-id-phone")+'"/>');b&&(a+='<span class="'+Q("goi-inline-error")+'">',b=y("Please enter a number.",{},{html:!0}),a+=b,a+="</span>");a+='</div><div class="'+Q("goi-fineprint")+'">';b=y("Google will send a one-time text message to confirm that this is your number. Standard rates apply.",{},{html:!0});a+=b;a+='</div></div><div class="'+Q("goi-dialog-footer")+'"><a href="javascript:void(0);" class="'+Q("goi-dialog-action")+" "+Q("goi-dialog-id-primary")+
'">';b=y("Send",{},{html:!0});a+=b;a+="</a>"+cq()+"</div></div>";return Kp(a)}
function fq(a){var b=a.phoneNumber,c=a.Vl;a='<div class="'+Q("goi-dialog")+" "+Q("goi-phoneverification-id-page")+'"><div class="'+Q("goi-dialog-body")+'"><h1 class="'+Q("goi-dialog-header")+'">';var d=y("Enter the code",{},{html:!0});a=a+d+('</h1><p class="'+Q("goi-body-text")+'">');b=y("Enter the verification code from the text message sent to {$phoneNumber}",{phoneNumber:Jp(b)},{html:!0});a=a+b+('<div class="'+Q("goi-dialog-form")+'"><input autofocus type="tel" name="goi-phoneverification-code" placeholder="123456" maxlength="6" class="'+
Q("goi-input")+" "+Q("goi-phoneverification-id-code")+'"/>');c&&(a+='<span class="'+Q("goi-inline-error")+'">',b=y("Incorrect verification code",{},{html:!0}),a+=b,a+="</span>");a+='</div></div><div class="'+Q("goi-dialog-footer")+'"><a href="javascript:void(0);" class="'+Q("goi-dialog-action")+" "+Q("goi-dialog-id-primary")+'">';b=y("Next",{},{html:!0});a+=b;a+="</a>"+cq()+"</div></div>";return Kp(a)}
function gq(a){var b=a.consentText;null==a.phoneNumbers||Array.isArray(a.phoneNumbers);var c=a.phoneNumbers;var d=a.Ld,e=a.Ph;a='<div class="'+Q("goi-dialog")+" "+Q("goi-confirmaccount-id-page")+'"><div class="'+Q("goi-dialog-body")+'"><h1 class="'+Q("goi-dialog-header")+'">';var f=y("To finish, confirm your details",{},{html:!0});a=a+f+"</h1>";if(c){a+='<label for="goi-confirmaccount-phone" class="'+Q("goi-input-label")+'">';f=y("Phone number",{},{html:!0});a=a+f+('</label><div class="'+Q("goi-dialog-form")+
'"><select class="'+Q("goi-select")+" "+Q("goi-confirmaccount-id-phone-select")+'">');f=c.length;for(var g=0;g<f;g++){var k=c[g];a+=(d instanceof Gp?d.getContent():d)&&Lp(d,k)?'<option class="'+Q("goi-option")+'" value="'+Q(k)+'" selected>'+Jp(k)+"</option>":'<option class="'+Q("goi-option")+'" value="'+Q(k)+'">'+Jp(k)+"</option>"}a+='<option class="'+Q("goi-option")+'" value="'+Q(e)+'">';c=y("Add new phone number",{},{html:!0});a+=c;a+="</option></select></div>"}a+='<div class="'+Q("goi-fineprint")+
'">'+Jp(b)+'</div><div><button class="'+Q("goi-button")+" "+Q("goi-blue-button")+" "+Q("goi-dialog-id-primary")+'">';b=y("Finish",{},{html:!0});a+=b;a+='</button><button class="'+Q("goi-button")+" "+Q("goi-transparent-button")+" "+Q("goi-padding-top")+" "+Q("goi-dialog-id-cancel")+'">';b=y("Cancel",{},{html:!0});a+=b;a+="</button></div></div></div>";return Kp(a)}
;function hq(a){Cp.call(this);this.A=a}
ra(hq,Cp);hq.prototype.l=function(){return Vp(bq,this.A)};function iq(a){Cp.call(this);this.A=a}
ra(iq,Cp);iq.prototype.l=function(){return Vp(dq,{serviceName:this.A.serviceName})};function jq(a){Cp.call(this);if(a.phoneNumbers&&0===a.phoneNumbers.length)throw new gp("INTERNAL_ERROR","At least one phone number must be provided.");this.A=a}
ra(jq,Cp);function kq(a){return a.element?(a=N("goi-confirmaccount-id-phone-select",a.element))&&"ADD_NEW"!==a.value?a.value:null:null}
jq.prototype.l=function(){return Vp(gq,{phoneNumbers:this.A.phoneNumbers,consentText:this.A.consentText,Ph:"ADD_NEW",Ld:this.A.Ld})};
jq.prototype.B=function(a){"ADD_NEW"===a.target.value?this.dispatchEvent(new J("addPhoneNumber")):this.dispatchEvent(new J("changePhoneNumber"))};
jq.prototype.j=function(a){Cp.prototype.j.call(this,a);Ap(this.g,"change",a,"goi-confirmaccount-id-phone-select",this.B.bind(this))};function lq(a){Cp.call(this);if(a.phoneNumbers&&0===a.phoneNumbers.length)throw new gp("INTERNAL_ERROR","At least one phone number must be provided.");this.A=a}
ra(lq,Cp);function mq(a){return a.element?(a=N("goi-createaccount-id-phone-select",a.element))&&"ADD_NEW"!==a.value?a.value:null:null}
lq.prototype.l=function(){return Vp(Zp,{serviceName:this.A.serviceName,phoneNumbers:this.A.phoneNumbers,Ph:"ADD_NEW",Ld:this.A.Ld,consentText:this.A.consentText})};
lq.prototype.C=function(a){"ADD_NEW"===a.target.value?this.dispatchEvent(new J("addPhoneNumber")):this.dispatchEvent(new J("changePhoneNumber"))};
lq.prototype.B=function(){this.dispatchEvent(new J("useOtherEmail"))};
lq.prototype.j=function(a){Cp.prototype.j.call(this,a);Ap(this.g,"change",a,"goi-createaccount-id-phone-select",this.C.bind(this));zp(this.g,a,"goi-createaccount-id-use-other-email",this.B.bind(this))};var nq=!C&&!Cd();function oq(a,b){if(/-[a-z]/.test(b))return null;if(nq&&a.dataset){if(Ed()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+we(b))}
function pq(a){return/-[a-z]/.test("value")?!1:nq&&a.dataset?"value"in a.dataset:a.hasAttribute?a.hasAttribute("data-"+we("value")):!!a.getAttribute("data-"+we("value"))}
;function qq(a){Cp.call(this);this.B=a}
ra(qq,Cp);qq.prototype.l=function(){return Vp(Yp,this.B)};
qq.prototype.A=function(a){a=oq(a.currentTarget,"accountId")||"";this.dispatchEvent(new rq(a))};
qq.prototype.j=function(a){Cp.prototype.j.call(this,a);zp(this.g,a,"goi-linkaccount-button",this.A.bind(this))};
function rq(a){J.call(this,"accountSelected");this.accountId=a}
ra(rq,J);function sq(){Cp.call(this)}
ra(sq,Cp);sq.prototype.l=function(){return Vp(aq)};function tq(a){if(a.altKey&&!a.ctrlKey||a.metaKey||112<=a.keyCode&&123>=a.keyCode)return!1;if(uq(a.keyCode))return!0;switch(a.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!sf;default:return 166>a.keyCode||183<a.keyCode}}
function vq(a,b,c,d,e,f){if(tf&&!Jf("525"))return!0;if(vf&&e)return uq(a);if(e&&!d)return!1;if(!sf){"number"===typeof b&&(b=wq(b));var g=17==b||18==b||vf&&91==b;if((!c||vf)&&g||vf&&16==b&&(d||f))return!1}if((tf||qf)&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(C&&d&&b==a)return!1;switch(a){case 13:return sf?f||e?!1:!(c&&d):!0;case 27:return!(tf||qf||sf)}return sf&&(d||e||f)?!1:uq(a)}
function uq(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||(tf||qf)&&0==a)return!0;switch(a){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:case 58:return!0;case 173:return sf;default:return!1}}
function wq(a){if(sf)a=xq(a);else if(vf&&tf)switch(a){case 93:a=91}return a}
function xq(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}}
;function yq(){Cp.call(this)}
ra(yq,Cp);yq.prototype.B=function(a){if(13===a.keyCode){var b=fj("goi-input");b.length&&((a=b[Array.prototype.indexOf.call(b,a.target)+1])?a.focus():this.dispatchEvent(new J("dialogPrimary")))}};
yq.prototype.j=function(a){Cp.prototype.j.call(this,a);Ap(this.g,"keypress",a,"goi-input",this.B.bind(this))};function zq(a){Cp.call(this);this.A=a}
ra(zq,yq);function Aq(a){if(!a.element)return null;var b=N("goi-phoneentry-id-country",a.element);a=N("goi-phoneentry-id-phone",a.element);return b&&a?"+"+b.value+a.value:null}
zq.prototype.l=function(){return Vp(eq,{Nk:this.A.Nk})};function Bq(a){Cp.call(this);this.A=a}
ra(Bq,yq);function Cq(a){return a.element?(a=N("goi-phoneverification-id-code",a.element))?a.value:null:null}
Bq.prototype.l=function(){return Vp(fq,{phoneNumber:this.A.phoneNumber,Vl:this.A.Vl})};function Dq(a){Cp.call(this);this.A=a}
ra(Dq,Cp);Dq.prototype.l=function(){return Vp($p,{consentText:this.A.consentText})};var Eq={Tn:lp};function Fq(a,b,c,d,e,f){up.call(this,c,d,e,f);this.D=b;this.B=a;this.C=new Eq.Tn(this.F.bind(this));this.g=this.j=this.l=null}
ra(Fq,up);Fq.prototype.F=function(a,b){var c="https://oauth-redirect.googleusercontent.com"===b||"https://oauth-redirect-sandbox.googleusercontent.com"===b||"https://oauth-redirect-test.googleusercontent.com"===b;this.options.Ev&&(c=c||b===this.options.Ev);return c?!!a&&"gdi"===a.sentinel:!1};
Fq.prototype.A=function(){this.g&&this.cancel();this.g=Ek();Gq(this,this.B);return this.g.g};
Fq.prototype.cancel=function(){Hq(this);this.g.reject(new gp("USER_CANCELLED"));this.g=null};
function Iq(a,b,c){Jq(a,new sq);vp(a,b,c||{}).then(function(d){Hq(a);return Gq(a,d)},function(d){Hq(a);
Kq(a,d)})}
function Gq(a,b){var c=b.gdiState;if("COMPLETE"===c)a.g.resolve(xk().then(function(){return xp(a,b)}));
else if(a.options.Th)Lq(a,b);else switch(c){case "ACCOUNT_SELECTION":Mq(a.service).then(function(d){Nq(a,b,d)});
break;case "ACCOUNT_CREATION":Oq(a,b,"");break;case "PROVIDER_CONSENT":Pq(a,b);break;case "APP_AUTH":Qq(a,b);break;default:a.g.reject(new gp("INTERNAL_ERROR"))}}
function Lq(a,b){switch(b.gdiState){case "ACCOUNT_SELECTION":case "ACCOUNT_CREATION":case "PROVIDER_CONSENT":case "APP_AUTH":Qq(a,b);break;default:a.g.reject(new gp("INTERNAL_ERROR"))}}
function Nq(a,b,c){b=new qq({ao:c,serviceName:b.serviceInfo.name});b.G("accountSelected",function(){Hq(a);Iq(a,"ACCOUNT_SELECTION")});
b.G("dialogCancel",function(){a.cancel()});
Jq(a,b)}
function Rq(a){return Ub(a,"completionInfo","oauthAuthorizationUrl")||Ub(a,"completionInfo","appauthInfo","appauthRedirectUrl")||null}
function Sq(a){return(a=Ub(a,"completionInfo","userInfo","phoneNumber"))&&0<Object.keys(a).length?Sb(a):[]}
function Tq(a){return(a=Ub(a,"completionInfo","selectionInfo","createAccountRequiredClaims"))&&0<Object.keys(a).length?Vb(Sb(a),"PHONE_NUMBER_VERIFIED"):!1}
function Oq(a,b,c){var d=Ub(b,"serviceInfo","name")||"",e=Ub(b,"completionInfo","consent","code")||"",f=Uq(b),g=Sq(b);d={serviceName:d,consentText:f};0!==g.length&&(d.phoneNumbers=g,c&&0!==c.length&&(d.Ld=c));if(Tq(b)&&0===g.length)Vq(a,b,!1);else{var k=new lq(d),l=Rq(b);l?(k.G("dialogPrimary",function(){var m=mq(k);Hq(a);Iq(a,"ACCOUNT_CREATION",{credential:{accountCreationInfo:{phoneNumber:m,phoneNumberVerified:"true"},consentCode:e}})}),k.G("useOtherEmail",function(){Wq(a,l)}),k.G("addPhoneNumber",
function(){Hq(a);
Vq(a,b,!1)}),k.G("changePhoneNumber",function(){var m=mq(k)||"";
Hq(a);Oq(a,b,m)}),k.G("dialogCancel",function(){a.cancel()}),Jq(a,k)):a.g.reject(new gp("INTERNAL_ERROR","OAuth URL not provided."))}}
function Pq(a,b){var c=Ub(b,"completionInfo","consent","code")||"",d=Uq(b);d=new Dq({consentText:d});d.G("dialogPrimary",function(){Hq(a);Iq(a,"PROVIDER_CONSENT",{credential:{consentCode:c}})});
d.G("dialogCancel",function(){a.cancel()});
Jq(a,d)}
function Kq(a,b){var c=new hq({errorType:b.code});c.G("dialogCancel",function(){a.cancel()});
Jq(a,c)}
function Qq(a,b){var c=Ub(b,"serviceInfo","name")||"",d=Rq(b);d?"REDIRECT"!==a.request.Qe&&a.D?(c=new iq({serviceName:c}),c.G("dialogPrimary",function(){Wq(a,d)}),c.G("dialogCancel",function(){a.cancel()}),Jq(a,c)):Wq(a,d):a.g.reject(new gp("INTERNAL_ERROR","OAuth URL not provided."))}
function Jq(a,b){a.j=b;b.za();a.l=new sp}
function Hq(a){a.l&&(a.l.close(),a.l=null);a.j&&(a.j.dispose(),a.j=null)}
function Uq(a){var b=a.serviceInfo||{};a=Ub(a,"completionInfo","consent")||{};b=b={tos_url:b.tosUrl,privacy_policy_url:b.privacyPolicyUrl,learn_more_url:a.learnMoreUrl};a=(a.text||"").split(jp);for(var c=[],d=0;d<a.length;d++){var e=a[d].match(kp);if(e){var f=e[1];e=e[2];(e=ip.has(e)&&b[e])?(f=Pd("A",{href:e,target:"_blank","class":"goi-link"},f),c.push(f)):c.push(Id(f))}else c.push(Id(a[d]))}return Vd(c)}
function Wq(a,b){"REDIRECT"===a.request.Qe?window.location.assign(b):Xq(a,b)}
function Xq(a,b){a.C.open(b,"width=500,height=700,\n        top="+Math.max((window.screen.availHeight-700)/2,0)+",left="+Math.max((window.screen.availWidth-500)/2,0)).then(function(c){Hq(a);"access_denied"===c.error?a.g.reject(new gp("USER_CANCELLED")):c.error?a.g.reject(new gp("INTERNAL_ERROR")):Iq(a,"APP_AUTH",{credential:{redirectState:c.redirect_state}})},function(c){Hq(a);
c&&"POPUP_BLOCKED"===c.error.code?a.g.reject(new gp("POPUP_BLOCKED")):a.g.reject(new gp("USER_CANCELLED"))})}
function Vq(a,b,c){var d=new zq({errorEnterPhoneNumber:c});d.G("dialogPrimary",function(){var e=Aq(d)||"",f=b.gdiStateData;Hq(a);Jq(a,new sq);wp(a.service,"/v1/verify/phone:start","POST",{Ro:f,phoneNumber:e}).then(function(g){Hq(a);Yq(a,b,{phoneNumber:e,gdiStateData:g.gdiStateData})},function(g){Hq(a);
"INVALID_REQUEST"===g.code?Vq(a,b,!0):Kq(a,g)})});
d.G("dialogBack",function(){Hq(a);Oq(a,b,"")});
Jq(a,d)}
function Yq(a,b,c){var d=new Bq({phoneNumber:c.phoneNumber,incorrectVerificationCode:c.incorrectVerificationCode});d.G("dialogPrimary",function(){var e=Cq(d)||"";Hq(a);var f=c.gdiStateData;Jq(a,new sq);wp(a.service,"/v1/verify/phone:finish","POST",{Ro:f,code:e}).then(function(g){Hq(a);g=g.gdiStateData;var k=Sq(b),l=c.phoneNumber||"";0===k.length?k=[l]:pb(k,0,0,l);c.phoneNumbers=k;c.gdiStateData=g;Zq(a,b,c)},function(g){Hq(a);
"INVALID_REQUEST"===g.code?(c.incorrectVerificationCode=!0,Yq(a,b,c)):(c.incorrectVerificationCode=!1,Kq(a,g))})});
d.G("dialogBack",function(){Hq(a);Vq(a,b,!1)});
Jq(a,d)}
function Zq(a,b,c){var d=Ub(b,"serviceInfo","name")||"",e=Uq(b),f=new jq({serviceName:d,consentText:e,phoneNumbers:c.phoneNumbers,Ld:c.selectedPhoneNumber});f.G("dialogPrimary",function(){var g=kq(f),k=Ub(b,"completionInfo","consent","code")||"";Hq(a);Iq(a,"ACCOUNT_CREATION",{credential:{accountCreationInfo:{phoneNumber:g,phoneNumberVerified:"true"},consentCode:k},gdiStateData:c.gdiStateData})});
f.G("addPhoneNumber",function(){Hq(a);Vq(a,b,!1)});
f.G("changePhoneNumber",function(){var g=kq(f);Hq(a);c.selectedPhoneNumber=g;Zq(a,b,c)});
f.G("dialogCancel",function(){a.cancel()});
Jq(a,f)}
;function $q(a,b,c,d){up.call(this,a,b,c,d)}
ra($q,up);
$q.prototype.A=function(){var a=this,b="TOKEN_REQUESTED";if(!this.request.Po){var c=this.yh.og(this.request.serviceId,this.request.yf);if(c)return xk({status:"COMPLETE",token:c})}c={};this.request.Ye&&!Ic(this.request.Ye)&&(c.extraRedirectState=this.request.Ye);this.request.Kc&&!Ic(this.request.Kc)&&(c.completionUrl=this.request.Kc);var d=hp();d&&"REDIRECT"===this.request.Qe?(b="APP_AUTH",c={credential:{redirectState:d}}):c.forceRefresh=!!this.request.Po;return vp(this,b,c).then(function(e){var f=e.gdiState;
if("COMPLETE"===f)return xp(a,e);if(f)return ar(a,e);throw new gp("INTERNAL_ERROR");})};
function ar(a,b){return{status:"NEEDS_UI",Wk:function(c){return(new Fq(b,!!c,a.request,a.service,a.yh,a.options)).fetch()}}}
;function br(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function cr(a){return dr(new er(void 0),a)}
function er(a){this.g=a}
function dr(a,b){var c=[];fr(a,b,c);return c.join("")}
function fr(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],fr(a,a.g?a.g.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),gr(d,c),c.push(":"),fr(a,a.g?a.g.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":gr(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var hr={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ir=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function gr(a,b){b.push('"',a.replace(ir,function(c){var d=hr[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),hr[c]=d);return d}),'"')}
;function jr(a,b,c,d,e,f,g,k,l){I.call(this);this.g=null;this.L=!1;this.D=Ek();this.l=[];this.F=a?je(a):null;this.K=null;!d&&b&&(this.K=b);this.O=c||null;this.A=!d;this.B=null!=e?e:null;this.j=f||null;this.R=!!g;this.M=k||null;this.C=null!=l?l:null}
ra(jr,I);jr.prototype.init=function(){var a=w(function(c){this.g=c;var d=u("auth",c);u("client.request",c)&&d?this.P():c.load("client",w(this.P,this))},this),b=kr("gapi");
b?a(b.gapi):lr(this,a);return this.D.g};
function kr(a){for(var b=window,c=u(a,b);!c&&b!=window.top&&mr(b.parent,a);)b=b.parent,c=u(a,b);return c?b:null}
function mr(a,b){try{return!!a&&null!=a.location.href&&mf(a,b)}catch(c){return!1}}
function lr(a,b){var c=kr("gapi_onload");if(c){var d=c.gapi_onload;c.gapi_onload=function(){d();b(c.gapi)}}else{window.gapi_onload=function(){b(window.gapi)};
var e=uj("SCRIPT");ee(e,nr);a.M&&Lj(e,cr(a.M));document.getElementsByTagName("head")[0].appendChild(e)}}
jr.prototype.P=function(){for(var a=0;a<this.l.length;a++)this.l[a].Lv.resolve(or(this,this.l[a].requestData));this.L=!0;this.D.resolve(this.g)};
function pr(a,b){if(a.L)return or(a,b);var c=Ek();a.l.push({requestData:b,Lv:c});return c.g}
function or(a,b){var c=u("config.get",a.g);if(!a.A){var d=c("googleapis.config/auth/useFirstPartyAuth");var e=c("googleapis.config/auth/useOriginToken")}var f;null!=a.B&&(f=c("client/cors"));var g;null!=a.C&&(g=c("client/xd4"));try{var k=u("config.update",a.g);a.A||(k("googleapis.config/auth/useFirstPartyAuth",!1),k("googleapis.config/auth/useOriginToken",!1));null!=a.B&&k("client/cors",a.B);null!=a.C&&k("client/xd4",a.C);var l=qr(a);b.headers&&ec(l,b.headers);var m={headers:l,root:a.O,path:b.path,
method:b.method,body:b.body},n=b.params||{};a.F&&!a.j?ec(n,{key:a.F}):a.j&&ec(n,{key:null});Xb(n)||(m.params=n);var t=xk(u("client.request",a.g)(m));b.Ea&&t.then(function(r){b.Ea.apply(null,[r.result,r])},function(r){b.Ea.apply(null,[r.result,
r])});
return t}finally{c=u("config.update",a.g),a.A||(c("googleapis.config/auth/useFirstPartyAuth",d),c("googleapis.config/auth/useOriginToken",e)),null!=a.B&&c("client/cors",f),null!=a.C&&c("client/xd4",g)}}
function qr(a){if(a.A){if(a.j)return{Authorization:"Bearer "+a.j};var b=u("auth.getAuthHeaderValueForFirstParty",a.g);return{Authorization:a.R?b([]):b(),"X-Goog-AuthUser":a.K}}return{}}
jr.prototype.refreshToken=function(a){this.j=a};
var nr=Dc(oc("https://apis.google.com/js/client.js"));var rr={On:jr};function sr(a,b){this.g=a;this.j=b}
function tr(a){function b(e){return new rr.On(a.apiKey,a.Pf,e&&(Fc(e,"http://")||Fc(e,"https://")?e:"https://"+e),!1,!0,a.tl,!!a.apiKey)}
var c=b(a.kj||"oauthintegrations.googleapis.com"),d=b(a.un);return c.init().then(function(){return d.init()}).then(function(){return new sr(c,d)})}
function wp(a,b,c,d){var e={path:b,method:c};d&&("POST"===c?e.body=JSON.stringify(d):e.params=d);return Jk(xk().then(function(){return pr(a.g,e)}).then(function(f){return f.result}),function(f){throw ur(f.result);
})}
function ur(a){if(!a||!a.error)return new gp("UNKNOWN");a=a.error;return new gp(vr[a.code]||"UNKNOWN","("+a.code+"): "+(a.message||""))}
function Mq(a){var b={path:"/oauth2/v3/userinfo",method:"GET"};return Jk(xk().then(function(){return pr(a.j,b)}).then(function(c){if(!c.result)throw new gp("NETWORK_ERROR");
return{accountId:c.result.sub,username:c.result.email,displayName:c.result.name,photoUrl:c.result.picture}}),function(c){throw ur(c.result);
})}
var vr={"-1":"NETWORK_ERROR",409:"ABORTED",499:"CANCELLED",504:"DEADLINE_EXCEEDED",400:"INVALID_REQUEST",404:"NOT_FOUND",403:"PERMISSION_DENIED",429:"RESOURCE_EXHAUSTED",401:"UNAUTHENTICATED",503:"UNAVAILABLE",501:"UNIMPLEMENTED",500:"UNKNOWN"};var wr={Pn:$q};function xr(a){this.g=a||{};this.l=this.g.yh||new qp;this.g.Th=!!this.g.Th||!this.g.tn;this.g.tn=this.g.tn||new tp;this.j=tr({apiKey:this.g.apiKey,Pf:this.g.Pf||(this.g.apiKey?"0":void 0),tl:this.g.tl,kj:this.g.kj,un:this.g.un})}
function yr(a,b){return a.j.then(function(c){return(new wr.Pn(b,c,a.l,a.g)).fetch()})}
function zr(a,b){return a.j.then(function(c){var d=a.g.bucket,e={serviceId:b.serviceId};d&&(e["header.bucket"]=d);return wp(c,"/v1/associatedAccounts","GET",e)}).then(function(c){return fb(c.associatedAccounts||[],function(d){return{accountId:d.associatedAccountInfo.accountId}})})}
function Ar(a,b){return a.j.then(function(c){var d=a.g.bucket,e=null;d&&(e={"header.bucket":d});return wp(c,"/v1/associatedAccounts/"+b.accountId,"DELETE",e)}).then(function(){})}
;var Br=So(Wo,"perf",Uo());So(Br,"g",Uo());var Cr=So(Br,"i",Uo());So(Br,"r",[]);Uo();Uo();function Dr(a,b,c){b&&0<b.length&&(b=Er(b),c&&0<c.length&&(b+="___"+Er(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=So(Cr,"_p",Uo()),So(b,c,Uo())[a]=(new Date).getTime(),b=Br.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Er(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Fr=Uo(),Gr=[];function Hr(a){throw Error("Bad hint"+(a?": "+a:""));}
Gr.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Wo[b]=So(Wo,b,[]).concat(c):So(Wo,b,c)}if(b=a.u)a=So(Wo,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Ir=/^(\/[a-zA-Z0-9_\-]+)+$/,Jr=[/\/amp\//,/\/amp$/,/^\/amp$/],Kr=/^[a-zA-Z0-9\-_\.,!]+$/,Lr=/^gapi\.loaded_[0-9]+$/,Mr=/^[a-zA-Z0-9,._-]+$/;function Nr(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Fr[f],k=null;g?k=g(e,b,c,d):Hr("no hint processor for: "+f);k||Hr("failed to generate load url");b=k;c=b.match(Or);(d=b.match(Pr))&&1===d.length&&Qr.test(b)&&c&&1===c.length||Hr("failed sanity: "+a);return k}
function Rr(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=Sr(a);Lr.test(c)||Hr("invalid_callback");b=Tr(b);d=d&&d.length?Tr(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.dk?"/am="+e(a.dk):"",a.Xm?"/rs="+e(a.Xm):"",a.Nn?"/t="+e(a.Nn):"","/cb=",e(c)].join("")}
function Sr(a){"/"!==a.charAt(0)&&Hr("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Hr("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");Ir.test(b)||Hr("invalid_prefix");c=0;for(d=Jr.length;c<d;++c)Jr[c].test(b)&&Hr("invalid_prefix");c=Ur(a,
"k",!0);d=Ur(a,"am");e=Ur(a,"rs");a=Ur(a,"t");return{pathPrefix:b,version:c,dk:d,Xm:e,Nn:a}}
function Tr(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Mr.test(e)&&b.push(e)}return b.join(",")}
function Ur(a,b,c){a=a[b];!a&&c&&Hr("missing: "+b);if(a){if(Kr.test(a))return a;Hr("invalid: "+b)}return null}
var Qr=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Pr=/\/cb=/g,Or=/\/\//g;function Vr(){var a=Xo();if(!a)throw Error("Bad hint");return a}
Fr.m=function(a,b,c,d){(a=a[0])||Hr("missing_hint");return"https://apis.google.com"+Rr(a,b,c,d)};
var Wr=decodeURI("%73cript"),Xr=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Yr(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Zr(){var a=Wo.nonce;return void 0!==a?a&&a===String(a)&&a.match(Xr)?a:Wo.nonce=null:Oo.querySelector?(a=Oo.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(Xr)?Wo.nonce=a:Wo.nonce=null):null:null}
function $r(a){if("loading"!=Oo.readyState)as(a);else{var b=Zr(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+Wr+' src="'+encodeURI(a)+'"'+c+"></"+Wr+">";Oo.write(bs?bs.createHTML(a):a)}}
function as(a){var b=Oo.createElement(Wr);b.setAttribute("src",bs?bs.createScriptURL(a):a);a=Zr();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Oo.getElementsByTagName(Wr)[0])?a.parentNode.insertBefore(b,a):(Oo.head||Oo.body||Oo.documentElement).appendChild(b)}
function cs(a,b){var c=b&&b._c;if(c)for(var d=0;d<Gr.length;d++){var e=Gr[d][0],f=Gr[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function ds(a,b,c){es(function(){var d=b===Xo()?So(Vo,"_",Uo()):Uo();d=So(Zo(b),"_",d);a(d)},c)}
function fs(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);cs(a,c);var d=a?a.split(":"):[],e=c.h||Vr(),f=So(Wo,"ah",Uo());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var l=k.split(".");l=f[k]||f[l[1]&&"ns:"+l[0]||""]||e;var m=g.length&&g[g.length-1]||null,n=m;m&&m.hint==l||(n={hint:l,features:[]},g.push(n));n.features.push(k)}var t=g.length;if(1<t){var r=c.callback;r&&(c.callback=function(){0==--t&&r()})}for(;d=g.shift();)gs(d.features,c,d.hint)}else gs(d||[],c,e)}
function gs(a,b,c){function d(ia,xb){if(t)return 0;No.clearTimeout(n);r.push.apply(r,B);var mc=((Vo||{}).config||{}).update;mc?mc(f):f&&So(Wo,"cu",[]).push(f);if(xb){Dr("me0",ia,v);try{ds(xb,c,m)}finally{Dr("me1",ia,v)}}return 1}
a=To(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var n=null,t=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=So(Zo(c),"r",[]).sort();var r=So(Zo(c),"L",[]).sort(),v=[].concat(l);0<g&&(n=No.setTimeout(function(){t=!0;k()},g));
var B=Yr(a,r);if(B.length){B=Yr(a,l);var E=So(Wo,"CP",[]),X=E.length;E[X]=function(ia){function xb(){var sd=E[X+1];sd&&sd()}
function mc(sd){E[X]=null;d(B,ia)&&Yo(function(){e&&e();sd()})}
if(!ia)return 0;Dr("ml1",B,v);0<X&&E[X-1]?E[X]=function(){mc(xb)}:mc(xb)};
if(B.length){var fa="loaded_"+Wo.I++;Vo[fa]=function(ia){E[X](ia);Vo[fa]=null};
a=Nr(c,B,"gapi."+fa,l);l.push.apply(l,B);Dr("ml0",B,v);b.sync||No.___gapisync?$r(a):as(a)}else E[X](Qo)}else d(B)&&e&&e()}
var bs=Xa("goog#gapi");function es(a,b){if(Wo.hee&&0<Wo.hel)try{return a()}catch(c){b&&b(c),Wo.hel--,fs("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Vo.load=function(a,b){return es(function(){return fs(a,b)})};function hs(){this.j=-1}
;function is(){this.j=64;this.g=[];this.C=[];this.F=[];this.A=[];this.A[0]=128;for(var a=1;a<this.j;++a)this.A[a]=0;this.B=this.l=0;this.reset()}
z(is,hs);is.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.B=this.l=0};
function js(a,b,c){c||(c=0);var d=a.F;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],k=a.g[3],l=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):
(f=c^g^k,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+k&4294967295;a.g[4]=a.g[4]+l&4294967295}
is.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.j,d=0,e=this.C,f=this.l;d<b;){if(0==f)for(;d<=c;)js(this,a,d),d+=this.j;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.j){js(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.j){js(this,e);f=0;break}}this.l=f;this.B+=b}};
is.prototype.digest=function(){var a=[],b=8*this.B;56>this.l?this.update(this.A,56-this.l):this.update(this.A,this.j-(this.l-56));for(var c=this.j-1;56<=c;c--)this.C[c]=b&255,b/=256;js(this,this.C);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function ks(a,b){this.$parse_=a;this.g=b}
ks.$inject=["$parse","prefix"];function ls(a,b,c,d){d.Aa&&c.hasOwnProperty("ngDisabled")&&b.$watch(c.ngDisabled,function(e){d.Aa(void 0===e||!e)});
d.aw&&c.hasOwnProperty(a.g+"ModelValue")&&b.$watch(c[a.g+"ModelValue"],function(){});
d.H&&c.hasOwnProperty("tabindex")&&c.$observe("tabindex",function(e){d.H().setAttribute("tabindex",e)});
c.hasOwnProperty(a.g+"ComponentAs")&&a.register(b,c[a.g+"ComponentAs"],d);ms(a,b,c,d);b.$on("$destroy",function(){if(Na(d.H)){var e=d.H();if(e){var f=angular.element(e);Na(f.remove.$original)?f.remove.$original.apply(f):ns(e)}}d.dispose()})}
function ns(a){var b=angular.element(a);b.unbind();b.removeData();b=0;for(a=a.childNodes||[];b<a.length;b++)ns(a[b])}
function ms(a,b,c,d){Nb(c,function(e,f){if(Fc(f,a.g+"On")){var g=f.slice((a.g+"On").length);g=g[0].toLowerCase()+g.slice(1);var k=a.$parse_(c[f]);os(b,d,g,function(l){ps(b,k,l)})}})}
function ps(a,b,c){qs(a,function(){b(a,{$event:c})})}
function qs(a,b){a.$root.$$phase?a.$eval(b):a.$apply(b)}
function os(a,b,c,d){var e=K(b,c,d);a.$on("$destroy",function(){Ci(e)})}
ks.prototype.register=function(a,b,c){b=this.$parse_(b).assign;if(!b)throw Error("Angular scope expression non-assignable.");b(a,c)};
var rs=1<angular.version.major||2<=angular.version.minor?1:-1;angular.module("ng.g.GoogAdapter",[]).factory("gGoogAdapter",["$parse",function(a){return new ks(a,"g")}]);var ss=angular.module("jfkCommon",[]);ss.factory("jfkCommon",["$parse",function(a){return new ks(a,"jfk")}]);
ss.M=rs;var ts;fc("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function us(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function vs(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(ts||(ts={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=ts,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function ws(a,b){var c="";b&&(c=b.id);vs(a,"activedescendant",c)}
;function xs(a,b){this.g=a||[];this.j=!b}
xs.prototype.ih=function(a,b,c){if(this.j){var d=this.g,e=ys(a,b,d);0==e.length&&(e=zs(a,b,d));b=e}else b=ys(a,b,this.g);c(a,b)};
function ys(a,b,c){var d=[];if(""!=a){a=qe(a);a=new RegExp("(^|\\W+)"+a,"i");for(var e=0;e<c.length&&d.length<b;e++){var f=c[e];String(f).match(a)&&d.push(f)}}return d}
function zs(a,b,c){for(var d=[],e=0;e<c.length;e++){var f=c[e],g=a.toLowerCase(),k=String(f).toLowerCase(),l=0;if(-1!=k.indexOf(g))l=parseInt((k.indexOf(g)/4).toString(),10);else for(var m=g.split(""),n=-1,t=10,r=0,v;v=m[r];r++)v=k.indexOf(v),v>n?(n=v-n-1,n>t-5&&(n=t-5),l+=n,n=v):(l+=t,t+=5);l<6*g.length&&d.push({iw:f,score:l,index:e})}d.sort(function(B,E){var X=B.score-E.score;return 0!=X?X:B.index-E.index});
a=[];for(r=0;r<b&&r<d.length;r++)a.push(d[r].iw);return a}
;function As(a,b,c){L.call(this);this.L=a;this.K=c;this.j=b;K(b,["hilite","select","canceldismiss","dismiss"],this.handleEvent,!1,this);this.A=null;this.l=[];this.B=-1;this.g=0;this.C=this.D=null;this.O={}}
z(As,L);h=As.prototype;h.gj=10;h.kk=!0;h.Qh=!1;h.Kj=!1;h.og=function(){return this.A};
h.handleEvent=function(a){var b=this.L;if(a.target==this.j)switch(a.type){case "hilite":this.Fc(a.row);break;case "select":var c=!1;if("number"===typeof a.row){a=a.row;var d=this.l[Bs(this,a)];c=!!d&&b.Pg&&b.Pg(d);d&&!c&&this.B!=a&&this.Fc(a)}c||this.Jd();break;case "canceldismiss":Cs(this);break;case "dismiss":Ds(this)}};
h.ng=function(){return this.D};
h.Ee=function(a){this.D=a};
function Es(a){for(var b=a.g+a.l.length-1,c=a.B,d=0;d<a.l.length;d++){if(c>=a.g&&c<b)c++;else if(-1==c)c=a.g;else{a.Qh&&c==b&&a.Fc(-1);break}if(a.Fc(c))break}}
h.Fc=function(a){var b=Bs(this,a),c=this.l[b];return c&&this.L.Pg&&this.L.Pg(c)?!1:(this.B=a,this.j.Fc(a),-1!=b)};
h.Jd=function(){var a=Bs(this,this.B);if(-1!=a){var b=this.l[a],c=this.K;if(c.pa){var d=b.toString();if(c.l){var e=Fs(c,c.pa.value,Gs(c.pa)[0]),f=Hs(c,c.pa.value);c.L&&!c.L.test(d)&&(d=d.replace(/[\s\xa0]+$/,"")+c.M);0==e||Ic(f[e-1])||(d=" "+d);e==f.length-1&&(d+=" ");if(d!=f[e]){f[e]=d;d=c.pa;(sf||C&&Jf("9"))&&d.blur();d.value=f.join("");for(var g=0,k=0;k<=e;k++)g+=f[k].length;d.focus();e=g;f=c.pa;d=e;Is(f)?f.selectionStart=d:C&&!Jf("9")&&(g=Js(f),k=g[0],k.inRange(g[1])&&(d=Ks(f,d),k.collapse(!0),
k.move("character",d),k.select()));f=c.pa;Is(f)?f.selectionEnd=e:C&&!Jf("9")&&(g=Js(f),d=g[1],g[0].inRange(d)&&(e=Ks(f,e),f=Ks(f,Gs(f)[0]),d.collapse(!0),d.moveEnd("character",e-f),d.select()))}}else c.setValue(d);c.wj=!0}this.Kj?(this.A=null,Ds(this)):this.dismiss();this.dispatchEvent({type:"update",row:b,index:a});this.Kj&&this.K.update(!0);return!0}this.dismiss();this.dispatchEvent({type:"update",row:null,index:null});return!1};
h.dismiss=function(){this.B=-1;this.A=null;this.g+=this.l.length;this.l=[];window.clearTimeout(this.C);this.C=null;this.j.dismiss();this.dispatchEvent("suggestionsupdate");this.dispatchEvent("dismiss")};
function Ds(a){a.C||(a.C=window.setTimeout(w(a.dismiss,a),100))}
h.Tl=function(){return this.C?(window.clearTimeout(this.C),this.C=null,!0):!1};
function Cs(a){a.Tl()||window.setTimeout(w(a.Tl,a),10)}
h.N=function(){As.J.N.call(this);delete this.O;this.j.dispose();this.K.dispose();this.L=null};
h.wp=function(a,b,c){this.A==a&&this.xf(b,c)};
h.xf=function(a,b){var c="object"==La(b)&&b,d=(c?c.sy():b)?Bs(this,this.B):-1;this.g+=this.l.length;this.l=a;for(var e=[],f=0;f<a.length;++f)e.push({id:this.g+f,data:a[f]});f=null;this.D&&(f=this.O[Pa(this.D)]||this.D);this.j.jo=f;this.j.xf(e,this.A,this.D);f=this.kk;c&&void 0!==c.Uo()&&(f=c.Uo());this.B=-1;(f||0<=d)&&0!=e.length&&this.A&&(0<=d?this.Fc(this.g+d):Es(this));this.dispatchEvent("suggestionsupdate")};
function Bs(a,b){var c=b-a.g;return 0>c||c>=a.l.length?-1:c}
h.vp=function(a){var b=this.K;b.Fg.apply(b,arguments)};
h.update=function(a){this.K.update(a)};function Gs(a){var b=0,c=0;if(Is(a))b=a.selectionStart,c=-1;else if(C&&!Jf("9")){var d=Js(a),e=d[0];d=d[1];if(e.inRange(d)){e.setEndPoint("EndToStart",d);if("textarea"==a.type){d.duplicate();b=a=e.text;for(c=!1;!c;)0==e.compareEndPoints("StartToEnd",e)?c=!0:(e.moveEnd("character",-1),e.text==a?b+="\r\n":c=!0);e=[b.length,-1];return e}b=e.text.length;c=-1}}return[b,c]}
function Js(a){var b=a.ownerDocument||a.document,c=b.selection.createRange();"textarea"==a.type?(b=b.body.createTextRange(),b.moveToElementText(a)):b=a.createTextRange();return[b,c]}
function Ks(a,b){"textarea"==a.type&&(b=a.value.substring(0,b).replace(/(\r\n|\r|\n)/g,"\n").length);return b}
function Is(a){try{return"number"==typeof a.selectionStart}catch(b){return!1}}
;function Ls(a,b){L.call(this);a&&Ms(this,a,b)}
z(Ls,L);h=Ls.prototype;h.ie=null;h.Rg=null;h.Yi=null;h.Sg=null;h.ub=-1;h.oc=-1;h.Rh=!1;
var Ns={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Os={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Ps=!tf||Jf("525"),Qs=vf&&sf;h=Ls.prototype;
h.qp=function(a){if(tf||qf)if(17==this.ub&&!a.ctrlKey||18==this.ub&&!a.altKey||vf&&91==this.ub&&!a.metaKey)this.oc=this.ub=-1;-1==this.ub&&(a.ctrlKey&&17!=a.keyCode?this.ub=17:a.altKey&&18!=a.keyCode?this.ub=18:a.metaKey&&91!=a.keyCode&&(this.ub=91));Ps&&!vq(a.keyCode,this.ub,a.shiftKey,a.ctrlKey,a.altKey,a.metaKey)?this.handleEvent(a):(this.oc=wq(a.keyCode),Qs&&(this.Rh=a.altKey))};
h.kq=function(a){this.oc=this.ub=-1;this.Rh=a.altKey};
h.handleEvent=function(a){var b=a.Ba,c=b.altKey;if(C&&"keypress"==a.type){var d=this.oc;var e=13!=d&&27!=d?b.keyCode:0}else(tf||qf)&&"keypress"==a.type?(d=this.oc,e=0<=b.charCode&&63232>b.charCode&&uq(d)?b.charCode:0):pf&&!tf?(d=this.oc,e=uq(d)?b.keyCode:0):("keypress"==a.type?(Qs&&(c=this.Rh),b.keyCode==b.charCode?32>b.keyCode?(d=b.keyCode,e=0):(d=this.oc,e=b.charCode):(d=b.keyCode||this.oc,e=b.charCode||0)):(d=b.keyCode||this.oc,e=b.charCode||0),vf&&63==e&&224==d&&(d=191));var f=d=wq(d);d?63232<=
d&&d in Ns?f=Ns[d]:25==d&&a.shiftKey&&(f=9):b.keyIdentifier&&b.keyIdentifier in Os&&(f=Os[b.keyIdentifier]);sf&&Ps&&"keypress"==a.type&&!vq(f,this.ub,a.shiftKey,a.ctrlKey,c,a.metaKey)||(a=f==this.ub,this.ub=f,b=new Rs(f,e,a,b),b.altKey=c,this.dispatchEvent(b))};
h.H=function(){return this.ie};
function Ms(a,b,c){a.Sg&&Ss(a);a.ie=b;a.Rg=K(a.ie,"keypress",a,c);a.Yi=K(a.ie,"keydown",a.qp,c,a);a.Sg=K(a.ie,"keyup",a.kq,c,a)}
function Ss(a){a.Rg&&(Ci(a.Rg),Ci(a.Yi),Ci(a.Sg),a.Rg=null,a.Yi=null,a.Sg=null);a.ie=null;a.ub=-1;a.oc=-1}
h.N=function(){Ls.J.N.call(this);Ss(this)};
function Rs(a,b,c,d){ei.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}
z(Rs,ei);function Ts(a,b,c,d){I.call(this);d=d||150;this.l=null!=c?c:!0;this.B=a||",;";this.M=this.B.substring(0,1);a=this.l?"[\\s"+this.B+"]+":"[\\s]+";this.K=new RegExp("^"+a+"|"+a+"$","g");this.L=new RegExp("\\s*["+this.B+"]$");this.D=b||"";this.P=this.l;this.ea=0<d?new Tk(d):null;this.j=new qn(this);this.C=new qn(this);this.A=new Ls;this.F=-1}
z(Ts,I);var Us=(Pf||Qf)&&!Jf("533.17.9");h=Ts.prototype;h.Lh=null;h.pa=null;h.dj="";h.Yc=!1;h.wj=!1;h.setValue=function(a){this.pa.value=a};
h.Fg=function(a){for(var b=0;b<arguments.length;b++){var c=arguments[b];Gj(c)&&(us(c,"combobox"),vs(c,"autocomplete","list"));this.j.G(c,"focus",this.Ei);this.j.G(c,"blur",this.Di);if(!this.pa&&(this.C.G(c,"keydown",this.Cm),Gj(c))){var d=aj(c);bk(d)==c&&Vs(this,c)}}};
h.nl=function(a){for(var b=0;b<arguments.length;b++){var c=arguments[b];Gj(c)&&(c.removeAttribute("role"),c.removeAttribute("aria-autocomplete"));c==this.pa&&this.Di();this.j.Z(c,"focus",this.Ei);this.j.Z(c,"blur",this.Di);this.pa||this.C.Z(c,"keydown",this.Cm)}};
h.N=function(){Ts.J.N.call(this);null!=this.Lh&&window.clearTimeout(this.Lh);this.j.dispose();delete this.j;this.C.dispose();this.A.dispose();Th(this.ea)};
h.fb=function(a){switch(a.keyCode){case 40:if(this.g.j.isVisible())return Es(this.g),a.preventDefault(),!0;if(!this.l)return this.update(!0),a.preventDefault(),!0;break;case 38:if(this.g.j.isVisible()){a:for(var b=this.g,c=b.B,d=0;d<b.l.length;d++){if(c>b.g)c--;else{b.Qh&&c==b.g&&b.Fc(-1);break}if(b.Fc(c))break a}a.preventDefault();return!0}break;case 9:if(!this.g.j.isVisible()||a.shiftKey)this.g.dismiss();else if(this.update(),this.g.Jd()&&this.P)return a.preventDefault(),!0;break;case 13:if(this.g.j.isVisible()){if(this.update(),
this.g.Jd())return a.preventDefault(),a.stopPropagation(),!0}else this.g.dismiss();break;case 27:if(this.g.j.isVisible())return this.g.dismiss(),a.preventDefault(),a.stopPropagation(),!0;break;case 229:if(!this.Yc)return this.Yc||(this.j.G(this.pa,"keyup",this.ol),this.j.G(this.pa,"keypress",this.Dm),this.Yc=!0),!0}return Ws(this,a)};
function Ws(a,b){var c=a.l&&b.charCode&&-1!=a.B.indexOf(String.fromCharCode(b.charCode));c&&a.update();return c&&a.g.Jd()?(b.preventDefault(),!0):!1}
h.jq=function(){return!1};
h.Ei=function(a){Vs(this,a.target||null)};
function Vs(a,b){tn(a.C);a.g&&Cs(a.g);b!=a.pa&&(a.pa=b,a.ea&&(a.ea.start(),a.j.G(a.ea,"tick",a.ql)),a.dj=a.pa.value,Ms(a.A,a.pa),a.j.G(a.A,"key",a.pl),a.j.G(a.pa,"mousedown",a.Em),C&&a.j.G(a.pa,"keypress",a.Bm))}
h.Di=function(){Us?this.Lh=window.setTimeout(w(this.Sm,this),0):this.Sm()};
h.Sm=function(){this.pa&&(this.j.Z(this.A,"key",this.pl),Ss(this.A),this.j.Z(this.pa,"keyup",this.jq),this.j.Z(this.pa,"mousedown",this.Em),C&&this.j.Z(this.pa,"keypress",this.Bm),this.Yc&&Xs(this),this.pa=null,this.ea&&(this.ea.stop(),this.j.Z(this.ea,"tick",this.ql)),this.g&&Ds(this.g))};
h.ql=function(){this.update()};
h.Cm=function(a){this.Ei(a)};
h.pl=function(a){this.F=a.keyCode;this.g&&this.fb(a)};
h.Dm=function(){this.Yc&&229!=this.F&&Xs(this)};
h.ol=function(a){this.Yc&&(13==a.keyCode||77==a.keyCode&&a.ctrlKey)&&Xs(this)};
h.Em=function(){};
function Xs(a){a.Yc&&(a.Yc=!1,a.j.Z(a.pa,"keypress",a.Dm),a.j.Z(a.pa,"keyup",a.ol))}
h.Bm=function(a){Ws(this,a)};
h.update=function(a){if(this.pa&&(a||this.pa.value!=this.dj)){if(a||!this.wj){a=Gs(this.pa)[0];var b=this.pa.value;a=Hs(this,b)[Fs(this,b,a)];a=this.K?String(a).replace(this.K,""):a;if(this.g){this.g.Ee(this.pa);b=this.g;var c=this.pa.value;b.A!=a&&(b.A=a,b.L.ih(b.A,b.gj,w(b.wp,b),c),Cs(b))}}this.dj=this.pa.value}this.wj=!1};
function Fs(a,b,c){a=Hs(a,b);if(c==b.length)return a.length-1;for(var d=b=0,e=0;d<a.length&&e<=c;d++)e+=a[d].length,b=d;return b}
function Hs(a,b){if(!a.l)return[b];for(var c=String(b).split(""),d=[],e=[],f=0,g=!1;f<c.length;f++)a.D&&-1!=a.D.indexOf(c[f])?(g||(d.push(e.join("")),e.length=0),e.push(c[f]),g=!g):g||-1==a.B.indexOf(c[f])?e.push(c[f]):(e.push(c[f]),d.push(e.join("")),e.length=0);d.push(e.join(""));return d}
;function Ys(a){switch(a){case 0:return"No Error";case 1:return"Access denied to content document";case 2:return"File not found";case 3:return"Firefox silently errored";case 4:return"Application custom error";case 5:return"An exception occurred";case 6:return"Http response at 400 or 500 level";case 7:return"Request was aborted";case 8:return"Request timed out";case 9:return"The resource is not available offline";default:return"Unrecognized error code"}}
;function Zs(){}
Zs.prototype.g=null;Zs.prototype.getOptions=function(){var a;(a=this.g)||(a={},$s(this)&&(a[0]=!0,a[1]=!0),a=this.g=a);return a};var at;function bt(){}
z(bt,Zs);function ct(a){return(a=$s(a))?new ActiveXObject(a):new XMLHttpRequest}
function $s(a){if(!a.j&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.j=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.j}
at=new bt;function dt(a){L.call(this);this.headers=new Wn;this.O=a||null;this.j=!1;this.P=this.g=null;this.ja=this.F="";this.B=0;this.l="";this.A=this.S=this.L=this.R=!1;this.C=0;this.K=null;this.da="";this.M=this.D=!1}
z(dt,L);var et=/^https?$/i,ft=["POST","PUT"],gt=[];function ht(a,b,c,d,e,f,g){var k=new dt;gt.push(k);b&&k.G("complete",b);k.Xg("ready",k.uo);f&&(k.C=Math.max(0,f));g&&(k.D=g);k.send(a,c,d,e)}
h=dt.prototype;h.uo=function(){this.dispose();qb(gt,this)};
h.send=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.F+"; newUri="+a);b=b?b.toUpperCase():"GET";this.F=a;this.l="";this.B=0;this.ja=b;this.R=!1;this.j=!0;this.g=this.fi();this.P=this.O?this.O.getOptions():at.getOptions();this.g.onreadystatechange=w(this.Gm,this);try{vl(it(this,"Opening Xhr")),this.S=!0,this.g.open(b,String(a),!0),this.S=!1}catch(f){vl(it(this,"Error opening Xhr: "+f.message));jt(this,f);return}a=c||"";var e=this.headers.clone();
d&&fo(d,function(f,g){e.set(g,f)});
d=jb(e.Ga(),kt);c=p.FormData&&a instanceof p.FormData;!mb(ft,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,g){this.g.setRequestHeader(g,f)},this);
this.da&&(this.g.responseType=this.da);"withCredentials"in this.g&&this.g.withCredentials!==this.D&&(this.g.withCredentials=this.D);try{lt(this),0<this.C&&(this.M=mt(this.g),vl(it(this,"Will abort after "+this.C+"ms if incomplete, xhr2 "+this.M)),this.M?(this.g.timeout=this.C,this.g.ontimeout=w(this.Sb,this)):this.K=Uk(this.Sb,this.C,this)),vl(it(this,"Sending request")),this.L=!0,this.g.send(a),this.L=!1}catch(f){vl(it(this,"Send error: "+f.message)),jt(this,f)}};
function mt(a){return C&&Jf(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
function kt(a){return"content-type"==a.toLowerCase()}
h.fi=function(){return this.O?ct(this.O):ct(at)};
h.Sb=function(){"undefined"!=typeof Fa&&this.g&&(this.l="Timed out after "+this.C+"ms, aborting",this.B=8,it(this,this.l),this.dispatchEvent("timeout"),this.abort(8))};
function jt(a,b){a.j=!1;a.g&&(a.A=!0,a.g.abort(),a.A=!1);a.l=b;a.B=5;nt(a);ot(a)}
function nt(a){a.R||(a.R=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
h.abort=function(a){this.g&&this.j&&(it(this,"Aborting"),this.j=!1,this.A=!0,this.g.abort(),this.A=!1,this.B=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ot(this))};
h.N=function(){this.g&&(this.j&&(this.j=!1,this.A=!0,this.g.abort(),this.A=!1),ot(this,!0));dt.J.N.call(this)};
h.Gm=function(){this.Pb()||(this.S||this.L||this.A?pt(this):this.xu())};
h.xu=function(){pt(this)};
function pt(a){if(a.j&&"undefined"!=typeof Fa)if(a.P[1]&&4==qt(a)&&2==a.getStatus())it(a,"Local request error detected and ignored");else if(a.L&&4==qt(a))Uk(a.Gm,0,a);else if(a.dispatchEvent("readystatechange"),4==qt(a)){it(a,"Request complete");a.j=!1;try{a.se()?(a.dispatchEvent("complete"),a.dispatchEvent("success")):(a.B=6,a.l=rt(a)+" ["+a.getStatus()+"]",nt(a))}finally{ot(a)}}}
function ot(a,b){if(a.g){lt(a);var c=a.g,d=a.P[0]?Ja:null;a.g=null;a.P=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}}
function lt(a){a.g&&a.M&&(a.g.ontimeout=null);a.K&&(Vk(a.K),a.K=null)}
h.isActive=function(){return!!this.g};
h.se=function(){var a=this.getStatus();a:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var b=!0;break a;default:b=!1}if(!b){if(a=0===a)a=Ce(1,String(this.F)),!a&&p.self&&p.self.location&&(a=p.self.location.protocol,a=a.substr(0,a.length-1)),a=!et.test(a?a.toLowerCase():"");b=a}return b};
function qt(a){return a.g?a.g.readyState:0}
h.getStatus=function(){try{return 2<qt(this)?this.g.status:-1}catch(a){return-1}};
function rt(a){try{return 2<qt(a)?a.g.statusText:""}catch(b){return""}}
h.mb=function(){try{return this.g?this.g.responseText:""}catch(a){return""}};
h.Vk=function(a){if(this.g){var b=this.g.responseText;a&&0==b.indexOf(a)&&(b=b.substring(a.length));a:{a=b;if(p.JSON)try{var c=p.JSON.parse(a);break a}catch(d){}c=br(a)}return c}};
h.getResponseHeader=function(a){if(this.g&&4==qt(this))return a=this.g.getResponseHeader(a),null===a?void 0:a};
h.getAllResponseHeaders=function(){return this.g&&4==qt(this)?this.g.getAllResponseHeaders()||"":""};
h.kc=function(){return this.B};
h.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};
function it(a,b){return b+" ["+a.ja+" "+a.F+" "+a.getStatus()+"]"}
;function st(a,b,c){I.call(this);this.A=a;this.B=!b;this.g=new dt(c)}
z(st,I);st.prototype.j=null;st.prototype.l=function(a,b,c){c=c.target.mb();var d=[];if(c)try{d=JSON.parse(c)}catch(e){}b(a,d)};
st.prototype.ih=function(a,b,c){var d=this.B,e=new ph(this.A);vo(e,"token",a);vo(e,"max_matches",String(b));vo(e,"use_similar",String(Number(d)));if(b=e.toString())a=w(this.l,this,a,c),this.g.isActive()&&this.g.abort(),this.j&&Ci(this.j),this.j=ui(this.g,"success",a),this.g.send(b,"GET",void 0,null)};
st.prototype.N=function(){this.g.dispose();st.J.N.call(this)};function tt(a,b,c){I.call(this);this.g=a;this.l=b||0;this.j=c;this.ib=w(this.mp,this)}
z(tt,I);h=tt.prototype;h.cf=0;h.N=function(){tt.J.N.call(this);this.stop();delete this.g;delete this.j};
h.start=function(a){this.stop();this.cf=Uk(this.ib,void 0!==a?a:this.l)};
h.stop=function(){this.isActive()&&Vk(this.cf);this.cf=0};
h.isActive=function(){return 0!=this.cf};
h.mp=function(){this.cf=0;this.g&&this.g.call(this.j)};var ut={},vt=null;function wt(a){a=Pa(a);delete ut[a];Xb(ut)&&vt&&vt.stop()}
function xt(){vt||(vt=new tt(function(){zt()},20));
var a=vt;a.isActive()||a.start()}
function zt(){var a=x();Nb(ut,function(b){At(b,a)});
Xb(ut)||xt()}
;function Bt(){L.call(this);this.g=0;this.endTime=this.startTime=null}
z(Bt,L);Bt.prototype.B=function(){this.jb("begin")};
Bt.prototype.A=function(){this.jb("end")};
Bt.prototype.Fa=function(){this.jb("finish")};
Bt.prototype.jb=function(a){this.dispatchEvent(a)};function Ct(a,b,c,d){Bt.call(this);if(!Array.isArray(a)||!Array.isArray(b))throw Error("Start and end parameters must be arrays");if(a.length!=b.length)throw Error("Start and end points must be the same length");this.C=a;this.M=b;this.duration=c;this.D=d;this.coords=[];this.l=!1;this.progress=this.L=0;this.F=null}
z(Ct,Bt);h=Ct.prototype;h.getDuration=function(){return this.duration};
h.play=function(a){if(a||0==this.g)this.progress=0,this.coords=this.C;else if(1==this.g)return!1;wt(this);this.startTime=a=x();-1==this.g&&(this.startTime-=this.duration*this.progress);this.endTime=this.startTime+this.duration;this.F=this.startTime;this.progress||this.B();this.jb("play");-1==this.g&&this.jb("resume");this.g=1;var b=Pa(this);b in ut||(ut[b]=this);xt();At(this,a);return!0};
h.stop=function(a){wt(this);this.g=0;a&&(this.progress=1);Dt(this,this.progress);this.jb("stop");this.A()};
h.N=function(){0==this.g||this.stop(!1);this.jb("destroy");Ct.J.N.call(this)};
h.destroy=function(){this.dispose()};
function At(a,b){b<a.startTime&&(a.endTime=b+a.endTime-a.startTime,a.startTime=b);a.progress=(b-a.startTime)/(a.endTime-a.startTime);1<a.progress&&(a.progress=1);a.L=1E3/(b-a.F);a.F=b;Dt(a,a.progress);1==a.progress?(a.g=0,wt(a),a.Fa(),a.A()):1==a.g&&a.lj()}
function Dt(a,b){Na(a.D)&&(b=a.D(b));a.coords=Array(a.C.length);for(var c=0;c<a.C.length;c++)a.coords[c]=(a.M[c]-a.C[c])*b+a.C[c]}
h.lj=function(){this.jb("animate")};
h.jb=function(a){this.dispatchEvent(new Et(a,this))};
function Et(a,b){J.call(this,a);this.coords=b.coords;this.x=b.coords[0];this.y=b.coords[1];this.z=b.coords[2];this.duration=b.duration;this.progress=b.progress;this.fps=b.L;this.state=b.g}
z(Et,J);function Ft(a,b,c,d,e){Ct.call(this,b,c,d,e);this.element=a}
z(Ft,Ct);Ft.prototype.j=Ja;Ft.prototype.lj=function(){this.j();Ft.J.lj.call(this)};
Ft.prototype.A=function(){this.j();Ft.J.A.call(this)};
Ft.prototype.B=function(){this.j();Ft.J.B.call(this)};
function Gt(a,b,c,d,e){if(2!=b.length||2!=c.length)throw Error("Start and end points must be 2D");Ft.call(this,a,b,c,d,e)}
z(Gt,Ft);Gt.prototype.j=function(){var a;if(a=this.l)void 0===this.K&&(this.K=Gm(this.element)),a=this.K;this.element.style[a?"right":"left"]=Math.round(this.coords[0])+"px";this.element.style.top=Math.round(this.coords[1])+"px"};
function Ht(a,b,c,d,e){if(2!=b.length||2!=c.length)throw Error("Start and end points must be 2D");Ft.call(this,a,b,c,d,e)}
z(Ht,Ft);Ht.prototype.j=function(){if(this.l){var a=this.element,b=Math.round(this.coords[0]);b=Math.max(b,0);Gm(a)?a.scrollLeft=Ym()?-b:rf&&Jf("8")?b:a.scrollWidth-b-a.clientWidth:a.scrollLeft=b}else this.element.scrollLeft=Math.round(this.coords[0]);this.element.scrollTop=Math.round(this.coords[1])};
function It(a,b,c,d,e){Ft.call(this,a,[b],[c],d,e)}
z(It,Ft);It.prototype.j=function(){this.element.style.width=Math.round(this.coords[0])+"px"};function Jt(){}
Ka(Jt);Jt.prototype.g=0;function Kt(a){return":"+(a.g++).toString(36)}
;function Lt(a,b,c,d){L.call(this);this.P=a||document.body;this.l=Zi(this.P);this.S=!a;this.g=null;this.O="";this.A=[];this.B=[];this.U=this.L=-1;this.F=!1;this.className="ac-renderer";this.K="ac-row";this.M="ac-active";this.da="ac-highlighted";this.C=b||null;this.Ra=null!=d?d:!0;this.R=!0;this.D=!1;this.qa=!!c}
z(Lt,L);h=Lt.prototype;h.H=function(){return this.g};
h.xf=function(a,b,c){this.O=b;this.A=a;this.L=-1;this.U=x();this.j=c;this.B=[];Mt(this)};
h.dismiss=function(){this.F&&(this.F=!1,Nt(this,!1),Cm(this.g,!1))};
h.show=function(){this.F||(this.F=!0,Nt(this,!0),Cm(this.g,!0))};
function Nt(a,b){a.j&&(vs(a.j,"haspopup",b),vs(a.g,"expanded",b),vs(a.j,"expanded",b),b?vs(a.j,"owns",a.g.id):(a.j.removeAttribute("aria-owns"),ws(a.j,null)))}
h.isVisible=function(){return this.F};
function Ot(a,b){var c=0<=b&&b<a.A.length?a.A[b]:void 0,d=0<=b&&b<a.B.length?a.B[b]:void 0;a.dispatchEvent({type:"rowhilite",F:d,row:c?c.data:null})&&(0<=a.L&&hn(a.B[a.L],[a.M,"active"]),a.L=b,d&&(fn(d,[a.M,"active"]),a.j&&ws(a.j,d),rm(d,a.g)))}
h.Fc=function(a){if(-1==a)Ot(this,-1);else for(var b=0;b<this.A.length;b++)if(this.A[b].id==a){Ot(this,b);break}};
function Pt(a){if(!a.g){var b=a.l.W("DIV",{style:"display:none"});a.g=b;fn(b,Jc(a.className).split(" "));us(b,"listbox");b.id=Kt(Jt.V());a.l.appendChild(a.P,b);K(b,"click",a.rl,!1,a);K(b,"mousedown",a.sl,!1,a);K(b,"mouseover",a.Gl,!1,a)}}
function Mt(a){Pt(a);a.wa&&(a.g.style.minWidth=a.wa.clientWidth-0+"px");a.ma&&(a.g.style.maxWidth=a.ma.clientWidth-0+"px");a.B.length=0;a.l.pp(a.g);a.C&&a.C.za?a.C.za(a,a.g,a.A,a.O):A(a.A,function(b){var c=this.O,d=this.l.W("DIV",{className:this.K,id:Kt(Jt.V())});us(d,"option");this.C&&this.C.wf?this.C.wf(b,c,d):Lj(d,b.data.toString());c&&this.Ra&&(this.ja=!1,Qt(this,d,c));P(d,this.K);this.B.push(d);this.l.appendChild(this.g,d)},a);
0==a.A.length?a.dismiss():(a.show(),Rt(a),Im(a.g))}
function Rt(a){if(a.j&&a.S){var b=a.jo||a.j;var c=a.qa?5:1;Zm(b,c,a.g,c^1,null,null,65)}}
h.ng=function(){return this.j||null};
h.N=function(){this.g&&(Bi(this.g,"click",this.rl,!1,this),Bi(this.g,"mousedown",this.sl,!1,this),Bi(this.g,"mouseover",this.Gl,!1,this),this.l.md(this.g),this.g=null,this.F=!1);Th(this.Va);this.P=null;Lt.J.N.call(this)};
function Qt(a,b,c){if(a.D||!a.ja)if(3==b.nodeType){var d=null;Array.isArray(c)&&1<c.length&&!a.D&&(d=vb(c,1));c=St(a,c);if(0!=c.length){var e=b.nodeValue,f=a.R?new RegExp("\\b(?:"+c+")","gi"):new RegExp(c,"gi");c=[];for(var g=0,k=f.exec(e),l=0;k;)l++,c.push(e.substring(g,k.index)),c.push(e.substring(k.index,f.lastIndex)),g=f.lastIndex,k=f.exec(e);c.push(e.substring(g));if(1<c.length){d=a.D?l:1;for(e=0;e<d;e++)f=2*e,b.nodeValue=c[f],g=a.l.createElement("B"),g.className=a.da,a.l.appendChild(g,a.l.g.createTextNode(String(c[f+
1]))),g=b.parentNode.insertBefore(g,b.nextSibling),b.parentNode.insertBefore(a.l.g.createTextNode(""),g.nextSibling),b=g.nextSibling;c=vb(c,2*d);b.nodeValue=c.join("");a.ja=!0}else d&&Qt(a,b,d)}}else for(b=b.firstChild;b;)d=b.nextSibling,Qt(a,b,c),b=d}
function St(a,b){var c="";if(!b)return c;Array.isArray(b)&&(b=eb(b,function(d){return!Ic(null==d?"":String(d))}));
a.D?Array.isArray(b)?c=fb(b,qe).join("|"):(c=he(b),c=qe(c),c=c.replace(/ /g,"|")):Array.isArray(b)?c=0<b.length?qe(b[0]):"":/^\W/.test(b)||(c=qe(b));return c}
function Tt(a,b){for(;b&&b!=a.g&&!O(b,a.K);)b=b.parentNode;return b?bb(a.B,b):-1}
h.rl=function(a){var b=Tt(this,a.target);0<=b&&this.dispatchEvent({type:"select",row:this.A[b].id});a.stopPropagation()};
h.sl=function(a){a.stopPropagation();a.preventDefault()};
h.Gl=function(a){a=Tt(this,a.target);0<=a&&!(300>x()-this.U)&&this.dispatchEvent({type:"hilite",row:this.A[a].id})};
function Ut(){}
Ut.prototype.za=function(){};
Ut.prototype.wf=function(){};var Vt=angular.module("jfkAutocomplete",[ss.name]);Vt.B="goog-menu jfk-ac-renderer";Vt.C="goog-menuitem";Vt.l="goog-menuitem-highlight";Vt.A="jfk-textinput";Vt.j=["values","url","customMatcher"];Vt.F=")]}'\n";function Wt(a,b){st.call(this,a,b)}
ra(Wt,st);Wt.prototype.l=function(a,b,c){b(a,c.target.Vk(Vt.F))};
Vt.directive("jfkAutocomplete",["$parse","jfkCommon",function(a,b){return{restrict:"A",require:"?ngModel",link:function(c,d,e,f){Vt.K(e);var g,k=e.hasOwnProperty("fuzzy"),l=e.hasOwnProperty("createMenuInParent"),m;e.hasOwnProperty("ngList")&&(m=e.ngList||",");hj(d[0],{autocomplete:"off"});d.addClass(Vt.A);Vt.L(d[0]);e.hasOwnProperty("values")&&c.$watch(e.values,function(n){g=Vt.g(b,c,e,f,g,new xs(n,!k),d[0],m,l)},!0);
e.hasOwnProperty("url")&&c.$watch(e.url,function(n){n=new Wt(n,!k);g=Vt.g(b,c,e,f,g,n,d[0],m,l)});
e.hasOwnProperty("customMatcher")&&c.$watch(e.customMatcher,function(n){g=Vt.g(b,c,e,f,g,{ih:n},d[0],m,l)})}}}]);
Vt.K=function(a){var b=0;A(Vt.j,function(c){a.hasOwnProperty(c)&&b++});
if(1!=b)throw Error("Exactly one attribute must be set of the following: "+Vt.j);};
Vt.L=function(a){us(a,"combobox");vs(a,"autocomplete","list")};
Vt.di=function(a,b){var c=new Lt(b,a);c.className=Vt.B;c.K=Vt.C;c.M=Vt.l;return c};
Vt.D=function(a,b,c,d,e,f){e=Vt.di(e,f?b.parentNode:void 0);e.R=!d;a=new As(a,e,c);c.g=a;c.Fg(b);return a};
Vt.g=function(a,b,c,d,e,f,g,k,l){e&&e.dispose();c.hasOwnProperty("customInputHandler")?(c.hasOwnProperty("ngList"),e=b.$eval(c.customInputHandler)):e=new Ts(k,null,null!=k);var m;c.hasOwnProperty("customRenderer")&&(m=b.$eval(c.customRenderer));var n=!1;c.hasOwnProperty("matchWithinWords")&&(n="true"==c.matchWithinWords);e=Vt.D(f,g,e,n,m,l);c.maxMatches&&(e.gj=c.maxMatches);c.hasOwnProperty("autoHilite")&&(e.kk="true"==c.autoHilite);c.hasOwnProperty("allowFreeSelect")&&(e.Qh="true"==c.allowFreeSelect);
c.hasOwnProperty("triggerSuggestionsOnUpdate")&&(e.Kj="true"==c.triggerSuggestionsOnUpdate);d&&os(b,e,"update",function(t){b.$apply(function(){null!=k?d.$setViewValue(g.value):null!=t.row&&d.$setViewValue(t.row)})});
ls(a,b,c,e);return e};var Xt=[];Xt.push=function(){throw Error("Calling push on a read-only array");};
var Yt={cancel:function(){},
Gb:function(){return!1}};function Zt(a){this.l=a;this.g=0}
var $t=y("A server error has occurred.");function au(a){var b=new bu;a=new Zt(a);a.B=b;a.g=b.getError();return a}
function cu(a,b){var c=new Zt(b);c.g=a;c.A=$t;return c}
Zt.prototype.hasChanges=function(){return this.j&&this.j.g()?this.j.g().hasChanges():!1};
Zt.prototype.getError=function(){return this.g};function du(a){this.g=new Wn;if(a){a=co(a);for(var b=a.length,c=0;c<b;c++)this.add(a[c])}}
function eu(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+Pa(a):b.substr(0,1)+a}
h=du.prototype;h.ha=function(){return this.g.ha()};
h.add=function(a){this.g.set(eu(a),a)};
h.remove=function(a){return this.g.remove(eu(a))};
h.clear=function(){this.g.clear()};
h.isEmpty=function(){return this.g.isEmpty()};
h.contains=function(a){a=eu(a);return Zn(this.g.j,a)};
h.ia=function(){return this.g.ia()};
h.clone=function(){return new du(this)};
h.equals=function(a){return this.ha()==bo(a)&&fu(this,a)};
function fu(a,b){var c=bo(b);if(a.ha()>c)return!1;!(b instanceof du)&&5<c&&(b=new du(b));return ho(a,function(d){var e=b;return e.contains&&"function"==typeof e.contains?e.contains(d):e.Lc&&"function"==typeof e.Lc?e.Lc(d):Ma(e)||"string"===typeof e?mb(e,d):Vb(e,d)})}
h.qb=function(){return this.g.qb(!1)};function gu(a,b,c){this.C=a;this.j=b;this.l=new du(c);this.A=[]}
var hu=new gu(["6","12"],"1"),iu=new gu("2 1f 1c 12 16 13 14 1d 22 1b 20".split(" "),"4",[hu]);new gu("6 12 16 17 18 1a".split(" "),"3",[hu]);new gu("2 4 2a 5 6 9 b 1c d e f 11 12 29 13 14 15 1d 22 16 17 19 28 1e 1b".split(" "),"2",[hu,iu]);new gu([]);gu.prototype.toString=function(){var a=this.j?"g"+this.j:this.C.join(",");this.j&&this.A.length&&(a+=","+this.A.join(","));return a};
function ju(a){a.B||(a.B=new du(a.C));return a.B}
gu.prototype.contains=function(a){if(this.l.contains(a))return!0;this.g||(this.g=new du);if(this.g.contains(a))return!1;var b=ju(this),c=ju(a);if(ho(c,b.contains,b))return this.l.add(a),!0;this.g.add(a);return!1};var ku={token:"",Ne:"personal",matchType:1,A:!0,j:!0,B:!0,l:5E3,g:-1,C:10,name:"Load All Contacts"};function lu(a,b,c){this.j=a;this.l=b;this.g=c||""+a.g++}
z(lu,I);h=lu.prototype;h.se=function(){return mu(this).se()};
h.reset=function(){mu(this).reset()};
h.Gb=function(){return mu(this).Gb()};
h.cancel=function(){this.j.cancel(mu(this))};
function mu(a){return a.j.states[a.g]}
h.Pm=function(){this.l(this)};function nu(a){this.j=a;this.l=0;this.reset()}
z(nu,I);nu.prototype.reset=function(){this.A=this.l;this.success=!1;this.g=1;this.C=this.B=-1};
nu.prototype.se=function(){return this.success};
nu.prototype.Gb=function(){return!(4==this.g||5==this.g)};
nu.prototype.N=function(){nu.J.N.call(this);this.j=null};function ou(){this.states={};this.g=1}
z(ou,I);ou.prototype.schedule=function(a,b,c,d){b=b||0;var e=x()+b,f=this.states[a.g];f||(f=new nu(this),this.states[a.g]=f);f.l=Math.max(c||1,f.l);switch(f.g){case 1:case 5:f.reset();pu(a,b,e);break;case 6:pu(a,b,e);break;case 4:d&&(f.reset(),pu(a,b,e));break;case 2:e<f.B?(this.cancel(f),f.reset(),pu(a,b,e)):f.A=f.l}};
function pu(a,b,c){0==b?(mu(a).g=3,a.Pm()):(mu(a).g=2,mu(a).B=c,b=Uk(a.Pm,b,a),mu(a).C=b)}
ou.prototype.N=function(){ou.J.N.call(this);for(var a in this.states){var b=this.states[a];this.cancel(b);Th(b)}this.states={}};
ou.prototype.cancel=function(a){2==a.g&&Vk(a.C)};var qu={Sx:"a",ERROR:"b"};function ru(a){J.call(this,a&&a[0].getError()?"b":"a");this.B=a;"b"==this.type||null==su(this)||su(this)}
ra(ru,J);function su(a){if(!a.g){if(!a.B)return null;var b=[];A(a.B,function(c){c=c.g().l();b&&c?b=b.concat(c):b=null});
a.g=b}return a.g}
;function tu(){}
;var uu={198:"AE",230:"ae",306:"IJ",307:"ij",338:"AE",339:"ae"};
function vu(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);if(192>e||382<e)e=null;else{var f=uu[e];f?e=f:(f="AAAAAA*CEEEEIIIIDNOOOOOx0UUUUYpBaaaaaa*ceeeeiiiionooooo^ouuuuypyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgHhHhIiIiIiIiIi**JjKkkLlLlLLLlllNnNnNnnNnOoOoOo**RrRrRrSsSsSsSsTtTtttUuUuUuUuUuUuWwYyYZzZzZz"[e-192],e="^"==f?null:f)}e&&(c!=d&&b.push(a.substr(c,d-c)),c=d+1,b.push(e))}return 0<b.length?(b.push(a.substr(c)),b.join("")):a}
;function wu(a,b){this.A=a||null;this.l=!!b;this.j=new Wn;this.g=new xu("",void 0);this.g.next=this.g.g=this.g}
function yu(a,b){var c=a.j.get(b);c&&a.l&&(c.remove(),zu(a,c));return c}
h=wu.prototype;h.get=function(a,b){var c=yu(this,a);return c?c.value:b};
h.set=function(a,b){var c=yu(this,a);c?c.value=b:(c=new xu(a,b),this.j.set(a,c),zu(this,c))};
h.shift=function(){return Au(this,this.g.next)};
h.remove=function(a){return(a=this.j.get(a))?(a.remove(),this.j.remove(a.key),!0):!1};
h.ha=function(){return this.j.ha()};
h.isEmpty=function(){return this.j.isEmpty()};
h.Ga=function(){return this.map(function(a,b){return b})};
h.ia=function(){return this.map(function(a){return a})};
h.contains=function(a){return this.some(function(b){return b==a})};
h.clear=function(){Bu(this,0)};
h.forEach=function(a,b){for(var c=this.g.next;c!=this.g;c=c.next)a.call(b,c.value,c.key,this)};
h.map=function(a,b){for(var c=[],d=this.g.next;d!=this.g;d=d.next)c.push(a.call(b,d.value,d.key,this));return c};
h.some=function(a,b){for(var c=this.g.next;c!=this.g;c=c.next)if(a.call(b,c.value,c.key,this))return!0;return!1};
h.every=function(a,b){for(var c=this.g.next;c!=this.g;c=c.next)if(!a.call(b,c.value,c.key,this))return!1;return!0};
function zu(a,b){a.l?(b.next=a.g.next,b.g=a.g,a.g.next=b,b.next.g=b):(b.g=a.g.g,b.next=a.g,a.g.g=b,b.g.next=b);null!=a.A&&Bu(a,a.A)}
function Bu(a,b){for(;a.ha()>b;){var c=a,d=a.l?a.g.g:a.g.next;d.remove();c.j.remove(d.key)}}
function Au(a,b){a.g!=b&&(b.remove(),a.j.remove(b.key));return b.value}
function xu(a,b){this.key=a;this.value=b}
xu.prototype.remove=function(){this.g.next=this.next;this.next.g=this.g;delete this.g;delete this.next};function Cu(a,b,c,d,e,f){L.call(this);this.C=e||0;this.L=f||Du;this.g=new wu(this.C,!0);this.l=a||0;this.F=b||0;this.A=c||0;this.j=!!d}
z(Cu,L);Cu.prototype.N=function(){Cu.J.N.call(this);this.g=null};
Cu.prototype.clear=function(){this.g.clear()};
function Du(a){var b=qe(vu(a.token));return function(c){var d=new RegExp("(^|\\W+)"+b,"i");(d=null!=vu(String(c[1])).match(d))||(d=c[0],d=null!=c[2].match(new RegExp("^"+b,"i"))&&"cl"!=String(d));return d}}
function Eu(a,b){var c="^"+a.token.toLowerCase();b&&(a.A||(c="nc"+c),a.j||(c="ng"+c),a.D||(c="np"+c),a.F||(c="na"+c));a.K&&(c="pa"+c);return c}
function Fu(a,b,c){a.g.set(Eu(b,a.j),c);if(a.l&&(b=a.g.ha(),b>a.l)){c=x()-a.F;do{if(a.g.g.g.value.created>=c)break;var d=a.g;Au(d,d.g.g)}while(--b>a.l)}}
function Gu(a,b,c){c?c=a.g.get(b):c=(c=a.g.j.get(b))?c.value:void 0;return c&&a.A&&c.created+a.A<x()?(a.g.remove(b),null):c}
function Hu(a,b,c){c=b.length-c.length;for(var d=b.length;d>=c;d--){var e=Gu(a,b,!1);if(e)return e;b=b.substr(0,d-1)}return null}
function Iu(a,b){if(b.F)return null;var c=Eu(b,a.j),d=Hu(a,c,b.token);return d?d:a.j&&!Fc(c,"^")?(c=Eu(b,!1),Hu(a,c,b.token)):null}
function Ju(a,b,c){this.token=a;this.g=b;this.j=!!c;this.count=1;this.created=x()}
;function Ku(a,b,c,d){L.call(this);this.l=!1;this.Qm=null;this.j=b;this.A=c;this.g=a;Lu(this.g,this.A);d&&K(d.g,"a",this.Us,!1,this)}
z(Ku,L);h=Ku.prototype;h.Wf=function(a,b){this.Qm=b;this.l||(this.l=!0)};
h.getId=function(){return this.A};
h.Ya=function(a,b){if(this.l){var c=this.j;if(Ic(a.token)&&!c.B)var d=Xt;else{d=a.g;var e=Gu(c,Eu(a,c.j),!0);(d=e&&d&&e.j&&!(0<=d&&d<=e.g.length)?null:e)?d=d.g:(d=Iu(c,a))&&0==d.g.length?(Fu(c,a,new Ju(a.token,Xt)),d=Xt):d&&!d.j&&c.D?(d=eb(d.g,c.L(a),c),Fu(c,a,new Ju(a.token,d))):d=null}d&&0<=a.g&&d.length>a.g&&(d=d.slice(0,a.g));return(c=d)?(b&&b(c,Yt,this.getId(),a),Yt):this.g.Ya(a,this.getId(),w(this.ro,this,b))}b&&b(Xt,Yt,this.getId(),a,4);return Yt};
h.ro=function(a,b,c,d,e,f){f||Fu(this.j,e,new Ju(e.token,b,-1!=e.g&&b.length>=e.g));a&&(b&&0<=e.g&&b.length>e.g&&(b=b.slice(0,e.g)),a(b,c,d,e,f))};
h.Us=function(){this.j.clear()};
h.getAuthToken=function(){return this.g.getAuthToken()};
h.N=function(){Ku.J.N.call(this);this.j.dispose();this.j=null;Mu(this.g,this.A);this.g=null};function Nu(a,b,c){Cu.call(this,100,18E5,432E5,!0,0,c||Ou);this.D=a;this.B=b}
ra(Nu,Cu);function Ou(a){return function(b){var c=b.xe(),d;if(d=Pu(a,c)){d=new RegExp("(^|\\W+)"+qe(vu(a.token)),"i");var e=vu(b.getName()||"");(d=d.test(e))||(d=a.token,d=((b=b.we())?(new RegExp("^"+qe(vu(d)),"i")).test(b):!1)&&"cl"!=c)}return d}}
function Pu(a,b){switch(b){case "ct":return a.A;case "cl":case "li":return a.j;case "pt":return a.D}return!1}
;function Qu(a,b,c,d){Ku.call(this,a,b,c,d)}
ra(Qu,Ku);Qu.prototype.execute=function(a){a.g()&&a.B(w(this.B,this,a));a=this.g.execute(a);a.qh(this.getId());return a};
Qu.prototype.B=function(a,b){if(b.hasChanges()){var c=b.j;if(a.D()||c&&c.getError())c=new ru([b.j],"c"),this.dispatchEvent(c)}};function Ru(a){this.g=a}
Ru.prototype.toString=function(){return this.g};new Ru("n73qwf");new Ru("MpJwZc");new Ru("UUJqVe");new Ru("pVbxBc");new Ru("tdUkaf");new Ru("fJuxOc");new Ru("ZtVrH");new Ru("WSziFf");new Ru("ZmXAm");new Ru("BWETze");new Ru("UBSgGf");new Ru("zZa4xc");new Ru("o1bZcd");new Ru("WwG67d");new Ru("z72MOc");new Ru("JccZRe");new Ru("amY3Td");new Ru("ABma3e");new Ru("GHAeAc");new Ru("gSshPb");new Ru("klpyYe");new Ru("OPbIxb");new Ru("pg9hFd");new Ru("Wt6vjf");new Ru("yu4DA");new Ru("vk3Wc");new Ru("IykvEf");new Ru("J5K1Ad");new Ru("IW8Usd");new Ru("IaqD3e");new Ru("byfTOb");new Ru("jbDgG");new Ru("b8xKu");new Ru("d0RAGb");
new Ru("AzG0ke");new Ru("J4QWB");new Ru("LEikZe");new Ru("rJmJrc");new Ru("TuDsZ");new Ru("hdXIif");new Ru("mITR5c");new Ru("DFElXb");new Ru("NGntwf");new Ru("Bgf0ib");new Ru("Xpw1of");new Ru("v5BQle");new Ru("ofuapc");new Ru("FENZqe");new Ru("tLnxq");new Ru("lsjVmc");function Su(){I.call(this);this.g=new L;this.j=new L;this.l=new wu}
ra(Su,I);Su.prototype.dispatchEvent=function(a){this.j.dispatchEvent(a);this.g.dispatchEvent(a)};
Su.prototype.N=function(){I.prototype.N.call(this);this.g.dispose();this.g=null;this.j.dispose();this.j=null};function Tu(a){F(this,a,0,-1,null,null)}
z(Tu,D);function Uu(a){F(this,a,0,-1,Vu,null)}
z(Uu,D);var Vu=[4];function Wu(a){F(this,a,0,-1,null,null)}
z(Wu,D);function Xu(a){F(this,a,0,-1,null,null)}
z(Xu,D);var Yu=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//,Zu=/([#].*?&|[#])authuser=([^&#]*)\b/,$u=/([?][^#]*?&|[?])authuser=([^&#]*)\b/;function av(a){return null==a?"":"number"===typeof a?isFinite(a)?String(a):"":a&&(a=String(a),254>=a.length)?a:""}
function bv(){var a=u("gapi.config.get");if((a=av(a&&a("googleapis.config/sessionIndex")))||(a=av(p.__X_GOOG_AUTHUSER))||(a=av(u("google.authuser"))))return a;var b=p.location.href||"",c=Zu.exec(b);try{a=av(c&&decodeURIComponent(c[2]))}catch(d){}if(a)return a;c=$u.exec(b);try{a=av(c&&decodeURIComponent(c[2]))}catch(d){}if(a)return a;a=Yu.exec(b);return(a=av(a&&a[1]))?a:""}
;function cv(){var a=u("gapi.auth.getToken");a=(a=a?a():null)&&a.access_token;var b=null;if(!a){a=(a=u("gapi.auth2.getAuthInstance"))?a():null;if(!a||!a.isSignedIn.get())return null;a=(b=a.currentUser.get().getAuthResponse(!0))&&b.access_token;if(!a)return null;b=b.token_type}return{Authorization:(b||"Bearer")+" "+a}}
function dv(a){a=void 0===a?"":a;var b;if(!(b=cv())){b=a;var c=void 0===c?bv():c;a={};var d=fp([]);d&&(a.Authorization=d);b||(b=(b=u("gapi.config.get"))&&b("client/apiKey"));b&&(a["X-Goog-Api-Key"]=b);c&&(a["X-Goog-AuthUser"]=String(c));b=a}return b}
;function ev(a,b){return 1>a||!isFinite(a)?Promise.reject("gapi.client missing"):(new Promise(function(c){return p.setTimeout(c,b)})).then(function(){return fv(a-1,2*b)})}
function fv(a,b){a=void 0===a?0:a;b=void 0===b?5E3:b;var c=p;try{do var d=c.gapi;while(!d&&c!==c.top&&(c=c.parent))}catch(e){}if(!d)return ev(a,b);p.gapi||(p.gapi=d);return d.client?Promise.resolve(d):new Promise(function(e,f){d.load("client",function(){d.client?e(d):f("gapi.client missing")})})}
function gv(){var a=void 0===a?"":a;var b=void 0===b?bv():b;var c=u("gapi.config.update");c("googleapis.config/auth/useFirstPartyAuth",!0);c("googleapis.config/auth/useFirstPartyAuthV2",!0);b&&c("googleapis.config/sessionIndex",b);a&&c("client/apiKey",a)}
;function hv(a){this.l=a;this.g=new Xu;this.A=this.j=null}
function iv(a){return xg(a.l,Tu,1)}
function jv(a){return xg(a.l,Uu,2)}
function kv(a){a.j||(a.j=fv(10,5E3).then(function(b){return b.client}));
return a.j}
function lv(a,b){b&&(a.j=b.then(function(c){return c},function(){return fv(10,5E3).then(function(c){return c.client})}))}
;function mv(a){this.j=a||Ja;this.ea=Uk(this.cv,0,this);this.g=""}
h=mv.prototype;h.qh=function(a){this.g=a};
h.ij=function(){return this.g};
h.cancel=function(){Vk(this.ea);this.ea=null};
h.Gb=function(){return!!this.ea};
h.cv=function(){this.ea=null;this.j()};var nv=new Map([["personal",2],["domain",4],["pcab",3]]);function ov(a){F(this,a,0,-1,null,null)}
z(ov,D);ov.prototype.L=function(){return G(this,1,0)};
function pv(a){var b=new ov;return H(b,1,a)}
function qv(a){var b=pv(4);return H(b,2,a)}
ov.prototype.D=function(){return G(this,5,0)};
function rv(a){var b=pv(2);return H(b,5,a)}
ov.prototype.F=function(){return G(this,6,0)};
function sv(a,b){return H(a,6,b)}
ov.prototype.og=function(){return G(this,7,"")};function tv(a){F(this,a,0,-1,null,null)}
z(tv,D);function uv(a){F(this,a,0,-1,vv,null)}
z(uv,D);var vv=[6];function wv(a){F(this,a,0,-1,null,null)}
z(wv,D);function xv(a){F(this,a,0,-1,null,null)}
z(xv,D);xv.prototype.getStatus=function(){return G(this,4,2)};function yv(a){F(this,a,0,-1,null,null)}
z(yv,D);yv.prototype.getStatus=function(){return G(this,1,2)};function zv(a){F(this,a,0,-1,null,null)}
z(zv,D);zv.prototype.D=function(){return qg(this,1)};
zv.prototype.F=function(){return qg(this,2)};function Av(a){F(this,a,0,-1,null,null)}
z(Av,D);Av.prototype.D=function(){return qg(this,1)};
Av.prototype.F=function(){return qg(this,2)};
Av.prototype.getStatus=function(){return G(this,3,2)};function Bv(a){F(this,a,0,-1,null,null)}
z(Bv,D);function Cv(a){F(this,a,0,-1,null,Dv)}
z(Cv,D);var Dv=[[4,5,6,7,8]];function Ev(a,b){return Ag(a,1,b)}
function Fv(a,b){return H(a,2,b)}
Cv.prototype.L=function(){return qg(this,3)};
function Gv(a,b){return H(a,3,b)}
function Hv(a,b){return Ag(a,9,b)}
;function Iv(a){var b=rv(1);return H(b,7,a)}
function Jv(a){return sv(rv(2),a)}
;var Kv=new Map([[200,0],[400,3],[401,16],[403,7],[404,5],[409,10],[416,11],[429,8],[499,1],[-1,1],[504,4],[501,12],[503,14]]),Lv=new Map([[0,0],[1,11],[2,1],[3,3],[4,10],[5,8],[6,7],[7,2],[16,2],[8,6],[9,7],[10,11],[11,9],[12,5],[13,9],[14,4],[15,6]]),Mv=new Map([[0,0],[11,1],[1,2],[3,3],[10,4],[8,5],[2,16],[6,8],[7,9],[5,12],[9,13],[4,14]]);function Nv(a){return Lv.has(a)?Lv.get(a):1}
function Ov(a){return Mv.has(a)?Mv.get(a):2}
;function Pv(a){F(this,a,0,-1,Qv,null)}
z(Pv,D);var Qv=[7];var Rv=window&&window.performance&&window.performance.now&&window.performance.timing&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return Date.now()};function Sv(a){this.j=a;this.g=NaN}
Sv.prototype.duration=function(){return this.g-this.j};
Sv.prototype.stop=function(a){this.g=a;return this.duration()};
function Tv(a){var b=void 0===b?Rv:b;this.A=a;this.l=b;this.g=new Map;this.j="_"}
h=Tv.prototype;h.source=function(){return this.A};
function Uv(a,b){b&&(a.j=b);return a.j}
h.duration=function(a){a=Uv(this,void 0===a?"":a);return this.g.has(a)?this.g.get(a).duration():NaN};
function Vv(a,b){var c=a.duration(void 0===b?"":b);c=Math.round(1E3*c);return isFinite(c)?c:null}
h.toString=function(a,b){b=void 0===b?1:b;return this.duration(void 0===a?"":a).toFixed(b)};
h.start=function(a){a=void 0===a?"":a;var b=this.l();a=Uv(this,a);this.g.set(a,new Sv(b));return this};
h.stop=function(a){a=void 0===a?"":a;var b=this.l();a=Uv(this,a);this.g.has(a)&&this.g.get(a).stop(b);return this};
h.clear=function(){this.g.clear();return this};function Wv(a){F(this,a,0,-1,null,null)}
z(Wv,D);function Xv(a){F(this,a,0,-1,null,null)}
z(Xv,D);function Yv(a){F(this,a,0,30,Zv,null)}
z(Yv,D);var Zv=[3,20,27];function $v(a){F(this,a,0,17,aw,null)}
z($v,D);var aw=[3,5];function bw(a){var b=x().toString();return H(a,4,b)}
function cw(a,b){return Cg(a,3,b)}
function dw(a,b){return H(a,14,b)}
;function ew(a,b){b=void 0===b?0:b;this.g=a;this.l=b;switch(b){case 1:var c="ppl.store.peopleapi";var d=sg(jv(a),1,!0);break;case 2:c="ppl.store.ppl.store.ozcontactstore";d=sg(jv(a),2,!0);break;default:c="ppl.store",d=!1}var e=new Pv;c=H(e,1,c);c=H(c,2,932);e=qg(iv(a),3);c=H(c,3,e);c=H(c,4,"1011");c=H(H(c,5,311835110),8,3);d=H(c,6,d);c=qg(jv(a),4);d=H(d,7,c||[]);this.j=vg(d,7,20090307)}
h=ew.prototype;h.he=function(){return this.j};
h.Ek=function(a,b){var c=b.source(),d=fw(this);switch(c.L()){case 2:case 3:d=Gv(Fv(Hv(Ev(new Cv,a),d),2),2);var e=new zv;var f=c.D();e=H(e,1,f);c=c.F();c=H(e,2,c);return Bg(d,5,Dv[0],c);case 4:case 5:return d=Gv(Hv(Ev(new Cv,a),d),4),e=new wv,c=G(c,2,0),c=H(e,1,c),Bg(d,7,Dv[0],c);default:return null}};
h.Hk=function(a,b,c){var d=b.source(),e=fw(this);switch(d.L()){case 1:d=Gv(Fv(Hv(Ev(new Cv,a),e),1),1);a=this.l;e=new yv;e=H(e,1,c);if(0==c||4==c)c=Vv(b,"total"),c=H(e,2,c),b=Vv(b,"blocked"),b=H(c,3,b),H(b,5,a);return Bg(d,4,Dv[0],e);case 2:case 3:a=Gv(Fv(Hv(Ev(new Cv,a),e),2),3);e=new Av;var f=d.D();e=H(e,1,f);d=d.F();d=H(e,2,d);d=H(d,3,c);if(0==c||4==c)c=Vv(b,"total"),c=H(d,4,c),e=Vv(b,"blocked"),c=H(c,5,e),b=Vv(b,"network"),H(c,6,b);return Bg(a,6,Dv[0],d);case 4:case 5:a=Gv(Hv(Ev(new Cv,a),e),
5);e=new xv;f=G(d,2,0);f=H(e,1,f);var g=G(d,3,0);f=H(f,8,g);d=G(d,4,0);d=H(f,9,d);H(d,4,c);if(0===c||4===c)b=Vv(b,"total"),H(e,5,b);return Bg(a,8,Dv[0],e);default:return null}};
h.Fk=function(){return null};
h.Gk=function(){return null};
function fw(a){a=a.g.g;var b=new Bv;var c=!!qg(a,2);b=H(b,4,c);null!=qg(a,7)&&(c=qg(a,7),H(b,2,c));a=qg(a,6)||0;H(b,1,a);return b}
;function gw(a,b,c){this.l=a;this.A=b;this.j=this.g=a;this.B=c||0}
gw.prototype.reset=function(){this.j=this.g=this.l};
function hw(a){a.j=Math.min(a.A,2*a.j);a.g=Math.min(a.A,a.j+(a.B?Math.round(a.B*(Math.random()-.5)*2*a.j):0))}
;function iw(a,b,c){ht(a.url,function(d){d=d.target;d.se()?b(d.mb()):c(d.getStatus())},a.requestType,a.body,a.Kv,a.timeoutMillis,a.withCredentials)}
;function jw(a){F(this,a,0,6,kw,null)}
z(jw,D);var kw=[5];function lw(a){F(this,a,0,-1,null,null)}
z(lw,D);var Hg=new function(){this.fieldIndex=175237375;this.g=lw;this.isRepeated=0};function mw(a,b,c,d,e,f,g,k,l,m,n){L.call(this);this.da=a;this.U=b||Ja;this.F=new $v;this.ma=d;this.R=n;this.j=[];this.O="";this.wa=Ua(Qi,0,1);this.D=e||null;this.Gc=c||null;this.L=g||!1;this.M=l||null;this.S=this.P=-1;this.l=null;this.qa=!k;this.K=0;this.Ra=1;this.ja=f||!1;a=new Xv;a=H(a,1,1);f||(f=new Wv,b=document.documentElement.getAttribute("lang"),f=H(f,5,b),Ag(a,11,f));Ag(this.F,1,a);H(this.F,2,this.da);this.A=new gw(1E4,3E5,.1);this.g=new Tk(this.A.g);Rh(this,this.g);K(this.g,"tick",Lb(nw(this,
m)),!1,this);this.C=new Tk(6E5);Rh(this,this.C);K(this.C,"tick",Lb(nw(this,m)),!1,this);this.L||this.C.start();this.ja||(K(oj(),"beforeunload",this.B,!1,this),K(oj(),"unload",this.B,!1,this),K(document,"pagehide",this.B,!1,this))}
z(mw,L);function nw(a,b){return b?function(){b().then(a.flush.bind(a))}:a.flush}
mw.prototype.N=function(){this.B();mw.J.N.call(this)};
mw.prototype.log=function(a){a=Ig(a);var b=this.Ra++;H(a,21,b);if(!qg(a,1)){b=a;var c=x().toString();H(b,1,c)}this.l&&(b=Ig(this.l),Ag(a,16,b));for(;1E3<=this.j.length;)this.j.shift(),++this.K;this.j.push(a);this.dispatchEvent(new ow(a));this.L||this.g.enabled||this.g.start()};
mw.prototype.flush=function(a,b){if(0==this.j.length)a&&a();else{var c=x();if(this.S>c&&this.P<c)b&&b("throttled");else{var d=dw(cw(bw(Ig(this.F)),this.j),this.K);c={};var e=this.U();e&&(c.Authorization=e);this.D||(this.D=.01>this.wa()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");var f=this.D;this.Gc&&(c["X-Goog-AuthUser"]=this.Gc,f=Oe(f,"authuser",this.Gc));this.M&&(c["X-Goog-PageId"]=this.M,f=Oe(f,"pageId",this.M));if(e&&this.O==e)b&&
b("stale-auth-token");else{this.j=[];this.g.enabled&&this.g.stop();this.K=0;var g=d.j();c={url:f,body:g,ky:1,Kv:c,requestType:"POST",withCredentials:this.qa,timeoutMillis:0};f=w(function(k){this.A.reset();this.g.setInterval(this.A.g);if(k){try{var l=JSON.parse(k.replace(")]}'\n",""));var m=new jw(l)}catch(n){}m&&(k=G(m,1,"-1"),k=Number(k),0<k&&(this.P=x(),this.S=this.P+k),m=Gg(m))&&(m=G(m,1,-1),-1!=m&&(this.A=new gw(1>m?1:m,3E5,.1),this.g.setInterval(this.A.g)))}a&&a()},this);
g=w(function(k){var l=yg(d,Yv,3);hw(this.A);this.g.setInterval(this.A.g);401==k&&e&&(this.O=e);if(500<=k&&600>k||401==k||0==k)this.j=l.concat(this.j),this.L||this.g.enabled||this.g.start();b&&b("net-send-failed",k)},this);
this.R?this.R.send(c,f,g):this.ma(c,f,g)}}}};
mw.prototype.B=function(){this.flush()};
function ow(){this.type="event-logged"}
z(ow,J);function pw(a,b,c,d,e,f,g){mw.call(this,a,fp,b,iw,c,d,e,void 0,f,g)}
z(pw,mw);function qw(a,b){this.g=a;this.l=b;this.j=jf()||Ad("iPod")?4:Ad("iPad")?5:Ad("Android")?Ql()?3:2:!Ql()&&(Ad("iPod")||Ad("iPhone")||Ad("Android")||Ad("IEMobile"))||Ql()?0:1}
function rw(a){var b=a.l.he(),c=new tv,d=qg(b,3);H(c,2,d);H(c,1,a.j);H(c,3,1);a=new uv;Ag(a,3,c);c=qg(b,4);H(a,5,c);c=qg(b,8);H(a,9,c);c=qg(b,9);H(a,2,c);b=Math.round(qg(b,5));isFinite(b)&&H(a,7,b);return a}
function sw(a,b){var c=new Yv,d=b.j();H(c,8,d);a.g&&a.g.log(c)}
;function tw(a,b){this.g=a;this.j=b}
;function uw(){var a=new Pv;this.g=H(a,1,"ppl.store")}
h=uw.prototype;h.he=function(){return this.g};
h.Ek=function(){return null};
h.Hk=function(){return null};
h.Fk=function(){return null};
h.Gk=function(){return null};
function vw(a){this.g=a}
function ww(a){var b=a.he();var c=null;if(rg(b,6)){c=new pw(qg(b,2),bv(),qg(b,10)||void 0);var d=qg(b,7);d&&d.length&&(b=new Rm,H(b,3,d||[]),d=c,b?(d.l||(d.l=new Pm),b=b.j(),H(d.l,4,b)):d.l&&H(d.l,4,void 0))}c=new tw(new qw(c,a),a);qg(a.he(),1);return new vw(c)}
h=vw.prototype;h.start=function(a,b){a.start(b);return this};
h.stop=function(a,b){a.stop(b);return this};
h.count=function(a){var b=this.g,c=rw(b.g);(a=b.j.Ek(c,a))&&sw(b.g,a);return this};
h.status=function(a,b){var c=this.g,d=rw(c.g);(d=c.j.Hk(d,a,b))&&sw(c.g,d);return this};
h.latency=function(){var a=this.g;rw(a.g);var b=a.j.Gk();b&&sw(a.g,b);return this};
h.error=function(){var a=this.g;rw(a.g);var b=a.j.Fk();b&&sw(a.g,b);return this};function xw(a,b){this.A={};this.g=[];this.F=[];this.C=new ou;this.D=new qn(this);this.L=!a;this.B=[];this.j=a||new Su;var c;(c=b)||(c=ww(new uw));this.metrics=c;this.B.push(this.j)}
z(xw,I);h=xw.prototype;h.fh=function(a,b){this.g.push(a);b&&this.F.push(a);this.A[a.getId()]=a;this.D.G(a,Sb(qu),w(this.Qo,this))};
h.Qo=function(a){this.j.dispatchEvent(a)};
h.Ya=function(a,b){var c=this,d=qv(2),e=new Tv(d);this.metrics.count(e);this.metrics.start(e,"total");return yw(this,a,function(f){return f.Ya},function(f,g,k,l,m){zw(function(n,t,r,v){var B=t===Yt||t instanceof mv?2:1,E=e.source();
H(E,3,B);B=e.source();E=r?nv.get(r)||1:1;H(B,4,E);c.metrics.stop(e,"total");c.metrics.status(e,Ov(m||0));b&&b(n,t,r,v,m)},f,g,k,l)})};
function yw(a,b,c,d){var e=new Aw(d,a.metrics,void 0),f;if(b.Ne){var g=a.A[b.Ne];0<b.l||1<b.C?f=Bw(a,g,c(g),b,d):f=c(g).call(g,b,d);f&&e.add(f)}else for(var k=0;k<a.g.length;k++)g=a.g[k],0<b.l||1<b.C?f=Bw(a,g,c(g),b,d):f=c(g).call(g,b,d),f&&e.add(f);return e}
h.execute=function(a){var b=this,c=qv(1),d=new Tv(c);this.metrics.count(d);this.metrics.start(d,"total");Cw(this,a);a.C(function(e){var f=e?Ov(e.g):2;e=(e=e?e.l:null)?e.ij():"";var g=d.source();H(g,3,e?1:2);g=d.source();e=e?e?nv.get(e)||1:1:0;H(g,4,e);b.metrics.stop(d,"total");b.metrics.status(d,f)});
return this.K&&(c=a.F(this.K,function(e){return Dw(b,e,d)}))?c:Dw(this,a,d)};
function Cw(a,b){A(a.B,function(){});
if(b.g()){var c=b.A();c&&(c=c.j())&&Cw(a,c)}}
function Dw(a,b,c){if(b.g()){var d=b.A();d&&(d=d.g())&&a.j.l.set(d,x())}if(d=b.L())if(d=a.A[d])return d.execute(b);c=new Aw(void 0,a.metrics,c);for(var e=0;e<a.g.length;e++)d=a.g[e],d.execute&&c.add(d.execute(b));return c}
function Bw(a,b,c,d,e){b=w(a.Ov,a,b,c,d,e);b=new lu(a.C,b,d.name);a.C.schedule(b,d.l,d.C,d.force);return new Ew(b)}
h.Ov=function(a,b,c,d,e){e.request=b.call(a,c,function(f,g,k,l,m){var n=e.j;var t=!m;mu(e).success=t;var r=mu(e);--r.A;!t&&0<mu(e).A?(mu(e).g=6,n.schedule(e,Math.max(100,Math.round(45E3*Math.random()))),n=!1):(mu(e).g=t?4:5,n=!0);n&&d&&d(f,g,k,l,m)})};
function zw(a,b,c,d,e){a&&(b&&(e.filter&&(b=e.filter(b,e.token)),Fw(b)),a(b||[],c,d,e))}
function Fw(a){if(0<a.length)for(var b=a[0].oi(),c=1;c<a.length;c++){var d=a[c],e=d.oi();e<b&&(d.flags=d.flags|1,b=e)}}
h.N=function(){xw.J.N.call(this);Th(this.C);this.C=null;A(this.F,Th);this.F=this.A=this.g=null;Th(this.D);this.D=null;A(this.B,function(a){a!=this.j&&Th(a)},this);
this.B=null;this.L&&(Th(this.j),this.j=null)};
function Gw(a){var b=new ew(a,0);H(b.he(),1,"ppl.store");a=sg(jv(a),3,!0);H(b.he(),6,a);return ww(b)}
function Aw(a,b,c){this.g=[];this.sa=a;this.l=b;this.A=c;this.j=""}
h=Aw.prototype;h.qh=function(a){this.j=a};
h.ij=function(){return this.j};
h.add=function(a){this.g.push(a)};
h.isEmpty=function(){return 0==this.g.length};
h.cancel=function(){this.Gb()&&this.l&&this.A&&this.l.status(this.A,1);for(var a=0;a<this.g.length;a++)this.g[a].cancel()};
h.Gb=function(){for(var a=0;a<this.g.length;a++)if(this.g[a].Gb())return!0;return!1};
function Ew(a){this.op=a;this.request=null}
Ew.prototype.cancel=function(){this.op.cancel();this.request&&this.request.cancel()};
Ew.prototype.Gb=function(){return this.op.Gb()||this.op.request&&this.op.request.Gb()};function Hw(a,b){this.text=a;this.A=b}
z(Hw,tu);Hw.prototype.getName=function(){return null};
Hw.prototype.we=function(){return null};
Hw.prototype.xe=function(){return"sr"};
Hw.prototype.oi=function(){return 0};function Iw(a,b){xw.call(this,a,b)}
z(Iw,xw);Iw.prototype.fh=function(a,b){if(1==this.g.length){var c=this.l=new Jw(this.metrics);c.g.push(new Kw(c,c.g.length,this.g[0]))}Iw.J.fh.call(this,a,b);this.l&&(c=this.l,c.g.push(new Kw(c,c.g.length,a)))};
Iw.prototype.Ya=function(a,b){return this.l&&a.B&&!a.Ne?this.l.Ya(a,b):Iw.J.Ya.call(this,a,b)};
function Jw(a){this.g=[];this.j=null;this.A=a}
Jw.prototype.Ya=function(a,b){var c=new Lw(a,this.A,b);Mw(this,c);return c};
function Mw(a,b,c,d){a.j=[];for(var e=0;e<a.g.length&&!(e==c?a.j[e]=d:a.g[e].Ya(b),0==e&&a.j[e]&&a.j[e].length>=b.query.g);e++);c=b.query;d=a.j;var f=[];e=!1;for(var g,k=0;k<d.length&&f.length<c.g;k++)if(d[k]){g=f.length;e=!0;var l=d[k],m=c.g,n=f.length;if(0==n)f=l.length>m?l.slice(0,m):l;else for(var t=0;t<l.length;t++){for(var r=null,v=0;v<n&&!(r=Nw(f[v],l[t]));v++);if(r)r===l[t]&&(f[v]=r);else if(f.length==n?f=f.concat(l[t]):f.push(l[t]),f.length==m)break}0<g&&f.length>g&&(f[g].flags=f[g].flags|
1)}e?(Fw(f),c=f):c=null;c&&b.sa&&a.g[0]&&a.g[0].B&&b.sa(c,b,null,b.query);a.j=null}
function Nw(a,b){if(a.A||b.A)return null;if(a.text==b.text)return a;if(a.we()==b.we()&&a.xe()==b.xe()){if(!b.getName())return a;if(!a.getName())return b}return null}
function Ow(a,b,c,d){a.j?a.j[c]=d:Mw(a,b,c,d)}
Jw.prototype.l=function(){};
function Kw(a,b,c){this.j=a;this.g=b;this.l=c;this.C=0;this.A=!1}
Kw.prototype.Ya=function(a){var b=this,c=a.A[this.g];if(!c){this.A=!0;this.B=!1;var d=x(),e=this.l.Ya(a.query,function(f,g,k,l,m){m=void 0===m?0:m;b.B=!0;b.A||(b.C=x()-d);a.query.filter&&f&&(f=a.query.filter(f,a.query.token));g=b.g;k=b.l.getId();a.A[g]=f;a.l[g]=m;a.j[g]=k;Ow(b.j,a,b.g,f)});
a.g[this.g]=e;this.A=!1;this.B||a.query.B&&300<this.C&&(c=[Pw(this)])}c&&Ow(this.j,a,this.g,c)};
function Pw(a){var b=(b=a.l.Qm)?y("Searching for matches from {$source}",{source:b}):y("Searching for more matches.");return new Hw(b,a.j.l)}
Kw.prototype.dispose=function(){this.j=this.L=null};
function Lw(a,b,c){var d=this;this.query=a;this.g={};this.A={};this.j=[];this.l=[];var e=new Tv(qv(2));b.count(e);b.start(e,"total");this.sa=function(f,g,k,l){d.j.forEach(function(m,n){var t=d.g[n];t=t===Yt||t instanceof mv?2:1;var r=e.source();H(r,3,t);t=e.source();r=m?nv.get(m)||1:1;H(t,4,r);b.stop(e,"total");b.status(e,Ov(d.l[n]))});
d.j=[];c&&c(f,g,k,l)}}
Lw.prototype.cancel=function(){for(var a in this.g)this.g[a].cancel();this.g={}};
Lw.prototype.Gb=function(){for(var a in this.g)if(this.g[a].Gb())return!0;return!1};function Qw(a,b,c){this.B=!!c;b=b||new Nu(!0,!1,Rw);Ku.call(this,a,b,"domain")}
z(Qw,Ku);Qw.prototype.Ya=function(a,b){a.j&&!this.B&&(a=bc(a),a.j=!1);return Qw.J.Ya.call(this,a,b)};
function Rw(a){for(var b=he(a.token).toLowerCase().split(/\s+/),c=[],d=[],e=0;e<b.length;e++){var f=qe(b[e]),g=new RegExp("^"+f,"i");c.push(new RegExp("(^|\\W+)"+f,"i"));d.push(g)}return function(k){if(Pu(a,k.xe())){for(var l=0;l<c.length;l++)if(!k.getName().match(c[l])&&!k.we().match(d[l]))return!1;return!0}return!1}}
Qw.prototype.execute=function(a){a=this.g.execute(a);a.qh(this.getId());return a};function Sw(a){var b={};if(a){a=ja(a);for(var c=a.next();!c.done;c=a.next()){var d=c.value;c=d.containerType;d=d.id||"";c&&d&&(b[c]=b[c]||d)}}return b}
function Tw(a,b){this.personId=a;this.contactId=b.CONTACT||"";this.j=b.DOMAIN_CONTACT||"";this.g=b.PROFILE||b.DOMAIN_PROFILE||"";this.loggingId=""}
function Uw(a){if(!a)return Vw;var b=Sw(u("metadata.identityInfo.sourceIds",a)),c=u("metadata.contactId",a);c&&c[0]?b.CONTACT=c[0]:b.CONTACT&&(c=parseInt(b.CONTACT,16),isFinite(c)&&(b.CONTACT=String(c)));return new Tw(a.personId||"",b)}
var Vw=new Tw("",{});function Ww(a,b){this.j=a;this.g=b}
Ww.prototype.toString=function(){return""};function Xw(a,b){this.j=a||{};this.g=b}
Xw.prototype.toString=function(){return""};
function Yw(a){return Zw(a).some(function(b){return!b.j})}
function Zw(a){return a.g?$w(a.g,a.j.encodedContainerId,a.j.containerType):[]}
function ax(a){return a.g?bx(a.g,a.j.edgeKeyInfo):[]}
var cx=new Xw({},null);function dx(a,b){this.g=a;this.l=b;this.j=null}
dx.prototype.toString=function(){return""};
function ex(a){return a.g.value||""}
var fx=new dx({},null);function gx(a,b){this.g=[];for(var c=ja(a),d=c.next();!d.done;d=c.next())this.g.push(new dx(d.value,b))}
gx.prototype.toString=function(){return""};
function hx(a,b){return a.g[b]||fx}
var ix=new gx([],null);function jx(a,b){this.g=a||{};this.l=b;this.j=null}
jx.prototype.toString=function(){return""};
function kx(a){a.j||(a.j=new Xw(a.g.metadata,a.l));return a.j}
function mx(a){return a.g.displayName||a.g.formattedName||a.g.formattedValue||a.g.value||""}
var nx=new jx({},null);function ox(a){this.g=a}
ox.prototype.toString=function(){return""};
var px=new ox(nx);var qx=["CONTACT","PROFILE","DOMAIN_PROFILE"];function rx(a,b){this.g=[];for(var c=ja(a),d=c.next();!d.done;d=c.next())this.g.push(new jx(d.value,b))}
rx.prototype.toString=function(){return""};
var sx=new rx([],null);function tx(a){this.g=a}
tx.prototype.toString=function(){return""};
var ux=new tx({});function vx(a){this.g=[];a=ja(a);for(var b=a.next();!b.done;b=a.next())this.g.push(new tx(b.value))}
vx.prototype.toString=function(){return""};
var wx=new vx([]);function xx(){}
xx.prototype.toString=function(){return""};function yx(){this.g=[];for(var a=ja([]),b=a.next();!b.done;b=a.next())b=b.value,b.isMonogram||b.isDefault||this.g.push(new xx)}
yx.prototype.toString=function(){return""};
new yx;function zx(a){return a.extendedData&&a.extendedData.contactPreferences?a.extendedData.contactPreferences.map(function(b){return Ax(b.name,b.email)}).join(", "):""}
function Bx(a,b,c,d,e){this.l=a;this.j=b;this.g=c;this.L=d;this.A=this.B=this.F=this.D=null;this.K=void 0===e?0:e;this.C=null}
Bx.prototype.toString=function(){if(null==this.D){if(this.g){var a=this.g.extendedData&&this.g.extendedData.contactPreferences?this.g.extendedData.contactPreferences.length:0;a=1==a?y("(1 contact)"):y("({$count} contacts)",{count:a});a=mx(this.getName().g)+" "+a}else a=this.l||this.j?Ax(mx(this.getName().g),ex(hx(Cx(this),this.K))):"";this.D=a}return this.D};
Bx.prototype.getName=function(){if(!this.B){a:{var a=Dx(this);if(a.g.length){for(var b=ja(qx),c=b.next();!c.done;c=b.next()){c=c.value;for(var d=ja(a.g),e=d.next();!e.done;e=d.next())if(e=e.value,kx(e).j.containerType===c){a=new ox(e);break a}}a=new ox(a.g[0])}else a=px}this.B=a}return this.B};
function Dx(a){if(!a.F){var b;a.l?b=a.l.name:a.j?b=a.j.names:a.g&&(b=[a.g.name]);a.F=b?new rx(b,a.L):sx}return a.F}
function Cx(a){if(!a.A){var b=null;a.l?b=a.l.email:a.j?b=a.j.emails:a.g&&(b=[{value:zx(a.g)}]);a.A=b?new gx(b,a.L):ix}return a.A}
Bx.prototype.getStatus=function(){return null};
Bx.prototype.hasAttribute=function(){return!1};
function Ax(a,b){return a?b&&a!=b?'"'+a.replace(/[\\"]/g,"\\$&")+'" <'+b+">":a:b||""}
var Ex=new Bx(null,null,null,null);function Fx(){this.g=new Map}
function Gx(a,b,c){return c.map(function(d){return a.get(b,d)}).filter(function(d){return null!=d})}
Fx.prototype.get=function(a,b){"DOMAIN_PROFILE"===b&&(b="PROFILE");return this.contains(a,b)?this.g.get(a+"="+b):null};
Fx.prototype.set=function(a,b,c){"DOMAIN_PROFILE"===b&&(b="PROFILE");this.g.set(a+"="+b,c)};
Fx.prototype.contains=function(a,b){"DOMAIN_PROFILE"===b&&(b="PROFILE");return this.g.has(a+"="+b)};function Hx(a){this.g=a?new Bx(a,null,null,null):Ex}
Hx.prototype.toString=function(){return""};
var Ix=new Hx(null);var Jx=new Ww(!0,null);function Kx(a,b,c){var d=[];a&&(Lx("name",a.name,b,d,c),Lx("phone",a.phone,b,d,c),Lx("photo",a.photo,b,d,c));return d.map(function(e){return new Hx(e)})}
function Lx(a,b,c,d,e){if(b){b=ja(b);for(var f=b.next();!f.done;f=b.next())if(f=f.value,"CONTACT"!==u("metadata.containerType",f)){var g=c,k=d,l=e,m=u("metadata.encodedContainerId",f),n=u("metadata.containerType",f);if(g.contains(m,n))var t=g.get(m,n)||0;else t=k.length,g.set(m,n,t),k.push({}),l.push(m);t=k[t];t[a]=t[a]||[];t[a].push(f)}}}
function Mx(a){this.g=new Fx;this.j=new Map;this.l=[];this.A=Kx(a,this.g,this.l)}
Mx.prototype.get=function(a){return this.A[a]||Ix};
function bx(a,b){return b?b.map(function(c){return a.g.get(c.containerId,c.containerType)}).filter(function(c){return null!=c}):[]}
function $w(a,b,c){if(!b||!c)return[];if("CONTACT"===c)return[Jx];var d=b+"="+c;a.j.has(d)||a.j.set(d,Gx(a.g,b,[c]).map(function(e){return new Ww(!1,e)}));
return a.j.get(d)}
new Mx(null);function Nx(a,b){if(a)for(var c=Dx(a),d=0;d<c.g.length;d++){var e=c.g[d]||nx;if(mx(e)&&(!b||b(kx(e))))return mx(e)}return null}
function Ox(a,b,c){a=void 0===a?null:a;b=void 0===b?0:b;c=void 0===c?!1:c;this.l=a&&a.person||null;this.L=a&&a.googleGroup||null;this.C=a&&a.contactGroup||null;this.F=new Mx(this.l);this.D=b;this.j=new Bx(this.l,this.L,this.C,this.F,this.D);this.g=this.B=null;this.text=c?this.getName()||"":this.j.toString()}
ra(Ox,tu);h=Ox.prototype;h.toString=function(){return"cl"===this.xe()?this.we()||"":this.text};
h.getId=function(){if(!this.B){if(this.l)var a=Uw(this.l);else if(this.L)if(a=this.L){var b=Sw(a.sourceIds);a=new Tw(a.personId||"",b)}else a=Vw;else this.C?(a=this.C)?(b={},b.CONTACT=u("id.id",a)||"",a=new Tw("",b)):a=Vw:a=Vw;this.B=a}return this.B.contactId};
h.getName=function(){null===this.g&&(this.g=Nx(this.j,function(a){return!!a&&!Yw(a)}),null===this.g&&(this.g=Px(this)));
return this.g};
h.we=function(){return ex(hx(Cx(this.j),this.D))};
h.xe=function(){var a=this.j;if(a.g)a="cl";else if(a.j)a="li";else{var b;if(b=!ex(hx(Cx(a),0))){if(!a.C){var c;a.l?c=a.l.phone:a.j&&(c=a.j.phones);a.C=c?new vx(c):wx}b=(a.C.g[0]||ux).g.value||""}a=b?"pt":"ct"}return a};
h.oi=function(){return 0};
function Px(a){var b=hx(Cx(a.j),a.D);b.j||(b.j="metadata"in b.g?new Xw(b.g.metadata,b.l):cx);b=b.j;for(var c=0;c<ax(b).length;c++){var d=c;d=ax(b)[d];d=a.F.get(d).g;d=Nx(d);if(null!==d)return d}for(c=0;c<Zw(b).length;c++)if(d=c,d=Zw(b)[d],null!==d.g&&(d=a.F.get(d.g||0).g,d=Nx(d),null!==d))return d;return""}
function Qx(a,b,c){c=void 0===c?!1:c;if(void 0===b?0:b)return a.map(function(l){return new Ox(l,void 0,!0)});
b=new Set;var d=[];a=ja(a);for(var e=a.next();!e.done;e=a.next()){e=e.value;var f=u("person.email",e)||u("googleGroup.emails",e)||[];if(c||f&&f.length)for(var g=0;g<f.length;g++){var k=(u("value",f[g])||"").trim().toLowerCase();if(c){if(b.has(k))continue;b.add(k)}d.push(new Ox(e,g))}else d.push(new Ox(e))}return d}
;function Rx(a,b,c,d,e,f,g,k,l,m,n,t,r,v,B,E){B=void 0===B?new Uu:B;E=void 0===E?!1:E;this.metrics=a;this.D=b;this.C=c;this.clientId=d;this.clientName=e;this.clientVersion=f||"contact_store_311835110";this.affinityType=g;this.g=k;this.timeoutMs=l;this.F=m?m:function(){};
this.B=n;this.L=t;this.j=r.split(/[\s,]+/).filter(function(X){return!!X});
this.l=v;this.experiments=B;this.A=E}
Rx.prototype.setTimeout=function(a){var b=this.timeoutMs;0<a&&(this.timeoutMs=a);return b};function Sx(a,b){var c=Error.call(this,void 0===b?"":b);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.code=a}
ra(Sx,Error);function Tx(a,b,c){this.config=a;this.hb=a.F;this.U=a.timeoutMs;this.j=a.metrics;this.g=new Tv(b);this.S=c;this.A=null;this.l=0;this.K="";this.j.start(this.g,"total");this.j.start(this.g,"blocked")}
h=Tx.prototype;h.qh=function(a){this.K=a};
h.ij=function(){return this.K};
h.Gb=function(){return 1==this.l};
h.cancel=function(){switch(this.l){case 1:this.A.cancel();break;case 0:this.l=2,this.A=yk(new Kk),Ux(this,null,11)}};
h.send=function(a){var b=this;if(0!==this.l)return this.A;this.j.count(this.g);this.j.stop(this.g,"blocked");this.j.start(this.g,"network");this.l=1;var c=this.B();if(c&&c.path){var d=this.config.C||"";d&&!cv()&&(c.params=c.params||{},c.params.key=d);c.headers=dv(d);c.root=this.config.D;c.authType="auto";a=a.request(c)}else a=Promise.resolve({result:{}});return this.A=Hk(Bk([a,Wk(this.U,"TIMEOUT")]),function(){b.l=2;b.j.stop(b.g,"network")}).then(function(e){a:{if("TIMEOUT"===e)Vx(b,e);
else{var f=e&&e.result;if(!f||"error"in f)Vx(b,e);else{try{var g=b.C(f)}catch(k){Vx(b,k);e=void 0;break a}try{Ux(b,g,0)}finally{b.j.stop(b.g,"total"),b.j.status(b.g,0)}}}e=void 0}return e},function(e){return Vx(b,e)})};
function Vx(a,b){var c=!1,d=2,e=1;try{if("TIMEOUT"===b)d=4,e=10;else if(b instanceof Kk)d=1,e=11;else if(b instanceof Sx)d=b.code,e=Nv(d);else if(b&&"object"===typeof b){var f=u("result.error.code",b)||b.status,g=f;g=Number(g);d=Kv.has(g)?Kv.get(g):200<=g&&300>g?0:400<=g&&500>g?9:500<=g&&600>g?13:2;e=Nv(d);c=401==f||403==f}else d=2,e=1}finally{a.j.status(a.g,d),Ux(a,null,e,c)}}
function Ux(a,b,c,d){if(void 0===d?0:d)try{a.hb()}catch(e){throw e;}try{a.S(b||[],c)}catch(e){throw e;}}
;function Wx(a,b,c){Tx.call(this,a,Iv(b),c);this.D=a.clientId;this.L=a.clientName;this.M=a.clientVersion;this.F=a.g;this.O=b;this.P=a.B}
ra(Wx,Tx);Wx.prototype.B=function(){var a={query:this.O,client:this.D,"clientVersion.clientAgent":"CONTACT_STORE","clientVersion.clientType":this.L,"clientVersion.clientVersion":this.M,pageSize:this.P};this.F&&(a["authDelegationContext.delegationType"]="GMAIL",a["authDelegationContext.obfuscatedOwnerId"]=this.F);return{method:"GET",path:"v2/people/autocomplete",params:a}};
Wx.prototype.C=function(a){var b=a.status;if(b){if(b.personalResultsNotReady)throw new Sx(14,"PersonalResultsNotReady");if(b.requestThrottled)throw new Sx(8,"RequestThrottled");if(b.containsPartialResults)throw new Sx(8,"ContainsPartialResults");}return Qx(a.results||[],this.config.A)};function Xx(a){this.j=a;this.g=null}
Xx.prototype.toString=function(){return""};
function Yx(a){a.g||(a.g=Uw(a.j));return a.g}
Xx.prototype.getId=function(){return Yx(this).contactId||Yx(this).g||Yx(this).j};
Xx.prototype.hasAttribute=function(){return!1};
var Zx=new Xx(null);function $x(a){a=void 0===a?null:a;new Mx(a);this.g=a?new Xx(a):Zx}
$x.prototype.toString=function(){return""};
$x.prototype.getId=function(){return this.g.getId()};
$x.prototype.hasAttribute=function(a){return this.g.hasAttribute(a)};function ay(a,b,c){Tx.call(this,a,sv(rv(3),4),c);this.L=a.clientName;this.M=a.clientVersion;this.F=a.g;this.D=b.filter(function(d){return!!d});
this.P=a.j;this.O=a.l}
ra(ay,Tx);
ay.prototype.B=function(){if(!this.D.length)return{};var a={personId:this.D,context:{clientVersion:{clientAgent:"CONTACT_STORE",clientType:this.L,clientVersion:this.M}},mergedPersonSourceOptions:{includedProfileStates:"CORE_ID",personModelParams:{personModel:"CONTACT_CENTRIC"}},requestMask:{imageUrlType:"FIFE_URL",includeContainer:this.P,includeField:this.O}};this.F&&(a.context.authDelegationContext={delegationType:"GMAIL",obfuscatedOwnerId:this.F});return{method:"POST",path:"v2/people:batchGet",body:a}};
ay.prototype.C=function(a){return(a.personResponse||[]).filter(function(b){return"SUCCESS"==b.status}).map(function(b){return new $x(b.person)})};function by(a,b,c,d){Tx.call(this,a,Jv(b),d);this.M=a.clientName;this.P=a.clientVersion;this.L=a.g;this.D=cy(b);this.F=c.filter(function(e){return!!e});
this.O=a.j;this.R=a.l}
ra(by,Tx);
by.prototype.B=function(){if(!this.F.length||!this.D)return{};var a={"context.clientVersion.clientAgent":"CONTACT_STORE","context.clientVersion.clientType":this.M,"context.clientVersion.clientVersion":this.P,id:this.F,"mergedPersonSourceOptions.includedProfileStates":"CORE_ID","mergedPersonSourceOptions.personModelParams.personModel":"CONTACT_CENTRIC","profileLookupOptions.emailLookupOption":"INCLUDE_EMAIL_LOOKUP_KEY","requestMask.includeContainer":this.O,"requestMask.includeField":this.R,"requestMask.imageUrlType":"FIFE_URL",
type:this.D};this.L&&(a["context.authDelegationContext.delegationType"]="GMAIL",a["context.authDelegationContext.obfuscatedOwnerId"]=this.L);return{method:"GET",path:"v2/people/lookup",params:a}};
by.prototype.C=function(a){var b=a.matches,c=a.people,d=[];b&&c&&b.forEach(function(e){e=ja(e.personId);for(var f=e.next();!f.done;f=e.next())(f=c[f.value])&&d.push(new $x(f))});
return d};
function cy(a){switch(a){case 1:return"EMAIL";case 2:return"PHONE";case 3:return"CONTACT";case 5:return"SYNTHETIC";default:return""}}
;function dy(a,b){Tx.call(this,a,rv(9),b);this.D=a.affinityType;this.L=a.clientName;this.M=a.clientVersion;this.P=a.L;this.O=a.j;this.R=a.l;this.F=[];sg(a.experiments,6,!0)&&this.F.push("FILTER_TO_PRIMARY")}
ra(dy,Tx);
dy.prototype.B=function(){var a={"affinity.type":this.D,"context.clientVersion.clientAgent":"CONTACT_STORE","context.clientVersion.clientType":this.L,"context.clientVersion.clientVersion":this.M,"pagingOptions.pageSize":this.P,"requestMask.includeContainer":this.O,"requestMask.includeField":this.R,"mergedPersonSourceOptions.includedProfileStates":"CORE_ID","mergedPersonSourceOptions.personModelParams.personModel":"CONTACT_CENTRIC"};this.F.length&&(a["extensionSet.extensionNames"]=this.F);return{method:"GET",
path:"v2/people/rankedTargets",params:a}};
dy.prototype.C=function(a){return Qx(a.rankedTarget||[],this.config.A,!0)};function bu(){}
bu.prototype.getError=function(){return 0};var ey=new Map([[1,4],[2,2],[3,1],[4,7]]);function fy(a,b){I.call(this);var c=this;this.j=a;this.g=new Map;this.B=null;this.C=!1;this.l=a.metrics;this.A=new Tv(pv(1));this.l.start(this.A,"total");this.l.start(this.A,"blocked");b.then(function(d){c.l.stop(c.A,"blocked");d?gy(c,d):hy(c,5)},function(){hy(c,5)})}
ra(fy,I);function gy(a,b){b&&b.request?(gv(),a.l.stop(a.A,"total"),a.l.status(a.A,0),a.B=b,a.g.forEach(function(c,d){return c.forEach(function(e){return iy(a,d,e)})})):hy(a,9)}
fy.prototype.N=function(){for(var a=ja(this.g.keys()),b=a.next();!b.done;b=a.next())Mu(this,b.value)};
function hy(a,b){a.l.status(a.A,b);a.C=!0;a.N()}
function Mu(a,b){b=b||"";a.g.has(b)&&(jy(a.g.get(b)),a.g["delete"](b))}
function ky(a,b,c){a.C?c.cancel():(Lu(a,b).push(c),iy(a,b,c))}
function iy(a,b,c){a.B&&Hk(c.send(a.B),function(){var d=b;d=d||"";if(a.g.has(d)){d=a.g.get(d);var e=d.indexOf(c);0<=e&&d.splice(e,1)}})}
function Lu(a,b){b=b||"";if(a.g.has(b))return a.g.get(b);var c=[];a.g.set(b,c);return c}
function jy(a){a&&a.length&&(a.forEach(function(b){return b.cancel()}),a.length=0)}
fy.prototype.getAuthToken=function(){return""};
fy.prototype.Ya=function(a,b,c){function d(g,k){return c(g,f,b,a,k)}
var e=a&&a.token||"",f=e?new Wx(this.j,e,d):new dy(this.j,d);ky(this,b,f);return f};
fy.prototype.execute=function(a){function b(n,t){t?a.j(cu(t,g)):a.j(au(g))}
if(a.g())return this.l.status(new Tv(rv(4)),12),ly(a);var c=a.l&&a.l()||{},d=c.Ne,e=this.j.setTimeout(a.K());try{var f=c.oy||[];if(f.length)var g=new by(this.j,1,f,b);else{var k=c.contactIds||[];if(k.length)g=new by(this.j,3,k,b);else{var l=c.wy||[];if(l.length)g=new ay(this.j,l,b);else{var m=c.Cy||[];if(m.length)g=new by(this.j,5,m,b);else return this.l.status(new Tv(pv(2)),12),ly(a)}}}}finally{this.j.setTimeout(e)}ky(this,d,g);return g};
function ly(a){var b=new mv(function(){return a.j(cu(5,b))});
return b}
;function my(a,b,c){b=b||new Nu(!0,!0);Ku.call(this,a,b,"personal",c)}
ra(my,Qu);my.prototype.Wf=function(a,b){Qu.prototype.Wf.call(this,a,b)};function ny(a){var b=iv(a),c=rg(b,10)||sg(jv(a),5,!0),d=c?new Iw(void 0,Gw(a)):new xw(void 0,Gw(a)),e=ww(new ew(a,1)),f=qg(a.g,5)||1;var g=ey.get(f)||4;g=void 0===g?0:g;g=void 0===g?0:g;var k;if(k=0===g)k=(k=u("gapi.config.get"))?(k=k("oauth-flow/authUrl"))&&(0<k.indexOf("staging")||0<k.indexOf("test"))?2:1:0,k=2===k;k&&(g=7);switch(g){case 7:g="dev-";k="-googleapis.corp";break;case 1:g="autopush-";k="-googleapis.sandbox";break;case 2:g="staging-";k="-googleapis.sandbox";break;default:g="",k=".clients6"}g=
"https://"+g+"people-pa"+k+".google.com";(k=(k=u("gapi.config.get"))&&k("client/rewrite"))&&k[g]&&(g=String(k[g]));f=4===f?qg(iv(a),2)||"":qg(iv(a),1)||"";k=qg(iv(a),4);var l=qg(iv(a),5),m=qg(iv(a),6)||"",n=G(iv(a),12,"CONTACT_STORE_DEFAULT_AFFINITY")||"",t=qg(a.g,2),r=a.A,v=G(iv(a),8,3E4),B=sg(iv(a),17,!1);e=new Rx(e,g,f,k,l,m,n,t,v,r,G(iv(a),13,15),G(iv(a),14,500),G(iv(a),15,"CONTACT,PROFILE,DOMAIN_CONTACT,DOMAIN_PROFILE,AFFINITY"),G(iv(a),16,"person.name,person.photo,person.email,person.phone,person.email.certificate,person.metadata"),
jv(a),B);a=new fy(e,kv(a));e=new my(a);e.Wf(null,"Personal Contacts");d.fh(e,!0);c&&(b=new Qw(a,null,!!rg(b,11)),b.Wf(null,"Domain Contacts"),d.fh(b,!0));return d}
;function oy(a,b,c,d){a=new hv(new Wu([["AIzaSyBuUpn1wi2-0JpM3S-tq2csYx0z2_m_pqc","ANVavNLWozk6oXyP9qguyx4QAuef5j_qQw4Y3Rw",755,"MINIMAL_DOMAIN_GROUP","MISSED_LEGACY_INTEGRATION"],[]]));a.A=c||null;b&&lv(a,b);H(a.g,5,d?4:1);return ny(a)}
;function py(a,b,c,d,e,f,g,k,l,m){f=f||new Ts(",;",'"');b=this.di(b,g,l,m);As.call(this,this,b,f);this.Ed=this.K;this.Ed.g=this;this.F=a;this.S=c;this.P=d||null;this.gj=e||15;this.R=!!k}
z(py,As);function qy(a,b,c,d,e,f,g,k,l,m){b=new py(null,b,void 0,f,c,d,e,void 0,void 0,g);xo(a);ry.call(null,b,oy(0,k,l,m));return b}
function sy(a,b,c,d,e,f,g){b=new py(null,b,void 0,f,c,d,e,void 0,void 0,g);ry(b,ny(a));return b}
function ry(a,b){b.Ya(ku,Ja);a.F=b;a.R=!0;a.nh&&a.mh&&(a.M=a.F.Ya(a.nh,a.mh),a.nh=null,a.mh=null)}
h=py.prototype;h.N=function(){this.Ed.dispose();this.F&&this.R&&Th(this.F);py.J.N.call(this)};
h.nh=null;h.mh=null;h.Ed=null;h.Ul=!0;h.Pg=function(a){return!!a.K};
h.ih=function(a,b,c){a={token:a,g:b,A:!0,j:this.Ul,matchType:1,M:hu,Ne:this.S,filter:this.P,B:!0,F:!!this.U,L:!1};c=w(this.yp,this,c);if(a.token&&""!=a.token)this.F?(this.M&&(this.M.cancel(),this.M=null),this.M=this.F.Ya(a,c)):(this.nh=a,this.mh=c);else{b=new mv;var d=[];this.P&&(d=this.P(d,a.token));b.j=Ua(c,d,b,null,a)}};
h.yp=function(a,b,c,d,e){a(e.token,b)};
h.di=function(a,b,c,d){b=new Lt(b||null,c||this,d);b.S=!0;b.className=a;b.D=!0;return b};
h.xf=function(a,b){py.J.xf.call(this,a,b)};
h.dismiss=function(){py.J.dismiss.call(this)};
h.wf=function(a,b,c){b=b={displayName:a.data.text,Mr:!!(a.data.flags&1)};a=b.displayName;b=b.Mr;a=Kp('<div class="'+Q("goog-contacts-ui-autocomplete-name-nochat")+(b?" "+Q("goog-contacts-ui-autocomplete-new-section"):"")+'">'+Jp(a)+"</div>");a=Xp(a);ae(c,a)};
h.Jd=function(){var a=Bs(this,this.B);return-1!=a&&(a=this.l[a],a.A)?(a.A(),!0):py.J.Jd.call(this)};
q("createAutoComplete",function(a,b,c,d,e,f,g,k,l,m,n,t,r,v){d&&(b=b+d+"/");b=oy(xo(b),t,r,v);f&&b.Ya(ku,Ja);c=new py(b,c,void 0,l,e,k,m,!0);c.vp(M(a));return c},void 0);function ty(a){L.call(this);this.j=new qn(this);this.g=null;this.B=0;var b=ck(a);sf?(this.g=uy(a),a=Kj(this.g),this.j.G(a,"resize",this.A)):tf?(this.g=uy(a),a=Kj(this.g),this.j.G(a,"resize",this.l),this.j.G(b,"resize",this.C)):C?(b=a.W("DIV",{style:"position:absolute;width:9em;height:9em;top:-99em",tabIndex:-1,"aria-hidden":"true"}),a=a.g.body,a.insertBefore(b,a.firstChild),this.g=b,this.j.G(this.g,"resize",this.l)):this.j.G(b,"resize",this.l)}
z(ty,L);var vy={};function uy(a){var b=a.W("IFRAME",{style:"position:absolute;width:9em;height:9em;top:-99em",tabIndex:-1,"aria-hidden":"true"});a=a.g.body;a.insertBefore(b,a.firstChild);a=Kj(b);sf&&(a=a.document,a.open(),a.close());return b}
ty.prototype.N=function(){ty.J.N.call(this);wy(this);Th(this.j);this.g&&(sf&&!Jf("1.9")||Bj(this.g),delete this.g)};
ty.prototype.A=function(){this.dispatchEvent("resize")};
ty.prototype.l=function(){wy(this);this.ea=Uk(function(){this.ea=null;this.A()},0,this)};
function wy(a){null!=a.ea&&(Vk(a.ea),a.ea=null)}
ty.prototype.C=function(){null!=this.ea&&(wy(this),this.A());tf&&this.l()};function xy(a,b,c){I.call(this);this.j=a?a.g:document;this.A=b||"";this.l=c}
z(xy,I);xy.prototype.N=function(){this.g&&Bj(this.g);this.j=this.g=null};
function yy(a){if(!a.g){a.g=a.j.createElement("div");a.g.className=a.A;a.g.style.whiteSpace="nowrap";a.g.style.overflow="auto";if(a.l)for(var b in a.l)a.g.style[b]=a.l[b];a.g.style.visibility="hidden";a.g.style.width="0px";a.g.style.display="";a.g.style.position="absolute";a.g.style.top="-1000px";a.j.body.appendChild(a.g)}return a.g}
function zy(a,b){var c=yy(a);if("textContent"in c)c.textContent=b;else{for(;c.hasChildNodes();)c.removeChild(c.firstChild);c.appendChild(a.j.createTextNode(b))}}
;function Ay(a,b,c){L.call(this);this.C=a;this.g=new xy(this.C,b,c);this.j={};this.A=null;b=Pa(a.g);vy[b]||(vy[b]=new ty(a),vy[b].F=b);vy[b].B++;this.B=vy[b];K(this.B,"resize",this.F,!1,this);delete this.l;c=this.C;b=ck(c)||window;!0!==By&&b.CanvasRenderingContext2D&&(a=Cy(this,"The quick brown fox jumps over the lazy dog."),this.j={},b=(Li?new b.OffscreenCanvas(0,0):c.createElement("canvas")).getContext("2d"),b.mozMeasureText||b.measureText)&&(c=ck(c).getComputedStyle(yy(this.g),null),c=[c.fontStyle,
c.fontVariant,c.fontWeight,c.fontSize+"/"+c.lineHeight,c.fontFamily].join(" "),b.mozMeasureText?b.mozTextStyle=c:b.font=c,this.l=b,zy(this.g,""),b=yy(this.g),this.D=b.scrollWidth||b.clientWidth,By=!1,Dy(this,"The quick brown fox jumps over the lazy dog.")!=a&&(this.l=null,By=!0))}
var By;z(Ay,L);Ay.prototype.N=function(){this.g.dispose();Bi(this.B,"resize",this.F,!1,this);var a=this.B;a.B--;a.B||(delete vy[a.F],a.dispose())};
function Dy(a,b){if(!(b in a.j)){if(a.l){var c=a.D,d=a.l;try{d.mozMeasureText?c+=d.mozMeasureText(b):(c+=d.measureText(b).width,tf&&(c=Math.ceil(c*Ey(a))))}catch(e){c=Cy(a,b),delete a.l}}else c=Cy(a,b);a.j[b]=c}return a.j[b]}
function Cy(a,b){zy(a.g,b);var c=yy(a.g);return c.scrollWidth||c.clientWidth}
function Ey(a){if(!a.A&&tf){var b=a.C.g,c=b.body.clientWidth;b=b.defaultView.getComputedStyle(b.body,null).width;a.A=c/parseInt(b,10)}return a.A}
Ay.prototype.F=function(){this.A=null;this.j={};this.dispatchEvent("resize")};function Fy(a){this.l=a;this.g={}}
h=Fy.prototype;h.Za=function(a){this.j=a||void 0;return this};
h.Kb=function(){var a=Ob(this.g,function(c){return null!==c});
a=Xb(a)?null:a;a=[this.l,this.j,a];var b=lb(a,Kb);return a=a.slice(0,b+1)};
h.toString=function(){var a=this.Kb();return"("+fb(a,function(b){return cr(b)}).join(",")+")"};
h.getId=function(){return this.l};
h.getOptions=function(){return bc(this.g)};function Gy(){Fy.call(this,"image-search")}
z(Gy,Fy);Gy.prototype.setSize=function(a){this.g.imgsz=a;return this};
Gy.prototype.Za=function(a){Gy.J.Za.call(this,a);return this};function Hy(){Fy.call(this,"maps")}
z(Hy,Fy);Hy.prototype.Za=function(a){Hy.J.Za.call(this,a);return this};function Iy(){Fy.call(this,"photos")}
z(Iy,Fy);function Jy(a){a.g.svm=!0;return a}
function Ky(a){var b=new Iy;b.g.type=a;return b}
Iy.prototype.Za=function(a){Iy.J.Za.call(this,a);return this};function Ly(){Fy.call(this,"url")}
z(Ly,Fy);Ly.prototype.Za=function(a){Ly.J.Za.call(this,a);return this};function My(){Fy.call(this,"video-search")}
z(My,Fy);My.prototype.Za=function(a){My.J.Za.call(this,a);return this};function Ny(){Fy.call(this,"web")}
z(Ny,Fy);Ny.prototype.Za=function(a){Ny.J.Za.call(this,a);return this};function Oy(){this.g=[];this.j={}}
function Py(a){switch(a){case "image-search":return new Gy;case "maps":return new Hy;case "photos":return new Iy;case "url":return new Ly;case "video-search":return new My;case "web":return new Ny}return new Fy(a)}
function Qy(a){return"("+fb(a.g,function(b){return b.toString()}).join(",")+")"}
Oy.prototype.toString=function(){return Qy(this)};
function Ry(a,b){b=void 0===b?[]:b;a.g.forEach(function(c){c instanceof Oy?Ry(c,b):b.push(c)});
return b}
Oy.prototype.getOptions=function(){return bc(this.j)};function Sy(a){this.A=a||"https://docs.google.com/picker";this.j=new Oy}
Sy.prototype.j=null;function Ty(a,b){a.j.g.push("string"===typeof b?Py(b):b);return a}
function Uy(a,b){a.ib=b;return a}
;function Vy(a){this.action=a;this.wfv=!1}
;function Wy(a,b){switch(G(a[0].getId(),2,0)){case 13:return Xy(a,b);case 3:return Yy(a,b);case 10:return Zy(a,b,"upload");case 12:return $y(a,b);case 2:return az(a,b);case 5:return bz(a,b);case 9:return cz(a,b);case 1:return null!=xg(a[0],Qg,26)?dz(a,b):Zy(a,b,"webcam");default:return{}}}
function az(a,b){var c=a.map(function(d){return{id:d.getId().getId(),serviceId:"docs",mimeType:G(d,7,""),name:d.getName(),type:G(d,6,0),lastEditedUtc:xg(d,Lg,12),url:G(d,8,""),sizeBytes:G(d,23,0),description:Yg(d),iconUrl:G(d,11,""),thumbnails:ez(Zg(d)),isShared:sg(xg(d,Vg,21),1,!1),downloadUrl:G(xg(d,Vg,21),10,""),embedUrl:G(d,13,""),copyable:sg(xg(d,Vg,21),9,!1)}});
return{action:b,docs:c,viewToken:fz("all","",{}),view:"all"}}
function bz(a,b){var c=a.map(function(d){var e=xg(xg(d,Ug,15),Pg,1);Dg(d,10,e,Pg);return{id:d.getId().getId(),serviceId:"web",mimeType:G(d,7,""),name:d.getName(),type:G(d,6,0),url:G(d,8,""),description:Yg(d),iconUrl:"https://ssl.gstatic.com/docs/doclist/images/icon_10_generic_list.png",thumbnails:ez(Zg(d))}});
return{action:b,docs:c,viewToken:fz("image-search","Search",{}),view:"image-search"}}
function cz(a,b){var c=a.map(function(d){return{serviceId:"url",name:G(Zg(d)[0],1,"").split("/").pop(),type:"photo",mimeType:G(d,7,""),url:G(d,8,""),description:Yg(d),iconUrl:"https://ssl.gstatic.com/docs/doclist/images/icon_10_generic_list.png",thumbnails:ez(Zg(d))}});
return{action:b,docs:c,viewToken:fz("url","By URL",{}),view:"url"}}
function dz(a,b){var c=a.map(function(d){return{id:d.getId().getId(),serviceId:"picasa",name:d.getName(),type:G(d,6,0),description:Yg(d),iconUrl:"https://ssl.gstatic.com/docs/doclist/images/icon_10_generic_list.png",thumbnails:ez(Zg(d))}});
return{action:b,docs:c,viewToken:fz("webcam","",{}),view:"webcam"}}
function Zy(a,b,c){var d=a.map(function(e){return{id:e.getId().getId(),serviceId:"photo",mimeType:G(e,7,""),name:e.getName(),type:G(e,6,0),sizeBytes:G(e,23,0),description:Yg(e),iconUrl:"https://ssl.gstatic.com/docs/doclist/images/icon_10_generic_list.png",thumbnails:ez(Zg(e))}});
a=new Set(a.map(function(e){return G(e,6,0)}));
a={allowedItemTypes:Array.from(a)};return{action:b,docs:d,viewToken:fz(c,"",a),view:c}}
function Yy(a,b){var c=a.map(function(e){return{id:e.getId().getId(),serviceId:"picasa",mimeType:G(e,7,""),name:G(Zg(e)[0],1,"").split("/").pop(),type:G(e,6,0),lastEditedUtc:xg(e,Lg,12),url:G(e,8,""),sizeBytes:G(e,23,0),description:Yg(e),iconUrl:"https://ssl.gstatic.com/docs/doclist/images/icon_10_generic_list.png",thumbnails:ez(Zg(e))}}),d=new Set(a.map(function(e){return G(e,6,0)}));
d={allowedItemTypes:Array.from(d)};return{action:b,docs:c,viewToken:fz("photos","",d),view:"photos"}}
function Xy(a,b){var c=a.map(function(e){return{id:e.getId().getId(),serviceId:"et",name:G(Zg(e)[0],1,"").split("/").pop(),description:Yg(e),type:"et",iconUrl:"https://ssl.gstatic.com/docs/doclist/images/icon_10_generic_list.png",thumbnails:ez(Zg(e),"etjpg")}}),d={category:G(xg(a[0],Tg,28),1,0)};
d=fz("et",G(xg(a[0],Tg,28),2,""),d);return{action:b,docs:c,viewToken:d,view:"et"}}
function $y(a,b){var c=a.map(function(d){var e=xg(d,Rg,27);e=qg(e,1)[0];return{id:d.getId().getId(),serviceId:"contacts",mimeType:G(d,7,""),name:d.getName(),description:Yg(d),url:"mailto:"+e,thumbnail:[{url:G(d,11,"")}],email:e}});
return{action:b,docs:c,view:"contacts"}}
function fz(a,b,c){return{0:a,1:b,2:c}}
function ez(a,b){b=void 0===b?"":b;if(!a.length)return null;"etjpg"==b&&(a=a.filter(function(c){return G(c,1,"").includes("w1200-h300")}));
return a.map(function(c){return{url:G(c,1,""),height:c.getHeight(),width:G(c,3,0),type:b}})}
;var gz=Dc(oc("https://apis.google.com/js/api.js"));function hz(a){var b=!1,c=iz(a).then(function(e){b=!0;return e}),d=Wk(5E3).then(function(){return b?iz(a):jz().then(function(e){return kz(e,a)})});
return Dk([c,d])}
function iz(a){return(window.gapi&&window.gapi.load?xk(window.gapi):jz()).then(function(b){return kz(b,a)})}
function kz(a,b){var c=Fc(b,"gapi.")?b.slice(5):b;return a[c]?xk(a[c]):new sk(function(d,e){var f=Uk(function(){e(Error("Gapi load timeout"))},3E4);
a.load(b,{callback:function(){Vk(f);d(a[c])},
onerror:function(g){Vk(f);e(g)}})})}
function jz(){return Mn(gz).then(function(){return window.gapi})}
function lz(){}
lz.prototype.load=function(a){return hz(a).then(null,function(b){throw b instanceof Error?b:Error(String(b));})};function mz(){var a=this;this.A=new lz;this.l=null;this.j=nz(this);this.g=Ek();this.j.then(null,function(b){return void a.g.reject(b)});
this.g.g.then(null,function(b){JSON.stringify(b)})}
function nz(a){Date.now();return a.A.load("gapi.iframes").then(function(b){a.B=Date.now();return b})}
function oz(a,b,c,d,e,f){var g=!0;g=void 0===g?!1:g;a.j.then(function(){var k=g;k=void 0===k?!1:k;var l={};l["host-message-handler"]=c;var m=xo(d);m=xo(m);m=io(nh(oh(new ph,m.l),m.A),m.F).toString();a.l=m;m=new ap;m.g.url=d;m.g.where=b;m.g.allowPost=k;m.g.messageHandlers=l;k=pz(a);m.g.messageHandlersFilter=k;null!=e&&(m.g.id=e);null!=f&&(m.g.rpctoken=f);k=bp(m);k.g.style={display:"block","min-width":"100%",width:"1px"};k.g.height="100%";bp(m).value().allow="camera";return(oj(b.ownerDocument).gapi||
window.gapi).iframes.getContext().openChild(m.value())}).then(function(k){return void a.g.resolve(k)},function(k){return void a.g.reject(k)});
return a.g.g}
function qz(a,b){return a.g.g.then(function(c){return c?c.send("picker-message-handler",b,void 0,pz(a)):yk(Error("Iframe not loaded."))})}
function pz(a){return u("gapi.iframes.makeWhiteListIframesFilter")([a.l])}
;function rz(){}
rz.prototype.g=0;y("Camera");y("Google Drive");y("Drive Upload");y("Google Photos");y("Local Disk");y("Google Image Search");y("Image Search");y("Google Image Search");y("Life Archive Search");y("Youtube");y("Google Calendar");y("Themes");y("By Url");y("Upload");y("Contacts");y("Themes");var sz=y("Upload"),tz=y("My Drive"),uz=y("Shared with me"),vz=y("Recent"),wz=y("Starred"),xz=y("Shared drives"),yz=y("Computers");function zz(){var a=new Bh,b=new xh;ug(b,1,"root","");var c=Az();Ag(b,3,c);tg(b,4,1);Ag(a,3,b);tg(a,1,2);Dh(a,tz);return a}
function Bz(){var a=new Bh,b=new xh;ug(b,5,!0,!1);var c=Az();tg(c,1,7);Ag(b,3,c);tg(b,4,1);Ag(a,3,b);tg(a,1,2);Dh(a,uz);return a}
function Cz(){var a=new Bh,b=new xh,c=new wh;tg(c,1,10);tg(c,2,2);Ag(b,3,c);tg(b,4,1);Ag(a,3,b);tg(a,1,2);Dh(a,vz);return a}
function Dz(){var a=new Bh,b=new xh;ug(b,7,!0,!1);var c=Az();Ag(b,3,c);tg(b,4,1);Ag(a,3,b);tg(a,1,2);Dh(a,wz);return a}
function Ez(){var a=new Bh,b=new xh;ug(b,11,!0,!1);Ag(a,3,b);tg(a,1,2);Dh(a,xz);return a}
function Az(){var a=new wh;tg(a,1,4);tg(a,2,1);return a}
;var Fz=y("Photos"),Gz=y("Albums"),Hz=y("Videos");function Iz(){var a=new Eh;Gh(a,Jz());Gh(a,Kz());return a}
function Jz(){var a=new Bh,b=new zh;tg(b,3,1);tg(b,2,1);ug(b,5,!0,!1);ug(b,6,!1,!1);Ag(a,6,b);tg(a,1,3);Dh(a,Fz);return a}
function Kz(){var a=new Bh,b=new zh;tg(b,3,2);ug(b,5,!0,!1);ug(b,6,!1,!1);Ag(a,6,b);tg(a,1,3);Dh(a,Gz);return a}
function Lz(){var a=new Bh,b=new zh;tg(b,3,1);tg(b,2,1);ug(b,5,!1,!1);ug(b,6,!0,!1);Ag(a,6,b);tg(a,1,3);Dh(a,Hz);return a}
;var Mz=new Map([["birthday",14],["children",1],["dinner",2],["featured",3],["holiday",4],["nightlife",5],["other",6],["party",7],["school",8],["seasonal",9],["sport",10],["stationery",11],["travel",12],["wedding",13]]),Nz=new Set("all docs-images docs-images-and-videos docs-videos documents drawings folders forms pdfs presentations scripts sites spreadsheets tables".split(" "));
function Oz(a,b,c,d){var e=mh(lh(kh(),a));a=[];try{for(var f=0;f<d.length;f++){var g=d[f],k=g[0],l=g[1];switch(k){case "cropphoto":for(var m=gh(2),n=new dh,t=ja(Object.entries(l||{})),r=t.next();!r.done;r=t.next()){var v=ja(r.value),B=v.next().value;v.next();switch(B){case "ctta":break;default:throw Error("PostProcessor Option '"+B+"' not supported in V2 for PostProcessor '"+k+"'");}}Bg(m,3,fh[0],n);Dg(e,28,m,eh);break;default:throw Error("PostProcessor '"+k+"' not supported in V2");}}c.forEach(function(E,
X){switch(X){case "hostId".toString():ug(e,24,E,"");break;case "origin".toString():ug(e,27,E,"");break;case "title".toString():e.setTitle(E);break;case "hl".toString():ug(e,10,E,"");break;case "multiselectEnabled".toString():if("true"==E){var fa=new hh;tg(fa,1,1);Ag(e,3,fa)}break;case "st".toString():ug(e,12,E,"");break;case "authuser".toString():fa=parseInt(E,10);if(isNaN(fa))throw Error("Invalid AuthUser");var ia=new Ng;fa=ug(ia,1,fa,0);Ag(e,6,fa);break;case "maxItems".toString():ug(e,5,parseInt(E,
10),0);break;case "profilePhoto".toString():e.setTitle("Select Profile Photo");fa=gh(2);ia=new dh;ia=ug(ia,2,!0,!1);fa=Bg(fa,3,fh[0],ia);Dg(e,28,fa,eh);fa=gh(1);Dg(e,28,fa,eh);break;case "gmailDelegatorId".toString():fa=new Kg;fa=ug(fa,1,E,"");Ag(e,29,fa);break;case "minSize".toString():fa=Pz(E);Ag(e,32,fa);break;case "maxSize".toString():fa=Pz(E);Ag(e,33,fa);break;case "pp".toString():case "dff".toString():case "relayUrl".toString():case "navHidden".toString():case "nav".toString():case "protocol".toString():case "actions".toString():case "thumbs".toString():case "tt".toString():case "odv".toString():case "newDriveView".toString():case "cropMode".toString():case "maxSizeBytes".toString():case "selectButtonLabel".toString():case "view".toString():case "grugl".toString():break;
default:throw Error("Url Param '"+X+"' not supported in V2");}});
a=Qz(b,e)}catch(E){return null}return Nh((new Lh).setConfig(e),a)}
function Pz(a){var b=a.split("x");a=b[0];b=b[1];var c=new $g;a=ug(c,1,parseInt(a,10),0);return ug(a,2,parseInt(b,10),0)}
function Rz(a){var b=G(xg(a,ih,1),8,"");Gc(b,"/")||(b+="/");b=xo(b);jo(b,b.g+"home");vo(b,"req",a.j());return b.toString()}
function Sz(a){var b="";switch(a.getStatus()){case 2:b="cancel";break;case 1:b="picked";break;case 3:b="error"}a=yg(a,Wg,2);return 0===a.length?{action:b}:Wy(a,b)}
function Tz(a,b){switch(a.action){case "select-contacts":var c=Uz(a.contacts);break;case "visibility":c=a.visible;var d=new Hh;d=tg(d,1,7);c=ug(d,5,c,!1);d={};d["iframe-command"]=c.j();c=d;break;default:c=null}return c?qz(b,c):xk()}
function Uz(a){if(!a||0==a.length)return null;var b=new Hh;tg(b,1,11);var c=new rz;a.forEach(function(d){if(d.email){var e=new Wg;e=ug(e,2,d.name?d.name:d.email,"");var f=new Rg;d=vg(f,1,d.email);d=Ag(e,27,d);e=new Og;f=":"+(c.g++).toString(36);e=ug(e,1,f,"");e=tg(e,2,12);d=Ag(d,1,e)}else d=null;d&&Dg(b,7,d,Wg)});
a={};a["iframe-command"]=b.j();return a}
function Qz(a,b){var c=new Map,d=new ah;Ry(a).forEach(function(e){var f=new Bh,g=e.getOptions(),k=e.getId();if(null!=k&&Nz.has(k)){switch(k){case "all":break;case "docs-images":ch(d,1);ch(d,6);break;case "docs-images-and-videos":ch(d,2);ch(d,1);ch(d,6);break;case "docs-videos":ch(d,2);ch(d,6);break;case "documents":ch(d,3);ch(d,6);break;case "drawings":ch(d,12);ch(d,6);break;case "folders":ch(d,6);break;case "forms":ch(d,7);ch(d,6);break;case "pdfs":ch(d,9);ch(d,6);break;case "presentations":ch(d,
5);ch(d,6);break;case "scripts":ch(d,10);ch(d,6);break;case "sites":ch(d,8);ch(d,6);break;case "spreadsheets":ch(d,4);ch(d,6);break;case "tables":ch(d,11);ch(d,6);break;default:throw Error("Drive viewId '"+k+"$' not supported in V2");}if(Object.keys(g).length)15==g.sortKey?(f=Cz(),c.set(f.j(),f)):g.starred?(f=Dz(),c.set(f.j(),f)):g.td||g.dr?(f=Ez(),c.set(f.j(),f)):g.ownedByMe?(f=zz(),c.set(f.j(),f)):(f=Bz(),c.set(f.j(),f));else{var l=void 0===l?!1:l;f=new Eh;Gh(f,Cz());if(l){var m=new Bh;g=new xh;
ug(g,14,!0,!1);tg(g,4,1);Ag(m,3,g);tg(m,1,2);Dh(m,vz);Gh(f,m)}Gh(f,zz());Gh(f,Ez());Gh(f,Bz());Gh(f,Dz());m=new Bh;g=new xh;ug(g,12,!0,!1);Ag(m,3,g);tg(m,1,2);Dh(m,yz);Gh(f,m);c.set(f.j(),f)}}else switch(k){case "contacts":tg(f,1,12);if(0!=Object.keys(g||{}).length)throw Error("View options not supported for CONTACTS");c.set(f.j(),f);break;case "photos":Vz(g,c,d);break;case "upload":"docs"==g.query?(m=void 0===m?[]:m,f=new Bh,g=Dh(tg(f,1,2),sz),e=new xh,l=new uh,m=H(l,3,m||[]),m=Ag(e,15,m),Ag(g,3,
m)):(tg(f,1,10),m=Wz(g,d),Ag(f,10,m));c.set(f.j(),f);break;case "url":tg(f,1,9);e.j&&Dh(f,e.j);ch(d,1);c.set(f.j(),f);break;case "webcam":tg(f,1,1);switch(g.query){case "forms":case "spreadsheets":case "presentation":m=f,e=new th,e=tg(e,1,1),g=Wz(g,d),g=Ag(e,2,g),Ag(m,16,g)}ch(d,1);c.set(f.j(),f);break;case "image-search":tg(f,1,5);ch(d,1);c.set(f.j(),f);break;case "et":tg(f,1,13);e.j&&Dh(f,e.j);m=new yh;g=ja(Object.entries(e.getOptions()||{}));for(e=g.next();!e.done;e=g.next())switch(l=ja(e.value),
e=l.next().value,l=l.next().value,e){case "category":if(Mz.has(l))e=Mz.get(l),tg(m,2,e);else throw Error("party category '"+l+"' not supported in V2");break;default:throw Error("view option '"+e+"' not supported in V2");}ch(d,1);Ag(f,13,m);c.set(f.j(),f);break;case null:break;default:throw Error("Source "+e.getId()+" not supported in V2");}});
Ag(b,2,d);return Array.from(c.values())}
function Wz(a,b){for(var c=new sh,d=ja(Object.entries(a||{})),e=d.next();!e.done;e=d.next()){var f=ja(e.value);e=f.next().value;f=f.next().value;switch(e){case "query":switch(f){case "profile":tg(c,4,2);ch(b,1);break;case "photo":tg(c,4,1);ch(b,1);break;case "forms":tg(c,4,6);ch(b,1);break;case "spreadsheets":tg(c,4,7);ch(b,1);break;case "presentation":tg(c,4,8);ch(b,1);break;default:throw Error("query value '"+f+"' not supported in V2");}break;case "data":for(e=ja(Object.entries(f||{})),f=e.next();!f.done;f=
e.next()){var g=ja(f.value);f=g.next().value;g=g.next().value;var k=c;k.g||(k.g={});if(2 in k.g)k=k.g[2];else{var l=qg(k,2);l||(l=[],H(k,2,l));k=k.g[2]=new ig(l)}k.set(f,g)}}}return c}
function Vz(a,b,c){var d=new Eh;if(Object.keys(a).length){if(a.allowedItemTypes.includes("photo")&&(Gh(d,Jz()),ch(c,1)),a.allowedItemTypes.includes("album")&&(Gh(d,Kz()),ch(c,14)),"videos-uploaded"==a.type||"videos-camerasync"==a.type)Gh(d,Lz()),ch(c,2)}else d=Iz(),ch(c,1),ch(c,14);yg(d,Bh,1).forEach(function(e){b.set(e.j(),e)})}
;function Xz(a){L.call(this);this.g=a||Zi();this.Ra=Yz;this.ja=null;this.va=!1;this.l=null;this.P=void 0;this.L=this.C=this.F=null;this.eg=!1}
z(Xz,L);Xz.prototype.nr=Jt.V();var Yz=null;function Zz(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}
h=Xz.prototype;h.getId=function(){return this.ja||(this.ja=Kt(this.nr))};
function $z(a,b){a.F&&a.F.L&&(Yb(a.F.L,a.ja),Zb(a.F.L,b,a));a.ja=b}
h.H=function(){return this.l};
function aA(a,b){return a.l?fj(b,a.l||a.g.g):[]}
function bA(a,b){return a.l?N(b,a.l||a.g.g):null}
function cA(a){a.P||(a.P=new qn(a));return a.P}
function dA(a,b){if(a==b)throw Error("Unable to set parent component");if(b&&a.F&&a.ja&&eA(a.F,a.ja)&&a.F!=b)throw Error("Unable to set parent component");a.F=b;Xz.J.Jb.call(a,b)}
h.Oc=function(){return this.F};
h.Jb=function(a){if(this.F&&this.F!=a)throw Error("Method not supported");Xz.J.Jb.call(this,a)};
h.Ha=function(){this.l=this.g.createElement("DIV")};
h.za=function(a){fA(this,a)};
function fA(a,b,c){if(a.va)throw Error("Component already rendered");a.l||a.Ha();b?b.insertBefore(a.l,c||null):a.g.g.body.appendChild(a.l);a.F&&!a.F.va||a.fa()}
h.Sa=function(a){if(this.va)throw Error("Component already rendered");if(a&&this.ke(a)){this.eg=!0;var b=aj(a);this.g&&this.g.g==b||(this.g=Zi(a));this.ra(a);this.fa()}else throw Error("Invalid element to decorate");};
h.ke=function(){return!0};
h.ra=function(a){this.l=a};
h.fa=function(){this.va=!0;gA(this,function(a){!a.va&&a.H()&&a.fa()})};
h.na=function(){gA(this,function(a){a.va&&a.na()});
this.P&&tn(this.P);this.va=!1};
h.N=function(){this.va&&this.na();this.P&&(this.P.dispose(),delete this.P);gA(this,function(a){a.dispose()});
!this.eg&&this.l&&Bj(this.l);this.F=this.l=this.L=this.C=null;Xz.J.N.call(this)};
h.aw=function(){};
h.tc=function(a,b){this.Mf(a,hA(this),b)};
h.Mf=function(a,b,c){if(a.va&&(c||!this.va))throw Error("Component already rendered");if(0>b||b>hA(this))throw Error("Child component index out of bounds");this.L&&this.C||(this.L={},this.C=[]);if(a.Oc()==this){var d=a.getId();this.L[d]=a;qb(this.C,a)}else Zb(this.L,a.getId(),a);dA(a,this);pb(this.C,b,0,a);a.va&&this.va&&a.Oc()==this?(c=this.Dc(),b=c.childNodes[b]||null,b!=a.H()&&c.insertBefore(a.H(),b)):c?(this.l||this.Ha(),b=iA(this,b+1),fA(a,this.Dc(),b?b.l:null)):this.va&&!a.va&&a.l&&a.l.parentNode&&
1==a.l.parentNode.nodeType&&a.fa()};
h.Dc=function(){return this.l};
function jA(a){null==a.Ra&&(a.Ra=Gm(a.va?a.l:a.g.g.body));return a.Ra}
function hA(a){return a.C?a.C.length:0}
function eA(a,b){return a.L&&b?$b(a.L,b)||null:null}
function iA(a,b){return a.C?a.C[b]||null:null}
function gA(a,b,c){a.C&&A(a.C,b,c)}
function kA(a,b){return a.C&&b?bb(a.C,b):-1}
h.ti=function(a,b){if(a){var c="string"===typeof a?a:a.getId();a=eA(this,c);c&&a&&(Yb(this.L,c),qb(this.C,a),b&&(a.na(),a.l&&Bj(a.l)),dA(a,null))}if(!a)throw Error("Child is not in parent component");return a};function lA(a,b){Vy.call(this,"set-drive-options");this.appId=a;this.appOrigin=b}
z(lA,Vy);function mA(a){Vy.call(this,"visibility");this.visible=a}
z(mA,Vy);function nA(a,b,c){L.call(this);this.target=a;this.Gg=b||a;this.D=c||new am(NaN,NaN,NaN,NaN);this.j=aj(a);this.g=new qn(this);Rh(this,this.g);this.deltaY=this.deltaX=this.P=this.M=this.screenY=this.screenX=this.clientY=this.clientX=0;this.B=!0;this.Xa=!1;this.F=0;this.l=!1;K(this.Gg,["touchstart","mousedown"],this.pn,!1,this);this.A=oA}
z(nA,L);var oA=p.document&&p.document.documentElement&&!!p.document.documentElement.setCapture&&!!p.document.releaseCapture;function pA(a,b){a.D=b||new am(NaN,NaN,NaN,NaN)}
h=nA.prototype;h.Aa=function(a){this.B=a};
h.N=function(){nA.J.N.call(this);Bi(this.Gg,["touchstart","mousedown"],this.pn,!1,this);tn(this.g);this.A&&this.j.releaseCapture();this.Gg=this.target=null};
function qA(a){void 0===a.K&&(a.K=Gm(a.target));return a.K}
h.pn=function(a){var b="mousedown"==a.type;if(!this.B||this.Xa||b&&!hi(a))this.dispatchEvent("earlycancel");else{if(0==this.F)if(this.dispatchEvent(new rA("start",this,a.clientX,a.clientY,a)))this.Xa=!0,b&&a.preventDefault();else return;else b&&a.preventDefault();b=this.j;var c=b.documentElement,d=!this.A;this.g.G(b,["touchmove","mousemove"],this.qq,{capture:d,passive:!1});this.g.G(b,["touchend","mouseup"],this.cg,d);this.A?(c.setCapture(!1),this.g.G(c,"losecapture",this.cg)):this.g.G(oj(b),"blur",
this.cg);this.C&&this.g.G(this.C,"scroll",this.rp,d);this.clientX=this.M=a.clientX;this.clientY=this.P=a.clientY;this.screenX=a.screenX;this.screenY=a.screenY;this.l?(a=this.target,b=a.offsetLeft,c=a.offsetParent,c||"fixed"!=gm(a)||(c=aj(a).documentElement),c?(sf&&!Jf(58)?(d=pm(c),b+=d.left):Kf(8)&&!Kf(9)&&(d=pm(c),b-=d.left),a=Gm(c)?c.clientWidth-(b+a.offsetWidth):b):a=b):a=this.target.offsetLeft;this.deltaX=a;this.deltaY=this.target.offsetTop;this.L=mj(Zi(this.j).g)}};
h.cg=function(a,b){tn(this.g);this.A&&this.j.releaseCapture();this.Xa?(this.Xa=!1,this.dispatchEvent(new rA("end",this,a.clientX,a.clientY,a,sA(this,this.deltaX),tA(this,this.deltaY),b||"touchcancel"==a.type))):this.dispatchEvent("earlycancel")};
h.qq=function(a){if(this.B){var b=(this.l&&qA(this)?-1:1)*(a.clientX-this.clientX),c=a.clientY-this.clientY;this.clientX=a.clientX;this.clientY=a.clientY;this.screenX=a.screenX;this.screenY=a.screenY;if(!this.Xa){var d=this.M-this.clientX,e=this.P-this.clientY;if(d*d+e*e>this.F)if(this.dispatchEvent(new rA("start",this,a.clientX,a.clientY,a)))this.Xa=!0;else{this.Pb()||this.cg(a);return}}c=uA(this,b,c);b=c.x;c=c.y;this.Xa&&this.dispatchEvent(new rA("beforedrag",this,a.clientX,a.clientY,a,b,c))&&(vA(this,
a,b,c),a.preventDefault())}};
function uA(a,b,c){var d=mj(Zi(a.j).g);b+=d.x-a.L.x;c+=d.y-a.L.y;a.L=d;a.deltaX+=b;a.deltaY+=c;return new Ti(sA(a,a.deltaX),tA(a,a.deltaY))}
h.rp=function(a){var b=uA(this,0,0);a.clientX=this.clientX;a.clientY=this.clientY;vA(this,a,b.x,b.y)};
function vA(a,b,c,d){a.ii(c,d);a.dispatchEvent(new rA("drag",a,b.clientX,b.clientY,b,c,d))}
function sA(a,b){var c=a.D,d=isNaN(c.left)?null:c.left;c=isNaN(c.width)?0:c.width;return Math.min(null!=d?d+c:Infinity,Math.max(null!=d?d:-Infinity,b))}
function tA(a,b){var c=a.D,d=isNaN(c.top)?null:c.top;c=isNaN(c.height)?0:c.height;return Math.min(null!=d?d+c:Infinity,Math.max(null!=d?d:-Infinity,b))}
h.ii=function(a,b){this.l&&qA(this)?this.target.style.right=a+"px":this.target.style.left=a+"px";this.target.style.top=b+"px"};
function rA(a,b,c,d,e,f,g,k){J.call(this,a);this.clientX=c;this.clientY=d;this.left=void 0!==f?f:b.deltaX;this.top=void 0!==g?g:b.deltaY;this.g=b;this.B=!!k}
z(rA,J);function wA(a){this.nb=new Map;var b=arguments.length;if(1<b){if(b%2)throw Error("Uneven number of arguments");for(var c=0;c<b;c+=2)this.set(arguments[c],arguments[c+1])}else if(a)if(a instanceof wA)for(b=ja(a.nb),c=b.next();!c.done;c=b.next()){var d=ja(c.value);c=d.next().value;d=d.next().value;this.nb.set(c,d)}else if(a)for(b=ja(Object.entries(a)),c=b.next();!c.done;c=b.next())d=ja(c.value),c=d.next().value,d=d.next().value,this.nb.set(c,d)}
h=wA.prototype;h.ha=function(){return this.nb.size};
h.ia=function(){return Array.from(this.nb.values())};
h.Ga=function(){return Array.from(this.nb.keys())};
h.Lc=function(a){return this.ia().some(function(b){return b==a})};
h.equals=function(a,b){var c=this;b=void 0===b?function(d,e){return d===e}:b;
return this===a?!0:this.nb.size!=a.ha()?!1:this.Ga().every(function(d){return b(c.nb.get(d),a.get(d))})};
h.isEmpty=function(){return 0==this.nb.size};
h.clear=function(){this.nb.clear()};
h.remove=function(a){return this.nb["delete"](a)};
h.get=function(a,b){return this.nb.has(a)?this.nb.get(a):b};
h.set=function(a,b){this.nb.set(a,b);return this};
h.forEach=function(a,b){var c=this;b=void 0===b?this:b;this.nb.forEach(function(d,e){return a.call(b,d,e,c)})};
h.clone=function(){return new wA(this)};(function(){for(var a=["ms","moz","webkit","o"],b,c=0;b=a[c]&&!p.requestAnimationFrame;++c)p.requestAnimationFrame=p[b+"RequestAnimationFrame"],p.cancelAnimationFrame=p[b+"CancelAnimationFrame"]||p[b+"CancelRequestAnimationFrame"];if(!p.requestAnimationFrame){var d=0;p.requestAnimationFrame=function(e){var f=(new Date).getTime(),g=Math.max(0,16-(f-d));d=f+g;return p.setTimeout(function(){e(f+g)},g)};
p.cancelAnimationFrame||(p.cancelAnimationFrame=function(e){clearTimeout(e)})}})();
var xA=[[],[]],yA=0,zA=!1,AA=0;function BA(a,b){var c=AA++,d={Er:{id:c,lb:a.measure,context:b},Lr:{id:c,lb:a.Kr,context:b},state:{},args:void 0,Qg:!1};return function(){0<arguments.length?(d.args||(d.args=[]),d.args.length=0,d.args.push.apply(d.args,arguments),d.args.push(d.state)):d.args&&0!=d.args.length?(d.args[0]=d.state,d.args.length=1):d.args=[d.state];d.Qg||(d.Qg=!0,xA[yA].push(d));zA||(zA=!0,window.requestAnimationFrame(CA))}}
function CA(){zA=!1;var a=xA[yA],b=a.length;yA=(yA+1)%2;for(var c,d=0;d<b;++d){c=a[d];var e=c.Er;c.Qg=!1;e.lb&&e.lb.apply(e.context,c.args)}for(d=0;d<b;++d)c=a[d],e=c.Lr,c.Qg=!1,e.lb&&e.lb.apply(e.context,c.args),c.state={};a.length=0}
;var DA=C?Dc(oc('javascript:""')):Dc(oc("about:blank"));wc(DA);var EA=C?Dc(oc('javascript:""')):Dc(oc("javascript:undefined"));wc(EA);function FA(a){L.call(this);this.g=a;a=C?"focusout":"blur";this.j=K(this.g,C?"focusin":"focus",this,!C);this.l=K(this.g,a,this,!C)}
z(FA,L);FA.prototype.handleEvent=function(a){var b=new ei(a.Ba);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};
FA.prototype.N=function(){FA.J.N.call(this);Ci(this.j);Ci(this.l);delete this.g};function GA(a,b){this.l=a;this.j=b}
;function HA(a,b){L.call(this);this.g=new qn(this);this.zj(a||null);b&&(this.ne=b)}
z(HA,L);h=HA.prototype;h.Fb=null;h.jk=null;h.te=!1;h.cj=-1;h.ne="toggle_display";h.H=function(){return this.Fb};
h.zj=function(a){if(this.te)throw Error("Can not change this state of the popup while showing.");this.Fb=a};
h.isVisible=function(){return this.te};
h.Ta=function(a){this.l&&this.l.stop();this.j&&this.j.stop();if(a){if(!this.te&&this.dispatchEvent("beforeshow")){if(!this.Fb)throw Error("Caller must call setElement before trying to show the popup");this.gf();a=aj(this.Fb);this.g.G(a,"mousedown",this.xm,!0);if(C){try{var b=a.activeElement}catch(d){}for(;b&&"IFRAME"==b.nodeName;){try{var c=Jj(b)}catch(d){break}a=c;b=a.activeElement}this.g.G(a,"mousedown",this.xm,!0);this.g.G(a,"deactivate",this.wm)}else this.g.G(a,"blur",this.wm);"toggle_display"==
this.ne?(this.Fb.style.visibility="visible",Cm(this.Fb,!0)):"move_offscreen"==this.ne&&this.gf();this.te=!0;this.cj=x();this.l?(ui(this.l,"end",this.ll,!1,this),this.l.play()):this.ll()}}else IA(this)};
h.gf=Ja;function IA(a,b){a.te&&a.dispatchEvent({type:"beforehide",target:b})&&(a.g&&tn(a.g),a.te=!1,x(),a.j?(ui(a.j,"end",Ua(a.Ck,b),!1,a),a.j.play()):a.Ck(b))}
h.Ck=function(a){"toggle_display"==this.ne?this.Mq():"move_offscreen"==this.ne&&(this.Fb.style.top="-10000px");this.dispatchEvent({type:"hide",target:a})};
h.Mq=function(){this.Fb.style.visibility="hidden";Cm(this.Fb,!1)};
h.ll=function(){this.dispatchEvent("show")};
h.xm=function(a){a=a.target;Ij(this.Fb,a)||JA(this,a)||150>x()-this.cj||IA(this,a)};
h.wm=function(a){var b=aj(this.Fb);if("undefined"!=typeof document.activeElement){if(a=b.activeElement,!a||Ij(this.Fb,a)||"BODY"==a.tagName||JA(this,a))return}else if(a.target!=b)return;150>x()-this.cj||IA(this)};
function JA(a,b){return hb(a.jk||[],function(c){return b===c||Ij(c,b)})}
h.N=function(){HA.J.N.call(this);this.g.dispose();Th(this.l);Th(this.j);delete this.Fb;delete this.g;delete this.jk};function KA(a,b){Xz.call(this,b);this.yc=!!a;this.D=null;this.Tb=BA({Kr:this.kh},this)}
z(KA,Xz);h=KA.prototype;h.li=null;h.Dg=!1;h.Db=null;h.bb=null;h.fc=null;h.Zh=!1;h.ff=function(){return"goog-modalpopup"};
h.af=function(){return this.Db};
h.Ha=function(){KA.J.Ha.call(this);var a=this.H();fn(a,Jc(this.ff()).split(" "));Tj(a,!0);Cm(a,!1);LA(this);MA(this)};
function LA(a){if(a.yc&&!a.bb){var b=a.g.W("IFRAME",{frameborder:0,style:"border:0;vertical-align:bottom;"});de(b,DA);a.bb=b;a.bb.className=a.ff()+"-bg";Cm(a.bb,!1);zm(a.bb,0)}a.Db||(a.Db=a.g.W("DIV",a.ff()+"-bg"),Cm(a.Db,!1))}
function MA(a){a.fc||(a.fc=a.g.createElement("SPAN"),Cm(a.fc,!1),Tj(a.fc,!0),a.fc.style.position="absolute")}
h.Vm=function(){this.Zh=!1};
h.ke=function(a){return!!a&&"DIV"==a.tagName};
h.ra=function(a){KA.J.ra.call(this,a);a=Jc(this.ff()).split(" ");fn(this.H(),a);LA(this);MA(this);Tj(this.H(),!0);Cm(this.H(),!1)};
h.fa=function(){this.bb&&yj(this.bb,this.H());yj(this.Db,this.H());KA.J.fa.call(this);zj(this.fc,this.H());this.li=new FA(this.g.g);cA(this).G(this.li,"focusin",this.Dt);NA(this,!1)};
h.na=function(){this.isVisible()&&this.Ta(!1);Th(this.li);KA.J.na.call(this);Bj(this.bb);Bj(this.Db);Bj(this.fc)};
h.Ta=function(a){if(a!=this.Dg)if(this.M&&this.M.stop(),this.R&&this.R.stop(),this.K&&this.K.stop(),this.O&&this.O.stop(),this.va&&NA(this,a),a){if(this.dispatchEvent("beforeshow")){try{this.D=this.g.g.activeElement}catch(e){}this.kh();this.Cg();cA(this).G(ck(this.g),"resize",this.kh).G(ck(this.g),"orientationchange",this.Tb);OA(this,!0);this.focus();this.Dg=!0;this.M&&this.R?(ui(this.M,"end",this.Bg,!1,this),this.R.play(),this.M.play()):this.Bg()}}else if(this.dispatchEvent("beforehide")){cA(this).Z(ck(this.g),
"resize",this.kh).Z(ck(this.g),"orientationchange",this.Tb);this.Dg=!1;this.K&&this.O?(ui(this.K,"end",this.Ag,!1,this),this.O.play(),this.K.play()):this.Ag();a:{try{var b=this.g,c=b.g.body,d=b.g.activeElement||c;if(!this.D||this.D==c){this.D=null;break a}(d==c||b.contains(this.H(),d))&&this.D.focus()}catch(e){}this.D=null}}};
function NA(a,b){a.ma||(a.ma=new GA(a.l,a.g));var c=a.ma;if(b){c.g||(c.g=[]);for(var d=c.j.np(c.j.g.body),e=0;e<d.length;e++){var f=d[e],g;if(g=f!=c.l)g=f.getAttribute("aria-hidden"),g=!(null==g||void 0==g?0:String(g));g&&(vs(f,"hidden",!0),c.g.push(f))}}else if(c.g){for(e=0;e<c.g.length;e++)c.g[e].removeAttribute("aria-hidden");c.g=null}}
function OA(a,b){a.bb&&Cm(a.bb,b);a.Db&&Cm(a.Db,b);Cm(a.H(),b);Cm(a.fc,b)}
h.Bg=function(){this.dispatchEvent("show")};
h.Ag=function(){OA(this,!1);this.dispatchEvent("hide")};
h.isVisible=function(){return this.Dg};
h.focus=function(){this.Rk()};
h.kh=function(){this.bb&&Cm(this.bb,!1);this.Db&&Cm(this.Db,!1);var a=this.g.g,b=jj(oj(a)||window),c=Math.max(b.width,Math.max(a.body.scrollWidth,a.documentElement.scrollWidth));a=Math.max(b.height,Math.max(a.body.scrollHeight,a.documentElement.scrollHeight));this.bb&&(Cm(this.bb,!0),vm(this.bb,c,a));this.Db&&(Cm(this.Db,!0),vm(this.Db,c,a))};
h.Cg=function(){var a=oj(this.g.g)||window;if("fixed"==gm(this.H()))var b=0,c=0;else c=mj(this.g.g),b=c.x,c=c.y;var d=xm(this.H());a=jj(a);b=Math.max(b+a.width/2-d.width/2,0);c=Math.max(c+a.height/2-d.height/2,0);hm(this.H(),b,c);hm(this.fc,b,c)};
h.Dt=function(a){this.Zh?this.Vm():a.target==this.fc&&Uk(this.Rk,0,this)};
h.Rk=function(){try{C&&this.g.g.body.focus(),this.H().focus()}catch(a){}};
h.N=function(){Th(this.M);this.M=null;Th(this.K);this.K=null;Th(this.R);this.R=null;Th(this.O);this.O=null;KA.J.N.call(this)};function PA(a,b,c){KA.call(this,b,c);this.A=a||"modal-dialog";this.j=(new QA).addButton(RA,!0).addButton(SA,!1,!0)}
z(PA,KA);h=PA.prototype;h.Ok=!0;h.mf=!0;h.hm=!0;h.Qf=.5;h.yi="";h.Qc=null;h.il=!1;h.yb=null;h.ob=null;h.xh=null;h.gb=null;h.cd=null;h.Wa=null;h.ff=function(){return this.A};
h.setTitle=function(a){this.yi=a;this.ob&&Lj(this.ob,a)};
h.getContent=function(){return""};
h.Dc=function(){this.H()||this.za();return this.cd};
function TA(a){a.H()||a.za();return a.H()}
h.af=function(){this.H()||this.za();return PA.J.af.call(this)};
function UA(a,b){a.Qf=b;if(a.H()){var c=a.af();c&&zm(c,a.Qf)}}
function VA(a,b){var c=Jc(a.A+"-title-draggable").split(" ");a.H()&&(b?fn(a.yb,c):hn(a.yb,c));if(b&&!a.Qc){var d=new nA(a.H(),a.yb);a.Qc=d;fn(a.yb,c);K(a.Qc,"start",a.Zv,!1,a)}else!b&&a.Qc&&(a.Qc.dispose(),a.Qc=null)}
h.Ha=function(){PA.J.Ha.call(this);var a=this.H(),b=this.g;this.yb=b.W("DIV",this.A+"-title",this.ob=b.W("SPAN",{className:this.A+"-title-text",id:this.getId()},this.yi),this.gb=b.W("SPAN",this.A+"-title-close"));wj(a,this.yb,this.cd=b.W("DIV",this.A+"-content"),this.Wa=b.W("DIV",this.A+"-buttons"));us(this.ob,"heading");us(this.gb,"button");Tj(this.gb,!0);vs(this.gb,"label",WA);this.xh=this.ob.id;us(a,"dialog");vs(a,"labelledby",this.xh||"");Cm(this.gb,this.mf);this.j&&(a=this.j,a.g=this.Wa,a.za());
Cm(this.Wa,!!this.j);UA(this,this.Qf)};
h.ra=function(a){PA.J.ra.call(this,a);a=this.H();var b=this.A+"-content";this.cd=dj(null,b,a)[0];this.cd||(this.cd=this.g.W("DIV",b),a.appendChild(this.cd));b=this.A+"-title";var c=this.A+"-title-text",d=this.A+"-title-close";(this.yb=dj(null,b,a)[0])?(this.ob=dj(null,c,this.yb)[0],this.gb=dj(null,d,this.yb)[0]):(this.yb=this.g.W("DIV",b),a.insertBefore(this.yb,this.cd));this.ob?(this.yi=Vj(this.ob),this.ob.id||(this.ob.id=this.getId())):(this.ob=pj("SPAN",{className:c,id:this.getId()}),this.yb.appendChild(this.ob));
this.xh=this.ob.id;vs(a,"labelledby",this.xh||"");this.gb||(this.gb=this.g.W("SPAN",d),this.yb.appendChild(this.gb));Cm(this.gb,this.mf);b=this.A+"-buttons";if(this.Wa=dj(null,b,a)[0]){if(a=this.j=new QA(this.g),(b=this.Wa)&&1==b.nodeType){a.g=b;b=cj("BUTTON",a.g);c=0;for(var e,f;d=b[c];c++)if(e=d.name||d.id,f=Vj(d)||d.value,e){var g=0==c;a.set(e,f,g,"cancel"==d.name);g&&P(d,"goog-buttonset-default")}}}else this.Wa=this.g.W("DIV",b),a.appendChild(this.Wa),this.j&&(a=this.j,a.g=this.Wa,a.za()),Cm(this.Wa,
!!this.j);UA(this,this.Qf)};
h.fa=function(){PA.J.fa.call(this);cA(this).G(this.H(),"keydown",this.jl).G(this.H(),"keypress",this.jl);cA(this).G(this.Wa,"click",this.ns);VA(this,!0);cA(this).G(this.gb,"click",this.dv);var a=this.H();us(a,"dialog");""!==this.ob.id&&vs(a,"labelledby",this.ob.id);if(!this.hm){this.hm=!1;if(this.va){a=this.g;var b=this.af();a.md(this.bb);a.md(b)}this.isVisible()&&NA(this,!1)}};
h.na=function(){this.isVisible()&&this.Ta(!1);VA(this,!1);PA.J.na.call(this)};
h.Ta=function(a){a!=this.isVisible()&&(this.va||this.za(),PA.J.Ta.call(this,a))};
h.Bg=function(){PA.J.Bg.call(this);this.dispatchEvent("aftershow")};
h.Ag=function(){PA.J.Ag.call(this);this.dispatchEvent("afterhide");this.il&&this.dispose()};
h.Zv=function(){var a=this.g.g,b=jj(oj(a)||window),c=Math.max(a.body.scrollWidth,b.width);a=Math.max(a.body.scrollHeight,b.height);var d=xm(this.H());"fixed"==gm(this.H())?pA(this.Qc,new am(0,0,Math.max(0,b.width-d.width),Math.max(0,b.height-d.height))):pA(this.Qc,new am(0,0,c-d.width,a-d.height))};
h.dv=function(){XA(this)};
function XA(a){if(a.mf){var b=a.j,c=b&&b.j;c?(b=b.get(c),a.dispatchEvent(new YA(c,b))&&a.Ta(!1)):a.Ta(!1)}}
function ZA(a){a.mf=!1;a.gb&&Cm(a.gb,a.mf)}
h.N=function(){this.Wa=this.gb=null;PA.J.N.call(this)};
h.ns=function(a){a:{for(a=a.target;null!=a&&a!=this.Wa;){if("BUTTON"==a.tagName)break a;a=a.parentNode}a=null}if(a&&!a.disabled){a=a.name;var b=this.j.get(a);this.dispatchEvent(new YA(a,b))&&this.Ta(!1)}};
h.jl=function(a){var b=!1,c=!1,d=this.j,e=a.target;if("keydown"==a.type)if(this.Ok&&27==a.keyCode){var f=d&&d.j;e="SELECT"==e.tagName&&!e.disabled;f&&!e?(c=!0,b=d.get(f),b=this.dispatchEvent(new YA(f,b))):e||(b=!0)}else{if(9==a.keyCode&&a.shiftKey&&e==this.H()){this.Zh=!0;try{this.fc.focus()}catch(n){}Uk(this.Vm,0,this)}}else if(13==a.keyCode){if("BUTTON"==e.tagName&&!e.disabled)f=e.name;else if(e==this.gb)XA(this);else if(d){var g=d.l,k;if(k=g)a:{k=cj("BUTTON",d.g);for(var l=0,m;m=k[l];l++)if(m.name==
g||m.id==g){k=m;break a}k=null}e=("TEXTAREA"==e.tagName||"SELECT"==e.tagName||"A"==e.tagName)&&!e.disabled;!k||k.disabled||e||(f=g)}f&&d&&(c=!0,b=this.dispatchEvent(new YA(f,String(d.get(f)))))}else e!=this.gb||32!=a.keyCode&&" "!=a.key||XA(this);if(b||c)a.stopPropagation(),a.preventDefault();b&&this.Ta(!1)};
function YA(a,b){this.type="dialogselect";this.key=a;this.caption=b}
z(YA,J);function QA(a){wA.call(this);a||Zi();this.j=this.g=this.l=null}
z(QA,wA);h=QA.prototype;h.clear=function(){wA.prototype.clear.call(this);this.l=this.j=null};
h.set=function(a,b,c,d){wA.prototype.set.call(this,a,b);c&&(this.l=a);d&&(this.j=a);return this};
h.addButton=function(a,b,c){return this.set(a.key,a.caption,b,c)};
h.za=function(){if(this.g){ae(this.g,Ud);var a=Zi(this.g);this.forEach(function(b,c){var d=a.W("BUTTON",{name:c},b);c==this.l&&(d.className="goog-buttonset-default");this.g.appendChild(d)},this)}};
h.H=function(){return this.g};
var $A=y("OK"),aB=y("Cancel"),bB=y("Yes"),cB=y("No"),dB=y("Save"),eB=y("Continue"),WA=y("Close"),RA={key:"ok",caption:$A},SA={key:"cancel",caption:aB},fB={key:"yes",caption:bB},gB={key:"no",caption:cB},hB={key:"save",caption:dB},iB={key:"continue",caption:eB};
"undefined"!=typeof document&&((new QA).addButton(RA,!0,!0),(new QA).addButton(RA,!0).addButton(SA,!1,!0),(new QA).addButton(fB,!0).addButton(gB,!1,!0),(new QA).addButton(fB).addButton(gB,!0).addButton(SA,!1,!0),(new QA).addButton(iB).addButton(hB).addButton(SA,!0,!0));function jB(a,b,c){PA.call(this,a,b,c)}
z(jB,PA);function kB(a){Sy.call(this,a)}
z(kB,Sy);function lB(a){Fy.call(this,a||"all")}
z(lB,Fy);function mB(){var a=new lB("docs-videos");a.g.ownedByMe=!0;return a}
lB.prototype.Za=function(a){lB.J.Za.call(this,a);return this};var nB=Dc(oc("//www-onepick-opensocial.googleusercontent.com/gadgets/js/rpc.js?c=1&container=onepick")),oB=Dc(oc("//apis.google.com/js/rpc.js"));function pB(a){a=a&&ck(a)||window;return a.gadgets&&a.gadgets.rpc}
var qB=null;function rB(a,b){var c=b&&ck(b)||window;if(pB(b))a();else if(qB)qB.push(a);else var d=qB=[a],e=c.setInterval(function(){if(pB(b)){c.clearInterval(e);for(var f=0;f<d.length;f++)d[f]();qB=null}},100)}
;function sB(){}
sB.prototype.g=function(){};function tB(a,b,c){this.element=a;this.j=b;this.B=c}
z(tB,sB);tB.prototype.g=function(a,b,c){Zm(this.element,this.j,a,b,void 0,c,this.B)};function uB(a,b){this.A=b||void 0;HA.call(this,a)}
z(uB,HA);uB.prototype.gf=function(){if(this.A){var a=!this.isVisible()&&"move_offscreen"!=this.ne,b=this.H();a&&(b.style.visibility="hidden",Cm(b,!0));this.A.g(b,8,this.B);a&&Cm(b,!1)}};function vB(a,b){L.call(this);this.g=a;var c=Gj(this.g)?this.g:this.g?this.g.body:null;this.B=!!c&&Gm(c);this.j=K(this.g,sf?"DOMMouseScroll":"mousewheel",this,b)}
z(vB,L);vB.prototype.handleEvent=function(a){var b=0,c=0,d=a.Ba;"mousewheel"==d.type?(a=wB(-d.wheelDelta),void 0!==d.wheelDeltaX?(b=wB(-d.wheelDeltaX),c=wB(-d.wheelDeltaY)):c=a):(a=d.detail,100<a?a=3:-100>a&&(a=-3),void 0!==d.axis&&d.axis===d.HORIZONTAL_AXIS?b=a:c=a);"number"===typeof this.l&&(b=Ri(b,-this.l,this.l));"number"===typeof this.A&&(c=Ri(c,-this.A,this.A));this.B&&(b=-b);b=new xB(a,d,b,c);this.dispatchEvent(b)};
function wB(a){return tf&&(vf||xf)&&0!=a%40?a:a/40}
vB.prototype.N=function(){vB.J.N.call(this);Ci(this.j);this.j=null};
function xB(a,b,c,d){ei.call(this,b);this.type="mousewheel";this.detail=a;this.deltaX=c;this.deltaY=d}
z(xB,ei);function yB(a,b){var c;a:{for(c=b.target;c;){if(1==c.nodeType){var d=fm(c,"overflowY");if("auto"==d||"scroll"==d)break a}c=c.parentNode}c=null}(!c||!Ij(a,c)||c.scrollHeight==c.clientHeight||0<b.deltaY&&1>=Math.abs(c.scrollTop-(c.scrollHeight-c.clientHeight))||0>b.deltaY&&0==c.scrollTop)&&b.stopPropagation()}
;var zB;function AB(a,b,c,d,e,f,g){PA.call(this,f?f+" picker modal-dialog":"picker modal-dialog",!0,c);Re(a,"protocol");this.U=new mz;this.B=te();this.S=te();this.da=!1;c=vo(new ph(a),"rpcService",this.B);this.da=void 0!==wo(c,"v2");vo(c,"rpctoken",this.S);lo(c,"rpctoken="+this.S);oh(c,"https");this.pc=c.toString();this.Ib&&(this.Ib.src=this.pc);this.pb=d;this.Va=e;void 0!==d||void 0!==e?d=!0:(d=wo(xo(a),"hostId"),zB||(zB=new Set("DocVerse fusiontables geo geowiki gm gmail-gadget gws hotpot jointly presentations pwa sites templates trix trix-copy-sheet webstore".split(" "))),
d=!zB.has(d));this.ic=d;this.qa=g||this.g;b&&(wo(xo(a),"hostId"),b="true"==wo(xo(this.pc),"grugl")?oB:nB,g=this.qa,pB(g)||(g=g||Zi(document),d=g.createElement("SCRIPT"),ee(d,b),d.type="text/javascript",g.g.body.appendChild(d)));b=null;g=a.indexOf("/picker?");-1<g?b=a.substring(0,g+8-1):Gc(a,"/picker")&&(b=a);b&&this.setRelayUrl(b+"/resources/rpc_relay.html");this.Ok=!1;this.j=null;this.Wa&&(this.j?(a=this.j,a.g=this.Wa,a.za()):ae(this.Wa,Ud),Cm(this.Wa,!!this.j))}
z(AB,jB);h=AB.prototype;h.pc="";h.Ib=null;h.Lg=!1;h.ej=!1;h.ib=Ja;h.fa=function(){AB.J.fa.call(this);var a=this.af(),b=cA(this),c=new vB(a);Rh(b,c);b.G(c,"mousewheel",w(yB,void 0,a)).G(a,"scroll",w(yB,void 0,a))};
h.za=function(a){var b=this;AB.J.za.call(this,a);this.da?this.U.j.then(function(){return BB(b)}).then(null,function(c){JSON.stringify(c);
b.ib({action:"error"})}):(this.Ib=this.g.W("IFRAME",{id:this.B,
name:this.B,"class":"picker-frame",onload:w(this.zl,this),frameBorder:"0",allow:"camera"}),de(this.Ib,CB(this)),this.Dc().appendChild(this.Ib),P(this.H(),"picker-dialog"),this.Ib.src=this.pc,DB(this),EB(this))};
function BB(a){var b=a.g.W("div",["picker-dialog-content","picker-frame"]);Cm(b,!1);a.Dc().appendChild(b);return oz(a.U,b,function(c){c=c["iframe-command"];c=new Jh(c?JSON.parse(c):null);switch(G(c,1,0)){case 1:a.ib(Sz(xg(c,qh,2)));a.Ta(!1);break;case 4:ZA(a);a.ib({action:"loaded"});break;default:G(c,1,0)}},a.pc,a.B,a.S).then(function(c){a.Ib=c.getIframeEl();
a.zl();Cm(a.Ib.parentElement,!0);P(a.H(),"picker-dialog");DB(a);EB(a);return c})}
function DB(a){FB(a,w(function(b){b.setAuthToken(this.B,this.S)},a))}
function EB(a){var b=wo(xo(a.pc),"title");b&&a.setTitle(b)}
function CB(a){return C&&Jf("7")&&Fc(a.pc,"https")?Dc(oc("https://about:blank")):C?Dc(oc('javascript:""')):Dc(oc("about:blank"))}
h.zl=function(){this.Ib.src!=wc(CB(this))&&(this.Lg=!0,Tj(this.Ib,!0),this.isVisible()&&this.focus())};
h.Ii=function(a){27==a.keyCode&&(this.Ta(!1),this.ib({action:"cancel"}),a.stopPropagation(),a.preventDefault())};
function FB(a,b){var c=a.qa;rB(function(){b(ck(c).gadgets.rpc)},c)}
function GB(a,b){a.ib=b;FB(a,w(function(c){c.register(this.B,w(this.tq,this))},a))}
h.tq=function(a){var b=a.action;"loaded"==b&&(this.ej=!0,HB(this,new mA(this.isVisible())),IB(this),ZA(this),cA(this).Z(ck(this.g),"keydown",this.Ii),Tj(this.Ib,!0));"picked"!=b&&"cancel"!=b||this.Ta(!1);this.ib(a)};
function IB(a){a.wa&&HB(a,new lA(a.wa,window.location.protocol+"//"+window.location.host))}
h.setRelayUrl=function(a){FB(this,w(function(b){b.setRelayUrl(this.B,a)},this))};
function HB(a,b){a.da&&Tz(b,a.U).then(null,function(c){JSON.stringify(c);a.ib({action:"error"})});
FB(a,w(function(c){c.call(this.B,"picker",null,b)},a))}
h.vj=function(){var a=oj(this.g.g)||window;if("true"==wo(xo(this.pc),"ignoreLimits"))a=new Wi(this.pb,this.Va);else if("true"==wo(xo(this.pc),"shadeDialog")){var b=Lm(TA(this),"margin"),c=jj(a);a=c.width-80;c=c.height-40;b&&(a-=b.left?b.left:0,a-=b.right?b.right:0,c-=b.top?b.top:0,c-=b.bottom?b.bottom:0);a=new Wi(0<a?a:0,0<c?c:0)}else{b=this.pb;if(b){b=Math.max(320,Math.min(1051,b));c=this.Va;c||(c=jj(a),c=.85*c.height);var d=Math.max(320,Math.min(650,c))}else c=jj(a),b=.618*c.width,d=b<c.height?
Math.round(Math.max(320,Math.min(650,.85*b))):Math.round(Math.max(320,Math.min(650,.85*c.height))),b=Math.round(d/.618);c=jj(a);b=Math.min(b,Math.max(c.width,320));d=Math.min(d,Math.max(c.height,320));a=new Wi(b,d)}vm(this.Dc(),a);this.Cg()};
h.Cg=function(){if("true"==wo(xo(this.pc),"shadeDialog")){var a=xm(this.H());a=Math.floor(jj(ck(this.g)).width/2-a.width/2);var b=Lm(TA(this),"margin");if(b){var c=0+(b.left?b.left:0);c+=b.right?b.right:0;a=Math.floor(a-c/2)}a=0<a?a:0;b=mj(this.g.g).y;hm(this.H(),a,b)}else AB.J.Cg.call(this)};
h.Ta=function(a){if(a!=this.isVisible()&&this.ic){var b=ck(this.g);a?(this.vj(),cA(this).G(b,"resize",this.vj),this.Lg||cA(this).G(b,"keydown",this.Ii)):(cA(this).Z(b,"resize",this.vj),this.Lg||cA(this).Z(b,"keydown",this.Ii))}AB.J.Ta.call(this,a);HB(this,new mA(a))};
h.focus=function(){AB.J.focus.call(this);if(this.Ib&&this.Lg&&this.ej)try{this.Ib.focus()}catch(a){}};function JB(a){Sy.call(this,a);this.g=new Map;this.g.set("protocol","gadgets");(a=window.location.origin)||(a=window.location.protocol+"//"+window.location.host);a&&this.g.set("origin",a);this.l=[]}
z(JB,kB);function KB(){var a=new JB(R("ONE_PICK_URL",""));a.g.set("hostId","yt-upload-importer");var b=R("GAPI_LOCALE");b&&a.g.set("hl",b);(b=R("SESSION_INDEX"))&&a.g.set("authuser",b);a=a.setTitle("");b=S("VIDEO_IMPORTER_ALL_VIDEOS_TAB_LABEL");var c=Jy(Ky("videos-uploaded"));c.g.rdv=!0;a=Ty(Ty(a,c.Za(b)),Jy(Ky("videos-camerasync")).Za(S("VIDEO_IMPORTER_AUTO_BACKUP_TAB_LABEL")));b=S("VIDEO_IMPORTER_ALBUMS_TAB_LABEL");c=new Iy;c.g.selectAlbum=!0;a=Ty(a,c.Za(b));a.l.push(["album",{}]);return a}
function LB(a){a.getRelayUrl()||a.setRelayUrl(jo(lo(ko(xo(window.location.href),void 0),""),"//s.ytimg.com/yts/favicon-vfl8qSV2F.ico").toString());if(a.g.get("minimal"))throw Error("use buildMinimal to build minimal picker");var b=new AB(MB(a).toString(),!0,null,a.C,a.B,"",void 0);b.il=!1;b.wa=a.F;b.ej&&IB(b);GB(b,a.ib);return b}
function NB(a,b){a.g.set(b,"true");return a}
h=JB.prototype;h.getHeight=function(){return this.B};
h.getRelayUrl=function(){return this.g.get("relayUrl")};
function OB(a){a.g.set("actions","picked,cancel,loaded,received,viewContentRendered");return a}
h.setRelayUrl=function(a){this.g.set("relayUrl",a);return this};
h.setSize=function(a,b){this.C=a;this.B=b;return this};
h.setTitle=function(a){this.g.set("title",a);return this};
function MB(a){a.l.length&&a.g.set("pp",cr(a.l));a.g.set("nav",Qy(a.j));var b=new ph(a.A);a.g.forEach(function(e,f){vo(b,f,e)});
var c=Oz(a.A,a.j,a.g,a.l);if(null!==c){vo(b,"amc","true");var d=!1;switch(a.g.get("hostId")){case "gmail-to":case "og":case "hangouts-profile-picture":case "testing":case "youtube-video-importer":case "ritz":case "punch":case "freebird-themes":case "freebird":case "atariImage":case "homeroom-doc-select":case "homeroom-doc-attach":d=!0}d&&vo(b,"v2",Rz(c))}return b}
;function PB(){}
;function QB(){}
z(QB,PB);QB.prototype.ha=function(){var a=0;Un(this.qb(!0),function(){a++});
return a};
QB.prototype.clear=function(){var a=Vn(this.qb(!0)),b=this;A(a,function(c){b.remove(c)})};function RB(a){this.g=a}
z(RB,QB);h=RB.prototype;h.isAvailable=function(){if(!this.g)return!1;try{return this.g.setItem("__sak","1"),this.g.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.g.removeItem(a)};
h.ha=function(){return this.g.length};
h.qb=function(a){var b=0,c=this.g,d=new Sn;d.next=function(){if(b>=c.length)throw Rn;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){this.g.clear()};
h.key=function(a){return this.g.key(a)};function SB(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
z(SB,RB);function TB(a,b){this.j=a;this.g=null;if(C&&!Kf(9)){UB||(UB=new Wn);this.g=UB.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),UB.set(a,this.g));try{this.g.load(this.j)}catch(c){this.g=null}}}
z(TB,QB);var VB={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},UB=null;function WB(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return VB[b]})}
h=TB.prototype;h.isAvailable=function(){return!!this.g};
h.set=function(a,b){this.g.setAttribute(WB(a),b);XB(this)};
h.get=function(a){a=this.g.getAttribute(WB(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.g.removeAttribute(WB(a));XB(this)};
h.ha=function(){return YB(this).attributes.length};
h.qb=function(a){var b=0,c=YB(this).attributes,d=new Sn;d.next=function(){if(b>=c.length)throw Rn;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){for(var a=YB(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);XB(this)};
function XB(a){try{a.g.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
function YB(a){return a.g.XMLDocument.documentElement}
;function ZB(a,b){this.j=a;this.g=b+"::"}
z(ZB,QB);ZB.prototype.set=function(a,b){this.j.set(this.g+a,b)};
ZB.prototype.get=function(a){return this.j.get(this.g+a)};
ZB.prototype.remove=function(a){this.j.remove(this.g+a)};
ZB.prototype.qb=function(a){var b=this.j.qb(!0),c=this,d=new Sn;d.next=function(){for(var e=b.next();e.substr(0,c.g.length)!=c.g;)e=b.next();return a?e.substr(c.g.length):c.j.get(e)};
return d};function $B(a){var b=new SB;(b=b.isAvailable()?a?new ZB(b,a):b:null)||(a=new TB(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);return b}
;function aC(a){this.g=a}
aC.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,cr(b))};
aC.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
aC.prototype.remove=function(a){this.g.remove(a)};function bC(a){this.B=a;this.g={};this.l={};this.j=null;this.A=new qn;Rh(this,this.A);if(a=$B("google-upload")){this.j=new aC(a);try{if(this.g=this.j.get("stats"))if(this.g instanceof Object)for(var b in this.g)if(this.g[b]instanceof Object){var c=this.g[b],d;for(d in c)c[d].Xc||delete c[d]}else delete this.g[b];else this.g={};this.g?this.j.remove("stats"):this.g={}}catch(e){this.g={}}}}
z(bC,I);function cC(){this.Xc=[];this.ze=null}
function dC(a,b,c,d,e,f){b&&c&&(d={time:f||x(),type:d},e&&(d.details=e),a.g[b]||(a.g[b]={}),a.g[b][c]||(a.g[b][c]=new cC),a.g[b][c].Xc.push(d))}
function eC(a){if(!Xb(a.g))for(var b in a.g)if(!Xb(a.g[b])){var c=void 0,d=a,e=a.g[b],f=[],g=[];for(c in e)e[c].Xc&&0<e[c].Xc.length&&f.push({upload_id:c,events:e[c].Xc,client_version:d.B}),e[c].ze&&g.push(e[c].ze);c={};0<f.length&&(c.upload_events=f);0<g.length&&(c.related_uploads=g);f=cr(c);a.l[b]=a.g[b];a.g[b]={};g=new dt;a.A.G(g,"success",w(a.F,a,b));a.A.G(g,"error",w(a.C,a,b));g.send(b,"POST",f)}}
function fC(a,b){for(var c in b)a[c]?(a[c].Xc=a[c].Xc.concat(b[c].Xc),b[c].ze&&(a[c].ze=b[c].ze)):a[c]=b[c]}
bC.prototype.F=function(a){this.l[a]={}};
bC.prototype.C=function(a){fC(this.l[a],this.g[a]);this.g[a]=this.l[a];this.l[a]={}};
bC.prototype.store=function(){if(this.j){var a=null;try{a=this.j.get("stats")}catch(d){return}a||(a={});for(var b in this.l){var c=a[b]||{};fC(c,this.l[b]);a[b]=c}for(b in this.g)c=a[b]||{},fC(c,this.g[b]),a[b]=c;this.j.set("stats",a);this.l={};this.g={}}};
bC.prototype.clear=function(){this.j&&this.j.set("stats",{})};function gC(a,b){if(void 0!==a.name)this.name=a.name,this.code=hC[a.name];else{var c=a.code;this.code=c;this.name=iC(c)}Ya.call(this,ge("%s %s",this.name,b))}
z(gC,Ya);function iC(a){var b=Wb(hC,function(c){return a==c});
if(void 0===b)throw Error("Invalid code: "+a);return b}
var hC={AbortError:3,EncodingError:5,InvalidModificationError:9,InvalidStateError:7,NotFoundError:1,NotReadableError:4,NoModificationAllowedError:6,PathExistsError:12,QuotaExceededError:10,SecurityError:2,SyntaxError:8,TypeMismatchError:11};function jC(a,b){J.call(this,a.type,b)}
z(jC,J);function kC(){L.call(this);this.xb=new FileReader;this.xb.onloadstart=w(this.g,this);this.xb.onprogress=w(this.g,this);this.xb.onload=w(this.g,this);this.xb.onabort=w(this.g,this);this.xb.onerror=w(this.g,this);this.xb.onloadend=w(this.g,this)}
z(kC,L);kC.prototype.abort=function(){try{this.xb.abort()}catch(a){throw new gC(a,"aborting read");}};
kC.prototype.getError=function(){return this.xb.error&&new gC(this.xb.error,"reading file")};
kC.prototype.g=function(a){this.dispatchEvent(new jC(a,this))};
kC.prototype.N=function(){kC.J.N.call(this);delete this.xb};
function lC(a){var b=new kC,c=mC(b);b.xb.readAsArrayBuffer(a);return c}
function mC(a){var b=new An;a.G("loadend",Ua(function(c,d){var e=d.xb.result,f=d.getError();null==e||f?c.hd(f):c.Ea(e);d.dispose()},b,a));
return b}
;function nC(a,b,c){void 0===c&&(c=a.size);return a.webkitSlice?a.webkitSlice(b,c):a.mozSlice?a.mozSlice(b,c):a.slice?sf&&!Jf("13.0")||tf&&!Jf("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null}
;function oC(a,b){for(var c=[a],d=b.length-1;0<=d;--d)c.push(typeof b[d],b[d]);return c.join("\x0B")}
;var pC=function(a,b){var c=b||oC;return function(){var d=this||p;d=d.closure_memoize_cache_||(d.closure_memoize_cache_={});var e=c(Pa(a),arguments);return d.hasOwnProperty(e)?d[e]:d[e]=a.apply(this,arguments)}}(function(){if(!p.Blob)return!1;
var a=new Uint8Array(100);try{var b=new Blob([a])}catch(c){return!1}return 100!=b.size?!1:!0});function qC(a){switch(a){case 6:case 9:case 8:case 1:return"networkerror";case 2:return"ioerror";case 7:return"abort";case 5:return"exception";case 0:return"noerror";default:return"unknownerror"}}
function rC(a){switch(a){case "abort":return sC;case "networkerror":return tC;case "ioerror":return uC;case "securityerror":return vC;case "serverrejected":return wC;case "serverinvalidresponse":return xC;default:return yC}}
var sC=y("Canceled"),tC=y("Lost connection to server"),uC=y("Unable to read file"),vC=y("Security error"),wC=y("Server rejected"),xC=y("Server returned invalid response"),yC=y("Unexpected error");function zC(a,b,c,d){L.call(this);this.B=AC++;this.M=x();this.g=BC(a)||"";this.xa=null!=b?b:null;this.j=new Wn;this.l=BC(c);this.K=d;this.F={};new Wn}
z(zC,L);var CC={DEFAULT:"default",yx:"inqueue",Rx:"recovery",Tx:"start",Wx:"transfer",Wn:"success",ERROR:"error",Px:"partial-error",hx:"cancel"};h=zC.prototype;h.cb=0;h.gk="noerror";h.Vg="";h.wc=null;h.Cf=null;h.Yd=null;h.Lb=null;h.Ri=!1;var AC=0;function BC(a){if(!a)return a;wf&&(a=a.replace(/\\/g,"/"));Gc(a,"/")&&(a=a.substring(0,a.length-1));return a}
h=zC.prototype;h.getId=function(){return String(this.B)};
h.getName=function(){var a=DC(this);return this.l?this.l+"/"+a:a};
function EC(a){a=a.getName();var b=a.lastIndexOf(".");return 0>b?null:a.substr(b+1)}
function FC(a){if(!a.xa)return null;var b=new is;b.update(Xe(a.g+"|"+a.xa));return Ye(b.digest())}
function DC(a){return a.g.split("/").pop()}
function GC(a,b,c){a.gk=b;a.Vg=c||""}
h.kc=function(){return this.gk};
h.pg=function(){return this.Yd?this.Yd:this.wc};
h.toString=function(){return["File(id:",this.B,", path:",this.g,", relativeDirectoryPath:",this.l,", selectionId:",this.K,", bytesTransferred:",this.cb,", bytesTotal:",this.xa,")"].join("")};function HC(a,b,c,d,e,f,g){zC.call(this,a,b,c,d,f);this.D=e;this.C=g;this.ce=[];this.Mk={};this.L=[]}
z(HC,zC);HC.prototype.Nh=function(a){"."==DC(a)?this.L.push(a):(this.ce.push(a),this.Mk[DC(a)]=this.ce.length-1)};
function IC(a){for(var b=0,c=1,d=0,e=a.ce,f=0;f<e.length;f++){var g=e[f];if(g instanceof HC){var k=g;IC(k);b+=k.D;c+=k.C}else b+=1;d+=g.xa}a.xa=d;a.D=b;a.C=c}
;function JC(a,b,c){J.call(this,a,c);this.files=b}
z(JC,J);function KC(a,b,c){J.call(this,a,c);this.file=b}
z(KC,J);function LC(a,b,c){KC.call(this,"uploadmessagechanged",a,c);this.message=b}
z(LC,KC);function MC(a,b,c,d){KC.call(this,"filepreviewready",a,d);this.g=b}
z(MC,KC);function NC(a,b,c){J.call(this,a,c);this.A=b}
z(NC,J);function OC(a){this.file=a}
h=OC.prototype;h.Uc=null;h.Cc=null;h.Fd=null;h.blob=null;h.Og=!1;h.state="default";function PC(a){this.file=a}
z(PC,OC);PC.prototype.g=null;PC.prototype.j="";function QC(a){L.call(this);this.B=a;this.F=this.D="";this.j=new qn(this)}
z(QC,L);h=QC.prototype;h.dispatchEvent=function(a){try{return QC.J.dispatchEvent.call(this,a)}catch(b){}};
h.getFile=function(){return this.B};
h.mb=function(){return this.F};
h.send=function(a){this.D=a;this.Ce(a)};
h.qe=function(a){this.F=a||"";try{var b=JSON.parse(this.F)}catch(c){this.ab("serverinvalidresponse","Invalid response from server.");return}void 0!=b.sessionStatus?(null!=this.B.xa&&RC(this,this.B.xa),this.dispatchEvent("success")):void 0!=b.errorMessage?this.ab("serverrejected","Server rejected upload."):this.ab("serverinvalidresponse","Invalid response from server.")};
h.ab=function(a,b){GC(this.B,a,"string"===typeof b?b:b.message);this.dispatchEvent("error")};
function RC(a,b){a.B.cb=b;a.dispatchEvent("progress")}
h.Ak=function(){throw Error("computeMd5() not implemented");};
h.N=function(){QC.J.N.call(this);Th(this.j)};function SC(a,b,c){L.call(this);this.l=a.file;this.K=a.Cc;this.B=b;this.L=c||null;this.C=this.j=this.D=this.A=null;this.F=this.g=!1}
z(SC,L);
SC.prototype.start=function(){if(!this.g){this.g=!0;var a=new dt;K(a,"complete",w(function(){if(this.g){if(308==a.getStatus()){var b=a.getResponseHeader("Range");this.A=a.getResponseHeader("X-Range-MD5")||null;var c=a.mb(),d=null,e=null;try{d=JSON.parse(c).sessionStatus,e=d.externalFieldTransfers[0].formPostInfo||d.externalFieldTransfers[0].putInfo}catch(f){}if(b&&this.A&&d&&e&&(b=/^bytes=(\d+)-(\d+)$/.exec(b))&&(this.D=Number(b[1]),this.j=Number(b[2])+1,0==this.D&&0<this.j)){this.K.Ak(this.j,w(function(f){this.g&&
(this.C=f,this.C==this.A?(this.l.wc=e.url||this.B,this.l.Yd=e.cross_domain_url,this.l.cb=this.j,f=d.upload_id||Re(this.B,"upload_id"),this.l.Lb=f,this.F=!0,this.g=!1,this.dispatchEvent("success")):(this.g=!1,this.dispatchEvent("error_hashing")))},this));
this.dispatchEvent("hashing");return}}this.g=!1;ul("Query error, status: "+a.getStatus());this.dispatchEvent("error_querying")}},this));
a.send(this.B,"POST","",{"X-HTTP-Method-Override":"PUT","Content-Range":"bytes */"+this.l.xa});this.dispatchEvent("querying")}};
SC.prototype.cancel=function(){this.g=!1;this.dispatchEvent("canceled")};function TC(a,b){L.call(this);this.A=a;this.g="INITIALIZING";this.j=this.B=this.C=null;this.F=b;this.l=new qn(this)}
z(TC,L);h=TC.prototype;h.getFile=function(){return this.A};
h.start=function(a){var b=w(this.Bq,this),c=w(this.Jg,this),d=new dt;d.D=!0;this.l.G(d,"success",b).G(d,"error",c);b={protocolVersion:"0.8",createSessionRequest:{fields:[]}};c=this.getFile();var e=b.createSessionRequest,f={external:{name:"file",filename:DC(c)}};switch(this.F){case 0:var g="formPost";break;case 1:g="put";break;default:g="formPost"}f.external[g]={};g=c.xa;null==g||c.Ri||(f.external.size=g);e.fields.push(f);UC(b,c.j);try{c={};ec(c,this.getFile().F);e={};e["X-GUploader-Client-Info"]=
"mechanism="+this.j+"; clientVersion=311459328";ec(c,e);var k=cr(b);d.send(a,"POST",k,c)}catch(l){throw l;}};
h.Bq=function(a){try{var b=a.target.mb(),c=JSON.parse(b);if(void 0!=c.sessionStatus){var d=c.sessionStatus;switch(this.F){case 0:var e="formPostInfo";break;case 1:e="putInfo";break;default:e="formPostInfo"}this.g=d.state;var f=d.upload_id,g=d.externalFieldTransfers[0],k=g[e].url,l=g[e].cross_domain_url,m=this.getFile();m.wc=k;m.Yd=l;m.Lb=f;var n=a.target.getResponseHeader("X-GUploader-Stats-URL");m.Cf=n;b={};var t=a.target.getAllResponseHeaders().replace(/\r/g,"").split("\n");for(c=0;c<t.length;c++){var r=
t[c],v=r.indexOf(":");0>v||(b[r.substring(0,v)]=r.substring(v+2,r.length))}new Wn(b);this.dispatchEvent("startsuccess",a.target)}else if(void 0!=c.errorMessage){var B=c.errorMessage;f=B.upload_id;m=this.getFile();m.Lb=f;VC(this,B);this.Jg(a,"serverrejected")}else this.Jg(a,"serverinvalidresponse")}catch(E){this.Jg(a,"serverinvalidresponse")}};
function WC(a,b){var c=JSON.parse(b);void 0!=c.sessionStatus?(a.g=c.sessionStatus.state,VC(a,c.sessionStatus)):void 0!=c.errorMessage&&(a.g="FAILED",VC(a,c.errorMessage))}
function VC(a,b){var c=b.additionalInfo["uploader_service.GoogleRupioAdditionalInfo"];a.C=c.completionInfo.status;a.B=c.completionInfo.customerSpecificInfo}
h.Jg=function(a,b,c){this.g="FAILED";b||(b=qC(a.target.kc()),c=a.target.getLastError());GC(this.A,b,c);this.dispatchEvent("starterror",a.target)};
h.dispatchEvent=function(a,b){"string"===typeof a?a=new XC(a,this,b):a.request=b;try{return TC.J.dispatchEvent.call(this,a)}catch(c){}};
function UC(a,b){fo(b,function(c,d){a.createSessionRequest.fields.push({inlined:{name:d,content:c,contentType:"text/plain"}})})}
h.toString=function(){return"Session(state:"+this.g+")"};
h.N=function(){TC.J.N.call(this);Th(this.l)};
function XC(a,b,c){J.call(this,a,b);this.request=c||null}
z(XC,J);function YC(a){this.g=a}
z(YC,aC);function ZC(a){this.data=a}
function $C(a){return void 0===a||a instanceof ZC?a:new ZC(a)}
function aD(a){a=a.data;if(void 0===a)throw"Storage: Invalid value was encountered";return a}
function bD(a){if(a)return aD(a)}
YC.prototype.set=function(a,b){YC.J.set.call(this,a,$C(b))};
YC.prototype.j=function(a){a=YC.J.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
YC.prototype.get=function(a){return bD(this.j(a))};function cD(a){this.g=a}
z(cD,YC);function dD(a){var b=a.creation;a=a.expiration;return!!a&&a<x()||!!b&&b>x()}
cD.prototype.set=function(a,b,c){if(b=$C(b)){if(c){if(c<x()){cD.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}cD.J.set.call(this,a,b)};
cD.prototype.j=function(a,b){var c=cD.J.j.call(this,a);if(c)if(!b&&dD(c))cD.prototype.remove.call(this,a);else return c};function eD(a){this.g=a}
z(eD,cD);function fD(a,b){var c=[];Un(b,function(d){try{var e=eD.prototype.j.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):dD(e)&&c.push(d)},a);
return c}
function gD(a,b){var c=fD(a,b);A(c,function(d){eD.prototype.remove.call(this,d)},a)}
;function hD(){this.l=[];this.j=this.g=0}
;function iD(a,b){this.g=a;this.l=Xe(b);this.A=new er}
z(iD,eD);function jD(a,b){var c=new is;c.update(Xe(b));c.update(a.l);return Wf(c.digest(),3)}
function kD(a,b,c,d){if(!(0<b.length))throw Error("Non-empty salt must be provided");var e=new is;e.update(Xe(c));e.update(b);e.update(a.l);a=new hD;e=e.digest();if(!f)var f=e.length;b=a.l;for(c=0;256>c;++c)b[c]=c;var g=0;for(c=0;256>c;++c){g=g+b[c]+e[c%f]&255;var k=b[c];b[c]=b[g];b[g]=k}a.g=0;a.j=0;f=a.g;e=a.j;b=a.l;for(c=0;1536>c;++c)f=f+1&255,e=e+b[f]&255,g=b[f],b[f]=b[e],b[e]=g;a.g=f;a.j=e;d=Xe(d);if(!l)var l=d.length;f=a.g;e=a.j;b=a.l;for(c=0;c<l;++c)f=f+1&255,e=e+b[f]&255,g=b[f],b[f]=b[e],b[e]=
g,d[c]^=b[b[f]+b[e]&255];a.g=f;a.j=e;if(8192>=d.length)l=String.fromCharCode.apply(null,d);else for(l="",a=0;a<d.length;a+=8192)f=vb(d,a,a+8192),l+=String.fromCharCode.apply(null,f);return l}
iD.prototype.set=function(a,b,c){if(void 0===b)iD.prototype.remove.call(this,a);else{for(var d=[],e=0;8>e;++e)d[e]=Math.floor(256*Math.random());b=new ZC(kD(this,d,a,dr(this.A,b)));b.salt=d;iD.J.set.call(this,jD(this,a),b,c)}};
iD.prototype.j=function(a,b){var c=iD.J.j.call(this,jD(this,a),b);if(c){var d=aD(c),e=c.salt;if("string"!==typeof d||!Array.isArray(e)||!e.length)throw"Storage: Invalid value was encountered";d=kD(this,e,a,d);try{c.data=JSON.parse(d)}catch(f){throw"Storage: The value could not be decrypted";}return c}};
iD.prototype.remove=function(a){iD.J.remove.call(this,jD(this,a))};function lD(){this.j=[];this.g=[]}
function mD(a){0==a.j.length&&(a.j=a.g,a.j.reverse(),a.g=[]);return a.j.pop()}
h=lD.prototype;h.ha=function(){return this.j.length+this.g.length};
h.isEmpty=function(){return 0==this.j.length&&0==this.g.length};
h.clear=function(){this.j=[];this.g=[]};
h.contains=function(a){return mb(this.j,a)||mb(this.g,a)};
h.remove=function(a){var b=this.j;var c=cb(b,a);0<=c?(rb(b,c),b=!0):b=!1;return b||qb(this.g,a)};
h.ia=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.g.length;for(b=0;b<c;++b)a.push(this.g[b]);return a};function nD(){L.call(this);this.l=[];this.D=new Wn;this.da={};this.P={};this.ma={};this.C=new lD;this.g=new qn(this);Rh(this,this.g);this.B=new bC("311459328");Rh(this,this.B);try{this.g.G(window,"unload",this.Kq)}catch(a){}eC(this.B)}
z(nD,L);h=nD.prototype;h.Pe=!1;h.Tm=Ua(function(){var a=new An;a.Ea(!0);return a});
h.vc="";h.Ue=0;h.lk=!0;h.Sc=!0;h.Oe=!1;h.De=function(a){this.Sc=a};
h.rh=function(a){this.Oe=a};
h.dispatchEvent=function(a){try{return nD.J.dispatchEvent.call(this,a)}catch(b){}};
h.getFile=function(a){return(a=this.D.get(a))?a.file:null};
function oD(a,b){var c=a.D.get(b.getId());c||(c=a.ci(b),a.D.set(b.getId(),c));return c}
h.ye=function(a){if(this.C.contains(a)||oD(this,a).Uc||"default"!=oD(this,a).state)return!1;var b=!1;a instanceof HC||(this.C.g.push(a),b=!0);for(pD(this,a,"inqueue");!(1<=this.Ue||this.C.isEmpty());)this.Zg();return b};
h.Wd=function(a,b){switch(oD(this,a).state){case "success":case "error":case "cancel":return}var c=oD(this,a).Cc,d=oD(this,a).Uc,e=oD(this,a).Fd,f=x(),g=b||!1;d&&this.g.Z(d,"startsuccess",this.Im,!1,this);c&&(c.abort(),oD(this,a).Cc=null,g||(c=a.wc)&&(new dt).send(c,"DELETE"));e&&(e.cancel(),oD(this,a).Fd=null);this.C.remove(a);qD(this,a,"cancel");rD(this,a,f);oD(this,a).Uc=null;GC(a,"abort",void 0);pD(this,a,"cancel");if(a instanceof HC)for(e=a.ce,f=0;f<e.length;f++)this.Wd(e[f],g)};
function sD(a,b){a.l.push(b);a.D.get(b.getId())||a.D.set(b.getId(),a.ci(b));a.dispatchEvent(new KC("fileadded",b));a.Oh(b)}
function tD(a){A(tb(a.l),function(b){switch(oD(this,b).state){case "default":case "success":case "partial-error":case "error":case "cancel":this.hh(b)}},a)}
function pD(a,b,c){var d=oD(a,b).state;if(c!=d&&Vb(CC,c)){oD(a,b).state=c;var e="";if("error"==c||"cancel"==c)e=rC(b.kc());a.dispatchEvent(new LC(b,e));a.dispatchEvent(new KC("uploadstatechanged",b));uD(d)&&!uD(c)&&(b.A=void 0,a.Ue--,a.Zg())}}
h.reset=function(){A(tb(this.l),this.hh,this)};
h.lf=function(){return this.C.isEmpty()&&0==this.Ue};
h.qf=function(){return!1};
h.Si=function(){return!1};
h.re=function(){return!1};
h.Wi=function(){return!1};
h.jg=function(){return tb(this.l)};
h.hh=function(a){this.Wd(a);this.D.remove(a.getId());qb(this.l,a);this.dispatchEvent(new KC("fileremoved",a))};
h.Rf=function(){};
h.Df=function(){};
h.jh=function(){};
function uD(a){return mb(["recovery","start","transfer"],a)}
function vD(a,b){a.ye(b);if(b instanceof HC)for(var c=b.ce,d=0;d<c.length;d++)vD(a,c[d])}
h.isElement=function(a){return!!a.tagName};
function wD(a,b){return a.isElement(b)?b:b.H()}
h.ci=function(a){return new OC(a)};
h.Zg=function(){this.lf()&&this.dispatchEvent("allfilescompleted");if(!(1<=this.Ue||this.C.isEmpty())){if(Ic(this.vc))throw Error("session server url has not been set");var a=mD(this.C);if(!(a instanceof HC)){this.Ue++;if(this.A){var b=this.vc+":"+FC(a),c=null,d=null;try{c=this.A.j(b),d=bD(c)}catch(f){}if(c&&"string"===typeof d){var e=d;if(b=Re(d,"upload_id")){Hn(this.Tm(b),function(f){f?xD(this,a,e,c.creation):this.Rb(a)},function(){this.Rb(a)},this);
return}}}this.Rb(a)}}};
h.Rb=function(a){var b=new TC(a,this.Yk());b.j=this.Uh();this.g.G(b,"startsuccess",this.Im).G(b,"starterror",this.Ku);oD(this,a).Uc=b;var c=a.pg();c&&(b.g="OPEN");this.dispatchEvent(new KC("filesessioncreated",a,this));c?yD(this,a,c):(b.start(this.vc),pD(this,a,"start"))};
h.Te=function(a){return new QC(a)};
h.rj=function(a){var b=a.target;a=b.getFile();var c=oD(this,a).Uc,d=x();try{WC(c,b.mb());var e=c.C;"FINALIZED"!=c.g||"SUCCESS"!=e&&"QUEUED"!=e?(GC(a,"serverrejected",void 0),pD(this,a,"error")):pD(this,a,"success")}catch(f){GC(a,"serverinvalidresponse",void 0),pD(this,a,"error")}this.A&&(this.A.remove(this.vc+":"+FC(a)),this.A instanceof eD&&"success"==oD(this,a).state&&(e=this.A,gD(e,e.g.qb(!0))));qD(this,a,"success");rD(this,a,d)};
h.Oh=function(a){this.lk&&vD(this,a)};
h.Yk=function(){return 0};
h.Kq=function(){tD(this);for(var a=0;a<this.l.length;a++){var b=this.l[a];b&&b.Cf&&b.Lb&&dC(this.B,b.Cf,b.Lb,"unload","",x())}this.B.store()};
function xD(a,b,c,d){var e=oD(a,b);e.Cc||(e.Cc=a.Te(b));c=new SC(e,c,d);a.g.G(c,"success",w(a.Rb,a,b)).G(c,"error_querying",w(a.Rb,a,b)).G(c,"error_hashing",w(a.Rb,a,b)).G(c,"hashing",function(){a.dispatchEvent(new KC("filehashingstarted",b,a))});
e.Fd=c;c.start();pD(a,b,"recovery")}
function yD(a,b,c){if("abort"!=b.kc()){if(a.A){var d=a.vc+":"+FC(b);try{a.A.set(d,b.wc,x()+864E6)}catch(l){}}d=oD(a,b);d.Cc||(d.Cc=a.Te(b));d=d.Cc;pD(a,b,"transfer");a.g.G(d,"success",a.rj).G(d,"error",a.jv).G(d,"progress",a.no).G(d,"backoff",a.fv);if(!a.P[b.getId()]){var e=b.Lb,f=[];a.ma[e]=x();for(var g=0;g<a.l.length;g++){var k=a.l[g];k&&!a.P[k.getId()]&&(a.P[k.getId()]=e,f.push(k))}a.da[e]=f}qD(a,b,"select","",b.M);qD(a,b,"start");a.dispatchEvent(new KC("fileiocreated",b,a));d.send(c)}}
function qD(a,b,c,d,e){e=e||x();var f=b.Cf;b=b.Lb;f&&b&&(dC(a.B,f,b,c,d,e),eC(a.B))}
function rD(a,b,c){var d=a.P[b.getId()];if(d){var e=a.da[d];if(!(2>e.length||e[e.length-1]!=b)){b=e[0].Cf;var f=0;if(b){var g=[],k;for(k in e)null!=e[k]&&null!=e[k].Lb&&(g.push(e[k].Lb),f+=e[k].xa);e=a.B;c=parseInt(c-a.ma[d],10);d=f;!g||1>=g.length||(f=g[0],g={upload_id:g},c&&(g.latency_ms=c),d&&(g.total_size=d),e.g[b]||(e.g[b]={}),e.g[b][f]||(e.g[b][f]=new cC),e.g[b][f].ze=g);eC(a.B)}}}}
h.Im=function(a){a=a.target.getFile();var b=a.pg();if(b)yD(this,a,b);else throw Error("no upload URL for "+a);};
h.Ku=function(a){a=a.target.getFile();pD(this,a,"error")};
h.no=function(a){a=a.target.getFile();this.dispatchEvent(new KC("uploadprogress",a))};
h.jv=function(a){a=a.target;var b=a.getFile(),c=x(),d=oD(this,b).Uc;try{WC(d,a.mb())}catch(e){a.mb()}pD(this,b,"error");qD(this,b,"error",b.Vg,x());rD(this,b,c);this.A&&this.A.remove(this.vc+":"+FC(b))};
h.fv=function(a){a=a.target.getFile();this.dispatchEvent(new KC("uploadbackoff",a))};function zD(a){if(0==a.length)return null;for(var b={},c=[],d=[],e=0;e<a.length;e++){var f=a[e],g=f.g,k=g.substring(0,g.indexOf("/"));if(0==k.length)d.push(f);else{var l=b[k];l||(l=new HC(k),b[k]=l,c.push(l));g=g.substring(0,g.lastIndexOf("/"));f.l=BC(g);g=g.split("/");for(k=1;k<g.length;k++){var m=g[k];var n=l.Mk[m];n=void 0!=n?l.ce[n]:null;n||(n=new HC(m,void 0,g.slice(0,k).join("/")),l.Nh(n));l=n}l.Nh(f)}}for(e=0;e<c.length;e++)IC(c[e]);return c.concat(d)}
;function AD(a,b){this.ib=b;this.C=[];this.B=[];this.j=[];this.l=this.g=0;this.A=!1;for(var c=0;c<a.length;c++){var d=a[c];if("file"==d.kind){var e=d.webkitGetAsEntry();e.isFile?this.C.push(d.getAsFile()):(this.j.push(e),this.B.push(BD(e)))}}}
h=AD.prototype;h.start=function(){this.A=!1;CD(this)};
h.stop=function(){this.A=!0};
function CD(a){if(!a.A){for(;1>a.g&&0<a.j.length;){a.g++;var b=a.j.shift().createReader();b.readEntries(w(a.yl,a,b),w(a.xl,a))}DD(a)}}
h.yl=function(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.isFile?(this.l++,d.file(w(this.Op,this,d.fullPath),w(this.Mp,this))):(this.j.push(d),this.B.push(BD(d)))}0==b.length||this.A?(this.g--,CD(this)):a.readEntries(w(this.yl,this,a),w(this.xl,this))};
function BD(a){a=a.fullPath;Gc(a,"/")||(a+="/");return ED(a)}
h.xl=function(){this.g--;CD(this)};
h.Op=function(a,b){this.l--;a=ED(a);b.relativePath=a;this.C.push(b);DD(this)};
function ED(a){a&&Fc(a,"/")&&(a=a.substring(1));return a}
h.Mp=function(){this.l--;DD(this)};
function DD(a){0==a.g&&0==a.l&&0==a.j.length&&a.ib(a.C,a.B)}
;function FD(a,b,c,d,e){var f=new Uint8Array(a);a=GD(f);if(0==a.length)return null;var g=0;A(a,function(m){g+=m.length});
var k=0,l=new Uint8Array(g);A(a,function(m){l.set(f.subarray(m.offset,m.offset+m.length),k);if(m.ir){var n=73==l[k+10],t=HD(l,k+14,n)+10,r=2+t;for(t=r+12*ID(l,t,n);r<t;r+=12){var v=ID(l,r,n);switch(v){case 256:JD(l,r+8,d,n);break;case 257:JD(l,r+8,e,n);break;case 282:case 283:var B=HD(l,r+8,n)+10,E=l,X=B,fa=n;var ia;v=HD(l,B,n)/HD(l,B+4,n)*(282==v?d/b:e/c);if(isFinite(v)&&0==v%1)v=[v,1];else{B=0>v;v=Math.abs(v);for(var xb=1,mc=1,sd=0,Am=0;1E7>=Am*(ia=Math.floor(v))+mc;){var lx=xb*ia+sd;sd=xb;xb=lx;
lx=Am*ia+mc;mc=Am;Am=lx;ia=v-ia;if(1E-6>ia)break;v=1/ia;if(2147483647<ia)break}v=[B?-xb:xb,Am]}JD(E,X,v[0],fa);JD(E,X+4,v[1],fa);break;case 34665:var Bm=HD(l,r+8,n)+10}}if(Bm)for(n=73==l[k+10],r=2+Bm,Bm=r+12*ID(l,Bm,n);r<Bm;r+=12)switch(ID(l,r,n)){case 40962:JD(l,r+8,d,n);break;case 40963:JD(l,r+8,e,n)}}k+=m.length});
return l}
function GD(a){var b=[];if(2>a.byteLength||255!=a[0]||216!=a[1])return[];for(var c=2;c<a.byteLength;){var d=a[c++];if(255!=d)return[];d=a[c++];var e=(a[c]<<8)+a[c+1];switch(d){case 225:var f=a[c+8];b.push({Br:d,offset:c-2,length:e+2,ir:69==a[c+2]&&120==a[c+3]&&105==a[c+4]&&102==a[c+5]&&0==a[c+6]&&0==a[c+7]&&f==a[c+9]&&(73==f||77==f)&&42==ID(a,c+10,73==f)});break;case 236:b.push({Br:d,offset:c-2,length:e+2});break;case 218:return b;case 216:return[];case 217:return[]}c+=e}return b}
function ID(a,b,c){c=c?1:0;return(a[b+c]<<8)+a[b+1-c]}
function HD(a,b,c){c=c?1:0;return(a[b+3*c]<<24)+(a[b+1+c]<<16)+(a[b+2-c]<<8)+a[b+3-3*c]}
function JD(a,b,c,d){d=d?1:0;a[b+3-3*d]=c&255;a[b+2-d]=c>>8&255;a[b+1+d]=c>>16&255;a[b+3*d]=c>>24&255}
;function KD(a,b,c){QC.call(this,a);this.l=b;this.g=c;this.A=!1}
z(KD,QC);KD.prototype.abort=function(){this.A&&Na(this.g.cancelUpload)&&this.g.cancelUpload(this.l.id)};
KD.prototype.Ce=function(a){this.g.startUpload(this.l.id,a);this.A=!0};var LD=["classid","data","movie","type","typemustmatch"];function MD(a,b){var c={},d;for(d in a)c[d]=a[d];for(d in b){var e=d.toLowerCase();e in a&&delete c[e];c[d]=b[d]}e=[];for(d in c)e.push(Qd("param",{name:d,value:c[d]}));return e}
function ND(a,b){function c(d,e,f){for(var g in e)for(var k=g.toLowerCase(),l=0;l<d.length;l++){var m=d[l];if(k==m)throw Error('Cannot override "'+m+'" '+f+', got "'+g+'" with value "'+e[g]+'"');}}
c(LD,a,"attribute");c(LD,b,"param")}
;var OD=!1,PD="";function QD(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(OD=!0,a.description)){PD=QD(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){OD=!0;PD="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],OD=!(!a||!a.enabledPlugin))){PD=QD(a.enabledPlugin.description);return}if("undefined"!=typeof ActiveXObject){try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
OD=!0;PD=QD(b.GetVariable("$version"));return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");OD=!0;PD="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),OD=!0,PD=QD(b.GetVariable("$version"))}catch(c){}}})();
var RD=OD,SD=PD;function TD(){nD.call(this);this.F=new Wn;this.R=new Wn;this.ja=new Wn;this.U=new Wn;this.M=new Wn;this.K=new du;this.j=new du;this.L=[]}
z(TD,nD);var UD=Dc(oc("static/uploaderapi.swf")),VD=1,WD=new Wn;h=TD.prototype;h.Yb="";h.Wh=!1;h.hk=!1;h.De=function(a){TD.J.De.call(this,a);a=this.hn;A(this.M.Ga(),a,this)};
function XD(a,b){return YD(a,b).H(b||a.Yb)}
h.install=function(a){if(!a)throw Error("overlayElement must be defined");this.dispatchEvent(new NC("uploaderinstalling",this));ZD(this,a)};
h.Vh=function(a){if(!a)throw Error("overlayElement must be defined");this.dispatchEvent(new NC("uploaderuninstalling",this));this.Df(a)};
h.Uh=function(){return"scotty flash"};
h.nc=function(){return Zn(this.M.j,this.Yb)};
h.ci=function(a){return new PC(a)};
h.jh=function(){Un(this.F.qb(!0),function(a){var b=XD(this,a),c=XD(this,a||this.Yb).parentNode;YD(this,a);a=this.F.get(a);hm(c,jm(a));c=xm(a);vm(b,c.width,c.height)},this)};
h.Vd=function(a){this.Wh=a||this.Wh;Zn(this.M.j,this.Yb)&&XD(this,this.Yb).browse(this.Sc,$D())};
h.Rf=function(a){ZD(this,a)};
h.Df=function(a){a=wD(this,a);var b=Pa(a),c=this.R.get(b);c&&c!=this.Yb&&(this.lf()?YD(this,c).md(XD(this,c||this.Yb).parentNode):this.L.push(c),this.R.remove(b),this.F.remove(a))};
h.Zg=function(){TD.J.Zg.call(this);if(this.lf()){for(var a=0;a<this.L.length;a++)YD(this,this.L[a]).md(XD(this,this.L[a]||this.Yb).parentNode);this.L=[]}};
h.Wd=function(a,b){this.j.remove(a.getId());TD.J.Wd.call(this,a,b)};
h.ye=function(a){return this.K.contains(a.getId())?(this.j.add(a.getId()),!0):TD.J.ye.call(this,a)};
h.Rb=function(a){if(!this.K.contains(a.getId())){var b=this.O?this.O(a):this.qa;if(b){this.dispatchEvent(new KC("filedownsamplingstarted",a));var c=aE(this,a);c.setMaxPixelDimension(Math.min(b.g().width,b.g().height));c.setMinImageByteCountForRescale(51200);c.resizeImage(oD(this,a).g.id,a.pg())}else TD.J.Rb.call(this,a)}};
h.Te=function(a){var b=oD(this,a).g;a=new KD(a,b,aE(this,a));this.ja.set(b.id,a);return a};
h.lf=function(){return this.j.isEmpty()&&TD.J.lf.call(this)};
h.hn=function(a){XD(this,a).setMultiSelect(this.Sc)};
function aE(a,b){var c=oD(a,b).j;return XD(a,c)}
function YD(a,b){var c=a.F.get(b||a.Yb);return Zi(c)}
function ZD(a,b){var c=wD(a,b),d="FLASH_UPLOADER_"+VD++;a.F.set(d,c);a.R.set(Pa(c),d);var e=YD(a,d);a.Yb||(a.Yb=d,ck(e).onUploaderApiReady=bE);WD.set(d,w(a.Am,a));P(c,"uploader-overlay-visible");var f=xm(c),g=e.W("DIV",{"class":"upload-uploader-flash-content"});e.pf(g,c);bm(g,"position","absolute");bm(g,"visibility","visible");c.parentNode&&bm(c.parentNode,"position","relative");hm(g,jm(c));e={allowscriptaccess:"always",allownetworking:"all",wmode:a.hk?"window":"transparent",flashvars:"apiId="+d+
(a.S?"&"+a.S:"")};c=UD;f={id:d,width:f.width,height:f.height};d=YD(a,d).H(g);C?(ND(f,e),g=MD({allownetworking:"none",allowscriptaccess:"never",movie:c},e),c=Sd({classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"},f),g=Qd("object",c,g)):(ND(f,e),g=MD({allownetworking:"none",allowscriptaccess:"never"},e),c=Sd({data:c,type:"application/x-shockwave-flash",typemustmatch:""},f),g=Qd("object",c,g));ae(d,g);a.dispatchEvent(new NC("appletinsertedindom",a))}
h.Am=function(a){var b=YD(this,a),c=XD(this,a);if(c.addListener){this.M.set(a,!0);var d=a+"flashFileSelection";b=ck(b);b[d]=w(this.At,this);c.addListener("onSelected",d);d=a+"flashMouseEvent";b[d]=w(this.Bt,this);c.addListener("onMouseOver",d);c.addListener("onMouseOut",d);c.addListener("onMouseClick",d);d=a+"flashToFileIo";b[d]=w(this.No,this);c.addListener("onOpen",d);c.addListener("onProgress",d);c.addListener("onCompleteData",d);c.addListener("onHttpError",d);c.addListener("onSecurityError",d);
c.addListener("onIoError",d);d=a+"flashImageEvent";b[d]=w(this.Lt,this);c.addListener("onPreviewReady",d);c.addListener("onResizeReady",d);c.addListener("onLoadError",d);this.hn(a);XD(this,a).setAllowedFileTypes($D());a=XD(this,a);a.setAllowAddingFiles(!0);jn(a,"uploader-overlay-hidden",!1);this.dispatchEvent(new NC("uploaderready",this))}else Uk(w(this.Am,this,a))};
h.At=function(a){this.dispatchEvent(new J("filesscanstarted"));var b=a.apiId;XD(this,b);this.Wh&&tD(this);var c=a.files;a=fb(c,function(d){return new zC(d.name,d.size,void 0,void 0,d.modificationDate)});
A(a,function(d,e){var f=oD(this,d);f.j=b;f.g=c[e];this.U.set(c[e].id,d)},this);
this.dispatchEvent(new J("filesscanfinished"));this.dispatchEvent(new JC("filesselected",a))&&(A(a,function(d){sD(this,d)},this),this.dispatchEvent(new JC("allfilesadded",a)))};
h.Lt=function(a){var b=this.U.get(a.file);switch(a.type){case "onPreviewReady":this.K.remove(b.getId());this.dispatchEvent(new MC(b,"data:image/jpg;base64,"+a.data,a.version));this.j.contains(b.getId())&&(this.j.remove(b.getId()),this.ye(b));break;case "onResizeReady":b.xa=a.fileSize;this.dispatchEvent(new KC("filedownsamplingcompleted",b));TD.J.Rb.call(this,b);break;case "onLoadError":this.K.contains(b.getId())?(this.K.remove(b.getId()),this.dispatchEvent(new KC("filepreviewerror",b)),this.j.contains(b.getId())&&
(this.j.remove(b.getId()),this.ye(b))):(this.dispatchEvent(new KC("filedownsamplingcompleted",b)),TD.J.Rb.call(this,b))}};
h.No=function(a){var b=this.ja.get(a.file);switch(a.type){case "onOpen":b.getFile();break;case "onProgress":RC(b,a.bytesLoaded);break;case "onCompleteData":b.qe(a.data);break;case "onHttpError":b.ab("networkerror","HTTP Error "+a.code);break;case "onSecurityError":b.ab("securityerror",a.error);break;case "onIoError":b.ab("ioerror","An error occured while reading the file.")}};
h.Bt=function(a){switch(a.type){case "onMouseOver":var b="flashmouseover";break;case "onMouseOut":b="flashmouseout";break;case "onMouseClick":b="flashmouseclick"}a=this.F.get(a.apiId);this.dispatchEvent({type:b,sourceOverlay:a})};
function $D(){if(Array.isArray(null)&&null.length)return[{description:y("Allowed files"),extension:"*"+null.join(";*")}]}
function bE(a){WD.get(a)(a)}
;function cE(a){return 3*a*a-2*a*a*a}
;function dE(){this.g=x()}
var eE=null;dE.prototype.set=function(a){this.g=a};
dE.prototype.reset=function(){this.set(x())};
dE.prototype.get=function(){return this.g};function fE(a){this.j=a||"";eE||(eE=new dE);this.l=eE}
fE.prototype.g=!1;function gE(a){a=new Date(a.l());return hE(a.getFullYear()-2E3)+hE(a.getMonth()+1)+hE(a.getDate())+" "+hE(a.getHours())+":"+hE(a.getMinutes())+":"+hE(a.getSeconds())+"."+hE(Math.floor(a.getMilliseconds()/10))}
function hE(a){return 10>a?"0"+a:String(a)}
function iE(a,b){var c=(a.l()-b)/1E3,d=c.toFixed(3),e=0;if(1>c)e=2;else for(;100>c;)e++,c*=10;for(;0<e--;)d=" "+d;return d}
function jE(a){fE.call(this,a)}
z(jE,fE);
function kE(a,b){try{var c=Vh(a);var d=c.fileName;null==d&&(d="");if(/^https?:\/\//i.test(d)){var e=$c(d)||cd;var f=Zd(oc("view-source scheme plus HTTP/HTTPS URL"),"view-source:"+Yc(e))}else f=ad(nc(oc("sanitizedviewsrc")));return Vd(Kd("Message: "+c.message+"\nUrl: "),Pd("a",{href:f,target:"_new"},c.fileName),Kd("\nLine: "+c.lineNumber+"\n\nBrowser stack:\n"+c.stack+"-> [end]\n\nJS stack traversal:\n"+Xh(b)+"-> "))}catch(g){return Kd("Exception trying to expose exception! You win, we lose. "+g)}}
jE.prototype.g=!0;function lE(){L.call(this);this.j="closure_frame"+mE++;this.l=[];nE[this.j]=this}
var oE;z(lE,L);var nE={},mE=0;function pE(a,b){var c=Zi(a);fo(b,function(d,e){Array.isArray(d)||(d=[d]);A(d,function(f){f=c.W("INPUT",{type:"hidden",name:e,value:f});a.appendChild(f)})})}
h=lE.prototype;h.oa=null;h.Ka=null;h.wd=null;h.Nr=0;h.lc=!1;h.wh=!1;h.si=null;h.Ug=null;h.nd=0;h.vd=null;
h.send=function(a,b,c,d){if(this.lc)throw Error("[goog.net.IframeIo] Unable to send, already active.");this.si=a=new ph(a);b=b?b.toUpperCase():"GET";c&&vo(a,"zx",te());oE||(oE=pj("FORM"),oE.acceptCharset="utf-8",c=oE.style,c.position="absolute",c.visibility="hidden",c.top=c.left="-10px",c.width=c.height="10px",c.overflow="hidden",document.body.appendChild(oE));this.oa=oE;"GET"==b&&pE(this.oa,a.j);d&&pE(this.oa,d);d=this.oa;a=a.toString();Ol();be(d,ad(a));this.oa.method=b;qE(this);rE(this)};
function sE(a,b,c){if(a.lc)throw Error("[goog.net.IframeIo] Unable to send, already active.");c=new ph(c||b.action);a.si=c;a.oa=b;be(a.oa,c.toString());qE(a)}
h.abort=function(a){if(this.lc){var b=tE(this);Di(b);this.wh=this.lc=!1;this.nd=a||7;this.dispatchEvent("abort");uE(this)}};
h.N=function(){this.lc&&this.abort();lE.J.N.call(this);this.Ka&&vE(this);rE(this);delete this.A;this.si=this.Ug=this.oa=null;this.nd=0;delete nE[this.j]};
h.se=function(){return this.wh};
h.isActive=function(){return this.lc};
h.mb=function(){return this.Ug};
h.Vk=function(){return br(this.Ug)};
h.kc=function(){return this.nd};
h.getLastError=function(){return Ys(this.nd)};
function qE(a){a.lc=!0;a.nd=0;a.wd=a.j+"_"+(a.Nr++).toString(36);a.Ka=Zi(a.oa).W("IFRAME",{name:a.wd,id:a.wd});C&&7>Number(If)&&be(a.Ka,ad(nc(oc('javascript:""'))));var b=a.Ka.style;b.visibility="hidden";b.width=b.height="10px";b.display="none";tf?b.marginTop=b.marginLeft="-10px":(b.position="absolute",b.top=b.left="-10px");if(C&&!Jf("11")){a.oa.target=a.wd||"";Zi(a.oa).g.body.appendChild(a.Ka);K(a.Ka,"readystatechange",a.nj,!1,a);try{a.g=!1,a.oa.submit()}catch(r){Bi(a.Ka,"readystatechange",a.nj,
!1,a),wE(a,1)}}else{Zi(a.oa).g.body.appendChild(a.Ka);b=a.wd+"_inner";var c=Jj(a.Ka);if(document.baseURI){var d=le(b);d=Yd(oc("Short HTML snippet, input escaped, safe URL, for performance"),'<head><base href="'+le(document.baseURI)+'"></head><body><iframe id="'+d+'" name="'+d+'"></iframe>')}else d=le(b),d=Yd(oc("Short HTML snippet, input escaped, for performance"),'<body><iframe id="'+d+'" name="'+d+'"></iframe>');pf&&!tf?ae(c.documentElement,d):c.write(Hd(d));K(c.getElementById(b),"load",a.dh,!1,
a);var e=cj("TEXTAREA",a.oa);d=0;for(var f=e.length;d<f;d++){var g=e[d].value;Xj(e[d])!=g&&(Lj(e[d],g),e[d].value=g)}e=c.importNode(a.oa,!0);e.target=b;e.action=a.oa.action;c.body.appendChild(e);g=cj("SELECT",a.oa);var k=cj("SELECT",e);d=0;for(f=g.length;d<f;d++)for(var l=cj("OPTION",g[d]),m=cj("OPTION",k[d]),n=0,t=l.length;n<t;n++)m[n].selected=l[n].selected;g=cj("INPUT",a.oa);k=cj("INPUT",e);d=0;for(f=g.length;d<f;d++)if("file"==g[d].type&&g[d].value!=k[d].value){a.oa.target=b;e=a.oa;break}try{a.g=
!1,e.submit(),c.close(),sf&&Uk(a.rn,250,a)}catch(r){d=kE(r,void 0),Hd(d),Bi(c.getElementById(b),"load",a.dh,!1,a),c.close(),wE(a,2)}}}
h.nj=function(){if("complete"==this.Ka.readyState){Bi(this.Ka,"readystatechange",this.nj,!1,this);try{var a=Jj(this.Ka);if(C&&"about:blank"==a.location&&!navigator.onLine){wE(this,9);return}}catch(b){wE(this,1);return}xE(this,a)}};
h.dh=function(){if(!pf||tf||"about:blank"!=(this.Ka?Jj(tE(this)):null).location){Bi(tE(this),"load",this.dh,!1,this);try{xE(this,this.Ka?Jj(tE(this)):null)}catch(a){wE(this,1)}}};
function xE(a,b){a.lc=!1;try{var c=b.body;a.Ug=c.textContent||c.innerText}catch(e){var d=1}d||"function"!=typeof a.A||(c=a.A(b))&&(d=4);d?wE(a,d):(a.wh=!0,a.nd=0,a.dispatchEvent("complete"),a.dispatchEvent("success"),uE(a))}
function wE(a,b){a.g||(a.wh=!1,a.lc=!1,a.nd=b,a.dispatchEvent("complete"),a.dispatchEvent("error"),uE(a),a.g=!0)}
function uE(a){vE(a);rE(a);a.oa=null;a.dispatchEvent("ready")}
function vE(a){var b=a.Ka;b&&(b.onreadystatechange=null,b.onload=null,b.onerror=null,a.l.push(b));a.vd&&(Vk(a.vd),a.vd=null);sf||pf&&!tf?a.vd=Uk(a.Lk,2E3,a):a.Lk();a.Ka=null;a.wd=null}
h.Lk=function(){this.vd&&(Vk(this.vd),this.vd=null);for(;0!=this.l.length;){var a=this.l.pop();Bj(a)}};
function rE(a){a.oa&&a.oa==oE&&xj(a.oa)}
function tE(a){return a.Ka?C&&!Jf("11")?a.Ka:Jj(a.Ka).getElementById(a.wd+"_inner"):null}
h.rn=function(){if(this.lc){var a=this.Ka?Jj(tE(this)):null;a&&!mf(a,"documentUri")?(Bi(tE(this),"load",this.dh,!1,this),navigator.onLine?wE(this,3):wE(this,9)):Uk(this.rn,250,this)}};function yE(a,b,c){QC.call(this,a);this.oa=b;this.l=this.g=null;this.Re=c||0;this.A=this.C=0}
z(yE,QC);h=yE.prototype;h.abort=function(){this.g.abort()};
h.Ce=function(a){var b=new lE;this.g=b;this.j.G(b,"success",this.Bl).G(b,"error",function(c){var d=window.location.href;var e=Ce(1,a);var f=De(a),g=Number(Ce(4,a))||null;if(e||f||g){var k=Ce(1,d),l=De(d);d=Number(Ce(4,d))||null;e=k||l||d?e==k&&f==l&&g==d:!0}else e=!0;e?this.Al(c):zE(this,w(this.Bl,this),w(this.Al,this))});
sE(b,this.oa,a);Uk(this.ph,5E3,this);this.A=(new Date).getTime()};
h.Bl=function(a){try{var b=a.target.mb(),c=(b&&JSON.parse(b)).sessionStatus;if(c){var d=c.externalFieldTransfers[0],e=this.getFile();null==e.xa&&(e.xa=d.bytesTotal,e.Ri=!1)}}catch(f){}this.qe(a.target.mb()||"")};
h.Al=function(a){this.ab(qC(a.target.kc()),a.target.getLastError())};
function zE(a,b,c){var d=new dt;a.j.G(d,"success",b).G(d,"error",c);try{var e=a.getFile().wc;d.send(e,"GET")}catch(f){}}
h.ph=function(){this.g.isActive()&&zE(this,w(this.hq,this),w(this.gq,this))};
h.hq=function(a){if(this.g.isActive()){try{var b=a.target.mb(),c=JSON.parse(b).sessionStatus.externalFieldTransfers[0],d=c.bytesTransferred,e=this.getFile();if(null==e.xa)if(0<c.bytesTotal)e.xa=c.bytesTotal,e.Ri=!0;else{Uk(this.ph,15E3,this);return}var f=e.xa;null!=this.l&&this.l.stop(!1);var g=(new Date).getTime();if(0<this.C||0==this.Re)this.Re=Math.round((d-this.C)/(g-this.A));this.C=d;this.A=g;a=15500;var k=e.cb,l=Math.round(d+a*this.Re);l>f&&(l=f,a=Math.round((f-d)/this.Re)+500);this.l=new Ct([k],
[l],a,cE);this.j.G(this.l,"animate",w(function(m){RC(this,Math.round(m.x))},this));
this.l.play()}catch(m){}this.g.isActive()&&Uk(this.ph,15E3,this)}};
h.gq=function(){this.g.isActive()&&Uk(this.ph,15E3,this)};
h.N=function(){yE.J.N.call(this);Th(this.l)};function AE(a){nD.call(this);this.L=new Wn;this.K=new Wn;this.j=new Wn;this.M=new Wn;this.F=a||!1}
z(AE,nD);h=AE.prototype;h.Xl=!1;h.ik=0;h.sf=!1;h.install=function(a){a&&(this.sf=!0);this.dispatchEvent(new NC("uploaderinstalling",this));a&&BE(this,a,this.F);this.Xl=!0;this.dispatchEvent(new NC("uploaderready",this));a||Uk(function(){this.Vd(!1)},1,this)};
h.Vh=function(a){this.dispatchEvent(new NC("uploaderuninstalling",this));a&&(a=this.j.get(Pa(a)))&&Cm(a,!1)};
h.Uh=function(){return"scotty html form"};
h.nc=function(){return this.Xl};
h.jg=function(){var a=AE.J.jg.call(this);return eb(a,function(b){return""!=b.g},this)};
h.jh=function(){this.sf&&Un(this.M.qb(!0),function(a){var b=this.M.get(a),c=this.j.get(a);a=this.K.get(a).childNodes[0];hm(c,jm(b));b=xm(b);vm(c,b.width,b.height);wm(a,b.width);a.style.height=im(b.height,!0);bm(a,"font-size",b.height+"px")},this)};
h.Rf=function(a){a=wD(this,a);var b=this.j.get(Pa(a));b?Cm(b,!0):BE(this,a)};
h.Df=function(a){a=Pa(wD(this,a));(a=this.j.get(a))&&Cm(a,!1)};
h.rj=function(a){this.ik=a.target.Re;AE.J.rj.call(this,a)};
h.Vd=function(a){!this.sf&&(a?tD(this):sD(this,new zC))};
h.hh=function(a){AE.J.hh.call(this,a);this.L.remove(a.getId());0!=this.l.length||this.sf||this.Vd(!1)};
h.Oh=function(a){this.sf&&AE.J.Oh.call(this,a)};
h.Te=function(a){var b=this.L.get(a.getId());return new yE(a,b,this.ik)};
function BE(a,b,c){var d=Pa(b);a.M.set(d,b);var e=Zi(b);P(b,"uploader-overlay-visible");var f=xm(b),g=["opacity:0","filter:alpha(opacity=0)","font-size:"+f.height+"px","height:"+f.height+"px","position:absolute",Gm(b)?"left:0px":"right:0px","top:0px"];c=e.W("INPUT",{type:"file",name:"Filedata",size:20,"class":"uploader-upload-input",style:g.join(";"),tabIndex:c?-1:0});g=e.W("FORM",{method:"POST",enctype:"multipart/form-data",encoding:"multipart/form-data"},c);a.K.set(d,g);var k=a.j.get(d);k||(k=e.W("DIV",
{style:"overflow:hidden;width:"+f.width+"px;height:"+f.height+"px"}),a.j.set(d,k),e.pf(k,b),bm(k,"position","absolute"),b.parentNode&&bm(b.parentNode,"position","relative"),hm(k,jm(b)));e.append(k,g);a.g.G(c,"change",function(l){l=l.target.value;l.match(/^c:\\fakepath\\/i)&&(l=l.substring(12));this.dispatchEvent(new J("filesscanstarted"));l=new zC(l);var m=this.K.get(d);this.L.set(l.getId(),m);vm(m.childNodes[0],0,0);BE(this,b);this.dispatchEvent(new J("filesscanfinished"));this.dispatchEvent(new JC("filesselected",
[l]))&&(sD(this,l),this.dispatchEvent(new JC("allfilesadded",[l])))})}
;function CE(a,b){J.call(this,a);this.g=b}
z(CE,J);CE.prototype.getItem=function(){return this.g};function DE(){I.call(this);this.l=0;this.j=new lD;this.g=new qn(this);Rh(this,this.g)}
var EE;z(DE,I);DE.prototype.start=function(a,b){var c=new FE(a,b);this.j.g.push(c);GE(this);return c};
function GE(a){if(!a.j.isEmpty()&&1>a.l){var b=mD(a.j);a.g.G(b,["i","j","k"],a.A);a.l++;Uk(w(b.start,b),0)}}
DE.prototype.A=function(a){if("j"==a.type||"k"==a.type)this.l--,tn(this.g),Uk(function(){a.getItem().dispose();GE(this)},0,this)};
function FE(a,b){L.call(this);this.A=a;this.g=b;this.C=HE++}
z(FE,L);var HE=0;h=FE.prototype;h.Ve=!1;h.mn=void 0;h.start=function(){this.dispatchEvent(new CE("i",this));var a=this.j=document.createElement("img");a.onload=w(this.Mt,this);a.onerror=w(this.Kt,this);var b=this.A;b=pc().createObjectURL(b);a.src=b};
h.Mt=function(){Gn(In(IE(this),this.oh,this),this.rs,this)};
h.rs=function(){if(this.g.j()&&this.Ve){var a=lC(this.A);Gn(a,function(b){var c;try{var d=this.mn;this.B=(c=FD(b,this.j.width,this.j.height,d.width,d.height))?c:void 0}catch(e){}this.oh()},this);
In(a,this.oh,this)}else this.oh()};
h.Kt=function(){this.dispatchEvent(new CE("k",this))};
h.oh=function(){this.A=null;this.dispatchEvent(new CE("j",this))};
function IE(a){var b=new Wi(a.j.width,a.j.height);a.g.F()&&!Xi(b,a.g.g())&&(Yi(b,a.g.g()).round(),a.Ve=!0);if(a.g.C()){var c=a.g.B()(b);a.Ve=!(c==b||c&&b&&c.width==b.width&&c.height==b.height);b=c}var d=document.createElement("canvas");d.width=b.width;d.height=b.height;c=(new (a.g.l())).g(a.j,d,a.C);Gn(c,function(){this.l=d.toDataURL("image/jpeg",this.g.A()/100);this.mn=b},a);
In(c,function(){this.Ve=!1},a);
return c}
h.N=function(){var a=this.j,b=a.src;a.onload=a.onerror=null;pc().revokeObjectURL(b);delete this.g;delete this.j;delete this.l;delete this.B};function JE(a,b){this.start=a<b?a:b;this.end=a<b?b:a}
JE.prototype.clone=function(){return new JE(this.start,this.end)};function KE(a){QC.call(this,a);this.request=null;this.M=0;this.l="default";this.g=null;this.K=!1;this.C=null}
z(KE,QC);h=KE.prototype;h.abort=function(){LE(this);this.request&&(this.request.abort(),this.request=null);this.l="default"};
h.Ce=function(a){var b=new Wn;b.set("X-HTTP-Method-Override","PUT");b.set("Content-Type","application/octet-stream");b.set("X-GUploader-No-308","yes");var c=this.getFile().xa,d=this.getFile().cb,e=Math.min(d+104857600,c)-1,f=c?new JE(d,e):null;d<=e&&(0!=d||e!=c-1)&&b.set("Content-Range","bytes "+d+"-"+e+"/"+c);ME(this,a,b,f);this.l="transfer"};
h.resume=function(){if("paused"!=this.l)throw Error("Cannot resume an upload that is not paused");this.g=null;this.yj();this.getFile()};
function NE(a,b,c){LE(a);a.C=Uk(function(){this.C=null;b.call(this)},c,a)}
function LE(a){null!=a.C&&(Vk(a.C),a.C=null)}
h.yj=function(){this.request=new dt;this.j.G(this.request,"readystatechange",this.Ml);this.l="query";this.request.send(this.getFile().wc,"POST","",{"X-HTTP-Method-Override":"PUT","X-GUploader-No-308":"yes","Content-Range":"bytes */"+this.getFile().xa})};
h.Ml=function(){switch(qt(this.request)){case 1:case 2:case 3:case 0:break;case 4:this.Li();break;default:this.ab("exception","Unknown request state")}};
h.Li=function(){var a=this.request.mb();this.F=a;var b=OE(this),c=rt(this.request);switch(b){case 308:a=!1;(b=this.request.getResponseHeader("Range")||null)?((c=/^bytes=(\d+)-(\d+)$/.exec(b))||this.ab("serverinvalidresponse","Illegal Range header: "+b),b=Number(c[2]),b>=this.M&&(this.g=null,a=!0),this.M=b+1,RC(this,b+1)):(this.M=0,RC(this,0));a?this.Ce(this.D):PE(this,w(this.Ce,this,this.D));break;case 200:this.qe(a);break;case 408:case 500:case 502:case 503:case 504:this.K?QE(this):this.ab("networkerror",
c);break;default:this.ab("networkerror",c)}};
function QE(a){switch(a.l){case "transfer":a.yj();break;case "query":PE(a,w(a.yj,a));break;default:a.ab("exception","Illegal state while handling retryable error")}}
function PE(a,b){null==a.g?(a.g=5E3,a.dispatchEvent("backoff")):(a.g*=2,6E4<=a.g&&(a.g=6E4));NE(a,b,a.g)}
h.qe=function(a){KE.J.qe.call(this,a);this.l="default";this.g=null};
h.ab=function(a,b){KE.J.ab.call(this,a,b);this.l="default";this.g=null};
function OE(a){try{var b=a.request.getResponseHeader("X-HTTP-Status-Code-Override")||null}catch(c){b=null}b=parseInt(b,10);return isFinite(b)?b:a.request.getStatus()}
;function RE(a,b){QC.call(this,a);this.g=b}
z(RE,QC);RE.prototype.l=null;RE.prototype.Ce=function(a){var b=new SE;this.l=b;this.j.G(b,"success",function(){this.qe(b.mb())}).G(b,"error",function(){this.ab(qC(b.kc()),b.getLastError())}).G(b,"progress",function(c){RC(this,c.Ba.loaded)});
b.send(a,"POST",this.g,{"Content-Type":this.g.type||"application/octet-stream"})};
RE.prototype.abort=function(){this.l.abort()};
function SE(){dt.call(this);this.U=new qn(this)}
z(SE,dt);SE.prototype.fi=function(){var a=SE.J.fi.call(this);this.U.G(a.upload,"progress",this.dispatchEvent);return a};
SE.prototype.N=function(){SE.J.N.call(this);Th(this.U)};function TE(a,b){L.call(this);this.B=a;this.C=this.l=null;this.j=0;this.F=b||5E6;this.g=null}
z(TE,L);TE.prototype.hash=function(a){this.abort();this.B.reset();this.l=a;this.C=null;this.j=0;this.dispatchEvent("started");UE(this)};
TE.prototype.abort=function(){this.g&&(this.g.abort(),this.g=null);this.l&&(this.l=null,this.dispatchEvent("abort"))};
function UE(a){if(a.j<a.l.size)if(Infinity<=a.j)a.dispatchEvent("throttled");else{a.g=new FileReader;a.g.onload=w(a.D,a);a.g.onerror=w(a.A,a);var b=Math.min(Math.min(Infinity,a.l.size)-a.j,a.F),c=nC(a.l,a.j,a.j+b);c&&c.size==b?a.g.readAsArrayBuffer?a.g.readAsArrayBuffer(c):a.g.readAsBinaryString?a.g.readAsBinaryString(c):a.A():a.A()}else a.C=a.B.digest(),a.l=null,a.dispatchEvent("complete")}
TE.prototype.D=function(){var a=null;this.g.result instanceof Array||"string"===typeof this.g.result?a=this.g.result:p.ArrayBuffer&&p.Uint8Array&&this.g.result instanceof ArrayBuffer&&(a=new Uint8Array(this.g.result));a?(this.B.update(a),this.j+=a.length,this.g=null,this.dispatchEvent("progress"),UE(this)):this.A()};
TE.prototype.A=function(){this.l=this.g=null;this.dispatchEvent("error")};function VE(){this.j=64;this.g=Array(4);this.B=Array(this.j);this.A=this.l=0;this.reset()}
z(VE,hs);VE.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.A=this.l=0};
function WE(a,b,c){c||(c=0);var d=Array(16);if("string"===typeof b)for(var e=0;16>e;++e)d[e]=b.charCodeAt(c++)|b.charCodeAt(c++)<<8|b.charCodeAt(c++)<<16|b.charCodeAt(c++)<<24;else for(e=0;16>e;++e)d[e]=b[c++]|b[c++]<<8|b[c++]<<16|b[c++]<<24;b=a.g[0];c=a.g[1];e=a.g[2];var f=a.g[3];var g=b+(f^c&(e^f))+d[0]+3614090360&4294967295;b=c+(g<<7&4294967295|g>>>25);g=f+(e^b&(c^e))+d[1]+3905402710&4294967295;f=b+(g<<12&4294967295|g>>>20);g=e+(c^f&(b^c))+d[2]+606105819&4294967295;e=f+(g<<17&4294967295|g>>>15);
g=c+(b^e&(f^b))+d[3]+3250441966&4294967295;c=e+(g<<22&4294967295|g>>>10);g=b+(f^c&(e^f))+d[4]+4118548399&4294967295;b=c+(g<<7&4294967295|g>>>25);g=f+(e^b&(c^e))+d[5]+1200080426&4294967295;f=b+(g<<12&4294967295|g>>>20);g=e+(c^f&(b^c))+d[6]+2821735955&4294967295;e=f+(g<<17&4294967295|g>>>15);g=c+(b^e&(f^b))+d[7]+4249261313&4294967295;c=e+(g<<22&4294967295|g>>>10);g=b+(f^c&(e^f))+d[8]+1770035416&4294967295;b=c+(g<<7&4294967295|g>>>25);g=f+(e^b&(c^e))+d[9]+2336552879&4294967295;f=b+(g<<12&4294967295|
g>>>20);g=e+(c^f&(b^c))+d[10]+4294925233&4294967295;e=f+(g<<17&4294967295|g>>>15);g=c+(b^e&(f^b))+d[11]+2304563134&4294967295;c=e+(g<<22&4294967295|g>>>10);g=b+(f^c&(e^f))+d[12]+1804603682&4294967295;b=c+(g<<7&4294967295|g>>>25);g=f+(e^b&(c^e))+d[13]+4254626195&4294967295;f=b+(g<<12&4294967295|g>>>20);g=e+(c^f&(b^c))+d[14]+2792965006&4294967295;e=f+(g<<17&4294967295|g>>>15);g=c+(b^e&(f^b))+d[15]+1236535329&4294967295;c=e+(g<<22&4294967295|g>>>10);g=b+(e^f&(c^e))+d[1]+4129170786&4294967295;b=c+(g<<
5&4294967295|g>>>27);g=f+(c^e&(b^c))+d[6]+3225465664&4294967295;f=b+(g<<9&4294967295|g>>>23);g=e+(b^c&(f^b))+d[11]+643717713&4294967295;e=f+(g<<14&4294967295|g>>>18);g=c+(f^b&(e^f))+d[0]+3921069994&4294967295;c=e+(g<<20&4294967295|g>>>12);g=b+(e^f&(c^e))+d[5]+3593408605&4294967295;b=c+(g<<5&4294967295|g>>>27);g=f+(c^e&(b^c))+d[10]+38016083&4294967295;f=b+(g<<9&4294967295|g>>>23);g=e+(b^c&(f^b))+d[15]+3634488961&4294967295;e=f+(g<<14&4294967295|g>>>18);g=c+(f^b&(e^f))+d[4]+3889429448&4294967295;c=
e+(g<<20&4294967295|g>>>12);g=b+(e^f&(c^e))+d[9]+568446438&4294967295;b=c+(g<<5&4294967295|g>>>27);g=f+(c^e&(b^c))+d[14]+3275163606&4294967295;f=b+(g<<9&4294967295|g>>>23);g=e+(b^c&(f^b))+d[3]+4107603335&4294967295;e=f+(g<<14&4294967295|g>>>18);g=c+(f^b&(e^f))+d[8]+1163531501&4294967295;c=e+(g<<20&4294967295|g>>>12);g=b+(e^f&(c^e))+d[13]+2850285829&4294967295;b=c+(g<<5&4294967295|g>>>27);g=f+(c^e&(b^c))+d[2]+4243563512&4294967295;f=b+(g<<9&4294967295|g>>>23);g=e+(b^c&(f^b))+d[7]+1735328473&4294967295;
e=f+(g<<14&4294967295|g>>>18);g=c+(f^b&(e^f))+d[12]+2368359562&4294967295;c=e+(g<<20&4294967295|g>>>12);g=b+(c^e^f)+d[5]+4294588738&4294967295;b=c+(g<<4&4294967295|g>>>28);g=f+(b^c^e)+d[8]+2272392833&4294967295;f=b+(g<<11&4294967295|g>>>21);g=e+(f^b^c)+d[11]+1839030562&4294967295;e=f+(g<<16&4294967295|g>>>16);g=c+(e^f^b)+d[14]+4259657740&4294967295;c=e+(g<<23&4294967295|g>>>9);g=b+(c^e^f)+d[1]+2763975236&4294967295;b=c+(g<<4&4294967295|g>>>28);g=f+(b^c^e)+d[4]+1272893353&4294967295;f=b+(g<<11&4294967295|
g>>>21);g=e+(f^b^c)+d[7]+4139469664&4294967295;e=f+(g<<16&4294967295|g>>>16);g=c+(e^f^b)+d[10]+3200236656&4294967295;c=e+(g<<23&4294967295|g>>>9);g=b+(c^e^f)+d[13]+681279174&4294967295;b=c+(g<<4&4294967295|g>>>28);g=f+(b^c^e)+d[0]+3936430074&4294967295;f=b+(g<<11&4294967295|g>>>21);g=e+(f^b^c)+d[3]+3572445317&4294967295;e=f+(g<<16&4294967295|g>>>16);g=c+(e^f^b)+d[6]+76029189&4294967295;c=e+(g<<23&4294967295|g>>>9);g=b+(c^e^f)+d[9]+3654602809&4294967295;b=c+(g<<4&4294967295|g>>>28);g=f+(b^c^e)+d[12]+
3873151461&4294967295;f=b+(g<<11&4294967295|g>>>21);g=e+(f^b^c)+d[15]+530742520&4294967295;e=f+(g<<16&4294967295|g>>>16);g=c+(e^f^b)+d[2]+3299628645&4294967295;c=e+(g<<23&4294967295|g>>>9);g=b+(e^(c|~f))+d[0]+4096336452&4294967295;b=c+(g<<6&4294967295|g>>>26);g=f+(c^(b|~e))+d[7]+1126891415&4294967295;f=b+(g<<10&4294967295|g>>>22);g=e+(b^(f|~c))+d[14]+2878612391&4294967295;e=f+(g<<15&4294967295|g>>>17);g=c+(f^(e|~b))+d[5]+4237533241&4294967295;c=e+(g<<21&4294967295|g>>>11);g=b+(e^(c|~f))+d[12]+1700485571&
4294967295;b=c+(g<<6&4294967295|g>>>26);g=f+(c^(b|~e))+d[3]+2399980690&4294967295;f=b+(g<<10&4294967295|g>>>22);g=e+(b^(f|~c))+d[10]+4293915773&4294967295;e=f+(g<<15&4294967295|g>>>17);g=c+(f^(e|~b))+d[1]+2240044497&4294967295;c=e+(g<<21&4294967295|g>>>11);g=b+(e^(c|~f))+d[8]+1873313359&4294967295;b=c+(g<<6&4294967295|g>>>26);g=f+(c^(b|~e))+d[15]+4264355552&4294967295;f=b+(g<<10&4294967295|g>>>22);g=e+(b^(f|~c))+d[6]+2734768916&4294967295;e=f+(g<<15&4294967295|g>>>17);g=c+(f^(e|~b))+d[13]+1309151649&
4294967295;c=e+(g<<21&4294967295|g>>>11);g=b+(e^(c|~f))+d[4]+4149444226&4294967295;b=c+(g<<6&4294967295|g>>>26);g=f+(c^(b|~e))+d[11]+3174756917&4294967295;f=b+(g<<10&4294967295|g>>>22);g=e+(b^(f|~c))+d[2]+718787259&4294967295;e=f+(g<<15&4294967295|g>>>17);g=c+(f^(e|~b))+d[9]+3951481745&4294967295;a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+(e+(g<<21&4294967295|g>>>11))&4294967295;a.g[2]=a.g[2]+e&4294967295;a.g[3]=a.g[3]+f&4294967295}
VE.prototype.update=function(a,b){void 0===b&&(b=a.length);for(var c=b-this.j,d=this.B,e=this.l,f=0;f<b;){if(0==e)for(;f<=c;)WE(this,a,f),f+=this.j;if("string"===typeof a)for(;f<b;){if(d[e++]=a.charCodeAt(f++),e==this.j){WE(this,d);e=0;break}}else for(;f<b;)if(d[e++]=a[f++],e==this.j){WE(this,d);e=0;break}}this.l=e;this.A+=b};
VE.prototype.digest=function(){var a=Array((56>this.l?this.j:2*this.j)-this.l);a[0]=128;for(var b=1;b<a.length-8;++b)a[b]=0;var c=8*this.A;for(b=a.length-8;b<a.length;++b)a[b]=c&255,c/=256;this.update(a);a=Array(16);for(b=c=0;4>b;++b)for(var d=0;32>d;d+=8)a[c++]=this.g[b]>>>d&255;return a};function XE(a,b){KE.call(this,a);this.L=b;this.A=null}
z(XE,KE);function ME(a,b,c,d){a.request=new SE;var e=d?d.start:0;a.j.G(a.request,"readystatechange",a.Ml).G(a.request,"progress",function(g){RC(this,e+g.Ba.loaded)});
var f=a.L;d&&(f=nC(a.L,d.start,d.end+1));a.request.send(b,"POST",f,c)}
XE.prototype.Li=function(){0==OE(this)?this.K?QE(this):this.ab("networkerror","network error"):XE.J.Li.call(this)};
XE.prototype.abort=function(){this.A&&this.A.abort();XE.J.abort.call(this)};
XE.prototype.Ak=function(a,b){var c=new VE;this.A=new TE(c);var d=this;K(this.A,"complete",function(){var e=d.A.C;d.A=null;b(Ye(e))});
this.A.hash(nC(this.L,0,a))};function YE(a,b){nD.call(this);this.j=new Wn;this.K=new Wn;this.L=new du;this.R=Ua(this.Vd,!1);this.M=new DE;Rh(this,this.M);this.U=a||!1;this.F=b||!1}
z(YE,nD);h=YE.prototype;h.Xh=!1;h.De=function(a){YE.J.De.call(this,a);this.j.forEach(function(b){b&&(this.Sc?b.multiple="true":b.removeAttribute("multiple"))},this)};
h.rh=function(a){YE.J.rh.call(this,a);this.j.forEach(function(b){b&&(this.Oe&&this.qf()?b.webkitdirectory="true":b.removeAttribute("webkitdirectory"))},this)};
function ZE(a,b){var c=b.Ba.dataTransfer,d=c&&c.items,e=c&&c.files,f=[],g=[],k=Ek();if(d&&d[0]&&d[0].webkitGetAsEntry)(new AD(d,function(n){for(var t=0;t<n.length;t++){var r=n[t];0!=(r.size||r.fileSize)?a.Sc||1!=f.length?f.push(r):g.push(r):g.push(r)}k.resolve(new $E(f))})).start();
else if("undefined"==typeof FileReader)k.resolve(aF(a,b));else if(e&&e.length)for(c=0;c<e.length;c++){d=e[c];var l=function(){f.length+g.length==e.length&&k.resolve(new $E(f))},m=new kC;
a.g.G(m,["progress","load","error"],function(n){return function(t){var r=t.target;Di(r);"error"==t.type?g.push(n):("progress"==t.type&&r.abort(),0!=(n.size||n.fileSize)?a.Sc||1!=f.length?f.push(n):g.push(n):g.push(n));l()}}(d));
try{m.xb.readAsBinaryString(d)}catch(n){try{m.xb.readAsArrayBuffer(d)}catch(t){g.push(d),l()}}}else k.resolve(new $E([]));return k.g}
function bF(a,b){a.dispatchEvent(new J("filesscanstarted"));ZE(a,b).then(function(c){cF(this,c.g,void 0,!0)},void 0,a)}
function cF(a,b,c,d){if(0==b.length)c||a.dispatchEvent(new J("filesscanfinished"));else{a.Xh&&tD(a);var e=fb(b,function(f){var g=this.Oe&&this.qf()?f.webkitRelativePath||f.relativePath||f.name:f.name||f.fileName;return new zC(g,f.size||f.fileSize,void 0,void 0,f.lastModifiedDate&&f.lastModifiedDate.getTime(),f.type)},a);
A(e,function(f,g){var k=oD(this,f);k.blob=b[g];d&&(k.Og=!0)},a);
a.Oe&&a.qf()&&(e=zD(e));if(!c&&(a.dispatchEvent(new J("filesscanfinished")),!a.dispatchEvent(new JC("filesselected",e))))return;A(e,function(f){sD(this,f)},a);
c||a.dispatchEvent(new JC("allfilesadded",e))}}
h.install=function(a){if(!a)throw Error("overlayElement must be defined");this.dispatchEvent(new NC("uploaderinstalling",this));dF(this,a,this.U,this.F)};
h.Vh=function(a){if(!a)throw Error("overlayElement must be defined");this.dispatchEvent(new NC("uploaderuninstalling",this));this.Df(a)};
h.Uh=function(){return this.re()?"scotty xhr resumable":"scotty xhr non-resumable"};
h.nc=function(){return!0};
h.qf=function(){return void 0!=(this.j.ia()[0]||pj("INPUT",{type:"file"})).webkitdirectory};
h.re=function(){return!!File.prototype.slice||!!File.prototype.webkitSlice&&!uf||!!File.prototype.mozSlice};
h.Wi=function(){return this.re()};
h.jh=function(){Na(this.Rc)&&(this.Rc()||this.j.forEach(function(a,b){var c=this.K.get(b),d=a.parentNode;hm(d,jm(c));c=xm(c);vm(d,c.width,c.height);a.style.height=im(c.height,!0);bm(a,"font-size",c.height+"px")},this))};
h.Si=function(){return sf?Jf("1.9.2"):tf?!(Tf&&wf):C?Jf(10):!1};
h.Te=function(a){var b=a.A||oD(this,a).blob;return this.re()?(a=new XE(a,b),a.K=!0,a):new RE(a,b)};
h.Vd=function(a){this.Xh=a||this.Xh;this.j.ia()[0].click()};
h.Rf=function(a,b){dF(this,a,!0,b)};
h.Df=function(a){var b=Pa(wD(this,a));Na(this.Rc)&&this.Rc()?(this.g.Z(a,this.isElement(a)?"click":"action",this.R),this.L.remove(b)):(a=this.j.get(b))&&Cm(a.parentNode,!1);this.j.remove(b)};
h.Rb=function(a){var b=w(YE.J.Rb,this,a),c=this.O?this.O(a):this.qa;a:{if(void 0===EE){EE=!1;try{if(pC()&&document.createElement("canvas").getContext){pc().revokeObjectURL("");var d=EE=!0;break a}}catch(e){}}d=EE}d&&c&&51200<=a.xa?(d=oD(this,a).blob,c=this.M.start(d,c),this.g.G(c,["i","j","k"],w(this.aq,this,a,b))):b()};
h.N=function(){YE.J.N.call(this);Vk(this.S)};
h.Yk=function(){return this.re()?1:0};
h.Rc=function(){return tf||C&&Jf(10)||sf&&Jf(12)};
function eF(a,b,c){b=M(b);a.K.set(Pa(b),b);var d=null,e=Zi(b);if(Na(a.Rc)&&a.Rc()&&!a.j.ia()[0])d=e.W("INPUT",{type:"file",style:"height:0;visibility:hidden;position:absolute"}),e.pf(d,b);else{P(b,"uploader-overlay-visible");var f=xm(b);d=e.W("INPUT",{type:"file",style:"opacity:0;font-size:"+f.height+"px;height:"+f.height+"px;position:absolute;right:0px;top:0px",tabIndex:c?-1:0});c=e.W("DIV",{style:"overflow:hidden;width:"+f.width+"px;height:"+f.height+"px"},d);e.pf(c,b);bm(c,"position","absolute");
bm(b.parentNode,"position","relative");hm(c,jm(b))}d&&(a.j.set(Pa(b),d),a.g.G(d,"change",function(){this.dispatchEvent(new J("filesscanstarted"));cF(this,d.files);d.value=""}))}
function aF(a,b){var c=b.Ba.dataTransfer;c=c&&c.files;var d=[],e=[];if(c)for(var f=0;f<c.length;f++){var g=c[f];0!=(g.size||g.fileSize)&&(""==g.type?/\.flv$/.test(g.name||g.fileName):1)&&(a.Sc||0==d.length)?d.push(g):e.push(g)}return new $E(d)}
function dF(a,b,c,d){var e=wD(a,b),f=Pa(e);if(Na(a.Rc)&&a.Rc()&&(!a.L.contains(f)&&c&&(a.g.G(b,a.isElement(b)?"click":"action",a.R),a.L.add(f)),a.j.ia()[0]))return;(b=a.j.get(f))?Cm(b.parentNode,!0):a.S=Uk(function(){eF(this,e,d);this.De(this.Sc);this.rh(this.Oe&&this.qf());this.dispatchEvent(new NC("uploaderready",this))},void 0,a)}
h.aq=function(a,b,c){var d=c.getItem();switch(c.type){case "i":this.dispatchEvent(new KC("filedownsamplingstarted",a));break;case "j":case "k":if("j"==c.type){if(d.Ve){a:{d.g.j();if(d.l&&"data:"==d.l.substr(0,5)){var e=d.l.indexOf(",");if(0<e){c=d.l.substr(5,e-5).split(";");e=d.l.substr(e+1);"base64"===c[c.length-1]&&(e=window.atob(e));try{b:{c=e;var f=d.B,g=e=0,k;if(f){for(k=0;k<c.length;){var l=c.charCodeAt(k++);if(255!=l)break;l=c.charCodeAt(k++);if(216==l)e=g=k;else if(224==l)e=g=k+=((c.charCodeAt(k)&
255)<<8)+(c.charCodeAt(k+1)&255);else{225==l&&(e=k-2,g=k+((c.charCodeAt(k)&255)<<8)+(c.charCodeAt(k+1)&255));break}}if(0==e){var m=null;break b}}var n=f?f.length:0,t=new Uint8Array(c.length+n);k=0;var r;for(r=0;r<e;r++,k++)t[k]=c.charCodeAt(r)&255;for(r=0;r<n;r++,k++)t[k]=f[r]&255;for(r=g;r<c.length;r++,k++)t[k]=c.charCodeAt(r)&255;m=qc(t.buffer)}break a}catch(v){}}}m=null}if(a.A=m)a.xa=m.size}this.dispatchEvent(new KC("filedownsamplingcompleted",a))}this.g.Z(d,["i","j","k"]);b()}};
function $E(a){this.g=a}
;function fF(a,b){this.identifier=a||"";this.l=[];this.K=b||"";this.B=new Wl;w(this.eo,this);this.L=new jE(this.K);this.F={};1!=this.D&&(this.D=!0,sl());this.A="1"==gF(this.identifier,"enabled");p.setInterval(w(this.Rv,this),7500)}
fF.prototype.g=null;fF.prototype.C=!1;var hF=fF.prototype.D=!1;h=fF.prototype;h.qk=null;h.bj=x();h.init=function(){this.A&&iF(this)};
h.isEnabled=function(){return this.A};
h.Aa=function(a){(this.A=a)&&iF(this);jF(this,"enabled",a?"1":"0")};
function kF(a){return!!a.g&&!a.g.closed}
h.clear=function(){this.B.clear();kF(this)&&this.Pj()};
h.eo=function(a){if(!this.F[a.j()]){var b=this.L;if(a){switch(a.B().value){case jl.value:var c="dbg-sh";break;case kl.value:c="dbg-sev";break;case ll.value:c="dbg-w";break;case ml.value:c="dbg-i";break;default:c="dbg-f"}var d=[];d.push(b.j," ");d.push("[",gE(a),"] ");d.push("[",iE(a,b.l.get()),"s] ");d.push("[",a.j(),"] ");d=Kd(d.join(""));var e=Ud;b.g&&a.g()&&(e=Vd(Xd,kE(a.g())));a=Kd(a.A());c=Pd("span",{"class":c},Vd(a,e));c=Vd(d,c,Xd)}else c=Ud;this.A?(iF(this),this.B.add(c),lF(this,c)):this.B.add(c)}};
function lF(a,b){a.l.push(b);p.clearTimeout(a.qk);750<x()-a.bj?a.Oj():a.qk=p.setTimeout(w(a.Oj,a),250)}
h.Oj=function(){this.bj=x();if(kF(this)){var a=this.g.document.body;a=a&&100>=a.scrollHeight-(a.scrollTop+a.clientHeight);var b=Vd(this.l);this.g.document.write(Hd(b));this.l.length=0;a&&this.g.scrollTo(0,1E6)}};
function mF(a){for(var b=a.B.ia(),c=0;c<b.length;c++)lF(a,b[c])}
function iF(a){if(!kF(a)&&!a.C){var b=gF(a.identifier,"dbg","0,0,800,500").split(","),c=Number(b[0]),d=Number(b[1]),e=Number(b[2]);b=Number(b[3]);a.C=!0;var f=window;var g=C?a.identifier.replace(/[\s\-\.,]/g,"_"):a.identifier;a.g=fe("",f,g,"width="+e+",height="+b+",toolbar=no,resizable=yes,scrollbars=yes,left="+c+",top="+d+",status=no,screenx="+c+",screeny="+d);a.g||hF||(alert("Logger popup was blocked"),hF=!0);a.C=!1;a.g&&a.Pj()}}
h.mg=function(){return vd(oc("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}"))};
h.Pj=function(){if(kF(this)){this.g.document.open();var a=Pd("div",{"class":"dbg-ev",style:oc("text-align:center;")},Vd("LOGGING",Xd,Pd("small",{},"Logger: "+this.identifier)));a=Vd(Rd(this.mg()),Pd("hr"),a,Pd("hr"));lF(this,a);mF(this)}};
function jF(a,b,c){a=(b+a.identifier).replace(/[;=\s]/g,"_");document.cookie=a+"="+encodeURIComponent(c)+";path=/;expires="+(new Date(x()+2592E6)).toUTCString()}
function gF(a,b,c){a=(b+a).replace(/[;=\s]/g,"_");b=String(document.cookie);var d=b.indexOf(a+"=");return-1!=d?(c=b.indexOf(";",d),decodeURIComponent(b.substring(d+a.length+1,-1==c?b.length:c))):c||""}
h.Rv=function(){kF(this)&&jF(this,"dbg",(this.g.screenX||this.g.screenLeft||0)+","+(this.g.screenY||this.g.screenTop||0)+","+(this.g.outerWidth||800)+","+(this.g.outerHeight||500))};
h.removeFilter=function(a){delete this.F[a]};function nF(a,b){if(oF){var c=pF(),d;for(d in c){c=d.replace("fancywindow.sel.","");tl(c);c=il;var e=window.localStorage.getItem(d).toString();c&&c.toString()==e||pl()}}fF.call(this,a,b);this.j=null}
z(nF,fF);var qF;a:{try{qF=!!window.localStorage.getItem;break a}catch(a){}qF=!1}var oF=qF;h=nF.prototype;h.Oj=function(){this.bj=x();if(kF(this)){for(var a=this.j.H("log"),b=100>=a.scrollHeight-(a.scrollTop+a.offsetHeight),c=0;c<this.l.length;c++){var d=this.j.W("DIV","logmsg");ae(d,this.l[c]);a.appendChild(d)}this.l.length=0;this.Wm();b&&(a.scrollTop=a.scrollHeight)}};
h.Pj=function(){if(kF(this)){var a=this.g.document;a.open();var b=Pd("head",{},Vd(Pd("title",{},"Logging: "+this.identifier),Rd(this.mg())));var c=Pd("body",{},Vd(Pd("div",{id:"log",style:oc("overflow:auto")}),Pd("div",{id:"head"},Vd(Pd("p",{},Pd("b",{},"Logging: "+this.identifier)),Pd("p",{},"LOGGING"),Pd("span",{id:"clearbutton"},"clear"),Pd("span",{id:"exitbutton"},"exit"),Pd("span",{id:"openbutton"},"options"))),Pd("div",{id:"options"},Vd(Pd("big",{},Pd("b",{},"Options:")),Pd("div",{id:"optionsarea"}),
Pd("span",{id:"closebutton"},"save and close")))));b=Pd("html",{},Vd(b,c));a.write(Hd(b));a.close();(C?a.body:this.g).onresize=w(this.Wm,this);this.j=new $i(a);this.j.H("openbutton").onclick=w(this.zv,this);this.j.H("closebutton").onclick=w(this.xo,this);this.j.H("clearbutton").onclick=w(this.clear,this);this.j.H("exitbutton").onclick=w(this.Mo,this);mF(this)}};
h.zv=function(){var a=this.j.H("optionsarea");ae(a,Ud);for(var b=rF(),c=this.j,d=0;d<b.length;d++){var e=b[d],f=il?il.name:"INHERIT";e=c.W("DIV",{},sF(this,"sel"+e.getName(),f),c.W("SPAN",{},e.getName()||"(root)"));a.appendChild(e)}this.j.H("options").style.display="block";return!1};
function sF(a,b,c){a=a.j;b=a.W("SELECT",{id:b});for(var d=0;d<nl.length;d++){var e=nl[d],f=a.W("OPTION",{},e.name);c==e.name&&(f.selected=!0);b.appendChild(f)}b.appendChild(a.W("OPTION",{selected:"INHERIT"==c},"INHERIT"));return b}
h.xo=function(){this.j.H("options").style.display="none";for(var a=rF(),b=this.j,c=0;c<a.length;c++){var d=b.H("sel"+a[c].getName());"INHERIT"!=d.options[d.selectedIndex].text&&pl()}if(oF)for(a=rF(),b=pF(),c=0;c<a.length;c++){d="fancywindow.sel."+a[c].getName();var e=il;d in b?e?window.localStorage.getItem(d)!=e.name&&window.localStorage.setItem(d,e.name):window.localStorage.removeItem(d):e&&window.localStorage.setItem(d,e.name)}return!1};
h.Wm=function(){var a=this.j,b=a.H("log"),c=a.H("head");b.style.top=c.offsetHeight+"px";b.style.height=a.g.body.offsetHeight-c.offsetHeight-(C?4:0)+"px"};
h.Mo=function(){this.Aa(!1);this.g&&this.g.close()};
h.mg=function(){var a=nF.J.mg.call(this),b=vd(oc("html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"));
return rd(a,b)};
function pF(){for(var a={},b=0,c=window.localStorage.length;b<c;b++){var d=window.localStorage.key(b);null!=d&&Fc(d,"fancywindow.sel.")&&(a[d]=!0)}return a}
function rF(){var a=Sb(ql);zb(a,function(b,c){return Ab(b.getName(),c.getName())});
return a}
;function tF(a){L.call(this);if(Ic(null==a?"":String(a)))throw Error("sessionServerUrl can't be empty");this.C=a;this.j=[];this.g=null;this.l=void 0;0<=xd.indexOf("Firefox/2.")&&yo(window.location,a);!ct(at).upload||sf&&!Jf("1.9.2")||this.j.push("XHR");RD&&(!xf&&0<=Tc(SD,"10")||0<=Tc(SD,"11"))&&this.j.push("FLASH");this.j.push("HTML_FORM")}
z(tF,L);function uF(a,b){if(!b)throw Error("allowedMechanisms must be defined");Array.isArray(b)||(b=[b]);if(0==b.length)throw Error("allowedMechanisms must not be empty");A(b,function(d){if(!Vb(vF,d))throw Error("Unknown upload mechanism: "+d);},a);
var c=eb(b,function(d){return mb(this.j,d)},a);
if(0==c.length)throw new wF("No allowed mechanism is currently available");a.j=c}
function xF(a,b){var c=null,d=a.j[0];switch(d){case "XHR":a.g=new YE(a.P,a.F);c=a.O;break;case "FLASH":a.D&&(c=a.D,c instanceof tc?UD=c:(c=Yc($c(c)||cd),UD=Pl(c)));a.g=new TD;a.B&&(a.g.S=a.B);a.g.hk=!1;c=a.R;break;case "HTML_FORM":a.g=new AE(a.F);c=a.L;break;default:a.g=null}if(a.g){if(a.g.Jb(a),c=M(c),b&&(a.l=b,K(a.g,["appletfailedtoload","uploaderwithoutpermission","applettimedout","appletfailedtoinitialize"],w(a.K,a,d,c)),K(a.g,"uploaderready",w(a.M,a,d,c))),a.g.install(c),a.g.vc=a.C,"boolean"===
typeof a.Pe&&(a.g.Pe=a.Pe),a.A&&(d=a.g,c=a.A,d.Pe&&d.Wi())){var e=$B("google-upload-recovery");e&&(d.A=new iD(e,c))}}else b&&b(null)}
tF.prototype.M=function(a,b,c){c.A==this.g&&this.l&&(this.l(this.g),this.l=void 0)};
tF.prototype.K=function(a,b,c){c.A==this.g&&(this.g.Vh(b),qb(this.j,a),xF(this,this.l))};
var vF={ox:"FLASH",wx:"HTML_FORM",by:"XHR"};function wF(){}
z(wF,Error);var yF=new nF("apps.uploader");yF.Aa(!1);q("apps.uploader.showDebugWindow",function(){yF.Aa(!0)},void 0);function zF(){this.j=new qn(this);zF.prototype.addInput=zF.prototype.ek;zF.prototype.removeInput=zF.prototype.Gv;zF.prototype.setTarget=zF.prototype.Ee}
zF.prototype.g=null;function AF(a,b){var c=new zF;c.create(a,b);return c}
p._EmailAc_create=AF;h=zF.prototype;h.create=function(a,b){var c=M(a);this.g=b.contactStoreConfig?sy(b.contactStoreConfig,b.acCssName||"ac-renderer",b.maxMatches||15,b.inputHandler,c.ownerDocument.body,b.filter,b.rightAlign):qy(b.serverBase,b.acCssName||"ac-renderer",b.maxMatches||15,b.inputHandler,c.ownerDocument.body,b.filter,b.rightAlign,b.acd,b.onAuthError,b.tg);"groups"in b&&(this.g.Ul=b.groups);var d=b.onComplete;Na(d)&&this.j.G(this.g,"update",function(e){e.row&&d.call(p,e.target.ng())});
this.ek(c)};
h.dispose=function(){Uh(this.g,this.j)};
h.Ee=function(a){this.g.Ee(a)};
h.ek=function(a){if(Array.isArray(a))for(var b=0;b<a.length;b++)this.g.Ed.Fg(a[b]);else this.g.Ed.Fg(a)};
h.Gv=function(a){if(Array.isArray(a))for(var b=0;b<a.length;b++)this.g.Ed.nl(a[b]);else this.g.Ed.nl(a)};function BF(a,b,c,d,e,f,g){this.M="string"===typeof a?new ph(a):a;this.O=!!c;this.F=d;this.L=e;this.P=!!f;this.D=g;this.A={};this.g={};this.C={};this.l={};this.j=null}
function CF(a,b){return new BF("/",a,void 0,void 0,void 0,void 0,b)}
BF.prototype.K=function(){};
function DF(a){this.params=a;this.uf=new Set;this.Bc=null}
DF.prototype.Ee=function(a){this.Bc&&this.Bc.setTarget(a)};
h=BF.prototype;h.Mg=function(a){if(this.B)throw Error("Email autcomplete was already initialized. To attach it to an input field, please use attachAutocomplete()");this.B=!0;this.A=a||{};for(var b in this.g)EF(this,this.g[b]);this.j&&(a=Pa(this.j),(a=this.l[a])&&a.Ee(this.j));for(b in this.g){a=this.g[b];a=[].concat(ka(a.uf.values()));for(var c=1;c<a.length;c++)Bi(a[c],"focus",this.qj,!1,this)}};
function EF(a,b){var c=b.params;c.serverBase=a.M;c.onComplete=w(a.Ts,a);c.ua=a.O;c.acd=a.F;c.onAuthError=a.L;c.tg=a.P;c.contactStoreConfig=a.D;for(var d in a.A)c[d]=a.A[d];d=[].concat(ka(b.uf.values()));b.Bc=AF(d[0],c);for(c=1;c<d.length;c++)b.Bc.addInput(d[c]);b.uf.clear()}
h.Yh=function(a,b,c){a=M(a);var d=b||{};b=Pa(a);this.C[b]=c;c="";for(var e in d)c+=e+"="+d[e]+";";e=this.g[c];e||(e=new DF(d),this.g[c]=e);d=e;c=a;d.Bc?d.Bc.addInput(c):d.uf.add(c);this.l[b]=e;e.Bc||(this.B?EF(this,e):K(a,"focus",this.qj,!1,this))};
h.qj=function(a){this.j=a.target;this.B||this.Mg()};
h.Ts=function(a){var b=this.C[Pa(a)];b&&b(a)};
h.Eo=function(a){a=M(a);Bi(a,"focus",this.qj,!1,this);var b=Pa(a);delete this.C[b];var c=this.l[b];c&&(c.Bc?c.Bc.removeInput(a):c.uf["delete"](a),delete this.l[b])};
h.oo=function(a,b){this.Mg(b);this.Yh(a,b)};
q("goog.NewContactTools",BF,void 0);q("goog.NewContactTools.create",CF,void 0);BF.prototype.setLocale=BF.prototype.K;BF.prototype.attachAutocompleteTo=BF.prototype.oo;BF.prototype.initAutocomplete=BF.prototype.Mg;BF.prototype.attachAutocomplete=BF.prototype.Yh;BF.prototype.detachAutocomplete=BF.prototype.Eo;function FF(a){F(this,a,0,-1,GF,null)}
z(FF,D);function HF(a){F(this,a,0,-1,null,null)}
z(HF,D);var GF=[1];function IF(a,b){var c=yg(a,HF,1);0<c.length&&hg(b,1,c,JF)}
function JF(a,b){var c=qg(a,1);if(null!=c&&null!=c){bg(b,1,1);var d=b.g;cf(c);hf(d,$e);hf(d,af)}c=qg(a,2);null!=c&&null!=c&&null!=c&&(bg(b,2,0),d=b.g,bf(c),ef(d))}
HF.prototype.ha=function(){return qg(this,2)};
FF.prototype.Nh=function(a){Dg(this,1,a,HF)};function KF(a){F(this,a,0,-1,LF,null)}
z(KF,D);function MF(a){F(this,a,0,-1,null,NF)}
z(MF,D);function OF(a){F(this,a,0,-1,null,null)}
z(OF,D);function PF(a){F(this,a,0,-1,null,null)}
z(PF,D);function QF(a){F(this,a,0,-1,RF,null)}
z(QF,D);function SF(a){F(this,a,0,-1,null,TF)}
z(SF,D);function UF(a){F(this,a,0,-1,null,VF)}
z(UF,D);var LF=[3,6,4],NF=[[1,2]];function WF(a,b){var c=xg(a,OF,1);null!=c&&gg(b,1,c,XF);c=xg(a,PF,2);null!=c&&gg(b,2,c,YF)}
function XF(a,b){var c=qg(a,1);null!=c&&fg(b,1,c);c=qg(a,2);null!=c&&fg(b,2,c);c=qg(a,3);null!=c&&eg(b,3,c)}
function YF(a,b){var c=qg(a,1);null!=c&&fg(b,1,c);c=qg(a,2);null!=c&&fg(b,2,c);c=qg(a,3);null!=c&&null!=c&&null!=c&&(bg(b,3,0),gf(b.g,c));c=qg(a,4);null!=c&&eg(b,4,c)}
var RF=[1];function ZF(a,b){var c=yg(a,SF,1);0<c.length&&hg(b,1,c,$F);c=xg(a,UF,2);null!=c&&gg(b,2,c,aG)}
var TF=[[1,2,3]];function $F(a,b){var c=qg(a,1);null!=c&&fg(b,1,c);c=qg(a,2);null!=c&&null!=c&&null!=c&&(bg(b,2,0),gf(b.g,c));c=qg(a,3);null!=c&&eg(b,3,c)}
var VF=[[1,2,3]];function aG(a,b){var c=qg(a,1);if(null!=c&&null!=c&&null!=c){bg(b,1,0);var d=b.g;bf(c);ef(d)}c=qg(a,2);null!=c&&null!=c&&(bg(b,2,1),d=b.g,cf(c),hf(d,$e),hf(d,af));c=xg(a,FF,3);null!=c&&gg(b,3,c,IF)}
;function bG(){this.j=[];this.g=-1}
bG.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.j[a]!=b&&(this.j[a]=b,this.g=-1)};
bG.prototype.get=function(a){return!!this.j[a]};
function cG(a){-1==a.g&&(a.g=gb(a.j,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.g}
;function dG(a,b){I.call(this);this.l=this.j=0;this.B=a;this.A=b;this.g=new tt(w(this.lp,this),0,this)}
z(dG,I);h=dG.prototype;h.N=function(){this.g.dispose();delete this.B;delete this.A;dG.J.N.call(this)};
h.start=function(a,b){this.stop();var c=b||0;this.j=Math.max(a||0,0);this.l=0>c?-1:x()+c;this.g.start(0>c?this.j:Math.min(this.j,c))};
h.stop=function(){this.g.stop()};
h.isActive=function(){return this.g.isActive()};
h.onSuccess=function(){};
h.onFailure=function(){};
h.lp=function(){if(this.B.call(this.A))this.onSuccess();else if(0>this.l)this.g.start(this.j);else{var a=this.l-x();if(0>=a)this.onFailure();else this.g.start(Math.min(this.j,a))}};function eG(){var a=fG;this.j=gG;this.g=a}
var gG=new Hl(0,0,1),fG=new Hl(9999,11,31);eG.prototype.contains=function(a){return a.valueOf()>=this.j.valueOf()&&a.valueOf()<=this.g.valueOf()};function hG(a){var b=new Wn;iG(a,b,jG);return b}
function kG(a){var b=[];iG(a,b,lG);return b.join("&")}
function iG(a,b,c){for(var d=a.elements,e,f=0;e=d.item(f);f++)if(e.form==a&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=mG(e);if(null!=e)for(var k,l=0;k=e[l];l++)c(b,g,k);break;default:k=mG(e),null!=k&&c(b,g,k)}}d=a.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==a&&"image"==e.type.toLowerCase()&&(g=e.name,c(b,g,e.value),c(b,g+".x","0"),c(b,g+".y","0"))}
function jG(a,b,c){var d=a.get(b);d||(d=[],a.set(b,d));d.push(c)}
function lG(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function nG(a,b){if("FORM"==a.tagName)for(var c=a.elements,d=0;a=c.item(d);d++)nG(a,b);else 1==b&&a.blur(),a.disabled=b}
function mG(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
function oG(a,b){var c=a.type;switch("string"===typeof c&&c.toLowerCase()){case "checkbox":case "radio":a.checked=b;break;case "select-one":a.selectedIndex=-1;if("string"===typeof b)for(var d=0;c=a.options[d];d++)if(c.value==b){c.selected=!0;break}break;case "select-multiple":c=b;"string"===typeof c&&(c=[c]);for(var e=0;d=a.options[e];e++)if(d.selected=!1,c)for(var f,g=0;f=c[g];g++)d.value==f&&(d.selected=!0);break;default:a.value=null!=b?b:""}}
;function pG(a,b){L.call(this);this.g=new qn(this);var c=a;b&&(c=aj(a));this.g.G(c,"dragenter",this.jt);c!=a&&this.g.G(c,"dragover",this.kt);this.g.G(a,"dragover",this.qt);this.g.G(a,"drop",this.rt)}
z(pG,L);h=pG.prototype;h.We=!1;h.N=function(){pG.J.N.call(this);this.g.dispose()};
h.jt=function(a){var b=a.Ba.dataTransfer;(this.We=!(!b||!(b.types&&(mb(b.types,"Files")||mb(b.types,"public.file-url"))||b.files&&0<b.files.length)))&&a.preventDefault()};
h.kt=function(a){this.We&&(a.preventDefault(),a.Ba.dataTransfer.dropEffect="none")};
h.qt=function(a){if(this.We){a.preventDefault();a.stopPropagation();a=a.Ba.dataTransfer;try{a.effectAllowed="all"}catch(b){}a.dropEffect="copy"}};
h.rt=function(a){this.We&&(a.preventDefault(),a.stopPropagation(),a=new ei(a.Ba),a.type="drop",this.dispatchEvent(a))};function qG(a){L.call(this);this.ea=null;this.g=a;a=C||qf||tf&&!Jf("531")&&"TEXTAREA"==a.tagName;this.j=new qn(this);this.j.G(this.g,a?["keydown","paste","cut","drop","input"]:"input",this)}
z(qG,L);qG.prototype.handleEvent=function(a){if("input"==a.type)C&&Jf(10)&&0==a.keyCode&&0==a.charCode||(rG(this),this.dispatchEvent(sG(a)));else if("keydown"!=a.type||tq(a)){var b="keydown"==a.type?this.g.value:null;C&&229==a.keyCode&&(b=null);var c=sG(a);rG(this);this.ea=Uk(function(){this.ea=null;this.g.value!=b&&this.dispatchEvent(c)},0,this)}};
function rG(a){null!=a.ea&&(Vk(a.ea),a.ea=null)}
function sG(a){a=new ei(a.Ba);a.type="input";return a}
qG.prototype.N=function(){qG.J.N.call(this);this.j.dispose();rG(this);delete this.g};function tG(a){L.call(this);this.g=a;this.j=this.g.value;this.l=new qn(this);this.B=x();uG?this.l.G(a,"paste",this.je):this.l.G(a,["keydown","blur","focus","mouseover","input"],this.Jp);this.A=new dG(w(this.vk,this))}
z(tG,L);var uG=tf||C||qf||sf&&Jf("1.9");h=tG.prototype;h.Nc="init";h.N=function(){tG.J.N.call(this);this.l.dispose();this.l=null;this.A.dispose();this.A=null};
h.vk=function(){if(this.j==this.g.value)return!1;this.dispatchEvent("after_paste");return!0};
h.je=function(a){a=new ei(a.Ba);a.type="paste";this.dispatchEvent(a);Uk(function(){this.vk()||this.A.start(50,200)},0,this)};
h.Jp=function(a){switch(this.Nc){case "init":switch(a.type){case "blur":this.Nc="init";break;case "focus":this.Nc="focused";break;case "mouseover":this.Nc="init",this.g.value!=this.j&&this.je(a)}break;case "focused":switch(a.type){case "input":var b=this.B+400;(x()>b||"focus"==this.C)&&this.je(a);break;case "blur":this.Nc="init";break;case "keydown":if(vf&&pf&&0==a.keyCode||vf&&pf&&17==a.keyCode)break;this.Nc="typing";break;case "mouseover":this.g.value!=this.j&&this.je(a)}break;case "typing":switch(a.type){case "input":this.Nc=
"focused";break;case "blur":this.Nc="init";break;case "keydown":(a.ctrlKey&&86==a.keyCode||a.shiftKey&&45==a.keyCode||a.metaKey&&86==a.keyCode)&&this.je(a);break;case "mouseover":this.g.value!=this.j&&this.je(a)}}this.B=x();this.j=this.g.value;this.C=a.type};function vG(a,b){this.g=b||"";this.address=a||""}
var wG=/"/g,xG=/\\"/g,yG=/\\/g,zG=/\\\\/g,AG=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;vG.prototype.getName=function(){return this.g};
vG.prototype.toString=function(){var a=this.getName();a=a.replace(wG,"");var b;a:{for(b=0;13>b;b++)if(Sc(a,'()<>@:\\".[],;'[b])){b=!0;break a}b=!1}b&&(a='"'+a.replace(yG,"\\\\")+'"');return""==a?this.address:""==this.address?a:a+" <"+this.address+">"};
vG.prototype.isValid=function(){return AG.test(this.address)};
function BG(a,b){if('"'!=a.charAt(b))return!1;for(var c=0,d=b-1;0<=d&&"\\"==a.charAt(d);d--)c++;return 0!=c%2}
;function CG(a,b){var c=Array.prototype.slice.call(arguments),d=c.shift();if("undefined"==typeof d)throw Error("[goog.string.format] Template required");return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,function(e,f,g,k,l,m,n,t){if("%"==m)return"%";var r=c.shift();if("undefined"==typeof r)throw Error("[goog.string.format] Not enough arguments");arguments[0]=r;return DG[m].apply(null,arguments)})}
var DG={s:function(a,b,c){return isNaN(c)||""==c||a.length>=Number(c)?a:a=-1<b.indexOf("-",0)?a+re(" ",Number(c)-a.length):re(" ",Number(c)-a.length)+a},
f:function(a,b,c,d,e){d=a.toString();isNaN(e)||""==e||(d=parseFloat(a).toFixed(e));var f=0>Number(a)?"-":0<=b.indexOf("+")?"+":0<=b.indexOf(" ")?" ":"";0<=Number(a)&&(d=f+d);if(isNaN(c)||d.length>=Number(c))return d;d=isNaN(e)?Math.abs(Number(a)).toString():Math.abs(Number(a)).toFixed(e);a=Number(c)-d.length-f.length;return d=0<=b.indexOf("-",0)?f+d+re(" ",a):f+re(0<=b.indexOf("0",0)?"0":" ",a)+d},
d:function(a,b,c,d,e,f,g,k){return DG.f(parseInt(a,10),b,c,d,0,f,g,k)}};
DG.i=DG.d;DG.u=DG.d;function EG(){this.g=new FG;this.j=new er}
EG.prototype.format=function(a){a:if(null==a)a=[];else{if("string"===typeof a){if(Ic(a)){a=[];break a}a=JSON.parse(a)}var b=[];GG(this,a,b,0);a=b}b="";for(var c=0;c<a.length;c++){var d=a[c];b+=d instanceof Fd?Hd(d).toString():d}return b};
function GG(a,b,c,d){var e=La(b);switch(e){case "null":case "boolean":case "number":case "string":a=dr(a.j,b);c.push(HG(a,e));break;case "array":c.push("[");for(e=0;e<b.length;e++)0<e&&c.push(","),c.push("\n"),c.push(re(a.g.space,d+2)),GG(a,b[e],c,d+2);0<e&&(c.push("\n"),c.push(re(a.g.space,d)));c.push("]");break;case "object":c.push("{");e=0;for(var f in b)b.hasOwnProperty(f)&&(0<e&&c.push(","),c.push("\n"),c.push(re(a.g.space,d+2)),c.push(""+dr(a.j,f)),c.push(":",a.g.space),GG(a,b[f],c,d+2),e++);
0<e&&(c.push("\n"),c.push(re(a.g.space,d)));c.push("}");break;default:a=dr(a.j,""),c.push(HG(a,"unknown"))}}
function FG(){}
FG.prototype.space=" ";function HG(a,b){return CG("",b)+a+""}
;function IG(){Bt.call(this);this.j=[]}
z(IG,Bt);IG.prototype.add=function(a){mb(this.j,a)||(this.j.push(a),K(a,"finish",this.C,!1,this))};
IG.prototype.remove=function(a){qb(this.j,a)&&Bi(a,"finish",this.C,!1,this)};
IG.prototype.N=function(){A(this.j,function(a){a.dispose()});
this.j.length=0;IG.J.N.call(this)};
function JG(){IG.call(this);this.l=0}
z(JG,IG);JG.prototype.play=function(a){if(0==this.j.length)return!1;if(a||0==this.g)this.l=0,this.B();else if(1==this.g)return!1;this.jb("play");-1==this.g&&this.jb("resume");var b=-1==this.g&&!a;this.startTime=x();this.endTime=null;this.g=1;A(this.j,function(c){b&&-1!=c.g||c.play(a)});
return!0};
JG.prototype.stop=function(a){A(this.j,function(b){0==b.g||b.stop(a)});
this.g=0;this.endTime=x();this.jb("stop");this.A()};
JG.prototype.C=function(){this.l++;this.l==this.j.length&&(this.endTime=x(),this.g=0,this.Fa(),this.A())};
function KG(){IG.call(this);this.l=0}
z(KG,IG);KG.prototype.play=function(a){if(0==this.j.length)return!1;if(a||0==this.g)this.l<this.j.length&&0!=this.j[this.l].g&&this.j[this.l].stop(!1),this.l=0,this.B();else if(1==this.g)return!1;this.jb("play");-1==this.g&&this.jb("resume");this.startTime=x();this.endTime=null;this.g=1;this.j[this.l].play(a);return!0};
KG.prototype.stop=function(a){this.g=0;this.endTime=x();if(a)for(a=this.l;a<this.j.length;++a){var b=this.j[a];0==b.g&&b.play();0==b.g||b.stop(!0)}else this.l<this.j.length&&this.j[this.l].stop(!1);this.jb("stop");this.A()};
KG.prototype.C=function(){1==this.g&&(this.l++,this.l<this.j.length?this.j[this.l].play():(this.endTime=x(),this.g=0,this.Fa(),this.A()))};function LG(){}
function MG(a){if("number"==typeof a){var b=new LG;b.j=a;var c=a;if(0==c)c="Etc/GMT";else{var d=["Etc/GMT",0>c?"-":"+"];c=Math.abs(c);d.push(Math.floor(c/60)%100);c%=60;0!=c&&d.push(":",se(c,2));c=d.join("")}b.A=c;c=a;0==c?c="UTC":(d=["UTC",0>c?"+":"-"],c=Math.abs(c),d.push(Math.floor(c/60)%100),c%=60,0!=c&&d.push(":",c),c=d.join(""));a=NG(a);b.B=[c,c];b.g={Ux:a,ck:a};b.l=[];return b}b=new LG;b.A=a.id;b.j=-a.std_offset;b.B=a.names;b.g=a.names_ext;b.l=a.transitions;return b}
function NG(a){var b=["GMT"];b.push(0>=a?"+":"-");a=Math.abs(a);b.push(se(Math.floor(a/60)%100,2),":",se(a%60,2));return b.join("")}
function OG(a,b){for(var c=Date.UTC(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate(),b.getUTCHours(),b.getUTCMinutes())/36E5,d=0;d<a.l.length&&c>=a.l[d];)d+=2;return 0==d?0:a.l[d-1]}
;function PG(a,b){this.j=[];this.g=b||Al;"number"==typeof a?QG(this,a):RG(this,a)}
var SG=[/^'(?:[^']|'')*('|$)/,/^(?:G+|y+|Y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,/^[^'GyYMkSEahKHcLQdmsvVwzZ]+/];function TG(a){return a.getHours?a.getHours():0}
function RG(a,b){for(UG&&(b=b.replace(/\u200f/g,""));b;){for(var c=b,d=0;d<SG.length;++d){var e=b.match(SG[d]);if(e){var f=e[0];b=b.substring(f.length);0==d&&("''"==f?f="'":(f=f.substring(1,"'"==e[1]?f.length-1:f.length),f=f.replace(/''/g,"'")));a.j.push({text:f,type:d});break}}if(c===b)throw Error("Malformed pattern part: "+b);}}
PG.prototype.format=function(a,b){if(!a)throw Error("The date to format must be non-null.");var c=b?6E4*(a.getTimezoneOffset()-(b.j-OG(b,a))):0,d=c?new Date(a.getTime()+c):a,e=d;b&&d.getTimezoneOffset()!=a.getTimezoneOffset()&&(d=new Date(d.getTime()+6E4*(d.getTimezoneOffset()-a.getTimezoneOffset())),e=new Date(a.getTime()+(c+(0<c?-864E5:864E5))));c=[];for(var f=0;f<this.j.length;++f){var g=this.j[f].text;1==this.j[f].type?c.push(VG(this,g,a,d,e,b)):c.push(g)}return c.join("")};
function QG(a,b){if(4>b)var c=a.g.Ic[b];else if(8>b)c=a.g.Lf[b-4];else if(12>b)c=a.g.Xj[b-8],c=c.replace("{1}",a.g.Ic[b-8]),c=c.replace("{0}",a.g.Lf[b-8]);else{QG(a,10);return}RG(a,c)}
function WG(a,b){var c=String(b);var d=a.g||Al;if(void 0!==d.Kh){for(var e=[],f=0;f<c.length;f++){var g=c.charCodeAt(f);e.push(48<=g&&57>=g?String.fromCharCode(d.Kh+g-48):c.charAt(f))}c=e.join("")}return c}
var UG=!1;function XG(a){if(!(a.getHours&&a.getSeconds&&a.getMinutes))throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");}
function VG(a,b,c,d,e,f){var g=b.length;switch(b.charAt(0)){case "G":return c=0<d.getFullYear()?1:0,4<=g?a.g.Rn[c]:a.g.Yj[c];case "y":return c=d.getFullYear(),0>c&&(c=-c),2==g&&(c%=100),WG(a,se(c,g));case "Y":return c=d.getDate(),c=(new Date(Fl(d.getFullYear(),d.getMonth(),c,a.g.Le,a.g.Ke))).getFullYear(),0>c&&(c=-c),2==g&&(c%=100),WG(a,se(c,g));case "M":a:switch(c=d.getMonth(),g){case 5:g=a.g.Sn[c];break a;case 4:g=a.g.Jf[c];break a;case 3:g=a.g.Kf[c];break a;default:g=WG(a,se(c+1,g))}return g;case "k":return XG(e),
WG(a,se(TG(e)||24,g));case "S":return WG(a,(e.getMilliseconds()/1E3).toFixed(Math.min(3,g)).substr(2)+(3<g?se(0,g-3):""));case "E":return c=d.getDay(),4<=g?a.g.Ih[c]:a.g.Fh[c];case "a":return XG(e),g=TG(e),a.g.Eh[12<=g&&24>g?1:0];case "h":return XG(e),WG(a,se(TG(e)%12||12,g));case "K":return XG(e),WG(a,se(TG(e)%12,g));case "H":return XG(e),WG(a,se(TG(e),g));case "c":a:switch(c=d.getDay(),g){case 5:g=a.g.Vn[c];break a;case 4:g=a.g.bk[c];break a;case 3:g=a.g.Hh[c];break a;default:g=WG(a,se(c,1))}return g;
case "L":a:switch(c=d.getMonth(),g){case 5:g=a.g.Un[c];break a;case 4:g=a.g.Td[c];break a;case 3:g=a.g.Gh[c];break a;default:g=WG(a,se(c+1,g))}return g;case "Q":return c=Math.floor(d.getMonth()/3),4>g?a.g.ak[c]:a.g.Zj[c];case "d":return WG(a,se(d.getDate(),g));case "m":return XG(e),WG(a,se(e.getMinutes(),g));case "s":return XG(e),WG(a,se(e.getSeconds(),g));case "v":return g=f||MG(c.getTimezoneOffset()),g.A;case "V":return a=f||MG(c.getTimezoneOffset()),2>=g?a.A:0<OG(a,c)?void 0!==a.g.Qn?a.g.Qn:a.g.DST_GENERIC_LOCATION:
void 0!==a.g.ck?a.g.ck:a.g.STD_GENERIC_LOCATION;case "w":return c=e.getDate(),c=Fl(e.getFullYear(),e.getMonth(),c,a.g.Le,a.g.Ke),WG(a,se(Math.floor(Math.round((c-(new Date((new Date(c)).getFullYear(),0,1)).valueOf())/864E5)/7)+1,g));case "z":return a=f||MG(c.getTimezoneOffset()),4>g?a.B[0<OG(a,c)?2:0]:a.B[0<OG(a,c)?3:1];case "Z":return d=f||MG(c.getTimezoneOffset()),4>g?(g=-(d.j-OG(d,c)),a=[0>g?"-":"+"],g=Math.abs(g),a.push(se(Math.floor(g/60)%100,2),se(g%60,2)),g=a.join("")):g=WG(a,NG(d.j-OG(d,c))),
g;default:return""}}
;function YG(a){this.g=[];this.j=Al;if("number"==typeof a){11<a&&(a=10);if(4>a)var b=this.j.Ic[a];else 8>a?b=this.j.Lf[a-4]:(b=this.j.Xj[a-8],b=b.replace("{1}",this.j.Ic[a-8]),b=b.replace("{0}",this.j.Lf[a-8]));ZG(this,b)}else ZG(this,a)}
function ZG(a,b){for(var c=!1,d="",e=0;e<b.length;e++){var f=b.charAt(e);if(" "==f)for(0<d.length&&(a.g.push({text:d,count:0,Ud:!1}),d=""),a.g.push({text:" ",count:0,Ud:!1});e<b.length-1&&" "==b.charAt(e+1);)e++;else if(c)"'"==f?e+1<b.length&&"'"==b.charAt(e+1)?(d+="'",e++):c=!1:d+=f;else if(0<="GyMdkHmsSEDahKzZvQL".indexOf(f)){0<d.length&&(a.g.push({text:d,count:0,Ud:!1}),d="");var g=b.charAt(e);for(var k=e+1;k<b.length&&b.charAt(k)==g;)k++;g=k-e;a.g.push({text:f,count:g,Ud:!1});e+=g-1}else"'"==
f?e+1<b.length&&"'"==b.charAt(e+1)?(d+="'",e++):c=!0:d+=f}0<d.length&&a.g.push({text:d,count:0,Ud:!1});c=!1;for(d=0;d<a.g.length;d++)$G(a.g[d])?!c&&d+1<a.g.length&&$G(a.g[d+1])&&(c=!0,a.g[d].Ud=!0):c=!1}
YG.prototype.parse=function(a,b,c){return aH(this,a,b,c||0,!1)};
function aH(a,b,c,d,e){for(var f=new bH,g=[d],k=-1,l=0,m=0,n=0;n<a.g.length;n++)if(0<a.g[n].count)if(0>k&&a.g[n].Ud&&(k=n,l=d,m=0),0<=k){var t=a.g[n].count;if(n==k&&(t-=m,m++,0==t))return 0;cH(a,b,g,a.g[n],t,f)||(n=k-1,g[0]=l)}else{if(k=-1,!cH(a,b,g,a.g[n],0,f))return 0}else{k=-1;if(" "==a.g[n].text.charAt(0)){if(t=g[0],dH(b,g),g[0]>t)continue}else if(b.indexOf(a.g[n].text,g[0])==g[0]){g[0]+=a.g[n].text.length;continue}return 0}a:{if(null==c)throw Error("Parameter 'date' should not be null.");void 0!=
f.era&&void 0!=f.year&&0==f.era&&0<f.year&&(f.year=-(f.year-1));void 0!=f.year&&c.setFullYear(f.year);a=c.getDate();c.setDate(1);void 0!=f.month&&c.setMonth(f.month);void 0!=f.day?c.setDate(f.day):(b=El(c.getFullYear(),c.getMonth()),c.setDate(a>b?b:a));Na(c.setHours)&&(void 0==f.hours&&(f.hours=c.getHours()),void 0!=f.j&&0<f.j&&12>f.hours&&(f.hours+=12),c.setHours(f.hours));Na(c.setMinutes)&&void 0!=f.minutes&&c.setMinutes(f.minutes);Na(c.setSeconds)&&void 0!=f.seconds&&c.setSeconds(f.seconds);Na(c.setMilliseconds)&&
void 0!=f.milliseconds&&c.setMilliseconds(f.milliseconds);if(e&&(void 0!=f.year&&f.year!=c.getFullYear()||void 0!=f.month&&f.month!=c.getMonth()||void 0!=f.day&&f.day!=c.getDate()||24<=f.hours||60<=f.minutes||60<=f.seconds||1E3<=f.milliseconds))c=!1;else{void 0!=f.g&&c.setTime(c.getTime()+6E4*(f.g-c.getTimezoneOffset()));f.l&&(e=new Date,e.setFullYear(e.getFullYear()-80),c.getTime()<e.getTime()&&c.setFullYear(e.getFullYear()+100));if(void 0!=f.dayOfWeek)if(void 0==f.day)f=(7+f.dayOfWeek-c.getDay())%
7,3<f&&(f-=7),e=c.getMonth(),c.setDate(c.getDate()+f),c.getMonth()!=e&&c.setDate(c.getDate()+(0<f?-7:7));else if(f.dayOfWeek!=c.getDay()){c=!1;break a}c=!0}}return c?g[0]-d:0}
function $G(a){if(0>=a.count)return!1;var b="MydhHmsSDkK".indexOf(a.text.charAt(0));return 0<b||0==b&&3>a.count}
function dH(a,b){var c=a.substring(b[0]).match(/^\s+/);c&&(b[0]+=c[0].length)}
function cH(a,b,c,d,e,f){dH(b,c);var g=c[0],k=d.text.charAt(0),l=-1;if($G(d))if(0<e){if(g+e>b.length)return!1;l=eH(a,b.substring(0,g+e),c)}else l=eH(a,b,c);switch(k){case "G":return l=fH(b,c,a.j.Yj),0<=l&&(f.era=l),!0;case "M":case "L":a:{d=l;if(0>d){d=fH(b,c,a.j.Jf.concat(a.j.Td).concat(a.j.Kf).concat(a.j.Gh));if(0>d){f=!1;break a}f.month=d%12}else f.month=d-1;f=!0}return f;case "E":return d=fH(b,c,a.j.Ih),0>d&&(d=fH(b,c,a.j.Fh)),0>d?f=!1:(f.dayOfWeek=d,f=!0),f;case "a":return l=fH(b,c,a.j.Eh),0<=
l&&(f.j=l),!0;case "y":a:{if(0>l){var m=b.charAt(c[0]);if("+"!=m&&"-"!=m){f=!1;break a}c[0]++;l=eH(a,b,c);if(0>l){f=!1;break a}"-"==m&&(l=-l)}m||2!=c[0]-g||2!=d.count?f.year=l:(a=l,b=(new Date).getFullYear()-80,c=b%100,f.l=a==c,a+=100*Math.floor(b/100)+(a<c?100:0),f.year=a);f=!0}return f;case "Q":return 0>l?(d=fH(b,c,a.j.Zj),0>d&&(d=fH(b,c,a.j.ak)),0>d?f=!1:(f.month=3*d,f.day=1,f=!0)):f=!1,f;case "d":return 0<=l&&(f.day=l),!0;case "S":return a=c[0]-g,f.milliseconds=3>a?l*Math.pow(10,3-a):Math.round(l/
Math.pow(10,a-3)),!0;case "h":12==l&&(l=0);case "K":case "H":case "k":return 0<=l&&(f.hours=l),!0;case "m":return 0<=l&&(f.minutes=l),!0;case "s":return 0<=l&&(f.seconds=l),!0;case "z":case "Z":case "v":b.indexOf("GMT",c[0])==c[0]&&(c[0]+=3);a:if(c[0]>=b.length)f.g=0,f=!0;else{d=1;switch(b.charAt(c[0])){case "-":d=-1;case "+":c[0]++}g=c[0];l=eH(a,b,c);if(0>l)f=!1;else{if(c[0]<b.length&&":"==b.charAt(c[0])){m=60*l;c[0]++;l=eH(a,b,c);if(0>l){f=!1;break a}m+=l}else m=l,m=24>m&&2>=c[0]-g?60*m:m%100+m/
100*60;f.g=-(m*d);f=!0}}return f;default:return!1}}
function eH(a,b,c){if(a.j.Kh){for(var d=[],e=c[0];e<b.length;e++){var f=b.charCodeAt(e)-a.j.Kh;d.push(0<=f&&9>=f?String.fromCharCode(f+48):b.charAt(e))}b=d.join("")}else b=b.substring(c[0]);a=b.match(/^\d+/);if(!a)return-1;c[0]+=a[0].length;return parseInt(a[0],10)}
function fH(a,b,c){var d=0,e=-1;a=a.substring(b[0]).toLowerCase();for(var f=0;f<c.length;f++){var g=c[f].length;g>d&&0==a.indexOf(c[f].toLowerCase())&&(e=f,d=g)}0<=e&&(b[0]+=d);return e}
function bH(){}
;var gH={Xn:"y",ey:"y G",gy:"MMM y",Yn:"MMMM y",hy:"MM/y",Bx:"MMM d",Cx:"MMMM dd",Ex:"M/d",Dx:"MMMM d",Gx:"MMM d, y",Yx:"EEE, MMM d",Zx:"EEE, MMM d, y",mx:"d",Fx:"MMM d, h:mm a zzzz"},hH=gH;hH=gH;function iH(a,b,c,d,e,f,g,k){this.g=a;this.F=b;this.l=c;this.B=d;this.A=e;this.C=f;this.j=g;this.D=k}
iH.prototype.clone=function(){return new iH(this.g,this.F,this.l,this.B,this.A,this.C,this.j,this.D)};
iH.prototype.equals=function(a){return this.g==a.g&&this.F==a.F&&this.l==a.l&&this.B==a.B&&this.A==a.A&&this.C==a.C&&this.j==a.j&&this.D==a.D};
function jH(a,b){if(0==b)return a.g;if(1==b)return a.j;var c=Si(a.g,a.l,b),d=Si(a.l,a.A,b),e=Si(a.A,a.j,b);c=Si(c,d,b);d=Si(d,e,b);return Si(c,d,b)}
function kH(a,b){var c=(b-a.g)/(a.j-a.g);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,g=0;8>g;g++){f=jH(a,c);var k=(jH(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(k))break;else f<b?d=c:e=c,c-=(f-b)/k}for(g=0;1E-6<Math.abs(f-b)&&8>g;g++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=jH(a,c);return c}
function lH(a,b){var c=kH(a,b);if(0==c)c=a.F;else if(1==c)c=a.D;else{var d=Si(a.F,a.B,c),e=Si(a.B,a.C,c),f=Si(a.C,a.D,c);d=Si(d,e,c);e=Si(e,f,c);c=Si(d,e,c)}return c}
;function mH(a,b,c,d,e,f){An.call(this,e,f);this.K=a;this.L=[];this.O=!!b;this.ja=!!c;this.hc=!!d;for(b=this.S=0;b<a.length;b++)Hn(a[b],w(this.R,this,b,!0),w(this.R,this,b,!1));0!=a.length||this.O||this.Ea(this.L)}
z(mH,An);mH.prototype.R=function(a,b,c){this.S++;this.L[a]=[b,c];this.g||(this.O&&b?this.Ea([a,c]):this.ja&&!b?this.hd(c):this.S==this.K.length&&this.Ea(this.L));this.hc&&!b&&(c=null);return c};
mH.prototype.hd=function(a){mH.J.hd.call(this,a);for(a=0;a<this.K.length;a++)this.K[a].cancel()};function nH(a,b,c,d){tB.call(this,a,b);this.A=c?5:0;this.l=d||void 0}
z(nH,tB);nH.prototype.g=function(a,b,c){var d=Zm(this.element,this.j,a,b,null,c,10,void 0,this.l);if(d&496){var e=oH(d,this.j);b=oH(d,b);d=Zm(this.element,e,a,b,null,c,10,void 0,this.l);d&496&&(e=oH(d,e),b=oH(d,b),Zm(this.element,e,a,b,null,c,this.A,void 0,this.l))}};
function oH(a,b){a&48&&(b^=4);a&192&&(b^=1);return b}
;function pH(a,b,c,d){nH.call(this,a,b,c||d);if(c||d)this.A=65|(d?32:132)}
z(pH,nH);function qH(a){I.call(this);this.B=1;this.l=[];this.A=0;this.g=[];this.j={};this.C=!!a}
z(qH,I);h=qH.prototype;h.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.B;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.B=e+3;d.push(e);return e};
function rH(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.Fe(d),b.apply(void 0,arguments))},a)}
function sH(a,b,c){if(b=a.j[b]){var d=a.g;(b=jb(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.Fe(b)}}
h.Fe=function(a){var b=this.g[a];if(b){var c=this.j[b];0!=this.A?(this.l.push(a),this.g[a+1]=Ja):(c&&qb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
h.ac=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.C)for(e=0;e<c.length;e++){var g=c[e];tH(this.g[g+1],this.g[g+2],d)}else{this.A++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.A--,0<this.l.length&&0==this.A)for(;c=this.l.pop();)this.Fe(c)}}return 0!=e}return!1};
function tH(a,b,c){lk(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.j[a];b&&(A(b,this.Fe,this),delete this.j[a])}else this.g.length=0,this.j={}};
h.ha=function(a){if(a){var b=this.j[a];return b?b.length:0}a=0;for(b in this.j)a+=this.ha(b);return a};
h.N=function(){qH.J.N.call(this);this.clear();this.l.length=0};function uH(a,b){this.g=a;this.j=b}
uH.prototype.clone=function(){return new uH(this.g,this.j)};function vH(a){this.g=[];if(a)a:{if(a instanceof vH){var b=a.Ga();a=a.ia();if(0>=this.ha()){for(var c=this.g,d=0;d<b.length;d++)c.push(new uH(b[d],a[d]));break a}}else b=Tb(a),a=Sb(a);for(d=0;d<b.length;d++)wH(this,b[d],a[d])}}
function wH(a,b,c){var d=a.g;d.push(new uH(b,c));b=d.length-1;a=a.g;for(c=a[b];0<b;)if(d=b-1>>1,a[d].g>c.g)a[b]=a[d],b=d;else break;a[b]=c}
h=vH.prototype;h.remove=function(){var a=this.g,b=a.length,c=a[0];if(!(0>=b)){if(1==b)nb(a);else{a[0]=a.pop();a=0;b=this.g;for(var d=b.length,e=b[a];a<d>>1;){var f=2*a+1,g=2*a+2;f=g<d&&b[g].g<b[f].g?g:f;if(b[f].g>e.g)break;b[a]=b[f];a=f}b[a]=e}return c.j}};
h.ia=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].j);return b};
h.Ga=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].g);return b};
h.Lc=function(a){return hb(this.g,function(b){return b.j==a})};
h.clone=function(){return new vH(this)};
h.ha=function(){return this.g.length};
h.isEmpty=function(){return 0==this.g.length};
h.clear=function(){nb(this.g)};function xH(a,b,c,d,e,f){function g(l){if(l){l.tabIndex=0;us(l,k.P);P(l,"goog-zippy-header");l&&k.M.G(l,"click",k.It);var m=k;l&&(Ms(m.L,l),m.K.G(m.L,"key",m.Jt))}}
L.call(this);this.D=e||Zi();this.A=this.D.H(a)||null;this.B=this.D.H(d||null);this.F=Na(b)?b:null;this.P=f||"tab";this.l=this.F||!b?null:this.D.H(b);this.j=1==c;void 0!==c||this.F||(this.B?this.j=Dm(this.B):this.A&&(this.j=O(this.A,"goog-zippy-expanded")));this.K=new qn(this);this.L=new Ls;this.M=new qn(this);var k=this;g(this.A);g(this.B);this.hf(this.j)}
z(xH,L);h=xH.prototype;h.N=function(){xH.J.N.call(this);Th(this.K);Th(this.L);Th(this.M)};
h.expand=function(){this.hf(!0)};
h.toggle=function(){this.hf(!this.j)};
h.hf=function(a){this.l?Cm(this.l,a):a&&this.F&&(this.l=this.F());this.l&&P(this.l,"goog-zippy-content");this.B?(Cm(this.A,!a),Cm(this.B,a)):yH(this,a);this.j=a;this.dispatchEvent(new zH("toggle",this,this.j))};
h.isExpanded=function(){return this.j};
function yH(a,b){a.A&&(jn(a.A,"goog-zippy-expanded",b),jn(a.A,"goog-zippy-collapsed",!b),vs(a.A,"expanded",b))}
h.Jt=function(a){if(13==a.keyCode||32==a.keyCode)this.toggle(),this.dispatchEvent(new zH("action",this,this.j,a)),a.preventDefault(),a.stopPropagation()};
h.It=function(a){this.toggle();this.dispatchEvent(new zH("action",this,this.j,a))};
function zH(a,b,c){J.call(this,a,b);this.expanded=c}
z(zH,J);function AH(a,b,c,d,e){d=d||Zi();var f=d.W("DIV",{style:"overflow:hidden"});b=d.H(b);b.parentNode.replaceChild(f,b);f.appendChild(b);this.C=f;this.g=null;xH.call(this,a,b,c,void 0,d,e);a=this.isExpanded();this.C.style.display=a?"":"none";yH(this,a)}
z(AH,xH);h=AH.prototype;h.animationDuration=500;h.ko=function(a){return 1-Math.pow(1-a,3)};
h.hf=function(a){if(this.isExpanded()!=a||this.g){"none"==this.C.style.display&&(this.C.style.display="");var b=this.l.offsetHeight;if(this.g){Di(this.g);this.g.stop(!1);var c=b-Math.abs(parseInt(this.l.style.marginTop,10))}else c=a?0:b;yH(this,a);this.g=new Ct([0,c],[0,a?b:0],this.animationDuration,this.ko);K(this.g,["begin","animate","end"],this.Xr,!1,this);K(this.g,"begin",w(this.Yr,this,a));K(this.g,"end",w(this.Zr,this,a));this.g.play(!1)}};
h.Xr=function(a){var b=this.l;b.style.marginTop=a.y-b.offsetHeight+"px"};
h.Yr=function(a){this.dispatchEvent(new zH("l",this,a))};
h.Zr=function(a){a&&(this.l.style.marginTop="0");Di(this.g);this.j=a;this.g=null;a||(this.C.style.display="none");this.dispatchEvent(new zH("toggle",this,a));this.dispatchEvent(new zH("m",this,a))};function BH(a,b,c){J.call(this,a,b);this.item=c}
z(BH,J);function CH(a,b){Xz.call(this,b);this.j=a||""}
var DH;z(CH,Xz);h=CH.prototype;h.jc=null;function EH(){null==DH&&(DH="placeholder"in uj("INPUT"));return DH}
h.kf=!1;h.Ha=function(){this.l=this.g.W("INPUT",{type:"text"})};
h.ra=function(a){CH.J.ra.call(this,a);this.j||(this.j=a.getAttribute("label")||"");bk(aj(a))==a&&(this.kf=!0,a=this.H(),gn(a,"label-input-label"));EH()&&(this.H().placeholder=this.j);a=this.H();vs(a,"label",this.j)};
h.fa=function(){CH.J.fa.call(this);var a=new qn(this);a.G(this.H(),"focus",this.kl);a.G(this.H(),"blur",this.Ap);if(EH())this.A=a;else{sf&&a.G(this.H(),["keypress","keydown","keyup"],this.Ip);var b=aj(this.H());a.G(oj(b),"load",this.Jq);this.A=a;FH(this)}GH(this);this.H().ta=this};
h.na=function(){CH.J.na.call(this);this.A&&(this.A.dispose(),this.A=null);this.H().ta=null};
function FH(a){!a.B&&a.A&&a.H().form&&(a.A.G(a.H().form,"submit",a.Wp),a.B=!0)}
h.N=function(){CH.J.N.call(this);this.A&&(this.A.dispose(),this.A=null)};
h.kl=function(){this.kf=!0;var a=this.H();gn(a,"label-input-label");if(!EH()&&!HH(this)&&!this.D){var b=this;a=function(){b.H()&&(b.H().value="")};
C?Uk(a,10):a()}};
h.Ap=function(){EH()||(this.A.Z(this.H(),"click",this.kl),this.jc=null);this.kf=!1;GH(this)};
h.Ip=function(a){27==a.keyCode&&("keydown"==a.type?this.jc=this.H().value:"keypress"==a.type?this.H().value=this.jc:"keyup"==a.type&&(this.jc=null),a.preventDefault())};
h.Wp=function(){HH(this)||(this.H().value="",Uk(this.xp,10,this))};
h.xp=function(){HH(this)||(this.H().value=this.j)};
h.Jq=function(){GH(this)};
function HH(a){return!!a.H()&&""!=a.H().value&&a.H().value!=a.j}
h.clear=function(){this.H().value="";null!=this.jc&&(this.jc="")};
h.reset=function(){HH(this)&&(this.clear(),GH(this))};
h.setValue=function(a){null!=this.jc&&(this.jc=a);this.H().value=a;GH(this)};
function IH(a){return null!=a.jc?a.jc:HH(a)?a.H().value:""}
function GH(a){var b=a.H();EH()?a.H().placeholder!=a.j&&(a.H().placeholder=a.j):FH(a);vs(b,"label",a.j);HH(a)?(b=a.H(),gn(b,"label-input-label")):(a.D||a.kf||(b=a.H(),P(b,"label-input-label")),EH()||Uk(a.Mv,10,a))}
h.Aa=function(a){this.H().disabled=!a;var b=this.H();jn(b,"label-input-label-disabled",!a)};
h.isEnabled=function(){return!this.H().disabled};
h.Mv=function(){!this.H()||HH(this)||this.kf||(this.H().value=this.j)};function JH(a,b){if(!a)throw Error("Invalid class name "+a);if(!Na(b))throw Error("Invalid decorator function "+b);KH[a]=b}
var LH={},KH={};function MH(a){this.g=a}
Ka(MH);function NH(a,b){a&&(a.tabIndex=b?0:-1)}
MH.prototype.ui=function(a){return"DIV"==a.tagName};
function OH(a,b,c){c.id&&$z(b,c.id);var d=a.ug(),e=!1,f=dn(c);f&&A(f,function(g){g==d?e=!0:g&&(g==d+"-disabled"?b.Aa(!1):g==d+"-horizontal"?PH(b,"horizontal"):g==d+"-vertical"&&PH(b,"vertical"))},a);
e||P(c,d);QH(a,b,c);return c}
function QH(a,b,c){if(c)for(var d=c.firstChild,e;d&&d.parentNode==c;){e=d.nextSibling;if(1==d.nodeType){var f=a.mi(d);f&&(f.l=d,b.isEnabled()||f.Aa(!1),b.tc(f),f.Sa(d))}else d.nodeValue&&""!=Jc(d.nodeValue)||c.removeChild(d);d=e}}
MH.prototype.mi=function(a){a:{a=dn(a);for(var b=0,c=a.length;b<c;b++){var d=a[b];if(d=d in KH?KH[d]():null){a=d;break a}}a=null}return a};
MH.prototype.vi=function(a){a=a.H();Im(a,sf);C&&(a.hideFocus=!0);var b=this.g;b&&us(a,b)};
MH.prototype.ug=function(){return"goog-container"};
function RH(a,b){var c=a.ug(),d=[c,"horizontal"==b.qd?c+"-horizontal":c+"-vertical"];b.isEnabled()||d.push(c+"-disabled");return d}
;function SH(){}
var TH;Ka(SH);var UH={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};h=SH.prototype;h.dl=function(){};
h.vg=function(a){return a.g.W("DIV",VH(this,a).join(" "),a.getContent())};
h.rd=function(a){return a};
function WH(a,b,c){if(a=a.H?a.H():a){var d=[b];C&&!Jf("7")&&(d=XH(dn(a),b),d.push(b));(c?fn:hn)(a,d)}}
h.wg=function(a,b){b.id&&$z(a,b.id);var c=this.rd(b);c&&c.firstChild?YH(a,c.firstChild.nextSibling?tb(c.childNodes):c.firstChild):a.me=null;var d=0,e=this.sb(),f=this.sb(),g=!1,k=!1,l=!1,m=tb(dn(b));A(m,function(r){g||r!=e?k||r!=f?d|=this.lg(r):k=!0:(g=!0,f==e&&(k=!0));1==this.lg(r)&&Qj(c)&&Tj(c,!1)},this);
a.Oa=d;g||(m.push(e),f==e&&(k=!0));k||m.push(f);var n=a.ki;n&&m.push.apply(m,n);if(C&&!Jf("7")){var t=XH(m);0<t.length&&(m.push.apply(m,t),l=!0)}g&&k&&!n&&!l||en(b,m.join(" "));return b};
function ZH(a,b,c){if(a=c||a.dl())c=b.getAttribute("role")||null,a!=c&&us(b,a)}
function $H(a,b){a.isVisible()||vs(b,"hidden",!a.isVisible());a.isEnabled()||aI(b,1,!a.isEnabled());a.La&8&&aI(b,8,a.isSelected());a.La&16&&aI(b,16,a.isChecked());a.La&64&&aI(b,64,!!(a.Oa&64))}
function bI(a,b){var c;if(a.La&32&&(c=a.H())){if(!b&&a.isFocused()){try{c.blur()}catch(d){}a.isFocused()&&a.fl(null)}Qj(c)!=b&&Tj(c,b)}}
function aI(a,b,c){TH||(TH={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=TH[b];var d=a.getAttribute("role")||null;d&&(d=UH[d]||b,b="checked"==b||"selected"==b?d:b);b&&vs(a,b,c)}
h.xg=function(a,b){var c=this.rd(a);if(c&&(xj(c),b))if("string"===typeof b)Lj(c,b);else{var d=function(e){if(e){var f=aj(c);c.appendChild("string"===typeof e?f.createTextNode(e):e)}};
Array.isArray(b)?A(b,d):!Ma(b)||"nodeType"in b?d(b):A(tb(b),d)}};
h.sb=function(){return"goog-control"};
function VH(a,b){var c=a.sb(),d=[c],e=a.sb();e!=c&&d.push(e);c=b.Oa;for(e=[];c;){var f=c&-c;e.push(a.gg(f));c&=~f}d.push.apply(d,e);(c=b.ki)&&d.push.apply(d,c);C&&!Jf("7")&&d.push.apply(d,XH(d));return d}
function XH(a,b){var c=[];b&&(a=sb(a,[b]));A([],function(d){!ib(d,Ua(mb,a))||b&&!mb(d,b)||c.push(d.join("_"))});
return c}
h.gg=function(a){this.g||cI(this);return this.g[a]};
h.lg=function(a){if(!this.l){this.g||cI(this);var b=this.g,c={},d;for(d in b)c[b[d]]=d;this.l=c}a=parseInt(this.l[a],10);return isNaN(a)?0:a};
function cI(a){var b=a.sb();b.replace(/\xa0|\s/g," ");a.g={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}
;function dI(a,b,c){Xz.call(this,c);if(!b){for(b=this.constructor;b;){var d=Pa(b);if(d=LH[d])break;b=(b=Object.getPrototypeOf(b.prototype))&&b.constructor}b=d?Na(d.V)?d.V():new d:null}this.j=b;this.me=void 0!==a?a:null}
z(dI,Xz);h=dI.prototype;h.me=null;h.Oa=0;h.La=39;h.Bf=0;h.zg=!0;h.ki=null;h.ef=!0;h.Ha=function(){var a=this.j.vg(this);this.l=a;ZH(this.j,a,this.df());Im(a,!C&&!pf);this.isVisible()||(Cm(a,!1),a&&vs(a,"hidden",!0))};
h.df=function(){return null};
h.Dc=function(){return this.j.rd(this.H())};
h.ke=function(){return!0};
h.ra=function(a){this.l=a=this.j.wg(this,a);ZH(this.j,a,this.df());Im(a,!C&&!pf);this.zg="none"!=a.style.display};
h.fa=function(){dI.J.fa.call(this);$H(this,this.l);var a=this.j;if(jA(this)){var b=this.H();WH(b,a.sb()+"-rtl",!0)}this.isEnabled()&&bI(this,this.isVisible());this.La&-2&&(this.ef&&eI(this,!0),this.La&32&&(a=this.H()))&&(b=this.A||(this.A=new Ls),Ms(b,a),cA(this).G(b,"key",this.fb).G(a,"focus",this.tp).G(a,"blur",this.fl))};
function eI(a,b){var c=cA(a),d=a.H();b?(c.G(d,di.Rd,a.yg).G(d,[di.Sd,di.Me],a.pe).G(d,"mouseover",a.Ki).G(d,"mouseout",a.Ji),a.jf!=Ja&&c.G(d,"contextmenu",a.jf),C&&(Jf(9)||c.G(d,"dblclick",a.wl),a.B||(a.B=new fI(a),Rh(a,a.B)))):(c.Z(d,di.Rd,a.yg).Z(d,[di.Sd,di.Me],a.pe).Z(d,"mouseover",a.Ki).Z(d,"mouseout",a.Ji),a.jf!=Ja&&c.Z(d,"contextmenu",a.jf),C&&(Jf(9)||c.Z(d,"dblclick",a.wl),Th(a.B),a.B=null))}
h.na=function(){dI.J.na.call(this);this.A&&Ss(this.A);this.isVisible()&&this.isEnabled()&&bI(this,!1)};
h.N=function(){dI.J.N.call(this);this.A&&(this.A.dispose(),delete this.A);delete this.j;this.B=this.ki=this.me=null};
h.getContent=function(){return this.me};
function YH(a,b){a.me=b}
h.fe=function(){var a=this.getContent();if(!a)return"";a="string"===typeof a?a:Array.isArray(a)?fb(a,Xj).join(""):Vj(a);return ie(a)};
h.isVisible=function(){return this.zg};
h.isEnabled=function(){return!(this.Oa&1)};
h.Aa=function(a){var b=this.Oc();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!gI(this,1,!a)||(a||(this.setActive(!1),hI(this,!1)),this.isVisible()&&bI(this,a),iI(this,1,!a,!0))};
h.isHighlighted=function(){return!!(this.Oa&2)};
function hI(a,b){gI(a,2,b)&&iI(a,2,b)}
h.isActive=function(){return!!(this.Oa&4)};
h.setActive=function(a){gI(this,4,a)&&iI(this,4,a)};
h.isSelected=function(){return!!(this.Oa&8)};
h.sh=function(a){gI(this,8,a)&&iI(this,8,a)};
h.isChecked=function(){return!!(this.Oa&16)};
h.isFocused=function(){return!!(this.Oa&32)};
function jI(a,b){gI(a,64,b)&&iI(a,64,b)}
function iI(a,b,c,d){if(!d&&1==b)a.Aa(!c);else if(a.La&b&&c!=!!(a.Oa&b)){var e=a.j;if(d=a.H())(e=e.gg(b))&&WH(a,e,c),aI(d,b,c);a.Oa=c?a.Oa|b:a.Oa&~b}}
h.Qb=function(a,b){if(this.va&&this.Oa&a&&!b)throw Error("Component already rendered");!b&&this.Oa&a&&iI(this,a,!1);this.La=b?this.La|a:this.La&~a};
function kI(a,b){return!!(255&b)&&!!(a.La&b)}
function gI(a,b,c){return!!(a.La&b)&&!!(a.Oa&b)!=c&&(!(a.Bf&b)||a.dispatchEvent(Zz(b,c)))&&!a.Pb()}
h.Ki=function(a){!lI(a,this.H())&&this.dispatchEvent("enter")&&this.isEnabled()&&kI(this,2)&&hI(this,!0)};
h.Ji=function(a){!lI(a,this.H())&&this.dispatchEvent("leave")&&(kI(this,4)&&this.setActive(!1),kI(this,2)&&hI(this,!1))};
h.jf=Ja;function lI(a,b){return!!a.relatedTarget&&Ij(b,a.relatedTarget)}
h.yg=function(a){if(this.isEnabled()&&(kI(this,2)&&hI(this,!0),hi(a))){kI(this,4)&&this.setActive(!0);var b;if(b=this.j){var c;b=this.La&32&&(c=this.H())?Qj(c):!1}b&&this.H().focus()}hi(a)&&a.preventDefault()};
h.pe=function(a){this.isEnabled()&&(kI(this,2)&&hI(this,!0),this.isActive()&&mI(this,a)&&kI(this,4)&&this.setActive(!1))};
h.wl=function(a){this.isEnabled()&&mI(this,a)};
function mI(a,b){if(kI(a,16)){var c=!a.isChecked();gI(a,16,c)&&iI(a,16,c)}kI(a,8)&&a.sh(!0);kI(a,64)&&jI(a,!(a.Oa&64));c=new J("action",a);b&&(c.altKey=b.altKey,c.ctrlKey=b.ctrlKey,c.metaKey=b.metaKey,c.shiftKey=b.shiftKey,c.l=b.l);return a.dispatchEvent(c)}
h.tp=function(){kI(this,32)&&gI(this,32,!0)&&iI(this,32,!0)};
h.fl=function(){kI(this,4)&&this.setActive(!1);kI(this,32)&&gI(this,32,!1)&&iI(this,32,!1)};
h.fb=function(a){return this.isVisible()&&this.isEnabled()&&this.xi(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
h.xi=function(a){return 13==a.keyCode&&mI(this,a)};
if(!Na(dI))throw Error("Invalid component class "+dI);if(!Na(SH))throw Error("Invalid renderer class "+SH);var nI=Pa(dI);LH[nI]=SH;JH("goog-control",function(){return new dI(null)});
function fI(a){I.call(this);this.j=a;this.g=!1;this.l=new qn(this);Rh(this,this.l);a=this.j.l;this.l.G(a,di.Rd,this.B).G(a,di.Sd,this.C).G(a,"click",this.A)}
z(fI,I);var oI=!C||Kf(9);fI.prototype.B=function(){this.g=!1};
fI.prototype.C=function(){this.g=!0};
function pI(a,b){if(!oI)return a.button=0,a.type=b,a;var c=document.createEvent("MouseEvents");c.initMouseEvent(b,a.bubbles,a.cancelable,a.view||null,a.detail,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,a.relatedTarget||null);return c}
fI.prototype.A=function(a){if(this.g)this.g=!1;else{var b=a.Ba,c=b.button,d=b.type,e=pI(b,"mousedown");this.j.yg(new ei(e,a.currentTarget));e=pI(b,"mouseup");this.j.pe(new ei(e,a.currentTarget));oI||(b.button=c,b.type=d)}};
fI.prototype.N=function(){this.j=null;fI.J.N.call(this)};function qI(a,b,c){Xz.call(this,c);this.Pc=b||MH.V();this.qd=a||"vertical"}
z(qI,Xz);h=qI.prototype;h.Zi=null;h.pd=null;h.Pc=null;h.qd=null;h.Ec=!0;h.od=!0;h.ee=!0;h.Pa=-1;h.Qa=null;h.Bd=!1;h.zc=null;function rI(a){return a.Zi||a.H()}
h.Ha=function(){this.l=this.g.W("DIV",RH(this.Pc,this).join(" "))};
h.Dc=function(){return this.H()};
h.ke=function(a){return this.Pc.ui(a)};
h.ra=function(a){this.l=OH(this.Pc,this,a);"none"==a.style.display&&(this.Ec=!1)};
h.fa=function(){qI.J.fa.call(this);gA(this,function(b){b.va&&sI(this,b)},this);
var a=this.H();this.Pc.vi(this);this.le(this.Ec,!0);cA(this).G(this,"enter",this.Gi).G(this,"highlight",this.Zp).G(this,"unhighlight",this.Cq).G(this,"open",this.rq).G(this,"close",this.Dp).G(a,di.Rd,this.sp).G(aj(a),[di.Sd,di.Me],this.Hp).G(a,[di.Rd,di.Sd,di.Me,"mouseover","mouseout","contextmenu"],this.Cp);this.ee&&tI(this,!0)};
function tI(a,b){var c=cA(a),d=rI(a);b?c.G(d,"focus",a.bl).G(d,"blur",a.al).G(a.pd||(a.pd=new Ls(rI(a))),"key",a.fb):c.Z(d,"focus",a.bl).Z(d,"blur",a.al).Z(a.pd||(a.pd=new Ls(rI(a))),"key",a.fb)}
h.na=function(){this.qc(-1);this.Qa&&jI(this.Qa,!1);this.Bd=!1;qI.J.na.call(this)};
h.N=function(){qI.J.N.call(this);this.pd&&(this.pd.dispose(),this.pd=null);this.Pc=this.Qa=this.zc=this.Zi=null};
h.Gi=function(){return!0};
h.Zp=function(a){var b=kA(this,a.target);if(-1<b&&b!=this.Pa){var c=uI(this);c&&hI(c,!1);this.Pa=b;c=uI(this);this.Bd&&c.setActive(!0);this.Qa&&c!=this.Qa&&(c.La&64?jI(c,!0):jI(this.Qa,!1))}b=this.H();null!=a.target.H()&&vs(b,"activedescendant",a.target.H().id)};
h.Cq=function(a){a.target==uI(this)&&(this.Pa=-1);this.H().removeAttribute("aria-activedescendant")};
h.rq=function(a){(a=a.target)&&a!=this.Qa&&a.Oc()==this&&(this.Qa&&jI(this.Qa,!1),this.Qa=a)};
h.Dp=function(a){a.target==this.Qa&&(this.Qa=null);var b=this.H(),c=a.target.H();b&&a.target.isHighlighted()&&c&&ws(b,c)};
h.sp=function(a){this.od&&(this.Bd=!0);var b=rI(this);b&&Qj(b)?b.focus():a.preventDefault()};
h.Hp=function(){this.Bd=!1};
h.Cp=function(a){a:{var b=a.target;if(this.zc)for(var c=this.H();b&&b!==c;){var d=b.id;if(d in this.zc){b=this.zc[d];break a}b=b.parentNode}b=null}if(b)switch(a.type){case di.Rd:b.yg(a);break;case di.Sd:case di.Me:b.pe(a);break;case "mouseover":b.Ki(a);break;case "mouseout":b.Ji(a);break;case "contextmenu":b.jf(a)}};
h.bl=function(){};
h.al=function(){this.qc(-1);this.Bd=!1;this.Qa&&jI(this.Qa,!1)};
h.fb=function(a){return this.isEnabled()&&this.isVisible()&&(0!=hA(this)||this.Zi)&&this.wi(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
h.wi=function(a){var b=uI(this);if(b&&"function"==typeof b.fb&&b.fb(a)||this.Qa&&this.Qa!=b&&"function"==typeof this.Qa.fb&&this.Qa.fb(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.ee)rI(this).blur();else return!1;break;case 36:vI(this);break;case 35:wI(this);break;case 38:if("vertical"==this.qd)xI(this);else return!1;break;case 37:if("horizontal"==this.qd)jA(this)?yI(this):xI(this);else return!1;break;case 40:if("vertical"==this.qd)yI(this);
else return!1;break;case 39:if("horizontal"==this.qd)jA(this)?xI(this):yI(this);else return!1;break;default:return!1}return!0};
function sI(a,b){var c=b.H();c=c.id||(c.id=b.getId());a.zc||(a.zc={});a.zc[c]=b}
h.tc=function(a,b){qI.J.tc.call(this,a,b)};
h.Mf=function(a,b,c){a.Bf|=2;a.Bf|=64;a.Qb(32,!1);a.va&&0!=a.ef&&eI(a,!1);a.ef=!1;var d=a.Oc()==this?kA(this,a):-1;qI.J.Mf.call(this,a,b,c);a.va&&this.va&&sI(this,a);a=d;-1==a&&(a=hA(this));a==this.Pa?this.Pa=Math.min(hA(this)-1,b):a>this.Pa&&b<=this.Pa?this.Pa++:a<this.Pa&&b>this.Pa&&this.Pa--};
h.ti=function(a,b){if(a="string"===typeof a?eA(this,a):a){var c=kA(this,a);-1!=c&&(c==this.Pa?(hI(a,!1),this.Pa=-1):c<this.Pa&&this.Pa--);(c=a.H())&&c.id&&this.zc&&Yb(this.zc,c.id)}c=a=qI.J.ti.call(this,a,b);c.va&&1!=c.ef&&eI(c,!0);c.ef=!0;return a};
function PH(a,b){if(a.H())throw Error("Component already rendered");a.qd=b}
h.isVisible=function(){return this.Ec};
h.le=function(a,b){if(b||this.Ec!=a&&this.dispatchEvent(a?"show":"hide")){this.Ec=a;var c=this.H();c&&(Cm(c,a),this.ee&&NH(rI(this),this.od&&this.Ec),b||this.dispatchEvent(this.Ec?"aftershow":"afterhide"));return!0}return!1};
h.isEnabled=function(){return this.od};
h.Aa=function(a){this.od!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.od=!0,gA(this,function(b){b.vn?delete b.vn:b.Aa(!0)})):(gA(this,function(b){b.isEnabled()?b.Aa(!1):b.vn=!0}),this.Bd=this.od=!1),this.ee&&NH(rI(this),a&&this.Ec))};
function zI(a){0!=a.ee&&a.va&&tI(a,!1);a.ee=!1;a.od&&a.Ec&&NH(rI(a),!1)}
h.qc=function(a){(a=iA(this,a))?hI(a,!0):-1<this.Pa&&hI(uI(this),!1)};
function uI(a){return iA(a,a.Pa)}
function vI(a){AI(a,function(b,c){return(b+1)%c},hA(a)-1)}
function wI(a){AI(a,function(b,c){b--;return 0>b?c-1:b},0)}
function yI(a){AI(a,function(b,c){return(b+1)%c},a.Pa)}
function xI(a){AI(a,function(b,c){b--;return 0>b?c-1:b},a.Pa)}
function AI(a,b,c){c=0>c?kA(a,a.Qa):c;var d=hA(a);c=b.call(a,c,d);for(var e=0;e<=d;){var f=iA(a,c);if(f&&a.rk(f)){a.qc(c);break}e++;c=b.call(a,c,d)}}
h.rk=function(a){return a.isVisible()&&a.isEnabled()&&!!(a.La&2)};function BI(){}
z(BI,SH);Ka(BI);BI.prototype.sb=function(){return"goog-menuheader"};function CI(a,b,c){dI.call(this,a,c||BI.V(),b);this.Qb(1,!1);this.Qb(2,!1);this.Qb(4,!1);this.Qb(32,!1);this.Oa=1}
z(CI,dI);JH("goog-menuheader",function(){return new CI(null)});function DI(){this.j=[]}
z(DI,SH);Ka(DI);function EI(a,b){var c=a.j[b];if(!c){switch(b){case 0:c=a.sb()+"-highlight";break;case 1:c=a.sb()+"-checkbox";break;case 2:c=a.sb()+"-content"}a.j[b]=c}return c}
h=DI.prototype;h.dl=function(){return"menuitem"};
h.vg=function(a){var b=a.g.W("DIV",VH(this,a).join(" "),FI(this,a.getContent(),a.g));GI(this,a,b,!!(a.La&8)||!!(a.La&16));return b};
h.rd=function(a){return a&&a.firstChild};
h.wg=function(a,b){var c=Dj(b),d=EI(this,2);c&&O(c,d)||b.appendChild(FI(this,b.childNodes,a.g));O(b,"goog-option")&&(a.Qb(16,!0),a&&b&&GI(this,a,b,!0));return DI.J.wg.call(this,a,b)};
h.xg=function(a,b){var c=this.rd(a),d=HI(this,a)?c.firstChild:null;DI.J.xg.call(this,a,b);d&&!HI(this,a)&&c.insertBefore(d,c.firstChild||null)};
function FI(a,b,c){a=EI(a,2);return c.W("DIV",a,b)}
function HI(a,b){var c=a.rd(b);if(c){c=c.firstChild;var d=EI(a,1);return!!c&&Gj(c)&&O(c,d)}return!1}
function GI(a,b,c,d){ZH(a,c,b.df());$H(b,c);d!=HI(a,c)&&(jn(c,"goog-option",d),c=a.rd(c),d?(a=EI(a,1),c.insertBefore(b.g.W("DIV",a),c.firstChild||null)):c.removeChild(c.firstChild))}
h.gg=function(a){switch(a){case 2:return EI(this,0);case 16:case 8:return"goog-option-selected";default:return DI.J.gg.call(this,a)}};
h.lg=function(a){var b=EI(this,0);switch(a){case "goog-option-selected":return 16;case b:return 2;default:return DI.J.lg.call(this,a)}};
h.sb=function(){return"goog-menuitem"};function II(a,b,c,d){dI.call(this,a,d||DI.V(),c);this.setValue(b)}
z(II,dI);h=II.prototype;h.setValue=function(){};
h.Qb=function(a,b){II.J.Qb.call(this,a,b);switch(a){case 8:this.isChecked()&&!b&&gI(this,16,!1)&&iI(this,16,!1);var c=this.H();c&&this&&c&&GI(this.j,this,c,b);break;case 16:(c=this.H())&&this&&c&&GI(this.j,this,c,b)}};
h.fe=function(){var a=this.getContent();return Array.isArray(a)?(a=fb(a,function(b){return Gj(b)&&(O(b,"goog-menuitem-accel")||O(b,"goog-menuitem-mnemonic-separator"))?"":Xj(b)}).join(""),ie(a)):II.J.fe.call(this)};
h.pe=function(a){var b=this.Oc();if(b){var c=b.j;b.j=null;if(c&&"number"===typeof a.clientX&&Ui(c,new Ti(a.clientX,a.clientY)))return}II.J.pe.call(this,a)};
h.xi=function(a){return a.keyCode==this.gm&&mI(this,a)?!0:II.J.xi.call(this,a)};
h.fp=function(){return this.gm};
JH("goog-menuitem",function(){return new II(null)});
II.prototype.df=function(){return this.La&16?"menuitemcheckbox":this.La&8?"menuitemradio":II.J.df.call(this)};
II.prototype.Oc=function(){return dI.prototype.Oc.call(this)};
II.prototype.kg=function(){return dI.prototype.kg.call(this)};function JI(){}
z(JI,SH);Ka(JI);JI.prototype.vg=function(a){return a.g.W("DIV",this.sb())};
JI.prototype.wg=function(a,b){b.id&&$z(a,b.id);if("HR"==b.tagName){var c=b;b=this.vg(a);yj(b,c);Bj(c)}else P(b,this.sb());return b};
JI.prototype.xg=function(){};
JI.prototype.sb=function(){return"goog-menuseparator"};function KI(a,b){dI.call(this,null,a||JI.V(),b);this.Qb(1,!1);this.Qb(2,!1);this.Qb(4,!1);this.Qb(32,!1);this.Oa=1}
z(KI,dI);KI.prototype.fa=function(){KI.J.fa.call(this);var a=this.H();us(a,"separator")};
JH("goog-menuseparator",function(){return new KI});function LI(a){this.g=a||"menu"}
z(LI,MH);Ka(LI);h=LI.prototype;h.ui=function(a){return"UL"==a.tagName||LI.J.ui.call(this,a)};
h.mi=function(a){return"HR"==a.tagName?new KI:LI.J.mi.call(this,a)};
h.bd=function(a,b){return Ij(a.H(),b)};
h.ug=function(){return"goog-menu"};
h.vi=function(a){LI.J.vi.call(this,a);a=a.H();vs(a,"haspopup","true")};JH("goog-menuseparator",function(){return new KI});function MI(a,b){qI.call(this,"vertical",b||LI.V(),a);zI(this)}
z(MI,qI);h=MI.prototype;h.Ai=!0;h.fk=!1;h.bd=function(a){if(this.Pc.bd(this,a))return!0;for(var b=0,c=hA(this);b<c;b++){var d=iA(this,b);if("function"==typeof d.bd&&d.bd(a))return!0}return!1};
h.le=function(a,b){var c=MI.J.le.call(this,a,b);c&&a&&this.va&&this.Ai&&rI(this).focus();this.j=null;return c};
h.Gi=function(a){this.Ai&&rI(this).focus();return MI.J.Gi.call(this,a)};
h.rk=function(a){return(this.fk||a.isEnabled())&&a.isVisible()&&!!(a.La&2)};
h.ra=function(a){for(var b=this.Pc,c=ej(this.g.g,"DIV",b.ug()+"-content",a),d=c.length,e=0;e<d;e++)QH(b,this,c[e]);MI.J.ra.call(this,a)};
h.wi=function(a){var b=MI.J.wi.call(this,a);b||gA(this,function(c){!b&&c.fp&&c.gm==a.keyCode&&(this.isEnabled()&&this.qc(kA(this,c)),b=c.fb(a))},this);
return b};
h.qc=function(a){MI.J.qc.call(this,a);(a=iA(this,a))&&rm(a.H(),this.H())};function NI(a,b,c){Xz.call(this,a);this.ta=c||new CH;this.j=!0;a=this.ka=b||new MI(this.g);a.le(!1);a.Ai=!1;a.fk=!0}
z(NI,Xz);h=NI.prototype;h.sg=null;h.bm=null;h.ta=null;h.ka=null;h.Hc=-1;h.rb=null;h.fj=Fc;h.qg=null;h.rg=null;h.Ha=function(){this.rb=this.g.W("INPUT",{name:"",type:"text",autocomplete:"off"});this.qg=this.g.W("SPAN","goog-combobox-button");this.l=this.g.W("SPAN","goog-combobox",this.rb,this.qg);this.rb.setAttribute("label","");this.ta.Sa(this.rb);zI(this.ka);this.ka.va||this.tc(this.ka,!0)};
h.Aa=function(a){this.j=a;this.ta.Aa(a);jn(this.H(),"goog-combobox-disabled",!a)};
h.isEnabled=function(){return this.j};
h.fa=function(){NI.J.fa.call(this);var a=cA(this);a.G(this.H(),"mousedown",this.Ss);a.G(this.g.g,"mousedown",this.it);a.G(this.rb,"blur",this.Qt);this.A=new Ls(this.rb);a.G(this.A,"key",this.fb);this.sg=new qG(this.rb);a.G(this.sg,"input",this.Rt);a.G(this.ka,"action",this.au)};
h.na=function(){this.A.dispose();delete this.A;this.sg.dispose();this.sg=null;NI.J.na.call(this)};
h.ke=function(){return!1};
h.N=function(){NI.J.N.call(this);this.Vf();this.ta.dispose();this.ka.dispose();this.qg=this.rb=this.ka=this.ta=null};
h.dismiss=function(){this.Vf();OI(this);this.ka.qc(-1)};
h.setValue=function(a){IH(this.ta)!=a&&(this.ta.setValue(a),PI(this))};
h.og=function(){return le(Jc(IH(this.ta).toLowerCase()))};
function QI(a,b){var c=a.ka.isVisible(),d;if(-1==a.Hc){for(var e=d=0,f=hA(a.ka);e<f;e++)iA(a.ka,e).isVisible()&&d++;a.Hc=d}d=a.Hc;c&&0==d?OI(a):!c&&0<d&&(b&&(RI(a,""),SI(a,Jc(IH(a.ta).toLowerCase()))),Uk(a.Vf,1,a),a.ka.le(!0),P(a.H(),"goog-combobox-active"));a.ka&&a.ka.isVisible()&&(new pH(a.H(),9,!0)).g(a.ka.H(),8)}
function OI(a){a.ka.le(!1);gn(a.H(),"goog-combobox-active")}
h.Vf=function(){this.rg&&(Vk(this.rg),this.rg=null)};
h.Ss=function(a){this.j&&(a.target==this.H()||a.target==this.rb||Ij(this.qg,a.target))&&(this.ka.isVisible()?this.dismiss():(QI(this,!0),pf&&this.rb.focus(),this.rb.select(),this.ka.Bd=!0,a.preventDefault()));a.stopPropagation()};
h.it=function(a){Ij(this.ka.H(),a.target)||this.dismiss()};
h.au=function(a){var b=a.target;this.dispatchEvent(new BH("action",this,b))&&(b=b.fe(),IH(this.ta)!=b&&(this.ta.setValue(b),this.dispatchEvent("change")),this.dismiss());a.stopPropagation()};
h.Qt=function(){this.Vf();this.rg=Uk(this.dismiss,250,this)};
h.fb=function(a){var b=this.ka.isVisible();if(b&&this.ka.fb(a))return!0;var c=!1;switch(a.keyCode){case 27:b&&(IH(this.ta),this.dismiss(),c=!0);break;case 9:b&&(b=uI(this.ka))&&(IH(this.ta),mI(b,a),c=!0);break;case 38:case 40:b||(QI(this,!0),c=!0)}c&&a.preventDefault();return c};
h.Rt=function(){IH(this.ta);PI(this)};
function PI(a){var b=Jc(IH(a.ta).toLowerCase());RI(a,b);bk(a.g.g)==a.rb&&QI(a,!1);var c=uI(a.ka);""!=b&&c&&c.isVisible()||SI(a,b);a.bm=b;a.dispatchEvent("change")}
function RI(a,b){for(var c=!1,d=0,e=!a.fj(b,a.bm),f=0,g=hA(a.ka);f<g;f++){var k=iA(a.ka,f);if(k instanceof II){if(!k.isVisible()&&!e)continue;var l=k.fe();l="function"==typeof k.M&&k.K||l&&a.fj(l.toLowerCase(),b);"function"==typeof k.D&&k.D(b);var m=k,n=!!l;if(m.zg!=n&&m.dispatchEvent(n?"show":"hide")){var t=m.H();if(t){var r=n;Cm(t,r);t&&vs(t,"hidden",!r)}m.isEnabled()&&bI(m,n);m.zg=n}c=l||c}else c=k.isVisible()||c;k.isVisible()&&d++}a.Hc=d}
function SI(a,b){if(""==b)a.ka.qc(-1);else{for(var c=0,d=hA(a.ka);c<d;c++){var e=iA(a.ka,c),f=e.fe();if(f&&a.fj(f.toLowerCase(),b)){a.ka.qc(c);e.D&&e.D(b);return}}a.ka.qc(-1)}}
function TI(a,b,c,d){II.call(this,a,b,c,d)}
z(TI,II);JH("goog-combobox-item",function(){return new TI(null)});
TI.prototype.K=!1;TI.prototype.M=function(){return this.K};
TI.prototype.D=function(a){if(this.isEnabled()){var b=this.fe(),c=b.toLowerCase().indexOf(a);if(0<=c){var d=this.g;a=[d.g.createTextNode(String(b.substr(0,c))),d.W("B",null,b.substr(c,a.length)),d.g.createTextNode(String(b.substr(c+a.length)))];this.j.xg(this.H(),a);this.me=a}}};function UI(a){this.g=VI();this.j=a||Zi()}
function WI(a,b,c,d){var e=[a.g+"-btn"];d&&e.push(d);d=a.j.createElement("BUTTON");d.className=e.join(" ");d.appendChild(a.j.g.createTextNode(String(c)));b.appendChild(d)}
;function XI(a,b,c,d){Xz.call(this,c);this.B=b||Al;this.rr=this.B.Hh;this.de=new PG("d",this.B);new PG("dd",this.B);this.Pq=new PG("w",this.B);this.be=new PG("d MMM",this.B);this.wa=new PG(hH.Xn||"y",this.B);this.oe=new PG(hH.Yn||"MMMM y",this.B);this.Tb=d||new UI(this.g);this.j=new Hl(a);this.j.Ze=this.B.Le;this.j.Mc=this.B.Ke;this.A=this.j.clone();this.A.setDate(1);this.da="      ".split(" ");this.da[this.B.Jh[0]]=VI()+"-wkend-start";this.da[this.B.Jh[1]]=VI()+"-wkend-end";this.R={};this.O=[];this.Va=
0}
z(XI,Xz);h=XI.prototype;h.Nj=new eG;h.vh=!0;h.Of=!0;h.Dj=!0;h.Ej=!1;h.gi=null;h.ag=null;h.Zf=null;h.Yf=null;h.to=Jt.V();function VI(){return"goog-date-picker"}
function YI(a,b){a.Ej=b;ZI(a);$I(a)}
function aJ(a,b){a.vh=b;ZI(a);bJ(a);$I(a)}
function cJ(a,b){a.Of=b;a.ma&&dJ(a)}
function eJ(a,b){a.Dj=b;a.qa&&dJ(a)}
function dJ(a){Cm(a.qa,a.Dj);Cm(a.ma,a.Of);Cm(a.yc,a.Dj||a.Of)}
h.Rm=function(){this.A.add(new Gl("m",-1));$I(this);fJ(this)};
h.rm=function(){this.A.add(new Gl("m",1));$I(this);fJ(this)};
h.Dv=function(){this.A.add(new Gl("y",-1));$I(this);fJ(this)};
h.Pr=function(){this.A.add(new Gl("y",1));$I(this);fJ(this)};
h.xj=function(){this.setDate(new Hl)};
h.dn=function(){this.Of&&this.setDate(null)};
h.getDate=function(){return this.j&&this.j.clone()};
h.setDate=function(a){gJ(this,a,!0)};
function gJ(a,b,c){var d=b==a.j||b&&a.j&&b.getFullYear()==a.j.getFullYear()&&b.getMonth()==a.j.getMonth(),e=b==a.j||d&&b.getDate()==a.j.getDate();a.j=b&&new Hl(b);b&&(a.A.set(a.j),a.A.setFullYear(a.j.getFullYear()),a.A.setDate(1));$I(a);c&&a.dispatchEvent(new hJ("select",a,a.j));e||a.dispatchEvent(new hJ("change",a,a.j));d||fJ(a)}
function ZI(a){if(a.ag){for(var b=a.ag;b.firstChild;)b.removeChild(b.firstChild);var c=a.Tb,d=a.vh,e=a.B.Ic[0].toLowerCase();if(a.Ej)e=c.j.createElement("TD"),e.colSpan=d?1:2,WI(c,e,"\u00ab",c.g+"-previousMonth"),b.appendChild(e),e=c.j.createElement("TD"),e.colSpan=d?6:5,e.className=c.g+"-monthyear",b.appendChild(e),e=c.j.createElement("TD"),WI(c,e,"\u00bb",c.g+"-nextMonth"),b.appendChild(e);else{d=c.j.createElement("TD");d.colSpan=5;WI(c,d,"\u00ab",c.g+"-previousMonth");WI(c,d,"",c.g+"-month");WI(c,
d,"\u00bb",c.g+"-nextMonth");var f=c.j.createElement("TD");f.colSpan=3;WI(c,f,"\u00ab",c.g+"-previousYear");WI(c,f,"",c.g+"-year");WI(c,f,"\u00bb",c.g+"-nextYear");e.indexOf("y")<e.indexOf("m")?(b.appendChild(f),b.appendChild(d)):(b.appendChild(d),b.appendChild(f))}if(a.Ej){iJ(a,b,VI()+"-previousMonth",a.Rm);if(c=N(VI()+"-previousMonth",b))vs(c,"hidden",!0),c.tabIndex=-1;iJ(a,b,VI()+"-nextMonth",a.rm);if(c=N(VI()+"-nextMonth",b))vs(c,"hidden",!0),c.tabIndex=-1;a.Zf=N(VI()+"-monthyear",b)}else iJ(a,
b,VI()+"-previousMonth",a.Rm),iJ(a,b,VI()+"-nextMonth",a.rm),iJ(a,b,VI()+"-month",a.dw),iJ(a,b,VI()+"-previousYear",a.Dv),iJ(a,b,VI()+"-nextYear",a.Pr),iJ(a,b,VI()+"-year",a.ew),a.K=N(VI()+"-month",b),c=Zi(),b=N(VI()+"-year",b||c.g),a.U=b}}
function iJ(a,b,c,d){b=N(c,b);cA(a).G(b,"click",function(e){e.preventDefault();d.call(this,e)})}
function bJ(a){if(a.Yf){var b=a.Yf;xj(b);var c=a.Tb,d=a.vh,e=c.j.createElement("TD");e.colSpan=d?2:3;e.className=c.g+"-today-cont";var f=y("Today");WI(c,e,f,c.g+"-today-btn");b.appendChild(e);e=c.j.createElement("TD");e.colSpan=d?4:3;b.appendChild(e);e=c.j.createElement("TD");e.colSpan=2;e.className=c.g+"-none-cont";d=y("None");WI(c,e,d,c.g+"-none-btn");b.appendChild(e);iJ(a,b,VI()+"-today-btn",a.xj);iJ(a,b,VI()+"-none-btn",a.dn);a.qa=N(VI()+"-today-btn",b);a.ma=N(VI()+"-none-btn",b);dJ(a)}}
h.ra=function(a){XI.J.ra.call(this,a);P(a,VI());var b=this.g.W("TABLE",{role:"presentation"}),c=this.g.W("THEAD"),d=this.g.W("TBODY",{role:"grid"}),e=this.g.W("TFOOT");d.tabIndex=0;this.ic=d;this.yc=e;var f=this.g.W("TR",{role:"row"});f.className=VI()+"-head";this.ag=f;ZI(this);c.appendChild(f);this.D=[];for(var g=0;7>g;g++){f=this.g.createElement("TR");this.D[g]=[];for(var k=0;8>k;k++){var l=this.g.createElement(0==k||0==g?"th":"td");0!=k&&0!=g||k==g?0!==g&&0!==k&&(us(l,"gridcell"),l.setAttribute("tabindex",
"-1")):(l.className=0==k?VI()+"-week":VI()+"-wday",us(l,0==k?"rowheader":"columnheader"));f.appendChild(l);this.D[g][k]=l}d.appendChild(f)}f=this.g.createElement("TR");f.className=VI()+"-foot";this.Yf=f;bJ(this);e.appendChild(f);b.cellSpacing="0";b.cellPadding="0";b.appendChild(c);b.appendChild(d);b.appendChild(e);a.appendChild(b);if(this.H()){for(b=0;7>b;b++)Lj(this.D[0][b+1],this.rr[((b+this.A.Mc+7)%7+1)%7]);Cm(this.D[0][0].parentElement||this.D[0][0].parentNode,!0)}$I(this);a.tabIndex=0};
h.Ha=function(){XI.J.Ha.call(this);this.ra(this.H())};
h.fa=function(){XI.J.fa.call(this);var a=cA(this);a.G(this.ic,"click",this.Xp);a.G(jJ(this,this.H()),"key",this.Yp)};
h.na=function(){XI.J.na.call(this);this.ae();for(var a in this.R)this.R[a].dispose();this.R={}};
h.create=XI.prototype.Sa;h.N=function(){XI.J.N.call(this);this.ma=this.qa=this.U=this.Zf=this.K=this.Yf=this.ag=this.yc=this.ic=this.D=null};
h.Xp=function(a){if("TD"==a.target.tagName){var b,c=-2,d=-2;for(b=a.target;b;b=b.previousSibling,c++);for(b=a.target.parentNode;b;b=b.previousSibling,d++);a=this.O[d][c];this.Nj.contains(a)&&this.setDate(a.clone())}};
h.Yp=function(a){switch(a.keyCode){case 33:a.preventDefault();var b=-1;break;case 34:a.preventDefault();b=1;break;case 37:a.preventDefault();var c=-1;break;case 39:a.preventDefault();c=1;break;case 38:a.preventDefault();c=-7;break;case 40:a.preventDefault();c=7;break;case 36:a.preventDefault();this.xj();break;case 46:a.preventDefault();this.dn();break;case 13:case 32:a.preventDefault(),gJ(this,this.j,!0);default:return}this.j?(a=this.j.clone(),a.add(new Gl(0,b,c))):(a=this.A.clone(),a.setDate(1));
this.Nj.contains(a)&&(gJ(this,a,!1),this.pr.focus())};
h.dw=function(a){a.stopPropagation();a=[];for(var b=0;12>b;b++)a.push(this.B.Td[b]);kJ(this,this.K,a,this.nq,this.B.Td[this.A.getMonth()])};
h.ew=function(a){a.stopPropagation();a=[];for(var b=this.A.getFullYear(),c=this.A.clone(),d=-5;5>=d;d++)c.setFullYear(b+d),a.push(this.wa.format(c));kJ(this,this.U,a,this.Lq,this.wa.format(this.A))};
h.nq=function(a){a=Number(a.getAttribute("itemIndex"));this.A.setMonth(a);$I(this);this.K.focus&&this.K.focus()};
h.Lq=function(a){3==a.firstChild.nodeType&&(a=Number(a.getAttribute("itemIndex")),this.A.setFullYear(this.A.getFullYear()+a-5),$I(this));this.U.focus()};
function kJ(a,b,c,d,e){a.ae();var f=a.g.createElement("DIV");f.className=VI()+"-menu";a.S=null;for(var g=a.g.createElement("UL"),k=0;k<c.length;k++){var l=a.g.W("LI",null,c[k]);l.setAttribute("itemIndex",k);c[k]==e&&(a.S=l);g.appendChild(l)}f.appendChild(g);f.style.left=b.offsetLeft+b.parentNode.offsetLeft+"px";f.style.top=b.offsetTop+"px";f.style.width=b.clientWidth+"px";a.K.parentNode.appendChild(f);a.M=f;a.S||(a.S=g.firstChild);a.S.className=VI()+"-menu-selected";a.pb=d;b=cA(a);b.G(a.M,"click",
a.Dl);b.G(jJ(a,a.M),"key",a.Fl);b.G(a.g.g,"click",a.ae);f.tabIndex=0;f.focus()}
h.Dl=function(a){a.stopPropagation();this.ae();this.pb&&this.pb(a.target)};
h.Fl=function(a){a.stopPropagation();var b=this.S;switch(a.keyCode){case 35:a.preventDefault();var c=b.parentNode.lastChild;break;case 36:a.preventDefault();c=b.parentNode.firstChild;break;case 38:a.preventDefault();c=b.previousSibling;break;case 40:a.preventDefault();c=b.nextSibling;break;case 13:case 9:case 0:a.preventDefault(),this.ae(),this.pb(b)}c&&c!=b&&(b.className="",c.className=VI()+"-menu-selected",this.S=c)};
h.ae=function(){if(this.M){var a=cA(this);a.Z(this.M,"click",this.Dl);a.Z(jJ(this,this.M),"key",this.Fl);a.Z(this.g.g,"click",this.ae);Bj(this.M);delete this.M}};
function $I(a){if(a.H()){var b=a.A.clone();b.setDate(1);a.Zf&&Lj(a.Zf,a.oe.format(b));a.K&&Lj(a.K,a.B.Td[b.getMonth()]);a.U&&Lj(a.U,a.wa.format(b));var c=((b.getDay()+6)%7-b.Mc+7)%7;b.add(new Gl("m",-1));b.setDate(El(b.getFullYear(),b.getMonth())-(c-1));c=new Gl("d",1);a.O=[];for(var d=0;6>d;d++){a.O[d]=[];for(var e=0;7>e;e++){a.O[d][e]=b.clone();var f=b.getFullYear();b.add(c);0==b.getMonth()&&1==b.getDate()&&f++;b.setFullYear(f)}}if(a.H()){b=a.A.getMonth();e=new Hl;c=e.getFullYear();d=e.getMonth();
e=e.getDate();for(f=0;6>f;f++){a.vh?(Lj(a.D[f+1][0],a.Pq.format(a.O[f][0])),en(a.D[f+1][0],VI()+"-week")):(Lj(a.D[f+1][0],""),en(a.D[f+1][0],""));for(var g=0;7>g;g++){var k=a.O[f][g],l=a.D[f+1][g+1];l.id||(l.id=Kt(a.to));us(l,"gridcell");var m=a.be.format(k);vs(l,"label",m);m=[VI()+"-date"];a.Nj.contains(k)||m.push(VI()+"-unavailable-date");k.getMonth()!=b&&m.push(VI()+"-other-month");var n=(g+a.A.Mc+7)%7;a.da[n]&&m.push(a.da[n]);k.getDate()==e&&k.getMonth()==d&&k.getFullYear()==c&&m.push(VI()+"-today");
a.j&&k.getDate()==a.j.getDate()&&k.getMonth()==a.j.getMonth()&&k.getFullYear()==a.j.getFullYear()&&(m.push(VI()+"-selected"),a.pr=l);a.gi&&(n=a.gi(k))&&m.push(n);k=a.de.format(k);Lj(l,k);en(l,m.join(" "))}4<=f&&Cm(a.D[f+1][0].parentElement||a.D[f+1][0].parentNode,a.O[f][0].getMonth()==b||!0)}7!=a.Va&&(7>a.Va&&a.dispatchEvent("gridSizeIncrease"),a.Va=7)}}}
function fJ(a){var b=new hJ("changeActiveMonth",a,a.A.clone());a.dispatchEvent(b)}
function jJ(a,b){var c=Pa(b);c in a.R||(a.R[c]=new Ls(b));return a.R[c]}
function hJ(a,b,c){J.call(this,a,b);this.date=c}
z(hJ,J);function lJ(a,b){Xz.call(this,b);this.eb=a||new XI}
z(lJ,Xz);h=lJ.prototype;h.eb=null;h.Ob=null;h.Wg=null;h.Eg=!0;h.Ha=function(){lJ.J.Ha.call(this);this.H().className="goog-popupdatepicker";this.Ob=new uB(this.H());this.Ob.Jb(this)};
h.isVisible=function(){return this.Ob?this.Ob.isVisible():!1};
h.fa=function(){lJ.J.fa.call(this);if(!this.eb.va){var a=this.H();a.style.visibility="hidden";Cm(a,!1);this.eb.Sa(a)}cA(this).G(this.eb,"change",this.Bi).G(this.eb,"select",this.mj)};
h.N=function(){lJ.J.N.call(this);this.Ob&&(this.Ob.dispose(),this.Ob=null);this.eb.dispose();this.Wg=this.eb=null};
h.ke=function(){return!1};
h.ge=function(){return this.eb};
h.getDate=function(){return this.eb.getDate()};
h.setDate=function(a){this.eb.setDate(a)};
function mJ(a,b,c){a.Wg=b;var d=a.Ob;d.A=new nH(b,9,!0);d.isVisible()&&d.gf();cA(a).Z(a.eb,"change",a.Bi).Z(a.eb,"select",a.mj).Z(a.eb,"gridSizeIncrease",a.Ht);c||a.eb.setDate(null);a.dispatchEvent("show");a.Ob.Ta(!0);a.Eg&&a.H().focus();cA(a).G(a.eb,"change",a.Bi).G(a.eb,"select",a.mj)}
h.kn=function(a){mJ(this,a.currentTarget)};
function nJ(a){a.Ob.Ta(!1);a.Eg&&a.Wg&&a.Wg.focus()}
h.mj=function(a){nJ(this);this.dispatchEvent(a)};
h.Bi=function(a){this.dispatchEvent(a)};
h.Ht=function(){this.Ob&&this.Ob.gf()};function oJ(a,b,c,d){Xz.call(this,d);this.zi=a;this.Ik=b;this.Ia=new lJ(c,d);this.tc(this.Ia);this.Ia.Eg=!1}
z(oJ,Xz);h=oJ.prototype;h.zi=null;h.Ik=null;h.Ia=null;h.Nm=null;h.ge=function(){return this.Ia.ge()};
h.getDate=function(){var a=pJ(this),b=this.Ia.getDate();a&&b?a.equals(b)||this.Ia.setDate(a):this.Ia.setDate(null);return a};
h.setDate=function(a){this.Ia.setDate(a)};
function qJ(a,b){var c=a.H();c.ta?c.ta.setValue(b):c.value=b}
function rJ(a){a=a.H();return a.ta?IH(a.ta):a.value}
function pJ(a){var b=Jc(rJ(a));if(b){var c=new Ll;if(0<aH(a.Ik,b,c,0,!0))return c}return null}
h.Ha=function(){this.l=this.g.W("INPUT",{type:"text"});this.Ia.Ha()};
h.fa=function(){(this.Nm||this.g.g.body).appendChild(this.Ia.H());oJ.J.fa.call(this);var a=this.H(),b=this.Ia;cA(b).G(a,"mousedown",b.kn);this.Ia.setDate(pJ(this));a=cA(this);a.G(this.Ia,"change",this.up);a.G(this.Ia,"show",this.mu)};
h.na=function(){oJ.J.na.call(this);var a=this.H(),b=this.Ia;cA(b).Z(a,"mousedown",b.kn);this.Ia.na();Bj(this.Ia.H())};
h.ra=function(a){oJ.J.ra.call(this,a);this.Ia.Ha()};
h.N=function(){oJ.J.N.call(this);this.Ia.dispose();this.Nm=this.Ia=null};
h.mu=function(){var a=pJ(this);this.setDate(a);a&&(a=this.ge().getDate(),qJ(this,a?this.zi.format(a):""))};
h.up=function(a){a=a.date;qJ(this,a?this.zi.format(a):"")};function sJ(){L.call(this)}
z(sJ,L);h=sJ.prototype;h.sd=0;h.Zb=0;h.Hb=100;h.Eb=0;h.ec=1;h.tb=!1;h.Dd=!1;h.setValue=function(a){a=tJ(this,a);this.sd!=a&&(this.sd=a+this.Eb>this.Hb?this.Hb-this.Eb:a<this.Zb?this.Zb:a,this.tb||this.Dd||this.dispatchEvent("change"))};
function uJ(a){return tJ(a,a.sd)}
function vJ(a,b){b=tJ(a,b);a.Eb!=b&&(a.Eb=0>b?0:a.sd+b>a.Hb?a.Hb-a.sd:b,a.tb||a.Dd||a.dispatchEvent("change"))}
function wJ(a){var b=a.Eb;return null==a.ec?b:Math.round(b/a.ec)*a.ec}
function xJ(a,b){if(a.Zb!=b){var c=a.tb;a.tb=!0;a.Zb=b;b+a.Eb>a.Hb&&(a.Eb=a.Hb-a.Zb);b>a.sd&&a.setValue(b);b>a.Hb&&(a.Eb=0,yJ(a,b),a.setValue(b));a.tb=c;a.tb||a.Dd||a.dispatchEvent("change")}}
function yJ(a,b){b=tJ(a,b);if(a.Hb!=b){var c=a.tb;a.tb=!0;a.Hb=b;b<a.sd+a.Eb&&a.setValue(b-a.Eb);b<a.Zb&&(a.Eb=0,xJ(a,b),a.setValue(a.Hb));b<a.Zb+a.Eb&&(a.Eb=a.Hb-a.Zb);a.tb=c;a.tb||a.Dd||a.dispatchEvent("change")}}
function tJ(a,b){return null==a.ec?b:a.Zb+Math.round((b-a.Zb)/a.ec)*a.ec}
;function zJ(a,b){Xz.call(this,a);this.j=new sJ;this.wa=b||Jb;K(this.j,"change",this.Ll,!1,this)}
z(zJ,Xz);h=zJ.prototype;h.Ng=!1;h.jj=!1;h.xc=10;h.km=0;h.Ci=!0;h.Ha=function(){zJ.J.Ha.call(this);var a=this.g.W("DIV","goog-slider-horizontal");this.ra(a)};
h.ra=function(a){zJ.J.ra.call(this,a);P(a,"goog-slider-horizontal");a=this.H();var b=dj(null,"goog-slider-thumb",a)[0];b||(b=this.g.W("DIV","goog-slider-thumb"),us(b,"button"),a.appendChild(b));this.A=this.K=b;a=this.H();us(a,"slider");AJ(this)};
h.fa=function(){zJ.J.fa.call(this);this.B=new nA(this.A);this.D=new nA(this.K);this.B.l=!1;this.D.l=!1;this.B.ii=this.D.ii=Ja;this.R=new Ls(this.H());BJ(this,!0);this.H().tabIndex=0;CJ(this)};
function BJ(a,b){b?(cA(a).G(a.B,"beforedrag",a.Hg).G(a.D,"beforedrag",a.Hg).G(a.B,["start","end"],a.Kg).G(a.D,["start","end"],a.Kg).G(a.R,"key",a.ml).G(a.H(),"click",a.Ig).G(a.H(),"mousedown",a.Ig),DJ(a,!0)):(cA(a).Z(a.B,"beforedrag",a.Hg).Z(a.D,"beforedrag",a.Hg).Z(a.B,["start","end"],a.Kg).Z(a.D,["start","end"],a.Kg).Z(a.R,"key",a.ml).Z(a.H(),"click",a.Ig).Z(a.H(),"mousedown",a.Ig),DJ(a,!1))}
h.na=function(){zJ.J.na.call(this);Uh(this.B,this.D,this.R,this.S)};
h.Hg=function(a){var b=a.g==this.B?this.A:this.K;var c=this.H().clientWidth-b.offsetWidth;c=a.left/c*(EJ(this)-FJ(this))+FJ(this);c=a.g==this.B?Math.min(Math.max(c,FJ(this)),uJ(this.j)+wJ(this.j)):Math.min(Math.max(c,uJ(this.j)),EJ(this));GJ(this,b,c)};
h.Kg=function(a){var b="start"==a.type;jn(this.H(),"goog-slider-dragging",b);jn(a.target.Gg,"goog-slider-thumb-dragging",b);a=a.g==this.B;b?(this.dispatchEvent("r"),this.dispatchEvent(a?"n":"p")):(this.dispatchEvent("s"),this.dispatchEvent(a?"o":"q"))};
h.ml=function(a){var b=!0;switch(a.keyCode){case 36:HJ(this,FJ(this));break;case 35:HJ(this,EJ(this));break;case 33:IJ(this,this.xc);break;case 34:IJ(this,-this.xc);break;case 37:var c=-1;IJ(this,a.shiftKey?c*this.xc:c*this.Wc);break;case 40:IJ(this,a.shiftKey?-this.xc:-this.Wc);break;case 39:c=1;IJ(this,a.shiftKey?c*this.xc:c*this.Wc);break;case 38:IJ(this,a.shiftKey?this.xc:this.Wc);break;default:b=!1}b&&a.preventDefault()};
h.Ig=function(a){this.H().focus&&this.H().focus();var b=a.target;Ij(this.A,b)||Ij(this.K,b)||(b="click"==a.type,b&&x()<this.km+1E3||(b||(this.km=x()),this.jj?HJ(this,JJ(this,a)):(this.Gj(a),this.U=KJ(this,JJ(this,a)),this.qa=this.ma>this.U.offsetLeft+this.U.offsetWidth,a=aj(this.H()),cA(this).G(a,"mouseup",this.Fj,!0).G(this.H(),"mousemove",this.Gj),this.O||(this.O=new Tk(200),cA(this).G(this.O,"tick",this.Pl)),this.Pl(),this.O.start())))};
h.Hl=function(a){IJ(this,(0<a.detail?-1:1)*this.Wc);a.preventDefault()};
h.Pl=function(){var a,b=this.ma,c=this.U.offsetLeft;this.qa?b>c+this.U.offsetWidth&&(a=LJ(this,this.U)+this.xc):b<c&&(a=LJ(this,this.U)-this.xc);void 0!==a&&GJ(this,this.U,a)};
h.Fj=function(){this.O&&this.O.stop();var a=aj(this.H());cA(this).Z(a,"mouseup",this.Fj,!0).Z(this.H(),"mousemove",this.Gj)};
h.Gj=function(a){this.ma=sm(a,this.H()).x};
function JJ(a,b){var c=FJ(a),d=EJ(a),e=a.A.offsetWidth,f=a.H().clientWidth-e;e=sm(b,a.H()).x-e/2;return(d-c)*e/f+c}
function LJ(a,b){if(b==a.A)return uJ(a.j);if(b==a.K)return uJ(a.j)+wJ(a.j);throw Error("Illegal thumb element. Neither minThumb nor maxThumb");}
function IJ(a,b){Math.abs(b)<a.j.ec&&(b=(0<b?1:0>b?-1:b)*a.j.ec);var c=LJ(a,a.A)+b,d=LJ(a,a.K)+b;c=Ri(c,FJ(a),EJ(a)-0);d=Ri(d,FJ(a)+0,EJ(a));MJ(a,c,d-c)}
function GJ(a,b,c){var d=tJ(a.j,c);c=b==a.A?d:uJ(a.j);b=b==a.K?d:uJ(a.j)+wJ(a.j);c>=FJ(a)&&b>=c+0&&EJ(a)>=b&&MJ(a,c,b-c)}
function MJ(a,b,c){FJ(a)<=b&&b<=EJ(a)-c&&0<=c&&c<=EJ(a)-b&&(b!=uJ(a.j)||c!=wJ(a.j))&&(a.j.Dd=!0,vJ(a.j,0),a.j.setValue(b),vJ(a.j,c),a.j.Dd=!1,a.Ll(null))}
function FJ(a){a=a.j;return tJ(a,a.Zb)}
function EJ(a){a=a.j;return tJ(a,a.Hb)}
function KJ(a,b){return b<=uJ(a.j)+wJ(a.j)/2?a.A:a.K}
h.Ll=function(){CJ(this);AJ(this);this.dispatchEvent("change")};
function CJ(a){if(a.A&&!a.Ng){var b=NJ(a,LJ(a,a.A));var c=NJ(a,LJ(a,a.K));a.A.style.left=b.x+"px";a.K.style.left=c.x+"px";a.M&&(b=OJ(b.x,c.x,a.A.offsetWidth),a.M.style.left=b.offset+"px",a.M.style.width=b.size+"px")}}
function OJ(a,b,c){var d=Math.ceil(c/2);return{offset:a+d,size:Math.max(b-a+c-2*d,0)}}
function NJ(a,b){var c=new Ti;if(a.A){var d=FJ(a),e=EJ(a);d=b==d&&d==e?0:(b-d)/(e-d);e=a.H().clientWidth-a.A.offsetWidth;c.x=Math.round(d*e);c.y=a.jj?0:a.A.offsetTop}return c}
function HJ(a,b){b=Ri(b,FJ(a),EJ(a));a.Ng&&(a.da.stop(!0),a.da.dispose());var c=new JG,d=KJ(a,b),e=uJ(a.j),f=wJ(a.j),g=LJ(a,d),k=NJ(a,g),l=a.j.ec;Math.abs(b-g)<l&&(b=Ri(g+(b>g?l:-l),FJ(a),EJ(a)));GJ(a,d,b);g=NJ(a,LJ(a,d));k=new Gt(d,[k.x,k.y],[g.x,d.offsetTop],100);k.l=!1;c.add(k);a.M&&(k=NJ(a,e),l=NJ(a,e+f),e=k,f=l,d==a.A?e=g:f=g,d=OJ(k.x,l.x,a.A.offsetWidth),e=OJ(e.x,f.x,a.A.offsetWidth),g=new Gt(a.M,[d.offset,a.M.offsetTop],[e.offset,a.M.offsetTop],100),d=new It(a.M,d.size,e.size,100),g.l=!1,d.l=
!1,c.add(g),c.add(d));a.da=c;cA(a).G(c,"end",a.Ko);a.Ng=!0;c.play(!1)}
h.Ko=function(){this.Ng=!1;this.dispatchEvent("t")};
h.N=function(){zJ.J.N.call(this);this.O&&this.O.dispose();delete this.O;this.da&&this.da.dispose();delete this.da;delete this.A;delete this.K;this.M&&delete this.M;this.j.dispose();delete this.j;this.R&&(this.R.dispose(),delete this.R);this.S&&(this.S.dispose(),delete this.S);this.B&&(this.B.dispose(),delete this.B);this.D&&(this.D.dispose(),delete this.D)};
h.Wc=1;h.setValue=function(a){GJ(this,this.A,a)};
function AJ(a){var b=a.H();b&&(vs(b,"valuemin",FJ(a)),vs(b,"valuemax",EJ(a)),vs(b,"valuenow",uJ(a.j)),vs(b,"valuetext",a.wa(uJ(a.j))||""))}
function DJ(a,b){b?(a.S||(a.S=new vB(a.H())),cA(a).G(a.S,"mousewheel",a.Hl,{passive:!1})):cA(a).Z(a.S,"mousewheel",a.Hl,{passive:!1})}
h.Aa=function(a){this.Ci!=a&&this.dispatchEvent(a?"enable":"disable")&&(this.Ci=a,BJ(this,a),a||this.Fj(),jn(this.H(),"goog-slider-disabled",!a))};
h.isEnabled=function(){return this.Ci};function PJ(a,b){zJ.call(this,a,b);vJ(this.j,0)}
z(PJ,zJ);function QJ(a,b,c){a&&(a.dataset?a.dataset[RJ(b)]=String(c):a.setAttribute("data-"+b,c))}
function T(a,b){return a?a.dataset?a.dataset[RJ(b)]:a.getAttribute("data-"+b):null}
function SJ(a,b){return parseInt(T(a,b),10)}
function TJ(a,b){a&&(a.dataset?delete a.dataset[RJ(b)]:a.removeAttribute("data-"+b))}
var UJ={};function RJ(a){return UJ[a]||(UJ[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var VJ={GOOGLE_MAPS_API:oc("//maps.google.com/maps/api/js?sensor=false"),GOOGLE_LANGUAGE_API_INPUT_TOOLS:oc("//www.google.com/jsapi?key=youtube-internal-it"),GOOGLE_JSAPI:oc("//www.google.com/jsapi")},WJ={},XJ={},YJ={};function ZJ(a){Va("yt.net.apiloader.onApiLoaded_"+a,function(){$J(a)})}
function $J(a){XJ[a]=!0;A(YJ[a],function(b){b.call()});
delete YJ[a]}
function aK(a,b,c,d){var e=VJ[a];e&&(XJ[a]?b.call():(YJ[a]||(YJ[a]=[]),YJ[a].push(b),WJ[a]||(ZJ(a),b=uj("SCRIPT"),c={callback:"yt.net.apiloader.onApiLoaded_"+a,language:c||void 0,v:d||void 0},e=yc(e),e=wc(e),e=Cc.exec(e),d=e[3]||"",c=Bc(e[1]+Ec("?",e[2]||"",c)+Ec("#",d,void 0)),ee(b,c),document.body.appendChild(b),WJ[a]=!0)))}
;var bK=null,cK=!1,dK=null,eK=null,fK;function gK(a,b,c){bK||cK||(cK=!0,dK=a,eK=b||null,fK=c,google.load("elements","1",{packages:"inputtools",callback:"yt.i18n.inputtools.finishLoading"}))}
function hK(a){(a=a.target)&&!mb(eK,a)&&nn(a)&&T(a,"ita-enable")&&(bK.addPageElements([a]),eK.push(a))}
function iK(a){bK&&a&&bK.showControl({container:a})}
;var jK=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",jK,void 0);function kK(a){var b=arguments,c=jK;1<b.length?c[b[0]]=b[1]:1===b.length&&Object.assign(c,b[0])}
function R(a,b){return a in jK?jK[a]:b}
function lK(a){var b=jK.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var mK=[];function nK(a){mK.forEach(function(b){return b(a)})}
function oK(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){pK(b),nK(b)}}:a}
function pK(a){var b=u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),kK("ERRORS",b))}
function qK(a){var b=u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),kK("ERRORS",b))}
;function rK(a,b){Na(a)&&(a=oK(a));return window.setTimeout(a,b)}
function sK(a,b){Na(a)&&(a=oK(a));return window.setInterval(a,b)}
function tK(a){window.clearTimeout(a)}
;var uK=p.ytPubsubPubsubInstance||new qH;qH.prototype.subscribe=qH.prototype.subscribe;qH.prototype.unsubscribeByKey=qH.prototype.Fe;qH.prototype.publish=qH.prototype.ac;qH.prototype.clear=qH.prototype.clear;q("ytPubsubPubsubInstance",uK,void 0);var vK=p.ytPubsubPubsubSubscribedKeys||{};q("ytPubsubPubsubSubscribedKeys",vK,void 0);var wK=p.ytPubsubPubsubTopicToKeys||{};q("ytPubsubPubsubTopicToKeys",wK,void 0);var xK=p.ytPubsubPubsubIsSynchronous||{};q("ytPubsubPubsubIsSynchronous",xK,void 0);
function yK(a,b,c){var d=zK();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){vK[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{xK[a]?g():rK(g,0)}catch(k){pK(k)}},c);
vK[e]=!0;wK[a]||(wK[a]=[]);wK[a].push(e);return e}return 0}
function AK(a){var b=zK();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),A(a,function(c){b.unsubscribeByKey(c);delete vK[c]}))}
function BK(a,b){var c=zK();c&&c.publish.apply(c,arguments)}
function CK(a,b){xK[a]=!0;var c=zK();c&&c.publish.apply(c,arguments);xK[a]=!1}
function DK(a){var b=zK();if(b)if(b.clear(a),a)EK(a);else for(var c in wK)EK(c)}
function zK(){return p.ytPubsubPubsubInstance}
function EK(a){wK[a]&&(a=wK[a],A(a,function(b){vK[b]&&delete vK[b]}),a.length=0)}
;var FK=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,GK=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function HK(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(FK,""),c=c.replace(GK,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else IK(a,b,c)}
function IK(a,b,c){c=void 0===c?null:c;var d=JK(a),e=document.getElementById(d),f=e&&T(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=yK(d,b),b=""+Pa(b),KK[b]=f),g||(e=LK(a,d,function(){T(e,"loaded")||(QJ(e,"loaded","true"),BK(d),rK(Ua(DK,d),0))},c)))}
function LK(a,b,c,d){d=void 0===d?null:d;var e=uj("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);ee(e,Pl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function JK(a){var b=document.createElement("a");ce(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ue(a)}
var KK={};function MK(){}
function NK(a,b){OK(a,1,b)}
;function PK(){}
ra(PK,MK);function OK(a,b,c){isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():rK(a,c||0)}
PK.prototype.start=function(){var a=u("yt.scheduler.instance.start");a&&a()};
Ka(PK);PK.V();function QK(){return parseInt(R("DCLKSTAT",0),10)}
;function RK(a){a=SK(a);return"string"===typeof a&&"false"===a?!1:!!a}
function TK(a,b){var c=SK(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function SK(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
function UK(){var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=R("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var VK=0;function WK(a){var b=a.__yt_uid_key;b||(b=XK(),a.__yt_uid_key=b);return b}
function YK(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?A(a.childNodes,function(c){b.appendChild(YK(c))}):b.innerHTML=a.innerHTML;
return b}
function ZK(a){a=M(a);a=YK(a);a.removeAttribute("id");return a}
function $K(a,b){a=M(a);b=M(b);return!!Zj(a,function(c){return c===b},!0,void 0)}
function aL(a,b,c){a=dj(a,b,c);return a.length?a[0]:null}
function bL(a,b){"disabled"in a&&(a.disabled=!b);1==a.nodeType&&jn(a,"disabled",!b);if(a.hasChildNodes())for(var c=0,d;d=a.childNodes[c];++c)d instanceof Element&&bL(d,b)}
function cL(a){a=a.replace(/^[\s\xa0]+/,"");var b=Hc(a);b&&(a="<table>"+a+"</table>");a=vj(Nl(a));var c=document.createDocumentFragment();if(b)return b=dj("tr",null,a),A(b,function(d){c.appendChild(d)}),c;
c.appendChild(a);return c}
function dL(){var a=document,b;hb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function eL(){jn(document.body,"hide-players",!1);var a=fj("preserve-players");A(a,function(b){gn(b,"preserve-players")})}
var XK=u("ytDomDomGetNextId")||function(){return++VK};
q("ytDomDomGetNextId",XK,void 0);var fL={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function gL(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in fL||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.g=a.pageX;this.j=a.pageY}}catch(e){}}
function hL(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.g=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
gL.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
gL.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
gL.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var iL=p.ytEventsEventsListeners||{};q("ytEventsEventsListeners",iL,void 0);var jL=p.ytEventsEventsCounter||{count:0};q("ytEventsEventsCounter",jL,void 0);
function kL(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Wb(iL,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&ac(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function U(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=kL(a,b,c,d);if(e)return e;e=++jL.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(k){k=new gL(k);if(!Zj(k.relatedTarget,function(l){return l==a},!0))return k.currentTarget=a,k.type=b,c.call(a,k)}:function(k){k=new gL(k);
k.currentTarget=a;return c.call(a,k)};
g=oK(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),lL()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);iL[e]=[a,b,c,g,d];return e}
function mL(a,b,c,d){var e=a||document;return U(e,b,function(f){var g=Zj(f.target,function(k){return k===e||d(k)},!0);
g&&g!==e&&!g.disabled&&(f.currentTarget=g,c.call(g,f))})}
function nL(a){a&&("string"==typeof a&&(a=[a]),A(a,function(b){if(b in iL){var c=iL[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?lL()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete iL[b]}}))}
function oL(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var lL=Mb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function pL(a,b,c,d){return mL(a,b,c,function(e){return O(e,d)})}
function qL(a,b){if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}else c=document.createEventObject(),a.fireEvent("on"+b,c)}
function rL(a,b){var c=tf?"webkitTransitionEnd":pf?"oTransitionEnd":"transitionend";var d=void 0===d?{}:d;var e=U(a,c,function(){nL(e);b.apply(a,arguments)},d)}
;var sL=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function tL(a){this.ib=a;this.g=null;this.l=0;this.C=null;this.A=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.B=0;this.D=U(window,"mousemove",w(this.L,this));this.K=sK(w(this.F,this),25)}
z(tL,I);tL.prototype.L=function(a){void 0===a.g&&hL(a);var b=a.g;void 0===a.j&&hL(a);this.g=new Ti(b,a.j)};
tL.prototype.F=function(){if(this.g){var a=sL();if(0!=this.l){var b=this.C,c=this.g,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.j[this.B]=.5<Math.abs((d-this.A)/this.A)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.ib();this.A=d}this.l=a;this.C=this.g;this.B=(this.B+1)%4}};
tL.prototype.N=function(){window.clearInterval(this.K);nL(this.D)};var uL={};
function vL(a){var b=void 0===a?{}:a;a=void 0===b.Sq?!0:b.Sq;b=void 0===b.Cv?!1:b.Cv;if(null==u("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?x()-Math.max(c,0):-1;q("_lact",c,window);q("_fact",c,window);-1==c&&wL();U(document,"keydown",wL);U(document,"keyup",wL);U(document,"mousedown",wL);U(document,"mouseup",wL);a&&(b?U(window,"touchmove",function(){xL("touchmove",200)},{passive:!0}):(U(window,"resize",function(){xL("resize",200)}),U(window,"scroll",function(){xL("scroll",200)})));
new tL(function(){xL("mouse",100)});
U(document,"touchstart",wL,{passive:!0});U(document,"touchend",wL,{passive:!0})}}
function xL(a,b){uL[a]||(uL[a]=!0,NK(function(){wL();uL[a]=!1},b))}
function wL(){null==u("_lact",window)&&vL();var a=x();q("_lact",a,window);-1==u("_fact",window)&&q("_fact",a,window);(a=u("ytglobal.ytUtilActivityCallback_"))&&a()}
function yL(){var a=u("_lact",window),b;null==a?b=-1:b=Math.max(x()-a,0);return b}
;var zL=window,AL=zL.ytcsi&&zL.ytcsi.now?zL.ytcsi.now:zL.performance&&zL.performance.timing&&zL.performance.now&&zL.performance.timing.navigationStart?function(){return zL.performance.timing.navigationStart+zL.performance.now()}:function(){return(new Date).getTime()};var BL=TK("initial_gel_batch_timeout",1E3),CL=Math.pow(2,16)-1,DL=null,EL=0,FL=void 0,GL=0,HL=0,IL=0,JL=!0,KL=p.ytLoggingTransportLogPayloadsQueue_||{};q("ytLoggingTransportLogPayloadsQueue_",KL,void 0);var LL=p.ytLoggingTransportGELQueue_||new Map;q("ytLoggingTransportGELQueue_",LL,void 0);var ML=p.ytLoggingTransportTokensToCttTargetIds_||{};q("ytLoggingTransportTokensToCttTargetIds_",ML,void 0);
function NL(){tK(GL);tK(HL);HL=0;FL&&FL.isReady()?(OL(LL),"log_event"in KL&&OL(Object.entries(KL.log_event)),LL.clear(),delete KL.log_event):PL()}
function PL(){RK("web_gel_timeout_cap")&&!HL&&(HL=rK(NL,6E4));tK(GL);var a=R("LOGGING_BATCH_TIMEOUT",TK("web_gel_debounce_ms",1E4));RK("shorten_initial_gel_batch_timeout")&&JL&&(a=BL);GL=rK(NL,a)}
function OL(a){var b=FL,c=Math.round(AL());a=ja(a);for(var d=a.next();!d.done;d=a.next()){var e=ja(d.value);d=e.next().value;var f=e.next().value;e=cc({context:QL(b.g||RL())});e.events=f;(f=ML[d])&&SL(e,d,f);delete ML[d];TL(e,c);UL(b,"log_event",e,{retry:!0,onSuccess:function(){EL=Math.round(AL()-c)}});
JL=!1}}
function TL(a,b){a.requestTimeMs=String(b);RK("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=R("EVENT_ID",void 0);if(c){var d=R("BATCH_CLIENT_COUNTER",void 0)||0;!d&&RK("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*CL/2));d++;d>CL&&(d=1);kK("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;DL&&EL&&RK("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:DL,roundtripMs:String(EL)});DL=c;EL=0}}
function SL(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var VL=p.ytLoggingGelSequenceIdObj_||{};q("ytLoggingGelSequenceIdObj_",VL,void 0);
function WL(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||AL());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:yL())};RK("log_sequence_info_on_gel_web")&&d.fn&&(a=e.context,b=d.fn,VL[b]=b in VL?VL[b]+1:0,a.sequence={index:VL[b],groupKey:b},d.py&&delete VL[d.fn]);d=d.my;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),ML[d.token]=a,a=d.token);d=LL.get(a)||[];LL.set(a,d);d.push(e);c&&(FL=new c);c=TK("web_logging_max_batch")||100;
e=AL();d.length>=c?NL():10<=e-IL&&(PL(),IL=e)}
;function XL(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=ke(e[0]||""),g=ke(e[1]||"");f in b?Array.isArray(b[f])?ub(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(l){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};pK(k)}}}return b}
function YL(a){var b=[];Nb(a,function(c,d){var e=je(d),f;Array.isArray(c)?f=c:f=[c];A(f,function(g){""==g?b.push(e):b.push(e+"="+je(g))})});
return b.join("&")}
function ZL(a){"?"==a.charAt(0)&&(a=a.substr(1));return XL(a)}
function $L(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),ZL(1<a.length?a[1]:a[0])):{}}
function aM(a,b){return bM(a,b||{},!0)}
function bM(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ZL(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Ne(a,e)+d}
function cM(a){if(!b)var b=window.location.href;var c=Ce(1,a),d=De(a);return c&&d?Ge(a,b):d?De(b)==d&&(Number(Ce(4,b))||null)==(Number(Ce(4,a))||null):!0}
;function dM(a){var b=eM;a=void 0===a?u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(fM(b),gM(b));b.ca_type="image";a&&(b.bid=a);return b}
function fM(a){var b={};b.dt=Om;b.flash="0";a:{try{var c=a.g.top.location.href}catch(f){a=2;break a}a=c?c===a.j.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?fl:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!fl.navigator&&"unknown"!==typeof fl.navigator.javaEnabled&&!!fl.navigator.javaEnabled&&fl.navigator.javaEnabled();fl.screen&&(b.u_h=fl.screen.height,b.u_w=fl.screen.width,b.u_ah=fl.screen.availHeight,b.u_aw=fl.screen.availWidth,b.u_cd=
fl.screen.colorDepth);fl.navigator&&fl.navigator.plugins&&(b.u_nplug=fl.navigator.plugins.length);fl.navigator&&fl.navigator.mimeTypes&&(b.u_nmime=fl.navigator.mimeTypes.length);return b}
function gM(a){var b=a.g;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var g=b.innerWidth;var k=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.g.top;try{var l=jj(c).round()}catch(m){l=new Wi(-12245933,-12245933)}c=l;l={};d=new bG;p.SVGElement&&p.document.createElementNS&&d.set(0);e=Vl();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);p.crypto&&p.crypto.subtle&&d.set(3);p.TextDecoder&&p.TextEncoder&&d.set(4);d=cG(d);l.bc=d;l.bih=c.height;l.biw=c.width;l.brdim=b.join();a=a.j;return l.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,l.wgl=!!fl.WebGLRenderingContext,l}
var eM=new function(){var a=window.document;this.g=window;this.j=a};
q("yt.ads_.signals_.getAdSignalsString",function(a){return YL(dM(a))},void 0);x();var hM=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function iM(){if(!hM)return null;var a=hM();return"open"in a?a:null}
;var jM={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},kM="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
lM=!1;
function mM(a,b){b=void 0===b?{}:b;var c=cM(a),d=RK("web_ajax_ignore_global_headers_if_set"),e;for(e in jM){var f=R(jM[e]);!f||!c&&!nM(a,e)||d&&void 0!==b[e]||(b[e]=f)}if(c||nM(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||nM(a,"X-YouTube-Time-Zone"))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||nM(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=YL(dM(void 0));return b}
function oM(a){var b=window.location.search,c=De(a),d=Be(Ce(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ZL(b),f={};A(kM,function(g){e[g]&&(f[g]=e[g])});
return bM(a,f||{},!1)}
function nM(a,b){var c=R("CORS_HEADER_WHITELIST")||{},d=De(a);return d?(c=c[d])?mb(c,b):!1:!0}
function pM(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=qM(a,b);var d=rM(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&tK(f);var k=g.ok,l=function(m){m=m||{};var n=b.context||p;k?b.onSuccess&&b.onSuccess.call(n,m,g):b.onError&&b.onError.call(n,m,g);b.Fa&&b.Fa.call(n,m,g)};
"JSON"==(b.format||"JSON")&&(k||400<=g.status&&500>g.status)?g.json().then(l,function(){l(null)}):l(null)}});
b.zm&&0<b.timeout&&(f=rK(function(){e||(e=!0,tK(f),b.zm.call(b.context||p))},b.timeout))}else sM(a,b)}
function sM(a,b){var c=b.format||"JSON";a=qM(a,b);var d=rM(a,b),e=!1,f=tM(a,function(l){if(!e){e=!0;k&&tK(k);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var m=!0;break a;default:m=!1}var n=null,t=400<=l.status&&500>l.status,r=500<=l.status&&600>l.status;if(m||t||r)n=uM(a,c,l,b.ed);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};t=b.context||p;
m?b.onSuccess&&b.onSuccess.call(t,l,n):b.onError&&b.onError.call(t,l,n);b.Fa&&b.Fa.call(t,l,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.ue&&0<b.timeout){var g=b.ue;var k=rK(function(){e||(e=!0,f.abort(),tK(k),g.call(b.context||p,f))},b.timeout)}return f}
function qM(a,b){b.ty&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.Ua;d&&(d[c]&&delete d[c],a=aM(a,d));return a}
function rM(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ya,g=R("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.qy||De(a)&&!b.withCredentials&&De(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.ya&&b.ya[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ZL(e),ec(e,f),e=b.Om&&"JSON"==b.Om?JSON.stringify(e):Me(e));f=e||f&&!Xb(f);!lM&&f&&"POST"!=b.method&&(lM=!0,pK(Error("AJAX request with postData should use POST")));
return e}
function uM(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,qK(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?vM(a):null)e={},A(a.getElementsByTagName("*"),function(g){e[g.tagName]=wM(g)})}d&&xM(e);
return e}
function xM(a){if(Oa(a))for(var b in a)"html_content"==b||Gc(b,"_html")?a[b]=Yd(oc("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):xM(a[b])}
function vM(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function wM(a){var b="";A(a.childNodes,function(c){b+=c.nodeValue});
return b}
function yM(a,b){b.method="POST";b.ya||(b.ya={});return sM(a,b)}
function tM(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&oK(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=iM();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;RK("debug_forward_web_query_parameters")&&(a=oM(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=mM(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
function zM(a,b){b=void 0===b?{}:b;b.method=a.method.toUpperCase();if("POST"==b.method)b.postBody=kG(a);else{var c=ao(hG(a)),d=b.Ua||{};ec(d,c);b.Ua=d}sM(a.action,b)}
;function AM(){for(var a={},b=ja(Object.entries(ZL(R("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=ja(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function BM(){return"INNERTUBE_API_KEY"in jK&&"INNERTUBE_API_VERSION"in jK}
function RL(){return{innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),Uq:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Vq:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Xq:R("INNERTUBE_CONTEXT_HL",void 0),Wq:R("INNERTUBE_CONTEXT_GL",void 0),Yq:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",Zq:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function QL(a){a={client:{hl:a.Xq,gl:a.Wq,clientName:a.Vq,clientVersion:a.innertubeContextClientVersion,configInfo:a.Uq}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=R("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=UK();0<b.length&&(a.request={internalExperimentFlags:b});R("DELEGATED_SESSION_ID")&&!RK("pageid_as_header_web")&&(a.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,AM());return a}
function CM(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.jy||R("AUTHORIZATION"))||(a?b="Bearer "+u("gapi.auth.getToken")().iy:b=fp([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),RK("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
function DM(a){a=Object.assign({},a);delete a.Authorization;var b=fp();if(b){var c=new is;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Wf(c.digest(),3)}return a}
;function EM(a,b,c,d,e){yl.set(""+a,b,{em:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function FM(a){return yl.get(""+a,void 0)}
;function GM(){var a=$B("yt.innertube");this.g=a?new cD(a):null;this.j=document.domain||window.location.hostname}
GM.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,x()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(cr(b))}catch(f){return}else e=escape(b);EM(a,e,c,this.j)};
GM.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=FM(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
GM.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.j;yl.remove(""+a,"/",void 0===b?"youtube.com":b)};var HM=new GM;function IM(a,b,c,d){if(d)return null;d=HM.get("nextId",!0)||1;var e=HM.get("requests",!0)||{};e[d]={method:a,request:b,authState:DM(c),requestTime:Math.round(AL())};HM.set("nextId",d+1,86400,!0);HM.set("requests",e,86400,!0);return d}
function JM(a){var b=HM.get("requests",!0)||{};delete b[a];HM.set("requests",b,86400,!0)}
function KM(a){var b=HM.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(AL())-d.requestTime)){var e=d.authState,f=DM(CM(!1));ac(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(AL())),UL(a,d.method,e,{}));delete b[c]}}HM.set("requests",b,86400,!0)}}
;function LM(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(ka(c))}
ra(LM,Error);function MM(a){var b=this;this.g=null;a?this.g=a:BM()&&(this.g=RL());OK(function(){KM(b)},0,5E3)}
MM.prototype.isReady=function(){!this.g&&BM()&&(this.g=RL());return!!this.g};
function UL(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&qK(new LM("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw b=new LM("innertube xhrclient not ready",b,c,d),pK(b),b.g=0,b;var e={headers:{"Content-Type":"application/json"},method:"POST",ya:c,Om:"JSON",ue:function(){d.ue()},
zm:d.ue,onSuccess:function(r,v){if(d.onSuccess)d.onSuccess(v)},
ym:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,v){if(d.onError)d.onError(v)},
vy:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},f="",g=a.g.Yq;g&&(f=g);g=a.g.Zq||!1;var k=CM(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=aM(""+f+("/youtubei/"+a.g.innertubeApiVersion+"/"+b),{alt:"json",key:a.g.innertubeApiKey}),m;if(d.retry&&RK("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=IM(b,c,k,g))){var n=e.onSuccess,t=e.ym;e.onSuccess=function(r,v){JM(m);n(r,v)};
c.ym=function(r,v){JM(m);t(r,v)}}try{RK("use_fetch_for_op_xhr")?pM(l,e):yM(l,e)}catch(r){if("InvalidAccessError"==r.name)m&&(JM(m),m=0),qK(Error("An extension is blocking network request."));
else throw r;}m&&OK(function(){KM(a)},0,5E3)}
;function NM(a,b){var c=void 0===c?{}:c;var d=MM;R("ytLoggingEventsDefaultDisabled",!1)&&MM==MM&&(d=null);WL(a,b,d,c)}
;var OM=[{fm:function(a){return"Cannot read property '"+a.key+"'"},
tj:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{fm:function(a){return"Cannot call '"+
a.key+"'"},
tj:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var PM=new Set,QM=0,RM=void 0;function SM(a){TM(a)}
function UM(a){TM(a,"WARNING")}
function TM(a,b){var c=void 0===c?{}:c;c.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var d=c||{};c=void 0===b?"ERROR":b;c=void 0===c?"ERROR":c;var e=void 0===e?!1:e;if(a){if(RK("console_log_js_exceptions")){var f=[];f.push("Name: "+a.name);f.push("Message: "+a.message);a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params));f.push("File name: "+a.fileName);f.push("Stacktrace: "+a.stack);window.console.log(f.join("\n"),a)}if((window&&
window.yterr||e)&&!(5<=QM)&&0!==a.g){var g=Vh(a);e=g.message||"Unknown Error";f=g.name||"UnknownError";var k=g.lineNumber||"Not available",l=g.fileName||"Not available";g=g.stack||a.j||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var m=0,n=0;n<a.args.length;n++){var t=a.args[n],r="params."+n;m+=r.length;if(t)if(Array.isArray(t))for(var v=d,B=0;B<t.length&&!(t[B]&&(m+=VM(B,t[B],r,v),500<m));B++);else if("object"===typeof t)for(v in v=void 0,B=d,t){if(t[v]&&(m+=VM(v,t[v],r,
B),500<m))break}else d[r]=String(JSON.stringify(t)).substring(0,500),m+=d[r].length;else d[r]=String(JSON.stringify(t)).substring(0,500),m+=d[r].length;if(500<=m)break}else if(a.hasOwnProperty("params")&&a.params)if(t=a.params,"object"===typeof a.params)for(n in r=0,t){if(t[n]&&(m="params."+n,v=String(JSON.stringify(t[n])).substr(0,500),d[m]=v,r+=m.length+v.length,500<r))break}else d.params=String(JSON.stringify(t)).substr(0,500);d={message:e,name:f,lineNumber:k,fileName:l,stack:g,params:d};e=Number(a.columnNumber);
isNaN(e)||(d.lineNumber=d.lineNumber+":"+e);void 0===RM&&(RM=Math.random()<TK("log_js_error_clusters"));if(!0===RM)a:for(k=ja(OM),e=k.next();!e.done;e=k.next())if(e=e.value,e.tj[d.name])for(l=ja(e.tj[d.name]),f=l.next();!f.done;f=l.next())if(g=f.value,f=d.message.match(g.regexp)){d.params["error.original"]=f[0];k=g.groups;l={};for(g=0;g<k.length;g++)l[k[g]]=f[g+1],d.params["error."+k[g]]=f[g+1];d.message=e.fm(l);break a}window.yterr&&"function"===typeof window.yterr&&window.yterr(d);if(!(PM.has(d.message)||
0<=d.stack.indexOf("/YouTubeCenter.js")||0<=d.stack.indexOf("/mytube.js"))){if(RK("kevlar_gel_error_routing")){e=c;var E;f={stackTrace:d.stack};d.fileName&&(f.filename=d.fileName);k=(null===(E=d.lineNumber)||void 0===E?0:E.split)?d.lineNumber.split(":"):[];0!==k.length&&(1!==k.length||isNaN(Number(k[0]))?2!==k.length||isNaN(Number(k[0]))||isNaN(Number(k[1]))||(f.lineNumber=Number(k[0]),f.columnNumber=Number(k[1])):f.lineNumber=Number(k[0]));E={level:"ERROR_LEVEL_UNKNOWN",message:d.message};"ERROR"===
e?E.level="ERROR_LEVEL_ERROR":"WARNING"===e&&(E.level="ERROR_LEVEL_WARNNING");e={isObfuscated:!0,browserStackInfo:f};f={pageUrl:window.location.href,kvPairs:[]};if(k=d.params)for(l=ja(Object.keys(k)),g=l.next();!g.done;g=l.next())g=g.value,f.kvPairs.push({key:"client."+g,value:String(k[g])});NM("clientError",{errorMetadata:f,stackTrace:e,logMessage:E});NL()}E=d.params||{};c={Ua:{a:"logerror",t:"jserror",type:d.name,msg:d.message.substr(0,250),line:d.lineNumber,level:c,"client.name":E.name},ya:{url:R("PAGE_NAME",
window.location.href),file:d.fileName},method:"POST"};E.version&&(c["client.version"]=E.version);if(c.ya){d.stack&&(c.ya.stack=d.stack);e=ja(Object.keys(E));for(f=e.next();!f.done;f=e.next())f=f.value,c.ya["client."+f]=E[f];if(E=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(e=ja(Object.keys(E)),f=e.next();!f.done;f=e.next())f=f.value,c.ya[f]=E[f];E=R("SERVER_NAME",void 0);e=R("SERVER_VERSION",void 0);E&&e&&(c.ya["server.name"]=E,c.ya["server.version"]=e)}sM(R("ECATCHER_REPORT_HOST","")+
"/error_204",c);PM.add(d.message);QM++}}}}
function VM(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function WM(){this.j=!1;this.g=null}
function XM(){var a=YM,b=R("UBG_I",null),c=R("UBG_IU",null),d=R("UBG_P",void 0);var e=void 0===e?!1:e;c?(a.j=!0,HK(c,function(){a.j=!1;if(window.botguard)ZM(a,d,e);else{var f=JK(c),g=document.getElementById(f);g&&(DK(f),g.parentNode.removeChild(g));UM(new LM("Unable to load Botguard","from "+c))}},void 0)):b&&(eval(b),window.botguard?ZM(a,d,e):UM(Error("Unable to load Botguard from JS")))}
WM.prototype.nc=function(){return!!this.g};
function ZM(a,b,c){if(c)try{a.g=new window.botguard.bg(b,Ja)}catch(d){UM(d)}else try{a.g=new window.botguard.bg(b)}catch(d){UM(d)}}
function $M(a,b){b=void 0===b?{}:b;return a.g?a.g.invoke(void 0,void 0,b):null}
WM.prototype.dispose=function(){this.g=null};var aN=new WM;function bN(){return aN.nc()}
function cN(a){a=void 0===a?{}:a;return $M(aN,a)}
;var dN=x().toString();var eN;
if(!(eN=p.ytLoggingDocDocumentNonce_)){var fN;a:{if(window.crypto&&window.crypto.getRandomValues)try{var gN=Array(16),hN=new Uint8Array(16);window.crypto.getRandomValues(hN);for(var iN=0;iN<gN.length;iN++)gN[iN]=hN[iN];fN=gN;break a}catch(a){}for(var jN=Array(16),kN=0;16>kN;kN++){for(var lN=x(),mN=0;mN<lN%23;mN++)jN[kN]=Math.random();jN[kN]=Math.floor(256*Math.random())}if(dN)for(var nN=1,oN=0;oN<dN.length;oN++)jN[nN%16]=jN[nN%16]^jN[(nN-1)%16]/4^dN.charCodeAt(oN),nN++;fN=jN}for(var pN=fN,qN=[],rN=
0;rN<pN.length;rN++)qN.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(pN[rN]&63));eN=qN.join("")}var sN=eN;q("ytLoggingDocDocumentNonce_",sN,void 0);function tN(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function uN(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
q("yt_logging_screen.getRootVeType",function(a){return R(uN(void 0===a?0:a),void 0)},void 0);
function vN(){var a=R("csn-to-ctt-auth-info");a||(a={},kK("csn-to-ctt-auth-info",a));return a}
function wN(a){a=void 0===a?0:a;var b=R(tN(a));if(!b&&!R("USE_CSN_FALLBACK",!0))return null;b||0!=a||(RK("kevlar_client_side_screens")||RK("c3_client_side_screens")?b="UNDEFINED_CSN":b=R("EVENT_ID"));return b?b:null}
q("yt_logging_screen.getCurrentCsn",wN,void 0);function xN(a,b,c){var d=vN();(c=wN(c))&&delete d[c];b&&(d[a]=b)}
q("yt_logging_screen.getCttAuthInfo",function(a){return vN()[a]},void 0);
q("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==R(tN(c))||b!==R(uN(c)))if(xN(a,d,c),kK(tN(c),a),kK(uN(c),b),0==c||RK("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&WL("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:sN,clientScreenNonce:a},MM)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()},void 0);function yN(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=Ne(a,b)+c;a=a instanceof Vc?a:bd(a);d.href=Yc(a)}
function zN(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=De(window.location.href);g&&f.push(g);g=De(d);if(mb(f,g)||!g&&Fc(d,"/"))if(RK("autoescape_tempdata_url")&&(f=document.createElement("a"),ce(f,d),d=f.href),d&&(d=Fe(d),f=d.indexOf("#"),d=0>f?d:d.substr(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:wN()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+ue(d).toString(36),
e=e?Me(e):"",EM(b,e,k||5))}else k=b,e="ST-"+ue(d).toString(36),k=k?Me(k):"",EM(e,k,5)}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):yN(a);return!0}
;function AN(a){a=void 0===a?{}:a;Na(a)&&(a={callback:a});a._c&&a._c.jsl&&a._c.jsl.h||ec(a,{_c:{jsl:{h:R("GAPI_HINT_PARAMS",void 0)}}});if(a.gapiHintOverride||R("GAPI_HINT_OVERRIDE")){var b=$L(document.location.href).gapi_jsh;b&&ec(a,{_c:{jsl:{h:b}}})}fs("client",a)}
;function V(a,b){(a=M(a))&&a.style&&(Cm(a,b),jn(a,"hid",!b))}
function BN(a){return(a=M(a))?Dm(a)&&!O(a,"hid"):!1}
function CN(a){if(a=M(a))BN(a)?(Cm(a,!1),P(a,"hid")):(Cm(a,!0),gn(a,"hid"))}
function DN(a,b){if(a=M(a))a.style.visibility=b?"visible":"hidden"}
function EN(a){A(arguments,function(b){!Ma(b)||b instanceof Element?V(b,!0):A(b,function(c){EN(c)})})}
function FN(a){A(arguments,function(b){!Ma(b)||b instanceof Element?V(b,!1):A(b,function(c){FN(c)})})}
function GN(a){A(arguments,function(b){Ma(b)?A(b,function(c){GN(c)}):CN(b)})}
;var HN=u("ytPubsub2Pubsub2Instance")||new qH;qH.prototype.subscribe=qH.prototype.subscribe;qH.prototype.unsubscribeByKey=qH.prototype.Fe;qH.prototype.publish=qH.prototype.ac;qH.prototype.clear=qH.prototype.clear;q("ytPubsub2Pubsub2Instance",HN,void 0);var IN=u("ytPubsub2Pubsub2SubscribedKeys")||{};q("ytPubsub2Pubsub2SubscribedKeys",IN,void 0);q("ytPubsub2Pubsub2TopicToKeys",u("ytPubsub2Pubsub2TopicToKeys")||{},void 0);q("ytPubsub2Pubsub2IsAsync",u("ytPubsub2Pubsub2IsAsync")||{},void 0);
q("ytPubsub2Pubsub2SkipSubKey",null,void 0);function JN(a){var b=u("ytPubsub2Pubsub2Instance");b&&("number"===typeof a&&(a=[a]),A(a,function(c){b.unsubscribeByKey(c);delete IN[c]}))}
;var KN={},LN="ontouchstart"in document;function MN(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Zj(c,function(e){return O(e,b)},!0,d)}
function NN(a){var b="mouseover"==a.type&&"mouseenter"in KN||"mouseout"==a.type&&"mouseleave"in KN,c=a.type in KN||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=KN[b];for(var d in c.j){var e=MN(b,d,a.target);e&&!Zj(a.relatedTarget,function(f){return f==e},!0)&&c.ac(d,e,b,a)}}if(b=KN[a.type])for(d in b.j)(e=MN(a.type,d,a.target))&&b.ac(d,e,a.type,a)}}
U(document,"blur",NN,!0);U(document,"change",NN,!0);U(document,"click",NN);U(document,"focus",NN,!0);U(document,"mouseover",NN);U(document,"mouseout",NN);U(document,"mousedown",NN);U(document,"keydown",NN);U(document,"keyup",NN);U(document,"keypress",NN);U(document,"cut",NN);U(document,"paste",NN);LN&&(U(document,"touchstart",NN),U(document,"touchend",NN),U(document,"touchcancel",NN));function ON(a){this.B=a;this.F={};this.D=[];this.L=[]}
h=ON.prototype;h.Na=function(a){return ak(a,W(this))};
function W(a,b){return"yt-uix"+(a.B?"-"+a.B:"")+(b?"-"+b:"")}
h.unregister=function(){AK(this.D);this.D.length=0;JN(this.L);this.L.length=0};
h.init=Ja;h.dispose=Ja;h.wb=function(a,b){this.D.push(yK(a,b,this))};
function PN(a,b,c,d){d=W(a,d);var e=w(c,a);b in KN||(KN[b]=new qH);KN[b].subscribe(d,e);a.F[c]=e}
function QN(a,b,c,d){if(b in KN){var e=KN[b];sH(e,W(a,d),a.F[c]);0>=e.ha()&&(e.dispose(),delete KN[b])}delete a.F[c]}
h.Jc=function(a,b,c){var d=this.aa(a,b);if(d&&(d=u(d))){var e=vb(arguments,2);pb(e,0,0,a);d.apply(null,e)}};
h.aa=function(a,b){return T(a,b)};
function RN(a,b){QJ(a,"tooltip-text",b)}
;function SN(){ON.call(this,"button");this.g=null;this.l=[];this.j={}}
z(SN,ON);Ka(SN);h=SN.prototype;h.register=function(){PN(this,"click",this.yn);PN(this,"keydown",this.Yl);PN(this,"keypress",this.zn);this.wb("page-scroll",this.sq)};
h.unregister=function(){QN(this,"click",this.yn);QN(this,"keydown",this.Yl);QN(this,"keypress",this.zn);TN(this);this.j={};SN.J.unregister.call(this)};
h.yn=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
h.Yl=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=UN(this,a))){var d=function(g){var k="";g.tagName&&(k=g.tagName.toLowerCase());return"ul"==k||"table"==k},e;
d(b)?e=b:e=Mj(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Gr;else"table"==e&&(f=this.Fr);f&&VN(this,a,b,c,w(f,this))}}};
h.sq=function(){var a=this.j;if(0!=Qb(a))for(var b in a){var c=a[b],d=WN(this,c);if(void 0==d||void 0==c)break;XN(this,d,c,!0)}};
function VN(a,b,c,d,e){var f=BN(c),g=9==d.keyCode;g||32==d.keyCode||13==d.keyCode?(d=YN(a,c))?(b=Dj(d),"a"==b.tagName.toLowerCase()?yN(b.href):qL(b,"click")):g&&ZN(a,b):f?27==d.keyCode?(YN(a,c),ZN(a,b)):e(b,c,d):(a=O(b,W(a,"reverse"))?38:40,d.keyCode==a&&(qL(b,"click"),d.preventDefault()))}
h.zn=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=UN(this,a),BN(a)&&c.preventDefault())};
function YN(a,b){var c=W(a,"menu-item-highlight"),d=N(c,b);d&&gn(d,c);return d}
function $N(a,b,c){P(c,W(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=W(a,"item-id-"+Pa(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.Fr=function(a,b,c){var d=YN(this,b);b=aL("table",null,b);var e=aL("tr",null,b);e=dj("td",null,e).length;b=dj("td",null,b);d=aO(d,b,e,c);-1!=d&&($N(this,a,b[d]),c.preventDefault())};
h.Gr=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=YN(this,b);b=eb(dj("li",null,b),BN);d=aO(d,b,1,c);$N(this,a,b[d]);c.preventDefault()}};
function aO(a,b,c,d){var e=b.length;a=bb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function bO(a,b){var c=b.iframeMask;c||(c=uj("IFRAME"),c.src='javascript:""',en(c,W(a,"menu-mask")),FN(c),b.iframeMask=c);return c}
function XN(a,b,c,d){var e=ak(b,W(a,"group")),f=!!a.aa(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,k=ym(b);if(O(b,W(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(n){}}O(b,"flip")&&(O(b,W(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.aa(b,"button-has-sibling-menu")?l=lm(e):a.aa(b,"button-menu-root-container")&&(l=cO(a,b));C&&!Jf("8")&&(l=null);if(l){var m=ym(l);m=new Yl(-m.top,m.left,m.top,-m.left)}l=new Ti(0,1);O(b,W(a,"center-menu"))&&(l.x-=Math.round((xm(c).width-
xm(b).width)/2));d&&(l.y+=mj(document).y);if(a=bO(a,b))b=xm(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Zm(e,f,a,g,l,m,197),d&&bm(a,"position","fixed");Zm(e,f,c,g,l,m,197)}
function cO(a,b){if(a.aa(b,"button-menu-root-container")){var c=a.aa(b,"button-menu-root-container");return ak(b,c)}return document.body}
h.Bn=function(a){if(a){var b=UN(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.aa(a,"button-has-sibling-menu")?c=a.parentNode:c=cO(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=bO(this,a);d&&c.appendChild(d);(c=!!this.aa(a,"button-menu-fixed"))&&(this.j[WK(a).toString()]=b);XN(this,a,b,c);CK("yt-uix-button-menu-before-show",a,b);EN(b);d&&
EN(d);this.Jc(a,"button-menu-action",!0);P(a,W(this,"active"));b=w(this.An,this,a,!1);d=w(this.An,this,a,!0);c=w(this.lw,this,a,void 0);this.g&&UN(this,this.g)==UN(this,a)||TN(this);BK("yt-uix-button-menu-show",a);nL(this.l);this.l=[U(document,"click",d),U(document,"contextmenu",b),U(window,"resize",c)];this.g=a}}};
function ZN(a,b){if(b){var c=UN(a,b);if(c){a.g=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");FN(c);a.Jc(b,"button-menu-action",!1);var d=bO(a,b),e=WK(c).toString();delete a.j[e];rK(function(){d&&d.parentNode&&(FN(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=ak(b,W(a,"group"));
var f=[W(a,"active")];e&&f.push(W(a,"group-active"));hn(b,f);BK("yt-uix-button-menu-hide",b);nL(a.l);a.l.length=0}}
h.lw=function(a,b){var c=UN(this,a);if(c){b&&(b instanceof Fd?ae(c,b):Lj(c,b));var d=!!this.aa(a,"button-menu-fixed");XN(this,a,c,d)}};
h.getContent=function(a){return N(W(this,"content"),a)};
function WN(a,b){return ak(b.activeButtonNode||b.parentNode,W(a))}
h.An=function(a,b,c){c=oL(c);var d=ak(c,W(this));if(d){d=UN(this,d);var e=UN(this,a);if(d==e)return}d=ak(c,W(this,"menu"));e=d==UN(this,a);var f=O(c,W(this,"menu-item")),g=O(c,W(this,"menu-close"));if(!d||e&&(f||g))ZN(this,a),d&&b&&this.aa(a,"button-menu-indicate-selected")&&((a=N(W(this,"content"),a))&&Lj(a,Vj(c)),dO(this,d,c))};
function dO(a,b,c){var d=W(a,"menu-item-selected");a=fj(d,b);A(a,function(e){gn(e,d)});
P(c.parentNode,d)}
function UN(a,b){if(!b.widgetMenu){var c=a.aa(b,"button-menu-id");c=c&&M(c);var d=W(a,"menu");c?fn(c,[d,W(a,"menu-external")]):c=N(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return O(a,W(this,"toggled"))};
h.toggle=function(a){if(this.aa(a,"button-toggle")){var b=ak(a,W(this,"group")),c=W(this,"toggled"),d=O(a,c);if(b&&this.aa(b,"button-toggle-group")){var e=this.aa(b,"button-toggle-group");b=fj(W(this),b);A(b,function(f){f!=a||"optional"==e&&d?(gn(f,c),f.removeAttribute("aria-pressed")):(P(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),ln(a,c)}};
h.click=function(a){if(UN(this,a)){var b=UN(this,a);if(b){var c=WN(this,b);c&&c!=a?(ZN(this,c),rK(w(this.Bn,this,a),1)):BN(b)?ZN(this,a):this.Bn(a)}a.focus()}this.Jc(a,"button-action")};
function TN(a){a.g&&ZN(a,a.g)}
;function eO(a){ON.call(this,a);this.l=null}
z(eO,ON);h=eO.prototype;h.Na=function(a){var b=ON.prototype.Na.call(this,a);return b?b:a};
h.register=function(){this.wb("yt-uix-kbd-nav-move-out-done",this.hide)};
h.dispose=function(){fO(this);eO.J.dispose.call(this)};
h.aa=function(a,b){var c=eO.J.aa.call(this,a,b);return c?c:(c=eO.J.aa.call(this,a,"card-config"))&&(c=u(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.Na(a);if(b){P(b,W(this,"active"));var c=gO(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;hO(this,a,c);var d=W(this,"card-visible"),e=this.aa(a,"card-delegate-show")&&this.aa(b,"card-action");this.Jc(b,"card-action",a);this.l=a;FN(c);rK(w(function(){e||(EN(c),BK("yt-uix-card-show",b,a,c));iO(c);P(c,d);BK("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function gO(a,b,c){var d=c||b,e=W(a,"card");c=jO(a,d);var f=M(W(a,"card")+WK(d));if(f)return a=N(W(a,"card-body"),f),Ij(a,c)||(Bj(c),a.appendChild(c)),f;f=document.createElement("div");f.id=W(a,"card")+WK(d);en(f,e);(d=a.aa(d,"card-class"))&&fn(f,d.split(/\s+/));d=document.createElement("div");d.className=W(a,"card-border");b=a.aa(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
W(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Bj(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function hO(a,b,c){var d=a.aa(b,"orientation")||"horizontal";var e=N(W(a,"anchor"),b)||b;var f=a.aa(b,"position"),g=!!a.aa(b,"force-position"),k=a.aa(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var n=13;var t=8}else m&&!l?(n=12,t=9):!m&&l?(n=9,t=12):(n=8,t=13);var r=Gm(document.body);f=Gm(b);r!=f&&(n^=4);if(d){f=b.offsetHeight/2-12;var v=new Ti(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,v=new Ti(b.offsetWidth+6,-12);
var B=xm(c);f=Math.min(f,(d?B.height:B.width)-24-6);6>f&&(f=6,d?v.y+=12-b.offsetHeight/2:v.x+=12-b.offsetWidth/2);B=null;g||(B=10);b=W(a,"card-flip");a=W(a,"card-reverse");jn(c,b,m);jn(c,a,l);B=Zm(e,n,c,t,v,null,B);!g&&B&&(B&48&&(m=!m,n^=4,t^=4),B&192&&(l=!l,n^=1,t^=1),jn(c,b,m),jn(c,a,l),Zm(e,n,c,t,v));k&&(e=parseInt(c.style.top,10),g=mj(document).y,bm(c,"position","fixed"),bm(c,"top",e-g+"px"));r&&(c.style.right="",e=ym(c),e.left=e.left||parseInt(c.style.left,10),g=jj(),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=N("yt-uix-card-body-arrow",c);g=N("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!r&&m||r&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=N("yt-uix-card-arrow",c);m=N("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?xm(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
h.hide=function(a){if(a=this.Na(a)){var b=M(W(this,"card")+WK(a));b&&(gn(a,W(this,"active")),gn(b,W(this,"card-visible")),FN(b),this.l=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Bj(b.cardMask),b.cardMask=null))}};
function fO(a){a.l&&a.hide(a.l)}
h.kw=function(a,b){var c=this.Na(a);if(c){if(b){var d=jO(this,c);if(!d)return;b instanceof Fd?ae(d,b):Lj(d,b)}O(c,W(this,"active"))&&(c=gO(this,a,c),hO(this,a,c),EN(c),iO(c))}};
h.isActive=function(a){return(a=this.Na(a))?O(a,W(this,"active")):!1};
function jO(a,b){var c=b.cardContentNode;if(!c){var d=W(a,"content"),e=W(a,"card-content");(c=(c=a.aa(b,"card-id"))?M(c):N(d,b))||(c=document.createElement("div"));var f=c;gn(f,d);P(f,e);b.cardContentNode=c}return c}
function iO(a){var b=a.cardMask;b||(b=uj("IFRAME"),b.src='javascript:""',fn(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function kO(){ON.call(this,"kbd-nav")}
var lO;z(kO,ON);Ka(kO);h=kO.prototype;h.register=function(){PN(this,"keydown",this.En);this.wb("yt-uix-kbd-nav-move-in",this.pm);this.wb("yt-uix-kbd-nav-move-in-to",this.Jr);this.wb("yt-uix-kbd-move-next",this.qm);this.wb("yt-uix-kbd-nav-move-to",this.dg)};
h.unregister=function(){QN(this,"keydown",this.En);nL(lO)};
h.En=function(a,b,c){var d=c.keyCode;if(a=ak(a,W(this)))switch(d){case 13:case 32:this.pm(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=oq(a,"kbdNavMoveOut");!c;){c=ak(a.parentElement,W(this));if(!c)break a;c=oq(c,"kbdNavMoveOut")}c=M(c);this.dg(c);BK("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&O(a,W(this,"list")))switch(d){case 40:this.qm(b,a);break;case 38:d=document.activeElement==a,a=mO(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),nO(this,a[b]))}c.preventDefault()}};
h.pm=function(a){var b=oq(a,"kbdNavMoveIn");b=M(b);oO(this,a,b);this.dg(b)};
h.Jr=function(a){oO(this,bk(document),a);this.dg(a)};
h.dg=function(a){if(a)if(Uj(a))a.focus();else{var b=Mj(a,function(c){return Gj(c)?Uj(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function oO(a,b,c){if(b&&c)if(P(c,W(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,nq&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+we("kbdNavMoveOut"),b)}}
h.qm=function(a,b){var c=document.activeElement==b,d=mO(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),nO(this,d[c]))};
function nO(a,b){if(b){var c=Yj(b,"LI");c&&(P(c,W(a,"highlight")),lO=U(b,"blur",w(function(d){gn(d,W(this,"highlight"));nL(lO)},a,c)))}}
function mO(a){if("UL"!=a.tagName.toUpperCase())return[];a=eb(Cj(a),function(b){return"LI"==b.tagName.toUpperCase()});
return eb(fb(a,function(b){return BN(b)?Mj(b,function(c){return Gj(c)?Uj(c):!1}):!1}),function(b){return!!b})}
;function pO(){ON.call(this,"menu");this.j=this.g=null;this.l={};this.C={};this.A=null}
z(pO,ON);Ka(pO);function qO(a){return(a=rO(a))?sO(pO.V(),a):null}
function rO(a){var b=pO.V();if(O(a,W(b)))return a;var c=b.Na(a);return c?c:ak(a,W(b,"content"))==b.g?b.j:null}
h=pO.prototype;h.register=function(){PN(this,"click",this.Gn);PN(this,"mouseenter",this.oq);this.wb("page-scroll",this.Aq);this.wb("yt-uix-kbd-nav-move-out-done",function(a){a=this.Na(a);tO(this,a)});
this.A=new qH};
h.unregister=function(){QN(this,"click",this.Gn);this.j=this.g=null;nL(Hb(Sb(this.l)));this.l={};Nb(this.C,function(a){Bj(a)},this);
this.C={};Th(this.A);this.A=null;pO.J.unregister.call(this)};
h.Gn=function(a,b,c){a&&(b=uO(this,a),!b.disabled&&$K(c.target,b)&&vO(this,a))};
h.oq=function(a,b,c){a&&O(a,W(this,"hover"))&&(b=uO(this,a),$K(c.target,b)&&vO(this,a,!0))};
h.Aq=function(){this.g&&this.j&&wO(this,this.j,this.g)};
function wO(a,b,c){var d=xO(a,b);d&&vm(d,xm(c));if(c==a.g){var e=9,f=8;O(b,W(a,"reversed"))&&(e^=1,f^=1);O(b,W(a,"flipped"))&&(e^=4,f^=4);a=new Ti(0,1);d&&Zm(b,e,d,f,a,null,197);Zm(b,e,c,f,a,null,197)}}
function vO(a,b,c){yO(a,b)&&!c?tO(a,b):(zO(a,b),!a.g||$K(b,a.g)?a.Hn(b):rH(a.A,w(a.Hn,a,b)))}
h.Hn=function(a){if(a){var b=sO(this,a);if(b){CK("yt-uix-menu-before-show",a,b);if(this.g)$K(a,this.g)||tO(this,this.j);else{this.j=a;this.g=b;O(a,W(this,"sibling-content"))||(Bj(b),document.body.appendChild(b));var c=uO(this,a).offsetWidth-2;b.style.minWidth=c+"px"}(c=xO(this,a))&&zj(c,b);gn(b,W(this,"content-hidden"));wO(this,a,b);fn(uO(this,a),[W(this,"trigger-selected"),"yt-uix-button-toggled"]);BK("yt-uix-menu-show",a);AO(0,b);BO(this,a);BK("yt-uix-kbd-nav-move-in-to",b);var d=w(this.ow,this,
a),e=w(this.Cr,this,a);c=Pa(a).toString();this.l[c]=[U(b,"click",e),U(document,"click",d)];O(a,W(this,"indicate-selected"))&&(d=w(this.Dr,this,a),this.l[c].push(U(b,"click",d)));O(a,W(this,"hover"))&&(a=w(this.pq,this,a),this.l[c].push(U(document,"mousemove",a)))}}};
h.pq=function(a,b){var c=oL(b);if(c){var d=uO(this,a);$K(c,d)||CO(this,c)||DO(this,a)}};
h.ow=function(a,b){var c=oL(b);if(c){if(CO(this,c)){var d=ak(c,W(this,"content")),e=Yj(c,"LI");e&&d&&Ij(d,e)&&CK("yt-uix-menu-item-clicked",c);c=ak(c,W(this,"close-on-select"));if(!c)return;d=rO(c)}tO(this,d||a)}};
function zO(a,b){if(b){var c=ak(b,W(a,"content"));c&&(c=fj(W(a),c),A(c,function(d){!$K(d,b)&&yO(this,d)&&DO(this,d)},a))}}
function tO(a,b){if(b){var c=[];c.push(b);var d=sO(a,b);d&&(d=fj(W(a),d),d=tb(d),c=c.concat(d),A(c,function(e){yO(this,e)&&DO(this,e)},a))}}
function DO(a,b){if(b){var c=sO(a,b);hn(uO(a,b),[W(a,"trigger-selected"),"yt-uix-button-toggled"]);P(c,W(a,"content-hidden"));var d=sO(a,b);d&&hj(d,{"aria-expanded":"false"});(d=xO(a,b))&&d.parentNode&&Bj(d);c&&c==a.g&&(a.j.appendChild(c),a.g=null,a.j=null,a.A&&a.A.ac("ROOT_MENU_REMOVED"));BK("yt-uix-menu-hide",b);c=Pa(b).toString();nL(a.l[c]);delete a.l[c]}}
h.Cr=function(a,b){var c=oL(b);c&&EO(this,a,c)};
h.Dr=function(a,b){var c=oL(b);if(c){var d=uO(this,a);if(d&&(c=Yj(c,"LI")))if(c=Vj(c).trim(),d.hasChildNodes()){var e=SN.V();(d=N(W(e,"content"),d))&&Lj(d,c)}else Lj(d,c)}};
function BO(a,b){var c=sO(a,b);if(c){A(c.children,function(e){"LI"==e.tagName&&hj(e,{role:"menuitem"})});
hj(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Pa(c),c.id=d);(c=uO(a,b))&&hj(c,{"aria-controls":d})}}
function EO(a,b,c){var d=sO(a,b);d&&O(b,W(a,"checked"))&&(a=Yj(c,"LI"))&&(a=N("yt-ui-menu-item-checked-hid",a))&&(d=fj("yt-ui-menu-item-checked",d),A(d,function(e){kn(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),kn(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function yO(a,b){var c=sO(a,b);return c?!O(c,W(a,"content-hidden")):!1}
function AO(a,b){var c=dj("UL",null,b);A(c,function(d){d.tabIndex=0;var e=kO.V();fn(d,[W(e),W(e,"list")])})}
function sO(a,b){var c=T(b,"menu-content-id");return c&&(c=M(c))?(fn(c,[W(a,"content"),W(a,"content-external")]),c):b==a.j?a.g:N(W(a,"content"),b)}
function xO(a,b){var c=Pa(b).toString(),d=a.C[c];if(!d){d=uj("IFRAME");d.src='javascript:""';var e=[W(a,"mask")];A(dn(b),function(f){e.push(f+"-mask")});
fn(d,e);a.C[c]=d}return d||null}
function uO(a,b){return N(W(a,"trigger"),b)}
function CO(a,b){return $K(b,a.g)||$K(b,a.j)}
;function FO(){eO.call(this,"clickcard");this.g={};this.j={}}
z(FO,eO);Ka(FO);h=FO.prototype;h.register=function(){FO.J.register.call(this);PN(this,"click",this.xk,"target");PN(this,"click",this.wk,"close")};
h.unregister=function(){FO.J.unregister.call(this);QN(this,"click",this.xk,"target");QN(this,"click",this.wk,"close");for(var a in this.g)nL(this.g[a]);this.g={};for(a in this.j)nL(this.j[a]);this.j={}};
h.xk=function(a,b,c){c.preventDefault();b=Yj(c.target,"button");b&&b.disabled||(a=(b=this.aa(a,"card-target"))?bj(document,b):a,b=this.Na(a),this.aa(b,"disabled")||(O(b,W(this,"active"))?(this.hide(a),gn(b,W(this,"active"))):(this.show(a),P(b,W(this,"active")))))};
h.show=function(a){FO.J.show.call(this,a);var b=this.Na(a),c=Pa(a).toString();if(!T(b,"click-outside-persists")){if(this.g[c])return;b=U(document,"click",w(this.yk,this,a));var d=U(window,"blur",w(this.yk,this,a));this.g[c]=[b,d]}a=U(window,"resize",w(this.kw,this,a,void 0));this.j[c]=a};
h.hide=function(a){FO.J.hide.call(this,a);a=Pa(a).toString();var b=this.g[a];b&&(nL(b),this.g[a]=null);if(b=this.j[a])nL(b),delete this.j[a]};
h.yk=function(a,b){var c="yt-uix"+(this.B?"-"+this.B:"")+"-card",d=null;b.target&&(d=ak(b.target,c)||ak(rO(b.target),c));(d=d||ak(document.activeElement,c)||(document.activeElement?ak(rO(document.activeElement),c):null))||this.hide(a)};
h.wk=function(a){(a=ak(a,W(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function GO(){eO.call(this,"hovercard")}
z(GO,eO);Ka(GO);h=GO.prototype;h.register=function(){PN(this,"mouseenter",this.lm,"target");PN(this,"mouseleave",this.nm,"target");PN(this,"mouseenter",this.mm,"card");PN(this,"mouseleave",this.om,"card")};
h.unregister=function(){QN(this,"mouseenter",this.lm,"target");QN(this,"mouseleave",this.nm,"target");QN(this,"mouseenter",this.mm,"card");QN(this,"mouseleave",this.om,"card")};
h.lm=function(a){if(HO!=a){HO&&(this.hide(HO),HO=null);var b=w(this.show,this,a),c=parseInt(this.aa(a,"delay-show"),10);b=rK(b,-1<c?c:200);QJ(a,"card-timer",b.toString());HO=a;a.alt&&(QJ(a,"card-alt",a.alt),a.alt="");a.title&&(QJ(a,"card-title",a.title),a.title="")}};
h.nm=function(a){var b=parseInt(this.aa(a,"card-timer"),10);tK(b);this.Na(a).isCardHidable=!0;b=parseInt(this.aa(a,"delay-hide"),10);b=-1<b?b:200;rK(w(this.Oq,this,a),b);if(b=this.aa(a,"card-alt"))a.alt=b;if(b=this.aa(a,"card-title"))a.title=b};
h.Oq=function(a){this.Na(a).isCardHidable&&(this.hide(a),HO=null)};
h.mm=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.om=function(a){a&&this.hide(a.cardTargetNode)};
var HO=null;function IO(a,b,c,d,e,f){this.g=a;this.F=null;this.l=N("yt-dialog-fg",this.g)||this.g;if(a=N("yt-dialog-title",this.l)){var g="yt-dialog-title-"+Pa(this.l);a.setAttribute("id",g);this.l.setAttribute("aria-labelledby",g)}this.l.setAttribute("tabindex","-1");this.K=N("yt-dialog-focus-trap",this.g);this.M=!1;this.A=new qH;this.D=[];this.D.push(pL(this.g,"click",w(this.As,this),"yt-dialog-dismiss"));this.D.push(U(this.K,"focus",w(this.Oo,this),!0));JO(this,"content");this.P=b;this.R=c;this.O=d;this.L=
e;this.S=f;this.C=this.B=null}
var KO={LOADING:"loading",kx:"content",ay:"working"};function LO(a,b,c,d){a.Pb()||a.A.subscribe((d?"pre-":"post-")+b,c)}
function JO(a,b){var c=N("yt-dialog-fg-content",a.g),d=[];Nb(KO,function(e){d.push("yt-dialog-show-"+e)});
hn(c,d);P(c,"yt-dialog-show-"+b)}
h=IO.prototype;
h.show=function(){if(!this.Pb()){this.F=document.activeElement;if(!this.O){this.j||(this.j=M("yt-dialog-bg"),this.j||(this.j=uj("div"),this.j.id="yt-dialog-bg",en(this.j,"yt-dialog-bg"),document.body.appendChild(this.j)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=kj(a).height,lj(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=b>a?b>e?
b:e:b<e?b:e}else c=0}this.j.style.height=c+"px";EN(this.j)}this.Sl();c=MO(this);NO(c);this.B=U(document,"keydown",w(this.qr,this));c=this.g;d=yK("player-added",this.Sl,this);QJ(c,"player-ready-pubsub-key",d);this.R&&(this.C=U(document,"click",w(this.Av,this)));EN(this.g);this.l.setAttribute("tabindex","0");OO(this);this.L||P(document.body,"yt-dialog-active");TN(SN.V());fO(FO.V());fO(GO.V());BK("yt-ui-dialog-show-complete",this)}};
function PO(){var a=fj("yt-dialog");return hb(a,function(b){return BN(b)})}
h.Sl=function(){if(!this.S){var a=this.g;jn(document.body,"hide-players",!0);a&&jn(a,"preserve-players",!0)}};
function MO(a){var b=dj("iframe",null,a.g);A(b,function(c){var d=T(c,"onload");d&&(d=u(d))&&U(c,"load",d);if(d=T(c,"src"))c.src=d},a);
return tb(b)}
function NO(a){A(document.getElementsByTagName("iframe"),function(b){-1==bb(a,b)&&P(b,"iframe-hid")})}
function QO(){var a=fj("iframe-hid");A(a,function(b){gn(b,"iframe-hid")})}
h.As=function(a){a=a.currentTarget;a.disabled||(a=T(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.Pb()){this.A.ac("pre-all");this.A.ac("pre-"+a);FN(this.g);fO(FO.V());fO(GO.V());this.l.setAttribute("tabindex","-1");PO()||(FN(this.j),this.L||gn(document.body,"yt-dialog-active"),eL(),QO());this.B&&(nL(this.B),this.B=null);this.C&&(nL(this.C),this.C=null);var b=this.g;if(b){var c=T(b,"player-ready-pubsub-key");c&&(AK(c),TJ(b,"player-ready-pubsub-key"))}this.A.ac("post-all");BK("yt-ui-dialog-hide-complete",this);"cancel"==a&&BK("yt-ui-dialog-cancelled",this);this.A&&
this.A.ac("post-"+a);this.F&&this.F.focus()}};
h.setTitle=function(a){Lj(N("yt-dialog-title",this.g),a)};
h.qr=function(a){rK(w(function(){this.P||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&O(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.Av=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.Pb=function(){return this.M};
h.dispose=function(){BN(this.g)&&this.dismiss("dispose");nL(this.D);this.D.length=0;rK(w(function(){this.F=null},this),0);
this.K=this.l=null;this.A.dispose();this.A=null;this.M=!0};
h.Oo=function(a){a.stopPropagation();OO(this)};
function OO(a){rK(w(function(){this.l&&this.l.focus()},a),0)}
q("yt.ui.Dialog",IO,void 0);function RO(a,b){var c=this;b=void 0===b?{}:b;this.Va=a;(this.A="https://"+document.location.hostname)&&"/"!=this.A.charAt(this.A.length-1)&&(this.A+="/");this.Ra=!!R("SHOW_BRAND_ACCOUNT_DIALOG",void 0);this.g=b;this.hb=[];this.R=[];this.wa={};this.U={apiKey:R("LINK_API_KEY",void 0),Pf:(R("SESSION_INDEX",void 0)||0).toString(),kj:R("LINK_OIS_DOMAIN",void 0),Th:!0};this.S={};this.F={faceit:"faceit.com",steam:"steamcommunity.com",supercell:"supercell.com",netease:"game.163.com",moonton:"mobilelegends.com",
pubgmobile:"pubgmobile.com",pubgpc:"pubg.com",epicgames:"epicgames.com",riotgames:"riotgames.com"};this.l=Object.keys(this.F).reduce(function(d,e){d[c.F[e]]=e;return d},{});
this.C="";this.j={};this.K={};this.D={};this.B={};this.O={};this.M={};this.P=this.L=null;SO(this)}
q("yt.sharing.AutoShare",RO,void 0);function SO(a){try{AN(function(){var e=window.gapi.config.update;e("googleapis.config/auth/useFirstPartyAuth",!0);e("googleapis.config/auth/useFirstPartyAuthV2",!0);e("client/cors",!0)})}catch(e){}var b={"yt-account-link-connect-dialog":a.j,
"yt-account-link-confirm-dialog":a.K,"yt-account-link-continue-dialog":a.D,"yt-account-unlink-dialog":a.B,"yt-account-unlink-confirm-dialog":a.M,"yt-brand-account-dialog":a.O},c={},d;for(d in a.F)c.Cb=d,Nb(b,function(e){return function(f,g){var k=N(g+" "+e.Cb);k&&(f[e.Cb]=new IO(k,!1,!0))}}(c)),a.B[c.Cb]&&(LO(a.B[c.Cb],"unlink",a.Dq.bind(a)),LO(a.B[c.Cb],"cancel",a.Fi.bind(a))),a.j[c.Cb]&&(LO(a.j[c.Cb],"link",a.Cl.bind(a)),LO(a.j[c.Cb],"continue",a.Ep.bind(a)),LO(a.j[c.Cb],"cancel",a.Fi.bind(a)),
LO(a.D[c.Cb],"link",a.Cl.bind(a)),LO(a.D[c.Cb],"cancel",a.Fi.bind(a))),c={Cb:c.Cb};
if(b=N("yt-account-link-error-dialog"))a.L=new IO(b,!1,!0);if(b=N("yt-account-unlink-error-dialog"))a.P=new IO(b,!1,!0)}
RO.prototype.qa=function(a){(a=this.wa[a.currentTarget.id])&&this.connectService(a.serviceName)};
RO.prototype.handleConnectService=RO.prototype.qa;RO.prototype.da=function(){TO(this)};
RO.prototype.doOnLoad=RO.prototype.da;RO.prototype.ja=function(a){this.hb.push(a)};
RO.prototype.addServiceChangedCallback=RO.prototype.ja;RO.prototype.hc=function(a){this.R.push(a)};
RO.prototype.addCanConnectCallback=RO.prototype.hc;RO.prototype.ma=function(){return this.g};
RO.prototype.getServiceInfo=RO.prototype.ma;RO.prototype.connectService=function(a){for(var b=ja(this.R),c=b.next();!c.done;c=b.next())if(c=c.value,!c(this,a))return;(b=this.F[a])&&this.j[a]&&UO(this,b)};
RO.prototype.connectService=RO.prototype.connectService;RO.prototype.connectServiceWithRedirect=function(a,b){var c=this,d=this.l[a]?a:this.F[a]||"";this.C=d;return Jk(VO(this,d,{Qe:"REDIRECT",Kc:void 0===b?"":b}).then(function(e){return"NEEDS_UI"===e.status?e.Wk(!0):e}).then(function(e){if("COMPLETE"===e.status){var f=oj().location;
var g=bd("#");f.replace(Yc(g))}else WO(c,d,"GAMING_ACCOUNT_LINK_ACTION_LINKING",e.code);return e}),function(e){WO(c,d,"GAMING_ACCOUNT_LINK_ACTION_LINKING",e)})};
RO.prototype.connectServiceWithRedirect=RO.prototype.connectServiceWithRedirect;function UO(a,b){if(XO(a,b,!0)){var c=a.l[b];a.C=b;if(a.Ra){var d=a.O;TO(a)}else a.g[c].is_connected?d=a.B:(a.S[b]=Jk(VO(a,b),function(e){WO(a,b,"GAMING_ACCOUNT_LINK_ACTION_LINKING",e)}),d=a.j);
d[c]&&d[c].show()}else a.L.show(),YO(b,"GAMING_ACCOUNT_LINK_ACTION_LINKING","GAMING_ACCOUNT_LINK_ACTION_STATUS_FAILED"),TO(a)}
h=RO.prototype;h.Ep=function(){var a=this,b=this.C,c=XO(this,b,!0);return Jk((c?ZO(c):xk()).then(function(){return a.D[a.l[b]].show()}),function(d){a.L.show();
WO(a,b,"GAMING_ACCOUNT_LINK_ACTION_LINKING",d)})};
h.Cl=function(){var a=this,b=this.C;YO(b,"GAMING_ACCOUNT_LINK_ACTION_LINKING","GAMING_ACCOUNT_LINK_ACTION_STATUS_STARTED");return Jk(this.S[b].then(function(c){if("NEEDS_UI"===c.status)return c.Wk(!1)}).then(function(){YO(b,"GAMING_ACCOUNT_LINK_ACTION_LINKING","GAMING_ACCOUNT_LINK_ACTION_STATUS_SUCCEEDED");
var c=a.l[b];a.g[c]&&(a.g[c].is_connected=!0);TO(a);a.K[c]&&a.K[c].show()}),function(c){a.L.show();
WO(a,b,"GAMING_ACCOUNT_LINK_ACTION_LINKING",c)})};
h.Dq=function(){var a=this,b=this.C,c=XO(this,b,!1);return Jk((c?ZO(c):xk()).then(function(){YO(b,"GAMING_ACCOUNT_LINK_ACTION_UNLINKING","GAMING_ACCOUNT_LINK_ACTION_STATUS_STARTED");return $O(new xr(a.U),b)}).then(function(){YO(b,"GAMING_ACCOUNT_LINK_ACTION_UNLINKING","GAMING_ACCOUNT_LINK_ACTION_STATUS_SUCCEEDED");
var d=a.l[b];a.g[d]&&(a.g[d].is_connected=!1);a.M[d]&&a.M[d].show();TO(a)}),function(d){a.P.show();
WO(a,b,"GAMING_ACCOUNT_LINK_ACTION_UNLINKING",d)})};
function $O(a,b){return zr(a,{serviceId:b}).then(function(c){c=c.map(function(d){return Ar(a,{accountId:d.accountId})});
return Ck(c)})}
h.Fi=function(){TO(this)};
function TO(a){for(var b=ja(a.hb),c=b.next();!c.done;c=b.next())c=c.value,c(a)}
function XO(a,b,c){return(a=a.g[a.l[b]])&&a[c?"link_feedback_endpoint":"unlink_feedback_endpoint"]}
function ZO(a){var b=Ek(),c=Oe("/service_ajax","name","feedbackEndpoint");sM(c,{method:"POST",ya:{sej:a},format:"RAW",onSuccess:function(d){b.resolve(d)},
onError:function(d){b.reject(d)}});
return b.g}
function YO(a,b,c){NM("gamingAccountLinkStatusChanged",{thirdPartyId:a,action:b,actionStatus:c})}
function WO(a,b,c,d){switch(d.code){case "INTERNAL_ERROR":case "INVALID_REQUEST":case "NETWORK_ERROR":case "TOKEN_ERROR":d="GAMING_ACCOUNT_LINK_ACTION_STATUS_FAILED";break;case "USER_CANCELLED":d="GAMING_ACCOUNT_LINK_ACTION_STATUS_USER_CANCELLED";break;default:d="GAMING_ACCOUNT_LINK_ACTION_STATUS_UNKNOWN"}YO(b,c,d);TO(a)}
function VO(a,b,c){c=void 0===c?{}:c;return yr(new xr(a.U),{passive:!1,serviceId:b,Qe:c.Qe,Kc:c.Kc})}
h.zo=function(a,b){var c=this,d={action_ajax_connect_service:1};d.session_token=this.Va;d.return_url=a;sM(this.A+"autoshare?ajax_connect_service",{format:"XML",method:"POST",postBody:Me(d),onSuccess:function(e,f){var g=JSON.parse(f.html_content);c.g=g;TO(c);b&&b()},
onError:function(){b&&b();TO(c)}})};
RO.prototype.connectServiceDone=RO.prototype.zo;function aP(a,b){this.g=a;this.C=b;this.B=N("social-network-username",a);this.j=T(a,"service-name")||"";pL(a,"click",w(function(){b.connectService(this.j)},this),"connect-to-network-publish");
b.addServiceChangedCallback(w(this.A,this));b.addCanConnectCallback(w(this.l,this))}
aP.prototype.l=function(a,b){b==this.j&&bP(this,"loading");return!0};
aP.prototype.A=function(){var a=this.C.getServiceInfo()[this.j];a&&(bP(this,a.is_connected?"connected":"not-connected"),jn(this.g,"sharing-enabled",a.is_connected&&a.is_autosharing),Lj(this.B,a.connected_as))};
function bP(a,b){var c=null,d=[],e;for(e in cP){var f=cP[e];b==f?c=f:d.push(f)}hn(a.g,d);c&&P(a.g,c)}
var cP={jx:"connected",Nx:"not-connected",LOADING:"loading"};var dP=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",dP,void 0);function S(a,b){b=void 0===b?{}:b;var c=a in dP?dP[a]:void 0;c=c||"";var d={},e;for(e in b){d.Je=e;var f=function(g){return function(){return String(b[g.Je])}}(d);
c=c.replace(new RegExp("\\$\\{"+d.Je+"\\}","gi"),f);c=c.replace(new RegExp("\\$"+d.Je,"gi"),f);d={Je:d.Je}}return c}
function eP(a,b){return fP(a in dP?dP[a]:{},b)}
function fP(a,b){var c=R("I18N_PLURAL_RULES");c||(c=function(d){return 1==d?"one":"other"});
return(c=a["case"+b]||a[c(b)])?c.replace("#",b.toString()):b+""}
y=function(a,b){b=void 0===b?{}:b;var c=a in dP?dP[a]:a,d={},e;for(e in b){d.Qd=e;var f=function(g){return function(){return String(b[g.Qd])}}(d);
c=c.replace(new RegExp("\\{\\$"+d.Qd+"\\}","gi"),f);c=c.replace(new RegExp("\\$\\{"+d.Qd+"\\}","gi"),f);c=c.replace(new RegExp("\\$"+d.Qd,"gi"),f);d={Qd:d.Qd}}return c};var gP={},hP=0;function iP(a,b){var c=void 0===c?"":c;a&&(c?tM(a,b,"POST",c,void 0):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?tM(a,b,"GET","",void 0):jP(a,b)||kP(a,b))}
function jP(a,b){if(!lK("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(lK("use_sonic_js_library_for_v4_support")){a:{try{var c=new ab({url:a});if(c.l&&c.j||c.A){var d=Be(Ce(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==Re(a,"ri"));break a}}catch(g){}e=!1}if(!e)return!1}else if(e=Be(Ce(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==Re(a,"ae")||"1"!==Re(a,"act"))return!1;a:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var f=!0;break a}}catch(g){}f=!1}return f?
(b&&b(),!0):!1}
function kP(a,b){var c=new Image,d=""+hP++;gP[d]=c;c.onload=c.onerror=function(){b&&gP[d]&&b();delete gP[d]};
c.src=a}
;function lP(a){this.j=a;this.B="/gen_204";this.j&&(this.B=this.j.B);this.l=[];this.j&&(this.l=this.j.l);this.g=new Wn;this.A=new Wn}
function mP(a){var b=new Wn;a.j&&(b=mP(a.j));Xn(b,a.g);a.A.forEach(function(c,d){b.set(d,x()-c)});
return b}
lP.prototype.send=function(a){var b=mP(this);a&&Xn(b,a);var c=new ph(this.B);for(a=0;a<this.l.length;a++){var d=this.l[a],e=b.get(d);void 0!==e&&vo(c,d,e.toString());b.remove(d)}b.forEach(function(f,g){vo(c,g,f.toString())});
iP(c.toString())};
function nP(){}
z(nP,lP);nP.prototype.send=function(){};
function oP(a){var b=pP.get(a);void 0===b&&(b=new lP,pP.set(a,b));return b}
var pP=new Wn;function qP(a,b,c){this.l=a;this.j=null;(a=b||null)||(a=rP(this.l));a=ge("__%s__","("+a.join("|")+")");this.j=new RegExp(a,"g");this.g=c||{}}
var sP=/__([a-z]+(?:_[a-z]+)*)__/g;function tP(a,b){var c=M(a);c=uP(c);return new qP(c,b,void 0)}
function uP(a){a=a.innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");return a=a.replace(/(\s*--\x3e)?\s*$/,"")}
function rP(a){var b=[],c={};a.replace(sP,function(d,e){e in c||(c[e]=!0,b.push(e))});
return b}
qP.prototype.za=function(a,b,c){var d=w(function(e,f){b&&(f=b(f));return c?a[f]||this.g[f]||"":le(a[f]||this.g[f]||"")},this);
return this.l.replace(this.j,d)};function vP(a){Object.assign(a,We());a.o=wP().o;return a}
function xP(){var a=Ve("/metadata_ajax?action_create_video=1");return Ue(a,"o",wP().o)}
function yP(a){var b=Ve("/metadata_ajax");b="U"==wP().o?Te(b,"o"):Ue(b,"o",wP().o);return Ue(b,"video_id",a)}
function We(){var a={};void 0!==(void 0!==wP().earst?zP():wP().ar)&&(a.ar=void 0!==wP().earst?zP():wP().ar);void 0!==wP().nv&&(a.nv=wP().nv);return a}
var AP=Date.now(),BP=Date.now();function zP(){var a=Date.now()-BP;a=AP+a;return""+(a-100*Math.floor(a%1E3/100)-1E5*Math.floor(a%1E6/1E5))}
function wP(){return R("CREATOR_CONTEXT",CP)}
var CP={o:"U"},DP=wP().earst;void 0!==DP&&(AP=DP,BP=Date.now());function EP(a,b){L.call(this);this.C=new lP(b);this.g=null;this.l=a;this.A={};this.B=null;this.j=R("timePublished",void 0)}
var FP;z(EP,L);function GP(a){J.call(this,"partial_change");this.g=a}
z(GP,J);var HP=["playlists_values"];h=EP.prototype;h.setVideoId=function(a){this.g=a;this.C.g.set("fn",this.g);this.dispatchEvent("change")};
function IP(a,b){var c=a.l.get(b);return c?c.toString():""}
function JP(a,b,c,d){Array.isArray(c)||(c=[c]);Db(c,a.l.get(b))||(a.l.set(b,c),(void 0===d||d)&&a.dispatchEvent("change"))}
function KP(a,b){A(HP,function(c){b.set(c,[IP(this,c)])},a);
a.l=b;a.dispatchEvent("change")}
function LP(a,b){for(var c=a.l,d=[],e=b.Ga(),f=["video_item_id","video_url","playlist_item_id"],g,k=0;g=e[k];k++)if(!mb(f,g)){var l=c.get(g),m=b.get(g);Db(l,m)||d.push(g)}return d}
function MP(a,b,c){var d=NP;b=new OP(b);var e=w(a.Pv,a);b.g.push(e);e=w(a.Qv,a);b.g.push(e);a=w(a.yo,a,c);b.l=a;d(b)}
function OP(a){this.j=a;this.g=[];this.l=null}
function NP(a){var b=new An,c=[];a.g[0](a.j,b);for(var d=1;d<a.g.length;d++){var e=new An;Gn(b,w(function(f,g,k){ub(c,k);this.g[f](this.j,g)},a,d,e));
b=e}Gn(b,w(function(f){ub(c,f);this.l(this.j,c)},a))}
h.Qv=function(a,b){var c=LP(this,a);this.B&&mb(c,"playlists_values")?(c=w(this.Eu,this,a,b),this.B.save(c,c)):b.Ea([])};
h.Eu=function(a,b){JP(this,"playlists_values",a.get("playlists_values"));b.Ea([])};
h.Pv=function(a,b){a=a.clone();var c=eb(LP(this,a),function(f){return!mb(HP,f)});
if(c.length){PP(a);var d=Bo(a.g);d.add("modified_fields",c);var e="";this.g?(d.add("video_id",this.g),e="/metadata_ajax?action_edit_video=1"):e=xP();sM(e,{method:"POST",postBody:d.toString(),Fa:w(this.yq,this,a,b)});Uk(function(){var f=new Wn;c.length&&f.set("mf",c.join(","));QP(this,"multi_up_smd",f)},0,this)}else b.Ea([])};
h.yq=function(a,b,c){if(500==c.status){c=RP(c.responseText);var d="";c&&(d=tP("expandable-error-detail").za({details:c}));c=S("SERVER_ERROR_TRY_AGAIN");b.Ea([{message:c+d}])}else{try{d=JSON.parse(c.responseText)}catch(f){b.Ea([{message:"Unknown error"}]);return}var e=d.metadata_errors||[];d.video_id&&!this.g&&this.setVideoId(d.video_id);d.watch_url&&(this.A.watchUrl=d.watch_url,c=document.querySelector(".video-url-input-field"))&&(c.value=d.watch_url);e&&e.length?a&&(d=eb(["ypps_rating","thumbnail_preview_version"],
function(f){return SP(this,a,e,f)},this),d.length&&this.dispatchEvent(new GP(d))):KP(this,a);
b.Ea(e)}};
function SP(a,b,c,d){return b?b.get(d)&&0==eb(c,function(e){return!e.field||e.field==d}).length?(JP(a,d,b.get(d),!1),!0):!1:!1}
h.yo=function(a,b,c){if(c&&c.length){var d=new Wn;d.set("e",c[0].message);b&&d.set("ms",b.toString());QP(this,"multi_up_smd_error",d);a(!1,c)}else a(!0)};
function RP(a){var b=a.match(/!--([\s\S]*)--\x3e\n$/);return b?b[1]:(b=a.match(/<pre>([^<]*)<\/pre>/m))?b[1]:""}
function QP(a,b,c){c=c||new Wn;c.set("a",b);c.set("tspi",x()-FP);a.C.send(c)}
function TP(a){this.g=a}
h=TP.prototype;h.get=function(a){return this.g.get(a)||[]};
h.set=function(a,b){this.g.set(a,b)};
h.has=function(a){return Zn(this.g.j,a)&&this.g.get(a).length};
h.Ga=function(){return this.g.Ga()};
function PP(a){A(HP,function(b){this.g.remove(b)},a)}
h.clone=function(){return new TP(this.g.clone())};
function UP(a,b){for(var c=hG(a),d=a.elements,e,f=0;e=d.item(f);f++)O(e,"mde-checkbox")&&!e.disabled&&c.set(e.name,[e.checked?"yes":"no"]);if(b)for(f=0;e=a.elements.item(f);f++)e.disabled||(d=e)&&(d.dataset?RJ("initial-value")in d.dataset:d.hasAttribute?d.hasAttribute("data-initial-value"):d.getAttribute("data-initial-value"))&&c.set(e.name,[T(e,"initial-value")]);c.remove("");return new TP(c)}
;function VP(a){a=a||R("LOCAL_DATE_TIME_CONFIG");return{Jf:a.months,Td:a.months,Kf:a.shortMonths,Gh:a.shortMonths,Ic:a.dateFormats,Ih:a.weekdays,bk:a.shortMonths,Fh:a.shortWeekdays,Hh:a.shortWeekdays,Jh:a.weekendRange,Ke:a.firstDayOfWeek,Le:a.firstWeekCutoffDay,Eh:a.amPms}}
;function WP(){ON.call(this,"form-input")}
z(WP,ON);Ka(WP);h=WP.prototype;
h.register=function(){C&&!Jf(9)&&(PN(this,"click",this.cc,"checkbox"),PN(this,"keypressed",this.cc,"checkbox"),PN(this,"click",this.gh,"radio"),PN(this,"keypressed",this.gh,"radio"));C&&!Jf(10)&&PN(this,"click",this.Jl,"placeholder");PN(this,"change",this.cc,"checkbox");PN(this,"blur",this.pk,"select-element");PN(this,"change",this.zb,"select-element");PN(this,"keyup",this.zb,"select-element");PN(this,"focus",this.Sk,"select-element");PN(this,"keyup",this.Gd,"text");PN(this,"keyup",this.Gd,"textarea");
PN(this,"keyup",this.Gd,"bidi");PN(this,"click",this.wq,"reset")};
h.unregister=function(){C&&!Jf(9)&&(QN(this,"click",this.cc,"checkbox"),QN(this,"keypressed",this.cc,"checkbox"),QN(this,"click",this.gh,"radio"),QN(this,"keypressed",this.gh,"radio"));C&&!Jf(10)&&QN(this,"click",this.Jl,"placeholder");QN(this,"change",this.cc,"checkbox");QN(this,"blur",this.pk,"select-element");QN(this,"change",this.zb,"select-element");QN(this,"keyup",this.zb,"select-element");QN(this,"focus",this.Sk,"select-element");QN(this,"keyup",this.Gd,"text");QN(this,"keyup",this.Gd,"textarea");
QN(this,"keyup",this.Gd,"bidi");WP.J.unregister.call(this)};
h.cc=function(a){var b=ak(a,W(this,"checkbox-container"));a.checked&&O(b,"partial")&&(a.checked=!1,a.indeterminate=!1,gn(b,"partial"));jn(b,"checked",a.checked)};
h.Um=function(a){var b=ak(a,W(this,"radio-container"));b&&jn(b,"checked",a.checked)};
h.gh=function(){XP()};
h.Gd=function(a){var b=a.value;sc.test(b)?a.dir="rtl":rc.test(b)?a.dir="ltr":a.removeAttribute("dir");C&&!Jf(10)&&(b=ak(a,W(this,"container")))&&jn(b,W(this,"non-empty"),!!a.value)};
h.Jl=function(a){(a=ak(a,W(this,"container")))&&(a=N(W(this,"text"),a)||N(W(this,"textarea"),a))&&a.focus()};
h.Sk=function(a){var b=ak(a,W(this,"select"));P(b,"focused");this.zb(a)};
h.pk=function(a){var b=ak(a,W(this,"select"));gn(b,"focused");this.zb(a)};
h.zb=function(a){var b=ak(a,W(this,"select")),c=N(W(this,"select-value"),b),d=YP(a);if(d)for(""!=c.innerHTML&&d.innerHTML!=c.innerHTML&&this.Jc(a,"onchange-callback"),d=YK(d),xj(c);0<d.childNodes.length;)c.appendChild(d.childNodes[0]);jn(b,W(this,"select-disabled"),a.disabled)};
h.wq=function(){ZP();XP();$P()};
function YP(a){return a.options[Math.max(a.selectedIndex,0)]}
function aQ(a){return(a=YP(a))?a.value||a.text:null}
function ZP(){var a=WP.V(),b=fj(W(a,"checkbox"));A(b,a.cc,a)}
function XP(){var a=WP.V(),b=fj(W(a,"radio"));A(b,a.Um,a)}
function $P(){var a=WP.V(),b=fj(W(a,"select-element"));A(b,a.zb,a)}
;function bQ(a,b,c){XI.call(this);cJ(this,a);YI(this,b);aJ(this,c);this.gi=w(this.Zd,this)}
z(bQ,XI);bQ.prototype.Zd=function(a){return 0>Kl(a,new Hl)?"yt-upload-datepicker-disabled-date":""};
bQ.prototype.setDate=function(a){!a||0>Kl(a,new Hl)||bQ.J.setDate.call(this,a)};function cQ(a){L.call(this);this.A=new YG(2);this.l=new PG(2);this.j=new bQ(!1,!0,!1);this.B=new oJ(this.l,this.A,this.j);this.C=a;this.g=null}
var dQ;z(cQ,L);
function eQ(a,b){a.g=b;var c=new CH;c.Sa(fQ(a,"publish-date-formatted"));a.B.Sa(c.H());K(a.j,"select",a.F,!1,a);if(c=fQ(a,"publish-local-timezone")){var d="(GMT"+(new PG("Z")).format(new Date)+") "+Vj(c);Lj(c,d)}var e=fQ(a,"publish_time_value").value;c=fQ(a,"publish_timezone_value").value;if(a.g){fQ(a,"publish_time_value").value=e;fQ(a,"publish_timezone_value").value=c;d="UTC"==c;var f=new Date(Ml(e+"Z"));a.j.setDate(f);e=fQ(a,"publish-time-formatted");e.value=d?60*f.getHours()+f.getMinutes():60*
f.getUTCHours()+f.getUTCMinutes();f=e.value;for(var g=e.options,k=g.length-1;0<=k;k--){var l=parseInt(g[k].value,10)||0;l%15&&l!=f&&Bj(g[k])}WP.V().zb(e);e=fQ(a,"publish-timezone-formatted");e.value=d?"Etc/Unknown":c;"SELECT"==e.tagName&&WP.V().zb(e)}}
function gQ(a){var b=new Date;a.A.parse(fQ(a,"publish-date-formatted").value,b);a=fQ(a,"publish-time-formatted").value;b.setHours(a/60);b.setMinutes(a%60);b.setSeconds(0);return b}
cQ.prototype.F=function(a){a.date&&(qJ(this.B,a.date?this.l.format(a.date):""),this.dispatchEvent("change"))};
function fQ(a,b){return dj(null,b,a.g)[0]}
;function hQ(a,b,c,d){this.A=null;this.j=a;this.g=b;this.B=c;this.l=d}
hQ.prototype.getId=function(){return CG("%s.%s",this.j,this.g)};function iQ(a,b,c){J.call(this,a,c);this.item=b}
z(iQ,J);function jQ(a,b,c,d,e){iQ.call(this,"E",a,e);this.message=b;this.level=c;this.g=d}
z(jQ,iQ);function kQ(a,b,c){iQ.call(this,"F",a,c);this.message=b}
z(kQ,iQ);function lQ(a,b,c){J.call(this,a,c);this.C=b}
z(lQ,J);function mQ(){L.call(this);this.j=R("VIDEO_IMPORTER_ONE_PICK_USER_ID",void 0);this.A=R("frontendUploadIdBase",void 0);this.g=oP("gplus_importer");this.g.g.set("session_id",this.A);this.g.g.set("page",R("DELEGATED_SESSION_ID")?1:0);this.l=M("gplus-importer-limit-exceeded-alert");A(fj("gplus-importer-onepick-button"),function(c){K(c,"click",w(function(){this.l&&FN(this.l);this.B.Ta(!0);R("VIDEO_IMPORTER_ENABLE_INSTRUMENTATION")&&rK(w(function(){this.g.send({importer_click:1})},this),0)},this))},this);
var a=NB(NB(NB(NB(OB(Uy(KB(),w(this.Il,this))),"mineOnly"),"multiselectEnabled"),"shadeDialog"),"horizNav");!R("VIDEO_IMPORTER_SHOW_MANAGER_VIDEOS")&&this.j&&a.g.set("groupId",this.j);var b=R("VIDEO_IMPORTER_IMPORT_LIMIT");b&&a.g.set("maxItems",b);R("VIDEO_IMPORTER_ONE_PICK_ENABLE_DRIVE_TAB")&&Ty(a,mB());this.B=LB(a)}
z(mQ,L);h=mQ.prototype;h.uq=function(a){this.Il(a)};
h.Il=function(a){R("VIDEO_IMPORTER_ENABLE_INSTRUMENTATION")&&rK(w(this.Vv,this,a),0);"picked"==a.action&&(a=fb(a.docs,function(b){return"album"==b.type?fb(b.children,function(c){return nQ(c)},this):nQ(b)},this),a=Hb(a),R("VIDEO_IMPORTER_IMPORT_LIMIT")&&a.length>R("VIDEO_IMPORTER_IMPORT_LIMIT",void 0)?this.l&&EN(this.l):(a=eb(a,function(b){return null!=b}),A(a,function(b){this.dispatchEvent(new lQ("G",b))},this),oQ(this,a)))};
function nQ(a){if("video"==a.type){if("picasa"==a.serviceId)return new hQ("photos",a.id,a.name,pQ(a));a:switch(a.serviceId){case "docs":case "DoclistBlob":case "doc":case "drawing":case "drive":case "drive-select":case "form":case "freebird":case "kix":case "pres":case "punch":case "ritz":case "spread":var b=!0;break a;default:b=!1}if(b)return new hQ("drive",a.id,a.name,pQ(a))}return null}
function pQ(a){if(!Array.isArray(a.thumbnails))return null;for(var b=0;b<a.thumbnails.length;b++){var c=a.thumbnails[b];if(196<=c.width)return c.url.replace(/s([0-9]{3})/,"s$1-no")}return null}
h.Ot=function(a,b,c){a=fb(a,function(d){return d.getId()in c.item_status?(c.item_status[d.getId()]?this.dispatchEvent(new lQ("H",d)):this.dispatchEvent(new lQ("I",d)),null):d},this);
a=eb(a,function(d){return null!=d})};
h.Pt=function(a){A(a,function(b){this.dispatchEvent(new lQ("I",b))},this)};
function oQ(a,b){var c=fb(b,function(e){if(!e)return null;var f={feedback_key:e.A,id:e.getId()};return"photos"==e.j?(f.service="PHOTOS",f.photo_id=e.g,this.j&&(f.photo_user_id=this.j),f):"drive"==e.j?(f.service="DRIVE",f.drive_id=e.g,this.j&&(f.drive_user_id=this.j),f):null},a);
c=eb(c,function(e){return null!=e});
if(!(1>c.length)){var d={action_import:1};R("VIDEO_IMPORTER_ENABLE_INSTRUMENTATION")&&(d.session_id=a.A,d.item_count=c.length);c={import_items:cr(c)};sM("/video_importer_ajax",{method:"POST",Ua:d,ya:c,onSuccess:w(a.Ot,a,b),onError:w(a.Pt,a,b)})}}
h.Vv=function(a){"loaded"==a.action&&this.g.send({importer_loaded:1});"cancel"==a.action&&this.g.send({importer_cancel:1});"received"==a.action&&this.g.send({importer_received:1,item_count:a.docs.length,view:a.view});"viewContentRendered"==a.action&&this.g.send({importer_rendered:1});"picked"==a.action&&this.g.send({importer_picked:1,item_count:a.docs.length,view:a.view})};function qQ(a,b,c,d){this.A=a;this.j=b;this.l=c;this.g=d}
qQ.prototype.send=function(a,b,c){a={action_report:1,event_type:a,frontend_id:this.A,version:1};b&&ec(a,b);this.j&&(a.transfer_id=this.j);this.l&&(a.video_id=this.l);this.g&&(a.filename=this.g);b=Ua(sM,"/yummy_ajax",{method:"POST",ya:a});c?b():rK(b,0)};
function rQ(a,b,c){var d=!1;switch(b){case "CANCEL_BUTTON_CLICKED":b="UPLOAD_CANCEL_BUTTON";break;case "CANCEL_APP_CLOSED":b="UPLOAD_CANCEL_APP_CLOSE";d=!0;break;default:b="UPLOAD_CANCEL_GENERIC"}a.send(b,{bytes_sent:c},d)}
function sQ(a,b){a.send("UPLOAD_MESSAGE",{upload_message_key:b})}
;function tQ(a,b,c){a=("https:"==document.location.protocol?"https://":"http://")+"fls.doubleclick.net/activityi;src="+je(R("DBLCLK_ADVERTISER_ID"))+";type="+je(a)+";cat="+je(b);c&&!c.ord&&(a+=";ord=1");for(var d in c)a+=";"+je(d)+"="+je(c[d]);a+=";num="+x();c=uj("IFRAME");c.src=a;c.style.display="none";document.body.appendChild(c)}
;function uQ(a,b){var c={};b&&(c.v=b);var d={name:a,locale:void 0,feature:void 0},e;for(e in c)d[e]=c[e];c=Ne("/sharing_services",d);iP(c)}
;function vQ(){ON.call(this,"gen204")}
z(vQ,ON);Ka(vQ);vQ.prototype.register=function(){PN(this,"click",this.g)};
vQ.prototype.unregister=function(){QN(this,"click",this.g);vQ.J.unregister.call(this)};
vQ.prototype.g=function(a){a=T(a,"gen204");a=ZL(a||"");Xb(a)||(a=Me(a),iP("/gen_204?"+a,void 0))};var wQ=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",wQ,void 0);function xQ(a){a=a.V();var b=W(a);b in wQ||(a.register(),a.wb("yt-uix-init-"+b,a.init),a.wb("yt-uix-dispose-"+b,a.dispose),wQ[b]=a)}
;function yQ(a,b,c){J.call(this,a,c);this.payload=b||null}
z(yQ,J);function zQ(a,b){this.g=a;this.j=b}
zQ.prototype.getId=function(){return this.j};
zQ.prototype.toString=function(){return this.g+"::"+this.j};function AQ(a){L.call(this);this.A=new nP;this.l=new du;this.g=null;this.j=a}
z(AQ,L);function BQ(a,b){a.j.Ln(a,b)}
function CQ(a,b){a.j.Dh(a,b)}
AQ.prototype.stop=function(){this.j.Dh(this)};
function DQ(a,b,c){if(!a.l.contains(b)){a.l.add(b);var d=new Wn;d.set("a","feedback_service");d.set("fty",b);a.A.send(d)}d=null;switch(b){case "video_id":d="J";break;case "video_info2":d="K";break;case "video_issues":d="L";break;case "processing_progress":d="M";break;case "processing_done":d="N";break;case "youtube_status":d="O";break;case "thumbnails_done":d="P";break;case "editor_suggestions":d="Q";break;case "editor_progress":d="R"}d&&a.dispatchEvent(new yQ(d,c))}
;function EQ(){var a=R("apiaryFeedbackUrls"),b=R("apiaryFeedbackClientIds").web_uploads.split(":");this.C={name:b[0],version:b[1],token:b[2]};this.A=a;this.j=null;Nb(this.A,function(){});
a=void 0;a=new Tk(2E3),a.start();this.ea=a;K(this.ea,"tick",this.zw,!1,this);this.g={};this.l=0;this.B=new gw(2E3,6E4)}
function FQ(a,b){this.type=a;this.item=b}
function GQ(a){var b=a.B.g*(Math.random()+.5);a.j=x()+b;hw(a.B)}
h=EQ.prototype;h.Ln=function(a,b){var c=a.g;c&&(c in this.g||(this.g[c]=[]),this.g[c].push(new FQ(b,a)),HQ(this))};
h.Dh=function(a,b){var c=a.g;if(c){var d=this.g[c];d&&(d=eb(d,function(e){return e.item!=a||void 0!==b&&b!=e.type}),0==d.length?delete this.g[c]:this.g[c]=d,HQ(this))}};
function HQ(a){var b=new Set;for(c in a.g)A(a.g[c],function(d){b.add(d.type)});
var c=1==b.size&&b.has("editor_suggestions")?1E4:2E3;c!=a.ea.g&&a.ea.setInterval(c)}
h.Sj=function(){return new AQ(this)};
h.zw=function(){if(!Xb(this.g))if(this.l)2E3<=x()-this.l&&(GQ(this),this.l=0);else if(!this.j||this.j<x()){a:{var a=0;var b=Math.random(),c;for(c in this.A)if(a+=this.A[c],a>b){a=c+"/list";break a}a=""}b={client:this.C,queries:[]};for(d in this.g)b.queries.push(IQ(this.g[d]));var d=cr(b);sM(a,{postBody:d,onSuccess:w(this.yw,this),onError:w(this.xw,this),method:"POST",headers:{"Content-Type":"application/json"}});this.l=x()}};
function IQ(a){var b={id:{},choice:{}},c=Rb(a),d=JQ(c.item.g.g);b.id[d]=c.item.g.getId();A(a,function(e){c.item.g.getId();e.item.g.getId();e=JQ(e.type);b.choice[e]=!0});
return b}
h.xw=function(a){500!=a.status&&503!=a.status||GQ(this)};
h.yw=function(a,b){this.l=0;if(!this.j||this.j<x())this.B.reset(),this.j=null;b&&b.items&&304!=a.status&&A(b.items,w(this.Lp,this))};
function JQ(a){return a.replace(/_([a-z])/g,function(b,c){return c.toUpperCase()})}
h.Lp=function(a){if(a.id&&a.feedback){var b=a.id,c=null;Oa(b)?Nb(b,function(d,e){var f=e.replace(/([A-Z])/g,"_$1").toLowerCase();c=new zQ(f,d)}):c=new zQ("upload_id",b);
Nb(this.g[c],function(d){var e=JQ(d.type);(e=a.feedback[e])&&DQ(d.item,d.type,e)})}};function KQ(){this.ea=null;this.j=x();this.l=!1;this.g=new Wn;this.A=new gw(2E3,6E4);this.B=new MM(void 0)}
z(KQ,I);h=KQ.prototype;h.Ln=function(a){var b=a.g.getId();Zn(this.g.j,b)||(this.g.set(b,new LQ(a)),MQ(this))};
h.Dh=function(a,b){if(!b){var c=a.g.getId();this.g.remove(c);MQ(this)}};
h.N=function(){KQ.J.N.call(this);Vk(this.ea);this.ea=null};
h.Sj=function(){return new AQ(this)};
function MQ(a){if(!a.l){Vk(a.ea);a.ea=null;var b=NQ(a);null!==b&&(b=Math.max(b,a.j),OQ(a,b))}}
function NQ(a){var b=null;a.g.forEach(function(c){b=null!==b?Math.min(b,c.g):c.g});
return b}
function OQ(a,b){var c=b-x();a.ea=Uk(function(){this.ea=null;PQ(this)},c,a)}
function PQ(a){a.g.isEmpty();var b=x();a.l=!0;a.j=b+1E3;var c=QQ(a),d=a.A.g,e=w(function(){this.l=!1;hw(this.A);this.j=Math.max(this.j,b+d);MQ(this)},a),f={};
f.timeout=d;f.onSuccess=w(a.Aw,a);f.onError=e;f.ue=e;UL(a.B,"upload/feedback",c,f)}
function RQ(a){var b=new vH;a.g.forEach(function(c){wH(b,-c.g,c);20<b.ha()&&b.remove()});
return b.ia()}
function QQ(a){var b={context:QL(a.B.g||RL()),continuations:[],ids:[]};a=RQ(a);A(a,function(c){var d=c.Bk;d?b.continuations.push(d):(d={},d.frontendUploadId=c.getItem().g.getId(),b.ids.push(d))});
return b}
h.Aw=function(a){this.A.reset();this.l=!1;a=SQ(a);A(a,this.Kp,this);MQ(this)};
function SQ(a){var b=[];A(a.contents||[],function(c){c.uploadFeedbackItem&&b.push(c.uploadFeedbackItem)});
A(a.continuationContents||[],function(c){c.uploadFeedbackItemContinuation&&b.push(c.uploadFeedbackItemContinuation)});
return b}
h.Kp=function(a){var b=this.g.get(a.id&&a.id.frontendUploadId);if(b){var c=b.getItem();a.id.videoId&&DQ(c,"video_id",{registrationStatus:"STATUS_SUCCESS",youtubeId:a.id.videoId});A(a.contents||[],function(e){if(e.processingProgressBar){var f={processed:e.processingProgressBar.fractionCompleted};DQ(c,"processing_progress",f)}e.thumbnailStatus&&e.thumbnailStatus.thumbnailDetails&&(f={success:1},DQ(c,"thumbnails_done",f));e.uploadStatus&&("FAILED"!==e.uploadStatus.uploadStatus&&"REJECTED"!==e.uploadStatus.uploadStatus||
a.id.videoId?(f={videoStatus:"VIEWABLE"===e.uploadStatus.uploadStatus?"STATUS_SUCCESS":"STATUS_"+e.uploadStatus.uploadStatus},"REJECTED"===e.uploadStatus.uploadStatus&&(e=e.uploadStatus,f.rejectionReason=e.message&&e.message.simpleText?"Duplicate upload"===e.message.simpleText?"REJECTED_DUPLICATE":"":""),DQ(c,"youtube_status",f)):(f=e.uploadStatus,f={registrationStatus:"STATUS_FAILED",failureReason:f.message&&f.message.simpleText?"Daily upload limit reached"===f.message.simpleText?"FAILED_RATE_LIMIT_EXCEEDED":
"":""},DQ(c,"video_id",f)))});
var d=TQ(a);d&&d.continuation&&void 0!==d.continueInMs?(b.Bk=d.continuation,UQ(b,x()+d.continueInMs)):this.Dh(c)}};
function TQ(a){var b=null;a.continuations&&(a=eb(a.continuations,function(c){return"uploadFeedbackRefreshContinuation"in c}),a.length&&(b=a[0].uploadFeedbackRefreshContinuation));
return b}
function LQ(a){this.j=a;this.Bk=null;this.g=x()}
LQ.prototype.getItem=function(){return this.j};
function UQ(a,b){a.g=b}
;function VQ(){this.g=R("shortenerDomain",void 0)}
function WQ(a,b){var c=a.g+"/";a.g||(c=yo(document.location,"/watch?v="));return c+b}
function XQ(a,b){return R("enableSecureThumbnails")?R("secureThumbnailDomain")+"/upload_thumbnail?v="+a+"&t="+b:R("thumbnailDomain")+"/vi/"+a+"/"+b+".jpg"}
;function YQ(a,b,c){this.Gc=a||0;this.C=b;this.j=new Tk(1E3);K(this.j,"tick",w(this.A,this));this.g=c;this.l=FM("SID")||null}
YQ.prototype.start=function(){this.j.start()};
YQ.prototype.B=function(a,b){var c=b.status;"invalid"==c?this.g(!1):"valid"==c&&this.g(!0)};
YQ.prototype.A=function(){var a=FM("SID");if(a!=this.l){var b={method:"POST",Ua:{action_check_login:1},ya:{authuser:this.Gc,pageid:this.C},onSuccess:w(this.B,this)};sM("/upload_ajax",b);this.l=a||null}};var ZQ="a mt ms e tr si fn ut ii wfd fd b ex fh rcr rs rd rrh rlh t ft dn hdn fe vbc ubi".split(" ");function $Q(){this.g=0}
Ka($Q);$Q.prototype.reset=function(){this.g=0};
function aR(a){return"REGISTRATION_STATUS_"+a in dP?S("REGISTRATION_STATUS_"+a):S("REGISTRATION_STATUS_FAILED")}
;function bR(a,b,c){L.call(this);this.l="";this.B=new lP(b);this.j=a;this.j.Jb(this);this.j.A=this.B;this.A="";a=$Q.V();b=R("frontendUploadIdV2Params","");this.A=CG("%s:%s:%d%s",c,R("frontendUploadIdBase"),a.g++,b?":"+b:"");this.j.g=new zQ("frontend_key",this.A);this.R=R("enableInnerTubeFeedback",!1)?100:95;K(this.j,"M",this.Kw,!1,this);K(this.j,"N",this.vu,!1,this);K(this.j,"O",this.xv,!1,this);K(this.j,"J",this.sv,!1,this);K(this.j,"P",this.Yu,!1,this)}
z(bR,L);h=bR.prototype;h.setVideoId=function(a){this.l||(this.l=a,(new qQ(this.A,null,this.l,null)).send("REGISTRATION_INFO_RECEIVED"),CQ(this.j,"video_id"),this.dispatchEvent(new iQ("z",this)))};
function cR(a,b,c){c=c||new Wn;c.set("a",b);a.B.send(c)}
h.Kw=function(a){var b=a.payload.processed;1==b&&CQ(this.j,"processing_progress");var c=new iQ("A",this);c.percent=Math.round(this.R/100*b*100);c.time_left_secs=$b(a.payload,"timeLeftSecs",null);this.dispatchEvent(c)};
h.vu=function(a){CQ(this.j,"processing_done");CQ(this.j,"processing_progress");a.payload.uploadOk&&(a.payload.success?this.dispatchEvent(new iQ("B",this)):this.jd(S("ERROR_PROCESSING_FAILED")))};
h.jd=function(a){this.dispatchEvent(new kQ(this,a))};
h.xv=function(a){CQ(this.j,"youtube_status");a=a.payload;"STATUS_SUCCESS"==a.videoStatus?this.dispatchEvent(new iQ("B",this)):(a="REJECTED_DURATION"==a.rejectionReason&&"VIDEO_STATUS_"+a.durationLimitReason in dP?S("VIDEO_STATUS_"+a.durationLimitReason):"STATUS_REJECTED"==a.videoStatus&&"VIDEO_STATUS_"+a.rejectionReason in dP?S("VIDEO_STATUS_"+a.rejectionReason):"STATUS_FAILED"==a.videoStatus&&"VIDEO_STATUS_"+a.failureReason in dP?S("VIDEO_STATUS_"+a.failureReason):"VIDEO_STATUS_"+a.videoStatus in
dP?S("VIDEO_STATUS_"+a.videoStatus):S("VIDEO_STATUS_STATUS_UNKNOWN"),this.jd(a))};
h.sv=function(a){a=a.payload;"STATUS_SUCCESS"==a.registrationStatus?this.setVideoId(a.youtubeId):this.jd(aR(a.failureReason))};
h.Yu=function(a){a=a.payload.success;void 0!==a&&(CQ(this.j,"thumbnails_done"),a&&this.dispatchEvent(new iQ("C",this)))};
h.deleteVideo=function(a){var b=[this.l];a={Fa:a};b={method:"POST",ya:{v:b.join(",")},Ua:vP({num_videos:b.length,action_delete_videos:"1"})};a&&ec(b,a);sM("/video_ajax",b)};function dR(a,b,c){bR.call(this,b,c,"web_import");this.g=a;this.g.A=this.A}
z(dR,bR);h=dR.prototype;h.Mn=function(){this.l&&(this.j.stop(),this.deleteVideo(w(this.Nt,this)));(new qQ(this.A,null,this.l?this.l:null,null)).send("UPLOAD_CANCEL_BUTTON")};
h.ni=function(){return this.g.B||""};
h.Uk=function(){return Infinity};
h.Zk=function(){return 0};
h.Wb=function(){return this.g.getId()};
h.yd=function(){return!0};
h.Nt=function(){this.dispatchEvent(new iQ("D",this))};
h.Wl=function(){var a={};A(["privacy","title"],function(b){var c;"privacy"==b&&(c="private");"title"==b&&(c=this.ni());a[b]=c},this);
return a};var eR=Sb({Wn:"yt-alert-success",ERROR:"yt-alert-error",Xx:"yt-alert-warn",xx:"yt-alert-info",Qx:"yt-alert-promo"});function fR(a){this.g=a;this.l=N("progress-bar-progress",a);this.B=N("progress-bar-percentage",a);this.A=N("progress-bar-text",a);this.j=0}
;function gR(a,b){this.g=new fR(a);this.j=new fR(b);hR(this)}
function iR(a,b,c,d){c=1==c?a.g:a.j;var e=c.j;d&&e>b||e==b||(100<b?(c.j=100,c.l.style.width="100%",vs(c.g,"valuenow",100)):(c.j=b,c.l.style.width=b.toString()+"%",vs(c.g,"valuenow",b),S("PERCENT_FORMAT"),Lj(c.B,S("PERCENT_FORMAT").replace("#",b.toString()))),hR(a))}
function hR(a){V(a.g.g,!0);100<=a.g.j?(V(a.g.A,!1),V(a.j.g,!0)):(V(a.g.A,!0),V(a.j.g,!1))}
;function jR(a){I.call(this);Sh(this,w(a.$apply,a,w(a.$destroy,a)))}
z(jR,I);jR.$inject=["$rootScope"];function kR(){return{request:function(a){a.data=a.data||{};a.params&&ec(a.data,a.params);var b=R("XSRF_FIELD_NAME");a.data[b]||(a.data[b]=R("XSRF_TOKEN"));return a}}}
;function lR(a,b,c){var d=angular.element(a).injector();d||(d=angular.bootstrap(a,b));return c?d.get(c):null}
function mR(a){if(oj().angular)return a()}
function nR(a){a.interceptors.push(kR)}
nR.$inject=["$httpProvider"];var oR=mR(function(){return angular.module("util",[]).config(nR).service("DisposeService",jR)});function pR(a,b){return function(){return{restrict:"C",require:"?ngModel",link:function(c,d,e,f){var g=w(c.$$postDigest,c,Ua(a,d[0]));f&&f.$formatters.push(function(k){g();return k});
b&&e.ngDisabled&&c.$watch(e.ngDisabled,g)}}}}
var qR=mR(function(){var a=angular.module("yt.angular.uix.forminput",[]);a.directive("ytUixFormInputCheckbox",pR(function(b){WP.V().cc(b)}));
a.directive("ytUixFormInputRadio",pR(function(b){WP.V().Um(b)}));
a.directive("ytUixFormInputSelectElement",pR(function(b){WP.V().zb(b)},!0));
a.directive("ytUixFormInputText",pR(function(b){WP.V().Gd(b)}));
return a});function rR(a,b){this.g=b;this.adFriendlyChecked=!1;a.dialogCtrl=this}
rR.prototype.cancel=function(){this.g.dismiss("cancel")};
rR.prototype.mo=function(){this.g.close()};
rR.prototype.appeal=rR.prototype.mo;rR.prototype.cancel=rR.prototype.cancel;rR.$inject=["$scope","dialogInstance"];function sR(a,b){this.g=b;this.T=a;a.initialRatings?tR(this,angular.fromJson(a.initialRatings)):tR(this,{enabled:"invalid",language:"invalid",nudity:"invalid",sex:"invalid",violence:"invalid",drugs:"invalid",flashing_lights:"invalid"});this.T.showError=!1;this.T.showLoading=!1;a.$watch("contentRatings",function(c,d){d&&c!=d&&b.j&&b.j()},!0);
a.$on("$destroy",function(){b.g=null;uR(b)})}
sR.$inject=["$scope","ContentRatingService"];function tR(a,b){a.T.contentRatings=b;var c=a.g;if(c.g)throw Error("You can only have one contentRatings controller per contentRatings app!");c.g=b;uR(c)}
;function vR(a,b){this.g=b;this.T=a;a.initialRatings?wR(this,angular.fromJson(a.initialRatings)):wR(this,{});this.T.showError=!1;this.T.showLoading=!1;a.$watch("ratingSystems",function(c,d){d&&c!=d&&b.j&&b.j()},!0);
a.$on("$destroy",function(){b.l=null;uR(b)})}
vR.$inject=["$scope","ContentRatingService"];function wR(a,b){a.T.ratingSystems=b;var c=a.g;if(c.l)throw Error("You can only have one contentRatings controller per contentRatings app!");c.l=b;uR(c)}
;function xR(a,b,c){this.T=a;a.metadata={};a.isStreamingOrCompleted=!1;a.canMonetize=!1;c.setVideoId(b.attr("data-video-id"));a.isAdBreaksEditorDisabled=w(this.isAdBreaksEditorDisabled,this);a.hasSelectedToMonetize=w(this.hasSelectedToMonetize,this)}
q("yt.www.creator.angular.controllers.MetadataEditor",xR,void 0);xR.$inject=["$scope","$rootElement","MetadataEditorService"];xR.prototype.isAdBreaksEditorDisabled=function(){var a=this.T.metadata.ad_formats;return a?!(a.has_skippable_video_ads||a.has_non_skippable_video_ads):!1};
xR.prototype.hasSelectedToMonetize=function(){return void 0!==this.T.monetizedPolices?this.T.isMonetizing&&mb(this.T.monetizedPolices,this.T.usagePolicy):void 0!==this.T.monetizationRadio?"ads"==this.T.monetizationRadio:this.T.isMonetizing};function yR(a,b){this.T=a;this.g=S("VALID_COLLABORATION_ROLES");this.j=b;this.widgetState="loading";this.focusGroup="";this.creditGroups=[];this.autoCompleteCustomRenderer=null;var c=a.initialCredits;c?zR(this,angular.fromJson(c)):zR(this,[]);w(function(){this.flatVideoCredits=AR(this);a.videoCreditsForm.$setPristine()},this)}
q("yt.www.creator.angular.controllers.VideoCredits",yR,void 0);yR.$inject=["$scope","VideoCreditsService"];function AR(a){var b=[];angular.forEach(a.creditGroups,function(c){angular.forEach(c.credits,function(d){b.push({role:c.role,channel_id:d.channel_id})})});
return angular.toJson(b)}
yR.prototype.vr=function(a){return this.g[a]};
yR.prototype.localizeRole=yR.prototype.vr;yR.prototype.fo=function(a){var b=!1;A(this.creditGroups,function(c){c.role==a&&(b=!0)},this);
b?this.focusGroup=a:this.creditGroups.push({role:a,credits:[]})};
yR.prototype.addNewRole=yR.prototype.fo;yR.prototype.Ae=function(a,b){b.splice(a,1);this.Aj()};
yR.prototype.removeChip=yR.prototype.Ae;yR.prototype.Aj=function(){this.flatVideoCredits=AR(this);this.T.videoCreditsForm.$setDirty();var a=this.j;a.j&&a.j()};
yR.prototype.setFormAsDirty=yR.prototype.Aj;yR.prototype.To=function(a){return this.focusGroup==a.role?"video-settings-credit-hilite":""};
yR.prototype.getAdditionalChipsClasses=yR.prototype.To;yR.prototype.co=function(a,b){var c=a.currentTarget.ng();c&&BR(this,a.row,b,c)};
yR.prototype.addChannelInfoChip=yR.prototype.co;function BR(a,b,c,d){var e=!1;"notFound"==b.channel_id&&(e=!0);var f=!1;angular.forEach(c.credits,function(g){b.channel_id==g.channel_id&&(f=!0)});
f||e||c.credits.push(b);c.draft_channel_url="";d.focus();a.Aj()}
yR.prototype.focus=function(a){(a=N("video-settings-add-credit",a.currentTarget))&&a.focus()};
yR.prototype.focus=yR.prototype.focus;function zR(a,b){a.creditGroups=b;a.flatVideoCredits=AR(a);a.widgetState="loaded"}
function CR(a){this.j=N("video-credits-fetching-chip-error",a);this.g=N("video-credits-fetched-channel",a)}
z(CR,Ut);CR.prototype.za=null;CR.prototype.wf=function(a,b,c){a.data.toString=Ib(a.data.title);a.data.src="src";b="notFound"==a.data.channel_id?ZK(this.j):ZK(this.g);if("outerHTML"in b)b=b.outerHTML;else{var d=aj(b);d=rj(d,"DIV");d.appendChild(b.cloneNode(!0));b=d.innerHTML}b=new qP(b);b=vj(Nl(b.za(a.data)));c.appendChild(b)};function DR(a,b,c){this.l=a;this.j=c;this.g=b.offerManagement;this.offerCreationOptions=this.g.offer_creation_options;this.offer=angular.copy(this.offerCreationOptions.default_offer);this.offerCreationError=this.priceValidationError=null;this.ajaxInProgress=!1;b.dialogCtrl=this}
q("yt.www.creator.angular.controllers.YpcOfferManagementOfferCreationDialog",DR,void 0);DR.$inject=["$http","$scope","dialogInstance"];DR.prototype.wo=function(){this.priceValidationError=null};
DR.prototype.clearPriceValidationError=DR.prototype.wo;DR.prototype.cancel=function(){this.j.dismiss("cancel")};
DR.prototype.cancel=DR.prototype.cancel;DR.prototype.confirm=function(){var a=this,b={new_offer:angular.toJson(this.offer),existing_offers:angular.toJson(this.g.offers)};this.ajaxInProgress=!0;this.offerCreationError=null;this.l.post("/ypc_offer_management_ajax",b,{params:vP({action_validate_offer:1})}).then(function(c){a.offer=c.data;a.j.close({offer:a.offer})})["catch"](function(c){c=c.data;
a.offerCreationError=c.offer_creation_error;a.priceValidationError=c.price_validation_error})["finally"](function(){a.ajaxInProgress=!1})};
DR.prototype.confirm=DR.prototype.confirm;function ER(a,b){this.g=b;this.offer=a.offer;this.hasValidEntitlements=a.hasValidEntitlements;a.dialogCtrl=this}
q("yt.www.creator.angular.controllers.YpcOfferManagementOfferOperationDialog",ER,void 0);ER.$inject=["$scope","dialogInstance"];ER.prototype.cancel=function(){this.g.dismiss("cancel")};
ER.prototype.cancel=ER.prototype.cancel;ER.prototype.confirm=function(){this.g.close()};
ER.prototype.confirm=ER.prototype.confirm;function FR(){return{require:["ngModel"],scope:{initialAdFormats:"@"},templateUrl:"adformats.html",link:function(a,b,c,d){var e=d[0];a.formats=angular.fromJson(a.initialAdFormats);a.$watch("formats",function(){if(a.formats){var f={has_overlay_ads:a.formats.has_overlay_ads,has_skippable_video_ads:a.formats.has_skippable_video_ads,has_non_skippable_video_ads:a.formats.has_non_skippable_video_ads,has_long_non_skippable_video_ads:a.formats.has_long_non_skippable_video_ads};null!=a.formats.has_product_listing_ads&&
(f.has_product_listing_ads=a.formats.has_product_listing_ads);null!=a.formats.has_display_ads&&(f.has_display_ads=a.formats.has_display_ads);e.$setViewValue(f)}},!0)}}}
var GR=mR(function(){var a=angular.module("yt.www.creator.angular.directives.adFormats",[]);a.directive("adFormats",FR);return a});function HR(a,b,c){this.T=a;this.l=c;this.g=b.attr("data-video-id");this.disableAppealBtn=!1}
HR.prototype.Qr=function(){this.l.create("adfriendlyappealdialog.html","AdFriendlyAppealDialogCtrl",{}).result.then(w(this.j,this))};
HR.prototype.j=function(){IR(this,!1,!1);var a=yP(this.g);yM(a,{context:this,Ua:{action_create_ad_friendly_appeal:1},ya:{encrypted_video_id:this.g},onSuccess:w(this.B,this),onError:w(this.A,this)})};
function IR(a,b,c){c?a.T.$apply(function(){return a.disableAppealBtn=!b}):a.disableAppealBtn=!b}
HR.prototype.B=function(a,b){var c=b.metadata_errors;c&&0<c.length?IR(this,!0,!0):location.reload()};
HR.prototype.A=function(){IR(this,!0,!0)};
HR.prototype.onAdFriendlyAppealClick=HR.prototype.Qr;HR.$inject=["$scope","$rootElement","DialogService"];function JR(){return{controller:HR,controllerAs:"adFriendlyAppealButtonCtrl",link:function(){},
templateUrl:"adfriendlyappeal.html",scope:{}}}
var KR=mR(function(){var a=angular.module("yt.www.creator.angular.directives.AdFriendlyAppeal",[]);a.directive("adFriendlyAppeal",JR);return a});function LR(){return{require:"ngModel",link:function(a,b,c,d){d.$render=function(){a.selfRacy=d.$viewValue};
a.$watch("selfRacy",function(e){d.$setViewValue(e)});
a.$on("$destroy",function(){d.$setViewValue(null)})},
scope:!0,templateUrl:"age_restriction.html"}}
var MR=mR(function(){var a=angular.module("yt.www.creator.angular.directives.ageRestriction",[]);a.directive("ageRestriction",LR);return a});function NR(){return{require:"ngModel",link:function(a,b,c,d){b=angular.fromJson(a.initialBroadcastDelay);a.options=b.options;a.broadcastDelay=b.broadcast_delay;d.$setViewValue(a.broadcastDelay);a.$watch("broadcastDelay",function(e){d.$setViewValue(e)});
a.$watch("latencyClass",function(e){1!=e&&(a.broadcastDelay="0",d.$setViewValue("0"))})},
templateUrl:"broadcast_delay.html",scope:{initialBroadcastDelay:"@",latencyClass:"=",isStreamingOrCompleted:"="}}}
var OR=mR(function(){var a=angular.module("yt.www.creator.angular.directives.broadcastDelay",[]);a.directive("broadcastDelay",NR);return a});function PR(){return{require:"ngModel",link:function(a,b,c,d){d.$render=function(){a.captionCertification=d.$viewValue};
a.$watch("captionCertification",function(e){d.$setViewValue(e)})},
templateUrl:"caption_certification.html"}}
var QR=mR(function(){var a=angular.module("yt.www.creator.angular.directives.captionCertification",[]);a.directive("captionCertification",PR);return a});function RR(){return{require:"ngModel",link:function(a,b,c,d){b=angular.fromJson(a.initialCategory);a.options=b.options;a.category=b.category;d.$setViewValue(a.category);a.$watch("category",function(e){d.$setViewValue(e);BK("yt-metadata-editor-widget-category-changed",e)})},
templateUrl:"category.html",scope:{initialCategory:"@"}}}
var SR=mR(function(){var a=angular.module("yt.www.creator.angular.directives.category",[]);a.directive("category",RR);return a});function TR(){return{require:"ngModel",link:function(a,b,c,d){b=angular.fromJson(a.initialChatOptions);var e=b.slow_mode_min_duration_sec,f=b.slow_mode_max_duration_sec;a.chatOptions={chatEnabled:b.chat_enabled,chatMembersOnlyEnabled:b.chat_members_only_enabled,blockSpam:b.block_spam,slowModeEnabled:b.slow_mode_enabled,slowModeTimeoutDurationSec:b.slow_mode_timeout_duration_sec,isSlowModeDurationValid:function(){var g=a.chatOptions.slowModeTimeoutDurationSec;return g>=e&&g<=f},
superChatForGoodEnabled:b.super_chat_for_good_enabled,superChatForGoodNpoId:b.super_chat_for_good_npo_id,inviteOnlyModeEnabled:b.invite_only_mode_enabled};d.$setViewValue(a.chatOptions);a.$watch("chatOptions",function(g){d.$setViewValue(g)},!0)},
templateUrl:"chat_options.html",scope:{initialChatOptions:"@"}}}
var UR=mR(function(){var a=angular.module("yt.www.creator.angular.directives.chatOptions",[]);a.directive("chatOptions",TR);return a});function VR(a){return{link:function(b,c,d){function e(){0>=l?(c.text(g),c.prop("disabled",!1)):(c.prop("disabled",!0),c.text(eP(k,l)),--l,f(),m=a(e,1E3))}
function f(){m&&(a.cancel(m),m=null)}
var g=d.buttonText||c.text(),k=d.messageKey||"COUNTDOWN_BUTTON_TEXT",l=d.countdownSeconds||5,m=null;e();b.$on("$destroy",f)}}}
VR.$inject=["$timeout"];var WR=mR(function(){var a=angular.module("yt.www.creator.angular.directives.countdownButton",[]);a.directive("countdownButton",VR);return a});function YR(){return{require:"ngModel",link:function(a,b,c,d){a.description=Ze(Yf(a.initialEncodedDescription));d.$setViewValue(a.description);a.$watch("description",function(e){d.$setViewValue(e)})},
templateUrl:"description.html",scope:{initialEncodedDescription:"@"}}}
var ZR=mR(function(){var a=angular.module("yt.www.creator.angular.directives.description",[]);a.directive("description",YR);return a});function $R(){return{require:"ngModel",link:function(a,b,c,d){b=angular.fromJson(a.initialDistributionOptions);a.distributionOptions={notifySubscribers:b.notify_subscribers};d.$setViewValue(a.distributionOptions);a.$watch("distributionOptions",function(e){d.$setViewValue(e)},!0)},
scope:{initialDistributionOptions:"@",isStreamingOrCompleted:"="},templateUrl:"distribution_options.html"}}
$R.$inject=["MetadataEditorService"];var aS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.distributionOptions",[]);a.directive("distributionOptions",$R);return a});function bS(){return{require:"ngModel",link:function(a,b,c,d){a.dvrEnabled=angular.fromJson(a.initialValue);d.$setViewValue(a.dvrEnabled);a.$watch("dvrEnabled",function(e){d.$setViewValue(e);BK("yt-metadata-editor-widget-live-dvr-changed",e)})},
templateUrl:"dvr_enabled.html",scope:{initialValue:"@",latencyClass:"="}}}
bS.$inject=["MetadataEditorService"];var cS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.dvrEnabled",[]);a.directive("dvrEnabled",bS);return a});function dS(a){this.autoCompleteCustomRenderer=new eS;this.T=a;var b=Ze(Yf(a.initialEncodedTitle));a.gameTitleInfo={title:b};a.$on("$destroy",function(){a.gameTitleInfo=null})}
q("yt.www.creator.angular.controllers.GameTitle",dS,void 0);dS.$inject=["$scope"];dS.prototype.vo=function(){delete this.T.gameTitleInfo.mid};
dS.prototype.clearMid=dS.prototype.vo;dS.prototype.cs=function(){this.T.gameTitleInfo.mid&&this.T.gameTitleInfo.title||(delete this.T.gameTitleInfo.mid,delete this.T.gameTitleInfo.title)};
dS.prototype.onBlur=dS.prototype.cs;dS.prototype.ho=function(a){var b=a.currentTarget.ng();b&&(a=a.row,this.T.gameTitleInfo={mid:a[0],title:a[1][0]},b.focus())};
dS.prototype.addTitleInfo=dS.prototype.ho;function eS(){}
z(eS,Ut);eS.prototype.za=null;eS.prototype.wf=function(a,b,c){b=pj("SPAN",{"class":"game-title-fetched-title"});Lj(b,a.data[1][0]);c.appendChild(b);b="";(a=a.data[2][0])&&(b=a.substring(0,4));b&&(a=pj("SPAN",{"class":"game-title-fetched-year"}),Lj(a,b),c.appendChild(a))};function fS(){return{require:"ngModel",link:function(a,b,c,d){d.$setViewValue(a.gameTitleInfo);d.$render=function(){a.gameTitleInfo=d.$viewValue};
a.$watch("gameTitleInfo",function(e){d.$setViewValue(e)},!0)},
templateUrl:"game_title.html",controller:dS,controllerAs:"ctrl",scope:{initialEncodedTitle:"@"}}}
var gS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.gameTitle",[]);a.directive("gameTitle",fS);return a});function hS(a,b){L.call(this);this.P=this.l=this.j=this.C=null;this.L="";this.A=!0;this.D=0;this.S=a||new google.maps.LatLng(0,0);this.O=b||"";this.g=new google.maps.Marker({draggable:!0,position:this.S});google.maps.event.addListener(this.g,"dragstart",w(this.nw,this));google.maps.event.addListener(this.g,"dragend",w(this.Rj,this))}
z(hS,L);h=hS.prototype;h.He=function(a){this.C&&this.Hf();this.C=N("map-canvas",a)||a;this.j=new google.maps.Map(this.C,{center:this.g.getPosition(),mapTypeId:google.maps.MapTypeId.ROADMAP,streetViewControl:!1,zoom:3});this.g.setMap(this.j);this.O&&(a=Zi(this.C).W("DIV"),Lj(a,this.O),this.l=new google.maps.InfoWindow({content:a,disableAutoPan:!0}),google.maps.event.addListener(this.l,"domready",w(this.Qj,this)),this.l.open(this.j,this.g))};
h.Hf=function(){this.l&&(this.l.close(),google.maps.event.clearInstanceListeners(this.l),this.l=null);this.g.setMap(null);this.j=null;xj(this.C);this.C=null};
h.Qj=function(){if(this.l){var a=ym(this.l.getContent());if(0!=a.width&&0!=a.height){var b=ym(this.C),c=a.top+a.height/2-b.top-b.height/3;((a=a.left+a.width/2-b.left-b.width/2)||c)&&this.j.panBy(a,c);return}}this.j.panTo(this.g.getPosition())};
h.nw=function(){this.l&&this.l.close()};
h.Rj=function(){iS(this,this.g.getPosition(),"")};
function jS(a,b){a.P||(a.P=new google.maps.Geocoder);a.D++;a.P.geocode({address:b},w(a.Hi,a,b,a.D))}
h.Hi=function(a,b,c){this.D==b&&c&&c.length&&(b=c[0].geometry,iS(this,b.location,a),this.j&&this.j.fitBounds(b.viewport))};
function iS(a,b,c){a.L=c;a.g.setPosition(b);a.A=!1;a.D++;a.dispatchEvent("change")}
;function kS(a,b){hS.call(this,a,b);this.R=this.B=this.popup=null}
z(kS,hS);h=kS.prototype;h.He=function(a,b,c){Cm(a,!1);kS.J.He.call(this,a);Array.isArray(b)?this.B=b:this.B=[b];this.R=c||this.B[0];this.popup=new uB(a,new nH(this.R,9));K(this.popup,"beforehide",this.ul,!1,this);A(this.B,function(d){K(d,"mousedown",this.xn,!1,this)},this)};
h.Hf=function(){A(this.B,function(a){Bi(a,"mousedown",this.xn,!1,this)},this);
Bi(this.popup,"beforehide",this.ul,!1,this);this.B=this.R=this.popup=null;kS.J.Hf.call(this)};
h.xn=function(){this.popup.isVisible()||(this.popup.Ta(!0),google.maps.event.trigger(this.j,"resize"),this.Qj())};
h.ul=function(a){var b=a.target;b&&hb(this.B,function(c){return Ij(c,b)},this)&&a.preventDefault()};
h.Hi=function(a,b,c){if(this.popup.isVisible())return kS.J.Hi.call(this,a,b,c)};function lS(){this.Pd=null;this.searchText="";this.location=null}
q("yt.www.creator.angular.controllers.locationPicker",lS,void 0);lS.prototype.Pk=function(){var a=this.Pd.g.getPosition();this.Pd.A?this.location=null:this.location={latitude:a.lat(),longitude:a.lng()}};
lS.prototype.extractGMapLocation=lS.prototype.Pk;lS.prototype.Zm=function(){jS(this.Pd,this.searchText)};
lS.prototype.searchLocation=lS.prototype.Zm;lS.prototype.Iu=function(a){13==a.keyCode&&this.Zm()};
lS.prototype.onSearchTextKeypress=lS.prototype.Iu;lS.prototype.Ij=function(){if(this.Pd.A)this.searchText="";else{var a=this.Pd.L;a?this.searchText=a:(a=this.Pd.g.getPosition(),this.searchText=a.lat().toFixed(5)+" "+a.lng().toFixed(5))}};
lS.prototype.syncSearchTextWithMap=lS.prototype.Ij;function mS(){return{controller:lS,controllerAs:"ctrl",require:["locationPicker","ngModel"],link:function(a,b,c,d){aK("GOOGLE_MAPS_API",Ua(nS,a,b[0],d),R("GMAP_LANGUAGE",void 0),R("GMAP_VERSION",void 0))},
templateUrl:"location_picker.html"}}
function nS(a,b,c){var d=c[0],e=c[1];c=new google.maps.LatLng(R("GMAP_DEFAULT_LAT",void 0),R("GMAP_DEFAULT_LONG",void 0));var f=new kS(c);c=N("location-map",b);var g=N("location-input",b);b=N("map-button-search",b);f.He(c,[g,b]);d.Pd=f;e.$render=function(){var k=e.$viewValue;k&&(k=new google.maps.LatLng(k.latitude,k.longitude),iS(f,k,""),f.j&&f.j.panTo(k))};
a.$watch("ctrl.location",function(k){k&&(e.$setViewValue(k),d.Ij())});
a.$on("$destroy",function(){e.$setViewValue(null)});
K(f,"change",function(){a.$evalAsync(w(d.Pk,d))});
K(f.popup,"hide",function(){a.$apply(w(d.Ij,d))})}
var oS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.locationPicker",[]);a.directive("locationPicker",mS);return a});function pS(a){return{controller:xR,link:function(b){qS(a,b)}}}
pS.$inject=["MetadataEditorService"];var rS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.metadataEditor",[]);a.directive("metadataEditor",pS);return a});function sS(){return{require:"ngModel",link:function(a,b,c,d){a.monetization=angular.fromJson(a.initialMonetization);a.canMonetize=angular.fromJson(a.initialCanMonetize);d.$setViewValue(a.monetization);a.$watch("monetization",function(e){d.$setViewValue(e)})},
templateUrl:"monetization.html",scope:{initialMonetization:"@",initialCanMonetize:"@",canMonetize:"="}}}
var tS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.monetization",[]);a.directive("monetization",sS);return a});function uS(){return{require:["ngModel"],scope:{initialMusic:"@"},templateUrl:"music.html",link:function(a,b,c,d){var e=d[0];a.music={};var f=angular.fromJson(a.initialMusic);a.music={is_licensed_for_youtube_music:f.is_licensed_for_youtube_music,music_setting_state:f.music_setting_state,isMusicSettingDisabled:function(){return"enabled"!=f.music_setting_state&&"disabled_by_claim_preference"!=f.music_setting_state}};
ec(a,vS(a.music));a.$watch("music",function(){ec(a,vS(a.music));e.$setViewValue(a.music)},!0)}}}
function vS(a){var b=a.is_licensed_for_youtube_music;a=a.music_setting_state;var c={};c.show_clickcard_by_channel_owner_checked=b&&"enabled"==a;c.show_clickcard_claimed_by_channel_owner_unchecked=!b&&"enabled"==a;c.show_clickcard_enabled_by_channel_owner_unclaimed=b&&"enabled_by_channel_owner_unclaimed"==a;c.show_clickcard_unclaimed="disabled_unclaimed"==a;c.show_clickcard_claimed_by_third_party_unchecked="claimed_by_third_party_unchecked"==a;c.show_clickcard_claimed_by_third_party_checked="claimed_by_third_party_checked"==
a;c.show_clickcard_disabled_by_claim_preference_unchecked="disabled_by_claim_preference"==a;return c}
q("yt.www.creator.angular.directives.music.getClickcardStates",vS,void 0);var wS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.music",[]);a.directive("music",uS);return a});function xS(){return{templateUrl:"officialratings.html",controller:vR,scope:{initialRatings:"@"}}}
var yS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.officialRatings",[]);a.directive("officialRatings",xS);return a});function zS(){return{require:["ngModel"],scope:{initialPartialSpherical:"@"},templateUrl:"partial_spherical.html",link:function(a,b,c,d){var e=d[0];a.partialSpherical={};b=angular.fromJson(a.initialPartialSpherical);a.partialSpherical=b;a.$watch("partialSpherical",function(){e.$setViewValue(a.partialSpherical)})}}}
var AS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.partialSpherical",[]);a.directive("partialSpherical",zS);return a});function BS(){return{require:"ngModel",scope:{togglable:"&"},link:function(a,b,c,d){d.$render=function(){b.toggleClass("checked",d.$viewValue==c.popButton)};
b.on("click",function(){a.$apply(function(){b.hasClass("checked")?a.togglable()&&d.$setViewValue(null):d.$setViewValue(c.popButton);d.$render()})})}}}
var CS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.popButton",[]);a.directive("popButton",BS);return a});function DS(){return{require:"ngModel",link:function(a,b,c,d){b=angular.fromJson(a.initialPrivacy);a.options=b.options;a.privacy=b.privacy;d.$setViewValue(a.privacy);a.$watch("privacy",function(e){d.$setViewValue(e)})},
templateUrl:"privacy.html",scope:{initialPrivacy:"@"}}}
var ES=mR(function(){var a=angular.module("yt.www.creator.angular.directives.privacy",[]);a.directive("privacy",DS);return a});function FS(){return{require:["ngModel"],scope:{initialPaidProduct:"@"},templateUrl:"productplacements.html",link:function(a,b,c,d){var e=d[0];a.product=angular.fromJson(a.initialPaidProduct);a.$watch("product",function(){if(a.product){var f={};f.has_paid_product_placement=a.product.has_paid_product_placement;f.show_paid_product_placement_overlay=a.product.show_paid_product_placement_overlay;e.$setViewValue(f)}},!0);
a.onHasPppClick=function(){a.product.has_paid_product_placement||(a.product.show_paid_product_placement_overlay=!1)}}}}
var GS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.productPlacements",[]);a.directive("productPlacements",FS);return a});function HS(){return{require:"ngModel",link:function(a,b,c,d){b=angular.fromJson(a.initialRecordingOptions);a.recordingOptions={recordingEnabled:b.recording_enabled,makeRecordingUnlisted:b.make_recording_unlisted};d.$setViewValue(a.recordingOptions);a.$watch("recordingOptions",function(e){d.$setViewValue(e)},!0)},
scope:{initialRecordingOptions:"@",isStreamingOrCompleted:"="},templateUrl:"recording_options.html"}}
HS.$inject=["MetadataEditorService"];var IS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.recordingOptions",[]);a.directive("recordingOptions",HS);return a});function JS(){return{require:["ngModel"],scope:{initialRecoupment:"@"},templateUrl:"recoupment.html",link:function(a,b,c,d){var e=d[0];b=angular.fromJson(a.initialRecoupment);a.recoupment=b.selected_option;a.options=b.options;a.$watch("recoupment",function(){a.recoupment&&e.$setViewValue(a.recoupment)})}}}
var KS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.recoupment",[]);a.directive("recoupment",JS);return a});function LS(){return{require:["ngModel"],scope:{initialSpherical:"@"},templateUrl:"spherical.html",link:function(a,b,c,d){var e=d[0];a.spherical={};b=angular.fromJson(a.initialSpherical);a.spherical=b;a.$watch("spherical",function(){e.$setViewValue(a.spherical)})}}}
var MS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.spherical",[]);a.directive("spherical",LS);return a});function NS(){return{require:"ngModel",link:function(a,b,c,d){b=angular.fromJson(a.initialLatencyClassFlag);a.streamOptimizations={latencyClass:b};d.$setViewValue(a.streamOptimizations);a.$watch("streamOptimizations",function(e){d.$setViewValue(e)},!0)},
templateUrl:"stream_optimizations.html",scope:{initialLatencyClassFlag:"@",isStreamingOrCompleted:"="}}}
var OS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.streamOptimizations",[]);a.directive("streamOptimizations",NS);return a});function PS(){return{require:["ngModel"],scope:{initialThirdParty:"@"},templateUrl:"thirdparty.html",link:function(a,b,c,d){var e=d[0];a.thirdParty=angular.fromJson(a.initialThirdParty);a.$watch("thirdParty",function(){if(a.thirdParty){var f={};a.thirdParty.can_enable_third_party_ads&&(f.has_third_party_ads=a.thirdParty.has_third_party_ads)&&(f.third_party_ads_video_id=a.thirdParty.third_party_ads_video_id||"");e.$setViewValue(f)}},!0)}}}
var QS=mR(function(){var a=angular.module("yt.www.creator.angular.directives.thirdParty",[]);a.directive("thirdPartyAds",PS);return a});function RS(){this.l=1E3/24;this.j=null;this.g=[]}
var SS=new RS;RS.prototype.A=function(){for(var a=x(),b=this.g.length-1;0<=b;b--)TS(this.g[b],a)&&US(this,b)};
RS.prototype.add=function(a){this.g.push(a);this.j||(this.j=sK(w(this.A,this),this.l))};
RS.prototype.remove=function(a){a=bb(this.g,a);0<=a&&US(this,a)};
function US(a,b){rb(a.g,b);a.g.length||(window.clearInterval(a.j),delete a.j)}
;function VS(a,b){this.g=new iH(0,0,a.x,a.y,b.x,b.y,1,1)}
function WS(a){return a}
var XS=new VS({x:.25,y:.1},{x:.25,y:1});function YS(a){return lH(XS.g,a)}
var ZS=new VS({x:.42,y:0},{x:1,y:1});function $S(a){return lH(ZS.g,a)}
var aT=new VS({x:0,y:0},{x:.58,y:1});function bT(a){return lH(aT.g,a)}
var cT=new VS({x:.42,y:0},{x:.58,y:1});function dT(a){return lH(cT.g,a)}
function eT(a){switch(a){case "linear":return WS;case "ease-in":return $S;case "ease-out":return bT;case "ease-in-out":return dT;default:return YS}}
;function fT(a,b){var c=b||{};this.el=a;this.duration=c.duration||.25;this.bh=c.Fa||null;this.Jj=c.Jj||"ease";this.setup(c);c.uy||this.play()}
fT.prototype.setup=function(){};var gT;function hT(){if(void 0===gT){var a=document.createElement("div");void 0!==a.style.MozTransition?gT="Moz":void 0!==a.style.WebkitTransition?gT="Webkit":void 0!==a.style.g?gT="O":gT=null}return gT}
;function iT(a,b){fT.call(this,a,b)}
z(iT,fT);function jT(a,b,c){b=hT()+b;a.el.style[b]=c}
iT.prototype.play=function(){this.el.style.opacity=this.j;rK(w(function(){jT(this,"TransitionTimingFunction",this.Jj);jT(this,"TransitionDuration",this.duration+"s");jT(this,"TransitionProperty","opacity");rL(this.el,w(function(){jT(this,"TransitionTimingFunction","");jT(this,"TransitionDuration","");jT(this,"TransitionProperty","");this.bh&&this.bh(this)},this));
this.el.style.opacity=this.g},this),20)};function kT(a,b){this.j=this.g=0;this.F=SS;this.C=null;fT.call(this,a,b)}
z(kT,fT);kT.prototype.setup=function(a){this.g=0;this.F=a.loop||SS;this.C=eT(this.Jj)};
kT.prototype.play=function(){this.j=x();TS(this,this.j);this.F.add(this)};
function TS(a,b){var c=1E3*a.duration;a.g=Math.min(a.g+(b-a.j),c);a.j=b;var d=a.C(a.g/c);d=a.B-(a.B-a.A)*d;a.l?a.el.style.filter="alpha(opacity="+Math.floor(100*d)+")":a.el.style.opacity=d;if(c=a.g>=c)a.Fa(),a.bh&&rK(w(a.bh,p,a),0);return c}
kT.prototype.Fa=function(){};function lT(a,b){this.B=1;this.A=0;this.l=!1;kT.call(this,a,b)}
z(lT,kT);lT.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.B=isNaN(b)?1:b;this.A=isNaN(c)?0:c;this.l=void 0===this.el.style.opacity;lT.J.setup.call(this,a)};
lT.prototype.Fa=function(){this.l&&1==this.A&&(this.el.style.filter="")};
function mT(a,b){this.j=1;this.g=0;fT.call(this,a,b)}
z(mT,iT);mT.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.j=isNaN(b)?1:b;this.g=isNaN(c)?0:c;mT.J.setup.call(this,a)};function nT(a){Xz.call(this,a);this.yc=[];this.oe=[]}
z(nT,Xz);function oT(a,b,c,d,e,f){e=e||a;f=f||a.H();b=pL(f,b,w(d,e),c);a.yc.push(b)}
nT.prototype.na=function(){A(this.yc,nL);AK(this.oe);nT.J.na.call(this)};
nT.prototype.wb=function(a,b){var c=yK(a,w(b,this));this.oe.push(c)};function pT(a,b){a=a.toLowerCase();b=b.toLowerCase();var c=Math.min(a.length,b.length),d;for(d=0;d<c&&a.charAt(d)==b.charAt(d);++d);return d}
function qT(a){var b=Al;this.j=a;this.g=b}
function rT(a,b,c){this.date=a;this.confidence=b;this.g=c}
rT.prototype.toString=function(){return this.date.toString()};function sT(a,b,c){nT.call(this);this.B=a;this.A=new lJ(b);this.A.Eg=!1;this.D=new qT(c)}
z(sT,nT);h=sT.prototype;h.fa=function(){sT.J.fa.call(this);this.A.za();this.j=null;var a=this.H();cA(this).G(a,"blur",this.et);cA(this).G(a,"focus",this.ft);cA(this).G(this.A,"select",this.Ju)};
h.ge=function(){return this.A.ge()};
h.getDate=function(){return this.j?new Ll(this.j.getYear(),this.j.getMonth(),this.j.getDate()):null};
h.setDate=function(a){this.A.setDate(a)};
h.ft=function(){mJ(this.A,this.H(),!0)};
h.Ju=function(){var a=this.H(),b=this.A.getDate();(this.j=b)?(b=this.B.format(b),oG(a,b)):oG(a,"");this.dispatchEvent("change")};
h.et=function(){var a=this.H();a:{var b=this.D;var c=mG(a);c=c.replace(/^\s+/,"").replace(/\s+$/,"").replace(/([0-9]+)([a-zA-Z]+)/g,"$1 $2").replace(/([a-zA-Z])([0-9])/g,"$1 $2");var d=c.split(/\b|_/);c=[];for(var e=[],f=[],g=0;g<d.length;++g)if(d[g]=d[g].replace(/^\s+|\s+$/,""),e[g]=d[g].length,f[g]=0,d[g].match(/^[0-9]+/)){var k=parseInt(d[g],10);c[g]=k;if(0===k)2==e[g]&&(f[g]|=1);else if(12<k&&31>=k)f[g]|=4;else if(12>=k)f[g]|=6;else if(100>k||1900<=k)f[g]|=1}else{k=d[g];for(var l=-1,m=-1,n=b.g.Jf,
t=b.g.Kf,r=0;r<n.length;++r){var v=n[r];v&&(v=Math.max(pT(v,k),pT(t[r],k)))&&v>m&&(l=r,m=v)}if(k=m>=k.length+1>>1?[l,m]:null)c[g]=k[0],f[g]|=10}g=[0];g[6]=0;g[4]=0;g[2]=0;for(k=g[1]=0;k<f.length;++k)!f[k]&&/\w/.test(d[k])&&++g[0],6===(f[k]&6)?++g[6]:(f[k]&4&&++g[4],f[k]&2&&++g[2]),f[k]&1&&++g[1];if(g[6]){m=l=!1;if(!g[4]||!g[2])if(g[4])l=!0;else if(g[2])m=!0;else if(1===g[6])l=!0;else for(k=0;k<f.length;++k)if(n=!1,1===f[0]&&d[1]&&/^\s*-\s*$/.test(d[1])&&6===f[2]&&d[3]&&/^\s*-\s*$/.test(d[3])&&(n=
!0),6==(f[k]&6)){n||b.j?(f[k]&=-5,++g[2],--g[6],m=!0):(f[k]&=-3,++g[4],--g[6],l=!0);break}if(l)for(k=0;k<f.length;++k)6==(f[k]&6)&&(f[k]&=-5,++g[2],--g[6]);else if(m)for(k=0;k<f.length;++k)6==(f[k]&6)&&(f[k]&=-3,++g[4],--g[6])}b=0;d=7;k=!!g[1];l=null;if(g[4])for(m=0;m<f.length;++m)if(f[m]&4){l=c[m];f[m]=0;--g[4];break}null==l&&(d&=-5,l=1,b-=.5);m=null;if(g[2]){t=!1;for(n=0;n<f.length;++n)if(f[n]&2){m=c[n];f[n]&=-3;--g[2];(t=0!==(f[n]&8))||--m;break}if(t)for(t=e[n],r=n+1;r<f.length;++r)f[r]&8&&e[r]>
t&&(f[n]|=2,f[r]&=-3,m=c[r],t=e[r],n=r)}e=m;null==e&&(d&=-3);m=null;if(g[1])for(n=0;n<f.length;++n){if(f[n]&1){m=c[n];f[n]=0;--g[1];break}}else if(g[4]|g[2]|g[6]){t=-1;for(n=r=0;n<f.length;++n)f[n]&&!(f[n]&8)&&c[n]>r&&(t=n,r=c[n]);if(0<=t){m=r;switch(f[t]){case 4:--g[4];break;case 2:--g[2];break;case 6:--g[6]}f[t]=0}}c=m;null==c&&(--b,c=new Hl,c=c.getFullYear()+(null!=e&&e<c.getMonth()?1:0),d&=-2);100>c&&(c+=50>c?2E3:1900);if(null==e)if(k)e=0;else{c=null;break a}b-=g[4]+g[2]+g[1]+g[6]+(g[0]>>2);c=
new rT(new Hl(c,e,l),b,d)}c&&!(-1>c.confidence)&&c.g&6?(f=this.j,e=c.date,(f?!f.equals(e):e)?((this.j=c.date)?oG(a,this.B.format(c.date)):oG(a,""),this.A.setDate(this.j),nJ(this.A)):(c="",this.j&&(c=this.B.format(this.j)),oG(a,c))):this.j=null;this.dispatchEvent("change")};function tT(a,b,c){nT.call(this);this.Va=!1;this.Tb="0";this.ma=!!c;this.Sa(a);this.Aa(!b)}
z(tT,nT);var uT=/^((([1-9]|1[0-2])[:.][0-5]\d(a|p)m)|((0?[0-9]|1[0-9]|2[0-3])[:.][0-5]\d))$/;function vT(a){return a?a.Nd().split("T")[0]==(new Hl).Nd().split("T")[0]:!1}
function wT(a){return a.toLowerCase().replace(/\s/g,"")}
function xT(a,b){var c=(new Date(2012,1,1,a,b||0)).getTime()/1E3;var d=d||R("LOCAL_DATE_TIME_CONFIG");var e=d.formatShortTime;Va("goog.i18n.DateTimeSymbols",VP(d));return(new PG(e)).format(new Date(1E3*c))}
h=tT.prototype;
h.fa=function(){tT.J.fa.call(this);this.B=S("TIME_RANGE_NOW").toString();this.R=S("TIME_RANGE_TODAY").toString();var a=this.H();this.wa=bA(this,"time-range-hidden-scheduled-start-date");this.U=bA(this,"time-range-hidden-scheduled-start-time-hour");this.da=bA(this,"time-range-hidden-scheduled-start-time-minute");this.Zd=bA(this,"time-range-hidden-scheduled-start-now");this.qa=bA(this,"time-range-hidden-scheduled-duration-minutes");this.M=bA(this,"time-range-hidden-scheduled-start-time-clear");for(var b=
fj("time-range-date",a),c=0;c<b.length;c++){var d=new PG(2);var e=new XI;cJ(e,!1);eJ(e,!0);aJ(e,!1);YI(e,!0);d=this.ma?new sT(d,e,"en_US"===R("LIVESTREAM_DATE_LOCALE","en")):new oJ(d,new YG(2),e);this.tc(d);d.Sa(b[c]);if(e=mG(this.wa))this.Va=!0,e=e.split("-"),e=new Hl(parseInt(e[0],10),parseInt(e[1]-1,10),parseInt(e[2],10)),d.setDate(e),vT(e)&&oG(d.H(),this.R);this.ma||(cA(this).G(b[c],"keydown",this.ah),cA(this).G(b[c],"cut",this.ah),cA(this).G(b[c],"copy",this.ah),cA(this).G(b[c],"paste",this.ah));
O(b[c],"time-range-date-end")?this.D=d:this.A=d}a=fj("time-range-time",a);for(b=0;b<a.length;b++){e=dj("input",null,a[b])[0];c=O(a[b],"time-range-time-end");Bj(e);d=new NI;d.za(a[b]);var f=d.ka.H();P(f,"time-range-menu");f=d.rb;e=dn(e);fn(f,e);e=d;f=!c;var g=new TI(S("TIME_RANGE_COMBOBOX_CAPTION"));g.K=!0;g.Aa(!1);var k=e;k.ka.tc(g,!0);k.Hc=-1;f&&(f=new TI(this.B),$z(f,"now-combo-box-item-id"),g=e,g.ka.tc(f,!0),g.Hc=-1);for(f=0;48>f;f++){var l=Math.floor(f/2);k=f%2?30:0;g=e;k=new TI(xT(l,k));g.ka.tc(k,
!0);g.Hc=-1}cA(this).G(d.rb,"blur",w(this.Su,this));e=mG(this.U);f=mG(this.da);e&&f?(this.Va=!0,e=xT(parseInt(e,10),parseInt(f,10))):e=this.B;d.setValue(e);c?this.K=d:this.j=d}this.ic=N("time-range-start-time-highlight");this.S=M("end-time-selector");this.O=bA(this,"time-selector-add-schedule");a=mG(this.qa);this.S&&yT(this,parseInt(a,10));"true"==mG(this.Zd)&&zT(this);this.Tb=a;K(this.A,"change",w(this.Qu,this));K(this.j,"change",w(this.Ru,this));this.D&&K(this.D,"change",w(this.tt,this));this.K&&
K(this.K,"change",w(this.wt,this));this.O&&cA(this).G(this.O,"change",this.Vr);yK("mde-display-end-time",w(this.vt,this));yK("mde-hide-end-time",w(this.tf,this));yK("time-range-custom-encoder-selected",w(this.Zs,this));yK("time-range-custom-encoder-deselected",w(this.Ys,this));yK("ld-video-id-changed",w(this.du,this));this.Va||this.M&&"true"==this.M.value||zT(this)};
h.Su=function(){AT(this)||(BT(this,this.de)?this.j.setValue(this.B):this.j.setValue(this.de))};
h.ah=function(a){"keydown"==a.type&&9==a.keyCode||a.preventDefault()};
h.Zs=function(){if("now-combo-box-item-id"==iA(this.j.ka,1).getId()){var a=this.j;var b=a.ka;if(b=b.ti(iA(b,1),!0))b.dispose(),a.Hc=-1}this.O||(IH(this.j.ta)==this.B?(this.be?this.j.setValue(this.be):CT(this),this.pb&&this.A.setDate(this.pb),DT(this)):this.pb=null)};
function CT(a){var b=(new Date).getHours()+1,c=xT(b);a.j.setValue(c);24==b?(b=new Hl,b.add(new Gl("d",1)),a.A.setDate(b)):a.A.setDate(new Hl)}
function ET(a){oG(a.M,!0);qL(a.M,"change");a.dispatchEvent("user_change")}
h.Vr=function(){this.O.checked?(oG(this.M,!1),CT(this),qL(this.M,"change"),this.dispatchEvent("user_change")):ET(this)};
h.du=function(){this.O.checked=!1;ET(this)};
h.Ys=function(){if("now-combo-box-item-id"!=iA(this.j.ka,1).getId()){var a=new TI(this.B);$z(a,"now-combo-box-item-id");var b=this.j;b.ka.Mf(a,1,!0);b.Hc=-1}this.pb=FT(this);zT(this);DT(this)};
h.tf=function(){(this.ma||FT(this))&&AT(this)&&GT(this);this.dispatchEvent("change")};
h.Qu=function(){vT(FT(this))?oG(this.A.H(),this.R):IH(this.j.ta)==this.B&&(CT(this),BK("time-range-now-deselected"));this.tf()};
h.tt=function(){vT(HT(this))&&oG(this.D.H(),this.R);this.tf()};
h.Ru=function(){IH(this.j.ta)==this.B?(IT(this),BK("time-range-now-selected")):BK("time-range-now-deselected");this.tf()};
h.wt=function(){this.tf()};
h.vt=function(){yT(this,120);GT(this)};
function yT(a,b){var c=parseInt(mG(a.U),10),d=parseInt(mG(a.da),10);if(!isNaN(c)&&!isNaN(d)){var e=FT(a);if(e){c+=Math.floor(b/60);d+=b%60;59<d&&(c++,d-=60);var f=Math.floor(c/24);c=xT(c-24*f,d);a.K.setValue(c);e.add(new Gl("d",f));a.D.setDate(e)}}}
function zT(a){a.j.setValue(a.B);IT(a);GT(a);BK("time-range-now-selected")}
function IT(a){a.A.ge().xj();oG(a.A.H(),a.R)}
function GT(a){var b=(b=FT(a))?[b.getYear(),se(b.getMonth()+1,2),se(b.getDate(),2)].join("-"):"xxxx-xx-xx";oG(a.wa,b);qL(a.wa,"change");var c=IH(a.j.ta);if(BT(a,c))b=new Date,c=b.getMinutes(),b=b.getHours();else{var d=JT(c);b=parseInt(d[0],10);c.match(/pm/i)?12!=b&&(b+=12):c.match(/am/i)&&12==b&&(b=0);c=parseInt(d[1],10)}oG(a.U,b);oG(a.da,c);qL(a.U,"change");qL(a.da,"change");b=IH(a.j.ta);c=mG(a.A.H());var e;BT(a,b)&&KT(a,c)&&(e="true");oG(a.Zd,e);e=LT(a);oG(a.qa,e);qL(a.qa,"change");a.Tb=e.toString();
a.dispatchEvent("user_change")}
function MT(a,b){if(BT(a,b))return(new Date).getHours();var c=parseInt(JT(b)[0],10);b.match(/pm/i)?12!=c&&(c+=12):b.match(/am/i)&&12==c&&(c=0);return c}
function NT(a,b){return BT(a,b)?(new Date).getMinutes():parseInt(JT(b)[1],10)}
function BT(a,b){var c=wT(b),d=wT(a.B);return c==d}
function KT(a,b){var c=wT(b),d=wT(a.R);return c==d}
function AT(a){var b=IH(a.j.ta).toLowerCase().replace(/\s/g,""),c=b.match(uT),d=BT(a,b);if(c=!(!c&&!d))a.de=b,d||(a.be=b);return c}
function FT(a){var b=a.A.H();b=mG(b);return KT(a,b)?new Ll:a.A.getDate()}
function HT(a){var b=a.D.H();b=mG(b);return KT(a,b)?new Ll:a.D.getDate()}
function LT(a){if(!a.S||!BN(a.S)||O(a.S,"ng-hide"))return 0;var b=FT(a);if(!b)return 0;var c=HT(a);if(!c)return 0;var d=IH(a.j.ta),e=IH(a.K.ta);b.setHours(MT(a,d));b.setMinutes(NT(a,d));b.setSeconds(0);b.setMilliseconds(0);c.setHours(MT(a,e));c.setMinutes(NT(a,e));c.setSeconds(0);c.setMilliseconds(0);return Kl(c,b)/6E4}
h.Aa=function(a){this.j.Aa(a);bL(this.A.H(),a);this.K&&this.K.Aa(a);this.D&&bL(this.D.H(),a);$P()};
function JT(a){a=a.toLowerCase();a=a.replace(/\s/g,"");a.match(uT);return a.split(/[\.:]/)}
function DT(a){EN(a.ic);var b=a.ic;a={duration:1.2,Fa:w(FN,a,a.ic),start:.4,end:0};hT()?new mT(b,a):new lT(b,a)}
;var OT=(120).toString();
function PT(a){this.T=a;var b=angular.fromJson(a.initialTimeInfo);this.T.timeSelectorInfo={scheduledStartDate:b.scheduledStartDate,scheduledStartTimeHour:b.scheduledStartTimeHour,scheduledStartTimeMinute:b.scheduledStartTimeMinute,scheduledStartTimeClear:b.scheduledStartTimeClear,scheduledTimezone:b.scheduledTimezone,timePickerDisabled:b.timePickerDisabled};this.T.country=b.country;this.T.timezones=[];this.T.editingTimeZone=!1;this.T.summary=QT(this);this.T.$watch("country",w(function(c,d){this.T.timezones=
b.globalTimezoneList[c];c!=d&&(this.T.timeSelectorInfo.scheduledTimezone=this.T.timezones[0].name)},this));
this.T.$on("$destroy",function(){this.T.timeSelectorInfo=null})}
q("yt.www.creator.angular.controllers.TimeSelector",PT,void 0);PT.$inject=["$scope","$timeout"];function QT(a){var b=M("country-select");return b[b.selectedIndex].innerHTML+" "+a.T.timeSelectorInfo.scheduledTimezone}
PT.prototype.pt=function(){this.T.editingTimeZone=!0};
PT.prototype.onEditTimeZoneClicked=PT.prototype.pt;PT.prototype.Ur=function(){this.T.timeSelectorInfo.scheduledDurationMinutes=OT;BK("mde-display-end-time")};
PT.prototype.onAddEndTimeClicked=PT.prototype.Ur;PT.prototype.zu=function(){this.T.timeSelectorInfo.scheduledDurationMinutes="0";BK("mde-hide-end-time")};
PT.prototype.onRemoveEndTimeClicked=PT.prototype.zu;function RT(){return{require:["ngModel","timeSelector"],link:function(a,b,c,d){var e=d[0];b=new tT(b.valueOf()[0],a.timeSelectorInfo.timePickerDisabled);BK("time-range-custom-encoder-selected");a.timeSelectorInfo.scheduledDurationMinutes=b.Tb;a.$watch("timeSelectorInfo",function(){e.$setViewValue(a.timeSelectorInfo)},!0)},
templateUrl:"time_selector.html",controller:PT,controllerAs:"ctrl",scope:{initialTimeInfo:"@",isStreamingOrCompleted:"="}}}
var ST=mR(function(){var a=angular.module("yt.www.creator.angular.directives.timeSelector",[]);a.directive("timeSelector",RT);return a});function TT(){nT.call(this);this.Ja=this.A=null;this.Af=!0;this.D=!1;this.j=this.B=null}
ra(TT,nT);h=TT.prototype;
h.fa=function(){nT.prototype.fa.call(this);var a=T(this.H(),"show-button-id");a&&(a=M(a),cA(this).G(a,"click",this.show));this.D=!!T(this.H(),"hide-dialog-after-save");a=bA(this,"yt-video-picker-dialog-template");var b=bA(this,"yt-video-picker-dialog");a?(a=uP(a),a=a.replace(/^[\s\xa0]+/,""),Hc(a)?(a=vj(Nl("<table><tbody>"+a+"</tbody></table>")),a=aL("tr",null,a)):(b=document.createElement("div"),b.innerHTML=a,a=Dj(b)),this.B=a,document.body.appendChild(this.B),cA(this).G(this.B,"submit",this.zq),
this.j=N("yt-dialog",this.B),this.Af="True"==N("yt-video-picker-show-warnings",this.Ja).value):b&&(this.j=N("yt-dialog",b),document.body.appendChild(this.j),a=N("yt-dialog-save",this.j),cA(this).G(a,"click",this.save),this.Af=!0,this.B=null);this.j&&(this.A=new IO(this.j),LO(this.A,"all",w(this.Gp,this)),LO(this.A,"cancel",w(this.Fp,this)));this.Ja=N("yt-video-picker-modal",this.j||this.H());oT(this,"click","yt-video-picker-videos-label",Ua(this.Ql,N("yt-video-picker-videos",this.Ja)),null,this.Ja);
oT(this,"click","yt-video-picker-playlists-label",Ua(this.Ql,N("yt-video-picker-playlists",this.Ja)),null,this.Ja);oT(this,"click","yt-video-picker-grid",this.Gq,null,this.Ja);oT(this,"dblclick","yt-video-picker-grid",this.Hq,null,this.Ja);oT(this,"click","yt-video-picker-url",this.Iq,null,this.Ja)};
h.na=function(){this.B?Bj(this.B):this.j&&Bj(this.j);nT.prototype.na.call(this)};
h.N=function(){this.A.dispose();this.A=null;nT.prototype.N.call(this)};
h.show=function(){this.A&&(this.A.show(),BK("yt-ui-videopicker-open",this))};
h.save=function(){if(this.A){var a="",b="",c=N("selected-video-picker-item",this.Ja);c&&(c=N("video-item-id",c),O(c,"yt-video-picker-playlist")?a=c.value:b=c.value);c=N("yt-video-picker-url",this.Ja);var d=bA(this,"yt-video-picker-playlist-item-id-hidden-input"),e=bA(this,"yt-video-picker-item-id-hidden-input"),f=bA(this,"yt-video-picker-url-hidden-input");d.value=a;e.value=b;f.value=c?c.value:"";a=N("yt-video-picker-errors",this.Ja);xj(a);this.D&&this.A.dismiss("save");BK("yt-ui-videopicker-save",
this)}};
h.Gp=function(){BK("yt-ui-videopicker-close",this)};
h.Fp=function(){UT(this,!0);BK("yt-ui-videopicker-cancel",this)};
h.zq=function(a){a.preventDefault();a=a.currentTarget;a.getAttribute("action")?zM(a,{context:this,onSuccess:function(b,c){c.warnings&&this.Af?VT(this,c.warnings[0]):this.save()},
onError:function(b,c){if(c.errors){var d=c.errors[0];if(d){var e=bA(this,"yt-video-picker-error-template"),f=N("yt-video-picker-errors",this.Ja);if(O(e,"yt-alert-error")){if(e=e.cloneNode(!0),f){e.removeAttribute("id");hn(e,eR);P(e,"yt-alert-error");var g=N("yt-alert-message",e),k=N("yt-alert-content",e);(g||k).innerHTML=d;f.appendChild(e);EN(e)}}else e=tP(e,["error"]),f.innerHTML=e.za({error:d})}}}}):this.save()};
h.Ql=function(a,b){var c=b.target;c&&(c=Yj(c,"button"))&&WT(this,a,c)};
function WT(a,b,c){var d=fj("yt-video-picker-label",a.Ja);A(d,function(e){gn(e,"selected")});
P(c,"selected");a=fj("yt-video-picker-grid",a.Ja);A(a,function(e){P(e,"hid")});
gn(b,"hid")}
h.Gq=function(a){if(a=a.target)if(a=ak(a,"video-picker-item")){UT(this,!0);P(a,"selected-video-picker-item");var b=N("video-item-id",a);b&&(b.checked=!0);this.Af&&(a=N("video-item-warning",a))&&(a=a.getAttribute("data-warning-css-class"),VT(this,a))}};
h.Hq=function(a){(a=a.target)&&ak(a,"video-picker-item")&&BK("yt-ui-videopicker-quick-submit",this)};
h.Iq=function(a){(a=a.target)&&ak(a,"yt-video-picker-url")&&UT(this,!1)};
function UT(a,b){var c=N("selected-video-picker-item",a.Ja);c&&(gn(c,"selected-video-picker-item"),c=N("video-item-id",c))&&(c.checked=!1);b&&(c=N("yt-video-picker-url",a.Ja))&&(c.value="");c=N("yt-video-picker-errors",a.Ja);xj(c);a.Af&&(c=fj("yt-video-picker-warning",a.Ja),A(c,function(d){FN(d)}),XT(a,!1))}
function VT(a,b){if(b){var c=N(b,a.Ja);EN(c);XT(a,!0)}}
function XT(a,b){var c=N("yt-video-picker-show-warnings",a.Ja);c&&(c.value=(!b).toString())}
;var ZT=u("ytglobal.prefsUserPrefsPrefs_")||{};q("ytglobal.prefsUserPrefsPrefs_",ZT,void 0);function $T(){this.g=R("ALT_PREF_COOKIE_NAME","PREF");var a=FM(this.g);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(ZT[d]=c.toString())}}}
h=$T.prototype;h.get=function(a,b){aU(a);bU(a);var c=void 0!==ZT[a]?ZT[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){aU(a);bU(a);if(null==b)throw Error("ExpectedNotNull");ZT[a]=b.toString()};
function cU(a,b){return!!((dU("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
function eU(a,b){var c="f"+(Math.floor(a/31)+1),d=1<<a%31,e=dU(c)||0;e=b?e|d:e&~d;0==e?delete ZT[c]:(d=e.toString(16),ZT[c]=d.toString())}
h.remove=function(a){aU(a);bU(a);delete ZT[a]};
h.save=function(){EM(this.g,this.dump(),63072E3)};
h.clear=function(){for(var a in ZT)delete ZT[a]};
h.dump=function(){var a=[],b;for(b in ZT)a.push(b+"="+encodeURIComponent(String(ZT[b])));return a.join("&")};
function bU(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function aU(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function dU(a){a=void 0!==ZT[a]?ZT[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ka($T);function fU(){gU||(gU=jj());return gU}
function hU(a){if(!iU||a)iU=mj(document);return iU}
var gU=null,iU=null;var jU=0,kU=[],lU={},mU=[];function nU(a){0==kU.length&&0==kU.length&&(kU.push(yK("page-resize",oU)),kU.push(yK("page-scroll",oU)));ec(lU,a);pU()}
function qU(){A(["load-more-auto"],function(a){Yb(lU,a)})}
function rU(){var a=fU();return hU().y+a.height}
function oU(){var a=rU(),b=jU;if(!b||a>=b)pU(),jU=a}
function pU(){var a=rU();sU(function(b,c){var d=T(b,"scrolldetect-offset");d=parseInt(d,10)||0;var e;if(e=M(b)){var f=0,g=0;if(e.offsetParent){do f+=e.offsetLeft,g+=e.offsetTop;while(e=e.offsetParent)}e=new Ti(f,g)}else e=null;a>=e.y-d&&(d=lU[c])&&!mb(mU,b)&&(d.call(p,b),mU.push(b))})}
function sU(a){var b=fj("scrolldetect");b.length&&A(b,function(c){var d=T(c,"scrolldetect-callback");d&&a.call(p,c,d)})}
;var tU,uU,vU,wU,xU,yU,zU=0,AU=!1;function BU(){AU||(u("yt.www.page.visibilitymonitor").dispose(),uU={},vU={},tU={},wU={},yU=[],xU=CU(),yU.push(yK("page-resize",DU)),yU.push(yK("page-scroll",EU)),yU.push(yK("yt-dom-content-change",FU)),AU=!0,GU(!0))}
function HU(){AU&&(AK(yU),IU(),uU={},vU={},tU={},wU={},yU.length=0,xU=null,AU=!1)}
function DU(){xU=CU();FU()}
function EU(){xU=CU();JU()}
function CU(){var a=hU(!0),b=fU();return new Yl(a.y,a.x+b.width-1,a.y+b.height-1,a.x)}
function KU(a){var b=WK(a),c=tU[b];if(c)return c;c=U(a,"scroll",LU);return c=tU[b]={el:a,Sv:c,Ge:null}}
function IU(){Nb(tU,function(a,b){var c=tU[b];c&&nL(c.Sv);delete tU[b]})}
function LU(a){FU(a.target)}
function MU(a,b){var c=[WK(a),b.complete];if(b.transform){var d=b.transform;c.push(d.top,d.right,d.bottom,d.left)}return c.join(":")}
function NU(a,b){var c;b?c=a:c=Hj(a);return c?(c=ak(c,"yt-viewport"))?KU(c):null:null}
function OU(a,b){if(a.Ge&&!b)return a.Ge;var c=PU(a.el),d=NU(a.el);d&&(d=OU(d,b),c=QU(c,d));return a.Ge=c}
function PU(a){var b=nm(a);a=new Wi(a.offsetWidth,a.offsetHeight);return new Yl(b.y,b.x+a.width-1,b.y+a.height-1,b.x)}
function QU(a){var b=[],c=[],d=[],e=[];A(arguments,function(m){b.push(m.top);c.push(m.right);d.push(m.bottom);e.push(m.left)});
var f=Math.max.apply(Math,b),g=Math.min.apply(Math,c),k=Math.min.apply(Math,d),l=Math.max.apply(Math,e);return f>k||l>g?new Yl(0,0,0,0):new Yl(f,g,k,l)}
function RU(a,b){var c=xU,d=PU(a);b.transform&&d.expand(b.transform);var e;b.complete?e=Zl:e=$l;if(!e.call(Yl,c,d))return!1;var f=NU(a);if(!f)return!0;OU(f);c=QU(c,f.Ge);return e.call(Yl,c,d)}
function SU(a,b,c){var d=MU(a,c);b.hasOwnProperty(d)||(b[d]=RU(a,c));return b[d]}
function TU(a,b,c){a=MU(a,c);if(!!wU[a]!=b)return b?"visible":"hidden"}
function UU(a,b){Nb(uU,function(c){if(c&&(!b||Ij(b,c.el))){var d=SU(c.el,a,c.options);(d=TU(c.el,d,c.options))&&d==c.type&&rK(Ua(c.lb,c.el),0)}})}
function VU(a,b){Nb(vU,function(c){if(c&&(!b||Ij(c.el,b)||Ij(b,c.el))){var d=c.filter(c.el);if(d&&d.length){var e=[],f=[],g=[];A(d,function(k){var l=SU(k,a,c.options);l?f.push(k):g.push(k);(l=TU(k,l,c.options))&&l==c.type&&e.push(k)});
e.length&&rK(Ua(c.lb,e,f,g),0)}}})}
function JU(a){var b={};UU(b,a);VU(b,a);ec(wU,b)}
function WU(a,b,c,d){return Wb(uU,function(e){return e.el==a&&e.type==b&&e.lb==c&&ac(e.options,d)})}
function XU(a,b,c,d,e){return Wb(vU,function(f){return f.el==a&&f.type==b&&f.lb==c&&f.className==d&&ac(f.options,e)})}
function YU(a,b){var c=fj("yt-viewport",b);A(c,a)}
function ZU(a){YU(function(b){KU(b)},a);
Gj(a)&&NU(a,!0)}
function $U(a,b){Nb(tU,function(c){b&&!Ij(b,c.el)||b==c.el||a(c)})}
function aV(a){var b=OU(a,!0);a=a.Ge;return!(a==b||a&&b&&a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left)}
function FU(a){if(AU){var b;if(a)for(b=NU(a,!0);b&&aV(b);)b=NU(a);$U(function(c){delete c.Ge},b?b.el:a);
JU(a)}}
function bV(a,b){if(!AU)throw Error("yt.www.page.visibilitymonitor is not initialized.");return RU(a,b||{})}
function cV(a,b,c,d){if(!AU)return"";d=d||{transform:void 0,complete:void 0};var e=WU(a,b,c,d);if(e)return e;ZU(a);e=++zU+"";uU[e]={el:a,type:b,lb:c,options:d};return e}
function dV(a,b,c,d,e){if(!AU)return"";a=a||document;e=e||{transform:void 0,complete:void 0};var f=XU(a,b,c,d,e);if(f)return f;ZU(a);f=++zU+"";vU[f]={el:a,type:b,lb:c,filter:function(g){return fj(d,g)},
className:d,options:e};return f}
function eV(a){AU&&(delete uU[a],delete vU[a])}
function GU(a){var b=u("yt.www.page.visibilitymonitor");if(a||!b)q("yt.www.page.visibilitymonitor.States.VISIBLE","visible",void 0),q("yt.www.page.visibilitymonitor.States.HIDDEN","hidden",void 0),q("yt.www.page.visibilitymonitor.init",BU,void 0),q("yt.www.page.visibilitymonitor.dispose",HU,void 0),q("yt.www.page.visibilitymonitor.refresh",FU,void 0),q("yt.www.page.visibilitymonitor.isVisible",bV,void 0),q("yt.www.page.visibilitymonitor.listen",cV,void 0),q("yt.www.page.visibilitymonitor.delegateByClass",
dV,void 0),q("yt.www.page.visibilitymonitor.unlistenByKey",eV,void 0)}
GU(!1);function fV(){ON.call(this,"load-more")}
z(fV,ON);Ka(fV);h=fV.prototype;h.register=function(){PN(this,"click",this.loadMore)};
h.unregister=function(){QN(this,"click",this.loadMore);fV.J.unregister.call(this);qU()};
h.init=function(){var a={},b=w(this.loadMore,this);a["load-more-auto"]=b;nU(a);a=fj(W(this));A(a,function(c){O(c,"scrolldetect")&&RU(c,{})&&(gn(c,"scrolldetect"),b(c))})};
h.addClass=function(a,b){P(a,W(this,b))};
h.removeClass=function(a,b){gn(a,W(this,b))};
h.loadMore=function(a){if(!a.disabled){var b=this.aa(a,"uix-load-more-href")||"";gV(this,a,b)}};
function gV(a,b,c){var d="GET",e="";a.aa(b,"uix-load-more-post")&&(d="POST",e=a.aa(b,"uix-load-more-post-body"));P(b,W(a,"loading"));b.disabled=!0;FN(N("load-more-text",b));EN(N("load-more-loading",b));a.removeClass(b,"error");sM(c,{context:a,method:d,postBody:e,onSuccess:w(a.xq,a,b),onError:w(a.Wj,a,b),ue:w(a.Wj,a,b),Fa:function(){FN(N("load-more-loading",b));EN(N("load-more-text",b));b.disabled=!1;gn(b,W(this,"loading"))}})}
h.xq=function(a,b,c){b=c.content_html;var d;if(d=this.aa(a,"uix-load-more-target-id"))d=M(d);else if(d=this.aa(a,"uix-load-more-target-class")){var e=a,f=this.aa(a,"uix-load-more-trigger-id");f&&(e=M(f));d=ak(e,d)}else d=null;if(!b&&this.aa(a,"uix-load-more-hide-on-empty"))FN(a);else if(b&&d){this.aa(a,"uix-load-more-replace-content")&&xj(d);b=cL(b);this.aa(a,"uix-load-more-insert-before-content")?Aj(d,b):wj(d,b);BK("yt-dom-content-change",a.parentElement);b=cL(c.load_more_widget_html||"");(e=a.parentNode)&&
e.replaceChild(b,a);if(a=c.tracking_params||"")P(d,"il-attach-check"),QJ(d,"tracking-params",a);BK("yt-uix-load-more-success",d)}else this.Wj(a)};
h.Wj=function(a){this.addClass(a,"error")};function hV(a){this.trailerEncVideoId=a.trailerEncVideoId||null;this.errorText=null;this.loadingTrailer=!1;this.g=null;this.T=a;xQ(fV);a=N("trailer-video-picker");this.g=new TT;this.g.Sa(a);yK("yt-ui-videopicker-save",w(this.j,this))}
q("yt.www.creator.angular.controllers.Trailer",hV,void 0);hV.$inject=["$scope"];hV.prototype.Xk=function(){var a={has_trailer:null!=this.trailerEncVideoId};null!=this.trailerEncVideoId&&(a.trailer_enc_video_id=this.trailerEncVideoId);return a};
hV.prototype.getTrailerInfo=hV.prototype.Xk;hV.prototype.Uv=function(){this.errorText=null;var a=N("trailer-video-picker-form"),b=N("yt-uix-button-menu-item-selected",a);a=fj("video-picker-item",a);b&&!a.length&&fV.V().loadMore(b);this.g.show()};
hV.prototype.selectOrChangeTrailer=hV.prototype.Uv;hV.prototype.Iv=function(){this.trailerEncVideoId=null;var a=N("trailer-video-lockup");xj(a)};
hV.prototype.removeTrailer=hV.prototype.Iv;hV.prototype.j=function(){var a=N("yt-video-picker-item-id-hidden-input"),b=N("yt-video-picker-url-hidden-input");a={trailer_video_id:a.value,trailer_video_url:b.value};this.loadingTrailer=!0;yM("/metadata_ajax",{format:"JSON",Ua:vP({action_draw_selected_trailer_video:1}),ya:a,context:this,ed:!0,onSuccess:this.l,Fa:function(){this.loadingTrailer=!1;this.T.$apply()}})};
hV.prototype.l=function(a,b){if(b.metadata_errors)this.errorText=b.metadata_errors[0].message;else{this.trailerEncVideoId=b.trailer_enc_video_id;var c=N("trailer-video-lockup");c&&ae(c,b.trailer_lockup_html)}};function iV(){return{require:["trailer","ngModel"],controller:hV,controllerAs:"ctrl",scope:{trailerEncVideoId:"@"},templateUrl:"trailer.html",link:function(a,b,c,d){var e=d[0],f=d[1];a.$watch("ctrl.trailerEncVideoId",function(){f.$setViewValue(e.Xk())},!0)}}}
var jV=mR(function(){var a=angular.module("yt.www.creator.angular.directives.trailer",[]);a.directive("trailer",iV);return a});function kV(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||bc(b);this.assets=a.assets||{};this.attrs=a.attrs||bc(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
function lV(a){a instanceof kV||(a=new kV(a));return a}
kV.prototype.clone=function(){var a=new kV,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=bc(c):a[b]=c}return a};function mV(){I.call(this);this.g=[]}
ra(mV,I);mV.prototype.Z=function(a){for(var b=0;b<this.g.length;b++)if(this.g[b]==a){this.g.splice(b,1);a.target.removeEventListener(a.name,a.Ea);break}};
mV.prototype.N=function(){for(;this.g.length;){var a=this.g.pop();a.target.removeEventListener(a.name,a.Ea)}I.prototype.N.call(this)};var nV=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function oV(a){a=a||"";if(window.spf){var b=a.match(nV);spf.style.load(a,b?b[1]:"",void 0)}else pV(a)}
function pV(a){var b=qV(a),c=document.getElementById(b),d=c&&T(c,"loaded");d||c&&!d||(c=rV(a,b,function(){T(c,"loaded")||(QJ(c,"loaded","true"),BK(b),rK(Ua(DK,b),0))}))}
function rV(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Pl(a);d.rel="stylesheet";d.href=Sc("stylesheet","stylesheet")?wc(a):a instanceof tc?wc(a):a instanceof Vc?Yc(a):Yc(bd(a));(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function qV(a){var b=uj("A");a=Zd(oc("This URL is never added to the DOM"),a);ce(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ue(b)}
;function sV(a,b,c,d){I.call(this);var e=this;this.C=this.da=a;this.S=b;this.F=!1;this.api={};this.U=this.K=null;this.L=new qH;Rh(this,this.L);this.A={};this.P=this.ja=this.j=this.Ra=this.g=null;this.M=!1;this.B=this.D=null;this.ma={};this.Va=["onReady"];this.qa=null;this.wa=NaN;this.O={};this.l=d;tV(this);this.Nf("WATCH_LATER_VIDEO_ADDED",this.gu.bind(this));this.Nf("WATCH_LATER_VIDEO_REMOVED",this.hu.bind(this));this.Nf("onAdAnnounce",this.Zn.bind(this));this.pb=new mV(this);Rh(this,this.pb);this.R=
0;c?this.R=rK(function(){e.loadNewVideoConfig(c)},0):d&&(uV(this),vV(this))}
ra(sV,I);h=sV.prototype;h.getId=function(){return this.S};
h.loadNewVideoConfig=function(a){if(!this.Pb()){this.R&&(tK(this.R),this.R=0);this.Ra=a=lV(a);this.g=a.clone();uV(this);this.ja||(this.ja=wV(this,this.g.args.jsapicallback||"onYouTubePlayerReady"));this.g.args.jsapicallback=null;(a=this.g.attrs.width)&&wm(this.C,Number(a)||a);if(a=this.g.attrs.height)this.C.style.height=im(Number(a)||a,!0);vV(this);this.F&&xV(this)}};
function uV(a){var b;a.l?b=a.l.rootElementId:b=a.g.attrs.id;a.j=b||a.j;"video-player"==a.j&&(a.j=a.S,a.g.attrs.id=a.S);a.C.id==a.j&&(a.j+="-player",a.g.attrs.id=a.j)}
h.Xo=function(){return this.Ra};
function xV(a){a.g&&!a.g.loaded&&(a.g.loaded=!0,"0"!=a.g.args.autoplay?a.api.loadVideoByPlayerVars(a.g.args):a.api.cueVideoByPlayerVars(a.g.args))}
function yV(a){var b=!0,c=zV(a);c&&a.g&&(a=AV(a),b=T(c,"version")===a);return b&&!!u("yt.player.Application.create")}
function vV(a){if(!a.Pb()&&!a.M){var b=yV(a);if(b&&"html5"==(zV(a)?"html5":null))a.P="html5",a.F||BV(a);else if(CV(a),a.P="html5",b&&a.B)a.da.appendChild(a.B),BV(a);else{a.g&&(a.g.loaded=!0);var c=!1;a.D=function(){c=!0;if(a.l)var d=a.l.serializedExperimentFlags;else a.g&&a.g.args&&(d=a.g.args.fflags);d="true"==XL(d||"").player_bootstrap_method?u("yt.player.Application.createAlternate")||u("yt.player.Application.create"):u("yt.player.Application.create");var e=a.g?a.g.clone():void 0;d(a.da,e,a.l);
BV(a)};
a.M=!0;b?a.D():(HK(AV(a),a.D),(b=a.l?a.l.cssUrl:a.g.assets.css)&&oV(b),DV(a)&&!c&&q("yt.player.Application.create",null,void 0))}}}
function zV(a){var b=M(a.j);!b&&a.C&&a.C.querySelector&&(b=a.C.querySelector("#"+a.j));return b}
function BV(a){if(!a.Pb()){var b=zV(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.M=!1,b.isNotServable&&a.g&&b.isNotServable(a.g.args.video_id)||EV(a)):a.wa=rK(function(){BV(a)},50)}}
function EV(a){tV(a);a.F=!0;var b=zV(a);b.addEventListener&&(a.K=FV(a,b,"addEventListener"));b.removeEventListener&&(a.U=FV(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=FV(a,b,e))}for(var f in a.A)a.K(f,a.A[f]);xV(a);a.ja&&a.ja(a.api);a.L.ac("onReady",a.api)}
function FV(a,b,c){var d=b[c];return function(){try{return a.qa=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.qa=e,qK(e))}}}
function tV(a){a.F=!1;if(a.U)for(var b in a.A)a.U(b,a.A[b]);for(var c in a.O)tK(parseInt(c,10));a.O={};a.K=null;a.U=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Nf.bind(a);a.api.removeEventListener=a.Fv.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.cp.bind(a);a.api.getPlayerType=a.hp.bind(a);a.api.getCurrentVideoConfig=a.Xo.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.lr.bind(a)}
h.lr=function(){return this.F};
h.Nf=function(a,b){var c=this,d=wV(this,b);if(d){if(!mb(this.Va,a)&&!this.A[a]){var e=GV(this,a);this.K&&this.K(a,e)}this.L.subscribe(a,d);"onReady"==a&&this.F&&rK(function(){d(c.api)},0)}};
h.Fv=function(a,b){if(!this.Pb()){var c=wV(this,b);c&&sH(this.L,a,c)}};
function wV(a,b){var c=b;if("string"==typeof b){if(a.ma[b])return a.ma[b];c=function(){var d=u(b);d&&d.apply(p,arguments)};
a.ma[b]=c}return c?c:null}
function GV(a,b){var c="ytPlayer"+b+a.S;a.A[b]=c;p[c]=function(d){var e=rK(function(){a.Pb()||(a.L.ac(b,d),Yb(a.O,String(e)))},0);
Zb(a.O,String(e),!0)};
return c}
h.Zn=function(a){BK("a11y-announce",a)};
h.gu=function(a){BK("WATCH_LATER_VIDEO_ADDED",a)};
h.hu=function(a){BK("WATCH_LATER_VIDEO_REMOVED",a)};
h.hp=function(){return this.P||(zV(this)?"html5":null)};
h.cp=function(){return this.qa};
function CV(a){a.cancel();tV(a);a.P=null;a.g&&(a.g.loaded=!1);var b=zV(a);b&&(yV(a)||!DV(a)?a.B=b:(b&&b.destroy&&b.destroy(),a.B=null));xj(a.da)}
h.cancel=function(){if(this.D){var a=AV(this),b=this.D;a&&b&&(a=""+Pa(b),(a=KK[a])&&AK(a))}tK(this.wa);this.M=!1};
h.N=function(){CV(this);if(this.B&&this.g&&this.B.destroy)try{this.B.destroy()}catch(b){pK(b)}this.ma=null;for(var a in this.A)p[this.A[a]]=null;this.Ra=this.g=this.api=null;delete this.da;delete this.C;I.prototype.N.call(this)};
function DV(a){return a.g&&a.g.args&&a.g.args.fflags?-1!=a.g.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function AV(a){return a.l?a.l.jsUrl:a.g.assets.js}
;var HV={},IV="player_uid_"+(1E9*Math.random()>>>0);function JV(a,b){return KV(a,b)}
function KV(a,b){var c=void 0===c?!0:c;a="string"===typeof a?bj(document,a):a;var d=IV+"_"+Pa(a),e=HV[d];if(e&&c)return b&&b.args&&b.args.fflags&&b.args.fflags.includes("web_player_remove_playerproxy=true")?e.api.loadVideoByPlayerVars(b.args||null):e.loadNewVideoConfig(b),e.api;e=new sV(a,d,b,void 0);HV[d]=e;BK("player-added",e.api);Sh(e,Ua(LV,e));return e.api}
function LV(a){delete HV[a.getId()]}
;function MV(a,b){this.g=b;a.dialogCtrl=this}
q("yt.www.creator.angular.controllers.acceptCancelDialog.Controller",MV,void 0);MV.$inject=["$scope","dialogInstance"];MV.prototype.accept=function(){this.g.close("accept")};
MV.prototype.accept=MV.prototype.accept;MV.prototype.cancel=function(){this.g.dismiss("cancel")};
MV.prototype.cancel=MV.prototype.cancel;var NV=mR(function(){var a=angular.module("yt.www.creator.angular.controllers.acceptCancelDialog",[]);a.controller("acceptCancelDialog",MV);return a});function OV(a,b,c){this.g=a;this.g.addEventListener("onStateChange",w(this.Tu,this));this.g.addEventListener("onCueRangeEnter",w(this.uw,this));this.T=b;this.Sb=c;this.A=this.B=this.j=!1;this.l=!0}
h=OV.prototype;h.hg=function(){return this.g.isReady()?1E3*this.g.getCurrentTime():0};
h.pauseVideo=function(){this.g.pauseVideo()};
h.rf=function(){return this.g.isReady()?1==this.g.getPlayerState():!1};
h.Vi=function(){return this.B};
h.Ui=function(){return this.A};
h.Ti=function(){return this.j};
h.addCueRange=function(a,b,c){this.g.addCueRange(a,b/1E3,c/1E3)};
h.removeCueRange=function(a){this.g.removeCueRange(a)};
h.Tu=function(a){1==a&&this.j&&this.g.pauseVideo();2==a&&this.j&&(this.j=!1,this.g.setVolume(100));1!=a||this.l||this.g.pauseVideo();this.T.$evalAsync()};
h.uw=function(){this.rf()&&(this.g.pauseVideo(),this.B=!0,this.Sb(w(this.Nv,this),3E3),this.T.$evalAsync())};
h.Nv=function(){this.B=!1;this.g.playVideo()};
function PV(a){return Ua(function(b,c){return new OV(b,c,a)})}
PV.$inject=["$timeout"];var QV=mR(function(){var a=angular.module("yt.www.creator.angular.services.player",[]);a.factory("playerFactory",PV);return a});function RV(a,b){mb([0,1,2,3],b)||(b=1);var c=Math.pow(10,3-b);a=Math.floor(a/c)*c;var d=Math.floor(a/36E5);a-=36E5*d;var e=Math.floor(a/6E4);a-=6E4*e;c=Math.floor(a/1E3);var f=d?d+":":"";d=(d&&10>e?"0"+e:e)+":";e=10>c?"0"+c:c;var g="";b&&(g=se(a-1E3*c,3),g="."+g.substring(0,b));return f+d+e+g}
;function SV(a,b,c,d){this.B=a;this.T=b;this.l=c;this.A=d;this.j=null;this.g={}}
function TV(a){a.T.$broadcast("adBreak:clear_selection")}
function UV(a){a.T.$broadcast("adBreak:change")}
function VV(a,b){a.l.g.seekTo(b/1E3);WV(a.j)}
function XV(a){a=ye(a);a=fb(a,function(e){return parseInt(e,10)});
var b=0,c=0,d=0;if(3==a.length)b=a[0],c=a[1],d=a[2];else if(2==a.length)c=a[0],d=a[1];else if(1==a.length)d=a[0];else return NaN;return 36E5*b+6E4*c+1E3*d}
SV.prototype.loadTimes=function(a,b){YV(this);A(a,w(function(c){c=XV(c);ZV(this,c,"adMarker:load")},this));
b&&UV(this)};
function $V(a){return fb(Sb(a.g),function(b){return b.label})}
function aW(a){return fb(Sb(a.g),function(b){return b.timeMs})}
function ZV(a,b,c){if(bW(a,b)){var d=a.T.$new(),e=b,f=b+250,g=0;var k='<div class="ad-marker-container" data-ad-marker-type="'+le(c)+'" data-ad-marker></div>';k=a.B(k)(d)[0];var l=Pa(k).toString(),m=RV(b,0),n=a.j;e<f&&!(l in n.g)&&(g=new cW(l,e,f,g),n.B[l]=g,n.L.l(g),n.g[l]=k,dW(n,g,k),QJ(k,"itemId",l),wj(n.qa,k));eW(n);a.l.addCueRange(l,e,f);a.g[l]={itemId:l,timeMs:b,label:m,scope:d};"adMarker:manual"==c&&UV(a)}}
function fW(a,b){gW(a.j,b);a.l.removeCueRange(b);var c=a.g[b];c&&(c.scope.$destroy(),delete a.g[b]);TV(a);UV(a)}
function hW(a,b,c){if(bW(a,c)){var d=a.g[b],e=c,f=c+250,g=0,k=RV(c,0);d.timeMs=c;d.label=k;a.l.removeCueRange(b);c=a.j;d=c.g[b];k=c.B[b];if(d&&k)if(e<f){if(g=new cW(b,e,f,g),!(null==k&&null==g||null!=k&&null!=g&&k.getId()==g.getId()&&k.g==g.g&&k.j==g.j&&k.l==g.l)){var l=c.L;k.getId();g.getId();var m=k.getId(),n=k.g,t=k.j,r=g.g,v=g.j,B=g.l,E=new iW("W",l);if(B==k.l){var X=l.j[m];jW(l,X,k,E);var fa=kW(l,r,v,B)+1;if(fa!=X||r>t||v<n)lW(l,r,v,B,0,fa+1,E),mW(l,fa,g,E),nW(l,n,t,X+1,E);else{B=n-r;var ia=
v-t;0<B&&lW(l,r,n,k.l,0,fa+1,E);0<ia&&lW(l,t,v,k.l,0,fa+1,E);mW(l,fa,g,E);0>B&&nW(l,n,r,X+1,E);0>ia&&nW(l,v,t,X+1,E)}l.j[m]=fa}else oW(l,k,E),pW(l,g,E);qW(l);rW(l,E);c.B[b]=g;dW(c,g,d);eW(c)}}else gW(c,b);a.l.addCueRange(b,e,f);UV(a)}}
function bW(a,b){if(!(b<=a.A-2E3&&2E3<=b))return!1;var c=RV(b,0);return!Pb(a.g,function(d){return d.label==c})}
function YV(a){A(Sb(a.g),w(function(b){fW(this,b.itemId)},a))}
function sW(a,b,c,d){return new SV(a,b,c,d)}
var tW=mR(function(){var a=angular.module("yt.www.creator.angular.timeline",[]);a.factory("timelineFactory",Ib(sW));return a});function uW(){this.Ad=1;this.g=this.j=null}
uW.prototype.get=function(){return this.Ad};
uW.prototype.play=function(a){var b=x();if(null!=this.j&&null!=this.g&&a>this.g&&b>this.j){var c=b-this.j,d=(a-this.g)/c;2>d&&.5<d&&(c=Math.min(1,c/2E4),this.Ad=this.Ad*(1-c)+d*c)}this.j=b;this.g=a};function vW(a,b,c,d,e){Xz.call(this);this.ga=a;this.A=b;this.A.addEventListener("onStateChange",w(this.vv,this));this.A.addEventListener("onVideoProgress",w(this.wv,this));this.U=c||0;this.da=d||0;this.B=null;this.R=!1;this.j=this.uc=null;this.Ad=new uW;this.O=!1;this.M=-1;this.D=N("timeline-playhead-time",this.Dc());this.K=null;this.S=!!e}
ra(vW,Xz);h=vW.prototype;h.Ha=function(){this.ra(this.g.W("DIV","timeline-playhead"))};
h.ra=function(a){Xz.prototype.ra.call(this,a);FN(this.H())};
h.fa=function(){Xz.prototype.fa.call(this);var a=this.H();this.j=new nA(a);this.j.F=Math.pow(5,2);this.B&&(this.j.C=this.B);wW(this);a=cA(this);a.G(this.j,"start",this.nt);a.G(this.j,"end",this.mt);a.G(this.j,"drag",this.ot);cA(this).G(this.ga,"V",this.Hu)};
h.na=function(){Xz.prototype.na.call(this);tn(cA(this))};
h.hide=function(){this.O=!0;FN(this.H());this.refresh()};
h.show=function(){this.O=!1;this.refresh()};
h.refresh=function(){var a=this.A.getPlayerState?this.A.getPlayerState():null,b=this.getCurrentTime();xW(this,a,b,!1);wW(this)};
h.getCurrentTime=function(a){return 0==(void 0!=a?a:this.M)&&this.A.getDuration?1E3*this.A.getDuration()+1E3:this.A.getCurrentTime?1E3*this.A.getCurrentTime():null};
h.Hu=function(){this.refresh()};
h.vv=function(a){try{if(0==this.M&&1==a)var b=0;else b=this.getCurrentTime(a),2==a&&Uk(this.refresh,200,this);this.M=a;xW(this,a,b,!0)}catch(c){throw c;}};
h.wv=function(a){try{xW(this,this.M,1E3*a,!0)}catch(b){throw b;}};
h.nt=function(){yW(this);this.S&&this.A.pauseVideo()};
h.mt=function(a){a.B?this.refresh():(a=zW(this.ga,a.left),a=Math.min(this.ga.getDuration()-1E3,a),a=Math.max(0,a),this.A.seekTo(a/1E3,!0),Uk(this.refresh,200,this),AW(this,a))};
h.ot=function(){var a=zW(this.ga,jm(this.H()).x);AW(this,a);if(this.S){var b=w(function(){this.A.seekTo(a/1E3,!0);this.K=null},this);
null!=this.K&&Vk(this.K);this.K=Uk(b,100)}};
function BW(a,b){var c=CW(a.ga,b-300);return(c=a.ga.g[c])&&c.g()<b+300?c:null}
function xW(a,b,c,d){var e=a.H();if(null==c||null==b||a.O)FN(e),yW(a);else{EN(e);switch(b){case 1:c=(b=BW(a,c))?b.g():c;DW(a,c);a.B&&(d=a.H(),b=a.B,e=om(d,b,!0),d=e.x+a.U,e=e.y+a.da,a.R?(new Ht(b,[b.scrollLeft,b.scrollTop],[d,e],500)).play():(b.scrollLeft=d,b.scrollTop=e));break;case 2:if(0>c)break;b=c;b=(d=BW(a,b))?d.g():b;EW(a,b,!1);break;case -1:case 3:case 5:0<=c&&EW(a,c,d);break;case 0:EW(a,a.ga.getDuration(),d)}AW(a,c)}}
function DW(a,b){var c=FW(a.ga,b),d=c.ca,e=GW(a.ga,c.ca);if(e){a.Ad.play(b);yW(a);a.uc=new KG;var f=!0,g=a.H(),k=c;HW(a.ga,e.ca,function(l){if(f&&l.Y==k.Y)return k=l,!1;var m=(l.ca-k.ca)/this.Ad.get();this.uc.add(new Gt(g,[k.X,0],[l.X,0],m));f=!1;if(1E4<l.ca-d)return!0;k=l},a);
a.uc.play()}else EW(a,b,!1)}
function EW(a,b,c){var d=a.Ad;d.j=null;d.g=null;yW(a);b=FW(a.ga,b).X;c?(c=jm(a.H()).x,a.uc=new KG,a.uc.add(new Gt(a.H(),[c,0],[b,0],100)),a.uc.play()):a.H().style.left=b+"px"}
function yW(a){a.uc&&a.uc.stop(!1);a.uc=null}
function wW(a){pA(a.j,new am(0,0,IW(a.ga),0))}
function AW(a,b){if(a.D){var c=RV(b,0);Lj(a.D,c);c=xm(a.D).width;0<c&&(c=-c/2+"px",a.D.style.left!=c&&(a.D.style.left=c))}}
;function JW(a,b){Xz.call(this);var c=b||{};this.ga=a;this.Tc=[];this.K=new qn(this);this.A=c.Hr||10;this.Ar=c.zr||5;this.aj=c.ur||10;this.sr=null!=c.am?c.am:!0;this.xr=null!=c.dm?c.dm:!0;this.yr=null!=c.cm?c.cm:!0;this.tr=null!=c.Zl?c.Zl:!0;this.Tv=null!=c.bn?c.bn:4;this.lh=c.Ay||KW;this.hj=c.Ir||!1}
ra(JW,Xz);h=JW.prototype;h.Ha=function(){this.ra(this.g.W("DIV","timeline-ruler"))};
h.ra=function(a){Xz.prototype.ra.call(this,a);a=this.ga;LW(this,MW(this.ga.ba[0]),MW(a.ba[a.ba.length-1]))};
h.N=function(){xj(this.H());Xz.prototype.N.call(this)};
h.fa=function(){Xz.prototype.fa.call(this);this.K.G(this.ga,"V",this.Gu)};
h.na=function(){Xz.prototype.na.call(this);tn(this.K)};
h.Gu=function(a){a.start&&a.end&&LW(this,a.start,a.end)};
function NW(a,b,c){if(c<a.A)return-1;if(a.lh.length){var d=b*a.A*a.aj/c/1E3;b=wb(a.lh,function(e){return d<=e?0:1});
return 0<=b?1E3*a.lh[b]/a.aj:-1}a=c/a.A;a=Math.pow(2,Math.floor(Math.log(a)/Math.log(2)));return b/a}
function OW(a,b,c,d,e){e=pj("DIV",e);var f=pj("DIV","base");e.appendChild(f);a=FW(a.ga,b).X;e.style.left=100*(a-c)/d+"%";return e}
function PW(a,b,c,d){var e=pj("DIV","rulabel");Lj(e,RV(b,b%1E3?1:0));a=FW(a.ga,b).X;e.style.left=100*(a-c)/d+"%";return e}
function LW(a,b,c){var d=a.l;a.j||(a.j=pj("DIV","hline"),wj(d,a.j));a.j.style.left="0px";wm(a.j,IW(a.ga));a.D||(a.D=OW(a,0,0,1,"mtick"),wj(d,a.D),a.hj&&wj(d,OW(a,0,0,1,"stick")));a.B||(a.B=PW(a,0,0,1),wj(d,a.B));var e=b;(b=GW(a.ga,e.ca))&&HW(a.ga,b.ca,function(g,k){if(g.ca>c.ca)return!0;var l=NW(this,g.ca-e.ca,g.X-e.X),m=k-1,n=this.Tc[m];if(n&&n.hw==l&&n.start.Y==e.Y&&n.end.Y==g.Y&&n.start.ca==e.ca&&n.end.ca==g.ca)n.element&&(l=g.X-e.X,n.element.style.left=e.X+"px",wm(n.element,l));else{n&&n.element&&
Bj(n.element);n=null;if(e.Y!=g.Y&&g.X>e.X){var t=this.yr,r=this.tr;k<this.ga.ba.length-1&&(t=this.xr,r=this.sr);n=e;var v=pj("DIV","section"),B=g.X-n.X+1;v.style.left=n.X+"px";wm(v,B);if(!(n.Y>g.Y)){if(0<B&&0<l){if(this.lh.length){var E=Math.floor((n.Y+l)/l);var X=E*l}else E=1,X=n.Y+l;for(var fa=g.Y;X<fa;X+=l){0==E%this.Ar?(wj(v,OW(this,X,n.X,B,"mtick")),this.hj&&wj(v,OW(this,X,n.X,B,"stick"))):wj(v,OW(this,X,n.X,B,"stick"));if(0==E%this.aj){var ia=l*this.Tv;(!ia||X-n.Y>=ia&&g.Y-X>=ia)&&wj(v,PW(this,
X,n.X,B))}E++}}t&&(wj(v,OW(this,g.Y,n.X,B,"mtick")),this.hj&&wj(v,OW(this,g.Y,n.X,B,"stick")));r&&wj(v,PW(this,g.Y,n.X,B))}n=v;wj(d,n)}this.Tc[m]={element:n,start:e,end:g,hw:l}}e=g},a);
b=a.ga.ba.length-1;if(a.Tc.length>b){for(var f=b;f<a.Tc.length;f++)a.Tc[f].element&&Bj(a.Tc[f].element);pb(a.Tc,b,a.Tc.length-b)}}
var KW=[1,2,3,5,10,15,30,60,120,180,300,600,900,1800,3600,7200,10800,14400,18E3];function QW(a){this.g=a}
QW.prototype.getDuration=function(){return this.g};
function RW(a){J.call(this,"V",a);this.end=this.start=null;this.g=this.B=-1}
z(RW,J);function SW(a,b,c,d){a.start?(a.start.Y=Math.min(a.start.Y,b.Y),a.start.ca=Math.min(a.start.ca,b.ca),a.start.X=Math.min(a.start.X,b.X)):a.start=MW(b);a.end?(a.end.Y=Math.max(a.end.Y,c.Y),a.end.ca=Math.max(a.end.ca,c.ca),a.end.X=Math.max(a.end.X,c.X)):a.end=MW(c);d&&(a.end.Y=Math.max(a.end.Y,d.Y),a.end.ca=Math.max(a.end.ca,d.ca),a.end.X=Math.max(a.end.X,d.X))}
function TW(a,b,c){a.B=0>a.B?b:Math.min(b,a.B);a.g=Math.max(a.g,c)}
function UW(){L.call(this);this.l=0;this.j=[];this.g=[];this.ba=[{X:0,Y:0,ca:0,Vb:0}];this.B=[0];this.C=[];this.A=null}
z(UW,L);function MW(a){return{Y:a.Y,ca:a.ca,X:a.X}}
function VW(a,b,c){return{Y:a.Y+(b.Y-a.Y)*c,ca:a.ca+(b.ca-a.ca)*c,X:a.X+(b.X-a.X)*c}}
function WW(a,b){a.length>b&&pb(a,b,a.length-b)}
function XW(a,b,c){var d=b||0;null!=a.A&&a.A>=d&&(a.A=null);var e=a.B[d],f=CW(a,e in a.ba?a.ba[e].Y:0),g=a.ba[a.ba.length-1];b=new RW(a);c&&TW(b,d,a.j.length);for(c=d;c<a.j.length;++c){d=a.ba[e];var k=a.j[c],l=k.getDuration(),m=d.Y+l;l=d.ca+l;var n=d.X,t=a.l;k=Math.max(0,k.getDuration()*t);m={Y:m,ca:l,X:n+k,Vb:c+1};d=YW(a,c,d,m,e,f,b);e=d.nn;f=d.Or;m=d.qo;ZW(a,++e,m,b);a.B[m.Vb]=e}d=YW(a,a.j.length,a.ba[e],null,e,f,b);e=d.nn;f=e+1;a.ba.length>f&&SW(b,a.ba[e],g);WW(a.ba,f);WW(a.B,a.j.length+1);WW(a.C,
a.g.length);b.g=Math.min(b.g,a.j.length);for(e=b.B;e<b.g;++e);b.start&&a.dispatchEvent(b)}
function YW(a,b,c,d,e,f,g){for(var k=a.g[f],l=0,m=0;k&&(null==d||k.g()<d.Y);){var n=k.g(),t=k.getDuration();n!=c.Y?(n={Y:n,ca:c.ca+(n-c.Y)+l,X:c.X+(d?(d.X-c.X)*(n-c.Y)/(d.Y-c.Y):(n-c.Y)*a.l)+m,Vb:b},ZW(a,++e,n,g)):n=c;a.C[f]=e;k=Math.max(k.j(),t*a.l);n={Y:n.Y,ca:n.ca+t,X:n.X+k,Vb:b};ZW(a,++e,n,g);l+=t;m+=k;f++;k=a.g[f]}d&&(d.ca+=l,d.X+=m);return{nn:e,Or:f,qo:d}}
function ZW(a,b,c,d){var e=b in a.ba?a.ba[b]:null,f=a.ba[b-1];a.ba[b]=c;if(null==e?null!=c:null==c||e.Y!=c.Y||e.ca!=c.ca||e.X!=c.X)f.Vb==c.Vb?TW(d,f.Vb,f.Vb+1):TW(d,f.Vb,c.Vb),b+1 in a.ba&&(e=a.ba[b+1]),SW(d,f,c,e)}
h=UW.prototype;h.er=function(a,b){var c=vb(arguments,1);Ua(pb,this.j,a,0).apply(null,c);XW(this,a,!0)};
function $W(a,b){var c=aX(a,b);return c in a.ba?a.ba[c].Vb:-1}
h.update=function(){XW(this,this.A,!0)};
h.Hv=function(a){var b=0,c=-1;A(arguments,function(e){var f=bX(this,e);0<=f&&rb(this.g,f)&&(b++,c=0<c?Math.min(c,e):e)},this);
if(b){var d=$W(this,c);XW(this,d,!0)}};
function CW(a,b){var c=bX(a,b);return 0>c?-c-1:c}
function bX(a,b){return wb(a.g,function(c){return Ab(b,c.g())})}
function cX(a,b){var c=a.C[b];return{start:MW(a.ba[c]),end:MW(a.ba[c+1])}}
h.clear=function(){this.j=[];this.g=[];XW(this,0,!0)};
function dX(a,b){a.l!=b&&(a.l=b,XW(a))}
h.getDuration=function(){return this.ba[this.ba.length-1].Y};
function IW(a){return a.ba[a.ba.length-1].X}
function eX(a,b){var c=wb(a.ba,b);return 0>c?-c-2:c}
function aX(a,b){return eX(a,function(c){return Ab(b,c.Y)})}
function fX(a,b){return eX(a,function(c){return Ab(b,c.ca)})}
function gX(a,b){return eX(a,function(c){return Ab(b,c.X)})}
function FW(a,b){var c=aX(a,b);if(0<=c&&c+1<a.ba.length){var d=a.ba[c];c=a.ba[c+1];var e=c.Y-d.Y;e=0<e?(b-d.Y)/e:0}else e=Math.max(a.l,.01),d=0>c?a.ba[0]:a.ba[a.ba.length-1],c={Y:d.Y+1,ca:d.ca+1,X:d.X+e},e=b-d.Y;return VW(d,c,e)}
function GW(a,b){var c=fX(a,b)+1;return c in a.ba?MW(a.ba[c]):null}
function HW(a,b,c,d){var e=fX(a,b);for((0>e||a.ba[e].ca<b)&&++e;e<a.ba.length&&!c.call(d,MW(a.ba[e]),e);++e);}
function zW(a,b){var c=gX(a,b);if(0<=c&&c+1<a.ba.length){var d=a.ba[c];c=a.ba[c+1];var e=c.X-d.X;e=0<e?(b-d.X)/e:0}else e=Math.max(a.l,.01),d=0>c?a.ba[0]:a.ba[a.ba.length-1],c={Y:d.Y+1/e,ca:d.ca+1/e,X:d.X+1},e=b-d.X;return VW(d,c,e).Y}
;function cW(a,b,c,d){this.A=a;this.g=b;this.j=c;this.l=d}
cW.prototype.getId=function(){return this.A};
function iW(a,b){J.call(this,a,b);this.g={}}
ra(iW,J);function hX(){L.call(this);this.g=[];this.j={}}
ra(hX,L);hX.prototype.l=function(a){var b=new iW("W",this);A(arguments,function(c){pW(this,c,b)},this);
rW(this,b)};
hX.prototype.A=function(a){var b=new iW("W",this);A(arguments,function(c){oW(this,c,b)},this);
qW(this);rW(this,b)};
hX.prototype.clear=function(){var a=new iW("W",this);Nb(this.j,function(b,c){a.g[c]={from:b,Vc:-1}},this);
this.g=[];this.j=[];rW(this,a)};
function pW(a,b,c){var d=b.g,e=b.j,f=b.l,g=kW(a,d,e,f)+1;lW(a,d,e,f,0,g+1,c);mW(a,g,b,c)}
function oW(a,b,c){var d=b.getId();d in a.j&&(d=a.j[d],jW(a,d,b,c),delete a.j[b.getId()],nW(a,b.g,b.j,d+1,c))}
function iX(a,b,c,d,e){var f=wb(a,function(g){return Ab(b,g.g)});
0>f&&(f=-f-1);if(f-1 in a&&b<a[f-1].j&&d.call(e,a[f-1],f-1))return f;for(;f in a&&c>a[f].g;){if(d.call(e,a[f],f))return f;f++}return-1}
function jX(a,b,c,d){iX(b,c,d,function(){return!0},a)}
function kW(a,b,c,d){return lb(a.g,function(e){return 0<=iX(e,b,c,function(f){return f.l<d},this)},a)}
function mW(a,b,c,d){for(var e=a.g.length;e<b+1;e++)a.g.push([]);e=a.g[b];jX(a,e,c.g,c.j);Fb(e,c,function(f,g){return Ab(f.g,g.g)});
a.j[c.getId()]=b;d&&(a=c.getId(),a in d.g?d.g[a].Vc=b:d.g[a]={from:-1,Vc:b})}
function jW(a,b,c,d){Gb(a.g[b],c,function(e,f){return Ab(e.g,f.g)});
a=c.getId();a in d.g?d.g[a].Vc=-1:d.g[a]={from:b,Vc:-1}}
function kX(a,b,c,d,e){var f=a.g[b],g=f[c];rb(f,c);mW(a,d,g,null);a=g.getId();a in e.g?e.g[a].Vc=d:e.g[a]={from:b,Vc:d}}
function qW(a){var b=lb(a.g,function(c){return 0<c.length},a);
pb(a.g,b+1,a.g.length-b-1)}
function lW(a,b,c,d,e,f,g){for(var k=e;k<f;k++)if(k in a.g){var l=[];iX(a.g[k],b,c,function(m,n){m.l>=d&&(lW(this,m.g,m.j,m.l,k+1,f+1,g),l.push(n))},a);
0<l.length&&db(l,function(m){kX(this,k,m,f,g)},a)}}
function nW(a,b,c,d,e){if(!(d>=a.g.length)){var f=[];iX(a.g[d],b,c,function(g,k){var l=g.g,m=g.j,n=kW(this,l,m,g.l)+1;n<d&&f.push([k,n,l,m])},a);
db(f,function(g){kX(this,d,g[0],g[1],e)},a);
db(f,function(g){nW(this,g[2],g[3],d+1,e)},a)}}
function rW(a,b){b.g=Ob(b.g,function(c){return c.from!=c.Vc});
Xb(b.g)||a.dispatchEvent(b)}
;function lX(a){Xz.call(this);this.A=new qn(this);this.j=new PJ;this.j.jj=!0;this.M=a||null}
z(lX,Xz);h=lX.prototype;h.ra=function(a){lX.J.ra.call(this,a);this.j.Sa(N("goog-slider-horizontal",a));this.K=N("slider-readout",a)};
h.fa=function(){lX.J.fa.call(this);var a=this.H();this.A.G(a,"focus",this.Et,!0);this.O=new Ls(a);this.A.G(this.O,"key",this.fb);this.A.G(this.j,"change",this.vw);var b=N("slider-left-icon",a);b&&this.A.G(b,"click",this.Ou);(a=N("slider-right-icon",a))&&this.A.G(a,"click",this.Pu);mX(this)};
h.na=function(){lX.J.na.call(this);tn(this.A)};
h.setValue=function(a){this.j.setValue(a)};
h.vw=function(){mX(this);this.dispatchEvent("change")};
h.Ou=function(){IJ(this.j,-1*this.j.Wc)};
h.Pu=function(){IJ(this.j,1*this.j.Wc)};
h.Et=function(a){var b=this.H();b!=a.target&&b.focus();a.stopPropagation()};
h.fb=function(a){this.j.R.dispatchEvent(a)};
function mX(a){if(null!=a.K&&a.M){var b=S(a.M,{value:uJ(a.j.j)});Lj(a.K,b)}}
;function nX(){lX.call(this);this.B=0;this.D=(Math.pow(1.4,10)-1)/(.06-this.B)}
ra(nX,lX);nX.prototype.ra=function(a){lX.prototype.ra.call(this,a);a=this.j.j;if(null!=a.ec){a.ec=null;var b=a.tb;a.tb=!0;yJ(a,tJ(a,a.Hb));vJ(a,wJ(a));a.setValue(uJ(a));a.tb=b;a.tb||a.Dd||a.dispatchEvent("change")}this.j.Wc=1;this.j.xc=oX;xJ(this.j.j,0);yJ(this.j.j,10)};
function pX(a,b){a.setValue(Math.log((b-a.B)*a.D+1)/Math.log(1.4))}
var oX=10/3;function qX(a,b,c,d,e,f,g,k,l,m,n,t){L.call(this);this.O=c;this.R=d;this.P=f||27;this.Ra=l||0;this.wa=m||0;this.ja=n||0;this.U=t||0;this.M=new qn(this);this.L=new hX;this.M.G(this.L,"W",this.Ct);this.ga=new UW;this.ga.er(0,new QW(this.R));dX(this.ga,this.O/this.R);this.M.G(this.ga,"V",this.Kn);this.g={};this.B={};this.C={};this.ma={};this.K=.382*this.R;this.D=!1;this.A=a;this.S=N("timeline-content",a);this.F=N("timeline-overlay",a);this.qa=N("timeline-stack-track",a);N("timeline-pause-track",a);this.l=
null;b&&(this.l=new nX,this.l.Sa(b),rX(this));this.da=null;if(a=N("timeline-ruler",this.A))this.da=new JW(this.ga,{Hr:50,zr:2,ur:2,dm:!1,am:!1,cm:!0,Zl:!0,bn:.5,Ir:!0}),this.da.Sa(a);this.j=null;e=e||null;this.j&&(this.j.dispose(),this.j=null);if(a=N("timeline-playhead",this.A))e?(this.j=new vW(this.ga,e,this.Ra,this.wa),this.j.Sa(a),e=this.j,e.B=this.A,e.R=!1,e.j&&(e.j.C=e.B)):FN(a);this.Kn();this.M.G(this.A,"scroll",this.ww);sX(this)}
z(qX,L);function tX(a){"number"==typeof a&&(a+="px");return a}
function gW(a,b){b in a.g&&(Bj(a.g[b]),delete a.g[b]);b in a.B&&(a.L.A(a.B[b]),delete a.B[b]);b in a.C&&(a.ga.Hv(a.C[b].g()),delete a.C[b],rX(a));eW(a)}
h=qX.prototype;h.H=function(a){return this.g[a]||null};
h.isSelected=function(a){return a in this.g?O(this.g[a],"selected"):!1};
function WV(a){a.j&&a.j.refresh()}
h.ww=function(){this.F&&(this.F.style.top=this.A.scrollTop+"px");this.D?this.D=!1:this.K=zW(this.ga,this.A.scrollLeft+.382*this.O)};
h.Jn=function(){var a=this.l;dX(this.ga,(Math.pow(1.4,uJ(a.j.j))-1)/a.D+a.B);uX(this,this.K);this.dispatchEvent("U")};
h.Ct=function(a){var b=!1;Nb(a.g,function(c,d){if(-1!=c.from&&-1!=c.Vc&&(b=!0,dW(this,this.B[d],this.g[d]),d in this.ma&&d in this.g)){var e=this.A.scrollLeft;rm(this.g[d],this.A);this.D|=this.A.scrollLeft!=e;d in this.B?(e=this.B[d],(this.K<e.g||this.K>=e.j)&&uX(this,e.g)):d in this.C&&uX(this,this.C[d].g())}},this);
b&&eW(this)};
function sX(a){a.l&&a.M.G(a.l,"change",a.Jn)}
function rX(a){if(a.l){a.l&&a.M.Z(a.l,"change",a.Jn);var b=0>=uJ(a.l.j.j);var c=a.ga;c=(c=c.ba[c.ba.length-1].ca)?a.O/c:0;var d=!1,e=a.l;e.B=c;e.D=(Math.pow(1.4,10)-1)/(.06-e.B);b?(dX(a.ga,c),d=!0):(b=a.ga.l,b<c?(dX(a.ga,c),d=!0,pX(a.l,c)):pX(a.l,b));d&&a.dispatchEvent("U");sX(a)}}
function uX(a,b){a.K=b;var c=FW(a.ga,b).X-.382*a.O;a.D|=c!=a.A.scrollLeft;a.A.scrollLeft=c}
function dW(a,b,c){b.getId();var d=Math.floor(FW(a.ga,b.g).X),e=b.getId();e=a.L.j[e]*a.P;a=Math.floor(FW(a.ga,b.j).X)-d+1;a=Math.max(0,a);c.style.left=tX(d);c.style.width=tX(a);c.style.bottom=tX(e)}
function vX(a,b,c){b=bX(a.ga,b.g());var d=cX(a.ga,b);b=Math.floor(d.start.X);d=Math.floor(d.end.X)-b-1;c.style.left=tX(b);wm(c,Math.max(0,d));c=fj("icon-timeline-pause",c);var e=19<=d?"":"none";A(c,function(f){f.style.display=e},a)}
function eW(a){var b=0<a.ga.g.length?55:31,c=a.L.g.length;a.S.style.height=tX(c*a.P+b);a.ja&&a.U&&(c=Ri(c,a.ja,a.U),a.A.style.height=tX(c*a.P+b+24),b=c*a.P+b,a.F&&(a.F.style.height=tX(b)))}
h.Kn=function(){var a=tX(IW(this.ga)+9);this.S.style.width=a;this.F&&(this.F.style.width=a);Nb(this.g,function(b,c){var d=this.g[c];c in this.B?dW(this,this.B[c],d):c in this.C&&vX(this,this.C[c],d)},this)};function Y(a,b,c,d,e,f,g,k){this.timeline=this.player=null;this.adBreaksModel={};this.bulkInsertTimesModel=[];this.T=a;this.R=b;this.K=d;this.Sb=c;this.O=e;this.M=f;this.P=g;this.L=k;this.In=this.eh=null;this.Ch=0;this.A=this.B=null;this.F=this.Xa=this.C=!1;this.g=0;this.l=this.j=null}
q("yt.www.creator.angular.controllers.v2.AdBreaks",Y,void 0);Y.$inject="$scope $compile $timeout $location youtubePlayerInit playerFactory timelineFactory DialogService".split(" ");var wX={DEFAULT:0,AUTO_BREAK_EMPTY:1,AUTO_BREAK_PROCESSING:2};Y.SuggestTooltip=wX;var xX={NONE:0,TIME_FORMAT_ERROR:1,TIME_RANGE_ERROR:2};Y.BulkInsertError=xX;Y.prototype.rf=function(){return this.player?this.player.rf():!1};
Y.prototype.isPlayingVideo=Y.prototype.rf;Y.prototype.Vi=function(){return this.player?this.player.Vi():!1};
Y.prototype.isPreviewingAd=Y.prototype.Vi;Y.prototype.Ui=function(){return this.player?this.player.Ui():!1};
Y.prototype.isPreviewEnabled=Y.prototype.Ui;Y.prototype.nc=function(){return this.C&&this.F};
Y.prototype.isInitialized=Y.prototype.nc;Y.prototype.Vo=function(){return this.g};
Y.prototype.getBulkInsertError=Y.prototype.Vo;Y.prototype.Ti=function(){return this.player?this.player.Ti():!0};
Y.prototype.isPreloading=Y.prototype.Ti;function yX(a){return a.bulkInsertTimesModel.length?ib(a.bulkInsertTimesModel,function(b){return!!b.match(/^(?:(?:(\d{1,2}):)?([0-5]?\d):)?([0-5]?\d)$/)}):!0}
function zX(a){return a.bulkInsertTimesModel.length?ib(a.bulkInsertTimesModel,function(b){b=XV(b);return b<=this.timeline.A-2E3&&2E3<=b}.bind(a)):!0}
Y.prototype.Mi=function(){return null!=this.j&&null!=this.j.auto_gen_midroll_times};
Y.prototype.hasSuggestedPlacements=Y.prototype.Mi;Y.prototype.kr=function(){return null!=this.adBreaksModel&&null!=this.adBreaksModel.midrolls_are_manual&&this.adBreaksModel.midrolls_are_manual};
Y.prototype.isManualMidrollEnabled=Y.prototype.kr;Y.prototype.Rl=function(){return 0<$V(this.timeline).length};
Y.prototype.hasAdBreaksInTimeline=Y.prototype.Rl;Y.prototype.ip=function(){switch(this.l){case 2:case 6:case 0:return 1;case 1:case 5:return 2;default:return 0}};
Y.prototype.getSuggestTooltipType=Y.prototype.ip;Y.prototype.ep=function(){return RV(this.Ch-2E3,0)};
Y.prototype.getMaxAdBreakTimeLabel=Y.prototype.ep;h=Y.prototype;h.setVideoId=function(a){this.B=a};
function AX(a,b){a.j=b;a.adBreaksModel.has_preroll=b.has_preroll;a.adBreaksModel.has_midroll=b.has_midroll;a.adBreaksModel.has_postroll=b.has_postroll;a.adBreaksModel.midrolls_are_manual=b.midrolls_are_manual;b.midroll_times&&(b.midrolls_are_manual&&(a.adBreaksModel.manual_midroll_times=b.midroll_times),a.timeline.loadTimes(b.midroll_times));b.auto_gen_midroll_times||null==b.auto_gen_breaks_error||(a.l=b.auto_gen_breaks_error);a.Sb(w(function(){this.C=!0},a),250)}
h.init=function(){var a=R("MIDROLL_VIEWER_SWF_CONFIG");a=lV(a);a.args.video_id=this.B;a.args.jsapicallback=w(this.eu,this);a.args.controls=0;a.args.el="embedded";a.args.loaderUrl=this.K.path();a.args.showinfo=0;a.attrs.width=em(this.eh,"width");a.attrs.height=em(this.eh,"height");a=this.O(this.eh,a);this.player=this.M(a,this.T);this.timeline=this.P(this.R,this.T,this.player,this.Ch);this.T.$on("adBreak:selected",w(this.tw,this));this.T.$on("adBreak:clear_selection",w(this.rw,this));this.T.$on("adBreak:change",
w(this.av,this))};
h.eu=function(){var a=new qX(this.In,null,643,this.Ch,this.player.g);WV(a);this.timeline.j=a;VV(this.timeline,25E3);a=this.player;a.g.isReady();a.g.setVolume(0);a.j=!0;a.g.playVideo();this.F=!0;AX(this,this.T.breaks)};
h.tw=function(a,b){this.A=b;this.player.l=!1};
h.rw=function(){this.A=null;this.player.l=!0};
h.av=function(){var a=$V(this.timeline);this.adBreaksModel.has_midroll=0<a.length;this.adBreaksModel.has_midroll?(this.adBreaksModel.midrolls_are_manual=!0,this.adBreaksModel.manual_midroll_times=a):(Yb(this.adBreaksModel,"midrolls_are_manual"),Yb(this.adBreaksModel,"manual_midroll_times"))};
h.ks=function(){this.g=0;this.bulkInsertTimesModel=$V(this.timeline).sort(w(function(a,b){var c=XV(a),d=XV(b);return c<d?-1:c>d?1:0},this));
this.L.create("bulk-insert-dialog.html","acceptCancelDialog",{adBreaksCtrl:this,bulkInsertErrorType:xX})};
Y.prototype.onBulkInsertClick=Y.prototype.ks;Y.prototype.es=function(){this.g=0};
Y.prototype.onBulkDialogChange=Y.prototype.es;Y.prototype.gs=function(a,b){yX(this)?zX(this)?(this.timeline.loadTimes(this.bulkInsertTimesModel,!0),BX(this,"bulk_insert_click",{insert_time:aW(this.timeline),auto_midroll_available:this.Mi(),auto_gen_breaks_status:this.l}),a.accept()):this.g=2:this.g=1;b.target.parentElement.parentElement.parentElement.getElementsByClassName("bulk-insert-text-area")[0].focus()};
Y.prototype.onBulkInsertAcceptClick=Y.prototype.gs;Y.prototype.Ut=function(){var a=this.player.hg();ZV(this.timeline,a,"adMarker:manual");BX(this,"insert_ad_click",{insert_time:a,auto_midroll_available:this.Mi(),auto_gen_breaks_status:this.l})};
Y.prototype.onInsertAdClick=Y.prototype.Ut;Y.prototype.nu=function(){var a=this.timeline.g[this.A].timeMs;TV(this.timeline);var b=this.player;b.rf();b.g.seekTo((a-2E3)/1E3);b.g.playVideo();b.Sb(w(b.pauseVideo,b),7E3)};
Y.prototype.onPreviewAdClick=Y.prototype.nu;Y.prototype.Vu=function(){this.Rl()?this.L.create("suggest-placements-dialog.html","acceptCancelDialog").result.then(w(this.D,this)):this.D();BX(this,"suggest_click")};
Y.prototype.onSuggestClick=Y.prototype.Vu;Y.prototype.D=function(){this.j.auto_gen_midroll_times&&(this.timeline.loadTimes(this.j.auto_gen_midroll_times),this.adBreaksModel.has_midroll=!0,this.adBreaksModel.midrolls_are_manual=!1)};
Y.prototype.bv=function(a){if(this.Xa)this.Xa=!1;else{TV(this.timeline);var b=this.timeline,c=nm(a.currentTarget).x;a=Math.floor(zW(this.timeline.j.ga,a.pageX-c));VV(b,a)}};
Y.prototype.onTimelineOverlayClick=Y.prototype.bv;Y.prototype.iu=function(a){this.Xa=!1;a.stopPropagation()};
Y.prototype.onPlayheadClick=Y.prototype.iu;Y.prototype.ku=function(){this.Xa=!0};
Y.prototype.onPlayheadMousedown=Y.prototype.ku;function BX(a,b,c){a=aM("/gen_204?"+Me({a:"videomanager-midroll-edit-"+b,encrypted_video_id:a.B,timestamp:(new Date).getTime()}),c||{});iP(a)}
;function CX(a){this.T=a;this.g=!1;this.Ah=this.Bh=null;this.T.$on("adBreak:clear_selection",w(this.j,this))}
q("yt.www.creator.angular.controllers.AdMarker",CX,void 0);CX.$inject=["$scope"];CX.prototype.jp=function(){return this.Ah?this.Ah.label:""};
CX.prototype.getTimeLabel=CX.prototype.jp;CX.prototype.isSelected=function(){return this.g};
CX.prototype.isSelected=CX.prototype.isSelected;CX.prototype.Cj=function(a){this.Bh=a};
CX.prototype.select=function(){TV(this.Bh);this.Bh.T.$broadcast("adBreak:selected",this.Ah.itemId);this.g=!0};
CX.prototype.j=function(){this.g=!1};
CX.prototype.Rr=function(){this.select()};
CX.prototype.onAdMarkerClick=CX.prototype.Rr;function DX(){return{require:["adMarker","^v2AdBreaks"],controller:CX,controllerAs:"adMarkerCtrl",link:function(a,b,c,d){a=d[0];a.Cj(d[1].timeline);d=b.attr("data-item-id");a.Ah=a.Bh.g[d];"adMarker:manual"==b.attr("data-ad-marker-type")&&a.select()},
templateUrl:"admarker.html",scope:!0}}
var EX=mR(function(){var a=angular.module("yt.www.creator.angular.directives.adMarker",[]);a.directive("adMarker",DX);return a});function FX(a){this.inputText="";this.T=a;this.j=this.g=this.If=this.A=null;this.l="free";this.T.$on("adBreak:selected",w(this.qw,this));this.T.$on("adBreak:clear_selection",w(this.pw,this))}
q("yt.www.creator.angular.controllers.Playhead",FX,void 0);FX.$inject=["$scope"];FX.prototype.getStatus=function(){return this.l};
FX.prototype.getStatus=FX.prototype.getStatus;FX.prototype.mr=function(){return"free"!=this.l};
FX.prototype.isSnapped=FX.prototype.mr;FX.prototype.fr=function(){return"edit"==this.l};
FX.prototype.isEditing=FX.prototype.fr;FX.prototype.Yo=function(){return this.j.label};
FX.prototype.getCurrentAdMarkerLabel=FX.prototype.Yo;h=FX.prototype;h.zj=function(a){this.A=a};
h.Cj=function(a){this.g=a};
function GX(a,b){"snapped"==b?(a.A.focus(),a.If.A=!0):a.If.A=!1;a.l=b}
h.fu=function(a){this.j&&hW(this.g,this.j.itemId,a)};
h.qw=function(a,b){this.j=this.g.g[b];VV(this.g,this.j.timeMs);GX(this,"snapped")};
h.pw=function(){if("edit"==this.l){var a=XV(this.inputText);a&&this.j&&hW(this.g,this.j.itemId,a);a=this.g.j;a.j&&a.j.j.Aa(!0)}this.j=null;GX(this,"free")};
h.Zu=function(){"edit"!=this.l&&TV(this.g)};
FX.prototype.onTimeboxMousedown=FX.prototype.Zu;FX.prototype.yu=function(){var a=this.j.itemId;this.j=null;fW(this.g,a)};
FX.prototype.onRemoveAdClick=FX.prototype.yu;FX.prototype.Sr=function(){"snapped"==this.l&&this.A.focus()};
FX.prototype.onAdMarkerSectionClick=FX.prototype.Sr;FX.prototype.Tr=function(){this.inputText=this.j.label;GX(this,"edit");var a=this.g.j;a.j&&a.j.j.Aa(!1);a=N("timeline-playhead-input",this.A);a.select();a.focus()};
FX.prototype.onAdMarkerSectionDoubleclick=FX.prototype.Tr;FX.prototype.Tt=function(a){if(13==a.keyCode&&(a.preventDefault(),(a=XV(this.inputText))&&bW(this.g,a))){GX(this,"snapped");var b=this.g.j;b.j&&b.j.j.Aa(!0);VV(this.g,a)}};
FX.prototype.onInputTextKeypress=FX.prototype.Tt;FX.prototype.ju=function(a){if("snapped"==this.l)if(39==a.keyCode){a=this.g;var b=a.l.hg();a.l.g.seekTo((b+1E3)/1E3);WV(a.j)}else 37==a.keyCode&&(a=this.g,b=a.l.hg(),a.l.g.seekTo((b-1E3)/1E3),WV(a.j))};
FX.prototype.onPlayheadKeyup=FX.prototype.ju;function HX(){return{require:["playhead","^v2AdBreaks"],controller:FX,controllerAs:"playheadCtrl",link:function(a,b,c,d){var e=d[0],f=d[1];e.zj(b[0]);a.$evalAsync(function(){e.If=f.player;e.T.$watch(w(e.If.hg,e.If),w(e.fu,e));e.Cj(f.timeline)})},
scope:!0,templateUrl:"playhead.html"}}
var IX=mR(function(){var a=angular.module("yt.www.creator.angular.directives.playhead",[]);a.directive("playhead",HX);return a});function JX(a,b){return{require:["v2AdBreaks","ngModel"],controller:Y,controllerAs:"adBreaksCtrl",scope:{initialAdBreaks:"@",duration:"="},templateUrl:"v2-adbreaks.html",link:function(c,d,e,f){c.breaks=angular.fromJson(c.initialAdBreaks);e=N("ad-breaks-player",d[0]);var g=N("ad-breaks-timeline",d[0]);N("ad-break-insert",d[0]);N("ad-break-preview",d[0]);d=a.attr("data-video-id");var k=f[0],l=f[1];k.eh=e;k.In=g;k.setVideoId(d);k.Ch=parseInt(c.breaks.video_duration,10);k.init();c.suggestTooltipType=
wX;c.$watch(function(){return k.adBreaksModel},function(){k.nc()&&(l.$setViewValue({}),b(w(l.$setViewValue,l,k.adBreaksModel)))},!0)}}}
JX.$inject=["$rootElement","$timeout"];var KX=mR(function(){var a=angular.module("yt.www.creator.angular.directives.v2.adBreaks",[NV.name,EX.name,IX.name,QV.name,tW.name]);a.directive("v2AdBreaks",JX);a.factory("youtubePlayerInit",Ib(JV));return a});function LX(){return{templateUrl:"videocredits.html",controller:yR,controllerAs:"ctrl",scope:{initialCredits:"@"},link:function(a,b,c,d){d.autoCompleteCustomRenderer=new CR(b.valueOf()[0])}}}
var MX=mR(function(){var a=angular.module("yt.www.creator.angular.directives.videoCredits",[]);a.directive("videoCredits",LX);return a});function NX(){return{require:"ngModel",link:function(a,b,c,d){a.title=Ze(Yf(a.initialEncodedTitle));d.$setViewValue(a.title);a.$watch("title",function(e){d.$setViewValue(e);BK("yt-metadata-editor-widget-title-changed",e)})},
templateUrl:"video_title.html",scope:{initialEncodedTitle:"@"}}}
var OX=mR(function(){var a=angular.module("yt.www.creator.angular.directives.videoTitle",[]);a.directive("videoTitle",NX);return a});function PX(){return{templateUrl:"youtuberatings.html",controller:sR,scope:{initialRatings:"@"}}}
var QX=mR(function(){var a=angular.module("yt.www.creator.angular.directives.youtubeRatings",[]);a.directive("youtubeRatings",PX);return a});function RX(a,b){this.g=b;this.offerManagement=null;this.inputName=a.inputName;this.showError=this.showLoading=!1;this.hasValidEntitlements="yes"===a.hasValidEntitlements;this.isAlreadyPaid="yes"==a.isAlreadyPaid;this.canBeMadeFree="yes"==a.canBeMadeFree;var c=angular.fromJson(a.initialOffers);c.offers||(c.offers=[]);this.offerManagement=c}
q("yt.www.creator.angular.controllers.YpcOfferManagement",RX,void 0);RX.$inject=["$scope","DialogService"];RX.prototype.So=function(){return SX(this,!0)};
RX.prototype.getActiveOffers=RX.prototype.So;RX.prototype.ap=function(){return SX(this,!1)};
RX.prototype.getInactiveOffers=RX.prototype.ap;RX.prototype.createOffer=function(){this.g.create("ypcoffermanagementcreatedialog.html","YpcOfferManagementOfferCreationDialogCtrl",{offerManagement:this.offerManagement}).result.then(w(function(a){var b=this.offerManagement.offers;a=a.offer;mb(b,a)||b.push(a)},this))};
RX.prototype.createOffer=RX.prototype.createOffer;RX.prototype.Jo=function(a){TX(this,a,"ypcoffermanagementenabledialog.html",function(){a.active=!0})};
RX.prototype.enableOffer=RX.prototype.Jo;RX.prototype.Ho=function(a){TX(this,a,"ypcoffermanagementdisabledialog.html",function(){a.active=!1})};
RX.prototype.disableOffer=RX.prototype.Ho;RX.prototype.Co=function(a){var b=w(function(){qb(this.offerManagement.offers,a)},this);
TX(this,a,"ypcoffermanagementdeletedialog.html",b)};
RX.prototype.deleteOffer=RX.prototype.Co;function SX(a,b){return a.offerManagement?eb(a.offerManagement.offers,function(c){return c.active==b}):[]}
function TX(a,b,c,d){b.offer_id?a.g.create(c,"YpcOfferManagementOfferOperationDialogCtrl",{offer:b,hasValidEntitlements:a.hasValidEntitlements}).result.then(d):d()}
;function UX(){return{controller:RX,controllerAs:"ctrl",scope:{inputName:"@",initialOffers:"@",hasValidEntitlements:"@",isAlreadyPaid:"@",canBeMadeFree:"@"},templateUrl:"ypcoffermanagement.html",link:function(a,b,c){a.$watchCollection("ctrl.offerManagement.offers",function(d,e){if(!angular.equals(d,e)){var f=angular.element(b[0].querySelector('input[name="'+c.inputName+'"]'))[0];f.value=angular.toJson(d);qL(f,"change")}},!0)}}}
var VX=mR(function(){var a=angular.module("yt.www.creator.angular.directives.ypcOfferManagement",[]);a.directive("ypcOfferManagement",UX);return a});function WX(a,b){I.call(this);Rh(this,b);this.l=this.g=null}
z(WX,I);WX.$inject=["$rootScope","DisposeService"];function XX(a){if(a.l){var b={};Nb(a.l,function(c,d){c&&(b[d]=c)});
return b}return null}
function YX(a){var b={};if(a.g){var c={};a.g&&("yes"==a.g.enabled?ec(c,a.g):c.enabled=a.g.enabled)}else c=null;a=XX(a);c&&ec(b,c);a&&(b.country_ratings=a);return Xb(b)?null:angular.toJson(b)}
function ZX(a,b){a.A=b;uR(a)}
function uR(a){a.A&&a.A(YX(a))}
;function $X(){this.g=this.l=this.T=null}
function qS(a,b){a.T=b;a.T.$watch("metadata",w(function(){this.T.mdeform.$dirty&&this.j&&this.j()},a),!0)}
function aY(a){a.T.$apply(w(a.bw,a))}
h=$X.prototype;h.bw=function(){this.T.mdeform&&this.T.mdeform.$setPristine()};
h.setVideoId=function(a){this.l=a};
h.isDirty=function(){return this.T.mdeform?this.T.mdeform.$dirty:!1};
h.save=function(a,b){var c=bY(this);c.modified_fields=Tb(c).join(",");this.g&&(this.g.abort(),this.g=null);var d=yP(this.l);BK("yt-metadata-editor-widget-save-request",S("SAVING_DATA_NOW"));this.g=yM(d,{context:this,Ua:{action_edit_video:1},ya:c,onSuccess:w(this.Fu,this,a,b),onError:w(this.Cu,this,b),Fa:w(this.Du,this)})};
h.Fu=function(a,b,c,d){(c=d.metadata_errors)&&c.length?(a=fb(c,function(e){return e.message}),BK("yt-metadata-editor-widget-save-fail",a),b&&b(a)):(aY(this),b=S("ALL_DATA_SAVED"),BK("yt-metadata-editor-widget-save-success",b),a&&a(b,d))};
h.Cu=function(a){var b=[S("FAILED_SAVE_SERVER_ERROR")];BK("yt-metadata-editor-widget-save-fail",b);a&&a(b)};
h.Du=function(){this.g=null};
function cY(a){var b=a.T.mdeform,c=a.T?angular.copy(a.T.metadata):{},d=Ob(c,function(e,f){return b[f]&&b[f].$dirty});
if("ad_breaks"in d||"ad_formats"in d)d.ad_breaks=c.ad_breaks,d.ad_formats=c.ad_formats;null==a.l&&(d.ad_breaks=c.ad_breaks,d.ad_formats=c.ad_formats,c.translation_editor&&c.translation_editor.metadata_language&&(d.translation_editor||(d.translation_editor={}),d.translation_editor.metadata_language=c.translation_editor.metadata_language),c.category&&(d.category=c.category));return d}
function bY(a){a=cY(a);var b={},c={};"title"in a&&(c.title=a.title);"description"in a&&(c.description=a.description);a.category&&(c.category=a.category);if(void 0!==a.privacy&&null!==a.privacy){var d="";switch(a.privacy){case 0:d="private";break;case 1:d="public";break;case 2:d="unlisted"}c.privacy=d}a.product_placement&&(c.product_placement=angular.toJson(a.product_placement));a.recoupment&&(c.recoupment_new=a.recoupment);d={};if(a.translation_editor){var e=a.translation_editor.metadata_language;
e&&(d.metadata_language=e);if(e=a.translation_editor.translations){var f=[];for(k in e){var g=angular.copy(e[k]);g.language=k;delete g.source;f.push(g)}d.translations=angular.toJson(f)}}var k={};a.ad_formats&&(k.ad_formats=angular.toJson(a.ad_formats));a.ad_breaks&&(k.ad_breaks=angular.toJson(a.ad_breaks));a.third_party_ads_new&&(k.third_party_ads_new=angular.toJson(a.third_party_ads_new));e={};a.game_title&&(a.game_title.title&&a.game_title.mid&&delete a.game_title.title,e.game_title=angular.toJson(a.game_title));
a.stream_optimizations&&(e.latency_class=a.stream_optimizations.latencyClass);a.broadcast_delay&&(e.broadcast_delay_ms=a.broadcast_delay);if(a.chat_options){var l=g=f="no",m="no",n="no",t=0,r="no",v="";a.chat_options.chatEnabled&&(f="yes");a.chat_options.chatMembersOnlyEnabled&&(g="yes");a.chat_options.blockSpam&&(m="yes");a.chat_options.slowModeEnabled&&(n="yes");a.chat_options.slowModeTimeoutDurationSec&&(t=a.chat_options.slowModeTimeoutDurationSec);a.chat_options.superChatForGoodEnabled&&(r="yes");
a.chat_options.superChatForGoodNpoId&&(v=a.chat_options.superChatForGoodNpoId);a.chat_options.inviteOnlyModeEnabled&&(l="yes");e.enable_live_chat=f;e.is_live_chat_members_only=g;e.is_live_chat_invite_only=l;e.auto_moderate_chat=m;e.enable_live_chat_slow_mode=n;e.live_chat_slow_mode_timeout_duration_sec=t;e.enable_super_chat_for_good=r;e.super_chat_for_good_npo_id=v}null!==a&&"monetization"in a&&(e.monetization=a.monetization?"ads":"off");null!==a&&"dvr_enabled"in a&&(e.enable_dvr=a.dvr_enabled?"yes":
"no");a.recording_options&&(f="false",g="no",a.recording_options.recordingEnabled&&(f="true"),a.recording_options.makeRecordingUnlisted&&(g="yes"),e.enable_recording=f,e.make_unlisted_on_complete=g);a.distribution_options&&(e.creator_share_feeds=a.distribution_options.notifySubscribers?"yes":"no");a.time_selector&&(e.scheduled_start_date=a.time_selector.scheduledStartDate,e.scheduled_start_time_hour=a.time_selector.scheduledStartTimeHour,e.scheduled_start_time_minute=a.time_selector.scheduledStartTimeMinute,
e.scheduled_start_time_clear=a.time_selector.scheduledStartTimeClear,e.scheduled_timezone=a.time_selector.scheduledTimezone,a.time_selector.scheduledDurationMinutes&&(e.scheduled_duration_minutes=a.time_selector.scheduledDurationMinutes));null!==a&&"spherical"in a&&(e.spherical=angular.toJson(a.spherical));null!==a&&"partial_spherical"in a&&(e.partial_spherical=angular.toJson(a.partial_spherical));ec(b,c,d,k,e);a.trailer&&(b.trailer=angular.toJson(a.trailer));a.threed&&(b.threed=angular.toJson(a.threed));
a.music&&(b.music=angular.toJson(a.music));return b}
;function dY(a,b){I.call(this);Rh(this,b)}
z(dY,I);dY.$inject=["$rootScope","DisposeService"];function eY(a,b,c,d,e,f){this.B=a;this.j=b;this.C=c;this.l=d;this.F=e;this.A=f;this.g=null}
eY.$inject="$compile $controller $http $q $rootScope $templateCache".split(" ");function fY(a,b,c){this.A=a;this.j=b;this.T=c;this.g=null;this.l=!1}
fY.prototype.show=function(){dj("body")[0].appendChild(this.j);this.g=new IO(this.j,!1);LO(this.g,"all",w(function(){this.l||(this.g=null,this.dismiss("dialogclosed"))},this),!0);
this.g.show()};
function gY(a){a.l||(a.l=!0,a.g&&(a.g.dispose(),a.g=null),a.T&&(a.T.$destroy(),a.T=null),a.j&&(Bj(a.j),a.j=null))}
fY.prototype.close=function(a){gY(this);this.A.resolve(a)};
fY.prototype.dismiss=function(a){gY(this);this.A.reject(a)};
function hY(a,b){return a.C.get(b,{cache:a.A}).then(function(c){return c.data})}
eY.prototype.create=function(a,b,c){var d=this.l.defer(),e={result:d.promise,close:w(d.resolve,d),dismiss:w(d.reject,d)};hY(this,a).then(w(function(f){this.g&&(this.g.dismiss("overridden"),this.g=null);var g=this.F.$new();c&&ec(g,c);this.j(b,{$scope:g,dialogInstance:e});f=angular.element(f);f=this.B(f)(g)[0];g=new fY(d,f,g);e.close=w(g.close,g);e.dismiss=w(g.dismiss,g);g.show();this.g=g},this),function(f){d.reject(f)});
return e};function iY(){ON.call(this,"languagepicker");this.g={}}
z(iY,ON);Ka(iY);h=iY.prototype;h.register=function(){PN(this,"click",this.El,"menu-item");PN(this,"keyup",this.an,"search-input");PN(this,"keydown",this.Ol,"search-input");PN(this,"blur",this.Nl,"search-input");PN(this,"focus",this.Fn);this.wb("yt-uix-button-menu-before-show",this.mq);this.wb("yt-uix-button-menu-hide",this.lq)};
h.unregister=function(){QN(this,"click",this.El,"menu-item");QN(this,"keyup",this.an,"search-input");QN(this,"keydown",this.Ol,"search-input");QN(this,"blur",this.Nl,"search-input");QN(this,"focus",this.Fn);nL(Sb(this.g));this.g={};iY.J.unregister.call(this)};
h.mq=function(a){if(O(a,"yt-languagepicker-button")){var b=Pa(a);a=U(a,"keydown",w(this.Bp,this));this.g[b]=a}};
h.lq=function(a){O(a,"yt-languagepicker-button")&&(a=Pa(a),nL(this.g[a]),delete this.g[a])};
function jY(a,b){return ib(b,function(c){return!ib(a,function(d){return!Fc(d,c)})})}
function kY(a,b,c){A(a,function(d){var e=oq(d,"value"),f=lY(d);V(d,e!=c&&f&&jY(f,b))})}
function lY(a){if("undefined"===typeof a.g){var b=oq(a,"searchTerms");b?(a.g=[],A(b.split(";"),function(c){ub(a.g,mY(c))})):a.g=mY(Vj(a))}return a.g}
function mY(a){return a.toLowerCase().match(/[^ \(\)\[\]]+/g)||[]}
function nY(a,b){var c=SN.V(),d=WN(c,a);YN(c,a);$N(c,d,b)}
h.an=function(a){var b=this.Na(a),c=N(W(this,"search-result"),b),d=mY(a.value);if(d){var e=Cj(c);a=oq(b,"fallbackOption");kY(e,d,a);d=jb(e,BN);a=c.querySelector('li[data-value="'+a+'"]');V(c,!(!d&&!a));d?nY(b,d):a&&(EN(a),nY(b,a))}else V(c,!1)};
h.Ol=function(a,b,c){b=SN.V();a=this.Na(a);var d=WN(b,a);switch(c.keyCode){case 13:case 9:(b=YN(b,a))&&qL(Dj(b),"click");c.preventDefault();break;case 27:YN(b,a);ZN(b,d);c.preventDefault();break;case 38:case 40:d.focus(),c.preventDefault()}};
h.El=function(a){var b=oq(a,"value"),c=this.Na(a),d=oq(c,"languagepickerInputId");d=M(d);d.value=b;qL(d,"change");(d=N(W(this,"suggestions"),c))&&!d.querySelector('li[data-value="'+b+'"]')&&((b=N(W(this,"selected"),c))&&Bj(b),a=a.cloneNode(!0),P(a,W(this,"selected")),Aj(d,a))};
function oY(a,b){var c=SN.V(),d=a.Na(b);WN(c,d).focus()}
h.Nl=function(a){oY(this,a)};
h.Fn=function(a,b,c){"INPUT"!=c.target.tagName&&oY(this,a)};
h.Bp=function(a){if(38!=a.keyCode&&40!=a.keyCode){var b=a.target,c=SN.V();b=UN(c,b);b=N(W(this,"search-input"),b);13!=a.keyCode&&9!=a.keyCode&&32!=a.keyCode&&(b.value="");b.focus()}};var pY=iY.V(),qY=SN.V();function rY(){return{require:"ngModel",link:function(a,b,c,d){d.$render=function(){d.$viewValue&&a.$evalAsync(Ua(sY,a,b,d.$viewValue))};
a.select=function(e){d.$setViewValue(e.code)};
a.menuId=Pa(b[0])},
scope:{suggestedValues:"=",allowedValues:"="},templateUrl:"language_picker.html"}}
function sY(a,b,c){var d=N(W(pY,"hidden-input"),b[0]);a=N(W(qY,"content"),b[0]);var e=N(W(pY,"menu-item-"+c),b[0]);e=N(W(qY,"menu-item"),e);d.value=c;d=Vj(e);Lj(a,d);a=N(W(pY,"suggestions"),b[0]);b=W(qY,"menu-item-selected");(d=N(b,a))&&gn(d,b);(c=N(W(pY,"menu-item-"+c),a))&&P(c,b)}
var tY=mR(function(){var a=angular.module("yt.www.creator.angular.directives.languagePicker",[]);a.directive("languagePicker",rY);return a});function uY(a,b){this.g=b;this.translationLanguage=a.translationLanguage;this.originalLanguage=a.originalLanguage;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];a.dialogCtrl=this}
q("yt.www.translationeditor.angular.AddTranslationDialogCtrl",uY,void 0);uY.$inject=["$scope","dialogInstance"];uY.prototype.cancel=function(){this.g.dismiss("cancel")};
uY.prototype.save=function(){this.g.close({translationLanguage:this.translationLanguage})};
uY.prototype.cancel=uY.prototype.cancel;uY.prototype.save=uY.prototype.save;function vY(a,b){this.g=b;this.originalLanguage=a.originalLanguage;this.showDefaultLanguageForNewUploadsCheckbox=a.showDefaultLanguageForNewUploadsCheckbox;this.defaultForNewUploads=!1;this.translationLanguage=null;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];a.dialogCtrl=this}
q("yt.www.translationeditor.angular.SetOriginalLanguageAndAddTranslationDialogCtrl",vY,void 0);vY.$inject=["$scope","dialogInstance"];vY.prototype.j=function(){return null!=this.originalLanguage&&null!=this.translationLanguage&&this.originalLanguage!=this.translationLanguage};
vY.prototype.cancel=function(){this.g.dismiss("cancel")};
vY.prototype.save=function(){this.g.close({originalLanguage:this.originalLanguage,translationLanguage:this.translationLanguage,defaultForNewUploads:this.defaultForNewUploads})};
vY.prototype.canSave=vY.prototype.j;vY.prototype.cancel=vY.prototype.cancel;vY.prototype.save=vY.prototype.save;function wY(a,b){this.g=b;this.originalLanguage=a.originalLanguage;this.showDefaultLanguageForNewUploadsCheckbox=a.showDefaultLanguageForNewUploadsCheckbox;this.defaultForNewUploads=!1;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];this.j=a.existingTranslationLanguages||{};a.dialogCtrl=this}
q("yt.www.translationeditor.angular.SetOriginalLanguageDialogCtrl",wY,void 0);wY.$inject=["$scope","dialogInstance"];wY.prototype.l=function(){return this.originalLanguage in this.j};
wY.prototype.cancel=function(){this.g.dismiss("cancel")};
wY.prototype.save=function(){this.g.close({originalLanguage:this.originalLanguage,defaultForNewUploads:this.defaultForNewUploads})};
wY.prototype.languageCollidesWithTranslation=wY.prototype.l;wY.prototype.cancel=wY.prototype.cancel;wY.prototype.save=wY.prototype.save;function xY(a){this.URL="/upload_defaults_ajax";this.g=a}
xY.$inject=["$http"];function yY(a,b){var c=vP({action_set_metadata_language:"1",ch:R("userExternalId"),metadata_language:b});a.g.post(a.URL,c)}
;function zY(a,b,c,d,e){this.T=b;this.B=c;this.l=d;this.C=e;this.original=this.creatorTranslationSource=null;this.translations={};this.language=null;this.translatedLanguageList=[];this.errors=null;this.j=[];this.g=[];this.Tg={};this.Uf=new du;AY(d,this);b.$on("$destroy",function(){d.g=null;BY(d)});
b.$watch("transEditor.translations",w(function(f,g){null!=this.language&&this.Uf.add(this.language);!g||angular.equals(g,{})||angular.equals(f,g)||(CY(this),DY(this.l))},this),!0);
b.$watch("transEditor.original.language",w(function(f,g){g&&!angular.equals(f,g)&&DY(this.l)},this),!0)}
q("yt.www.translationeditor.angular.TranslationEditorCtrl",zY,void 0);zY.$inject=["$controller","$scope","DialogService","TranslationEditorService","UploadDefaultsAjaxService"];function EY(a){a.translations&&(angular.forEach(a.translations,function(b,c){this.Uf.contains(c)&&null!=this.creatorTranslationSource&&(b.source=this.creatorTranslationSource)},a),a.Uf.clear())}
h=zY.prototype;h.gp=function(){return this.original&&this.original.language?this.A(this.original.language):""};
h.Fs=function(){var a={},b;for(b in this.translations)a[b]=!0;this.B.create("set_original_language_dialog.html","SetOriginalLanguageDialogCtrl",{showDefaultLanguageForNewUploadsCheckbox:this.T.showDefaultLanguageForNewUploadsCheckbox,originalLanguage:this.original.language,languagePickerSuggestions:this.j,languagePickerAllowedValues:this.g,existingTranslationLanguages:a}).result.then(w(function(c){c.originalLanguage in this.translations&&(delete this.translations[c.originalLanguage],this.language==
c.originalLanguage&&(this.language=null));this.original.language=c.originalLanguage;BK("translation-editor-original-language-selected",c.originalLanguage);c.defaultForNewUploads&&yY(this.C,c.originalLanguage)},this))};
h.xs=function(){if(this.original.language){var a=this.B.create("add_translation_dialog.html","AddTranslationDialogCtrl",{originalLanguage:this.original.language,languagePickerSuggestions:this.j,languagePickerAllowedValues:this.g});a.result.then(w(function(b){FY(this,b.translationLanguage)},this))}else a=this.B.create("set_original_and_add_translation_dialog.html","SetOriginalLanguageAndAddTranslationDialogCtrl",{showDefaultLanguageForNewUploadsCheckbox:this.T.showDefaultLanguageForNewUploadsCheckbox,
originalLanguage:this.original.language,languagePickerSuggestions:this.j,languagePickerAllowedValues:this.g}),a.result.then(w(function(b){this.original.language=b.originalLanguage;BK("translation-editor-original-language-selected",b.originalLanguage);FY(this,b.translationLanguage);b.defaultForNewUploads&&yY(this.C,b.originalLanguage)},this))};
function FY(a,b){b in a.translations||(a.translations[b]={language:"",title:null,description:""},null!=a.creatorTranslationSource&&(a.translations[b].source=a.creatorTranslationSource),CY(a),DY(a.l));a.language=b}
h.Do=function(){this.language&&(delete this.translations[this.language],BK("translation-editor-translated-language-deleted",this.language),this.language=null)};
h.autoTranslate=function(){};
h.bp=function(){if(null==this.errors||angular.equals(this.errors,{}))return"";var a=fb(Tb(this.errors),w(this.A,this));zb(a);return a.join(", ")};
zY.prototype.getLanguagesWithErrorsAsString=zY.prototype.bp;function CY(a){a.translatedLanguageList=[];for(var b in a.translations)a.translatedLanguageList.push({code:b,name:a.A(b)});Cb(a.translatedLanguageList)}
zY.prototype.A=function(a){return a&&a in this.Tg?this.Tg[a]:""};
function GY(a,b){b.creator_translation_source&&(a.creatorTranslationSource=b.creator_translation_source);b.original?a.original=b.original:a.original={language:"",title:null,description:null};a.translations={};angular.forEach(b.translation,function(c){this.translations[c.language]=c},a);
a.g=b.allowed_language;a.j=b.suggested_language;a.Tg={};angular.forEach(b.allowed_language,function(c){this.Tg[c.code]=c.name},a);
CY(a);BY(a.l)}
zY.prototype.F=function(){return this.language&&this.translations&&this.creatorTranslationSource&&this.translations[this.language].source!=this.creatorTranslationSource&&this.Uf.contains(this.language)?!0:!1};
zY.prototype.getOriginalLanguageName=zY.prototype.gp;zY.prototype.onClickOriginalLanguage=zY.prototype.Fs;zY.prototype.onClickAddTranslation=zY.prototype.xs;zY.prototype.deleteTranslation=zY.prototype.Do;zY.prototype.getSourceWarningVisibility=zY.prototype.F;function HY(){return{controller:zY,templateUrl:"translation_editor.html",controllerAs:"transEditor",require:"?ngModel",transclude:!0,scope:{initFromBase64Json:"@",initFromYtConfig:"@",showDefaultLanguageForNewUploadsCheckbox:"@"},link:function(a,b,c,d,e){var f=a.transEditor;a.$watch("transEditor.language",function(){BK("translation-editor-translated-language-selected",f.language)});
a.initFromYtConfig?(c=R(a.initFromYtConfig),GY(f,c)):a.initFromBase64Json&&(c=angular.fromJson(Ze(Yf(a.initFromBase64Json))),GY(f,c));d&&a.$watch("[transEditor.original.language, transEditor.translations]",function(){var g=angular.copy({metadata_language:f.original.language,translations:f.translations});angular.forEach(g.translations,function(k){delete k.source});
d.$setViewValue(g)},!0);
e(a,function(g){b.append(g)})}}}
;function IY(a,b){this.l=a;this.Sb=b;this.A=this.j=this.g=null}
IY.$inject=["$rootScope","$timeout"];function AY(a,b){if(a.g)throw Error("You can only have one TranslationEditorCtrl per app!");a.g=b;BY(a)}
function JY(a){return a.g?{original:a.g.original,translations:a.g.translations}:null}
function KY(a,b){a.g&&a.l.$apply(w(function(){if(this.g.original)for(var c in b)this.g.original[c]=b[c]},a))}
function LY(a){a.g&&a.l.$apply(w(function(){EY(this.g)},a))}
function MY(a,b){a.g&&a.l.$apply(w(function(){this.g.errors=b},a))}
function DY(a){a.j&&a.Sb(w(a.j,a),0,!1)}
function BY(a){a.A&&a.A(JY(a))}
;function NY(a){return{templateUrl:"translation_menu.html",scope:{defaultText:"@",languageList:"=",errors:"=",onAddTranslation:"&"},require:"ngModel",link:function(b,c,d,e){function f(){k();a(g)}
function g(){var r=n.querySelector('li[data-value="'+e.$viewValue+'"]');m&&r&&EO(pO.V(),m,r)}
function k(){e.$viewValue?(b.selectedText="Invalid value: "+e.$viewValue,b.languageList&&angular.forEach(b.languageList,function(r){r.code==e.$viewValue&&(b.selectedText=r.name)})):b.selectedText=d.defaultText}
var l=N("translation-editor-translation-menu-button",c[0]),m=rO(l),n=qO(m);b.$watch("languageList",f);e.$render=f;var t=[];t.push(yK("yt-uix-menu-item-clicked",function(r){if((r=Yj(r,"LI"))&&Ij(n,r)&&pq(r)){var v=oq(r,"value");b.$apply(function(){e.$setViewValue(v);k()})}},this));
c.on("$destroy",function(){AK(t)})}}}
NY.$inject=["$timeout"];var OY=mR(function(){var a=angular.module("yt.www.translationeditor.angular.translationeditor",[tY.name]);a.directive("translationEditor",HY);a.directive("translationMenu",NY);a.controller("TranslationEditorCtrl",zY);a.controller("SetOriginalLanguageDialogCtrl",wY);a.controller("AddTranslationDialogCtrl",uY);a.controller("SetOriginalLanguageAndAddTranslationDialogCtrl",vY);a.service("TranslationEditorService",IY);a.service("UploadDefaultsAjaxService",xY);a.service("DialogService",eY);return a});mR(function(){var a=angular.module("metadataEditor",[Vt.name,qR.name,oR.name,KR.name,GR.name,MR.name,OR.name,QR.name,SR.name,UR.name,WR.name,ZR.name,aS.name,cS.name,gS.name,oS.name,rS.name,tS.name,wS.name,yS.name,AS.name,CS.name,ES.name,GS.name,IS.name,KS.name,MS.name,OS.name,QS.name,ST.name,jV.name,KX.name,MX.name,OX.name,QX.name,VX.name,OY.name]);a.controller("AdFriendlyAppealDialogCtrl",rR);a.controller("contentRatingsCtrl",sR);a.controller("countryContentRatingsCtrl",vR);a.controller("MetadataEditorCtrl",
xR);a.controller("VideoCreditsCtrl",yR);a.controller("YpcOfferManagementOfferCreationDialogCtrl",DR);a.controller("YpcOfferManagementOfferOperationDialogCtrl",ER);a.service("ContentRatingService",WX);a.service("MetadataEditorService",$X);a.service("VideoCreditsService",dY);a.config(["$compileProvider",function(b){b.debugInfoEnabled(!1)}])});function PY(){this.g=new YG(2)}
function QY(a,b){var c=new Date;return 0==a.g.parse(b,c)?"":c.toDateString()}
;function RY(a,b,c){kS.call(this,a,b);this.U=c||5;this.K=this.M=this.F=null}
z(RY,kS);h=RY.prototype;h.He=function(a,b,c){RY.J.He.call(this,a,[b,c]);K(this.popup,"hide",this.Kl,!1,this);this.F=b;this.M=new Ls(this.F);K(this.M,"key",this.wn,!1,this);this.K=c;K(this.K,"click",this.Bj,!1,this)};
h.Hf=function(){Bi(this.K,"click",this.Bj,!1,this);this.K=null;Bi(this.M,"key",this.wn,!1,this);this.F=this.M=null;Bi(this.popup,"hide",this.Kl,!1,this);RY.J.Hf.call(this)};
h.wn=function(a){13==a.keyCode&&(this.Bj(),a.preventDefault())};
h.Kl=function(){this.F.value||this.A||(this.L="",this.g.setPosition(this.S),this.A=!0,this.D++,this.dispatchEvent("change"),this.j&&(this.O&&this.l.open(this.j,this.g),this.Qj()));SY(this)};
h.Bj=function(){jS(this,this.F.value)};
h.Rj=function(){RY.J.Rj.call(this);SY(this)};
function SY(a){var b="";a.A||(b=a.L,b||(b=a.g.getPosition(),b=b.lat().toFixed(a.U)+" "+b.lng().toFixed(a.U)));a.F.value=b}
;function TY(){L.call(this);this.l=!1;this.A=this.g=this.j=null}
z(TY,L);function UY(a,b,c){a.g=b;a.A=c}
TY.prototype.init=function(){this.l||(this.l=!0,aK("GOOGLE_MAPS_API",w(this.B,this),R("GMAP_LANGUAGE",void 0),R("GMAP_VERSION",void 0)))};
TY.prototype.B=function(){var a=N("location-map",this.A);var b=N("location-input",this.g),c=N("map-button-search",this.g),d=N("location-latitude",this.g),e=N("location-longitude",this.g);N("location-altitude",this.g);var f=new google.maps.LatLng(R("GMAP_DEFAULT_LAT",void 0),R("GMAP_DEFAULT_LONG",void 0));this.j=new RY(f);d.value&&e.value&&(f=this.j,d=new google.maps.LatLng(d.value,e.value),iS(f,d,""),f.j&&f.j.panTo(d));this.j.Jb(this);K(this.j,"change",w(this.C,this));this.j.He(a,b,c)};
TY.prototype.C=function(){var a=N("location-latitude",this.g),b=N("location-longitude",this.g),c=N("location-altitude",this.g);if(this.j.A)a.value="",b.value="";else{var d=this.j.g.getPosition();a.value=d.lat().toFixed(5);b.value=d.lng().toFixed(5)}c.value=""};function VY(){AN(function(){Nb(R("GUIDED_HELP_FLOWS",void 0),function(a,b){WY(b)})})}
function WY(a){var b=R("GUIDED_HELP_LOCALE","en_US"),c="https://clients6.google.com";"test"==R("GUIDED_HELP_ENVIRONMENT")&&(c="https://content-googleapis-test.sandbox.google.com");window.guidedhelp=window.guidedhelp||{};window.guidedhelp.onError=function(){};
Mo("","/youtube",b,"youtube2",null,null,null,c,"AIzaSyBsoPoGbMyCfUNm_M-Hb-th-xAkxSutDvM")||XY(a)||(Jo(a,"","/youtube",b,"youtube2",null,null,null,null,null,c,"AIzaSyBsoPoGbMyCfUNm_M-Hb-th-xAkxSutDvM"),YY(a))}
function YY(a){var b=ZY(a);b&&EM(b,"true",7776E3);BK("DISMISSED",a)}
function XY(a){return(a=ZY(a))?!!FM(a):!1}
function ZY(a){var b=R("GUIDED_HELP_FLOWS");return b&&b[a]}
;function $Y(a){L.call(this);this.g=a;this.element=null}
z($Y,L);h=$Y.prototype;h.Bb=function(a){this.element=a;K(this.g,"change",this.Zc,!1,this);this.Zc();K(this.g,"partial_change",this.Km,!1,this);R("SHOULD_SHOW_ENDSCREEN_GUIDED_TOUR")&&((a=R("GUIDED_HELP_FLOWS"))||(a={}),a[7055126]="endscreen-metadata-editor-gh",kK("GUIDED_HELP_FLOWS",a),VY())};
h.Da=function(){};
h.Zc=function(){};
h.Km=function(){};
h.Vj=function(){return!0};
h.Uj=function(){return!0};
h.focus=function(){};
function Z(a,b){return N(b,a.element)}
function aZ(a){return ak(a.element,"metadata-editor-container")}
function bZ(a,b){var c=aZ(a);angular.element(c).injector();return lR(c,[],b)}
function cZ(a,b){if(a){var c=function(d){d=dj(d,null,a);A(d,function(e){e.disabled=b||O(e,"frozen-checkbox")})};
c("INPUT");c("TEXTAREA");c("SELECT")}}
;function dZ(a){if(!/^\d+?(:\d+){0,2}(\.\d+)?$/.test(a))return null;var b=0;A(a.split(":"),function(c){b=60*b+Math.abs(parseFloat(c))});
return 1E3*b}
;function eZ(a){var b=new IO(a);LO(b,"cancel",w(this.B,this));this.F=b;this.A=N("midroll-editor-ad-placeholder",a);this.j=N("metadata-editor-midroll-viewer-player",a)}
eZ.prototype.show=function(a,b){this.F.show();this.l=b;var c=R("MIDROLL_VIEWER_SWF_CONFIG");c=lV(c);var d=xm(this.j);c.attrs.width=d.width+"px";c.attrs.height=d.height+"px";c.args.video_id=a;c.args.jsapicallback=w(this.C,this);this.g=KV(this.j,c)};
eZ.prototype.C=function(){this.g.pauseVideo();for(var a=0;a<this.l.length;++a)this.g.addCueRange(a.toString(),this.l[a],this.l[a],16766720);this.g.addEventListener("onCueRangeEnter",w(this.D,this));this.g.playVideo();this.g.pauseVideo()};
eZ.prototype.D=function(){this.g.pauseVideo();fZ(this)};
eZ.prototype.B=function(){var a=this.j;if(a=M(a))a=IV+"_"+Pa(a),(a=HV[a])&&a.dispose();delete this.g};
function fZ(a){EN(a.A);rK(w(function(){FN(this.A);this.g.playVideo()},a),2E3)}
;function gZ(a,b){pL(b,"click",Ua(hZ,a,b),"midroll-preview-link-desc")}
function hZ(a,b){var c=N("metadata-editor-midroll-viewer",b),d=N("field-midrolls-manual",b)||N("field-midrolls",b),e=a.g;d=iZ(d.value);(new eZ(c)).show(e,d)}
function iZ(a){var b=[];A(a.split(/[\s,]+/),function(c){(c=dZ(c))&&b.push(c/1E3)});
return b}
;function jZ(a){this.j=!1;$Y.call(this,a)}
z(jZ,$Y);h=jZ.prototype;
h.Bb=function(a,b){jZ.J.Bb.call(this,a,b);kZ(this,!1);Z(this,"monetization-disclaimer")&&(K(Z(this,"monetization-disclaimer-accept"),"click",w(this.vm,this,!0)),K(Z(this,"monetization-disclaimer-cancel"),"click",w(this.vm,this,!1)));var c=fj("release-date-formatted",this.element);A(c,function(d){var e=N("release-date-formatted-input",d),f=N("release-date",Hj(d)),g=new PG(1),k=new YG(1),l=new PG("yyyy-MM-dd");d=new YG("yyyy-MM-dd");var m=new XI;YI(m,!0);aJ(m,!1);var n=new oJ(g,k,m);n.Sa(e);e=new Hl;
0!=d.parse(f.value,e)&&n.setDate(e);K(n,"change",function(){var t=n.getDate();f.value=t?l.format(t):""})});
(c=Z(this,"midroll-generated-and-manual-settings"))?gZ(this.g,c):(c=Z(this,"midroll-ads-container"))&&gZ(this.g,c);lZ(this)};
function mZ(a){var b=nZ(a);A(fj("monetization-style",a.element),function(c){var d=T(c,"monetization-style");A(fj("monetize-with-"+d,this.element),function(e){var f=d==b;V(e,f);e.hasAttribute("data-mde-ignore")||cZ(e,!f)},this)},a)}
h.vm=function(a){FN(Z(this,"monetization-disclaimer"));a?(kK("canMonetizeWithoutDisclaimer",!0),a=Bo({enable_monetization:"yes"}),sM("/metadata_ajax",{method:"POST",Ua:{action_confirm_disclaimer:1},postBody:a.toString()}),kZ(this,!1)):Z(this,"monetization-style-ads").checked=!1;this.dispatchEvent("system_change")};
h.Da=function(a){jZ.J.Da.call(this,a);if(this.element){V(Z(this,"monetization-disabled-message"),a.disable_monetization);kZ(this,!!a.disable_monetization);if(a=Z(this,"third-party-ads-checkbox"))Z(this,"third-party-ads-video-id-input").disabled=!a.checked;var b=Z(this,"midroll-generated-and-manual-settings");if(b){a=N("midroll-ads",b);var c=N("midroll-manual-ads",b),d=N("field-midrolls-manual",b);b=N("midroll-preview-link-desc",b);a&&(c.disabled=!a.checked,WP.V().cc(c),d.disabled=!(a.checked&&c.checked),
b.disabled=!a.checked,a.checked&&!c.checked?d.value=T(d,"auto-gen-midroll-times"):a.checked||(d.value=""))}else Z(this,"midroll-ads")&&(Z(this,"field-midrolls").disabled=!Z(this,"midroll-ads").checked,Z(this,"midroll-preview-link-desc").disabled=!Z(this,"midroll-ads").checked);a=Z(this,"ads-settings-instream");c=Z(this,"ads-settings-trueview-instream");a=a&&a.checked||c&&c.checked;V(Z(this,"instream-options"),a);ZP()}};
function kZ(a,b){var c=fj("monetization-style",a.element),d=Z(a,"monetization-style-field");if(d)if(b)A(c,function(f){oZ(f,!1)},a),d.value="";
else{var e="";A(c,function(f){f.checked&&(e=T(f,"monetization-style"))});
"ads"!=e||a.Se()?d.value=e:EN(Z(a,"monetization-disclaimer"));1<c.length&&pZ(a);mZ(a)}}
h.Se=function(){return!0};
function nZ(a){return a.element&&Z(a,"monetization-style-field")?Z(a,"monetization-style-field").value:""}
function pZ(a){var b=fj("monetization-style",a.element),c=Z(a,"require-paid-subscription"),d=nZ(a);A(b,function(e){switch(T(e,"monetization-style")){case "rental":case "tvod":c&&!c.checked?oZ(e,!1,S("MONETIZATION_TYPE_CONFLICT_FREE_RENTAL")):"ads"==d?oZ(e,!1,this.fg()):T(e,"always-disabled")||oZ(e,!0);break;case "ppv":"ads"==d?oZ(e,!1,this.fg()):oZ(e,!0);break;case "ads":"ads"!=d&&""!=d&&"unspecified"!=d?oZ(e,!1,this.fg()):oZ(e,!0)}},a)}
h.fg=function(){return S("MONETIZATION_TYPE_CONFLICT_POLICY_AND_RENTAL")};
function oZ(a,b,c){var d=Yj(a,"label");b?(a.disabled=!1,d&&(d.title="",gn(d,"metadata-label-disabled"))):(a.checked=!1,a.disabled=!0,d&&(c&&(d.title=c),P(d,"metadata-label-disabled")))}
h.Uj=function(){return"rental"!=nZ(this)};
function qZ(a,b,c){if(!a.element)return!1;a=dj("INPUT",c,a.element);var d=!1;A(a,function(e){var f=b;e.value||(0<e.maxLength&&(f=f.substr(0,e.maxLength)),e.value!=f&&(e.value=f,d|=!e.disabled))});
return!!d}
function rZ(a,b){if(a){var c=N("yt-uix-form-input-select-element",a),d=a;O(a,"yt-uix-form-input-select")||(d=N("yt-uix-form-input-select",a));c&&d&&(b?gn(d,"yt-uix-form-input-select-disabled"):P(d,"yt-uix-form-input-select-disabled"),c.disabled=!b)}}
function lZ(a){var b=Z(a,"ypps-rate-dialog-open-button"),c=sZ(a);if(b&&c){var d=new IO(c);K(b,"click",function(){d.show()});
b=Z(a,"ypps-submitted-answers");(b=T(b,"ypps-rating"))?tZ(a,JSON.parse(b)):uZ(a)}}
h.qn=function(){return"ads"==IP(this.g,"video_monetization_style")};
h.Zc=function(){vZ(this)};
h.Km=function(a){mb(a.g,"ypps_rating")&&vZ(this)};
function vZ(a){if(!Z(a,"ypps-submitted-answers")){var b=IP(a.g,"ypps_rating"),c=Z(a,"ypps-rate-section");if(c){var d=!a.qn()||!!b;V(c,d)}b&&tZ(a,JSON.parse(b))}}
function uZ(a){var b=sZ(a),c=b.querySelector(".ypps-rate-dialog-question-list").querySelector(".ypps-rate-dialog-cert-all-question-block");K(c.querySelector("[value='cert_all_quick']"),"click",a.uh.bind(a,!0));c=c.querySelector("[value='cert_all_self']");K(c,"click",a.uh.bind(a,!1));c.checked=!0;c=b.querySelector(".ypps-dialog-submit");var d=b.querySelectorAll("input[type='radio']");A(d,function(f){K(f,"change",this.Mj.bind(this))}.bind(a));
var e=Z(a,"ypps-rate-answers");K(c,"click",function(){var f=wZ(this);e.value=JSON.stringify(f);this.dispatchEvent("user_change");xZ(this,"edit")}.bind(a));
K(b.querySelector(".ypps-dialog-cancel"),"click",function(){A(d,function(g){g.checked=!1}.bind(this));
this.uh(!1);if(e.value){var f=JSON.parse(e.value);f&&(yZ(this,f),"cert_all_quick"==f.cert_all&&this.uh(!0))}this.Mj()}.bind(a))}
function tZ(a,b){if(!a.j){a.j=!0;var c=sZ(a);xZ(a,"view");A(c.querySelectorAll(".ypps-rate-dialog-question-block"),function(f){A(f.querySelectorAll("input"),function(g){nG(g,!0)});
P(f,"disabled")});
V(c.querySelector(".ypps-rate-dialog-cert-all-question-block"),!1);yZ(a,b);var d=c.querySelector(".ypps-dialog-submit"),e=c.querySelector(".ypps-dialog-close");V(c.querySelector(".ypps-dialog-cancel"),!1);V(d,!1);V(e,!0)}}
h.Mj=function(){var a=sZ(this),b=a.querySelector(".ypps-dialog-submit");ib(a.querySelectorAll(".ypps-rate-dialog-question-block"),function(c){return c.querySelector("[type='radio']")?!!c.querySelector("[type='radio']:checked"):!0})?b.removeAttribute("disabled"):b.setAttribute("disabled","")};
h.uh=function(a){var b=sZ(this);A(b.querySelector(".ypps-rate-dialog-question-list").querySelectorAll(".ypps-rate-dialog-question-block.cert-all-question"),function(d){var e=d.querySelectorAll("input");A(e,function(f){nG(f,a)});
a?P(d,"disabled"):gn(d,"disabled");a&&((d=d.querySelector("input.default-selection"))?d.checked=!0:e[0].checked=!0)});
var c=b.querySelector("[value='cert_all_quick']");b=b.querySelector("[value='cert_all_self']");a&&c&&(c.checked=!0);!a&&b&&(b.checked=!0);this.Mj()};
function wZ(a){a=sZ(a);var b={};A(a.querySelectorAll("[type='radio']:checked"),function(c){b[c.name]=c.value});
return b}
function yZ(a,b){if(b){var c=sZ(a);Nb(b,function(d,e){var f=c.querySelector("input[name='"+e+"'][value='"+d+"']");f&&(f.checked=!0)}.bind(a))}}
function xZ(a,b){var c=Z(a,"ypps-title-new"),d=Z(a,"ypps-title-view");V(c,"rate"===b||"edit"===b);V(d,"view"===b);c=Z(a,"ypps-rate-dialog-open-button-rate");d=Z(a,"ypps-rate-dialog-open-button-edit");var e=Z(a,"ypps-rate-dialog-open-button-view");V(c,"rate"===b);V(d,"edit"===b);V(e,"view"===b)}
function sZ(a){a=aZ(a);return N("ypps-rate-dialog",a)}
;function zZ(a){jZ.call(this,a)}
z(zZ,jZ);zZ.prototype.Da=function(a){zZ.J.Da.call(this,a)};
zZ.prototype.Se=function(){return!0};function AZ(a){jZ.call(this,a)}
z(AZ,jZ);AZ.prototype.Da=function(a){AZ.J.Da.call(this,a);a=nZ(this);var b=Z(this,"require-paid-subscription");V(Z(this,"monetization-settings"),"ads"==a||b&&b.checked)};function BZ(a){jZ.call(this,a)}
z(BZ,jZ);h=BZ.prototype;h.Vj=function(){return!1};
h.Da=function(a){BZ.J.Da.call(this,a);if(this.element){V(Z(this,"claim-settings-content"),!a.disable_monetization);Z(this,"monetization-style-ads").checked?(a=Z(this,"usage-policy-select"),a=(a=a[a.selectedIndex])&&"true"==T(a,"is-monetized-policy")):a=!1;V(Z(this,"monetize-options-box"),a);V(Z(this,"ad-guidelines-section"),a);var b=Z(this,"acknowledged-ad-friendly-guidelines");b&&nG(b,!a);if(b=N("metadata-syndication-settings",aZ(this)))cZ(b,!a),jn(b,"metadata-syndication-disabled",!a);Z(this,"claim-match-policy")&&
(a=Z(this,"claim-match-enabled").checked,rZ(Z(this,"claim-match-policy"),a),rZ(Z(this,"claim-match-type"),a),jn(Z(this,"claim-match-section"),"disabled",!a));CZ(this)||cZ(Z(this,"asset-info"),""==nZ(this));if(a=Z(this,"asset-radios"))for(a=dj("INPUT",null,a),b=0;b<a.length;b++){var c=a[b],d=Z(this,"asset-form-"+c.value);V(d,c.checked);cZ(d,c.disabled||!c.checked)}}};
function CZ(a){return""!=IP(a.g,"claim_usage_policy")}
h.qn=function(){var a=IP(this.g,"claim_usage_policy"),b;if(b=!!a)a:{b=Z(this,"usage-policy-select");for(var c=0;c<b.length;c++)if(b[c].value==a&&"true"==T(b[c],"is-monetized-policy")){b=!0;break a}b=!1}return b};
h.Zc=function(){BZ.J.Zc.call(this);var a=!1;if(CZ(this)){if("yes"==IP(this.g,"claim_match_enabled")){var b=IP(this.g,"claim_match_enabled"),c=Z(this,"claim-match-enabled");b&&c&&(c.checked="yes"==b,c.disabled=!0,P(c,"frozen-checkbox"),WP.V().cc(c))}if(b=Z(this,"claim-match-enabled"))b=N("yt-uix-form-input-checkbox-element",Hj(b)),P(b,"yt-uix-hovercard-target");cZ(Z(this,"asset-info"),!0)}else a=DZ(this);a&&this.dispatchEvent("system_change")};
h.Bb=function(a){BZ.J.Bb.call(this,a);CZ(this)||DZ(this)};
function DZ(a){var b=qZ(a,IP(a.g,"title"),"asset-title");a.g.g&&(b|=qZ(a,a.g.g,"asset-custom-id"));return!!b}
;function EZ(a){jZ.call(this,a)}
z(EZ,jZ);EZ.prototype.Da=function(a){EZ.J.Da.call(this,a);a=Z(this,"acknowledge-cover").checked;V(Z(this,"ad-guidelines-section"),a);var b=Z(this,"acknowledged-ad-friendly-guidelines");b&&nG(b,!a)};
EZ.prototype.Se=function(){return R("canMonetizeWithoutDisclaimer")};function FZ(a){jZ.call(this,a)}
z(FZ,jZ);FZ.prototype.Da=function(a){FZ.J.Da.call(this,a)};
FZ.prototype.Se=function(){return!0};function GZ(a){jZ.call(this,a)}
z(GZ,jZ);GZ.prototype.Da=function(a){GZ.J.Da.call(this,a);if(this.element){a=aZ(this);a=N("metadata-syndication-settings",a);var b="ads"==nZ(this);a&&(cZ(a,!b),jn(a,"metadata-syndication-disabled",!b))}};
GZ.prototype.Se=function(){return R("canMonetizeWithoutDisclaimer")};
GZ.prototype.fg=function(){return S("MONETIZATION_TYPE_CONFLICT_ADS_AND_RENTAL")};
GZ.prototype.Vj=function(){return!R("monetizationTabAutoSaveDisabled",void 0)};function HZ(a,b){switch(a){case "audio_revshare_tab":return new zZ(b);case "cover_revshare_tab":return new EZ(b);case "disputemon_tab":return new FZ(b);case "monetization_tab":return new GZ(b);case "frozen_monetization_tab":return new IZ(b);case "claim_settings_tab":return new BZ(b);case "frozen_claim_settings_tab":return new IZ(b);case "claim_appeal_tab":return new AZ(b);default:return new JZ(b)}}
function JZ(a){jZ.call(this,a)}
z(JZ,jZ);JZ.prototype.Da=function(){};
function IZ(a){jZ.call(this,a)}
z(IZ,jZ);IZ.prototype.Da=Ja;IZ.prototype.Bb=function(){mZ(this)};function KZ(a,b){$Y.call(this,b);this.B=new PG(1);this.l=null;this.j=new oJ(this.B,new YG(1));K(this.j,"change",function(){this.dispatchEvent("user_change")},!1,this);
this.A=new TY;this.A.Jb(this);this.C=a}
z(KZ,$Y);KZ.prototype.Bb=function(a,b){KZ.J.Bb.call(this,a,b);b&&UY(this.A,this.element,b);var c=Z(this,"recorded-date-formatted-input");this.j.Sa(c);K(Z(this,"recorded-date-today-button"),"click",function(){this.j.setDate(new Date);c.focus()},!1,this);
K(c,"blur",function(){c.value=this.l?this.B.format(this.l):""},!1,this);
var d=this.j.Ia;K(c,"keypress",w(function(g){13==g.keyCode&&(mJ(d,c),d.H().focus(),g.preventDefault())},this));
K(d.H(),"blur",w(function(){c.focus()},this));
K(this.A,"change",w(this.dispatchEvent,this,"user_change"));var e=Z(this,"yt-languagepicker");K(e,"change",w(this.dispatchEvent,this,"user_change"));var f=Z(this,"yt-languagepicker-button");f&&K(f,"focus",w(function(){var g=e.previousElementSibling;g&&"audio-language-header"==g.className&&f.setAttribute("aria-label",g.innerText+": "+e.innerText)},this));
LZ(this)};
KZ.prototype.focus=function(){this.A.init()};
KZ.prototype.Da=function(a){KZ.J.Da.call(this,a);if(this.element){if(a=this.j.getDate()){this.l=a;var b=new PG("yyyy-MM-dd");Z(this,"recorded-date").value=b.format(a)}else""==Jc(rJ(this.j))&&(this.l=null,Z(this,"recorded-date").value="");Z(this,"video-settings-allow-responses-detail")&&MZ(Z(this,"video-settings-allow-responses-detail"),!Z(this,"video-settings-allow-responses").checked);MZ(Z(this,"video-settings-allow-comments-detail"),!Z(this,"video-settings-allow-comments").checked);MZ(Z(this,"video-settings-allow-comments-sort-order"),
!Z(this,"video-settings-allow-comments").checked);a=Z(this,"threed_type");V(Z(this,"threed-layout"),!!a&&"layout"==a.value);if(a=Z(this,"sharing-checkbox-feeds"))a.disabled=0<this.g.j}};
function MZ(a,b){jn(a,"yt-uix-form-input-select-disabled",b);aL("select",null,a).disabled=b}
function LZ(a){if(a.element){var b="hidden"==a.C;a=aZ(a);(a=N("metadata-syndication-settings",a))&&b&&(cZ(a,!0),P(a,"metadata-syndication-disabled"))}}
;function NZ(a){nT.call(this);this.M=a;this.S=0;this.D=this.O=this.A=this.B=this.K=this.j=this.R=null}
ra(NZ,nT);h=NZ.prototype;h.fa=function(){nT.prototype.fa.call(this);this.D=this.H();this.S=SJ(this.D,"max-title-length")||0;this.B=bA(this,"create-button");this.A=bA(this,"cancel-button");this.K=bA(this,"privacy-button");var a=cA(this);this.j=bA(this,"title-input");a.G(this.j,"keyup",this.Lm);a.G(this.j,"paste",this.Lm);a.G(this.D,"reset",this.Ft);a.G(this.D,"submit",this.Gt);this.R=bA(this,"create-playlist-widget-privacy-menu");this.O=bA(this,"is-selected");this.wb("yt-uix-menu-item-clicked",this.ou)};
h.na=function(){OZ(this);this.D=this.O=this.A=this.B=this.R=this.K=this.j=null;nT.prototype.na.call(this)};
h.setVideoIds=function(a){bA(this,"video-ids-input").value=a};
function PZ(a){var b=Jc(a.j.value).length;return 0<b&&(!a.S||b<=a.S)}
h.Lm=function(){bL(this.B,PZ(this))};
h.ou=function(a){Ij(this.R,a)&&(a=ak(a,"yt-ui-menu-item"),QZ(this,a),a=T(a,"value"),bA(this,"privacy-value-input").value=a)};
function QZ(a,b){var c=SN.V().getContent(a.K);Lj(c,Jc(Vj(b)));c=N("is-selected",a.R);gn(c,"is-selected");P(b,"is-selected");c=T(b,"privacy-state");QJ(a.K,"privacy-state",c)}
function RZ(a,b){bL(a.B,b);a.A&&bL(a.A,b);bL(a.j,b);bL(a.K,b)}
function OZ(a){a.j.value="";var b=bA(a,"title-input-container");gn(b,"yt-uix-form-error");b=N("yt-uix-form-error-message",b);Bj(b);bL(a.K,!0);(b=N("is-selected",a.R))&&a.O&&b!=a.O&&QZ(a,a.O);bL(a.B,!1);a.A&&bL(a.A,!0);bL(a.j,!0)}
h.Gt=function(a){a.preventDefault();zM(this.D,{context:this,onSuccess:this.Xs,onError:this.Ws});RZ(this,!1)};
h.Xs=function(a,b){OZ(this);this.M&&"function"===typeof this.M.Fm&&this.M.Fm({playlistId:b.result.playlistId,playlistName:b.result.playlistName,Bv:b.result.playlistUrl});BK("yt-uix-videoactionmenu-hide")};
h.Ws=function(a,b){if(b&&b.errors&&b.errors.length){var c=bA(this,"title-input-container"),d=b.errors[0];P(c,"yt-uix-form-error");if(d){var e=N("yt-uix-form-error-message",c);e?e.innerHTML=d:(d=pj("SPAN","yt-uix-form-error-message",document.createTextNode(String(d))),us(d,"alert"),c.appendChild(d))}RZ(this,!0)}};
h.Ft=function(){OZ(this);if(this.M&&"function"===typeof this.M.onCancel)this.M.onCancel()};function SZ(){}
function TZ(){var a={},b=fp([]);b&&(a.Authorization=b,a["X-Goog-AuthUser"]=R("SESSION_INDEX",0),a["X-Origin"]=R("INNERTUBE_HOST_OVERRIDE",window.location.origin),RK("pageid_as_header_web")&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return xk(a)}
;var UZ={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var VZ=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),WZ=["/fashion","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ","/channel/UCTApTkbpcqiLL39WUlne4ig","/channel/UCW5PCzG3KQvbOX4zc3KY0lQ"];function XZ(){var a=void 0===a?window.location.href:a;if(RK("kevlar_disable_theme_param"))return null;var b=Be(Ce(5,a));if(YZ(b))return"USER_INTERFACE_THEME_DARK";a=$L(a).theme;return VZ.get(a)||null}
function YZ(a){var b=WZ.map(function(c){return c.toLowerCase()});
return!RK("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1}
;function ZZ(){this.g={};var a=FM("CONSISTENCY");a&&$Z(this,{encryptedTokenJarContents:a})}
ZZ.prototype.replace=function(a,b){for(var c=ja(a),d=c.next();!d.done;d=c.next())delete this.g[d.value.encryptedTokenJarContents];$Z(this,b)};
function $Z(a,b){if(b.encryptedTokenJarContents&&(a.g[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.g[b.encryptedTokenJarContents]},1E3*c);
EM("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;function a_(a,b){this.g=a;this.l=b;this.j=SM}
function b_(a){if(!c_){var b={zk:{playlistEditEndpoint:d_,subscribeEndpoint:e_,unsubscribeEndpoint:f_,modifyChannelNotificationPreferenceEndpoint:g_}};h_.g||(h_.g=new h_);var c=h_.g;SZ.g||(SZ.g=new SZ);a_.g=new a_(b,c);c_=a_.g}b=c_;var d=void 0===d?UZ:d;a:{var e,f;if((null===(e=a.signalServiceEndpoint)||void 0===e?0:e.signal)&&b.g.gw&&(e=b.g.gw[a.signalServiceEndpoint.signal])){var g=new e;break a}if((null===(f=a.continuationCommand)||void 0===f?0:f.request)&&b.g.Ao&&(f=b.g.Ao[a.continuationCommand.request])){g=
new f;break a}for(g in a)if(b.g.zk[g]&&(f=b.g.zk[g])){g=new f;break a}g=void 0}if(!g)return b.j(new LM("Error: No request builder found for command.",a)),xk({});f=void 0;f=void 0===f?{}:f;e=a.clickTrackingParams;var k=void 0===k?!0:k;if(c=R("INNERTUBE_CONTEXT")){c=cc(c);c.client||(c.client={});var l=c.client;"MWEB"===l.clientName&&(l.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");l.screenWidthPoints=window.innerWidth;l.screenHeightPoints=window.innerHeight;l.screenPixelDensity=
Math.round(window.devicePixelRatio)||1;l.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var m=void 0===m?!1:m;$T.V();var n=cU(0,165)?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT";RK("kevlar_apply_prefers_color_theme")&&(n=cU(0,165)?"USER_INTERFACE_THEME_DARK":cU(0,174)?"USER_INTERFACE_THEME_LIGHT":window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT");
m=m?n:XZ()||n;l.userInterfaceTheme=m;(m=FM("EXPERIMENTS_DEBUG"))?l.experimentsToken="ZERO"===m?"GgIQAQ%3D%3D":m:delete l.experimentsToken;m=UK();ZZ.g||(ZZ.g=new ZZ);l=Sb(ZZ.g.g);c.request=Object.assign(Object.assign({},c.request),{internalExperimentFlags:m,consistencyTokenJars:l});m=cU($T.V(),58);c.user=Object.assign({},c.user);m&&(c.user.enableSafetyMode=m);(m=R("DELEGATED_SESSION_ID"))&&!RK("pageid_as_header_web")&&(c.user.onBehalfOfUser=m);k&&(k=wN())&&(c.clientScreenNonce=k);e&&(c.clickTracking=
{clickTrackingParams:e});k=c}else TM(Error("Error: No InnerTubeContext shell provided in ytconfig.")),k={};k={context:k};(m=g.l(a))?g.j(k,m,f):(TM(new LM("Error: Failed to create Request from Command.",a)),k=void 0);if(!k)return b.j(new LM("Error: Failed to build request for command.",a)),xk({});f=i_("/youtubei/v1/"+j_(g.g()));var t;var r=(a=null===(t=null===(r=a.commandMetadata)||void 0===r?void 0:r.webCommandMetadata)||void 0===t?void 0:t.apiUrl)?i_(a):void 0;r&&(f=r);return k_(b,k,f,d,g.A())}
function k_(a,b,c,d,e){d=void 0===d?UZ:d;var f=JSON.stringify(b),g=cM(c)?"same-origin":"cors",k=cM(c)?"same-origin":"include";return l_().then(function(l){l={method:"POST",mode:g,headers:l,body:f};RK("op_credentials_killswitch")||(l.credentials=k);var m;e&&(m=Object.assign({xy:c,yy:l,identity:d,requestTime:AL(),zy:0},e));return a.l.fetch(c,l,m)}).then(function(l){return xk(l)})}
function i_(a){a=bM(a,{key:R("INNERTUBE_API_KEY")},!1);var b=R("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(Fe(a)));return a}
function l_(){return TZ().then(function(a){a=Object.assign({"Content-Type":"application/json","X-Goog-Visitor-Id":R("VISITOR_DATA")},a);return xk(a)})}
;var m_=["notification/modify_channel_preference"],n_=["browse/edit_playlist"],o_=["subscription/subscribe"],p_=["subscription/unsubscribe"];var q_={},r_=(q_.WEB_UNPLUGGED="^unplugged/",q_.WEB_UNPLUGGED_ONBOARDING="^unplugged/",q_.WEB_UNPLUGGED_OPS="^unplugged/",q_.WEB_UNPLUGGED_PUBLIC="^unplugged/",q_.WEB_CREATOR="^creator/",q_.WEB_KIDS="^kids/",q_.WEB_EXPERIMENTS="^experiments/",q_.WEB_MUSIC="^music/",q_.WEB_REMIX="^music/",q_.WEB_MUSIC_EMBEDDED_PLAYER="^music/",q_.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",q_);
function j_(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=r_[b];if(c){var d=new RegExp(c),e=ja(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(r_).forEach(function(g){var k=ja(g);g=k.next().value;k=k.next().value;b!==g&&f.push(k)});
d=new RegExp(f.join("|"));a.sort(function(g,k){return g.length-k.length});
e=ja(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function s_(){}
s_.prototype.A=function(){};function e_(){}
ra(e_,s_);e_.prototype.g=function(){return o_};
e_.prototype.A=function(){return{}};
e_.prototype.l=function(a){return a.subscribeEndpoint};
e_.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse)};function f_(){}
ra(f_,s_);f_.prototype.g=function(){return p_};
f_.prototype.A=function(){return{}};
f_.prototype.l=function(a){return a.unsubscribeEndpoint};
f_.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};function g_(){}
ra(g_,s_);g_.prototype.g=function(){return m_};
g_.prototype.l=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
g_.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function d_(){}
ra(d_,s_);d_.prototype.g=function(){return n_};
d_.prototype.l=function(a){return a.playlistEditEndpoint};
d_.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Yk(){}
Yk.prototype.flush=function(a){a=void 0===a?[]:a;if(RK("enable_client_streamz_web")){a=ja(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new KF;c=H(c,1,b.A);for(var d=b,e=[],f=0;f<d.g.length;f++)e.push(d.g[f].kd);c=H(c,3,e||[]);d=[];e=[];f=ja(b.Xd.keys());for(var g=f.next();!g.done;g=f.next())e.push(g.value.split(","));for(f=0;f<e.length;f++){g=e[f];var k=b.j;for(var l=b.Tk(g)||[],m=[],n=0;n<l.length;n++){var t=l[n];t=t&&t.tk;var r=new UF;switch(k){case 3:wg(r,1,VF[0],Number(t));break;
case 2:wg(r,2,VF[0],Number(t))}m.push(r)}k=m;for(l=0;l<k.length;l++){m=k[l];n=new QF;m=Ag(n,2,m);n=g;t=[];r=b;for(var v=[],B=0;B<r.g.length;B++)v.push(r.g[B].ld);r=v;for(v=0;v<r.length;v++){B=r[v];var E=n[v],X=new SF;switch(B){case 3:wg(X,1,TF[0],String(E));break;case 2:wg(X,2,TF[0],Number(E));break;case 1:wg(X,3,TF[0],"true"==E)}t.push(X)}Cg(m,1,t);d.push(m)}}Cg(c,4,d);d=b=new $f;e=qg(c,1);null!=e&&fg(d,1,e);e=qg(c,5);null!=e&&dg(d,5,e);e=xg(c,MF,2);null!=e&&gg(d,2,e,WF);e=qg(c,3);if(0<e.length&&
null!=e)for(f=0;f<e.length;f++)fg(d,3,e[f]);e=qg(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)dg(d,6,e[f]);e=yg(c,QF,4);0<e.length&&hg(d,4,e,ZF);c=new Uint8Array(b.j+b.g.length());e=b.l;f=e.length;for(g=d=0;g<f;g++)k=e[g],c.set(k,d),d+=k.length;e=b.g.end();c.set(e,d);b.l=[c];b={serializedIncrementBatch:Wf(c)};NM("streamzIncremented",b)}}};var t_;function al(){if(!t_){t_=new Xk;var a=TK("client_streamz_web_flush_count",-1);-1!==a&&(t_.C=a)}return t_}
;var u_=["SAPISID","__Secure-1PAPISID","__Secure-3PAPISID"];function v_(){L.call(this);this.pollingInterval=3E3;this.g=[null,null,null];w_(this)}
ra(v_,L);v_.prototype.verifyUser=function(){var a=w_(this),b=a.wr;if(!a.Xv)return!0;this.dispatchEvent("ytsessionchange");b&&this.dispatchEvent("ytuserinvalid");return!1};
function w_(a){var b=u_.map(function(e){var f;return null!==(f=yl.get(e))&&void 0!==f?f:""}),c=b.some(function(e,f){return a.g&&""!==a.g[f]&&""===e}),d=b.some(function(e,f){return a.g&&a.g[f]!==e});
a.g=b;return{wr:c,Xv:d}}
v_.prototype.clearTimeout=function(){if(this.j){var a=this.j;if(!isNaN(a)){var b=u("yt.scheduler.instance.cancelJob");b?b(a):tK(a)}this.j=void 0}};function h_(){this.A=new $k;this.j=new bl;this.l=new dl;this.g=new el}
h_.prototype.fetch=function(a,b){var c=this,d=new Request(a,b),e=Be(Ce(5,Te(d.url,"key")));this.A.g.A("/client_streamz/youtube/web/network/one_platform_requests",e);return xk(fetch(d).then(function(f){return x_(c,f,e)})["catch"](function(f){UM(f)}))};
function x_(a,b,c){var d=b.json();b.redirected?cl(a.j,b.status,c,Be(Ce(5,b.url))):b.ok?a.l.g.A("/client_streamz/youtube/web/network/one_platform_request_success",c):(a.g.g.A("/client_streamz/youtube/web/network/one_platform_request_failed",b.status,c),d.then(function(e){v_.g||(v_.g=new v_);UM(new LM("Error: API fetch failed",b.status,b.url,e,{Dy:v_.g.verifyUser()}))}));
return d}
;var c_;function y_(a,b,c){var d={list_id:a};a=b_({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/browse/edit_playlist",url:"/service_ajax",sendPost:!0}},playlistEditEndpoint:{playlistId:a,actions:c}});Hk(a.then(function(e){if(e&&"STATUS_SUCCEEDED"===e.status){if(b.onSuccess)b.onSuccess({},d)}else if(b.onError)b.onError({},d)}),function(){b.Fa&&b.Fa({},d)});
return a}
function z_(a){if(RK("web_classic_playlist_one_platform_update")){var b=[],c=[];a.uj&&a.uj.forEach(function(d){c.push(d);b.push(y_(d,{videoIds:a.videoIds},[{removedVideoId:a.videoIds,action:"ACTION_REMOVE_VIDEO_BY_VIDEO_ID"}]))});
a.Ub&&a.Ub.forEach(function(d){c.push(d);b.push(y_(d,{},[{addedVideoId:a.videoIds,action:"ACTION_ADD_VIDEO"}]))});
Ck(b).then(function(){if(a.onSuccess)a.onSuccess({},{playlists_values:c})})}else A_("update_playlists_videos",a)}
function A_(a,b){sM("/playlist_video_ajax?action_"+a+"=1",{method:"POST",Ua:{feature:b.feature||null,authuser:b.Pf||null,pageid:b.pageId||null},ya:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.uj||null,add_to_playlists:b.Ub||null,plid:R("PLAYBACK_ID")||null},context:b.context,onError:b.onError,onSuccess:function(c,d){b.onSuccess.call(this,c,d)},
Fa:b.Fa,withCredentials:!1})}
;function B_(a){nT.call(this);this.B=a.sourcePlaylistId||"";this.A=a.videoIds||"";this.K=a.feature||"";this.D=!!a.Bo;this.M=!!a.Nq;this.j=null}
ra(B_,nT);h=B_.prototype;h.fa=function(){nT.prototype.fa.call(this);oT(this,"click","addto-playlist-item",this.Es);oT(this,"click","create-playlist-item",this.ys);oT(this,"keyup","addto-search-box",this.St);oT(this,"keydown","playlists",this.gn);oT(this,"keydown","create-playlist-item",this.gn);C_(this)};
h.gn=function(a){13!=a.keyCode&&9!=a.keyCode&&27!=a.keyCode&&40!=a.keyCode&&(a=bA(this,"addto-search-box"))&&a.focus()};
h.St=function(a){if(13==a.keyCode)(a=bA(this,"create-playlist-item"))&&a.focus();else{var b=a.currentTarget.value,c=aA(this,"addto-playlist-item");a=!1;for(var d=0;d<c.length;d++){var e=!1,f=N("playlist-name",c[d]),g=Vj(f);Sc(g.toLowerCase(),b.toLowerCase())?(a=!0,xj(f),g=D_(g,b),wj(f,g)):e=!0;jn(c[d],"hid",e)}b.trim()&&(a?c=Id(S("ADDTO_CREATE_NEW_PLAYLIST")):(c=Pd("strong",{},Id('"'+b+'"')),d=S("ADDTO_CREATE_PLAYLIST_DYNAMIC_TITLE").split("$dynamic_title_placeholder"),d.splice(1,0,c),c=Vd(d)),(d=
bA(this,"create-playlist-item"))&&ae(d,c),E_(this),c=this.j,b=Sc(b,"&")?"document"in p?me(b):oe(b):b,bA(c,"title-input").value=b,bL(c.B,PZ(c)),b=bA(this,"addto-playlist-panel"),b=dj("UL",null,b),a&&(b[0].focus(),BK("yt-uix-kbd-move-next",b[0],b[0])))}};
function D_(a,b){var c=new RegExp("("+qe(b)+")","ig");return fb(a.split(c),function(d,e){if(!d)return null;if(0==e%2){var f=document.createElement("span");Lj(f,d);return f}f=document.createElement("b");Lj(f,d);return f})}
h.N=function(){nT.prototype.N.call(this);this.j&&(this.j.dispose(),this.j=null)};
h.save=function(a,b){F_(this,a,b)};
function C_(a,b){if(a.A||a.B){var c;a.D&&(c=G_(a));var d={video_ids:a.A,src_playlist_id:a.B},e={hide_watch_later:a.M};a.K&&(e.feature=a.K);sM("/addto_ajax?action_get_dropdown=1",{format:"XML",method:"POST",Ua:e,ya:d,onSuccess:Ua(a.Yt,c,b),context:a,ed:!0})}}
h.Yt=function(a,b,c,d){this.j&&(this.j.dispose(),this.j=null);(c=d.html_content)?(d=this.H(),ae(d,c)):xj(this.H());a&&H_(this,a);(a=bA(this,"addto-menu"))&&AO(pO.V(),a);(a=bA(this,"addto-search-box"))&&a.focus();I_(this);b&&b()};
function H_(a,b){var c=aA(a,"addto-playlist-item");A(c,function(d){var e=T(d,"full-list-id");-1<bb(b.fd,e)?P(d,"to-be-removed"):-1<bb(b.Ub,e)&&P(d,"to-be-added")})}
h.Es=function(a){var b=a.currentTarget;!O(b,"loading")&&T(b,"full-list-id")&&("a"==a.target.nodeName.toLowerCase()?a.target.setAttribute("target","_blank"):(O(b,"contains-all-selected-videos")?ln(b,"to-be-removed"):ln(b,"to-be-added"),I_(this),this.D||F_(this)))};
function I_(a){var b=tb(aA(a,"contains-all-selected-videos")),c=tb(aA(a,"contains-some-selected-videos")),d=tb(aA(a,"to-be-added")),e=tb(aA(a,"to-be-removed")),f=!!(d.length+e.length);b=sb(b,c,d);b=eb(b,function(g){return-1==bb(e,g)});
b=fb(b,function(g){return{id:T(g,"full-list-id"),name:T(g,"item-name"),url:T(g,"url")}});
BK("addto-menu-changed",{videoIds:a.A,selectedPlaylists:b,hasUnsavedChanges:f})}
function G_(a){var b=[],c=[],d=aA(a,"addto-playlist-item");A(d,function(e){O(e,"to-be-removed")&&b.push(J_(e));O(e,"to-be-added")&&c.push(J_(e))},a);
return{fd:b,Ub:c}}
function J_(a){var b=T(a,"full-list-id"),c=T(a,"url");a=T(a,"item-name");return{id:b,url:c,title:a}}
function F_(a,b,c){var d=G_(a);1>d.fd.length+d.Ub.length?b&&b():(1<d.fd.length+d.Ub.length?K_(a,d.fd,d.Ub,b,c):d.fd.length?L_(a,d.fd[0],b,c):d.Ub.length&&M_(a,d.Ub[0],b,c),a=aA(a,"addto-playlist-item"),A(a,function(e){var f=T(e,"full-list-id");(-1<bb(d.fd,f)||-1<bb(d.Ub,f))&&P(e,"loading")}))}
function K_(a,b,c,d,e){b=fb(b,N_);c=fb(c,N_);a={videoIds:a.A,uj:b,Ub:c,onSuccess:w(a.zp,a,d),onError:w(a.oj,a,e),context:a};z_(a)}
h.zp=function(a){C_(this);a&&a()};
function M_(a,b,c,d){b={fullListId:b.id,onSuccess:w(a.pj,a,c,!0,b),onError:w(a.oj,a,d),context:a};a.A?(b.videoIds=a.A,RK("web_classic_playlist_one_platform_update")?y_(b.fullListId,b,[{addedVideoId:b.videoIds,action:"ACTION_ADD_VIDEO"}]):A_("add_to_playlist",b)):a.B&&(b.sourcePlaylistId=a.B,RK("web_classic_playlist_one_platform_update")?y_(b.fullListId,b,[{sourcePlaylistId:b.sourcePlaylistId,action:"ACTION_COPY_FROM_PLAYLIST"}]):A_("copy_from_playlist",b))}
function L_(a,b,c,d){BK("yt-uix-videoactionmenu-hide");b={fullListId:b.id,onSuccess:w(a.pj,a,c,!1,b),onError:w(a.oj,a,d),context:a};a.A?(b.videoIds=a.A,RK("web_classic_playlist_one_platform_update")?y_(b.fullListId,b,[{removedVideoId:b.videoIds,action:"ACTION_REMOVE_VIDEO_BY_VIDEO_ID"}]):A_("delete_from_playlist",b)):a.B&&(b.sourcePlaylistId=a.B,RK("web_classic_playlist_one_platform_update")?y_(b.fullListId,b,[{sourcePlaylistId:b.sourcePlaylistId,action:"ACTION_UNCOPY_FROM_PLAYLIST"}]):A_("uncopy_from_playlist",
b))}
h.pj=function(a,b,c){BK("yt-uix-videoactionmenu-hide");if(c){var d="addto-menu-video-added";b||(d="addto-menu-video-removed");BK(d,c)}this.A&&b&&(b=this.A.split(",")[0])&&c.id&&BK("playlist-addto",b,c.id);C_(this);a&&a()};
h.oj=function(a){A(aA(this,"loading"),function(b){gn(b,"loading")});
a&&a()};
function E_(a){if(!a.j){var b=bA(a,"create-playlist-widget-form");a.j=new NZ({Fm:w(a.lu,a)});a.j.Sa(b)}a.D||(a.j.setVideoIds(a.A),b=a.B,bA(a.j,"source-playlist-id-input").value=b)}
h.ys=function(){E_(this);var a=bA(this,"create-playlist-item"),b=bA(this,"create-playlist-panel");gn(a,"active-panel");P(b,"active-panel");BK("addto-menu-show-create-playlist-panel",this.H());a=bA(this,"create-button");b=PZ(this.j);bL(a,b);b?a.focus():bA(this.j,"title-input").focus()};
h.lu=function(a){this.D?C_(this,w(function(){var b=aA(this,"addto-playlist-item");if(b=jb(b,function(c){return(T(c,"full-list-id")||"")==a.playlistId}))ln(b,"to-be-added"),I_(this)},this)):this.pj(Ja,!0,{id:a.playlistId,
url:a.Bv,title:a.playlistName})};
function N_(a){return a.id}
;function O_(a){this.g=a}
function P_(a){return eb(a.g,function(b){return!b.isValid()}).join(", ")}
;function Q_(a,b){this.ai=a;this.displayText=b?b:a;var c=pj("SPAN",{className:"yt-chip",title:this.displayText,role:"listitem",tabIndex:"-1"});wj(c,pj("SPAN",{},this.displayText));var d=y("Remove Tag "+this.displayText);d=pj("SPAN",{className:"yt-delete-chip",role:"button","aria-label":d,tabIndex:"0"});wj(c,d);this.element=c}
Q_.prototype.bd=function(a){return Ij(this.element,a)};
Q_.prototype.sh=function(a){jn(this.element,"yt-selected-chip",a)};function R_(a,b){var c=b||",",d=[[]],e,f=-1;if(!a)return d;for(var g=new RegExp("(\\"+c+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+c+"\\r\\n]*))","gi");e=g.exec(a);){if(e.index==f)throw Error("Invalid CSV data");f=e.index;var k=e[1];k.length&&k!=c&&d.push([]);e=e[2]?e[2].replace(RegExp('""',"g"),'"'):e[3];d[d.length-1].push(e)}return d}
function S_(a,b){for(var c=b||",",d=[],e=0;e<a.length;e++){var f=a[e];1<f.split(c).length?d.push('"'+f.replace(/"/gi,"")+'"'):d.push(f)}return d.join(c)}
;function T_(a,b,c){L.call(this);c=c||{};this.j=[];this.B=new du;this.g=a;this.l=b;this.L=",";this.R=new Wn;this.U=!!c.ny;this.C=pj("INPUT",{className:"yt-focusable-invisible-input","aria-hidden":"true",tabindex:"-1"});wj(this.l,this.C);this.K=c.po?c.po:!1;this.P=c.onChange?c.onChange:function(){};
this.A=new qn(this);this.S=new tG(this.g);this.ja=new tG(this.C);this.O=0;U_||(U_=new $i);V_||(V_=new Ay(U_));this.A.G(this.l,"mousedown",this.bu);this.A.G(this.l,"click",this.Bw);this.U||(this.A.G(this.l,"dblclick",this.lt),this.A.G(this.l,"keydown",this.Wt),this.A.G(this.l,"keyup",this.Cw),this.A.G(this.l,"selectstart",this.jw),this.A.G(this.g,"blur",this.tm),this.A.G(this.C,"blur",this.tm),this.A.G(this.l,"cut",this.ct),this.A.G(this.S,"after_paste",w(this.Mh,this,this.g)),this.A.G(this.S,"paste",
w(this.cu,this,this.g)),this.A.G(this.ja,"after_paste",w(this.Mh,this,this.C)))}
z(T_,L);var U_=null,V_=null;function W_(a){X_(a);a.g.focus();a.g.select()}
function Y_(a,b){if(b)for(var c,d=0;c=a.j[d];d++)if(c.bd(b))return c;return null}
function Z_(a){var b=he(a.g.value);b&&a.Xi(b)?(a.g.value="",b=new Q_(b,b),$_(a,b,!0)):(a0(a,1),a.P(),a.dispatchEvent("X"))}
function b0(a,b,c,d){b=new Q_(b,c);$_(a,b,!1,d)}
function $_(a,b,c,d){var e=c0(a);ob(a.j,b,e);a.l.appendChild(b.element);a.l.appendChild(a.g);c&&W_(a);d||a.Od();a.M||(a.M=a.g.getAttribute("placeholder"));a.g.setAttribute("placeholder","");a.P()}
h=T_.prototype;h.Ae=function(a){var b=null;a?b=qb(this.j,a)?a:null:b=0==this.j.length?null:this.j.pop();b&&b.element&&this.l.removeChild(b.element);this.Od();this.M&&0==this.j.length&&this.g.setAttribute("placeholder",this.M);this.P();this.dispatchEvent("Y");return b};
function d0(a,b){a.g.value&&Z_(a);b&&a.l.insertBefore(a.g,b.element);var c=a.Ae(b);c&&(a.g.value=c.ai,a.Od(),W_(a),a0(a,1))}
h.bu=function(a){a.target!=this.g&&hi(a)&&(a.preventDefault(),Y_(this,a.target)&&a0(this,1))};
h.Od=function(){var a=this.g,b=xm(this.l).width-40;if(0>=b)return!1;var c=Dy(V_,a.value)+15;c=Math.max(c,40);var d=e0(this);d?c0(this)||(d=d.element,d=b-xm(d).width-sm(d,this.l).x,c=c>d?b:d):c=b;c=Math.min(c,b);wm(a,c);return!0};
function e0(a){return kb(a.j,function(b){return Dm(b.element)})}
function f0(a){for(var b=a.g;b=void 0!==b.previousElementSibling?b.previousElementSibling:Ej(b.previousSibling,!1);)if(O(b,"yt-chip"))return Y_(a,b);return null}
function c0(a){for(var b=a.g;b=Fj(b);)if(O(b,"yt-chip"))return Y_(a,b);return null}
function g0(a,b,c){a0(a,b);a.R.set(b,Uk(c,0,a))}
function a0(a,b){var c=a.R.get(b);c&&(Vk(c),a.R.remove(b))}
h.getSelection=function(){var a=this.B;return eb(this.j,a.contains,a)};
function h0(a,b,c){for(var d=0,e;e=c[d];d++)b?a.B.add(e):a.B.remove(e),e.sh(b);i0(a)}
function j0(a,b){if(a.B.isEmpty())h0(a,!0,[b]);else{var c=bb(a.j,b),d=Math.min(c,bb(a.j,a.getSelection()[0]||null));c=Math.max(c,bb(a.j,k0(a)));h0(a,!0,a.j.slice(d,c+1))}}
function k0(a){a=a.getSelection();return a[a.length-1]||null}
h.isSelected=function(a){return this.B.contains(a)};
function X_(a){for(var b=0,c;c=a.j[b];b++)c.sh(!1);a.B.clear();i0(a)}
function l0(a){for(var b=a.getSelection(),c=0,d;d=b[c];c++)a.Ae(d);a.B.clear()}
function m0(a){a=a.j;return a[a.length-1]||null}
function i0(a){if(!a.B.isEmpty()){var b=a.C;b.value=n0(a,!0,",");b.focus();b.select()}}
function n0(a,b,c){b=b?a.getSelection():a.j;b=fb(b,function(d){return d.ai});
return S_(b,c?c:a.L)}
function o0(a,b,c,d){Fc(b,'""')&&(b=b.substr(1,b.length-2));var e=[];try{e=R_(b,c?c:a.L)[0]}catch(f){e=[b]}e=fb(e,function(f){return he(f)});
e=eb(e,a.Xi);for(b=0;b<e.length;b++)e[b]&&b0(a,e[b],e[b],d);d&&e.length&&Uk(a.Od,0,a)}
h.Xi=function(a){return!a.length||1==a.length&&256>a.charCodeAt(0)?!1:!0};
h.Wt=function(a){var b=0==this.O,c=a.target==this.g,d=this.g.value,e=!1,f=a.keyCode,g=8==f,k,l=this.getSelection();l=1==l.length?l[0]:null;var m=this.getSelection()[0]||null;this.O++;if(g&&b&&!d&&c&&(k=f0(this)))this.g.value=k.ai,W_(this),this.Ae(k),a.preventDefault();else if(!g&&46!=f||c||this.B.isEmpty()){if(13==f||3==f)l&&d0(this,l),a.preventDefault(),a.stopPropagation(),this.K&&this.K.j.isVisible()&&this.K.Jd(),e=!!d;if(!c||!d){if(65==f&&a.l){h0(this,!0,this.j);a.preventDefault();return}if(a.shiftKey&&
(38==f||40==f||36==f||35==f)){f=a.keyCode;f=35==f||40==f;l=!f;m=f?this.D:this.F;b=f&&m||l&&!m?k0(this):this.getSelection()[0]||null;c=f?m0(this):this.j[0]||null;b||(b=f?c0(this):f0(this));m&&X_(this);b&&h0(this,!0,[b]);j0(this,c);this.F=f;this.D=l;c0(this)&&this.l.insertBefore(this.g,null);a.preventDefault();return}if(37==f||39==f||38==f||40==f||36==f){b=a.shiftKey;k=36==a.keyCode;c=37==a.keyCode||k;d=39==a.keyCode;var n=38==a.keyCode,t=40==a.keyCode,r=this.getSelection()[0]||null,v=k0(this),B=null;
e=this.B.ha();2>e&&(this.F=this.D=!1);d&&b&&this.D&&(B=r);c&&b&&this.F&&(B=v);if(g=!B)k?B=this.j[0]||null:c?(r?(k=bb(this.j,r),k=0<k?this.j[k-1]:null):k=f0(this),B=k):d?(v?(k=v==m0(this)?-1:bb(this.j,v),k=0<=k?this.j[k+1]:null):k=c0(this),(B=k)||W_(this)):n&&r?B=this.j[0]||null:t&&v&&(B=m0(this));B&&(e||c0(this)&&this.l.insertBefore(this.g,null),b||X_(this),h0(this,g,[B]),g&&(this.D=c,this.F=d));37==f&&l&&!a.shiftKey&&(yj(this.g,m.element),W_(this),this.Od());a.preventDefault();return}}d&&9==f&&(e=
!0,a.preventDefault());e?Z_(this):c&&this.Od()}else l0(this),W_(this),a.preventDefault()};
h.Cw=function(a){this.O=0;a=a.target==this.g;var b=this.g.value;a&&Sc(b,",")&&this.Mh(this.g);a&&this.Od()};
h.Bw=function(a){var b=a.target,c=Y_(this,b);c?(a0(this,1),a.preventDefault(),O(b,"yt-delete-chip")&&c.bd(b)?this.Ae(c):a.shiftKey?j0(this,c):(a=a.l,b=!a||!this.isSelected(c),a||X_(this),h0(this,b,[c])),this.F=this.D=!1):W_(this)};
h.lt=function(a){var b=Y_(this,a.target);b&&(d0(this,b),a.preventDefault())};
h.jw=function(a){return!!a.target&&"INPUT"==a.target.nodeName};
h.tm=function(){g0(this,1,this.ds)};
h.ds=function(){var a=bk(U_.g);a&&Ij(this.l,a)||(X_(this),Z_(this))};
h.Mh=function(a){var b=a.value;Sc(b,",")?o0(this,b,","):Sc(b,'"')?o0(this,b," "):(b=he(b),this.Xi(b)&&b0(this,b));a.value="";l0(this);W_(this)};
h.cu=function(a){a.value=""};
h.ct=function(){this.B.isEmpty()||(l0(this),g0(this,0,function(){W_(this)}))};function p0(){var a=void 0===a?!1:a;var b=dL();if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;function q0(){ON.call(this,"tooltip");this.g=0;this.j={}}
z(q0,ON);Ka(q0);h=q0.prototype;h.register=function(){PN(this,"mouseover",this.Yg);PN(this,"mouseout",this.Cd);PN(this,"focus",this.Qk);PN(this,"blur",this.nk);PN(this,"click",this.Cd);PN(this,"touchstart",this.sn);PN(this,"touchend",this.zh);PN(this,"touchcancel",this.zh)};
h.unregister=function(){QN(this,"mouseover",this.Yg);QN(this,"mouseout",this.Cd);QN(this,"focus",this.Qk);QN(this,"blur",this.nk);QN(this,"click",this.Cd);QN(this,"touchstart",this.sn);QN(this,"touchend",this.zh);QN(this,"touchcancel",this.zh);this.dispose();q0.J.unregister.call(this)};
h.dispose=function(){for(var a in this.j)this.Cd(this.j[a]);this.j={}};
h.Yg=function(a){if(!(this.g&&1E3>x()-this.g)){var b=parseInt(this.aa(a,"tooltip-hide-timer"),10);b&&(TJ(a,"tooltip-hide-timer"),tK(b));b=w(function(){r0(this,a);TJ(a,"tooltip-show-timer")},this);
var c=parseInt(this.aa(a,"tooltip-show-delay"),10)||0;b=rK(b,c);QJ(a,"tooltip-show-timer",b.toString());a.title&&(RN(a,s0(this,a)),a.title="");b=Pa(a).toString();this.j[b]=a}};
h.Cd=function(a){var b=parseInt(this.aa(a,"tooltip-show-timer"),10);b&&(tK(b),TJ(a,"tooltip-show-timer"));b=w(function(){if(a){var c=M(t0(this,a));c&&(u0(c),Bj(c),TJ(a,"content-id"));c=M(t0(this,a,"arialabel"));Bj(c)}TJ(a,"tooltip-hide-timer")},this);
b=rK(b,50);QJ(a,"tooltip-hide-timer",b.toString());if(b=this.aa(a,"tooltip-text"))a.title=b;b=Pa(a).toString();delete this.j[b]};
h.Qk=function(a,b){this.g=0;this.Yg(a,b)};
h.nk=function(a){this.g=0;this.Cd(a)};
h.sn=function(a,b,c){c.changedTouches&&(this.g=0,(a=MN(b,W(this),c.changedTouches[0].target))&&this.Yg(a,b))};
h.zh=function(a,b,c){c.changedTouches&&(this.g=x(),(a=MN(b,W(this),c.changedTouches[0].target))&&this.Cd(a))};
function v0(a,b,c){RN(b,c);a=a.aa(b,"content-id");(a=M(a))&&Lj(a,c)}
function s0(a,b){return a.aa(b,"tooltip-text")||b.title}
function r0(a,b){if(b){var c=s0(a,b);if(c){var d=M(t0(a,b));if(!d){d=document.createElement("div");d.id=t0(a,b);en(d,W(a,"tip"));var e=document.createElement("div");en(e,W(a,"tip-body"));var f=document.createElement("div");en(f,W(a,"tip-arrow"));var g=document.createElement("div");g.setAttribute("aria-hidden","true");en(g,W(a,"tip-content"));var k=w0(a,b),l=t0(a,b,"content");g.id=l;QJ(b,"content-id",l);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var m=Vj(b);l=t0(a,b,"arialabel");
f=document.createElement("div");P(f,W(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;Lj(f,m);b.setAttribute("aria-labelledby",l);l=p0()||document.body;l.appendChild(f);l.appendChild(d);v0(a,b,c);(c=parseInt(a.aa(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",P(g,W(a,"normal-wrap")));g=O(b,W(a,"reverse"));x0(a,b,d,e,k,g)||x0(a,b,d,e,k,!g);var n=W(a,"tip-visible");rK(function(){P(d,n)},
0)}}}}
function x0(a,b,c,d,e,f){jn(c,W(a,"tip-reverse"),f);var g=0;f&&(g=1);var k=xm(b);f=new Ti((k.width-10)/2,f?k.height:0);var l=nm(b);an(new Ti(l.x+f.x,l.y+f.y),c,g);l=jj();var m=tm(c);c=xm(d);var n=Math.floor(c.width/2);g=!!(l.height<m.y+k.height);k=!!(m.y<k.height);f=!!(m.x<n);l=!!(l.width<m.x+n);m=(c.width+3)/-2- -5;a=a.aa(b,"force-tooltip-direction");if("left"==a||f)m=-5;else if("right"==a||l)m=20-c.width-3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=
c.width+"px");return!(g||k)}
function t0(a,b,c){a=W(a)+WK(b);c&&(a+="-"+c);return a}
function w0(a,b){var c=null;wf&&O(b,W(a,"masked"))&&((c=M("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),EN(c)):(c=uj("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",en(c,W(a,"tip-mask"))));return c}
function u0(a){var b=M("yt-uix-tooltip-shared-mask"),c=b&&Zj(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),FN(b),document.body.appendChild(b))}
;function y0(){L.call(this);this.l=null;this.error=this.response=""}
z(y0,L);y0.prototype.Ie=function(a){this.l=a};
y0.prototype.Tj=function(){this.l=null};
y0.prototype.H=function(){return this.l};
y0.prototype.getError=function(){return this.error};function z0(){y0.call(this);this.overlay=this.g=null}
z(z0,y0);h=z0.prototype;
h.Ie=function(a){this.H()&&this.Tj();z0.J.Ie.call(this,a);K(this.H(),"mouseover",w(this.position,this));K(this.H(),"keypress",w(this.iq,this));var b=Zi(a).W("DIV",{style:"position: relative;"});zj(b,a);b.appendChild(a);a=Zi(this.H());this.overlay=a.W("DIV",{style:"overflow: hidden; position: absolute;"});this.g=a.W("INPUT",{type:"file",style:"position: absolute; right: 0; top: 0; cursor: pointer; opacity: 0; filter: alpha(opacity: 0);",tabIndex:"-1"});a.appendChild(this.overlay,this.g);this.g&&A0(this);
this.overlay&&(B0(this),b.appendChild(this.overlay));this.position()};
h.Tj=function(){this.overlay&&(Bj(this.overlay),Di(this.overlay));this.g&&Di(this.g);this.overlay=this.g=null;var a=Hj(this.H());zj(this.H(),a);Bj(a);Di(this.H(),"mouseover");Di(this.H(),"keypress");z0.J.Tj.call(this)};
function B0(a){K(a.overlay,"mouseover",function(){this.dispatchEvent("Z")},!1,a);
K(a.overlay,"mouseout",function(){this.dispatchEvent("$")},!1,a)}
function A0(a){K(a.g,"change",function(){this.dispatchEvent("aa")},!1,a)}
h.position=function(){var a=jm(this.H()),b=xm(this.H());this.g&&bm(this.g,"font-size",b.height+"px");this.overlay&&(vm(this.overlay,b),hm(this.overlay,a))};
h.iq=function(a){mb([32,13],a.keyCode)&&(a.preventDefault(),this.g&&this.g.click())};
h.getFile=function(){return this.g.files[0]};function C0(){z0.call(this);this.j=null}
z(C0,z0);C0.prototype.reset=function(){Di(this.g);var a=Zi(this.g),b=this.g.cloneNode(!0);a.pf(b,this.g);a.md(this.g);this.g=b;A0(this)};
C0.prototype.cancel=function(){this.j&&this.j.abort()};
function D0(a,b){a.j=new lE;K(a.j,"complete",function(){this.dispatchEvent("da");this.j=null},!1,a);
K(a.j,"success",function(f){this.response=f.target.mb();this.error="";this.dispatchEvent("ba")},!1,a);
K(a.j,"error",function(f){this.response="";this.error=f.getLastError();this.dispatchEvent("ca")},!1,a);
var c=Zi(a.H()),d=c.W("FORM",{method:"post",enctype:"multipart/form-data",encoding:"multipart/form-data",action:"/my_thumbnail_post"});c.appendChild(c.g.body,d);c.appendChild(d,a.g);c.cw(a.g,{name:"imagefile"});if(b)for(var e in b)c.appendChild(d,c.W("INPUT",{name:le(e),value:le(b[e]),type:"hidden"}));sE(a.j,d);c.appendChild(a.overlay,a.g);c.md(d)}
;function E0(){L.call(this);this.B=this.l=!1;this.g=null;this.Ma=new C0;this.j=new qn(this);this.C=null;this.F=""}
z(E0,L);E0.prototype.setVideoId=function(a){this.F=a};
function F0(a){a.j.G(a.Ma,"Z",function(){P(this.Ma.H(),"metadata-button-hover")});
a.j.G(a.Ma,"$",function(){gn(this.Ma.H(),"metadata-button-hover")});
a.j.G(a.Ma,"aa",a.L);a.j.G(a.Ma,"ba",a.D);a.j.G(a.Ma,"ca",function(){G0(this,this.Ma.getError())});
var b=N("custom-thumb-cancel-button",a.g);a.j.G(b,"click",a.A);a.j.G(b,"keypress",a.A)}
E0.prototype.A=function(a){a:{if(void 0!==a&&"keypress"==a.type){if(!mb([32,13],a.keyCode)){a=!0;break a}a.preventDefault()}a=!1}a||(this.Ma.cancel(),H0(this,!1),this.dispatchEvent({type:"cancel"}))};
function H0(a,b){b?(EN(N("custom-thumb-loader",a.g)),FN(N("custom-thumb-area",a.g)),FN(N("custom-thumb",a.g))):FN(N("custom-thumb-loader",a.g));FN(N("thumbnail-upload-error",a.g))}
E0.prototype.L=function(){H0(this,!0);this.l=!1;var a=N("custom-thumb-filename",this.g),b=this.Ma.g.value;Lj(a,b.substring(b.lastIndexOf("/")+1||b.lastIndexOf("\\")+1));a=R("XSRF_FIELD_NAME",void 0);b=R("XSRF_TOKEN",void 0);var c=vP({video_id:this.F,is_ajax:"1"});c[a]=b;D0(this.Ma,c);this.Ma.reset()};
E0.prototype.D=function(){try{var a=JSON.parse(this.Ma.response)}catch(c){G0(this,c.message);return}if(a.error)G0(this,a.error);else{H0(this,!1);var b=N("custom-thumb-filename",this.g);Lj(b,"");this.l=!0;this.dispatchEvent({type:"customsuccess",version:a.version,preview_url:a.preview_url})}};
function G0(a,b){H0(a,!1);var c=N("custom-thumb-filename",a.g);Lj(c,"");(c=N("thumbnail-error-icon",a.g))&&v0(q0.V(),c,b);if(c=N("thumbnail-chooser-error-container",a.g))c=N("yt-alert-content",c),Lj(c,b);EN(N("thumbnail-upload-error",a.g));c=N("thumbnail-try-again-button",a.g);a.Ma.Ie(c)}
;function I0(){L.call(this);this.l=new E0;this.j=new qn(this);this.g=this.B=this.C=this.D=this.A=null;this.K=this.F=""}
z(I0,L);function J0(a,b){a.A=b;a.C=tb(fj("selectable-thumb",a.A));a.B=tb(fj("standard-thumb",a.A));A(a.B,function(c,d){var e=d+1,f=K0(c);QJ(f,"still-image-index",e)},a);
a.g=L0(a,"custom-thumb");M0(a,!1);N0(a)}
function O0(a){if(void 0!==a&&"keypress"==a.type){if(!mb([32,13],a.keyCode))return!0;a.preventDefault()}return!1}
function P0(a,b){var c=jb(a.C,function(d){return T(K0(d),"still-image-index")==b},a);
Q0(a,c)}
h=I0.prototype;h.ln=function(a){O(a,"selectable-thumb-selected")||(a=N("thumbnail-overlay",a),EN(a))};
h.Oi=function(a,b){if(void 0===b||void 0===b.relatedTarget||ak(b.relatedTarget,"selectable-thumb")!=a){var c=N("thumbnail-overlay",a);FN(c)}};
h.en=function(a,b){O0(b)||(this.Oi(a),Q0(this,a))};
function R0(a){return a.g?O(a.g,"selectable-thumb-selected")?L0(a,"overlay-change-download"):L0(a,"overlay-custom"):null}
h.jn=function(){EN(R0(this));this.l.Ma.position()};
h.Ni=function(a){void 0!==a&&void 0!==a.relatedTarget&&ak(a.relatedTarget,"selectable-thumb")==this.g||FN(R0(this))};
h.cn=function(a){O0(a)||(this.Ni(),Q0(this,this.g))};
function N0(a){A(a.B,function(b){this.j.G(b,"mouseover",w(this.ln,this,b));this.j.G(b,"mouseout",w(this.Oi,this,b));this.j.G(b,"focus",w(this.ln,this,b));this.j.G(b,"blur",w(this.Oi,this,b));this.j.G(b,"keypress",w(this.en,this,b));this.j.G(b,"click",w(this.en,this,b))},a)}
h.setVideoId=function(a){this.K=a;this.g&&this.l.setVideoId(a)};
function M0(a,b){if(a.g){if(b&&!a.l.g){if(a.g){L0(a,"overlay-custom");L0(a,"overlay-change-download");var c=K0(a.g);QJ(c,"still-image-index",0);c=!1;if(O(a.g,"selectable-thumb-selected")){c=L0(a,"overlay-change-download");var d=N("overlay-change-thumbnail",c);c=!0}else d=L0(a,"custom-thumb-button");var e=a.l,f=L0(a,"custom-thumb-selectable");e.g=f;e.B=c;e.C=d;e.B&&(e.l=!0);e.Ma.Ie(e.C);F0(e)}a.g&&(a.j.G(a.g,"mouseover",w(a.jn,a)),a.j.G(a.g,"mouseout",w(a.Ni,a)),c=new FA(a.g),a.j.G(c,"focusin",w(a.jn,
a)),a.j.G(c,"focusout",w(a.Ni,a)),c=L0(a,"overlay-set-thumbnail"),a.j.G(c,"keypress",a.cn),a.j.G(c,"click",a.cn),a.j.G(a.l,"customsuccess",a.bt),a.j.G(a.l,"cancel",a.at));a.l.Ma.position()}V(L0(a,"custom-thumb-selectable"),b)}}
function S0(a,b){V(L0(a,"before-standard-thumbs-available"),!b);V(L0(a,"standard-thumbs-available"),b);b&&A(a.B,function(c){c=gj("IMG",null,c);var d=T(c,"still-image-index");c.src=vo(xo(XQ(this.K,d)),"ts",x()).toString()},a)}
function T0(a){EN(L0(a,"custom-thumb-area"));var b=L0(a,"custom-thumb-button");a.l.Ma.Ie(b)}
h.bt=function(a){var b=a.preview_url;this.F=a.version;a=L0(this,"custom-thumb");gj("IMG",null,a).src=b;Q0(this,a,!0);FN(L0(this,"custom-thumb-area"));EN(a);FN(L0(this,"overlay-download-thumbnail"))};
h.at=function(){T0(this);P0(this,this.D||1)};
function Q0(a,b,c){var d=K0(b);d=SJ(d,"still-image-index");if(d!=a.L||c)if(0!=d||a.g||a.l.l)a.L=d,A(a.C,function(e){gn(e,"selectable-thumb-selected")}),P(b,"selectable-thumb-selected"),a.g&&a.l.l&&(b=R0(a),b=N("overlay-change-thumbnail",b),a.l.Ma.Ie(b)),a.dispatchEvent("change")}
function L0(a,b){return N(b,a.A)}
function K0(a){return dj("IMG",null,a)[0]}
;function U0(a,b,c){this.S=c;this.K=null;this.C=b;this.P=new cQ(a);new $T;this.F=null;(this.B=window.autoshare)&&this.B.addServiceChangedCallback(w(this.sm,this));this.R={};this.j=null;$Y.call(this,a);this.U=V0(this);this.M=V0(this);this.O=this.ja=null;this.L=!!R("SHOW_NAVLESS_PRIVATE_SHARING_DIALOG",!1);yK("increment-end-date",w(this.Rq,this));yK("addto-menu-changed",w(this.Wr,this));K(this.P,"change",function(){this.dispatchEvent("user_change")},!1,this)}
z(U0,$Y);h=U0.prototype;h.Wr=function(a){if(a.videoIds==this.g.g&&Z(this,"playlist-icon")){var b=a.selectedPlaylists;W0(this,b);oG(Z(this,"playlists-values"),cr(b));a.hasUnsavedChanges&&this.dispatchEvent("user_change")}};
function W0(a,b){var c=S("ADD_TO_PLAYLIST");1==b.length?c=b[0].name:1<b.length&&eP("NUM_PLAYLISTS",b.length)&&(c=eP("NUM_PLAYLISTS",b.length));V(Z(a,"playlist-icon"),0<b.length);Lj(Z(a,"playlist-label"),c)}
h.Rq=function(){var a=this.M.getDate();this.M.setDate(new Hl(new Date(a+864E5)))};
function V0(a){var b=new PG(2),c=new XI;cJ(c,!1);eJ(c,!1);aJ(c,!1);YI(c,!0);b=new oJ(b,new YG(2),c);K(b,"change",function(){this.dispatchEvent("user_change")},!1,a);
return b}
h.Bb=function(a){U0.J.Bb.call(this,a);X0(this);(a=Z(this,"metadata-thumbnail-chooser"))&&J0(this.C,a);this.C&&K(this.C,"change",this.Wu,!1,this);(a=Z(this,"publish-date-info"))&&eQ(this.P,a);(a=Z(this,"video-settings-tag-chips-container"))&&Y0(this,a);a=Z(this,"scheduled-start-date-formatted-input");var b=Z(this,"scheduled-start-date");a&&b&&Z0(this,this.U,a,b);a=Z(this,"scheduled-end-date-formatted-input");b=Z(this,"scheduled-end-date");a&&b&&Z0(this,this.M,a,b);this.B&&(a=fj("autoshare-checkbox",
this.element),A(a,function(c){K(c,"click",this.Nu,!0,this)},this),this.sm());
if(a=Z(this,"time-range"))this.ja=new tT(a,!R("CAN_USER_MODIFY_START_DATE"),!!R("LIVESTREAM_DATE_INPUT_EDITABLE")),this.ja.Jb(this);Z(this,"playlist-icon")&&(FN(Z(this,"playlist-icon")),W0(this,R("playlists",void 0)));(a=Z(this,"addto-button"))&&K(a,"click",this.ws,!1,this);Z(this,"video-credits-form")&&$0(this);Z(this,"metadata-sharing-dialog")&&(a1(this),b1(this));if(a=Z(this,"live-premiere-toggle-input"))a=Yj(a,"label"),K(a,"click",this.Gs,!1,this)};
function Y0(a,b){var c=N("video-settings-add-tag",b),d=N("video-settings-tags",b),e={onChange:function(){d.value=n0(this.K,!1,"")}.bind(a)};
a.K=new T_(c,b,e);a.K.L=" ";o0(a.K,d.value,"",!0);K(a.K,["X","Y"],function(){this.dispatchEvent("system_change")},!1,a)}
function b1(a){c1(a,"metadata-share-button",a.Jm);c1(a,"remove-all-button",a.su);c1(a,"sharing-dialog-ok",a.ru);c1(a,"sharing-dialog-cancel",a.qu);c1(a,"sharing-dialog-back",a.pu);var b=Z(a,"acl-target-list-container");b&&(pL(b,"click",w(a.gt,a),"remove-icon"),pL(b,"keyup",w(a.ht,a),"target-item"))}
function c1(a,b,c){if(b=Z(a,b))c=w(c,a),K(b,"click",c),a.D.push([b,c])}
function $0(a){var b=bZ(a,"VideoCreditsService");a=w(a.dispatchEvent,a,"user_change");b.j=a}
h.ws=function(a){if(!this.O){a=a.currentTarget;var b=this.g.g||"",c=Z(this,"add-to-widget");this.O=new B_({videoIds:b,Nq:!0,feature:T(a,"feature")||"",Bo:!0});this.O.Sa(c);this.g.B=this.O}};
h.Gs=function(a){var b=Z(this,"live-premiere-clickcard-private"),c=Z(this,"live-premiere-clickcard-unlisted"),d;b&&BN(b)?d=b:c&&BN(c)&&(d=c);d&&(a.preventDefault(),a.stopPropagation(),a=N("yt-uix-clickcard-target",d),qL(a,"click"))};
function Z0(a,b,c,d){b.Sa(c);d=d.value.split("-");d=new Hl(parseInt(d[0],10),parseInt(d[1],10)-1,parseInt(d[2],10));b.setDate(d);var e;K(c,"focus",function(){e=mG(c)},!1,a);
K(c,"blur",function(){Ic(mG(c).toString())&&oG(c,e)},!1,a)}
h.Da=function(a){V(Z(this,"metadata-privacy-field"),a.allow_privacy_change);V(Z(this,"metadata-privacy-disabled"),!a.allow_privacy_change);Z(this,"privacy-select")&&!O(Z(this,"privacy-select"),"yt-uix-form-input-select-disabled")&&(Z(this,"metadata-privacy-input").disabled=!a.allow_privacy_change);d1(this);e1(this);var b=Z(this,"delayed-publishing-controls");if(b&&(a="scheduled"==f1(this),V(b,a),b=this.P,b.g&&V(b.g,a),a&&(a=this.P,a.g))){b=gQ(a);var c=new PG("yyyy-MM-ddTHH:mm"),d=fQ(a,"publish-timezone-formatted");
b=d&&"Etc/Unknown"!=d.value?c.format(b):c.format(b,MG(0));c=(c=fQ(a,"publish-timezone-formatted"))&&"Etc/Unknown"!=c.value?c.value:"UTC";d=gQ(a);var e=new Date,f=0,g=fQ(a,"publish-timezone-formatted");g&&"Etc/Unknown"!=g.value&&(f=6E4*(dQ[g.value].utc_offset_s/60+e.getTimezoneOffset()));(d=d.getTime()<e.getTime()+f)&&b==IP(a.C,"publish_time")&&c==IP(a.C,"publish_timezone")||V(fQ(a,"publish-date-error"),d);fQ(a,"publish_time_value").value=b;fQ(a,"publish_timezone_value").value=c}(a=Z(this,"scheduled-start-date"))&&
g1(this.U,a);(a=Z(this,"scheduled-end-date"))&&g1(this.M,a);if(a=Z(this,"addto-button"))a.disabled=!this.g.g};
h.Ef=function(){if(Z(this,"metadata-sharing-dialog-content")&&BN(this.l.g)){var a=h1(this),b=Z(this,"metadata-share-contacts"),c=Z(this,"notify-via-email"),d=b.value!=this.j.shareEmails||!Db(a,this.j.Kk)||i1(this,this.j)||c.checked!=this.j.notifyViaEmail&&b.value,e=Z(this,"sharing-dialog-ok");j1(e,!d);if(d=Z(this,"remove-all-button"))e=Z(this,"share-with-dasher"),(e=!e||!e.checked)&&(e=fj("target-item",this.element).length==a.length),j1(d,e);a=!b.value;j1(c,a);jn(Z(this,"notify-via-email-text"),"disabled-text",
a);jn(Z(this,"metadata-sharing-dialog-content"),"invalid-email",!1)}};
function k1(a){var b=Z(a,"live-premiere-toggle-input");if(b){var c=f1(a),d="scheduled"!=c&&"public"!=c;j1(b,d);d&&(b.checked=!1);V(Z(a,"live-premiere-clickcard-unlisted"),"unlisted"==c);V(Z(a,"live-premiere-clickcard-private"),"private"==c)}}
function l1(a){var b=Z(a,"sponsors-only-video-upsell-notification");if(b){var c=f1(a);a=(a=Z(a,"live-premiere-toggle-input"))&&a.checked;V(b,("private"==c||"unlisted"==c)&&!a)}}
function j1(a,b){b?a.setAttribute("disabled","true"):a.removeAttribute("disabled")}
function g1(a,b){var c=a.getDate();c&&(b.value=[c.getYear(),c.getMonth()+1,c.getDate()].join("-"))}
h.Nu=function(a){var b=T(a.target,"service-name");if(b){var c=this.B.getServiceInfo()[b];c&&!c.is_connected&&(a.preventDefault(),this.B.connectService(b,!1),this.R[b]=!0)}};
h.sm=function(){var a=this.B.getServiceInfo(),b=!1,c=fj("autoshare-checkbox",this.element);A(c,function(d){var e=T(d,"service-name");if(a[e]&&a[e].is_connected){var f=Z(this,e+"-icon");f&&(f.title=a[e].connected_as);this.R[e]&&(d.checked=!0,WP.V().cc(d),b=!0,this.R[e]=!1)}},this);
b&&this.dispatchEvent("user_change")};
h.Wu=function(){var a=this.C.L;Z(this,"still-id").value=a;Z(this,"still-id-custom-thumb-version").value=this.C.F;this.dispatchEvent("user_change")};
h.Zc=function(){if(this.element){X0(this);var a=this.C,b=IP(this.g,"still_id");null!=a.A&&(a.D=parseInt(b,10),0!=b&&a.g&&(FN(a.g),FN(L0(a,"custom-thumb-loader")),FN(L0(a,"thumbnail-upload-error")),T0(a)))}};
function X0(a){var b=IP(a.g,"privacy");a=Z(a,"metadata-privacy-input");A(a.options,function(c){"scheduled"==c.value&&("public"==b?c.setAttribute("disabled","disabled"):c.removeAttribute("disabled"))})}
function d1(a){var b=f1(a),c=fj("metadata-privacy-settings",a.element);A(c,function(d){var e=O(d,"metadata-"+b+"-settings");V(d,e)});
c=Z(a,"metadata-editor-video-credits-private-warning");"private"==b?EN(c):FN(c);a.Ef();k1(a);l1(a)}
function e1(a){var b=f1(a),c=Z(a,"sharing-settings");if(c){var d=112<Z(a,"sharing-custom-message-input").value.length,e=Z(a,"autoshare-checkbox-twitter");V(Z(a,"creator-share-limit-exceeded-warning"),d&&e&&e.checked);if("unlisted"==b||"private"==b){var f=!0;FN(c)}else if(f=!!R("IS_BROADCAST_LIVE")||0<a.g.j,EN(c),f&&(b=fj("sharing-network",a.element),A(b,function(g){var k=T(g,"service-name");if(k=IP(this.g,"creator_share_"+k))g.checked="yes"==k},a),b=IP(a.g,"creator_share_custom_message")))Z(a,"sharing-custom-message-input").value=
b;
b=fj("sharing-network",c);A(b,function(g){g.disabled=f});
b=!hb(b,function(g){return g.checked});
Z(a,"sharing-custom-message-input").disabled=f||b;jn(c,"disabled",f)}}
function f1(a){a=Z(a,"metadata-privacy-input");return a.disabled?null:a.value}
function m1(a,b){var c=Z(a,"metadata-privacy-input");c.disabled||aQ(c)==b||(jb(c.options,function(d){return d.value==b}),oG(c,b),WP.V().zb(c),a.dispatchEvent("user_change"))}
function a1(a){var b,c;Aa(new za(new va(function(d){if(1==d.j){b=Z(a,"metadata-sharing-dialog");c=a.L;a.l=new IO(b,c);a.D=[];a.A=n1(a);if(o1)d.j=2,d=void 0;else{var e=p1();d.j=2;d={value:e}}return d}a.L&&a.Jm();d.j=0})))}
h.Jm=function(){if(!this.F){var a=u("gapi.config.update"),b=new hv(new Wu([["AIzaSyBuUpn1wi2-0JpM3S-tq2csYx0z2_m_pqc","ANVavNLWozk6oXyP9qguyx4QAuef5j_qQw4Y3Rw",111,"MINIMAL_DOMAIN_GROUP","YOUTUBE"],[]])),c=jv(b);H(c,5,!0);R("testEnv")?(a({"googleapis.config":{auth:{useFirstPartyAuth:!0},proxy:null,root:"https://content-googleapis-test.sandbox.google.com","root-1p":"https://content-googleapis-test.sandbox.google.com"}}),a=H(b.g,5,4),H(a,6,5)):(a("googleapis.config/auth/useFirstPartyAuth",!0),H(b.g,
5,1));this.F=CF("youtube",b);this.F.Mg({groups:!1,acCssName:"ac-renderer private-share-ac"});this.F.Yh(Z(this,"metadata-share-contacts"))}this.j=n1(this);this.l.show();this.Ef();iP("/gen_204?prvsh=1&src="+(this.S?"mde":"upl"),void 0);"function"===typeof Event?b=new Event("resize"):(b=document.createEvent("Event"),b.initEvent("resize",!0,!0));window.dispatchEvent(b)};
function n1(a){var b=Z(a,"share-with-dasher");return{shareEmails:Z(a,"metadata-share-contacts").value,Kk:h1(a),sc:b&&b.checked,notifyViaEmail:Z(a,"notify-via-email").checked}}
h.gt=function(a){a=ak(a.currentTarget,"target-item");q1(this,a)};
h.ht=function(a){13!=a.keyCode&&32!=a.keyCode||q1(this,a.currentTarget)};
function q1(a,b){P(b,"target-deleted");a.Ef();a.dispatchEvent("user_change")}
h.su=function(){var a=fj("target-item",this.element);A(a,function(b){q1(this,b)},this);
if(a=Z(this,"share-with-dasher"))a.checked=!1;this.Ef()};
h.ru=function(){try{var a=r1(this)}catch(t){s1(this,t.message);return}var b=h1(this),c=Z(this,"share-with-dasher");c=c&&c.checked;var d=[],e=[],f=[];A(b,function(t){var r=T(t,"ogid"),v=T(t,"circle-id");t=T(t,"target");r?d.push(r):v?f.push(v):t&&e.push(t)},this);
var g="",k="",l="",m="";b={};var n=this.g.g;n&&(b.encrypted_video_id=n);a.length&&(g=a.join(","),b.share_emails=g);d.length&&(k=d.join(","),b.deleted_ogids=k);e.length&&(m=e.join(","),b.deleted_emails=m);f.length&&(l=f.join(","),b.deleted_circle_ids=l);Z(this,"notify-via-email").checked&&(b.notify_via_email=!0);c&&(b.share_dasher=!0);a=n1(this);this.A.sc&&!a.sc?b.dasher_change="removed":!this.A.sc&&a.sc&&(b.dasher_change="added");this.S||(b.video_upload=!0);a={format:"JSON",ya:b,Ua:{action_validate_private_share:1},
onSuccess:w(function(t,r){var v=g,B=k,E=l,X=m;if(r.error_text)JO(this.l,"content"),t1(this,r.error_title,r.error_text);else{Z(this,"metadata-share-text").innerHTML=r.num_shares_text;var fa=Z(this,"metadata-share-button");Lj(fa.children[0],r.edit_button_text);Z(this,"share-emails").value=v||"";Z(this,"delete-share-ogids").value=B||"";Z(this,"delete-share-circle-ids").value=E||"";Z(this,"delete-share-emails").value=X||"";v=Z(this,"dasher-change");B=n1(this);v&&!this.A.sc&&B.sc?(v.value="added",v.disabled=
!1):this.A.sc&&!B.sc?(v.value="removed",v.disabled=!1):(v.value=null,v.disabled=!0);this.dispatchEvent("user_change");this.L?this.dispatchEvent("user_submit_without_confirmation"):(JO(this.l,"content"),this.l.dismiss("close"))}},this),
onError:w(function(){t1(this,S("ajaxErrorTitle"),S("ajaxErrorText"));JO(this.l,"content")},this),
method:"POST"};JO(this.l,"working");sM("/metadata_ajax",a)};
function t1(a,b,c){Lj(N("error-from-server-title"),b);Z(a,"error-from-server-text").innerHTML=c;P(Z(a,"sharing-dialog-top-dog-container"),"error-from-server")}
function h1(a){return fj("target-deleted",a.element)}
function r1(a){a=Z(a,"metadata-share-contacts").value;if(0==a.length)return[];a=a.replace(/[\u200e\u200f\u202a-\u202c]/g,"").replace(/\xa0|[ \t]+/g," ");var b=RegExp('"([^"]*)"(?: *<([^>]+)>)?|([^\\s,;<"@][^@<"]*)?<([^>]+)>|([^\\s,;<"@][^\\n\\r,;<"@]*(?:@[^\\s,;<"]+)?)',"g");for(var c=[],d;d=b.exec(a);){var e=d[3],f=d[4],g=d[5];f=Jc(d[2]||f||g||"");if((d=Jc(d[1]||e||""))||f){g=e="";for(var k=0;k<f.length;){var l=f.charAt(k);var m='"<(['.indexOf(l);if(-1!=m&&!BG(f,k)){m='">)]'.charAt(m);for(var n=
f.indexOf(m,k+1);0<=n&&BG(f,n);)n=f.indexOf(m,n+1);l=0<=n?f.substring(k,n+1):l}"<"==l.charAt(0)&&-1!=l.indexOf(">")?g=l.substring(1,l.indexOf(">")):""==g&&(e+=l);k+=l.length}""==g&&-1!=e.indexOf("@")&&(g=e,e="");e=he(e);e=pe(e,"'");e=pe(e,'"');e=e.replace(xG,'"');e=e.replace(zG,"\\");g=he(g);(new vG(g,e)).isValid()||d||(d=f,f="");c.push(new vG(f,d))}}b=new O_(c);a=b.g;b=P_(b);if(0<b.length)throw'"'==b[0]&&'"'==b.slice(-1)&&(b=b.substring(1,b.length-1)),Error(b);b=[];for(c=0;c<a.length;++c)b.push(a[c].address);
return b}
function s1(a,b){Lj(Z(a,"invalid-email-text"),b);jn(Z(a,"metadata-sharing-dialog-content"),"invalid-email",!0)}
h.qu=function(){u1(this);this.L&&window.close()};
h.pu=function(){gn(Z(this,"sharing-dialog-top-dog-container"),"error-from-server")};
function u1(a){Z(a,"metadata-share-contacts").value=a.j.shareEmails;Z(a,"notify-via-email").checked=a.j.notifyViaEmail;var b=h1(a);A(b,function(c){gn(c,"target-deleted")},a);
A(a.j.Kk,function(c){P(c,"target-deleted")},a);
if(b=Z(a,"share-with-dasher"))b.checked=a.j.sc}
function v1(a,b){if("success"===b){var c=Z(a,"metadata-sharing-dialog");c=N("yt-dialog-working",c);c=N("yt-dialog-waiting-content",c);Lj(c,S("SAVED")+".");bm(c,{"margin-left":"-"+c.offsetWidth/2+"px","margin-top":"-"+c.offsetHeight/2+"px"});setTimeout(function(){window.close()},2E3)}else t1(a,S("SERVER_ERROR"),S("SERVER_ERROR_TRY_AGAIN")),JO(a.l,"content")}
function w1(a){if(Z(a,"metadata-sharing-dialog")&&(Z(a,"metadata-share-contacts").value||h1(a).length||i1(a,a.A))){var b={format:"JSON",ya:{encrypted_video_id:a.g.g},Ua:{action_render_private_share:1},onSuccess:w(function(c,d){if(d.html_content){for(var e=0;e<this.D.length;++e)Bi(this.D[e][0],"click",this.D[e][1]);this.D=[];var f=N("yt-dialog-content",Z(this,"metadata-private-sharing-dialog"));e=N("notify-via-email",f).checked;f.innerHTML=d.html_content;f=Z(this,"metadata-share-text");Lj(f,d.num_shares_text);
Z(this,"notify-via-email").checked=e;b1(this);e=w(this.Ef,this);(f=Z(this,"share-with-dasher"))&&K(f,"change",e);K(Z(this,"metadata-share-contacts"),["change","keyup"],e);K(Z(this,"notify-via-email"),["click"],e);this.F=null;this.A=n1(this);Z(this,"metadata-share-button").removeAttribute("disabled")}},a),
method:"POST"};sM("/metadata_ajax",b);Z(a,"metadata-share-button").setAttribute("disabled",!0);Z(a,"share-emails").value="";Z(a,"delete-share-ogids").value="";Z(a,"delete-share-circle-ids").value="";Z(a,"delete-share-emails").value="";Z(a,"dasher-change").disabled=!0}}
function i1(a,b){var c=Z(a,"share-with-dasher");return!(!c||c.checked==b.sc)}
var o1=!1;function p1(){return o1?xk():(new sk(function(a){try{AN({callback:a})}catch(b){pK(b)}})).then(function(){o1=!0})}
;function x1(a){$Y.call(this,a)}
z(x1,$Y);x1.prototype.ri=function(){return this.j};
x1.prototype.Bb=function(a,b){x1.J.Bb.call(this,a,b);this.j=bZ(this,"ContentRatingService");var c=w(this.dispatchEvent,this,"user_change");this.j.j=c;c=w(function(d){JP(this.g,"content_ratings",d,!0)},this);
ZX(this.j,c)};function y1(a){$Y.call(this,a);(a=N("event-settings-enable-promotion-on-channel",this.element))&&K(a,"click",w(this.j,this))}
z(y1,$Y);y1.prototype.Da=function(a){y1.J.Da.call(this,a);z1()&&(V(N("metadata-privacy-field",this.element),!0),V(N("metadata-hoa-settings-public",this.element),!0),V(N("metadata-privacy-disabled",this.element),!1))};
y1.prototype.Uj=function(){return!z1()};
function z1(){return!!R("IS_NOT_YET_COMPLETED_HOA_EVENT")}
y1.prototype.j=function(a){var b=M("channel-promo-time");b&&(bL(b,a.target.checked),$P())};function A1(a,b){if(!O(a,"mde-ignore-change")){var c=function(f){f.type="change";b(f)},d=a.nodeName.toLowerCase(),e=a.type;
("input"!==d||"checkbox"!==e&&"radio"!==e)&&"textarea"!==d&&"select"!==d||K(a,"keyup",c);("input"===d&&"text"===e||"textarea"===d)&&K(new qG(a),"input",c);("input"!==d||"radio"!==e&&"checkbox"!==e)&&"select"!==d||K(a,"click",c);"select"==d&&K(a,"change",c);"input"==d&&"hidden"==e&&K(a,"change",c)}}
function B1(a,b){A(a,function(c){A1(c,b)})}
function C1(a,b){B1(a.elements,b)}
;function D1(a){$Y.call(this,a)}
z(D1,$Y);D1.prototype.Bb=function(a,b){D1.J.Bb.call(this,a,b);this.j=bZ(this,"TranslationEditorService")};
D1.prototype.Da=function(a){D1.J.Da.call(this,a);var b={};if(a=aZ(this)){var c=N("video-settings-title",a);c&&(b.title=c.value);if(a=N("video-settings-description",a))b.description=a.value;rK(w(function(){KY(this.j,b)},this),0)}};
D1.prototype.Zc=function(){D1.J.Zc.call(this)};
D1.prototype.ri=function(){return this.j};function E1(a){L.call(this);this.A=null;this.g=a;this.l=[];this.D=this.j=this.F=null;this.K=!!R("SHOW_ADVANCED_SETTINGS_TAB",!1)}
z(E1,L);function F1(a){var b=UP(G1(a),!1);a.F&&b.set("content_ratings",[YX(a.F)]);a.D&&(a=bY(a.D),Nb(a,function(c,d){b.set(d,[c])}));
return b}
function G1(a){return H1(a,"video-settings-form")}
function I1(a,b,c){a.D=c;a.A=b;a.l=dj(null,"tab-header",a.A);b=dj(null,"metadata-tab",a.A);A(b,function(d){var e=this,f=T(d,"tab-id");Zn(this.g.j,f)&&(f=this.g.get(f),f.Bb(d,H1(this,"metadata-popups")),K(f,"user_change",w(this.C,this,!1)),K(f,"system_change",w(this.C,this,!0)),K(f,"user_submit_without_confirmation",function(){return e.dispatchEvent("mde_submit")}))},a);
if(b=a.g.get("content-rating"))a.F=b.ri();if(b=a.g.get("translations"))a.j=b.ri();J1(a);K1(a);b=H1(a,"metadata-editor-it-container");iK(b);a.K&&(a.B(M("advanced-settings")),M("metadata-editor-pane").style.display="block")}
function H1(a,b){return dj(null,b,a.A)[0]}
E1.prototype.B=function(a){for(var b=T(a,"tab-id"),c=0;c<this.l.length;c++){var d=this.l[c];hn(d,["selected","left-of-selected"]);d==a?P(d,"selected"):Fj(d)==a&&P(d,"left-of-selected")}a=dj(null,"metadata-tab",this.A);A(a,function(e){var f=T(e,"tab-id");V(e,f==b)},this);
Zn(this.g.j,b)&&this.g.get(b).focus()};
E1.prototype.L=function(a,b){b.preventDefault();this.B(a)};
E1.prototype.C=function(a){K1(this);this.dispatchEvent({type:"mde_modified",systemAction:a})};
E1.prototype.Xb=function(){return H1(this,"metadata-privacy-input").value};
function K1(a){var b={allow_privacy_change:L1(a),disable_monetization:!1};A(a.g.ia(),function(c){c.Da(b)});
M1(a);N1(a)}
function L1(a){return ib(a.g.ia(),function(b){return b.Uj()})}
function O1(a,b){if(a.j){var c=Tb(JY(a.j).translations),d={};A(b,function(e){d[c[e.index]]=e.value});
MY(a.j,d)}}
function P1(a){a.j&&LY(a.j)}
function Q1(a,b,c,d){b||(b=a.g.get("basic-info"),b.L?v1(b,c):"success"===c&&w1(b));R1(a,d)}
function R1(a,b){var c=H1(a,"metadata-container");A(fj("inline-error",c),Bj);A(fj("field-with-error",c),function(e){gn(e,"field-with-error")});
a.j&&MY(a.j,null);var d=tP("inline-error-msg");A(b,function(e){if("translations"==e.field){var f=e.message;if("object"===typeof f)if("aggregated_errors"in f&&O1(this,f.aggregated_errors),"error"in f)e.message=f.error;else return}f=vj(Nl(d.za(e,null,!0)));if(e=e.field){var g=G1(this).elements[e];if(g){var k=H1(this,e+"-errors");e=k?k:g.tagName&&"SELECT"==g.tagName?g.parentElement:tj(g)||"hidden"==g.type||"checkbox"==g.type?S1(this,e):g}else e=H1(this,"fake-form-field-"+e)}else e=null;e?O(e,"metadata-tab")?
Aj(e,f):(zj(f,e),P(e,"field-with-error")):(e=G1(this),P(e,"field-with-error"),Aj(e,f))},a);
T1(a,b)}
function T1(a,b){fo(a.g,function(c,d){var e=U1(this,d);if(e){var f=O(e,"tab-header-icon-error");f=b&&hb(b,function(g){var k;if(k=g.field)g=S1(this,g.field),k=(g?g.getAttribute("data-tab-id"):"")==d;return k},this)||!b&&f;
jn(e,"tab-header-icon-error",f)}},a)}
function S1(a,b){var c=G1(a).elements[b]||H1(a,"fake-form-field-"+b);if(!c)return null;tj(c)&&(c=c[0]);return ak(c,"metadata-tab")}
function U1(a,b){var c=H1(a,"subnav");c=fj("tab-header",c);return(c=jb(c,function(d){return d.getAttribute("data-tab-id")==b}))?N("tab-header-icon",c):c}
function J1(a){for(var b=0;b<a.l.length;b++){var c=a.l[b];K(c,"click",w(a.L,a,c))}yK("metadata-editor-widget-tab-focus-change",w(a.B,a));C1(G1(a),w(a.C,a,!1));K(G1(a),"submit",function(d){d.preventDefault();this.dispatchEvent("mde_submit")},!1,a)}
function V1(a){return ib(a.g.ia(),function(b){return b.Vj()})}
function W1(a,b){H1(a,"privacy_draft").value=b}
function M1(a){var b=H1(a,"tab-header-subtitle-m10n");b&&(b.innerText=X1(a))}
function N1(a){var b=a.g.get("advanced-settings");a=H1(a,"live-premiere-toggle-input");b&&a&&(a.checked?(b=M("live-chat-settings"))&&EN(b):(b=M("live-chat-settings"))&&FN(b))}
function X1(a){a=H1(a,"monetization-style-field");if(!a)return"";switch(a.value){case "unspecified":return S("MONETIZATION_TAB_SUBTITLE_UNSPECIFIED");case "":return S("MONETIZATION_TAB_SUBTITLE_DISABLED");case "ads":return S("MONETIZATION_TAB_SUBTITLE_ENABLED");default:return""}}
;function Y1(a,b){L.call(this);this.j=a;this.g=b;this.l=this.B=!1;this.D="not_saving";this.R=[];this.C=!1;this.K=this.A=null;this.P=this.M=!1;this.L="can_save";this.O=!1;this.S=new PY}
z(Y1,L);function Z1(a){return LP(a.j,F1(a.g))}
Y1.prototype.init=function(){K(this.g,"mde_modified",function(a){$1(this,a.systemAction)},!1,this);
K(this.g,"mde_submit",function(){a2(this,!1)},!1,this);
Z1(this).length&&$1(this,!0)};
function $1(a,b,c){a.B=!0;b||(a.M=!0);b2(a)?a.P=!0:!a.A&&!c&&a.C&&V1(a.g)&&a.j.g&&(a.A=Uk(a.F,5E3,a));c2(a)}
function d2(a,b){a.R.push(b);var c=N("save-changes-button",b);K(c,"click",function(){a2(this,!1)},!1,a);
c2(a)}
function c2(a){var b=e2;if(V1(a.g)){var c=f2(a);var d=(d=H1(a.g,"live-premiere-toggle-input"))?d.checked:!1;c="scheduled"==c?d?"schedule_premiere":"schedule_publish":"public"==c?a.O?d?"premiere":"publish":d?"premiere_when_ready":"publish_when_ready":g2(a)?"share":a.L}else c="can_save";b(a,c)}
function h2(a){return a.B||b2(a)}
function f2(a){if(!L1(a.g))return null;var b=a.g.Xb(),c=IP(a.j,"privacy"),d=IP(a.j,"publish_time"),e=IP(a.j,"publish_timezone"),f;if(!(f=a.j.j||"public"==c)){if(c="scheduled"==c&&"scheduled"==b)c=H1(a.g,"publish_time_value"),c=d==(c?c.value:null);if(d=c)a=H1(a.g,"publish_timezone_value"),d=e==(a?a.value:null);f=d}return f?null:"public"==b||"scheduled"==b?b:null}
function g2(a){if("private"!=a.g.Xb())return!1;var b=Z1(a);mb(b,"share_emails")||mb(b,"deleted_ogids")||mb(b,"deleted_emails")||mb(b,"dasher_change")?(a=a.g,H1(a,"share-emails").value?a=!0:(b=H1(a,"acl-target-list-container"),fj("target-item",b).length!=fj("target-deleted",b).length?a=!0:(a=H1(a,"share-with-dasher"),a=!(!a||!a.checked)))):a=!1;return a}
function a2(a,b,c){null!=c&&mb(c,"privacy")?W1(a.g,F1(a.g).get("privacy")[0]):W1(a.g,"none");if(!a.j.g||b2(a))return b?!1:(a.l=!0,c2(a),!0);Vk(a.A);a.A=null;var d=F1(a.g),e=Z1(a),f=!1;A(c||[],function(g){qb(e,g)&&(d.set(g,[IP(this.j,g)]),f=!0)},a);
a.B=f;a.l=!1;if(e.length)return a.D=b?"auto_save_progress":"manual_save_in_progress",MP(a.j,d,w(a.U,a,b,e)),c2(a),P1(a.g),a.dispatchEvent("saving_in_progress"),!0;Q1(a.g,b,"success",[]);i2(a,b,e);c2(a);return!1}
Y1.prototype.U=function(a,b,c,d){this.D="not_saving";this.P?$1(this,!0):c||$1(this,!0,!0);this.K=!!d;Q1(this.g,a,c?"success":"failure",d||[]);this.P=!1;c2(this);i2(this,a,b,d);this.l&&a2(this,!1)};
function i2(a,b,c,d){a.dispatchEvent({type:b?"auto_save_complete":"manual_save_complete",modifiedFields:c||[],errors:d||[]})}
function b2(a){return"not_saving"!=a.D}
function j2(a,b){switch(b){case "can_save":return S("SAVE_CHANGES");case "saving":return S("SAVING_IN_PROGRESS");case "saved":return S("SAVED");case "scheduled":return S("SAVE_CHANGES");case "publish":return S("PUBLISH");case "schedule_publish":var c=QY(a.S,H1(a.g,"publish-date-formatted").value);return S("PUBLISH_ON_DATE",{date:c});case "publish_when_ready":return S("PUBLISH");case "share":return S("SHARE");case "done":return S("DONE")||S("SAVE_CHANGES");case "premiere":case "premiere_when_ready":return S("PREMIERE");
case "schedule_premiere":return c=QY(a.S,H1(a.g,"publish-date-formatted").value),S("PREMIERE_ON_DATE",{date:c})}return""}
function e2(a,b){var c=k2(a,b),d=c.message,e=c.tooltip,f=c.g,g=(c=N("save-all-button"))&&Dm(c);A(a.R,function(k){var l=N("save-changes-button",k);l.disabled=!f;jn(l,"yt-uix-button-default",!(f&&!g));jn(l,"yt-uix-button-primary",f&&!g);var m=dj("SPAN",null,l)[0];Lj(m,j2(this,b));l.title="";v0(q0.V(),l,e);if(k=N("save-error-message",k))Lj(k,d),jn(k,"critical",!1)},a)}
function l2(a,b,c){this.message=a||"";this.tooltip=b||"";this.g=!!c}
Y1.prototype.F=function(){this.C&&V1(this.g)&&!this.l&&(f2(this)?a2(this,!0,["privacy","playlists_values","video_credits"]):a2(this,!0,["playlists_values","video_credits"]))};
function k2(a,b){var c="";switch(b){case "publish":c=S("PUBLISH_TOOLTIP");break;case "schedule_publish":c=S("PUBLISH_ON_DATE_TOOLTIP");break;case "publish_when_ready":c=S("PUBLISH_WHEN_READY_TOOLTIP");break;case "share":c=S("SHARE_TOOLTIP");break;case "done":c=S("DONE_TOOLTIP")||"";break;case "can_save":c=S("SAVE_TOOLTIP")||"";break;case "schedule_premiere":c=S("PREMIERE_ON_DATE_TOOLTIP");break;case "premiere_when_ready":c=S("PREMIERE_WHEN_READY_TOOLTIP")}var d=!b2(a)&&!a.l&&!(!a.B&&"done"!=b),e=
"";b2(a)?e=f2(a)&&a.B?S("SAVING_DRAFT"):S("SAVING_DATA_NOW"):a.l?e=S("SAVE_WHEN_POSSIBLE"):null!=a.K||a.M?a.B?a.K&&S("FAILED_SAVE")?e=S("FAILED_SAVE"):f2(a)&&Db(Z1(a),["privacy"])?e=S("DRAFT_SAVED"):a.M&&(e=S("SOME_DATA_NOT_SAVED")):e=S("ALL_DATA_SAVED"):e="";return new l2(e,c,d)}
Y1.prototype.N=function(){Y1.J.N.call(this);Vk(this.A);this.A=null};function m2(){ON.call(this,"expander")}
z(m2,ON);Ka(m2);h=m2.prototype;h.register=function(){PN(this,"click",this.Cn,"head");PN(this,"keypress",this.Dn,"head")};
h.unregister=function(){QN(this,"click",this.Cn,"head");QN(this,"keypress",this.Dn,"head")};
h.Cn=function(a){n2(this,a)};
h.Dn=function(a,b,c){c&&13==c.keyCode&&n2(this,a)};
function n2(a,b){var c=a.Na(b);c&&(c&&(Uj(c)||hj(c,{tabIndex:"0"}),c.focus()),ln(c,W(a,"collapsed")),o2(a,c),a.Jc(c,"expander-action"))}
function p2(a,b){var c=a.Na(b);c&&(P(c,W(a,"collapsed")),o2(a,c),a.Jc(c,"expander-action"))}
h.expand=function(a){if(a=this.Na(a))gn(a,W(this,"collapsed")),o2(this,a),this.Jc(a,"expander-action")};
function o2(a,b){var c=!O(b,W(a,"collapsed"));BK("yt-uix-expander-toggle",b,c);BK("yt-dom-content-change",b)}
;function q2(a){return Vd(fb(a,function(b,c){return 0==c?Id(b):Vd(Xd,Id(b))}))}
;function r2(a,b,c,d,e){I.call(this);this.la=a;this.ji=!1;this.g=[];this.l=null;a=Ee()+"/share_ajax";this.l=sM(a,{format:"JSON",Ua:{action_get_email:1,video_id:c,list:d,channel_id:e},onSuccess:function(f,g){ae(this.la,g.email_html);this.zf();this.focus()},
context:this,ed:!0})}
ra(r2,I);h=r2.prototype;h.N=function(){nL(this.g);this.g.length=0;this.l&&this.l.abort();I.prototype.N.call(this)};
h.zf=function(){this.oa=this.la.getElementsByTagName("form")[0];this.g.push(U(this.oa,"submit",w(this.Uu,this)));this.Hj=N("share-email-success",this.la);this.C=N("share-email-remail",this.Hj);this.g.push(U(this.C,"click",w(function(){s2(this);this.focus()},this)));
this.B=N("share-email-recipients",this.la);this.j=N("share-email-note",this.la);this.A=N("share-email-preview-note",this.la);this.g.push(U(this.j,"keyup",w(this.Xt,this)))};
h.ad=function(){this.oa&&(this.ji&&s2(this),this.focus())};
h.focus=function(){this.B.focus()};
function s2(a){a.ji=!1;a.B.value="";a.j.value="";xj(a.A);FN(a.Hj);EN(a.oa)}
h.Xt=function(){var a=this.j.value;a=a.substring(0,300);a=q2(a.split("\n"));ae(this.A,a)};
h.Uu=function(a){a.preventDefault();var b=dj("button",null,this.oa)[0];b.disabled=!0;var c=N("share-email-captcha",this.la),d=N("share-email-error",this.la),e=N("yt-alert-content",d);a=Ee()+Fe(this.oa.action);sM(a,{format:"JSON",method:"POST",postBody:kG(this.oa),onSuccess:function(){this.ji=!0;EN(this.Hj);FN(this.oa);FN(d);FN(c)},
onError:function(f,g){g.captcha_html&&(ae(c,g.captcha_html),EN(c));if(g.errors){var k=q2(g.errors);ae(e,k);EN(d)}},
Fa:function(){b.disabled=!1},
context:this,ed:!0})};function t2(a,b,c){I.call(this);this.la=a;this.g=[];this.D=null;this.l=this.j=0;a=Ee()+"/share_ajax";this.D=sM(a,{format:"JSON",Ua:{action_get_embed:1,video_id:b,list:c},onSuccess:function(d,e){ae(this.la,e.embed_html);this.xd=e.iframe_url;this.Qq=e.iframe_code;this.Sh=e.alternate_embed_urls;this.zf();var f=$T.V();this.Id&&(this.Id.checked=!cU(0,2));this.dd&&(this.dd.checked=!cU(0,137));this.ud&&(this.ud.checked=!cU(0,138));this.Xf.checked=cU(0,44);a:if(f=f.get("ems"),"custom"==f&&EN(M("share-embed-customize")),
this.Kd){for(var g=0;g<this.zd.length;g++){var k=this.zd[g];if(k.value==f){k.selected=!0;WP.V().zb(this.Kd);break a}}this.zd[0].selected=!0;WP.V().zb(this.Kd)}u2(this);this.ad()},
context:this,ed:!0})}
ra(t2,I);h=t2.prototype;h.N=function(){nL(this.g);this.g.length=0;this.D&&this.D.abort();I.prototype.N.call(this)};
h.zf=function(){this.A=N("share-embed-code",this.la);this.g.push(U(this.A,"keydown",w(this.st,this)));v2(this);var a=M("embed-with-playlist");this.g.push(U(a,"click",w(this.Fw,this)));a=M("embed-with-playlist-current");this.g.push(U(a,"click",w(this.Dw,this)));a=M("embed-with-playlist-first");this.g.push(U(a,"click",w(this.Ew,this)));w2(this)};
h.st=function(a){(a.ctrlKey||a.metaKey)&&67==a.keyCode&&iP("/gen_204?a=embedCodeCopied",void 0)};
function v2(a){a.Kd=M("embed-layout-options");a.zd=dj("option",null,a.Kd);var b=SJ(a.zd[0],"width"),c=SJ(a.zd[0],"height");a.F=b/c;a.g.push(U(a.Kd,"change",w(function(){var d=aQ(this.Kd),e=$T.V();e.set("ems",d);e.save();u2(this);e=M("share-embed-customize");"custom"==d?EN(e):(FN(e),this.focus())},a)));
b=M("share-embed-customize");a.C=N("share-embed-size-custom-width",b);a.B=N("share-embed-size-custom-height",b);a.g.push(U(a.C,"change",w(a.us,a)));a.g.push(U(a.B,"change",w(a.ts,a)))}
h.us=function(){this.j=parseInt(this.C.value,10);200>this.j&&(this.j=200,this.C.value=this.j+"");this.l=Math.round(this.j/this.F)||0;this.B.value=this.l+"";u2(this)};
h.ts=function(){this.l=parseInt(this.B.value,10);this.j=Math.round(this.l*this.F)||0;200>this.j&&(this.j=200,this.l=Math.round(this.j/this.F)||0,this.B.value=this.l+"");this.C.value=this.j+"";u2(this)};
function w2(a){var b={},c=fj("share-embed-option",a.la);A(c,function(d){b[d.name]=d});
a.Id=b["show-related"];a.Id&&a.g.push(U(a.Id,"click",w(a.Ns,a)));a.dd=b["show-controls"];a.dd&&a.g.push(U(a.dd,"click",w(a.Ks,a)));a.ud=b["show-info"];a.ud&&a.g.push(U(a.ud,"click",w(a.Ls,a)));a.Xf=b["delayed-cookies"];a.g.push(U(a.Xf,"click",w(a.zs,a)))}
h.ad=function(){this.focus()};
h.focus=function(){this.A&&(this.A.focus(),this.A.select())};
function x2(a){var b=a.Qq,c=a.xd;a.Xf.checked&&(c=c.replace("youtube.com","youtube-nocookie.com"));var d=c.split("//");d[0]="https:";c=d.join("//");d={};a.Id&&!a.Id.checked&&(d.rel=0);a.dd&&!a.dd.checked&&(d.controls=0);a.ud&&!a.ud.checked&&(d.showinfo=0);c=aM(c,d);d=b=b.replace(/__url__(\?([^"]+))?/g,function(g,k,l){g=c;l&&(g+=(-1<g.indexOf("?")?"&":"?")+l);return le(g)});
var e=SJ(a.zd[0],"width"),f=SJ(a.zd[0],"height");a=y2(a);a.width||(a={width:e,height:f});b=b.replace(/__width__/g,a.width+"");b=b.replace(/__height__/g,a.height+"");d=d.replace(/__width__/g,e+"");d=d.replace(/__height__/g,f+"");M("video-preview").innerHTML=d;return b}
function u2(a){var b=x2(a);b!=a.A.value&&(a.A.value=b)}
function y2(a){var b=YP(a.Kd);if(b){if("custom"==b.value)return{width:a.j,height:a.l};a=SJ(b,"width");b=SJ(b,"height");return{width:a,height:b}}return{width:0,height:0}}
h.Ns=function(){var a=this.Id.checked,b=$T.V();eU(2,!a);b.save();u2(this)};
h.Ks=function(){var a=this.dd.checked,b=$T.V();eU(137,!a);b.save();u2(this)};
h.Ls=function(){var a=this.ud.checked,b=$T.V();eU(138,!a);b.save();u2(this)};
h.zs=function(){var a=this.Xf.checked,b=$T.V();eU(44,a);b.save();u2(this)};
h.Fw=function(a){a.target.checked?(a=M("embed-with-playlist-first"),a=Yj(a,"li"),a=O(a,"yt-uix-button-menu-item-selected")?"first":"default"):a="nolist";this.xd=this.Sh[a]||this.xd;u2(this)};
h.Dw=function(){this.xd=this.Sh["default"]||this.xd;u2(this)};
h.Ew=function(){this.xd=this.Sh.first||this.xd;u2(this)};function z2(a){var b=["h","m","s"],c=tb(b);c.reverse();var d={};a=a.toLowerCase().match(/\d+\s*[hms]?/g)||[];a=eb(a,function(g){var k=(g.match(/[hms]/)||[""])[0];return k?(d[k]=parseInt(g.match(/\d+/)[0],10),!1):!0});
for(a.reverse();a.length&&c.length;){var e=c.shift();e in d||(d[e]=parseInt(a.shift(),10))}if(a.length||59<d.s||59<d.m||9<d.h)return null;var f="";A(b,function(g){d[g]&&(f+=d[g]+g)});
return f||null}
;function A2(a,b,c,d,e,f,g,k,l,m,n,t,r,v,B,E,X,fa,ia,xb,mc,sd){I.call(this);this.la=a;this.C=b||null;this.K=c||null;this.S=!1;this.pb=e||null;this.Va=!!f;this.da=!!g;this.R=l||null;this.oe=m||null;this.ic=n||null;this.Tb=t||null;this.yc=k||null;this.ja=r||null;this.Ra=v||null;this.eg=B||null;this.O=null;this.g=[];this.ma=!!E;this.Zd=X||null;this.U=fa||null;this.wa=ia||null;this.de=!!xb;this.be=mc||[1];this.Gf=sd||0;this.Lj=!1;B2(this,d)}
z(A2,I);h=A2.prototype;h.N=function(){nL(this.g);this.g.length=0;tK(0);this.O&&this.O.abort();A2.J.N.call(this)};
function B2(a,b){var c=Ee()+"/share_ajax",d={action_get_share_box:1,video_id:a.C,list:a.K,feature:a.pb,share_at:!a.da,caption_text:a.R,title:a.oe,image_url:a.ic,t:a.Tb,referer:a.yc,min_count:a.ja,max_count:a.Ra,index:a.eg,share_source:a.Zd,ei:a.U,verticals:a.be.join(","),vertical:a.Gf};a.de&&(d.intentional="1");a.wa&&(d.url=a.wa);a.O=sM(c,{format:"JSON",Ua:d,onSuccess:function(e,f){ae(this.la,f.share_html);this.mk=f.url_short;this.Io=f.lang;this.Gc=null;"session_index"in f&&(this.Gc=f.session_index);
this.Jk=null;"delegated_session_id"in f&&(this.Jk=f.delegated_session_id);this.zf();b&&b();this.ad()},
context:a,ed:!0})}
h.zf=function(){var a=N("share-panel-show-url-options");this.g.push(U(a,"click",w(this.Ps,this)));a=N("share-panel-show-more");this.g.push(U(a,"click",w(this.Is,this)));a=N("share-panel-services",this.la);this.g.push(U(a,"click",w(this.Js,this)));a=N("share-panel-embed",this.la);this.g.push(U(a,"click",w(this.Cs,this)));a=N("share-panel-email",this.la);this.g.push(U(a,"click",w(this.Bs,this)));(a=N("share-panel-hangout",this.la))&&this.g.push(U(a,"click",w(this.Ds,this)));this.l=N("share-panel-url",
this.la);this.g.push(U(this.l,"click",w(this.Qs,this)));this.g.push(U(this.l,"focus",w(function(){P(this.l,"focused")},this)));
this.g.push(U(this.l,"blur",w(function(){gn(this.l,"focused")},this)));
this.da||(this.qa=N("share-panel-start-at-container",this.la),this.L=N("share-panel-start-at",this.la),this.j=N("share-panel-start-at-time",this.la),this.g.push(U(this.j,"change",w(this.vs,this))),this.g.push(U(this.j,"click",w(this.Os,this))),this.g.push(U(this.j,"focus",w(function(){P(this.j,"focused")},this))),this.g.push(U(this.j,"blur",w(function(){gn(this.j,"focused")},this))));
this.F=N("share-panel-url-options",this.la);this.g.push(U(this.F,"click",w(this.Ff,this)));this.D=N("share-panel-services",this.la);a=N("share-panel-show-more",this.la);this.g.push(U(a,"click",w(this.Ms,this)));a=N("share-panel-services-container",this.la);A(fj("share-service-icon",a),function(b){this.g.push(U(b,"click",w(this.Hs,this)))},this);
a=M("share-for-collaboration-on-playlist");this.g.push(U(a,"click",w(this.Mu,this)));this.dc=N("share-panel-services-container",this.la);a=M("share-with-playlist");this.g.push(U(a,"click",w(this.Iw,this)));a=M("share-with-playlist-current");this.g.push(U(a,"click",w(this.Gw,this)));a=M("share-with-playlist-first");this.g.push(U(a,"click",w(this.Hw,this)));if(a=N("yt-verticals-sharing-menu",this.la))this.Gf=Number(T(a,"vertical")),a=fj("yt-verticals-sharing-menu-button",this.la),A(a,function(b){this.g.push(U(b,
"click",w(C2(Number(T(b,"vertical"))),this)))},this)};
h.ad=function(){this.Ff();this.Va||!this.l||O(this.l,"focused")||this.l.select()};
h.updateTime=function(a){!this.j||O(this.j,"focused")||this.S||(this.j.value=a,this.Ff())};
h.Ff=function(){if(this.l&&!O(this.l,"focused")){var a=this.mk,b={},c=this.j&&!this.L.disabled&&this.L.checked&&z2(this.j.value);c&&(b.t=c);a=Ne(a,b);this.l.value!=a&&(this.l.value=a)}};
h.vs=function(){this.j&&(this.S=!0,this.L.checked=!0,this.Ff())};
h.Os=function(){this.j&&(this.L.checked=!0,this.j.value.match(/[1-9]/)||(this.j.value=""))};
h.Qs=function(){this.l.select();uQ("COPY_PASTE",this.C+"")};
h.Bs=function(){var a=m2.V();this.F&&p2(a,this.F);this.D&&p2(a,this.D);D2(this,this.A);this.A||(this.A=N("share-panel-email-container",this.la));EN(this.A);!T(this.A,"disabled")&&BN(this.A)&&(this.M?this.M.ad():(this.M=new r2(this.A,this.Gc,this.C,this.K,null),Rh(this,this.M)));uQ("EMAIL",this.C+"")};
h.Ds=function(){var a;if((a=R("PAGE_NAME"))&&"watch"!=a)UM(new LM("getPlayer called on:",a)),a=null;else if(a=document.getElementById("player-api")){var b=IV+"_"+Pa(a),c=HV[b];c||(c=new sV(a,b),HV[b]=c);a=c.api}else a=null;a&&a.pauseVideo&&a.pauseVideo();var d=Ne("https://talkgadget.google.com/hangouts",{hl:this.Io,authuser:this.Gc,eid:this.Jk,gid:"youtube",gd:this.C,hs:5});a=Math.min(.9*window.screen.width,1E3);b=Math.min(.9*window.screen.height,800);uQ("HANGOUTS",this.C+"");a={width:a,height:b};
a=void 0===a?{}:a;a.target=a.target||"YouTube";a.width=a.width||"600";a.height=a.height||"600";a||(a={});b=window;c=d instanceof Vc?d:$c("undefined"!=typeof d.href?d.href:String(d))||cd;d=a.target||d.target;var e=[];for(f in a)switch(f){case "width":case "height":case "top":case "left":e.push(f+"="+a[f]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(f+"="+(a[f]?1:0))}var f=e.join(",");if(kf()&&b.navigator&&b.navigator.standalone&&d&&"_self"!=d)f=uj("A"),ce(f,c),f.setAttribute("target",
d),a.noreferrer&&f.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),a.initMouseEvent("click",!0,!0,b,1),f.dispatchEvent(a),f={};else if(a.noreferrer){if(f=fe("",b,d,f),a=Yc(c),f&&(rf&&Sc(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),f.opener=null,a=Yd(oc("b/12014412, meta tag with sanitized URL"),'<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+le(a)+'">'),b=f.document))b.write(Hd(a)),b.close()}else(f=fe(c,b,d,f))&&a.noopener&&(f.opener=null);
f&&(f.opener||(f.opener=window),f.focus())};
h.Cs=function(){var a=m2.V();this.F&&p2(a,this.F);this.D&&p2(a,this.D);D2(this,this.B);this.B||(this.B=N("share-panel-embed-container",this.la));EN(this.B);!T(this.B,"disabled")&&BN(this.B)&&(this.P?this.P.ad():(this.P=new t2(this.B,this.C,this.K),Rh(this,this.P)));uQ("EMBED",this.C+"")};
h.Ps=function(){var a=m2.V();this.D&&p2(a,this.D);D2(this,this.dc)};
h.Is=function(){var a=m2.V();this.F&&p2(a,this.F);D2(this,this.dc)};
h.Ms=function(){D2(this,this.dc)};
h.Js=function(){D2(this,this.dc);this.dc&&EN(this.dc);this.ad()};
function D2(a,b){a.A&&b!=a.A&&FN(a.A);a.B&&b!=a.B&&FN(a.B);a.dc&&b!=a.dc&&FN(a.dc)}
h.Hs=function(a){this.ma&&P(Hj(a.target),"clicked-service-button")};
h.Iw=function(a){E2(this);var b=!1;a.target.checked&&(b=M("share-with-playlist-first"),b=Yj(b,"li"),b=O(b,"yt-uix-button-menu-item-selected"));F2(this,a.target.checked,b)};
function G2(a){M("share-with-playlist").checked=!0;E2(a)}
function E2(a){if(a.j){var b=M("share-with-playlist").checked;a.L.disabled=b;a.j.disabled=b;a.qa&&V(a.qa,!b)}}
h.Gw=function(){G2(this);F2(this,!0)};
h.Hw=function(){G2(this);F2(this,!0,!0)};
h.Mu=function(a){F2(this,!0,!1,a.target.checked)};
function F2(a,b,c,d){var e={action_get_share_urls:1,video_id:a.C,caption_text:a.R,ei:a.U,min_count:a.ja,max_count:a.Ra,vertical:a.Gf,update_default_vertical:a.Lj};b&&(e.list=a.K);c&&(e.use_first_video=!0);var f=M("share-panel-playlist-collaboration-options-subtext");b=N("share-panel-embed",a.la);c=N("share-panel-email",a.la);if(d){var g=N("share-panel-show-loading",a.la);e.generate_playlist_join_collaboration_token=!0;V(a.dc,!1);V(b,!1);V(c,!1);V(g,!0)}else V(f,!1),V(b,!0),V(c,!0);sM("sharing_services/?action_get_share_urls=1",
{method:"POST",ya:e,onSuccess:function(k,l){this.mk=l.url_short;this.Ff();var m=M("share-services-container");ae(m,l.share_services_html);d&&(V(this.dc,!0),V(f,!0),V(g,!1));this.Lj=!1},
context:a,ed:!0})}
function C2(a){return function(){if(this.Gf!==a){this.Gf=a;var b=N("yt-verticals-sharing-menu",this.la),c=N("yt-uix-button-content",b);b=T(b,String(a));Lj(c,b);this.Lj=!0;F2(this,!1)}}}
;function H2(a,b,c,d,e,f){L.call(this);this.A=new AH(null,a,b);this.g=d||null;this.l=e||null;this.j=f||null;this.B=new qn(this);I2(this,!!c);jn(this.g,"accordion-collapsed",!b);jn(this.g,"accordion-expanded",!!b);J2(this);K2(this)}
z(H2,L);function K2(a){var b=[a.g,a.j,a.l];b=eb(b,function(c){return null!=c});
A(b,function(c){this.B.G(c,"click",this.Jw)},a);
a.B.G(a.A,"toggle",a.yv)}
function L2(a,b){a.isFrozen()||(a.A.hf(b),J2(a))}
function I2(a,b){jn(a.g,"accordion-frozen",b);J2(a)}
h=H2.prototype;h.isFrozen=function(){return O(this.g,"accordion-frozen")};
h.Jw=function(a){var b=a.target;!b||(M2(this.l,b)?this.isExpanded():M2(this.j,b)?!this.isExpanded():!M2(this.g,b)||Yj(b,"BUTTON")||this.isExpanded())||this.isFrozen()||null!=this.A.g||(a.stopPropagation(),L2(this,!this.isExpanded()))};
function M2(a,b){return!!Zj(b,function(c){return c===a},!0)}
h.isExpanded=function(){return O(this.g,"accordion-expanded")};
h.yv=function(a){jn(this.g,"accordion-collapsed",!a.expanded);jn(this.g,"accordion-expanded",a.expanded);J2(this);this.dispatchEvent("animation_complete")};
function J2(a){var b=a.isFrozen()||null!=a.A.g;a.l&&Cm(a.l,!b&&!a.isExpanded());a.j&&Cm(a.j,!b&&a.isExpanded())}
h.N=function(){H2.J.N.call(this);this.B.dispose()};var N2={"3ga":"audio/3ga",aac:"audio/x-aac",amr:"application/octet-stream",app:"application/octet-stream",aup:"application/octet-stream",bmp:"image/bmp",cda:"application/x-cda",dll:"application/x-msdownload",doc:"application/msword",docx:"application/vnd.openxmlformats",exe:"application/x-ms-dos-executable",gif:"image/gif",htm:"text/html",html:"text/html",ini:"text/plain",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",lnk:"application/octet-stream",m4a:"audio/x-m4a",mp3:"audio/mpeg",pdf:"application/pdf",
pds:"image/x-pds",php:"application/x-httpd-php",png:"image/png",pps:"application/mspowerpoint",ppsx:"application/vnd.openxmlformats",ppt:"application/mspowerpoint",pptx:"application/vnd.openxmlformats",rar:"application/x-rar-compressed",sfk:"application/octet-stream",sfl:"application/octet-stream",txt:"text/plain",url:"application/x-url",vf:"application/octet-stream",wav:"audio/x-wav",wma:"audio/x-ms-wma",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats",xml:"text/xml",zip:"application/x-zip-compressed",
bup:"x-dvd",camproj:"x-project/camproj",camrec:"x-project/camproj",dmsm:"x-project",dvdproj:"x-project",ifo:"x-dvd",imovieproject:"x-project/imovie",moi:"application/octet-stream",msdvd:"x-project",mswmm:"x-project/mswmm",piv:"x-project/pivot",psh:"x-project",rcproject:"x-project/imovie",sbv:"x-timedtext",srt:"x-timedtext",sub:"x-timedtext",thm:"image/x-canon-thm",vep:"x-project",veg:"x-project",vpj:"x-project",vsp:"x-project",xej:"x-project",xspf:"x-playlist",wlmp:"x-project/wlmp",wpl:"x-playlist",
wve:"x-project"};function O2(a){this.C=a;this.L={};this.l={};this.A=P2(this,"multialert-action");this.D=P2(this,"multialert-next");this.K=P2(this,"yt-alert");this.B=P2(this,"multialert-prev");this.M=P2(this,"multialert-close");this.g=0;this.F="yt-alert-warn";O2.prototype.j=0;K(this.A,"click",w(this.O,this));K(this.D,"click",w(this.R,this));this.B&&K(this.B,"click",w(this.S,this));K(this.M,"click",w(this.P,this))}
function Q2(a,b){this.id=R2++;this.level=a;this.message=b;this.action=null}
var R2=0;function S2(a){switch(a){case "error":return 2;case "warning":return 1;case "success":return 0;default:return 0}}
function T2(a){switch(a){case "error":return"yt-alert-error";case "warning":return"yt-alert-warn";case "success":return"yt-alert-success";default:return"yt-alert-info"}}
function U2(a){var b=a.l[a.g];return b&&0!=b.length?b[a.j]:null}
function V2(a){return(a=a.l[a.g])?a.length:0}
function W2(a,b,c){c=new Q2(b,c);a.L[c.id]=c;b=S2(b);b in a.l||(a.l[b]=[]);a.l[b].push(c);if(b<a.g)return c.id;b>a.g&&(a.g=b,a.j=0);1==V2(a)?X2(a):Y2(a);return c.id}
function Z2(a,b){var c=V2(a);if(!(1>=c)){var d=(a.j+b)%c;a.j=0>d*c?d+c:d;X2(a)}}
O2.prototype.S=function(){Z2(this,-1)};
O2.prototype.R=function(){Z2(this,1)};
O2.prototype.O=function(){var a=U2(this);a&&a.action&&($2(this,a,this.j),a.action.Ea())};
O2.prototype.P=function(){var a=U2(this);a&&$2(this,a,this.j)};
function $2(a,b,c){delete a.L[b.id];var d=S2(b.level),e=a.l[d];void 0===c&&(c=bb(e,b));rb(e,c);0==e.length&&delete a.l[d];if(d==a.g){b=V2(a);if(0<b)a.j==b&&--a.j;else{a.g=0;for(var f in a.l)f>a.g&&(a.g=Number(f))}X2(a)}}
function X2(a){var b=U2(a);if(b){var c=T2(b.level);if(a.F!=c){P(a.K,c);gn(a.K,a.F);var d=c.replace(/^yt-/,"yt-uix-button-"),e=a.F.replace(/^yt-/,"yt-uix-button-");P(a.D,d);gn(a.D,e);a.B&&(P(a.B,d),gn(a.B,e));P(a.A,d);gn(a.A,e);a.F=c}if(c=P2(a,"yt-alert-message"))d=cL(b.message),xj(c),c.appendChild(d);if(b.action){if(c=N("yt-uix-button-content",a.A))b=cL(b.action.label),xj(c),c.appendChild(b);EN(a.A)}else FN(a.A);Y2(a);EN(a.C)}else FN(a.C)}
function P2(a,b){return O(a.C,b)?a.C:N(b,a.C)}
function Y2(a){var b=P2(a,"multialert-message-counter"),c=V2(a);V(b,1<c);V(a.D,1<c);V(a.B,1<c);b&&Lj(b,S("NTH_OF_M",{n:a.j+1,m:c}))}
;function a3(a,b,c,d){L.call(this);this.j=b;var e=N("video-settings-form",a),f=this.j.B,g=UP(e,!0);this.g=new EP(g,f);this.g.Jb(this);Rh(this,this.g);JP(this.g,"tvod_offers","",!1);e=UP(e,!1);b=b.Wl(e);for(var k in b)JP(this.g,k,b[k]);this.R=c;this.C=a;this.C.id="upload-item-"+this.j.Wb();this.D=new O2(b3(this,"alert-multi"));this.A=new H2(b3(this,"sub-item-exp-zippy"),d,!1,this.C,b3(this,"expand-link"),b3(this,"collapse-link"));this.sa=new qn(this);this.M=new gR(b3(this,"progress-bar-uploading"),
b3(this,"progress-bar-processing"));this.K=this.S=null;if(a=b3(this,"confirm-cancel-dialog"))this.K=new IO(Dj(a)),LO(this.K,"save",w(this.um,this));this.L=new I0(this.R);a:switch(R("enabledMonetizationTabType")){case "monetization_tab":c="monetization_tab";break a;case "claim_settings_tab":c="claim_settings_tab";break a;default:c="hidden"}a=this.g;c=new Wn({"basic-info":new U0(a,this.L,!1),translations:new D1(a),monetization:HZ(c,a),"advanced-settings":new KZ(c,a),"content-rating":new x1(a)});R("IS_LIVE_STREAM")&&
c.set("event-settings",new y1(a));this.vb=new E1(c,this.g);K(this.vb,"mde_modified",this.Zt,!1,this);this.vb.Jb(this);this.Ca=new Y1(this.g,this.vb);this.Ca.Jb(this);Rh(this,this.Ca);this.ja=!1;this.P=this.O=this.B=null;this.ma=new PY;this.F=null;a=c.get("basic-info");c=b3(this,"sub-item-exp");this.F=lR(c,["metadataEditor"],"MetadataEditorService");aY(this.F);a=w(a.dispatchEvent,a,"user_change");this.F.j=a;a=this.Ca;a.L="done";c2(a);d2(this.Ca,b3(this,"upload-state-bar")||b3(this,"metadata-actions"));
this.Ca.init();this.sa.G(b3(this,"item-cancel"),"click",this.qs);this.sa.G(this.Ca,"manual_save_complete",Ua(this.Hm,!1));this.sa.G(this.Ca,"auto_save_complete",Ua(this.Hm,!0));this.sa.G(this.Ca,"saving_in_progress",Ua(this.Hd,!0));this.sa.G(b3(this,"item-close"),"click",this.Rs);(a=b3(this,"return-to-editing-button"))&&this.sa.G(a,"click",this.Au);a=b3(this,"item-title");this.sa.G(a,"click",this.Mm);this.sa.G(this.j,"u",this.zt);this.sa.G(this.j,"v",this.lv);this.sa.G(this.j,"w",this.kv);this.sa.G(this.j,
"x",this.gv);this.sa.G(this.j,"F",this.Vt);this.sa.G(this.j,"D",this.Lw);this.sa.G(this.j,"z",this.qv);this.sa.G(this.j,"C",this.Xu);this.sa.G(this.j,"A",this.wu);this.sa.G(this.j,"B",this.uu);this.sa.G(this.j,"E",this.Mw);S0(this.L,!1);this.sa.G(this.A,"animation_complete",this.bs);this.Hd();this.U=!1;c3(this);d3(this)}
z(a3,L);function e3(a){EN(a.H());f3(a);K1(a.vb)}
h=a3.prototype;h.H=function(){return this.C};
function b3(a,b){return N(b,a.C)}
h.Rs=function(){FN(this.H());this.dispose()};
h.qv=function(){var a=this.j.l;this.g.setVideoId(a);this.L.setVideoId(a);M0(this.L,!0);Uk(w(function(){var c=this.Ca;c.l?a2(c,!1):c.F()},this),0);
a=WQ(this.R,a);g3(this,a);h3(this);if(a=b3(this,"addto-button"))O(a,"header-addto-button")?V(a,"scheduled"!=IP(this.g,"privacy")):a.disabled="scheduled"==IP(this.g,"privacy");DN(b3(this,"item-cancel"),!0);a=b3(this,"upload-thumb");var b=b3(this,"item-title");P(a,"upload-cursor-pointer");P(b,"upload-cursor-pointer");i3(this)};
function g3(a,b){var c=Vd(Id(S("SUCCESS_PROCESSING_COMPLETE")),Id(" "),Pd("a",{target:"_blank",href:$c(b)||cd},b)),d=b3(a,"watch-page-link");ae(d,c)}
h.kv=function(a){c3(this);100==a.percent?j3(this,3):j3(this,2);iR(this.M,a.percent,1)};
h.wu=function(a){iR(this.M,a.percent,2,!0);this.S=a.time_left_secs;c3(this);0<a.percent&&k3(this)};
function l3(a){return 5==a.l?!1:"public"==f2(a.Ca)}
function m3(a){return 5==a.l?!1:"scheduled"==f2(a.Ca)}
function n3(a){return 5==a.l?!1:g2(a.Ca)}
function o3(a){a.B&&Vk(a.B);a.B=Uk(function(){this.O=W2(this.D,"info",S("VIDEO_PROCESSING_QUEUED"))},3E4,a)}
function k3(a){a.B&&(Vk(a.B),a.B=null);if(null!=a.O){var b=a.D,c=b.L[a.O];c&&$2(b,c);a.O=null}}
h.Mw=function(a){switch(a.level){case "error":W2(this.D,"error",a.message);break;case "warning":W2(this.D,"warning",a.message);break;case "hint":W2(this.D,"info",a.message)}};
h.lv=function(){j3(this,1)};
h.Au=function(){p3(this)};
function p3(a){var b=a.Ca;b.L="can_save";c2(b);I2(a.A,!1);L2(a.A,!0)}
h.uu=function(){iR(this.M,100,2);c3(this);j3(this,6);this.Ca.F();k3(this);q3(this);var a=this.Ca;a.O=!0;c2(a);this.Hd();i3(this)};
function i3(a){var b=a.j.l,c="public"==IP(a.g,"privacy"),d="unlisted"==IP(a.g,"privacy");c=c||d;b&&!a.P&&c&&(d=w(function(){this.U=!0;d3(this)},a),a.P=new A2(b3(a,"upload-share-panel"),b,void 0,d,void 0,!0,!0,void 0,void 0,void 0,void 0,void 0,7,7,void 0,!0,"upload",void 0,void 0,void 0,r3(a)));
a.P&&(b=c&&s3(a)&&6==a.l,jn(a.H(),"upload-item-with-share-panel",b))}
h.gv=function(){iR(this.M,100,1);c3(this);j3(this,4);o3(this);this.j.l||DN(b3(this,"item-cancel"),!1);this.Ca.C=!0;this.Ca.F()};
h.Vt=function(a){j3(this,5,a.message)};
h.Lw=function(){j3(this,5,S("WARN_UPLOAD_CANCELLED"))};
h.Xu=function(){this.ja=!0;t3(this,!0);S0(this.L,!0)};
h.zt=function(){j3(this,0)};
function f3(a){var b=IP(a.g,"title").toString();a=b3(a,"item-title");b&&a&&Lj(a,b)}
function c3(a){var b=3==a.l||4==a.l?a.S||0:a.j.Uk();if(0<b&&10800>b){var c,d=b;60<d&&(d=60*Math.ceil(d/60));b=[];var e=d/60|0,f=d/3600|0;d%=3600;var g=d/60|0;d=d%60|0;0<f&&b.push(eP("HOUR_FMT",f));4>f&&0<g&&b.push(eP("MINUTE_FMT",g));10>e&&(0<d||0==b.length)&&b.push(eP("SECOND_FMT",d));2==b.length?c=S("TIME_FMT",{large:b[0],small:b[1]}):c=b[0];c=S("REMAINING_TIME",{time:c});Lj(b3(a,"upload-time-remaining"),c);EN(b3(a,"upload-time-remaining"))}else FN(b3(a,"upload-time-remaining"))}
function t3(a,b){var c=parseInt(IP(a.g,"still_id"),10);var d=b||!c;d?(c=a.j.l,c=R("enableSecureThumbnails")?R("secureThumbnailDomain")+"/upload_thumbnail?v="+c+"&t=hqdefault":R("thumbnailDomain")+"/vi/"+c+"/hqdefault.jpg"):c=XQ(a.j.l,c);var e=gj("IMG","upload-thumb-img",a.C);if(d||e.src!=c)e.src=d?vo(xo(c),"ts",x()).toString():c,EN(b3(a,"upload-thumb-container")),FN(b3(a,"upload-spinner-container")),d=b3(a,"upload-thumb"),a.sa.G(d,"click",a.Mm)}
function u3(a,b){if(a){var c=cL(b);for(xj(a);c.firstChild;)a.appendChild(c.firstChild)}}
function j3(a,b,c){if(5!=a.l){2==b&&a.l!=b&&x();a.l=b;gn(a.H(),"upload-item-queued");switch(b){case 5:b=c||"";O(a.H(),"upload-item-failed")||(P(a.H(),"upload-item-failed"),v3(a,!1),gn(a.H(),"upload-item-finished"),u3(b3(a,"upload-failure"),b),L2(a.A,!1),I2(a.A,!0),a.Ca.dispose(),a.j.dispose());break;case 6:P(a.H(),"upload-item-finished");h3(a);break;case 0:P(a.H(),"upload-item-queued");h3(a);break;default:h3(a)}a.Hd()}}
function h3(a){Lj(b3(a,"upload-status-text"),w3(a))}
function w3(a){switch(a.l){case 0:return S("UPLOAD_QUEUED");case 1:case 2:return S("UPLOADING");case 3:return S("STARTING_PROCESSING");case 4:return S("PROCESSING");case 6:return S("COMPLETED_UPLOAD")}return""}
h.Mm=function(a){a.stopPropagation();a=WQ(this.R,this.j.l);var b=$c(a)||cd;b=Yc(b);a!=b&&qK(Error("Unsafe window.open URL: "+a));a=b;window.open(a,ue(a).toString(36))};
h.qs=function(){this.K?this.K.show():window.confirm(S("REALLY_CANCEL"))&&this.um()};
h.um=function(){var a=b3(this,"item-cancel");a.disabled=!0;Lj(a,S("CANCEL_IN_PROGRESS"));this.j.Mn()};
h.Hm=function(a,b){b&&!b.errors&&this.F&&aY(this.F);f3(this);this.ja&&(mb(b.modifiedFields,"still_id")||"0"==IP(this.g,"still_id"))&&t3(this);"public"==IP(this.g,"privacy")&&q3(this);a||s3(this)||h2(this.Ca)||(V1(this.vb)&&(L2(this.A,!1),I2(this.A,!0)),v3(this,!0),this.Ca.C=!1);d3(this);var c=b3(this,"addto-button");c&&O(c,"header-addto-button")&&V(c,"scheduled"!=IP(this.g,"privacy"));(c=this.g.A.watchUrl)&&g3(this,c);i3(this);x3(this,b?b.errors||[]:[])};
function x3(a,b){var c=b3(a,"upload-monetization-errors-alert");hb(b,function(d){return"video_monetization_style"==d.field})&&!a.A.isExpanded()?EN(c):FN(c)}
function v3(a,b){jn(a.H(),"upload-item-confirmed",b);a.Hd()}
function d3(a){var b=b3(a,"custom-message-preview-text");if(b){var c=IP(a.g,"creator_share_custom_message");Lj(b,c||"");V(b3(a,"custom-message-indicator"),!!c)}b=fj("sharing-indicator",a.C);var d=IP(a.g,"privacy");A(b,function(e){var f=T(e,"network-name"),g="yes"==IP(this.g,"creator_share_"+f)&&"public"==d;V(e,g);if(g&&this.U){a:switch(f){case "gplus":f="googleplus";break a;case "twitter":f="twitter";break a;default:f=""}e=this.P;e.ma&&(e=N("share-panel-services-container",e.la),e=N("share-service-icon-"+
f,e),jn(Hj(e),"clicked-service-button",g))}},a)}
function q3(a){"public"!=IP(a.g,"privacy")||6!=a.l||a.g.j||(a.g.j=x(),K1(a.vb))}
h.Zt=function(){this.Hd()};
h.Hd=function(){var a=b3(this,"upload-item-alert");if(a){var b=this.Xb();"unlisted"==b&&(b="private");b=b.toUpperCase();var c=b3(this,"upload-complete-alert"),d=!1,e="",f=this.j.l,g="",k=this.g.A.watchUrl;k?g=k:f&&(g=WQ(this.R,f));g=ge('<a target="_blank" href="%s">%s</a>',g,g);var l=(k=H1(this.vb,"publish-date-formatted"))?QY(this.ma,k.value):"";k=Dm(M("uploader-progress"));var m=6==this.l,n=2==this.l||1==this.l||0==this.l,t=3==this.l||4==this.l,r=b3(this,"save-changes-button");r=Vj(r);g=Ua(y3,{url:g,
date:l,button_message:r});m&&s3(this)&&f?(e=g("VIDEO_PROCESSING_DONE_CONFIRMED_"+b),d=!0):!m&&!t||s3(this)?n&&s3(this)?e=k?"":g("VIDEO_UPLOADING_INLINE")+" "+g("VIDEO_UPLOADING_CONFIRMED_"+b):t&&s3(this)&&f?e=g("VIDEO_PROCESSING_CONFIRMED_"+b):n&&!s3(this)&&(e=k?"":g("VIDEO_UPLOADING_UNCONFIRMED")):"manual_save_in_progress"==this.Ca.D||(e=k?"":g("VIDEO_UPLOADED_UNCONFIRMED_"+b));(b=N("yt-alert-message",d?c:a))&&u3(b,e);Cm(c,d&&e);Cm(a,!d&&e)}};
function y3(a,b){return S(b,a)||""}
h.Xb=function(){return this.vb.Xb()};
function s3(a){return O(a.H(),"upload-item-confirmed")}
function z3(a){return O(a.H(),"upload-item-failed")}
h.bs=function(){K1(this.vb);x3(this,[])};
h.expand=function(){L2(this.A,!0)};
function r3(a){var b=[1],c=wo(xo(window.location),"vertical");a=F1(a.vb)&&F1(a.vb).get("game_title")[0];("gaming"==c||1==R("isGamingChannel")||a)&&b.push(2);return b}
;function A3(a,b,c,d){a3.call(this,a,b,c,d);this.da=b;this.da.g.l&&(a=this.H(),gj("IMG","upload-thumb-img",a).src=this.da.g.l,EN(b3(this,"upload-thumb-container")));j3(this,4)}
z(A3,a3);function B3(a,b){this.B=a;this.A=b;this.g=null;var c=$B("yt-upload-recovery");c&&(this.g=new iD(c,b))}
B3.prototype.C=function(a){var b=new An,c=this.g?this.g.get(a):null;if(null==c)return b.Ea(!1),b;a={Ua:{action_check_recovery:1},ya:{frontend_upload_id:c},method:"POST",onSuccess:w(this.l,this,a,b),onError:w(this.j,this,a,b)};sM("/upload_ajax",a);return b};
function C3(a,b,c){var d=new Wn;d.set("a","recovery_check");d.set("rcr",b?"1":"0");d.set("ms",c);a.B.send(d)}
B3.prototype.l=function(a,b,c,d){a=d.can_be_recovered;d=d.status;b.Ea(a);C3(this,a,d)};
B3.prototype.j=function(a,b){b.Ea(!1);C3(this,!1,"NETWORK_ERROR")};function D3(a){this.B=a;this.C=M("uploader-progress");this.j=new qn(this);this.l=new Wn;this.O=dj(null,"upload-header-status-text",this.C)[0];this.g=new Wn;this.A=N("save-all-button");this.K=N("uploader-header-active");N("uploader-header-inactive");this.D=M("bulk-active-alert");this.M=N("yt-alert-message",this.D);this.L=M("bulk-privacy-selector");fj("video-manager-button");this.P=new gR(dj(null,"progress-bar-uploading",this.C)[0],dj(null,"progress-bar-processing",this.C)[0]);this.F=!1;E3(this);this.Ab()}
function E3(a){a.j.G(a.B,"u",a.ev);a.j.G(a.B,"w",a.Qw);a.j.G(a.B,"x",a.hv);a.j.G(a.B,["D","F"],a.Ow);a.j.G(a.B,"A",a.Pw);a.j.G(a.B,"B",a.tu);a.A&&a.j.G(a.A,"click",a.Bu);a.L&&A(["public","unlisted","private"],function(b){var c=N("bulk-set-privacy-"+b);c&&this.j.G(c,"click",Ua(this.ls,b))},a)}
h=D3.prototype;h.ev=function(a){var b=a.item.Wb(),c=this.B.l.get(b);this.g.set(b,c);this.j.G(c,"change",w(this.Ab,this));this.j.G(c,"mde_modified",w(this.Ab,this));this.j.G(c,"manual_save_complete",w(this.Ab,this));this.j.G(c,"auto_save_complete",w(this.Ab,this));this.l.set(b,new F3(a.item.Zk()));this.Ab()};
h.Ow=function(a){a=a.item.Wb();this.l.remove(a);this.g.remove(a);this.Ab()};
h.Qw=function(a){var b=G3(this,a.item.Wb());b&&b.g<a.percent&&(b.g=a.percent,this.Ab())};
h.hv=function(a){if(a=G3(this,a.item.Wb()))a.g=100,this.Ab()};
h.Pw=function(a){var b=G3(this,a.item.Wb());b&&b.j<a.percent&&(b.j=a.percent,this.Ab())};
h.tu=function(a){if(a=G3(this,a.item.Wb()))a.j=100,a.l=!0,this.Ab()};
function G3(a,b){return a.l.get(b)}
function H3(a){if("done"==I3(a))return 100;var b=0,c=0;a.l.forEach(function(d){b+=d.A;c+=d.A*d.g});
return b?Math.round(c/b):100}
function J3(a){return"done"==I3(a)?100:Math.round(gb(a.l.ia(),function(b,c){return b+c.j},0)/a.l.ha())}
function I3(a){var b=a.l.ia();a=ib(b,function(c){return 100<=c.g});
b=ib(b,function(c){return c.l});
return a?b?"done":"processing":"uploading"}
function K3(a){if(a.D){var b=I3(a),c=L3(a).toUpperCase(),d="no_button"==M3(a),e="",f=Vj(a.A);f=Ua(N3,{button_message:f});"uploading"==b?e=f("VIDEOS_UPLOADING"):"processing"==b?d?e=f("VIDEOS_PROCESSING_CONFIRMED_"+c):a.F||(e=f("VIDEOS_PROCESSING_UNCONFIRMED_"+c)):d||a.F||(e=f("VIDEOS_DONE_UNCONFIRMED_"+c));Cm(a.D,!!e);a.M&&(b=Id(e),ae(a.M,b))}}
function N3(a,b){return S(b,a)||""}
h.Ab=function(){Cm(this.C,1<this.l.ha());var a=I3(this),b="no_button"==M3(this);a="done"==a&&b;jn(this.C,"active-upload-header",!a);this.K&&Cm(this.K,!a);this.L&&Cm(this.L,!b);O3(this);K3(this);iR(this.P,H3(this),1);iR(this.P,J3(this),2);jn(this.C,"upload-items-finished","done"==I3(this));P3(this);fo(this.g,function(c){c2(c.Ca);c.Hd()})};
function P3(a){var b=a.l.ha(),c=0;A(a.l.ia(),function(e){e.l&&c++},a);
if(0<b){var d=c==b?S("STATUS_UPLOAD_COMPLETE"):S("STATUS_UPLOAD_IN_PROGRESS",{finishedUploads:c,totalUploads:b});b=S("TITLE_UPLOAD_IN_PROGRESS",{finishedUploads:c,totalUploads:b})}else b=S("TITLE_UPLOAD_DEFAULT"),d=S("STATUS_NO_UPLOADS");b+=" - YouTube";Lj(a.O,d);document.title=b}
function F3(a){this.A=a;this.j=this.g=0;this.l=!1}
function L3(a){return ho(a.g,function(b){return"public"==b.Xb()})?"all_public":ho(a.g,function(b){return"scheduled"==b.Xb()})?"all_scheduled":ho(a.g,function(b){return"private"==b.Xb()&&!1})?"all_shared":"other"}
function M3(a){return 2>a.g.ha()||ho(a.g,function(b){return s3(b)})?"no_button":Q3(a)?ho(a.g,function(b){return"public"==b.Xb()})&&go(a.g,function(b){return l3(b)})&&S("PUBLISH_ALL")?"publish_all":ho(a.g,function(b){return"scheduled"==b.Xb()})&&go(a.g,function(b){return m3(b)})&&S("SCHEDULE_ALL")?"schedule_all":ho(a.g,function(b){return"private"==b.Xb()&&!1})&&go(a.g,function(b){return n3(b)})&&S("SHARE_ALL")?"share_all":"done_with_all":"save_all_changes"}
function Q3(a){return ho(a.g,function(b){return V1(b.vb)})}
function O3(a){if(a.A){var b=M3(a);Cm(a.A,"no_button"!=b);if(a.F)Lj(a.A,S("SAVING_IN_PROGRESS")),a.A.disabled=!0;else{a.A.disabled=!1;var c="";switch(b){case "publish_all":c=S("PUBLISH_ALL");break;case "schedule_all":c=S("SCHEDULE_ALL");break;case "share_all":c=S("SHARE_ALL");break;case "done_with_all":c=S("DONE_WITH_ALL");break;case "save_all_changes":c=S("SAVE_ALL_CHANGES")||S("SAVE_CHANGES")}Lj(a.A,c)}}}
h.Bu=function(){if(this.g.isEmpty())this.Ab();else{this.F=!0;this.Ab();for(var a=[],b=this.g.Ga(),c=0;c<b.length;c++){var d=this.g.get(b[c]);if(a2(d.Ca,!1)){var e=new An;this.j.Xg(d,"manual_save_complete",Ua(function(f){f.Ea()},e));
a.push(e)}}Gn(new mH(a),function(){this.F=!1;this.Ab()},this)}};
h.ls=function(a){A(this.g.ia(),function(b){var c=b.vb;L1(c)&&(c=c.g.get("basic-info"),m1(c,a));s3(b)&&p3(b)})};function R3(a,b,c,d,e,f){bR.call(this,d,c,"web_upload");this.g=a;this.L=b;this.O=e;this.K=f||null;this.F=oD(b,a);this.M=0;this.C=null;this.S={recovery:"multi_up_recovery",error:"multi_up_error",cancel:"multi_up_cancel"};this.P=this.D=null;a=this.g.getId();this.B.g.set("fn",a);K(this,"E",this.Nw);K(this,"z",this.rv);K(this,"K",this.tv,!1,this);K(this,"L",this.uv,!1,this)}
z(R3,bR);h=R3.prototype;h.rv=function(){(new Wn).set("vbc",!this.yd())};
h.tv=function(a){CQ(this.j,"video_info2");if(a=a.payload)a:{if(a.durationMs)a=a.durationMs/1E3;else if(a.bitrateBps)a=Math.round(8*this.g.xa/a.bitrateBps);else break a;var b=60*R("maxVideoLengthMinutes");b&&a>b&&R("promoteIdVerification")&&this.dispatchEvent(new jQ(this,S("WARN_VIDEO_TOO_LONG"),"warning","WARN_VIDEO_TOO_LONG"))}};
h.uv=function(a){CQ(this.j,"video_issues");a=a.payload.issues||[];for(var b=0;b<a.length;b++){var c=a[b],d=null,e=null,f=c.indexOf("_");if(0<=f){e=c.substr(f+1);switch(c.substr(0,f)){case "ERROR":d="error";break;case "WARNING":d="warning";break;case "HINT":d="hint"}e=S("UF_ISSUE_"+e)}e&&d||(d="error",e="Unknown issue "+c);this.dispatchEvent(new jQ(this,e,d,c))}};
h.jd=function(a){S3(this);R3.J.jd.call(this,a)};
h.Nw=function(a){sQ(T3(this),a.g)};
function U3(a){var b=a.g.kc(),c=a.g.Vg;if("exception"==b){var d=new Wn;d.set("e",b);d.set("ms",c);cR(a,"multi_up_debug",d)}switch(b){case "ioerror":d=S("ERROR_IO");break;case "networkerror":d=S("ERROR_NETWORK");break;case "serverrejected":d=(d=V3(a))&&"FILE_TOO_BIG"==d.status&&S("ERROR_FILE_TOO_BIG")?S("ERROR_FILE_TOO_BIG"):d&&d.registration_failure_reason?aR(d.registration_failure_reason):S("ERROR_SERVER_REJECTED");break;case "serverinvalidresponse":d=S("ERROR_INVALID_RESPONSE");break;case "exception":d=
S("ERROR_EXCEPTION");break;case "securityerror":d=S("ERROR_SECURITY");break;default:d=S("ERROR_UNKNOWN")}a.K&&("noerror"!=b&&(d=d+" ["+b+": "+c+"]"),a.C&&(d=d+' (<a href="'+(a.K+a.C)+'">debug</a>)'));return d}
function V3(a){return(a=oD(a.L,a.g).Uc)?a.B:null}
function S3(a){a.j.stop();a.yd()||a.L.Wd(a.g,!0)}
h.Mn=function(){var a=this.yd();S3(this);a&&this.l?this.deleteVideo(w(this.vl,this)):this.vl();rQ(T3(this),"CANCEL_BUTTON_CLICKED",this.g.cb)};
function T3(a){return new qQ(a.A,a.C?"scotty:"+a.C:null,a.l,a.g.getName())}
h.vl=function(){this.dispatchEvent(new iQ("D",this))};
h.yd=function(){return mb(["success","error","cancel"],oD(this.L,this.g).state)};
function W3(a){if(!(a.yd()||a.g.cb>a.g.cb)){var b=a.g.xa,c=0;b&&(c=Math.round(a.g.cb/b*100));100<=c&&(a.P=x(),c=100);b=new iQ("w",a);b.percent=c;a.dispatchEvent(b)}}
h.getFile=function(){return this.g};
h.Zk=function(){return this.g.xa||0};
h.Uk=function(){if(this.D){var a=(this.P||x())-this.D;a=1E3>a?null:1E3*(this.g.cb-this.M)/a}else a=null;return a?((this.g.xa||0)-this.g.cb)/a:Infinity};
function X3(a){var b=a.lastIndexOf(".");return 0<=b?N2[a.substr(b+1).toLowerCase()]||null:null}
h.Wb=function(){return this.getFile().getId()};
h.ni=function(){var a=this.getFile().getName();A([/^.*\\/g,/^.*\//g,/\.[^\.]*$/g,/[\[\]<>()]/g,/^\s+|\s+$/g],function(b){a=a.replace(b,"")});
a=a.replace(/[-_.]/g," ");return a.substr(0,100)};
h.Wl=function(a){var b={privacy:"field_privacy",title:"field_myvideo_title",description:"field_myvideo_descr",keywords:"field_myvideo_keywords",allow_public_stats:"allow_public_stats",allow_comments:"allow_comments",allow_comments_detail:"allow_comments_detail",allow_ratings:"allow_ratings",privacy_draft:"privacy_draft"},c={},d=ao(this.g.j),e;for(e in b)if(a.has(e)){var f=a.get(e)[0];"privacy"==e&&"public"==f&&(f="private");"privacy"==e&&"scheduled"==f&&(f="private");d[b[e]]=f;c[e]=f}d[R("XSRF_FIELD_NAME")]=
R("XSRF_TOKEN");this.g.j=new Wn(d);return c};
h.N=function(){R3.J.N.call(this);this.yd()||(rQ(T3(this),"CANCEL_APP_CLOSED",this.g.cb),S3(this))};var YM=new WM;
function Y3(a){L.call(this);this.B=a;this.F=this.B.videoPrivacy;a=oP("yt.www.upload");var b=this.getOption("baseDomain")+"/gen_204";a.B=b;a.l=ZQ;a.g.set("dn",document.domain);b=this.getOption("firstTime")?"1":"0";a.g.set("ft",b);a.g.set("fe","scotty-newui");a.A.set("mt",x());this.L=a;this.g=this.C=null;this.j=new Wn;this.K=!1;this.M=new B3(this.L,this.getOption("uploadUserKey"));this.l=new Wn;this.R=new VQ;this.Xa=!1;this.D=null;this.A=new qn(this);this.O=null;this.P=R("enableInnerTubeFeedback",!1)?
new KQ:new EQ;this.S=new YQ(this.B.sessionIndex,this.B.delegatedSessionId,w(this.Vs,this));this.S.start();yK("init-upload",this.Rw,this);yK("dispose-upload",this.dispose,this);oj().onbeforeunload=w(this.mw,this);new D3(this);Z3=this;xQ(vQ)}
var Z3;z(Y3,L);h=Y3.prototype;h.getOption=function(a){return this.B[a]||null};
h.Rw=function(){var a=new Wn;$3(this,"page_loaded",a);var b=M("start-upload-button-single");a=this.getOption("rupioUrl");a=new tF(a);if(this.getOption("uploadUserKey")){var c=this.getOption("uploadUserKey");a.A=c;a.Pe=!0}a.L=b;a.O=b;a.P=!0;a.F=void 0;b=["XHR","HTML_FORM"];if(c=a4(this))qb(b,c),pb(b,0,0,c);uF(a,b);this.C=a;R("enableGplusImporter")&&(this.D=new mQ,this.A.G(this.D,"G",this.fq).G(this.D,"H",this.bq).G(this.D,"I",this.cq));this.O=tP("upload-item-template",[]);this.A.G(this.C,"uploaderinstalling",
this.ov);this.A.G(this.C,"uploaderready",this.pv);this.A.G(this.C,["appletfailedtoload","uploaderwithoutpermission","applettimedout","appletfailedtoinitialize"],this.mv);xF(this.C,w(this.Fq,this));R("UBG_P")&&(R("UBG_I")||R("UBG_IU"))&&XM()};
h.N=function(){Y3.J.N.call(this);this.K&&$3(this,"multi_up_abandon");Uh(this.j.ia());Uh(this.l.ia())};
h.mw=function(){if(this.K){$3(this,"multi_up_abandon_attempt");var a=S("UPLOAD_IN_PROGRESS_WARNING");A(this.j.ia(),function(c){c.yd()||sQ(new qQ(c.A,null,null,null),"UPLOAD_MESSAGE_WARNING_UPLOAD_WILL_BE_LOST")})}var b=this.l.ia();
hb(b,function(c){return 5==c.l?!1:h2(c.Ca)})&&(a=S("UNSAVED_CHANGES_WARNING"));
this.l.ha()&&(1==this.l.ha()?m3(b[0])?a=S("UNPUBLISHED_DRAFT_SCHEDULED_WARNING"):l3(b[0])?a=S("UNPUBLISHED_DRAFT_PUBLIC_WARNING"):n3(b[0])&&(a=S("UNPUBLISHED_DRAFT_SHARED_WARNING")):ib(b,function(c){return l3(c)||m3(c)||n3(c)})?a=S("UNPUBLISHED_ALL_DRAFTS_WARNING"):hb(b,function(c){return l3(c)||m3(c)||n3(c)})&&(a=S("UNPUBLISHED_SOME_DRAFTS_WARNING")));
return a};
function b4(){return dj(null,"start-upload-button")}
function c4(a,b){var c=b;if(a.g instanceof YE)var d=a.g.j.ia()[0];else a.g instanceof AE&&(d=Fj(b),d="INPUT"==d.tagName?d:aL("INPUT",null,d));d&&(c=d);K(c,"mouseover",function(){P(b,"upload-element-hover")});
K(c,"mouseout",function(){gn(b,"upload-element-hover")});
K(c,"click",w(a.Wv,a,b))}
h.Wv=function(a){var b=new Wn;b.set("ii",this.g.nc()?"1":"0");b.set("ubi",T(a,"upload-button-id"));$3(this,"multi_up_button_click",b)};
h.Eq=function(){this.g.Vd(!1)};
function d4(a,b){var c=e4(a,b),d;b instanceof dR?d=new A3(c,b,a.R,a.l.isEmpty()):d=new a3(c,b,a.R,f4(a));return d}
function f4(a){return ib(a.l.ia(),function(b){return s3(b)||z3(b)})}
function g4(a){var b=M("upload-page");gn(b,"initial-upload-page");P(b,"active-upload-page");(b=M("gplus-importer-limit-exceeded-alert"))&&FN(b);a.g&&a.g.jh()}
h.Vp=function(a){a=a.files||[];15<a.length+this.j.ha()?(ek(Ua(this.so,a),this),a=eP("ERROR_TOO_MANY_FILES_WITH_PARAM",15),alert(a)):(g4(this),ek(this.Tq,this),ek(Ua(tQ,"youtu444","youtu639")))};
h.so=function(a){A(a,function(b){this.g.Wd(b)},this)};
h.bq=function(a){a=this.j.get(a.C.getId());a.dispatchEvent(new iQ("v",a));a.dispatchEvent(new iQ("x",a));BQ(a.j,"video_id");BQ(a.j,"processing_progress");BQ(a.j,"processing_done");BQ(a.j,"thumbnails_done");BQ(a.j,"youtube_status")};
h.cq=function(a){a=this.j.get(a.C.getId());a.dispatchEvent(new kQ(a,S("ERROR_SERVER_REJECTED")))};
h.fq=function(a){a=new dR(a.C,this.P.Sj(),this.L);(new qQ(a.A,null,null,null)).send("UPLOAD_INTENT_GENERIC");h4(this,a);a.dispatchEvent(new iQ("u",a));a.B.A.set("t",x())};
h.Tq=function(){var a=eb(this.g.jg(),function(f){return"default"==oD(this.g,f).state},this),b={},c=this.getOption("delegatedSessionId");
c&&(b["X-Goog-PageId"]=c);(c=this.B.sessionIndex.toString())&&(b["X-Goog-AuthUser"]=c);A(a,function(f){var g={};Object.assign(g,b);var k=null;try{var l=i4(this);this.g.vc=l;var m=new R3(f,this.g,this.L,this.P.Sj(),this.M,this.getOption("scottyDashUrl"));l=k=m.A;var n={};n.return_address=this.getOption("returnAddress");n.user_token=this.getOption("userToken");n.authuser=this.B.sessionIndex.toString();n.uploader_type="Web_"+j4(this);n.frontend_id=l;this.getOption("delegatedSessionId")&&(n.pageid=this.getOption("delegatedSessionId"));
this.getOption("experimentIds")&&(n.experiment_ids=this.getOption("experimentIds"));f.j=new Wn(n);l=k;var t=M("upload-id");t?t.value=l:pK(Error("BotGuard upload input is missing "+l));var r=$M(YM);!r&&R("UBG_P")&&pK(Error("Unable to obtain BotGuard response for upload "+l));r&&(g["X-Goog-BGR"]=r);Object.keys(g).length&&(f.F=g);var v=new qQ(k,null,null,f.getName());oD(this.g,f).Og?v.send("UPLOAD_INTENT_DRAG_AND_DROP"):v.send("UPLOAD_INTENT_FILE_SELECTED");h4(this,m);var B=!X3(m.g.getName());if(!B){var E,
X=X3(m.g.getName());T3(m).send("UPLOAD_REJECTED_CONTENT_TYPE");if(X){var fa=X.split("/")[0],ia=R("contentTypeHelpMap");if(ia){var xb={extension:"."+EC(m.getFile()).toLowerCase()},mc=ia[X];mc||(mc=ia[fa]);mc&&(xb.support_link=mc,"x-project"==fa&&(E=S("WARN_INVALID_FORMAT_PROJECT",xb)),"x-playlist"==fa&&(E=S("WARN_INVALID_FORMAT_PLAYLIST",xb)))}E||("audio"==fa?E=S("WARN_INVALID_FORMAT_AUDIO"):"x-timedtext"==fa&&(E=S("WARN_INVALID_FORMAT_TIMEDTEXT")))}E||(E=S("WARN_INVALID_FORMAT"));m.jd(E)}B&&!this.g.ye(f)&&
(new qQ(k,null,null,null)).send("UPLOAD_REJECTED_DUPLICATE_IN_PROGRESS")}catch(sd){throw f=new Wn,f.set("tr",sd.stack),f.set("ms",sd.message),$3(this,"multi_up_debug",f),sd;}},this);
$3(this,"multi_up_session_start");if(1<eb(a,function(f){return!z3(this.l.get(f.getId()))},this).length)Uk(function(){N("inner-progress-bars",M("uploader-progress")).focus()});
else{var d=this.l.get(a[0].getId()),e=z3(d)?"upload-failure":"inner-progress-bars";Uk(function(){N(e,d.H()).focus()})}};
function h4(a,b){var c=b.Wb();a.j.set(c,b);b.Jb(a);Sh(b,function(){this.j.remove(b.Wb());1==this.j.ha()&&this.l.get(this.j.ia()[0].Wb()).expand()},a);
var d=d4(a,b);k4(a,d,c);e3(d);Sh(d,function(){this.l.remove(c)},a)}
function i4(a,b){var c=b||a.j.ha(),d=a.getOption("bandaidRupioUrl");return 0!=c%2&&d?d:a.getOption("rupioUrl")}
h.Lu=function(a){a=a.target.getFile();var b=this.getOption("bandaidRupioUrl");if(b&&Sc(a.wc||"",b)&&(b=this.getOption("bandaidDomain"))){var c=xo(a.Yd),d=xo(a.wc);nh(c,b);jo(c,d.g);a.Yd=c.toString()}Lj(M("debug-upload-id"),a.Lb)};
function e4(a,b){var c=vj(Nl(a.O.za({}))),d=N("video-settings-form",c),e=d.elements.privacy;A(Cj(e),function(f){f.selected=this.F==f.value;this.F==f.value?f.setAttribute("selected",!0):f.removeAttribute("selected")},a);
WP.V().zb(e);e=d.elements.privacy_draft;if("public"==a.F||"scheduled"==a.F)e.value=a.F;d=d.elements.title;d.value||(d.value=b.ni(),P(Hj(d),"yt-uix-form-input-non-empty"));return c}
function k4(a,b,c){a.l.set(c,b);c=M("active-uploads-contain");var d=b.H();c.appendChild(d);c=b3(b,"sub-item-exp");I1(b.vb,c,b.F);EN(b.H());g4(a)}
h.Np=function(a){var b=this.j.get(a.file.getId());if(b){var c=new Wn;a=oD(this.g,a.file).Fd;a.j&&c.set("rs",a.j.toString());a.A&&c.set("rrh",a.A);cR(b,"multi_up_hashing",c)}};
h.Sp=function(a){var b=i4(this,parseInt(a.file.getId(),10));this.g.vc=b;this.A.G(oD(this.g,a.file).Uc,"startsuccess",this.Lu,!0)};
h.Qp=function(){};
h.Tp=function(a){var b=oD(this.g,a.file).state,c=this.j.get(a.file.getId());if(c){if("start"==b||"recovery"==b)this.K=!0,(new qQ(c.A,null,null,null)).send("CLIENT_TRANSFER_INITIATED");rK(function(){var d=V3(c);d&&d.video_id&&c.setVideoId(d.video_id);d=new Wn;switch(b){case "inqueue":c.dispatchEvent(new iQ("u",c,c.g));var e=c.g.xa;e&&d.set("b",e);(e=EC(c.g))&&(e=e.toLowerCase().match(/^[a-z0-9]+$/))&&d.set("ex",e);e=new is;e.update(Xe(c.g.g));(e=Wf(e.digest(),3))&&d.set("fh",e);d.set("fd",c.F.Og?"1":
"0");break;case "recovery":e=c.F.Fd;e=e.L;0<e&&d.set("rd",x()-e);c.B.A.set("t",x());break;case "start":c.B.A.set("t",x());c.dispatchEvent(new iQ("v",c));break;case "transfer":if((e=c.F.Fd)&&e.F){var f=Re(e.B,"upload_id");if(null!=f){T3(c).send("UPLOAD_REJECTED_ABANDONED_FOR_RECOVERY");var g=c.O;f=g.g?g.g.get(f):null;c.A=f;c.j.g=new zQ("frontend_key",c.A)}T3(c).send("UPLOAD_RECOVERY")}c.D=x();c.M=c.g.cb;W3(c);c.C=c.g.Lb;f=c.O;f.g&&f.g.set(c.C,c.A);c.l||BQ(c.j,"video_id");BQ(c.j,"video_info2");BQ(c.j,
"video_issues");BQ(c.j,"processing_progress");BQ(c.j,"youtube_status");BQ(c.j,"thumbnails_done");0<c.g.cb&&d.set("rs",c.g.cb.toString());e&&e.C&&d.set("rlh",e.C);break;case "success":c.dispatchEvent(new iQ("x",c));break;case "error":e=!1===navigator.onLine?"nointernet":c.g.kc(),T3(c).send("CLIENT_TRANSFER_FAILED",{transfer_error_code:e}),c.jd(U3(c))}b&&(e=$b(c.S,b))&&cR(c,e,d)},0)}};
h.Pp=function(){this.K=!1;$3(this,"multi_up_session_finish")};
h.Rp=function(a){(a=this.j.get(a.file.getId()))&&W3(a)};
function $3(a,b,c){c=c||new Wn;c.set("a",b);a.L.send(c)}
function a4(a){a=a.getOption("restrictMechanism");if(!a)return null;switch(a){case "html_form":return"HTML_FORM";case "xhr":return"XHR";default:return l4(),null}}
h.ov=function(a){m4(this,a.A);$3(this,"uploader_start");Uk(function(){for(var b=b4(),c=0;c<b.length;c++)a.A.Rf(b[c],!0)},1,this)};
h.mv=function(a){m4(this,a.A);var b=new Wn;b.set("e",a.type);$3(this,"uploader_failed",b)};
h.pv=function(){for(var a=b4(),b=0;b<a.length;b++)c4(this,a[b])};
function m4(a,b){a.g=b;a.L.g.set("ut",j4(a))}
h.uk=function(a){if(!this.g.nc()){var b=new Wn;b.set("mt",a);$3(this,"uploader_not_ready",b);6E4>a&&Uk(w(this.uk,this,2*a),a)}};
function j4(a){return a.g instanceof YE?"XHR":a.g instanceof AE?"HTML":""}
h.Fq=function(a){clearTimeout(window.UPLOADER_LOAD_TIMEOUT);a4(this)&&a4(this)!=this.C.j[0]&&l4();m4(this,a);Uk(w(this.uk,this,7500),7500);a=new Wn;a.set("wfd",this.g.Si()?"1":"0");$3(this,"multi_up_loaded",a);this.g.De(!0);this.g.lk=!1;this.g.rh(!1);a=w(this.M.C,this.M);this.g.Tm=a;this.A.G(this.g,"filesselected",this.Vp).G(this.g,"filehashingstarted",this.Np).G(this.g,"filesessioncreated",this.Sp).G(this.g,"fileiocreated",this.Qp).G(this.g,"uploadstatechanged",this.Tp).G(this.g,"allfilescompleted",
this.Pp).G(this.g,"uploadprogress",this.Rp);a=b4();for(var b=0;b<a.length;b++){var c=a[b];this.g instanceof YE||this.A.G(c,"click",this.Eq)}this.g.Si()&&n4(this);FN("loading-message");DN("upload-prompt-box",!0)};
function n4(a){var b=aL("BODY"),c=M("upload-drag-drop-description"),d=new pG(b);a.A.G(d,"drop",a.xt);a.A.G(b,"dragover",function(){this.Xa||(this.Xa=!0,P(c,"highlight"))});
a.A.G(b,"dragleave",function(){this.Xa&&(this.Xa=!1,gn(c,"highlight"))});
V(c,!0)}
h.xt=function(a){bF(this.g,a)};
h.Vs=function(a){V("upload-cookie-not-valid",!a)};
function o4(){var a=Z3,b={};b.upload_mechanism=j4(a);b.options=a.B;if(a.g){b.initialized=a.g.nc();b.resumable=a.g.re();b.recoverable=a.g.Wi();var c=a.g.jg();b.num_files=c.length;for(var d=0;d<c.length;d++){var e=c[d];e&&(b["upload_id_"+d]=e.Lb,b["info_hash_"+d]=FC(e),b["extension_"+d]=EC(e),b["transferred_"+d]=e.cb+"/"+e.xa,b["error_code_"+d]=e.kc(),b["error_message_"+d]=e.Vg);var f=a.j.get(e.getId());f&&(b["video_id_"+d]=f.l);e=oD(a.g,e);b&&(b["drag_and_drop_"+d]=e.Og,b["state_"+d]=e.state,b["file_io_"+
d]=!!e.Cc,b["recovery_"+d]=!!e.Fd)}}return b}
h.Zo=function(){return this.D};
function l4(){EN(M("restrict-mechanism-not-available"))}
;q("yt.www.upload.Uploader",Y3,void 0);q("yt.www.metadataeditor.PublishDateWidget.setSupportedTimezones",function(a){dQ={};for(var b=0;b<a.length;b++){var c=a[b];dQ[c.name]=c}a=R("localDateTimeConfig",void 0);ec(Al,VP(a));Al.Ic[2]=a.formatShortDate;Al.Ic[1]=a.formatLongDateOnly},void 0);
Y3.showDebugInfo=function(){M("upload-debug-data").value=(new EG).format(o4());GN("upload-debug-output")};
Y3.setVideoPrivacy=function(a){Z3.F=a};
Y3.collapseYppsBannerPanel=function(){FN(document.getElementsByClassName("ypps-banner-panel"));FN(document.getElementsByClassName("ypps-banner-message-hide"));EN(document.getElementsByClassName("ypps-banner-message-show"))};
Y3.expandYppsBannerPanel=function(){EN(document.getElementsByClassName("ypps-banner-panel"));EN(document.getElementsByClassName("ypps-banner-message-hide"));FN(document.getElementsByClassName("ypps-banner-message-show"))};
Y3.initSingleInstance=function(a){new Y3(a)};
q("yt.sharing.SocialConnector.init",function(a){var b=fj("social-connector");A(b,function(c){new aP(c,a)})},void 0);
q("yt.i18n.inputtools.loadInputTools",function(a,b,c){a&&aK("GOOGLE_LANGUAGE_API_INPUT_TOOLS",w(gK,null,a,b,c))},void 0);
q("yt.i18n.inputtools.finishLoading",function(){bK=new google.elements.inputtools.InputToolsController;bK.setApplicationName("youtube");if(eK)bK.addPageElements(eK);else{eK=[];var a=new un(document);K(a,"aec",hK)}bK.addInputTools(dK);fK&&iK(M(fK));cK=!1},void 0);
q("yt.www.metadataeditor.MetadataStorage.onPageInit",function(){FP=x()},void 0);
q("yt.www.upload.Uploader.getInstance",function(){return Z3},void 0);
Y3.prototype.getImporter=Y3.prototype.Zo;mQ.prototype.handlePickerEventTestOnly=mQ.prototype.uq;Va("yt.abuse.player.botguardInitialized",u("yt.abuse.player.botguardInitialized")||bN);Va("yt.abuse.player.invokeBotguard",u("yt.abuse.player.invokeBotguard")||cN);Va("yt.abuse.dclkstatus.checkDclkStatus",u("yt.abuse.dclkstatus.checkDclkStatus")||QK);Va("yt.player.exports.navigate",u("yt.player.exports.navigate")||zN);Va("yt.util.activity.init",u("yt.util.activity.init")||vL);
Va("yt.util.activity.getTimeSinceActive",u("yt.util.activity.getTimeSinceActive")||yL);Va("yt.util.activity.setTimestamp",u("yt.util.activity.setTimestamp")||wL);}).call(this);
