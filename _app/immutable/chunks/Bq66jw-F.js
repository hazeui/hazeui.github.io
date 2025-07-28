import"./DsnmJJEf.js";import{T as ve,k as he,p as T,j as se,g as _,ax as U,aL as B,b as k,a as i,c as L,f as c,e as u,s as l,r as p,h as z,a6 as A,a5 as J,F as ge,D as X,aM as le,n as w}from"./5xbTN0Cd.js";import{a as D,d as G,s as xe,f as ye}from"./DMG_KyJ_.js";import{p as ie,i as I,r as oe}from"./D8VY6U24.js";import{b as _e,c as ke}from"./9KE2yYzk.js";import{o as we}from"./CDOqjL9i.js";import{s as N,r as Ce,a as Ee,c as V,b as re}from"./0gD2o22K.js";import"./52p28vjC.js";import{B as y}from"./CnzL5zls.js";function Se(n,e,t){ve(()=>{var a=he(()=>e(n,t?.())||{});if(a?.destroy)return()=>a.destroy()})}const ee=n=>n?typeof n=="string"?document.querySelector(n):n:null;function $e(n,e="body"){return ee(e)?.appendChild(n),{update:t=>{t!==e&&(n.parentNode?.removeChild(n),ee(t)?.appendChild(n))},destroy:()=>{n.parentNode?.removeChild(n)}}}const Be=n=>n.stopPropagation();var ze=c('<button class="i-pajamas:close absolute right-4 top-4 focus:bg-red" aria-label="close" tabindex="-1"></button>'),Pe=c('<dialog class="backdrop:bg-black/60"><div tabindex="-1"><!> <!></div></dialog>');function Ie(n,e){T(e,!0);let t=ie(e,"closeIcon",3,!0),a=U(void 0);se(()=>{e.open&&_(a)?.showModal()});var s=B(),o=k(s);{var d=r=>{var b=Pe();b.__click=function(...h){e.close?.apply(this,h)};var v=u(b);v.__click=[Be];var m=u(v);{var x=h=>{var C=ze();C.__click=function(...f){e.close?.apply(this,f)},i(h,C)};I(m,h=>{t()&&h(x)})}var $=l(m,2);D($,()=>e.children),p(v),p(b),Se(b,h=>$e?.(h)),_e(b,h=>A(a,h),()=>_(a)),z(()=>N(v,1,`dialog ${e.class}`)),i(r,b)};I(o,r=>{e.open&&r(d)})}i(n,s),L()}G(["click"]);var De=c("<div></div>"),Te=c("<div></div>"),Le=c("<div><!> <input/> <!></div>");function S(n,e){T(e,!0);let t=ie(e,"class",3,""),a=oe(e,["$$slots","$$events","$$legacy","iconL","iconR","class"]);var s=Le(),o=u(s);{var d=m=>{var x=B(),$=k(x);{var h=f=>{var g=De();z(()=>N(g,1,V(e.iconL))),i(f,g)},C=f=>{var g=B(),E=k(g);D(E,()=>e.iconL),i(f,g)};I($,f=>{typeof e.iconL=="string"?f(h):f(C,!1)})}i(m,x)};I(o,m=>{e.iconL&&m(d)})}var r=l(o,2);Ce(r),Ee(r,()=>({...a}));var b=l(r,2);{var v=m=>{var x=B(),$=k(x);{var h=f=>{var g=Te();z(()=>N(g,1,V(e.iconR))),i(f,g)},C=f=>{var g=B(),E=k(g);D(E,()=>e.iconR),i(f,g)};I($,f=>{typeof e.iconR=="string"?f(h):f(C,!1)})}i(m,x)};I(b,m=>{e.iconR&&m(v)})}p(s),z(m=>N(s,1,m),[()=>V(t()?.includes("grinput")?t():`grinput ${t()}`)]),i(n,s),L()}function te(n,e){T(e,!0);let t=U(J(e.defaultValue)),a=J([]);const s=r=>A(t,r,!0);ge("tabs",{value:()=>e.value??_(t),setValue:e.setValue??s,tabLabels:()=>a,addTabLabel:r=>a.push(r)});var o=B(),d=k(o);D(d,()=>e.children),i(n,o),L()}const je=(n,e,t)=>e(t.value);var Fe=c('<button role="tab"><!></button>');function O(n,e){T(e,!0);const{value:t,setValue:a,addTabLabel:s}=X("tabs");we(()=>s(e.value));var o=Fe();o.__click=[je,a,e];var d=u(o);D(d,()=>e.children),p(o),z(r=>re(o,"aria-selected",r),[()=>t()==e.value]),i(n,o),L()}G(["click"]);var qe=c('<div role="tabpanel"><!></div>');function ne(n,e){T(e,!0);const{value:t}=X("tabs");var a=B(),s=k(a);{var o=d=>{var r=qe(),b=u(r);D(b,()=>e.children),p(r),z(v=>re(r,"aria-labelledby",v),[()=>`tab-${t()}`]),i(d,r)};I(s,d=>{t()==e.value&&d(o)})}i(n,a),L()}const Oe=(n,e,t,a)=>{n.key=="ArrowLeft"&&_(e)!=0?t(a()[_(e)-1]):n.key=="ArrowRight"&&_(e)!=a().length-1&&t(a()[_(e)+1])};var Ne=c('<div role="tablist" tabindex="-1"><!></div>');function ae(n,e){T(e,!0);const{value:t,tabLabels:a,setValue:s}=X("tabs");let o=le(()=>a().indexOf(t()));se(()=>{t()||s(a()[0])});var d=Ne();d.__keydown=[Oe,o,s,a];var r=u(d);D(r,()=>e.children),p(d),z(b=>N(d,1,b),[()=>V(e.class?.includes("tabs-")?e.class:`tabs ${e.class}`)]),i(n,d),L()}G(["keydown"]);var Ae=c('<i class="i-mage:preview-fill"></i> Preview',1),Re=c('<i class="i-majesticons:code"></i> Code',1),Me=c("<!> <!>",1),Ve=c('<i class="i-devicon:html5"></i> file.html',1),Ue=c('<i class="i-devicon:svelte"></i> Svelte',1),Ge=c('<i class="i-devicon:react"></i> React',1),He=c('<i class="i-devicon:solidjs"></i> Solid',1),We=c("<!> <!> <!>",1),Ke=c('<!> <pre class="p5 rounded brd rounded-t-0 max-h-400px overflow-auto"><code> </code></pre>',1),Je=c("<!> <!> <!>",1);function kn(n,e){const t=oe(e,["$$slots","$$events","$$legacy"]);let{demo:a}=t,s=J({svelte:"",react:"",solid:"",html:""}),o=U(null);const d=r=>{if(A(o,r,!0),r==="svelte"&&!s.svelte&&a.code.svelte)s.svelte=a.code.svelte;else if(r==="react"&&!s.react&&a.code.react){const b=a.code.react;s.react=b.replaceAll("class=","className="),!s.solid&&!a.code.solid&&(s.solid=b.replaceAll("react","solid"))}else r==="solid"&&!s.solid&&a.code.solid?s.solid=a.code.solid:r==="html"&&!s.html&&a.code.html&&(s.html=a.code.html)};te(n,{children:(r,b)=>{var v=Je(),m=k(v);ae(m,{class:"tabs w-fit p1 !children:p2 !children:px3",children:(h,C)=>{var f=Me(),g=k(f);O(g,{value:"preview",children:(P,j)=>{var F=Ae();w(),i(P,F)},$$slots:{default:!0}});var E=l(g,2);O(E,{value:"code",children:(P,j)=>{var F=Re();w(),i(P,F)},$$slots:{default:!0}}),i(h,f)},$$slots:{default:!0}});var x=l(m,2);ne(x,{value:"preview",children:(h,C)=>{var f=B();const g=le(()=>a.preview);var E=k(f);ke(E,()=>_(g),(P,j)=>{j(P,{})}),i(h,f)},$$slots:{default:!0}});var $=l(x,2);ne($,{value:"code",children:(h,C)=>{te(h,{get value(){return _(o)},setValue:d,children:(f,g)=>{var E=Ke(),P=k(E);ae(P,{class:"tabs-line-primary brd rounded-t [&>button]:capitalize",children:(ue,pn)=>{var Y=B(),pe=k(Y);{var be=q=>{O(q,{value:"html",children:(H,K)=>{var W=Ve();w(),i(H,W)},$$slots:{default:!0}})},me=q=>{var H=We(),K=k(H);O(K,{value:"svelte",children:(R,Z)=>{var M=Ue();w(),i(R,M)},$$slots:{default:!0}});var W=l(K,2);O(W,{value:"react",children:(R,Z)=>{var M=Ge();w(),i(R,M)},$$slots:{default:!0}});var fe=l(W,2);O(fe,{value:"solid",children:(R,Z)=>{var M=He();w(),i(R,M)},$$slots:{default:!0}}),i(q,H)};I(pe,q=>{a.code.html?q(be):q(me,!1)})}i(ue,Y)},$$slots:{default:!0}});var j=l(P,2),F=u(j),de=u(F,!0);p(F),p(j),z(()=>xe(de,_(o)?s[_(o)]:"")),i(f,E)},$$slots:{default:!0}})},$$slots:{default:!0}}),i(r,v)},$$slots:{default:!0}})}var Qe=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!></div>');function Xe(n){var e=Qe(),t=u(e);y(t,{class:"btn-success",txt:"Success"});var a=l(t,2);y(a,{class:"btn-warning",txt:"Warning"});var s=l(a,2);y(s,{class:"btn-danger",txt:"danger"}),p(e),i(n,e)}var Ye=c('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary">Primary</button> <button class="btn-soft">Soft</button> <button class="btn-outline">Outline</button> <button class="btn-ghost">Ghost</button> <button class="btn-emerald5 text-white"><i class="i-line-md:email-filled"></i> Email</button> <button class="btn-outline btn"><i class="i-iconamoon:send"></i> Send us</button> <button class="btn-soft"><i class="i-eos-icons:loading"></i> Fetching...</button> <button class="btn-primary-eqmd" aria-label="plus button"><i class="i-tabler:plus"></i></button> <button class="btn-outline-eqmd rounded-full btn" aria-label="user button"><i class="i-iconoir:user"></i></button> <hr class="w-full brd mt3 mb1"/> <button class="btn btn-soft-xs">Button</button> <button class="btn btn-soft-sm">Button</button> <button class="btn btn-soft-md">Button</button> <button class="btn btn-soft-lg">Button</button> <button class="btn btn-soft-xl">Button</button></div>');function Ze(n){var e=Ye();i(n,e)}var et=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function tt(n){var e=et(),t=u(e);y(t,{class:"btn-emerald5 text-white",iconL:"i-line-md:email-filled",txt:"Email"});var a=l(t,2);y(a,{iconL:"i-iconamoon:send",txt:"Send us",class:"btn-outline"});var s=l(a,2);y(s,{loading:!0,loaderTxt:"Fetching...",disabled:!0,txt:"Fetch data"});var o=l(s,2);y(o,{iconL:"i-tabler:plus",class:"btn-primary-eqmd","aria-label":"plus button"});var d=l(o,2);y(d,{iconL:"i-iconoir:user",class:"btn-outline-eqmd rounded-full","aria-label":"user button"}),p(e),i(n,e)}var nt=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function at(n){var e=nt(),t=u(e);y(t,{class:"btn-soft-xs",txt:"Success"});var a=l(t,2);y(a,{class:"btn-soft-sm",txt:"Success"});var s=l(a,2);y(s,{class:"btn-soft-md",txt:"Success"});var o=l(s,2);y(o,{class:"btn-soft-lg",txt:"Success"});var d=l(o,2);y(d,{class:"btn-soft-xl",txt:"Success"}),p(e),i(n,e)}var st=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!></div>');function lt(n){var e=st(),t=u(e);y(t,{txt:"Primary",class:"btn-primary"});var a=l(t,2);y(a,{class:"soft",txt:"Soft"});var s=l(a,2);y(s,{class:"btn-outline",txt:"Outline"});var o=l(s,2);y(o,{class:"btn-ghost",txt:"Ghost"}),p(e),i(n,e)}var it=c('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><input type="checkbox" class="checkbox"/> <input type="checkbox" class="checkbox-primary"/> <input type="checkbox" class="checkbox-red"/> <input type="checkbox" class="checkbox-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-md"/> <input type="checkbox" class="checkbox-lg"/> <input type="checkbox" class="checkbox-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-5"/> <input type="checkbox" class="checkbox-indigo-7"/> <input type="checkbox" class="checkbox-red-9"/> <input type="checkbox" class="checkbox-slate-10"/> <input type="checkbox" class="checkbox-10 !after:checked:i-ph:check-fat-fill !after:checked:size-6"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-blue text-white"/> <input type="checkbox" class="checkbox-amber text-amber8"/> <input type="checkbox" class="checkbox-emerald"/> <input type="checkbox" class="checkbox checked:bg-bg text-fg"/></div>');function ot(n){var e=it(),t=l(u(e),2);t.defaultChecked=!0;var a=l(t,2);a.defaultChecked=!0;var s=l(a,2);s.defaultChecked=!0;var o=l(s,4);o.defaultChecked=!0;var d=l(o,2);d.defaultChecked=!0;var r=l(d,2);r.defaultChecked=!0;var b=l(r,2);b.defaultChecked=!0;var v=l(b,4);v.defaultChecked=!0;var m=l(v,2);m.defaultChecked=!0;var x=l(m,2);x.defaultChecked=!0;var $=l(x,2);$.defaultChecked=!0;var h=l($,2);h.defaultChecked=!0;var C=l(h,4);C.defaultChecked=!0;var f=l(C,2);f.defaultChecked=!0;var g=l(f,2);g.defaultChecked=!0;var E=l(g,2);E.defaultChecked=!0,p(e),i(n,e)}var rt=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="checkbox" id="option" class="checkbox-fg"/> <label for="option">Option</label></div>');function ct(n){var e=rt(),t=u(e);t.defaultChecked=!0,w(2),p(e),i(n,e)}var dt=c('<div class="flex brd p20 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"><input type="checkbox" id="tnc" class="checkbox"/> <label for="tnc">I agree to the Terms and Conditions</label> <input type="checkbox" id="tnc2" class="checkbox-blue"/> <div><label for="tnc2">I understand and read the privacy policy</label> <br/> <span class="text-mutedfg text-sm">By Agreeing you accept our <a class="link" href="#/">Privacy Policy</a></span></div> <input type="checkbox" id="tnc3" class="checkbox-slate" disabled/> <label for="tnc3" class="muted-70">I have freedom of speech</label></div></div>');function ut(n){var e=dt(),t=u(e),a=u(t);a.defaultChecked=!0;var s=l(a,4);s.defaultChecked=!0,w(6),p(t),p(e),i(n,e)}const pt=(n,e)=>A(e,!0);var bt=c('<h3>Edit Account</h3> <p class="text-mutedfg mb2">Make changes to your user profile here.</p> <label for="name">Name</label> <input class="input-outline" id="name" placeholder="Enter your name"/> <label for="email">Email</label> <input type="email" class="input-outline" id="email" placeholder="Enter your email"/> <div class="flex gap3 items-center ml-auto mt3"><button class="btn-soft">Cancel</button> <button class="btn-primary">Save</button></div>',1),mt=c('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary mx-auto">Open</button> <!></div>');function ft(n){let e=U(!1);const t=()=>A(e,!1);var a=mt(),s=u(a);s.__click=[pt,e];var o=l(s,2);Ie(o,{get open(){return _(e)},close:t,class:"grid gap4",children:(d,r)=>{var b=bt(),v=l(k(b),12),m=u(v);m.__click=t,w(2),p(v),i(d,b)},$$slots:{default:!0}}),p(a),i(n,a)}G(["click"]);const vt=(n,e)=>{A(e,_(e)==="text"?"password":"text",!0)};var ht=c('<button type="button" class="btn-ghost-eqsm rounded-full mr--2" aria-label="Toggle password visibility"><i></i></button>'),gt=c('<div class="flex flex-gap5 flex-wrap items-center brd p10 py20 rounded justify-center"><form class="grid gap3"><label for="email" class="reqstar">Email</label> <!> <label for="passwd">Password</label> <!> <input type="submit" class="!btn-primary ml-auto mt3"/></form></div>');function xt(n,e){T(e,!0);let t=U("password");const a=b=>{b.preventDefault();const v=new FormData(b.target),m=v.get("email"),x=v.get("passwd");alert(`
Email: ${m}
Password: ${x}`)};var s=gt(),o=u(s),d=l(u(o),2);S(d,{required:!0,name:"email",id:"email",placeholder:"Enter email",type:"email",iconL:"i-line-md:email",class:"grinput-outline mb3"});var r=l(d,4);S(r,{name:"passwd",id:"passwd",placeholder:"Enter Password",get type(){return _(t)},iconL:"i-lucide:key-round",class:"grinput-outline",iconR:v=>{var m=ht();m.__click=[vt,t];var x=u(m);p(m),z(()=>N(x,1,V(_(t)=="text"?"i-heroicons-solid:eye":"i-heroicons-solid:eye-off"))),i(v,m)},$$slots:{iconR:!0}}),w(2),p(o),p(s),ye("submit",o,a),i(n,s),L()}G(["click"]);var yt=c('<div class="flex flex-col flex-gap5 flex-wrap items-center brd p10 rounded"><input class="input" placeholder="Enter name"/> <input class="input-outline" placeholder="Enter name"/> <br/> <p>sizes</p> <input class="input-outline-sm" placeholder="Enter name"/> <input class="input-outline-md" disabled placeholder="Enter name"/> <input class="input-lg" placeholder="Enter name"/> <input class="input-outline-xl" placeholder="Enter name"/> <p>Icons</p> <div class="grid grid-cols-2 grid-gap5"><div class="grinput"><i class="i-ri:user-line"></i> <input placeholder="Enter name"/></div> <div class="grinput-outline"><i class="i-line-md:email-filled"></i> <input placeholder="Enter name"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter price" type="number"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter salary" disabled/></div> <div class="grinput-outline p0 col-span-2"><span class="bg-mutedbg p2 px3 rounded-l">$</span> <input placeholder="Enter name"/> <span class="bg-mutedbg p2 rounded-r">USD</span></div></div></div>');function _t(n){var e=yt();i(n,e)}var kt=c('<div class="grid grid-gap5 grid-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!> <!> <!></div>');function wt(n){var e=kt(),t=u(e);S(t,{placeholder:"size (sm)",class:"grinput-sm"});var a=l(t,2);S(a,{placeholder:"size (md)",class:"grinput-md"});var s=l(a,2);S(s,{placeholder:"size (lg)",class:"grinput-lg"});var o=l(s,2);S(o,{placeholder:"size (xl)",class:"grinput-outline-xl"});var d=l(o,2);S(d,{placeholder:"size (2)",class:"grinput-2"});var r=l(d,2);S(r,{placeholder:"size (2.3)",class:"grinput-2.3"});var b=l(r,2);S(b,{placeholder:"size (2.9)",class:"grinput-outline-2.9"}),p(e),i(n,e)}var Ct=c('<div class="flex flex-gap5 flex-wrap items-center brd p10 rounded justify-center"><!> <!></div>');function Et(n){var e=Ct(),t=u(e);S(t,{placeholder:"Enter name"});var a=l(t,2);S(a,{placeholder:"Enter name",class:"grinput-outline"}),p(e),i(n,e)}var St=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="radio" class="radio" name="group1"/> <input type="radio" class="radio-primary" name="group1"/> <input type="radio" class="radio-red" name="group1"/> <input type="radio" class="radio-amber4" name="group1"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group2"/> <input type="radio" class="radio-md" name="group2"/> <input type="radio" class="radio-lg" name="group2"/> <input type="radio" class="radio-xl" name="group2"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-4" name="group3"/> <input type="radio" class="radio-indigo-6" name="group3"/> <input type="radio" class="radio-red-8" name="group3"/> <input type="radio" class="radio-slate-9" name="group3"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radiob-blue" name="group4"/> <input type="radio" class="radiob-amber" name="group4"/> <input type="radio" class="radiob-emerald" name="group4"/> <input type="radio" class="radiob" name="group4"/></div>');function $t(n){var e=St(),t=u(e);t.defaultChecked=!0;var a=l(t,14);a.defaultChecked=!0;var s=l(a,8);s.defaultChecked=!0;var o=l(s,14);o.defaultChecked=!0,p(e),i(n,e)}var Bt=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&amp;>label]:mr3"><input type="radio" id="option1" name="group" class="radio"/> <label for="option1">Arch</label> <input type="radio" id="option2" name="group" class="radio"/> <label for="option2">Void</label> <input type="radio" id="option3" name="group" class="radiob"/> <label for="option3">Ubuntu</label> <input type="radio" id="option4" name="group" class="radiob"/> <label for="option4">Fedora</label></div>');function zt(n){var e=Bt(),t=u(e);t.defaultChecked=!0,w(14),p(e),i(n,e)}var Pt=c('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="radio" id="email" name="x" class="radio"/> <label for="email">Email notifications</label> <input type="radio" id="sms" name="x" class="radio-blue"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="radio" id="none" name="x" class="radio-slate"/> <label for="none">No notifications</label> <input type="radio" id="disagree" name="x" class="radio-red"/> <label for="disagree">Stop Bothering!</label></div></div>');function It(n){var e=Pt(),t=u(e),a=u(t);a.defaultChecked=!0,w(14),p(t),p(e),i(n,e)}var Dt=c('<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded"><input type="checkbox" class="switch"/> <input type="checkbox" class="switch-flat-md-primary"/> <input type="checkbox" class="switch-flat-md-red"/> <input type="checkbox" class="switch-flat-md-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-flat-sm"/> <input type="checkbox" class="switch-flat-md"/> <input type="checkbox" class="switch-flat-lg"/> <input type="checkbox" class="switch-flat-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-line-4"/> <input type="checkbox" class="switch-line-6-indigo"/> <input type="checkbox" class="switch-line-8-red"/> <input type="checkbox" class="switch-line-9-slate"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-knob-md-blue"/> <input type="checkbox" class="switch-knob-md-amber"/> <input type="checkbox" class="switch-flat-md-emerald"/> <input type="checkbox" class="switch-knob" name="group4"/></div>');function Tt(n){var e=Dt(),t=u(e);t.defaultChecked=!0;var a=l(t,16);a.defaultChecked=!0;var s=l(a,8);s.defaultChecked=!0;var o=l(s,2);o.defaultChecked=!0;var d=l(o,2);d.defaultChecked=!0;var r=l(d,10);r.defaultChecked=!0,p(e),i(n,e)}var Lt=c('<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded"><input type="checkbox" class="switch-line"/> <input type="checkbox" class="switch-flat"/> <input type="checkbox" class="switch-knob"/></div>');function jt(n){var e=Lt(),t=l(u(e),2);t.defaultChecked=!0,w(2),p(e),i(n,e)}var Ft=c('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="checkbox" id="email" class="switch-line"/> <label for="email">Email notifications</label> <input type="checkbox" id="sms" class="switch-line"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="checkbox" id="none" class="switch"/> <label for="none">No notifications</label> <input type="checkbox" id="disagree" class="switch"/> <label for="disagree">Stop Bothering!</label></div></div>');function qt(n){var e=Ft(),t=u(e),a=u(t);a.defaultChecked=!0,w(14),p(t),p(e),i(n,e)}const Ot=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
      <Btn class="btn-success" txt="Success" />
      <Btn class="btn-warning" txt="Warning" />
      <Btn class="btn-danger" txt="danger" />
    </div>
  );
};
`,Nt=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn class="btn-success" txt="Success" />
  <Btn class="btn-warning" txt="Warning" />
  <Btn class="btn-danger" txt="danger" />
</div>
`,At=`<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
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
`,Rt=`import { Btn } from "@haze-ui/react";

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
`,Mt=`<script lang="ts">
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
`,Vt=`import { Btn } from "@haze-ui/react";

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
`,Ut=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn class="btn-soft-xs" txt="Success" />
  <Btn class="btn-soft-sm" txt="Success" />
  <Btn class="btn-soft-md" txt="Success" />
  <Btn class="btn-soft-lg" txt="Success" />
  <Btn class="btn-soft-xl" txt="Success" />
