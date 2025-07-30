import"./DsnmJJEf.js";import{e as Ee,u as ze,r as Te,w as Oe,aV as Ae,p as j,aK as W,b as _,a as s,c as q,f as c,h as C,s as i,i as D,j as T,g as u,ah as V,aL as ye,aj as I,ai as re,ae as we,ac as Y,m as ke,aJ as oe,n as g,t as A}from"./BFY6EQ5f.js";import{a as R,f as $e,d as J,s as De}from"./HPqJmYYT.js";import{p as se,i as F,r as le,s as je}from"./D-ke6G8t.js";import{d as qe,s as N,r as Fe,a as de,c as G,b as H}from"./wK8MQqj5.js";import{o as Ne}from"./DB3aSVVa.js";import"./69_IOA4Y.js";import{B as P}from"./DVIQWI0C.js";import{b as Re}from"./B60C9sMj.js";import{e as Me}from"./ZYcb0fS2.js";function ue(t,e,n){Ee(()=>{var a=ze(()=>e(t,n?.())||{});if(n&&a?.update){var o=!1,l={};Te(()=>{var r=n();Oe(r),o&&Ae(l,r)&&(l=r,a.update(r))}),o=!0}if(a?.destroy)return()=>a.destroy()})}const be=t=>t?typeof t=="string"?document.querySelector(t):t:null;function Ue(t,e="body"){return be(e)?.appendChild(t),{update:n=>{n!==e&&(t.parentNode?.removeChild(t),be(n)?.appendChild(t))},destroy:()=>{t.parentNode?.removeChild(t)}}}const Ve=t=>{t.currentTarget==t.target&&close()};var We=c('<button class="i-pajamas:close absolute right-4 top-4 focus:bg-red" aria-label="close" tabindex="-1"></button>'),Ge=c('<dialog class="backdrop:bg-black/60"><div tabindex="-1"><!> <!></div></dialog>');function He(t,e){j(e,!0);let n=se(e,"closeIcon",3,!0);var a=W(),o=_(a);{var l=r=>{var d=Ge();d.__click=[Ve];var v=C(d),m=C(v);{var h=x=>{var $=We();$.__click=function(...L){e.close?.apply(this,L)},s(x,$)};F(m,x=>{n()&&x(h)})}var b=i(m,2);R(b,()=>e.children),D(v),D(d),ue(d,x=>Ue?.(x)),qe(d,()=>x=>x.showModal()),T(()=>N(v,1,`dialog ${e.class}`)),$e("close",d,function(...x){e.close?.apply(this,x)}),s(r,d)};F(o,r=>{e.open&&r(l)})}s(t,a),q()}J(["click"]);var Ke=c("<div></div>"),Je=c("<div></div>"),Qe=c("<div><!> <input/> <!></div>");function K(t,e){j(e,!0);let n=se(e,"class",3,""),a=le(e,["$$slots","$$events","$$legacy","iconL","iconR","class"]);var o=Qe(),l=C(o);{var r=h=>{var b=W(),x=_(b);{var $=p=>{var f=Ke();T(()=>N(f,1,G(e.iconL))),s(p,f)},L=p=>{var f=W(),y=_(f);R(y,()=>e.iconL),s(p,f)};F(x,p=>{typeof e.iconL=="string"?p($):p(L,!1)})}s(h,b)};F(l,h=>{e.iconL&&h(r)})}var d=i(l,2);Fe(d),de(d,()=>({...a}));var v=i(d,2);{var m=h=>{var b=W(),x=_(b);{var $=p=>{var f=Je();T(()=>N(f,1,G(e.iconR))),s(p,f)},L=p=>{var f=W(),y=_(f);R(y,()=>e.iconR),s(p,f)};F(x,p=>{typeof e.iconR=="string"?p($):p(L,!1)})}s(h,b)};F(v,h=>{e.iconR&&h(m)})}D(o),T(h=>N(o,1,h),[()=>G(n()?.includes("grinput")?n():`grinput ${n()}`)]),s(t,o),q()}const Ce=(t,e)=>{function n(a){t.contains(a.target)||e()}return document.addEventListener("click",n),{destroy(){document.removeEventListener("click",n)}}};var Xe=()=>null,Ye=c("<span></span>"),Ze=c('<li role="option"><!> </li>'),en=c('<ul role="listbox"></ul>'),nn=c('<div class="relative inline-flex first:children:w-full"><!> <!></div>');function ae(t,e){j(e,!0);let n=se(e,"placeholder",3,"Select Option"),a=V(!1),o=V(-1),l=V(-1);const r=()=>{I(a,!u(a)),u(a)&&I(l,u(o),!0)},d=p=>{p!==u(o)&&(I(o,p,!0),e.onChange?.(e.options[p].value)),I(a,!1)},v=p=>{switch(p.preventDefault(),p.key){case"Enter":d(u(l));break;case"Escape":I(a,!1);break;case"ArrowUp":I(l,u(l)>0?u(l)-1:0,!0);break;case"ArrowDown":I(l,u(l)<e.options.length-1?u(l)+1:0,!0);break}},h=`justify-start btn-ghost-eqmd transition-none ${e.optionCss?.includes("data-")?e.optionCss:`data-active:bg-mutedbg ${e.optionCss}`}`;var b=nn(),x=C(b);{let p=ye(()=>e.options[u(o)]?.name||n());P(x,je({"aria-haspopup":"listbox",get"aria-expanded"(){return u(a)},onclick:r,onkeydown:v,iconR:"ml-auto i-fa-solid:caret-down",get txt(){return u(p)}},()=>e.triggerProps))}var $=i(x,2);{var L=p=>{var f=en();H(f,"tabindex",-1),Me(f,23,()=>e.options,y=>y.value,(y,O,E)=>{var S=Ze();H(S,"tabindex",-1),S.__click=()=>d(u(E)),S.__keydown=[Xe];var M=C(S);{var U=B=>{var k=Ye();T(()=>N(k,1,G(u(O).iconL))),s(B,k)};F(M,B=>{u(O).iconL&&B(U)})}var w=i(M);D(S),T(()=>{H(S,"id",`option-${u(E)}`),H(S,"aria-selected",u(o)===u(E)),H(S,"data-active",u(l)===u(E)),N(S,1,G(h)),De(w,` ${u(O).name??""}`)}),s(y,S)}),D(f),T(()=>{N(f,1,`popover z-10 whitespace-nowrap ${e.dropdownCss}`),H(f,"aria-activedescendant",`option-${u(l)}`)}),s(p,f)};F($,p=>{u(a)&&p(L)})}D(b),ue(b,(p,f)=>Ce?.(p,f),()=>()=>I(a,!1)),s(t,b),q()}J(["click","keydown"]);function ge(t,e){j(e,!0);let n=V(re(e.defaultValue)),a=re([]);const o=d=>I(n,d,!0);we("tabs",{value:()=>e.value??u(n),setValue:e.setValue??o,tabLabels:()=>a,addTabLabel:d=>a.push(d)});var l=W(),r=_(l);R(r,()=>e.children),s(t,l),q()}const tn=(t,e,n)=>e(n.value);var an=c('<button role="tab"><!></button>');function X(t,e){j(e,!0);const{value:n,setValue:a,addTabLabel:o}=Y("tabs");Ne(()=>o(e.value));var l=an();l.__click=[tn,a,e];var r=C(l);R(r,()=>e.children),D(l),T(d=>H(l,"aria-selected",d),[()=>n()==e.value]),s(t,l),q()}J(["click"]);var on=c('<div role="tabpanel"><!></div>');function ve(t,e){j(e,!0);const{value:n}=Y("tabs");var a=W(),o=_(a);{var l=r=>{var d=on(),v=C(d);R(v,()=>e.children),D(d),T(m=>H(d,"aria-labelledby",m),[()=>`tab-${n()}`]),s(r,d)};F(o,r=>{n()==e.value&&r(l)})}s(t,a),q()}const sn=(t,e,n,a)=>{t.key=="ArrowLeft"&&u(e)!=0?n(a()[u(e)-1]):t.key=="ArrowRight"&&u(e)!=a().length-1&&n(a()[u(e)+1])};var ln=c('<div role="tablist" tabindex="-1"><!></div>');function he(t,e){j(e,!0);const{value:n,tabLabels:a,setValue:o}=Y("tabs");let l=ye(()=>a().indexOf(n()));ke(()=>{n()||o(a()[0])});var r=ln();r.__keydown=[sn,l,o,a];var d=C(r);R(d,()=>e.children),D(r),T(v=>N(r,1,v),[()=>G(e.class?.includes("tabs-")?e.class:`tabs ${e.class}`)]),s(t,r),q()}J(["keydown"]);var rn=c('<div class="relative inline-block"><!></div>');function fe(t,e){j(e,!0);let n=V(!1);const a=()=>I(n,!u(n)),o=()=>I(n,!1);we("dropdown",{open:()=>u(n),toggleDropdown:a,closeDropdown:o});var r=rn(),d=C(r);R(d,()=>e.children??oe),D(r),ue(r,(v,m)=>Ce?.(v,m),()=>o),s(t,r),q()}const cn=(t,e,n,a)=>{if(!e())return;const o=n();o.length!==0&&(t.key=="ArrowDown"&&u(a)<o.length?(t.preventDefault(),I(a,u(a)+1),o[u(a)]?.focus()):t.key=="ArrowUp"&&u(a)>0&&(I(a,u(a)-1),o[u(a)]?.focus()))};var dn=c('<div role="menu" tabindex="0"><!></div>');function _e(t,e){j(e,!0);let n=se(e,"class",3,""),a=V(-1),o=V(null);const{open:l}=Y("dropdown"),r=()=>u(o)?Array.from(u(o).querySelectorAll('[role="menuitem"]')):[];ke(()=>{l()&&u(o)?.focus()});var d=W(),v=_(d);{var m=h=>{var b=dn();b.__keydown=[cn,l,r,a];var x=C(b);R(x,()=>e.children??oe),D(b),Re(b,$=>I(o,$),()=>u(o)),T($=>N(b,1,$),[()=>G(n().includes("popover")?n():`popover ${n()}`)]),s(h,b)};F(v,h=>{l()&&h(m)})}s(t,d),q()}J(["keydown"]);var un=c("<button><!></button>");function xe(t,e){j(e,!0);const{toggleDropdown:n}=Y("dropdown");let a=le(e,["$$slots","$$events","$$legacy","children","class"]);var o=un();de(o,r=>({class:r,onclick:n,...a}),[()=>e.class?.includes("btn")?e.class:`btn ${e.class}`]);var l=C(o);R(l,()=>e.children??oe),D(o),s(t,o),q()}var pn=c("<button><!></button>");function z(t,e){j(e,!0);let n=le(e,["$$slots","$$events","$$legacy","children","class"]);const{closeDropdown:a}=Y("dropdown");var o=pn();de(o,()=>({onclick:a,class:`btn-ghost-eqmd focus:bg-input justify-start whitespace-nowrap ${e.class}`,role:"menuitem",...n}));var l=C(o);R(l,()=>e.children??oe),D(o),s(t,o),q()}var mn=c('<i class="i-mage:preview-fill"></i> Preview',1),bn=c('<i class="i-majesticons:code"></i> Code',1),gn=c("<!> <!>",1),vn=c("<div><!></div>"),hn=c('<i class="i-devicon:html5"></i> file.html',1),fn=c('<i class="i-devicon:svelte"></i> Svelte',1),_n=c('<i class="i-devicon:react"></i> React',1),xn=c('<i class="i-devicon:solidjs"></i> Solid',1),yn=c("<!> <!> <!>",1),wn=c('<!> <pre class="p5 rounded brd rounded-t-0 max-h-400px overflow-auto"><code> </code></pre>',1),kn=c("<!> <!> <!>",1);function xa(t,e){const n=le(e,["$$slots","$$events","$$legacy"]);let{demo:a,class:o=""}=n,l=re({svelte:"",react:"",solid:"",html:""}),r=V(null);const d=m=>{if(I(r,m,!0),m==="svelte"&&!l.svelte&&a.code.svelte)l.svelte=a.code.svelte;else if(m==="react"&&!l.react&&a.code.react){const h=a.code.react;l.react=h.replaceAll("class=","className="),!l.solid&&!a.code.solid&&(l.solid=h.replaceAll("react","solid"))}else m==="solid"&&!l.solid&&a.code.solid?l.solid=a.code.solid:m==="html"&&!l.html&&a.code.html&&(l.html=a.code.html)},v=a.preview;ge(t,{defaultValue:"preview",children:(m,h)=>{var b=kn(),x=_(b);he(x,{class:"tabs w-fit p1 !children:p2 !children:px3",children:(p,f)=>{var y=gn(),O=_(y);X(O,{value:"preview",children:(S,M)=>{var U=mn();g(),s(S,U)},$$slots:{default:!0}});var E=i(O,2);X(E,{value:"code",children:(S,M)=>{var U=bn();g(),s(S,U)},$$slots:{default:!0}}),s(p,y)},$$slots:{default:!0}});var $=i(x,2);ve($,{value:"preview",children:(p,f)=>{var y=vn(),O=C(y);v(O,{}),D(y),T(E=>N(y,1,E),[()=>G(o.includes("demobox")?o:`demobox-center ${o}`)]),s(p,y)},$$slots:{default:!0}});var L=i($,2);ve(L,{value:"code",children:(p,f)=>{ge(p,{get value(){return u(r)},setValue:d,children:(y,O)=>{var E=wn(),S=_(E);he(S,{class:"tabs-line-primary brd rounded-t [&>button]:capitalize",children:(B,k)=>{var pe=W(),Ie=_(pe);{var Pe=Q=>{X(Q,{value:"html",children:(ne,ie)=>{var te=hn();g(),s(ne,te)},$$slots:{default:!0}})},Le=Q=>{var ne=yn(),ie=_(ne);X(ie,{value:"svelte",children:(Z,me)=>{var ee=fn();g(),s(Z,ee)},$$slots:{default:!0}});var te=i(ie,2);X(te,{value:"react",children:(Z,me)=>{var ee=_n();g(),s(Z,ee)},$$slots:{default:!0}});var Be=i(te,2);X(Be,{value:"solid",children:(Z,me)=>{var ee=xn();g(),s(Z,ee)},$$slots:{default:!0}}),s(Q,ne)};F(Ie,Q=>{a.code.html?Q(Pe):Q(Le,!1)})}s(B,pe)},$$slots:{default:!0}});var M=i(S,2),U=C(M),w=C(U,!0);D(U),D(M),T(()=>De(w,u(r)?l[u(r)]:"")),s(y,E)},$$slots:{default:!0}})},$$slots:{default:!0}}),s(m,b)},$$slots:{default:!0}})}var $n=c('<span class="badge bg-indigo">Badge</span> <span class="badge-outline border-fg">Outline</span> <span class="badge-surface">Surface</span> <span class="badge dtxtbg-emerald-60"><i class="i-icon-park-outline:check-one"></i> Badge</span> <span class="badge bg-rose"><i class="i-line-md:star-filled"></i> Badge</span> <span class="badge ltxtbg-blue-80">Light blue</span> <span class="badge dtxtbgr-pink_3">Badge</span> <span class="badge ltxtbgr-orange">Badge</span> <span class="badge ltxtbg-emerald_5-80"><i class="i-icon-park-outline:check-one"></i> Badge</span>',1);function Dn(t){var e=$n();g(16),s(t,e)}var Cn=c('<span class="badge-sm">Size sm</span> <span class="badge-secondary-md">Size md</span> <span class="badge-secondary-lg">Size lg</span> <span class="badge-surface-xl">Size xl</span>',1);function Sn(t){var e=Cn();g(6),s(t,e)}var In=c('<span class="badge-solid">Badge</span> <span class="badge-secondary">Secondary</span> <span class="badge-outline">Outline</span> <span class="badge-surface">Surface</span> <span class="badge bg-emerald6"><i class="i-uil:check-circle"></i> Checked!</span> <span class="badge bg-amber6"><i class="i-line-md:star-filled"></i> 5.3k</span> <span class="badge-outline">99+</span>',1);function Pn(t){var e=In();g(12),s(t,e)}var Ln=c("<!> <!> <!>",1);function Bn(t){var e=Ln(),n=_(e);P(n,{class:"btn-success",txt:"Success"});var a=i(n,2);P(a,{class:"btn-warning",txt:"Warning"});var o=i(a,2);P(o,{class:"btn-danger",txt:"danger"}),s(t,e)}var En=c('<button class="btn-primary">Primary</button> <button class="btn-soft">Soft</button> <button class="btn-outline">Outline</button> <button class="btn-ghost">Ghost</button> <button class="btn-emerald5 text-white"><i class="i-line-md:email-filled"></i> Email</button> <button class="btn-outline btn"><i class="i-iconamoon:send"></i> Send us</button> <button class="btn-soft"><i class="i-eos-icons:loading"></i> Fetching...</button> <button class="btn-primary-eqmd" aria-label="plus button"><i class="i-tabler:plus"></i></button> <button class="btn-outline-eqmd rounded-full btn" aria-label="user button"><i class="i-iconoir:user"></i></button> <hr class="w-full brd mt3 mb1"/> <button class="btn-soft-xs">Button</button> <button class="btn-soft-sm">Button</button> <button class="btn-soft-md">Button</button> <button class="btn-soft-lg">Button</button> <button class="btn-soft-xl">Button</button>',1);function zn(t){var e=En();g(28),s(t,e)}var Tn=c("<!> <!> <!> <!> <!>",1);function On(t){var e=Tn(),n=_(e);P(n,{class:"btn-emerald5 text-white",iconL:"i-line-md:email-filled",txt:"Email"});var a=i(n,2);P(a,{iconL:"i-iconamoon:send",txt:"Send us",class:"btn-outline"});var o=i(a,2);P(o,{loading:!0,loaderTxt:"Fetching...",disabled:!0,txt:"Fetch data"});var l=i(o,2);P(l,{iconL:"i-tabler:plus",class:"btn-primary-eqmd","aria-label":"plus button"});var r=i(l,2);P(r,{iconL:"i-iconoir:user",class:"btn-outline-eqmd rounded-full","aria-label":"user button"}),s(t,e)}var An=c("<!> <!> <!> <!> <!>",1);function jn(t){var e=An(),n=_(e);P(n,{class:"btn-soft-xs",txt:"Success"});var a=i(n,2);P(a,{class:"btn-soft-sm",txt:"Success"});var o=i(a,2);P(o,{class:"btn-soft-md",txt:"Success"});var l=i(o,2);P(l,{class:"btn-soft-lg",txt:"Success"});var r=i(l,2);P(r,{class:"btn-soft-xl",txt:"Success"}),s(t,e)}var qn=c("<!> <!> <!> <!>",1);function Fn(t){var e=qn(),n=_(e);P(n,{txt:"Primary",class:"btn-primary"});var a=i(n,2);P(a,{class:"soft",txt:"Soft"});var o=i(a,2);P(o,{class:"btn-outline",txt:"Outline"});var l=i(o,2);P(l,{class:"btn-ghost",txt:"Ghost"}),s(t,e)}var Nn=c('<input type="checkbox" class="checkbox"/> <input type="checkbox" class="checkbox-primary"/> <input type="checkbox" class="checkbox-red"/> <input type="checkbox" class="checkbox-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-md"/> <input type="checkbox" class="checkbox-lg"/> <input type="checkbox" class="checkbox-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-indigo-md"/> <input type="checkbox" class="checkbox-red-lg"/> <input type="checkbox" class="checkbox-slate-xl"/> <input type="checkbox" class="checkbox-xl !after:checked:i-ph:check-fat-fill !after:checked:size-6"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-blue text-white"/> <input type="checkbox" class="checkbox-amber text-amber8"/> <input type="checkbox" class="checkbox-emerald"/> <input type="checkbox" class="checkbox checked:bg-bg text-fg"/>',1);function Rn(t){var e=Nn(),n=i(_(e),2);n.defaultChecked=!0;var a=i(n,2);a.defaultChecked=!0;var o=i(a,2);o.defaultChecked=!0;var l=i(o,4);l.defaultChecked=!0;var r=i(l,2);r.defaultChecked=!0;var d=i(r,2);d.defaultChecked=!0;var v=i(d,2);v.defaultChecked=!0;var m=i(v,4);m.defaultChecked=!0;var h=i(m,2);h.defaultChecked=!0;var b=i(h,2);b.defaultChecked=!0;var x=i(b,2);x.defaultChecked=!0;var $=i(x,2);$.defaultChecked=!0;var L=i($,4);L.defaultChecked=!0;var p=i(L,2);p.defaultChecked=!0;var f=i(p,2);f.defaultChecked=!0;var y=i(f,2);y.defaultChecked=!0,s(t,e)}var Mn=c('<input type="checkbox" id="option" class="checkbox-fg"/> <label for="option">Option</label>',1);function Un(t){var e=Mn(),n=_(e);n.defaultChecked=!0,g(2),s(t,e)}var Vn=c('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"><input type="checkbox" id="tnc" class="checkbox"/> <label for="tnc">I agree to the Terms and Conditions</label> <input type="checkbox" id="tnc2" class="checkbox-blue"/> <div><label for="tnc2">I understand and read the privacy policy</label> <br/> <span class="text-mutedfg text-sm">By Agreeing you accept our <a class="link" href="/">Privacy Policy</a></span></div> <input type="checkbox" id="tnc3" class="checkbox-slate" disabled/> <label for="tnc3" class="muted-70">I have freedom of speech</label></div>');function Wn(t){var e=Vn(),n=C(e);n.defaultChecked=!0;var a=i(n,4);a.defaultChecked=!0,g(6),D(e),s(t,e)}const Gn=(t,e)=>I(e,!0);var Hn=c('<h3>Edit Account</h3> <p class="text-mutedfg mb2">Make changes to your user profile here.</p> <label for="name">Name</label> <input class="input-outline" id="name" placeholder="Enter your name"/> <label for="email">Email</label> <input type="email" class="input-outline" id="email" placeholder="Enter your email"/> <div class="flex gap3 items-center ml-auto mt3"><button class="btn-soft">Cancel</button> <button class="btn-primary">Save</button></div>',1),Kn=c('<button class="btn-primary mx-auto">Open</button> <!>',1);function Jn(t){let e=V(!1);const n=()=>I(e,!1);var a=Kn(),o=_(a);o.__click=[Gn,e];var l=i(o,2);He(l,{get open(){return u(e)},close:n,class:"grid gap4",children:(r,d)=>{var v=Hn(),m=i(_(v),12),h=C(m);h.__click=n,g(2),D(m),s(r,v)},$$slots:{default:!0}}),s(t,a)}J(["click"]);var Qn=c('<!> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!>',1),Xn=c("<!> <!>",1),Yn=c('<i class="i-line-md:star-filled"></i> With icons',1),Zn=c('<i class="i-line-md:account"></i>Profile',1),et=c('<i class="i-nimbus:cog"></i>Settings',1),nt=c('<i class="i-line-md:logout"></i>Log out',1),tt=c("<!> <!> <!>",1),at=c("<!> <!>",1),ot=c("<!> <!>",1);function st(t){var e=ot(),n=_(e);fe(n,{children:(o,l)=>{var r=Xn(),d=_(r);xe(d,{class:"btn-primary",children:(m,h)=>{g();var b=A("Click me");s(m,b)},$$slots:{default:!0}});var v=i(d,2);_e(v,{children:(m,h)=>{var b=Qn(),x=_(b);z(x,{children:(w,B)=>{g();var k=A("Profile");s(w,k)},$$slots:{default:!0}});var $=i(x,2);z($,{children:(w,B)=>{g();var k=A("Billing");s(w,k)},$$slots:{default:!0}});var L=i($,2);z(L,{children:(w,B)=>{g();var k=A("Settings");s(w,k)},$$slots:{default:!0}});var p=i(L,2);z(p,{children:(w,B)=>{g();var k=A("Keyboard shortcuts");s(w,k)},$$slots:{default:!0}});var f=i(p,4);z(f,{children:(w,B)=>{g();var k=A("Team");s(w,k)},$$slots:{default:!0}});var y=i(f,2);z(y,{children:(w,B)=>{g();var k=A("Invite users");s(w,k)},$$slots:{default:!0}});var O=i(y,2);z(O,{children:(w,B)=>{g();var k=A("New Team");s(w,k)},$$slots:{default:!0}});var E=i(O,4);z(E,{children:(w,B)=>{g();var k=A("GitHub");s(w,k)},$$slots:{default:!0}});var S=i(E,2);z(S,{children:(w,B)=>{g();var k=A("Support");s(w,k)},$$slots:{default:!0}});var M=i(S,2);z(M,{disabled:!0,children:(w,B)=>{g();var k=A("API");s(w,k)},$$slots:{default:!0}});var U=i(M,4);z(U,{children:(w,B)=>{g();var k=A("Log out");s(w,k)},$$slots:{default:!0}}),s(m,b)},$$slots:{default:!0}}),s(o,r)},$$slots:{default:!0}});var a=i(n,2);fe(a,{children:(o,l)=>{var r=at(),d=_(r);xe(d,{class:"btn-soft",children:(m,h)=>{var b=Yn();g(),s(m,b)},$$slots:{default:!0}});var v=i(d,2);_e(v,{children:(m,h)=>{var b=tt(),x=_(b);z(x,{children:(p,f)=>{var y=Zn();g(),s(p,y)},$$slots:{default:!0}});var $=i(x,2);z($,{children:(p,f)=>{var y=et();g(),s(p,y)},$$slots:{default:!0}});var L=i($,2);z(L,{children:(p,f)=>{var y=nt();g(),s(p,y)},$$slots:{default:!0}}),s(m,b)},$$slots:{default:!0}}),s(o,r)},$$slots:{default:!0}}),s(t,e)}const lt=(t,e)=>{I(e,u(e)==="text"?"password":"text",!0)};var it=c('<button type="button" class="btn-ghost-eqsm rounded-full mr--2" aria-label="Toggle password visibility"><i></i></button>'),rt=c('<form class="grid gap3"><label for="email" class="reqstar">Email</label> <!> <label for="passwd">Password</label> <!> <input type="submit" class="!btn-primary ml-auto mt3"/></form>');function ct(t,e){j(e,!0);let n=V("password");const a=d=>{d.preventDefault();const v=new FormData(d.target),m=v.get("email"),h=v.get("passwd");alert(`
Email: ${m}
Password: ${h}`)};var o=rt(),l=i(C(o),2);K(l,{required:!0,name:"email",id:"email",placeholder:"Enter email",type:"email",iconL:"i-line-md:email",class:"grinput-outline mb3"});var r=i(l,4);K(r,{name:"passwd",id:"passwd",placeholder:"Enter Password",get type(){return u(n)},iconL:"i-lucide:key-round",class:"grinput-outline",iconR:v=>{var m=it();m.__click=[lt,n];var h=C(m);D(m),T(()=>N(h,1,G(u(n)=="text"?"i-heroicons-solid:eye":"i-heroicons-solid:eye-off"))),s(v,m)},$$slots:{iconR:!0}}),g(2),D(o),$e("submit",o,a),s(t,o),q()}J(["click"]);var dt=c('<input class="input" placeholder="Enter name"/> <input class="input-outline" placeholder="Enter name"/> <br/> <p>sizes</p> <input class="input-outline-sm" placeholder="Enter name"/> <input class="input-outline-md" disabled placeholder="Enter name"/> <input class="input-lg" placeholder="Enter name"/> <input class="input-outline-xl" placeholder="Enter name"/> <p>Icons</p> <div class="grid grid-cols-2 grid-gap5"><div class="grinput"><i class="i-ri:user-line"></i> <input placeholder="Enter name"/></div> <div class="grinput-outline"><i class="i-line-md:email-filled"></i> <input placeholder="Enter name"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter price" type="number"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter salary" disabled/></div> <div class="grinput-outline p0 col-span-2"><span class="bg-mutedbg p2 px3 rounded-l">$</span> <input placeholder="Enter name"/> <span class="bg-mutedbg p2 rounded-r">USD</span></div></div>',1);function ut(t){var e=dt();g(18),s(t,e)}var pt=c("<!> <!> <!> <!>",1);function mt(t){var e=pt(),n=_(e);K(n,{placeholder:"size (sm)",class:"grinput-sm"});var a=i(n,2);K(a,{placeholder:"size (md)",class:"grinput-md"});var o=i(a,2);K(o,{placeholder:"size (lg)",class:"grinput-lg"});var l=i(o,2);K(l,{placeholder:"size (xl)",class:"grinput-outline-xl"}),s(t,e)}var bt=c("<!> <!>",1);function gt(t){var e=bt(),n=_(e);K(n,{placeholder:"Enter name"});var a=i(n,2);K(a,{placeholder:"Enter name",class:"grinput-outline"}),s(t,e)}var vt=c('<input type="radio" class="radio" name="group1"/> <input type="radio" class="radio-primary" name="group1"/> <input type="radio" class="radio-red" name="group1"/> <input type="radio" class="radio-amber4" name="group1"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group2"/> <input type="radio" class="radio-md" name="group2"/> <input type="radio" class="radio-lg" name="group2"/> <input type="radio" class="radio-xl" name="group2"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group3"/> <input type="radio" class="radio-indigo-md" name="group3"/> <input type="radio" class="radio-red-lg" name="group3"/> <input type="radio" class="radio-slate-xl" name="group3"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radiob-blue" name="group4"/> <input type="radio" class="radiob-amber" name="group4"/> <input type="radio" class="radiob-emerald" name="group4"/> <input type="radio" class="radiob" name="group4"/>',1);function ht(t){var e=vt(),n=_(e);n.defaultChecked=!0;var a=i(n,14);a.defaultChecked=!0;var o=i(a,8);o.defaultChecked=!0;var l=i(o,14);l.defaultChecked=!0,s(t,e)}var ft=c('<input type="radio" id="option1" name="group" class="radio"/> <label for="option1">Arch</label> <input type="radio" id="option2" name="group" class="radio"/> <label for="option2">Void</label> <input type="radio" id="option3" name="group" class="radiob"/> <label for="option3">Ubuntu</label> <input type="radio" id="option4" name="group" class="radiob"/> <label for="option4">Fedora</label>',1);function _t(t){var e=ft(),n=_(e);n.defaultChecked=!0,g(14),s(t,e)}var xt=c('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="radio" id="email" name="x" class="radio"/> <label for="email">Email notifications</label> <input type="radio" id="sms" name="x" class="radio-blue"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="radio" id="none" name="x" class="radio-slate"/> <label for="none">No notifications</label> <input type="radio" id="disagree" name="x" class="radio-red"/> <label for="disagree">Stop Bothering!</label></div>');function yt(t){var e=xt(),n=C(e);n.defaultChecked=!0,g(14),D(e),s(t,e)}var wt=c('<div class="grid grid-cols-2 grid-gap3 w-2/3"><!> <!> <!> <!></div>');function kt(t){const e=[{value:"1",name:"Option 1"},{value:"2",name:"Option 2"},{value:"3",name:"Option 3"},{value:"4",name:"Option 4"},{value:"5",name:"Option 5 keyboad hehe"}],n=[{value:"apple",name:"Apple ",iconL:"i-noto:red-apple"},{value:"lime",name:"Lime",iconL:"i-noto:lime"},{value:"watermelon",name:"Watermelon",iconL:"i-noto:watermelon"},{value:"strawberry",name:"Strawberry",iconL:"i-noto:strawberry"},{value:"mango",name:"Mango",iconL:"i-noto:mango"}],a=[{value:"arch",name:"Arch Linux ",iconL:"i-logos:archlinux"},{value:"ubuntu",name:"Ubuntu",iconL:"i-logos:ubuntu"},{value:"fedora",name:"Fedora",iconL:"i-logos:fedora"},{value:"manjaro",name:"Manjaro",iconL:"i-logos:manjaro"},{value:"artix",name:"Artix ",iconL:"i-devicon:artixlinux"}];var o=wt(),l=C(o);ae(l,{get options(){return e},dropdownCss:"bg-mutedbg border-0",optionCss:"data-active:bg-input"});var r=i(l,2);ae(r,{get options(){return n},triggerProps:{class:"btn-outline"},placeholder:"Select fruit"});var d=i(r,2);ae(d,{get options(){return n},triggerProps:{class:"btn-outline",disabled:!0},placeholder:"Disabled Select"});var v=i(d,2);ae(v,{get options(){return a},placeholder:"Select distro",optinCss:"gap4"}),D(o),s(t,o)}var $t=c('<input type="checkbox" class="switch"/> <input type="checkbox" class="switch-flat-md-primary"/> <input type="checkbox" class="switch-flat-md-red"/> <input type="checkbox" class="switch-flat-md-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-flat-sm"/> <input type="checkbox" class="switch-flat-md"/> <input type="checkbox" class="switch-flat-lg"/> <input type="checkbox" class="switch-flat-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-line-sm"/> <input type="checkbox" class="switch-line-md-indigo"/> <input type="checkbox" class="switch-line-lg-red"/> <input type="checkbox" class="switch-line-xl-slate"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-knob-md-blue"/> <input type="checkbox" class="switch-knob-md-amber"/> <input type="checkbox" class="switch-flat-md-emerald"/> <input type="checkbox" class="switch-knob" name="group4"/>',1);function Dt(t){var e=$t(),n=_(e);n.defaultChecked=!0;var a=i(n,16);a.defaultChecked=!0;var o=i(a,10);o.defaultChecked=!0;var l=i(o,2);l.defaultChecked=!0;var r=i(l,2);r.defaultChecked=!0;var d=i(r,10);d.defaultChecked=!0,s(t,e)}var Ct=c('<input type="checkbox" class="switch-line"/> <input type="checkbox" class="switch-flat"/> <input type="checkbox" class="switch-knob"/>',1);function St(t){var e=Ct(),n=i(_(e),2);n.defaultChecked=!0,g(2),s(t,e)}var It=c('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="checkbox" id="email" class="switch-line"/> <label for="email">Email notifications</label> <input type="checkbox" id="sms" class="switch-line"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="checkbox" id="none" class="switch"/> <label for="none">No notifications</label> <input type="checkbox" id="disagree" class="switch"/> <label for="disagree">Stop Bothering!</label></div>');function Pt(t){var e=It(),n=C(e);n.defaultChecked=!0,g(14),D(e),s(t,e)}const Lt=`<span class="badge bg-indigo">Badge</span>
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
`,Bt=`<span class="badge-sm">Size sm</span>
<span class="badge-secondary-md">Size md</span>
<span class="badge-secondary-lg">Size lg</span>
<span class="badge-surface-xl">Size xl</span>
`,Et=`<span class="badge-solid">Badge</span>
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
`,zt=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <>
      <Btn class="btn-success" txt="Success" />
      <Btn class="btn-warning" txt="Warning" />
      <Btn class="btn-danger" txt="danger" />
    </>
  );
};
`,Tt=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<Btn class="btn-success" txt="Success" />
<Btn class="btn-warning" txt="Warning" />
<Btn class="btn-danger" txt="danger" />
`,Ot=`<button class="btn-primary">Primary</button>
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
`,At=`import { Btn } from "@haze-ui/react";

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
`,jt=`<script lang="ts">
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
`,qt=`import { Btn } from "@haze-ui/react";

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
`,Ft=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<Btn class="btn-soft-xs" txt="Success" />
<Btn class="btn-soft-sm" txt="Success" />
<Btn class="btn-soft-md" txt="Success" />
<Btn class="btn-soft-lg" txt="Success" />
<Btn class="btn-soft-xl" txt="Success" />
`,Nt=`import { Btn } from "@haze-ui/react";

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
`,Rt=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<Btn txt="Primary" class="btn-primary" />
<Btn class="soft" txt="Soft" />
<Btn class="btn-outline" txt="Outline" />
<Btn class="btn-ghost" txt="Ghost" />
`,Mt=`<input type="checkbox" class="checkbox" />
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
`,Ut=`<input type="checkbox" id="option" class="checkbox-fg" defaultChecked />
<label for="option">Option</label>
`,Vt=`<div
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
`,Wt=`import { useState } from "react";
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
`,Gt=`<script lang="ts">
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
`,Ht=`import {
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
`,Kt=`<script lang="ts">
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
`,Jt=`import { Input } from "@haze-ui/react";
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
`,Qt=`<script lang="ts">
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
`,Xt=`<input class="input" placeholder="Enter name" />
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
`,Yt=`import { Input } from "@haze-ui/react";

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
`,Zt=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<Input placeholder="size (sm)" class="grinput-sm" />
<Input placeholder="size (md)" class="grinput-md" />
<Input placeholder="size (lg)" class="grinput-lg" />
<Input placeholder="size (xl)" class="grinput-outline-xl" />
`,ea=`import { Input } from "@haze-ui/react";

