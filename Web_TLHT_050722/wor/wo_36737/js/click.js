$(document).ready(function() {
   
var click = new Audio ('voice/click.mp3');
var ngoiSao1 = new Audio('voice/ngoiSao.mp3')
var ngoiSao2 = new Audio('voice/ngoiSao1.mp3')
  
  
 var class_1 = window.parent.cpAPIInterface.getVariableValue("lop1");
 var class_2 = window.parent.cpAPIInterface.getVariableValue("lop2");
 var class_3 = window.parent.cpAPIInterface.getVariableValue("lop3");
 var class_4 = window.parent.cpAPIInterface.getVariableValue("lop4");
 var class_5 = window.parent.cpAPIInterface.getVariableValue("lop5");

    setTimeout(function(){
        $("#bus").css("display","inline");
        $("#bus").animate({
            opacity: 1,
            top: 519,
            height: 248
        },500)
    },600)
    setTimeout(function(){
        $("#may1").css("display","inline");
        $("#may1").animate({
            opacity: 1,
            top: 196,
        },500)
    },1000)
    setTimeout(function(){
        $("#may2").css("display","inline");
        $("#may2").animate({
            opacity: 1,
            top: 382,
        },500)
    },1400)
    setTimeout(function(){
        $("#may3").css("display","inline");
        $("#may3").animate({
            opacity: 1,
            top: 113,
        },500)
    },1800)
    setTimeout(function(){
        $("#may4").css("display","inline");
        $("#may4").animate({
            opacity: 1,
            top: 365,
        },500)
    },2200)
    setTimeout(function(){
        $("#may5").css("display","inline");
        $("#may5").animate({
            opacity: 1,
            top: 142,
        },500)
    },2600)
    setTimeout(function(){
        $("#class1").css("display","inline");
        $("#class1").animate({
            opacity: 1,
        },500)
    },3000)
    setTimeout(function(){
        $("#class2").css("display","inline");
        $("#class2").animate({
            opacity: 1,
        },500)
    },3200)
    setTimeout(function(){
        $("#class3").css("display","inline");
        $("#class3").animate({
            opacity: 1,
        },500)
    },3400)
    setTimeout(function(){
        $("#class4").css("display","inline");
        $("#class4").animate({
            opacity: 1,
        },500)
    },3600)
    setTimeout(function(){
        $("#class5").css("display","inline");
        $("#class5").animate({
            opacity: 1,
        },500)
    },3800)
    setTimeout(function(){
        $("#txt").css("display","inline");
        $("#txt").animate({
            opacity: 1,
            left: 72
        },500)
    },4200)
    //sukienclick
    $("#class1").on('click', function() {
     click.play();
     click.currentTime = 0;
     $("#che").css("display","inline");
     window.parent.cpAPIInterface.setVariableValue("lop1", 1);
    setTimeout(function(){
        ngoiSao1.currentTime = 0;
        ngoiSao1.play();
        $("#class1").animate({
            top: 335,
            left: 651
            },500);
        $("#class1").css('transform','scale(1.4)');
        setTimeout(function(){
            ngoiSao2.currentTime = 0;
            ngoiSao2.play();
            $("#class1").css('transform','scale(3)');
            $("#class1").animate({
                opacity: 0,
            },500);
        },1000);
    },1500)
    setTimeout(function(){
         $("#bus").animate({
             left: 10,
         }, 600);
         setTimeout(function(){
            $("#bus").animate({
                 opacity: 0
             }, 700)
            },500);
    },3000)
    setTimeout(function(){
         window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide",2);
    },4000)
    });  
    
    $("#class2").on('click', function() {
        click.play();
        click.currentTime = 0;
        $("#che").css("display","inline");
        window.parent.cpAPIInterface.setVariableValue("lop2", 1);
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#class2").animate({
               top: 335,
               left: 651
               },500);
           $("#class2").css('transform','scale(1.4)');
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#class2").css('transform','scale(3)');
               $("#class2").animate({
                   opacity: 0,
               },500);
           },1000);
       },1500)
       setTimeout(function(){
            $("#bus").animate({
                left: 10,
            }, 600);
            setTimeout(function(){
               $("#bus").animate({
                    opacity: 0
                }, 700)
               },500);
       },3000)
       setTimeout(function(){
            window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide", 9);
       },4000)
       });  

       $("#class3").on('click', function() {
        click.play();
        click.currentTime = 0;
        $("#che").css("display","inline");
        //window.parent.cpAPIInterface.setVariableValue("lop3", 1);
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#class3").animate({
               top: 335,
               left: 651
               },500);
           $("#class3").css('transform','scale(1.4)');
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#class3").css('transform','scale(3)');
               $("#class3").animate({
                   opacity: 0,
               },500);
           },1000);
       },1500)
       setTimeout(function(){
            $("#bus").animate({
                left: 10,
            }, 600);
            setTimeout(function(){
               $("#bus").animate({
                    opacity: 0
                }, 700)
               },500);
       },3000)
       setTimeout(function(){
            window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide", 15);
       },4000)
       });  

       $("#class4").on('click', function() {
        click.play();
        click.currentTime = 0;
        $("#che").css("display","inline");
        window.parent.cpAPIInterface.setVariableValue("lop4", 1);
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#class4").animate({
               top: 335,
               left: 651
               },500);
           $("#class4").css('transform','scale(1.4)');
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#class4").css('transform','scale(3)');
               $("#class4").animate({
                   opacity: 0,
               },500);
           },1000);
       },1500)
       setTimeout(function(){
            $("#bus").animate({
                left: 10,
            }, 600);
            setTimeout(function(){
               $("#bus").animate({
                    opacity: 0
                }, 700)
               },500);
       },3000)
       setTimeout(function(){
            window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide", 22);
       },4000)
       });  

       $("#class5").on('click', function() {
        click.play();
        click.currentTime = 0;
        $("#che").css("display","inline");
        window.parent.cpAPIInterface.setVariableValue("lop5", 1);
       setTimeout(function(){
           ngoiSao1.currentTime = 0;
           ngoiSao1.play();
           $("#class5").animate({
               top: 335,
               left: 651
               },500);
           $("#class5").css('transform','scale(1.4)');
           setTimeout(function(){
               ngoiSao2.currentTime = 0;
               ngoiSao2.play();
               $("#class5").css('transform','scale(3)');
               $("#class5").animate({
                   opacity: 0,
               },500);
           },1000);
       },1500)
       setTimeout(function(){
            $("#bus").animate({
                left: 10,
            }, 600);
            setTimeout(function(){
               $("#bus").animate({
                    opacity: 0
                }, 700)
               },500);
       },3000)
       setTimeout(function(){
           window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide", 29);
       },4000)
       });  
  
    });