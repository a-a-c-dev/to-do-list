(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/add-icon.1d0950cc.svg"},,,function(e,t,a){e.exports=a.p+"static/media/complete-icon.333c5a07.svg"},function(e,t,a){e.exports=a.p+"static/media/delete-icon.a6029d89.svg"},function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(2),r=a.n(c),o=a(4),s=a(1),m=a(3),i=a.n(m),u=function(e){var t=e.addTask,a=e.closeModal,c=Object(n.useState)(""),r=Object(s.a)(c,2),o=r[0],m=r[1],u=Object(n.useState)({}),d=Object(s.a)(u,2),p=d[0],f=d[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Add tasks"),l.a.createElement("p",null,"fill in the input with your task."),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var t={};return e||(t.textRequired="*Text is required, please insert text"),e.match(/^[a-zA-Z0-9_.-]*$/)||(t.validText="*Please insert text in English or numbers"),f(t),0===Object.keys(t).length}(o)&&(t(o),m(""),a())}},l.a.createElement("input",{value:o,placeholder:"New Task",type:"text",className:"input",onChange:function(e){return m(e.target.value)}}),l.a.createElement("button",{className:"btn",type:"submit"},l.a.createElement("img",{src:i.a,alt:"Add Icon"}))),p?l.a.createElement("h4",{className:"error"},p.textRequired||p.validText):null)},d=a(6),p=a.n(d),f=a(7),E=a.n(f),k=function(e){var t=e.task,a=e.index,n=e.completeTask,c=e.deleteTask;return l.a.createElement("div",{className:"task-container"},l.a.createElement("div",{className:"text-container"},l.a.createElement("p",{className:"counter-task"},a+1,"."),l.a.createElement("p",{className:"task-text",style:{textDecoration:t.isCompleted?"line-through":""}},t.taskName)),l.a.createElement("div",{className:"btn-container"},l.a.createElement("button",{className:"btn",onClick:function(){return n(a)}},l.a.createElement("img",{src:p.a,alt:"Complete Icon"})),l.a.createElement("button",{className:"btn",onClick:function(){return c(a)}},l.a.createElement("img",{src:E.a,alt:"Delete Icon"}))))},b=function(e){var t=e.children;return r.a.createPortal(l.a.createElement("div",{className:"modal-overlay"},l.a.createElement("div",{className:"modal"},t)),document.getElementById("modal-root"))},N=function(e){var t=e.toggle,a=e.content,c=Object(n.useState)(!1),r=Object(s.a)(c,2),o=r[0],m=r[1];return l.a.createElement(l.a.Fragment,null,t((function(){return m(!0)})),o&&a((function(){return m(!1)})))},v=function(){var e=Object(n.useState)([{taskName:"Sell your car.",isCompleted:!0},{taskName:"Fix upper floor Wifi.",isCompleted:!0},{taskName:"Complete portfolio",isCompleted:!1},{taskName:"Do the dishes",isCompleted:!1},{taskName:"Wipe the floor",isCompleted:!1},{taskName:"Sell your car.",isCompleted:!0},{taskName:"Fix upper floor Wifi.",isCompleted:!0},{taskName:"Complete portfolio",isCompleted:!1},{taskName:"Do the dishes",isCompleted:!1},{taskName:"Wipe the floor",isCompleted:!1}]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),m=Object(s.a)(r,2),d=m[0],p=m[1],f=function(e){var t=[].concat(Object(o.a)(a),[{taskName:e}]);c(t)},E=function(e){var t=Object(o.a)(a);t[e].isCompleted=!t[e].isCompleted,c(t)},v=function(e){var t=Object(o.a)(a);t.splice(e,1),c(t)};return Object(n.useEffect)((function(){10===a.length?p(!0):p(!1)}),[a]),l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"tasks-container"},a.map((function(e,t){return l.a.createElement(k,{key:t,index:t,task:e,completeTask:E,deleteTask:v})}))),l.a.createElement(N,{toggle:function(e){return d?l.a.createElement("p",{className:"error"},"*List is full!",l.a.createElement("br",null)," please delete some of your tasks, in order to add some more"):l.a.createElement("button",{className:"btn-add-modal",onClick:e},l.a.createElement("h3",null,"Press here to add new task"),l.a.createElement("img",{src:i.a,alt:"Add Icon"}))},content:function(e){return l.a.createElement(b,null,l.a.createElement(u,{addTask:f,closeModal:e}),l.a.createElement("button",{className:"close-btn",onClick:e},"Close"))}}))},h=function(){return l.a.createElement("h1",{className:"header"}," Welcome to A-A-C ",l.a.createElement("br",null),"To-do List App")},C=(a(13),function(){return l.a.createElement("div",{className:"todoList-app"},l.a.createElement(h,null),l.a.createElement(v,null))});r.a.render(l.a.createElement(C,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.595fbe10.chunk.js.map