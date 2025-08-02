import"./DsnmJJEf.js";import{a4 as Us,k as Ms,a5 as Rs,o as Vs,aV as Ws,p as u,aq as G,a as S,b as e,c as L,f as l,d as P,s as c,r as F,t as I,g as N,al as R,am as fs,ac as K,ab as ms,aK as Cs,aI as ss,j as Ds,aD as Ls,n as w,e as M}from"./BCwpZRLA.js";import{a as W,e as $s,d as O,s as vs,o as Ks,m as Hs}from"./CLnk85e-.js";import{p as g,i as A,r as es,s as Ts}from"./PsfHwgad.js";import{b as m,c as Gs}from"./Zm7-z96k.js";import{d as Js,s as E,r as Qs,a as hs,c as V,b as Q}from"./DS9aIEHG.js";import"./69_IOA4Y.js";import{B as T}from"./DerTaunq.js";import{e as Is}from"./CTWaMmW5.js";import{i as Ns}from"./DdJ5fWqL.js";function Ss(p,s,a){Us(()=>{var n=Ms(()=>s(p,a?.())||{});if(a&&n?.update){var t=!1,r={};Rs(()=>{var i=a();Vs(i),t&&Ws(r,i)&&(r=i,n.update(i))}),t=!0}if(n?.destroy)return()=>n.destroy()})}const ws=p=>p?typeof p=="string"?document.querySelector(p):p:null;function Xs(p,s="body"){return ws(s)?.appendChild(p),{update:a=>{a!==s&&(p.parentNode?.removeChild(p),ws(a)?.appendChild(p))},destroy:()=>{p.parentNode?.removeChild(p)}}}const Ys=p=>{p.currentTarget==p.target&&close()};var Zs=l('<button class="i-pajamas:close absolute right-4 top-4 focus:bg-red" aria-label="close" tabindex="-1"></button>'),sa=l('<dialog class="backdrop:bg-black/60"><div tabindex="-1"><!> <!></div></dialog>');function aa(p,s){u(s,!0);let a=g(s,"closeIcon",3,!0);var n=G(),t=S(n);{var r=i=>{var o=sa();o.__click=[Ys];var b=P(o),q=P(b);{var f=y=>{var k=Zs();k.__click=function(...C){s.close?.apply(this,C)},e(y,k)};A(q,y=>{a()&&y(f)})}var v=c(q,2);W(v,()=>s.children),F(b),F(o),Ss(o,y=>Xs?.(y)),Js(o,()=>y=>y.showModal()),I(()=>E(b,1,`dialog ${s.class}`)),$s("close",o,function(...y){s.close?.apply(this,y)}),e(i,o)};A(t,i=>{s.open&&i(r)})}e(p,n),L()}O(["click"]);var na=l("<div></div>"),pa=l("<div></div>"),ta=l("<div><!> <input/> <!></div>");function X(p,s){u(s,!0);let a=g(s,"class",3,""),n=es(s,["$$slots","$$events","$$legacy","iconL","iconR","class"]);var t=ta(),r=P(t);{var i=f=>{var v=G(),y=S(v);{var k=d=>{var h=na();I(()=>E(h,1,V(s.iconL))),e(d,h)},C=d=>{var h=G(),x=S(h);W(x,()=>s.iconL),e(d,h)};A(y,d=>{typeof s.iconL=="string"?d(k):d(C,!1)})}e(f,v)};A(r,f=>{s.iconL&&f(i)})}var o=c(r,2);Qs(o),hs(o,()=>({...n}));var b=c(o,2);{var q=f=>{var v=G(),y=S(v);{var k=d=>{var h=pa();I(()=>E(h,1,V(s.iconR))),e(d,h)},C=d=>{var h=G(),x=S(h);W(x,()=>s.iconR),e(d,h)};A(y,d=>{typeof s.iconR=="string"?d(k):d(C,!1)})}e(f,v)};A(b,f=>{s.iconR&&f(q)})}F(t),I(f=>E(t,1,f),[()=>V(a()?.includes("grinput")?a():`grinput ${a()}`)]),e(p,t),L()}const Bs=(p,s)=>{function a(n){p.contains(n.target)||s()}return document.addEventListener("click",a),{destroy(){document.removeEventListener("click",a)}}};var ea=()=>null,la=l("<span></span>"),ca=l('<li role="option"><!> </li>'),ra=l('<ul role="listbox"></ul>'),ia=l('<div class="relative inline-flex first:children:w-full"><!> <!></div>');function os(p,s){u(s,!0);let a=g(s,"placeholder",3,"Select Option"),n=R(!1),t=R(-1),r=R(-1);const i=()=>{K(n,!N(n)),N(n)&&K(r,N(t),!0)},o=d=>{d!==N(t)&&(K(t,d,!0),s.onChange?.(s.options[d].value)),K(n,!1)},b=d=>{switch(d.preventDefault(),d.key){case"Enter":o(N(r));break;case"Escape":K(n,!1);break;case"ArrowUp":K(r,N(r)>0?N(r)-1:0,!0);break;case"ArrowDown":K(r,N(r)<s.options.length-1?N(r)+1:0,!0);break}},f=`justify-start btn-ghost-eqmd transition-none ${s.optionCss?.includes("data-")?s.optionCss:`data-active:bg-mutedbg ${s.optionCss}`}`;var v=ia(),y=P(v);{let d=fs(()=>s.options[N(t)]?.name||a());T(y,Ts({"aria-haspopup":"listbox",get"aria-expanded"(){return N(n)},onclick:i,onkeydown:b,iconR:"ml-auto i-fa-solid:caret-down",get txt(){return N(d)}},()=>s.triggerProps))}var k=c(y,2);{var C=d=>{var h=ra();Q(h,"tabindex",-1),Is(h,23,()=>s.options,x=>x.value,(x,U,B)=>{var D=ca();Q(D,"tabindex",-1),D.__click=()=>o(N(B)),D.__keydown=[ea];var H=P(D);{var J=$=>{var _=la();I(()=>E(_,1,V(N(U).iconL))),e($,_)};A(H,$=>{N(U).iconL&&$(J)})}var j=c(H);F(D),I(()=>{Q(D,"id",`option-${N(B)}`),Q(D,"aria-selected",N(t)===N(B)),Q(D,"data-active",N(r)===N(B)),E(D,1,V(f)),vs(j,` ${N(U).name??""}`)}),e(x,D)}),F(h),I(()=>{E(h,1,`popover z-10 whitespace-nowrap ${s.dropdownCss}`),Q(h,"aria-activedescendant",`option-${N(r)}`)}),e(d,h)};A(k,d=>{N(n)&&d(C)})}F(v),Ss(v,(d,h)=>Bs?.(d,h),()=>()=>K(n,!1)),e(p,v),L()}O(["click","keydown"]);function xs(p,s){u(s,!0);let a=R(ms(s.defaultValue)),n=ms([]);const t=o=>K(a,o,!0);Cs("tabs",{value:()=>s.value??N(a),setValue:s.setValue??t,tabLabels:()=>n,addTabLabel:o=>n.push(o)});var r=G(),i=S(r);W(i,()=>s.children),e(p,r),L()}const oa=(p,s,a)=>s(a.value);var ua=l('<button role="tab"><!></button>');function Z(p,s){u(s,!0);const{value:a,setValue:n,addTabLabel:t}=ss("tabs");Ks(()=>t(s.value));var r=ua();r.__click=[oa,n,s];var i=P(r);W(i,()=>s.children),F(r),I(o=>Q(r,"aria-selected",o),[()=>a()==s.value]),e(p,r),L()}O(["click"]);var La=l('<div role="tabpanel"><!></div>');function ks(p,s){u(s,!0);const{value:a}=ss("tabs");var n=G(),t=S(n);{var r=i=>{var o=La(),b=P(o);W(b,()=>s.children),F(o),I(q=>Q(o,"aria-labelledby",q),[()=>`tab-${a()}`]),e(i,o)};A(t,i=>{a()==s.value&&i(r)})}e(p,n),L()}const Na=(p,s,a,n)=>{p.key=="ArrowLeft"&&N(s)!=0?a(n()[N(s)-1]):p.key=="ArrowRight"&&N(s)!=n().length-1&&a(n()[N(s)+1])};var da=l('<div role="tablist" tabindex="-1"><!></div>');function _s(p,s){u(s,!0);const{value:a,tabLabels:n,setValue:t}=ss("tabs");let r=fs(()=>n().indexOf(a()));Ds(()=>{a()||t(n()[0])});var i=da();i.__keydown=[Na,r,t,n];var o=P(i);W(o,()=>s.children),F(i),I(b=>E(i,1,b),[()=>V(s.class?.includes("tabs-")?s.class:`tabs ${s.class}`)]),e(p,i),L()}O(["keydown"]);var ga=l('<div class="relative inline-block"><!></div>');function Fs(p,s){u(s,!0);let a=R(!1);const n=()=>K(a,!N(a)),t=()=>K(a,!1);Cs("dropdown",{open:()=>N(a),toggleDropdown:n,closeDropdown:t});var i=ga(),o=P(i);W(o,()=>s.children??Ls),F(i),Ss(i,(b,q)=>Bs?.(b,q),()=>t),e(p,i),L()}const qa=(p,s,a,n)=>{if(!s())return;const t=a();t.length!==0&&(p.key=="ArrowDown"&&N(n)<t.length?(p.preventDefault(),K(n,N(n)+1),t[N(n)]?.focus()):p.key=="ArrowUp"&&N(n)>0&&(K(n,N(n)-1),t[N(n)]?.focus()))};var ba=l('<div role="menu" tabindex="0"><!></div>');function Ps(p,s){u(s,!0);let a=g(s,"class",3,""),n=R(-1),t=R(null);const{open:r}=ss("dropdown"),i=()=>N(t)?Array.from(N(t).querySelectorAll('[role="menuitem"]')):[];Ds(()=>{r()&&N(t)?.focus()});var o=G(),b=S(o);{var q=f=>{var v=ba();v.__keydown=[qa,r,i,n];var y=P(v);W(y,()=>s.children??Ls),F(v),m(v,k=>K(t,k),()=>N(t)),I(k=>E(v,1,k),[()=>V(a().includes("popover")?a():`popover ${a()}`)]),e(f,v)};A(b,f=>{r()&&f(q)})}e(p,o),L()}O(["keydown"]);var ma=l("<button><!></button>");function js(p,s){u(s,!0);const{toggleDropdown:a}=ss("dropdown");let n=es(s,["$$slots","$$events","$$legacy","children","class"]);var t=ma();hs(t,i=>({class:i,onclick:a,...n}),[()=>s.class?.includes("btn")?s.class:`btn ${s.class}`]);var r=P(t);W(r,()=>s.children??Ls),F(t),e(p,t),L()}var va=l("<button><!></button>");function z(p,s){u(s,!0);let a=es(s,["$$slots","$$events","$$legacy","children","class"]);const{closeDropdown:n}=ss("dropdown");var t=va();hs(t,()=>({onclick:n,class:`btn-ghost-eqmd focus:bg-input justify-start whitespace-nowrap ${s.class}`,role:"menuitem",...a}));var r=P(t);W(r,()=>s.children??Ls),F(t),e(p,t),L()}const fa=(p,s,a)=>zs(a.id,a.pos);var ha=l("<div></div>"),Sa=l('<div><!> <div class="grid gap1"><b> </b> <span> </span></div> <button aria-label="close" class="btn-ghost-eqsm absolute right-2 top-2"><span class="i-pajamas:close"></span></button></div>');function ya(p,s){u(s,!0);let a=g(s,"icon",15),n=g(s,"css",3,""),t=es(s,["$$slots","$$events","$$legacy","pos","icon","css"]);const r={success:"i-mingcute:check-circle-fill",warning:"i-jam:info-f",danger:"i-mi:circle-error"},i=n()?.match(/\b\S*toast\S*(danger|success|warning)\S*\b/);if(!a()&&i&&i[0]){const h=i[0].split("-");a(r[h.at(-1)])}Ks(()=>{setTimeout(()=>zs(s.id,s.pos),s.duration||3e3)});var o=Sa(),b=P(o);{var q=h=>{var x=ha();I(()=>E(x,1,a()+" my-auto text-3xl")),e(h,x)};A(b,h=>{a()&&h(q)})}var f=c(b,2),v=P(f),y=P(v,!0);F(v);var k=c(v,2),C=P(k,!0);F(k),F(f);var d=c(f,2);d.__click=[fa,t,s],F(o),I(h=>{E(o,1,h),vs(y,s.title),vs(C,s.txt)},[()=>V(n().includes("toast")?n():`toast ${n()}`)]),e(p,o),L()}O(["click"]);function wa(p,s){u(s,!0);var a=G(),n=S(a);Is(n,17,()=>ts[s.pos],t=>t.id,(t,r)=>{ya(t,Ts(()=>N(r)))}),e(p,a),L()}let ts=ms({topleft:[],topmid:[],topright:[],botleft:[],botmid:[],botright:[]});const xa=p=>{p.pos&&ts[p.pos].push({...p,id:crypto.randomUUID()})},zs=(p,s)=>{const a=ts[s].findIndex(n=>n.id===p);a!==-1&&ts[s].splice(a,1),ts[s].length==0&&document.getElementById("toasts-"+s)?.remove()},ka={topright:"top-3 right-3",topleft:"top-3 left-3",botleft:"bottom-3 left-3",botright:"bottom-3 right-3",topmid:"top-3 left-1/2 -translate-x-1/2",botmid:"bottom-3 left-1/2 -translate-x-1/2"},ds=p=>{p.pos=p.pos||"topmid";const s="toast-"+p.pos;let a=document.getElementById(s);a||(a=document.createElement("div"),a.id=s,a.className="fixed "+ka[p.pos],document.body.appendChild(a),Hs(wa,{target:a,props:{pos:p.pos}})),xa(p)},_a=p=>p.replaceAll(">class",">className").replaceAll("/solid","/react").replaceAll('"solid"','"react"').replaceAll("createSignal","useState"),Fa=p=>p.replaceAll("/react","/solid").replaceAll('"react"','"solid"').replaceAll("className","class").replaceAll("useState","createSignal"),Pa=()=>{};var ja=l('<i class="i-mage:preview-fill"></i> Preview',1),Ca=l('<i class="i-majesticons:code"></i> Code',1),Da=l("<!> <!>",1),$a=l("<div><!></div>"),Ka=l('<i class="i-devicon:html5"></i> file.html',1),Ta=l('<i class="i-devicon:svelte"></i> Svelte',1),Ia=l('<i class="i-devicon:react"></i> React',1),Ba=l('<i class="i-devicon:solidjs"></i> Solid',1),za=l("<!> <!> <!>",1),Ea=l('<!> <button class="!rounded-full m-l-auto hover:text-primary" aria-label="Copy to clipboard"><i></i></button>',1),Aa=l('<!> <div class="bg-[#232b3d] dark:bg-[#121a2a] text-white pt5 rounded-b"><!></div>',1),Oa=l("<!> <!> <!>",1);function ie(p,s){u(s,!0);let a=R(void 0);const n=es(s,["$$slots","$$events","$$legacy"]);let{demo:t,class:r=""}=n,i=R(null);const o=q=>{q=="react"&&N(i)!="react"?N(a).innerHTML=_a(N(a).innerHTML):q=="solid"&&N(i)!="solid"&&(N(a).innerHTML=Fa(N(a).innerHTML)),K(i,q,!0)},b=t.preview;xs(p,{defaultValue:"preview",children:(q,f)=>{var v=Oa(),y=S(v);_s(y,{class:"tabs w-fit p1 !children:p2 !children:px3",children:(d,h)=>{var x=Da(),U=S(x);Z(U,{value:"preview",children:(D,H)=>{var J=ja();w(),e(D,J)},$$slots:{default:!0}});var B=c(U,2);Z(B,{value:"code",children:(D,H)=>{var J=Ca();w(),e(D,J)},$$slots:{default:!0}}),e(d,x)},$$slots:{default:!0}});var k=c(y,2);ks(k,{value:"preview",children:(d,h)=>{var x=$a(),U=P(x);b(U,{}),F(x),I(B=>E(x,1,B),[()=>V(r.includes("demobox")?r:`demobox-center ${r}`)]),e(d,x)},$$slots:{default:!0}});var C=c(k,2);ks(C,{value:"code",children:(d,h)=>{xs(d,{get value(){return N(i)},setValue:o,children:(x,U)=>{var B=Aa(),D=S(B);_s(D,{class:"tabs-line-primary brd border-b-0 rounded-t [&>button]:capitalize",children:($,_)=>{var ls=Ea(),cs=S(ls);{var gs=Y=>{Z(Y,{value:"html",children:(rs,bs)=>{var is=Ka();w(),e(rs,is)},$$slots:{default:!0}})},qs=Y=>{var rs=za(),bs=S(rs);Z(bs,{value:"svelte",children:(ns,ys)=>{var ps=Ta();w(),e(ns,ps)},$$slots:{default:!0}});var is=c(bs,2);Z(is,{value:"react",children:(ns,ys)=>{var ps=Ia();w(),e(ns,ps)},$$slots:{default:!0}});var Os=c(is,2);Z(Os,{value:"solid",children:(ns,ys)=>{var ps=Ba();w(),e(ns,ps)},$$slots:{default:!0}}),e(Y,rs)};A(cs,Y=>{t.code.html?Y(gs):Y(qs,!1)})}var as=c(cs,2);as.__click=[Pa];var As=P(as);E(As,1,V("i-majesticons:clipboard-line")),F(as),e($,ls)},$$slots:{default:!0}});var H=c(D,2),J=P(H);{var j=$=>{var _=G();const ls=fs(()=>t.code[N(i)]);var cs=S(_);Gs(cs,()=>N(ls),(gs,qs)=>{qs(gs,{get ref(){return N(a)},set ref(as){K(a,as,!0)}})}),e($,_)};A(J,$=>{N(i)&&t.code[N(i)]&&$(j)})}F(H),e(x,B)},$$slots:{default:!0}})},$$slots:{default:!0}}),e(q,v)},$$slots:{default:!0}}),L()}O(["click"]);var Ua=l('<span class="badge bg-indigo">Badge</span> <span class="badge-outline border-fg">Outline</span> <span class="badge-surface">Surface</span> <span class="badge dtxtbg-emerald-60"><i class="i-icon-park-outline:check-one"></i> Badge</span> <span class="badge bg-rose"><i class="i-line-md:star-filled"></i> Badge</span> <span class="badge ltxtbg-blue-80">Light blue</span> <span class="badge dtxtbgr-pink_3">Badge</span> <span class="badge ltxtbgr-orange">Badge</span> <span class="badge ltxtbg-emerald_5-80"><i class="i-icon-park-outline:check-one"></i> Badge</span>',1);function Ma(p){var s=Ua();w(16),e(p,s)}var Ra=l('<span class="badge-sm">Size sm</span> <span class="badge-secondary-md">Size md</span> <span class="badge-secondary-lg">Size lg</span> <span class="badge-surface-xl">Size xl</span>',1);function Va(p){var s=Ra();w(6),e(p,s)}var Wa=l('<span class="badge-solid">Badge</span> <span class="badge-secondary">Secondary</span> <span class="badge-outline">Outline</span> <span class="badge-surface">Surface</span> <span class="badge bg-emerald6"><i class="i-uil:check-circle"></i> Checked!</span> <span class="badge bg-amber6"><i class="i-line-md:star-filled"></i> 5.3k</span> <span class="badge-outline">99+</span>',1);function Ha(p){var s=Wa();w(12),e(p,s)}var Ga=l("<!> <!> <!>",1);function Ja(p){var s=Ga(),a=S(s);T(a,{class:"btn-success",txt:"Success"});var n=c(a,2);T(n,{class:"btn-warning",txt:"Warning"});var t=c(n,2);T(t,{class:"btn-danger",txt:"danger"}),e(p,s)}var Qa=l('<button class="btn-primary">Primary</button> <button class="btn-soft">Soft</button> <button class="btn-outline">Outline</button> <button class="btn-ghost">Ghost</button> <button class="btn-emerald5 text-white"><i class="i-line-md:email-filled"></i> Email</button> <button class="btn-outline btn"><i class="i-iconamoon:send"></i> Send us</button> <button class="btn-soft"><i class="i-eos-icons:loading"></i> Fetching...</button> <button class="btn-primary-eqmd" aria-label="plus button"><i class="i-tabler:plus"></i></button> <button class="btn-outline-eqmd rounded-full btn" aria-label="user button"><i class="i-iconoir:user"></i></button> <hr class="w-full brd mt3 mb1"/> <button class="btn-soft-xs">Button</button> <button class="btn-soft-sm">Button</button> <button class="btn-soft-md">Button</button> <button class="btn-soft-lg">Button</button> <button class="btn-soft-xl">Button</button>',1);function Xa(p){var s=Qa();w(28),e(p,s)}var Ya=l("<!> <!> <!> <!> <!>",1);function Za(p){var s=Ya(),a=S(s);T(a,{class:"btn-emerald5 text-white",iconL:"i-line-md:email-filled",txt:"Email"});var n=c(a,2);T(n,{iconL:"i-iconamoon:send",txt:"Send us",class:"btn-outline"});var t=c(n,2);T(t,{loading:!0,loaderTxt:"Fetching...",disabled:!0,txt:"Fetch data"});var r=c(t,2);T(r,{iconL:"i-tabler:plus",class:"btn-primary-eqmd","aria-label":"plus button"});var i=c(r,2);T(i,{iconL:"i-iconoir:user",class:"btn-outline-eqmd rounded-full","aria-label":"user button"}),e(p,s)}var sn=l("<!> <!> <!> <!> <!>",1);function an(p){var s=sn(),a=S(s);T(a,{class:"btn-soft-xs",txt:"Success"});var n=c(a,2);T(n,{class:"btn-soft-sm",txt:"Success"});var t=c(n,2);T(t,{class:"btn-soft-md",txt:"Success"});var r=c(t,2);T(r,{class:"btn-soft-lg",txt:"Success"});var i=c(r,2);T(i,{class:"btn-soft-xl",txt:"Success"}),e(p,s)}var nn=l("<!> <!> <!> <!>",1);function pn(p){var s=nn(),a=S(s);T(a,{txt:"Primary",class:"btn-primary"});var n=c(a,2);T(n,{class:"soft",txt:"Soft"});var t=c(n,2);T(t,{class:"btn-outline",txt:"Outline"});var r=c(t,2);T(r,{class:"btn-ghost",txt:"Ghost"}),e(p,s)}var tn=l('<input type="checkbox" class="checkbox"/> <input type="checkbox" class="checkbox-primary"/> <input type="checkbox" class="checkbox-red"/> <input type="checkbox" class="checkbox-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-md"/> <input type="checkbox" class="checkbox-lg"/> <input type="checkbox" class="checkbox-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-indigo-md"/> <input type="checkbox" class="checkbox-red-lg"/> <input type="checkbox" class="checkbox-slate-xl"/> <input type="checkbox" class="checkbox-xl !after:checked:i-ph:check-fat-fill !after:checked:size-6"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-blue text-white"/> <input type="checkbox" class="checkbox-amber text-amber8"/> <input type="checkbox" class="checkbox-emerald"/> <input type="checkbox" class="checkbox checked:bg-bg text-fg"/>',1);function en(p){var s=tn(),a=c(S(s),2);a.defaultChecked=!0;var n=c(a,2);n.defaultChecked=!0;var t=c(n,2);t.defaultChecked=!0;var r=c(t,4);r.defaultChecked=!0;var i=c(r,2);i.defaultChecked=!0;var o=c(i,2);o.defaultChecked=!0;var b=c(o,2);b.defaultChecked=!0;var q=c(b,4);q.defaultChecked=!0;var f=c(q,2);f.defaultChecked=!0;var v=c(f,2);v.defaultChecked=!0;var y=c(v,2);y.defaultChecked=!0;var k=c(y,2);k.defaultChecked=!0;var C=c(k,4);C.defaultChecked=!0;var d=c(C,2);d.defaultChecked=!0;var h=c(d,2);h.defaultChecked=!0;var x=c(h,2);x.defaultChecked=!0,e(p,s)}var ln=l('<input type="checkbox" id="option" class="checkbox-fg"/> <label for="option">Option</label>',1);function cn(p){var s=ln(),a=S(s);a.defaultChecked=!0,w(2),e(p,s)}var rn=l('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"><input type="checkbox" id="tnc" class="checkbox"/> <label for="tnc">I agree to the Terms and Conditions</label> <input type="checkbox" id="tnc2" class="checkbox-blue"/> <div><label for="tnc2">I understand and read the privacy policy</label> <br/> <span class="text-mutedfg text-sm">By Agreeing you accept our <a class="link" href="/">Privacy Policy</a></span></div> <input type="checkbox" id="tnc3" class="checkbox-slate" disabled/> <label for="tnc3" class="muted-70">I have freedom of speech</label></div>');function on(p){var s=rn(),a=P(s);a.defaultChecked=!0;var n=c(a,4);n.defaultChecked=!0,w(6),F(s),e(p,s)}const un=(p,s)=>K(s,!0);var Ln=l('<h3>Edit Account</h3> <p class="text-mutedfg mb2">Make changes to your user profile here.</p> <label for="name">Name</label> <input class="input-outline" id="name" placeholder="Enter your name"/> <label for="email">Email</label> <input type="email" class="input-outline" id="email" placeholder="Enter your email"/> <div class="flex gap3 items-center ml-auto mt3"><button class="btn-soft">Cancel</button> <button class="btn-primary">Save</button></div>',1),Nn=l('<button class="btn-primary mx-auto">Open</button> <!>',1);function dn(p){let s=R(!1);const a=()=>K(s,!1);var n=Nn(),t=S(n);t.__click=[un,s];var r=c(t,2);aa(r,{get open(){return N(s)},close:a,class:"grid gap4",children:(i,o)=>{var b=Ln(),q=c(S(b),12),f=P(q);f.__click=a,w(2),F(q),e(i,b)},$$slots:{default:!0}}),e(p,n)}O(["click"]);var gn=l('<!> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!> <!> <!> <hr class="brd my1"/> <!>',1),qn=l("<!> <!>",1),bn=l('<i class="i-line-md:star-filled"></i> With icons',1),mn=l('<i class="i-line-md:account"></i>Profile',1),vn=l('<i class="i-nimbus:cog"></i>Settings',1),fn=l('<i class="i-line-md:logout"></i>Log out',1),hn=l("<!> <!> <!>",1),Sn=l("<!> <!>",1),yn=l("<!> <!>",1);function wn(p){var s=yn(),a=S(s);Fs(a,{children:(t,r)=>{var i=qn(),o=S(i);js(o,{class:"btn-primary",children:(q,f)=>{w();var v=M("Click me");e(q,v)},$$slots:{default:!0}});var b=c(o,2);Ps(b,{children:(q,f)=>{var v=gn(),y=S(v);z(y,{children:(j,$)=>{w();var _=M("Profile");e(j,_)},$$slots:{default:!0}});var k=c(y,2);z(k,{children:(j,$)=>{w();var _=M("Billing");e(j,_)},$$slots:{default:!0}});var C=c(k,2);z(C,{children:(j,$)=>{w();var _=M("Settings");e(j,_)},$$slots:{default:!0}});var d=c(C,2);z(d,{children:(j,$)=>{w();var _=M("Keyboard shortcuts");e(j,_)},$$slots:{default:!0}});var h=c(d,4);z(h,{children:(j,$)=>{w();var _=M("Team");e(j,_)},$$slots:{default:!0}});var x=c(h,2);z(x,{children:(j,$)=>{w();var _=M("Invite users");e(j,_)},$$slots:{default:!0}});var U=c(x,2);z(U,{children:(j,$)=>{w();var _=M("New Team");e(j,_)},$$slots:{default:!0}});var B=c(U,4);z(B,{children:(j,$)=>{w();var _=M("GitHub");e(j,_)},$$slots:{default:!0}});var D=c(B,2);z(D,{children:(j,$)=>{w();var _=M("Support");e(j,_)},$$slots:{default:!0}});var H=c(D,2);z(H,{disabled:!0,children:(j,$)=>{w();var _=M("API");e(j,_)},$$slots:{default:!0}});var J=c(H,4);z(J,{children:(j,$)=>{w();var _=M("Log out");e(j,_)},$$slots:{default:!0}}),e(q,v)},$$slots:{default:!0}}),e(t,i)},$$slots:{default:!0}});var n=c(a,2);Fs(n,{children:(t,r)=>{var i=Sn(),o=S(i);js(o,{class:"btn-soft",children:(q,f)=>{var v=bn();w(),e(q,v)},$$slots:{default:!0}});var b=c(o,2);Ps(b,{children:(q,f)=>{var v=hn(),y=S(v);z(y,{children:(d,h)=>{var x=mn();w(),e(d,x)},$$slots:{default:!0}});var k=c(y,2);z(k,{children:(d,h)=>{var x=vn();w(),e(d,x)},$$slots:{default:!0}});var C=c(k,2);z(C,{children:(d,h)=>{var x=fn();w(),e(d,x)},$$slots:{default:!0}}),e(q,v)},$$slots:{default:!0}}),e(t,i)},$$slots:{default:!0}}),e(p,s)}const xn=(p,s)=>{K(s,N(s)==="text"?"password":"text",!0)};var kn=l('<button type="button" class="btn-ghost-eqsm rounded-full mr--2" aria-label="Toggle password visibility"><i></i></button>'),_n=l('<form class="grid gap3"><label for="email" class="reqstar">Email</label> <!> <label for="passwd">Password</label> <!> <input type="submit" class="!btn-primary ml-auto mt3"/></form>');function Fn(p,s){u(s,!0);let a=R("password");const n=o=>{o.preventDefault();const b=new FormData(o.target),q=b.get("email"),f=b.get("passwd");alert(`
Email: ${q}
Password: ${f}`)};var t=_n(),r=c(P(t),2);X(r,{required:!0,name:"email",id:"email",placeholder:"Enter email",type:"email",iconL:"i-line-md:email",class:"grinput-outline mb3"});var i=c(r,4);X(i,{name:"passwd",id:"passwd",placeholder:"Enter Password",get type(){return N(a)},iconL:"i-lucide:key-round",class:"grinput-outline",iconR:b=>{var q=kn();q.__click=[xn,a];var f=P(q);F(q),I(()=>E(f,1,V(N(a)=="text"?"i-heroicons-solid:eye":"i-heroicons-solid:eye-off"))),e(b,q)},$$slots:{iconR:!0}}),w(2),F(t),$s("submit",t,n),e(p,t),L()}O(["click"]);var Pn=l('<input class="input" placeholder="Enter name"/> <input class="input-outline" placeholder="Enter name"/> <br/> <p>sizes</p> <input class="input-outline-sm" placeholder="Enter name"/> <input class="input-outline-md" disabled placeholder="Enter name"/> <input class="input-lg" placeholder="Enter name"/> <input class="input-outline-xl" placeholder="Enter name"/> <p>Icons</p> <div class="grid grid-cols-2 grid-gap5"><div class="grinput"><i class="i-ri:user-line"></i> <input placeholder="Enter name"/></div> <div class="grinput-outline"><i class="i-line-md:email-filled"></i> <input placeholder="Enter name"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter price" type="number"/></div> <div class="grinput p0"><span class="bg-border p2 px3 rounded-l">$</span> <input placeholder="Enter salary" disabled/></div> <div class="grinput-outline p0 col-span-2"><span class="bg-mutedbg p2 px3 rounded-l">$</span> <input placeholder="Enter name"/> <span class="bg-mutedbg p2 rounded-r">USD</span></div></div>',1);function jn(p){var s=Pn();w(18),e(p,s)}var Cn=l("<!> <!> <!> <!>",1);function Dn(p){var s=Cn(),a=S(s);X(a,{placeholder:"size (sm)",class:"grinput-sm"});var n=c(a,2);X(n,{placeholder:"size (md)",class:"grinput-md"});var t=c(n,2);X(t,{placeholder:"size (lg)",class:"grinput-lg"});var r=c(t,2);X(r,{placeholder:"size (xl)",class:"grinput-outline-xl"}),e(p,s)}var $n=l("<!> <!>",1);function Kn(p){var s=$n(),a=S(s);X(a,{placeholder:"Enter name"});var n=c(a,2);X(n,{placeholder:"Enter name",class:"grinput-outline"}),e(p,s)}var Tn=l('<input type="radio" class="radio" name="group1"/> <input type="radio" class="radio-primary" name="group1"/> <input type="radio" class="radio-red" name="group1"/> <input type="radio" class="radio-amber4" name="group1"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group2"/> <input type="radio" class="radio-md" name="group2"/> <input type="radio" class="radio-lg" name="group2"/> <input type="radio" class="radio-xl" name="group2"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group3"/> <input type="radio" class="radio-indigo-md" name="group3"/> <input type="radio" class="radio-red-lg" name="group3"/> <input type="radio" class="radio-slate-xl" name="group3"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radiob-blue" name="group4"/> <input type="radio" class="radiob-amber" name="group4"/> <input type="radio" class="radiob-emerald" name="group4"/> <input type="radio" class="radiob" name="group4"/>',1);function In(p){var s=Tn(),a=S(s);a.defaultChecked=!0;var n=c(a,14);n.defaultChecked=!0;var t=c(n,8);t.defaultChecked=!0;var r=c(t,14);r.defaultChecked=!0,e(p,s)}var Bn=l('<input type="radio" id="option1" name="group" class="radio"/> <label for="option1">Arch</label> <input type="radio" id="option2" name="group" class="radio"/> <label for="option2">Void</label> <input type="radio" id="option3" name="group" class="radiob"/> <label for="option3">Ubuntu</label> <input type="radio" id="option4" name="group" class="radiob"/> <label for="option4">Fedora</label>',1);function zn(p){var s=Bn(),a=S(s);a.defaultChecked=!0,w(14),e(p,s)}var En=l('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="radio" id="email" name="x" class="radio"/> <label for="email">Email notifications</label> <input type="radio" id="sms" name="x" class="radio-blue"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="radio" id="none" name="x" class="radio-slate"/> <label for="none">No notifications</label> <input type="radio" id="disagree" name="x" class="radio-red"/> <label for="disagree">Stop Bothering!</label></div>');function An(p){var s=En(),a=P(s);a.defaultChecked=!0,w(14),F(s),e(p,s)}var On=l('<div class="grid grid-cols-2 grid-gap3 w-2/3"><!> <!> <!> <!></div>');function Un(p){const s=[{value:"1",name:"Option 1"},{value:"2",name:"Option 2"},{value:"3",name:"Option 3"},{value:"4",name:"Option 4"},{value:"5",name:"Option 5 keyboad hehe"}],a=[{value:"apple",name:"Apple ",iconL:"i-noto:red-apple"},{value:"lime",name:"Lime",iconL:"i-noto:lime"},{value:"watermelon",name:"Watermelon",iconL:"i-noto:watermelon"},{value:"strawberry",name:"Strawberry",iconL:"i-noto:strawberry"},{value:"mango",name:"Mango",iconL:"i-noto:mango"}],n=[{value:"arch",name:"Arch Linux ",iconL:"i-logos:archlinux"},{value:"ubuntu",name:"Ubuntu",iconL:"i-logos:ubuntu"},{value:"fedora",name:"Fedora",iconL:"i-logos:fedora"},{value:"manjaro",name:"Manjaro",iconL:"i-logos:manjaro"},{value:"artix",name:"Artix ",iconL:"i-devicon:artixlinux"}];var t=On(),r=P(t);os(r,{get options(){return s},dropdownCss:"bg-mutedbg border-0",optionCss:"data-active:bg-input"});var i=c(r,2);os(i,{get options(){return a},triggerProps:{class:"btn-outline"},placeholder:"Select fruit"});var o=c(i,2);os(o,{get options(){return a},triggerProps:{class:"btn-outline",disabled:!0},placeholder:"Disabled Select"});var b=c(o,2);os(b,{get options(){return n},placeholder:"Select distro",optinCss:"gap4"}),F(t),e(p,t)}var Mn=l('<input type="checkbox" class="switch"/> <input type="checkbox" class="switch-flat-md-primary"/> <input type="checkbox" class="switch-flat-md-red"/> <input type="checkbox" class="switch-flat-md-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-flat-sm"/> <input type="checkbox" class="switch-flat-md"/> <input type="checkbox" class="switch-flat-lg"/> <input type="checkbox" class="switch-flat-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-line-sm"/> <input type="checkbox" class="switch-line-md-indigo"/> <input type="checkbox" class="switch-line-lg-red"/> <input type="checkbox" class="switch-line-xl-slate"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-knob-md-blue"/> <input type="checkbox" class="switch-knob-md-amber"/> <input type="checkbox" class="switch-flat-md-emerald"/> <input type="checkbox" class="switch-knob" name="group4"/>',1);function Rn(p){var s=Mn(),a=S(s);a.defaultChecked=!0;var n=c(a,16);n.defaultChecked=!0;var t=c(n,10);t.defaultChecked=!0;var r=c(t,2);r.defaultChecked=!0;var i=c(r,2);i.defaultChecked=!0;var o=c(i,10);o.defaultChecked=!0,e(p,s)}var Vn=l('<input type="checkbox" class="switch-line"/> <input type="checkbox" class="switch-flat"/> <input type="checkbox" class="switch-knob"/>',1);function Wn(p){var s=Vn(),a=c(S(s),2);a.defaultChecked=!0,w(2),e(p,s)}var Hn=l('<div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="checkbox" id="email" class="switch-line"/> <label for="email">Email notifications</label> <input type="checkbox" id="sms" class="switch-line"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-mutedfg text-sm">Standard messaging rates may apply</span></div> <input type="checkbox" id="none" class="switch"/> <label for="none">No notifications</label> <input type="checkbox" id="disagree" class="switch"/> <label for="disagree">Stop Bothering!</label></div>');function Gn(p){var s=Hn(),a=P(s);a.defaultChecked=!0,w(14),F(s),e(p,s)}var Jn=(p,s)=>s("toast-flat-indigo"),Qn=(p,s)=>s("toast-flat-sky"),Xn=(p,s)=>s("toast-flat-danger"),Yn=(p,s)=>s("toast-flat-success"),Zn=(p,s)=>s("toast-flat-warning"),sp=(p,s)=>s("toast-outline-indigo"),ap=(p,s)=>s("toast-outline-sky"),np=(p,s)=>s("toast-outline-danger"),pp=(p,s)=>s("toast-outline-success"),tp=(p,s)=>s("toast-outline-warning"),ep=l('<button class="btn-outline text-indigo">Indigo</button> <button class="btn-outline text-sky">Sky</button> <button class="btn-outline text-danger">Danger</button> <button class="btn-outline text-success">Success</button> <button class="btn-outline text-warning">Warning</button> <hr class="brd w-full my2"/> <button class="btn-outline text-indigo">Indigo</button> <button class="btn-outline text-sky">Sky</button> <button class="btn-outline text-danger">Danger</button> <button class="btn-outline text-success">Success</button> <button class="btn-outline text-warning">Warning</button>',1);function lp(p,s){u(s,!1);const a=C=>{ds({title:"Toast Activated",txt:"Customize this text to suit your message",css:C})};Ns();var n=ep(),t=S(n);t.__click=[Jn,a];var r=c(t,2);r.__click=[Qn,a];var i=c(r,2);i.__click=[Xn,a];var o=c(i,2);o.__click=[Yn,a];var b=c(o,2);b.__click=[Zn,a];var q=c(b,4);q.__click=[sp,a];var f=c(q,2);f.__click=[ap,a];var v=c(f,2);v.__click=[np,a];var y=c(v,2);y.__click=[pp,a];var k=c(y,2);k.__click=[tp,a],e(p,n),L()}O(["click"]);var cp=(p,s)=>s("topleft"),rp=(p,s)=>s("topmid"),ip=(p,s)=>s("topright"),op=(p,s)=>s("botleft"),up=(p,s)=>s("botmid"),Lp=(p,s)=>s("botright"),Np=l('<button class="btn">Top left</button> <button class="btn">Top center</button> <button class="btn">Top right</button> <button class="btn">Bottom left</button> <button class="btn">Bottom center</button> <button class="btn">Bottom right</button>',1);function dp(p,s){u(s,!1);const a=f=>{ds({title:"Toast Activated",txt:"Customize this text to suit your message",pos:f})};Ns();var n=Np(),t=S(n);t.__click=[cp,a];var r=c(t,2);r.__click=[rp,a];var i=c(r,2);i.__click=[ip,a];var o=c(i,2);o.__click=[op,a];var b=c(o,2);b.__click=[up,a];var q=c(b,2);q.__click=[Lp,a],e(p,n),L()}O(["click"]);const gp=()=>{ds({title:"Toast Activated",txt:"Customize this text to suit your message"})};var qp=l('<button class="btn">Show toast</button>');function bp(p,s){u(s,!1),Ns();var a=qp();a.__click=[gp],e(p,a),L()}O(["click"]);var mp=(p,s)=>s("toast-solid"),vp=(p,s)=>s("toast-flat"),fp=(p,s)=>s("toast-outline"),hp=l('<button class="btn-primary">Solid</button> <button class="btn">Flat</button> <button class="btn-outline">Outline</button>',1);function Sp(p,s){u(s,!1);const a=o=>{ds({title:"Toast Activated",txt:"Customize this text to suit your message",css:o})};Ns();var n=hp(),t=S(n);t.__click=[mp,a];var r=c(t,2);r.__click=[vp,a];var i=c(r,2);i.__click=[fp,a],e(p,n),L()}O(["click"]);var yp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;span class=&quot;badge bg-indigo&quot;&gt;Badge&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>&lt;span class=&quot;badge-outline border-fg&quot;&gt;Outline&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;span class=&quot;badge-surface&quot;&gt;Surface&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>&lt;span class=&quot;badge dtxtbg-emerald-60&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>  &lt;i class=&quot;i-icon-park-outline:check-one&quot;&gt;&lt;/i&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>  Badge
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>
<span class="LineNr">  </span><span class="LineNr"> 10 </span>&lt;span class=&quot;badge bg-rose&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>  &lt;i class=&quot;i-line-md:star-filled&quot;&gt;&lt;/i&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>  Badge
<span class="LineNr">  </span><span class="LineNr"> 13 </span>&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>&lt;span class=&quot;badge ltxtbg-blue-80&quot;&gt;Light blue&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>&lt;span class=&quot;badge dtxtbgr-pink_3&quot;&gt;Badge&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>&lt;span class=&quot;badge ltxtbgr-orange&quot;&gt;Badge&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>&lt;span class=&quot;badge ltxtbg-emerald_5-80&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>  &lt;i class=&quot;i-icon-park-outline:check-one&quot;&gt;&lt;/i&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>  Badge
<span class="LineNr">  </span><span class="LineNr"> 20 </span>&lt;/span&gt;

