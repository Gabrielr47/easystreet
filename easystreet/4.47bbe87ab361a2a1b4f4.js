(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"ct+p":function(t,e,r){"use strict";r.r(e),r.d(e,"HomeModule",(function(){return Z}));var n=r("tyNb"),o=r("fXoL"),c=r("XiUz"),s=r("XNiG"),a=r("itXk"),i=r("lJxs"),l=r("Kj3r"),u=r("/uUt"),b=r("0IaG");class d{constructor(t,e){this.defaultTranscoder=t,this.subject=e}has(t){return this.subject.has(t)}get(t,e){return this.subject.get(t,e||this.defaultTranscoder)}set(t,e,r){this.subject.set(t,e,r||this.defaultTranscoder)}remove(t){this.subject.remove(t)}clear(){this.subject.clear()}withDefaultTranscoder(t){return new d(t,this.subject)}}class p{constructor(t){this.defaultTranscoder=t}get(t,e){const r=this.getItem(t);return void 0!==r?(e||this.defaultTranscoder).decode(r):void 0}set(t,e,r){this.setItem(t,(r||this.defaultTranscoder).encode(e))}withDefaultTranscoder(t){return new d(t,this)}}class m{encode(t){return JSON.stringify(t)}decode(t){try{return JSON.parse(t)}catch(e){return}}}class g{encode(t){return t}decode(t){return t}}class h{encode(t){return t.toString()}decode(t){return"true"===t||"false"!==t&&void 0}}class f{encode(t){return t.toString()}decode(t){const e=Number(t);return Number.isFinite(e)?e:void 0}}class v{encode(t){return t.toISOString()}decode(t){const e=Date.parse(t);return isNaN(e)?void 0:new Date(e)}}class y{encode(t){return t.valueOf().toString()}decode(t){const e=parseInt(t,10);return isNaN(e)?void 0:new Date(e)}}const O={JSON:new m,STRING:new g,BOOLEAN:new h,NUMBER:new f,DATE_ISO_STRING:new v,DATE_EPOCH_TIME:new y};class C extends p{constructor(){super(O.JSON),this.storage=new Map}has(t){return this.storage.has(t)}remove(t){this.storage.delete(t)}clear(){this.storage.clear()}getItem(t){if(this.storage.has(t))return this.storage.get(t)}setItem(t,e){this.storage.set(t,e)}}class N extends p{constructor(t){super(O.JSON),this.storage=t}has(t){return null!==this.storage.getItem(t)}remove(t){this.storage.removeItem(t)}clear(){this.storage.clear()}getItem(t){const e=this.storage.getItem(t);return null!==e?e:void 0}setItem(t,e){return this.storage.setItem(t,e)}}const w=new o.q("LOCAL_STORAGE",{providedIn:"root",factory:function(){try{if("undefined"!=typeof localStorage&&function(t){if(!t)return!1;try{const e=Date.now(),r="storage-test-entry-"+e,n="storage-test-value-"+e;t.setItem(r,n);const o=t.getItem(r);return t.removeItem(r),o===n}catch(e){return!1}}(localStorage))return new N(localStorage)}catch(t){}return new C}});var I=r("2Vo4"),S=r("tk/3"),F=r("dNgK");const x="assets";let _=(()=>{class t{constructor(t,e,r){this.http=t,this.storage=e,this.snackBar=r,this.getCryptoCurrencies$=this.http.get("assets"),this.getFavoriteCryptoCurrencies$=new I.a(this.getFavoriteCryptoCurrencies())}getFavoriteCryptoCurrencies(){return this.storage.get(x)}addCryptoToFavorites(t){const e=this.storage.get(x)||[];e.some(e=>e.asset_id===t.asset_id)?this.cryptoMessage(t.name+" was already added to your list of favorites."):(e.push(t),this.storage.set(x,e),this.getFavoriteCryptoCurrencies$.next(this.getFavoriteCryptoCurrencies()))}removeFavorite(t){const e=this.getFavoriteCryptoCurrencies().filter(e=>e.name!==t.name);this.storage.set(x,e),this.getFavoriteCryptoCurrencies$.next(this.getFavoriteCryptoCurrencies()),this.cryptoMessage(t.name+" was removed with success!")}cryptoMessage(t){this.snackBar.open(t,"Close",{duration:3e3,horizontalPosition:"right",verticalPosition:"bottom"})}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(S.b),o.Sb(w),o.Sb(F.a))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var k=r("bTqV");let M=(()=>{class t{constructor(t,e,r){this.dialogRef=t,this.data=e,this.cryptoService=r}onClose(){this.dialogRef.close()}ngOnInit(){}addCryptoToFavorites(){this.cryptoService.addCryptoToFavorites(this.data.crypto),this.onClose()}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(b.f),o.Jb(b.a),o.Jb(_))},t.\u0275cmp=o.Db({type:t,selectors:[["app-crypto-modal"]],decls:9,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","end"],["mat-button","",3,"click"],["mat-button","","color","primary","cdkFocusInitial","",3,"click"]],template:function(t,e){1&t&&(o.Ob(0,"h1",0),o.rc(1),o.Nb(),o.Ob(2,"div",1),o.Kb(3,"p"),o.Nb(),o.Ob(4,"div",2),o.Ob(5,"button",3),o.Wb("click",(function(){return e.onClose()})),o.rc(6,"No"),o.Nb(),o.Ob(7,"button",4),o.Wb("click",(function(){return e.addCryptoToFavorites()})),o.rc(8," Yes "),o.Nb(),o.Nb()),2&t&&(o.zb(1),o.tc(" Would you like to add ",e.data.crypto.name," to favorites?\n"))},directives:[b.g,b.d,b.c,k.b],styles:[""]}),t})();var P=r("kmnG"),T=r("qFsG"),$=r("/1cH"),z=r("ofXK"),j=r("FKr1");function L(t,e){if(1&t&&(o.Mb(0),o.Ob(1,"small",7),o.rc(2),o.Zb(3,"currency"),o.Nb(),o.Lb()),2&t){const t=o.Yb().$implicit;o.zb(2),o.tc(" Price: ",o.ac(3,1,t.price_usd),"")}}function J(t,e){if(1&t){const t=o.Pb();o.Ob(0,"mat-option",6),o.Wb("onSelectionChange",(function(r){o.hc(t);const n=e.$implicit;return o.Yb().onSelectionChange(r,n)})),o.Ob(1,"span",7),o.rc(2),o.Nb(),o.pc(3,L,4,3,"ng-container",8),o.Nb()}if(2&t){const t=e.$implicit;o.Yb();const r=o.gc(9);o.dc("value",t.name),o.zb(2),o.sc(t.name),o.zb(1),o.dc("ngIf",null==t?null:t.price_usd)("ngIfElse",r)}}function D(t,e){1&t&&(o.Ob(0,"small",7),o.rc(1,"Price not available"),o.Nb())}let A=(()=>{class t{constructor(t,e){this.cryptoService=t,this.dialog=e,this.$keyUp=new s.a}ngOnInit(){this.filteredCrypto$=Object(a.a)([this.cryptoService.getCryptoCurrencies$,this.$keyUp.pipe(Object(i.a)(t=>t.target.value),Object(l.a)(1e3),Object(u.a)())]).pipe(Object(i.a)(([t,e])=>t.filter(t=>!!t.name&&t.name.toLowerCase().indexOf(e.toLowerCase())>-1)))}onSelectionChange(t,e){t.source.selected&&this.dialog.open(M,{width:"400px",data:{crypto:e}})}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(_),o.Jb(b.b))},t.\u0275cmp=o.Db({type:t,selectors:[["app-search"]],decls:10,vars:4,consts:[["appearance","outline",1,"search"],["matInput","","aria-label","Cryptocurrencies",3,"matAutocomplete","keyup"],["fxLayout","","fxLayoutAlign","space-around center"],["auto","matAutocomplete"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],["priceNotAvailable",""],[3,"value","onSelectionChange"],["fxFlex","50%"],[4,"ngIf","ngIfElse"]],template:function(t,e){if(1&t&&(o.Ob(0,"mat-form-field",0),o.Ob(1,"mat-label"),o.rc(2,"Search"),o.Nb(),o.Ob(3,"input",1),o.Wb("keyup",(function(t){return e.$keyUp.next(t)})),o.Nb(),o.Ob(4,"mat-autocomplete",2,3),o.pc(6,J,4,4,"mat-option",4),o.Zb(7,"async"),o.Nb(),o.Nb(),o.pc(8,D,2,0,"ng-template",null,5,o.qc)),2&t){const t=o.gc(5);o.zb(3),o.dc("matAutocomplete",t),o.zb(3),o.dc("ngForOf",o.ac(7,2,e.filteredCrypto$))}},directives:[P.b,P.e,T.a,$.c,$.a,c.c,c.b,z.l,j.h,c.a,z.m],pipes:[z.b,z.d],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;width:100%}.search[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:1rem}"]}),t})();var E=r("Wp6s"),G=r("NFeN");function K(t,e){if(1&t&&(o.Mb(0),o.Ob(1,"small"),o.rc(2),o.Zb(3,"currency"),o.Nb(),o.Lb()),2&t){const t=o.Yb().$implicit;o.zb(2),o.tc(" Price: ",o.ac(3,1,t.price_usd),"")}}function Y(t,e){if(1&t&&(o.Mb(0),o.Ob(1,"small"),o.rc(2),o.Zb(3,"date"),o.Nb(),o.Lb()),2&t){const t=o.Yb().$implicit;o.zb(2),o.tc(" Initial Release Date: ",o.ac(3,1,t.data_start),"")}}function R(t,e){if(1&t){const t=o.Pb();o.Ob(0,"mat-card"),o.Ob(1,"mat-card-title"),o.rc(2),o.Nb(),o.Ob(3,"mat-card-content"),o.pc(4,K,4,3,"ng-container",3),o.Kb(5,"br"),o.pc(6,Y,4,3,"ng-container",4),o.Nb(),o.Ob(7,"mat-card-actions",5),o.Ob(8,"button",6),o.Wb("click",(function(){o.hc(t);const r=e.$implicit;return o.Yb().removeFavorite(r)})),o.Ob(9,"mat-icon"),o.rc(10,"delete"),o.Nb(),o.Nb(),o.Nb(),o.Nb()}if(2&t){const t=e.$implicit;o.Yb();const r=o.gc(4);o.zb(2),o.sc(t.name),o.zb(2),o.dc("ngIf",null==t?null:t.price_usd)("ngIfElse",r),o.zb(2),o.dc("ngIf",null==t?null:t.data_start)}}function W(t,e){1&t&&(o.Ob(0,"small"),o.rc(1,"Price not available"),o.Nb())}let U=(()=>{class t{constructor(t){this.cryptoService=t,this.favoriteCrypto$=this.cryptoService.getFavoriteCryptoCurrencies$}removeFavorite(t){this.cryptoService.removeFavorite(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(_))},t.\u0275cmp=o.Db({type:t,selectors:[["app-favorite"]],decls:5,vars:3,consts:[["fxLayout.xs","column","fxLayout","row wrap","fxLayoutGap","2rem",1,"favorite"],[4,"ngFor","ngForOf"],["priceNotAvailable",""],[4,"ngIf","ngIfElse"],[4,"ngIf"],["align","end"],["mat-button","",3,"click"]],template:function(t,e){1&t&&(o.Ob(0,"div",0),o.pc(1,R,11,4,"mat-card",1),o.Zb(2,"async"),o.Nb(),o.pc(3,W,2,0,"ng-template",null,2,o.qc)),2&t&&(o.zb(1),o.dc("ngForOf",o.ac(2,1,e.favoriteCrypto$)))},directives:[c.c,c.d,z.l,E.a,E.e,E.c,z.m,E.b,k.b,G.a],pipes:[z.b,z.d,z.f],styles:[".favorite[_ngcontent-%COMP%]{margin:2rem 0 5rem;justify-content:center}.favorite[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{min-width:300px;margin-bottom:2rem;box-shadow:0 1px 3px rgba(0,29,56,.12),0 1px 2px rgba(0,29,56,.24);transition:all .3s cubic-bezier(.25,.8,.25,1)}"]}),t})();const q=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Db({type:t,selectors:[["app-home"]],decls:8,vars:0,consts:[["fxLayout","column","fxLayoutAlign","center center"],[1,"home"]],template:function(t,e){1&t&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"h1"),o.rc(3,"Track your favorites cryptocurrencies in one place"),o.Nb(),o.Ob(4,"small"),o.rc(5,"EasyStreet Crypto is a platform which provides fast, reliable and unified data to cryptocurrency markets."),o.Nb(),o.Nb(),o.Kb(6,"app-search"),o.Kb(7,"app-favorite"),o.Nb())},directives:[c.c,c.b,A,U],styles:["[_nghost-%COMP%]{margin-bottom:5rem}.home[_ngcontent-%COMP%]{margin:2rem}.home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#001d38;font-size:2rem;text-transform:capitalize;font-weight:500}.home[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#001d38;font-size:1rem;font-weight:400;margin-bottom:4rem}@media only screen and (min-width:768px){.home[_ngcontent-%COMP%]{margin:1rem 2rem 10rem}}"]}),t})()}];let H=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[n.b.forChild(q)],n.b]}),t})();var X=r("PCNd");let Z=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[X.a,H]]}),t})()}}]);