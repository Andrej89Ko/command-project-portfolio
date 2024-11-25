import{A as L,a as p,S as E,i as k}from"./assets/vendor-_vbJqNT9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBth:document.querySelector("[data-menu-close]"),modalBtns:document.querySelectorAll(".modal-nav-link"),modal:document.querySelector("[data-modal]"),body:document.body};e.openModalBtn.addEventListener("click",o),e.closeModalBth.addEventListener("click",o),e.modalBtns.forEach(r=>{r.addEventListener("click",o)});function o(){e.modal.classList.toggle("is-open"),e.modal.classList.contains("is-open")?e.body.style.overflow="hidden":e.body.style.overflow=""}})();document.addEventListener("DOMContentLoaded",()=>{const e=[document.getElementById("theme-toggle"),document.getElementById("theme-toggle1")],o=document.querySelectorAll("[data-theme]"),r=localStorage.getItem("theme")||"light";o.forEach(n=>{n.setAttribute("data-theme",r)}),e.forEach(n=>{n.checked=r==="dark"}),e.forEach(n=>{n.addEventListener("change",()=>{const t=n.checked?"dark":"light";o.forEach(s=>{s.setAttribute("data-theme",t)}),e.forEach(s=>{s.checked=n.checked}),localStorage.setItem("theme",t)})})});document.addEventListener("DOMContentLoaded",()=>{new L("#questions-list",{duration:250,showMultiple:!1}).open(0)});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contact-form"),o=document.getElementById("modal"),r=document.getElementById("modal-message"),n=document.querySelector(".close"),t=document.body,s=()=>{o.classList.remove("is-open"),t.style.overflow=""};n.addEventListener("click",s),window.addEventListener("click",a=>{a.target===o&&s()}),window.addEventListener("keydown",a=>{a.key==="Escape"&&s()}),e.addEventListener("submit",async a=>{a.preventDefault();const g=e.email.value.trim(),w=e.message.value.trim();try{(await fetch("https://portfolio-js.b.goit.study/api-docs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:g,message:w})})).ok?(r.innerHTML=`
          <h3 class="modal-success">Thank you for your interest in cooperation!</h3>
          <p class="modal-info">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>`,e.reset()):r.textContent="There was an error with your request. Please try again.",o.classList.add("is-open"),t.style.overflow="hidden"}catch{r.textContent="An error occurred. Please try again.",o.classList.add("is-open"),t.style.overflow="hidden"}})});p.defaults.baseURL="https://portfolio-js.b.goit.study/api/";const c=document.querySelector(".btn-next"),l=document.querySelector(".btn-prev"),u=document.querySelector(".error-message"),M=document.querySelector(".reviews-navigation"),m=document.querySelector(".carousel-wrapper");let f;window.addEventListener("resize",d);document.addEventListener("keydown",e=>{e.key==="ArrowRight"?h():e.key==="ArrowLeft"&&y()});m.addEventListener("touchmove",v);m.addEventListener("mousemove",v);function h(){i.slideNext(),d()}function y(){i.slidePrev(),d()}function d(){i.isBeginning?l.classList.add("button-disabled"):l.classList.remove("button-disabled"),i.isEnd?c.classList.add("button-disabled"):c.classList.remove("button-disabled")}c.addEventListener("click",h);l.addEventListener("click",y);const i=new E(".swiper",{slidesPerView:1,spaceBetween:16,speed:800,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2}}});async function S(){try{return(await p("/reviews")).data}catch{u.classList.remove("hidden"),M.classList.add("hidden"),q();return}}async function B(){const e=await S();if(e.length===0){u.classList.remove("hidden");return}m.insertAdjacentHTML("beforeend",P(e)),i.update(),d()}B();function P(e){return e.map(({review:o,author:r,avatar_url:n})=>`
      <div class="swiper-slide feedback-item">
        <p class="feedback-text">${o}</p>
        <div class="feedback-info">
          <img src="${n}" alt="${r}" class="feedback-avatar" />
          <span class="feedback-author">${r}</span>
        </div>
      </div>
    `).join("")}function q(){const e=new IntersectionObserver(O,{threshold:1});return e.observe(u),e}function O(e){e.forEach(o=>{o.isIntersecting&&k.error({message:"Reviews not found! Please try again later.",position:"topRight"})})}function v(){clearTimeout(f),f=setTimeout(d,200)}
//# sourceMappingURL=index.js.map
