function init(){
	var click = new Audio('voice/click.mp3');
	var sai = new Audio('voice/tiengtlsai.mp3')
	var dung = new Audio('voice/dung.mp3')
	var tb_sai = new Audio('voice/M5_42_3.wav')
	var tb_dung = new Audio('voice/M5_42_4.wav')
//	var nen = new Audio('voice/nen_2.wav')

	$("#cauhoi").animate({
		opacity: 1,
		left: "48px"
		
	}, 600)

	var kt1 = 0;
	var kt2 = 0;
	var kt3 = 0;
	var kt4 = 0;
	
var clickA = 0;
var clickB = 0;
var clickC = 0;
var clickD = 0;

var chon_1 = 0;
var chon_2 = 0;
var chon_3 = 0;
var chon_4 = 0;
	

	var check_A = 0;
	var check_B = 0;
	var check_C = 0;
	var check_D = 0;

	

	$("#A").on("click", function(){
		console.log("chon1:" + chon_1)
		click.play();
		click.currentTime = 0;
		clickA = 1;
		if(clickA == 1 && chon_1 == 1){
			clickA = 0;
			chon_1 = 0;
			kt1 = 1;
			$("#A_A").animate({
				opacity: 1
			})
			$("#A_B").animate({
				opacity: 0
			})
			$("#A_C").animate({
				opacity: 0
			})
			$("#A_D").animate({
				opacity: 0
			})
			$("#B_A").animate({
				opacity: 0
			})
			$("#C_A").animate({
				opacity: 0
			})
			$("#D_A").animate({
				opacity: 0
			})


		}
		if(clickA == 1 && chon_2 == 1){
			clickA = 0;
			chon_2 = 0;
			kt1 = 0;
			$("#A_B").animate({
				opacity: 1
			})
			$("#A_A").animate({
				opacity: 0
			})
			$("#A_C").animate({
				opacity: 0
			})
			$("#A_D").animate({
				opacity: 0
			})
			
			$("#D_B").animate({
				opacity: 0
			})
			$("#B_B").animate({
				opacity: 0
			})
			$("#C_B").animate({
				opacity: 0
			})

		}
		if(clickA == 1 && chon_3 == 1){
			clickA = 0;
			chon_3 = 0;
			kt1 = 0;
			$("#A_C").animate({
				opacity: 1
			})
			$("#A_A").animate({
				opacity: 0
			})
			$("#A_B").animate({
				opacity: 0
			})
			$("#A_D").animate({
				opacity: 0
			})
			$("#B_C").animate({
				opacity: 0
			})
			$("#C_C").animate({
				opacity: 0
			})
			$("#D_C").animate({
				opacity: 0
			})


		}
		if(clickA == 1 && chon_4 == 1){
			clickA = 0;
			chon_4 = 0;
			kt1 = 0;
			$("#A_D").animate({
				opacity: 1
			})
			$("#A_A").animate({
				opacity: 0
			})
			$("#A_B").animate({
				opacity: 0
			})
			$("#A_C").animate({
				opacity: 0
			})
		
			
			$("#B_D").animate({
				opacity: 0
			})
			$("#C_D").animate({
				opacity: 0
			})
			$("#D_D").animate({
				opacity: 0
			})


		}
		
	
	
	})
	$("#B").on("click", function(){
		click.play();
		click.currentTime = 0;
		console.log("clickB:" + clickB) 
		clickB = 1;
	
		if(clickB == 1 && chon_1 == 1){
			clickB = 0;
			chon_1 = 0;
		
			kt2 = 0;
			$("#B_A").animate({
				opacity: 1
			})
			$("#B_B").animate({
				opacity: 0
			})
			$("#B_C").animate({
				opacity: 0
			})
			$("#B_D").animate({
				opacity: 0
			})
			
			$("#A_A").animate({
				opacity: 0
			})
			$("#C_A").animate({
				opacity: 0
			})
			$("#D_A").animate({
				opacity: 0
			})

		}
		if(clickB == 1 && chon_2 == 1){
			clickB = 0;
			chon_2 = 0;
			kt2 = 1;
			$("#B_B").animate({
				opacity: 1
			})
			$("#B_A").animate({
				opacity: 0
			})
			$("#B_C").animate({
				opacity: 0
			})
			$("#B_D").animate({
				opacity: 0
			})
			$("#A_B").animate({
				opacity: 0
			})
			$("#C_B").animate({
				opacity: 0
			})
			$("#D_B").animate({
				opacity: 0
			})

		}
		if(clickB == 1 && chon_3 == 1){
			clickB = 0;
			chon_3 = 0;
		
			kt2 = 0;
			$("#B_C").animate({
				opacity: 1
			})
			$("#B_A").animate({
				opacity: 0
			})
			$("#B_B").animate({
				opacity: 0
			})
			$("#B_D").animate({
				opacity: 0
			})
	
			$("#A_C").animate({
				opacity: 0
			})
			$("#C_C").animate({
				opacity: 0
			})
			$("#D_C").animate({
				opacity: 0
			})
		}
		if(clickB == 1 && chon_4 == 1){
			clickB = 0;
			chon_4 = 0;
		
			kt2 = 0;
			$("#B_D").animate({
				opacity: 1
			})
			$("#B_A").animate({
				opacity: 0
			})
			$("#B_C").animate({
				opacity: 0
			})
			$("#B_B").animate({
				opacity: 0
			})
			$("#A_D").animate({
				opacity: 0
			})
			$("#C_D").animate({
				opacity: 0
			})
			$("#D_D").animate({
				opacity: 0
			})
		}
	})
	
	$("#C").on("click", function(){
		click.play();
		click.currentTime = 0;
		console.log("clickC:" + clickC) 
		clickC = 1;
		if(clickC == 1 && chon_1 == 1){
			clickC = 0;
			chon_1 = 0;
		
			kt3 = 0;
			$("#C_A").animate({
				opacity: 1
			})
			$("#C_B").animate({
				opacity: 0
			})
			$("#C_C").animate({
				opacity: 0
			})
			$("#C_D").animate({
				opacity: 0
			})
			
			$("#B_A").animate({
				opacity: 0
			})
			$("#A_A").animate({
				opacity: 0
			})
			$("#D_A").animate({
				opacity: 0
			})

		}
		if(clickC == 1 && chon_2 == 1){
			clickC = 0;
			chon_2 = 0;
		
			kt3 = 0;
			$("#C_B").animate({
				opacity: 1
			})
			$("#C_A").animate({
				opacity: 0
			})
			$("#C_C").animate({
				opacity: 0
			})
			$("#C_D").animate({
				opacity: 0
			})
			$("#D_B").animate({
				opacity: 0
			})
			$("#A_B").animate({
				opacity: 0
			})
			
			$("#B_B").animate({
				opacity: 0
			})

		}
		if(clickC == 1 && chon_3 == 1){
			clickC = 0;
			chon_3 = 0;
		
			kt3 = 1;
			$("#C_C").animate({
				opacity: 1
			})
			$("#C_A").animate({
				opacity: 0
			})
		
			$("#C_D").animate({
				opacity: 0
			})
		
			$("#C_B").animate({
				opacity: 0
			})
			$("#B_C").animate({
				opacity: 0
			})
			$("#A_C").animate({
				opacity: 0
			})
			$("#D_C").animate({
				opacity: 0
			})

		}
		if(clickC == 1 && chon_4 == 1){
			clickC = 0;
			chon_4 = 0;
		
			kt3 = 0;
			$("#C_D").animate({
				opacity: 1
			})
			$("#C_A").animate({
				opacity: 0
			})
			$("#C_B").animate({
				opacity: 0
			})
			$("#C_C").animate({
				opacity: 0
			})
			
			$("#A_D").animate({
				opacity: 0
			})
			$("#B_D").animate({
				opacity: 0
			})
			$("#D_D").animate({
				opacity: 0
			})
		}
	})
	$("#D").on("click", function(){
		click.play();
		click.currentTime = 0;
		clickD = 1;
	
		if(clickD == 1 && chon_1 == 1){
			clickD = 0;
			chon_1 = 0;
		
			kt4 = 0;
			$("#D_A").animate({
				opacity: 1
			})
			$("#D_B").animate({
				opacity: 0
			})
			$("#D_C").animate({
				opacity: 0
			})
			$("#D_D").animate({
				opacity: 0
			})
		
			$("#B_A").animate({
				opacity: 0
			})
		
			$("#C_A").animate({
				opacity: 0
			})
			$("#A_A").animate({
				opacity: 0
			})

		}
		if(clickD == 1 && chon_2 == 1){
			clickD = 0;
			chon_2 = 0;
		
			kt4 = 0;
			$("#D_B").animate({
				opacity: 1
			})
			$("#D_A").animate({
				opacity: 0
			})
			$("#D_C").animate({
				opacity: 0
			})
			$("#D_D").animate({
				opacity: 0
			})
			
			$("#B_B").animate({
				opacity: 0
			})
			$("#C_B").animate({
				opacity: 0
			})
			$("#A_B").animate({
				opacity: 0
			})
		
		}
		if(clickD == 1 && chon_3 == 1){
			clickD = 0;
			chon_3 = 0;
		
			kt4 = 0;
			$("#D_C").animate({
				opacity: 1
			})
			$("#D_B").animate({
				opacity: 0
			})
			$("#D_A").animate({
				opacity: 0
			})
			$("#D_D").animate({
				opacity: 0
			})
		
			$("#B_C").animate({
				opacity: 0
			})
			$("#A_C").animate({
				opacity: 0
			})
			$("#C_C").animate({
				opacity: 0
			})
		}
		if(clickD == 1 && chon_4 == 1){
			clickD = 0;
			chon_4 = 0;
		
			kt4 = 1;
			$("#D_D").animate({
				opacity: 1
			})
			$("#D_B").animate({
				opacity: 0
			})
			$("#D_C").animate({
				opacity: 0
			})
			$("#D_A").animate({
				opacity: 0
			})
			
		
			$("#B_D").animate({
				opacity: 0
			})
			$("#C_D").animate({
				opacity: 0
			})
			$("#A_D").animate({
				opacity: 0
			})
		}
	})
	

	$("#chon1").on("click", function(){
		click.play();
		click.currentTime = 0;
		chon_1 = 1;
		check_A = 1;
		if(check_A != 0 && check_B != 0 && check_C != 0 && check_D != 0){
			$("#kiemtra").css("display", "inline");
			$("#kiemtra").animate(
				{
					opacity: 1
				}
			)
		}
	
	})
	$("#chon2").on("click", function(){
		click.play();
		click.currentTime = 0;
		chon_2 = 1;
		check_B = 1;
		if(check_A != 0 && check_B != 0 && check_C != 0 && check_D != 0){
			$("#kiemtra").css("display", "inline");
			$("#kiemtra").animate(
				{
					opacity: 1
				}
			)
		}
	

	})
	$("#chon3").on("click", function(){
		click.play();
		click.currentTime = 0;
		chon_3 = 1;
		check_C = 1;
		if(check_A != 0 && check_B != 0 && check_C != 0 && check_D != 0){
			$("#kiemtra").css("display", "inline");
			$("#kiemtra").animate(
				{
					opacity: 1
				}
			)
		}
	})
	$("#chon4").on("click", function(){
		click.play();
		click.currentTime = 0;
		chon_4 = 1;
		check_D = 1;
		if(check_A != 0 && check_B != 0 && check_C != 0 && check_D != 0){
			$("#kiemtra").css("display", "inline");
			$("#kiemtra").animate(
				{
					opacity: 1
				}
			)
		}
	})

	$("#kiemtra").on("click", function(){
		click.play();
		click.currentTime = 0;
		$("#kiemtra").css("display", "none");
		$("#kiemtra").animate({
			opacity: 0
		}, 400)

	if(kt1 == 1 && kt2 == 1 && kt3 == 1 && kt4 == 1){
		dung.play();
		tb_dung.play();
		$("#che, #tick_1, #tick_2, #tick_3, #tick_4").css("display", "inline");
		$("#tick_1, #tick_2, #tick_3, #tick_4").animate({
			opacity: 1
		}, 400)
		setTimeout(function(){
			$("#tieptuc").css("display", "inline");
			$("#tieptuc").animate({
				opacity: 1
			}, 400)
		},2500)
	}
	if(kt1 == 0 && kt2 == 0 && kt3 == 0 && kt4 == 0){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #x_1, #x_2, #x_3, #x_4").css("display", "inline");
		$("#lamlai, #x_1, #x_2, #x_3, #x_4").animate({
			opacity: 1
		}, 400)
	}
	if(kt1 == 1 && kt2 == 0 && kt3 == 0 && kt4 == 0){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #tick_1, #x_2, #x_3, #x_4").css("display", "inline");
		$("#lamlai, #tick_1, #x_2, #x_3, #x_4").animate({
			opacity: 1
		}, 400)
	}
	if(kt1 == 0 && kt2 == 1 && kt3 == 0 && kt4 == 0){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #x_1, #tick_2, #x_3, #x_4").css("display", "inline");
		$("#lamlai, #x_1, #tick_2, #x_3, #x_4").animate({
			opacity: 1
		}, 400)
	}
	if(kt1 == 0 && kt2 == 0 && kt3 == 1 && kt4 == 0){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #x_1, #tick_3, #x_2, #x_4").css("display", "inline");
		$("#lamlai, #x_1, #tick_3, #x_2, #x_4").animate({
			opacity: 1
		}, 400)
	}
	if(kt1 == 0 && kt2 == 0 && kt3 == 0 && kt4 == 1){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #x_1, #tick_4, #x_2, #x_3").css("display", "inline");
		$("#lamlai, #x_1, #tick_4, #x_2, #x_3").animate({
			opacity: 1
		}, 400)
	}
	if(kt1 == 1 && kt2 == 1 && kt3 == 0 && kt4 == 0){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #tick_1, #tick_2, #x_3, #x_4").css("display", "inline");
		$("#lamlai, #tick_1, #tick_2, #x_3, #x_4").animate({
			opacity: 1
		}, 400)
	}
	if(kt1 == 1 && kt2 == 0 && kt3 == 1 && kt4 == 0){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #tick_1, #tick_3, #x_2, #x_4").css("display", "inline");
		$("#lamlai, #tick_1, #tick_3, #x_2, #x_4").animate({
			opacity: 1
		}, 400)
	}
	if(kt1 == 1 && kt2 == 0 && kt3 == 0 && kt4 == 1){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #tick_1, #tick_4, #x_2, #x_3").css("display", "inline");
		$("#lamlai, #tick_1, #tick_4, #x_2, #x_3").animate({
			opacity: 1
		}, 400)
	}
	if(kt1 == 0 && kt2 == 1 && kt3 == 1 && kt4 == 0){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #tick_2, #tick_3, #x_1, #x_4").css("display", "inline");
		$("#lamlai, #tick_3, #tick_2, #x_1, #x_4").animate({
			opacity: 1
		}, 400)
	}
	if(kt1 == 0 && kt2 == 1 && kt3 == 0 && kt4 == 1){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #tick_2, #tick_4, #x_1, #x_3").css("display", "inline");
		$("#lamlai, #tick_4, #tick_2, #x_1, #x_3").animate({
			opacity: 1
		}, 400)
	}
	if(kt1 == 0 && kt2 == 0 && kt3 == 1 && kt4 == 1){
		sai.play();
		sai.currentTime = 0;
		tb_sai.play();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #tick_3, #tick_4, #x_1, #x_2").css("display", "inline");
		$("#lamlai, #tick_4, #tick_3, #x_1, #x_2").animate({
			opacity: 1
		}, 400)
	}
	
})
	
	$("#tieptuc").on("click", function(){
		click.play();
		click.currentTime = 0;
		window.parent.cpAPIInterface.setVariableValue("cpCmndNextSlide", 1);
	})
	$("#lamlai").on("click", function(){
		click.play();
		click.currentTime = 0;
		sai.pause();
		tb_sai.pause();
		tb_sai.currentTime = 0;
		$("#lamlai, #che, #x_1, #x_2, #x_3, #x_4, #tick_1, #tick_2, #tick_3, #tick_4").css("display", "none");
		$("#lamlai, #x_1, #x_2, #x_3, #x_4, #A_B, #A_A, #A_C, #A_D, #B_A, #B_B, #B_C, #B_D, #C_A, #C_B, #C_C, #C_D, #D_A, #D_B, #D_C, #D_D,#tick_1, #tick_2, #tick_3, #tick_4").animate({
			opacity: 0
		}, 400)
		kt1 = kt2 = kt3 = kt4 = 0;
		chon_1 = chon_2 = chon_3 = chon_4 = 0;
		check_A = check_B = check_C = check_D = 0;
		clickA = clickB = clickC = clickD = 0;
	})
}
