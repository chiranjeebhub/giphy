(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(10),r=a.n(o),c=(a(22),a(11)),l=a(12),s=a(14),m=a(13),u=a(15),h=(a(23),a(3)),d=a.n(h),p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={gif:[],query:""},a.handleChange=function(e){a.setState({query:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),d.a.get("http://api.giphy.com/v1/gifs/search?q=".concat(a.state.query,"&api_key=W6j782MUgb8aXKhD289LHocpawNNNcaH&limit=5"),{crossdomain:!0}).then(function(e){a.setState({gif:e.data.data}),console.log(e.data.data)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://api.giphy.com/v1/gifs/trending?api_key=W6j782MUgb8aXKhD289LHocpawNNNcaH&limit=5",{crossdomain:!0}).then(function(t){e.setState({gif:t.data.data}),console.log(t.data.data)})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("form",{className:"form-inline",style:{paddingTop:"10px"},onSubmit:this.handleSubmit},i.a.createElement("p",null,"Gif Search: "),i.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},i.a.createElement("label",{className:"sr-only"},"Password"),i.a.createElement("input",{type:"text",className:"form-control",id:"query",placeholder:"Search Query",value:this.state.query,onChange:this.handleChange})),i.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Search"))),this.state.gif.map(function(e){return i.a.createElement("div",{style:{display:"inline"}},i.a.createElement("img",{src:e.images.fixed_height.url,alt:"gif"}))}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.a45c911f.chunk.js.map