!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector(".form");function a(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}function l(t){var n=t.position,o=t.delay;e(i).Notify.failure("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))}function c(t){var n=t.position,o=t.delay;e(i).Notify.success("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}u.addEventListener("submit",(function(e){e.preventDefault();for(var t={firstDelay:Number(u.querySelector('input[name="delay"]').value),delayStep:Number(u.querySelector('input[name="step"]').value),amount:Number(u.querySelector('input[name="amount"]').value),btnSubmit:u.querySelector("button")},n=t.firstDelay,o=1;o<=t.amount;o+=1)a(o,n+=t.delayStep).then(l).catch(c),u.reset()}))}();
//# sourceMappingURL=03-promises.4a43b98e.js.map