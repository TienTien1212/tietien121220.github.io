 	
function init() 
{	
	var au_yeucau = new Audio('voice/cauhoi.wav');
	var au_dung = new Audio('voice/25.mp3');
	var au_sai = new Audio('voice/24.mp3');
	var hu_sai = new Audio('voice/sai.mp3');
	var hu_dung = new Audio('voice/dung.mp3');
	var hu_vut = new Audio('voice/vut.mp3');
	var hu_loxo = new Audio('voice/loxo.mp3');
	var au_click = new Audio('voice/click.mp3');
	au_yeucau.play();
	var kiemTra = 0;
	
	setTimeout(function(){
		$("#cauHoi,#btn_LL").animate({
			opacity: 1,
		}, 400);
	}, 100);
	
	setTimeout(function(){
		$("#cau_1,#congtac1").animate({
			opacity: 1,
		}, 500);
	}, 900);

	setTimeout(function(){
		$("#cau_2,#congtac2,#btn_KT").animate({
			opacity: 1,
		}, 500);
	}, 1100);

	setTimeout(function(){
		$("#kiem").animate({
			left:  220,
		}, 200);
	}, 1300);

	$("#cau_1").on('click', function()
	{
		au_click.play();		
		kiemTra = 1;	
		$("#cau_2,#che_btn").css('display','none');
		
						
	});

	$("#cau_2").on('click', function()
	{
		au_click.play();
		kiemTra = 2;		
		$("#cau_1,#che_btn").css('display','none');

	});

	$("#btn_KT").on('click', function()
	{
		au_click.play();
		au_yeucau.currentTime = 0;
		au_yeucau.pause();
		
		$("#btn_KT").animate({
			opacity: 0,
		}, 500);
		setTimeout(function()
		{
			$("#btn_KT").css('display','none');		
		},500)	
		
		
		if (kiemTra == 1) 
		{
			
			$("#bg_dung,#dung,#box_dung,#che,#btn_TT").css('display','inline');
			setTimeout(function(){
				$("#btn_TT").animate({
					opacity: 1,
				}, 500);
			},1000)
			$("#bg_dung").animate({
				opacity: 1,
			}, 500);
			$("#box_dung").animate({
				opacity: 1,
				top: 430
			}, 800);
			
			$("#kiem").animate({
				opacity: 1,
				left: 720
			}, 150);
			hu_loxo.play();
			
			setTimeout(function()
			{
				$("#dung").animate({
					opacity: 1,
					top: -1032
				}, 300);
			}, 250)

			setTimeout(function()
			{
				au_dung.play();
				hu_dung.play();
			}, 500)
		}

		if (kiemTra == 2) 
		{
			$("#box_sai,#sai,#btn_LL").css('display','inline');
			au_sai.play();
			hu_sai.play();

			$("#box_sai").animate({
				opacity: 1,
				top: 460
			}, 500);
			$("#sai,#btn_LL").animate({
				opacity: 1,
			}, 300);
			$("#dung").animate({
				opacity: 0,
			}, 300);
			$("#kiem").animate({
				opacity: 1,
				left: 720
			}, 150);
		}
		
	});


	$("#btn_LL").on('click', function()
	{
		au_click.play();
		au_sai.currentTime = 0;
		hu_sai.currentTime = 0;
		hu_sai.pause();
		au_sai.pause();
		$("#che").css('display','none');
		$("#cau_1,#cau_2,#che_btn,#btn_KT").css('display','inline');
		$("#box_sai").animate({
			opacity: 0,
			top: 100
		}, 500);
		$("#sai,#btn_LL").animate({
			opacity: 0,
		}, 500);
		$("#dung,#btn_KT").animate({
			opacity: 1,
		}, 500);
		setTimeout(function(){
			$("#box_sai,#sai,#btn_LL").css('display','none');
		}, 500);

		$("#kiem").animate({
				opacity: 1,
				left: 220
			}, 150);
	});

	$("#btn_TT").on('click', function()
	{
		au_click.play();
		setTimeout(function(){
			window.parent.cpAPIInterface.setVariableValue("cpCmndNextSlide", 1);
		}, 200);
	});
}