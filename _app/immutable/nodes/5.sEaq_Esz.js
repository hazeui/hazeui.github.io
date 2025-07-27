import"../chunks/DsnmJJEf.js";import"../chunks/syurT9jH.js";import{f as c,c as u,s,r as m,a as b,p as v,X as g,b as h}from"../chunks/BYfyV0DM.js";import{B as o}from"../chunks/75OjksGv.js";import{i as _}from"../chunks/CEiPiiYU.js";import{T as d}from"../chunks/BFXgL3v9.js";var B=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!></div>');function w(l){var n=B(),e=u(n);o(e,{class:"btn-success",txt:"Success"});var t=s(e,2);o(t,{class:"btn-warning",txt:"Warning"});var a=s(t,2);o(a,{class:"btn-danger",txt:"danger"}),m(n),b(l,n)}var S=c('<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded"><button class="btn-primary">Primary</button> <button class="btn-soft">Soft</button> <button class="btn-outline">Outline</button> <button class="btn-ghost">Ghost</button> <button class="btn-emerald5 text-white"><i class="i-line-md:email-filled"></i> Email</button> <button class="btn-outline btn"><i class="i-iconamoon:send"></i> Send us</button> <button class="btn-soft"><i class="i-eos-icons:loading"></i> Fetching...</button> <button class="btn-primary-eqmd" aria-label="plus button"><i class="i-tabler:plus"></i></button> <button class="btn-outline-eqmd rounded-full btn" aria-label="user button"><i class="i-iconoir:user"></i></button> <hr class="w-full brd mt3 mb1"/> <button class="btn btn-soft-xs">Button</button> <button class="btn btn-soft-sm">Button</button> <button class="btn btn-soft-md">Button</button> <button class="btn btn-soft-lg">Button</button> <button class="btn btn-soft-xl">Button</button></div>');function y(l){var n=S();b(l,n)}var z=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function L(l){var n=z(),e=u(n);o(e,{class:"btn-emerald5 text-white",iconL:"i-line-md:email-filled",txt:"Email"});var t=s(e,2);o(t,{iconL:"i-iconamoon:send",txt:"Send us",class:"btn-outline"});var a=s(t,2);o(a,{loading:!0,loaderTxt:"Fetching...",disabled:!0,txt:"Fetch data"});var i=s(a,2);o(i,{iconL:"i-tabler:plus",class:"btn-primary-eqmd","aria-label":"plus button"});var r=s(i,2);o(r,{iconL:"i-iconoir:user",class:"btn-outline-eqmd rounded-full","aria-label":"user button"}),m(n),b(l,n)}var j=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!> <!></div>');function q(l){var n=j(),e=u(n);o(e,{class:"btn-soft-xs",txt:"Success"});var t=s(e,2);o(t,{class:"btn-soft-sm",txt:"Success"});var a=s(t,2);o(a,{class:"btn-soft-md",txt:"Success"});var i=s(a,2);o(i,{class:"btn-soft-lg",txt:"Success"});var r=s(i,2);o(r,{class:"btn-soft-xl",txt:"Success"}),m(n),b(l,n)}var F=c('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><!> <!> <!> <!></div>');function O(l){var n=F(),e=u(n);o(e,{txt:"Primary",class:"btn-primary"});var t=s(e,2);o(t,{class:"soft",txt:"Soft"});var a=s(t,2);o(a,{class:"btn-outline",txt:"Outline"});var i=s(a,2);o(i,{class:"btn-ghost",txt:"Ghost"}),m(n),b(l,n)}const E=`import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
      <Btn class="btn-success" txt="Success" />
      <Btn class="btn-warning" txt="Warning" />
      <Btn class="btn-danger" txt="danger" />
    </div>
  );
};
`,G=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn class="btn-success" txt="Success" />
  <Btn class="btn-warning" txt="Warning" />
  <Btn class="btn-danger" txt="danger" />
</div>
`,P=`<div class="flex flex-gap3 flex-wrap items-center brd p10 rounded">
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
`,T=`import { Btn } from "@haze-ui/react";

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
`,$=`<script lang="ts">
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
`,A=`import { Btn } from "@haze-ui/react";

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
`,C=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn class="btn-soft-xs" txt="Success" />
  <Btn class="btn-soft-sm" txt="Success" />
  <Btn class="btn-soft-md" txt="Success" />
  <Btn class="btn-soft-lg" txt="Success" />
  <Btn class="btn-soft-xl" txt="Success" />
</div>
`,W=`import { Btn } from "@haze-ui/react";

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
`,H=`<script lang="ts">
  import { Btn } from "@haze-ui/svelte";
<\/script>

<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
  <Btn txt="Primary" class="btn-primary" />
  <Btn class="soft" txt="Soft" />
  <Btn class="btn-outline" txt="Outline" />
  <Btn class="btn-ghost" txt="Ghost" />
</div>
`;var I=c(`<h1>Button</h1> <p>Clickable Elemen</p> <h2>Variants</h2> <p>Add the btn-variant class to set the variant, example: btn-soft</p> <!> <h2>Icons</h2> <p>Use the iconL and iconR prop, copy icon classes from <u><a href="https://icon-sets.iconify.design/" rel="nofollow">iconify</a></u></p> <!> <h2>Sizes and class</h2> <p>Add the btn-variant-size class to change the size of the button. example:
btn-primary-sm</p> <!> <h2>Classes</h2> <p>Add the btn-variant class to set the variant, example: btn-soft</p> <!> <h2 id="htm">Html</h2> <p>You can use the btn classes in html as well</p> <!>`,1);function D(l,n){v(n,!1);const e=Object.assign({"/codemos/btn/class.svelte":w,"/codemos/btn/html.svelte":y,"/codemos/btn/icons.svelte":L,"/codemos/btn/size.svelte":q,"/codemos/btn/variant.svelte":O}),t=Object.assign({"/codemos/btn/class.jsx":E,"/codemos/btn/class.svelte":G,"/codemos/btn/html.svelte":P,"/codemos/btn/icons.jsx":T,"/codemos/btn/icons.svelte":$,"/codemos/btn/size.jsx":A,"/codemos/btn/size.svelte":C,"/codemos/btn/variant.jsx":W,"/codemos/btn/variant.svelte":H});_();var a=I(),i=s(g(a),8);d(i,{get preview(){return e["/codemos/btn/variant.svelte"]},get sve(){return t["/codemos/btn/variant.svelte"]},get react(){return t["/codemos/btn/variant.jsx"]}});var r=s(i,6);d(r,{get preview(){return e["/codemos/btn/icons.svelte"]},get sve(){return t["/codemos/btn/icons.svelte"]},get react(){return t["/codemos/btn/icons.jsx"]}});var f=s(r,6);d(f,{get preview(){return e["/codemos/btn/size.svelte"]},get sve(){return t["/codemos/btn/size.svelte"]},get react(){return t["/codemos/btn/size.jsx"]}});var p=s(f,6);d(p,{get preview(){return e["/codemos/btn/class.svelte"]},get sve(){return t["/codemos/btn/class.svelte"]},get react(){return t["/codemos/btn/class.jsx"]}});var x=s(p,6);d(x,{get preview(){return e["/codemos/btn/html.svelte"]},get html(){return t["/codemos/btn/html.svelte"]}}),b(l,a),h()}export{D as component};
