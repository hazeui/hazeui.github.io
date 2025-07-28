import"./DsnmJJEf.js";import{T as pe,k as be,p as z,j as te,g,ax as G,aL as N,b as y,a as c,c as F,f as i,e as u,s as l,r as p,h as A,a6 as T,a5 as H,F as fe,D as K,aM as ne,n as v}from"./Syxtoo1J.js";import{a as q,d as U,s as me}from"./7C0LPiQw.js";import{p as he,i as I,r as ve}from"./D57SxgvP.js";import{b as xe,c as ge}from"./CcUL0Jpr.js";import{o as ke}from"./DLz2iYLZ.js";import{s as ae,b as se,c as ye}from"./xq_Hgv8f.js";import"./Bh_0D8ZS.js";import{B as m}from"./BR20Ggvr.js";function _e(n,e,t){pe(()=>{var a=be(()=>e(n,t?.())||{});if(a?.destroy)return()=>a.destroy()})}const X=n=>n?typeof n=="string"?document.querySelector(n):n:null;function we(n,e="body"){return X(e)?.appendChild(n),{update:t=>{t!==e&&(n.parentNode?.removeChild(n),X(t)?.appendChild(n))},destroy:()=>{n.parentNode?.removeChild(n)}}}const Ce=n=>n.stopPropagation();var Be=i('<button class="i-pajamas:close absolute right-4 top-4 focus:bg-red" aria-label="close" tabindex="-1"></button>'),Se=i('<dialog class="backdrop:bg-black/60"><div tabindex="-1"><!> <!></div></dialog>');function $e(n,e){z(e,!0);let t=he(e,"closeIcon",3,!0),a=G(void 0);te(()=>{e.open&&g(a)?.showModal()});var s=N(),o=y(s);{var d=r=>{var b=Se();b.__click=function(...f){e.close?.apply(this,f)};var h=u(b);h.__click=[Ce];var k=u(h);{var S=f=>{var _=Be();_.__click=function(...x){e.close?.apply(this,x)},c(f,_)};I(k,f=>{t()&&f(S)})}var $=l(k,2);q($,()=>e.children),p(h),p(b),_e(b,f=>we?.(f)),xe(b,f=>T(a,f),()=>g(a)),A(()=>ae(h,1,`dialog ${e.class}`)),c(r,b)};I(o,r=>{e.open&&r(d)})}c(n,s),F()}U(["click"]);function Y(n,e){z(e,!0);let t=G(H(e.defaultValue)),a=H([]);const s=r=>T(t,r,!0);fe("tabs",{value:()=>e.value??g(t),setValue:e.setValue??s,tabLabels:()=>a,addTabLabel:r=>a.push(r)});var o=N(),d=y(o);q(d,()=>e.children),c(n,o),F()}const Pe=(n,e,t)=>e(t.value);var Ee=i('<button role="tab"><!></button>');function j(n,e){z(e,!0);const{value:t,setValue:a,addTabLabel:s}=K("tabs");ke(()=>s(e.value));var o=Ee();o.__click=[Pe,a,e];var d=u(o);q(d,()=>e.children),p(o),A(r=>se(o,"aria-selected",r),[()=>t()==e.value]),c(n,o),F()}U(["click"]);var Oe=i('<div role="tabpanel"><!></div>');function Z(n,e){z(e,!0);const{value:t}=K("tabs");var a=N(),s=y(a);{var o=d=>{var r=Oe(),b=u(r);q(b,()=>e.children),p(r),A(h=>se(r,"aria-labelledby",h),[()=>`tab-${t()}`]),c(d,r)};I(s,d=>{t()==e.value&&d(o)})}c(n,a),F()}const je=(n,e,t,a)=>{n.key=="ArrowLeft"&&g(e)!=0?t(a()[g(e)-1]):n.key=="ArrowRight"&&g(e)!=a().length-1&&t(a()[g(e)+1])};var De=i('<div role="tablist" tabindex="-1"><!></div>');function ee(n,e){z(e,!0);const{value:t,tabLabels:a,setValue:s}=K("tabs");let o=ne(()=>a().indexOf(t()));te(()=>{t()||s(a()[0])});var d=De();d.__keydown=[je,o,s,a];var r=u(d);q(r,()=>e.children),p(d),A(b=>ae(d,1,b),[()=>ye(e.class?.includes("tabs-")?e.class:`tabs ${e.class}`)]),c(n,d),F()}U(["keydown"]);var Le=i('<i class="i-mage:preview-fill"></i> Preview',1),Ne=i('<i class="i-majesticons:code"></i> Code',1),ze=i("<!> <!>",1),Fe=i('<i class="i-devicon:html5"></i> file.html',1),Ae=i('<i class="i-devicon:svelte"></i> Svelte',1),Te=i('<i class="i-devicon:react"></i> React',1),qe=i('<i class="i-devicon:solidjs"></i> Solid',1),Me=i("<!> <!> <!>",1),Ve=i('<!> <pre class="p5 rounded brd rounded-t-0 max-h-400px overflow-auto"><code> </code></pre>',1),Ie=i("<!> <!> <!>",1);function Xt(n,e){const t=ve(e,["$$slots","$$events","$$legacy"]);let{demo:a}=t,s=H({svelte:"",react:"",solid:"",html:""}),o=G(null);const d=r=>{if(T(o,r,!0),r==="svelte"&&!s.svelte&&a.code.svelte)s.svelte=a.code.svelte;else if(r==="react"&&!s.react&&a.code.react){const b=a.code.react;s.react=b.replaceAll("class=","className="),!s.solid&&!a.code.solid&&(s.solid=b.replaceAll("react","solid"))}else r==="solid"&&!s.solid&&a.code.solid?s.solid=a.code.solid:r==="html"&&!s.html&&a.code.html&&(s.html=a.code.html)};Y(n,{children:(r,b)=>{var h=Ie(),k=y(h);ee(k,{class:"tabs w-fit p1 !children:p2 !children:px3",children:(f,_)=>{var x=ze(),w=y(x);j(w,{value:"preview",children:(B,P)=>{var E=Le();v(),c(B,E)},$$slots:{default:!0}});var C=l(w,2);j(C,{value:"code",children:(B,P)=>{var E=Ne();v(),c(B,E)},$$slots:{default:!0}}),c(f,x)},$$slots:{default:!0}});var S=l(k,2);Z(S,{value:"preview",children:(f,_)=>{var x=N();const w=ne(()=>a.preview);var C=y(x);ge(C,()=>g(w),(B,P)=>{P(B,{})}),c(f,x)},$$slots:{default:!0}});var $=l(S,2);Z($,{value:"code",children:(f,_)=>{Y(f,{get value(){return g(o)},setValue:d,children:(x,w)=>{var C=Ve(),B=y(C);ee(B,{class:"tabs-line-primary brd rounded-t [&>button]:capitalize",children:(ce,Vt)=>{var J=N(),ie=y(J);{var re=O=>{j(O,{value:"html",children:(M,W)=>{var V=Fe();v(),c(M,V)},$$slots:{default:!0}})},de=O=>{var M=Me(),W=y(M);j(W,{value:"svelte",children:(D,Q)=>{var L=Ae();v(),c(D,L)},$$slots:{default:!0}});var V=l(W,2);j(V,{value:"react",children:(D,Q)=>{var L=Te();v(),c(D,L)},$$slots:{default:!0}});var ue=l(V,2);j(ue,{value:"solid",children:(D,Q)=>{var L=qe();v(),c(D,L)},$$slots:{default:!0}}),c(O,M)};I(ie,O=>{a.code.html?O(re):O(de,!1)})}c(ce,J)},$$slots:{default:!0}});var P=l(B,2),E=u(P),oe=u(E,!0);p(E),p(P),A(()=>me(oe,g(o)?s[g(o)]:"")),c(x,C)},$$slots:{default:!0}})},$$slots:{default:!0}}),c(r,h)},$$slots:{default:!0}})}var Ge=i('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!></div>');function Ue(n){var e=Ge(),t=u(e);m(t,{class:"btn-success",txt:"Success"});var a=l(t,2);m(a,{class:"btn-warning",txt:"Warning"});var s=l(a,2);m(s,{class:"btn-danger",txt:"danger"}),p(e),c(n,e)}var We=i('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary">Primary</button> <button class="btn-soft">Soft</button> <button class="btn-outline">Outline</button> <button class="btn-ghost">Ghost</button> <button class="btn-emerald5 text-white"><i class="i-line-md:email-filled"></i> Email</button> <button class="btn-outline btn"><i class="i-iconamoon:send"></i> Send us</button> <button class="btn-soft"><i class="i-eos-icons:loading"></i> Fetching...</button> <button class="btn-primary-eqmd" aria-label="plus button"><i class="i-tabler:plus"></i></button> <button class="btn-outline-eqmd rounded-full btn" aria-label="user button"><i class="i-iconoir:user"></i></button> <hr class="w-full brd mt3 mb1"/> <button class="btn btn-soft-xs">Button</button> <button class="btn btn-soft-sm">Button</button> <button class="btn btn-soft-md">Button</button> <button class="btn btn-soft-lg">Button</button> <button class="btn btn-soft-xl">Button</button></div>');function He(n){var e=We();c(n,e)}var Re=i('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function Ke(n){var e=Re(),t=u(e);m(t,{class:"btn-emerald5 text-white",iconL:"i-line-md:email-filled",txt:"Email"});var a=l(t,2);m(a,{iconL:"i-iconamoon:send",txt:"Send us",class:"btn-outline"});var s=l(a,2);m(s,{loading:!0,loaderTxt:"Fetching...",disabled:!0,txt:"Fetch data"});var o=l(s,2);m(o,{iconL:"i-tabler:plus",class:"btn-primary-eqmd","aria-label":"plus button"});var d=l(o,2);m(d,{iconL:"i-iconoir:user",class:"btn-outline-eqmd rounded-full","aria-label":"user button"}),p(e),c(n,e)}var Je=i('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function Qe(n){var e=Je(),t=u(e);m(t,{class:"btn-soft-xs",txt:"Success"});var a=l(t,2);m(a,{class:"btn-soft-sm",txt:"Success"});var s=l(a,2);m(s,{class:"btn-soft-md",txt:"Success"});var o=l(s,2);m(o,{class:"btn-soft-lg",txt:"Success"});var d=l(o,2);m(d,{class:"btn-soft-xl",txt:"Success"}),p(e),c(n,e)}var Xe=i('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!></div>');function Ye(n){var e=Xe(),t=u(e);m(t,{txt:"Primary",class:"btn-primary"});var a=l(t,2);m(a,{class:"soft",txt:"Soft"});var s=l(a,2);m(s,{class:"btn-outline",txt:"Outline"});var o=l(s,2);m(o,{class:"btn-ghost",txt:"Ghost"}),p(e),c(n,e)}var Ze=i('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><input type="checkbox" class="checkbox"/> <input type="checkbox" class="checkbox-primary"/> <input type="checkbox" class="checkbox-red"/> <input type="checkbox" class="checkbox-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-sm"/> <input type="checkbox" class="checkbox-md"/> <input type="checkbox" class="checkbox-lg"/> <input type="checkbox" class="checkbox-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-5"/> <input type="checkbox" class="checkbox-indigo-7"/> <input type="checkbox" class="checkbox-red-9"/> <input type="checkbox" class="checkbox-slate-10"/> <input type="checkbox" class="checkbox-10 !after:checked:i-ph:check-fat-fill !after:checked:size-6"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="checkbox-blue text-white"/> <input type="checkbox" class="checkbox-amber text-amber8"/> <input type="checkbox" class="checkbox-emerald"/> <input type="checkbox" class="checkbox checked:bg-bg text-fg"/></div>');function et(n){var e=Ze(),t=l(u(e),2);t.defaultChecked=!0;var a=l(t,2);a.defaultChecked=!0;var s=l(a,2);s.defaultChecked=!0;var o=l(s,4);o.defaultChecked=!0;var d=l(o,2);d.defaultChecked=!0;var r=l(d,2);r.defaultChecked=!0;var b=l(r,2);b.defaultChecked=!0;var h=l(b,4);h.defaultChecked=!0;var k=l(h,2);k.defaultChecked=!0;var S=l(k,2);S.defaultChecked=!0;var $=l(S,2);$.defaultChecked=!0;var f=l($,2);f.defaultChecked=!0;var _=l(f,4);_.defaultChecked=!0;var x=l(_,2);x.defaultChecked=!0;var w=l(x,2);w.defaultChecked=!0;var C=l(w,2);C.defaultChecked=!0,p(e),c(n,e)}var tt=i('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="checkbox" id="option" class="checkbox-fg"/> <label for="option">Option</label></div>');function nt(n){var e=tt(),t=u(e);t.defaultChecked=!0,v(2),p(e),c(n,e)}var at=i('<div class="flex brd p20 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"><input type="checkbox" id="tnc" class="checkbox"/> <label for="tnc">I agree to the Terms and Conditions</label> <input type="checkbox" id="tnc2" class="checkbox-blue"/> <div><label for="tnc2">I understand and read the privacy policy</label> <br/> <span class="text-inactivefg text-sm">By Agreeing you accept our <a class="link" href="#/">Privacy Policy</a></span></div> <input type="checkbox" id="tnc3" class="checkbox-slate" disabled/> <label for="tnc3" class="muted-70">I have freedom of speech</label></div></div>');function st(n){var e=at(),t=u(e),a=u(t);a.defaultChecked=!0;var s=l(a,4);s.defaultChecked=!0,v(6),p(t),p(e),c(n,e)}const lt=(n,e)=>T(e,!0);var ot=i('<h3>Edit Account</h3> <p class="text-inactivefg mb2">Make changes to your user profile here.</p> <label for="name">Name</label> <input class="input-outline" id="name" placeholder="Enter your name"/> <label for="email">Email</label> <input type="email" class="input-outline" id="email" placeholder="Enter your email"/> <div class="flex gap3 items-center ml-auto mt3"><button class="btn-soft">Cancel</button> <button class="btn-primary">Save</button></div>',1),ct=i('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary mx-auto">Open</button> <!></div>');function it(n){let e=G(!1);const t=()=>T(e,!1);var a=ct(),s=u(a);s.__click=[lt,e];var o=l(s,2);$e(o,{get open(){return g(e)},close:t,class:"grid gap4",children:(d,r)=>{var b=ot(),h=l(y(b),12),k=u(h);k.__click=close,v(2),p(h),c(d,b)},$$slots:{default:!0}}),p(a),c(n,a)}U(["click"]);var rt=i('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="radio" class="radio" name="group1"/> <input type="radio" class="radio-primary" name="group1"/> <input type="radio" class="radio-red" name="group1"/> <input type="radio" class="radio-amber4" name="group1"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group2"/> <input type="radio" class="radio-md" name="group2"/> <input type="radio" class="radio-lg" name="group2"/> <input type="radio" class="radio-xl" name="group2"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-4" name="group3"/> <input type="radio" class="radio-indigo-6" name="group3"/> <input type="radio" class="radio-red-8" name="group3"/> <input type="radio" class="radio-slate-9" name="group3"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radiob-blue" name="group4"/> <input type="radio" class="radiob-amber" name="group4"/> <input type="radio" class="radiob-emerald" name="group4"/> <input type="radio" class="radiob" name="group4"/></div>');function dt(n){var e=rt(),t=u(e);t.defaultChecked=!0;var a=l(t,14);a.defaultChecked=!0;var s=l(a,8);s.defaultChecked=!0;var o=l(s,14);o.defaultChecked=!0,p(e),c(n,e)}var ut=i('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&amp;>label]:mr3"><input type="radio" id="option1" name="group" class="radio"/> <label for="option1">Arch</label> <input type="radio" id="option2" name="group" class="radio"/> <label for="option2">Void</label> <input type="radio" id="option3" name="group" class="radiob"/> <label for="option3">Ubuntu</label> <input type="radio" id="option4" name="group" class="radiob"/> <label for="option4">Fedora</label></div>');function pt(n){var e=ut(),t=u(e);t.defaultChecked=!0,v(14),p(e),c(n,e)}var bt=i('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="radio" id="email" name="x" class="radio"/> <label for="email">Email notifications</label> <input type="radio" id="sms" name="x" class="radio-blue"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-inactivefg text-sm">Standard messaging rates may apply</span></div> <input type="radio" id="none" name="x" class="radio-slate"/> <label for="none">No notifications</label> <input type="radio" id="disagree" name="x" class="radio-red"/> <label for="disagree">Stop Bothering!</label></div></div>');function ft(n){var e=bt(),t=u(e),a=u(t);a.defaultChecked=!0,v(14),p(t),p(e),c(n,e)}var mt=i('<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded"><input type="checkbox" class="switch"/> <input type="checkbox" class="switch-flat-md-primary"/> <input type="checkbox" class="switch-flat-md-red"/> <input type="checkbox" class="switch-flat-md-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-flat-sm"/> <input type="checkbox" class="switch-flat-md"/> <input type="checkbox" class="switch-flat-lg"/> <input type="checkbox" class="switch-flat-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-line-4"/> <input type="checkbox" class="switch-line-6-indigo"/> <input type="checkbox" class="switch-line-8-red"/> <input type="checkbox" class="switch-line-9-slate"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-knob-md-blue"/> <input type="checkbox" class="switch-knob-md-amber"/> <input type="checkbox" class="switch-flat-md-emerald"/> <input type="checkbox" class="switch-knob" name="group4"/></div>');function ht(n){var e=mt(),t=u(e);t.defaultChecked=!0;var a=l(t,16);a.defaultChecked=!0;var s=l(a,8);s.defaultChecked=!0;var o=l(s,2);o.defaultChecked=!0;var d=l(o,2);d.defaultChecked=!0;var r=l(d,10);r.defaultChecked=!0,p(e),c(n,e)}var vt=i('<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded"><input type="checkbox" class="switch-line"/> <input type="checkbox" class="switch-flat"/> <input type="checkbox" class="switch-knob"/></div>');function xt(n){var e=vt(),t=l(u(e),2);t.defaultChecked=!0,v(2),p(e),c(n,e)}var gt=i('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="checkbox" id="email" class="switch-line"/> <label for="email">Email notifications</label> <input type="checkbox" id="sms" class="switch-line"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-inactivefg text-sm">Standard messaging rates may apply</span></div> <input type="checkbox" id="none" class="switch"/> <label for="none">No notifications</label> <input type="checkbox" id="disagree" class="switch"/> <label for="disagree">Stop Bothering!</label></div></div>');function kt(n){var e=gt(),t=u(e),a=u(t);a.defaultChecked=!0,v(14),p(t),p(e),c(n,e)}const yt=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
      <Btn class="btn-success" txt="Success" />
      <Btn class="btn-warning" txt="Warning" />
      <Btn class="btn-danger" txt="danger" />
    </div>
  );
};
`,_t=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn class="btn-success" txt="Success" />
  <Btn class="btn-warning" txt="Warning" />
  <Btn class="btn-danger" txt="danger" />
</div>
`,wt=`<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
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
`,Ct=`import { Btn } from "@haze-ui/react";

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
`,Bt=`<script lang="ts">
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
`,St=`import { Btn } from "@haze-ui/react";

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
`,$t=`<script lang="ts">
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
`,Et=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn txt="Primary" class="btn-primary" />
  <Btn class="soft" txt="Soft" />
  <Btn class="btn-outline" txt="Outline" />
  <Btn class="btn-ghost" txt="Ghost" />
