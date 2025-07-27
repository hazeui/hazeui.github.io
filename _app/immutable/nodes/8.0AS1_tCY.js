import"../chunks/DsnmJJEf.js";import"../chunks/syurT9jH.js";import{f as d,c as o,s,r,a as p,n as b,p as m,X as f,b as x}from"../chunks/BYfyV0DM.js";import{i as w}from"../chunks/CEiPiiYU.js";import{T as u}from"../chunks/BFXgL3v9.js";var k=d('<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded"><input type="checkbox" class="switch"/> <input type="checkbox" class="switch-flat-md-primary"/> <input type="checkbox" class="switch-flat-md-red"/> <input type="checkbox" class="switch-flat-md-amber4"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-flat-xs"/> <input type="checkbox" class="switch-flat-sm"/> <input type="checkbox" class="switch-flat-md"/> <input type="checkbox" class="switch-flat-lg"/> <input type="checkbox" class="switch-flat-xl"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-line-4"/> <input type="checkbox" class="switch-line-6-indigo"/> <input type="checkbox" class="switch-line-8-red"/> <input type="checkbox" class="switch-line-9-slate"/> <hr class="w-full brd border-input my2"/> <input type="checkbox" class="switch-knob-md-blue"/> <input type="checkbox" class="switch-knob-md-amber"/> <input type="checkbox" class="switch-flat-md-emerald"/> <input type="checkbox" class="switch-knob" name="group4"/></div>');function y(i){var e=k(),t=o(e);t.defaultChecked=!0;var c=s(t,16);c.defaultChecked=!0;var l=s(c,8);l.defaultChecked=!0;var a=s(l,2);a.defaultChecked=!0;var n=s(a,2);n.defaultChecked=!0;var h=s(n,10);h.defaultChecked=!0,r(e),p(i,e)}var v=d('<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded"><input type="checkbox" class="switch-line"/> <input type="checkbox" class="switch-flat"/> <input type="checkbox" class="switch-knob"/></div>');function g(i){var e=v(),t=s(o(e),2);t.defaultChecked=!0,b(2),r(e),p(i,e)}var _=d('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="checkbox" id="email" class="switch-line"/> <label for="email">Email notifications</label> <input type="checkbox" id="sms" class="switch-line"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-inactivefg text-sm">Standard messaging rates may apply</span></div> <input type="checkbox" id="none" class="switch"/> <label for="none">No notifications</label> <input type="checkbox" id="disagree" class="switch"/> <label for="disagree">Stop Bothering!</label></div></div>');function C(i){var e=_(),t=o(e),c=o(t);c.defaultChecked=!0,b(14),r(t),r(e),p(i,e)}const S=`<div class="flex flex-wrap gap-y-3 gap-x-6 items-center brd p5 rounded">
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
`,z=`<div class="flex flex-gap5 flex-wrap items-center brd p5 rounded">
  <input type="checkbox" class="switch-line" />
  <input type="checkbox" class="switch-flat" defaultChecked />
  <input type="checkbox" class="switch-knob" />
</div>
`,j=`<div class="flex brd p20 gap5 rounded-xl justify-center">
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
`;var T=d("<h1>Switch</h1> <p>To style the switch, add the “switch-variant-size-color” class</p> <h2>Usage</h2> <p>Add the switch class to the input element to apply size, variants, color.</p> <!> <h2>Form</h2> <p>Use the <code>&lt;label&gt;</code> element as it is</p> <!> <h2>Styling</h2> <p>The switch class is a dynamic unocss shortcut so you can extend it</p> <!> <ul><li><strong>Syntax</strong>: <code>switch-[variant]-[color]-[size]</code></li> <li><strong>Color</strong>: color of the switch</li> <li><strong>Size</strong>: Predefined sizes are <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code> or pass a numeric value</li></ul>",1);function N(i,e){m(e,!1);const t=Object.assign({"/codemos/switch/colors.svelte":y,"/codemos/switch/default.svelte":g,"/codemos/switch/form.svelte":C}),c=Object.assign({"/codemos/switch/colors.svelte":S,"/codemos/switch/default.svelte":z,"/codemos/switch/form.svelte":j});w();var l=T(),a=s(f(l),8);u(a,{get preview(){return t["/codemos/switch/default.svelte"]},get html(){return c["/codemos/switch/default.svelte"]}});var n=s(a,6);u(n,{get preview(){return t["/codemos/switch/form.svelte"]},get html(){return c["/codemos/switch/form.svelte"]}});var h=s(n,6);u(h,{get preview(){return t["/codemos/switch/colors.svelte"]},get html(){return c["/codemos/switch/colors.svelte"]}}),b(2),p(i,l),x()}export{N as component};
