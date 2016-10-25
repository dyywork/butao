//支付页面的购物车内容的设置
var pay_pjy = $.cookie("paycart")
if(pay_pjy != undefined){
	var pay_goods =JSON.parse($.cookie("paycart"));
}
for(var key in pay_goods){	
	var temp3 = "<tr><td><div class='pay_img'><img src='"+pay_goods[key].paysrc+"'/></div><p>"+pay_goods[key].payname+"</p>"+
	"</td><td>"+pay_goods[key].paynum+"</td><td>"+pay_goods[key].paypirce1+"</td><td>"+pay_goods[key].paysale+"</td><td>"+
	pay_goods[key].paypirce2+"</td>"
	$(".pay_tbody").append(temp3);
}
	var h1 = 0;
	var o1 = 0;
	for(var i = 0 ; i < $(".pay_tbody tr").length; i++){
		var o = parseInt($(".pay_tbody tr").eq(i).children().eq(4).html());
		var h = parseInt($(".pay_tbody tr").eq(i).children().eq(1).children().eq(0).children().eq(1).val());
		var h1 =h1+h;
		var o1 =o1+o; 
	}
	$(".tfoot_td1").find("span").html(o1);
	$(".tfoot_td2").find("b").html(o1);
//选择城市的设置
	var allCity;
	if(XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	}else{
		var xhr = new ActiveXObject("msxml2,XMLHTTP");
	}
	xhr.open("GET","http://127.0.0.1:8020/butao/data/common/allCity.json",true);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				allCity = JSON.parse(xhr.responseText);
				show();
			}else{
				alert("请求出现错误" + xhr.status);
			}
		}
	}
	xhr.send();

	var sel = $(".pay_select select").get();
	function show(){
		var provinces = allCity.regions;
		for(var i = 0;i < provinces.length; i++){
			var opt = document.createElement('option');
			opt.innerHTML = provinces[i].name;
			sel[0].appendChild(opt);
		}
		
		sel[0].onchange = function(){
			show2(this.value);
		}
	}
	
	function show2(prov){
		var provinces = allCity.regions;
		for(var i = 0; i < provinces.length; i++){
			if(provinces[i].name == prov){
				var cities = provinces[i].regions;
				sel[1].innerHTML = "<option>请选择地市</option>";
				sel[2].innerHTML = "<option>请选择区县</option>";
				for(var j = 0; j < cities.length; j++){
					var opt = document.createElement('option');
					opt.innerHTML = cities[j].name;
					sel[1].appendChild(opt);
				}
				break;
			}
			
		}
		sel[1].onchange = function(){
			show3(prov,this.value);
		}
	}
	function show3(prov,city){
		var provinces = allCity.regions;
		for(var i = 0 ; i < provinces.length; i++){
			if(provinces[i].name == prov){
				var cities = provinces[i].regions;
				for(var j = 0; j　< cities.length; j++){
					if(cities[j].name == city){
						var counties = cities[j].regions;
						
						for(var k = 0 ; k < counties.length; k++){
							var opt = document.createElement('option');
							opt.innerHTML = counties[k].name;
							sel[2].appendChild(opt);
						}
						break;
					}
					
				}
				break;
			}
			
		}
	}