"use strict";(self.webpackChunkubold_angular=self.webpackChunkubold_angular||[]).push([[3313],{9475:(f,l,n)=>{n.d(l,{T:()=>m});var t=n(5e3),r=n(9808);function _(s,d){if(1&s&&(t.TgZ(0,"li",5)(1,"a",11),t._uU(2),t.qZA()()),2&s){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.label)}}function u(s,d){if(1&s&&(t.TgZ(0,"li",12)(1,"a",13),t._uU(2),t.qZA()()),2&s){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.label)}}function i(s,d){if(1&s&&(t.ynx(0),t.YNc(1,_,3,1,"li",9),t.YNc(2,u,3,1,"li",10),t.BQk()),2&s){const o=d.$implicit;t.xp6(1),t.Q6J("ngIf",!o.active),t.xp6(1),t.Q6J("ngIf",o.active)}}let m=(()=>{class s{constructor(){this.breadcrumbItems=[],this.title=""}}return s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title"},decls:11,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[4,"ngFor","ngForOf"],[1,"page-title"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],["href","javascript: void(0);","routerLink","[item.path]"],[1,"breadcrumb-item","active"],["routerLink","[item.path]"]],template:function(o,v){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ol",4)(5,"li",5)(6,"a",6),t._uU(7,"nntr"),t.qZA()(),t.YNc(8,i,3,2,"ng-container",7),t.qZA()(),t.TgZ(9,"h4",8),t._uU(10),t.qZA()()()()),2&o&&(t.xp6(8),t.Q6J("ngForOf",v.breadcrumbItems),t.xp6(2),t.Oqu(v.title))},directives:[r.sg,r.O5],styles:[""]}),s})()},5615:(f,l,n)=>{n.d(l,{l:()=>r});var t=n(5e3);let r=(()=>{class _{constructor(){}ngOnInit(){}}return _.\u0275fac=function(i){return new(i||_)},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-widget-chart-statistics"]],inputs:{title:"title",icon:"icon",stats:"stats",variant:"variant"},decls:5,vars:6,consts:[[1,"text-muted","font-15","mb-1","text-truncate"]],template:function(i,m){1&i&&(t.TgZ(0,"p",0),t._uU(1),t.qZA(),t.TgZ(2,"h4"),t._UZ(3,"i"),t._uU(4),t.qZA()),2&i&&(t.xp6(1),t.Oqu(m.title),t.xp6(2),t.MT6("",m.icon," text-",m.variant," me-1"),t.xp6(1),t.Oqu(m.stats))},styles:[""]}),_})()},1038:(f,l,n)=>{n.d(l,{P:()=>v});var t=n(5e3),r=n(8538),_=n(2566),u=n(9808),i=n(2382);const m=["chatForm"],s=function(p){return{odd:p}};function d(p,b){if(1&p&&(t.TgZ(0,"li",20)(1,"div",21),t._UZ(2,"img",22),t.TgZ(3,"i"),t._uU(4),t.qZA()(),t.TgZ(5,"div",23)(6,"div",24)(7,"i"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA()()()()),2&p){const c=b.$implicit;t.Q6J("ngClass",t.VKq(5,s,"Dominic"===c.sender.name)),t.xp6(2),t.Q6J("src",c.sender.avatar,t.LSH),t.xp6(2),t.Oqu(c.time),t.xp6(4),t.Oqu(c.sender.name),t.xp6(2),t.hij(" ",c.message," ")}}const o=function(p){return{"is-invalid":p}};let v=(()=>{class p{constructor(){this.chatMessages=[],this.newMessage="",this.submitted=!1}ngOnInit(){}sendMessage(){if(this.submitted=!0,""!==this.newMessage){var c=new Date;const a={id:this.chatMessages.length+1,sender:{name:"Dominic",avatar:"assets/images/users/user-1.jpg"},time:c.getHours()+":"+c.getMinutes(),message:this.newMessage};this.chatMessages.push(a),this.newMessage="",this.submitted=!1}}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-widget-chat"]],viewQuery:function(c,a){if(1&c&&t.Gf(m,7),2&c){let g;t.iGM(g=t.CRH())&&(a.chatForm=g.first)}},inputs:{chatMessages:"chatMessages"},decls:26,vars:5,consts:[[1,"card"],[1,"card-body"],["ngbDropdown","",1,"float-end"],["href","javascript:void(0)","id","messageDropdown","aria-expanded","false","ngbDropdownToggle","",1,"arrow-none","card-drop"],[1,"mdi","mdi-dots-vertical"],["ngbDropdownMenu","","aria-labelledby","messageDropdown",1,"dropdown-menu-end"],["ngbDropdownItem",""],[1,"header-title","mb-3"],[1,"chat-conversation"],[2,"height","350px"],[1,"conversation-list"],["class","clearfix",3,"ngClass",4,"ngFor","ngForOf"],["name","chat-form",1,"needs-validation","mt-3",3,"ngSubmit"],["chatForm","ngForm"],[1,"row"],[1,"col"],["type","text","placeholder","Enter your text","required","","name","new-message",1,"form-control","chat-input",3,"ngModel","ngClass","ngModelChange"],[1,"invalid-feedback"],[1,"col-auto"],["type","submit",1,"btn","btn-danger","chat-send","waves-effect","waves-light"],[1,"clearfix",3,"ngClass"],[1,"chat-avatar"],["alt","user",3,"src"],[1,"conversation-text"],[1,"ctext-wrap"]],template:function(c,a){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),t._UZ(4,"i",4),t.qZA(),t.TgZ(5,"div",5)(6,"a",6),t._uU(7,"Settings"),t.qZA(),t.TgZ(8,"a",6),t._uU(9,"Action"),t.qZA()()(),t.TgZ(10,"h4",7),t._uU(11,"Chat"),t.qZA(),t.TgZ(12,"div",8)(13,"ngx-simplebar",9)(14,"ul",10),t.YNc(15,d,11,7,"li",11),t.qZA()(),t.TgZ(16,"form",12,13),t.NdJ("ngSubmit",function(){return a.sendMessage()}),t.TgZ(18,"div",14)(19,"div",15)(20,"input",16),t.NdJ("ngModelChange",function(e){return a.newMessage=e}),t.qZA(),t.TgZ(21,"div",17),t._uU(22," Please enter your messsage "),t.qZA()(),t.TgZ(23,"div",18)(24,"button",19),t._uU(25,"Send"),t.qZA()()()()()()()),2&c&&(t.xp6(15),t.Q6J("ngForOf",a.chatMessages),t.xp6(5),t.Q6J("ngModel",a.newMessage)("ngClass",t.VKq(3,o,a.submitted&&""===a.newMessage)))},directives:[r.jt,r.iD,r.Vi,r.TH,_.M,u.sg,u.mk,i._Y,i.JL,i.F,i.Fj,i.Q7,i.JJ,i.On],styles:[""]}),p})()},8508:(f,l,n)=>{n.d(l,{z:()=>t});const t=[{id:1,sender:{name:"Geneva",avatar:"assets/images/users/user-5.jpg"},time:"10:00",message:"Hello!"},{id:2,sender:{name:"Dominic",avatar:"assets/images/users/user-1.jpg"},time:"10:01",message:"Hi, How are you? What about our next meeting?"},{id:3,sender:{name:"Geneva",avatar:"assets/images/users/user-5.jpg"},time:"10:02",message:"Yeah everything is fine"},{id:4,sender:{name:"Dominic",avatar:"assets/images/users/user-1.jpg"},time:"10:03",message:"Wow that's great"}]},276:(f,l,n)=>{n.d(l,{K:()=>t});const t=[{id:1,avatar:"assets/images/users/user-2.jpg",sender:"Tomaslau",text:"I've finished it! See you so..."},{id:2,avatar:"assets/images/users/user-3.jpg",sender:"Stillnotdavid",text:"This theme is awesome!"},{id:3,avatar:"assets/images/users/user-4.jpg",sender:"Kurafire",text:"Hyper is awesome theme!"},{id:4,avatar:"assets/images/users/user-5.jpg",sender:"Shahedk",text:"This theme is awesome"},{id:5,avatar:"assets/images/users/user-6.jpg",sender:"Adhamdannaway",text:"Ubold theme is awesome"},{id:6,avatar:"assets/images/users/user-3.jpg",sender:"Stillnotdavid",text:"This theme is awesome!"},{id:7,avatar:"assets/images/users/user-4.jpg",sender:"Kurafire",text:"Nice to meet you"}]},2190:(f,l,n)=>{n.d(l,{F:()=>m});var t=n(5e3),r=n(8538),_=n(2566),u=n(9808);function i(s,d){if(1&s&&(t.TgZ(0,"div",10)(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"p",13),t._uU(4),t.qZA(),t.TgZ(5,"p",14),t._uU(6),t.qZA(),t.TgZ(7,"p",15)(8,"a",16),t._uU(9," Reply "),t.qZA()()()),2&s){const o=d.$implicit;t.xp6(2),t.Q6J("src",o.avatar,t.LSH),t.xp6(2),t.Oqu(o.sender),t.xp6(2),t.Oqu(o.text)}}let m=(()=>{class s{constructor(){this.messages=[],this.height=410}ngOnInit(){}}return s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-widget-inbox"]],inputs:{messages:"messages",height:"height"},decls:14,vars:3,consts:[[1,"card"],[1,"card-body"],["ngbDropdown","",1,"float-end"],["href","javascript:void(0)","ngbDropdownToggle","",1,"arrow-none","card-drop"],[1,"mdi","mdi-dots-vertical"],["ngbDropdownMenu","",1,"dropdown-menu-end"],["href","javascript:void(0);","ngbDropdownItem",""],[1,"header-title","mb-3"],[1,"inbox-widget"],["class","inbox-item",4,"ngFor","ngForOf"],[1,"inbox-item"],[1,"inbox-item-img"],["alt","",1,"rounded-circle",3,"src"],[1,"inbox-item-author"],[1,"inbox-item-text"],[1,"inbox-item-date"],["href","javascript:(0);",1,"btn","btn-sm","btn-link","text-info","font-13"]],template:function(o,v){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),t._UZ(4,"i",4),t.qZA(),t.TgZ(5,"div",5)(6,"a",6),t._uU(7,"Settings"),t.qZA(),t.TgZ(8,"a",6),t._uU(9,"Action"),t.qZA()()(),t.TgZ(10,"h4",7),t._uU(11,"Inbox"),t.qZA(),t.TgZ(12,"ngx-simplebar",8),t.YNc(13,i,10,3,"div",9),t.qZA()()()),2&o&&(t.xp6(12),t.Udp("max-height",v.height,"px"),t.xp6(1),t.Q6J("ngForOf",v.messages))},directives:[r.jt,r.iD,r.Vi,r.TH,_.M,u.sg],styles:[""]}),s})()},2506:(f,l,n)=>{n.d(l,{s:()=>i});var t=n(5e3),r=n(8538),_=n(3559),u=n(9808);let i=(()=>{class m{constructor(){this.title="",this.stats=0,this.trendIcon="",this.trendLabel="",this.trendValue="",this.trendStats="",this.variant=""}ngOnInit(){}}return m.\u0275fac=function(d){return new(d||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-widget-statistics-card3"]],inputs:{title:"title",stats:"stats",trendIcon:"trendIcon",trendLabel:"trendLabel",trendValue:"trendValue",trendStats:"trendStats",variant:"variant",options:"options"},decls:14,vars:13,consts:[["id","tooltip-container",1,"card"],[1,"card-body"],["placement","bottom","ngbTooltip","More Info",1,"fa","fa-info-circle","text-muted","float-end"],[1,"mt-0","font-16"],[1,"text-primary","my-3","text-center"],[3,"countUp","options"],[1,"text-muted","mb-0"],[1,"float-end"]],template:function(d,o){1&d&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"i",2),t.TgZ(3,"h4",3),t._uU(4),t.qZA(),t.TgZ(5,"h2",4)(6,"span",5),t._uU(7),t.ALo(8,"number"),t.qZA()(),t.TgZ(9,"p",6),t._uU(10),t.TgZ(11,"span",7),t._UZ(12,"i"),t._uU(13),t.qZA()()()()),2&d&&(t.xp6(4),t.Oqu(o.title),t.xp6(2),t.Q6J("countUp",o.stats)("options",o.options),t.xp6(1),t.Oqu(t.lcZ(8,11,o.stats)),t.xp6(3),t.AsE("",o.trendLabel,": ",o.trendValue," "),t.xp6(2),t.MT6("",o.trendIcon," text-",o.variant," me-1"),t.xp6(1),t.hij("",o.trendStats,"%"))},directives:[r._L,_.P],pipes:[u.JJ],styles:[""]}),m})()},6956:(f,l,n)=>{n.d(l,{r:()=>t});const t=[{id:1,text:"Design One page theme",completed:!1},{id:2,text:"Build a js based app",completed:!0},{id:3,text:"Creating component page",completed:!0},{id:4,text:"Testing??",completed:!0},{id:5,text:"Hehe!! This looks cool!",completed:!1},{id:6,text:"Create new version 3.0",completed:!1},{id:7,text:"Build an angular app",completed:!0},{id:8,text:"Vue Admin & Dashboard",completed:!1}]},9616:(f,l,n)=>{n.d(l,{G:()=>c});var t=n(5e3),r=n(8538),_=n(9808),u=n(2566),i=n(2382);const m=["addTodo"];function s(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"div",13)(1,"div",14)(2,"h5",15)(3,"span",16),t._uU(4),t.qZA(),t._uU(5," of "),t.TgZ(6,"span",17),t._uU(7),t.qZA(),t._uU(8," remaining"),t.qZA()(),t.TgZ(9,"div",18)(10,"a",19),t.NdJ("click",function(){return t.CHM(e),t.oxw().archiveTasks()}),t._uU(11,"Archive"),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(4),t.Oqu(e.getInprogressTodoCount()),t.xp6(3),t.Oqu(e.toDoItems.length)}}function d(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"div",22)(1,"input",23),t.NdJ("change",function(){t.CHM(e);const T=t.oxw().$implicit;return t.oxw().toggleTodo(T)}),t.qZA(),t.TgZ(2,"label",24)(3,"s"),t._uU(4),t.qZA()()()}if(2&a){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("id",e.id),t.xp6(1),t.Q6J("for",e.id),t.xp6(2),t.Oqu(e.text)}}function o(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"div",22)(1,"input",25),t.NdJ("change",function(){t.CHM(e);const T=t.oxw().$implicit;return t.oxw().toggleTodo(T)}),t.qZA(),t.TgZ(2,"label",24),t._uU(3),t.qZA()()}if(2&a){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("id",e.id),t.xp6(1),t.Q6J("for",e.id),t.xp6(1),t.Oqu(e.text)}}function v(a,g){if(1&a&&(t.TgZ(0,"li",20),t.YNc(1,d,5,3,"div",21),t.YNc(2,o,4,3,"div",21),t.qZA()),2&a){const e=g.$implicit;t.xp6(1),t.Q6J("ngIf",e.completed),t.xp6(1),t.Q6J("ngIf",!e.completed)}}const p=function(a){return{"is-invalid":a}};function b(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"form",26,27),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().addNewTask()}),t.TgZ(2,"div",13)(3,"div",14)(4,"input",28),t.NdJ("ngModelChange",function(T){return t.CHM(e),t.oxw().newTask=T}),t.qZA(),t.TgZ(5,"div",29),t._uU(6," Please enter your task name "),t.qZA()(),t.TgZ(7,"div",18)(8,"button",30),t._uU(9,"Add"),t.qZA()()()()}if(2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.newTask)("ngClass",t.VKq(2,p,e.submitted&&""===e.newTask||" "===e.newTask))}}let c=(()=>{class a{constructor(){this.toDoItems=[],this.height=0,this.archivable=!1,this.addable=!1,this.newTask="",this.submitted=!1,this.archiveTodos=new t.vpe,this.addTask=new t.vpe}ngOnInit(){}toggleTodo(e){e.completed=!e.completed}archiveTasks(){this.archiveTodos.emit()}addNewTask(){this.submitted=!0,""!==this.newTask&&(this.addTask.emit(this.newTask),this.newTask="",this.submitted=!1)}getInprogressTodoCount(){return this.toDoItems.filter(e=>!1===e.completed).length}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-widget-todo"]],viewQuery:function(e,h){if(1&e&&t.Gf(m,7),2&e){let T;t.iGM(T=t.CRH())&&(h.addTodo=T.first)}},inputs:{toDoItems:"toDoItems",height:"height",archivable:"archivable",addable:"addable"},outputs:{archiveTodos:"archiveTodos",addTask:"addTask"},decls:18,vars:5,consts:[[1,"card"],[1,"card-body"],["ngbDropdown","",1,"float-end"],["href","javascript:void(0)","id","messageDropdown","aria-expanded","false","ngbDropdownToggle","",1,"arrow-none","card-drop"],[1,"mdi","mdi-dots-vertical"],["ngbDropdownMenu","","aria-labelledby","messageDropdown",1,"dropdown-menu-end"],["ngbDropdownItem",""],[1,"header-title","mb-3"],[1,"todoapp"],["class","row",4,"ngIf"],["id","todo-list",1,"list-group","list-group-flush","todo-list"],["class","list-group-item border-0 ps-0",4,"ngFor","ngForOf"],["name","todo-form","class","mt-3",3,"ngSubmit",4,"ngIf"],[1,"row"],[1,"col"],["id","todo-message"],["id","todo-remaining"],["id","todo-total"],[1,"col-auto"],["href","javascript:void(0)","id","btn-archive",1,"float-end","btn","btn-light","btn-sm",3,"click"],[1,"list-group-item","border-0","ps-0"],["class","form-check mb-0",4,"ngIf"],[1,"form-check","mb-0"],["type","checkbox","checked","",1,"form-check-input","todo-done",3,"id","change"],[1,"form-check-label",3,"for"],["type","checkbox",1,"form-check-input",3,"id","change"],["name","todo-form",1,"mt-3",3,"ngSubmit"],["addTodo","ngForm"],["type","text","id","todo-input-text","name","todo-input-text","placeholder","Add new todo","required","",1,"form-control",3,"ngModel","ngClass","ngModelChange"],[1,"invalid-feedback"],["type","submit","id","todo-btn-submit",1,"btn-primary","btn-md","btn","waves-effect","waves-light"]],template:function(e,h){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),t._UZ(4,"i",4),t.qZA(),t.TgZ(5,"div",5)(6,"a",6),t._uU(7,"Settings"),t.qZA(),t.TgZ(8,"a",6),t._uU(9,"Action"),t.qZA()()(),t.TgZ(10,"h4",7),t._uU(11,"Todo"),t.qZA(),t.TgZ(12,"div",8),t.YNc(13,s,12,2,"div",9),t.TgZ(14,"ngx-simplebar")(15,"ul",10),t.YNc(16,v,3,2,"li",11),t.qZA()(),t.YNc(17,b,10,4,"form",12),t.qZA()()()),2&e&&(t.xp6(13),t.Q6J("ngIf",h.archivable),t.xp6(1),t.Udp("height",h.height,"px"),t.xp6(2),t.Q6J("ngForOf",h.toDoItems),t.xp6(1),t.Q6J("ngIf",h.addable))},directives:[r.jt,r.iD,r.Vi,r.TH,_.O5,u.M,_.sg,i._Y,i.JL,i.F,i.Fj,i.Q7,i.JJ,i.On,_.mk],styles:[""]}),a})()}}]);