if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>i(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/117-c5ec62dc8832f1d0.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/280-16770dc8b5e840e6.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/36bcf0ca-c1cc775f3dda75c9.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/447-8b628ae37fe1e9bb.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/61-2410b03952e5ae1f.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/667-92fdf33f5d761568.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/883-b4f6a47baf04deee.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/main-227e205eee84911a.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/404-81b193b04c330c93.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/_app-1087f990f0cb9688.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/contact-daf5a718816f78b7.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/forgotPassword-1167e43b9f3e41a1.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/index-c5cf2446ea602b89.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/login-c70af9bb22dd221d.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/markets-84b615c15762fcdf.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/notifications-50122f44994dfa1e.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/profile-1b05024189c37fa7.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/register-399bebd89f87c0ae.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/settings-c5990befa4c77e48.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/wallet-56624963cfd90f57.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/pages/withAuth-a2501637ff0dacdf.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/chunks/webpack-d7b038a63b619762.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/css/f08c779c307a401c.css",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/iguWhvQ0lZmBMYgL1mKft/_buildManifest.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/iguWhvQ0lZmBMYgL1mKft/_middlewareManifest.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/iguWhvQ0lZmBMYgL1mKft/_ssgManifest.js",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/media/arrow-down-sign-to-navigate.5fab381f.svg",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/_next/static/media/bg-demo.e35c9b06.jpg",revision:"iguWhvQ0lZmBMYgL1mKft"},{url:"/bg-demo.jpg",revision:"c9fa46f1006398449f63a532311840ad"},{url:"/error.png",revision:"e577fdbb5bd6e8c59f82608a64a37152"},{url:"/favicon.png",revision:"ab27568deca92efb7af31c98ff7121d6"},{url:"/icons/arrow-down-sign-to-navigate.svg",revision:"8592ec2b7e586d9781153df33931a282"},{url:"/icons/bitcoin.png",revision:"096e1318a9ea1982f4993bb9025f676d"},{url:"/icons/icon-128x128.png",revision:"cae4753b359e9ad79aaa541e535440a4"},{url:"/icons/icon-144x144.png",revision:"a44853e84fdaedb3cca0b280cd6dc697"},{url:"/icons/icon-152x152.png",revision:"6e7e1ebf2c185903e00139eec84c4e08"},{url:"/icons/icon-16x16.png",revision:"ed63bcba0cef1a590e4ed8742eb40571"},{url:"/icons/icon-192x192.png",revision:"60a86964d6ba38bf7eb4f0e8df29d35c"},{url:"/icons/icon-32x32.png",revision:"a6b3d9ade518c33e7a325fc3ec1d081d"},{url:"/icons/icon-384x384.png",revision:"f5f17a621528a2420fbccfa02b89dd99"},{url:"/icons/icon-512x512.png",revision:"99411052b1f987447e235688b841aa7f"},{url:"/icons/icon-72x72.png",revision:"f4fcc57d842585f90310e403ca1d983f"},{url:"/icons/icon-96x96.png",revision:"2bf424c77fdd45d52d64c68914614859"},{url:"/logo.png",revision:"afeba414bc211599de30730eaee5b882"},{url:"/manifest.json",revision:"ac2bc692b15a60db391815cdf073e62f"},{url:"/news/img1.jpg",revision:"ad9eec24879473a7d9435cfdf21a8fc0"},{url:"/news/img2.jpg",revision:"a0d373984b1827b99a95b314267fe274"},{url:"/news/img3.jpg",revision:"c088c120325426334371a3669fa935d0"},{url:"/news/img4.jpg",revision:"9a4fb26037fbf06ecd68d7257e22243b"},{url:"/news/img5.jpg",revision:"a401af9fcca3d0f03705b3f7e95977fc"},{url:"/news/img6.jpg",revision:"478af3a3e2190e4d178cd3d96dfad55a"},{url:"/news/img7.jpg",revision:"5feaa5dad9e02ccbe218517388999f3e"},{url:"/qr-code.png",revision:"fa8218ef6bd64a2b0031b01845b6631d"},{url:"/users/user-1.jpg",revision:"9a0f514cc063f1d86412c18ce0e64457"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
