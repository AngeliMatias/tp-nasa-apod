(this["webpackJsonptp-nasa-apod"]=this["webpackJsonptp-nasa-apod"]||[]).push([[0],{23:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t.n(s),n=t(15),r=t.n(n),i=(t(23),t(8)),l=t(2),o=t(1);function j(){return Object(o.jsx)("div",{className:"flex justify-center items-center h-screen bg-blue-space bg-cover",children:Object(o.jsx)("div",{children:Object(o.jsx)(i.b,{className:"text-center uppercase text-xl text-white inline-block bg-blue-800 p-8 shadow-2xl  rounded-lg border-4 border-blue-900 hover:border-blue-300 font-mono",to:"/nasaAPOD",children:"Show me the Astronomy Photo of the Day!"})})})}var b=t(14),d=t.n(b),h=t(17),x=t(18);function m(){return Object(o.jsx)("div",{className:"flex justify-center bg-black bg-opacity-40",children:Object(o.jsx)("ul",{children:Object(o.jsx)(i.b,{className:"inline-block text-white font-mono",to:"/",children:"Get back to earth"})})})}t(34);var u=function(){return Object(o.jsx)("div",{className:"flex justify-center items-center h-screen bg-blue-space bg-cover",children:Object(o.jsxs)("div",{className:"sk-circle",children:[Object(o.jsx)("div",{className:"sk-circle1 sk-child"}),Object(o.jsx)("div",{className:"sk-circle2 sk-child"}),Object(o.jsx)("div",{className:"sk-circle3 sk-child"}),Object(o.jsx)("div",{className:"sk-circle4 sk-child"}),Object(o.jsx)("div",{className:"sk-circle5 sk-child"}),Object(o.jsx)("div",{className:"sk-circle6 sk-child"}),Object(o.jsx)("div",{className:"sk-circle7 sk-child"}),Object(o.jsx)("div",{className:"sk-circle8 sk-child"}),Object(o.jsx)("div",{className:"sk-circle9 sk-child"}),Object(o.jsx)("div",{className:"sk-circle10 sk-child"}),Object(o.jsx)("div",{className:"sk-circle11 sk-child"}),Object(o.jsx)("div",{className:"sk-circle12 sk-child"})]})})};function p(){var e=Object(s.useState)(null),c=Object(x.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){function e(){return(e=Object(h.a)(d.a.mark((function e(){var c,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=OpM62yerNrYbNeTCLIoRgQftFj2UHeGSuPqNmngl");case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,a(t),console.log(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t?Object(o.jsx)(s.Fragment,{children:Object(o.jsxs)("div",{className:"bg-blue-space bg-cover max-h-full",children:[Object(o.jsx)(m,{}),Object(o.jsxs)("div",{className:"flex p-2.5 m-0",children:["image"===t.media_type?Object(o.jsx)("img",{src:t.url,alt:"photoData.title",className:"border-4 border-black border-opacity-30 mr-3 w-1/2 object-contain max-h-screen"}):Object(o.jsx)("iframe",{title:"space-video",src:t.url,frameBorder:"0",allow:"autoplay",allowFullScreen:!0,className:"border-4 border-black border-opacity-30 mr-3 w-1/2 object-contain max-h-screen"}),Object(o.jsxs)("div",{className:"text-white p-10 mt-0 mb-auto",children:[Object(o.jsx)("h1",{className:"font-serif my-0 text-3xl ",children:t.title}),Object(o.jsx)("p",{className:"font-serif mt-0 mb-7",children:t.date}),Object(o.jsx)("p",{className:"font-sans text-xl",children:t.explanation}),Object(o.jsxs)("p",{className:"font-serif mt-2",children:["Author: ",t.copyright]})]})]})]})}):Object(o.jsx)(u,{})}t(35);var O=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(l.a,{component:j,path:"/",exact:!0}),Object(o.jsx)(l.a,{component:p,path:"/nasaAPOD"})]})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,r=c.getTTFB;t(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),f()}},[[36,1,2]]]);
//# sourceMappingURL=main.dc251f04.chunk.js.map