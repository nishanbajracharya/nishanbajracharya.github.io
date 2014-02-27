/* Empty For Now */
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>200){

		}else{
			
		}
	})
	$("#archive-nav ul li ul li").click(function(){
		$("#archive-nav ul li #year").text($(this).text());
	})
	$("span.art-link-all").click(function(){
		$("#article-view").fadeOut(200);
		$("#article-list").delay(200).fadeIn(200);
		loadIframe(NULL);
	})
	$("a.art-link").click(function(e){
		$link = $(this).attr('href');
		e.preventDefault();
		$("#article-list").fadeOut(200);
		$("#article-view").delay(200).fadeIn(200);
		loadIframe($link)
	})
	function getDocHeight(doc) {
		doc = doc || document;
		var body = doc.body, html = doc.documentElement;
		var height = Math.max( body.scrollHeight, body.offsetHeight, 
			html.clientHeight, html.scrollHeight, html.offsetHeight );
		return height;
	}
	function setIframeHeight(id) {
		var ifrm = document.getElementById(id);
		var doc = ifrm.contentDocument? ifrm.contentDocument:ifrm.contentWindow.document;
		ifrm.style.visibility = 'hidden';
		//ifrm.style.height = "10px";
		ifrm.style.height = getDocHeight(doc) + 4 + "px";
		ifrm.style.visibility = 'visible';
	}
	function loadIframe(url) {
		var $iframe = $('#article-view');
		if ( $iframe.length ) {
			$iframe.attr('src',url); 
			return false;
		}
		return true;
	}
	var ifr=document.getElementById('article-view');
    ifr.onload=function(){
        setIframeHeight('article-view')
    };
})