var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n),n("7Y9D8");const r={form:document.querySelector("form.form"),step:document.querySelector('[name="step"]'),delay:document.querySelector('[name="delay"]'),amount:document.querySelector('[name="amount"]')};r.form.addEventListener("click",(function(e){e.preventDefault();Number(r.delay.value),Number(r.step.value);let o=Number(r.amount.value);for(let e=1;e<=o;e+=1){}(t=1500,new Promise(((e,o)=>{const n=Math.random()>.3;setTimeout((()=>{n?resolve({position:e,delay:t}):o({position:e,delay:t})}),t)}))).then((({position:e,delay:o})=>{Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}));var t}));
//# sourceMappingURL=03-promises.89185ee3.js.map
