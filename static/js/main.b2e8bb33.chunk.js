(this.webpackJsonptemplate_cv_react=this.webpackJsonptemplate_cv_react||[]).push([[0],{15:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var i=t(1),s=t.n(i),l=t(5),n=t.n(l),o=(t(15),t(10)),c=t(0),r=function(e){var a=e.titles,t=e.info;return Object(c.jsxs)("div",{className:"col-md-6","data-aos":"zoom-in-right","data-aos-delay":"100",children:[Object(c.jsx)("h2",{className:"h3 mb-3",children:a.about}),Object(c.jsx)("p",{children:t.aboutme})]})},d=function(e){var a=e.title,t=e.val,i=e.delay;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"col-sm-4","data-aos":"zoom-in-right","data-aos-delay":i,children:Object(c.jsx)("div",{className:"pb-1",children:a})}),Object(c.jsx)("div",{className:"col-sm-8","data-aos":"zoom-in-right","data-aos-delay":i,children:Object(c.jsx)("div",{className:"pb-1 text-secondary",children:t})})]})},m=function(e){var a=e.aboutmeitems;return Object(c.jsx)("div",{className:"col-md-5 offset-md-1",children:Object(c.jsx)("div",{className:"row mt-2",children:a.map((function(e,a){return Object(c.jsx)(d,{delay:100*a,title:e.title,val:e.val},a)}))})})},j=function(e){var a=e.titles,t=e.info,i=t.aboutmeitems;return Object(c.jsx)("div",{className:"about-section pt-1 px-sm-3 px-5 mt-5",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)(r,{titles:a,info:t}),Object(c.jsx)(m,{aboutmeitems:i})]})})},u=function(e){var a=e.post,t=e.name;return Object(c.jsx)("div",{className:" p-3 ",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-lg-8 col-md-7 text-center text-md-start",children:[Object(c.jsx)("h2",{className:"h1 ",children:t}),Object(c.jsx)("p",{children:a})]})})})},b=function(e){var a=e.post,t=e.name;return Object(c.jsx)("div",{className:"cover-bg p-3 p-lg-4 text-white",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-lg-8 col-md-7 text-center text-md-start",children:[Object(c.jsx)("h2",{className:"h1 mt-2","data-aos":"fade-left","data-aos-delay":"0",children:t}),Object(c.jsx)("p",{"data-aos":"fade-left",children:a}),Object(c.jsx)("div",{className:"d-print-none","data-aos":"fade-left","data-aos-delay":"200"})]})})})},v=function(e){var a=e.title,t=e.val,i=e.delay,s=e.color,l="progress-bar bg-".concat(s);return Object(c.jsxs)("div",{className:"col-sm-6 col-md-4",children:[Object(c.jsx)("span",{children:a}),Object(c.jsx)("div",{className:"progress my-1",children:Object(c.jsxs)("div",{className:l,role:"progressbar","data-aos":"zoom-in-right","data-aos-delay":i,"data-aos-anchor":".skills-section",style:{width:"".concat(t,"%")},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100",children:[t,"%"]})})]})},p=function(e){var a=e.skills,t=e.title,i=e.color,s=void 0===i?"primary":i;return Object(c.jsxs)("div",{className:"skills-section px-3 px-lg-4",children:[Object(c.jsx)("h2",{className:"h3 mb-3",children:t}),Object(c.jsx)("div",{className:"row",children:a.map((function(e,a){return Object(c.jsx)(v,{delay:100*a,title:e.title,val:e.val,color:s},a)}))})]})},h=t(2),g=function(e){var a=e.work,t=e.emp,i=e.time,s=e.descrip,l=e.color,n=e.delay,o="timeline-card timeline-card-".concat(l," card shadow-sm");return Object(c.jsx)("div",{className:o,"data-aos":"zoom-in-right","data-aos-delay":n,"data-aos-anchor":".skills-section",children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsxs)("div",{className:"h5 mb-1",children:[a,Object(c.jsxs)("span",{className:"text-muted h6",children:[" ",t]})]}),Object(c.jsx)("div",{className:"text-muted text-small mb-2",children:i}),Object(c.jsx)("div",{children:s})]})})},f=function(e){var a=e.works,t=e.title,s=e.color,l=void 0===s?"primary":s;return Object(c.jsxs)("div",{className:"work-experience-section px-3 px-lg-4",children:[Object(c.jsx)("h2",{className:"h3 mb-4",children:t}),Object(c.jsx)("div",{className:"timeline",children:a.map((function(e,a){return Object(i.createElement)(g,Object(h.a)(Object(h.a)({},e),{},{color:l,key:a}))}))})]})},x=function(e){var a=e.datalang,t=a.info,i=a.titles;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{name:t.name,post:t.post}),Object(c.jsx)(j,{info:t,titles:i}),Object(c.jsx)(p,{skills:t.language_skills,title:i.skilleng}),Object(c.jsx)(p,{skills:t.lib_skills,title:i.skilfra,color:"success"}),Object(c.jsx)(f,{title:i.workt,works:t.workitems}),Object(c.jsx)(f,{title:i.edugt,works:t.educationitems,color:"success"})]})},O=function(e){var a=e.datalang,t=a.info,i=a.titles;return Object(c.jsx)("div",{className:"page-content",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"cover shadow-lg bg-white",children:[Object(c.jsx)(b,{name:t.name,post:t.post}),Object(c.jsx)(j,{info:t,titles:i}),Object(c.jsx)("hr",{className:"d-print-none"}),Object(c.jsx)(p,{skills:t.language_skills,title:i.skilleng}),Object(c.jsx)("hr",{className:"d-print-none"}),Object(c.jsx)(p,{skills:t.lib_skills,title:i.skilfra,color:"success"}),Object(c.jsx)("hr",{className:"d-print-none"}),Object(c.jsx)(f,{title:i.workt,works:t.workitems}),Object(c.jsx)("hr",{className:"d-print-none"}),Object(c.jsx)(f,{title:i.edugt,works:t.educationitems,color:"success"})]})})})},k=t(6),N=t(4),y=Object(i.createContext)(),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(console.log(a.locale),a.lang){case"ES":return Object(h.a)(Object(h.a)({},e),{},{locale:"EN",datalang:k});case"EN":return Object(h.a)(Object(h.a)({},e),{},{locale:"ES",datalang:N});default:return e}},C=function(e){var a=e.name,t=void 0===a?"":a,i=e.icon,s=void 0===i?"":i,l=e.text,n=void 0===l?"":l,o=e.link,r=void 0===o?"":o;return Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)("a",{className:"nav-link",href:r,title:t,children:[Object(c.jsx)("i",{className:s,children:n}),Object(c.jsx)("span",{className:"menu-title sr-only",children:t})]})})},S=t(7),P=t.n(S),E=t(8),A=function(e){var a=e.social,t=e.datalang,s=e.isfooter,l=Object(i.useContext)(y).dispatch,n=Object(i.useContext)(y).data;return Object(c.jsx)("nav",{role:"navigation",children:Object(c.jsxs)("ul",{className:"nav justify-content-center",children:[!s&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)("button",{className:"btn btn-dark",onClick:function(){l({lang:n.locale})},children:[Object(c.jsx)("i",{className:"far fa-language",children:n.locale}),Object(c.jsx)("span",{className:"menu-title sr-only",children:n.locale})]})}),Object(c.jsx)(C,{name:"PDF",icon:"far fa-file-pdf",action:function(){var e=Object(E.renderToString)(Object(c.jsx)(x,{datalang:t})),a=new P.a("p","mm","a4");a.fromHTML(e),a.save("pdf")}},"999")]}),a.map((function(e,a){var t=e.name,i=e.icon,s=e.link;return Object(c.jsx)(C,{name:t,icon:i,link:s},a)}))]})})},D=function(e){var a=e.isfooter,t=void 0!==a&&a,i=e.datalang;return Object(c.jsx)(c.Fragment,{children:t?Object(c.jsx)("footer",{className:"pt-4 pb-4 text-muted text-center d-print-none",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"my-3",children:[Object(c.jsx)("div",{className:"h4",children:i.info.name}),Object(c.jsx)("div",{className:"footer-nav",children:Object(c.jsx)(A,{social:i.info.social,datalang:i,isfooter:t})})]})})}):Object(c.jsx)("header",{className:"d-print-none",children:Object(c.jsx)("div",{className:"container text-center text-lg-left",children:Object(c.jsxs)("div",{className:"py-3 clearfix",children:[Object(c.jsx)("h1",{className:"site-title mb-0",children:i.info.name}),Object(c.jsx)("div",{className:"site-nav",children:Object(c.jsx)(A,{social:i.info.social,datalang:i,isfooter:t})})]})})})})},L=function(){return{locale:"ES",datalang:t(4)}},G=function(){var e=Object(i.useReducer)(w,{},L),a=Object(o.a)(e,2),t=a[0],s=a[1];return Object(c.jsxs)(y.Provider,{value:{data:t,dispatch:s},children:[Object(c.jsx)(D,{datalang:t.datalang}),Object(c.jsx)(O,{datalang:t.datalang,children:" "}),Object(c.jsx)(D,{isfooter:!0,datalang:t.datalang})]})},M=t(9),z=function(){return Object(i.useEffect)((function(){return Object(M.init)({anchorPlacement:"top-left",duration:1e3}),function(){}}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(G,{})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(a){var t=a.getCLS,i=a.getFID,s=a.getFCP,l=a.getLCP,n=a.getTTFB;t(e),i(e),s(e),l(e),n(e)}))};n.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),F()},4:function(e){e.exports=JSON.parse('{"locale":"en-us","titles":{"about":"About Me","skilleng":"Language Skills","skilfra":"Skill in framework and library and tools","workt":"Work experience and projects developed","edugt":"Education"},"info":{"name":"Rafael Hidalgo","post":"System developer and web developer","workitems":[{"work":"Coordinator and developer","emp":"at the data age","time":"March, 2017 - Present","descrip":"Coordination of developments in the O-SGC commercial system; carrying out the analysis tasks of the required solution, planning and assigning tasks to programmers, monitoring modifications and system implementations, specializing in the development of batch biller programs. \\nCoordination of development of TDA commercial management application . (Creator of Docker development environments and rest api in golang). \\n"},{"work":"Electronic billing project in Energuate Guatemala","emp":"at the data age","time":"August, 2019 - December, 2019","descrip":"Coordination of developments in the electronic certification system or FEL for Energuate in charge of creating the demon that communicates with Sap of Guatemala to sign the invoices of the commercial system"},{"work":"Electronic billing project in Salvador AES","emp":"at the data age","time":"August, 2021 - Present","descrip":"Coordination of developments in the electronic certification system or FEL for Aes in charge of creating the demon that communicates with the Hacienda de Salvador to sign the invoices of the commercial system, this certifies the legal documents of the company"},{"work":"Rest api support","emp":"at Workana","time":"March, 2020 - Present","descrip":"AWS service support in golang creating new requests."},{"work":"Crazysales Project","emp":"at Loterial publishes","time":"May, 2020 - August, 2020","descrip":"Ticketa flutter project for public lotteries."}],"educationitems":[{"work":"Computer Engineering","emp":"at Polytechnic University of Nicaragua","time":"March, 2014 - December, 2019","descrip":"is a professional capable of researching, analyzing, designing, building and evaluating computer systems that integrate hardware, software, and communications with digital devices and their interfaces with other devices and users, to satisfy the scientific, technological and functional needs of businesses and organizations in a national economy."}],"aboutmeitems":[{"title":"Age","val":"24"},{"title":"Email","val":"rafael180496@gmail.com"},{"title":"Phone","val":"+505-8884-2174"},{"title":"Addres","val":"Doral city, Managua km 18, Nicaragua"},{"title":"Identification","val":"001-180496-0013A"}],"lib_skills":[{"title":"React(JS)","val":80},{"title":"Grahql(JS,GO)","val":60},{"title":"Boostrap(Css)","val":70},{"title":"NodeJS(JS)","val":80},{"title":"GORM(GO)","val":80},{"title":"Flutter(Dart)","val":80},{"title":"Asp .net MVC(C#)","val":70},{"title":"Git","val":90},{"title":"Docker,Docker Compose","val":80},{"title":"Aws","val":60},{"title":"Heroku","val":75},{"title":"Oracle","val":90},{"title":"PostgreSQL","val":90}],"language_skills":[{"title":"Javascript","val":90},{"title":"Golang","val":100},{"title":"C#","val":70},{"title":"COBOL","val":70},{"title":"PYTHON","val":80},{"title":"Pro C","val":70},{"title":"PL/SQL","val":90},{"title":"CSS","val":40},{"title":"HTML","val":60},{"title":"Kotlin","val":60},{"title":"Dart","val":60},{"title":"Visual Basic","val":60}],"social":[{"name":"Githud","icon":"fab fa-github","link":"https://github.com/rafael180496"},{"name":"Linkedin","icon":"fab fa-linkedin-in","link":"https://www.linkedin.com/in/rafael-antonio-hidalgo-romero-71608a116/"}],"aboutme":"Hi, I\'m Rafael, I\'m passionate about backend and frontend development,\\n I\'m an expert in library for rest api service and I like frontend development in React."}}')},6:function(e){e.exports=JSON.parse('{"locale":"en-mx","titles":{"about":"Sobre mi","skilleng":"Habilidad en lenguajes","skilfra":"Habilidad en framework e librer\xeda y herramientas","workt":"Experiencia laboral y proyectos elaborados","edugt":"Educacion"},"info":{"name":"Rafael Hidalgo","post":"Desarrollador de sistema  y desarrollador web","workitems":[{"work":"Coordinador y desarrollador","emp":"a the data age","time":"Marzo,2017 - Presente","descrip":" Coordinaci\xf3n de desarrollos en el sistema comercial O-SGC; llevando a cabo las tareas de an\xe1lisis de la soluci\xf3n requerida, planificaci\xf3n y asignaci\xf3n de tareas a programadores, seguimiento de las modificaciones e implementaciones de sistemas, especializ\xe1ndose en el desarrollo de los programas del facturador batch.\\nCoordinacion de desarrollo de aplicacion de gestion comercial TDA.(Creador de Ambientes de desarrollo Docker e api rest en golang).\\n"},{"work":"Proyecto de Facturacion electronica en Energuate Guatemala","emp":"a the data age","time":"Agosto,2019 - Diciembre,2019","descrip":" Coordinaci\xf3n de desarrollos en el sistema de certificacion electronica o FEL para Energuate encargado de crear el demonio que se comunica con Sap de guatemala para firma las facturas del sistema comercial"},{"work":"Proyecto de Facturacion electronica en Salvador AES","emp":"a the data age","time":"Agosto,2021 - Presente","descrip":" Coordinaci\xf3n de desarrollos en el sistema de certificacion electronica o FEL para Aes encargado de crear el demonio que se comunica con hacienda de salvador para firma las facturas del sistema comercial esto certifica los documentos legales de la empresa"},{"work":"Soporte de api rest","emp":"a Workana","time":"Marzo,2020 - Presente","descrip":"Soporte de servicio AWS en golang creando nuevas peticiones."},{"work":"Proyecto Crazysales","emp":"a Loterial publica","time":"Mayo,2020 - Agosto,2020","descrip":"Proyecto en flutter de ticketa para loteros publicos."}],"educationitems":[{"work":"Ingenieria en Computacion","emp":"a Universidad Politecnica de Nicaragua","time":"Marzo,2014 - Diciembre,2019","descrip":"es un profesional capaz de investigar, analizar, dise\xf1ar, construir y evaluar sistemascomputacionales que integre hardware, software, y comunicaciones con dispositivos digitales y sus interfaces con otros dispositivos y usuarios, para satisfacer las necesidades cient\xedficas, tecnol\xf3gicas y funcionales de los negocios y las organizaciones en una econom\xeda nacional. "}],"aboutmeitems":[{"title":"Edad","val":"24"},{"title":"Correo","val":"rafael180496@gmail.com"},{"title":"Telefono","val":"+505-8884-2174"},{"title":"Dirrecion","val":"Ciudad Doral, Managua km 18, Nicaragua"},{"title":"Identificacion","val":"001-180496-0013A"}],"lib_skills":[{"title":"React(JS)","val":80},{"title":"Grahql(JS,GO)","val":60},{"title":"Boostrap(Css)","val":70},{"title":"NodeJS(JS)","val":80},{"title":"GORM(GO)","val":80},{"title":"Flutter(Dart)","val":80},{"title":"Asp .net MVC(C#)","val":70},{"title":"Git","val":90},{"title":"Docker,Docker Compose","val":80},{"title":"Aws","val":60},{"title":"Heroku","val":75},{"title":"Oracle","val":90},{"title":"PostgreSQL","val":90}],"language_skills":[{"title":"Javascript","val":90},{"title":"Golang","val":100},{"title":"C#","val":70},{"title":"COBOL","val":70},{"title":"PYTHON","val":80},{"title":"Pro C","val":70},{"title":"PL/SQL","val":90},{"title":"CSS","val":40},{"title":"HTML","val":60},{"title":"Kotlin","val":60},{"title":"Dart","val":60},{"title":"Visual Basic","val":60}],"social":[{"name":"Githud","icon":"fab fa-github","link":"https://github.com/rafael180496"},{"name":"Linkedin","icon":"fab fa-linkedin-in","link":"https://www.linkedin.com/in/rafael-antonio-hidalgo-romero-71608a116/"}],"aboutme":"Hola soy Rafael soy un apasionado al desarrollo backend y frontend, \\nSoy experto en libreria para servicio rest api e me gusta el desarrollo frontend en React"}}')}},[[22,1,2]]]);
//# sourceMappingURL=main.b2e8bb33.chunk.js.map