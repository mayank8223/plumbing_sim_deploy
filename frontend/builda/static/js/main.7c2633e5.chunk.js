(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(8),c=t.n(r),i=(t(14),t(5)),s=t(2),l=t(1),u=t(4),d=t(3),k=(t(15),t(16),[]);k.blank="white",k.active="blue",k.pipe="red",k.split="black";var m=k,h=t(6),f="wss://secure-garden-92806.herokuapp.com/ws/sim",v=function(){function e(){Object(s.a)(this,e),this.callbacks={},this.socketRef=null}return Object(l.a)(e,null,[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),Object(l.a)(e,[{key:"connect",value:function(){var e=this,n=f;this.socketRef=new WebSocket(n),this.socketRef.onmessage=function(n){console.log("Received"),e.socketNewMessage(n.data)},this.socketRef.onopen=function(){console.log("WebSocket open")},this.socketRef.onerror=function(e){console.log(e.message)},this.socketRef.onclose=function(){console.log("WebSocket closed, restarting.."),e.connect()}}},{key:"socketNewMessage",value:function(e){var n=JSON.parse(e),t=n.command;0!==Object.keys(this.callbacks).length&&("game"===t&&(console.log("game received"),this.callbacks[t](n)),"new_message"===t&&(console.log("okay so this was called"),this.callbacks[t](n.message)))}},{key:"initUser",value:function(e){this.sendMessage({command:"init",username:e})}},{key:"reset",value:function(e){this.sendMessage({command:"reset",username:e})}},{key:"blockClick",value:function(e,n,t){this.sendMessage({command:"block_click",username:e,i:n,j:t})}},{key:"directionClick",value:function(e,n){this.sendMessage({command:"direction_click",username:e,direction:n})}},{key:"addCallbacks",value:function(e){this.callbacks.game=e}},{key:"sendMessage",value:function(e){try{console.log("tried"),console.log(Object(h.a)({},e)),this.socketRef.send(JSON.stringify(Object(h.a)({},e)))}catch(n){console.log(n.message)}}},{key:"state",value:function(){return this.socketRef.readyState}},{key:"waitForSocketConnection",value:function(e){var n=this.socketRef,t=this.waitForSocketConnection;setTimeout((function(){if(1===n.readyState)return console.log("Connection is made"),void(null!=e&&e());console.log("Wait for connection.."),t(e)}),1)}}]),e}();v.instance=null;var g=v.getInstance(),b=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).usernameChangeHandler=function(e){console.log(window.location.origin.replace(/^http/,"ws")+"/ws/sim"),a.setState({username:e.target.value})},a.state={username:""},a}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login"},o.a.createElement("form",{onSubmit:function(n){return e.props.handleLogin(n,e.state.username)}},o.a.createElement("input",{type:"text",onChange:this.usernameChangeHandler,value:this.state.username,placeholder:"username",required:!0}),o.a.createElement("button",{className:"submit",type:"submit"},"Let's Go")))}}]),t}(o.a.Component);function p(e){return o.a.createElement("button",{className:"square",style:{backgroundColor:e.color},onClick:e.onClick})}var y=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"renderBlock",value:function(e,n){var t=this,a=m[this.props.grid[e][n]];return o.a.createElement(p,{x:e,y:n,color:a,onClick:function(){return t.props.onClick(e,n)}})}},{key:"renderRow",value:function(e,n){for(var t=[],a=0;a<n;a++)t.push(this.renderBlock(e,a));return t}},{key:"renderGrid",value:function(e){for(var n=[],t=0;t<e;t++)n.push(o.a.createElement("div",{className:"board-row"},this.renderRow(t,e)));return n}},{key:"render",value:function(){var e=this.props.size;return o.a.createElement("div",null,this.renderGrid(e))}}]),t}(o.a.Component);function C(e){return o.a.createElement("button",{className:"direction",onClick:e.onClick},e.text)}function w(e){return o.a.createElement("button",{className:"blank"})}var E=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"renderDirection",value:function(e){var n=this;return o.a.createElement(C,{text:e,onClick:function(){return n.props.onClick(e)}})}},{key:"renderBlank",value:function(){return o.a.createElement(w,null)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderBlank(),this.renderDirection("U"),this.renderBlank()),o.a.createElement("div",{className:"board-row"},this.renderDirection("L"),this.renderBlank(),this.renderDirection("R")),o.a.createElement("div",{className:"board-row"},this.renderBlank(),this.renderDirection("D"),this.renderBlank()))}}]),t}(o.a.Component);function O(e){return o.a.createElement("button",{className:"reset",onClick:e.onClick},"Reset")}var j=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(e){var a;Object(s.a)(this,t),(a=n.call(this,e)).handleLogin=function(e,n){e.preventDefault(),a.setState({loggedIn:!0,username:n}),g.connect(),a.waitForSocketConnection((function(){g.initUser(n),g.addCallbacks(a.gameUpdate.bind(Object(i.a)(a)))}))};for(var o=[],r=0;r<10;r++){var c=Array(10).fill("blank");o.push(c)}return o[9][0]="active",a.state={size:10,grid:o,row:9,col:0,username:"",loggedIn:!1},a}return Object(l.a)(t,[{key:"waitForSocketConnection",value:function(e){var n=this;setTimeout((function(){if(1===g.state())return console.log("Connection is made"),void e();console.log("Waiting for connection.."),n.waitForSocketConnection(e)}),100)}},{key:"handleDirectionClick",value:function(e){var n=this.state.username;g.directionClick(n,e)}},{key:"handleBlockClick",value:function(e,n){var t=this.state.username;g.blockClick(t,e,n)}},{key:"handleReset",value:function(){console.log("reset"),g.reset(this.state.username)}},{key:"gameUpdate",value:function(e){console.log("update");var n=e.grid,t=e.row,a=e.col;e.size;this.setState({grid:n,row:t,col:a})}},{key:"render",value:function(){var e=this,n=this.state.size,t=this.state.grid;return this.state.loggedIn?o.a.createElement("div",null,o.a.createElement(y,{size:n,grid:t,onClick:function(n,t){return e.handleBlockClick(n,t)}}),o.a.createElement(E,{onClick:function(n){return e.handleDirectionClick(n)}}),o.a.createElement(O,{onClick:function(){return e.handleReset()}})):o.a.createElement(b,{handleLogin:this.handleLogin})}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.7c2633e5.chunk.js.map