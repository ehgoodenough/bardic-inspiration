!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=37)}([function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Il})),n.d(t,"b",(function(){return _u})),n.d(t,"c",(function(){return au})),n.d(t,"d",(function(){return Nc})),n.d(t,"e",(function(){return kl})),n.d(t,"f",(function(){return Tu})),n.d(t,"g",(function(){return I})),n.d(t,"h",(function(){return Eu})),n.d(t,"i",(function(){return Cl})),n.d(t,"j",(function(){return Dl})),n.d(t,"k",(function(){return V})),n.d(t,"l",(function(){return Ql})),n.d(t,"m",(function(){return ye})),n.d(t,"n",(function(){return K})),n.d(t,"o",(function(){return G})),n.d(t,"p",(function(){return Sc})),n.d(t,"q",(function(){return b})),n.d(t,"r",(function(){return Ee})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return _c})),n.d(t,"u",(function(){return ql})),n.d(t,"v",(function(){return th})),n.d(t,"w",(function(){return eh})),n.d(t,"x",(function(){return pu})),n.d(t,"y",(function(){return Pc})),n.d(t,"z",(function(){return Lc})),n.d(t,"A",(function(){return Ac})),n.d(t,"B",(function(){return jl})),n.d(t,"C",(function(){return Jl})),n.d(t,"D",(function(){return yu})),n.d(t,"E",(function(){return Mc})),n.d(t,"F",(function(){return hu})),n.d(t,"G",(function(){return du})),n.d(t,"H",(function(){return gu})),n.d(t,"I",(function(){return yl})),n.d(t,"J",(function(){return gl})),n.d(t,"K",(function(){return uu})),n.d(t,"L",(function(){return zl})),n.d(t,"M",(function(){return Ol})),n.d(t,"N",(function(){return Pl})),n.d(t,"O",(function(){return Ll})),n.d(t,"P",(function(){return Ml})),n.d(t,"Q",(function(){return Fl})),n.d(t,"R",(function(){return Vl})),n.d(t,"S",(function(){return nh})),n.d(t,"T",(function(){return ll})),n.d(t,"U",(function(){return hl})),n.d(t,"V",(function(){return vu})),n.d(t,"W",(function(){return wu})),n.d(t,"X",(function(){return Gl})),n.d(t,"Y",(function(){return Kl})),n.d(t,"Z",(function(){return cl})),n.d(t,"ab",(function(){return rl})),n.d(t,"bb",(function(){return Vc})),n.d(t,"cb",(function(){return Fc})),n.d(t,"db",(function(){return Xl})),n.d(t,"eb",(function(){return Zl})),n.d(t,"fb",(function(){return Ul})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return Nl})),n.d(t,"ib",(function(){return pl})),n.d(t,"jb",(function(){return fl})),n.d(t,"kb",(function(){return Bl})),n.d(t,"lb",(function(){return mu})),n.d(t,"mb",(function(){return sl}));var r=n(2),i=n(3),s=n(5),o=n(1),a=n(4);const c="@firebase/firestore";
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
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
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
let l="9.15.0";
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
 */const h=new s.b("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=s.a.DEBUG){const n=t.map(y);h.debug(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s.a.ERROR){const n=t.map(y);h.error(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s.a.WARN){const n=t.map(y);h.warn(`Firestore (${l}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function v(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function w(e,t){e||v()}function b(e,t){e||v()}function _(e,t){return e}
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends o.c{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class E{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
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
 */class S{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class x{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class k{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class C{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(w("string"==typeof t.accessToken),new S(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return w(null===e||"string"==typeof e),new u(e)}}class D{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=u.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(w(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class A{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new D(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.A;return this.A=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(w("string"==typeof e.token),this.A=e.token,new N(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function R(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class P{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=R(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function L(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function F(e){return e+"\0"}
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
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new I(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new V(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new V(0,0))}static max(){return new U(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class B{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===B.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof B?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class j extends B{construct(e,t,n){return new j(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new I(T.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new j(t)}static emptyPath(){return new j([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends B{construct(e,t,n){return new G(e,t,n)}static isValidIdentifier(e){return q.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new G(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new I(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new I(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new I(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new I(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new G(t)}static emptyPath(){return new G([])}}
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(j.fromString(e))}static fromName(e){return new K(j.fromString(e).popFirst(5))}static empty(){return new K(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===j.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return j.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new j(e.slice()))}}
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
 */class z{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function $(e){return e.fields.find(e=>2===e.kind)}function H(e){return e.fields.filter(e=>2!==e.kind)}z.UNKNOWN_ID=-1;class Q{constructor(e,t){this.fieldPath=e,this.kind=t}}class W{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new W(0,J.min())}}function Y(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=U.fromTimestamp(1e9===r?new V(n+1,0):new V(n,r));return new J(i,K.empty(),t)}function X(e){return new J(e.readTime,e.key,-1)}class J{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new J(U.min(),K.empty(),-1)}static max(){return new J(U.max(),K.empty(),-1)}}function Z(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=K.comparator(e.documentKey,t.documentKey),0!==n?n:L(e.largestBatchId,t.largestBatchId))}
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
 */const ee="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class te{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
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
 */async function ne(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==ee)throw e;p("LocalStore","Unexpectedly lost primary lease")}
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
 */class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new re((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof re?t:re.resolve(t)}catch(e){return re.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):re.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):re.reject(t)}static resolve(e){return new re((t,n)=>{t(e)})}static reject(e){return new re((t,n)=>{n(e)})}static waitFor(e){return new re((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=re.resolve(!1);for(const n of e)t=t.next(e=>e?re.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new re((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next(e=>{s[c]=e,++o,o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new re((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}
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
 */class ie{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new E,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new ae(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{const n=de(t.target.error);this.P.reject(new ae(e,n))}}static open(e,t,n,r){try{return new ie(t,e.transaction(r,n))}catch(e){throw new ae(t,e)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ue(t)}}class se{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===se.D(Object(o.m)())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),le(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Object(o.o)())return!1;if(se.N())return!0;const e=Object(o.m)(),t=se.D(e),n=0<t&&t<10,r=se.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static N(){var t;return void 0!==e&&"YES"===(null===(t=e.env)||void 0===t?void 0:t.O)}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new ae(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new I(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new I(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ae(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.$(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.F(e);const t=ie.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.V(),e)).catch(e=>(t.abort(e),re.reject(e))).toPromise();return s.catch(()=>{}),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oe{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return le(this.q.delete())}}class ae extends I{constructor(e,t){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ce(e){return"IndexedDbTransactionError"===e.name}class ue{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),le(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),le(this.store.add(e))}get(e){return le(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),le(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),le(this.store.count())}W(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.H(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new re((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}J(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new re((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Y(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const r=this.cursor(n);return this.H(r,(e,t,n)=>n.delete())}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.H(r,t)}tt(e){const t=this.cursor({});return new re((n,r)=>{t.onerror=e=>{const t=de(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}H(e,t){const n=[];return new re((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new oe(i),o=t(i.primaryKey,i.value,s);if(o instanceof re){const e=o.catch(e=>(s.done(),re.reject(e)));n.push(e)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}}).next(()=>re.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function le(e){return new re((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=de(e.target.error);n(t)}})}let he=!1;function de(e){const t=se.D(Object(o.m)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return he||(he=!0,setTimeout(()=>{throw e},0)),e}}return e}class fe{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){p("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{p("IndexBackiller","Documents written: "+await this.et.st())}catch(e){ce(e)?p("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await ne(e)}await this.nt(6e4)})}}class pe{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const n=new Set;let r=t,i=!0;return re.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return p("IndexBackiller","Processing collection: "+t),this.rt(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.ot(r,n)).next(n=>(p("IndexBackiller","Updating offset: "+n),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}ot(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=X(t);Z(r,n)>0&&(n=r)}),new J(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
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
 */class me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}me.at=-1;
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
class ge{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ye{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ye("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ye&&e.projectId===this.projectId&&e.database===this.database}}
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
 */function ve(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function we(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function be(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */function _e(e){return null==e}function Te(e){return 0===e&&1/e==-1/0}function Ie(e){return"number"==typeof e&&Number.isInteger(e)&&!Te(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */function Ee(){return"undefined"!=typeof atob}
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
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Se(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const xe=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ke(e){if(w(!!e),"string"==typeof e){let t=0;const n=xe.exec(e);if(w(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ce(e.seconds),nanos:Ce(e.nanos)}}function Ce(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function De(e){return"string"==typeof e?Se.fromBase64String(e):Se.fromUint8Array(e)}
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
 */function Ae(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ne(e){const t=ke(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}
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
 */const Oe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Re={nullValue:"NULL_VALUE"};function Pe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ae(e)?4:He(e)?9007199254740991:10:v()}function Le(e,t){if(e===t)return!0;const n=Pe(e);if(n!==Pe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ne(e).isEqual(Ne(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ke(e.timestampValue),r=ke(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return De(e.bytesValue).isEqual(De(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ce(e.geoPointValue.latitude)===Ce(t.geoPointValue.latitude)&&Ce(e.geoPointValue.longitude)===Ce(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ce(e.integerValue)===Ce(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ce(e.doubleValue),r=Ce(t.doubleValue);return n===r?Te(n)===Te(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],Le);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ve(n)!==ve(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Le(n[e],r[e])))return!1;return!0}(e,t);default:return v()}}function Me(e,t){return void 0!==(e.values||[]).find(e=>Le(e,t))}function Fe(e,t){if(e===t)return 0;const n=Pe(e),r=Pe(t);if(n!==r)return L(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ce(e.integerValue||e.doubleValue),r=Ce(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Ve(e.timestampValue,t.timestampValue);case 4:return Ve(Ne(e),Ne(t));case 5:return L(e.stringValue,t.stringValue);case 6:return function(e,t){const n=De(e),r=De(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=L(n[e],r[e]);if(0!==t)return t}return L(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=L(Ce(e.latitude),Ce(t.latitude));return 0!==n?n:L(Ce(e.longitude),Ce(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Fe(n[e],r[e]);if(t)return t}return L(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Oe.mapValue&&t===Oe.mapValue)return 0;if(e===Oe.mapValue)return 1;if(t===Oe.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=L(r[e],s[e]);if(0!==t)return t;const o=Fe(n[r[e]],i[s[e]]);if(0!==o)return o}return L(r.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function Ve(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return L(e,t);const n=ke(e),r=ke(t),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function Ue(e){return function e(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const t=ke(e);return`time(${t.seconds},${t.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?De(t.bytesValue).toBase64():"referenceValue"in t?(r=t.referenceValue,K.fromName(r).toString()):"geoPointValue"in t?`geo(${(n=t.geoPointValue).latitude},${n.longitude})`:"arrayValue"in t?function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=e(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${e(t.fields[s])}`;return r+"}"}(t.mapValue):v();var n,r}(e)}function Be(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function je(e){return!!e&&"integerValue"in e}function qe(e){return!!e&&"arrayValue"in e}function Ge(e){return!!e&&"nullValue"in e}function Ke(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ze(e){return!!e&&"mapValue"in e}function $e(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return we(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=$e(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=$e(e.arrayValue.values[n]);return t}return Object.assign({},e)}function He(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Qe(e){return"nullValue"in e?Re:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Be(ye.empty(),K.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:v()}function We(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Be(ye.empty(),K.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?Oe:v()}function Ye(e,t){const n=Fe(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Xe(e,t){const n=Fe(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
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
 */class Je{constructor(e,t){this.position=e,this.inclusive=t}}function Ze(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?K.comparator(K.fromName(o.referenceValue),n.key):Fe(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function et(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Le(e.position[n],t.position[n]))return!1;return!0}
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
 */class tt{}class nt extends tt{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ht(e,t,n):"array-contains"===t?new mt(e,n):"in"===t?new gt(e,n):"not-in"===t?new yt(e,n):"array-contains-any"===t?new vt(e,n):new nt(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new dt(e,n):new ft(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Fe(t,this.value)):null!==t&&Pe(this.value)===Pe(t)&&this.matchesComparison(Fe(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class rt extends tt{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new rt(e,t)}matches(e){return it(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function it(e){return"and"===e.op}function st(e){return"or"===e.op}function ot(e){return at(e)&&it(e)}function at(e){for(const t of e.filters)if(t instanceof rt)return!1;return!0}function ct(e,t){return e instanceof nt?function(e,t){return t instanceof nt&&e.op===t.op&&e.field.isEqual(t.field)&&Le(e.value,t.value)}(e,t):e instanceof rt?function(e,t){return t instanceof rt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&ct(n,t.filters[r]),!0)}(e,t):void v()}function ut(e,t){const n=e.filters.concat(t);return rt.create(n,e.op)}function lt(e){return e instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ue(e.value)}`}(e):e instanceof rt?function(e){return e.op.toString()+" {"+e.getFilters().map(lt).join(" ,")+"}"}(e):"Filter"}class ht extends nt{constructor(e,t,n){super(e,t,n),this.key=K.fromName(n.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class dt extends nt{constructor(e,t){super(e,"in",t),this.keys=pt("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ft extends nt{constructor(e,t){super(e,"not-in",t),this.keys=pt("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function pt(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>K.fromName(e.referenceValue))}class mt extends nt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qe(t)&&Me(t.arrayValue,this.value)}}class gt extends nt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Me(this.value.arrayValue,t)}}class yt extends nt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Me(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Me(this.value.arrayValue,t)}}class vt extends nt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qe(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Me(this.value.arrayValue,e))}}
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
 */class wt{constructor(e,t="asc"){this.field=e,this.dir=t}}function bt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class _t{constructor(e,t){this.comparator=e,this.root=t||It.EMPTY}insert(e,t){return new _t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tt(this.root,e,this.comparator,!0)}}class Tt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class It{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:It.RED,this.left=null!=r?r:It.EMPTY,this.right=null!=i?i:It.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new It(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return It.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1,It.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,i){return this}insert(e,t,n){return new It(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Et{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new St(this.data.getIterator())}getIteratorFrom(e){return new St(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Et))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class St{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function xt(e){return e.hasNext()?e.getNext():void 0}
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
 */class kt{constructor(e){this.fields=e,e.sort(G.comparator)}static empty(){return new kt([])}unionWith(e){let t=new Et(G.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ze(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$e(t)}setAll(e){let t=G.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=$e(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ze(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Le(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ze(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){we(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new Ct($e(this.value))}}function Dt(e){const t=[];return we(e.fields,(e,n)=>{const r=new G([e]);if(ze(n)){const e=Dt(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new kt(t)
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
 */}class At{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new At(e,0,U.min(),U.min(),U.min(),Ct.empty(),0)}static newFoundDocument(e,t,n,r){return new At(e,1,t,U.min(),n,r,0)}static newNoDocument(e,t){return new At(e,2,t,U.min(),U.min(),Ct.empty(),0)}static newUnknownDocument(e,t){return new At(e,3,t,U.min(),U.min(),Ct.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Nt{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function Ot(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Nt(e,t,n,r,i,s,o)}function Rt(e){const t=_(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>function e(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Ue(t.value);{const n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}}(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),_e(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Ue(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Ue(e)).join(",")),t.ft=e}return t.ft}function Pt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!bt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ct(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!et(e.startAt,t.startAt)&&et(e.endAt,t.endAt)}function Lt(e){return K.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Mt(e,t){return e.filters.filter(e=>e instanceof nt&&e.field.isEqual(t))}function Ft(e,t,n){let r=Re,i=!0;for(const n of Mt(e,t)){let e=Re,t=!0;switch(n.op){case"<":case"<=":e=Qe(n.value);break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=Re}Ye({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Ye({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function Vt(e,t,n){let r=Oe,i=!0;for(const n of Mt(e,t)){let e=Oe,t=!0;switch(n.op){case">=":case">":e=We(n.value),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=Oe}Xe({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Xe({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
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
 */class Ut{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Bt(e,t,n,r,i,s,o,a){return new Ut(e,t,n,r,i,s,o,a)}function jt(e){return new Ut(e)}function qt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Gt(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Kt(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function zt(e){return null!==e.collectionGroup}function $t(e){const t=_(e);if(null===t.dt){t.dt=[];const e=Kt(t),n=Gt(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new wt(e)),t.dt.push(new wt(G.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new wt(G.keyField(),e))}}}return t.dt}function Ht(e){const t=_(e);if(!t._t)if("F"===t.limitType)t._t=Ot(t.path,t.collectionGroup,$t(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of $t(t)){const t="desc"===n.dir?"asc":"desc";e.push(new wt(n.field,t))}const n=t.endAt?new Je(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Je(t.startAt.position,t.startAt.inclusive):null;t._t=Ot(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function Qt(e,t){t.getFirstInequalityField(),Kt(e);const n=e.filters.concat([t]);return new Ut(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Wt(e,t,n){return new Ut(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Yt(e,t){return Pt(Ht(e),Ht(t))&&e.limitType===t.limitType}function Xt(e){return`${Rt(Ht(e))}|lt:${e.limitType}`}function Jt(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>lt(e)).join(", ")}]`),_e(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Ue(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Ue(e)).join(",")),`Target(${t})`}(Ht(e))}; limitType=${e.limitType})`}function Zt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):K.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of $t(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ze(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,$t(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ze(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,$t(e),t))}(e,t)}function en(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function tn(e){return(t,n)=>{let r=!1;for(const i of $t(e)){const e=nn(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function nn(e,t,n){const r=e.field.isKeyField()?K.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Fe(r,i):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
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
 */function rn(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Te(t)?"-0":t}}function sn(e){return{integerValue:""+e}}function on(e,t){return Ie(t)?sn(t):rn(e,t)}
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
 */class an{constructor(){this._=void 0}}function cn(e,t,n){return e instanceof hn?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof dn?fn(e,t):e instanceof pn?mn(e,t):function(e,t){const n=ln(e,t),r=yn(n)+yn(e.gt);return je(n)&&je(e.gt)?sn(r):rn(e.yt,r)}(e,t)}function un(e,t,n){return e instanceof dn?fn(e,t):e instanceof pn?mn(e,t):n}function ln(e,t){return e instanceof gn?je(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class hn extends an{}class dn extends an{constructor(e){super(),this.elements=e}}function fn(e,t){const n=vn(t);for(const t of e.elements)n.some(e=>Le(e,t))||n.push(t);return{arrayValue:{values:n}}}class pn extends an{constructor(e){super(),this.elements=e}}function mn(e,t){let n=vn(t);for(const t of e.elements)n=n.filter(e=>!Le(e,t));return{arrayValue:{values:n}}}class gn extends an{constructor(e,t){super(),this.yt=e,this.gt=t}}function yn(e){return Ce(e.integerValue||e.doubleValue)}function vn(e){return qe(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class wn{constructor(e,t){this.field=e,this.transform=t}}class bn{constructor(e,t){this.version=e,this.transformResults=t}}class _n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class In{}function En(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Pn(e.key,_n.none()):new Dn(e.key,e.data,_n.none());{const n=e.data,r=Ct.empty();let i=new Et(G.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new An(e.key,r,new kt(i.toArray()),_n.none())}}function Sn(e,t,n){e instanceof Dn?function(e,t,n){const r=e.value.clone(),i=On(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof An?function(e,t,n){if(!Tn(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=On(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Nn(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function xn(e,t,n,r){return e instanceof Dn?function(e,t,n,r){if(!Tn(e.precondition,t))return n;const i=e.value.clone(),s=Rn(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof An?function(e,t,n,r){if(!Tn(e.precondition,t))return n;const i=Rn(e.fieldTransforms,r,t),s=t.data;return s.setAll(Nn(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return Tn(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function kn(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=ln(r.transform,e||null);null!=i&&(null===n&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function Cn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&M(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof dn&&t instanceof dn||e instanceof pn&&t instanceof pn?M(e.elements,t.elements,Le):e instanceof gn&&t instanceof gn?Le(e.gt,t.gt):e instanceof hn&&t instanceof hn}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Dn extends In{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class An extends In{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nn(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function On(e,t,n){const r=new Map;w(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,un(o,a,n[i]))}return r}function Rn(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,cn(e,s,t))}return r}class Pn extends In{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ln extends In{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Mn{constructor(e){this.count=e}}
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
 */var Fn,Vn;function Un(e){switch(e){default:return v();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Bn(e){if(void 0===e)return m("GRPC error has no .code"),T.UNKNOWN;switch(e){case Fn.OK:return T.OK;case Fn.CANCELLED:return T.CANCELLED;case Fn.UNKNOWN:return T.UNKNOWN;case Fn.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Fn.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Fn.INTERNAL:return T.INTERNAL;case Fn.UNAVAILABLE:return T.UNAVAILABLE;case Fn.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Fn.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Fn.NOT_FOUND:return T.NOT_FOUND;case Fn.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Fn.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Fn.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Fn.ABORTED:return T.ABORTED;case Fn.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Fn.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Fn.DATA_LOSS:return T.DATA_LOSS;default:return v()}}(Vn=Fn||(Fn={}))[Vn.OK=0]="OK",Vn[Vn.CANCELLED=1]="CANCELLED",Vn[Vn.UNKNOWN=2]="UNKNOWN",Vn[Vn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vn[Vn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vn[Vn.NOT_FOUND=5]="NOT_FOUND",Vn[Vn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vn[Vn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vn[Vn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vn[Vn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vn[Vn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vn[Vn.ABORTED=10]="ABORTED",Vn[Vn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vn[Vn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vn[Vn.INTERNAL=13]="INTERNAL",Vn[Vn.UNAVAILABLE=14]="UNAVAILABLE",Vn[Vn.DATA_LOSS=15]="DATA_LOSS";
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
class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){we(this.inner,(t,n)=>{for(const[t,r]of n)e(t,r)})}isEmpty(){return be(this.inner)}size(){return this.innerSize}}
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
 */const qn=new _t(K.comparator);function Gn(){return qn}const Kn=new _t(K.comparator);function zn(...e){let t=Kn;for(const n of e)t=t.insert(n.key,n);return t}function $n(e){let t=Kn;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Hn(){return Wn()}function Qn(){return Wn()}function Wn(){return new jn(e=>e.toString(),(e,t)=>e.isEqual(t))}const Yn=new _t(K.comparator),Xn=new Et(K.comparator);function Jn(...e){let t=Xn;for(const n of e)t=t.add(n);return t}const Zn=new Et(L);function er(){return Zn}
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
 */class tr{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,nr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new tr(U.min(),r,er(),Gn(),Jn())}}class nr{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nr(n,t,Jn(),Jn(),Jn())}}
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
 */class rr{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class ir{constructor(e,t){this.targetId=e,this.Et=t}}class sr{constructor(e,t,n=Se.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class or{constructor(){this.At=0,this.Rt=ur(),this.bt=Se.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Jn(),t=Jn(),n=Jn();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}}),new nr(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=ur()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ar{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Gn(),this.qt=cr(),this.Ut=new Et(L)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((e,n)=>{this.zt(n)&&t(n)})}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(Lt(e))if(0===n){const n=new K(e.path);this.Qt(t,n,At.newNoDocument(n,U.min()))}else w(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&Lt(i.target)){const t=new K(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,At.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}});let n=Jn();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Lt.forEach((t,n)=>n.setReadTime(e));const r=new tr(e,t,this.Ut,this.Lt,n);return this.Lt=Gn(),this.qt=cr(),this.Ut=new Et(L),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new or,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Et(L),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new or),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function cr(){return new _t(K.comparator)}function ur(){return new _t(K.comparator)}
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
 */const lr={asc:"ASCENDING",desc:"DESCENDING"},hr={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dr={and:"AND",or:"OR"};class fr{constructor(e,t){this.databaseId=e,this.wt=t}}function pr(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mr(e,t){return e.wt?t.toBase64():t.toUint8Array()}function gr(e,t){return pr(e,t.toTimestamp())}function yr(e){return w(!!e),U.fromTimestamp(function(e){const t=ke(e);return new V(t.seconds,t.nanos)}(e))}function vr(e,t){return function(e){return new j(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function wr(e){const t=j.fromString(e);return w(Ur(t)),t}function br(e,t){return vr(e.databaseId,t.path)}function _r(e,t){const n=wr(t);if(n.get(1)!==e.databaseId.projectId)throw new I(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new I(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new K(Sr(n))}function Tr(e,t){return vr(e.databaseId,t)}function Ir(e){const t=wr(e);return 4===t.length?j.emptyPath():Sr(t)}function Er(e){return new j(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Sr(e){return w(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function xr(e,t,n){return{name:br(e,t),fields:n.value.mapValue.fields}}function kr(e,t,n){const r=_r(e,t.name),i=yr(t.updateTime),s=t.createTime?yr(t.createTime):U.min(),o=new Ct({mapValue:{fields:t.fields}}),a=At.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Cr(e,t){let n;if(t instanceof Dn)n={update:xr(e,t.key,t.value)};else if(t instanceof Pn)n={delete:br(e,t.key)};else if(t instanceof An)n={update:xr(e,t.key,t.data),updateMask:Vr(t.fieldMask)};else{if(!(t instanceof Ln))return v();n={verify:br(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof hn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof dn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof pn)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof gn)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw v()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:gr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v()}(e,t.precondition)),n}function Dr(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?_n.updateTime(yr(e.updateTime)):void 0!==e.exists?_n.exists(e.exists):_n.none()}(t.currentDocument):_n.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)w("REQUEST_TIME"===t.setToServerValue),n=new hn;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new dn(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new pn(e)}else"increment"in t?n=new gn(e,t.increment):v();const r=G.fromServerFormat(t.fieldPath);return new wn(r,n)}(e,t)):[];if(t.update){t.update.name;const i=_r(e,t.update.name),s=new Ct({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new kt(t.map(e=>G.fromServerFormat(e)))}(t.updateMask);return new An(i,s,e,n,r)}return new Dn(i,s,n,r)}if(t.delete){const r=_r(e,t.delete);return new Pn(r,n)}if(t.verify){const r=_r(e,t.verify);return new Ln(r,n)}return v()}function Ar(e,t){return{documents:[Tr(e,t.path)]}}function Nr(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Tr(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Tr(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return function e(t){return t instanceof nt?function(e){if("=="===e.op){if(Ke(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NAN"}};if(Ge(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ke(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NOT_NAN"}};if(Ge(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(e.field),op:Pr(e.op),value:e.value}}}(t):t instanceof rt?function(t){const n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:Lr(t.op),filters:n}}}(t):v()}(rt.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Mr(e.field),direction:Rr(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.wt||_e(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Or(e){let t=Ir(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){w(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Fr(e.unaryFilter.field);return nt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Fr(e.unaryFilter.field);return nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fr(e.unaryFilter.field);return nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Fr(e.unaryFilter.field);return nt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?function(e){return nt.create(Fr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return rt.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return v()}}(t.compositeFilter.op))}(t):v()}(e);return t instanceof rt&&ot(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new wt(Fr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,_e(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Je(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Je(n,t)}(n.endAt)),Bt(t,i,o,s,a,"F",c,u)}function Rr(e){return lr[e]}function Pr(e){return hr[e]}function Lr(e){return dr[e]}function Mr(e){return{fieldPath:e.canonicalString()}}function Fr(e){return G.fromServerFormat(e.fieldPath)}function Vr(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ur(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */function Br(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=qr(t)),t=jr(e.get(n),t);return qr(t)}function jr(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function qr(e){return e+""}function Gr(e){const t=e.length;if(w(t>=2),2===t)return w(""===e.charAt(0)&&""===e.charAt(1)),j.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&v(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:v()}s=t+2}return new j(r)}
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
 */const Kr=["userId","batchId"];
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
 */function zr(e,t){return[e,Br(t)]}function $r(e,t,n){return[e,Br(t),n]}const Hr={},Qr=["prefixPath","collectionGroup","readTime","documentId"],Wr=["prefixPath","collectionGroup","documentId"],Yr=["collectionGroup","readTime","prefixPath","documentId"],Xr=["canonicalId","targetId"],Jr=["targetId","path"],Zr=["path","targetId"],ei=["collectionId","parent"],ti=["indexId","uid"],ni=["uid","sequenceNumber"],ri=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ii=["indexId","uid","orderedDocumentKey"],si=["userId","collectionPath","documentId"],oi=["userId","collectionPath","largestBatchId"],ai=["userId","collectionGroup","largestBatchId"],ci=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ui=[...ci,"documentOverlays"],li=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],hi=li,di=[...hi,"indexConfiguration","indexState","indexEntries"];
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
 */class fi extends te{constructor(e,t){super(),this.se=e,this.currentSequenceNumber=t}}function pi(e,t){const n=_(e);return se.M(n.se,t)}
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
 */class mi{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Sn(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=xn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=xn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Qn();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=En(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Jn())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,(e,t)=>Cn(e,t))&&M(this.baseMutations,e.baseMutations,(e,t)=>Cn(e,t))}}class gi{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){w(e.mutations.length===n.length);let r=Yn;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new gi(e,t,n,r)}}
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
 */class yi{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class vi{constructor(e,t,n,r,i=U.min(),s=U.min(),o=Se.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
 */class wi{constructor(e){this.ie=e}}function bi(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:_i(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:br(e,t.key),fields:t.data.value.mapValue.fields,updateTime:pr(e,t.version.toTimestamp()),createTime:pr(e,t.createTime.toTimestamp())}}(e.ie,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ti(t.version)};else{if(!t.isUnknownDocument())return v();r.unknownDocument={path:n.path.toArray(),version:Ti(t.version)}}return r}function _i(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Ti(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ii(e){const t=new V(e.seconds,e.nanoseconds);return U.fromTimestamp(t)}function Ei(e,t){const n=(t.baseMutations||[]).map(t=>Dr(e.ie,t));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map(t=>Dr(e.ie,t)),i=V.fromMillis(t.localWriteTimeMs);return new mi(t.batchId,i,n,r)}function Si(e){const t=Ii(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Ii(e.lastLimboFreeSnapshotVersion):U.min();let r;var i;return void 0!==e.query.documents?(w(1===(i=e.query).documents.length),r=Ht(jt(Ir(i.documents[0])))):r=function(e){return Ht(Or(e))}(e.query),new vi(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Se.fromBase64String(e.resumeToken))}function xi(e,t){const n=Ti(t.snapshotVersion),r=Ti(t.lastLimboFreeSnapshotVersion);let i;i=Lt(t.target)?Ar(e.ie,t.target):Nr(e.ie,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Rt(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ki(e){const t=Or({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Wt(t,t.limit,"L"):t}function Ci(e,t){return new yi(t.largestBatchId,Dr(e.ie,t.overlayMutation))}function Di(e,t){const n=t.path.lastSegment();return[e,Br(t.path.popLast()),n]}function Ai(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Ti(r.readTime),documentKey:Br(r.documentKey.path),largestBatchId:r.largestBatchId}}
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
 */class Ni{getBundleMetadata(e,t){return Oi(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Ii(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Oi(e).put({bundleId:(n=t).id,createTime:Ti(yr(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Ri(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:ki(t.bundledQuery),readTime:Ii(t.readTime)};var t})}saveNamedQuery(e,t){return Ri(e).put(function(e){return{name:e.name,readTime:Ti(yr(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Oi(e){return pi(e,"bundles")}function Ri(e){return pi(e,"namedQueries")}
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
 */class Pi{constructor(e,t){this.yt=e,this.userId=t}static re(e,t){const n=t.uid||"";return new Pi(e,n)}getOverlay(e,t){return Li(e).get(Di(this.userId,t)).next(e=>e?Ci(this.yt,e):null)}getOverlays(e,t){const n=Hn();return re.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,i)=>{const s=new yi(t,i);r.push(this.oe(e,s))}),re.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(Br(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Li(e).Y("collectionPathOverlayIndex",r))}),re.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Hn(),i=Br(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Li(e).W("collectionPathOverlayIndex",s).next(e=>{for(const t of e){const e=Ci(this.yt,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=Hn();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Li(e).Z({index:"collectionGroupOverlayIndex",range:o},(e,t,n)=>{const o=Ci(this.yt,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}oe(e,t){return Li(e).put(function(e,t,n){const[r,i,s]=Di(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Cr(e.ie,n.mutation)}}(this.yt,this.userId,t))}}function Li(e){return pi(e,"documentOverlays")}
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
 */class Mi{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(Ce(e.integerValue));else if("doubleValue"in e){const n=Ce(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),Te(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(""+(n.seconds||"")),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(De(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?He(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):v()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const e of Object.keys(n))this.de(e,t),this.ce(n[e],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const e of n)this.ce(e,t)}me(e,t){this.he(t,37),K.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}function Fi(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Vi(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Fi(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Mi.Ie=new Mi;class Ui{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ee(n.value),n=t.next();this.Ae()}Re(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.be(n.value),n=t.next();this.Pe()}ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ee(e);else if(e<2048)this.Ee(960|e>>>6),this.Ee(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ee(480|e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e);else{const e=t.codePointAt(0);this.Ee(240|e>>>18),this.Ee(128|63&e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e)}}this.Ae()}Ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.be(e);else if(e<2048)this.be(960|e>>>6),this.be(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.be(480|e>>>12),this.be(128|63&e>>>6),this.be(128|63&e);else{const e=t.codePointAt(0);this.be(240|e>>>18),this.be(128|63&e>>>12),this.be(128|63&e>>>6),this.be(128|63&e)}}this.Pe()}Se(e){const t=this.De(e),n=Vi(t);this.Ce(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}xe(e){const t=this.De(e),n=Vi(t);this.Ce(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Ee(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(t)}be(e){const t=255&e;0===t?(this.Me(0),this.Me(255)):255===t?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Bi{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class ji{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class qi{constructor(){this.$e=new Ui,this.Be=new Bi(this.$e),this.Le=new ji(this.$e)}seed(e){this.$e.seed(e)}qe(e){return 0===e?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}
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
 */class Gi{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Ue(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Gi(this.indexId,this.documentKey,this.arrayValue,n)}}function Ki(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=zi(e.arrayValue,t.arrayValue),0!==n?n:(n=zi(e.directionalValue,t.directionalValue),0!==n?n:K.comparator(e.documentKey,t.documentKey)))}function zi(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
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
 */class $i{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const t of e.filters){const e=t;e.isInequality()?this.Qe=e:this.Ge.push(e)}}je(e){w(e.collectionGroup===this.collectionId);const t=$(e);if(void 0!==t&&!this.We(t))return!1;const n=H(e);let r=0,i=0;for(;r<n.length&&this.We(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Qe){const e=n[r];if(!this.ze(this.Qe,e)||!this.He(this.Ke[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ke.length||!this.He(this.Ke[i++],e))return!1}return!0}We(e){for(const t of this.Ge)if(this.ze(t,e))return!0;return!1}ze(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}He(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
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
 */function Hi(e){if(0===e.getFilters().length)return[];const t=function e(t){if(w(t instanceof nt||t instanceof rt),t instanceof nt)return t;if(1===t.filters.length)return e(t.filters[0]);const n=t.filters.map(t=>e(t));let r=rt.create(n,t.op);return r=Zi(r),Yi(r)?r:(w(r instanceof rt),w(it(r)),w(r.filters.length>1),r.filters.reduce((e,t)=>Xi(e,t)))}(function e(t){var n,r;if(w(t instanceof nt||t instanceof rt),t instanceof nt){if(t instanceof gt){const e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>nt.create(t.field,"==",e)))||[];return rt.create(e,"or")}return t}const i=t.filters.map(t=>e(t));return rt.create(i,t.op)}(e));return w(Yi(t)),Qi(t)||Wi(t)?[t]:t.getFilters()}function Qi(e){return e instanceof nt}function Wi(e){return e instanceof rt&&ot(e)}function Yi(e){return Qi(e)||Wi(e)||function(e){if(e instanceof rt&&st(e)){for(const t of e.getFilters())if(!Qi(t)&&!Wi(t))return!1;return!0}return!1}(e)}function Xi(e,t){let n;return w(e instanceof nt||e instanceof rt),w(t instanceof nt||t instanceof rt),n=e instanceof nt?t instanceof nt?function(e,t){return rt.create([e,t],"and")}(e,t):Ji(e,t):t instanceof nt?Ji(t,e):function(e,t){if(w(e.filters.length>0&&t.filters.length>0),it(e)&&it(t))return ut(e,t.getFilters());const n=st(e)?e:t,r=st(e)?t:e,i=n.filters.map(e=>Xi(e,r));return rt.create(i,"or")}(e,t),Zi(n)}function Ji(e,t){if(it(t))return ut(t,e.getFilters());{const n=t.filters.map(t=>Xi(e,t));return rt.create(n,"or")}}function Zi(e){if(w(e instanceof nt||e instanceof rt),e instanceof nt)return e;const t=e.getFilters();if(1===t.length)return Zi(t[0]);if(at(e))return e;const n=t.map(e=>Zi(e)),r=[];return n.forEach(t=>{t instanceof nt?r.push(t):t instanceof rt&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:rt.create(r,e.op)
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
 */}class es{constructor(){this.Je=new ts}addToCollectionParentIndex(e,t){return this.Je.add(t),re.resolve()}getCollectionParents(e,t){return re.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return re.resolve()}deleteFieldIndex(e,t){return re.resolve()}getDocumentsMatchingTarget(e,t){return re.resolve(null)}getIndexType(e,t){return re.resolve(0)}getFieldIndexes(e,t){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,t){return re.resolve(J.min())}getMinOffsetFromCollectionGroup(e,t){return re.resolve(J.min())}updateCollectionGroup(e,t,n){return re.resolve()}updateIndexEntries(e,t){return re.resolve()}}class ts{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Et(j.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Et(j.comparator)).toArray()}}
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
 */const ns=new Uint8Array(0);class rs{constructor(e,t){this.user=e,this.databaseId=t,this.Ye=new ts,this.Xe=new jn(e=>Rt(e),(e,t)=>Pt(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ye.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Ye.add(t)});const i={collectionId:n,parent:Br(r)};return is(e).put(i)}return re.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[F(t),""],!1,!0);return is(e).W(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Gr(r.parent))}return n})}addFieldIndex(e,t){const n=os(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=as(e);return i.next(e=>{n.put(Ai(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=os(e),r=as(e),i=ss(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const n=ss(e);let r=!0;const i=new Map;return re.forEach(this.Ze(t),t=>this.tn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=Jn();const r=[];return re.forEach(i,(i,s)=>{var o;p("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${Rt(t)}`);const a=function(e,t){const n=$(t);if(void 0===n)return null;for(const t of Mt(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of H(t))for(const t of Mt(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of H(t)){const t=0===i.kind?Ft(e,i.fieldPath,e.startAt):Vt(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Je(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of H(t)){const t=0===i.kind?Vt(e,i.fieldPath,e.endAt):Ft(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Je(n,r)}(s,i),h=this.en(i,s,u),d=this.en(i,s,l),f=this.nn(i,s,c),m=this.sn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return re.forEach(m,i=>n.J(i,t.limit).next(t=>{t.forEach(t=>{const n=K.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return re.resolve(null)})}Ze(e){let t=this.Xe.get(e);return t||(t=0===e.filters.length?[e]:Hi(rt.create(e.filters,"and")).map(t=>Ot(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,t),t)}sn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.rn(t[l/c]):ns,h=this.on(e,a,n[l%c],r),d=this.un(e,a,i[l%c],s),f=o.map(t=>this.on(e,a,t,!0));u.push(...this.createRange(h,d,f))}return u}on(e,t,n,r){const i=new Gi(e,K.empty(),t,n);return r?i:i.Ue()}un(e,t,n,r){const i=new Gi(e,K.empty(),t,n);return r?i.Ue():i}tn(e,t){const n=new $i(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.je(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.Ze(t);return re.forEach(r,t=>this.tn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new Et(G.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n)}cn(e,t){const n=new qi;for(const r of H(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.qe(r.kind);Mi.Ie.ue(e,i)}return n.Fe()}rn(e){const t=new qi;return Mi.Ie.ue(e,t.qe(0)),t.Fe()}an(e,t){const n=new qi;return Mi.Ie.ue(Be(this.databaseId,t),n.qe(function(e){const t=H(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Fe()}nn(e,t,n){if(null===n)return[];let r=[];r.push(new qi);let i=0;for(const s of H(e)){const e=n[i++];for(const n of r)if(this.hn(t,s.fieldPath)&&qe(e))r=this.ln(r,s,e);else{const t=n.qe(s.kind);Mi.Ie.ue(e,t)}}return this.fn(r)}en(e,t,n){return this.nn(e,t,n.position)}fn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Fe();return t}ln(e,t,n){const r=[...e],i=[];for(const e of n.arrayValue.values||[])for(const n of r){const r=new qi;r.seed(n.Fe()),Mi.Ie.ue(e,r.qe(t.kind)),i.push(r)}return i}hn(e,t){return!!e.filters.find(e=>e instanceof nt&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=os(e),r=as(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next(e=>{const t=[];return re.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new W(t.sequenceNumber,new J(Ii(t.readTime),new K(Gr(t.documentKey)),t.largestBatchId)):W.empty(),r=e.fields.map(([e,t])=>new Q(G.fromServerFormat(e),t));return new z(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:L(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=os(e),i=as(e);return this.dn(e).next(e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>re.forEach(t,t=>i.put(Ai(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return re.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?re.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),re.forEach(i,n=>this._n(e,t,n).next(t=>{const i=this.wn(r,n);return t.isEqual(i)?re.resolve():this.mn(e,r,n,t,i)}))))})}gn(e,t,n,r){return ss(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.an(n,t.key),documentKey:t.key.path.toArray()})}yn(e,t,n,r){return ss(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.an(n,t.key),t.key.path.toArray()])}_n(e,t,n){const r=ss(e);let i=new Et(Ki);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.an(n,t)])},(e,r)=>{i=i.add(new Gi(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}wn(e,t){let n=new Et(Ki);const r=this.cn(t,e);if(null==r)return n;const i=$(t);if(null!=i){const s=e.data.field(i.fieldPath);if(qe(s))for(const i of s.arrayValue.values||[])n=n.add(new Gi(t.indexId,e.key,this.rn(i),r))}else n=n.add(new Gi(t.indexId,e.key,ns,r));return n}mn(e,t,n,r,i){p("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=xt(s),c=xt(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=xt(o)):t?(i(a),a=xt(s)):(a=xt(s),c=xt(o))}}(r,i,Ki,r=>{s.push(this.gn(e,t,n,r))},r=>{s.push(this.yn(e,t,n,r))}),re.waitFor(s)}dn(e){let t=1;return as(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>Ki(e,t)).filter((e,t,n)=>!t||0!==Ki(e,n[t-1]));const r=[];r.push(e);for(const i of n){const n=Ki(i,e),s=Ki(i,t);if(0===n)r[0]=e.Ue();else if(n>0&&s<0)r.push(i),r.push(i.Ue());else if(s>0)break}r.push(t);const i=[];for(let e=0;e<r.length;e+=2){if(this.pn(r[e],r[e+1]))return[];const t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,ns,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,ns,[]];i.push(IDBKeyRange.bound(t,n))}return i}pn(e,t){return Ki(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(cs)}getMinOffset(e,t){return re.mapArray(this.Ze(t),t=>this.tn(e,t).next(e=>e||v())).next(cs)}}function is(e){return pi(e,"collectionParents")}function ss(e){return pi(e,"indexEntries")}function os(e){return pi(e,"indexConfiguration")}function as(e){return pi(e,"indexState")}function cs(e){w(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Z(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new J(t.readTime,t.documentKey,n)}
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
 */const us={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ls{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ls(e,ls.DEFAULT_COLLECTION_PERCENTILE,ls.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */function hs(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{w(1===a)}));const u=[];for(const e of n.mutations){const r=$r(t,e.key.path,n.batchId);s.push(i.delete(r)),u.push(e.key)}return re.waitFor(s).next(()=>u)}function ds(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw v();t=e.noDocument}return JSON.stringify(t).length}
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
 */ls.DEFAULT_COLLECTION_PERCENTILE=10,ls.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ls.DEFAULT=new ls(41943040,ls.DEFAULT_COLLECTION_PERCENTILE,ls.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ls.DISABLED=new ls(-1,0,0);class fs{constructor(e,t,n,r){this.userId=e,this.yt=t,this.indexManager=n,this.referenceDelegate=r,this.In={}}static re(e,t,n,r){w(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new fs(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ms(e).Z({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=gs(e),s=ms(e);return s.add({}).next(o=>{w("number"==typeof o);const a=new mi(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>Cr(e.ie,t)),i=n.mutations.map(t=>Cr(e.ie,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.yt,this.userId,a),u=[];let l=new Et((e,t)=>L(e.canonicalString(),t.canonicalString()));for(const e of r){const t=$r(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Hr))}return l.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.In[o]=a.keys()}),re.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return ms(e).get(t).next(e=>e?(w(e.userId===this.userId),Ei(this.yt,e)):null)}Tn(e,t){return this.In[t]?re.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.In[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ms(e).Z({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(w(t.batchId>=n),i=Ei(this.yt,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ms(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ms(e).W("userMutationsIndex",t).next(e=>e.map(e=>Ei(this.yt,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=zr(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return gs(e).Z({range:r},(n,r,s)=>{const[o,a,c]=n,u=Gr(a);if(o===this.userId&&t.path.isEqual(u))return ms(e).get(c).next(e=>{if(!e)throw v();w(e.userId===this.userId),i.push(Ei(this.yt,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Et(L);const r=[];return t.forEach(t=>{const i=zr(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=gs(e).Z({range:s},(e,r,i)=>{const[s,o,a]=e,c=Gr(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),re.waitFor(r).next(()=>this.En(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=zr(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Et(L);return gs(e).Z({range:s},(e,t,i)=>{const[s,a,c]=e,u=Gr(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.En(e,o))}En(e,t){const n=[],r=[];return t.forEach(t=>{r.push(ms(e).get(t).next(e=>{if(null===e)throw v();w(e.userId===this.userId),n.push(Ei(this.yt,e))}))}),re.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return hs(e.se,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),re.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return re.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return gs(e).Z({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=Gr(e[1]);r.push(t)}else n.done()}).next(()=>{w(0===r.length)})})}containsKey(e,t){return ps(e,this.userId,t)}Rn(e){return ys(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ps(e,t,n){const r=zr(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return gs(e).Z({range:s,X:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function ms(e){return pi(e,"mutations")}function gs(e){return pi(e,"documentMutations")}function ys(e){return pi(e,"mutationQueues")}
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
 */class vs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new vs(0)}static vn(){return new vs(-1)}}
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
 */class ws{constructor(e,t){this.referenceDelegate=e,this.yt=t}allocateTargetId(e){return this.Vn(e).next(t=>{const n=new vs(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(e=>U.fromTimestamp(new V(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Vn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>bs(e).delete(t.targetId)).next(()=>this.Vn(e)).next(t=>(w(t.targetCount>0),t.targetCount-=1,this.Sn(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return bs(e).Z((s,o)=>{const a=Si(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>re.waitFor(i)).next(()=>r)}forEachTarget(e,t){return bs(e).Z((e,n)=>{const r=Si(n);t(r)})}Vn(e){return _s(e).get("targetGlobalKey").next(e=>(w(null!==e),e))}Sn(e,t){return _s(e).put("targetGlobalKey",t)}Dn(e,t){return bs(e).put(xi(this.yt,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Rt(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return bs(e).Z({range:r,index:"queryTargetsIndex"},(e,n,r)=>{const s=Si(n);Pt(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=Ts(e);return t.forEach(t=>{const s=Br(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),re.waitFor(r)}removeMatchingKeys(e,t,n){const r=Ts(e);return re.forEach(t,t=>{const i=Br(t.path);return re.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=Ts(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Ts(e);let i=Jn();return r.Z({range:n,X:!0},(e,t,n)=>{const r=Gr(e[1]),s=new K(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=Br(t.path),r=IDBKeyRange.bound([n],[F(n)],!1,!0);let i=0;return Ts(e).Z({index:"documentTargetsIndex",X:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}ne(e,t){return bs(e).get(t).next(e=>e?Si(e):null)}}function bs(e){return pi(e,"targets")}function _s(e){return pi(e,"targetGlobal")}function Ts(e){return pi(e,"targetDocuments")}
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
 */function Is([e,t],[n,r]){const i=L(e,n);return 0===i?L(t,r):i}class Es{constructor(e){this.xn=e,this.buffer=new Et(Is),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Is(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ss{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(e){p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ce(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ne(e)}await this.Fn(3e5)})}}class xs{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return re.resolve(me.at);const n=new Es(t);return this.$n.forEachTarget(e,e=>n.On(e.sequenceNumber)).next(()=>this.$n.Ln(e,e=>n.On(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),re.resolve(us)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),us):this.qn(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,t){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),d()<=s.a.DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),re.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
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
 */class ks{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new xs(e,t)}(this,t)}Bn(e){const t=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Un(e){let t=0;return this.Ln(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(e,n)=>t(n))}addReference(e,t,n){return Cs(e,n)}removeReference(e,t,n){return Cs(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Cs(e,t)}Gn(e,t){return function(e,t){let n=!1;return ys(e).tt(r=>ps(e,r,t).next(e=>(e&&(n=!0),re.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,(s,o)=>{if(o<=t){const t=this.Gn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,U.min()),Ts(e).delete([0,Br(s.path)])))});r.push(t)}}).next(()=>re.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Cs(e,t)}Kn(e,t){const n=Ts(e);let r,i=me.at;return n.Z({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==me.at&&t(new K(Gr(r)),i),i=o,r=s):i=me.at}).next(()=>{i!==me.at&&t(new K(Gr(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Cs(e,t){return Ts(e).put(function(e,t){return{targetId:0,path:Br(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
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
 */class Ds{constructor(){this.changes=new jn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?re.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class As{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Ps(e).put(n)}removeEntry(e,t,n){return Ps(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],_i(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Qn(e,n)))}getEntry(e,t){let n=At.newInvalidDocument(t);return Ps(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ls(t))},(e,r)=>{n=this.jn(t,r)}).next(()=>n)}Wn(e,t){let n={size:0,document:At.newInvalidDocument(t)};return Ps(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ls(t))},(e,r)=>{n={document:this.jn(t,r),size:ds(r)}}).next(()=>n)}getEntries(e,t){let n=Gn();return this.zn(e,t,(e,t)=>{const r=this.jn(e,t);n=n.insert(e,r)}).next(()=>n)}Hn(e,t){let n=Gn(),r=new _t(K.comparator);return this.zn(e,t,(e,t)=>{const i=this.jn(e,t);n=n.insert(e,i),r=r.insert(e,ds(t))}).next(()=>({documents:n,Jn:r}))}zn(e,t,n){if(t.isEmpty())return re.resolve();let r=new Et(Fs);t.forEach(e=>r=r.add(e));const i=IDBKeyRange.bound(Ls(r.first()),Ls(r.last())),s=r.getIterator();let o=s.getNext();return Ps(e).Z({index:"documentKeyIndex",range:i},(e,t,r)=>{const i=K.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Fs(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.j(Ls(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),_i(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ps(e).W(IDBKeyRange.bound(r,i,!0)).next(e=>{let t=Gn();for(const n of e){const e=this.jn(K.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t})}getAllFromCollectionGroup(e,t,n,r){let i=Gn();const s=Ms(t,n),o=Ms(t,J.max());return Ps(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},(e,t,n)=>{const s=this.jn(K.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new Os(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Rs(e).get("remoteDocumentGlobalKey").next(e=>(w(!!e),e))}Qn(e,t){return Rs(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const e=function(e,t){let n;if(t.document)n=kr(e.ie,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=K.fromSegments(t.noDocument.path),r=Ii(t.noDocument.readTime);n=At.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return v();{const e=K.fromSegments(t.unknownDocument.path),r=Ii(t.unknownDocument.version);n=At.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new V(e[0],e[1]);return U.fromTimestamp(t)}(t.readTime)),n}(this.yt,t);if(!e.isNoDocument()||!e.version.isEqual(U.min()))return e}return At.newInvalidDocument(e)}}function Ns(e){return new As(e)}class Os extends Ds{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new jn(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new Et((e,t)=>L(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=bi(this.Yn.yt,s);r=r.add(i.path.popLast());const c=ds(a);n+=c-o.size,t.push(this.Yn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=bi(this.Yn.yt,s.convertToNoDocument(U.min()));t.push(this.Yn.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Yn.updateMetadata(e,n)),re.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:e,Jn:t})=>(t.forEach((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function Rs(e){return pi(e,"remoteDocumentGlobal")}function Ps(e){return pi(e,"remoteDocumentsV14")}function Ls(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Ms(e,t){const n=t.documentKey.path.toArray();return[e,_i(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Fs(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=L(n[e],r[e]),i)return i;return i=L(n.length,r.length),i||(i=L(n[n.length-2],r[r.length-2]),i||L(n[n.length-1],r[r.length-1]))
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
 */}class Vs{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class Us{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&xn(n.mutation,e,kt.empty(),V.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Jn()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Jn()){const r=Hn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=zn();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Hn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Jn()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=Gn();const s=Wn(),o=Wn();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof An)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),xn(o.mutation,t,o.mutation.getFieldMask(),V.now()))}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new Vs(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=Wn();let r=new _t((e,t)=>e-t),i=Jn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||kt.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Jn()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Qn();c.forEach(e=>{if(!i.has(e)){const r=En(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return re.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return function(e){return K.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):re.resolve(Hn());let o=-1,a=i;return s.next(t=>re.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?re.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,Jn())).next(e=>({batchId:o,changes:$n(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(e=>{let t=zn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=zn();return this.indexManager.getCollectionParents(e,r).next(s=>re.forEach(s,s=>{const o=function(e,t){return new Ut(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId))).next(e=>{e.forEach((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,At.newInvalidDocument(n)))});let n=zn();return r.forEach((r,i)=>{const s=e.get(r);void 0!==s&&xn(s.mutation,i,kt.empty(),V.now()),Zt(t,i)&&(n=n.insert(r,i))}),n})}}
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
 */class Bs{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return re.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:yr(n.createTime)}),re.resolve()}getNamedQuery(e,t){return re.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:ki(e.bundledQuery),readTime:yr(e.readTime)}}(t)),re.resolve()}}
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
 */class js{constructor(){this.overlays=new _t(K.comparator),this.es=new Map}getOverlay(e,t){return re.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Hn();return re.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.oe(e,t,r)}),re.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),re.resolve()}getOverlaysForCollection(e,t,n){const r=Hn(),i=t.length+1,s=new K(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return re.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _t((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Hn(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Hn(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return re.resolve(o)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new yi(t,n));let i=this.es.get(t);void 0===i&&(i=Jn(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
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
 */class qs{constructor(){this.ns=new Et(Gs.ss),this.rs=new Et(Gs.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Gs(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new Gs(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){const t=new K(new j([])),n=new Gs(t,e),r=new Gs(t,e+1),i=[];return this.rs.forEachInRange([n,r],e=>{this.cs(e),i.push(e.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new K(new j([])),n=new Gs(t,e),r=new Gs(t,e+1);let i=Jn();return this.rs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Gs(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Gs{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return K.comparator(e.key,t.key)||L(e._s,t._s)}static os(e,t){return L(e._s,t._s)||K.comparator(e.key,t.key)}}
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
 */class Ks{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Et(Gs.ss)}checkEmpty(e){return re.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new mi(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.gs=this.gs.add(new Gs(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return re.resolve(s)}lookupMutationBatch(e,t){return re.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return re.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Gs(t,0),r=new Gs(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],e=>{const t=this.ys(e._s);i.push(t)}),re.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Et(L);return t.forEach(e=>{const t=new Gs(e,0),r=new Gs(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],e=>{n=n.add(e._s)})}),re.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;K.isDocumentKey(i)||(i=i.child(""));const s=new Gs(new K(i),0);let o=new Et(L);return this.gs.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)},s),re.resolve(this.Is(o))}Is(e){const t=[];return e.forEach(e=>{const n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){w(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return re.forEach(t.mutations,r=>{const i=new Gs(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){const n=new Gs(t,0),r=this.gs.firstAfterOrEqual(n);return re.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class zs{constructor(e){this.Es=e,this.docs=new _t(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return re.resolve(n?n.document.mutableCopy():At.newInvalidDocument(t))}getEntries(e,t){let n=Gn();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():At.newInvalidDocument(e))}),re.resolve(n)}getAllFromCollection(e,t,n){let r=Gn();const i=new K(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Z(X(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return re.resolve(r)}getAllFromCollectionGroup(e,t,n,r){v()}As(e,t){return re.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new $s(this)}getSize(e){return re.resolve(this.size)}}class $s extends Ds{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)}),re.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
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
 */class Hs{constructor(e){this.persistence=e,this.Rs=new jn(e=>Rt(e),Pt),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.bs=0,this.Ps=new qs,this.targetCount=0,this.vs=vs.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),re.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new vs(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,re.resolve()}updateTargetData(e,t){return this.Dn(t),re.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),re.waitFor(i).next(()=>r)}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return re.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),re.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),re.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),re.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return re.resolve(n)}containsKey(e,t){return re.resolve(this.Ps.containsKey(t))}}
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
 */class Qs{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new me(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Hs(this),this.indexManager=new es,this.remoteDocumentCache=function(e){return new zs(e)}(e=>this.referenceDelegate.xs(e)),this.yt=new wi(t),this.Ns=new Bs(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new js,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Ks(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new Ws(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(e=>this.referenceDelegate.Os(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ms(e,t){return re.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class Ws extends te{constructor(e){super(),this.currentSequenceNumber=e}}class Ys{constructor(e){this.persistence=e,this.Fs=new qs,this.$s=null}static Bs(e){return new Ys(e)}get Ls(){if(this.$s)return this.$s;throw v()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),re.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),re.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),re.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.Ls,n=>{const r=K.fromPath(n);return this.qs(e,r).next(e=>{e||t.removeEntry(r,U.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return re.or([()=>re.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
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
 */class Xs{constructor(e){this.yt=e}$(e,t,n,r){const i=new ie("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Kr,{unique:!0}),e.createObjectStore("documentMutations")}(e),Js(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=re.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Js(e)),s=s.next(()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store("mutations").W().next(n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Kr,{unique:!0});const r=t.store("mutations"),i=n.map(e=>r.put(e));return re.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Us(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i)))),n<7&&r>=7&&(s=s.next(()=>this.Gs(i))),n<8&&r>=8&&(s=s.next(()=>this.Qs(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(s=s.next(()=>this.js(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:si});t.createIndex("collectionPathOverlayIndex",oi,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",ai,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Qr});t.createIndex("documentKeyIndex",Wr),t.createIndex("collectionGroupIndex",Yr)}(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.zs(e,i))),n<15&&r>=15&&(s=s.next(()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:ti}).createIndex("sequenceNumberIndex",ni,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:ri}).createIndex("documentKeyIndex",ii,{unique:!1})}(e))),s}Ks(e){let t=0;return e.store("remoteDocuments").Z((e,n)=>{t+=ds(n)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Us(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next(t=>re.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next(n=>re.forEach(n,n=>{w(n.userId===t.userId);const r=Ei(this.yt,n);return hs(e,t.userId,r).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const r=[];return n.Z((n,i)=>{const s=new j(n),o=function(e){return[0,Br(e)]}(s);r.push(t.get(o).next(n=>n?re.resolve():(n=>t.put({targetId:0,path:Br(n),sequenceNumber:e.highestListenSequenceNumber}))(s)))}).next(()=>re.waitFor(r))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:ei});const n=t.store("collectionParents"),r=new ts,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Br(r)})}};return t.store("remoteDocuments").Z({X:!0},(e,t)=>{const n=new j(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([e,t,n],r)=>{const s=Gr(t);return i(s.popLast())}))}js(e){const t=e.store("targets");return t.Z((e,n)=>{const r=Si(n),i=xi(this.yt,r);return t.put(i)})}Ws(e,t){const n=t.store("remoteDocuments"),r=[];return n.Z((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new K(j.fromString(o.document.name).popFirst(5)):o.noDocument?K.fromSegments(o.noDocument.path):o.unknownDocument?K.fromSegments(o.unknownDocument.path):v()).path.toArray();var o;
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
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>re.waitFor(r))}zs(e,t){const n=t.store("mutations"),r=Ns(this.yt),i=new Qs(Ys.Bs,this.yt.ie);return n.W().next(e=>{const n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Jn();Ei(this.yt,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),re.forEach(n,(e,n)=>{const s=new u(n),o=Pi.re(this.yt,s),a=i.getIndexManager(s),c=fs.re(s,this.yt,a,i.referenceDelegate);return new Us(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new fi(t,me.at),e).next()})})}}function Js(e){e.createObjectStore("targetDocuments",{keyPath:Jr}).createIndex("documentTargetsIndex",Zr,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Xr,{unique:!0}),e.createObjectStore("targetGlobal")}const Zs="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class eo{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=i,this.window=s,this.document=o,this.Js=c,this.Ys=u,this.Xs=l,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!eo.C())throw new I(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ks(this,r),this.ii=t+"main",this.yt=new wi(a),this.ri=new se(this.ii,this.Xs,new Xs(this.yt)),this.Cs=new ws(this.referenceDelegate,this.yt),this.remoteDocumentCache=Ns(this.yt),this.Ns=new Ni,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new I(T.FAILED_PRECONDITION,Zs);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new me(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>no(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(ce(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return to(e).get("owner").next(e=>re.resolve(this.mi(e)))}gi(e){return no(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=pi(e,"clientMetadata");return t.W().next(e=>{const n=this.Ii(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return re.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?re.resolve(!0):to(e).get("owner").next(t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new I(T.FAILED_PRECONDITION,Zs);return!1}}return!(!this.networkEnabled||!this.inForeground)||no(e).W().next(e=>void 0===this.Ii(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new fi(e,me.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>no(e).W().next(e=>this.Ii(e,18e5).map(e=>e.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return fs.re(e,this.yt,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new rs(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return Pi.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.Xs)?di:14===s?hi:13===s?li:12===s?ui:11===s?ci:void v();var s;let o;return this.ri.runTransaction(e,r,i,r=>(o=new fi(r,this.Ss?this.Ss.next():me.at),"readwrite-primary"===t?this.fi(o).next(e=>!!e||this.di(o)).next(t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new I(T.FAILED_PRECONDITION,ee);return n(o)}).next(e=>this.wi(o).next(()=>e)):this.Vi(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}Vi(e){return to(e).get("owner").next(e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new I(T.FAILED_PRECONDITION,Zs)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return to(e).put("owner",t)}static C(){return se.C()}_i(e){const t=to(e);return t.get("owner").next(e=>this.mi(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):re.resolve())}pi(e,t){const n=Date.now();return!(e<n-t||e>n&&(m(`Detected an update time that is in the future: ${e} > ${n}`),1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),Object(o.q)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(e){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function to(e){return pi(e,"owner")}function no(e){return pi(e,"clientMetadata")}function ro(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
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
 */}class io{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=Jn(),r=Jn();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new io(e,t.fromCache,n,r)}}
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
 */class so{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(qt(t))return re.resolve(null);let n=Ht(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Wt(t,null,"F"),n=Ht(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=Jn(...r);return this.Ni.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,Wt(t,null,"F")):this.Bi(e,s,t,n)}))})))}Oi(e,t,n,r){return qt(t)||r.isEqual(U.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(i=>{const o=this.Fi(t,i);return this.$i(t,o,n,r)?this.Mi(e,t):(d()<=s.a.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Jt(t)),this.Bi(e,o,t,Y(r,-1)))})}Fi(e,t){let n=new Et(tn(e));return t.forEach((t,r)=>{Zt(e,r)&&(n=n.add(r))}),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return d()<=s.a.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Jt(t)),this.Ni.getDocumentsMatchingQuery(e,t,J.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
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
 */class oo{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new _t(L),this.Ui=new jn(e=>Rt(e),Pt),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Us(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function ao(e,t,n,r){return new oo(e,t,n,r)}async function co(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=Jn();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({ji:e,removedBatchIds:i,addedBatchIds:s}))})})}function uo(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Cs.getLastRemoteSnapshotVersion(e))}function lo(e,t,n){let r=Jn(),i=Jn();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Gn();return n.forEach((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(U.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Wi:r,zi:i}})}function ho(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function fo(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Cs.getTargetData(e,t).next(i=>i?(r=i,re.resolve(r)):n.Cs.allocateTargetId(e).next(i=>(r=new vi(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e})}async function po(e,t,n){const r=_(e),i=r.qi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!ce(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function mo(e,t,n){const r=_(e);let i=U.min(),s=Jn();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=_(e),i=r.Ui.get(n);return void 0!==i?re.resolve(r.qi.get(i)):r.Cs.getTargetData(t,n)}(r,e,Ht(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:U.min(),n?s:Jn())).next(e=>(vo(r,en(t),e),{documents:e,Hi:s})))}function go(e,t){const n=_(e),r=_(n.Cs),i=n.qi.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.ne(e,t).next(e=>e?e.target:null))}function yo(e,t){const n=_(e),r=n.Ki.get(t)||U.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.Gi.getAllFromCollectionGroup(e,t,Y(r,-1),Number.MAX_SAFE_INTEGER)).then(e=>(vo(n,t,e),e))}function vo(e,t,n){let r=e.Ki.get(t)||U.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ki.set(t,r)}async function wo(e,t,n=Jn()){const r=await fo(e,Ht(ki(t.bundledQuery))),i=_(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=yr(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ns.saveNamedQuery(e,t);const o=r.withResumeToken(Se.EMPTY_BYTE_STRING,s);return i.qi=i.qi.insert(o.targetId,o),i.Cs.updateTargetData(e,o).next(()=>i.Cs.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Cs.addMatchingKeys(e,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(e,t))})}function bo(e,t){return`firestore_clients_${e}_${t}`}function _o(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}function To(e,t){return`firestore_targets_${e}_${t}`}class Io{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Zi(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new I(r.error.code,r.error.message))),s?new Io(e,t,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Eo{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new I(n.error.code,n.error.message))),i?new Eo(e,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class So{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=er();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=Ie(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new So(e,i):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class xo{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new xo(t.clientId,t.onlineState):(m("SharedClientState","Failed to parse online state: "+e),null)}}class ko{constructor(){this.activeTargetIds=er()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Co{constructor(e,t,n,r,i){this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new _t(L),this.started=!1,this.cr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=bo(this.persistenceKey,this.sr),this.hr=function(e){return"firestore_sequence_number_"+e}
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
 */(this.persistenceKey),this.ur=this.ur.insert(this.sr,new ko),this.lr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.mr=function(e){return"firestore_bundle_loaded_v2_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const t of e){if(t===this.sr)continue;const e=this.getItem(bo(this.persistenceKey,t));if(e){const n=So.Zi(t,e);n&&(this.ur=this.ur.insert(n.clientId,n))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const e=this.yr(t);e&&this.pr(e)}for(const e of this.cr)this.rr(e);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(To(this.persistenceKey,e));if(n){const r=Eo.Zi(e,n);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(To(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Er(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.lr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Vr(e,null)}{const e=this.Sr(t.key,t.newValue);if(e)return this.Vr(e.clientId,e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Nr(t.key,t.newValue);if(e)return this.kr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.yr(t.newValue);if(e)return this.pr(e)}}else if(t.key===this.hr){const e=function(e){let t=me.at;if(null!=e)try{const n=JSON.parse(e);w("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==me.at&&this.sequenceNumberHandler(e)}else if(t.key===this.mr){const e=this.Or(t.newValue);await Promise.all(e.map(e=>this.syncEngine.Mr(e)))}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){const r=new Io(this.currentUser,e,t,n),i=_o(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){const t=_o(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){const r=To(this.persistenceKey,e),i=new Eo(e,t,n);this.setItem(r,i.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const n=this.vr(e);return So.Zi(n,t)}Dr(e,t){const n=this.dr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Io.Zi(new u(i),r,t)}Nr(e,t){const n=this._r.exec(e),r=Number(n[1]);return Eo.Zi(r,t)}yr(e){return xo.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const n=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.Br(s,o).then(()=>{this.ur=n})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=er();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Do{constructor(){this.Lr=new ko,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ko,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class Ao{Ur(e){}shutdown(){}}
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
 */class No{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Oo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Ro{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
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
 */class Po extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const s=this.ho(e,t);p("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",e+" failed with error: ",t,"url: ",s,"request:",n),t})}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){const n=Oo[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise((i,s)=>{const o=new a.g;o.setWithCredentials(!0),o.listenOnce(a.c.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a.a.NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a.a.TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),s(new I(T.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(t)>=0?t:T.UNKNOWN}(t.status);s(new I(e,t.message))}else s(new I(T.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new I(T.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);o.send(t,"POST",c,n,15)})}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a.h)(),s=Object(a.i)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a.d({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const c=r.join("");p("Connection","Creating WebChannel: "+c,o);const u=i.createWebChannel(c,o);let l=!1,h=!1;const d=new Ro({Hr:e=>{h?p("Connection","Not sending because WebChannel is closed:",e):(l||(p("Connection","Opening WebChannel transport."),u.open(),l=!0),p("Connection","WebChannel sending:",e),u.send(e))},Jr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return f(u,a.f.EventType.OPEN,()=>{h||p("Connection","WebChannel transport opened.")}),f(u,a.f.EventType.CLOSE,()=>{h||(h=!0,p("Connection","WebChannel transport closed"),d.io())}),f(u,a.f.EventType.ERROR,e=>{h||(h=!0,g("Connection","WebChannel transport errored:",e),d.io(new I(T.UNAVAILABLE,"The operation could not be completed")))}),f(u,a.f.EventType.MESSAGE,e=>{var t;if(!h){const n=e.data[0];w(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){p("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Fn[e];if(void 0!==t)return Bn(t)}(e),n=i.message;void 0===t&&(t=T.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.io(new I(t,n)),u.close()}else p("Connection","WebChannel received:",n),d.ro(n)}}),f(s,a.b.STAT_EVENT,e=>{e.stat===a.e.PROXY?p("Connection","Detected buffering proxy"):e.stat===a.e.NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}
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
 */function Lo(){return"undefined"!=typeof window?window:null}function Mo(){return"undefined"!=typeof document?document:null}
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
 */function Fo(e){return new fr(e,!0)}class Vo{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
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
 */class Uo{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Vo(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===T.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===T.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{const e=new I(T.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bo extends Uo{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.wt?(w(void 0===t||"string"==typeof t),Se.fromBase64String(t||"")):(w(void 0===t||t instanceof Uint8Array),Se.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?T.UNKNOWN:Bn(e.code);return new I(t,e.message||"")}(o);n=new sr(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=_r(e,r.document.name),s=yr(r.document.updateTime),o=r.document.createTime?yr(r.document.createTime):U.min(),a=new Ct({mapValue:{fields:r.document.fields}}),c=At.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new rr(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=_r(e,r.document),s=r.readTime?yr(r.readTime):U.min(),o=At.newNoDocument(i,s),a=r.removedTargetIds||[];n=new rr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=_r(e,r.document),s=r.removedTargetIds||[];n=new rr([],s,i,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Mn(r),s=e.targetId;n=new ir(s,i)}}return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return U.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?yr(t.readTime):U.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=Er(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=Lt(r)?{documents:Ar(e,r)}:{query:Nr(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=mr(e,t.resumeToken):t.snapshotVersion.compareTo(U.min())>0&&(n.readTime=pr(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=Er(this.yt),t.removeTarget=e,this.Bo(t)}}class jo extends Uo{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(w(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=function(e,t){return e&&e.length>0?(w(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?yr(e.updateTime):yr(t);return n.isEqual(U.min())&&(n=yr(t)),new bn(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=yr(e.commitTime);return this.listener.Zo(n,t)}return w(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Er(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Cr(this.yt,e))};this.Bo(t)}}
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
 */class qo extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new I(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new I(T.UNKNOWN,e.toString())})}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection._o(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new I(T.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class Go{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: "+e.toString()),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(m(t),this.ou=!1):p("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
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
 */class Ko{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(e=>{n.enqueueAndForget(async()=>{Zo(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=_(e);t._u.add(4),await $o(t),t.gu.set("Unknown"),t._u.delete(4),await zo(t)}(this))})}),this.gu=new Go(n,r)}}async function zo(e){if(Zo(e))for(const t of e.wu)await t(!0)}async function $o(e){for(const t of e.wu)await t(!1)}function Ho(e,t){const n=_(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Jo(n)?Xo(n):ya(n).ko()&&Wo(n,t))}function Qo(e,t){const n=_(e),r=ya(n);n.du.delete(t),r.ko()&&Yo(n,t),0===n.du.size&&(r.ko()?r.Fo():Zo(n)&&n.gu.set("Unknown"))}function Wo(e,t){e.yu.Ot(t.targetId),ya(e).zo(t)}function Yo(e,t){e.yu.Ot(t),ya(e).Ho(t)}function Xo(e){e.yu=new ar({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),ya(e).start(),e.gu.uu()}function Jo(e){return Zo(e)&&!ya(e).No()&&e.du.size>0}function Zo(e){return 0===_(e)._u.size}function ea(e){e.yu=void 0}async function ta(e){e.du.forEach((t,n)=>{Wo(e,t)})}async function na(e,t){ea(e),Jo(e)?(e.gu.hu(t),Xo(e)):e.gu.set("Unknown")}async function ra(e,t,n){if(e.gu.set("Online"),t instanceof sr&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ia(e,n)}else if(t instanceof rr?e.yu.Kt(t):t instanceof ir?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(U.min()))try{const t=await uo(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Se.EMPTY_BYTE_STRING,n.snapshotVersion)),Yo(e,t);const r=new vi(n.target,t,1,n.sequenceNumber);Wo(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await ia(e,t)}}async function ia(e,t,n){if(!ce(t))throw t;e._u.add(1),await $o(e),e.gu.set("Offline"),n||(n=()=>uo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await zo(e)})}function sa(e,t){return t().catch(n=>ia(e,n,t))}async function oa(e){const t=_(e),n=va(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;aa(t);)try{const e=await ho(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,ca(t,e)}catch(e){await ia(t,e)}ua(t)&&la(t)}function aa(e){return Zo(e)&&e.fu.length<10}function ca(e,t){e.fu.push(t);const n=va(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function ua(e){return Zo(e)&&!va(e).No()&&e.fu.length>0}function la(e){va(e).start()}async function ha(e){va(e).eu()}async function da(e){const t=va(e);for(const n of e.fu)t.Xo(n.mutations)}async function fa(e,t,n){const r=e.fu.shift(),i=gi.from(r,t,n);await sa(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await oa(e)}async function pa(e,t){t&&va(e).Yo&&await async function(e,t){if(Un(n=t.code)&&n!==T.ABORTED){const n=e.fu.shift();va(e).Mo(),await sa(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await oa(e)}var n}(e,t),ua(e)&&la(e)}async function ma(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Zo(n);n._u.add(3),await $o(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await zo(n)}async function ga(e,t){const n=_(e);t?(n._u.delete(2),await zo(n)):t||(n._u.add(2),await $o(n),n.gu.set("Unknown"))}function ya(e){return e.pu||(e.pu=function(e,t,n){const r=_(e);return r.su(),new Bo(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
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
 */}(e.datastore,e.asyncQueue,{Yr:ta.bind(null,e),Zr:na.bind(null,e),Wo:ra.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Jo(e)?Xo(e):e.gu.set("Unknown")):(await e.pu.stop(),ea(e))})),e.pu}function va(e){return e.Iu||(e.Iu=function(e,t,n){const r=_(e);return r.su(),new jo(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:ha.bind(null,e),Zr:pa.bind(null,e),tu:da.bind(null,e),Zo:fa.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await oa(e)):(await e.Iu.stop(),e.fu.length>0&&(p("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu
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
 */}class wa{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new wa(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ba(e,t){if(m("AsyncQueue",`${t}: ${e}`),ce(e))return new I(T.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class _a{constructor(e){this.comparator=e?(t,n)=>e(t,n)||K.comparator(t.key,n.key):(e,t)=>K.comparator(e.key,t.key),this.keyedMap=zn(),this.sortedSet=new _t(this.comparator)}static emptySet(e){return new _a(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _a))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new _a;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class Ta{constructor(){this.Tu=new _t(K.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):v():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class Ia{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new Ia(e,t,_a.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
 */class Ea{constructor(){this.Au=void 0,this.listeners=[]}}class Sa{constructor(){this.queries=new jn(e=>Xt(e),Yt),this.onlineState="Unknown",this.Ru=new Set}}async function xa(e,t){const n=_(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ea),i)try{s.Au=await n.onListen(r)}catch(e){const n=ba(e,`Initialization of query '${Jt(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&Aa(n)}async function ka(e,t){const n=_(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Ca(e,t){const n=_(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.Pu(e)&&(r=!0);i.Au=e}}r&&Aa(n)}function Da(e,t,n){const r=_(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Aa(e){e.Ru.forEach(e=>{e.next()})}class Na{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ia(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=Ia.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
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
 */class Oa{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}
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
 */class Ra{constructor(e){this.yt=e}Ji(e){return _r(this.yt,e)}Yi(e){return e.metadata.exists?kr(this.yt,e.document,!1):At.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return yr(e)}}class Pa{constructor(e,t,n){this.Mu=e,this.localStore=t,this.yt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=La(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const n=j.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,n=new Ra(this.yt);for(const r of e)if(r.metadata.queries){const e=n.Ji(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Jn()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=_(e);let s=Jn(),o=Gn();for(const e of n){const n=t.Ji(e.metadata.name);e.document&&(s=s.add(n));const r=t.Yi(e);r.setReadTime(t.Xi(e.metadata.readTime)),o=o.insert(n,r)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await fo(i,function(e){return Ht(jt(j.fromString("__bundle__/docs/"+e)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>lo(e,a,o).next(t=>(a.apply(e),t)).next(t=>i.Cs.removeMatchingKeysForTargetId(e,c.targetId).next(()=>i.Cs.addMatchingKeys(e,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(e,t.Wi,t.zi)).next(()=>t.Wi)))}(this.localStore,new Ra(this.yt),this.documents,this.Mu.id),t=this.$u(this.documents);for(const e of this.queries)await wo(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function La(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
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
 */class Ma{constructor(e){this.key=e}}class Fa{constructor(e){this.key=e}}class Va{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Jn(),this.mutatedKeys=Jn(),this.Gu=tn(e),this.Qu=new _a(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new Ta,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=Zt(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new Ia(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ta,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.qu=this.qu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.qu=this.qu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Jn(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});const t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new Fa(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new Ma(n))}),t}tc(e){this.qu=e.Hi,this.Ku=Jn();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return Ia.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Ua{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ba{constructor(e){this.key=e,this.nc=!1}}class ja{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new jn(e=>Xt(e),Yt),this.rc=new Map,this.oc=new Set,this.uc=new _t(K.comparator),this.cc=new Map,this.ac=new qs,this.hc={},this.lc=new Map,this.fc=vs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function qa(e,t){const n=pc(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const e=await fo(n.localStore,Ht(t));n.isPrimaryClient&&Ho(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Ga(n,t,r,"current"===s,e.resumeToken)}return i}async function Ga(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await mo(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return ec(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await mo(e.localStore,t,!0),o=new Va(t,s.Hi),a=o.Wu(s.documents),c=nr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);ec(e,n,u.Xu);const l=new Ua(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function Ka(e,t){const n=_(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(e=>!Yt(e,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await po(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Qo(n.remoteStore,r.targetId),Ja(n,r.targetId)}).catch(ne)):(Ja(n,r.targetId),await po(n.localStore,r.targetId,!0))}async function za(e,t){const n=_(e);try{const e=await function(e,t){const n=_(e),r=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Se.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Cs.updateTargetData(e,u))});let a=Gn(),c=Jn();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(lo(e,s,t.documentUpdates).next(e=>{a=e.Wi,c=e.zi})),!r.isEqual(U.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next(t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return re.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,c)).next(()=>a)}).then(e=>(n.qi=i,e))}(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.cc.get(t);r&&(w(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?w(r.nc):e.removedDocuments.size>0&&(w(r.nc),r.nc=!1))}),await rc(n,e,t)}catch(e){await ne(e)}}function $a(e,t,n){const r=_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=_(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const e of n.listeners)e.bu(t)&&(r=!0)}),r&&Aa(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ha(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let e=new _t(K.comparator);e=e.insert(s,At.newNoDocument(s,U.min()));const n=Jn().add(s),i=new tr(U.min(),new Map,new Et(L),e,n);await za(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),nc(r)}else await po(r.localStore,t,!1).then(()=>Ja(r,t,n)).catch(ne)}async function Qa(e,t){const n=_(e),r=t.batch.batchId;try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=re.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);w(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Jn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);Xa(n,r,null),Ya(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await rc(n,e)}catch(e){await ne(e)}}async function Wa(e,t,n){const r=_(e);try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(w(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);Xa(r,t,n),Ya(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await rc(r,e)}catch(n){await ne(n)}}function Ya(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function Xa(e,t,n){const r=_(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function Ja(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||Za(e,t)})}function Za(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(Qo(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),nc(e))}function ec(e,t,n){for(const r of n)r instanceof Ma?(e.ac.addReference(r.key,t),tc(e,r)):r instanceof Fa?(p("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||Za(e,r.key)):v()}function tc(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(p("SyncEngine","New document in limbo: "+n),e.oc.add(r),nc(e))}function nc(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new K(j.fromString(t)),r=e.fc.next();e.cc.set(r,new Ba(n)),e.uc=e.uc.insert(n,r),Ho(e.remoteStore,new vi(Ht(jt(n.path)),r,2,me.at))}}async function rc(e,t,n){const r=_(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((e,a)=>{o.push(r._c(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=io.Ci(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(e,t){const n=_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>re.forEach(t,t=>re.forEach(t.Si,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>re.forEach(t.Di,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!ce(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qi.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(t,i)}}}(r.localStore,s))}async function ic(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await co(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach(e=>{e.forEach(e=>{e.reject(new I(T.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.lc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await rc(n,e.ji)}}function sc(e,t){const n=_(e),r=n.cc.get(t);if(r&&r.nc)return Jn().add(r.key);{let e=Jn();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}async function oc(e,t){const n=_(e),r=await mo(n.localStore,t.query,!0),i=t.view.tc(r);return n.isPrimaryClient&&ec(n,t.targetId,i.Xu),i}async function ac(e,t){const n=_(e);return yo(n.localStore,t).then(e=>rc(n,e))}async function cc(e,t,n,r){const i=_(e),s=await function(e,t){const n=_(e),r=_(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Tn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):re.resolve(null)))}(i.localStore,t);null!==s?("pending"===n?await oa(i.remoteStore):"acknowledged"===n||"rejected"===n?(Xa(i,t,r||null),Ya(i,t),function(e,t){_(_(e).mutationQueue).An(t)}(i.localStore,t)):v(),await rc(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function uc(e,t,n){const r=_(e),i=[],s=[];for(const e of t){let t;const n=r.rc.get(e);if(n&&0!==n.length){t=await fo(r.localStore,Ht(n[0]));for(const e of n){const t=r.ic.get(e),n=await oc(r,t);n.snapshot&&s.push(n.snapshot)}}else{const n=await go(r.localStore,e);t=await fo(r.localStore,n),await Ga(r,lc(n),e,!1,t.resumeToken)}i.push(t)}return r.sc.Wo(s),i}function lc(e){return Bt(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function hc(e){const t=_(e);return _(_(t.localStore).persistence).vi()}async function dc(e,t,n,r){const i=_(e);if(i.dc)return void p("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await yo(i.localStore,en(s[0])),r=tr.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Se.EMPTY_BYTE_STRING);await rc(i,e,r);break}case"rejected":await po(i.localStore,t,!0),Ja(i,t,r);break;default:v()}}async function fc(e,t,n){const r=pc(e);if(r.dc){for(const e of t){if(r.rc.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await go(r.localStore,e),n=await fo(r.localStore,t);await Ga(r,lc(t),n.targetId,!1,n.resumeToken),Ho(r.remoteStore,n)}for(const e of n)r.rc.has(e)&&await po(r.localStore,e,!1).then(()=>{Qo(r.remoteStore,e),Ja(r,e)}).catch(ne)}}function pc(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=za.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ha.bind(null,t),t.sc.Wo=Ca.bind(null,t.eventManager),t.sc.wc=Da.bind(null,t.eventManager),t}function mc(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Qa.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wa.bind(null,t),t}class gc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Fo(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return ao(this.persistence,new so,e.initialUser,this.yt)}yc(e){return new Qs(Ys.Bs,this.yt)}gc(e){return new Do}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yc extends gc{constructor(e,t,n){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await mc(this.Ac.syncEngine),await oa(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return ao(this.persistence,new so,e.initialUser,this.yt)}Tc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ss(n,e.asyncQueue,t)}Ec(e,t){const n=new pe(t,this.persistence);return new fe(e.asyncQueue,n)}yc(e){const t=ro(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ls.withCacheSize(this.cacheSizeBytes):ls.DEFAULT;return new eo(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Lo(),Mo(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Do}}class vc extends yc{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof Co&&(this.sharedClientState.syncEngine={Fr:cc.bind(null,t),$r:dc.bind(null,t),Br:fc.bind(null,t),vi:hc.bind(null,t),Mr:ac.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async e=>{await async function(e,t){const n=_(e);if(pc(n),mc(n),!0===t&&!0!==n.dc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await uc(n,e.toArray());n.dc=!0,await ga(n.remoteStore,!0);for(const e of t)Ho(n.remoteStore,e)}else if(!1===t&&!1!==n.dc){const e=[];let t=Promise.resolve();n.rc.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(Ja(n,i),po(n.localStore,i,!0))),Qo(n.remoteStore,i)}),await t,await uc(n,e),function(e){const t=_(e);t.cc.forEach((e,n)=>{Qo(t.remoteStore,n)}),t.ac.fs(),t.cc=new Map,t.uc=new _t(K.comparator)}(n),n.dc=!1,await ga(n.remoteStore,!1)}}(this.Ac.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}gc(e){const t=Lo();if(!Co.C(t))throw new I(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ro(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Co(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class wc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>$a(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ic.bind(null,this.syncEngine),await ga(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Sa}createDatastore(e){const t=Fo(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Po(r));var r;return function(e,t,n,r){return new qo(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>$a(this.syncEngine,e,0),s=No.C()?new No:new Ao,new Ko(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new ja(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);p("RemoteStore","RemoteStore shutting down."),t._u.add(5),await $o(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
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
 */function bc(e,t,n){if(!n)throw new I(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function _c(e,t,n,r){if(!0===t&&!0===r)throw new I(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Tc(e){if(!K.isDocumentKey(e))throw new I(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ic(e){if(K.isDocumentKey(e))throw new I(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ec(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":v()}function Sc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ec(e);throw new I(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function xc(e,t){if(t<=0)throw new I(T.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
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
 */const kc=new Map;class Cc{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new I(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new I(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,_c("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class Dc{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new I(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new x;switch(e.type){case"gapi":const t=e.client;return new A(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new I(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=kc.get(e);t&&(p("ComponentProvider","Removing Datastore"),kc.delete(e),t.terminate())}(this),Promise.resolve()}}function Ac(e,t,n,r={}){var i;const s=(e=Sc(e,Dc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=u.MOCK_USER;else{t=Object(o.f)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new I(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new k(new S(t,n))}}
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
 */class Nc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nc(this.firestore,e,this._key)}}class Oc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Oc(this.firestore,e,this._query)}}class Rc extends Oc{constructor(e,t,n){super(e,t,jt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nc(this.firestore,null,new K(e))}withConverter(e){return new Rc(this.firestore,e,this._path)}}function Pc(e,t,...n){if(e=Object(o.l)(e),bc("collection","path",t),e instanceof Dc){const r=j.fromString(t,...n);return Ic(r),new Rc(e,null,r)}{if(!(e instanceof Nc||e instanceof Rc))throw new I(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return Ic(r),new Rc(e.firestore,null,r)}}function Lc(e,t){if(e=Sc(e,Dc),bc("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new I(T.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Oc(e,null,function(e){return new Ut(j.emptyPath(),e)}(t))}function Mc(e,t,...n){if(e=Object(o.l)(e),1===arguments.length&&(t=P.R()),bc("doc","path",t),e instanceof Dc){const r=j.fromString(t,...n);return Tc(r),new Nc(e,null,new K(r))}{if(!(e instanceof Nc||e instanceof Rc))throw new I(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return Tc(r),new Nc(e.firestore,e instanceof Rc?e.converter:null,new K(r))}}function Fc(e,t){return e=Object(o.l)(e),t=Object(o.l)(t),(e instanceof Nc||e instanceof Rc)&&(t instanceof Nc||t instanceof Rc)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Vc(e,t){return e=Object(o.l)(e),t=Object(o.l)(t),e instanceof Oc&&t instanceof Oc&&e.firestore===t.firestore&&Yt(e._query,t._query)&&e.converter===t.converter
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
 */}function Uc(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
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
 */class Bc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):m("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
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
 */class jc{constructor(e,t){this.Pc=e,this.yt=t,this.metadata=new E,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(e=>{e&&e.Ou()?this.metadata.resolve(e.ku.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.ku)))},e=>this.metadata.reject(e))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(null===e)return null;const t=this.vc.decode(e),n=Number(t);isNaN(n)&&this.Dc(`length string (${t}) is not valid number`);const r=await this.Cc(n);return new Oa(JSON.parse(r),e.length+n)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(0===this.buffer.length)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error("Invalid bundle format: "+e)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
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
class qc{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new I(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=_(e),r=Er(n.yt)+"/documents",i={documents:t.map(e=>br(n.yt,e))},s=await n._o("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach(e=>{const t=function(e,t){return"found"in t?function(e,t){w(!!t.found),t.found.name,t.found.updateTime;const n=_r(e,t.found.name),r=yr(t.found.updateTime),i=t.found.createTime?yr(t.found.createTime):U.min(),s=new Ct({mapValue:{fields:t.found.fields}});return At.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){w(!!t.missing),w(!!t.readTime);const n=_r(e,t.missing),r=yr(t.readTime);return At.newNoDocument(n,r)}(e,t):v()}(n.yt,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());w(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Pn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=K.fromPath(t);this.mutations.push(new Ln(n,this.precondition(n)))}),await async function(e,t){const n=_(e),r=Er(n.yt)+"/documents",i={writes:t.map(e=>Cr(n.yt,e))};await n.ao("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw v();t=U.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new I(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(U.min())?_n.exists(!1):_n.updateTime(t):_n.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(U.min()))throw new I(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _n.updateTime(t)}return _n.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
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
 */class Gc{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.kc=n.maxAttempts,this.xo=new Vo(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new qc(this.datastore),t=this.Mc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Fc(e)}))}).catch(e=>{this.Fc(e)})})}Mc(e){try{const t=this.updateFunction(e);return!_e(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Un(t)}return!1}}
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
 */class Kc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=P.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ba(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function zc(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await co(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function $c(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Hc(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>ma(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ma(t.remoteStore,n)),e.onlineComponents=t}async function Hc(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await zc(e,new gc)),e.offlineComponents}async function Qc(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await $c(e,new wc)),e.onlineComponents}function Wc(e){return Hc(e).then(e=>e.persistence)}function Yc(e){return Hc(e).then(e=>e.localStore)}function Xc(e){return Qc(e).then(e=>e.remoteStore)}function Jc(e){return Qc(e).then(e=>e.syncEngine)}function Zc(e){return Qc(e).then(e=>e.datastore)}async function eu(e){const t=await Qc(e),n=t.eventManager;return n.onListen=qa.bind(null,t.syncEngine),n.onUnlisten=Ka.bind(null,t.syncEngine),n}function tu(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Bc({next:s=>{t.enqueueAndForget(()=>ka(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new I(T.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new I(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Na(jt(n.path),s,{includeMetadataChanges:!0,Nu:!0});return xa(e,o)}(await eu(e),e.asyncQueue,t,n,r)),r.promise}function nu(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Bc({next:n=>{t.enqueueAndForget(()=>ka(e,o)),n.fromCache&&"server"===r.source?i.reject(new I(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Na(n,s,{includeMetadataChanges:!0,Nu:!0});return xa(e,o)}(await eu(e),e.asyncQueue,t,n,r)),r.promise}function ru(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new jc(e,t)}(function(e,t){if(e instanceof Uint8Array)return Uc(e,t);if(e instanceof ArrayBuffer)return Uc(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
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
 */(n,Fo(t));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){const r=_(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=_(e),r=yr(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Ns.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(La(r));const i=new Pa(r,e.localStore,t.yt);let s=await t.mc();for(;s;){const e=await i.Fu(s);e&&n._updateProgress(e),s=await t.mc()}const o=await i.complete();return await rc(e,o.Lu,void 0),await function(e,t){const n=_(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Ns.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(e){return g("SyncEngine","Loading bundle failed with "+e),n._failWith(e),Promise.resolve(new Set)}}
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
 */)(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}(await Jc(e),i,r)})}class iu{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Vo(this,"async_queue_retry"),this.Wc=()=>{const e=Mo();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=Mo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Mo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new E;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ce(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{this.Kc=e,this.Gc=!1;throw m("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e)),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=wa.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.Uc.push(r),r}zc(){this.Kc&&v()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function su(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}
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
 */(e)}class ou{constructor(){this._progressObserver={},this._taskCompletionResolver=new E,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
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
 */const au=-1;class cu extends Dc{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new iu,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lu(this),this._firestoreClient.terminate()}}function uu(e){return e._firestoreClient||lu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function lu(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new ge(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
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
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Kc(e._authCredentials,e._appCheckCredentials,e._queue,r)}function hu(e,t){bu(e=Sc(e,cu));const n=uu(e),r=e._freezeSettings(),i=new wc;return fu(n,i,new yc(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function du(e){bu(e=Sc(e,cu));const t=uu(e),n=e._freezeSettings(),r=new wc;return fu(t,r,new vc(r,n.cacheSizeBytes))}function fu(e,t,n){const r=new E;return e.asyncQueue.enqueue(async()=>{try{await zc(e,n),await $c(e,t),r.resolve()}catch(e){const t=e;if(!function(e){return"FirebaseError"===e.name?e.code===T.FAILED_PRECONDITION||e.code===T.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(t))throw t;g("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}}).then(()=>r.promise)}function pu(e){if(e._initialized&&!e._terminated)throw new I(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new E;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!se.C())return Promise.resolve();const t=e+"main";await se.delete(t)}
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
 */(ro(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function mu(e){return function(e){const t=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t){const n=_(e);Zo(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=_(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.lc.get(e)||[];r.push(t),n.lc.set(e,r)}catch(e){const n=ba(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}(await Jc(e),t)),t.promise}(uu(e=Sc(e,cu)))}function gu(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Wc(e),n=await Xc(e);return t.setNetworkEnabled(!0),function(e){const t=_(e);return t._u.delete(0),zo(t)}(n)})}(uu(e=Sc(e,cu)))}function yu(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Wc(e),n=await Xc(e);return t.setNetworkEnabled(!1),async function(e){const t=_(e);t._u.add(0),await $o(t),t.gu.set("Offline")}(n)})}(uu(e=Sc(e,cu)))}function vu(e,t){const n=uu(e=Sc(e,cu)),r=new ou;return ru(n,e._databaseId,t,r),r}function wu(e,t){return function(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=_(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Ns.getNamedQuery(e,t))}(await Yc(e),t))}(uu(e=Sc(e,cu)),t).then(t=>t?new Oc(e,null,t.query):null)}function bu(e){if(e._initialized||e._terminated)throw new I(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
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
 */class _u{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _u(Se.fromBase64String(e))}catch(e){throw new I(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new _u(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Tu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new I(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class Iu{constructor(e){this._methodName=e}}
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
 */class Eu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}
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
 */const Su=/^__.*__$/;class xu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new An(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dn(e,this.data,t,this.fieldTransforms)}}class ku{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new An(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Cu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Du{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Du(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Wu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Cu(this.sa)&&Su.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Au{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||Fo(e)}da(e,t,n,r=!1){return new Du({sa:e,methodName:t,fa:n,path:G.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Nu(e){const t=e._freezeSettings(),n=Fo(e._databaseId);return new Au(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ou(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);zu("Data must be an object, but it was:",o,r);const a=Gu(r,o);let c,u;if(s.merge)c=new kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=$u(t,r,n);if(!o.contains(i))throw new I(T.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Yu(e,i)||e.push(i)}c=new kt(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new xu(new Ct(a),c,u)}class Ru extends Iu{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(this._methodName+"() can only appear at the top level of your update data"):e.ha(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ru}}function Pu(e,t,n){return new Du({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.yt,t.ignoreUndefinedProperties)}class Lu extends Iu{_toFieldTransform(e){return new wn(e.path,new hn)}isEqual(e){return e instanceof Lu}}class Mu extends Iu{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Pu(this,e,!0),n=this._a.map(e=>qu(e,t)),r=new dn(n);return new wn(e.path,r)}isEqual(e){return this===e}}class Fu extends Iu{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Pu(this,e,!0),n=this._a.map(e=>qu(e,t)),r=new pn(n);return new wn(e.path,r)}isEqual(e){return this===e}}class Vu extends Iu{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new gn(e.yt,on(e.yt,this.wa));return new wn(e.path,t)}isEqual(e){return this===e}}function Uu(e,t,n,r){const i=e.da(1,t,n);zu("Data must be an object, but it was:",i,r);const s=[],a=Ct.empty();we(r,(e,r)=>{const c=Qu(t,e,n);r=Object(o.l)(r);const u=i.ca(c);if(r instanceof Ru)s.push(c);else{const e=qu(r,u);null!=e&&(s.push(c),a.set(c,e))}});const c=new kt(s);return new ku(a,c,i.fieldTransforms)}function Bu(e,t,n,r,i,s){const a=e.da(1,t,n),c=[$u(t,r,n)],u=[i];if(s.length%2!=0)throw new I(T.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)c.push($u(t,s[e])),u.push(s[e+1]);const l=[],h=Ct.empty();for(let e=c.length-1;e>=0;--e)if(!Yu(l,c[e])){const t=c[e];let n=u[e];n=Object(o.l)(n);const r=a.ca(t);if(n instanceof Ru)l.push(t);else{const e=qu(n,r);null!=e&&(l.push(t),h.set(t,e))}}const d=new kt(l);return new ku(h,d,a.fieldTransforms)}function ju(e,t,n,r=!1){return qu(n,e.da(r?4:3,t))}function qu(e,t){if(Ku(e=Object(o.l)(e)))return zu("Unsupported field value:",t,e),Gu(e,t);if(e instanceof Iu)return function(e,t){if(!Cu(t.sa))throw t.ha(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.ha(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=qu(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o.l)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return on(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=V.fromDate(e);return{timestampValue:pr(t.yt,n)}}if(e instanceof V){const n=new V(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:pr(t.yt,n)}}if(e instanceof Eu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof _u)return{bytesValue:mr(t.yt,e._byteString)};if(e instanceof Nc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:vr(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha("Unsupported field value: "+Ec(e))}(e,t)}function Gu(e,t){const n={};return be(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):we(e,(e,r)=>{const i=qu(r,t.ra(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Ku(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof V||e instanceof Eu||e instanceof _u||e instanceof Nc||e instanceof Iu)}function zu(e,t,n){if(!Ku(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Ec(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function $u(e,t,n){if((t=Object(o.l)(t))instanceof Tu)return t._internalPath;if("string"==typeof t)return Qu(e,t);throw Wu("Field path arguments must be of type string or ",e,!1,void 0,n)}const Hu=new RegExp("[~\\*/\\[\\]]");function Qu(e,t,n){if(t.search(Hu)>=0)throw Wu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Tu(...t.split("."))._internalPath}catch(r){throw Wu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Wu(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new I(T.INVALID_ARGUMENT,a+e+c)}function Yu(e,t){return e.some(e=>e.isEqual(t))}
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
 */class Xu{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ju(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zu("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ju extends Xu{data(){return super.data()}}function Zu(e,t){return"string"==typeof t?Qu(e,t):t instanceof Tu?t._internalPath:t._delegate._internalPath}
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
 */function el(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new I(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tl{}class nl extends tl{}function rl(e,t,...n){let r=[];t instanceof tl&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof ol).length,n=e.filter(e=>e instanceof il).length;if(t>1||t>0&&n>0)throw new I(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
 */(r);for(const t of r)e=t._apply(e);return e}class il extends nl{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new il(e,t,n)}_apply(e){const t=this._parse(e);return _l(e._query,t),new Oc(e.firestore,e.converter,Qt(e._query,t))}_parse(e){const t=Nu(e.firestore);return function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new I(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){bl(o,s);const t=[];for(const n of o)t.push(wl(r,e,n));a={arrayValue:{values:t}}}else a=wl(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||bl(o,s),a=ju(n,"where",o,"in"===s||"not-in"===s);return nt.create(i,s,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}}function sl(e,t,n){const r=t,i=Zu("where",e);return il._create(i,r,n)}class ol extends tl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ol(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:rt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)_l(n,e),n=Qt(n,e)}(e._query,t),new Oc(e.firestore,e.converter,Qt(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class al extends nl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new al(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new I(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new I(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new wt(t,n);return function(e,t){if(null===Gt(e)){const n=Kt(e);null!==n&&Tl(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Oc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ut(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function cl(e,t="asc"){const n=t,r=Zu("orderBy",e);return al._create(r,n)}class ul extends nl{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new ul(e,t,n)}_apply(e){return new Oc(e.firestore,e.converter,Wt(e._query,this._limit,this._limitType))}}function ll(e){return xc("limit",e),ul._create("limit",e,"F")}function hl(e){return xc("limitToLast",e),ul._create("limitToLast",e,"L")}class dl extends nl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new dl(e,t,n)}_apply(e){const t=vl(e,this.type,this._docOrFields,this._inclusive);return new Oc(e.firestore,e.converter,function(e,t){return new Ut(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function fl(...e){return dl._create("startAt",e,!0)}function pl(...e){return dl._create("startAfter",e,!1)}class ml extends nl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new ml(e,t,n)}_apply(e){const t=vl(e,this.type,this._docOrFields,this._inclusive);return new Oc(e.firestore,e.converter,function(e,t){return new Ut(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function gl(...e){return ml._create("endBefore",e,!1)}function yl(...e){return ml._create("endAt",e,!0)}function vl(e,t,n,r){if(n[0]=Object(o.l)(n[0]),n[0]instanceof Xu)return function(e,t,n,r,i){if(!r)throw new I(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const n of $t(e))if(n.field.isKeyField())s.push(Be(t,r.key));else{const e=r.data.field(n.field);if(Ae(e))throw new I(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new I(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Je(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Nu(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new I(T.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let s=0;s<i.length;s++){const c=i[s];if(o[s].field.isKeyField()){if("string"!=typeof c)throw new I(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!zt(e)&&-1!==c.indexOf("/"))throw new I(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=e.path.child(j.fromString(c));if(!K.isDocumentKey(n))throw new I(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new K(n);a.push(Be(t,i))}else{const e=ju(n,r,c);a.push(e)}}return new Je(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function wl(e,t,n){if("string"==typeof(n=Object(o.l)(n))){if(""===n)throw new I(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zt(t)&&-1!==n.indexOf("/"))throw new I(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(j.fromString(n));if(!K.isDocumentKey(r))throw new I(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Be(e,new K(r))}if(n instanceof Nc)return Be(e,n._key);throw new I(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ec(n)}.`)}function bl(e,t){if(!Array.isArray(e)||0===e.length)throw new I(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new I(T.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function _l(e,t){if(t.isInequality()){const n=Kt(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new I(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Gt(e);null!==i&&Tl(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new I(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new I(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Tl(e,t,n){if(!n.isEqual(t))throw new I(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Il{convertValue(e,t="none"){switch(Pe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(De(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const n={};return we(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new Eu(Ce(e.latitude),Ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=function e(t){const n=t.mapValue.fields.__previous_value__;return Ae(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ne(e));default:return null}}convertTimestamp(e){const t=ke(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=j.fromString(e);w(Ur(n));const r=new ye(n.get(1),n.get(3)),i=new K(n.popFirst(5));return r.isEqual(t)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function El(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Sl extends Il{constructor(e){super(),this.firestore=e}convertBytes(e){return new _u(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Nc(this.firestore,null,t)}}
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
 */class xl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kl extends Xu{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Zu("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Cl extends kl{data(e={}){return super.data(e)}}class Dl{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new xl(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Cl(this._firestore,this._userDataWriter,n.key,n,new xl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new I(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Cl(e._firestore,e._userDataWriter,n.doc.key,n.doc,new xl(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Cl(e._firestore,e._userDataWriter,t.doc.key,t.doc,new xl(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Al(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Al(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}function Nl(e,t){return e instanceof kl&&t instanceof kl?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Dl&&t instanceof Dl&&e._firestore===t._firestore&&Vc(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
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
 */function Ol(e){e=Sc(e,Nc);const t=Sc(e.firestore,cu);return tu(uu(t),e._key).then(n=>$l(t,e,n))}class Rl extends Il{constructor(e){super(),this.firestore=e}convertBytes(e){return new _u(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Nc(this.firestore,null,t)}}function Pl(e){e=Sc(e,Nc);const t=Sc(e.firestore,cu),n=uu(t),r=new Rl(t);return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=_(e);return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new I(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=ba(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Yc(e),t,n)),n.promise}(n,e._key).then(n=>new kl(t,r,e._key,n,new xl(null!==n&&n.hasLocalMutations,!0),e.converter))}function Ll(e){e=Sc(e,Nc);const t=Sc(e.firestore,cu);return tu(uu(t),e._key,{source:"server"}).then(n=>$l(t,e,n))}function Ml(e){e=Sc(e,Oc);const t=Sc(e.firestore,cu),n=uu(t),r=new Rl(t);return el(e._query),nu(n,e._query).then(n=>new Dl(t,r,e,n))}function Fl(e){e=Sc(e,Oc);const t=Sc(e.firestore,cu),n=uu(t),r=new Rl(t);return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await mo(e,t,!0),i=new Va(t,r.Hi),s=i.Wu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=ba(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Yc(e),t,n)),n.promise}(n,e._query).then(n=>new Dl(t,r,e,n))}function Vl(e){e=Sc(e,Oc);const t=Sc(e.firestore,cu),n=uu(t),r=new Rl(t);return nu(n,e._query,{source:"server"}).then(n=>new Dl(t,r,e,n))}function Ul(e,t,n){e=Sc(e,Nc);const r=Sc(e.firestore,cu),i=El(e.converter,t,n);return zl(r,[Ou(Nu(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,_n.none())])}function Bl(e,t,n,...r){e=Sc(e,Nc);const i=Sc(e.firestore,cu),s=Nu(i);let a;return a="string"==typeof(t=Object(o.l)(t))||t instanceof Tu?Bu(s,"updateDoc",e._key,t,n,r):Uu(s,"updateDoc",e._key,t),zl(i,[a.toMutation(e._key,_n.exists(!0))])}function jl(e){return zl(Sc(e.firestore,cu),[new Pn(e._key,_n.none())])}function ql(e,t){const n=Sc(e.firestore,cu),r=Mc(e),i=El(e.converter,t);return zl(n,[Ou(Nu(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,_n.exists(!1))]).then(()=>r)}function Gl(e,...t){var n,r,i;e=Object(o.l)(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||su(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(su(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Nc)l=Sc(e.firestore,cu),h=jt(e._key.path),u={next:n=>{t[a]&&t[a]($l(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Sc(e,Oc);l=Sc(n.firestore,cu),h=n._query;const r=new Rl(l);u={next:e=>{t[a]&&t[a](new Dl(l,r,n,e))},error:t[a+1],complete:t[a+2]},el(e._query)}return function(e,t,n,r){const i=new Bc(r),s=new Na(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>xa(await eu(e),s)),()=>{i.bc(),e.asyncQueue.enqueueAndForget(async()=>ka(await eu(e),s))}}(uu(l),h,c,u)}function Kl(e,t){return function(e,t){const n=new Bc(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).Ru.add(t),t.next()}(await eu(e),n)),()=>{n.bc(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).Ru.delete(t)}(await eu(e),n))}}(uu(e=Sc(e,cu)),su(t)?t:{next:t})}function zl(e,t){return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){const r=mc(e);try{const e=await function(e,t){const n=_(e),r=V.now(),i=t.reduce((e,t)=>e.add(t.key),Jn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=Gn(),c=Jn();return n.Gi.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{s=i;const o=[];for(const e of t){const t=kn(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new An(e.key,t,Dt(t.value.mapValue),_n.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:$n(s)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new _t(L)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await rc(r,e.changes),await oa(r.remoteStore)}catch(e){const t=ba(e,"Failed to persist write");n.reject(t)}}(await Jc(e),t,n)),n.promise}(uu(e),t)}function $l(e,t,n){const r=n.docs.get(t._key),i=new Rl(e);return new kl(e,i,t._key,r,new xl(n.hasPendingWrites,n.fromCache),t.converter)}
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
const Hl={maxAttempts:5};
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
 */class Ql{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Nu(e)}set(e,t,n){this._verifyNotCommitted();const r=Wl(e,this._firestore),i=El(r.converter,t,n),s=Ou(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,_n.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Wl(e,this._firestore);let s;return s="string"==typeof(t=Object(o.l)(t))||t instanceof Tu?Bu(this._dataReader,"WriteBatch.update",i._key,t,n,r):Uu(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,_n.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Wl(e,this._firestore);return this._mutations=this._mutations.concat(new Pn(t._key,_n.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new I(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wl(e,t){if((e=Object(o.l)(e)).firestore!==t)throw new I(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
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
 */class Yl extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Nu(e)}get(e){const t=Wl(e,this._firestore),n=new Sl(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return v();const r=e[0];if(r.isFoundDocument())return new Xu(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Xu(this._firestore,n,t._key,null,t.converter);throw v()})}set(e,t,n){const r=Wl(e,this._firestore),i=El(r.converter,t,n),s=Ou(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Wl(e,this._firestore);let s;return s="string"==typeof(t=Object(o.l)(t))||t instanceof Tu?Bu(this._dataReader,"Transaction.update",i._key,t,n,r):Uu(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Wl(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Wl(e,this._firestore),n=new Rl(this._firestore);return super.get(e).then(e=>new kl(this._firestore,n,t._key,e._document,new xl(!1,!1),t.converter))}}function Xl(e,t,n){e=Sc(e,cu);const r=Object.assign(Object.assign({},Hl),n);return function(e){if(e.maxAttempts<1)throw new I(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>{const i=await Zc(e);new Gc(e.asyncQueue,i,n,t,r).run()}),r.promise}(uu(e),n=>t(new Yl(e,n)),r)}
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
 */function Jl(){return new Ru("deleteField")}function Zl(){return new Lu("serverTimestamp")}function eh(...e){return new Mu("arrayUnion",e)}function th(...e){return new Fu("arrayRemove",e)}function nh(e){return new Vu("increment",e)}
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
 */!function(e,t=!0){!function(e){l=e}(r.SDK_VERSION),Object(r._registerComponent)(new i.a("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new cu(new C(e.getProvider("auth-internal")),new O(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new I(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ye(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Object(r.registerVersion)(c,"3.8.0",e),Object(r.registerVersion)(c,"3.8.0","esm2017")}()}).call(this,n(10))},function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return k})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return A})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return h})),n.d(t,"o",(function(){return f})),n.d(t,"p",(function(){return l})),n.d(t,"q",(function(){return d})),n.d(t,"r",(function(){return p}));
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
const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){return function(e){const t=i(e);return s.encodeByteArray(t,!0)}(e).replace(/\./g,"")},a=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */function c(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=c(e[n],t[n]));return e}
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
function u(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function l(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}function h(){return"object"==typeof self&&self.self===self}function d(){return!l()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function f(){try{return"object"==typeof indexedDB}catch(e){return!1}}function p(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}
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
const m=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,g=()=>{try{return m()||(()=>{if(void 0===r||void 0===r.env)return;const e=r.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&a(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},y=e=>{const t=(e=>{var t,n;return null===(n=null===(t=g())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},v=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config};
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
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(s)),""].join(".")}
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
 */class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(I,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new _(r,o,n)}}const I=/\{\$([^}]+)}/g;
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
function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function S(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(x(n)&&x(s)){if(!S(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function x(e){return null!==e&&"object"==typeof e}
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
 */function k(e,t){const n=new C(e,t);return n.subscribe.bind(n)}class C{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(){}
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
function A(e){return e&&e._delegate?e._delegate:e}}).call(this,n(9),n(10))},function(e,t,n){"use strict";n.r(t),n.d(t,"FirebaseError",(function(){return s.c})),n.d(t,"SDK_VERSION",(function(){return V})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return S})),n.d(t,"_addComponent",(function(){return D})),n.d(t,"_addOrOverwriteComponent",(function(){return A})),n.d(t,"_apps",(function(){return k})),n.d(t,"_clearComponents",(function(){return P})),n.d(t,"_components",(function(){return C})),n.d(t,"_getProvider",(function(){return O})),n.d(t,"_registerComponent",(function(){return N})),n.d(t,"_removeServiceInstance",(function(){return R})),n.d(t,"deleteApp",(function(){return q})),n.d(t,"getApp",(function(){return B})),n.d(t,"getApps",(function(){return j})),n.d(t,"initializeApp",(function(){return U})),n.d(t,"onLog",(function(){return K})),n.d(t,"registerVersion",(function(){return G})),n.d(t,"setLogLevel",(function(){return z}));var r=n(3),i=n(5),s=n(1);let o,a;const c=new WeakMap,u=new WeakMap,l=new WeakMap,h=new WeakMap,d=new WeakMap;let f={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(y(this),t),g(c.get(this))}:function(...t){return g(e.apply(y(this),t))}:function(t,...n){const r=e.call(y(this),t,...n);return l.set(r,t.sort?t.sort():[t]),g(r)}}function m(e){return"function"==typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(u.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});u.set(e,t)}(e),t=e,(o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,f):e);var t}function g(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),d.set(t,e),t}(e);if(h.has(e))return h.get(e);const t=m(e);return t!==e&&(h.set(e,t),d.set(t,e)),t}const y=e=>d.get(e);const v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],b=new Map;function _(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(b.get(t))return b.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!v.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return b.set(t,s),s}f=(e=>({...e,get:(t,n,r)=>_(t,n)||e.get(t,n,r),has:(t,n)=>!!_(t,n)||e.has(t,n)}))(f);
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
class T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const I="@firebase/app",E=new i.b("@firebase/app"),S="[DEFAULT]",x={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},k=new Map,C=new Map;function D(e,t){try{e.container.addComponent(t)}catch(n){E.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function A(e,t){e.container.addOrOverwriteComponent(t)}function N(e){const t=e.name;if(C.has(t))return E.debug(`There were multiple attempts to register component ${t}.`),!1;C.set(t,e);for(const t of k.values())D(t,e);return!0}function O(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function R(e,t,n=S){O(e,t).clearInstance(n)}function P(){C.clear()}
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
 */const L={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},M=new s.b("app","Firebase",L);
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
class F{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw M.create("app-deleted",{appName:this._name})}}
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
 */const V="9.15.0";function U(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:S,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw M.create("bad-app-name",{appName:String(o)});if(n||(n=Object(s.j)()),!n)throw M.create("no-options");const a=k.get(o);if(a){if(Object(s.h)(n,a.options)&&Object(s.h)(i,a.config))return a;throw M.create("duplicate-app",{appName:o})}const c=new r.b(o);for(const e of C.values())c.addComponent(e);const u=new F(n,i,c);return k.set(o,u),u}function B(e=S){const t=k.get(e);if(!t&&e===S)return U();if(!t)throw M.create("no-app",{appName:e});return t}function j(){return Array.from(k.values())}async function q(e){const t=e.name;k.has(t)&&(k.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function G(e,t,n){var i;let s=null!==(i=x[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void E.warn(e.join(" "))}N(new r.a(s+"-version",()=>({library:s,version:t}),"VERSION"))}function K(e,t){if(null!==e&&"function"!=typeof e)throw M.create("invalid-log-argument");Object(i.d)(e,t)}function z(e){Object(i.c)(e)}
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
 */const $="firebase-heartbeat-store";let H=null;function Q(){return H||(H=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=g(o);return r&&o.addEventListener("upgradeneeded",e=>{r(g(o.result),e.oldVersion,e.newVersion,g(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($)}}}).catch(e=>{throw M.create("idb-open",{originalErrorMessage:e.message})})),H}async function W(e,t){try{const n=(await Q()).transaction($,"readwrite"),r=n.objectStore($);return await r.put(t,Y(e)),n.done}catch(e){if(e instanceof s.c)E.warn(e.message);else{const t=M.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});E.warn(t.message)}}}function Y(e){return`${e.name}!${e.options.appId}`}
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
 */class X{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Z(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=J();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=J(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ee(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ee(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(s.d)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function J(){return(new Date).toISOString().substring(0,10)}class Z{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s.o)()&&Object(s.r)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Q()).transaction($).objectStore($).get(Y(e))}catch(e){if(e instanceof s.c)E.warn(e.message);else{const t=M.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});E.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return W(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return W(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ee(e){return Object(s.d)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var te;te="",N(new r.a("platform-logger",e=>new T(e),"PRIVATE")),N(new r.a("heartbeat",e=>new X(e),"PRIVATE")),G(I,"0.9.0",te),G(I,"0.9.0","esm2017"),G("fire-js","")},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(1);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Yn})),n.d(t,"b",(function(){return Jn})),n.d(t,"c",(function(){return Xn})),n.d(t,"d",(function(){return er})),n.d(t,"e",(function(){return Zn})),n.d(t,"f",(function(){return tr})),n.d(t,"g",(function(){return nr})),n.d(t,"h",(function(){return Qn})),n.d(t,"i",(function(){return Wn}));var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var h="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(e,t,n){return e.call.apply(e.bind,arguments)}function p(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p).apply(null,arguments)}function g(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function v(){this.s=this.s,this.o=this.o}v.prototype.s=!1,v.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,h)&&e[h]||(e[h]=++d))},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function b(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function _(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(u(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function T(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(e){}return e}();function E(e){return/^[\s\xa0]*$/.test(e)}var S=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return e<t?-1:e>t?1:0}function k(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function C(e){return-1!=k().indexOf(e)}function D(e){return D[" "](e),e}D[" "]=c;var A,N,O=C("Opera"),R=C("Trident")||C("MSIE"),P=C("Edge"),L=P||R,M=C("Gecko")&&!(-1!=k().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),F=-1!=k().toLowerCase().indexOf("webkit")&&!C("Edge");function V(){var e=a.document;return e?e.documentMode:void 0}e:{var U="",B=(N=k(),M?/rv:([^\);]+)(\)|;)/.exec(N):P?/Edge\/([\d\.]+)/.exec(N):R?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(N):F?/WebKit\/(\S+)/.exec(N):O?/(?:Version)[ \/]?(\S+)/.exec(N):void 0);if(B&&(U=B?B[1]:""),R){var j=V();if(null!=j&&j>parseFloat(U)){A=String(j);break e}}A=U}var q,G={};function K(){return function(e){var t=G;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=S(String(A)).split("."),n=S("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=x(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||x(0==i[2].length,0==s[2].length)||x(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&R){var z=V();q=z||(parseInt(A,10)||void 0)}else q=void 0;var $=q;function H(e,t){if(T.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(M){e:{try{D(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&H.X.h.call(this)}}y(H,T);var Q={2:"touch",3:"pen",4:"mouse"};H.prototype.h=function(){H.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Y,this.ba=this.ea=!1}function J(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Z(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ee(e){const t={};for(const n in e)t[n]=e[n];return t}const te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ne(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<te.length;t++)n=te[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function re(e){this.src=e,this.g={},this.h=0}function ie(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=w(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(J(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function se(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}re.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=se(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new X(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var oe="closure_lm_"+(1e6*Math.random()|0),ae={};function ce(e,t,n,r,i){if(r&&r.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=me(r),t&&t[W]?t.O(n,r,l(i)?!!i.capture:!!i,s):ue(t,n,r,!0,i,s)}(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ce(e,t[s],n,r,i);return null}return n=me(n),e&&e[W]?e.N(t,n,l(r)?!!r.capture:!!r,i):ue(e,t,n,!1,r,i)}function ue(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=fe(e);if(a||(e[oe]=a=new re(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){const e=de;return function t(n){return e.call(t.src,t.listener,n)}}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)I||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(he(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function le(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[W])ie(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(he(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=fe(t))?(ie(n,e),0==n.h&&(n.src=null,t[oe]=null)):J(e)}}}function he(e){return e in ae?ae[e]:ae[e]="on"+e}function de(e,t){if(e.ba)e=!0;else{t=new H(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&le(e),e=n.call(r,t)}return e}function fe(e){return(e=e[oe])instanceof re?e:null}var pe="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(e){return"function"==typeof e?e:(e[pe]||(e[pe]=function(t){return e.handleEvent(t)}),e[pe])}function ge(){v.call(this),this.i=new re(this),this.P=this,this.I=null}function ye(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new T(t,e);else if(t instanceof T)t.target=t.target||e;else{var i=t;ne(t=new T(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ve(o,r,!0,t)&&i}if(i=ve(o=t.g=e,r,!0,t)&&i,i=ve(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ve(o=t.g=n[s],r,!1,t)&&i}function ve(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ie(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(ge,v),ge.prototype[W]=!0,ge.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else i=l(i)?!!i.capture:!!i,r=me(r),t&&t[W]?(t=t.i,(n=String(n).toString())in t.g&&(-1<(r=se(o=t.g[n],r,i,s))&&(J(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--)))):t&&(t=fe(t))&&(n=t.g[n.toString()],t=-1,n&&(t=se(n,r,i,s)),(r=-1<t?n[t]:null)&&le(r))}(this,e,t,n,r)},ge.prototype.M=function(){if(ge.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)J(n[r]);delete t.g[e],t.h--}}this.I=null},ge.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ge.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var we=a.JSON.stringify;function be(){var e=ke;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var _e,Te=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Ie,e=>e.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ee(e){a.setTimeout(()=>{throw e},0)}function Se(e,t){_e||function(){var e=a.Promise.resolve(void 0);_e=function(){e.then(Ce)}}(),xe||(_e(),xe=!0),ke.add(e,t)}var xe=!1,ke=new class{constructor(){this.h=this.g=null}add(e,t){const n=Te.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Ce(){for(var e;e=be();){try{e.h.call(e.g)}catch(e){Ee(e)}var t=Te;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}xe=!1}function De(e,t){ge.call(this),this.h=e||1,this.g=t||a,this.j=m(this.lb,this),this.l=Date.now()}function Ae(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Ne(e,t,n){if("function"==typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}y(De,ge),(r=De.prototype).ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ye(this,"tick"),this.ca&&(Ae(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){De.X.M.call(this),Ae(this),delete this.g};class Oe extends v{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=Ne(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);const n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Re(e){v.call(this),this.h=e,this.g={}}y(Re,v);var Pe=[];function Le(e,t,n,r){Array.isArray(n)||(n&&(Pe[0]=n.toString()),n=Pe);for(var i=0;i<n.length;i++){var s=ce(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Me(e){Z(e.g,(function(e,t){this.g.hasOwnProperty(t)&&le(e)}),e),e.g={}}function Fe(){this.g=!0}function Ve(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return we(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Re.prototype.M=function(){Re.X.M.call(this),Me(this)},Re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Fe.prototype.Aa=function(){this.g=!1},Fe.prototype.info=function(){};var Ue={},Be=null;function je(){return Be=Be||new ge}function qe(e){T.call(this,Ue.Pa,e)}function Ge(e){const t=je();ye(t,new qe(t))}function Ke(e,t){T.call(this,Ue.STAT_EVENT,e),this.stat=t}function ze(e){const t=je();ye(t,new Ke(t,e))}function $e(e,t){T.call(this,Ue.Qa,e),this.size=t}function He(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}Ue.Pa="serverreachability",y(qe,T),Ue.STAT_EVENT="statevent",y(Ke,T),Ue.Qa="timingevent",y($e,T);var Qe={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},We={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ye(){}function Xe(e){return e.h||(e.h=e.i())}function Je(){}Ye.prototype.h=null;var Ze,et={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function tt(){T.call(this,"d")}function nt(){T.call(this,"c")}function rt(){}function it(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Re(this),this.O=ot,e=L?125:void 0,this.T=new De(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new st}function st(){this.i=null,this.g="",this.h=!1}y(tt,T),y(nt,T),y(rt,Ye),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},Ze=new rt;var ot=45e3,at={},ct={};function ut(e,t,n){e.K=1,e.v=Ct(It(t)),e.s=n,e.P=!0,lt(e,null)}function lt(e,t){e.F=Date.now(),pt(e),e.A=It(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),jt(n.i,"t",r),e.C=0,n=e.l.H,e.h=new st,e.g=jn(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Oe(m(e.La,e,e.g),e.N)),Le(e.S,e.g,"readystatechange",e.ib),t=e.H?ee(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ge(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function ht(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function dt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=ft(e,n),r==ct){4==t&&(e.o=4,ze(14),i=!1),Ve(e.j,e.m,null,"[Incomplete Response]");break}if(r==at){e.o=4,ze(15),Ve(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ve(e.j,e.m,r,null),wt(e,r)}ht(e)&&r!=ct&&r!=at&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ze(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rn(t),t.K=!0,ze(11))):(Ve(e.j,e.m,n,"[Invalid Chunked Response]"),vt(e),yt(e))}function ft(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?ct:(n=Number(t.substring(n,r)),isNaN(n)?at:(r+=1)+n>t.length?ct:(t=t.substr(r,n),e.C=r+n,t))}function pt(e){e.V=Date.now()+e.O,mt(e,e.O)}function mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=He(m(e.gb,e),t)}function gt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function yt(e){0==e.l.G||e.I||Mn(e.l,e)}function vt(e){gt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ae(e.T),Me(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function wt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Ht(n.h,e)))if(!e.J&&Ht(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Ln(n),Sn(n)}On(n),ze(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=He(m(n.cb,n),6e3));if(1>=$t(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Vn(n,11)}else if((e.J||n.g==e)&&Ln(n),!E(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Qt(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,kt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((r=n).sa=Bn(r,r.H?r.ka:null,r.V),o.J){Wt(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(gt(a),pt(a)),r.g=o}else Nn(r);0<n.i.length&&kn(n)}else"stop"!=u[0]&&"close"!=u[0]||Vn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Vn(n,7):En(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Ge()}catch(e){}}function bt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(u(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(r=it.prototype).setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==vn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const h=vn(this.g);var t=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||L||this.g&&(this.h.h||this.g.fa()||wn(this.g)))){this.I||4!=h||7==t||Ge(),gt(this);var n=this.g.aa();this.Y=n;t:if(ht(this)){var r=wn(this.g);e="";var i=r.length,s=4==vn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){vt(this),yt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ze(12),vt(this),yt(this);break e}Ve(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wt(this,n)}this.P?(dt(this,h,o),L&&this.i&&3==h&&(Le(this.S,this.T,"tick",this.hb),this.T.start())):(Ve(this.j,this.m,o,null),wt(this,o)),4==h&&vt(this),this.i&&!this.I&&(4==h?Mn(this.l,this):(this.i=!1,pt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),vt(this),yt(this)}}}catch(e){}},r.hb=function(){if(this.g){var e=vn(this.g),t=this.g.fa();this.C<t.length&&(gt(this),dt(this,e,t),this.i&&4!=e&&pt(this))}},r.cancel=function(){this.I=!0,vt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Ge(),ze(17)),vt(this),this.o=2,yt(this)):mt(this,this.V-e)};var _t=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Tt){this.h=void 0!==t?t:e.h,Et(this,e.j),this.s=e.s,this.g=e.g,St(this,e.m),this.l=e.l,t=e.i;var n=new Ft;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),xt(this,n),this.o=e.o}else e&&(n=String(e).match(_t))?(this.h=!!t,Et(this,n[1]||"",!0),this.s=Dt(n[2]||""),this.g=Dt(n[3]||"",!0),St(this,n[4]),this.l=Dt(n[5]||"",!0),xt(this,n[6]||"",!0),this.o=Dt(n[7]||"")):(this.h=!!t,this.i=new Ft(null,this.h))}function It(e){return new Tt(e)}function Et(e,t,n){e.j=n?Dt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function St(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xt(e,t,n){t instanceof Ft?(e.i=t,function(e,t){t&&!e.j&&(Vt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ut(this,t),jt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=At(t,Lt)),e.i=new Ft(t,e.h))}function kt(e,t,n){e.i.set(t,n)}function Ct(e){return kt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Dt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function At(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Nt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Nt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Tt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(At(t,Ot,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(At(t,Ot,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(At(n,"/"==n.charAt(0)?Pt:Rt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",At(n,Mt)),e.join("")};var Ot=/[#\/\?@]/g,Rt=/[#\?:]/g,Pt=/[#\?]/g,Lt=/[#\?@]/g,Mt=/#/g;function Ft(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ut(e,t){Vt(e),t=qt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Bt(e,t){return Vt(e),t=qt(e,t),e.g.has(t)}function jt(e,t,n){Ut(e,t),0<n.length&&(e.i=null,e.g.set(qt(e,t),b(n)),e.h+=n.length)}function qt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(r=Ft.prototype).add=function(e,t){Vt(this),this.i=null,e=qt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){Vt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){Vt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){Vt(this);let t=[];if("string"==typeof e)Bt(this,e)&&(t=t.concat(this.g.get(qt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return Vt(this),this.i=null,Bt(this,e=qt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Gt(e){this.l=e||Kt,a.PerformanceNavigationTiming?e=0<(e=a.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(a.g&&a.g.Ga&&a.g.Ga()&&a.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Kt=10;function zt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function $t(e){return e.h?1:e.g?e.g.size:0}function Ht(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Qt(e,t){e.g?e.g.add(t):e.h=t}function Wt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Yt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return b(e.i)}function Xt(){}function Jt(){this.g=new Xt}function Zt(e,t,n){const r=n||"";try{bt(e,(function(e,n){let i=e;l(e)&&(i=we(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function en(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function tn(e){this.l=e.ac||null,this.j=e.jb||!1}function nn(e,t){ge.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Gt.prototype.cancel=function(){if(this.i=Yt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Xt.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Xt.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(tn,Ye),tn.prototype.g=function(){return new nn(this.l,this.j)},tn.prototype.i=function(e){return function(){return e}}({}),y(nn,ge);var rn=0;function sn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function on(e){e.readyState=4,e.l=null,e.j=null,e.A=null,an(e)}function an(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(r=nn.prototype).open=function(e,t){if(this.readyState!=rn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,an(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,on(this)),this.readyState=rn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?on(this):an(this),3==this.readyState&&sn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,on(this))},r.Ua=function(e){this.g&&(this.response=e,on(this))},r.ga=function(){this.g&&on(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var cn=a.JSON.parse;function un(e){ge.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ln,this.K=this.L=!1}y(un,ge);var ln="",hn=/^https?$/i,dn=["POST","PUT"];function fn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,pn(e),gn(e)}function pn(e){e.D||(e.D=!0,ye(e,"complete"),ye(e,"error"))}function mn(e){if(e.h&&void 0!==o&&(!e.C[1]||4!=vn(e)||2!=e.aa()))if(e.v&&4==vn(e))Ne(e.Ha,0,e);else if(ye(e,"readystatechange"),4==vn(e)){e.h=!1;try{const o=e.aa();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(_t)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!hn.test(i?i.toLowerCase():"")}n=r}if(n)ye(e,"complete"),ye(e,"success");else{e.m=6;try{var c=2<vn(e)?e.g.statusText:""}catch(e){c=""}e.j=c+" ["+e.aa()+"]",pn(e)}}finally{gn(e)}}}function gn(e,t){if(e.g){yn(e);const n=e.g,r=e.C[0]?c:null;e.g=null,e.C=null,t||ye(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function yn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function vn(e){return e.g?e.g.readyState:0}function wn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ln:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function bn(e){let t="";return Z(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function _n(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):kt(e,t,n))}function Tn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function In(e){this.Ca=0,this.i=[],this.j=new Fe,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Tn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Tn("baseRetryDelayMs",5e3,e),this.bb=Tn("retryDelaySeedMs",1e4,e),this.$a=Tn("forwardChannelMaxRetries",2,e),this.ta=Tn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Gt(e&&e.concurrentRequestLimit),this.Fa=new Jt,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function En(e){if(xn(e),3==e.G){var t=e.U++,n=It(e.F);kt(n,"SID",e.I),kt(n,"RID",t),kt(n,"TYPE","terminate"),Dn(e,n),(t=new it(e,e.j,t,void 0)).K=2,t.v=Ct(It(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=jn(t.l,null),t.g.da(t.v)),t.F=Date.now(),pt(t)}Un(e)}function Sn(e){e.g&&(Rn(e),e.g.cancel(),e.g=null)}function xn(e){Sn(e),e.u&&(a.clearTimeout(e.u),e.u=null),Ln(e),e.h.cancel(),e.m&&("number"==typeof e.m&&a.clearTimeout(e.m),e.m=null)}function kn(e){zt(e.h)||e.m||(e.m=!0,Se(e.Ja,e),e.C=0)}function Cn(e,t){var n;n=t?t.m:e.U++;const r=It(e.F);kt(r,"SID",e.I),kt(r,"RID",n),kt(r,"AID",e.T),Dn(e,r),e.o&&e.s&&_n(r,e.o,e.s),n=new it(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=An(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Qt(e.h,n),ut(n,r,t)}function Dn(e,t){e.ia&&Z(e.ia,(function(e,n){kt(t,n,e)})),e.l&&bt({},(function(e,n){kt(t,n,e)}))}function An(e,t,n){n=Math.min(e.i.length,n);var r=e.l?m(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Zt(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Nn(e){e.g||e.u||(e.Z=1,Se(e.Ia,e),e.A=0)}function On(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=He(m(e.Ia,e),Fn(e,e.A)),e.A++,!0)}function Rn(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function Pn(e){e.g=new it(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=It(e.sa);kt(t,"RID","rpc"),kt(t,"SID",e.I),kt(t,"CI",e.L?"0":"1"),kt(t,"AID",e.T),kt(t,"TYPE","xmlhttp"),Dn(e,t),e.o&&e.s&&_n(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Ct(It(t)),n.s=null,n.P=!0,lt(n,e)}function Ln(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function Mn(e,t){var n=null;if(e.g==t){Ln(e),Rn(e),e.g=null;var r=2}else{if(!Ht(e.h,t))return;n=t.D,Wt(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;ye(r=je(),new $e(r,n)),kn(e)}else Nn(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!($t(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=He(m(e.Ja,e,t),Fn(e,e.C)),e.C++,!0))}(e,t)||2==r&&On(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Vn(e,5);break;case 4:Vn(e,10);break;case 3:Vn(e,6);break;default:Vn(e,2)}}function Fn(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Vn(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=m(e.kb,e);n||(n=new Tt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Et(n,"https"),Ct(n)),function(e,t){const n=new Fe;if(a.Image){const r=new Image;r.onload=g(en,n,r,"TestLoadImage: loaded",!0,t),r.onerror=g(en,n,r,"TestLoadImage: error",!1,t),r.onabort=g(en,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=g(en,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else ze(2);e.G=0,e.l&&e.l.va(t),Un(e),xn(e)}function Un(e){if(e.G=0,e.la=[],e.l){const t=Yt(e.h);0==t.length&&0==e.i.length||(_(e.la,t),_(e.la,e.i),e.h.i.length=0,b(e.i),e.i.length=0),e.l.ua()}}function Bn(e,t,n){var r=n instanceof Tt?It(n):new Tt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),St(r,r.m);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Tt(null,void 0);r&&Et(s,r),t&&(s.g=t),i&&St(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&kt(r,n,t),kt(r,"VER",e.ma),Dn(e,r),r}function jn(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new un(new tn({jb:!0})):new un(e.ra)).Ka(e.H),t}function qn(){}function Gn(){if(R&&!(10<=Number($)))throw Error("Environmental error: no available transport.")}function Kn(e,t){ge.call(this),this.g=new In(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!E(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!E(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Hn(this)}function zn(e){tt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function $n(){nt.call(this),this.status=1}function Hn(e){this.g=e}(r=un.prototype).Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ze.g(),this.C=this.u?Xe(this.u):Xe(Ze),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void fn(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=a.FormData&&e instanceof a.FormData,!(0<=w(dn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yn(this),0<this.B&&((this.K=function(e){return R&&K()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Ne(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){fn(this,e)}},r.qa=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ye(this,"complete"),ye(this,"abort"),gn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gn(this,!0)),un.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?mn(this):this.fb())},r.fb=function(){mn(this)},r.aa=function(){try{return 2<vn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),cn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=In.prototype).ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new it(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=ee(s),ne(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=An(this,i,t),kt(n=It(this.F),"RID",e),kt(n,"CVER",22),this.D&&kt(n,"X-HTTP-Session-Id",this.D),Dn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(bn(s)))+"&"+t:this.o&&_n(n,this.o,s)),Qt(this.h,i),this.Ya&&kt(n,"TYPE","init"),this.O?(kt(n,"$req",t),kt(n,"SID","null"),i.Z=!0,ut(i,n,null)):ut(i,n,t),this.G=2}}else 3==this.G&&(e?Cn(this,e):0==this.i.length||zt(this.h)||Cn(this))},r.Ia=function(){if(this.u=null,Pn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=He(m(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ze(10),Sn(this),Pn(this))},r.cb=function(){null!=this.v&&(this.v=null,Sn(this),On(this),ze(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))},(r=qn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},Gn.prototype.g=function(e,t){return new Kn(e,t)},y(Kn,ge),Kn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ze(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Bn(e,null,e.V),kn(e)},Kn.prototype.close=function(){En(this.g)},Kn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=we(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&kn(t)},Kn.prototype.M=function(){this.g.l=null,delete this.j,En(this.g),delete this.g,Kn.X.M.call(this)},y(zn,tt),y($n,nt),y(Hn,qn),Hn.prototype.xa=function(){ye(this.g,"a")},Hn.prototype.wa=function(e){ye(this.g,new zn(e))},Hn.prototype.va=function(e){ye(this.g,new $n)},Hn.prototype.ua=function(){ye(this.g,"b")},Gn.prototype.createWebChannel=Gn.prototype.g,Kn.prototype.send=Kn.prototype.u,Kn.prototype.open=Kn.prototype.m,Kn.prototype.close=Kn.prototype.close,Qe.NO_ERROR=0,Qe.TIMEOUT=8,Qe.HTTP_ERROR=6,We.COMPLETE="complete",Je.EventType=et,et.OPEN="a",et.CLOSE="b",et.ERROR="c",et.MESSAGE="d",ge.prototype.listen=ge.prototype.N,un.prototype.listenOnce=un.prototype.O,un.prototype.getLastError=un.prototype.Oa,un.prototype.getLastErrorCode=un.prototype.Ea,un.prototype.getStatus=un.prototype.aa,un.prototype.getResponseJson=un.prototype.Sa,un.prototype.getResponseText=un.prototype.fa,un.prototype.send=un.prototype.da,un.prototype.setWithCredentials=un.prototype.Ka;var Qn=s.createWebChannelTransport=function(){return new Gn},Wn=s.getStatEventTarget=function(){return je()},Yn=s.ErrorCode=Qe,Xn=s.EventType=We,Jn=s.Event=Ue,Zn=s.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},er=s.FetchXmlHttpFactory=tn,tr=s.WebChannel=Je,nr=s.XhrIo=un}).call(this,n(9))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
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
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},function(e,t,n){"use strict";var r,i,s,o=n(15),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){s=!1}function u(e){if(e){if(e!==r){if(e.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,c()}}else r!==a&&(r=a,c())}function l(){return s||(s=function(){r||u(a);for(var e,t=r.split(""),n=[],i=o.nextValue();t.length>0;)i=o.nextValue(),e=Math.floor(i*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||a},characters:function(e){return u(e),r},seed:function(e){o.seed(e),i!==e&&(c(),i=e)},lookup:function(e){return l()[e]},shuffled:l}},function(e,t){function n(e,t){t=t||2;let n=e.toString(),r=0;return r=t-n.length+1,n=new Array(r).join("0").concat(n),n}e.exports=function(e,t){const r=t&&t.leading,i=t&&t.ms,s=e<0?-e:e,o=function(e,t){return t?e<0?"-":"":e<=-1e3?"-":""}(e,i),a=function(e){if("number"!=typeof e)throw new TypeError("Expected a number");return{days:Math.trunc(e/864e5),hours:Math.trunc(e/36e5)%24,minutes:Math.trunc(e/6e4)%60,seconds:Math.trunc(e/1e3)%60,ms:Math.trunc(e)%1e3}}(s),c=n(a.seconds);let u="";return a.days&&!u&&(u=o+a.days+":"+n(a.hours)+":"+n(a.minutes)+":"+c),a.hours&&!u&&(u=o+(r?n(a.hours):a.hours)+":"+n(a.minutes)+":"+c),u||(u=o+(r?n(a.minutes):a.minutes)+":"+c),i&&(u+="."+n(a.ms,3)),u}},function(e,t){const n={primary:0,secondary:2,auxiliary:1},r={position:{x:0,y:0},pressed:{0:void 0,1:void 0,2:void 0},isPressed:function(e="primary"){const t=this.getPressed(e);return null!=t&&t.state},wasJustPressed:function(e="primary",t=!0,n=1e3/60){const r=this.getPressed(e);return null!=r&&(window.performance.now()-r.time<n&&r.state==t)},getPressed:function(e){return this.pressed[e]||this.pressed[n[e]]},setPressed:function(e,t){this.pressed[e]={time:window.performance.now(),state:t}},setPosition:function(e){this.position.x=e.x,this.position.y=e.y}};document.addEventListener("mousedown",e=>r.setPressed(e.button,!0)),document.addEventListener("mouseup",e=>r.setPressed(e.button,!1)),document.addEventListener("mousemove",e=>r.setPosition({x:e.clientX,y:e.clientY})),document.addEventListener("pointerdown",e=>r.setPressed(e.button||0,!0)),document.addEventListener("pointerup",e=>r.setPressed(e.button||0,!1)),document.addEventListener("pointermove",e=>r.setPosition({x:e.clientX,y:e.clientY})),document.addEventListener("touchstart",e=>r.setPressed(0,!0)),document.addEventListener("touchend",e=>r.setPressed(0,!1)),document.addEventListener("touchstart",e=>r.setPosition({x:e.touches[0].clientX,y:e.touches[0].clientY})),document.addEventListener("touchend",e=>r.setPosition({x:e.touches[0].clientX,y:e.touches[0].clientY})),document.addEventListener("touchmove",e=>r.setPosition({x:e.touches[0].clientX,y:e.touches[0].clientY})),document.addEventListener("contextmenu",e=>{1==r.isIgnoringContextMenu&&e.preventDefault()}),document.addEventListener("touchstart",e=>{r.isIgnoringTouchHover&&e.preventDefault()}),e.exports=r},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){var r=n(13);e.exports=function(e){return this.func=e,this.fps=60,this.cap=1e3,new r(e=>{"number"==typeof this.cap&&(e=Math.min(e,this.cap)),e={ms:e,s:e/1e3,f:e/(1e3/this.fps)},this.func(e)})}},function(e,t,n){"use strict";e.exports=n(14)},function(e,t){e.exports=function(e){!function t(n){e(Math.min(window.performance.now()-n,1e3)),window.requestAnimationFrame(t.bind(this,window.performance.now()))}(window.performance.now())}},function(e,t,n){"use strict";var r=n(6),i=n(16),s=n(20),o=n(21)||0;function a(){return i(o)}e.exports=a,e.exports.generate=a,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return o=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=s},function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},function(e,t,n){"use strict";var r,i,s=n(17);n(6);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===i?r++:(r=0,i=n),t+=s(7),t+=s(e),r>0&&(t+=s(r)),t+=s(n)}},function(e,t,n){"use strict";var r=n(6),i=n(18),s=n(19);e.exports=function(e){for(var t,n=0,o="";!t;)o+=s(i,r.get(),1),t=e<Math.pow(16,n+1),n++;return o}},function(e,t,n){"use strict";var r,i="object"==typeof window&&(window.crypto||window.msCrypto);r=i&&i.getRandomValues?function(e){return i.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},function(e,t){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,i=-~(1.6*r*n/t.length),s="";;)for(var o=e(i),a=i;a--;)if((s+=t[o[a]&r]||"").length===+n)return s}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},function(e,t,n){"use strict";e.exports=0},function(e,t,n){var r=n(23),i=n(24);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var h=a(l),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==h?(o[h].references++,o[h].updater(d)):o.push({identifier:l,updater:g(d,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,h=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function f(e,t,n){var r=n.css,i=n.media,s=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function g(e,t){var n,r,i;if(t.singleton){var s=m++;n=p||(p=u(t)),r=d.bind(null,n,s,!1),i=d.bind(null,n,s,!0)}else n=u(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var s=c(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=s}}}},function(e,t,n){var r=n(25),i=n(26),s=n(27),o=n(28),a=n(29),c=n(30),u=n(31),l=n(32),h=n(33),d=n(34),f=n(35),p=n(36);t=r(!1);var m=i(s),g=i(o),y=i(a),v=i(c),w=i(u),b=i(l),_=i(h),T=i(d),I=i(f),E=i(p);t.push([e.i,'* {\n  margin: 0px;\n  padding: 0px;\n  cursor: default;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nbody {\n  background-color: #111;\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@font-face {\n  font-weight: 400;\n  font-family: "comfortaa";\n  src: url('+m+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+g+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+y+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+v+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+w+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+b+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+_+') format("truetype");\n}\n.Mount {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  position: absolute;\n  font-family: Roboto, Helvetica, sans-serif;\n}\n.Embed {\n  top: 2em;\n  left: 0em;\n  right: 0em;\n  bottom: 4em;\n  overflow: hidden;\n  position: fixed;\n  background-color: orange;\n  pointer-events: none;\n}\n.Embed #youtuber {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  width: 300px;\n  height: 200px;\n  margin: auto;\n  z-index: 1000;\n  position: absolute;\n}\n.UploadZone {\n  top: 1em;\n  left: 1em;\n  right: 1em;\n  bottom: 1em;\n  z-index: 9999;\n  position: absolute;\n  border-width: 5px;\n  border-style: dashed;\n  border-color: white;\n  pointer-events: none;\n  display: none;\n}\n.UploadZone[isDragAndDropping] {\n  display: block;\n}\n.PlayScreen {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  z-index: 200;\n  overflow: hidden;\n  position: absolute;\n}\n.PlayScreen .SubmissionForm {\n  display: flex;\n}\n.PlayScreen .SubmissionForm input {\n  height: 2rem;\n  font: inherit;\n  font-size: 12px;\n  display: block;\n}\n.PlayScreen .SubmissionForm input[type=text] {\n  flex: 1;\n}\n.PlayScreen .SubmissionForm input[type=submit] {\n  padding: 0em 1em;\n}\n.PlayScreen .Screenshot {\n  top: 2em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  z-index: 5;\n  position: absolute;\n  background-size: cover;\n  background-position: center;\n}\n.PlayScreen .Controls {\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  height: 48px;\n  z-index: 100;\n  position: fixed;\n  opacity: 0;\n  transition-property: opacity;\n  transition-duration: 0.25s;\n}\n.PlayScreen .Controls .Timeline {\n  left: 12px;\n  right: 12px;\n  height: 16px;\n  bottom: 40px;\n  position: absolute;\n  cursor: pointer;\n}\n.PlayScreen .Controls .Timeline * {\n  cursor: pointer;\n}\n.PlayScreen .Controls .Timeline .CurrentTime,\n.PlayScreen .Controls .Timeline .HoveredTime,\n.PlayScreen .Controls .Timeline .TotalTime {\n  top: 50%;\n  height: 3px;\n  margin-top: -1.5px;\n  position: absolute;\n  transition-duration: 0.1s;\n  transition-property: height, margin-top;\n  width: 100%;\n}\n.PlayScreen .Controls .Timeline:hover .CurrentTime,\n.PlayScreen .Controls .Timeline:hover .HoveredTime,\n.PlayScreen .Controls .Timeline:hover .TotalTime {\n  height: 5px;\n  margin-top: -2.5px;\n}\n.PlayScreen .Controls .Timeline:hover .CurrentTime .Dot {\n  opacity: 1;\n}\n.PlayScreen .Controls .Timeline:hover .HoveredTime {\n  opacity: 1;\n}\n.PlayScreen .Controls .Timeline .TotalTime {\n  z-index: 10;\n  background-color: rgba(51, 51, 51, 0.5);\n}\n.PlayScreen .Controls .Timeline .HoveredTime {\n  width: 50%;\n  z-index: 20;\n  opacity: 0;\n  transition-duration: 0.1s;\n  transition-property: opacity;\n  background-color: rgba(204, 204, 204, 0.5);\n}\n.PlayScreen .Controls .Timeline .HoveredTime .Timestamp {\n  top: -3em;\n  width: 8em;\n  right: -4em;\n  line-height: 1em;\n  font-size: 12px;\n  position: absolute;\n  color: white;\n  text-align: center;\n  text-shadow: black 3px 0 10px;\n  pointer-events: none;\n}\n.PlayScreen .Controls .Timeline .CurrentTime {\n  width: 0%;\n  z-index: 30;\n  background-color: #fc0404;\n}\n.PlayScreen .Controls .Timeline .CurrentTime .Dot {\n  top: 50%;\n  width: 12px;\n  height: 12px;\n  right: -6px;\n  margin-top: -6px;\n  margin-left: -6px;\n  position: absolute;\n  border-radius: 100%;\n  background-color: #fc0404;\n  opacity: 0;\n  transition-duration: 0.1s;\n  transition-property: opacity;\n}\n.PlayScreen .Controls .Gradient {\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  height: 3em;\n  position: absolute;\n  pointer-events: none;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);\n}\n.PlayScreen .Controls .Panel {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  display: flex;\n  padding-top: 8px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 8px;\n  position: absolute;\n  align-items: center;\n}\n.PlayScreen .Controls .Panel .PlayButton {\n  margin-right: 16px;\n  color: white;\n}\n.PlayScreen .Controls .Panel .PlayButton * {\n  cursor: pointer;\n}\n.PlayScreen .Controls .Panel .PlayButton span {\n  margin-top: 3px;\n  font-size: 30px;\n}\n.PlayScreen .Controls .Panel .VolumeButton {\n  margin-right: 16px;\n  color: white;\n}\n.PlayScreen .Controls .Panel .VolumeButton span {\n  margin-top: 3px;\n}\n.PlayScreen .Controls .Panel .VolumeBar {\n  height: 32px;\n  width: 48px;\n  margin-right: 16px;\n  position: relative;\n}\n.PlayScreen .Controls .Panel .VolumeBar .Bar {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  height: 3px;\n  margin: auto;\n  position: absolute;\n  background-color: white;\n}\n.PlayScreen .Controls .Panel .VolumeBar .Dot {\n  top: 50%;\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  margin-left: -6px;\n  position: absolute;\n  border-radius: 100%;\n  background-color: white;\n}\n.PlayScreen .Controls .Panel .Time {\n  color: white;\n  font-size: 12px;\n}\n.PlayScreen:hover .Controls {\n  opacity: 1;\n}\n.PlayScreen .Controls {\n  opacity: 1;\n}\n.ArtSelectionScreen {\n  max-width: 320px;\n  height: 100%;\n  overflow-y: scroll;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.ArtSelectionScreen .SelectedArt {\n  margin-bottom: 1em;\n}\n.ArtSelectionScreen .SelectedArt .Title {\n  height: 1.5em;\n  padding: 0em 1em;\n  line-height: 1.5em;\n  display: block;\n  width: 100%;\n  border: none;\n  font: inherit;\n  font-weight: 600;\n  font-stretch: condensed;\n  background-color: white;\n}\n.ArtSelectionScreen .SelectedArt .Image {\n  width: 100%;\n  height: 10em;\n  border-radius: 4px;\n  background-size: cover;\n  background-position: center;\n}\n.ArtSelectionScreen .SelectedArt .DeleteArtButton {\n  background-color: white;\n  border-radius: 2px;\n  padding: 0.1em;\n}\n.ArtSelectionScreen .Search {\n  padding: 0em 1em;\n}\n.ArtSelectionScreen .Search input {\n  width: 100%;\n  font: inherit;\n  font-size: 1.5em;\n}\n.ArtSelectionScreen .SelectableArts {\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n  display: grid;\n  row-gap: 0.61804697em;\n  column-gap: 0.61804697em;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-rows: 3em;\n}\n.ArtSelectionScreen .SelectableArts .SelectableArt {\n  width: 1fr;\n  height: 3em;\n  border-radius: 4px;\n  background-size: cover;\n  background-position: center;\n  background-color: black;\n}\n.SplashScreen {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  z-index: 1000;\n  position: absolute;\n}\n.SplashScreen * {\n  cursor: pointer;\n}\n.SplashScreen .Background {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  filter: blur(0px);\n  transform: scale(1.1);\n  transform-origin: center;\n  background-size: cover;\n  background-position: center;\n  animation-delay: 0.5s;\n  animation-duration: 2s;\n  animation-name: splash;\n  animation-fill-mode: forwards;\n}\n.SplashScreen .Background[random="1"] {\n  background-image: url('+T+');\n}\n.SplashScreen .Background[random="2"] {\n  background-image: url('+I+');\n}\n.SplashScreen .Background[random="3"] {\n  background-image: url('+E+");\n}\n.SplashScreen .Prompt {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  transform-origin: center;\n  transition-property: transform;\n  transition-duration: 0.5s;\n}\n.SplashScreen .Prompt .Text {\n  color: white;\n  text-shadow: 1px 1px 2px black;\n}\n.SplashScreen .Prompt .Icon {\n  position: relative;\n}\n.SplashScreen .Prompt .Icon .shape {\n  z-index: 20;\n  font-size: 6em;\n  position: relative;\n  color: #fc0404;\n}\n.SplashScreen .Prompt .Icon .fill {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  margin: auto;\n  width: 50%;\n  height: 50%;\n  z-index: 10;\n  position: absolute;\n  background-color: white;\n}\n.SplashScreen:hover .Prompt {\n  transform: scale(1.1);\n  transition-duration: 0.1s;\n}\n@keyframes splash {\n  0% {\n    filter: blur(0px);\n    transform: scale(1.1);\n  }\n  100% {\n    filter: blur(2px);\n    transform: scale(1);\n  }\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),s=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([i]).join("\n")}var o,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){e.exports=n.p+"a6707143c08357a98c345854736fb894.ttf"},function(e,t,n){e.exports=n.p+"8a36205bd9b83e03af0591a004bc97f4.ttf"},function(e,t,n){e.exports=n.p+"b8e42971dec8d49207a8c8e2b919a6ac.ttf"},function(e,t,n){e.exports=n.p+"881e150ab929e26d1f812c4342c15a7c.ttf"},function(e,t,n){e.exports=n.p+"0134dd8fe6fe708de73909a71d842780.ttf"},function(e,t,n){e.exports=n.p+"e38804ae070b58fbf4fdd88fd6853929.ttf"},function(e,t,n){e.exports=n.p+"905c2728284a6b881d4e417b80f1e79d.ttf"},function(e,t,n){e.exports=n.p+"74159e09f22e07ea61db1e2cd2d2b039.jpg"},function(e,t,n){e.exports=n.p+"67bab044aaa1faa00ef3da3c582173b7.jpg"},function(e,t,n){e.exports=n.p+"b7d80958bc037f9449bf51ae25dedda0.jpg"},function(e,t,n){"use strict";n.r(t);var r,i,s,o,a,c={},u=[],l=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(e,t){for(var n in t)e[n]=t[n];return e}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n){var i,s,o,a={};for(o in t)"key"==o?i=t[o]:"ref"==o?s=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?r.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===a[o]&&(a[o]=e.defaultProps[o]);return p(e,a,i,s,null)}function p(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++s:o};return null==o&&null!=i.vnode&&i.vnode(a),a}function m(e){return e.children}function g(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function w(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!b.__r++||a!==i.debounceRendering)&&((a=i.debounceRendering)||setTimeout)(b)}function b(){for(var e;b.__r=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,r,i,s,o;e.__d&&(s=(i=(t=e).__v).__e,(o=t.__P)&&(n=[],(r=h({},i)).__v=i.__v+1,C(o,i,r,t.__n,void 0!==o.ownerSVGElement,null!=i.__h?[s]:null,n,null==s?y(i):s,i.__h),D(n,i),i.__e!=s&&v(i)))}))}function _(e,t,n,r,i,s,o,a,l,h){var d,f,g,v,w,b,_,E=r&&r.__k||u,S=E.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(v=n.__k[d]=null==(v=t[d])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?p(null,v,null,null,v):Array.isArray(v)?p(m,{children:v},null,null,null):v.__b>0?p(v.type,v.props,v.key,v.ref?v.ref:null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(g=E[d])||g&&v.key==g.key&&v.type===g.type)E[d]=void 0;else for(f=0;f<S;f++){if((g=E[f])&&v.key==g.key&&v.type===g.type){E[f]=void 0;break}g=null}C(e,v,g=g||c,i,s,o,a,l,h),w=v.__e,(f=v.ref)&&g.ref!=f&&(_||(_=[]),g.ref&&_.push(g.ref,null,v),_.push(f,v.__c||w,v)),null!=w?(null==b&&(b=w),"function"==typeof v.type&&v.__k===g.__k?v.__d=l=T(v,l,e):l=I(e,v,g,E,w,l),"function"==typeof n.type&&(n.__d=l)):l&&g.__e==l&&l.parentNode!=e&&(l=y(g))}for(n.__e=b,d=S;d--;)null!=E[d]&&O(E[d],E[d]);if(_)for(d=0;d<_.length;d++)N(_[d],_[++d],_[++d])}function T(e,t,n){for(var r,i=e.__k,s=0;i&&s<i.length;s++)(r=i[s])&&(r.__=e,t="function"==typeof r.type?T(r,t,n):I(n,r,r,i,r.__e,t));return t}function I(e,t,n,r,i,s){var o,a,c;if(void 0!==t.__d)o=t.__d,t.__d=void 0;else if(null==n||i!=s||null==i.parentNode)e:if(null==s||s.parentNode!==e)e.appendChild(i),o=null;else{for(a=s,c=0;(a=a.nextSibling)&&c<r.length;c+=1)if(a==i)break e;e.insertBefore(i,s),o=s}return void 0!==o?o:i.nextSibling}function E(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||l.test(t)?n:n+"px"}function S(e,t,n,r,i){var s;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||E(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||E(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])s=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?r||e.addEventListener(t,s?k:x,s):e.removeEventListener(t,s?k:x,s);else if("dangerouslySetInnerHTML"!==t){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function x(e){this.l[e.type+!1](i.event?i.event(e):e)}function k(e){this.l[e.type+!0](i.event?i.event(e):e)}function C(e,t,n,r,s,o,a,c,u){var l,d,f,p,y,v,w,b,T,I,E,S,x,k,C,D=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(u=n.__h,c=t.__e=n.__e,t.__h=null,o=[c]),(l=i.__b)&&l(t);try{e:if("function"==typeof D){if(b=t.props,T=(l=D.contextType)&&r[l.__c],I=l?T?T.props.value:l.__:r,n.__c?w=(d=t.__c=n.__c).__=d.__E:("prototype"in D&&D.prototype.render?t.__c=d=new D(b,I):(t.__c=d=new g(b,I),d.constructor=D,d.render=R),T&&T.sub(d),d.props=b,d.state||(d.state={}),d.context=I,d.__n=r,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=D.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=h({},d.__s)),h(d.__s,D.getDerivedStateFromProps(b,d.__s))),p=d.props,y=d.state,f)null==D.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==D.getDerivedStateFromProps&&b!==p&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,I),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,I)||t.__v===n.__v){for(d.props=b,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),E=0;E<d._sb.length;E++)d.__h.push(d._sb[E]);d._sb=[],d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,I),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(p,y,v)}))}if(d.context=I,d.props=b,d.__v=t,d.__P=e,S=i.__r,x=0,"prototype"in D&&D.prototype.render){for(d.state=d.__s,d.__d=!1,S&&S(t),l=d.render(d.props,d.state,d.context),k=0;k<d._sb.length;k++)d.__h.push(d._sb[k]);d._sb=[]}else do{d.__d=!1,S&&S(t),l=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++x<25);d.state=d.__s,null!=d.getChildContext&&(r=h(h({},r),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(p,y)),C=null!=l&&l.type===m&&null==l.key?l.props.children:l,_(e,Array.isArray(C)?C:[C],t,n,r,s,o,a,c,u),d.base=t.__e,t.__h=null,d.__h.length&&a.push(d),w&&(d.__E=d.__=null),d.__e=!1}else null==o&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=A(n.__e,t,n,r,s,o,a,u);(l=i.diffed)&&l(t)}catch(e){t.__v=null,(u||null!=o)&&(t.__e=c,t.__h=!!u,o[o.indexOf(c)]=null),i.__e(e,t,n)}}function D(e,t){i.__c&&i.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){i.__e(e,t.__v)}}))}function A(e,t,n,i,s,o,a,u){var l,h,f,p=n.props,m=t.props,g=t.type,v=0;if("svg"===g&&(s=!0),null!=o)for(;v<o.length;v++)if((l=o[v])&&"setAttribute"in l==!!g&&(g?l.localName===g:3===l.nodeType)){e=l,o[v]=null;break}if(null==e){if(null===g)return document.createTextNode(m);e=s?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,m.is&&m),o=null,u=!1}if(null===g)p===m||u&&e.data===m||(e.data=m);else{if(o=o&&r.call(e.childNodes),h=(p=n.props||c).dangerouslySetInnerHTML,f=m.dangerouslySetInnerHTML,!u){if(null!=o)for(p={},v=0;v<e.attributes.length;v++)p[e.attributes[v].name]=e.attributes[v].value;(f||h)&&(f&&(h&&f.__html==h.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,i){var s;for(s in n)"children"===s||"key"===s||s in t||S(e,s,null,n[s],r);for(s in t)i&&"function"!=typeof t[s]||"children"===s||"key"===s||"value"===s||"checked"===s||n[s]===t[s]||S(e,s,t[s],n[s],r)}(e,m,p,s,u),f)t.__k=[];else if(v=t.props.children,_(e,Array.isArray(v)?v:[v],t,n,i,s&&"foreignObject"!==g,o,a,o?o[0]:n.__k&&y(n,0),u),null!=o)for(v=o.length;v--;)null!=o[v]&&d(o[v]);u||("value"in m&&void 0!==(v=m.value)&&(v!==e.value||"progress"===g&&!v||"option"===g&&v!==p.value)&&S(e,"value",v,p.value,!1),"checked"in m&&void 0!==(v=m.checked)&&v!==e.checked&&S(e,"checked",v,p.checked,!1))}return e}function N(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){i.__e(e,n)}}function O(e,t,n){var r,s;if(i.unmount&&i.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||N(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){i.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(s=0;s<r.length;s++)r[s]&&O(r[s],t,n||"function"!=typeof e.type);n||null==e.__e||d(e.__e),e.__=e.__e=e.__d=void 0}function R(e,t,n){return this.constructor(e,n)}function P(e,t,n){var s,o,a;i.__&&i.__(e,t),o=(s="function"==typeof n)?null:n&&n.__k||t.__k,a=[],C(t,e=(!s&&n||t).__k=f(m,null,[e]),o||c,c,void 0!==t.ownerSVGElement,!s&&n?[n]:o?null:t.firstChild?r.call(t.childNodes):null,a,!s&&n?n:o?o.__e:t.firstChild,s),D(a,e)}r=u.slice,i={__e:function(e,t,n,r){for(var i,s,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((s=i.constructor)&&null!=s.getDerivedStateFromError&&(i.setState(s.getDerivedStateFromError(e)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},s=0,g.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof e&&(e=e(h({},n),this.props)),e&&h(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),w(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),w(this))},g.prototype.render=m,o=[],b.__r=0;var L=n(11),M=n.n(L),F=n(1),V=n(3),U=n(2),B=n(5);
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
class j{constructor(e,t){this._delegate=e,this.firebase=t,Object(U._addComponent)(e,new V.a("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(U.deleteApp)(this._delegate)))}_getService(e,t=U._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=U._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(U._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){Object(U._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const q={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},G=new F.b("app-compat","Firebase",q);const K=
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
function e(){const t=
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
function(e){const t={},n={__esModule:!0,initializeApp:function(r,i={}){const s=U.initializeApp(r,i);if(Object(F.e)(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o},app:r,registerVersion:U.registerVersion,setLogLevel:U.setLogLevel,onLog:U.onLog,apps:null,SDK_VERSION:U.SDK_VERSION,INTERNAL:{registerComponent:function(t){const i=t.name,s=i.replace("-compat","");if(U._registerComponent(t)&&"PUBLIC"===t.type){const o=(e=r())=>{if("function"!=typeof e[s])throw G.create("invalid-app-argument",{appName:i});return e[s]()};void 0!==t.serviceProps&&Object(F.i)(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){return this._getService.bind(this,i).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){if("serverAuth"===t)return null;return t},modularAPIs:U}};function r(e){if(e=e||U._DEFAULT_ENTRY_NAME,!Object(F.e)(t,e))throw G.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),r.App=e,n}(j);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(F.i)(t,e)},createSubscribe:F.g,ErrorFactory:F.b,deepExtend:F.i}),t}(),z=new B.b("@firebase/app-compat");
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
if(Object(F.n)()&&void 0!==self.firebase){z.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&z.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const $=K;
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
var H;Object(U.registerVersion)("@firebase/app-compat","0.2.0",H);
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
$.registerVersion("firebase","9.15.0","app-compat");var Q=n(0);
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
function W(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new Q.g("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
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
 */function Y(){if("undefined"==typeof Uint8Array)throw new Q.g("unimplemented","Uint8Arrays are not available in this environment.")}function X(){if(!Object(Q.r)())throw new Q.g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class J{constructor(e){this._delegate=e}static fromBase64String(e){return X(),new J(Q.b.fromBase64String(e))}static fromUint8Array(e){return Y(),new J(Q.b.fromUint8Array(e))}toBase64(){return X(),this._delegate.toBase64()}toUint8Array(){return Y(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
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
 */function Z(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of t)if(e in n&&"function"==typeof n[e])return!0;return!1}
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
 */(e,["next","error","complete"])}class ee{enableIndexedDbPersistence(e,t){return Object(Q.F)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(Q.G)(e._delegate)}clearIndexedDbPersistence(e){return Object(Q.x)(e._delegate)}}class te{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Q.m||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(Q.s)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(Q.A)(this._delegate,e,t,n)}enableNetwork(){return Object(Q.H)(this._delegate)}disableNetwork(){return Object(Q.D)(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(Q.t)("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(Q.lb)(this._delegate)}onSnapshotsInSync(e){return Object(Q.Y)(this._delegate,e)}get app(){if(!this._appCompat)throw new Q.g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new me(this,Object(Q.y)(this._delegate,e))}catch(e){throw ae(e,"collection()","Firestore.collection()")}}doc(e){try{return new oe(this,Object(Q.E)(this._delegate,e))}catch(e){throw ae(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new de(this,Object(Q.z)(this._delegate,e))}catch(e){throw ae(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(Q.db)(this._delegate,t=>e(new re(this,t)))}batch(){return Object(Q.K)(this._delegate),new ie(new Q.l(this._delegate,e=>Object(Q.L)(this._delegate,e)))}loadBundle(e){return Object(Q.V)(this._delegate,e)}namedQuery(e){return Object(Q.W)(this._delegate,e).then(e=>e?new de(this,e):null)}}class ne extends Q.a{constructor(e){super(),this.firestore=e}convertBytes(e){return new J(new Q.b(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return oe.forKey(t,this.firestore,null)}}class re{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ne(e)}get(e){const t=ge(e);return this._delegate.get(t).then(e=>new le(this._firestore,new Q.e(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=ge(e);return n?(W("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ge(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ge(e);return this._delegate.delete(t),this}}class ie{constructor(e){this._delegate=e}set(e,t,n){const r=ge(e);return n?(W("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ge(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ge(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class se{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Q.i(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new he(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=se.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new se(e,new ne(e),t),r.set(t,i)),i}}se.INSTANCES=new WeakMap;class oe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ne(e)}static forPath(e,t,n){if(e.length%2!=0)throw new Q.g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new oe(t,new Q.d(t._delegate,n,new Q.n(e)))}static forKey(e,t,n){return new oe(t,new Q.d(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new me(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new me(this.firestore,Object(Q.y)(this._delegate,e))}catch(e){throw ae(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=Object(F.l)(e))instanceof Q.d&&Object(Q.cb)(this._delegate,e)}set(e,t){t=W("DocumentReference.set",t);try{return t?Object(Q.fb)(this._delegate,e,t):Object(Q.fb)(this._delegate,e)}catch(e){throw ae(e,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(Q.kb)(this._delegate,e):Object(Q.kb)(this._delegate,e,t,...n)}catch(e){throw ae(e,"updateDoc()","DocumentReference.update()")}}delete(){return Object(Q.B)(this._delegate)}onSnapshot(...e){const t=ce(e),n=ue(e,e=>new le(this.firestore,new Q.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(Q.X)(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Object(Q.N)(this._delegate):"server"===(null==e?void 0:e.source)?Object(Q.O)(this._delegate):Object(Q.M)(this._delegate),t.then(e=>new le(this.firestore,new Q.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new oe(this.firestore,e?this._delegate.withConverter(se.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ae(e,t,n){return e.message=e.message.replace(t,n),e}function ce(e){for(const t of e)if("object"==typeof t&&!Z(t))return t;return{}}function ue(e,t){var n,r;let i;return i=Z(e[0])?e[0]:Z(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class le{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new oe(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(Q.hb)(this._delegate,e._delegate)}}class he extends le{data(e){const t=this._delegate.data(e);return Object(Q.q)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class de{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ne(e)}where(e,t,n){try{return new de(this.firestore,Object(Q.ab)(this._delegate,Object(Q.mb)(e,t,n)))}catch(e){throw ae(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new de(this.firestore,Object(Q.ab)(this._delegate,Object(Q.Z)(e,t)))}catch(e){throw ae(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new de(this.firestore,Object(Q.ab)(this._delegate,Object(Q.T)(e)))}catch(e){throw ae(e,"limit()","Query.limit()")}}limitToLast(e){try{return new de(this.firestore,Object(Q.ab)(this._delegate,Object(Q.U)(e)))}catch(e){throw ae(e,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new de(this.firestore,Object(Q.ab)(this._delegate,Object(Q.jb)(...e)))}catch(e){throw ae(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new de(this.firestore,Object(Q.ab)(this._delegate,Object(Q.ib)(...e)))}catch(e){throw ae(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new de(this.firestore,Object(Q.ab)(this._delegate,Object(Q.J)(...e)))}catch(e){throw ae(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new de(this.firestore,Object(Q.ab)(this._delegate,Object(Q.I)(...e)))}catch(e){throw ae(e,"endAt()","Query.endAt()")}}isEqual(e){return Object(Q.bb)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Object(Q.Q)(this._delegate):"server"===(null==e?void 0:e.source)?Object(Q.R)(this._delegate):Object(Q.P)(this._delegate),t.then(e=>new pe(this.firestore,new Q.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=ce(e),n=ue(e,e=>new pe(this.firestore,new Q.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(Q.X)(this._delegate,t,n)}withConverter(e){return new de(this.firestore,e?this._delegate.withConverter(se.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class fe{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new he(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class pe{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new de(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new he(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new fe(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new he(this._firestore,n))})}isEqual(e){return Object(Q.hb)(this._delegate,e._delegate)}}class me extends de{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new oe(this.firestore,e):null}doc(e){try{return new oe(this.firestore,void 0===e?Object(Q.E)(this._delegate):Object(Q.E)(this._delegate,e))}catch(e){throw ae(e,"doc()","CollectionReference.doc()")}}add(e){return Object(Q.u)(this._delegate,e).then(e=>new oe(this.firestore,e))}isEqual(e){return Object(Q.cb)(this._delegate,e._delegate)}withConverter(e){return new me(this.firestore,e?this._delegate.withConverter(se.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ge(e){return Object(Q.p)(e,Q.d)}
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
 */class ye{constructor(...e){this._delegate=new Q.f(...e)}static documentId(){return new ye(Q.o.keyField().canonicalString())}isEqual(e){return(e=Object(F.l)(e))instanceof Q.f&&this._delegate._internalPath.isEqual(e._internalPath)}}
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
 */class ve{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(Q.eb)();return e._methodName="FieldValue.serverTimestamp",new ve(e)}static delete(){const e=Object(Q.C)();return e._methodName="FieldValue.delete",new ve(e)}static arrayUnion(...e){const t=Object(Q.w)(...e);return t._methodName="FieldValue.arrayUnion",new ve(t)}static arrayRemove(...e){const t=Object(Q.v)(...e);return t._methodName="FieldValue.arrayRemove",new ve(t)}static increment(e){const t=Object(Q.S)(e);return t._methodName="FieldValue.increment",new ve(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
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
 */const we={Firestore:te,GeoPoint:Q.h,Timestamp:Q.k,Blob:J,Transaction:re,WriteBatch:ie,DocumentReference:oe,DocumentSnapshot:le,Query:de,QueryDocumentSnapshot:he,QuerySnapshot:pe,CollectionReference:me,FieldPath:ye,FieldValue:ve,setLogLevel:function(e){Object(Q.gb)(e)},CACHE_SIZE_UNLIMITED:Q.c};
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
var be,_e;_e=(e,t)=>new te(e,t,new ee),(be=$).INTERNAL.registerComponent(new V.a("firestore-compat",e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("firestore").getImmediate();return _e(t,n)},"PUBLIC").setServiceProps(Object.assign({},we))),be.registerVersion("@firebase/firestore-compat","0.3.0");
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
class Te extends F.c{constructor(e,t,n=0){super(Ie(e),`Firebase Storage: ${t} (${Ie(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ie(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ie(e){return"storage/"+e}function Ee(){return new Te("unknown","An unknown error occurred, please check the error payload for server response.")}function Se(){return new Te("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function xe(){return new Te("canceled","User canceled the upload/download.")}function ke(){return new Te("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Ce(e){return new Te("invalid-argument",e)}function De(){return new Te("app-deleted","The Firebase app was deleted.")}function Ae(e){return new Te("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ne(e,t){return new Te("invalid-format","String does not match format '"+e+"': "+t)}function Oe(e){throw new Te("internal-error","Internal error: "+e)}
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
 */class Re{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Re.makeFromUrl(e,t)}catch(t){return new Re(e,"")}if(""===n.path)return n;throw new Te("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}const s=t.replace(/[.]/g,"\\."),o=[{regex:r,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${s}/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/([A-Za-z0-9.\\-_]+)/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<o.length;t++){const r=o[t],i=r.regex.exec(e);if(i){const e=i[r.indices.bucket];let t=i[r.indices.path];t||(t=""),n=new Re(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new Te("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class Pe{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function Le(e){return"string"==typeof e||e instanceof String}function Me(e){return Fe()&&e instanceof Blob}function Fe(){return"undefined"!=typeof Blob&&!Object(F.p)()}function Ve(e,t,n,r){if(r<t)throw Ce(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Ce(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
 */function Ue(e,t,n){let r=t;return null==n&&(r="https://"+t),`${n}://${r}/v0${e}`}function Be(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
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
 */var je;
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
function qe(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}
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
 */!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(je||(je={}));class Ge{constructor(e,t,n,r,i,s,o,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new Ke(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===je.NO_ERROR,i=n.getStatus();if((!t||qe(i,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===je.ABORT;return void e(!1,new Ke(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new Ke(s,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());!
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
function(e){return void 0!==e}(e)?n():n(e)}catch(e){r(e)}else if(null!==i){const e=Ee();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?De():xe())}else{r(Se())}};this.canceled_?t(0,new Ke(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(f,c())},t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);if(c()||o)return d(),void l.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Ke{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
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
function ze(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function $e(...e){const t=ze();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(Fe())return new Blob(e);throw new Te("unsupported-environment","This browser doesn't seem to support creating Blobs")}
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
function He(e){if("undefined"==typeof atob)throw new Te("unsupported-environment","base-64"+" is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}
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
 */const Qe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class We{constructor(e,t){this.data=e,this.contentType=t||null}}function Ye(e,t){switch(e){case Qe.RAW:return new We(Xe(t));case Qe.BASE64:case Qe.BASE64URL:return new We(Je(e,t));case Qe.DATA_URL:return new We(function(e){const t=new Ze(e);return t.base64?Je(Qe.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw Ne(Qe.DATA_URL,"Malformed data URL.")}return Xe(t)}(t.rest)}(t),new Ze(t).contentType)}throw Ee()}function Xe(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function Je(e,t){switch(e){case Qe.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw Ne(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case Qe.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw Ne(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=He(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw Ne(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class Ze{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw Ne(Qe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
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
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class et{constructor(e,t){let n=0,r="";Me(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Me(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new et(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new et(n,!0)}}static getBlob(...e){if(Fe()){const t=e.map(e=>e instanceof et?e.data_:e);return new et($e.apply(null,t))}{const t=e.map(e=>Le(e)?Ye(Qe.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new et(r,!0)}}uploadData(){return this.data_}}
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
 */function tt(e){let t;try{t=JSON.parse(e)}catch(e){return null}return function(e){return"object"==typeof e&&!Array.isArray(e)}(t)?t:null}
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
 */function nt(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function rt(e,t){return t}class it{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||rt}}let st=null;function ot(){if(st)return st;const e=[];e.push(new it("bucket")),e.push(new it("generation")),e.push(new it("metageneration")),e.push(new it("name","fullPath",!0));const t=new it("name");t.xform=function(e,t){return function(e){return!Le(e)||e.length<2?e:nt(e)}(t)},e.push(t);const n=new it("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new it("timeCreated")),e.push(new it("updated")),e.push(new it("md5Hash",null,!0)),e.push(new it("cacheControl",null,!0)),e.push(new it("contentDisposition",null,!0)),e.push(new it("contentEncoding",null,!0)),e.push(new it("contentLanguage",null,!0)),e.push(new it("contentType",null,!0)),e.push(new it("metadata","customMetadata",!0)),st=e,st}function at(e,t,n){const r={type:"file"},i=n.length;for(let e=0;e<i;e++){const i=n[e];r[i.local]=i.xform(r,t[i.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new Re(n,r);return t._makeStorageReference(i)}})}(r,e),r}function ct(e,t,n){const r=tt(t);if(null===r)return null;return at(e,r,n)}function ut(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
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
 */function lt(e,t,n){const r=tt(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n.prefixes)for(const i of n.prefixes){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new Re(t,n));r.prefixes.push(s)}if(n.items)for(const i of n.items){const n=e._makeStorageReference(new Re(t,i.name));r.items.push(n)}return r}(e,t,r)}class ht{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function dt(e){if(!e)throw Ee()}function ft(e,t){return function(n,r){const i=ct(e,r,t);return dt(null!==i),i}}function pt(e,t){return function(n,r){const i=ct(e,r,t);return dt(null!==i),function(e,t,n,r){const i=tt(t);if(null===i)return null;if(!Le(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map(t=>{const i=e.bucket,s=e.fullPath;return Ue("/b/"+o(i)+"/o/"+o(s),n,r)+Be({alt:"media",token:t})})[0]}(i,r,e.host,e._protocol)}}function mt(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new Te("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new Te("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new Te("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new Te("unauthorized","User does not have permission to access '"+i+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function gt(e){const t=mt(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new Te("object-not-found","Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function yt(e,t,n){const r=Ue(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new ht(r,"GET",ft(e,n),i);return s.errorHandler=gt(t),s}function vt(e,t,n,r,i){const s={};t.isRoot?s.prefix="":s.prefix=t.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=Ue(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,c=new ht(o,"GET",function(e,t){return function(n,r){const i=lt(e,t,r);return dt(null!==i),i}}(e,t.bucket),a);return c.urlParams=s,c.errorHandler=mt(t),c}function wt(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function bt(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const c=wt(t,r,i),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+ut(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",l="\r\n--"+a+"--",h=et.getBlob(u,r,l);if(null===h)throw ke();const d={name:c.fullPath},f=Ue(s,e.host,e._protocol),p=e.maxUploadRetryTime,m=new ht(f,"POST",ft(e,n),p);return m.urlParams=d,m.headers=o,m.body=h.uploadData(),m.errorHandler=mt(t),m}class _t{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Tt(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){dt(!1)}return dt(!!n&&-1!==(t||["active"]).indexOf(n)),n}function It(e,t,n,r,i,s,o,a){const c=new _t(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw new Te("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";f=0===l?"finalize":u===l?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":""+c.current},m=r.slice(h,d);if(null===m)throw ke();const g=t.maxUploadRetryTime,y=new ht(n,"POST",(function(e,n){const i=Tt(e,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?ft(t,s)(e,n):null,new _t(o,a,"final"===i,u)}),g);return y.headers=p,y.body=m.uploadData(),y.progressCallback=a||null,y.errorHandler=mt(e),y}
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
 */const Et={STATE_CHANGED:"state_changed"},St={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function xt(e){switch(e){case"running":case"pausing":case"canceling":return St.RUNNING;case"paused":return St.PAUSED;case"success":return St.SUCCESS;case"canceled":return St.CANCELED;case"error":default:return St.ERROR}}
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
 */class kt{constructor(e,t,n){if(function(e){return"function"==typeof e}(e)||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
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
 */function Ct(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}
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
 */class Dt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=je.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=je.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=je.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw Oe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Oe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Oe("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Oe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Oe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class At extends Dt{initXhr(){this.xhr_.responseType="text"}}function Nt(){return new At}
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
class Ot{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=ot(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(qe(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=Se()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=wt(t,r,i),a={name:o.fullPath},c=Ue(s,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},l=ut(o,n),h=e.maxUploadRetryTime,d=new ht(c,"POST",(function(e){let t;Tt(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){dt(!1)}return dt(Le(t)),t}),h);return d.urlParams=a,d.headers=u,d.body=l,d.errorHandler=mt(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Nt,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const r=function(e,t,n,r){const i=e.maxUploadRetryTime,s=new ht(n,"POST",(function(e){const t=Tt(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){dt(!1)}n||dt(!1);const i=Number(n);return dt(!isNaN(i)),new _t(i,r.size(),"final"===t)}),i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=mt(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,Nt,t,n);this._request=i,i.getPromise().then(e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=262144*this._chunkMultiplier,t=new _t(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let s;try{s=It(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const o=this._ref.storage._makeRequest(s,Nt,r,i,!1);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){2*(262144*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=yt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,Nt,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=bt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Nt,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=xe(),this._state=e,this._notifyObservers();break;case"error":case"success":this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=xt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new kt(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(xt(this._state)){case St.SUCCESS:Ct(this._resolve.bind(null,this.snapshot))();break;case St.CANCELED:case St.ERROR:Ct(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(xt(this._state)){case St.RUNNING:case St.PAUSED:e.next&&Ct(e.next.bind(e,this.snapshot))();break;case St.SUCCESS:e.complete&&Ct(e.complete.bind(e))();break;case St.CANCELED:case St.ERROR:e.error&&Ct(e.error.bind(e,this._error))();break;default:e.error&&Ct(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
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
 */class Rt{constructor(e,t){this._service=e,this._location=t instanceof Re?t:Re.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Rt(e,t)}get root(){const e=new Re(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nt(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new Re(this._location.bucket,e);return new Rt(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw Ae(e)}}function Pt(e){const t={prefixes:[],items:[]};return async function e(t,n,r){const i={pageToken:r},s=await Lt(t,i);n.prefixes.push(...s.prefixes),n.items.push(...s.items),null!=s.nextPageToken&&await e(t,n,s.nextPageToken)}(e,t).then(()=>t)}function Lt(e,t){null!=t&&"number"==typeof t.maxResults&&Ve("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=vt(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,Nt)}function Mt(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,r){const i=Ue(t.fullServerUrl(),e.host,e._protocol),s=ut(n,r),o=e.maxOperationRetryTime,a=new ht(i,"PATCH",ft(e,r),o);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=s,a.errorHandler=gt(t),a}(e.storage,e._location,t,ot());return e.storage.makeRequestWithTokens(n,Nt)}function Ft(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=Ue(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new ht(r,"GET",pt(e,n),i);return s.errorHandler=gt(t),s}(e.storage,e._location,ot());return e.storage.makeRequestWithTokens(t,Nt).then(e=>{if(null===e)throw new Te("no-download-url","The given file does not have any download URLs.");return e})}function Vt(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=Ue(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,i=new ht(n,"DELETE",(function(e,t){}),r);return i.successCodes=[200,204],i.errorHandler=gt(t),i}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Nt)}function Ut(e,t){const n=function(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new Re(e._location.bucket,n);return new Rt(e.storage,r)}
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
 */function Bt(e,t){if(e instanceof Gt){const n=e;if(null==n._bucket)throw new Te("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new Rt(n,n._bucket);return null!=t?Bt(r,t):r}return void 0!==t?Ut(e,t):e}function jt(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Gt)return new Rt(e,t);throw Ce("To use ref(service, url), the first argument must be a Storage instance.")}return Bt(e,t)}function qt(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:Re.makeFromBucketSpec(n,e)}class Gt{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?Re.makeFromBucketSpec(r,this._host):qt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Re.makeFromBucketSpec(this._url,e):this._bucket=qt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ve("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ve("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rt(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new Pe(De());{const s=function(e,t,n,r,i,s,o=!0){const a=Be(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(u,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,r),new Ge(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}function Kt(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Ot(e,new et(t),n)}(e=Object(F.l)(e),t,n)}function zt(e){return function(e){e._throwIfRoot("getMetadata");const t=yt(e.storage,e._location,ot());return e.storage.makeRequestWithTokens(t,Nt)}(e=Object(F.l)(e))}function $t(e,t){return jt(e=Object(F.l)(e),t)}function Ht(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:Object(F.f)(i,e.app.options.projectId))}(e,t,n,r)}
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
 */function Qt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Gt(n,r,i,t,U.SDK_VERSION)}Object(U._registerComponent)(new V.a("storage",Qt,"PUBLIC").setMultipleInstances(!0)),Object(U.registerVersion)("@firebase/storage","0.10.0",""),Object(U.registerVersion)("@firebase/storage","0.10.0","esm2017");
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
class Wt{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
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
 */class Yt{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Wt(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(t=>{if(e)return e(new Wt(t,this,this._ref))},t)}on(e,t,n,r){let i=void 0;return t&&(i="function"==typeof t?e=>t(new Wt(e,this,this._ref)):{next:t.next?e=>t.next(new Wt(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class Xt{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Jt(e,this._service))}get items(){return this._delegate.items.map(e=>new Jt(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=function(e,t){return Ut(e,t)}(this._delegate,e);return new Jt(t,this.storage)}get root(){return new Jt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new Jt(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new Yt(Kt(this._delegate,e,t),this)}putString(e,t=Qe.RAW,n){this._throwIfRoot("putString");const r=Ye(t,e),i=Object.assign({},n);return null==i.contentType&&null!=r.contentType&&(i.contentType=r.contentType),new Yt(new Ot(this._delegate,new et(r.data,!0),i),this)}listAll(){return(e=this._delegate,Pt(e=Object(F.l)(e))).then(e=>new Xt(e,this.storage));var e}list(e){return function(e,t){return Lt(e=Object(F.l)(e),t)}(this._delegate,e||void 0).then(e=>new Xt(e,this.storage))}getMetadata(){return zt(this._delegate)}updateMetadata(e){return function(e,t){return Mt(e=Object(F.l)(e),t)}(this._delegate,e)}getDownloadURL(){return e=this._delegate,Ft(e=Object(F.l)(e));var e}delete(){return this._throwIfRoot("delete"),e=this._delegate,Vt(e=Object(F.l)(e));var e}_throwIfRoot(e){if(""===this._delegate._location.path)throw Ae(e)}}
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
 */class Zt{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(en(e))throw Ce("ref() expected a child path but got a URL, use refFromURL instead.");return new Jt($t(this._delegate,e),this)}refFromURL(e){if(!en(e))throw Ce("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Re.makeFromUrl(e,this._delegate.host)}catch(e){throw Ce("refFromUrl() expected a valid full URL but got an invalid one.")}return new Jt($t(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){Ht(this._delegate,e,t,n)}}function en(e){return/^[A-Za-z]+:\/\//.test(e)}function tn(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t});return new Zt(n,r)}!function(e){const t={TaskState:St,TaskEvent:Et,StringFormat:Qe,Storage:Zt,Reference:Jt};e.INTERNAL.registerComponent(new V.a("storage-compat",tn,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion("@firebase/storage-compat","0.2.0")}($);$.initializeApp({apiKey:"AIzaSyAkNK-ByqyzgufHhELPFh6e4TsoSuHvPYE",authDomain:"truesight-7c04e.firebaseapp.com",projectId:"truesight-7c04e",storageBucket:"truesight-7c04e.appspot.com",messagingSenderId:"123067060171",appId:"1:123067060171:web:abe3ee3e5109c97f97304e",measurementId:"G-91YL89DDY9"});var nn={data:$.firestore(),files:$.storage()};function rn(e){if(null!=e.currentTime)return e.currentTime;if(null!=e.startTime){var t=Date.now()-e.startTime;return t=Math.max(0,t)}return 0}nn.data.collection("art").orderBy("timestamp","desc").limit(25).onSnapshot((function(e){0!=e.exists&&(sn.art=[],e.forEach((function(e,t){sn.art.push(e.data())})))})),nn.data.collection("campaigns").doc("theros").onSnapshot((function(e){if(0!=e.exists&&(sn.prevcampaign=sn.campaign,sn.campaign=e.data(),null!=sn.campaign.music&&null!=window.youtubePlayer)){var t=sn.campaign,n=sn.prevcampaign;if(console.log(t.music),t.music.youtubeId!=n.music.youtubeId||t.music.key!=n.music.key)return window.youtubePlayer.loadVideoById({videoId:t.music.youtubeId,startSeconds:Math.floor(rn(t.music)/1e3)||1});t.music.startTime!=n.music.startTime&&window.youtubePlayer.seekTo(Math.floor(rn(t.music)/1e3)||1),t.music.state!=n.music.state&&("paused"==sn.campaign.music.state?window.youtubePlayer.pauseVideo():"paused"!=sn.campaign.music.state&&window.youtubePlayer.playVideo())}}));var sn={},on=sn;function an(e){return(an="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function cn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,s=void 0,s=function(e,t){if("object"!==an(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==an(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===an(s)?s:String(s)),r)}var i,s}function un(e,t,n){return t&&cn(e.prototype,t),n&&cn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ln(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hn(e,t){if(t&&("object"===an(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function dn(e){var t="function"==typeof Map?new Map:void 0;return(dn=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return fn(e,arguments,gn(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),mn(r,e)})(e)}function fn(e,t,n){return(fn=pn()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&mn(i,n.prototype),i}).apply(null,arguments)}function pn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function mn(e,t){return(mn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function gn(e){return(gn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}"undefined"!=typeof window&&(window.setTimeout((function(){vn.run(window.location.hash)})),window.addEventListener("hashchange",(function(e){vn.run(window.location.hash)})));var yn=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&mn(e,t)}(i,e);var t,n,r=(t=i,n=pn(),function(){var e,r=gn(t);if(n){var i=gn(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return hn(this,e)});function i(){return ln(this,i),r.apply(this,arguments)}return un(i)}(dn(Error)),vn=new(function(){function e(){ln(this,e),this.routes=[],this.state={screen:"SplashScreen"}}return un(e,[{key:"go",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";window.location.hash=e}},{key:"run",value:function(e){"/"==(e="#"==(e=decodeURIComponent(e))[0]?e.substring(1):e).charAt(e.length-1)&&(e=e.substring(0,e.length-1));var t={path:e=e||"/"};for(var n in this.routes){var r=this.routes[n],i=t.path.match(r.path);if(null!=i){t.wildcards=i.groups;try{var s=r.func(t);if(null!=s)return void(this.state=s)}catch(e){throw t.error=e,this.state=e instanceof yn?this.onUserError(t):this.onError(t),e}}}}},{key:"on",value:function(e,t){if(e instanceof Error==1)return this.routes[e]={path:e,func:t};this.routes.push({path:this.convertStringToRegex(e),func:t})}},{key:"convertStringToRegex",value:function(e){if(e instanceof RegExp==1)return e;var t=(e=e.replace(/\*/g,"(.*)")).match(/\:[a-zA-Z]+/g);return null!=t&&t.forEach((function(t){e=e.replace(t,"(?<"+t.substring(1)+">.*)")})),new RegExp("^"+e+"$","i")}}]),e}());vn.on("/",(function(e){return{screen:"SplashScreen"}})),vn.on("/play",(function(e){return{screen:"PlayScreen"}})),vn.on("/play/debug",(function(e){return{screen:"PlayScreen",isDebug:!0}})),vn.on("/*",(function(e){throw new yn("Could not find "+e.path)})),vn.onUserError=function(e){return{screen:"ErrorScreen",message:e.error.message}},vn.onError=function(e){return{screen:"ErrorScreen",message:"Something went wrong!!"}},window.truesight=window.truesight||{},window.truesight.navigation=window.truesight.navigation||vn;var wn=vn;function bn(e){return(bn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,s=void 0,s=function(e,t){if("object"!==bn(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==bn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===bn(s)?s:String(s)),r)}var i,s}var Tn=Math.ceil(3*Math.random()),In=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"render",value:function(){return f("div",{class:"SplashScreen",onClick:this.onClick},f("div",{class:"Background",random:Tn}),f("div",{class:"Prompt"},f("div",{class:"Icon"},f("div",{class:"fill"}),f("div",{class:"shape material-icons"},"smart_display"))))}},{key:"onClick",value:function(){wn.run("/play")}}])&&_n(t.prototype,n),r&&_n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),En=n(7),Sn=n.n(En),xn=n(12),kn=n.n(xn),Cn=n(8),Dn=n.n(Cn);function An(e){return(An="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Nn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,s=void 0,s=function(e,t){if("object"!==An(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==An(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===An(s)?s:String(s)),r)}var i,s}var On=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"onLoad",value:function(){null==window.youtubePlayer&&(window.youtubePlayer=new YT.Player("youtuber",{width:"300",height:"200",videoId:on.campaign.music.youtubeId,playerVars:{fs:0,rel:0,controls:1,disablekb:1,modestbranding:1,start:rn(on.campaign.music)/1e3||1,autoplay:!0},events:{onReady:function(e){window.youtubePlayer.seekTo(rn(on.campaign.music)/1e3||1),"paused"==on.campaign.music.state?window.youtubePlayer.pauseVideo():"paused"!=on.campaign.music.state&&window.youtubePlayer.playVideo()},onStateChange:function(e){e.data==YT.PlayerState.PAUSED&&"paused"!=on.campaign.music.state&&(window.youtubePlayer.seekTo(rn(on.campaign.music)/1e3||1),e.target.playVideo()),e.data==YT.PlayerState.PLAYING&&"playing"!=on.campaign.music.state&&(window.youtubePlayer.seekTo(rn(on.campaign.music)/1e3||1),e.target.pauseVideo())},onError:function(e){console.log("onError",e)}}}))}},{key:"pauseplay",value:function(){"paused"!=on.campaign.music.state?nn.data.collection("campaigns").doc("theros").update({music:{key:on.campaign.music.key,youtubeId:on.campaign.music.youtubeId,currentTime:Date.now()-on.campaign.music.startTime,state:"paused"}}):"paused"==on.campaign.music.state&&nn.data.collection("campaigns").doc("theros").update({music:{key:on.campaign.music.key,youtubeId:on.campaign.music.youtubeId,startTime:Date.now()-on.campaign.music.currentTime,state:"playing"}})}}])&&Nn(t.prototype,n),r&&Nn(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}());function Rn(e){return(Rn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ln(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,s=void 0,s=function(e,t){if("object"!==Rn(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==Rn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===Rn(s)?s:String(s)),r)}var i,s}function Mn(e,t,n){return t&&Ln(e.prototype,t),n&&Ln(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Fn=function(){function e(){Pn(this,e)}return Mn(e,[{key:"render",value:function(){if(null!=on.campaign)return On.onLoad(),f("div",{class:"PlayScreen"},f(Vn,null),f(Un,null),f(Bn,null))}}]),e}(),Vn=function(){function e(){Pn(this,e)}return Mn(e,[{key:"render",value:function(){return f("form",{class:"SubmissionForm",onSubmit:this.onSubmit},f("input",{name:"youtube",type:"text",placeholder:"put your youtube url here"}),f("input",{type:"submit"}))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=e.target.children.youtube.value,n=function(e){if(null!=e&&""!=e){if(11==e.length)return e;var t=e.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);if(null!=t){var n=t[0];if(null!=n){var r=n.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return r&&11==r[7].length?r[7]:void 0}}}}(t);if(null!=n&&""!=n){var r=Date.now(),i=(t.match(/t=([^&]*)/)||[])[1];null!=i&&(i=parseInt(i),r-=i*=1e3),nn.data.collection("campaigns").doc("theros").update({music:{key:kn.a.generate(),youtubeId:n,startTime:r,state:"playing"}})}}}]),e}(),Un=function(){function e(){Pn(this,e)}return Mn(e,[{key:"render",value:function(){if(null!=on.campaign&&1!=wn.state.isDebug)return f("div",{class:"Screenshot",onClick:this.onClick,style:{"background-image":"url(https://img.youtube.com/vi/"+on.campaign.music.youtubeId+"/maxresdefault.jpg)"}})}},{key:"onClick",value:function(){On.pauseplay()}}]),e}(),Bn=function(){function e(){Pn(this,e)}return Mn(e,[{key:"render",value:function(){return f("div",{class:"Controls"},f(jn,null),f("div",{class:"Gradient"}),f("div",{class:"Panel"},f("div",{class:"PlayButton",onClick:this.onClickPlayButton},f("span",{class:"material-icons"},"paused"==on.campaign.music.state?"play_arrow":"pause")),f("div",{class:"VolumeButton",onClick:this.onClickVolumeButton},f("span",{class:"material-icons"},this.getVolumeIcon())),f("div",{class:"VolumeBar",id:"volume",onMouseMove:this.onClickVolumeBar},f("div",{class:"Bar"}),f("div",{class:"Dot",style:{left:100*this.getVolumeRelativePosition()+"%"}})),f("div",{class:"Time"},this.getCurrentTimeText()," / ",this.getTotalTimeText())))}},{key:"onClickVolumeBar",value:function(){if(0!=Dn.a.isPressed()&&null!=document.getElementById("volume")){var e=document.getElementById("volume").getBoundingClientRect(),t=(Dn.a.position.x-e.x)/e.width*100;t<5&&(t=0),t>95&&(t=100),window.youtubePlayer.setVolume(t)}}},{key:"onClickVolumeButton",value:function(){null!=window.youtubePlayer&&window.youtubePlayer.isMuted instanceof Function!=0&&window.youtubePlayer.unMute instanceof Function!=0&&window.youtubePlayer.mute instanceof Function!=0&&(window.youtubePlayer.isMuted()?window.youtubePlayer.unMute():window.youtubePlayer.mute())}},{key:"getVolumeRelativePosition",value:function(){if(null!=window.youtubePlayer&&null!=window.youtubePlayer.getVolume)return window.youtubePlayer.getVolume()/100}},{key:"getVolumeIcon",value:function(){if(null!=window.youtubePlayer&&window.youtubePlayer.isMuted instanceof Function!=0&&window.youtubePlayer.getVolume instanceof Function!=0){if(window.youtubePlayer.isMuted())return"volume_off";var e=window.youtubePlayer.getVolume();return e<=0?"volume_off":e>=50?"volume_up":"volume_down"}}},{key:"onClickPlayButton",value:function(){On.pauseplay()}},{key:"getCurrentTimeText",value:function(){var e=this.getCurrentTime();return e=Math.min(e,this.getTotalTime()),isNaN(e)&&(e=0),Sn()(e)}},{key:"getTotalTimeText",value:function(){var e=this.getTotalTime();return isNaN(e)&&(e=0),Sn()(e)}},{key:"getCurrentTime",value:function(){var e;return null==(null==on||null===(e=on.campaign)||void 0===e?void 0:e.music)?0:rn(on.campaign.music)}},{key:"getTotalTime",value:function(){var e;return null==(null===(e=window.youtubePlayer)||void 0===e?void 0:e.getDuration)?0:1e3*window.youtubePlayer.getDuration()}}]),e}(),jn=function(){function e(){Pn(this,e)}return Mn(e,[{key:"render",value:function(){return f("div",{class:"Timeline",id:"timeline",onClick:this.onClick},f("div",{class:"CurrentTime",style:this.getCurrentTimeStyle()},f("div",{class:"Dot"})),f("div",{class:"HoveredTime",style:this.getHoveredTimeStyle()},f("div",{class:"Timestamp"},f("span",null,this.getHoveredTimeText()))),f("div",{class:"TotalTime"}))}},{key:"onClick",get:function(){var e=this;return function(t){var n=e.getHoveredTime();nn.data.collection("campaigns").doc("theros").update({music:{key:on.campaign.music.key,youtubeId:on.campaign.music.youtubeId,startTime:Date.now()-n,state:"playing"}})}}},{key:"getHoveredTimeText",value:function(){var e=this.getHoveredTime();return isNaN(e)&&(e=0),Sn()(e)}},{key:"getCurrentTimeStyle",value:function(){return{width:this.getCurrentTime()/this.getTotalTime()*100+"%"}}},{key:"getHoveredTimeStyle",value:function(){return{width:100*this.getHoveredRelativePosition()+"%"}}},{key:"getCurrentTime",value:function(){var e=rn(on.campaign.music);return e=Math.min(e,this.getTotalTime()),isNaN(e)&&(e=0),e}},{key:"getTotalTime",value:function(){var e;return null==(null===(e=window.youtubePlayer)||void 0===e?void 0:e.getDuration)?0:1e3*window.youtubePlayer.getDuration()}},{key:"getHoveredRelativePosition",value:function(){if(null==document.getElementById("timeline"))return 0;var e=document.getElementById("timeline").getBoundingClientRect();return(Dn.a.position.x-e.x)/e.width}},{key:"getHoveredTime",value:function(){return this.getHoveredRelativePosition()*this.getTotalTime()}}]),e}();n(22);function qn(e){return(qn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Gn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,s=void 0,s=function(e,t){if("object"!==qn(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==qn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===qn(s)?s:String(s)),r)}var i,s}var Kn=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"render",value:function(){if(null!=on.campaign)return f("div",{className:"Mount"},this.title,this.screen)}},{key:"title",get:function(){return f("title",null,"Bardic Inspiration")}},{key:"screen",get:function(){return"SplashScreen"==wn.state.screen?f(In,null):(wn.state.screen="PlayScreen")?f(Fn,null):void 0}}])&&Gn(t.prototype,n),r&&Gn(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();new M.a((function(e){this.mount=P(f(Kn,null),document.body,this.mount)}))}]);
//# sourceMappingURL=index.js.map