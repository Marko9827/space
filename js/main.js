/* * PHLY - Versatile Coming Soon Template
*
* This is a premium product available exclusively at this address http://themeforest.net/user/madeon08/portfolio
*
* This file is minified/crypted only for the demo, you will find an expanded, commented and accurate file in your download pack.
*
* Thanks for your support!
*
* */
$(window).load(function(){"use strict";setTimeout(function(){$("#preloader").velocity({opacity:"0",complete:function(){$("#loading").velocity("fadeOut",{duration:1e3,easing:[.7,0,.3,1]})}})},1e3),setTimeout(function(){$(".global-overlay").velocity({translateX:"100%",opacity:"1"},{duration:1e3,easing:[.7,0,.3,1]}),$(".map-container").addClass("fadeInRight").removeClass("opacity-0")},1e3),setTimeout(function(){$("#left-side").velocity({opacity:"1",complete:function(){setTimeout(function(){$(".text-intro").each(function(e){!function(t){setTimeout(function(){$(t).addClass("animated-middle fadeInUp").removeClass("opacity-0")},150*e+150)}(this)})},0)}},{duration:1e3,easing:[.7,0,.3,1]})},1600)}),$(document).ready(function(){"use strict";function e(){t?($("body").addClass("scroll-touch"),$("a#open-more-info").on("click",function(){event.preventDefault();var e="#"+this.getAttribute("data-target");$("body").animate({scrollTop:$(e).offset().top},500)})):$("body").mCustomScrollbar({scrollInertia:150,axis:"y"})}$("a#open-more-info").on("click",function(){$(".overlay").toggleClass("skew-part"),$("#right-side").toggleClass("hide-right"),$("#close-more-info").toggleClass("hide-close"),$(".mCSB_scrollTools").toggleClass("mCSB_scrollTools-left"),setTimeout(function(){$("#mcs_container").mCustomScrollbar("scrollTo","#right-side",{scrollInertia:500,callbacks:!1})},350)}),$("button#close-more-info").on("click",function(){$(".overlay").addClass("skew-part"),$("#right-side").addClass("hide-right"),$("#close-more-info").addClass("hide-close"),$(".mCSB_scrollTools").removeClass("mCSB_scrollTools-left"),setTimeout(function(){$("#mcs_container").mCustomScrollbar("scrollTo","#right-side",{scrollInertia:500,callbacks:!1})},350)}),$(".expand-player").on("click",function(){$("#left-side").velocity({opacity:"0",complete:function(){$(".global-overlay").velocity({translateX:"-100%",opacity:"0"},{duration:1e3,easing:[.7,0,.3,1],delay:500})}})}),$(".compress-player").on("click",function(){$(".global-overlay").velocity({translateX:"100%",opacity:"1"},{duration:1e3,easing:[.7,0,.3,1],delay:0,complete:function(){$("#left-side").velocity({opacity:"1"})}})}),$(function(){$("body").bind("mousewheel",function(e){e.preventDefault();var t=this.scrollTop;this.scrollTop=t+e.deltaY*e.deltaFactor*-1})});var t=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);e(),window.matchMedia("(min-width: 1025px)").matches&&$(function(){$("[data-toggle='tooltip']").tooltip()}),$("#notifyMe").notifyMe(),function(){var e=document.querySelector("[data-dialog]"),t=document.getElementById(e.getAttribute("data-dialog")),o=new DialogFx(t);e.addEventListener("click",o.toggle.bind(o))}();var o=function(e){for(var t=function(e){for(var t=e.childNodes,o=t.length,i=[],n,l,a,r,c=0;o>c;c++)n=t[c],1===n.nodeType&&(l=n.children[0],a=l.getAttribute("data-size").split("x"),r={src:l.getAttribute("href"),w:parseInt(a[0],10),h:parseInt(a[1],10)},n.children.length>1&&(r.title=n.children[1].innerHTML),l.children.length>0&&(r.msrc=l.children[0].getAttribute("src")),r.el=n,i.push(r));return i},o=function d(e,t){return e&&(t(e)?e:d(e.parentNode,t))},i=function(e){e=e||window.event,e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.target||e.srcElement,i=o(t,function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()});if(i){for(var n=i.parentNode,a=i.parentNode.childNodes,r=a.length,c=0,s,d=0;r>d;d++)if(1===a[d].nodeType){if(a[d]===i){s=c;break}c++}return s>=0&&l(s,n),!1}},n=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var o=e.split("&"),i=0;i<o.length;i++)if(o[i]){var n=o[i].split("=");n.length<2||(t[n[0]]=n[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t},l=function(e,o,i,n){var l=document.querySelectorAll(".pswp")[0],a,r,c;if(c=t(o),r={galleryUID:o.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=c[e].el.getElementsByTagName("img")[0],o=window.pageYOffset||document.documentElement.scrollTop,i=t.getBoundingClientRect();return{x:i.left,y:i.top+o,w:i.width}}},n)if(r.galleryPIDs){for(var s=0;s<c.length;s++)if(c[s].pid===e){r.index=s;break}}else r.index=parseInt(e,10)-1;else r.index=parseInt(e,10);isNaN(r.index)||(i&&(r.showAnimationDuration=0),a=new PhotoSwipe(l,PhotoSwipeUI_Default,c,r),a.init())},a=document.querySelectorAll(e),r=0,c=a.length;c>r;r++)a[r].setAttribute("data-pswp-uid",r+1),a[r].onclick=i;var s=n();s.pid&&s.gid&&l(s.pid,a[s.gid-1],!0,!0)};o(".my-gallery")});


document.onkeypress = function (event) {  
event = (event || window.event);  
if (event.keyCode == 123) {  
return false;  
}  
}  
document.onmousedown = function (event) {  
event = (event || window.event);  
if (event.keyCode == 123) {  
return false;  
}  
}  
document.onkeydown = function (event) {  
event = (event || window.event);  
if (event.keyCode == 123) {  
return false;  
}  
} 
