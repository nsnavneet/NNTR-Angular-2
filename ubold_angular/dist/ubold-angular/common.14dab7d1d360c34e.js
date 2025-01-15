"use strict";(self.webpackChunkubold_angular=self.webpackChunkubold_angular||[]).push([[8592],{7523:(_,p,e)=>{e.d(p,{_:()=>d});var t=e(5e3),l=e(9808),r=e(8538);function c(n,o){1&n&&(t.TgZ(0,"div",14),t._UZ(1,"div",15),t.qZA())}function i(n,o){if(1&n){const a=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"a",4),t.NdJ("click",function(){return t.CHM(a),t.oxw().refreshContent()}),t._UZ(4,"i",5),t.qZA(),t.TgZ(5,"a",6),t.NdJ("click",function(){return t.CHM(a),t.MAs(12).toggle()}),t._UZ(6,"i"),t.qZA(),t.TgZ(7,"a",7),t.NdJ("click",function(){return t.CHM(a),t.oxw().closeCard()}),t._UZ(8,"i",8),t.qZA()(),t.TgZ(9,"h4",9),t._uU(10),t.qZA(),t.TgZ(11,"div",10,11),t.NdJ("ngbCollapseChange",function(C){return t.CHM(a),t.oxw().isCollapsed=C}),t.TgZ(13,"div",12),t.Hsn(14),t.qZA()()(),t.YNc(15,c,2,0,"div",13),t.qZA()}if(2&n){const a=t.oxw();t.Tol(a.cardClasses),t.xp6(5),t.uIk("aria-expanded",!a.isCollapsed),t.xp6(1),t.Tol(a.isCollapsed?"mdi mdi-plus":"mdi mdi-minus"),t.xp6(3),t.Tol(a.cardTitleClass),t.xp6(1),t.Oqu(a.cardTitle),t.xp6(1),t.Q6J("ngbCollapse",a.isCollapsed),t.xp6(4),t.Q6J("ngIf",a.refreshRequsted)}}const s=["*"];let d=(()=>{class n{constructor(){this.cardTitle="",this.cardClasses="",this.isCollapsed=!1,this.isClosed=!1,this.refreshRequsted=!1}ngOnInit(){}closeCard(){this.isClosed=!0}refreshContent(){this.refreshRequsted=!0,setTimeout(()=>{this.refreshRequsted=!1},1e3)}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ui-portlet-card"]],inputs:{cardTitle:"cardTitle",cardTitleClass:"cardTitleClass",cardClasses:"cardClasses"},ngContentSelectors:s,decls:1,vars:1,consts:[["class","card",3,"class",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"card-widgets"],["href","javascript:void(0);",3,"click"],[1,"mdi","mdi-refresh"],["href","javascript:void(0)","role","button","aria-expanded","false",3,"click"],["href","javascript:void(0)",3,"click"],[1,"mdi","mdi-close"],[1,"header-title","mb-0"],["id","cardCollpase",1,"collapse",3,"ngbCollapse","ngbCollapseChange"],["collapse","ngbCollapse"],[1,"pt-3"],["class","card-disabled",4,"ngIf"],[1,"card-disabled"],[1,"card-portlets-loader"]],template:function(a,u){1&a&&(t.F$t(),t.YNc(0,i,16,10,"div",0)),2&a&&t.Q6J("ngIf",!u.isClosed)},directives:[l.O5,r._D],styles:[""]}),n})()},9668:(_,p,e)=>{e.d(p,{W:()=>c});var t=e(9808),l=e(8538),r=e(5e3);let c=(()=>{class i{}return i.\u0275fac=function(d){return new(d||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[[t.ez,l.lQ]]}),i})()},3878:(_,p,e)=>{e.d(p,{T:()=>l});var t=e(5e3);let l=(()=>{class r{constructor(){this.display=!1}ngOnInit(){}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-ui-preloader"]],inputs:{display:"display"},decls:6,vars:1,consts:[["id","preloader",3,"hidden"],["id","status"],[1,"spinner"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"div")(4,"div")(5,"div"),t.qZA()()()),2&i&&t.Q6J("hidden",!s.display)},styles:[""]}),r})()},6890:(_,p,e)=>{e.d(p,{E:()=>i});var t=e(5e3),l=e(9808),r=e(3559);const c=function(s){return{"avatar-title font-22":s}};let i=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-widget-statistics-card1"]],inputs:{statisticsCardData:"statisticsCardData"},decls:14,vars:17,consts:[[1,"widget-rounded-circle","card"],[1,"card-body"],[1,"row"],[1,"col-6"],[3,"ngClass"],[1,"text-end"],[1,"text-dark","mt-1"],[3,"countUp","options"],[1,"text-muted","mb-1","text-truncate"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div"),t._UZ(5,"i",4),t.qZA()(),t.TgZ(6,"div",3)(7,"div",5)(8,"h3",6)(9,"span",7),t._uU(10),t.ALo(11,"number"),t.qZA()(),t.TgZ(12,"p",8),t._uU(13),t.qZA()()()()()()),2&n&&(t.xp6(4),t.MT6("avatar-lg rounded-circle bg-soft-",o.statisticsCardData.variant," border border-",o.statisticsCardData.variant," "),t.xp6(1),t.MT6("",o.statisticsCardData.icon,"  text-",o.statisticsCardData.variant,""),t.Q6J("ngClass",t.VKq(15,c,o.statisticsCardData.icon)),t.xp6(4),t.Q6J("countUp",o.statisticsCardData.stats)("options",o.statisticsCardData.options),t.xp6(1),t.Oqu(t.lcZ(11,13,o.statisticsCardData.stats)),t.xp6(3),t.Oqu(o.statisticsCardData.description))},directives:[l.mk,r.P],pipes:[l.JJ],styles:[""]}),s})()},846:(_,p,e)=>{e.d(p,{T:()=>s});var t=e(5e3),l=e(9808),r=e(3559),c=e(8538);const i=function(d){return{"avatar-title font-22":d}};let s=(()=>{class d{constructor(){this.variant="",this.description="",this.stats=0,this.icon="",this.progress=0}ngOnInit(){}}return d.\u0275fac=function(o){return new(o||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-widget-statistics-card2"]],inputs:{variant:"variant",description:"description",stats:"stats",icon:"icon",progress:"progress",options:"options"},decls:20,vars:18,consts:[[1,"card"],[1,"card-body"],[1,"row"],[1,"col-6"],[3,"ngClass"],[1,"text-end"],[1,"text-dark","my-1"],[3,"countUp","options"],[1,"text-muted","mb-1","text-truncate"],[1,"mt-3"],[1,"text-uppercase"],[1,"float-end"],[1,"progress-sm","m-0",3,"type","value"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div"),t._UZ(5,"i",4),t.qZA()(),t.TgZ(6,"div",3)(7,"div",5)(8,"h3",6)(9,"span",7),t._uU(10),t.ALo(11,"number"),t.qZA()(),t.TgZ(12,"p",8),t._uU(13),t.qZA()()()(),t.TgZ(14,"div",9)(15,"h6",10),t._uU(16,"Target "),t.TgZ(17,"span",11),t._uU(18),t.qZA()(),t._UZ(19,"ngb-progressbar",12),t.qZA()()()),2&o&&(t.xp6(4),t.Gre("avatar-sm bg-",a.variant," rounded"),t.xp6(1),t.Gre("",a.icon,"  text-white"),t.Q6J("ngClass",t.VKq(16,i,a.icon)),t.xp6(4),t.Q6J("countUp",a.stats)("options",a.options),t.xp6(1),t.Oqu(t.lcZ(11,14,a.stats)),t.xp6(3),t.Oqu(a.description),t.xp6(5),t.hij("",a.progress,"%"),t.xp6(1),t.Q6J("type",a.variant)("value",a.progress))},directives:[l.mk,r.P,c.Ly],pipes:[l.JJ],styles:[""]}),d})()},5269:(_,p,e)=>{e.d(p,{$:()=>i});var t=e(5e3),l=e(9808),r=e(3559);function c(s,d){if(1&s&&t._UZ(0,"i"),2&s){const n=t.oxw();t.MT6("",n.icon," ",n.iconCssClasses,"")}}let i=(()=>{class s{constructor(){this.stats=0,this.label="",this.labelCssClasses=""}ngOnInit(){}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-widget-statistics"]],inputs:{icon:"icon",iconCssClasses:"iconCssClasses",stats:"stats",options:"options",label:"label",labelCssClasses:"labelCssClasses"},decls:7,vars:10,consts:[[3,"class",4,"ngIf"],[3,"countUp","options"]],template:function(n,o){1&n&&(t.YNc(0,c,1,4,"i",0),t.TgZ(1,"h3")(2,"span",1),t._uU(3),t.ALo(4,"number"),t.qZA()(),t.TgZ(5,"p"),t._uU(6),t.qZA()),2&n&&(t.Q6J("ngIf",o.icon),t.xp6(2),t.Q6J("countUp",o.stats)("options",o.options),t.xp6(1),t.Oqu(t.lcZ(4,8,o.stats)),t.xp6(2),t.Gre("text-muted mb-0 ",o.labelCssClasses,""),t.xp6(1),t.Oqu(o.label))},directives:[l.O5,r.P],pipes:[l.JJ],styles:[""]}),s})()},9570:(_,p,e)=>{e.d(p,{r:()=>l});var t=e(5e3);let l=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-widget-user-card"]],inputs:{user:"user"},decls:11,vars:11,consts:[[1,"widget-rounded-circle","card"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-auto"],[1,"avatar-lg"],["alt","user-img",1,"img-fluid","rounded-circle",3,"src"],[1,"col"],[1,"mb-1","mt-2","font-16"],[1,"mb-2","text-muted"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.qZA()(),t.TgZ(6,"div",6)(7,"h5",7),t._uU(8),t.qZA(),t.TgZ(9,"p",8),t._uU(10),t.qZA()()()()()),2&i&&(t.ekj("bg-blue",s.user.premiumUser),t.xp6(5),t.ekj("img-thumbnail",s.user.premiumUser),t.Q6J("src",s.user.avatar,t.LSH),t.xp6(2),t.ekj("text-white",s.user.premiumUser),t.xp6(1),t.Oqu(s.user.name),t.xp6(1),t.ekj("text-white-50",s.user.premiumUser),t.xp6(1),t.Oqu(s.user.title))},styles:[""]}),r})()}}]);