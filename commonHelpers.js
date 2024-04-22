import{S as y,i as l,a as u}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();var f=new y(".gallery a",{captionsData:"alt",captionDelay:250});function L(s,t){t.innerHTML=s.map(a=>`
      <li class="gallery-item">
        <a href="${a.largeImageURL}">
          <img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}" />
        </a>
        <div class="info">
          <div class="field">
            <b class="label">Likes</b>
            <span class="value" data-likes>${a.likes}</span>
          </div>
          <div class="field">
            <b class="label">Views</b>
            <span class="value" data-views>${a.views}</span>
          </div>
          <div class="field">
            <b class="label">Commments</b>
            <span class="value" data-commments>${a.comments}</span>
          </div>
          <div class="field">
            <b class="label">Downloads</b>
            <span class="value" data-downloads>${a.downloads}</span>
          </div>
        </div>
      </li>`).join(""),f.refresh()}function w(s,t){const a=s.map(e=>`
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
      </li>`).join("");t.insertAdjacentHTML("beforeend",a),f.refresh()}function g(s,t,a){s===a?(t.innerHTML="",s>1&&l.info({message:"We're sorry, but you've reached the end of search results."})):s>1?t.innerHTML='<button class="load-button">Load more</button>':t.innerHTML=""}const p="43507759-1cdf1229fe6b1935ead7e315b",h='<span class="loader"></span>';let o=1;const c=15;let d,b;async function T(s,t,a){a.innerHTML="",o=1,b=s,t.innerHTML=h;try{const{data:e}=await u("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:o}});d=Math.ceil(e.totalHits/c),e.hits.length===0?(t.innerHTML="",l.error({message:"Sorry, there are no images matching your search query. Please try again!"})):(L(e.hits,t),g(d,a,o))}catch(e){l.error({message:e.message})}}async function $(s,t){o+=1,t.innerHTML=h;const a=s.children[0].getBoundingClientRect();try{const{data:e}=await u("https://pixabay.com/api/",{params:{key:p,q:b,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:o}});console.log(a.height),w(e.hits,s),g(d,t,o),window.scrollBy({top:a.height*2,behavior:"smooth"})}catch(e){l.error({message:e.message})}}const M=document.querySelector(".container"),H=document.querySelector(".searchTerm"),v=document.querySelector(".gallery");M.addEventListener("submit",S);const m=document.querySelector(".load-container");m.addEventListener("click",O);function S(s){s.preventDefault(),T(H.value,v,m)}function O(s){s.target.nodeName=="BUTTON"&&(s.preventDefault(),$(v,m))}
//# sourceMappingURL=commonHelpers.js.map
