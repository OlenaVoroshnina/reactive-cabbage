"use strict";(self.webpackChunkreactive_cabbage=self.webpackChunkreactive_cabbage||[]).push([[843],{4897:function(n,e,t){t.d(e,{Z:function(){return C}});var i,r,o,a,d,c,s=t(9439),p=t(2791),l=t(9434),x=t(7689),f=t(5570),h=t(6351),u=t(1093),g=t(4164),m=t(168),b=t(8789),w=b.ZP.div(i||(i=(0,m.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]))),v=b.ZP.div(r||(r=(0,m.Z)(["\n  position: fixed;\n  top: 250px;\n  left: 50%;\n  transform: translateX(-50%);\n  max-width: 280px;\n  max-height: 163px;\n  width: 100%;\n  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n  border-radius: 30px;\n  @media screen and (min-width: 768px) {\n    max-width: 288px;\n    top: 160px;\n  }\n  @media screen and (min-width: 1280px) {\n    max-width: 288px;\n    top: 160px;\n    left: 52%;\n  }\n  &:before {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: -9%;\n    left: 20%;\n    border-left: 16px solid transparent;\n    border-right: 16px solid transparent;\n    border-bottom: 16px solid #1d346a;\n  }\n"]))),j=b.ZP.h2(o||(o=(0,m.Z)(["\n  padding-top: 40px;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.43;\n  margin-bottom: 20px;\n  color: #ffffff;\n  @media screen and (min-width: 768px) {\n    padding-left: 29px;\n    padding-right: 29px;\n  }\n"]))),Z=b.ZP.p(a||(a=(0,m.Z)(["\n  padding-bottom: 49px;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.33;\n  color: #ffffff;\n  @media screen and (min-width: 768px) {\n    padding-left: 29px;\n    padding-right: 29px;\n  }\n"]))),y=t(3329),k=document.querySelector("#modal-root"),P=document.querySelector("body"),z=function(){var n=(0,p.useState)(!0),e=(0,s.Z)(n,2),t=e[0],i=e[1];return(0,p.useEffect)((function(){return P.classList.add("no-scroll"),function(){return P.classList.remove("no-scroll")}}),[]),(0,g.createPortal)(t&&(0,y.jsx)(w,{onClick:function(n){n.currentTarget===n.target&&(i(!1),P.classList.remove("no-scroll"))},children:(0,y.jsxs)(v,{children:[(0,y.jsx)(j,{children:"Hello! To get started, enter the current balance of your account!"}),(0,y.jsx)(Z,{children:"You can't spend money until you have it :)"})]})}),k)},F=b.ZP.form(d||(d=(0,m.Z)(["\n  margin: 0 auto 50px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    gap: 20px;\n    margin: 0 auto;\n  }\n  @media screen and (min-width: 768px) {\n   //  margin: 0 auto;\n  }\n  .title {\n    color: rgba(82, 85, 95, 0.7);\n    margin-bottom: 8px;\n    font-size: 12px;\n    line-height: calc(14 / 12);\n    font-weight: 500;\n    text-align: center;\n  }\n  .inputTag {\n    font-weight: 700;\n    width: 125px;\n    height: 44px;\n    padding: 22px 0px;\n    color: #52555f;\n    text-align: center;\n    border: 2px solid white;\n    border-radius: 16px;\n    outline: none;\n    background-color: #f2f5fc;\n    ::-webkit-outer-spin-button,\n    ::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    :focus {\n      background-color: #fff;\n    }\n    &::placeholder {\n      color: #000;\n      letter-spacing: 0.02em;\n      font-weight: 700;\n      font-size: 12px;\n      line-height: 1.17;\n    }\n    @media screen and (min-width: 768px) {\n      width: 125px;\n      padding: 12px 0px;\n      border-radius: 16px;\n    }\n  }\n  .btn {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px;\n    background-color: #f2f5fc;\n    width: 125px;\n    height: 44px;\n    padding: 12px 18px;\n    color: rgba(82, 85, 95, 0.7);\n    text-align: left;\n    text-transform: uppercase;\n    border: 2px solid white;\n    border-left: none;\n    border-radius: 16px;\n    outline: none;\n    transition-property: color, background-color;\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n      color: white;\n      background-color: #ff751d;\n      border-color: #ff751d;\n    }\n    @media screen and (min-width: 768px) {\n      width: 125px;\n      padding: 12px 6px;\n      border-radius: 16px;\n      text-align: center;\n      border-left: 2px solid white;\n    }\n  }\n"]))),S=b.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),C=function(){var n,e=(0,l.v9)(h.QM),t=(0,x.TH)(),i=(0,l.I0)(),r=(0,p.useState)(!1),o=(0,s.Z)(r,2),a=o[0],d=o[1],c=(0,p.useRef)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(F,{onSubmit:function(e){e.preventDefault(),n=e.target.balance.value},ref:c,children:[(0,y.jsx)("h2",{className:"title",children:"Balance:"}),(0,y.jsxs)(S,{children:[(0,y.jsx)("input",{onChange:function(e){n=e.target.value},className:"inputTag",type:"number",name:"balance",title:"Please, enter your balance",pattern:"[0-9, .UAH]*",placeholder:"".concat(Number(e).toFixed(2)," UAH"),required:!0}),(0,y.jsx)("button",{type:"submit",className:"btn",onClick:function(){d(!0)},children:"Confirm"})]})]}),"/expenses"===t.pathname&&(0,y.jsx)(z,{}),a&&(0,y.jsx)(u.Z,{changeBalance:"true",closeModal:function(){d(!1)},dispatch:function(){i((0,f.Fg)(n)),c.current.reset()},text:"SURE",balance:e,onDelete:function(){},children:"Are you sure?"})]})}},6214:function(n,e,t){t.d(e,{Aq:function(){return m},UE:function(){return k},dt:function(){return b},fq:function(){return v},g:function(){return w},j$:function(){return y},p:function(){return Z},w2:function(){return j}});var i,r,o,a,d,c,s,p,l,x,f=t(168),h=t(8789),u=t(1809),g=t(1087),m=(t(8200),h.ZP.div(i||(i=(0,f.Z)(["\n  top: 0;\n  left: 0;\n  height: 296px;\n  background-color: #f5f6fb;\n  border-bottom-left-radius: 10%;\n  width: 100%;\n  @media (min-width: 321px) {\n    height: 526px;\n  } ;\n"])))),b=(0,h.ZP)(u.mQ)(r||(r=(0,f.Z)(["\n  margin: 0 auto;\n  background-color: transparent;\n  @media (min-width: 768px) {\n    max-width: 704px;\n    border-radius: 30px;\n    & .react-tabs__tab-panel--selected {\n      position: relative;\n      top: -24px;\n      border-radius: 0 30px 30px 30px;\n      box-shadow: 0px 50px 60px rgba(170, 178, 197, 0.2);\n      background-color: #ffffff;\n    }\n  }\n  @media (min-width: 1280px) {\n    max-width: 1098px;\n  }\n  & .react-tabs__tab-list {\n    border: none;\n    margin: 0;\n  }\n"]))),w=(0,h.ZP)(u.OK)(o||(o=(0,f.Z)(["\n  // background-color: #f7741d;\n  // width: 50%;\n  // height: 53px;\n  // padding: 19px 12px;\n  // text-align: center;\n  // transition: background-color 250ms ease;\n\n  // @media (min-width: 768px) {\n  //   background-color: #fefefe;\n  //   padding: 13px 12px;\n  //   width: 138px;\n  //   height: 40px;\n  //   border-radius: 30px 30px 0 0;\n  // }\n\n  background-color: #fefefe;\n  text-decoration: none;\n  // background: rgba(250, 251, 253, 1);\n  text-align: center;\n  text-decoration: none;\n  border: none;\n  width: 138px;\n  height: 40px;\n  height: 53px;\n  padding: 12px 19px;\n  border-radius: 30px 30px 0 0;\n  transition-property: color, background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  .active {\n    color: #ff751d;\n  }\n"]))),v=(0,h.ZP)(u.td)(a||(a=(0,f.Z)(["\n  display: flex;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0;\n  \n  @media (min-width: 768px) {\n    position: relative;\n    width: 276px;\n  }\n"]))),j=(0,h.ZP)(g.OL)(d||(d=(0,f.Z)(["\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.17;\n  text-align: center;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  transition: color 250ms ease;\n  @media (min-width: 768px) {\n    margin: 0px 25px;\n    color: black;\n  }\n"]))),Z=(0,h.ZP)(g.rU)(c||(c=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 45px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  line-height: 1.9;\n  font-weight: 400;\n  color: rgba(82, 85, 95, 0.7);\n  :hover,\n  :focus {\n    color: #ff751d;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n    \n  }\n  @media screen and (min-width: 1280px) {\n    /* position: absolute;\n    top: 11px;\n    right: 0; */\n  }\n  .reportsIcon {\n    margin-left: 15px;\n    width: 24px;\n    height: 24px;\n    fill: #ff751d;\n\n    :hover .reportsIcon,\n    :focus .reportsIcon {\n      fill: #ff751d;\n    }\n  }\n"]))),y=h.ZP.div(s||(s=(0,f.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  ","\n  padding: 40px 140px 8px;\n  margin-bottom: 32px;\n"])),""),k=(h.ZP.div(p||(p=(0,f.Z)(["\n  padding-top: 14px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  gap: 35px;\n  flex-direction: column-reverse;\n\n  .reportLink {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: flex-end;\n    text-decoration: none;\n    font-size: 12px;\n    color: rgba(82, 85, 95, 0.7);\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n      color: #ff751d;\n    }\n  }\n\n  @media (min-width: 768px) {\n    gap: 251px;\n    flex-direction: row;\n    align-items: center;\n    padding-top: 40px;\n    max-width: 704pxpx;\n    margin-bottom: 60px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 1098px;\n    gap: 298px;\n    justify-content: flex-end;\n  }\n"]))),h.ZP.div(l||(l=(0,f.Z)(["\n  position: relative;\n  top: 10px;\n"]))));h.ZP.div(x||(x=(0,f.Z)(["\n  padding: 15px;\n  display: flex;\n"])))},1697:function(n,e,t){t.r(e),t.d(e,{ReportPage:function(){return Nn},default:function(){return Tn}});var i,r,o,a,d=t(2791),c=t(9439),s=t(9434),p=t(6351),l=t(4190),x=t(168),f=t(8789),h=f.ZP.ul(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0%;\n  padding: 0;\n  &.incomeList {\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),u=f.ZP.li(r||(r=(0,x.Z)(["\n  flex-grow: 1;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n\n  align-items: center;\n  width: calc((100% - 20px) / 3);\n  margin: 0%;\n  padding: 20px 0;\n  gap: 5px;\n  border-bottom: 1px solid black;\n\n  &.active {\n    fill: #ff751d;\n  }\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    fill: #ff751d;\n  }\n\n  @media screen and (min-width: 768px) {\n    border: none;\n    width: calc((100% - 64px) / 6);\n  }\n  &.income {\n    max-width: 90px;\n    flex-grow: 0;\n  }\n"]))),g=f.ZP.li(o||(o=(0,x.Z)(["\n  flex-grow: 1;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: calc((100% - 20px) / 3);\n  margin: 0%;\n  padding: 20px 0;\n  gap: 5px;\n  border-bottom: 1px solid black;\n\n  &.active {\n    fill: #ff751d;\n  }\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    fill: #ff751d;\n  }\n\n  @media screen and (min-width: 768px) {\n    border: none;\n    width: calc((100% - 64px) / 6);\n  }\n\n  max-width: 90px;\n  flex-grow: 0;\n"]))),m=f.ZP.svg(a||(a=(0,x.Z)(["\n  position: relative;\n"]))),b=t(4904);var w=t.p+"static/media/bgcForSvg.9948a09e481b3d692e82a7a76990676d.svg";var v=t.p+"static/media/orangeBgc.f69281f95d47540c19ff50c7cc25e3ce.svg";var j,Z,y=t.p+"static/media/reports.4d7a7e3d3ec2ded8dedf6f767623529a.svg",k=t(3329),P=function(n){var e,t=n.onChange,i=(0,s.I0)(),r=(0,d.useState)({}),o=(0,c.Z)(r,2),a=o[0],x=o[1],f=(0,d.useState)(""),j=(0,c.Z)(f,2),Z=j[0],P=j[1],z=(0,s.v9)(p.jG),F=[],S=(0,d.useMemo)((function(){var n,e;return null!==(n=null===z||void 0===z||null===(e=z.expenses)||void 0===e?void 0:e.expensesData)&&void 0!==n?n:{}}),[z]),C=(0,d.useMemo)((function(){var n,e;return null!==(n=null===z||void 0===z||null===(e=z.incomes)||void 0===e?void 0:e.incomesData)&&void 0!==n?n:{}}),[z]);(0,d.useEffect)((function(){"expenses"===t?(x(null!==S&&void 0!==S?S:{}),P("")):(x(null!==C&&void 0!==C?C:{}),P(""))}),[t,S,C,P]);var M=function(n){P(n.currentTarget.id);var e=F.filter((function(e){return e[0].replace(/\s+/g,"")===n.currentTarget.id}));i((0,l.Vd)(e))},D=null!==(e=Object.entries(a))&&void 0!==e?e:[];return(0,k.jsx)("div",{children:(0,k.jsx)(h,{className:"incomes"===t?"incomeList":"",children:D.map((function(n){var e=n[0].replace(/\s+/g,"");return F.push(n),"expenses"===t?(0,k.jsxs)(u,{id:e,onClick:M,className:e===Z?"active":"",children:[(0,k.jsx)("p",{children:n[1].total.toFixed(2)}),(0,k.jsxs)(m,{width:"56",height:"56",children:[(0,k.jsx)("svg",{src:e===Z?v:w,width:"59",height:"46",viewBox:"0 0 54 47","background-position":"center",className:e===Z?"active":""}),(0,k.jsx)("use",{href:"".concat(y,"#").concat(e)})]}),(0,k.jsx)("p",{children:(0,b.z)(n[0]).toUpperCase()})]},e):"incomes"===t?(0,k.jsxs)(g,{id:e,onClick:M,className:e===Z?"active":"",children:[(0,k.jsx)("p",{children:n[1].total.toFixed(2)}),(0,k.jsxs)(m,{width:"56",height:"56",className:e===Z?"active":"",children:[(0,k.jsx)("svg",{src:e===Z?v:w,width:"59",height:"46",viewBox:"0 0 54 47","background-position":"center",className:e===Z?"active":""}),(0,k.jsx)("use",{href:"".concat(y,"#").concat(e)})]}),(0,k.jsx)("p",{children:(0,b.z)(n[0]).toUpperCase()})]},e):(0,k.jsx)(k.Fragment,{})}))})})},z=f.ZP.div(j||(j=(0,x.Z)(["\nmargin-top: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),F=f.ZP.button(Z||(Z=(0,x.Z)(["\n  background-color: transparent;\n  border: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  "])));var S,C,M,D,E,q,A,B,H,K,L,N,T,U,I,Q,R,_,V,W,J,O=t.p+"static/media/reportsswitch.4d7a7e3d3ec2ded8dedf6f767623529a.svg",Y=function(n){var e=n.onButtonClick,t=n.children,i=function(n){var t=n.currentTarget.name;e(t)};return(0,k.jsxs)(z,{children:[(0,k.jsx)(F,{name:"decrement",onClick:i,children:(0,k.jsx)("svg",{width:"6",height:"12",children:(0,k.jsx)("use",{href:"".concat(O,"#icon-prev")})})}),t,(0,k.jsx)(F,{name:"increment",onClick:i,children:(0,k.jsx)("svg",{width:"6",height:"12",children:(0,k.jsx)("use",{href:"".concat(O,"#icon-next")})})})]})},$=t(108),G=t(466),X=t(2891),nn=t(2839),en=t(3336),tn=t(7970),rn=t(7402).Z.div(S||(S=(0,x.Z)(["\n  font-size: 10px;\n  width: 100%;\n  height: 422px;\n  //   padding: 20px 40px;\n  margin: 0 auto;\n  margin-top: 32px;\n  margin-bottom: 80px;\n  border-radius: 30px;\n  background-color: #fff;\n  box-sizing: revert;\n"]))),on=function(n){var e=n.budget,t=(0,d.useRef)(),i=(0,s.v9)((function(n){return n.reportsQuery.filteredDate[0]})),r=(0,s.v9)((function(n){return n.reports})).reports,o=(0,d.useState)([]),a=(0,c.Z)(o,2),p=a[0],l=a[1],x=(0,d.useState)({}),f=(0,c.Z)(x,2),h=f[0],u=f[1],g=(0,d.useState)("horizontal"),m=(0,c.Z)(g,2),b=m[0],w=m[1],v=(0,d.useState)({}),j=(0,c.Z)(v,2),Z=j[0],y=j[1],P=(0,d.useState)({}),z=(0,c.Z)(P,2),F=z[0],S=z[1],C=function(){var n=t.current||{},e=n.clientHeight,i=n.clientWidth;u({clientHeight:e,clientWidth:i}),Math.max(document.documentElement.clientWidth,window.innerWidth||0)<=768?(y({type:"number",dataKey:"",hide:!0}),S({type:"category",dataKey:"name",hide:!1}),w("vertical")):(y({type:"category",dataKey:"name",hide:!1}),S({type:"number",dataKey:"",hide:!0}),w("horizontal"))};(0,d.useEffect)((function(){if(i){var n=[];for(var t in i[1])n.push({name:t,pv:i[1][t]});l(n)}else if(r[e]){var o=[];for(var a in r[e]["".concat(e,"Data")])o.push({name:a,pv:r[e]["".concat(e,"Data")][a].total});l(o)}}),[i,e,r]),(0,d.useEffect)((function(){return window.addEventListener("resize",C),C(),function(){window.removeEventListener("resize",C)}}),[]);return(0,k.jsx)(rn,{ref:t,children:(0,k.jsxs)($.v,{margin:{top:20,right:20,bottom:20,left:20},layout:b,width:h.clientWidth,height:h.clientHeight,data:p,children:[(0,k.jsx)(G.K,{hide:Z.hide,type:Z.type,dataKey:Z.dataKey,stroke:"#8884d8"}),(0,k.jsx)(X.B,{hide:F.hide,type:F.type,dataKey:F.dataKey,stroke:"#8884d8"}),(0,k.jsx)(nn.q,{stroke:"#ccc",vertical:!1,strokeDasharray:"0 0"}),(0,k.jsx)(en.$,{dataKey:"pv",fill:"#FF751D",barSize:40,children:(0,k.jsx)(tn.e,{content:function(n){n.payload;var e=n.x,t=n.y,i=n.width,r=(n.height,n.value);return(0,k.jsx)("text",{x:e+i/2,y:t,fill:"#666",textAnchor:"middle",dy:-6,children:"".concat(r," UAH")})},position:"top"})})]})})},an=f.ZP.ul(C||(C=(0,x.Z)(["\n  display: flex;\n  /* margin-bottom: 30px; */\n  border: 1px solid transparent;\n  border-radius: 20px;\n  ","\n  background-color: #fff;\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n"])),""),dn=f.ZP.li(M||(M=(0,x.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  gap: 5px;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 10px 25px 10px;\n  &:nth-child(2n)::before {\n    content: '';\n    position: absolute;\n    border-left: 1px solid;\n    left: 0px;\n    bottom: 5px;\n    z-index: 1;\n    height: 90%;\n    color: #e0e5eb;\n    @media screen and (min-width: 768px) {\n      height: 80%;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    padding: 16px 0;\n    flex-direction: row;\n    &:first-child {\n      padding-right: 20px;\n      justify-content: flex-end;\n    }\n    &:last-child {\n      padding-left: 20px;\n      justify-content: flex-start;\n    }\n  }\n"]))),cn=f.ZP.p(D||(D=(0,x.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  color: #52555f;\n"]))),sn=f.ZP.span(E||(E=(0,x.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  color: #e53935;\n"]))),pn=f.ZP.span(q||(q=(0,x.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  color: #407946;\n"]))),ln=f.ZP.div(A||(A=(0,x.Z)(["\n  padding-top: 30px;\n  @media screen and (min-width: 768px) {\n    padding: 20px 40px;\n    margin-top: 32px;\n    border-radius: 30px;\n    background-color: #fff;\n  }\n  @media screen and (min-width: 1280px) {\n    padding: 20px 205px;\n  }\n"]))),xn=f.ZP.div(B||(B=(0,x.Z)(["\n  margin: 0 auto;\n  align-items: center;\n  display: flex;\n  width: 130px;\n"]))),fn=f.ZP.p(H||(H=(0,x.Z)(["\n  width: 120px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: #000000;\n"]))),hn=function(){var n,e,t=(0,s.I0)(),i=(0,s.v9)(p.PS),r=(0,s.v9)(p.jq),o=(0,d.useState)("expenses"),a=(0,c.Z)(o,2),x=a[0],f=a[1];return(0,k.jsxs)("div",{children:[(0,k.jsxs)(an,{children:[(0,k.jsxs)(dn,{children:[(0,k.jsx)(cn,{children:"Expenses:"}),(0,k.jsxs)(sn,{children:["- ",null!==(n=r.toFixed(2))&&void 0!==n?n:0]})]}),(0,k.jsxs)(dn,{children:[(0,k.jsx)(cn,{children:"Income:"}),(0,k.jsxs)(pn,{children:["+ ",null!==(e=i.toFixed(2))&&void 0!==e?e:0]})]})]}),(0,k.jsxs)(ln,{children:[(0,k.jsx)(xn,{children:(0,k.jsx)(Y,{onButtonClick:function(){if("expenses"===x)return f("incomes"),void t((0,l.Vd)([]));f("expenses"),t((0,l.Vd)([]))},children:(0,k.jsx)(fn,{children:x})})}),(0,k.jsx)(P,{onChange:x})]}),(0,k.jsx)(on,{budget:x})]})},un=t(7689),gn=t(4805),mn="expenses",bn=t(1087),wn=(0,f.ZP)(bn.rU)(K||(K=(0,x.Z)(["\n  background-color: transparent;\n  border: transparent;\n  padding: 0%;\n  text-decoration: none;\n\n  display: flex;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    width: calc(100% / 3);\n    padding-top: 0;\n  }\n"]))),vn=(f.ZP.button(L||(L=(0,x.Z)(["\n  @media screen and (min-width: 320px) {\n    display: none;\n  }\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n  @media screen and (min-width: 1280px) {\n    display: block;\n    font-size: 12px;\n    line-height: 1.16;\n    letter-spacing: 0.02em;\n    text-transform: uppercase;\n\n    color: rgba(82, 85, 95, 0.7);\n    padding: 12px 30px;\n    border: 2px solid white;\n    border-radius: 16px;\n    :hover,\n    :focus {\n      color: white;\n      background-color: #ff751d;\n      border-color: #ff751d;\n  }\n  }\n"]))),f.ZP.span(N||(N=(0,x.Z)(["\n  color: rgba(82, 85, 95, 0.7);\n  font-size: 12px;\n  font-weight: 500;\n  /* @media screen and (min-width: 768px) { */\n  @media screen and (min-width: 320px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-left: 15px;\n    display: block;\n  }\n"])))),jn=f.ZP.div(T||(T=(0,x.Z)(["\n  padding-top: 16px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    padding-top: 40px;\n    padding-bottom: 32px;\n  }\n"]))),Zn=f.ZP.div(U||(U=(0,x.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: calc((100% / 3) * 2);\n  }\n"]))),yn=f.ZP.div(I||(I=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    ","\n    gap: 20px;\n  }\n"])),""),kn=f.ZP.p(Q||(Q=(0,x.Z)(["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.16;\n  align-items: center;\n  text-align: center;\n  ","\n  margin-bottom: 8px;\n  color: rgba(82, 85, 95, 0.7);\n  padding-top: 32px;\n  @media screen and (min-width: 768px) {\n    padding-top: 0;\n    margin: 0;\n    padding-left: 33px;\n  }\n  @media screen and (min-width: 768px) {\n    padding-left: 15px;\n  }\n"])),""),Pn=f.ZP.p(R||(R=(0,x.Z)(["\n  padding: 15px 29px;\n  border: 2px solid white;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.16;\n  text-align: center;\n  ","\n  text-transform: uppercase;\n  background-color: #F2F5FC;\n  color: #000000;\n  width: 183px;\n  margin-bottom: 32px;\n  outline: none;\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  :focus {\n    background-color: #fff;\n  }\n  &::placeholder {\n    color: #000;\n    letter-spacing: 0.02em;\n    font-weight: 700;\n    font-size: 12px;\n    line-height: 1.17;\n  }\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n    padding: 12px 0;\n    width: 125px;\n    border-radius: 16px;\n  }\n"])),""),zn=t(4897),Fn=new Date,Sn=["January","February","March","April","May","June","July","August","September","October","November","December"],Cn=function(){return Fn.getMonth()},Mn=t(5570),Dn=f.ZP.div(_||(_=(0,x.Z)(["\n  padding-top: 16px;\n  text-align: center;\n  position: relative;\n  @media screen and (min-width: 768px) {\n    padding-top: 0;\n  }\n"]))),En=f.ZP.button(V||(V=(0,x.Z)(["\n  width: 140px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  padding: 0 5px;\n  border: none;\n  color: #000;\n  background-color: var(--color-white);\n"]))),qn=f.ZP.p(W||(W=(0,x.Z)(["\n  color: rgba(82, 85, 95, 0.7);\n  font-size: 12px;\n"]))),An=function(){var n=(0,d.useState)(0),e=(0,c.Z)(n,2),t=e[0],i=e[1],r=(0,d.useState)(""),o=(0,c.Z)(r,2),a=o[0],p=o[1],x=(0,d.useState)(""),f=(0,c.Z)(x,2),h=f[0],u=f[1],g=(0,s.I0)();(0,d.useEffect)((function(){i(Cn()),p(Sn[Cn()]),u(Fn.getFullYear())}),[]),(0,d.useEffect)((function(){p(Sn[t]);var n="";n=t+1<10?"0"+(t+1):t+1;var e="".concat(h,"-").concat(n);"-01"!==e&&g((0,Mn.JL)(e)),g((0,l.Lv)("".concat(h,"-").concat(n)))}),[t,h,g]);return(0,k.jsxs)(Dn,{children:[(0,k.jsx)(qn,{children:"Current period:"}),(0,k.jsx)(Y,{onButtonClick:function(n){switch(n){case"decrement":g((0,l.Vd)([])),i(t-1),0===t&&(i(11),u(h-1));break;case"increment":g((0,l.Vd)([])),i(t+1),11===t&&(i(0),u(h+1));break;default:return}},children:(0,k.jsxs)(En,{children:[a," ",h]})})]})},Bn=function(){var n,e,t,i,r=(0,un.TH)(),o=(0,s.v9)(p.QM),a={isMobile:(0,gn.useMediaQuery)({query:"(max-width: 767px)"}),isTablet:(0,gn.useMediaQuery)({query:"((min-width: 768px) and (max-width: 1279px))"}),isDesktop:(0,gn.useMediaQuery)({query:"(min-width: 1280px)"})},d=a.isMobile,c=a.isTablet,l=a.isDesktop;return(0,k.jsxs)(jn,{children:[(0,k.jsxs)(wn,{to:null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:mn,children:[(0,k.jsx)("svg",{width:"24",height:"24",children:(0,k.jsx)("use",{href:"".concat(y,"#icon-back")})}),(0,k.jsx)(vn,{children:"Main page"})]}),(0,k.jsxs)(Zn,{children:[(0,k.jsxs)(yn,{children:[d&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(kn,{children:"Balance:"}),(0,k.jsxs)(Pn,{children:[null!==(t=o.toFixed(2))&&void 0!==t?t:0," UAH"]})]}),c&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(kn,{children:"Balance:"}),(0,k.jsxs)(Pn,{children:[null!==(i=o.toFixed(2))&&void 0!==i?i:0," UAH"]})]}),l&&(0,k.jsx)(zn.Z,{})]}),(0,k.jsx)(An,{})]})]})},Hn=f.ZP.div(J||(J=(0,x.Z)(["\n \n  padding: 0 20px;\n  @media screen and (min-width: 768px) {\n    /* margin: 0 32px; */\n    padding: 0 32px;\n \n  }\n  @media screen and (min-width: 1280px) {\n    padding: 0 123px;\n \n  }\n"]))),Kn=t(1425),Ln=t(6214);function Nn(){return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(Ln.Aq,{children:[(0,k.jsxs)(Hn,{children:[(0,k.jsx)(Bn,{}),(0,k.jsx)(hn,{})]}),(0,k.jsx)(Kn.Z,{})]})})}var Tn=Nn}}]);
//# sourceMappingURL=843.ae01918f.chunk.js.map