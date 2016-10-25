
function ajax(url, sucFn, failFn){

	if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	} else {
		var xhr = new ActiveXObject("Msxml2.XMLHTTP");
	}
	
	xhr.open("GET", url, true);
	
	xhr.onreadystatechange = function (){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				sucFn(xhr.responseText);
			} else {
				if(failFn){
					failFn(xhr.status);
				}else{
					alert("请求发生错误，错误码是：" + xhr.status);
				}
			}
		}
	}
	
	xhr.send();
}
