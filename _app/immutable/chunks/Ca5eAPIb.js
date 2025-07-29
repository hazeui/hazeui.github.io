import"./DsnmJJEf.js";import{af as Le,k as Ee,ag as Be,o as Te,aV as ze,p as A,aK as R,b as S,a as s,c as q,f as c,e as b,s as l,r as m,h as j,g as p,ai as M,aL as de,ak as P,aj as ie,ab as ye,a9 as X,j as we,aJ as oe,n as _,t as O}from"./DtczRlXZ.js";import{a as N,f as ke,d as K,s as $e}from"./R0Tc61iS.js";import{p as se,i as F,r as le,s as je}from"./Bsd_8zgC.js";import{b as Oe,c as Ae}from"./DyKfUtFv.js";import{o as qe}from"./C1fZ_kB7.js";import{d as Fe,s as U,r as Ne,a as ue,c as G,b as V}from"./CrKGSx_S.js";import"./69_IOA4Y.js";import{B as L}from"./BXt25yBm.js";import{e as Re}from"./CEuL__aB.js";function pe(a,e,n){Le(()=>{var t=Ee(()=>e(a,n?.())||{});if(n&&t?.update){var o=!1,r={};Be(()=>{var i=n();Te(i),o&&ze(r,i)&&(r=i,t.update(i))}),o=!0}if(t?.destroy)return()=>t.destroy()})}const be=a=>a?typeof a=="string"?document.querySelector(a):a:null;function Me(a,e="body"){return be(e)?.appendChild(a),{update:n=>{n!==e&&(a.parentNode?.removeChild(a),be(n)?.appendChild(a))},destroy:()=>{a.parentNode?.removeChild(a)}}}const Ue=a=>{a.currentTarget==a.target&&close()};var Ve=c('<button class="i-pajamas:close absolute right-4 top-4 focus:bg-red" aria-label="close" tabindex="-1"></button>'),We=c('<dialog class="backdrop:bg-black/60"><div tabindex="-1"><!> <!></div></dialog>');function Ge(a,e){A(e,!0);let n=se(e,"closeIcon",3,!0);var t=R(),o=S(t);{var r=i=>{var d=We();d.__click=[Ue];var f=b(d),h=b(f);{var g=y=>{var w=Ve();w.__click=function(...I){e.close?.apply(this,I)},s(y,w)};F(h,y=>{n()&&y(g)})}var v=l(h,2);N(v,()=>e.children),m(f),m(d),pe(d,y=>Me?.(y)),Fe(d,()=>y=>y.showModal()),j(()=>U(f,1,`dialog ${e.class}`)),ke("close",d,function(...y){e.close?.apply(this,y)}),s(i,d)};F(o,i=>{e.open&&i(r)})}s(a,t),q()}K(["click"]);var He=c("<div></div>"),Ke=c("<div></div>"),Je=c("<div><!> <input/> <!></div>");function W(a,e){A(e,!0);let n=se(e,"class",3,""),t=le(e,["$$slots","$$events","$$legacy","iconL","iconR","class"]);var o=Je(),r=b(o);{var i=g=>{var v=R(),y=S(v);{var w=u=>{var x=He();j(()=>U(x,1,G(e.iconL))),s(u,x)},I=u=>{var x=R(),$=S(x);N($,()=>e.iconL),s(u,x)};F(y,u=>{typeof e.iconL=="string"?u(w):u(I,!1)})}s(g,v)};F(r,g=>{e.iconL&&g(i)})}var d=l(r,2);Ne(d),ue(d,()=>({...t}));var f=l(d,2);{var h=g=>{var v=R(),y=S(v);{var w=u=>{var x=Ke();j(()=>U(x,1,G(e.iconR))),s(u,x)},I=u=>{var x=R(),$=S(x);N($,()=>e.iconR),s(u,x)};F(y,u=>{typeof e.iconR=="string"?u(w):u(I,!1)})}s(g,v)};F(f,g=>{e.iconR&&g(h)})}m(o),j(g=>U(o,1,g),[()=>G(n()?.includes("grinput")?n():`grinput ${n()}`)]),s(a,o),q()}const De=(a,e)=>{function n(t){a.contains(t.target)||e()}return document.addEventListener("click",n),{destroy(){document.removeEventListener("click",n)}}};var Qe=()=>null,Xe=c("<span></span>"),Ye=c('<li role="option"><!> </li>'),Ze=c('<ul role="listbox"></ul>'),en=c('<div class="relative inline-flex first:children:w-full"><!> <!></div>');function ae(a,e){A(e,!0);let n=se(e,"placeholder",3,"Select Option"),t=M(!1),o=M(-1),r=M(-1);const i=()=>{P(t,!p(t)),p(t)&&P(r,p(o),!0)},d=u=>{u!==p(o)&&(P(o,u,!0),e.onChange?.(e.options[u].value)),P(t,!1)},f=u=>{switch(u.preventDefault(),u.key){case"Enter":d(p(r));break;case"Escape":P(t,!1);break;case"ArrowUp":P(r,p(r)>0?p(r)-1:0,!0);break;case"ArrowDown":P(r,p(r)<e.options.length-1?p(r)+1:0,!0);break}},g=`justify-start btn-ghost-eqmd transition-none ${e.optionCss?.includes("data-")?e.optionCss:`data-active:bg-mutedbg ${e.optionCss}`}`;var v=en(),y=b(v);{let u=de(()=>e.options[p(o)]?.name||n());L(y,je({"aria-haspopup":"listbox",get"aria-expanded"(){return p(t)},onclick:i,onkeydown:f,iconR:"ml-auto i-fa-solid:caret-down",get txt(){return p(u)}},()=>e.triggerProps))}var w=l(y,2);{var I=u=>{var x=Ze();V(x,"tabindex",-1),Re(x,23,()=>e.options,$=>$.value,($,B,T)=>{var C=Ye();V(C,"tabindex",-1),C.__click=()=>d(p(T)),C.__keydown=[Qe];var H=b(C);{var Y=E=>{var k=Xe();j(()=>U(k,1,G(p(B).iconL))),s(E,k)};F(H,E=>{p(B).iconL&&E(Y)})}var D=l(H);m(C),j(()=>{V(C,"id",`option-${p(T)}`),V(C,"aria-selected",p(o)===p(T)),V(C,"data-active",p(r)===p(T)),U(C,1,G(g)),$e(D,` ${p(B).name??""}`)}),s($,C)}),m(x),j(()=>{U(x,1,`popover z-10 whitespace-nowrap ${e.dropdownCss}`),V(x,"aria-activedescendant",`option-${p(r)}`)}),s(u,x)};F(w,u=>{p(t)&&u(I)})}m(v),pe(v,(u,x)=>De?.(u,x),()=>()=>P(t,!1)),s(a,v),q()}K(["click","keydown"]);function ve(a,e){A(e,!0);let n=M(ie(e.defaultValue)),t=ie([]);const o=d=>P(n,d,!0);ye("tabs",{value:()=>e.value??p(n),setValue:e.setValue??o,tabLabels:()=>t,addTabLabel:d=>t.push(d)});var r=R(),i=S(r);N(i,()=>e.children),s(a,r),q()}const nn=(a,e,n)=>e(n.value);var tn=c('<button role="tab"><!></button>');function Q(a,e){A(e,!0);const{value:n,setValue:t,addTabLabel:o}=X("tabs");qe(()=>o(e.value));var r=tn();r.__click=[nn,t,e];var i=b(r);N(i,()=>e.children),m(r),j(d=>V(r,"aria-selected",d),[()=>n()==e.value]),s(a,r),q()}K(["click"]);var an=c('<div role="tabpanel"><!></div>');function fe(a,e){A(e,!0);const{value:n}=X("tabs");var t=R(),o=S(t);{var r=i=>{var d=an(),f=b(d);N(f,()=>e.children),m(d),j(h=>V(d,"aria-labelledby",h),[()=>`tab-${n()}`]),s(i,d)};F(o,i=>{n()==e.value&&i(r)})}s(a,t),q()}const on=(a,e,n,t)=>{a.key=="ArrowLeft"&&p(e)!=0?n(t()[p(e)-1]):a.key=="ArrowRight"&&p(e)!=t().length-1&&n(t()[p(e)+1])};var sn=c('<div role="tablist" tabindex="-1"><!></div>');function ge(a,e){A(e,!0);const{value:n,tabLabels:t,setValue:o}=X("tabs");let r=de(()=>t().indexOf(n()));we(()=>{n()||o(t()[0])});var i=sn();i.__keydown=[on,r,o,t];var d=b(i);N(d,()=>e.children),m(i),j(f=>U(i,1,f),[()=>G(e.class?.includes("tabs-")?e.class:`tabs ${e.class}`)]),s(a,i),q()}K(["keydown"]);var ln=c('<div class="relative inline-block"><!></div>');function he(a,e){A(e,!0);let n=M(!1);const t=()=>P(n,!p(n)),o=()=>P(n,!1);ye("dropdown",{open:()=>p(n),toggleDropdown:t,closeDropdown:o});var i=ln(),d=b(i);N(d,()=>e.children??oe),m(i),pe(i,(f,h)=>De?.(f,h),()=>o),s(a,i),q()}const rn=(a,e,n,t)=>{if(!e())return;const o=n();o.length!==0&&(a.key=="ArrowDown"&&p(t)<o.length?(a.preventDefault(),P(t,p(t)+1),o[p(t)]?.focus()):a.key=="ArrowUp"&&p(t)>0&&(P(t,p(t)-1),o[p(t)]?.focus()))};var cn=c('<div role="menu" tabindex="0"><!></div>');function xe(a,e){A(e,!0);let n=se(e,"class",3,""),t=M(-1),o=M(null);const{open:r}=X("dropdown"),i=()=>p(o)?Array.from(p(o).querySelectorAll('[role="menuitem"]')):[];we(()=>{r()&&p(o)?.focus()});var d=R(),f=S(d);{var h=g=>{var v=cn();v.__keydown=[rn,r,i,t];var y=b(v);N(y,()=>e.children??oe),m(v),Oe(v,w=>P(o,w),()=>p(o)),j(w=>U(v,1,w),[()=>G(n().includes("popover")?n():`popover ${n()}`)]),s(g,v)};F(f,g=>{r()&&g(h)})}s(a,d),q()}K(["keydown"]);var dn=c("<button><!></button>");function _e(a,e){A(e,!0);const{toggleDropdown:n}=X("dropdown");let t=le(e,["$$slots","$$events","$$legacy","children","class"]);var o=dn();ue(o,i=>({class:i,onclick:n,...t}),[()=>e.class?.includes("btn")?e.class:`btn ${e.class}`]);var r=b(o);N(r,()=>e.children??oe),m(o),s(a,o),q()}var un=c("<button><!></button>");function z(a,e){A(e,!0);let n=le(e,["$$slots","$$events","$$legacy","children","class"]);const{closeDropdown:t}=X("dropdown");var o=un();ue(o,()=>({onclick:t,class:`btn-ghost-eqmd focus:bg-input justify-start whitespace-nowrap ${e.class}`,role:"menuitem",...n}));var r=b(o);N(r,()=>e.children??oe),m(o),s(a,o),q()}var pn=c('<i class="i-mage:preview-fill"></i> Preview',1),mn=c('<i class="i-majesticons:code"></i> Code',1),bn=c("<!> <!>",1),vn=c('<i class="i-devicon:html5"></i> file.html',1),fn=c('<i class="i-devicon:svelte"></i> Svelte',1),gn=c('<i class="i-devicon:react"></i> React',1),hn=c('<i class="i-devicon:solidjs"></i> Solid',1),xn=c("<!> <!> <!>",1),_n=c('<!> <pre class="p5 rounded brd rounded-t-0 max-h-400px overflow-auto"><code> </code></pre>',1),yn=c("<!> <!> <!>",1);function pa(a,e){const n=le(e,["$$slots","$$events","$$legacy"]);let{demo:t}=n,o=ie({svelte:"",react:"",solid:"",html:""}),r=M(null);const i=d=>{if(P(r,d,!0),d==="svelte"&&!o.svelte&&t.code.svelte)o.svelte=t.code.svelte;else if(d==="react"&&!o.react&&t.code.react){const f=t.code.react;o.react=f.replaceAll("class=","className="),!o.solid&&!t.code.solid&&(o.solid=f.replaceAll("react","solid"))}else d==="solid"&&!o.solid&&t.code.solid?o.solid=t.code.solid:d==="html"&&!o.html&&t.code.html&&(o.html=t.code.html)};ve(a,{defaultValue:"preview",children:(d,f)=>{var h=yn(),g=S(h);ge(g,{class:"tabs w-fit p1 !children:p2 !children:px3",children:(w,I)=>{var u=bn(),x=S(u);Q(x,{value:"preview",children:(B,T)=>{var C=pn();_(),s(B,C)},$$slots:{default:!0}});var $=l(x,2);Q($,{value:"code",children:(B,T)=>{var C=mn();_(),s(B,C)},$$slots:{default:!0}}),s(w,u)},$$slots:{default:!0}});var v=l(g,2);fe(v,{value:"preview",children:(w,I)=>{var u=R();const x=de(()=>t.preview);var $=S(u);Ae($,()=>p(x),(B,T)=>{T(B,{})}),s(w,u)},$$slots:{default:!0}});var y=l(v,2);fe(y,{value:"code",children:(w,I)=>{ve(w,{get value(){return p(r)},setValue:i,children:(u,x)=>{var $=_n(),B=S($);ge(B,{class:"tabs-line-primary brd rounded-t [&>button]:capitalize",children:(Y,D)=>{var E=R(),k=S(E);{var Se=J=>{Q(J,{value:"html",children:(ne,re)=>{var te=vn();_(),s(ne,te)},$$slots:{default:!0}})},Ie=J=>{var ne=xn(),re=S(ne);Q(re,{value:"svelte",children:(Z,me)=>{var ee=fn();_(),s(Z,ee)},$$slots:{default:!0}});var te=l(re,2);Q(te,{value:"react",children:(Z,me)=>{var ee=gn();_(),s(Z,ee)},$$slots:{default:!0}});var Pe=l(te,2);Q(Pe,{value:"solid",children:(Z,me)=>{var ee=hn();_(),s(Z,ee)},$$slots:{default:!0}}),s(J,ne)};F(k,J=>{t.code.html?J(Se):J(Ie,!1)})}s(Y,E)},$$slots:{default:!0}});var T=l(B,2),C=b(T),H=b(C,!0);m(C),m(T),j(()=>$e(H,p(r)?o[p(r)]:"")),s(u,$)},$$slots:{default:!0}})},$$slots:{default:!0}}),s(d,h)},$$slots:{default:!0}})}var wn=c('<div class="flex gap3"><span class="badge-solid">Badge</span> <span class="badge-secondary">Secondary</span> <span class="badge-outline">Outline</span> <span class="badge-surface">Surface</span></div>');function kn(a){var e=wn();s(a,e)}var $n=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!></div>');function Dn(a){var e=$n(),n=b(e);L(n,{class:"btn-success",txt:"Success"});var t=l(n,2);L(t,{class:"btn-warning",txt:"Warning"});var o=l(t,2);L(o,{class:"btn-danger",txt:"danger"}),m(e),s(a,e)}var Cn=c('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary">Primary</button> <button class="btn-soft">Soft</button> <button class="btn-outline">Outline</button> <button class="btn-ghost">Ghost</button> <button class="btn-emerald5 text-white"><i class="i-line-md:email-filled"></i> Email</button> <button class="btn-outline btn"><i class="i-iconamoon:send"></i> Send us</button> <button class="btn-soft"><i class="i-eos-icons:loading"></i> Fetching...</button> <button class="btn-primary-eqmd" aria-label="plus button"><i class="i-tabler:plus"></i></button> <button class="btn-outline-eqmd rounded-full btn" aria-label="user button"><i class="i-iconoir:user"></i></button> <hr class="w-full brd mt3 mb1"/> <button class="btn-soft-xs">Button</button> <button class="btn-soft-sm">Button</button> <button class="btn-soft-md">Button</button> <button class="btn-soft-lg">Button</button> <button class="btn-soft-xl">Button</button></div>');function Sn(a){var e=Cn();s(a,e)}var In=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function Pn(a){var e=In(),n=b(e);L(n,{class:"btn-emerald5 text-white",iconL:"i-line-md:email-filled",txt:"Email"});var t=l(n,2);L(t,{iconL:"i-iconamoon:send",txt:"Send us",class:"btn-outline"});var o=l(t,2);L(o,{loading:!0,loaderTxt:"Fetching...",disabled:!0,txt:"Fetch data"});var r=l(o,2);L(r,{iconL:"i-tabler:plus",class:"btn-primary-eqmd","aria-label":"plus button"});var i=l(r,2);L(i,{iconL:"i-iconoir:user",class:"btn-outline-eqmd rounded-full","aria-label":"user button"}),m(e),s(a,e)}var Ln=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function En(a){var e=Ln(),n=b(e);L(n,{class:"btn-soft-xs",txt:"Success"});var t=l(n,2);L(t,{class:"btn-soft-sm",txt:"Success"});var o=l(t,2);L(o,{class:"btn-soft-md",txt:"Success"});var r=l(o,2);L(r,{class:"btn-soft-lg",txt:"Success"});var i=l(r,2);L(i,{class:"btn-soft-xl",txt:"Success"}),m(e),s(a,e)}var Bn=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!></div>');function Tn(a){var e=Bn(),n=b(e);L(n,{txt:"Primary",class:"btn-primary"});var t=l(n,2);L(t,{class:"soft",txt:"Soft"});var o=l(t,2);L(o,{class:"btn-outline",txt:"Outline"});var r=l(o,2);L(r,{class:"btn-ghost",txt:"Ghost"}),m(e),s(a,e)}var zn=c('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><input type="checkbox" class="checkbox"/> <input type="checkbox" class="checkbox-primary"/> <input type="checkbox" class="checkbox-red"/> <input type="checkbox" class="checkbox-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-md"/> <input type="checkbox" class="checkbox-lg"/> <input type="checkbox" class="checkbox-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-indigo-md"/> <input type="checkbox" class="checkbox-red-lg"/> <input type="checkbox" class="checkbox-slate-xl"/> <input type="checkbox" class="checkbox-xl !after:checked:i-ph:check-fat-fill !after:checked:size-6"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-blue text-white"/> <input type="checkbox" class="checkbox-amber text-amber8"/> <input type="checkbox" class="checkbox-emerald"/> <input type="checkbox" class="checkbox checked:bg-bg text-fg"/></div>');function jn(a){var e=zn(),n=l(b(e),2);n.defaultChecked=!0;var t=l(n,2);t.defaultChecked=!0;var o=l(t,2);o.defaultChecked=!0;var r=l(o,4);r.defaultChecked=!0;var i=l(r,2);i.defaultChecked=!0;var d=l(i,2);d.defaultChecked=!0;var f=l(d,2);f.defaultChecked=!0;var h=l(f,4);h.defaultChecked=!0;var g=l(h,2);g.defaultChecked=!0;var v=l(g,2);v.defaultChecked=!0;var y=l(v,2);y.defaultChecked=!0;var w=l(y,2);w.defaultChecked=!0;var I=l(w,4);I.defaultChecked=!0;var u=l(I,2);u.defaultChecked=!0;var x=l(u,2);x.defaultChecked=!0;var $=l(x,2);$.defaultChecked=!0,m(e),s(a,e)}var On=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="checkbox" id="option" class="checkbox-fg"/> <label for="option">Option</label></div>');function An(a){var e=On(),n=b(e);n.defaultChecked=!0,_(2),m(e),s(a,e)}var qn=c('<div class="flex brd p20 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"><input type="checkbox" id="tnc" class="checkbox"/> <label for="tnc">I agree to the Terms and Conditions</label> <input type="checkbox" id="tnc2" class="checkbox-blue"/> <div><label for="tnc2">I understand and read the privacy policy</label> <br/> <span class="text-mutedfg text-sm">By Agreeing you accept our <a class="link" href="/">Privacy Policy</a></span></div> <input type="checkbox" id="tnc3" class="checkbox-slate" disabled/> <label for="tnc3" class="muted-70">I have freedom of speech</label></div></div>');function Fn(a){var e=qn(),n=b(e),t=b(n);t.defaultChecked=!0;var o=l(t,4);o.defaultChecked=!0,_(6),m(n),m(e),s(a,e)}const Nn=(a,e)=>P(e,!0);var Rn=c('<h3>Edit Account</h3> <p class="text-mutedfg mb2">Make changes to your user profile here.</p> <label for="name">Name</label> <input class="input-outline" id="name" placeholder="Enter your name"/> <label for="email">Email</label> <input type="email" class="input-outline" id="email" placeholder="Enter your email"/> <div class="flex gap3 items-center ml-auto mt3"><button class="btn-soft">Cancel</button> <button class="btn-primary">Save</button></div>',1),Mn=c('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary mx-auto">Open</button> <!></div>');function Un(a){let e=M(!1);const n=()=>P(e,!1);var t=Mn(),o=b(t);o.__click=[Nn,e];var r=l(o,2);Ge(r,{get open(){return p(e)},close:n,class:"grid gap4",children:(i,d)=>{var f=Rn(),h=l(S(f),12),g=b(h);g.__click=n,_(2),m(h),s(i,f)},$$slots:{default:!0}}),m(t),s(a,t)}K(["click"]);var Vn=c('<!> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!>',1),Wn=c("<!> <!>",1),Gn=c('<i class="i-line-md:star-filled"></i> With icons',1),Hn=c('<i class="i-line-md:account"></i>Profile',1),Kn=c('<i class="i-nimbus:cog"></i>Settings',1),Jn=c('<i class="i-line-md:logout"></i>Log out',1),Qn=c("<!> <!> <!>",1),Xn=c("<!> <!>",1),Yn=c('<div class="flex flex-gap3 flex-wrap justify-center brd p20 rounded"><!> <!></div>');function Zn(a){var e=Yn(),n=b(e);he(n,{children:(o,r)=>{var i=Wn(),d=S(i);_e(d,{class:"btn-primary",children:(h,g)=>{_();var v=O("Click me");s(h,v)},$$slots:{default:!0}});var f=l(d,2);xe(f,{children:(h,g)=>{var v=Vn(),y=S(v);z(y,{children:(D,E)=>{_();var k=O("Profile");s(D,k)},$$slots:{default:!0}});var w=l(y,2);z(w,{children:(D,E)=>{_();var k=O("Billing");s(D,k)},$$slots:{default:!0}});var I=l(w,2);z(I,{children:(D,E)=>{_();var k=O("Settings");s(D,k)},$$slots:{default:!0}});var u=l(I,2);z(u,{children:(D,E)=>{_();var k=O("Keyboard shortcuts");s(D,k)},$$slots:{default:!0}});var x=l(u,4);z(x,{children:(D,E)=>{_();var k=O("Team");s(D,k)},$$slots:{default:!0}});var $=l(x,2);z($,{children:(D,E)=>{_();var k=O("Invite users");s(D,k)},$$slots:{default:!0}});var B=l($,2);z(B,{children:(D,E)=>{_();var k=O("New Team");s(D,k)},$$slots:{default:!0}});var T=l(B,4);z(T,{children:(D,E)=>{_();var k=O("GitHub");s(D,k)},$$slots:{default:!0}});var C=l(T,2);z(C,{children:(D,E)=>{_();var k=O("Support");s(D,k)},$$slots:{default:!0}});var H=l(C,2);z(H,{disabled:!0,children:(D,E)=>{_();var k=O("API");s(D,k)},$$slots:{default:!0}});var Y=l(H,4);z(Y,{children:(D,E)=>{_();var k=O("Log out");s(D,k)},$$slots:{default:!0}}),s(h,v)},$$slots:{default:!0}}),s(o,i)},$$slots:{default:!0}});var t=l(n,2);he(t,{children:(o,r)=>{var i=Xn(),d=S(i);_e(d,{class:"btn-soft",children:(h,g)=>{var v=Gn();_(),s(h,v)},$$slots:{default:!0}});var f=l(d,2);xe(f,{children:(h,g)=>{var v=Qn(),y=S(v);z(y,{children:(u,x)=>{var $=Hn();_(),s(u,$)},$$slots:{default:!0}});var w=l(y,2);z(w,{children:(u,x)=>{var $=Kn();_(),s(u,$)},$$slots:{default:!0}});var I=l(w,2);z(I,{children:(u,x)=>{var $=Jn();_(),s(u,$)},$$slots:{default:!0}}),s(h,v)},$$slots:{default:!0}}),s(o,i)},$$slots:{default:!0}}),m(e),s(a,e)}const et=(a,e)=>{P(e,p(e)==="text"?"password":"text",!0)};var nt=c('<button type="button" class="btn-ghost-eqsm rounded-full mr--2" aria-label="Toggle password visibility"><i></i></button>'),tt=c('<div class="flex flex-gap5 flex-wrap items-center brd p10 py20 rounded justify-center"><form class="grid gap3"><label for="email" class="reqstar">Email</label> <!> <label for="passwd">Password</label> <!> <input type="submit" class="!btn-primary ml-auto mt3"/></form></div>');function at(a,e){A(e,!0);let n=M("password");const t=f=>{f.preventDefault();const h=new FormData(f.target),g=h.get("email"),v=h.get("passwd");alert(`
Email: ${g}
Password: ${v}`)};var o=tt(),r=b(o),i=l(b(r),2);W(i,{required:!0,name:"email",id:"email",placeholder:"Enter email",type:"email",iconL:"i-line-md:email",class:"grinput-outline mb3"});var d=l(i,4);W(d,{name:"passwd",id:"passwd",placeholder:"Enter Password",get type(){return p(n)},iconL:"i-lucide:key-round",class:"grinput-outline",iconR:h=>{var g=nt();g.__click=[et,n];var v=b(g);m(g),j(()=>U(v,1,G(p(n)=="text"?"i-heroicons-solid:eye":"i-heroicons-solid:eye-off"))),s(h,g)},$$slots:{iconR:!0}}),_(2),m(r),m(o),ke("submit",r,t),s(a,o),q()}K(["click"]);var ot=c('<div class="flex flex-col flex-gap5 flex-wrap items-center brd p10 rounded"><input class="input" placeholder="Enter name"/> <input class="input-outline" placeholder="Enter name"/> <br/> <p>sizes</p> <input class="input-outline-sm" placeholder="Enter name"/> <input class="input-outline-md" disabled placeholder="Enter name"/> <input class="input-lg" placeholder="Enter name"/> <input class="input-outline-xl" placeholder="Enter name"/> <p>Icons</p> <div class="grid grid-cols-2 grid-gap5"><div class="grinput"><i class="i-ri:user-line"></i> <input placeholder="Enter name"/></div> <div class="grinput-outline"><i class="i-line-md:email-filled"></i> <input placeholder="Enter name"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter price" type="number"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter salary" disabled/></div> <div class="grinput-outline p0 col-span-2"><span class="bg-mutedbg p2 px3 rounded-l">$</span> <input placeholder="Enter name"/> <span class="bg-mutedbg p2 rounded-r">USD</span></div></div></div>');function st(a){var e=ot();s(a,e)}var lt=c('<div class="grid grid-gap5 grid-wrap items-center brd p5 rounded"><!> <!> <!> <!></div>');function rt(a){var e=lt(),n=b(e);W(n,{placeholder:"size (sm)",class:"grinput-sm"});var t=l(n,2);W(t,{placeholder:"size (md)",class:"grinput-md"});var o=l(t,2);W(o,{placeholder:"size (lg)",class:"grinput-lg"});var r=l(o,2);W(r,{placeholder:"size (xl)",class:"grinput-outline-xl"}),m(e),s(a,e)}var it=c('<div class="flex flex-gap5 flex-wrap items-center brd p10 rounded justify-center"><!> <!></div>');function ct(a){var e=it(),n=b(e);W(n,{placeholder:"Enter name"});var t=l(n,2);W(t,{placeholder:"Enter name",class:"grinput-outline"}),m(e),s(a,e)}var dt=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="radio" class="radio" name="group1"/> <input type="radio" class="radio-primary" name="group1"/> <input type="radio" class="radio-red" name="group1"/> <input type="radio" class="radio-amber4" name="group1"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group2"/> <input type="radio" class="radio-md" name="group2"/> <input type="radio" class="radio-lg" name="group2"/> <input type="radio" class="radio-xl" name="group2"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group3"/> <input type="radio" class="radio-indigo-md" name="group3"/> <input type="radio" class="radio-red-lg" name="group3"/> <input type="radio" class="radio-slate-xl" name="group3"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radiob-blue" name="group4"/> <input type="radio" class="radiob-amber" name="group4"/> <input type="radio" class="radiob-emerald" name="group4"/> <input type="radio" class="radiob" name="group4"/></div>');function ut(a){var e=dt(),n=b(e);n.defaultChecked=!0;var t=l(n,14);t.defaultChecked=!0;var o=l(t,8);o.defaultChecked=!0;var r=l(o,14);r.defaultChecked=!0,m(e),s(a,e)}var pt=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&amp;>label]:mr3"><input type="radio" id="option1" name="group" class="radio"/> <label for="option1">Arch</label> <input type="radio" id="option2" name="group" class="radio"/> <label for="option2">Void</label> <input type="radio" id="option3" name="group" class="radiob"/> <label for="option3">Ubuntu</label> <input type="radio" id="option4" name="group" class="radiob"/> <label for="option4">Fedora</label></div>');function mt(a){var e=pt(),n=b(e);n.defaultChecked=!0,_(14),m(e),s(a,e)}var bt=c('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="radio" id="email" name="x" class="radio"/> <label for="email">Email notifications</label> <input type="radio" id="sms" name="x" class="radio-blue"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="radio" id="none" name="x" class="radio-slate"/> <label for="none">No notifications</label> <input type="radio" id="disagree" name="x" class="radio-red"/> <label for="disagree">Stop Bothering!</label></div></div>');function vt(a){var e=bt(),n=b(e),t=b(n);t.defaultChecked=!0,_(14),m(n),m(e),s(a,e)}var ft=c('<div class="flex flex-gap3 flex-wrap justify-center brd p10 py20 rounded"><div class="grid grid-cols-2 grid-gap3 w-2/3"><!> <!> <!> <!></div></div>');function gt(a){const e=[{value:"1",name:"Option 1"},{value:"2",name:"Option 2"},{value:"3",name:"Option 3"},{value:"4",name:"Option 4"},{value:"5",name:"Option 5 keyboad hehe"}],n=[{value:"apple",name:"Apple ",iconL:"i-noto:red-apple"},{value:"lime",name:"Lime",iconL:"i-noto:lime"},{value:"watermelon",name:"Watermelon",iconL:"i-noto:watermelon"},{value:"strawberry",name:"Strawberry",iconL:"i-noto:strawberry"},{value:"mango",name:"Mango",iconL:"i-noto:mango"}],t=[{value:"arch",name:"Arch Linux ",iconL:"i-logos:archlinux"},{value:"ubuntu",name:"Ubuntu",iconL:"i-logos:ubuntu"},{value:"fedora",name:"Fedora",iconL:"i-logos:fedora"},{value:"manjaro",name:"Manjaro",iconL:"i-logos:manjaro"},{value:"artix",name:"Artix ",iconL:"i-devicon:artixlinux"}];var o=ft(),r=b(o),i=b(r);ae(i,{get options(){return e},dropdownCss:"bg-mutedbg border-0",optionCss:"data-active:bg-input"});var d=l(i,2);ae(d,{get options(){return n},triggerProps:{class:"btn-outline"},placeholder:"Select fruit"});var f=l(d,2);ae(f,{get options(){return n},triggerProps:{class:"btn-outline",disabled:!0},placeholder:"Disabled Select"});var h=l(f,2);ae(h,{get options(){return t},placeholder:"Select distro",optinCss:"gap4"}),m(r),m(o),s(a,o)}var ht=c('<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded"><input type="checkbox" class="switch"/> <input type="checkbox" class="switch-flat-md-primary"/> <input type="checkbox" class="switch-flat-md-red"/> <input type="checkbox" class="switch-flat-md-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-flat-sm"/> <input type="checkbox" class="switch-flat-md"/> <input type="checkbox" class="switch-flat-lg"/> <input type="checkbox" class="switch-flat-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-line-sm"/> <input type="checkbox" class="switch-line-md-indigo"/> <input type="checkbox" class="switch-line-lg-red"/> <input type="checkbox" class="switch-line-xl-slate"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-knob-md-blue"/> <input type="checkbox" class="switch-knob-md-amber"/> <input type="checkbox" class="switch-flat-md-emerald"/> <input type="checkbox" class="switch-knob" name="group4"/></div>');function xt(a){var e=ht(),n=b(e);n.defaultChecked=!0;var t=l(n,16);t.defaultChecked=!0;var o=l(t,10);o.defaultChecked=!0;var r=l(o,2);r.defaultChecked=!0;var i=l(r,2);i.defaultChecked=!0;var d=l(i,10);d.defaultChecked=!0,m(e),s(a,e)}var _t=c('<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded"><input type="checkbox" class="switch-line"/> <input type="checkbox" class="switch-flat"/> <input type="checkbox" class="switch-knob"/></div>');function yt(a){var e=_t(),n=l(b(e),2);n.defaultChecked=!0,_(2),m(e),s(a,e)}var wt=c('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="checkbox" id="email" class="switch-line"/> <label for="email">Email notifications</label> <input type="checkbox" id="sms" class="switch-line"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="checkbox" id="none" class="switch"/> <label for="none">No notifications</label> <input type="checkbox" id="disagree" class="switch"/> <label for="disagree">Stop Bothering!</label></div></div>');function kt(a){var e=wt(),n=b(e),t=b(n);t.defaultChecked=!0,_(14),m(n),m(e),s(a,e)}const $t=`<div class="flex gap3">
  <span class="badge-solid">Badge</span>
  <span class="badge-secondary">Secondary</span>
  <span class="badge-outline">Outline</span>
  <span class="badge-surface">Surface</span>
