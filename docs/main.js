parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"or4r":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],e="Expected a function",n=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,v=a||s||Function("return this")(),l=Object.prototype,p=l.toString,b=Math.max,m=Math.min,y=function(){return v.Date.now()};function d(t,n,r){var i,o,u,f,c,a,s=0,v=!1,l=!1,p=!0;if("function"!=typeof t)throw new TypeError(e);function d(e){var n=i,r=o;return i=o=void 0,s=e,f=t.apply(r,n)}function g(t){var e=t-a;return void 0===a||e>=n||e<0||l&&t-s>=u}function O(){var t=y();if(g(t))return x(t);c=setTimeout(O,function(t){var e=n-(t-a);return l?m(e,u-(t-s)):e}(t))}function x(t){return c=void 0,p&&i?d(t):(i=o=void 0,f)}function T(){var t=y(),e=g(t);if(i=arguments,o=this,a=t,e){if(void 0===c)return function(t){return s=t,c=setTimeout(O,n),v?d(t):f}(a);if(l)return c=setTimeout(O,n),d(a)}return void 0===c&&(c=setTimeout(O,n)),f}return n=h(n)||0,j(r)&&(v=!!r.leading,u=(l="maxWait"in r)?b(h(r.maxWait)||0,n):u,p="trailing"in r?!!r.trailing:p),T.cancel=function(){void 0!==c&&clearTimeout(c),s=0,i=a=o=c=void 0},T.flush=function(){return void 0===c?f:x(y())},T}function j(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){return!!t&&"object"==typeof t}function O(t){return"symbol"==typeof t||g(t)&&p.call(t)==r}function h(t){if("number"==typeof t)return t;if(O(t))return n;if(j(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=j(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):o.test(t)?n:+t}module.exports=d;
},{}],"WEtf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return r.android()||r.blackberry()||r.ios()||r.opera()||r.windows()}},e=r;exports.default=e;
},{}],"hZBy":[function(require,module,exports) {
"use strict";function e(e){return r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function r(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function o(e){return document.querySelector(e)}function s(t){return e((arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelectorAll(t))}function c(t,n){return e(t.querySelectorAll(n))}function a(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)".concat(t.split(" ").join("|"),"(\\b|$)"),"gi")," ")}function l(e,t){e.classList?e.classList.add(t):e.className="".concat(e.className," ").concat(t)}function i(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )".concat(t,"( |$)"),"gi").test(e.className)}function u(e,t){t=t||0;var n=e.getBoundingClientRect().top+t,r=(window.pageYOffset||document.documentElement.scrollTop)+n;window.scrollTo(0,r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.select=o,exports.selectAll=s,exports.find=c,exports.removeClass=a,exports.addClass=l,exports.hasClass=i,exports.jumpTo=u;
},{}],"U9xJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=require("./dom");function t(){(0,e.selectAll)("[target='_blank']").forEach(function(e){return e.setAttribute("rel","noopener")})}
},{"./dom":"hZBy"}],"vL5c":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof e&&e.amd?e(n):t.scrollama=n()}(this,function(){"use strict";function e(e){return"scrollama__debug-offset--"+e}function t(t){!function(t){var n=t.id,o=t.offsetVal,r=t.stepClass,i=document.createElement("div");i.id=e(n),i.className="scrollama__debug-offset",i.style.position="fixed",i.style.left="0",i.style.width="100%",i.style.height="0",i.style.borderTop="2px dashed black",i.style.zIndex="9999";var s=document.createElement("p");s.innerHTML='".'+r+'" trigger: <span>'+o+"</span>",s.style.fontSize="12px",s.style.fontFamily="monospace",s.style.color="black",s.style.margin="0",s.style.padding="6px",i.appendChild(s),document.body.appendChild(i)}({id:t.id,offsetVal:t.offsetVal,stepClass:t.stepEl[0].className})}function n(e){var t=e.id,n=e.index,o=e.state,r="scrollama__debug-step--"+t+"-"+n,i=document.getElementById(r+"_above"),s=document.getElementById(r+"_below"),a="enter"===o?"block":"none";i&&(i.style.display=a),s&&(s.style.display=a)}return function(){var o=["stepAbove","stepBelow","stepProgress","viewportAbove","viewportBelow"],r={},i={},s=null,a=[],l=[],c=[],f=[],u=0,p=0,d=0,v=0,g=0,m=0,x=!1,b=!1,w=!1,h=!1,y=!1,E=!1,M="down",I="percent",A=[];function C(e){console.error("scrollama error: "+e)}function O(){r={stepEnter:function(){},stepExit:function(){},stepProgress:function(){}},i={}}function S(e){return e.getBoundingClientRect().top+window.pageYOffset-(document.body.clientTop||0)}function B(e){return+e.getAttribute("data-scrollama-index")}function H(){window.pageYOffset>g?M="down":window.pageYOffset<g&&(M="up"),g=window.pageYOffset}function k(e){i[e]&&i[e].forEach(function(e){return e.disconnect()})}function _(){var t,n;d=window.innerHeight,t=document.body,n=document.documentElement,v=Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight),p=u*("pixels"===I?1:d),x&&(l=a.map(function(e){return e.getBoundingClientRect().height}),c=a.map(S),b&&D()),w&&function(t){var n=t.id,o=t.offsetMargin,r=t.offsetVal,i="pixels"===t.format?"px":"",s=e(n),a=document.getElementById(s);a.style.top=o+"px",a.querySelector("span").innerText=""+r+i}({id:s,offsetMargin:p,offsetVal:u,format:I})}function N(e){if(e&&!b){if(!x)return C("scrollama error: enable() called before scroller was ready"),void(b=!1);D()}!e&&b&&o.forEach(k),b=e}function P(e,t){var n=B(e);void 0!==t&&(f[n].progress=t);var o={element:e,index:n,progress:f[n].progress};"enter"===f[n].state&&r.stepProgress(o)}function R(e,t){if("above"===t)for(var n=0;n<e;n+=1){var o=f[n];"enter"!==o.state&&"down"!==o.direction?(T(a[n],"down",!1),q(a[n],"down")):"enter"===o.state&&q(a[n],"down")}else if("below"===t)for(var r=f.length-1;r>e;r-=1){var i=f[r];"enter"===i.state&&q(a[r],"up"),"down"===i.direction&&(T(a[r],"up",!1),q(a[r],"up"))}}function T(e,t,o){void 0===o&&(o=!0);var i=B(e),a={element:e,index:i,direction:t};f[i].direction=t,f[i].state="enter",y&&o&&"down"===t&&R(i,"above"),y&&o&&"up"===t&&R(i,"below"),r.stepEnter&&!A[i]&&(r.stepEnter(a,f),w&&n({id:s,index:i,state:"enter"}),E&&(A[i]=!0)),h&&P(e)}function q(e,t){var o=B(e),i={element:e,index:o,direction:t};h&&("down"===t&&f[o].progress<1?P(e,1):"up"===t&&f[o].progress>0&&P(e,0)),f[o].direction=t,f[o].state="exit",r.stepExit(i,f),w&&n({id:s,index:o,state:"exit"})}function V(e){var t=e[0];H();var n=t.isIntersecting,o=t.boundingClientRect,r=t.target,i=o.top,s=o.bottom,a=i-p,l=s-p,c=B(r),u=f[c];n&&a<=0&&l>=0&&"down"===M&&"enter"!==u.state&&T(r,M),!n&&a>0&&"up"===M&&"enter"===u.state&&q(r,M)}function Y(e){var t=e[0];H();var n=t.isIntersecting,o=t.boundingClientRect,r=t.target,i=o.top,s=o.bottom,a=i-p,l=s-p,c=B(r),u=f[c];n&&a<=0&&l>=0&&"up"===M&&"enter"!==u.state&&T(r,M),!n&&l<0&&"down"===M&&"enter"===u.state&&q(r,M)}function F(e){var t=e[0];H();var n=t.isIntersecting,o=t.target,r=B(o),i=f[r];n&&"down"===M&&"down"!==i.direction&&"enter"!==i.state&&(T(o,"down"),q(o,"down"))}function j(e){var t=e[0];H();var n=t.isIntersecting,o=t.target,r=B(o),i=f[r];n&&"up"===M&&"down"===i.direction&&"enter"!==i.state&&(T(o,"up"),q(o,"up"))}function z(e){var t=e[0];H();var n=t.isIntersecting,o=t.intersectionRatio,r=t.boundingClientRect,i=t.target,s=r.bottom;n&&s-p>=0&&P(i,+o)}function L(){i.stepProgress=a.map(function(e,t){var n=l[t]-p+"px 0px "+(-d+p)+"px 0px",o=function(e){for(var t=Math.ceil(e/m),n=[],o=1/t,r=0;r<t;r+=1)n.push(r*o);return n}(l[t]),r=new IntersectionObserver(z,{rootMargin:n,threshold:o});return r.observe(e),r})}function D(){o.forEach(k),i.viewportAbove=a.map(function(e,t){var n=v-c[t],o=p-d-l[t],r=new IntersectionObserver(F,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(e),r}),i.viewportBelow=a.map(function(e,t){var n=-p-l[t],o=p-d+l[t]+v,r=new IntersectionObserver(j,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(e),r}),i.stepAbove=a.map(function(e,t){var n=-p+l[t],o=new IntersectionObserver(V,{rootMargin:n+"px 0px "+(p-d)+"px 0px"});return o.observe(e),o}),i.stepBelow=a.map(function(e,t){var n=-p,o=p-d+l[t],r=new IntersectionObserver(Y,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(e),r}),h&&L()}function G(e){return!(!e||1!==e.nodeType)&&(function(e){var t=window.getComputedStyle(e);return("scroll"===t.overflowY||"auto"===t.overflowY)&&e.scrollHeight>e.clientHeight}(e)?e:G(e.parentNode))}var J={};return J.setup=function(e){var n=e.step,o=e.offset;void 0===o&&(o=.5);var r=e.progress;void 0===r&&(r=!1);var i=e.threshold;void 0===i&&(i=4);var l=e.debug;void 0===l&&(l=!1);var c=e.order;void 0===c&&(c=!0);var p,d,v,g,b,M=e.once;if(void 0===M&&(M=!1),O(),d=(p="abcdefghijklmnopqrstuv").length,v=Date.now(),s=""+[0,0,0].map(function(e){return p[Math.floor(Math.random()*d)]}).join("")+v,g=n,void 0===b&&(b=document),!(a="string"==typeof g?Array.from(b.querySelectorAll(g)):g instanceof Element?[g]:g instanceof NodeList?Array.from(g):g instanceof Array?g:[]).length)return C("no step elements"),J;var I=a.reduce(function(e,t){return e||G(t.parentNode)},!1);return I&&console.error("scrollama error: step elements cannot be children of a scrollable element. Remove any css on the parent element with overflow: scroll; or overflow: auto; on elements with fixed height.",I),w=l,h=r,y=c,E=M,J.offsetTrigger(o),m=Math.max(1,+i),x=!0,w&&t({id:s,stepEl:a,offsetVal:u}),a.forEach(function(e,t){return e.setAttribute("data-scrollama-index",t)}),f=a.map(function(){return{direction:null,state:null,progress:0}}),_(),J.enable(),J},J.resize=function(){return _(),J},J.enable=function(){return N(!0),J},J.disable=function(){return N(!1),J},J.destroy=function(){N(!1),O()},J.offsetTrigger=function(e){if(null===e)return u;if("number"==typeof e)I="percent",e>1&&C("offset value is greater than 1. Fallback to 1."),e<0&&C("offset value is lower than 0. Fallback to 0."),u=Math.min(Math.max(0,e),1);else if("string"==typeof e&&e.indexOf("px")>0){var t=+e.replace("px","");isNaN(t)?(C("offset value must be in 'px' format. Fallback to 0.5."),u=.5):(I="pixels",u=t)}else C("offset value does not include 'px'. Fallback to 0.5."),u=.5;return J},J.onStepEnter=function(e){return"function"==typeof e?r.stepEnter=e:C("onStepEnter requires a function"),J},J.onStepExit=function(e){return"function"==typeof e?r.stepExit=e:C("onStepExit requires a function"),J},J.onStepProgress=function(e){return"function"==typeof e?r.stepProgress=e:C("onStepProgress requires a function"),J},J}});
},{}],"K8rx":[function(require,module,exports) {
"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function t(t){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?e(r,!0).forEach(function(e){n(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=require("scrollama"),r=[],a=i(),o=d3.select("#scroll"),s=o.select(".scroll__graphic"),l=s.selectAll(".intro__grid"),c=o.select(".scroll__text"),d=c.selectAll(".step"),u=d3.select("#step-0"),y=d3.selectAll(".intro-hover");function p(){a.setup({container:"#scroll",graphic:".scroll__graphic",text:".scroll__text",step:".scroll__text .step",offset:.5,debug:!1}).onStepEnter(g)}function f(){var e=Math.floor(.75*window.innerHeight);d.style("height",e+"px"),u.style("margin-top","-".concat(e,"px"));d3.select("body").node().offsetWidth;s.style("height",window.innerHeight+"px"),a.resize()}function g(e){d.classed("is-active",function(t,n){return n===e.index}),v(e.index)}function v(e){var t=d3.selectAll(".logoDiv"),n=d3.selectAll(".RWB-N"),i=d3.selectAll(".RWB-Y");1===e&&t.transition().duration(200).ease(d3.easeLinear).style("opacity",1).style("filter","none"),2===e&&(n.transition().duration(200).ease(d3.easeLinear).style("opacity",.2).style("filter","grayscale(100%)"),i.transition().duration(200).ease(d3.easeLinear).style("opacity",1).style("filter","none")),3===e&&(n.transition().duration(200).ease(d3.easeLinear).style("opacity",.2).style("filter","grayscale(100%)"),i.transition().duration(200).ease(d3.easeLinear).style("opacity",1).style("filter","none")),4===e&&(n.transition().duration(200).ease(d3.easeLinear).style("opacity",1).style("filter","none"),i.transition().duration(200).ease(d3.easeLinear).style("opacity",.2).style("filter","grayscale(100%)")),5===e&&(n.transition().duration(200).ease(d3.easeLinear).style("opacity",1).style("filter","none"),i.transition().duration(200).ease(d3.easeLinear).style("opacity",.2).style("filter","grayscale(100%)")),6===e&&t.transition().duration(200).ease(d3.easeLinear).style("opacity",1).style("filter","none")}function b(){l.selectAll(".logoDiv").data(r).enter().append("div").attr("class",function(e){return"logoDiv logoDiv-".concat(e.nameID," RWB-").concat(e.RWB)}).append("img").attr("src",function(e){return"assets/images/2020-".concat(e.nameID,".jpg")})}function D(){d3.selectAll(".logoDiv").transition().duration(1500).delay(function(e,t){return 100*t}).ease(d3.easeLinear).style("opacity",1)}function h(){var e=d3.select(this).attr("id").split("-")[0],t=d3.select(".logoDiv-".concat(e));d3.selectAll(".logoDiv").transition().duration(200).ease(d3.easeLinear).style("opacity",.2),t.transition().duration(500).ease(d3.easeLinear).style("opacity",1)}function m(){d3.selectAll(".logoDiv").transition().duration(200).ease(d3.easeLinear).style("opacity",1)}function L(e){r=(r=(r=e.filter(function(e){return"2020"===e.year})).map(function(e){return t({},e,{nameID:O(e.name)})})).sort(function(e,t){return d3.ascending(e.nameID,t.nameID)})}function O(e){return"Bill de Blasio"===e?"deblasio":"Rocky De La Fuente"===e?"delafuente":e.split(" ")[1].toLowerCase().replace("'","")}function w(e){L(e),f(),p(),b(),D(),window.addEventListener("resize",f),y.on("mouseenter",h),y.on("mouseleave",m)}var _={init:w};exports.default=_;
},{"scrollama":"vL5c"}],"xZJw":[function(require,module,exports) {
"use strict";function t(t){return new Promise(function(e,n){var r=t.split(".").pop();"csv"===r?d3.csv("assets/data/".concat(t)).then(e).catch(n):"json"===r?d3.json("assets/data/".concat(t)).then(e).catch(n):n(new Error("unsupported file type for: ".concat(t)))})}function e(e){if("string"==typeof e)return t(e);var n=e.map(t);return Promise.all(n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"V7o5":[function(require,module,exports) {
d3.selection.prototype.puddingColorChart=function(e){var t=this.nodes().map(function(e){var t=d3.select(e),c=null,o=null,n=null,r=null,l=null,a=d3.select(".overlay").select(".overlay-inset"),i=a.select("h5"),s=a.select(".party"),d=a.select(".color"),u=a.select(".race"),p=a.select(".gender"),f=a.select("img"),h=(a.select(".notes"),t.datum()),b=[],k=0;function y(e,t){n.classed("faded",!0),d3.select(this).classed("faded",!1),a.classed("is-visible",!0),i.text("".concat(e.name)),s.text("".concat(e.party,", ").concat(e.year)),d.text("".concat("Y"==e.RWB?"RWB":"Non-RWB")),u.text("".concat("Y"==e.white?"White":"Non-White")),p.text("".concat("Y"==e.male?"Male":"Non-male")),f.attr("src","assets/images/".concat(e.image))}function x(){n.classed("faded",!1),a.classed("is-visible",!1)}var v={init:function(){b=d3.nest().key(function(e){return e.year}).entries(h),c=t.append("div").attr("class","pudding-chart"),(o=c.selectAll(".year").data(b).enter().append("div").attr("class",function(e){return"year year-".concat(e.key)})).append("p").attr("class","year-label").text(function(e){return e.key}),n=o.selectAll(".candidate").data(function(e){return e.values}).enter().append("div").attr("class",function(e){var t=e.name.replace(/\s+/g,"").replace(".","").replace("'","");return"candidate candidate_".concat(t," candidate_RWB-").concat(e.RWB," candidate_white-").concat(e.white," candidate_male-").concat(e.male," candidate_whiteMale-").concat(e.whiteMale)}).on("mouseover",y).on("mouseout",x),r=n.append("div").attr("class","rwb-group"),l=n.append("div").attr("class","other-group"),r.append("div").attr("class",function(e,t){return e.redHex?"color-block":"color-block empty-block"}).style("background-color",function(e,t){if(e.redHex)return e.redHex}),r.append("div").attr("class",function(e,t){return e.whiteHex?"color-block":"color-block empty-block"}).style("background-color",function(e,t){if(e.whiteHex)return e.whiteHex}),r.append("div").attr("class",function(e,t){return e.blueHex?"color-block":"color-block empty-block"}).style("background-color",function(e,t){if(e.blueHex)return e.blueHex}),$other1Block=l.append("div").attr("class",function(e,t){return e.other1Hex?"color-block":"color-block empty-block"}).style("background-color",function(e,t){if(e.other1Hex)return e.other1Hex}),$other2Block=l.append("div").attr("class",function(e,t){return e.other2Hex?"color-block":"color-block empty-block"}).style("background-color",function(e,t){if(e.other2Hex)return e.other2Hex}),$other3Block=l.append("div").attr("class",function(e,t){return e.other3Hex?"color-block":"color-block empty-block"}).style("background-color",function(e,t){if(e.other3Hex)return e.other3Hex}),v.resize()},resize:function(){t.node().offsetWidth,k=t.node().offsetHeight-0-0;var e=h.length;return Math.floor(k/e*2),d3.selectAll(".color-block"),d3.selectAll(".color-block").style("height","8px"),d3.selectAll(".candidate").style("height","10px"),v},render:function(){return v},data:function(e){return arguments.length?(h=e,t.datum(h),v):h}};return v.init(),v});return t.length>1?t:t.pop()};
},{}],"ia5p":[function(require,module,exports) {
function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function e(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(a,!0).forEach(function(t){r(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}d3.selection.prototype.puddingBarChart=function(t){var r=this.nodes().map(function(t){var r=d3.select(t),n=null,a=null,c=r.datum();c=c.map(function(t){return e({},t,{percent_n:+t.percent_n,percent_y:+t.percent_y})});var o=0,i=0,p={init:function(){(n=r.selectAll(".year-row").data(c).enter().append("div").attr("class","year-row")).append("p").text(function(t){return t.year}).attr("class","year-label"),(a=n.append("div").attr("class","bar-container")).append("div").attr("class","bar-rwb"),a.append("div").attr("class","bar-rwbn").style("width",function(t){return"".concat(100*t.percent_n,"%")}).append("p").text(function(t){return"".concat((100*t.percent_n).toFixed(1),"%")}).style("left",function(t){return"".concat(100,"%")})},resize:function(){return o=r.node().offsetWidth-0-0,i=r.node().offsetHeight-0-0,$svg.attr("width",o+0+0).attr("height",i+0+0),p},render:function(){return $vis.attr("transform","translate(".concat(0,", ").concat(0,")")),p},data:function(t){return arguments.length?(c=t,r.datum(c),p):c}};return p.init(),p});return r.length>1?r:r.pop()};
},{}],"nyt1":[function(require,module,exports) {
"use strict";function e(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function n(n){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?e(a,!0).forEach(function(e){t(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):e(a).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=[],a=[],o=null;function c(e){return"Bill de Blasio"===e?"deblasio":"Rocky De La Fuente"===e?"delafuente":"Carol Moseley Braun"===e?"moseleybraun":e.split(" ")[1].toLowerCase().replace("'","")}function i(e,t){"allMin"==t&&(r=(r=e.filter(function(e){return"FALSE"==e.whiteMale})).map(function(e){return n({},e,{nameID:c(e.name)})}),a=d3.nest().key(function(e){return e.RWB}).sortKeys(d3.ascending).entries(r),o="all minority candidates"),"race"==t&&(r=(r=e.filter(function(e){return"N"==e.white})).map(function(e){return n({},e,{nameID:c(e.name)})}),a=d3.nest().key(function(e){return e.RWB}).sortKeys(d3.ascending).entries(r),o="non-White candidates"),"gender"==t&&(r=(r=e.filter(function(e){return"N"==e.male})).map(function(e){return n({},e,{nameID:c(e.name)})}),a=d3.nest().key(function(e){return e.RWB}).sortKeys(d3.ascending).entries(r),o="non-male candidates"),"minWomen"==t&&(r=(r=e.filter(function(e){return"N"==e.male&&"N"==e.white})).map(function(e){return n({},e,{nameID:c(e.name)})}),a=d3.nest().key(function(e){return e.RWB}).sortKeys(d3.ascending).entries(r),o="non-White & non-male candidates")}function s(e,n){i(e,n);var t=a[0].values.length+a[1].values.length,r=Math.round(a[0].values.length/t*100),c=d3.select("#".concat(n));d3.select("#".concat(n,"-sen")).html("<span>...".concat(r,"%</span> of ").concat(o));var s=c.selectAll(".colorGroup").data(a).enter().append("div").attr("class","colorGroup");s.append("p").text(function(e){return"N"===e.key?"Non-RWB (".concat(e.values.length," candidates)"):"RWB (".concat(e.values.length," candidates)")}),s.selectAll(".logo").data(function(e){return e.values}).enter().append("div").attr("class","logo").append("img").attr("src",function(e){return"assets/images/".concat(e.year,"-").concat(e.nameID,".jpg")})}var u={init:s};exports.default=u;
},{}],"TAPd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("./grid")),r=i(require("./load-data"));require("./pudding-chart/colors-chart"),require("./pudding-chart/bar");var t=i(require("./miniGrid"));function i(e){return e&&e.__esModule?e:{default:e}}var u=require("scrollama"),a=null,n=null,l=null,d=d3.select("#chart"),o=null,c=d3.select("#year-chart");function s(){l=d.datum(a).puddingColorChart()}function f(){o=c.datum(n).puddingBarChart()}function h(){}function p(){(0,r.default)(["colors.csv","years.csv"]).then(function(r){a=r[0],n=r[1],e.default.init(a),f(),t.default.init(a,"allMin"),t.default.init(a,"race"),t.default.init(a,"gender"),t.default.init(a,"minWomen"),s()}).catch(console.error)}var v={init:p,resize:h};exports.default=v;
},{"./grid":"K8rx","./load-data":"xZJw","./pudding-chart/colors-chart":"V7o5","./pudding-chart/bar":"ia5p","./miniGrid":"nyt1","scrollama":"vL5c"}],"v9Q8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[{image:"2018_02_stand-up",url:"2018/02/stand-up",hed:"The Structure of Stand-Up Comedy"},{image:"2018_04_birthday-paradox",url:"2018/04/birthday-paradox",hed:"The Birthday Paradox Experiment"},{image:"2018_11_boy-bands",url:"2018/11/boy-bands",hed:"Internet Boy Band Database"},{image:"2018_08_pockets",url:"2018/08/pockets",hed:"Women’s Pockets are Inferior"}],t=null;function n(e,t){var n=document.getElementsByTagName("script")[0],o=document.createElement("script");return o.src=e,o.async=!0,n.parentNode.insertBefore(o,n),t&&"function"==typeof t&&(o.onload=t),o}function o(t){var n=new XMLHttpRequest,o=Date.now(),r="https://pudding.cool/assets/data/stories.json?v=".concat(o);n.open("GET",r,!0),n.onload=function(){if(n.status>=200&&n.status<400){var o=JSON.parse(n.responseText);t(o)}else t(e)},n.onerror=function(){return t(e)},n.send()}function r(e){return"\n\t<a class='footer-recirc__article' href='https://pudding.cool/".concat(e.url,"' target='_blank' rel='noopener'>\n\t\t<img class='article__img' src='https://pudding.cool/common/assets/thumbnails/640/").concat(e.image,".jpg' alt='").concat(e.hed,"'>\n\t\t<p class='article__headline'>").concat(e.hed,"</p>\n\t</a>\n\t")}function a(){var e=window.location.href,n=t.filter(function(t){return!e.includes(t.url)}).slice(0,4).map(r).join("");d3.select(".pudding-footer .footer-recirc__articles").html(n)}function s(){o(function(e){t=e,a()})}var c={init:s};exports.default=c;
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=r(require("lodash.debounce")),i=r(require("./utils/is-mobile")),s=r(require("./utils/link-fix")),t=r(require("./graphic")),l=r(require("./footer"));function r(e){return e&&e.__esModule?e:{default:e}}var d=d3.select("body"),a=0;function u(){var e=d.node().offsetWidth;a!==e&&(a=e,t.default.resize())}function n(){if(d.select("header").classed("is-sticky")){var e=d.select(".header__menu"),i=d.select(".header__toggle");i.on("click",function(){var s=e.classed("is-visible");e.classed("is-visible",!s),i.classed("is-visible",!s)})}}function c(){(0,s.default)(),d.classed("is-mobile",i.default.any()),window.addEventListener("resize",(0,e.default)(u,150)),n(),t.default.init(),l.default.init()}c();
},{"lodash.debounce":"or4r","./utils/is-mobile":"WEtf","./utils/link-fix":"U9xJ","./graphic":"TAPd","./footer":"v9Q8"}]},{},["epB2"], null)