$(function(){
	$(".quicka").mouseover(function(){
		$(".quick").css("display",'block');
		$(".quicka a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"1px -159px"
		})
	})
	$(".quicka").mouseout(function(){
		$(".quick").css("display",'none');
		$(".quicka a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"5px 8px"
		})
	})
	$(".quick").mouseover(function(){
		$(".quicka a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"1px -159px"
		})
	})
	$(".quick").mouseout(function(){
		$(".quicka a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"5px 8px"
		})
	})
	//我的步淘
	$(".my_bt").mouseover(function(){
		$(".my_bt_c").css("display",'block');
		$(".my_bt a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"1px -159px"
		})
	})
	$(".my_bt").mouseout(function(){
		$(".my_bt_c").css("display",'none');
		$(".my_bt a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"5px 8px"
		})
	})
	$(".my_bt_c").mouseover(function(){
		$(".my_bt a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"1px -159px"
		})
	})
	$(".my_bt_c").mouseout(function(){
		$(".my_bt a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"5px 8px"
		})
	})
	//关注我们
	$(".follow").mouseover(function(){
		$(".follow_c").css("display",'block');
		$(".follow a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"1px -159px"
		})
	})
	$(".follow").mouseout(function(){
		$(".follow_c").css("display",'none');
		$(".follow a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"5px 8px"
		})
	})
	$(".follow_c").mouseover(function(){
		$(".follow a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"1px -159px"
		})
	})
	$(".follow_c").mouseout(function(){
		$(".follow a span").css({
			"background":"url(../img/common/icon_top.png) no-repeat",
			"backgroundPosition":"5px 8px"
		})
	})
	
	//积分对换
	$(".integral").mouseover(function(){
		$(".integral_condition").css("display","block")
	})
	$(".integral").mouseout(function(){
		$(".integral_condition").css("display","none")
	})
	
	
//侧边栏点击事件
	
	$(".sidebar_a4").click(function(){
		var sidebar_right =parseFloat($(".sidebar").css("right"));
		console.log($(".sidebar").css("right"));
		if(sidebar_right<-10){
			$(".sidebar").stop().animate({"right":0},500);
		}else if(sidebar_right>-10){
			$(".sidebar").stop().animate({"right":-264},500);
		}
	
	})
	
//登录信息的获取与应用
var isOk = true;

var user = getCookie("loginname");
	if(user == ""){
		return;
	}else{
		isOk = false;		
		$("#users").click(function(){
			delCookie("loginname");			
			$("#users").html("您好，欢迎来到步淘生活商城！");
						
			$("#cancel").html("请登录");			
		})
			$("#users").html("");
			$("#users").html("注销");
				
			$("#cancel").html(user+"您好");
	}
		

	

		
	
	
	
	


})


//侧边栏购物车里物品信息的获取
var sider_shop = $.cookie("goods2");

if(sider_shop !=undefined){
	
	sider_good = JSON.parse(sider_shop);
	var ind1 = 0;
	for(var key in sider_good){
		var temp2 =  "<li><div class='sider_con_img'><img src='"+sider_good[key].goodsrc2+"'/></div>"+
		"<p>"+sider_good[key].goodName2+"</p><p>￥<span>"+sider_good[key].goodpirce2+"</span>X<i>"+
		sider_good[key].goodnum2+"</i></p></li>"
		$(".sider_con").append(temp2);
		ind1 = ind1 + sider_good[key].goodnum2;
	}
	if(ind1 == 0){
		$(".sidebar_img").show()
		$("#jiesuan").hide()
	}else{
		$(".sidebar_img").hide();
		$("#jiesuan").show()
	}
	
	$("#index_side_num").html(ind1);
	$(".num").html(ind1);
}







