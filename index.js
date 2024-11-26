import{A as S,a as y,S as I,i as q}from"./assets/vendor-_vbJqNT9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBth:document.querySelector("[data-menu-close]"),modalBtns:document.querySelectorAll(".modal-nav-link"),modal:document.querySelector("[data-modal]"),body:document.body};e.openModalBtn.addEventListener("click",t),e.closeModalBth.addEventListener("click",t),e.modalBtns.forEach(r=>{r.addEventListener("click",t)});function t(){e.modal.classList.toggle("is-open"),e.modal.classList.contains("is-open")?e.body.style.overflow="hidden":e.body.style.overflow=""}})();document.addEventListener("DOMContentLoaded",()=>{const e=[document.getElementById("theme-toggle"),document.getElementById("theme-toggle1")],t=document.querySelectorAll("[data-theme]"),r=localStorage.getItem("theme")||"light";t.forEach(n=>{n.setAttribute("data-theme",r)}),e.forEach(n=>{n.checked=r==="dark"}),e.forEach(n=>{n.addEventListener("change",()=>{const o=n.checked?"dark":"light";t.forEach(s=>{s.setAttribute("data-theme",o)}),e.forEach(s=>{s.checked=n.checked}),localStorage.setItem("theme",o)})})});const O="/command-project-portfolio/assets/10project2x-BvMudFNk.png",P="/command-project-portfolio/assets/11project2x-lUoKRskF.png",T="/command-project-portfolio/assets/12project2x-BDH3GoOm.png",C="/command-project-portfolio/assets/9project2x-CjkCjDSS.png",A="/command-project-portfolio/assets/8project2x-Beekt7gy.png",N="/command-project-portfolio/assets/7project2x-BnjIUlir.png",D="/command-project-portfolio/assets/6project2x-Co-_3AM6.png",R="/command-project-portfolio/assets/5project2x-BqgwRwZ7.png",$="/command-project-portfolio/assets/2project2x-CpyD6xhI.png",F="/command-project-portfolio/assets/1project2x-C868exiM.png",H=document.querySelector(".LoadImg"),w=document.querySelector(".projectBtnLoad"),K=[{src:O,name:"power pulse webservice"},{src:P,name:"wallet webservice"},{src:T,name:"English excellence webservice"},{src:C,name:"green harvest online store"},{src:A,name:"vyshyvanka vibes Landing Page"},{src:N,name:"mimino website"},{src:D,name:"chego jewelry website"},{src:R,name:"fruitbox online store"},{src:$,name:"energy flow webservice"},{src:F,name:"starlight studio landing page"}];let i=0;const V=e=>`
  <div class="wrapLoadImg">
  <ul class="wrapCarcass">
  <li><img class="imgWrap" src="${e.src}" heigth="500" width="1000" alt=""></li>
  <li><a class="siteLoad" href="https://www.edu.goit.global/uk/homepage" target="_blank" rel="nofollow"><p class="loadText">${e.name}</p></a></li>
  </ul>
</div>`,U=e=>{let t=10,r=2;i<t&&(H.innerHTML+=K.slice(i,i+r).map(n=>V(n)).join(""),i+=r,i>=t&&(w.style.display="none"))};w.addEventListener("click",U);document.addEventListener("DOMContentLoaded",()=>{new S("#questions-list",{duration:250,showMultiple:!1}).open(0)});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contact-form"),t=document.getElementById("modal-together"),r=document.getElementById("modal-message"),n=document.querySelector(".close"),o=document.body,s=a=>{a.target===t&&(console.log("Outside click detected"),m())},c=a=>{console.log("Keydown event detected: ",a.key),a.key==="Escape"&&m()},m=()=>{console.log("Modal is closing"),t.classList.remove("is-open"),o.style.overflow="",j()},E=()=>{console.log("Adding event listeners"),n.addEventListener("click",m),window.addEventListener("click",s),window.addEventListener("keydown",c)},j=()=>{console.log("Removing event listeners"),n.removeEventListener("click",m),window.removeEventListener("click",s),window.removeEventListener("keydown",c)},v=()=>{console.log("Opening modal"),t.classList.add("is-open"),o.style.overflow="hidden",E()};e.addEventListener("submit",async a=>{a.preventDefault();const M=e.email.value.trim(),x=e.message.value.trim();try{(await fetch("https://portfolio-js.b.goit.study/api-docs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:M,message:x})})).ok?(r.innerHTML=`
          <h3 class="modal-success">Thank you for your interest in cooperation!</h3>
          <p class="modal-info">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>`,e.reset()):r.textContent="There was an error with your request. Please try again.",v()}catch{r.textContent="An error occurred. Please try again.",v()}})});y.defaults.baseURL="https://portfolio-js.b.goit.study/api/";const u=document.querySelector(".btn-next"),p=document.querySelector(".btn-prev"),g=document.querySelector(".error-message"),z=document.querySelector(".reviews-navigation"),f=document.querySelector(".carousel-wrapper");let h;window.addEventListener("resize",l);document.addEventListener("keydown",e=>{e.key==="ArrowRight"?L():e.key==="ArrowLeft"&&b()});f.addEventListener("touchmove",k);f.addEventListener("mousemove",k);function L(){d.slideNext(),l()}function b(){d.slidePrev(),l()}function l(){d.isBeginning?p.classList.add("button-disabled"):p.classList.remove("button-disabled"),d.isEnd?u.classList.add("button-disabled"):u.classList.remove("button-disabled")}u.addEventListener("click",L);p.addEventListener("click",b);const d=new I(".swiper",{slidesPerView:1,spaceBetween:16,speed:800,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2}}});async function W(){try{return(await y("/reviews")).data}catch{g.classList.remove("hidden"),z.classList.add("hidden"),J();return}}async function _(){const e=await W();if(e.length===0){g.classList.remove("hidden");return}f.insertAdjacentHTML("beforeend",G(e)),d.update(),l()}_();function G(e){return e.map(({review:t,author:r,avatar_url:n})=>`
      <div class="swiper-slide feedback-item">
        <p class="feedback-text">${t}</p>
        <div class="feedback-info">
          <img src="${n}" alt="${r}" class="feedback-avatar" />
          <span class="feedback-author">${r}</span>
        </div>
      </div>
    `).join("")}function J(){const e=new IntersectionObserver(Z,{threshold:1});return e.observe(g),e}function Z(e){e.forEach(t=>{t.isIntersecting&&q.error({message:"Reviews not found! Please try again later.",position:"topRight"})})}function k(){clearTimeout(h),h=setTimeout(l,200)}
//# sourceMappingURL=index.js.map