export default () => {
  return (
    <div>
      <Input placeholder="Enter name" />
      <Input placeholder="Enter name" class="grinput-outline" />
    </div>
  );
};
`,na=`<script lang="ts">
  import { Input } from "@haze-ui/svelte";
<\/script>

<Input placeholder="Enter name" />
<Input placeholder="Enter name" class="grinput-outline" />
`,ta=`<input type="radio" class="radio" name="group1" defaultChecked />
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
`,aa=`<input type="radio" id="option1" name="group" class="radio" defaultChecked />
<label for="option1">Arch</label>

<input type="radio" id="option2" name="group" class="radio" />
<label for="option2">Void</label>

<input type="radio" id="option3" name="group" class="radiob" />
<label for="option3">Ubuntu</label>

<input type="radio" id="option4" name="group" class="radiob" />
<label for="option4">Fedora</label>
`,oa=`<div
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
`,sa=`import { Select } from "@haze-ui/react";

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
`,la=`<script lang="ts">
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
`,ia=`<input type="checkbox" class="switch" defaultChecked />
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
`,ra=`<input type="checkbox" class="switch-line" />
<input type="checkbox" class="switch-flat" defaultChecked />
<input type="checkbox" class="switch-knob" />
`,ca=`<div
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
`,Se=Object.assign({"/codemos/badge/colors.svelte":Dn,"/codemos/badge/size.svelte":Sn,"/codemos/badge/usage.svelte":Pn,"/codemos/btn/class.svelte":Bn,"/codemos/btn/html.svelte":zn,"/codemos/btn/icons.svelte":On,"/codemos/btn/size.svelte":jn,"/codemos/btn/variant.svelte":Fn,"/codemos/checkbox/colors.svelte":Rn,"/codemos/checkbox/default.svelte":Un,"/codemos/checkbox/form.svelte":Wn,"/codemos/dialog/usage.svelte":Jn,"/codemos/dropdown/usage.svelte":st,"/codemos/input/form.svelte":ct,"/codemos/input/html.svelte":ut,"/codemos/input/size.svelte":mt,"/codemos/input/usage.svelte":gt,"/codemos/radio/colors.svelte":ht,"/codemos/radio/default.svelte":_t,"/codemos/radio/form.svelte":yt,"/codemos/select/usage.svelte":kt,"/codemos/switch/colors.svelte":Dt,"/codemos/switch/default.svelte":St,"/codemos/switch/form.svelte":Pt}),ce=Object.assign({"/codemos/badge/colors.svelte":Lt,"/codemos/badge/size.svelte":Bt,"/codemos/badge/usage.svelte":Et,"/codemos/btn/class.jsx":zt,"/codemos/btn/class.svelte":Tt,"/codemos/btn/html.svelte":Ot,"/codemos/btn/icons.jsx":At,"/codemos/btn/icons.svelte":jt,"/codemos/btn/size.jsx":qt,"/codemos/btn/size.svelte":Ft,"/codemos/btn/variant.jsx":Nt,"/codemos/btn/variant.svelte":Rt,"/codemos/checkbox/colors.svelte":Mt,"/codemos/checkbox/default.svelte":Ut,"/codemos/checkbox/form.svelte":Vt,"/codemos/dialog/usage.jsx":Wt,"/codemos/dialog/usage.svelte":Gt,"/codemos/dropdown/usage.jsx":Ht,"/codemos/dropdown/usage.svelte":Kt,"/codemos/input/form.jsx":Jt,"/codemos/input/form.svelte":Qt,"/codemos/input/html.svelte":Xt,"/codemos/input/size.jsx":Yt,"/codemos/input/size.svelte":Zt,"/codemos/input/usage.jsx":ea,"/codemos/input/usage.svelte":na,"/codemos/radio/colors.svelte":ta,"/codemos/radio/default.svelte":aa,"/codemos/radio/form.svelte":oa,"/codemos/select/usage.jsx":sa,"/codemos/select/usage.svelte":la,"/codemos/switch/colors.svelte":ia,"/codemos/switch/default.svelte":ra,"/codemos/switch/form.svelte":ca}),ya=(t,e)=>{const n=`/codemos/${t}/${e}`;return{preview:Se[`${n}.svelte`],code:{svelte:ce[`${n}.svelte`],react:ce[`${n}.jsx`]}}},wa=(t,e)=>{const n=`/codemos/${t}/${e}`;return{preview:Se[`${n}.svelte`],code:{html:ce[`${n}.svelte`]}}};export{xa as T,wa as a,ya as g};
