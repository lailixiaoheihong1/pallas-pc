"use strict";(self.webpackChunk_quansitech_pallas_pc=self.webpackChunk_quansitech_pallas_pc||[]).push([[552],{13552:function(T,c,a){a.r(c);var h=a(15009),o=a.n(h),v=a(97857),b=a.n(v),E=a(99289),i=a.n(E),p=a(44559);c.default={upload:function(){var n=i()(o()().mark(function l(r,f,e){var u,t,d,j,m,g,y,D,O;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(u=new FormData,t=new URLSearchParams(f),e&&t.append("hash_id",e),d=r.type,d){_.next=8;break}return _.next=7,p.Z.getFileType.start(r);case 7:d=_.sent;case 8:return t.append("vendor_type","tengxun_cos"),t.append("file_type",d),t.append("title",r.name),_.next=13,fetch(decodeURIComponent(t.toString()));case 13:return j=_.sent,_.next=16,j.json();case 16:if(m=_.sent,parseInt(m.status)!==2){_.next=19;break}return _.abrupt("return",{file_id:m.file_id,url:m.file_url});case 19:g=b()({"Content-type":d},m.params);for(y in g)u.append(y,g[y]);return u.append("file",r),_.next=24,fetch(m.url,{method:"POST",body:u});case 24:return D=_.sent,_.next=27,D.json();case 27:return O=_.sent,_.abrupt("return",O);case 29:case"end":return _.stop()}},l)}));function s(l,r,f){return n.apply(this,arguments)}return s}()}},44559:function(T,c,a){var h=a(15009),o=a.n(h),v=a(99289),b=a.n(v),E={getFileType:{fileToArrayBuffer:function(){var i=b()(o()().mark(function n(s,l){var r;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=new FileReader,r.onload=function(u){if(typeof l=="function")return l(u.target.result)},r.readAsArrayBuffer(s);case 3:case"end":return e.stop()}},n)}));function p(n,s){return i.apply(this,arguments)}return p}(),getFileTypeViaHeader:function(p){for(var n=new Uint8Array(p),s=n.slice(0,4),l=n.slice(0,16),r="",f="",e,u=0;u<s.length;u++)r+=s[u].toString(16);for(var t=0;t<l.length;t++)f+=l[t].toString(16);switch(r){case"89504e47":e="image/png";break;case"47494638":e="image/gif";break;case"ffd8ffDB":case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":case"ffd8ffe3":case"ffd8ffe8":e="image/jpeg";break;case"00020":case"00018":case"00024":case"0001c":f.lastIndexOf("000")===22?e="image/heic":e="unknown";break;default:e="unknown";break}return e},start:function(){var i=b()(o()().mark(function n(s){var l,r;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=this,r=new Promise(function(u){l.fileToArrayBuffer(s,function(t){var d=l.getFileTypeViaHeader(t);u(d)})}),e.abrupt("return",r);case 3:case"end":return e.stop()}},n,this)}));function p(n){return i.apply(this,arguments)}return p}()},getSuffix:function(p){var n=p.lastIndexOf("."),s="";return n!==-1&&(s=p.substring(n)),s}};c.Z=E}}]);
