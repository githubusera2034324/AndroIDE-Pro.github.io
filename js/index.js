setConfig();setVersion();setContact();setLinks();
function setConfig(){ajax("GET","https://api.aidepro.top/web",!1,!1,function(a,b){if(a&&200==b.code){var c=b.data;a=c.icon;b=c.name;var d=c.desc,g=c.keyword,e=c.author,f=c.copyright,k=c.cover,l=c.screenshot;c=c.info;document.querySelector('link[rel="shortcut icon"]').src=a;document.title=b;document.querySelector("meta[name=description]").content=d;document.querySelector("meta[name=keywords]").content=g;document.querySelector("meta[name=author]").content=e;document.querySelector("meta[name=copyright]").content=
f;document.querySelector(".oiEt0d").src=k;document.querySelector(".T75of.cN0oRe.fFmL2e").src=a;document.querySelector(".T75of.QhHVZd").src=a;document.querySelector(".Vbfug.auoIOc").innerText=b.replace("AIDE","");document.querySelector(".ulKokd").innerText=d;setScreenshot(l);document.querySelector(".bARER>html-blob").innerHTML=replaceNewline(c);document.querySelector(".yVZQTb").innerText="Powered By "+f}})}
function setScreenshot(a){for(var b="",c=0;c<a.length;c++)b+='<div class="ULeU3b Utde2e">\t\t<div class="Atcj9b">\t\t<img src="'+a[c]+'" class="T75of B5GQxf">\t\t</div>\t\t</div>';document.querySelector(".aoJE7e.qwPPwf").innerHTML=b}
function setVersion(){ajax("GET","https://api.aidepro.top/version/last",!1,!1,function(a,b){if(a&&200==b.code){a=b.data;b=a.updateLog;var c=a.downloadUrl,d=a.fileSize;setInfo(a.versionName,"9999+",stampToDate(1E3*a.updateTime,"Y-m-d"));document.querySelector(".VAgTTd.LMcLV>div>div>div>a").innerText="\u83b7\u53d6("+bytesToSize(d)+")";document.querySelector(".u4ICaf.fg1d2g>div>a").href=c;document.querySelector(".VAgTTd.LMcLV>div>div>div>a").href=c;document.querySelector("c-wiz>section>.SfzRHd").innerHTML=
replaceNewline(b)}})}function setInfo(a,b,c){var d=document.querySelectorAll(".w7Iutd>.wVqUob>.ClM7O");d[0].innerText=a;d[1].innerText=b;d[2].innerText=c}function setContact(){ajax("GET","https://api.aidepro.top/contact",!1,!1,function(a,b){a&&200==b.code&&_setContact(b.data)})}
function _setContact(a){var b=document.querySelectorAll(".o45e4d>c-wiz>section>div>.vfQhrf.BxIr0d>div>div>a>.pZ8Djf>.pSEeg"),c=document.querySelectorAll(".o45e4d>c-wiz>section>div>.vfQhrf.BxIr0d>div>div>a");b[0].innerText=a.source[0];c[0].href=a.source[1];b[1].innerText=a.email[0];c[1].href=a.email[1];b[2].innerText=a.group[0];c[2].href=a.group[1];b[3].innerText=a.guild[0];c[3].href=a.guild[1]}
function setLinks(){ajax("GET","https://api.aidepro.top/links",!1,!1,function(a,b){a&&200==b.code&&addLinks(b.data)})}
function addLinks(a){for(var b="",c=0;c<a.length;c++)b+='<div class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-INsAgc VfPpkd-LgbsSe-OWXEXe-dgl2Hf Rj2Mlf OLiIxf PDpWxe P62QJc LQeN7 LMoCf">\t\t<span class="VfPpkd-vQzf8d">'+a[c].name+'</span>\t\t<a class="WpHeLc VfPpkd-mRLv6 VfPpkd-RLmnJb" target="_blank" href="'+a[c].url+'"></a>\t\t</div>';document.querySelector(".Uc6QCc>div").innerHTML=b}
function bytesToSize(a){if(0===a)return"0 B";var b=Math.floor(Math.log(a)/Math.log(1024));return(a/Math.pow(1024,b)).toPrecision(5)+" "+"B KB MB GB TB PB EB ZB YB".split(" ")[b]}function stampToDate(a,b){b=b||"Y-m-d";var c=function(h){return 10>h?"0"+h:h};a=a?new Date(a):new Date;var d=a.getFullYear(),g=c(a.getMonth()+1),e=c(a.getDate()),f=c(a.getHours()),k=c(a.getMinutes()),l=c(a.getSeconds());return b.replace(/Y|m|d|H|i|s/ig,function(h){return{Y:d,m:g,d:e,H:f,i:k,s:l}[h]})}
function replaceNewline(a){a=a.replace(/(\r\n|\n|\r)/g,"<br/>");return a=a.replace(/(\\r\\n|\\n|\\r)/g,"<br/>")}function ajax(a,b,c,d,g){var e=new XMLHttpRequest;e.open(a,b,!0);if(d)for(var f in d)e.setRequestHeader(f,d[f]);else e.setRequestHeader("Content-type","application/x-www-form-urlencoded");e.send(c);e.onloadend=function(){g(!0,JSON.parse(this.responseText))};e.onerror=function(){g(!1,"")}};