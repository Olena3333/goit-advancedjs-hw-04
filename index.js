import{a as $,S as B,i as m}from"./assets/vendor-BTsqxyPz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const C="42438077-634a4b32cfcaa96ebaa8c4719",M="https://pixabay.com/api/",d=15;async function y(t,o){return(await $.get(M,{params:{key:C,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:d}})).data}const h=document.querySelector(".gallery"),g=document.querySelector(".loader"),p=document.querySelector(".load-more"),R={captionsData:"alt",captionDelay:250,captionPosition:"bottom"};function v(){const t=new B(".gallery a",R);return t.refresh=()=>{t.destroy(),L=v()},t}let L=v();function b(t){const o=t.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:q,downloads:_})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${a}">
                <img
                    class="gallery-image"
                    src="${s}"
                    alt="${e}"
                />
            </a>
            <div class="gallery-info">
                <div class="column">
                    <h2>Likes</h2>
                    <p>${r}</p>
                </div>
                <div class="column">
                    <h2>Views</h2>
                    <p>${n}</p>
                </div>
                <div class="column">
                    <h2>Comments</h2>
                    <p>${q}</p>
                </div>
                <div class="column">
                    <h2>Downloads</h2>
                    <p>${_}</p>
                </div>
            </div>
        </li>`).join("");h.insertAdjacentHTML("beforeend",o),L.refresh()}function x(){h.innerHTML=""}function S(){g.classList.add("is-active")}function w(){g.classList.remove("is-active")}function E(){p.classList.add("is-visible")}function P(){p.classList.remove("is-visible")}const f=document.querySelector(".form"),A=document.querySelector(".load-more"),I=document.querySelector(".gallery"),T="We're sorry, but you've reached the end of search results.";let l="",i=1,c=0;function O(){m.info({message:T,position:"topRight",messageColor:"#fff",backgroundColor:"#6366f1",timeout:3e3})}function u(t){m.error({message:t,position:"topRight",messageColor:"#fff",backgroundColor:"#EF4040",timeout:3e3})}f.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.elements["search-text"].value.trim();if(o){l=o,i=1,c=0,x(),P(),S();try{const s=await y(l,i);if(c=s.totalHits,s.hits.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}b(s.hits),i*d<c?E():O()}catch{u("Something went wrong. Please try again later.")}finally{w(),f.reset()}}});A.addEventListener("click",async()=>{i+=1,P(),S();try{const t=await y(l,i);b(t.hits);const o=I.firstElementChild;if(o){const{height:s}=o.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}i*d>=c?O():E()}catch{u("Something went wrong. Please try again later.")}finally{w()}});
//# sourceMappingURL=index.js.map
