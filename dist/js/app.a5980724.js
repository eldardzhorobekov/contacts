(function(e){function t(t){for(var n,r,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)r=o[d],a[r]&&p.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"05db":function(e,t,s){},"1f72":function(e,t,s){},"2ea6":function(e,t,s){"use strict";var n=s("8530"),a=s.n(n);a.a},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("the-header"),s("users-list",{attrs:{users:e.users}})],1)},i=[],r=s("f499"),o=s.n(r),l=s("bc3a"),c=s.n(l),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.users?s("div",[s("ul",{staticClass:"users-list"},[s("div",{staticClass:"search-input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.searchString},on:{input:function(t){t.target.composing||(e.searchString=t.target.value)}}})]),e._l(e.getUsers,function(t,n){return s("li",{staticClass:"user-wrapper",on:{click:function(s){return e.showUserInfo(t)}}},[s("div",{staticClass:"info"},[s("div",{staticClass:"user user-avatar"},[s("img",{attrs:{src:t.avatar,alt:"user-avatar"},on:{error:function(s){return e.loadUserImageError(t)}}}),s("div")]),s("div",{staticClass:"user user-name"},[e._v("\n              "+e._s(t.name)+"\n          ")]),s("div",{staticClass:"user user-email"},[s("a",{staticClass:"href",attrs:{href:"mailto:"+t.email,target:"_blank"}},[e._v(e._s(t.email))])]),s("div",{staticClass:"user user-phone"},[e._v("\n              "+e._s(t.phone)+"\n          ")]),s("div",{staticClass:"user user-address"},[e._v("\n              "+e._s(t.address.city)+" , "+e._s(t.address.country)+"\n          ")])]),s("div",{staticClass:"tools"},[s("button",{staticClass:"btn edit",on:{click:function(s){return s.stopPropagation(),e.showEditModal(t)}}},[e._v("Edit")]),s("button",{staticClass:"btn delete",on:{click:function(s){return s.stopPropagation(),e.showDeleteModal(t.id)}}},[e._v("Delete")])])])})],2),e.isUserEditVisible?s("edit",e._b({on:{closeModal:e.closeUserEdit,cancel:e.closeUserEdit,onSave:function(t){return e.userEditSave(t)}}},"edit",e.userEdit,!1)):e._e(),e.isDeleteModalVisible?s("delete",{on:{closeModal:e.closeDeleteModal,cancel:e.closeDeleteModal,onDelete:e.userDelete}}):e._e(),e.isUserInfoVisible?s("user-info",{attrs:{user:e.userInfo},on:{closeModal:e.closeUserInfo}}):e._e()],1):e._e()},d=[],p=(s("55dd"),s("7f7f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("modal",{attrs:{visible:!0}},[s("div",{staticClass:"popup-content"},[s("div",{staticClass:"header"},[s("div",{staticClass:"info"},[s("img",{staticClass:"user-avatar",attrs:{src:e.user.avatar,alt:"user-avatar"}}),s("div",{staticClass:"user-name"},[e._v("\n\t\t\t\t\t\t"+e._s(e.user.name)+"\n\t\t\t\t\t")])]),s("div",{staticClass:"tools"},[s("button",{staticClass:"btn edit",on:{click:e.showEdit}},[e._v("Edit")]),s("button",{staticClass:"btn close",on:{click:e.showDelete}},[e._v("Delete")])])]),s("div",{staticClass:"info-text"},[e._v("Information")]),s("div",{staticClass:"other-info"},e._l(e.filteredUser,function(t,n){return s("li",{staticClass:"info-item"},[s("font-awesome-icon",{staticClass:"info-icon",attrs:{icon:t[1]}}),e._v("\n\t\t\t\t\t"+e._s(t[0])+"\n\t\t\t\t")],1)}),0)])])],1)}),f=[],v=s("a4bb"),h=s.n(v),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.visible?s("div",{staticClass:"container"},[s("div",{staticClass:"cover",on:{click:e.closeModal}}),s("div",{staticClass:"popup"},[e._t("default")],2)]):e._e()},b=[],g={data:function(){return{}},props:["visible"],methods:{closeModal:function(){console.log("Close Modal clicked"),this.$parent.$emit("closeModal")}}},C=g,_=(s("bcb8"),s("2877")),w=Object(_["a"])(C,m,b,!1,null,"11d3c862",null),y=w.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("modal",{attrs:{visible:!0}},[s("div",{staticClass:"popup-content"},[s("form",{staticClass:"form-wrapper",on:{submit:function(t){return t.preventDefault(),e.save(t)}}},[s("div",{staticClass:"input-wrapper"},[s("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:"user-avatar"}})]),s("div",{staticClass:"input-wrapper"},[e._v("Name: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),s("div",{staticClass:"input-wrapper"},[e._v("Email: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),s("div",{staticClass:"input-wrapper"},[e._v("Phone: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],domProps:{value:e.user.phone},on:{input:function(t){t.target.composing||e.$set(e.user,"phone",t.target.value)}}})]),s("div",{staticClass:"input-wrapper"},[e._v("City: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.city,expression:"user.city"}],domProps:{value:e.user.city},on:{input:function(t){t.target.composing||e.$set(e.user,"city",t.target.value)}}})]),s("div",{staticClass:"input-wrapper"},[e._v("country: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.country,expression:"user.country"}],domProps:{value:e.user.country},on:{input:function(t){t.target.composing||e.$set(e.user,"country",t.target.value)}}})]),s("div",{staticClass:"input-wrapper"},[e._v("Website: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.website,expression:"user.website"}],domProps:{value:e.user.website},on:{input:function(t){t.target.composing||e.$set(e.user,"website",t.target.value)}}})]),s("div",{staticClass:"tools"},[s("button",{staticClass:"btn cancel",on:{click:e.onCancel}},[e._v("Cancel")]),s("button",{staticClass:"btn save",attrs:{type:"submit"}},[e._v("Save")])])])])])],1)},E=[],M={components:{Modal:y},props:["name","email","phone","address","website","visible","id","avatar"],data:function(){return{user:{name:this.name,email:this.email,phone:this.phone,city:this.address.city,country:this.address.country,website:this.website,id:this.id,avatar:this.avatar},selectedFile:null}},methods:{save:function(){this.$emit("onSave",this.user)},onCancel:function(){this.$emit("cancel")},onFileSelected:function(e){this.selectedFile=e.target.files[0]},onUpload:function(){}}},D=M,U=(s("cb22"),Object(_["a"])(D,I,E,!1,null,"6b8ce5d4",null)),x=U.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("modal",{attrs:{visible:!0}},[s("div",{staticClass:"popup-content"},[e._v("\n      Are you sure you want to delete contact ?\n      "),s("div",{staticClass:"tools"},[s("button",{staticClass:"btn cancel",on:{click:e.onCancel}},[e._v("Cancel")]),s("button",{staticClass:"btn delete",on:{click:e.onDelete}},[e._v("Delete")])])])])],1)},$=[],O={components:{Modal:y},props:["visible"],methods:{onDelete:function(){this.$emit("onDelete")},onCancel:function(){this.$emit("cancel")}}},P=O,V=(s("65f5"),Object(_["a"])(P,S,$,!1,null,"3e1924c8",null)),j=V.exports,k={components:{Modal:y,Edit:x,Delete:j},props:["user"],data:function(){return{}},methods:{showEdit:function(){this.$parent.showEditModal(this.user)},showDelete:function(){this.$parent.showDeleteModal(this.user.id)}},computed:{filteredUser:function(){var e=this,t={username:["fas","user-alt"],email:["fas","envelope"],phone:["fas","phone"],address:["fas","address-card"],website:["fas","globe"]},s=h()(this.user).filter(function(e){return t.hasOwnProperty(e)}).reduce(function(s,n){return s[n]=[e.user[n],t[n]],s},{});return s["address"][0]["city"]&&s["address"][0]["country"]&&(s["address"][0]=s["address"][0]["city"]+", "+s["address"][0]["country"]),s}}},N=k,A=(s("eaf2"),Object(_["a"])(N,p,f,!1,null,"5daec990",null)),T=A.exports,B=s("c121"),F=s.n(B),J={components:{UserInfo:T,Edit:x,Delete:j},props:["users"],data:function(){return{isUserInfoVisible:!1,isUserEditVisible:!1,isDeleteModalVisible:!1,userInfo:null,userEdit:null,userDeleteId:-1,searchString:""}},computed:{getDefaultUserImage:function(){return F.a},getUsers:function(){var e=this,t=this.users.data.filter(function(t){return t.name.toLowerCase().indexOf(e.searchString.toLowerCase())>-1}),s=t.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0});return s}},methods:{showUserInfo:function(e){this.closeAllModals(),this.userInfo=e,this.isUserInfoVisible=!0},showEditModal:function(e){this.closeAllModals(),this.userEdit=e,this.isUserEditVisible=!0},showDeleteModal:function(e){this.closeAllModals(),this.isDeleteModalVisible=!0,this.userDeleteId=e},closeUserInfo:function(){this.isUserInfoVisible=!1},closeUserEdit:function(){this.isUserEditVisible=!1},closeDeleteModal:function(){this.isDeleteModalVisible=!1},closeAllModals:function(){this.isUserInfoVisible=!1,this.isUserEditVisible=!1,this.isDeleteModalVisible=!1},userEditSave:function(e){var t=this.getIndexById(e.id);null!=t?(this.users.data[t].name=e.name,this.users.data[t].email=e.email,this.users.data[t].phone=e.phone,this.users.data[t].website=e.website,this.users.data[t].address.city=e.city,this.users.data[t].address.country=e.country,this.closeUserEdit(),console.log("Saved")):console.log("Index not found")},userDelete:function(){var e=this.getIndexById(this.userDeleteId);null!=e?(localStorage.setItem("cachedUser",o()(this.users.data[e])),this.users.data.splice(e,1),this.closeDeleteModal(),console.log("Contact was deleted!")):console.log("Index not found! Contact was not deleted!")},loadUserImageError:function(e){console.log("Image failed to load"),e["nonValidAvatar"]=e["avatar"],e["avatar"]=F.a},getIndexById:function(e){for(var t=0;t<this.users.data.length;t++)if(this.users.data[t].id==e)return t}}},L=J,H=(s("abed"),Object(_["a"])(L,u,d,!1,null,"55275463",null)),W=H.exports,q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{class:{header:!0}},[s("div",{staticClass:"logo"},[e._v("contacts")])])},z=[],G={props:["searchString"],data:function(){return{showSearchInput:!1}}},K=G,Q=(s("2ea6"),Object(_["a"])(K,q,z,!1,null,"79da409d",null)),R=Q.exports,X={components:{UsersList:W,TheHeader:R},data:function(){return{users:null}},mounted:function(){var e=this;console.log("App mounted!"),null!=localStorage.getItem("users")?this.users=JSON.parse(localStorage.getItem("users")):c.a.get("http://demo.sibers.com/users").then(function(t){return e.users=t})},watch:{users:{handler:function(){console.log("Users changed!"),localStorage.setItem("users",o()(this.users))},deep:!0}}},Y=X,Z=(s("5c0b"),Object(_["a"])(Y,a,i,!1,null,null,null)),ee=Z.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(ee)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("5e27"),a=s.n(n);a.a},"5e27":function(e,t,s){},"65f5":function(e,t,s){"use strict";var n=s("9320"),a=s.n(n);a.a},8530:function(e,t,s){},9320:function(e,t,s){},a185:function(e,t,s){},abed:function(e,t,s){"use strict";var n=s("a185"),a=s.n(n);a.a},bcb8:function(e,t,s){"use strict";var n=s("e6a7"),a=s.n(n);a.a},c121:function(e,t,s){e.exports=s.p+"img/user.2cf78890.png"},cb22:function(e,t,s){"use strict";var n=s("1f72"),a=s.n(n);a.a},e6a7:function(e,t,s){},eaf2:function(e,t,s){"use strict";var n=s("05db"),a=s.n(n);a.a}});
//# sourceMappingURL=app.a5980724.js.map