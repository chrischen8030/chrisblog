(window.webpackJsonp=window.webpackJsonp||[]).push([[22,9],{287:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(63),{props:{path:{type:String,default:""}},data:function(){return{blogData:{}}},head:function(){return{link:[{rel:"stylesheet",name:"customy-theme",href:"./assets/css/theme/markdown/markdown.css"}]}},mounted:function(){console.log("===============this.path:",this.path),this.getData(this.path)},methods:{getData:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("===============path:",t),n.prev=1,n.next=4,e.$content(t).fetch();case 4:data=n.sent,e.blogData=Object.assign(data,{}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log("data",n.t0);case 11:console.log("===============blogData:",e.blogData);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}}),c=n(62),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("nuxt-content",{attrs:{document:this.blogData}})],1)}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,n){"use strict";n.r(e);n(49),n(14),n(23),n(55),n(31),n(27),n(57),n(65),n(37);var r=n(8);n(63);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("category/firebase.jp").fetch();case 3:return r=e.sent,o=r.sections,e.abrupt("return",{sections:o});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{currentBlog:""}},created:function(){this.getActive(),console.log(11)},mounted:function(){this.getActive()},methods:{click:function(t){console.log("click"),console.log(t);var e,n=o(this.sections);try{for(n.s();!(e=n.n()).done;){var r,c=o(e.value.chapters);try{for(c.s();!(r=c.n()).done;){var l=r.value;t===l?(console.log("is target"),this.currentBlog=l.path,this.$refs.blogBody.getData(this.currentBlog),l.active=!0):l.active=!1}}catch(t){c.e(t)}finally{c.f()}}}catch(t){n.e(t)}finally{n.f()}},getActive:function(){if(this.sections){console.log("this.section:",this.sections);var t,e=o(this.sections);try{for(e.s();!(t=e.n()).done;){var n,r=o(t.value.chapters);try{for(r.s();!(n=r.n()).done;){var c=n.value;console.log("chapter.active:",c.active),console.log("this.$refs.blogBody:",this.$refs.blogBody),console.log("chapter:",c.path),c.active&&(this.currentBlog=c.path,this.$refs.blogBody&&this.$refs.blogBody.getData(this.currentBlog))}}catch(t){r.e(t)}finally{r.f()}}}catch(t){e.e(t)}finally{e.f()}}}}},f=n(62),v=n(281),h=n.n(v),d=n(461),m=n(486),y=n(462),w=n(457),k=n(463),B=n(355),_=n(356),x=n(336),V=n(275),A=n(464),D=n(483),$=n(465),j=n(328),S=n(283),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[n("v-toolbar",{attrs:{color:"teal",dark:""}},[n("v-toolbar-title",[t._v("クリスのブログ")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-list",{attrs:{dense:""}},t._l(t.sections,(function(section,e){return n("v-list-group",{key:e,attrs:{"prepend-icon":section.action,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(section.title)}})],1)]},proxy:!0}],null,!0),model:{value:section.active,callback:function(e){t.$set(section,"active",e)},expression:"section.active"}},[t._v(" "),t._l(section.chapters,(function(e,r){return n("v-list-item",{key:r+"item",class:{"v-list-item--active":e.active},on:{click:function(n){return t.click(e)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],2)})),1)],1)],1),t._v(" "),n("v-app-bar",{attrs:{app:""}}),t._v(" "),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("BlogMarkdownBody",{ref:"blogBody",attrs:{path:t.currentBlog}}),t._v(" "),n("router-view")],1)],1),t._v(" "),n("v-footer",{attrs:{app:""}})],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{BlogMarkdownBody:n(287).default}),h()(component,{VApp:d.a,VAppBar:m.a,VCard:y.a,VContainer:w.a,VFooter:k.a,VList:B.a,VListGroup:_.a,VListItem:x.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:A.a,VNavigationDrawer:D.a,VSpacer:$.a,VToolbar:j.a,VToolbarTitle:S.a})}}]);