</div>
`,Dt=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
      <Btn class="btn-success" txt="Success" />
      <Btn class="btn-warning" txt="Warning" />
      <Btn class="btn-danger" txt="danger" />
    </div>
  );
};
`,Ct=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn class="btn-success" txt="Success" />
  <Btn class="btn-warning" txt="Warning" />
  <Btn class="btn-danger" txt="danger" />
</div>
`,St=`<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
  <button class="btn-primary">Primary</button>
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
</div>
`,It=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
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
    </div>
  );
};
`,Pt=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
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
</div>
`,Lt=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
      <Btn class="btn-soft-xs" txt="Success" />
      <Btn class="btn-soft-sm" txt="Success" />
      <Btn class="btn-soft-md" txt="Success" />
      <Btn class="btn-soft-lg" txt="Success" />
      <Btn class="btn-soft-xl" txt="Success" />
    </div>
  );
};
`,Et=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn class="btn-soft-xs" txt="Success" />
  <Btn class="btn-soft-sm" txt="Success" />
  <Btn class="btn-soft-md" txt="Success" />
  <Btn class="btn-soft-lg" txt="Success" />
  <Btn class="btn-soft-xl" txt="Success" />
</div>
`,Bt=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
      <Btn txt="Primary" class="btn-primary" />
      <Btn class="soft" txt="Soft" />
      <Btn class="btn-outline" txt="Outline" />
      <Btn class="btn-ghost" txt="Ghost" />
    </div>
  );
};
`,Tt=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn txt="Primary" class="btn-primary" />
  <Btn class="soft" txt="Soft" />
  <Btn class="btn-outline" txt="Outline" />
  <Btn class="btn-ghost" txt="Ghost" />
