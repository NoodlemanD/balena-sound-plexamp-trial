"use strict";(self.webpackChunkbalena_labs=self.webpackChunkbalena_labs||[]).push([[235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const l={},r="Plugins",i={unversionedId:"plugins",id:"plugins",title:"Plugins",description:"Plugins are the sources from where you can stream audio to your device. balenaSound comes with a set of plugins installed by default and the possibility of adding some extra ones with a bit of tinkering. We are always on the lookout for adding new plugins so keep an eye out!",source:"@site/docs/04-plugins.md",sourceDirName:".",slug:"/plugins",permalink:"/balena-sound/plugins",draft:!1,editUrl:"https://github.com/balena-labs-projects/balena-sound/edit/main/docs/04-plugins.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Customization",permalink:"/balena-sound/customization"},next:{title:"Audio interfaces",permalink:"/balena-sound/audio-interfaces"}},s={},u=[{value:"Default",id:"default",level:2},{value:"Spotify",id:"spotify",level:3},{value:"Installable",id:"installable",level:2},{value:"UPnP",id:"upnp",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"Plugins are the sources from where you can stream audio to your device. balenaSound comes with a set of plugins installed by default and the possibility of adding some extra ones with a bit of tinkering. We are always on the lookout for adding new plugins so keep an eye out!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why not include all plugins by default?"),"\nWe want to avoid deploying all installable plugins by default because of (a) increased build time, (b) increased deploy time, (c) impact on device performance. Given that most users typically don't use more than one or two plugins it seems reasonable to limit defaults to the most popular ones to prevent users paying the cost of having many plugins that will never be used."),(0,o.kt)("h2",{id:"default"},"Default"),(0,o.kt)("p",null,"The following plugins ship with balenaSound out of the box:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Spotify Connect"),(0,o.kt)("li",{parentName:"ul"},"Bluetooth"),(0,o.kt)("li",{parentName:"ul"},"AirPlay"),(0,o.kt)("li",{parentName:"ul"},"Soundcard input (Requires setting ",(0,o.kt)("inlineCode",{parentName:"li"},"SOUND_ENABLE_SOUNDCARD_INPUT"),", see ",(0,o.kt)("a",{parentName:"li",href:"customization#plugins"},"details"),")")),(0,o.kt)("p",null,"Default plugins can be disabled at runtime via variables. For more details see ",(0,o.kt)("a",{parentName:"p",href:"customization#plugins"},"here"),"."),(0,o.kt)("h3",{id:"spotify"},"Spotify"),(0,o.kt)("p",null,"Spotify Connect requires a premium account. There is two methods of authentication:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"zeroconf: most Spotify clients on smartphones, computers and smart tvs will automatically connect to balenaSound and pass on credentials without the need for manual authentication."),(0,o.kt)("li",{parentName:"ul"},"manual: providing user and password via variables, see ",(0,o.kt)("a",{parentName:"li",href:"customization#plugins"},"customization")," section for details.")),(0,o.kt)("p",null,"Manual authentication will let you stream audio over the internet from a client that is on a different network than the balenaSound device. This is useful if your balenaSound device is on a separate WiFi network that's harder to reach (e.g. a backyard network)."),(0,o.kt)("h2",{id:"installable"},"Installable"),(0,o.kt)("p",null,"The following plugins are available to be added to your balenaSound installation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"UPnP: Universal Plug and Play"),(0,o.kt)("li",{parentName:"ul"},"(Work in progress) Tidal Connect: See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/balena-labs-projects/balena-sound/pull/399"},"PR #399")),(0,o.kt)("li",{parentName:"ul"},"(Work in progress) Roon Bridge: See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/balena-labs-projects/balena-sound/pull/388"},"PR #388"))),(0,o.kt)("p",null,"Installing these plugins is a more involved process than just deploying the off the shelf version of balenaSound. You'll need to edit the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),' file before deploying the app. This means that you won\'t be able to deploy using the "Deploy with balena" button; you either need to use the ',(0,o.kt)("a",{parentName:"p",href:"https://balena-labs-projects.github.io/balena-sound/getting-started#cli-deploy"},"CLI to deploy"),' or use "Deploy with balena" with your own forked version of the project. If you don\'t feel comfortable performing these steps or need some help along the way hit us up at our ',(0,o.kt)("a",{parentName:"p",href:"https://forums.balena.io"},"forums")," and we'll gladly help you out."),(0,o.kt)("h3",{id:"upnp"},"UPnP"),(0,o.kt)("p",null,"To install UPnP plugin add the following to the ",(0,o.kt)("inlineCode",{parentName:"p"},"sevices")," section on your ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  upnp:\n    build: ./plugins/upnp\n    restart: on-failure\n    network_mode: host\n    ports:\n      - 49494:49494\n")))}d.isMDXComponent=!0}}]);