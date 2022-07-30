function init(){
	var click = new Audio('voice/click.mp3');
	var sai = new Audio('voice/tiengtlsai.mp3')
	var dung = new Audio('voice/dung.mp3')
	var tb_sai = new Audio('voice/M6_61_3.wav')
	var tb_dung = new Audio('voice/M6_61_4.wav')
	var kt1 = 0;
	var kt2 = 0;
	var kt3 = 0;
	var kt4 = 0;
	var dem = 0;
	
	$("#nv").animate({
		opacity: 1,
		left: "163px"
	}, 500)
	$("#txt").animate({
		opacity: 1
	}, 500)
	setTimeout(function(){
		$("#cauhoi").animate({
			opacity: 1,
			top: "168px"
		},400)
	}, 1000)
	$("#A").css("display", "inline")
	setTimeout(function(){
		$("#A").css("display", "inline")
		$("#A").animate({
			opacity: 1,
			left: "615px"
		},400)
	}, 1500)
	setTimeout(function(){
		$("#B").css("display", "inline")
		$("#B").animate({
			opacity: 1,
			left: "615px"
		},400)
	}, 2000)
	setTimeout(function(){
		$("#C").css("display", "inline")
		$("#C").animate({
			opacity: 1,
			left: "615px"
		},400)
	}, 2500)
	setTimeout(function(){
		$("#D").css("display", "inline")
		$("#D").animate({
			opacity: 1,
			left: "615px"
		},400)
	},3000)


	$("#A").on("click", function(){
		click.play();
		click.currentTime = 0;
		dem = 1;
		kt1 = 1;
		kt2 = 0;
		kt3 = 0;
		kt4 = 0;
		$("#A").css({"background": "url('img/hover_A.png')"});
		$("#B").css({"background": "url('img/B.png')"});
		$("#C").css({"background": "url('img/C.png')"});
		$("#D").css({"background": "url('img/D.png')"});
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
		kt4 = 0;
		$("#B").css({"background": "url('img/hover_B.png')"});
		$("#A").css({"background": "url('img/A.png')"});
		$("#C").css({"background": "url('img/C.png')"});
		$("#D").css({"background": "url('img/D.png')"});
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
		kt4 = 0;
		$("#C").css({"background": "url('img/hover_C.png')"});
		$("#A").css({"background": "url('img/A.png')"});
		$("#B").css({"background": "url('img/B.png')"});
		$("#D").css({"background": "url('img/D.png')"});
		if(dem != 0){
			$("#kiemtra").css("display", "inline");
			$("#kiemtra").animate({
				opacity: 1
			}, 400)
		}
	})
	$("#D").on("click", function(){
		click.play();
		click.currentTime = 0;
		dem = 1;
		kt3 = 0;
		kt2 = 0;
		kt1 = 0;
		kt4 = 1;
		$("#D").css({"background": "url('img/hover_D.png')"});
		$("#A").css({"background": "url('img/A.png')"});
		$("#B").css({"background": "url('img/B.png')"});
		$("#C").css({"background": "url('img/C.png')"});
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
		//nen.pause();
		$("#kiemtra").css("display", "none");
		$("#kiemtra").animate({
			opacity: 0
		}, 400)

	if(kt1 == 1 ){
		dung.play();
		tb_dung.play();
		$("#tieptuc, #che, #tick_1").css("display", "inline");
		$("#tieptuc, #tick_1").animate({
			opacity: 1
		}, 400)
		$("#txt").css("display", "none");
		$("#txt").animate({
			opacity: 0
		}, 400)
	}
	else{
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #x_1").css("display", "inline");
		$("#lamlai, #x_1").animate({
			opacity: 1
		}, 400)
		$("#txt").css("display", "none");
		$("#txt").animate({
			opacity: 0
		}, 400)
	}
	
})
	
	$("#tieptuc").on("click", function(){
		click.play();
		click.currentTime = 0;
		window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide",33);
	})
	$("#lamlai").on("click", function(){
		//nen.play();
		//nen.currentTime = 0;
		click.play();
		click.currentTime = 0;
		sai.pause();
		tb_sai.pause();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #x_1, #tick_1").css("display", "none");
		$("#lamlai, #x_1,#tick_1").animate({
			opacity: 0
		}, 400)
		kt1 = kt2 = kt3 = kt4 = 0;
		$("#txt").css("display", "inline");
		$("#txt").animate({
			opacity: 1
		}, 400)
		$("#A").css({"background": "url('img/A.png')"});
		$("#B").css({"background": "url('img/B.png')"});
		$("#C").css({"background": "url('img/C.png')"});
		$("#D").css({"background": "url('img/D.png')"});
		
	})
}
