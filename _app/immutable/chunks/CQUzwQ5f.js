import"./DsnmJJEf.js";import{e as qt,u as Nt,r as Ut,w as Mt,aV as Rt,p as P,aK as V,b as h,a as i,c as z,f as c,h as C,s,i as w,j as E,g as p,a6 as H,aL as $t,a8 as I,a7 as it,aH as Dt,aF as Z,m as St,az as ct,n as x,t as q}from"./JkXahOnN.js";import{a as M,e as Tt,d as U,s as rt,o as It,m as Wt}from"./BXcnjHkR.js";import{p as Y,i as N,r as ot,s as Bt}from"./tHUtPID9.js";import{d as Vt,s as j,r as Ht,a as mt,c as G,b as K}from"./Hxgu_oeu.js";import"./69_IOA4Y.js";import{B}from"./BNwk1LTG.js";import{b as Gt}from"./Cy7cCf5b.js";import{e as Pt}from"./CC_AG0vj.js";import{i as dt}from"./DRcaEg9B.js";function gt(e,t,n){qt(()=>{var o=Nt(()=>t(e,n?.())||{});if(n&&o?.update){var a=!1,l={};Ut(()=>{var r=n();Mt(r),a&&Rt(l,r)&&(l=r,o.update(r))}),a=!0}if(o?.destroy)return()=>o.destroy()})}const ht=e=>e?typeof e=="string"?document.querySelector(e):e:null;function Kt(e,t="body"){return ht(t)?.appendChild(e),{update:n=>{n!==t&&(e.parentNode?.removeChild(e),ht(n)?.appendChild(e))},destroy:()=>{e.parentNode?.removeChild(e)}}}const Jt=e=>{e.currentTarget==e.target&&close()};var Qt=c('<button class="i-pajamas:close absolute right-4 top-4 focus:bg-red" aria-label="close" tabindex="-1"></button>'),Xt=c('<dialog class="backdrop:bg-black/60"><div tabindex="-1"><!> <!></div></dialog>');function Yt(e,t){P(t,!0);let n=Y(t,"closeIcon",3,!0);var o=V(),a=h(o);{var l=r=>{var d=Xt();d.__click=[Jt];var m=C(d),b=C(m);{var g=_=>{var y=Qt();y.__click=function(...S){t.close?.apply(this,S)},i(_,y)};N(b,_=>{n()&&_(g)})}var v=s(b,2);M(v,()=>t.children),w(m),w(d),gt(d,_=>Kt?.(_)),Vt(d,()=>_=>_.showModal()),E(()=>j(m,1,`dialog ${t.class}`)),Tt("close",d,function(..._){t.close?.apply(this,_)}),i(r,d)};N(a,r=>{t.open&&r(l)})}i(e,o),z()}U(["click"]);var Zt=c("<div></div>"),tn=c("<div></div>"),nn=c("<div><!> <input/> <!></div>");function J(e,t){P(t,!0);let n=Y(t,"class",3,""),o=ot(t,["$$slots","$$events","$$legacy","iconL","iconR","class"]);var a=nn(),l=C(a);{var r=g=>{var v=V(),_=h(v);{var y=u=>{var f=Zt();E(()=>j(f,1,G(t.iconL))),i(u,f)},S=u=>{var f=V(),k=h(f);M(k,()=>t.iconL),i(u,f)};N(_,u=>{typeof t.iconL=="string"?u(y):u(S,!1)})}i(g,v)};N(l,g=>{t.iconL&&g(r)})}var d=s(l,2);Ht(d),mt(d,()=>({...o}));var m=s(d,2);{var b=g=>{var v=V(),_=h(v);{var y=u=>{var f=tn();E(()=>j(f,1,G(t.iconR))),i(u,f)},S=u=>{var f=V(),k=h(f);M(k,()=>t.iconR),i(u,f)};N(_,u=>{typeof t.iconR=="string"?u(y):u(S,!1)})}i(g,v)};N(m,g=>{t.iconR&&g(b)})}w(a),E(g=>j(a,1,g),[()=>G(n()?.includes("grinput")?n():`grinput ${n()}`)]),i(e,a),z()}const zt=(e,t)=>{function n(o){e.contains(o.target)||t()}return document.addEventListener("click",n),{destroy(){document.removeEventListener("click",n)}}};var en=()=>null,on=c("<span></span>"),an=c('<li role="option"><!> </li>'),sn=c('<ul role="listbox"></ul>'),ln=c('<div class="relative inline-flex first:children:w-full"><!> <!></div>');function lt(e,t){P(t,!0);let n=Y(t,"placeholder",3,"Select Option"),o=H(!1),a=H(-1),l=H(-1);const r=()=>{I(o,!p(o)),p(o)&&I(l,p(a),!0)},d=u=>{u!==p(a)&&(I(a,u,!0),t.onChange?.(t.options[u].value)),I(o,!1)},m=u=>{switch(u.preventDefault(),u.key){case"Enter":d(p(l));break;case"Escape":I(o,!1);break;case"ArrowUp":I(l,p(l)>0?p(l)-1:0,!0);break;case"ArrowDown":I(l,p(l)<t.options.length-1?p(l)+1:0,!0);break}},g=`justify-start btn-ghost-eqmd transition-none ${t.optionCss?.includes("data-")?t.optionCss:`data-active:bg-mutedbg ${t.optionCss}`}`;var v=ln(),_=C(v);{let u=$t(()=>t.options[p(a)]?.name||n());B(_,Bt({"aria-haspopup":"listbox",get"aria-expanded"(){return p(o)},onclick:r,onkeydown:m,iconR:"ml-auto i-fa-solid:caret-down",get txt(){return p(u)}},()=>t.triggerProps))}var y=s(_,2);{var S=u=>{var f=sn();K(f,"tabindex",-1),Pt(f,23,()=>t.options,k=>k.value,(k,F,A)=>{var T=an();K(T,"tabindex",-1),T.__click=()=>d(p(A)),T.__keydown=[en];var R=C(T);{var W=L=>{var D=on();E(()=>j(D,1,G(p(F).iconL))),i(L,D)};N(R,L=>{p(F).iconL&&L(W)})}var $=s(R);w(T),E(()=>{K(T,"id",`option-${p(A)}`),K(T,"aria-selected",p(a)===p(A)),K(T,"data-active",p(l)===p(A)),j(T,1,G(g)),rt($,` ${p(F).name??""}`)}),i(k,T)}),w(f),E(()=>{j(f,1,`popover z-10 whitespace-nowrap ${t.dropdownCss}`),K(f,"aria-activedescendant",`option-${p(l)}`)}),i(u,f)};N(y,u=>{p(o)&&u(S)})}w(v),gt(v,(u,f)=>zt?.(u,f),()=>()=>I(o,!1)),i(e,v),z()}U(["click","keydown"]);function _t(e,t){P(t,!0);let n=H(it(t.defaultValue)),o=it([]);const a=d=>I(n,d,!0);Dt("tabs",{value:()=>t.value??p(n),setValue:t.setValue??a,tabLabels:()=>o,addTabLabel:d=>o.push(d)});var l=V(),r=h(l);M(r,()=>t.children),i(e,l),z()}const rn=(e,t,n)=>t(n.value);var cn=c('<button role="tab"><!></button>');function X(e,t){P(t,!0);const{value:n,setValue:o,addTabLabel:a}=Z("tabs");It(()=>a(t.value));var l=cn();l.__click=[rn,o,t];var r=C(l);M(r,()=>t.children),w(l),E(d=>K(l,"aria-selected",d),[()=>n()==t.value]),i(e,l),z()}U(["click"]);var dn=c('<div role="tabpanel"><!></div>');function xt(e,t){P(t,!0);const{value:n}=Z("tabs");var o=V(),a=h(o);{var l=r=>{var d=dn(),m=C(d);M(m,()=>t.children),w(d),E(b=>K(d,"aria-labelledby",b),[()=>`tab-${n()}`]),i(r,d)};N(a,r=>{n()==t.value&&r(l)})}i(e,o),z()}const un=(e,t,n,o)=>{e.key=="ArrowLeft"&&p(t)!=0?n(o()[p(t)-1]):e.key=="ArrowRight"&&p(t)!=o().length-1&&n(o()[p(t)+1])};var pn=c('<div role="tablist" tabindex="-1"><!></div>');function kt(e,t){P(t,!0);const{value:n,tabLabels:o,setValue:a}=Z("tabs");let l=$t(()=>o().indexOf(n()));St(()=>{n()||a(o()[0])});var r=pn();r.__keydown=[un,l,a,o];var d=C(r);M(d,()=>t.children),w(r),E(m=>j(r,1,m),[()=>G(t.class?.includes("tabs-")?t.class:`tabs ${t.class}`)]),i(e,r),z()}U(["keydown"]);var bn=c('<div class="relative inline-block"><!></div>');function yt(e,t){P(t,!0);let n=H(!1);const o=()=>I(n,!p(n)),a=()=>I(n,!1);Dt("dropdown",{open:()=>p(n),toggleDropdown:o,closeDropdown:a});var r=bn(),d=C(r);M(d,()=>t.children??ct),w(r),gt(r,(m,b)=>zt?.(m,b),()=>a),i(e,r),z()}const mn=(e,t,n,o)=>{if(!t())return;const a=n();a.length!==0&&(e.key=="ArrowDown"&&p(o)<a.length?(e.preventDefault(),I(o,p(o)+1),a[p(o)]?.focus()):e.key=="ArrowUp"&&p(o)>0&&(I(o,p(o)-1),a[p(o)]?.focus()))};var gn=c('<div role="menu" tabindex="0"><!></div>');function wt(e,t){P(t,!0);let n=Y(t,"class",3,""),o=H(-1),a=H(null);const{open:l}=Z("dropdown"),r=()=>p(a)?Array.from(p(a).querySelectorAll('[role="menuitem"]')):[];St(()=>{l()&&p(a)?.focus()});var d=V(),m=h(d);{var b=g=>{var v=gn();v.__keydown=[mn,l,r,o];var _=C(v);M(_,()=>t.children??ct),w(v),Gt(v,y=>I(a,y),()=>p(a)),E(y=>j(v,1,y),[()=>G(n().includes("popover")?n():`popover ${n()}`)]),i(g,v)};N(m,g=>{l()&&g(b)})}i(e,d),z()}U(["keydown"]);var vn=c("<button><!></button>");function Ct(e,t){P(t,!0);const{toggleDropdown:n}=Z("dropdown");let o=ot(t,["$$slots","$$events","$$legacy","children","class"]);var a=vn();mt(a,r=>({class:r,onclick:n,...o}),[()=>t.class?.includes("btn")?t.class:`btn ${t.class}`]);var l=C(a);M(l,()=>t.children??ct),w(a),i(e,a),z()}var fn=c("<button><!></button>");function O(e,t){P(t,!0);let n=ot(t,["$$slots","$$events","$$legacy","children","class"]);const{closeDropdown:o}=Z("dropdown");var a=fn();mt(a,()=>({onclick:o,class:`btn-ghost-eqmd focus:bg-input justify-start whitespace-nowrap ${t.class}`,role:"menuitem",...n}));var l=C(a);M(l,()=>t.children??ct),w(a),i(e,a),z()}const hn=(e,t,n)=>Lt(n.id,n.pos);var _n=c("<div></div>"),xn=c('<div><!> <div class="grid gap1"><b> </b> <span> </span></div> <button aria-label="close" class="btn-ghost-eqsm absolute right-2 top-2"><span class="i-pajamas:close"></span></button></div>');function kn(e,t){P(t,!0);let n=Y(t,"icon",15),o=Y(t,"css",3,""),a=ot(t,["$$slots","$$events","$$legacy","pos","icon","css"]);const l={success:"i-mingcute:check-circle-fill",warning:"i-jam:info-f",danger:"i-mi:circle-error"},r=o()?.match(/\b\S*toast\S*(danger|success|warning)\S*\b/);if(!n()&&r&&r[0]){const f=r[0].split("-");n(l[f.at(-1)])}It(()=>{setTimeout(()=>Lt(t.id,t.pos),t.duration||3e3)});var d=xn(),m=C(d);{var b=f=>{var k=_n();E(()=>j(k,1,n()+" my-auto text-3xl")),i(f,k)};N(m,f=>{n()&&f(b)})}var g=s(m,2),v=C(g),_=C(v,!0);w(v);var y=s(v,2),S=C(y,!0);w(y),w(g);var u=s(g,2);u.__click=[hn,a,t],w(d),E(f=>{j(d,1,f),rt(_,t.title),rt(S,t.txt)},[()=>G(o().includes("toast")?o():`toast ${o()}`)]),i(e,d),z()}U(["click"]);function yn(e,t){P(t,!0);var n=V(),o=h(n);Pt(o,17,()=>et[t.pos],a=>a.id,(a,l)=>{kn(a,Bt(()=>p(l)))}),i(e,n),z()}let et=it({topleft:[],topmid:[],topright:[],botleft:[],botmid:[],botright:[]});const wn=e=>{e.pos&&et[e.pos].push({...e,id:crypto.randomUUID()})},Lt=(e,t)=>{const n=et[t].findIndex(o=>o.id===e);n!==-1&&et[t].splice(n,1),et[t].length==0&&document.getElementById("toasts-"+t)?.remove()},Cn={topright:"top-3 right-3",topleft:"top-3 left-3",botleft:"bottom-3 left-3",botright:"bottom-3 right-3",topmid:"top-3 left-1/2 -translate-x-1/2",botmid:"bottom-3 left-1/2 -translate-x-1/2"},ut=e=>{e.pos=e.pos||"topmid";const t="toast-"+e.pos;let n=document.getElementById(t);n||(n=document.createElement("div"),n.id=t,n.className="fixed "+Cn[e.pos],document.body.appendChild(n),Wt(yn,{target:n,props:{pos:e.pos}})),wn(e)};var $n=c('<i class="i-mage:preview-fill"></i> Preview',1),Dn=c('<i class="i-majesticons:code"></i> Code',1),Sn=c("<!> <!>",1),Tn=c("<div><!></div>"),In=c('<i class="i-devicon:html5"></i> file.html',1),Bn=c('<i class="i-devicon:svelte"></i> Svelte',1),Pn=c('<i class="i-devicon:react"></i> React',1),zn=c('<i class="i-devicon:solidjs"></i> Solid',1),Ln=c("<!> <!> <!>",1),En=c('<!> <pre class="p5 rounded brd rounded-t-0 max-h-400px overflow-auto"><code> </code></pre>',1),An=c("<!> <!> <!>",1);function ga(e,t){const n=ot(t,["$$slots","$$events","$$legacy"]);let{demo:o,class:a=""}=n,l=it({svelte:"",react:"",solid:"",html:""}),r=H(null);const d=b=>{if(I(r,b,!0),b==="svelte"&&!l.svelte&&o.code.svelte)l.svelte=o.code.svelte;else if(b==="react"&&!l.react&&o.code.react){const g=o.code.react;l.react=g.replaceAll("class=","className="),!l.solid&&!o.code.solid&&(l.solid=g.replaceAll("react","solid"))}else b==="solid"&&!l.solid&&o.code.solid?l.solid=o.code.solid:b==="html"&&!l.html&&o.code.html&&(l.html=o.code.html)},m=o.preview;_t(e,{defaultValue:"preview",children:(b,g)=>{var v=An(),_=h(v);kt(_,{class:"tabs w-fit p1 !children:p2 !children:px3",children:(u,f)=>{var k=Sn(),F=h(k);X(F,{value:"preview",children:(T,R)=>{var W=$n();x(),i(T,W)},$$slots:{default:!0}});var A=s(F,2);X(A,{value:"code",children:(T,R)=>{var W=Dn();x(),i(T,W)},$$slots:{default:!0}}),i(u,k)},$$slots:{default:!0}});var y=s(_,2);xt(y,{value:"preview",children:(u,f)=>{var k=Tn(),F=C(k);m(F,{}),w(k),E(A=>j(k,1,A),[()=>G(a.includes("demobox")?a:`demobox-center ${a}`)]),i(u,k)},$$slots:{default:!0}});var S=s(y,2);xt(S,{value:"code",children:(u,f)=>{_t(u,{get value(){return p(r)},setValue:d,children:(k,F)=>{var A=En(),T=h(A);kt(T,{class:"tabs-line-primary brd rounded-t [&>button]:capitalize",children:(L,D)=>{var vt=V(),At=h(vt);{var Ot=Q=>{X(Q,{value:"html",children:(at,pt)=>{var st=In();x(),i(at,st)},$$slots:{default:!0}})},jt=Q=>{var at=Ln(),pt=h(at);X(pt,{value:"svelte",children:(tt,ft)=>{var nt=Bn();x(),i(tt,nt)},$$slots:{default:!0}});var st=s(pt,2);X(st,{value:"react",children:(tt,ft)=>{var nt=Pn();x(),i(tt,nt)},$$slots:{default:!0}});var Ft=s(st,2);X(Ft,{value:"solid",children:(tt,ft)=>{var nt=zn();x(),i(tt,nt)},$$slots:{default:!0}}),i(Q,at)};N(At,Q=>{o.code.html?Q(Ot):Q(jt,!1)})}i(L,vt)},$$slots:{default:!0}});var R=s(T,2),W=C(R),$=C(W,!0);w(W),w(R),E(()=>rt($,p(r)?l[p(r)]:"")),i(k,A)},$$slots:{default:!0}})},$$slots:{default:!0}}),i(b,v)},$$slots:{default:!0}})}var On=c('<span class="badge bg-indigo">Badge</span> <span class="badge-outline border-fg">Outline</span> <span class="badge-surface">Surface</span> <span class="badge dtxtbg-emerald-60"><i class="i-icon-park-outline:check-one"></i> Badge</span> <span class="badge bg-rose"><i class="i-line-md:star-filled"></i> Badge</span> <span class="badge ltxtbg-blue-80">Light blue</span> <span class="badge dtxtbgr-pink_3">Badge</span> <span class="badge ltxtbgr-orange">Badge</span> <span class="badge ltxtbg-emerald_5-80"><i class="i-icon-park-outline:check-one"></i> Badge</span>',1);function jn(e){var t=On();x(16),i(e,t)}var Fn=c('<span class="badge-sm">Size sm</span> <span class="badge-secondary-md">Size md</span> <span class="badge-secondary-lg">Size lg</span> <span class="badge-surface-xl">Size xl</span>',1);function qn(e){var t=Fn();x(6),i(e,t)}var Nn=c('<span class="badge-solid">Badge</span> <span class="badge-secondary">Secondary</span> <span class="badge-outline">Outline</span> <span class="badge-surface">Surface</span> <span class="badge bg-emerald6"><i class="i-uil:check-circle"></i> Checked!</span> <span class="badge bg-amber6"><i class="i-line-md:star-filled"></i> 5.3k</span> <span class="badge-outline">99+</span>',1);function Un(e){var t=Nn();x(12),i(e,t)}var Mn=c("<!> <!> <!>",1);function Rn(e){var t=Mn(),n=h(t);B(n,{class:"btn-success",txt:"Success"});var o=s(n,2);B(o,{class:"btn-warning",txt:"Warning"});var a=s(o,2);B(a,{class:"btn-danger",txt:"danger"}),i(e,t)}var Wn=c('<button class="btn-primary">Primary</button> <button class="btn-soft">Soft</button> <button class="btn-outline">Outline</button> <button class="btn-ghost">Ghost</button> <button class="btn-emerald5 text-white"><i class="i-line-md:email-filled"></i> Email</button> <button class="btn-outline btn"><i class="i-iconamoon:send"></i> Send us</button> <button class="btn-soft"><i class="i-eos-icons:loading"></i> Fetching...</button> <button class="btn-primary-eqmd" aria-label="plus button"><i class="i-tabler:plus"></i></button> <button class="btn-outline-eqmd rounded-full btn" aria-label="user button"><i class="i-iconoir:user"></i></button> <hr class="w-full brd mt3 mb1"/> <button class="btn-soft-xs">Button</button> <button class="btn-soft-sm">Button</button> <button class="btn-soft-md">Button</button> <button class="btn-soft-lg">Button</button> <button class="btn-soft-xl">Button</button>',1);function Vn(e){var t=Wn();x(28),i(e,t)}var Hn=c("<!> <!> <!> <!> <!>",1);function Gn(e){var t=Hn(),n=h(t);B(n,{class:"btn-emerald5 text-white",iconL:"i-line-md:email-filled",txt:"Email"});var o=s(n,2);B(o,{iconL:"i-iconamoon:send",txt:"Send us",class:"btn-outline"});var a=s(o,2);B(a,{loading:!0,loaderTxt:"Fetching...",disabled:!0,txt:"Fetch data"});var l=s(a,2);B(l,{iconL:"i-tabler:plus",class:"btn-primary-eqmd","aria-label":"plus button"});var r=s(l,2);B(r,{iconL:"i-iconoir:user",class:"btn-outline-eqmd rounded-full","aria-label":"user button"}),i(e,t)}var Kn=c("<!> <!> <!> <!> <!>",1);function Jn(e){var t=Kn(),n=h(t);B(n,{class:"btn-soft-xs",txt:"Success"});var o=s(n,2);B(o,{class:"btn-soft-sm",txt:"Success"});var a=s(o,2);B(a,{class:"btn-soft-md",txt:"Success"});var l=s(a,2);B(l,{class:"btn-soft-lg",txt:"Success"});var r=s(l,2);B(r,{class:"btn-soft-xl",txt:"Success"}),i(e,t)}var Qn=c("<!> <!> <!> <!>",1);function Xn(e){var t=Qn(),n=h(t);B(n,{txt:"Primary",class:"btn-primary"});var o=s(n,2);B(o,{class:"soft",txt:"Soft"});var a=s(o,2);B(a,{class:"btn-outline",txt:"Outline"});var l=s(a,2);B(l,{class:"btn-ghost",txt:"Ghost"}),i(e,t)}var Yn=c('<input type="checkbox" class="checkbox"/> <input type="checkbox" class="checkbox-primary"/> <input type="checkbox" class="checkbox-red"/> <input type="checkbox" class="checkbox-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-md"/> <input type="checkbox" class="checkbox-lg"/> <input type="checkbox" class="checkbox-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-indigo-md"/> <input type="checkbox" class="checkbox-red-lg"/> <input type="checkbox" class="checkbox-slate-xl"/> <input type="checkbox" class="checkbox-xl !after:checked:i-ph:check-fat-fill !after:checked:size-6"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-blue text-white"/> <input type="checkbox" class="checkbox-amber text-amber8"/> <input type="checkbox" class="checkbox-emerald"/> <input type="checkbox" class="checkbox checked:bg-bg text-fg"/>',1);function Zn(e){var t=Yn(),n=s(h(t),2);n.defaultChecked=!0;var o=s(n,2);o.defaultChecked=!0;var a=s(o,2);a.defaultChecked=!0;var l=s(a,4);l.defaultChecked=!0;var r=s(l,2);r.defaultChecked=!0;var d=s(r,2);d.defaultChecked=!0;var m=s(d,2);m.defaultChecked=!0;var b=s(m,4);b.defaultChecked=!0;var g=s(b,2);g.defaultChecked=!0;var v=s(g,2);v.defaultChecked=!0;var _=s(v,2);_.defaultChecked=!0;var y=s(_,2);y.defaultChecked=!0;var S=s(y,4);S.defaultChecked=!0;var u=s(S,2);u.defaultChecked=!0;var f=s(u,2);f.defaultChecked=!0;var k=s(f,2);k.defaultChecked=!0,i(e,t)}var te=c('<input type="checkbox" id="option" class="checkbox-fg"/> <label for="option">Option</label>',1);function ne(e){var t=te(),n=h(t);n.defaultChecked=!0,x(2),i(e,t)}var ee=c('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"><input type="checkbox" id="tnc" class="checkbox"/> <label for="tnc">I agree to the Terms and Conditions</label> <input type="checkbox" id="tnc2" class="checkbox-blue"/> <div><label for="tnc2">I understand and read the privacy policy</label> <br/> <span class="text-mutedfg text-sm">By Agreeing you accept our <a class="link" href="/">Privacy Policy</a></span></div> <input type="checkbox" id="tnc3" class="checkbox-slate" disabled/> <label for="tnc3" class="muted-70">I have freedom of speech</label></div>');function oe(e){var t=ee(),n=C(t);n.defaultChecked=!0;var o=s(n,4);o.defaultChecked=!0,x(6),w(t),i(e,t)}const ae=(e,t)=>I(t,!0);var se=c('<h3>Edit Account</h3> <p class="text-mutedfg mb2">Make changes to your user profile here.</p> <label for="name">Name</label> <input class="input-outline" id="name" placeholder="Enter your name"/> <label for="email">Email</label> <input type="email" class="input-outline" id="email" placeholder="Enter your email"/> <div class="flex gap3 items-center ml-auto mt3"><button class="btn-soft">Cancel</button> <button class="btn-primary">Save</button></div>',1),le=c('<button class="btn-primary mx-auto">Open</button> <!>',1);function ie(e){let t=H(!1);const n=()=>I(t,!1);var o=le(),a=h(o);a.__click=[ae,t];var l=s(a,2);Yt(l,{get open(){return p(t)},close:n,class:"grid gap4",children:(r,d)=>{var m=se(),b=s(h(m),12),g=C(b);g.__click=n,x(2),w(b),i(r,m)},$$slots:{default:!0}}),i(e,o)}U(["click"]);var re=c('<!> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!>',1),ce=c("<!> <!>",1),de=c('<i class="i-line-md:star-filled"></i> With icons',1),ue=c('<i class="i-line-md:account"></i>Profile',1),pe=c('<i class="i-nimbus:cog"></i>Settings',1),be=c('<i class="i-line-md:logout"></i>Log out',1),me=c("<!> <!> <!>",1),ge=c("<!> <!>",1),ve=c("<!> <!>",1);function fe(e){var t=ve(),n=h(t);yt(n,{children:(a,l)=>{var r=ce(),d=h(r);Ct(d,{class:"btn-primary",children:(b,g)=>{x();var v=q("Click me");i(b,v)},$$slots:{default:!0}});var m=s(d,2);wt(m,{children:(b,g)=>{var v=re(),_=h(v);O(_,{children:($,L)=>{x();var D=q("Profile");i($,D)},$$slots:{default:!0}});var y=s(_,2);O(y,{children:($,L)=>{x();var D=q("Billing");i($,D)},$$slots:{default:!0}});var S=s(y,2);O(S,{children:($,L)=>{x();var D=q("Settings");i($,D)},$$slots:{default:!0}});var u=s(S,2);O(u,{children:($,L)=>{x();var D=q("Keyboard shortcuts");i($,D)},$$slots:{default:!0}});var f=s(u,4);O(f,{children:($,L)=>{x();var D=q("Team");i($,D)},$$slots:{default:!0}});var k=s(f,2);O(k,{children:($,L)=>{x();var D=q("Invite users");i($,D)},$$slots:{default:!0}});var F=s(k,2);O(F,{children:($,L)=>{x();var D=q("New Team");i($,D)},$$slots:{default:!0}});var A=s(F,4);O(A,{children:($,L)=>{x();var D=q("GitHub");i($,D)},$$slots:{default:!0}});var T=s(A,2);O(T,{children:($,L)=>{x();var D=q("Support");i($,D)},$$slots:{default:!0}});var R=s(T,2);O(R,{disabled:!0,children:($,L)=>{x();var D=q("API");i($,D)},$$slots:{default:!0}});var W=s(R,4);O(W,{children:($,L)=>{x();var D=q("Log out");i($,D)},$$slots:{default:!0}}),i(b,v)},$$slots:{default:!0}}),i(a,r)},$$slots:{default:!0}});var o=s(n,2);yt(o,{children:(a,l)=>{var r=ge(),d=h(r);Ct(d,{class:"btn-soft",children:(b,g)=>{var v=de();x(),i(b,v)},$$slots:{default:!0}});var m=s(d,2);wt(m,{children:(b,g)=>{var v=me(),_=h(v);O(_,{children:(u,f)=>{var k=ue();x(),i(u,k)},$$slots:{default:!0}});var y=s(_,2);O(y,{children:(u,f)=>{var k=pe();x(),i(u,k)},$$slots:{default:!0}});var S=s(y,2);O(S,{children:(u,f)=>{var k=be();x(),i(u,k)},$$slots:{default:!0}}),i(b,v)},$$slots:{default:!0}}),i(a,r)},$$slots:{default:!0}}),i(e,t)}const he=(e,t)=>{I(t,p(t)==="text"?"password":"text",!0)};var _e=c('<button type="button" class="btn-ghost-eqsm rounded-full mr--2" aria-label="Toggle password visibility"><i></i></button>'),xe=c('<form class="grid gap3"><label for="email" class="reqstar">Email</label> <!> <label for="passwd">Password</label> <!> <input type="submit" class="!btn-primary ml-auto mt3"/></form>');function ke(e,t){P(t,!0);let n=H("password");const o=d=>{d.preventDefault();const m=new FormData(d.target),b=m.get("email"),g=m.get("passwd");alert(`
Email: ${b}
Password: ${g}`)};var a=xe(),l=s(C(a),2);J(l,{required:!0,name:"email",id:"email",placeholder:"Enter email",type:"email",iconL:"i-line-md:email",class:"grinput-outline mb3"});var r=s(l,4);J(r,{name:"passwd",id:"passwd",placeholder:"Enter Password",get type(){return p(n)},iconL:"i-lucide:key-round",class:"grinput-outline",iconR:m=>{var b=_e();b.__click=[he,n];var g=C(b);w(b),E(()=>j(g,1,G(p(n)=="text"?"i-heroicons-solid:eye":"i-heroicons-solid:eye-off"))),i(m,b)},$$slots:{iconR:!0}}),x(2),w(a),Tt("submit",a,o),i(e,a),z()}U(["click"]);var ye=c('<input class="input" placeholder="Enter name"/> <input class="input-outline" placeholder="Enter name"/> <br/> <p>sizes</p> <input class="input-outline-sm" placeholder="Enter name"/> <input class="input-outline-md" disabled placeholder="Enter name"/> <input class="input-lg" placeholder="Enter name"/> <input class="input-outline-xl" placeholder="Enter name"/> <p>Icons</p> <div class="grid grid-cols-2 grid-gap5"><div class="grinput"><i class="i-ri:user-line"></i> <input placeholder="Enter name"/></div> <div class="grinput-outline"><i class="i-line-md:email-filled"></i> <input placeholder="Enter name"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter price" type="number"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter salary" disabled/></div> <div class="grinput-outline p0 col-span-2"><span class="bg-mutedbg p2 px3 rounded-l">$</span> <input placeholder="Enter name"/> <span class="bg-mutedbg p2 rounded-r">USD</span></div></div>',1);function we(e){var t=ye();x(18),i(e,t)}var Ce=c("<!> <!> <!> <!>",1);function $e(e){var t=Ce(),n=h(t);J(n,{placeholder:"size (sm)",class:"grinput-sm"});var o=s(n,2);J(o,{placeholder:"size (md)",class:"grinput-md"});var a=s(o,2);J(a,{placeholder:"size (lg)",class:"grinput-lg"});var l=s(a,2);J(l,{placeholder:"size (xl)",class:"grinput-outline-xl"}),i(e,t)}var De=c("<!> <!>",1);function Se(e){var t=De(),n=h(t);J(n,{placeholder:"Enter name"});var o=s(n,2);J(o,{placeholder:"Enter name",class:"grinput-outline"}),i(e,t)}var Te=c('<input type="radio" class="radio" name="group1"/> <input type="radio" class="radio-primary" name="group1"/> <input type="radio" class="radio-red" name="group1"/> <input type="radio" class="radio-amber4" name="group1"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group2"/> <input type="radio" class="radio-md" name="group2"/> <input type="radio" class="radio-lg" name="group2"/> <input type="radio" class="radio-xl" name="group2"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group3"/> <input type="radio" class="radio-indigo-md" name="group3"/> <input type="radio" class="radio-red-lg" name="group3"/> <input type="radio" class="radio-slate-xl" name="group3"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radiob-blue" name="group4"/> <input type="radio" class="radiob-amber" name="group4"/> <input type="radio" class="radiob-emerald" name="group4"/> <input type="radio" class="radiob" name="group4"/>',1);function Ie(e){var t=Te(),n=h(t);n.defaultChecked=!0;var o=s(n,14);o.defaultChecked=!0;var a=s(o,8);a.defaultChecked=!0;var l=s(a,14);l.defaultChecked=!0,i(e,t)}var Be=c('<input type="radio" id="option1" name="group" class="radio"/> <label for="option1">Arch</label> <input type="radio" id="option2" name="group" class="radio"/> <label for="option2">Void</label> <input type="radio" id="option3" name="group" class="radiob"/> <label for="option3">Ubuntu</label> <input type="radio" id="option4" name="group" class="radiob"/> <label for="option4">Fedora</label>',1);function Pe(e){var t=Be(),n=h(t);n.defaultChecked=!0,x(14),i(e,t)}var ze=c('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="radio" id="email" name="x" class="radio"/> <label for="email">Email notifications</label> <input type="radio" id="sms" name="x" class="radio-blue"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="radio" id="none" name="x" class="radio-slate"/> <label for="none">No notifications</label> <input type="radio" id="disagree" name="x" class="radio-red"/> <label for="disagree">Stop Bothering!</label></div>');function Le(e){var t=ze(),n=C(t);n.defaultChecked=!0,x(14),w(t),i(e,t)}var Ee=c('<div class="grid grid-cols-2 grid-gap3 w-2/3"><!> <!> <!> <!></div>');function Ae(e){const t=[{value:"1",name:"Option 1"},{value:"2",name:"Option 2"},{value:"3",name:"Option 3"},{value:"4",name:"Option 4"},{value:"5",name:"Option 5 keyboad hehe"}],n=[{value:"apple",name:"Apple ",iconL:"i-noto:red-apple"},{value:"lime",name:"Lime",iconL:"i-noto:lime"},{value:"watermelon",name:"Watermelon",iconL:"i-noto:watermelon"},{value:"strawberry",name:"Strawberry",iconL:"i-noto:strawberry"},{value:"mango",name:"Mango",iconL:"i-noto:mango"}],o=[{value:"arch",name:"Arch Linux ",iconL:"i-logos:archlinux"},{value:"ubuntu",name:"Ubuntu",iconL:"i-logos:ubuntu"},{value:"fedora",name:"Fedora",iconL:"i-logos:fedora"},{value:"manjaro",name:"Manjaro",iconL:"i-logos:manjaro"},{value:"artix",name:"Artix ",iconL:"i-devicon:artixlinux"}];var a=Ee(),l=C(a);lt(l,{get options(){return t},dropdownCss:"bg-mutedbg border-0",optionCss:"data-active:bg-input"});var r=s(l,2);lt(r,{get options(){return n},triggerProps:{class:"btn-outline"},placeholder:"Select fruit"});var d=s(r,2);lt(d,{get options(){return n},triggerProps:{class:"btn-outline",disabled:!0},placeholder:"Disabled Select"});var m=s(d,2);lt(m,{get options(){return o},placeholder:"Select distro",optinCss:"gap4"}),w(a),i(e,a)}var Oe=c('<input type="checkbox" class="switch"/> <input type="checkbox" class="switch-flat-md-primary"/> <input type="checkbox" class="switch-flat-md-red"/> <input type="checkbox" class="switch-flat-md-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-flat-sm"/> <input type="checkbox" class="switch-flat-md"/> <input type="checkbox" class="switch-flat-lg"/> <input type="checkbox" class="switch-flat-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-line-sm"/> <input type="checkbox" class="switch-line-md-indigo"/> <input type="checkbox" class="switch-line-lg-red"/> <input type="checkbox" class="switch-line-xl-slate"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-knob-md-blue"/> <input type="checkbox" class="switch-knob-md-amber"/> <input type="checkbox" class="switch-flat-md-emerald"/> <input type="checkbox" class="switch-knob" name="group4"/>',1);function je(e){var t=Oe(),n=h(t);n.defaultChecked=!0;var o=s(n,16);o.defaultChecked=!0;var a=s(o,10);a.defaultChecked=!0;var l=s(a,2);l.defaultChecked=!0;var r=s(l,2);r.defaultChecked=!0;var d=s(r,10);d.defaultChecked=!0,i(e,t)}var Fe=c('<input type="checkbox" class="switch-line"/> <input type="checkbox" class="switch-flat"/> <input type="checkbox" class="switch-knob"/>',1);function qe(e){var t=Fe(),n=s(h(t),2);n.defaultChecked=!0,x(2),i(e,t)}var Ne=c('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="checkbox" id="email" class="switch-line"/> <label for="email">Email notifications</label> <input type="checkbox" id="sms" class="switch-line"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="checkbox" id="none" class="switch"/> <label for="none">No notifications</label> <input type="checkbox" id="disagree" class="switch"/> <label for="disagree">Stop Bothering!</label></div>');function Ue(e){var t=Ne(),n=C(t);n.defaultChecked=!0,x(14),w(t),i(e,t)}var Me=(e,t)=>t("toast-flat-indigo"),Re=(e,t)=>t("toast-flat-sky"),We=(e,t)=>t("toast-flat-danger"),Ve=(e,t)=>t("toast-flat-success"),He=(e,t)=>t("toast-flat-warning"),Ge=(e,t)=>t("toast-outline-indigo"),Ke=(e,t)=>t("toast-outline-sky"),Je=(e,t)=>t("toast-outline-danger"),Qe=(e,t)=>t("toast-outline-success"),Xe=(e,t)=>t("toast-outline-warning"),Ye=c('<button class="btn-outline text-indigo">Indigo</button> <button class="btn-outline text-sky">Sky</button> <button class="btn-outline text-danger">Danger</button> <button class="btn-outline text-success">Success</button> <button class="btn-outline text-warning">Warning</button> <hr class="brd w-full my2"/> <button class="btn-outline text-indigo">Indigo</button> <button class="btn-outline text-sky">Sky</button> <button class="btn-outline text-danger">Danger</button> <button class="btn-outline text-success">Success</button> <button class="btn-outline text-warning">Warning</button>',1);function Ze(e,t){P(t,!1);const n=S=>{ut({title:"Toast Activated",txt:"Customize this text to suit your message",css:S})};dt();var o=Ye(),a=h(o);a.__click=[Me,n];var l=s(a,2);l.__click=[Re,n];var r=s(l,2);r.__click=[We,n];var d=s(r,2);d.__click=[Ve,n];var m=s(d,2);m.__click=[He,n];var b=s(m,4);b.__click=[Ge,n];var g=s(b,2);g.__click=[Ke,n];var v=s(g,2);v.__click=[Je,n];var _=s(v,2);_.__click=[Qe,n];var y=s(_,2);y.__click=[Xe,n],i(e,o),z()}U(["click"]);var to=(e,t)=>t("topleft"),no=(e,t)=>t("topmid"),eo=(e,t)=>t("topright"),oo=(e,t)=>t("botleft"),ao=(e,t)=>t("botmid"),so=(e,t)=>t("botright"),lo=c('<button class="btn">Top left</button> <button class="btn">Top center</button> <button class="btn">Top right</button> <button class="btn">Bottom left</button> <button class="btn">Bottom center</button> <button class="btn">Bottom right</button>',1);function io(e,t){P(t,!1);const n=g=>{ut({title:"Toast Activated",txt:"Customize this text to suit your message",pos:g})};dt();var o=lo(),a=h(o);a.__click=[to,n];var l=s(a,2);l.__click=[no,n];var r=s(l,2);r.__click=[eo,n];var d=s(r,2);d.__click=[oo,n];var m=s(d,2);m.__click=[ao,n];var b=s(m,2);b.__click=[so,n],i(e,o),z()}U(["click"]);const ro=()=>{ut({title:"Toast Activated",txt:"Customize this text to suit your message"})};var co=c('<button class="btn">Show toast</button>');function uo(e,t){P(t,!1),dt();var n=co();n.__click=[ro],i(e,n),z()}U(["click"]);var po=(e,t)=>t("toast-solid"),bo=(e,t)=>t("toast-flat"),mo=(e,t)=>t("toast-outline"),go=c('<button class="btn-primary">Solid</button> <button class="btn">Flat</button> <button class="btn-outline">Outline</button>',1);function vo(e,t){P(t,!1);const n=d=>{ut({title:"Toast Activated",txt:"Customize this text to suit your message",css:d})};dt();var o=go(),a=h(o);a.__click=[po,n];var l=s(a,2);l.__click=[bo,n];var r=s(l,2);r.__click=[mo,n],i(e,o),z()}U(["click"]);const fo=`<span class="badge bg-indigo">Badge</span>
<span class="badge-outline border-fg">Outline</span>
<span class="badge-surface">Surface</span>

<span class="badge dtxtbg-emerald-60">
  <i class="i-icon-park-outline:check-one"></i>
  Badge
</span>

<span class="badge bg-rose">
  <i class="i-line-md:star-filled"></i>
  Badge
</span>
<span class="badge ltxtbg-blue-80">Light blue</span>
<span class="badge dtxtbgr-pink_3">Badge</span>
<span class="badge ltxtbgr-orange">Badge</span>
<span class="badge ltxtbg-emerald_5-80">
  <i class="i-icon-park-outline:check-one"></i>
  Badge
</span>
`,ho=`<span class="badge-sm">Size sm</span>
<span class="badge-secondary-md">Size md</span>
<span class="badge-secondary-lg">Size lg</span>
<span class="badge-surface-xl">Size xl</span>
`,_o=`<span class="badge-solid">Badge</span>
<span class="badge-secondary">Secondary</span>
<span class="badge-outline">Outline</span>
<span class="badge-surface">Surface</span>

<span class="badge bg-emerald6">
  <i class="i-uil:check-circle"></i> Checked!
</span>

<span class="badge bg-amber6">
  <i class="i-line-md:star-filled"></i> 5.3k
</span>

<span class="badge-outline">
  99+
</span>
`,xo=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <>
      <Btn class="btn-success" txt="Success" />
      <Btn class="btn-warning" txt="Warning" />
      <Btn class="btn-danger" txt="danger" />
    </>
  );
};
`,ko=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<Btn class="btn-success" txt="Success" />
<Btn class="btn-warning" txt="Warning" />
<Btn class="btn-danger" txt="danger" />
`,yo=`<button class="btn-primary">Primary</button>
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
`,wo=`import { Btn } from "@haze-ui/react";

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
`,Co=`<script lang="ts">
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
`,$o=`import { Btn } from "@haze-ui/react";

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
`,Do=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<Btn class="btn-soft-xs" txt="Success" />
<Btn class="btn-soft-sm" txt="Success" />
<Btn class="btn-soft-md" txt="Success" />
<Btn class="btn-soft-lg" txt="Success" />
<Btn class="btn-soft-xl" txt="Success" />
`,So=`import { Btn } from "@haze-ui/react";

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
`,To=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<Btn txt="Primary" class="btn-primary" />
<Btn class="soft" txt="Soft" />
<Btn class="btn-outline" txt="Outline" />
<Btn class="btn-ghost" txt="Ghost" />
`,Io=`<input type="checkbox" class="checkbox" />
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
`,Bo=`<input type="checkbox" id="option" class="checkbox-fg" defaultChecked />
<label for="option">Option</label>
`,Po=`<div
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
`,zo=`import { useState } from "react";
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
`,Lo=`<script lang="ts">
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
`,Eo=`import {
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
`,Ao=`<script lang="ts">
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
`,Oo=`import { Input } from "@haze-ui/react";
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
`,jo=`<script lang="ts">
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
`,Fo=`<input class="input" placeholder="Enter name" />
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
`,qo=`import { Input } from "@haze-ui/react";

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
`,No=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<Input placeholder="size (sm)" class="grinput-sm" />
<Input placeholder="size (md)" class="grinput-md" />
<Input placeholder="size (lg)" class="grinput-lg" />
<Input placeholder="size (xl)" class="grinput-outline-xl" />
`,Uo=`import { Input } from "@haze-ui/react";

