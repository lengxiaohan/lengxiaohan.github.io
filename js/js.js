$(function(){
	//浣滃搧鍒楄〃
	var s = 0;
	var n=1;
	$('.right>ul>li').click(function(event) {
		$(this).addClass('Active').siblings().stop().removeClass('Active')
		s = $(this).index()
		$('.right ol li').eq(s).addClass('ACtive').siblings().removeClass('ACtive')
	});
	//鍏抽棴浣滃搧鍒楄〃
	$(".shut").click(function(event) {
		$("#main-a .right ol").removeClass('animated flipInY').animate({"height":"0px"}, 1000,function(){
			$(this).css({"display":"none"})
		})
		//$('#main-a .right ol').addClass('flipOutY')
		// if($('#main-a .right ol').hasClass('animated') && $('#main-a .right ol').hasClass('flipOutY') && $('#main-a .right ol').hasClass('flipInY')){
			// setInterval(function(){
			// 	$('#main-a .right ol').removeClass('animated flipInY flipOutY').css({"display":"none"});
		 // 	}, 2000)
		// }
	});
	//鏄剧ずol浣滃搧鍒楄〃
	$('.right>ul>li span,img').click(function(event) {
		$('.right ol').css({"height":"580px"}).addClass('animated flipInY').css({"display":"block"})
	});

	$('.button-a').click(function(event) {
		$('.square').addClass('active');
		$('#main-a').animate({'opacity':0},3000)
		$('#main-b').css({'zIndex':6}).animate({'width':1000,'opacity':1},3000)
	});
	$('.button-b').click(function(event) {
		$('#main-a').animate({'opacity':1},3000)
		$('#main-b').css({'zIndex':6}).animate({'width':0,'opacity':0},3000,function(){
			$('.square').removeClass('active');
		})
		
	});
	

	//浜旇鏄�
	$(".pentagram img").click(function(event) {
		$(this).attr("src","images/w2.png");
	});

	//CV
	$("#main-b .Resume li").click(function(event) {
		var oIndex=$(this).index()
		$("#main-b ol li").eq(oIndex).stop().animate({"height":500}, 1500).css({
			display: 'block',
		});
		$("#main-b ol li i").click(function(event) {
			$("#main-b ol li").stop().animate({"height":0}, 1500,function(){
				$(this).css({"display":"none"})
			});
		});
	});
	
})
var browser_class = navigator.userAgent;
var browser_class_name1 = browser_class.match("Mobile");
var browser_class_name2 = browser_class.match("mobile");
var location_url = window.location.href;
if (browser_class_name1 != null || browser_class_name2 != null) {
 if (location_url.match("wap") == null) {
  window.location.href = "http://file.ih5.cn?nid=3495740&key=cc841c2e19&title=5bCP5riF5paw6aOO55u45YaM&html5=true&width=640";
 }
} else {
 if (location_url.match("3g") != null || location_url.match("wap") != null) {
  window.location.href = "http://file.ih5.cn?nid=3495740&key=cc841c2e19&title=5bCP5riF5paw6aOO55u45YaM&html5=true&width=640";
 }
}