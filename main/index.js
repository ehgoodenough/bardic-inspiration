!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=46)}([function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ic})),n.d(e,"b",(function(){return bl})),n.d(e,"c",(function(){return al})),n.d(e,"d",(function(){return Lu})),n.d(e,"e",(function(){return _c})),n.d(e,"f",(function(){return vl})),n.d(e,"g",(function(){return I})),n.d(e,"h",(function(){return Cl})),n.d(e,"i",(function(){return qc})),n.d(e,"j",(function(){return Tc})),n.d(e,"k",(function(){return B})),n.d(e,"l",(function(){return Wc})),n.d(e,"m",(function(){return gt})),n.d(e,"n",(function(){return G})),n.d(e,"o",(function(){return K})),n.d(e,"p",(function(){return Su})),n.d(e,"q",(function(){return E})),n.d(e,"r",(function(){return Ct})),n.d(e,"s",(function(){return p})),n.d(e,"t",(function(){return bu})),n.d(e,"u",(function(){return Qc})),n.d(e,"v",(function(){return eh})),n.d(e,"w",(function(){return th})),n.d(e,"x",(function(){return fl})),n.d(e,"y",(function(){return Ou})),n.d(e,"z",(function(){return ku})),n.d(e,"A",(function(){return Uu})),n.d(e,"B",(function(){return Pc})),n.d(e,"C",(function(){return Zc})),n.d(e,"D",(function(){return gl})),n.d(e,"E",(function(){return Nu})),n.d(e,"F",(function(){return hl})),n.d(e,"G",(function(){return dl})),n.d(e,"H",(function(){return pl})),n.d(e,"I",(function(){return gc})),n.d(e,"J",(function(){return pc})),n.d(e,"K",(function(){return ll})),n.d(e,"L",(function(){return Vc})),n.d(e,"M",(function(){return xc})),n.d(e,"N",(function(){return Oc})),n.d(e,"O",(function(){return kc})),n.d(e,"P",(function(){return Nc})),n.d(e,"Q",(function(){return Rc})),n.d(e,"R",(function(){return Bc})),n.d(e,"S",(function(){return nh})),n.d(e,"T",(function(){return cc})),n.d(e,"U",(function(){return hc})),n.d(e,"V",(function(){return yl})),n.d(e,"W",(function(){return wl})),n.d(e,"X",(function(){return Kc})),n.d(e,"Y",(function(){return Gc})),n.d(e,"Z",(function(){return uc})),n.d(e,"ab",(function(){return rc})),n.d(e,"bb",(function(){return Bu})),n.d(e,"cb",(function(){return Ru})),n.d(e,"db",(function(){return Xc})),n.d(e,"eb",(function(){return $c})),n.d(e,"fb",(function(){return Fc})),n.d(e,"gb",(function(){return A})),n.d(e,"hb",(function(){return Lc})),n.d(e,"ib",(function(){return fc})),n.d(e,"jb",(function(){return Ac})),n.d(e,"kb",(function(){return Mc})),n.d(e,"lb",(function(){return ml})),n.d(e,"mb",(function(){return sc}));var r=n(2),i=n(3),s=n(5),o=n(1),a=n(4);const u="@firebase/firestore";
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
 */class l{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
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
let c="9.15.0";
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
 */const h=new s.b("@firebase/firestore");function d(){return h.logLevel}function A(t){h.setLogLevel(t)}function f(t,...e){if(h.logLevel<=s.a.DEBUG){const n=e.map(g);h.debug(`Firestore (${c}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=s.a.ERROR){const n=e.map(g);h.error(`Firestore (${c}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=s.a.WARN){const n=e.map(g);h.warn(`Firestore (${c}): ${t}`,...n)}}function g(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function y(t="Unexpected state"){const e=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+t;throw m(e),new Error(e)}function w(t,e){t||y()}function E(t,e){t||y()}function b(t,e){return t}
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends o.c{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class C{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
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
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(l.UNAUTHENTICATED))}shutdown(){}}class _{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class q{constructor(t){this.t=t,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new C;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new C,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new C)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new l(t)}}class T{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=l.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(w(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class U{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new T(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable(()=>e(l.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.A;return this.A=t.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(w("string"==typeof t.token),this.A=t.token,new L(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function j(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class O{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=j(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function k(t,e){return t<e?-1:t>e?1:0}function N(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}function R(t){return t+"\0"}
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
 */class B{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new I(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new I(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new I(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return B.fromMillis(Date.now())}static fromDate(t){return B.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new B(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new B(0,0))}static max(){return new F(new B(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class M{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===M.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof M?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class P extends M{construct(t,e,n){return new P(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new I(v.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new P(e)}static emptyPath(){return new P([])}}const Q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends M{construct(t,e,n){return new K(t,e,n)}static isValidIdentifier(t){return Q.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new I(v.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new I(v.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new I(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new I(v.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(e)}static emptyPath(){return new K([])}}
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
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(P.fromString(t))}static fromName(t){return new G(P.fromString(t).popFirst(5))}static empty(){return new G(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===P.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return P.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new P(t.slice()))}}
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
 */class V{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}function J(t){return t.fields.find(t=>2===t.kind)}function H(t){return t.fields.filter(t=>2!==t.kind)}V.UNKNOWN_ID=-1;class W{constructor(t,e){this.fieldPath=t,this.kind=e}}class Y{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Y(0,Z.min())}}function z(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(1e9===r?new B(n+1,0):new B(n,r));return new Z(i,G.empty(),e)}function X(t){return new Z(t.readTime,t.key,-1)}class Z{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Z(F.min(),G.empty(),-1)}static max(){return new Z(F.max(),G.empty(),-1)}}function $(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=G.comparator(t.documentKey,e.documentKey),0!==n?n:k(t.largestBatchId,e.largestBatchId))}
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
 */const tt="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class et{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
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
 */async function nt(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==tt)throw t;f("LocalStore","Unexpectedly lost primary lease")}
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
 */class rt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new rt((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof rt?e:rt.resolve(e)}catch(t){return rt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):rt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):rt.reject(e)}static resolve(t){return new rt((e,n)=>{e(t)})}static reject(t){return new rt((e,n)=>{n(t)})}static waitFor(t){return new rt((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=rt.resolve(!1);for(const n of t)e=e.next(t=>t?rt.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new rt((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next(t=>{s[u]=t,++o,o===i&&n(s)},t=>r(t))}})}static doWhile(t,e){return new rt((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}
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
 */class it{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.P=new C,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{e.error?this.P.reject(new at(t,e.error)):this.P.resolve()},this.transaction.onerror=e=>{const n=dt(e.target.error);this.P.reject(new at(t,n))}}static open(t,e,n,r){try{return new it(e,t.transaction(r,n))}catch(t){throw new at(e,t)}}get v(){return this.P.promise}abort(t){t&&this.P.reject(t),this.aborted||(f("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new lt(e)}}class st{constructor(t,e,n){this.name=t,this.version=e,this.S=n,12.2===st.D(Object(o.m)())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return f("SimpleDb","Removing database:",t),ct(window.indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!Object(o.o)())return!1;if(st.N())return!0;const t=Object(o.m)(),e=st.D(t),n=0<e&&e<10,r=st.k(t),i=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static N(){var e;return void 0!==t&&"YES"===(null===(e=t.env)||void 0===e?void 0:e.O)}static M(t,e){return t.store(e)}static D(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(t){return this.db||(f("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new at(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new I(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new I(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new at(t,r))},r.onupgradeneeded=t=>{f("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.S.$(e,r.transaction,t.oldVersion,this.version).next(()=>{f("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const i="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.F(t);const e=it.open(this.db,t,i?"readonly":"readwrite",n),s=r(e).next(t=>(e.V(),t)).catch(t=>(e.abort(t),rt.reject(t))).toPromise();return s.catch(()=>{}),await e.v,s}catch(t){const e=t,n="FirebaseError"!==e.name&&s<3;if(f("SimpleDb","Transaction failed with error:",e.message,"Retrying:",n),this.close(),!n)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ot{constructor(t){this.q=t,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(t){this.q=t}done(){this.U=!0}j(t){this.K=t}delete(){return ct(this.q.delete())}}class at extends I{constructor(t,e){super(v.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function ut(t){return"IndexedDbTransactionError"===t.name}class lt{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(f("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(f("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),ct(n)}add(t){return f("SimpleDb","ADD",this.store.name,t,t),ct(this.store.add(t))}get(t){return ct(this.store.get(t)).next(e=>(void 0===e&&(e=null),f("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return f("SimpleDb","DELETE",this.store.name,t),ct(this.store.delete(t))}count(){return f("SimpleDb","COUNT",this.store.name),ct(this.store.count())}W(t,e){const n=this.options(t,e);if(n.index||"function"!=typeof this.store.getAll){const t=this.cursor(n),e=[];return this.H(t,(t,n)=>{e.push(n)}).next(()=>e)}{const t=this.store.getAll(n.range);return new rt((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}})}}J(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new rt((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}})}Y(t,e){f("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.X=!1;const r=this.cursor(n);return this.H(r,(t,e,n)=>n.delete())}Z(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.H(r,e)}tt(t){const e=this.cursor({});return new rt((n,r)=>{e.onerror=t=>{const e=dt(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next(t=>{t?r.continue():n()}):n()}})}H(t,e){const n=[];return new rt((r,i)=>{t.onerror=t=>{i(t.target.error)},t.onsuccess=t=>{const i=t.target.result;if(!i)return void r();const s=new ot(i),o=e(i.primaryKey,i.value,s);if(o instanceof rt){const t=o.catch(t=>(s.done(),rt.reject(t)));n.push(t)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}}).next(()=>rt.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.X?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function ct(t){return new rt((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=dt(t.target.error);n(e)}})}let ht=!1;function dt(t){const e=st.D(Object(o.m)());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ht||(ht=!0,setTimeout(()=>{throw t},0)),t}}return t}class At{constructor(t,e){this.asyncQueue=t,this.et=e,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(t){f("IndexBackiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{f("IndexBackiller","Documents written: "+await this.et.st())}catch(t){ut(t)?f("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await nt(t)}await this.nt(6e4)})}}class ft{constructor(t,e){this.localStore=t,this.persistence=e}async st(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.it(e,t))}it(t,e){const n=new Set;let r=e,i=!0;return rt.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(e=>{if(null!==e&&!n.has(e))return f("IndexBackiller","Processing collection: "+e),this.rt(t,e,r).next(t=>{r-=t,n.add(e)});i=!1})).next(()=>e-r)}rt(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(r=>this.localStore.localDocuments.getNextDocuments(t,e,r,n).next(n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(t,i).next(()=>this.ot(r,n)).next(n=>(f("IndexBackiller","Updating offset: "+n),this.localStore.indexManager.updateCollectionGroup(t,e,n))).next(()=>i.size)}))}ot(t,e){let n=t;return e.changes.forEach((t,e)=>{const r=X(e);$(r,n)>0&&(n=r)}),new Z(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}
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
 */class mt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}mt.at=-1;
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
class pt{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class gt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new gt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof gt&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function yt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Et(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */function bt(t){return null==t}function vt(t){return 0===t&&1/t==-1/0}function It(t){return"number"==typeof t&&Number.isInteger(t)&&!vt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */function Ct(){return"undefined"!=typeof atob}
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
 */class St{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new St(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new St(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}St.EMPTY_BYTE_STRING=new St("");const Dt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(t){if(w(!!t),"string"==typeof t){let e=0;const n=Dt.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qt(t.seconds),nanos:qt(t.nanos)}}function qt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Tt(t){return"string"==typeof t?St.fromBase64String(t):St.fromUint8Array(t)}
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
 */function Ut(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Lt(t){const e=_t(t.mapValue.fields.__local_write_time__.timestampValue);return new B(e.seconds,e.nanos)}
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
 */const xt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},jt={nullValue:"NULL_VALUE"};function Ot(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ut(t)?4:Ht(t)?9007199254740991:10:y()}function kt(t,e){if(t===e)return!0;const n=Ot(t);if(n!==Ot(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lt(t).isEqual(Lt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=_t(t.timestampValue),r=_t(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Tt(t.bytesValue).isEqual(Tt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return qt(t.geoPointValue.latitude)===qt(e.geoPointValue.latitude)&&qt(t.geoPointValue.longitude)===qt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return qt(t.integerValue)===qt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=qt(t.doubleValue),r=qt(e.doubleValue);return n===r?vt(n)===vt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return N(t.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(yt(n)!==yt(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!kt(n[t],r[t])))return!1;return!0}(t,e);default:return y()}}function Nt(t,e){return void 0!==(t.values||[]).find(t=>kt(t,e))}function Rt(t,e){if(t===e)return 0;const n=Ot(t),r=Ot(e);if(n!==r)return k(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=qt(t.integerValue||t.doubleValue),r=qt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Bt(t.timestampValue,e.timestampValue);case 4:return Bt(Lt(t),Lt(e));case 5:return k(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Tt(t),r=Tt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=k(n[t],r[t]);if(0!==e)return e}return k(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=k(qt(t.latitude),qt(e.latitude));return 0!==n?n:k(qt(t.longitude),qt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Rt(n[t],r[t]);if(e)return e}return k(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===xt.mapValue&&e===xt.mapValue)return 0;if(t===xt.mapValue)return 1;if(e===xt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=k(r[t],s[t]);if(0!==e)return e;const o=Rt(n[r[t]],i[s[t]]);if(0!==o)return o}return k(r.length,s.length)}(t.mapValue,e.mapValue);default:throw y()}}function Bt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return k(t,e);const n=_t(t),r=_t(e),i=k(n.seconds,r.seconds);return 0!==i?i:k(n.nanos,r.nanos)}function Ft(t){return function t(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){const e=_t(t);return`time(${e.seconds},${e.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Tt(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,G.fromName(r).toString()):"geoPointValue"in e?`geo(${(n=e.geoPointValue).latitude},${n.longitude})`:"arrayValue"in e?function(e){let n="[",r=!0;for(const i of e.values||[])r?r=!1:n+=",",n+=t(i);return n+"]"}(e.arrayValue):"mapValue"in e?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${t(e.fields[s])}`;return r+"}"}(e.mapValue):y();var n,r}(t)}function Mt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pt(t){return!!t&&"integerValue"in t}function Qt(t){return!!t&&"arrayValue"in t}function Kt(t){return!!t&&"nullValue"in t}function Gt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vt(t){return!!t&&"mapValue"in t}function Jt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wt(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Jt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ht(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}function Wt(t){return"nullValue"in t?jt:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Mt(gt.empty(),G.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:y()}function Yt(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Mt(gt.empty(),G.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?xt:y()}function zt(t,e){const n=Rt(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Xt(t,e){const n=Rt(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}
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
 */class Zt{constructor(t,e){this.position=t,this.inclusive=e}}function $t(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?G.comparator(G.fromName(o.referenceValue),n.key):Rt(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function te(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kt(t.position[n],e.position[n]))return!1;return!0}
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
 */class ee{}class ne extends ee{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new he(t,e,n):"array-contains"===e?new me(t,n):"in"===e?new pe(t,n):"not-in"===e?new ge(t,n):"array-contains-any"===e?new ye(t,n):new ne(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new de(t,n):new Ae(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Rt(e,this.value)):null!==e&&Ot(this.value)===Ot(e)&&this.matchesComparison(Rt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class re extends ee{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new re(t,e)}matches(t){return ie(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(t=>t.isInequality());return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function ie(t){return"and"===t.op}function se(t){return"or"===t.op}function oe(t){return ae(t)&&ie(t)}function ae(t){for(const e of t.filters)if(e instanceof re)return!1;return!0}function ue(t,e){return t instanceof ne?function(t,e){return e instanceof ne&&t.op===e.op&&t.field.isEqual(e.field)&&kt(t.value,e.value)}(t,e):t instanceof re?function(t,e){return e instanceof re&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&ue(n,e.filters[r]),!0)}(t,e):void y()}function le(t,e){const n=t.filters.concat(e);return re.create(n,t.op)}function ce(t){return t instanceof ne?function(t){return`${t.field.canonicalString()} ${t.op} ${Ft(t.value)}`}(t):t instanceof re?function(t){return t.op.toString()+" {"+t.getFilters().map(ce).join(" ,")+"}"}(t):"Filter"}class he extends ne{constructor(t,e,n){super(t,e,n),this.key=G.fromName(n.referenceValue)}matches(t){const e=G.comparator(t.key,this.key);return this.matchesComparison(e)}}class de extends ne{constructor(t,e){super(t,"in",e),this.keys=fe("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ae extends ne{constructor(t,e){super(t,"not-in",e),this.keys=fe("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function fe(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>G.fromName(t.referenceValue))}class me extends ne{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qt(e)&&Nt(e.arrayValue,this.value)}}class pe extends ne{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Nt(this.value.arrayValue,e)}}class ge extends ne{constructor(t,e){super(t,"not-in",e)}matches(t){if(Nt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Nt(this.value.arrayValue,e)}}class ye extends ne{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Nt(this.value.arrayValue,t))}}
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
 */class we{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ee(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class be{constructor(t,e){this.comparator=t,this.root=e||Ie.EMPTY}insert(t,e){return new be(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(t){return new be(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ve(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ve(this.root,t,this.comparator,!1)}getReverseIterator(){return new ve(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ve(this.root,t,this.comparator,!0)}}class ve{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ie{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ie.RED,this.left=null!=r?r:Ie.EMPTY,this.right=null!=i?i:Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ie(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ie.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1,Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ce{constructor(t){this.comparator=t,this.data=new be(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Se(this.data.getIterator())}getIteratorFrom(t){return new Se(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ce))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ce(this.comparator);return e.data=t,e}}class Se{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function De(t){return t.hasNext()?t.getNext():void 0}
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
 */class _e{constructor(t){this.fields=t,t.sort(K.comparator)}static empty(){return new _e([])}unionWith(t){let e=new Ce(K.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new _e(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return N(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
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
 */class qe{constructor(t){this.value=t}static empty(){return new qe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Vt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Jt(e)}setAll(t){let e=K.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Jt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Vt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Vt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){wt(e,(e,n)=>t[e]=n);for(const e of n)delete t[e]}clone(){return new qe(Jt(this.value))}}function Te(t){const e=[];return wt(t.fields,(t,n)=>{const r=new K([t]);if(Vt(n)){const t=Te(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new _e(e)
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
 */}class Ue{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Ue(t,0,F.min(),F.min(),F.min(),qe.empty(),0)}static newFoundDocument(t,e,n,r){return new Ue(t,1,e,F.min(),n,r,0)}static newNoDocument(t,e){return new Ue(t,2,e,F.min(),F.min(),qe.empty(),0)}static newUnknownDocument(t,e){return new Ue(t,3,e,F.min(),F.min(),qe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ue&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Le{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function xe(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Le(t,e,n,r,i,s,o)}function je(t){const e=b(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>function t(e){if(e instanceof ne)return e.field.canonicalString()+e.op.toString()+Ft(e.value);{const n=e.filters.map(e=>t(e)).join(",");return`${e.op}(${n})`}}(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),bt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Ft(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Ft(t)).join(",")),e.ft=t}return e.ft}function Oe(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ee(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ue(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!te(t.startAt,e.startAt)&&te(t.endAt,e.endAt)}function ke(t){return G.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Ne(t,e){return t.filters.filter(t=>t instanceof ne&&t.field.isEqual(e))}function Re(t,e,n){let r=jt,i=!0;for(const n of Ne(t,e)){let t=jt,e=!0;switch(n.op){case"<":case"<=":t=Wt(n.value);break;case"==":case"in":case">=":t=n.value;break;case">":t=n.value,e=!1;break;case"!=":case"not-in":t=jt}zt({value:r,inclusive:i},{value:t,inclusive:e})<0&&(r=t,i=e)}if(null!==n)for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const t=n.position[s];zt({value:r,inclusive:i},{value:t,inclusive:n.inclusive})<0&&(r=t,i=n.inclusive);break}return{value:r,inclusive:i}}function Be(t,e,n){let r=xt,i=!0;for(const n of Ne(t,e)){let t=xt,e=!0;switch(n.op){case">=":case">":t=Yt(n.value),e=!1;break;case"==":case"in":case"<=":t=n.value;break;case"<":t=n.value,e=!1;break;case"!=":case"not-in":t=xt}Xt({value:r,inclusive:i},{value:t,inclusive:e})>0&&(r=t,i=e)}if(null!==n)for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const t=n.position[s];Xt({value:r,inclusive:i},{value:t,inclusive:n.inclusive})>0&&(r=t,i=n.inclusive);break}return{value:r,inclusive:i}}
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
 */class Fe{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Me(t,e,n,r,i,s,o,a){return new Fe(t,e,n,r,i,s,o,a)}function Pe(t){return new Fe(t)}function Qe(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ke(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ge(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Ve(t){return null!==t.collectionGroup}function Je(t){const e=b(t);if(null===e.dt){e.dt=[];const t=Ge(e),n=Ke(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new we(t)),e.dt.push(new we(K.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new we(K.keyField(),t))}}}return e.dt}function He(t){const e=b(t);if(!e._t)if("F"===e.limitType)e._t=xe(e.path,e.collectionGroup,Je(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Je(e)){const e="desc"===n.dir?"asc":"desc";t.push(new we(n.field,e))}const n=e.endAt?new Zt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Zt(e.startAt.position,e.startAt.inclusive):null;e._t=xe(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function We(t,e){e.getFirstInequalityField(),Ge(t);const n=t.filters.concat([e]);return new Fe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ye(t,e,n){return new Fe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ze(t,e){return Oe(He(t),He(e))&&t.limitType===e.limitType}function Xe(t){return`${je(He(t))}|lt:${t.limitType}`}function Ze(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>ce(t)).join(", ")}]`),bt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Ft(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Ft(t)).join(",")),`Target(${e})`}(He(t))}; limitType=${t.limitType})`}function $e(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):G.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Je(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=$t(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Je(t),e))&&!(t.endAt&&!function(t,e,n){const r=$t(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Je(t),e))}(t,e)}function tn(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function en(t){return(e,n)=>{let r=!1;for(const i of Je(t)){const t=nn(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function nn(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Rt(r,i):y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
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
 */function rn(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vt(e)?"-0":e}}function sn(t){return{integerValue:""+t}}function on(t,e){return It(e)?sn(e):rn(t,e)}
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
 */class an{constructor(){this._=void 0}}function un(t,e,n){return t instanceof hn?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof dn?An(t,e):t instanceof fn?mn(t,e):function(t,e){const n=cn(t,e),r=gn(n)+gn(t.gt);return Pt(n)&&Pt(t.gt)?sn(r):rn(t.yt,r)}(t,e)}function ln(t,e,n){return t instanceof dn?An(t,e):t instanceof fn?mn(t,e):n}function cn(t,e){return t instanceof pn?Pt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class hn extends an{}class dn extends an{constructor(t){super(),this.elements=t}}function An(t,e){const n=yn(e);for(const e of t.elements)n.some(t=>kt(t,e))||n.push(e);return{arrayValue:{values:n}}}class fn extends an{constructor(t){super(),this.elements=t}}function mn(t,e){let n=yn(e);for(const e of t.elements)n=n.filter(t=>!kt(t,e));return{arrayValue:{values:n}}}class pn extends an{constructor(t,e){super(),this.yt=t,this.gt=e}}function gn(t){return qt(t.integerValue||t.doubleValue)}function yn(t){return Qt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class wn{constructor(t,e){this.field=t,this.transform=e}}class En{constructor(t,e){this.version=t,this.transformResults=e}}class bn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bn}static exists(t){return new bn(void 0,t)}static updateTime(t){return new bn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class In{}function Cn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new On(t.key,bn.none()):new Tn(t.key,t.data,bn.none());{const n=t.data,r=qe.empty();let i=new Ce(K.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Un(t.key,r,new _e(i.toArray()),bn.none())}}function Sn(t,e,n){t instanceof Tn?function(t,e,n){const r=t.value.clone(),i=xn(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Un?function(t,e,n){if(!vn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=xn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ln(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Dn(t,e,n,r){return t instanceof Tn?function(t,e,n,r){if(!vn(t.precondition,e))return n;const i=t.value.clone(),s=jn(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Un?function(t,e,n,r){if(!vn(t.precondition,e))return n;const i=jn(t.fieldTransforms,r,e),s=e.data;return s.setAll(Ln(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return vn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function _n(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=cn(r.transform,t||null);null!=i&&(null===n&&(n=qe.empty()),n.set(r.field,i))}return n||null}function qn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&N(t,e,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof dn&&e instanceof dn||t instanceof fn&&e instanceof fn?N(t.elements,e.elements,kt):t instanceof pn&&e instanceof pn?kt(t.gt,e.gt):t instanceof hn&&e instanceof hn}(t.transform,e.transform)}(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tn extends In{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Un extends In{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ln(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xn(t,e,n){const r=new Map;w(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ln(o,a,n[i]))}return r}function jn(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,un(t,s,e))}return r}class On extends In{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kn extends In{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Nn{constructor(t){this.count=t}}
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
 */var Rn,Bn;function Fn(t){switch(t){default:return y();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function Mn(t){if(void 0===t)return m("GRPC error has no .code"),v.UNKNOWN;switch(t){case Rn.OK:return v.OK;case Rn.CANCELLED:return v.CANCELLED;case Rn.UNKNOWN:return v.UNKNOWN;case Rn.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case Rn.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case Rn.INTERNAL:return v.INTERNAL;case Rn.UNAVAILABLE:return v.UNAVAILABLE;case Rn.UNAUTHENTICATED:return v.UNAUTHENTICATED;case Rn.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case Rn.NOT_FOUND:return v.NOT_FOUND;case Rn.ALREADY_EXISTS:return v.ALREADY_EXISTS;case Rn.PERMISSION_DENIED:return v.PERMISSION_DENIED;case Rn.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case Rn.ABORTED:return v.ABORTED;case Rn.OUT_OF_RANGE:return v.OUT_OF_RANGE;case Rn.UNIMPLEMENTED:return v.UNIMPLEMENTED;case Rn.DATA_LOSS:return v.DATA_LOSS;default:return y()}}(Bn=Rn||(Rn={}))[Bn.OK=0]="OK",Bn[Bn.CANCELLED=1]="CANCELLED",Bn[Bn.UNKNOWN=2]="UNKNOWN",Bn[Bn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bn[Bn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bn[Bn.NOT_FOUND=5]="NOT_FOUND",Bn[Bn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bn[Bn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bn[Bn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bn[Bn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bn[Bn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bn[Bn.ABORTED=10]="ABORTED",Bn[Bn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bn[Bn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bn[Bn.INTERNAL=13]="INTERNAL",Bn[Bn.UNAVAILABLE=14]="UNAVAILABLE",Bn[Bn.DATA_LOSS=15]="DATA_LOSS";
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
class Pn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){wt(this.inner,(e,n)=>{for(const[e,r]of n)t(e,r)})}isEmpty(){return Et(this.inner)}size(){return this.innerSize}}
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
 */const Qn=new be(G.comparator);function Kn(){return Qn}const Gn=new be(G.comparator);function Vn(...t){let e=Gn;for(const n of t)e=e.insert(n.key,n);return e}function Jn(t){let e=Gn;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Hn(){return Yn()}function Wn(){return Yn()}function Yn(){return new Pn(t=>t.toString(),(t,e)=>t.isEqual(e))}const zn=new be(G.comparator),Xn=new Ce(G.comparator);function Zn(...t){let e=Xn;for(const n of t)e=e.add(n);return e}const $n=new Ce(k);function tr(){return $n}
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
 */class er{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,nr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new er(F.min(),r,tr(),Kn(),Zn())}}class nr{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new nr(n,e,Zn(),Zn(),Zn())}}
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
 */class rr{constructor(t,e,n,r){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=r}}class ir{constructor(t,e){this.targetId=t,this.Et=e}}class sr{constructor(t,e,n=St.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class or{constructor(){this.At=0,this.Rt=lr(),this.bt=St.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=Zn(),e=Zn(),n=Zn();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new nr(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=lr()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ar{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=Kn(),this.qt=ur(),this.Ut=new Ce(k)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach((t,n)=>{this.zt(n)&&e(n)})}Jt(t){const e=t.targetId,n=t.Et.count,r=this.Yt(e);if(r){const t=r.target;if(ke(t))if(0===n){const n=new G(t.path);this.Qt(e,n,Ue.newNoDocument(n,F.min()))}else w(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&ke(i.target)){const e=new G(i.target.path);null!==this.Lt.get(e)||this.te(r,e)||this.Qt(r,e,Ue.newNoDocument(e,t))}n.St&&(e.set(r,n.Ct()),n.xt())}});let n=Zn();this.qt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.Yt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.Lt.forEach((e,n)=>n.setReadTime(t));const r=new er(t,e,this.Ut,this.Lt,n);return this.Lt=Kn(),this.qt=ur(),this.Ut=new Ce(k),r}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,e)?r.Nt(e,1):r.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new or,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new Ce(k),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new or),this.$t.getRemoteKeysForTarget(t).forEach(e=>{this.Qt(t,e,null)})}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}}function ur(){return new be(G.comparator)}function lr(){return new be(G.comparator)}
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
 */const cr={asc:"ASCENDING",desc:"DESCENDING"},hr={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dr={and:"AND",or:"OR"};class Ar{constructor(t,e){this.databaseId=t,this.wt=e}}function fr(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mr(t,e){return t.wt?e.toBase64():e.toUint8Array()}function pr(t,e){return fr(t,e.toTimestamp())}function gr(t){return w(!!t),F.fromTimestamp(function(t){const e=_t(t);return new B(e.seconds,e.nanos)}(t))}function yr(t,e){return function(t){return new P(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function wr(t){const e=P.fromString(t);return w(Fr(e)),e}function Er(t,e){return yr(t.databaseId,e.path)}function br(t,e){const n=wr(e);if(n.get(1)!==t.databaseId.projectId)throw new I(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Sr(n))}function vr(t,e){return yr(t.databaseId,e)}function Ir(t){const e=wr(t);return 4===e.length?P.emptyPath():Sr(e)}function Cr(t){return new P(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sr(t){return w(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Dr(t,e,n){return{name:Er(t,e),fields:n.value.mapValue.fields}}function _r(t,e,n){const r=br(t,e.name),i=gr(e.updateTime),s=e.createTime?gr(e.createTime):F.min(),o=new qe({mapValue:{fields:e.fields}}),a=Ue.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function qr(t,e){let n;if(e instanceof Tn)n={update:Dr(t,e.key,e.value)};else if(e instanceof On)n={delete:Er(t,e.key)};else if(e instanceof Un)n={update:Dr(t,e.key,e.data),updateMask:Br(e.fieldMask)};else{if(!(e instanceof kn))return y();n={verify:Er(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof hn)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof dn)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof fn)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof pn)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:pr(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function Tr(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?bn.updateTime(gr(t.updateTime)):void 0!==t.exists?bn.exists(t.exists):bn.none()}(e.currentDocument):bn.none(),r=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)w("REQUEST_TIME"===e.setToServerValue),n=new hn;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new dn(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new fn(t)}else"increment"in e?n=new pn(t,e.increment):y();const r=K.fromServerFormat(e.fieldPath);return new wn(r,n)}(t,e)):[];if(e.update){e.update.name;const i=br(t,e.update.name),s=new qe({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new _e(e.map(t=>K.fromServerFormat(t)))}(e.updateMask);return new Un(i,s,t,n,r)}return new Tn(i,s,n,r)}if(e.delete){const r=br(t,e.delete);return new On(r,n)}if(e.verify){const r=br(t,e.verify);return new kn(r,n)}return y()}function Ur(t,e){return{documents:[vr(t,e.path)]}}function Lr(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=vr(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vr(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return function t(e){return e instanceof ne?function(t){if("=="===t.op){if(Gt(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NAN"}};if(Kt(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Gt(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NAN"}};if(Kt(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(t.field),op:Or(t.op),value:t.value}}}(e):e instanceof re?function(e){const n=e.getFilters().map(e=>t(e));return 1===n.length?n[0]:{compositeFilter:{op:kr(e.op),filters:n}}}(e):y()}(re.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Nr(t.field),direction:jr(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.wt||bt(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function xr(t){let e=Ir(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){w(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=function t(e){return void 0!==e.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Rr(t.unaryFilter.field);return ne.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Rr(t.unaryFilter.field);return ne.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Rr(t.unaryFilter.field);return ne.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Rr(t.unaryFilter.field);return ne.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}(e):void 0!==e.fieldFilter?function(t){return ne.create(Rr(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return re.create(e.compositeFilter.filters.map(e=>t(e)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return y()}}(e.compositeFilter.op))}(e):y()}(t);return e instanceof re&&oe(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new we(Rr(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,bt(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new Zt(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new Zt(n,e)}(n.endAt)),Me(e,i,o,s,a,"F",u,l)}function jr(t){return cr[t]}function Or(t){return hr[t]}function kr(t){return dr[t]}function Nr(t){return{fieldPath:t.canonicalString()}}function Rr(t){return K.fromServerFormat(t.fieldPath)}function Br(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Fr(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function Mr(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qr(e)),e=Pr(t.get(n),e);return Qr(e)}function Pr(t,e){let n=e;const r=t.length;for(let e=0;e<r;e++){const r=t.charAt(e);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Qr(t){return t+""}function Kr(t){const e=t.length;if(w(e>=2),2===e)return w(""===t.charAt(0)&&""===t.charAt(1)),P.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const e=t.indexOf("",s);switch((e<0||e>n)&&y(),t.charAt(e+1)){case"":const n=t.substring(s,e);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=t.substring(s,e),i+="\0";break;case"":i+=t.substring(s,e+1);break;default:y()}s=e+2}return new P(r)}
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
 */const Gr=["userId","batchId"];
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
 */function Vr(t,e){return[t,Mr(e)]}function Jr(t,e,n){return[t,Mr(e),n]}const Hr={},Wr=["prefixPath","collectionGroup","readTime","documentId"],Yr=["prefixPath","collectionGroup","documentId"],zr=["collectionGroup","readTime","prefixPath","documentId"],Xr=["canonicalId","targetId"],Zr=["targetId","path"],$r=["path","targetId"],ti=["collectionId","parent"],ei=["indexId","uid"],ni=["uid","sequenceNumber"],ri=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ii=["indexId","uid","orderedDocumentKey"],si=["userId","collectionPath","documentId"],oi=["userId","collectionPath","largestBatchId"],ai=["userId","collectionGroup","largestBatchId"],ui=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],li=[...ui,"documentOverlays"],ci=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],hi=ci,di=[...hi,"indexConfiguration","indexState","indexEntries"];
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
 */class Ai extends et{constructor(t,e){super(),this.se=t,this.currentSequenceNumber=e}}function fi(t,e){const n=b(t);return st.M(n.se,e)}
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
 */class mi{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&Sn(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Dn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Dn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Wn();return this.mutations.forEach(r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Cn(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Zn())}isEqual(t){return this.batchId===t.batchId&&N(this.mutations,t.mutations,(t,e)=>qn(t,e))&&N(this.baseMutations,t.baseMutations,(t,e)=>qn(t,e))}}class pi{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){w(t.mutations.length===n.length);let r=zn;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new pi(t,e,n,r)}}
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
 */class gi{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class yi{constructor(t,e,n,r,i=F.min(),s=F.min(),o=St.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new yi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class wi{constructor(t){this.ie=t}}function Ei(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:bi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(t,e){return{name:Er(t,e.key),fields:e.data.value.mapValue.fields,updateTime:fr(t,e.version.toTimestamp()),createTime:fr(t,e.createTime.toTimestamp())}}(t.ie,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:vi(e.version)};else{if(!e.isUnknownDocument())return y();r.unknownDocument={path:n.path.toArray(),version:vi(e.version)}}return r}function bi(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function vi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ii(t){const e=new B(t.seconds,t.nanoseconds);return F.fromTimestamp(e)}function Ci(t,e){const n=(e.baseMutations||[]).map(e=>Tr(t.ie,e));for(let t=0;t<e.mutations.length-1;++t){const n=e.mutations[t];if(t+1<e.mutations.length&&void 0!==e.mutations[t+1].transform){const r=e.mutations[t+1];n.updateTransforms=r.transform.fieldTransforms,e.mutations.splice(t+1,1),++t}}const r=e.mutations.map(e=>Tr(t.ie,e)),i=B.fromMillis(e.localWriteTimeMs);return new mi(e.batchId,i,n,r)}function Si(t){const e=Ii(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?Ii(t.lastLimboFreeSnapshotVersion):F.min();let r;var i;return void 0!==t.query.documents?(w(1===(i=t.query).documents.length),r=He(Pe(Ir(i.documents[0])))):r=function(t){return He(xr(t))}(t.query),new yi(r,t.targetId,0,t.lastListenSequenceNumber,e,n,St.fromBase64String(t.resumeToken))}function Di(t,e){const n=vi(e.snapshotVersion),r=vi(e.lastLimboFreeSnapshotVersion);let i;i=ke(e.target)?Ur(t.ie,e.target):Lr(t.ie,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:je(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function _i(t){const e=xr({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ye(e,e.limit,"L"):e}function qi(t,e){return new gi(e.largestBatchId,Tr(t.ie,e.overlayMutation))}function Ti(t,e){const n=e.path.lastSegment();return[t,Mr(e.path.popLast()),n]}function Ui(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:vi(r.readTime),documentKey:Mr(r.documentKey.path),largestBatchId:r.largestBatchId}}
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
 */class Li{getBundleMetadata(t,e){return xi(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:Ii(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return xi(t).put({bundleId:(n=e).id,createTime:vi(gr(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return ji(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:_i(e.bundledQuery),readTime:Ii(e.readTime)};var e})}saveNamedQuery(t,e){return ji(t).put(function(t){return{name:t.name,readTime:vi(gr(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function xi(t){return fi(t,"bundles")}function ji(t){return fi(t,"namedQueries")}
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
 */class Oi{constructor(t,e){this.yt=t,this.userId=e}static re(t,e){const n=e.uid||"";return new Oi(t,n)}getOverlay(t,e){return ki(t).get(Ti(this.userId,e)).next(t=>t?qi(this.yt,t):null)}getOverlays(t,e){const n=Hn();return rt.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){const r=[];return n.forEach((n,i)=>{const s=new gi(e,i);r.push(this.oe(t,s))}),rt.waitFor(r)}removeOverlaysForBatchId(t,e,n){const r=new Set;e.forEach(t=>r.add(Mr(t.getCollectionPath())));const i=[];return r.forEach(e=>{const r=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,n+1],!1,!0);i.push(ki(t).Y("collectionPathOverlayIndex",r))}),rt.waitFor(i)}getOverlaysForCollection(t,e,n){const r=Hn(),i=Mr(e),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ki(t).W("collectionPathOverlayIndex",s).next(t=>{for(const e of t){const t=qi(this.yt,e);r.set(t.getKey(),t)}return r})}getOverlaysForCollectionGroup(t,e,n,r){const i=Hn();let s;const o=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return ki(t).Z({index:"collectionGroupOverlayIndex",range:o},(t,e,n)=>{const o=qi(this.yt,e);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}oe(t,e){return ki(t).put(function(t,e,n){const[r,i,s]=Ti(e,n.mutation.key);return{userId:e,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:qr(t.ie,n.mutation)}}(this.yt,this.userId,e))}}function ki(t){return fi(t,"documentOverlays")}
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
 */class Ni{constructor(){}ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(qt(t.integerValue));else if("doubleValue"in t){const n=qt(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),vt(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(""+(n.seconds||"")),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(Tt(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Ht(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):y()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),G.fromName(t).path.forEach(t=>{this.he(e,60),this.pe(t,e)})}he(t,e){t.le(e)}_e(t){t.le(2)}}function Ri(t){if(0===t)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function Bi(t){const e=64-function(t){let e=0;for(let n=0;n<8;++n){const r=Ri(255&t[n]);if(e+=r,8!==r)break}return e}(t);return Math.ceil(e/8)}Ni.Ie=new Ni;class Fi{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ee(n.value),n=e.next();this.Ae()}Re(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.be(n.value),n=e.next();this.Pe()}ve(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.Ee(t);else if(t<2048)this.Ee(960|t>>>6),this.Ee(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.Ee(480|t>>>12),this.Ee(128|63&t>>>6),this.Ee(128|63&t);else{const t=e.codePointAt(0);this.Ee(240|t>>>18),this.Ee(128|63&t>>>12),this.Ee(128|63&t>>>6),this.Ee(128|63&t)}}this.Ae()}Ve(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.be(t);else if(t<2048)this.be(960|t>>>6),this.be(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.be(480|t>>>12),this.be(128|63&t>>>6),this.be(128|63&t);else{const t=e.codePointAt(0);this.be(240|t>>>18),this.be(128|63&t>>>12),this.be(128|63&t>>>6),this.be(128|63&t)}}this.Pe()}Se(t){const e=this.De(t),n=Bi(e);this.Ce(1+n),this.buffer[this.position++]=255&n;for(let t=e.length-n;t<e.length;++t)this.buffer[this.position++]=255&e[t]}xe(t){const e=this.De(t),n=Bi(e);this.Ce(1+n),this.buffer[this.position++]=~(255&n);for(let t=e.length-n;t<e.length;++t)this.buffer[this.position++]=~(255&e[t])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(t){this.Ce(t.length),this.buffer.set(t,this.position),this.position+=t.length}Fe(){return this.buffer.slice(0,this.position)}De(t){const e=function(t){const e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,t,!1),new Uint8Array(e.buffer)}(t),n=0!=(128&e[0]);e[0]^=n?255:128;for(let t=1;t<e.length;++t)e[t]^=n?255:0;return e}Ee(t){const e=255&t;0===e?(this.ke(0),this.ke(255)):255===e?(this.ke(255),this.ke(0)):this.ke(e)}be(t){const e=255&t;0===e?(this.Me(0),this.Me(255)):255===e?(this.Me(255),this.Me(0)):this.Me(t)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(t){this.Ce(1),this.buffer[this.position++]=t}Me(t){this.Ce(1),this.buffer[this.position++]=~t}Ce(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Mi{constructor(t){this.$e=t}we(t){this.$e.Te(t)}fe(t){this.$e.ve(t)}le(t){this.$e.Se(t)}ae(){this.$e.Ne()}}class Pi{constructor(t){this.$e=t}we(t){this.$e.Re(t)}fe(t){this.$e.Ve(t)}le(t){this.$e.xe(t)}ae(){this.$e.Oe()}}class Qi{constructor(){this.$e=new Fi,this.Be=new Mi(this.$e),this.Le=new Pi(this.$e)}seed(t){this.$e.seed(t)}qe(t){return 0===t?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}
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
 */class Ki{constructor(t,e,n,r){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=r}Ue(){const t=this.directionalValue.length,e=0===t||255===this.directionalValue[t-1]?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new Ki(this.indexId,this.documentKey,this.arrayValue,n)}}function Gi(t,e){let n=t.indexId-e.indexId;return 0!==n?n:(n=Vi(t.arrayValue,e.arrayValue),0!==n?n:(n=Vi(t.directionalValue,e.directionalValue),0!==n?n:G.comparator(t.documentKey,e.documentKey)))}function Vi(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(0!==r)return r}return t.length-e.length}
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
 */class Ji{constructor(t){this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.Ke=t.orderBy,this.Ge=[];for(const e of t.filters){const t=e;t.isInequality()?this.Qe=t:this.Ge.push(t)}}je(t){w(t.collectionGroup===this.collectionId);const e=J(t);if(void 0!==e&&!this.We(e))return!1;const n=H(t);let r=0,i=0;for(;r<n.length&&this.We(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Qe){const t=n[r];if(!this.ze(this.Qe,t)||!this.He(this.Ke[i++],t))return!1;++r}for(;r<n.length;++r){const t=n[r];if(i>=this.Ke.length||!this.He(this.Ke[i++],t))return!1}return!0}We(t){for(const e of this.Ge)if(this.ze(e,t))return!0;return!1}ze(t,e){if(void 0===t||!t.field.isEqual(e.fieldPath))return!1;const n="array-contains"===t.op||"array-contains-any"===t.op;return 2===e.kind===n}He(t,e){return!!t.field.isEqual(e.fieldPath)&&(0===e.kind&&"asc"===t.dir||1===e.kind&&"desc"===t.dir)}}
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
 */function Hi(t){if(0===t.getFilters().length)return[];const e=function t(e){if(w(e instanceof ne||e instanceof re),e instanceof ne)return e;if(1===e.filters.length)return t(e.filters[0]);const n=e.filters.map(e=>t(e));let r=re.create(n,e.op);return r=$i(r),zi(r)?r:(w(r instanceof re),w(ie(r)),w(r.filters.length>1),r.filters.reduce((t,e)=>Xi(t,e)))}(function t(e){var n,r;if(w(e instanceof ne||e instanceof re),e instanceof ne){if(e instanceof pe){const t=(null===(r=null===(n=e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(t=>ne.create(e.field,"==",t)))||[];return re.create(t,"or")}return e}const i=e.filters.map(e=>t(e));return re.create(i,e.op)}(t));return w(zi(e)),Wi(e)||Yi(e)?[e]:e.getFilters()}function Wi(t){return t instanceof ne}function Yi(t){return t instanceof re&&oe(t)}function zi(t){return Wi(t)||Yi(t)||function(t){if(t instanceof re&&se(t)){for(const e of t.getFilters())if(!Wi(e)&&!Yi(e))return!1;return!0}return!1}(t)}function Xi(t,e){let n;return w(t instanceof ne||t instanceof re),w(e instanceof ne||e instanceof re),n=t instanceof ne?e instanceof ne?function(t,e){return re.create([t,e],"and")}(t,e):Zi(t,e):e instanceof ne?Zi(e,t):function(t,e){if(w(t.filters.length>0&&e.filters.length>0),ie(t)&&ie(e))return le(t,e.getFilters());const n=se(t)?t:e,r=se(t)?e:t,i=n.filters.map(t=>Xi(t,r));return re.create(i,"or")}(t,e),$i(n)}function Zi(t,e){if(ie(e))return le(e,t.getFilters());{const n=e.filters.map(e=>Xi(t,e));return re.create(n,"or")}}function $i(t){if(w(t instanceof ne||t instanceof re),t instanceof ne)return t;const e=t.getFilters();if(1===e.length)return $i(e[0]);if(ae(t))return t;const n=e.map(t=>$i(t)),r=[];return n.forEach(e=>{e instanceof ne?r.push(e):e instanceof re&&(e.op===t.op?r.push(...e.filters):r.push(e))}),1===r.length?r[0]:re.create(r,t.op)
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
 */}class ts{constructor(){this.Je=new es}addToCollectionParentIndex(t,e){return this.Je.add(e),rt.resolve()}getCollectionParents(t,e){return rt.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return rt.resolve()}deleteFieldIndex(t,e){return rt.resolve()}getDocumentsMatchingTarget(t,e){return rt.resolve(null)}getIndexType(t,e){return rt.resolve(0)}getFieldIndexes(t,e){return rt.resolve([])}getNextCollectionGroupToUpdate(t){return rt.resolve(null)}getMinOffset(t,e){return rt.resolve(Z.min())}getMinOffsetFromCollectionGroup(t,e){return rt.resolve(Z.min())}updateCollectionGroup(t,e,n){return rt.resolve()}updateIndexEntries(t,e){return rt.resolve()}}class es{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ce(P.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ce(P.comparator)).toArray()}}
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
 */const ns=new Uint8Array(0);class rs{constructor(t,e){this.user=t,this.databaseId=e,this.Ye=new es,this.Xe=new Pn(t=>je(t),(t,e)=>Oe(t,e)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Ye.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener(()=>{this.Ye.add(e)});const i={collectionId:n,parent:Mr(r)};return is(t).put(i)}return rt.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[R(e),""],!1,!0);return is(t).W(r).next(t=>{for(const r of t){if(r.collectionId!==e)break;n.push(Kr(r.parent))}return n})}addFieldIndex(t,e){const n=os(t),r=function(t){return{indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(t=>[t.fieldPath.canonicalString(),t.kind])}}(e);delete r.indexId;const i=n.add(r);if(e.indexState){const n=as(t);return i.next(t=>{n.put(Ui(t,this.user,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=os(t),r=as(t),i=ss(t);return n.delete(e.indexId).next(()=>r.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}getDocumentsMatchingTarget(t,e){const n=ss(t);let r=!0;const i=new Map;return rt.forEach(this.Ze(e),e=>this.tn(t,e).next(t=>{r&&(r=!!t),i.set(e,t)})).next(()=>{if(r){let t=Zn();const r=[];return rt.forEach(i,(i,s)=>{var o;f("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(t=>`${t.fieldPath}:${t.kind}`).join(",")}`} to execute ${je(e)}`);const a=function(t,e){const n=J(e);if(void 0===n)return null;for(const e of Ne(t,n.fieldPath))switch(e.op){case"array-contains-any":return e.value.arrayValue.values||[];case"array-contains":return[e.value]}return null}(s,i),u=function(t,e){const n=new Map;for(const r of H(e))for(const e of Ne(t,r.fieldPath))switch(e.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),e.value),Array.from(n.values())}return null}(s,i),l=function(t,e){const n=[];let r=!0;for(const i of H(e)){const e=0===i.kind?Re(t,i.fieldPath,t.startAt):Be(t,i.fieldPath,t.startAt);n.push(e.value),r&&(r=e.inclusive)}return new Zt(n,r)}(s,i),c=function(t,e){const n=[];let r=!0;for(const i of H(e)){const e=0===i.kind?Be(t,i.fieldPath,t.endAt):Re(t,i.fieldPath,t.endAt);n.push(e.value),r&&(r=e.inclusive)}return new Zt(n,r)}(s,i),h=this.en(i,s,l),d=this.en(i,s,c),A=this.nn(i,s,u),m=this.sn(i.indexId,a,h,l.inclusive,d,c.inclusive,A);return rt.forEach(m,i=>n.J(i,e.limit).next(e=>{e.forEach(e=>{const n=G.fromSegments(e.documentKey);t.has(n)||(t=t.add(n),r.push(n))})}))}).next(()=>r)}return rt.resolve(null)})}Ze(t){let e=this.Xe.get(t);return e||(e=0===t.filters.length?[t]:Hi(re.create(t.filters,"and")).map(e=>xe(t.path,t.collectionGroup,t.orderBy,e.getFilters(),t.limit,t.startAt,t.endAt)),this.Xe.set(t,e),e)}sn(t,e,n,r,i,s,o){const a=(null!=e?e.length:1)*Math.max(n.length,i.length),u=a/(null!=e?e.length:1),l=[];for(let c=0;c<a;++c){const a=e?this.rn(e[c/u]):ns,h=this.on(t,a,n[c%u],r),d=this.un(t,a,i[c%u],s),A=o.map(e=>this.on(t,a,e,!0));l.push(...this.createRange(h,d,A))}return l}on(t,e,n,r){const i=new Ki(t,G.empty(),e,n);return r?i:i.Ue()}un(t,e,n,r){const i=new Ki(t,G.empty(),e,n);return r?i.Ue():i}tn(t,e){const n=new Ji(e),r=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,r).next(t=>{let e=null;for(const r of t)n.je(r)&&(!e||r.fields.length>e.fields.length)&&(e=r);return e})}getIndexType(t,e){let n=2;const r=this.Ze(e);return rt.forEach(r,e=>this.tn(t,e).next(t=>{t?0!==n&&t.fields.length<function(t){let e=new Ce(K.comparator),n=!1;for(const r of t.filters)for(const t of r.getFlattenedFilters())t.field.isKeyField()||("array-contains"===t.op||"array-contains-any"===t.op?n=!0:e=e.add(t.field));for(const n of t.orderBy)n.field.isKeyField()||(e=e.add(n.field));return e.size+(n?1:0)}(e)&&(n=1):n=0})).next(()=>function(t){return null!==t.limit}(e)&&r.length>1&&2===n?1:n)}cn(t,e){const n=new Qi;for(const r of H(t)){const t=e.data.field(r.fieldPath);if(null==t)return null;const i=n.qe(r.kind);Ni.Ie.ue(t,i)}return n.Fe()}rn(t){const e=new Qi;return Ni.Ie.ue(t,e.qe(0)),e.Fe()}an(t,e){const n=new Qi;return Ni.Ie.ue(Mt(this.databaseId,e),n.qe(function(t){const e=H(t);return 0===e.length?0:e[e.length-1].kind}(t))),n.Fe()}nn(t,e,n){if(null===n)return[];let r=[];r.push(new Qi);let i=0;for(const s of H(t)){const t=n[i++];for(const n of r)if(this.hn(e,s.fieldPath)&&Qt(t))r=this.ln(r,s,t);else{const e=n.qe(s.kind);Ni.Ie.ue(t,e)}}return this.fn(r)}en(t,e,n){return this.nn(t,e,n.position)}fn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Fe();return e}ln(t,e,n){const r=[...t],i=[];for(const t of n.arrayValue.values||[])for(const n of r){const r=new Qi;r.seed(n.Fe()),Ni.Ie.ue(t,r.qe(e.kind)),i.push(r)}return i}hn(t,e){return!!t.filters.find(t=>t instanceof ne&&t.field.isEqual(e)&&("in"===t.op||"not-in"===t.op))}getFieldIndexes(t,e){const n=os(t),r=as(t);return(e?n.W("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.W()).next(t=>{const e=[];return rt.forEach(t,t=>r.get([t.indexId,this.uid]).next(n=>{e.push(function(t,e){const n=e?new Y(e.sequenceNumber,new Z(Ii(e.readTime),new G(Kr(e.documentKey)),e.largestBatchId)):Y.empty(),r=t.fields.map(([t,e])=>new W(K.fromServerFormat(t),e));return new V(t.indexId,t.collectionGroup,r,n)}(t,n))})).next(()=>e)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(t=>0===t.length?null:(t.sort((t,e)=>{const n=t.indexState.sequenceNumber-e.indexState.sequenceNumber;return 0!==n?n:k(t.collectionGroup,e.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(t,e,n){const r=os(t),i=as(t);return this.dn(t).next(t=>r.W("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(e=>rt.forEach(e,e=>i.put(Ui(e.indexId,this.user,t,n)))))}updateIndexEntries(t,e){const n=new Map;return rt.forEach(e,(e,r)=>{const i=n.get(e.collectionGroup);return(i?rt.resolve(i):this.getFieldIndexes(t,e.collectionGroup)).next(i=>(n.set(e.collectionGroup,i),rt.forEach(i,n=>this._n(t,e,n).next(e=>{const i=this.wn(r,n);return e.isEqual(i)?rt.resolve():this.mn(t,r,n,e,i)}))))})}gn(t,e,n,r){return ss(t).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.an(n,e.key),documentKey:e.key.path.toArray()})}yn(t,e,n,r){return ss(t).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.an(n,e.key),e.key.path.toArray()])}_n(t,e,n){const r=ss(t);let i=new Ce(Gi);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.an(n,e)])},(t,r)=>{i=i.add(new Ki(n.indexId,e,r.arrayValue,r.directionalValue))}).next(()=>i)}wn(t,e){let n=new Ce(Gi);const r=this.cn(e,t);if(null==r)return n;const i=J(e);if(null!=i){const s=t.data.field(i.fieldPath);if(Qt(s))for(const i of s.arrayValue.values||[])n=n.add(new Ki(e.indexId,t.key,this.rn(i),r))}else n=n.add(new Ki(e.indexId,t.key,ns,r));return n}mn(t,e,n,r,i){f("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const s=[];return function(t,e,n,r,i){const s=t.getIterator(),o=e.getIterator();let a=De(s),u=De(o);for(;a||u;){let t=!1,e=!1;if(a&&u){const r=n(a,u);r<0?e=!0:r>0&&(t=!0)}else null!=a?e=!0:t=!0;t?(r(u),u=De(o)):e?(i(a),a=De(s)):(a=De(s),u=De(o))}}(r,i,Gi,r=>{s.push(this.gn(t,e,n,r))},r=>{s.push(this.yn(t,e,n,r))}),rt.waitFor(s)}dn(t){let e=1;return as(t).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(t,n,r)=>{r.done(),e=n.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((t,e)=>Gi(t,e)).filter((t,e,n)=>!e||0!==Gi(t,n[e-1]));const r=[];r.push(t);for(const i of n){const n=Gi(i,t),s=Gi(i,e);if(0===n)r[0]=t.Ue();else if(n>0&&s<0)r.push(i),r.push(i.Ue());else if(s>0)break}r.push(e);const i=[];for(let t=0;t<r.length;t+=2){if(this.pn(r[t],r[t+1]))return[];const e=[r[t].indexId,this.uid,r[t].arrayValue,r[t].directionalValue,ns,[]],n=[r[t+1].indexId,this.uid,r[t+1].arrayValue,r[t+1].directionalValue,ns,[]];i.push(IDBKeyRange.bound(e,n))}return i}pn(t,e){return Gi(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(us)}getMinOffset(t,e){return rt.mapArray(this.Ze(e),e=>this.tn(t,e).next(t=>t||y())).next(us)}}function is(t){return fi(t,"collectionParents")}function ss(t){return fi(t,"indexEntries")}function os(t){return fi(t,"indexConfiguration")}function as(t){return fi(t,"indexState")}function us(t){w(0!==t.length);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;$(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Z(e.readTime,e.documentKey,n)}
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
 */const ls={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class cs{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new cs(t,cs.DEFAULT_COLLECTION_PERCENTILE,cs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */function hs(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(t,e,n)=>(a++,n.delete()));s.push(u.next(()=>{w(1===a)}));const l=[];for(const t of n.mutations){const r=Jr(e,t.key.path,n.batchId);s.push(i.delete(r)),l.push(t.key)}return rt.waitFor(s).next(()=>l)}function ds(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw y();e=t.noDocument}return JSON.stringify(e).length}
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
 */cs.DEFAULT_COLLECTION_PERCENTILE=10,cs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,cs.DEFAULT=new cs(41943040,cs.DEFAULT_COLLECTION_PERCENTILE,cs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),cs.DISABLED=new cs(-1,0,0);class As{constructor(t,e,n,r){this.userId=t,this.yt=e,this.indexManager=n,this.referenceDelegate=r,this.In={}}static re(t,e,n,r){w(""!==t.uid);const i=t.isAuthenticated()?t.uid:"";return new As(i,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ms(t).Z({index:"userMutationsIndex",range:n},(t,n,r)=>{e=!1,r.done()}).next(()=>e)}addMutationBatch(t,e,n,r){const i=ps(t),s=ms(t);return s.add({}).next(o=>{w("number"==typeof o);const a=new mi(o,e,n,r),u=function(t,e,n){const r=n.baseMutations.map(e=>qr(t.ie,e)),i=n.mutations.map(e=>qr(t.ie,e));return{userId:e,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.yt,this.userId,a),l=[];let c=new Ce((t,e)=>k(t.canonicalString(),e.canonicalString()));for(const t of r){const e=Jr(this.userId,t.key.path,o);c=c.add(t.key.path.popLast()),l.push(s.put(u)),l.push(i.put(e,Hr))}return c.forEach(e=>{l.push(this.indexManager.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.In[o]=a.keys()}),rt.waitFor(l).next(()=>a)})}lookupMutationBatch(t,e){return ms(t).get(e).next(t=>t?(w(t.userId===this.userId),Ci(this.yt,t)):null)}Tn(t,e){return this.In[e]?rt.resolve(this.In[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.In[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ms(t).Z({index:"userMutationsIndex",range:r},(t,e,r)=>{e.userId===this.userId&&(w(e.batchId>=n),i=Ci(this.yt,e)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ms(t).Z({index:"userMutationsIndex",range:e,reverse:!0},(t,e,r)=>{n=e.batchId,r.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ms(t).W("userMutationsIndex",e).next(t=>t.map(t=>Ci(this.yt,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Vr(this.userId,e.path),r=IDBKeyRange.lowerBound(n),i=[];return ps(t).Z({range:r},(n,r,s)=>{const[o,a,u]=n,l=Kr(a);if(o===this.userId&&e.path.isEqual(l))return ms(t).get(u).next(t=>{if(!t)throw y();w(t.userId===this.userId),i.push(Ci(this.yt,t))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ce(k);const r=[];return e.forEach(e=>{const i=Vr(this.userId,e.path),s=IDBKeyRange.lowerBound(i),o=ps(t).Z({range:s},(t,r,i)=>{const[s,o,a]=t,u=Kr(o);s===this.userId&&e.path.isEqual(u)?n=n.add(a):i.done()});r.push(o)}),rt.waitFor(r).next(()=>this.En(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,i=Vr(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Ce(k);return ps(t).Z({range:s},(t,e,i)=>{const[s,a,u]=t,l=Kr(a);s===this.userId&&n.isPrefixOf(l)?l.length===r&&(o=o.add(u)):i.done()}).next(()=>this.En(t,o))}En(t,e){const n=[],r=[];return e.forEach(e=>{r.push(ms(t).get(e).next(t=>{if(null===t)throw y();w(t.userId===this.userId),n.push(Ci(this.yt,t))}))}),rt.waitFor(r).next(()=>n)}removeMutationBatch(t,e){return hs(t.se,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.An(e.batchId)}),rt.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}An(t){delete this.In[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return rt.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return ps(t).Z({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=Kr(t[1]);r.push(e)}else n.done()}).next(()=>{w(0===r.length)})})}containsKey(t,e){return fs(t,this.userId,e)}Rn(t){return gs(t).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function fs(t,e,n){const r=Vr(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ps(t).Z({range:s,X:!0},(t,n,r)=>{const[s,a,u]=t;s===e&&a===i&&(o=!0),r.done()}).next(()=>o)}function ms(t){return fi(t,"mutations")}function ps(t){return fi(t,"documentMutations")}function gs(t){return fi(t,"mutationQueues")}
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
 */class ys{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new ys(0)}static vn(){return new ys(-1)}}
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
 */class ws{constructor(t,e){this.referenceDelegate=t,this.yt=e}allocateTargetId(t){return this.Vn(t).next(e=>{const n=new ys(e.highestTargetId);return e.highestTargetId=n.next(),this.Sn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Vn(t).next(t=>F.fromTimestamp(new B(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Vn(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.Vn(t).next(r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.Sn(t,r)))}addTargetData(t,e){return this.Dn(t,e).next(()=>this.Vn(t).next(n=>(n.targetCount+=1,this.Cn(e,n),this.Sn(t,n))))}updateTargetData(t,e){return this.Dn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>Es(t).delete(e.targetId)).next(()=>this.Vn(t)).next(e=>(w(e.targetCount>0),e.targetCount-=1,this.Sn(t,e)))}removeTargets(t,e,n){let r=0;const i=[];return Es(t).Z((s,o)=>{const a=Si(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(t,a)))}).next(()=>rt.waitFor(i)).next(()=>r)}forEachTarget(t,e){return Es(t).Z((t,n)=>{const r=Si(n);e(r)})}Vn(t){return bs(t).get("targetGlobalKey").next(t=>(w(null!==t),t))}Sn(t,e){return bs(t).put("targetGlobalKey",e)}Dn(t,e){return Es(t).put(Di(this.yt,e))}Cn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.Vn(t).next(t=>t.targetCount)}getTargetData(t,e){const n=je(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Es(t).Z({range:r,index:"queryTargetsIndex"},(t,n,r)=>{const s=Si(n);Oe(e,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(t,e,n){const r=[],i=vs(t);return e.forEach(e=>{const s=Mr(e.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(t,n,e))}),rt.waitFor(r)}removeMatchingKeys(t,e,n){const r=vs(t);return rt.forEach(e,e=>{const i=Mr(e.path);return rt.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=vs(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=vs(t);let i=Zn();return r.Z({range:n,X:!0},(t,e,n)=>{const r=Kr(t[1]),s=new G(r);i=i.add(s)}).next(()=>i)}containsKey(t,e){const n=Mr(e.path),r=IDBKeyRange.bound([n],[R(n)],!1,!0);let i=0;return vs(t).Z({index:"documentTargetsIndex",X:!0,range:r},([t,e],n,r)=>{0!==t&&(i++,r.done())}).next(()=>i>0)}ne(t,e){return Es(t).get(e).next(t=>t?Si(t):null)}}function Es(t){return fi(t,"targets")}function bs(t){return fi(t,"targetGlobal")}function vs(t){return fi(t,"targetDocuments")}
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
 */function Is([t,e],[n,r]){const i=k(t,n);return 0===i?k(e,r):i}class Cs{constructor(t){this.xn=t,this.buffer=new Ce(Is),this.Nn=0}kn(){return++this.Nn}On(t){const e=[t,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Is(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ss{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(t){f("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ut(t)?f("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await nt(t)}await this.Fn(3e5)})}}class Ds{constructor(t,e){this.$n=t,this.params=e}calculateTargetCount(t,e){return this.$n.Bn(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return rt.resolve(mt.at);const n=new Cs(e);return this.$n.forEachTarget(t,t=>n.On(t.sequenceNumber)).next(()=>this.$n.Ln(t,t=>n.On(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.$n.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.$n.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector","Garbage collection skipped; disabled"),rt.resolve(ls)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ls):this.qn(t,e))}getCacheSize(t){return this.$n.getCacheSize(t)}qn(t,e){let n,r,i,o,a,u,l;const c=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(f("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,o=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,u=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(l=Date.now(),d()<=s.a.DEBUG&&f("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-c}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(u-a)+"ms\n"+`\tRemoved ${t} documents in `+(l-u)+"ms\n"+`Total Duration: ${l-c}ms`),rt.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}
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
 */class _s{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new Ds(t,e)}(this,e)}Bn(t){const e=this.Un(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Un(t){let e=0;return this.Ln(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Ln(t,e){return this.Kn(t,(t,n)=>e(n))}addReference(t,e,n){return qs(t,n)}removeReference(t,e,n){return qs(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return qs(t,e)}Gn(t,e){return function(t,e){let n=!1;return gs(t).tt(r=>fs(t,r,e).next(t=>(t&&(n=!0),rt.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(t,(s,o)=>{if(o<=e){const e=this.Gn(t,s).next(e=>{if(!e)return i++,n.getEntry(t,s).next(()=>(n.removeEntry(s,F.min()),vs(t).delete([0,Mr(s.path)])))});r.push(e)}}).next(()=>rt.waitFor(r)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return qs(t,e)}Kn(t,e){const n=vs(t);let r,i=mt.at;return n.Z({index:"documentTargetsIndex"},([t,n],{path:s,sequenceNumber:o})=>{0===t?(i!==mt.at&&e(new G(Kr(r)),i),i=o,r=s):i=mt.at}).next(()=>{i!==mt.at&&e(new G(Kr(r)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function qs(t,e){return vs(t).put(function(t,e){return{targetId:0,path:Mr(t.path),sequenceNumber:e}}(e,t.currentSequenceNumber))}
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
 */class Ts{constructor(){this.changes=new Pn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ue.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?rt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
 */class Us{constructor(t){this.yt=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Os(t).put(n)}removeEntry(t,e,n){return Os(t).delete(function(t,e){const n=t.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],bi(e),n[n.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Qn(t,n)))}getEntry(t,e){let n=Ue.newInvalidDocument(e);return Os(t).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ks(e))},(t,r)=>{n=this.jn(e,r)}).next(()=>n)}Wn(t,e){let n={size:0,document:Ue.newInvalidDocument(e)};return Os(t).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ks(e))},(t,r)=>{n={document:this.jn(e,r),size:ds(r)}}).next(()=>n)}getEntries(t,e){let n=Kn();return this.zn(t,e,(t,e)=>{const r=this.jn(t,e);n=n.insert(t,r)}).next(()=>n)}Hn(t,e){let n=Kn(),r=new be(G.comparator);return this.zn(t,e,(t,e)=>{const i=this.jn(t,e);n=n.insert(t,i),r=r.insert(t,ds(e))}).next(()=>({documents:n,Jn:r}))}zn(t,e,n){if(e.isEmpty())return rt.resolve();let r=new Ce(Rs);e.forEach(t=>r=r.add(t));const i=IDBKeyRange.bound(ks(r.first()),ks(r.last())),s=r.getIterator();let o=s.getNext();return Os(t).Z({index:"documentKeyIndex",range:i},(t,e,r)=>{const i=G.fromSegments([...e.prefixPath,e.collectionGroup,e.documentId]);for(;o&&Rs(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,e),o=s.hasNext()?s.getNext():null),o?r.j(ks(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getAllFromCollection(t,e,n){const r=[e.popLast().toArray(),e.lastSegment(),bi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[e.popLast().toArray(),e.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Os(t).W(IDBKeyRange.bound(r,i,!0)).next(t=>{let e=Kn();for(const n of t){const t=this.jn(G.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);e=e.insert(t.key,t)}return e})}getAllFromCollectionGroup(t,e,n,r){let i=Kn();const s=Ns(e,n),o=Ns(e,Z.max());return Os(t).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},(t,e,n)=>{const s=this.jn(G.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);i=i.insert(s.key,s),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(t){return new xs(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return js(t).get("remoteDocumentGlobalKey").next(t=>(w(!!t),t))}Qn(t,e){return js(t).put("remoteDocumentGlobalKey",e)}jn(t,e){if(e){const t=function(t,e){let n;if(e.document)n=_r(t.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const t=G.fromSegments(e.noDocument.path),r=Ii(e.noDocument.readTime);n=Ue.newNoDocument(t,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return y();{const t=G.fromSegments(e.unknownDocument.path),r=Ii(e.unknownDocument.version);n=Ue.newUnknownDocument(t,r)}}return e.readTime&&n.setReadTime(function(t){const e=new B(t[0],t[1]);return F.fromTimestamp(e)}(e.readTime)),n}(this.yt,e);if(!t.isNoDocument()||!t.version.isEqual(F.min()))return t}return Ue.newInvalidDocument(t)}}function Ls(t){return new Us(t)}class xs extends Ts{constructor(t,e){super(),this.Yn=t,this.trackRemovals=e,this.Xn=new Pn(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,r=new Ce((t,e)=>k(t.canonicalString(),e.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.Xn.get(i);if(e.push(this.Yn.removeEntry(t,i,o.readTime)),s.isValidDocument()){const a=Ei(this.Yn.yt,s);r=r.add(i.path.popLast());const u=ds(a);n+=u-o.size,e.push(this.Yn.addEntry(t,i,a))}else if(n-=o.size,this.trackRemovals){const n=Ei(this.Yn.yt,s.convertToNoDocument(F.min()));e.push(this.Yn.addEntry(t,i,n))}}),r.forEach(n=>{e.push(this.Yn.indexManager.addToCollectionParentIndex(t,n))}),e.push(this.Yn.updateMetadata(t,n)),rt.waitFor(e)}getFromCache(t,e){return this.Yn.Wn(t,e).next(t=>(this.Xn.set(e,{size:t.size,readTime:t.document.readTime}),t.document))}getAllFromCache(t,e){return this.Yn.Hn(t,e).next(({documents:t,Jn:e})=>(e.forEach((e,n)=>{this.Xn.set(e,{size:n,readTime:t.get(e).readTime})}),t))}}function js(t){return fi(t,"remoteDocumentGlobal")}function Os(t){return fi(t,"remoteDocumentsV14")}function ks(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ns(t,e){const n=e.documentKey.path.toArray();return[t,bi(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Rs(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let t=0;t<n.length-2&&t<r.length-2;++t)if(i=k(n[t],r[t]),i)return i;return i=k(n.length,r.length),i||(i=k(n[n.length-2],r[r.length-2]),i||k(n[n.length-1],r[r.length-1]))
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
 */}class Bs{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Fs{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&Dn(n.mutation,t,_e.empty(),B.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,Zn()).next(()=>e))}getLocalViewOfDocuments(t,e,n=Zn()){const r=Hn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=Vn();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=Hn();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Zn()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=Kn();const s=Yn(),o=Yn();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Un)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),Dn(o.mutation,e,o.mutation.getFieldMask(),B.now()))}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new Bs(e,null!==(n=s.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=Yn();let r=new be((t,e)=>t-e),i=Zn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||_e.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Zn()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,l=Wn();u.forEach(t=>{if(!i.has(t)){const r=Cn(e.get(t),n.get(t));null!==r&&l.set(t,r),i=i.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return rt.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return function(t){return G.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ve(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):rt.resolve(Hn());let o=-1,a=i;return s.next(e=>rt.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?rt.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,Zn())).next(t=>({batchId:o,changes:Jn(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new G(e)).next(t=>{let e=Vn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Vn();return this.indexManager.getCollectionParents(t,r).next(s=>rt.forEach(s,s=>{const o=function(t,e){return new Fe(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId))).next(t=>{t.forEach((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,Ue.newInvalidDocument(n)))});let n=Vn();return r.forEach((r,i)=>{const s=t.get(r);void 0!==s&&Dn(s.mutation,i,_e.empty(),B.now()),$e(e,i)&&(n=n.insert(r,i))}),n})}}
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
 */class Ms{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return rt.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:gr(n.createTime)}),rt.resolve()}getNamedQuery(t,e){return rt.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:_i(t.bundledQuery),readTime:gr(t.readTime)}}(e)),rt.resolve()}}
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
 */class Ps{constructor(){this.overlays=new be(G.comparator),this.es=new Map}getOverlay(t,e){return rt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Hn();return rt.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.oe(t,e,r)}),rt.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.es.delete(n)),rt.resolve()}getOverlaysForCollection(t,e,n){const r=Hn(),i=e.length+1,s=new G(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return rt.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new be((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Hn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Hn(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=r)););return rt.resolve(o)}oe(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new gi(e,n));let i=this.es.get(e);void 0===i&&(i=Zn(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
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
 */class Qs{constructor(){this.ns=new Ce(Ks.ss),this.rs=new Ce(Ks.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ks(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.cs(new Ks(t,e))}hs(t,e){t.forEach(t=>this.removeReference(t,e))}ls(t){const e=new G(new P([])),n=new Ks(e,t),r=new Ks(e,t+1),i=[];return this.rs.forEachInRange([n,r],t=>{this.cs(t),i.push(t.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new G(new P([])),n=new Ks(e,t),r=new Ks(e,t+1);let i=Zn();return this.rs.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Ks(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ks{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return G.comparator(t.key,e.key)||k(t._s,e._s)}static os(t,e){return k(t._s,e._s)||G.comparator(t.key,e.key)}}
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
 */class Gs{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Ce(Ks.ss)}checkEmpty(t){return rt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new mi(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.gs=this.gs.add(new Ks(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return rt.resolve(s)}lookupMutationBatch(t,e){return rt.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),i=r<0?0:r;return rt.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return rt.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return rt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ks(e,0),r=new Ks(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],t=>{const e=this.ys(t._s);i.push(e)}),rt.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ce(k);return e.forEach(t=>{const e=new Ks(t,0),r=new Ks(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],t=>{n=n.add(t._s)})}),rt.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;G.isDocumentKey(i)||(i=i.child(""));const s=new Ks(new G(i),0);let o=new Ce(k);return this.gs.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)},s),rt.resolve(this.Is(o))}Is(t){const e=[];return t.forEach(t=>{const n=this.ys(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){w(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return rt.forEach(e.mutations,r=>{const i=new Ks(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=n})}An(t){}containsKey(t,e){const n=new Ks(e,0),r=this.gs.firstAfterOrEqual(n);return rt.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,rt.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class Vs{constructor(t){this.Es=t,this.docs=new be(G.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return rt.resolve(n?n.document.mutableCopy():Ue.newInvalidDocument(e))}getEntries(t,e){let n=Kn();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ue.newInvalidDocument(t))}),rt.resolve(n)}getAllFromCollection(t,e,n){let r=Kn();const i=new G(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||$(X(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return rt.resolve(r)}getAllFromCollectionGroup(t,e,n,r){y()}As(t,e){return rt.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Js(this)}getSize(t){return rt.resolve(this.size)}}class Js extends Ts{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)}),rt.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
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
 */class Hs{constructor(t){this.persistence=t,this.Rs=new Pn(t=>je(t),Oe),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Qs,this.targetCount=0,this.vs=ys.Pn()}forEachTarget(t,e){return this.Rs.forEach((t,n)=>e(n)),rt.resolve()}getLastRemoteSnapshotVersion(t){return rt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return rt.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),rt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),rt.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new ys(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,rt.resolve()}updateTargetData(t,e){return this.Dn(e),rt.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,rt.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Rs.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),rt.waitFor(i).next(()=>r)}getTargetCount(t){return rt.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return rt.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),rt.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),rt.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),rt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return rt.resolve(n)}containsKey(t,e){return rt.resolve(this.Ps.containsKey(e))}}
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
 */class Ws{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new mt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Hs(this),this.indexManager=new ts,this.remoteDocumentCache=function(t){return new Vs(t)}(t=>this.referenceDelegate.xs(t)),this.yt=new wi(e),this.Ns=new Ms(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ps,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Gs(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new Ys(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(t=>this.referenceDelegate.Os(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ms(t,e){return rt.or(Object.values(this.Vs).map(n=>()=>n.containsKey(t,e)))}}class Ys extends et{constructor(t){super(),this.currentSequenceNumber=t}}class zs{constructor(t){this.persistence=t,this.Fs=new Qs,this.$s=null}static Bs(t){return new zs(t)}get Ls(){if(this.$s)return this.$s;throw y()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),rt.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),rt.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),rt.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach(t=>this.Ls.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ls.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rt.forEach(this.Ls,n=>{const r=G.fromPath(n);return this.qs(t,r).next(t=>{t||e.removeEntry(r,F.min())})}).next(()=>(this.$s=null,e.apply(t)))}updateLimboDocument(t,e){return this.qs(t,e).next(t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())})}xs(t){return 0}qs(t,e){return rt.or([()=>rt.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
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
 */class Xs{constructor(t){this.yt=t}$(t,e,n,r){const i=new it("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore("owner")}(t),function(t){t.createObjectStore("mutationQueues",{keyPath:"userId"}),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Gr,{unique:!0}),t.createObjectStore("documentMutations")}(t),Zs(t),function(t){t.createObjectStore("remoteDocuments")}(t));let s=rt.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore("targetDocuments"),t.deleteObjectStore("targets"),t.deleteObjectStore("targetGlobal")}(t),Zs(t)),s=s.next(()=>function(t){const e=t.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:F.min().toTimestamp(),targetCount:0};return e.put("targetGlobalKey",n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(t,e){return e.store("mutations").W().next(n=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Gr,{unique:!0});const r=e.store("mutations"),i=n.map(t=>r.put(t));return rt.waitFor(i)})}(t,i))),s=s.next(()=>{!function(t){t.createObjectStore("clientMetadata",{keyPath:"clientId"})}(t)})),n<5&&r>=5&&(s=s.next(()=>this.Us(i))),n<6&&r>=6&&(s=s.next(()=>(function(t){t.createObjectStore("remoteDocumentGlobal")}(t),this.Ks(i)))),n<7&&r>=7&&(s=s.next(()=>this.Gs(i))),n<8&&r>=8&&(s=s.next(()=>this.Qs(t,i))),n<9&&r>=9&&(s=s.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t)})),n<10&&r>=10&&(s=s.next(()=>this.js(i))),n<11&&r>=11&&(s=s.next(()=>{!function(t){t.createObjectStore("bundles",{keyPath:"bundleId"})}(t),function(t){t.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),n<12&&r>=12&&(s=s.next(()=>{!function(t){const e=t.createObjectStore("documentOverlays",{keyPath:si});e.createIndex("collectionPathOverlayIndex",oi,{unique:!1}),e.createIndex("collectionGroupOverlayIndex",ai,{unique:!1})}(t)})),n<13&&r>=13&&(s=s.next(()=>function(t){const e=t.createObjectStore("remoteDocumentsV14",{keyPath:Wr});e.createIndex("documentKeyIndex",Yr),e.createIndex("collectionGroupIndex",zr)}(t)).next(()=>this.Ws(t,i)).next(()=>t.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.zs(t,i))),n<15&&r>=15&&(s=s.next(()=>function(t){t.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),t.createObjectStore("indexState",{keyPath:ei}).createIndex("sequenceNumberIndex",ni,{unique:!1}),t.createObjectStore("indexEntries",{keyPath:ri}).createIndex("documentKeyIndex",ii,{unique:!1})}(t))),s}Ks(t){let e=0;return t.store("remoteDocuments").Z((t,n)=>{e+=ds(n)}).next(()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Us(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.W().next(e=>rt.forEach(e,e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next(n=>rt.forEach(n,n=>{w(n.userId===e.userId);const r=Ci(this.yt,n);return hs(t,e.userId,r).next(()=>{})}))}))}Gs(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(t=>{const r=[];return n.Z((n,i)=>{const s=new P(n),o=function(t){return[0,Mr(t)]}(s);r.push(e.get(o).next(n=>n?rt.resolve():(n=>e.put({targetId:0,path:Mr(n),sequenceNumber:t.highestListenSequenceNumber}))(s)))}).next(()=>rt.waitFor(r))})}Qs(t,e){t.createObjectStore("collectionParents",{keyPath:ti});const n=e.store("collectionParents"),r=new es,i=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:Mr(r)})}};return e.store("remoteDocuments").Z({X:!0},(t,e)=>{const n=new P(t);return i(n.popLast())}).next(()=>e.store("documentMutations").Z({X:!0},([t,e,n],r)=>{const s=Kr(e);return i(s.popLast())}))}js(t){const e=t.store("targets");return e.Z((t,n)=>{const r=Si(n),i=Di(this.yt,r);return e.put(i)})}Ws(t,e){const n=e.store("remoteDocuments"),r=[];return n.Z((t,n)=>{const i=e.store("remoteDocumentsV14"),s=(o=n,o.document?new G(P.fromString(o.document.name).popFirst(5)):o.noDocument?G.fromSegments(o.noDocument.path):o.unknownDocument?G.fromSegments(o.unknownDocument.path):y()).path.toArray();var o;
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
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>rt.waitFor(r))}zs(t,e){const n=e.store("mutations"),r=Ls(this.yt),i=new Ws(zs.Bs,this.yt.ie);return n.W().next(t=>{const n=new Map;return t.forEach(t=>{var e;let r=null!==(e=n.get(t.userId))&&void 0!==e?e:Zn();Ci(this.yt,t).keys().forEach(t=>r=r.add(t)),n.set(t.userId,r)}),rt.forEach(n,(t,n)=>{const s=new l(n),o=Oi.re(this.yt,s),a=i.getIndexManager(s),u=As.re(s,this.yt,a,i.referenceDelegate);return new Fs(r,u,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Ai(e,mt.at),t).next()})})}}function Zs(t){t.createObjectStore("targetDocuments",{keyPath:Zr}).createIndex("documentTargetsIndex",$r,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Xr,{unique:!0}),t.createObjectStore("targetGlobal")}const $s="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class to{constructor(t,e,n,r,i,s,o,a,u,l,c=15){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Hs=i,this.window=s,this.document=o,this.Js=u,this.Ys=l,this.Xs=c,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=t=>Promise.resolve(),!to.C())throw new I(v.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _s(this,r),this.ii=e+"main",this.yt=new wi(a),this.ri=new st(this.ii,this.Xs,new Xs(this.yt)),this.Cs=new ws(this.referenceDelegate,this.yt),this.remoteDocumentCache=Ls(this.yt),this.Ns=new Li,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===l&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new I(v.FAILED_PRECONDITION,$s);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Cs.getHighestSequenceNumber(t))}).then(t=>{this.Ss=new mt(t,this.Js)}).then(()=>{this.Ds=!0}).catch(t=>(this.ri&&this.ri.close(),Promise.reject(t)))}li(t){return this.si=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ri.L(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>no(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(t).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(t)).next(e=>this.isPrimary&&!e?this._i(t).next(()=>!1):!!e&&this.wi(t).next(()=>!0))).catch(t=>{if(ut(t))return f("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return f("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Hs.enqueueRetryable(()=>this.si(t)),this.isPrimary=t})}fi(t){return eo(t).get("owner").next(t=>rt.resolve(this.mi(t)))}gi(t){return no(t).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=fi(t,"clientMetadata");return e.W().next(t=>{const n=this.Ii(t,18e5),r=t.filter(t=>-1===n.indexOf(t));return rt.forEach(r,t=>e.delete(t.clientId)).next(()=>r)})}).catch(()=>[]);if(this.oi)for(const e of t)this.oi.removeItem(this.Ti(e.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(t){return!!t&&t.ownerId===this.clientId}di(t){return this.Ys?rt.resolve(!0):eo(t).get("owner").next(e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)){if(this.mi(e)&&this.networkEnabled)return!0;if(!this.mi(e)){if(!e.allowTabSynchronization)throw new I(v.FAILED_PRECONDITION,$s);return!1}}return!(!this.networkEnabled||!this.inForeground)||no(t).W().next(t=>void 0===this.Ii(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&f("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new Ai(t,mt.at);return this._i(e).next(()=>this.gi(e))}),this.ri.close(),this.Pi()}Ii(t,e){return t.filter(t=>this.pi(t.updateTimeMs,e)&&!this.Ei(t.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",t=>no(t).W().next(t=>this.Ii(t,18e5).map(t=>t.clientId)))}get started(){return this.Ds}getMutationQueue(t,e){return As.re(t,this.yt,e,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new rs(t,this.yt.ie.databaseId)}getDocumentOverlayCache(t){return Oi.re(this.yt,t)}getBundleCache(){return this.Ns}runTransaction(t,e,n){f("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite",i=15===(s=this.Xs)?di:14===s?hi:13===s?ci:12===s?li:11===s?ui:void y();var s;let o;return this.ri.runTransaction(t,r,i,r=>(o=new Ai(r,this.Ss?this.Ss.next():mt.at),"readwrite-primary"===e?this.fi(o).next(t=>!!t||this.di(o)).next(e=>{if(!e)throw m(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new I(v.FAILED_PRECONDITION,tt);return n(o)}).next(t=>this.wi(o).next(()=>t)):this.Vi(o).next(()=>n(o)))).then(t=>(o.raiseOnCommittedEvent(),t))}Vi(t){return eo(t).get("owner").next(t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new I(v.FAILED_PRECONDITION,$s)})}wi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return eo(t).put("owner",e)}static C(){return st.C()}_i(t){const e=eo(t);return e.get("owner").next(t=>this.mi(t)?(f("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):rt.resolve())}pi(t,e){const n=Date.now();return!(t<n-e||t>n&&(m(`Detected an update time that is in the future: ${t} > ${n}`),1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Zs=()=>{this.Ai(),Object(o.q)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(t){var e;try{const n=null!==(null===(e=this.oi)||void 0===e?void 0:e.getItem(this.Ti(t)));return f("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return m("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(t){m("Failed to set zombie client id.",t)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(t){}}Ti(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function eo(t){return fi(t,"owner")}function no(t){return fi(t,"clientMetadata")}function ro(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
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
 */}class io{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=Zn(),r=Zn();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new io(t,e.fromCache,n,r)}}
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
 */class so{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next(i=>i||this.Oi(t,e,r,n)).next(n=>n||this.Mi(t,e))}ki(t,e){if(Qe(e))return rt.resolve(null);let n=He(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=Ye(e,null,"F"),n=He(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=Zn(...r);return this.Ni.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const s=this.Fi(e,r);return this.$i(e,s,i,n.readTime)?this.ki(t,Ye(e,null,"F")):this.Bi(t,s,e,n)}))})))}Oi(t,e,n,r){return Qe(e)||r.isEqual(F.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next(i=>{const o=this.Fi(e,i);return this.$i(e,o,n,r)?this.Mi(t,e):(d()<=s.a.DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ze(e)),this.Bi(t,o,e,z(r,-1)))})}Fi(t,e){let n=new Ce(en(t));return e.forEach((e,r)=>{$e(t,r)&&(n=n.add(r))}),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,e){return d()<=s.a.DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Ze(e)),this.Ni.getDocumentsMatchingQuery(t,e,Z.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
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
 */class oo{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.yt=r,this.qi=new be(k),this.Ui=new Pn(t=>je(t),Oe),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Fs(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qi))}}function ao(t,e,n,r){return new oo(t,e,n,r)}async function uo(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],s=[];let o=Zn();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({ji:t,removedBatchIds:i,addedBatchIds:s}))})})}function lo(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function co(t,e,n){let r=Zn(),i=Zn();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=Kn();return n.forEach((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(F.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Wi:r,zi:i}})}function ho(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function Ao(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Cs.getTargetData(t,e).next(i=>i?(r=i,rt.resolve(r)):n.Cs.allocateTargetId(t).next(i=>(r=new yi(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.qi.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t})}async function fo(t,e,n){const r=b(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!ut(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function mo(t,e,n){const r=b(t);let i=F.min(),s=Zn();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),i=r.Ui.get(n);return void 0!==i?rt.resolve(r.qi.get(i)):r.Cs.getTargetData(e,n)}(r,t,He(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Li.getDocumentsMatchingQuery(t,e,n?i:F.min(),n?s:Zn())).next(t=>(yo(r,tn(e),t),{documents:t,Hi:s})))}function po(t,e){const n=b(t),r=b(n.Cs),i=n.qi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",t=>r.ne(t,e).next(t=>t?t.target:null))}function go(t,e){const n=b(t),r=n.Ki.get(e)||F.min();return n.persistence.runTransaction("Get new document changes","readonly",t=>n.Gi.getAllFromCollectionGroup(t,e,z(r,-1),Number.MAX_SAFE_INTEGER)).then(t=>(yo(n,e,t),t))}function yo(t,e,n){let r=t.Ki.get(e)||F.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Ki.set(e,r)}async function wo(t,e,n=Zn()){const r=await Ao(t,He(_i(e.bundledQuery))),i=b(t);return i.persistence.runTransaction("Save named query","readwrite",t=>{const s=gr(e.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ns.saveNamedQuery(t,e);const o=r.withResumeToken(St.EMPTY_BYTE_STRING,s);return i.qi=i.qi.insert(o.targetId,o),i.Cs.updateTargetData(t,o).next(()=>i.Cs.removeMatchingKeysForTargetId(t,r.targetId)).next(()=>i.Cs.addMatchingKeys(t,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(t,e))})}function Eo(t,e){return`firestore_clients_${t}_${e}`}function bo(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+="_"+e.uid),r}function vo(t,e){return`firestore_targets_${t}_${e}`}class Io{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static Zi(t,e,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new I(r.error.code,r.error.message))),s?new Io(t,e,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}tr(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Co{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Zi(t,e){const n=JSON.parse(e);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new I(n.error.code,n.error.message))),i?new Co(t,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}tr(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class So{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Zi(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=tr();for(let t=0;r&&t<n.activeTargetIds.length;++t)r=It(n.activeTargetIds[t]),i=i.add(n.activeTargetIds[t]);return r?new So(t,i):(m("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Do{constructor(t,e){this.clientId=t,this.onlineState=e}static Zi(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new Do(e.clientId,e.onlineState):(m("SharedClientState","Failed to parse online state: "+t),null)}}class _o{constructor(){this.activeTargetIds=tr()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class qo{constructor(t,e,n,r,i){this.window=t,this.Hs=e,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new be(k),this.started=!1,this.cr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=Eo(this.persistenceKey,this.sr),this.hr=function(t){return"firestore_sequence_number_"+t}
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
 */(this.persistenceKey),this.ur=this.ur.insert(this.sr,new _o),this.lr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.mr=function(t){return"firestore_bundle_loaded_v2_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.vi();for(const e of t){if(e===this.sr)continue;const t=this.getItem(Eo(this.persistenceKey,e));if(t){const n=So.Zi(e,t);n&&(this.ur=this.ur.insert(n.clientId,n))}}this.gr();const e=this.storage.getItem(this.wr);if(e){const t=this.yr(e);t&&this.pr(t)}for(const t of this.cr)this.rr(t);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.hr,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(t){let e=!1;return this.ur.forEach((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.Tr(t,"pending")}updateMutationState(t,e,n){this.Tr(t,e,n),this.Er(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(vo(this.persistenceKey,t));if(n){const r=Co.Zi(t,n);r&&(e=r.state)}}return this.Ar.er(t),this.gr(),e}removeLocalQueryTarget(t){this.Ar.nr(t),this.gr()}isLocalQueryTarget(t){return this.Ar.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(vo(this.persistenceKey,t))}updateQueryState(t,e,n){this.Rr(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.Er(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.br(t)}notifyBundleLoaded(t){this.Pr(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return f("SharedClientState","READ",t,e),e}setItem(t,e){f("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){f("SharedClientState","REMOVE",t),this.storage.removeItem(t)}rr(t){const e=t;if(e.storageArea===this.storage){if(f("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ar)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.lr.test(e.key)){if(null==e.newValue){const t=this.vr(e.key);return this.Vr(t,null)}{const t=this.Sr(e.key,e.newValue);if(t)return this.Vr(t.clientId,t)}}else if(this.dr.test(e.key)){if(null!==e.newValue){const t=this.Dr(e.key,e.newValue);if(t)return this.Cr(t)}}else if(this._r.test(e.key)){if(null!==e.newValue){const t=this.Nr(e.key,e.newValue);if(t)return this.kr(t)}}else if(e.key===this.wr){if(null!==e.newValue){const t=this.yr(e.newValue);if(t)return this.pr(t)}}else if(e.key===this.hr){const t=function(t){let e=mt.at;if(null!=t)try{const n=JSON.parse(t);w("number"==typeof n),e=n}catch(t){m("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==mt.at&&this.sequenceNumberHandler(t)}else if(e.key===this.mr){const t=this.Or(e.newValue);await Promise.all(t.map(t=>this.syncEngine.Mr(t)))}}else this.cr.push(e)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(t,e,n){const r=new Io(this.currentUser,t,e,n),i=bo(this.persistenceKey,this.currentUser,t);this.setItem(i,r.tr())}Er(t){const e=bo(this.persistenceKey,this.currentUser,t);this.removeItem(e)}br(t){const e={clientId:this.sr,onlineState:t};this.storage.setItem(this.wr,JSON.stringify(e))}Rr(t,e,n){const r=vo(this.persistenceKey,t),i=new Co(t,e,n);this.setItem(r,i.tr())}Pr(t){const e=JSON.stringify(Array.from(t));this.setItem(this.mr,e)}vr(t){const e=this.lr.exec(t);return e?e[1]:null}Sr(t,e){const n=this.vr(t);return So.Zi(n,e)}Dr(t,e){const n=this.dr.exec(t),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Io.Zi(new l(i),r,e)}Nr(t,e){const n=this._r.exec(t),r=Number(n[1]);return Co.Zi(r,e)}yr(t){return Do.Zi(t)}Or(t){return JSON.parse(t)}async Cr(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Fr(t.batchId,t.state,t.error);f("SharedClientState","Ignoring mutation for non-active user "+t.user.uid)}kr(t){return this.syncEngine.$r(t.targetId,t.state,t.error)}Vr(t,e){const n=e?this.ur.insert(t,e):this.ur.remove(t),r=this.Ir(this.ur),i=this.Ir(n),s=[],o=[];return i.forEach(t=>{r.has(t)||s.push(t)}),r.forEach(t=>{i.has(t)||o.push(t)}),this.syncEngine.Br(s,o).then(()=>{this.ur=n})}pr(t){this.ur.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Ir(t){let e=tr();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class To{constructor(){this.Lr=new _o,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new _o,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Uo{Ur(t){}shutdown(){}}
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
 */class Lo{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const xo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class jo{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
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
 */class Oo extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,r,i){const s=this.ho(t,e);f("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(t,s,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}_o(t,e,n,r,i,s){return this.ao(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+c,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}ho(t,e){const n=xo[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise((i,s)=>{const o=new a.g;o.setWithCredentials(!0),o.listenOnce(a.c.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a.a.NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a.a.TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),s(new I(v.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(e)>=0?e:v.UNKNOWN}(e.status);s(new I(t,e.message))}else s(new I(v.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new I(v.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(r);o.send(e,"POST",u,n,15)})}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a.h)(),s=Object(a.i)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a.d({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const u=r.join("");f("Connection","Creating WebChannel: "+u,o);const l=i.createWebChannel(u,o);let c=!1,h=!1;const d=new jo({Hr:t=>{h?f("Connection","Not sending because WebChannel is closed:",t):(c||(f("Connection","Opening WebChannel transport."),l.open(),c=!0),f("Connection","WebChannel sending:",t),l.send(t))},Jr:()=>l.close()}),A=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return A(l,a.f.EventType.OPEN,()=>{h||f("Connection","WebChannel transport opened.")}),A(l,a.f.EventType.CLOSE,()=>{h||(h=!0,f("Connection","WebChannel transport closed"),d.io())}),A(l,a.f.EventType.ERROR,t=>{h||(h=!0,p("Connection","WebChannel transport errored:",t),d.io(new I(v.UNAVAILABLE,"The operation could not be completed")))}),A(l,a.f.EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];w(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Rn[t];if(void 0!==e)return Mn(e)}(t),n=i.message;void 0===e&&(e=v.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.io(new I(e,n)),l.close()}else f("Connection","WebChannel received:",n),d.ro(n)}}),A(s,a.b.STAT_EVENT,t=>{t.stat===a.e.PROXY?f("Connection","Detected buffering proxy"):t.stat===a.e.NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}
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
 */function ko(){return"undefined"!=typeof window?window:null}function No(){return"undefined"!=typeof document?document:null}
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
 */function Ro(t){return new Ar(t,!0)}class Bo{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
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
 */class Fo{constructor(t,e,n,r,i,s,o,a){this.Hs=t,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Bo(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===v.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===v.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.So===e&&this.Go(t,n)},e=>{t(()=>{const t=new I(v.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)})})}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(t=>{n(()=>this.Qo(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget(()=>this.So===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mo extends Fo{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.yt=i}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.wt?(w(void 0===e||"string"==typeof e),St.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),St.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?v.UNKNOWN:Mn(t.code);return new I(e,t.message||"")}(o);n=new sr(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=br(t,r.document.name),s=gr(r.document.updateTime),o=r.document.createTime?gr(r.document.createTime):F.min(),a=new qe({mapValue:{fields:r.document.fields}}),u=Ue.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new rr(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=br(t,r.document),s=r.readTime?gr(r.readTime):F.min(),o=Ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new rr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=br(t,r.document),s=r.removedTargetIds||[];n=new rr([],s,i,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Nn(r),s=t.targetId;n=new ir(s,i)}}return n}(this.yt,t),n=function(t){if(!("targetChange"in t))return F.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?F.min():e.readTime?gr(e.readTime):F.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Cr(this.yt),e.addTarget=function(t,e){let n;const r=e.target;return n=ke(r)?{documents:Ur(t,r)}:{query:Lr(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=mr(t,e.resumeToken):e.snapshotVersion.compareTo(F.min())>0&&(n.readTime=fr(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Cr(this.yt),e.removeTarget=t,this.Bo(e)}}class Po extends Fo{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=function(t,e){return t&&t.length>0?(w(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?gr(t.updateTime):gr(e);return n.isEqual(F.min())&&(n=gr(e)),new En(n,t.transformResults||[])}(t,e))):[]}(t.writeResults,t.commitTime),n=gr(t.commitTime);return this.listener.Zo(n,e)}return w(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Cr(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>qr(this.yt,t))};this.Bo(e)}}
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
 */class Qo extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new I(v.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new I(v.UNKNOWN,t.toString())})}_o(t,e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection._o(t,e,n,i,s,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new I(v.UNKNOWN,t.toString())})}terminate(){this.nu=!0}}class Ko{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: "+t.toString()),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(m(e),this.ou=!1):f("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
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
 */class Go{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(t=>{n.enqueueAndForget(async()=>{$o(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e._u.add(4),await Jo(e),e.gu.set("Unknown"),e._u.delete(4),await Vo(e)}(this))})}),this.gu=new Ko(n,r)}}async function Vo(t){if($o(t))for(const e of t.wu)await e(!0)}async function Jo(t){for(const e of t.wu)await e(!1)}function Ho(t,e){const n=b(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Zo(n)?Xo(n):ga(n).ko()&&Yo(n,e))}function Wo(t,e){const n=b(t),r=ga(n);n.du.delete(e),r.ko()&&zo(n,e),0===n.du.size&&(r.ko()?r.Fo():$o(n)&&n.gu.set("Unknown"))}function Yo(t,e){t.yu.Ot(e.targetId),ga(t).zo(e)}function zo(t,e){t.yu.Ot(e),ga(t).Ho(e)}function Xo(t){t.yu=new ar({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ga(t).start(),t.gu.uu()}function Zo(t){return $o(t)&&!ga(t).No()&&t.du.size>0}function $o(t){return 0===b(t)._u.size}function ta(t){t.yu=void 0}async function ea(t){t.du.forEach((e,n)=>{Yo(t,e)})}async function na(t,e){ta(t),Zo(t)?(t.gu.hu(e),Xo(t)):t.gu.set("Unknown")}async function ra(t,e,n){if(t.gu.set("Online"),e instanceof sr&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.du.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.du.delete(r),t.yu.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ia(t,n)}else if(e instanceof rr?t.yu.Kt(e):e instanceof ir?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(F.min()))try{const e=await lo(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(r);i&&t.du.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(St.EMPTY_BYTE_STRING,n.snapshotVersion)),zo(t,e);const r=new yi(n.target,e,1,n.sequenceNumber);Yo(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await ia(t,e)}}async function ia(t,e,n){if(!ut(e))throw e;t._u.add(1),await Jo(t),t.gu.set("Offline"),n||(n=()=>lo(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Vo(t)})}function sa(t,e){return e().catch(n=>ia(t,n,e))}async function oa(t){const e=b(t),n=ya(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;aa(e);)try{const t=await ho(e.localStore,r);if(null===t){0===e.fu.length&&n.Fo();break}r=t.batchId,ua(e,t)}catch(t){await ia(e,t)}la(e)&&ca(e)}function aa(t){return $o(t)&&t.fu.length<10}function ua(t,e){t.fu.push(e);const n=ya(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function la(t){return $o(t)&&!ya(t).No()&&t.fu.length>0}function ca(t){ya(t).start()}async function ha(t){ya(t).eu()}async function da(t){const e=ya(t);for(const n of t.fu)e.Xo(n.mutations)}async function Aa(t,e,n){const r=t.fu.shift(),i=pi.from(r,e,n);await sa(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await oa(t)}async function fa(t,e){e&&ya(t).Yo&&await async function(t,e){if(Fn(n=e.code)&&n!==v.ABORTED){const n=t.fu.shift();ya(t).Mo(),await sa(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await oa(t)}var n}(t,e),la(t)&&ca(t)}async function ma(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=$o(n);n._u.add(3),await Jo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Vo(n)}async function pa(t,e){const n=b(t);e?(n._u.delete(2),await Vo(n)):e||(n._u.add(2),await Jo(n),n.gu.set("Unknown"))}function ga(t){return t.pu||(t.pu=function(t,e,n){const r=b(t);return r.su(),new Mo(e,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
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
 */}(t.datastore,t.asyncQueue,{Yr:ea.bind(null,t),Zr:na.bind(null,t),Wo:ra.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Zo(t)?Xo(t):t.gu.set("Unknown")):(await t.pu.stop(),ta(t))})),t.pu}function ya(t){return t.Iu||(t.Iu=function(t,e,n){const r=b(t);return r.su(),new Po(e,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(t.datastore,t.asyncQueue,{Yr:ha.bind(null,t),Zr:fa.bind(null,t),tu:da.bind(null,t),Zo:Aa.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await oa(t)):(await t.Iu.stop(),t.fu.length>0&&(f("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu
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
 */}class wa{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new wa(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(v.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ea(t,e){if(m("AsyncQueue",`${e}: ${t}`),ut(t))return new I(v.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class ba{constructor(t){this.comparator=t?(e,n)=>t(e,n)||G.comparator(e.key,n.key):(t,e)=>G.comparator(t.key,e.key),this.keyedMap=Vn(),this.sortedSet=new be(this.comparator)}static emptySet(t){return new ba(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ba))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ba;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class va{constructor(){this.Tu=new be(G.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):y():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ia{constructor(t,e,n,r,i,s,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new Ia(t,e,ba.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ze(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
 */class Ca{constructor(){this.Au=void 0,this.listeners=[]}}class Sa{constructor(){this.queries=new Pn(t=>Xe(t),ze),this.onlineState="Unknown",this.Ru=new Set}}async function Da(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ca),i)try{s.Au=await n.onListen(r)}catch(t){const n=Ea(t,`Initialization of query '${Ze(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Ua(n)}async function _a(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qa(t,e){const n=b(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Pu(t)&&(r=!0);i.Au=t}}r&&Ua(n)}function Ta(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function Ua(t){t.Ru.forEach(t=>{t.next()})}class La{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ia(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Ia.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
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
 */class xa{constructor(t,e){this.ku=t,this.byteLength=e}Ou(){return"metadata"in this.ku}}
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
 */class ja{constructor(t){this.yt=t}Ji(t){return br(this.yt,t)}Yi(t){return t.metadata.exists?_r(this.yt,t.document,!1):Ue.newNoDocument(this.Ji(t.metadata.name),this.Xi(t.metadata.readTime))}Xi(t){return gr(t)}}class Oa{constructor(t,e,n){this.Mu=t,this.localStore=e,this.yt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ka(t)}Fu(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.ku.namedQuery)this.queries.push(t.ku.namedQuery);else if(t.ku.documentMetadata){this.documents.push({metadata:t.ku.documentMetadata}),t.ku.documentMetadata.exists||++e;const n=P.fromString(t.ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.ku.document&&(this.documents[this.documents.length-1].document=t.ku.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}$u(t){const e=new Map,n=new ja(this.yt);for(const r of t)if(r.metadata.queries){const t=n.Ji(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||Zn()).add(t);e.set(n,r)}}return e}async complete(){const t=await async function(t,e,n,r){const i=b(t);let s=Zn(),o=Kn();for(const t of n){const n=e.Ji(t.metadata.name);t.document&&(s=s.add(n));const r=e.Yi(t);r.setReadTime(e.Xi(t.metadata.readTime)),o=o.insert(n,r)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),u=await Ao(i,function(t){return He(Pe(P.fromString("__bundle__/docs/"+t)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",t=>co(t,a,o).next(e=>(a.apply(t),e)).next(e=>i.Cs.removeMatchingKeysForTargetId(t,u.targetId).next(()=>i.Cs.addMatchingKeys(t,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(t,e.Wi,e.zi)).next(()=>e.Wi)))}(this.localStore,new ja(this.yt),this.documents,this.Mu.id),e=this.$u(this.documents);for(const t of this.queries)await wo(this.localStore,t,e.get(t.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:t}}}function ka(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
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
 */class Na{constructor(t){this.key=t}}class Ra{constructor(t){this.key=t}}class Ba{constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Zn(),this.mutatedKeys=Zn(),this.Gu=en(t),this.Qu=new ba(this.Gu)}get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new va,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const l=r.get(t),c=$e(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let A=!1;l&&c?l.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),A=!0):this.Hu(l,c)||(n.track({type:2,doc:c}),A=!0,(a&&this.Gu(c,a)>0||u&&this.Gu(c,u)<0)&&(o=!0)):!l&&c?(n.track({type:0,doc:c}),A=!0):l&&!c&&(n.track({type:1,doc:l}),A=!0,(a||u)&&(o=!0)),A&&(c?(s=s.add(c),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Gu(t.doc,e.doc)),this.Ju(n);const s=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new Ia(this.query,t.Qu,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new va,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(t=>this.qu=this.qu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.qu=this.qu.delete(t)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=Zn(),this.Qu.forEach(t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))});const e=[];return t.forEach(t=>{this.Ku.has(t)||e.push(new Ra(t))}),this.Ku.forEach(n=>{t.has(n)||e.push(new Na(n))}),e}tc(t){this.qu=t.Hi,this.Ku=Zn();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Ia.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Fa{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ma{constructor(t){this.key=t,this.nc=!1}}class Pa{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new Pn(t=>Xe(t),ze),this.rc=new Map,this.oc=new Set,this.uc=new be(G.comparator),this.cc=new Map,this.ac=new Qs,this.hc={},this.lc=new Map,this.fc=ys.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Qa(t,e){const n=fu(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const t=await Ao(n.localStore,He(e));n.isPrimaryClient&&Ho(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Ka(n,e,r,"current"===s,t.resumeToken)}return i}async function Ka(t,e,n,r,i){t._c=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.$i&&(i=await mo(t.localStore,e.query,!1).then(({documents:t})=>e.view.Wu(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return tu(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const s=await mo(t.localStore,e,!0),o=new Ba(e,s.Hi),a=o.Wu(s.documents),u=nr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),l=o.applyChanges(a,t.isPrimaryClient,u);tu(t,n,l.Xu);const c=new Fa(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function Ga(t,e){const n=b(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(t=>!ze(t,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await fo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Wo(n.remoteStore,r.targetId),Za(n,r.targetId)}).catch(nt)):(Za(n,r.targetId),await fo(n.localStore,r.targetId,!0))}async function Va(t,e){const n=b(t);try{const t=await function(t,e){const n=b(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];e.targetChanges.forEach((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.Cs.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.Cs.addMatchingKeys(t,s.addedDocuments,a)));let l=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(St.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,r)),i=i.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,l,s)&&o.push(n.Cs.updateTargetData(t,l))});let a=Kn(),u=Zn();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(co(t,s,e.documentUpdates).next(t=>{a=t.Wi,u=t.zi})),!r.isEqual(F.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next(e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return rt.waitFor(o).next(()=>s.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,u)).next(()=>a)}).then(t=>(n.qi=i,t))}(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.cc.get(e);r&&(w(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?w(r.nc):t.removedDocuments.size>0&&(w(r.nc),r.nc=!1))}),await ru(n,t,e)}catch(t){await nt(t)}}function Ja(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach((n,r)=>{const i=r.view.bu(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const t of n.listeners)t.bu(e)&&(r=!0)}),r&&Ua(n)}(r.eventManager,e),t.length&&r.sc.Wo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ha(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let t=new be(G.comparator);t=t.insert(s,Ue.newNoDocument(s,F.min()));const n=Zn().add(s),i=new er(F.min(),new Map,new Ce(k),t,n);await Va(r,i),r.uc=r.uc.remove(s),r.cc.delete(e),nu(r)}else await fo(r.localStore,e,!1).then(()=>Za(r,e,n)).catch(nt)}async function Wa(t,e){const n=b(t),r=e.batch.batchId;try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=rt.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);w(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Zn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}(n.localStore,e);Xa(n,r,null),za(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ru(n,t)}catch(t){await nt(t)}}async function Ya(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(w(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);Xa(r,e,n),za(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ru(r,t)}catch(n){await nt(n)}}function za(t,e){(t.lc.get(e)||[]).forEach(t=>{t.resolve()}),t.lc.delete(e)}function Xa(t,e,n){const r=b(t);let i=r.hc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Za(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(e=>{t.ac.containsKey(e)||$a(t,e)})}function $a(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Wo(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),nu(t))}function tu(t,e,n){for(const r of n)r instanceof Na?(t.ac.addReference(r.key,e),eu(t,r)):r instanceof Ra?(f("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||$a(t,r.key)):y()}function eu(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(f("SyncEngine","New document in limbo: "+n),t.oc.add(r),nu(t))}function nu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new G(P.fromString(e)),r=t.fc.next();t.cc.set(r,new Ma(n)),t.uc=t.uc.insert(n,r),Ho(t.remoteStore,new yi(He(Pe(n.path)),r,2,mt.at))}}async function ru(t,e,n){const r=b(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((t,a)=>{o.push(r._c(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=io.Ci(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>rt.forEach(e,e=>rt.forEach(e.Si,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>rt.forEach(e.Di,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!ut(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(e,i)}}}(r.localStore,s))}async function iu(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await uo(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach(t=>{t.forEach(t=>{t.reject(new I(v.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.lc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ru(n,t.ji)}}function su(t,e){const n=b(t),r=n.cc.get(e);if(r&&r.nc)return Zn().add(r.key);{let t=Zn();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}async function ou(t,e){const n=b(t),r=await mo(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&tu(n,e.targetId,i.Xu),i}async function au(t,e){const n=b(t);return go(n.localStore,e).then(t=>ru(n,t))}async function uu(t,e,n,r){const i=b(t),s=await function(t,e){const n=b(t),r=b(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>r.Tn(t,e).next(e=>e?n.localDocuments.getDocuments(t,e):rt.resolve(null)))}(i.localStore,e);null!==s?("pending"===n?await oa(i.remoteStore):"acknowledged"===n||"rejected"===n?(Xa(i,e,r||null),za(i,e),function(t,e){b(b(t).mutationQueue).An(e)}(i.localStore,e)):y(),await ru(i,s)):f("SyncEngine","Cannot apply mutation batch with id: "+e)}async function lu(t,e,n){const r=b(t),i=[],s=[];for(const t of e){let e;const n=r.rc.get(t);if(n&&0!==n.length){e=await Ao(r.localStore,He(n[0]));for(const t of n){const e=r.ic.get(t),n=await ou(r,e);n.snapshot&&s.push(n.snapshot)}}else{const n=await po(r.localStore,t);e=await Ao(r.localStore,n),await Ka(r,cu(n),t,!1,e.resumeToken)}i.push(e)}return r.sc.Wo(s),i}function cu(t){return Me(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function hu(t){const e=b(t);return b(b(e.localStore).persistence).vi()}async function du(t,e,n,r){const i=b(t);if(i.dc)return void f("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const t=await go(i.localStore,tn(s[0])),r=er.createSynthesizedRemoteEventForCurrentChange(e,"current"===n,St.EMPTY_BYTE_STRING);await ru(i,t,r);break}case"rejected":await fo(i.localStore,e,!0),Za(i,e,r);break;default:y()}}async function Au(t,e,n){const r=fu(t);if(r.dc){for(const t of e){if(r.rc.has(t)){f("SyncEngine","Adding an already active target "+t);continue}const e=await po(r.localStore,t),n=await Ao(r.localStore,e);await Ka(r,cu(e),n.targetId,!1,n.resumeToken),Ho(r.remoteStore,n)}for(const t of n)r.rc.has(t)&&await fo(r.localStore,t,!1).then(()=>{Wo(r.remoteStore,t),Za(r,t)}).catch(nt)}}function fu(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Va.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=su.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ha.bind(null,e),e.sc.Wo=qa.bind(null,e.eventManager),e.sc.wc=Ta.bind(null,e.eventManager),e}function mu(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wa.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ya.bind(null,e),e}class pu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Ro(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return ao(this.persistence,new so,t.initialUser,this.yt)}yc(t){return new Ws(zs.Bs,this.yt)}gc(t){return new To}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gu extends pu{constructor(t,e,n){super(),this.Ac=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Ac.initialize(this,t),await mu(this.Ac.syncEngine),await oa(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(t){return ao(this.persistence,new so,t.initialUser,this.yt)}Tc(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Ss(n,t.asyncQueue,e)}Ec(t,e){const n=new ft(e,this.persistence);return new At(t.asyncQueue,n)}yc(t){const e=ro(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?cs.withCacheSize(this.cacheSizeBytes):cs.DEFAULT;return new to(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,ko(),No(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(t){return new To}}class yu extends gu{constructor(t,e){super(t,e,!1),this.Ac=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Ac.syncEngine;this.sharedClientState instanceof qo&&(this.sharedClientState.syncEngine={Fr:uu.bind(null,e),$r:du.bind(null,e),Br:Au.bind(null,e),vi:hu.bind(null,e),Mr:au.bind(null,e)},await this.sharedClientState.start()),await this.persistence.li(async t=>{await async function(t,e){const n=b(t);if(fu(n),mu(n),!0===e&&!0!==n.dc){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await lu(n,t.toArray());n.dc=!0,await pa(n.remoteStore,!0);for(const t of e)Ho(n.remoteStore,t)}else if(!1===e&&!1!==n.dc){const t=[];let e=Promise.resolve();n.rc.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?t.push(i):e=e.then(()=>(Za(n,i),fo(n.localStore,i,!0))),Wo(n.remoteStore,i)}),await e,await lu(n,t),function(t){const e=b(t);e.cc.forEach((t,n)=>{Wo(e.remoteStore,n)}),e.ac.fs(),e.cc=new Map,e.uc=new be(G.comparator)}(n),n.dc=!1,await pa(n.remoteStore,!1)}}(this.Ac.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start():t||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(t&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():t||this.indexBackfillerScheduler.stop())})}gc(t){const e=ko();if(!qo.C(e))throw new I(v.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ro(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new qo(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class wu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ja(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=iu.bind(null,this.syncEngine),await pa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Sa}createDatastore(t){const e=Ro(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Oo(r));var r;return function(t,e,n,r){return new Qo(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Ja(this.syncEngine,t,0),s=Lo.C()?new Lo:new Uo,new Go(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Pa(t,e,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);f("RemoteStore","RemoteStore shutting down."),e._u.add(5),await Jo(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
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
 */function Eu(t,e,n){if(!n)throw new I(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bu(t,e,n,r){if(!0===e&&!0===r)throw new I(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vu(t){if(!G.isDocumentKey(t))throw new I(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iu(t){if(G.isDocumentKey(t))throw new I(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Su(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cu(t);throw new I(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Du(t,e){if(e<=0)throw new I(v.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
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
 */const _u=new Map;class qu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new I(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new I(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,bu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class Tu{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new I(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new D;switch(t.type){case"gapi":const e=t.client;return new U(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new I(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=_u.get(t);e&&(f("ComponentProvider","Removing Datastore"),_u.delete(t),e.terminate())}(this),Promise.resolve()}}function Uu(t,e,n,r={}){var i;const s=(t=Su(t,Tu))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&p("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=l.MOCK_USER;else{e=Object(o.f)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new I(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new l(s)}t._authCredentials=new _(new S(e,n))}}
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
 */class Lu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ju(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Lu(this.firestore,t,this._key)}}class xu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new xu(this.firestore,t,this._query)}}class ju extends xu{constructor(t,e,n){super(t,e,Pe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Lu(this.firestore,null,new G(t))}withConverter(t){return new ju(this.firestore,t,this._path)}}function Ou(t,e,...n){if(t=Object(o.l)(t),Eu("collection","path",e),t instanceof Tu){const r=P.fromString(e,...n);return Iu(r),new ju(t,null,r)}{if(!(t instanceof Lu||t instanceof ju))throw new I(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(P.fromString(e,...n));return Iu(r),new ju(t.firestore,null,r)}}function ku(t,e){if(t=Su(t,Tu),Eu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new I(v.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new xu(t,null,function(t){return new Fe(P.emptyPath(),t)}(e))}function Nu(t,e,...n){if(t=Object(o.l)(t),1===arguments.length&&(e=O.R()),Eu("doc","path",e),t instanceof Tu){const r=P.fromString(e,...n);return vu(r),new Lu(t,null,new G(r))}{if(!(t instanceof Lu||t instanceof ju))throw new I(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(P.fromString(e,...n));return vu(r),new Lu(t.firestore,t instanceof ju?t.converter:null,new G(r))}}function Ru(t,e){return t=Object(o.l)(t),e=Object(o.l)(e),(t instanceof Lu||t instanceof ju)&&(e instanceof Lu||e instanceof ju)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Bu(t,e){return t=Object(o.l)(t),e=Object(o.l)(e),t instanceof xu&&e instanceof xu&&t.firestore===e.firestore&&ze(t._query,e._query)&&t.converter===e.converter
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
 */}function Fu(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
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
 */class Mu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):m("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
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
 */class Pu{constructor(t,e){this.Pc=t,this.yt=e,this.metadata=new C,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(t=>{t&&t.Ou()?this.metadata.resolve(t.ku.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.ku)))},t=>this.metadata.reject(t))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const t=await this.Sc();if(null===t)return null;const e=this.vc.decode(t),n=Number(e);isNaN(n)&&this.Dc(`length string (${e}) is not valid number`);const r=await this.Cc(n);return new xa(JSON.parse(r),t.length+n)}xc(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(0===this.buffer.length)return null;const t=this.xc();t<0&&this.Dc("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Cc(t){for(;this.buffer.length<t;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const e=this.vc.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Dc(t){throw this.Pc.cancel(),new Error("Invalid bundle format: "+t)}async Nc(){const t=await this.Pc.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
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
class Qu{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new I(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=b(t),r=Cr(n.yt)+"/documents",i={documents:e.map(t=>Er(n.yt,t))},s=await n._o("BatchGetDocuments",r,i,e.length),o=new Map;s.forEach(t=>{const e=function(t,e){return"found"in e?function(t,e){w(!!e.found),e.found.name,e.found.updateTime;const n=br(t,e.found.name),r=gr(e.found.updateTime),i=e.found.createTime?gr(e.found.createTime):F.min(),s=new qe({mapValue:{fields:e.found.fields}});return Ue.newFoundDocument(n,r,i,s)}(t,e):"missing"in e?function(t,e){w(!!e.missing),w(!!e.readTime);const n=br(t,e.missing),r=gr(e.readTime);return Ue.newNoDocument(n,r)}(t,e):y()}(n.yt,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());w(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new On(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=G.fromPath(e);this.mutations.push(new kn(n,this.precondition(n)))}),await async function(t,e){const n=b(t),r=Cr(n.yt)+"/documents",i={writes:e.map(t=>qr(n.yt,t))};await n.ao("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw y();e=F.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new I(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(F.min())?bn.exists(!1):bn.updateTime(e):bn.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(F.min()))throw new I(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return bn.updateTime(e)}return bn.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
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
 */class Ku{constructor(t,e,n,r,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=r,this.deferred=i,this.kc=n.maxAttempts,this.xo=new Bo(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const t=new Qu(this.datastore),e=this.Mc(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.Fc(t)}))}).catch(t=>{this.Fc(t)})})}Mc(t){try{const e=this.updateFunction(t);return!bt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(t){this.kc>0&&this.$c(t)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(t)}$c(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||"already-exists"===e||!Fn(e)}return!1}}
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
 */class Gu{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=l.UNAUTHENTICATED,this.clientId=O.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(f("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ea(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Vu(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await uo(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ju(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hu(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>ma(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>ma(e.remoteStore,n)),t.onlineComponents=e}async function Hu(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Vu(t,new pu)),t.offlineComponents}async function Wu(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Ju(t,new wu)),t.onlineComponents}function Yu(t){return Hu(t).then(t=>t.persistence)}function zu(t){return Hu(t).then(t=>t.localStore)}function Xu(t){return Wu(t).then(t=>t.remoteStore)}function Zu(t){return Wu(t).then(t=>t.syncEngine)}function $u(t){return Wu(t).then(t=>t.datastore)}async function tl(t){const e=await Wu(t),n=e.eventManager;return n.onListen=Qa.bind(null,e.syncEngine),n.onUnlisten=Ga.bind(null,e.syncEngine),n}function el(t,e,n={}){const r=new C;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Mu({next:s=>{e.enqueueAndForget(()=>_a(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new I(v.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new I(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new La(Pe(n.path),s,{includeMetadataChanges:!0,Nu:!0});return Da(t,o)}(await tl(t),t.asyncQueue,e,n,r)),r.promise}function nl(t,e,n={}){const r=new C;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Mu({next:n=>{e.enqueueAndForget(()=>_a(t,o)),n.fromCache&&"server"===r.source?i.reject(new I(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new La(n,s,{includeMetadataChanges:!0,Nu:!0});return Da(t,o)}(await tl(t),t.asyncQueue,e,n,r)),r.promise}function rl(t,e,n,r){const i=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new Pu(t,e)}(function(t,e){if(t instanceof Uint8Array)return Fu(t,e);if(t instanceof ArrayBuffer)return Fu(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
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
 */(n,Ro(e));t.asyncQueue.enqueueAndForget(async()=>{!function(t,e,n){const r=b(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=b(t),r=gr(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Ns.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(r)>=0)}(t.localStore,r))return await e.close(),n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(ka(r));const i=new Oa(r,t.localStore,e.yt);let s=await e.mc();for(;s;){const t=await i.Fu(s);t&&n._updateProgress(t),s=await e.mc()}const o=await i.complete();return await ru(t,o.Lu,void 0),await function(t,e){const n=b(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Ns.saveBundleMetadata(t,e))}(t.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(t){return p("SyncEngine","Loading bundle failed with "+t),n._failWith(t),Promise.resolve(new Set)}}
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
 */)(r,e,n).then(t=>{r.sharedClientState.notifyBundleLoaded(t)})}(await Zu(t),i,r)})}class il{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Bo(this,"async_queue_retry"),this.Wc=()=>{const t=No();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=No();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=No();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const e=new C;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!ut(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const e=this.Bc.then(()=>(this.Gc=!0,t().catch(t=>{this.Kc=t,this.Gc=!1;throw m("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t)),t}).then(t=>(this.Gc=!1,t))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=wa.createAndSchedule(this,t,e,n,t=>this.Yc(t));return this.Uc.push(r),r}zc(){this.Kc&&y()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}function sl(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
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
 */(t)}class ol{constructor(){this._progressObserver={},this._taskCompletionResolver=new C,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
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
 */const al=-1;class ul extends Tu{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new il,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cl(this),this._firestoreClient.terminate()}}function ll(t){return t._firestoreClient||cl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cl(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new pt(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
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
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Gu(t._authCredentials,t._appCheckCredentials,t._queue,r)}function hl(t,e){El(t=Su(t,ul));const n=ll(t),r=t._freezeSettings(),i=new wu;return Al(n,i,new gu(i,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function dl(t){El(t=Su(t,ul));const e=ll(t),n=t._freezeSettings(),r=new wu;return Al(e,r,new yu(r,n.cacheSizeBytes))}function Al(t,e,n){const r=new C;return t.asyncQueue.enqueue(async()=>{try{await Vu(t,n),await Ju(t,e),r.resolve()}catch(t){const e=t;if(!function(t){return"FirebaseError"===t.name?t.code===v.FAILED_PRECONDITION||t.code===v.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(e))throw e;p("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}}).then(()=>r.promise)}function fl(t){if(t._initialized&&!t._terminated)throw new I(v.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new C;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!st.C())return Promise.resolve();const e=t+"main";await st.delete(e)}
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
 */(ro(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function ml(t){return function(t){const e=new C;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e){const n=b(t);$o(n.remoteStore)||f("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=b(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.mutationQueue.getHighestUnacknowledgedBatchId(t))}(n.localStore);if(-1===t)return void e.resolve();const r=n.lc.get(t)||[];r.push(e),n.lc.set(t,r)}catch(t){const n=Ea(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}(await Zu(t),e)),e.promise}(ll(t=Su(t,ul)))}function pl(t){return function(t){return t.asyncQueue.enqueue(async()=>{const e=await Yu(t),n=await Xu(t);return e.setNetworkEnabled(!0),function(t){const e=b(t);return e._u.delete(0),Vo(e)}(n)})}(ll(t=Su(t,ul)))}function gl(t){return function(t){return t.asyncQueue.enqueue(async()=>{const e=await Yu(t),n=await Xu(t);return e.setNetworkEnabled(!1),async function(t){const e=b(t);e._u.add(0),await Jo(e),e.gu.set("Offline")}(n)})}(ll(t=Su(t,ul)))}function yl(t,e){const n=ll(t=Su(t,ul)),r=new ol;return rl(n,t._databaseId,e,r),r}function wl(t,e){return function(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=b(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Ns.getNamedQuery(t,e))}(await zu(t),e))}(ll(t=Su(t,ul)),e).then(e=>e?new xu(t,null,e.query):null)}function El(t){if(t._initialized||t._terminated)throw new I(v.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
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
 */class bl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bl(St.fromBase64String(t))}catch(t){throw new I(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new bl(St.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class vl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new I(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Il{constructor(t){this._methodName=t}}
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
 */class Cl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new I(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new I(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}
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
 */const Sl=/^__.*__$/;class Dl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Un(t,this.data,this.fieldMask,e,this.fieldTransforms):new Tn(t,this.data,e,this.fieldTransforms)}}class _l{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Un(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ql(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Tl{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Tl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Yl(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(ql(this.sa)&&Sl.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Ul{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||Ro(t)}da(t,e,n,r=!1){return new Tl({sa:t,methodName:e,fa:n,path:K.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ll(t){const e=t._freezeSettings(),n=Ro(t._databaseId);return new Ul(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xl(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);Vl("Data must be an object, but it was:",o,r);const a=Kl(r,o);let u,l;if(s.merge)u=new _e(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Jl(e,r,n);if(!o.contains(i))throw new I(v.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);zl(t,i)||t.push(i)}u=new _e(t),l=o.fieldTransforms.filter(t=>u.covers(t.field))}else u=null,l=o.fieldTransforms;return new Dl(new qe(a),u,l)}class jl extends Il{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(this._methodName+"() can only appear at the top level of your update data"):t.ha(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof jl}}function Ol(t,e,n){return new Tl({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class kl extends Il{_toFieldTransform(t){return new wn(t.path,new hn)}isEqual(t){return t instanceof kl}}class Nl extends Il{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){const e=Ol(this,t,!0),n=this._a.map(t=>Ql(t,e)),r=new dn(n);return new wn(t.path,r)}isEqual(t){return this===t}}class Rl extends Il{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){const e=Ol(this,t,!0),n=this._a.map(t=>Ql(t,e)),r=new fn(n);return new wn(t.path,r)}isEqual(t){return this===t}}class Bl extends Il{constructor(t,e){super(t),this.wa=e}_toFieldTransform(t){const e=new pn(t.yt,on(t.yt,this.wa));return new wn(t.path,e)}isEqual(t){return this===t}}function Fl(t,e,n,r){const i=t.da(1,e,n);Vl("Data must be an object, but it was:",i,r);const s=[],a=qe.empty();wt(r,(t,r)=>{const u=Wl(e,t,n);r=Object(o.l)(r);const l=i.ca(u);if(r instanceof jl)s.push(u);else{const t=Ql(r,l);null!=t&&(s.push(u),a.set(u,t))}});const u=new _e(s);return new _l(a,u,i.fieldTransforms)}function Ml(t,e,n,r,i,s){const a=t.da(1,e,n),u=[Jl(e,r,n)],l=[i];if(s.length%2!=0)throw new I(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)u.push(Jl(e,s[t])),l.push(s[t+1]);const c=[],h=qe.empty();for(let t=u.length-1;t>=0;--t)if(!zl(c,u[t])){const e=u[t];let n=l[t];n=Object(o.l)(n);const r=a.ca(e);if(n instanceof jl)c.push(e);else{const t=Ql(n,r);null!=t&&(c.push(e),h.set(e,t))}}const d=new _e(c);return new _l(h,d,a.fieldTransforms)}function Pl(t,e,n,r=!1){return Ql(n,t.da(r?4:3,e))}function Ql(t,e){if(Gl(t=Object(o.l)(t)))return Vl("Unsupported field value:",e,t),Kl(t,e);if(t instanceof Il)return function(t,e){if(!ql(e.sa))throw e.ha(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.ha(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Ql(i,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o.l)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return on(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=B.fromDate(t);return{timestampValue:fr(e.yt,n)}}if(t instanceof B){const n=new B(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:fr(e.yt,n)}}if(t instanceof Cl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof bl)return{bytesValue:mr(e.yt,t._byteString)};if(t instanceof Lu){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:yr(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha("Unsupported field value: "+Cu(t))}(t,e)}function Kl(t,e){const n={};return Et(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wt(t,(t,r)=>{const i=Ql(r,e.ra(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Gl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof B||t instanceof Cl||t instanceof bl||t instanceof Lu||t instanceof Il)}function Vl(t,e,n){if(!Gl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Cu(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Jl(t,e,n){if((e=Object(o.l)(e))instanceof vl)return e._internalPath;if("string"==typeof e)return Wl(t,e);throw Yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Hl=new RegExp("[~\\*/\\[\\]]");function Wl(t,e,n){if(e.search(Hl)>=0)throw Yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vl(...e.split("."))._internalPath}catch(r){throw Yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=" in field "+r),o&&(u+=" in document "+i),u+=")"),new I(v.INVALID_ARGUMENT,a+t+u)}function zl(t,e){return t.some(t=>t.isEqual(e))}
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
 */class Xl{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Zl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field($l("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Zl extends Xl{data(){return super.data()}}function $l(t,e){return"string"==typeof e?Wl(t,e):e instanceof vl?e._internalPath:e._delegate._internalPath}
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
 */function tc(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new I(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ec{}class nc extends ec{}function rc(t,e,...n){let r=[];e instanceof ec&&r.push(e),r=r.concat(n),function(t){const e=t.filter(t=>t instanceof oc).length,n=t.filter(t=>t instanceof ic).length;if(e>1||e>0&&n>0)throw new I(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
 */(r);for(const e of r)t=e._apply(t);return t}class ic extends nc{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new ic(t,e,n)}_apply(t){const e=this._parse(t);return bc(t._query,e),new xu(t.firestore,t.converter,We(t._query,e))}_parse(t){const e=Ll(t.firestore);return function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new I(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Ec(o,s);const e=[];for(const n of o)e.push(wc(r,t,n));a={arrayValue:{values:e}}}else a=wc(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Ec(o,s),a=Pl(n,"where",o,"in"===s||"not-in"===s);return ne.create(i,s,a)}(t._query,0,e,t.firestore._databaseId,this._field,this._op,this._value)}}function sc(t,e,n){const r=e,i=$l("where",t);return ic._create(i,r,n)}class oc extends ec{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new oc(t,e)}_parse(t){const e=this._queryConstraints.map(e=>e._parse(t)).filter(t=>t.getFilters().length>0);return 1===e.length?e[0]:re.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const t of r)bc(n,t),n=We(n,t)}(t._query,e),new xu(t.firestore,t.converter,We(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class ac extends nc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ac(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new I(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new I(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new we(e,n);return function(t,e){if(null===Ke(t)){const n=Ge(t);null!==n&&vc(t,n,e.field)}}(t,r),r}(t._query,this._field,this._direction);return new xu(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Fe(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function uc(t,e="asc"){const n=e,r=$l("orderBy",t);return ac._create(r,n)}class lc extends nc{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new lc(t,e,n)}_apply(t){return new xu(t.firestore,t.converter,Ye(t._query,this._limit,this._limitType))}}function cc(t){return Du("limit",t),lc._create("limit",t,"F")}function hc(t){return Du("limitToLast",t),lc._create("limitToLast",t,"L")}class dc extends nc{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new dc(t,e,n)}_apply(t){const e=yc(t,this.type,this._docOrFields,this._inclusive);return new xu(t.firestore,t.converter,function(t,e){return new Fe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Ac(...t){return dc._create("startAt",t,!0)}function fc(...t){return dc._create("startAfter",t,!1)}class mc extends nc{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new mc(t,e,n)}_apply(t){const e=yc(t,this.type,this._docOrFields,this._inclusive);return new xu(t.firestore,t.converter,function(t,e){return new Fe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function pc(...t){return mc._create("endBefore",t,!1)}function gc(...t){return mc._create("endAt",t,!0)}function yc(t,e,n,r){if(n[0]=Object(o.l)(n[0]),n[0]instanceof Xl)return function(t,e,n,r,i){if(!r)throw new I(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const n of Je(t))if(n.field.isKeyField())s.push(Mt(e,r.key));else{const t=r.data.field(n.field);if(Ut(t))throw new I(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=n.field.canonicalString();throw new I(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new Zt(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ll(t.firestore);return function(t,e,n,r,i,s){const o=t.explicitOrderBy;if(i.length>o.length)throw new I(v.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let s=0;s<i.length;s++){const u=i[s];if(o[s].field.isKeyField()){if("string"!=typeof u)throw new I(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof u}`);if(!Ve(t)&&-1!==u.indexOf("/"))throw new I(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${u}' contains a slash.`);const n=t.path.child(P.fromString(u));if(!G.isDocumentKey(n))throw new I(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new G(n);a.push(Mt(e,i))}else{const t=Pl(n,r,u);a.push(t)}}return new Zt(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}function wc(t,e,n){if("string"==typeof(n=Object(o.l)(n))){if(""===n)throw new I(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ve(e)&&-1!==n.indexOf("/"))throw new I(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(P.fromString(n));if(!G.isDocumentKey(r))throw new I(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mt(t,new G(r))}if(n instanceof Lu)return Mt(t,n._key);throw new I(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cu(n)}.`)}function Ec(t,e){if(!Array.isArray(t)||0===t.length)throw new I(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new I(v.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function bc(t,e){if(e.isInequality()){const n=Ge(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new I(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Ke(t);null!==i&&vc(t,r,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new I(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function vc(t,e,n){if(!n.isEqual(e))throw new I(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Ic{convertValue(t,e="none"){switch(Ot(t)){case 0:return null;case 1:return t.booleanValue;case 2:return qt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Tt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return wt(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Cl(qt(t.latitude),qt(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=function t(e){const n=e.mapValue.fields.__previous_value__;return Ut(n)?t(n):n}(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Lt(t));default:return null}}convertTimestamp(t){const e=_t(t);return new B(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=P.fromString(t);w(Fr(n));const r=new gt(n.get(1),n.get(3)),i=new G(n.popFirst(5));return r.isEqual(e)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function Cc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Sc extends Ic{constructor(t){super(),this.firestore=t}convertBytes(t){return new bl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Lu(this.firestore,null,e)}}
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
 */class Dc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _c extends Xl{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field($l("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class qc extends _c{data(t={}){return super.data(t)}}class Tc{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Dc(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new qc(this._firestore,this._userDataWriter,n.key,n,new Dc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new I(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new qc(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Dc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new qc(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Dc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Uc(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Uc(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function Lc(t,e){return t instanceof _c&&e instanceof _c?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Tc&&e instanceof Tc&&t._firestore===e._firestore&&Bu(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
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
 */function xc(t){t=Su(t,Lu);const e=Su(t.firestore,ul);return el(ll(e),t._key).then(n=>Jc(e,t,n))}class jc extends Ic{constructor(t){super(),this.firestore=t}convertBytes(t){return new bl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Lu(this.firestore,null,e)}}function Oc(t){t=Su(t,Lu);const e=Su(t.firestore,ul),n=ll(e),r=new jc(e);return function(t,e){const n=new C;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await function(t,e){const n=b(t);return n.persistence.runTransaction("read document","readonly",t=>n.localDocuments.getDocument(t,e))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new I(v.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=Ea(t,`Failed to get document '${e} from cache`);n.reject(r)}}(await zu(t),e,n)),n.promise}(n,t._key).then(n=>new _c(e,r,t._key,n,new Dc(null!==n&&n.hasLocalMutations,!0),t.converter))}function kc(t){t=Su(t,Lu);const e=Su(t.firestore,ul);return el(ll(e),t._key,{source:"server"}).then(n=>Jc(e,t,n))}function Nc(t){t=Su(t,xu);const e=Su(t.firestore,ul),n=ll(e),r=new jc(e);return tc(t._query),nl(n,t._query).then(n=>new Tc(e,r,t,n))}function Rc(t){t=Su(t,xu);const e=Su(t.firestore,ul),n=ll(e),r=new jc(e);return function(t,e){const n=new C;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await mo(t,e,!0),i=new Ba(e,r.Hi),s=i.Wu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(t){const r=Ea(t,`Failed to execute query '${e} against cache`);n.reject(r)}}(await zu(t),e,n)),n.promise}(n,t._query).then(n=>new Tc(e,r,t,n))}function Bc(t){t=Su(t,xu);const e=Su(t.firestore,ul),n=ll(e),r=new jc(e);return nl(n,t._query,{source:"server"}).then(n=>new Tc(e,r,t,n))}function Fc(t,e,n){t=Su(t,Lu);const r=Su(t.firestore,ul),i=Cc(t.converter,e,n);return Vc(r,[xl(Ll(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,bn.none())])}function Mc(t,e,n,...r){t=Su(t,Lu);const i=Su(t.firestore,ul),s=Ll(i);let a;return a="string"==typeof(e=Object(o.l)(e))||e instanceof vl?Ml(s,"updateDoc",t._key,e,n,r):Fl(s,"updateDoc",t._key,e),Vc(i,[a.toMutation(t._key,bn.exists(!0))])}function Pc(t){return Vc(Su(t.firestore,ul),[new On(t._key,bn.none())])}function Qc(t,e){const n=Su(t.firestore,ul),r=Nu(t),i=Cc(t.converter,e);return Vc(n,[xl(Ll(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,bn.exists(!1))]).then(()=>r)}function Kc(t,...e){var n,r,i;t=Object(o.l)(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||sl(e[a])||(s=e[a],a++);const u={includeMetadataChanges:s.includeMetadataChanges};if(sl(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let l,c,h;if(t instanceof Lu)c=Su(t.firestore,ul),h=Pe(t._key.path),l={next:n=>{e[a]&&e[a](Jc(c,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Su(t,xu);c=Su(n.firestore,ul),h=n._query;const r=new jc(c);l={next:t=>{e[a]&&e[a](new Tc(c,r,n,t))},error:e[a+1],complete:e[a+2]},tc(t._query)}return function(t,e,n,r){const i=new Mu(r),s=new La(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Da(await tl(t),s)),()=>{i.bc(),t.asyncQueue.enqueueAndForget(async()=>_a(await tl(t),s))}}(ll(c),h,u,l)}function Gc(t,e){return function(t,e){const n=new Mu(e);return t.asyncQueue.enqueueAndForget(async()=>function(t,e){b(t).Ru.add(e),e.next()}(await tl(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(t,e){b(t).Ru.delete(e)}(await tl(t),n))}}(ll(t=Su(t,ul)),sl(e)?e:{next:e})}function Vc(t,e){return function(t,e){const n=new C;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){const r=mu(t);try{const t=await function(t,e){const n=b(t),r=B.now(),i=e.reduce((t,e)=>t.add(e.key),Zn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=Kn(),u=Zn();return n.Gi.getEntries(t,i).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(u=u.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(i=>{s=i;const o=[];for(const t of e){const e=_n(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Un(t.key,e,Te(e.value.mapValue),bn.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(s,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:Jn(s)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new be(k)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await ru(r,t.changes),await oa(r.remoteStore)}catch(t){const e=Ea(t,"Failed to persist write");n.reject(e)}}(await Zu(t),e,n)),n.promise}(ll(t),e)}function Jc(t,e,n){const r=n.docs.get(e._key),i=new jc(t);return new _c(t,i,e._key,r,new Dc(n.hasPendingWrites,n.fromCache),e.converter)}
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
const Hc={maxAttempts:5};
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
 */class Wc{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Ll(t)}set(t,e,n){this._verifyNotCommitted();const r=Yc(t,this._firestore),i=Cc(r.converter,e,n),s=xl(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,bn.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=Yc(t,this._firestore);let s;return s="string"==typeof(e=Object(o.l)(e))||e instanceof vl?Ml(this._dataReader,"WriteBatch.update",i._key,e,n,r):Fl(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(s.toMutation(i._key,bn.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Yc(t,this._firestore);return this._mutations=this._mutations.concat(new On(e._key,bn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new I(v.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Yc(t,e){if((t=Object(o.l)(t)).firestore!==e)throw new I(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
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
 */class zc extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Ll(t)}get(t){const e=Yc(t,this._firestore),n=new Sc(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return y();const r=t[0];if(r.isFoundDocument())return new Xl(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new Xl(this._firestore,n,e._key,null,e.converter);throw y()})}set(t,e,n){const r=Yc(t,this._firestore),i=Cc(r.converter,e,n),s=xl(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(t,e,n,...r){const i=Yc(t,this._firestore);let s;return s="string"==typeof(e=Object(o.l)(e))||e instanceof vl?Ml(this._dataReader,"Transaction.update",i._key,e,n,r):Fl(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,s),this}delete(t){const e=Yc(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Yc(t,this._firestore),n=new jc(this._firestore);return super.get(t).then(t=>new _c(this._firestore,n,e._key,t._document,new Dc(!1,!1),e.converter))}}function Xc(t,e,n){t=Su(t,ul);const r=Object.assign(Object.assign({},Hc),n);return function(t){if(t.maxAttempts<1)throw new I(v.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(t,e,n){const r=new C;return t.asyncQueue.enqueueAndForget(async()=>{const i=await $u(t);new Ku(t.asyncQueue,i,n,e,r).run()}),r.promise}(ll(t),n=>e(new zc(t,n)),r)}
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
 */function Zc(){return new jl("deleteField")}function $c(){return new kl("serverTimestamp")}function th(...t){return new Nl("arrayUnion",t)}function eh(...t){return new Rl("arrayRemove",t)}function nh(t){return new Bl("increment",t)}
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
 */!function(t,e=!0){!function(t){c=t}(r.SDK_VERSION),Object(r._registerComponent)(new i.a("firestore",(t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new ul(new q(t.getProvider("auth-internal")),new x(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new I(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gt(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Object(r.registerVersion)(u,"3.8.0",t),Object(r.registerVersion)(u,"3.8.0","esm2017")}()}).call(this,n(21))},function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return C})),n.d(e,"f",(function(){return E})),n.d(e,"g",(function(){return _})),n.d(e,"h",(function(){return S})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return y})),n.d(e,"k",(function(){return g})),n.d(e,"l",(function(){return U})),n.d(e,"m",(function(){return l})),n.d(e,"n",(function(){return h})),n.d(e,"o",(function(){return A})),n.d(e,"p",(function(){return c})),n.d(e,"q",(function(){return d})),n.d(e,"r",(function(){return f}));
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
const i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,u=a?t[e+2]:0,l=i>>2,c=(3&i)<<4|o>>4;let h=(15&o)<<2|u>>6,d=63&u;a||(d=64,s||(h=64)),r.push(n[l],n[c],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw Error();const u=i<<2|s>>4;if(r.push(u),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){return function(t){const e=i(t);return s.encodeByteArray(e,!0)}(t).replace(/\./g,"")},a=function(t){try{return s.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
 */function u(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=u(t[n],e[n]));return t}
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
function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function c(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}function h(){return"object"==typeof self&&self.self===self}function d(){return!c()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){try{return"object"==typeof indexedDB}catch(t){return!1}}function f(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})}
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
const m=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,p=()=>{try{return m()||(()=>{if(void 0===r||void 0===r.env)return;const t=r.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&a(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+t)}},g=t=>{const e=(t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
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
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
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
 */function E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(s)),""].join(".")}
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
 */class b extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,v.prototype.create)}}class v{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(I,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new b(r,o,n)}}const I=/\{\$([^}]+)}/g;
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
function C(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function S(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(D(n)&&D(s)){if(!S(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function D(t){return null!==t&&"object"==typeof t}
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
 */function _(t,e){const n=new q(t,e);return n.subscribe.bind(n)}class q{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=T),void 0===r.error&&(r.error=T),void 0===r.complete&&(r.complete=T);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T(){}
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
function U(t){return t&&t._delegate?t._delegate:t}}).call(this,n(20),n(21))},function(t,e,n){"use strict";n.r(e),n.d(e,"FirebaseError",(function(){return s.c})),n.d(e,"SDK_VERSION",(function(){return B})),n.d(e,"_DEFAULT_ENTRY_NAME",(function(){return S})),n.d(e,"_addComponent",(function(){return T})),n.d(e,"_addOrOverwriteComponent",(function(){return U})),n.d(e,"_apps",(function(){return _})),n.d(e,"_clearComponents",(function(){return O})),n.d(e,"_components",(function(){return q})),n.d(e,"_getProvider",(function(){return x})),n.d(e,"_registerComponent",(function(){return L})),n.d(e,"_removeServiceInstance",(function(){return j})),n.d(e,"deleteApp",(function(){return Q})),n.d(e,"getApp",(function(){return M})),n.d(e,"getApps",(function(){return P})),n.d(e,"initializeApp",(function(){return F})),n.d(e,"onLog",(function(){return G})),n.d(e,"registerVersion",(function(){return K})),n.d(e,"setLogLevel",(function(){return V}));var r=n(3),i=n(5),s=n(1);let o,a;const u=new WeakMap,l=new WeakMap,c=new WeakMap,h=new WeakMap,d=new WeakMap;let A={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return l.get(t);if("objectStoreNames"===e)return t.objectStoreNames||c.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function f(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(g(this),e),p(u.get(this))}:function(...e){return p(t.apply(g(this),e))}:function(e,...n){const r=t.call(g(this),e,...n);return c.set(r,e.sort?e.sort():[e]),p(r)}}function m(t){return"function"==typeof t?f(t):(t instanceof IDBTransaction&&function(t){if(l.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});l.set(t,e)}(t),e=t,(o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,A):t);var e}function p(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(p(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&u.set(e,t)}).catch(()=>{}),d.set(e,t),e}(t);if(h.has(t))return h.get(t);const e=m(t);return e!==t&&(h.set(t,e),d.set(e,t)),e}const g=t=>d.get(t);const y=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],E=new Map;function b(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(E.get(e))return E.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!y.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return E.set(e,s),s}A=(t=>({...t,get:(e,n,r)=>b(e,n)||t.get(e,n,r),has:(e,n)=>!!b(e,n)||t.has(e,n)}))(A);
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
class v{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const I="@firebase/app",C=new i.b("@firebase/app"),S="[DEFAULT]",D={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},_=new Map,q=new Map;function T(t,e){try{t.container.addComponent(e)}catch(n){C.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function U(t,e){t.container.addOrOverwriteComponent(e)}function L(t){const e=t.name;if(q.has(e))return C.debug(`There were multiple attempts to register component ${e}.`),!1;q.set(e,t);for(const e of _.values())T(e,t);return!0}function x(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function j(t,e,n=S){x(t,e).clearInstance(n)}function O(){q.clear()}
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
 */const k={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},N=new s.b("app","Firebase",k);
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
class R{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw N.create("app-deleted",{appName:this._name})}}
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
 */const B="9.15.0";function F(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:S,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!=typeof o||!o)throw N.create("bad-app-name",{appName:String(o)});if(n||(n=Object(s.j)()),!n)throw N.create("no-options");const a=_.get(o);if(a){if(Object(s.h)(n,a.options)&&Object(s.h)(i,a.config))return a;throw N.create("duplicate-app",{appName:o})}const u=new r.b(o);for(const t of q.values())u.addComponent(t);const l=new R(n,i,u);return _.set(o,l),l}function M(t=S){const e=_.get(t);if(!e&&t===S)return F();if(!e)throw N.create("no-app",{appName:t});return e}function P(){return Array.from(_.values())}async function Q(t){const e=t.name;_.has(e)&&(_.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function K(t,e,n){var i;let s=null!==(i=D[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void C.warn(t.join(" "))}L(new r.a(s+"-version",()=>({library:s,version:e}),"VERSION"))}function G(t,e){if(null!==t&&"function"!=typeof t)throw N.create("invalid-log-argument");Object(i.d)(t,e)}function V(t){Object(i.c)(t)}
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
 */const J="firebase-heartbeat-store";let H=null;function W(){return H||(H=function(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=p(o);return r&&o.addEventListener("upgradeneeded",t=>{r(p(o.result),t.oldVersion,t.newVersion,p(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(t=>{s&&t.addEventListener("close",()=>s()),i&&t.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(J)}}}).catch(t=>{throw N.create("idb-open",{originalErrorMessage:t.message})})),H}async function Y(t,e){try{const n=(await W()).transaction(J,"readwrite"),r=n.objectStore(J);return await r.put(e,z(t)),n.done}catch(t){if(t instanceof s.c)C.warn(t.message);else{const e=N.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});C.warn(e.message)}}}function z(t){return`${t.name}!${t.options.appId}`}
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
 */class X{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new $(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Z();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some(t=>t.date===e))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Z(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),tt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(s.d)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Z(){return(new Date).toISOString().substring(0,10)}class ${constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s.o)()&&Object(s.r)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await W()).transaction(J).objectStore(J).get(z(t))}catch(t){if(t instanceof s.c)C.warn(t.message);else{const e=N.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});C.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Y(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Y(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function tt(t){return Object(s.d)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var et;et="",L(new r.a("platform-logger",t=>new v(t),"PRIVATE")),L(new r.a("heartbeat",t=>new X(t),"PRIVATE")),K(I,"0.9.0",et),K(I,"0.9.0","esm2017"),K("fire-js","")},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var r=n(1);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.a;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,"[DEFAULT]"===r?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return zn})),n.d(e,"b",(function(){return Zn})),n.d(e,"c",(function(){return Xn})),n.d(e,"d",(function(){return tr})),n.d(e,"e",(function(){return $n})),n.d(e,"f",(function(){return er})),n.d(e,"g",(function(){return nr})),n.d(e,"h",(function(){return Wn})),n.d(e,"i",(function(){return Yn}));var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},s={},o=o||{},a=i||self;function u(){}function l(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function c(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var h="closure_uid_"+(1e9*Math.random()>>>0),d=0;function A(t,e,n){return t.call.apply(t.bind,arguments)}function f(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A:f).apply(null,arguments)}function p(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function g(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function y(){this.s=this.s,this.o=this.o}y.prototype.s=!1,y.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,h)&&t[h]||(t[h]=++d))},y.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function E(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function b(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(l(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function v(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",u,e),a.removeEventListener("test",u,e)}catch(t){}return t}();function C(t){return/^[\s\xa0]*$/.test(t)}var S=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return t<e?-1:t>e?1:0}function _(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function q(t){return-1!=_().indexOf(t)}function T(t){return T[" "](t),t}T[" "]=u;var U,L,x=q("Opera"),j=q("Trident")||q("MSIE"),O=q("Edge"),k=O||j,N=q("Gecko")&&!(-1!=_().toLowerCase().indexOf("webkit")&&!q("Edge"))&&!(q("Trident")||q("MSIE"))&&!q("Edge"),R=-1!=_().toLowerCase().indexOf("webkit")&&!q("Edge");function B(){var t=a.document;return t?t.documentMode:void 0}t:{var F="",M=(L=_(),N?/rv:([^\);]+)(\)|;)/.exec(L):O?/Edge\/([\d\.]+)/.exec(L):j?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(L):R?/WebKit\/(\S+)/.exec(L):x?/(?:Version)[ \/]?(\S+)/.exec(L):void 0);if(M&&(F=M?M[1]:""),j){var P=B();if(null!=P&&P>parseFloat(F)){U=String(P);break t}}U=F}var Q,K={};function G(){return function(t){var e=K;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=S(String(U)).split("."),n=S("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=D(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==i[2].length,0==s[2].length)||D(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&j){var V=B();Q=V||(parseInt(U,10)||void 0)}else Q=void 0;var J=Q;function H(t,e){if(v.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(N){t:{try{T(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:W[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&H.X.h.call(this)}}g(H,v);var W={2:"touch",3:"pen",4:"mouse"};H.prototype.h=function(){H.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),z=0;function X(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++z,this.ba=this.ea=!1}function Z(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function $(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function tt(t){const e={};for(const n in t)e[n]=t[n];return e}const et="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nt(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<et.length;e++)n=et[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function rt(t){this.src=t,this.g={},this.h=0}function it(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=w(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function st(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}rt.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=st(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new X(e,this.src,s,!!r,i)).ea=n,t.push(e)),e};var ot="closure_lm_"+(1e6*Math.random()|0),at={};function ut(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);return null}return r=mt(r),e&&e[Y]?e.O(n,r,c(i)?!!i.capture:!!i,s):lt(e,n,r,!0,i,s)}(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ut(t,e[s],n,r,i);return null}return n=mt(n),t&&t[Y]?t.N(e,n,c(r)?!!r.capture:!!r,i):lt(t,e,n,!1,r,i)}function lt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=c(i)?!!i.capture:!!i,a=At(t);if(a||(t[ot]=a=new rt(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){const t=dt;return function e(n){return t.call(e.src,e.listener,n)}}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)I||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ht(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ct(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Y])it(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ht(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=At(e))?(it(n,t),0==n.h&&(n.src=null,e[ot]=null)):Z(t)}}}function ht(t){return t in at?at[t]:at[t]="on"+t}function dt(t,e){if(t.ba)t=!0;else{e=new H(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ct(t),t=n.call(r,e)}return t}function At(t){return(t=t[ot])instanceof rt?t:null}var ft="__closure_events_fn_"+(1e9*Math.random()>>>0);function mt(t){return"function"==typeof t?t:(t[ft]||(t[ft]=function(e){return t.handleEvent(e)}),t[ft])}function pt(){y.call(this),this.i=new rt(this),this.P=this,this.I=null}function gt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new v(e,t);else if(e instanceof v)e.target=e.target||t;else{var i=e;nt(e=new v(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yt(o,r,!0,e)&&i}if(i=yt(o=e.g=t,r,!0,e)&&i,i=yt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=yt(o=e.g=n[s],r,!1,e)&&i}function yt(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&it(t.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}g(pt,y),pt.prototype[Y]=!0,pt.prototype.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);else i=c(i)?!!i.capture:!!i,r=mt(r),e&&e[Y]?(e=e.i,(n=String(n).toString())in e.g&&(-1<(r=st(o=e.g[n],r,i,s))&&(Z(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete e.g[n],e.h--)))):e&&(e=At(e))&&(n=e.g[n.toString()],e=-1,n&&(e=st(n,r,i,s)),(r=-1<e?n[e]:null)&&ct(r))}(this,t,e,n,r)},pt.prototype.M=function(){if(pt.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.I=null},pt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},pt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var wt=a.JSON.stringify;function Et(){var t=_t;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var bt,vt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new It,t=>t.reset());class It{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ct(t){a.setTimeout(()=>{throw t},0)}function St(t,e){bt||function(){var t=a.Promise.resolve(void 0);bt=function(){t.then(qt)}}(),Dt||(bt(),Dt=!0),_t.add(t,e)}var Dt=!1,_t=new class{constructor(){this.h=this.g=null}add(t,e){const n=vt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function qt(){for(var t;t=Et();){try{t.h.call(t.g)}catch(t){Ct(t)}var e=vt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dt=!1}function Tt(t,e){pt.call(this),this.h=t||1,this.g=e||a,this.j=m(this.lb,this),this.l=Date.now()}function Ut(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Lt(t,e,n){if("function"==typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}g(Tt,pt),(r=Tt.prototype).ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),gt(this,"tick"),this.ca&&(Ut(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Tt.X.M.call(this),Ut(this),delete this.g};class xt extends y{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=Lt(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);const n=e.h;e.h=null,e.m.apply(null,n)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(t){y.call(this),this.h=t,this.g={}}g(jt,y);var Ot=[];function kt(t,e,n,r){Array.isArray(n)||(n&&(Ot[0]=n.toString()),n=Ot);for(var i=0;i<n.length;i++){var s=ut(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Nt(t){$(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ct(t)}),t),t.g={}}function Rt(){this.g=!0}function Bt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return wt(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}jt.prototype.M=function(){jt.X.M.call(this),Nt(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Rt.prototype.Aa=function(){this.g=!1},Rt.prototype.info=function(){};var Ft={},Mt=null;function Pt(){return Mt=Mt||new pt}function Qt(t){v.call(this,Ft.Pa,t)}function Kt(t){const e=Pt();gt(e,new Qt(e))}function Gt(t,e){v.call(this,Ft.STAT_EVENT,t),this.stat=e}function Vt(t){const e=Pt();gt(e,new Gt(e,t))}function Jt(t,e){v.call(this,Ft.Qa,t),this.size=e}function Ht(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}Ft.Pa="serverreachability",g(Qt,v),Ft.STAT_EVENT="statevent",g(Gt,v),Ft.Qa="timingevent",g(Jt,v);var Wt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Yt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function zt(){}function Xt(t){return t.h||(t.h=t.i())}function Zt(){}zt.prototype.h=null;var $t,te={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ee(){v.call(this,"d")}function ne(){v.call(this,"c")}function re(){}function ie(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new jt(this),this.O=oe,t=k?125:void 0,this.T=new Tt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new se}function se(){this.i=null,this.g="",this.h=!1}g(ee,v),g(ne,v),g(re,zt),re.prototype.g=function(){return new XMLHttpRequest},re.prototype.i=function(){return{}},$t=new re;var oe=45e3,ae={},ue={};function le(t,e,n){t.K=1,t.v=qe(Ie(e)),t.s=n,t.P=!0,ce(t,null)}function ce(t,e){t.F=Date.now(),fe(t),t.A=Ie(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Pe(n.i,"t",r),t.C=0,n=t.l.H,t.h=new se,t.g=Pn(t.l,n?e:null,!t.s),0<t.N&&(t.L=new xt(m(t.La,t,t.g),t.N)),kt(t.S,t.g,"readystatechange",t.ib),e=t.H?tt(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Kt(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+l+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function he(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function de(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Ae(t,n),r==ue){4==e&&(t.o=4,Vt(14),i=!1),Bt(t.j,t.m,null,"[Incomplete Response]");break}if(r==ae){t.o=4,Vt(15),Bt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Bt(t.j,t.m,r,null),we(t,r)}he(t)&&r!=ue&&r!=ae&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Vt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),jn(e),e.K=!0,Vt(11))):(Bt(t.j,t.m,n,"[Invalid Chunked Response]"),ye(t),ge(t))}function Ae(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ue:(n=Number(e.substring(n,r)),isNaN(n)?ae:(r+=1)+n>e.length?ue:(e=e.substr(r,n),t.C=r+n,e))}function fe(t){t.V=Date.now()+t.O,me(t,t.O)}function me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ht(m(t.gb,t),e)}function pe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ge(t){0==t.l.G||t.I||Nn(t.l,t)}function ye(t){pe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ut(t.T),Nt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function we(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||He(n.h,t)))if(!t.J&&He(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;kn(n),Sn(n)}xn(n),Vt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Ht(m(n.cb,n),6e3));if(1>=Je(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Bn(n,11)}else if((t.J||n.g==t)&&kn(n),!C(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const e=l[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=l[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const c=l[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(We(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,_e(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((r=n).sa=Mn(r,r.H?r.ka:null,r.V),o.J){Ye(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(pe(a),fe(a)),r.g=o}else Ln(r);0<n.i.length&&_n(n)}else"stop"!=l[0]&&"close"!=l[0]||Bn(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Bn(n,7):Cn(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}Kt()}catch(t){}}function Ee(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(l(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(l(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(r=ie.prototype).setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==yn(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const h=yn(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||k||this.g&&(this.h.h||this.g.fa()||wn(this.g)))){this.I||4!=h||7==e||Kt(),pe(this);var n=this.g.aa();this.Y=n;e:if(he(this)){var r=wn(this.g);t="";var i=r.length,s=4==yn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ye(this),ge(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var u,l=this.g;if((u=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(u)){var c=u;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Vt(12),ye(this),ge(this);break t}Bt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,we(this,n)}this.P?(de(this,h,o),k&&this.i&&3==h&&(kt(this.S,this.T,"tick",this.hb),this.T.start())):(Bt(this.j,this.m,o,null),we(this,o)),4==h&&ye(this),this.i&&!this.I&&(4==h?Nn(this.l,this):(this.i=!1,fe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Vt(12)):(this.o=0,Vt(13)),ye(this),ge(this)}}}catch(t){}},r.hb=function(){if(this.g){var t=yn(this.g),e=this.g.fa();this.C<e.length&&(pe(this),de(this,t,e),this.i&&4!=t&&fe(this))}},r.cancel=function(){this.I=!0,ye(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Kt(),Vt(17)),ye(this),this.o=2,ge(this)):me(this,this.V-t)};var be=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ve(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ve){this.h=void 0!==e?e:t.h,Ce(this,t.j),this.s=t.s,this.g=t.g,Se(this,t.m),this.l=t.l,e=t.i;var n=new Re;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),De(this,n),this.o=t.o}else t&&(n=String(t).match(be))?(this.h=!!e,Ce(this,n[1]||"",!0),this.s=Te(n[2]||""),this.g=Te(n[3]||"",!0),Se(this,n[4]),this.l=Te(n[5]||"",!0),De(this,n[6]||"",!0),this.o=Te(n[7]||"")):(this.h=!!e,this.i=new Re(null,this.h))}function Ie(t){return new ve(t)}function Ce(t,e,n){t.j=n?Te(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Se(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function De(t,e,n){e instanceof Re?(t.i=e,function(t,e){e&&!t.j&&(Be(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Fe(this,e),Pe(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Ue(e,ke)),t.i=new Re(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function qe(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Te(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ue(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Le),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Le(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ve.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ue(e,xe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ue(e,xe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ue(n,"/"==n.charAt(0)?Oe:je,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ue(n,Ne)),t.join("")};var xe=/[#\/\?@]/g,je=/[#\?:]/g,Oe=/[#\?]/g,ke=/[#\?@]/g,Ne=/#/g;function Re(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Be(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Fe(t,e){Be(t),e=Qe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Me(t,e){return Be(t),e=Qe(t,e),t.g.has(e)}function Pe(t,e,n){Fe(t,e),0<n.length&&(t.i=null,t.g.set(Qe(t,e),E(n)),t.h+=n.length)}function Qe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(r=Re.prototype).add=function(t,e){Be(this),this.i=null,t=Qe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){Be(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){Be(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.W=function(t){Be(this);let e=[];if("string"==typeof t)Me(this,t)&&(e=e.concat(this.g.get(Qe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return Be(this),this.i=null,Me(this,t=Qe(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ke(t){this.l=t||Ge,a.PerformanceNavigationTiming?t=0<(t=a.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(a.g&&a.g.Ga&&a.g.Ga()&&a.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ge=10;function Ve(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Je(t){return t.h?1:t.g?t.g.size:0}function He(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function We(t,e){t.g?t.g.add(e):t.h=e}function Ye(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ze(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return E(t.i)}function Xe(){}function Ze(){this.g=new Xe}function $e(t,e,n){const r=n||"";try{Ee(t,(function(t,n){let i=t;c(t)&&(i=wt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function tn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function en(t){this.l=t.ac||null,this.j=t.jb||!1}function nn(t,e){pt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke.prototype.cancel=function(){if(this.i=ze(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Xe.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Xe.prototype.parse=function(t){return a.JSON.parse(t,void 0)},g(en,zt),en.prototype.g=function(){return new nn(this.l,this.j)},en.prototype.i=function(t){return function(){return t}}({}),g(nn,pt);var rn=0;function sn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function on(t){t.readyState=4,t.l=null,t.j=null,t.A=null,an(t)}function an(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(r=nn.prototype).open=function(t,e){if(this.readyState!=rn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,an(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,on(this)),this.readyState=rn},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?on(this):an(this),3==this.readyState&&sn(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,on(this))},r.Ua=function(t){this.g&&(this.response=t,on(this))},r.ga=function(){this.g&&on(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var un=a.JSON.parse;function ln(t){pt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cn,this.K=this.L=!1}g(ln,pt);var cn="",hn=/^https?$/i,dn=["POST","PUT"];function An(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fn(t),pn(t)}function fn(t){t.D||(t.D=!0,gt(t,"complete"),gt(t,"error"))}function mn(t){if(t.h&&void 0!==o&&(!t.C[1]||4!=yn(t)||2!=t.aa()))if(t.v&&4==yn(t))Lt(t.Ha,0,t);else if(gt(t,"readystatechange"),4==yn(t)){t.h=!1;try{const o=t.aa();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match(be)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!hn.test(i?i.toLowerCase():"")}n=r}if(n)gt(t,"complete"),gt(t,"success");else{t.m=6;try{var u=2<yn(t)?t.g.statusText:""}catch(t){u=""}t.j=u+" ["+t.aa()+"]",fn(t)}}finally{pn(t)}}}function pn(t,e){if(t.g){gn(t);const n=t.g,r=t.C[0]?u:null;t.g=null,t.C=null,e||gt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function gn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function yn(t){return t.g?t.g.readyState:0}function wn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case cn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function En(t){let e="";return $(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function bn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=En(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):_e(t,e,n))}function vn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function In(t){this.Ca=0,this.i=[],this.j=new Rt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=vn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=vn("baseRetryDelayMs",5e3,t),this.bb=vn("retryDelaySeedMs",1e4,t),this.$a=vn("forwardChannelMaxRetries",2,t),this.ta=vn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ke(t&&t.concurrentRequestLimit),this.Fa=new Ze,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Cn(t){if(Dn(t),3==t.G){var e=t.U++,n=Ie(t.F);_e(n,"SID",t.I),_e(n,"RID",e),_e(n,"TYPE","terminate"),Tn(t,n),(e=new ie(t,t.j,e,void 0)).K=2,e.v=qe(Ie(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Pn(e.l,null),e.g.da(e.v)),e.F=Date.now(),fe(e)}Fn(t)}function Sn(t){t.g&&(jn(t),t.g.cancel(),t.g=null)}function Dn(t){Sn(t),t.u&&(a.clearTimeout(t.u),t.u=null),kn(t),t.h.cancel(),t.m&&("number"==typeof t.m&&a.clearTimeout(t.m),t.m=null)}function _n(t){Ve(t.h)||t.m||(t.m=!0,St(t.Ja,t),t.C=0)}function qn(t,e){var n;n=e?e.m:t.U++;const r=Ie(t.F);_e(r,"SID",t.I),_e(r,"RID",n),_e(r,"AID",t.T),Tn(t,r),t.o&&t.s&&bn(r,t.o,t.s),n=new ie(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Un(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),We(t.h,n),le(n,r,e)}function Tn(t,e){t.ia&&$(t.ia,(function(t,n){_e(e,n,t)})),t.l&&Ee({},(function(t,n){_e(e,n,t)}))}function Un(t,e,n){n=Math.min(t.i.length,n);var r=t.l?m(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{$e(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Ln(t){t.g||t.u||(t.Z=1,St(t.Ia,t),t.A=0)}function xn(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Ht(m(t.Ia,t),Rn(t,t.A)),t.A++,!0)}function jn(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function On(t){t.g=new ie(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Ie(t.sa);_e(e,"RID","rpc"),_e(e,"SID",t.I),_e(e,"CI",t.L?"0":"1"),_e(e,"AID",t.T),_e(e,"TYPE","xmlhttp"),Tn(t,e),t.o&&t.s&&bn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=qe(Ie(e)),n.s=null,n.P=!0,ce(n,t)}function kn(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function Nn(t,e){var n=null;if(t.g==e){kn(t),jn(t),t.g=null;var r=2}else{if(!He(t.h,e))return;n=e.D,Ye(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;gt(r=Pt(),new Jt(r,n)),_n(t)}else Ln(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==r&&function(t,e){return!(Je(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=Ht(m(t.Ja,t,e),Rn(t,t.C)),t.C++,!0))}(t,e)||2==r&&xn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}function Rn(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Bn(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=m(t.kb,t);n||(n=new ve("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ce(n,"https"),qe(n)),function(t,e){const n=new Rt;if(a.Image){const r=new Image;r.onload=p(tn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=p(tn,n,r,"TestLoadImage: error",!1,e),r.onabort=p(tn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=p(tn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Vt(2);t.G=0,t.l&&t.l.va(e),Fn(t),Dn(t)}function Fn(t){if(t.G=0,t.la=[],t.l){const e=ze(t.h);0==e.length&&0==t.i.length||(b(t.la,e),b(t.la,t.i),t.h.i.length=0,E(t.i),t.i.length=0),t.l.ua()}}function Mn(t,e,n){var r=n instanceof ve?Ie(n):new ve(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),Se(r,r.m);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ve(null,void 0);r&&Ce(s,r),e&&(s.g=e),i&&Se(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&_e(r,n,e),_e(r,"VER",t.ma),Tn(t,r),r}function Pn(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new ln(new en({jb:!0})):new ln(t.ra)).Ka(t.H),e}function Qn(){}function Kn(){if(j&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function Gn(t,e){pt.call(this),this.g=new In(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Hn(this)}function Vn(t){ee.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Jn(){ne.call(this),this.status=1}function Hn(t){this.g=t}(r=ln.prototype).Ka=function(t){this.L=t},r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$t.g(),this.C=this.u?Xt(this.u):Xt($t),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void An(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=a.FormData&&t instanceof a.FormData,!(0<=w(dn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gn(this),0<this.B&&((this.K=function(t){return j&&G()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Lt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){An(this,t)}},r.qa=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,gt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,gt(this,"complete"),gt(this,"abort"),pn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pn(this,!0)),ln.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?mn(this):this.fb())},r.fb=function(){mn(this)},r.aa=function(){try{return 2<yn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),un(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=In.prototype).ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ie(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=tt(s),nt(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Un(this,i,e),_e(n=Ie(this.F),"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),Tn(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(En(s)))+"&"+e:this.o&&bn(n,this.o,s)),We(this.h,i),this.Ya&&_e(n,"TYPE","init"),this.O?(_e(n,"$req",e),_e(n,"SID","null"),i.Z=!0,le(i,n,null)):le(i,n,e),this.G=2}}else 3==this.G&&(t?qn(this,t):0==this.i.length||Ve(this.h)||qn(this))},r.Ia=function(){if(this.u=null,On(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ht(m(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Vt(10),Sn(this),On(this))},r.cb=function(){null!=this.v&&(this.v=null,Sn(this),xn(this),Vt(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))},(r=Qn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},Kn.prototype.g=function(t,e){return new Gn(t,e)},g(Gn,pt),Gn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Vt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Mn(t,null,t.V),_n(t)},Gn.prototype.close=function(){Cn(this.g)},Gn.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=wt(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&_n(e)},Gn.prototype.M=function(){this.g.l=null,delete this.j,Cn(this.g),delete this.g,Gn.X.M.call(this)},g(Vn,ee),g(Jn,ne),g(Hn,Qn),Hn.prototype.xa=function(){gt(this.g,"a")},Hn.prototype.wa=function(t){gt(this.g,new Vn(t))},Hn.prototype.va=function(t){gt(this.g,new Jn)},Hn.prototype.ua=function(){gt(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,Gn.prototype.send=Gn.prototype.u,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,Wt.NO_ERROR=0,Wt.TIMEOUT=8,Wt.HTTP_ERROR=6,Yt.COMPLETE="complete",Zt.EventType=te,te.OPEN="a",te.CLOSE="b",te.ERROR="c",te.MESSAGE="d",pt.prototype.listen=pt.prototype.N,ln.prototype.listenOnce=ln.prototype.O,ln.prototype.getLastError=ln.prototype.Oa,ln.prototype.getLastErrorCode=ln.prototype.Ea,ln.prototype.getStatus=ln.prototype.aa,ln.prototype.getResponseJson=ln.prototype.Sa,ln.prototype.getResponseText=ln.prototype.fa,ln.prototype.send=ln.prototype.da,ln.prototype.setWithCredentials=ln.prototype.Ka;var Wn=s.createWebChannelTransport=function(){return new Kn},Yn=s.getStatEventTarget=function(){return Pt()},zn=s.ErrorCode=Wt,Xn=s.EventType=Yt,Zn=s.Event=Ft,$n=s.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},tr=s.FetchXmlHttpFactory=en,er=s.WebChannel=Zt,nr=s.XhrIo=ln}).call(this,n(20))},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return h}));
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
const r=[];var i;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function c(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}}).filter(t=>t).join(" ");n>=(null!=r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},function(t,e){function n(t,e){e=e||2;let n=t.toString(),r=0;return r=e-n.length+1,n=new Array(r).join("0").concat(n),n}t.exports=function(t,e){const r=e&&e.leading,i=e&&e.ms,s=t<0?-t:t,o=function(t,e){return e?t<0?"-":"":t<=-1e3?"-":""}(t,i),a=function(t){if("number"!=typeof t)throw new TypeError("Expected a number");return{days:Math.trunc(t/864e5),hours:Math.trunc(t/36e5)%24,minutes:Math.trunc(t/6e4)%60,seconds:Math.trunc(t/1e3)%60,ms:Math.trunc(t)%1e3}}(s),u=n(a.seconds);let l="";return a.days&&!l&&(l=o+a.days+":"+n(a.hours)+":"+n(a.minutes)+":"+u),a.hours&&!l&&(l=o+(r?n(a.hours):a.hours)+":"+n(a.minutes)+":"+u),l||(l=o+(r?n(a.minutes):a.minutes)+":"+u),i&&(l+="."+n(a.ms,3)),l}},function(t,e,n){"use strict";t.exports=n(25)},function(t,e){const n={primary:0,secondary:2,auxiliary:1},r={position:{x:0,y:0},pressed:{0:void 0,1:void 0,2:void 0},isPressed:function(t="primary"){const e=this.getPressed(t);return null!=e&&e.state},wasJustPressed:function(t="primary",e=!0,n=1e3/60){const r=this.getPressed(t);return null!=r&&(window.performance.now()-r.time<n&&r.state==e)},getPressed:function(t){return this.pressed[t]||this.pressed[n[t]]},setPressed:function(t,e){this.pressed[t]={time:window.performance.now(),state:e}},setPosition:function(t){this.position.x=t.x,this.position.y=t.y}};document.addEventListener("mousedown",t=>r.setPressed(t.button,!0)),document.addEventListener("mouseup",t=>r.setPressed(t.button,!1)),document.addEventListener("mousemove",t=>r.setPosition({x:t.clientX,y:t.clientY})),document.addEventListener("pointerdown",t=>r.setPressed(t.button||0,!0)),document.addEventListener("pointerup",t=>r.setPressed(t.button||0,!1)),document.addEventListener("pointermove",t=>r.setPosition({x:t.clientX,y:t.clientY})),document.addEventListener("touchstart",t=>r.setPressed(0,!0)),document.addEventListener("touchend",t=>r.setPressed(0,!1)),document.addEventListener("touchstart",t=>r.setPosition({x:t.touches[0].clientX,y:t.touches[0].clientY})),document.addEventListener("touchend",t=>r.setPosition({x:t.touches[0].clientX,y:t.touches[0].clientY})),document.addEventListener("touchmove",t=>r.setPosition({x:t.touches[0].clientX,y:t.touches[0].clientY})),document.addEventListener("contextmenu",t=>{1==r.isIgnoringContextMenu&&t.preventDefault()}),document.addEventListener("touchstart",t=>{r.isIgnoringTouchHover&&t.preventDefault()}),t.exports=r},function(t,e,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function a(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],i=0;i<t.length;i++){var s=t[i],u=e.base?s[0]+e.base:s[0],l=n[u]||0,c="".concat(u," ").concat(l);n[u]=l+1;var h=a(c),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==h?(o[h].references++,o[h].updater(d)):o.push({identifier:c,updater:p(d,e),references:1}),r.push(c)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var o=s(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,h=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function d(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=h(e,i);else{var s=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function A(t,e,n){var r=n.css,i=n.media,s=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,m=0;function p(t,e){var n,r,i;if(e.singleton){var s=m++;n=f||(f=l(e)),r=d.bind(null,n,s,!1),i=d.bind(null,n,s,!0)}else n=l(e),r=A.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var s=u(t,e),l=0;l<n.length;l++){var c=a(n[l]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=s}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(o=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),s=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(s).concat([i]).join("\n")}var o,a,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(i[o]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){t.exports=n.p+"a6707143c08357a98c345854736fb894.ttf"},function(t,e,n){t.exports=n.p+"8a36205bd9b83e03af0591a004bc97f4.ttf"},function(t,e,n){t.exports=n.p+"b8e42971dec8d49207a8c8e2b919a6ac.ttf"},function(t,e,n){t.exports=n.p+"881e150ab929e26d1f812c4342c15a7c.ttf"},function(t,e,n){t.exports=n.p+"0134dd8fe6fe708de73909a71d842780.ttf"},function(t,e,n){t.exports=n.p+"e38804ae070b58fbf4fdd88fd6853929.ttf"},function(t,e,n){t.exports=n.p+"905c2728284a6b881d4e417b80f1e79d.ttf"},function(t,e,n){"use strict";var r,i,s,o=n(26),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){s=!1}function l(t){if(t){if(t!==r){if(t.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,u()}}else r!==a&&(r=a,u())}function c(){return s||(s=function(){r||l(a);for(var t,e=r.split(""),n=[],i=o.nextValue();e.length>0;)i=o.nextValue(),t=Math.floor(i*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||a},characters:function(t){return l(t),r},seed:function(t){o.seed(t),i!==t&&(u(),i=t)},lookup:function(t){return c()[t]},shuffled:c}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){var n,r,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var u,l=[],c=!1,h=-1;function d(){c&&u&&(c=!1,u.length?l=u.concat(l):h=-1,l.length&&A())}function A(){if(!c){var t=a(d);c=!0;for(var e=l.length;e;){for(u=l,l=[];++h<e;)u&&u[h].run();h=-1,e=l.length}u=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function m(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new f(t,e)),1!==l.length||c||a(A)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){var r=n(24);t.exports=function(t){return this.func=t,this.fps=60,this.cap=1e3,new r(t=>{"number"==typeof this.cap&&(t=Math.min(t,this.cap)),t={ms:t,s:t/1e3,f:t/(1e3/this.fps)},this.func(t)})}},function(t){t.exports=JSON.parse('[{"playlistId":"PLV8C9t518pCK5neTfe-vosWJtfvC_nZ6M","title":"D&D - Happy Town","musics":[{"youtubeId":"unwK1X_TGsc","title":"Two Hornpipes (Tortuga)","thumbnailUrl":"https://i.ytimg.com/vi/unwK1X_TGsc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCpFLdjZKqKNcdjKi9IHFd_hLAQdA","duration":75},{"youtubeId":"exDcam6hcv0","title":"The Lord of the Rings: The Fellowship of the Ring CR - 05. Flaming Red Hair","thumbnailUrl":"https://i.ytimg.com/vi/exDcam6hcv0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAO0Ep3Iu7eEVgqLDfdlW-RIHB-Ow","duration":162},{"youtubeId":"KMSyUFf9scM","title":"Galerie Miiverse - The Legend of Zelda Tri Force Heroes OST","thumbnailUrl":"https://i.ytimg.com/vi/KMSyUFf9scM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDimCGY-151wrDxNA61DxFPhbQeGg","duration":76},{"youtubeId":"zHvOPjAfyng","title":"A Walk in the Shire (Extended) - The Hobbit (2003) Complete Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/zHvOPjAfyng/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB1NJQ2vPv8rmXA6P9jDlCtbd_sZg","duration":199},{"youtubeId":"YgonBcUQ-hI","title":"Bravely Default - Flying Fairy OST - 33 Foolish Event","thumbnailUrl":"https://i.ytimg.com/vi/YgonBcUQ-hI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCJozwKIbKuwWj8_8NhpBd0ML9Ebg","duration":132},{"youtubeId":"HR4aGGPVS8E","title":"TLOZelda Minish Cap Remaster - Hyrule Town","thumbnailUrl":"https://i.ytimg.com/vi/HR4aGGPVS8E/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCP_JptQeouckMlIvO9hY6PAVeuqg","duration":240},{"youtubeId":"XouGQoIqBh8","title":"Windfall Island (Wind Waker Cover by ROZEN) - Ballads of Hyrule II","thumbnailUrl":"https://i.ytimg.com/vi/XouGQoIqBh8/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYQSBkKGUwDw==&rs=AOn4CLDhKvKyohoumG864xGY0YA-cI6_2g","duration":134},{"youtubeId":"9Mi7NUIpLA8","title":"Hearthstone Main Theme (Gingertail Cover)","thumbnailUrl":"https://i.ytimg.com/vi/9Mi7NUIpLA8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDgSEcnXQ9SUkndgKc98rl4Dxnx1w","duration":135},{"youtubeId":"OfFvXcVzh4k","title":"Autumn Leaves - Rom Draculas ft. Jun-Hyuk Choi","thumbnailUrl":"https://i.ytimg.com/vi/OfFvXcVzh4k/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAGjg-TsbDIZXo8sKGo052Bvtef7Q","duration":202},{"youtubeId":"hDJk2tVhOV0","title":"Harvest Moon: Back to Nature ~ Summer ~ OST","thumbnailUrl":"https://i.ytimg.com/vi/hDJk2tVhOV0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAS2nP5OWTBfXiKxMcf_estxha6qg","duration":72},{"youtubeId":"n7sDUAALYSM","title":"Stardew Valley OST - Summer (Tropicala)","thumbnailUrl":"https://i.ytimg.com/vi/n7sDUAALYSM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDjhPUBUkT1LAmmUeNMfaa7p5rkrA","duration":205},{"youtubeId":"k0nqXeM-sns","title":"Stardew Valley OST - Summer (Nature\'s Crescendo)","thumbnailUrl":"https://i.ytimg.com/vi/k0nqXeM-sns/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCVDz6284EoV5uYpYZfw_plUCDrxA","duration":211},{"youtubeId":"zaQffIhk2Z8","title":"Donkey Kong Country 2 - Snakey Chantey | Orchestral Remix","thumbnailUrl":"https://i.ytimg.com/vi/zaQffIhk2Z8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAls7b2oCOkBAapQxio4sx6BWRcbw","duration":153},{"youtubeId":"FrwGamDEt8U","title":"Better When I\'m Dancin\' (Instrumental Version)","thumbnailUrl":"https://i.ytimg.com/vi/FrwGamDEt8U/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB-H5VUOGvE7IRG7a-wZ9MKCdN70w","duration":179}]},{"playlistId":"PLV8C9t518pCLyWc9EN0uhUT5SCo4iCC-M","title":"D&D - Somber Quiet","musics":[{"youtubeId":"mzcugB2RuUU","title":"Avatar\'s Love","thumbnailUrl":"https://i.ytimg.com/vi/mzcugB2RuUU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCx9_QjUn1Dpi0W08LnoWuEXzlrjQ","duration":206},{"youtubeId":"9AfYK1fKngU","title":"Finding Nemo/Finding Dory Trailer Soundtrack - Nemo Egg (Extended Version)","thumbnailUrl":"https://i.ytimg.com/vi/9AfYK1fKngU/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYOiBkKHIwDw==&rs=AOn4CLCPmgjc1ZAfmksKwU9yZLV7ZIYsyQ","duration":189},{"youtubeId":"NzfxAL3AjNs","title":"TPR - Farewell Hyrule King - A Melancholy Tribute To The Legend Of Zelda: The Wind Waker","thumbnailUrl":"https://i.ytimg.com/vi/NzfxAL3AjNs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAG_5v-kAVPmRAHdSU8NaD572RFkw","duration":231},{"youtubeId":"_qw3dgsAX-E","title":"Aquaria OC ReMix by Ryan Davis Music: \\"Immemorial Waters\\" [Undiscovered Waters] (#4348)","thumbnailUrl":"https://i.ytimg.com/vi/_qw3dgsAX-E/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYHiAmKH8wDw==&rs=AOn4CLCe519p1SqDfAVx2ymz6swCe8IL4Q","duration":418},{"youtubeId":"yJzxJk33ZAQ","title":"My Name Is Kino Loy","thumbnailUrl":"https://i.ytimg.com/vi/yJzxJk33ZAQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCQrPH4CZwflt-VtuiT8OwFaZmCA","duration":256},{"youtubeId":"yJl7U-8ougw","title":"Epilogue - To Good Friends (Chrono Trigger Symphony Volume 3)","thumbnailUrl":"https://i.ytimg.com/vi/yJl7U-8ougw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAEVJp44XSeh0ZQuwIH6Z0HeBGm1g","duration":134},{"youtubeId":"ibqB1zfru74","title":"Petite Princess Yucie OST - 06 \\"Legend Of The Eternal Tiara\\"","thumbnailUrl":"https://i.ytimg.com/vi/ibqB1zfru74/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA-PO8ITG-7FLYrr6CUQLhVzqpfKg","duration":199},{"youtubeId":"o231fOo8cNg","title":"One Piece OST - Mother Sea (First Part) [Extended Version]","thumbnailUrl":"https://i.ytimg.com/vi/o231fOo8cNg/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBYKFMwDw==&rs=AOn4CLDMKBhnOLr-wQ1k0SxIXTyqc6oESg","duration":205},{"youtubeId":"j9zIeQizeL4","title":"Stoick\'s Ship (How To Train Your Dragon) | EPIC CINEMATIC VERSION","thumbnailUrl":"https://i.ytimg.com/vi/j9zIeQizeL4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCwmNXkp6Roa4ZxkJ7rshLXwzqc6Q","duration":221},{"youtubeId":"TZqoGOqgAI4","title":"One Day + Davy Jones Theme - Pirates Of The Caribbean Medley - EPIC COVER (Violin and Erhu)","thumbnailUrl":"https://i.ytimg.com/vi/TZqoGOqgAI4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLADEfdenXZurIRqWVgqjdqB1eMf7w","duration":307},{"youtubeId":"h-Y3A6EAIWk","title":"And We Got Older (Bonus Track)","thumbnailUrl":"https://i.ytimg.com/vi/h-Y3A6EAIWk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDJg6wiUQZKYwt7ljlzBI4G9QP7rQ","duration":288},{"youtubeId":"obrRMczIBmg","title":"TRIPLANE - Dear Friends (Instrumental)","thumbnailUrl":"https://i.ytimg.com/vi/obrRMczIBmg/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdgHgALQBYoCDAgAEAEYZSBLKEswDw==&rs=AOn4CLDsa_GxQ80AWH0d4A4sQpvLDVs1uQ","duration":273},{"youtubeId":"UDVtMYqUAyw","title":"Interstellar Main Theme - Extra Extended - Soundtrack by  Hans Zimmer","thumbnailUrl":"https://i.ytimg.com/vi/UDVtMYqUAyw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDK2IJkEUev50rUJn8EJhxRyJ1L_g","duration":776},{"youtubeId":"2m9d4ae0Psg","title":"Journey - Original Game Soundtrack - \\"Apotheosis\\" by Austin Wintory [HD]","thumbnailUrl":"https://i.ytimg.com/vi/2m9d4ae0Psg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDUAFUXIVAly3kOiJTSWXqFpFMSKA","duration":427},{"youtubeId":"uR3BgLZp5ME","title":"Owl Temple - It Is The Nature Of Dreams To End #06 - Reeder","thumbnailUrl":"https://i.ytimg.com/vi/uR3BgLZp5ME/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB_9K2BlQaWJmwVNmAvtYCBLHd-yw","duration":163},{"youtubeId":"qBk_ZZQB2XU","title":"Picking Up the Pieces","thumbnailUrl":"https://i.ytimg.com/vi/qBk_ZZQB2XU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAnF8nRGhH01MYduNMF6TrApo7tuw","duration":119},{"youtubeId":"roAM0b3o6CU","title":"Julia - It Is The Nature Of Dreams To End #05 - Reeder","thumbnailUrl":"https://i.ytimg.com/vi/roAM0b3o6CU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCq9WwAaqEEuzHVEuzC3peQZgF-7Q","duration":131},{"youtubeId":"1b2zx6r-uIs","title":"The Avatar\'s Love -  Aang & Katara Theme | Avatar: The Last Airbender | Erhu cover by Eliott Tordo","thumbnailUrl":"https://i.ytimg.com/vi/1b2zx6r-uIs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD7FPP3AuuJCIswKjo9iVJ0cfD7JQ","duration":139},{"youtubeId":"-9Do--Q97lQ","title":"Emotional OST of the Day No. 60: Tengen Toppa Gurren Lagann - \'\'Omae no XXX de...\'\'","thumbnailUrl":"https://i.ytimg.com/vi/-9Do--Q97lQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAGOCEROFAkxXvH9unVccumQGQhaw","duration":78},{"youtubeId":"KwntrSsGeDs","title":"Fire Emblem: The Blazing Blade - Reminiscence (Ninian\'s Theme) [Orchestrated]","thumbnailUrl":"https://i.ytimg.com/vi/KwntrSsGeDs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBvVov-jq6SNjAQRkp1OOrtu9OOnw","duration":217},{"youtubeId":"4CAhROR6JLM","title":"Love conservative","thumbnailUrl":"https://i.ytimg.com/vi/4CAhROR6JLM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCl41Vjd8VuVufwQu4CTrZ_KMTEMQ","duration":253},{"youtubeId":"EnySPo_5fx4","title":"scott pilgrim\'s fairy fountain ( slowed | pitched )","thumbnailUrl":"https://i.ytimg.com/vi/EnySPo_5fx4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAxjLemUi9djdoCgLLQSlVTG4Fc1g","duration":219},{"youtubeId":"hIN-B271BTE","title":"Farewell - It Is The Nature Of Dreams To End #02 - Reeder","thumbnailUrl":"https://i.ytimg.com/vi/hIN-B271BTE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC2r9k09jP2nDfzmCtAVbbA8y3kkA","duration":146},{"youtubeId":"1aQWSFLdsAg","title":"Cabin Music (Bonus Track)","thumbnailUrl":"https://i.ytimg.com/vi/1aQWSFLdsAg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAJLEOOBtCJtj7dOXrHa8D-iCNz3w","duration":160},{"youtubeId":"yofPjYpw3W0","title":"ludovico einaudi - experience (slowed + reverb)","thumbnailUrl":"https://i.ytimg.com/vi/yofPjYpw3W0/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYXyBfKF8wDw==&rs=AOn4CLCoyUJ_jtVn2pyHqsnjs7JWqkHixA","duration":360},{"youtubeId":"wk92rqxfqGM","title":"Time - It Is The Nature Of Dreams To End #01 - Reeder","thumbnailUrl":"https://i.ytimg.com/vi/wk92rqxfqGM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB9SCWjRx6KyPWUc6VlUWxZKj0Byw","duration":256},{"youtubeId":"Yy8MEO_2AYo","title":"2: The Girl Who Fell from the Sky CitS OST","thumbnailUrl":"https://i.ytimg.com/vi/Yy8MEO_2AYo/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Ab4CgALwAYoCDAgAEAEYfyATKBMwDw==&rs=AOn4CLCe49ebFICtgc4zWcf0X090rxoM9w","duration":159},{"youtubeId":"iwHHagLkmtE","title":"Demon Slayer Movie OST: Rengoku\'s Last Smile (Sad Theme)","thumbnailUrl":"https://i.ytimg.com/vi/iwHHagLkmtE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD8s3Ip6k0TEy0IzPIIK_5V5SNmCg","duration":207},{"youtubeId":"52rJvSni7vM","title":"Game of Thrones (Soundtrack): I am Hers, She is Mine","thumbnailUrl":"https://i.ytimg.com/vi/52rJvSni7vM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDzkc1Rz-N9yXaMLC_mzeG5hWdpRg","duration":139},{"youtubeId":"wqOmlipOGe0","title":"Brave OST - 16 - Noble Maiden Fair (A Mhaighdean Bhan Uasal)","thumbnailUrl":"https://i.ytimg.com/vi/wqOmlipOGe0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDMCRDbeTQOVNBOIavUkjy0nU-hhQ","duration":158},{"youtubeId":"izQsgE0L450","title":"Samuel Barber - Adagio for Strings","thumbnailUrl":"https://i.ytimg.com/vi/izQsgE0L450/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDRUhlimlrU_FyFzEkdifZbhCEpXw","duration":482},{"youtubeId":"1rwAvUvvQzQ","title":"[Official] Celeste Original Soundtrack - 03 - Resurrections","thumbnailUrl":"https://i.ytimg.com/vi/1rwAvUvvQzQ/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYYCAuKH8wDw==&rs=AOn4CLA-0py9zNbsZB7p2tzxO5GqPsc05Q","duration":579},{"youtubeId":"oFrfT1ULR3Q","title":"In and Out of Consciousness","thumbnailUrl":"https://i.ytimg.com/vi/oFrfT1ULR3Q/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLClxNrR1SfHfIkv1_7mOEbkStO_IQ","duration":171},{"youtubeId":"W8r-Zv7xJjc","title":"Sad Anime Ost : Tsuki to Hoshi to A-Ta-Shi","thumbnailUrl":"https://i.ytimg.com/vi/W8r-Zv7xJjc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCYcP65yG2TYGAWXfTTsdln9V5fgA","duration":182},{"youtubeId":"Mm7DHztmPF8","title":"Zelda: Link\'s Awakening - Ballad of the Wind Fish feat. Amaterasu (Piano/Violin Cover)","thumbnailUrl":"https://i.ytimg.com/vi/Mm7DHztmPF8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD0K7ayUcRKK78ub67BgKiCskq1Dw","duration":165},{"youtubeId":"wEWF2xh5E8s","title":"Naruto Soundtrack- Sadness and Sorrow (FULL VERSION)","thumbnailUrl":"https://i.ytimg.com/vi/wEWF2xh5E8s/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4EgALgA4oCDAgAEAEYZSBaKE4wDw==&rs=AOn4CLAMcOOaevDO1HjAjlv0tk6efPkw0A","duration":439},{"youtubeId":"xDaG_tT3TBk","title":"Petrichor - At the End of Times, Nothing [HD]","thumbnailUrl":"https://i.ytimg.com/vi/xDaG_tT3TBk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCShc06CYpsGqHFxeGEZq3-_pX6gQ","duration":222},{"youtubeId":"MBi-FhTV8aQ","title":"CASTLE IN THE SKY -  Main Theme (Piano Cover)","thumbnailUrl":"https://i.ytimg.com/vi/MBi-FhTV8aQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC36Itlcqj5xZUSzfx7-dZieMLuLA","duration":271},{"youtubeId":"pS-gbqbVd8c","title":"Game of Thrones: Season 6 OST - Light of the Seven (EP 10 Trial scene)","thumbnailUrl":"https://i.ytimg.com/vi/pS-gbqbVd8c/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBgKE0wDw==&rs=AOn4CLDcz585akDtqenu68Tf0AMhrhV-0w","duration":590},{"youtubeId":"Dnm598Tk4Qo","title":"Goodbye (Official Instrumental) - Bo Burnham \\"Inside\\"","thumbnailUrl":"https://i.ytimg.com/vi/Dnm598Tk4Qo/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4OgAK4CIoCDAgAEAEYTSBKKHIwDw==&rs=AOn4CLBwR9sBtT9LZSe1a-NswkRp9cZtTQ","duration":247},{"youtubeId":"Zmd2nbHP5kQ","title":"10 - Farewell, Traveller - Tower of Heaven Original Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/Zmd2nbHP5kQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAtholHwL_lSmckhxqEsYBwk0kEHw","duration":82},{"youtubeId":"Go12Vf6aL60","title":"old enough to understand...","thumbnailUrl":"https://i.ytimg.com/vi/Go12Vf6aL60/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYSCA6KH8wDw==&rs=AOn4CLBVGubxbFaIyFpsO2EV3PV83whifQ","duration":277},{"youtubeId":"l7yi9AIfKdc","title":"The legend of Korra | To heal - Erhu cover #1","thumbnailUrl":"https://i.ytimg.com/vi/l7yi9AIfKdc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBd3rpcrrCM5SwyPjEMv3Jzt9iaLw","duration":202},{"youtubeId":"5kVe26XQXWo","title":"Service & Sacrifice (The Legend Of Korra OST Book 3)  - Emotional Erhu Cover by Eliott Tordo","thumbnailUrl":"https://i.ytimg.com/vi/5kVe26XQXWo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBzCN2Gbkto2wcSaWURL4FaVHcn3w","duration":215},{"youtubeId":"gMljATBd-p4","title":"The legend of Korra | Ending theme - Erhu cover #6","thumbnailUrl":"https://i.ytimg.com/vi/gMljATBd-p4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAQztF1MoEBrc67f6yRsRLidbYWCw","duration":171},{"youtubeId":"9CQDhqHvn64","title":"The legend of Korra | Service and sacrifice - Erhu cover #3","thumbnailUrl":"https://i.ytimg.com/vi/9CQDhqHvn64/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAenpzH_cUQQz-diOhHu9FRkckpqg","duration":199},{"youtubeId":"maDU9DdObYE","title":"The legend of Korra | Jinora\'s light - Erhu cover #2","thumbnailUrl":"https://i.ytimg.com/vi/maDU9DdObYE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA07fYjUaaHvcWdPyP-An7rcqWe0Q","duration":134},{"youtubeId":"7RBKwLh-oZI","title":"The legend of Korra | A peaceful place - Erhu cover #0","thumbnailUrl":"https://i.ytimg.com/vi/7RBKwLh-oZI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBQ70NJMvNA6-cGAROOQt78n1ss8w","duration":148},{"youtubeId":"cH798GDNxR8","title":"The legend of Korra | Greatest changes - Erhu cover #5","thumbnailUrl":"https://i.ytimg.com/vi/cH798GDNxR8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAka08-tOxBzPl_UH_bZfHP9Oucww","duration":314},{"youtubeId":"mFsQpCjRyvY","title":"Last Goodbye | D&D/TTRPG Music | 1 Hour","thumbnailUrl":"https://i.ytimg.com/vi/mFsQpCjRyvY/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYciBgKDwwDw==&rs=AOn4CLA0lXWK1mXGLuW0n-p7qXwNhZ5D_A","duration":3830},{"youtubeId":"csmKUhxXTrA","title":"Pokémon: Evolutions - Sun and Moon Commercial Audio","thumbnailUrl":"https://i.ytimg.com/vi/csmKUhxXTrA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDx-de4mdMpv8uDHGeAt1HkxtUNPQ","duration":71},{"youtubeId":"wV5Hb1WxzqU","title":"Sword & Sworcery LP | The Maelstrom","thumbnailUrl":"https://i.ytimg.com/vi/wV5Hb1WxzqU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBkCVNBNeBYSGHrLTtKX4fdNQeLtw","duration":117},{"youtubeId":"Hf_me3X7YSE","title":"Golden Sun: Venus Lighthouse Arrangement","thumbnailUrl":"https://i.ytimg.com/vi/Hf_me3X7YSE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLApvAkemkgV8ooFDZ2tYUZ10ewY6g","duration":300},{"youtubeId":"x65Lk4HhVc4","title":"Achilles Come Down - Gang of Youths ( Slow version - Instrumental)","thumbnailUrl":"https://i.ytimg.com/vi/x65Lk4HhVc4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDE_GEzHiklp1nOQDjgFLJMN2WAvA","duration":527}]},{"playlistId":"PLV8C9t518pCIQI83Emr6gLntePk57OYH1","title":"D&D - Peaceful Little Town","musics":[{"youtubeId":"chLZQtCold8","title":"Lord of the Rings - Sound of The Shire (Original)","thumbnailUrl":"https://i.ytimg.com/vi/chLZQtCold8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD6cqIpcKQOnaPsVaBaG-boAs9h_w","duration":819},{"youtubeId":"fe2wAahCdcc","title":"Mabe Village - The Legend of Zelda: Link\'s Awakening | Piano Cover","thumbnailUrl":"https://i.ytimg.com/vi/fe2wAahCdcc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDR7hbG3eE4r9Xtaq76pcayV4rKEw","duration":172},{"youtubeId":"Ud1aRTnQZdk","title":"Peaceful Days Cover - Chrono Trigger","thumbnailUrl":"https://i.ytimg.com/vi/Ud1aRTnQZdk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA5MhV2QrkWPxT5tzJrKa_u2rWhqw","duration":229},{"youtubeId":"VC1D1usCmho","title":"OC ReMix #2196: Pokémon Sapphire Version \'My Friend Mudkip\' [Dewford Town, Surfing] by halc","thumbnailUrl":"https://i.ytimg.com/vi/VC1D1usCmho/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCj_Wsmh7L46BvWwJazGElBhJOQfw","duration":199},{"youtubeId":"iO7FlB_xpzw","title":"Dustforce music - \\"9-bit Expedition\\"","thumbnailUrl":"https://i.ytimg.com/vi/iO7FlB_xpzw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBImsiQxOBiMK5gRXGMXFnXPv64-g","duration":180},{"youtubeId":"BnAIt2dX9EQ","title":"Fate - Town 2/Good Morning To Your Nightcap / Behind the Haystack","thumbnailUrl":"https://i.ytimg.com/vi/BnAIt2dX9EQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAWeMx2xVYE8Ew9R05ndtOpKAr_tg","duration":324},{"youtubeId":"WvBwA4j3HSQ","title":"Fate - Town 1/ The Clergy\'s Lamentation","thumbnailUrl":"https://i.ytimg.com/vi/WvBwA4j3HSQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBfmZqdBNPH3eZxwl9LUQJYZef7uw","duration":234},{"youtubeId":"KcuLupcx174","title":"Kiki\'s Delivery Service - A Town Where You Can See The Ocean Music Box","thumbnailUrl":"https://i.ytimg.com/vi/KcuLupcx174/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCZ8R06-Rq0bUqmcWRY97n-uxdbLQ","duration":213},{"youtubeId":"R51K9Gn3Nkw","title":"Pokemon G/S/C - National Park (Remix)","thumbnailUrl":"https://i.ytimg.com/vi/R51K9Gn3Nkw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCSut9bD_LaEvHwnM16-J-CMzuQeA","duration":210},{"youtubeId":"R0-Q17WChH0","title":"Stardew Valley OST - Settling In","thumbnailUrl":"https://i.ytimg.com/vi/R0-Q17WChH0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD0DAhNAOMK14K7FP51t34XEkA3iQ","duration":111},{"youtubeId":"Qd96mpRuHtQ","title":"Stardew Valley OST - Fall (Ghost Synth)","thumbnailUrl":"https://i.ytimg.com/vi/Qd96mpRuHtQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDxBdYflDF2EgnKToqLlJpLc8E1Rw","duration":160},{"youtubeId":"fI9QzlD_sm0","title":"Stardew Valley OST - Spring (The Valley Comes Alive)","thumbnailUrl":"https://i.ytimg.com/vi/fI9QzlD_sm0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCPF8WlY2beI6OlR4kIMVGhgTVPXw","duration":263},{"youtubeId":"z_8YSubNZwM","title":"Avalon - a Celtic Legend (07 - The Round Table)","thumbnailUrl":"https://i.ytimg.com/vi/z_8YSubNZwM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC9pp8ujjckcITaX9lNYkx5FsfMWQ","duration":290},{"youtubeId":"MmbqeMTfoXs","title":"Super Mario RPG - Forest Maze Extended (15 Minutes)","thumbnailUrl":"https://i.ytimg.com/vi/MmbqeMTfoXs/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4EgALgA4oCDAgAEAEYfyAsKCAwDw==&rs=AOn4CLCqCcpVpS4ZbCQ9wflnsQDRzQtwSA","duration":897},{"youtubeId":"qgUBNeGLPWs","title":"Whimsical Fantasy Music: \\"Fantasy Journey\\" by Crypt of Insomnia","thumbnailUrl":"https://i.ytimg.com/vi/qgUBNeGLPWs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA1wfgwR2kWDTLWybAYrqMbin0-lA","duration":141},{"youtubeId":"sneCd-SN_T4","title":"Soldier, Poet, King - Cullen Vance","thumbnailUrl":"https://i.ytimg.com/vi/sneCd-SN_T4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLALdND9argWXYl1Aclsfpn_tcIbpg","duration":157}]},{"playlistId":"PLV8C9t518pCJq5EMcfJFUYfx7oEVDdRPV","title":"D&D - Optimistic Overworld","musics":[{"youtubeId":"kfy59wAbbd4","title":"Potionomics Main Theme","thumbnailUrl":"https://i.ytimg.com/vi/kfy59wAbbd4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCuqbom0KCpcbeehQYAGZ7J0J22QA","duration":100},{"youtubeId":"hfiyMxIfqTQ","title":"Fire Emblem Heroes OST - Map (Prologue)","thumbnailUrl":"https://i.ytimg.com/vi/hfiyMxIfqTQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCdtAIqHB7l3SrbghNfplRPeSPQbg","duration":338},{"youtubeId":"aBtz2glZNuw","title":"Adventuring Across Rafta","thumbnailUrl":"https://i.ytimg.com/vi/aBtz2glZNuw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBmPxlCtlNnS57vB70WNMIOhc0GzQ","duration":138},{"youtubeId":"05APBqE3TZo","title":"Fire Emblem Heroes OST - Map 2","thumbnailUrl":"https://i.ytimg.com/vi/05APBqE3TZo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD9x8n_-mENggeyI_Fth7OSqxeFeQ","duration":329},{"youtubeId":"NgpWhd80ldQ","title":"Bravely Default - Flying Fairy OST - 08 Land of Light and Shadow","thumbnailUrl":"https://i.ytimg.com/vi/NgpWhd80ldQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBC84hWSkKqRfAayR4C5lrBwdseIQ","duration":168},{"youtubeId":"fZJPqrSCScc","title":"Générique - The Legend of Zelda Link\'s Awakening (Nintendo Switch) OST","thumbnailUrl":"https://i.ytimg.com/vi/fZJPqrSCScc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAoAUDD3aDPN0ZJ96_PczmJoYSkMA","duration":223},{"youtubeId":"vnk41KJ9afM","title":"World Map","thumbnailUrl":"https://i.ytimg.com/vi/vnk41KJ9afM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBSCqc8o3KOAghQvJu0xd9se1K4IA","duration":217},{"youtubeId":"BZqWUyh1ugw","title":"Fire Emblem Three Houses - Fódlan Winds","thumbnailUrl":"https://i.ytimg.com/vi/BZqWUyh1ugw/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4EgALoAooCDAgAEAEYZSBZKEYwDw==&rs=AOn4CLDCIy68hgg0pp_OjNy0B7buklJQMQ","duration":332},{"youtubeId":"keWPlHvFpj8","title":"Fire Emblem Heroes Soundtrack Home Menu/Castle","thumbnailUrl":"https://i.ytimg.com/vi/keWPlHvFpj8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDu85MW0BhGuKtx9xjGEqrZ0JnLhw","duration":301},{"youtubeId":"reYVpE8KxZw","title":"Fire Emblem Fates - Dusk Falls","thumbnailUrl":"https://i.ytimg.com/vi/reYVpE8KxZw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC_38Wgc1NygeoyHKJY80B6rQTXDQ","duration":312},{"youtubeId":"BVK-x0Gnbog","title":"The Legend of Zelda: Spirit Tracks - Realm Overworld [Remix]","thumbnailUrl":"https://i.ytimg.com/vi/BVK-x0Gnbog/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCIPhZw10EH_Y3XHX3TP_8pgnLarw","duration":264},{"youtubeId":"PHlTZDdZ7dk","title":"Essence of Lime 1-06: Past, Present and Future Perfect (Overworld (Present)) [PROTODOME]","thumbnailUrl":"https://i.ytimg.com/vi/PHlTZDdZ7dk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA-6WcqL9qzL5xz_Z3Ud4uLug8cLg","duration":156},{"youtubeId":"tv9SdT-Ipa4","title":"Strong Desire","thumbnailUrl":"https://i.ytimg.com/vi/tv9SdT-Ipa4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAToFXZJ7af15v8ATqcqqWZyj1mCQ","duration":138},{"youtubeId":"zHnQ_m7eWDw","title":"Fire Emblem Fates OST ~Resolve (Dark)~ Prepare for Battle: Nohr","thumbnailUrl":"https://i.ytimg.com/vi/zHnQ_m7eWDw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDsHPICiLJw48HNkAMT-lUY_aID5A","duration":307},{"youtubeId":"sRvBX4mVo8c","title":"With Hammer and Hope | Sea of Thieves OST","thumbnailUrl":"https://i.ytimg.com/vi/sRvBX4mVo8c/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDfCS-k3P06pRDAhH0UoZpKNuP5DA","duration":208},{"youtubeId":"rZ9Feac3Pf4","title":"The Eleventh Reel","thumbnailUrl":"https://i.ytimg.com/vi/rZ9Feac3Pf4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBOpTKbz-AD9mHlHPKXCh7K0P6rpA","duration":209},{"youtubeId":"_YjwXKqDOYw","title":"Punch Brothers - Squirrel of Possibility","thumbnailUrl":"https://i.ytimg.com/vi/_YjwXKqDOYw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBACgmRSnjHJPXqGyHZmXz7vTnXxA","duration":169},{"youtubeId":"8TTUBMTInVE","title":"Pirates of the Caribbean - Soundtr 02 - The Medallion Calls","thumbnailUrl":"https://i.ytimg.com/vi/8TTUBMTInVE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBqZ3AvEPASi-2PJc1zOH5csBUg2A","duration":113},{"youtubeId":"Wtc5glDZ8wA","title":"Shroudbroken (Original Game Soundtrack)","thumbnailUrl":"https://i.ytimg.com/vi/Wtc5glDZ8wA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAsXKr9eXR9SocQAUicp5RlLhCpPg","duration":169},{"youtubeId":"Z7klyQsmVa8","title":"Gurren Lagann OST Disc 1 - 07 - Drill to Heaven with Your XXX!! -First Time Outside Version- / Om...","thumbnailUrl":"https://i.ytimg.com/vi/Z7klyQsmVa8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA_J7lL7Yzq7VVlPdLW4Raqdjrhug","duration":138},{"youtubeId":"Mm0YmRHdyz4","title":"No Helping It! (Extended Version) - Gurren Lagann OST","thumbnailUrl":"https://i.ytimg.com/vi/Mm0YmRHdyz4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCAt1mNukOoYEsHFSf0_aEQ4PwGVQ","duration":108},{"youtubeId":"FZnwxSF2sCs","title":"Magic Knight Rayearth OST 1 - Main Theme (Instrumental)","thumbnailUrl":"https://i.ytimg.com/vi/FZnwxSF2sCs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAentpO9G3Xfc-pHBw8TMGSXqXxpQ","duration":246},{"youtubeId":"O8IBoFIFE-E","title":"Final Fantasy Main Theme (Orchestral)","thumbnailUrl":"https://i.ytimg.com/vi/O8IBoFIFE-E/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYRiBUKGUwDw==&rs=AOn4CLCGnZ_jc1aTFBLEktUH6j27o4fP3Q","duration":157},{"youtubeId":"BieT4vpPVKI","title":"Into the Unknown (From \\"Frozen 2\\"/Instrumental/Audio Only)","thumbnailUrl":"https://i.ytimg.com/vi/BieT4vpPVKI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCk_X_SD-Hy1XWIWdMpNZZmgCoJ4A","duration":202},{"youtubeId":"OLTZbJMQiD4","title":"Gladiator Soundtrack - Victory Theme","thumbnailUrl":"https://i.ytimg.com/vi/OLTZbJMQiD4/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBHKFUwDw==&rs=AOn4CLDZGeSMq-kcnoEnDt06UYdEX2zVCg","duration":209},{"youtubeId":"8iz4UbpRZD4","title":"Most Epic Heroic Music: Never Give Up","thumbnailUrl":"https://i.ytimg.com/vi/8iz4UbpRZD4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDrBoVdB9m8MYuI8yoZwMlTqSvWmg","duration":248},{"youtubeId":"4PuP7IkpRLU","title":"05.  Counterattack Mankind - High Quality","thumbnailUrl":"https://i.ytimg.com/vi/4PuP7IkpRLU/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBZKFcwDw==&rs=AOn4CLCJBgUiStGpVKBQTeox9yMNpSCYAQ","duration":367},{"youtubeId":"E5J0wqxRiuQ","title":"How To Train Your Dragon... But It\'s A Tavern Song","thumbnailUrl":"https://i.ytimg.com/vi/E5J0wqxRiuQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBrBf1Uxvbv8j9bu_Ew-G0shvfMfw","duration":148},{"youtubeId":"SuX1SXRzQy4","title":"How to Train Your Dragon - Flying Theme (HQ)","thumbnailUrl":"https://i.ytimg.com/vi/SuX1SXRzQy4/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYciBLKD4wDw==&rs=AOn4CLA-XolY45cDruvj5rfb3a4shNdh3w","duration":211},{"youtubeId":"HIZ35jJ79xU","title":"Romantic Flight (How To Train Your Dragon) | CINEMATIC VERSION","thumbnailUrl":"https://i.ytimg.com/vi/HIZ35jJ79xU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAmhDZGhZQ74ts-6HTDUxQ8mrELOg","duration":191},{"youtubeId":"5eTXcbrx9Cc","title":"Where No One Goes [Deluxe Reprise]","thumbnailUrl":"https://i.ytimg.com/vi/5eTXcbrx9Cc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAlbA_ep5JSfpVnRhIj4eTipXnT2A","duration":228},{"youtubeId":"YVtrB8k6iK4","title":"Forbidden Friendship (How To Train Your Dragon) | EPIC CINEMATIC VERSION","thumbnailUrl":"https://i.ytimg.com/vi/YVtrB8k6iK4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAfUGWb-RgzC27CwAkj6opR_G7bJA","duration":189},{"youtubeId":"3MwX5CHG6WE","title":"How To Train Your Dragon Theme - Epic Orchestra Remix","thumbnailUrl":"https://i.ytimg.com/vi/3MwX5CHG6WE/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBHKEMwDw==&rs=AOn4CLBdZubkJJlKHfU5Jn76rAMDXYQbpg","duration":226},{"youtubeId":"tZocFBV_tF0","title":"Take To The Sky - A How To Train Your Dragon Orchestration","thumbnailUrl":"https://i.ytimg.com/vi/tZocFBV_tF0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDdyBRvqErIMY8vHhhIVtMOCGhhcA","duration":399},{"youtubeId":"105e998i_oo","title":"True Strength - A One Punch Man Orchestration","thumbnailUrl":"https://i.ytimg.com/vi/105e998i_oo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLARRIBOoKrXugXWfKUzjFhLWFUEGw","duration":283},{"youtubeId":"uESTr19FVxc","title":"Wild Area (Version 2) - Pokémon Sword and Shield OST (Gamerip)","thumbnailUrl":"https://i.ytimg.com/vi/uESTr19FVxc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBqvunII1xt9EK1SOMRW1h_a2JFrg","duration":392},{"youtubeId":"TLriq2U_OYU","title":"Dungeons and Dragons Adventure Music | \\"Land of Lore\\" | Travel Theme","thumbnailUrl":"https://i.ytimg.com/vi/TLriq2U_OYU/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYTyBlKDQwDw==&rs=AOn4CLBfo92Hnz6-yiUNSLBZsJaofReFqA","duration":182},{"youtubeId":"lXYCqSF4weo","title":"Pathfinder: Kingmaker - Celtic Style Barbarian Music Mix - Fantasy RPG & DnD Primal Adventure Music","thumbnailUrl":"https://i.ytimg.com/vi/lXYCqSF4weo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCdyYEJtmxXTB4P55T7h0a1pkYOmA","duration":365},{"youtubeId":"juQzyXGDeD8","title":"Golden Sun: The Lost Age - Overworld Theme One [Extended]","thumbnailUrl":"https://i.ytimg.com/vi/juQzyXGDeD8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCUb1Rs2DOhtB2VIlB6s1-11s8gBQ","duration":906},{"youtubeId":"Vwy3rYFUayc","title":"The Witcher 3: Blood & Wine Battle Theme (For Honor! For Toussaint!) (Custom Version)","thumbnailUrl":"https://i.ytimg.com/vi/Vwy3rYFUayc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB4jXNAk-CMn757l6J_1iKFwQRwTg","duration":239},{"youtubeId":"YF9IuXQ3o40","title":"Opening Travel Music","thumbnailUrl":"https://i.ytimg.com/vi/YF9IuXQ3o40/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB58Dmo1pecQpsNb4cR3EqDOgzE0A","duration":78},{"youtubeId":"rvLs-9SA9i0","title":"Maiden Voyage (Original Game Soundtrack)","thumbnailUrl":"https://i.ytimg.com/vi/rvLs-9SA9i0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCM61GhUr-BqKtxazMobNi8LGMdxQ","duration":159},{"youtubeId":"1jIOpuqRhEg","title":"One Piece - Music & Song Collection 1 - To the Grand Line","thumbnailUrl":"https://i.ytimg.com/vi/1jIOpuqRhEg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBa2muwjV_W-VHfkGqyAB9LtYOAAQ","duration":225},{"youtubeId":"IzDdXCPSJrY","title":"Muppet Treasure Island OST,T15 Honest,Brave & True","thumbnailUrl":"https://i.ytimg.com/vi/IzDdXCPSJrY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDQctxbuRoApU9jFng5M9EVvlOVJA","duration":235}]},{"playlistId":"PLV8C9t518pCLJVekMt-g8kIx4-4mibhDm","title":"D&D - Vamping","musics":[{"youtubeId":"DOZlBcXE_FI","title":"Zelda Link\'s Awakening Ballad of the Wind Fish Orchestrated","thumbnailUrl":"https://i.ytimg.com/vi/DOZlBcXE_FI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB38widXir-HeM3F5miesRAx9tmWw","duration":138},{"youtubeId":"cTpcW603Ds0","title":"Final Fantasy I ost - Game Over","thumbnailUrl":"https://i.ytimg.com/vi/cTpcW603Ds0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCvtEFQSeC-qaOWadICRNHBPB3Exw","duration":56},{"youtubeId":"Ly6jrzTMs7Y","title":"History Has Its Eyes on You (Instrumental)","thumbnailUrl":"https://i.ytimg.com/vi/Ly6jrzTMs7Y/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC_xVJn0jcsnIYllQfuBjqXMm5_vA","duration":99},{"youtubeId":"GLjHB86hn34","title":"Who Lives, Who Dies, Who Tells Your Story (Instrumental)","thumbnailUrl":"https://i.ytimg.com/vi/GLjHB86hn34/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAUL7ZvhWjK4R5fVxB7XfAkh5H2hQ","duration":217},{"youtubeId":"Wxav9Jj7R68","title":"Zelda x Ghibli Film Trailer","thumbnailUrl":"https://i.ytimg.com/vi/Wxav9Jj7R68/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDWT0NkzJCObaGdtn0YbFsK4mduKg","duration":106},{"youtubeId":"X_KSzLYzr90","title":"The Divine Princess","thumbnailUrl":"https://i.ytimg.com/vi/X_KSzLYzr90/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBHm6WxaEgjJ6Ox1s113cNKrX5Tzg","duration":156},{"youtubeId":"uU3XREoeiHw","title":"FINAL FANTASY I \\"Game Over\\" Metal Version by Ferdk","thumbnailUrl":"https://i.ytimg.com/vi/uU3XREoeiHw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLChhaiUci0Hvl4vM2ftzv-JelOzjQ","duration":169},{"youtubeId":"tDMtam4-tYQ","title":"Adventure Cinematic Orchestral by Infraction [No Copyright Music] / Story of Us","thumbnailUrl":"https://i.ytimg.com/vi/tDMtam4-tYQ/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYLCBWKH8wDw==&rs=AOn4CLBauBfY34_LnROsEWqYEp_z8E_mRw","duration":147},{"youtubeId":"ljXdDidDS3g","title":"🎥 Epic Trailer (Royalty Free Music) - \\"Myths\\" by Alex Productions 🇮🇹","thumbnailUrl":"https://i.ytimg.com/vi/ljXdDidDS3g/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCAxaG5dwE4587MNWaUWa51puGctg","duration":82},{"youtubeId":"CoUBgjX0nvU","title":"Daniel Yount - Call Of The Heroes","thumbnailUrl":"https://i.ytimg.com/vi/CoUBgjX0nvU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAqJq22nmCAEn2eGl-HZiQyb0LctQ","duration":148},{"youtubeId":"rZH5qYo3MvM","title":"Epic Heroic Trailer by Infraction [No Copyright Music] / New Hero","thumbnailUrl":"https://i.ytimg.com/vi/rZH5qYo3MvM/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYWCBiKGUwDw==&rs=AOn4CLClbHS4_iIdapQ1qzi0I-bFk2lxbQ","duration":126},{"youtubeId":"1roy1N4UOp8","title":"Epic Trailer Teaser by Infraction [No Copyright Music] / The Dark Land","thumbnailUrl":"https://i.ytimg.com/vi/1roy1N4UOp8/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYRiBGKHIwDw==&rs=AOn4CLCCSs5wkSh3-GsdOmlIarrti1SQ_A","duration":79},{"youtubeId":"TtndG3uvdM4","title":"Trailer Cinematic Intro by Infraction [No Copyright Music] / Wicked","thumbnailUrl":"https://i.ytimg.com/vi/TtndG3uvdM4/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4OgAK4CIoCDAgAEAEYRSBZKGUwDw==&rs=AOn4CLBC7LI5bA0haMHQKR_pBIB-BZsCZw","duration":77},{"youtubeId":"Bln0BEv5AJ0","title":"♩♫ Epic Trailer Music ♪♬ - Fall (Copyright and Royalty Free)","thumbnailUrl":"https://i.ytimg.com/vi/Bln0BEv5AJ0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB5Le0_3e-bRgZdg_8OEQK9NuMskA","duration":116},{"youtubeId":"Go12Vf6aL60","title":"old enough to understand...","thumbnailUrl":"https://i.ytimg.com/vi/Go12Vf6aL60/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYSCA6KH8wDw==&rs=AOn4CLBVGubxbFaIyFpsO2EV3PV83whifQ","duration":277},{"youtubeId":"XvCKe_kI0g0","title":"Cinematic Uplifting Emotional by Infraction [No Copyright Music] / Oslo","thumbnailUrl":"https://i.ytimg.com/vi/XvCKe_kI0g0/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYOiBTKHIwDw==&rs=AOn4CLD2OqsA_zWaeTVufq56mw9X19RIFg","duration":114},{"youtubeId":"ho53yIWVQXc","title":"(No Copyright Music) Dramatic Epic [Epic Music] by MokkaMusic / Invasion","thumbnailUrl":"https://i.ytimg.com/vi/ho53yIWVQXc/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBGKEMwDw==&rs=AOn4CLDD2Vq2n3uLWbgwosW55a6vBYpMjg","duration":109},{"youtubeId":"HX70Cor5Ol0","title":"Cinematic Dramatic Trailer by Infraction [No Copyright Music] / Waiting For The Storm","thumbnailUrl":"https://i.ytimg.com/vi/HX70Cor5Ol0/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4OgAK4CIoCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLCWfyvgaF5NbVstfPOJcfLI9M4_Lg","duration":99},{"youtubeId":"FV2ndwzA5cg","title":"Epic Trailer Intro Teaser by Infraction [No Copyright Music] / Backfire","thumbnailUrl":"https://i.ytimg.com/vi/FV2ndwzA5cg/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4OgAK4CIoCDAgAEAEYSyBfKGUwDw==&rs=AOn4CLDAQjSeGVMm3TJycUdeB1SS-KD4Ew","duration":77},{"youtubeId":"YyLRofvgzrU","title":"😟 Tense & Orchestral (Royalty Free Music) - \\"REFUSING THE ULTIMATUM\\" by Arthur Vyncke 🇧🇪","thumbnailUrl":"https://i.ytimg.com/vi/YyLRofvgzrU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDqBMEAMX2zY63bbVkmQNmkDB6E5A","duration":99},{"youtubeId":"c-XpTMGPQvI","title":"Epic Cinematic Dramatic Adventure Trailer (Creative Commons)","thumbnailUrl":"https://i.ytimg.com/vi/c-XpTMGPQvI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCQVRW_Wxkn2Rr-W-1ylhmJcnoaQw","duration":137},{"youtubeId":"A0WiYP2N2Iw","title":"Epic Heroic Trailer Music Royalty Free | Dragonheart by Talekeeper Music","thumbnailUrl":"https://i.ytimg.com/vi/A0WiYP2N2Iw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLChhN6iwvwZxO74CkpIjqVNta5IXg","duration":158},{"youtubeId":"BtrnX8q-6mw","title":"Three Houses Main Theme","thumbnailUrl":"https://i.ytimg.com/vi/BtrnX8q-6mw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDEN6ILefcY8LHMosNdm4nS1hv5fA","duration":256},{"youtubeId":"4DuHmfq7t_I","title":"Twilight Princess OST-Trailer Music","thumbnailUrl":"https://i.ytimg.com/vi/4DuHmfq7t_I/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB1KehDi1LS1lqSdZ8laKevtrJuIw","duration":127},{"youtubeId":"Ac8sWSV_5Ts","title":"The Legend of Zelda WITHOUT LYRICS","thumbnailUrl":"https://i.ytimg.com/vi/Ac8sWSV_5Ts/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAbH-YSMGFWUfslKFiQqKAor06WzA","duration":134},{"youtubeId":"aBmjFrx3Tr0","title":"Loch Lomond (Accompaniment & Lyrics)","thumbnailUrl":"https://i.ytimg.com/vi/aBmjFrx3Tr0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCMMDMYsmtIZW1vBe88pkoBenLDkw","duration":238},{"youtubeId":"9QIs-lqR58c","title":"FE Three Hopes Trailer (Nintendo Direct 09/02/22) Music","thumbnailUrl":"https://i.ytimg.com/vi/9QIs-lqR58c/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCaNNYk6PWN9mQZgPajWr7u5I9Vww","duration":98},{"youtubeId":"BieT4vpPVKI","title":"Into the Unknown (From \\"Frozen 2\\"/Instrumental/Audio Only)","thumbnailUrl":"https://i.ytimg.com/vi/BieT4vpPVKI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCk_X_SD-Hy1XWIWdMpNZZmgCoJ4A","duration":202},{"youtubeId":"6_nXJy2aNHU","title":"The Legend of Zelda Breath of the Wild 2 (E3 2021 Trailer) Music","thumbnailUrl":"https://i.ytimg.com/vi/6_nXJy2aNHU/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4OgAK4CIoCDAgAEAEYciBOKD8wDw==&rs=AOn4CLDv8nMB5dAKGJ5vcAxhS4Zyc77BrA","duration":62},{"youtubeId":"Yx45D7T6HZU","title":"Epilogue (The Legend of Zelda: Breath of the Wild OST)","thumbnailUrl":"https://i.ytimg.com/vi/Yx45D7T6HZU/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBSKE0wDw==&rs=AOn4CLBgrImeRyxBanbCmmOibCOf7uYi3w","duration":110},{"youtubeId":"w7gic_50GUs","title":"Sea Of Thieves OST - Arriving The Sea Of Thieves","thumbnailUrl":"https://i.ytimg.com/vi/w7gic_50GUs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDzjbd7S6v-OVIsCIETEZ1U9r3WFg","duration":63},{"youtubeId":"V8RkqQ8fQs4","title":"Switch Presentation 2017 Trailer Music | The Legend of Zelda: Breath of the Wild Soundtrack OST","thumbnailUrl":"https://i.ytimg.com/vi/V8RkqQ8fQs4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAkuhi3D8PDPRkPitiwSxWqmmaYBQ","duration":202},{"youtubeId":"v4ReyoNpyrM","title":"The Legend of Zelda 25th Anniversary Symphony: Ballad of the Goddess (Skyward Sword)","thumbnailUrl":"https://i.ytimg.com/vi/v4ReyoNpyrM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB80R9gU-eXnErJcz3Ox2T26oxobw","duration":130},{"youtubeId":"L2avHInwkGk","title":"Staff Credits Title Looped   The Legend of Zelda The Wind Waker HD Music Extended","thumbnailUrl":"https://i.ytimg.com/vi/L2avHInwkGk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCtQA1s-CCjcPMQ0BICXveHdg3TdA","duration":931},{"youtubeId":"qrnFMTVBBgI","title":"The Legendary Hero","thumbnailUrl":"https://i.ytimg.com/vi/qrnFMTVBBgI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAMjOp54vp6eTtd4uC-6YlhBF7RJg","duration":183},{"youtubeId":"V3w4FI3v6Rw","title":"Fódlan Winds (Fire Emblem Three Houses) - Rozen & Reven","thumbnailUrl":"https://i.ytimg.com/vi/V3w4FI3v6Rw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDZgEFE-cuMdGxhudyR9q47P2tUwg","duration":235},{"youtubeId":"ukEAC1NBJJw","title":"Klagmar\'s Top VGM #2,189 - Hyrule Warriors Legends - Title & Dragon","thumbnailUrl":"https://i.ytimg.com/vi/ukEAC1NBJJw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBLP081MdNw0MzqmIeocwpFlU1JAA","duration":211},{"youtubeId":"QdXh5ntqEk4","title":"Final Fantasy: Main Theme","thumbnailUrl":"https://i.ytimg.com/vi/QdXh5ntqEk4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLALdkdXo5HVwpJJzI6J14yU8WLugQ","duration":165},{"youtubeId":"Mm7DHztmPF8","title":"Zelda: Link\'s Awakening - Ballad of the Wind Fish feat. Amaterasu (Piano/Violin Cover)","thumbnailUrl":"https://i.ytimg.com/vi/Mm7DHztmPF8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD0K7ayUcRKK78ub67BgKiCskq1Dw","duration":165},{"youtubeId":"tOfU-6f2zhI","title":"Castle in the Sky Theme 1080P HQ","thumbnailUrl":"https://i.ytimg.com/vi/tOfU-6f2zhI/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYEyBRKH8wDw==&rs=AOn4CLBIJRhTCFlEpHyiQZYh4ccpN7c1qA","duration":406},{"youtubeId":"nk2pbzJDmnE","title":"Jorge Rivera-Herrans - Warrior of the Mind ft.Teagan Earley (Instrumental) | EPIC the Musical","thumbnailUrl":"https://i.ytimg.com/vi/nk2pbzJDmnE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDQNPCvHmh3_R481ezdGpAQHnNgKw","duration":228},{"youtubeId":"wIs279NTi9Y","title":"Zelda: Twilight Princess - Midna\'s Desperate Hour (Piano Cover)","thumbnailUrl":"https://i.ytimg.com/vi/wIs279NTi9Y/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLABs4Bs8g-qE4QRCMzItrEzOrgs1g","duration":127},{"youtubeId":"C1fq4Z08JLI","title":"The Legend of Zelda: Breath of the WIld 2017 Trailer (Remix) - Super Smash Bros. Ultimate Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/C1fq4Z08JLI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBcKP_5BteMAnNALDtPHiA0PJ6Sqg","duration":291},{"youtubeId":"cgXGfYsz0k8","title":"My Shot [Rise Up Remix] (Karaoke/Instrumental) - The Hamilton Mixtape","thumbnailUrl":"https://i.ytimg.com/vi/cgXGfYsz0k8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC1NT5jcKaV4ubfr0wqgrCATu-XWg","duration":273},{"youtubeId":"JNwAR1phXq0","title":"My Shot (Instrumental)","thumbnailUrl":"https://i.ytimg.com/vi/JNwAR1phXq0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCXB3gqVBRNBrEDZQrdaaqG6Seeww","duration":340},{"youtubeId":"tl39KWu2T6U","title":"Vortigon - Cosmic Confrontations (FTL Remix)","thumbnailUrl":"https://i.ytimg.com/vi/tl39KWu2T6U/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC1R7M_Xrg78ijvW_BtaWiVtO8tbQ","duration":607},{"youtubeId":"3DlgJH-LO14","title":"Remember the Bastion","thumbnailUrl":"https://i.ytimg.com/vi/3DlgJH-LO14/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCMmYQ_IDxf6BG8Ml9KTkpRPOyZtg","duration":522},{"youtubeId":"NWOJvEQE4D0","title":"Good Riddance (Instrumental) - Hades","thumbnailUrl":"https://i.ytimg.com/vi/NWOJvEQE4D0/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYciBSKEEwDw==&rs=AOn4CLApicvOdn4LWSWs9YUo2NsjOY5KpQ","duration":178},{"youtubeId":"Yy8MEO_2AYo","title":"2: The Girl Who Fell from the Sky CitS OST","thumbnailUrl":"https://i.ytimg.com/vi/Yy8MEO_2AYo/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Ab4CgALwAYoCDAgAEAEYfyATKBMwDw==&rs=AOn4CLCe49ebFICtgc4zWcf0X090rxoM9w","duration":159}]},{"playlistId":"PLV8C9t518pCJXjNed2p60cLVcWXDQCeQ6","title":"D&D - Theros - Ominous","musics":[{"youtubeId":"Un3XOZUri64","title":"Arena Ending Theme | Sea of Thieves","thumbnailUrl":"https://i.ytimg.com/vi/Un3XOZUri64/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBQkZfp9bnHEWbh374pr8apw7ahYA","duration":203},{"youtubeId":"rwyIdsnPJ6E","title":"The Passion of Souls (Original Game Soundtrack)","thumbnailUrl":"https://i.ytimg.com/vi/rwyIdsnPJ6E/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLATChzCJIq0crdfHHa59FQjUUX6Sg","duration":251},{"youtubeId":"YPLMZfkDmeA","title":"Sea of Thieves - OST | The Kraken","thumbnailUrl":"https://i.ytimg.com/vi/YPLMZfkDmeA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBI6cXXWagxVF6c7M5fwaMu75-6Dw","duration":549},{"youtubeId":"3T2P98dFbJk","title":"Spectral Sails (Original Game Soundtrack)","thumbnailUrl":"https://i.ytimg.com/vi/3T2P98dFbJk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAat921Zz6XicvodBVRnL3hXhnseg","duration":390},{"youtubeId":"VQasoV1Vg1U","title":"Stolas Speaks","thumbnailUrl":"https://i.ytimg.com/vi/VQasoV1Vg1U/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAe7Udd9fCsTHN5XgLL1e1diUHWyg","duration":79},{"youtubeId":"gu99_LbYwWA","title":"Hearthstone - Theme of Raza the Chained (Cursed)","thumbnailUrl":"https://i.ytimg.com/vi/gu99_LbYwWA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAji1rE2dk7dNYDLHmK2bEcqvYrvg","duration":780},{"youtubeId":"ttxtf6NfvR4","title":"Sanctuary Dungeon","thumbnailUrl":"https://i.ytimg.com/vi/ttxtf6NfvR4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBPHLmlmDoajnJyWOe32nQtFrxKxA","duration":220},{"youtubeId":"Ao-atEjWI-4","title":"Orchestral \\"Summon The Megalodon\\" Sea Of Thieves Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/Ao-atEjWI-4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDoLTY5Ey4ixarHoMGyMzC7dTRaVw","duration":145},{"youtubeId":"K8vNEtXOGMM","title":"\\"The Legend Of The Veil\\" Sea Of Thieves Unofficial Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/K8vNEtXOGMM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC_A7SaaTEQ9spjQNgtpkZlDUjrLw","duration":166},{"youtubeId":"7olkJqawq2I","title":"\\"On The Ancient Warpath\\" Sea Of Thieves Unofficial Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/7olkJqawq2I/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAHEReLP6OgCZqGbUIZipBM4FAU-A","duration":187},{"youtubeId":"SiyOajnJnTg","title":"The Witcher 3 OST - Ladies of the Woods (Extended)","thumbnailUrl":"https://i.ytimg.com/vi/SiyOajnJnTg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDVgHbBVMK8XEYnZp9pci9m4if_6w","duration":516},{"youtubeId":"T_RRYfztxa0","title":"31 - The Forbidden Forest - Harry Potter and the Sorcerer\'s Stone Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/T_RRYfztxa0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDvAh-cFSgFyDLUrPG8pskv1tPpZQ","duration":314},{"youtubeId":"ho5KJ-bva9Y","title":"The Lord of the Rings: The Fellowship of the Ring CR - 02. Caras Galadhon","thumbnailUrl":"https://i.ytimg.com/vi/ho5KJ-bva9Y/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBtcaKT2TItA8Vvpsws1s6ck1IYRw","duration":564},{"youtubeId":"LI9DKV0_110","title":"The Forests of Ithilien","thumbnailUrl":"https://i.ytimg.com/vi/LI9DKV0_110/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBXnUmuekOM8d0EIEgNVahxNKGXtQ","duration":398},{"youtubeId":"Z3dJnmZmv14","title":"\\"Ancient Awakenings\\" Sea Of Thieves Unofficial Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/Z3dJnmZmv14/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCv8T-q_IQfe6aKeFUsli7LMSxS1w","duration":83},{"youtubeId":"N9Clmr94zGY","title":"Sacred Grove - The Legend of Zelda: Twilight Princess","thumbnailUrl":"https://i.ytimg.com/vi/N9Clmr94zGY/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4OgAK4CIoCDAgAEAEYfyApKBMwDw==&rs=AOn4CLCaWtjJtZb3Nr5Ja1ZD7jBFcu3k8Q","duration":181},{"youtubeId":"9G6CskLxgMI","title":"Ravenloft- Traveling the roads of Barovia","thumbnailUrl":"https://i.ytimg.com/vi/9G6CskLxgMI/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLDlhq4CrVD0EcaLv6XIIZlxLu4oSA","duration":3186},{"youtubeId":"a0Av2XNPd_g","title":"Obscura | 1 hour of Dark Ambient Fantasy Music | RPG Dungeon Ambience | D&D Audio | ASKII","thumbnailUrl":"https://i.ytimg.com/vi/a0Av2XNPd_g/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDuQn-6xEqBFb5tDUZA_1GXCEg4_Q","duration":3733},{"youtubeId":"C3XqMaY4_Ig","title":"Sea of Thieves OST - A Mysterious Ambience","thumbnailUrl":"https://i.ytimg.com/vi/C3XqMaY4_Ig/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYZSBJKFMwDw==&rs=AOn4CLBR8qXZWpzQPazH-aU6cwYauuJQvA","duration":204},{"youtubeId":"bjqo9cLX2Dg","title":"\\"Protect The Tributes\\" Sea Of Thieves OST","thumbnailUrl":"https://i.ytimg.com/vi/bjqo9cLX2Dg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB1B4DqCngCxjacM6iwzRk4zbUafg","duration":248},{"youtubeId":"K_jp-nAzdu0","title":"Gold Hoarder (Original Game Soundtrack)","thumbnailUrl":"https://i.ytimg.com/vi/K_jp-nAzdu0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCJUTVAR_pxLwjQGI1luVsTUpUUmA","duration":208},{"youtubeId":"oaq6PuvIZyM","title":"Morrow and Pendragon - Sea of Thieves : Heart of Fire OST","thumbnailUrl":"https://i.ytimg.com/vi/oaq6PuvIZyM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA96dTNjILjaubdzbuPmmDbFd1GFQ","duration":110},{"youtubeId":"HWJEpS4jcbk","title":"Shores of Gold (Original Game Soundtrack)","thumbnailUrl":"https://i.ytimg.com/vi/HWJEpS4jcbk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCXqyMBNPpuYwNfdO_v6imWleX2pQ","duration":109},{"youtubeId":"9goA-NFA8_0","title":"Sea of Thieves: Cursed Sails Skeleton Ship Music","thumbnailUrl":"https://i.ytimg.com/vi/9goA-NFA8_0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBLJIZSbTO_HGSH_gnoACipMRqF4Q","duration":210},{"youtubeId":"TyuBraP1aLc","title":"\\"The Battle Of The Ghostly Souls\\" Sea Of Thieves Ghost Ship OST","thumbnailUrl":"https://i.ytimg.com/vi/TyuBraP1aLc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBpUXM-yKsrtPBu7mhERwAPWOFoRw","duration":151},{"youtubeId":"TtjveTbaLIY","title":"\\"The Battle Of The Flaming Heart\\" Sea Of Thieves Ghost Ship OST","thumbnailUrl":"https://i.ytimg.com/vi/TtjveTbaLIY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCLtQtiMTv854QS2kzbLjCfQs7cNQ","duration":137},{"youtubeId":"cEYuGNbeeBk","title":"Force of Flame (Original Game Soundtrack)","thumbnailUrl":"https://i.ytimg.com/vi/cEYuGNbeeBk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB0KNlNJFDe_3oLl8QOJN6fdSJGgw","duration":260},{"youtubeId":"cjjSU9JQb2Y","title":"\\"Bring The Sky To Worlds End\\" Sea Of Thieves Ashen Lords OST","thumbnailUrl":"https://i.ytimg.com/vi/cjjSU9JQb2Y/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDtKN7Xa_hvhzMsOw9JjJKMf24zCA","duration":122},{"youtubeId":"XCXLG6IzDuM","title":"\\"A Reign Of Ash Forever\\" Sea Of Thieves Ashen Lords OST","thumbnailUrl":"https://i.ytimg.com/vi/XCXLG6IzDuM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDOlho4Pa7uKBhrXWuBQdQJaa9flA","duration":163},{"youtubeId":"15l778QqdZg","title":"Sea of Thieves OST - Approaching the Storm (unlisted music)","thumbnailUrl":"https://i.ytimg.com/vi/15l778QqdZg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAae7itZ77B0emruLgSG3SJWtuITw","duration":226},{"youtubeId":"Ydgt8iC9Azs","title":"\\"Forts Of The Forgotten\\" Sea Of Thieves Unofficial Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/Ydgt8iC9Azs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDVfJ5Zpv6DdM8xckVKDhkLKGgVJQ","duration":129},{"youtubeId":"0DMAS5g-_8Y","title":"\\"Spectral Spanish Summons\\" Sea Of Thieves Unofficial Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/0DMAS5g-_8Y/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDiB7FuIAa8_HLxfJGnqYI-HvP2nA","duration":233},{"youtubeId":"XHrSwKWINwk","title":"\\"The Hungering War\\" Sea Of Thieves Unofficial Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/XHrSwKWINwk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD7WAiF1P7CojKKS7ZCNLZgN-BrKQ","duration":153},{"youtubeId":"saZ3EHWFZSY","title":"Fly Me to the Moon but it actually fits Evangelion vibe (Evangelion, Frank Sinatra)","thumbnailUrl":"https://i.ytimg.com/vi/saZ3EHWFZSY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB9pBY0nFa8hvW15hl_6Hy8KgY9jQ","duration":350},{"youtubeId":"slvejIelzio","title":"A Cruel Angel\'s Thesis but it\'s actually dark and depressive (Evangelion OP)","thumbnailUrl":"https://i.ytimg.com/vi/slvejIelzio/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDZE67EKlLZUIvxyQQk5KhKwjGbZw","duration":310},{"youtubeId":"L8YIB2L6g3E","title":"Attack on Titan OST - Vogel im Käfig (Piano)","thumbnailUrl":"https://i.ytimg.com/vi/L8YIB2L6g3E/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLChC6R0TL35gQAhFEdN2q76RhA_sw","duration":243},{"youtubeId":"uGoQV6D-5xA","title":"The Lord of the Rings: The Fellowship of the Ring CR - 12. Moria","thumbnailUrl":"https://i.ytimg.com/vi/uGoQV6D-5xA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD65Vt12pYi2C5rt570ILuKVr9Gcw","duration":150},{"youtubeId":"YU1cAM_0yYg","title":"Lord of the Mountain - The Legend of Zelda: Breath of the Wild Music Extended","thumbnailUrl":"https://i.ytimg.com/vi/YU1cAM_0yYg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDwedJ1JYZzLwCK8mLznL6zzhoa5w","duration":1801},{"youtubeId":"jXYocUd6fR4","title":"Master Mirror Main Menu Music || Gwent: The Witcher Card Game","thumbnailUrl":"https://i.ytimg.com/vi/jXYocUd6fR4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAwVxXukPoCYVRFWhFwckeGZMzxtA","duration":141},{"youtubeId":"gokhBJWSjeM","title":"The Witcher 3: Wild Hunt OST - The Fields of Ard Skellig","thumbnailUrl":"https://i.ytimg.com/vi/gokhBJWSjeM/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZiBmKGYwDw==&rs=AOn4CLB12DBCcyNyfOhWmvWkR-V0kRFvrA","duration":190},{"youtubeId":"_0L5kf0DdAk","title":"Pillars of Eternity Soundtrack - The Endless Paths I","thumbnailUrl":"https://i.ytimg.com/vi/_0L5kf0DdAk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDMt7HduYfl5Hw9NqkpuYZaKHKAiA","duration":153},{"youtubeId":"WYZ9S0w2Z1w","title":"Castlevania  Lords of Shadow OST - Lake of Oblivion","thumbnailUrl":"https://i.ytimg.com/vi/WYZ9S0w2Z1w/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBN7wnj3gJ3EAqzkXwzVvjQD1uiTA","duration":47},{"youtubeId":"5cj-IcbiWe4","title":"D&D Official Roleplaying Soundtrack - Prelude","thumbnailUrl":"https://i.ytimg.com/vi/5cj-IcbiWe4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD6i8K2CgfMd1f1XLxVpAykm1-MPQ","duration":135},{"youtubeId":"dyWVZxnpnPo","title":"D&D Official Roleplaying Soundtrack - Craft of the Wizard","thumbnailUrl":"https://i.ytimg.com/vi/dyWVZxnpnPo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDov419UoSpiWQTmUl9OHLWSyP2Qw","duration":204},{"youtubeId":"dyWVZxnpnPo","title":"D&D Official Roleplaying Soundtrack - Craft of the Wizard","thumbnailUrl":"https://i.ytimg.com/vi/dyWVZxnpnPo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDov419UoSpiWQTmUl9OHLWSyP2Qw","duration":204},{"youtubeId":"fmeBFW4YuxE","title":"World of Warcraft Soundtrack   Haunted 02","thumbnailUrl":"https://i.ytimg.com/vi/fmeBFW4YuxE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCLFeG-5i0sHWVAKap3OkWX9t-LkQ","duration":61}]},{"playlistId":"PLV8C9t518pCKAKuh-e4jUrbMNLh8Lcpfz","title":"D&D - Podari - Let\'s Fucking Go","musics":[{"youtubeId":"GIN_cpdLyw4","title":"FantomenK - A Tiny Spaceship\'s Final Mission","thumbnailUrl":"https://i.ytimg.com/vi/GIN_cpdLyw4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAHlCVzyBVv1Ddx0tEktsYK_h5lBQ","duration":235},{"youtubeId":"O1psuRNXq94","title":"[2-15] Last Battle - Cave Story Remastered Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/O1psuRNXq94/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBLpPXr-O5Smz9W3lABLZrKg0x5ow","duration":192},{"youtubeId":"Fy7O5NrKjDA","title":"OC ReMix #3202: Super Smash Bros. Melee \'Together, We Fly\' [Fire Emblem] by Nabeel Ansari","thumbnailUrl":"https://i.ytimg.com/vi/Fy7O5NrKjDA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDh4OfkIyFa5yTMZl5CRs-lEtg5OQ","duration":261},{"youtubeId":"4CeO4S0wON0","title":"Now or Never! - Splatoon 2 OST","thumbnailUrl":"https://i.ytimg.com/vi/4CeO4S0wON0/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYfyA1KFgwDw==&rs=AOn4CLCkU2ataUYBBV0WFxU_SZ1ZMeUOKQ","duration":63},{"youtubeId":"ukEAC1NBJJw","title":"Klagmar\'s Top VGM #2,189 - Hyrule Warriors Legends - Title & Dragon","thumbnailUrl":"https://i.ytimg.com/vi/ukEAC1NBJJw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBLP081MdNw0MzqmIeocwpFlU1JAA","duration":211},{"youtubeId":"ylssgHLVZaE","title":"One Piece OST: The Very Very Very Strongest | EPIC VERSION","thumbnailUrl":"https://i.ytimg.com/vi/ylssgHLVZaE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDrjLMbREhjZ1xLJHmyw-LltbnDJA","duration":317},{"youtubeId":"kfQ0zm065h0","title":"Bravely Default - Flying Fairy OST - 09 Conflict\'s Chime","thumbnailUrl":"https://i.ytimg.com/vi/kfQ0zm065h0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCmWO7MsqZmXcvRr-gggi1yhor8Tg","duration":164},{"youtubeId":"eUNw6ka7oTE","title":"Bravely Default - Flying Fairy OST - 15 That Person\'s Name Is","thumbnailUrl":"https://i.ytimg.com/vi/eUNw6ka7oTE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLChavR2ycGcvjO_MgNrX5xu9DWWfg","duration":338},{"youtubeId":"UjQ5aKu123g","title":"Bravely Default - Flying Fairy OST - 26 Baby Bird","thumbnailUrl":"https://i.ytimg.com/vi/UjQ5aKu123g/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDlwX_oYVJEIVD6itZ5RfC8ie_VAA","duration":93},{"youtubeId":"P0Xxnvvykgs","title":"Bravely Default - Flying Fairy OST - 24 You are My Hope","thumbnailUrl":"https://i.ytimg.com/vi/P0Xxnvvykgs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDIyk2IQSET1EATD8ebIkapuJhAkg","duration":93},{"youtubeId":"BEgIUiWw42U","title":"Bravely Default - Flying Fairy OST - 27 Love\'s Vagrant","thumbnailUrl":"https://i.ytimg.com/vi/BEgIUiWw42U/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBbb9z3JwNEtmJRsU3W1YuxFlgRXg","duration":97},{"youtubeId":"aeVFo15FgPg","title":"Bravely Default - Flying Fairy OST - 25 Wind\'s Direction","thumbnailUrl":"https://i.ytimg.com/vi/aeVFo15FgPg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAyORcYj_qiMSfLQ1IiKbbx_UZ3Kw","duration":92},{"youtubeId":"KqXQp3_msnA","title":"Bravely Default - Flying Fairy OST - 23 Fighting to the End","thumbnailUrl":"https://i.ytimg.com/vi/KqXQp3_msnA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAAO0-vXOAXYv9WrLxArBI3qtfWXA","duration":254},{"youtubeId":"UeGV3MUlSpU","title":"Bravely Default - Flying Fairy OST - 44 Wicked Flight","thumbnailUrl":"https://i.ytimg.com/vi/UeGV3MUlSpU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA3UFFBLk28CXzOm-PteR7DWcsEFw","duration":473},{"youtubeId":"kQUyiDaJxVM","title":"バトル1","thumbnailUrl":"https://i.ytimg.com/vi/kQUyiDaJxVM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAa0wEX6K3IlUDqf6e23-8KpZTcTA","duration":199},{"youtubeId":"4aKFdpJ4_bo","title":"ボスバトル2","thumbnailUrl":"https://i.ytimg.com/vi/4aKFdpJ4_bo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDWJw_3_gBrHjPJOSESKoGd39vJeg","duration":207},{"youtubeId":"4aKFdpJ4_bo","title":"ボスバトル2","thumbnailUrl":"https://i.ytimg.com/vi/4aKFdpJ4_bo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDWJw_3_gBrHjPJOSESKoGd39vJeg","duration":207},{"youtubeId":"f3F_xd5R_4I","title":"理を司る者","thumbnailUrl":"https://i.ytimg.com/vi/f3F_xd5R_4I/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBXHcG_9afW2jpzO7QujRjlReaLZQ","duration":281},{"youtubeId":"EjGmHjQYS2k","title":"旅路の果てに立ちはだかる者","thumbnailUrl":"https://i.ytimg.com/vi/EjGmHjQYS2k/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCp4sSPuIA9UCzPfJzO_51n5nzDCQ","duration":241},{"youtubeId":"GiXS8qqKnJs","title":"魔女と呼ばれる者","thumbnailUrl":"https://i.ytimg.com/vi/GiXS8qqKnJs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB4bmaYvvtxP3obx272qPTvPYRpaQ","duration":249},{"youtubeId":"AhRjEifd0Go","title":"魔神の血を継ぐ者","thumbnailUrl":"https://i.ytimg.com/vi/AhRjEifd0Go/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAcIQzHU8w5l4D7-pcQNV8huvvy0Q","duration":286},{"youtubeId":"3MGqsC0fSoM","title":"Demon Slayer Mugen Train OST | EPIC SOUNDTRACK MIX (HQ Fan-Made)","thumbnailUrl":"https://i.ytimg.com/vi/3MGqsC0fSoM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBceXHMqnnFxxGzcfIUGcrG7PUvdg","duration":1527},{"youtubeId":"zqvpTLTs9Dg","title":"Gurren Lagann OST Shoko Nakagawa - 04 - Sorairo Days [Instrumental]","thumbnailUrl":"https://i.ytimg.com/vi/zqvpTLTs9Dg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC-wWsT6Do1SQ405ZLCEcpavvQsGQ","duration":260},{"youtubeId":"AkTche1J7O0","title":"Gurren Lagann OST Disc 2 - 21 - The Blue Monday E\'r\'ectrical Parade","thumbnailUrl":"https://i.ytimg.com/vi/AkTche1J7O0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAzoOigFW5m_q-CV30Y-D4Or26p9w","duration":290},{"youtubeId":"_PvR39VWkLQ","title":"Kill La Kill - Ambiguous (Instrumental)","thumbnailUrl":"https://i.ytimg.com/vi/_PvR39VWkLQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBkvH4RSvnwmOmelwcyCqMideZjzQ","duration":270},{"youtubeId":"5JygRcDzikA","title":"Jam Project - The Hero [Instrumental]","thumbnailUrl":"https://i.ytimg.com/vi/5JygRcDzikA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDDP0MH-0PN-mo2bfKmLs0SsXuTQA","duration":229},{"youtubeId":"4PuP7IkpRLU","title":"05.  Counterattack Mankind - High Quality","thumbnailUrl":"https://i.ytimg.com/vi/4PuP7IkpRLU/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBZKFcwDw==&rs=AOn4CLCJBgUiStGpVKBQTeox9yMNpSCYAQ","duration":367},{"youtubeId":"ddon3hc2MrE","title":"KATSUO ONO ( Detective Conan-OST 1) official MAIN THEME","thumbnailUrl":"https://i.ytimg.com/vi/ddon3hc2MrE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCIZA88R3SZD8bMdl1wiRpp-GHuFQ","duration":154},{"youtubeId":"LCIY41hopq4","title":"Mad Max - Brothers In Arms \\"Epic Rock\\" Cover (Little V)","thumbnailUrl":"https://i.ytimg.com/vi/LCIY41hopq4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBgw5a8xqQhKlT4E8c5X-dGk5Hyhw","duration":269},{"youtubeId":"PQ0FNJJSL_U","title":"Splatoon 3 - Now or Never! (Full version)","thumbnailUrl":"https://i.ytimg.com/vi/PQ0FNJJSL_U/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYQyApKH8wDw==&rs=AOn4CLAattLp8TjfET9RXMAKXovkyH4eIg","duration":66},{"youtubeId":"zmo0bMoony8","title":"Flying Battery Zone Act 1 - Sonic Mania [OST]","thumbnailUrl":"https://i.ytimg.com/vi/zmo0bMoony8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA0E8SdyFfJJTSExYQAA-0chZGMQQ","duration":179},{"youtubeId":"s7GE2aLKPgU","title":"Judy and Mary - Sobakasu (Opening Samurai X) [Instrumental]","thumbnailUrl":"https://i.ytimg.com/vi/s7GE2aLKPgU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDyZZFixKE7yOeJalPXMhquIpOZqQ","duration":255},{"youtubeId":"lM3DfSxWRYY","title":"One Punch Man OST -1080p- Inferiority (Original)","thumbnailUrl":"https://i.ytimg.com/vi/lM3DfSxWRYY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLChs1iEedGk9JtYXNCt6WL5judrxg","duration":109},{"youtubeId":"rW7OB_HDCGQ","title":"One Punch Man OST -1080p- Seigi Shikkou (Original)","thumbnailUrl":"https://i.ytimg.com/vi/rW7OB_HDCGQ/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBbKFUwDw==&rs=AOn4CLCj0PVjMWcwIHMZ243TjxIaww-8Zw","duration":112},{"youtubeId":"52LDf77XQ8g","title":"Imagine Dragons   Warriors INSTRUMENTAL Thing","thumbnailUrl":"https://i.ytimg.com/vi/52LDf77XQ8g/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBRuwo6WV-U8kq8SLivdT2iwe8O4g","duration":171},{"youtubeId":"YVGBQ-vdOvI","title":"Imagine Dragons   Believer Official Instrumental","thumbnailUrl":"https://i.ytimg.com/vi/YVGBQ-vdOvI/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYIiBjKGUwDw==&rs=AOn4CLAbPp5zVZjMJ5sjOCJ73Hfei58fmg","duration":205},{"youtubeId":"98fWhV-LIDk","title":"9mm Parabellum Bullet - Inferno [INSTRUMENTAL]","thumbnailUrl":"https://i.ytimg.com/vi/98fWhV-LIDk/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4EgALgA4oCDAgAEAEYYSBhKGEwDw==&rs=AOn4CLB4FAMpYsPftrKgv6fQLqpx-iQTVw","duration":91},{"youtubeId":"3SDBTVcBUVs","title":"My Hero Academia OST - You Say Run + Jet Set Run (You Say Run v2)","thumbnailUrl":"https://i.ytimg.com/vi/3SDBTVcBUVs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBz2UwzIyYeH04Bht2BiD1OWJvcyg","duration":455},{"youtubeId":"ATS78TYGHLA","title":"Before My Body is Dry -Karaoke Version","thumbnailUrl":"https://i.ytimg.com/vi/ATS78TYGHLA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAyJtNPbIpcrxYv6PE6gMGnWUhsOA","duration":249},{"youtubeId":"z20ZJByZPLE","title":"The Rising of the Shield Hero OP Instrumental","thumbnailUrl":"https://i.ytimg.com/vi/z20ZJByZPLE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDsxQ8F9Q_P-6Cn0bES_tat4fwlQw","duration":205},{"youtubeId":"8fQx66J1jdg","title":"Bravely Default Remix - Love\'s Vagrant (Ringabel\'s Theme) - Dj CUTMAN & Ralfington - GameChops","thumbnailUrl":"https://i.ytimg.com/vi/8fQx66J1jdg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD85f6YLcsCh9380o_e323LtuPFuw","duration":208},{"youtubeId":"jBO07j8Unqc","title":"Bravely Default Remix - Beneath a Hollow Moon (Agnès Theme) - Dj CUTMAN & Ralfington - GameChops","thumbnailUrl":"https://i.ytimg.com/vi/jBO07j8Unqc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAJJLZr69yt26xpR_JAa4VPT0m-5A","duration":175},{"youtubeId":"8XbrLUTwsyw","title":"Bravely Default Remix - You Are My Hope (Tiz\'s Theme) - Dj CUTMAN & Ralfington - GameChops","thumbnailUrl":"https://i.ytimg.com/vi/8XbrLUTwsyw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBE3kY2WhNyx83Umsn5bWky-2exLQ","duration":196},{"youtubeId":"s7B8mMKZacg","title":"Bravely Default Remix - Baby Bird (Edea\'s Theme) - Dj CUTMAN & Ralfington - GameChops","thumbnailUrl":"https://i.ytimg.com/vi/s7B8mMKZacg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBvLA1SEvq3HGn8C7_rLmyzVesz9w","duration":175},{"youtubeId":"q657rEkgfKs","title":"Doom - At Doom\'s Gate E1M1 remake by Andrew Hulshult","thumbnailUrl":"https://i.ytimg.com/vi/q657rEkgfKs/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYfyA-KDAwDw==&rs=AOn4CLDl52ucERcoiopVwZ2LXkqJhkQCsw","duration":199},{"youtubeId":"8aQSl-s_jqM","title":"Gurren Lagann OST Disc 2 - 06 - BafBaf! Burning Like that... Likable? / BafBaf! Sonna ni Moeru ...","thumbnailUrl":"https://i.ytimg.com/vi/8aQSl-s_jqM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAowtVxeEd-ekstuRcY6Zfn9a4m9g","duration":337},{"youtubeId":"xgkhSTIlAxA","title":"Kill la Kill - Opening Theme, \\"Sirius\\" Instrumental","thumbnailUrl":"https://i.ytimg.com/vi/xgkhSTIlAxA/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdgDgALgA4oCDAgAEAEYZSBfKFMwDw==&rs=AOn4CLD4WpFg4GZ-yvyoDRdL6vA2YAY9nA","duration":266},{"youtubeId":"GChbMAAHIJs","title":"Gurren Lagann OST Disc 2 - 08 - Spin, Spin, Spin, Spi!? / Mawatte Mawatte Mawatte Mawaa!? / ...","thumbnailUrl":"https://i.ytimg.com/vi/GChbMAAHIJs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBouffZtJXNBSPWobW7QVgA0URTxw","duration":186},{"youtubeId":"_leOWa4qw9Y","title":"Donkey Kong Country - Gang-Plank Galleon (Final Boss remix/cover)","thumbnailUrl":"https://i.ytimg.com/vi/_leOWa4qw9Y/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBPeDGsmCASsMo5sxBoOsfCcVjWgQ","duration":191}]},{"playlistId":"PLV8C9t518pCJVX2o3tmvpYJhWADDl2DnG","title":"D&D - Dangerous Battle","musics":[{"youtubeId":"lAGm9MTyRJ8","title":"Combat Music Megamix - The Witcher 3: Wild Hunt","thumbnailUrl":"https://i.ytimg.com/vi/lAGm9MTyRJ8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCThMfOzW_ILm2kxBehGhxFgGFgjQ","duration":3502},{"youtubeId":"QV5ZBuNJMx0","title":"Attack On Titan - Vogel im Käfig Re-Mastered (Epic sound quality)","thumbnailUrl":"https://i.ytimg.com/vi/QV5ZBuNJMx0/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYciBQKDUwDw==&rs=AOn4CLBaYGE06kmcBiZotd3_zlldNRZ_xQ","duration":243},{"youtubeId":"BdgH0gFGVqs","title":"Attack on Titan Theme (ətˈæk 0N tάɪtn WMId) | EPIC ORCHESTRAL VERSION","thumbnailUrl":"https://i.ytimg.com/vi/BdgH0gFGVqs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCfoN82DeZqmy-WvNL6b2z8WgS_Aw","duration":303},{"youtubeId":"TQUsnto_3pw","title":"Shingeki no Kyojin - Attack on Titan Fight Theme","thumbnailUrl":"https://i.ytimg.com/vi/TQUsnto_3pw/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYZSBkKFkwDw==&rs=AOn4CLDwQcxLDfelFqzWnoEmmRZJHvpjUQ","duration":261},{"youtubeId":"i_0P1TOFwE8","title":"Chopin - Funeral March but it\'s ATTACK ON TITAN STYLE (feat. Before Lights Out)","thumbnailUrl":"https://i.ytimg.com/vi/i_0P1TOFwE8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCqw5-0UPtSvQ4GE_JqOeHwspmsyw","duration":351},{"youtubeId":"id72AIxqH_c","title":"THE APOCALYPSE - Attack on Titan Inspired Epic Dark Original Music | @RokNardin & Samuel Kim","thumbnailUrl":"https://i.ytimg.com/vi/id72AIxqH_c/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAw1brJf9SOK6_6tWwHpWZZSv9CQg","duration":246},{"youtubeId":"3TX7ca4QC9M","title":"Beethoven - Moonlight Sonata but it\'s ATTACK ON TITAN STYLE (Rumbling Sonata)","thumbnailUrl":"https://i.ytimg.com/vi/3TX7ca4QC9M/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCVdG0WRPBGwRjHqAUINriS-ewdKQ","duration":253},{"youtubeId":"qBSkCfJ6oOk","title":"Attack on Titan S4: Footsteps of Doom | EPIC COVER (feat. Ashes on The Fire)","thumbnailUrl":"https://i.ytimg.com/vi/qBSkCfJ6oOk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCfUxPTSVnLOVqrUxVRIEiyh_xryg","duration":306},{"youtubeId":"9HaB4cVSNnw","title":"Attack on Titan: YOUSEEBIGGIRL/T:T (Apple Seed x Vogel Im Kafig) | EPIC COVER","thumbnailUrl":"https://i.ytimg.com/vi/9HaB4cVSNnw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC2EdkfHh5gRfJQfz3is2skU-zcfw","duration":368},{"youtubeId":"9uatm_Q_a2U","title":"Mozart - Lacrimosa but it\'s ATTACK ON TITAN STYLE","thumbnailUrl":"https://i.ytimg.com/vi/9uatm_Q_a2U/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAU1H2-o1L-WW44R_44nO0F1YQjWw","duration":316},{"youtubeId":"Gs-zRlcL2V0","title":"Wagner - Ride of The Valkyries but it\'s ATTACK ON TITAN STYLE (feat. ətˈæk 0N tάɪtn)","thumbnailUrl":"https://i.ytimg.com/vi/Gs-zRlcL2V0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAKgOfNHKUE-EXFW_vNrMXESooJHA","duration":307},{"youtubeId":"INqk7yT5tYs","title":"Fire Emblem Three Houses - Descent","thumbnailUrl":"https://i.ytimg.com/vi/INqk7yT5tYs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCx3X4yCE7UNhtLWfwAjtJl6Ki2Hw","duration":159},{"youtubeId":"SJXwqcbrCjo","title":"Fire Emblem - The Apex of the World (Rain/Thunder/Inferno)","thumbnailUrl":"https://i.ytimg.com/vi/SJXwqcbrCjo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDNBuzcw8U2wGc6H8H30seLgNEEzQ","duration":1103},{"youtubeId":"jNzaHzO4DC0","title":"Fire Emblem - Roar of Dominion (Rain/Thunder/Inferno/Embers)","thumbnailUrl":"https://i.ytimg.com/vi/jNzaHzO4DC0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC5qXAPWzZ8sFMQ98lbMnyjoRxuRg","duration":684},{"youtubeId":"TOrp-dXKLiM","title":"Fire Emblem - Blue Skies and a Battle / Between Heaven and Earth (Rain/Thunder/Inferno/Embers)","thumbnailUrl":"https://i.ytimg.com/vi/TOrp-dXKLiM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBVGNg1itZj0JB5SbLjHX0EP-CJtw","duration":1083},{"youtubeId":"TetmGhV1L7Q","title":"Fire Emblem - Corridor of the Tempest (Rain/Thunder/Inferno/Embers)","thumbnailUrl":"https://i.ytimg.com/vi/TetmGhV1L7Q/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB_FVnrOm9HEnPeliGIm5UvQLiFdA","duration":750},{"youtubeId":"0upUS7ro6i0","title":"Fire Emblem - Chasing Daybreak (Rain/Thunder/Inferno/Embers)","thumbnailUrl":"https://i.ytimg.com/vi/0upUS7ro6i0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBMfV2SmFG8NhmDAL0Y3a0R0AcalQ","duration":622},{"youtubeId":"PWJUr33FINQ","title":"Fire Emblem - Fódlan Winds (Rain/Thunder/Inferno/Embers)","thumbnailUrl":"https://i.ytimg.com/vi/PWJUr33FINQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDbBwhMG9Mxqcze9Dal0AJaEeWXMg","duration":609},{"youtubeId":"768cMj36p3o","title":"Attack on Titan S4 OST: Mikasa x Levi Ackerman Charge Theme (Levi vs Female Titan Theme & MORE)","thumbnailUrl":"https://i.ytimg.com/vi/768cMj36p3o/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDtXUXuHnM8L-UXJYfjs4TzDslTDA","duration":332},{"youtubeId":"D6TtASxc6d4","title":"Attack on Titan S4 Episode 14 OST: Levi vs Zeke Theme (HQ COVER)","thumbnailUrl":"https://i.ytimg.com/vi/D6TtASxc6d4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAWagcwI-asCjkj44QKCOO_GXrmgA","duration":334},{"youtubeId":"50NUVyTO0Dc","title":"E・M・A - Attack on Titan Original Soundtrack Vol. 1","thumbnailUrl":"https://i.ytimg.com/vi/50NUVyTO0Dc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDN_BnPXOuWjM6SDN_6HIv_uOMWmQ","duration":345},{"youtubeId":"rKNQHBl_Zmk","title":"Attack on Titan Season 4 Episode 6 OST: Mikasa vs Warhammer Titan Theme (Devils of Paradis Island)","thumbnailUrl":"https://i.ytimg.com/vi/rKNQHBl_Zmk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC6-5022P4V5DfPiVTmS9kDJ0Ji1g","duration":277},{"youtubeId":"SAZzSt8UBUw","title":"Shadows of Hyrule (feat. Celica Soldream)","thumbnailUrl":"https://i.ytimg.com/vi/SAZzSt8UBUw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBqbclRyYOVI5l0hX4mmoZpdcpCvg","duration":478},{"youtubeId":"k5tIGl7wqCg","title":"Demon Slayer: Rengoku Theme | EPIC MUSIC MIX (Set Your Heart Ablaze)","thumbnailUrl":"https://i.ytimg.com/vi/k5tIGl7wqCg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLATzEGdyt68b8RtXqlu7btr05LorA","duration":794},{"youtubeId":"ZAsB1X14tHY","title":"Shingekin no Kyojin OST CD1   04  立body機motion","thumbnailUrl":"https://i.ytimg.com/vi/ZAsB1X14tHY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDlsrlJXTAMgVAuNehwcCgyOYLEoA","duration":343},{"youtubeId":"Y1CyocdPQyE","title":"Daniel Yount - The Yogscast - Call of The Heroes","thumbnailUrl":"https://i.ytimg.com/vi/Y1CyocdPQyE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCw0R2-WfgV8Sd_vPj0NU1PQtAeYw","duration":149},{"youtubeId":"cej2O-mem64","title":"TO KILL A GOD | Epic Battle Dark Heroic Music | Epic Music Mix by @audiomachine","thumbnailUrl":"https://i.ytimg.com/vi/cej2O-mem64/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCCyftwMP9ZiswoX9FZyzQxD3QmkA","duration":1803},{"youtubeId":"U_vB6sMbRb4","title":"Mayhem - Rome Total War Original Soundtrack - Jeff van Dyck","thumbnailUrl":"https://i.ytimg.com/vi/U_vB6sMbRb4/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYfyBDKCgwDw==&rs=AOn4CLD5fMuMLqohtsdc8QOYZmG9NePInA","duration":220},{"youtubeId":"A0xTx2BsLRc","title":"MHW: Iceborne OST [Disc 2] - Nay! The Honor is All Ours","thumbnailUrl":"https://i.ytimg.com/vi/A0xTx2BsLRc/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYPyBMKH8wDw==&rs=AOn4CLC62aXaHIkQ-3d0fAIoZCGcEJ_f6g","duration":297},{"youtubeId":"6N9SS6L0TDU","title":"Avatar: The Last Airbender Theme | EPIC VERSION","thumbnailUrl":"https://i.ytimg.com/vi/6N9SS6L0TDU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBM4fvBaYeTR7YjQujRkroADtBrIg","duration":199},{"youtubeId":"trjssvsw6Lw","title":"Fire Emblem - Tempest of Seasons  (Rain/Thunder/Inferno/Embers)","thumbnailUrl":"https://i.ytimg.com/vi/trjssvsw6Lw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA9m19t3XXveO0ERij2CyiydjXAtw","duration":578},{"youtubeId":"IbBE3WcY6y0","title":"Fire Emblem - Melody of Clarity (Inferno/Embers)","thumbnailUrl":"https://i.ytimg.com/vi/IbBE3WcY6y0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDMbo9ghOeoervERKYxvdAc-NrLcg","duration":551},{"youtubeId":"JtpNjJ_EGm4","title":"Fire Emblem - The Long Road (Rain/Thunder/Inferno/Embers)","thumbnailUrl":"https://i.ytimg.com/vi/JtpNjJ_EGm4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAvDAlsAhSKp2XpLs2KTLxm0lEpZg","duration":637},{"youtubeId":"vJ840kU38pE","title":"The Dragon | God of War OST","thumbnailUrl":"https://i.ytimg.com/vi/vJ840kU38pE/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYRyBgKGUwDw==&rs=AOn4CLAUgZ91lEv-stD6KJK6Ytv0ZbZWeQ","duration":257},{"youtubeId":"CtD132lmQGc","title":"\\"The Fight With Death\\" by Heitor Pereira from PUSS IN BOOTS   THE LAST WISH","thumbnailUrl":"https://i.ytimg.com/vi/CtD132lmQGc/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYciBUKDQwDw==&rs=AOn4CLDWqM3SMbWkDytgg-3fpw5cPVFohw","duration":144},{"youtubeId":"8aQSl-s_jqM","title":"Gurren Lagann OST Disc 2 - 06 - BafBaf! Burning Like that... Likable? / BafBaf! Sonna ni Moeru ...","thumbnailUrl":"https://i.ytimg.com/vi/8aQSl-s_jqM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAowtVxeEd-ekstuRcY6Zfn9a4m9g","duration":337},{"youtubeId":"ngMk0oAiyZI","title":"Demon Slayer S2: Inosuke Theme V3 | EPIC VERSION (Inosuke, Tanjiro, & Zenitsu vs Daki)","thumbnailUrl":"https://i.ytimg.com/vi/ngMk0oAiyZI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCSsNaY6tH6Z6G1bX3hETdqdc6lyg","duration":266},{"youtubeId":"xe5E6PjR9sg","title":"Demon Slayer S2: Zenitsu Theme V3 | EPIC VERSION (Zenitsu vs Daki)","thumbnailUrl":"https://i.ytimg.com/vi/xe5E6PjR9sg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB-TGeQYj41dkIRc5e66RYnMxXo_A","duration":320},{"youtubeId":"s04a9Kif1WM","title":"Demon Slayer S3: Swordsmith Village Arc Trailer Music | EPIC VERSION (Muichiro Theme Extended)","thumbnailUrl":"https://i.ytimg.com/vi/s04a9Kif1WM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBT3M8RlIPvkZgCd_MfN96GNiqitQ","duration":249},{"youtubeId":"4cPvtOfkkIM","title":"Attack on Titan Theme (ətˈæk 0N tάɪtn x Footsteps of Doom) | EPIC FINALE VERSION","thumbnailUrl":"https://i.ytimg.com/vi/4cPvtOfkkIM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBSlcZweWcb01ba0L0uhemv8nZEgg","duration":249}]},{"playlistId":"PLV8C9t518pCInIaeVhXxFiHdcVctaDDqB","title":"D&D - Theros - Boss Battle","musics":[{"youtubeId":"UjBTtNU27Ec","title":"09 Gods & Glory (Hollow Knight: Gods & Nightmares)","thumbnailUrl":"https://i.ytimg.com/vi/UjBTtNU27Ec/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBREHT_TuUop4_oB8C523SIDpCvdQ","duration":173},{"youtubeId":"Ftd5d8_8Bgg","title":"RWBY - Red Like Roses Part II Instrumental - complete edit","thumbnailUrl":"https://i.ytimg.com/vi/Ftd5d8_8Bgg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBZ59RYOGJxp3WIIYG_UGwhy0LRsA","duration":261},{"youtubeId":"ut_RjDGUJoY","title":"14 Furious Gods (Hollow Knight: Gods & Nightmares)","thumbnailUrl":"https://i.ytimg.com/vi/ut_RjDGUJoY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDv-uSvuo_p82kE-jPi_f1ECSc4dg","duration":68},{"youtubeId":"TgxPkXjcwSA","title":"GODLIKE | 1 HOUR Of Epic Dramatic Action Music","thumbnailUrl":"https://i.ytimg.com/vi/TgxPkXjcwSA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBc6ofG--nbXmCKKYSpe6bOkiDG6w","duration":2981},{"youtubeId":"GiXS8qqKnJs","title":"魔女と呼ばれる者","thumbnailUrl":"https://i.ytimg.com/vi/GiXS8qqKnJs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB4bmaYvvtxP3obx272qPTvPYRpaQ","duration":249},{"youtubeId":"o5_nMrARi-k","title":"10 Daughter of Hallownest (Hollow Knight: Gods & Nightmares)","thumbnailUrl":"https://i.ytimg.com/vi/o5_nMrARi-k/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYfyAiKEswDw==&rs=AOn4CLBpwPLM-m5HVRlOaV4tSX5MNIDoWg","duration":177},{"youtubeId":"Mm0YmRHdyz4","title":"No Helping It! (Extended Version) - Gurren Lagann OST","thumbnailUrl":"https://i.ytimg.com/vi/Mm0YmRHdyz4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCAt1mNukOoYEsHFSf0_aEQ4PwGVQ","duration":108},{"youtubeId":"AkTche1J7O0","title":"Gurren Lagann OST Disc 2 - 21 - The Blue Monday E\'r\'ectrical Parade","thumbnailUrl":"https://i.ytimg.com/vi/AkTche1J7O0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAzoOigFW5m_q-CV30Y-D4Or26p9w","duration":290},{"youtubeId":"A_ndaumP7zE","title":"Spinning, Spinning, Spinning, Spiii!? - Gurren Lagann OST","thumbnailUrl":"https://i.ytimg.com/vi/A_ndaumP7zE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCaFWuY4q1dN3fLiAep3bsBCyV3sg","duration":177},{"youtubeId":"tnU7zf9YVoA","title":"Darkest Dungeon Soundtrack: Return to the Warrens (Extended Version)","thumbnailUrl":"https://i.ytimg.com/vi/tnU7zf9YVoA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDm8gpnglurH23F-rpz6y3rmcm5eQ","duration":780},{"youtubeId":"ja1texxSyj8","title":"Darkest Dungeon Soundtrack: The Cove Battle (Extended Version)","thumbnailUrl":"https://i.ytimg.com/vi/ja1texxSyj8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDcXACucgxLiMIWpKYh2bKbWoPx9A","duration":795},{"youtubeId":"ja1texxSyj8","title":"Darkest Dungeon Soundtrack: The Cove Battle (Extended Version)","thumbnailUrl":"https://i.ytimg.com/vi/ja1texxSyj8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDcXACucgxLiMIWpKYh2bKbWoPx9A","duration":795},{"youtubeId":"MlG0XKBeD2k","title":"Darkest Dungeon Soundtrack: Mournweald Encounter (Extended Version)","thumbnailUrl":"https://i.ytimg.com/vi/MlG0XKBeD2k/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAco2pohwkZcgJIfs1XNDNBu-Iphw","duration":822},{"youtubeId":"4EIAcIjnnQM","title":"Darkest Dungeon Soundtrack: The Final Combat (Extended Version)","thumbnailUrl":"https://i.ytimg.com/vi/4EIAcIjnnQM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDHUc7f41V16GYW7cT4-kbQzBnNuA","duration":882},{"youtubeId":"45YbWPmTMdA","title":"Darkest Dungeon OST - Bloodletting (hallway version)","thumbnailUrl":"https://i.ytimg.com/vi/45YbWPmTMdA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCAIxy3KUnjJY1TtKv1N7LWMCdaBw","duration":831},{"youtubeId":"Nf4O9iS3NeM","title":"Darkest Dungeon Soundtrack: Battle in the Ruins (Extended Version)","thumbnailUrl":"https://i.ytimg.com/vi/Nf4O9iS3NeM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCc1aWeZvclX5F_5fT26zoz5e1hOg","duration":779},{"youtubeId":"NXnxsETdSJ8","title":"Fire Emblem Heroes Music; Enemy Phase","thumbnailUrl":"https://i.ytimg.com/vi/NXnxsETdSJ8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD072Ov3LMs06jw4hSNXHx_0azZ6g","duration":81},{"youtubeId":"NYvX-NmWwOs","title":"Fire Emblem Heroes Music; Player Phase","thumbnailUrl":"https://i.ytimg.com/vi/NYvX-NmWwOs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDasWROrbDuW4tiM2Ua_ZBoIyiLVA","duration":92},{"youtubeId":"lAGm9MTyRJ8","title":"Combat Music Megamix - The Witcher 3: Wild Hunt","thumbnailUrl":"https://i.ytimg.com/vi/lAGm9MTyRJ8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCThMfOzW_ILm2kxBehGhxFgGFgjQ","duration":3502},{"youtubeId":"pHUHdprKIwo","title":"The witcher 3: Wild Hunt - Cloak and Dagger Extended","thumbnailUrl":"https://i.ytimg.com/vi/pHUHdprKIwo/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYTyBeKGUwDw==&rs=AOn4CLCcN0YbZJRLET6UIjliyxz_aiQtYA","duration":507},{"youtubeId":"cVukkhUI-xM","title":"Hades - God of the Dead","thumbnailUrl":"https://i.ytimg.com/vi/cVukkhUI-xM/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYfyAnKEQwDw==&rs=AOn4CLAwaX14JairIFor7x05wJRpF62g6Q","duration":542},{"youtubeId":"vqKoFKVxTYM","title":"Hades - The Painful Way","thumbnailUrl":"https://i.ytimg.com/vi/vqKoFKVxTYM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAvewaFhJHpoErzRINpU3LgCvhFmw","duration":414},{"youtubeId":"leHkDJRKGY8","title":"Hades - Wretched Shades","thumbnailUrl":"https://i.ytimg.com/vi/leHkDJRKGY8/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYLCBlKFQwDw==&rs=AOn4CLBZ82CvKdnuEkw-pdc7_sGBZT8gTg","duration":176},{"youtubeId":"oksESAMg7WM","title":"Hades - No Escape","thumbnailUrl":"https://i.ytimg.com/vi/oksESAMg7WM/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYEiBlKFYwDw==&rs=AOn4CLDCyS4oIMj6tC3LwV39KJPt61W-Wg","duration":146},{"youtubeId":"OZfe_M8WoQQ","title":"Demon Slayer: Mugen Train - Rengoku Theme (Epic Suite) 【Intense Symphonic Metal Cover】","thumbnailUrl":"https://i.ytimg.com/vi/OZfe_M8WoQQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD0cUtySOBULq25g46JcqwfZfFmsA","duration":338},{"youtubeId":"IopCxEnVgYg","title":"Combat Mosh","thumbnailUrl":"https://i.ytimg.com/vi/IopCxEnVgYg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBs3meQjIgeHVn2UyZLxHfUpaPcIw","duration":280},{"youtubeId":"2IkI8YXIwzM","title":"Gloryhammer - Beneath Cowdenbeath","thumbnailUrl":"https://i.ytimg.com/vi/2IkI8YXIwzM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB-kisFfA57_JAfMce0Ye6kStN_zg","duration":143},{"youtubeId":"wrkqBg4-OME","title":"Beorn -  Riders of the Sky (instrumental)","thumbnailUrl":"https://i.ytimg.com/vi/wrkqBg4-OME/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBeKX-cWJpcJBVpYtzzQw-3UsUy6Q","duration":291},{"youtubeId":"_2IFWIOjOnA","title":"Ascension - Orb Of The Moons","thumbnailUrl":"https://i.ytimg.com/vi/_2IFWIOjOnA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCyoNZi5OB9zxDeFAXFyj1QBgRylw","duration":288},{"youtubeId":"HT2WV0cGi_Y","title":"Warmen - Warcry of Salieri","thumbnailUrl":"https://i.ytimg.com/vi/HT2WV0cGi_Y/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBSCONNyuRTSARcZiyi-KJBNBuE4w","duration":357},{"youtubeId":"LKONQ4UZte0","title":"Final Fantasy VI OST - Battle Theme","thumbnailUrl":"https://i.ytimg.com/vi/LKONQ4UZte0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAUlQeuUWJ3kX74L7HJd_72wOpcPA","duration":120},{"youtubeId":"bMOa3rjtHkE","title":"Final Fantasy III - The Decisive Battle (SNES)","thumbnailUrl":"https://i.ytimg.com/vi/bMOa3rjtHkE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAtPh_sKdnNsg_pMuUJCFVnHzyFCA","duration":117},{"youtubeId":"E3RLz4umNo0","title":"Rival Battle - Pokémon Gold/Silver/Crystal Soundtrack","thumbnailUrl":"https://i.ytimg.com/vi/E3RLz4umNo0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDHf9Kml7boEiNMX0Tqn4iB_ID0-A","duration":128},{"youtubeId":"IEsdTqfoOc4","title":"The Adventure Zone Wonderland Megamix","thumbnailUrl":"https://i.ytimg.com/vi/IEsdTqfoOc4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAX6EhNo7d8fv_Wm4hoKs3ELrypow","duration":402},{"youtubeId":"MpHkH4ayBYc","title":"No Healing in Wonderland [TAZ Medley]","thumbnailUrl":"https://i.ytimg.com/vi/MpHkH4ayBYc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAYe_nbkM0IuMqm00nho6XJhLh7qQ","duration":228},{"youtubeId":"XTHYdavCy5w","title":"Yu-Gi-Oh! The Unreleased Scores- Egyptian God Monsters","thumbnailUrl":"https://i.ytimg.com/vi/XTHYdavCy5w/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD6z2gdlKzGZajlWUis5earRTc56Q","duration":123},{"youtubeId":"G22gUee8ijU","title":"\'Thor: Ragnarok\' Main Theme by Mark Mothersbaugh","thumbnailUrl":"https://i.ytimg.com/vi/G22gUee8ijU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAWtESYyt9DIMrH4t9G8pxZWeL0dg","duration":195},{"youtubeId":"1OfYcfmmawE","title":"Undertale - Finale 【Intense Symphonic Metal Cover】","thumbnailUrl":"https://i.ytimg.com/vi/1OfYcfmmawE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAnQg1MHv9MBqojsQbXs33aRjrzgA","duration":332},{"youtubeId":"mWNKFBeYVxw","title":"DELTARUNE: The World Revolving || Metal Cover by RichaadEB","thumbnailUrl":"https://i.ytimg.com/vi/mWNKFBeYVxw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD-IJTFaHwHbJz9Iyn-7mYA9N3gdA","duration":219},{"youtubeId":"m5Akp2MWCD0","title":"Shovel Knight: Specter of Torment - HIDDEN BY NIGHT -- Metal Cover by J-Trigger","thumbnailUrl":"https://i.ytimg.com/vi/m5Akp2MWCD0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCdtqhjwRCVdpwIeKAfIo0nz4e9dA","duration":201},{"youtubeId":"i_exNaxGFqE","title":"The Price of Doing Business [Iron Whale] (Shovel Knight: Specter of Torment) - GaMetal Remix","thumbnailUrl":"https://i.ytimg.com/vi/i_exNaxGFqE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLASDIroy-qK5JkSJvHPiVz-GNoc1A","duration":196},{"youtubeId":"IN13LHwt7Gk","title":"Chrono Trigger - Boss Battle 2 - Symphonic Metal Cover","thumbnailUrl":"https://i.ytimg.com/vi/IN13LHwt7Gk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBbT8Jnumcd1gQi8F_45SXtFYE_ig","duration":156},{"youtubeId":"gt7PkxBF7Fc","title":"Chrono Trigger BOSS THEME - METAL Cover by ToxicxEternity feat. FamilyJules","thumbnailUrl":"https://i.ytimg.com/vi/gt7PkxBF7Fc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD6dhbySR5D7sIXnoIYyGw_F3ktXQ","duration":235},{"youtubeId":"fKEKMUSxk_4","title":"Final Fantasy VI - Dancing Mad 【Intense Symphonic Metal Cover】","thumbnailUrl":"https://i.ytimg.com/vi/fKEKMUSxk_4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAw1jkWZ83Rnn46eGhnIIrDiylnhQ","duration":1060},{"youtubeId":"2uzgv3Oz2gw","title":"But The Earth Was Determined. (Battle Against a True Hero Remix)","thumbnailUrl":"https://i.ytimg.com/vi/2uzgv3Oz2gw/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLDWuWSgRnA0gVwafV6OAYbo_VIPsg","duration":264},{"youtubeId":"bMfvZmhqW0A","title":"God Shattering Star","thumbnailUrl":"https://i.ytimg.com/vi/bMfvZmhqW0A/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBgKFcwDw==&rs=AOn4CLAqvydFowOBe_ubPUuzyGdN40YlQw","duration":500},{"youtubeId":"gP50CftITkE","title":"Chill Touch - Keen-Eyed Huntress - Pantheon","thumbnailUrl":"https://i.ytimg.com/vi/gP50CftITkE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBE0CZG6JyKFYm2FK2f9QDV2lIwRg","duration":262},{"youtubeId":"VAxI4YAULOk","title":"Chill Touch - Victory is Eternal - Pantheon","thumbnailUrl":"https://i.ytimg.com/vi/VAxI4YAULOk/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYSCBFKGUwDw==&rs=AOn4CLC3XuT21EWilCgEVAZhkpvuR3tuPg","duration":246},{"youtubeId":"_3TQa3M5Kwc","title":"Chill Touch - Bleak-Hearted One - Pantheon","thumbnailUrl":"https://i.ytimg.com/vi/_3TQa3M5Kwc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD2D_IdLOw3t5L0LkW2ROyGH8oG7w","duration":448},{"youtubeId":"tKJM1Exp49s","title":"Chill Touch - Ferryman - Pantheon","thumbnailUrl":"https://i.ytimg.com/vi/tKJM1Exp49s/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCZtDgl_2qUUTXX64Nr4-SVyLelRg","duration":591},{"youtubeId":"wxLmav6K6p0","title":"Chill Touch - Son of Suns, King of Gods - Pantheon","thumbnailUrl":"https://i.ytimg.com/vi/wxLmav6K6p0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCSXpXcPJao7Ka8IOayBfL7LXtdqQ","duration":442},{"youtubeId":"j2wUjcWtYL8","title":"Chill Touch - Lord of Carnage - Pantheon","thumbnailUrl":"https://i.ytimg.com/vi/j2wUjcWtYL8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBIIy_M0amHLirim5ntvBCd_fRt3g","duration":395},{"youtubeId":"jAm3f6HDmN4","title":"Chill Touch - Goddess of the Briny Deep - Pantheon","thumbnailUrl":"https://i.ytimg.com/vi/jAm3f6HDmN4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLALN9kLcZ7l6WbASnsaFOIY7-UWMg","duration":213},{"youtubeId":"b_oEDGONSc4","title":"[Official] Celeste Original Soundtrack - 16 - Confronting Myself","thumbnailUrl":"https://i.ytimg.com/vi/b_oEDGONSc4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCSJcONIJf_IiAoap3hlxEt3IGog","duration":250},{"youtubeId":"Cx_CUbCesR8","title":"[Top 100 RPG Battle Themes]#17 Chrono Trigger","thumbnailUrl":"https://i.ytimg.com/vi/Cx_CUbCesR8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBD5zUKpqnqzK39Ju4jKrWJtb6G5A","duration":212},{"youtubeId":"0ly8Q3MieZk","title":"[Top 100 RPG Battle]#45 Fire Emblem: Mystery of the Emblem","thumbnailUrl":"https://i.ytimg.com/vi/0ly8Q3MieZk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA_JdQi-qi6nyV5gAI3KWCkNcLGqQ","duration":75},{"youtubeId":"TQUsnto_3pw","title":"Shingeki no Kyojin - Attack on Titan Fight Theme","thumbnailUrl":"https://i.ytimg.com/vi/TQUsnto_3pw/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYZSBkKFkwDw==&rs=AOn4CLDwQcxLDfelFqzWnoEmmRZJHvpjUQ","duration":261},{"youtubeId":"BdgH0gFGVqs","title":"Attack on Titan Theme (ətˈæk 0N tάɪtn WMId) | EPIC ORCHESTRAL VERSION","thumbnailUrl":"https://i.ytimg.com/vi/BdgH0gFGVqs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCfoN82DeZqmy-WvNL6b2z8WgS_Aw","duration":303},{"youtubeId":"QV5ZBuNJMx0","title":"Attack On Titan - Vogel im Käfig Re-Mastered (Epic sound quality)","thumbnailUrl":"https://i.ytimg.com/vi/QV5ZBuNJMx0/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYciBQKDUwDw==&rs=AOn4CLBaYGE06kmcBiZotd3_zlldNRZ_xQ","duration":243},{"youtubeId":"ZAsB1X14tHY","title":"Shingekin no Kyojin OST CD1   04  立body機motion","thumbnailUrl":"https://i.ytimg.com/vi/ZAsB1X14tHY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDlsrlJXTAMgVAuNehwcCgyOYLEoA","duration":343}]},{"playlistId":"PLV8C9t518pCJ7Ymh3qHv5iqha9F-3n2J7","title":"D&D - Victory","musics":[{"youtubeId":"PraIkvq2n8s","title":"Bravely Default - Flying Fairy OST - 10 Victory\'s Delight","thumbnailUrl":"https://i.ytimg.com/vi/PraIkvq2n8s/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBubvbBFaAK51gKPVW5PlGHCoFyzg","duration":38},{"youtubeId":"sneCd-SN_T4","title":"Soldier, Poet, King - Cullen Vance","thumbnailUrl":"https://i.ytimg.com/vi/sneCd-SN_T4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLALdND9argWXYl1Aclsfpn_tcIbpg","duration":157},{"youtubeId":"v2RC7FlaH9U","title":"The Adventure Zone: Lucretia - Griffin McElroy","thumbnailUrl":"https://i.ytimg.com/vi/v2RC7FlaH9U/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AeYCgALoAooCDAgAEAEYciBYKDQwDw==&rs=AOn4CLC5lYcICIPvrvs_wGQmKs_rtKpgzQ","duration":173},{"youtubeId":"9uCwsMWMny0","title":"[Karaoke] \\"Zankoku na Tenshi no TE-ZE\\" by Takahashi Youko","thumbnailUrl":"https://i.ytimg.com/vi/9uCwsMWMny0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAUSH5e5DW9grnU_etOUsen_wvjeQ","duration":249},{"youtubeId":"mnfNWe-HHsI","title":"Hyper Potions - Time Trials (Sonic Mania Pre-Order Trailer Song)","thumbnailUrl":"https://i.ytimg.com/vi/mnfNWe-HHsI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBKNmJpYyTTnUeJHuIMOKW-AtcHCw","duration":203},{"youtubeId":"OEboG4LnUBI","title":"Hyper Potions - Friends (Sonic Mania Opening Animation Song)","thumbnailUrl":"https://i.ytimg.com/vi/OEboG4LnUBI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDFrsuId8h-hiGFZs5-fH2J8bPiRQ","duration":221},{"youtubeId":"tA-frKY2zJA","title":"Nichijou Songs - Hyadain no Kakakata☆Kataomoi C (off vocal)","thumbnailUrl":"https://i.ytimg.com/vi/tA-frKY2zJA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD43FZEFteSdcR8CSDKLU54Rb8Ukg","duration":234},{"youtubeId":"ghk8O1yiY0I","title":"Overwatch Soundtracks - Victory Theme","thumbnailUrl":"https://i.ytimg.com/vi/ghk8O1yiY0I/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCXse3vEmbmSf3ad3irwCktVHlYqw","duration":115},{"youtubeId":"HYmn5BQIxdQ","title":"Hopes and Dreams \\"Orchestrated\\"","thumbnailUrl":"https://i.ytimg.com/vi/HYmn5BQIxdQ/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYfyAzKGIwDw==&rs=AOn4CLDLhwJDsAajAZwpNNOcK81WYKydXg","duration":453},{"youtubeId":"9NmE8h5ANsM","title":"Final Fantasy series victory theme - Super Smash Bros. Ultimate","thumbnailUrl":"https://i.ytimg.com/vi/9NmE8h5ANsM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB_cfCWMa88MaMiFV4NPwheUTincw","duration":28},{"youtubeId":"9Hvk33iZ_9k","title":"Hopes and Dreams and a cup of latte","thumbnailUrl":"https://i.ytimg.com/vi/9Hvk33iZ_9k/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD9TLGxXKELeIDuMe-kVL-Tx3mUjA","duration":270},{"youtubeId":"hN0k8qmgyKQ","title":"KANA-BOON - Silhouette (Filtered Instrumental)","thumbnailUrl":"https://i.ytimg.com/vi/hN0k8qmgyKQ/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYZCBkKGQwDw==&rs=AOn4CLBYkyL3fJBVYstQs0UqfU6IQwzPGA","duration":242},{"youtubeId":"CcVDlTld0Ks","title":"Offenbach - Can-Can Music / Galop Infernal 【Intense Symphonic Metal Cover】","thumbnailUrl":"https://i.ytimg.com/vi/CcVDlTld0Ks/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBXd3RerPjAchgvltMkZrIK-MtLKA","duration":368},{"youtubeId":"e98NxwsaZpQ","title":"ONE PIECE OP - We Are! | EPIC VERSION (Drums of Liberation)","thumbnailUrl":"https://i.ytimg.com/vi/e98NxwsaZpQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC3awN_8BJ-pTKkKRQnYaEYvdRQ5g","duration":314},{"youtubeId":"D60B_RSAp3Q","title":"One Piece - We Go (Full Instrumental)","thumbnailUrl":"https://i.ytimg.com/vi/D60B_RSAp3Q/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCF4j0ZDUa9mjpr3tUeUMkI6r6BSA","duration":248},{"youtubeId":"zvakA3ZAiAU","title":"One Piece - Believe - Instrumental","thumbnailUrl":"https://i.ytimg.com/vi/zvakA3ZAiAU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAHajP6jKvFcbqqZtZBdlec7v4XXQ","duration":231},{"youtubeId":"h0Lfb2CKS0U","title":"One Piece We Are! Instrumental","thumbnailUrl":"https://i.ytimg.com/vi/h0Lfb2CKS0U/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC1kgsmvoD1zJ0kso6v2_2DRw78bw","duration":239},{"youtubeId":"WglgwAwaW1g","title":"A Crap Guide to D&D Full Theme by TheMusicReborn and JoCat","thumbnailUrl":"https://i.ytimg.com/vi/WglgwAwaW1g/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLADkwKTW11-iZSBvuoFvqN_OdT6yQ","duration":171}]}]')},function(t,e){t.exports=function(t){!function e(n){t(Math.min(window.performance.now()-n,1e3)),window.requestAnimationFrame(e.bind(this,window.performance.now()))}(window.performance.now())}},function(t,e,n){"use strict";var r=n(19),i=n(27),s=n(31),o=n(32)||0;function a(){return i(o)}t.exports=a,t.exports.generate=a,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return o=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=s},function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},function(t,e,n){"use strict";var r,i,s=n(28);n(19);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===i?r++:(r=0,i=n),e+=s(7),e+=s(t),r>0&&(e+=s(r)),e+=s(n)}},function(t,e,n){"use strict";var r=n(19),i=n(29),s=n(30);t.exports=function(t){for(var e,n=0,o="";!e;)o+=s(i,r.get(),1),e=t<Math.pow(16,n+1),n++;return o}},function(t,e,n){"use strict";var r,i="object"==typeof window&&(window.crypto||window.msCrypto);r=i&&i.getRandomValues?function(t){return i.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,i=-~(1.6*r*n/e.length),s="";;)for(var o=t(i),a=i;a--;)if((s+=e[o[a]&r]||"").length===+n)return s}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},function(t,e,n){"use strict";t.exports=0},function(t,e,n){var r=n(9),i=n(34);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);t.exports=i.locals||{}},function(t,e,n){var r=n(10),i=n(11),s=n(12),o=n(13),a=n(14),u=n(15),l=n(16),c=n(17),h=n(18);e=r(!1);var d=i(s),A=i(o),f=i(a),m=i(u),p=i(l),g=i(c),y=i(h);e.push([t.i,'* {\n  margin: 0px;\n  padding: 0px;\n  cursor: default;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nbody {\n  background-color: #111;\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@font-face {\n  font-weight: 400;\n  font-family: "comfortaa";\n  src: url('+d+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+A+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+f+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+m+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+p+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+g+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+y+') format("truetype");\n}\n.Mount {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  position: absolute;\n  font-family: Roboto, Helvetica, sans-serif;\n}\n.Embed {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n}\n.Embed #youtuber {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  width: 300px;\n  height: 200px;\n  position: fixed;\n  margin: auto;\n  z-index: 10000000;\n  position: absolute;\n  display: none;\n}\n.UploadZone {\n  top: 1em;\n  left: 1em;\n  right: 1em;\n  bottom: 1em;\n  z-index: 9999;\n  position: absolute;\n  border-width: 5px;\n  border-style: dashed;\n  border-color: white;\n  pointer-events: none;\n  display: none;\n}\n.UploadZone[isDragAndDropping] {\n  display: block;\n}\n.ArtSelectionScreen {\n  max-width: 320px;\n  height: 100%;\n  overflow-y: scroll;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.ArtSelectionScreen .SelectedArt {\n  margin-bottom: 1em;\n}\n.ArtSelectionScreen .SelectedArt .Title {\n  height: 1.5em;\n  padding: 0em 1em;\n  line-height: 1.5em;\n  display: block;\n  width: 100%;\n  border: none;\n  font: inherit;\n  font-weight: 600;\n  font-stretch: condensed;\n  background-color: white;\n}\n.ArtSelectionScreen .SelectedArt .Image {\n  width: 100%;\n  height: 10em;\n  border-radius: 4px;\n  background-size: cover;\n  background-position: center;\n}\n.ArtSelectionScreen .SelectedArt .DeleteArtButton {\n  background-color: white;\n  border-radius: 2px;\n  padding: 0.1em;\n}\n.ArtSelectionScreen .Search {\n  padding: 0em 1em;\n}\n.ArtSelectionScreen .Search input {\n  width: 100%;\n  font: inherit;\n  font-size: 1.5em;\n}\n.ArtSelectionScreen .SelectableArts {\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n  display: grid;\n  row-gap: 0.61804697em;\n  column-gap: 0.61804697em;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-rows: 3em;\n}\n.ArtSelectionScreen .SelectableArts .SelectableArt {\n  width: 1fr;\n  height: 3em;\n  border-radius: 4px;\n  background-size: cover;\n  background-position: center;\n  background-color: black;\n}\nvideo {\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  width: 100%;\n  position: fixed;\n  z-index: 99999999999;\n  mix-blend-mode: screen;\n}\n',""]),t.exports=e},function(t,e,n){var r=n(9),i=n(36);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);t.exports=i.locals||{}},function(t,e,n){var r=n(10),i=n(11),s=n(12),o=n(13),a=n(14),u=n(15),l=n(16),c=n(17),h=n(18),d=n(37),A=n(38),f=n(39);e=r(!1);var m=i(s),p=i(o),g=i(a),y=i(u),w=i(l),E=i(c),b=i(h),v=i(d),I=i(A),C=i(f);e.push([t.i,'* {\n  margin: 0px;\n  padding: 0px;\n  cursor: default;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nbody {\n  background-color: #111;\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@font-face {\n  font-weight: 400;\n  font-family: "comfortaa";\n  src: url('+m+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+p+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+g+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+y+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+w+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+E+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+b+') format("truetype");\n}\n.SplashScreen {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  z-index: 1000;\n  position: absolute;\n}\n.SplashScreen * {\n  cursor: pointer;\n}\n.SplashScreen .Background {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  filter: blur(0px);\n  transform: scale(1.1);\n  transform-origin: center;\n  background-size: cover;\n  background-position: center;\n  animation-delay: 0.5s;\n  animation-duration: 2s;\n  animation-name: splash;\n  animation-fill-mode: forwards;\n}\n.SplashScreen .Background[random="1"] {\n  background-image: url('+v+');\n}\n.SplashScreen .Background[random="2"] {\n  background-image: url('+I+');\n}\n.SplashScreen .Background[random="3"] {\n  background-image: url('+C+");\n}\n.SplashScreen .Prompt {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  transform-origin: center;\n  transition-property: transform;\n  transition-duration: 0.5s;\n}\n.SplashScreen .Prompt .Text {\n  color: white;\n  text-shadow: 1px 1px 2px black;\n}\n.SplashScreen .Prompt .Icon {\n  position: relative;\n}\n.SplashScreen .Prompt .Icon .shape {\n  z-index: 20;\n  font-size: 6em;\n  position: relative;\n  color: #fc0404;\n}\n.SplashScreen .Prompt .Icon .fill {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  margin: auto;\n  width: 50%;\n  height: 50%;\n  z-index: 10;\n  position: absolute;\n  background-color: white;\n}\n.SplashScreen:hover .Prompt {\n  transform: scale(1.1);\n  transition-duration: 0.1s;\n}\n@keyframes splash {\n  0% {\n    filter: blur(0px);\n    transform: scale(1.1);\n  }\n  100% {\n    filter: blur(2px);\n    transform: scale(1);\n  }\n}\n",""]),t.exports=e},function(t,e,n){t.exports=n.p+"74159e09f22e07ea61db1e2cd2d2b039.jpg"},function(t,e,n){t.exports=n.p+"67bab044aaa1faa00ef3da3c582173b7.jpg"},function(t,e,n){t.exports=n.p+"b7d80958bc037f9449bf51ae25dedda0.jpg"},function(t,e,n){var r=n(9),i=n(41);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);t.exports=i.locals||{}},function(t,e,n){var r=n(10),i=n(11),s=n(12),o=n(13),a=n(14),u=n(15),l=n(16),c=n(17),h=n(18);e=r(!1);var d=i(s),A=i(o),f=i(a),m=i(u),p=i(l),g=i(c),y=i(h);e.push([t.i,'* {\n  margin: 0px;\n  padding: 0px;\n  cursor: default;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nbody {\n  background-color: #111;\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@font-face {\n  font-weight: 400;\n  font-family: "comfortaa";\n  src: url('+d+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+A+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+f+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+m+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+p+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+g+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+y+') format("truetype");\n}\n.PlayScreen {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  z-index: 200;\n  overflow: hidden;\n  position: absolute;\n}\n.PlayScreen .SubmissionForm {\n  display: flex;\n}\n.PlayScreen .SubmissionForm input {\n  height: 2rem;\n  font: inherit;\n  font-size: 12px;\n  display: block;\n}\n.PlayScreen .SubmissionForm input[type=text] {\n  flex: 1;\n}\n.PlayScreen .SubmissionForm input[type=submit] {\n  padding: 0em 1em;\n}\n.PlayScreen .Screenshot {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  z-index: 5;\n  position: absolute;\n  background-size: cover;\n  background-position: center;\n}\n.PlayScreen .Controls {\n  bottom: 0em;\n  z-index: 100;\n  position: fixed;\n  opacity: 0;\n  transition-property: opacity;\n  transition-duration: 0.25s;\n}\n.PlayScreen:hover .Controls {\n  opacity: 1;\n}\n',""]),t.exports=e},function(t,e,n){var r=n(9),i=n(43);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);t.exports=i.locals||{}},function(t,e,n){var r=n(10),i=n(11),s=n(12),o=n(13),a=n(14),u=n(15),l=n(16),c=n(17),h=n(18);e=r(!1);var d=i(s),A=i(o),f=i(a),m=i(u),p=i(l),g=i(c),y=i(h);e.push([t.i,'* {\n  margin: 0px;\n  padding: 0px;\n  cursor: default;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nbody {\n  background-color: #111;\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@font-face {\n  font-weight: 400;\n  font-family: "comfortaa";\n  src: url('+d+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+A+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+f+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+m+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+p+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+g+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+y+') format("truetype");\n}\n.EditScreen {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  display: flex;\n  overflow: hidden;\n  position: absolute;\n}\n.EditScreen .PlayingPanel {\n  width: 100%;\n  height: 100%;\n  max-width: 320px;\n  background-color: #444;\n  margin-right: 8px;\n  display: flex;\n  flex-direction: column;\n}\n.EditScreen .PlayingPanel .PlayBox {\n  width: 100%;\n  max-height: 100%;\n  position: relative;\n  padding-bottom: 66%;\n  background-color: green;\n}\n.EditScreen .PlayingPanel .PlayBox .YoutubeScreenshot {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  z-index: 5;\n  position: absolute;\n}\n.EditScreen .PlayingPanel .PlayBox .Controls {\n  z-index: 10;\n  bottom: 0em;\n  position: absolute;\n}\n.EditScreen .PlayingPanel .Queue {\n  flex: 1;\n  overflow-y: scroll;\n}\n.EditScreen .PlayingPanel .Queue .QueuedItem {\n  display: flex;\n  align-items: center;\n}\n.EditScreen .PlayingPanel .Queue .QueuedItem[isOnDeck] {\n  background-color: #777;\n}\n.EditScreen .PlayingPanel .Queue .QueuedItem:hover {\n  background-color: #888;\n}\n.EditScreen .PlayingPanel .Queue .QueuedItem .YoutubeScreenshot {\n  width: 48px;\n  height: 32px;\n  margin-right: 8px;\n}\n.EditScreen .PlayingPanel .Queue .QueuedItem .Text {\n  flex: 1;\n  font-size: 0.7em;\n  text-overflow: ellipsis;\n}\n.EditScreen .SearchPanel {\n  width: 100%;\n  height: 100%;\n  max-width: 320px;\n  background-color: #444;\n  display: flex;\n  flex-direction: column;\n}\n.EditScreen .SearchPanel .SubmissionForm {\n  display: flex;\n}\n.EditScreen .SearchPanel .SubmissionForm input {\n  height: 2rem;\n  font: inherit;\n  font-size: 12px;\n  display: block;\n}\n.EditScreen .SearchPanel .SubmissionForm input[type=text] {\n  flex: 1;\n}\n.EditScreen .SearchPanel .SubmissionForm input[type=submit] {\n  padding: 0em 1em;\n}\n.EditScreen .SearchPanel .Playlists {\n  flex: 1;\n  overflow-y: scroll;\n}\n.EditScreen .SearchPanel .Playlists .Playlist .PlaylistName {\n  display: block;\n  color: inherit;\n  font-weight: bold;\n}\n.EditScreen .SearchPanel .Playlists .Playlist .Musics .Music {\n  display: flex;\n  align-items: center;\n}\n.EditScreen .SearchPanel .Playlists .Playlist .Musics .Music:hover {\n  background-color: #888;\n}\n.EditScreen .SearchPanel .Playlists .Playlist .Musics .Music .YoutubeScreenshot {\n  width: 48px;\n  height: 32px;\n  margin-right: 8px;\n}\n.EditScreen .SearchPanel .Playlists .Playlist .Musics .Music .Text {\n  flex: 1;\n  font-size: 0.7em;\n  text-overflow: ellipsis;\n}\n.YoutubeScreenshot {\n  background-size: cover;\n  background-position: center;\n}\n',""]),t.exports=e},function(t,e,n){var r=n(9),i=n(45);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);t.exports=i.locals||{}},function(t,e,n){var r=n(10),i=n(11),s=n(12),o=n(13),a=n(14),u=n(15),l=n(16),c=n(17),h=n(18);e=r(!1);var d=i(s),A=i(o),f=i(a),m=i(u),p=i(l),g=i(c),y=i(h);e.push([t.i,'* {\n  margin: 0px;\n  padding: 0px;\n  cursor: default;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nbody {\n  background-color: #111;\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@font-face {\n  font-weight: 400;\n  font-family: "comfortaa";\n  src: url('+d+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+A+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+f+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+m+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+p+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+g+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+y+') format("truetype");\n}\n.Controls {\n  width: 100%;\n  height: 48px;\n  position: relative;\n}\n.Controls .Timeline {\n  left: 12px;\n  right: 12px;\n  height: 16px;\n  bottom: 40px;\n  position: absolute;\n  cursor: pointer;\n}\n.Controls .Timeline * {\n  cursor: pointer;\n}\n.Controls .Timeline .CurrentTime,\n.Controls .Timeline .HoveredTime,\n.Controls .Timeline .TotalTime {\n  top: 50%;\n  height: 3px;\n  margin-top: -1.5px;\n  position: absolute;\n  transition-duration: 0.1s;\n  transition-property: height, margin-top;\n  width: 100%;\n}\n.Controls .Timeline:hover .CurrentTime,\n.Controls .Timeline:hover .HoveredTime,\n.Controls .Timeline:hover .TotalTime {\n  height: 5px;\n  margin-top: -2.5px;\n}\n.Controls .Timeline:hover .CurrentTime .Dot {\n  opacity: 1;\n}\n.Controls .Timeline:hover .HoveredTime {\n  opacity: 1;\n}\n.Controls .Timeline .TotalTime {\n  z-index: 10;\n  background-color: rgba(51, 51, 51, 0.5);\n}\n.Controls .Timeline .HoveredTime {\n  width: 50%;\n  z-index: 20;\n  opacity: 0;\n  transition-duration: 0.1s;\n  transition-property: opacity;\n  background-color: rgba(204, 204, 204, 0.5);\n}\n.Controls .Timeline .HoveredTime .Timestamp {\n  top: -3em;\n  width: 8em;\n  right: -4em;\n  line-height: 1em;\n  font-size: 12px;\n  position: absolute;\n  color: white;\n  text-align: center;\n  text-shadow: black 3px 0 10px;\n  pointer-events: none;\n}\n.Controls .Timeline .CurrentTime {\n  width: 0%;\n  z-index: 30;\n  background-color: #fc0404;\n}\n.Controls .Timeline .CurrentTime .Dot {\n  top: 50%;\n  width: 12px;\n  height: 12px;\n  right: -6px;\n  margin-top: -6px;\n  margin-left: -6px;\n  position: absolute;\n  border-radius: 100%;\n  background-color: #fc0404;\n  opacity: 0;\n  transition-duration: 0.1s;\n  transition-property: opacity;\n}\n.Controls .Gradient {\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  height: 3em;\n  position: absolute;\n  pointer-events: none;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, transparent 100%);\n}\n.Controls .Panel {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  display: flex;\n  padding-top: 8px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 8px;\n  position: absolute;\n  align-items: center;\n}\n.Controls .Panel .PlayButton {\n  margin-right: 16px;\n  color: white;\n}\n.Controls .Panel .PlayButton * {\n  cursor: pointer;\n}\n.Controls .Panel .PlayButton span {\n  margin-top: 3px;\n  font-size: 30px;\n}\n.Controls .Panel .VolumeButton {\n  margin-right: 16px;\n  color: white;\n}\n.Controls .Panel .VolumeButton span {\n  margin-top: 3px;\n}\n.Controls .Panel .VolumeBar {\n  height: 32px;\n  width: 48px;\n  margin-right: 16px;\n  position: relative;\n}\n.Controls .Panel .VolumeBar .Bar {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  height: 3px;\n  margin: auto;\n  position: absolute;\n  background-color: white;\n}\n.Controls .Panel .VolumeBar .Dot {\n  top: 50%;\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  margin-left: -6px;\n  position: absolute;\n  border-radius: 100%;\n  background-color: white;\n}\n.Controls .Panel .Time {\n  color: white;\n  font-size: 12px;\n}\n',""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r,i,s,o,a,u={},l=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(t,e){for(var n in e)t[n]=e[n];return t}function d(t){var e=t.parentNode;e&&e.removeChild(t)}function A(t,e,n){var i,s,o,a={};for(o in e)"key"==o?i=e[o]:"ref"==o?s=e[o]:a[o]=e[o];if(arguments.length>2&&(a.children=arguments.length>3?r.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===a[o]&&(a[o]=t.defaultProps[o]);return f(t,a,i,s,null)}function f(t,e,n,r,o){var a={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++s:o};return null==o&&null!=i.vnode&&i.vnode(a),a}function m(t){return t.children}function p(t,e){this.props=t,this.context=e}function g(t,e){if(null==e)return t.__?g(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?g(t):null}function y(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return y(t)}}function w(t){(!t.__d&&(t.__d=!0)&&o.push(t)&&!E.__r++||a!==i.debounceRendering)&&((a=i.debounceRendering)||setTimeout)(E)}function E(){for(var t;E.__r=o.length;)t=o.sort((function(t,e){return t.__v.__b-e.__v.__b})),o=[],t.some((function(t){var e,n,r,i,s,o;t.__d&&(s=(i=(e=t).__v).__e,(o=e.__P)&&(n=[],(r=h({},i)).__v=i.__v+1,q(o,i,r,e.__n,void 0!==o.ownerSVGElement,null!=i.__h?[s]:null,n,null==s?g(i):s,i.__h),T(n,i),i.__e!=s&&y(i)))}))}function b(t,e,n,r,i,s,o,a,c,h){var d,A,p,y,w,E,b,C=r&&r.__k||l,S=C.length;for(n.__k=[],d=0;d<e.length;d++)if(null!=(y=n.__k[d]=null==(y=e[d])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?f(null,y,null,null,y):Array.isArray(y)?f(m,{children:y},null,null,null):y.__b>0?f(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(p=C[d])||p&&y.key==p.key&&y.type===p.type)C[d]=void 0;else for(A=0;A<S;A++){if((p=C[A])&&y.key==p.key&&y.type===p.type){C[A]=void 0;break}p=null}q(t,y,p=p||u,i,s,o,a,c,h),w=y.__e,(A=y.ref)&&p.ref!=A&&(b||(b=[]),p.ref&&b.push(p.ref,null,y),b.push(A,y.__c||w,y)),null!=w?(null==E&&(E=w),"function"==typeof y.type&&y.__k===p.__k?y.__d=c=v(y,c,t):c=I(t,y,p,C,w,c),"function"==typeof n.type&&(n.__d=c)):c&&p.__e==c&&c.parentNode!=t&&(c=g(p))}for(n.__e=E,d=S;d--;)null!=C[d]&&x(C[d],C[d]);if(b)for(d=0;d<b.length;d++)L(b[d],b[++d],b[++d])}function v(t,e,n){for(var r,i=t.__k,s=0;i&&s<i.length;s++)(r=i[s])&&(r.__=t,e="function"==typeof r.type?v(r,e,n):I(n,r,r,i,r.__e,e));return e}function I(t,e,n,r,i,s){var o,a,u;if(void 0!==e.__d)o=e.__d,e.__d=void 0;else if(null==n||i!=s||null==i.parentNode)t:if(null==s||s.parentNode!==t)t.appendChild(i),o=null;else{for(a=s,u=0;(a=a.nextSibling)&&u<r.length;u+=1)if(a==i)break t;t.insertBefore(i,s),o=s}return void 0!==o?o:i.nextSibling}function C(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||c.test(e)?n:n+"px"}function S(t,e,n,r,i){var s;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||C(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||C(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=n,n?r||t.addEventListener(e,s?_:D,s):t.removeEventListener(e,s?_:D,s);else if("dangerouslySetInnerHTML"!==e){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&-1==e.indexOf("-")?t.removeAttribute(e):t.setAttribute(e,n))}}function D(t){this.l[t.type+!1](i.event?i.event(t):t)}function _(t){this.l[t.type+!0](i.event?i.event(t):t)}function q(t,e,n,r,s,o,a,u,l){var c,d,A,f,g,y,w,E,v,I,C,S,D,_,q,T=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(l=n.__h,u=e.__e=n.__e,e.__h=null,o=[u]),(c=i.__b)&&c(e);try{t:if("function"==typeof T){if(E=e.props,v=(c=T.contextType)&&r[c.__c],I=c?v?v.props.value:c.__:r,n.__c?w=(d=e.__c=n.__c).__=d.__E:("prototype"in T&&T.prototype.render?e.__c=d=new T(E,I):(e.__c=d=new p(E,I),d.constructor=T,d.render=j),v&&v.sub(d),d.props=E,d.state||(d.state={}),d.context=I,d.__n=r,A=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=T.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=h({},d.__s)),h(d.__s,T.getDerivedStateFromProps(E,d.__s))),f=d.props,g=d.state,A)null==T.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==T.getDerivedStateFromProps&&E!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(E,I),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(E,d.__s,I)||e.__v===n.__v){for(d.props=E,d.state=d.__s,e.__v!==n.__v&&(d.__d=!1),d.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),C=0;C<d._sb.length;C++)d.__h.push(d._sb[C]);d._sb=[],d.__h.length&&a.push(d);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(E,d.__s,I),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,g,y)}))}if(d.context=I,d.props=E,d.__v=e,d.__P=t,S=i.__r,D=0,"prototype"in T&&T.prototype.render){for(d.state=d.__s,d.__d=!1,S&&S(e),c=d.render(d.props,d.state,d.context),_=0;_<d._sb.length;_++)d.__h.push(d._sb[_]);d._sb=[]}else do{d.__d=!1,S&&S(e),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++D<25);d.state=d.__s,null!=d.getChildContext&&(r=h(h({},r),d.getChildContext())),A||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(f,g)),q=null!=c&&c.type===m&&null==c.key?c.props.children:c,b(t,Array.isArray(q)?q:[q],e,n,r,s,o,a,u,l),d.base=e.__e,e.__h=null,d.__h.length&&a.push(d),w&&(d.__E=d.__=null),d.__e=!1}else null==o&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=U(n.__e,e,n,r,s,o,a,l);(c=i.diffed)&&c(e)}catch(t){e.__v=null,(l||null!=o)&&(e.__e=u,e.__h=!!l,o[o.indexOf(u)]=null),i.__e(t,e,n)}}function T(t,e){i.__c&&i.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){i.__e(t,e.__v)}}))}function U(t,e,n,i,s,o,a,l){var c,h,A,f=n.props,m=e.props,p=e.type,y=0;if("svg"===p&&(s=!0),null!=o)for(;y<o.length;y++)if((c=o[y])&&"setAttribute"in c==!!p&&(p?c.localName===p:3===c.nodeType)){t=c,o[y]=null;break}if(null==t){if(null===p)return document.createTextNode(m);t=s?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,m.is&&m),o=null,l=!1}if(null===p)f===m||l&&t.data===m||(t.data=m);else{if(o=o&&r.call(t.childNodes),h=(f=n.props||u).dangerouslySetInnerHTML,A=m.dangerouslySetInnerHTML,!l){if(null!=o)for(f={},y=0;y<t.attributes.length;y++)f[t.attributes[y].name]=t.attributes[y].value;(A||h)&&(A&&(h&&A.__html==h.__html||A.__html===t.innerHTML)||(t.innerHTML=A&&A.__html||""))}if(function(t,e,n,r,i){var s;for(s in n)"children"===s||"key"===s||s in e||S(t,s,null,n[s],r);for(s in e)i&&"function"!=typeof e[s]||"children"===s||"key"===s||"value"===s||"checked"===s||n[s]===e[s]||S(t,s,e[s],n[s],r)}(t,m,f,s,l),A)e.__k=[];else if(y=e.props.children,b(t,Array.isArray(y)?y:[y],e,n,i,s&&"foreignObject"!==p,o,a,o?o[0]:n.__k&&g(n,0),l),null!=o)for(y=o.length;y--;)null!=o[y]&&d(o[y]);l||("value"in m&&void 0!==(y=m.value)&&(y!==t.value||"progress"===p&&!y||"option"===p&&y!==f.value)&&S(t,"value",y,f.value,!1),"checked"in m&&void 0!==(y=m.checked)&&y!==t.checked&&S(t,"checked",y,f.checked,!1))}return t}function L(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){i.__e(t,n)}}function x(t,e,n){var r,s;if(i.unmount&&i.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||L(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){i.__e(t,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(s=0;s<r.length;s++)r[s]&&x(r[s],e,n||"function"!=typeof t.type);n||null==t.__e||d(t.__e),t.__=t.__e=t.__d=void 0}function j(t,e,n){return this.constructor(t,n)}function O(t,e,n){var s,o,a;i.__&&i.__(t,e),o=(s="function"==typeof n)?null:n&&n.__k||e.__k,a=[],q(e,t=(!s&&n||e).__k=A(m,null,[t]),o||u,u,void 0!==e.ownerSVGElement,!s&&n?[n]:o?null:e.firstChild?r.call(e.childNodes):null,a,!s&&n?n:o?o.__e:e.firstChild,s),T(a,t)}r=l.slice,i={__e:function(t,e,n,r){for(var i,s,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&null!=s.getDerivedStateFromError&&(i.setState(s.getDerivedStateFromError(t)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(t,r||{}),o=i.__d),o)return i.__E=i}catch(e){t=e}throw t}},s=0,p.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof t&&(t=t(h({},n),this.props)),t&&h(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),w(this))},p.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),w(this))},p.prototype.render=m,o=[],E.__r=0;var k=n(22),N=n.n(k),R=n(1),B=n(3),F=n(2),M=n(5);
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
class P{constructor(t,e){this._delegate=t,this.firebase=e,Object(F._addComponent)(t,new B.a("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(F.deleteApp)(this._delegate)))}_getService(t,e=F._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=F._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){Object(F._addComponent)(this._delegate,t)}_addOrOverwriteComponent(t){Object(F._addOrOverwriteComponent)(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const Q={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},K=new R.b("app-compat","Firebase",Q);const G=
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
function t(){const e=
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
function(t){const e={},n={__esModule:!0,initializeApp:function(r,i={}){const s=F.initializeApp(r,i);if(Object(R.e)(e,s.name))return e[s.name];const o=new t(s,n);return e[s.name]=o,o},app:r,registerVersion:F.registerVersion,setLogLevel:F.setLogLevel,onLog:F.onLog,apps:null,SDK_VERSION:F.SDK_VERSION,INTERNAL:{registerComponent:function(e){const i=e.name,s=i.replace("-compat","");if(F._registerComponent(e)&&"PUBLIC"===e.type){const o=(t=r())=>{if("function"!=typeof t[s])throw K.create("invalid-app-argument",{appName:i});return t[s]()};void 0!==e.serviceProps&&Object(R.i)(o,e.serviceProps),n[s]=o,t.prototype[s]=function(...t){return this._getService.bind(this,i).apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[s]:null},removeApp:function(t){delete e[t]},useAsService:function(t,e){if("serverAuth"===e)return null;return e},modularAPIs:F}};function r(t){if(t=t||F._DEFAULT_ENTRY_NAME,!Object(R.e)(e,t))throw K.create("no-app",{appName:t});return e[t]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(e).map(t=>e[t])}}),r.App=t,n}(P);return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:t,extendNamespace:function(t){Object(R.i)(e,t)},createSubscribe:R.g,ErrorFactory:R.b,deepExtend:R.i}),e}(),V=new M.b("@firebase/app-compat");
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
if(Object(R.n)()&&void 0!==self.firebase){V.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&V.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const J=G;
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
var H;Object(F.registerVersion)("@firebase/app-compat","0.2.0",H);
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
J.registerVersion("firebase","9.15.0","app-compat");var W=n(0);
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
function Y(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new W.g("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
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
 */function z(){if("undefined"==typeof Uint8Array)throw new W.g("unimplemented","Uint8Arrays are not available in this environment.")}function X(){if(!Object(W.r)())throw new W.g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Z{constructor(t){this._delegate=t}static fromBase64String(t){return X(),new Z(W.b.fromBase64String(t))}static fromUint8Array(t){return z(),new Z(W.b.fromUint8Array(t))}toBase64(){return X(),this._delegate.toBase64()}toUint8Array(){return z(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
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
 */function $(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of e)if(t in n&&"function"==typeof n[t])return!0;return!1}
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
 */(t,["next","error","complete"])}class tt{enableIndexedDbPersistence(t,e){return Object(W.F)(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Object(W.G)(t._delegate)}clearIndexedDbPersistence(t){return Object(W.x)(t._delegate)}}class et{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof W.m||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Object(W.s)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&delete(t=Object.assign(Object.assign({},e),t)).merge,this._delegate._setSettings(t)}useEmulator(t,e,n={}){Object(W.A)(this._delegate,t,e,n)}enableNetwork(){return Object(W.H)(this._delegate)}disableNetwork(){return Object(W.D)(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,Object(W.t)("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(W.lb)(this._delegate)}onSnapshotsInSync(t){return Object(W.Y)(this._delegate,t)}get app(){if(!this._appCompat)throw new W.g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new mt(this,Object(W.y)(this._delegate,t))}catch(t){throw at(t,"collection()","Firestore.collection()")}}doc(t){try{return new ot(this,Object(W.E)(this._delegate,t))}catch(t){throw at(t,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new dt(this,Object(W.z)(this._delegate,t))}catch(t){throw at(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Object(W.db)(this._delegate,e=>t(new rt(this,e)))}batch(){return Object(W.K)(this._delegate),new it(new W.l(this._delegate,t=>Object(W.L)(this._delegate,t)))}loadBundle(t){return Object(W.V)(this._delegate,t)}namedQuery(t){return Object(W.W)(this._delegate,t).then(t=>t?new dt(this,t):null)}}class nt extends W.a{constructor(t){super(),this.firestore=t}convertBytes(t){return new Z(new W.b(t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return ot.forKey(e,this.firestore,null)}}class rt{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new nt(t)}get(t){const e=pt(t);return this._delegate.get(e).then(t=>new ct(this._firestore,new W.e(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter)))}set(t,e,n){const r=pt(t);return n?(Y("Transaction.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=pt(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=pt(t);return this._delegate.delete(e),this}}class it{constructor(t){this._delegate=t}set(t,e,n){const r=pt(t);return n?(Y("WriteBatch.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=pt(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=pt(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class st{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new W.i(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new ht(this._firestore,n),null!=e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=st.INSTANCES;let r=n.get(t);r||(r=new WeakMap,n.set(t,r));let i=r.get(e);return i||(i=new st(t,new nt(t),e),r.set(e,i)),i}}st.INSTANCES=new WeakMap;class ot{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new nt(t)}static forPath(t,e,n){if(t.length%2!=0)throw new W.g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new ot(e,new W.d(e._delegate,n,new W.n(t)))}static forKey(t,e,n){return new ot(e,new W.d(e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new mt(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new mt(this.firestore,Object(W.y)(this._delegate,t))}catch(t){throw at(t,"collection()","DocumentReference.collection()")}}isEqual(t){return(t=Object(R.l)(t))instanceof W.d&&Object(W.cb)(this._delegate,t)}set(t,e){e=Y("DocumentReference.set",e);try{return e?Object(W.fb)(this._delegate,t,e):Object(W.fb)(this._delegate,t)}catch(t){throw at(t,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Object(W.kb)(this._delegate,t):Object(W.kb)(this._delegate,t,e,...n)}catch(t){throw at(t,"updateDoc()","DocumentReference.update()")}}delete(){return Object(W.B)(this._delegate)}onSnapshot(...t){const e=ut(t),n=lt(t,t=>new ct(this.firestore,new W.e(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)));return Object(W.X)(this._delegate,e,n)}get(t){let e;return e="cache"===(null==t?void 0:t.source)?Object(W.N)(this._delegate):"server"===(null==t?void 0:t.source)?Object(W.O)(this._delegate):Object(W.M)(this._delegate),e.then(t=>new ct(this.firestore,new W.e(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)))}withConverter(t){return new ot(this.firestore,t?this._delegate.withConverter(st.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function at(t,e,n){return t.message=t.message.replace(e,n),t}function ut(t){for(const e of t)if("object"==typeof e&&!$(e))return e;return{}}function lt(t,e){var n,r;let i;return i=$(t[0])?t[0]:$(t[1])?t[1]:"function"==typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{i.next&&i.next(e(t))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class ct{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new ot(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Object(W.hb)(this._delegate,t._delegate)}}class ht extends ct{data(t){const e=this._delegate.data(t);return Object(W.q)(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class dt{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new nt(t)}where(t,e,n){try{return new dt(this.firestore,Object(W.ab)(this._delegate,Object(W.mb)(t,e,n)))}catch(t){throw at(t,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new dt(this.firestore,Object(W.ab)(this._delegate,Object(W.Z)(t,e)))}catch(t){throw at(t,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new dt(this.firestore,Object(W.ab)(this._delegate,Object(W.T)(t)))}catch(t){throw at(t,"limit()","Query.limit()")}}limitToLast(t){try{return new dt(this.firestore,Object(W.ab)(this._delegate,Object(W.U)(t)))}catch(t){throw at(t,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new dt(this.firestore,Object(W.ab)(this._delegate,Object(W.jb)(...t)))}catch(t){throw at(t,"startAt()","Query.startAt()")}}startAfter(...t){try{return new dt(this.firestore,Object(W.ab)(this._delegate,Object(W.ib)(...t)))}catch(t){throw at(t,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new dt(this.firestore,Object(W.ab)(this._delegate,Object(W.J)(...t)))}catch(t){throw at(t,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new dt(this.firestore,Object(W.ab)(this._delegate,Object(W.I)(...t)))}catch(t){throw at(t,"endAt()","Query.endAt()")}}isEqual(t){return Object(W.bb)(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null==t?void 0:t.source)?Object(W.Q)(this._delegate):"server"===(null==t?void 0:t.source)?Object(W.R)(this._delegate):Object(W.P)(this._delegate),e.then(t=>new ft(this.firestore,new W.j(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)))}onSnapshot(...t){const e=ut(t),n=lt(t,t=>new ft(this.firestore,new W.j(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)));return Object(W.X)(this._delegate,e,n)}withConverter(t){return new dt(this.firestore,t?this._delegate.withConverter(st.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class At{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new ht(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ft{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new dt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new ht(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(t=>new At(this._firestore,t))}forEach(t,e){this._delegate.forEach(n=>{t.call(e,new ht(this._firestore,n))})}isEqual(t){return Object(W.hb)(this._delegate,t._delegate)}}class mt extends dt{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new ot(this.firestore,t):null}doc(t){try{return new ot(this.firestore,void 0===t?Object(W.E)(this._delegate):Object(W.E)(this._delegate,t))}catch(t){throw at(t,"doc()","CollectionReference.doc()")}}add(t){return Object(W.u)(this._delegate,t).then(t=>new ot(this.firestore,t))}isEqual(t){return Object(W.cb)(this._delegate,t._delegate)}withConverter(t){return new mt(this.firestore,t?this._delegate.withConverter(st.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function pt(t){return Object(W.p)(t,W.d)}
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
 */class gt{constructor(...t){this._delegate=new W.f(...t)}static documentId(){return new gt(W.o.keyField().canonicalString())}isEqual(t){return(t=Object(R.l)(t))instanceof W.f&&this._delegate._internalPath.isEqual(t._internalPath)}}
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
 */class yt{constructor(t){this._delegate=t}static serverTimestamp(){const t=Object(W.eb)();return t._methodName="FieldValue.serverTimestamp",new yt(t)}static delete(){const t=Object(W.C)();return t._methodName="FieldValue.delete",new yt(t)}static arrayUnion(...t){const e=Object(W.w)(...t);return e._methodName="FieldValue.arrayUnion",new yt(e)}static arrayRemove(...t){const e=Object(W.v)(...t);return e._methodName="FieldValue.arrayRemove",new yt(e)}static increment(t){const e=Object(W.S)(t);return e._methodName="FieldValue.increment",new yt(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
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
 */const wt={Firestore:et,GeoPoint:W.h,Timestamp:W.k,Blob:Z,Transaction:rt,WriteBatch:it,DocumentReference:ot,DocumentSnapshot:ct,Query:dt,QueryDocumentSnapshot:ht,QuerySnapshot:ft,CollectionReference:mt,FieldPath:gt,FieldValue:yt,setLogLevel:function(t){Object(W.gb)(t)},CACHE_SIZE_UNLIMITED:W.c};
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
var Et,bt;bt=(t,e)=>new et(t,e,new tt),(Et=J).INTERNAL.registerComponent(new B.a("firestore-compat",t=>{const e=t.getProvider("app-compat").getImmediate(),n=t.getProvider("firestore").getImmediate();return bt(e,n)},"PUBLIC").setServiceProps(Object.assign({},wt))),Et.registerVersion("@firebase/firestore-compat","0.3.0");
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
class vt extends R.c{constructor(t,e,n=0){super(It(t),`Firebase Storage: ${e} (${It(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return It(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function It(t){return"storage/"+t}function Ct(){return new vt("unknown","An unknown error occurred, please check the error payload for server response.")}function St(){return new vt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Dt(){return new vt("canceled","User canceled the upload/download.")}function _t(){return new vt("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function qt(t){return new vt("invalid-argument",t)}function Tt(){return new vt("app-deleted","The Firebase app was deleted.")}function Ut(t){return new vt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Lt(t,e){return new vt("invalid-format","String does not match format '"+t+"': "+e)}function xt(t){throw new vt("internal-error","Internal error: "+t)}
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
 */class jt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=jt.makeFromUrl(t,e)}catch(e){return new jt(t,"")}if(""===n.path)return n;throw new vt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null;const r=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i");function i(t){t.path_=decodeURIComponent(t.path)}const s=e.replace(/[.]/g,"\\."),o=[{regex:r,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${s}/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===e?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/([A-Za-z0-9.\\-_]+)/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let e=0;e<o.length;e++){const r=o[e],i=r.regex.exec(t);if(i){const t=i[r.indices.bucket];let e=i[r.indices.path];e||(e=""),n=new jt(t,e),r.postModify(n);break}}if(null==n)throw function(t){return new vt("invalid-url","Invalid URL '"+t+"'.")}(t);return n}}class Ot{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function kt(t){return"string"==typeof t||t instanceof String}function Nt(t){return Rt()&&t instanceof Blob}function Rt(){return"undefined"!=typeof Blob&&!Object(R.p)()}function Bt(t,e,n,r){if(r<e)throw qt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qt(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function Ft(t,e,n){let r=e;return null==n&&(r="https://"+e),`${n}://${r}/v0${t}`}function Mt(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){n=n+(e(r)+"="+e(t[r]))+"&"}return n=n.slice(0,-1),n}
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
 */var Pt;
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
function Qt(t,e){const n=t>=500&&t<600,r=-1!==[408,429].indexOf(t),i=-1!==e.indexOf(t);return n||r||i}
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
 */!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(Pt||(Pt={}));class Kt{constructor(t,e,n,r,i,s,o,a,u,l,c,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new Gt(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===Pt.NO_ERROR,i=n.getStatus();if((!e||Qt(i,this.additionalRetryCodes_))&&this.retry){const e=n.getErrorCode()===Pt.ABORT;return void t(!1,new Gt(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new Gt(s,n))})},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());!
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
function(t){return void 0!==t}(t)?n():n(t)}catch(t){r(t)}else if(null!==i){const t=Ct();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){r(this.appDelete_?Tt():Dt())}else{r(St())}};this.canceled_?e(0,new Gt(!1,null,!0)):this.backoffId_=function(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return 2===a}let l=!1;function c(...t){l||(l=!0,e.apply(null,t))}function h(e){i=setTimeout(()=>{i=null,t(A,u())},e)}function d(){s&&clearTimeout(s)}function A(t,...e){if(l)return void d();if(t)return d(),void c.call(null,t,...e);if(u()||o)return d(),void c.call(null,t,...e);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let f=!1;function m(t){f||(f=!0,d(),l||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Gt{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}
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
function Vt(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Jt(...t){const e=Vt();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(Rt())return new Blob(t);throw new vt("unsupported-environment","This browser doesn't seem to support creating Blobs")}
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
function Ht(t){if("undefined"==typeof atob)throw new vt("unsupported-environment","base-64"+" is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(t)}
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
 */const Wt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yt{constructor(t,e){this.data=t,this.contentType=e||null}}function zt(t,e){switch(t){case Wt.RAW:return new Yt(Xt(e));case Wt.BASE64:case Wt.BASE64URL:return new Yt(Zt(t,e));case Wt.DATA_URL:return new Yt(function(t){const e=new $t(t);return e.base64?Zt(Wt.BASE64,e.rest):function(t){let e;try{e=decodeURIComponent(t)}catch(t){throw Lt(Wt.DATA_URL,"Malformed data URL.")}return Xt(e)}(e.rest)}(e),new $t(e).contentType)}throw Ct()}function Xt(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<t.length-1&&56320==(64512&t.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&t.charCodeAt(++n),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320==(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function Zt(t,e){switch(t){case Wt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){throw Lt(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case Wt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){throw Lt(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ht(e)}catch(e){if(e.message.includes("polyfill"))throw e;throw Lt(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let t=0;t<n.length;t++)r[t]=n.charCodeAt(t);return r}class $t{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw Lt(Wt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=function(t,e){if(!(t.length>=e.length))return!1;return t.substring(t.length-e.length)===e}
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
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}class te{constructor(t,e){let n=0,r="";Nt(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(Nt(this.data_)){const n=function(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}(this.data_,t,e);return null===n?null:new te(n)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new te(n,!0)}}static getBlob(...t){if(Rt()){const e=t.map(t=>t instanceof te?t.data_:t);return new te(Jt.apply(null,e))}{const e=t.map(t=>kt(t)?zt(Wt.RAW,t).data:t.data_);let n=0;e.forEach(t=>{n+=t.byteLength});const r=new Uint8Array(n);let i=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]}),new te(r,!0)}}uploadData(){return this.data_}}
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
 */function ee(t){let e;try{e=JSON.parse(t)}catch(t){return null}return function(t){return"object"==typeof t&&!Array.isArray(t)}(e)?e:null}
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
 */function ne(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function re(t,e){return e}class ie{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||re}}let se=null;function oe(){if(se)return se;const t=[];t.push(new ie("bucket")),t.push(new ie("generation")),t.push(new ie("metageneration")),t.push(new ie("name","fullPath",!0));const e=new ie("name");e.xform=function(t,e){return function(t){return!kt(t)||t.length<2?t:ne(t)}(e)},t.push(e);const n=new ie("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new ie("timeCreated")),t.push(new ie("updated")),t.push(new ie("md5Hash",null,!0)),t.push(new ie("cacheControl",null,!0)),t.push(new ie("contentDisposition",null,!0)),t.push(new ie("contentEncoding",null,!0)),t.push(new ie("contentLanguage",null,!0)),t.push(new ie("contentType",null,!0)),t.push(new ie("metadata","customMetadata",!0)),se=t,se}function ae(t,e,n){const r={type:"file"},i=n.length;for(let t=0;t<i;t++){const i=n[t];r[i.local]=i.xform(r,e[i.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){const n=t.bucket,r=t.fullPath,i=new jt(n,r);return e._makeStorageReference(i)}})}(r,t),r}function ue(t,e,n){const r=ee(e);if(null===r)return null;return ae(t,r,n)}function le(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
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
 */function ce(t,e,n){const r=ee(n);if(null===r)return null;return function(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n.prefixes)for(const i of n.prefixes){const n=i.replace(/\/$/,""),s=t._makeStorageReference(new jt(e,n));r.prefixes.push(s)}if(n.items)for(const i of n.items){const n=t._makeStorageReference(new jt(e,i.name));r.items.push(n)}return r}(t,e,r)}class he{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function de(t){if(!t)throw Ct()}function Ae(t,e){return function(n,r){const i=ue(t,r,e);return de(null!==i),i}}function fe(t,e){return function(n,r){const i=ue(t,r,e);return de(null!==i),function(t,e,n,r){const i=ee(e);if(null===i)return null;if(!kt(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map(e=>{const i=t.bucket,s=t.fullPath;return Ft("/b/"+o(i)+"/o/"+o(s),n,r)+Mt({alt:"media",token:e})})[0]}(i,r,t.host,t._protocol)}}function me(t){return function(e,n){let r;var i,s;return 401===e.getStatus()?r=e.getErrorText().includes("Firebase App Check token is invalid")?new vt("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new vt("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(s=t.bucket,r=new vt("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(i=t.path,r=new vt("unauthorized","User does not have permission to access '"+i+"'.")):r=n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}}function pe(t){const e=me(t);return function(n,r){let i=e(n,r);var s;return 404===n.getStatus()&&(s=t.path,i=new vt("object-not-found","Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function ge(t,e,n){const r=Ft(e.fullServerUrl(),t.host,t._protocol),i=t.maxOperationRetryTime,s=new he(r,"GET",Ae(t,n),i);return s.errorHandler=pe(e),s}function ye(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=Ft(e.bucketOnlyServerUrl(),t.host,t._protocol),a=t.maxOperationRetryTime,u=new he(o,"GET",function(t,e){return function(n,r){const i=ce(t,e,r);return de(null!==i),i}}(t,e.bucket),a);return u.urlParams=s,u.errorHandler=me(e),u}function we(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=function(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}(null,e)),r}function Ee(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();o["Content-Type"]="multipart/related; boundary="+a;const u=we(e,r,i),l="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+le(u,n)+"\r\n--"+a+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",c="\r\n--"+a+"--",h=te.getBlob(l,r,c);if(null===h)throw _t();const d={name:u.fullPath},A=Ft(s,t.host,t._protocol),f=t.maxUploadRetryTime,m=new he(A,"POST",Ae(t,n),f);return m.urlParams=d,m.headers=o,m.body=h.uploadData(),m.errorHandler=me(e),m}class be{constructor(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}}function ve(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(t){de(!1)}return de(!!n&&-1!==(e||["active"]).indexOf(n)),n}function Ie(t,e,n,r,i,s,o,a){const u=new be(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw new vt("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const h=u.current,d=h+c;let A="";A=0===c?"finalize":l===c?"upload, finalize":"upload";const f={"X-Goog-Upload-Command":A,"X-Goog-Upload-Offset":""+u.current},m=r.slice(h,d);if(null===m)throw _t();const p=e.maxUploadRetryTime,g=new he(n,"POST",(function(t,n){const i=ve(t,["active","final"]),o=u.current+c,a=r.size();let l;return l="final"===i?Ae(e,s)(t,n):null,new be(o,a,"final"===i,l)}),p);return g.headers=f,g.body=m.uploadData(),g.progressCallback=a||null,g.errorHandler=me(t),g}
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
 */const Ce={STATE_CHANGED:"state_changed"},Se={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function De(t){switch(t){case"running":case"pausing":case"canceling":return Se.RUNNING;case"paused":return Se.PAUSED;case"success":return Se.SUCCESS;case"canceled":return Se.CANCELED;case"error":default:return Se.ERROR}}
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
 */class _e{constructor(t,e,n){if(function(t){return"function"==typeof t}(t)||null!=e||null!=n)this.next=t,this.error=null!=e?e:void 0,this.complete=null!=n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
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
 */function qe(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}
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
 */class Te{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Pt.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Pt.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Pt.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw xt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const t in r)r.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,r[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xt("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw xt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Ue extends Te{initXhr(){this.xhr_.responseType="text"}}function Le(){return new Ue}
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
class xe{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=oe(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{if(this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const e=this.isExponentialBackoffExpired();if(Qt(t.status,[])){if(!e)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();t=St()}this._error=t,this._transition("error")}},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((t,e)=>{this._resolve=t,this._reject=e,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((t,e)=>{const n=function(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=we(e,r,i),a={name:o.fullPath},u=Ft(s,t.host,t._protocol),l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},c=le(o,n),h=t.maxUploadRetryTime,d=new he(u,"POST",(function(t){let e;ve(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(t){de(!1)}return de(kt(e)),e}),h);return d.urlParams=a,d.headers=l,d.body=c,d.errorHandler=me(e),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Le,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,n)=>{const r=function(t,e,n,r){const i=t.maxUploadRetryTime,s=new he(n,"POST",(function(t){const e=ve(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(t){de(!1)}n||de(!1);const i=Number(n);return de(!isNaN(i)),new be(i,r.size(),"final"===e)}),i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=me(e),s}(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,Le,e,n);this._request=i,i.getPromise().then(t=>{t=t,this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=262144*this._chunkMultiplier,e=new be(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let s;try{s=Ie(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(t){return this._error=t,void this._transition("error")}const o=this._ref.storage._makeRequest(s,Le,r,i,!1);this._request=o,o.getPromise().then(t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){2*(262144*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const n=ge(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,Le,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const n=Ee(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Le,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Dt(),this._state=t,this._notifyObservers();break;case"error":case"success":this._state=t,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const t=De(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,r){const i=new _e(e||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(De(this._state)){case Se.SUCCESS:qe(this._resolve.bind(null,this.snapshot))();break;case Se.CANCELED:case Se.ERROR:qe(this._reject.bind(null,this._error))();break;default:t=!1}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(De(this._state)){case Se.RUNNING:case Se.PAUSED:t.next&&qe(t.next.bind(t,this.snapshot))();break;case Se.SUCCESS:t.complete&&qe(t.complete.bind(t))();break;case Se.CANCELED:case Se.ERROR:t.error&&qe(t.error.bind(t,this._error))();break;default:t.error&&qe(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
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
 */class je{constructor(t,e){this._service=t,this._location=e instanceof jt?e:jt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new je(t,e)}get root(){const t=new jt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ne(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new jt(this._location.bucket,t);return new je(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw Ut(t)}}function Oe(t){const e={prefixes:[],items:[]};return async function t(e,n,r){const i={pageToken:r},s=await ke(e,i);n.prefixes.push(...s.prefixes),n.items.push(...s.items),null!=s.nextPageToken&&await t(e,n,s.nextPageToken)}(t,e).then(()=>e)}function ke(t,e){null!=e&&"number"==typeof e.maxResults&&Bt("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=ye(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Le)}function Ne(t,e){t._throwIfRoot("updateMetadata");const n=function(t,e,n,r){const i=Ft(e.fullServerUrl(),t.host,t._protocol),s=le(n,r),o=t.maxOperationRetryTime,a=new he(i,"PATCH",Ae(t,r),o);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=s,a.errorHandler=pe(e),a}(t.storage,t._location,e,oe());return t.storage.makeRequestWithTokens(n,Le)}function Re(t){t._throwIfRoot("getDownloadURL");const e=function(t,e,n){const r=Ft(e.fullServerUrl(),t.host,t._protocol),i=t.maxOperationRetryTime,s=new he(r,"GET",fe(t,n),i);return s.errorHandler=pe(e),s}(t.storage,t._location,oe());return t.storage.makeRequestWithTokens(e,Le).then(t=>{if(null===t)throw new vt("no-download-url","The given file does not have any download URLs.");return t})}function Be(t){t._throwIfRoot("deleteObject");const e=function(t,e){const n=Ft(e.fullServerUrl(),t.host,t._protocol),r=t.maxOperationRetryTime,i=new he(n,"DELETE",(function(t,e){}),r);return i.successCodes=[200,204],i.errorHandler=pe(e),i}(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Le)}function Fe(t,e){const n=function(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),r=new jt(t._location.bucket,n);return new je(t.storage,r)}
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
 */function Me(t,e){if(t instanceof Ke){const n=t;if(null==n._bucket)throw new vt("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new je(n,n._bucket);return null!=e?Me(r,e):r}return void 0!==e?Fe(t,e):t}function Pe(t,e){if(e&&/^[A-Za-z]+:\/\//.test(e)){if(t instanceof Ke)return new je(t,e);throw qt("To use ref(service, url), the first argument must be a Storage instance.")}return Me(t,e)}function Qe(t,e){const n=null==e?void 0:e.storageBucket;return null==n?null:jt.makeFromBucketSpec(n,t)}class Ke{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?jt.makeFromBucketSpec(r,this._host):Qe(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=jt.makeFromBucketSpec(this._url,t):this._bucket=Qe(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Bt("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Bt("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new je(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new Ot(Tt());{const s=function(t,e,n,r,i,s,o=!0){const a=Mt(t.urlParams),u=t.url+a,l=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(l,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(l,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(l,s),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(l,r),new Kt(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}function Ge(t,e,n){return function(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new xe(t,new te(e),n)}(t=Object(R.l)(t),e,n)}function Ve(t){return function(t){t._throwIfRoot("getMetadata");const e=ge(t.storage,t._location,oe());return t.storage.makeRequestWithTokens(e,Le)}(t=Object(R.l)(t))}function Je(t,e){return Pe(t=Object(R.l)(t),e)}function He(t,e,n,r={}){!function(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken="string"==typeof i?i:Object(R.f)(i,t.app.options.projectId))}(t,e,n,r)}
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
 */function We(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ke(n,r,i,e,F.SDK_VERSION)}Object(F._registerComponent)(new B.a("storage",We,"PUBLIC").setMultipleInstances(!0)),Object(F.registerVersion)("@firebase/storage","0.10.0",""),Object(F.registerVersion)("@firebase/storage","0.10.0","esm2017");
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
class Ye{constructor(t,e,n){this._delegate=t,this.task=e,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
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
 */class ze{constructor(t,e){this._delegate=t,this._ref=e,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ye(this._delegate.snapshot,this,this._ref)}then(t,e){return this._delegate.then(e=>{if(t)return t(new Ye(e,this,this._ref))},e)}on(t,e,n,r){let i=void 0;return e&&(i="function"==typeof e?t=>e(new Ye(t,this,this._ref)):{next:e.next?t=>e.next(new Ye(t,this,this._ref)):void 0,complete:e.complete||void 0,error:e.error||void 0}),this._delegate.on(t,i,n||void 0,r||void 0)}}class Xe{constructor(t,e){this._delegate=t,this._service=e}get prefixes(){return this._delegate.prefixes.map(t=>new Ze(t,this._service))}get items(){return this._delegate.items.map(t=>new Ze(t,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
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
 */class Ze{constructor(t,e){this._delegate=t,this.storage=e}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(t){const e=function(t,e){return Fe(t,e)}(this._delegate,t);return new Ze(e,this.storage)}get root(){return new Ze(this._delegate.root,this.storage)}get parent(){const t=this._delegate.parent;return null==t?null:new Ze(t,this.storage)}put(t,e){return this._throwIfRoot("put"),new ze(Ge(this._delegate,t,e),this)}putString(t,e=Wt.RAW,n){this._throwIfRoot("putString");const r=zt(e,t),i=Object.assign({},n);return null==i.contentType&&null!=r.contentType&&(i.contentType=r.contentType),new ze(new xe(this._delegate,new te(r.data,!0),i),this)}listAll(){return(t=this._delegate,Oe(t=Object(R.l)(t))).then(t=>new Xe(t,this.storage));var t}list(t){return function(t,e){return ke(t=Object(R.l)(t),e)}(this._delegate,t||void 0).then(t=>new Xe(t,this.storage))}getMetadata(){return Ve(this._delegate)}updateMetadata(t){return function(t,e){return Ne(t=Object(R.l)(t),e)}(this._delegate,t)}getDownloadURL(){return t=this._delegate,Re(t=Object(R.l)(t));var t}delete(){return this._throwIfRoot("delete"),t=this._delegate,Be(t=Object(R.l)(t));var t}_throwIfRoot(t){if(""===this._delegate._location.path)throw Ut(t)}}
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
 */class $e{constructor(t,e){this.app=t,this._delegate=e}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(t){if(tn(t))throw qt("ref() expected a child path but got a URL, use refFromURL instead.");return new Ze(Je(this._delegate,t),this)}refFromURL(t){if(!tn(t))throw qt("refFromURL() expected a full URL but got a child path, use ref() instead.");try{jt.makeFromUrl(t,this._delegate.host)}catch(t){throw qt("refFromUrl() expected a valid full URL but got an invalid one.")}return new Ze(Je(this._delegate,t),this)}setMaxUploadRetryTime(t){this._delegate.maxUploadRetryTime=t}setMaxOperationRetryTime(t){this._delegate.maxOperationRetryTime=t}useEmulator(t,e,n={}){He(this._delegate,t,e,n)}}function tn(t){return/^[A-Za-z]+:\/\//.test(t)}function en(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new $e(n,r)}!function(t){const e={TaskState:Se,TaskEvent:Ce,StringFormat:Wt,Storage:$e,Reference:Ze};t.INTERNAL.registerComponent(new B.a("storage-compat",en,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion("@firebase/storage-compat","0.2.0")}(J);J.initializeApp({apiKey:"AIzaSyAkNK-ByqyzgufHhELPFh6e4TsoSuHvPYE",authDomain:"truesight-7c04e.firebaseapp.com",projectId:"truesight-7c04e",storageBucket:"truesight-7c04e.appspot.com",messagingSenderId:"123067060171",appId:"1:123067060171:web:abe3ee3e5109c97f97304e",measurementId:"G-91YL89DDY9"});var nn={data:J.firestore(),files:J.storage()};function rn(t){if(null!=t&&""!=t){if(11==t.length)return t;var e=t.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);if(null!=e){var n=e[0];if(null!=n){var r=n.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return r&&11==r[7].length?r[7]:void 0}}}}function sn(t){var e=(t.match(/t=([^&]*)/)||[])[1];if(null!=e&&(e=parseInt(e),!isNaN(e)))return e*=1e3}function on(t){if(null!=t.currentTime)return t.currentTime;if(null!=t.startTime){var e=Date.now()-t.startTime;return e=Math.max(0,e)}return 0}nn.data.collection("art").orderBy("timestamp","desc").limit(25).onSnapshot((function(t){0!=t.exists&&(an.art=[],t.forEach((function(t,e){an.art.push(t.data())})))})),nn.data.collection("campaigns").doc("theros").onSnapshot((function(t){if(0!=t.exists&&(an.prevcampaign=an.campaign,an.campaign=t.data(),an.campaign.musics=an.campaign.musics||[],null!=an.campaign.music&&null!=window.youtubePlayer)){var e=an.campaign,n=an.prevcampaign;if(console.log(e.music),e.music.youtubeId!=n.music.youtubeId||e.music.runkey!=n.music.runkey||e.music.key!=n.music.key)return window.youtubePlayer.loadVideoById({videoId:e.music.youtubeId,startSeconds:Math.floor(on(e.music)/1e3)||1});e.music.startTime!=n.music.startTime&&window.youtubePlayer.seekTo(Math.floor(on(e.music)/1e3)||1),e.music.state!=n.music.state&&("paused"==an.campaign.music.state?window.youtubePlayer.pauseVideo():"paused"!=an.campaign.music.state&&window.youtubePlayer.playVideo())}}));var an={},un=an;function ln(t){return(ln="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function cn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,s=void 0,s=function(t,e){if("object"!==ln(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==ln(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===ln(s)?s:String(s)),r)}var i,s}function hn(t,e,n){return e&&cn(t.prototype,e),n&&cn(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function dn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function An(t,e){if(e&&("object"===ln(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function fn(t){var e="function"==typeof Map?new Map:void 0;return(fn=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return mn(t,arguments,yn(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),gn(r,t)})(t)}function mn(t,e,n){return(mn=pn()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&gn(i,n.prototype),i}).apply(null,arguments)}function pn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function gn(t,e){return(gn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function yn(t){return(yn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}window.truesight=window.truesight||{},window.truesight.data=an,"undefined"!=typeof window&&(window.setTimeout((function(){En.run(window.location.hash)})),window.addEventListener("hashchange",(function(t){En.run(window.location.hash)})));var wn=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&gn(t,e)}(i,t);var e,n,r=(e=i,n=pn(),function(){var t,r=yn(e);if(n){var i=yn(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return An(this,t)});function i(){return dn(this,i),r.apply(this,arguments)}return hn(i)}(fn(Error)),En=new(function(){function t(){dn(this,t),this.routes=[],this.state={screen:"SplashScreen"}}return hn(t,[{key:"go",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";window.location.hash=t}},{key:"run",value:function(t){"/"==(t="#"==(t=decodeURIComponent(t))[0]?t.substring(1):t).charAt(t.length-1)&&(t=t.substring(0,t.length-1));var e={path:t=t||"/"};for(var n in this.routes){var r=this.routes[n],i=e.path.match(r.path);if(null!=i){e.wildcards=i.groups;try{var s=r.func(e);if(null!=s)return void(this.state=s)}catch(t){throw e.error=t,this.state=t instanceof wn?this.onUserError(e):this.onError(e),t}}}}},{key:"on",value:function(t,e){if(t instanceof Error==1)return this.routes[t]={path:t,func:e};this.routes.push({path:this.convertStringToRegex(t),func:e})}},{key:"convertStringToRegex",value:function(t){if(t instanceof RegExp==1)return t;var e=(t=t.replace(/\*/g,"(.*)")).match(/\:[a-zA-Z]+/g);return null!=e&&e.forEach((function(e){t=t.replace(e,"(?<"+e.substring(1)+">.*)")})),new RegExp("^"+t+"$","i")}}]),t}());En.on("/",(function(t){return{screen:"SplashScreen"}})),En.on("/edit",(function(t){return{screen:"EditScreen"}})),En.on("/play",(function(t){return{screen:"PlayScreen"}})),En.on("/play/debug",(function(t){return{screen:"PlayScreen",isDebug:!0}})),En.on("/*",(function(t){throw new wn("Could not find "+t.path)})),En.onUserError=function(t){return{screen:"ErrorScreen",message:t.error.message}},En.onError=function(t){return{screen:"ErrorScreen",message:"Something went wrong!!"}},window.truesight=window.truesight||{},window.truesight.navigation=window.truesight.navigation||En;var bn=En;function vn(t){return(vn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function In(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,s=void 0,s=function(t,e){if("object"!==vn(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==vn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===vn(s)?s:String(s)),r)}var i,s}var Cn=Math.ceil(3*Math.random()),Sn=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"render",value:function(){return A("div",{class:"SplashScreen",onClick:this.onClick},A("div",{class:"Background",random:Cn}),A("div",{class:"Prompt"},A("div",{class:"Text"},"Welcome to",A("br",null),"Bardic Inspiration"),A("div",{class:"Icon"},A("div",{class:"fill"}),A("div",{class:"shape material-icons"},"smart_display"))))}},{key:"onClick",value:function(){bn.run("/play")}}])&&In(e.prototype,n),r&&In(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),Dn=n(6),_n=n.n(Dn),qn=n(7),Tn=n.n(qn),Un=n(8),Ln=n.n(Un);function xn(t){return(xn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function jn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,s=void 0,s=function(t,e){if("object"!==xn(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==xn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===xn(s)?s:String(s)),r)}var i,s}var On=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"onLoad",value:function(){null==window.youtubePlayer&&(window.youtubePlayer=new YT.Player("youtuber",{width:"300",height:"200",videoId:un.campaign.music.youtubeId,playerVars:{fs:0,rel:0,controls:1,disablekb:1,modestbranding:1,start:on(un.campaign.music)/1e3||1,autoplay:!0},events:{onReady:function(t){window.youtubePlayer.seekTo(on(un.campaign.music)/1e3||1),"paused"==un.campaign.music.state?window.youtubePlayer.pauseVideo():"paused"!=un.campaign.music.state&&window.youtubePlayer.playVideo()},onStateChange:function(t){if(t.data==YT.PlayerState.PAUSED&&"paused"!=un.campaign.music.state)return window.youtubePlayer.seekTo(on(un.campaign.music)/1e3||1),void t.target.playVideo();if(t.data==YT.PlayerState.PLAYING&&"playing"!=un.campaign.music.state)return window.youtubePlayer.seekTo(on(un.campaign.music)/1e3||1),void t.target.pauseVideo();if(t.data==YT.PlayerState.ENDED){if(null==un.campaign.musics)return;if(0==un.campaign.musics.length)return;var e=un.campaign.musics.find((function(t){return un.campaign.music.key==t.key})),n=un.campaign.musics.indexOf(e)+1,r=un.campaign.musics[n];if(null==r)return;nn.data.collection("campaigns").doc("theros").update({music:{key:r.key,runkey:r.key,youtubeId:r.youtubeId,startTime:Date.now()+500-(r.embeddedStartTime||0),state:"playing"}})}},onError:function(t){console.log("onError",t)}}}))}},{key:"pauseplay",value:function(){"paused"!=un.campaign.music.state?nn.data.collection("campaigns").doc("theros").update({music:{key:un.campaign.music.key,runkey:un.campaign.music.runkey,youtubeId:un.campaign.music.youtubeId,currentTime:Date.now()-un.campaign.music.startTime,state:"paused"}}):"paused"==un.campaign.music.state&&nn.data.collection("campaigns").doc("theros").update({music:{key:un.campaign.music.key,runkey:un.campaign.music.runkey,youtubeId:un.campaign.music.youtubeId,startTime:Date.now()-un.campaign.music.currentTime,state:"playing"}})}}])&&jn(e.prototype,n),r&&jn(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}());function kn(t){return(kn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Nn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Rn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,s=void 0,s=function(t,e){if("object"!==kn(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==kn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===kn(s)?s:String(s)),r)}var i,s}function Bn(t,e,n){return e&&Rn(t.prototype,e),n&&Rn(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var Fn=function(){function t(){Nn(this,t)}return Bn(t,[{key:"render",value:function(){return A("div",{class:"Controls"},A(Mn,null),A("div",{class:"Gradient"}),A("div",{class:"Panel"},A("div",{class:"PlayButton",onClick:this.onClickPlayButton},A("span",{class:"material-icons"},"paused"==un.campaign.music.state?"play_arrow":"pause")),A("div",{class:"VolumeButton",onClick:this.onClickVolumeButton},A("span",{class:"material-icons"},this.getVolumeIcon())),A("div",{class:"VolumeBar",id:"volume",onMouseMove:this.onClickVolumeBar},A("div",{class:"Bar"}),A("div",{class:"Dot",style:{left:100*this.getVolumeRelativePosition()+"%"}})),A("div",{class:"Time"},this.getCurrentTimeText()," / ",this.getTotalTimeText())))}},{key:"onClickVolumeBar",value:function(){if(0!=Ln.a.isPressed()&&null!=document.getElementById("volume")){var t=document.getElementById("volume").getBoundingClientRect(),e=(Ln.a.position.x-t.x)/t.width*100;e<5&&(e=0),e>95&&(e=100),window.youtubePlayer.setVolume(e)}}},{key:"onClickVolumeButton",value:function(){null!=window.youtubePlayer&&window.youtubePlayer.isMuted instanceof Function!=0&&window.youtubePlayer.unMute instanceof Function!=0&&window.youtubePlayer.mute instanceof Function!=0&&(window.youtubePlayer.isMuted()?window.youtubePlayer.unMute():window.youtubePlayer.mute())}},{key:"getVolumeRelativePosition",value:function(){if(null!=window.youtubePlayer&&null!=window.youtubePlayer.getVolume)return window.youtubePlayer.getVolume()/100}},{key:"getVolumeIcon",value:function(){if(null!=window.youtubePlayer&&window.youtubePlayer.isMuted instanceof Function!=0&&window.youtubePlayer.getVolume instanceof Function!=0){if(window.youtubePlayer.isMuted())return"volume_off";var t=window.youtubePlayer.getVolume();return t<=0?"volume_off":t>=50?"volume_up":"volume_down"}}},{key:"onClickPlayButton",value:function(){On.pauseplay()}},{key:"getCurrentTimeText",value:function(){var t=this.getCurrentTime();return t=Math.min(t,this.getTotalTime()),isNaN(t)&&(t=0),_n()(t)}},{key:"getTotalTimeText",value:function(){var t=this.getTotalTime();return isNaN(t)&&(t=0),_n()(t)}},{key:"getCurrentTime",value:function(){var t;return null==(null==un||null===(t=un.campaign)||void 0===t?void 0:t.music)?0:on(un.campaign.music)}},{key:"getTotalTime",value:function(){var t;return null==(null===(t=window.youtubePlayer)||void 0===t?void 0:t.getDuration)?0:1e3*window.youtubePlayer.getDuration()}}]),t}(),Mn=function(){function t(){Nn(this,t)}return Bn(t,[{key:"render",value:function(){return A("div",{class:"Timeline",id:"timeline",onClick:this.onClick},A("div",{class:"CurrentTime",style:this.getCurrentTimeStyle()},A("div",{class:"Dot"})),A("div",{class:"HoveredTime",style:this.getHoveredTimeStyle()},A("div",{class:"Timestamp"},A("span",null,this.getHoveredTimeText()))),A("div",{class:"TotalTime"}))}},{key:"onClick",get:function(){var t=this;return function(e){var n=t.getHoveredTime();nn.data.collection("campaigns").doc("theros").update({music:{key:un.campaign.music.key,runkey:un.campaign.music.runkey,youtubeId:un.campaign.music.youtubeId,startTime:Date.now()-n,state:"playing"}})}}},{key:"getHoveredTimeText",value:function(){var t=this.getHoveredTime();return isNaN(t)&&(t=0),_n()(t)}},{key:"getCurrentTimeStyle",value:function(){return{width:this.getCurrentTime()/this.getTotalTime()*100+"%"}}},{key:"getHoveredTimeStyle",value:function(){return{width:100*this.getHoveredRelativePosition()+"%"}}},{key:"getCurrentTime",value:function(){var t=on(un.campaign.music);return t=Math.min(t,this.getTotalTime()),isNaN(t)&&(t=0),t}},{key:"getTotalTime",value:function(){var t;return null==(null===(t=window.youtubePlayer)||void 0===t?void 0:t.getDuration)?0:1e3*window.youtubePlayer.getDuration()}},{key:"getHoveredRelativePosition",value:function(){if(null==document.getElementById("timeline"))return 0;var t=document.getElementById("timeline").getBoundingClientRect();return(Ln.a.position.x-t.x)/t.width}},{key:"getHoveredTime",value:function(){return this.getHoveredRelativePosition()*this.getTotalTime()}}]),t}();function Pn(t){return(Pn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Qn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Kn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,s=void 0,s=function(t,e){if("object"!==Pn(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==Pn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===Pn(s)?s:String(s)),r)}var i,s}function Gn(t,e,n){return e&&Kn(t.prototype,e),n&&Kn(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var Vn=function(){function t(){Qn(this,t)}return Gn(t,[{key:"render",value:function(){if(null!=un.campaign)return On.onLoad(),A("div",{class:"PlayScreen"},A(Jn,null),A(Fn,null))}}]),t}(),Jn=function(){function t(){Qn(this,t)}return Gn(t,[{key:"render",value:function(){if(null!=un.campaign)return A("div",{class:"Screenshot",onClick:this.onClick,style:{"background-image":"url(https://img.youtube.com/vi/"+un.campaign.music.youtubeId+"/maxresdefault.jpg)"}})}},{key:"onClick",value:function(){On.pauseplay()}}]),t}(),Hn=n(23);function Wn(t){return function(t){if(Array.isArray(t))return Yn(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return Yn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yn(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Yn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function zn(t){return(zn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Xn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Zn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,s=void 0,s=function(t,e){if("object"!==zn(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==zn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===zn(s)?s:String(s)),r)}var i,s}function $n(t,e,n){return e&&Zn(t.prototype,e),n&&Zn(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var tr=function(){function t(){Xn(this,t)}return $n(t,[{key:"render",value:function(){if(null!=un.campaign)return On.onLoad(),A("div",{class:"EditScreen"},A("div",{class:"PlayingPanel"},A("div",{class:"PlayBox"},A("div",{class:"YoutubeScreenshot",onClick:function(){return On.pauseplay()},style:{"background-image":"url(https://img.youtube.com/vi/"+un.campaign.music.youtubeId+"/default.jpg)"}}),A(Fn,null)),A(nr,null)),A("div",{class:"SearchPanel"},A(er,null),A("div",{class:"Playlists"},Hn.map((function(t){return A("div",{class:"Playlist"},A("a",{class:"PlaylistName",href:"https://www.youtube.com/playlist?list="+t.id,target:"_blank"},t.title),A("div",{class:"Musics"},t.musics.map((function(t){return A("div",{class:"Music",onClick:function(){nn.data.collection("campaigns").doc("theros").update({musics:un.campaign.musics.concat({key:Tn.a.generate(),youtubeId:t.youtubeId,title:t.title})})}},A("div",{class:"YoutubeScreenshot",style:{"background-image":"url(https://img.youtube.com/vi/"+t.youtubeId+"/default.jpg)"}}),A("div",{class:"Text"},t.title||t.youtubeId))}))))})))))}}]),t}(),er=function(){function t(){Xn(this,t)}return $n(t,[{key:"render",value:function(){return A("form",{class:"SubmissionForm",onSubmit:this.onSubmit},A("input",{name:"youtube",type:"text",placeholder:"put your youtube url here"}),A("input",{type:"submit"}))}},{key:"onSubmit",value:function(t){t.preventDefault();var e=t.target.children.youtube.value,n=(e=(e=e.split(",")).map((function(t){return t.trim()}))).map((function(t){return{key:Tn.a.generate(),youtubeId:rn(t),embeddedStartTime:sn(t)}}));(n=n.filter((function(t){return null!=t.youtubeId}))).forEach((function(t){Object.keys(t).forEach((function(e){null==t[e]&&delete t[e]}))})),n.length<=0||(null!=un.campaign.musics&&(n=un.campaign.musics.concat(n)),nn.data.collection("campaigns").doc("theros").update({musics:n}))}}]),t}(),nr=function(){function t(){Xn(this,t)}return $n(t,[{key:"render",value:function(){if(null!=un.campaign&&null!=un.campaign.musics)return A("div",{class:"Queue"},un.campaign.musics.map((function(t){return A(rr,{music:t})})),A("div",{class:"ClearAll",onClick:function(){nn.data.collection("campaigns").doc("theros").update({musics:[]})}},"Clear all?"))}}]),t}(),rr=function(){function t(){Xn(this,t)}return $n(t,[{key:"render",value:function(){return A("div",{class:"QueuedItem",onClick:this.onClickContent,isOnDeck:this.isOnDeck},A("div",{class:"YoutubeScreenshot",style:{"background-image":"url(https://img.youtube.com/vi/"+this.props.music.youtubeId+"/default.jpg)"}}),A("div",{class:"Text"},this.props.music.title||this.props.music.youtubeId),A("div",{class:"DeleteButton",onClick:this.onClickButton},A("span",{class:"material-icons"},"delete")))}},{key:"isOnDeck",get:function(){return un.campaign.music.key==this.props.music.key}},{key:"onClickContent",get:function(){var t=this;return function(e){nn.data.collection("campaigns").doc("theros").update({music:{key:t.props.music.key,runkey:Tn.a.generate(),youtubeId:t.props.music.youtubeId,startTime:Date.now(),state:"playing"}})}}},{key:"onClickButton",get:function(){var t=this;return function(e){e.stopPropagation(),nn.data.collection("campaigns").doc("theros").update({musics:ir(un.campaign.musics,t.props.music)})}}}]),t}();function ir(t,e){var n=t.indexOf(e);return-1==n?t:[].concat(Wn(t.slice(0,n)),Wn(t.slice(n+1)))}n(33),n(35),n(40),n(42),n(44);function sr(t){return(sr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function or(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,s=void 0,s=function(t,e){if("object"!==sr(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==sr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===sr(s)?s:String(s)),r)}var i,s}var ar=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"render",value:function(){if(null!=un.campaign)return A("div",{className:"Mount"},this.title,this.screen)}},{key:"title",get:function(){return A("title",null,"Bardic Inspiration")}},{key:"screen",get:function(){return"SplashScreen"==bn.state.screen?A(Sn,null):"PlayScreen"==bn.state.screen?A(Vn,null):"EditScreen"==bn.state.screen?A(tr,null):void 0}}])&&or(e.prototype,n),r&&or(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();new N.a((function(t){this.mount=O(A(ar,null),document.body,this.mount)}))}]);
//# sourceMappingURL=index.js.map