module.exports=__NEXT_REGISTER_PAGE("/utils/api",function(){return{page:webpackJsonp([5],{41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var s in o.open(t.method||"get",e),t.headers)o.setRequestHeader(s,t.headers[s]);function u(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,s,u){t.push(s=s.toLowerCase()),n.push([s,u]),e=r[s],r[s]=e?e+","+u:u}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:u,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(u())},o.onerror=r,o.send(t.body)})};t.default=r},513:function(e,t,n){e.exports=n(96)},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(97),o=n.n(r);t.default={requestGetReadMe:function(e){return o()("https://api.github.com/repos/gmground/".concat(e,"/readme"))},requestGetRepos:function(){return o()("https://api.github.com/users/gmground/repos")}}},97:function(e,t,n){e.exports=window.fetch||(window.fetch=n(41).default||n(41))}},[513]).default}});