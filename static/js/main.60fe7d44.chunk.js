(this.webpackJsonplg=this.webpackJsonplg||[]).push([[0],{103:function(n,t,e){},104:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e.n(a),i=e(41),o=e.n(i),c=(e(60),e(24)),u=e.n(c),l=e(42),f=e(43),p=e(50),s=e(44),d=e(51),h=e(3),v=e(4),b=(e(62),e(45)),m=e.n(b),x=e(6);function g(){var n=Object(h.a)(["\n  position: absolute;\n"]);return g=function(){return n},n}function j(){var n=Object(h.a)(["\n  float: left;\n  display: block;\n  width: 48%;\n  height: 100%;\n  position: absolute;\n  top: 23px;\n  left: 580px;\n"]);return j=function(){return n},n}function y(){var n=Object(h.a)(["\n  float: left;\n  display: flex;\n  width: 35%;\n  position: absolute;\n  top: 23px;\n  left: 145px;\n  /* justify-content: center; */\n"]);return y=function(){return n},n}function O(){var n=Object(h.a)(["\n  margin: 0;\n  float: left;\n  width: 130px;\n  position: absolute;\n  top: 17px;\n  left: 62px;\n"]);return O=function(){return n},n}function w(){var n=Object(h.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: ",";\n  float: left;\n  position: absolute;\n  top: 18px;\n  left: 38px;\n"]);return w=function(){return n},n}function E(){var n=Object(h.a)(["\n  position: relative;\n"]);return E=function(){return n},n}function k(){var n=Object(h.a)(["\n  justify-content: space-between;\n  height: 50px;\n  width: 50px;\n  padding: 5px;\n  margin: 0;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return k=function(){return n},n}function C(){var n=Object(h.a)(["\n  /* float: left; */\n  display: block;\n  width: 17%;\n  height: auto;\n  margin: 5px 0;\n"]);return C=function(){return n},n}function I(){var n=Object(h.a)(["\n  display: flex;\n"]);return I=function(){return n},n}var J=v.a.div(I()),z=v.a.div(C()),A=v.a.img(k()),B=v.a.div(E()),D=v.a.div(w(),(function(n){return n.color})),M=v.a.h3(O()),S=v.a.div(y()),U=v.a.div(j());v.a.div(g());var q=function(n){var t=n.data;return r.a.createElement(J,null,r.a.createElement(z,null,t.map((function(n){return r.a.createElement(B,null,r.a.createElement(A,{src:n.imgUrl}),r.a.createElement(D,{color:n.color}),r.a.createElement(M,null,n.name))}))),r.a.createElement(S,null,r.a.createElement(x.f,{height:350,width:350},t.map((function(n){return r.a.createElement(x.a,{data:[{x:n.testCnt,y:2*(t.length-n.id)},{x:n.purchaseCnt,y:2*(t.length-n.id)-1}],color:"#c10c3f",animation:!0})})))),r.a.createElement(U,null))};e(103);function F(){var n=Object(h.a)([""]);return F=function(){return n},n}function G(){var n=Object(h.a)(["\n  width: 100%;\n  height: 4000px;\n  /* display: block; */\n  /* position: fixed; */\n  top: 50px;\n"]);return G=function(){return n},n}var H=v.a.div(G()),K=(v.a.div(F()),function(n){function t(){var n,e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(p.a)(this,(n=Object(s.a)(t)).call.apply(n,[this].concat(r)))).state={data:[]},e.getItems=function(){var n,t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(m.a.get("http://15.164.228.86:3000/api/data"));case 2:n=a.sent,t=n.data,e.setState({data:t});case 5:case"end":return a.stop()}}))},e}return Object(d.a)(t,n),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){var n=this.state.data;return r.a.createElement(H,null,r.a.createElement(q,{data:n}))}}]),t}(r.a.Component));o.a.render(r.a.createElement(K,null),document.getElementById("root"))},55:function(n,t,e){n.exports=e(104)},60:function(n,t,e){}},[[55,1,2]]]);
//# sourceMappingURL=main.60fe7d44.chunk.js.map