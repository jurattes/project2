(this["webpackJsonptest-site"]=this["webpackJsonptest-site"]||[]).push([[0],{10:function(t,e,c){},11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var i=c(1),s=c.n(i),n=c(5),r=c.n(n),a=(c(10),c(2)),o=(c(11),c(0)),j=function(t){return Object(o.jsxs)("header",{children:[Object(o.jsx)("h2",{children:"Forum"}),Object(o.jsx)("input",{onChange:t.search,value:t.keyWord,className:"search-bar",placeholder:"Search posts"})]})},l=c(3),d=c.p+"static/media/up.60d1c8f4.png",u=c.p+"static/media/down.dbcd80a4.png",b=c.p+"static/media/trash.f1489615.png",O=function(t){return Object(o.jsxs)("section",{className:"post",children:[Object(o.jsxs)("div",{className:"row1",children:[Object(o.jsxs)("div",{className:"header",children:["By ",t.post.author," ",t.post.date]}),Object(o.jsx)("div",{className:"content",children:t.post.text}),Object(o.jsxs)("div",{className:"footer",children:["Likes: ",t.post.likes]})]}),Object(o.jsxs)("div",{className:"row2",children:[Object(o.jsx)("div",{onClick:function(){return t.like(t.post.topic_id)},children:Object(o.jsx)("img",{width:"30",height:"30",src:d,alt:"up"})}),Object(o.jsx)("div",{onClick:function(){return t.dislike(t.post.topic_id)},children:Object(o.jsx)("img",{width:"30",height:"30",src:u,alt:"down"})}),Object(o.jsx)("div",{onClick:function(){return t.delete(t.post.topic_id)},children:Object(o.jsx)("img",{width:"30",height:"30",src:b,alt:"trash"})})]})]})},h=function(t){var e=Object(i.useState)(!0),c=Object(a.a)(e,2),s=c[0],n=c[1],r=Object(i.useState)([]),j=Object(a.a)(r,2),d=j[0],u=j[1],b=Object(i.useState)([]),h=Object(a.a)(b,2),f=h[0],p=h[1],x=Object(i.useState)({id:1}),m=Object(a.a)(x,2),g=m[0],v=m[1],k=Object(i.useState)({id:1}),y=Object(a.a)(k,2),N=y[0],P=y[1],L=Object(i.useState)([]),w=Object(a.a)(L,2),S=w[0],C=w[1];Object(i.useEffect)((function(){var e=[];t.data.categories&&(e=[].concat.apply([],[].concat.apply([],t.data.categories.map((function(t){return t.topicList}))).map((function(t){return t.listPosts})))),e=e.filter((function(e){return e.text.toLowerCase().includes(t.keyWord.toLowerCase())})),console.log(t.keyWord),console.log(e),C(e)}),[t.keyWord]),Object(i.useEffect)((function(){t.data.categories&&s&&(n(!1),u(t.data.categories),v(t.data.categories[0]),p(t.data.categories[0].topicList),C(t.data.categories[0].topicList[0].listPosts))}),[t.data]);var F=function(t,e,c,i){return t.categories.filter((function(t){return t.id===Number(e)}))[0].topicList.filter((function(t){return t.id===Number(c)}))[0].listPosts.filter((function(t){return t.id===Number(i)}))[0]},_=function(e){var c=e.split("_"),i=Object(a.a)(c,3),s=i[0],n=i[1],r=i[2],o=Object(l.a)({},t.data),j=F(o,s.slice(-1),n.slice(-1),r.slice(-1));j.likes?j.likes--:j.likes=0,j.likes=Math.max(j.likes,0),t.setForumData(o)},D=function(e){var c=e.split("_"),i=Object(a.a)(c,3),s=i[0],n=i[1],r=i[2],o=Object(l.a)({},t.data),j=F(o,s.slice(-1),n.slice(-1),r.slice(-1));j.likes?j.likes++:j.likes=1,t.setForumData(o)},E=function(e){var c=e.split("_"),i=Object(a.a)(c,3),s=i[0],n=i[1],r=i[2],o=Object(l.a)({},t.data),j=o.categories.filter((function(t){return t.id===Number(s.slice(-1))}))[0].topicList.filter((function(t){return t.id===Number(n.slice(-1))}))[0];j.listPosts=j.listPosts.filter((function(t){return t.id!==Number(r.slice(-1))})),t.setForumData(o);var d=S.filter((function(t){return t.topic_id!==e}));C(d)};return Object(o.jsxs)("section",{className:"left-col",children:[Object(o.jsxs)("section",{className:"filter",children:[Object(o.jsxs)("section",{children:[Object(o.jsx)("label",{htmlFor:"category",children:"Category "}),Object(o.jsx)("select",{id:"category",value:g.id,onChange:function(t){var e=t.target.value,c=d.filter((function(t){return t.id==e}))[0];v(c),"0"!=g?(p(c.topicList),P(c.topicList[0]),C(c.topicList[0].listPosts)):P(null)},children:d.map((function(t){return Object(o.jsx)("option",{value:t.id,children:t.name},"cat"+t.id)}))})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)("label",{htmlFor:"topic",children:"Topic "}),Object(o.jsx)("select",{id:"topic",value:N.id,onChange:function(t){var e=t.target.value,c=g.topicList.filter((function(t){return t.id==e}))[0];P(c),C(c.listPosts)},children:f.map((function(t){return Object(o.jsx)("option",{value:t.id,children:t.topic_title},"top"+t.id)}))})]})]}),Object(o.jsx)("section",{className:"posts",children:S.map((function(t,e){return Object(o.jsx)("div",{children:Object(o.jsx)(O,{post:t,like:D,dislike:_,delete:E})},"post"+t.id+e)}))})]})};var f=function(t){var e=Object(i.useState)([]),c=Object(a.a)(e,2),s=c[0],n=c[1];return Object(i.useEffect)((function(){fetch(t).then((function(t){return t.json()})).then((function(t){n(t)})).catch((function(t){return console.log(t)}))}),[]),[s,n]},p=function(t){var e=Object(i.useState)([]),c=Object(a.a)(e,2),s=c[0],n=c[1];return Object(i.useEffect)((function(){if(t.data.categories){var e=[].concat.apply([],t.data.categories.map((function(t){return t.topicList})));console.log(e),e.sort((function(t,e){return e.nberPost-t.nberPost})),n(e)}}),[t.data]),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"title"}),Object(o.jsx)("th",{children:"post_nb"}),Object(o.jsx)("th",{children:"stat"})]})}),Object(o.jsx)("tbody",{children:s.map((function(t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t.topic_title}),Object(o.jsx)("td",{children:t.nberPost}),Object(o.jsx)("td",{children:t.status})]})}))})]})},x=function(t){var e=Object(i.useState)([]),c=Object(a.a)(e,2),s=c[0],n=c[1];return Object(i.useEffect)((function(){if(t.data.categories){var e=[].concat.apply([],[].concat.apply([],t.data.categories.map((function(t){return t.topicList}))).map((function(t){return t.listPosts})));e=e.map((function(t){var e=((new Date).getTime()-new Date(t.date).getTime())/864e5;return{author:t.author,rate:t.rate,date:Math.ceil(e)}})),console.log(e),n(e),n(e.sort((function(t,e){return t.date>e.date?1:-1})))}}),[t.data]),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"author"}),Object(o.jsx)("th",{children:"rank"}),Object(o.jsx)("th",{children:"when"})]})}),Object(o.jsx)("tbody",{children:s.map((function(t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t.author}),Object(o.jsx)("td",{children:t.rate}),Object(o.jsxs)("td",{children:[t.date," days ago"]})]})}))})]})},m=function(t){var e=Object(i.useState)([]),c=Object(a.a)(e,2),s=c[0],n=c[1];return Object(i.useEffect)((function(){t.data.users&&n(t.data.users)}),[t.data]),Object(o.jsx)("table",{children:Object(o.jsx)("tbody",{children:s.map((function(t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t.user_id}),Object(o.jsx)("td",{children:t.nberPosts})]})}))})})},g=function(t){return Object(o.jsxs)("div",{style:{background:t.color,margin:"10px 0px",padding:"5px"},children:[Object(o.jsx)("h3",{className:"title",children:t.title}),Object(o.jsx)("div",{className:"table-warpper",children:t.children})]})},v=function(t){var e=f("forum.json"),c=Object(a.a)(e,1)[0],i=f("users.json"),s=Object(a.a)(i,1)[0];return Object(o.jsxs)("section",{className:"right-col",children:[Object(o.jsx)(g,{title:"Ranked Topics",color:"#403131",children:Object(o.jsx)(p,{data:c})}),Object(o.jsx)(g,{title:"Recent Posts",color:"#241f30",children:Object(o.jsx)(x,{data:c})}),Object(o.jsx)(g,{title:"Stats Posts",color:"#283630",children:Object(o.jsx)(m,{data:s})})]})},k=function(t){return Object(o.jsxs)("main",{children:[Object(o.jsx)(h,Object(l.a)({},t)),Object(o.jsx)(v,Object(l.a)({},t))]})},y=function(){return Object(o.jsx)("footer",{children:"Natalie Chen (1934345), Justin Pescador (1835377), Mikito Takata (2036737)"})};var N=function(){var t=f("forum.json"),e=Object(a.a)(t,2),c=e[0],s=e[1],n=f("users.json"),r=Object(a.a)(n,1)[0],l=Object(i.useState)(""),d=Object(a.a)(l,2),u=d[0],b=d[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{search:function(t){return b(t.target.value)},keyWord:u}),Object(o.jsx)(k,{keyWord:u,data:c,users:r,setForumData:s}),Object(o.jsx)(y,{})]})},P=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(e){var c=e.getCLS,i=e.getFID,s=e.getFCP,n=e.getLCP,r=e.getTTFB;c(t),i(t),s(t),n(t),r(t)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),P()}},[[13,1,2]]]);
//# sourceMappingURL=main.185c7680.chunk.js.map