</pre>`);function wp(p,s){u(s,!0);let a=g(s,"ref",15);var n=yp();m(n,t=>a(t),()=>a()),e(p,n),L()}var xp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;span class=&quot;badge-sm&quot;&gt;Size sm&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>&lt;span class=&quot;badge-secondary-md&quot;&gt;Size md&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;span class=&quot;badge-secondary-lg&quot;&gt;Size lg&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>&lt;span class=&quot;badge-surface-xl&quot;&gt;Size xl&lt;/span&gt;

</pre>`);function kp(p,s){u(s,!0);let a=g(s,"ref",15);var n=xp();m(n,t=>a(t),()=>a()),e(p,n),L()}var _p=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;span class=&quot;badge-solid&quot;&gt;Badge&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>&lt;span class=&quot;badge-secondary&quot;&gt;Secondary&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;span class=&quot;badge-outline&quot;&gt;Outline&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>&lt;span class=&quot;badge-surface&quot;&gt;Surface&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  5 </span>
<span class="LineNr">  </span><span class="LineNr">  6 </span>&lt;span class=&quot;badge bg-emerald6&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>  &lt;i class=&quot;i-uil:check-circle&quot;&gt;&lt;/i&gt; Checked!
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>
<span class="LineNr">  </span><span class="LineNr"> 10 </span>&lt;span class=&quot;badge bg-amber6&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>  &lt;i class=&quot;i-line-md:star-filled&quot;&gt;&lt;/i&gt; 5.3k
<span class="LineNr">  </span><span class="LineNr"> 12 </span>&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 13 </span>
<span class="LineNr">  </span><span class="LineNr"> 14 </span>&lt;span class=&quot;badge-outline&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>  99+
<span class="LineNr">  </span><span class="LineNr"> 16 </span>&lt;/span&gt;

