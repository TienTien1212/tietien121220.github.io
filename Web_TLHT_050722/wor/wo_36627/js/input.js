function init(){
	var click = new Audio('voice/click.mp3');
	var dung = new Audio('voice/D3_Đ.wav');
    var sai = new Audio('voice/D3_S.wav');
	var doc2 = new Audio('voice/D3_66.wav');
	var doc3 = new Audio('voice/D3_67.wav');
	var doc4 = new Audio('voice/D3_68.wav');
    var tb_dung = new Audio('voice/dung.mp3');
    var tb_sai = new Audio('voice/sai.mp3');
    // $("#goiy").on("click", function(){
    //     click.play();
    //     click.currentTime = 0;
    //     $("#thongbao").css("display", "inline");
      
    // })
    // $("#x").on("click", function(){
    //     click.play();
    //     click.currentTime = 0;
    //     $("#thongbao").css("display", "none");
      
    // }); 
	setTimeout(function(){
		$("#p1").css("display", "inline");
		$("#p1").animate({
			opacity: 1,
		}, 600)
	}, 600)

	var check1 = false;
	var check2 = false;
	var check3 = false;

	var kt1 = kt2 = kt3 = kt4 = 0;
	

	var check1_2 = false;
	var check2_2 = false;
	var check3_2 = false;


	var check1_3 = false;
	var check2_3 = false;
	var check3_3 = false;

	
	var check1_4 = false;
	var check2_4 = false;
	var check3_4 = false;

	var btn_tt1 = 0;
	var btn_tt2 = 0;
	var btn_tt3 = 0;
	var btn_tt4 = 0;



	$("#cau1").on("click", function(){
		click.play();
		click.currentTime = 0;
		if(check_c1 == false){
			check_c1 = true
			$("#p1").css("display", "inline");
		}
		else{
			check_c1 = false;
			$("#p1").css("display", "none");
		}
	});
	

	///
	$("#cau1_A").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt1 = 1;
		if(btn_tt1 != 0){
			$("#kiemtra1").css("display", "inline");
		}
		if(check1 == false){
			kt1 = 1;
			check1 = true;
			check2 = false;
			check3 = false;
			$("#cau1_A").css("background", "url('img/A_hover.png') no-repeat");
			$("#cau1_B").css("background", "url('img/B.png') no-repeat");
			$("#cau1_C").css("background", "url('img/C.png') no-repeat");
		}
		else{
			kt1 = 0;
			check1 = false;
			$("#cau1_A").css("background", "url('img/A.png') no-repeat");
		}

	});
	$("#cau1_B").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt1 = 1;
		if(btn_tt1 != 0){
			$("#kiemtra1").css("display", "inline");
		}
		if(check2 == false){
			kt1 = 2;
			check2 = true;
			check1 = false;
			check3 = false;
			$("#cau1_B").css("background", "url('img/B_hover.png') no-repeat");
			$("#cau1_A").css("background", "url('img/A.png') no-repeat");
			$("#cau1_C").css("background", "url('img/C.png') no-repeat");
		}
		else{
			kt1 = 0;
			check2 = false;
			$("#cau1_B").css("background", "url('img/B.png') no-repeat");
		}

	});
	$("#cau1_C").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt1 = 1;
		if(btn_tt1 != 0){
			$("#kiemtra1").css("display", "inline");
		}
		if(check3 == false){
			kt1 = 3;
			check3 = true;
			check2 = false;
			check1 = false;
			$("#cau1_C").css("background", "url('img/C_hover.png') no-repeat");
			$("#cau1_B").css("background", "url('img/B.png') no-repeat");
			$("#cau1_A").css("background", "url('img/A.png') no-repeat");
		}
		else{
			check3 = false;
			kt1 = 0;
			$("#cau1_C").css("background", "url('img/C.png') no-repeat");
		}

	});
	
	////
	$("#cau2_A").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt2 = 1;
		if(btn_tt2 != 0){
			$("#kiemtra2").css("display", "inline");
		}
		if(check1_2 == false){
			kt2 = 1;
			check2_2 = false;
		 	check3_2 = false;
			check1_2 = true;
			$("#cau2_A").css("background", "url('img/A_hover.png') no-repeat");
			$("#cau2_B").css("background", "url('img/B.png') no-repeat");
			$("#cau2_C").css("background", "url('img/C.png') no-repeat");
		
		}
		else{
			kt2 = 0;
			check1_2 = false;
			$("#cau2_A").css("background", "url('img/A.png') no-repeat");
		}

	});
	$("#cau2_B").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt2 = 1;
		if(btn_tt2 != 0){
			$("#kiemtra2").css("display", "inline");
		}
		if(check2_2 == false){
			kt2 = 2;
			check2_2 = true;
			check1_2 = false;
		 	check3_2 = false;
		
			$("#cau2_B").css("background", "url('img/B_hover.png') no-repeat");
			$("#cau2_A").css("background", "url('img/A.png') no-repeat");
			$("#cau2_C").css("background", "url('img/C.png') no-repeat");
			
			
		}
		else{
			kt2 = 0;
			check2_2 = false;
			$("#cau2_B").css("background", "url('img/B.png') no-repeat");
		}

	});
	$("#cau2_C").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt2 = 1;
		if(btn_tt2 != 0){
			kt2 = 3;
			$("#kiemtra2").css("display", "inline");
		}
		if(check3_2 == false){
			check3_2 = true;
			check2_2 = false;
			check1_2 = false;
		
			$("#cau2_C").css("background", "url('img/C_hover.png') no-repeat");
			$("#cau2_B").css("background", "url('img/B.png') no-repeat");
			$("#cau2_A").css("background", "url('img/A.png') no-repeat");
			
			
		}
		else{
			kt2 = 0;
			check3_2 = false;
			$("#cau2_C").css("background", "url('img/C.png') no-repeat");
		}

	});
	///
	$("#cau3_A").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt3 = 1;
		if(btn_tt3 != 0){
			$("#kiemtra3").css("display", "inline");
		}
		if(check1_3 == false){
			kt3 = 1;
			check1_3 = true;
			check2_3 = false;
		 	check3_3 = false;
		
			$("#cau3_A").css("background", "url('img/A_hover.png') no-repeat");
			$("#cau3_B").css("background", "url('img/B.png') no-repeat");
			$("#cau3_C").css("background", "url('img/C.png') no-repeat");
		
		}
		else{
			kt3 = 0;
			check1_3 = false;
			$("#cau3_A").css("background", "url('img/A.png') no-repeat");
		}

	});
	$("#cau3_B").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt3 = 1;
		if(btn_tt3 != 0){
			$("#kiemtra3").css("display", "inline");
		}
		if(check2_3 == false){
			kt3 = 2;
			check2_3 = true;
			check1_3 = false;
		 	check3_3 = false;
			
			$("#cau3_B").css("background", "url('img/B_hover.png') no-repeat");
			$("#cau3_A").css("background", "url('img/A.png') no-repeat");
			$("#cau3_C").css("background", "url('img/C.png') no-repeat");
			
			
		}
		else{
			kt3 = 0;
			check2_3 = false;
			$("#cau3_B").css("background", "url('img/B.png') no-repeat");
		}

	});
	$("#cau3_C").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt3 = 1;
		if(btn_tt3 != 0){
			kt3 = 3;
			$("#kiemtra3").css("display", "inline");
		}
		if(check3_3 == false){
			check3_3 = true;
			check2_3 = false;
			check1_3 = false;
		
			$("#cau3_C").css("background", "url('img/C_hover.png') no-repeat");
			$("#cau3_B").css("background", "url('img/B.png') no-repeat");
			$("#cau3_A").css("background", "url('img/A.png') no-repeat");
			
			
		}
		else{
			kt3 = 0;
			check3_3 = false;
			$("#cau3_C").css("background", "url('img/C.png') no-repeat");
		}

	});
	$("#cau4_A").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt4 = 1;
		if(btn_tt4 != 0){
			$("#kiemtra4").css("display", "inline");
		}
		if(check1_4 == false){
			kt4 = 1;
			check1_4 = true;
			check2_4 = false;
		 	check3_4 = false;
		
			$("#cau4_A").css("background", "url('img/A_hover.png') no-repeat");
			$("#cau4_B").css("background", "url('img/B.png') no-repeat");
			$("#cau4_C").css("background", "url('img/C.png') no-repeat");
		
		}
		else{
			kt4 = 0;
			check1_4 = false;
			$("#cau4_A").css("background", "url('img/A.png') no-repeat");
		}

	});
	$("#cau4_B").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt4 = 1;
		if(btn_tt4 != 0){
			$("#kiemtra4").css("display", "inline");
		}
		if(check2_4 == false){
			kt4 = 2;
			check2_4 = true;
			check1_4 = false;
		 	check3_4 = false;
			
			$("#cau4_B").css("background", "url('img/B_hover.png') no-repeat");
			$("#cau4_A").css("background", "url('img/A.png') no-repeat");
			$("#cau4_C").css("background", "url('img/C.png') no-repeat");
			
			
		}
		else{
			kt4 = 0;
			check2_4 = false;
			$("#cau4_B").css("background", "url('img/B.png') no-repeat");
		}

	});
	$("#cau4_C").on("click", function(){
		click.play();
		click.currentTime = 0;
		btn_tt4 = 1;
		if(btn_tt4 != 0){
			kt4 = 3;
			$("#kiemtra4").css("display", "inline");
		}
		if(check3_4 == false){
			check3_4 = true;
			check2_4 = false;
			check1_4 = false;
		
			$("#cau4_C").css("background", "url('img/C_hover.png') no-repeat");
			$("#cau4_B").css("background", "url('img/B.png') no-repeat");
			$("#cau4_A").css("background", "url('img/A.png') no-repeat");
			
			
		}
		else{
			kt4 = 0;
			check3_4 = false;
			$("#cau4_C").css("background", "url('img/C.png') no-repeat");
		}

	});
	var dem = 0;

	$("#kiemtra1").on("click", function(){
	
		click.play();
		click.currentTime = 0;
		$("#kiemtra1").css("display", "none");
		$("#che").css("display", "inline");
		if(kt1 == 1 ){
			setTimeout(function(){
				dem += 1;
				dung.play();
				tb_dung.play();
				$("#tieptuc1, #t1").css("display", "inline");
				$("#cau1_A").css("background", "url('img/A_dung.png') no-repeat");
			}, 500)
		
		}
		else{
			sai.play();
			tb_sai.play();
			sai.currentTime = 0;
			tb_sai.currentTime =0;
			$("#tieptuc1").css("display", "inline");
			if(kt1 == 2){
				$("#x2").css("display", "inline");
				$("#cau1_B").css("background", "url('img/B_sai.png') no-repeat");
			}
			if(kt1 == 3){
				$("#x3").css("display", "inline");
				$("#cau1_C").css("background", "url('img/C_sai.png') no-repeat");
			}
		}
	})
	$("#kiemtra2").on("click", function(){
		doc2.pause();
		click.play();
		click.currentTime = 0;
		$("#che").css("display", "inline");
		$("#kiemtra2").css("display", "none");
		if(kt2 == 3 ){
			setTimeout(function(){
				dem += 1;
				dung.play();
				tb_dung.play();
				$("#tieptuc2, #t3").css("display", "inline");
				$("#cau2_C").css("background", "url('img/C_dung.png') no-repeat");
			}, 500)
		
		}
		else{
			sai.play();
			tb_sai.play();
			sai.currentTime = 0;
			tb_sai.currentTime =0;
			$("#tieptuc2").css("display", "inline");
			if(kt2 == 1){
				$("#x1").css("display", "inline");
				$("#cau2_A").css("background", "url('img/A_sai.png') no-repeat");
			}
			if(kt2 == 2){
				$("#x2").css("display", "inline");
				$("#cau2_B").css("background", "url('img/B_sai.png') no-repeat");
			}
		}
	})
	$("#kiemtra3").on("click", function(){
		doc3.pause();
		click.play();
		click.currentTime = 0;
		$("#che").css("display", "inline");
		$("#kiemtra3").css("display", "none");
		if(kt3 == 2 ){
			setTimeout(function(){
				dem += 1;
				dung.play();
				tb_dung.play();
				$("#tieptuc3, #t2").css("display", "inline");
				$("#t2").animate({
					left:"694px",
				})
				$("#cau3_B").css("background", "url('img/B_dung.png') no-repeat");
			}, 500)
		
		}
		else{
			sai.play();
			tb_sai.play();
			sai.currentTime = 0;
			tb_sai.currentTime =0;
			$("#tieptuc3").css("display", "inline");
			if(kt3 == 1){
				$("#x1").animate({
					left:"694px",
				})
				$("#x1").css("display", "inline");
				$("#cau3_A").css("background", "url('img/A_sai.png') no-repeat");
			}
			if(kt3 == 3){
				$("#x3").animate({
					left:"694px",
				})
				$("#x3").css("display", "inline");
				$("#cau3_C").css("background", "url('img/C_sai.png') no-repeat");
			}
		}
	})
	$("#kiemtra4").on("click", function(){
		click.play();
		click.currentTime = 0;
		doc4.pause();
		$("#kiemtra4").css("display", "none");
		$("#che").css("display", "inline");
		if(kt4 == 1 ){
			setTimeout(function(){
				dem += 1;
				dung.play();
				tb_dung.play();
				$("#tieptuc4, #t1").css("display", "inline");
				$("#cau4_A").css("background", "url('img/A_dung.png') no-repeat");
			}, 500)
		
		}
		else{
			sai.play();
			tb_sai.play();
			sai.currentTime = 0;
			tb_sai.currentTime =0;
			$("#tieptuc4").css("display", "inline");
			if(kt4 == 2){
				$("#x2").css("display", "inline");
				$("#cau4_B").css("background", "url('img/B_sai.png') no-repeat");
			}
			if(kt4 == 3){
				$("#x3").css("display", "inline");
				$("#cau4_C").css("background", "url('img/C_sai.png') no-repeat");
			}
		}
	})
	$("#tieptuc1").on("click", function(){
		click.play();
		click.currentTime = 0;
		tb_dung.pause();
		dung.pause();
		sai.pause();
		tb_sai.pause();
		sai.currentTime = 0;
		tb_sai.currentTime =0;
		dung.currentTime = 0;
		tb_dung.currentTime = 0;
		setTimeout(function(){
			doc2.play();
			$("#cau1_A").css("background", "url('img/A.png') no-repeat");
			$("#p1,#tieptuc1,#t1,#che,#x1, #x2,#x3").css("display", "none");
			$("#p2").css("display", "inline");
			$("#p2").animate({
				opacity: 1
			}, 400)
		}, 400)
		
		
	})
	$("#tieptuc2").on("click", function(){
		click.play();
		click.currentTime = 0;
		sai.pause();
		tb_sai.pause();
		sai.currentTime = 0;
		tb_sai.currentTime =0;
		doc2.pause();
		tb_dung.pause();
		dung.pause();
		dung.currentTime = 0;
		tb_dung.currentTime = 0;
		setTimeout(function(){
			doc3.play();
			$("#cau2_C").css("background", "url('img/C.png') no-repeat");
			$("#p2,#tieptuc2,#t3, #che,#x1, #x2,#x3").css("display", "none");
			$("#p3").css("display", "inline");
			$("#p2").animate({
				opacity: 0
			}, 400)
			$("#p3").animate({
				opacity: 1
			}, 400)
		}, 400)
		
		
	})
	$("#tieptuc3").on("click", function(){
		click.play();
		click.currentTime = 0;
		sai.pause();
		tb_sai.pause();
		sai.currentTime = 0;
		tb_sai.currentTime =0;
		doc3.pause();
		tb_dung.pause();
		dung.pause();
		dung.currentTime = 0;
		tb_dung.currentTime = 0;
		setTimeout(function(){
			doc4.play();
			$("#cau3_B").css("background", "url('img/B.png') no-repeat");
			$("#p3,#tieptuc3,#t2, #che,#x1, #x2,#x3").css("display", "none");
			$("#p4").css("display", "inline");
			$("#p3").animate({
				opacity: 0
			}, 400)
			$("#p4").animate({
				opacity: 1
			}, 400)
			$("#x3, #X2, #X1, #t1, #t2, #t3").animate({
				left:"822px",
			})
		}, 400)
		
		
	})
	$("#tieptuc4").on("click", function(){
		click.play();
		click.currentTime = 0;
		sai.pause();
		tb_sai.pause();
		sai.currentTime = 0;
		tb_sai.currentTime =0;
		dung.pause();
		doc4.pause();
		setTimeout(function(){
			$("#p4, #goiy,#x1,#x2,#x3, #t1, #t2, #t3").css("display", "none");
			$("#tong").css("display", "inline");
			$("#tong").animate({
				opacity: 1
			}, 400)
		}, 400)
		setTimeout(function(){
			tb_dung.play();
		}, 800)
	
		if(dem == 1){
			$("#diem2").animate({
				opacity: 1
			}, 400)
			setTimeout(function(){
				window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide", 33);
			}, 4000)
		}
		if(dem == 2){
			$("#diem3").animate({
				opacity: 1
			}, 400)
			setTimeout(function(){
				window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide", 33);
			}, 4000)
		}
		if(dem == 3){
			$("#diem4").animate({
				opacity: 1
			}, 400)
			setTimeout(function(){
				window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide", 33);
			}, 4000)
		}
		if(dem == 4){
			$("#diem5").animate({
				opacity: 1
			}, 400)
			setTimeout(function(){
				window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide", 33);
			}, 4000)
		}
		if(dem == 0){
			$("#diem1").animate({
				opacity: 1
			}, 400)
			setTimeout(function(){
				window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide",33);
			}, 4000)
		}
	})
