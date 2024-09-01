"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{4939:function(t,e,i){i.d(e,{j:function(){return r}});var s=i(9010),n=i(6298),r=new class extends s.l{#t;#e;#i;constructor(){super(),this.#i=t=>{if(!n.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}}},2812:function(t,e,i){i.d(e,{R:function(){return a},m:function(){return o}});var s=i(9948),n=i(3494),r=i(924),o=class extends n.F{#s;#n;#r;constructor(t){super(),this.mutationId=t.mutationId,this.#n=t.mutationCache,this.#s=[],this.state=t.state||a(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#s.includes(t)||(this.#s.push(t),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#s=this.#s.filter(e=>e!==t),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#s.length||("pending"===this.state.status?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(t){this.#r=(0,r.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#o({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});let e="pending"===this.state.status,i=!this.#r.canStart();try{if(!e){this.#o({type:"pending",variables:t,isPaused:i}),await this.#n.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#o({type:"pending",context:e,variables:t,isPaused:i})}let s=await this.#r.start();return await this.#n.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#n.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#o({type:"success",data:s}),s}catch(e){try{throw await this.#n.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#n.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#o({type:"error",error:e})}}finally{this.#n.runNext(this)}}#o(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),s.V.batch(()=>{this.#s.forEach(e=>{e.onMutationUpdate(t)}),this.#n.notify({mutation:this,type:"updated",action:t})})}};function a(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},9948:function(t,e,i){i.d(e,{V:function(){return s}});var s=function(){let t=[],e=0,i=t=>{t()},s=t=>{t()},n=t=>setTimeout(t,0),r=s=>{e?t.push(s):n(()=>{i(s)})},o=()=>{let e=t;t=[],e.length&&n(()=>{s(()=>{e.forEach(t=>{i(t)})})})};return{batch:t=>{let i;e++;try{i=t()}finally{--e||o()}return i},batchCalls:t=>(...e)=>{r(()=>{t(...e)})},schedule:r,setNotifyFunction:t=>{i=t},setBatchNotifyFunction:t=>{s=t},setScheduler:t=>{n=t}}}()},9937:function(t,e,i){i.d(e,{N:function(){return r}});var s=i(9010),n=i(6298),r=new class extends s.l{#a=!0;#e;#i;constructor(){super(),this.#i=t=>{if(!n.sk&&window.addEventListener){let e=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#a!==t&&(this.#a=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#a}}},2459:function(t,e,i){i.d(e,{A:function(){return a},z:function(){return u}});var s=i(6298),n=i(9948),r=i(924),o=i(3494),a=class extends o.F{#u;#c;#h;#r;#l;#d;constructor(t){super(),this.#d=!1,this.#l=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#h=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#u=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,s=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#u,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#r?.promise}setOptions(t){this.options={...this.#l,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#h.remove(this)}setData(t,e){let i=(0,s.oE)(this.state.data,t,this.options);return this.#o({data:i,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),i}setState(t,e){this.#o({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#r?.promise;return this.#r?.cancel(t),e?e.then(s.ZT).catch(s.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#u)}isActive(){return this.observers.some(t=>!1!==(0,s.Nc)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,s.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#h.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#r&&(this.#d?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#h.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#o({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let i=new AbortController,n=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#d=!0,i.signal)})},o={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let t=(0,s.cG)(this.options,e),i={queryKey:this.queryKey,meta:this.meta};return(n(i),this.#d=!1,this.options.persister)?this.options.persister(t,i,this):t(i)}};n(o),this.options.behavior?.onFetch(o,this),this.#c=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#o({type:"fetch",meta:o.fetchOptions?.meta});let a=t=>{(0,r.DV)(t)&&t.silent||this.#o({type:"error",error:t}),(0,r.DV)(t)||(this.#h.config.onError?.(t,this),this.#h.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#r=(0,r.Mz)({initialPromise:e?.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:t=>{if(void 0===t){a(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#h.config.onSuccess?.(t,this),this.#h.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:a,onFail:(t,e)=>{this.#o({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0}),this.#r.start()}#o(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...u(e.data,this.options),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if((0,r.DV)(i)&&i.revert&&this.#c)return{...this.#c,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),n.V.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#h.notify({query:this,type:"updated",action:t})})}};function u(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,r.Kw)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}},3494:function(t,e,i){i.d(e,{F:function(){return n}});var s=i(6298),n=class{#f;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,s.PN)(this.gcTime)&&(this.#f=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(s.sk?1/0:3e5))}clearGcTimeout(){this.#f&&(clearTimeout(this.#f),this.#f=void 0)}}},924:function(t,e,i){i.d(e,{DV:function(){return c},Kw:function(){return a},Mz:function(){return h}});var s=i(4939),n=i(9937),r=i(6298);function o(t){return Math.min(1e3*2**t,3e4)}function a(t){return(t??"online")!=="online"||n.N.isOnline()}var u=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function c(t){return t instanceof u}function h(t){let e,i,c,h=!1,l=0,d=!1,f=new Promise((t,e)=>{i=t,c=e}),p=()=>s.j.isFocused()&&("always"===t.networkMode||n.N.isOnline())&&t.canRun(),y=()=>a(t.networkMode)&&t.canRun(),v=s=>{d||(d=!0,t.onSuccess?.(s),e?.(),i(s))},m=i=>{d||(d=!0,t.onError?.(i),e?.(),c(i))},b=()=>new Promise(i=>{e=t=>{(d||p())&&i(t)},t.onPause?.()}).then(()=>{e=void 0,d||t.onContinue?.()}),g=()=>{let e;if(d)return;let i=0===l?t.initialPromise:void 0;try{e=i??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(v).catch(e=>{if(d)return;let i=t.retry??(r.sk?0:3),s=t.retryDelay??o,n="function"==typeof s?s(l,e):s,a=!0===i||"number"==typeof i&&l<i||"function"==typeof i&&i(l,e);if(h||!a){m(e);return}l++,t.onFail?.(l,e),(0,r._v)(n).then(()=>p()?void 0:b()).then(()=>{h?m(e):g()})})};return{promise:f,cancel:e=>{d||(m(new u(e)),t.abort?.())},continue:()=>(e?.(),f),cancelRetry:()=>{h=!0},continueRetry:()=>{h=!1},canStart:y,start:()=>(y()?g():b().then(g),f)}}},9010:function(t,e,i){i.d(e,{l:function(){return s}});var s=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},6298:function(t,e,i){i.d(e,{CN:function(){return F},Ht:function(){return C},KC:function(){return u},Kp:function(){return a},Nc:function(){return c},PN:function(){return o},Rm:function(){return d},SE:function(){return r},VS:function(){return y},VX:function(){return S},X7:function(){return l},Ym:function(){return f},ZT:function(){return n},_v:function(){return g},_x:function(){return h},cG:function(){return O},oE:function(){return w},sk:function(){return s},to:function(){return p}});var s="undefined"==typeof window||"Deno"in globalThis;function n(){}function r(t,e){return"function"==typeof t?t(e):t}function o(t){return"number"==typeof t&&t>=0&&t!==1/0}function a(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e){return"function"==typeof t?t(e):t}function c(t,e){return"function"==typeof t?t(e):t}function h(t,e){let{type:i="all",exact:s,fetchStatus:n,predicate:r,queryKey:o,stale:a}=t;if(o){if(s){if(e.queryHash!==d(o,e.options))return!1}else if(!p(e.queryKey,o))return!1}if("all"!==i){let t=e.isActive();if("active"===i&&!t||"inactive"===i&&t)return!1}return("boolean"!=typeof a||e.isStale()===a)&&(!n||n===e.state.fetchStatus)&&(!r||!!r(e))}function l(t,e){let{exact:i,status:s,predicate:n,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(i){if(f(e.options.mutationKey)!==f(r))return!1}else if(!p(e.options.mutationKey,r))return!1}return(!s||e.state.status===s)&&(!n||!!n(e))}function d(t,e){return(e?.queryKeyHashFn||f)(t)}function f(t){return JSON.stringify(t,(t,e)=>m(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function p(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(i=>!p(t[i],e[i]))}function y(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let i in t)if(t[i]!==e[i])return!1;return!0}function v(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function m(t){if(!b(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!(b(i)&&i.hasOwnProperty("isPrototypeOf"))&&Object.getPrototypeOf(t)===Object.prototype}function b(t){return"[object Object]"===Object.prototype.toString.call(t)}function g(t){return new Promise(e=>{setTimeout(e,t)})}function w(t,e,i){return"function"==typeof i.structuralSharing?i.structuralSharing(t,e):!1!==i.structuralSharing?function t(e,i){if(e===i)return e;let s=v(e)&&v(i);if(s||m(e)&&m(i)){let n=s?e:Object.keys(e),r=n.length,o=s?i:Object.keys(i),a=o.length,u=s?[]:{},c=0;for(let r=0;r<a;r++){let a=s?r:o[r];(!s&&n.includes(a)||s)&&void 0===e[a]&&void 0===i[a]?(u[a]=void 0,c++):(u[a]=t(e[a],i[a]),u[a]===e[a]&&void 0!==e[a]&&c++)}return r===a&&c===r?e:u}return i}(t,e):e}function S(t,e,i=0){let s=[...t,e];return i&&s.length>i?s.slice(1):s}function C(t,e,i=0){let s=[e,...t];return i&&s.length>i?s.slice(0,-1):s}var F=Symbol(),O=(t,e)=>!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==F?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))},3191:function(t,e,i){i.d(e,{NL:function(){return o},aH:function(){return a}});var s=i(2265),n=i(7437),r=s.createContext(void 0),o=t=>{let e=s.useContext(r);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},a=t=>{let{client:e,children:i}=t;return s.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,n.jsx)(r.Provider,{value:e,children:i})}}}]);