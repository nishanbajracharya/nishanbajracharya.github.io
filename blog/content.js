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
})