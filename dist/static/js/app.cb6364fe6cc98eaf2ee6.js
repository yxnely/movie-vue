webpackJsonp([0],{"7MnC":function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};t.a=a},"8Pp+":function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("app-nav"),e._v(" "),n("h1",{staticClass:"text-center mt-2"},[e._v("Movies")])],1),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},e._l(e.movies,function(t,a){return n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"card mb-4"},[n("div",{staticClass:"card-body"},[n("h3",{staticClass:"card-title"},[e._v(" "+e._s(t.display_title)+" ")]),e._v(" "),n("button",{staticClass:"btn btn-primary"},[e._v("View More")])])])])}))])])},staticRenderFns:[]};t.a=a},M93x:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("xJD8"),r=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);var i=n("7MnC");var u=function(e){n("soe0")},o=n("VU/8")(r.a,i.a,!1,u,null,null);t.default=o.exports},MHrR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getMovies",function(){return s});const a="https://api.nytimes.com/svc/movies/v2/reviews/search.json",r="afbbea547c7a452fb7d6cce8307cbb19",s=()=>fetch((()=>`${a}?api-key=${r}`)()).then(e=>{if(e.ok)return e.json();throw new Error("Server response wasn't OK")}).then(e=>e)},NHnr:function(e,t,n){"use strict";var a=i(n("7+uW")),r=i(n("M93x")),s=i(n("YaEn"));function i(e){return e&&e.__esModule?e:{default:e}}a.default.config.productionTip=!1,new a.default({el:"#app",router:s.default,components:{App:r.default},template:"<App/>"})},"Q+kR":function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",{staticClass:"navbar navbar-default"},[t("div",{staticClass:"navbar-header"},[t("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[this._v("Home")])],1)])},staticRenderFns:[]};t.a=a},U0NA:function(e,t){},YaEn:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("7+uW")),r=i(n("/ocq")),s=i(n("o62O"));function i(e){return e&&e.__esModule?e:{default:e}}a.default.use(r.default),t.default=new r.default({routes:[{path:"/",name:"movies",component:s.default}]})},dSYP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app-nav",methods:{sayHi:function(){alert("hi!")}}}},hiue:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n("xX70"),s=(a=r)&&a.__esModule?a:{default:a},i=n("MHrR");t.default={name:"movies",components:{AppNav:s.default},data:function(){return{movies:""}},methods:{getAllMovies:function(){var e=this;(0,i.getMovies)().then(function(t){console.log(e),e.movies=t.results})}},mounted:function(){this.getAllMovies()}}},o62O:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("hiue"),r=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);var i=n("8Pp+"),u=n("VU/8")(r.a,i.a,!1,null,null,null);t.default=u.exports},soe0:function(e,t){},xJD8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"App"}},xX70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("dSYP"),r=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);var i=n("Q+kR");var u=function(e){n("U0NA")},o=n("VU/8")(r.a,i.a,!1,u,"data-v-0e1f5477",null);t.default=o.exports}},["NHnr"]);
//# sourceMappingURL=app.cb6364fe6cc98eaf2ee6.js.map