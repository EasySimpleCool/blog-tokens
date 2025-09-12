const c=({primary:o=!1,size:l="medium",backgroundColor:a,label:s,onClick:n})=>{const e=document.createElement("button");e.type="button",e.innerText=s,e.addEventListener("click",n);const i=o?"storybook-button--primary":"storybook-button--secondary";return e.className=["storybook-button",`storybook-button--${l}`,i].join(" "),e.style.backgroundColor=a,e},r=({user:o,onLogout:l,onLogin:a,onCreateAccount:s})=>{const n=document.createElement("header"),e=document.createElement("div");e.className="storybook-header",e.insertAdjacentHTML("afterbegin",`<div>
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
          fill="#FFF" />
        <path
          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
          fill="#555AB9" />
        <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
      </g>
    </svg>
    <h1>Acme</h1>
  </div>`);const t=document.createElement("div");if(o){const d=`<span class="welcome">Welcome, <b>${o.name}</b>!</span>`;t.innerHTML=d,t.appendChild(c({size:"small",label:"Log out",onClick:l}))}else t.appendChild(c({size:"small",label:"Log in",onClick:a})),t.appendChild(c({size:"small",label:"Sign up",onClick:s,primary:!0}));return e.appendChild(t),n.appendChild(e),n};export{r as c};
