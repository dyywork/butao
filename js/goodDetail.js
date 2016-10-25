
//放大镜的设置	
	var boxs = document.getElementById('detail_box');
	var small = document.getElementById('small_img');
	var bord = document.getElementById('borders');
	var flo = document.getElementById('float_big');
	var big = document.getElementById('big_img');
	var big_pic = big.getElementsByTagName('img')[0];
	
	bord.onmouseover = function(){
		flo.style.display = "block";
		big.style.display = "block";
	}
	bord.onmouseout = function(){
		flo.style.display = "none";
		big.style.display = 'none';
	}
	bord.onmousemove = function(e){
		var evt = e || window.event;
		
		var left =evt.offsetX - flo.offsetWidth/2;
		var top = evt.offsetY - flo.offsetHeight/2;
		
		if(left < 0){
			left = 0;
		}else if(left > (bord.offsetWidth - flo.offsetWidth)){
			left = bord.offsetWidth - flo.offsetWidth;
		}
		if(top < 0){
			top = 0;
		}else if(top > bord.offsetHeight - flo.offsetHeight){
			top = bord.offsetHeight - flo.offsetHeight;
		}
		flo.style.left = left + 'px';
		flo.style.top = top + 'px';
		
		var bigX = left / (bord.offsetWidth - flo.offsetWidth);
		var bigY = top / (bord.offsetHeight - flo.offsetHeight);
		
		big_pic.style.left = -bigX *(big_pic.offsetWidth - big.offsetWidth) +'px';
		big_pic.style.top = -bigY * (big_pic.offsetHeight - big.offsetHeight) + 'px';
	}

	
	//倒计时的设置
	function adjust(num){
		if(num < 10){
			return "0" + num;
		}
		return num + "";
	}
	
	function leftTime(){
		var now = new Date();
		// 获取到端午的日期
		var dbf = new Date(2018, 5, 9);
		
		// 相减得到还剩多少毫秒
		var left = dbf - now;
		
		// 通过剩余的毫秒数计算天数、小时数、分钟数、秒数
		var multiDays = 1000 * 60 * 60 * 24;
		var days = Math.floor(left / multiDays);
		var tempDays = days * multiDays;
		var hours = Math.floor((left - tempDays) / 1000 / 60 / 60);
		var tempHours = hours * 1000 * 60 * 60;
		var minutes = Math.floor((left - tempDays - tempHours) / 1000 / 60);
		var tempM = minutes * 1000 * 60;
		var seconds = Math.floor((left - tempDays - tempHours - tempM)/1000);				
		var str = "仅剩<span>" + adjust(days) + "</span>天<span>" + adjust(hours) + "</span>小时<span>"  + adjust(minutes) + "</span>分钟<span>"  + adjust(seconds) + "</span>秒";
		$(".time_down").html(str);				
	}
	setInterval(leftTime, 500);
	

//选项卡的切换
$(".detail_evaluate_top ul li").click(function(){
	var n = $(this).index()/2;
	$(".detail_evaluate_top ul li").removeClass("detail_hover")
	$(this).addClass("detail_hover");	
	$(".ta").css("display","none")	
	$('.ta').eq(n).css("display", "block");	
})
//改变物品的图片，价格，名称等信息
var pjy = $.cookie("goods");
if(pjy!=undefined){
	var detailgoods = JSON.parse($.cookie("goods"));
		$(".detail_con h1").html(detailgoods.goodName);
		$("#small_img img").attr("src",detailgoods.goodsrc);
		$("#big_img img").attr("src",detailgoods.goodsrc);
		$(".detail_con_r h2 span").html(detailgoods.goodprice);
		$(".detail_con_r h2 b span").html(detailgoods.goodsale);
	var all_money =parseInt(detailgoods.goodprice/detailgoods.goodsale*10);
		$(".detail_con_r h2 i span").html(all_money.toFixed(2));
		$(".detail_big_img img").attr("src",detailgoods.goodsrc);
}


//弹出层的设置
function openNew(){
	//获取页面的高度和宽度
	var sWidth=document.body.scrollWidth;
	var sHeight=document.body.scrollHeight;
	
	//获取页面的可视区域高度和宽度
	var wHeight=document.documentElement.clientHeight;
	
	var oMask=document.createElement("div");
		oMask.id="mask";
		oMask.style.height=sHeight+"px";
		oMask.style.width=sWidth+"px";
		document.body.appendChild(oMask);
	
	//点击关闭按钮
	var oClose=document.getElementById("close");
	
		//点击登陆框以外的区域也可以关闭登陆框
	oMask.onclick=function(){
				
		document.body.removeChild(oMask);
		$(".shop_select_con").css("display","none");
	};
};
$(".d_b_2").click(function(){
	openNew();
	$(".shop_select_con").css("display","block");
})
$(".shop_select_top span").click(function(){
	
	$(".shop_select_con").css("display","none");
	$("#mask").remove();
})
//加减开始
$("#inp1").click(function(){
	var inp2 =parseInt($("#inp2").val());
	if(inp2 > 1){
		var inp_2 = inp2-1;
		$("#inp2").val(inp_2)
	}	
})
$("#inp3").click(function(){
	var inp2 =parseInt($("#inp2").val());
		var inp_2 = inp2+1;
		$("#inp2").val(inp_2)	
})
//加减结束

$("#border_color li").click(function(){
	$("#border_color li").removeClass("select_li_bg");
	$(this).addClass("select_li_bg");
})
$("#border_color1 li").click(function(){
	$("#border_color1 li").removeClass("select_li_bg");
	$(this).addClass("select_li_bg");
})
//加入购物车存入相关的信息进入cookie；

goCar("#select_footer_btn");
goCar(".d_b_1");

function goCar(gokey){
$(gokey).click(function(){
	var name2 = $(".detail_con").find("h1").text();
	var pirce4 = parseInt($(".detail_con_r h2").find("span").eq(0).text());
	var pirce3 = parseInt($(".detail_con_r h2").find("span").eq(0).text());
	var pirce2 =parseInt($(".detail_con_r h2 i").find("span").eq(0).text()).toFixed(2);
	var sale2 = $(".detail_con_r b").find("span").eq(0).text();
	var num2 =parseInt($("#inp2").val());
	var src2 = $("#small_img img").attr("src");
	console.log(pirce3);
	var goods2 = $.cookie("goods2")? JSON.parse($.cookie("goods2")) : {};
	if(pirce2 in goods2){
		goods2[pirce2].num++;
	}else{
		goods2[pirce2] = {
			"goodName2":name2,
			"goodpirce2":pirce2,
			"goodsale2":sale2,
			"goodnum2":num2,
			"goodsrc2":src2,
			"goodpirce3":pirce4
		}
		//console.log(goods2[pirce3])
	}
	$.cookie("goods2", JSON.stringify(goods2), {expires: 7, path: "/"});
	
})
}




