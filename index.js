import{A as C,a as h,S as R,i as O}from"./assets/vendor-_vbJqNT9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBth:document.querySelector("[data-menu-close]"),modalBtns:document.querySelectorAll(".modal-nav-link"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBth.addEventListener("click",t),e.modalBtns.forEach(o=>{o.addEventListener("click",t)});function t(){e.modal.classList.toggle("is-open")}})();const T="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-dot'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M24%200h-16c-4.418%200-8%203.582-8%208v16c0%204.418%203.582%208%208%208h16c4.418%200%208-3.582%208-8v-16c0-4.418-3.582-8-8-8z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-button-image'%20viewBox='0%200%2050%2032'%3e%3cpath%20fill='none'%20stroke-linejoin='miter'%20stroke-linecap='round'%20stroke-width='7.1111'%20d='M46.222%203.556l-21.333%2021.333-21.333-21.333'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-tel'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%2314c57c'%20style='stroke:%20var(--color1,%20%2314c57c)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M20%2014c0%201.061-0.421%202.078-1.172%202.828s-1.768%201.172-2.828%201.172c-1.061%200-2.078-0.421-2.828-1.172s-1.172-1.768-1.172-2.828c0-1.061%200.421-2.078%201.172-2.828s1.768-1.172%202.828-1.172c1.061%200%202.078%200.421%202.828%201.172s1.172%201.768%201.172%202.828v0z'%3e%3c/path%3e%3cpath%20fill='none'%20stroke='%2314c57c'%20style='stroke:%20var(--color1,%20%2314c57c)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M26%2014c0%209.523-10%2015-10%2015s-10-5.477-10-15c0-2.652%201.054-5.196%202.929-7.071s4.419-2.929%207.071-2.929c2.652%200%205.196%201.054%207.071%202.929s2.929%204.419%202.929%207.071v0z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-mail'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%2314c57c'%20style='stroke:%20var(--color1,%20%2314c57c)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M29%209v14c0%200.796-0.316%201.559-0.879%202.121s-1.326%200.879-2.121%200.879h-20c-0.796%200-1.559-0.316-2.121-0.879s-0.879-1.326-0.879-2.121v-14M29%209c0-0.796-0.316-1.559-0.879-2.121s-1.326-0.879-2.121-0.879h-20c-0.796%200-1.559%200.316-2.121%200.879s-0.879%201.326-0.879%202.121M29%209v0.324c0%200.512-0.131%201.016-0.381%201.463s-0.61%200.823-1.046%201.092l-10%206.153c-0.473%200.291-1.018%200.446-1.573%200.446s-1.1-0.154-1.573-0.446l-10-6.152c-0.436-0.269-0.796-0.644-1.046-1.092s-0.381-0.951-0.381-1.463v-0.325'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-map'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%2314c57c'%20style='stroke:%20var(--color1,%20%2314c57c)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M3%209c0%2011.045%208.955%2020%2020%2020h3c0.796%200%201.559-0.316%202.121-0.879s0.879-1.326%200.879-2.121v-1.829c0-0.688-0.468-1.288-1.136-1.455l-5.897-1.475c-0.587-0.147-1.203%200.073-1.564%200.556l-1.293%201.724c-0.376%200.501-1.025%200.723-1.613%200.507-2.183-0.803-4.165-2.070-5.81-3.714s-2.912-3.627-3.714-5.81c-0.216-0.588%200.005-1.237%200.507-1.613l1.724-1.293c0.484-0.361%200.703-0.979%200.556-1.564l-1.475-5.897c-0.081-0.324-0.268-0.612-0.532-0.818s-0.588-0.318-0.923-0.318h-1.829c-0.796%200-1.559%200.316-2.121%200.879s-0.879%201.326-0.879%202.121v3z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-close'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M32%203.223l-3.223-3.223-12.777%2012.777-12.777-12.777-3.223%203.223%2012.777%2012.777-12.777%2012.777%203.223%203.223%2012.777-12.777%2012.777%2012.777%203.223-3.223-12.777-12.777%2012.777-12.777z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",i={CSS_SELECTOR:{WRAP_CLASS:".wrap",TECH_SKILLS_UPPER_ID:"#tech-skills-upper",TECH_SKILLS_LOWER_ID:"#tech-skills-lower"},CSS_CLASS:{ITEM:"item",UPPER_DOTS:"upper-dots",LOWER_DOTS:"lower-dots",ITEM_UPPER:"item-upper",ITEM_LOWER:"item-lower"},SEPARATOR_SVG_LOC:`${T}#icon-dot`,PLACE:{UPPER:"upper",LOWER:"lower"},POSITION:{BEFORE_END:"beforeend",AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin"}},E=[{name:"HTML/CSS",link:"https://www.edu.goit.global/uk/learn/24554709/17039071/17039078/training"},{name:"JavaScript",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name:"React",link:"https://react.dev/"},{name:"Node.js",link:"https://nodejs.dev/"},{name:"React Native",link:"https://reactnative.dev/"},{name:"Typescript",link:"https://www.typescriptlang.org/"}],L=document.querySelector(i.CSS_SELECTOR.WRAP_CLASS),d=L.querySelector(i.CSS_SELECTOR.TECH_SKILLS_UPPER_ID),M=L.querySelector(i.CSS_SELECTOR.TECH_SKILLS_LOWER_ID),S=(e,t=i.PLACE.UPPER)=>e.map(o=>`<svg class=${t===i.PLACE.UPPER?i.CSS_CLASS.UPPER_DOTS:i.CSS_CLASS.LOWER_DOTS} width="8" height="8">
            <use href=${i.SEPARATOR_SVG_LOC}></use>
          </svg>
          <a target="_blank" href=${o.link}>
            <div class="item ${t===i.PLACE.UPPER?i.CSS_CLASS.ITEM_UPPER:i.CSS_CLASS.ITEM_LOWER}">${o.name}</div>
          </a>`),y=(e,t=!1)=>{let o=document.createElement("div"),r=document.createElement("div");return o.classList.add("items","marquee"),t&&o.classList.add("reverse"),r.classList.add("items","marquee"),t&&r.classList.add("reverse"),r.ariaHidden="true",o.innerHTML=e.join(""),r.innerHTML=e.join(""),d.insertAdjacentElement("beforeend",o),d.insertAdjacentElement("beforeend",r),{element1:o,element2:r}},w=(e,t,o=i.POSITION.BEFORE_END)=>{const{element1:r,element2:s}=t;e.insertAdjacentElement(o,r),e.insertAdjacentElement(o,s)},A=y(S(E)),I=y(S(E,i.PLACE.LOWER),!0);w(d,A);w(M,I);document.addEventListener("DOMContentLoaded",()=>{new C("#questions-list",{duration:250,showMultiple:!1}).open(0)});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contact-form"),t=document.getElementById("modal"),o=document.getElementById("modal-message"),r=document.querySelector(".close"),s=()=>{t.style.display="none"};r.addEventListener("click",s),window.addEventListener("click",n=>{n.target===t&&s()}),window.addEventListener("keydown",n=>{n.key==="Escape"&&s()}),e.addEventListener("submit",async n=>{n.preventDefault();const c=e.email.value,P=e.message.value;try{(await fetch("https://portfolio-js.b.goit.study/api-docs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,message:P})})).ok?(o.innerHTML='<h3 class="modal-success">Thank you for your interest in cooperation!</h3><p class="modal-info">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>',e.reset()):o.textContent="There was an error with your request. Please try again.",t.style.display="block"}catch{o.textContent="An error occurred. Please try again.",t.style.display="block"}}),r.addEventListener("click",()=>{t.style.display="none"}),window.addEventListener("click",n=>{n.target===t&&(t.style.display="none")})});h.defaults.baseURL="https://portfolio-js.b.goit.study/api/";const u=document.querySelector(".btn-next"),m=document.querySelector(".btn-prev"),p=document.querySelector(".error-message"),B=document.querySelector(".reviews-navigation"),v=document.querySelector(".carousel-wrapper");let f;window.addEventListener("resize",l);document.addEventListener("keydown",e=>{e.key==="ArrowRight"?k():e.key==="ArrowLeft"&&g()});v.addEventListener("touchmove",b);v.addEventListener("mousemove",b);function k(){a.slideNext(),l()}function g(){a.slidePrev(),l()}function l(){a.isBeginning?m.classList.add("button-disabled"):m.classList.remove("button-disabled"),a.isEnd?u.classList.add("button-disabled"):u.classList.remove("button-disabled")}u.addEventListener("click",k);m.addEventListener("click",g);const a=new R(".swiper",{slidesPerView:1,spaceBetween:16,speed:800,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2}}});async function j(){try{return(await h("/reviews")).data}catch{p.classList.remove("hidden"),B.classList.add("hidden"),N();return}}async function q(){const e=await j();if(e.length===0){p.classList.remove("hidden");return}v.insertAdjacentHTML("beforeend",x(e)),a.update(),l()}q();function x(e){return e.map(({review:t,author:o,avatar_url:r})=>`
      <div class="swiper-slide feedback-item">
        <p class="feedback-text">${t}</p>
        <div class="feedback-info">
          <img src="${r}" alt="${o}" class="feedback-avatar" />
          <span class="feedback-author">${o}</span>
        </div>
      </div>
    `).join("")}function N(){const e=new IntersectionObserver(D,{threshold:1});return e.observe(p),e}function D(e){e.forEach(t=>{t.isIntersecting&&O.error({message:"Reviews not found! Please try again later.",position:"topRight"})})}function b(){clearTimeout(f),f=setTimeout(l,200)}
//# sourceMappingURL=index.js.map