</div>
`,zt=`<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
  <input type="checkbox" class="checkbox" />
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
</div>
`,jt=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" id="option" class="checkbox-fg" defaultChecked />
  <label for="option">Option</label>
</div>
`,Ot=`<div class="flex brd p20 rounded-xl justify-center">
  <div
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
</div>
`,At=`import { useState } from "react";
import { Dialog } from "@haze-ui/react";

export default () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
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
    </div>
  );
};
`,qt=`<script lang="ts">
  import { Dialog } from "@haze-ui/svelte";

  let open = $state(false);
  const setClose = () => open = false;
  const setOpen = () => open = true;
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
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
</div>
`,Ft=`import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@haze-ui/react";

export default () => {
  <div>
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
  </div>;
};
`,Nt=`<script lang="ts">
  import {
    Dropdown,
    DropdownContent,
    DropdownItem,
    DropdownTrigger,
  } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap justify-center brd p20 rounded">
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
</div>
`,Rt=`import { Input } from "@haze-ui/react";
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
`,Mt=`<script lang="ts">
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

<div
  class="flex flex-gap5 flex-wrap items-center brd p10 py20 rounded justify-center"
>
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
</div>
`,Ut=`<div
  class="flex flex-col flex-gap5 flex-wrap items-center brd p10 rounded"
>
  <input class="input" placeholder="Enter name" />
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
</div>
`,Vt=`import { Input } from "@haze-ui/react";

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
`,Wt=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<div class="grid grid-gap5 grid-wrap items-center brd p5 rounded">
  <Input placeholder="size (sm)" class="grinput-sm" />
  <Input placeholder="size (md)" class="grinput-md" />
  <Input placeholder="size (lg)" class="grinput-lg" />
  <Input placeholder="size (xl)" class="grinput-outline-xl" />
