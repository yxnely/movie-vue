webpackJsonp([0],{"7MnC":function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};e.a=a},"8Pp+":function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("app-nav"),t._v(" "),n("h1",{staticClass:"text-center mt-2"},[t._v("Movies")])],1),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.movies,function(e,a){return n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"card mb-4"},[n("div",{staticClass:"card-body"},[n("h3",{staticClass:"card-title"},[t._v(" "+t._s(e.display_title)+" ")]),t._v(" "),n("button",{staticClass:"btn btn-primary"},[t._v("View More")])])])])}))])])},staticRenderFns:[]};e.a=a},L23J:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-default"},[e("div",{staticClass:"navbar-header"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[this._v("Home")])],1),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown pull-xs-right nav navbar-nav navbar-right"},[n("button",{staticClass:"btn bmd-btn-icon dropdown-toggle",attrs:{type:"button",id:"lr1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"material-icons"},[t._v("menu")])]),t._v(" "),n("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"lr1"}},[n("button",{staticClass:"dropdown-item",attrs:{type:"button"}},[t._v("Action")]),t._v(" "),n("button",{staticClass:"dropdown-item",attrs:{type:"button"}},[t._v("Another action")]),t._v(" "),n("button",{staticClass:"dropdown-item disabled",attrs:{type:"button"}},[t._v("Disabled action")]),t._v(" "),n("div",{staticClass:"dropdown-divider"}),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Separated link")])])])}]};e.a=a},M93x:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("xJD8"),s=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var i=n("7MnC");var o=function(t){n("soe0")},u=n("VU/8")(s.a,i.a,!1,o,null,null);e.default=u.exports},MHrR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"getMovies",function(){return r});const a="https://api.nytimes.com/svc/movies/v2/reviews/search.json",s="afbbea547c7a452fb7d6cce8307cbb19",r=()=>fetch((()=>`${a}?api-key=${s}`)()).then(t=>{if(t.ok)return t.json();throw new Error("Server response wasn't OK")}).then(t=>t)},NHnr:function(t,e,n){"use strict";var a=i(n("7+uW")),s=i(n("M93x")),r=i(n("YaEn"));function i(t){return t&&t.__esModule?t:{default:t}}a.default.config.productionTip=!1,new a.default({el:"#app",router:r.default,components:{App:s.default},template:"<App/>"})},W3If:function(t,e){},YaEn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(n("7+uW")),s=i(n("/ocq")),r=i(n("o62O"));function i(t){return t&&t.__esModule?t:{default:t}}a.default.use(s.default),e.default=new s.default({routes:[{path:"/",name:"movies",component:r.default}]})},dSYP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app-nav",methods:{sayHi:function(){alert("hi!")}}}},hiue:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=n("xX70"),r=(a=s)&&a.__esModule?a:{default:a},i=n("MHrR");e.default={name:"movies",components:{AppNav:r.default},data:function(){return{movies:""}},methods:{getAllMovies:function(){var t=this;(0,i.getMovies)().then(function(e){console.log(t),t.movies=e.results})}},mounted:function(){this.getAllMovies()}}},o62O:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("hiue"),s=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var i=n("8Pp+"),o=n("VU/8")(s.a,i.a,!1,null,null,null);e.default=o.exports},soe0:function(t,e){},xJD8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"App"}},xX70:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("dSYP"),s=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var i=n("L23J");var o=function(t){n("W3If")},u=n("VU/8")(s.a,i.a,!1,o,"data-v-18eeeb80",null);e.default=u.exports}},["NHnr"]);
//# sourceMappingURL=app.c8ec54df53b5bf3e0a2a.js.map