</div>
`,Gt=`import { Btn } from "@haze-ui/react";

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
`,Ht=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn txt="Primary" class="btn-primary" />
  <Btn class="soft" txt="Soft" />
  <Btn class="btn-outline" txt="Outline" />
  <Btn class="btn-ghost" txt="Ghost" />
</div>
`,Wt=`<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
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
`,Kt=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" id="option" class="checkbox-fg" defaultChecked />
  <label for="option">Option</label>
</div>
`,Jt=`<div class="flex brd p20 rounded-xl justify-center">
  <div
    class="[&>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"
  >
    <input type="checkbox" id="tnc" class="checkbox" defaultChecked />
    <label for="tnc">I agree to the Terms and Conditions</label>

    <input type="checkbox" id="tnc2" class="checkbox-blue" defaultChecked />

    <div>
      <label for="tnc2">I understand and read the privacy policy</label> <br />
      <span class="text-mutedfg text-sm">By Agreeing you accept our
        <a class="link" href="#/">Privacy Policy </a></span>
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
`,Qt=`import { useState } from "react";
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
`,Xt=`<script lang="ts">
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
`,Yt=`import { Input } from "@haze-ui/react";
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
`,Zt=`<script lang="ts">
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
`,en=`<div
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
`,tn=`import { Input } from "@haze-ui/react";

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
`,nn=`<script lang="ts">
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
`,an=`import { Input } from "@haze-ui/react";

