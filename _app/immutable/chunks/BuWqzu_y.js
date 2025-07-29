import"./DsnmJJEf.js";import{aJ as ve,z as he,p as T,aL as B,b as k,a as i,c as L,f as d,r as u,s as l,u as p,v as z,av as W,a1 as K,P as ge,a2 as V,g as C,N as X,y as xe,aM as se,n as w}from"./CN7Tx2im.js";import{a as D,f as le,d as U,s as ye}from"./CzdTLSuP.js";import{p as ie,i as I,r as oe}from"./Cks9N-Vx.js";import{c as _e}from"./B_NLlwZy.js";import{o as ke}from"./B49-oPcT.js";import{d as we,s as O,r as Ce,a as $e,c as M,b as re}from"./BJ4Tp9vu.js";import"./LFtgwNh1.js";import{B as y}from"./Ps8VQ_Vg.js";function Ee(n,e,t){ve(()=>{var a=he(()=>e(n,t?.())||{});if(a?.destroy)return()=>a.destroy()})}const ee=n=>n?typeof n=="string"?document.querySelector(n):n:null;function Se(n,e="body"){return ee(e)?.appendChild(n),{update:t=>{t!==e&&(n.parentNode?.removeChild(n),ee(t)?.appendChild(n))},destroy:()=>{n.parentNode?.removeChild(n)}}}const Be=n=>{n.currentTarget==n.target&&close()};var ze=d('<button class="i-pajamas:close absolute right-4 top-4 focus:bg-red" aria-label="close" tabindex="-1"></button>'),Pe=d('<dialog class="backdrop:bg-black/60"><div tabindex="-1"><!> <!></div></dialog>');function Ie(n,e){T(e,!0);let t=ie(e,"closeIcon",3,!0);var a=B(),s=k(a);{var o=c=>{var r=Pe();r.__click=[Be];var m=u(r),v=u(m);{var b=g=>{var _=ze();_.__click=function(...E){e.close?.apply(this,E)},i(g,_)};I(v,g=>{t()&&g(b)})}var x=l(v,2);D(x,()=>e.children),p(m),p(r),Ee(r,g=>Se?.(g)),we(r,()=>g=>g.showModal()),z(()=>O(m,1,`dialog ${e.class}`)),le("close",r,function(...g){e.close?.apply(this,g)}),i(c,r)};I(s,c=>{e.open&&c(o)})}i(n,a),L()}U(["click"]);var De=d("<div></div>"),Te=d("<div></div>"),Le=d("<div><!> <input/> <!></div>");function S(n,e){T(e,!0);let t=ie(e,"class",3,""),a=oe(e,["$$slots","$$events","$$legacy","iconL","iconR","class"]);var s=Le(),o=u(s);{var c=b=>{var x=B(),g=k(x);{var _=f=>{var h=De();z(()=>O(h,1,M(e.iconL))),i(f,h)},E=f=>{var h=B(),$=k(h);D($,()=>e.iconL),i(f,h)};I(g,f=>{typeof e.iconL=="string"?f(_):f(E,!1)})}i(b,x)};I(o,b=>{e.iconL&&b(c)})}var r=l(o,2);Ce(r),$e(r,()=>({...a}));var m=l(r,2);{var v=b=>{var x=B(),g=k(x);{var _=f=>{var h=Te();z(()=>O(h,1,M(e.iconR))),i(f,h)},E=f=>{var h=B(),$=k(h);D($,()=>e.iconR),i(f,h)};I(g,f=>{typeof e.iconR=="string"?f(_):f(E,!1)})}i(b,x)};I(m,b=>{e.iconR&&b(v)})}p(s),z(b=>O(s,1,b),[()=>M(t()?.includes("grinput")?t():`grinput ${t()}`)]),i(n,s),L()}function te(n,e){T(e,!0);let t=W(K(e.defaultValue)),a=K([]);const s=r=>V(t,r,!0);ge("tabs",{value:()=>e.value??C(t),setValue:e.setValue??s,tabLabels:()=>a,addTabLabel:r=>a.push(r)});var o=B(),c=k(o);D(c,()=>e.children),i(n,o),L()}const je=(n,e,t)=>e(t.value);var qe=d('<button role="tab"><!></button>');function N(n,e){T(e,!0);const{value:t,setValue:a,addTabLabel:s}=X("tabs");ke(()=>s(e.value));var o=qe();o.__click=[je,a,e];var c=u(o);D(c,()=>e.children),p(o),z(r=>re(o,"aria-selected",r),[()=>t()==e.value]),i(n,o),L()}U(["click"]);var Fe=d('<div role="tabpanel"><!></div>');function ne(n,e){T(e,!0);const{value:t}=X("tabs");var a=B(),s=k(a);{var o=c=>{var r=Fe(),m=u(r);D(m,()=>e.children),p(r),z(v=>re(r,"aria-labelledby",v),[()=>`tab-${t()}`]),i(c,r)};I(s,c=>{t()==e.value&&c(o)})}i(n,a),L()}const Ne=(n,e,t,a)=>{n.key=="ArrowLeft"&&C(e)!=0?t(a()[C(e)-1]):n.key=="ArrowRight"&&C(e)!=a().length-1&&t(a()[C(e)+1])};var Oe=d('<div role="tablist" tabindex="-1"><!></div>');function ae(n,e){T(e,!0);const{value:t,tabLabels:a,setValue:s}=X("tabs");let o=se(()=>a().indexOf(t()));xe(()=>{t()||s(a()[0])});var c=Oe();c.__keydown=[Ne,o,s,a];var r=u(c);D(r,()=>e.children),p(c),z(m=>O(c,1,m),[()=>M(e.class?.includes("tabs-")?e.class:`tabs ${e.class}`)]),i(n,c),L()}U(["keydown"]);var Ae=d('<i class="i-mage:preview-fill"></i> Preview',1),Re=d('<i class="i-majesticons:code"></i> Code',1),Me=d("<!> <!>",1),Ve=d('<i class="i-devicon:html5"></i> file.html',1),Ue=d('<i class="i-devicon:svelte"></i> Svelte',1),Ge=d('<i class="i-devicon:react"></i> React',1),He=d('<i class="i-devicon:solidjs"></i> Solid',1),We=d("<!> <!> <!>",1),Je=d('<!> <pre class="p5 rounded brd rounded-t-0 max-h-400px overflow-auto"><code> </code></pre>',1),Ke=d("<!> <!> <!>",1);function kn(n,e){const t=oe(e,["$$slots","$$events","$$legacy"]);let{demo:a}=t,s=K({svelte:"",react:"",solid:"",html:""}),o=W(null);const c=r=>{if(V(o,r,!0),r==="svelte"&&!s.svelte&&a.code.svelte)s.svelte=a.code.svelte;else if(r==="react"&&!s.react&&a.code.react){const m=a.code.react;s.react=m.replaceAll("class=","className="),!s.solid&&!a.code.solid&&(s.solid=m.replaceAll("react","solid"))}else r==="solid"&&!s.solid&&a.code.solid?s.solid=a.code.solid:r==="html"&&!s.html&&a.code.html&&(s.html=a.code.html)};te(n,{children:(r,m)=>{var v=Ke(),b=k(v);ae(b,{class:"tabs w-fit p1 !children:p2 !children:px3",children:(_,E)=>{var f=Me(),h=k(f);N(h,{value:"preview",children:(P,j)=>{var q=Ae();w(),i(P,q)},$$slots:{default:!0}});var $=l(h,2);N($,{value:"code",children:(P,j)=>{var q=Re();w(),i(P,q)},$$slots:{default:!0}}),i(_,f)},$$slots:{default:!0}});var x=l(b,2);ne(x,{value:"preview",children:(_,E)=>{var f=B();const h=se(()=>a.preview);var $=k(f);_e($,()=>C(h),(P,j)=>{j(P,{})}),i(_,f)},$$slots:{default:!0}});var g=l(x,2);ne(g,{value:"code",children:(_,E)=>{te(_,{get value(){return C(o)},setValue:c,children:(f,h)=>{var $=Je(),P=k($);ae(P,{class:"tabs-line-primary brd rounded-t [&>button]:capitalize",children:(ue,pn)=>{var Y=B(),pe=k(Y);{var be=F=>{N(F,{value:"html",children:(G,J)=>{var H=Ve();w(),i(G,H)},$$slots:{default:!0}})},me=F=>{var G=We(),J=k(G);N(J,{value:"svelte",children:(A,Z)=>{var R=Ue();w(),i(A,R)},$$slots:{default:!0}});var H=l(J,2);N(H,{value:"react",children:(A,Z)=>{var R=Ge();w(),i(A,R)},$$slots:{default:!0}});var fe=l(H,2);N(fe,{value:"solid",children:(A,Z)=>{var R=He();w(),i(A,R)},$$slots:{default:!0}}),i(F,G)};I(pe,F=>{a.code.html?F(be):F(me,!1)})}i(ue,Y)},$$slots:{default:!0}});var j=l(P,2),q=u(j),de=u(q,!0);p(q),p(j),z(()=>ye(de,C(o)?s[C(o)]:"")),i(f,$)},$$slots:{default:!0}})},$$slots:{default:!0}}),i(r,v)},$$slots:{default:!0}})}var Qe=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!></div>');function Xe(n){var e=Qe(),t=u(e);y(t,{class:"btn-success",txt:"Success"});var a=l(t,2);y(a,{class:"btn-warning",txt:"Warning"});var s=l(a,2);y(s,{class:"btn-danger",txt:"danger"}),p(e),i(n,e)}var Ye=d('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary">Primary</button> <button class="btn-soft">Soft</button> <button class="btn-outline">Outline</button> <button class="btn-ghost">Ghost</button> <button class="btn-emerald5 text-white"><i class="i-line-md:email-filled"></i> Email</button> <button class="btn-outline btn"><i class="i-iconamoon:send"></i> Send us</button> <button class="btn-soft"><i class="i-eos-icons:loading"></i> Fetching...</button> <button class="btn-primary-eqmd" aria-label="plus button"><i class="i-tabler:plus"></i></button> <button class="btn-outline-eqmd rounded-full btn" aria-label="user button"><i class="i-iconoir:user"></i></button> <hr class="w-full brd mt3 mb1"/> <button class="btn btn-soft-xs">Button</button> <button class="btn btn-soft-sm">Button</button> <button class="btn btn-soft-md">Button</button> <button class="btn btn-soft-lg">Button</button> <button class="btn btn-soft-xl">Button</button></div>');function Ze(n){var e=Ye();i(n,e)}var et=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function tt(n){var e=et(),t=u(e);y(t,{class:"btn-emerald5 text-white",iconL:"i-line-md:email-filled",txt:"Email"});var a=l(t,2);y(a,{iconL:"i-iconamoon:send",txt:"Send us",class:"btn-outline"});var s=l(a,2);y(s,{loading:!0,loaderTxt:"Fetching...",disabled:!0,txt:"Fetch data"});var o=l(s,2);y(o,{iconL:"i-tabler:plus",class:"btn-primary-eqmd","aria-label":"plus button"});var c=l(o,2);y(c,{iconL:"i-iconoir:user",class:"btn-outline-eqmd rounded-full","aria-label":"user button"}),p(e),i(n,e)}var nt=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function at(n){var e=nt(),t=u(e);y(t,{class:"btn-soft-xs",txt:"Success"});var a=l(t,2);y(a,{class:"btn-soft-sm",txt:"Success"});var s=l(a,2);y(s,{class:"btn-soft-md",txt:"Success"});var o=l(s,2);y(o,{class:"btn-soft-lg",txt:"Success"});var c=l(o,2);y(c,{class:"btn-soft-xl",txt:"Success"}),p(e),i(n,e)}var st=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!></div>');function lt(n){var e=st(),t=u(e);y(t,{txt:"Primary",class:"btn-primary"});var a=l(t,2);y(a,{class:"soft",txt:"Soft"});var s=l(a,2);y(s,{class:"btn-outline",txt:"Outline"});var o=l(s,2);y(o,{class:"btn-ghost",txt:"Ghost"}),p(e),i(n,e)}var it=d('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><input type="checkbox" class="checkbox"/> <input type="checkbox" class="checkbox-primary"/> <input type="checkbox" class="checkbox-red"/> <input type="checkbox" class="checkbox-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-md"/> <input type="checkbox" class="checkbox-lg"/> <input type="checkbox" class="checkbox-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-5"/> <input type="checkbox" class="checkbox-indigo-7"/> <input type="checkbox" class="checkbox-red-9"/> <input type="checkbox" class="checkbox-slate-10"/> <input type="checkbox" class="checkbox-10 !after:checked:i-ph:check-fat-fill !after:checked:size-6"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-blue text-white"/> <input type="checkbox" class="checkbox-amber text-amber8"/> <input type="checkbox" class="checkbox-emerald"/> <input type="checkbox" class="checkbox checked:bg-bg text-fg"/></div>');function ot(n){var e=it(),t=l(u(e),2);t.defaultChecked=!0;var a=l(t,2);a.defaultChecked=!0;var s=l(a,2);s.defaultChecked=!0;var o=l(s,4);o.defaultChecked=!0;var c=l(o,2);c.defaultChecked=!0;var r=l(c,2);r.defaultChecked=!0;var m=l(r,2);m.defaultChecked=!0;var v=l(m,4);v.defaultChecked=!0;var b=l(v,2);b.defaultChecked=!0;var x=l(b,2);x.defaultChecked=!0;var g=l(x,2);g.defaultChecked=!0;var _=l(g,2);_.defaultChecked=!0;var E=l(_,4);E.defaultChecked=!0;var f=l(E,2);f.defaultChecked=!0;var h=l(f,2);h.defaultChecked=!0;var $=l(h,2);$.defaultChecked=!0,p(e),i(n,e)}var rt=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="checkbox" id="option" class="checkbox-fg"/> <label for="option">Option</label></div>');function ct(n){var e=rt(),t=u(e);t.defaultChecked=!0,w(2),p(e),i(n,e)}var dt=d('<div class="flex brd p20 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"><input type="checkbox" id="tnc" class="checkbox"/> <label for="tnc">I agree to the Terms and Conditions</label> <input type="checkbox" id="tnc2" class="checkbox-blue"/> <div><label for="tnc2">I understand and read the privacy policy</label> <br/> <span class="text-mutedfg text-sm">By Agreeing you accept our <a class="link" href="#/">Privacy Policy</a></span></div> <input type="checkbox" id="tnc3" class="checkbox-slate" disabled/> <label for="tnc3" class="muted-70">I have freedom of speech</label></div></div>');function ut(n){var e=dt(),t=u(e),a=u(t);a.defaultChecked=!0;var s=l(a,4);s.defaultChecked=!0,w(6),p(t),p(e),i(n,e)}const pt=(n,e)=>V(e,!0);var bt=d('<h3>Edit Account</h3> <p class="text-mutedfg mb2">Make changes to your user profile here.</p> <label for="name">Name</label> <input class="input-outline" id="name" placeholder="Enter your name"/> <label for="email">Email</label> <input type="email" class="input-outline" id="email" placeholder="Enter your email"/> <div class="flex gap3 items-center ml-auto mt3"><button class="btn-soft">Cancel</button> <button class="btn-primary">Save</button></div>',1),mt=d('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary mx-auto">Open</button> <!></div>');function ft(n){let e=W(!1);const t=()=>V(e,!1);var a=mt(),s=u(a);s.__click=[pt,e];var o=l(s,2);Ie(o,{get open(){return C(e)},close:t,class:"grid gap4",children:(c,r)=>{var m=bt(),v=l(k(m),12),b=u(v);b.__click=t,w(2),p(v),i(c,m)},$$slots:{default:!0}}),p(a),i(n,a)}U(["click"]);const vt=(n,e)=>{V(e,C(e)==="text"?"password":"text",!0)};var ht=d('<button type="button" class="btn-ghost-eqsm rounded-full mr--2" aria-label="Toggle password visibility"><i></i></button>'),gt=d('<div class="flex flex-gap5 flex-wrap items-center brd p10 py20 rounded justify-center"><form class="grid gap3"><label for="email" class="reqstar">Email</label> <!> <label for="passwd">Password</label> <!> <input type="submit" class="!btn-primary ml-auto mt3"/></form></div>');function xt(n,e){T(e,!0);let t=W("password");const a=m=>{m.preventDefault();const v=new FormData(m.target),b=v.get("email"),x=v.get("passwd");alert(`
Email: ${b}
Password: ${x}`)};var s=gt(),o=u(s),c=l(u(o),2);S(c,{required:!0,name:"email",id:"email",placeholder:"Enter email",type:"email",iconL:"i-line-md:email",class:"grinput-outline mb3"});var r=l(c,4);S(r,{name:"passwd",id:"passwd",placeholder:"Enter Password",get type(){return C(t)},iconL:"i-lucide:key-round",class:"grinput-outline",iconR:v=>{var b=ht();b.__click=[vt,t];var x=u(b);p(b),z(()=>O(x,1,M(C(t)=="text"?"i-heroicons-solid:eye":"i-heroicons-solid:eye-off"))),i(v,b)},$$slots:{iconR:!0}}),w(2),p(o),p(s),le("submit",o,a),i(n,s),L()}U(["click"]);var yt=d('<div class="flex flex-col flex-gap5 flex-wrap items-center brd p10 rounded"><input class="input" placeholder="Enter name"/> <input class="input-outline" placeholder="Enter name"/> <br/> <p>sizes</p> <input class="input-outline-sm" placeholder="Enter name"/> <input class="input-outline-md" disabled placeholder="Enter name"/> <input class="input-lg" placeholder="Enter name"/> <input class="input-outline-xl" placeholder="Enter name"/> <p>Icons</p> <div class="grid grid-cols-2 grid-gap5"><div class="grinput"><i class="i-ri:user-line"></i> <input placeholder="Enter name"/></div> <div class="grinput-outline"><i class="i-line-md:email-filled"></i> <input placeholder="Enter name"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter price" type="number"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter salary" disabled/></div> <div class="grinput-outline p0 col-span-2"><span class="bg-mutedbg p2 px3 rounded-l">$</span> <input placeholder="Enter name"/> <span class="bg-mutedbg p2 rounded-r">USD</span></div></div></div>');function _t(n){var e=yt();i(n,e)}var kt=d('<div class="grid grid-gap5 grid-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!> <!> <!></div>');function wt(n){var e=kt(),t=u(e);S(t,{placeholder:"size (sm)",class:"grinput-sm"});var a=l(t,2);S(a,{placeholder:"size (md)",class:"grinput-md"});var s=l(a,2);S(s,{placeholder:"size (lg)",class:"grinput-lg"});var o=l(s,2);S(o,{placeholder:"size (xl)",class:"grinput-outline-xl"});var c=l(o,2);S(c,{placeholder:"size (2)",class:"grinput-2"});var r=l(c,2);S(r,{placeholder:"size (2.3)",class:"grinput-2.3"});var m=l(r,2);S(m,{placeholder:"size (2.9)",class:"grinput-outline-2.9"}),p(e),i(n,e)}var Ct=d('<div class="flex flex-gap5 flex-wrap items-center brd p10 rounded justify-center"><!> <!></div>');function $t(n){var e=Ct(),t=u(e);S(t,{placeholder:"Enter name"});var a=l(t,2);S(a,{placeholder:"Enter name",class:"grinput-outline"}),p(e),i(n,e)}var Et=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="radio" class="radio" name="group1"/> <input type="radio" class="radio-primary" name="group1"/> <input type="radio" class="radio-red" name="group1"/> <input type="radio" class="radio-amber4" name="group1"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group2"/> <input type="radio" class="radio-md" name="group2"/> <input type="radio" class="radio-lg" name="group2"/> <input type="radio" class="radio-xl" name="group2"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-4" name="group3"/> <input type="radio" class="radio-indigo-6" name="group3"/> <input type="radio" class="radio-red-8" name="group3"/> <input type="radio" class="radio-slate-9" name="group3"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radiob-blue" name="group4"/> <input type="radio" class="radiob-amber" name="group4"/> <input type="radio" class="radiob-emerald" name="group4"/> <input type="radio" class="radiob" name="group4"/></div>');function St(n){var e=Et(),t=u(e);t.defaultChecked=!0;var a=l(t,14);a.defaultChecked=!0;var s=l(a,8);s.defaultChecked=!0;var o=l(s,14);o.defaultChecked=!0,p(e),i(n,e)}var Bt=d('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&amp;>label]:mr3"><input type="radio" id="option1" name="group" class="radio"/> <label for="option1">Arch</label> <input type="radio" id="option2" name="group" class="radio"/> <label for="option2">Void</label> <input type="radio" id="option3" name="group" class="radiob"/> <label for="option3">Ubuntu</label> <input type="radio" id="option4" name="group" class="radiob"/> <label for="option4">Fedora</label></div>');function zt(n){var e=Bt(),t=u(e);t.defaultChecked=!0,w(14),p(e),i(n,e)}var Pt=d('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="radio" id="email" name="x" class="radio"/> <label for="email">Email notifications</label> <input type="radio" id="sms" name="x" class="radio-blue"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="radio" id="none" name="x" class="radio-slate"/> <label for="none">No notifications</label> <input type="radio" id="disagree" name="x" class="radio-red"/> <label for="disagree">Stop Bothering!</label></div></div>');function It(n){var e=Pt(),t=u(e),a=u(t);a.defaultChecked=!0,w(14),p(t),p(e),i(n,e)}var Dt=d('<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded"><input type="checkbox" class="switch"/> <input type="checkbox" class="switch-flat-md-primary"/> <input type="checkbox" class="switch-flat-md-red"/> <input type="checkbox" class="switch-flat-md-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-flat-sm"/> <input type="checkbox" class="switch-flat-md"/> <input type="checkbox" class="switch-flat-lg"/> <input type="checkbox" class="switch-flat-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-line-4"/> <input type="checkbox" class="switch-line-6-indigo"/> <input type="checkbox" class="switch-line-8-red"/> <input type="checkbox" class="switch-line-9-slate"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-knob-md-blue"/> <input type="checkbox" class="switch-knob-md-amber"/> <input type="checkbox" class="switch-flat-md-emerald"/> <input type="checkbox" class="switch-knob" name="group4"/></div>');function Tt(n){var e=Dt(),t=u(e);t.defaultChecked=!0;var a=l(t,16);a.defaultChecked=!0;var s=l(a,8);s.defaultChecked=!0;var o=l(s,2);o.defaultChecked=!0;var c=l(o,2);c.defaultChecked=!0;var r=l(c,10);r.defaultChecked=!0,p(e),i(n,e)}var Lt=d('<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded"><input type="checkbox" class="switch-line"/> <input type="checkbox" class="switch-flat"/> <input type="checkbox" class="switch-knob"/></div>');function jt(n){var e=Lt(),t=l(u(e),2);t.defaultChecked=!0,w(2),p(e),i(n,e)}var qt=d('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="checkbox" id="email" class="switch-line"/> <label for="email">Email notifications</label> <input type="checkbox" id="sms" class="switch-line"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="checkbox" id="none" class="switch"/> <label for="none">No notifications</label> <input type="checkbox" id="disagree" class="switch"/> <label for="disagree">Stop Bothering!</label></div></div>');function Ft(n){var e=qt(),t=u(e),a=u(t);a.defaultChecked=!0,w(14),p(t),p(e),i(n,e)}const Nt=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
      <Btn class="btn-success" txt="Success" />
      <Btn class="btn-warning" txt="Warning" />
      <Btn class="btn-danger" txt="danger" />
    </div>
  );
};
`,Ot=`<script lang="ts">
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
`,Jt=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" id="option" class="checkbox-fg" defaultChecked />
  <label for="option">Option</label>
</div>
`,Kt=`<div class="flex brd p20 rounded-xl justify-center">
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
`,ce=Object.assign({"/codemos/btn/class.svelte":Xe,"/codemos/btn/html.svelte":Ze,"/codemos/btn/icons.svelte":tt,"/codemos/btn/size.svelte":at,"/codemos/btn/variant.svelte":lt,"/codemos/checkbox/colors.svelte":ot,"/codemos/checkbox/default.svelte":ct,"/codemos/checkbox/form.svelte":ut,"/codemos/dialog/usage.svelte":ft,"/codemos/input/form.svelte":xt,"/codemos/input/html.svelte":_t,"/codemos/input/size.svelte":wt,"/codemos/input/usage.svelte":$t,"/codemos/radio/colors.svelte":St,"/codemos/radio/default.svelte":zt,"/codemos/radio/form.svelte":It,"/codemos/switch/colors.svelte":Tt,"/codemos/switch/default.svelte":jt,"/codemos/switch/form.svelte":Ft}),Q=Object.assign({"/codemos/btn/class.jsx":Nt,"/codemos/btn/class.svelte":Ot,"/codemos/btn/html.svelte":At,"/codemos/btn/icons.jsx":Rt,"/codemos/btn/icons.svelte":Mt,"/codemos/btn/size.jsx":Vt,"/codemos/btn/size.svelte":Ut,"/codemos/btn/variant.jsx":Gt,"/codemos/btn/variant.svelte":Ht,"/codemos/checkbox/colors.svelte":Wt,"/codemos/checkbox/default.svelte":Jt,"/codemos/checkbox/form.svelte":Kt,"/codemos/dialog/usage.jsx":Qt,"/codemos/dialog/usage.svelte":Xt,"/codemos/input/form.jsx":Yt,"/codemos/input/form.svelte":Zt,"/codemos/input/html.svelte":en,"/codemos/input/size.jsx":tn,"/codemos/input/size.svelte":nn,"/codemos/input/usage.jsx":an,"/codemos/input/usage.svelte":sn,"/codemos/radio/colors.svelte":ln,"/codemos/radio/default.svelte":on,"/codemos/radio/form.svelte":rn,"/codemos/switch/colors.svelte":cn,"/codemos/switch/default.svelte":dn,"/codemos/switch/form.svelte":un}),wn=(n,e)=>{const t=`/codemos/${n}/${e}`;return{preview:ce[`${t}.svelte`],code:{svelte:Q[`${t}.svelte`],react:Q[`${t}.jsx`]}}},Cn=(n,e)=>{const t=`/codemos/${n}/${e}`;return{preview:ce[`${t}.svelte`],code:{html:Q[`${t}.svelte`]}}};export{kn as T,Cn as a,wn as g};
