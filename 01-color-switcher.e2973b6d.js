!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],r=null;function o(){return Math.floor(Math.random()*n.length)}t.addEventListener("click",(function(){r=setInterval((function(){var t=function(){for(var t="#",e=0;e<6;e++)t+=n[o()];return t}();document.body.style.backgroundColor=t}),1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.e2973b6d.js.map
