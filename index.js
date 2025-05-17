import{a as g,S as d,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function h(i){const r="39362168-c2a5e7696671cec7e0c5dcb17",l="https://pixabay.com/api/";return new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),g.get(l,{params:{key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data).catch(s=>s.message)}const u=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=new d(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:.8,overlay:!0});y.on("show.simplelightbox",function(){});function L(i){const r=i.map(({largeImageURL:l,webformatURL:s,tags:e,likes:t,views:o,comments:p,downloads:f})=>`<li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${e}"
            width="360"
            height="200"
          />
          <ul class="gallery-info-list">
            <li class="gallery-list-item">Likes
              <p class="gallery-item-title">${t}</p>
            </li>
            <li class="gallery-list-item">Views
              <p class="gallery-item-title">${o}</p>
            </li>
            <li class="gallery-list-item">Comments
              <p class="gallery-item-title">${p}</p>
            </li>
            <li class="gallery-list-item">Downloads
              <p class="gallery-item-title">${f}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");u.innerHTML=r,y.refresh()}function w(){u.innerHTML=""}function b(){m.classList.remove("js-hidden")}function n(){m.classList.add("js-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements.search.value.trim();if(r.length===0){a.error({title:"Error",message:"Please enter your request"});return}w(),b(),h(r).then(l=>{if(l.hits.length===0)throw new Error("Error");n(),L(l.hits)}).catch(()=>a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})).finally(()=>n()),c.reset()});
//# sourceMappingURL=index.js.map
