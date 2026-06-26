"use strict";var q=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var c=q(function(F,x){
var p=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-assert-is-negative-zero/dist');function E(r,e,a,f,t,o,m){var n,v,s,u,i;if(r<=0)return NaN;for(v=f,s=m,i=0;i<r&&t[s]!==0;i++)v+=a,s+=o;if(i===r)return NaN;if(n=e[v],p(n))return n;for(i+=1,i;i<r;i++)if(v+=a,s+=o,!t[s]){if(u=e[v],p(u))return u;(u<n||u===n&&g(u))&&(n=u)}return n}x.exports=E
});var k=q(function(G,j){
var y=require('@stdlib/strided-base-stride2offset/dist'),O=c();function Z(r,e,a,f,t){var o=y(r,a),m=y(r,t);return O(r,e,a,o,f,t,m)}j.exports=Z
});var _=q(function(H,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=k(),w=c();h(l,"ndarray",w);R.exports=l
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=_(),d,b=A(z(__dirname,"./native.js"));B(b)?d=C:d=b;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
