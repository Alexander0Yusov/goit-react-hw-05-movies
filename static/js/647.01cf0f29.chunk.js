"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[647],{647:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(439),r=n(791),c={reviewsUl:"Reviews_reviewsUl__Xi56j"},s=n(689),o=n(184),u=function(){var e=(0,r.useState)(""),t=(0,i.Z)(e,2),n=t[0],u=t[1],a=(0,s.UO)().movieId;return(0,r.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(a,"/reviews?api_key=225e339996bc91260b33199c383c8881")).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return{id:e.id,author:e.author,content:e.content}}));u(t)})).catch((function(e){return console.log(e.message)}))}),[a]),(0,o.jsx)("div",{children:n.length>0?(0,o.jsx)("ul",{className:c.reviewsUl,children:n.map((function(e){var t=e.id,n=e.author,i=e.content;return(0,o.jsxs)("li",{className:c.reviewLi,children:[(0,o.jsxs)("p",{children:["Author: ",n,"."]}),(0,o.jsxs)("p",{children:[" ",i]})]},t)}))}):"Sorry, No Reviews"})}}}]);
//# sourceMappingURL=647.01cf0f29.chunk.js.map