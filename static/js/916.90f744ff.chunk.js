"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[916],{916:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var r=s(439),a=s(791),i=s(689),c=s(87),n=s(643),o="Card_card__zQfcO",l="Card_thumb__rqUeD",u="Card_description__ZISe4",d=s(184),h=function(e){var t=e.posterPath,s=e.title,r=e.releaseDate,a=e.voteAverage,i=e.overview,c=e.genres;return(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("div",{className:l,children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(t),alt:"film backdrop"})}),(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("h3",{children:"".concat(s," (").concat(r,")")}),(0,d.jsx)("p",{children:"User Score: ".concat((10*Number(a)).toFixed(0),"%")}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:i}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:c})]})]})},v="MovieDetails_linkBack__z57Mc",f=function(){var e,t=(0,a.useState)("ok"),s=(0,r.Z)(t,2),o=s[0],l=s[1],u=(0,a.useState)(""),f=(0,r.Z)(u,2),j=f[0],_=f[1],p=(0,a.useState)(""),x=(0,r.Z)(p,2),m=x[0],g=x[1],w=(0,a.useState)(""),b=(0,r.Z)(w,2),k=b[0],S=b[1],Z=(0,a.useState)(""),C=(0,r.Z)(Z,2),N=C[0],U=C[1],D=(0,a.useState)(""),E=(0,r.Z)(D,2),O=E[0],y=E[1],z=(0,a.useState)(""),A=(0,r.Z)(z,2),F=A[0],G=A[1],I=(0,a.useState)(""),M=(0,r.Z)(I,2),P=M[0],R=M[1],q=(0,i.UO)().movieId,B=(0,i.TH)(),H=(0,a.useRef)("");return(0,a.useEffect)((function(){H.current=B}),[]),(0,a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(q,"?api_key=225e339996bc91260b33199c383c8881")).then((function(e){return e.json()})).then((function(e){if(e.id){var t=e.release_date,s=e.poster_path,r=e.vote_average,a=e.genres,i=e.overview,c=e.title;_(t),g(s),S(r),U(a),y(i),G(c)}if(!1===e.success)throw l(e.status_message),new Error("".concat(e.status_message))})).catch((function(e){return console.log(e.message)}))}),[q]),(0,a.useEffect)((function(){N&&R(N.map((function(e){return e.name})).join(", "))}),[N]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.rU,{to:null===(e=H.current.state)||void 0===e?void 0:e.from,className:v,children:"Go back"}),"ok"===o?(0,d.jsxs)("div",{children:[(0,d.jsx)(h,{posterPath:m,title:F,releaseDate:j,voteAverage:k,overview:O,genres:P}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(n.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),children:(0,d.jsx)(i.j3,{})})]}):(0,d.jsx)("p",{children:o})]})}}}]);
//# sourceMappingURL=916.90f744ff.chunk.js.map