</pre>`);function Fp(p,s){u(s,!0);let a=g(s,"ref",15);var n=_p();m(n,t=>a(t),()=>a()),e(p,n),L()}var Pp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> Btn <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span>
<span class="LineNr">  </span><span class="LineNr">  3 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>    &lt;&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>      &lt;Btn <span class="Keyword">class</span>=<span class="String">&quot;btn-success&quot;</span> txt=<span class="String">&quot;Success&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>      &lt;Btn <span class="Keyword">class</span>=<span class="String">&quot;btn-warning&quot;</span> txt=<span class="String">&quot;Warning&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>      &lt;Btn <span class="Keyword">class</span>=<span class="String">&quot;btn-danger&quot;</span> txt=<span class="String">&quot;danger&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>    &lt;/&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 11 </span><span class="Function">&#125;</span>;

</pre>`);function jp(p,s){u(s,!0);let a=g(s,"ref",15);var n=Pp();m(n,t=>a(t),()=>a()),e(p,n),L()}var Cp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script lang=&quot;ts&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; Btn &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>&lt;Btn class=&quot;btn-success&quot; txt=&quot;Success&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>&lt;Btn class=&quot;btn-warning&quot; txt=&quot;Warning&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>&lt;Btn class=&quot;btn-danger&quot; txt=&quot;danger&quot; /&gt;

</pre>`);function Dp(p,s){u(s,!0);let a=g(s,"ref",15);var n=Cp();m(n,t=>a(t),()=>a()),e(p,n),L()}var $p=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;button class=&quot;btn-primary&quot;&gt;Primary&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>&lt;button class=&quot;btn-soft&quot;&gt;Soft&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;button class=&quot;btn-outline&quot;&gt;Outline&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>&lt;button class=&quot;btn-ghost&quot;&gt;Ghost&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr">  5 </span>
<span class="LineNr">  </span><span class="LineNr">  6 </span>&lt;button class=&quot;btn-emerald5 text-white&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>  &lt;i class=&quot;i-line-md:email-filled&quot;&gt;&lt;/i&gt; Email
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>
<span class="LineNr">  </span><span class="LineNr"> 10 </span>&lt;button class=&quot;btn-outline btn&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>  &lt;i class=&quot;i-iconamoon:send&quot;&gt;&lt;/i&gt; Send us
<span class="LineNr">  </span><span class="LineNr"> 12 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 13 </span>
<span class="LineNr">  </span><span class="LineNr"> 14 </span>&lt;button class=&quot;btn-soft&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>  &lt;i class=&quot;i-eos-icons:loading&quot;&gt;&lt;/i&gt; Fetching...
<span class="LineNr">  </span><span class="LineNr"> 16 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>
<span class="LineNr">  </span><span class="LineNr"> 18 </span>&lt;button class=&quot;btn-primary-eqmd&quot; aria-label=&quot;plus button&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>  &lt;i class=&quot;i-tabler:plus&quot;&gt;&lt;/i&gt;
<span class="LineNr">  </span><span class="LineNr"> 20 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>
<span class="LineNr">  </span><span class="LineNr"> 22 </span>&lt;button class=&quot;btn-outline-eqmd rounded-full btn&quot; aria-label=&quot;user button&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>  &lt;i class=&quot;i-iconoir:user&quot;&gt;&lt;/i&gt;
<span class="LineNr">  </span><span class="LineNr"> 24 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 25 </span>
<span class="LineNr">  </span><span class="LineNr"> 26 </span>&lt;hr class=&quot;w-full brd mt3 mb1&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>
<span class="LineNr">  </span><span class="LineNr"> 28 </span>&lt;button class=&quot;btn-soft-xs&quot;&gt;Button&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 29 </span>&lt;button class=&quot;btn-soft-sm&quot;&gt;Button&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 30 </span>&lt;button class=&quot;btn-soft-md&quot;&gt;Button&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 31 </span>&lt;button class=&quot;btn-soft-lg&quot;&gt;Button&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 32 </span>&lt;button class=&quot;btn-soft-xl&quot;&gt;Button&lt;/button&gt;

</pre>`);function Kp(p,s){u(s,!0);let a=g(s,"ref",15);var n=$p();m(n,t=>a(t),()=>a()),e(p,n),L()}var Tp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> Btn <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span>
<span class="LineNr">  </span><span class="LineNr">  3 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>    &lt;&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>      &lt;Btn
<span class="LineNr">  </span><span class="LineNr">  7 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-emerald5 text-white&quot;</span>
<span class="LineNr">  </span><span class="LineNr">  8 </span>        iconL=<span class="String">&quot;i-line-md:email-filled&quot;</span>
<span class="LineNr">  </span><span class="LineNr">  9 </span>        txt=<span class="String">&quot;Email&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 10 </span>      /&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>      &lt;Btn iconL=<span class="String">&quot;i-iconamoon:send&quot;</span> txt=<span class="String">&quot;Send us&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;btn-outline&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>      &lt;Btn
<span class="LineNr">  </span><span class="LineNr"> 14 </span>        loading=<span class="Function">&#123;</span><span class="Boolean">true</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 15 </span>        loaderTxt=<span class="String">&quot;Fetching...&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 16 </span>        disabled=<span class="Function">&#123;</span><span class="Boolean">true</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 17 </span>        txt=<span class="String">&quot;Fetch data&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 18 </span>      /&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>
<span class="LineNr">  </span><span class="LineNr"> 20 </span>      &lt;Btn
<span class="LineNr">  </span><span class="LineNr"> 21 </span>        iconL=<span class="String">&quot;i-tabler:plus&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 22 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-primary-eqmd&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 23 </span>        aria-label=<span class="String">&quot;plus button&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 24 </span>      /&gt;
<span class="LineNr">  </span><span class="LineNr"> 25 </span>
<span class="LineNr">  </span><span class="LineNr"> 26 </span>      &lt;Btn
<span class="LineNr">  </span><span class="LineNr"> 27 </span>        iconL=<span class="String">&quot;i-iconoir:user&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 28 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-outline-eqmd rounded-full&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 29 </span>        aria-label=<span class="String">&quot;user button&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 30 </span>      /&gt;
<span class="LineNr">  </span><span class="LineNr"> 31 </span>    &lt;/&gt;
<span class="LineNr">  </span><span class="LineNr"> 32 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 33 </span><span class="Function">&#125;</span>;

