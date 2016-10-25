

var pjy = $.cookie("goods2")
if(pjy != undefined){
	var shop_goods2 =JSON.parse($.cookie("goods2"));
}
	for(var i in shop_goods2){
		var univalent =parseInt(shop_goods2[i].goodpirce2 * shop_goods2[i].goodsale2/10);
		var discount =parseInt(shop_goods2[i].goodpirce2 - (shop_goods2[i].goodpirce2 * shop_goods2[i].goodsale2/10)).toFixed(2);
		var count = univalent * shop_goods2[i].goodnum2;
		var  temp1 = "<tr><td class='td1'><img src='"+shop_goods2[i].goodsrc2+"'/><p>"+shop_goods2[i].goodName2+"</p></td>"+
		"<td class='td2'><span><input id='inpn1' type='text' value='-' /><input id='inpn2' type='text' value="+shop_goods2[i].goodnum2+" />"+
		"<input id='inpn3' type='text' value='+' /></span></td><td class='td2' id='shop_td2'>"+shop_goods2[i].goodpirce2+"</td>"+
		"<td class='td2'>"+discount+"</td><td class='td2'>"+count+"</td><td class='td2'><button class='shop_btn'>删除</button></td>"+
		"<td><input class='checkbtn' type='checkbox'/></td></tr>";
		$("#shop_tbody").append(temp1);
	}
	var h1 = 0;
	var o1 = 0;
	for(var i = 0 ; i < $("#shop_tbody tr").length; i++){
		var o = parseInt($("#shop_tbody tr").eq(i).children().eq(4).html());
		var h = parseInt($("#shop_tbody tr").eq(i).children().eq(1).children().eq(0).children().eq(1).val());
		var h1 =h1+h;
		var o1 =o1+o; 
	}
	
	
	

var shop_num =parseInt($("#inpn2").val())+parseInt($("#inpn2").parent().parent().parent().siblings().children().eq(1).children().eq(0).children().eq(1).val());;
	$(".shop_num").html(h1);//购物车页面里的商品数量
	$(".num").html(h1);//页面顶部商品的数量	
	var shop_td2 = $("#shop_td2").html();
	var shop_tatoll = shop_td2 * shop_num;
	$(".shop_all_price").html(o1)



//减号时所执行的命令
$("#inpn1").live("click",function(){
	var inpn2 =parseInt($(this).next().val());
	if(inpn2 > 1){
		var inpn_2 = inpn2-1;
		$(this).next().val(inpn_2)
		//改变cookie中的值
		shop_goods2[$(this).parent().parent().next().html()].goodnum2 = inpn_2;
		var orign_sale = parseInt(shop_goods2[$(this).parent().parent().next().html()].goodpirce2*shop_goods2[$(this).parent().parent().next().html()].goodsale2/10);
			
		shop_goods2[$(this).parent().parent().next().html()].goodpirce3 = orign_sale  * inpn_2;
		$.cookie("goods2", JSON.stringify(shop_goods2), {expires: 7, path: "/"});
		
		
		$(this).parent().parent().siblings().eq(3).html(orign_sale  * inpn_2);
		var h1 = 0;
			var o1 = 0;
		for(var i = 0 ; i < $("#shop_tbody tr").length; i++){
			var o = parseInt($("#shop_tbody tr").eq(i).children().eq(4).html());
			var h = parseInt($("#shop_tbody tr").eq(i).children().eq(1).children().eq(0).children().eq(1).val());
			var h1 =h1+h;
			var o1 =o1+o; 
		}
		$(".num").html(h1);//页面顶部商品的数量	
		if($(this).parent().parent().siblings().eq(5).find("input").prop("checked")){
			$(".shop_num").html(h1);//购物车页面里的商品数量				
			$(".shop_all_price").html(o1)
		}
	}	
})
//加号时所执行的命令
$("#inpn3").live("click",function(){	
	var inpn2 =parseInt($(this).prev().val());
		var inpn_2 = inpn2+1;
		$(this).prev().val(inpn_2)
		//改变cookie中数量
		shop_goods2[$(this).parent().parent().next().html()].goodnum2 = inpn_2;
		var orign_sale = parseInt(shop_goods2[$(this).parent().parent().next().html()].goodpirce2*shop_goods2[$(this).parent().parent().next().html()].goodsale2/10);
			
		shop_goods2[$(this).parent().parent().next().html()].goodpirce3 = orign_sale  * inpn_2;
		$.cookie("goods2", JSON.stringify(shop_goods2), {expires: 7, path: "/"});
			
		
		$(this).parent().parent().siblings().eq(3).html(orign_sale  * inpn_2);
			var h1 = 0;
			var o1 = 0;
		for(var i = 0 ; i < $("#shop_tbody tr").length; i++){
			var o = parseInt($("#shop_tbody tr").eq(i).children().eq(4).html());
			var h = parseInt($("#shop_tbody tr").eq(i).children().eq(1).children().eq(0).children().eq(1).val());
			var h1 =h1+h;
			var o1 =o1+o; 
		}
		$(".num").html(h1);//页面顶部商品的数量
		
		if($(this).parent().parent().siblings().eq(5).find("input").prop("checked")){
			$(".shop_num").html(h1);//购物车页面里的商品数量				
			$(".shop_all_price").html(o1)
		}
})
//加减结束

