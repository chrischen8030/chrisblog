(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{309:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(29),n(64),n(198),n(74),n(62),{props:{blog:{type:Object,default:null}},data:function(){return{blogData:null}},head:function(){return{link:[{rel:"stylesheet",name:"customy-theme",href:"./assets/css/theme/markdown/markdown.css"}]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getData(t.blog);case 1:case"end":return e.stop()}}),e)})))()},methods:{getData:function(param){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,path;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!param.path){e.next=8;break}return console.log("param.path==:",param.path),(n=param.path.split("/")).splice(0,1),path=n.join("/"),e.next=7,t.$content(path).fetch();case 7:t.blogData=e.sent;case 8:case"end":return e.stop()}}),e)})))()}}}),c=n(61),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("nuxt-content",{attrs:{document:this.blogData}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);