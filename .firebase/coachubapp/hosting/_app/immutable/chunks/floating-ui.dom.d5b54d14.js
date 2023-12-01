import{w as st,r as St}from"./index.5a2e191c.js";import{p as Pt,s as Rt,e as oe,f as Et,g as be,h as je,d as N,u as ne,i as se,j as ie,m as At}from"./scheduler.0bc5e154.js";import{S as xt,i as Ct,d as G,v as Lt,j as I,s as re,k as W,l as j,c as le,g as O,m as x,n as ze,a as Q,z as Y,E as kt,f as C,r as ce,t as k,b as ae,o as it,p as rt}from"./index.5f30d35d.js";const wo=st(void 0),Ee={};function Ue(e){return e==="local"?localStorage:sessionStorage}function Be(e,t,o){const n=(o==null?void 0:o.serializer)??JSON,s=(o==null?void 0:o.storage)??"local";function i(r,l){Ue(s).setItem(r,n.stringify(l))}if(!Ee[e]){const r=st(t,a=>{const f=Ue(s).getItem(e);f&&a(n.parse(f));{const g=y=>{y.key===e&&a(y.newValue?n.parse(y.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:l,set:c}=r;Ee[e]={set(a){i(e,a),c(a)},update(a){const f=a(Pt(r));i(e,f),c(f)},subscribe:l}}return Ee[e]}const Ot=Be("modeOsPrefers",!1),Ft=Be("modeUserPrefers",void 0),Ht=Be("modeCurrent",!1);function yo(){const e=window.matchMedia("(prefers-color-scheme: light)").matches;return Ot.set(e),e}function vo(e){Ft.set(e)}function _o(e){const t=document.documentElement.classList,o="dark";e===!0?t.remove(o):t.add(o),Ht.set(e)}function So(){const e=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",o=!("modeUserPrefers"in localStorage),n=window.matchMedia("(prefers-color-scheme: dark)").matches;t||o&&n?e.add("dark"):e.remove("dark")}const lt="(prefers-reduced-motion: reduce)";function Tt(){return window.matchMedia(lt).matches}St(Tt(),e=>{{const t=n=>{e(n.matches)},o=window.matchMedia(lt);return o.addEventListener("change",t),()=>{o.removeEventListener("change",t)}}});const z="node_modules/@skeletonlabs/skeleton/dist/components/AppShell/AppShell.svelte",Dt=e=>({}),Ge=e=>({}),Bt=e=>({}),Xe=e=>({}),Mt=e=>({}),Ye=e=>({}),Vt=e=>({}),qe=e=>({}),Nt=e=>({}),Qe=e=>({}),It=e=>({}),Je=e=>({});function Ae(e){let t,o,n;const s=e[19].header,i=oe(s,e,e[18],Je),r={c:function(){t=I("header"),i&&i.c(),this.h()},l:function(c){t=W(c,"HEADER",{id:!0,class:!0});var a=j(t);i&&i.l(a),a.forEach(O),this.h()},h:function(){x(t,"id","shell-header"),x(t,"class",o="flex-none "+e[8]),N(t,z,35,2,1161)},m:function(c,a){Q(c,t,a),i&&i.m(t,null),n=!0},p:function(c,a){i&&i.p&&(!n||a&262144)&&ne(i,s,c,c[18],n?ie(s,c[18],a,It):se(c[18]),Je),(!n||a&256&&o!==(o="flex-none "+c[8]))&&x(t,"class",o)},i:function(c){n||(C(i,c),n=!0)},o:function(c){k(i,c),n=!1},d:function(c){c&&O(t),i&&i.d(c)}};return G("SvelteRegisterBlock",{block:r,id:Ae.name,type:"if",source:"(35:1) {#if $$slots.header}",ctx:e}),r}function xe(e){let t,o;const n=e[19].sidebarLeft,s=oe(n,e,e[18],Qe),i={c:function(){t=I("aside"),s&&s.c(),this.h()},l:function(l){t=W(l,"ASIDE",{id:!0,class:!0});var c=j(t);s&&s.l(c),c.forEach(O),this.h()},h:function(){x(t,"id","sidebar-left"),x(t,"class",e[7]),N(t,z,42,3,1387)},m:function(l,c){Q(l,t,c),s&&s.m(t,null),o=!0},p:function(l,c){s&&s.p&&(!o||c&262144)&&ne(s,n,l,l[18],o?ie(n,l[18],c,Nt):se(l[18]),Qe),(!o||c&128)&&x(t,"class",l[7])},i:function(l){o||(C(s,l),o=!0)},o:function(l){k(s,l),o=!1},d:function(l){l&&O(t),s&&s.d(l)}};return G("SvelteRegisterBlock",{block:i,id:xe.name,type:"if",source:"(42:2) {#if $$slots.sidebarLeft}",ctx:e}),i}function Ce(e){let t,o,n;const s=e[19].pageHeader,i=oe(s,e,e[18],qe),r=i||ct(e),l={c:function(){t=I("header"),r&&r.c(),this.h()},l:function(a){t=W(a,"HEADER",{id:!0,class:!0});var f=j(t);r&&r.l(f),f.forEach(O),this.h()},h:function(){x(t,"id","page-header"),x(t,"class",o="flex-none "+e[5]),N(t,z,49,4,1660)},m:function(a,f){Q(a,t,f),r&&r.m(t,null),n=!0},p:function(a,f){i&&i.p&&(!n||f&262144)&&ne(i,s,a,a[18],n?ie(s,a[18],f,Vt):se(a[18]),qe),(!n||f&32&&o!==(o="flex-none "+a[5]))&&x(t,"class",o)},i:function(a){n||(C(r,a),n=!0)},o:function(a){k(r,a),n=!1},d:function(a){a&&O(t),r&&r.d(a)}};return G("SvelteRegisterBlock",{block:l,id:Ce.name,type:"if",source:"(49:3) {#if $$slots.pageHeader}",ctx:e}),l}function ct(e){let t;const o={c:function(){t=it("(slot:header)")},l:function(s){t=rt(s,"(slot:header)")},m:function(s,i){Q(s,t,i)},d:function(s){s&&O(t)}};return G("SvelteRegisterBlock",{block:o,id:ct.name,type:"fallback",source:"(50:91) (slot:header)",ctx:e}),o}function Le(e){let t,o,n;const s=e[19].pageFooter,i=oe(s,e,e[18],Ye),r=i||at(e),l={c:function(){t=I("footer"),r&&r.c(),this.h()},l:function(a){t=W(a,"FOOTER",{id:!0,class:!0});var f=j(t);r&&r.l(f),f.forEach(O),this.h()},h:function(){x(t,"id","page-footer"),x(t,"class",o="flex-none "+e[3]),N(t,z,57,4,1973)},m:function(a,f){Q(a,t,f),r&&r.m(t,null),n=!0},p:function(a,f){i&&i.p&&(!n||f&262144)&&ne(i,s,a,a[18],n?ie(s,a[18],f,Mt):se(a[18]),Ye),(!n||f&8&&o!==(o="flex-none "+a[3]))&&x(t,"class",o)},i:function(a){n||(C(r,a),n=!0)},o:function(a){k(r,a),n=!1},d:function(a){a&&O(t),r&&r.d(a)}};return G("SvelteRegisterBlock",{block:l,id:Le.name,type:"if",source:"(57:3) {#if $$slots.pageFooter}",ctx:e}),l}function at(e){let t;const o={c:function(){t=it("(slot:footer)")},l:function(s){t=rt(s,"(slot:footer)")},m:function(s,i){Q(s,t,i)},d:function(s){s&&O(t)}};return G("SvelteRegisterBlock",{block:o,id:at.name,type:"fallback",source:"(58:91) (slot:footer)",ctx:e}),o}function ke(e){let t,o;const n=e[19].sidebarRight,s=oe(n,e,e[18],Xe),i={c:function(){t=I("aside"),s&&s.c(),this.h()},l:function(l){t=W(l,"ASIDE",{id:!0,class:!0});var c=j(t);s&&s.l(c),c.forEach(O),this.h()},h:function(){x(t,"id","sidebar-right"),x(t,"class",e[6]),N(t,z,63,3,2174)},m:function(l,c){Q(l,t,c),s&&s.m(t,null),o=!0},p:function(l,c){s&&s.p&&(!o||c&262144)&&ne(s,n,l,l[18],o?ie(n,l[18],c,Bt):se(l[18]),Xe),(!o||c&64)&&x(t,"class",l[6])},i:function(l){o||(C(s,l),o=!0)},o:function(l){k(s,l),o=!1},d:function(l){l&&O(t),s&&s.d(l)}};return G("SvelteRegisterBlock",{block:i,id:ke.name,type:"if",source:"(63:2) {#if $$slots.sidebarRight}",ctx:e}),i}function Oe(e){let t,o,n;const s=e[19].footer,i=oe(s,e,e[18],Ge),r={c:function(){t=I("footer"),i&&i.c(),this.h()},l:function(c){t=W(c,"FOOTER",{id:!0,class:!0});var a=j(t);i&&i.l(a),a.forEach(O),this.h()},h:function(){x(t,"id","shell-footer"),x(t,"class",o="flex-none "+e[2]),N(t,z,69,2,2329)},m:function(c,a){Q(c,t,a),i&&i.m(t,null),n=!0},p:function(c,a){i&&i.p&&(!n||a&262144)&&ne(i,s,c,c[18],n?ie(s,c[18],a,Dt):se(c[18]),Ge),(!n||a&4&&o!==(o="flex-none "+c[2]))&&x(t,"class",o)},i:function(c){n||(C(i,c),n=!0)},o:function(c){k(i,c),n=!1},d:function(c){c&&O(t),i&&i.d(c)}};return G("SvelteRegisterBlock",{block:r,id:Oe.name,type:"if",source:"(69:1) {#if $$slots.footer}",ctx:e}),r}function Fe(e){let t,o,n,s,i,r,l,c,a,f,g,y,u,p,_,m=e[10].header&&Ae(e),d=e[10].sidebarLeft&&xe(e),b=e[10].pageHeader&&Ce(e);const A=e[19].default,P=oe(A,e,e[18],null);let w=e[10].pageFooter&&Le(e),S=e[10].sidebarRight&&ke(e),R=e[10].footer&&Oe(e);const h={c:function(){t=I("div"),m&&m.c(),o=re(),n=I("div"),d&&d.c(),s=re(),i=I("div"),b&&b.c(),r=re(),l=I("main"),P&&P.c(),a=re(),w&&w.c(),g=re(),S&&S.c(),y=re(),R&&R.c(),this.h()},l:function(v){t=W(v,"DIV",{id:!0,class:!0,"data-testid":!0});var E=j(t);m&&m.l(E),o=le(E),n=W(E,"DIV",{class:!0});var L=j(n);d&&d.l(L),s=le(L),i=W(L,"DIV",{id:!0,class:!0});var D=j(i);b&&b.l(D),r=le(D),l=W(D,"MAIN",{id:!0,class:!0});var F=j(l);P&&P.l(F),F.forEach(O),a=le(D),w&&w.l(D),D.forEach(O),g=le(L),S&&S.l(L),L.forEach(O),y=le(E),R&&R.l(E),E.forEach(O),this.h()},h:function(){x(l,"id","page-content"),x(l,"class",c="flex-auto "+e[4]),N(l,z,53,3,1831),x(i,"id","page"),x(i,"class",f=e[1]+" "+He),ze(i,"scrollbar-gutter",e[0]),N(i,z,46,2,1502),x(n,"class","flex-auto "+ft),N(n,z,39,1,1285),x(t,"id","appShell"),x(t,"class",e[9]),x(t,"data-testid","app-shell"),N(t,z,32,0,1050)},m:function(v,E){Q(v,t,E),m&&m.m(t,null),Y(t,o),Y(t,n),d&&d.m(n,null),Y(n,s),Y(n,i),b&&b.m(i,null),Y(i,r),Y(i,l),P&&P.m(l,null),Y(i,a),w&&w.m(i,null),Y(n,g),S&&S.m(n,null),Y(t,y),R&&R.m(t,null),u=!0,p||(_=kt(i,"scroll",e[20],!1,!1,!1,!1),p=!0)},p:function(v,[E]){v[10].header?m?(m.p(v,E),E&1024&&C(m,1)):(m=Ae(v),m.c(),C(m,1),m.m(t,o)):m&&(ce(),k(m,1,1,()=>{m=null}),ae()),v[10].sidebarLeft?d?(d.p(v,E),E&1024&&C(d,1)):(d=xe(v),d.c(),C(d,1),d.m(n,s)):d&&(ce(),k(d,1,1,()=>{d=null}),ae()),v[10].pageHeader?b?(b.p(v,E),E&1024&&C(b,1)):(b=Ce(v),b.c(),C(b,1),b.m(i,r)):b&&(ce(),k(b,1,1,()=>{b=null}),ae()),P&&P.p&&(!u||E&262144)&&ne(P,A,v,v[18],u?ie(A,v[18],E,null):se(v[18]),null),(!u||E&16&&c!==(c="flex-auto "+v[4]))&&x(l,"class",c),v[10].pageFooter?w?(w.p(v,E),E&1024&&C(w,1)):(w=Le(v),w.c(),C(w,1),w.m(i,null)):w&&(ce(),k(w,1,1,()=>{w=null}),ae()),(!u||E&2&&f!==(f=v[1]+" "+He))&&x(i,"class",f),E&1&&ze(i,"scrollbar-gutter",v[0]),v[10].sidebarRight?S?(S.p(v,E),E&1024&&C(S,1)):(S=ke(v),S.c(),C(S,1),S.m(n,null)):S&&(ce(),k(S,1,1,()=>{S=null}),ae()),v[10].footer?R?(R.p(v,E),E&1024&&C(R,1)):(R=Oe(v),R.c(),C(R,1),R.m(t,null)):R&&(ce(),k(R,1,1,()=>{R=null}),ae()),(!u||E&512)&&x(t,"class",v[9])},i:function(v){u||(C(m),C(d),C(b),C(P,v),C(w),C(S),C(R),u=!0)},o:function(v){k(m),k(d),k(b),k(P,v),k(w),k(S),k(R),u=!1},d:function(v){v&&O(t),m&&m.d(),d&&d.d(),b&&b.d(),P&&P.d(v),w&&w.d(),S&&S.d(),R&&R.d(),p=!1,_()}};return G("SvelteRegisterBlock",{block:h,id:Fe.name,type:"component",source:"",ctx:e}),h}const Ke="w-full h-full flex flex-col overflow-hidden",ft="w-full h-full flex overflow-hidden",He="flex-1 overflow-x-hidden flex flex-col",Ze="flex-none overflow-x-hidden overflow-y-auto",$e="flex-none overflow-x-hidden overflow-y-auto";function Wt(e,t,o){let n,s,i,r,l,c,a,f,{$$slots:g={},$$scope:y}=t;Lt("AppShell",g,["header","sidebarLeft","pageHeader","default","pageFooter","sidebarRight","footer"]);const u=Et(g);let{scrollbarGutter:p="auto"}=t,{regionPage:_=""}=t,{slotHeader:m="z-10"}=t,{slotSidebarLeft:d="w-auto"}=t,{slotSidebarRight:b="w-auto"}=t,{slotPageHeader:A=""}=t,{slotPageContent:P=""}=t,{slotPageFooter:w=""}=t,{slotFooter:S=""}=t;function R(h){At.call(this,e,h)}return e.$$set=h=>{o(21,t=be(be({},t),je(h))),"scrollbarGutter"in h&&o(0,p=h.scrollbarGutter),"regionPage"in h&&o(1,_=h.regionPage),"slotHeader"in h&&o(11,m=h.slotHeader),"slotSidebarLeft"in h&&o(12,d=h.slotSidebarLeft),"slotSidebarRight"in h&&o(13,b=h.slotSidebarRight),"slotPageHeader"in h&&o(14,A=h.slotPageHeader),"slotPageContent"in h&&o(15,P=h.slotPageContent),"slotPageFooter"in h&&o(16,w=h.slotPageFooter),"slotFooter"in h&&o(17,S=h.slotFooter),"$$scope"in h&&o(18,y=h.$$scope)},e.$capture_state=()=>({scrollbarGutter:p,regionPage:_,slotHeader:m,slotSidebarLeft:d,slotSidebarRight:b,slotPageHeader:A,slotPageContent:P,slotPageFooter:w,slotFooter:S,cBaseAppShell:Ke,cContentArea:ft,cPage:He,cSidebarLeft:Ze,cSidebarRight:$e,classesFooter:f,classesPageFooter:a,classesPageContent:c,classesPageHeader:l,classesSidebarRight:r,classesSidebarLeft:i,classesHeader:s,classesBase:n}),e.$inject_state=h=>{o(21,t=be(be({},t),h)),"scrollbarGutter"in t&&o(0,p=h.scrollbarGutter),"regionPage"in t&&o(1,_=h.regionPage),"slotHeader"in t&&o(11,m=h.slotHeader),"slotSidebarLeft"in t&&o(12,d=h.slotSidebarLeft),"slotSidebarRight"in t&&o(13,b=h.slotSidebarRight),"slotPageHeader"in t&&o(14,A=h.slotPageHeader),"slotPageContent"in t&&o(15,P=h.slotPageContent),"slotPageFooter"in t&&o(16,w=h.slotPageFooter),"slotFooter"in t&&o(17,S=h.slotFooter),"classesFooter"in t&&o(2,f=h.classesFooter),"classesPageFooter"in t&&o(3,a=h.classesPageFooter),"classesPageContent"in t&&o(4,c=h.classesPageContent),"classesPageHeader"in t&&o(5,l=h.classesPageHeader),"classesSidebarRight"in t&&o(6,r=h.classesSidebarRight),"classesSidebarLeft"in t&&o(7,i=h.classesSidebarLeft),"classesHeader"in t&&o(8,s=h.classesHeader),"classesBase"in t&&o(9,n=h.classesBase)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{o(9,n=`${Ke} ${t.class??""}`),e.$$.dirty&2048&&o(8,s=`${m}`),e.$$.dirty&4096&&o(7,i=`${Ze} ${d}`),e.$$.dirty&8192&&o(6,r=`${$e} ${b}`),e.$$.dirty&16384&&o(5,l=`${A}`),e.$$.dirty&32768&&o(4,c=`${P}`),e.$$.dirty&65536&&o(3,a=`${w}`),e.$$.dirty&131072&&o(2,f=`${S}`)},t=je(t),[p,_,f,a,c,l,r,i,s,n,u,m,d,b,A,P,w,S,y,g,R]}class Po extends xt{constructor(t){super(t),Ct(this,t,Wt,Fe,Rt,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17}),G("SvelteRegisterComponent",{component:this,tagName:"AppShell",options:t,id:Fe.name})}get scrollbarGutter(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scrollbarGutter(t){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get regionPage(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set regionPage(t){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotHeader(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotHeader(t){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotSidebarLeft(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotSidebarLeft(t){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotSidebarRight(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotSidebarRight(t){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotPageHeader(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotPageHeader(t){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotPageContent(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotPageContent(t){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotPageFooter(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotPageFooter(t){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get slotFooter(){throw new Error("<AppShell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set slotFooter(t){throw new Error("<AppShell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const ue=Math.min,$=Math.max,ye=Math.round,we=Math.floor,K=e=>({x:e,y:e}),jt={left:"right",right:"left",bottom:"top",top:"bottom"},zt={start:"end",end:"start"};function Te(e,t,o){return $(e,ue(t,o))}function he(e,t){return typeof e=="function"?e(t):e}function ee(e){return e.split("-")[0]}function ge(e){return e.split("-")[1]}function ut(e){return e==="x"?"y":"x"}function Me(e){return e==="y"?"height":"width"}function Se(e){return["top","bottom"].includes(ee(e))?"y":"x"}function Ve(e){return ut(Se(e))}function Ut(e,t,o){o===void 0&&(o=!1);const n=ge(e),s=Ve(e),i=Me(s);let r=s==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(r=ve(r)),[r,ve(r)]}function Gt(e){const t=ve(e);return[De(e),t,De(t)]}function De(e){return e.replace(/start|end/g,t=>zt[t])}function Xt(e,t,o){const n=["left","right"],s=["right","left"],i=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return o?t?s:n:t?n:s;case"left":case"right":return t?i:r;default:return[]}}function Yt(e,t,o,n){const s=ge(e);let i=Xt(ee(e),o==="start",n);return s&&(i=i.map(r=>r+"-"+s),t&&(i=i.concat(i.map(De)))),i}function ve(e){return e.replace(/left|right|bottom|top/g,t=>jt[t])}function qt(e){return{top:0,right:0,bottom:0,left:0,...e}}function dt(e){return typeof e!="number"?qt(e):{top:e,right:e,bottom:e,left:e}}function _e(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function et(e,t,o){let{reference:n,floating:s}=e;const i=Se(t),r=Ve(t),l=Me(r),c=ee(t),a=i==="y",f=n.x+n.width/2-s.width/2,g=n.y+n.height/2-s.height/2,y=n[l]/2-s[l]/2;let u;switch(c){case"top":u={x:f,y:n.y-s.height};break;case"bottom":u={x:f,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:g};break;case"left":u={x:n.x-s.width,y:g};break;default:u={x:n.x,y:n.y}}switch(ge(t)){case"start":u[r]-=y*(o&&a?-1:1);break;case"end":u[r]+=y*(o&&a?-1:1);break}return u}const Qt=async(e,t,o)=>{const{placement:n="bottom",strategy:s="absolute",middleware:i=[],platform:r}=o,l=i.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(t));let a=await r.getElementRects({reference:e,floating:t,strategy:s}),{x:f,y:g}=et(a,n,c),y=n,u={},p=0;for(let _=0;_<l.length;_++){const{name:m,fn:d}=l[_],{x:b,y:A,data:P,reset:w}=await d({x:f,y:g,initialPlacement:n,placement:y,strategy:s,middlewareData:u,rects:a,platform:r,elements:{reference:e,floating:t}});if(f=b??f,g=A??g,u={...u,[m]:{...u[m],...P}},w&&p<=50){p++,typeof w=="object"&&(w.placement&&(y=w.placement),w.rects&&(a=w.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:s}):w.rects),{x:f,y:g}=et(a,y,c)),_=-1;continue}}return{x:f,y:g,placement:y,strategy:s,middlewareData:u}};async function mt(e,t){var o;t===void 0&&(t={});const{x:n,y:s,platform:i,rects:r,elements:l,strategy:c}=e,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:y=!1,padding:u=0}=he(t,e),p=dt(u),m=l[y?g==="floating"?"reference":"floating":g],d=_e(await i.getClippingRect({element:(o=await(i.isElement==null?void 0:i.isElement(m)))==null||o?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:a,rootBoundary:f,strategy:c})),b=g==="floating"?{...r.floating,x:n,y:s}:r.reference,A=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),P=await(i.isElement==null?void 0:i.isElement(A))?await(i.getScale==null?void 0:i.getScale(A))||{x:1,y:1}:{x:1,y:1},w=_e(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:A,strategy:c}):b);return{top:(d.top-w.top+p.top)/P.y,bottom:(w.bottom-d.bottom+p.bottom)/P.y,left:(d.left-w.left+p.left)/P.x,right:(w.right-d.right+p.right)/P.x}}const Ro=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:s,rects:i,platform:r,elements:l,middlewareData:c}=t,{element:a,padding:f=0}=he(e,t)||{};if(a==null)return{};const g=dt(f),y={x:o,y:n},u=Ve(s),p=Me(u),_=await r.getDimensions(a),m=u==="y",d=m?"top":"left",b=m?"bottom":"right",A=m?"clientHeight":"clientWidth",P=i.reference[p]+i.reference[u]-y[u]-i.floating[p],w=y[u]-i.reference[u],S=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let R=S?S[A]:0;(!R||!await(r.isElement==null?void 0:r.isElement(S)))&&(R=l.floating[A]||i.floating[p]);const h=P/2-w/2,H=R/2-_[p]/2-1,v=ue(g[d],H),E=ue(g[b],H),L=v,D=R-_[p]-E,F=R/2-_[p]/2+h,M=Te(L,F,D),V=!c.arrow&&ge(s)!=null&&F!=M&&i.reference[p]/2-(F<L?v:E)-_[p]/2<0,X=V?F<L?F-L:F-D:0;return{[u]:y[u]+X,data:{[u]:M,centerOffset:F-M-X,...V&&{alignmentOffset:X}},reset:V}}}),Eo=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:s,middlewareData:i,rects:r,initialPlacement:l,platform:c,elements:a}=t,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:y,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:_=!0,...m}=he(e,t);if((o=i.arrow)!=null&&o.alignmentOffset)return{};const d=ee(s),b=ee(l)===l,A=await(c.isRTL==null?void 0:c.isRTL(a.floating)),P=y||(b||!_?[ve(l)]:Gt(l));!y&&p!=="none"&&P.push(...Yt(l,_,p,A));const w=[l,...P],S=await mt(t,m),R=[];let h=((n=i.flip)==null?void 0:n.overflows)||[];if(f&&R.push(S[d]),g){const L=Ut(s,r,A);R.push(S[L[0]],S[L[1]])}if(h=[...h,{placement:s,overflows:R}],!R.every(L=>L<=0)){var H,v;const L=(((H=i.flip)==null?void 0:H.index)||0)+1,D=w[L];if(D)return{data:{index:L,overflows:h},reset:{placement:D}};let F=(v=h.filter(M=>M.overflows[0]<=0).sort((M,V)=>M.overflows[1]-V.overflows[1])[0])==null?void 0:v.placement;if(!F)switch(u){case"bestFit":{var E;const M=(E=h.map(V=>[V.placement,V.overflows.filter(X=>X>0).reduce((X,_t)=>X+_t,0)]).sort((V,X)=>V[1]-X[1])[0])==null?void 0:E[0];M&&(F=M);break}case"initialPlacement":F=l;break}if(s!==F)return{reset:{placement:F}}}return{}}}};async function Jt(e,t){const{placement:o,platform:n,elements:s}=e,i=await(n.isRTL==null?void 0:n.isRTL(s.floating)),r=ee(o),l=ge(o),c=Se(o)==="y",a=["left","top"].includes(r)?-1:1,f=i&&c?-1:1,g=he(t,e);let{mainAxis:y,crossAxis:u,alignmentAxis:p}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return l&&typeof p=="number"&&(u=l==="end"?p*-1:p),c?{x:u*f,y:y*a}:{x:y*a,y:u*f}}const Ao=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:n}=t,s=await Jt(t,e);return{x:o+s.x,y:n+s.y,data:s}}}},xo=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:s}=t,{mainAxis:i=!0,crossAxis:r=!1,limiter:l={fn:m=>{let{x:d,y:b}=m;return{x:d,y:b}}},...c}=he(e,t),a={x:o,y:n},f=await mt(t,c),g=Se(ee(s)),y=ut(g);let u=a[y],p=a[g];if(i){const m=y==="y"?"top":"left",d=y==="y"?"bottom":"right",b=u+f[m],A=u-f[d];u=Te(b,u,A)}if(r){const m=g==="y"?"top":"left",d=g==="y"?"bottom":"right",b=p+f[m],A=p-f[d];p=Te(b,p,A)}const _=l.fn({...t,[y]:u,[g]:p});return{..._,data:{x:_.x-o,y:_.y-n}}}}};function Z(e){return ht(e)?(e.nodeName||"").toLowerCase():"#document"}function T(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function J(e){var t;return(t=(ht(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ht(e){return e instanceof Node||e instanceof T(e).Node}function q(e){return e instanceof Element||e instanceof T(e).Element}function U(e){return e instanceof HTMLElement||e instanceof T(e).HTMLElement}function tt(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof T(e).ShadowRoot}function pe(e){const{overflow:t,overflowX:o,overflowY:n,display:s}=B(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(s)}function Kt(e){return["table","td","th"].includes(Z(e))}function Ne(e){const t=Ie(),o=B(e);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Zt(e){let t=de(e);for(;U(t)&&!Pe(t);){if(Ne(t))return t;t=de(t)}return null}function Ie(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Pe(e){return["html","body","#document"].includes(Z(e))}function B(e){return T(e).getComputedStyle(e)}function Re(e){return q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function de(e){if(Z(e)==="html")return e;const t=e.assignedSlot||e.parentNode||tt(e)&&e.host||J(e);return tt(t)?t.host:t}function gt(e){const t=de(e);return Pe(t)?e.ownerDocument?e.ownerDocument.body:e.body:U(t)&&pe(t)?t:gt(t)}function me(e,t,o){var n;t===void 0&&(t=[]),o===void 0&&(o=!0);const s=gt(e),i=s===((n=e.ownerDocument)==null?void 0:n.body),r=T(s);return i?t.concat(r,r.visualViewport||[],pe(s)?s:[],r.frameElement&&o?me(r.frameElement):[]):t.concat(s,me(s,[],o))}function pt(e){const t=B(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const s=U(e),i=s?e.offsetWidth:o,r=s?e.offsetHeight:n,l=ye(o)!==i||ye(n)!==r;return l&&(o=i,n=r),{width:o,height:n,$:l}}function We(e){return q(e)?e:e.contextElement}function fe(e){const t=We(e);if(!U(t))return K(1);const o=t.getBoundingClientRect(),{width:n,height:s,$:i}=pt(t);let r=(i?ye(o.width):o.width)/n,l=(i?ye(o.height):o.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const $t=K(0);function bt(e){const t=T(e);return!Ie()||!t.visualViewport?$t:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function eo(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==T(e)?!1:t}function te(e,t,o,n){t===void 0&&(t=!1),o===void 0&&(o=!1);const s=e.getBoundingClientRect(),i=We(e);let r=K(1);t&&(n?q(n)&&(r=fe(n)):r=fe(e));const l=eo(i,o,n)?bt(i):K(0);let c=(s.left+l.x)/r.x,a=(s.top+l.y)/r.y,f=s.width/r.x,g=s.height/r.y;if(i){const y=T(i),u=n&&q(n)?T(n):n;let p=y.frameElement;for(;p&&n&&u!==y;){const _=fe(p),m=p.getBoundingClientRect(),d=B(p),b=m.left+(p.clientLeft+parseFloat(d.paddingLeft))*_.x,A=m.top+(p.clientTop+parseFloat(d.paddingTop))*_.y;c*=_.x,a*=_.y,f*=_.x,g*=_.y,c+=b,a+=A,p=T(p).frameElement}}return _e({width:f,height:g,x:c,y:a})}function to(e){let{rect:t,offsetParent:o,strategy:n}=e;const s=U(o),i=J(o);if(o===i)return t;let r={scrollLeft:0,scrollTop:0},l=K(1);const c=K(0);if((s||!s&&n!=="fixed")&&((Z(o)!=="body"||pe(i))&&(r=Re(o)),U(o))){const a=te(o);l=fe(o),c.x=a.x+o.clientLeft,c.y=a.y+o.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-r.scrollLeft*l.x+c.x,y:t.y*l.y-r.scrollTop*l.y+c.y}}function oo(e){return Array.from(e.getClientRects())}function wt(e){return te(J(e)).left+Re(e).scrollLeft}function no(e){const t=J(e),o=Re(e),n=e.ownerDocument.body,s=$(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=$(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+wt(e);const l=-o.scrollTop;return B(n).direction==="rtl"&&(r+=$(t.clientWidth,n.clientWidth)-s),{width:s,height:i,x:r,y:l}}function so(e,t){const o=T(e),n=J(e),s=o.visualViewport;let i=n.clientWidth,r=n.clientHeight,l=0,c=0;if(s){i=s.width,r=s.height;const a=Ie();(!a||a&&t==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:i,height:r,x:l,y:c}}function io(e,t){const o=te(e,!0,t==="fixed"),n=o.top+e.clientTop,s=o.left+e.clientLeft,i=U(e)?fe(e):K(1),r=e.clientWidth*i.x,l=e.clientHeight*i.y,c=s*i.x,a=n*i.y;return{width:r,height:l,x:c,y:a}}function ot(e,t,o){let n;if(t==="viewport")n=so(e,o);else if(t==="document")n=no(J(e));else if(q(t))n=io(t,o);else{const s=bt(e);n={...t,x:t.x-s.x,y:t.y-s.y}}return _e(n)}function yt(e,t){const o=de(e);return o===t||!q(o)||Pe(o)?!1:B(o).position==="fixed"||yt(o,t)}function ro(e,t){const o=t.get(e);if(o)return o;let n=me(e,[],!1).filter(l=>q(l)&&Z(l)!=="body"),s=null;const i=B(e).position==="fixed";let r=i?de(e):e;for(;q(r)&&!Pe(r);){const l=B(r),c=Ne(r);!c&&l.position==="fixed"&&(s=null),(i?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||pe(r)&&!c&&yt(e,r))?n=n.filter(f=>f!==r):s=l,r=de(r)}return t.set(e,n),n}function lo(e){let{element:t,boundary:o,rootBoundary:n,strategy:s}=e;const r=[...o==="clippingAncestors"?ro(t,this._c):[].concat(o),n],l=r[0],c=r.reduce((a,f)=>{const g=ot(t,f,s);return a.top=$(g.top,a.top),a.right=ue(g.right,a.right),a.bottom=ue(g.bottom,a.bottom),a.left=$(g.left,a.left),a},ot(t,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function co(e){return pt(e)}function ao(e,t,o){const n=U(t),s=J(t),i=o==="fixed",r=te(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const c=K(0);if(n||!n&&!i)if((Z(t)!=="body"||pe(s))&&(l=Re(t)),n){const a=te(t,!0,i,t);c.x=a.x+t.clientLeft,c.y=a.y+t.clientTop}else s&&(c.x=wt(s));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function nt(e,t){return!U(e)||B(e).position==="fixed"?null:t?t(e):e.offsetParent}function vt(e,t){const o=T(e);if(!U(e))return o;let n=nt(e,t);for(;n&&Kt(n)&&B(n).position==="static";)n=nt(n,t);return n&&(Z(n)==="html"||Z(n)==="body"&&B(n).position==="static"&&!Ne(n))?o:n||Zt(e)||o}const fo=async function(e){let{reference:t,floating:o,strategy:n}=e;const s=this.getOffsetParent||vt,i=this.getDimensions;return{reference:ao(t,await s(o),n),floating:{x:0,y:0,...await i(o)}}};function uo(e){return B(e).direction==="rtl"}const mo={convertOffsetParentRelativeRectToViewportRelativeRect:to,getDocumentElement:J,getClippingRect:lo,getOffsetParent:vt,getElementRects:fo,getClientRects:oo,getDimensions:co,getScale:fe,isElement:q,isRTL:uo};function ho(e,t){let o=null,n;const s=J(e);function i(){clearTimeout(n),o&&o.disconnect(),o=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const{left:a,top:f,width:g,height:y}=e.getBoundingClientRect();if(l||t(),!g||!y)return;const u=we(f),p=we(s.clientWidth-(a+g)),_=we(s.clientHeight-(f+y)),m=we(a),b={rootMargin:-u+"px "+-p+"px "+-_+"px "+-m+"px",threshold:$(0,ue(1,c))||1};let A=!0;function P(w){const S=w[0].intersectionRatio;if(S!==c){if(!A)return r();S?r(!1,S):n=setTimeout(()=>{r(!1,1e-7)},100)}A=!1}try{o=new IntersectionObserver(P,{...b,root:s.ownerDocument})}catch{o=new IntersectionObserver(P,b)}o.observe(e)}return r(!0),i}function Co(e,t,o,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,a=We(e),f=s||i?[...a?me(a):[],...me(t)]:[];f.forEach(d=>{s&&d.addEventListener("scroll",o,{passive:!0}),i&&d.addEventListener("resize",o)});const g=a&&l?ho(a,o):null;let y=-1,u=null;r&&(u=new ResizeObserver(d=>{let[b]=d;b&&b.target===a&&u&&(u.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{u&&u.observe(t)})),o()}),a&&!c&&u.observe(a),u.observe(t));let p,_=c?te(e):null;c&&m();function m(){const d=te(e);_&&(d.x!==_.x||d.y!==_.y||d.width!==_.width||d.height!==_.height)&&o(),_=d,p=requestAnimationFrame(m)}return o(),()=>{f.forEach(d=>{s&&d.removeEventListener("scroll",o),i&&d.removeEventListener("resize",o)}),g&&g(),u&&u.disconnect(),u=null,c&&cancelAnimationFrame(p)}}const Lo=(e,t,o)=>{const n=new Map,s={platform:mo,...o},i={...s.platform,_c:n};return Qt(e,t,{...s,platform:i})};export{Po as A,_o as a,vo as b,wo as c,Lo as d,Co as e,Eo as f,yo as g,xo as h,Ro as i,Ht as m,Ao as o,So as s};