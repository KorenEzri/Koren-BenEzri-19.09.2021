(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[5],{453:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(148);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},455:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(105),i=n(149),o=Object(r.a)([function(t){return t.favorites||i.b}],(function(t){return t}))},534:function(t,e,n){"use strict";n.r(e),n.d(e,"AddToFavorites",(function(){return u}));var r=n(453),i=n(146),o=n(0),a=n(150),c=n(149),s=n(455),f=n(13);function u(t){var e=t.favorite||!1,n=t.favoriteItem,i=t.locationKey,u=o.useState(e),d=Object(r.a)(u,2),p=d[0],v=d[1],b=Object(a.c)(s.a).favorites,m=Object(a.b)(),h=Object(c.c)().actions,w=h.addFavorite,x=h.removeFavorite;return o.useEffect((function(){b.find((function(t){return t.key===i}))&&v(!0)}),[]),Object(f.jsx)(l,{onClick:function(){v(!p),m(p?x(n):w(n))},children:Object(f.jsx)("svg",{className:p?"star":"",width:"42px",height:"40px",viewBox:"0 0 42 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(f.jsx)("path",{d:"M21,34 L10.4346982,39.5545079 C8.47875732,40.5828068 7.19697214,39.6450119 7.56952871,37.4728404 L9.5873218,25.7082039 L1.03981311,17.3764421 C-0.542576313,15.8339937 -0.0467737017,14.3251489 2.13421047,14.0082334 L13.946577,12.2917961 L19.2292279,1.58797623 C20.2071983,-0.393608322 21.7954064,-0.388330682 22.7707721,1.58797623 L28.053423,12.2917961 L39.8657895,14.0082334 C42.0525979,14.3259953 42.5383619,15.8381017 40.9601869,17.3764421 L32.4126782,25.7082039 L34.4304713,37.4728404 C34.8040228,39.6508126 33.5160333,40.5800681 31.5653018,39.5545079 L21,34 Z"})})})}var l=i.b.div.withConfig({componentId:"sc-10k0o60-0"})(["position:relative;fill:#cdcdcd;transition:fill 200ms;.star{fill:#ffa600;animation:fav 600ms ease;}cursor:pointer;margin-left:100px;margin-top:80px;width:10px;@media (max-width:768px){position:absolute;top:0;margin-top:10px;left:320px;}@keyframes fav{70%{transform:scale(1.5);}100%{transform:scale(1);}}"])}}]);