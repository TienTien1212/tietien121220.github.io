$(document).ready(function() {
   
var click = new Audio ('voice/click.mp3');
var ngoiSao1 = new Audio('voice/ngoiSao.mp3')
var ngoiSao2 = new Audio('voice/ngoiSao1.mp3')
var chucmung = new Audio('voice/chucmung.mp3')
var cauhoi = new Audio('voice/cauhoi.wav')
var dem = 0;

cauhoi.play();     

setTimeout(function(){
    $("#cauhoi").animate({
        opacity:0,
        left: 100,
    },600)
    setTimeout(function(){
        $("#cauhoi").css("display", "none")
    })
},5000)


    //sukienclick
    $("#num_0").on('click', function() {
     click.play();
     click.currentTime = 0;
     dem += 1;
     if(dem == 10){
        setTimeout(function(){
            $("#thongbao").css("display", "inline")
            chucmung.play();
        },3000)
    }
    setTimeout(function(){
        ngoiSao1.currentTime = 0;
        ngoiSao1.play();
        $("#num_0").animate({
            top: 335,
            left: 651
            },500);
        $("#num_0").css('transform','scale(1.4)');
        $("#num_0").css("z-index", 200);
        setTimeout(function(){
            ngoiSao2.currentTime = 0;
            ngoiSao2.play();
            $("#num_0").css('transform','scale(3)');
            $("#num_0").animate({
                opacity: 0,
            },500);
        },1000);
        setTimeout(function(){
            $("#num_0").css("display", "none");
            },1500);
    },1500)
    });  
    
    $("#num_1").on('click', function() {
        click.play();
        click.currentTime = 0;
        dem += 1;
        if(dem == 10){
            setTimeout(function(){
                $("#thongbao").css("display", "inline")
                chucmung.play();
            },3000)
        }
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#num_1").animate({
               top: 335,
               left: 651
               },500);
           $("#num_1").css('transform','scale(1.4)');
           $("#num_1").css("z-index", 200);
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#num_1").css('transform','scale(3)');
               $("#num_1").animate({
                   opacity: 0,
               },500);
           },1000);
           setTimeout(function(){
            $("#num_1").css("display", "none");
            },1500);
       },1500)
       });   

       $("#num_2").on('click', function() {
        click.play();
        click.currentTime = 0;
        dem += 1;
        if(dem == 10){
            setTimeout(function(){
                $("#thongbao").css("display", "inline")
                chucmung.play();
            },3000)
        }
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#num_2").animate({
               top: 335,
               left: 651
               },500);
           $("#num_2").css('transform','scale(1.4)');
           $("#num_2").css("z-index", 200);
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#num_2").css('transform','scale(3)');
               $("#num_2").animate({
                   opacity: 0,
               },500);
           },1000);
           setTimeout(function(){
            $("#num_2").css("display", "none");
            },1500);
           
       },1500)
       });  
       $("#num_3").on('click', function() {
        click.play();
        click.currentTime = 0;
        dem += 1;
        if(dem == 10){
            setTimeout(function(){
                $("#thongbao").css("display", "inline")
                chucmung.play();
            },3000)
        }
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#num_3").animate({
               top: 335,
               left: 651
               },500);
           $("#num_3").css('transform','scale(1.4)');
           $("#num_3").css("z-index", 200);
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#num_3").css('transform','scale(3)');
               $("#num_3").animate({
                   opacity: 0,
               },500);
           },1000);
           setTimeout(function(){
            $("#num_3").css("display", "none");
            },1500);
       },1500)
       });  
       $("#num_4").on('click', function() {
        click.play();
        click.currentTime = 0;
        dem += 1;
        if(dem == 10){
            setTimeout(function(){
                $("#thongbao").css("display", "inline")
                chucmung.play();
            },3000)
        }
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#num_4").animate({
               top: 335,
               left: 651
               },500);
            $("#num_4").css("z-index", 200);
           $("#num_4").css('transform','scale(1.4)');
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#num_4").css('transform','scale(3)');
            
               $("#num_4").animate({
                   opacity: 0,
               },500);
           },1000);
           setTimeout(function(){
            $("#num_4").css("display", "none");
            },1500);
       },1500)
       });  
       $("#num_5").on('click', function() {
        click.play();
        click.currentTime = 0;
        dem += 1;
        if(dem == 10){
            setTimeout(function(){
                $("#thongbao").css("display", "inline")
                chucmung.play();
            },3000)
        }
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#num_5").animate({
               top: 335,
               left: 651
               },500);
           $("#num_5").css('transform','scale(1.4)');
           $("#num_5").css("z-index", 200);
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#num_5").css('transform','scale(3)');
        
               $("#num_5").animate({
                   opacity: 0,
               },500);
           },1000);
           setTimeout(function(){
            $("#num_5").css("display", "none");
            },1500);
       },1500)
       });  
       $("#num_6").on('click', function() {
        click.play();
        click.currentTime = 0;
        dem += 1;
        if(dem == 10){
            setTimeout(function(){
                $("#thongbao").css("display", "inline")
                chucmung.play();
            },3000)
        }
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#num_6").animate({
               top: 335,
               left: 651
               },500);
           $("#num_6").css('transform','scale(1.4)');
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#num_6").css('transform','scale(3)');
    
               $("#num_6").animate({
                   opacity: 0,
               },500);
           },1000);
           setTimeout(function(){
            $("#num_6").css("display", "none");
            },1500);
       },1500)
       });  
       $("#num_7").on('click', function() {
        click.play();
        click.currentTime = 0;
        dem += 1;
        if(dem == 10){
            setTimeout(function(){
                $("#thongbao").css("display", "inline")
                chucmung.play();
            },3000)
        }
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#num_7").animate({
               top: 335,
               left: 651
               },500);
            $("#num_7").css("z-index", 200);
           $("#num_7").css('transform','scale(1.4)');
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#num_7").css('transform','scale(3)');
         
               $("#num_7").animate({
                   opacity: 0,
               },500);
           },1000);
           setTimeout(function(){
            $("#num_7").css("display", "none");
            },1500);
       },1500)
       });  
       $("#num_8").on('click', function() {
        click.play();
        click.currentTime = 0;
        dem += 1;
        if(dem == 10){
            setTimeout(function(){
                $("#thongbao").css("display", "inline")
                chucmung.play();
            },3000)
        }
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#num_8").animate({
               top: 335,
               left: 651
               },500);
           $("#num_8").css('transform','scale(1.4)');
           $("#num_8").css("z-index", 200);
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#num_8").css('transform','scale(3)');
              
               $("#num_8").animate({
                   opacity: 0,
               },500);
               setTimeout(function(){
                $("#num_8").css("display", "none");
                },1500);
           },1000);
       },1500)
       });  

       $("#num_9").on('click', function() {
        click.play();
        click.currentTime = 0;
        // console.log("dem:" +dem)
        dem += 1;
        if(dem == 10){
            setTimeout(function(){
                $("#thongbao").css("display", "inline")
                chucmung.play();
            },3000)
        }
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#num_9").animate({
               top: 335,
               left: 651
               },500);
           $("#num_9").css('transform','scale(1.4)');
           $("#num_9").css("z-index", 200);
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#num_9").css('transform','scale(3)');
             
               $("#num_9").animate({
                   opacity: 0,
               },500);
           },1000);
           setTimeout(function(){
            $("#num_9").css("display", "none");
            },1500);
       },1500)
       });  
     
       $("#tieptuc").on("click", function(){
		click.play();
		click.currentTime = 0;
		setTimeout(function(){
			window.parent.cpAPIInterface.setVariableValue("cpCmndNextSlide", 1);
		}, 400)
		
	})

    });