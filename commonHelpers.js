import{S as y,i as l,a as u}from"./assets/vendor-6e0bf343.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();var f=new y(".gallery a",{captionsData:"alt",captionDelay:250});function L(s,a){a.innerHTML=s.map(t=>`
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
      </li>`).join(""),f.refresh()}function w(s,a){const t=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <div class="field">
            <b class="label">Likes</b>
            <span class="value" data-likes>${e.likes}</span>
          </div>
          <div class="field">
            <b class="label">Views</b>
            <span class="value" data-views>${e.views}</span>
          </div>
          <div class="field">
            <b class="label">Commments</b>
            <span class="value" data-commments>${e.comments}</span>
          </div>
          <div class="field">
            <b class="label">Downloads</b>
            <span class="value" data-downloads>${e.downloads}</span>
          </div>
        </div>
      </li>`).join("");a.insertAdjacentHTML("beforeend",t),f.refresh()}function g(s,a,t){s===t?(a.innerHTML="",s>1&&l.info({message:"We're sorry, but you've reached the end of search results."})):s>1?a.innerHTML='<button class="load-button">Load more</button>':a.innerHTML=""}const p="43507759-1cdf1229fe6b1935ead7e315b",b='<span class="loader"></span>';let o=1;const c=15;let d,h;async function T(s,a,t){t.innerHTML="",o=1,h=s,a.innerHTML=b;try{const{data:e}=await u("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:o}});d=Math.ceil(e.totalHits/c),e.hits.length===0?(a.innerHTML="",l.error({message:"Sorry, there are no images matching your search query. Please try again!"})):(L(e.hits,a),g(d,t,o))}catch(e){l.error({message:e.message})}}async function $(s,a){o+=1,a.innerHTML=b;const t=s.children[0].getBoundingClientRect();try{const{data:e}=await u("https://pixabay.com/api/",{params:{key:p,q:h,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:o}});w(e.hits,s),g(d,a,o),window.scrollBy({top:t.height*2,behavior:"smooth"})}catch(e){l.error({message:e.message})}}const M=document.querySelector(".container"),H=document.querySelector(".searchTerm"),v=document.querySelector(".gallery");M.addEventListener("submit",S);const m=document.querySelector(".load-container");m.addEventListener("click",O);function S(s){s.preventDefault(),T(H.value,v,m)}function O(s){s.target.nodeName=="BUTTON"&&(s.preventDefault(),$(v,m))}
//# sourceMappingURL=commonHelpers.js.map
