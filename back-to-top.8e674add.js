parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mehQ":[function(require,module,exports) {
var define;
var o;function t(o){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}!function(e,n){"function"==typeof o&&o.amd?o(["exports"],n):"object"===("undefined"==typeof exports?"undefined":t(exports))&&"string"!=typeof exports.nodeName?n(exports):n(e.commonJsStrict={})}("undefined"!=typeof self?self:void 0,function(o){o.addBackToTop=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o.backgroundColor,e=void 0===t?"#000":t,n=o.cornerOffset,i=void 0===n?20:n,r=o.diameter,d=void 0===r?56:r,c=o.ease,a=void 0===c?function(o){return.5*(1-Math.cos(Math.PI*o))}:c,s=o.id,u=void 0===s?"back-to-top":s,l=o.innerHTML,p=void 0===l?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':l,m=o.onClickScrollTo,f=void 0===m?0:m,b=o.scrollContainer,v=void 0===b?document.body:b,h=o.scrollDuration,y=void 0===h?100:h,x=o.showWhenScrollTopIs,w=void 0===x?1:x,g=o.size,k=void 0===g?d:g,T=o.textColor,M=void 0===T?"#fff":T,z=o.zIndex,E=void 0===z?1:z,S=v===document.body,C=S&&document.documentElement;L=Math.round(.43*k),N=Math.round(.29*k),I="#"+u+"{background:"+e+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+i+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+M+";cursor:pointer;display:block;height:"+k+"px;opacity:1;outline:0;position:fixed;right:"+i+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+k+"px;z-index:"+E+"}#"+u+" svg{display:block;fill:currentColor;height:"+L+"px;margin:"+N+"px auto 0;width:"+L+"px}#"+u+".hidden{bottom:-"+k+"px;opacity:0}",j=document.createElement("style"),j.appendChild(document.createTextNode(I)),document.head.insertAdjacentElement("afterbegin",j);var L,N,I,j;var A=function(){var o=document.createElement("div");return o.id=u,o.className="hidden",o.innerHTML=p,o.addEventListener("click",function(o){o.preventDefault(),function(){var o="function"==typeof f?f():f,t=window,e=t.performance,n=t.requestAnimationFrame;if(y<=0||void 0===e||void 0===n)return q(o);var i=e.now(),r=H(),d=r-o;n(function o(t){var e=Math.min((t-i)/y,1);q(r-Math.round(a(e)*d)),e<1&&n(o)})}()}),document.body.appendChild(o),o}(),B=!0;function D(){H()>=w?function(){if(!B)return;A.className="",B=!1}():function(){if(B)return;A.className="hidden",B=!0}()}function H(){return v.scrollTop||C&&document.documentElement.scrollTop||0}function q(o){v.scrollTop=o,C&&(document.documentElement.scrollTop=o)}(S?window:v).addEventListener("scroll",D),D()}});
},{}],"Mhxs":[function(require,module,exports) {
"use strict";var o=require("vanilla-back-to-top");(0,o.addBackToTop)({diameter:56,backgroundColor:"#ff6b08",textColor:"#fff"});
},{"vanilla-back-to-top":"mehQ"}]},{},["Mhxs"], null)
//# sourceMappingURL=/filmoteka/back-to-top.8e674add.js.map