!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.reely=t():e.reely=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){var n=Object.assign({imageArray:[],sensitivity:10,drag:!0,auto:!1,edgeStop:!1},t),r=e,o=r.querySelector("img"),i=n.sensitivity,u=n.sensitivity/3,a=n.imageArray,s=[],c=0,d=0,l=null,f="none",g="none",p=0,v=0,m=!1,h=!1,y=function(e){if(!h){e>d?("left"===f&&(v+=1),v>=a.length&&(v=n.edgeStop?a.length-1:0),o.setAttribute("src",a[v]),v>=a.length?v=n.edgeStop?a.length-1:0:v+=1,f="right"):e<d&&("right"===f&&(v-=1),v<=0?v=n.edgeStop?0:a.length-1:v-=1,o.setAttribute("src",a[v]),f="left"),d=e;var t=new CustomEvent("slideChanged",{detail:{currentSlide:"left"==f?v+1:v}});r.dispatchEvent(t)}},b=function(e,t){h||(null===l&&(l=e,y(e)),e>l?g="right":e<l&&(g="left"),e>p&&"left"===g?(l=e,v+=1):e<p&&"right"===g&&(l=e,v-=1),Math.abs(e-l)>t&&(y(e),l=e),p=e)};return{init:function(){var e,t,d,l;!0===n.auto?setInterval(function(){(c+=1)>=a.length&&(c=0),o.setAttribute("src",a[c])},i):/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(d=u,l=function(){m&&(b(t,d),requestAnimationFrame(l))},r.addEventListener("touchstart",function(e){t=e.pageX||e.touches[0].pageX,m=!0,requestAnimationFrame(l)}),window.addEventListener("touchmove",function(e){t=e.pageX||e.touches[0].pageX,m&&b(t,d)}),window.addEventListener("touchend",function(){m=!1})):!0===n.drag?(e=!1,document.ondragstart=function(){return!1},o.addEventListener("mousedown",function(t){e||(e=!0)}),document.querySelector("body").addEventListener("mousemove",function(t){e&&b(t.clientX,i)}),document.querySelector("body").addEventListener("mouseup",function(t){e&&(e=!1)})):!1===n.drag&&document.querySelector("body").addEventListener("mousemove",function(e){var t=e.pageX;b(t,i)}),function(e){s.list||(s.list=[]);for(var t=0;t<e.length;t+=1){var n=new Image;n.onload=function(){var e=s.list.indexOf(this);-1!==e&&s.splice(e,1)},s.list.push(n),n.src=e[t]}}(a)},setPause:function(e){h=e},slideTo:function(e){return e>=0&&e<a.length?(v=parseInt(e,10),f="none",g="none",o.setAttribute("src",a[v]),!0):(t="Your desired slide number is smaller than 0 or bigger than the total slide amount",console.error("".concat("[reely]"," ").concat(t)),!1);var t}}};t.default=r}]).default});