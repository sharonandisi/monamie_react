(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(66),s=t.n(r),c=t(3),m=t(4),i=t(6),o=t(5),d=t(7),u=(t(74),t(137)),h=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-orange"},l.a.createElement("div",{className:"container"},l.a.createElement(u.a,{to:"/",className:"navbar-brand"},"Mon Ami"),l.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#menu"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"menu"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.a,{to:"/word",className:"nav-link"},"Daily Word")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.a,{to:"/play",className:"nav-link"},"Play Time")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.a,{to:"/story",className:"nav-link"},"Story Time"))))))}}]),a}(n.Component),w=t(20),p=t.n(w),v=t(67),g=t.n(v),b=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Dashboard"))}}]),a}(n.Component);p.a.initializeApp({apiKey:"AIzaSyCaEiG_sHndB-st3bA0c9vivJxmyALTCHU",authDomain:"mon-amie-78d91.firebaseapp.com"});var E=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={isSignedIn:!1},t.uiConfig={signInFlow:"popup",signInOptions:[p.a.auth.GoogleAuthProvider.PROVIDER_ID,p.a.auth.FacebookAuthProvider.PROVIDER_ID,p.a.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},t.componentDidMount=function(){p.a.auth().onAuthStateChanged(function(e){t.setState({isSignedIn:!!e}),console.log("user",e)})},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"}," ",this.state.isSignedIn?l.a.createElement(b,null):l.a.createElement(g.a,{uiConfig:this.uiConfig,firebaseAuth:p.a.auth()}))}}]),a}(n.Component),f=l.a.createContext(),y=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),j=(f.Consumer,function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={word:{name:"",image:"",description:"",example:""}},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://9a5vg2jktl.execute-api.us-east-1.amazonaws.com/prod").then(function(e){return e.json()}).then(function(a){e.setState(a)})}},{key:"render",value:function(){var e=this.state.word,a=e.name,t=e.description,n=e.image,r=e.example;return l.a.createElement("div",{className:"d-word"},l.a.createElement("div",{class:"media w-75 mx-auto pt-5"},l.a.createElement("img",{src:n,alt:a,className:"img-fluid",width:"300"}),l.a.createElement("div",{class:"media-body ml-3 ml-5"},l.a.createElement("h5",{class:"mt-0 text-white"},a),l.a.createElement("p",{className:"text-white"}," ",t," "),l.a.createElement("h5",{className:"mt-3 text-white"},"Example"),l.a.createElement("p",{className:"text-white"}," ",r," "))))}}]),a}(n.Component)),N=t(138),O=t(140),k=t(139);var x=function(){return l.a.createElement("div",{className:"s-time"},l.a.createElement("h1",{className:"text-center"},"Games"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mb-3"},l.a.createElement("object",{name:"flash",id:"flash",width:"100%",height:"519"},l.a.createElement("param",{name:"movie",value:"http://www.booksandgames.com/swf/widgets/anagramScramble-widget-loader.swf"}),l.a.createElement("param",{value:"noScale",name:"scale"}),l.a.createElement("param",{value:"false",name:"menu"}),l.a.createElement("param",{value:"true",name:"allowFullScreen"}),l.a.createElement("param",{value:"always",name:"allowScriptAccess"}),l.a.createElement("param",{value:"isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32",name:"flashvars"}),l.a.createElement("embed",{src:"http://www.booksandgames.com/swf/widgets/anagramScramble-widget-loader.swf",type:"application/x-shockwave-flash",allowscriptaccess:"always",allowFullScreen:!0,flashvars:"isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32",width:"798",height:"519"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("object",{name:"flash",id:"flash",width:"100%",height:"519"},l.a.createElement("param",{name:"movie",value:"http://www.booksandgames.com/widgets_xml/swf/missingEverythingAnagramWidget-loader.swf"}),l.a.createElement("param",{value:"noScale",name:"scale"}),l.a.createElement("param",{value:"false",name:"menu"}),l.a.createElement("param",{value:"true",name:"allowFullScreen"}),l.a.createElement("param",{value:"always",name:"allowScriptAccess"}),l.a.createElement("param",{value:"isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32",name:"flashvars"}),l.a.createElement("embed",{src:"http://www.booksandgames.com/widgets_xml/swf/missingEverythingAnagramWidget-loader.swf",type:"application/x-shockwave-flash",allowscriptaccess:"always",allowFullScreen:!0,flashvars:"isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32",width:"790",height:"519"}))))),l.a.createElement("div",{className:"modal fade",id:"game1",tabindex:"-1",role:"dialog","aria-labelledby":"game1Label","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"game1Label"},"Anagram Scrabble"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("object",{name:"flash",id:"flash",width:"100%",height:"519"},l.a.createElement("param",{name:"movie",value:"http://www.booksandgames.com/swf/widgets/anagramScramble-widget-loader.swf"}),l.a.createElement("param",{value:"noScale",name:"scale"}),l.a.createElement("param",{value:"false",name:"menu"}),l.a.createElement("param",{value:"true",name:"allowFullScreen"}),l.a.createElement("param",{value:"always",name:"allowScriptAccess"}),l.a.createElement("param",{value:"isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32",name:"flashvars"}),l.a.createElement("embed",{src:"http://www.booksandgames.com/swf/widgets/anagramScramble-widget-loader.swf",type:"application/x-shockwave-flash",allowscriptaccess:"always",allowFullScreen:!0,flashvars:"isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32",width:"798",height:"519"})))))),l.a.createElement("div",{className:"modal fade",id:"game2",tabindex:"-1",role:"dialog","aria-labelledby":"game2Label","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"game2Label"},"Anagram Scrabble"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("object",{name:"flash",id:"flash",width:"100%",height:"519"},l.a.createElement("param",{name:"movie",value:"http://www.booksandgames.com/widgets_xml/swf/missingEverythingAnagramWidget-loader.swf"}),l.a.createElement("param",{value:"noScale",name:"scale"}),l.a.createElement("param",{value:"false",name:"menu"}),l.a.createElement("param",{value:"true",name:"allowFullScreen"}),l.a.createElement("param",{value:"always",name:"allowScriptAccess"}),l.a.createElement("param",{value:"isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32",name:"flashvars"}),l.a.createElement("embed",{src:"http://www.booksandgames.com/widgets_xml/swf/missingEverythingAnagramWidget-loader.swf",type:"application/x-shockwave-flash",allowscriptaccess:"always",allowFullScreen:!0,flashvars:"isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32",width:"790",height:"519"})))))))},S=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={story:{title:"",image:"",description:""}},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://9a5vg2jktl.execute-api.us-east-1.amazonaws.com/prod").then(function(e){return e.json()}).then(function(a){e.setState(a)})}},{key:"render",value:function(){var e=this.state.story,a=e.title,t=e.image;return l.a.createElement("div",{className:"pt-5 bg-light-success"},l.a.createElement("div",{className:"w-50 mx-auto"},l.a.createElement("img",{className:"img-fluid text-center",src:t,alt:a}),l.a.createElement("h1",null,a)))}}]),a}(n.Component),I=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Mind Map Works!"))}}]),a}(n.Component),A=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"l-page"},l.a.createElement("div",{className:"text-white l-center"},l.a.createElement("h1",null,"Welcome to Mon Ami"),l.a.createElement("div",{className:"l-ul"},l.a.createElement("p",null,"You can navigate to:"),l.a.createElement("button",{className:"btn btn-outline-light mr-3"},l.a.createElement(u.a,{to:"/word",className:"navbar-brand"},"Daily Word")),l.a.createElement("button",{className:"btn btn-outline-light mr-3"},l.a.createElement(u.a,{to:"/play",className:"navbar-brand"},"Play Time")),l.a.createElement("button",{className:"btn btn-outline-light mr-3"},l.a.createElement(u.a,{to:"/story",className:"navbar-brand"},"Story Time")))))}}]),a}(n.Component),C=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(y,null,l.a.createElement(N.a,null,l.a.createElement(n.Fragment,null,l.a.createElement(h,null),l.a.createElement("div",null,l.a.createElement(O.a,null,l.a.createElement(k.a,{exact:!0,path:"/",component:A}),l.a.createElement(k.a,{exact:!0,path:"/word",component:j}),l.a.createElement(k.a,{exact:!0,path:"/play",component:x}),l.a.createElement(k.a,{exact:!0,path:"/story",component:S}),l.a.createElement(k.a,{exact:!0,path:"/mind",component:I}),l.a.createElement(k.a,{exact:!0,path:"/auth",component:E}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,a,t){e.exports=t(135)},74:function(e,a,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.bb5547a7.chunk.js.map