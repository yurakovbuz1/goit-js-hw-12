import{S as u,a as m,i as l}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();var f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function p(r,s){s.innerHTML=r.map(t=>`
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
      </li>`).join(""),f.refresh()}function g(r,s){r>1?s.innerHTML='<button class="load-button">Load more</button>':(console.log("HERE"),s.innerHTML="")}const y="43507759-1cdf1229fe6b1935ead7e315b",b='<span class="loader"></span>';let i=1;const c=15;let d;async function h(r,s,t){i=1,s.innerHTML=b;try{const{data:o}=await m("https://pixabay.com/api/",{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:i}});d=Math.ceil(o.totalHits/c),o.hits.length===0?(s.innerHTML="",l.error({message:"Sorry, there are no images matching your search query. Please try again!"})):(p(o.hits,s),g(d,t))}catch(o){l.error({message:o.message})}}const v=document.querySelector(".container"),L=document.querySelector(".searchTerm"),w=document.querySelector(".gallery");v.addEventListener("submit",M);const S=document.querySelector(".load-container");function M(r){r.preventDefault(),h(L.value,w,S)}
//# sourceMappingURL=commonHelpers.js.map
