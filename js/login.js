$("#login_btn").click(function(){
	var pjy = $.cookie("userifo");
	if(pjy!=undefined){
		var user = JSON.parse($.cookie("userifo"));//获取存在cookie中的登录信息
		
		console.log(user);
		var userName = $("#username").val();
		var userped = $("#password").val();
		
		if(userName == user.usename || userName == user.email && userped == user.usepwd){
			location.href = "index.html";
		setCookie("loginname",userName,7);
		
		}else{
			alert('您输入的密码和用户名有误');
		}
	}else{
		alert("用户尚未注册，请注册");
		location.href = "register.html";
	}
})