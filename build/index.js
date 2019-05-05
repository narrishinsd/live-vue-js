module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=function(){function e(){}var t=e.prototype;return t.read=function(e,t){var r=this.getStateKey(e,t);try{var n=window.sessionStorage.getItem(r);return JSON.parse(n)}catch(e){return window&&window.___GATSBY_REACT_ROUTER_SCROLL&&window.___GATSBY_REACT_ROUTER_SCROLL[r]?window.___GATSBY_REACT_ROUTER_SCROLL[r]:{}}},t.save=function(e,t,r){var n=this.getStateKey(e,t),a=JSON.stringify(r);try{window.sessionStorage.setItem(n,a)}catch(e){window&&window.___GATSBY_REACT_ROUTER_SCROLL?window.___GATSBY_REACT_ROUTER_SCROLL[n]=JSON.parse(a):(window.___GATSBY_REACT_ROUTER_SCROLL={},window.___GATSBY_REACT_ROUTER_SCROLL[n]=JSON.parse(a))}},t.getStateKey=function(e,t){var r="@@scroll|"+(e.key||e.pathname);return null==t?r:r+"|"+t},e}();t.default=n},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(1),i=r.n(o);function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?v(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}
/*
 *  @link       https://narrationsd.com/
 *  @copyright Copyright (c) 2018 Narration SD
 *  @license   https://narrationsd.com/docs/license.html
 */var b=a.a.createContext("no Context"),g=!1;function m(e){g&&console.log(e)}var _=function(e){function t(e){var r;if(d(this,t),w(v(r=f(this,p(t).call(this,e))),"state",{liveVueData:null,dataArrived:!1,isLiveVue:!1,editFadeDuration:802}),w(v(r),"scrollStore",new i.a),w(v(r),"rearrangeToGatsbyData",function(e){var t={data:{}};return t.data[r.introducer]=e.data,t.data.lvMeta=e.lvMeta,m("rearrangeToGatsbyData result: "+JSON.stringify(t)),t}),w(v(r),"inIframe",function(){if("undefined"==typeof window)return!1;try{return window.self!==window.top}catch(e){return!0}}),w(v(r),"receiveMessage",function(e){if(void 0!==e.data)if(""!==e.data)if(void 0!==e.data)if(void 0!==e.data.text){var t={data:{}};try{if(!(t=JSON.parse(e.data.text)).data)throw new Error("no data from Live Preview!");var n=t.lvMeta?t.lvMeta.editFadeDuration:0;m("receive editFadeDuration: "+n),Object.keys(t.data).length>0&&(t=r.rearrangeToGatsbyData(t),m("json rearranged; obj is: "+JSON.stringify(t)),m("setting state data arrived"),r.setState({liveVueData:t.data,editFadeDuration:n,dataArrived:!0}),m("state data after receive: "+JSON.stringify(r.state.liveVueData)))}catch(e){m("json parse error: "+e)}}else m("event data.text undefined");else m("no data");else m("skipping data on empty");else m("skipping data on undefined")}),w(v(r),"componentDidMount",function(){r.receiveMessage=r.receiveMessage.bind(v(r)),window.addEventListener("message",r.receiveMessage,!1),window.parent.postMessage("loaded","*")}),w(v(r),"componentWillUnmount",function(){window.removeEventListener("message",r.receiveMessage)}),w(v(r),"componentWillUpdate",function(e,t,n){if(r.state.isLiveVue){r.location=window.location,r.location.key="initial";try{var a=r.scrollStore.read(r.location,null);if(a){m("scrolling to: "+JSON.stringify(a));var o=c(a,2),i=o[0],u=o[1];window.scrollTo(i,u)}}catch(e){m("no currentPosition yet: "+e)}}}),w(v(r),"report",function(e,t){r.reporter.current.report(e,t)}),w(v(r),"render",function(){m("begin LiveVueGatsby render"),m(r.props);var e={},t=!1,n=0;return r.context.isLiveVue?r.context.dataArrived?(t=!0,n=r.context.editFadeDuration,e={visibility:"visible",display:"block",backgroundColor:"#004d66"}):(t=!1,n=0,e={visibility:"hidden",display:"none"}):(t=!0,n=0,e={visibility:"visible"}),m("LiveVueGatsby fadeIn: "+t+", fadeTime: "+n+", style: "+JSON.stringify(e)),a.a.createElement(b.Provider,{value:{isLiveVue:r.state.isLiveVue,dataArrived:r.state.dataArrived,editFadeDuration:r.state.editFadeDuration,data:r.state.dataArrived?r.state.liveVueData:r.props.data,children:r.props.children}},a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,a.a.createElement("div",{style:r.style},r.props.children))))}),m("Wrap props data: "+e.data),m(e.data),!e.data){var n="LiveVueGatsby: a valid data prop is required, but it's not yet provided!";throw"undefined"!=typeof window&&document.write("<h2>Exiting: "+n+"</h2>"),new Error(n)}return r.introducer=Object.getOwnPropertyNames(e.data)[0],r.state.isLiveVue=r.inIframe(),r.reporter=a.a.createRef(),r}return y(t,n["Component"]),t}(),S=function(e){function t(){var e,r;d(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return w(v(r=f(this,(e=p(t)).call.apply(e,[this].concat(o)))),"addDataToChildren",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a.a.Children.map(e,function(e){return e&&void 0!==e.type?a.a.cloneElement(e,{data:t}):a.a.cloneElement(e)})}),r}return y(t,n["Component"]),l(t,[{key:"render",value:function(){return m("begin LiveVueData render; context: "+this.context),m(this.context),this.context.dataArrived&&null!==this.context.data?this.addDataToChildren(this.props.children,this.context.data):this.props.children}}]),t}();function E(e){var t=void 0!==e.replacement?e.replacement:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:"<h3>Disabled during Previews</h3>"}});return e&&e.data&&e.data.lvMeta&&e.data.lvMeta.isLivePreview?t:e.children}w(S,"contextType",b);var O=function(e){function t(e){var r;return d(this,t),(r=f(this,p(t).call(this,e))).state={hasError:!1},r}return y(t,a.a.Component),l(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e,errorInfo:t})}},{key:"render",value:function(){if(this.state.hasError){console.log("React Error: this.state.errMsg: "+this.state.errMsg);this.state.error;return a.a.createElement("div",{style:{backgroundColor:"white",padding:"20px",height:"100h",width:"100w"}},a.a.createElement("h2",null,"Sorry, something has gone wrong during React rendering."),a.a.createElement("p",null,"You're very likely to find a useful clue by using the Error Decoder website link that's usually offered in Details, just below. "),a.a.createElement("p",null,"This is React's method of providing quite useful error messages for the compact runtime version. "),a.a.createElement("details",{open:!0,style:{whiteSpace:"pre-wrap",fontFamily:"sans-serif",color:"darkblue"}},this.state.error&&this.state.error.toString()),a.a.createElement("br",null),a.a.createElement("p",null,"Normal troubleshooting practices then apply, and the clues from the Decoder site, combined with a little backing off of recent changes, will usually locate the problem quickly."),a.a.createElement("p",null,"If needing to go further, you'll find a stack trace in the browser console,which may show code you can recognize, generally two or three levels down."),a.a.createElement("p",null,"To get a more readable stack trace and results, you can set the Webpack build not to minify -- search online for how to do that with your current Gatsby version."))}return a.a.createElement("div",null,this.props.children)}}]),t}();r.d(t,"LiveVueGatsby",function(){return _}),r.d(t,"LiveVueData",function(){return S}),r.d(t,"LiveVueDisable",function(){return E})}]);