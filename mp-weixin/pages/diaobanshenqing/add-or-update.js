(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/diaobanshenqing/add-or-update"],{"10f9":function(n,i,e){"use strict";e.r(i);var t=e("64ad"),a=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);i["default"]=a.a},"602a":function(n,i,e){"use strict";e.r(i);var t=e("923a"),a=e("10f9");for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);e("8bf4");var s,u=e("f0c5"),o=Object(u["a"])(a["default"],t["b"],t["c"],!1,null,"c1dc4716",null,!1,t["a"],s);i["default"]=o.exports},"64ad":function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,t,a,r,s){try{var u=n[r](s),o=u.value}catch(h){return void e(h)}u.done?i(o):Promise.resolve(o).then(t,a)}function s(n){return function(){var i=this,e=arguments;return new Promise((function(t,a){var s=n.apply(i,e);function u(n){r(s,t,a,u,o,"next",n)}function o(n){r(s,t,a,u,o,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("ab9a"))}.bind(null,e)).catch(e.oe)},o={data:function(){return{ruleForm:{yishenggonghao:"",yishengxingming:"",keshi:"",zhicheng:"",touxiang:"",zhibanshijian:"",lianxidianhua:"",diaobanyuanyin:"",diaobanshijian:"",shenqingshijian:"",sfsh:"",shhf:"",userid:""},diaobanshijianOptions:[],diaobanshijianIndex:0,user:{},ro:{yishenggonghao:!1,yishengxingming:!1,keshi:!1,zhicheng:!1,touxiang:!1,zhibanshijian:!1,lianxidianhua:!1,diaobanyuanyin:!1,diaobanshijian:!1,shenqingshijian:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:u},computed:{},onLoad:function(){var i=s(t.default.mark((function i(e){var a,r,s,u;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.ruleForm.shenqingshijian=this.$utils.getCurDateTime(),a=n.getStorageSync("nowTable"),i.next=4,this.$api.session(a);case 4:return r=i.sent,this.user=r.data,this.ruleForm.yishenggonghao=this.user.yishenggonghao,this.ruleForm.yishengxingming=this.user.yishengxingming,this.ruleForm.keshi=this.user.keshi,this.ruleForm.zhicheng=this.user.zhicheng,this.ruleForm.touxiang=this.user.touxiang,i.next=13,this.$api.option("paibanxinxi","zhibanshijian",{});case 13:if(r=i.sent,this.diaobanshijianOptions=r.data,this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=23;break}return this.ruleForm.id=e.id,i.next=21,this.$api.info("diaobanshenqing",this.ruleForm.id);case 21:r=i.sent,this.ruleForm=r.data;case 23:if(!e.cross){i.next=74;break}s=n.getStorageSync("crossObj"),i.t0=t.default.keys(s);case 26:if((i.t1=i.t0()).done){i.next=74;break}if(u=i.t1.value,"yishenggonghao"!=u){i.next=32;break}return this.ruleForm.yishenggonghao=s[u],this.ro.yishenggonghao=!0,i.abrupt("continue",26);case 32:if("yishengxingming"!=u){i.next=36;break}return this.ruleForm.yishengxingming=s[u],this.ro.yishengxingming=!0,i.abrupt("continue",26);case 36:if("keshi"!=u){i.next=40;break}return this.ruleForm.keshi=s[u],this.ro.keshi=!0,i.abrupt("continue",26);case 40:if("zhicheng"!=u){i.next=44;break}return this.ruleForm.zhicheng=s[u],this.ro.zhicheng=!0,i.abrupt("continue",26);case 44:if("touxiang"!=u){i.next=48;break}return this.ruleForm.touxiang=s[u],this.ro.touxiang=!0,i.abrupt("continue",26);case 48:if("zhibanshijian"!=u){i.next=52;break}return this.ruleForm.zhibanshijian=s[u],this.ro.zhibanshijian=!0,i.abrupt("continue",26);case 52:if("lianxidianhua"!=u){i.next=56;break}return this.ruleForm.lianxidianhua=s[u],this.ro.lianxidianhua=!0,i.abrupt("continue",26);case 56:if("diaobanyuanyin"!=u){i.next=60;break}return this.ruleForm.diaobanyuanyin=s[u],this.ro.diaobanyuanyin=!0,i.abrupt("continue",26);case 60:if("diaobanshijian"!=u){i.next=64;break}return this.ruleForm.diaobanshijian=s[u],this.ro.diaobanshijian=!0,i.abrupt("continue",26);case 64:if("shenqingshijian"!=u){i.next=68;break}return this.ruleForm.shenqingshijian=s[u],this.ro.shenqingshijian=!0,i.abrupt("continue",26);case 68:if("userid"!=u){i.next=72;break}return this.ruleForm.userid=s[u],this.ro.userid=!0,i.abrupt("continue",26);case 72:i.next=26;break;case 74:this.styleChange();case 75:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shenqingshijianConfirm:function(n){console.log(n),this.ruleForm.shenqingshijian=n.result,this.$forceUpdate()},diaobanshijianChange:function(n){this.diaobanshijianIndex=n.target.value,this.ruleForm.diaobanshijian=this.diaobanshijianOptions[this.diaobanshijianIndex]},touxiangTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.touxiang=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=s(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){n.next=3;break}return this.$utils.msg("联系电话应输入手机格式"),n.abrupt("return");case 3:if(!this.ruleForm.id){n.next=8;break}return n.next=6,this.$api.update("diaobanshenqing",this.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,this.$api.add("diaobanshenqing",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=o}).call(this,e("543d")["default"])},"8bf4":function(n,i,e){"use strict";var t=e("d244"),a=e.n(t);a.a},"923a":function(n,i,e){"use strict";var t={"w-picker":function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"ab9a"))}},a=function(){var n=this,i=n.$createElement;n._self._c},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return t}))},d244:function(n,i,e){},eb1a:function(n,i,e){"use strict";(function(n){e("d3ab"),e("921b");t(e("66fd"));var i=t(e("602a"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])}},[["eb1a","common/runtime","common/vendor"]]]);