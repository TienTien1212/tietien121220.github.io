function init(){
	var click = new Audio('voice/click.mp3');
	var sai = new Audio('voice/tiengtlsai.mp3')
	var dung = new Audio('voice/dung.mp3')
	var tb_sai = new Audio('voice/M5_25_2.wav')
	var tb_dung = new Audio('voice/M5_25_3.wav')
	
	var kt1 = 0;
	var kt2 = 0;
	var kt3 = 0;
	var dem = 0;
	
	$("#nv").animate({
		opacity: 1,
		left: "919px"
	}, 500)
	setTimeout(function(){
		$("#khung").animate({
			opacity: 1,
			left: "325px"
		}, 500)
	}, 800)
	setTimeout(function(){
		$("#so").animate({
			opacity: 1,
			top: "44px"
		},400)
	//	doc.play();
	}, 1300)
	setTimeout(function(){
		$("#cauhoi").animate({
			opacity: 1,
			top: "106px"
		},400)
	}, 2000)
	$("#A").css("display", "inline")
	setTimeout(function(){
		$("#A").css("display", "inline")
		$("#icon1, #A").animate({
			opacity: 1,
			
		},400)
	}, 2500)
	setTimeout(function(){
		$("#B").css("display", "inline")
		$("#icon2, #B").animate({
			opacity: 1,
			
		},400)
	}, 3000)
	setTimeout(function(){
		$("#C").css("display", "inline")
		$("#icon3, #C").animate({
			opacity: 1,
			
		},400)
	}, 3500)

	$("#A").on("click", function(){
		click.play();
		click.currentTime = 0;
		dem = 1;
		kt1 = 1;
		kt2 = 0;
		kt3 = 0;
		$("#A_hover").css("display", "inline");
		$("#B_hover").css("display", "none");
		$("#C_hover").css("display", "none");
		$("#A_hover").animate({
			opacity: 1
		}, 0)
		if(dem != 0){
			$("#kiemtra").css("display", "inline");
			$("#kiemtra").animate({
				opacity: 1
			}, 400)
		}
	})
	$("#B").on("click", function(){
		click.play();
		click.currentTime = 0;
		dem = 1;
		kt2 = 1;
		kt1 = 0;
		kt3 = 0;
		$("#B_hover").css("display", "inline");
		$("#A_hover").css("display", "none");
		$("#C_hover").css("display", "none");
		$("#B_hover").animate({
			opacity: 1
		}, 0)
		if(dem != 0){
			$("#kiemtra").css("display", "inline");
			$("#kiemtra").animate({
				opacity: 1
			}, 400)
		}
	})
	$("#C").on("click", function(){
		click.play();
		click.currentTime = 0;
		dem = 1;
		kt3 = 1;
		kt2 = 0;
		kt1 = 0;
		$("#C_hover").css("display", "inline");
		$("#B_hover").css("display", "none");
		$("#A_hover").css("display", "none");
		$("#C_hover").animate({
			opacity: 1
		}, 0)
		if(dem != 0){
			$("#kiemtra").css("display", "inline");
			$("#kiemtra").animate({
				opacity: 1
			}, 400)
		}
	})
	$("#kiemtra").on("click", function(){
		click.play();
		click.currentTime = 0;
	//	nen.pause();
		$("#kiemtra").css("display", "none");
		$("#kiemtra").animate({
			opacity: 0
		}, 400)

	if(kt3 == 1 ){
		dung.play();
		tb_dung.play();
		$("#che, #tick_3").css("display", "inline");
		$("#tick_3").animate({
			opacity: 1
		}, 400)
		setTimeout(function(){
			$("#tieptuc").css("display", "inline");
			$("#tieptuc").animate({
				opacity: 1
			}, 400)
		},2500)
	}
	if(kt1 == 1 ){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #x_1").css("display", "inline");
		$("#lamlai, #x_1").animate({
			opacity: 1
		}, 400)
	}
	if(kt2 == 1 ){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #x_2").css("display", "inline");
		$("#lamlai, #x_2").animate({
			opacity: 1
		}, 400)
	}
})
	
	$("#tieptuc").on("click", function(){
		click.play();
		click.currentTime = 0;
		window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide",33);
	})
	$("#lamlai").on("click", function(){
		click.play();
		click.currentTime = 0;
		sai.pause();
		tb_sai.pause();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #x_1, #x_2, #tick_1").css("display", "none");
		$("#lamlai, #x_1, #x_2,#tick_1, #A_hover,  #B_hover,  #C_hover").animate({
			opacity: 0
		}, 400)
		kt1 = kt2 = kt3 = 0;
		
		
		
	})
}