//删除
$(".shop_btn").live("click",function(){
	$(this).parent().parent().remove();
	var pays = $.cookie("paycart")? JSON.parse($.cookie("paycart")) : {};
	
	pays[$(this).parent().siblings().eq(2).html()] = undefined;
	$.cookie("paycart",JSON.stringify(pays),{expires:7,path:"/"});
	
	shop_goods2[$(this).parent().siblings().eq(2).html()] = undefined;
	$.cookie("goods2", JSON.stringify(shop_goods2), {expires: 7, path: "/"});
	
		var h1 = 0;
			var o1 = 0;
		for(var i = 0 ; i < $("#shop_tbody tr").length; i++){
			var o = parseInt($("#shop_tbody tr").eq(i).children().eq(4).html());
			var h = parseInt($("#shop_tbody tr").eq(i).children().eq(1).children().eq(0).children().eq(1).val());
			var h1 =h1+h;
			var o1 =o1+o; 
		}
		$(".shop_all_price").html(o1)
		$(".shop_num").html(h1);//购物车页面里的商品数量
		$(".num").html(h1);//页面顶部商品的数量
		
		if($("#shop_tbody").height()>10){
			$(".tishi").hide();
			
		}else {
			$(".tishi").show();
			
		}
})
if($("#shop_tbody").height()>10){
	$(".tishi").hide();
	
}
//判断在购买的时候有没有登录
$(".again_buy a").eq(1).click(function(){
	$("#shop_tbody tr").each(function(){
		if($(this).children().last().find("input").prop("checked")){
			var pay_name = $(this).children().first().find("p").html();
			var pay_src = $(this).children().first().find("img").attr("src");
			var pay_num = parseInt($(this).children().eq(1).find("span input").eq(1).val());
			var pay_pirce1 = $(this).children().eq(2).html();
			var pay_sale = $(this).children().eq(3).html();
			var pay_pirce2 = $(this).children().eq(4).html();
			
			var pays = $.cookie("paycart")? JSON.parse($.cookie("paycart")) : {};
				if(pay_pirce1 in pays){
					pays[pay_pirce1].num++;
				}else{
			 pays[pay_pirce1] = {
				"payname":pay_name,
				"paysrc":pay_src,
				"paynum":pay_num,
				"paypirce1":pay_pirce1,
				"paysale":pay_sale,
				"paypirce2":pay_pirce2
				
			}
		
				$.cookie("paycart",JSON.stringify(pays),{expires:7,path:"/"});
			}
		}else{
			var pays = $.cookie("paycart")? JSON.parse($.cookie("paycart")) : {};
			pays[$(this).children().eq(2).html()] = undefined;
			$.cookie("paycart",JSON.stringify(pays),{expires:7,path:"/"});
		}
	})
	
	if($("#cancel").html()=="请登录"){
		location.href = "login.html";
	}else if($("#shop_tbody").height()>10&&$(".shop_num").html()!=0){
		location.href = "pay.html";
	}else if($("#shop_tbody").height()<10){
		alert("购物车里空空如也");
	}else if($(".shop_num").html()==0){
		alert("请勾选你需要购买的商品");
	}
})
//全选按钮

var dyy = $(".shop_head").find("th").eq(6).find("input");
dyy.prop("checked",true)
$('.checkbtn').prop("checked",true);
$(".shop_head").find("th").eq(6).find("input").change(function(){
	if(dyy.prop("checked")){
		$('.checkbtn').prop("checked",true);
			var h1 = 0;
			var o1 = 0;
		for(var i = 0 ; i < $("#shop_tbody tr").length; i++){
			var o = parseInt($("#shop_tbody tr").eq(i).children().eq(4).html());
			var h = parseInt($("#shop_tbody tr").eq(i).children().eq(1).children().eq(0).children().eq(1).val());
			var h1 =h1+h;
			var o1 =o1+o; 
		}
		$(".shop_all_price").html(o1);
		$(".shop_num").html(h1);
	}else{
		$('.checkbtn').prop("checked",false);
		$(".shop_all_price").html("0.00");
		$(".shop_num").html("0");
	}
})
$(".checkbtn").each(function(){
	$(this).click(function(){
		if($(this).prop("checked")==false){
			dyy.prop("checked",false);
			var cut_num = parseInt($(".shop_num").html())-parseInt($(this).parent().siblings().eq(1).find("span input").eq(1).val());
			var cut_pirce = parseInt($(".shop_all_price").html())-parseInt($(this).parent().prev().prev().html()); 
			$(".shop_all_price").html(cut_pirce);
			$(".shop_num").html(cut_num);
		}else{
			var cut_num = parseInt($(".shop_num").html())+parseInt($(this).parent().siblings().eq(1).find("span input").eq(1).val());
			var cut_pirce = parseInt($(".shop_all_price").html())+parseInt($(this).parent().prev().prev().html()); 
			$(".shop_all_price").html(cut_pirce);
			$(".shop_num").html(cut_num);
		}
	})
})
//购物车为空时的提示

