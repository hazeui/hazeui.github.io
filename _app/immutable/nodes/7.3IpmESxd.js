import"../chunks/DsnmJJEf.js";import"../chunks/syurT9jH.js";import{f as p,c as d,s as i,r as s,a as u,X as g,n as l,p as f,b as y}from"../chunks/BYfyV0DM.js";import{i as v}from"../chunks/CEiPiiYU.js";import{T as c}from"../chunks/BFXgL3v9.js";var h=p('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded"><input type="radio" class="radio" name="group1"/> <input type="radio" class="radio-primary" name="group1"/> <input type="radio" class="radio-red" name="group1"/> <input type="radio" class="radio-amber4" name="group1"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-sm" name="group2"/> <input type="radio" class="radio-md" name="group2"/> <input type="radio" class="radio-lg" name="group2"/> <input type="radio" class="radio-xl" name="group2"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radio-4" name="group3"/> <input type="radio" class="radio-indigo-6" name="group3"/> <input type="radio" class="radio-red-8" name="group3"/> <input type="radio" class="radio-slate-9" name="group3"/> <hr class="w-full brd border-input my2"/> <input type="radio" class="radiob-blue" name="group4"/> <input type="radio" class="radiob-amber" name="group4"/> <input type="radio" class="radiob-emerald" name="group4"/> <input type="radio" class="radiob" name="group4"/></div>');function x(r){var e=h(),a=d(e);a.defaultChecked=!0;var o=i(a,14);o.defaultChecked=!0;var n=i(o,8);n.defaultChecked=!0;var t=i(n,14);t.defaultChecked=!0,s(e),u(r,e)}var _=p('<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&amp;>label]:mr3"><input type="radio" id="option1" name="group" class="radio"/> <label for="option1">Arch</label> <input type="radio" id="option2" name="group" class="radio"/> <label for="option2">Void</label> <input type="radio" id="option3" name="group" class="radiob"/> <label for="option3">Ubuntu</label> <input type="radio" id="option4" name="group" class="radiob"/> <label for="option4">Fedora</label></div> <br/>',1);function k(r){var e=_(),a=g(e),o=d(a);o.defaultChecked=!0,l(14),s(a),l(2),u(r,e)}var C=p('<div class="flex brd p20 gap5 rounded-xl justify-center"><div class="[&amp;>*:nth-child(even)]:ml3 gap-x3 gap-y7 grid grid-cols-[auto_1fr] items-center"><input type="radio" id="email" name="x" class="radio"/> <label for="email">Email notifications</label> <input type="radio" id="sms" name="x" class="radio-blue"/> <div><label for="sms">SMS notifications</label><br/> <span class="text-inactivefg text-sm">Standard messaging rates may apply</span></div> <input type="radio" id="none" name="x" class="radio-slate"/> <label for="none">No notifications</label> <input type="radio" id="disagree" name="x" class="radio-red"/> <label for="disagree">Stop Bothering!</label></div></div>');function w(r){var e=C(),a=d(e),o=d(a);o.defaultChecked=!0,l(14),s(a),s(e),u(r,e)}const S=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded">
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
`,z=`<div class="flex flex-gap3 flex-wrap items-center brd p5 rounded [&>label]:mr3">
  <input type="radio" id="option1" name="group" class="radio" defaultChecked />
  <label for="option1">Arch</label>

  <input type="radio" id="option2" name="group" class="radio" />
  <label for="option2">Void</label>

  <input type="radio" id="option3" name="group" class="radiob" />
  <label for="option3">Ubuntu</label>

  <input type="radio" id="option4" name="group" class="radiob" />
  <label for="option4">Fedora</label>
</div>

<br/>
`,T=`<div class="flex brd p20 gap5 rounded-xl justify-center">
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
`;var j=p("<h1>Radio</h1> <p>To style the radio, add the “radio-color-size” class</p> <h2>Usage</h2> <p>Add the radio class to the input element to apply size, color, and state-based styles.</p> <!> <h2>Form</h2> <p>Use the <code>&lt;label&gt;</code> element as it is</p> <!> <h2>Styling</h2> <p>The radio class is a dynamic unocss shortcut so you can extend it</p> <!> <ul><li><strong>Syntax</strong>: <code>radio-[color]-[size]</code></li> <li><strong>Color</strong>: color of the radio</li> <li><strong>Size</strong>: Predefined sizes are <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, or pass a numeric value (<code>radio-5</code>)</li> <li><strong>Icon color</strong>: use the <code>text-color</code> class</li></ul> <blockquote><p>NOTE: If radio-lg is used, then the default color is <code>primary</code></p></blockquote>",1);function O(r,e){f(e,!1);const a=Object.assign({"/codemos/radio/colors.svelte":x,"/codemos/radio/default.svelte":k,"/codemos/radio/form.svelte":w}),o=Object.assign({"/codemos/radio/colors.svelte":S,"/codemos/radio/default.svelte":z,"/codemos/radio/form.svelte":T});v();var n=j(),t=i(g(n),8);c(t,{get preview(){return a["/codemos/radio/default.svelte"]},get html(){return o["/codemos/radio/default.svelte"]}});var m=i(t,6);c(m,{get preview(){return a["/codemos/radio/form.svelte"]},get html(){return o["/codemos/radio/form.svelte"]}});var b=i(m,6);c(b,{get preview(){return a["/codemos/radio/colors.svelte"]},get html(){return o["/codemos/radio/colors.svelte"]}}),l(4),u(r,n),y()}export{O as component};
