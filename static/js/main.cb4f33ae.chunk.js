(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_redq_Documents_projects_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_buttons_ButtonsList__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),_display_Display__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),_Calculotor_style__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__),Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(C_Users_redq_Documents_projects_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),display=_useState2[0],setDisplay=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(C_Users_redq_Documents_projects_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),formula=_useState4[0],setFormula=_useState4[1],lastPressed=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),handleInput=function handleInput(value,type){if("clear"===type)setDisplay("0"),setFormula("");else if("0"===formula){if("0"===value)return;setFormula(value)}else if("opertor"===type&&"opertor"===lastPressed.current)"-"===value?(console.log(-1),setDisplay(value),setFormula(formula+value)):(setDisplay(value),setFormula(formula.replace(/[-+*/]$/,value)));else{if("decimal"===type&&"decimal"===lastPressed.current)return;if("equal"===type){var result=eval(formula).toString();setDisplay(result),setFormula(result),lastPressed.current=type}else"equal"===lastPressed.current&&"opertor"===type?(setDisplay(display),setFormula(display+value)):(setDisplay(value),setFormula(formula+value),lastPressed.current=type)}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Calculotor_style__WEBPACK_IMPORTED_MODULE_4__.a,{className:"warapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_display_Display__WEBPACK_IMPORTED_MODULE_3__.a,{display:display,formula:formula}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_buttons_ButtonsList__WEBPACK_IMPORTED_MODULE_2__.a,{buttons:buttons,handleInput:handleInput})]})},buttons=[{value:"0",id:"zero",type:"number"},{value:"1",id:"one",type:"number"},{value:"2",id:"two",type:"number"},{value:"3",id:"three",type:"number"},{value:"4",id:"four",type:"number"},{value:"5",id:"five",type:"number"},{value:"6",id:"six",type:"number"},{value:"7",id:"seven",type:"number"},{value:"8",id:"eight",type:"number"},{value:"9",id:"nine",type:"number"},{value:"+",id:"add",type:"opertor"},{value:"-",id:"subtract",type:"opertor"},{value:"*",id:"multiply",type:"opertor"},{value:"/",id:"divide",type:"opertor"},{value:"=",id:"equals",type:"equal"},{value:".",id:"decimal",type:"decimal"},{value:"AC",id:"clear",type:"clear"}];__webpack_exports__.a=Calculator},14:function(e,_,t){"use strict";t.d(_,"a",(function(){return u}));var a,r=t(2),u=t(3).a.div(a||(a=Object(r.a)(["\nmax-width: 50%;\nmargin: O auto;\n"])))},15:function(e,_,t){"use strict";t(0);var a,r,u=t(2),s=t(3),l=s.a.div(a||(a=Object(u.a)([""]))),n=s.a.button(r||(r=Object(u.a)([""]))),i=t(1);_.a=function(e){var _=e.buttons,t=e.handleInput;return Object(i.jsx)(l,{children:_.map((function(e){return Object(i.jsx)(n,{id:e.id,onClick:function(){return t(e.value,e.type)},children:e.value},e.id)}))})}},16:function(e,_,t){"use strict";t(0);var a,r,u,s=t(2),l=t(3),n=l.a.div(a||(a=Object(s.a)([""]))),i=l.a.p(r||(r=Object(s.a)([""]))),c=l.a.p(u||(u=Object(s.a)([""]))),o=t(1);_.a=function(e){var _=e.display,t=e.formula;return Object(o.jsxs)(n,{children:[Object(o.jsx)(c,{children:t}),Object(o.jsx)(i,{id:"display",children:_})]})}},21:function(e,_,t){},25:function(e,_,t){"use strict";t.r(_);var a,r=t(0),u=t.n(r),s=t(9),l=t.n(s),n=(t(21),t(10)),i=t(2),c=t(3).a.div(a||(a=Object(i.a)(["\n * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    width:100%;\n    min-height: 100vh;\n}\n"]))),o=t(1);var p=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(c,{}),Object(o.jsx)(n.a,{})]})};l.a.render(Object(o.jsx)(u.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.cb4f33ae.chunk.js.map