</pre>`);function Ip(p,s){u(s,!0);let a=g(s,"ref",15);var n=Tp();m(n,t=>a(t),()=>a()),e(p,n),L()}var Bp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script lang=&quot;ts&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; Btn &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>&lt;Btn
<span class="LineNr">  </span><span class="LineNr">  6 </span>  class=&quot;btn-emerald5 text-white&quot;
<span class="LineNr">  </span><span class="LineNr">  7 </span>  iconL=&quot;i-line-md:email-filled&quot;
<span class="LineNr">  </span><span class="LineNr">  8 </span>  txt=&quot;Email&quot;
<span class="LineNr">  </span><span class="LineNr">  9 </span>/&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>&lt;Btn iconL=&quot;i-iconamoon:send&quot; txt=&quot;Send us&quot; class=&quot;btn-outline&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>
<span class="LineNr">  </span><span class="LineNr"> 12 </span>&lt;Btn
<span class="LineNr">  </span><span class="LineNr"> 13 </span>  loading=&#123;true&#125;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>  loaderTxt=&quot;Fetching...&quot;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>  disabled=&#123;true&#125;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>  txt=&quot;Fetch data&quot;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>/&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>
<span class="LineNr">  </span><span class="LineNr"> 19 </span>&lt;Btn
<span class="LineNr">  </span><span class="LineNr"> 20 </span>  iconL=&quot;i-tabler:plus&quot;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>  class=&quot;btn-primary-eqmd&quot;
<span class="LineNr">  </span><span class="LineNr"> 22 </span>  aria-label=&quot;plus button&quot;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>/&gt;
<span class="LineNr">  </span><span class="LineNr"> 24 </span>
<span class="LineNr">  </span><span class="LineNr"> 25 </span>&lt;Btn
<span class="LineNr">  </span><span class="LineNr"> 26 </span>  iconL=&quot;i-iconoir:user&quot;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>  class=&quot;btn-outline-eqmd rounded-full&quot;
<span class="LineNr">  </span><span class="LineNr"> 28 </span>  aria-label=&quot;user button&quot;
<span class="LineNr">  </span><span class="LineNr"> 29 </span>/&gt;

</pre>`);function zp(p,s){u(s,!0);let a=g(s,"ref",15);var n=Bp();m(n,t=>a(t),()=>a()),e(p,n),L()}var Ep=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> Btn <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span>
<span class="LineNr">  </span><span class="LineNr">  3 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>    &lt;&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>      &lt;Btn <span class="Keyword">class</span>=<span class="String">&quot;btn-soft-xs&quot;</span> txt=<span class="String">&quot;Success&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>      &lt;Btn <span class="Keyword">class</span>=<span class="String">&quot;btn-soft-sm&quot;</span> txt=<span class="String">&quot;Success&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>      &lt;Btn <span class="Keyword">class</span>=<span class="String">&quot;btn-soft-md&quot;</span> txt=<span class="String">&quot;Success&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>      &lt;Btn <span class="Keyword">class</span>=<span class="String">&quot;btn-soft-lg&quot;</span> txt=<span class="String">&quot;Success&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>      &lt;Btn <span class="Keyword">class</span>=<span class="String">&quot;btn-soft-xl&quot;</span> txt=<span class="String">&quot;Success&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>    &lt;/&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 13 </span><span class="Function">&#125;</span>;

</pre>`);function Ap(p,s){u(s,!0);let a=g(s,"ref",15);var n=Ep();m(n,t=>a(t),()=>a()),e(p,n),L()}var Op=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script lang=&quot;ts&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; Btn &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>&lt;Btn class=&quot;btn-soft-xs&quot; txt=&quot;Success&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>&lt;Btn class=&quot;btn-soft-sm&quot; txt=&quot;Success&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>&lt;Btn class=&quot;btn-soft-md&quot; txt=&quot;Success&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;Btn class=&quot;btn-soft-lg&quot; txt=&quot;Success&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>&lt;Btn class=&quot;btn-soft-xl&quot; txt=&quot;Success&quot; /&gt;

</pre>`);function Up(p,s){u(s,!0);let a=g(s,"ref",15);var n=Op();m(n,t=>a(t),()=>a()),e(p,n),L()}var Mp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> Btn <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span>
<span class="LineNr">  </span><span class="LineNr">  3 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>    &lt;&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>      &lt;Btn txt=<span class="String">&quot;Primary&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;btn-primary&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>      &lt;Btn <span class="Keyword">class</span>=<span class="String">&quot;soft&quot;</span> txt=<span class="String">&quot;Soft&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>      &lt;Btn <span class="Keyword">class</span>=<span class="String">&quot;btn-outline&quot;</span> txt=<span class="String">&quot;Outline&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>      &lt;Btn <span class="Keyword">class</span>=<span class="String">&quot;btn-ghost&quot;</span> txt=<span class="String">&quot;Ghost&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>    &lt;/&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 12 </span><span class="Function">&#125;</span>;

</pre>`);function Rp(p,s){u(s,!0);let a=g(s,"ref",15);var n=Mp();m(n,t=>a(t),()=>a()),e(p,n),L()}var Vp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script lang=&quot;ts&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; Btn &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>&lt;Btn txt=&quot;Primary&quot; class=&quot;btn-primary&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>&lt;Btn class=&quot;soft&quot; txt=&quot;Soft&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>&lt;Btn class=&quot;btn-outline&quot; txt=&quot;Outline&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;Btn class=&quot;btn-ghost&quot; txt=&quot;Ghost&quot; /&gt;

</pre>`);function Wp(p,s){u(s,!0);let a=g(s,"ref",15);var n=Vp();m(n,t=>a(t),()=>a()),e(p,n),L()}var Hp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-primary&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-red&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-amber4&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  5 </span>
<span class="LineNr">  </span><span class="LineNr">  6 </span>&lt;hr class=&quot;w-full brd border-input my2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-sm&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-md&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-lg&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-xl&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>&lt;hr class=&quot;w-full brd border-input my2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>
<span class="LineNr">  </span><span class="LineNr"> 15 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-sm&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-indigo-md&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-red-lg&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-slate-xl&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>&lt;input
<span class="LineNr">  </span><span class="LineNr"> 20 </span>  type=&quot;checkbox&quot;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>  class=&quot;checkbox-xl !after:checked:(i-ph:check-fat-fill size-6)&quot;
<span class="LineNr">  </span><span class="LineNr"> 22 </span>  defaultChecked
<span class="LineNr">  </span><span class="LineNr"> 23 </span>/&gt;
<span class="LineNr">  </span><span class="LineNr"> 24 </span>
<span class="LineNr">  </span><span class="LineNr"> 25 </span>&lt;hr class=&quot;w-full brd border-input my2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 26 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-blue text-white&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-amber text-amber8&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 28 </span>&lt;input type=&quot;checkbox&quot; class=&quot;checkbox-emerald&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 29 </span>&lt;input
<span class="LineNr">  </span><span class="LineNr"> 30 </span>  type=&quot;checkbox&quot;
<span class="LineNr">  </span><span class="LineNr"> 31 </span>  class=&quot;checkbox checked:bg-bg text-fg&quot;
<span class="LineNr">  </span><span class="LineNr"> 32 </span>  defaultChecked
<span class="LineNr">  </span><span class="LineNr"> 33 </span>/&gt;

</pre>`);function Gp(p,s){u(s,!0);let a=g(s,"ref",15);var n=Hp();m(n,t=>a(t),()=>a()),e(p,n),L()}var Jp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;input type=&quot;checkbox&quot; id=&quot;option&quot; class=&quot;checkbox-fg&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>&lt;label for=&quot;option&quot;&gt;Option&lt;/label&gt;

</pre>`);function Qp(p,s){u(s,!0);let a=g(s,"ref",15);var n=Jp();m(n,t=>a(t),()=>a()),e(p,n),L()}var Xp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;div
<span class="LineNr">  </span><span class="LineNr">  2 </span>  class=&quot;[&amp;&gt;*:nth-child(even)]:ml3 gap-(x3 y7) grid-(~ cols-[auto_1fr])&quot;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>  &lt;input type=&quot;checkbox&quot; id=&quot;tnc&quot; class=&quot;checkbox&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  5 </span>  &lt;label for=&quot;tnc&quot;&gt;I agree to the Terms and Conditions&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>
<span class="LineNr">  </span><span class="LineNr">  7 </span>  &lt;input type=&quot;checkbox&quot; id=&quot;tnc2&quot; class=&quot;checkbox-blue&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>
<span class="LineNr">  </span><span class="LineNr">  9 </span>  &lt;div&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>    &lt;label for=&quot;tnc2&quot;&gt;I understand and read the privacy policy&lt;/label&gt; &lt;br /&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>    &lt;span class=&quot;text-(mutedfg sm)&quot;&gt;By Agreeing you accept our
<span class="LineNr">  </span><span class="LineNr"> 12 </span>      &lt;a class=&quot;link&quot; href=&quot;/&quot;&gt;Privacy Policy &lt;/a&gt;&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 13 </span>  &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>
<span class="LineNr">  </span><span class="LineNr"> 15 </span>  &lt;input
<span class="LineNr">  </span><span class="LineNr"> 16 </span>    type=&quot;checkbox&quot;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>    id=&quot;tnc3&quot;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>    class=&quot;checkbox-slate&quot;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>    disabled
<span class="LineNr">  </span><span class="LineNr"> 20 </span>  /&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>  &lt;label for=&quot;tnc3&quot; class=&quot;muted-70&quot;&gt;I have freedom of speech&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 22 </span>&lt;/div&gt;

</pre>`);function Yp(p,s){u(s,!0);let a=g(s,"ref",15);var n=Xp();m(n,t=>a(t),()=>a()),e(p,n),L()}var Zp=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> useState <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> Dialog <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  3 </span>
<span class="LineNr">  </span><span class="LineNr">  4 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>  <span class="Keyword">const</span> <span class="Function">[</span>open, setOpen<span class="Function">]</span> = useState<span class="javaScriptParens">(</span><span class="Boolean">false</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr">  6 </span>  <span class="Keyword">const</span> openDialog = <span class="javaScriptParens">()</span> =&gt; setOpen<span class="javaScriptParens">(</span><span class="Boolean">true</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr">  7 </span>  <span class="Keyword">const</span> closeDialog = <span class="javaScriptParens">()</span> =&gt; setOpen<span class="javaScriptParens">(</span><span class="Boolean">false</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr">  8 </span>
<span class="LineNr">  </span><span class="LineNr">  9 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr"> 10 </span>    &lt;&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>      &lt;button className=<span class="String">&quot;btn-primary mx-auto&quot;</span> onClick=<span class="Function">&#123;</span>openDialog<span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>        Open
<span class="LineNr">  </span><span class="LineNr"> 13 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>
<span class="LineNr">  </span><span class="LineNr"> 15 </span>      &lt;Dialog open=<span class="Function">&#123;</span>open<span class="Function">&#125;</span> close=<span class="Function">&#123;</span>closeDialog<span class="Function">&#125;</span> className=<span class="String">&quot;grid gap4&quot;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>        &lt;h3&gt;Edit Account&lt;/h3&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>
<span class="LineNr">  </span><span class="LineNr"> 18 </span>        &lt;p className=<span class="String">&quot;text-mutedfg mb2&quot;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>          Make changes to your user profile here.
<span class="LineNr">  </span><span class="LineNr"> 20 </span>        &lt;/p&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>
<span class="LineNr">  </span><span class="LineNr"> 22 </span>        &lt;label htmlFor=<span class="String">&quot;name&quot;</span>&gt;Name&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>        &lt;input
<span class="LineNr">  </span><span class="LineNr"> 24 </span>          className=<span class="String">&quot;input-outline&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 25 </span>          id=<span class="String">&quot;name&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 26 </span>          placeholder=<span class="String">&quot;Enter your name&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 27 </span>        /&gt;
<span class="LineNr">  </span><span class="LineNr"> 28 </span>
<span class="LineNr">  </span><span class="LineNr"> 29 </span>        &lt;label htmlFor=<span class="String">&quot;email&quot;</span>&gt;Email&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 30 </span>        &lt;input
<span class="LineNr">  </span><span class="LineNr"> 31 </span>          type=<span class="String">&quot;email&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 32 </span>          className=<span class="String">&quot;input-outline&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 33 </span>          id=<span class="String">&quot;email&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 34 </span>          placeholder=<span class="String">&quot;Enter your email&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 35 </span>        /&gt;
<span class="LineNr">  </span><span class="LineNr"> 36 </span>
<span class="LineNr">  </span><span class="LineNr"> 37 </span>        &lt;div className=<span class="String">&quot;flex gap3 items-center ml-auto mt3&quot;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 38 </span>          &lt;button className=<span class="String">&quot;btn-soft&quot;</span> onClick=<span class="Function">&#123;</span>closeDialog<span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 39 </span>            Cancel
<span class="LineNr">  </span><span class="LineNr"> 40 </span>          &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 41 </span>          &lt;button className=<span class="String">&quot;btn-primary&quot;</span>&gt;Save&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 42 </span>        &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 43 </span>      &lt;/Dialog&gt;
<span class="LineNr">  </span><span class="LineNr"> 44 </span>    &lt;/&gt;
<span class="LineNr">  </span><span class="LineNr"> 45 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 46 </span><span class="Function">&#125;</span>;

</pre>`);function st(p,s){u(s,!0);let a=g(s,"ref",15);var n=Zp();m(n,t=>a(t),()=>a()),e(p,n),L()}var at=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script lang=&quot;ts&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; Dialog &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  let open = $state(false);
<span class="LineNr">  </span><span class="LineNr">  5 </span>  const setClose = () =&gt; open = false;
<span class="LineNr">  </span><span class="LineNr">  6 </span>  const setOpen = () =&gt; open = true;
<span class="LineNr">  </span><span class="LineNr">  7 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>
<span class="LineNr">  </span><span class="LineNr">  9 </span>&lt;button class=&quot;btn-primary mx-auto&quot; onclick=&#123;setOpen&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>  Open
<span class="LineNr">  </span><span class="LineNr"> 11 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>&lt;Dialog &#123;open&#125; close=&#123;setClose&#125; class=&quot;grid gap4&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>  &lt;h3&gt;Edit Account&lt;/h3&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>  &lt;p class=&quot;text-mutedfg mb2&quot;&gt;Make changes to your user profile here.&lt;/p&gt;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>
<span class="LineNr">  </span><span class="LineNr"> 17 </span>  &lt;label for=&quot;name&quot;&gt;Name&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>  &lt;input class=&quot;input-outline&quot; id=&quot;name&quot; placeholder=&quot;Enter your name&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>
<span class="LineNr">  </span><span class="LineNr"> 20 </span>  &lt;label for=&quot;email&quot;&gt;Email&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>  &lt;input
<span class="LineNr">  </span><span class="LineNr"> 22 </span>    type=&quot;email&quot;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>    class=&quot;input-outline&quot;
<span class="LineNr">  </span><span class="LineNr"> 24 </span>    id=&quot;email&quot;
<span class="LineNr">  </span><span class="LineNr"> 25 </span>    placeholder=&quot;Enter your email&quot;
<span class="LineNr">  </span><span class="LineNr"> 26 </span>  /&gt;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>
<span class="LineNr">  </span><span class="LineNr"> 28 </span>  &lt;div class=&quot;flex gap3 items-center ml-auto mt3&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 29 </span>    &lt;button class=&quot;btn-soft&quot; onclick=&#123;setClose&#125;&gt;Cancel&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 30 </span>    &lt;button class=&quot;btn-primary&quot;&gt;Save&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 31 </span>  &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 32 </span>&lt;/Dialog&gt;

