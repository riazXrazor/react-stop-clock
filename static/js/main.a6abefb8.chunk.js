(this["webpackJsonpreact-stop-clock-example"]=this["webpackJsonpreact-stop-clock-example"]||[]).push([[0],{141:function(e,t,c){},142:function(e,t,c){"use strict";c.r(t);c(48);var s=c(2),n=c.n(s),a=c(44),i=c.n(a),o=c(9),r=c(26),l=c(46),p=c(25),m=c(16),h=c(45),u=c.n(h);let k={id:1,onTick:null,presist:!1,key:"react-stop-clock",presistanceType:window.localStorage};var d=class{constructor(e){this.TimerComponent=e=>{const t=Object(s.useState)(()=>{let e=new Date;if(this.presist){const t=this.presistanceType.getItem("".concat(this.key,"-").concat(this.id));t?e=Object(p.a)(t):this.presistanceType.setItem("".concat(this.key,"-").concat(this.id),e.toISOString())}return console.log(e),e}),c=Object(o.a)(t,1)[0],a=Object(s.useState)({}),i=Object(o.a)(a,2),r=i[0],m=i[1];return Object(s.useEffect)(()=>{const e=setInterval(()=>m(()=>{const e=Object(l.a)({start:c,end:new Date});return this.onTick&&this.onTick(e),e}),1e3);return()=>{clearInterval(e)}},[]),n.a.createElement("div",{className:"react-stop-clock-container"},u()(r,(t,c)=>t?n.a.createElement("span",{className:"react-stop-clock-time-".concat(c),key:"".concat(this.key,"-").concat(t).concat(c),style:{margin:"3px"}},t," ",n.a.createElement("small",{className:"react-stop-clock-".concat(c)},e.labels&&e.labels[c]?e.labels[c]:c)):null))},this.isTimerActive=()=>!!this.presistanceType.getItem("".concat(this.key,"-").concat(this.id)),this.stopTimer=()=>this.presistanceType.removeItem("".concat(this.key,"-").concat(this.id)),this.startTimer=()=>this.presistanceType.setItem("".concat(this.key,"-").concat(this.id),(new Date).toISOString()),this.resetTimer=()=>this.presistanceType.setItem("".concat(this.key,"-").concat(this.id),(new Date).toISOString()),this.getCurrentTimeInSeconds=()=>{try{const e=Object(p.a)(this.presistanceType.getItem("".concat(this.key,"-").concat(this.id)));return Object(m.a)(new Date,e)}catch(e){return 0}},k=Object(r.a)(Object(r.a)({},k),e),this.id=k.id,this.onTick=k.onTick,this.presist=k.presist,this.key=k.key,this.presistanceType=k.presistanceType}};c(141);const T=new d({id:1,presist:!0,onTick:e=>{console.log(e)}}),y=T.TimerComponent,b=T.isTimerActive,g=T.stopTimer,I=T.startTimer,O=T.getCurrentTimeInSeconds;var S=()=>{const e=n.a.useState(0),t=Object(o.a)(e,2),c=t[0],s=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{labels:{minutes:"min",seconds:"sec"}}),n.a.createElement("div",null,c),n.a.createElement("div",null,n.a.createElement("button",{disabled:!b,onClick:I},"Start"),n.a.createElement("button",{disabled:b,onClick:g},"Stop"),n.a.createElement("button",{onClick:()=>s(O())},"get seconds")))};i.a.render(n.a.createElement(S,null),document.getElementById("root"))},47:function(e,t,c){e.exports=c(142)},48:function(e,t,c){}},[[47,1,2]]]);
//# sourceMappingURL=main.a6abefb8.chunk.js.map