export default () => {
  return (
    <div>
      <Input placeholder="Enter name" />
      <Input placeholder="Enter name" class="grinput-outline" />
    </div>
  );
};
`,sn=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap5 flex-wrap items-center brd p10 rounded justify-center">
  <Input placeholder="Enter name" />
  <Input placeholder="Enter name" class="grinput-outline" />
</div>
`,ln=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
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
`,on=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&>label]:mr3">
  <input type="radio" id="option1" name="group" class="radio" defaultChecked />
  <label for="option1">Arch</label>

  <input type="radio" id="option2" name="group" class="radio" />
  <label for="option2">Void</label>

  <input type="radio" id="option3" name="group" class="radiob" />
  <label for="option3">Ubuntu</label>

  <input type="radio" id="option4" name="group" class="radiob" />
  <label for="option4">Fedora</label>
</div>
`,rn=`<div class="flex brd p20 gap5 rounded-xl justify-center">
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
`,cn=`<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded">
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
`,dn=`<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" class="switch-line" />
  <input type="checkbox" class="switch-flat" defaultChecked />
  <input type="checkbox" class="switch-knob" />
</div>
`,un=`<div class="flex brd p20 gap5 rounded-xl justify-center">
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
`,ce=Object.assign({"/codemos/btn/class.svelte":Xe,"/codemos/btn/html.svelte":Ze,"/codemos/btn/icons.svelte":tt,"/codemos/btn/size.svelte":at,"/codemos/btn/variant.svelte":lt,"/codemos/checkbox/colors.svelte":ot,"/codemos/checkbox/default.svelte":ct,"/codemos/checkbox/form.svelte":ut,"/codemos/dialog/usage.svelte":ft,"/codemos/input/form.svelte":xt,"/codemos/input/html.svelte":_t,"/codemos/input/size.svelte":wt,"/codemos/input/usage.svelte":Et,"/codemos/radio/colors.svelte":$t,"/codemos/radio/default.svelte":zt,"/codemos/radio/form.svelte":It,"/codemos/switch/colors.svelte":Tt,"/codemos/switch/default.svelte":jt,"/codemos/switch/form.svelte":qt}),Q=Object.assign({"/codemos/btn/class.jsx":Ot,"/codemos/btn/class.svelte":Nt,"/codemos/btn/html.svelte":At,"/codemos/btn/icons.jsx":Rt,"/codemos/btn/icons.svelte":Mt,"/codemos/btn/size.jsx":Vt,"/codemos/btn/size.svelte":Ut,"/codemos/btn/variant.jsx":Gt,"/codemos/btn/variant.svelte":Ht,"/codemos/checkbox/colors.svelte":Wt,"/codemos/checkbox/default.svelte":Kt,"/codemos/checkbox/form.svelte":Jt,"/codemos/dialog/usage.jsx":Qt,"/codemos/dialog/usage.svelte":Xt,"/codemos/input/form.jsx":Yt,"/codemos/input/form.svelte":Zt,"/codemos/input/html.svelte":en,"/codemos/input/size.jsx":tn,"/codemos/input/size.svelte":nn,"/codemos/input/usage.jsx":an,"/codemos/input/usage.svelte":sn,"/codemos/radio/colors.svelte":ln,"/codemos/radio/default.svelte":on,"/codemos/radio/form.svelte":rn,"/codemos/switch/colors.svelte":cn,"/codemos/switch/default.svelte":dn,"/codemos/switch/form.svelte":un}),wn=(n,e)=>{const t=`/codemos/${n}/${e}`;return{preview:ce[`${t}.svelte`],code:{svelte:Q[`${t}.svelte`],react:Q[`${t}.jsx`]}}},Cn=(n,e)=>{const t=`/codemos/${n}/${e}`;return{preview:ce[`${t}.svelte`],code:{html:Q[`${t}.svelte`]}}};export{kn as T,Cn as a,wn as g};
