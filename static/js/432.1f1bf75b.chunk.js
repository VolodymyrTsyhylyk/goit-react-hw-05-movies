"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[432],{3432:function(n,t,e){e.r(t);var c=e(8152),a=e(2791),r=e(3504),u=e(3831),o=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,c.Z)(n,2),e=t[0],i=t[1];return(0,a.useEffect)((function(){(0,u.Df)().then((function(n){i(n.results)})).catch((function(n){return console.warn(n)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Trending today"}),e&&(0,o.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.title,c=n.name;return(0,o.jsx)("li",{children:(0,o.jsxs)(r.rU,{to:"movies/".concat(t),children:[e," ",c]})},t)}))})]})}},3831:function(n,t,e){e.d(t,{XT:function(){return o},Df:function(){return i},IQ:function(){return f},Jh:function(){return s},TP:function(){return g}});var c=e(4569),a=e.n(c),r="cebf74f2036e82ff6c32c96394fea389",u="https://api.themoviedb.org/3",o=function(n){return a().get("".concat(u,"/search/movie?api_key=").concat(r,"&language=en-US&query=").concat(n)).then((function(n){return n.data}))},i=function(){return a().get("".concat(u,"/trending/movie/day?api_key=").concat(r,"&language=en-US&page=").concat(1)).then((function(n){return n.data}))},f=function(n){return a().get("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.data}))},s=function(n){return a().get("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.data}))},g=function(n){return a().get("".concat(u,"/movie/").concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.data}))}}}]);
//# sourceMappingURL=432.1f1bf75b.chunk.js.map