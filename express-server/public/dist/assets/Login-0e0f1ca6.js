import{d as x,r,_ as b,u as B,o as I,c as L,a as o,w as m,v as f,b as c,i as v,p as S,e as k}from"./index-0ff39db8.js";import{s as h,u as y}from"./home-6ecc9094.js";const P="/assets/parazeni_logo-666115e5.jpg",C=x("login",()=>({admin_uid:r(""),login:(l,d)=>{h.emit("login",{account:l,password:d})}}));const u=t=>(S("data-v-4c1aefe0"),t=t(),k(),t),V={class:"container"},z=u(()=>o("img",{class:"pz_logo img_setting",src:P,alt:"ParaZeni"},null,-1)),A={class:"inputAndBtn"},R={class:"inputContainer"},U={class:"inputBox"},j=u(()=>o("label",{for:"account"},"Account:",-1)),D=u(()=>o("label",{for:"password"},"Password:",-1)),E={class:"btnContainer"},F={__name:"Login",setup(t){const p=B(),l=C(),{login:d,admin_uid:H}=l,w=y(),{info:g}=w;let i=r(""),a=r("");return h.on("login-response",_=>{console.log("login-response",_);const{code:n,msg:e,data:s}=_;//! Fail
if(n!=="lg-0001")return console.log("Login Fail",e);//! Success
l.admin_uid=s==null?void 0:s.uid,g.title=s==null?void 0:s.title,g.content=s==null?void 0:s.content,p.push("/home")}),(_,n)=>(I(),L("div",V,[z,o("div",A,[o("div",R,[o("div",U,[j,m(o("input",{type:"text",id:"account","onUpdate:modelValue":n[0]||(n[0]=e=>v(i)?i.value=e:i=e)},null,512),[[f,c(i)]]),D,m(o("input",{type:"password",id:"password","onUpdate:modelValue":n[1]||(n[1]=e=>v(a)?a.value=e:a=e)},null,512),[[f,c(a)]])])]),o("div",E,[o("button",{onClick:n[2]||(n[2]=e=>c(d)(c(i),c(a)))},"Sign In")])])]))}},T=b(F,[["__scopeId","data-v-4c1aefe0"]]);export{T as default};
