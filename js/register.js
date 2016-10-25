//判断输入的格式是不是正确
$("#email").blur(function(){
	var email = $("#email").val();
	//判断输入邮箱的格式是否正确
	var tr_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/	
	if(!(tr_email.test(email))){
		alert("邮箱格式输入错误");
	}
})
$("#phone").blur(function(){
	var phone = $("#phone").val();
	//判断输入的手机号格式是否正确
	var tr_phone =/^[1][358][0-9]{9}$/
	if(!(tr_phone.test(phone))){
		alert("输入手机号格式有误")
	}
})


//判断两次密码是否一样，存进cookie里相应的信息
$("#regiser_btn").click(function(){
	var pass = $("#passwd").val();
	var againpwd = $("#againpwd").val();
	//判断两次密码输入是否一致
	if(pass != againpwd){
		alert("两次密码输入不一致")
	}
	var email = $("#email").val();
	//判断输入邮箱的格式是否正确
	var tr_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	var phone = $("#phone").val();
	//判断输入的手机号格式是否正确
	var tr_phone =/^[1][358][0-9]{9}$/;
	if(!(tr_email.test(email))||!(tr_phone.test(phone))){
		alert("您输入的用户名格式有误，请重新输入")
	}else{
	var userifo = {};
		userifo.usename = $("#phone").val();
		userifo.email = $("#email").val();
		userifo.usepwd = $("#passwd").val();
	$.cookie("userifo",JSON.stringify(userifo),{expires : 7 , path : "/"});
	alert("注册成功")
	location.href = "login.html";
	}
})