$("#lamlai1").on("click", function(){
	click.play();
	click.currentTime = 0
	sai.pause();
	tb_sai.pause();
	kt1 = 0;
	btn_tt1 = 0;
	check1 = false;
 	check2 = false;
	check3 = false;
	$("#cau1_C").css("background", "url('img/C.png') no-repeat");
	$("#cau1_B").css("background", "url('img/B.png') no-repeat");
	$("#cau1_A").css("background", "url('img/A.png') no-repeat");     
	$("#lamlai1, #t1,#t2, #t3, #x1, #x2, #x3, #che").css("display", "none");		
});

$("#lamlai2").on("click", function(){
	click.play();
	click.currentTime = 0
	sai.pause();
	tb_sai.pause();
	kt2 = 0;
	btn_tt2 = 0;
	check1_2 = false;
 	check2_2 = false;
	check3_2 = false;
	$("#cau2_C").css("background", "url('img/C.png') no-repeat");
	$("#cau2_B").css("background", "url('img/B.png') no-repeat");
	$("#cau2_A").css("background", "url('img/A.png') no-repeat");     
	$("#lamlai2, #t1,#t2, #t3, #x1, #x2, #x3, #che").css("display", "none");		
	});
$("#lamlai3").on("click", function(){
		click.play();
		click.currentTime = 0
		sai.pause();
		tb_sai.pause();
		kt3 = 0;
		btn_tt3 = 0;
		check1_3 = false;
		check2_3 = false;
		check3_3 = false;
		$("#cau3_C").css("background", "url('img/C.png') no-repeat");
		$("#cau3_B").css("background", "url('img/B.png') no-repeat");
		$("#cau3_A").css("background", "url('img/A.png') no-repeat");     
		$("#lamlai3, #t1,#t2, #t3, #x1, #x2, #x3, #che").css("display", "none");		
		});
}