</div>
`,Gt=`import { Input } from "@haze-ui/react";

export default () => {
  return (
    <div>
      <Input placeholder="Enter name" />
      <Input placeholder="Enter name" class="grinput-outline" />
    </div>
  );
};
`,Ht=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap5 flex-wrap items-center brd p10 rounded justify-center">
  <Input placeholder="Enter name" />
  <Input placeholder="Enter name" class="grinput-outline" />
</div>
`,Kt=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <input type="radio" class="radio" name="group1" defaultChecked />
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
</div>
`,Jt=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&>label]:mr3">
  <input type="radio" id="option1" name="group" class="radio" defaultChecked />
  <label for="option1">Arch</label>

  <input type="radio" id="option2" name="group" class="radio" />
  <label for="option2">Void</label>

  <input type="radio" id="option3" name="group" class="radiob" />
  <label for="option3">Ubuntu</label>

  <input type="radio" id="option4" name="group" class="radiob" />
  <label for="option4">Fedora</label>
</div>
`,Qt=`<div class="flex brd p20 gap5 rounded-xl justify-center">
  <div
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
      <span class="text-mutedfg text-sm"
      >Standard messaging rates may apply</span>
    </div>

    <input type="radio" id="none" name="x" class="radio-slate" />
    <label for="none">No notifications</label>

    <input type="radio" id="disagree" name="x" class="radio-red" />
    <label for="disagree">Stop Bothering!</label>
  </div>
</div>
`,Xt=`import { Select } from "@haze-ui/react";

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
`,Yt=`<script lang="ts">
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

<div class="flex flex-gap3 flex-wrap justify-center brd p10 py20 rounded">
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
</div>
`,Zt=`<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded">
  <input type="checkbox" class="switch" defaultChecked />
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
</div>
`,ea=`<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" class="switch-line" />
  <input type="checkbox" class="switch-flat" defaultChecked />
  <input type="checkbox" class="switch-knob" />
</div>
`,na=`<div class="flex brd p20 gap5 rounded-xl justify-center">
  <div
    class="[&>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"
  >
    <input type="checkbox" id="email" class="switch-line" defaultChecked />
    <label for="email">Email notifications</label>

    <input type="checkbox" id="sms" class="switch-line" />
    <div>
      <label for="sms">SMS notifications</label><br />
      <span class="text-mutedfg text-sm"
      >Standard messaging rates may apply</span>
    </div>

    <input type="checkbox" id="none" class="switch" />
    <label for="none">No notifications</label>

    <input type="checkbox" id="disagree" class="switch" />
    <label for="disagree">Stop Bothering!</label>
  </div>
</div>
`,Ce=Object.assign({"/codemos/badge/usage.svelte":kn,"/codemos/btn/class.svelte":Dn,"/codemos/btn/html.svelte":Sn,"/codemos/btn/icons.svelte":Pn,"/codemos/btn/size.svelte":En,"/codemos/btn/variant.svelte":Tn,"/codemos/checkbox/colors.svelte":jn,"/codemos/checkbox/default.svelte":An,"/codemos/checkbox/form.svelte":Fn,"/codemos/dialog/usage.svelte":Un,"/codemos/dropdown/usage.svelte":Zn,"/codemos/input/form.svelte":at,"/codemos/input/html.svelte":st,"/codemos/input/size.svelte":rt,"/codemos/input/usage.svelte":ct,"/codemos/radio/colors.svelte":ut,"/codemos/radio/default.svelte":mt,"/codemos/radio/form.svelte":vt,"/codemos/select/usage.svelte":gt,"/codemos/switch/colors.svelte":xt,"/codemos/switch/default.svelte":yt,"/codemos/switch/form.svelte":kt}),ce=Object.assign({"/codemos/badge/usage.svelte":$t,"/codemos/btn/class.jsx":Dt,"/codemos/btn/class.svelte":Ct,"/codemos/btn/html.svelte":St,"/codemos/btn/icons.jsx":It,"/codemos/btn/icons.svelte":Pt,"/codemos/btn/size.jsx":Lt,"/codemos/btn/size.svelte":Et,"/codemos/btn/variant.jsx":Bt,"/codemos/btn/variant.svelte":Tt,"/codemos/checkbox/colors.svelte":zt,"/codemos/checkbox/default.svelte":jt,"/codemos/checkbox/form.svelte":Ot,"/codemos/dialog/usage.jsx":At,"/codemos/dialog/usage.svelte":qt,"/codemos/dropdown/usage.jsx":Ft,"/codemos/dropdown/usage.svelte":Nt,"/codemos/input/form.jsx":Rt,"/codemos/input/form.svelte":Mt,"/codemos/input/html.svelte":Ut,"/codemos/input/size.jsx":Vt,"/codemos/input/size.svelte":Wt,"/codemos/input/usage.jsx":Gt,"/codemos/input/usage.svelte":Ht,"/codemos/radio/colors.svelte":Kt,"/codemos/radio/default.svelte":Jt,"/codemos/radio/form.svelte":Qt,"/codemos/select/usage.jsx":Xt,"/codemos/select/usage.svelte":Yt,"/codemos/switch/colors.svelte":Zt,"/codemos/switch/default.svelte":ea,"/codemos/switch/form.svelte":na}),ma=(a,e)=>{const n=`/codemos/${a}/${e}`;return{preview:Ce[`${n}.svelte`],code:{svelte:ce[`${n}.svelte`],react:ce[`${n}.jsx`]}}},ba=(a,e)=>{const n=`/codemos/${a}/${e}`;return{preview:Ce[`${n}.svelte`],code:{html:ce[`${n}.svelte`]}}};export{pa as T,ba as a,ma as g};
