import"./DsnmJJEf.js";import{af as Le,k as Ee,ag as Be,o as ze,aV as Te,p as A,aK as M,b as I,a as s,c as q,f as d,e as b,s as l,r as m,h as j,g as p,ai as U,aL as de,ak as P,aj as ie,ab as ye,a9 as X,j as we,aJ as oe,n as _,t as O}from"./DtczRlXZ.js";import{a as R,f as ke,d as K,s as $e}from"./R0Tc61iS.js";import{p as se,i as N,r as le,s as je}from"./Bsd_8zgC.js";import{b as Oe,c as Ae}from"./DyKfUtFv.js";import{o as qe}from"./C1fZ_kB7.js";import{d as Fe,s as V,r as Ne,a as ue,c as G,b as W}from"./CrKGSx_S.js";import"./69_IOA4Y.js";import{B as L}from"./BXt25yBm.js";import{e as Re}from"./CEuL__aB.js";function pe(o,e,n){Le(()=>{var t=Ee(()=>e(o,n?.())||{});if(n&&t?.update){var a=!1,r={};Be(()=>{var i=n();ze(i),a&&Te(r,i)&&(r=i,t.update(i))}),a=!0}if(t?.destroy)return()=>t.destroy()})}const be=o=>o?typeof o=="string"?document.querySelector(o):o:null;function Me(o,e="body"){return be(e)?.appendChild(o),{update:n=>{n!==e&&(o.parentNode?.removeChild(o),be(n)?.appendChild(o))},destroy:()=>{o.parentNode?.removeChild(o)}}}const Ue=o=>{o.currentTarget==o.target&&close()};var Ve=d('<button class="i-pajamas:close absolute right-4 top-4 focus:bg-red" aria-label="close" tabindex="-1"></button>'),We=d('<dialog class="backdrop:bg-black/60"><div tabindex="-1"><!> <!></div></dialog>');function Ge(o,e){A(e,!0);let n=se(e,"closeIcon",3,!0);var t=M(),a=I(t);{var r=i=>{var c=We();c.__click=[Ue];var f=b(c),g=b(f);{var h=y=>{var w=Ve();w.__click=function(...S){e.close?.apply(this,S)},s(y,w)};N(g,y=>{n()&&y(h)})}var v=l(g,2);R(v,()=>e.children),m(f),m(c),pe(c,y=>Me?.(y)),Fe(c,()=>y=>y.showModal()),j(()=>V(f,1,`dialog ${e.class}`)),ke("close",c,function(...y){e.close?.apply(this,y)}),s(i,c)};N(a,i=>{e.open&&i(r)})}s(o,t),q()}K(["click"]);var He=d("<div></div>"),Ke=d("<div></div>"),Je=d("<div><!> <input/> <!></div>");function F(o,e){A(e,!0);let n=se(e,"class",3,""),t=le(e,["$$slots","$$events","$$legacy","iconL","iconR","class"]);var a=Je(),r=b(a);{var i=h=>{var v=M(),y=I(v);{var w=u=>{var x=He();j(()=>V(x,1,G(e.iconL))),s(u,x)},S=u=>{var x=M(),$=I(x);R($,()=>e.iconL),s(u,x)};N(y,u=>{typeof e.iconL=="string"?u(w):u(S,!1)})}s(h,v)};N(r,h=>{e.iconL&&h(i)})}var c=l(r,2);Ne(c),ue(c,()=>({...t}));var f=l(c,2);{var g=h=>{var v=M(),y=I(v);{var w=u=>{var x=Ke();j(()=>V(x,1,G(e.iconR))),s(u,x)},S=u=>{var x=M(),$=I(x);R($,()=>e.iconR),s(u,x)};N(y,u=>{typeof e.iconR=="string"?u(w):u(S,!1)})}s(h,v)};N(f,h=>{e.iconR&&h(g)})}m(a),j(h=>V(a,1,h),[()=>G(n()?.includes("grinput")?n():`grinput ${n()}`)]),s(o,a),q()}const De=(o,e)=>{function n(t){o.contains(t.target)||e()}return document.addEventListener("click",n),{destroy(){document.removeEventListener("click",n)}}};var Qe=()=>null,Xe=d("<span></span>"),Ye=d('<li role="option"><!> </li>'),Ze=d('<ul role="listbox"></ul>'),en=d('<div class="relative inline-flex first:children:w-full"><!> <!></div>');function ae(o,e){A(e,!0);let n=se(e,"placeholder",3,"Select Option"),t=U(!1),a=U(-1),r=U(-1);const i=()=>{P(t,!p(t)),p(t)&&P(r,p(a),!0)},c=u=>{u!==p(a)&&(P(a,u,!0),e.onChange?.(e.options[u].value)),P(t,!1)},f=u=>{switch(u.preventDefault(),u.key){case"Enter":c(p(r));break;case"Escape":P(t,!1);break;case"ArrowUp":P(r,p(r)>0?p(r)-1:0,!0);break;case"ArrowDown":P(r,p(r)<e.options.length-1?p(r)+1:0,!0);break}},h=`justify-start btn-ghost-eqmd transition-none ${e.optionCss?.includes("data-")?e.optionCss:`data-active:bg-mutedbg ${e.optionCss}`}`;var v=en(),y=b(v);{let u=de(()=>e.options[p(a)]?.name||n());L(y,je({"aria-haspopup":"listbox",get"aria-expanded"(){return p(t)},onclick:i,onkeydown:f,iconR:"ml-auto i-fa-solid:caret-down",get txt(){return p(u)}},()=>e.triggerProps))}var w=l(y,2);{var S=u=>{var x=Ze();W(x,"tabindex",-1),Re(x,23,()=>e.options,$=>$.value,($,B,z)=>{var C=Ye();W(C,"tabindex",-1),C.__click=()=>c(p(z)),C.__keydown=[Qe];var H=b(C);{var Y=E=>{var k=Xe();j(()=>V(k,1,G(p(B).iconL))),s(E,k)};N(H,E=>{p(B).iconL&&E(Y)})}var D=l(H);m(C),j(()=>{W(C,"id",`option-${p(z)}`),W(C,"aria-selected",p(a)===p(z)),W(C,"data-active",p(r)===p(z)),V(C,1,G(h)),$e(D,` ${p(B).name??""}`)}),s($,C)}),m(x),j(()=>{V(x,1,`popover z-10 whitespace-nowrap ${e.dropdownCss}`),W(x,"aria-activedescendant",`option-${p(r)}`)}),s(u,x)};N(w,u=>{p(t)&&u(S)})}m(v),pe(v,(u,x)=>De?.(u,x),()=>()=>P(t,!1)),s(o,v),q()}K(["click","keydown"]);function ve(o,e){A(e,!0);let n=U(ie(e.defaultValue)),t=ie([]);const a=c=>P(n,c,!0);ye("tabs",{value:()=>e.value??p(n),setValue:e.setValue??a,tabLabels:()=>t,addTabLabel:c=>t.push(c)});var r=M(),i=I(r);R(i,()=>e.children),s(o,r),q()}const nn=(o,e,n)=>e(n.value);var tn=d('<button role="tab"><!></button>');function Q(o,e){A(e,!0);const{value:n,setValue:t,addTabLabel:a}=X("tabs");qe(()=>a(e.value));var r=tn();r.__click=[nn,t,e];var i=b(r);R(i,()=>e.children),m(r),j(c=>W(r,"aria-selected",c),[()=>n()==e.value]),s(o,r),q()}K(["click"]);var an=d('<div role="tabpanel"><!></div>');function fe(o,e){A(e,!0);const{value:n}=X("tabs");var t=M(),a=I(t);{var r=i=>{var c=an(),f=b(c);R(f,()=>e.children),m(c),j(g=>W(c,"aria-labelledby",g),[()=>`tab-${n()}`]),s(i,c)};N(a,i=>{n()==e.value&&i(r)})}s(o,t),q()}const on=(o,e,n,t)=>{o.key=="ArrowLeft"&&p(e)!=0?n(t()[p(e)-1]):o.key=="ArrowRight"&&p(e)!=t().length-1&&n(t()[p(e)+1])};var sn=d('<div role="tablist" tabindex="-1"><!></div>');function he(o,e){A(e,!0);const{value:n,tabLabels:t,setValue:a}=X("tabs");let r=de(()=>t().indexOf(n()));we(()=>{n()||a(t()[0])});var i=sn();i.__keydown=[on,r,a,t];var c=b(i);R(c,()=>e.children),m(i),j(f=>V(i,1,f),[()=>G(e.class?.includes("tabs-")?e.class:`tabs ${e.class}`)]),s(o,i),q()}K(["keydown"]);var ln=d('<div class="relative inline-block"><!></div>');function ge(o,e){A(e,!0);let n=U(!1);const t=()=>P(n,!p(n)),a=()=>P(n,!1);ye("dropdown",{open:()=>p(n),toggleDropdown:t,closeDropdown:a});var i=ln(),c=b(i);R(c,()=>e.children??oe),m(i),pe(i,(f,g)=>De?.(f,g),()=>a),s(o,i),q()}const rn=(o,e,n,t)=>{if(!e())return;const a=n();a.length!==0&&(o.key=="ArrowDown"&&p(t)<a.length?(o.preventDefault(),P(t,p(t)+1),a[p(t)]?.focus()):o.key=="ArrowUp"&&p(t)>0&&(P(t,p(t)-1),a[p(t)]?.focus()))};var cn=d('<div role="menu" tabindex="0"><!></div>');function xe(o,e){A(e,!0);let n=se(e,"class",3,""),t=U(-1),a=U(null);const{open:r}=X("dropdown"),i=()=>p(a)?Array.from(p(a).querySelectorAll('[role="menuitem"]')):[];we(()=>{r()&&p(a)?.focus()});var c=M(),f=I(c);{var g=h=>{var v=cn();v.__keydown=[rn,r,i,t];var y=b(v);R(y,()=>e.children??oe),m(v),Oe(v,w=>P(a,w),()=>p(a)),j(w=>V(v,1,w),[()=>G(n().includes("popover")?n():`popover ${n()}`)]),s(h,v)};N(f,h=>{r()&&h(g)})}s(o,c),q()}K(["keydown"]);var dn=d("<button><!></button>");function _e(o,e){A(e,!0);const{toggleDropdown:n}=X("dropdown");let t=le(e,["$$slots","$$events","$$legacy","children","class"]);var a=dn();ue(a,i=>({class:i,onclick:n,...t}),[()=>e.class?.includes("btn")?e.class:`btn ${e.class}`]);var r=b(a);R(r,()=>e.children??oe),m(a),s(o,a),q()}var un=d("<button><!></button>");function T(o,e){A(e,!0);let n=le(e,["$$slots","$$events","$$legacy","children","class"]);const{closeDropdown:t}=X("dropdown");var a=un();ue(a,()=>({onclick:t,class:`btn-ghost-eqmd focus:bg-input justify-start whitespace-nowrap ${e.class}`,role:"menuitem",...n}));var r=b(a);R(r,()=>e.children??oe),m(a),s(o,a),q()}var pn=d('<i class="i-mage:preview-fill"></i> Preview',1),mn=d('<i class="i-majesticons:code"></i> Code',1),bn=d("<!> <!>",1),vn=d('<i class="i-devicon:html5"></i> file.html',1),fn=d('<i class="i-devicon:svelte"></i> Svelte',1),hn=d('<i class="i-devicon:react"></i> React',1),gn=d('<i class="i-devicon:solidjs"></i> Solid',1),xn=d("<!> <!> <!>",1),_n=d('<!> <pre class="p5 rounded brd rounded-t-0 max-h-400px overflow-auto"><code> </code></pre>',1),yn=d("<!> <!> <!>",1);function ca(o,e){const n=le(e,["$$slots","$$events","$$legacy"]);let{demo:t}=n,a=ie({svelte:"",react:"",solid:"",html:""}),r=U(null);const i=c=>{if(P(r,c,!0),c==="svelte"&&!a.svelte&&t.code.svelte)a.svelte=t.code.svelte;else if(c==="react"&&!a.react&&t.code.react){const f=t.code.react;a.react=f.replaceAll("class=","className="),!a.solid&&!t.code.solid&&(a.solid=f.replaceAll("react","solid"))}else c==="solid"&&!a.solid&&t.code.solid?a.solid=t.code.solid:c==="html"&&!a.html&&t.code.html&&(a.html=t.code.html)};ve(o,{defaultValue:"preview",children:(c,f)=>{var g=yn(),h=I(g);he(h,{class:"tabs w-fit p1 !children:p2 !children:px3",children:(w,S)=>{var u=bn(),x=I(u);Q(x,{value:"preview",children:(B,z)=>{var C=pn();_(),s(B,C)},$$slots:{default:!0}});var $=l(x,2);Q($,{value:"code",children:(B,z)=>{var C=mn();_(),s(B,C)},$$slots:{default:!0}}),s(w,u)},$$slots:{default:!0}});var v=l(h,2);fe(v,{value:"preview",children:(w,S)=>{var u=M();const x=de(()=>t.preview);var $=I(u);Ae($,()=>p(x),(B,z)=>{z(B,{})}),s(w,u)},$$slots:{default:!0}});var y=l(v,2);fe(y,{value:"code",children:(w,S)=>{ve(w,{get value(){return p(r)},setValue:i,children:(u,x)=>{var $=_n(),B=I($);he(B,{class:"tabs-line-primary brd rounded-t [&>button]:capitalize",children:(Y,D)=>{var E=M(),k=I(E);{var Ie=J=>{Q(J,{value:"html",children:(ne,re)=>{var te=vn();_(),s(ne,te)},$$slots:{default:!0}})},Se=J=>{var ne=xn(),re=I(ne);Q(re,{value:"svelte",children:(Z,me)=>{var ee=fn();_(),s(Z,ee)},$$slots:{default:!0}});var te=l(re,2);Q(te,{value:"react",children:(Z,me)=>{var ee=hn();_(),s(Z,ee)},$$slots:{default:!0}});var Pe=l(te,2);Q(Pe,{value:"solid",children:(Z,me)=>{var ee=gn();_(),s(Z,ee)},$$slots:{default:!0}}),s(J,ne)};N(k,J=>{t.code.html?J(Ie):J(Se,!1)})}s(Y,E)},$$slots:{default:!0}});var z=l(B,2),C=b(z),H=b(C,!0);m(C),m(z),j(()=>$e(H,p(r)?a[p(r)]:"")),s(u,$)},$$slots:{default:!0}})},$$slots:{default:!0}}),s(c,g)},$$slots:{default:!0}})}var wn=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!></div>');function kn(o){var e=wn(),n=b(e);L(n,{class:"btn-success",txt:"Success"});var t=l(n,2);L(t,{class:"btn-warning",txt:"Warning"});var a=l(t,2);L(a,{class:"btn-danger",txt:"danger"}),m(e),s(o,e)}var $n=d('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary">Primary</button> <button class="btn-soft">Soft</button> <button class="btn-outline">Outline</button> <button class="btn-ghost">Ghost</button> <button class="btn-emerald5 text-white"><i class="i-line-md:email-filled"></i> Email</button> <button class="btn-outline btn"><i class="i-iconamoon:send"></i> Send us</button> <button class="btn-soft"><i class="i-eos-icons:loading"></i> Fetching...</button> <button class="btn-primary-eqmd" aria-label="plus button"><i class="i-tabler:plus"></i></button> <button class="btn-outline-eqmd rounded-full btn" aria-label="user button"><i class="i-iconoir:user"></i></button> <hr class="w-full brd mt3 mb1"/> <button class="btn btn-soft-xs">Button</button> <button class="btn btn-soft-sm">Button</button> <button class="btn btn-soft-md">Button</button> <button class="btn btn-soft-lg">Button</button> <button class="btn btn-soft-xl">Button</button></div>');function Dn(o){var e=$n();s(o,e)}var Cn=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function In(o){var e=Cn(),n=b(e);L(n,{class:"btn-emerald5 text-white",iconL:"i-line-md:email-filled",txt:"Email"});var t=l(n,2);L(t,{iconL:"i-iconamoon:send",txt:"Send us",class:"btn-outline"});var a=l(t,2);L(a,{loading:!0,loaderTxt:"Fetching...",disabled:!0,txt:"Fetch data"});var r=l(a,2);L(r,{iconL:"i-tabler:plus",class:"btn-primary-eqmd","aria-label":"plus button"});var i=l(r,2);L(i,{iconL:"i-iconoir:user",class:"btn-outline-eqmd rounded-full","aria-label":"user button"}),m(e),s(o,e)}var Sn=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function Pn(o){var e=Sn(),n=b(e);L(n,{class:"btn-soft-xs",txt:"Success"});var t=l(n,2);L(t,{class:"btn-soft-sm",txt:"Success"});var a=l(t,2);L(a,{class:"btn-soft-md",txt:"Success"});var r=l(a,2);L(r,{class:"btn-soft-lg",txt:"Success"});var i=l(r,2);L(i,{class:"btn-soft-xl",txt:"Success"}),m(e),s(o,e)}var Ln=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!></div>');function En(o){var e=Ln(),n=b(e);L(n,{txt:"Primary",class:"btn-primary"});var t=l(n,2);L(t,{class:"soft",txt:"Soft"});var a=l(t,2);L(a,{class:"btn-outline",txt:"Outline"});var r=l(a,2);L(r,{class:"btn-ghost",txt:"Ghost"}),m(e),s(o,e)}var Bn=d('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><input type="checkbox" class="checkbox"/> <input type="checkbox" class="checkbox-primary"/> <input type="checkbox" class="checkbox-red"/> <input type="checkbox" class="checkbox-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-md"/> <input type="checkbox" class="checkbox-lg"/> <input type="checkbox" class="checkbox-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-5"/> <input type="checkbox" class="checkbox-indigo-7"/> <input type="checkbox" class="checkbox-red-9"/> <input type="checkbox" class="checkbox-slate-10"/> <input type="checkbox" class="checkbox-10 !after:checked:i-ph:check-fat-fill !after:checked:size-6"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-blue text-white"/> <input type="checkbox" class="checkbox-amber text-amber8"/> <input type="checkbox" class="checkbox-emerald"/> <input type="checkbox" class="checkbox checked:bg-bg text-fg"/></div>');function zn(o){var e=Bn(),n=l(b(e),2);n.defaultChecked=!0;var t=l(n,2);t.defaultChecked=!0;var a=l(t,2);a.defaultChecked=!0;var r=l(a,4);r.defaultChecked=!0;var i=l(r,2);i.defaultChecked=!0;var c=l(i,2);c.defaultChecked=!0;var f=l(c,2);f.defaultChecked=!0;var g=l(f,4);g.defaultChecked=!0;var h=l(g,2);h.defaultChecked=!0;var v=l(h,2);v.defaultChecked=!0;var y=l(v,2);y.defaultChecked=!0;var w=l(y,2);w.defaultChecked=!0;var S=l(w,4);S.defaultChecked=!0;var u=l(S,2);u.defaultChecked=!0;var x=l(u,2);x.defaultChecked=!0;var $=l(x,2);$.defaultChecked=!0,m(e),s(o,e)}var Tn=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="checkbox" id="option" class="checkbox-fg"/> <label for="option">Option</label></div>');function jn(o){var e=Tn(),n=b(e);n.defaultChecked=!0,_(2),m(e),s(o,e)}var On=d('<div class="flex brd p20 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"><input type="checkbox" id="tnc" class="checkbox"/> <label for="tnc">I agree to the Terms and Conditions</label> <input type="checkbox" id="tnc2" class="checkbox-blue"/> <div><label for="tnc2">I understand and read the privacy policy</label> <br/> <span class="text-mutedfg text-sm">By Agreeing you accept our <a class="link" href="/">Privacy Policy</a></span></div> <input type="checkbox" id="tnc3" class="checkbox-slate" disabled/> <label for="tnc3" class="muted-70">I have freedom of speech</label></div></div>');function An(o){var e=On(),n=b(e),t=b(n);t.defaultChecked=!0;var a=l(t,4);a.defaultChecked=!0,_(6),m(n),m(e),s(o,e)}const qn=(o,e)=>P(e,!0);var Fn=d('<h3>Edit Account</h3> <p class="text-mutedfg mb2">Make changes to your user profile here.</p> <label for="name">Name</label> <input class="input-outline" id="name" placeholder="Enter your name"/> <label for="email">Email</label> <input type="email" class="input-outline" id="email" placeholder="Enter your email"/> <div class="flex gap3 items-center ml-auto mt3"><button class="btn-soft">Cancel</button> <button class="btn-primary">Save</button></div>',1),Nn=d('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary mx-auto">Open</button> <!></div>');function Rn(o){let e=U(!1);const n=()=>P(e,!1);var t=Nn(),a=b(t);a.__click=[qn,e];var r=l(a,2);Ge(r,{get open(){return p(e)},close:n,class:"grid gap4",children:(i,c)=>{var f=Fn(),g=l(I(f),12),h=b(g);h.__click=n,_(2),m(g),s(i,f)},$$slots:{default:!0}}),m(t),s(o,t)}K(["click"]);var Mn=d('<!> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!>',1),Un=d("<!> <!>",1),Vn=d('<i class="i-line-md:star-filled"></i> With icons',1),Wn=d('<i class="i-line-md:account"></i>Profile',1),Gn=d('<i class="i-nimbus:cog"></i>Settings',1),Hn=d('<i class="i-line-md:logout"></i>Log out',1),Kn=d("<!> <!> <!>",1),Jn=d("<!> <!>",1),Qn=d('<div class="flex flex-gap3 flex-wrap justify-center brd p20 rounded"><!> <!></div>');function Xn(o){var e=Qn(),n=b(e);ge(n,{children:(a,r)=>{var i=Un(),c=I(i);_e(c,{class:"btn-primary",children:(g,h)=>{_();var v=O("Click me");s(g,v)},$$slots:{default:!0}});var f=l(c,2);xe(f,{children:(g,h)=>{var v=Mn(),y=I(v);T(y,{children:(D,E)=>{_();var k=O("Profile");s(D,k)},$$slots:{default:!0}});var w=l(y,2);T(w,{children:(D,E)=>{_();var k=O("Billing");s(D,k)},$$slots:{default:!0}});var S=l(w,2);T(S,{children:(D,E)=>{_();var k=O("Settings");s(D,k)},$$slots:{default:!0}});var u=l(S,2);T(u,{children:(D,E)=>{_();var k=O("Keyboard shortcuts");s(D,k)},$$slots:{default:!0}});var x=l(u,4);T(x,{children:(D,E)=>{_();var k=O("Team");s(D,k)},$$slots:{default:!0}});var $=l(x,2);T($,{children:(D,E)=>{_();var k=O("Invite users");s(D,k)},$$slots:{default:!0}});var B=l($,2);T(B,{children:(D,E)=>{_();var k=O("New Team");s(D,k)},$$slots:{default:!0}});var z=l(B,4);T(z,{children:(D,E)=>{_();var k=O("GitHub");s(D,k)},$$slots:{default:!0}});var C=l(z,2);T(C,{children:(D,E)=>{_();var k=O("Support");s(D,k)},$$slots:{default:!0}});var H=l(C,2);T(H,{disabled:!0,children:(D,E)=>{_();var k=O("API");s(D,k)},$$slots:{default:!0}});var Y=l(H,4);T(Y,{children:(D,E)=>{_();var k=O("Log out");s(D,k)},$$slots:{default:!0}}),s(g,v)},$$slots:{default:!0}}),s(a,i)},$$slots:{default:!0}});var t=l(n,2);ge(t,{children:(a,r)=>{var i=Jn(),c=I(i);_e(c,{class:"btn-soft",children:(g,h)=>{var v=Vn();_(),s(g,v)},$$slots:{default:!0}});var f=l(c,2);xe(f,{children:(g,h)=>{var v=Kn(),y=I(v);T(y,{children:(u,x)=>{var $=Wn();_(),s(u,$)},$$slots:{default:!0}});var w=l(y,2);T(w,{children:(u,x)=>{var $=Gn();_(),s(u,$)},$$slots:{default:!0}});var S=l(w,2);T(S,{children:(u,x)=>{var $=Hn();_(),s(u,$)},$$slots:{default:!0}}),s(g,v)},$$slots:{default:!0}}),s(a,i)},$$slots:{default:!0}}),m(e),s(o,e)}const Yn=(o,e)=>{P(e,p(e)==="text"?"password":"text",!0)};var Zn=d('<button type="button" class="btn-ghost-eqsm rounded-full mr--2" aria-label="Toggle password visibility"><i></i></button>'),et=d('<div class="flex flex-gap5 flex-wrap items-center brd p10 py20 rounded justify-center"><form class="grid gap3"><label for="email" class="reqstar">Email</label> <!> <label for="passwd">Password</label> <!> <input type="submit" class="!btn-primary ml-auto mt3"/></form></div>');function nt(o,e){A(e,!0);let n=U("password");const t=f=>{f.preventDefault();const g=new FormData(f.target),h=g.get("email"),v=g.get("passwd");alert(`
Email: ${h}
Password: ${v}`)};var a=et(),r=b(a),i=l(b(r),2);F(i,{required:!0,name:"email",id:"email",placeholder:"Enter email",type:"email",iconL:"i-line-md:email",class:"grinput-outline mb3"});var c=l(i,4);F(c,{name:"passwd",id:"passwd",placeholder:"Enter Password",get type(){return p(n)},iconL:"i-lucide:key-round",class:"grinput-outline",iconR:g=>{var h=Zn();h.__click=[Yn,n];var v=b(h);m(h),j(()=>V(v,1,G(p(n)=="text"?"i-heroicons-solid:eye":"i-heroicons-solid:eye-off"))),s(g,h)},$$slots:{iconR:!0}}),_(2),m(r),m(a),ke("submit",r,t),s(o,a),q()}K(["click"]);var tt=d('<div class="flex flex-col flex-gap5 flex-wrap items-center brd p10 rounded"><input class="input" placeholder="Enter name"/> <input class="input-outline" placeholder="Enter name"/> <br/> <p>sizes</p> <input class="input-outline-sm" placeholder="Enter name"/> <input class="input-outline-md" disabled placeholder="Enter name"/> <input class="input-lg" placeholder="Enter name"/> <input class="input-outline-xl" placeholder="Enter name"/> <p>Icons</p> <div class="grid grid-cols-2 grid-gap5"><div class="grinput"><i class="i-ri:user-line"></i> <input placeholder="Enter name"/></div> <div class="grinput-outline"><i class="i-line-md:email-filled"></i> <input placeholder="Enter name"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter price" type="number"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter salary" disabled/></div> <div class="grinput-outline p0 col-span-2"><span class="bg-mutedbg p2 px3 rounded-l">$</span> <input placeholder="Enter name"/> <span class="bg-mutedbg p2 rounded-r">USD</span></div></div></div>');function at(o){var e=tt();s(o,e)}var ot=d('<div class="grid grid-gap5 grid-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!> <!> <!></div>');function st(o){var e=ot(),n=b(e);F(n,{placeholder:"size (sm)",class:"grinput-sm"});var t=l(n,2);F(t,{placeholder:"size (md)",class:"grinput-md"});var a=l(t,2);F(a,{placeholder:"size (lg)",class:"grinput-lg"});var r=l(a,2);F(r,{placeholder:"size (xl)",class:"grinput-outline-xl"});var i=l(r,2);F(i,{placeholder:"size (2)",class:"grinput-2"});var c=l(i,2);F(c,{placeholder:"size (2.3)",class:"grinput-2.3"});var f=l(c,2);F(f,{placeholder:"size (2.9)",class:"grinput-outline-2.9"}),m(e),s(o,e)}var lt=d('<div class="flex flex-gap5 flex-wrap items-center brd p10 rounded justify-center"><!> <!></div>');function rt(o){var e=lt(),n=b(e);F(n,{placeholder:"Enter name"});var t=l(n,2);F(t,{placeholder:"Enter name",class:"grinput-outline"}),m(e),s(o,e)}var it=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="radio" class="radio" name="group1"/> <input type="radio" class="radio-primary" name="group1"/> <input type="radio" class="radio-red" name="group1"/> <input type="radio" class="radio-amber4" name="group1"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group2"/> <input type="radio" class="radio-md" name="group2"/> <input type="radio" class="radio-lg" name="group2"/> <input type="radio" class="radio-xl" name="group2"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-4" name="group3"/> <input type="radio" class="radio-indigo-6" name="group3"/> <input type="radio" class="radio-red-8" name="group3"/> <input type="radio" class="radio-slate-9" name="group3"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radiob-blue" name="group4"/> <input type="radio" class="radiob-amber" name="group4"/> <input type="radio" class="radiob-emerald" name="group4"/> <input type="radio" class="radiob" name="group4"/></div>');function ct(o){var e=it(),n=b(e);n.defaultChecked=!0;var t=l(n,14);t.defaultChecked=!0;var a=l(t,8);a.defaultChecked=!0;var r=l(a,14);r.defaultChecked=!0,m(e),s(o,e)}var dt=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&amp;>label]:mr3"><input type="radio" id="option1" name="group" class="radio"/> <label for="option1">Arch</label> <input type="radio" id="option2" name="group" class="radio"/> <label for="option2">Void</label> <input type="radio" id="option3" name="group" class="radiob"/> <label for="option3">Ubuntu</label> <input type="radio" id="option4" name="group" class="radiob"/> <label for="option4">Fedora</label></div>');function ut(o){var e=dt(),n=b(e);n.defaultChecked=!0,_(14),m(e),s(o,e)}var pt=d('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="radio" id="email" name="x" class="radio"/> <label for="email">Email notifications</label> <input type="radio" id="sms" name="x" class="radio-blue"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="radio" id="none" name="x" class="radio-slate"/> <label for="none">No notifications</label> <input type="radio" id="disagree" name="x" class="radio-red"/> <label for="disagree">Stop Bothering!</label></div></div>');function mt(o){var e=pt(),n=b(e),t=b(n);t.defaultChecked=!0,_(14),m(n),m(e),s(o,e)}var bt=d('<div class="flex flex-gap3 flex-wrap justify-center brd p10 py20 rounded"><div class="grid grid-cols-2 grid-gap3 w-2/3"><!> <!> <!> <!></div></div>');function vt(o){const e=[{value:"1",name:"Option 1"},{value:"2",name:"Option 2"},{value:"3",name:"Option 3"},{value:"4",name:"Option 4"},{value:"5",name:"Option 5 keyboad hehe"}],n=[{value:"apple",name:"Apple ",iconL:"i-noto:red-apple"},{value:"lime",name:"Lime",iconL:"i-noto:lime"},{value:"watermelon",name:"Watermelon",iconL:"i-noto:watermelon"},{value:"strawberry",name:"Strawberry",iconL:"i-noto:strawberry"},{value:"mango",name:"Mango",iconL:"i-noto:mango"}],t=[{value:"arch",name:"Arch Linux ",iconL:"i-logos:archlinux"},{value:"ubuntu",name:"Ubuntu",iconL:"i-logos:ubuntu"},{value:"fedora",name:"Fedora",iconL:"i-logos:fedora"},{value:"manjaro",name:"Manjaro",iconL:"i-logos:manjaro"},{value:"artix",name:"Artix ",iconL:"i-devicon:artixlinux"}];var a=bt(),r=b(a),i=b(r);ae(i,{get options(){return e},dropdownCss:"bg-mutedbg border-0",optionCss:"data-active:bg-input"});var c=l(i,2);ae(c,{get options(){return n},triggerProps:{class:"btn-outline"},placeholder:"Select fruit"});var f=l(c,2);ae(f,{get options(){return n},triggerProps:{class:"btn-outline",disabled:!0},placeholder:"Disabled Select"});var g=l(f,2);ae(g,{get options(){return t},placeholder:"Select distro",optinCss:"gap4"}),m(r),m(a),s(o,a)}var ft=d('<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded"><input type="checkbox" class="switch"/> <input type="checkbox" class="switch-flat-md-primary"/> <input type="checkbox" class="switch-flat-md-red"/> <input type="checkbox" class="switch-flat-md-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-flat-sm"/> <input type="checkbox" class="switch-flat-md"/> <input type="checkbox" class="switch-flat-lg"/> <input type="checkbox" class="switch-flat-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-line-4"/> <input type="checkbox" class="switch-line-6-indigo"/> <input type="checkbox" class="switch-line-8-red"/> <input type="checkbox" class="switch-line-9-slate"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-knob-md-blue"/> <input type="checkbox" class="switch-knob-md-amber"/> <input type="checkbox" class="switch-flat-md-emerald"/> <input type="checkbox" class="switch-knob" name="group4"/></div>');function ht(o){var e=ft(),n=b(e);n.defaultChecked=!0;var t=l(n,16);t.defaultChecked=!0;var a=l(t,8);a.defaultChecked=!0;var r=l(a,2);r.defaultChecked=!0;var i=l(r,2);i.defaultChecked=!0;var c=l(i,10);c.defaultChecked=!0,m(e),s(o,e)}var gt=d('<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded"><input type="checkbox" class="switch-line"/> <input type="checkbox" class="switch-flat"/> <input type="checkbox" class="switch-knob"/></div>');function xt(o){var e=gt(),n=l(b(e),2);n.defaultChecked=!0,_(2),m(e),s(o,e)}var _t=d('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="checkbox" id="email" class="switch-line"/> <label for="email">Email notifications</label> <input type="checkbox" id="sms" class="switch-line"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="checkbox" id="none" class="switch"/> <label for="none">No notifications</label> <input type="checkbox" id="disagree" class="switch"/> <label for="disagree">Stop Bothering!</label></div></div>');function yt(o){var e=_t(),n=b(e),t=b(n);t.defaultChecked=!0,_(14),m(n),m(e),s(o,e)}const wt=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
      <Btn class="btn-success" txt="Success" />
      <Btn class="btn-warning" txt="Warning" />
      <Btn class="btn-danger" txt="danger" />
    </div>
  );
};
`,kt=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn class="btn-success" txt="Success" />
  <Btn class="btn-warning" txt="Warning" />
  <Btn class="btn-danger" txt="danger" />
</div>
`,$t=`<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
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

  <button class="btn btn-soft-xs">Button</button>
  <button class="btn btn-soft-sm">Button</button>
  <button class="btn btn-soft-md">Button</button>
  <button class="btn btn-soft-lg">Button</button>
  <button class="btn btn-soft-xl">Button</button>
</div>
`,Dt=`import { Btn } from "@haze-ui/react";

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
`,Ct=`<script lang="ts">
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
`,It=`import { Btn } from "@haze-ui/react";

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
`,St=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn class="btn-soft-xs" txt="Success" />
  <Btn class="btn-soft-sm" txt="Success" />
  <Btn class="btn-soft-md" txt="Success" />
  <Btn class="btn-soft-lg" txt="Success" />
  <Btn class="btn-soft-xl" txt="Success" />
