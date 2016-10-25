//轮播图开始
$(function(){
	var container = document.getElementById('container');
	var list = document.getElementById("list");
	var btns = $("#btn span").get();	
	rts = $("#rt").get(0);
	var lt = document.getElementById("lt");
	var index = 1;
	var wait = false;
	var timer;
	function btn() {
		for (var i = 0; i < btns.length; i++) {
			if (btns[i].className == 'on') {
				btns[i].className = '';
				break;
			}
		}
		btns[index - 1].className = 'on';
	}

	function getStyle(dom, property) {
		if (dom.currentStyle) {
			return dom.currentStyle[property];
		} else {
			return getComputedStyle(dom)[property];
		}
	}

	function change(offset) {

		wait = true;
		
		var time = 300;
		var times = 20;

		
		var target = list.offsetLeft + offset;

		function move() {
			clearInterval(timers);

			var current = parseInt(getStyle(list, 'left'));

			var dis = target - current;
			var speed = dis > 0 ? Math.ceil(dis / 10) : Math.floor(dis / 10);

			if ((speed > 0 && list.offsetLeft < target) || ((speed < 0 && list.offsetLeft > target))) {

				list.style.left = current + speed + 'px';
				setTimeout(move, times);
			} else {
				wait = false;
				list.style.left = target + "px";
				if (target > -1000) {
					list.style.left = -3000 + "px";
				}
				if (target < -3000) {
					list.style.left = -1000 + "px";
				}
			}
		}
		timers = setInterval(move, 30);
	}

	function play() {
		timer = setInterval(function() {
			
			$("#rt").click()
		}, 3000)
	}

	function stop() {
		clearInterval(timer);
	}
	
	$("#rt").click(function(){
		if (!wait) {
			if (index == 3) {
				index = 1;
			} else {
				index += 1;
			}
			change(-1000);
			btn();
		}
		})
	
	$("#lt").click(function(){
		if (!wait) {
			if (index == 1) {
				index = 3;
			} else {
				index -= 1;
			}
			change(1000);
			btn();
		}
		})
	

	for (var i = 0; i < btns.length; i++) {
		btns[i].onclick = function() {
			if (this.classname == 'on') {
				return;
			}
			var dot = parseInt(this.getAttribute("index"));

			offset = (dot - index) * -1000;
			console.log((dot - index));
			if (!wait) {
				change(offset);
				index = dot;
				btn();
			}
		}

	}
	container.onmouseover = stop;
	container.onmouseout = play;

	play();
	

//轮播图结束

//内容的加载
var url = "http://127.0.0.1:8020/butao/data/index/index.json"
function suc(res){
	var hot_josn = JSON.parse(res);
	var josn = hot_josn.hot;
	var josn_g = hot_josn.girl;
	var josn_b = hot_josn.boy;
	var josn_shoes = hot_josn.shoes;
	var hot_div = $(".hot_content ul").get(0);
	var girl_div = $(".bcon ul").get(0);
	var boy_div = $(".boy_bcon ul").get(0);
	var shoes_div = $(".shoes_bcon ul").get(0);
		
	show(josn,hot_div);
	show(josn_g,girl_div);
	show(josn_b,boy_div);
	show(josn_shoes,shoes_div)
}
ajax(url,suc);

function show(name,DOM){
		for(var i = 0 ; i < name.length;i++){
		var oDiv = DOM;
		var cash = parseInt(name[i].sale/10*name[i].price);
		
		lis = document.createElement("li");
		oDiv.appendChild(lis);
		hcImg = document.createElement("div");
		hcImg.className = "h_c_img";
		lis.appendChild(hcImg);
		hcImg_a = document.createElement("a");
		hcImg.appendChild(hcImg_a);
		a_img = document.createElement("img");
		a_img.src = name[i].src;
		hcImg_a.appendChild(a_img);
		a_li = document.createElement("a");
		a_li.className = "line_h26";
		a_li.innerHTML = name[i].name;
		lis.appendChild(a_li);
		settle = document.createElement("div");
		settle.className = "settle";
		lis.appendChild(settle);
		s_h2 = document.createElement('h2');
		s_h2.innerHTML ="￥<span>"+ cash+"</span>.00";
		settle.appendChild(s_h2);
		s_p = document.createElement("p");
		settle.appendChild(s_p);
		p_i = document.createElement("i");
		p_i.innerHTML ="￥"+ name[i].price;
		s_p.appendChild(p_i);
		p_span = document.createElement("span");
		p_span.innerHTML ="<label>"+ name[i].sale+"</label>折";
		s_p.appendChild(p_span);
		p_br = document.createElement("br");
		s_p.appendChild(p_br);
		p_b = document.createElement("b");
		p_b.innerHTML = "新品上市";
		s_p.appendChild(p_b);
		settle_img = document.createElement("div");
		settle_img.className = "settle_img"
		lis.appendChild(settle_img);
		s_i_a = document.createElement('a');
		settle_img.appendChild(s_i_a);
		s_i_a_i = document.createElement('img');
		s_i_a_i.src = name[i].buyimg;
		s_i_a.appendChild(s_i_a_i);
		}
	}

//获取当前点击或去页面信息存入cookie		
	goods(".hot_content");
	goods(".bcon");
	goods(".boy_bcon");
	goods(".shoes_bcon");
function goods(className){
	

	$(className).find("ul").on("click","li",function(){
		var src1 = $(this).find(".h_c_img a img").attr("src");
		var name1 = $(this).find(".line_h26").text();
		var price1 = $(this).find(".settle h2 span").text();
		var sale1 = $(this).find(".settle p span label").text()
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

				
}


//楼梯开始

	$(".td").click(function(){	
		$(this).addClass("rn"+($(this).index()+4));
		var tops = $(".louti").eq($(this).index()).offset().top;
		
		$("html body").scrollTop($(".louti").eq($(this).index()).offset().top);
	})	
	$(window).scroll(function(){
		var topscroll = $(this).scrollTop();						
		$(".louti").each(function(){
			if(topscroll >= $(this).offset().top&&topscroll<= $(this).offset().top + $(this).height()-50){
				$(".td").eq($(this).index()-4).addClass("rn"+$(this).index());					
			}else{
				$(".td").eq($(this).index()-4).removeClass("rn"+$(this).index());
			}
		})		
	})

	$(".rm6").click(function(){
		$("html body").scrollTop(0);
	})

//楼梯结束







})