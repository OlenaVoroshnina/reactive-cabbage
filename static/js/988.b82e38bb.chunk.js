"use strict";(self.webpackChunkreactive_cabbage=self.webpackChunkreactive_cabbage||[]).push([[988],{4897:function(n,e,t){t.d(e,{Z:function(){return z}});var i,r,o,a,d,p,c=t(9439),l=t(2791),s=t(9434),x=t(7689),f=t(5570),u=t(6351),h=t(1093),g=t(4164),m=t(168),b=t(8789),w=b.ZP.div(i||(i=(0,m.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]))),j=b.ZP.div(r||(r=(0,m.Z)(["\n  position: fixed;\n  top: 250px;\n  left: 50%;\n  transform: translateX(-50%);\n  max-width: 280px;\n  max-height: 163px;\n  width: 100%;\n  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n  border-radius: 30px;\n  @media screen and (min-width: 768px) {\n    max-width: 288px;\n    top: 160px;\n  }\n  @media screen and (min-width: 1280px) {\n    max-width: 288px;\n    top: 160px;\n    left: 52%;\n  }\n  &:before {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: -9%;\n    left: 20%;\n    border-left: 16px solid transparent;\n    border-right: 16px solid transparent;\n    border-bottom: 16px solid #1d346a;\n  }\n"]))),v=b.ZP.h2(o||(o=(0,m.Z)(["\n  padding-top: 40px;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.43;\n  margin-bottom: 20px;\n  color: #ffffff;\n  @media screen and (min-width: 768px) {\n    padding-left: 29px;\n    padding-right: 29px;\n  }\n"]))),y=b.ZP.p(a||(a=(0,m.Z)(["\n  padding-bottom: 49px;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.33;\n  color: #ffffff;\n  @media screen and (min-width: 768px) {\n    padding-left: 29px;\n    padding-right: 29px;\n  }\n"]))),Z=t(3329),k=document.querySelector("#modal-root"),P=document.querySelector("body"),E=function(){var n=(0,l.useState)(!0),e=(0,c.Z)(n,2),t=e[0],i=e[1];return(0,l.useEffect)((function(){return P.classList.add("no-scroll"),function(){return P.classList.remove("no-scroll")}}),[]),(0,g.createPortal)(t&&(0,Z.jsx)(w,{onClick:function(n){n.currentTarget===n.target&&(i(!1),P.classList.remove("no-scroll"))},children:(0,Z.jsxs)(j,{children:[(0,Z.jsx)(v,{children:"Hello! To get started, enter the current balance of your account!"}),(0,Z.jsx)(y,{children:"You can't spend money until you have it :)"})]})}),k)},O=b.ZP.form(d||(d=(0,m.Z)(["\n  margin: 0 auto 50px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    gap: 20px;\n    margin: 0 auto;\n  }\n  @media screen and (min-width: 768px) {\n   //  margin: 0 auto;\n  }\n  .title {\n    color: rgba(82, 85, 95, 0.7);\n    margin-bottom: 8px;\n    font-size: 12px;\n    line-height: calc(14 / 12);\n    font-weight: 500;\n    text-align: center;\n  }\n  .inputTag {\n    font-weight: 700;\n    width: 125px;\n    height: 44px;\n    padding: 22px 0px;\n    color: #52555f;\n    text-align: center;\n    border: 2px solid white;\n    border-radius: 16px;\n    outline: none;\n    background-color: #f2f5fc;\n    ::-webkit-outer-spin-button,\n    ::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    :focus {\n      background-color: #fff;\n    }\n    &::placeholder {\n      color: #000;\n      letter-spacing: 0.02em;\n      font-weight: 700;\n      font-size: 12px;\n      line-height: 1.17;\n    }\n    @media screen and (min-width: 768px) {\n      width: 125px;\n      padding: 12px 0px;\n      border-radius: 16px;\n    }\n  }\n  .btn {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px;\n    background-color: #f2f5fc;\n    width: 125px;\n    height: 44px;\n    padding: 12px 18px;\n    color: rgba(82, 85, 95, 0.7);\n    text-align: left;\n    text-transform: uppercase;\n    border: 2px solid white;\n    border-left: none;\n    border-radius: 16px;\n    outline: none;\n    transition-property: color, background-color;\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n      color: white;\n      background-color: #ff751d;\n      border-color: #ff751d;\n    }\n    @media screen and (min-width: 768px) {\n      width: 125px;\n      padding: 12px 6px;\n      border-radius: 16px;\n      text-align: center;\n      border-left: 2px solid white;\n    }\n  }\n"]))),H=b.ZP.div(p||(p=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),z=function(){var n,e=(0,s.v9)(u.QM),t=(0,x.TH)(),i=(0,s.I0)(),r=(0,l.useState)(!1),o=(0,c.Z)(r,2),a=o[0],d=o[1],p=(0,l.useRef)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(O,{onSubmit:function(e){e.preventDefault(),n=e.target.balance.value},ref:p,children:[(0,Z.jsx)("h2",{className:"title",children:"Balance:"}),(0,Z.jsxs)(H,{children:[(0,Z.jsx)("input",{onChange:function(e){n=e.target.value},className:"inputTag",type:"number",name:"balance",title:"Please, enter your balance",pattern:"[0-9, .UAH]*",placeholder:"".concat(Number(e).toFixed(2)," UAH"),required:!0}),(0,Z.jsx)("button",{type:"submit",className:"btn",onClick:function(){d(!0)},children:"Confirm"})]})]}),"/expenses"===t.pathname&&(0,Z.jsx)(E,{}),a&&(0,Z.jsx)(h.Z,{changeBalance:"true",closeModal:function(){d(!1)},dispatch:function(){i((0,f.Fg)(n)),p.current.reset()},text:"SURE",balance:e,onDelete:function(){},children:"Are you sure?"})]})}},8079:function(n,e,t){t.r(e),t.d(e,{HomePage:function(){return m},default:function(){return b}});var i,r,o=t(7689),a=t(1809),d=t(2791),p=["title","titleId"];function c(){return c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},c.apply(this,arguments)}function l(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function s(n,e){var t=n.title,o=n.titleId,a=l(n,p);return d.createElement("svg",c({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},a),t?d.createElement("title",{id:o},t):null,i||(i=d.createElement("g",{clipPath:"url(#clip0_19401_294)"},d.createElement("path",{d:"M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z",fill:"#52555F"}))),r||(r=d.createElement("defs",null,d.createElement("clipPath",{id:"clip0_19401_294"},d.createElement("rect",{width:24,height:24,fill:"white"})))))}var x=d.forwardRef(s),f=(t.p,t(8226)),u=t(4897),h=t(6214),g=t(3329),m=function(){var n=(0,o.TH)(),e="/income"===n.pathname?1:0,t=(0,f.a)().isLoggedIn,i="/"===n.pathname?"/income":n.pathname,r=(0,o.s0)();return(0,d.useEffect)((function(){r(i)}),[r,t,i]),(0,g.jsx)(g.Fragment,{children:t?(0,g.jsxs)(h.Aq,{children:[(0,g.jsxs)(h.j$,{children:[(0,g.jsx)(u.Z,{}),(0,g.jsxs)(h.p,{to:"/reports",state:{from:n},children:[(0,g.jsx)("span",{children:"Reports"}),(0,g.jsx)(x,{className:"reportsIcon"})]})]}),(0,g.jsxs)(h.dt,{selectedIndex:e,onSelect:function(){},children:[(0,g.jsxs)(h.fq,{children:[(0,g.jsx)(h.g,{children:(0,g.jsx)(h.w2,{to:"expenses",style:{textDecoration:"none"},children:"Expenses"})}),(0,g.jsx)(h.g,{children:(0,g.jsx)(h.w2,{to:"income",style:{textDecoration:"none"},children:"Income"})})]}),(0,g.jsxs)(h.UE,{children:[(0,g.jsx)(a.x4,{children:(0,g.jsx)(o.j3,{})}),(0,g.jsx)(a.x4,{children:(0,g.jsx)(o.j3,{})})]})]})]}):(0,g.jsx)(o.j3,{})})},b=m},6214:function(n,e,t){t.d(e,{Aq:function(){return m},UE:function(){return k},dt:function(){return b},fq:function(){return j},g:function(){return w},j$:function(){return Z},p:function(){return y},w2:function(){return v}});var i,r,o,a,d,p,c,l,s,x,f=t(168),u=t(8789),h=t(1809),g=t(1087),m=(t(8200),u.ZP.div(i||(i=(0,f.Z)(["\n  top: 0;\n  left: 0;\n  height: 296px;\n  background-color: #f5f6fb;\n  border-bottom-left-radius: 10%;\n  width: 100%;\n  @media (min-width: 321px) {\n    height: 526px;\n  } ;\n"])))),b=(0,u.ZP)(h.mQ)(r||(r=(0,f.Z)(["\n  margin: 0 auto;\n  background-color: transparent;\n  @media (min-width: 768px) {\n    max-width: 704px;\n    border-radius: 30px;\n    & .react-tabs__tab-panel--selected {\n      position: relative;\n      top: -24px;\n      border-radius: 0 30px 30px 30px;\n      box-shadow: 0px 50px 60px rgba(170, 178, 197, 0.2);\n      background-color: #ffffff;\n    }\n  }\n  @media (min-width: 1280px) {\n    max-width: 1098px;\n  }\n  & .react-tabs__tab-list {\n    border: none;\n    margin: 0;\n  }\n"]))),w=(0,u.ZP)(h.OK)(o||(o=(0,f.Z)(["\n  // background-color: #f7741d;\n  // width: 50%;\n  // height: 53px;\n  // padding: 19px 12px;\n  // text-align: center;\n  // transition: background-color 250ms ease;\n\n  // @media (min-width: 768px) {\n  //   background-color: #fefefe;\n  //   padding: 13px 12px;\n  //   width: 138px;\n  //   height: 40px;\n  //   border-radius: 30px 30px 0 0;\n  // }\n\n  background-color: #fefefe;\n  text-decoration: none;\n  // background: rgba(250, 251, 253, 1);\n  text-align: center;\n  text-decoration: none;\n  border: none;\n  width: 138px;\n  height: 40px;\n  height: 53px;\n  padding: 12px 19px;\n  border-radius: 30px 30px 0 0;\n  transition-property: color, background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  .active {\n    color: #ff751d;\n  }\n"]))),j=(0,u.ZP)(h.td)(a||(a=(0,f.Z)(["\n  display: flex;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0;\n  \n  @media (min-width: 768px) {\n    position: relative;\n    width: 276px;\n  }\n"]))),v=(0,u.ZP)(g.OL)(d||(d=(0,f.Z)(["\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.17;\n  text-align: center;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  transition: color 250ms ease;\n  @media (min-width: 768px) {\n    margin: 0px 25px;\n    color: black;\n  }\n"]))),y=(0,u.ZP)(g.rU)(p||(p=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 45px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  line-height: 1.9;\n  font-weight: 400;\n  color: rgba(82, 85, 95, 0.7);\n  :hover,\n  :focus {\n    color: #ff751d;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n    \n  }\n  @media screen and (min-width: 1280px) {\n    /* position: absolute;\n    top: 11px;\n    right: 0; */\n  }\n  .reportsIcon {\n    margin-left: 15px;\n    width: 24px;\n    height: 24px;\n    fill: #ff751d;\n\n    :hover .reportsIcon,\n    :focus .reportsIcon {\n      fill: #ff751d;\n    }\n  }\n"]))),Z=u.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  ","\n  padding: 40px 140px 8px;\n  margin-bottom: 32px;\n"])),""),k=(u.ZP.div(l||(l=(0,f.Z)(["\n  padding-top: 14px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  gap: 35px;\n  flex-direction: column-reverse;\n\n  .reportLink {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: flex-end;\n    text-decoration: none;\n    font-size: 12px;\n    color: rgba(82, 85, 95, 0.7);\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n      color: #ff751d;\n    }\n  }\n\n  @media (min-width: 768px) {\n    gap: 251px;\n    flex-direction: row;\n    align-items: center;\n    padding-top: 40px;\n    max-width: 704pxpx;\n    margin-bottom: 60px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 1098px;\n    gap: 298px;\n    justify-content: flex-end;\n  }\n"]))),u.ZP.div(s||(s=(0,f.Z)(["\n  position: relative;\n  top: 10px;\n"]))));u.ZP.div(x||(x=(0,f.Z)(["\n  padding: 15px;\n  display: flex;\n"])))}}]);
//# sourceMappingURL=988.b82e38bb.chunk.js.map