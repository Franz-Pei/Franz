"use strict";(self["webpackChunkzpei_library"]=self["webpackChunkzpei_library"]||[]).push([[504],{743:(e,t,r)=>{r.d(t,{Am:()=>F,FA:()=>N,Fy:()=>w,I9:()=>U,Im:()=>L,Ku:()=>W,T9:()=>v,Tj:()=>g,Uj:()=>c,XA:()=>y,ZQ:()=>_,bD:()=>B,cY:()=>b,eX:()=>R,g:()=>O,hp:()=>j,jZ:()=>k,lT:()=>T,lV:()=>S,nr:()=>I,sr:()=>E,tD:()=>V,u:()=>l,yU:()=>m,zW:()=>x});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296===(64512&o)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},o=function(e){const t=[];let r=0,n=0;while(r<e.length){const o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[r++],s=e[r++],a=e[r++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(1023&c))}else{const i=e[r++],s=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;a||(h=64,i||(d=64)),n.push(r[l],r[u],r[d],r[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let o=0;o<e.length;){const t=r[e.charAt(o++)],i=o<e.length,a=i?r[e.charAt(o)]:0;++o;const c=o<e.length,l=c?r[e.charAt(o)]:64;++o;const u=o<e.length,d=u?r[e.charAt(o)]:64;if(++o,null==t||null==a||null==l||null==d)throw new s;const h=t<<2|a>>4;if(n.push(h),64!==l){const e=a<<4&240|l>>2;if(n.push(e),64!==d){const e=l<<6&192|d;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=n(e);return i.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof r.g)return r.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>u().__FIREBASE_DEFAULTS__,h=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(r){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},p=()=>{try{return d()||h()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},m=e=>{const t=g(e);if(!t)return;const r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},v=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=t||"demo-project",o=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(r)),c(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function k(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function C(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(r.g.process)}catch(n){return!1}}function E(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function T(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function I(){return!C()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(r){t(r)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A="FirebaseError";class O extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=A,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,o=this.errors[e],i=o?D(o,r):"Error",s=`${this.serviceName}: ${i} (${n}).`,a=new O(n,s,r);return a}}function D(e,t){return e.replace(P,((e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`}))}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function B(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const o of r){if(!n.includes(o))return!1;const r=e[o],i=t[o];if(M(r)&&M(i)){if(!B(r,i))return!1}else if(r!==i)return!1}for(const o of n)if(!r.includes(o))return!1;return!0}function M(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function U(e){const t={},r=e.replace(/^\?/,"").split("&");return r.forEach((e=>{if(e){const[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){const r=new $(e,t);return r.subscribe.bind(r)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=z(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=q),void 0===n.error&&(n.error=q),void 0===n.complete&&(n.complete=q);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function z(e,t){if("object"!==typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"===typeof e[r])return!0;return!1}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){return e&&e._delegate?e._delegate:e}},953:(e,t,r)=>{r.d(t,{C4:()=>v,EW:()=>Ie,Gc:()=>ge,IG:()=>Ce,IJ:()=>Ne,KR:()=>Oe,Kh:()=>pe,Pr:()=>Me,R1:()=>Le,X2:()=>l,bl:()=>y,fE:()=>we,g8:()=>ye,hZ:()=>R,i9:()=>Ae,ju:()=>_e,o5:()=>c,tB:()=>me,u4:()=>x,ux:()=>ke,yC:()=>s});var n=r(33);
/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let o,i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=o,!e&&o&&(this.index=(o.scopes||(o.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=o;try{return o=this,e()}finally{o=t}}else 0}on(){o=this}off(){o=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e,t=o){t&&t.active&&t.effects.push(e)}function c(){return o}class l{constructor(e,t,r,n){this.fn=e,this.trigger=t,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a(this,n)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,v();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(u(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),y()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=p,t=i;try{return p=!0,i=this,this._runnings++,d(this),this.fn()}finally{h(this),this._runnings--,i=t,p=e}}stop(){this.active&&(d(this),h(this),this.onStop&&this.onStop(),this.active=!1)}}function u(e){return e.value}function d(e){e._trackId++,e._depsLength=0}function h(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)f(e.deps[t],e);e.deps.length=e._depsLength}}function f(e,t){const r=e.get(t);void 0!==r&&t._trackId!==r&&(e.delete(t),0===e.size&&e.cleanup())}let p=!0,g=0;const m=[];function v(){m.push(p),p=!1}function y(){const e=m.pop();p=void 0===e||e}function b(){g++}function w(){g--;while(!g&&k.length)k.shift()()}function _(e,t,r){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&f(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const k=[];function C(e,t,r){b();for(const n of e.keys()){let r;n._dirtyLevel<t&&(null!=r?r:r=e.get(n)===n._trackId)&&(n._shouldSchedule||(n._shouldSchedule=0===n._dirtyLevel),n._dirtyLevel=t),n._shouldSchedule&&(null!=r?r:r=e.get(n)===n._trackId)&&(n.trigger(),n._runnings&&!n.allowRecurse||2===n._dirtyLevel||(n._shouldSchedule=!1,n.scheduler&&k.push(n.scheduler)))}w()}const E=(e,t)=>{const r=new Map;return r.cleanup=e,r.computed=t,r},S=new WeakMap,T=Symbol(""),I=Symbol("");function x(e,t,r){if(p&&i){let t=S.get(e);t||S.set(e,t=new Map);let n=t.get(r);n||t.set(r,n=E((()=>t.delete(r)))),_(i,n,void 0)}}function R(e,t,r,o,i,s){const a=S.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===r&&(0,n.cy)(e)){const e=Number(o);a.forEach(((t,r)=>{("length"===r||!(0,n.Bm)(r)&&r>=e)&&c.push(t)}))}else switch(void 0!==r&&c.push(a.get(r)),t){case"add":(0,n.cy)(e)?(0,n.yI)(r)&&c.push(a.get("length")):(c.push(a.get(T)),(0,n.CE)(e)&&c.push(a.get(I)));break;case"delete":(0,n.cy)(e)||(c.push(a.get(T)),(0,n.CE)(e)&&c.push(a.get(I)));break;case"set":(0,n.CE)(e)&&c.push(a.get(T));break}b();for(const n of c)n&&C(n,4,void 0);w()}const A=(0,n.pD)("__proto__,__v_isRef,__isVue"),O=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(n.Bm)),N=D();function D(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const r=ke(this);for(let t=0,o=this.length;t<o;t++)x(r,"get",t+"");const n=r[t](...e);return-1===n||!1===n?r[t](...e.map(ke)):n}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){v(),b();const r=ke(this)[t].apply(this,e);return w(),y(),r}})),e}function P(e){(0,n.Bm)(e)||(e=String(e));const t=ke(this);return x(t,"has",e),t.hasOwnProperty(e)}class L{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){const o=this._isReadonly,i=this._isShallow;if("__v_isReactive"===t)return!o;if("__v_isReadonly"===t)return o;if("__v_isShallow"===t)return i;if("__v_raw"===t)return r===(o?i?de:ue:i?le:ce).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=(0,n.cy)(e);if(!o){if(s&&(0,n.$3)(N,t))return Reflect.get(N,t,r);if("hasOwnProperty"===t)return P}const a=Reflect.get(e,t,r);return((0,n.Bm)(t)?O.has(t):A(t))?a:(o||x(e,"get",t),i?a:Ae(a)?s&&(0,n.yI)(t)?a:a.value:(0,n.Gv)(a)?o?me(a):pe(a):a)}}class B extends L{constructor(e=!1){super(!1,e)}set(e,t,r,o){let i=e[t];if(!this._isShallow){const t=be(i);if(we(r)||be(r)||(i=ke(i),r=ke(r)),!(0,n.cy)(e)&&Ae(i)&&!Ae(r))return!t&&(i.value=r,!0)}const s=(0,n.cy)(e)&&(0,n.yI)(t)?Number(t)<e.length:(0,n.$3)(e,t),a=Reflect.set(e,t,r,o);return e===ke(o)&&(s?(0,n.$H)(r,i)&&R(e,"set",t,r,i):R(e,"add",t,r)),a}deleteProperty(e,t){const r=(0,n.$3)(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&r&&R(e,"delete",t,void 0,o),i}has(e,t){const r=Reflect.has(e,t);return(0,n.Bm)(t)&&O.has(t)||x(e,"has",t),r}ownKeys(e){return x(e,"iterate",(0,n.cy)(e)?"length":T),Reflect.ownKeys(e)}}class M extends L{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const F=new B,U=new M,j=new B(!0),V=e=>e,$=e=>Reflect.getPrototypeOf(e);function z(e,t,r=!1,o=!1){e=e["__v_raw"];const i=ke(e),s=ke(t);r||((0,n.$H)(t,s)&&x(i,"get",t),x(i,"get",s));const{has:a}=$(i),c=o?V:r?Se:Ee;return a.call(i,t)?c(e.get(t)):a.call(i,s)?c(e.get(s)):void(e!==i&&e.get(t))}function q(e,t=!1){const r=this["__v_raw"],o=ke(r),i=ke(e);return t||((0,n.$H)(e,i)&&x(o,"has",e),x(o,"has",i)),e===i?r.has(e):r.has(e)||r.has(i)}function W(e,t=!1){return e=e["__v_raw"],!t&&x(ke(e),"iterate",T),Reflect.get(e,"size",e)}function K(e,t=!1){t||we(e)||be(e)||(e=ke(e));const r=ke(this),n=$(r),o=n.has.call(r,e);return o||(r.add(e),R(r,"add",e,e)),this}function H(e,t,r=!1){r||we(t)||be(t)||(t=ke(t));const o=ke(this),{has:i,get:s}=$(o);let a=i.call(o,e);a||(e=ke(e),a=i.call(o,e));const c=s.call(o,e);return o.set(e,t),a?(0,n.$H)(t,c)&&R(o,"set",e,t,c):R(o,"add",e,t),this}function G(e){const t=ke(this),{has:r,get:n}=$(t);let o=r.call(t,e);o||(e=ke(e),o=r.call(t,e));const i=n?n.call(t,e):void 0,s=t.delete(e);return o&&R(t,"delete",e,void 0,i),s}function Q(){const e=ke(this),t=0!==e.size,r=void 0,n=e.clear();return t&&R(e,"clear",void 0,void 0,r),n}function X(e,t){return function(r,n){const o=this,i=o["__v_raw"],s=ke(i),a=t?V:e?Se:Ee;return!e&&x(s,"iterate",T),i.forEach(((e,t)=>r.call(n,a(e),a(t),o)))}}function Y(e,t,r){return function(...o){const i=this["__v_raw"],s=ke(i),a=(0,n.CE)(s),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=i[e](...o),d=r?V:t?Se:Ee;return!t&&x(s,"iterate",l?I:T),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function J(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function Z(){const e={get(e){return z(this,e)},get size(){return W(this)},has:q,add:K,set:H,delete:G,clear:Q,forEach:X(!1,!1)},t={get(e){return z(this,e,!1,!0)},get size(){return W(this)},has:q,add(e){return K.call(this,e,!0)},set(e,t){return H.call(this,e,t,!0)},delete:G,clear:Q,forEach:X(!1,!0)},r={get(e){return z(this,e,!0)},get size(){return W(this,!0)},has(e){return q.call(this,e,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:X(!0,!1)},n={get(e){return z(this,e,!0,!0)},get size(){return W(this,!0)},has(e){return q.call(this,e,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:X(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach((o=>{e[o]=Y(o,!1,!1),r[o]=Y(o,!0,!1),t[o]=Y(o,!1,!0),n[o]=Y(o,!0,!0)})),[e,r,t,n]}const[ee,te,re,ne]=Z();function oe(e,t){const r=t?e?ne:re:e?te:ee;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get((0,n.$3)(r,o)&&o in t?r:t,o,i)}const ie={get:oe(!1,!1)},se={get:oe(!1,!0)},ae={get:oe(!0,!1)};const ce=new WeakMap,le=new WeakMap,ue=new WeakMap,de=new WeakMap;function he(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:he((0,n.Zf)(e))}function pe(e){return be(e)?e:ve(e,!1,F,ie,ce)}function ge(e){return ve(e,!1,j,se,le)}function me(e){return ve(e,!0,U,ae,ue)}function ve(e,t,r,o,i){if(!(0,n.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const a=fe(e);if(0===a)return e;const c=new Proxy(e,2===a?o:r);return i.set(e,c),c}function ye(e){return be(e)?ye(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function be(e){return!(!e||!e["__v_isReadonly"])}function we(e){return!(!e||!e["__v_isShallow"])}function _e(e){return!!e&&!!e["__v_raw"]}function ke(e){const t=e&&e["__v_raw"];return t?ke(t):e}function Ce(e){return Object.isExtensible(e)&&(0,n.yQ)(e,"__v_skip",!0),e}const Ee=e=>(0,n.Gv)(e)?pe(e):e,Se=e=>(0,n.Gv)(e)?me(e):e;class Te{constructor(e,t,r,n){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new l((()=>e(this._value)),(()=>Re(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!n,this["__v_isReadonly"]=r}get value(){const e=ke(this);return e._cacheable&&!e.effect.dirty||!(0,n.$H)(e._value,e._value=e.effect.run())||Re(e,4),xe(e),e.effect._dirtyLevel>=2&&Re(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ie(e,t,r=!1){let o,i;const s=(0,n.Tn)(e);s?(o=e,i=n.tE):(o=e.get,i=e.set);const a=new Te(o,i,s||!i,r);return a}function xe(e){var t;p&&i&&(e=ke(e),_(i,null!=(t=e.dep)?t:e.dep=E((()=>e.dep=void 0),e instanceof Te?e:void 0),void 0))}function Re(e,t=4,r,n){e=ke(e);const o=e.dep;o&&C(o,t,void 0)}function Ae(e){return!(!e||!0!==e.__v_isRef)}function Oe(e){return De(e,!1)}function Ne(e){return De(e,!0)}function De(e,t){return Ae(e)?e:new Pe(e,t)}class Pe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ke(e),this._value=t?e:Ee(e)}get value(){return xe(this),this._value}set value(e){const t=this.__v_isShallow||we(e)||be(e);if(e=t?e:ke(e),(0,n.$H)(e,this._rawValue)){const r=this._rawValue;this._rawValue=e,this._value=t?e:Ee(e),Re(this,4,e,r)}}}function Le(e){return Ae(e)?e.value:e}const Be={get:(e,t,r)=>Le(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const o=e[t];return Ae(o)&&!Ae(r)?(o.value=r,!0):Reflect.set(e,t,r,n)}};function Me(e){return ye(e)?e:new Proxy(e,Be)}},641:(e,t,r)=>{r.d(t,{$u:()=>he,CE:()=>sr,Df:()=>X,EW:()=>Hr,FK:()=>Qt,Fv:()=>yr,Gt:()=>Qe,Gy:()=>U,K9:()=>wt,Lk:()=>hr,MZ:()=>Q,OW:()=>K,Q3:()=>br,QP:()=>V,Qi:()=>N,WQ:()=>Xe,bF:()=>fr,bo:()=>L,dY:()=>y,eW:()=>vr,g2:()=>we,h:()=>Gr,jt:()=>D,k6:()=>P,nI:()=>Rr,pI:()=>Ee,pM:()=>Y,pR:()=>q,qL:()=>s,sV:()=>ue,uX:()=>tr,wB:()=>Nt});var n=r(953),o=r(33);function i(e,t,r,n){try{return n?e(...n):e()}catch(o){a(o,t,r)}}function s(e,t,r,n){if((0,o.Tn)(e)){const s=i(e,t,r,n);return s&&(0,o.yL)(s)&&s.catch((e=>{a(e,t,r)})),s}if((0,o.cy)(e)){const o=[];for(let i=0;i<e.length;i++)o.push(s(e[i],t,r,n));return o}}function a(e,t,r,o=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const s=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;while(o){const t=o.ec;if(t)for(let r=0;r<t.length;r++)if(!1===t[r](e,s,a))return;o=o.parent}const c=t.appContext.config.errorHandler;if(c)return(0,n.C4)(),i(c,null,10,[e,s,a]),void(0,n.bl)()}c(e,r,s,o)}function c(e,t,r,n=!0){console.error(e)}let l=!1,u=!1;const d=[];let h=0;const f=[];let p=null,g=0;const m=Promise.resolve();let v=null;function y(e){const t=v||m;return e?t.then(this?e.bind(this):e):t}function b(e){let t=h+1,r=d.length;while(t<r){const n=t+r>>>1,o=d[n],i=T(o);i<e||i===e&&o.pre?t=n+1:r=n}return t}function w(e){d.length&&d.includes(e,l&&e.allowRecurse?h+1:h)||(null==e.id?d.push(e):d.splice(b(e.id),0,e),_())}function _(){l||u||(u=!0,v=m.then(x))}function k(e){const t=d.indexOf(e);t>h&&d.splice(t,1)}function C(e){(0,o.cy)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),_()}function E(e,t,r=(l?h+1:0)){for(0;r<d.length;r++){const t=d[r];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,d.splice(r,1),r--,t()}}}function S(e){if(f.length){const e=[...new Set(f)].sort(((e,t)=>T(e)-T(t)));if(f.length=0,p)return void p.push(...e);for(p=e,g=0;g<p.length;g++){const e=p[g];0,!1!==e.active&&e()}p=null,g=0}}const T=e=>null==e.id?1/0:e.id,I=(e,t)=>{const r=T(e)-T(t);if(0===r){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function x(e){u=!1,l=!0,d.sort(I);o.tE;try{for(h=0;h<d.length;h++){const e=d[h];e&&!1!==e.active&&i(e,e.i,e.i?15:14)}}finally{h=0,d.length=0,S(e),l=!1,v=null,(d.length||f.length)&&x(e)}}let R=null,A=null;function O(e){const t=R;return R=e,A=e&&e.type.__scopeId||null,t}function N(e){A=e}function D(){A=null}function P(e,t=R,r){if(!t)return e;if(e._n)return e;const n=(...r)=>{n._d&&or(-1);const o=O(t);let i;try{i=e(...r)}finally{O(o),n._d&&or(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function L(e,t){if(null===R)return e;const r=qr(R),n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[e,s,a,c=o.MZ]=t[i];e&&((0,o.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&Bt(s),n.push({dir:e,instance:r,value:s,oldValue:void 0,arg:a,modifiers:c}))}return e}function B(e,t,r,o){const i=e.dirs,a=t&&t.dirs;for(let c=0;c<i.length;c++){const l=i[c];a&&(l.oldValue=a[c].value);let u=l.dir[o];u&&((0,n.C4)(),s(u,r,8,[e.el,l,e,t]),(0,n.bl)())}}const M=Symbol("_leaveCb"),F=Symbol("_enterCb");function U(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ue((()=>{e.isMounted=!0})),fe((()=>{e.isUnmounting=!0})),e}const j=[Function,Array],V={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:j,onEnter:j,onAfterEnter:j,onEnterCancelled:j,onBeforeLeave:j,onLeave:j,onAfterLeave:j,onLeaveCancelled:j,onBeforeAppear:j,onAppear:j,onAfterAppear:j,onAppearCancelled:j},$=e=>{const t=e.subTree;return t.component?$(t.component):t},z={name:"BaseTransition",props:V,setup(e,{slots:t}){const r=Rr(),o=U();return()=>{const i=t.default&&X(t.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){let e=!1;for(const t of i)if(t.type!==Yt){0,s=t,e=!0;break}}const a=(0,n.ux)(e),{mode:c}=a;if(o.isLeaving)return H(s);const l=G(s);if(!l)return H(s);let u=K(l,a,o,r,(e=>u=e));Q(l,u);const d=r.subTree,h=d&&G(d);if(h&&h.type!==Yt&&!lr(l,h)&&$(r).type!==Yt){const e=K(h,a,o,r);if(Q(h,e),"out-in"===c&&l.type!==Yt)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,!1!==r.update.active&&(r.effect.dirty=!0,r.update())},H(s);"in-out"===c&&l.type!==Yt&&(e.delayLeave=(e,t,r)=>{const n=W(o,h);n[String(h.key)]=h,e[M]=()=>{t(),e[M]=void 0,delete u.delayedLeave},u.delayedLeave=r})}return s}}},q=z;function W(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function K(e,t,r,n,i){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:u,onEnter:d,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:y,onAppear:b,onAfterAppear:w,onAppearCancelled:_}=t,k=String(e.key),C=W(r,e),E=(e,t)=>{e&&s(e,n,9,t)},S=(e,t)=>{const r=t[1];E(e,t),(0,o.cy)(e)?e.every((e=>e.length<=1))&&r():e.length<=1&&r()},T={mode:c,persisted:l,beforeEnter(t){let n=u;if(!r.isMounted){if(!a)return;n=y||u}t[M]&&t[M](!0);const o=C[k];o&&lr(e,o)&&o.el[M]&&o.el[M](),E(n,[t])},enter(e){let t=d,n=h,o=f;if(!r.isMounted){if(!a)return;t=b||d,n=w||h,o=_||f}let i=!1;const s=e[F]=t=>{i||(i=!0,E(t?o:n,[e]),T.delayedLeave&&T.delayedLeave(),e[F]=void 0)};t?S(t,[e,s]):s()},leave(t,n){const o=String(e.key);if(t[F]&&t[F](!0),r.isUnmounting)return n();E(p,[t]);let i=!1;const s=t[M]=r=>{i||(i=!0,n(),E(r?v:m,[t]),t[M]=void 0,C[o]===e&&delete C[o])};C[o]=e,g?S(g,[t,s]):s()},clone(e){const o=K(e,t,r,n,i);return i&&i(o),o}};return T}function H(e){if(Z(e))return e=mr(e),e.children=null,e}function G(e){if(!Z(e))return e;const{shapeFlag:t,children:r}=e;if(r){if(16&t)return r[0];if(32&t&&(0,o.Tn)(r.default))return r.default()}}function Q(e,t){6&e.shapeFlag&&e.component?Q(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function X(e,t=!1,r){let n=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=null==r?s.key:String(r)+String(null!=s.key?s.key:i);s.type===Qt?(128&s.patchFlag&&o++,n=n.concat(X(s.children,t,a))):(t||s.type!==Yt)&&n.push(null!=a?mr(s,{key:a}):s)}if(o>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}
/*! #__NO_SIDE_EFFECTS__ */function Y(e,t){return(0,o.Tn)(e)?(()=>(0,o.X$)({name:e.name},t,{setup:e}))():e}const J=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Z=e=>e.type.__isKeepAlive;RegExp,RegExp;function ee(e,t){return(0,o.cy)(e)?e.some((e=>ee(e,t))):(0,o.Kg)(e)?e.split(",").includes(t):!!(0,o.gd)(e)&&e.test(t)}function te(e,t){ne(e,"a",t)}function re(e,t){ne(e,"da",t)}function ne(e,t,r=xr){const n=e.__wdc||(e.__wdc=()=>{let t=r;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ae(t,n,r),r){let e=r.parent;while(e&&e.parent)Z(e.parent.vnode)&&oe(n,t,r,e),e=e.parent}}function oe(e,t,r,n){const i=ae(t,e,n,!0);pe((()=>{(0,o.TF)(n[t],i)}),r)}function ie(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function se(e){return 128&e.shapeFlag?e.ssContent:e}function ae(e,t,r=xr,o=!1){if(r){const i=r[e]||(r[e]=[]),a=t.__weh||(t.__weh=(...o)=>{(0,n.C4)();const i=Nr(r),a=s(t,r,e,o);return i(),(0,n.bl)(),a});return o?i.unshift(a):i.push(a),a}}const ce=e=>(t,r=xr)=>{Mr&&"sp"!==e||ae(e,((...e)=>t(...e)),r)},le=ce("bm"),ue=ce("m"),de=ce("bu"),he=ce("u"),fe=ce("bum"),pe=ce("um"),ge=ce("sp"),me=ce("rtg"),ve=ce("rtc");function ye(e,t=xr){ae("ec",e,t)}const be="components";function we(e,t){return ke(be,e,!0,t)||e}const _e=Symbol.for("v-ndc");function ke(e,t,r=!0,n=!1){const i=R||xr;if(i){const r=i.type;if(e===be){const e=Wr(r,!1);if(e&&(e===t||e===(0,o.PT)(t)||e===(0,o.ZH)((0,o.PT)(t))))return r}const s=Ce(i[e]||r[e],t)||Ce(i.appContext[e],t);return!s&&n?r:s}}function Ce(e,t){return e&&(e[t]||e[(0,o.PT)(t)]||e[(0,o.ZH)((0,o.PT)(t))])}function Ee(e,t,r,n){let i;const s=r&&r[n];if((0,o.cy)(e)||(0,o.Kg)(e)){i=new Array(e.length);for(let r=0,n=e.length;r<n;r++)i[r]=t(e[r],r,void 0,s&&s[r])}else if("number"===typeof e){0,i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,s&&s[r])}else if((0,o.Gv)(e))if(e[Symbol.iterator])i=Array.from(e,((e,r)=>t(e,r,void 0,s&&s[r])));else{const r=Object.keys(e);i=new Array(r.length);for(let n=0,o=r.length;n<o;n++){const o=r[n];i[n]=t(e[o],o,n,s&&s[n])}}else i=[];return r&&(r[n]=i),i}const Se=e=>e?Pr(e)?qr(e):Se(e.parent):null,Te=(0,o.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Se(e.parent),$root:e=>Se(e.root),$emit:e=>e.emit,$options:e=>Le(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,w(e.update)}),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>Pt.bind(e)}),Ie=(e,t)=>e!==o.MZ&&!e.__isScriptSetup&&(0,o.$3)(e,t),xe={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:r,setupState:i,data:s,props:a,accessCache:c,type:l,appContext:u}=e;let d;if("$"!==t[0]){const n=c[t];if(void 0!==n)switch(n){case 1:return i[t];case 2:return s[t];case 4:return r[t];case 3:return a[t]}else{if(Ie(i,t))return c[t]=1,i[t];if(s!==o.MZ&&(0,o.$3)(s,t))return c[t]=2,s[t];if((d=e.propsOptions[0])&&(0,o.$3)(d,t))return c[t]=3,a[t];if(r!==o.MZ&&(0,o.$3)(r,t))return c[t]=4,r[t];Ae&&(c[t]=0)}}const h=Te[t];let f,p;return h?("$attrs"===t&&(0,n.u4)(e.attrs,"get",""),h(e)):(f=l.__cssModules)&&(f=f[t])?f:r!==o.MZ&&(0,o.$3)(r,t)?(c[t]=4,r[t]):(p=u.config.globalProperties,(0,o.$3)(p,t)?p[t]:void 0)},set({_:e},t,r){const{data:n,setupState:i,ctx:s}=e;return Ie(i,t)?(i[t]=r,!0):n!==o.MZ&&(0,o.$3)(n,t)?(n[t]=r,!0):!(0,o.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=r,!0))},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:i,propsOptions:s}},a){let c;return!!r[a]||e!==o.MZ&&(0,o.$3)(e,a)||Ie(t,a)||(c=s[0])&&(0,o.$3)(c,a)||(0,o.$3)(n,a)||(0,o.$3)(Te,a)||(0,o.$3)(i.config.globalProperties,a)},defineProperty(e,t,r){return null!=r.get?e._.accessCache[t]=0:(0,o.$3)(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Re(e){return(0,o.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ae=!0;function Oe(e){const t=Le(e),r=e.proxy,i=e.ctx;Ae=!1,t.beforeCreate&&De(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:l,provide:u,inject:d,created:h,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:k,render:C,renderTracked:E,renderTriggered:S,errorCaptured:T,serverPrefetch:I,expose:x,inheritAttrs:R,components:A,directives:O,filters:N}=t,D=null;if(d&&Ne(d,i,D),c)for(const n in c){const e=c[n];(0,o.Tn)(e)&&(i[n]=e.bind(r))}if(s){0;const t=s.call(r,r);0,(0,o.Gv)(t)&&(e.data=(0,n.Kh)(t))}if(Ae=!0,a)for(const n in a){const e=a[n],t=(0,o.Tn)(e)?e.bind(r,r):(0,o.Tn)(e.get)?e.get.bind(r,r):o.tE;0;const s=!(0,o.Tn)(e)&&(0,o.Tn)(e.set)?e.set.bind(r):o.tE,c=Hr({get:t,set:s});Object.defineProperty(i,n,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const n in l)Pe(l[n],i,r,n);if(u){const e=(0,o.Tn)(u)?u.call(r):u;Reflect.ownKeys(e).forEach((t=>{Qe(t,e[t])}))}function P(e,t){(0,o.cy)(t)?t.forEach((t=>e(t.bind(r)))):t&&e(t.bind(r))}if(h&&De(h,e,"c"),P(le,f),P(ue,p),P(de,g),P(he,m),P(te,v),P(re,y),P(ye,T),P(ve,E),P(me,S),P(fe,w),P(pe,k),P(ge,I),(0,o.cy)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>r[e],set:t=>r[e]=t})}))}else e.exposed||(e.exposed={});C&&e.render===o.tE&&(e.render=C),null!=R&&(e.inheritAttrs=R),A&&(e.components=A),O&&(e.directives=O)}function Ne(e,t,r=o.tE){(0,o.cy)(e)&&(e=je(e));for(const i in e){const r=e[i];let s;s=(0,o.Gv)(r)?"default"in r?Xe(r.from||i,r.default,!0):Xe(r.from||i):Xe(r),(0,n.i9)(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}function De(e,t,r){s((0,o.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,r)}function Pe(e,t,r,n){const i=n.includes(".")?Lt(r,n):()=>r[n];if((0,o.Kg)(e)){const r=t[e];(0,o.Tn)(r)&&Nt(i,r)}else if((0,o.Tn)(e))Nt(i,e.bind(r));else if((0,o.Gv)(e))if((0,o.cy)(e))e.forEach((e=>Pe(e,t,r,n)));else{const n=(0,o.Tn)(e.handler)?e.handler.bind(r):t[e.handler];(0,o.Tn)(n)&&Nt(i,n,e)}else 0}function Le(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let l;return c?l=c:i.length||r||n?(l={},i.length&&i.forEach((e=>Be(l,e,a,!0))),Be(l,t,a)):l=t,(0,o.Gv)(t)&&s.set(t,l),l}function Be(e,t,r,n=!1){const{mixins:o,extends:i}=t;i&&Be(e,i,r,!0),o&&o.forEach((t=>Be(e,t,r,!0)));for(const s in t)if(n&&"expose"===s);else{const n=Me[s]||r&&r[s];e[s]=n?n(e[s],t[s]):t[s]}return e}const Me={data:Fe,props:ze,emits:ze,methods:$e,computed:$e,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:$e,directives:$e,watch:qe,provide:Fe,inject:Ue};function Fe(e,t){return t?e?function(){return(0,o.X$)((0,o.Tn)(e)?e.call(this,this):e,(0,o.Tn)(t)?t.call(this,this):t)}:t:e}function Ue(e,t){return $e(je(e),je(t))}function je(e){if((0,o.cy)(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function Ve(e,t){return e?[...new Set([].concat(e,t))]:t}function $e(e,t){return e?(0,o.X$)(Object.create(null),e,t):t}function ze(e,t){return e?(0,o.cy)(e)&&(0,o.cy)(t)?[...new Set([...e,...t])]:(0,o.X$)(Object.create(null),Re(e),Re(null!=t?t:{})):t}function qe(e,t){if(!e)return t;if(!t)return e;const r=(0,o.X$)(Object.create(null),e);for(const n in t)r[n]=Ve(e[n],t[n]);return r}function We(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ke=0;function He(e,t){return function(r,n=null){(0,o.Tn)(r)||(r=(0,o.X$)({},r)),null==n||(0,o.Gv)(n)||(n=null);const i=We(),s=new WeakSet;let a=!1;const c=i.app={_uid:Ke++,_component:r,_props:n,_container:null,_context:i,_instance:null,version:Qr,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,o.Tn)(e.install)?(s.add(e),e.install(c,...t)):(0,o.Tn)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(o,s,l){if(!a){0;const u=fr(r,n);return u.appContext=i,!0===l?l="svg":!1===l&&(l=void 0),s&&t?t(u,o):e(u,o,l),a=!0,c._container=o,o.__vue_app__=c,qr(u.component)}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){const t=Ge;Ge=c;try{return e()}finally{Ge=t}}};return c}}let Ge=null;function Qe(e,t){if(xr){let r=xr.provides;const n=xr.parent&&xr.parent.provides;n===r&&(r=xr.provides=Object.create(n)),r[e]=t}else 0}function Xe(e,t,r=!1){const n=xr||R;if(n||Ge){const i=n?null==n.parent?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Ge._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return r&&(0,o.Tn)(t)?t.call(n&&n.proxy):t}else 0}const Ye={},Je=()=>Object.create(Ye),Ze=e=>Object.getPrototypeOf(e)===Ye;function et(e,t,r,o=!1){const i={},s=Je();e.propsDefaults=Object.create(null),rt(e,t,i,s);for(const n in e.propsOptions[0])n in i||(i[n]=void 0);r?e.props=o?i:(0,n.Gc)(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function tt(e,t,r,i){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,l=(0,n.ux)(s),[u]=e.propsOptions;let d=!1;if(!(i||c>0)||16&c){let n;rt(e,t,s,a)&&(d=!0);for(const i in l)t&&((0,o.$3)(t,i)||(n=(0,o.Tg)(i))!==i&&(0,o.$3)(t,n))||(u?!r||void 0===r[i]&&void 0===r[n]||(s[i]=nt(u,l,i,void 0,e,!0)):delete s[i]);if(a!==l)for(const e in a)t&&(0,o.$3)(t,e)||(delete a[e],d=!0)}else if(8&c){const r=e.vnode.dynamicProps;for(let n=0;n<r.length;n++){let i=r[n];if(jt(e.emitsOptions,i))continue;const c=t[i];if(u)if((0,o.$3)(a,i))c!==a[i]&&(a[i]=c,d=!0);else{const t=(0,o.PT)(i);s[t]=nt(u,l,t,c,e,!1)}else c!==a[i]&&(a[i]=c,d=!0)}}d&&(0,n.hZ)(e.attrs,"set","")}function rt(e,t,r,i){const[s,a]=e.propsOptions;let c,l=!1;if(t)for(let n in t){if((0,o.SU)(n))continue;const u=t[n];let d;s&&(0,o.$3)(s,d=(0,o.PT)(n))?a&&a.includes(d)?(c||(c={}))[d]=u:r[d]=u:jt(e.emitsOptions,n)||n in i&&u===i[n]||(i[n]=u,l=!0)}if(a){const t=(0,n.ux)(r),i=c||o.MZ;for(let n=0;n<a.length;n++){const c=a[n];r[c]=nt(s,t,c,i[c],e,!(0,o.$3)(i,c))}}return l}function nt(e,t,r,n,i,s){const a=e[r];if(null!=a){const e=(0,o.$3)(a,"default");if(e&&void 0===n){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,o.Tn)(e)){const{propsDefaults:o}=i;if(r in o)n=o[r];else{const s=Nr(i);n=o[r]=e.call(null,t),s()}}else n=e}a[0]&&(s&&!e?n=!1:!a[1]||""!==n&&n!==(0,o.Tg)(r)||(n=!0))}return n}const ot=new WeakMap;function it(e,t,r=!1){const n=r?ot:t.propsCache,i=n.get(e);if(i)return i;const s=e.props,a={},c=[];let l=!1;if(!(0,o.Tn)(e)){const n=e=>{l=!0;const[r,n]=it(e,t,!0);(0,o.X$)(a,r),n&&c.push(...n)};!r&&t.mixins.length&&t.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}if(!s&&!l)return(0,o.Gv)(e)&&n.set(e,o.Oj),o.Oj;if((0,o.cy)(s))for(let d=0;d<s.length;d++){0;const e=(0,o.PT)(s[d]);st(e)&&(a[e]=o.MZ)}else if(s){0;for(const e in s){const t=(0,o.PT)(e);if(st(t)){const r=s[e],n=a[t]=(0,o.cy)(r)||(0,o.Tn)(r)?{type:r}:(0,o.X$)({},r),i=n.type;let l=!1,u=!0;if((0,o.cy)(i))for(let e=0;e<i.length;++e){const t=i[e],r=(0,o.Tn)(t)&&t.name;if("Boolean"===r){l=!0;break}"String"===r&&(u=!1)}else l=(0,o.Tn)(i)&&"Boolean"===i.name;n[0]=l,n[1]=u,(l||(0,o.$3)(n,"default"))&&c.push(t)}}}const u=[a,c];return(0,o.Gv)(e)&&n.set(e,u),u}function st(e){return"$"!==e[0]&&!(0,o.SU)(e)}const at=e=>"_"===e[0]||"$stable"===e,ct=e=>(0,o.cy)(e)?e.map(wr):[wr(e)],lt=(e,t,r)=>{if(t._n)return t;const n=P(((...e)=>ct(t(...e))),r);return n._c=!1,n},ut=(e,t,r)=>{const n=e._ctx;for(const i in e){if(at(i))continue;const r=e[i];if((0,o.Tn)(r))t[i]=lt(i,r,n);else if(null!=r){0;const e=ct(r);t[i]=()=>e}}},dt=(e,t)=>{const r=ct(t);e.slots.default=()=>r},ht=(e,t,r)=>{for(const n in t)(r||"_"!==n)&&(e[n]=t[n])},ft=(e,t,r)=>{const n=e.slots=Je();if(32&e.vnode.shapeFlag){const e=t._;e?(ht(n,t,r),r&&(0,o.yQ)(n,"_",e,!0)):ut(t,n)}else t&&dt(e,t)},pt=(e,t,r)=>{const{vnode:n,slots:i}=e;let s=!0,a=o.MZ;if(32&n.shapeFlag){const e=t._;e?r&&1===e?s=!1:ht(i,t,r):(s=!t.$stable,ut(t,i)),a=t}else t&&(dt(e,t),a={default:1});if(s)for(const o in i)at(o)||null!=a[o]||delete i[o]};function gt(e,t,r,s,a=!1){if((0,o.cy)(e))return void e.forEach(((e,n)=>gt(e,t&&((0,o.cy)(t)?t[n]:t),r,s,a)));if(J(s)&&!a)return;const c=4&s.shapeFlag?qr(s.component):s.el,l=a?null:c,{i:u,r:d}=e;const h=t&&t.r,f=u.refs===o.MZ?u.refs={}:u.refs,p=u.setupState;if(null!=h&&h!==d&&((0,o.Kg)(h)?(f[h]=null,(0,o.$3)(p,h)&&(p[h]=null)):(0,n.i9)(h)&&(h.value=null)),(0,o.Tn)(d))i(d,u,12,[l,f]);else{const t=(0,o.Kg)(d),i=(0,n.i9)(d);if(t||i){const n=()=>{if(e.f){const r=t?(0,o.$3)(p,d)?p[d]:f[d]:d.value;a?(0,o.cy)(r)&&(0,o.TF)(r,c):(0,o.cy)(r)?r.includes(c)||r.push(c):t?(f[d]=[c],(0,o.$3)(p,d)&&(p[d]=f[d])):(d.value=[c],e.k&&(f[e.k]=d.value))}else t?(f[d]=l,(0,o.$3)(p,d)&&(p[d]=l)):i&&(d.value=l,e.k&&(f[e.k]=l))};l?(n.id=-1,bt(n,r)):n()}else 0}}const mt=Symbol("_vte"),vt=e=>e.__isTeleport;function yt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,o.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const bt=Gt;function wt(e){return _t(e)}function _t(e,t){yt();const r=(0,o.We)();r.__VUE__=!0;const{insert:i,remove:s,patchProp:a,createElement:c,createText:l,createComment:u,setText:d,setElementText:h,parentNode:f,nextSibling:p,setScopeId:g=o.tE,insertStaticContent:m}=e,v=(e,t,r,n=null,o=null,i=null,s=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!lr(e,t)&&(n=X(e),W(e,o,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:d}=t;switch(l){case Xt:y(e,t,r,n);break;case Yt:b(e,t,r,n);break;case Jt:null==e&&_(t,r,n,s);break;case Qt:P(e,t,r,n,o,i,s,a,c);break;default:1&d?I(e,t,r,n,o,i,s,a,c):6&d?L(e,t,r,n,o,i,s,a,c):(64&d||128&d)&&l.process(e,t,r,n,o,i,s,a,c,te)}null!=u&&o&&gt(u,e&&e.ref,i,t||e,!t)},y=(e,t,r,n)=>{if(null==e)i(t.el=l(t.children),r,n);else{const r=t.el=e.el;t.children!==e.children&&d(r,t.children)}},b=(e,t,r,n)=>{null==e?i(t.el=u(t.children||""),r,n):t.el=e.el},_=(e,t,r,n)=>{[e.el,e.anchor]=m(e.children,t,r,n,e.el,e.anchor)},C=({el:e,anchor:t},r,n)=>{let o;while(e&&e!==t)o=p(e),i(e,r,n),e=o;i(t,r,n)},T=({el:e,anchor:t})=>{let r;while(e&&e!==t)r=p(e),s(e),e=r;s(t)},I=(e,t,r,n,o,i,s,a,c)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?x(t,r,n,o,i,s,a,c):O(e,t,o,i,s,a,c)},x=(e,t,r,n,s,l,u,d)=>{let f,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=e;if(f=e.el=c(e.type,l,g&&g.is,g),8&m?h(f,e.children):16&m&&A(e.children,f,null,n,s,kt(e,l),u,d),y&&B(e,null,n,"created"),R(f,e,e.scopeId,u,n),g){for(const e in g)"value"===e||(0,o.SU)(e)||a(f,e,null,g[e],l,n);"value"in g&&a(f,"value",null,g.value,l),(p=g.onVnodeBeforeMount)&&Er(p,n,e)}y&&B(e,null,n,"beforeMount");const b=Et(s,v);b&&v.beforeEnter(f),i(f,t,r),((p=g&&g.onVnodeMounted)||b||y)&&bt((()=>{p&&Er(p,n,e),b&&v.enter(f),y&&B(e,null,n,"mounted")}),s)},R=(e,t,r,n,o)=>{if(r&&g(e,r),n)for(let i=0;i<n.length;i++)g(e,n[i]);if(o){let r=o.subTree;if(t===r){const t=o.vnode;R(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},A=(e,t,r,n,o,i,s,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?_r(e[l]):wr(e[l]);v(null,c,t,r,n,o,i,s,a)}},O=(e,t,r,n,i,s,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||o.MZ,g=t.props||o.MZ;let m;if(r&&Ct(r,!1),(m=g.onVnodeBeforeUpdate)&&Er(m,r,t,e),f&&B(t,e,r,"beforeUpdate"),r&&Ct(r,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&h(l,""),d?N(e.dynamicChildren,d,l,r,n,kt(t,i),s):c||V(e,t,l,null,r,n,kt(t,i),s,!1),u>0){if(16&u)D(l,p,g,r,i);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,i),4&u&&a(l,"style",p.style,g.style,i),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t],o=p[n],s=g[n];s===o&&"value"!==n||a(l,n,o,s,i,r)}}1&u&&e.children!==t.children&&h(l,t.children)}else c||null!=d||D(l,p,g,r,i);((m=g.onVnodeUpdated)||f)&&bt((()=>{m&&Er(m,r,t,e),f&&B(t,e,r,"updated")}),n)},N=(e,t,r,n,o,i,s)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Qt||!lr(c,l)||70&c.shapeFlag)?f(c.el):r;v(c,l,u,null,n,o,i,s,!0)}},D=(e,t,r,n,i)=>{if(t!==r){if(t!==o.MZ)for(const s in t)(0,o.SU)(s)||s in r||a(e,s,t[s],null,i,n);for(const s in r){if((0,o.SU)(s))continue;const c=r[s],l=t[s];c!==l&&"value"!==s&&a(e,s,l,c,i,n)}"value"in r&&a(e,"value",t.value,r.value,i)}},P=(e,t,r,n,o,s,a,c,u)=>{const d=t.el=e?e.el:l(""),h=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(i(d,r,n),i(h,r,n),A(t.children||[],r,h,o,s,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,r,o,s,a,c),(null!=t.key||o&&t===o.subTree)&&St(e,t,!0)):V(e,t,r,h,o,s,a,c,u)},L=(e,t,r,n,o,i,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,r,n,s,c):M(t,r,n,o,i,s,c):F(e,t,c)},M=(e,t,r,n,o,i,s)=>{const a=e.component=Ir(e,n,o);if(Z(e)&&(a.ctx.renderer=te),Fr(a,!1,s),a.asyncDep){if(o&&o.registerDep(a,U,s),!e.el){const e=a.subTree=fr(Yt);b(null,e,t,r)}}else U(a,e,t,r,o,i,s)},F=(e,t,r)=>{const n=t.component=e.component;if(qt(e,t,r)){if(n.asyncDep&&!n.asyncResolved)return void j(n,t,r);n.next=t,k(n.update),n.effect.dirty=!0,n.update()}else t.el=e.el,n.vnode=t},U=(e,t,r,i,s,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:r,u:n,parent:i,vnode:u}=e;{const r=It(e);if(r)return t&&(t.el=u.el,j(e,t,c)),void r.asyncDep.then((()=>{e.isUnmounted||l()}))}let d,h=t;0,Ct(e,!1),t?(t.el=u.el,j(e,t,c)):t=u,r&&(0,o.DY)(r),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Er(d,i,t,u),Ct(e,!0);const p=Vt(e);0;const g=e.subTree;e.subTree=p,v(g,p,f(g.el),X(g),e,s,a),t.el=p.el,null===h&&Kt(e,p.el),n&&bt(n,s),(d=t.props&&t.props.onVnodeUpdated)&&bt((()=>Er(d,i,t,u)),s)}else{let n;const{el:c,props:l}=t,{bm:u,m:d,parent:h}=e,f=J(t);if(Ct(e,!1),u&&(0,o.DY)(u),!f&&(n=l&&l.onVnodeBeforeMount)&&Er(n,h,t),Ct(e,!0),c&&ne){const r=()=>{e.subTree=Vt(e),ne(c,e.subTree,e,s,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&r())):r()}else{0;const n=e.subTree=Vt(e);0,v(null,n,r,i,e,s,a),t.el=n.el}if(d&&bt(d,s),!f&&(n=l&&l.onVnodeMounted)){const e=t;bt((()=>Er(n,h,e)),s)}(256&t.shapeFlag||h&&J(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&bt(e.a,s),e.isMounted=!0,t=r=i=null}},u=e.effect=new n.X2(l,o.tE,(()=>w(d)),e.scope),d=e.update=()=>{u.dirty&&u.run()};d.i=e,d.id=e.uid,Ct(e,!0),d()},j=(e,t,r)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,tt(e,t.props,o,r),pt(e,t.children,r),(0,n.C4)(),E(e),(0,n.bl)()},V=(e,t,r,n,o,i,s,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(l,d,r,n,o,i,s,a,c);if(256&f)return void $(l,d,r,n,o,i,s,a,c)}8&p?(16&u&&Q(l,o,i),d!==l&&h(r,d)):16&u?16&p?z(l,d,r,n,o,i,s,a,c):Q(l,o,i,!0):(8&u&&h(r,""),16&p&&A(d,r,n,o,i,s,a,c))},$=(e,t,r,n,i,s,a,c,l)=>{e=e||o.Oj,t=t||o.Oj;const u=e.length,d=t.length,h=Math.min(u,d);let f;for(f=0;f<h;f++){const n=t[f]=l?_r(t[f]):wr(t[f]);v(e[f],n,r,null,i,s,a,c,l)}u>d?Q(e,i,s,!0,!1,h):A(t,r,n,i,s,a,c,l,h)},z=(e,t,r,n,i,s,a,c,l)=>{let u=0;const d=t.length;let h=e.length-1,f=d-1;while(u<=h&&u<=f){const n=e[u],o=t[u]=l?_r(t[u]):wr(t[u]);if(!lr(n,o))break;v(n,o,r,null,i,s,a,c,l),u++}while(u<=h&&u<=f){const n=e[h],o=t[f]=l?_r(t[f]):wr(t[f]);if(!lr(n,o))break;v(n,o,r,null,i,s,a,c,l),h--,f--}if(u>h){if(u<=f){const e=f+1,o=e<d?t[e].el:n;while(u<=f)v(null,t[u]=l?_r(t[u]):wr(t[u]),r,o,i,s,a,c,l),u++}}else if(u>f)while(u<=h)W(e[u],i,s,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const e=t[u]=l?_r(t[u]):wr(t[u]);null!=e.key&&m.set(e.key,u)}let y,b=0;const w=f-g+1;let _=!1,k=0;const C=new Array(w);for(u=0;u<w;u++)C[u]=0;for(u=p;u<=h;u++){const n=e[u];if(b>=w){W(n,i,s,!0);continue}let o;if(null!=n.key)o=m.get(n.key);else for(y=g;y<=f;y++)if(0===C[y-g]&&lr(n,t[y])){o=y;break}void 0===o?W(n,i,s,!0):(C[o-g]=u+1,o>=k?k=o:_=!0,v(n,t[o],r,null,i,s,a,c,l),b++)}const E=_?Tt(C):o.Oj;for(y=E.length-1,u=w-1;u>=0;u--){const e=g+u,o=t[e],h=e+1<d?t[e+1].el:n;0===C[u]?v(null,o,r,h,i,s,a,c,l):_&&(y<0||u!==E[y]?q(o,r,h,2):y--)}}},q=(e,t,r,n,o=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void q(e.component.subTree,t,r,n);if(128&u)return void e.suspense.move(t,r,n);if(64&u)return void a.move(e,t,r,te);if(a===Qt){i(s,t,r);for(let e=0;e<l.length;e++)q(l[e],t,r,n);return void i(e.anchor,t,r)}if(a===Jt)return void C(e,t,r);const d=2!==n&&1&u&&c;if(d)if(0===n)c.beforeEnter(s),i(s,t,r),bt((()=>c.enter(s)),o);else{const{leave:e,delayLeave:n,afterLeave:o}=c,a=()=>i(s,t,r),l=()=>{e(s,(()=>{a(),o&&o()}))};n?n(s,a,l):l()}else i(s,t,r)},W=(e,t,r,n=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:h,cacheIndex:f}=e;if(-2===d&&(o=!1),null!=a&&gt(a,null,r,e,!0),null!=f&&(t.renderCache[f]=void 0),256&u)return void t.ctx.deactivate(e);const p=1&u&&h,g=!J(e);let m;if(g&&(m=s&&s.onVnodeBeforeUnmount)&&Er(m,t,e),6&u)G(e.component,r,n);else{if(128&u)return void e.suspense.unmount(r,n);p&&B(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,r,te,n):l&&!l.hasOnce&&(i!==Qt||d>0&&64&d)?Q(l,t,r,!1,!0):(i===Qt&&384&d||!o&&16&u)&&Q(c,t,r),n&&K(e)}(g&&(m=s&&s.onVnodeUnmounted)||p)&&bt((()=>{m&&Er(m,t,e),p&&B(e,null,t,"unmounted")}),r)},K=e=>{const{type:t,el:r,anchor:n,transition:o}=e;if(t===Qt)return void H(r,n);if(t===Jt)return void T(e);const i=()=>{s(r),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:n}=o,s=()=>t(r,i);n?n(e.el,i,s):s()}else i()},H=(e,t)=>{let r;while(e!==t)r=p(e),s(e),e=r;s(t)},G=(e,t,r)=>{const{bum:n,scope:i,update:s,subTree:a,um:c,m:l,a:u}=e;xt(l),xt(u),n&&(0,o.DY)(n),i.stop(),s&&(s.active=!1,W(a,e,t,r)),c&&bt(c,t),bt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,r,n=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)W(e[s],t,r,n,o)},X=e=>{if(6&e.shapeFlag)return X(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),r=t&&t[mt];return r?p(r):t};let Y=!1;const ee=(e,t,r)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,r),Y||(Y=!0,E(),S(),Y=!1),t._vnode=e},te={p:v,um:W,m:q,r:K,mt:M,mc:A,pc:V,pbc:N,n:X,o:e};let re,ne;return t&&([re,ne]=t(te)),{render:ee,hydrate:re,createApp:He(ee,re)}}function kt({type:e,props:t},r){return"svg"===r&&"foreignObject"===e||"mathml"===r&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function Ct({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function Et(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function St(e,t,r=!1){const n=e.children,i=t.children;if((0,o.cy)(n)&&(0,o.cy)(i))for(let o=0;o<n.length;o++){const e=n[o];let t=i[o];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[o]=_r(i[o]),t.el=e.el),r||-2===t.patchFlag||St(e,t)),t.type===Xt&&(t.el=e.el)}}function Tt(e){const t=e.slice(),r=[0];let n,o,i,s,a;const c=e.length;for(n=0;n<c;n++){const c=e[n];if(0!==c){if(o=r[r.length-1],e[o]<c){t[n]=o,r.push(n);continue}i=0,s=r.length-1;while(i<s)a=i+s>>1,e[r[a]]<c?i=a+1:s=a;c<e[r[i]]&&(i>0&&(t[n]=r[i-1]),r[i]=n)}}i=r.length,s=r[i-1];while(i-- >0)r[i]=s,s=t[s];return r}function It(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:It(t)}function xt(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Rt=Symbol.for("v-scx"),At=()=>{{const e=Xe(Rt);return e}};const Ot={};function Nt(e,t,r){return Dt(e,t,r)}function Dt(e,t,{immediate:r,deep:a,flush:c,once:l,onTrack:u,onTrigger:d}=o.MZ){if(t&&l){const e=t;t=(...t)=>{e(...t),T()}}const h=xr,f=e=>!0===a?e:Bt(e,!1===a?1:void 0);let p,g,m=!1,v=!1;if((0,n.i9)(e)?(p=()=>e.value,m=(0,n.fE)(e)):(0,n.g8)(e)?(p=()=>f(e),m=!0):(0,o.cy)(e)?(v=!0,m=e.some((e=>(0,n.g8)(e)||(0,n.fE)(e))),p=()=>e.map((e=>(0,n.i9)(e)?e.value:(0,n.g8)(e)?f(e):(0,o.Tn)(e)?i(e,h,2):void 0))):p=(0,o.Tn)(e)?t?()=>i(e,h,2):()=>(g&&g(),s(e,h,3,[b])):o.tE,t&&a){const e=p;p=()=>Bt(e())}let y,b=e=>{g=E.onStop=()=>{i(e,h,4),g=E.onStop=void 0}};if(Mr){if(b=o.tE,t?r&&s(t,h,3,[p(),v?[]:void 0,b]):p(),"sync"!==c)return o.tE;{const e=At();y=e.__watcherHandles||(e.__watcherHandles=[])}}let _=v?new Array(e.length).fill(Ot):Ot;const k=()=>{if(E.active&&E.dirty)if(t){const e=E.run();(a||m||(v?e.some(((e,t)=>(0,o.$H)(e,_[t]))):(0,o.$H)(e,_)))&&(g&&g(),s(t,h,3,[e,_===Ot?void 0:v&&_[0]===Ot?[]:_,b]),_=e)}else E.run()};let C;k.allowRecurse=!!t,"sync"===c?C=k:"post"===c?C=()=>bt(k,h&&h.suspense):(k.pre=!0,h&&(k.id=h.uid),C=()=>w(k));const E=new n.X2(p,o.tE,C),S=(0,n.o5)(),T=()=>{E.stop(),S&&(0,o.TF)(S.effects,E)};return t?r?k():_=E.run():"post"===c?bt(E.run.bind(E),h&&h.suspense):E.run(),y&&y.push(T),T}function Pt(e,t,r){const n=this.proxy,i=(0,o.Kg)(e)?e.includes(".")?Lt(n,e):()=>n[e]:e.bind(n,n);let s;(0,o.Tn)(t)?s=t:(s=t.handler,r=t);const a=Nr(this),c=Dt(i,s.bind(n),r);return a(),c}function Lt(e,t){const r=t.split(".");return()=>{let t=e;for(let e=0;e<r.length&&t;e++)t=t[r[e]];return t}}function Bt(e,t=1/0,r){if(t<=0||!(0,o.Gv)(e)||e["__v_skip"])return e;if(r=r||new Set,r.has(e))return e;if(r.add(e),t--,(0,n.i9)(e))Bt(e.value,t,r);else if((0,o.cy)(e))for(let n=0;n<e.length;n++)Bt(e[n],t,r);else if((0,o.vM)(e)||(0,o.CE)(e))e.forEach((e=>{Bt(e,t,r)}));else if((0,o.Qd)(e)){for(const n in e)Bt(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Bt(e[n],t,r)}return e}const Mt=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,o.PT)(t)}Modifiers`]||e[`${(0,o.Tg)(t)}Modifiers`];function Ft(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||o.MZ;let i=r;const a=t.startsWith("update:"),c=a&&Mt(n,t.slice(7));let l;c&&(c.trim&&(i=r.map((e=>(0,o.Kg)(e)?e.trim():e))),c.number&&(i=r.map(o.bB)));let u=n[l=(0,o.rU)(t)]||n[l=(0,o.rU)((0,o.PT)(t))];!u&&a&&(u=n[l=(0,o.rU)((0,o.Tg)(t))]),u&&s(u,e,6,i);const d=n[l+"Once"];if(d){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(d,e,6,i)}}function Ut(e,t,r=!1){const n=t.emitsCache,i=n.get(e);if(void 0!==i)return i;const s=e.emits;let a={},c=!1;if(!(0,o.Tn)(e)){const n=e=>{const r=Ut(e,t,!0);r&&(c=!0,(0,o.X$)(a,r))};!r&&t.mixins.length&&t.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}return s||c?((0,o.cy)(s)?s.forEach((e=>a[e]=null)):(0,o.X$)(a,s),(0,o.Gv)(e)&&n.set(e,a),a):((0,o.Gv)(e)&&n.set(e,null),null)}function jt(e,t){return!(!e||!(0,o.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,o.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,o.$3)(e,(0,o.Tg)(t))||(0,o.$3)(e,t))}function Vt(e){const{type:t,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:c,attrs:l,emit:u,render:d,renderCache:h,props:f,data:p,setupState:g,ctx:m,inheritAttrs:v}=e,y=O(e);let b,w;try{if(4&r.shapeFlag){const e=i||n,t=e;b=wr(d.call(t,e,h,f,g,p,m)),w=l}else{const e=t;0,b=wr(e.length>1?e(f,{attrs:l,slots:c,emit:u}):e(f,null)),w=t.props?l:$t(l)}}catch(k){Zt.length=0,a(k,e,1),b=fr(Yt)}let _=b;if(w&&!1!==v){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(s&&e.some(o.CP)&&(w=zt(w,s)),_=mr(_,w,!1,!0))}return r.dirs&&(_=mr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(r.dirs):r.dirs),r.transition&&(_.transition=r.transition),b=_,O(y),b}const $t=e=>{let t;for(const r in e)("class"===r||"style"===r||(0,o.Mp)(r))&&((t||(t={}))[r]=e[r]);return t},zt=(e,t)=>{const r={};for(const n in e)(0,o.CP)(n)&&n.slice(9)in t||(r[n]=e[n]);return r};function qt(e,t,r){const{props:n,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(r&&c>=0))return!(!o&&!a||a&&a.$stable)||n!==s&&(n?!s||Wt(n,s,l):!!s);if(1024&c)return!0;if(16&c)return n?Wt(n,s,l):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t];if(s[r]!==n[r]&&!jt(l,r))return!0}}return!1}function Wt(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const i=n[o];if(t[i]!==e[i]&&!jt(r,i))return!0}return!1}function Kt({vnode:e,parent:t},r){while(t){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n!==e)break;(e=t.vnode).el=r,t=t.parent}}const Ht=e=>e.__isSuspense;function Gt(e,t){t&&t.pendingBranch?(0,o.cy)(e)?t.effects.push(...e):t.effects.push(e):C(e)}const Qt=Symbol.for("v-fgt"),Xt=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),Jt=Symbol.for("v-stc"),Zt=[];let er=null;function tr(e=!1){Zt.push(er=e?null:[])}function rr(){Zt.pop(),er=Zt[Zt.length-1]||null}let nr=1;function or(e){nr+=e,e<0&&er&&(er.hasOnce=!0)}function ir(e){return e.dynamicChildren=nr>0?er||o.Oj:null,rr(),nr>0&&er&&er.push(e),e}function sr(e,t,r,n,o,i){return ir(hr(e,t,r,n,o,i,!0))}function ar(e,t,r,n,o){return ir(fr(e,t,r,n,o,!0))}function cr(e){return!!e&&!0===e.__v_isVNode}function lr(e,t){return e.type===t.type&&e.key===t.key}const ur=({key:e})=>null!=e?e:null,dr=({ref:e,ref_key:t,ref_for:r})=>("number"===typeof e&&(e=""+e),null!=e?(0,o.Kg)(e)||(0,n.i9)(e)||(0,o.Tn)(e)?{i:R,r:e,k:t,f:!!r}:e:null);function hr(e,t=null,r=null,n=0,i=null,s=(e===Qt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ur(t),ref:t&&dr(t),scopeId:A,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:R};return c?(kr(l,r),128&s&&e.normalize(l)):r&&(l.shapeFlag|=(0,o.Kg)(r)?8:16),nr>0&&!a&&er&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&er.push(l),l}const fr=pr;function pr(e,t=null,r=null,i=0,s=null,a=!1){if(e&&e!==_e||(e=Yt),cr(e)){const n=mr(e,t,!0);return r&&kr(n,r),nr>0&&!a&&er&&(6&n.shapeFlag?er[er.indexOf(e)]=n:er.push(n)),n.patchFlag=-2,n}if(Kr(e)&&(e=e.__vccOpts),t){t=gr(t);let{class:e,style:r}=t;e&&!(0,o.Kg)(e)&&(t.class=(0,o.C4)(e)),(0,o.Gv)(r)&&((0,n.ju)(r)&&!(0,o.cy)(r)&&(r=(0,o.X$)({},r)),t.style=(0,o.Tr)(r))}const c=(0,o.Kg)(e)?1:Ht(e)?128:vt(e)?64:(0,o.Gv)(e)?4:(0,o.Tn)(e)?2:0;return hr(e,t,r,i,s,c,a,!0)}function gr(e){return e?(0,n.ju)(e)||Ze(e)?(0,o.X$)({},e):e:null}function mr(e,t,r=!1,n=!1){const{props:i,ref:s,patchFlag:a,children:c,transition:l}=e,u=t?Cr(i||{},t):i,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&ur(u),ref:t&&t.ref?r&&s?(0,o.cy)(s)?s.concat(dr(t)):[s,dr(t)]:dr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Qt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mr(e.ssContent),ssFallback:e.ssFallback&&mr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&Q(d,l.clone(d)),d}function vr(e=" ",t=0){return fr(Xt,null,e,t)}function yr(e,t){const r=fr(Jt,null,e);return r.staticCount=t,r}function br(e="",t=!1){return t?(tr(),ar(Yt,null,e)):fr(Yt,null,e)}function wr(e){return null==e||"boolean"===typeof e?fr(Yt):(0,o.cy)(e)?fr(Qt,null,e.slice()):"object"===typeof e?_r(e):fr(Xt,null,String(e))}function _r(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:mr(e)}function kr(e,t){let r=0;const{shapeFlag:n}=e;if(null==t)t=null;else if((0,o.cy)(t))r=16;else if("object"===typeof t){if(65&n){const r=t.default;return void(r&&(r._c&&(r._d=!1),kr(e,r()),r._c&&(r._d=!0)))}{r=32;const n=t._;n||Ze(t)?3===n&&R&&(1===R.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=R}}else(0,o.Tn)(t)?(t={default:t,_ctx:R},r=32):(t=String(t),64&n?(r=16,t=[vr(t)]):r=8);e.children=t,e.shapeFlag|=r}function Cr(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const e in n)if("class"===e)t.class!==n.class&&(t.class=(0,o.C4)([t.class,n.class]));else if("style"===e)t.style=(0,o.Tr)([t.style,n.style]);else if((0,o.Mp)(e)){const r=t[e],i=n[e];!i||r===i||(0,o.cy)(r)&&r.includes(i)||(t[e]=r?[].concat(r,i):i)}else""!==e&&(t[e]=n[e])}return t}function Er(e,t,r,n=null){s(e,t,7,[r,n])}const Sr=We();let Tr=0;function Ir(e,t,r){const i=e.type,s=(t?t.appContext:e.appContext)||Sr,a={uid:Tr++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new n.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:it(i,s),emitsOptions:Ut(i,s),emit:null,emitted:null,propsDefaults:o.MZ,inheritAttrs:i.inheritAttrs,ctx:o.MZ,data:o.MZ,props:o.MZ,attrs:o.MZ,slots:o.MZ,refs:o.MZ,setupState:o.MZ,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ft.bind(null,a),e.ce&&e.ce(a),a}let xr=null;const Rr=()=>xr||R;let Ar,Or;{const e=(0,o.We)(),t=(t,r)=>{let n;return(n=e[t])||(n=e[t]=[]),n.push(r),e=>{n.length>1?n.forEach((t=>t(e))):n[0](e)}};Ar=t("__VUE_INSTANCE_SETTERS__",(e=>xr=e)),Or=t("__VUE_SSR_SETTERS__",(e=>Mr=e))}const Nr=e=>{const t=xr;return Ar(e),e.scope.on(),()=>{e.scope.off(),Ar(t)}},Dr=()=>{xr&&xr.scope.off(),Ar(null)};function Pr(e){return 4&e.vnode.shapeFlag}let Lr,Br,Mr=!1;function Fr(e,t=!1,r=!1){t&&Or(t);const{props:n,children:o}=e.vnode,i=Pr(e);et(e,n,i,t),ft(e,o,r);const s=i?Ur(e,t):void 0;return t&&Or(!1),s}function Ur(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,xe);const{setup:s}=r;if(s){const r=e.setupContext=s.length>1?zr(e):null,c=Nr(e);(0,n.C4)();const l=i(s,e,0,[e.props,r]);if((0,n.bl)(),c(),(0,o.yL)(l)){if(l.then(Dr,Dr),t)return l.then((r=>{jr(e,r,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else jr(e,l,t)}else Vr(e,t)}function jr(e,t,r){(0,o.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,o.Gv)(t)&&(e.setupState=(0,n.Pr)(t)),Vr(e,r)}function Vr(e,t,r){const i=e.type;if(!e.render){if(!t&&Lr&&!i.render){const t=i.template||Le(e).template;if(t){0;const{isCustomElement:r,compilerOptions:n}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=(0,o.X$)((0,o.X$)({isCustomElement:r,delimiters:s},n),a);i.render=Lr(t,c)}}e.render=i.render||o.tE,Br&&Br(e)}{const t=Nr(e);(0,n.C4)();try{Oe(e)}finally{(0,n.bl)(),t()}}}const $r={get(e,t){return(0,n.u4)(e,"get",""),e[t]}};function zr(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,$r),slots:e.slots,emit:e.emit,expose:t}}function qr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,n.Pr)((0,n.IG)(e.exposed)),{get(t,r){return r in t?t[r]:r in Te?Te[r](e):void 0},has(e,t){return t in e||t in Te}})):e.proxy}function Wr(e,t=!0){return(0,o.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Kr(e){return(0,o.Tn)(e)&&"__vccOpts"in e}const Hr=(e,t)=>{const r=(0,n.EW)(e,t,Mr);return r};function Gr(e,t,r){const n=arguments.length;return 2===n?(0,o.Gv)(t)&&!(0,o.cy)(t)?cr(t)?fr(e,null,[t]):fr(e,t):fr(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):3===n&&cr(r)&&(r=[r]),fr(e,t,r))}const Qr="3.4.35"},751:(e,t,r)=>{r.d(t,{D$:()=>Ie,Ef:()=>Oe,Jo:()=>ye,lH:()=>be,u1:()=>_e});var n=r(641),o=r(33),i=r(953);
/**
* @vue/runtime-dom v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const s="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,l=c&&c.createElement("template"),u={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const o="svg"===t?c.createElementNS(s,e):"mathml"===t?c.createElementNS(a,e):r?c.createElement(e,{is:r}):c.createElement(e);return"select"===e&&n&&null!=n.multiple&&o.setAttribute("multiple",n.multiple),o},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,o,i){const s=r?r.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(t.insertBefore(o.cloneNode(!0),r),o===i||!(o=o.nextSibling))break}else{l.innerHTML="svg"===n?`<svg>${e}</svg>`:"mathml"===n?`<math>${e}</math>`:e;const o=l.content;if("svg"===n||"mathml"===n){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,r)}return[s?s.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},d="transition",h="animation",f=Symbol("_vtc"),p=(e,{slots:t})=>(0,n.h)(n.pR,b(e),t);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,o.X$)({},n.QP,g),v=(e,t=[])=>{(0,o.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},y=e=>!!e&&((0,o.cy)(e)?e.some((e=>e.length>1)):e.length>1);function b(e){const t={};for(const o in e)o in g||(t[o]=e[o]);if(!1===e.css)return t;const{name:r="v",type:n,duration:i,enterFromClass:s=`${r}-enter-from`,enterActiveClass:a=`${r}-enter-active`,enterToClass:c=`${r}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:d=c,leaveFromClass:h=`${r}-leave-from`,leaveActiveClass:f=`${r}-leave-active`,leaveToClass:p=`${r}-leave-to`}=e,m=w(i),b=m&&m[0],_=m&&m[1],{onBeforeEnter:S,onEnter:I,onEnterCancelled:x,onLeave:R,onLeaveCancelled:O,onBeforeAppear:N=S,onAppear:D=I,onAppearCancelled:P=x}=t,L=(e,t,r)=>{C(e,t?d:c),C(e,t?u:a),r&&r()},B=(e,t)=>{e._isLeaving=!1,C(e,h),C(e,p),C(e,f),t&&t()},M=e=>(t,r)=>{const o=e?D:I,i=()=>L(t,e,r);v(o,[t,i]),E((()=>{C(t,e?l:s),k(t,e?d:c),y(o)||T(t,n,b,i)}))};return(0,o.X$)(t,{onBeforeEnter(e){v(S,[e]),k(e,s),k(e,a)},onBeforeAppear(e){v(N,[e]),k(e,l),k(e,u)},onEnter:M(!1),onAppear:M(!0),onLeave(e,t){e._isLeaving=!0;const r=()=>B(e,t);k(e,h),k(e,f),A(),E((()=>{e._isLeaving&&(C(e,h),k(e,p),y(R)||T(e,n,_,r))})),v(R,[e,r])},onEnterCancelled(e){L(e,!1),v(x,[e])},onAppearCancelled(e){L(e,!0),v(P,[e])},onLeaveCancelled(e){B(e),v(O,[e])}})}function w(e){if(null==e)return null;if((0,o.Gv)(e))return[_(e.enter),_(e.leave)];{const t=_(e);return[t,t]}}function _(e){const t=(0,o.Ro)(e);return t}function k(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function C(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const r=e[f];r&&(r.delete(t),r.size||(e[f]=void 0))}function E(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let S=0;function T(e,t,r,n){const o=e._endId=++S,i=()=>{o===e._endId&&n()};if(r)return setTimeout(i,r);const{type:s,timeout:a,propCount:c}=I(e,t);if(!s)return n();const l=s+"end";let u=0;const d=()=>{e.removeEventListener(l,h),i()},h=t=>{t.target===e&&++u>=c&&d()};setTimeout((()=>{u<c&&d()}),a+1),e.addEventListener(l,h)}function I(e,t){const r=window.getComputedStyle(e),n=e=>(r[e]||"").split(", "),o=n(`${d}Delay`),i=n(`${d}Duration`),s=x(o,i),a=n(`${h}Delay`),c=n(`${h}Duration`),l=x(a,c);let u=null,f=0,p=0;t===d?s>0&&(u=d,f=s,p=i.length):t===h?l>0&&(u=h,f=l,p=c.length):(f=Math.max(s,l),u=f>0?s>l?d:h:null,p=u?u===d?i.length:c.length:0);const g=u===d&&/\b(transform|all)(,|$)/.test(n(`${d}Property`).toString());return{type:u,timeout:f,propCount:p,hasTransform:g}}function x(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,r)=>R(t)+R(e[r]))))}function R(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function A(){return document.body.offsetHeight}function O(e,t,r){const n=e[f];n&&(t=(t?[t,...n]:[...n]).join(" ")),null==t?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const N=Symbol("_vod"),D=Symbol("_vsh");const P=Symbol("");const L=/(^|;)\s*display\s*:/;function B(e,t,r){const n=e.style,i=(0,o.Kg)(r);let s=!1;if(r&&!i){if(t)if((0,o.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==r[t]&&F(n,t,"")}else for(const e in t)null==r[e]&&F(n,e,"");for(const e in r)"display"===e&&(s=!0),F(n,e,r[e])}else if(i){if(t!==r){const e=n[P];e&&(r+=";"+e),n.cssText=r,s=L.test(r)}}else t&&e.removeAttribute("style");N in e&&(e[N]=s?n.display:"",e[D]&&(n.display="none"))}const M=/\s*!important$/;function F(e,t,r){if((0,o.cy)(r))r.forEach((r=>F(e,t,r)));else if(null==r&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=V(e,t);M.test(r)?e.setProperty((0,o.Tg)(n),r.replace(M,""),"important"):e[n]=r}}const U=["Webkit","Moz","ms"],j={};function V(e,t){const r=j[t];if(r)return r;let n=(0,o.PT)(t);if("filter"!==n&&n in e)return j[t]=n;n=(0,o.ZH)(n);for(let o=0;o<U.length;o++){const r=U[o]+n;if(r in e)return j[t]=r}return t}const $="http://www.w3.org/1999/xlink";function z(e,t,r,n,i,s=(0,o.J$)(t)){n&&t.startsWith("xlink:")?null==r?e.removeAttributeNS($,t.slice(6,t.length)):e.setAttributeNS($,t,r):null==r||s&&!(0,o.Y2)(r)?e.removeAttribute(t):e.setAttribute(t,s?"":(0,o.Bm)(r)?String(r):r)}function q(e,t,r,n){if("innerHTML"===t||"textContent"===t){if(null==r)return;return void(e[t]=r)}const i=e.tagName;if("value"===t&&"PROGRESS"!==i&&!i.includes("-")){const n="OPTION"===i?e.getAttribute("value")||"":e.value,o=null==r?"":String(r);return n===o&&"_value"in e||(e.value=o),null==r&&e.removeAttribute(t),void(e._value=r)}let s=!1;if(""===r||null==r){const n=typeof e[t];"boolean"===n?r=(0,o.Y2)(r):null==r&&"string"===n?(r="",s=!0):"number"===n&&(r=0,s=!0)}try{e[t]=r}catch(a){0}s&&e.removeAttribute(t)}function W(e,t,r,n){e.addEventListener(t,r,n)}function K(e,t,r,n){e.removeEventListener(t,r,n)}const H=Symbol("_vei");function G(e,t,r,n,o=null){const i=e[H]||(e[H]={}),s=i[t];if(n&&s)s.value=n;else{const[r,a]=X(t);if(n){const s=i[t]=ee(n,o);W(e,r,s,a)}else s&&(K(e,r,s,a),i[t]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function X(e){let t;if(Q.test(e)){let r;t={};while(r=e.match(Q))e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}const r=":"===e[2]?e.slice(3):(0,o.Tg)(e.slice(2));return[r,t]}let Y=0;const J=Promise.resolve(),Z=()=>Y||(J.then((()=>Y=0)),Y=Date.now());function ee(e,t){const r=e=>{if(e._vts){if(e._vts<=r.attached)return}else e._vts=Date.now();(0,n.qL)(te(e,r.value),t,5,[e])};return r.value=e,r.attached=Z(),r}function te(e,t){if((0,o.cy)(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const re=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ne=(e,t,r,n,i,s)=>{const a="svg"===i;"class"===t?O(e,n,a):"style"===t?B(e,r,n):(0,o.Mp)(t)?(0,o.CP)(t)||G(e,t,r,n,s):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):oe(e,t,n,a))?(q(e,t,n),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||z(e,t,n,a,s,"value"!==t)):("true-value"===t?e._trueValue=n:"false-value"===t&&(e._falseValue=n),z(e,t,n,a))};function oe(e,t,r,n){if(n)return"innerHTML"===t||"textContent"===t||!!(t in e&&re(t)&&(0,o.Tn)(r));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!re(t)||!(0,o.Kg)(r))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const ie=new WeakMap,se=new WeakMap,ae=Symbol("_moveCb"),ce=Symbol("_enterCb"),le={name:"TransitionGroup",props:(0,o.X$)({},m,{tag:String,moveClass:String}),setup(e,{slots:t}){const r=(0,n.nI)(),o=(0,n.Gy)();let s,a;return(0,n.$u)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!fe(s[0].el,r.vnode.el,t))return;s.forEach(ue),s.forEach(de);const n=s.filter(he);A(),n.forEach((e=>{const r=e.el,n=r.style;k(r,t),n.transform=n.webkitTransform=n.transitionDuration="";const o=r[ae]=e=>{e&&e.target!==r||e&&!/transform$/.test(e.propertyName)||(r.removeEventListener("transitionend",o),r[ae]=null,C(r,t))};r.addEventListener("transitionend",o)}))})),()=>{const c=(0,i.ux)(e),l=b(c);let u=c.tag||n.FK;if(s=[],a)for(let e=0;e<a.length;e++){const t=a[e];t.el&&t.el instanceof Element&&(s.push(t),(0,n.MZ)(t,(0,n.OW)(t,l,o,r)),ie.set(t,t.el.getBoundingClientRect()))}a=t.default?(0,n.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,n.MZ)(t,(0,n.OW)(t,l,o,r))}return(0,n.bF)(u,null,a)}}};le.props;function ue(e){const t=e.el;t[ae]&&t[ae](),t[ce]&&t[ce]()}function de(e){se.set(e,e.el.getBoundingClientRect())}function he(e){const t=ie.get(e),r=se.get(e),n=t.left-r.left,o=t.top-r.top;if(n||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${n}px,${o}px)`,t.transitionDuration="0s",e}}function fe(e,t,r){const n=e.cloneNode(),o=e[f];o&&o.forEach((e=>{e.split(/\s+/).forEach((e=>e&&n.classList.remove(e)))})),r.split(/\s+/).forEach((e=>e&&n.classList.add(e))),n.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(n);const{hasTransform:s}=I(n);return i.removeChild(n),s}const pe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,o.cy)(t)?e=>(0,o.DY)(t,e):t};function ge(e){e.target.composing=!0}function me(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ve=Symbol("_assign"),ye={created(e,{modifiers:{lazy:t,trim:r,number:n}},i){e[ve]=pe(i);const s=n||i.props&&"number"===i.props.type;W(e,t?"change":"input",(t=>{if(t.target.composing)return;let n=e.value;r&&(n=n.trim()),s&&(n=(0,o.bB)(n)),e[ve](n)})),r&&W(e,"change",(()=>{e.value=e.value.trim()})),t||(W(e,"compositionstart",ge),W(e,"compositionend",me),W(e,"change",me))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:n,trim:i,number:s}},a){if(e[ve]=pe(a),e.composing)return;const c=!s&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,o.bB)(e.value),l=null==t?"":t;if(c!==l){if(document.activeElement===e&&"range"!==e.type){if(n&&t===r)return;if(i&&e.value.trim()===l)return}e.value=l}}},be={deep:!0,created(e,t,r){e[ve]=pe(r),W(e,"change",(()=>{const t=e._modelValue,r=Ce(e),n=e.checked,i=e[ve];if((0,o.cy)(t)){const e=(0,o.u3)(t,r),s=-1!==e;if(n&&!s)i(t.concat(r));else if(!n&&s){const r=[...t];r.splice(e,1),i(r)}}else if((0,o.vM)(t)){const e=new Set(t);n?e.add(r):e.delete(r),i(e)}else i(Ee(e,n))}))},mounted:we,beforeUpdate(e,t,r){e[ve]=pe(r),we(e,t,r)}};function we(e,{value:t,oldValue:r},n){e._modelValue=t,(0,o.cy)(t)?e.checked=(0,o.u3)(t,n.props.value)>-1:(0,o.vM)(t)?e.checked=t.has(n.props.value):t!==r&&(e.checked=(0,o.BX)(t,Ee(e,!0)))}const _e={deep:!0,created(e,{value:t,modifiers:{number:r}},i){const s=(0,o.vM)(t);W(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>r?(0,o.bB)(Ce(e)):Ce(e)));e[ve](e.multiple?s?new Set(t):t:t[0]),e._assigning=!0,(0,n.dY)((()=>{e._assigning=!1}))})),e[ve]=pe(i)},mounted(e,{value:t,modifiers:{number:r}}){ke(e,t)},beforeUpdate(e,t,r){e[ve]=pe(r)},updated(e,{value:t,modifiers:{number:r}}){e._assigning||ke(e,t)}};function ke(e,t,r){const n=e.multiple,i=(0,o.cy)(t);if(!n||i||(0,o.vM)(t)){for(let r=0,s=e.options.length;r<s;r++){const s=e.options[r],a=Ce(s);if(n)if(i){const e=typeof a;s.selected="string"===e||"number"===e?t.some((e=>String(e)===String(a))):(0,o.u3)(t,a)>-1}else s.selected=t.has(a);else if((0,o.BX)(Ce(s),t))return void(e.selectedIndex!==r&&(e.selectedIndex=r))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Ce(e){return"_value"in e?e._value:e.value}function Ee(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const Se=["ctrl","shift","alt","meta"],Te={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Se.some((r=>e[`${r}Key`]&&!t.includes(r)))},Ie=(e,t)=>{const r=e._withMods||(e._withMods={}),n=t.join(".");return r[n]||(r[n]=(r,...n)=>{for(let e=0;e<t.length;e++){const n=Te[t[e]];if(n&&n(r,t))return}return e(r,...n)})},xe=(0,o.X$)({patchProp:ne},u);let Re;function Ae(){return Re||(Re=(0,n.K9)(xe))}const Oe=(...e)=>{const t=Ae().createApp(...e);const{mount:r}=t;return t.mount=e=>{const n=De(e);if(!n)return;const i=t._component;(0,o.Tn)(i)||i.render||i.template||(i.template=n.innerHTML),n.innerHTML="";const s=r(n,!1,Ne(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),s},t};function Ne(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function De(e){if((0,o.Kg)(e)){const t=document.querySelector(e);return t}return e}},33:(e,t,r)=>{
/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function n(e,t){const r=new Set(e.split(","));return t?e=>r.has(e.toLowerCase()):e=>r.has(e)}r.d(t,{$3:()=>f,$H:()=>M,BH:()=>W,BX:()=>re,Bm:()=>_,C4:()=>Y,CE:()=>g,CP:()=>l,DY:()=>F,Gv:()=>k,J$:()=>Z,Kg:()=>w,MZ:()=>o,Mp:()=>c,NO:()=>a,Oj:()=>i,PT:()=>N,Qd:()=>I,Ro:()=>V,SU:()=>R,TF:()=>d,Tg:()=>P,Tn:()=>b,Tr:()=>K,We:()=>z,X$:()=>u,Y2:()=>ee,ZH:()=>L,Zf:()=>T,bB:()=>j,cy:()=>p,gd:()=>y,pD:()=>n,rU:()=>B,tE:()=>s,u3:()=>ne,vM:()=>m,v_:()=>ie,yI:()=>x,yL:()=>C,yQ:()=>U});const o={},i=[],s=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,d=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},h=Object.prototype.hasOwnProperty,f=(e,t)=>h.call(e,t),p=Array.isArray,g=e=>"[object Map]"===S(e),m=e=>"[object Set]"===S(e),v=e=>"[object Date]"===S(e),y=e=>"[object RegExp]"===S(e),b=e=>"function"===typeof e,w=e=>"string"===typeof e,_=e=>"symbol"===typeof e,k=e=>null!==e&&"object"===typeof e,C=e=>(k(e)||b(e))&&b(e.then)&&b(e.catch),E=Object.prototype.toString,S=e=>E.call(e),T=e=>S(e).slice(8,-1),I=e=>"[object Object]"===S(e),x=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A=e=>{const t=Object.create(null);return r=>{const n=t[r];return n||(t[r]=e(r))}},O=/-(\w)/g,N=A((e=>e.replace(O,((e,t)=>t?t.toUpperCase():"")))),D=/\B([A-Z])/g,P=A((e=>e.replace(D,"-$1").toLowerCase())),L=A((e=>e.charAt(0).toUpperCase()+e.slice(1))),B=A((e=>{const t=e?`on${L(e)}`:"";return t})),M=(e,t)=>!Object.is(e,t),F=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},U=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},V=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let $;const z=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{});const q="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",W=n(q);function K(e){if(p(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],o=w(n)?X(n):K(n);if(o)for(const e in o)t[e]=o[e]}return t}if(w(e)||k(e))return e}const H=/;(?![^(]*\))/g,G=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(e){const t={};return e.replace(Q,"").split(H).forEach((e=>{if(e){const r=e.split(G);r.length>1&&(t[r[0].trim()]=r[1].trim())}})),t}function Y(e){let t="";if(w(e))t=e;else if(p(e))for(let r=0;r<e.length;r++){const n=Y(e[r]);n&&(t+=n+" ")}else if(k(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=n(J);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let r=!0;for(let n=0;r&&n<e.length;n++)r=re(e[n],t[n]);return r}function re(e,t){if(e===t)return!0;let r=v(e),n=v(t);if(r||n)return!(!r||!n)&&e.getTime()===t.getTime();if(r=_(e),n=_(t),r||n)return e===t;if(r=p(e),n=p(t),r||n)return!(!r||!n)&&te(e,t);if(r=k(e),n=k(t),r||n){if(!r||!n)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const r in e){const n=e.hasOwnProperty(r),o=t.hasOwnProperty(r);if(n&&!o||!n&&o||!re(e[r],t[r]))return!1}}return String(e)===String(t)}function ne(e,t){return e.findIndex((e=>re(e,t)))}const oe=e=>!(!e||!0!==e.__v_isRef),ie=e=>w(e)?e:null==e?"":p(e)||k(e)&&(e.toString===E||!b(e.toString))?oe(e)?ie(e.value):JSON.stringify(e,se,2):String(e),se=(e,t)=>oe(t)?se(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,r],n)=>(e[ae(t,n)+" =>"]=r,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:_(t)?ae(t):!k(t)||p(t)||I(t)?t:String(t),ae=(e,t="")=>{var r;return _(e)?`Symbol(${null!=(r=e.description)?r:t})`:e}},262:(e,t)=>{t.A=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r}},278:(e,t,r)=>{r.d(t,{y$:()=>ee,i0:()=>oe,aH:()=>ne});var n=r(641),o=r(953);function i(){return s().__VUE_DEVTOOLS_GLOBAL_HOOK__}function s(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof globalThis?globalThis:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",l="plugin:settings:set";let u,d;function h(){var e;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,d=window.performance):"undefined"!==typeof globalThis&&(null===(e=globalThis.perf_hooks)||void 0===e?void 0:e.performance)?(u=!0,d=globalThis.perf_hooks.performance):u=!1),u}function f(){return h()?d.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const r={};if(e.settings)for(const s in e.settings){const t=e.settings[s];r[s]=t.defaultValue}const n=`__vue-devtools-plugin-settings__${e.id}`;let o=Object.assign({},r);try{const e=localStorage.getItem(n),t=JSON.parse(e);Object.assign(o,t)}catch(i){}this.fallbacks={getSettings(){return o},setSettings(e){try{localStorage.setItem(n,JSON.stringify(e))}catch(i){}o=e},now(){return f()}},t&&t.on(l,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((r=>{this.targetQueue.push({method:t,args:e,resolve:r})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function g(e,t){const r=e,n=s(),o=i(),l=a&&r.enableEarlyProxy;if(!o||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const e=l?new p(r,o):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:r,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else o.emit(c,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var m="store";function v(e,t){Object.keys(e).forEach((function(r){return t(e[r],r)}))}function y(e){return null!==e&&"object"===typeof e}function b(e){return e&&"function"===typeof e.then}function w(e,t){return function(){return e(t)}}function _(e,t,r){return t.indexOf(e)<0&&(r&&r.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function k(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var r=e.state;E(e,r,[],e._modules.root,!0),C(e,r,t)}function C(e,t,r){var n=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};v(i,(function(t,r){s[r]=w(t,e),Object.defineProperty(e.getters,r,{get:function(){return s[r]()},enumerable:!0})})),e._state=(0,o.Kh)({data:t}),e.strict&&A(e),n&&r&&e._withCommit((function(){n.data=null}))}function E(e,t,r,n,o){var i=!r.length,s=e._modules.getNamespace(r);if(n.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=n),!i&&!o){var a=O(t,r.slice(0,-1)),c=r[r.length-1];e._withCommit((function(){a[c]=n.state}))}var l=n.context=S(e,s,r);n.forEachMutation((function(t,r){var n=s+r;I(e,n,t,l)})),n.forEachAction((function(t,r){var n=t.root?r:s+r,o=t.handler||t;x(e,n,o,l)})),n.forEachGetter((function(t,r){var n=s+r;R(e,n,t,l)})),n.forEachChild((function(n,i){E(e,t,r.concat(i),n,o)}))}function S(e,t,r){var n=""===t,o={dispatch:n?e.dispatch:function(r,n,o){var i=N(r,n,o),s=i.payload,a=i.options,c=i.type;return a&&a.root||(c=t+c),e.dispatch(c,s)},commit:n?e.commit:function(r,n,o){var i=N(r,n,o),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=t+c),e.commit(c,s,a)}};return Object.defineProperties(o,{getters:{get:n?function(){return e.getters}:function(){return T(e,t)}},state:{get:function(){return O(e.state,r)}}}),o}function T(e,t){if(!e._makeLocalGettersCache[t]){var r={},n=t.length;Object.keys(e.getters).forEach((function(o){if(o.slice(0,n)===t){var i=o.slice(n);Object.defineProperty(r,i,{get:function(){return e.getters[o]},enumerable:!0})}})),e._makeLocalGettersCache[t]=r}return e._makeLocalGettersCache[t]}function I(e,t,r,n){var o=e._mutations[t]||(e._mutations[t]=[]);o.push((function(t){r.call(e,n.state,t)}))}function x(e,t,r,n){var o=e._actions[t]||(e._actions[t]=[]);o.push((function(t){var o=r.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},t);return b(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):o}))}function R(e,t,r,n){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return r(n.state,n.getters,e.state,e.getters)})}function A(e){(0,n.wB)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function O(e,t){return t.reduce((function(e,t){return e[t]}),e)}function N(e,t,r){return y(e)&&e.type&&(r=t,t=e,e=e.type),{type:e,payload:t,options:r}}var D="vuex bindings",P="vuex:mutations",L="vuex:actions",B="vuex",M=0;function F(e,t){g({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[D]},(function(r){r.addTimelineLayer({id:P,label:"Vuex Mutations",color:U}),r.addTimelineLayer({id:L,label:"Vuex Actions",color:U}),r.addInspector({id:B,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),r.on.getInspectorTree((function(r){if(r.app===e&&r.inspectorId===B)if(r.filter){var n=[];W(n,t._modules.root,r.filter,""),r.rootNodes=n}else r.rootNodes=[q(t._modules.root,"")]})),r.on.getInspectorState((function(r){if(r.app===e&&r.inspectorId===B){var n=r.nodeId;T(t,n),r.state=K(G(t._modules,n),"root"===n?t.getters:t._makeLocalGettersCache,n)}})),r.on.editInspectorState((function(r){if(r.app===e&&r.inspectorId===B){var n=r.nodeId,o=r.path;"root"!==n&&(o=n.split("/").filter(Boolean).concat(o)),t._withCommit((function(){r.set(t._state.data,o,r.state.value)}))}})),t.subscribe((function(e,t){var n={};e.payload&&(n.payload=e.payload),n.state=t,r.notifyComponentUpdate(),r.sendInspectorTree(B),r.sendInspectorState(B),r.addTimelineEvent({layerId:P,event:{time:Date.now(),title:e.type,data:n}})})),t.subscribeAction({before:function(e,t){var n={};e.payload&&(n.payload=e.payload),e._id=M++,e._time=Date.now(),n.state=t,r.addTimelineEvent({layerId:L,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:n}})},after:function(e,t){var n={},o=Date.now()-e._time;n.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},e.payload&&(n.payload=e.payload),n.state=t,r.addTimelineEvent({layerId:L,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:n}})}})}))}var U=8702998,j=6710886,V=16777215,$={label:"namespaced",textColor:V,backgroundColor:j};function z(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function q(e,t){return{id:t||"root",label:z(t),tags:e.namespaced?[$]:[],children:Object.keys(e._children).map((function(r){return q(e._children[r],t+r+"/")}))}}function W(e,t,r,n){n.includes(r)&&e.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:t.namespaced?[$]:[]}),Object.keys(t._children).forEach((function(o){W(e,t._children[o],r,n+o+"/")}))}function K(e,t,r){t="root"===r?t:t[r];var n=Object.keys(t),o={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(n.length){var i=H(t);o.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?z(e):e,editable:!1,value:Q((function(){return i[e]}))}}))}return o}function H(e){var t={};return Object.keys(e).forEach((function(r){var n=r.split("/");if(n.length>1){var o=t,i=n.pop();n.forEach((function(e){o[e]||(o[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),o=o[e]._custom.value})),o[i]=Q((function(){return e[r]}))}else t[r]=Q((function(){return e[r]}))})),t}function G(e,t){var r=t.split("/").filter((function(e){return e}));return r.reduce((function(e,n,o){var i=e[n];if(!i)throw new Error('Missing module "'+n+'" for path "'+t+'".');return o===r.length-1?i:i._children}),"root"===t?e:e.root._children)}function Q(e){try{return e()}catch(t){return t}}var X=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=("function"===typeof r?r():r)||{}},Y={namespaced:{configurable:!0}};Y.namespaced.get=function(){return!!this._rawModule.namespaced},X.prototype.addChild=function(e,t){this._children[e]=t},X.prototype.removeChild=function(e){delete this._children[e]},X.prototype.getChild=function(e){return this._children[e]},X.prototype.hasChild=function(e){return e in this._children},X.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},X.prototype.forEachChild=function(e){v(this._children,e)},X.prototype.forEachGetter=function(e){this._rawModule.getters&&v(this._rawModule.getters,e)},X.prototype.forEachAction=function(e){this._rawModule.actions&&v(this._rawModule.actions,e)},X.prototype.forEachMutation=function(e){this._rawModule.mutations&&v(this._rawModule.mutations,e)},Object.defineProperties(X.prototype,Y);var J=function(e){this.register([],e,!1)};function Z(e,t,r){if(t.update(r),r.modules)for(var n in r.modules){if(!t.getChild(n))return void 0;Z(e.concat(n),t.getChild(n),r.modules[n])}}J.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},J.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,r){return t=t.getChild(r),e+(t.namespaced?r+"/":"")}),"")},J.prototype.update=function(e){Z([],this.root,e)},J.prototype.register=function(e,t,r){var n=this;void 0===r&&(r=!0);var o=new X(t,r);if(0===e.length)this.root=o;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],o)}t.modules&&v(t.modules,(function(t,o){n.register(e.concat(o),t,r)}))},J.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),r=e[e.length-1],n=t.getChild(r);n&&n.runtime&&t.removeChild(r)},J.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),r=e[e.length-1];return!!t&&t.hasChild(r)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var r=e.plugins;void 0===r&&(r=[]);var n=e.strict;void 0===n&&(n=!1);var o=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new J(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var i=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,r){return c.call(i,e,t,r)},this.strict=n;var l=this._modules.root.state;E(this,l,[],this._modules.root),C(this,l),r.forEach((function(e){return e(t)}))},re={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||m,this),e.config.globalProperties.$store=this;var r=void 0!==this._devtools&&this._devtools;r&&F(e,this)},re.state.get=function(){return this._state.data},re.state.set=function(e){0},te.prototype.commit=function(e,t,r){var n=this,o=N(e,t,r),i=o.type,s=o.payload,a=(o.options,{type:i,payload:s}),c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(a,n.state)})))},te.prototype.dispatch=function(e,t){var r=this,n=N(e,t),o=n.type,i=n.payload,s={type:o,payload:i},a=this._actions[o];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,r.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){c.then((function(t){try{r._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,r.state)}))}catch(l){0}e(t)}),(function(e){try{r._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,r.state,e)}))}catch(l){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return _(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var r="function"===typeof e?{before:e}:e;return _(r,this._actionSubscribers,t)},te.prototype.watch=function(e,t,r){var o=this;return(0,n.wB)((function(){return e(o.state,o.getters)}),t,Object.assign({},r))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,r){void 0===r&&(r={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),E(this,this.state,e,this._modules.get(e),r.preserveState),C(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var r=O(t.state,e.slice(0,-1));delete r[e[e.length-1]]})),k(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),k(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,re);var ne=ae((function(e,t){var r={};return ie(t).forEach((function(t){var n=t.key,o=t.val;r[n]=function(){var t=this.$store.state,r=this.$store.getters;if(e){var n=ce(this.$store,"mapState",e);if(!n)return;t=n.context.state,r=n.context.getters}return"function"===typeof o?o.call(this,t,r):t[o]},r[n].vuex=!0})),r})),oe=(ae((function(e,t){var r={};return ie(t).forEach((function(t){var n=t.key,o=t.val;r[n]=function(){var t=[],r=arguments.length;while(r--)t[r]=arguments[r];var n=this.$store.commit;if(e){var i=ce(this.$store,"mapMutations",e);if(!i)return;n=i.context.commit}return"function"===typeof o?o.apply(this,[n].concat(t)):n.apply(this.$store,[o].concat(t))}})),r})),ae((function(e,t){var r={};return ie(t).forEach((function(t){var n=t.key,o=t.val;o=e+o,r[n]=function(){if(!e||ce(this.$store,"mapGetters",e))return this.$store.getters[o]},r[n].vuex=!0})),r})),ae((function(e,t){var r={};return ie(t).forEach((function(t){var n=t.key,o=t.val;r[n]=function(){var t=[],r=arguments.length;while(r--)t[r]=arguments[r];var n=this.$store.dispatch;if(e){var i=ce(this.$store,"mapActions",e);if(!i)return;n=i.context.dispatch}return"function"===typeof o?o.apply(this,[n].concat(t)):n.apply(this.$store,[o].concat(t))}})),r})));function ie(e){return se(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function se(e){return Array.isArray(e)||y(e)}function ae(e){return function(t,r){return"string"!==typeof t?(r=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,r)}}function ce(e,t,r){var n=e._modulesNamespaceMap[r];return n}},928:(e,t,r)=>{r.d(t,{MF:()=>ye,j6:()=>fe,xZ:()=>pe,om:()=>he,Sx:()=>we,Wp:()=>be,KO:()=>_e});var n=r(125),o=r(424),i=r(743);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(k(e.result)),n()},i=()=>{r(e.error),n()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),g.set(t,e),t}function v(e){if(h.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),n()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));h.set(e,t)}let y={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return k(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(C(this),t),k(d.get(this))}:function(...t){return k(e.apply(C(this),t))}:function(t,...r){const n=e.call(C(this),t,...r);return f.set(n,t.sort?t.sort():[t]),k(n)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),s(e,l())?new Proxy(e,y):e)}function k(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const C=e=>g.get(e);function E(e,t,{blocked:r,upgrade:n,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=k(s);return n&&s.addEventListener("upgradeneeded",(e=>{n(k(s.result),e.oldVersion,e.newVersion,k(s.transaction),e)})),r&&s.addEventListener("blocked",(e=>r(e.oldVersion,e.newVersion,e))),a.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],I=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(I.get(t))return I.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,o=T.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!S.includes(r))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),o&&i.done]))[0]};return I.set(t,i),i}b((e=>({...e,get:(t,r,n)=>x(t,r)||e.get(t,r,n),has:(t,r)=>!!x(t,r)||e.has(t,r)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(A(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function A(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const O="@firebase/app",N="0.10.10",D=new o.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",B="@firebase/analytics",M="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",V="@firebase/database",$="@firebase/database-compat",z="@firebase/functions",q="@firebase/functions-compat",W="@firebase/installations",K="@firebase/installations-compat",H="@firebase/messaging",G="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",re="@firebase/vertexai-preview",ne="@firebase/firestore-compat",oe="firebase",ie="10.13.1",se="[DEFAULT]",ae={[O]:"fire-core",[P]:"fire-core-compat",[B]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[M]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[V]:"fire-rtdb",[$]:"fire-rtdb-compat",[z]:"fire-fn",[q]:"fire-fn-compat",[W]:"fire-iid",[K]:"fire-iid-compat",[H]:"fire-fcm",[G]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat",[re]:"fire-vertex","fire-js":"fire-js",[oe]:"fire-js-all"},ce=new Map,le=new Map,ue=new Map;function de(e,t){try{e.container.addComponent(t)}catch(r){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function he(e){const t=e.name;if(ue.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;ue.set(t,e);for(const r of ce.values())de(r,e);for(const r of le.values())de(r,e);return!0}function fe(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function pe(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},me=new i.FA("app","Firebase",ge);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new n.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye=ie;function be(e,t={}){let r=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),s=o.name;if("string"!==typeof s||!s)throw me.create("bad-app-name",{appName:String(s)});if(r||(r=(0,i.T9)()),!r)throw me.create("no-options");const a=ce.get(s);if(a){if((0,i.bD)(r,a.options)&&(0,i.bD)(o,a.config))return a;throw me.create("duplicate-app",{appName:s})}const c=new n.h1(s);for(const n of ue.values())c.addComponent(n);const l=new ve(r,o,c);return ce.set(s,l),l}function we(e=se){const t=ce.get(e);if(!t&&e===se&&(0,i.T9)())return be();if(!t)throw me.create("no-app",{appName:e});return t}function _e(e,t,r){var o;let i=null!==(o=ae[e])&&void 0!==o?o:e;r&&(i+=`-${r}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}he(new n.uA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ke="firebase-heartbeat-database",Ce=1,Ee="firebase-heartbeat-store";let Se=null;function Te(){return Se||(Se=E(ke,Ce,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ee)}catch(r){console.warn(r)}}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),Se}async function Ie(e){try{const t=await Te(),r=t.transaction(Ee),n=await r.objectStore(Ee).get(Re(e));return await r.done,n}catch(t){if(t instanceof i.g)D.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function xe(e,t){try{const r=await Te(),n=r.transaction(Ee,"readwrite"),o=n.objectStore(Ee);await o.put(t,Re(e)),await n.done}catch(r){if(r instanceof i.g)D.warn(r.message);else{const e=me.create("idb-set",{originalErrorMessage:null===r||void 0===r?void 0:r.message});D.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1024,Oe=2592e6;class Ne{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Le(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate(),n=r.getPlatformInfoString(),o=De();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some((e=>e.date===o)))return;return this._heartbeatsCache.heartbeats.push({date:o,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),r=Date.now();return r-t<=Oe})),this._storage.overwrite(this._heartbeatsCache)}catch(r){D.warn(r)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=De(),{heartbeatsToSend:r,unsentEntries:n}=Pe(this._heartbeatsCache.heartbeats),o=(0,i.Uj)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return D.warn(t),""}}}function De(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=Ae){const r=[];let n=e.slice();for(const o of e){const e=r.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Be(r)>t){e.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),Be(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Le{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.zW)()&&(0,i.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function Be(e){return(0,i.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){he(new n.uA("platform-logger",(e=>new R(e)),"PRIVATE")),he(new n.uA("heartbeat",(e=>new Ne(e)),"PRIVATE")),_e(O,N,e),_e(O,N,"esm2017"),_e("fire-js","")}Me("")},125:(e,t,r)=>{r.d(t,{h1:()=>l,uA:()=>o});var n=r(743);class o{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new n.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(r){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(n)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,r]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});r.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);r===e&&i.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),o=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;o.add(e),this.onInitCallbacks.set(n,o);const i=this.instances.get(n);return i&&e(i,n),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch(n){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(n){}return r||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},424:(e,t,r)=>{r.d(t,{$b:()=>o,Vy:()=>l});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${n}]  ${e.name}:`,...r)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},22:(e,t,r)=>{r.d(t,{A:()=>Pe});var n={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},header:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"}},o={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"2.5rem",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},i={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.background}",offset:"-1rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem"},xl:{width:"4rem",height:"4rem",fontSize:"2rem"}},s={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},a={root:{borderRadius:"{content.border.radius}"}},c={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}},l={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},u={root:{background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},body:{padding:"1.25rem",gap:"0.5rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}},d={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"0.5rem"},indicator:{width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}},h={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}}},f={root:{borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}"}},p={root:{borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2rem",height:"2rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}}},g={root:{transitionDuration:"{transition.duration}"},preview:{width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}},m={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}},v={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}},y={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},b={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPointColor:"{primary.color}",columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},w={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}},_={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0",fontWeight:"500",gap:"0.5rem"},title:{gap:"0.5rem",fontWeight:"500"},dropdown:{width:"2.5rem",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.25rem",fontWeight:"500",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}}},k={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}},C={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}},E={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},S={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"}},T={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"}},I={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"}},x={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}},R={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s"}},A={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},mask:{background:"{mask.background}",color:"{mask.color}"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}},O={icon:{color:"{form.field.icon.color}"}},N={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},D={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}},P={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}},L={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}},B={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}"}},M={root:{transitionDuration:"{transition.duration}"},button:{width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}},F={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"}}},U={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}},j={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}}},V={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"0"},horizontalOrientation:{padding:"0.5rem 0.75rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.muted.hover.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},$={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"}},z={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.muted.hover.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},q={root:{borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},content:{padding:"0.5rem 0.75rem",gap:"0.5rem"},text:{fontSize:"1rem",fontWeight:"500"},icon:{size:"1.125rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},W={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}},K={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"}},H={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},G={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}},Q={root:{outline:{width:"2px",color:"{content.background}"}}},X={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}},Y={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.375rem 1.125rem"},title:{fontWeight:"600"},content:{padding:"0 1.125rem 1.125rem 1.125rem"},footer:{padding:"0 1.125rem 1.125rem 1.125rem"}},J={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"}},Z={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}},ee={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},te={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}},re={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}},ne={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}},oe={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},icon:{size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}"}},ie={root:{gap:"0.25rem",transitionDuration:"{transition.duration}"},icon:{size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},se={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}},ae={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}},ce={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"}},le={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}},ue={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}},de={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},range:{background:"{primary.color}"},handle:{width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{handle:{contentBackground:"{surface.0}"}},dark:{handle:{contentBackground:"{surface.950}"}}}},he={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}},fe={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}},pe={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},ge={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},stepNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0 0 0 1rem"}},me={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},ve={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}},ye={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},be={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},we={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},_e={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}},ke={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"}},Ce={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},Ee={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eventConnector:{color:"{content.border.color}",size:"2px"}},Se={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},icon:{size:"1.125rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},Te={root:{padding:"0.5rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},icon:{disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"},colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}}},Ie={root:{width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s",disabledBackground:"{form.field.disabled.background}"},handle:{borderRadius:"50%",size:"1rem",disabledBackground:"{form.field.disabled.color}"},colorScheme:{light:{root:{background:"{surface.300}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}"}},dark:{root:{background:"{surface.700}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}"}}}},xe={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"}},Re={root:{maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},Ae={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},node:{padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"}},Oe={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"}},Ne={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},De={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}},Pe={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{surface.500}",floatLabelInvalidColor:"{red.400}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.700}",hoverBorderColor:"{surface.600}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{surface.400}",floatLabelInvalidColor:"{red.300}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}},components:{accordion:n,autocomplete:o,avatar:i,badge:s,blockui:a,breadcrumb:c,button:l,datepicker:_,card:u,carousel:d,cascadeselect:h,checkbox:f,chip:p,colorpicker:g,confirmdialog:m,confirmpopup:v,contextmenu:y,dataview:w,datatable:b,dialog:k,divider:C,dock:E,drawer:S,editor:T,fieldset:I,fileupload:x,floatlabel:R,galleria:A,iconfield:O,image:N,inlinemessage:D,inplace:P,inputchips:L,inputgroup:B,inputnumber:M,inputtext:F,knob:U,listbox:j,megamenu:V,menu:$,menubar:z,message:q,metergroup:W,multiselect:K,orderlist:H,organizationchart:G,overlaybadge:Q,popover:te,paginator:X,password:Z,panel:Y,panelmenu:J,picklist:ee,progressbar:re,progressspinner:ne,radiobutton:oe,rating:ie,scrollpanel:ae,select:ce,selectbutton:le,skeleton:ue,slider:de,speeddial:he,splitter:pe,splitbutton:fe,stepper:ge,steps:me,tabmenu:ve,tabs:ye,tabview:be,textarea:ke,tieredmenu:Ce,tag:we,terminal:_e,timeline:Ee,togglebutton:Te,toggleswitch:Ie,tree:Ae,treeselect:Oe,treetable:Ne,toast:Se,toolbar:xe,virtualscroller:De},directives:{tooltip:Re,ripple:se}}},335:(e,t,r)=>{r.d(t,{A:()=>yr});var n={};function o(e,t){return function(){return e.apply(t,arguments)}}r.r(n),r.d(n,{hasBrowserEnv:()=>Fe,hasStandardBrowserEnv:()=>je,hasStandardBrowserWebWorkerEnv:()=>Ve,navigator:()=>Ue,origin:()=>$e});const{toString:i}=Object.prototype,{getPrototypeOf:s}=Object,a=(e=>t=>{const r=i.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),c=e=>(e=e.toLowerCase(),t=>a(t)===e),l=e=>t=>typeof t===e,{isArray:u}=Array,d=l("undefined");function h(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const f=c("ArrayBuffer");function p(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t}const g=l("string"),m=l("function"),v=l("number"),y=e=>null!==e&&"object"===typeof e,b=e=>!0===e||!1===e,w=e=>{if("object"!==a(e))return!1;const t=s(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},_=c("Date"),k=c("File"),C=c("Blob"),E=c("FileList"),S=e=>y(e)&&m(e.pipe),T=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=a(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},I=c("URLSearchParams"),[x,R,A,O]=["ReadableStream","Request","Response","Headers"].map(c),N=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:r=!1}={}){if(null===e||"undefined"===typeof e)return;let n,o;if("object"!==typeof e&&(e=[e]),u(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(n=0;n<i;n++)s=o[n],t.call(null,e[s],s,e)}}function P(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;while(o-- >0)if(n=r[o],t===n.toLowerCase())return n;return null}const L=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),B=e=>!d(e)&&e!==L;function M(){const{caseless:e}=B(this)&&this||{},t={},r=(r,n)=>{const o=e&&P(t,n)||n;w(t[o])&&w(r)?t[o]=M(t[o],r):w(r)?t[o]=M({},r):u(r)?t[o]=r.slice():t[o]=r};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&D(arguments[n],r);return t}const F=(e,t,r,{allOwnKeys:n}={})=>(D(t,((t,n)=>{r&&m(t)?e[n]=o(t,r):e[n]=t}),{allOwnKeys:n}),e),U=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),j=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},V=(e,t,r,n)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),i=o.length;while(i-- >0)a=o[i],n&&!n(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==r&&s(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},$=(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},z=e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!v(t))return null;const r=new Array(t);while(t-- >0)r[t]=e[t];return r},q=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&s(Uint8Array)),W=(e,t)=>{const r=e&&e[Symbol.iterator],n=r.call(e);let o;while((o=n.next())&&!o.done){const r=o.value;t.call(e,r[0],r[1])}},K=(e,t)=>{let r;const n=[];while(null!==(r=e.exec(t)))n.push(r);return n},H=c("HTMLFormElement"),G=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),Q=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),X=c("RegExp"),Y=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};D(r,((r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)})),Object.defineProperties(e,n)},J=e=>{Y(e,((t,r)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];m(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},Z=(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return u(e)?n(e):n(String(e).split(t)),r},ee=()=>{},te=(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,re="abcdefghijklmnopqrstuvwxyz",ne="0123456789",oe={DIGIT:ne,ALPHA:re,ALPHA_DIGIT:re+re.toUpperCase()+ne},ie=(e=16,t=oe.ALPHA_DIGIT)=>{let r="";const{length:n}=t;while(e--)r+=t[Math.random()*n|0];return r};function se(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const ae=e=>{const t=new Array(10),r=(e,n)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=u(e)?[]:{};return D(e,((e,t)=>{const i=r(e,n+1);!d(i)&&(o[t]=i)})),t[n]=void 0,o}}return e};return r(e,0)},ce=c("AsyncFunction"),le=e=>e&&(y(e)||m(e))&&m(e.then)&&m(e.catch),ue=((e,t)=>e?setImmediate:t?((e,t)=>(L.addEventListener("message",(({source:r,data:n})=>{r===L&&n===e&&t.length&&t.shift()()}),!1),r=>{t.push(r),L.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))("function"===typeof setImmediate,m(L.postMessage)),de="undefined"!==typeof queueMicrotask?queueMicrotask.bind(L):"undefined"!==typeof process&&process.nextTick||ue,he={isArray:u,isArrayBuffer:f,isBuffer:h,isFormData:T,isArrayBufferView:p,isString:g,isNumber:v,isBoolean:b,isObject:y,isPlainObject:w,isReadableStream:x,isRequest:R,isResponse:A,isHeaders:O,isUndefined:d,isDate:_,isFile:k,isBlob:C,isRegExp:X,isFunction:m,isStream:S,isURLSearchParams:I,isTypedArray:q,isFileList:E,forEach:D,merge:M,extend:F,trim:N,stripBOM:U,inherits:j,toFlatObject:V,kindOf:a,kindOfTest:c,endsWith:$,toArray:z,forEachEntry:W,matchAll:K,isHTMLForm:H,hasOwnProperty:Q,hasOwnProp:Q,reduceDescriptors:Y,freezeMethods:J,toObjectSet:Z,toCamelCase:G,noop:ee,toFiniteNumber:te,findKey:P,global:L,isContextDefined:B,ALPHABET:oe,generateString:ie,isSpecCompliantForm:se,toJSONObject:ae,isAsyncFn:ce,isThenable:le,setImmediate:ue,asap:de};function fe(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}he.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:he.toJSONObject(this.config),code:this.code,status:this.status}}});const pe=fe.prototype,ge={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ge[e]={value:e}})),Object.defineProperties(fe,ge),Object.defineProperty(pe,"isAxiosError",{value:!0}),fe.from=(e,t,r,n,o,i)=>{const s=Object.create(pe);return he.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),fe.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const me=fe,ve=null;function ye(e){return he.isPlainObject(e)||he.isArray(e)}function be(e){return he.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,r){return e?e.concat(t).map((function(e,t){return e=be(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}function _e(e){return he.isArray(e)&&!e.some(ye)}const ke=he.toFlatObject(he,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Ce(e,t,r){if(!he.isObject(e))throw new TypeError("target must be an object");t=t||new(ve||FormData),r=he.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!he.isUndefined(t[e])}));const n=r.metaTokens,o=r.visitor||u,i=r.dots,s=r.indexes,a=r.Blob||"undefined"!==typeof Blob&&Blob,c=a&&he.isSpecCompliantForm(t);if(!he.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(he.isDate(e))return e.toISOString();if(!c&&he.isBlob(e))throw new me("Blob is not supported. Use a Buffer instead.");return he.isArrayBuffer(e)||he.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,r,o){let a=e;if(e&&!o&&"object"===typeof e)if(he.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(he.isArray(e)&&_e(e)||(he.isFileList(e)||he.endsWith(r,"[]"))&&(a=he.toArray(e)))return r=be(r),a.forEach((function(e,n){!he.isUndefined(e)&&null!==e&&t.append(!0===s?we([r],n,i):null===s?r:r+"[]",l(e))})),!1;return!!ye(e)||(t.append(we(o,r,i),l(e)),!1)}const d=[],h=Object.assign(ke,{defaultVisitor:u,convertValue:l,isVisitable:ye});function f(e,r){if(!he.isUndefined(e)){if(-1!==d.indexOf(e))throw Error("Circular reference detected in "+r.join("."));d.push(e),he.forEach(e,(function(e,n){const i=!(he.isUndefined(e)||null===e)&&o.call(t,e,he.isString(n)?n.trim():n,r,h);!0===i&&f(e,r?r.concat(n):[n])})),d.pop()}}if(!he.isObject(e))throw new TypeError("data must be an object");return f(e),t}const Ee=Ce;function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Te(e,t){this._pairs=[],e&&Ee(e,this,t)}const Ie=Te.prototype;Ie.append=function(e,t){this._pairs.push([e,t])},Ie.toString=function(e){const t=e?function(t){return e.call(this,t,Se)}:Se;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const xe=Te;function Re(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ae(e,t,r){if(!t)return e;const n=r&&r.encode||Re,o=r&&r.serialize;let i;if(i=o?o(t,r):he.isURLSearchParams(t)?t.toString():new xe(t,r).toString(n),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}class Oe{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){he.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const Ne=Oe,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pe="undefined"!==typeof URLSearchParams?URLSearchParams:xe,Le="undefined"!==typeof FormData?FormData:null,Be="undefined"!==typeof Blob?Blob:null,Me={isBrowser:!0,classes:{URLSearchParams:Pe,FormData:Le,Blob:Be},protocols:["http","https","file","blob","url","data"]},Fe="undefined"!==typeof window&&"undefined"!==typeof document,Ue="object"===typeof navigator&&navigator||void 0,je=Fe&&(!Ue||["ReactNative","NativeScript","NS"].indexOf(Ue.product)<0),Ve=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),$e=Fe&&window.location.href||"http://localhost",ze={...n,...Me};function qe(e,t){return Ee(e,new ze.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return ze.isNode&&he.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}function We(e){return he.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Ke(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}function He(e){function t(e,r,n,o){let i=e[o++];if("__proto__"===i)return!0;const s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&he.isArray(n)?n.length:i,a)return he.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&he.isObject(n[i])||(n[i]=[]);const c=t(e,r,n[i],o);return c&&he.isArray(n[i])&&(n[i]=Ke(n[i])),!s}if(he.isFormData(e)&&he.isFunction(e.entries)){const r={};return he.forEachEntry(e,((e,n)=>{t(We(e),n,r,0)})),r}return null}const Ge=He;function Qe(e,t,r){if(he.isString(e))try{return(t||JSON.parse)(e),he.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}const Xe={transitional:De,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=he.isObject(e);o&&he.isHTMLForm(e)&&(e=new FormData(e));const i=he.isFormData(e);if(i)return n?JSON.stringify(Ge(e)):e;if(he.isArrayBuffer(e)||he.isBuffer(e)||he.isStream(e)||he.isFile(e)||he.isBlob(e)||he.isReadableStream(e))return e;if(he.isArrayBufferView(e))return e.buffer;if(he.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return qe(e,this.formSerializer).toString();if((s=he.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ee(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),Qe(e)):e}],transformResponse:[function(e){const t=this.transitional||Xe.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(he.isResponse(e)||he.isReadableStream(e))return e;if(e&&he.isString(e)&&(r&&!this.responseType||n)){const r=t&&t.silentJSONParsing,i=!r&&n;try{return JSON.parse(e)}catch(o){if(i){if("SyntaxError"===o.name)throw me.from(o,me.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ze.classes.FormData,Blob:ze.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};he.forEach(["delete","get","head","post","put","patch"],(e=>{Xe.headers[e]={}}));const Ye=Xe,Je=he.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ze=e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&Je[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t},et=Symbol("internals");function tt(e){return e&&String(e).trim().toLowerCase()}function rt(e){return!1===e||null==e?e:he.isArray(e)?e.map(rt):String(e)}function nt(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;while(n=r.exec(e))t[n[1]]=n[2];return t}const ot=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function it(e,t,r,n,o){return he.isFunction(n)?n.call(this,t,r):(o&&(t=r),he.isString(t)?he.isString(n)?-1!==t.indexOf(n):he.isRegExp(n)?n.test(t):void 0:void 0)}function st(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}function at(e,t){const r=he.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}class ct{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=tt(t);if(!o)throw new Error("header name must be a non-empty string");const i=he.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=rt(e))}const i=(e,t)=>he.forEach(e,((e,r)=>o(e,r,t)));if(he.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(he.isString(e)&&(e=e.trim())&&!ot(e))i(Ze(e),t);else if(he.isHeaders(e))for(const[s,a]of e.entries())o(a,s,r);else null!=e&&o(t,e,r);return this}get(e,t){if(e=tt(e),e){const r=he.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return nt(e);if(he.isFunction(t))return t.call(this,e,r);if(he.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=tt(e),e){const r=he.findKey(this,e);return!(!r||void 0===this[r]||t&&!it(this,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=tt(e),e){const o=he.findKey(r,e);!o||t&&!it(r,r[o],o,t)||(delete r[o],n=!0)}}return he.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;while(r--){const o=t[r];e&&!it(this,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return he.forEach(this,((n,o)=>{const i=he.findKey(r,o);if(i)return t[i]=rt(n),void delete t[o];const s=e?st(o):String(o).trim();s!==o&&delete t[o],t[s]=rt(n),r[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return he.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&he.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach((e=>r.set(e))),r}static accessor(e){const t=this[et]=this[et]={accessors:{}},r=t.accessors,n=this.prototype;function o(e){const t=tt(e);r[t]||(at(n,e),r[t]=!0)}return he.isArray(e)?e.forEach(o):o(e),this}}ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),he.reduceDescriptors(ct.prototype,(({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}})),he.freezeMethods(ct);const lt=ct;function ut(e,t){const r=this||Ye,n=t||r,o=lt.from(n.headers);let i=n.data;return he.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function dt(e){return!(!e||!e.__CANCEL__)}function ht(e,t,r){me.call(this,null==e?"canceled":e,me.ERR_CANCELED,t,r),this.name="CanceledError"}he.inherits(ht,me,{__CANCEL__:!0});const ft=ht;function pt(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new me("Request failed with status code "+r.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}function gt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mt(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=n[s];o||(o=c),r[i]=a,n[i]=c;let u=s,d=0;while(u!==i)d+=r[u++],u%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const h=l&&c-l;return h?Math.round(1e3*d/h):void 0}}const vt=mt;function yt(e,t){let r,n,o=0,i=1e3/t;const s=(t,i=Date.now())=>{o=i,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)},a=(...e)=>{const t=Date.now(),a=t-o;a>=i?s(e,t):(r=e,n||(n=setTimeout((()=>{n=null,s(r)}),i-a)))},c=()=>r&&s(r);return[a,c]}const bt=yt,wt=(e,t,r=3)=>{let n=0;const o=vt(50,250);return bt((r=>{const i=r.loaded,s=r.lengthComputable?r.total:void 0,a=i-n,c=o(a),l=i<=s;n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&l?(s-i)/c:void 0,event:r,lengthComputable:null!=s,[t?"download":"upload"]:!0};e(u)}),r)},_t=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},kt=e=>(...t)=>he.asap((()=>e(...t))),Ct=ze.hasStandardBrowserEnv?function(){const e=ze.navigator&&/(msie|trident)/i.test(ze.navigator.userAgent),t=document.createElement("a");let r;function n(r){let n=r;return e&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return r=n(window.location.href),function(e){const t=he.isString(e)?n(e):e;return t.protocol===r.protocol&&t.host===r.host}}():function(){return function(){return!0}}(),Et=ze.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const s=[e+"="+encodeURIComponent(t)];he.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),he.isString(n)&&s.push("path="+n),he.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function St(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Tt(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function It(e,t){return e&&!St(t)?Tt(e,t):t}const xt=e=>e instanceof lt?{...e}:e;function Rt(e,t){t=t||{};const r={};function n(e,t,r){return he.isPlainObject(e)&&he.isPlainObject(t)?he.merge.call({caseless:r},e,t):he.isPlainObject(t)?he.merge({},t):he.isArray(t)?t.slice():t}function o(e,t,r){return he.isUndefined(t)?he.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}function i(e,t){if(!he.isUndefined(t))return n(void 0,t)}function s(e,t){return he.isUndefined(t)?he.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function a(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(xt(e),xt(t),!0)};return he.forEach(Object.keys(Object.assign({},e,t)),(function(n){const i=c[n]||o,s=i(e[n],t[n],n);he.isUndefined(s)&&i!==a||(r[n]=s)})),r}const At=e=>{const t=Rt({},e);let r,{data:n,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:s,headers:a,auth:c}=t;if(t.headers=a=lt.from(a),t.url=Ae(It(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),he.isFormData(n))if(ze.hasStandardBrowserEnv||ze.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(r=a.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(ze.hasStandardBrowserEnv&&(o&&he.isFunction(o)&&(o=o(t)),o||!1!==o&&Ct(t.url))){const e=i&&s&&Et.read(s);e&&a.set(i,e)}return t},Ot="undefined"!==typeof XMLHttpRequest,Nt=Ot&&function(e){return new Promise((function(t,r){const n=At(e);let o=n.data;const i=lt.from(n.headers).normalize();let s,a,c,l,u,{responseType:d,onUploadProgress:h,onDownloadProgress:f}=n;function p(){l&&l(),u&&u(),n.cancelToken&&n.cancelToken.unsubscribe(s),n.signal&&n.signal.removeEventListener("abort",s)}let g=new XMLHttpRequest;function m(){if(!g)return;const n=lt.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),o=d&&"text"!==d&&"json"!==d?g.response:g.responseText,i={data:o,status:g.status,statusText:g.statusText,headers:n,config:e,request:g};pt((function(e){t(e),p()}),(function(e){r(e),p()}),i),g=null}g.open(n.method.toUpperCase(),n.url,!0),g.timeout=n.timeout,"onloadend"in g?g.onloadend=m:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(m)},g.onabort=function(){g&&(r(new me("Request aborted",me.ECONNABORTED,e,g)),g=null)},g.onerror=function(){r(new me("Network Error",me.ERR_NETWORK,e,g)),g=null},g.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||De;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new me(t,o.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,e,g)),g=null},void 0===o&&i.setContentType(null),"setRequestHeader"in g&&he.forEach(i.toJSON(),(function(e,t){g.setRequestHeader(t,e)})),he.isUndefined(n.withCredentials)||(g.withCredentials=!!n.withCredentials),d&&"json"!==d&&(g.responseType=n.responseType),f&&([c,u]=wt(f,!0),g.addEventListener("progress",c)),h&&g.upload&&([a,l]=wt(h),g.upload.addEventListener("progress",a),g.upload.addEventListener("loadend",l)),(n.cancelToken||n.signal)&&(s=t=>{g&&(r(!t||t.type?new ft(null,e,g):t),g.abort(),g=null)},n.cancelToken&&n.cancelToken.subscribe(s),n.signal&&(n.signal.aborted?s():n.signal.addEventListener("abort",s)));const v=gt(n.url);v&&-1===ze.protocols.indexOf(v)?r(new me("Unsupported protocol "+v+":",me.ERR_BAD_REQUEST,e)):g.send(o||null)}))},Dt=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,s();const t=e instanceof Error?e:this.reason;n.abort(t instanceof me?t:new ft(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new me(`timeout ${t} of ms exceeded`,me.ETIMEDOUT))}),t);const s=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=n;return a.unsubscribe=()=>he.asap(s),a}},Pt=Dt,Lt=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,o=0;while(o<r)n=o+t,yield e.slice(o,n),o=n},Bt=async function*(e,t){for await(const r of Mt(e))yield*Lt(r,t)},Mt=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Ft=(e,t,r,n)=>{const o=Bt(e,t);let i,s=0,a=e=>{i||(i=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return a(),void e.close();let i=n.byteLength;if(r){let e=s+=i;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw a(t),t}},cancel(e){return a(e),o.return()}},{highWaterMark:2})},Ut="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,jt=Ut&&"function"===typeof ReadableStream,Vt=Ut&&("function"===typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),$t=(e,...t)=>{try{return!!e(...t)}catch(r){return!1}},zt=jt&&$t((()=>{let e=!1;const t=new Request(ze.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),qt=65536,Wt=jt&&$t((()=>he.isReadableStream(new Response("").body))),Kt={stream:Wt&&(e=>e.body)};Ut&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach((t=>{!Kt[t]&&(Kt[t]=he.isFunction(e[t])?e=>e[t]():(e,r)=>{throw new me(`Response type '${t}' is not supported`,me.ERR_NOT_SUPPORT,r)})}))})(new Response);const Ht=async e=>{if(null==e)return 0;if(he.isBlob(e))return e.size;if(he.isSpecCompliantForm(e)){const t=new Request(ze.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return he.isArrayBufferView(e)||he.isArrayBuffer(e)?e.byteLength:(he.isURLSearchParams(e)&&(e+=""),he.isString(e)?(await Vt(e)).byteLength:void 0)},Gt=async(e,t)=>{const r=he.toFiniteNumber(e.getContentLength());return null==r?Ht(t):r},Qt=Ut&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:h}=At(e);l=l?(l+"").toLowerCase():"text";let f,p=Pt([o,i&&i.toAbortSignal()],s);const g=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let m;try{if(c&&zt&&"get"!==r&&"head"!==r&&0!==(m=await Gt(u,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(he.isFormData(n)&&(e=r.headers.get("content-type"))&&u.setContentType(e),r.body){const[e,t]=_t(m,wt(kt(c)));n=Ft(r.body,qt,e,t)}}he.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;f=new Request(t,{...h,signal:p,method:r.toUpperCase(),headers:u.normalize().toJSON(),body:n,duplex:"half",credentials:o?d:void 0});let i=await fetch(f);const s=Wt&&("stream"===l||"response"===l);if(Wt&&(a||s&&g)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=he.toFiniteNumber(i.headers.get("content-length")),[r,n]=a&&_t(t,wt(kt(a),!0))||[];i=new Response(Ft(i.body,qt,r,(()=>{n&&n(),g&&g()})),e)}l=l||"text";let v=await Kt[he.findKey(Kt,l)||"text"](i,e);return!s&&g&&g(),await new Promise(((t,r)=>{pt(t,r,{data:v,headers:lt.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:f})}))}catch(v){if(g&&g(),v&&"TypeError"===v.name&&/fetch/i.test(v.message))throw Object.assign(new me("Network Error",me.ERR_NETWORK,e,f),{cause:v.cause||v});throw me.from(v,v&&v.code,e,f)}}),Xt={http:ve,xhr:Nt,fetch:Qt};he.forEach(Xt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}}));const Yt=e=>`- ${e}`,Jt=e=>he.isFunction(e)||null===e||!1===e,Zt={getAdapter:e=>{e=he.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){let t;if(r=e[i],n=r,!Jt(r)&&(n=Xt[(t=String(r)).toLowerCase()],void 0===n))throw new me(`Unknown adapter '${t}'`);if(n)break;o[t||"#"+i]=n}if(!n){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let r=t?e.length>1?"since :\n"+e.map(Yt).join("\n"):" "+Yt(e[0]):"as no adapter specified";throw new me("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return n},adapters:Xt};function er(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ft(null,e)}function tr(e){er(e),e.headers=lt.from(e.headers),e.data=ut.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=Zt.getAdapter(e.adapter||Ye.adapter);return t(e).then((function(t){return er(e),t.data=ut.call(e,e.transformResponse,t),t.headers=lt.from(t.headers),t}),(function(t){return dt(t)||(er(e),t&&t.response&&(t.response.data=ut.call(e,e.transformResponse,t.response),t.response.headers=lt.from(t.response.headers))),Promise.reject(t)}))}const rr="1.7.7",nr={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{nr[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const or={};function ir(e,t,r){if("object"!==typeof e)throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;while(o-- >0){const i=n[o],s=t[i];if(s){const t=e[i],r=void 0===t||s(t,i,e);if(!0!==r)throw new me("option "+i+" must be "+r,me.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new me("Unknown option "+i,me.ERR_BAD_OPTION)}}nr.transitional=function(e,t,r){function n(e,t){return"[Axios v"+rr+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new me(n(o," has been removed"+(t?" in "+t:"")),me.ERR_DEPRECATED);return t&&!or[o]&&(or[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};const sr={assertOptions:ir,validators:nr},ar=sr.validators;class cr{constructor(e){this.defaults=e,this.interceptors={request:new Ne,response:new Ne}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(n){}}throw r}}_request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=Rt(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&sr.assertOptions(r,{silentJSONParsing:ar.transitional(ar.boolean),forcedJSONParsing:ar.transitional(ar.boolean),clarifyTimeoutError:ar.transitional(ar.boolean)},!1),null!=n&&(he.isFunction(n)?t.paramsSerializer={serialize:n}:sr.assertOptions(n,{encode:ar.function,serialize:ar.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&he.merge(o.common,o[t.method]);o&&he.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=lt.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[tr.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);while(d<u)l=l.then(e[d++],e[d++]);return l}u=s.length;let h=t;d=0;while(d<u){const e=s[d++],t=s[d++];try{h=e(h)}catch(f){t.call(this,f);break}}try{l=tr.call(this,h)}catch(f){return Promise.reject(f)}d=0,u=c.length;while(d<u)l=l.then(c[d++],c[d++]);return l}getUri(e){e=Rt(this.defaults,e);const t=It(e.baseURL,e.url);return Ae(t,e.params,e.paramsSerializer)}}he.forEach(["delete","get","head","options"],(function(e){cr.prototype[e]=function(t,r){return this.request(Rt(r||{},{method:e,url:t,data:(r||{}).data}))}})),he.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(Rt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}cr.prototype[e]=t(),cr.prototype[e+"Form"]=t(!0)}));const lr=cr;class ur{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;while(t-- >0)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new ft(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new ur((function(t){e=t}));return{token:t,cancel:e}}}const dr=ur;function hr(e){return function(t){return e.apply(null,t)}}function fr(e){return he.isObject(e)&&!0===e.isAxiosError}const pr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pr).forEach((([e,t])=>{pr[t]=e}));const gr=pr;function mr(e){const t=new lr(e),r=o(lr.prototype.request,t);return he.extend(r,lr.prototype,t,{allOwnKeys:!0}),he.extend(r,t,null,{allOwnKeys:!0}),r.create=function(t){return mr(Rt(e,t))},r}const vr=mr(Ye);vr.Axios=lr,vr.CanceledError=ft,vr.CancelToken=dr,vr.isCancel=dt,vr.VERSION=rr,vr.toFormData=Ee,vr.AxiosError=me,vr.Cancel=vr.CanceledError,vr.all=function(e){return Promise.all(e)},vr.spread=hr,vr.isAxiosError=fr,vr.mergeConfig=Rt,vr.AxiosHeaders=lt,vr.formToJSON=e=>Ge(he.isHTMLForm(e)?new FormData(e):e),vr.getAdapter=Zt.getAdapter,vr.HttpStatusCode=gr,vr.default=vr;const yr=vr},223:(e,t,r)=>{r.d(t,{Wp:()=>n.Wp});var n=r(928),o="firebase",i="10.13.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,n.KO)(o,i,"app")},37:(e,t,r)=>{r.d(t,{eJ:()=>Pt,xI:()=>Wn,hg:()=>Ft,x9:()=>Lt});var n=r(928),o=r(743),i=r(424);function s(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=r(125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new o.FA("auth","Firebase",c()),d=new i.Vy("@firebase/auth");function h(e,...t){d.logLevel<=i.$b.WARN&&d.warn(`Auth (${n.MF}): ${e}`,...t)}function f(e,...t){d.logLevel<=i.$b.ERROR&&d.error(`Auth (${n.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function g(e,...t){return y(e,...t)}function m(e,t,r){const n=Object.assign(Object.assign({},l()),{[t]:r}),i=new o.FA("auth","Firebase",n);return i.create(t,{appName:e.name})}function v(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,...t){if("string"!==typeof e){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return u.create(e,...t)}function b(e,t,...r){if(!e)throw y(t,...r)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function _(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===E()||"https:"===E()}function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||(0,o.sr)()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,o.jZ)()||(0,o.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){_(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},O=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,r,n,i={}){return P(e,i,(async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});const a=(0,o.Am)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(B(e,e.config.apiHost,r,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function P(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},A),t);try{const t=new F(e),o=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const i=await o.json();if("needConfirmation"in i)throw U(e,"account-exists-with-different-credential",i);if(o.ok&&!("errorMessage"in i))return i;{const t=o.ok?i.errorMessage:i.error.message,[r,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw U(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===r)throw U(e,"email-already-in-use",i);if("USER_DISABLED"===r)throw U(e,"user-disabled",i);const a=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);p(e,a)}}catch(i){if(i instanceof o.g)throw i;p(e,"network-request-failed",{message:String(i)})}}async function L(e,t,r,n,o={}){const i=await D(e,t,r,n,o);return"mfaPendingCredential"in i&&p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function B(e,t,r,n){const o=`${t}${r}?${n}`;return e.config.emulator?x(e.config,o):`${e.config.apiScheme}://${o}`}function M(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),O.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const o=g(e,t,n);return o.customData._tokenResponse=r,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return void 0!==e&&void 0!==e.enterprise}class V{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return M(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return D(e,"GET","/v2/recaptchaConfig",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t=!1){const r=(0,o.Ku)(e),n=await r.getIdToken(t),i=G(n);b(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:n,authTime:W(H(i.auth_time)),issuedAtTime:W(H(i.iat)),expirationTime:W(H(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function G(e){const[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,o.u)(r);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(i){return f("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function Q(e){const t=G(e);return b(t,"internal-error"),b("undefined"!==typeof t.exp,"internal-error"),b("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof o.g&&Y(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){var t;const r=e.auth,n=await e.getIdToken(),o=await X(e,q(r,{idToken:n}));b(null===o||void 0===o?void 0:o.users.length,r,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?ne(i.providerUserInfo):[],a=re(e.providerData,s),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Z(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function te(e){const t=(0,o.Ku)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const r=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...r,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,r=s(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const r=await P(e,{},(async()=>{const r=(0,o.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=B(e,n,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(s,{method:"POST",headers:a,body:r})}));return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function ie(e,t){return D(e,"POST","/v2/accounts:revokeToken",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b("undefined"!==typeof e.idToken,"internal-error"),b("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){b(0!==e.length,"internal-error");const t=Q(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:n,expiresIn:o}=await oe(e,t);this.updateTokensAndExpiration(r,n,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:o}=t,i=new se;return r&&(b("string"===typeof r,"internal-error",{appName:e}),i.refreshToken=r),n&&(b("string"===typeof n,"internal-error",{appName:e}),i.accessToken=n),o&&(b("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){b("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ce{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,o=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Z(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return K(this,e)}reload(){return te(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,n.xZ)(this.auth.app))return Promise.reject(v(this.auth));const e=await this.getIdToken();return await X(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,o,i,s,a,c,l;const u=null!==(r=t.displayName)&&void 0!==r?r:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,h=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:w,isAnonymous:_,providerData:k,stsTokenManager:C}=t;b(y&&C,e,"internal-error");const E=se.fromJSON(this.name,C);b("string"===typeof y,e,"internal-error"),ae(u,e.name),ae(d,e.name),b("boolean"===typeof w,e,"internal-error"),b("boolean"===typeof _,e,"internal-error"),ae(h,e.name),ae(f,e.name),ae(p,e.name),ae(g,e.name),ae(m,e.name),ae(v,e.name);const S=new ce({uid:y,auth:e,email:d,emailVerified:w,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:v});return k&&Array.isArray(k)&&(S.providerData=k.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,r=!1){const n=new se;n.updateFromServerResponse(t);const o=new ce({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await ee(o),o}static async _fromGetAccountInfoResponse(e,t,r){const n=t.users[0];b(void 0!==n.localId,"internal-error");const o=void 0!==n.providerUserInfo?ne(n.providerUserInfo):[],i=!(n.email&&n.passwordHash)&&!(null===o||void 0===o?void 0:o.length),s=new se;s.updateFromIdToken(r);const a=new ce({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i}),c={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:o,metadata:new Z(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(null===o||void 0===o?void 0:o.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function ue(e){_(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const he=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,r){return`firebase:${e}:${t}:${r}`}class pe{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:o}=this.auth;this.fullUserKey=fe(this.userKey,n.apiKey,o),this.fullPersistenceKey=fe("persistence",n.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new pe(ue(he),e,r);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=n[0]||ue(he);const i=fe(r,e.config.apiKey,e.name);let s=null;for(const l of t)try{const t=await l._get(i);if(t){const r=ce._fromJSON(e,t);l!==o&&(s=r),o=l;break}}catch(c){}const a=n.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(i,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(i)}catch(c){}}))),new pe(o,e,r)):new pe(o,e,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(ke(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===(null===r||void 0===r?void 0:r.length))return r[1]}return"Other"}function me(e=(0,o.ZQ)()){return/firefox\//i.test(e)}function ve(e=(0,o.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,o.ZQ)()){return/crios\//i.test(e)}function be(e=(0,o.ZQ)()){return/iemobile/i.test(e)}function we(e=(0,o.ZQ)()){return/android/i.test(e)}function _e(e=(0,o.ZQ)()){return/blackberry/i.test(e)}function ke(e=(0,o.ZQ)()){return/webos/i.test(e)}function Ce(e=(0,o.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ee(e=(0,o.ZQ)()){var t;return Ce(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Se(){return(0,o.lT)()&&10===document.documentMode}function Te(e=(0,o.ZQ)()){return Ce(e)||we(e)||ke(e)||_e(e)||/windows phone/i.test(e)||be(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t=[]){let r;switch(e){case"Browser":r=ge((0,o.ZQ)());break;case"Worker":r=`${ge((0,o.ZQ)())}-${e}`;break;default:r=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${n.MF}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise(((r,n)=>{try{const n=e(t);r(n)}catch(o){n(o)}}));r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const e of t)try{e()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===r||void 0===r?void 0:r.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t={}){return D(e,"GET","/v2/passwordPolicy",N(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=6;class Oe{constructor(e){var t,r,n,o;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=i.minPasswordLength)&&void 0!==t?t:Ae,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),void 0!==i.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),void 0!==i.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),void 0!==i.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),void 0!==i.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(o=e.forceUpgradeOnSignin)&&void 0!==o&&o,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,o,i,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(o=a.containsUppercaseLetter)||void 0===o||o),a.isValid&&(a.isValid=null===(i=a.containsNumericCharacter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.beforeStateQueue=new xe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ue(t)),this._initializationPromise=this.queue((async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await q(this,{idToken:e}),r=await ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,n.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,n=null===o||void 0===o?void 0:o._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==n||!(null===s||void 0===s?void 0:s.user)||(o=s.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(s){o=r,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,n.xZ)(this.app))return Promise.reject(v(this));const t=e?(0,o.Ku)(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,n.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,n.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ue(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Re(this),t=new Oe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new o.FA("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged((()=>{r(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(r.tenantId=this.tenantId),await ie(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ue(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[ue(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t);let i=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(s,this,"internal-error"),s.then((()=>{i||o(this.currentUser)})),"function"===typeof t){const o=e.addObserver(t,r,n);return()=>{i=!0,o()}}{const r=e.addObserver(t);return()=>{i=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&h(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function De(e){return(0,o.Ku)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,o.tD)((e=>this.observer=e))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Be(e){Le=e}function Me(e){return Le.loadJS(e)}function Fe(){return Le.recaptchaEnterpriseScript}function Ue(){return Le.gapiScript}function je(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ve="recaptcha-enterprise",$e="NO_RECAPTCHA";class ze{constructor(e){this.type=Ve,this.auth=De(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,r)=>{$(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((n=>{if(void 0!==n.recaptchaKey){const r=new V(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}r(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{r(e)}))}))}function n(t,r,n){const o=window.grecaptcha;j(o)?o.enterprise.ready((()=>{o.enterprise.execute(t,{action:e}).then((e=>{r(e)})).catch((()=>{r($e)}))})):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,o)=>{r(this.auth).then((r=>{if(!t&&j(window.grecaptcha))n(r,e,o);else{if("undefined"===typeof window)return void o(new Error("RecaptchaVerifier is only supported in browser"));let t=Fe();0!==t.length&&(t+=r),Me(t).then((()=>{n(r,e,o)})).catch((e=>{o(e)}))}})).catch((e=>{o(e)}))}))}}async function qe(e,t,r,n=!1){const o=new ze(e);let i;try{i=await o.verify(r)}catch(a){i=await o.verify(r,!0)}const s=Object.assign({},t);return n?Object.assign(s,{captchaResp:i}):Object.assign(s,{captchaResponse:i}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function We(e,t,r,n){var o;if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await qe(e,t,r,"getOobCode"===r);return n(e,o)}return n(e,t).catch((async o=>{if("auth/missing-recaptcha-token"===o.code){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qe(e,t,r,"getOobCode"===r);return n(e,o)}return Promise.reject(o)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ke(e,t){const r=(0,n.j6)(e,"auth");if(r.isInitialized()){const e=r.getImmediate(),n=r.getOptions();if((0,o.bD)(n,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const i=r.initialize({options:t});return i}function He(e,t){const r=(null===t||void 0===t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(ue);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ge(e,t,r){const n=De(e);b(n._canInitEmulator,n,"emulator-config-failed"),b(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const o=!!(null===r||void 0===r?void 0:r.disableWarnings),i=Qe(t),{host:s,port:a}=Xe(t),c=null===a?"":`:${a}`;n.config.emulator={url:`${i}//${s}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||Je()}function Qe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xe(e){const t=Qe(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(n);if(o){const e=o[1];return{host:e,port:Ye(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:Ye(t)}}}function Ye(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Je(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return D(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function tt(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rt(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function nt(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Ze{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new ot(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ot(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return We(e,t,"signInWithPassword",tt);case"emailLink":return rt(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return We(e,r,"signUpPassword",et);case"emailLink":return nt(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="http://localhost";class at extends Ze{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new at(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,o=s(t,["providerId","signInMethod"]);if(!r||!n)return null;const i=new at(r,n);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return it(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,it(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,it(e,t)}buildRequest(){const e={requestUri:st,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,o.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function lt(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function ut(e,t){const r=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(r.temporaryProof)throw U(e,"account-exists-with-different-credential",r);return r}const dt={["USER_NOT_FOUND"]:"user-not-found"};async function ht(e,t){const r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return L(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,r),dt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Ze{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ft({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ft({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return lt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ut(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ht(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:o}=e;return r||t||n||o?new ft({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gt(e){const t=(0,o.I9)((0,o.hp)(e))["link"],r=t?(0,o.I9)((0,o.hp)(t))["deep_link_id"]:null,n=(0,o.I9)((0,o.hp)(e))["deep_link_id"],i=n?(0,o.I9)((0,o.hp)(n))["link"]:null;return i||n||r||t||e}class mt{constructor(e){var t,r,n,i,s,a;const c=(0,o.I9)((0,o.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(r=c["oobCode"])&&void 0!==r?r:null,d=pt(null!==(n=c["mode"])&&void 0!==n?n:null);b(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=gt(e);try{return new mt(t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(){this.providerId=vt.PROVIDER_ID}static credential(e,t){return ot._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=mt.parseLink(t);return b(r,"argument-error"),ot._fromEmailAndCode(e,r.code,r.tenantId)}}vt.PROVIDER_ID="password",vt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends yt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt extends bt{constructor(){super("facebook.com")}static credential(e){return at._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch(t){return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",wt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t extends bt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return at._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _t.credential(t,r)}catch(n){return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com",_t.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends bt{constructor(){super("github.com")}static credential(e){return at._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch(t){return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com",kt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends bt{constructor(){super("twitter.com")}static credential(e,t){return at._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ct.credential(t,r)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Et(e,t){return L(e,"POST","/v1/accounts:signUp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.TWITTER_SIGN_IN_METHOD="twitter.com",Ct.PROVIDER_ID="twitter.com";class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){const o=await ce._fromIdTokenResponse(e,r,n),i=Tt(r),s=new St({user:o,providerId:i,_tokenResponse:r,operationType:t});return s}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const n=Tt(r);return new St({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function Tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends o.g{constructor(e,t,r,n){var o;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,It.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new It(e,t,r,n)}}function xt(e,t,r,n){const o="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return o.catch((r=>{if("auth/multi-factor-auth-required"===r.code)throw It._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,r=!1){const n=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return St._forOperation(e,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function At(e,t,r=!1){const{auth:o}=e;if((0,n.xZ)(o.app))return Promise.reject(v(o));const i="reauthenticate";try{const n=await X(e,xt(o,i,t,e),r);b(n.idToken,o,"internal-error");const s=G(n.idToken);b(s,o,"internal-error");const{sub:a}=s;return b(e.uid===a,o,"user-mismatch"),St._forOperation(e,i,n)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(o,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,r=!1){if((0,n.xZ)(e.app))return Promise.reject(v(e));const o="signIn",i=await xt(e,o,t),s=await St._fromIdTokenResponse(e,o,i);return r||await e._updateCurrentUser(s.user),s}async function Nt(e,t){return Ot(De(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dt(e){const t=De(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Pt(e,t,r){if((0,n.xZ)(e.app))return Promise.reject(v(e));const o=De(e),i={returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"},s=We(o,i,"signUpPassword",Et),a=await s.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Dt(e),t})),c=await St._fromIdTokenResponse(o,"signIn",a);return await o._updateCurrentUser(c.user),c}function Lt(e,t,r){return(0,n.xZ)(e.app)?Promise.reject(v(e)):Nt((0,o.Ku)(e),vt.credential(t,r)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Dt(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e,t,r,n){return(0,o.Ku)(e).onIdTokenChanged(t,r,n)}function Mt(e,t,r){return(0,o.Ku)(e).beforeAuthStateChanged(t,r)}function Ft(e,t,r,n){return(0,o.Ku)(e).onAuthStateChanged(t,r,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ut(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function jt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}function Vt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function $t(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const zt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zt,"1"),this.storage.removeItem(zt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=1e3,Kt=10;class Ht extends qt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Te(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,r)=>{this.notifyListeners(e,r)}));const r=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},o=this.storage.getItem(r);Se()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Kt):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)}))}),Wt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ht.type="LOCAL";const Gt=Ht;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends qt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qt.type="SESSION";const Xt=Qt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const r=new Jt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:n,data:o}=t.data,i=this.handlersMap[n];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const s=Array.from(i).map((async e=>e(t.origin,o))),a=await Yt(s);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.receivers=[];class er{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let o,i;return new Promise(((s,a)=>{const c=Zt("",20);n.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),r);i={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(l),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[n.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return window}function rr(e){tr().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return"undefined"!==typeof tr()["WorkerGlobalScope"]&&"function"===typeof tr()["importScripts"]}async function or(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ir(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function sr(){return nr()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="firebaseLocalStorageDb",cr=1,lr="firebaseLocalStorage",ur="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function hr(e,t){return e.transaction([lr],t?"readwrite":"readonly").objectStore(lr)}function fr(){const e=indexedDB.deleteDatabase(ar);return new dr(e).toPromise()}function pr(){const e=indexedDB.open(ar,cr);return new Promise(((t,r)=>{e.addEventListener("error",(()=>{r(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(lr,{keyPath:ur})}catch(n){r(n)}})),e.addEventListener("success",(async()=>{const r=e.result;r.objectStoreNames.contains(lr)?t(r):(r.close(),await fr(),t(await pr()))}))}))}async function gr(e,t,r){const n=hr(e,!0).put({[ur]:t,value:r});return new dr(n).toPromise()}async function mr(e,t){const r=hr(e,!1).get(t),n=await new dr(r).toPromise();return void 0===n?null:n.value}function vr(e,t){const r=hr(e,!0).delete(t);return new dr(r).toPromise()}const yr=800,br=3;class wr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await pr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(r){if(t++>br)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jt._getInstance(sr()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const r=await this._poll();return{keyProcessed:r.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await or(),!this.activeServiceWorker)return;this.sender=new er(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ir()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pr();return await gr(e,zt,"1"),await vr(e,zt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((r=>gr(r,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>mr(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>vr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=hr(e,!1).getAll();return new dr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;if(0!==e.length)for(const{fbase_key:n,value:o}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(o)&&(this.notifyListeners(n,o),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!r.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),yr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}wr.type="LOCAL";const _r=wr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function Cr(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}function Er(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
je("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sr="recaptcha";async function Tr(e,t,r){var n;const o=await r.verify();try{let i;if(b("string"===typeof o,e,"argument-error"),b(r.type===Sr,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){b("enroll"===t.type,e,"internal-error");const r=await Ut(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return r.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const r=(null===(n=i.multiFactorHint)||void 0===n?void 0:n.uid)||i.multiFactorUid;b(r,e,"missing-multi-factor-info");const s=await kr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ct(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{r._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{constructor(e){this.providerId=Ir.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return Tr(this.auth,e,(0,o.Ku)(t))}static credential(e,t){return ft._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ir.credentialFromTaggedObject(t)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?ft._fromTokenResponse(t,r):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xr(e,t){return t?ue(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ir.PROVIDER_ID="phone",Ir.PHONE_SIGN_IN_METHOD="phone";class Rr extends Ze{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return it(e,this._buildIdpRequest())}_linkToIdToken(e,t){return it(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return it(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ar(e){return Ot(e.auth,new Rr(e),e.bypassAuthState)}function Or(e){const{auth:t,user:r}=e;return b(r,t,"internal-error"),At(r,new Rr(e),e.bypassAuthState)}async function Nr(e){const{auth:t,user:r}=e;return b(r,t,"internal-error"),Rt(r,new Rr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t,r,n,o=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:n,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ar;case"linkViaPopup":case"linkViaRedirect":return Nr;case"reauthViaPopup":case"reauthViaRedirect":return Or;default:p(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new I(2e3,1e4);class Lr extends Dr{constructor(e,t,r,n,o){super(e,t,n,o),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=Zt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Pr.get())};e()}}Lr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Br="pendingRedirect",Mr=new Map;class Fr extends Dr{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Mr.get(this.auth._key());if(!e){try{const t=await Ur(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Mr.set(this.auth._key(),e)}return this.bypassAuthState||Mr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ur(e,t){const r=$r(t),n=Vr(e);if(!await n._isAvailable())return!1;const o="true"===await n._get(r);return await n._remove(r),o}function jr(e,t){Mr.set(e._key(),t)}function Vr(e){return ue(e._redirectPersistence)}function $r(e){return fe(Br,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(e,t,r=!1){if((0,n.xZ)(e.app))return Promise.reject(v(e));const o=De(e),i=xr(o,t),s=new Fr(o,i,r),a=await s.execute();return a&&!r&&(delete a.user._redirectEventId,await o._persistUserIfCurrent(a.user),await o._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qr=6e5;class Wr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Gr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Hr(e)){const n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(g(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qr&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kr(e))}saveEventToCache(e){this.cachedEventUids.add(Kr(e)),this.lastProcessedEventTime=Date.now()}}function Kr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Hr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Gr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yr=/^https?/;async function Jr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Qr(e);for(const n of t)try{if(Zr(n))return}catch(r){}p(e,"unauthorized-domain")}function Zr(e){const t=k(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===n}if(!Yr.test(r))return!1;if(Xr.test(e))return n===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new I(3e4,6e4);function tn(){const e=tr().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}function rn(e){return new Promise(((t,r)=>{var n,o,i;function s(){tn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tn(),r(g(e,"network-request-failed"))},timeout:en.get()})}if(null===(o=null===(n=tr().gapi)||void 0===n?void 0:n.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=tr().gapi)||void 0===i?void 0:i.load)){const t=je("iframefcb");return tr()[t]=()=>{gapi.load?s():r(g(e,"network-request-failed"))},Me(`${Ue()}?onload=${t}`).catch((e=>r(e)))}s()}})).catch((e=>{throw nn=null,e}))}let nn=null;function on(e){return nn=nn||rn(e),nn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new I(5e3,15e3),an="__/auth/iframe",cn="emulator/auth/iframe",ln={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},un=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dn(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?x(t,cn):`https://${e.config.authDomain}/${an}`,i={apiKey:t.apiKey,appName:e.name,v:n.MF},s=un.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${r}?${(0,o.Am)(i).slice(1)}`}async function hn(e){const t=await on(e),r=tr().gapi;return b(r,e,"internal-error"),t.open({where:document.body,url:dn(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ln,dontclear:!0},(t=>new Promise((async(r,n)=>{await t.restyle({setHideOnLeave:!1});const o=g(e,"network-request-failed"),i=tr().setTimeout((()=>{n(o)}),sn.get());function s(){tr().clearTimeout(i),r(t)}t.ping(s).then(s,(()=>{n(o)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pn=500,gn=600,mn="_blank",vn="http://localhost";class yn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function bn(e,t,r,n=pn,i=gn){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},fn),{width:n.toString(),height:i.toString(),top:s,left:a}),u=(0,o.ZQ)().toLowerCase();r&&(c=ye(u)?mn:r),me(u)&&(t=t||vn,l.scrollbars="yes");const d=Object.entries(l).reduce(((e,[t,r])=>`${e}${t}=${r},`),"");if(Ee(u)&&"_self"!==c)return wn(t||"",c),new yn(null);const h=window.open(t||"",c,d);b(h,e,"popup-blocked");try{h.focus()}catch(f){}return new yn(h)}function wn(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="__/auth/handler",kn="emulator/auth/handler",Cn=encodeURIComponent("fac");async function En(e,t,r,i,s,a){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:n.MF,eventId:s};if(t instanceof yt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,o.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof bt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const n of Object.keys(l))void 0===l[n]&&delete l[n];const u=await e._getAppCheckToken(),d=u?`#${Cn}=${encodeURIComponent(u)}`:"";return`${Sn(e)}?${(0,o.Am)(l).slice(1)}${d}`}function Sn({config:e}){return e.emulator?x(e,kn):`https://${e.authDomain}/${_n}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="webStorageSupport";class In{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xt,this._completeRedirectFn=zr,this._overrideRedirectResult=jr}async _openPopup(e,t,r,n){var o;_(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await En(e,t,r,k(),n);return bn(e,i,Zt())}async _openRedirect(e,t,r,n){await this._originValidation(e);const o=await En(e,t,r,k(),n);return rr(o),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(_(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch((()=>{delete this.eventManagers[t]})),r}async initAndGetManager(e){const t=await hn(e),r=new Wr(e);return t.register("authEvent",(t=>{b(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){const r=this.iframes[e._key()];r.send(Tn,{type:Tn},(r=>{var n;const o=null===(n=null===r||void 0===r?void 0:r[0])||void 0===n?void 0:n[Tn];void 0!==o&&t(!!o),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Te()||ve()||Ce()}}const xn=In;class Rn{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class An extends Rn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new An(e)}_finalizeEnroll(e,t,r){return jt(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Cr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class On{constructor(){}static assertion(e){return An._fromCredential(e)}}On.FACTOR_ID="phone";class Nn{static assertionForEnrollment(e,t){return Dn._fromSecret(e,t)}static assertionForSignIn(e,t){return Dn._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const r=e;b("undefined"!==typeof(null===(t=r.user)||void 0===t?void 0:t.auth),"internal-error");const n=await Vt(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Pn._fromStartTotpMfaEnrollmentResponse(n,r.user.auth)}}Nn.FACTOR_ID="totp";class Dn extends Rn{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new Dn(t,void 0,e)}static _fromEnrollmentId(e,t){return new Dn(t,e)}async _finalizeEnroll(e,t,r){return b("undefined"!==typeof this.secret,e,"argument-error"),$t(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){b(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const r={verificationCode:this.otp};return Er(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class Pn{constructor(e,t,r,n,o,i,s){this.sessionInfo=i,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Pn(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(Ln(e)||Ln(t))&&(n=!0),n&&(Ln(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),Ln(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ln(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Bn="@firebase/auth",Mn="1.7.8";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jn(e){(0,n.om)(new a.uA("auth",((t,{options:r})=>{const n=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=n.options;b(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},l=new Ne(n,o,i,c);return He(l,r),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,r)=>{const n=e.getProvider("auth-internal");n.initialize()}))),(0,n.om)(new a.uA("auth-internal",(e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new Fn(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,n.KO)(Bn,Mn,Un(e)),(0,n.KO)(Bn,Mn,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=300,$n=(0,o.XA)("authIdTokenMaxAge")||Vn;let zn=null;const qn=e=>async t=>{const r=t&&await t.getIdTokenResult(),n=r&&((new Date).getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>$n)return;const o=null===r||void 0===r?void 0:r.token;zn!==o&&(zn=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Wn(e=(0,n.Sx)()){const t=(0,n.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const r=Ke(e,{popupRedirectResolver:xn,persistence:[_r,Gt,Xt]}),i=(0,o.XA)("authTokenSyncURL");if(i&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(i,location.origin);if(location.origin===e.origin){const t=qn(e.toString());Mt(r,t,(()=>t(r.currentUser))),Bt(r,(e=>t(e)))}}const s=(0,o.Tj)("auth");return s&&Ge(r,`http://${s}`),r}function Kn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Be({loadJS(e){return new Promise(((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=g("internal-error");t.customData=e,r(t)},n.type="text/javascript",n.charset="UTF-8",Kn().appendChild(n)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),jn("Browser")},884:(e,t,r)=>{r.d(t,{gS:()=>nc,rJ:()=>Qs,kd:()=>rc,H9:()=>Xs,x7:()=>Ja,GG:()=>ec,aU:()=>Zs,AB:()=>Va,My:()=>Ua,P:()=>Pa,mZ:()=>tc,_M:()=>Ba});var n,o,i=r(928),s=r(125),a=r(424),c=r(743),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={};(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(e,t){function r(){}r.prototype=t.prototype,e.D=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.C=function(e,r,n){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return t.prototype[r].apply(e,o)}}function r(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function s(e,t,r){r||(r=0);var n=Array(16);if("string"===typeof t)for(var o=0;16>o;++o)n[o]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(o=0;16>o;++o)n[o]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],o=e.g[2];var i=e.g[3],s=t+(i^r&(o^i))+n[0]+3614090360&4294967295;t=r+(s<<7&4294967295|s>>>25),s=i+(o^t&(r^o))+n[1]+3905402710&4294967295,i=t+(s<<12&4294967295|s>>>20),s=o+(r^i&(t^r))+n[2]+606105819&4294967295,o=i+(s<<17&4294967295|s>>>15),s=r+(t^o&(i^t))+n[3]+3250441966&4294967295,r=o+(s<<22&4294967295|s>>>10),s=t+(i^r&(o^i))+n[4]+4118548399&4294967295,t=r+(s<<7&4294967295|s>>>25),s=i+(o^t&(r^o))+n[5]+1200080426&4294967295,i=t+(s<<12&4294967295|s>>>20),s=o+(r^i&(t^r))+n[6]+2821735955&4294967295,o=i+(s<<17&4294967295|s>>>15),s=r+(t^o&(i^t))+n[7]+4249261313&4294967295,r=o+(s<<22&4294967295|s>>>10),s=t+(i^r&(o^i))+n[8]+1770035416&4294967295,t=r+(s<<7&4294967295|s>>>25),s=i+(o^t&(r^o))+n[9]+2336552879&4294967295,i=t+(s<<12&4294967295|s>>>20),s=o+(r^i&(t^r))+n[10]+4294925233&4294967295,o=i+(s<<17&4294967295|s>>>15),s=r+(t^o&(i^t))+n[11]+2304563134&4294967295,r=o+(s<<22&4294967295|s>>>10),s=t+(i^r&(o^i))+n[12]+1804603682&4294967295,t=r+(s<<7&4294967295|s>>>25),s=i+(o^t&(r^o))+n[13]+4254626195&4294967295,i=t+(s<<12&4294967295|s>>>20),s=o+(r^i&(t^r))+n[14]+2792965006&4294967295,o=i+(s<<17&4294967295|s>>>15),s=r+(t^o&(i^t))+n[15]+1236535329&4294967295,r=o+(s<<22&4294967295|s>>>10),s=t+(o^i&(r^o))+n[1]+4129170786&4294967295,t=r+(s<<5&4294967295|s>>>27),s=i+(r^o&(t^r))+n[6]+3225465664&4294967295,i=t+(s<<9&4294967295|s>>>23),s=o+(t^r&(i^t))+n[11]+643717713&4294967295,o=i+(s<<14&4294967295|s>>>18),s=r+(i^t&(o^i))+n[0]+3921069994&4294967295,r=o+(s<<20&4294967295|s>>>12),s=t+(o^i&(r^o))+n[5]+3593408605&4294967295,t=r+(s<<5&4294967295|s>>>27),s=i+(r^o&(t^r))+n[10]+38016083&4294967295,i=t+(s<<9&4294967295|s>>>23),s=o+(t^r&(i^t))+n[15]+3634488961&4294967295,o=i+(s<<14&4294967295|s>>>18),s=r+(i^t&(o^i))+n[4]+3889429448&4294967295,r=o+(s<<20&4294967295|s>>>12),s=t+(o^i&(r^o))+n[9]+568446438&4294967295,t=r+(s<<5&4294967295|s>>>27),s=i+(r^o&(t^r))+n[14]+3275163606&4294967295,i=t+(s<<9&4294967295|s>>>23),s=o+(t^r&(i^t))+n[3]+4107603335&4294967295,o=i+(s<<14&4294967295|s>>>18),s=r+(i^t&(o^i))+n[8]+1163531501&4294967295,r=o+(s<<20&4294967295|s>>>12),s=t+(o^i&(r^o))+n[13]+2850285829&4294967295,t=r+(s<<5&4294967295|s>>>27),s=i+(r^o&(t^r))+n[2]+4243563512&4294967295,i=t+(s<<9&4294967295|s>>>23),s=o+(t^r&(i^t))+n[7]+1735328473&4294967295,o=i+(s<<14&4294967295|s>>>18),s=r+(i^t&(o^i))+n[12]+2368359562&4294967295,r=o+(s<<20&4294967295|s>>>12),s=t+(r^o^i)+n[5]+4294588738&4294967295,t=r+(s<<4&4294967295|s>>>28),s=i+(t^r^o)+n[8]+2272392833&4294967295,i=t+(s<<11&4294967295|s>>>21),s=o+(i^t^r)+n[11]+1839030562&4294967295,o=i+(s<<16&4294967295|s>>>16),s=r+(o^i^t)+n[14]+4259657740&4294967295,r=o+(s<<23&4294967295|s>>>9),s=t+(r^o^i)+n[1]+2763975236&4294967295,t=r+(s<<4&4294967295|s>>>28),s=i+(t^r^o)+n[4]+1272893353&4294967295,i=t+(s<<11&4294967295|s>>>21),s=o+(i^t^r)+n[7]+4139469664&4294967295,o=i+(s<<16&4294967295|s>>>16),s=r+(o^i^t)+n[10]+3200236656&4294967295,r=o+(s<<23&4294967295|s>>>9),s=t+(r^o^i)+n[13]+681279174&4294967295,t=r+(s<<4&4294967295|s>>>28),s=i+(t^r^o)+n[0]+3936430074&4294967295,i=t+(s<<11&4294967295|s>>>21),s=o+(i^t^r)+n[3]+3572445317&4294967295,o=i+(s<<16&4294967295|s>>>16),s=r+(o^i^t)+n[6]+76029189&4294967295,r=o+(s<<23&4294967295|s>>>9),s=t+(r^o^i)+n[9]+3654602809&4294967295,t=r+(s<<4&4294967295|s>>>28),s=i+(t^r^o)+n[12]+3873151461&4294967295,i=t+(s<<11&4294967295|s>>>21),s=o+(i^t^r)+n[15]+530742520&4294967295,o=i+(s<<16&4294967295|s>>>16),s=r+(o^i^t)+n[2]+3299628645&4294967295,r=o+(s<<23&4294967295|s>>>9),s=t+(o^(r|~i))+n[0]+4096336452&4294967295,t=r+(s<<6&4294967295|s>>>26),s=i+(r^(t|~o))+n[7]+1126891415&4294967295,i=t+(s<<10&4294967295|s>>>22),s=o+(t^(i|~r))+n[14]+2878612391&4294967295,o=i+(s<<15&4294967295|s>>>17),s=r+(i^(o|~t))+n[5]+4237533241&4294967295,r=o+(s<<21&4294967295|s>>>11),s=t+(o^(r|~i))+n[12]+1700485571&4294967295,t=r+(s<<6&4294967295|s>>>26),s=i+(r^(t|~o))+n[3]+2399980690&4294967295,i=t+(s<<10&4294967295|s>>>22),s=o+(t^(i|~r))+n[10]+4293915773&4294967295,o=i+(s<<15&4294967295|s>>>17),s=r+(i^(o|~t))+n[1]+2240044497&4294967295,r=o+(s<<21&4294967295|s>>>11),s=t+(o^(r|~i))+n[8]+1873313359&4294967295,t=r+(s<<6&4294967295|s>>>26),s=i+(r^(t|~o))+n[15]+4264355552&4294967295,i=t+(s<<10&4294967295|s>>>22),s=o+(t^(i|~r))+n[6]+2734768916&4294967295,o=i+(s<<15&4294967295|s>>>17),s=r+(i^(o|~t))+n[13]+1309151649&4294967295,r=o+(s<<21&4294967295|s>>>11),s=t+(o^(r|~i))+n[4]+4149444226&4294967295,t=r+(s<<6&4294967295|s>>>26),s=i+(r^(t|~o))+n[11]+3174756917&4294967295,i=t+(s<<10&4294967295|s>>>22),s=o+(t^(i|~r))+n[2]+718787259&4294967295,o=i+(s<<15&4294967295|s>>>17),s=r+(i^(o|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(o+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+o&4294967295,e.g[3]=e.g[3]+i&4294967295}function a(e,t){var r=l;return Object.prototype.hasOwnProperty.call(r,e)?r[e]:r[e]=t(e)}function c(e,t){this.h=t;for(var r=[],n=!0,o=e.length-1;0<=o;o--){var i=0|e[o];n&&i==t||(r[o]=i,n=!1)}this.g=r}t(i,r),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=this.B,o=this.h,i=0;i<t;){if(0==o)for(;i<=r;)s(this,e,i),i+=this.blockSize;if("string"===typeof e){for(;i<t;)if(n[o++]=e.charCodeAt(i++),o==this.blockSize){s(this,n),o=0;break}}else for(;i<t;)if(n[o++]=e[i++],o==this.blockSize){s(this,n),o=0;break}}this.h=o,this.o+=t},i.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.u(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var l={};function d(e){return-128<=e&&128>e?a(e,(function(e){return new c([0|e],0>e?-1:0)})):new c([0|e],0>e?-1:0)}function h(e){if(isNaN(e)||!isFinite(e))return p;if(0>e)return b(h(-e));for(var t=[],r=1,n=0;e>=r;n++)t[n]=e/r|0,r*=4294967296;return new c(t,0)}function f(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return b(f(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=h(Math.pow(t,8)),n=p,o=0;o<e.length;o+=8){var i=Math.min(8,e.length-o),s=parseInt(e.substring(o,o+i),t);8>i?(i=h(Math.pow(t,i)),n=n.j(i).add(h(s))):(n=n.j(r),n=n.add(h(s)))}return n}var p=d(0),g=d(1),m=d(16777216);function v(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function y(e){return-1==e.h}function b(e){for(var t=e.g.length,r=[],n=0;n<t;n++)r[n]=~e.g[n];return new c(r,~e.h).add(g)}function w(e,t){return e.add(b(t))}function _(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function k(e,t){this.g=e,this.h=t}function C(e,t){if(v(t))throw Error("division by zero");if(v(e))return new k(p,p);if(y(e))return t=C(b(e),t),new k(b(t.g),b(t.h));if(y(t))return t=C(e,b(t)),new k(b(t.g),t.h);if(30<e.g.length){if(y(e)||y(t))throw Error("slowDivide_ only works with positive integers.");for(var r=g,n=t;0>=n.l(e);)r=E(r),n=E(n);var o=S(r,1),i=S(n,1);for(n=S(n,2),r=S(r,2);!v(n);){var s=i.add(n);0>=s.l(e)&&(o=o.add(r),i=s),n=S(n,1),r=S(r,1)}return t=w(e,o.j(t)),new k(o,t)}for(o=p;0<=e.l(t);){for(r=Math.max(1,Math.floor(e.m()/t.m())),n=Math.ceil(Math.log(r)/Math.LN2),n=48>=n?1:Math.pow(2,n-48),i=h(r),s=i.j(t);y(s)||0<s.l(e);)r-=n,i=h(r),s=i.j(t);v(i)&&(i=g),o=o.add(i),e=w(e,s)}return new k(o,e)}function E(e){for(var t=e.g.length+1,r=[],n=0;n<t;n++)r[n]=e.i(n)<<1|e.i(n-1)>>>31;return new c(r,e.h)}function S(e,t){var r=t>>5;t%=32;for(var n=e.g.length-r,o=[],i=0;i<n;i++)o[i]=0<t?e.i(i+r)>>>t|e.i(i+r+1)<<32-t:e.i(i+r);return new c(o,e.h)}e=c.prototype,e.m=function(){if(y(this))return-b(this).m();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.i(r);e+=(0<=n?n:4294967296+n)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(v(this))return"0";if(y(this))return"-"+b(this).toString(e);for(var t=h(Math.pow(e,6)),r=this,n="";;){var o=C(r,t).g;r=w(r,o.j(t));var i=((0<r.g.length?r.g[0]:r.h)>>>0).toString(e);if(r=o,v(r))return i+n;for(;6>i.length;)i="0"+i;n=i+n}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=w(this,e),y(e)?-1:v(e)?0:1},e.abs=function(){return y(this)?b(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0,o=0;o<=t;o++){var i=n+(65535&this.i(o))+(65535&e.i(o)),s=(i>>>16)+(this.i(o)>>>16)+(e.i(o)>>>16);n=s>>>16,i&=65535,s&=65535,r[o]=s<<16|i}return new c(r,-2147483648&r[r.length-1]?-1:0)},e.j=function(e){if(v(this)||v(e))return p;if(y(this))return y(e)?b(this).j(b(e)):b(b(this).j(e));if(y(e))return b(this.j(b(e)));if(0>this.l(m)&&0>e.l(m))return h(this.m()*e.m());for(var t=this.g.length+e.g.length,r=[],n=0;n<2*t;n++)r[n]=0;for(n=0;n<this.g.length;n++)for(var o=0;o<e.g.length;o++){var i=this.i(n)>>>16,s=65535&this.i(n),a=e.i(o)>>>16,l=65535&e.i(o);r[2*n+2*o]+=s*l,_(r,2*n+2*o),r[2*n+2*o+1]+=i*l,_(r,2*n+2*o+1),r[2*n+2*o+1]+=s*a,_(r,2*n+2*o+1),r[2*n+2*o+2]+=i*a,_(r,2*n+2*o+2)}for(n=0;n<t;n++)r[n]=r[2*n+1]<<16|r[2*n];for(n=t;n<2*t;n++)r[n]=0;return new c(r,0)},e.A=function(e){return C(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.i(n)&e.i(n);return new c(r,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.i(n)|e.i(n);return new c(r,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.i(n)^e.i(n);return new c(r,this.h^e.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,o=u.Md5=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=h,c.fromString=f,n=u.Integer=c}).apply("undefined"!==typeof l?l:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var d,h,f,p,g,m,v,y,b,w="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},_={};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e};function r(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}var n=r(this);function o(e,r){if(r)e:{var o=n;e=e.split(".");for(var i=0;i<e.length-1;i++){var s=e[i];if(!(s in o))break e;o=o[s]}e=e[e.length-1],i=o[e],r=r(i),r!=i&&null!=r&&t(o,e,{configurable:!0,writable:!0,value:r})}}function i(e,t){e instanceof String&&(e+="");var r=0,n=!1,o={next:function(){if(!n&&r<e.length){var o=r++;return{value:t(o,e[o]),done:!1}}return n=!0,{done:!0,value:void 0}}};return o[Symbol.iterator]=function(){return o},o}o("Array.prototype.values",(function(e){return e||function(){return i(this,(function(e,t){return t}))}}));
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s=s||{},a=this||self;function c(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function u(e,t,r){return e.call.apply(e.bind,arguments)}function k(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function C(e,t,r){return C=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u:k,C.apply(null,arguments)}function S(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){function r(){}r.prototype=t.prototype,e.aa=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Qb=function(e,r,n){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return t.prototype[r].apply(e,o)}}function I(e){const t=e.length;if(0<t){const r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function x(e,t){for(let r=1;r<arguments.length;r++){const t=arguments[r];if(c(t)){const r=e.length||0,n=t.length||0;e.length=r+n;for(let o=0;o<n;o++)e[r+o]=t[o]}else e.push(t)}}class R{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function A(e){return/^[\s\xa0]*$/.test(e)}function O(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function N(e){return N[" "](e),e}N[" "]=function(){};var D=-1!=O().indexOf("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&-1==O().indexOf("Edge"))&&!(-1!=O().indexOf("Trident")||-1!=O().indexOf("MSIE"))&&-1==O().indexOf("Edge");function P(e,t,r){for(const n in e)t.call(r,e[n],n,e)}function L(e,t){for(const r in e)t.call(void 0,e[r],r,e)}function B(e){const t={};for(const r in e)t[r]=e[r];return t}const M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(e,t){let r,n;for(let o=1;o<arguments.length;o++){for(r in n=arguments[o],n)e[r]=n[r];for(let t=0;t<M.length;t++)r=M[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function U(e){var t=1;e=e.split(":");const r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}function j(e){a.setTimeout((()=>{throw e}),0)}function V(){var e=H;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ${constructor(){this.h=this.g=null}add(e,t){const r=z.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var z=new R((()=>new q),(e=>e.reset()));class q{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let W,K=!1,H=new $,G=()=>{const e=a.Promise.resolve(void 0);W=()=>{e.then(Q)}};var Q=()=>{for(var e;e=V();){try{e.h.call(e.g)}catch(r){j(r)}var t=z;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}K=!1};function X(){this.s=this.s,this.C=this.C}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},Y.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(r){}return e}();function Z(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(D){e:{try{N(t.nodeName);var o=!0;break e}catch(i){}o=!1}o||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.aa.h.call(this)}}T(Z,Y);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),re=0;function ne(e,t,r,n,o){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=o,this.key=++re,this.da=this.fa=!1}function oe(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ie(e){this.src=e,this.g={},this.h=0}function se(e,t){var r=t.type;if(r in e.g){var n,o=e.g[r],i=Array.prototype.indexOf.call(o,t,void 0);(n=0<=i)&&Array.prototype.splice.call(o,i,1),n&&(oe(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function ae(e,t,r,n){for(var o=0;o<e.length;++o){var i=e[o];if(!i.da&&i.listener==t&&i.capture==!!r&&i.ha==n)return o}return-1}ie.prototype.add=function(e,t,r,n,o){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var s=ae(e,t,n,o);return-1<s?(t=e[s],r||(t.fa=!1)):(t=new ne(t,this.src,i,!!n,o),t.fa=r,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),le={};function ue(e,t,r,n,o){if(n&&n.once)return fe(e,t,r,n,o);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ue(e,t[i],r,n,o);return null}return r=we(r),e&&e[te]?e.K(t,r,l(n)?!!n.capture:!!n,o):de(e,t,r,!1,n,o)}function de(e,t,r,n,o,i){if(!t)throw Error("Invalid event type");var s=l(o)?!!o.capture:!!o,a=ye(e);if(a||(e[ce]=a=new ie(e)),r=a.add(t,r,n,s,i),r.proxy)return r;if(n=he(),r.proxy=n,n.src=e,n.listener=r,e.addEventListener)J||(o=s),void 0===o&&(o=!1),e.addEventListener(t.toString(),n,o);else if(e.attachEvent)e.attachEvent(me(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return r}function he(){function e(r){return t.call(e.src,e.listener,r)}const t=ve;return e}function fe(e,t,r,n,o){if(Array.isArray(t)){for(var i=0;i<t.length;i++)fe(e,t[i],r,n,o);return null}return r=we(r),e&&e[te]?e.L(t,r,l(n)?!!n.capture:!!n,o):de(e,t,r,!0,n,o)}function pe(e,t,r,n,o){if(Array.isArray(t))for(var i=0;i<t.length;i++)pe(e,t[i],r,n,o);else n=l(n)?!!n.capture:!!n,r=we(r),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],r=ae(i,r,n,o),-1<r&&(oe(i[r]),Array.prototype.splice.call(i,r,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,r,n,o)),(r=-1<e?t[e]:null)&&ge(r))}function ge(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[te])se(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(me(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=ye(t))?(se(r,e),0==r.h&&(r.src=null,t[ce]=null)):oe(e)}}}function me(e){return e in le?le[e]:le[e]="on"+e}function ve(e,t){if(e.da)e=!0;else{t=new Z(t,this);var r=e.listener,n=e.ha||e.src;e.fa&&ge(e),e=r.call(n,t)}return e}function ye(e){return e=e[ce],e instanceof ie?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function _e(){X.call(this),this.i=new ie(this),this.M=this,this.F=null}function ke(e,t){var r,n=e.F;if(n)for(r=[];n;n=n.F)r.push(n);if(e=e.M,n=t.type||t,"string"===typeof t)t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var o=t;t=new Y(n,e),F(t,o)}if(o=!0,r)for(var i=r.length-1;0<=i;i--){var s=t.g=r[i];o=Ce(s,n,!0,t)&&o}if(s=t.g=e,o=Ce(s,n,!0,t)&&o,o=Ce(s,n,!1,t)&&o,r)for(i=0;i<r.length;i++)s=t.g=r[i],o=Ce(s,n,!1,t)&&o}function Ce(e,t,r,n){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var o=!0,i=0;i<t.length;++i){var s=t[i];if(s&&!s.da&&s.capture==r){var a=s.listener,c=s.ha||s.src;s.fa&&se(e.i,s),o=!1!==a.call(c,n)&&o}}return o&&!n.defaultPrevented}function Ee(e,t,r){if("function"===typeof e)r&&(e=C(e,r));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=C(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function Se(e){e.g=Ee((()=>{e.g=null,e.i&&(e.i=!1,Se(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}T(_e,X),_e.prototype[te]=!0,_e.prototype.removeEventListener=function(e,t,r,n){pe(this,e,t,r,n)},_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)oe(r[n]);delete t.g[e],t.h--}}this.F=null},_e.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},_e.prototype.L=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class Te extends X{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:Se(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ie(e){X.call(this),this.h=e,this.g={}}T(Ie,X);var xe=[];function Re(e){P(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}Ie.prototype.N=function(){Ie.aa.N.call(this),Re(this)},Ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ae=a.JSON.stringify,Oe=a.JSON.parse,Ne=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function De(){}function Pe(e){return e.h||(e.h=e.i())}function Le(){}De.prototype.h=null;var Be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Me(){Y.call(this,"d")}function Fe(){Y.call(this,"c")}T(Me,Y),T(Fe,Y);var Ue={},je=null;function Ve(){return je=je||new _e}function $e(e){Y.call(this,Ue.La,e)}function ze(e){const t=Ve();ke(t,new $e(t))}function qe(e,t){Y.call(this,Ue.STAT_EVENT,e),this.stat=t}function We(e){const t=Ve();ke(t,new qe(t,e))}function Ke(e,t){Y.call(this,Ue.Ma,e),this.size=t}function He(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}function Ge(){this.g=!0}function Qe(e,t,r,n,o,i){e.info((function(){if(e.g)if(i)for(var s="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");s=2<=d.length&&"type"==d[1]?s+(u+"=")+l+"&":s+(u+"=redacted&")}}else s=null;else s=i;return"XMLHTTP REQ ("+n+") [attempt "+o+"]: "+t+"\n"+r+"\n"+s}))}function Xe(e,t,r,n,o,i,s){e.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+o+"]: "+t+"\n"+r+"\n"+i+" "+s}))}function Ye(e,t,r,n){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ze(e,r)+(n?" "+n:"")}))}function Je(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ze(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r)for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var o=n[1];if(Array.isArray(o)&&!(1>o.length)){var i=o[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var s=1;s<o.length;s++)o[s]=""}}}return Ae(r)}catch(a){return t}}Ue.La="serverreachability",T($e,Y),Ue.STAT_EVENT="statevent",T(qe,Y),Ue.Ma="timingevent",T(Ke,Y),Ge.prototype.xa=function(){this.g=!1},Ge.prototype.info=function(){};var et,tt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function nt(){}function ot(e,t,r,n){this.j=e,this.i=t,this.l=r,this.R=n||1,this.U=new Ie(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new it}function it(){this.i=null,this.g="",this.h=!1}T(nt,De),nt.prototype.g=function(){return new XMLHttpRequest},nt.prototype.i=function(){return{}},et=new nt;var st={},at={};function ct(e,t,r){e.L=1,e.v=Mt(Nt(t)),e.m=r,e.P=!0,lt(e,null)}function lt(e,t){e.F=Date.now(),ht(e),e.A=Nt(e.v);var r=e.A,n=e.R;Array.isArray(n)||(n=[String(n)]),Xt(r.i,"t",n),e.C=0,r=e.j.J,e.h=new it,e.g=$r(e.j,r?t:null,!e.m),0<e.O&&(e.M=new Te(C(e.Y,e,e.g),e.O)),t=e.U,r=e.g,n=e.ca;var o="readystatechange";Array.isArray(o)||(o&&(xe[0]=o.toString()),o=xe);for(var i=0;i<o.length;i++){var s=ue(r,o[i],n||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}t=e.H?B(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ze(),Qe(e.i,e.u,e.A,e.l,e.R,e.m)}function ut(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function dt(e,t){var r=e.C,n=t.indexOf("\n",r);return-1==n?at:(r=Number(t.substring(r,n)),isNaN(r)?st:(n+=1,n+r>t.length?at:(t=t.slice(n,n+r),e.C=n+r,t)))}function ht(e){e.S=Date.now()+e.I,ft(e,e.I)}function ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=He(C(e.ba,e),t)}function pt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function gt(e){0==e.j.G||e.J||Mr(e.j,e)}function mt(e){pt(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,Re(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function vt(e,t){try{var r=e.j;if(0!=r.G&&(r.g==e||kt(r.h,e)))if(!e.K&&kt(r.h,e)&&3==r.G){try{var n=r.Da.g.parse(t)}catch(l){n=null}if(Array.isArray(n)&&3==n.length){var o=n;if(0==o[0]){e:if(!r.u){if(r.g){if(!(r.g.F+3e3<e.F))break e;Br(r),Sr(r)}Dr(r),We(18)}}else r.za=o[1],0<r.za-r.T&&37500>o[2]&&r.F&&0==r.v&&!r.C&&(r.C=He(C(r.Za,r),6e3));if(1>=_t(r.h)&&r.ca){try{r.ca()}catch(l){}r.ca=void 0}}else Ur(r,11)}else if((e.K||r.g==e)&&Br(r),!A(t))for(o=r.Da.g.parse(t),t=0;t<o.length;t++){let l=o[t];if(r.T=l[0],l=l[1],2==r.G)if("c"==l[0]){r.K=l[1],r.ia=l[2];const t=l[3];null!=t&&(r.la=t,r.j.info("VER="+r.la));const o=l[4];null!=o&&(r.Aa=o,r.j.info("SVER="+r.Aa));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(n=1.5*u,r.L=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=n.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Ct(i,i.h),i.h=null))}if(n.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.ya=e,Bt(n.I,n.D,e))}}r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-e.F,r.j.info("Handshake RTT: "+r.R+"ms")),n=r;var s=e;if(n.qa=Vr(n,n.J?n.ia:null,n.W),s.K){Et(n.h,s);var a=s,c=n.L;c&&(a.I=c),a.B&&(pt(a),ht(a)),n.g=s}else Nr(n);0<r.i.length&&Ir(r)}else"stop"!=l[0]&&"close"!=l[0]||Ur(r,7);else 3==r.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Ur(r,7):Er(r):"noop"!=l[0]&&r.l&&r.l.ta(l),r.v=0)}ze(4)}catch(l){}}ot.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==br(e)?t.j():this.Y(e)},ot.prototype.Y=function(e){try{if(e==this.g)e:{const h=br(this.g);var t=this.g.Ba();const f=this.g.Z();if(!(3>h)&&(3!=h||this.g&&(this.h.h||this.g.oa()||wr(this.g)))){this.J||4!=h||7==t||ze(8==t||0>=f?3:2),pt(this);var r=this.g.Z();this.X=r;t:if(ut(this)){var n=wr(this.g);e="";var o=n.length,i=4==br(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){mt(this),gt(this);var s="";break t}this.h.i=new a.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:!(i&&t==o-1)});n.length=0,this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.oa();if(this.o=200==r,Xe(this.i,this.u,this.A,this.l,this.R,h,r),this.o){if(this.T&&!this.K){t:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(c)){var u=c;break t}}u=null}if(!(r=u)){this.o=!1,this.s=3,We(12),mt(this),gt(this);break e}Ye(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vt(this,r)}if(this.P){let e;for(r=!0;!this.J&&this.C<s.length;){if(e=dt(this,s),e==at){4==h&&(this.s=4,We(14),r=!1),Ye(this.i,this.l,null,"[Incomplete Response]");break}if(e==st){this.s=4,We(15),Ye(this.i,this.l,s,"[Invalid Chunk]"),r=!1;break}Ye(this.i,this.l,e,null),vt(this,e)}if(ut(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=h||0!=s.length||this.h.h||(this.s=1,We(16),r=!1),this.o=this.o&&r,r){if(0<s.length&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.ba&&!d.M&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+s.length),Pr(d),d.M=!0,We(11))}}else Ye(this.i,this.l,s,"[Invalid Chunked Response]"),mt(this),gt(this)}else Ye(this.i,this.l,s,null),vt(this,s);4==h&&mt(this),this.o&&!this.J&&(4==h?Mr(this.j,this):(this.o=!1,ht(this)))}else _r(this.g),400==r&&0<s.indexOf("Unknown SID")?(this.s=3,We(12)):(this.s=0,We(13)),mt(this),gt(this)}}}catch(h){}},ot.prototype.cancel=function(){this.J=!0,mt(this)},ot.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(Je(this.i,this.A),2!=this.L&&(ze(),We(17)),mt(this),this.s=2,gt(this)):ft(this,this.S-e)};var yt=class{constructor(e,t){this.g=e,this.map=t}};function bt(e){this.l=e||10,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function _t(e){return e.h?1:e.g?e.g.size:0}function kt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ct(e,t){e.g?e.g.add(t):e.h=t}function Et(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function St(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const r of e.g.values())t=t.concat(r.D);return t}return I(e.i)}function Tt(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(c(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}function It(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(c(e)||"string"===typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}t=[],r=0;for(const n in e)t[r++]=n;return t}}}function xt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=It(e),n=Tt(e),o=n.length,i=0;i<o;i++)t.call(void 0,n[i],r&&r[i],e)}bt.prototype.cancel=function(){if(this.i=St(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Rt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function At(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),o=null;if(0<=n){var i=e[r].substring(0,n);o=e[r].substring(n+1)}else i=e[r];t(i,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function Ot(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof Ot){this.h=e.h,Dt(this,e.j),this.o=e.o,this.g=e.g,Pt(this,e.s),this.l=e.l;var t=e.i,r=new Kt;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),Lt(this,r),this.m=e.m}else e&&(t=String(e).match(Rt))?(this.h=!1,Dt(this,t[1]||"",!0),this.o=Ft(t[2]||""),this.g=Ft(t[3]||"",!0),Pt(this,t[4]),this.l=Ft(t[5]||"",!0),Lt(this,t[6]||"",!0),this.m=Ft(t[7]||"")):(this.h=!1,this.i=new Kt(null,this.h))}function Nt(e){return new Ot(e)}function Dt(e,t,r){e.j=r?Ft(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Pt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function Lt(e,t,r){t instanceof Kt?(e.i=t,Jt(e.i,e.h)):(r||(t=Ut(t,qt)),e.i=new Kt(t,e.h))}function Bt(e,t,r){e.i.set(t,r)}function Mt(e){return Bt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ft(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ut(e,t,r){return"string"===typeof e?(e=encodeURI(e).replace(t,jt),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ot.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ut(t,Vt,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(Ut(t,Vt,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.s,null!=r&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(Ut(r,"/"==r.charAt(0)?zt:$t,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",Ut(r,Wt)),e.join("")};var Vt=/[#\/\?@]/g,$t=/[#\?:]/g,zt=/[#\?]/g,qt=/[#\?@]/g,Wt=/#/g;function Kt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ht(e){e.g||(e.g=new Map,e.h=0,e.i&&At(e.i,(function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)})))}function Gt(e,t){Ht(e),t=Yt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Qt(e,t){return Ht(e),t=Yt(e,t),e.g.has(t)}function Xt(e,t,r){Gt(e,t),0<r.length&&(e.i=null,e.g.set(Yt(e,t),I(r)),e.h+=r.length)}function Yt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Jt(e,t){t&&!e.j&&(Ht(e),e.i=null,e.g.forEach((function(e,t){var r=t.toLowerCase();t!=r&&(Gt(this,t),Xt(this,r,e))}),e)),e.j=t}function Zt(e,t){const r=new Ge;if(a.Image){const n=new Image;n.onload=S(tr,r,"TestLoadImage: loaded",!0,t,n),n.onerror=S(tr,r,"TestLoadImage: error",!1,t,n),n.onabort=S(tr,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=S(tr,r,"TestLoadImage: timeout",!1,t,n),a.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=e}else t(!1)}function er(e,t){const r=new Ge,n=new AbortController,o=setTimeout((()=>{n.abort(),tr(r,"TestPingServer: timeout",!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(o),e.ok?tr(r,"TestPingServer: ok",!0,t):tr(r,"TestPingServer: server error",!1,t)})).catch((()=>{clearTimeout(o),tr(r,"TestPingServer: error",!1,t)}))}function tr(e,t,r,n,o){try{o&&(o.onload=null,o.onerror=null,o.onabort=null,o.ontimeout=null),n(r)}catch(i){}}function rr(){this.g=new Ne}function nr(e,t,r){const n=r||"";try{xt(e,(function(e,r){let o=e;l(e)&&(o=Ae(e)),t.push(n+r+"="+encodeURIComponent(o))}))}catch(o){throw t.push(n+"type="+encodeURIComponent("_badmap")),o}}function or(e){this.l=e.Ub||null,this.j=e.eb||!1}function ir(e,t){_e.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function sr(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function ar(e){e.readyState=4,e.l=null,e.j=null,e.v=null,cr(e)}function cr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function lr(e){let t="";return P(e,(function(e,r){t+=r,t+=":",t+=e,t+="\r\n"})),t}function ur(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=lr(r),"string"===typeof e?null!=r&&encodeURIComponent(String(r)):Bt(e,t,r))}function dr(e){_e.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}e=Kt.prototype,e.add=function(e,t){Ht(this),this.i=null,e=Yt(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},e.forEach=function(e,t){Ht(this),this.g.forEach((function(r,n){r.forEach((function(r){e.call(t,r,n,this)}),this)}),this)},e.na=function(){Ht(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){const o=e[n];for(let e=0;e<o.length;e++)r.push(t[n])}return r},e.V=function(e){Ht(this);let t=[];if("string"===typeof e)Qt(this,e)&&(t=t.concat(this.g.get(Yt(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},e.set=function(e,t){return Ht(this),this.i=null,e=Yt(this,e),Qt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=this.V(e),0<e.length?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];const i=encodeURIComponent(String(n)),s=this.V(n);for(n=0;n<s.length;n++){var o=i;""!==s[n]&&(o+="="+encodeURIComponent(String(s[n]))),e.push(o)}}return this.i=e.join("&")},T(or,De),or.prototype.g=function(){return new ir(this.l,this.j)},or.prototype.i=function(e){return function(){return e}}({}),T(ir,_e),e=ir.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,cr(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ar(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,cr(this)),this.g&&(this.readyState=3,cr(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sr(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ar(this):cr(this),3==this.readyState&&sr(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,ar(this))},e.Qa=function(e){this.g&&(this.response=e,ar(this))},e.ga=function(){this.g&&ar(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var r=t.next();!r.done;)r=r.value,e.push(r[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(ir.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),T(dr,_e);var hr=/^https?$/i,fr=["POST","PUT"];function pr(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,gr(e),vr(e)}function gr(e){e.A||(e.A=!0,ke(e,"complete"),ke(e,"error"))}function mr(e){if(e.h&&"undefined"!=typeof s&&(!e.v[1]||4!=br(e)||2!=e.Z()))if(e.u&&4==br(e))Ee(e.Ea,0,e);else if(ke(e,"readystatechange"),4==br(e)){e.h=!1;try{const s=e.Z();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var r;if(!(r=t)){var n;if(n=0===s){var o=String(e.D).match(Rt)[1]||null;!o&&a.self&&a.self.location&&(o=a.self.location.protocol.slice(0,-1)),n=!hr.test(o?o.toLowerCase():"")}r=n}if(r)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var i=2<br(e)?e.g.statusText:""}catch(c){i=""}e.l=i+" ["+e.Z()+"]",gr(e)}}finally{vr(e)}}}function vr(e,t){if(e.g){yr(e);const n=e.g,o=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ke(e,"ready");try{n.onreadystatechange=o}catch(r){}}}function yr(e){e.I&&(a.clearTimeout(e.I),e.I=null)}function br(e){return e.g?e.g.readyState:0}function wr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(E){return null}}function _r(e){const t={};e=(e.g&&2<=br(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(A(e[n]))continue;var r=U(e[n]);const o=r[0];if(r=r[1],"string"!==typeof r)continue;r=r.trim();const i=t[o]||[];t[o]=i,i.push(r)}L(t,(function(e){return e.join(", ")}))}function kr(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function Cr(e){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kr("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kr("baseRetryDelayMs",5e3,e),this.cb=kr("retryDelaySeedMs",1e4,e),this.Wa=kr("forwardChannelMaxRetries",2,e),this.wa=kr("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new bt(e&&e.concurrentRequestLimit),this.Da=new rr,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Er(e){if(Tr(e),3==e.G){var t=e.U++,r=Nt(e.I);if(Bt(r,"SID",e.K),Bt(r,"RID",t),Bt(r,"TYPE","terminate"),Ar(e,r),t=new ot(e,e.j,t),t.L=2,t.v=Mt(Nt(r)),r=!1,a.navigator&&a.navigator.sendBeacon)try{r=a.navigator.sendBeacon(t.v.toString(),"")}catch(n){}!r&&a.Image&&((new Image).src=t.v,r=!0),r||(t.g=$r(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ht(t)}jr(e)}function Sr(e){e.g&&(Pr(e),e.g.cancel(),e.g=null)}function Tr(e){Sr(e),e.u&&(a.clearTimeout(e.u),e.u=null),Br(e),e.h.cancel(),e.s&&("number"===typeof e.s&&a.clearTimeout(e.s),e.s=null)}function Ir(e){if(!wt(e.h)&&!e.s){e.s=!0;var t=e.Ga;W||G(),K||(W(),K=!0),H.add(t,e),e.B=0}}function xr(e,t){return!(_t(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa))&&(e.s=He(C(e.Ga,e,t),Fr(e,e.B)),e.B++,!0))}function Rr(e,t){var r;r=t?t.l:e.U++;const n=Nt(e.I);Bt(n,"SID",e.K),Bt(n,"RID",r),Bt(n,"AID",e.T),Ar(e,n),e.m&&e.o&&ur(n,e.m,e.o),r=new ot(e,e.j,r,e.B+1),null===e.m&&(r.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Or(e,r,1e3),r.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Ct(e.h,r),ct(r,n,t)}function Ar(e,t){e.H&&P(e.H,(function(e,r){Bt(t,r,e)})),e.l&&xt({},(function(e,r){Bt(t,r,e)}))}function Or(e,t,r){r=Math.min(e.i.length,r);var n=e.l?C(e.l.Na,e.l,e):null;e:{var o=e.i;let t=-1;for(;;){const e=["count="+r];-1==t?0<r?(t=o[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<r;a++){let r=o[a].g;const c=o[a].map;if(r-=t,0>r)t=Math.max(0,o[a].g-100),s=!1;else try{nr(c,e,"req"+r+"_")}catch(i){n&&n(c)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function Nr(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;W||G(),K||(W(),K=!0),H.add(t,e),e.v=0}}function Dr(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=He(C(e.Fa,e),Fr(e,e.v)),e.v++,!0)}function Pr(e){null!=e.A&&(a.clearTimeout(e.A),e.A=null)}function Lr(e){e.g=new ot(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=Nt(e.qa);Bt(t,"RID","rpc"),Bt(t,"SID",e.K),Bt(t,"AID",e.T),Bt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&Bt(t,"TO",e.ja),Bt(t,"TYPE","xmlhttp"),Ar(e,t),e.m&&e.o&&ur(t,e.m,e.o),e.L&&(e.g.I=e.L);var r=e.g;e=e.ia,r.L=1,r.v=Mt(Nt(t)),r.m=null,r.P=!0,lt(r,e)}function Br(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function Mr(e,t){var r=null;if(e.g==t){Br(e),Pr(e),e.g=null;var n=2}else{if(!kt(e.h,t))return;r=t.D,Et(e.h,t),n=1}if(0!=e.G)if(t.o)if(1==n){r=t.m?t.m.length:0,t=Date.now()-t.F;var o=e.B;n=Ve(),ke(n,new Ke(n,r)),Ir(e)}else Nr(e);else if(o=t.s,3==o||0==o&&0<t.X||!(1==n&&xr(e,t)||2==n&&Dr(e)))switch(r&&0<r.length&&(t=e.h,t.i=t.i.concat(r)),o){case 1:Ur(e,5);break;case 4:Ur(e,10);break;case 3:Ur(e,6);break;default:Ur(e,2)}}function Fr(e,t){let r=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(r*=2),r*t}function Ur(e,t){if(e.j.info("Error code "+t),2==t){var r=C(e.fb,e),n=e.Xa;const t=!n;n=new Ot(n||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Dt(n,"https"),Mt(n),t?Zt(n.toString(),r):er(n.toString(),r)}else We(2);e.G=0,e.l&&e.l.sa(t),jr(e),Tr(e)}function jr(e){if(e.G=0,e.ka=[],e.l){const t=St(e.h);0==t.length&&0==e.i.length||(x(e.ka,t),x(e.ka,e.i),e.h.i.length=0,I(e.i),e.i.length=0),e.l.ra()}}function Vr(e,t,r){var n=r instanceof Ot?Nt(r):new Ot(r);if(""!=n.g)t&&(n.g=t+"."+n.g),Pt(n,n.s);else{var o=a.location;n=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var i=new Ot(null);n&&Dt(i,n),t&&(i.g=t),o&&Pt(i,o),r&&(i.l=r),n=i}return r=e.D,t=e.ya,r&&t&&Bt(n,r,t),Bt(n,"VER",e.la),Ar(e,n),n}function $r(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ca&&!e.pa?new dr(new or({eb:r})):new dr(e.pa),t.Ha(e.J),t}function zr(){}function qr(){}function Wr(e,t){_e.call(this),this.g=new Cr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!A(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!A(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Gr(this)}function Kr(e){Me.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Hr(){Fe.call(this),this.status=1}function Gr(e){this.g=e}e=dr.prototype,e.Ha=function(e){this.J=e},e.ea=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():et.g(),this.v=this.o?Pe(this.o):Pe(et),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(i){return void pr(this,i)}if(e=r||"",r=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var o in n)r.set(o,n[o]);else{if("function"!==typeof n.keys||"function"!==typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const e of n.keys())r.set(e,n.get(e))}n=Array.from(r.keys()).find((e=>"content-type"==e.toLowerCase())),o=a.FormData&&e instanceof a.FormData,!(0<=Array.prototype.indexOf.call(fr,t,void 0))||n||o||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of r)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yr(this),this.u=!0,this.g.send(e),this.u=!1}catch(i){pr(this,i)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),vr(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vr(this,!0)),dr.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?mr(this):this.bb())},e.bb=function(){mr(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<br(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Oe(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},e=Cr.prototype,e.la=8,e.G=1,e.connect=function(e,t,r,n){We(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.I=Vr(this,null,this.W),Ir(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const o=new ot(this,this.j,e);let i=this.o;if(this.S&&(i?(i=B(i),F(i,this.S)):i=this.S),null!==this.m||this.O||(o.H=i,i=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){var n=this.i[r];if(n="__data__"in n.map&&(n=n.map.__data__,"string"===typeof n)?n.length:void 0,void 0===n)break;if(t+=n,4096<t){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=Or(this,o,t),r=Nt(this.I),Bt(r,"RID",e),Bt(r,"CVER",22),this.D&&Bt(r,"X-HTTP-Session-Id",this.D),Ar(this,r),i&&(this.O?t="headers="+encodeURIComponent(String(lr(i)))+"&"+t:this.m&&ur(r,this.m,i)),Ct(this.h,o),this.Ua&&Bt(r,"TYPE","init"),this.P?(Bt(r,"$req",t),Bt(r,"SID","null"),o.T=!0,ct(o,r,null)):ct(o,r,t),this.G=2}}else 3==this.G&&(e?Rr(this,e):0==this.i.length||wt(this.h)||Rr(this))},e.Fa=function(){if(this.u=null,Lr(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=He(C(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,We(10),Sr(this),Lr(this))},e.Za=function(){null!=this.C&&(this.C=null,Sr(this),Dr(this),We(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=zr.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},qr.prototype.g=function(e,t){return new Wr(e,t)},T(Wr,_e),Wr.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wr.prototype.close=function(){Er(this.g)},Wr.prototype.o=function(e){var t=this.g;if("string"===typeof e){var r={};r.__data__=e,e=r}else this.u&&(r={},r.__data__=Ae(e),e=r);t.i.push(new yt(t.Ya++,e)),3==t.G&&Ir(t)},Wr.prototype.N=function(){this.g.l=null,delete this.j,Er(this.g),delete this.g,Wr.aa.N.call(this)},T(Kr,Me),T(Hr,Fe),T(Gr,zr),Gr.prototype.ua=function(){ke(this.g,"a")},Gr.prototype.ta=function(e){ke(this.g,new Kr(e))},Gr.prototype.sa=function(e){ke(this.g,new Hr)},Gr.prototype.ra=function(){ke(this.g,"b")},qr.prototype.createWebChannel=qr.prototype.g,Wr.prototype.send=Wr.prototype.o,Wr.prototype.open=Wr.prototype.m,Wr.prototype.close=Wr.prototype.close,b=_.createWebChannelTransport=function(){return new qr},y=_.getStatEventTarget=function(){return Ve()},v=_.Event=Ue,m=_.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tt.NO_ERROR=0,tt.TIMEOUT=8,tt.HTTP_ERROR=6,g=_.ErrorCode=tt,rt.COMPLETE="complete",p=_.EventType=rt,Le.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",_e.prototype.listen=_e.prototype.K,f=_.WebChannel=Le,h=_.FetchXmlHttpFactory=or,dr.prototype.listenOnce=dr.prototype.L,dr.prototype.getLastError=dr.prototype.Ka,dr.prototype.getLastErrorCode=dr.prototype.Ba,dr.prototype.getStatus=dr.prototype.Z,dr.prototype.getResponseJson=dr.prototype.Oa,dr.prototype.getResponseText=dr.prototype.oa,dr.prototype.send=dr.prototype.ea,dr.prototype.setWithCredentials=dr.prototype.Ha,d=_.XhrIo=dr}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const k="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}C.UNAUTHENTICATED=new C(null),C.GOOGLE_CREDENTIALS=new C("google-credentials-uid"),C.FIRST_PARTY=new C("first-party-uid"),C.MOCK_USER=new C("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let E="10.13.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new a.Vy("@firebase/firestore");function T(){return S.logLevel}function I(e,...t){if(S.logLevel<=a.$b.DEBUG){const r=t.map(A);S.debug(`Firestore (${E}): ${e}`,...r)}}function x(e,...t){if(S.logLevel<=a.$b.ERROR){const r=t.map(A);S.error(`Firestore (${E}): ${e}`,...r)}}function R(e,...t){if(S.logLevel<=a.$b.WARN){const r=t.map(A);S.warn(`Firestore (${E}): ${e}`,...r)}}function A(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e="Unexpected state"){const t=`FIRESTORE (${E}) INTERNAL ASSERTION FAILED: `+e;throw x(t),new Error(t)}function N(e,t){e||O()}function D(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends c.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class F{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(C.UNAUTHENTICATED)))}shutdown(){}}class U{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class j{constructor(e){this.t=e,this.currentUser=C.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve();let o=new B;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new B,e.enqueueRetryable((()=>n(this.currentUser)))};const i=()=>{const t=o;e.enqueueRetryable((async()=>{await t.promise,await n(this.currentUser)}))},s=e=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new B)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(N("string"==typeof t.accessToken),new M(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return N(null===e||"string"==typeof e),new C(e)}}class V{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=C.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ${constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new V(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(C.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class z{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=e=>{null!=e.error&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const r=e.token!==this.R;return this.R=e.token,I("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>r(t)))};const n=e=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?n(e):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(N("string"==typeof e.token),this.R=e.token,new z(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let n=0;n<e;n++)r[n]=Math.floor(256*Math.random());return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const n=W(40);for(let o=0;o<n.length;++o)r.length<20&&n[o]<t&&(r+=e.charAt(n[o]%e.length))}return r}}function H(e,t){return e<t?-1:e>t?1:0}function G(e,t,r){return e.length===t.length&&e.every(((e,n)=>r(e,t[n])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Q.fromMillis(Date.now())}static fromDate(e){return Q.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Q(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Q(0,0))}static max(){return new X(new Q(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t,r){void 0===t?t=0:t>e.length&&O(),void 0===r?r=e.length-t:r>e.length-t&&O(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===Y.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Y?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let n=0;n<r;n++){const r=e.get(n),o=t.get(n);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class J extends Y{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((e=>e.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const Z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ee extends Y{construct(e,t,r){return new ee(e,t,r)}static isValidIdentifier(e){return Z.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ee(["__name__"])}static fromServerFormat(e){const t=[];let r="",n=0;const o=()=>{if(0===r.length)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let i=!1;for(;n<e.length;){const t=e[n];if("\\"===t){if(n+1===e.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?(i=!i,n++):"."!==t||i?(r+=t,n++):(o(),n++)}if(o(),i)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ee(t)}static emptyPath(){return new ee([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(J.fromString(e))}static fromName(e){return new te(J.fromString(e).popFirst(5))}static empty(){return new te(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===J.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new J(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,r,n){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=n}}re.UNKNOWN_ID=-1;function ne(e,t){const r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,o=X.fromTimestamp(1e9===n?new Q(r+1,0):new Q(r,n));return new ie(o,te.empty(),t)}function oe(e){return new ie(e.readTime,e.key,-1)}class ie{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ie(X.min(),te.empty(),-1)}static max(){return new ie(X.max(),te.empty(),-1)}}function se(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:(r=te.comparator(e.documentKey,t.documentKey),0!==r?r:H(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const ae="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ce{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(e){if(e.code!==P.FAILED_PRECONDITION||e.message!==ae)throw e;I("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ue(((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ue?t:ue.resolve(t)}catch(e){return ue.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ue.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ue.reject(t)}static resolve(e){return new ue(((t,r)=>{t(e)}))}static reject(e){return new ue(((t,r)=>{r(e)}))}static waitFor(e){return new ue(((t,r)=>{let n=0,o=0,i=!1;e.forEach((e=>{++n,e.next((()=>{++o,i&&o===n&&t()}),(e=>r(e)))})),i=!0,o===n&&t()}))}static or(e){let t=ue.resolve(!1);for(const r of e)t=t.next((e=>e?ue.resolve(e):r()));return t}static forEach(e,t){const r=[];return e.forEach(((e,n)=>{r.push(t.call(this,e,n))})),this.waitFor(r)}static mapArray(e,t){return new ue(((r,n)=>{const o=e.length,i=new Array(o);let s=0;for(let a=0;a<o;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++s,s===o&&r(i)}),(e=>n(e)))}}))}static doWhile(e,t){return new ue(((r,n)=>{const o=()=>{!0===e()?t().next((()=>{o()}),n):r()};o()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function he(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function pe(e){return null==e}function ge(e){return 0===e&&1/e==-1/0}function me(e){return"number"==typeof e&&Number.isInteger(e)&&!ge(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe.oe=-1;const ve=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ye=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],be=ye,we=[...be,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(e){let t=0;for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function ke(e,t){for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function Ce(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Se(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Se(this.root,e,this.comparator,!1)}getReverseIterator(){return new Se(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Se(this.root,e,this.comparator,!0)}}class Se{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&n&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(0===o){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,r,n,o){this.key=e,this.value=t,this.color=null!=r?r:Te.RED,this.left=null!=n?n:Te.EMPTY,this.right=null!=o?o:Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,o){return new Te(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this;const o=r(e,n.key);return n=o<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===o?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return Te.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O();if(this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1,Te.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(e,t,r,n,o){return this}insert(e,t,r){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xe(this.data.getIterator())}getIteratorFrom(e){return new xe(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ie))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class xe{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(e){this.fields=e,e.sort(ee.comparator)}static empty(){return new Re([])}unionWith(e){let t=new Ie(ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Re(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return G(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ae("Invalid base64 string: "+e):e}}(e);return new Oe(t)}static fromUint8Array(e){const t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const Ne=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function De(e){if(N(!!e),"string"==typeof e){let t=0;const r=Ne.exec(e);if(N(!!r),r[1]){let e=r[1];e=(e+"000000000").substr(0,9),t=Number(e)}const n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Pe(e.seconds),nanos:Pe(e.nanos)}}function Pe(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Le(e){return"string"==typeof e?Oe.fromBase64String(e):Oe.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function Me(e){const t=e.mapValue.fields.__previous_value__;return Be(t)?Me(t):t}function Fe(e){const t=De(e.mapValue.fields.__local_write_time__.timestampValue);return new Q(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t,r,n,o,i,s,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=o,this.forceLongPolling=i,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class je{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new je("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof je&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $e(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Be(e)?4:ot(e)?9007199254740991:rt(e)?10:11:O()}function ze(e,t){if(e===t)return!0;const r=$e(e);if(r!==$e(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Fe(e).isEqual(Fe(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const r=De(e.timestampValue),n=De(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Le(e.bytesValue).isEqual(Le(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Pe(e.geoPointValue.latitude)===Pe(t.geoPointValue.latitude)&&Pe(e.geoPointValue.longitude)===Pe(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Pe(e.integerValue)===Pe(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const r=Pe(e.doubleValue),n=Pe(t.doubleValue);return r===n?ge(r)===ge(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return G(e.arrayValue.values||[],t.arrayValue.values||[],ze);case 10:case 11:return function(e,t){const r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(_e(r)!==_e(n))return!1;for(const o in r)if(r.hasOwnProperty(o)&&(void 0===n[o]||!ze(r[o],n[o])))return!1;return!0}(e,t);default:return O()}}function qe(e,t){return void 0!==(e.values||[]).find((e=>ze(e,t)))}function We(e,t){if(e===t)return 0;const r=$e(e),n=$e(t);if(r!==n)return H(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return H(e.booleanValue,t.booleanValue);case 2:return function(e,t){const r=Pe(e.integerValue||e.doubleValue),n=Pe(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return Ke(e.timestampValue,t.timestampValue);case 4:return Ke(Fe(e),Fe(t));case 5:return H(e.stringValue,t.stringValue);case 6:return function(e,t){const r=Le(e),n=Le(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const r=e.split("/"),n=t.split("/");for(let o=0;o<r.length&&o<n.length;o++){const e=H(r[o],n[o]);if(0!==e)return e}return H(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const r=H(Pe(e.latitude),Pe(t.latitude));return 0!==r?r:H(Pe(e.longitude),Pe(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return He(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,o,i;const s=e.fields||{},a=t.fields||{},c=null===(r=s.value)||void 0===r?void 0:r.arrayValue,l=null===(n=a.value)||void 0===n?void 0:n.arrayValue,u=H((null===(o=null==c?void 0:c.values)||void 0===o?void 0:o.length)||0,(null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0);return 0!==u?u:He(c,l)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Ve.mapValue&&t===Ve.mapValue)return 0;if(e===Ve.mapValue)return 1;if(t===Ve.mapValue)return-1;const r=e.fields||{},n=Object.keys(r),o=t.fields||{},i=Object.keys(o);n.sort(),i.sort();for(let s=0;s<n.length&&s<i.length;++s){const e=H(n[s],i[s]);if(0!==e)return e;const t=We(r[n[s]],o[i[s]]);if(0!==t)return t}return H(n.length,i.length)}(e.mapValue,t.mapValue);default:throw O()}}function Ke(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return H(e,t);const r=De(e),n=De(t),o=H(r.seconds,n.seconds);return 0!==o?o:H(r.nanos,n.nanos)}function He(e,t){const r=e.values||[],n=t.values||[];for(let o=0;o<r.length&&o<n.length;++o){const e=We(r[o],n[o]);if(e)return e}return H(r.length,n.length)}function Ge(e){return Qe(e)}function Qe(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=De(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Le(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return te.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",r=!0;for(const n of e.values||[])r?r=!1:t+=",",t+=Qe(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let r="{",n=!0;for(const o of t)n?n=!1:r+=",",r+=`${o}:${Qe(e.fields[o])}`;return r+"}"}(e.mapValue):O()}function Xe(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ye(e){return!!e&&"integerValue"in e}function Je(e){return!!e&&"arrayValue"in e}function Ze(e){return!!e&&"nullValue"in e}function et(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tt(e){return!!e&&"mapValue"in e}function rt(e){var t,r;return"__vector__"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function nt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ke(e.mapValue.fields,((e,r)=>t.mapValue.fields[e]=nt(r))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=nt(e.arrayValue.values[r]);return t}return Object.assign({},e)}function ot(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!tt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nt(t)}setAll(e){let t=ee.emptyPath(),r={},n=[];e.forEach(((e,o)=>{if(!t.isImmediateParentOf(o)){const e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=o.popLast()}e?r[o.lastSegment()]=nt(e):n.push(o.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,r,n)}delete(e){const t=this.field(e.popLast());tt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];tt(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){ke(t,((t,r)=>e[t]=r));for(const n of r)delete e[n]}clone(){return new it(nt(this.value))}}function st(e){const t=[];return ke(e.fields,((e,r)=>{const n=new ee([e]);if(tt(r)){const e=st(r.mapValue).fields;if(0===e.length)t.push(n);else for(const r of e)t.push(n.child(r))}else t.push(n)})),new Re(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class at{constructor(e,t,r,n,o,i,s){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=o,this.data=i,this.documentState=s}static newInvalidDocument(e){return new at(e,0,X.min(),X.min(),X.min(),it.empty(),0)}static newFoundDocument(e,t,r,n){return new at(e,1,t,X.min(),r,n,0)}static newNoDocument(e,t){return new at(e,2,t,X.min(),X.min(),it.empty(),0)}static newUnknownDocument(e,t){return new at(e,3,t,X.min(),X.min(),it.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this.position=e,this.inclusive=t}}function lt(e,t,r){let n=0;for(let o=0;o<e.position.length;o++){const i=t[o],s=e.position[o];if(n=i.field.isKeyField()?te.comparator(te.fromName(s.referenceValue),r.key):We(s,r.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return n}function ut(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!ze(e.position[r],t.position[r]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t="asc"){this.field=e,this.dir=t}}function ht(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{}class pt extends ft{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new kt(e,t,r):"array-contains"===t?new Tt(e,r):"in"===t?new It(e,r):"not-in"===t?new xt(e,r):"array-contains-any"===t?new Rt(e,r):new pt(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new Ct(e,r):new Et(e,r)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(We(t,this.value)):null!==t&&$e(this.value)===$e(t)&&this.matchesComparison(We(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gt extends ft{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new gt(e,t)}matches(e){return mt(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mt(e){return"and"===e.op}function vt(e){return yt(e)&&mt(e)}function yt(e){for(const t of e.filters)if(t instanceof gt)return!1;return!0}function bt(e){if(e instanceof pt)return e.field.canonicalString()+e.op.toString()+Ge(e.value);if(vt(e))return e.filters.map((e=>bt(e))).join(",");{const t=e.filters.map((e=>bt(e))).join(",");return`${e.op}(${t})`}}function wt(e,t){return e instanceof pt?function(e,t){return t instanceof pt&&e.op===t.op&&e.field.isEqual(t.field)&&ze(e.value,t.value)}(e,t):e instanceof gt?function(e,t){return t instanceof gt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,r,n)=>e&&wt(r,t.filters[n])),!0)}(e,t):void O()}function _t(e){return e instanceof pt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ge(e.value)}`}(e):e instanceof gt?function(e){return e.op.toString()+" {"+e.getFilters().map(_t).join(" ,")+"}"}(e):"Filter"}class kt extends pt{constructor(e,t,r){super(e,t,r),this.key=te.fromName(r.referenceValue)}matches(e){const t=te.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ct extends pt{constructor(e,t){super(e,"in",t),this.keys=St("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Et extends pt{constructor(e,t){super(e,"not-in",t),this.keys=St("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function St(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map((e=>te.fromName(e.referenceValue)))}class Tt extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Je(t)&&qe(t.arrayValue,this.value)}}class It extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&qe(this.value.arrayValue,t)}}class xt extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!qe(this.value.arrayValue,t)}}class Rt extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Je(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>qe(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t=null,r=[],n=[],o=null,i=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=o,this.startAt=i,this.endAt=s,this.ue=null}}function Ot(e,t=null,r=[],n=[],o=null,i=null,s=null){return new At(e,t,r,n,o,i,s)}function Nt(e){const t=D(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>bt(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),pe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ge(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ge(e))).join(",")),t.ue=e}return t.ue}function Dt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!ht(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!wt(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ut(e.startAt,t.startAt)&&ut(e.endAt,t.endAt)}function Pt(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt{constructor(e,t=null,r=[],n=[],o=null,i="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=o,this.limitType=i,this.startAt=s,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Bt(e,t,r,n,o,i,s,a){return new Lt(e,t,r,n,o,i,s,a)}function Mt(e){return new Lt(e)}function Ft(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ut(e){return null!==e.collectionGroup}function jt(e){const t=D(e);if(null===t.ce){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",n=function(e){let t=new Ie(ee.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);n.forEach((n=>{e.has(n.canonicalString())||n.isKeyField()||t.ce.push(new dt(n,r))})),e.has(ee.keyField().canonicalString())||t.ce.push(new dt(ee.keyField(),r))}return t.ce}function Vt(e){const t=D(e);return t.le||(t.le=$t(t,jt(e))),t.le}function $t(e,t){if("F"===e.limitType)return Ot(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new dt(e.field,t)}));const r=e.endAt?new ct(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new ct(e.startAt.position,e.startAt.inclusive):null;return Ot(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}function zt(e,t){const r=e.filters.concat([t]);return new Lt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function qt(e,t,r){return new Lt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function Wt(e,t){return Dt(Vt(e),Vt(t))&&e.limitType===t.limitType}function Kt(e){return`${Nt(Vt(e))}|lt:${e.limitType}`}function Ht(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>_t(e))).join(", ")}]`),pe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ge(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ge(e))).join(",")),`Target(${t})`}(Vt(e))}; limitType=${e.limitType})`}function Gt(e,t){return t.isFoundDocument()&&function(e,t){const r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):te.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(const r of jt(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(const r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,r){const n=lt(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,jt(e),t))&&!(e.endAt&&!function(e,t,r){const n=lt(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,jt(e),t))}(e,t)}function Qt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xt(e){return(t,r)=>{let n=!1;for(const o of jt(e)){const e=Yt(o,t,r);if(0!==e)return e;n=n||o.field.isKeyField()}return 0}}function Yt(e,t,r){const n=e.field.isKeyField()?te.comparator(t.key,r.key):function(e,t,r){const n=t.data.field(e),o=r.data.field(e);return null!==n&&null!==o?We(n,o):O()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r)for(const[n,o]of r)if(this.equalsFn(n,e))return o}has(e){return void 0!==this.get(e)}set(e,t){const r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<n.length;o++)if(this.equalsFn(n[o][0],e))return void(n[o]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){ke(this.inner,((t,r)=>{for(const[n,o]of r)e(n,o)}))}isEmpty(){return Ce(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Ee(te.comparator);function er(){return Zt}const tr=new Ee(te.comparator);function rr(...e){let t=tr;for(const r of e)t=t.insert(r.key,r);return t}function nr(e){let t=tr;return e.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function or(){return sr()}function ir(){return sr()}function sr(){return new Jt((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ar=new Ee(te.comparator),cr=new Ie(te.comparator);function lr(...e){let t=cr;for(const r of e)t=t.add(r);return t}const ur=new Ie(H);function dr(){return ur}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ge(t)?"-0":t}}function fr(e){return{integerValue:""+e}}function pr(e,t){return me(t)?fr(t):hr(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this._=void 0}}function mr(e,t,r){return e instanceof br?function(e,t){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Be(t)&&(t=Me(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(r,t):e instanceof wr?_r(e,t):e instanceof kr?Cr(e,t):function(e,t){const r=yr(e,t),n=Sr(r)+Sr(e.Pe);return Ye(r)&&Ye(e.Pe)?fr(n):hr(e.serializer,n)}(e,t)}function vr(e,t,r){return e instanceof wr?_r(e,t):e instanceof kr?Cr(e,t):r}function yr(e,t){return e instanceof Er?function(e){return Ye(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class br extends gr{}class wr extends gr{constructor(e){super(),this.elements=e}}function _r(e,t){const r=Tr(t);for(const n of e.elements)r.some((e=>ze(e,n)))||r.push(n);return{arrayValue:{values:r}}}class kr extends gr{constructor(e){super(),this.elements=e}}function Cr(e,t){let r=Tr(t);for(const n of e.elements)r=r.filter((e=>!ze(e,n)));return{arrayValue:{values:r}}}class Er extends gr{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Sr(e){return Pe(e.integerValue||e.doubleValue)}function Tr(e){return Je(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof wr&&t instanceof wr||e instanceof kr&&t instanceof kr?G(e.elements,t.elements,ze):e instanceof Er&&t instanceof Er?ze(e.Pe,t.Pe):e instanceof br&&t instanceof br}(e.transform,t.transform)}class xr{constructor(e,t){this.version=e,this.transformResults=t}}class Rr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rr}static exists(e){return new Rr(void 0,e)}static updateTime(e){return new Rr(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ar(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Or{}function Nr(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new $r(e.key,Rr.none()):new Mr(e.key,e.data,Rr.none());{const r=e.data,n=it.empty();let o=new Ie(ee.comparator);for(let e of t.fields)if(!o.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),o=o.add(e)}return new Fr(e.key,n,new Re(o.toArray()),Rr.none())}}function Dr(e,t,r){e instanceof Mr?function(e,t,r){const n=e.value.clone(),o=jr(e.fieldTransforms,t,r.transformResults);n.setAll(o),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(e,t,r):e instanceof Fr?function(e,t,r){if(!Ar(e.precondition,t))return void t.convertToUnknownDocument(r.version);const n=jr(e.fieldTransforms,t,r.transformResults),o=t.data;o.setAll(Ur(e)),o.setAll(n),t.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,r):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,r)}function Pr(e,t,r,n){return e instanceof Mr?function(e,t,r,n){if(!Ar(e.precondition,t))return r;const o=e.value.clone(),i=Vr(e.fieldTransforms,n,t);return o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null}(e,t,r,n):e instanceof Fr?function(e,t,r,n){if(!Ar(e.precondition,t))return r;const o=Vr(e.fieldTransforms,n,t),i=t.data;return i.setAll(Ur(e)),i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===r?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,r,n):function(e,t,r){return Ar(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}(e,t,r)}function Lr(e,t){let r=null;for(const n of e.fieldTransforms){const e=t.data.field(n.field),o=yr(n.transform,e||null);null!=o&&(null===r&&(r=it.empty()),r.set(n.field,o))}return r||null}function Br(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&G(e,t,((e,t)=>Ir(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Mr extends Or{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class Fr extends Or{constructor(e,t,r,n,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ur(e){const t=new Map;return e.fieldMask.fields.forEach((r=>{if(!r.isEmpty()){const n=e.data.field(r);t.set(r,n)}})),t}function jr(e,t,r){const n=new Map;N(e.length===r.length);for(let o=0;o<r.length;o++){const i=e[o],s=i.transform,a=t.data.field(i.field);n.set(i.field,vr(s,a,r[o]))}return n}function Vr(e,t,r){const n=new Map;for(const o of e){const e=o.transform,i=r.data.field(o.field);n.set(o.field,mr(e,i,t))}return n}class $r extends Or{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zr extends Or{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let n=0;n<this.mutations.length;n++){const t=this.mutations[n];t.key.isEqual(e.key)&&Dr(t,e,r[n])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Pr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Pr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ir();return this.mutations.forEach((n=>{const o=e.get(n.key),i=o.overlayedDocument;let s=this.applyToLocalView(i,o.mutatedFields);s=t.has(n.key)?null:s;const a=Nr(i,s);null!==a&&r.set(n.key,a),i.isValidDocument()||i.convertToNoDocument(X.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),lr())}isEqual(e){return this.batchId===e.batchId&&G(this.mutations,e.mutations,((e,t)=>Br(e,t)))&&G(this.baseMutations,e.baseMutations,((e,t)=>Br(e,t)))}}class Wr{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){N(e.mutations.length===r.length);let n=function(){return ar}();const o=e.mutations;for(let i=0;i<o.length;i++)n=n.insert(o[i].key,r[i].version);return new Wr(e,t,r,n)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr,Qr;function Xr(e){switch(e){default:return O();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Yr(e){if(void 0===e)return x("GRPC error has no .code"),P.UNKNOWN;switch(e){case Gr.OK:return P.OK;case Gr.CANCELLED:return P.CANCELLED;case Gr.UNKNOWN:return P.UNKNOWN;case Gr.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Gr.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Gr.INTERNAL:return P.INTERNAL;case Gr.UNAVAILABLE:return P.UNAVAILABLE;case Gr.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Gr.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Gr.NOT_FOUND:return P.NOT_FOUND;case Gr.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Gr.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Gr.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Gr.ABORTED:return P.ABORTED;case Gr.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Gr.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Gr.DATA_LOSS:return P.DATA_LOSS;default:return O()}}(Qr=Gr||(Gr={}))[Qr.OK=0]="OK",Qr[Qr.CANCELLED=1]="CANCELLED",Qr[Qr.UNKNOWN=2]="UNKNOWN",Qr[Qr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qr[Qr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qr[Qr.NOT_FOUND=5]="NOT_FOUND",Qr[Qr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qr[Qr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qr[Qr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qr[Qr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qr[Qr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qr[Qr.ABORTED=10]="ABORTED",Qr[Qr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qr[Qr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qr[Qr.INTERNAL=13]="INTERNAL",Qr[Qr.UNAVAILABLE=14]="UNAVAILABLE",Qr[Qr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Jr=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new n([4294967295,4294967295],0);function tn(e){const t=Zr().encode(e),r=new o;return r.update(t),new Uint8Array(r.digest())}function rn(e){const t=new DataView(e.buffer),r=t.getUint32(0,!0),o=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new n([r,o],0),new n([i,s],0)]}class nn{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new on(`Invalid padding: ${t}`);if(r<0)throw new on(`Invalid hash count: ${r}`);if(e.length>0&&0===this.hashCount)throw new on(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new on(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=n.fromNumber(this.Ie)}Ee(e,t,r){let o=e.add(t.multiply(n.fromNumber(r)));return 1===o.compare(en)&&(o=new n([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=tn(e),[r,n]=rn(t);for(let o=0;o<this.hashCount;o++){const e=this.Ee(r,n,o);if(!this.de(e))return!1}return!0}static create(e,t,r){const n=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),i=new nn(o,n,t);return r.forEach((e=>i.insert(e))),i}insert(e){if(0===this.Ie)return;const t=tn(e),[r,n]=rn(t);for(let o=0;o<this.hashCount;o++){const e=this.Ee(r,n,o);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class on extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,r,n,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const n=new Map;return n.set(e,an.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new sn(X.min(),n,new Ee(H),er(),lr())}}class an{constructor(e,t,r,n,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new an(r,t,lr(),lr(),lr())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,r,n){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=n}}class ln{constructor(e,t){this.targetId=e,this.me=t}}class un{constructor(e,t,r=Oe.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class dn{constructor(){this.fe=0,this.ge=pn(),this.pe=Oe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=lr(),t=lr(),r=lr();return this.ge.forEach(((n,o)=>{switch(o){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:O()}})),new an(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=pn()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,N(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hn{constructor(e){this.Le=e,this.Be=new Map,this.ke=er(),this.qe=fn(),this.Qe=new Ee(H)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:O()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,r)=>{this.ze(r)&&t(r)}))}He(e){const t=e.targetId,r=e.me.count,n=this.Je(t);if(n){const o=n.target;if(Pt(o))if(0===r){const e=new te(o.path);this.Ue(t,e,at.newNoDocument(e,X.min()))}else N(1===r);else{const n=this.Ye(t);if(n!==r){const r=this.Ze(e),o=r?this.Xe(r,e,n):1;if(0!==o){this.je(t);const e=2===o?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}null==Jr||Jr.et(function(e,t,r,n,o){var i,s,a,c,l,u;const d={localCacheCount:e,existenceFilterCount:t.count,databaseId:r.database,projectId:r.projectId},h=t.unchangedNames;return h&&(d.bloomFilter={applied:0===o,hashCount:null!==(i=null==h?void 0:h.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(c=null===(a=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(u=null===(l=null==h?void 0:h.bits)||void 0===l?void 0:l.padding)&&void 0!==u?u:0,mightContain:e=>{var t;return null!==(t=null==n?void 0:n.mightContain(e))&&void 0!==t&&t}}),d}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,e.me,this.Le.tt(),r,o))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:n=0},hashCount:o=0}=t;let i,s;try{i=Le(r).toUint8Array()}catch(e){if(e instanceof Ae)return R("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{s=new nn(i,n,o)}catch(e){return R(e instanceof on?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===s.Ie?null:s}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let n=0;return r.forEach((r=>{const o=this.Le.tt(),i=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(i)||(this.Ue(t,r,null),n++)})),n}rt(e){const t=new Map;this.Be.forEach(((r,n)=>{const o=this.Je(n);if(o){if(r.current&&Pt(o.target)){const t=new te(o.target.path);null!==this.ke.get(t)||this.it(n,t)||this.Ue(n,t,at.newNoDocument(t,e))}r.be&&(t.set(n,r.ve()),r.Ce())}}));let r=lr();this.qe.forEach(((e,t)=>{let n=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)})),n&&(r=r.add(e))})),this.ke.forEach(((t,r)=>r.setReadTime(e)));const n=new sn(e,t,this.Qe,this.ke,r);return this.ke=er(),this.qe=fn(),this.Qe=new Ee(H),n}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const n=this.Ge(e);this.it(e,t)?n.Fe(t,1):n.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new dn,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ie(H),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||I("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new dn),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function fn(){return new Ee(te.comparator)}function pn(){return new Ee(te.comparator)}const gn=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),mn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),vn=(()=>{const e={and:"AND",or:"OR"};return e})();class yn{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bn(e,t){return e.useProto3Json||pe(t)?t:{value:t}}function wn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _n(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function kn(e,t){return wn(e,t.toTimestamp())}function Cn(e){return N(!!e),X.fromTimestamp(function(e){const t=De(e);return new Q(t.seconds,t.nanos)}(e))}function En(e,t){return Sn(e,t).canonicalString()}function Sn(e,t){const r=function(e){return new J(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?r:r.child(t)}function Tn(e){const t=J.fromString(e);return N(Qn(t)),t}function In(e,t){return En(e.databaseId,t.path)}function xn(e,t){const r=Tn(t);if(r.get(1)!==e.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new te(Nn(r))}function Rn(e,t){return En(e.databaseId,t)}function An(e){const t=Tn(e);return 4===t.length?J.emptyPath():Nn(t)}function On(e){return new J(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Nn(e){return N(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Dn(e,t,r){return{name:In(e,t),fields:r.value.mapValue.fields}}function Pn(e,t){let r;if("targetChange"in t){t.targetChange;const n=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(N(void 0===t||"string"==typeof t),Oe.fromBase64String(t||"")):(N(void 0===t||t instanceof Buffer||t instanceof Uint8Array),Oe.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?P.UNKNOWN:Yr(e.code);return new L(t,e.message||"")}(s);r=new un(n,o,i,a||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const o=xn(e,n.document.name),i=Cn(n.document.updateTime),s=n.document.createTime?Cn(n.document.createTime):X.min(),a=new it({mapValue:{fields:n.document.fields}}),c=at.newFoundDocument(o,i,s,a),l=n.targetIds||[],u=n.removedTargetIds||[];r=new cn(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const o=xn(e,n.document),i=n.readTime?Cn(n.readTime):X.min(),s=at.newNoDocument(o,i),a=n.removedTargetIds||[];r=new cn([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const o=xn(e,n.document),i=n.removedTargetIds||[];r=new cn([],i,o,null)}else{if(!("filter"in t))return O();{t.filter;const e=t.filter;e.targetId;const{count:n=0,unchangedNames:o}=e,i=new Hr(n,o),s=e.targetId;r=new ln(s,i)}}return r}function Ln(e,t){let r;if(t instanceof Mr)r={update:Dn(e,t.key,t.value)};else if(t instanceof $r)r={delete:In(e,t.key)};else if(t instanceof Fr)r={update:Dn(e,t.key,t.data),updateMask:Gn(t.fieldMask)};else{if(!(t instanceof zr))return O();r={verify:In(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const r=t.transform;if(r instanceof br)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof wr)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof kr)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof Er)return{fieldPath:t.field.canonicalString(),increment:r.Pe};throw O()}(0,e)))),t.precondition.isNone||(r.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:kn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:O()}(e,t.precondition)),r}function Bn(e,t){return e&&e.length>0?(N(void 0!==t),e.map((e=>function(e,t){let r=e.updateTime?Cn(e.updateTime):Cn(t);return r.isEqual(X.min())&&(r=Cn(t)),new xr(r,e.transformResults||[])}(e,t)))):[]}function Mn(e,t){return{documents:[Rn(e,t.path)]}}function Fn(e,t){const r={structuredQuery:{}},n=t.path;let o;null!==t.collectionGroup?(o=n,r.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=n.popLast(),r.structuredQuery.from=[{collectionId:n.lastSegment()}]),r.parent=Rn(e,o);const i=function(e){if(0!==e.length)return Hn(gt.create(e,"and"))}(t.filters);i&&(r.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Wn(e.field),direction:$n(e.dir)}}(e)))}(t.orderBy);s&&(r.structuredQuery.orderBy=s);const a=bn(e,t.limit);return null!==a&&(r.structuredQuery.limit=a),t.startAt&&(r.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(r.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:r,parent:o}}function Un(e){let t=An(e.parent);const r=e.structuredQuery,n=r.from?r.from.length:0;let o=null;if(n>0){N(1===n);const e=r.from[0];e.allDescendants?o=e.collectionId:t=t.child(e.collectionId)}let i=[];r.where&&(i=function(e){const t=Vn(e);return t instanceof gt&&vt(t)?t.getFilters():[t]}(r.where));let s=[];r.orderBy&&(s=function(e){return e.map((e=>function(e){return new dt(Kn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(r.orderBy));let a=null;r.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,pe(t)?null:t}(r.limit));let c=null;r.startAt&&(c=function(e){const t=!!e.before,r=e.values||[];return new ct(r,t)}(r.startAt));let l=null;return r.endAt&&(l=function(e){const t=!e.before,r=e.values||[];return new ct(r,t)}(r.endAt)),Bt(t,o,s,i,a,"F",c,l)}function jn(e,t){const r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}function Vn(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Kn(e.unaryFilter.field);return pt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Kn(e.unaryFilter.field);return pt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=Kn(e.unaryFilter.field);return pt.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Kn(e.unaryFilter.field);return pt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(e):void 0!==e.fieldFilter?function(e){return pt.create(Kn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return gt.create(e.compositeFilter.filters.map((e=>Vn(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(e):O()}function $n(e){return gn[e]}function zn(e){return mn[e]}function qn(e){return vn[e]}function Wn(e){return{fieldPath:e.canonicalString()}}function Kn(e){return ee.fromServerFormat(e.fieldPath)}function Hn(e){return e instanceof pt?function(e){if("=="===e.op){if(et(e.value))return{unaryFilter:{field:Wn(e.field),op:"IS_NAN"}};if(Ze(e.value))return{unaryFilter:{field:Wn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(et(e.value))return{unaryFilter:{field:Wn(e.field),op:"IS_NOT_NAN"}};if(Ze(e.value))return{unaryFilter:{field:Wn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(e.field),op:zn(e.op),value:e.value}}}(e):e instanceof gt?function(e){const t=e.getFilters().map((e=>Hn(e)));return 1===t.length?t[0]:{compositeFilter:{op:qn(e.op),filters:t}}}(e):O()}function Gn(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Qn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,r,n,o=X.min(),i=X.min(),s=Oe.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.ct=e}}function Jn(e){const t=Un({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?qt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Pe(e.integerValue));else if("doubleValue"in e){const r=Pe(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),ge(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),"string"==typeof r&&(r=De(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Le(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?ot(e)?this.dt(t,Number.MAX_SAFE_INTEGER):rt(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):O()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const n of Object.keys(r))this.Vt(n,t),this.Tt(r[n],t)}wt(e,t){var r,n;const o=e.fields||{};this.dt(t,53);const i="value",s=(null===(n=null===(r=o[i].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.dt(t,15),t.At(Pe(s)),this.Vt(i,t),this.Tt(o[i],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const n of r)this.Tt(n,t)}yt(e,t){this.dt(t,37),te.fromName(e).path.forEach((e=>{this.dt(t,60),this.Dt(e,t)}))}dt(e,t){e.At(t)}ft(e){e.At(2)}}Zn.vt=new Zn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(){this.un=new to}addToCollectionParentIndex(e,t){return this.un.add(t),ue.resolve()}getCollectionParents(e,t){return ue.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return ue.resolve()}deleteFieldIndex(e,t){return ue.resolve()}deleteAllFieldIndexes(e){return ue.resolve()}createTargetIndexes(e,t){return ue.resolve()}getDocumentsMatchingTarget(e,t){return ue.resolve(null)}getIndexType(e,t){return ue.resolve(0)}getFieldIndexes(e,t){return ue.resolve([])}getNextCollectionGroupToUpdate(e){return ue.resolve(null)}getMinOffset(e,t){return ue.resolve(ie.min())}getMinOffsetFromCollectionGroup(e,t){return ue.resolve(ie.min())}updateCollectionGroup(e,t,r){return ue.resolve()}updateIndexEntries(e,t){return ue.resolve()}}class to{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new Ie(J.comparator),o=!n.has(r);return this.index[t]=n.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new Ie(J.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class ro{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ro(e,ro.DEFAULT_COLLECTION_PERCENTILE,ro.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ro.DEFAULT_COLLECTION_PERCENTILE=10,ro.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ro.DEFAULT=new ro(41943040,ro.DEFAULT_COLLECTION_PERCENTILE,ro.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ro.DISABLED=new ro(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new no(0)}static kn(){return new no(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oo{constructor(){this.changes=new Jt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return void 0!==r?ue.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((n=>(r=n,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==r&&Pr(r.mutation,e,Re.empty(),Q.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,lr()).next((()=>t))))}getLocalViewOfDocuments(e,t,r=lr()){const n=or();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,r).next((e=>{let t=rr();return e.forEach(((e,r)=>{t=t.insert(e,r.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const r=or();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,lr())))}populateOverlays(e,t,r){const n=[];return r.forEach((e=>{t.has(e)||n.push(e)})),this.documentOverlayCache.getOverlays(e,n).next((e=>{e.forEach(((e,r)=>{t.set(e,r)}))}))}computeViews(e,t,r,n){let o=er();const i=sr(),s=function(){return sr()}();return t.forEach(((e,t)=>{const s=r.get(t.key);n.has(t.key)&&(void 0===s||s.mutation instanceof Fr)?o=o.insert(t.key,t):void 0!==s?(i.set(t.key,s.mutation.getFieldMask()),Pr(s.mutation,t,s.mutation.getFieldMask(),Q.now())):i.set(t.key,Re.empty())})),this.recalculateAndSaveOverlays(e,o).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var r;return s.set(e,new io(t,null!==(r=i.get(e))&&void 0!==r?r:null))})),s)))}recalculateAndSaveOverlays(e,t){const r=sr();let n=new Ee(((e,t)=>e-t)),o=lr();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const o of e)o.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let s=r.get(e)||Re.empty();s=o.applyToLocalView(i,s),r.set(e,s);const a=(n.get(o.batchId)||lr()).add(e);n=n.insert(o.batchId,a)}))})).next((()=>{const i=[],s=n.getReverseIterator();for(;s.hasNext();){const n=s.getNext(),a=n.key,c=n.value,l=ir();c.forEach((e=>{if(!o.has(e)){const n=Nr(t.get(e),r.get(e));null!==n&&l.set(e,n),o=o.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,l))}return ue.waitFor(i)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,r,n){return function(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ut(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next((o=>{const i=n-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-o.size):ue.resolve(or());let s=-1,a=o;return i.next((t=>ue.forEach(t,((t,r)=>(s<r.largestBatchId&&(s=r.largestBatchId),o.get(t)?ue.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,o))).next((()=>this.computeViews(e,a,t,lr()))).next((e=>({batchId:s,changes:nr(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new te(t)).next((e=>{let t=rr();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){const o=t.collectionGroup;let i=rr();return this.indexManager.getCollectionParents(e,o).next((s=>ue.forEach(s,(s=>{const a=function(e,t){return new Lt(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(o));return this.getDocumentsMatchingCollectionQuery(e,a,r,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,r,n){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((i=>(o=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,n)))).next((e=>{o.forEach(((t,r)=>{const n=r.getKey();null===e.get(n)&&(e=e.insert(n,at.newInvalidDocument(n)))}));let r=rr();return e.forEach(((e,n)=>{const i=o.get(e);void 0!==i&&Pr(i.mutation,n,Re.empty(),Q.now()),Gt(t,n)&&(r=r.insert(e,n))})),r}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return ue.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Cn(e.createTime)}}(t)),ue.resolve()}getNamedQuery(e,t){return ue.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(e){return{name:e.name,query:Jn(e.bundledQuery),readTime:Cn(e.readTime)}}(t)),ue.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.overlays=new Ee(te.comparator),this.Ir=new Map}getOverlay(e,t){return ue.resolve(this.overlays.get(t))}getOverlays(e,t){const r=or();return ue.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&r.set(t,e)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((r,n)=>{this.ht(e,t,n)})),ue.resolve()}removeOverlaysForBatchId(e,t,r){const n=this.Ir.get(r);return void 0!==n&&(n.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(r)),ue.resolve()}getOverlaysForCollection(e,t,r){const n=or(),o=t.length+1,i=new te(t.child("")),s=this.overlays.getIteratorFrom(i);for(;s.hasNext();){const e=s.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===o&&e.largestBatchId>r&&n.set(e.getKey(),e)}return ue.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let o=new Ee(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=o.get(e.largestBatchId);null===t&&(t=or(),o=o.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=or(),a=o.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>s.set(e,t))),s.size()>=n)break;return ue.resolve(s)}ht(e,t,r){const n=this.overlays.get(r.key);if(null!==n){const e=this.Ir.get(n.largestBatchId).delete(r.key);this.Ir.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new Kr(t,r));let o=this.Ir.get(t);void 0===o&&(o=lr(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return ue.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ue.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.Tr=new Ie(ho.Er),this.dr=new Ie(ho.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ho(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new ho(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new te(new J([])),r=new ho(t,e),n=new ho(t,e+1),o=[];return this.dr.forEachInRange([r,n],(e=>{this.Vr(e),o.push(e.key)})),o}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new te(new J([])),r=new ho(t,e),n=new ho(t,e+1);let o=lr();return this.dr.forEachInRange([r,n],(e=>{o=o.add(e.key)})),o}containsKey(e){const t=new ho(e,0),r=this.Tr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class ho{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return te.comparator(e.key,t.key)||H(e.wr,t.wr)}static Ar(e,t){return H(e.wr,t.wr)||te.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ie(ho.Er)}checkEmpty(e){return ue.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new qr(o,t,r,n);this.mutationQueue.push(i);for(const s of n)this.br=this.br.add(new ho(s.key,o)),this.indexManager.addToCollectionParentIndex(e,s.key.path.popLast());return ue.resolve(i)}lookupMutationBatch(e,t){return ue.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,n=this.vr(r),o=n<0?0:n;return ue.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return ue.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return ue.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ho(t,0),n=new ho(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,n],(e=>{const t=this.Dr(e.wr);o.push(t)})),ue.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(H);return t.forEach((e=>{const t=new ho(e,0),n=new ho(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,n],(e=>{r=r.add(e.wr)}))})),ue.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,n=r.length+1;let o=r;te.isDocumentKey(o)||(o=o.child(""));const i=new ho(new te(o),0);let s=new Ie(H);return this.br.forEachWhile((e=>{const t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(s=s.add(e.wr)),!0)}),i),ue.resolve(this.Cr(s))}Cr(e){const t=[];return e.forEach((e=>{const r=this.Dr(e);null!==r&&t.push(r)})),t}removeMutationBatch(e,t){N(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let r=this.br;return ue.forEach(t.mutations,(n=>{const o=new ho(n.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)})).next((()=>{this.br=r}))}On(e){}containsKey(e,t){const r=new ho(t,0),n=this.br.firstAfterOrEqual(r);return ue.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,ue.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.Mr=e,this.docs=function(){return new Ee(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,n=this.docs.get(r),o=n?n.size:0,i=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:i}),this.size+=i-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return ue.resolve(r?r.document.mutableCopy():at.newInvalidDocument(t))}getEntries(e,t){let r=er();return t.forEach((e=>{const t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():at.newInvalidDocument(e))})),ue.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let o=er();const i=t.path,s=new te(i.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:e,value:{document:s}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||se(oe(s),r)<=0||(n.has(s.key)||Gt(t,s))&&(o=o.insert(s.key,s.mutableCopy()))}return ue.resolve(o)}getAllFromCollectionGroup(e,t,r,n){O()}Or(e,t){return ue.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new go(this)}getSize(e){return ue.resolve(this.size)}}class go extends oo{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,n)=>{n.isValidDocument()?t.push(this.cr.addEntry(e,n)):this.cr.removeEntry(r)})),ue.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.persistence=e,this.Nr=new Jt((e=>Nt(e)),Dt),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new uo,this.targetCount=0,this.kr=no.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,r)=>t(r))),ue.resolve()}getLastRemoteSnapshotVersion(e){return ue.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ue.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),ue.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),ue.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new no(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,ue.resolve()}updateTargetData(e,t){return this.Kn(t),ue.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,ue.resolve()}removeTargets(e,t,r){let n=0;const o=[];return this.Nr.forEach(((i,s)=>{s.sequenceNumber<=t&&null===r.get(s.targetId)&&(this.Nr.delete(i),o.push(this.removeMatchingKeysForTargetId(e,s.targetId)),n++)})),ue.waitFor(o).next((()=>n))}getTargetCount(e){return ue.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return ue.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),ue.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const n=this.persistence.referenceDelegate,o=[];return n&&t.forEach((t=>{o.push(n.markPotentiallyOrphaned(e,t))})),ue.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),ue.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return ue.resolve(r)}containsKey(e,t){return ue.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t){this.qr={},this.overlays={},this.Qr=new fe(0),this.Kr=!1,this.Kr=!0,this.$r=new lo,this.referenceDelegate=e(this),this.Ur=new mo(this),this.indexManager=new eo,this.remoteDocumentCache=function(e){return new po(e)}((e=>this.referenceDelegate.Wr(e))),this.serializer=new Yn(t),this.Gr=new ao(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new co,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new fo(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){I("MemoryPersistence","Starting transaction:",e);const n=new yo(this.Qr.next());return this.referenceDelegate.zr(),r(n).next((e=>this.referenceDelegate.jr(n).next((()=>e)))).toPromise().then((e=>(n.raiseOnCommittedEvent(),e)))}Hr(e,t){return ue.or(Object.values(this.qr).map((r=>()=>r.containsKey(e,t))))}}class yo extends ce{constructor(e){super(),this.currentSequenceNumber=e}}class bo{constructor(e){this.persistence=e,this.Jr=new uo,this.Yr=null}static Zr(e){return new bo(e)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),ue.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),ue.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),ue.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>r.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ue.forEach(this.Xr,(r=>{const n=te.fromPath(r);return this.ei(e,n).next((e=>{e||t.removeEntry(n,X.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return ue.or([()=>ue.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wo{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=n}static Wi(e,t){let r=lr(),n=lr();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:n=n.add(o.doc.key)}return new wo(e,t.fromCache,r,n)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return(0,c.nr)()?8:de((0,c.ZQ)())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,n){const o={result:null};return this.Yi(e,t).next((e=>{o.result=e})).next((()=>{if(!o.result)return this.Zi(e,t,n,r).next((e=>{o.result=e}))})).next((()=>{if(o.result)return;const r=new _o;return this.Xi(e,t,r).next((n=>{if(o.result=n,this.zi)return this.es(e,t,r,n.size)}))})).next((()=>o.result))}es(e,t,r,n){return r.documentReadCount<this.ji?(T()<=a.$b.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",Ht(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),ue.resolve()):(T()<=a.$b.DEBUG&&I("QueryEngine","Query:",Ht(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.Hi*n?(T()<=a.$b.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",Ht(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vt(t))):ue.resolve())}Yi(e,t){if(Ft(t))return ue.resolve(null);let r=Vt(t);return this.indexManager.getIndexType(e,r).next((n=>0===n?null:(null!==t.limit&&1===n&&(t=qt(t,null,"F"),r=Vt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((n=>{const o=lr(...n);return this.Ji.getDocuments(e,o).next((n=>this.indexManager.getMinOffset(e,r).next((r=>{const i=this.ts(t,n);return this.ns(t,i,o,r.readTime)?this.Yi(e,qt(t,null,"F")):this.rs(e,i,t,r)}))))})))))}Zi(e,t,r,n){return Ft(t)||n.isEqual(X.min())?ue.resolve(null):this.Ji.getDocuments(e,r).next((o=>{const i=this.ts(t,o);return this.ns(t,i,r,n)?ue.resolve(null):(T()<=a.$b.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Ht(t)),this.rs(e,i,t,ne(n,-1)).next((e=>e)))}))}ts(e,t){let r=new Ie(Xt(e));return t.forEach(((t,n)=>{Gt(e,n)&&(r=r.add(n))})),r}ns(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;const o="F"===e.limitType?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(n)>0)}Xi(e,t,r){return T()<=a.$b.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",Ht(t)),this.Ji.getDocumentsMatchingQuery(e,t,ie.min(),r)}rs(e,t,r,n){return this.Ji.getDocumentsMatchingQuery(e,r,n).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,r,n){this.persistence=e,this.ss=t,this.serializer=n,this.os=new Ee(H),this._s=new Jt((e=>Nt(e)),Dt),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new so(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function Eo(e,t,r,n){return new Co(e,t,r,n)}async function So(e,t){const r=D(e);return await r.persistence.runTransaction("Handle user change","readonly",(e=>{let n;return r.mutationQueue.getAllMutationBatches(e).next((o=>(n=o,r.ls(t),r.mutationQueue.getAllMutationBatches(e)))).next((t=>{const o=[],i=[];let s=lr();for(const e of n){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return r.localDocuments.getDocuments(e,s).next((e=>({hs:e,removedBatchIds:o,addedBatchIds:i})))}))}))}function To(e,t){const r=D(e);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const n=t.batch.keys(),o=r.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,r,n){const o=r.batch,i=o.keys();let s=ue.resolve();return i.forEach((e=>{s=s.next((()=>n.getEntry(t,e))).next((t=>{const i=r.docVersions.get(e);N(null!==i),t.version.compareTo(i)<0&&(o.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))}))})),s.next((()=>e.mutationQueue.removeMutationBatch(t,o)))}(r,e,t,o).next((()=>o.apply(e))).next((()=>r.mutationQueue.performConsistencyCheck(e))).next((()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId))).next((()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=lr();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t)))).next((()=>r.localDocuments.getDocuments(e,n)))}))}function Io(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function xo(e,t){const r=D(e),n=t.snapshotVersion;let o=r.os;return r.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=r.cs.newChangeBuffer({trackRemovals:!0});o=r.os;const s=[];t.targetChanges.forEach(((i,a)=>{const c=o.get(a);if(!c)return;s.push(r.Ur.removeMatchingKeys(e,i.removedDocuments,a).next((()=>r.Ur.addMatchingKeys(e,i.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?l=l.withResumeToken(Oe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):i.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(i.resumeToken,n)),o=o.insert(a,l),function(e,t,r){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size>0)}(c,l,i)&&s.push(r.Ur.updateTargetData(e,l))}));let a=er(),c=lr();if(t.documentUpdates.forEach((n=>{t.resolvedLimboDocuments.has(n)&&s.push(r.persistence.referenceDelegate.updateLimboDocument(e,n))})),s.push(Ro(e,i,t.documentUpdates).next((e=>{a=e.Ps,c=e.Is}))),!n.isEqual(X.min())){const t=r.Ur.getLastRemoteSnapshotVersion(e).next((t=>r.Ur.setTargetsMetadata(e,e.currentSequenceNumber,n)));s.push(t)}return ue.waitFor(s).next((()=>i.apply(e))).next((()=>r.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(r.os=o,e)))}function Ro(e,t,r){let n=lr(),o=lr();return r.forEach((e=>n=n.add(e))),t.getEntries(e,n).next((e=>{let n=er();return r.forEach(((r,i)=>{const s=e.get(r);i.isFoundDocument()!==s.isFoundDocument()&&(o=o.add(r)),i.isNoDocument()&&i.version.isEqual(X.min())?(t.removeEntry(r,i.readTime),n=n.insert(r,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),n=n.insert(r,i)):I("LocalStore","Ignoring outdated watch update for ",r,". Current version:",s.version," Watch version:",i.version)})),{Ps:n,Is:o}}))}function Ao(e,t){const r=D(e);return r.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),r.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Oo(e,t){const r=D(e);return r.persistence.runTransaction("Allocate target","readwrite",(e=>{let n;return r.Ur.getTargetData(e,t).next((o=>o?(n=o,ue.resolve(n)):r.Ur.allocateTargetId(e).next((o=>(n=new Xn(t,o,"TargetPurposeListen",e.currentSequenceNumber),r.Ur.addTargetData(e,n).next((()=>n)))))))})).then((e=>{const n=r.os.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(r.os=r.os.insert(e.targetId,e),r._s.set(t,e.targetId)),e}))}async function No(e,t,r){const n=D(e),o=n.os.get(t),i=r?"readwrite":"readwrite-primary";try{r||await n.persistence.runTransaction("Release target",i,(e=>n.persistence.referenceDelegate.removeTarget(e,o)))}catch(e){if(!he(e))throw e;I("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}n.os=n.os.remove(t),n._s.delete(o.target)}function Do(e,t,r){const n=D(e);let o=X.min(),i=lr();return n.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,r){const n=D(e),o=n._s.get(r);return void 0!==o?ue.resolve(n.os.get(o)):n.Ur.getTargetData(t,r)}(n,e,Vt(t)).next((t=>{if(t)return o=t.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>n.ss.getDocumentsMatchingQuery(e,t,r?o:X.min(),r?i:lr()))).next((e=>(Po(n,Qt(t),e),{documents:e,Ts:i})))))}function Po(e,t,r){let n=e.us.get(t)||X.min();r.forEach(((e,t)=>{t.readTime.compareTo(n)>0&&(n=t.readTime)})),e.us.set(t,n)}class Lo{constructor(){this.activeTargetIds=dr()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bo{constructor(){this.so=new Lo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Lo,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{_o(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=null;function jo(){return null===Uo?Uo=function(){return 268435456+Math.round(2147483648*Math.random())}():Uo++,"0x"+Uo.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Vo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="WebChannelConnection";class qo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${r}/databases/${n}`,this.Co="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get Fo(){return!1}Mo(e,t,r,n,o){const i=jo(),s=this.xo(e,t.toUriEncodedString());I("RestConnection",`Sending RPC '${e}' ${i}:`,s,r);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,n,o),this.No(e,s,a,r).then((t=>(I("RestConnection",`Received RPC '${e}' ${i}: `,t),t)),(t=>{throw R("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",s,"request:",r),t}))}Lo(e,t,r,n,o,i){return this.Mo(e,t,r,n,o)}Oo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+E}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,r)=>e[r]=t)),r&&r.headers.forEach(((t,r)=>e[r]=t))}xo(e,t){const r=Vo[e];return`${this.Do}/v1/${t}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,n){const o=jo();return new Promise(((i,s)=>{const a=new d;a.setWithCredentials(!0),a.listenOnce(p.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case g.NO_ERROR:const t=a.getResponseJson();I(zo,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(t)),i(t);break;case g.TIMEOUT:I(zo,`RPC '${e}' ${o} timed out`),s(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case g.HTTP_ERROR:const r=a.getStatus();if(I(zo,`RPC '${e}' ${o} failed with status:`,r,"response text:",a.getResponseText()),r>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(t)>=0?t:P.UNKNOWN}(t.status);s(new L(e,t.message))}else s(new L(P.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new L(P.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{I(zo,`RPC '${e}' ${o} completed.`)}}));const c=JSON.stringify(n);I(zo,`RPC '${e}' ${o} sending request:`,n),a.send(t,"POST",c,r,15)}))}Bo(e,t,r){const n=jo(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=b(),s=y(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new h({})),this.Oo(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;const l=o.join("");I(zo,`Creating RPC '${e}' stream ${n}: ${l}`,a);const u=i.createWebChannel(l,a);let d=!1,p=!1;const g=new $o({Io:t=>{p?I(zo,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(d||(I(zo,`Opening RPC '${e}' stream ${n} transport.`),u.open(),d=!0),I(zo,`RPC '${e}' stream ${n} sending:`,t),u.send(t))},To:()=>u.close()}),w=(e,t,r)=>{e.listen(t,(e=>{try{r(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return w(u,f.EventType.OPEN,(()=>{p||(I(zo,`RPC '${e}' stream ${n} transport opened.`),g.yo())})),w(u,f.EventType.CLOSE,(()=>{p||(p=!0,I(zo,`RPC '${e}' stream ${n} transport closed`),g.So())})),w(u,f.EventType.ERROR,(t=>{p||(p=!0,R(zo,`RPC '${e}' stream ${n} transport errored:`,t),g.So(new L(P.UNAVAILABLE,"The operation could not be completed")))})),w(u,f.EventType.MESSAGE,(t=>{var r;if(!p){const o=t.data[0];N(!!o);const i=o,s=i.error||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){I(zo,`RPC '${e}' stream ${n} received error:`,s);const t=s.status;let r=function(e){const t=Gr[e];if(void 0!==t)return Yr(t)}(t),o=s.message;void 0===r&&(r=P.INTERNAL,o="Unknown error status: "+t+" with message "+s.message),p=!0,g.So(new L(r,o)),u.close()}else I(zo,`RPC '${e}' stream ${n} received:`,o),g.bo(o)}})),w(s,v.STAT_EVENT,(t=>{t.stat===m.PROXY?I(zo,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===m.NOPROXY&&I(zo,`RPC '${e}' stream ${n} detected no buffering proxy`)})),setTimeout((()=>{g.wo()}),0),g}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(e){return new yn(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,r=1e3,n=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=n,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),n=Math.max(0,t-r);n>0&&I("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,n,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,r,n,o,i,s,a){this.ui=e,this.Ho=r,this.Jo=n,this.connection=o,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ho(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(x(t.toString()),x("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===P.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,r])=>{this.Yo===t&&this.P_(e,r)}),(t=>{e((()=>{const e=new L(P.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{r((()=>this.listener.Eo()))})),this.stream.Ro((()=>{r((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{r((()=>this.I_(e)))})),this.stream.onMessage((e=>{r((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return I("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Qo extends Go{constructor(e,t,r,n,o,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,i),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Pn(this.serializer,e),r=function(e){if(!("targetChange"in e))return X.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?X.min():t.readTime?Cn(t.readTime):X.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=On(this.serializer),t.addTarget=function(e,t){let r;const n=t.target;if(r=Pt(n)?{documents:Mn(e,n)}:{query:Fn(e,n)._t},r.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=_n(e,t.resumeToken);const n=bn(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(X.min())>0){r.readTime=wn(e,t.snapshotVersion.toTimestamp());const n=bn(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);const r=jn(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=On(this.serializer),t.removeTarget=e,this.a_(t)}}class Xo extends Go{constructor(e,t,r,n,o,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,i),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return N(!!e.streamToken),this.lastStreamToken=e.streamToken,N(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){N(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Bn(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=On(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Ln(this.serializer,e)))};this.a_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.y_=!1}w_(){if(this.y_)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,n){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,i])=>this.connection.Mo(e,Sn(t,r),n,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new L(P.UNKNOWN,e.toString())}))}Lo(e,t,r,n,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Lo(e,Sn(t,r),n,i,s,o))).catch((e=>{throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new L(P.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Jo{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(x(t),this.D_=!1):I("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,r,n,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o((e=>{r.enqueueAndForget((async()=>{ci(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=D(e);t.L_.add(4),await ti(t),t.q_.set("Unknown"),t.L_.delete(4),await ei(t)}(this))}))})),this.q_=new Jo(r,n)}}async function ei(e){if(ci(e))for(const t of e.B_)await t(!0)}async function ti(e){for(const t of e.B_)await t(!1)}function ri(e,t){const r=D(e);r.N_.has(t.targetId)||(r.N_.set(t.targetId,t),ai(r)?si(r):Ii(r).r_()&&oi(r,t))}function ni(e,t){const r=D(e),n=Ii(r);r.N_.delete(t),n.r_()&&ii(r,t),0===r.N_.size&&(n.r_()?n.o_():ci(r)&&r.q_.set("Unknown"))}function oi(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){const r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}Ii(e).A_(t)}function ii(e,t){e.Q_.xe(t),Ii(e).R_(t)}function si(e){e.Q_=new hn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Ii(e).start(),e.q_.v_()}function ai(e){return ci(e)&&!Ii(e).n_()&&e.N_.size>0}function ci(e){return 0===D(e).L_.size}function li(e){e.Q_=void 0}async function ui(e){e.q_.set("Online")}async function di(e){e.N_.forEach(((t,r)=>{oi(e,t)}))}async function hi(e,t){li(e),ai(e)?(e.q_.M_(t),si(e)):e.q_.set("Unknown")}async function fi(e,t,r){if(e.q_.set("Online"),t instanceof un&&2===t.state&&t.cause)try{await async function(e,t){const r=t.cause;for(const n of t.targetIds)e.N_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.N_.delete(n),e.Q_.removeTarget(n))}(e,t)}catch(r){I("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await pi(e,r)}else if(t instanceof cn?e.Q_.Ke(t):t instanceof ln?e.Q_.He(t):e.Q_.We(t),!r.isEqual(X.min()))try{const t=await Io(e.localStore);r.compareTo(t)>=0&&await function(e,t){const r=e.Q_.rt(t);return r.targetChanges.forEach(((r,n)=>{if(r.resumeToken.approximateByteSize()>0){const o=e.N_.get(n);o&&e.N_.set(n,o.withResumeToken(r.resumeToken,t))}})),r.targetMismatches.forEach(((t,r)=>{const n=e.N_.get(t);if(!n)return;e.N_.set(t,n.withResumeToken(Oe.EMPTY_BYTE_STRING,n.snapshotVersion)),ii(e,t);const o=new Xn(n.target,t,r,n.sequenceNumber);oi(e,o)})),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){I("RemoteStore","Failed to raise snapshot:",t),await pi(e,t)}}async function pi(e,t,r){if(!he(t))throw t;e.L_.add(1),await ti(e),e.q_.set("Offline"),r||(r=()=>Io(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{I("RemoteStore","Retrying IndexedDB access"),await r(),e.L_.delete(1),await ei(e)}))}function gi(e,t){return t().catch((r=>pi(e,r,t)))}async function mi(e){const t=D(e),r=xi(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;vi(t);)try{const e=await Ao(t.localStore,n);if(null===e){0===t.O_.length&&r.o_();break}n=e.batchId,yi(t,e)}catch(e){await pi(t,e)}bi(t)&&wi(t)}function vi(e){return ci(e)&&e.O_.length<10}function yi(e,t){e.O_.push(t);const r=xi(e);r.r_()&&r.V_&&r.m_(t.mutations)}function bi(e){return ci(e)&&!xi(e).n_()&&e.O_.length>0}function wi(e){xi(e).start()}async function _i(e){xi(e).p_()}async function ki(e){const t=xi(e);for(const r of e.O_)t.m_(r.mutations)}async function Ci(e,t,r){const n=e.O_.shift(),o=Wr.from(n,t,r);await gi(e,(()=>e.remoteSyncer.applySuccessfulWrite(o))),await mi(e)}async function Ei(e,t){t&&xi(e).V_&&await async function(e,t){if(function(e){return Xr(e)&&e!==P.ABORTED}(t.code)){const r=e.O_.shift();xi(e).s_(),await gi(e,(()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t))),await mi(e)}}(e,t),bi(e)&&wi(e)}async function Si(e,t){const r=D(e);r.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const n=ci(r);r.L_.add(3),await ti(r),n&&r.q_.set("Unknown"),await r.remoteSyncer.handleCredentialChange(t),r.L_.delete(3),await ei(r)}async function Ti(e,t){const r=D(e);t?(r.L_.delete(2),await ei(r)):t||(r.L_.add(2),await ti(r),r.q_.set("Unknown"))}function Ii(e){return e.K_||(e.K_=function(e,t,r){const n=D(e);return n.w_(),new Qo(t,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,r)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Eo:ui.bind(null,e),Ro:di.bind(null,e),mo:hi.bind(null,e),d_:fi.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),ai(e)?si(e):e.q_.set("Unknown")):(await e.K_.stop(),li(e))}))),e.K_}function xi(e){return e.U_||(e.U_=function(e,t,r){const n=D(e);return n.w_(),new Xo(t,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,r)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:_i.bind(null,e),mo:Ei.bind(null,e),f_:ki.bind(null,e),g_:Ci.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await mi(e)):(await e.U_.stop(),e.O_.length>0&&(I("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ri{constructor(e,t,r,n,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=o,this.deferred=new B,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,o){const i=Date.now()+r,s=new Ri(e,t,i,n,o);return s.start(r),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ai(e,t){if(x("AsyncQueue",`${t}: ${e}`),he(e))return new L(P.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.comparator=e?(t,r)=>e(t,r)||te.comparator(t.key,r.key):(e,t)=>te.comparator(e.key,t.key),this.keyedMap=rr(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Oi(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Oi))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const r=new Oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.W_=new Ee(te.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?0!==e.type&&3===r.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==r.type?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.W_=this.W_.remove(t):1===e.type&&2===r.type?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):O():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Di{constructor(e,t,r,n,o,i,s,a,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=o,this.fromCache=i,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,n,o){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Di(e,t,Oi.emptySet(t),i,r,n,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==r[n].type||!t[n].doc.isEqual(r[n].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class Li{constructor(){this.queries=Bi(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const r=D(e),n=r.queries;r.queries=Bi(),n.forEach(((e,r)=>{for(const n of r.j_)n.onError(t)}))}(this,new L(P.ABORTED,"Firestore shutting down"))}}function Bi(){return new Jt((e=>Kt(e)),Wt)}async function Mi(e,t){const r=D(e);let n=3;const o=t.query;let i=r.queries.get(o);i?!i.H_()&&t.J_()&&(n=2):(i=new Pi,n=t.J_()?0:1);try{switch(n){case 0:i.z_=await r.onListen(o,!0);break;case 1:i.z_=await r.onListen(o,!1);break;case 2:await r.onFirstRemoteStoreListen(o)}}catch(e){const r=Ai(e,`Initialization of query '${Ht(t.query)}' failed`);return void t.onError(r)}r.queries.set(o,i),i.j_.push(t),t.Z_(r.onlineState),i.z_&&t.X_(i.z_)&&Vi(r)}async function Fi(e,t){const r=D(e),n=t.query;let o=3;const i=r.queries.get(n);if(i){const e=i.j_.indexOf(t);e>=0&&(i.j_.splice(e,1),0===i.j_.length?o=t.J_()?0:1:!i.H_()&&t.J_()&&(o=2))}switch(o){case 0:return r.queries.delete(n),r.onUnlisten(n,!0);case 1:return r.queries.delete(n),r.onUnlisten(n,!1);case 2:return r.onLastRemoteStoreUnlisten(n);default:return}}function Ui(e,t){const r=D(e);let n=!1;for(const o of t){const e=o.query,t=r.queries.get(e);if(t){for(const e of t.j_)e.X_(o)&&(n=!0);t.z_=o}}n&&Vi(r)}function ji(e,t,r){const n=D(e),o=n.queries.get(t);if(o)for(const i of o.j_)i.onError(r);n.queries.delete(t)}function Vi(e){e.Y_.forEach((e=>{e.next()}))}var $i,zi;(zi=$i||($i={})).ea="default",zi.Cache="cache";class qi{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const r of e.docChanges)3!==r.type&&t.push(r);e=new Di(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const r="Offline"!==t;return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==$i.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi{constructor(e){this.key=e}}class Ki{constructor(e){this.key=e}}class Hi{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=lr(),this.mutatedKeys=lr(),this.Aa=Xt(e),this.Ra=new Oi(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Ni,n=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,i=n,s=!1;const a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,c="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal(((e,t)=>{const l=n.get(e),u=Gt(this.query,t)?t:null,d=!!l&&this.mutatedKeys.has(l.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?d!==h&&(r.track({type:3,doc:u}),f=!0):this.ga(l,u)||(r.track({type:2,doc:u}),f=!0,(a&&this.Aa(u,a)>0||c&&this.Aa(u,c)<0)&&(s=!0)):!l&&u?(r.track({type:0,doc:u}),f=!0):l&&!u&&(r.track({type:1,doc:l}),f=!0,(a||c)&&(s=!0)),f&&(u?(i=i.add(u),o=h?o.add(e):o.delete(e)):(i=i.delete(e),o=o.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),o=o.delete(e.key),r.track({type:1,doc:e})}return{Ra:i,fa:r,ns:s,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const i=e.fa.G_();i.sort(((e,t)=>function(e,t){const r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return r(e)-r(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(r),n=null!=n&&n;const s=t&&!n?this.ya():[],a=0===this.da.size&&this.current&&!n?1:0,c=a!==this.Ea;return this.Ea=a,0!==i.length||c?{snapshot:new Di(this.query,e.Ra,o,i,e.mutatedKeys,0===a,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:s}:{wa:s}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ni,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=lr(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new Ki(e))})),this.da.forEach((r=>{e.has(r)||t.push(new Wi(r))})),t}ba(e){this.Ta=e.Ts,this.da=lr();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Di.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Gi{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Qi{constructor(e){this.key=e,this.va=!1}}class Xi{constructor(e,t,r,n,o,i){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=o,this.maxConcurrentLimboResolutions=i,this.Ca={},this.Fa=new Jt((e=>Kt(e)),Wt),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(te.comparator),this.Na=new Map,this.La=new uo,this.Ba={},this.ka=new Map,this.qa=no.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Yi(e,t,r=!0){const n=bs(e);let o;const i=n.Fa.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),o=i.view.Da()):o=await Zi(n,t,r,!0),o}async function Ji(e,t){const r=bs(e);await Zi(r,t,!0,!1)}async function Zi(e,t,r,n){const o=await Oo(e.localStore,Vt(t)),i=o.targetId,s=r?e.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return n&&(a=await es(e,t,i,"current"===s,o.resumeToken)),e.isPrimaryClient&&r&&ri(e.remoteStore,o),a}async function es(e,t,r,n,o){e.Ka=(t,r,n)=>async function(e,t,r,n){let o=t.view.ma(r);o.ns&&(o=await Do(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,o))));const i=n&&n.targetChanges.get(t.targetId),s=n&&null!=n.targetMismatches.get(t.targetId),a=t.view.applyChanges(o,e.isPrimaryClient,i,s);return fs(e,t.targetId,a.wa),a.snapshot}(e,t,r,n);const i=await Do(e.localStore,t,!0),s=new Hi(t,i.Ts),a=s.ma(i.documents),c=an.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,o),l=s.applyChanges(a,e.isPrimaryClient,c);fs(e,r,l.wa);const u=new Gi(t,r,s);return e.Fa.set(t,u),e.Ma.has(r)?e.Ma.get(r).push(t):e.Ma.set(r,[t]),l.snapshot}async function ts(e,t,r){const n=D(e),o=n.Fa.get(t),i=n.Ma.get(o.targetId);if(i.length>1)return n.Ma.set(o.targetId,i.filter((e=>!Wt(e,t)))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(o.targetId),n.sharedClientState.isActiveQueryTarget(o.targetId)||await No(n.localStore,o.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(o.targetId),r&&ni(n.remoteStore,o.targetId),ds(n,o.targetId)})).catch(le)):(ds(n,o.targetId),await No(n.localStore,o.targetId,!0))}async function rs(e,t){const r=D(e),n=r.Fa.get(t),o=r.Ma.get(n.targetId);r.isPrimaryClient&&1===o.length&&(r.sharedClientState.removeLocalQueryTarget(n.targetId),ni(r.remoteStore,n.targetId))}async function ns(e,t,r){const n=ws(e);try{const e=await function(e,t){const r=D(e),n=Q.now(),o=t.reduce(((e,t)=>e.add(t.key)),lr());let i,s;return r.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=er(),c=lr();return r.cs.getEntries(e,o).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>r.localDocuments.getOverlayedDocuments(e,a))).next((o=>{i=o;const s=[];for(const e of t){const t=Lr(e,i.get(e.key).overlayedDocument);null!=t&&s.push(new Fr(e.key,t,st(t.value.mapValue),Rr.exists(!0)))}return r.mutationQueue.addMutationBatch(e,n,s,t)})).next((t=>{s=t;const n=t.applyToLocalDocumentSet(i,c);return r.documentOverlayCache.saveOverlays(e,t.batchId,n)}))})).then((()=>({batchId:s.batchId,changes:nr(i)})))}(n.localStore,t);n.sharedClientState.addPendingMutation(e.batchId),function(e,t,r){let n=e.Ba[e.currentUser.toKey()];n||(n=new Ee(H)),n=n.insert(t,r),e.Ba[e.currentUser.toKey()]=n}(n,e.batchId,r),await ms(n,e.changes),await mi(n.remoteStore)}catch(e){const t=Ai(e,"Failed to persist write");r.reject(t)}}async function os(e,t){const r=D(e);try{const e=await xo(r.localStore,t);t.targetChanges.forEach(((e,t)=>{const n=r.Na.get(t);n&&(N(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.va=!0:e.modifiedDocuments.size>0?N(n.va):e.removedDocuments.size>0&&(N(n.va),n.va=!1))})),await ms(r,e,t)}catch(e){await le(e)}}function is(e,t,r){const n=D(e);if(n.isPrimaryClient&&0===r||!n.isPrimaryClient&&1===r){const e=[];n.Fa.forEach(((r,n)=>{const o=n.view.Z_(t);o.snapshot&&e.push(o.snapshot)})),function(e,t){const r=D(e);r.onlineState=t;let n=!1;r.queries.forEach(((e,r)=>{for(const o of r.j_)o.Z_(t)&&(n=!0)})),n&&Vi(r)}(n.eventManager,t),e.length&&n.Ca.d_(e),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function ss(e,t,r){const n=D(e);n.sharedClientState.updateQueryState(t,"rejected",r);const o=n.Na.get(t),i=o&&o.key;if(i){let e=new Ee(te.comparator);e=e.insert(i,at.newNoDocument(i,X.min()));const r=lr().add(i),o=new sn(X.min(),new Map,new Ee(H),e,r);await os(n,o),n.Oa=n.Oa.remove(i),n.Na.delete(t),gs(n)}else await No(n.localStore,t,!1).then((()=>ds(n,t,r))).catch(le)}async function as(e,t){const r=D(e),n=t.batch.batchId;try{const e=await To(r.localStore,t);us(r,n,null),ls(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await ms(r,e)}catch(e){await le(e)}}async function cs(e,t,r){const n=D(e);try{const e=await function(e,t){const r=D(e);return r.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next((t=>(N(null!==t),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t)))).next((()=>r.mutationQueue.performConsistencyCheck(e))).next((()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t))).next((()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n))).next((()=>r.localDocuments.getDocuments(e,n)))}))}(n.localStore,t);us(n,t,r),ls(n,t),n.sharedClientState.updateMutationState(t,"rejected",r),await ms(n,e)}catch(r){await le(r)}}function ls(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function us(e,t,r){const n=D(e);let o=n.Ba[n.currentUser.toKey()];if(o){const e=o.get(t);e&&(r?e.reject(r):e.resolve(),o=o.remove(t)),n.Ba[n.currentUser.toKey()]=o}}function ds(e,t,r=null){e.sharedClientState.removeLocalQueryTarget(t);for(const n of e.Ma.get(t))e.Fa.delete(n),r&&e.Ca.$a(n,r);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||hs(e,t)}))}function hs(e,t){e.xa.delete(t.path.canonicalString());const r=e.Oa.get(t);null!==r&&(ni(e.remoteStore,r),e.Oa=e.Oa.remove(t),e.Na.delete(r),gs(e))}function fs(e,t,r){for(const n of r)n instanceof Wi?(e.La.addReference(n.key,t),ps(e,n)):n instanceof Ki?(I("SyncEngine","Document no longer in limbo: "+n.key),e.La.removeReference(n.key,t),e.La.containsKey(n.key)||hs(e,n.key)):O()}function ps(e,t){const r=t.key,n=r.path.canonicalString();e.Oa.get(r)||e.xa.has(n)||(I("SyncEngine","New document in limbo: "+r),e.xa.add(n),gs(e))}function gs(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const r=new te(J.fromString(t)),n=e.qa.next();e.Na.set(n,new Qi(r)),e.Oa=e.Oa.insert(r,n),ri(e.remoteStore,new Xn(Vt(Mt(r.path)),n,"TargetPurposeLimboResolution",fe.oe))}}async function ms(e,t,r){const n=D(e),o=[],i=[],s=[];n.Fa.isEmpty()||(n.Fa.forEach(((e,a)=>{s.push(n.Ka(a,t,r).then((e=>{var t;if((e||r)&&n.isPrimaryClient){const o=e?!e.fromCache:null===(t=null==r?void 0:r.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;n.sharedClientState.updateQueryState(a.targetId,o?"current":"not-current")}if(e){o.push(e);const t=wo.Wi(a.targetId,e);i.push(t)}})))})),await Promise.all(s),n.Ca.d_(o),await async function(e,t){const r=D(e);try{await r.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ue.forEach(t,(t=>ue.forEach(t.$i,(n=>r.persistence.referenceDelegate.addReference(e,t.targetId,n))).next((()=>ue.forEach(t.Ui,(n=>r.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))))))}catch(e){if(!he(e))throw e;I("LocalStore","Failed to update sequence numbers: "+e)}for(const n of t){const e=n.targetId;if(!n.fromCache){const t=r.os.get(e),n=t.snapshotVersion,o=t.withLastLimboFreeSnapshotVersion(n);r.os=r.os.insert(e,o)}}}(n.localStore,i))}async function vs(e,t){const r=D(e);if(!r.currentUser.isEqual(t)){I("SyncEngine","User change. New user:",t.toKey());const e=await So(r.localStore,t);r.currentUser=t,function(e,t){e.ka.forEach((e=>{e.forEach((e=>{e.reject(new L(P.CANCELLED,t))}))})),e.ka.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ms(r,e.hs)}}function ys(e,t){const r=D(e),n=r.Na.get(t);if(n&&n.va)return lr().add(n.key);{let e=lr();const n=r.Ma.get(t);if(!n)return e;for(const t of n){const n=r.Fa.get(t);e=e.unionWith(n.view.Va)}return e}}function bs(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=os.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ys.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ss.bind(null,t),t.Ca.d_=Ui.bind(null,t.eventManager),t.Ca.$a=ji.bind(null,t.eventManager),t}function ws(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=as.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cs.bind(null,t),t}class _s{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ko(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Eo(this.persistence,new ko,e.initialUser,this.serializer)}createPersistence(e){return new vo(bo.Zr,this.serializer)}createSharedClientState(e){return new Bo}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ks{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>is(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=vs.bind(null,this.syncEngine),await Ti(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Li}()}createDatastore(e){const t=Ko(e.databaseInfo.databaseId),r=function(e){return new qo(e)}(e.databaseInfo);return function(e,t,r,n){return new Yo(e,t,r,n)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(e,t,r,n,o){return new Zo(e,t,r,n,o)}(this.localStore,this.datastore,e.asyncQueue,(e=>is(this.syncEngine,e,0)),function(){return Fo.D()?new Fo:new Mo}())}createSyncEngine(e,t){return function(e,t,r,n,o,i,s){const a=new Xi(e,t,r,n,o,i);return s&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=D(e);I("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await ti(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):x("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=C.UNAUTHENTICATED,this.clientId=K.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,(async e=>{I("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(r,(e=>(I("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new B;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ai(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ss(e,t){e.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener((async e=>{n.isEqual(e)||(await So(t.localStore,e),n=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Ts(e,t){e.asyncQueue.verifyOperationInProgress();const r=await xs(e);I("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener((e=>Si(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,r)=>Si(t.remoteStore,r))),e._onlineComponents=t}function Is(e){return"FirebaseError"===e.name?e.code===P.FAILED_PRECONDITION||e.code===P.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function xs(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ss(e,e._uninitializedComponentsProvider._offline)}catch(t){const r=t;if(!Is(r))throw r;R("Error using user provided cache. Falling back to memory cache: "+r),await Ss(e,new _s)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await Ss(e,new _s);return e._offlineComponents}async function Rs(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await Ts(e,e._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await Ts(e,new ks))),e._onlineComponents}function As(e){return Rs(e).then((e=>e.syncEngine))}async function Os(e){const t=await Rs(e),r=t.eventManager;return r.onListen=Yi.bind(null,t.syncEngine),r.onUnlisten=ts.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=Ji.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=rs.bind(null,t.syncEngine),r}function Ns(e,t,r={}){const n=new B;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,r,n,o){const i=new Cs({next:i=>{t.enqueueAndForget((()=>Fi(e,s)));const a=i.docs.has(r);!a&&i.fromCache?o.reject(new L(P.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&n&&"server"===n.source?o.reject(new L(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):o.resolve(i)},error:e=>o.reject(e)}),s=new qi(Mt(r.path),i,{includeMetadataChanges:!0,_a:!0});return Mi(e,s)}(await Os(e),e.asyncQueue,t,r,n))),n.promise}function Ds(e,t,r={}){const n=new B;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,r,n,o){const i=new Cs({next:r=>{t.enqueueAndForget((()=>Fi(e,s))),r.fromCache&&"server"===n.source?o.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(r)},error:e=>o.reject(e)}),s=new qi(r,i,{includeMetadataChanges:!0,_a:!0});return Mi(e,s)}(await Os(e),e.asyncQueue,t,r,n))),n.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ps(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ls=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e,t,r){if(!r)throw new L(P.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ms(e,t,r,n){if(!0===t&&!0===n)throw new L(P.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}function Fs(e){if(!te.isDocumentKey(e))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Us(e){if(te.isDocumentKey(e))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function js(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":O()}function Vs(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=js(e);throw new L(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}function $s(e,t){if(t<=0)throw new L(P.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ms("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ps(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qs{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zs({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zs(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new F;switch(e.type){case"firstParty":return new $(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ls.get(e);t&&(I("ComponentProvider","Removing Datastore"),Ls.delete(e),t.terminate())}(this),Promise.resolve()}}function Ws(e,t,r,n={}){var o;const i=(e=Vs(e,qs))._getSettings(),s=`${t}:${r}`;if("firestore.googleapis.com"!==i.host&&i.host!==s&&R("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:s,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=C.MOCK_USER;else{t=(0,c.Fy)(n.mockUserToken,null===(o=e._app)||void 0===o?void 0:o.options.projectId);const i=n.mockUserToken.sub||n.mockUserToken.user_id;if(!i)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new C(i)}e._authCredentials=new U(new M(t,r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ks(this.firestore,e,this._query)}}class Hs{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Hs(this.firestore,e,this._key)}}class Gs extends Ks{constructor(e,t,r){super(e,t,Mt(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Hs(this.firestore,null,new te(e))}withConverter(e){return new Gs(this.firestore,e,this._path)}}function Qs(e,t,...r){if(e=(0,c.Ku)(e),Bs("collection","path",t),e instanceof qs){const n=J.fromString(t,...r);return Us(n),new Gs(e,null,n)}{if(!(e instanceof Hs||e instanceof Gs))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(J.fromString(t,...r));return Us(n),new Gs(e.firestore,null,n)}}function Xs(e,t,...r){if(e=(0,c.Ku)(e),1===arguments.length&&(t=K.newId()),Bs("doc","path",t),e instanceof qs){const n=J.fromString(t,...r);return Fs(n),new Hs(e,null,new te(n))}{if(!(e instanceof Hs||e instanceof Gs))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(J.fromString(t,...r));return Fs(n),new Hs(e.firestore,e instanceof Gs?e.converter:null,new te(n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ys{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Ho(this,"async_queue_retry"),this.Eu=()=>{const e=Wo();e&&I("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const e=Wo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const t=Wo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise((()=>{}));const t=new B;return this.Au((()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.uu.push(e),this.Ru())))}async Ru(){if(0!==this.uu.length){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!he(e))throw e;I("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go((()=>this.Ru()))}}Au(e){const t=this.au.then((()=>(this.Pu=!0,e().catch((e=>{this.hu=e,this.Pu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw x("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Pu=!1,e))))));return this.au=t,t}enqueueAfterDelay(e,t,r){this.du(),this.Tu.indexOf(e)>-1&&(t=0);const n=Ri.createAndSchedule(this,e,t,r,(e=>this.Vu(e)));return this.lu.push(n),n}du(){this.hu&&O()}verifyOperationInProgress(){}async mu(){let e;do{e=this.au,await e}while(e!==this.au)}fu(e){for(const t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then((()=>{this.lu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.lu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.mu()}))}pu(e){this.Tu.push(e)}Vu(e){const t=this.lu.indexOf(e);this.lu.splice(t,1)}}class Js extends qs{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=function(){return new Ys}(),this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ta(this),this._firestoreClient.terminate()}}function Zs(e,t){const r="object"==typeof e?e:(0,i.Sx)(),n="string"==typeof e?e:t||"(default)",o=(0,i.j6)(r,"firestore").getImmediate({identifier:n});if(!o._initialized){const e=(0,c.yU)("firestore");e&&Ws(o,...e)}return o}function ea(e){return e._firestoreClient||ta(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ta(e){var t,r,n;const o=e._freezeSettings(),i=function(e,t,r,n){return new Ue(e,t,r,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,Ps(n.experimentalLongPollingOptions),n.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,o);e._firestoreClient=new Es(e._authCredentials,e._appCheckCredentials,e._queue,i),(null===(r=o.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=o.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ra{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ra(Oe.fromBase64String(e))}catch(e){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ra(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=/^__.*__$/;class ca{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new Fr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mr(e,this.data,t,this.fieldTransforms)}}class la{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Fr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ua(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class da{constructor(e,t,r,n,o,i){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===o&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=i||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new da(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var t;const r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Su({path:r,Du:!1});return n.vu(e),n}Cu(e){var t;const r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Su({path:r,Du:!1});return n.yu(),n}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Ta(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(0===e.length)throw this.Mu("Document fields must not be empty");if(ua(this.wu)&&aa.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class ha{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ko(e)}Nu(e,t,r,n=!1){return new da({wu:e,methodName:t,Ou:r,path:ee.emptyPath(),Du:!1,xu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fa(e){const t=e._freezeSettings(),r=Ko(e._databaseId);return new ha(e._databaseId,!!t.ignoreUndefinedProperties,r)}function pa(e,t,r,n,o,i={}){const s=e.Nu(i.merge||i.mergeFields?2:0,t,r,o);ka("Data must be an object, but it was:",s,n);const a=wa(n,s);let c,l;if(i.merge)c=new Re(s.fieldMask),l=s.fieldTransforms;else if(i.mergeFields){const e=[];for(const n of i.mergeFields){const o=Ca(t,n,r);if(!s.contains(o))throw new L(P.INVALID_ARGUMENT,`Field '${o}' is specified in your field mask but missing from your input data.`);Ia(e,o)||e.push(o)}c=new Re(e),l=s.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=s.fieldTransforms;return new ca(new it(a),c,l)}class ga extends oa{_toFieldTransform(e){if(2!==e.wu)throw 1===e.wu?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ga}}function ma(e,t,r,n){const o=e.Nu(1,t,r);ka("Data must be an object, but it was:",o,n);const i=[],s=it.empty();ke(n,((e,n)=>{const a=Sa(t,e,r);n=(0,c.Ku)(n);const l=o.Cu(a);if(n instanceof ga)i.push(a);else{const e=ba(n,l);null!=e&&(i.push(a),s.set(a,e))}}));const a=new Re(i);return new la(s,a,o.fieldTransforms)}function va(e,t,r,n,o,i){const s=e.Nu(1,t,r),a=[Ca(t,n,r)],l=[o];if(i.length%2!=0)throw new L(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<i.length;c+=2)a.push(Ca(t,i[c])),l.push(i[c+1]);const u=[],d=it.empty();for(let f=a.length-1;f>=0;--f)if(!Ia(u,a[f])){const e=a[f];let t=l[f];t=(0,c.Ku)(t);const r=s.Cu(e);if(t instanceof ga)u.push(e);else{const n=ba(t,r);null!=n&&(u.push(e),d.set(e,n))}}const h=new Re(u);return new la(d,h,s.fieldTransforms)}function ya(e,t,r,n=!1){return ba(r,e.Nu(n?4:3,t))}function ba(e,t){if(_a(e=(0,c.Ku)(e)))return ka("Unsupported field value:",t,e),wa(e,t);if(e instanceof oa)return function(e,t){if(!ua(t.wu))throw t.Mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Mu(`${e._methodName}() is not currently supported inside arrays`);const r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Du&&4!==t.wu)throw t.Mu("Nested arrays are not supported");return function(e,t){const r=[];let n=0;for(const o of e){let e=ba(o,t.Fu(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=(0,c.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return pr(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const r=Q.fromDate(e);return{timestampValue:wn(t.serializer,r)}}if(e instanceof Q){const r=new Q(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:wn(t.serializer,r)}}if(e instanceof ia)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ra)return{bytesValue:_n(t.serializer,e._byteString)};if(e instanceof Hs){const r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.Mu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:En(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof sa)return function(e,t){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw t.Mu("VectorValues must only contain numeric values.");return hr(t.serializer,e)}))}}}}}}(e,t);throw t.Mu(`Unsupported field value: ${js(e)}`)}(e,t)}function wa(e,t){const r={};return Ce(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ke(e,((e,n)=>{const o=ba(n,t.bu(e));null!=o&&(r[e]=o)})),{mapValue:{fields:r}}}function _a(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Q||e instanceof ia||e instanceof ra||e instanceof Hs||e instanceof oa||e instanceof sa)}function ka(e,t,r){if(!_a(r)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(r)){const n=js(r);throw"an object"===n?t.Mu(e+" a custom object"):t.Mu(e+" "+n)}}function Ca(e,t,r){if((t=(0,c.Ku)(t))instanceof na)return t._internalPath;if("string"==typeof t)return Sa(e,t);throw Ta("Field path arguments must be of type string or ",e,!1,void 0,r)}const Ea=new RegExp("[~\\*/\\[\\]]");function Sa(e,t,r){if(t.search(Ea)>=0)throw Ta(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new na(...t.split("."))._internalPath}catch(n){throw Ta(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function Ta(e,t,r,n,o){const i=n&&!n.isEmpty(),s=void 0!==o;let a=`Function ${t}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||s)&&(c+=" (found",i&&(c+=` in field ${n}`),s&&(c+=` in document ${o}`),c+=")"),new L(P.INVALID_ARGUMENT,a+e+c)}function Ia(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,r,n,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Hs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ra(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Aa("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ra extends xa{data(){return super.data()}}function Aa(e,t){return"string"==typeof t?Sa(e,t):t instanceof na?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Na{}class Da extends Na{}function Pa(e,t,...r){let n=[];t instanceof Na&&n.push(t),n=n.concat(r),function(e){const t=e.filter((e=>e instanceof Ma)).length,r=e.filter((e=>e instanceof La)).length;if(t>1||t>0&&r>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);for(const o of n)e=o._apply(e);return e}class La extends Da{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new La(e,t,r)}_apply(e){const t=this._parse(e);return qa(e._query,t),new Ks(e.firestore,e.converter,zt(e._query,t))}_parse(e){const t=fa(e.firestore),r=function(e,t,r,n,o,i,s){let a;if(o.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){za(s,i);const t=[];for(const r of s)t.push($a(n,e,r));a={arrayValue:{values:t}}}else a=$a(n,e,s)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||za(s,i),a=ya(r,t,s,"in"===i||"not-in"===i);return pt.create(o,i,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return r}}function Ba(e,t,r){const n=t,o=Aa("where",e);return La._create(o,n,r)}class Ma extends Na{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ma(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:gt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e;const n=t.getFlattenedFilters();for(const o of n)qa(r,o),r=zt(r,o)}(e._query,t),new Ks(e.firestore,e.converter,zt(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Fa extends Da{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Fa(e,t)}_apply(e){const t=function(e,t,r){if(null!==e.startAt)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new dt(t,r)}(e._query,this._field,this._direction);return new Ks(e.firestore,e.converter,function(e,t){const r=e.explicitOrderBy.concat([t]);return new Lt(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Ua(e,t="asc"){const r=t,n=Aa("orderBy",e);return Fa._create(n,r)}class ja extends Da{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ja(e,t,r)}_apply(e){return new Ks(e.firestore,e.converter,qt(e._query,this._limit,this._limitType))}}function Va(e){return $s("limit",e),ja._create("limit",e,"F")}function $a(e,t,r){if("string"==typeof(r=(0,c.Ku)(r))){if(""===r)throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ut(t)&&-1!==r.indexOf("/"))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const n=t.path.child(J.fromString(r));if(!te.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Xe(e,new te(n))}if(r instanceof Hs)return Xe(e,r._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${js(r)}.`)}function za(e,t){if(!Array.isArray(e)||0===e.length)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function qa(e,t){const r=function(e,t){for(const r of e)for(const e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class Wa{convertValue(e,t="none"){switch($e(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Le(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw O()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ke(e,((e,n)=>{r[e]=this.convertValue(n,t)})),r}convertVectorValue(e){var t,r,n;const o=null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map((e=>Pe(e.doubleValue)));return new sa(o)}convertGeoPoint(e){return new ia(Pe(e.latitude),Pe(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Me(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Fe(e));default:return null}}convertTimestamp(e){const t=De(e);return new Q(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=J.fromString(e);N(Qn(r));const n=new je(r.get(1),r.get(3)),o=new te(r.popFirst(5));return n.isEqual(t)||x(`Document ${o} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(e,t,r){let n;return n=e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t,n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ga extends xa{constructor(e,t,r,n,o,i){super(e,t,r,n,i),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Aa("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Qa extends Ga{data(e={}){return super.data(e)}}class Xa{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new Ha(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Qa(this._firestore,this._userDataWriter,r.key,r,new Ha(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((r=>{const n=new Qa(e._firestore,e._userDataWriter,r.doc.key,r.doc,new Ha(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}}))}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const n=new Qa(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Ha(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let o=-1,i=-1;return 0!==t.type&&(o=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(r=r.add(t.doc),i=r.indexOf(t.doc.key)),{type:Ya(t.type),doc:n,oldIndex:o,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ya(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ja(e){e=Vs(e,Hs);const t=Vs(e.firestore,Js);return Ns(ea(t),e._key).then((r=>ic(t,e,r)))}class Za extends Wa{constructor(e){super(),this.firestore=e}convertBytes(e){return new ra(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Hs(this.firestore,null,t)}}function ec(e){e=Vs(e,Ks);const t=Vs(e.firestore,Js),r=ea(t),n=new Za(t);return Oa(e._query),Ds(r,e._query).then((r=>new Xa(t,n,e,r)))}function tc(e,t,r,...n){e=Vs(e,Hs);const o=Vs(e.firestore,Js),i=fa(o);let s;return s="string"==typeof(t=(0,c.Ku)(t))||t instanceof na?va(i,"updateDoc",e._key,t,r,n):ma(i,"updateDoc",e._key,t),oc(o,[s.toMutation(e._key,Rr.exists(!0))])}function rc(e){return oc(Vs(e.firestore,Js),[new $r(e._key,Rr.none())])}function nc(e,t){const r=Vs(e.firestore,Js),n=Xs(e),o=Ka(e.converter,t);return oc(r,[pa(fa(e.firestore),"addDoc",n._key,o,null!==e.converter,{}).toMutation(n._key,Rr.exists(!1))]).then((()=>n))}function oc(e,t){return function(e,t){const r=new B;return e.asyncQueue.enqueueAndForget((async()=>ns(await As(e),t,r))),r.promise}(ea(e),t)}function ic(e,t,r){const n=r.docs.get(t._key),o=new Za(e);return new Ga(e,o,t._key,n,new Ha(r.hasPendingWrites,r.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){E=e}(i.MF),(0,i.om)(new s.uA("firestore",((e,{instanceIdentifier:r,options:n})=>{const o=e.getProvider("app").getImmediate(),i=new Js(new j(e.getProvider("auth-internal")),new q(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new je(e.options.projectId,t)}(o,r),o);return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(k,"4.7.1",e),(0,i.KO)(k,"4.7.1","esm2017")}()},163:(e,t,r)=>{r.d(t,{Ay:()=>qe});var n=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&a(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&a(e,r,t[r]);return e};function l(e){return null===e||void 0===e||""===e||Array.isArray(e)&&0===e.length||!(e instanceof Date)&&"object"===typeof e&&0===Object.keys(e).length}function u(e){return!!(e&&e.constructor&&e.call&&e.apply)}function d(e){return!l(e)}function h(e,t=!0){return e instanceof Object&&e.constructor===Object&&(t||0!==Object.keys(e).length)}function f(e,...t){return u(e)?e(...t):e}function p(e,t=!0){return"string"===typeof e&&(t||""!==e)}function g(e,t=!0){return Array.isArray(e)&&(t||0!==e.length)}function m(e){return d(e)&&!isNaN(e)}function v(e,t){if(t){const r=t.test(e);return t.lastIndex=0,r}return!1}function y(...e){const t=(e={},r={})=>{const n=c({},e);return Object.keys(r).forEach((o=>{h(r[o])&&o in e&&h(e[o])?n[o]=t(e[o],r[o]):n[o]=r[o]})),n};return e.reduce(((e,r,n)=>0===n?r:t(e,r)),{})}function b(e){return e?e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":"):e}function w(e){return p(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,((e,t)=>0===t?e:"-"+e.toLowerCase())).toLowerCase():e}function _(e){return p(e)?e.replace(/[A-Z]/g,((e,t)=>0===t?e:"."+e.toLowerCase())).toLowerCase():e}function k(){const e=new Map;return{on(t,r){let n=e.get(t);return n?n.push(r):n=[r],e.set(t,n),this},off(t,r){let n=e.get(t);return n&&n.splice(n.indexOf(r)>>>0,1),this},emit(t,r){let n=e.get(t);n&&n.slice().map((e=>{e(r)}))},clear(){e.clear()}}}var C=Object.defineProperty,E=Object.defineProperties,S=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))I.call(t,r)&&R(e,r,t[r]);if(T)for(var r of T(t))x.call(t,r)&&R(e,r,t[r]);return e},O=(e,t)=>E(e,S(t)),N=(e,t)=>{var r={};for(var n in e)I.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&T)for(var n of T(e))t.indexOf(n)<0&&x.call(e,n)&&(r[n]=e[n]);return r};var D=k(),P=D;function L(e,t){g(e)?e.push(...t||[]):h(e)&&Object.assign(e,t)}function B(e){return h(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function M(e,t=""){const r=["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"];if(!r.some((e=>t.endsWith(e)))){const t=`${e}`.trim(),r=t.split(" ");return r.map((e=>m(e)?`${e}px`:e)).join(" ")}return e}function F(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function U(e="",t=""){return F(`${p(e,!1)&&p(t,!1)?`${e}-`:e}${t}`)}function j(e="",t=""){return`--${U(e,t)}`}function V(e,t="",r="",n=[],o){if(p(e)){const i=/{([^}]*)}/g,s=e.trim();if(v(s,i)){const e=s.replaceAll(i,(e=>{const t=e.replace(/{|}/g,""),i=t.split(".").filter((e=>!n.some((t=>v(e,t)))));return`var(${j(r,w(i.join("-")))}${d(o)?`, ${o}`:""})`})),t=/(\d+\s+[\+\-\*\/]\s+\d+)/g,a=/var\([^)]+\)/g;return v(e.replace(a,"0"),t)?`calc(${e})`:e}return M(s,t)}if(m(e))return M(e,t)}function $(e,t,r){p(t,!1)&&e.push(`${t}:${r};`)}function z(e,t){return e?`${e}{${t}}`:""}var q=(...e)=>W(G.getTheme(),...e),W=(e={},t,r,n="variable")=>{if(t){const{variable:o,options:i}=G.defaults||{},{prefix:s,transform:a}=(null==e?void 0:e.options)||i||{},c=/{([^}]*)}/g,l=v(t,c)?t:`{${t}}`,u="value"===n||"strict"===a;return u?G.getTokenValue(t):V(l,void 0,s,[o.excludedKeyRegex],r)}return""};function K(e,t={}){const r=G.defaults.variable,{prefix:n=r.prefix,selector:o=r.selector,excludedKeyRegex:i=r.excludedKeyRegex}=t,s=(e,t="")=>Object.entries(e).reduce(((e,[r,o])=>{const a=v(r,i)?U(t):U(t,w(r)),c=B(o);if(h(c)){const{variables:t,tokens:r}=s(c,a);L(e["tokens"],r),L(e["variables"],t)}else e["tokens"].push((n?a.replace(`${n}-`,""):a).replaceAll("-",".")),$(e["variables"],j(a),V(c,a,n,[i]));return e}),{variables:[],tokens:[]}),{variables:a,tokens:c}=s(e,n);return{value:a,tokens:c,declarations:a.join(""),css:z(o,a.join(""))}}var H={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){const t=Object.keys(this.rules).filter((e=>"custom"!==e)).map((e=>this.rules[e]));return[e].flat().map((e=>{var r;return null!=(r=t.map((t=>t.resolve(e))).find((e=>e.matched)))?r:this.rules.custom.resolve(e)}))}},_toVariables(e,t){return K(e,{prefix:null==t?void 0:t.prefix})},getCommon({name:e="",theme:t={},params:r,set:n,defaults:o}){var i,s,a,c;const{preset:l,options:u}=t;let h,f,p,g;if(d(l)){const{primitive:t,semantic:r}=l,m=r||{},{colorScheme:v}=m,y=N(m,["colorScheme"]),b=v||{},{dark:w}=b,_=N(b,["dark"]),k=d(t)?this._toVariables({primitive:t},u):{},C=d(y)?this._toVariables({semantic:y},u):{},E=d(_)?this._toVariables({light:_},u):{},S=d(w)?this._toVariables({dark:w},u):{},[T,I]=[null!=(i=k.declarations)?i:"",k.tokens],[x,R]=[null!=(s=C.declarations)?s:"",C.tokens||[]],[A,O]=[null!=(a=E.declarations)?a:"",E.tokens||[]],[D,P]=[null!=(c=S.declarations)?c:"",S.tokens||[]];h=this.transformCSS(e,T,"light","variable",u,n,o),f=I;const L=this.transformCSS(e,`${x}${A}color-scheme:light`,"light","variable",u,n,o),B=this.transformCSS(e,`${D}color-scheme:dark`,"dark","variable",u,n,o);p=`${L}${B}`,g=[...new Set([...R,...O,...P])]}return{primitive:{css:h,tokens:f},semantic:{css:p,tokens:g}}},getPreset({name:e="",preset:t={},options:r,params:n,set:o,defaults:i,selector:s}){var a,c,l;const u=e.replace("-directive",""),h=t,{colorScheme:f}=h,p=N(h,["colorScheme"]),g=f||{},{dark:m}=g,v=N(g,["dark"]),y=d(p)?this._toVariables({[u]:p},r):{},b=d(v)?this._toVariables({[u]:v},r):{},w=d(m)?this._toVariables({[u]:m},r):{},[_,k]=[null!=(a=y.declarations)?a:"",y.tokens||[]],[C,E]=[null!=(c=b.declarations)?c:"",b.tokens||[]],[S,T]=[null!=(l=w.declarations)?l:"",w.tokens||[]],I=[...new Set([...k,...E,...T])],x=this.transformCSS(u,`${_}${C}`,"light","variable",r,o,i,s),R=this.transformCSS(u,S,"dark","variable",r,o,i,s);return{css:`${x}${R}`,tokens:I}},getPresetC({name:e="",theme:t={},params:r,set:n,defaults:o}){var i;const{preset:s,options:a}=t,c=null==(i=null==s?void 0:s.components)?void 0:i[e];return this.getPreset({name:e,preset:c,options:a,params:r,set:n,defaults:o})},getPresetD({name:e="",theme:t={},params:r,set:n,defaults:o}){var i;const s=e.replace("-directive",""),{preset:a,options:c}=t,l=null==(i=null==a?void 0:a.directives)?void 0:i[s];return this.getPreset({name:s,preset:l,options:c,params:r,set:n,defaults:o})},getColorSchemeOption(e,t){var r;return this.regex.resolve(null!=(r=e.darkModeSelector)?r:t.options.darkModeSelector)},getLayerOrder(e,t={},r,n){const{cssLayer:o}=t;if(o){const e=f(o.order||"primeui",r);return`@layer ${e}`}return""},getCommonStyleSheet({name:e="",theme:t={},params:r,props:n={},set:o,defaults:i}){const s=this.getCommon({name:e,theme:t,params:r,set:o,defaults:i}),a=Object.entries(n).reduce(((e,[t,r])=>e.push(`${t}="${r}"`)&&e),[]).join(" ");return Object.entries(s||{}).reduce(((e,[t,r])=>{if(null==r?void 0:r.css){const n=b(null==r?void 0:r.css),o=`${t}-variables`;e.push(`<style type="text/css" data-primevue-style-id="${o}" ${a}>${n}</style>`)}return e}),[]).join("")},getStyleSheet({name:e="",theme:t={},params:r,props:n={},set:o,defaults:i}){var s;const a={name:e,theme:t,params:r,set:o,defaults:i},c=null==(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))?void 0:s.css,l=Object.entries(n).reduce(((e,[t,r])=>e.push(`${t}="${r}"`)&&e),[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${e}-variables" ${l}>${b(c)}</style>`:""},createTokens(e={},t,r="",n="",o={}){return Object.entries(e).forEach((([e,i])=>{const s=v(e,t.variable.excludedKeyRegex)?r:r?`${r}.${_(e)}`:_(e),a=n?`${n}.${e}`:e;h(i)?this.createTokens(i,t,s,a,o):(o[s]||(o[s]={paths:[],computed(e,t={}){if(e){const r=this.paths.find((t=>t.scheme===e))||this.paths.find((e=>"none"===e.scheme));return null==r?void 0:r.computed(e,t["binding"])}return this.paths.map((e=>e.computed(e.scheme,t[e.scheme])))}}),o[s].paths.push({path:a,value:i,scheme:a.includes("colorScheme.light")?"light":a.includes("colorScheme.dark")?"dark":"none",computed(e,t={}){const r=/{([^}]*)}/g;let n=i;if(t["name"]=this.path,t["binding"]||(t["binding"]={}),v(i,r)){const s=i.trim(),a=s.replaceAll(r,(r=>{var n,i;const s=r.replace(/{|}/g,"");return null==(i=null==(n=o[s])?void 0:n.computed(e,t))?void 0:i.value})),c=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,l=/var\([^)]+\)/g;n=v(a.replace(l,"0"),c)?`calc(${a})`:a}return l(t["binding"])&&delete t["binding"],{colorScheme:e,path:this.path,paths:t,value:n.includes("undefined")?void 0:n}}}))})),o},getTokenValue(e,t,r){var n;const o=e=>{const t=e.split(".");return t.filter((e=>!v(e.toLowerCase(),r.variable.excludedKeyRegex))).join(".")},i=o(t),s=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,a=[null==(n=e[i])?void 0:n.computed(s)].flat().filter((e=>e));return 1===a.length?a[0].value:a.reduce(((e={},t)=>{const r=t,{colorScheme:n}=r,o=N(r,["colorScheme"]);return e[n]=o,e}),void 0)},transformCSS(e,t,r,n,o={},i,s,a){if(d(t)){const{cssLayer:c}=o;if("style"!==n){const e=this.getColorSchemeOption(o,s),n=a?z(a,t):t;t="dark"===r?e.reduce(((e,{selector:t})=>(d(t)&&(e+=t.includes("[CSS]")?t.replace("[CSS]",n):z(t,n)),e)),""):z(null!=a?a:":root",t)}if(c){const r={name:"primeui",order:"primeui"};h(c)&&(r.name=f(c.name,{name:e,type:n})),d(r.name)&&(t=z(`@layer ${r.name}`,t),null==i||i.layerNames(r.name))}return t}return""}},G={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){const{theme:t}=e;t&&(this._theme=O(A({},t),{options:A(A({},this.defaults.options),t.options)}),this._tokens=H.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return(null==(e=this.theme)?void 0:e.preset)||{}},get options(){var e;return(null==(e=this.theme)?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),P.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=O(A({},this.theme),{preset:e}),this._tokens=H.createTokens(e,this.defaults),this.clearLoadedStyleNames(),P.emit("preset:change",e),P.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=O(A({},this.theme),{options:e}),this.clearLoadedStyleNames(),P.emit("options:change",e),P.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return H.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",t){return H.getCommon({name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",t){const r={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return H.getPresetC(r)},getDirective(e="",t){const r={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return H.getPresetD(r)},getCustomPreset(e="",t,r,n){const o={name:e,preset:t,options:this.options,selector:r,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return H.getPreset(o)},getLayerOrderCSS(e=""){return H.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",t,r="style",n){return H.transformCSS(e,t,n,r,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",t,r={}){return H.getCommonStyleSheet({name:e,theme:this.theme,params:t,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,t,r={}){return H.getStyleSheet({name:e,theme:this.theme,params:t,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),P.emit(`theme:${t}:load`,e),!this._loadingStyles.size&&P.emit("theme:load"))}};var Q={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function X(e){return"object"===typeof HTMLElement?e instanceof HTMLElement:e&&"object"===typeof e&&null!==e&&1===e.nodeType&&"string"===typeof e.nodeName}function Y(e,t={}){if(X(e)){const r=(t,n)=>{var o,i;const s=(null==(o=null==e?void 0:e.$attrs)?void 0:o[t])?[null==(i=null==e?void 0:e.$attrs)?void 0:i[t]]:[];return[n].flat().reduce(((e,n)=>{if(null!==n&&void 0!==n){const o=typeof n;if("string"===o||"number"===o)e.push(n);else if("object"===o){const o=Array.isArray(n)?r(t,n):Object.entries(n).map((([e,r])=>"style"!==t||!r&&0!==r?r?e:void 0:`${e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${r}`));e=o.length?e.concat(o.filter((e=>!!e))):e}}return e}),s)};Object.entries(t).forEach((([t,n])=>{if(void 0!==n&&null!==n){const o=t.match(/^on(.+)/);o?e.addEventListener(o[1].toLowerCase(),n):"p-bind"===t?Y(e,n):(n="class"===t?[...new Set(r("class",n))].join(" ").trim():"style"===t?r("style",n).join(";").trim():n,(e.$attrs=e.$attrs||{})&&(e.$attrs[t]=n),e.setAttribute(t,n))}}))}}function J(e){if(e){let t=e.parentNode;return t&&t instanceof ShadowRoot&&t.host&&(t=t.host),t}return null}function Z(e){return!(null===e||"undefined"===typeof e||!e.nodeName||!J(e))}function ee(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}function te(e,t="",r){X(e)&&null!==r&&void 0!==r&&e.setAttribute(t,r)}var re=r(641),ne=r(953);function oe(e){return oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(e)}function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){ae(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ae(e,t,r){return(t=ce(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ce(e){var t=le(e,"string");return"symbol"==oe(t)?t:t+""}function le(e,t){if("object"!=oe(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=oe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function ue(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,re.nI)()?(0,re.sV)(e):t?e():(0,re.dY)(e)}var de=0;function he(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,ne.KR)(!1),n=(0,ne.KR)(e),o=(0,ne.KR)(null),i=ee()?window.document:void 0,s=t.document,a=void 0===s?i:s,c=t.immediate,l=void 0===c||c,u=t.manual,d=void 0!==u&&u,h=t.name,f=void 0===h?"style_".concat(++de):h,p=t.id,g=void 0===p?void 0:p,m=t.media,v=void 0===m?void 0:m,y=t.nonce,b=void 0===y?void 0:y,w=t.first,_=void 0!==w&&w,k=t.onMounted,C=void 0===k?void 0:k,E=t.onUpdated,S=void 0===E?void 0:E,T=t.onLoad,I=void 0===T?void 0:T,x=t.props,R=void 0===x?{}:x,A=function(){},O=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a){var s=se(se({},R),i),c=s.name||f,l=s.id||g,u=s.nonce||b;o.value=a.querySelector('style[data-primevue-style-id="'.concat(c,'"]'))||a.getElementById(l)||a.createElement("style"),o.value.isConnected||(n.value=t||e,Y(o.value,{type:"text/css",id:l,media:v,nonce:u}),_?a.head.prepend(o.value):a.head.appendChild(o.value),te(o.value,"data-primevue-style-id",c),Y(o.value,s),o.value.onload=function(e){return null===I||void 0===I?void 0:I(e,{name:c})},null===C||void 0===C||C(c)),r.value||(A=(0,re.wB)(n,(function(e){o.value.textContent=e,null===S||void 0===S||S(c)}),{immediate:!0}),r.value=!0)}},N=function(){a&&r.value&&(A(),Z(o.value)&&a.head.removeChild(o.value),r.value=!1)};return l&&!d&&ue(O),{id:g,name:f,el:o,css:n,unload:N,load:O,isLoaded:(0,ne.tB)(r)}}function fe(e){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(e)}function pe(e,t){return be(e)||ye(e,t)||me(e,t)||ge()}function ge(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function me(e,t){if(e){if("string"==typeof e)return ve(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ve(e,t):void 0}}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function ye(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,s,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t);else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r["return"]&&(s=r["return"](),Object(s)!==s))return}finally{if(l)throw o}}return a}}function be(e){if(Array.isArray(e))return e}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){ke(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ke(e,t,r){return(t=Ce(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ce(e){var t=Ee(e,"string");return"symbol"==fe(t)?t:t+""}function Ee(e,t){if("object"!=fe(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=fe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var Se=function(e){var t=e.dt;return"\n* {\n    box-sizing: border-box;\n}\n\n/* Non vue overlay animations */\n.p-connected-overlay {\n    opacity: 0;\n    transform: scaleY(0.8);\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-connected-overlay-visible {\n    opacity: 1;\n    transform: scaleY(1);\n}\n\n.p-connected-overlay-hidden {\n    opacity: 0;\n    transform: scaleY(1);\n    transition: opacity 0.1s linear;\n}\n\n/* Vue based overlay animations */\n.p-connected-overlay-enter-from {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n\n.p-connected-overlay-leave-to {\n    opacity: 0;\n}\n\n.p-connected-overlay-enter-active {\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-connected-overlay-leave-active {\n    transition: opacity 0.1s linear;\n}\n\n/* Toggleable Content */\n.p-toggleable-content-enter-from,\n.p-toggleable-content-leave-to {\n    max-height: 0;\n}\n\n.p-toggleable-content-enter-to,\n.p-toggleable-content-leave-from {\n    max-height: 1000px;\n}\n\n.p-toggleable-content-leave-active {\n    overflow: hidden;\n    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n}\n\n.p-toggleable-content-enter-active {\n    overflow: hidden;\n    transition: max-height 1s ease-in-out;\n}\n\n.p-disabled,\n.p-disabled * {\n    cursor: default;\n    pointer-events: none;\n    user-select: none;\n}\n\n.p-disabled,\n.p-component:disabled {\n    opacity: ".concat(t("disabled.opacity"),";\n}\n\n.pi {\n    font-size: ").concat(t("icon.size"),";\n}\n\n.p-icon {\n    width: ").concat(t("icon.size"),";\n    height: ").concat(t("icon.size"),";\n}\n\n.p-overlay-mask {\n    background: ").concat(t("mask.background"),";\n    color: ").concat(t("mask.color"),";\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-overlay-mask-enter {\n    animation: p-overlay-mask-enter-animation ").concat(t("mask.transition.duration")," forwards;\n}\n\n.p-overlay-mask-leave {\n    animation: p-overlay-mask-leave-animation ").concat(t("mask.transition.duration")," forwards;\n}\n\n@keyframes p-overlay-mask-enter-animation {\n    from {\n        background: transparent;\n    }\n    to {\n        background: ").concat(t("mask.background"),";\n    }\n}\n@keyframes p-overlay-mask-leave-animation {\n    from {\n        background: ").concat(t("mask.background"),";\n    }\n    to {\n        background: transparent;\n    }\n}\n")},Te=function(e){var t=e.dt;return"\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n.p-hidden-accessible input,\n.p-hidden-accessible select {\n    transform: scale(0);\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: ".concat(t("scrollbar.width"),";\n}\n")},Ie={},xe={},Re={name:"base",css:Te,theme:Se,classes:Ie,inlineStyles:xe,load:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},n=r(f(e,{dt:q}));return n?he(b(n),_e({name:this.name},t)):{}},loadCSS:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.load(this.theme,t,(function(r){return G.transformCSS(t.name||e.name,r)}))},getCommonTheme:function(e){return G.getCommon(this.name,e)},getComponentTheme:function(e){return G.getComponent(this.name,e)},getDirectiveTheme:function(e){return G.getDirective(this.name,e)},getPresetTheme:function(e,t,r){return G.getCustomPreset(this.name,e,t,r)},getLayerOrderThemeCSS:function(){return G.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.css){var r=f(this.css,{dt:q}),n=b("".concat(r).concat(e)),o=Object.entries(t).reduce((function(e,t){var r=pe(t,2),n=r[0],o=r[1];return e.push("".concat(n,'="').concat(o,'"'))&&e}),[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(o,">").concat(n,"</style>")}return""},getCommonThemeStyleSheet:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return G.getCommonStyleSheet(this.name,e,t)},getThemeStyleSheet:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[G.getStyleSheet(this.name,e,t)];if(this.theme){var n="base"===this.name?"global-style":"".concat(this.name,"-style"),o=f(this.theme,{dt:q}),i=b(G.transformCSS(n,o)),s=Object.entries(t).reduce((function(e,t){var r=pe(t,2),n=r[0],o=r[1];return e.push("".concat(n,'="').concat(o,'"'))&&e}),[]).join(" ");r.push('<style type="text/css" data-primevue-style-id="'.concat(n,'" ').concat(s,">").concat(i,"</style>"))}return r.join("")},extend:function(e){return _e(_e({},this),{},{css:void 0,theme:void 0},e)}},Ae=k();function Oe(){let e=[];const t=(t,r,n=999)=>{const i=o(t,r,n),s=i.value+(i.key===t?0:n)+1;return e.push({key:t,value:s}),s},r=t=>{e=e.filter((e=>e.value!==t))},n=(e,t)=>o(e,t).value,o=(t,r,n=0)=>[...e].reverse().find((e=>!!r||e.key===t))||{key:t,value:n},i=e=>e&&parseInt(e.style.zIndex,10)||0;return{get:i,set:(e,r,n)=>{r&&(r.style.zIndex=String(t(e,!0,n)))},clear:e=>{e&&(r(i(e)),e.style.zIndex="")},getCurrent:e=>n(e,!0)}}Oe();function Ne(e){return Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ne(e)}function De(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?De(Object(r),!0).forEach((function(t){Le(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Le(e,t,r){return(t=Be(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Be(e){var t=Me(e,"string");return"symbol"==Ne(t)?t:t+""}function Me(e,t){if("object"!=Ne(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=Ne(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var Fe={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Q.STARTS_WITH,Q.CONTAINS,Q.NOT_CONTAINS,Q.ENDS_WITH,Q.EQUALS,Q.NOT_EQUALS],numeric:[Q.EQUALS,Q.NOT_EQUALS,Q.LESS_THAN,Q.LESS_THAN_OR_EQUAL_TO,Q.GREATER_THAN,Q.GREATER_THAN_OR_EQUAL_TO],date:[Q.DATE_IS,Q.DATE_IS_NOT,Q.DATE_BEFORE,Q.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},Ue=Symbol();function je(e,t){var r={config:(0,ne.Kh)(t)};return e.config.globalProperties.$primevue=r,e.provide(Ue,r),$e(),ze(e,r),r}var Ve=[];function $e(){P.clear(),Ve.forEach((function(e){return null===e||void 0===e?void 0:e()})),Ve=[]}function ze(e,t){var r=(0,ne.KR)(!1),n=function(){if(!G.isStyleNameLoaded("common")){var e,r,n=(null===(e=Re.getCommonTheme)||void 0===e?void 0:e.call(Re))||{},o=n.primitive,i=n.semantic,s={nonce:null===(r=t.config)||void 0===r||null===(r=r.csp)||void 0===r?void 0:r.nonce};Re.load(null===o||void 0===o?void 0:o.css,Pe({name:"primitive-variables"},s)),Re.load(null===i||void 0===i?void 0:i.css,Pe({name:"semantic-variables"},s)),Re.loadTheme(Pe({name:"global-style"},s)),G.setLoadedStyleName("common")}};P.on("theme:change",(function(t){r.value||(e.config.globalProperties.$primevue.config.theme=t,r.value=!0)}));var o=(0,re.wB)(t.config,(function(e,t){Ae.emit("config:change",{newValue:e,oldValue:t})}),{immediate:!0,deep:!0}),i=(0,re.wB)((function(){return t.config.ripple}),(function(e,t){Ae.emit("config:ripple:change",{newValue:e,oldValue:t})}),{immediate:!0,deep:!0}),s=(0,re.wB)((function(){return t.config.theme}),(function(e,o){r.value||G.setTheme(e),t.config.unstyled||n(),r.value=!1,Ae.emit("config:theme:change",{newValue:e,oldValue:o})}),{immediate:!0,deep:!0}),a=(0,re.wB)((function(){return t.config.unstyled}),(function(e,r){!e&&t.config.theme&&n(),Ae.emit("config:unstyled:change",{newValue:e,oldValue:r})}),{immediate:!0,deep:!0});Ve.push(o),Ve.push(i),Ve.push(s),Ve.push(a)}var qe={install:function(e,t){var r=y(Fe,t);je(e,r)}}},220:(e,t,r)=>{r.d(t,{LA:()=>ae,aE:()=>nt,lq:()=>st,rd:()=>it});var n=r(641),o=r(953);
/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof document;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const r={};for(const n in t){const o=t[n];r[n]=u(o)?o.map(e):e(o)}return r}const l=()=>{},u=Array.isArray;const d=/#/g,h=/&/g,f=/\//g,p=/=/g,g=/\?/g,m=/\+/g,v=/%5B/g,y=/%5D/g,b=/%5E/g,w=/%60/g,_=/%7B/g,k=/%7C/g,C=/%7D/g,E=/%20/g;function S(e){return encodeURI(""+e).replace(k,"|").replace(v,"[").replace(y,"]")}function T(e){return S(e).replace(_,"{").replace(C,"}").replace(b,"^")}function I(e){return S(e).replace(m,"%2B").replace(E,"+").replace(d,"%23").replace(h,"%26").replace(w,"`").replace(_,"{").replace(C,"}").replace(b,"^")}function x(e){return I(e).replace(p,"%3D")}function R(e){return S(e).replace(d,"%23").replace(g,"%3F")}function A(e){return null==e?"":R(e).replace(f,"%2F")}function O(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const N=/\/$/,D=e=>e.replace(N,"");function P(e,t,r="/"){let n,o={},i="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(n=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),o=e(i)),a>-1&&(n=n||t.slice(0,a),s=t.slice(a,t.length)),n=$(null!=n?n:t,r),{fullPath:n+(i&&"?")+i+s,path:n,query:o,hash:O(s)}}function L(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function B(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function M(e,t,r){const n=t.matched.length-1,o=r.matched.length-1;return n>-1&&n===o&&F(t.matched[n],r.matched[o])&&U(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function F(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function U(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!j(e[r],t[r]))return!1;return!0}function j(e,t){return u(e)?V(e,t):u(t)?V(t,e):e===t}function V(e,t){return u(t)?e.length===t.length&&e.every(((e,r)=>e===t[r])):1===e.length&&e[0]===t}function $(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),n=e.split("/"),o=n[n.length-1];".."!==o&&"."!==o||n.push("");let i,s,a=r.length-1;for(i=0;i<n.length;i++)if(s=n[i],"."!==s){if(".."!==s)break;a>1&&a--}return r.slice(0,a).join("/")+"/"+n.slice(i).join("/")}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var q,W;(function(e){e["pop"]="pop",e["push"]="push"})(q||(q={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(W||(W={}));function K(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),D(e)}const H=/^[^#]+#/;function G(e,t){return e.replace(H,"#")+t}function Q(e,t){const r=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-r.left-(t.left||0),top:n.top-r.top-(t.top||0)}}const X=()=>({left:window.scrollX,top:window.scrollY});function Y(e){let t;if("el"in e){const r=e.el,n="string"===typeof r&&r.startsWith("#");0;const o="string"===typeof r?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;t=Q(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function J(e,t){const r=history.state?history.state.position-t:-1;return r+e}const Z=new Map;function ee(e,t){Z.set(e,t)}function te(e){const t=Z.get(e);return Z.delete(e),t}let re=()=>location.protocol+"//"+location.host;function ne(e,t){const{pathname:r,search:n,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,r=o.slice(t);return"/"!==r[0]&&(r="/"+r),B(r,"")}const s=B(r,e);return s+n+o}function oe(e,t,r,n){let o=[],i=[],s=null;const c=({state:i})=>{const a=ne(e,location),c=r.value,l=t.value;let u=0;if(i){if(r.value=a,t.value=i,s&&s===c)return void(s=null);u=l?i.position-l.position:0}else n(a);o.forEach((e=>{e(r.value,c,{delta:u,type:q.pop,direction:u?u>0?W.forward:W.back:W.unknown})}))};function l(){s=r.value}function u(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function d(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:X()}),"")}function h(){for(const e of i)e();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:h}}function ie(e,t,r,n=!1,o=!1){return{back:e,current:t,forward:r,replaced:n,position:window.history.length,scroll:o?X():null}}function se(e){const{history:t,location:r}=window,n={value:ne(e,r)},o={value:t.state};function i(n,i,s){const a=e.indexOf("#"),c=a>-1?(r.host&&document.querySelector("base")?e:e.slice(a))+n:re()+e+n;try{t[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(l){console.error(l),r[s?"replace":"assign"](c)}}function s(e,r){const s=a({},t.state,ie(o.value.back,e,o.value.forward,!0),r,{position:o.value.position});i(e,s,!0),n.value=e}function c(e,r){const s=a({},o.value,t.state,{forward:e,scroll:X()});i(s.current,s,!0);const c=a({},ie(n.value,e,null),{position:s.position+1},r);i(e,c,!1),n.value=e}return o.value||i(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:n,state:o,push:c,replace:s}}function ae(e){e=K(e);const t=se(e),r=oe(e,t.state,t.location,t.replace);function n(e,t=!0){t||r.pauseListeners(),history.go(e)}const o=a({location:"",base:e,go:n,createHref:G.bind(null,e)},t,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function ce(e){return"string"===typeof e||e&&"object"===typeof e}function le(e){return"string"===typeof e||"symbol"===typeof e}const ue=Symbol("");var de;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(de||(de={}));function he(e,t){return a(new Error,{type:e,[ue]:!0},t)}function fe(e,t){return e instanceof Error&&ue in e&&(null==t||!!(e.type&t))}const pe="[^/]+?",ge={sensitive:!1,strict:!1,start:!0,end:!0},me=/[.+*?^${}()[\]/\\]/g;function ve(e,t){const r=a({},ge,t),n=[];let o=r.start?"^":"";const i=[];for(const a of e){const e=a.length?[]:[90];r.strict&&!a.length&&(o+="/");for(let t=0;t<a.length;t++){const n=a[t];let s=40+(r.sensitive?.25:0);if(0===n.type)t||(o+="/"),o+=n.value.replace(me,"\\$&"),s+=40;else if(1===n.type){const{value:e,repeatable:r,optional:c,regexp:l}=n;i.push({name:e,repeatable:r,optional:c});const u=l||pe;if(u!==pe){s+=10;try{new RegExp(`(${u})`)}catch(d){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+d.message)}}let h=r?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(h=c&&a.length<2?`(?:/${h})`:"/"+h),c&&(h+="?"),o+=h,s+=20,c&&(s+=-8),r&&(s+=-20),".*"===u&&(s+=-50)}e.push(s)}n.push(e)}if(r.strict&&r.end){const e=n.length-1;n[e][n[e].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const s=new RegExp(o,r.sensitive?"":"i");function c(e){const t=e.match(s),r={};if(!t)return null;for(let n=1;n<t.length;n++){const e=t[n]||"",o=i[n-1];r[o.name]=e&&o.repeatable?e.split("/"):e}return r}function l(t){let r="",n=!1;for(const o of e){n&&r.endsWith("/")||(r+="/"),n=!1;for(const e of o)if(0===e.type)r+=e.value;else if(1===e.type){const{value:i,repeatable:s,optional:a}=e,c=i in t?t[i]:"";if(u(c)&&!s)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${i}"`);o.length<2&&(r.endsWith("/")?r=r.slice(0,-1):n=!0)}r+=l}}return r||"/"}return{re:s,score:n,keys:i,parse:c,stringify:l}}function ye(e,t){let r=0;while(r<e.length&&r<t.length){const n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function be(e,t){let r=0;const n=e.score,o=t.score;while(r<n.length&&r<o.length){const e=ye(n[r],o[r]);if(e)return e;r++}if(1===Math.abs(o.length-n.length)){if(we(n))return 1;if(we(o))return-1}return o.length-n.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const _e={type:0,value:""},ke=/[a-zA-Z0-9_]/;function Ce(e){if(!e)return[[]];if("/"===e)return[[_e]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${r})/"${l}": ${e}`)}let r=0,n=r;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,l="",u="";function d(){l&&(0===r?i.push({type:0,value:l}):1===r||2===r||3===r?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function h(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===r)switch(r){case 0:"/"===a?(l&&d(),s()):":"===a?(d(),r=1):h();break;case 4:h(),r=n;break;case 1:"("===a?r=2:ke.test(a)?h():(d(),r=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:r=3:u+=a;break;case 3:d(),r=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else n=r,r=4;return 2===r&&t(`Unfinished custom RegExp for param "${l}"`),d(),s(),o}function Ee(e,t,r){const n=ve(Ce(e.path),r);const o=a(n,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function Se(e,t){const r=[],n=new Map;function o(e){return n.get(e)}function i(e,r,n){const o=!n,c=Ie(e);c.aliasOf=n&&n.record;const d=Oe(t,e),h=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)h.push(a({},c,{components:n?n.record.components:c.components,path:e,aliasOf:n?n.record:c}))}let f,p;for(const t of h){const{path:a}=t;if(r&&"/"!==a[0]){const e=r.record.path,n="/"===e[e.length-1]?"":"/";t.path=r.record.path+(a&&n+a)}if(f=Ee(t,r,d),n?n.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),o&&e.name&&!Re(f)&&s(e.name)),Pe(f)&&u(f),c.children){const e=c.children;for(let t=0;t<e.length;t++)i(e[t],f,n&&n.children[t])}n=n||f}return p?()=>{s(p)}:l}function s(e){if(le(e)){const t=n.get(e);t&&(n.delete(e),r.splice(r.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=r.indexOf(e);t>-1&&(r.splice(t,1),e.record.name&&n.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return r}function u(e){const t=Ne(e,r);r.splice(t,0,e),e.record.name&&!Re(e)&&n.set(e.record.name,e)}function d(e,t){let o,i,s,c={};if("name"in e&&e.name){if(o=n.get(e.name),!o)throw he(1,{location:e});0,s=o.record.name,c=a(Te(t.params,o.keys.filter((e=>!e.optional)).concat(o.parent?o.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Te(e.params,o.keys.map((e=>e.name)))),i=o.stringify(c)}else if(null!=e.path)i=e.path,o=r.find((e=>e.re.test(i))),o&&(c=o.parse(i),s=o.record.name);else{if(o=t.name?n.get(t.name):r.find((e=>e.re.test(t.path))),!o)throw he(1,{location:e,currentLocation:t});s=o.record.name,c=a({},t.params,e.params),i=o.stringify(c)}const l=[];let u=o;while(u)l.unshift(u.record),u=u.parent;return{name:s,path:i,params:c,matched:l,meta:Ae(l)}}function h(){r.length=0,n.clear()}return t=Oe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:d,removeRoute:s,clearRoutes:h,getRoutes:c,getRecordMatcher:o}}function Te(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function Ie(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:xe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function xe(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const n in e.components)t[n]="object"===typeof r?r[n]:r;return t}function Re(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ae(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function Oe(e,t){const r={};for(const n in e)r[n]=n in t?t[n]:e[n];return r}function Ne(e,t){let r=0,n=t.length;while(r!==n){const o=r+n>>1,i=be(e,t[o]);i<0?n=o:r=o+1}const o=De(e);return o&&(n=t.lastIndexOf(o,n-1)),n}function De(e){let t=e;while(t=t.parent)if(Pe(t)&&0===be(e,t))return t}function Pe({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Le(e){const t={};if(""===e||"?"===e)return t;const r="?"===e[0],n=(r?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const e=n[o].replace(m," "),r=e.indexOf("="),i=O(r<0?e:e.slice(0,r)),s=r<0?null:O(e.slice(r+1));if(i in t){let e=t[i];u(e)||(e=t[i]=[e]),e.push(s)}else t[i]=s}return t}function Be(e){let t="";for(let r in e){const n=e[r];if(r=x(r),null==n){void 0!==n&&(t+=(t.length?"&":"")+r);continue}const o=u(n)?n.map((e=>e&&I(e))):[n&&I(n)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+r,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const r in e){const n=e[r];void 0!==n&&(t[r]=u(n)?n.map((e=>null==e?null:""+e)):null==n?n:""+n)}return t}const Fe=Symbol(""),Ue=Symbol(""),je=Symbol(""),Ve=Symbol(""),$e=Symbol("");function ze(){let e=[];function t(t){return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}function r(){e=[]}return{add:t,list:()=>e.slice(),reset:r}}function qe(e,t,r,n,o,i=e=>e()){const s=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise(((a,c)=>{const l=e=>{!1===e?c(he(4,{from:r,to:t})):e instanceof Error?c(e):ce(e)?c(he(2,{from:t,to:e})):(s&&n.enterCallbacks[o]===s&&"function"===typeof e&&s.push(e),a())},u=i((()=>e.call(n&&n.instances[o],t,r,l)));let d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch((e=>c(e)))}))}function We(e,t,r,n,o=e=>e()){const i=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(Ke(c)){const s=c.__vccOpts||c,l=s[t];l&&i.push(qe(l,r,n,a,e,o))}else{let l=c();0,i.push((()=>l.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=s(i)?i.default:i;a.components[e]=c;const l=c.__vccOpts||c,u=l[t];return u&&qe(u,r,n,a,e,o)()}))))}}}return i}function Ke(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,n.WQ)(je),r=(0,n.WQ)(Ve);const i=(0,n.EW)((()=>{const r=(0,o.R1)(e.to);return t.resolve(r)})),s=(0,n.EW)((()=>{const{matched:e}=i.value,{length:t}=e,n=e[t-1],o=r.matched;if(!n||!o.length)return-1;const s=o.findIndex(F.bind(null,n));if(s>-1)return s;const a=Je(e[t-2]);return t>1&&Je(n)===a&&o[o.length-1].path!==a?o.findIndex(F.bind(null,e[t-2])):s})),a=(0,n.EW)((()=>s.value>-1&&Ye(r.params,i.value.params))),c=(0,n.EW)((()=>s.value>-1&&s.value===r.matched.length-1&&U(r.params,i.value.params)));function u(r={}){return Xe(r)?t[(0,o.R1)(e.replace)?"replace":"push"]((0,o.R1)(e.to)).catch(l):Promise.resolve()}return{route:i,href:(0,n.EW)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:u}}const Ge=(0,n.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const r=(0,o.Kh)(He(e)),{options:i}=(0,n.WQ)(je),s=(0,n.EW)((()=>({[Ze(e.activeClass,i.linkActiveClass,"router-link-active")]:r.isActive,[Ze(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive})));return()=>{const o=t.default&&t.default(r);return e.custom?o:(0,n.h)("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:s.value},o)}}}),Qe=Ge;function Xe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const r in t){const n=t[r],o=e[r];if("string"===typeof n){if(n!==o)return!1}else if(!u(o)||o.length!==n.length||n.some(((e,t)=>e!==o[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ze=(e,t,r)=>null!=e?e:null!=t?t:r,et=(0,n.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const i=(0,n.WQ)($e),s=(0,n.EW)((()=>e.route||i.value)),c=(0,n.WQ)(Ue,0),l=(0,n.EW)((()=>{let e=(0,o.R1)(c);const{matched:t}=s.value;let r;while((r=t[e])&&!r.components)e++;return e})),u=(0,n.EW)((()=>s.value.matched[l.value]));(0,n.Gt)(Ue,(0,n.EW)((()=>l.value+1))),(0,n.Gt)(Fe,u),(0,n.Gt)($e,s);const d=(0,o.KR)();return(0,n.wB)((()=>[d.value,u.value,e.name]),(([e,t,r],[n,o,i])=>{t&&(t.instances[r]=e,o&&o!==t&&e&&e===n&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&F(t,o)&&n||(t.enterCallbacks[r]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=s.value,i=e.name,c=u.value,l=c&&c.components[i];if(!l)return tt(r.default,{Component:l,route:o});const h=c.props[i],f=h?!0===h?o.params:"function"===typeof h?h(o):h:null,p=e=>{e.component.isUnmounted&&(c.instances[i]=null)},g=(0,n.h)(l,a({},f,t,{onVnodeUnmounted:p,ref:d}));return tt(r.default,{Component:g,route:o})||g}}});function tt(e,t){if(!e)return null;const r=e(t);return 1===r.length?r[0]:r}const rt=et;function nt(e){const t=Se(e.routes,e),r=e.parseQuery||Le,s=e.stringifyQuery||Be,d=e.history;const h=ze(),f=ze(),p=ze(),g=(0,o.IJ)(z);let m=z;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=c.bind(null,(e=>""+e)),y=c.bind(null,A),b=c.bind(null,O);function w(e,r){let n,o;return le(e)?(n=t.getRecordMatcher(e),o=r):o=e,t.addRoute(o,n)}function _(e){const r=t.getRecordMatcher(e);r&&t.removeRoute(r)}function k(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function E(e,n){if(n=a({},n||g.value),"string"===typeof e){const o=P(r,e,n.path),i=t.resolve({path:o.path},n),s=d.createHref(o.fullPath);return a(o,i,{params:b(i.params),hash:O(o.hash),redirectedFrom:void 0,href:s})}let o;if(null!=e.path)o=a({},e,{path:P(r,e.path,n.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];o=a({},e,{params:y(t)}),n.params=y(n.params)}const i=t.resolve(o,n),c=e.hash||"";i.params=v(b(i.params));const l=L(s,a({},e,{hash:T(c),path:i.path})),u=d.createHref(l);return a({fullPath:l,hash:c,query:s===Be?Me(e.query):e.query||{}},i,{redirectedFrom:void 0,href:u})}function S(e){return"string"===typeof e?P(r,e,g.value.path):a({},e)}function I(e,t){if(m!==e)return he(8,{from:t,to:e})}function x(e){return D(e)}function R(e){return x(a(S(e),{replace:!0}))}function N(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:r}=t;let n="function"===typeof r?r(e):r;return"string"===typeof n&&(n=n.includes("?")||n.includes("#")?n=S(n):{path:n},n.params={}),a({query:e.query,hash:e.hash,params:null!=n.path?{}:e.params},n)}}function D(e,t){const r=m=E(e),n=g.value,o=e.state,i=e.force,c=!0===e.replace,l=N(r);if(l)return D(a(S(l),{state:"object"===typeof l?a({},o,l.state):o,force:i,replace:c}),t||r);const u=r;let d;return u.redirectedFrom=t,!i&&M(s,n,r)&&(d=he(16,{to:u,from:n}),ne(n,n,!0,!1)),(d?Promise.resolve(d):U(u,n)).catch((e=>fe(e)?fe(e,2)?e:re(e):Q(e,u,n))).then((e=>{if(e){if(fe(e,2))return D(a({replace:c},S(e.to),{state:"object"===typeof e.to?a({},o,e.to.state):o,force:i}),t||u)}else e=V(u,n,!0,c,o);return j(u,n,e),e}))}function B(e,t){const r=I(e,t);return r?Promise.reject(r):Promise.resolve()}function F(e){const t=se.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function U(e,t){let r;const[n,o,i]=ot(e,t);r=We(n.reverse(),"beforeRouteLeave",e,t);for(const a of n)a.leaveGuards.forEach((n=>{r.push(qe(n,e,t))}));const s=B.bind(null,e,t);return r.push(s),ce(r).then((()=>{r=[];for(const n of h.list())r.push(qe(n,e,t));return r.push(s),ce(r)})).then((()=>{r=We(o,"beforeRouteUpdate",e,t);for(const n of o)n.updateGuards.forEach((n=>{r.push(qe(n,e,t))}));return r.push(s),ce(r)})).then((()=>{r=[];for(const n of i)if(n.beforeEnter)if(u(n.beforeEnter))for(const o of n.beforeEnter)r.push(qe(o,e,t));else r.push(qe(n.beforeEnter,e,t));return r.push(s),ce(r)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),r=We(i,"beforeRouteEnter",e,t,F),r.push(s),ce(r)))).then((()=>{r=[];for(const n of f.list())r.push(qe(n,e,t));return r.push(s),ce(r)})).catch((e=>fe(e,8)?e:Promise.reject(e)))}function j(e,t,r){p.list().forEach((n=>F((()=>n(e,t,r)))))}function V(e,t,r,n,o){const s=I(e,t);if(s)return s;const c=t===z,l=i?history.state:{};r&&(n||c?d.replace(e.fullPath,a({scroll:c&&l&&l.scroll},o)):d.push(e.fullPath,o)),g.value=e,ne(e,t,r,c),re()}let $;function W(){$||($=d.listen(((e,t,r)=>{if(!ae.listening)return;const n=E(e),o=N(n);if(o)return void D(a(o,{replace:!0}),n).catch(l);m=n;const s=g.value;i&&ee(J(s.fullPath,r.delta),X()),U(n,s).catch((e=>fe(e,12)?e:fe(e,2)?(D(e.to,n).then((e=>{fe(e,20)&&!r.delta&&r.type===q.pop&&d.go(-1,!1)})).catch(l),Promise.reject()):(r.delta&&d.go(-r.delta,!1),Q(e,n,s)))).then((e=>{e=e||V(n,s,!1),e&&(r.delta&&!fe(e,8)?d.go(-r.delta,!1):r.type===q.pop&&fe(e,20)&&d.go(-1,!1)),j(n,s,e)})).catch(l)})))}let K,H=ze(),G=ze();function Q(e,t,r){re(e);const n=G.list();return n.length?n.forEach((n=>n(e,t,r))):console.error(e),Promise.reject(e)}function Z(){return K&&g.value!==z?Promise.resolve():new Promise(((e,t)=>{H.add([e,t])}))}function re(e){return K||(K=!e,W(),H.list().forEach((([t,r])=>e?r(e):t())),H.reset()),e}function ne(t,r,o,s){const{scrollBehavior:a}=e;if(!i||!a)return Promise.resolve();const c=!o&&te(J(t.fullPath,0))||(s||!o)&&history.state&&history.state.scroll||null;return(0,n.dY)().then((()=>a(t,r,c))).then((e=>e&&Y(e))).catch((e=>Q(e,t,r)))}const oe=e=>d.go(e);let ie;const se=new Set,ae={currentRoute:g,listening:!0,addRoute:w,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:C,getRoutes:k,resolve:E,options:e,push:x,replace:R,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:h.add,beforeResolve:f.add,afterEach:p.add,onError:G.add,isReady:Z,install(e){const t=this;e.component("RouterLink",Qe),e.component("RouterView",rt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.R1)(g)}),i&&!ie&&g.value===z&&(ie=!0,x(d.location).catch((e=>{0})));const r={};for(const o in z)Object.defineProperty(r,o,{get:()=>g.value[o],enumerable:!0});e.provide(je,t),e.provide(Ve,(0,o.Gc)(r)),e.provide($e,g);const n=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(m=z,$&&$(),$=null,g.value=z,ie=!1,K=!1),n()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>F(t)))),Promise.resolve())}return ae}function ot(e,t){const r=[],n=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const i=t.matched[s];i&&(e.matched.find((e=>F(e,i)))?n.push(i):r.push(i));const a=e.matched[s];a&&(t.matched.find((e=>F(e,a)))||o.push(a))}return[r,n,o]}function it(){return(0,n.WQ)(je)}function st(e){return(0,n.WQ)(Ve)}}}]);
//# sourceMappingURL=chunk-vendors.afa5785c.js.map