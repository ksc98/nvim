var xn=Object.create;var q=Object.defineProperty,bn=Object.defineProperties,wn=Object.getOwnPropertyDescriptor,vn=Object.getOwnPropertyDescriptors,En=Object.getOwnPropertyNames,ve=Object.getOwnPropertySymbols,In=Object.getPrototypeOf,Ie=Object.prototype.hasOwnProperty,Tn=Object.prototype.propertyIsEnumerable;var Ee=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))Ie.call(t,n)&&Ee(e,n,t[n]);if(ve)for(var n of ve(t))Tn.call(t,n)&&Ee(e,n,t[n]);return e},w=(e,t)=>bn(e,vn(t)),Te=e=>q(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Pn=(e,t)=>{for(var n in t)q(e,n,{get:t[n],enumerable:!0})},Pe=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of En(t))!Ie.call(e,s)&&(n||s!=="default")&&q(e,s,{get:()=>t[s],enumerable:!(r=wn(t,s))||r.enumerable});return e},Ce=(e,t)=>Pe(Te(q(e!=null?xn(In(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Cn=(e=>(t,n)=>e&&e.get(t)||(n=Pe(Te({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var qe=c((Is,Oe)=>{Oe.exports=Re;Re.sync=An;var Ge=require("fs");function Gn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Ae(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Gn(t,n)}function Re(e,t,n){Ge.stat(e,function(r,s){n(r,r?!1:Ae(s,e,t))})}function An(e,t){return Ae(Ge.statSync(e),e,t)}});var Be=c((Ts,ke)=>{ke.exports=_e;_e.sync=Rn;var Ne=require("fs");function _e(e,t,n){Ne.stat(e,function(r,s){n(r,r?!1:$e(s,t))})}function Rn(e,t){return $e(Ne.statSync(e),t)}function $e(e,t){return e.isFile()&&On(e,t)}function On(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),d=parseInt("001",8),p=a|l,S=n&d||n&l&&s===i||n&a&&r===o||n&p&&o===0;return S}});var Me=c((Cs,Le)=>{var Ps=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=qe():j=Be();Le.exports=Z;Z.sync=qn;function Z(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){Z(e,t||{},function(o,i){o?s(o):r(i)})})}j(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function qn(e,t){try{return j.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var Ke=c((Gs,He)=>{var I=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",je=require("path"),Nn=I?";":":",Fe=Me(),Ue=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),De=(e,t)=>{let n=t.colon||Nn,r=e.match(/\//)||I&&e.match(/\\/)?[""]:[...I?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=I?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=I?s.split(n):[""];return I&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},Xe=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=De(e,t),i=[],a=d=>new Promise((p,S)=>{if(d===r.length)return t.all&&i.length?p(i):S(Ue(e));let h=r[d],g=/^".*"$/.test(h)?h.slice(1,-1):h,y=je.join(g,e),x=!g&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;p(l(x,d,0))}),l=(d,p,S)=>new Promise((h,g)=>{if(S===s.length)return h(a(p+1));let y=s[S];Fe(d+y,{pathExt:o},(x,E)=>{if(!x&&E)if(t.all)i.push(d+y);else return h(d+y);return h(l(d,p,S+1))})});return n?a(0).then(d=>n(null,d),n):a(0)},_n=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=De(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,d=je.join(l,e),p=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+d:d;for(let S=0;S<r.length;S++){let h=p+r[S];try{if(Fe.sync(h,{pathExt:s}))if(t.all)o.push(h);else return h}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw Ue(e)};He.exports=Xe;Xe.sync=_n});var ee=c((As,J)=>{"use strict";var We=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};J.exports=We;J.exports.default=We});var Qe=c((Rs,Ye)=>{"use strict";var ze=require("path"),$n=Ke(),kn=ee();function Ve(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=$n.sync(e.command,{path:n[kn({env:n})],pathExt:t?ze.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=ze.resolve(s?e.options.cwd:"",i)),i}function Bn(e){return Ve(e)||Ve(e,!0)}Ye.exports=Bn});var Ze=c((Os,ne)=>{"use strict";var te=/([()\][%!^"`<>&|;, *?])/g;function Ln(e){return e=e.replace(te,"^$1"),e}function Mn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(te,"^$1"),t&&(e=e.replace(te,"^$1")),e}ne.exports.command=Ln;ne.exports.argument=Mn});var et=c((qs,Je)=>{"use strict";Je.exports=/^#!(.*)/});var nt=c((Ns,tt)=>{"use strict";var jn=et();tt.exports=(e="")=>{let t=e.match(jn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var st=c((_s,rt)=>{"use strict";var re=require("fs"),Fn=nt();function Un(e){let n=Buffer.alloc(150),r;try{r=re.openSync(e,"r"),re.readSync(r,n,0,150,0),re.closeSync(r)}catch{}return Fn(n.toString())}rt.exports=Un});var ct=c(($s,at)=>{"use strict";var Dn=require("path"),ot=Qe(),it=Ze(),Xn=st(),Hn=process.platform==="win32",Kn=/\.(?:com|exe)$/i,Wn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function zn(e){e.file=ot(e);let t=e.file&&Xn(e.file);return t?(e.args.unshift(e.file),e.command=t,ot(e)):e.file}function Vn(e){if(!Hn)return e;let t=zn(e),n=!Kn.test(t);if(e.options.forceShell||n){let r=Wn.test(t);e.command=Dn.normalize(e.command),e.command=it.command(e.command),e.args=e.args.map(o=>it.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Yn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Vn(r)}at.exports=Yn});var dt=c((ks,lt)=>{"use strict";var se=process.platform==="win32";function oe(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Qn(e,t){if(!se)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=ut(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function ut(e,t){return se&&e===1&&!t.file?oe(t.original,"spawn"):null}function Zn(e,t){return se&&e===1&&!t.file?oe(t.original,"spawnSync"):null}lt.exports={hookChildProcess:Qn,verifyENOENT:ut,verifyENOENTSync:Zn,notFoundError:oe}});var mt=c((Bs,T)=>{"use strict";var ft=require("child_process"),ie=ct(),ae=dt();function pt(e,t,n){let r=ie(e,t,n),s=ft.spawn(r.command,r.args,r.options);return ae.hookChildProcess(s,r),s}function Jn(e,t,n){let r=ie(e,t,n),s=ft.spawnSync(r.command,r.args,r.options);return s.error=s.error||ae.verifyENOENTSync(s.status,r),s}T.exports=pt;T.exports.spawn=pt;T.exports.sync=Jn;T.exports._parse=ie;T.exports._enoent=ae});var St=c((Ls,ht)=>{"use strict";ht.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var xt=c((Ms,_)=>{"use strict";var N=require("path"),gt=ee(),yt=e=>{e=f({cwd:process.cwd(),path:process.env[gt()],execPath:process.execPath},e);let t,n=N.resolve(e.cwd),r=[];for(;t!==n;)r.push(N.join(n,"node_modules/.bin")),t=n,n=N.resolve(n,"..");let s=N.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(N.delimiter)};_.exports=yt;_.exports.default=yt;_.exports.env=e=>{e=f({env:process.env},e);let t=f({},e.env),n=gt({env:t});return e.path=t[n],t[n]=_.exports(e),t}});var wt=c((js,ce)=>{"use strict";var bt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};ce.exports=bt;ce.exports.default=bt});var Et=c((Fs,U)=>{"use strict";var er=wt(),F=new WeakMap,vt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(F.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return er(o,e),F.set(o,r),o};U.exports=vt;U.exports.default=vt;U.exports.callCount=e=>{if(!F.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return F.get(e)}});var It=c(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.SIGNALS=void 0;var tr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];D.SIGNALS=tr});var ue=c(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.SIGRTMAX=P.getRealtimeSignals=void 0;var nr=function(){let e=Pt-Tt+1;return Array.from({length:e},rr)};P.getRealtimeSignals=nr;var rr=function(e,t){return{name:`SIGRT${t+1}`,number:Tt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Tt=34,Pt=64;P.SIGRTMAX=Pt});var Ct=c(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.getSignals=void 0;var sr=require("os"),or=It(),ir=ue(),ar=function(){let e=(0,ir.getRealtimeSignals)();return[...or.SIGNALS,...e].map(cr)};X.getSignals=ar;var cr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=sr.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var At=c(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.signalsByNumber=C.signalsByName=void 0;var ur=require("os"),Gt=Ct(),lr=ue(),dr=function(){return(0,Gt.getSignals)().reduce(fr,{})},fr=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return w(f({},e),{[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}})},pr=dr();C.signalsByName=pr;var mr=function(){let e=(0,Gt.getSignals)(),t=lr.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>hr(s,e));return Object.assign({},...n)},hr=function(e,t){let n=Sr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:l}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:l}}},Sr=function(e,t){let n=t.find(({name:r})=>ur.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},gr=mr();C.signalsByNumber=gr});var Ot=c((Ks,Rt)=>{"use strict";var{signalsByName:yr}=At(),xr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",br=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:l,isCanceled:d,killed:p,parsed:{options:{timeout:S}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let h=s===void 0?void 0:yr[s].description,g=r&&r.code,x=`Command ${xr({timedOut:l,timeout:S,errorCode:g,signal:s,signalDescription:h,exitCode:o,isCanceled:d})}: ${i}`,E=Object.prototype.toString.call(r)==="[object Error]",L=E?`${x}
${r.message}`:x,M=[L,t,e].filter(Boolean).join(`
`);return E?(r.originalMessage=r.message,r.message=M):r=new Error(M),r.shortMessage=L,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=h,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(l),r.isCanceled=d,r.killed=p&&!l,r};Rt.exports=br});var Nt=c((Ws,le)=>{"use strict";var H=["stdin","stdout","stderr"],wr=e=>H.some(t=>e[t]!==void 0),qt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return H.map(r=>e[r]);if(wr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${H.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,H.length);return Array.from({length:n},(r,s)=>t[s])};le.exports=qt;le.exports.node=e=>{let t=qt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var _t=c((zs,K)=>{K.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&K.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&K.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Mt=c((Vs,R)=>{var u=global.process;typeof u!="object"||!u?R.exports=function(){}:($t=require("assert"),G=_t(),kt=/^win/i.test(u.platform),$=require("events"),typeof $!="function"&&($=$.EventEmitter),u.__signal_exit_emitter__?m=u.__signal_exit_emitter__:(m=u.__signal_exit_emitter__=new $,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),R.exports=function(e,t){if(global.process===u){$t.equal(typeof e,"function","a callback must be provided for exit handler"),A===!1&&de();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){m.removeListener(n,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&W()};return m.on(n,e),r}},W=function(){!A||global.process!==u||(A=!1,G.forEach(function(t){try{u.removeListener(t,z[t])}catch{}}),u.emit=V,u.reallyExit=fe,m.count-=1)},R.exports.unload=W,v=function(t,n,r){m.emitted[t]||(m.emitted[t]=!0,m.emit(t,n,r))},z={},G.forEach(function(e){z[e]=function(){if(u===global.process){var n=u.listeners(e);n.length===m.count&&(W(),v("exit",null,e),v("afterexit",null,e),kt&&e==="SIGHUP"&&(e="SIGINT"),u.kill(u.pid,e))}}}),R.exports.signals=function(){return G},A=!1,de=function(){A||u!==global.process||(A=!0,m.count+=1,G=G.filter(function(t){try{return u.on(t,z[t]),!0}catch{return!1}}),u.emit=Lt,u.reallyExit=Bt)},R.exports.load=de,fe=u.reallyExit,Bt=function(t){u===global.process&&(u.exitCode=t||0,v("exit",u.exitCode,null),v("afterexit",u.exitCode,null),fe.call(u,u.exitCode))},V=u.emit,Lt=function(t,n){if(t==="exit"&&u===global.process){n!==void 0&&(u.exitCode=n);var r=V.apply(this,arguments);return v("exit",u.exitCode,null),v("afterexit",u.exitCode,null),r}else return V.apply(this,arguments)});var $t,G,kt,$,m,W,v,z,A,de,fe,Bt,V,Lt});var Ft=c((Ys,jt)=>{"use strict";var vr=require("os"),Er=Mt(),Ir=1e3*5,Tr=(e,t="SIGTERM",n={})=>{let r=e(t);return Pr(e,t,n,r),r},Pr=(e,t,n,r)=>{if(!Cr(t,n,r))return;let s=Ar(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Cr=(e,{forceKillAfterTimeout:t},n)=>Gr(e)&&t!==!1&&n,Gr=e=>e===vr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Ar=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Ir;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Rr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Or=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},qr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,l)=>{s=setTimeout(()=>{Or(e,n,l)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Nr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},_r=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=Er(()=>{e.kill()});return r.finally(()=>{s()})};jt.exports={spawnedKill:Tr,spawnedCancel:Rr,setupTimeout:qr,validateTimeout:Nr,setExitHandler:_r}});var Dt=c((Qs,Ut)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";Ut.exports=b});var Ht=c((Zs,Xt)=>{"use strict";var{PassThrough:$r}=require("stream");Xt.exports=e=>{e=f({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new $r({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",l=>{a.push(l),s?i=a.length:i+=l.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var Kt=c((Js,k)=>{"use strict";var{constants:kr}=require("buffer"),Br=require("stream"),{promisify:Lr}=require("util"),Mr=Ht(),jr=Lr(Br.pipeline),pe=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function me(e,t){if(!e)throw new Error("Expected a stream");t=f({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=Mr(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=kr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await jr(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new pe)})}),r.getBufferedValue()}k.exports=me;k.exports.buffer=(e,t)=>me(e,w(f({},t),{encoding:"buffer"}));k.exports.array=(e,t)=>me(e,w(f({},t),{array:!0}));k.exports.MaxBufferError=pe});var zt=c((eo,Wt)=>{"use strict";var{PassThrough:Fr}=require("stream");Wt.exports=function(){var e=[],t=new Fr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var Zt=c((to,Qt)=>{"use strict";var Yt=Dt(),Vt=Kt(),Ur=zt(),Dr=(e,t)=>{t===void 0||e.stdin===void 0||(Yt(t)?t.pipe(e.stdin):e.stdin.end(t))},Xr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Ur();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},he=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Se=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Vt(e,{encoding:t,maxBuffer:r}):Vt.buffer(e,{maxBuffer:r})},Hr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=Se(e,{encoding:r,buffer:s,maxBuffer:o}),l=Se(t,{encoding:r,buffer:s,maxBuffer:o}),d=Se(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,l,d])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},he(e,a),he(t,l),he(n,d)])}},Kr=({input:e})=>{if(Yt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Qt.exports={handleInput:Dr,makeAllStream:Xr,getSpawnedResult:Hr,validateInputSync:Kr}});var en=c((no,Jt)=>{"use strict";var Wr=(async()=>{})().constructor.prototype,zr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Wr,e)]),Vr=(e,t)=>{for(let[n,r]of zr){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,w(f({},r),{value:s}))}return e},Yr=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});Jt.exports={mergePromise:Vr,getSpawnedPromise:Yr}});var rn=c((ro,nn)=>{"use strict";var tn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Qr=/^[\w.-]+$/,Zr=/"/g,Jr=e=>typeof e!="string"||Qr.test(e)?e:`"${e.replace(Zr,'\\"')}"`,es=(e,t)=>tn(e,t).join(" "),ts=(e,t)=>tn(e,t).map(n=>Jr(n)).join(" "),ns=/ +/g,rs=e=>{let t=[];for(let n of e.trim().split(ns)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};nn.exports={joinCommand:es,getEscapedCommand:ts,parseCommand:rs}});var dn=c((so,O)=>{"use strict";var ss=require("path"),ge=require("child_process"),os=mt(),is=St(),as=xt(),cs=Et(),Y=Ot(),on=Nt(),{spawnedKill:us,spawnedCancel:ls,setupTimeout:ds,validateTimeout:fs,setExitHandler:ps}=Ft(),{handleInput:ms,getSpawnedResult:hs,makeAllStream:Ss,validateInputSync:gs}=Zt(),{mergePromise:sn,getSpawnedPromise:ys}=en(),{joinCommand:an,parseCommand:cn,getEscapedCommand:un}=rn(),xs=1e3*1e3*100,bs=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?f(f({},process.env),e):e;return n?as.env({env:o,cwd:r,execPath:s}):o},ln=(e,t,n={})=>{let r=os._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=f({maxBuffer:xs,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=bs(n),n.stdio=on(n),process.platform==="win32"&&ss.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},B=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?is(t):t,Q=(e,t,n)=>{let r=ln(e,t,n),s=an(e,t),o=un(e,t);fs(r.options);let i;try{i=ge.spawn(r.file,r.args,r.options)}catch(g){let y=new ge.ChildProcess,x=Promise.reject(Y({error:g,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return sn(y,x)}let a=ys(i),l=ds(i,r.options,a),d=ps(i,r.options,l),p={isCanceled:!1};i.kill=us.bind(null,i.kill.bind(i)),i.cancel=ls.bind(null,i,p);let h=cs(async()=>{let[{error:g,exitCode:y,signal:x,timedOut:E},L,M,yn]=await hs(i,r.options,d),ye=B(r.options,L),xe=B(r.options,M),be=B(r.options,yn);if(g||y!==0||x!==null){let we=Y({error:g,exitCode:y,signal:x,stdout:ye,stderr:xe,all:be,command:s,escapedCommand:o,parsed:r,timedOut:E,isCanceled:p.isCanceled,killed:i.killed});if(!r.options.reject)return we;throw we}return{command:s,escapedCommand:o,exitCode:0,stdout:ye,stderr:xe,all:be,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return ms(i,r.options.input),i.all=Ss(i,r.options),sn(i,h)};O.exports=Q;O.exports.sync=(e,t,n)=>{let r=ln(e,t,n),s=an(e,t),o=un(e,t);gs(r.options);let i;try{i=ge.spawnSync(r.file,r.args,r.options)}catch(d){throw Y({error:d,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=B(r.options,i.stdout,i.error),l=B(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let d=Y({stdout:a,stderr:l,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return d;throw d}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:l,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};O.exports.command=(e,t)=>{let[n,...r]=cn(e);return Q(n,r,t)};O.exports.commandSync=(e,t)=>{let[n,...r]=cn(e);return Q.sync(n,r,t)};O.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=on.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return Q(o,[...i,e,...Array.isArray(t)?t:[]],w(f({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var vs={};Pn(vs,{default:()=>ws});var hn=require("@raycast/api");var fn=Ce(require("node:process"),1),pn=Ce(dn(),1);async function mn(e){if(fn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,pn.default)("osascript",["-e",e]);return t}function Sn(e){return`
    tell application "Spotify"
      if not application "Spotify" is running then
        activate

        set _maxOpenWaitTimeInSeconds to 5
        set _openCounter to 1
        repeat until application "Spotify" is running
          delay 1
          set _openCounter to _openCounter + 1
          if _openCounter > _maxOpenWaitTimeInSeconds then exit repeat
        end repeat
      end if
      ${e}
    end tell`}async function gn(e){await(0,hn.closeMainWindow)(),await mn(e)}var ws=async()=>{let e=Sn("set sound volume to 75");await gn(e)};module.exports=Cn(vs);0&&(module.exports={});
