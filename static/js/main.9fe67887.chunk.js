(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),s=n(6),r=n(1),c=(n(12),n(4)),l=n.n(c),u=(n(13),n(2)),m=n(5);function o(e,t,n){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},t,n))}var p=n(0),d=function(e){var t=e.images,n=e.step,a=e.frameSize,i=e.itemWidth,s=e.animationDuration,r=e.infinite,c=e.currentImgIndx,u=e.handleCurrentImgIndx,m=c-n<0&&!r,o=c+n>=t.length&&!r;return Object(p.jsxs)("div",{className:"Carousel",children:[Object(p.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(i*a,"px"),borderRadius:"".concat(.5*i,"px")},children:t.map((function(e,t){return Object(p.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(-".concat(i*c,"px)"),transitionDuration:"".concat(s,"ms")},children:Object(p.jsx)("img",{className:"Carousel__image",src:e,alt:"".concat(t+1),width:i})},e)}))}),Object(p.jsx)("button",{type:"button",className:l()("Carousel__btn",{"Carousel__btn--disabled":m}),"aria-disabled":!1,onClick:function(){return m||u(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(!(e<0||t<0||n<0))return(t-n+ +e)%t}(c,t.length,n))},children:"Prev"}),Object(p.jsx)("button",{"data-cy":"next",type:"button",className:l()("Carousel__btn",{"Carousel__btn--disabled":o}),"aria-disabled":!1,onClick:function(){return o||u(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(!(e<0||t<0||n<0))return(+e+n)%t}(c,t.length,n))},children:"Next"})]})},b=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],g=function(){var e=Object(r.useState)({images:b,step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1}),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(0),c=Object(s.a)(i,2),l=c[0],u=c[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{"data-cy":"title",className:"App__title",children:["Carousel with ",b.length," images"]}),Object(p.jsxs)("div",{className:"App__inputs",children:[Object(p.jsxs)("label",{className:"App__label",htmlFor:"itemId",children:["Item Width",Object(p.jsx)("input",{type:"number",className:"App__input",name:"itemWidth",id:"itemId",min:130,max:260,value:n.itemWidth,onChange:function(e){var t=Math.round(+e.target.value);t<130||t>260||a((function(e){return o(e,"itemWidth",t)}))}})]}),Object(p.jsxs)("label",{className:"App__label",htmlFor:"frameId",children:["Frame Size",Object(p.jsx)("input",{type:"number",className:"App__input",name:"frameSize",id:"frameId",min:1,max:b.length,step:1,value:n.frameSize,onChange:function(e){var t=Math.round(+e.target.value);t<0||t>n.images.length||a((function(e){return o(e,"frameSize",t)}))}})]}),Object(p.jsxs)("label",{className:"App__label",htmlFor:"stepId",children:["Step",Object(p.jsx)("input",{type:"number",className:"App__input",name:"step",id:"stepId",min:1,max:b.length,step:1,value:n.step,onChange:function(e){var t=Math.round(+e.target.value);t<0||t>n.images.length||a((function(e){return o(e,"step",t)}))}})]}),Object(p.jsxs)("label",{className:"App__label",children:["Animation Duration",Object(p.jsx)("input",{type:"number",className:"App__input",name:"animationDuration",id:"animationDuration",min:500,max:3e3,step:500,value:n.animationDuration,onChange:function(e){var t=Math.round(+e.target.value);t<500||t>3e3||a((function(e){return o(e,"animationDuration",t)}))}})]}),Object(p.jsxs)("label",{className:"App__label",children:["Infinite",Object(p.jsx)("input",{type:"checkbox",className:"App__input",name:"infinite",id:"infinite",onChange:function(){a((function(e){return o(e,"infinite",!e.infinite)}))}})]})]}),Object(p.jsx)(d,{images:n.images,step:n.step,frameSize:n.frameSize,itemWidth:n.itemWidth,animationDuration:n.animationDuration,infinite:n.infinite,currentImgIndx:l,handleCurrentImgIndx:function(e){e<0||e>=b.length||u(e)}})]})};i.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9fe67887.chunk.js.map