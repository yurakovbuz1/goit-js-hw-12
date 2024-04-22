import{S as l,i}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();var c=new l(".gallery a",{captionsData:"alt",captionDelay:250});function d(o,r){r.innerHTML=o.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <div class="field">
            <b class="label">Likes</b>
            <span class="value" data-likes>${t.likes}</span>
          </div>
          <div class="field">
            <b class="label">Views</b>
            <span class="value" data-views>${t.views}</span>
          </div>
          <div class="field">
            <b class="label">Commments</b>
            <span class="value" data-commments>${t.comments}</span>
          </div>
          <div class="field">
            <b class="label">Downloads</b>
            <span class="value" data-downloads>${t.downloads}</span>
          </div>
        </div>
      </li>`).join(""),c.refresh()}const u="43507759-1cdf1229fe6b1935ead7e315b";function m(o,r){const t=new URLSearchParams({key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});r.innerHTML='<span class="loader"></span>',fetch(`https://pixabay.com/api/?${t}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{s.hits.length===0?(r.innerHTML="",i.error({message:"Sorry, there are no images matching your search query. Please try again!"})):d(s.hits,r)}).catch(s=>console.log("ERROR",s))}const f=document.querySelector(".container"),h=document.querySelector(".searchTerm"),g=document.querySelector(".gallery");f.addEventListener("submit",p);document.querySelector("gallery-item");function p(o){o.preventDefault(),m(h.value,g)}
//# sourceMappingURL=commonHelpers.js.map
