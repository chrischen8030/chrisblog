(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{323:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(64),{props:{path:{type:String,default:""}},data:function(){return{blogData:{}}},head:function(){return{link:[{rel:"stylesheet",name:"customy-theme",href:"./assets/css/theme/markdown/markdown.css"}]}},mounted:function(){console.log("===============this.path:",this.path),this.getData(this.path)},methods:{getData:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("===============path:",t),n.next=3,e.$content(t).fetch();case 3:data=n.sent,e.blogData=Object.assign(data,{}),console.log("===============blogData:",e.blogData);case 6:case"end":return n.stop()}}),n)})))()}}}),c=n(62),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("nuxt-content",{attrs:{document:this.blogData}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);