(function(e){function t(t){for(var n,o,r=t[0],l=t[1],c=t[2],p=0,d=[];p<r.length;p++)o=r[p],i[o]&&d.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-player/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("64a9"),i=s.n(n);i.a},"0a0b":function(e,t,s){},"0f30":function(e,t,s){},"160f":function(e,t,s){},"42b7":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header"),s("Player"),s("Footer")],1)},a=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("h1",[e._v("vue-player")])])}],l={name:"Header"},c=l,u=(s("a300"),s("2877")),p=Object(u["a"])(c,o,r,!1,null,"7f8cf9ca",null),d=p.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"player container"},[s("div",{staticClass:"video-container"},[s("video",{ref:"video",attrs:{controls:e.controls,autoPlay:e.autoplay}})]),s("Probe",{attrs:{info:e.probe}}),s("label",{attrs:{for:"drm"}},[e._v("Select Media")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],staticClass:"u-full-width",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.url=t.target.multiple?s:s[0]}}},e._l(e.mediaItems,function(t){return s("option",{key:t.id,domProps:{value:t.url}},[e._v(e._s(t.name))])}),0),""===e.url||e.isCustom?s("div",[s("label",[e._v("Media URL")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],staticClass:"u-full-width",attrs:{type:"text"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),s("label",[e._v("License Server URL")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.licenseUrl,expression:"licenseUrl"}],staticClass:"u-full-width",attrs:{type:"text"},domProps:{value:e.licenseUrl},on:{input:function(t){t.target.composing||(e.licenseUrl=t.target.value)}}}),s("label",{attrs:{for:"drm"}},[e._v("DRM")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.drm,expression:"drm"}],staticClass:"u-full-width",attrs:{id:"drm"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.drm=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"none"}},[e._v("None")]),s("option",{attrs:{value:"widevine"}},[e._v("Widevine")]),s("option",{attrs:{value:"playready"}},[e._v("PlayReady")])])]):e._e(),s("div",{staticClass:"control-buttons"},[s("button",{staticClass:"button-primary",on:{click:e.load}},[e._v("Load Media")]),s("button",{on:{click:e.stop}},[e._v("Unload")])]),s("Log",{attrs:{logs:e.debugLog}})],1)},f=[],v=s("446e"),h=s.n(v),_={defaultUrl:"https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-dash-widevine.ism/.mpd",defaultLicenseUrl:"https://widevine-proxy.appspot.com/proxy",defaultDrm:"widevine",mediaItems:[{name:"Tears of Steel (DASH Widevine)",url:"https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-dash-widevine.ism/.mpd"},{name:"Tears of Steel (DASH Clear)",url:"https://storage.googleapis.com/shaka-demo-assets/tos-ttml/dash.mpd"},{name:"Tears of Steel (DASH Clear) 2",url:"https://storage.googleapis.com/shaka-demo-assets/tos-ttml/dash.mpd2"},{name:"Angel One (multicodec, multilingual)",url:"https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"},{name:"Angel One (multicodec, multilingual, Widevine)",url:"https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd"},{name:"Sintel 4k (multicodec)",url:"https://storage.googleapis.com/shaka-demo-assets/sintel/dash.mpd"},{name:"Big Buck Bunny",url:"https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd"},{name:"Custom",url:""}],licenseServers:{"com.microsoft.playready":"https://test.playready.microsoft.com/service/rightsmanager.asmx?PlayRight=1&UseSimpleNonPersistentLicense=1","com.widevine.alpha":"https://cwip-shaka-proxy.appspot.com/no_auth"}},g=_,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"log",staticClass:"log"},e._l(e.logs,function(t){return s("div",{key:t.id},[s("div",{staticClass:"log-item"},[s("span",[e._v(e._s(t))])])])}),0)},b=[],C={name:"log",props:["logs"],watch:{logs:function(){this.updateLogPosition()}},methods:{updateLogPosition:function(){var e=this;setTimeout(function(){e.$refs.log.scrollTop=e.$refs.log.scrollHeight},1)}}},w=C,k=(s("fc82"),Object(u["a"])(w,y,b,!1,null,"060c0bea",null)),P=k.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"probe row"},[e._m(0),s("div",{staticClass:"two columns"},[s("h4",[e._v("Manifest")]),s("ul",[s("li",[e.supportsDASH?s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]):s("span",{staticClass:"material-icons"},[e._v("close")]),e._v("\n      DASH\n    ")]),s("li",[e.supportsMSS?s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]):s("span",{staticClass:"material-icons"},[e._v("close")]),e._v("\n      MSS\n    ")]),s("li",[e.supportsHLS?s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]):s("span",{staticClass:"material-icons"},[e._v("close")]),e._v("\n      HLS\n    ")])])]),s("div",{staticClass:"two columns"},[s("h4",[e._v("EME")]),s("ul",[s("li",[e.supportsWidevine?s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]):s("span",{staticClass:"material-icons"},[e._v("close")]),e._v("\n      widevine\n    ")]),s("li",[e.supportsPlayready?s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]):s("span",{staticClass:"material-icons"},[e._v("close")]),e._v("\n      playready\n    ")]),s("li",[e.supportsFairplay?s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]):s("span",{staticClass:"material-icons"},[e._v("close")]),e._v("\n      fairplay\n    ")]),s("li",[e.supportsPrimetime?s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]):s("span",{staticClass:"material-icons"},[e._v("close")]),e._v("\n      primetime\n    ")])])]),s("div",{staticClass:"six columns"},[s("h4",[e._v("MSE")]),s("ul",[s("li",[e.supportsMp4Avc1?s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]):s("span",{staticClass:"material-icons"},[e._v("close")]),e._v('\n      video/mp4; codecs="avc1.42E01E"\n    ')]),s("li",[e.supportsMp4Ec3?s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]):s("span",{staticClass:"material-icons"},[e._v("close")]),e._v('\n      video/mp4; codecs="ec-3"')]),s("li",[e.supportsWebmVp8?s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]):s("span",{staticClass:"material-icons"},[e._v("close")]),e._v('\n      video/webm; codecs="vp8"\n    ')]),s("li",[e.supportsWebmVp9?s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]):s("span",{staticClass:"material-icons"},[e._v("close")]),e._v('\n      video/mp2t; codecs="avc1.42E01E,mp4a.40.2"\n    ')])])])])},x=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"two columns"},[s("h4",[e._v("Player")]),s("ul",[s("li",[s("span",{staticClass:"material-icons checked"},[e._v("check_circle")]),e._v("\n      Shaka Player\n    ")])])])}],$={name:"probe",props:["info"],watch:{info:function(){console.log(this.info.manifest),console.log(this.info.media),console.log(this.info.drm)}},computed:{supportsDASH:function(){return this.info&&this.info.manifest.mpd},supportsMSS:function(){return this.info&&this.info.manifest.ism},supportsHLS:function(){return this.info&&this.info.manifest.m3u8},supportsWidevine:function(){return this.info&&this.info.drm["com.widevine.alpha"]},supportsPlayready:function(){return this.info&&this.info.drm["com.microsoft.playready"]},supportsFairplay:function(){return this.info&&this.info.drm["com.apple.fps"]},supportsPrimetime:function(){return this.info&&this.info.drm["com.adobe.primetime"]},supportsMp4Avc1:function(){return this.info&&this.info.media['video/mp4; codecs="avc1.42E01E"']},supportsMp4Ec3:function(){return this.info&&this.info.media['video/mp4; codecs="ec-3"']},supportsWebmVp8:function(){return this.info&&this.info.media['video/webm; codecs="vp8"']},supportsWebmVp9:function(){return this.info&&this.info.media['video/webm; codecs="vp9"']}},methods:{}},E=$,L=(s("6b2e"),Object(u["a"])(E,S,x,!1,null,"618d08fe",null)),M=L.exports,O=(s("160f"),s("42b7"),s("0a0b"),g.defaultUrl),j=g.defaultLicenseUrl,U=g.defaultDrm,A=g.mediaItems,H={name:"Player",components:{Log:P,Probe:M},props:{},data:function(){return{player:null,autoplay:!0,controls:!0,url:O,licenseUrl:j,drm:U,mediaItems:A,debugLog:[],probe:null}},computed:{isCustom:function(){return this.$route.query.url||this.$route.query.licenseUrl||this.$route.query.drm}},mounted:function(){this.setQueryParams(),this.init()},methods:{setQueryParams:function(){this.$route.query.url&&(this.url=this.$route.query.url),this.$route.query.licenseUrl&&(this.licenseUrl=this.$route.query.licenseUrl),this.$route.query.drm&&(this.drm=this.$route.query.drm.toLowerCase())},init:function(){var e=this;this.log("[player] - init"),h.a.polyfill.installAll(),this.log("[player] - version: ",h.a.Player.version),this.log("[player] - isBrowserSupported: ",h.a.Player.isBrowserSupported()),h.a.Player.probeSupport().then(function(t){e.log("[player] - probeSupport ",t),console.log(t.media),e.probe=t})},load:function(){var e=this.$refs.video;this.player=new h.a.Player(e),this.setConfiguration(),this.player.load(this.url).then(function(){console.log("video loaded")}).catch(function(e){console.log(e)})},stop:function(){this.player.unload()},setConfiguration:function(){this.setProtection()},setProtection:function(){this.player.configure({drm:{servers:g.licenseServers}})},log:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];console.log(t.join(" ")),this.debugLog=this.debugLog.concat(t.join(" "))}}},q=H,D=(s("ec72"),Object(u["a"])(q,m,f,!1,null,"0d32e4f8",null)),T=D.exports,W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer"},[s("ul",[s("li",[e._v("View the source on\n      "),s("a",{attrs:{href:"http://github.com/alfg/vue-player"}},[e._v("Github")])])])])}],R={name:"Footer"},B=R,F=(s("5761"),Object(u["a"])(B,W,N,!1,null,"33db225c",null)),V=F.exports,I={name:"app",components:{Header:d,Player:T,Footer:V}},J=I,Q=(s("034f"),Object(u["a"])(J,i,a,!1,null,null,null)),z=Q.exports,G=s("8c4f"),K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("Player")],1)},X=[],Y={name:"home",components:{Player:T}},Z=Y,ee=Object(u["a"])(Z,K,X,!1,null,null,null),te=ee.exports;n["a"].use(G["a"]);var se=new G["a"]({routes:[{path:"/",name:"home",component:te}]});n["a"].config.productionTip=!1,new n["a"]({router:se,render:function(e){return e(z)}}).$mount("#app")},5761:function(e,t,s){"use strict";var n=s("91f4"),i=s.n(n);i.a},"64a9":function(e,t,s){},"6b2e":function(e,t,s){"use strict";var n=s("786d"),i=s.n(n);i.a},"786d":function(e,t,s){},"91f4":function(e,t,s){},a300:function(e,t,s){"use strict";var n=s("a4f5"),i=s.n(n);i.a},a4f5:function(e,t,s){},be1b:function(e,t,s){},ec72:function(e,t,s){"use strict";var n=s("be1b"),i=s.n(n);i.a},fc82:function(e,t,s){"use strict";var n=s("0f30"),i=s.n(n);i.a}});
//# sourceMappingURL=app.3125ec5e.js.map