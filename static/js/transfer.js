webpackJsonp([0],{KKT7:function(e,n,t){var r={"./94dc1a0e2eb21c3da0801a35b396ef14":["zdja",3],"./94dc1a0e2eb21c3da0801a35b396ef14.vue":["zdja",3]};function o(e){var n=r[e];return n?t.e(n[1]).then(function(){return t(n[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}o.keys=function(){return Object.keys(r)},o.id="KKT7",e.exports=o},Q0sG:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={props:["type"],data:function(){return{component:null}},computed:{loader:function(){var e=this;return this.type?function(){return t("KKT7")("./"+e.type)}:null}},mounted:function(){var e=this;this.loader().then(function(){e.component=function(){return e.loader()}})}},o={render:function(){var e=this.$createElement,n=this._self._c||e;return this.component?n(this.component,{tag:"component"}):this._e()},staticRenderFns:[]},u={components:{Loader:t("VU/8")(r,o,!1,null,null,null).exports}},c={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("loader",{attrs:{type:this.$route.query.id}})],1)},staticRenderFns:[]},i=t("VU/8")(u,c,!1,null,null,null);n.default=i.exports}});