</pre>`);function nt(p,s){u(s,!0);let a=g(s,"ref",15);var n=at();m(n,t=>a(t),()=>a()),e(p,n),L()}var pt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  2 </span>  Dropdown,
<span class="LineNr">  </span><span class="LineNr">  3 </span>  DropdownContent,
<span class="LineNr">  </span><span class="LineNr">  4 </span>  DropdownItem,
<span class="LineNr">  </span><span class="LineNr">  5 </span>  DropdownTrigger,
<span class="LineNr">  </span><span class="LineNr">  6 </span><span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  7 </span>
<span class="LineNr">  </span><span class="LineNr">  8 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  9 </span>  &lt;&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>    &lt;Dropdown&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>      &lt;DropdownTrigger&gt; Dropdown&lt;/DropdownTrigger&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>      &lt;DropdownContent&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>        &lt;DropdownItem&gt;Profile&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>        &lt;DropdownItem&gt;Billing&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>        &lt;DropdownItem&gt;Settings&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>        &lt;DropdownItem&gt;Keyboard shortcuts &lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>        &lt;hr <span class="Keyword">class</span>=<span class="String">&quot;brd my1&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>
<span class="LineNr">  </span><span class="LineNr"> 20 </span>        &lt;DropdownItem&gt;Team&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>        &lt;DropdownItem&gt;Invite users&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 22 </span>        &lt;DropdownItem&gt;New Team&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>        &lt;hr <span class="Keyword">class</span>=<span class="String">&quot;brd my1&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 24 </span>
<span class="LineNr">  </span><span class="LineNr"> 25 </span>        &lt;DropdownItem&gt;GitHub&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 26 </span>        &lt;DropdownItem&gt;Support&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>        &lt;DropdownItem disabled=<span class="Function">&#123;</span><span class="Boolean">true</span><span class="Function">&#125;</span>&gt;API&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 28 </span>
<span class="LineNr">  </span><span class="LineNr"> 29 </span>        &lt;hr <span class="Keyword">class</span>=<span class="String">&quot;brd my1&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 30 </span>        &lt;DropdownItem&gt;Log out&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 31 </span>      &lt;/DropdownContent&gt;
<span class="LineNr">  </span><span class="LineNr"> 32 </span>    &lt;/Dropdown&gt;
<span class="LineNr">  </span><span class="LineNr"> 33 </span>
<span class="LineNr">  </span><span class="LineNr"> 34 </span>    &lt;Dropdown&gt;
<span class="LineNr">  </span><span class="LineNr"> 35 </span>      &lt;DropdownTrigger <span class="Keyword">class</span>=<span class="String">&quot;btn-soft&quot;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 36 </span>        &lt;i <span class="Keyword">class</span>=<span class="String">&quot;i-line-md:star-filled&quot;</span>&gt;&lt;/i&gt;
<span class="LineNr">  </span><span class="LineNr"> 37 </span>        With icons
<span class="LineNr">  </span><span class="LineNr"> 38 </span>      &lt;/DropdownTrigger&gt;
<span class="LineNr">  </span><span class="LineNr"> 39 </span>
<span class="LineNr">  </span><span class="LineNr"> 40 </span>      &lt;DropdownContent&gt;
<span class="LineNr">  </span><span class="LineNr"> 41 </span>        &lt;DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 42 </span>          &lt;i <span class="Keyword">class</span>=<span class="String">&quot;i-line-md:account&quot;</span>&gt;&lt;/i&gt;Profile
<span class="LineNr">  </span><span class="LineNr"> 43 </span>        &lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 44 </span>        &lt;DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 45 </span>          &lt;i <span class="Keyword">class</span>=<span class="String">&quot;i-nimbus:cog&quot;</span>&gt;&lt;/i&gt;Settings
<span class="LineNr">  </span><span class="LineNr"> 46 </span>        &lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 47 </span>        &lt;DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 48 </span>          &lt;i <span class="Keyword">class</span>=<span class="String">&quot;i-line-md:logout&quot;</span>&gt;&lt;/i&gt;Log out
<span class="LineNr">  </span><span class="LineNr"> 49 </span>        &lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 50 </span>      &lt;/DropdownContent&gt;
<span class="LineNr">  </span><span class="LineNr"> 51 </span>    &lt;/Dropdown&gt;
<span class="LineNr">  </span><span class="LineNr"> 52 </span>  &lt;/&gt;;
<span class="LineNr">  </span><span class="LineNr"> 53 </span><span class="Function">&#125;</span>;

</pre>`);function tt(p,s){u(s,!0);let a=g(s,"ref",15);var n=pt();m(n,t=>a(t),()=>a()),e(p,n),L()}var et=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script lang=&quot;ts&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123;
<span class="LineNr">  </span><span class="LineNr">  3 </span>    Dropdown,
<span class="LineNr">  </span><span class="LineNr">  4 </span>    DropdownContent,
<span class="LineNr">  </span><span class="LineNr">  5 </span>    DropdownItem,
<span class="LineNr">  </span><span class="LineNr">  6 </span>    DropdownTrigger,
<span class="LineNr">  </span><span class="LineNr">  7 </span>  &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>
<span class="LineNr">  </span><span class="LineNr"> 10 </span>&lt;Dropdown&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>  &lt;DropdownTrigger class=&quot;btn-primary&quot;&gt; Click me&lt;/DropdownTrigger&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>  &lt;DropdownContent&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>    &lt;DropdownItem&gt;Profile&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>    &lt;DropdownItem&gt;Billing&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>    &lt;DropdownItem&gt;Settings&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>    &lt;DropdownItem&gt;Keyboard shortcuts &lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>    &lt;hr class=&quot;brd my1&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>
<span class="LineNr">  </span><span class="LineNr"> 20 </span>    &lt;DropdownItem&gt;Team&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>    &lt;DropdownItem&gt;Invite users&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 22 </span>    &lt;DropdownItem&gt;New Team&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>    &lt;hr class=&quot;brd my1&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 24 </span>
<span class="LineNr">  </span><span class="LineNr"> 25 </span>    &lt;DropdownItem&gt;GitHub&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 26 </span>    &lt;DropdownItem&gt;Support&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>    &lt;DropdownItem disabled=&#123;true&#125;&gt;API&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 28 </span>
<span class="LineNr">  </span><span class="LineNr"> 29 </span>    &lt;hr class=&quot;brd my1&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 30 </span>    &lt;DropdownItem&gt;Log out&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 31 </span>  &lt;/DropdownContent&gt;
<span class="LineNr">  </span><span class="LineNr"> 32 </span>&lt;/Dropdown&gt;
<span class="LineNr">  </span><span class="LineNr"> 33 </span>
<span class="LineNr">  </span><span class="LineNr"> 34 </span>&lt;Dropdown&gt;
<span class="LineNr">  </span><span class="LineNr"> 35 </span>  &lt;DropdownTrigger class=&quot;btn-soft&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 36 </span>    &lt;i class=&quot;i-line-md:star-filled&quot;&gt;&lt;/i&gt;
<span class="LineNr">  </span><span class="LineNr"> 37 </span>    With icons
<span class="LineNr">  </span><span class="LineNr"> 38 </span>  &lt;/DropdownTrigger&gt;
<span class="LineNr">  </span><span class="LineNr"> 39 </span>
<span class="LineNr">  </span><span class="LineNr"> 40 </span>  &lt;DropdownContent&gt;
<span class="LineNr">  </span><span class="LineNr"> 41 </span>    &lt;DropdownItem&gt; &lt;i class=&quot;i-line-md:account&quot;&gt;&lt;/i&gt;Profile&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 42 </span>    &lt;DropdownItem&gt;&lt;i class=&quot;i-nimbus:cog&quot;&gt;&lt;/i&gt;Settings&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 43 </span>    &lt;DropdownItem&gt; &lt;i class=&quot;i-line-md:logout&quot;&gt;&lt;/i&gt;Log out&lt;/DropdownItem&gt;
<span class="LineNr">  </span><span class="LineNr"> 44 </span>  &lt;/DropdownContent&gt;
<span class="LineNr">  </span><span class="LineNr"> 45 </span>&lt;/Dropdown&gt;

</pre>`);function lt(p,s){u(s,!0);let a=g(s,"ref",15);var n=et();m(n,t=>a(t),()=>a()),e(p,n),L()}var ct=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> Input <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> useState <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  3 </span>
<span class="LineNr">  </span><span class="LineNr">  4 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>  <span class="Keyword">const</span> <span class="Function">[</span>inputPasswdType, setInputPasswdType<span class="Function">]</span> = useState<span class="javaScriptParens">(</span><span class="String">&quot;password&quot;</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr">  6 </span>
<span class="LineNr">  </span><span class="LineNr">  7 </span>  <span class="Keyword">const</span> togglepasswdType = <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  8 </span>    setInputPasswdType<span class="javaScriptParens">(</span>inputPasswdType === <span class="String">&quot;text&quot;</span> ? <span class="String">&quot;password&quot;</span> : <span class="String">&quot;text&quot;</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr">  9 </span>  <span class="Function">&#125;</span>;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>
<span class="LineNr">  </span><span class="LineNr"> 11 </span>  <span class="Keyword">const</span> handleSubmit = <span class="javaScriptParens">(</span>e<span class="javaScriptParens">)</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr"> 12 </span>    e.preventDefault<span class="javaScriptParens">()</span>;
<span class="LineNr">  </span><span class="LineNr"> 13 </span>    <span class="Keyword">const</span> formData = <span class="Operator">new</span> FormData<span class="javaScriptParens">(</span>e.target<span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>    <span class="Keyword">const</span> email = formData.get<span class="javaScriptParens">(</span><span class="String">&quot;email&quot;</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>    <span class="Keyword">const</span> password = formData.get<span class="javaScriptParens">(</span><span class="String">&quot;passwd&quot;</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>
<span class="LineNr">  </span><span class="LineNr"> 17 </span>    <span class="Keyword">alert</span><span class="javaScriptParens">(</span><span class="String">\`</span><span class="Special">\\n</span><span class="String">Email: </span><span class="Special">$&#123;email&#125;\\n</span><span class="String">Password: </span><span class="Special">$&#123;password&#125;</span><span class="String">\`</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>  <span class="Function">&#125;</span>;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>
<span class="LineNr">  </span><span class="LineNr"> 20 </span>  <span class="Keyword">const</span> iconR = <span class="javaScriptParens">()</span> =&gt; <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr"> 21 </span>    &lt;button
<span class="LineNr">  </span><span class="LineNr"> 22 </span>      type=<span class="String">&quot;button&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 23 </span>      <span class="Keyword">class</span>=<span class="String">&quot;btn-ghost-eqsm rounded-full mr--2&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 24 </span>      aria-label=<span class="String">&quot;Toggle password visibility&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 25 </span>      onclick=<span class="Function">&#123;</span>togglepasswdType<span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 26 </span>    &gt;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>      &lt;i
<span class="LineNr">  </span><span class="LineNr"> 28 </span>        <span class="Keyword">class</span>=<span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr"> 29 </span>          inputPasswdType == <span class="String">&quot;text&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 30 </span>            ? <span class="String">&quot;i-heroicons-solid:eye&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 31 </span>            : <span class="String">&quot;i-heroicons-solid:eye-off&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 32 </span>        <span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 33 </span>      &gt;&lt;/i&gt;
<span class="LineNr">  </span><span class="LineNr"> 34 </span>    &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 35 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 36 </span>
<span class="LineNr">  </span><span class="LineNr"> 37 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr"> 38 </span>    &lt;form <span class="Keyword">class</span>=<span class="String">&quot;grid gap3&quot;</span> onsubmit=<span class="Function">&#123;</span>handleSubmit<span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 39 </span>      &lt;label <span class="Repeat">for</span>=<span class="String">&quot;email&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;reqstar&quot;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 40 </span>        Email
<span class="LineNr">  </span><span class="LineNr"> 41 </span>      &lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 42 </span>
<span class="LineNr">  </span><span class="LineNr"> 43 </span>      &lt;Input
<span class="LineNr">  </span><span class="LineNr"> 44 </span>        required
<span class="LineNr">  </span><span class="LineNr"> 45 </span>        name=<span class="String">&quot;email&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 46 </span>        id=<span class="String">&quot;email&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 47 </span>        placeholder=<span class="String">&quot;Enter email&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 48 </span>        type=<span class="String">&quot;email&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 49 </span>        iconL=<span class="String">&quot;i-line-md:email&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 50 </span>        <span class="Keyword">class</span>=<span class="String">&quot;grinput-outline mb3&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 51 </span>      /&gt;
<span class="LineNr">  </span><span class="LineNr"> 52 </span>
<span class="LineNr">  </span><span class="LineNr"> 53 </span>      &lt;label <span class="Repeat">for</span>=<span class="String">&quot;passwd&quot;</span>&gt;Password&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 54 </span>
<span class="LineNr">  </span><span class="LineNr"> 55 </span>      &lt;Input
<span class="LineNr">  </span><span class="LineNr"> 56 </span>        name=<span class="String">&quot;passwd&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 57 </span>        id=<span class="String">&quot;passwd&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 58 </span>        placeholder=<span class="String">&quot;Enter Password&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 59 </span>        type=<span class="Function">&#123;</span>inputPasswdType<span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 60 </span>        iconL=<span class="String">&quot;i-lucide:key-round&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 61 </span>        <span class="Keyword">class</span>=<span class="String">&quot;grinput-outline&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 62 </span>        iconR=<span class="Function">&#123;</span>iconR<span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 63 </span>      &gt;&lt;/Input&gt;
<span class="LineNr">  </span><span class="LineNr"> 64 </span>
<span class="LineNr">  </span><span class="LineNr"> 65 </span>      &lt;input type=<span class="String">&quot;submit&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;!btn-primary ml-auto mt3&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 66 </span>    &lt;/form&gt;
<span class="LineNr">  </span><span class="LineNr"> 67 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 68 </span><span class="Function">&#125;</span>;

</pre>`);function rt(p,s){u(s,!0);let a=g(s,"ref",15);var n=ct();m(n,t=>a(t),()=>a()),e(p,n),L()}var it=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script lang=&quot;ts&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; Input &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  let inputPasswdType = $state(&quot;password&quot;);
<span class="LineNr">  </span><span class="LineNr">  5 </span>
<span class="LineNr">  </span><span class="LineNr">  6 </span>  const togglepasswdType = () =&gt; &#123;
<span class="LineNr">  </span><span class="LineNr">  7 </span>    inputPasswdType = inputPasswdType === &quot;text&quot; ? &quot;password&quot; : &quot;text&quot;;
<span class="LineNr">  </span><span class="LineNr">  8 </span>  &#125;;
<span class="LineNr">  </span><span class="LineNr">  9 </span>
<span class="LineNr">  </span><span class="LineNr"> 10 </span>  const handleSubmit = (e: Event) =&gt; &#123;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>    e.preventDefault();
<span class="LineNr">  </span><span class="LineNr"> 12 </span>    const formData = new FormData(e.target as HTMLFormElement);
<span class="LineNr">  </span><span class="LineNr"> 13 </span>    const email = formData.get(&quot;email&quot;);
<span class="LineNr">  </span><span class="LineNr"> 14 </span>    const password = formData.get(&quot;passwd&quot;);
<span class="LineNr">  </span><span class="LineNr"> 15 </span>
<span class="LineNr">  </span><span class="LineNr"> 16 </span>    alert(\`\\nEmail: $&#123;email&#125;\\nPassword: $&#123;password&#125;\`);
<span class="LineNr">  </span><span class="LineNr"> 17 </span>  &#125;;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>
<span class="LineNr">  </span><span class="LineNr"> 20 </span>&lt;form class=&quot;grid gap3&quot; onsubmit=&#123;handleSubmit&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>  &lt;label for=&quot;email&quot; class=&quot;reqstar&quot;&gt;Email&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 22 </span>
<span class="LineNr">  </span><span class="LineNr"> 23 </span>  &lt;Input
<span class="LineNr">  </span><span class="LineNr"> 24 </span>    required
<span class="LineNr">  </span><span class="LineNr"> 25 </span>    name=&quot;email&quot;
<span class="LineNr">  </span><span class="LineNr"> 26 </span>    id=&quot;email&quot;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>    placeholder=&quot;Enter email&quot;
<span class="LineNr">  </span><span class="LineNr"> 28 </span>    type=&quot;email&quot;
<span class="LineNr">  </span><span class="LineNr"> 29 </span>    iconL=&quot;i-line-md:email&quot;
<span class="LineNr">  </span><span class="LineNr"> 30 </span>    class=&quot;grinput-outline mb3&quot;
<span class="LineNr">  </span><span class="LineNr"> 31 </span>  /&gt;
<span class="LineNr">  </span><span class="LineNr"> 32 </span>
<span class="LineNr">  </span><span class="LineNr"> 33 </span>  &lt;label for=&quot;passwd&quot;&gt;Password&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 34 </span>
<span class="LineNr">  </span><span class="LineNr"> 35 </span>  &lt;Input
<span class="LineNr">  </span><span class="LineNr"> 36 </span>    name=&quot;passwd&quot;
<span class="LineNr">  </span><span class="LineNr"> 37 </span>    id=&quot;passwd&quot;
<span class="LineNr">  </span><span class="LineNr"> 38 </span>    placeholder=&quot;Enter Password&quot;
<span class="LineNr">  </span><span class="LineNr"> 39 </span>    type=&#123;inputPasswdType&#125;
<span class="LineNr">  </span><span class="LineNr"> 40 </span>    iconL=&quot;i-lucide:key-round&quot;
<span class="LineNr">  </span><span class="LineNr"> 41 </span>    class=&quot;grinput-outline&quot;
<span class="LineNr">  </span><span class="LineNr"> 42 </span>  &gt;
<span class="LineNr">  </span><span class="LineNr"> 43 </span>    &#123;#snippet iconR()&#125;
<span class="LineNr">  </span><span class="LineNr"> 44 </span>      &lt;button
<span class="LineNr">  </span><span class="LineNr"> 45 </span>        type=&quot;button&quot;
<span class="LineNr">  </span><span class="LineNr"> 46 </span>        class=&quot;btn-ghost-eqsm rounded-full mr--2&quot;
<span class="LineNr">  </span><span class="LineNr"> 47 </span>        aria-label=&quot;Toggle password visibility&quot;
<span class="LineNr">  </span><span class="LineNr"> 48 </span>        onclick=&#123;togglepasswdType&#125;
<span class="LineNr">  </span><span class="LineNr"> 49 </span>      &gt;
<span class="LineNr">  </span><span class="LineNr"> 50 </span>        &lt;i
<span class="LineNr">  </span><span class="LineNr"> 51 </span>          class=&#123;inputPasswdType == &quot;text&quot;
<span class="LineNr">  </span><span class="LineNr"> 52 </span>          ? &quot;i-heroicons-solid:eye&quot;
<span class="LineNr">  </span><span class="LineNr"> 53 </span>          : &quot;i-heroicons-solid:eye-off&quot;&#125;
<span class="LineNr">  </span><span class="LineNr"> 54 </span>        &gt;&lt;/i&gt;
<span class="LineNr">  </span><span class="LineNr"> 55 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 56 </span>    &#123;/snippet&#125;
<span class="LineNr">  </span><span class="LineNr"> 57 </span>  &lt;/Input&gt;
<span class="LineNr">  </span><span class="LineNr"> 58 </span>
<span class="LineNr">  </span><span class="LineNr"> 59 </span>  &lt;input type=&quot;submit&quot; class=&quot;!btn-primary ml-auto mt3&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 60 </span>&lt;/form&gt;

</pre>`);function ot(p,s){u(s,!0);let a=g(s,"ref",15);var n=it();m(n,t=>a(t),()=>a()),e(p,n),L()}var ut=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;input class=&quot;input&quot; placeholder=&quot;Enter name&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>&lt;input class=&quot;input-outline&quot; placeholder=&quot;Enter name&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  3 </span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>&lt;br /&gt;
<span class="LineNr">  </span><span class="LineNr">  5 </span>&lt;p&gt;sizes&lt;/p&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>
<span class="LineNr">  </span><span class="LineNr">  7 </span>&lt;input class=&quot;input-outline-sm&quot; placeholder=&quot;Enter name&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;input class=&quot;input-outline-md&quot; disabled placeholder=&quot;Enter name&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>&lt;input class=&quot;input-lg&quot; placeholder=&quot;Enter name&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>&lt;input class=&quot;input-outline-xl&quot; placeholder=&quot;Enter name&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>
<span class="LineNr">  </span><span class="LineNr"> 12 </span>&lt;p&gt;Icons&lt;/p&gt;
<span class="LineNr">  </span><span class="LineNr"> 13 </span>
<span class="LineNr">  </span><span class="LineNr"> 14 </span>&lt;div class=&quot;grid-(~ cols-2 gap5)&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>  &lt;div class=&quot;grinput&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>    &lt;i class=&quot;i-ri:user-line&quot;&gt;&lt;/i&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>    &lt;input placeholder=&quot;Enter name&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>  &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>
<span class="LineNr">  </span><span class="LineNr"> 20 </span>  &lt;div class=&quot;grinput-outline&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>    &lt;i class=&quot;i-line-md:email-filled&quot;&gt;&lt;/i&gt;
<span class="LineNr">  </span><span class="LineNr"> 22 </span>    &lt;input placeholder=&quot;Enter name&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>  &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 24 </span>
<span class="LineNr">  </span><span class="LineNr"> 25 </span>  &lt;div class=&quot;grinput p0&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 26 </span>    &lt;span class=&quot;bg-border p2 px3 rounded-l&quot;&gt;$&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>    &lt;input placeholder=&quot;Enter price&quot; type=&quot;number&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 28 </span>  &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 29 </span>
<span class="LineNr">  </span><span class="LineNr"> 30 </span>  &lt;div class=&quot;grinput p0&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 31 </span>    &lt;span class=&quot;bg-border p2 px3 rounded-l&quot;&gt;$&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 32 </span>    &lt;input placeholder=&quot;Enter salary&quot; disabled /&gt;
<span class="LineNr">  </span><span class="LineNr"> 33 </span>  &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 34 </span>
<span class="LineNr">  </span><span class="LineNr"> 35 </span>  &lt;div class=&quot;grinput-outline p0 col-span-2&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 36 </span>    &lt;span class=&quot;bg-mutedbg p2 px3 rounded-l&quot;&gt;$&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 37 </span>    &lt;input placeholder=&quot;Enter name&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 38 </span>    &lt;span class=&quot;bg-mutedbg p2 rounded-r&quot;&gt;USD&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 39 </span>  &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 40 </span>&lt;/div&gt;

