import"./DsnmJJEf.js";import{T as Ie,k as Pe,U as Se,o as Ee,aW as Be,p as j,aL as F,b as C,a as o,c as q,f as d,e as u,s as l,r as p,h as A,ax as V,a5 as oe,F as he,a6 as N,g as w,D as K,j as ge,aM as xe,aK as te,n as g,t as B}from"./5xbTN0Cd.js";import{a as L,f as _e,d as J,s as ze}from"./DMG_KyJ_.js";import{p as re,i as M,r as ne}from"./D8VY6U24.js";import{b as Te,c as Le}from"./Dr1aXRdY.js";import{o as je}from"./CDOqjL9i.js";import{d as qe,s as U,r as Fe,a as ie,c as W,b as ye}from"./CInFdg6c.js";import"./52p28vjC.js";import{B as I}from"./CUfkjYiI.js";function we(a,e,t){Ie(()=>{var n=Pe(()=>e(a,t?.())||{});if(t&&n?.update){var s=!1,r={};Se(()=>{var i=t();Ee(i),s&&Be(r,i)&&(r=i,n.update(i))}),s=!0}if(n?.destroy)return()=>n.destroy()})}const de=a=>a?typeof a=="string"?document.querySelector(a):a:null;function Ae(a,e="body"){return de(e)?.appendChild(a),{update:t=>{t!==e&&(a.parentNode?.removeChild(a),de(t)?.appendChild(a))},destroy:()=>{a.parentNode?.removeChild(a)}}}const Ne=a=>{a.currentTarget==a.target&&close()};var Oe=d('<button class="i-pajamas:close absolute right-4 top-4 focus:bg-red" aria-label="close" tabindex="-1"></button>'),Re=d('<dialog class="backdrop:bg-black/60"><div tabindex="-1"><!> <!></div></dialog>');function Me(a,e){j(e,!0);let t=re(e,"closeIcon",3,!0);var n=F(),s=C(n);{var r=i=>{var c=Re();c.__click=[Ne];var f=u(c),h=u(f);{var b=x=>{var y=Oe();y.__click=function(...P){e.close?.apply(this,P)},o(x,y)};M(h,x=>{t()&&x(b)})}var m=l(h,2);L(m,()=>e.children),p(f),p(c),we(c,x=>Ae?.(x)),qe(c,()=>x=>x.showModal()),A(()=>U(f,1,`dialog ${e.class}`)),_e("close",c,function(...x){e.close?.apply(this,x)}),o(i,c)};M(s,i=>{e.open&&i(r)})}o(a,n),q()}J(["click"]);var Ue=d("<div></div>"),Ve=d("<div></div>"),Ge=d("<div><!> <input/> <!></div>");function T(a,e){j(e,!0);let t=re(e,"class",3,""),n=ne(e,["$$slots","$$events","$$legacy","iconL","iconR","class"]);var s=Ge(),r=u(s);{var i=b=>{var m=F(),x=C(m);{var y=v=>{var _=Ue();A(()=>U(_,1,W(e.iconL))),o(v,_)},P=v=>{var _=F(),D=C(_);L(D,()=>e.iconL),o(v,_)};M(x,v=>{typeof e.iconL=="string"?v(y):v(P,!1)})}o(b,m)};M(r,b=>{e.iconL&&b(i)})}var c=l(r,2);Fe(c),ie(c,()=>({...n}));var f=l(c,2);{var h=b=>{var m=F(),x=C(m);{var y=v=>{var _=Ve();A(()=>U(_,1,W(e.iconR))),o(v,_)},P=v=>{var _=F(),D=C(_);L(D,()=>e.iconR),o(v,_)};M(x,v=>{typeof e.iconR=="string"?v(y):v(P,!1)})}o(b,m)};M(f,b=>{e.iconR&&b(h)})}p(s),A(b=>U(s,1,b),[()=>W(t()?.includes("grinput")?t():`grinput ${t()}`)]),o(a,s),q()}const He=(a,e)=>{function t(n){a.contains(n.target)||e()}return document.addEventListener("click",t),{destroy(){document.removeEventListener("click",t)}}};function ue(a,e){j(e,!0);let t=V(oe(e.defaultValue)),n=oe([]);const s=c=>N(t,c,!0);he("tabs",{value:()=>e.value??w(t),setValue:e.setValue??s,tabLabels:()=>n,addTabLabel:c=>n.push(c)});var r=F(),i=C(r);L(i,()=>e.children),o(a,r),q()}const We=(a,e,t)=>e(t.value);var Ke=d('<button role="tab"><!></button>');function H(a,e){j(e,!0);const{value:t,setValue:n,addTabLabel:s}=K("tabs");je(()=>s(e.value));var r=Ke();r.__click=[We,n,e];var i=u(r);L(i,()=>e.children),p(r),A(c=>ye(r,"aria-selected",c),[()=>t()==e.value]),o(a,r),q()}J(["click"]);var Je=d('<div role="tabpanel"><!></div>');function pe(a,e){j(e,!0);const{value:t}=K("tabs");var n=F(),s=C(n);{var r=i=>{var c=Je(),f=u(c);L(f,()=>e.children),p(c),A(h=>ye(c,"aria-labelledby",h),[()=>`tab-${t()}`]),o(i,c)};M(s,i=>{t()==e.value&&i(r)})}o(a,n),q()}const Qe=(a,e,t,n)=>{a.key=="ArrowLeft"&&w(e)!=0?t(n()[w(e)-1]):a.key=="ArrowRight"&&w(e)!=n().length-1&&t(n()[w(e)+1])};var Xe=d('<div role="tablist" tabindex="-1"><!></div>');function be(a,e){j(e,!0);const{value:t,tabLabels:n,setValue:s}=K("tabs");let r=xe(()=>n().indexOf(t()));ge(()=>{t()||s(n()[0])});var i=Xe();i.__keydown=[Qe,r,s,n];var c=u(i);L(c,()=>e.children),p(i),A(f=>U(i,1,f),[()=>W(e.class?.includes("tabs-")?e.class:`tabs ${e.class}`)]),o(a,i),q()}J(["keydown"]);var Ye=d('<div class="relative inline-block"><!></div>');function me(a,e){j(e,!0);let t=V(!1);const n=()=>N(t,!w(t)),s=()=>N(t,!1);he("dropdown",{open:()=>w(t),toggleDropdown:n,closeDropdown:s});var i=Ye(),c=u(i);L(c,()=>e.children??te),p(i),we(i,(f,h)=>He?.(f,h),()=>s),o(a,i),q()}const Ze=(a,e,t,n)=>{if(!e())return;const s=t();s.length!==0&&(a.key=="ArrowDown"&&w(n)<s.length?(a.preventDefault(),N(n,w(n)+1),s[w(n)]?.focus()):a.key=="ArrowUp"&&w(n)>0&&(N(n,w(n)-1),s[w(n)]?.focus()))};var et=d('<div role="menu" tabindex="0"><!></div>');function fe(a,e){j(e,!0);let t=re(e,"class",3,""),n=V(-1),s=V(null);const{open:r}=K("dropdown"),i=()=>w(s)?Array.from(w(s).querySelectorAll('[role="menuitem"]')):[];ge(()=>{r()&&w(s)?.focus()});var c=F(),f=C(c);{var h=b=>{var m=et();m.__keydown=[Ze,r,i,n];var x=u(m);L(x,()=>e.children??te),p(m),Te(m,y=>N(s,y),()=>w(s)),A(y=>U(m,1,y),[()=>W(t().includes("popover")?t():`popover ${t()}`)]),o(b,m)};M(f,b=>{r()&&b(h)})}o(a,c),q()}J(["keydown"]);var tt=d("<button><!></button>");function ve(a,e){j(e,!0);const{toggleDropdown:t}=K("dropdown");let n=ne(e,["$$slots","$$events","$$legacy","children","class"]);var s=tt();ie(s,i=>({class:i,onclick:t,...n}),[()=>e.class?.includes("btn")?e.class:`btn ${e.class}`]);var r=u(s);L(r,()=>e.children??te),p(s),o(a,s),q()}var nt=d("<button><!></button>");function S(a,e){j(e,!0);let t=ne(e,["$$slots","$$events","$$legacy","children","class"]);const{closeDropdown:n}=K("dropdown");var s=nt();ie(s,()=>({onclick:n,class:`btn-ghost-eqmd focus:bg-input justify-start whitespace-nowrap ${e.class}`,role:"menuitem",...t}));var r=u(s);L(r,()=>e.children??te),p(s),o(a,s),q()}var at=d('<i class="i-mage:preview-fill"></i> Preview',1),st=d('<i class="i-majesticons:code"></i> Code',1),ot=d("<!> <!>",1),lt=d('<i class="i-devicon:html5"></i> file.html',1),rt=d('<i class="i-devicon:svelte"></i> Svelte',1),it=d('<i class="i-devicon:react"></i> React',1),ct=d('<i class="i-devicon:solidjs"></i> Solid',1),dt=d("<!> <!> <!>",1),ut=d('<!> <pre class="p5 rounded brd rounded-t-0 max-h-400px overflow-auto"><code> </code></pre>',1),pt=d("<!> <!> <!>",1);function Qn(a,e){const t=ne(e,["$$slots","$$events","$$legacy"]);let{demo:n}=t,s=oe({svelte:"",react:"",solid:"",html:""}),r=V(null);const i=c=>{if(N(r,c,!0),c==="svelte"&&!s.svelte&&n.code.svelte)s.svelte=n.code.svelte;else if(c==="react"&&!s.react&&n.code.react){const f=n.code.react;s.react=f.replaceAll("class=","className="),!s.solid&&!n.code.solid&&(s.solid=f.replaceAll("react","solid"))}else c==="solid"&&!s.solid&&n.code.solid?s.solid=n.code.solid:c==="html"&&!s.html&&n.code.html&&(s.html=n.code.html)};ue(a,{defaultValue:"preview",children:(c,f)=>{var h=pt(),b=C(h);be(b,{class:"tabs w-fit p1 !children:p2 !children:px3",children:(y,P)=>{var v=ot(),_=C(v);H(_,{value:"preview",children:(z,O)=>{var R=at();g(),o(z,R)},$$slots:{default:!0}});var D=l(_,2);H(D,{value:"code",children:(z,O)=>{var R=st();g(),o(z,R)},$$slots:{default:!0}}),o(y,v)},$$slots:{default:!0}});var m=l(b,2);pe(m,{value:"preview",children:(y,P)=>{var v=F();const _=xe(()=>n.preview);var D=C(v);Le(D,()=>w(_),(z,O)=>{O(z,{})}),o(y,v)},$$slots:{default:!0}});var x=l(m,2);pe(x,{value:"code",children:(y,P)=>{ue(y,{get value(){return w(r)},setValue:i,children:(v,_)=>{var D=ut(),z=C(D);be(z,{class:"tabs-line-primary brd rounded-t [&>button]:capitalize",children:(ae,$)=>{var E=F(),k=C(E);{var $e=G=>{H(G,{value:"html",children:(Z,se)=>{var ee=lt();g(),o(Z,ee)},$$slots:{default:!0}})},De=G=>{var Z=dt(),se=C(Z);H(se,{value:"svelte",children:(Q,ce)=>{var X=rt();g(),o(Q,X)},$$slots:{default:!0}});var ee=l(se,2);H(ee,{value:"react",children:(Q,ce)=>{var X=it();g(),o(Q,X)},$$slots:{default:!0}});var Ce=l(ee,2);H(Ce,{value:"solid",children:(Q,ce)=>{var X=ct();g(),o(Q,X)},$$slots:{default:!0}}),o(G,Z)};M(k,G=>{n.code.html?G($e):G(De,!1)})}o(ae,E)},$$slots:{default:!0}});var O=l(z,2),R=u(O),Y=u(R,!0);p(R),p(O),A(()=>ze(Y,w(r)?s[w(r)]:"")),o(v,D)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(c,h)},$$slots:{default:!0}})}var bt=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!></div>');function mt(a){var e=bt(),t=u(e);I(t,{class:"btn-success",txt:"Success"});var n=l(t,2);I(n,{class:"btn-warning",txt:"Warning"});var s=l(n,2);I(s,{class:"btn-danger",txt:"danger"}),p(e),o(a,e)}var ft=d('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary">Primary</button> <button class="btn-soft">Soft</button> <button class="btn-outline">Outline</button> <button class="btn-ghost">Ghost</button> <button class="btn-emerald5 text-white"><i class="i-line-md:email-filled"></i> Email</button> <button class="btn-outline btn"><i class="i-iconamoon:send"></i> Send us</button> <button class="btn-soft"><i class="i-eos-icons:loading"></i> Fetching...</button> <button class="btn-primary-eqmd" aria-label="plus button"><i class="i-tabler:plus"></i></button> <button class="btn-outline-eqmd rounded-full btn" aria-label="user button"><i class="i-iconoir:user"></i></button> <hr class="w-full brd mt3 mb1"/> <button class="btn btn-soft-xs">Button</button> <button class="btn btn-soft-sm">Button</button> <button class="btn btn-soft-md">Button</button> <button class="btn btn-soft-lg">Button</button> <button class="btn btn-soft-xl">Button</button></div>');function vt(a){var e=ft();o(a,e)}var ht=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function gt(a){var e=ht(),t=u(e);I(t,{class:"btn-emerald5 text-white",iconL:"i-line-md:email-filled",txt:"Email"});var n=l(t,2);I(n,{iconL:"i-iconamoon:send",txt:"Send us",class:"btn-outline"});var s=l(n,2);I(s,{loading:!0,loaderTxt:"Fetching...",disabled:!0,txt:"Fetch data"});var r=l(s,2);I(r,{iconL:"i-tabler:plus",class:"btn-primary-eqmd","aria-label":"plus button"});var i=l(r,2);I(i,{iconL:"i-iconoir:user",class:"btn-outline-eqmd rounded-full","aria-label":"user button"}),p(e),o(a,e)}var xt=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function _t(a){var e=xt(),t=u(e);I(t,{class:"btn-soft-xs",txt:"Success"});var n=l(t,2);I(n,{class:"btn-soft-sm",txt:"Success"});var s=l(n,2);I(s,{class:"btn-soft-md",txt:"Success"});var r=l(s,2);I(r,{class:"btn-soft-lg",txt:"Success"});var i=l(r,2);I(i,{class:"btn-soft-xl",txt:"Success"}),p(e),o(a,e)}var yt=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!></div>');function wt(a){var e=yt(),t=u(e);I(t,{txt:"Primary",class:"btn-primary"});var n=l(t,2);I(n,{class:"soft",txt:"Soft"});var s=l(n,2);I(s,{class:"btn-outline",txt:"Outline"});var r=l(s,2);I(r,{class:"btn-ghost",txt:"Ghost"}),p(e),o(a,e)}var kt=d('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><input type="checkbox" class="checkbox"/> <input type="checkbox" class="checkbox-primary"/> <input type="checkbox" class="checkbox-red"/> <input type="checkbox" class="checkbox-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-md"/> <input type="checkbox" class="checkbox-lg"/> <input type="checkbox" class="checkbox-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-5"/> <input type="checkbox" class="checkbox-indigo-7"/> <input type="checkbox" class="checkbox-red-9"/> <input type="checkbox" class="checkbox-slate-10"/> <input type="checkbox" class="checkbox-10 !after:checked:i-ph:check-fat-fill !after:checked:size-6"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-blue text-white"/> <input type="checkbox" class="checkbox-amber text-amber8"/> <input type="checkbox" class="checkbox-emerald"/> <input type="checkbox" class="checkbox checked:bg-bg text-fg"/></div>');function $t(a){var e=kt(),t=l(u(e),2);t.defaultChecked=!0;var n=l(t,2);n.defaultChecked=!0;var s=l(n,2);s.defaultChecked=!0;var r=l(s,4);r.defaultChecked=!0;var i=l(r,2);i.defaultChecked=!0;var c=l(i,2);c.defaultChecked=!0;var f=l(c,2);f.defaultChecked=!0;var h=l(f,4);h.defaultChecked=!0;var b=l(h,2);b.defaultChecked=!0;var m=l(b,2);m.defaultChecked=!0;var x=l(m,2);x.defaultChecked=!0;var y=l(x,2);y.defaultChecked=!0;var P=l(y,4);P.defaultChecked=!0;var v=l(P,2);v.defaultChecked=!0;var _=l(v,2);_.defaultChecked=!0;var D=l(_,2);D.defaultChecked=!0,p(e),o(a,e)}var Dt=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="checkbox" id="option" class="checkbox-fg"/> <label for="option">Option</label></div>');function Ct(a){var e=Dt(),t=u(e);t.defaultChecked=!0,g(2),p(e),o(a,e)}var It=d('<div class="flex brd p20 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"><input type="checkbox" id="tnc" class="checkbox"/> <label for="tnc">I agree to the Terms and Conditions</label> <input type="checkbox" id="tnc2" class="checkbox-blue"/> <div><label for="tnc2">I understand and read the privacy policy</label> <br/> <span class="text-mutedfg text-sm">By Agreeing you accept our <a class="link" href="/">Privacy Policy</a></span></div> <input type="checkbox" id="tnc3" class="checkbox-slate" disabled/> <label for="tnc3" class="muted-70">I have freedom of speech</label></div></div>');function Pt(a){var e=It(),t=u(e),n=u(t);n.defaultChecked=!0;var s=l(n,4);s.defaultChecked=!0,g(6),p(t),p(e),o(a,e)}const St=(a,e)=>N(e,!0);var Et=d('<h3>Edit Account</h3> <p class="text-mutedfg mb2">Make changes to your user profile here.</p> <label for="name">Name</label> <input class="input-outline" id="name" placeholder="Enter your name"/> <label for="email">Email</label> <input type="email" class="input-outline" id="email" placeholder="Enter your email"/> <div class="flex gap3 items-center ml-auto mt3"><button class="btn-soft">Cancel</button> <button class="btn-primary">Save</button></div>',1),Bt=d('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary mx-auto">Open</button> <!></div>');function zt(a){let e=V(!1);const t=()=>N(e,!1);var n=Bt(),s=u(n);s.__click=[St,e];var r=l(s,2);Me(r,{get open(){return w(e)},close:t,class:"grid gap4",children:(i,c)=>{var f=Et(),h=l(C(f),12),b=u(h);b.__click=t,g(2),p(h),o(i,f)},$$slots:{default:!0}}),p(n),o(a,n)}J(["click"]);var Tt=d('<!> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!>',1),Lt=d("<!> <!>",1),jt=d('<i class="i-line-md:star-filled"></i> With icons',1),qt=d('<i class="i-line-md:account"></i>Profile',1),Ft=d('<i class="i-nimbus:cog"></i>Settings',1),At=d('<i class="i-line-md:logout"></i>Log out',1),Nt=d("<!> <!> <!>",1),Ot=d("<!> <!>",1),Rt=d('<div class="flex flex-gap3 flex-wrap justify-center brd p20 rounded"><!> <!></div>');function Mt(a){var e=Rt(),t=u(e);me(t,{children:(s,r)=>{var i=Lt(),c=C(i);ve(c,{class:"btn-primary",children:(h,b)=>{g();var m=B("Click me");o(h,m)},$$slots:{default:!0}});var f=l(c,2);fe(f,{children:(h,b)=>{var m=Tt(),x=C(m);S(x,{children:($,E)=>{g();var k=B("Profile");o($,k)},$$slots:{default:!0}});var y=l(x,2);S(y,{children:($,E)=>{g();var k=B("Billing");o($,k)},$$slots:{default:!0}});var P=l(y,2);S(P,{children:($,E)=>{g();var k=B("Settings");o($,k)},$$slots:{default:!0}});var v=l(P,2);S(v,{children:($,E)=>{g();var k=B("Keyboard shortcuts");o($,k)},$$slots:{default:!0}});var _=l(v,4);S(_,{children:($,E)=>{g();var k=B("Team");o($,k)},$$slots:{default:!0}});var D=l(_,2);S(D,{children:($,E)=>{g();var k=B("Invite users");o($,k)},$$slots:{default:!0}});var z=l(D,2);S(z,{children:($,E)=>{g();var k=B("New Team");o($,k)},$$slots:{default:!0}});var O=l(z,4);S(O,{children:($,E)=>{g();var k=B("GitHub");o($,k)},$$slots:{default:!0}});var R=l(O,2);S(R,{children:($,E)=>{g();var k=B("Support");o($,k)},$$slots:{default:!0}});var Y=l(R,2);S(Y,{disabled:!0,children:($,E)=>{g();var k=B("API");o($,k)},$$slots:{default:!0}});var ae=l(Y,4);S(ae,{children:($,E)=>{g();var k=B("Log out");o($,k)},$$slots:{default:!0}}),o(h,m)},$$slots:{default:!0}}),o(s,i)},$$slots:{default:!0}});var n=l(t,2);me(n,{children:(s,r)=>{var i=Ot(),c=C(i);ve(c,{class:"btn-soft",children:(h,b)=>{var m=jt();g(),o(h,m)},$$slots:{default:!0}});var f=l(c,2);fe(f,{children:(h,b)=>{var m=Nt(),x=C(m);S(x,{children:(v,_)=>{var D=qt();g(),o(v,D)},$$slots:{default:!0}});var y=l(x,2);S(y,{children:(v,_)=>{var D=Ft();g(),o(v,D)},$$slots:{default:!0}});var P=l(y,2);S(P,{children:(v,_)=>{var D=At();g(),o(v,D)},$$slots:{default:!0}}),o(h,m)},$$slots:{default:!0}}),o(s,i)},$$slots:{default:!0}}),p(e),o(a,e)}const Ut=(a,e)=>{N(e,w(e)==="text"?"password":"text",!0)};var Vt=d('<button type="button" class="btn-ghost-eqsm rounded-full mr--2" aria-label="Toggle password visibility"><i></i></button>'),Gt=d('<div class="flex flex-gap5 flex-wrap items-center brd p10 py20 rounded justify-center"><form class="grid gap3"><label for="email" class="reqstar">Email</label> <!> <label for="passwd">Password</label> <!> <input type="submit" class="!btn-primary ml-auto mt3"/></form></div>');function Ht(a,e){j(e,!0);let t=V("password");const n=f=>{f.preventDefault();const h=new FormData(f.target),b=h.get("email"),m=h.get("passwd");alert(`
Email: ${b}
Password: ${m}`)};var s=Gt(),r=u(s),i=l(u(r),2);T(i,{required:!0,name:"email",id:"email",placeholder:"Enter email",type:"email",iconL:"i-line-md:email",class:"grinput-outline mb3"});var c=l(i,4);T(c,{name:"passwd",id:"passwd",placeholder:"Enter Password",get type(){return w(t)},iconL:"i-lucide:key-round",class:"grinput-outline",iconR:h=>{var b=Vt();b.__click=[Ut,t];var m=u(b);p(b),A(()=>U(m,1,W(w(t)=="text"?"i-heroicons-solid:eye":"i-heroicons-solid:eye-off"))),o(h,b)},$$slots:{iconR:!0}}),g(2),p(r),p(s),_e("submit",r,n),o(a,s),q()}J(["click"]);var Wt=d('<div class="flex flex-col flex-gap5 flex-wrap items-center brd p10 rounded"><input class="input" placeholder="Enter name"/> <input class="input-outline" placeholder="Enter name"/> <br/> <p>sizes</p> <input class="input-outline-sm" placeholder="Enter name"/> <input class="input-outline-md" disabled placeholder="Enter name"/> <input class="input-lg" placeholder="Enter name"/> <input class="input-outline-xl" placeholder="Enter name"/> <p>Icons</p> <div class="grid grid-cols-2 grid-gap5"><div class="grinput"><i class="i-ri:user-line"></i> <input placeholder="Enter name"/></div> <div class="grinput-outline"><i class="i-line-md:email-filled"></i> <input placeholder="Enter name"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter price" type="number"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter salary" disabled/></div> <div class="grinput-outline p0 col-span-2"><span class="bg-mutedbg p2 px3 rounded-l">$</span> <input placeholder="Enter name"/> <span class="bg-mutedbg p2 rounded-r">USD</span></div></div></div>');function Kt(a){var e=Wt();o(a,e)}var Jt=d('<div class="grid grid-gap5 grid-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!> <!> <!></div>');function Qt(a){var e=Jt(),t=u(e);T(t,{placeholder:"size (sm)",class:"grinput-sm"});var n=l(t,2);T(n,{placeholder:"size (md)",class:"grinput-md"});var s=l(n,2);T(s,{placeholder:"size (lg)",class:"grinput-lg"});var r=l(s,2);T(r,{placeholder:"size (xl)",class:"grinput-outline-xl"});var i=l(r,2);T(i,{placeholder:"size (2)",class:"grinput-2"});var c=l(i,2);T(c,{placeholder:"size (2.3)",class:"grinput-2.3"});var f=l(c,2);T(f,{placeholder:"size (2.9)",class:"grinput-outline-2.9"}),p(e),o(a,e)}var Xt=d('<div class="flex flex-gap5 flex-wrap items-center brd p10 rounded justify-center"><!> <!></div>');function Yt(a){var e=Xt(),t=u(e);T(t,{placeholder:"Enter name"});var n=l(t,2);T(n,{placeholder:"Enter name",class:"grinput-outline"}),p(e),o(a,e)}var Zt=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="radio" class="radio" name="group1"/> <input type="radio" class="radio-primary" name="group1"/> <input type="radio" class="radio-red" name="group1"/> <input type="radio" class="radio-amber4" name="group1"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group2"/> <input type="radio" class="radio-md" name="group2"/> <input type="radio" class="radio-lg" name="group2"/> <input type="radio" class="radio-xl" name="group2"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-4" name="group3"/> <input type="radio" class="radio-indigo-6" name="group3"/> <input type="radio" class="radio-red-8" name="group3"/> <input type="radio" class="radio-slate-9" name="group3"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radiob-blue" name="group4"/> <input type="radio" class="radiob-amber" name="group4"/> <input type="radio" class="radiob-emerald" name="group4"/> <input type="radio" class="radiob" name="group4"/></div>');function en(a){var e=Zt(),t=u(e);t.defaultChecked=!0;var n=l(t,14);n.defaultChecked=!0;var s=l(n,8);s.defaultChecked=!0;var r=l(s,14);r.defaultChecked=!0,p(e),o(a,e)}var tn=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&amp;>label]:mr3"><input type="radio" id="option1" name="group" class="radio"/> <label for="option1">Arch</label> <input type="radio" id="option2" name="group" class="radio"/> <label for="option2">Void</label> <input type="radio" id="option3" name="group" class="radiob"/> <label for="option3">Ubuntu</label> <input type="radio" id="option4" name="group" class="radiob"/> <label for="option4">Fedora</label></div>');function nn(a){var e=tn(),t=u(e);t.defaultChecked=!0,g(14),p(e),o(a,e)}var an=d('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="radio" id="email" name="x" class="radio"/> <label for="email">Email notifications</label> <input type="radio" id="sms" name="x" class="radio-blue"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="radio" id="none" name="x" class="radio-slate"/> <label for="none">No notifications</label> <input type="radio" id="disagree" name="x" class="radio-red"/> <label for="disagree">Stop Bothering!</label></div></div>');function sn(a){var e=an(),t=u(e),n=u(t);n.defaultChecked=!0,g(14),p(t),p(e),o(a,e)}var on=d('<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded"><input type="checkbox" class="switch"/> <input type="checkbox" class="switch-flat-md-primary"/> <input type="checkbox" class="switch-flat-md-red"/> <input type="checkbox" class="switch-flat-md-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-flat-sm"/> <input type="checkbox" class="switch-flat-md"/> <input type="checkbox" class="switch-flat-lg"/> <input type="checkbox" class="switch-flat-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-line-4"/> <input type="checkbox" class="switch-line-6-indigo"/> <input type="checkbox" class="switch-line-8-red"/> <input type="checkbox" class="switch-line-9-slate"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-knob-md-blue"/> <input type="checkbox" class="switch-knob-md-amber"/> <input type="checkbox" class="switch-flat-md-emerald"/> <input type="checkbox" class="switch-knob" name="group4"/></div>');function ln(a){var e=on(),t=u(e);t.defaultChecked=!0;var n=l(t,16);n.defaultChecked=!0;var s=l(n,8);s.defaultChecked=!0;var r=l(s,2);r.defaultChecked=!0;var i=l(r,2);i.defaultChecked=!0;var c=l(i,10);c.defaultChecked=!0,p(e),o(a,e)}var rn=d('<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded"><input type="checkbox" class="switch-line"/> <input type="checkbox" class="switch-flat"/> <input type="checkbox" class="switch-knob"/></div>');function cn(a){var e=rn(),t=l(u(e),2);t.defaultChecked=!0,g(2),p(e),o(a,e)}var dn=d('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="checkbox" id="email" class="switch-line"/> <label for="email">Email notifications</label> <input type="checkbox" id="sms" class="switch-line"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="checkbox" id="none" class="switch"/> <label for="none">No notifications</label> <input type="checkbox" id="disagree" class="switch"/> <label for="disagree">Stop Bothering!</label></div></div>');function un(a){var e=dn(),t=u(e),n=u(t);n.defaultChecked=!0,g(14),p(t),p(e),o(a,e)}const pn=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
      <Btn class="btn-success" txt="Success" />
      <Btn class="btn-warning" txt="Warning" />
      <Btn class="btn-danger" txt="danger" />
    </div>
  );
};
`,bn=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn class="btn-success" txt="Success" />
  <Btn class="btn-warning" txt="Warning" />
  <Btn class="btn-danger" txt="danger" />
</div>
`,mn=`<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
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
`,fn=`import { Btn } from "@haze-ui/react";

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
`,vn=`<script lang="ts">
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
`,hn=`import { Btn } from "@haze-ui/react";

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
`,gn=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn class="btn-soft-xs" txt="Success" />
  <Btn class="btn-soft-sm" txt="Success" />
  <Btn class="btn-soft-md" txt="Success" />
  <Btn class="btn-soft-lg" txt="Success" />
  <Btn class="btn-soft-xl" txt="Success" />
</div>
`,xn=`import { Btn } from "@haze-ui/react";

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
`,_n=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn txt="Primary" class="btn-primary" />
  <Btn class="soft" txt="Soft" />
  <Btn class="btn-outline" txt="Outline" />
  <Btn class="btn-ghost" txt="Ghost" />
</div>
`,yn=`<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
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
`,wn=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" id="option" class="checkbox-fg" defaultChecked />
  <label for="option">Option</label>
</div>
`,kn=`<div class="flex brd p20 rounded-xl justify-center">
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
`,$n=`import { useState } from "react";
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
`,Dn=`<script lang="ts">
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
`,Cn=`import {
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
`,In=`<script lang="ts">
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
`,Pn=`import { Input } from "@haze-ui/react";
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
`,Sn=`<script lang="ts">
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
`,En=`<div
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
`,Bn=`import { Input } from "@haze-ui/react";

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
`,zn=`<script lang="ts">
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
`,Tn=`import { Input } from "@haze-ui/react";

export default () => {
  return (
    <div>
      <Input placeholder="Enter name" />
      <Input placeholder="Enter name" class="grinput-outline" />
    </div>
  );
};
`,Ln=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap5 flex-wrap items-center brd p10 rounded justify-center">
  <Input placeholder="Enter name" />
  <Input placeholder="Enter name" class="grinput-outline" />
</div>
`,jn=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
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
`,qn=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&>label]:mr3">
  <input type="radio" id="option1" name="group" class="radio" defaultChecked />
  <label for="option1">Arch</label>

  <input type="radio" id="option2" name="group" class="radio" />
  <label for="option2">Void</label>

  <input type="radio" id="option3" name="group" class="radiob" />
  <label for="option3">Ubuntu</label>

  <input type="radio" id="option4" name="group" class="radiob" />
  <label for="option4">Fedora</label>
</div>
`,Fn=`<div class="flex brd p20 gap5 rounded-xl justify-center">
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
`,An=`<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded">
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
`,Nn=`<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" class="switch-line" />
  <input type="checkbox" class="switch-flat" defaultChecked />
  <input type="checkbox" class="switch-knob" />
</div>
`,On=`<div class="flex brd p20 gap5 rounded-xl justify-center">
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
`,ke=Object.assign({"/codemos/btn/class.svelte":mt,"/codemos/btn/html.svelte":vt,"/codemos/btn/icons.svelte":gt,"/codemos/btn/size.svelte":_t,"/codemos/btn/variant.svelte":wt,"/codemos/checkbox/colors.svelte":$t,"/codemos/checkbox/default.svelte":Ct,"/codemos/checkbox/form.svelte":Pt,"/codemos/dialog/usage.svelte":zt,"/codemos/dropdown/usage.svelte":Mt,"/codemos/input/form.svelte":Ht,"/codemos/input/html.svelte":Kt,"/codemos/input/size.svelte":Qt,"/codemos/input/usage.svelte":Yt,"/codemos/radio/colors.svelte":en,"/codemos/radio/default.svelte":nn,"/codemos/radio/form.svelte":sn,"/codemos/switch/colors.svelte":ln,"/codemos/switch/default.svelte":cn,"/codemos/switch/form.svelte":un}),le=Object.assign({"/codemos/btn/class.jsx":pn,"/codemos/btn/class.svelte":bn,"/codemos/btn/html.svelte":mn,"/codemos/btn/icons.jsx":fn,"/codemos/btn/icons.svelte":vn,"/codemos/btn/size.jsx":hn,"/codemos/btn/size.svelte":gn,"/codemos/btn/variant.jsx":xn,"/codemos/btn/variant.svelte":_n,"/codemos/checkbox/colors.svelte":yn,"/codemos/checkbox/default.svelte":wn,"/codemos/checkbox/form.svelte":kn,"/codemos/dialog/usage.jsx":$n,"/codemos/dialog/usage.svelte":Dn,"/codemos/dropdown/usage.jsx":Cn,"/codemos/dropdown/usage.svelte":In,"/codemos/input/form.jsx":Pn,"/codemos/input/form.svelte":Sn,"/codemos/input/html.svelte":En,"/codemos/input/size.jsx":Bn,"/codemos/input/size.svelte":zn,"/codemos/input/usage.jsx":Tn,"/codemos/input/usage.svelte":Ln,"/codemos/radio/colors.svelte":jn,"/codemos/radio/default.svelte":qn,"/codemos/radio/form.svelte":Fn,"/codemos/switch/colors.svelte":An,"/codemos/switch/default.svelte":Nn,"/codemos/switch/form.svelte":On}),Xn=(a,e)=>{const t=`/codemos/${a}/${e}`;return{preview:ke[`${t}.svelte`],code:{svelte:le[`${t}.svelte`],react:le[`${t}.jsx`]}}},Yn=(a,e)=>{const t=`/codemos/${a}/${e}`;return{preview:ke[`${t}.svelte`],code:{html:le[`${t}.svelte`]}}};export{Qn as T,Yn as a,Xn as g};
