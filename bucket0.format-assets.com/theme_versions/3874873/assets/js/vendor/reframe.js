!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.reframe=t()}(this,function(){"use strict";function e(e,t){var n="string"==typeof e?document.querySelectorAll(e):e;"length"in n||(n=[n]);for(var r=t||"js-reframe",i=0;i<n.length;i++){var o=n[i];if(o.className.split(" ").indexOf(r)>=0)return;var f=document.createElement("div"),d=o.offsetHeight,a=o.offsetWidth,s=d/a*100;f.style.paddingTop=s+"%",o.height=o.width="",f.className+=r,o.parentNode.insertBefore(f,o),o.parentNode.removeChild(o),f.appendChild(o)}}return window.$&&window.$.fn.extend({reframe:function(t){return e(this,t)}}),e});