(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/reallogo.47bbd567.jpg"},19:function(e,t,a){e.exports=a(43)},28:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(9),r=a.n(o),c=(a(24),a(26),a(28),a(4)),s=a(5),i=a(8),m=a(6),u=a(7),h=(a(31),a(3));function d(e){return l.a.createElement(h.c,{className:"Contact"},l.a.createElement(h.j,null,l.a.createElement(h.a,null,l.a.createElement("h3",null,"Call"),l.a.createElement("a",{href:"tel:+16698675309"},l.a.createElement("h3",null,"(669)-867-5309")))),l.a.createElement(h.j,null,l.a.createElement(h.a,null,l.a.createElement("a",{href:"mailto:goodtunes@restlessanglers.com"},l.a.createElement("h4",null,"goodtunes@restlessanglers.com")))))}function g(e){return l.a.createElement(h.c,{className:"Home"},l.a.createElement(h.j,null,l.a.createElement(h.a,null,l.a.createElement("h1",null,"We're the Restless Anglers"),l.a.createElement("h4",null,"we play good tunes"),l.a.createElement("h3",null,"for good vibes and good times"))))}function p(e){return l.a.createElement(h.c,{className:"Listen"},l.a.createElement(h.j,null,l.a.createElement(h.a,null,l.a.createElement("h1",null,"Listen In"))),l.a.createElement(h.j,{style:{height:"60vh"}},l.a.createElement(h.a,null,l.a.createElement("iframe",{title:"soundcloud",width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/494868909&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}))))}a(35);var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={width:parseInt(.75*window.innerWidth,10),height:parseInt(.7*window.innerHeight,10),mobile:window.innerWidth<576},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.mobile?l.a.createElement("div",null,l.a.createElement("iframe",{src:"https://calendar.google.com/calendar/embed?showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&height=600&wkst=1&bgcolor=%23e3e9ff&src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angelesamp;color=%235A6986&",width:this.state.width,height:this.state.height,frameBorder:"0",scrolling:"no",title:"icalframe"})):l.a.createElement("div",null,l.a.createElement("iframe",{src:"https://calendar.google.com/calendar/embed?height=800&wkst=1&bgcolor=%23e3e9ff&src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angelesamp;color=%235A6986&",width:this.state.width,height:this.state.height,frameBorder:"0",scrolling:"no",title:"icalframe"}))}}]),t}(n.Component);function b(e){return l.a.createElement(h.c,{className:"About"},l.a.createElement(h.j,null,l.a.createElement(h.a,null,l.a.createElement("h1",null,"Scheduled Events"),l.a.createElement(E,null))))}var f=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"ParallaxPage",style:{color:this.props.text,backgroundColor:this.props.background}},l.a.createElement("style",null,"\n            .ParallaxPage a:hover {\n              text-decoration: none;\n              color: "+this.props.hovercolor+"!important;\n            }\n          "),l.a.createElement("div",{className:"bgimg1",id:"Home"},l.a.createElement("div",{className:"captionline"},l.a.createElement("span",{className:"captionbox"},"The Restless Anglers"))),l.a.createElement("div",{className:"textbox"},l.a.createElement(g,null)),l.a.createElement("div",{className:"bgimg3",backgroundColor:"rgb(0, 0, 0)",id:"Listen"},l.a.createElement("div",{className:"captionline"},l.a.createElement("span",{className:"captionbox"},"Listen"))),l.a.createElement("div",{className:"textbox"},l.a.createElement(p,null)),l.a.createElement("div",{className:"bgimg2",id:"Schedule"},l.a.createElement("div",{className:"captionline"},l.a.createElement("span",{className:"captionbox"},"Schedule"))),l.a.createElement("div",{className:"textbox"},l.a.createElement(b,null)),l.a.createElement("div",{className:"bgimg4",backgroundColor:"rgb(270, 270, 270)",id:"Contact"},l.a.createElement("div",{className:"captionline"},l.a.createElement("span",{className:"captionbox"},"Contact"))),l.a.createElement("div",{className:"textbox"},l.a.createElement(d,null)))}}]),t}(n.Component);f.defaultProps={text:"white",background:"black",hovercolor:"grey"};var v=f,w=a(10),k=a(17),N=a.n(k),x=(a(37),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggleNav=a.toggleNav.bind(Object(w.a)(Object(w.a)(a))),a.closeNav=a.closeNav.bind(Object(w.a)(Object(w.a)(a))),a.state={isOpen:!1,expand:"md"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"toggleNav",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"closeNav",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=N()(this.props.text),t=e[0]+", "+e[1]+", "+e[2]+", 0.5 ";return l.a.createElement(h.g,{expand:"md",className:this.props.className,style:{backgroundColor:this.props.background,color:this.props.text}},l.a.createElement(h.h,{href:"#Home",onClick:this.closeNav},l.a.createElement("img",{id:"logo",src:this.props.logo,alt:"Business Logo"})),l.a.createElement("style",null,"\n            #toggleIcon {\n              background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba("+t+")' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")!important;\n              }\n\n            .nav-link:hover {\n            \tborder-bottom: 1px "+this.props.hovercolor+" solid;\n            \tcolor: "+this.props.hovercolor+"!important;\n            }\n          "),l.a.createElement(h.i,{onClick:this.toggleNav},l.a.createElement("span",{className:"navbar-toggler-icon",id:"toggleIcon"})),l.a.createElement(h.b,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(h.d,{className:"ml-auto nav-options",navbar:!0},l.a.createElement(h.e,null,l.a.createElement(h.f,{href:"#Listen",onClick:this.closeNav},"Listen")),l.a.createElement(h.e,null,l.a.createElement(h.f,{href:"#Schedule",onClick:this.closeNav},"Schedule")),l.a.createElement(h.e,null,l.a.createElement(h.f,{href:"#Contact",onClick:this.closeNav},"Contact")),l.a.createElement(h.e,null,l.a.createElement(h.f,{href:"https://soundcloud.com/restlessanglers",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"footer-icon icon fa fa-soundcloud desktop-only"}))))))}}]),t}(n.Component));x.defaultProps={className:"sticky-top navbar-dark NavigationBar",text:"white",background:"black",hovercolor:"grey",logo:"none"};var j=x;a(39);function y(e){return l.a.createElement("div",{className:"Footer",style:{backgroundColor:e.background,color:e.text}},l.a.createElement("style",null,"\n          .Footer a:hover {\n            border-bottom: 1px "+e.hovercolor+" solid;\n            color: "+e.hovercolor+"!important;\n          }\n        "),l.a.createElement("p",null,"Site and design \xa9 2018 Grailsoft Technical Solutions",l.a.createElement("a",{href:"https://www.linkedin.com/company/grailsoft-technologies-llc/",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("span",{className:"footer-icon icon fa fa-linkedin-square"})),l.a.createElement("a",{href:"https://github.com/GrailsoftTechnologies",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("span",{className:"footer-icon icon fa fa-github-square"})),l.a.createElement("a",{href:"https://twitter.com/GrailsoftTech",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("span",{className:"footer-icon icon fa fa-twitter-square"}))))}y.defaultProps={background:"black",text:"white",hovercolor:"grey"};a(41);var O=a(18),C=a.n(O),A=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(j,{background:"#0C2F19",text:"#F9F871",hovercolor:"#56D9DB",logo:C.a}),l.a.createElement(v,{background:"#0C2F19",text:"#F9F871",hovercolor:"#56D9DB"}),l.a.createElement(y,{background:"#0C2F19",text:"#F9F871",hovercolor:"#56D9DB"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.0dc85b84.chunk.js.map