(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],p=0,u=[];p<i.length;p++)o=i[p],a[o]&&u.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("31c5"),a=r.n(n);a.a},"1fa8a":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\n.scroll-container[data-v-2756e3d5]{position:relative\n}\n.scroll-graphic[data-v-2756e3d5]{position:-webkit-sticky;position:sticky;top:0\n}\n.scroll-steps[data-v-2756e3d5]{position:relative\n}",""])},"31b4":function(e,t,r){var n=r("ebb8");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("499e").default;a("cff3d5c4",n,!0,{sourceMap:!1,shadowMode:!1})},"31c5":function(e,t,r){var n=r("5fc7");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("499e").default;a("f155f63c",n,!0,{sourceMap:!1,shadowMode:!1})},"34bf":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\n.step[data-v-39126d34]{width:80%;max-width:40rem;padding:10rem 0;margin:3rem auto 10rem;border:1px solid #333;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}",""])},"350d":function(e,t,r){var n=r("eec8");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("499e").default;a("536c0c12",n,!0,{sourceMap:!1,shadowMode:!1})},"434e":function(e,t,r){"use strict";var n=r("31b4"),a=r.n(n);a.a},"54a2":function(e,t,r){var n=r("1fa8a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("499e").default;a("ba08b6fa",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header",[e._m(0),e._m(1),e._m(2),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/basic"}},[e._v("Basic")]),r("router-link",{attrs:{to:"/progress"}},[e._v("Progress")]),r("router-link",{attrs:{to:"/stickygraphic"}},[e._v("Sticky-Graphic")])],1)]),r("router-view")],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[r("a",{attrs:{href:"https://github.com/shenoy/vue-scrollama",target:"_blank"}},[e._v("Vue-Scrollama")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("A Vue component to easily create scroll-driven interactions (aka scrollytelling). Uses "),r("a",{attrs:{href:"https://github.com/russellgoldenberg/scrollama",target:"_blank"}},[e._v("Scrollama")]),e._v(" under the hood.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Documentation "),r("a",{attrs:{href:"https://github.com/shenoy/vue-scrollama/",target:"_blank"}},[e._v("here")]),e._v(" and source code for the examples below "),r("a",{attrs:{href:"https://github.com/shenoy/vue-scrollama/tree/master/src/examples",target:"_blank"}},[e._v("here")]),e._v(".")])}],o=(r("034f"),r("2877")),i={},c=Object(o["a"])(i,a,s,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,d=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Scrollama",{attrs:{debug:!0},on:{"step-enter":e.stepEnterHandler,"step-exit":e.stepExitHandler}},e._l(e.steps,function(t){return r("div",{key:t.no,staticClass:"step",class:{"is-active":t.id==e.currStepId},attrs:{"data-step-id":t.id}},[r("p",[e._v("STEP "+e._s(t.id))])])}))],1)},u=[],f=(r("5abe"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"scroll-container",attrs:{id:"scroll-container-"+e.id}},[r("div",{ref:"scroll-graphic",staticClass:"scroll-graphic",attrs:{id:"scroll-graphic-"+e.id}},[e._t("graphic")],2),r("div",{staticClass:"scroll-steps",attrs:{id:"scroll-steps-"+e.id}},[e._t("default")],2),r("resize-observer",{on:{notify:e.handleResize}})],1)}),v=[],b=r("c93e"),h=r("d11d"),m=r.n(h),g=r("252c"),x=(r("6eb0"),r("e671")),_=r.n(x),y={components:{ResizeObserver:g["a"]},props:{id:{type:String,validator:function(e){return!/\s/.test(e)},default:"scrollama"}},mounted:function(){var e=this;_.a.add(this.$refs["scroll-graphic"]),this.scroller=m()(),this.scroller.setup(Object(b["a"])({step:"#scroll-steps-".concat(this.id,">div"),container:"#scroll-container-".concat(this.id),graphic:"#scroll-graphic-".concat(this.id)},this.$attrs)).onStepProgress(function(t){e.$emit("step-progress",t)}).onStepEnter(function(t){e.$emit("step-enter",t)}).onStepExit(function(t){e.$emit("step-exit",t)}).onContainerEnter(function(t){e.$emit("container-enter",t)}).onContainerExit(function(t){e.$emit("container-exit",t)}),this.handleResize()},methods:{handleResize:function(){this.scroller.resize()}}},k=y,w=(r("e263"),Object(o["a"])(k,f,v,!1,null,"2756e3d5",null));w.options.__file="Scrollama.vue";var S=w.exports,E={components:{Scrollama:S},data:function(){return{currStepId:null,steps:[{id:1},{id:2},{id:3},{id:4}]}},methods:{stepEnterHandler:function(e){var t=e.element,r=e.direction,n=e.index;console.log({element:t,direction:r,index:n}),this.currStepId=t.dataset.stepId},stepExitHandler:function(e){var t=e.element,r=e.direction,n=e.index;console.log({element:t,direction:r,index:n}),this.currStepId=null}}},j=E,O=(r("ac47"),Object(o["a"])(j,p,u,!1,null,"67dab983",null));O.options.__file="Basic.vue";var $=O.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Scrollama",{attrs:{debug:!0,progress:!0},on:{"step-progress":e.stepProgressHandler}},e._l(e.steps,function(t){return r("div",{key:t.no,staticClass:"step",style:{"background-color":"rgba("+t.rgb+", "+t.progress+")"},attrs:{"data-step-id":t.id}},[r("div",[e._v("STEP "+e._s(t.id))]),r("div",[e._v(e._s((100*t.progress).toFixed(1))+"%")])])}))],1)},M=[],P=(r("7514"),{components:{Scrollama:S},data:function(){return{currStepId:null,steps:[{id:1,rgb:"250,220,0",progress:0},{id:2,rgb:"50,250,200",progress:0}]}},methods:{stepProgressHandler:function(e){var t=this,r=e.element,n=e.progress,a=e.index;console.log({element:r,progress:n,index:a}),this.currStepId=r.dataset.stepId,this.steps.find(function(e){return e.id==t.currStepId}).progress=n}}}),C=P,H=(r("c951"),Object(o["a"])(C,I,M,!1,null,"39126d34",null));H.options.__file="Progress.vue";var z=H.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Scrollama",{attrs:{debug:!0},on:{"step-enter":e.stepEnterHandler}},[r("div",{staticClass:"graphic",attrs:{slot:"graphic"},slot:"graphic"},[r("p",[e._v(e._s(e.currStepId))])]),e._l(e.steps,function(t){return r("div",{key:t.no,staticClass:"step",class:{"is-active":t.id==e.currStepId},attrs:{"data-step-id":t.id}},[r("p",[e._v("STEP "+e._s(t.id))])])})],2)],1)},R=[],B={components:{Scrollama:S},data:function(){return{currStepId:null,steps:[{id:1},{id:2},{id:3},{id:4}]}},methods:{stepEnterHandler:function(e){var t=e.element,r=e.direction,n=e.index;console.log({element:t,direction:r,index:n}),this.currStepId=t.dataset.stepId}}},U=B,A=(r("434e"),Object(o["a"])(U,T,R,!1,null,"77fe3bfc",null));A.options.__file="StickyGraphic.vue";var F=A.exports;n["a"].use(d["a"]);var G=new d["a"]({routes:[{path:"/",redirect:"/basic"},{path:"/basic",component:$},{path:"/progress",component:z},{path:"/stickygraphic",component:F}]});n["a"].config.productionTip=!1,new n["a"]({router:G,render:function(e){return e(l)}}).$mount("#app")},"5fc7":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\nbody{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-size:18px;margin:0;padding:0;text-align:center\n}\n#app{padding-bottom:100vh\n}\nheader{margin:0 auto\n}\n#nav,header{max-width:40rem\n}\n#nav{width:80%;margin:2rem auto;padding-bottom:40vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n#nav a{padding:1rem;text-decoration:none;text-transform:uppercase\n}\n#nav a.router-link-active{background-color:#666;color:#fff;border-radius:3px\n}",""])},"6fb1":function(e,t,r){var n=r("34bf");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("499e").default;a("55e1fd35",n,!0,{sourceMap:!1,shadowMode:!1})},ac47:function(e,t,r){"use strict";var n=r("350d"),a=r.n(n);a.a},c951:function(e,t,r){"use strict";var n=r("6fb1"),a=r.n(n);a.a},e263:function(e,t,r){"use strict";var n=r("54a2"),a=r.n(n);a.a},ebb8:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\n.step[data-v-77fe3bfc]{width:30vw;padding:10rem 0;margin:3rem 2.5vw 10rem;border:1px solid #333;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.step.is-active[data-v-77fe3bfc]{background-color:#fafad2\n}\n.graphic[data-v-77fe3bfc]{position:absolute;right:0;margin:0 2.5vw;width:60vw;top:25vh;height:50vh;background-color:#ddd;border:1px solid #333;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:5rem\n}",""])},eec8:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\n.step[data-v-67dab983]{width:80%;max-width:40rem;padding:10rem 0;margin:3rem auto 10rem;border:1px solid #333;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.step.is-active[data-v-67dab983]{background-color:#fafad2\n}",""])}});
//# sourceMappingURL=app.00b75b6b.js.map