import{A as S,a as w,S as T,i as q}from"./assets/vendor-CMKjw0WY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBth:document.querySelector("[data-menu-close]"),modalBtns:document.querySelectorAll(".modal-nav-link"),modal:document.querySelector("[data-modal]"),body:document.body};e.openModalBtn.addEventListener("click",t),e.closeModalBth.addEventListener("click",t),e.modalBtns.forEach(r=>{r.addEventListener("click",t)});function t(){e.modal.classList.toggle("is-open"),e.modal.classList.contains("is-open")?e.body.style.overflow="hidden":e.body.style.overflow=""}})();document.addEventListener("DOMContentLoaded",()=>{const e=[document.getElementById("theme-toggle"),document.getElementById("theme-toggle1")],t=document.querySelectorAll("[data-theme]"),r=localStorage.getItem("theme")||"light";t.forEach(n=>{n.setAttribute("data-theme",r)}),e.forEach(n=>{n.checked=r==="dark"}),e.forEach(n=>{n.addEventListener("change",()=>{const o=n.checked?"dark":"light";t.forEach(s=>{s.setAttribute("data-theme",o)}),e.forEach(s=>{s.checked=n.checked}),localStorage.setItem("theme",o)})})});const I="/command-project-portfolio/assets/10project2x-BvMudFNk.png",O="/command-project-portfolio/assets/11project2x-lUoKRskF.png",P="/command-project-portfolio/assets/12project2x-BDH3GoOm.png",C="/command-project-portfolio/assets/9project2x-CjkCjDSS.png",A="/command-project-portfolio/assets/8project2x-Beekt7gy.png",N="/command-project-portfolio/assets/7project2x-BnjIUlir.png",D="/command-project-portfolio/assets/6project2x-Co-_3AM6.png",R="/command-project-portfolio/assets/5project2x-BqgwRwZ7.png",$="/command-project-portfolio/assets/2project2x-CpyD6xhI.png",F="/command-project-portfolio/assets/1project2x-C868exiM.png",V="data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='752'%20height='32'%20viewBox='0%200%20752%2032'%3e%3csymbol%20id='icon-arrow-narrow-right'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke-width='2.6667'%20stroke-miterlimit='4'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M26.667%2016h-21.333'%3e%3c/path%3e%3cpath%20fill='none'%20stroke-width='2.6667'%20stroke-miterlimit='4'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M13.333%2024l-8-8%208-8'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-iconarrow'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='3.5556'%20d='M3.111%2028.889l25.778-25.778M28.889%203.111h-24M28.889%203.111v24'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-arrow-narrow-right-1'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke-width='2.6667'%20stroke-miterlimit='4'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M5.333%2016h21.333'%3e%3c/path%3e%3cpath%20fill='none'%20stroke-width='2.6667'%20stroke-miterlimit='4'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M18.667%208l8%208-8%208'%3e%3c/path%3e%3c/symbol%3e%3c/svg%3e",H=document.querySelector(".wrapContent"),y=document.querySelector(".projectBtnLoad"),K=[{src:I,name:"power pulse webservice"},{src:O,name:"wallet webservice"},{src:P,name:"English excellence webservice"},{src:C,name:"green harvest online store"},{src:A,name:"vyshyvanka vibes Landing Page"},{src:N,name:"mimino website"},{src:D,name:"chego jewelry website"},{src:R,name:"fruitbox online store"},{src:$,name:"energy flow webservice"},{src:F,name:"starlight studio landing page"}];let a=0;const U=e=>`
    <li class="wrapContentItem">
      <img src="${e.src}" heigth="500" width="1000" alt="">
      <p class="projectTextTech">react, java script, node js, git</p>
        <div class="wrapBtnText" data-theme="light">
                        <p class="projectTextTitle">${e.name}</p>
                        <a type="button" target="_blank" rel="nofollow" href="https://www.w3schools.com/js/default.asp"
                            class="projectBtnVisit">visit<svg class="arrSvg" height="24" width="24">
                                <use href="${V}#icon-iconarrow"></use>
                            </svg></a>
                    </div>
    </li>`,z=e=>{let t=10,r=2;a<t&&(H.innerHTML+=K.slice(a,a+r).map(n=>U(n)).join(""),a+=r,a>=t&&(y.style.display="none"))};y.addEventListener("click",z);document.addEventListener("DOMContentLoaded",()=>{new S("#questions-list",{duration:250,showMultiple:!1}).open(0)});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contact-form"),t=document.getElementById("modal-together"),r=document.getElementById("modal-message"),n=document.querySelector(".close"),o=document.body,s=c=>{c.target===t&&(console.log("Outside click detected"),m())},i=c=>{console.log("Keydown event detected: ",c.key),c.key==="Escape"&&m()},m=()=>{console.log("Modal is closing"),t.classList.remove("is-open"),o.style.overflow="",E()},j=()=>{console.log("Adding event listeners"),n.addEventListener("click",m),window.addEventListener("click",s),window.addEventListener("keydown",i)},E=()=>{console.log("Removing event listeners"),n.removeEventListener("click",m),window.removeEventListener("click",s),window.removeEventListener("keydown",i)},f=()=>{console.log("Opening modal"),t.classList.add("is-open"),o.style.overflow="hidden",j()};e.addEventListener("submit",async c=>{c.preventDefault();const x=e.email.value.trim(),M=e.message.value.trim();try{(await fetch("https://portfolio-js.b.goit.study/api-docs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:x,message:M})})).ok?(r.innerHTML=`
          <h3 class="modal-success">Thank you for your interest in cooperation!</h3>
          <p class="modal-info">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>`,e.reset()):r.textContent="There was an error with your request. Please try again.",f()}catch{r.textContent="An error occurred. Please try again.",f()}})});w.defaults.baseURL="https://portfolio-js.b.goit.study/api/";const p=document.querySelector(".btn-next"),u=document.querySelector(".btn-prev"),g=document.querySelector(".error-message"),_=document.querySelector(".reviews-navigation"),h=document.querySelector(".carousel-wrapper");let v;window.addEventListener("resize",l);document.addEventListener("keydown",e=>{e.key==="ArrowRight"?k():e.key==="ArrowLeft"&&b()});h.addEventListener("touchmove",L);h.addEventListener("mousemove",L);function k(){d.slideNext(),l()}function b(){d.slidePrev(),l()}function l(){d.isBeginning?u.classList.add("button-disabled"):u.classList.remove("button-disabled"),d.isEnd?p.classList.add("button-disabled"):p.classList.remove("button-disabled")}p.addEventListener("click",k);u.addEventListener("click",b);const d=new T(".swiper",{slidesPerView:1,spaceBetween:16,speed:800,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2}}});async function G(){try{return(await w("/reviews")).data}catch{g.classList.remove("hidden"),_.classList.add("hidden"),Z();return}}async function J(){const e=await G();if(e.length===0){g.classList.remove("hidden");return}h.insertAdjacentHTML("beforeend",W(e)),d.update(),l()}J();function W(e){return e.map(({review:t,author:r,avatar_url:n})=>`
      <div class="swiper-slide feedback-item">
        <p class="feedback-text">${t}</p>
        <div class="feedback-info">
          <img src="${n}" alt="${r}" class="feedback-avatar" />
          <span class="feedback-author">${r}</span>
        </div>
      </div>
    `).join("")}function Z(){const e=new IntersectionObserver(Q,{threshold:1});return e.observe(g),e}function Q(e){e.forEach(t=>{t.isIntersecting&&q.error({message:"Reviews not found! Please try again later.",position:"topRight"})})}function L(){clearTimeout(v),v=setTimeout(l,200)}
//# sourceMappingURL=index.js.map