export default () => {
  return (
    <div>
      <Input placeholder="Enter name" />
      <Input placeholder="Enter name" class="grinput-outline" />
    </div>
  );
};
`,Mo=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<Input placeholder="Enter name" />
<Input placeholder="Enter name" class="grinput-outline" />
`,Ro=`<input type="radio" class="radio" name="group1" defaultChecked />
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
`,Wo=`<input type="radio" id="option1" name="group" class="radio" defaultChecked />
<label for="option1">Arch</label>

<input type="radio" id="option2" name="group" class="radio" />
<label for="option2">Void</label>

<input type="radio" id="option3" name="group" class="radiob" />
<label for="option3">Ubuntu</label>

<input type="radio" id="option4" name="group" class="radiob" />
<label for="option4">Fedora</label>
`,Vo=`<div
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
`,Ho=`import { Select } from "@haze-ui/react";

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
`,Go=`<script lang="ts">
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
`,Ko=`<input type="checkbox" class="switch" defaultChecked />
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
`,Jo=`<input type="checkbox" class="switch-line" />
<input type="checkbox" class="switch-flat" defaultChecked />
<input type="checkbox" class="switch-knob" />
`,Qo=`<div
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
`,Xo=`import { toast } from "@haze-ui/react";

const newToast = (css) => {
  toast({
    title: "Toast Activated",
    txt: "Customize this text to suit your message",
    css: css,
  });
};

export default () => {
  return (
    <div>
      <button
        class="btn-outline text-indigo"
        onClick={() => newToast("toast-flat-indigo")}
      >
        Indigo
      </button>

      <button
        class="btn-outline text-sky"
        onClick={() => newToast("toast-flat-sky")}
      >
        Sky
      </button>

      <button
        class="btn-outline text-danger"
        onClick={() => newToast("toast-flat-danger")}
      >
        Danger
      </button>

      <button
        class="btn-outline text-success"
        onClick={() => newToast("toast-flat-success")}
      >
        Success
      </button>

      <button
        class="btn-outline text-warning"
        onClick={() => newToast("toast-flat-warning")}
      >
        Warning
      </button>

      <hr class="brd w-full my2" />

      <button
        class="btn-outline text-indigo"
        onClick={() => newToast("toast-outline-indigo")}
      >
        Indigo
      </button>

      <button
        class="btn-outline text-sky"
        onClick={() => newToast("toast-outline-sky")}
      >
        Sky
      </button>

      <button
        class="btn-outline text-danger"
        onClick={() => newToast("toast-outline-danger")}
      >
        Danger
      </button>

      <button
        class="btn-outline text-success"
        onClick={() => newToast("toast-outline-success")}
      >
        Success
      </button>

      <button
        class="btn-outline text-warning"
        onClick={() => newToast("toast-outline-warning")}
      >
        Warning
      </button>
    </div>
  );
};
`,Yo=`<script>
  import { toast } from "@haze-ui/svelte";

  const newToast = (css) => {
    toast({
      title: "Toast Activated",
      txt: "Customize this text to suit your message",
      css: css,
    });
  };
<\/script>

<button
  class="btn-outline text-indigo"
  onclick={() => newToast("toast-flat-indigo")}
>
  Indigo
</button>

<button class="btn-outline text-sky" onclick={() => newToast("toast-flat-sky")}>
  Sky
</button>

<button
  class="btn-outline text-danger"
  onclick={() => newToast("toast-flat-danger")}
>
  Danger
</button>

<button
  class="btn-outline text-success"
  onclick={() => newToast("toast-flat-success")}
>
  Success
</button>

<button
  class="btn-outline text-warning"
  onclick={() => newToast("toast-flat-warning")}
>
  Warning
</button>

<hr class="brd w-full my2" />

<button
  class="btn-outline text-indigo"
  onclick={() => newToast("toast-outline-indigo")}
>
  Indigo
</button>

<button
  class="btn-outline text-sky"
  onclick={() => newToast("toast-outline-sky")}
>
  Sky
</button>

<button
  class="btn-outline text-danger"
  onclick={() => newToast("toast-outline-danger")}
>
  Danger
</button>

<button
  class="btn-outline text-success"
  onclick={() => newToast("toast-outline-success")}
>
  Success
</button>

<button
  class="btn-outline text-warning"
  onclick={() => newToast("toast-outline-warning")}
>
  Warning
</button>
`,Zo=`import { toast } from "@haze-ui/react";

const newToast = (position) => {
  toast({
    title: "Toast Activated",
    txt: "Customize this text to suit your message",
    pos: position,
  });
};

export default () => {
  return (
    <div class="flex flex-wrap gap-2">
      <button class="btn" onClick={() => newToast("topleft")}>
        Top left
      </button>

      <button class="btn" onClick={() => newToast("topmid")}>
        Top center
      </button>

      <button class="btn" onClick={() => newToast("topright")}>
        Top right
      </button>

      <button class="btn" onClick={() => newToast("botleft")}>
        Bottom left
      </button>

      <button class="btn" onClick={() => newToast("botmid")}>
        Bottom center
      </button>

      <button class="btn" onClick={() => newToast("botright")}>
        Bottom right
      </button>
    </div>
  );
};
`,ta=`<script lang="ts">
  import { toast } from "@haze-ui/svelte";

  const newToast = (position: any) => {
    toast({
      title: "Toast Activated",
      txt: "Customize this text to suit your message",
      pos: position,
    });
  };
<\/script>

<button class="btn" onclick={() => newToast("topleft")}>
  Top left
</button>

<button class="btn" onclick={() => newToast("topmid")}>
  Top center
</button>

<button class="btn" onclick={() => newToast("topright")}>
  Top right
</button>

<button class="btn" onclick={() => newToast("botleft")}>
  Bottom left
</button>

<button class="btn" onclick={() => newToast("botmid")}>
  Bottom center
</button>

<button class="btn" onclick={() => newToast("botright")}>
  Bottom right
</button>
`,na=`import { toast } from "@haze-ui/react";

const createToast = () => {
  toast({
    title: "Toast Activated",
    txt: "Customize this text to suit your message",
  });
};

export default () => {
  return (
    <button class="btn" onClick={createToast}>
      Show toast
    </button>
  );
};
`,ea=`<script >
  import { toast } from "@haze-ui/svelte";

  const createToast = () => {
    toast({
      title: "Toast Activated",
      txt: "Customize this text to suit your message",
    });
  };
<\/script>

<button class="btn" onclick={createToast}>
  Show toast
</button>
`,oa=`import { toast } from "@haze-ui/react";

const newToast = (css) => {
  toast({
    title: "Toast Activated",
    txt: "Customize this text to suit your message",
    css: css,
  });
};

export default () => {
  return (
    <div class="flex flex-wrap gap-2">
      <button class="btn-primary" onClick={() => newToast("toast-solid")}>
        Solid
      </button>

      <button class="btn" onClick={() => newToast("toast-flat")}>
        Flat
      </button>

      <button class="btn-outline" onClick={() => newToast("toast-outline")}>
        Outline
      </button>
    </div>
  );
};
`,aa=`<script>
  import { toast } from "@haze-ui/svelte";

  const newToast = (css) => {
    toast({
      title: "Toast Activated",
      txt: "Customize this text to suit your message",
      css: css,
    });
  };
<\/script>

<button class="btn-primary" onclick={() => newToast("toast-solid")}>
  Solid
</button>

<button class="btn" onclick={() => newToast("toast-flat")}>
  Flat
</button>

<button class="btn-outline" onclick={() => newToast("toast-outline")}>
  Outline
</button>
`,Et=Object.assign({"/codemos/badge/colors.svelte":jn,"/codemos/badge/size.svelte":qn,"/codemos/badge/usage.svelte":Un,"/codemos/btn/class.svelte":Rn,"/codemos/btn/html.svelte":Vn,"/codemos/btn/icons.svelte":Gn,"/codemos/btn/size.svelte":Jn,"/codemos/btn/variant.svelte":Xn,"/codemos/checkbox/colors.svelte":Zn,"/codemos/checkbox/default.svelte":ne,"/codemos/checkbox/form.svelte":oe,"/codemos/dialog/usage.svelte":ie,"/codemos/dropdown/usage.svelte":fe,"/codemos/input/form.svelte":ke,"/codemos/input/html.svelte":we,"/codemos/input/size.svelte":$e,"/codemos/input/usage.svelte":Se,"/codemos/radio/colors.svelte":Ie,"/codemos/radio/default.svelte":Pe,"/codemos/radio/form.svelte":Le,"/codemos/select/usage.svelte":Ae,"/codemos/switch/colors.svelte":je,"/codemos/switch/default.svelte":qe,"/codemos/switch/form.svelte":Ue,"/codemos/toast/colors.svelte":Ze,"/codemos/toast/pos.svelte":io,"/codemos/toast/usage.svelte":uo,"/codemos/toast/variant.svelte":vo}),bt=Object.assign({"/codemos/badge/colors.svelte":fo,"/codemos/badge/size.svelte":ho,"/codemos/badge/usage.svelte":_o,"/codemos/btn/class.jsx":xo,"/codemos/btn/class.svelte":ko,"/codemos/btn/html.svelte":yo,"/codemos/btn/icons.jsx":wo,"/codemos/btn/icons.svelte":Co,"/codemos/btn/size.jsx":$o,"/codemos/btn/size.svelte":Do,"/codemos/btn/variant.jsx":So,"/codemos/btn/variant.svelte":To,"/codemos/checkbox/colors.svelte":Io,"/codemos/checkbox/default.svelte":Bo,"/codemos/checkbox/form.svelte":Po,"/codemos/dialog/usage.jsx":zo,"/codemos/dialog/usage.svelte":Lo,"/codemos/dropdown/usage.jsx":Eo,"/codemos/dropdown/usage.svelte":Ao,"/codemos/input/form.jsx":Oo,"/codemos/input/form.svelte":jo,"/codemos/input/html.svelte":Fo,"/codemos/input/size.jsx":qo,"/codemos/input/size.svelte":No,"/codemos/input/usage.jsx":Uo,"/codemos/input/usage.svelte":Mo,"/codemos/radio/colors.svelte":Ro,"/codemos/radio/default.svelte":Wo,"/codemos/radio/form.svelte":Vo,"/codemos/select/usage.jsx":Ho,"/codemos/select/usage.svelte":Go,"/codemos/switch/colors.svelte":Ko,"/codemos/switch/default.svelte":Jo,"/codemos/switch/form.svelte":Qo,"/codemos/toast/colors.jsx":Xo,"/codemos/toast/colors.svelte":Yo,"/codemos/toast/pos.jsx":Zo,"/codemos/toast/pos.svelte":ta,"/codemos/toast/usage.jsx":na,"/codemos/toast/usage.svelte":ea,"/codemos/toast/variant.jsx":oa,"/codemos/toast/variant.svelte":aa}),va=(e,t)=>{const n=`/codemos/${e}/${t}`;return{preview:Et[`${n}.svelte`],code:{svelte:bt[`${n}.svelte`],react:bt[`${n}.jsx`]}}},fa=(e,t)=>{const n=`/codemos/${e}/${t}`;return{preview:Et[`${n}.svelte`],code:{html:bt[`${n}.svelte`]}}};export{ga as T,fa as a,va as g};