</pre>`);function Lt(p,s){u(s,!0);let a=g(s,"ref",15);var n=ut();m(n,t=>a(t),()=>a()),e(p,n),L()}var Nt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> Input <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span>
<span class="LineNr">  </span><span class="LineNr">  3 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>    &lt;div&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>      &lt;Input placeholder=<span class="String">&quot;size (sm)&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;grinput-sm&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>      &lt;Input placeholder=<span class="String">&quot;size (md)&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;grinput-md&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>      &lt;Input placeholder=<span class="String">&quot;size (lg)&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;grinput-lg&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>      &lt;Input placeholder=<span class="String">&quot;size (xl)&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;grinput-outline-xl&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>      &lt;Input placeholder=<span class="String">&quot;size (2)&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;grinput-2&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>      &lt;Input placeholder=<span class="String">&quot;size (2.3)&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;grinput-2.3&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>      &lt;Input placeholder=<span class="String">&quot;size (2.9)&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;grinput-outline-2.9&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 13 </span>    &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 15 </span><span class="Function">&#125;</span>;

</pre>`);function dt(p,s){u(s,!0);let a=g(s,"ref",15);var n=Nt();m(n,t=>a(t),()=>a()),e(p,n),L()}var gt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script lang=&quot;ts&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; Input &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>&lt;Input placeholder=&quot;size (sm)&quot; class=&quot;grinput-sm&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>&lt;Input placeholder=&quot;size (md)&quot; class=&quot;grinput-md&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>&lt;Input placeholder=&quot;size (lg)&quot; class=&quot;grinput-lg&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;Input placeholder=&quot;size (xl)&quot; class=&quot;grinput-outline-xl&quot; /&gt;

</pre>`);function qt(p,s){u(s,!0);let a=g(s,"ref",15);var n=gt();m(n,t=>a(t),()=>a()),e(p,n),L()}var bt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> Input <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span>
<span class="LineNr">  </span><span class="LineNr">  3 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>    &lt;div&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>      &lt;Input placeholder=<span class="String">&quot;Enter name&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>      &lt;Input placeholder=<span class="String">&quot;Enter name&quot;</span> <span class="Keyword">class</span>=<span class="String">&quot;grinput-outline&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>    &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 10 </span><span class="Function">&#125;</span>;

</pre>`);function mt(p,s){u(s,!0);let a=g(s,"ref",15);var n=bt();m(n,t=>a(t),()=>a()),e(p,n),L()}var vt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script lang=&quot;ts&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; Input &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>&lt;Input placeholder=&quot;Enter name&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>&lt;Input placeholder=&quot;Enter name&quot; class=&quot;grinput-outline&quot; /&gt;

</pre>`);function ft(p,s){u(s,!0);let a=g(s,"ref",15);var n=vt();m(n,t=>a(t),()=>a()),e(p,n),L()}var ht=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;input type=&quot;radio&quot; class=&quot;radio&quot; name=&quot;group1&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>&lt;input type=&quot;radio&quot; class=&quot;radio-primary&quot; name=&quot;group1&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;input type=&quot;radio&quot; class=&quot;radio-red&quot; name=&quot;group1&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>&lt;input type=&quot;radio&quot; class=&quot;radio-amber4&quot; name=&quot;group1&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  5 </span>
<span class="LineNr">  </span><span class="LineNr">  6 </span>&lt;hr class=&quot;w-full brd border-input my2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;input type=&quot;radio&quot; class=&quot;radio-sm&quot; name=&quot;group2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>&lt;input type=&quot;radio&quot; class=&quot;radio-md&quot; name=&quot;group2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>&lt;input type=&quot;radio&quot; class=&quot;radio-lg&quot; name=&quot;group2&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>&lt;input type=&quot;radio&quot; class=&quot;radio-xl&quot; name=&quot;group2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>&lt;hr class=&quot;w-full brd border-input my2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>
<span class="LineNr">  </span><span class="LineNr"> 15 </span>&lt;input type=&quot;radio&quot; class=&quot;radio-sm&quot; name=&quot;group3&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>&lt;input type=&quot;radio&quot; class=&quot;radio-indigo-md&quot; name=&quot;group3&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>&lt;input type=&quot;radio&quot; class=&quot;radio-red-lg&quot; name=&quot;group3&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>&lt;input type=&quot;radio&quot; class=&quot;radio-slate-xl&quot; name=&quot;group3&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>
<span class="LineNr">  </span><span class="LineNr"> 20 </span>&lt;hr class=&quot;w-full brd border-input my2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>
<span class="LineNr">  </span><span class="LineNr"> 22 </span>&lt;input type=&quot;radio&quot; class=&quot;radiob-blue&quot; name=&quot;group4&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>&lt;input type=&quot;radio&quot; class=&quot;radiob-amber&quot; name=&quot;group4&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 24 </span>&lt;input type=&quot;radio&quot; class=&quot;radiob-emerald&quot; name=&quot;group4&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 25 </span>&lt;input type=&quot;radio&quot; class=&quot;radiob&quot; name=&quot;group4&quot; defaultChecked /&gt;

</pre>`);function St(p,s){u(s,!0);let a=g(s,"ref",15);var n=ht();m(n,t=>a(t),()=>a()),e(p,n),L()}var yt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;input type=&quot;radio&quot; id=&quot;option1&quot; name=&quot;group&quot; class=&quot;radio&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>&lt;label for=&quot;option1&quot;&gt;Arch&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr">  3 </span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>&lt;input type=&quot;radio&quot; id=&quot;option2&quot; name=&quot;group&quot; class=&quot;radio&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  5 </span>&lt;label for=&quot;option2&quot;&gt;Void&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>
<span class="LineNr">  </span><span class="LineNr">  7 </span>&lt;input type=&quot;radio&quot; id=&quot;option3&quot; name=&quot;group&quot; class=&quot;radiob&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;label for=&quot;option3&quot;&gt;Ubuntu&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>
<span class="LineNr">  </span><span class="LineNr"> 10 </span>&lt;input type=&quot;radio&quot; id=&quot;option4&quot; name=&quot;group&quot; class=&quot;radiob&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>&lt;label for=&quot;option4&quot;&gt;Fedora&lt;/label&gt;

</pre>`);function wt(p,s){u(s,!0);let a=g(s,"ref",15);var n=yt();m(n,t=>a(t),()=>a()),e(p,n),L()}var xt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;div
<span class="LineNr">  </span><span class="LineNr">  2 </span>  class=&quot;[&amp;&gt;*:nth-child(even)]:ml3 gap-(x3 y7) grid-(~ cols-[auto_1fr]) items-center&quot;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>  &lt;input
<span class="LineNr">  </span><span class="LineNr">  5 </span>    type=&quot;radio&quot;
<span class="LineNr">  </span><span class="LineNr">  6 </span>    id=&quot;email&quot;
<span class="LineNr">  </span><span class="LineNr">  7 </span>    name=&quot;x&quot;
<span class="LineNr">  </span><span class="LineNr">  8 </span>    class=&quot;radio&quot;
<span class="LineNr">  </span><span class="LineNr">  9 </span>    defaultChecked
<span class="LineNr">  </span><span class="LineNr"> 10 </span>  /&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>  &lt;label for=&quot;email&quot;&gt;Email notifications&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>  &lt;input type=&quot;radio&quot; id=&quot;sms&quot; name=&quot;x&quot; class=&quot;radio-blue&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>  &lt;div&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>    &lt;label for=&quot;sms&quot;&gt;SMS notifications&lt;/label&gt;&lt;br /&gt;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>    &lt;span class=&quot;text-(mutedfg sm)&quot;&gt;Standard messaging rates may apply&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>  &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>
<span class="LineNr">  </span><span class="LineNr"> 19 </span>  &lt;input type=&quot;radio&quot; id=&quot;none&quot; name=&quot;x&quot; class=&quot;radio-slate&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 20 </span>  &lt;label for=&quot;none&quot;&gt;No notifications&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>
<span class="LineNr">  </span><span class="LineNr"> 22 </span>  &lt;input type=&quot;radio&quot; id=&quot;disagree&quot; name=&quot;x&quot; class=&quot;radio-red&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>  &lt;label for=&quot;disagree&quot;&gt;Stop Bothering!&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 24 </span>&lt;/div&gt;

</pre>`);function kt(p,s){u(s,!0);let a=g(s,"ref",15);var n=xt();m(n,t=>a(t),()=>a()),e(p,n),L()}var _t=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> Select <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span>
<span class="LineNr">  </span><span class="LineNr">  3 </span><span class="Keyword">const</span> options = <span class="Function">[</span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;1&quot;</span>, name: <span class="String">&quot;Option 1&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr">  5 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;2&quot;</span>, name: <span class="String">&quot;Option 2&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr">  6 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;3&quot;</span>, name: <span class="String">&quot;Option 3&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr">  7 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;4&quot;</span>, name: <span class="String">&quot;Option 4&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr">  8 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;5&quot;</span>, name: <span class="String">&quot;Option 5 keyboad hehe&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr">  9 </span><span class="Function">]</span>;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>
<span class="LineNr">  </span><span class="LineNr"> 11 </span><span class="Keyword">const</span> options2 = <span class="Function">[</span>
<span class="LineNr">  </span><span class="LineNr"> 12 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;apple&quot;</span>, name: <span class="String">&quot;Apple &quot;</span>, iconL: <span class="String">&quot;i-noto:red-apple&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr"> 13 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;lime&quot;</span>, name: <span class="String">&quot;Lime&quot;</span>, iconL: <span class="String">&quot;i-noto:lime&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr"> 14 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;watermelon&quot;</span>, name: <span class="String">&quot;Watermelon&quot;</span>, iconL: <span class="String">&quot;i-noto:watermelon&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr"> 15 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;strawberry&quot;</span>, name: <span class="String">&quot;Strawberry&quot;</span>, iconL: <span class="String">&quot;i-noto:strawberry&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr"> 16 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;mango&quot;</span>, name: <span class="String">&quot;Mango&quot;</span>, iconL: <span class="String">&quot;i-noto:mango&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr"> 17 </span><span class="Function">]</span>;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>
<span class="LineNr">  </span><span class="LineNr"> 19 </span><span class="Keyword">const</span> options3 = <span class="Function">[</span>
<span class="LineNr">  </span><span class="LineNr"> 20 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;arch&quot;</span>, name: <span class="String">&quot;Arch Linux &quot;</span>, iconL: <span class="String">&quot;i-logos:archlinux&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr"> 21 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;ubuntu&quot;</span>, name: <span class="String">&quot;Ubuntu&quot;</span>, iconL: <span class="String">&quot;i-logos:ubuntu&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr"> 22 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;fedora&quot;</span>, name: <span class="String">&quot;Fedora&quot;</span>, iconL: <span class="String">&quot;i-logos:fedora&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr"> 23 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;manjaro&quot;</span>, name: <span class="String">&quot;Manjaro&quot;</span>, iconL: <span class="String">&quot;i-logos:manjaro&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr"> 24 </span>  <span class="Function">&#123;</span> value: <span class="String">&quot;artix&quot;</span>, name: <span class="String">&quot;Artix &quot;</span>, iconL: <span class="String">&quot;i-devicon:artixlinux&quot;</span> <span class="Function">&#125;</span>,
<span class="LineNr">  </span><span class="LineNr"> 25 </span><span class="Function">]</span>;
<span class="LineNr">  </span><span class="LineNr"> 26 </span>
<span class="LineNr">  </span><span class="LineNr"> 27 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr"> 28 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr"> 29 </span>    &lt;div <span class="Keyword">class</span>=<span class="String">&quot;grid-(~ cols-2 gap3) w-2/3&quot;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 30 </span>      &lt;Select
<span class="LineNr">  </span><span class="LineNr"> 31 </span>        options=<span class="Function">&#123;</span>options<span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 32 </span>        dropdownCss=<span class="String">&quot;bg-mutedbg border-0&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 33 </span>        optionCss=<span class="String">&quot;data-active:bg-input&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 34 </span>      /&gt;
<span class="LineNr">  </span><span class="LineNr"> 35 </span>
<span class="LineNr">  </span><span class="LineNr"> 36 </span>      &lt;Select
<span class="LineNr">  </span><span class="LineNr"> 37 </span>        options=<span class="Function">&#123;</span>options2<span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 38 </span>        triggerProps=<span class="Function">&#123;&#123;</span> <span class="Keyword">class</span>: <span class="String">&quot;btn-outline&quot;</span> <span class="Function">&#125;&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 39 </span>        placeholder=<span class="String">&quot;Select fruit&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 40 </span>      /&gt;
<span class="LineNr">  </span><span class="LineNr"> 41 </span>
<span class="LineNr">  </span><span class="LineNr"> 42 </span>      &lt;Select
<span class="LineNr">  </span><span class="LineNr"> 43 </span>        options=<span class="Function">&#123;</span>options2<span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 44 </span>        triggerProps=<span class="Function">&#123;&#123;</span> <span class="Keyword">class</span>: <span class="String">&quot;btn-outline&quot;</span>, disabled: <span class="Boolean">true</span> <span class="Function">&#125;&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 45 </span>        placeholder=<span class="String">&quot;Disabled Select&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 46 </span>      /&gt;
<span class="LineNr">  </span><span class="LineNr"> 47 </span>      &lt;Select options=<span class="Function">&#123;</span>options3<span class="Function">&#125;</span> placeholder=<span class="String">&quot;Select distro&quot;</span> optinCss=<span class="String">&quot;gap4&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 48 </span>    &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 49 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 50 </span><span class="Function">&#125;</span>;

</pre>`);function Ft(p,s){u(s,!0);let a=g(s,"ref",15);var n=_t();m(n,t=>a(t),()=>a()),e(p,n),L()}var Pt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script lang=&quot;ts&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; Select &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  const options: any = [
<span class="LineNr">  </span><span class="LineNr">  5 </span>    &#123; value: &quot;1&quot;, name: &quot;Option 1&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr">  6 </span>    &#123; value: &quot;2&quot;, name: &quot;Option 2&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr">  7 </span>    &#123; value: &quot;3&quot;, name: &quot;Option 3&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr">  8 </span>    &#123; value: &quot;4&quot;, name: &quot;Option 4&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr">  9 </span>    &#123; value: &quot;5&quot;, name: &quot;Option 5 keyboad hehe&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr"> 10 </span>  ];
<span class="LineNr">  </span><span class="LineNr"> 11 </span>
<span class="LineNr">  </span><span class="LineNr"> 12 </span>  const options2: any = [
<span class="LineNr">  </span><span class="LineNr"> 13 </span>    // not all fruits have red name TO SUPERMAVEN AI BRUH
<span class="LineNr">  </span><span class="LineNr"> 14 </span>    &#123; value: &quot;apple&quot;, name: &quot;Apple &quot;, iconL: &quot;i-noto:red-apple&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr"> 15 </span>    &#123; value: &quot;lime&quot;, name: &quot;Lime&quot;, iconL: &quot;i-noto:lime&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr"> 16 </span>    &#123; value: &quot;watermelon&quot;, name: &quot;Watermelon&quot;, iconL: &quot;i-noto:watermelon&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr"> 17 </span>    &#123; value: &quot;strawberry&quot;, name: &quot;Strawberry&quot;, iconL: &quot;i-noto:strawberry&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr"> 18 </span>    &#123; value: &quot;mango&quot;, name: &quot;Mango&quot;, iconL: &quot;i-noto:mango&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr"> 19 </span>  ];
<span class="LineNr">  </span><span class="LineNr"> 20 </span>
<span class="LineNr">  </span><span class="LineNr"> 21 </span>  const options3: any = [
<span class="LineNr">  </span><span class="LineNr"> 22 </span>    &#123; value: &quot;arch&quot;, name: &quot;Arch Linux &quot;, iconL: &quot;i-logos:archlinux&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr"> 23 </span>    &#123; value: &quot;ubuntu&quot;, name: &quot;Ubuntu&quot;, iconL: &quot;i-logos:ubuntu&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr"> 24 </span>    &#123; value: &quot;fedora&quot;, name: &quot;Fedora&quot;, iconL: &quot;i-logos:fedora&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr"> 25 </span>    &#123; value: &quot;manjaro&quot;, name: &quot;Manjaro&quot;, iconL: &quot;i-logos:manjaro&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr"> 26 </span>    &#123; value: &quot;artix&quot;, name: &quot;Artix &quot;, iconL: &quot;i-devicon:artixlinux&quot; &#125;,
<span class="LineNr">  </span><span class="LineNr"> 27 </span>  ];
<span class="LineNr">  </span><span class="LineNr"> 28 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr"> 29 </span>
<span class="LineNr">  </span><span class="LineNr"> 30 </span>&lt;div class=&quot;grid-(~ cols-2 gap3) w-2/3&quot;&gt;
<span class="LineNr">  </span><span class="LineNr"> 31 </span>  &lt;Select
<span class="LineNr">  </span><span class="LineNr"> 32 </span>    &#123;options&#125;
<span class="LineNr">  </span><span class="LineNr"> 33 </span>    dropdownCss=&quot;bg-mutedbg border-0&quot;
<span class="LineNr">  </span><span class="LineNr"> 34 </span>    optionCss=&quot;data-active:bg-input&quot;
<span class="LineNr">  </span><span class="LineNr"> 35 </span>  /&gt;
<span class="LineNr">  </span><span class="LineNr"> 36 </span>
<span class="LineNr">  </span><span class="LineNr"> 37 </span>  &lt;Select
<span class="LineNr">  </span><span class="LineNr"> 38 </span>    options=&#123;options2&#125;
<span class="LineNr">  </span><span class="LineNr"> 39 </span>    triggerProps=&#123;&#123; class: &quot;btn-outline&quot; &#125;&#125;
<span class="LineNr">  </span><span class="LineNr"> 40 </span>    placeholder=&quot;Select fruit&quot;
<span class="LineNr">  </span><span class="LineNr"> 41 </span>  /&gt;
<span class="LineNr">  </span><span class="LineNr"> 42 </span>
<span class="LineNr">  </span><span class="LineNr"> 43 </span>  &lt;Select
<span class="LineNr">  </span><span class="LineNr"> 44 </span>    options=&#123;options2&#125;
<span class="LineNr">  </span><span class="LineNr"> 45 </span>    triggerProps=&#123;&#123; class: &quot;btn-outline&quot;, disabled: true &#125;&#125;
<span class="LineNr">  </span><span class="LineNr"> 46 </span>    placeholder=&quot;Disabled Select&quot;
<span class="LineNr">  </span><span class="LineNr"> 47 </span>  /&gt;
<span class="LineNr">  </span><span class="LineNr"> 48 </span>  &lt;Select options=&#123;options3&#125; placeholder=&quot;Select distro&quot; optinCss=&quot;gap4&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 49 </span>&lt;/div&gt;

</pre>`);function jt(p,s){u(s,!0);let a=g(s,"ref",15);var n=Pt();m(n,t=>a(t),()=>a()),e(p,n),L()}var Ct=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-flat-md-primary&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-flat-md-red&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-flat-md-amber4&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  5 </span>
<span class="LineNr">  </span><span class="LineNr">  6 </span>&lt;hr class=&quot;w-full brd border-input my2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  7 </span>
<span class="LineNr">  </span><span class="LineNr">  8 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-flat-xs&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-flat-sm&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-flat-md&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-flat-lg&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-flat-xl&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 13 </span>
<span class="LineNr">  </span><span class="LineNr"> 14 </span>&lt;hr class=&quot;w-full brd border-input my2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>
<span class="LineNr">  </span><span class="LineNr"> 16 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-flat-xs&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-line-sm&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-line-md-indigo&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-line-lg-red&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 20 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-line-xl-slate&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>
<span class="LineNr">  </span><span class="LineNr"> 22 </span>&lt;hr class=&quot;w-full brd border-input my2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>
<span class="LineNr">  </span><span class="LineNr"> 24 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-knob-md-blue&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 25 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-knob-md-amber&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 26 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-flat-md-emerald&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-knob&quot; name=&quot;group4&quot; defaultChecked /&gt;

</pre>`);function Dt(p,s){u(s,!0);let a=g(s,"ref",15);var n=Ct();m(n,t=>a(t),()=>a()),e(p,n),L()}var $t=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-line&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-flat&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&lt;input type=&quot;checkbox&quot; class=&quot;switch-knob&quot; /&gt;

</pre>`);function Kt(p,s){u(s,!0);let a=g(s,"ref",15);var n=$t();m(n,t=>a(t),()=>a()),e(p,n),L()}var Tt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;div
<span class="LineNr">  </span><span class="LineNr">  2 </span>  class=&quot;[&amp;&gt;*:nth-child(even)]:ml3 gap-(x3 y7) grid-(~ cols-[auto_1fr]) items-center&quot;
<span class="LineNr">  </span><span class="LineNr">  3 </span>&gt;
<span class="LineNr">  </span><span class="LineNr">  4 </span>  &lt;input type=&quot;checkbox&quot; id=&quot;email&quot; class=&quot;switch-line&quot; defaultChecked /&gt;
<span class="LineNr">  </span><span class="LineNr">  5 </span>  &lt;label for=&quot;email&quot;&gt;Email notifications&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr">  6 </span>
<span class="LineNr">  </span><span class="LineNr">  7 </span>  &lt;input type=&quot;checkbox&quot; id=&quot;sms&quot; class=&quot;switch-line&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr">  8 </span>  &lt;div&gt;
<span class="LineNr">  </span><span class="LineNr">  9 </span>    &lt;label for=&quot;sms&quot;&gt;SMS notifications&lt;/label&gt;&lt;br /&gt;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>    &lt;span class=&quot;text-(mutedfg sm)&quot;&gt;Standard messaging rates may apply&lt;/span&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>  &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>  &lt;input type=&quot;checkbox&quot; id=&quot;none&quot; class=&quot;switch&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>  &lt;label for=&quot;none&quot;&gt;No notifications&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>
<span class="LineNr">  </span><span class="LineNr"> 16 </span>  &lt;input type=&quot;checkbox&quot; id=&quot;disagree&quot; class=&quot;switch&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>  &lt;label for=&quot;disagree&quot;&gt;Stop Bothering!&lt;/label&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>&lt;/div&gt;

