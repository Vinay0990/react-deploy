(this["webpackJsonpsample-frontend"]=this["webpackJsonpsample-frontend"]||[]).push([[0],{352:function(t,e,n){},369:function(t,e,n){},430:function(t,e,n){"use strict";n.r(e);var a=n(114),o=n(0),c=n.n(o),i=n(15),l=n.n(i),r=(n(352),n(227)),d=n(16),s=n(334),f=n.n(s),u=(n(369),n(220)),m=n.n(u);var b=function(){var t=Object(o.useState)({data:[]}),e=Object(d.a)(t,2),n=e[0],c=e[1];return Object(o.useEffect)((function(){f.a.get("/contacts").then((function(t){c(Object(r.a)(Object(r.a)({},n),{},{data:t.data.results})),console.log(t)})).catch((function(t){return console.log(t)}))}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(m.a,{title:"Contacts List",columns:[{title:"Name",field:"contact_name"},{title:"Company Name",field:"company_name"},{title:"Type",field:"contact_type_formatted"},{title:"Email",field:"email"},{title:"Mobile",field:"mobile"},{title:"Place of Contact",field:"place_of_contact_formatted"},{title:"Created Time",field:"created_time_formatted"},{title:"Status",field:"status"}],data:n.data,options:{sorting:!0,exportButton:!0,headerStyle:{backgroundColor:"#01579b",color:"#FFF"},rowStyle:{backgroundColor:"aqua"}}})})},p=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,829)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),o(t),c(t),i(t)}))};l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),p()}},[[430,1,3]]]);
//# sourceMappingURL=main.4cf99feb.chunk.js.map