</div>
`,Ot=`<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
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
`,jt=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" id="option" class="checkbox-fg" defaultChecked />
  <label for="option">Option</label>
</div>
`,Dt=`<div class="flex brd p20 rounded-xl justify-center">
  <div
    class="[&>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr]"
  >
    <input type="checkbox" id="tnc" class="checkbox" defaultChecked />
    <label for="tnc">I agree to the Terms and Conditions</label>

    <input type="checkbox" id="tnc2" class="checkbox-blue" defaultChecked />

    <div>
      <label for="tnc2">I understand and read the privacy policy</label> <br />
      <span class="text-inactivefg text-sm">By Agreeing you accept our
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
`,Lt=`import { useState } from "react";
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

        <p className="text-inactivefg mb2">
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
          <button className="btn-soft" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button className="btn-primary">Save</button>
        </div>
      </Dialog>
    </div>
  );
};
`,Nt=`<script lang="ts">
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
    <p class="text-inactivefg mb2">Make changes to your user profile here.</p>

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
      <button class="btn-soft" onclick={close}>Cancel</button>
      <button class="btn-primary">Save</button>
    </div>
  </Dialog>
</div>
`,zt=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
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
`,Ft=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&>label]:mr3">
  <input type="radio" id="option1" name="group" class="radio" defaultChecked />
  <label for="option1">Arch</label>

  <input type="radio" id="option2" name="group" class="radio" />
  <label for="option2">Void</label>

  <input type="radio" id="option3" name="group" class="radiob" />
  <label for="option3">Ubuntu</label>

  <input type="radio" id="option4" name="group" class="radiob" />
  <label for="option4">Fedora</label>
</div>
`,At=`<div class="flex brd p20 gap5 rounded-xl justify-center">
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
      <span class="text-inactivefg text-sm"
      >Standard messaging rates may apply</span>
    </div>

    <input type="radio" id="none" name="x" class="radio-slate" />
    <label for="none">No notifications</label>

    <input type="radio" id="disagree" name="x" class="radio-red" />
    <label for="disagree">Stop Bothering!</label>
  </div>
</div>
`,Tt=`<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded">
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
`,qt=`<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" class="switch-line" />
  <input type="checkbox" class="switch-flat" defaultChecked />
  <input type="checkbox" class="switch-knob" />
</div>
`,Mt=`<div class="flex brd p20 gap5 rounded-xl justify-center">
  <div
    class="[&>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"
  >
    <input type="checkbox" id="email" class="switch-line" defaultChecked />
    <label for="email">Email notifications</label>

    <input type="checkbox" id="sms" class="switch-line" />
    <div>
      <label for="sms">SMS notifications</label><br />
      <span class="text-inactivefg text-sm"
      >Standard messaging rates may apply</span>
    </div>

    <input type="checkbox" id="none" class="switch" />
    <label for="none">No notifications</label>

    <input type="checkbox" id="disagree" class="switch" />
    <label for="disagree">Stop Bothering!</label>
  </div>
</div>
`,le=Object.assign({"/codemos/btn/class.svelte":Ue,"/codemos/btn/html.svelte":He,"/codemos/btn/icons.svelte":Ke,"/codemos/btn/size.svelte":Qe,"/codemos/btn/variant.svelte":Ye,"/codemos/checkbox/colors.svelte":et,"/codemos/checkbox/default.svelte":nt,"/codemos/checkbox/form.svelte":st,"/codemos/dialog/usage.svelte":it,"/codemos/radio/colors.svelte":dt,"/codemos/radio/default.svelte":pt,"/codemos/radio/form.svelte":ft,"/codemos/switch/colors.svelte":ht,"/codemos/switch/default.svelte":xt,"/codemos/switch/form.svelte":kt}),R=Object.assign({"/codemos/btn/class.jsx":yt,"/codemos/btn/class.svelte":_t,"/codemos/btn/html.svelte":wt,"/codemos/btn/icons.jsx":Ct,"/codemos/btn/icons.svelte":Bt,"/codemos/btn/size.jsx":St,"/codemos/btn/size.svelte":$t,"/codemos/btn/variant.jsx":Pt,"/codemos/btn/variant.svelte":Et,"/codemos/checkbox/colors.svelte":Ot,"/codemos/checkbox/default.svelte":jt,"/codemos/checkbox/form.svelte":Dt,"/codemos/dialog/usage.jsx":Lt,"/codemos/dialog/usage.svelte":Nt,"/codemos/radio/colors.svelte":zt,"/codemos/radio/default.svelte":Ft,"/codemos/radio/form.svelte":At,"/codemos/switch/colors.svelte":Tt,"/codemos/switch/default.svelte":qt,"/codemos/switch/form.svelte":Mt}),Yt=(n,e)=>{const t=`/codemos/${n}/${e}`;return{preview:le[`${t}.svelte`],code:{svelte:R[`${t}.svelte`],react:R[`${t}.jsx`]}}},Zt=(n,e)=>{const t=`/codemos/${n}/${e}`;return{preview:le[`${t}.svelte`],code:{html:R[`${t}.svelte`]}}};export{Xt as T,Zt as a,Yt as g};