</div>
`,Pt=`import { Btn } from "@haze-ui/react";

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
`,Lt=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn txt="Primary" class="btn-primary" />
  <Btn class="soft" txt="Soft" />
  <Btn class="btn-outline" txt="Outline" />
  <Btn class="btn-ghost" txt="Ghost" />
</div>
`,Et=`<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
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

  <input type="checkbox" class="checkbox-5" defaultChecked />
  <input type="checkbox" class="checkbox-indigo-7" defaultChecked />
  <input type="checkbox" class="checkbox-red-9" defaultChecked />
  <input type="checkbox" class="checkbox-slate-10" defaultChecked />
  <input
    type="checkbox"
    class="checkbox-10 !after:checked:i-ph:check-fat-fill !after:checked:size-6"
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
`,Bt=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" id="option" class="checkbox-fg" defaultChecked />
  <label for="option">Option</label>
</div>
`,zt=`<div class="flex brd p20 rounded-xl justify-center">
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
`,Tt=`import { useState } from "react";
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
`,jt=`<script lang="ts">
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
`,Ot=`import {
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
`,At=`<script lang="ts">
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
`,qt=`import { Input } from "@haze-ui/react";
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
`,Ft=`<script lang="ts">
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
`,Nt=`<div
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
`,Rt=`import { Input } from "@haze-ui/react";

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
`,Mt=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<div class="grid grid-gap5 grid-wrap items-center brd p5 rounded">
  <Input placeholder="size (sm)" class="grinput-sm" />
  <Input placeholder="size (md)" class="grinput-md" />
  <Input placeholder="size (lg)" class="grinput-lg" />
  <Input placeholder="size (xl)" class="grinput-outline-xl" />
  <Input placeholder="size (2)" class="grinput-2" />
  <Input placeholder="size (2.3)" class="grinput-2.3" />
  <Input placeholder="size (2.9)" class="grinput-outline-2.9" />
</div>
`,Ut=`import { Input } from "@haze-ui/react";

export default () => {
  return (
    <div>
      <Input placeholder="Enter name" />
      <Input placeholder="Enter name" class="grinput-outline" />
    </div>
  );
};
`,Vt=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap5 flex-wrap items-center brd p10 rounded justify-center">
  <Input placeholder="Enter name" />
  <Input placeholder="Enter name" class="grinput-outline" />
</div>
`,Wt=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
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

  <input type="radio" class="radio-4" name="group3" />
  <input type="radio" class="radio-indigo-6" name="group3" defaultChecked />
  <input type="radio" class="radio-red-8" name="group3" />
  <input type="radio" class="radio-slate-9" name="group3" />

  <hr class="w-full brd border-input my2" />

  <input type="radio" class="radiob-blue" name="group4" />
  <input type="radio" class="radiob-amber" name="group4" />
  <input type="radio" class="radiob-emerald" name="group4" />
  <input type="radio" class="radiob" name="group4" defaultChecked />
</div>
`,Gt=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&>label]:mr3">
  <input type="radio" id="option1" name="group" class="radio" defaultChecked />
  <label for="option1">Arch</label>

  <input type="radio" id="option2" name="group" class="radio" />
  <label for="option2">Void</label>

  <input type="radio" id="option3" name="group" class="radiob" />
  <label for="option3">Ubuntu</label>

  <input type="radio" id="option4" name="group" class="radiob" />
  <label for="option4">Fedora</label>
