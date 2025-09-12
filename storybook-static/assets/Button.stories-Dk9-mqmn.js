const S={title:"Components/Button",parameters:{docs:{description:{component:"Standard button components with design token styling, hover effects, and theme support."}}},argTypes:{text:{control:"text",description:"Button text content"},disabled:{control:"boolean",description:"Whether the button is disabled"},width:{control:"select",options:["auto","full"],description:"Button width style"}}},o=({text:x,disabled:y,width:f})=>`
    <section>
      <container>
        <div class="stack stack-default" style="flex-direction: column;">
          <button ${y?"disabled":""} ${f==="auto"?'style="width: auto;"':""}>${x}</button>
        </div>
      </container>
    </section>
  `,t=o.bind({});t.args={text:"Click me",disabled:!1,width:"full"};const e=o.bind({});e.args={text:"Disabled button",disabled:!0,width:"full"};const n=o.bind({});n.args={text:"Auto width button",disabled:!1,width:"auto"};const s=o.bind({});s.args={text:"This is a button with much longer text to test wrapping and how it behaves with the design tokens",disabled:!1,width:"full"};var i,a,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
  text,
  disabled,
  width
}) => {
  const widthStyle = width === 'auto' ? 'style="width: auto;"' : '';
  return \`
    <section>
      <container>
        <div class="stack stack-default" style="flex-direction: column;">
          <button \${disabled ? 'disabled' : ''} \${widthStyle}>\${text}</button>
        </div>
      </container>
    </section>
  \`;
}`,...(d=(a=t.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var r,c,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  text,
  disabled,
  width
}) => {
  const widthStyle = width === 'auto' ? 'style="width: auto;"' : '';
  return \`
    <section>
      <container>
        <div class="stack stack-default" style="flex-direction: column;">
          <button \${disabled ? 'disabled' : ''} \${widthStyle}>\${text}</button>
        </div>
      </container>
    </section>
  \`;
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,h,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
  text,
  disabled,
  width
}) => {
  const widthStyle = width === 'auto' ? 'style="width: auto;"' : '';
  return \`
    <section>
      <container>
        <div class="stack stack-default" style="flex-direction: column;">
          <button \${disabled ? 'disabled' : ''} \${widthStyle}>\${text}</button>
        </div>
      </container>
    </section>
  \`;
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,p,m;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`({
  text,
  disabled,
  width
}) => {
  const widthStyle = width === 'auto' ? 'style="width: auto;"' : '';
  return \`
    <section>
      <container>
        <div class="stack stack-default" style="flex-direction: column;">
          <button \${disabled ? 'disabled' : ''} \${widthStyle}>\${text}</button>
        </div>
      </container>
    </section>
  \`;
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const $=["Default","Disabled","AutoWidth","LongText"];export{n as AutoWidth,t as Default,e as Disabled,s as LongText,$ as __namedExportsOrder,S as default};
