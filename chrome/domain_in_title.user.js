// ==UserScript==
// @name            Domain in title
// @description     Show current domain name in page title
// @author          CupIvan <mail@cupivan.ru>
// @date            01.03.2016
// @version         1.0
// @include         *://*/*
// ==/UserScript==

setInterval(f=function(){
	var t = document.title;
	var d = document.location.hostname;
	if (t.indexOf(d) != -1) return;
	document.title += ' `'+d+'`';
}, 5000);
f();
