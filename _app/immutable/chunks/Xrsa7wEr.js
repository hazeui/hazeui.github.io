import"./DsnmJJEf.js";import{e as Be,u as Te,r as ze,w as Oe,aV as Ae,p as j,aK as W,b as _,a as l,c as q,f as c,h as C,s as r,i as D,j as z,g as u,ah as V,aL as ye,aj as I,ai as ie,ae as we,ac as Y,m as ke,aJ as ae,n as g,t as A}from"./BFY6EQ5f.js";import{a as R,f as $e,d as J,s as De}from"./HPqJmYYT.js";import{p as se,i as F,r as le,s as je}from"./D-ke6G8t.js";import{d as qe,s as N,r as Fe,a as de,c as G,b as H}from"./wK8MQqj5.js";import{o as Ne}from"./DB3aSVVa.js";import"./69_IOA4Y.js";import{B as P}from"./DVIQWI0C.js";import{b as Re}from"./B60C9sMj.js";import{e as Me}from"./ZYcb0fS2.js";function ue(o,e,t){Be(()=>{var n=Te(()=>e(o,t?.())||{});if(t&&n?.update){var a=!1,s={};ze(()=>{var i=t();Oe(i),a&&Ae(s,i)&&(s=i,n.update(i))}),a=!0}if(n?.destroy)return()=>n.destroy()})}const be=o=>o?typeof o=="string"?document.querySelector(o):o:null;function Ue(o,e="body"){return be(e)?.appendChild(o),{update:t=>{t!==e&&(o.parentNode?.removeChild(o),be(t)?.appendChild(o))},destroy:()=>{o.parentNode?.removeChild(o)}}}const Ve=o=>{o.currentTarget==o.target&&close()};var We=c('<button class="i-pajamas:close absolute right-4 top-4 focus:bg-red" aria-label="close" tabindex="-1"></button>'),Ge=c('<dialog class="backdrop:bg-black/60"><div tabindex="-1"><!> <!></div></dialog>');function He(o,e){j(e,!0);let t=se(e,"closeIcon",3,!0);var n=W(),a=_(n);{var s=i=>{var d=Ge();d.__click=[Ve];var v=C(d),m=C(v);{var h=x=>{var $=We();$.__click=function(...L){e.close?.apply(this,L)},l(x,$)};F(m,x=>{t()&&x(h)})}var b=r(m,2);R(b,()=>e.children),D(v),D(d),ue(d,x=>Ue?.(x)),qe(d,()=>x=>x.showModal()),z(()=>N(v,1,`dialog ${e.class}`)),$e("close",d,function(...x){e.close?.apply(this,x)}),l(i,d)};F(a,i=>{e.open&&i(s)})}l(o,n),q()}J(["click"]);var Ke=c("<div></div>"),Je=c("<div></div>"),Qe=c("<div><!> <input/> <!></div>");function K(o,e){j(e,!0);let t=se(e,"class",3,""),n=le(e,["$$slots","$$events","$$legacy","iconL","iconR","class"]);var a=Qe(),s=C(a);{var i=h=>{var b=W(),x=_(b);{var $=p=>{var f=Ke();z(()=>N(f,1,G(e.iconL))),l(p,f)},L=p=>{var f=W(),y=_(f);R(y,()=>e.iconL),l(p,f)};F(x,p=>{typeof e.iconL=="string"?p($):p(L,!1)})}l(h,b)};F(s,h=>{e.iconL&&h(i)})}var d=r(s,2);Fe(d),de(d,()=>({...n}));var v=r(d,2);{var m=h=>{var b=W(),x=_(b);{var $=p=>{var f=Je();z(()=>N(f,1,G(e.iconR))),l(p,f)},L=p=>{var f=W(),y=_(f);R(y,()=>e.iconR),l(p,f)};F(x,p=>{typeof e.iconR=="string"?p($):p(L,!1)})}l(h,b)};F(v,h=>{e.iconR&&h(m)})}D(a),z(h=>N(a,1,h),[()=>G(t()?.includes("grinput")?t():`grinput ${t()}`)]),l(o,a),q()}const Ce=(o,e)=>{function t(n){o.contains(n.target)||e()}return document.addEventListener("click",t),{destroy(){document.removeEventListener("click",t)}}};var Xe=()=>null,Ye=c("<span></span>"),Ze=c('<li role="option"><!> </li>'),et=c('<ul role="listbox"></ul>'),tt=c('<div class="relative inline-flex first:children:w-full"><!> <!></div>');function oe(o,e){j(e,!0);let t=se(e,"placeholder",3,"Select Option"),n=V(!1),a=V(-1),s=V(-1);const i=()=>{I(n,!u(n)),u(n)&&I(s,u(a),!0)},d=p=>{p!==u(a)&&(I(a,p,!0),e.onChange?.(e.options[p].value)),I(n,!1)},v=p=>{switch(p.preventDefault(),p.key){case"Enter":d(u(s));break;case"Escape":I(n,!1);break;case"ArrowUp":I(s,u(s)>0?u(s)-1:0,!0);break;case"ArrowDown":I(s,u(s)<e.options.length-1?u(s)+1:0,!0);break}},h=`justify-start btn-ghost-eqmd transition-none ${e.optionCss?.includes("data-")?e.optionCss:`data-active:bg-mutedbg ${e.optionCss}`}`;var b=tt(),x=C(b);{let p=ye(()=>e.options[u(a)]?.name||t());P(x,je({"aria-haspopup":"listbox",get"aria-expanded"(){return u(n)},onclick:i,onkeydown:v,iconR:"ml-auto i-fa-solid:caret-down",get txt(){return u(p)}},()=>e.triggerProps))}var $=r(x,2);{var L=p=>{var f=et();H(f,"tabindex",-1),Me(f,23,()=>e.options,y=>y.value,(y,O,B)=>{var S=Ze();H(S,"tabindex",-1),S.__click=()=>d(u(B)),S.__keydown=[Xe];var M=C(S);{var U=E=>{var k=Ye();z(()=>N(k,1,G(u(O).iconL))),l(E,k)};F(M,E=>{u(O).iconL&&E(U)})}var w=r(M);D(S),z(()=>{H(S,"id",`option-${u(B)}`),H(S,"aria-selected",u(a)===u(B)),H(S,"data-active",u(s)===u(B)),N(S,1,G(h)),De(w,` ${u(O).name??""}`)}),l(y,S)}),D(f),z(()=>{N(f,1,`popover z-10 whitespace-nowrap ${e.dropdownCss}`),H(f,"aria-activedescendant",`option-${u(s)}`)}),l(p,f)};F($,p=>{u(n)&&p(L)})}D(b),ue(b,(p,f)=>Ce?.(p,f),()=>()=>I(n,!1)),l(o,b),q()}J(["click","keydown"]);function ve(o,e){j(e,!0);let t=V(ie(e.defaultValue)),n=ie([]);const a=d=>I(t,d,!0);we("tabs",{value:()=>e.value??u(t),setValue:e.setValue??a,tabLabels:()=>n,addTabLabel:d=>n.push(d)});var s=W(),i=_(s);R(i,()=>e.children),l(o,s),q()}const nt=(o,e,t)=>e(t.value);var ot=c('<button role="tab"><!></button>');function X(o,e){j(e,!0);const{value:t,setValue:n,addTabLabel:a}=Y("tabs");Ne(()=>a(e.value));var s=ot();s.__click=[nt,n,e];var i=C(s);R(i,()=>e.children),D(s),z(d=>H(s,"aria-selected",d),[()=>t()==e.value]),l(o,s),q()}J(["click"]);var at=c('<div role="tabpanel"><!></div>');function he(o,e){j(e,!0);const{value:t}=Y("tabs");var n=W(),a=_(n);{var s=i=>{var d=at(),v=C(d);R(v,()=>e.children),D(d),z(m=>H(d,"aria-labelledby",m),[()=>`tab-${t()}`]),l(i,d)};F(a,i=>{t()==e.value&&i(s)})}l(o,n),q()}const st=(o,e,t,n)=>{o.key=="ArrowLeft"&&u(e)!=0?t(n()[u(e)-1]):o.key=="ArrowRight"&&u(e)!=n().length-1&&t(n()[u(e)+1])};var lt=c('<div role="tablist" tabindex="-1"><!></div>');function fe(o,e){j(e,!0);const{value:t,tabLabels:n,setValue:a}=Y("tabs");let s=ye(()=>n().indexOf(t()));ke(()=>{t()||a(n()[0])});var i=lt();i.__keydown=[st,s,a,n];var d=C(i);R(d,()=>e.children),D(i),z(v=>N(i,1,v),[()=>G(e.class?.includes("tabs-")?e.class:`tabs ${e.class}`)]),l(o,i),q()}J(["keydown"]);var rt=c('<div class="relative inline-block"><!></div>');function ge(o,e){j(e,!0);let t=V(!1);const n=()=>I(t,!u(t)),a=()=>I(t,!1);we("dropdown",{open:()=>u(t),toggleDropdown:n,closeDropdown:a});var i=rt(),d=C(i);R(d,()=>e.children??ae),D(i),ue(i,(v,m)=>Ce?.(v,m),()=>a),l(o,i),q()}const it=(o,e,t,n)=>{if(!e())return;const a=t();a.length!==0&&(o.key=="ArrowDown"&&u(n)<a.length?(o.preventDefault(),I(n,u(n)+1),a[u(n)]?.focus()):o.key=="ArrowUp"&&u(n)>0&&(I(n,u(n)-1),a[u(n)]?.focus()))};var ct=c('<div role="menu" tabindex="0"><!></div>');function _e(o,e){j(e,!0);let t=se(e,"class",3,""),n=V(-1),a=V(null);const{open:s}=Y("dropdown"),i=()=>u(a)?Array.from(u(a).querySelectorAll('[role="menuitem"]')):[];ke(()=>{s()&&u(a)?.focus()});var d=W(),v=_(d);{var m=h=>{var b=ct();b.__keydown=[it,s,i,n];var x=C(b);R(x,()=>e.children??ae),D(b),Re(b,$=>I(a,$),()=>u(a)),z($=>N(b,1,$),[()=>G(t().includes("popover")?t():`popover ${t()}`)]),l(h,b)};F(v,h=>{s()&&h(m)})}l(o,d),q()}J(["keydown"]);var dt=c("<button><!></button>");function xe(o,e){j(e,!0);const{toggleDropdown:t}=Y("dropdown");let n=le(e,["$$slots","$$events","$$legacy","children","class"]);var a=dt();de(a,i=>({class:i,onclick:t,...n}),[()=>e.class?.includes("btn")?e.class:`btn ${e.class}`]);var s=C(a);R(s,()=>e.children??ae),D(a),l(o,a),q()}var ut=c("<button><!></button>");function T(o,e){j(e,!0);let t=le(e,["$$slots","$$events","$$legacy","children","class"]);const{closeDropdown:n}=Y("dropdown");var a=ut();de(a,()=>({onclick:n,class:`btn-ghost-eqmd focus:bg-input justify-start whitespace-nowrap ${e.class}`,role:"menuitem",...t}));var s=C(a);R(s,()=>e.children??ae),D(a),l(o,a),q()}var pt=c('<i class="i-mage:preview-fill"></i> Preview',1),mt=c('<i class="i-majesticons:code"></i> Code',1),bt=c("<!> <!>",1),vt=c("<div><!></div>"),ht=c('<i class="i-devicon:html5"></i> file.html',1),ft=c('<i class="i-devicon:svelte"></i> Svelte',1),gt=c('<i class="i-devicon:react"></i> React',1),_t=c('<i class="i-devicon:solidjs"></i> Solid',1),xt=c("<!> <!> <!>",1),yt=c('<!> <pre class="p5 rounded brd rounded-t-0 max-h-400px overflow-auto"><code> </code></pre>',1),wt=c("<!> <!> <!>",1);function vo(o,e){const t=le(e,["$$slots","$$events","$$legacy"]);let{demo:n,class:a=""}=t,s=ie({svelte:"",react:"",solid:"",html:""}),i=V(null);const d=m=>{if(I(i,m,!0),m==="svelte"&&!s.svelte&&n.code.svelte)s.svelte=n.code.svelte;else if(m==="react"&&!s.react&&n.code.react){const h=n.code.react;s.react=h.replaceAll("class=","className="),!s.solid&&!n.code.solid&&(s.solid=h.replaceAll("react","solid"))}else m==="solid"&&!s.solid&&n.code.solid?s.solid=n.code.solid:m==="html"&&!s.html&&n.code.html&&(s.html=n.code.html)},v=n.preview;ve(o,{defaultValue:"preview",children:(m,h)=>{var b=wt(),x=_(b);fe(x,{class:"tabs w-fit p1 !children:p2 !children:px3",children:(p,f)=>{var y=bt(),O=_(y);X(O,{value:"preview",children:(S,M)=>{var U=pt();g(),l(S,U)},$$slots:{default:!0}});var B=r(O,2);X(B,{value:"code",children:(S,M)=>{var U=mt();g(),l(S,U)},$$slots:{default:!0}}),l(p,y)},$$slots:{default:!0}});var $=r(x,2);he($,{value:"preview",children:(p,f)=>{var y=vt(),O=C(y);v(O,{}),D(y),z(B=>N(y,1,B),[()=>G(a.includes("demobox")?a:`demobox-center ${a}`)]),l(p,y)},$$slots:{default:!0}});var L=r($,2);he(L,{value:"code",children:(p,f)=>{ve(p,{get value(){return u(i)},setValue:d,children:(y,O)=>{var B=yt(),S=_(B);fe(S,{class:"tabs-line-primary brd rounded-t [&>button]:capitalize",children:(E,k)=>{var pe=W(),Ie=_(pe);{var Pe=Q=>{X(Q,{value:"html",children:(te,re)=>{var ne=ht();g(),l(te,ne)},$$slots:{default:!0}})},Le=Q=>{var te=xt(),re=_(te);X(re,{value:"svelte",children:(Z,me)=>{var ee=ft();g(),l(Z,ee)},$$slots:{default:!0}});var ne=r(re,2);X(ne,{value:"react",children:(Z,me)=>{var ee=gt();g(),l(Z,ee)},$$slots:{default:!0}});var Ee=r(ne,2);X(Ee,{value:"solid",children:(Z,me)=>{var ee=_t();g(),l(Z,ee)},$$slots:{default:!0}}),l(Q,te)};F(Ie,Q=>{n.code.html?Q(Pe):Q(Le,!1)})}l(E,pe)},$$slots:{default:!0}});var M=r(S,2),U=C(M),w=C(U,!0);D(U),D(M),z(()=>De(w,u(i)?s[u(i)]:"")),l(y,B)},$$slots:{default:!0}})},$$slots:{default:!0}}),l(m,b)},$$slots:{default:!0}})}var kt=c('<div class="flex gap3"><span class="badge-solid">Badge</span> <span class="badge-secondary">Secondary</span> <span class="badge-outline">Outline</span> <span class="badge-surface">Surface</span></div>');function $t(o){var e=kt();l(o,e)}var Dt=c("<!> <!> <!>",1);function Ct(o){var e=Dt(),t=_(e);P(t,{class:"btn-success",txt:"Success"});var n=r(t,2);P(n,{class:"btn-warning",txt:"Warning"});var a=r(n,2);P(a,{class:"btn-danger",txt:"danger"}),l(o,e)}var St=c('<button class="btn-primary">Primary</button> <button class="btn-soft">Soft</button> <button class="btn-outline">Outline</button> <button class="btn-ghost">Ghost</button> <button class="btn-emerald5 text-white"><i class="i-line-md:email-filled"></i> Email</button> <button class="btn-outline btn"><i class="i-iconamoon:send"></i> Send us</button> <button class="btn-soft"><i class="i-eos-icons:loading"></i> Fetching...</button> <button class="btn-primary-eqmd" aria-label="plus button"><i class="i-tabler:plus"></i></button> <button class="btn-outline-eqmd rounded-full btn" aria-label="user button"><i class="i-iconoir:user"></i></button> <hr class="w-full brd mt3 mb1"/> <button class="btn-soft-xs">Button</button> <button class="btn-soft-sm">Button</button> <button class="btn-soft-md">Button</button> <button class="btn-soft-lg">Button</button> <button class="btn-soft-xl">Button</button>',1);function It(o){var e=St();g(28),l(o,e)}var Pt=c("<!> <!> <!> <!> <!>",1);function Lt(o){var e=Pt(),t=_(e);P(t,{class:"btn-emerald5 text-white",iconL:"i-line-md:email-filled",txt:"Email"});var n=r(t,2);P(n,{iconL:"i-iconamoon:send",txt:"Send us",class:"btn-outline"});var a=r(n,2);P(a,{loading:!0,loaderTxt:"Fetching...",disabled:!0,txt:"Fetch data"});var s=r(a,2);P(s,{iconL:"i-tabler:plus",class:"btn-primary-eqmd","aria-label":"plus button"});var i=r(s,2);P(i,{iconL:"i-iconoir:user",class:"btn-outline-eqmd rounded-full","aria-label":"user button"}),l(o,e)}var Et=c("<!> <!> <!> <!> <!>",1);function Bt(o){var e=Et(),t=_(e);P(t,{class:"btn-soft-xs",txt:"Success"});var n=r(t,2);P(n,{class:"btn-soft-sm",txt:"Success"});var a=r(n,2);P(a,{class:"btn-soft-md",txt:"Success"});var s=r(a,2);P(s,{class:"btn-soft-lg",txt:"Success"});var i=r(s,2);P(i,{class:"btn-soft-xl",txt:"Success"}),l(o,e)}var Tt=c("<!> <!> <!> <!>",1);function zt(o){var e=Tt(),t=_(e);P(t,{txt:"Primary",class:"btn-primary"});var n=r(t,2);P(n,{class:"soft",txt:"Soft"});var a=r(n,2);P(a,{class:"btn-outline",txt:"Outline"});var s=r(a,2);P(s,{class:"btn-ghost",txt:"Ghost"}),l(o,e)}var Ot=c('<input type="checkbox" class="checkbox"/> <input type="checkbox" class="checkbox-primary"/> <input type="checkbox" class="checkbox-red"/> <input type="checkbox" class="checkbox-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-md"/> <input type="checkbox" class="checkbox-lg"/> <input type="checkbox" class="checkbox-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-indigo-md"/> <input type="checkbox" class="checkbox-red-lg"/> <input type="checkbox" class="checkbox-slate-xl"/> <input type="checkbox" class="checkbox-xl !after:checked:i-ph:check-fat-fill !after:checked:size-6"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-blue text-white"/> <input type="checkbox" class="checkbox-amber text-amber8"/> <input type="checkbox" class="checkbox-emerald"/> <input type="checkbox" class="checkbox checked:bg-bg text-fg"/>',1);function At(o){var e=Ot(),t=r(_(e),2);t.defaultChecked=!0;var n=r(t,2);n.defaultChecked=!0;var a=r(n,2);a.defaultChecked=!0;var s=r(a,4);s.defaultChecked=!0;var i=r(s,2);i.defaultChecked=!0;var d=r(i,2);d.defaultChecked=!0;var v=r(d,2);v.defaultChecked=!0;var m=r(v,4);m.defaultChecked=!0;var h=r(m,2);h.defaultChecked=!0;var b=r(h,2);b.defaultChecked=!0;var x=r(b,2);x.defaultChecked=!0;var $=r(x,2);$.defaultChecked=!0;var L=r($,4);L.defaultChecked=!0;var p=r(L,2);p.defaultChecked=!0;var f=r(p,2);f.defaultChecked=!0;var y=r(f,2);y.defaultChecked=!0,l(o,e)}var jt=c('<input type="checkbox" id="option" class="checkbox-fg"/> <label for="option">Option</label>',1);function qt(o){var e=jt(),t=_(e);t.defaultChecked=!0,g(2),l(o,e)}var Ft=c('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"><input type="checkbox" id="tnc" class="checkbox"/> <label for="tnc">I agree to the Terms and Conditions</label> <input type="checkbox" id="tnc2" class="checkbox-blue"/> <div><label for="tnc2">I understand and read the privacy policy</label> <br/> <span class="text-mutedfg text-sm">By Agreeing you accept our <a class="link" href="/">Privacy Policy</a></span></div> <input type="checkbox" id="tnc3" class="checkbox-slate" disabled/> <label for="tnc3" class="muted-70">I have freedom of speech</label></div>');function Nt(o){var e=Ft(),t=C(e);t.defaultChecked=!0;var n=r(t,4);n.defaultChecked=!0,g(6),D(e),l(o,e)}const Rt=(o,e)=>I(e,!0);var Mt=c('<h3>Edit Account</h3> <p class="text-mutedfg mb2">Make changes to your user profile here.</p> <label for="name">Name</label> <input class="input-outline" id="name" placeholder="Enter your name"/> <label for="email">Email</label> <input type="email" class="input-outline" id="email" placeholder="Enter your email"/> <div class="flex gap3 items-center ml-auto mt3"><button class="btn-soft">Cancel</button> <button class="btn-primary">Save</button></div>',1),Ut=c('<button class="btn-primary mx-auto">Open</button> <!>',1);function Vt(o){let e=V(!1);const t=()=>I(e,!1);var n=Ut(),a=_(n);a.__click=[Rt,e];var s=r(a,2);He(s,{get open(){return u(e)},close:t,class:"grid gap4",children:(i,d)=>{var v=Mt(),m=r(_(v),12),h=C(m);h.__click=t,g(2),D(m),l(i,v)},$$slots:{default:!0}}),l(o,n)}J(["click"]);var Wt=c('<!> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!>',1),Gt=c("<!> <!>",1),Ht=c('<i class="i-line-md:star-filled"></i> With icons',1),Kt=c('<i class="i-line-md:account"></i>Profile',1),Jt=c('<i class="i-nimbus:cog"></i>Settings',1),Qt=c('<i class="i-line-md:logout"></i>Log out',1),Xt=c("<!> <!> <!>",1),Yt=c("<!> <!>",1),Zt=c("<!> <!>",1);function en(o){var e=Zt(),t=_(e);ge(t,{children:(a,s)=>{var i=Gt(),d=_(i);xe(d,{class:"btn-primary",children:(m,h)=>{g();var b=A("Click me");l(m,b)},$$slots:{default:!0}});var v=r(d,2);_e(v,{children:(m,h)=>{var b=Wt(),x=_(b);T(x,{children:(w,E)=>{g();var k=A("Profile");l(w,k)},$$slots:{default:!0}});var $=r(x,2);T($,{children:(w,E)=>{g();var k=A("Billing");l(w,k)},$$slots:{default:!0}});var L=r($,2);T(L,{children:(w,E)=>{g();var k=A("Settings");l(w,k)},$$slots:{default:!0}});var p=r(L,2);T(p,{children:(w,E)=>{g();var k=A("Keyboard shortcuts");l(w,k)},$$slots:{default:!0}});var f=r(p,4);T(f,{children:(w,E)=>{g();var k=A("Team");l(w,k)},$$slots:{default:!0}});var y=r(f,2);T(y,{children:(w,E)=>{g();var k=A("Invite users");l(w,k)},$$slots:{default:!0}});var O=r(y,2);T(O,{children:(w,E)=>{g();var k=A("New Team");l(w,k)},$$slots:{default:!0}});var B=r(O,4);T(B,{children:(w,E)=>{g();var k=A("GitHub");l(w,k)},$$slots:{default:!0}});var S=r(B,2);T(S,{children:(w,E)=>{g();var k=A("Support");l(w,k)},$$slots:{default:!0}});var M=r(S,2);T(M,{disabled:!0,children:(w,E)=>{g();var k=A("API");l(w,k)},$$slots:{default:!0}});var U=r(M,4);T(U,{children:(w,E)=>{g();var k=A("Log out");l(w,k)},$$slots:{default:!0}}),l(m,b)},$$slots:{default:!0}}),l(a,i)},$$slots:{default:!0}});var n=r(t,2);ge(n,{children:(a,s)=>{var i=Yt(),d=_(i);xe(d,{class:"btn-soft",children:(m,h)=>{var b=Ht();g(),l(m,b)},$$slots:{default:!0}});var v=r(d,2);_e(v,{children:(m,h)=>{var b=Xt(),x=_(b);T(x,{children:(p,f)=>{var y=Kt();g(),l(p,y)},$$slots:{default:!0}});var $=r(x,2);T($,{children:(p,f)=>{var y=Jt();g(),l(p,y)},$$slots:{default:!0}});var L=r($,2);T(L,{children:(p,f)=>{var y=Qt();g(),l(p,y)},$$slots:{default:!0}}),l(m,b)},$$slots:{default:!0}}),l(a,i)},$$slots:{default:!0}}),l(o,e)}const tn=(o,e)=>{I(e,u(e)==="text"?"password":"text",!0)};var nn=c('<button type="button" class="btn-ghost-eqsm rounded-full mr--2" aria-label="Toggle password visibility"><i></i></button>'),on=c('<form class="grid gap3"><label for="email" class="reqstar">Email</label> <!> <label for="passwd">Password</label> <!> <input type="submit" class="!btn-primary ml-auto mt3"/></form>');function an(o,e){j(e,!0);let t=V("password");const n=d=>{d.preventDefault();const v=new FormData(d.target),m=v.get("email"),h=v.get("passwd");alert(`
Email: ${m}
Password: ${h}`)};var a=on(),s=r(C(a),2);K(s,{required:!0,name:"email",id:"email",placeholder:"Enter email",type:"email",iconL:"i-line-md:email",class:"grinput-outline mb3"});var i=r(s,4);K(i,{name:"passwd",id:"passwd",placeholder:"Enter Password",get type(){return u(t)},iconL:"i-lucide:key-round",class:"grinput-outline",iconR:v=>{var m=nn();m.__click=[tn,t];var h=C(m);D(m),z(()=>N(h,1,G(u(t)=="text"?"i-heroicons-solid:eye":"i-heroicons-solid:eye-off"))),l(v,m)},$$slots:{iconR:!0}}),g(2),D(a),$e("submit",a,n),l(o,a),q()}J(["click"]);var sn=c('<input class="input" placeholder="Enter name"/> <input class="input-outline" placeholder="Enter name"/> <br/> <p>sizes</p> <input class="input-outline-sm" placeholder="Enter name"/> <input class="input-outline-md" disabled placeholder="Enter name"/> <input class="input-lg" placeholder="Enter name"/> <input class="input-outline-xl" placeholder="Enter name"/> <p>Icons</p> <div class="grid grid-cols-2 grid-gap5"><div class="grinput"><i class="i-ri:user-line"></i> <input placeholder="Enter name"/></div> <div class="grinput-outline"><i class="i-line-md:email-filled"></i> <input placeholder="Enter name"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter price" type="number"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter salary" disabled/></div> <div class="grinput-outline p0 col-span-2"><span class="bg-mutedbg p2 px3 rounded-l">$</span> <input placeholder="Enter name"/> <span class="bg-mutedbg p2 rounded-r">USD</span></div></div>',1);function ln(o){var e=sn();g(18),l(o,e)}var rn=c("<!> <!> <!> <!>",1);function cn(o){var e=rn(),t=_(e);K(t,{placeholder:"size (sm)",class:"grinput-sm"});var n=r(t,2);K(n,{placeholder:"size (md)",class:"grinput-md"});var a=r(n,2);K(a,{placeholder:"size (lg)",class:"grinput-lg"});var s=r(a,2);K(s,{placeholder:"size (xl)",class:"grinput-outline-xl"}),l(o,e)}var dn=c("<!> <!>",1);function un(o){var e=dn(),t=_(e);K(t,{placeholder:"Enter name"});var n=r(t,2);K(n,{placeholder:"Enter name",class:"grinput-outline"}),l(o,e)}var pn=c('<input type="radio" class="radio" name="group1"/> <input type="radio" class="radio-primary" name="group1"/> <input type="radio" class="radio-red" name="group1"/> <input type="radio" class="radio-amber4" name="group1"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group2"/> <input type="radio" class="radio-md" name="group2"/> <input type="radio" class="radio-lg" name="group2"/> <input type="radio" class="radio-xl" name="group2"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group3"/> <input type="radio" class="radio-indigo-md" name="group3"/> <input type="radio" class="radio-red-lg" name="group3"/> <input type="radio" class="radio-slate-xl" name="group3"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radiob-blue" name="group4"/> <input type="radio" class="radiob-amber" name="group4"/> <input type="radio" class="radiob-emerald" name="group4"/> <input type="radio" class="radiob" name="group4"/>',1);function mn(o){var e=pn(),t=_(e);t.defaultChecked=!0;var n=r(t,14);n.defaultChecked=!0;var a=r(n,8);a.defaultChecked=!0;var s=r(a,14);s.defaultChecked=!0,l(o,e)}var bn=c('<input type="radio" id="option1" name="group" class="radio"/> <label for="option1">Arch</label> <input type="radio" id="option2" name="group" class="radio"/> <label for="option2">Void</label> <input type="radio" id="option3" name="group" class="radiob"/> <label for="option3">Ubuntu</label> <input type="radio" id="option4" name="group" class="radiob"/> <label for="option4">Fedora</label>',1);function vn(o){var e=bn(),t=_(e);t.defaultChecked=!0,g(14),l(o,e)}var hn=c('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="radio" id="email" name="x" class="radio"/> <label for="email">Email notifications</label> <input type="radio" id="sms" name="x" class="radio-blue"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="radio" id="none" name="x" class="radio-slate"/> <label for="none">No notifications</label> <input type="radio" id="disagree" name="x" class="radio-red"/> <label for="disagree">Stop Bothering!</label></div>');function fn(o){var e=hn(),t=C(e);t.defaultChecked=!0,g(14),D(e),l(o,e)}var gn=c('<div class="grid grid-cols-2 grid-gap3 w-2/3"><!> <!> <!> <!></div>');function _n(o){const e=[{value:"1",name:"Option 1"},{value:"2",name:"Option 2"},{value:"3",name:"Option 3"},{value:"4",name:"Option 4"},{value:"5",name:"Option 5 keyboad hehe"}],t=[{value:"apple",name:"Apple ",iconL:"i-noto:red-apple"},{value:"lime",name:"Lime",iconL:"i-noto:lime"},{value:"watermelon",name:"Watermelon",iconL:"i-noto:watermelon"},{value:"strawberry",name:"Strawberry",iconL:"i-noto:strawberry"},{value:"mango",name:"Mango",iconL:"i-noto:mango"}],n=[{value:"arch",name:"Arch Linux ",iconL:"i-logos:archlinux"},{value:"ubuntu",name:"Ubuntu",iconL:"i-logos:ubuntu"},{value:"fedora",name:"Fedora",iconL:"i-logos:fedora"},{value:"manjaro",name:"Manjaro",iconL:"i-logos:manjaro"},{value:"artix",name:"Artix ",iconL:"i-devicon:artixlinux"}];var a=gn(),s=C(a);oe(s,{get options(){return e},dropdownCss:"bg-mutedbg border-0",optionCss:"data-active:bg-input"});var i=r(s,2);oe(i,{get options(){return t},triggerProps:{class:"btn-outline"},placeholder:"Select fruit"});var d=r(i,2);oe(d,{get options(){return t},triggerProps:{class:"btn-outline",disabled:!0},placeholder:"Disabled Select"});var v=r(d,2);oe(v,{get options(){return n},placeholder:"Select distro",optinCss:"gap4"}),D(a),l(o,a)}var xn=c('<input type="checkbox" class="switch"/> <input type="checkbox" class="switch-flat-md-primary"/> <input type="checkbox" class="switch-flat-md-red"/> <input type="checkbox" class="switch-flat-md-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-flat-sm"/> <input type="checkbox" class="switch-flat-md"/> <input type="checkbox" class="switch-flat-lg"/> <input type="checkbox" class="switch-flat-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-line-sm"/> <input type="checkbox" class="switch-line-md-indigo"/> <input type="checkbox" class="switch-line-lg-red"/> <input type="checkbox" class="switch-line-xl-slate"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-knob-md-blue"/> <input type="checkbox" class="switch-knob-md-amber"/> <input type="checkbox" class="switch-flat-md-emerald"/> <input type="checkbox" class="switch-knob" name="group4"/>',1);function yn(o){var e=xn(),t=_(e);t.defaultChecked=!0;var n=r(t,16);n.defaultChecked=!0;var a=r(n,10);a.defaultChecked=!0;var s=r(a,2);s.defaultChecked=!0;var i=r(s,2);i.defaultChecked=!0;var d=r(i,10);d.defaultChecked=!0,l(o,e)}var wn=c('<input type="checkbox" class="switch-line"/> <input type="checkbox" class="switch-flat"/> <input type="checkbox" class="switch-knob"/>',1);function kn(o){var e=wn(),t=r(_(e),2);t.defaultChecked=!0,g(2),l(o,e)}var $n=c('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="checkbox" id="email" class="switch-line"/> <label for="email">Email notifications</label> <input type="checkbox" id="sms" class="switch-line"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="checkbox" id="none" class="switch"/> <label for="none">No notifications</label> <input type="checkbox" id="disagree" class="switch"/> <label for="disagree">Stop Bothering!</label></div>');function Dn(o){var e=$n(),t=C(e);t.defaultChecked=!0,g(14),D(e),l(o,e)}const Cn=`<div class="flex gap3">
  <span class="badge-solid">Badge</span>
  <span class="badge-secondary">Secondary</span>
  <span class="badge-outline">Outline</span>
  <span class="badge-surface">Surface</span>
</div>
`,Sn=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <>
      <Btn class="btn-success" txt="Success" />
      <Btn class="btn-warning" txt="Warning" />
      <Btn class="btn-danger" txt="danger" />
    </>
  );
};
`,In=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<Btn class="btn-success" txt="Success" />
<Btn class="btn-warning" txt="Warning" />
<Btn class="btn-danger" txt="danger" />
`,Pn=`<button class="btn-primary">Primary</button>
<button class="btn-soft">Soft</button>
<button class="btn-outline">Outline</button>
<button class="btn-ghost">Ghost</button>

<button class="btn-emerald5 text-white">
  <i class="i-line-md:email-filled"></i> Email
</button>

<button class="btn-outline btn">
  <i class="i-iconamoon:send"></i> Send us
</button>

<button class="btn-soft">
  <i class="i-eos-icons:loading"></i> Fetching...
</button>

<button class="btn-primary-eqmd" aria-label="plus button">
  <i class="i-tabler:plus"></i>
</button>

<button class="btn-outline-eqmd rounded-full btn" aria-label="user button">
  <i class="i-iconoir:user"></i>
</button>

<hr class="w-full brd mt3 mb1" />

<button class="btn-soft-xs">Button</button>
<button class="btn-soft-sm">Button</button>
<button class="btn-soft-md">Button</button>
<button class="btn-soft-lg">Button</button>
<button class="btn-soft-xl">Button</button>
`,Ln=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <>
      <Btn
        class="btn-emerald5 text-white"
        iconL="i-line-md:email-filled"
        txt="Email"
      />
      <Btn iconL="i-iconamoon:send" txt="Send us" class="btn-outline" />

      <Btn
        loading={true}
        loaderTxt="Fetching..."
        disabled={true}
        txt="Fetch data"
      />

      <Btn
        iconL="i-tabler:plus"
        class="btn-primary-eqmd"
        aria-label="plus button"
      />

      <Btn
        iconL="i-iconoir:user"
        class="btn-outline-eqmd rounded-full"
        aria-label="user button"
      />
    </>
  );
};
`,En=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<Btn
  class="btn-emerald5 text-white"
  iconL="i-line-md:email-filled"
  txt="Email"
/>
<Btn iconL="i-iconamoon:send" txt="Send us" class="btn-outline" />

<Btn
  loading={true}
  loaderTxt="Fetching..."
  disabled={true}
  txt="Fetch data"
/>

<Btn
  iconL="i-tabler:plus"
  class="btn-primary-eqmd"
  aria-label="plus button"
/>

<Btn
  iconL="i-iconoir:user"
  class="btn-outline-eqmd rounded-full"
  aria-label="user button"
/>
`,Bn=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <>
      <Btn class="btn-soft-xs" txt="Success" />
      <Btn class="btn-soft-sm" txt="Success" />
      <Btn class="btn-soft-md" txt="Success" />
      <Btn class="btn-soft-lg" txt="Success" />
      <Btn class="btn-soft-xl" txt="Success" />
    </>
  );
};
`,Tn=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<Btn class="btn-soft-xs" txt="Success" />
<Btn class="btn-soft-sm" txt="Success" />
<Btn class="btn-soft-md" txt="Success" />
<Btn class="btn-soft-lg" txt="Success" />
<Btn class="btn-soft-xl" txt="Success" />
`,zn=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <>
      <Btn txt="Primary" class="btn-primary" />
      <Btn class="soft" txt="Soft" />
      <Btn class="btn-outline" txt="Outline" />
      <Btn class="btn-ghost" txt="Ghost" />
    </>
  );
};
`,On=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<Btn txt="Primary" class="btn-primary" />
<Btn class="soft" txt="Soft" />
<Btn class="btn-outline" txt="Outline" />
<Btn class="btn-ghost" txt="Ghost" />
`,An=`<input type="checkbox" class="checkbox" />
<input type="checkbox" class="checkbox-primary" defaultChecked />
<input type="checkbox" class="checkbox-red" defaultChecked />
<input type="checkbox" class="checkbox-amber4" defaultChecked />

<hr class="w-full brd border-input my2" />

<input type="checkbox" class="checkbox-sm" defaultChecked />
<input type="checkbox" class="checkbox-md" defaultChecked />
<input type="checkbox" class="checkbox-lg" defaultChecked />
<input type="checkbox" class="checkbox-xl" defaultChecked />

<hr class="w-full brd border-input my2" />

<input type="checkbox" class="checkbox-sm" defaultChecked />
<input type="checkbox" class="checkbox-indigo-md" defaultChecked />
<input type="checkbox" class="checkbox-red-lg" defaultChecked />
<input type="checkbox" class="checkbox-slate-xl" defaultChecked />
<input
  type="checkbox"
  class="checkbox-xl !after:checked:i-ph:check-fat-fill !after:checked:size-6"
  defaultChecked
/>

<hr class="w-full brd border-input my2" />
<input type="checkbox" class="checkbox-blue text-white" defaultChecked />
<input type="checkbox" class="checkbox-amber text-amber8" defaultChecked />
<input type="checkbox" class="checkbox-emerald" defaultChecked />
<input
  type="checkbox"
  class="checkbox checked:bg-bg text-fg"
  defaultChecked
/>
`,jn=`<input type="checkbox" id="option" class="checkbox-fg" defaultChecked />
<label for="option">Option</label>
`,qn=`<div
  class="[&>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"
>
  <input type="checkbox" id="tnc" class="checkbox" defaultChecked />
  <label for="tnc">I agree to the Terms and Conditions</label>

  <input type="checkbox" id="tnc2" class="checkbox-blue" defaultChecked />

  <div>
    <label for="tnc2">I understand and read the privacy policy</label> <br />
    <span class="text-mutedfg text-sm">By Agreeing you accept our
      <a class="link" href="/">Privacy Policy </a></span>
  </div>

  <input
    type="checkbox"
    id="tnc3"
    class="checkbox-slate"
    disabled
  />
  <label for="tnc3" class="muted-70">I have freedom of speech</label>
</div>
`,Fn=`import { useState } from "react";
import { Dialog } from "@haze-ui/react";

export default () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <button className="btn-primary mx-auto" onClick={openDialog}>
        Open
      </button>

      <Dialog open={open} close={closeDialog} className="grid gap4">
        <h3>Edit Account</h3>

        <p className="text-mutedfg mb2">
          Make changes to your user profile here.
        </p>

        <label htmlFor="name">Name</label>
        <input
          className="input-outline"
          id="name"
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="input-outline"
          id="email"
          placeholder="Enter your email"
        />

        <div className="flex gap3 items-center ml-auto mt3">
          <button className="btn-soft" onClick={closeDialog}>
            Cancel
          </button>
          <button className="btn-primary">Save</button>
        </div>
      </Dialog>
    </>
  );
};
`,Nn=`<script lang="ts">
  import { Dialog } from "@haze-ui/svelte";

  let open = $state(false);
  const setClose = () => open = false;
  const setOpen = () => open = true;
<\/script>

<button class="btn-primary mx-auto" onclick={setOpen}>
  Open
</button>

<Dialog {open} close={setClose} class="grid gap4">
  <h3>Edit Account</h3>
  <p class="text-mutedfg mb2">Make changes to your user profile here.</p>

  <label for="name">Name</label>
  <input class="input-outline" id="name" placeholder="Enter your name" />

  <label for="email">Email</label>
  <input
    type="email"
    class="input-outline"
    id="email"
    placeholder="Enter your email"
  />

  <div class="flex gap3 items-center ml-auto mt3">
    <button class="btn-soft" onclick={setClose}>Cancel</button>
    <button class="btn-primary">Save</button>
  </div>
</Dialog>
`,Rn=`import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@haze-ui/react";

export default () => {
  <>
    <Dropdown>
      <DropdownTrigger> Dropdown</DropdownTrigger>

      <DropdownContent>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Billing</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Keyboard shortcuts </DropdownItem>
        <hr class="brd my1" />

        <DropdownItem>Team</DropdownItem>
        <DropdownItem>Invite users</DropdownItem>
        <DropdownItem>New Team</DropdownItem>
        <hr class="brd my1" />

        <DropdownItem>GitHub</DropdownItem>
        <DropdownItem>Support</DropdownItem>
        <DropdownItem disabled={true}>API</DropdownItem>

        <hr class="brd my1" />
        <DropdownItem>Log out</DropdownItem>
      </DropdownContent>
    </Dropdown>

    <Dropdown>
      <DropdownTrigger class="btn-soft">
        <i class="i-line-md:star-filled"></i>
        With icons
      </DropdownTrigger>

      <DropdownContent>
        <DropdownItem>
          <i class="i-line-md:account"></i>Profile
        </DropdownItem>
        <DropdownItem>
          <i class="i-nimbus:cog"></i>Settings
        </DropdownItem>
        <DropdownItem>
          <i class="i-line-md:logout"></i>Log out
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  </>;
};
`,Mn=`<script lang="ts">
  import {
    Dropdown,
    DropdownContent,
    DropdownItem,
    DropdownTrigger,
  } from "@haze-ui/svelte";
<\/script>

<Dropdown>
  <DropdownTrigger class="btn-primary"> Click me</DropdownTrigger>

  <DropdownContent>
    <DropdownItem>Profile</DropdownItem>
    <DropdownItem>Billing</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Keyboard shortcuts </DropdownItem>
    <hr class="brd my1" />

    <DropdownItem>Team</DropdownItem>
    <DropdownItem>Invite users</DropdownItem>
    <DropdownItem>New Team</DropdownItem>
    <hr class="brd my1" />

    <DropdownItem>GitHub</DropdownItem>
    <DropdownItem>Support</DropdownItem>
    <DropdownItem disabled={true}>API</DropdownItem>

    <hr class="brd my1" />
    <DropdownItem>Log out</DropdownItem>
  </DropdownContent>
</Dropdown>

<Dropdown>
  <DropdownTrigger class="btn-soft">
    <i class="i-line-md:star-filled"></i>
    With icons
  </DropdownTrigger>

  <DropdownContent>
    <DropdownItem> <i class="i-line-md:account"></i>Profile</DropdownItem>
    <DropdownItem><i class="i-nimbus:cog"></i>Settings</DropdownItem>
    <DropdownItem> <i class="i-line-md:logout"></i>Log out</DropdownItem>
  </DropdownContent>
</Dropdown>
`,Un=`import { Input } from "@haze-ui/react";
import { useState } from "react";

export default () => {
  const [inputPasswdType, setInputPasswdType] = useState("password");

  const togglepasswdType = () => {
    setInputPasswdType(inputPasswdType === "text" ? "password" : "text");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("passwd");

    alert(\`\\nEmail: \${email}\\nPassword: \${password}\`);
  };

  const iconR = () => (
    <button
      type="button"
      class="btn-ghost-eqsm rounded-full mr--2"
      aria-label="Toggle password visibility"
      onclick={togglepasswdType}
    >
      <i
        class={
          inputPasswdType == "text"
            ? "i-heroicons-solid:eye"
            : "i-heroicons-solid:eye-off"
        }
      ></i>
    </button>
  );

  return (
    <form class="grid gap3" onsubmit={handleSubmit}>
      <label for="email" class="reqstar">
        Email
      </label>

      <Input
        required
        name="email"
        id="email"
        placeholder="Enter email"
        type="email"
        iconL="i-line-md:email"
        class="grinput-outline mb3"
      />

      <label for="passwd">Password</label>

      <Input
        name="passwd"
        id="passwd"
        placeholder="Enter Password"
        type={inputPasswdType}
        iconL="i-lucide:key-round"
        class="grinput-outline"
        iconR={iconR}
      ></Input>

      <input type="submit" class="!btn-primary ml-auto mt3" />
    </form>
  );
};
`,Vn=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";

  let inputPasswdType = $state("password");

  const togglepasswdType = () => {
    inputPasswdType = inputPasswdType === "text" ? "password" : "text";
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("passwd");

    alert(\`\\nEmail: \${email}\\nPassword: \${password}\`);
  };
<\/script>

<form class="grid gap3" onsubmit={handleSubmit}>
  <label for="email" class="reqstar">Email</label>

  <Input
    required
    name="email"
    id="email"
    placeholder="Enter email"
    type="email"
    iconL="i-line-md:email"
    class="grinput-outline mb3"
  />

  <label for="passwd">Password</label>

  <Input
    name="passwd"
    id="passwd"
    placeholder="Enter Password"
    type={inputPasswdType}
    iconL="i-lucide:key-round"
    class="grinput-outline"
  >
    {#snippet iconR()}
      <button
        type="button"
        class="btn-ghost-eqsm rounded-full mr--2"
        aria-label="Toggle password visibility"
        onclick={togglepasswdType}
      >
        <i
          class={inputPasswdType == "text"
          ? "i-heroicons-solid:eye"
          : "i-heroicons-solid:eye-off"}
        ></i>
      </button>
    {/snippet}
  </Input>

  <input type="submit" class="!btn-primary ml-auto mt3">
</form>
`,Wn=`<input class="input" placeholder="Enter name" />
<input class="input-outline" placeholder="Enter name" />

<br />
<p>sizes</p>

<input class="input-outline-sm" placeholder="Enter name" />
<input class="input-outline-md" disabled placeholder="Enter name" />
<input class="input-lg" placeholder="Enter name" />
<input class="input-outline-xl" placeholder="Enter name" />

<p>Icons</p>

<div class="grid grid-cols-2 grid-gap5">
  <div class="grinput">
    <i class="i-ri:user-line"></i>
    <input placeholder="Enter name" />
  </div>

  <div class="grinput-outline">
    <i class="i-line-md:email-filled"></i>
    <input placeholder="Enter name" />
  </div>

  <div class="grinput p0">
    <span class="bg-border p2 px3 rounded-l">$</span>
    <input placeholder="Enter price" type="number" />
  </div>

  <div class="grinput p0">
    <span class="bg-border p2 px3 rounded-l">$</span>
    <input placeholder="Enter salary" disabled />
  </div>

  <div class="grinput-outline p0 col-span-2">
    <span class="bg-mutedbg p2 px3 rounded-l">$</span>
    <input placeholder="Enter name" />
    <span class="bg-mutedbg p2 rounded-r">USD</span>
  </div>
</div>
`,Gn=`import { Input } from "@haze-ui/react";

export default () => {
  return (
    <div>
      <Input placeholder="size (sm)" class="grinput-sm" />
      <Input placeholder="size (md)" class="grinput-md" />
      <Input placeholder="size (lg)" class="grinput-lg" />
      <Input placeholder="size (xl)" class="grinput-outline-xl" />
      <Input placeholder="size (2)" class="grinput-2" />
      <Input placeholder="size (2.3)" class="grinput-2.3" />
      <Input placeholder="size (2.9)" class="grinput-outline-2.9" />
    </div>
  );
};
`,Hn=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<Input placeholder="size (sm)" class="grinput-sm" />
<Input placeholder="size (md)" class="grinput-md" />
<Input placeholder="size (lg)" class="grinput-lg" />
<Input placeholder="size (xl)" class="grinput-outline-xl" />
`,Kn=`import { Input } from "@haze-ui/react";

export default () => {
  return (
    <div>
      <Input placeholder="Enter name" />
      <Input placeholder="Enter name" class="grinput-outline" />
    </div>
  );
};
`,Jn=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<Input placeholder="Enter name" />
<Input placeholder="Enter name" class="grinput-outline" />
`,Qn=`<input type="radio" class="radio" name="group1" defaultChecked />
<input type="radio" class="radio-primary" name="group1" />
<input type="radio" class="radio-red" name="group1" />
<input type="radio" class="radio-amber4" name="group1" />

<hr class="w-full brd border-input my2" />

<input type="radio" class="radio-sm" name="group2" />
<input type="radio" class="radio-md" name="group2" />
<input type="radio" class="radio-lg" name="group2" defaultChecked />
<input type="radio" class="radio-xl" name="group2" />

<hr class="w-full brd border-input my2" />

<input type="radio" class="radio-sm" name="group3" />
<input type="radio" class="radio-indigo-md" name="group3" defaultChecked />
<input type="radio" class="radio-red-lg" name="group3" />
<input type="radio" class="radio-slate-xl" name="group3" />

<hr class="w-full brd border-input my2" />

<input type="radio" class="radiob-blue" name="group4" />
<input type="radio" class="radiob-amber" name="group4" />
<input type="radio" class="radiob-emerald" name="group4" />
<input type="radio" class="radiob" name="group4" defaultChecked />
`,Xn=`<input type="radio" id="option1" name="group" class="radio" defaultChecked />
<label for="option1">Arch</label>

<input type="radio" id="option2" name="group" class="radio" />
<label for="option2">Void</label>

<input type="radio" id="option3" name="group" class="radiob" />
<label for="option3">Ubuntu</label>

<input type="radio" id="option4" name="group" class="radiob" />
<label for="option4">Fedora</label>
`,Yn=`<div
  class="[&>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"
>
  <input
    type="radio"
    id="email"
    name="x"
    class="radio"
    defaultChecked
  />
  <label for="email">Email notifications</label>

  <input type="radio" id="sms" name="x" class="radio-blue" />
  <div>
    <label for="sms">SMS notifications</label><br />
    <span class="text-mutedfg text-sm">Standard messaging rates may apply</span>
  </div>

  <input type="radio" id="none" name="x" class="radio-slate" />
  <label for="none">No notifications</label>

  <input type="radio" id="disagree" name="x" class="radio-red" />
  <label for="disagree">Stop Bothering!</label>
</div>
`,Zn=`import { Select } from "@haze-ui/react";

const options = [
  { value: "1", name: "Option 1" },
  { value: "2", name: "Option 2" },
  { value: "3", name: "Option 3" },
  { value: "4", name: "Option 4" },
  { value: "5", name: "Option 5 keyboad hehe" },
];

const options2 = [
  { value: "apple", name: "Apple ", iconL: "i-noto:red-apple" },
  { value: "lime", name: "Lime", iconL: "i-noto:lime" },
  { value: "watermelon", name: "Watermelon", iconL: "i-noto:watermelon" },
  { value: "strawberry", name: "Strawberry", iconL: "i-noto:strawberry" },
  { value: "mango", name: "Mango", iconL: "i-noto:mango" },
];

const options3 = [
  { value: "arch", name: "Arch Linux ", iconL: "i-logos:archlinux" },
  { value: "ubuntu", name: "Ubuntu", iconL: "i-logos:ubuntu" },
  { value: "fedora", name: "Fedora", iconL: "i-logos:fedora" },
  { value: "manjaro", name: "Manjaro", iconL: "i-logos:manjaro" },
  { value: "artix", name: "Artix ", iconL: "i-devicon:artixlinux" },
];

export default () => {
  return (
    <div class="grid grid-cols-2 grid-gap3 w-2/3">
      <Select
        options={options}
        dropdownCss="bg-mutedbg border-0"
        optionCss="data-active:bg-input"
      />

      <Select
        options={options2}
        triggerProps={{ class: "btn-outline" }}
        placeholder="Select fruit"
      />

      <Select
        options={options2}
        triggerProps={{ class: "btn-outline", disabled: true }}
        placeholder="Disabled Select"
      />
      <Select options={options3} placeholder="Select distro" optinCss="gap4" />
    </div>
  );
};
`,eo=`<script lang="ts">
  import { Select } from "@haze-ui/svelte";

  const options: any = [
    { value: "1", name: "Option 1" },
    { value: "2", name: "Option 2" },
    { value: "3", name: "Option 3" },
    { value: "4", name: "Option 4" },
    { value: "5", name: "Option 5 keyboad hehe" },
  ];

  const options2: any = [
    // not all fruits have red name TO SUPERMAVEN AI BRUH
    { value: "apple", name: "Apple ", iconL: "i-noto:red-apple" },
    { value: "lime", name: "Lime", iconL: "i-noto:lime" },
    { value: "watermelon", name: "Watermelon", iconL: "i-noto:watermelon" },
    { value: "strawberry", name: "Strawberry", iconL: "i-noto:strawberry" },
    { value: "mango", name: "Mango", iconL: "i-noto:mango" },
  ];

  const options3: any = [
    { value: "arch", name: "Arch Linux ", iconL: "i-logos:archlinux" },
    { value: "ubuntu", name: "Ubuntu", iconL: "i-logos:ubuntu" },
    { value: "fedora", name: "Fedora", iconL: "i-logos:fedora" },
    { value: "manjaro", name: "Manjaro", iconL: "i-logos:manjaro" },
    { value: "artix", name: "Artix ", iconL: "i-devicon:artixlinux" },
  ];
<\/script>

<div class="grid grid-cols-2 grid-gap3 w-2/3">
  <Select
    {options}
    dropdownCss="bg-mutedbg border-0"
    optionCss="data-active:bg-input"
  />

  <Select
    options={options2}
    triggerProps={{ class: "btn-outline" }}
    placeholder="Select fruit"
  />

  <Select
    options={options2}
    triggerProps={{ class: "btn-outline", disabled: true }}
    placeholder="Disabled Select"
  />
  <Select options={options3} placeholder="Select distro" optinCss="gap4" />
</div>
`,to=`<input type="checkbox" class="switch" defaultChecked />
<input type="checkbox" class="switch-flat-md-primary" />
<input type="checkbox" class="switch-flat-md-red" />
<input type="checkbox" class="switch-flat-md-amber4" />

<hr class="w-full brd border-input my2" />

<input type="checkbox" class="switch-flat-xs" />
<input type="checkbox" class="switch-flat-sm" />
<input type="checkbox" class="switch-flat-md" />
<input type="checkbox" class="switch-flat-lg" defaultChecked />
<input type="checkbox" class="switch-flat-xl" />

<hr class="w-full brd border-input my2" />

<input type="checkbox" class="switch-flat-xs" />
<input type="checkbox" class="switch-line-sm" />
<input type="checkbox" class="switch-line-md-indigo" defaultChecked />
<input type="checkbox" class="switch-line-lg-red" defaultChecked />
<input type="checkbox" class="switch-line-xl-slate" defaultChecked />

<hr class="w-full brd border-input my2" />

<input type="checkbox" class="switch-knob-md-blue" />
<input type="checkbox" class="switch-knob-md-amber" />
<input type="checkbox" class="switch-flat-md-emerald" />
<input type="checkbox" class="switch-knob" name="group4" defaultChecked />
`,no=`<input type="checkbox" class="switch-line" />
<input type="checkbox" class="switch-flat" defaultChecked />
<input type="checkbox" class="switch-knob" />
`,oo=`<div
  class="[&>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"
>
  <input type="checkbox" id="email" class="switch-line" defaultChecked />
  <label for="email">Email notifications</label>

  <input type="checkbox" id="sms" class="switch-line" />
  <div>
    <label for="sms">SMS notifications</label><br />
    <span class="text-mutedfg text-sm">Standard messaging rates may apply</span>
  </div>

  <input type="checkbox" id="none" class="switch" />
  <label for="none">No notifications</label>

  <input type="checkbox" id="disagree" class="switch" />
  <label for="disagree">Stop Bothering!</label>
</div>
`,Se=Object.assign({"/codemos/badge/usage.svelte":$t,"/codemos/btn/class.svelte":Ct,"/codemos/btn/html.svelte":It,"/codemos/btn/icons.svelte":Lt,"/codemos/btn/size.svelte":Bt,"/codemos/btn/variant.svelte":zt,"/codemos/checkbox/colors.svelte":At,"/codemos/checkbox/default.svelte":qt,"/codemos/checkbox/form.svelte":Nt,"/codemos/dialog/usage.svelte":Vt,"/codemos/dropdown/usage.svelte":en,"/codemos/input/form.svelte":an,"/codemos/input/html.svelte":ln,"/codemos/input/size.svelte":cn,"/codemos/input/usage.svelte":un,"/codemos/radio/colors.svelte":mn,"/codemos/radio/default.svelte":vn,"/codemos/radio/form.svelte":fn,"/codemos/select/usage.svelte":_n,"/codemos/switch/colors.svelte":yn,"/codemos/switch/default.svelte":kn,"/codemos/switch/form.svelte":Dn}),ce=Object.assign({"/codemos/badge/usage.svelte":Cn,"/codemos/btn/class.jsx":Sn,"/codemos/btn/class.svelte":In,"/codemos/btn/html.svelte":Pn,"/codemos/btn/icons.jsx":Ln,"/codemos/btn/icons.svelte":En,"/codemos/btn/size.jsx":Bn,"/codemos/btn/size.svelte":Tn,"/codemos/btn/variant.jsx":zn,"/codemos/btn/variant.svelte":On,"/codemos/checkbox/colors.svelte":An,"/codemos/checkbox/default.svelte":jn,"/codemos/checkbox/form.svelte":qn,"/codemos/dialog/usage.jsx":Fn,"/codemos/dialog/usage.svelte":Nn,"/codemos/dropdown/usage.jsx":Rn,"/codemos/dropdown/usage.svelte":Mn,"/codemos/input/form.jsx":Un,"/codemos/input/form.svelte":Vn,"/codemos/input/html.svelte":Wn,"/codemos/input/size.jsx":Gn,"/codemos/input/size.svelte":Hn,"/codemos/input/usage.jsx":Kn,"/codemos/input/usage.svelte":Jn,"/codemos/radio/colors.svelte":Qn,"/codemos/radio/default.svelte":Xn,"/codemos/radio/form.svelte":Yn,"/codemos/select/usage.jsx":Zn,"/codemos/select/usage.svelte":eo,"/codemos/switch/colors.svelte":to,"/codemos/switch/default.svelte":no,"/codemos/switch/form.svelte":oo}),ho=(o,e)=>{const t=`/codemos/${o}/${e}`;return{preview:Se[`${t}.svelte`],code:{svelte:ce[`${t}.svelte`],react:ce[`${t}.jsx`]}}},fo=(o,e)=>{const t=`/codemos/${o}/${e}`;return{preview:Se[`${t}.svelte`],code:{html:ce[`${t}.svelte`]}}};export{vo as T,fo as a,ho as g};