</pre>`);function It(p,s){u(s,!0);let a=g(s,"ref",15);var n=Tt();m(n,t=>a(t),()=>a()),e(p,n),L()}var Bt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> toast <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span>
<span class="LineNr">  </span><span class="LineNr">  3 </span><span class="Keyword">const</span> newToast = <span class="javaScriptParens">(</span>css<span class="javaScriptParens">)</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  toast<span class="javaScriptParens">(</span><span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>    title: <span class="String">&quot;Toast Activated&quot;</span>,
<span class="LineNr">  </span><span class="LineNr">  6 </span>    txt: <span class="String">&quot;Customize this text to suit your message&quot;</span>,
<span class="LineNr">  </span><span class="LineNr">  7 </span>    css: css,
<span class="LineNr">  </span><span class="LineNr">  8 </span>  <span class="Function">&#125;</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr">  9 </span><span class="Function">&#125;</span>;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>
<span class="LineNr">  </span><span class="LineNr"> 11 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr"> 12 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>    &lt;div&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>      &lt;button
<span class="LineNr">  </span><span class="LineNr"> 15 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-outline text-indigo&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 16 </span>        onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-flat-indigo&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 17 </span>      &gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>        Indigo
<span class="LineNr">  </span><span class="LineNr"> 19 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 20 </span>
<span class="LineNr">  </span><span class="LineNr"> 21 </span>      &lt;button
<span class="LineNr">  </span><span class="LineNr"> 22 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-outline text-sky&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 23 </span>        onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-flat-sky&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 24 </span>      &gt;
<span class="LineNr">  </span><span class="LineNr"> 25 </span>        Sky
<span class="LineNr">  </span><span class="LineNr"> 26 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>
<span class="LineNr">  </span><span class="LineNr"> 28 </span>      &lt;button
<span class="LineNr">  </span><span class="LineNr"> 29 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-outline text-danger&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 30 </span>        onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-flat-danger&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 31 </span>      &gt;
<span class="LineNr">  </span><span class="LineNr"> 32 </span>        Danger
<span class="LineNr">  </span><span class="LineNr"> 33 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 34 </span>
<span class="LineNr">  </span><span class="LineNr"> 35 </span>      &lt;button
<span class="LineNr">  </span><span class="LineNr"> 36 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-outline text-success&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 37 </span>        onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-flat-success&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 38 </span>      &gt;
<span class="LineNr">  </span><span class="LineNr"> 39 </span>        Success
<span class="LineNr">  </span><span class="LineNr"> 40 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 41 </span>
<span class="LineNr">  </span><span class="LineNr"> 42 </span>      &lt;button
<span class="LineNr">  </span><span class="LineNr"> 43 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-outline text-warning&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 44 </span>        onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-flat-warning&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 45 </span>      &gt;
<span class="LineNr">  </span><span class="LineNr"> 46 </span>        Warning
<span class="LineNr">  </span><span class="LineNr"> 47 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 48 </span>
<span class="LineNr">  </span><span class="LineNr"> 49 </span>      &lt;hr <span class="Keyword">class</span>=<span class="String">&quot;brd w-full my2&quot;</span> /&gt;
<span class="LineNr">  </span><span class="LineNr"> 50 </span>
<span class="LineNr">  </span><span class="LineNr"> 51 </span>      &lt;button
<span class="LineNr">  </span><span class="LineNr"> 52 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-outline text-indigo&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 53 </span>        onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-outline-indigo&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 54 </span>      &gt;
<span class="LineNr">  </span><span class="LineNr"> 55 </span>        Indigo
<span class="LineNr">  </span><span class="LineNr"> 56 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 57 </span>
<span class="LineNr">  </span><span class="LineNr"> 58 </span>      &lt;button
<span class="LineNr">  </span><span class="LineNr"> 59 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-outline text-sky&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 60 </span>        onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-outline-sky&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 61 </span>      &gt;
<span class="LineNr">  </span><span class="LineNr"> 62 </span>        Sky
<span class="LineNr">  </span><span class="LineNr"> 63 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 64 </span>
<span class="LineNr">  </span><span class="LineNr"> 65 </span>      &lt;button
<span class="LineNr">  </span><span class="LineNr"> 66 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-outline text-danger&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 67 </span>        onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-outline-danger&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 68 </span>      &gt;
<span class="LineNr">  </span><span class="LineNr"> 69 </span>        Danger
<span class="LineNr">  </span><span class="LineNr"> 70 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 71 </span>
<span class="LineNr">  </span><span class="LineNr"> 72 </span>      &lt;button
<span class="LineNr">  </span><span class="LineNr"> 73 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-outline text-success&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 74 </span>        onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-outline-success&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 75 </span>      &gt;
<span class="LineNr">  </span><span class="LineNr"> 76 </span>        Success
<span class="LineNr">  </span><span class="LineNr"> 77 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 78 </span>
<span class="LineNr">  </span><span class="LineNr"> 79 </span>      &lt;button
<span class="LineNr">  </span><span class="LineNr"> 80 </span>        <span class="Keyword">class</span>=<span class="String">&quot;btn-outline text-warning&quot;</span>
<span class="LineNr">  </span><span class="LineNr"> 81 </span>        onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-outline-warning&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>
<span class="LineNr">  </span><span class="LineNr"> 82 </span>      &gt;
<span class="LineNr">  </span><span class="LineNr"> 83 </span>        Warning
<span class="LineNr">  </span><span class="LineNr"> 84 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 85 </span>    &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 86 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 87 </span><span class="Function">&#125;</span>;

</pre>`);function zt(p,s){u(s,!0);let a=g(s,"ref",15);var n=Bt();m(n,t=>a(t),()=>a()),e(p,n),L()}var Et=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; toast &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  const newToast = (css) =&gt; &#123;
<span class="LineNr">  </span><span class="LineNr">  5 </span>    toast(&#123;
<span class="LineNr">  </span><span class="LineNr">  6 </span>      title: &quot;Toast Activated&quot;,
<span class="LineNr">  </span><span class="LineNr">  7 </span>      txt: &quot;Customize this text to suit your message&quot;,
<span class="LineNr">  </span><span class="LineNr">  8 </span>      css: css,
<span class="LineNr">  </span><span class="LineNr">  9 </span>    &#125;);
<span class="LineNr">  </span><span class="LineNr"> 10 </span>  &#125;;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>&lt;button
<span class="LineNr">  </span><span class="LineNr"> 14 </span>  class=&quot;btn-outline text-indigo&quot;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>  onclick=&#123;() =&gt; newToast(&quot;toast-flat-indigo&quot;)&#125;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>  Indigo
<span class="LineNr">  </span><span class="LineNr"> 18 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>
<span class="LineNr">  </span><span class="LineNr"> 20 </span>&lt;button class=&quot;btn-outline text-sky&quot; onclick=&#123;() =&gt; newToast(&quot;toast-flat-sky&quot;)&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>  Sky
<span class="LineNr">  </span><span class="LineNr"> 22 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>
<span class="LineNr">  </span><span class="LineNr"> 24 </span>&lt;button
<span class="LineNr">  </span><span class="LineNr"> 25 </span>  class=&quot;btn-outline text-danger&quot;
<span class="LineNr">  </span><span class="LineNr"> 26 </span>  onclick=&#123;() =&gt; newToast(&quot;toast-flat-danger&quot;)&#125;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 28 </span>  Danger
<span class="LineNr">  </span><span class="LineNr"> 29 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 30 </span>
<span class="LineNr">  </span><span class="LineNr"> 31 </span>&lt;button
<span class="LineNr">  </span><span class="LineNr"> 32 </span>  class=&quot;btn-outline text-success&quot;
<span class="LineNr">  </span><span class="LineNr"> 33 </span>  onclick=&#123;() =&gt; newToast(&quot;toast-flat-success&quot;)&#125;
<span class="LineNr">  </span><span class="LineNr"> 34 </span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 35 </span>  Success
<span class="LineNr">  </span><span class="LineNr"> 36 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 37 </span>
<span class="LineNr">  </span><span class="LineNr"> 38 </span>&lt;button
<span class="LineNr">  </span><span class="LineNr"> 39 </span>  class=&quot;btn-outline text-warning&quot;
<span class="LineNr">  </span><span class="LineNr"> 40 </span>  onclick=&#123;() =&gt; newToast(&quot;toast-flat-warning&quot;)&#125;
<span class="LineNr">  </span><span class="LineNr"> 41 </span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 42 </span>  Warning
<span class="LineNr">  </span><span class="LineNr"> 43 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 44 </span>
<span class="LineNr">  </span><span class="LineNr"> 45 </span>&lt;hr class=&quot;brd w-full my2&quot; /&gt;
<span class="LineNr">  </span><span class="LineNr"> 46 </span>
<span class="LineNr">  </span><span class="LineNr"> 47 </span>&lt;button
<span class="LineNr">  </span><span class="LineNr"> 48 </span>  class=&quot;btn-outline text-indigo&quot;
<span class="LineNr">  </span><span class="LineNr"> 49 </span>  onclick=&#123;() =&gt; newToast(&quot;toast-outline-indigo&quot;)&#125;
<span class="LineNr">  </span><span class="LineNr"> 50 </span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 51 </span>  Indigo
<span class="LineNr">  </span><span class="LineNr"> 52 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 53 </span>
<span class="LineNr">  </span><span class="LineNr"> 54 </span>&lt;button
<span class="LineNr">  </span><span class="LineNr"> 55 </span>  class=&quot;btn-outline text-sky&quot;
<span class="LineNr">  </span><span class="LineNr"> 56 </span>  onclick=&#123;() =&gt; newToast(&quot;toast-outline-sky&quot;)&#125;
<span class="LineNr">  </span><span class="LineNr"> 57 </span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 58 </span>  Sky
<span class="LineNr">  </span><span class="LineNr"> 59 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 60 </span>
<span class="LineNr">  </span><span class="LineNr"> 61 </span>&lt;button
<span class="LineNr">  </span><span class="LineNr"> 62 </span>  class=&quot;btn-outline text-danger&quot;
<span class="LineNr">  </span><span class="LineNr"> 63 </span>  onclick=&#123;() =&gt; newToast(&quot;toast-outline-danger&quot;)&#125;
<span class="LineNr">  </span><span class="LineNr"> 64 </span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 65 </span>  Danger
<span class="LineNr">  </span><span class="LineNr"> 66 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 67 </span>
<span class="LineNr">  </span><span class="LineNr"> 68 </span>&lt;button
<span class="LineNr">  </span><span class="LineNr"> 69 </span>  class=&quot;btn-outline text-success&quot;
<span class="LineNr">  </span><span class="LineNr"> 70 </span>  onclick=&#123;() =&gt; newToast(&quot;toast-outline-success&quot;)&#125;
<span class="LineNr">  </span><span class="LineNr"> 71 </span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 72 </span>  Success
<span class="LineNr">  </span><span class="LineNr"> 73 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 74 </span>
<span class="LineNr">  </span><span class="LineNr"> 75 </span>&lt;button
<span class="LineNr">  </span><span class="LineNr"> 76 </span>  class=&quot;btn-outline text-warning&quot;
<span class="LineNr">  </span><span class="LineNr"> 77 </span>  onclick=&#123;() =&gt; newToast(&quot;toast-outline-warning&quot;)&#125;
<span class="LineNr">  </span><span class="LineNr"> 78 </span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 79 </span>  Warning
<span class="LineNr">  </span><span class="LineNr"> 80 </span>&lt;/button&gt;

</pre>`);function At(p,s){u(s,!0);let a=g(s,"ref",15);var n=Et();m(n,t=>a(t),()=>a()),e(p,n),L()}var Ot=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> toast <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span>
<span class="LineNr">  </span><span class="LineNr">  3 </span><span class="Keyword">const</span> newToast = <span class="javaScriptParens">(</span>position<span class="javaScriptParens">)</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  toast<span class="javaScriptParens">(</span><span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>    title: <span class="String">&quot;Toast Activated&quot;</span>,
<span class="LineNr">  </span><span class="LineNr">  6 </span>    txt: <span class="String">&quot;Customize this text to suit your message&quot;</span>,
<span class="LineNr">  </span><span class="LineNr">  7 </span>    pos: position,
<span class="LineNr">  </span><span class="LineNr">  8 </span>  <span class="Function">&#125;</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr">  9 </span><span class="Function">&#125;</span>;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>
<span class="LineNr">  </span><span class="LineNr"> 11 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr"> 12 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>    &lt;div <span class="Keyword">class</span>=<span class="String">&quot;flex flex-wrap gap-2&quot;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>      &lt;button <span class="Keyword">class</span>=<span class="String">&quot;btn&quot;</span> onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;topleft&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>        Top left
<span class="LineNr">  </span><span class="LineNr"> 16 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>
<span class="LineNr">  </span><span class="LineNr"> 18 </span>      &lt;button <span class="Keyword">class</span>=<span class="String">&quot;btn&quot;</span> onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;topmid&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>        Top center
<span class="LineNr">  </span><span class="LineNr"> 20 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>
<span class="LineNr">  </span><span class="LineNr"> 22 </span>      &lt;button <span class="Keyword">class</span>=<span class="String">&quot;btn&quot;</span> onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;topright&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>        Top right
<span class="LineNr">  </span><span class="LineNr"> 24 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 25 </span>
<span class="LineNr">  </span><span class="LineNr"> 26 </span>      &lt;button <span class="Keyword">class</span>=<span class="String">&quot;btn&quot;</span> onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;botleft&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 27 </span>        Bottom left
<span class="LineNr">  </span><span class="LineNr"> 28 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 29 </span>
<span class="LineNr">  </span><span class="LineNr"> 30 </span>      &lt;button <span class="Keyword">class</span>=<span class="String">&quot;btn&quot;</span> onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;botmid&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 31 </span>        Bottom center
<span class="LineNr">  </span><span class="LineNr"> 32 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 33 </span>
<span class="LineNr">  </span><span class="LineNr"> 34 </span>      &lt;button <span class="Keyword">class</span>=<span class="String">&quot;btn&quot;</span> onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;botright&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 35 </span>        Bottom right
<span class="LineNr">  </span><span class="LineNr"> 36 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 37 </span>    &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 38 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 39 </span><span class="Function">&#125;</span>;

</pre>`);function Ut(p,s){u(s,!0);let a=g(s,"ref",15);var n=Ot();m(n,t=>a(t),()=>a()),e(p,n),L()}var Mt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script lang=&quot;ts&quot;&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; toast &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  const newToast = (position: any) =&gt; &#123;
<span class="LineNr">  </span><span class="LineNr">  5 </span>    toast(&#123;
<span class="LineNr">  </span><span class="LineNr">  6 </span>      title: &quot;Toast Activated&quot;,
<span class="LineNr">  </span><span class="LineNr">  7 </span>      txt: &quot;Customize this text to suit your message&quot;,
<span class="LineNr">  </span><span class="LineNr">  8 </span>      pos: position,
<span class="LineNr">  </span><span class="LineNr">  9 </span>    &#125;);
<span class="LineNr">  </span><span class="LineNr"> 10 </span>  &#125;;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>&lt;button class=&quot;btn&quot; onclick=&#123;() =&gt; newToast(&quot;topleft&quot;)&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>  Top left
<span class="LineNr">  </span><span class="LineNr"> 15 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>
<span class="LineNr">  </span><span class="LineNr"> 17 </span>&lt;button class=&quot;btn&quot; onclick=&#123;() =&gt; newToast(&quot;topmid&quot;)&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>  Top center
<span class="LineNr">  </span><span class="LineNr"> 19 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 20 </span>
<span class="LineNr">  </span><span class="LineNr"> 21 </span>&lt;button class=&quot;btn&quot; onclick=&#123;() =&gt; newToast(&quot;topright&quot;)&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 22 </span>  Top right
<span class="LineNr">  </span><span class="LineNr"> 23 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 24 </span>
<span class="LineNr">  </span><span class="LineNr"> 25 </span>&lt;button class=&quot;btn&quot; onclick=&#123;() =&gt; newToast(&quot;botleft&quot;)&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 26 </span>  Bottom left
<span class="LineNr">  </span><span class="LineNr"> 27 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 28 </span>
<span class="LineNr">  </span><span class="LineNr"> 29 </span>&lt;button class=&quot;btn&quot; onclick=&#123;() =&gt; newToast(&quot;botmid&quot;)&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 30 </span>  Bottom center
<span class="LineNr">  </span><span class="LineNr"> 31 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 32 </span>
<span class="LineNr">  </span><span class="LineNr"> 33 </span>&lt;button class=&quot;btn&quot; onclick=&#123;() =&gt; newToast(&quot;botright&quot;)&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 34 </span>  Bottom right
<span class="LineNr">  </span><span class="LineNr"> 35 </span>&lt;/button&gt;

</pre>`);function Rt(p,s){u(s,!0);let a=g(s,"ref",15);var n=Mt();m(n,t=>a(t),()=>a()),e(p,n),L()}var Vt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> toast <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span>
<span class="LineNr">  </span><span class="LineNr">  3 </span><span class="Keyword">const</span> createToast = <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  toast<span class="javaScriptParens">(</span><span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>    title: <span class="String">&quot;Toast Activated&quot;</span>,
<span class="LineNr">  </span><span class="LineNr">  6 </span>    txt: <span class="String">&quot;Customize this text to suit your message&quot;</span>,
<span class="LineNr">  </span><span class="LineNr">  7 </span>  <span class="Function">&#125;</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr">  8 </span><span class="Function">&#125;</span>;
<span class="LineNr">  </span><span class="LineNr">  9 </span>
<span class="LineNr">  </span><span class="LineNr"> 10 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr"> 11 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr"> 12 </span>    &lt;button <span class="Keyword">class</span>=<span class="String">&quot;btn&quot;</span> onClick=<span class="Function">&#123;</span>createToast<span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 13 </span>      Show toast
<span class="LineNr">  </span><span class="LineNr"> 14 </span>    &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 16 </span><span class="Function">&#125;</span>;

</pre>`);function Wt(p,s){u(s,!0);let a=g(s,"ref",15);var n=Vt();m(n,t=>a(t),()=>a()),e(p,n),L()}var Ht=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script &gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; toast &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  const createToast = () =&gt; &#123;
<span class="LineNr">  </span><span class="LineNr">  5 </span>    toast(&#123;
<span class="LineNr">  </span><span class="LineNr">  6 </span>      title: &quot;Toast Activated&quot;,
<span class="LineNr">  </span><span class="LineNr">  7 </span>      txt: &quot;Customize this text to suit your message&quot;,
<span class="LineNr">  </span><span class="LineNr">  8 </span>    &#125;);
<span class="LineNr">  </span><span class="LineNr">  9 </span>  &#125;;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>
<span class="LineNr">  </span><span class="LineNr"> 12 </span>&lt;button class=&quot;btn&quot; onclick=&#123;createToast&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 13 </span>  Show toast
<span class="LineNr">  </span><span class="LineNr"> 14 </span>&lt;/button&gt;

</pre>`);function Gt(p,s){u(s,!0);let a=g(s,"ref",15);var n=Ht();m(n,t=>a(t),()=>a()),e(p,n),L()}var Jt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span><span class="Keyword">import</span> <span class="Function">&#123;</span> toast <span class="Function">&#125;</span> <span class="Keyword">from</span> <span class="String">&quot;@haze-ui/react&quot;</span>;
<span class="LineNr">  </span><span class="LineNr">  2 </span>
<span class="LineNr">  </span><span class="LineNr">  3 </span><span class="Keyword">const</span> newToast = <span class="javaScriptParens">(</span>css<span class="javaScriptParens">)</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  toast<span class="javaScriptParens">(</span><span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr">  5 </span>    title: <span class="String">&quot;Toast Activated&quot;</span>,
<span class="LineNr">  </span><span class="LineNr">  6 </span>    txt: <span class="String">&quot;Customize this text to suit your message&quot;</span>,
<span class="LineNr">  </span><span class="LineNr">  7 </span>    css: css,
<span class="LineNr">  </span><span class="LineNr">  8 </span>  <span class="Function">&#125;</span><span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr">  9 </span><span class="Function">&#125;</span>;
<span class="LineNr">  </span><span class="LineNr"> 10 </span>
<span class="LineNr">  </span><span class="LineNr"> 11 </span><span class="Keyword">export</span> <span class="Label">default</span> <span class="javaScriptParens">()</span> =&gt; <span class="Function">&#123;</span>
<span class="LineNr">  </span><span class="LineNr"> 12 </span>  <span class="Statement">return</span> <span class="javaScriptParens">(</span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>    &lt;div <span class="Keyword">class</span>=<span class="String">&quot;flex flex-wrap gap-2&quot;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>      &lt;button <span class="Keyword">class</span>=<span class="String">&quot;btn-primary&quot;</span> onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-solid&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 15 </span>        Solid
<span class="LineNr">  </span><span class="LineNr"> 16 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 17 </span>
<span class="LineNr">  </span><span class="LineNr"> 18 </span>      &lt;button <span class="Keyword">class</span>=<span class="String">&quot;btn&quot;</span> onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-flat&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 19 </span>        Flat
<span class="LineNr">  </span><span class="LineNr"> 20 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 21 </span>
<span class="LineNr">  </span><span class="LineNr"> 22 </span>      &lt;button <span class="Keyword">class</span>=<span class="String">&quot;btn-outline&quot;</span> onClick=<span class="Function">&#123;</span><span class="javaScriptParens">()</span> =&gt; newToast<span class="javaScriptParens">(</span><span class="String">&quot;toast-outline&quot;</span><span class="javaScriptParens">)</span><span class="Function">&#125;</span>&gt;
<span class="LineNr">  </span><span class="LineNr"> 23 </span>        Outline
<span class="LineNr">  </span><span class="LineNr"> 24 </span>      &lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 25 </span>    &lt;/div&gt;
<span class="LineNr">  </span><span class="LineNr"> 26 </span>  <span class="javaScriptParens">)</span>;
<span class="LineNr">  </span><span class="LineNr"> 27 </span><span class="Function">&#125;</span>;

</pre>`);function Qt(p,s){u(s,!0);let a=g(s,"ref",15);var n=Jt();m(n,t=>a(t),()=>a()),e(p,n),L()}var Xt=l(`<pre><span class="LineNr">  </span><span class="LineNr">  1 </span>&lt;script&gt;
<span class="LineNr">  </span><span class="LineNr">  2 </span>  import &#123; toast &#125; from &quot;@haze-ui/svelte&quot;;
<span class="LineNr">  </span><span class="LineNr">  3 </span>
<span class="LineNr">  </span><span class="LineNr">  4 </span>  const newToast = (css) =&gt; &#123;
<span class="LineNr">  </span><span class="LineNr">  5 </span>    toast(&#123;
<span class="LineNr">  </span><span class="LineNr">  6 </span>      title: &quot;Toast Activated&quot;,
<span class="LineNr">  </span><span class="LineNr">  7 </span>      txt: &quot;Customize this text to suit your message&quot;,
<span class="LineNr">  </span><span class="LineNr">  8 </span>      css: css,
<span class="LineNr">  </span><span class="LineNr">  9 </span>    &#125;);
<span class="LineNr">  </span><span class="LineNr"> 10 </span>  &#125;;
<span class="LineNr">  </span><span class="LineNr"> 11 </span>&lt;/script&gt;
<span class="LineNr">  </span><span class="LineNr"> 12 </span>
<span class="LineNr">  </span><span class="LineNr"> 13 </span>&lt;button class=&quot;btn-primary&quot; onclick=&#123;() =&gt; newToast(&quot;toast-solid&quot;)&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 14 </span>  Solid
<span class="LineNr">  </span><span class="LineNr"> 15 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 16 </span>
<span class="LineNr">  </span><span class="LineNr"> 17 </span>&lt;button class=&quot;btn&quot; onclick=&#123;() =&gt; newToast(&quot;toast-flat&quot;)&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 18 </span>  Flat
<span class="LineNr">  </span><span class="LineNr"> 19 </span>&lt;/button&gt;
<span class="LineNr">  </span><span class="LineNr"> 20 </span>
<span class="LineNr">  </span><span class="LineNr"> 21 </span>&lt;button class=&quot;btn-outline&quot; onclick=&#123;() =&gt; newToast(&quot;toast-outline&quot;)&#125;&gt;
<span class="LineNr">  </span><span class="LineNr"> 22 </span>  Outline
<span class="LineNr">  </span><span class="LineNr"> 23 </span>&lt;/button&gt;

</pre>`);function Yt(p,s){u(s,!0);let a=g(s,"ref",15);var n=Xt();m(n,t=>a(t),()=>a()),e(p,n),L()}const Es=Object.assign({"/codemos/badge/colors.svelte":Ma,"/codemos/badge/size.svelte":Va,"/codemos/badge/usage.svelte":Ha,"/codemos/btn/class.svelte":Ja,"/codemos/btn/html.svelte":Xa,"/codemos/btn/icons.svelte":Za,"/codemos/btn/size.svelte":an,"/codemos/btn/variant.svelte":pn,"/codemos/checkbox/colors.svelte":en,"/codemos/checkbox/default.svelte":cn,"/codemos/checkbox/form.svelte":on,"/codemos/dialog/usage.svelte":dn,"/codemos/dropdown/usage.svelte":wn,"/codemos/input/form.svelte":Fn,"/codemos/input/html.svelte":jn,"/codemos/input/size.svelte":Dn,"/codemos/input/usage.svelte":Kn,"/codemos/radio/colors.svelte":In,"/codemos/radio/default.svelte":zn,"/codemos/radio/form.svelte":An,"/codemos/select/usage.svelte":Un,"/codemos/switch/colors.svelte":Rn,"/codemos/switch/default.svelte":Wn,"/codemos/switch/form.svelte":Gn,"/codemos/toast/colors.svelte":lp,"/codemos/toast/pos.svelte":dp,"/codemos/toast/usage.svelte":bp,"/codemos/toast/variant.svelte":Sp}),us=Object.assign({"/codemocomps/badge/colors.svelte":wp,"/codemocomps/badge/size.svelte":kp,"/codemocomps/badge/usage.svelte":Fp,"/codemocomps/btn/class-jsx.svelte":jp,"/codemocomps/btn/class.svelte":Dp,"/codemocomps/btn/html.svelte":Kp,"/codemocomps/btn/icons-jsx.svelte":Ip,"/codemocomps/btn/icons.svelte":zp,"/codemocomps/btn/size-jsx.svelte":Ap,"/codemocomps/btn/size.svelte":Up,"/codemocomps/btn/variant-jsx.svelte":Rp,"/codemocomps/btn/variant.svelte":Wp,"/codemocomps/checkbox/colors.svelte":Gp,"/codemocomps/checkbox/default.svelte":Qp,"/codemocomps/checkbox/form.svelte":Yp,"/codemocomps/dialog/usage-jsx.svelte":st,"/codemocomps/dialog/usage.svelte":nt,"/codemocomps/dropdown/usage-jsx.svelte":tt,"/codemocomps/dropdown/usage.svelte":lt,"/codemocomps/input/form-jsx.svelte":rt,"/codemocomps/input/form.svelte":ot,"/codemocomps/input/html.svelte":Lt,"/codemocomps/input/size-jsx.svelte":dt,"/codemocomps/input/size.svelte":qt,"/codemocomps/input/usage-jsx.svelte":mt,"/codemocomps/input/usage.svelte":ft,"/codemocomps/radio/colors.svelte":St,"/codemocomps/radio/default.svelte":wt,"/codemocomps/radio/form.svelte":kt,"/codemocomps/select/usage-jsx.svelte":Ft,"/codemocomps/select/usage.svelte":jt,"/codemocomps/switch/colors.svelte":Dt,"/codemocomps/switch/default.svelte":Kt,"/codemocomps/switch/form.svelte":It,"/codemocomps/toast/colors-jsx.svelte":zt,"/codemocomps/toast/colors.svelte":At,"/codemocomps/toast/pos-jsx.svelte":Ut,"/codemocomps/toast/pos.svelte":Rt,"/codemocomps/toast/usage-jsx.svelte":Wt,"/codemocomps/toast/usage.svelte":Gt,"/codemocomps/toast/variant-jsx.svelte":Qt,"/codemocomps/toast/variant.svelte":Yt}),oe=(p,s)=>{const a=`/codemos/${p}/${s}`,n=`/codemocomps/${p}/${s}`;return{preview:Es[`${a}.svelte`],code:{svelte:us[`${n}.svelte`],react:us[`${n}-jsx.svelte`],solid:us[`${n}-jsx.svelte`]}}},ue=(p,s)=>{const a=`/codemos/${p}/${s}`,n=`/codemocomps/${p}/${s}`;return{preview:Es[`${a}.svelte`],code:{html:us[`${n}.svelte`]}}};export{ie as T,oe as a,ue as g};
