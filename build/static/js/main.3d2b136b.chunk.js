(this["webpackJsonpurl-shortner-frontend"]=this["webpackJsonpurl-shortner-frontend"]||[]).push([[0],{146:function(t,e,n){"use strict";n.r(e);var r=n(4),c=n.n(r),s=n(34),a=n.n(s),o=(n(45),n(35)),i=n(36),l=n(40),h=n(39),u=n(37),d=n.n(u),j=n(38),p=n.n(j),b=(n(64),n(1)),f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={url:"",link:""},t.handleChange=function(e){t.setState({url:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),p.a.isURL(t.state.url,{require_protocol:!0})?(console.log("URL is: ",t.state.url),d.a.post("https://joyce-url-shortner.herokuapp.com/api/shorten",{url:t.state.url}).then((function(e){console.log(e.data.hash),t.setState({link:"http://".concat(e.data.hash)})})).catch((function(t){return console.log(t)}))):alert("Please ensure this URL is correct and includes the http(s) protocol")},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"URL Shortner"})}),Object(b.jsx)("main",{children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("input",{type:"text",name:"url",placeholder:"Enter URL with http(s)",onChange:this.handleChange}),Object(b.jsx)("input",{type:"submit",value:"shorten"})]}),Object(b.jsx)("fieldset",{children:Object(b.jsx)("span",{id:"result",children:this.state.link})})]})})]})}}]),n}(r.Component),O=f,g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),s(t),a(t)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),g()},45:function(t,e,n){},64:function(t,e,n){}},[[146,1,2]]]);
//# sourceMappingURL=main.3d2b136b.chunk.js.map