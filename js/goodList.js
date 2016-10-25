//分页的下一页
$("button").eq(1).click(function(){
	$(".goods ul").html("");
var	page = $(".p_bg").index(".page a");
	++page;
	if(page<5){
		$(".page a").removeClass("p_bg");
		$(".page a").eq(page).addClass("p_bg");
		page = $(".p_bg").index(".page a");
		var pag = "id"+(page+1);
		pageshow(pag)		
	}else{
		pag = "id5";
		pageshow(pag)
	}
})
//分页的下一页
$("button").eq(0).click(function(){
	$(".goods ul").html("");
	var page1 = $(".p_bg").index(".page a");//获取当前有class名.p_bg的下标
	page1--;
	if(page1>=0){
		$(".page a").removeClass("p_bg");
		$(".page a").eq(page1).addClass("p_bg");
		page1 = $(".p_bg").index(".page a")
		var pag = "id"+(page1+1);
		pageshow(pag)
	}else if(page1<0){
		var pag = "id1";
		pageshow(pag)
	}
})


//分页点击第几页
	$(".page a").click(function(){
		$(".page a").removeClass("p_bg");
		$(this).addClass("p_bg");
		$(".goods ul").html("");
		var nu = "id"+($(this).index());//nu = id几
		pageshow(nu);
	})
//封装加载ajax中的第几页，传入参数为第几页，在JOSN文件中的数据
function pageshow(nu){
	$.ajax({
		type:"get",
		url:"../data/goodList/goodList.json",
		async:true,
		success:function(data){
			var tem = data[nu];//tem = data.id1
			for(var key in tem){
				var buy = parseInt(tem[key].orgin*tem[key].sale/10);
				$(".goods ul").append("<li>"+"<h2><a href='javascript:;'>"+tem[key].name+"</a></h2>"+
				"<div class='goods_img'><img src='"+tem[key].src+"'/></div><div class='goods_buy'><span>"+
				"￥<label>"+buy+"</label>.00"+"</span><a href='javascript:;'></a></div><p>原价:<b>"+"￥"+tem[key].orgin+
				".00</b> <i>折扣<span>"+tem[key].sale+"</span>折</i></p>"+				
				"</li>")
			}
		}
	})
}




//吸顶效果
$(window).scroll(function(){
	if($(window).scrollTop() > $(".goodlist_zhe").offset().top){
		$(".ceiling").css("display","block");
	}else{
		$(".ceiling").css("display","none");
	}
})


//添加到详情页
$(".goods").find("ul").on("click","li",function(){
		var src1 = $(this).find(".goods_img img").attr("src");
		var name1 = $(this).find("h2 a").text();
		var price1 = $(this).find(".goods_buy span label").text();
		var sale1 = $(this).find("p span").text()
		console.log(sale1)
		var goods1 = {
			"goodName":name1,
			"goodsrc":src1,
			"goodprice":price1,
			"goodsale":sale1
		}
		$.cookie("goods", JSON.stringify(goods1),{expires:7,path:"/"});
		console.log($.cookie("goods"));
		window.location.href = "goodDetail.html";
	})


