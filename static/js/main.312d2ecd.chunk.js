(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var a=n(8),c=n.n(a),r=n(2),s=n(3),i=n(5),l=n(4),b=n(1),o=n.n(b),d=(n(7),n(0)),u=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.tabs,n=t.selectedTab,a=t.handleSelect;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"nav nav-tabs",children:e.map((function(t){return Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("button",{type:"button",className:"nav-link",onClick:function(){return a(t.id)},children:t.title},t.id)})}))}),n.content]})}}]),n}(o.a.Component),h=u,j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],p=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:j[0]},t.handleSelect=function(e){var n=j.findIndex((function(t){return t.id===e}));t.setState({selectedTab:j[n]})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("h1",{children:["Selected tab is\xa0",this.state.selectedTab.id]}),Object(d.jsx)(h,{tabs:j,selectedTab:this.state.selectedTab,handleSelect:this.handleSelect})]})}}]),n}(o.a.Component),v=p;c.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))},7:function(t,e,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.312d2ecd.chunk.js.map