(function(e){function i(i){for(var n,a,l=i[0],c=i[1],u=i[2],d=0,b=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(i);while(b.length)b.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,i=0;i<r.length;i++){for(var t=r[i],n=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(n=!1)}n&&(r.splice(i--,1),e=l(l.s=t[0]))}return e}var n={},o={index:0},r=[];function a(e){return l.p+"static/js/"+({"src-transfer":"src-transfer"}[e]||e)+".js"}function l(i){if(n[i])return n[i].exports;var t=n[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var i=[],t=o[e];if(0!==t)if(t)i.push(t[2]);else{var n=new Promise((function(i,n){t=o[e]=[i,n]}));i.push(t[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=a(e);var u=new Error;r=function(i){c.onerror=c.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var n=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,t[1](u)}o[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(i)},l.m=e,l.c=n,l.d=function(e,i,t){l.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,i){if(1&i&&(e=l(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)l.d(t,n,function(i){return e[i]}.bind(null,n));return t},l.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(i,"a",i),i},l.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=i,c=c.slice();for(var d=0;d<c.length;d++)i(c[d]);var f=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"034f":function(e,i,t){"use strict";var n=t("483d"),o=t.n(n);o.a},"0523":function(e,i,t){"use strict";var n;t.d(i,"b",(function(){return o})),t.d(i,"c",(function(){return r})),t.d(i,"a",(function(){return n}));var o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"page-share-title"},[t("v-uni-text",[e._v("感谢"+e._s(e.name)+"提供本示例，")]),t("v-uni-text",{staticClass:"submit",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.submit.apply(void 0,arguments)}}},[e._v("我也提交")])],1)},r=[]},1576:function(e,i,t){"use strict";var n;t.d(i,"b",(function(){return o})),t.d(i,"c",(function(){return r})),t.d(i,"a",(function(){return n}));var o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"uni-page-head"},[t("v-uni-view",{staticClass:"uni-page-head-title"},[e._v(e._s(e.title))])],1)},r=[]},"23be":function(e,i,t){"use strict";t.r(i);var n=t("341d"),o=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(i,e,(function(){return n[e]}))}(r);i["default"]=o.a},"27d6":function(e,i,t){"use strict";t.r(i);var n=t("aa2f"),o=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(i,e,(function(){return n[e]}))}(r);i["default"]=o.a},"341d":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},globalData:{platform:"tphone"}};i.default=n},"3dfd":function(e,i,t){"use strict";t.r(i);var n=t("e26d"),o=t("23be");for(var r in o)"default"!==r&&function(e){t.d(i,e,(function(){return o[e]}))}(r);t("034f");var a,l=t("f0c5"),c=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);i["default"]=c.exports},"42af":function(e,i,t){"use strict";t.r(i);var n=t("1576"),o=t("625c");for(var r in o)"default"!==r&&function(e){t.d(i,e,(function(){return o[e]}))}(r);var a,l=t("f0c5"),c=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);i["default"]=c.exports},4360:function(e,i,t){"use strict";var n=t("4ea4");t("d3b7"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("96cf");var o=n(t("1da1")),r=n(t("e143")),a=n(t("2f62"));r.default.use(a.default);var l=new a.default.Store({state:{hasLogin:!1,loginProvider:"",openid:null,colorIndex:0,colorList:["#FF0000","#00FF00","#0000FF"],vuexMsg:"vuex"},mutations:{login:function(e,i){e.hasLogin=!0,e.loginProvider=i},logout:function(e){e.hasLogin=!1,e.openid=null},setOpenid:function(e,i){e.openid=i},setColorIndex:function(e,i){e.colorIndex=i},setVuexMsg:function(e,i){e.vuexMsg=i}},getters:{currentColor:function(e){return e.colorList[e.colorIndex]}},actions:{getUserOpenId:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(i){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=i.commit,n=i.state,e.next=3,new Promise((function(e,i){n.openid?e(n.openid):uni.login({success:function(i){t("login"),setTimeout((function(){var i="123456789";console.log("uni.request mock openid["+i+"]"),t("setOpenid",i),e(i)}),1e3)},fail:function(e){console.log("uni.login 接口调用失败，将无法正常使用开放接口等服务",e),i(e)}})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));function i(i){return e.apply(this,arguments)}return i}(),setVuexMsgFun:function(e,i){e.commit("setVuexMsg",i)}}}),c=l;i.default=c},"483d":function(e,i,t){var n=t("867b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=t("4f06").default;o("b29d6b30",n,!0,{sourceMap:!1,shadowMode:!1})},"4ea8":function(e,i,t){"use strict";t.r(i);var n=t("0523"),o=t("8d10");for(var r in o)"default"!==r&&function(e){t.d(i,e,(function(){return o[e]}))}(r);t("610a");var a,l=t("f0c5"),c=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"61c1b5ec",null,!1,n["a"],a);i["default"]=c.exports},"56d7":function(e,i,t){"use strict";var n=t("4ea4"),o=n(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("6cdc"),t("1c31"),t("921b");var r=n(t("e143")),a=n(t("3dfd")),l=n(t("42af")),c=n(t("4ea8")),u=n(t("fad7")),d=n(t("4360")),f=n(t("6f6a"));r.default.config.productionTip=!1,r.default.prototype.$store=d.default,r.default.prototype.$backgroundAudioData={playing:!1,playTime:0,formatedPlayTime:"00:00:00"},r.default.prototype.$global=f.default,r.default.component("page-head",l.default),r.default.component("page-foot",c.default),r.default.component("uLink",u.default),a.default.mpType="app";var b=new r.default((0,o.default)({store:d.default},a.default));b.$mount()},5768:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={pages:{"src/transfer":{}},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"Hello uniapp",navigationBarBackgroundColor:"#007AFF",backgroundColor:"#F8F8F8",backgroundColorTop:"#F4F5F6",backgroundColorBottom:"#F4F5F6"}};i.default=n},"610a":function(e,i,t){"use strict";var n=t("89d8"),o=t.n(n);o.a},6122:function(e,i,t){e.exports=t.p+"static/fonts/uni.75745d34.ttf"},"625c":function(e,i,t){"use strict";t.r(i);var n=t("6902"),o=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(i,e,(function(){return n[e]}))}(r);i["default"]=o.a},6902:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"page-head",props:{title:{type:String,default:""}}};i.default=n},"6cdc":function(e,i,t){"use strict";(function(e){var i=t("4ea4"),n=i(t("e143"));e["____necp.dem.ywdj____"]=!0,delete e["____necp.dem.ywdj____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"Hello uniapp",navigationBarBackgroundColor:"#007AFF",backgroundColor:"#F8F8F8",backgroundColorTop:"#F4F5F6",backgroundColorBottom:"#F4F5F6"}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:2e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={maps:{qqmap:{key:""}}},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},n.default.component("src-transfer",(function(e){var i={component:t.e("src-transfer").then(function(){return e(t("5891"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(i.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(i.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),i})),e.__uniRoutes=[{path:"/",alias:"/src/transfer",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{})},[e("src-transfer",{slot:"page"})])}},meta:{id:1,name:"src-transfer",isNVue:!1,pagePath:"src/transfer",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},"6f6a":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={websiteUrl:"http://uniapp.dcloud.io",setWebsiteUrl:function(e){this.websiteUrl=e}},o=n;i.default=o},"867b":function(e,i,t){var n=t("24fb"),o=t("1de5"),r=t("6122");i=n(!1);var a=o(r);i.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url("+a+') format("truetype")}\n/*通用 */uni-view{font-size:%?28?%;line-height:1.8}uni-progress, uni-checkbox-group{width:100%}uni-form{width:100%}.uni-flex{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-flex-item{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-link{color:#576b95;font-size:%?26?%}.uni-center{text-align:center}.uni-inline-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-inline-item uni-text{margin-right:%?20?%}.uni-inline-item uni-text:last-child{margin-right:%?0?%;margin-left:%?20?%}\n/* page */.uni-page-head{padding:%?35?%;text-align:center}.uni-page-head-title{display:inline-block;padding:0 %?40?%;font-size:%?30?%;height:%?88?%;line-height:%?88?%;color:#bebebe;box-sizing:border-box;border-bottom:%?2?% solid #d8d8d8}.uni-page-body{width:100%;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;overflow-x:hidden}.uni-padding-wrap{width:%?690?%;padding:0 %?30?%}.uni-word{text-align:center;padding:%?200?% %?100?%}.uni-title{font-size:%?30?%;font-weight:500;padding:%?20?% 0;line-height:1.5}.uni-text{font-size:%?28?%}.uni-title uni-text{font-size:%?24?%;color:#888}.uni-text-gray{color:#ccc}.uni-text-small{font-size:%?24?%}.uni-common-mb{margin-bottom:%?30?%}.uni-common-pb{padding-bottom:%?30?%}.uni-common-pl{padding-left:%?30?%}.uni-common-mt{margin-top:%?30?%}\n/* 背景色 */.uni-bg-red{background:#f76260;color:#fff}.uni-bg-green{background:#09bb07;color:#fff}.uni-bg-blue{background:#007aff;color:#fff}\n/* 标题 */.uni-h1{font-size:%?80?%;font-weight:700}.uni-h2{font-size:%?60?%;font-weight:700}.uni-h3{font-size:%?48?%;font-weight:700}.uni-h4{font-size:%?36?%;font-weight:700}.uni-h5{font-size:%?28?%;color:#8f8f94}.uni-h6{font-size:%?24?%;color:#8f8f94}.uni-bold{font-weight:700}\n/* 文本溢出隐藏 */.uni-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n/* 竖向百分百按钮 */.uni-btn-v{padding:%?10?% 0}.uni-btn-v uni-button{margin:%?20?% 0}\n/* 表单 */.uni-form-item{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;padding:%?10?% 0}.uni-form-item .title{padding:%?10?% %?25?%}.uni-label{width:%?210?%;word-wrap:break-word;word-break:break-all;text-indent:%?20?%}.uni-input{height:%?50?%;padding:%?15?% %?25?%;line-height:%?50?%;font-size:%?28?%;background:#fff;-webkit-box-flex:1;-webkit-flex:1;flex:1}uni-radio-group, uni-checkbox-group{width:100%}uni-radio-group uni-label, uni-checkbox-group uni-label{padding-right:%?20?%}.uni-form-item .with-fun{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;background:#fff}.uni-form-item .with-fun .uni-icon{width:40px;height:%?80?%;line-height:%?80?%;-webkit-flex-shrink:0;flex-shrink:0}\n/* loadmore */.uni-loadmore{height:%?80?%;line-height:%?80?%;text-align:center;padding-bottom:%?30?%}\n/*数字角标*/.uni-badge,\n.uni-badge-default{font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;line-height:1;display:inline-block;padding:3px 6px;color:#333;border-radius:100px;background-color:rgba(0,0,0,.15)}.uni-badge.uni-badge-inverted{padding:0 5px 0 0;color:#929292;background-color:initial}.uni-badge-primary{color:#fff;background-color:#007aff}.uni-badge-blue.uni-badge-inverted,\n.uni-badge-primary.uni-badge-inverted{color:#007aff;background-color:initial}.uni-badge-green,\n.uni-badge-success{color:#fff;background-color:#4cd964}.uni-badge-green.uni-badge-inverted,\n.uni-badge-success.uni-badge-inverted{color:#4cd964;background-color:initial}.uni-badge-warning,\n.uni-badge-yellow{color:#fff;background-color:#f0ad4e}.uni-badge-warning.uni-badge-inverted,\n.uni-badge-yellow.uni-badge-inverted{color:#f0ad4e;background-color:initial}.uni-badge-danger,\n.uni-badge-red{color:#fff;background-color:#dd524d}.uni-badge-danger.uni-badge-inverted,\n.uni-badge-red.uni-badge-inverted{color:#dd524d;background-color:initial}.uni-badge-purple,\n.uni-badge-royal{color:#fff;background-color:#8a6de9}.uni-badge-purple.uni-badge-inverted,\n.uni-badge-royal.uni-badge-inverted{color:#8a6de9;background-color:initial}\n/*折叠面板 */.uni-collapse-content{height:0;width:100%;overflow:hidden}.uni-collapse-content.uni-active{height:auto}\n/*卡片视图 */.uni-card{background:#fff;border-radius:%?8?%;margin:%?20?% 0;position:relative;box-shadow:0 %?2?% %?4?% rgba(0,0,0,.3)}.uni-card-content{font-size:%?30?%}.uni-card-content.image-view{width:100%;margin:0}.uni-card-content-inner{position:relative;padding:%?30?%}.uni-card-footer,\n.uni-card-header{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;min-height:%?50?%;padding:%?20?% %?30?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-card-header{font-size:%?36?%}.uni-card-footer{color:#6d6d72}.uni-card-footer:before,\n.uni-card-header:after{position:absolute;top:0;right:0;left:0;height:%?2?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-card-header:after{top:auto;bottom:0}.uni-card-media{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-card-media-logo{height:%?84?%;width:%?84?%;margin-right:%?20?%}.uni-card-media-body{height:%?84?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.uni-card-media-text-top{line-height:%?36?%;font-size:%?34?%}.uni-card-media-text-bottom{line-height:%?30?%;font-size:%?28?%;color:#8f8f94}.uni-card-link{color:#007aff}\n/* 列表 */.uni-list{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-list:after{position:absolute;z-index:10;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list::before{position:absolute;z-index:10;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list-cell{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-cell-hover{background-color:#eee}.uni-list-cell-pd{padding:%?22?% %?30?%}.uni-list-cell-left{white-space:nowrap;font-size:%?28?%;padding:0 %?30?%}.uni-list-cell-db,\n.uni-list-cell-right{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-list-cell::after{position:absolute;z-index:3;right:0;bottom:0;left:%?30?%;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list .uni-list-cell:last-child::after{height:%?0?%}.uni-list-cell-last.uni-list-cell::after{height:%?0?%}.uni-list-cell-divider{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;color:#999;background-color:#f7f7f7;padding:%?15?% %?20?%}.uni-list-cell-divider::before{position:absolute;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list-cell-divider::after{position:absolute;right:0;bottom:0;left:%?0?%;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list-cell-navigate{font-size:%?30?%;padding:%?22?% %?30?%;line-height:%?48?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-cell-navigate{padding-right:%?36?%}.uni-navigate-badge{padding-right:%?50?%}.uni-list-cell-navigate.uni-navigate-right:after{font-family:uniicons;content:"\\e583";position:absolute;right:%?24?%;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.uni-list-cell-navigate.uni-navigate-bottom:after{font-family:uniicons;content:"\\e581";position:absolute;right:%?24?%;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.uni-list-cell-navigate.uni-navigate-bottom.uni-active::after{font-family:uniicons;content:"\\e580";position:absolute;right:%?24?%;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.uni-collapse.uni-list-cell{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-list-cell-navigate.uni-active{background:#eee}.uni-list.uni-collapse{box-sizing:border-box;height:0;overflow:hidden}.uni-collapse .uni-list-cell{padding-left:%?20?%}.uni-collapse .uni-list-cell::after{left:%?52?%}.uni-list.uni-active{height:auto}\n/* 三行列表 */.uni-triplex-row{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?22?% %?30?%}.uni-triplex-right,\n.uni-triplex-left{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-triplex-left{width:84%}.uni-triplex-left .uni-title{padding:%?8?% 0}.uni-triplex-left .uni-text, .uni-triplex-left .uni-text-small{color:#999}.uni-triplex-right{width:16%;text-align:right}\n/* 图文列表 */.uni-media-list{padding:%?22?% %?30?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-navigate-right.uni-media-list{padding-right:%?74?%}.uni-pull-right{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.uni-pull-right>.uni-media-list-logo{margin-right:%?0?%;margin-left:%?20?%}.uni-media-list-logo{height:%?84?%;width:%?84?%;margin-right:%?20?%}.uni-media-list-logo uni-image{height:100%;width:100%}.uni-media-list-body{height:%?84?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;overflow:hidden}.uni-media-list-text-top{width:100%;line-height:%?36?%;font-size:%?30?%}.uni-media-list-text-bottom{width:100%;line-height:%?30?%;font-size:%?26?%;color:#8f8f94}\n/* 九宫格 */.uni-grid-9{background:#f2f2f2;width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;border-top:%?2?% solid #eee}.uni-grid-9-item{width:%?250?%;height:%?200?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-bottom:%?2?% solid;border-right:%?2?% solid;border-color:#eee;box-sizing:border-box}.no-border-right{border-right:none}.uni-grid-9-image{width:%?100?%;height:%?100?%}.uni-grid-9-text{width:%?250?%;line-height:%?4?%;height:%?40?%;text-align:center;font-size:%?30?%}.uni-grid-9-item-hover{background:rgba(0,0,0,.1)}\n/* 上传 */.uni-uploader{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-uploader-head{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-uploader-info{color:#b2b2b2}.uni-uploader-body{margin-top:%?16?%}.uni-uploader__files{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-uploader__file{margin:%?10?%;width:%?210?%;height:%?210?%}.uni-uploader__img{display:block;width:%?210?%;height:%?210?%}.uni-uploader__input-box{position:relative;margin:%?10?%;width:%?208?%;height:%?208?%;border:%?2?% solid #d9d9d9}.uni-uploader__input-box:before,\n.uni-uploader__input-box:after{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}.uni-uploader__input-box:before{width:%?4?%;height:%?79?%}.uni-uploader__input-box:after{width:%?79?%;height:%?4?%}.uni-uploader__input-box:active{border-color:#999}.uni-uploader__input-box:active:before,\n.uni-uploader__input-box:active:after{background-color:#999}.uni-uploader__input{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0}\n/*问题反馈*/.feedback-title{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%;color:#8f8f94;font-size:%?28?%}.feedback-star-view.feedback-title{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin:0}.feedback-quick{position:relative;padding-right:%?40?%}.feedback-quick:after{font-family:uniicons;font-size:%?40?%;content:"\\e581";position:absolute;right:0;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.feedback-body{background:#fff}.feedback-textare{height:%?200?%;font-size:%?34?%;line-height:%?50?%;width:100%;box-sizing:border-box;padding:%?20?% %?30?% 0}.feedback-input{font-size:%?34?%;height:%?50?%;min-height:%?50?%;padding:%?15?% %?20?%;line-height:%?50?%}.feedback-uploader{padding:%?22?% %?20?%}.feedback-star{font-family:uniicons;font-size:%?40?%;margin-left:%?6?%}.feedback-star-view{margin-left:%?20?%}.feedback-star:after{content:"\\e408"}.feedback-star.active{color:#ffb400}.feedback-star.active:after{content:"\\e438"}.feedback-submit{background:#007aff;color:#fff;margin:%?20?%}\n/* input group */.uni-input-group{position:relative;padding:0;border:0;background-color:#fff}.uni-input-group:before{position:absolute;top:0;right:0;left:0;height:%?2?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-input-group:after{position:absolute;right:0;bottom:0;left:0;height:%?2?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-input-row{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;font-size:%?28?%;padding:%?22?% %?30?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-input-group .uni-input-row:after{position:absolute;right:0;bottom:0;left:%?30?%;height:%?2?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-input-row uni-label{line-height:%?70?%}\n/* textarea */.uni-textarea{width:100%;background:#fff}.uni-textarea uni-textarea{width:96%;padding:%?18?% 2%;line-height:1.6;font-size:%?28?%;height:%?150?%}\n/* tab bar */.uni-tab-bar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;height:100%}.uni-tab-bar .list{width:%?750?%;height:100%}.uni-swiper-tab{width:100%;white-space:nowrap;line-height:%?100?%;height:%?100?%;border-bottom:1px solid #c8c7cc}.swiper-tab-list{font-size:%?30?%;width:%?150?%;display:inline-block;text-align:center;color:#555}.uni-tab-bar .active{color:#007aff}.uni-tab-bar .swiper-box{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:calc(100% - %?100?%)}.uni-tab-bar-loading{padding:%?20?% 0}\n/* comment */.uni-comment{padding:%?5?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-comment-list{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding:%?10?% 0;margin:%?10?% 0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.uni-comment-face{width:%?70?%;height:%?70?%;border-radius:100%;margin-right:%?20?%;-webkit-flex-shrink:0;flex-shrink:0;overflow:hidden}.uni-comment-face uni-image{width:100%;border-radius:100%}.uni-comment-body{width:100%}.uni-comment-top{line-height:1.5em;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-comment-top uni-text{color:#0a98d5;font-size:%?24?%}.uni-comment-date{line-height:%?38?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;display:-webkit-box!important;display:-webkit-flex!important;display:flex!important;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.uni-comment-date uni-view{color:#666;font-size:%?24?%;line-height:%?38?%}.uni-comment-content{line-height:1.6em;font-size:%?28?%;padding:%?8?% 0}.uni-comment-replay-btn{background:#fff;font-size:%?24?%;line-height:%?28?%;padding:%?5?% %?20?%;border-radius:%?30?%;color:#333!important;margin:0 %?10?%}\n/* swiper msg */.uni-swiper-msg{width:100%;padding:%?12?% 0;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;display:-webkit-box;display:-webkit-flex;display:flex}.uni-swiper-msg-icon{width:%?50?%;margin-right:%?20?%}.uni-swiper-msg-icon uni-image{width:100%;-webkit-flex-shrink:0;flex-shrink:0}.uni-swiper-msg uni-swiper{width:100%;height:%?50?%}.uni-swiper-msg uni-swiper-item{line-height:%?50?%}\n/* product */.uni-product-list{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-product{padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.image-view{height:%?330?%;width:%?330?%;margin:%?12?% 0}.uni-product-image{height:%?330?%;width:%?330?%}.uni-product-title{width:%?300?%;word-break:break-all;display:-webkit-box;overflow:hidden;line-height:1.5;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}.uni-product-price{margin-top:%?10?%;font-size:%?28?%;line-height:1.5;position:relative}.uni-product-price-original{color:#e80080}.uni-product-price-favour{color:#888;text-decoration:line-through;margin-left:%?10?%}.uni-product-tip{position:absolute;right:%?10?%;background-color:#f33;color:#fff;padding:0 %?10?%;border-radius:%?5?%}\n/* timeline */.uni-timeline{margin:%?35?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative}.uni-timeline-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative;padding-bottom:%?20?%;box-sizing:border-box;overflow:hidden}.uni-timeline-item .uni-timeline-item-keynode{width:%?160?%;-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box;padding-right:%?20?%;text-align:right;line-height:%?65?%}.uni-timeline-item .uni-timeline-item-divider{-webkit-flex-shrink:0;flex-shrink:0;position:relative;width:%?30?%;height:%?30?%;top:%?15?%;border-radius:50%;background-color:#bbb}.uni-timeline-item-divider::before,\n\t.uni-timeline-item-divider::after{position:absolute;left:%?15?%;width:%?1?%;height:100vh;content:"";background:inherit}.uni-timeline-item-divider::before{bottom:100%}.uni-timeline-item-divider::after{top:100%}.uni-timeline-last-item .uni-timeline-item-divider:after{display:none}.uni-timeline-first-item .uni-timeline-item-divider:before{display:none}.uni-timeline-item .uni-timeline-item-content{padding-left:%?20?%}.uni-timeline-last-item .bottom-border::after{display:none}.uni-timeline-item-content .datetime{color:#ccc}\n/* 自定义节点颜色 */.uni-timeline-last-item .uni-timeline-item-divider{background-color:#1aad19}\n/* uni-icon */.uni-icon{font-family:uniicons;font-size:24px;font-weight:400;font-style:normal;line-height:1;display:inline-block;text-decoration:none;-webkit-font-smoothing:antialiased}.uni-icon.uni-active{color:#007aff}.uni-icon-contact:before{content:"\\e100"}.uni-icon-person:before{content:"\\e101"}.uni-icon-personadd:before{content:"\\e102"}.uni-icon-contact-filled:before{content:"\\e130"}.uni-icon-person-filled:before{content:"\\e131"}.uni-icon-personadd-filled:before{content:"\\e132"}.uni-icon-phone:before{content:"\\e200"}.uni-icon-email:before{content:"\\e201"}.uni-icon-chatbubble:before{content:"\\e202"}.uni-icon-chatboxes:before{content:"\\e203"}.uni-icon-phone-filled:before{content:"\\e230"}.uni-icon-email-filled:before{content:"\\e231"}.uni-icon-chatbubble-filled:before{content:"\\e232"}.uni-icon-chatboxes-filled:before{content:"\\e233"}.uni-icon-weibo:before{content:"\\e260"}.uni-icon-weixin:before{content:"\\e261"}.uni-icon-pengyouquan:before{content:"\\e262"}.uni-icon-chat:before{content:"\\e263"}.uni-icon-qq:before{content:"\\e264"}.uni-icon-videocam:before{content:"\\e300"}.uni-icon-camera:before{content:"\\e301"}.uni-icon-mic:before{content:"\\e302"}.uni-icon-location:before{content:"\\e303"}.uni-icon-mic-filled:before,\n.uni-icon-speech:before{content:"\\e332"}.uni-icon-location-filled:before{content:"\\e333"}.uni-icon-micoff:before{content:"\\e360"}.uni-icon-image:before{content:"\\e363"}.uni-icon-map:before{content:"\\e364"}.uni-icon-compose:before{content:"\\e400"}.uni-icon-trash:before{content:"\\e401"}.uni-icon-upload:before{content:"\\e402"}.uni-icon-download:before{content:"\\e403"}.uni-icon-close:before{content:"\\e404"}.uni-icon-redo:before{content:"\\e405"}.uni-icon-undo:before{content:"\\e406"}.uni-icon-refresh:before{content:"\\e407"}.uni-icon-star:before{content:"\\e408"}.uni-icon-plus:before{content:"\\e409"}.uni-icon-minus:before{content:"\\e410"}.uni-icon-circle:before,\n.uni-icon-checkbox:before{content:"\\e411"}.uni-icon-close-filled:before,\n.uni-icon-clear:before{content:"\\e434"}.uni-icon-refresh-filled:before{content:"\\e437"}.uni-icon-star-filled:before{content:"\\e438"}.uni-icon-plus-filled:before{content:"\\e439"}.uni-icon-minus-filled:before{content:"\\e440"}.uni-icon-circle-filled:before{content:"\\e441"}.uni-icon-checkbox-filled:before{content:"\\e442"}.uni-icon-closeempty:before{content:"\\e460"}.uni-icon-refreshempty:before{content:"\\e461"}.uni-icon-reload:before{content:"\\e462"}.uni-icon-starhalf:before{content:"\\e463"}.uni-icon-spinner:before{content:"\\e464"}.uni-icon-spinner-cycle:before{content:"\\e465"}.uni-icon-search:before{content:"\\e466"}.uni-icon-plusempty:before{content:"\\e468"}.uni-icon-forward:before{content:"\\e470"}.uni-icon-back:before,\n.uni-icon-left-nav:before{content:"\\e471"}.uni-icon-checkmarkempty:before{content:"\\e472"}.uni-icon-home:before{content:"\\e500"}.uni-icon-navigate:before{content:"\\e501"}.uni-icon-gear:before{content:"\\e502"}.uni-icon-paperplane:before{content:"\\e503"}.uni-icon-info:before{content:"\\e504"}.uni-icon-help:before{content:"\\e505"}.uni-icon-locked:before{content:"\\e506"}.uni-icon-more:before{content:"\\e507"}.uni-icon-flag:before{content:"\\e508"}.uni-icon-home-filled:before{content:"\\e530"}.uni-icon-gear-filled:before{content:"\\e532"}.uni-icon-info-filled:before{content:"\\e534"}.uni-icon-help-filled:before{content:"\\e535"}.uni-icon-more-filled:before{content:"\\e537"}.uni-icon-settings:before{content:"\\e560"}.uni-icon-list:before{content:"\\e562"}.uni-icon-bars:before{content:"\\e563"}.uni-icon-loop:before{content:"\\e565"}.uni-icon-paperclip:before{content:"\\e567"}.uni-icon-eye:before{content:"\\e568"}.uni-icon-arrowup:before{content:"\\e580"}.uni-icon-arrowdown:before{content:"\\e581"}.uni-icon-arrowleft:before{content:"\\e582"}.uni-icon-arrowright:before{content:"\\e583"}.uni-icon-arrowthinup:before{content:"\\e584"}.uni-icon-arrowthindown:before{content:"\\e585"}.uni-icon-arrowthinleft:before{content:"\\e586"}.uni-icon-arrowthinright:before{content:"\\e587"}.uni-icon-pulldown:before{content:"\\e588"}.uni-icon-scan:before{content:"\\e612"}\n/* 分界线 */.uni-divider{height:%?110?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative}.uni-divider__content{font-size:%?28?%;color:#999;padding:0 %?20?%;position:relative;z-index:101;background:#f4f5f6}.uni-divider__line{background-color:#ccc;height:1px;width:100%;position:absolute;z-index:100;top:50%;left:0;-webkit-transform:translateY(50%);transform:translateY(50%)}\n/* 以下样式用于 hello uni-app 演示所需 */uni-page-body{background-color:#f4f5f6;height:100%;font-size:%?28?%;line-height:1.8}uni-page-head{display:none}.uni-header-logo{padding:%?30?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.uni-header-image{width:100px;height:100px}.uni-hello-text{color:#7a7e83}.uni-hello-addfile{text-align:center;line-height:%?300?%;background:#fff;padding:%?50?%;margin-top:10px;font-size:%?38?%;color:grey}\nbody.?%PAGE?%{background-color:#f4f5f6}',""]),e.exports=i},"89d8":function(e,i,t){var n=t("e7b2");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=t("4f06").default;o("1fa4bc8f",n,!0,{sourceMap:!1,shadowMode:!1})},"8d10":function(e,i,t){"use strict";t.r(i);var n=t("d607"),o=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(i,e,(function(){return n[e]}))}(r);i["default"]=o.a},aa2f:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-link",props:{href:{type:String,default:""},text:{type:String,default:""},inWhiteList:{type:Boolean,default:!1}},methods:{openURL:function(){window.open(this.href)}}};i.default=n},d607:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"page-foot",props:{name:{type:String,default:""}},methods:{submit:function(){uni.showModal({content:"hello uni-app开源地址为https://github.com/dcloudio/uni-app/tree/master/examples，请在这个开源项目上贡献你的代码",showCancel:!1})}}};i.default=n},e26d:function(e,i,t){"use strict";var n;t.d(i,"b",(function(){return o})),t.d(i,"c",(function(){return r})),t.d(i,"a",(function(){return n}));var o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[]},e7b2:function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,".page-share-title[data-v-61c1b5ec]{text-align:center;font-size:%?30?%;color:#bebebe;padding:%?20?% 0}.submit[data-v-61c1b5ec]{border-bottom:%?1?% solid #bebebe}",""]),e.exports=i},ecd6:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={appid:"__UNI__necp.dem.ywdj"};i.default=n},f18f:function(e,i,t){"use strict";var n;t.d(i,"b",(function(){return o})),t.d(i,"c",(function(){return r})),t.d(i,"a",(function(){return n}));var o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-text",{staticStyle:{"text-decoration":"underline"},attrs:{href:e.href,inWhiteList:e.inWhiteList},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.openURL.apply(void 0,arguments)}}},[e._v(e._s(e.text))])},r=[]},fad7:function(e,i,t){"use strict";t.r(i);var n=t("f18f"),o=t("27d6");for(var r in o)"default"!==r&&function(e){t.d(i,e,(function(){return o[e]}))}(r);var a,l=t("f0c5"),c=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"7acf47eb",null,!1,n["a"],a);i["default"]=c.exports}});