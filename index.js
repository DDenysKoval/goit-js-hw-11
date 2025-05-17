import{a as p,S as d,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(l){const r="39362168-c2a5e7696671cec7e0c5dcb17",i="https://pixabay.com/api/",s=new URLSearchParams({key:r,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0});return p.get(i,{params:s}).then(e=>e.data).catch(e=>e.message)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),m=new d(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:.8,overlay:!0});m.on("show.simplelightbox",function(){});function h(l){const r=l.map(({largeImageURL:i,webformatURL:s,tags:e,likes:t,views:o,comments:y,downloads:f})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
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
              <p class="gallery-item-title">${y}</p>
            </li>
            <li class="gallery-list-item">Downloads
              <p class="gallery-item-title">${f}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");c.innerHTML=r,m.refresh()}function L(){c.innerHTML=""}function w(){u.classList.remove("js-hidden")}function b(){u.classList.add("js-hidden")}const n=document.querySelector(".form");n.addEventListener("submit",l=>{l.preventDefault();const r=l.target.elements.search.value.trim();if(r.length===0){a.error({title:"Error",message:"Please enter your request"});return}L(),w(),g(r).then(i=>{if(i.hits.length===0)throw new Error("Error");h(i.hits)}).catch(()=>a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})).finally(()=>b()),n.reset()});
//# sourceMappingURL=index.js.map