</div>
`,Ht=`<div class="flex brd p20 gap5 rounded-xl justify-center">
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
`,Kt=`import { Select } from "@haze-ui/react";

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
`,Jt=`<script lang="ts">
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
`,Qt=`<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded">
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

  <input type="checkbox" class="switch-line-4" />
  <input type="checkbox" class="switch-line-6-indigo" defaultChecked />
  <input type="checkbox" class="switch-line-8-red" defaultChecked />
  <input type="checkbox" class="switch-line-9-slate" defaultChecked />

  <hr class="w-full brd border-input my2" />

  <input type="checkbox" class="switch-knob-md-blue" />
  <input type="checkbox" class="switch-knob-md-amber" />
  <input type="checkbox" class="switch-flat-md-emerald" />
  <input type="checkbox" class="switch-knob" name="group4" defaultChecked />
</div>
`,Xt=`<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" class="switch-line" />
  <input type="checkbox" class="switch-flat" defaultChecked />
  <input type="checkbox" class="switch-knob" />
</div>
`,Yt=`<div class="flex brd p20 gap5 rounded-xl justify-center">
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
`,Ce=Object.assign({"/codemos/btn/class.svelte":kn,"/codemos/btn/html.svelte":Dn,"/codemos/btn/icons.svelte":In,"/codemos/btn/size.svelte":Pn,"/codemos/btn/variant.svelte":En,"/codemos/checkbox/colors.svelte":zn,"/codemos/checkbox/default.svelte":jn,"/codemos/checkbox/form.svelte":An,"/codemos/dialog/usage.svelte":Rn,"/codemos/dropdown/usage.svelte":Xn,"/codemos/input/form.svelte":nt,"/codemos/input/html.svelte":at,"/codemos/input/size.svelte":st,"/codemos/input/usage.svelte":rt,"/codemos/radio/colors.svelte":ct,"/codemos/radio/default.svelte":ut,"/codemos/radio/form.svelte":mt,"/codemos/select/usage.svelte":vt,"/codemos/switch/colors.svelte":ht,"/codemos/switch/default.svelte":xt,"/codemos/switch/form.svelte":yt}),ce=Object.assign({"/codemos/btn/class.jsx":wt,"/codemos/btn/class.svelte":kt,"/codemos/btn/html.svelte":$t,"/codemos/btn/icons.jsx":Dt,"/codemos/btn/icons.svelte":Ct,"/codemos/btn/size.jsx":It,"/codemos/btn/size.svelte":St,"/codemos/btn/variant.jsx":Pt,"/codemos/btn/variant.svelte":Lt,"/codemos/checkbox/colors.svelte":Et,"/codemos/checkbox/default.svelte":Bt,"/codemos/checkbox/form.svelte":zt,"/codemos/dialog/usage.jsx":Tt,"/codemos/dialog/usage.svelte":jt,"/codemos/dropdown/usage.jsx":Ot,"/codemos/dropdown/usage.svelte":At,"/codemos/input/form.jsx":qt,"/codemos/input/form.svelte":Ft,"/codemos/input/html.svelte":Nt,"/codemos/input/size.jsx":Rt,"/codemos/input/size.svelte":Mt,"/codemos/input/usage.jsx":Ut,"/codemos/input/usage.svelte":Vt,"/codemos/radio/colors.svelte":Wt,"/codemos/radio/default.svelte":Gt,"/codemos/radio/form.svelte":Ht,"/codemos/select/usage.jsx":Kt,"/codemos/select/usage.svelte":Jt,"/codemos/switch/colors.svelte":Qt,"/codemos/switch/default.svelte":Xt,"/codemos/switch/form.svelte":Yt}),da=(o,e)=>{const n=`/codemos/${o}/${e}`;return{preview:Ce[`${n}.svelte`],code:{svelte:ce[`${n}.svelte`],react:ce[`${n}.jsx`]}}},ua=(o,e)=>{const n=`/codemos/${o}/${e}`;return{preview:Ce[`${n}.svelte`],code:{html:ce[`${n}.svelte`]}}};export{ca as T,ua as a,da as g};
