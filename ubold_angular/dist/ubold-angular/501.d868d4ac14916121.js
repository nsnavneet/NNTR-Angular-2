"use strict";(self.webpackChunkubold_angular=self.webpackChunkubold_angular||[]).push([[501],{501:(C,T,t)=>{t.r(T),t.d(T,{AdvancedModule:()=>J});var a=t(9808),g=t(2382),_=t(7071),c=t(8538),A=t(9095),v=t(4521),s=t(7579),u=t(6451),i=t(8372),m=t(1884),f=t(4004),M=t(9300);const Z=[{label:"Alaskan/Hawaiian Time Zone",options:[{value:"AK",label:"Alaska"},{value:"HI",label:"Hawaii",disabled:!0}]},{label:"Pacific Time Zone",options:[{value:"CA",label:"California"},{value:"NV",label:"Nevada"},{value:"OR",label:"Oregon"},{value:"WA",label:"Washington"}]},{label:"Mountain Time Zone",options:[{value:"AZ",label:"Arizona"},{value:"CO",label:"Colorado"},{value:"ID",label:"Idaho"},{value:"MT",label:"Montana"},{value:"NE",label:"Nebraska"},{value:"NM",label:"New Mexico"},{value:"ND",label:"North Dakota"},{value:"UT",label:"Utah"},{value:"WY",label:"Wyoming"}]},{label:"Central Time Zone",options:[{value:"AL",label:"Alabama"},{value:"AR",label:"Arkansas"},{value:"IL",label:"Illinois"},{value:"IA",label:"Iowa"},{value:"KS",label:"Kansas"},{value:"KY",label:"Kentucky"},{value:"LA",label:"Louisiana"},{value:"MN",label:"Minnesota"},{value:"MS",label:"Mississippi"},{value:"MO",label:"Missouri"},{value:"OK",label:"Oklahoma"},{value:"SD",label:"South Dakota"},{value:"TX",label:"Texas"},{value:"TN",label:"Tennessee"},{value:"WI",label:"Wisconsin"}]},{label:"Eastern Time Zone",options:[{value:"CT",label:"Connecticut"},{value:"DE",label:"Delaware"},{value:"FL",label:"Florida"},{value:"GA",label:"Georgia"},{value:"IN",label:"Indiana"},{value:"ME",label:"Maine"},{value:"MD",label:"Maryland"},{value:"MA",label:"Massachusetts"},{value:"MI",label:"Michigan"},{value:"NH",label:"New Hampshire"},{value:"NJ",label:"New Jersey"},{value:"NY",label:"New York"},{value:"NC",label:"North Carolina"},{value:"OH",label:"Ohio"},{value:"PA",label:"Pennsylvania"},{value:"RI",label:"Rhode Island"},{value:"SC",label:"South Carolina"},{value:"VT",label:"Vermont"},{value:"VA",label:"Virginia"},{value:"WV",label:"West Virginia"}]}],h=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District Of Columbia","Federated States Of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Islands","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];var e=t(5e3),k=t(9475);const U=["instance"];function N(l,b){if(1&l){const r=e.EpF();e._UZ(0,"hr",34),e.TgZ(1,"div",35)(2,"button",36),e._uU(3,"Apply"),e.qZA(),e.TgZ(4,"button",37),e.NdJ("click",function(){return e.CHM(r),e.oxw(),e.MAs(38).close()}),e._uU(5,"Cancel"),e.qZA()()}}const O=[{path:"",component:(()=>{class l{constructor(r){this.calendar=r,this.pageTitle=[],this.countries=[],this.hidden=!0,this.show=!0,this.meridian=!0,this.spinners=!0,this.statesList=[],this.formatter=n=>n.toUpperCase(),this.focus$=new s.x,this.click$=new s.x,this.search1=n=>n.pipe((0,i.b)(200),(0,m.x)(),(0,f.U)(p=>p.length<2?[]:this.statesList.filter(d=>d.toLowerCase().indexOf(p.toLowerCase())>-1).slice(0,10))),this.search=n=>{const p=n.pipe((0,i.b)(200),(0,m.x)()),d=this.click$.pipe((0,M.h)(()=>!this.instance.isPopupOpen()));return(0,u.T)(p,this.focus$,d).pipe((0,f.U)(y=>(""===y?this.statesList:this.statesList.filter(S=>S.toLowerCase().indexOf(y.toLowerCase())>-1)).slice(0,10)))}}ngOnInit(){this.pageTitle=[{label:"Forms",path:"/"},{label:"Form Advanced",path:"/",active:!0}],this._fetchData()}_fetchData(){this.countries=Z,this.statesList=h}toggleMeridian(){this.meridian=!this.meridian}toggleSpinners(){this.spinners=!this.spinners}}return l.\u0275fac=function(r){return new(r||l)(e.Y36(c.vL))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-form-advanced"]],viewQuery:function(r,n){if(1&r&&e.Gf(U,7),2&r){let p;e.iGM(p=e.CRH())&&(n.instance=p.first)}},decls:108,vars:26,consts:[["title","Form Advanced",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"header-title"],[1,"text-muted","font-14"],[1,"col-lg-6"],[1,"mb-1","fw-bold","text-muted"],["placeholder","Select Country","id","selec2-2",3,"data"],["country1",""],["placeholder","Select Country","id","selec2-2","multiple","true",3,"data"],["country2",""],["id","datepicker1",1,"mb-3","position-relative"],[1,"form-label"],["type","text","name","datepicker1","ngbDatepicker","","autoClose","'outside'",1,"form-control",3,"ngModel","footerTemplate","ngModelChange","click"],["datepicker1","ngbDatepicker"],["footerTemplate",""],[1,"mb-3"],[3,"ngModel","ngModelChange"],["datepicker7",""],["id","typeahead-basic","type","text",1,"form-control","position-relative",3,"ngbTypeahead"],["id","typeahead-custom","type","text","placement","auto","placeholder","States of USA",1,"form-control",3,"ngModel","ngbTypeahead","resultFormatter","ngModelChange"],[1,"col-lg-6","mt-3","mt-lg-0"],["id","typeahead-focus","type","text",1,"form-control","position-relative",3,"ngbTypeahead","focus","click"],["instance","ngbTypeahead"],["id","timepicker-input-group1"],[1,"mb-0"],["id","timepicker-input-group2"],[3,"ngModel","meridian","ngModelChange"],[3,"click"],["id","timepicker-input-group3"],[3,"ngModel","seconds","ngModelChange"],[3,"ngModel","spinners","ngModelChange"],[1,"my-1"],[1,"ngb-footer-button","d-flex","justify-content-end","mb-1","me-1"],[1,"btn","btn-primary","btn-sm","me-1"],[1,"btn","btn-secondary","btn-sm",3,"click"]],template:function(r,n){if(1&r){const p=e.EpF();e._UZ(0,"app-page-title",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e._uU(6,"Select2"),e.qZA(),e.TgZ(7,"p",6),e._uU(8,"Select2 gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options."),e.qZA(),e.TgZ(9,"div",1)(10,"div",7)(11,"p",8),e._uU(12,"Single Select"),e.qZA(),e.TgZ(13,"p",6),e._uU(14," Select2 can take a regular select box like this... "),e.qZA(),e._UZ(15,"select2",9,10),e.qZA(),e.TgZ(17,"div",7)(18,"p",8),e._uU(19,"Multiple Select"),e.qZA(),e.TgZ(20,"p",6),e._uU(21," Select2 can take a regular select box like this... "),e.qZA(),e._UZ(22,"select2",11,12),e.qZA()()()()()(),e.TgZ(24,"div",1)(25,"div",2)(26,"div",3)(27,"div",4)(28,"h4",5),e._uU(29,"Date and Date Range Picker"),e.qZA(),e.TgZ(30,"p",6),e._uU(31," A component for choosing date ranges, dates and times. "),e.qZA(),e.TgZ(32,"div",1)(33,"div",7)(34,"div",13)(35,"label",14),e._uU(36,"Date Picker"),e.qZA(),e.TgZ(37,"input",15,16),e.NdJ("ngModelChange",function(o){return n.model1=o})("click",function(){return e.CHM(p),e.MAs(38).toggle()}),e.qZA()(),e.YNc(39,N,6,0,"ng-template",null,17,e.W1O),e.qZA(),e.TgZ(41,"div",7)(42,"div",18)(43,"label",14),e._uU(44,"Inline Datepicker"),e.qZA(),e.TgZ(45,"div")(46,"ngb-datepicker",19,20),e.NdJ("ngModelChange",function(o){return n.model2=o}),e.qZA()()()()()()()()(),e.TgZ(48,"div",1)(49,"div",2)(50,"div",3)(51,"div",4)(52,"h4",5),e._uU(53,"Typeahead"),e.qZA(),e.TgZ(54,"p",6),e._uU(55," Typeahead is a directive providing a simple way of creating powerful typeaheads from any text input. "),e.qZA(),e.TgZ(56,"div",1)(57,"div",7)(58,"div",18)(59,"label",14),e._uU(60,"The Basics"),e.qZA(),e._UZ(61,"input",21),e.qZA()(),e.TgZ(62,"div",7)(63,"div",18)(64,"label",14),e._uU(65,"Custom Templates"),e.qZA(),e.TgZ(66,"input",22),e.NdJ("ngModelChange",function(o){return n.typeaheadModel=o}),e.qZA()()(),e.TgZ(67,"div",23)(68,"div",18)(69,"label",14),e._uU(70,"Open on focus"),e.qZA(),e.TgZ(71,"input",24,25),e.NdJ("focus",function(o){return n.focus$.next(o.target.value)})("click",function(o){return n.click$.next(o.target.value)}),e.qZA()()()()()()()(),e.TgZ(73,"div",1)(74,"div",2)(75,"div",3)(76,"div",4)(77,"h4",5),e._uU(78,"Timepicker"),e.qZA(),e.TgZ(79,"p",6),e._uU(80," It is a directive that helps with wth picking hours, minutes and seconds. You can easily select a time for a text input using your mouse or keyboards arrow keys. "),e.qZA(),e.TgZ(81,"div",1)(82,"div",7)(83,"div",18)(84,"label",14),e._uU(85,"Default Time Picker"),e.qZA(),e.TgZ(86,"div",26)(87,"ngb-timepicker",19),e.NdJ("ngModelChange",function(o){return n.time1=o}),e.qZA()()(),e.TgZ(88,"div",27)(89,"label",14),e._uU(90,"24 Hour Mode Time Picker "),e.qZA(),e.TgZ(91,"div",28)(92,"ngb-timepicker",29),e.NdJ("ngModelChange",function(o){return n.time2=o}),e.qZA()(),e.TgZ(93,"button",30),e.NdJ("click",function(){return n.toggleMeridian()}),e._uU(94),e.qZA()()(),e.TgZ(95,"div",23)(96,"div",27)(97,"label",14),e._uU(98,"Specify a step for the seconds"),e.qZA(),e.TgZ(99,"div",31)(100,"ngb-timepicker",32),e.NdJ("ngModelChange",function(o){return n.time3=o}),e.qZA()()(),e.TgZ(101,"div",27)(102,"label",14),e._uU(103,"Spinners"),e.qZA(),e.TgZ(104,"div",28)(105,"ngb-timepicker",33),e.NdJ("ngModelChange",function(o){return n.time4=o}),e.qZA()(),e.TgZ(106,"button",30),e.NdJ("click",function(){return n.toggleSpinners()}),e._uU(107),e.qZA()()()()()()()()}if(2&r){const p=e.MAs(40);e.Q6J("breadcrumbItems",n.pageTitle),e.xp6(15),e.Q6J("data",n.countries),e.xp6(7),e.Q6J("data",n.countries),e.xp6(15),e.Q6J("ngModel",n.model1)("footerTemplate",p),e.xp6(9),e.Q6J("ngModel",n.model2),e.xp6(15),e.Q6J("ngbTypeahead",n.search1),e.xp6(5),e.Q6J("ngModel",n.typeaheadModel)("ngbTypeahead",n.search1)("resultFormatter",n.formatter),e.xp6(5),e.Q6J("ngbTypeahead",n.search),e.xp6(16),e.Q6J("ngModel",n.time1),e.xp6(5),e.Q6J("ngModel",n.time2)("meridian",n.meridian),e.xp6(1),e.Gre("btn btn-sm btn-outline-",n.meridian?"success":"danger",""),e.xp6(1),e.hij(" Meridian - ",n.meridian?"ON":"OFF"," "),e.xp6(6),e.Q6J("ngModel",n.time3)("seconds",!0),e.xp6(5),e.Q6J("ngModel",n.time4)("spinners",n.spinners),e.xp6(1),e.Gre("mt-1 btn btn-sm btn-outline-",n.spinners?"success":"danger",""),e.xp6(1),e.hij(" Spinners - ",n.spinners?"ON":"OFF"," ")}},directives:[k.T,_.ub,c.J4,g.Fj,g.JJ,g.On,c.VL,c.dR,c.Pm],styles:[""]}),l})()}];let I=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[v.Bz.forChild(O)],v.Bz]}),l})(),J=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,g.u5,_.ig,c.ZS,c.M,c.UL,A.p,I]]}),l})()},9475:(C,T,t)=>{t.d(T,{T:()=>v});var a=t(5e3),g=t(9808);function _(s,u){if(1&s&&(a.TgZ(0,"li",5)(1,"a",11),a._uU(2),a.qZA()()),2&s){const i=a.oxw().$implicit;a.xp6(2),a.Oqu(i.label)}}function c(s,u){if(1&s&&(a.TgZ(0,"li",12)(1,"a",13),a._uU(2),a.qZA()()),2&s){const i=a.oxw().$implicit;a.xp6(2),a.Oqu(i.label)}}function A(s,u){if(1&s&&(a.ynx(0),a.YNc(1,_,3,1,"li",9),a.YNc(2,c,3,1,"li",10),a.BQk()),2&s){const i=u.$implicit;a.xp6(1),a.Q6J("ngIf",!i.active),a.xp6(1),a.Q6J("ngIf",i.active)}}let v=(()=>{class s{constructor(){this.breadcrumbItems=[],this.title=""}}return s.\u0275fac=function(i){return new(i||s)},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title"},decls:11,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[4,"ngFor","ngForOf"],[1,"page-title"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],["href","javascript: void(0);","routerLink","[item.path]"],[1,"breadcrumb-item","active"],["routerLink","[item.path]"]],template:function(i,m){1&i&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ol",4)(5,"li",5)(6,"a",6),a._uU(7,"nntr"),a.qZA()(),a.YNc(8,A,3,2,"ng-container",7),a.qZA()(),a.TgZ(9,"h4",8),a._uU(10),a.qZA()()()()),2&i&&(a.xp6(8),a.Q6J("ngForOf",m.breadcrumbItems),a.xp6(2),a.Oqu(m.title))},directives:[g.sg,g.O5],styles:[""]}),s})()},8372:(C,T,t)=>{t.d(T,{b:()=>c});var a=t(4986),g=t(4482),_=t(5403);function c(A,v=a.z){return(0,g.e)((s,u)=>{let i=null,m=null,f=null;const M=()=>{if(i){i.unsubscribe(),i=null;const h=m;m=null,u.next(h)}};function Z(){const h=f+A,e=v.now();if(e<h)return i=this.schedule(void 0,h-e),void u.add(i);M()}s.subscribe((0,_.x)(u,h=>{m=h,f=v.now(),i||(i=v.schedule(Z,A),u.add(i))},()=>{M(),u.complete()},void 0,()=>{m=i=null}))})}}}]);