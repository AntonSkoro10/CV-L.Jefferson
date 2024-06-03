import{A as h,S as v}from"./assets/vendor-2e4332b5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const c=document.querySelector(".mobile-menu"),u=document.querySelector(".open-mobile-menu"),p=document.querySelector(".close-btn-menu"),L=document.querySelectorAll(".mob-menu-link");c&&u&&p?(u.addEventListener("click",()=>{c.classList.add("is-open"),c.classList.remove("is-closed")}),p.addEventListener("click",()=>{c.classList.add("is-closed"),c.classList.remove("is-open")}),window.addEventListener("click",function(e){!c.contains(e.target)&&!u.contains(e.target)&&(c.classList.add("is-closed"),c.classList.remove("is-open"))}),L.forEach(e=>{e.addEventListener("click",()=>{c.classList.add("is-closed"),c.classList.remove("is-open")})})):console.error("Не знайдено всі необхідні елементи");const w=document.querySelector("#js-projects-list"),y=document.querySelector("#js-projects-btn");function b(){let e=0;const s=w.children,o=Array.from(s);if(o.forEach(n=>{e<3&&!n.classList.contains("visible")&&(n.classList.add("visible"),e++)}),o.every(n=>n.classList.contains("visible"))){y.classList.add("hidden");return}}y.addEventListener("click",b);document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".accordion-container.faq-list"),s=e.querySelectorAll(".faq-item.ac");if(s.length>0){const o=s[0];o.classList.add("active"),o.querySelector(".faq-text-box.ac-panel").style.display="block"}new h(e,{openOnInit:[0],onOpen:function(o){o.classList.add("active")},onClose:function(o){o.classList.remove("active")}})});const m=document.querySelector(".swiper-button-next"),f=document.querySelector(".swiper-button-prev");async function g(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){return alert("Fetch error: "+e.message),console.error("Fetch error:",e),null}}function S(){new v(".swiper",{slidesPerView:1,slidesPerGroup:1,loop:!1,navigation:{nextEl:m,prevEl:f},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,breakpoints:{768:{slidesPerView:2}},on:{reachEnd:function(){m.classList.add("disabled")},reachBeginning:function(){f.classList.add("disabled")},fromEdge:function(){m.classList.remove("disabled"),f.classList.remove("disabled")}}})}function E(e){return`<li class="swiper-slide review">
    <p class="review-text">${e.review}</p>
    <div class="swiper-img-container">
      <img class="reviews-img" src="${e.avatar_url}" alt="Avatar">
      <h3 class="name">${e.author}</h3>
    </div>
  </li>`}async function q(e,s){const o=document.querySelector("#reviews-list");if(!o){console.error("Element #reviews-list not found");return}const n=await g();if(!n){o.innerHTML="Not found";return}const t=n.map(r=>s(r)).join("");o.innerHTML=t,e()}q(S,E);const i={input:document.querySelector(".co-work-user"),form:document.querySelector(".co-work-form"),textarea:document.querySelector(".co-work-message"),messageBtn:document.querySelector(".co-work-btn"),modalContainer:document.querySelector(".modal-container")},M=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function k(e){const s=M.test(e),o=i.input.parentNode,n=o.querySelector(".error-message");if(!s)i.input.classList.add("invalid"),n||P(o,"Please enter a valid email address.");else{i.input.classList.remove("invalid"),n&&n.remove();const t=a({title:"Thank you for your interest in cooperation!",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch."});i.modalContainer.insertAdjacentHTML("beforeend",t),document.querySelector("#myModal").classList.add("show"),l()}}i.form.addEventListener("submit",A);function A(e){e.preventDefault();const s=i.input.value,o=i.textarea.value;if(!k(s)){i.input.classList.add("invalid");return}fetch("https://portfolio-js.b.goit.study/api-docs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,message:o})}).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{if(t.success){i.form.reset();const r=a({title:"Thank you for your interest in cooperation!",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch."});i.modalContainer.insertAdjacentHTML("beforeend",r),document.querySelector("#myModal").classList.add("show"),l()}else{const r=a({title:"Submission Error",message:t.error||"An error occurred. Please try again later."});i.modalContainer.insertAdjacentHTML("beforeend",r),document.querySelector("#myModal").classList.add("show"),l()}}).catch(t=>{const r=a({title:"Submission Error",message:"An error occurred. Please try again later."});i.modalContainer.insertAdjacentHTML("beforeend",r),document.querySelector("#myModal").classList.add("show"),l()})}function a({title:e,message:s}){return`
      <div id="myModal" class="modal">
        <div class="modal-content">
          <button class="modal-closeBtn"><svg class="modal-closeBtn-icon" width="24" height="24">
          <use href="/CV-L.Jefferson/assets/icon-593cbc5f.svg#icon-close"></use>
          </svg></button>
          <h3 class="modal-title">${e}</h3>
          <p class="modal-message">${s}</p>
        </div>
      </div>
    `}function l(){document.querySelector(".modal-closeBtn").addEventListener("click",T)}function T(){const e=document.querySelector("#myModal");e.classList.remove("show"),e.remove()}function P(e,s){const o=e.querySelector(".error-message"),n=i.input;if(o)o.textContent=s;else{const t=document.createElement("span");t.className="error-message",t.textContent=s,n.insertAdjacentElement("afterend",t)}}
//# sourceMappingURL=commonHelpers.js.map
