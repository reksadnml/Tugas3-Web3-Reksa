(this["webpackJsonpweb-reactku"]=this["webpackJsonpweb-reactku"]||[]).push([[0],{130:function(e,t,a){e.exports=a(215)},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},203:function(e,t,a){e.exports=a.p+"static/media/picture.b69b5e71.svg"},214:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),i=(a(135),a(7)),c=a(8),s=a(10),m=a(9),u=a(11),d=(a(136),a(219)),h=(a(137),a(222)),b=a(223),p=a(35),f=(d.a.SubMenu,function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={current:"mail"},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"menuBar"},l.a.createElement(d.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},l.a.createElement(d.a.Item,{key:"mail"},l.a.createElement(h.a,null),l.a.createElement(p.b,{to:"/"},"Profile")),l.a.createElement(d.a.Item,{key:"app"},l.a.createElement(b.a,null),l.a.createElement(p.b,{to:"/portofolio"},"Portofolio")),l.a.createElement(d.a.Item,{key:"alipay"},l.a.createElement("a",{href:"https://github.com/reksadnml",target:"_blank",rel:"noopener noreferrer"},"Repositori Github"))))}}]),t}(n.Component)),E=a(30),g=a(217),y=a(220),k=a(221),v=a(218),w=(a(199),a(55));a(200);var O=function(e){var t=e.type,a=e.text,n=e.disabled,r=e.borderRadius,o=void 0===r?25:r,i=e.background,c=void 0===i?"#CD5C5C":i,s=e.textColor,m=void 0===s?"white":s,u=e.border,d=void 0===u?"none":u,h=e.margin,b=void 0===h?"0px":h,p=e.marginLeft,f=e.marginRight,E=e.marginTop,g=e.marginBottom,y=e.className,k=e.onClick;return l.a.createElement(w.a,{type:t,className:y,disabled:n,style:{backgroundColor:c,color:m,borderRadius:o,border:d,margin:b,marginLeft:p,marginRight:f,marginTop:E,marginBottom:g},onClick:k},a)},C=g.a.Content,j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=a(203),t=this.props,n=t.initialData,r=t.showModal,o=t.handleOk,i=t.handleCancel;return l.a.createElement(g.a,{className:"landing-container"},l.a.createElement(C,{style:{overflow:"hidden"}}," ",l.a.createElement(y.a,{className:"section-container"},l.a.createElement(k.a,{lg:12,md:12,sm:12},l.a.createElement("div",{className:"image-big-container"},l.a.createElement("img",{src:e,alt:"Home 1",style:{maxWidth:"80%"}}))),l.a.createElement(k.a,{lg:12,md:12,sm:12},l.a.createElement(y.a,null,l.a.createElement(k.a,{span:24},l.a.createElement("div",{className:"title-container"},l.a.createElement("span",{className:"text-soft-blue title-biggest bold"},"Hello, I'am"),l.a.createElement("br",null),l.a.createElement("span",{className:"text-soft-blue title-big bold"},"Reksa Milenia"))),l.a.createElement(k.a,{span:24},l.a.createElement("div",{className:"image-hidden"},l.a.createElement("img",{src:e,alt:"Home 1",style:{maxWidth:"100%"}})),l.a.createElement("div",{className:"description-container desc-medium"},"If your sky are dark, I'll be your star")),l.a.createElement(k.a,{span:24},l.a.createElement("div",{className:"button-section-1-container"},l.a.createElement(O,{text:"Show Me",className:"button-participate",onClick:r}),l.a.createElement(O,{text:"Another Information",background:"white",textColor:"#CD5C5C",border:"1px solid #CD5C5C",marginLeft:16,className:"button-participate"}))),l.a.createElement(v.a,{title:"Contact",visible:n.visible,onOk:o,onCancel:i,className:"modal-notif"},l.a.createElement("p",{className:"text-notif"},"Silakan email ke reksadini00@mail.ugm.ac.id")))))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={visible:!1},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){console.log(e),a.setState({visible:!1})},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(j,{initialData:this.state,showModal:this.showModal,handleCancel:this.handleCancel,handleOk:this.handleOk})}}]),t}(n.Component),x=(a(214),g.a.Content),S=[{title:"Star",link:"hhttps://www.instagram.com/reksadnml/",description:"There are so much reason why i like to see the stars. \n The first one, it reminds me of you. The second one, stars always shine even darkness follow her. And last one, because she know all of my pray for you."},{title:"Moon",link:"",description:"Look at that moon, honey! \n She is not brave enough to show her light. \n Do you know why? \n Cause she know, \n that you are brighter then her."},{title:"Night",link:"",description:"But darling, darkness will always come. \n Don't worry, I'll be your side till dawn \n Since i'm here, won't you hold my hand?"}],M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,{className:"landing-container"},l.a.createElement(x,{style:{overflow:"hidden"}},l.a.createElement(y.a,{className:"section-container"},l.a.createElement(k.a,{lg:24},l.a.createElement("div",{className:"text-soft-blue title-big bold discover-container"},"View Some Of My Stories")),l.a.createElement(k.a,{lg:24},l.a.createElement("div",{className:"text-black description-discover"},"Hope the sunshine will make your heart melt")),l.a.createElement(k.a,{lg:24},l.a.createElement("hr",{style:{minHeight:8,backgroundColor:"#CD5C5C",border:"none",maxWidth:150,borderRadius:26}})),l.a.createElement(k.a,{lg:24,className:"mt-20"},l.a.createElement(y.a,{type:"flex",justify:"center",className:"card-why-container"},S.map((function(e){return l.a.createElement(k.a,{lg:8,md:12,sm:12,className:""},l.a.createElement("div",{className:"card-why-content"},l.a.createElement("img",{src:e.image,className:"card-why-image"}),l.a.createElement("div",{className:"text-soft-blue semi-bold mt-10"},e.title),l.a.createElement("div",{className:"mt-10",style:{maxWidth:"260px"}},e.description,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:e.link,className:"btn btn-primary"}))))})))))))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={visible:!1},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){console.log(e),a.setState({visible:!1})},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(M,{initialData:this.state,showModal:this.showModal,handleCancel:this.handleCancel,handleOk:this.handleOk})}}]),t}(n.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:N}),l.a.createElement(E.a,{path:"/portofolio",component:D}))}}]),t}(n.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement(I,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(p.a,{basename:"/WEB3B-425975-REKSA-REACT"},l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.9cf8c57b.chunk.js.map