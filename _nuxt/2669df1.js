(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,5],{236:function(t,e,r){"use strict";r.r(e);var l=r(37),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"NuxtLogo",attrs:{width:"80",height:"40",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),r("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),r("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},237:function(t,e,r){"use strict";r.r(e);var l=r(6),n=(r(38),r(51),r(120),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("blogs").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),c=r(37),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{to:{name:"blogs-slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},238:function(t,e,r){var content=r(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("3faf1e2c",content,!0,{sourceMap:!1})},239:function(t,e,r){"use strict";r.r(e);var l=r(37),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"flex"},[r("NuxtLink",{attrs:{to:"/"}},[r("Logo",{staticClass:"mb-4"})],1),t._v(" "),r("AppSearchInput",{staticClass:"ml-8"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(236).default,AppSearchInput:r(237).default})},240:function(t,e,r){"use strict";r(238)},241:function(t,e,r){var l=r(43)((function(i){return i[1]}));l.push([t.i,".article-card,.article-card a{\n  border-radius:8px\n}\n.article-card a{\n  background-color:#fff\n}\n.article-card img div{\n  border-radius:8px 0 0 8px\n}",""]),t.exports=l},256:function(t,e,r){"use strict";r.r(e);var l=r(6),n=(r(38),r(63),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n,c,o,path,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.$content,l=t.params,console.log(r),console.log(l),n=[],c=0,o=["blogs/html","blogs/japanese","blogs/go","blogs/bigdata"];case 6:if(!(c<o.length)){e.next=15;break}return path=o[c],e.next=10,r(path,l.slug).only(["title","description","img","slug","author","path","createdAt"]).sortBy("createdAt","desc").fetch();case 10:d=e.sent,n=n.concat(d);case 12:c++,e.next=6;break;case 15:return n.sort((function(pre,t){var e=new Date(pre.createdAt);return new Date(t.createdAt)-e})),e.next=18,r("tags",l.slug).only(["name","description","img","slug"]).sortBy("createdAt","asc").fetch();case 18:return f=e.sent,console.log("blogs",n),e.abrupt("return",{blogs:n,tags:f});case 21:case"end":return e.stop()}}),e)})))()}}),c=(r(240),r(37)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-8"},[r("TheHeader"),t._v(" "),r("h1",{staticClass:"font-bold text-4xl"},[t._v("Blog Posts")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap"},t._l(t.blogs,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"blogs-slug",params:{slug:e.slug,path:e.path}}}},[e.img?r("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-coverr",attrs:{src:e.img}}):t._e(),t._v(" "),r("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[r("h2",{staticClass:"font-bold"},[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v("by "+t._s(e.author.name))]),t._v(" "),r("p",{staticClass:"font-bold text-gray-600 text-sm"},[t._v("\n            "+t._s(e.description)+"\n          ")])])])],1)})),0),t._v(" "),r("h3",{staticClass:"mb-4 font-bold text-2xl uppercase text-center"},[t._v("Topics")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap mb-4 text-center"},t._l(t.tags,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"},[r("NuxtLink",{attrs:{to:"/blogs/tag/"+e.slug}},[r("p",{staticClass:"font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"},[t._v("\n        "+t._s(e.name)+"\n      ")])])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:r(239).default})}}]);