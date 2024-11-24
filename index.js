import{A as R,a as L,S as O,i as T}from"./assets/vendor-_vbJqNT9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBth:document.querySelector("[data-menu-close]"),modalBtns:document.querySelectorAll(".modal-nav-link"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBth.addEventListener("click",t),e.modalBtns.forEach(n=>{n.addEventListener("click",t)});function t(){e.modal.classList.toggle("is-open")}})();const i={CSS_SELECTOR:{WRAP_CLASS:".wrap",TECH_SKILLS_UPPER_ID:"#tech-skills-upper",TECH_SKILLS_LOWER_ID:"#tech-skills-lower"},CSS_CLASS:{ITEM:"item",UPPER_DOTS:"upper-dots",LOWER_DOTS:"lower-dots",ITEM_UPPER:"item-upper",ITEM_LOWER:"item-lower"},SEPARATOR_SVG_LOC:"./img/icons.svg#icon-dot",PLACE:{UPPER:"upper",LOWER:"lower"},POSITION:{BEFORE_END:"beforeend",AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin"}},S=[{name:"HTML/CSS",link:"https://www.edu.goit.global/uk/learn/24554709/17039071/17039078/training"},{name:"JavaScript",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name:"React",link:"https://react.dev/"},{name:"Node.js",link:"https://nodejs.dev/"},{name:"React Native",link:"https://reactnative.dev/"},{name:"Typescript",link:"https://www.typescriptlang.org/"}],v=document.querySelector(i.CSS_SELECTOR.WRAP_CLASS),l=v.querySelector(i.CSS_SELECTOR.TECH_SKILLS_UPPER_ID),k=v.querySelector(i.CSS_SELECTOR.TECH_SKILLS_LOWER_ID),y=(e,t=i.PLACE.UPPER)=>e.map(n=>`<svg class=${t===i.PLACE.UPPER?i.CSS_CLASS.UPPER_DOTS:i.CSS_CLASS.LOWER_DOTS} width="8" height="8">
            <use href=${i.SEPARATOR_SVG_LOC}></use>
          </svg>
          <a target="_blank" href=${n.link}>
            <div class="item ${t===i.PLACE.UPPER?i.CSS_CLASS.ITEM_UPPER:i.CSS_CLASS.ITEM_LOWER}">${n.name}</div>
          </a>`),h=(e,t=!1)=>{let n=document.createElement("div"),r=document.createElement("div");return n.classList.add("items","marquee"),t&&n.classList.add("reverse"),r.classList.add("items","marquee"),t&&r.classList.add("reverse"),r.ariaHidden="true",n.innerHTML=e.join(""),r.innerHTML=e.join(""),l.insertAdjacentElement("beforeend",n),l.insertAdjacentElement("beforeend",r),{element1:n,element2:r}},g=(e,t,n=i.POSITION.BEFORE_END)=>{const{element1:r,element2:s}=t;e.insertAdjacentElement(n,r),e.insertAdjacentElement(n,s)},A=h(y(S)),M=h(y(S,i.PLACE.LOWER),!0);g(l,A);g(k,M);document.addEventListener("DOMContentLoaded",()=>{new R("#questions-list",{duration:250,showMultiple:!1}).open(0)});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contact-form"),t=document.getElementById("modal"),n=document.getElementById("modal-message"),r=document.querySelector(".close"),s=()=>{t.style.display="none"};r.addEventListener("click",s),window.addEventListener("click",o=>{o.target===t&&s()}),window.addEventListener("keydown",o=>{o.key==="Escape"&&s()}),e.addEventListener("submit",async o=>{o.preventDefault();const a=e.email.value,_=e.message.value;try{(await fetch("https://portfolio-js.b.goit.study/api-docs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,message:_})})).ok?(n.innerHTML='<h3 class="modal-success">Thank you for your interest in cooperation!</h3><p class="modal-info">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>',e.reset()):n.textContent="There was an error with your request. Please try again.",t.style.display="block"}catch{n.textContent="An error occurred. Please try again.",t.style.display="block"}}),r.addEventListener("click",()=>{t.style.display="none"}),window.addEventListener("click",o=>{o.target===t&&(t.style.display="none")})});L.defaults.baseURL="https://portfolio-js.b.goit.study/api/";const u=document.querySelector(".btn-next"),m=document.querySelector(".btn-prev"),p=document.querySelector(".error-message"),I=document.querySelector(".reviews-navigation"),E=document.querySelector(".carousel-wrapper");let f;window.addEventListener("resize",d);document.addEventListener("keydown",e=>{e.key==="ArrowRight"?w():e.key==="ArrowLeft"&&P()});E.addEventListener("touchmove",b);E.addEventListener("mousemove",b);function w(){c.slideNext(),d()}function P(){c.slidePrev(),d()}function d(){c.isBeginning?m.classList.add("button-disabled"):m.classList.remove("button-disabled"),c.isEnd?u.classList.add("button-disabled"):u.classList.remove("button-disabled")}u.addEventListener("click",w);m.addEventListener("click",P);const c=new O(".swiper",{slidesPerView:1,spaceBetween:16,speed:800,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2}}});async function B(){try{return(await L("/reviews")).data}catch{p.classList.remove("hidden"),I.classList.add("hidden"),D();return}}async function q(){const e=await B();if(e.length===0){p.classList.remove("hidden");return}E.insertAdjacentHTML("beforeend",N(e)),c.update(),d()}q();function N(e){return e.map(({review:t,author:n,avatar_url:r})=>`
      <div class="swiper-slide feedback-item">
        <p class="feedback-text">${t}</p>
        <div class="feedback-info">
          <img src="${r}" alt="${n}" class="feedback-avatar" />
          <span class="feedback-author">${n}</span>
        </div>
      </div>
    `).join("")}function D(){const e=new IntersectionObserver(j,{threshold:1});return e.observe(p),e}function j(e){e.forEach(t=>{t.isIntersecting&&T.error({message:"Reviews not found! Please try again later.",position:"topRight"})})}function b(){clearTimeout(f),f=setTimeout(d,200)}
//# sourceMappingURL=index.js.map