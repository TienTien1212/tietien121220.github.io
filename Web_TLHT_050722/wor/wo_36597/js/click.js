$(document).ready(function() {

  var click = new Audio('voice/click.mp3');
  var dung = new Audio('voice/M6_61_4.wav')
  var tb_dung = new Audio('voice/tiengtldung.mp3')
  var sai = new Audio('voice/M6_61_3.wav')
  var tb_sai = new Audio('voice/tiengtlsai.mp3')
  
    
 var  test1 = 0;
 



//drop

    //1
    var drop1_1 = $("#dro1").position().left;
    var drop1_2 = $("#dro1").position().top;



   

  
//drag
  
    var drag1_1 = $("#drag1").position().left;
    var drag1_2 = $("#drag1").position().top;

   
    var drag2_1 = $("#drag2").position().left;
    var drag2_2 = $("#drag2").position().top;

   
    var drag3_1 = $("#drag3").position().left;
    var drag3_2 = $("#drag3").position().top;

    var drag4_1 = $("#drag4").position().left;
    var drag4_2 = $("#drag4").position().top;

   

   
  

  
// drag
    var id = 0;
    //1
    $("#drag1").draggable({

        revert: "invalid",

        drag: function() {
            $("#drag1").css("z-index", 99);
            id = 1;
        },
        stop: function() {
            $("#drag1").css("z-index", 1);
        }

    });

    $("#drag2").draggable({

        revert: "invalid",

        drag: function() {
            $("#drag2").css("z-index", 99);
            id = 2;

        },
        stop: function() {
            $("#drag2").css("z-index", 1);

        }

    });

    $("#drag3").draggable({

        revert: "invalid",

        drag: function() {
            $("#drag3").css("z-index", 99);
            id = 3;
        },
        stop: function() {
            $("#drag3").css("z-index", 1);
        }

    });
    $("#drag4").draggable({

        revert: "invalid",

        drag: function() {
            $("#drag4").css("z-index", 99);
            id = 4;
        },
        stop: function() {
            $("#drag4").css("z-index", 1);
        }

    });
    
  

  
    
    var check1 = 0;
    //drop1
    $("#dro1").droppable({ 
        drop: function(event, ui) {
           
            //drag1_a
            if (id == 1) 
            {   test1 = 1;
                check1 = 0;
                $("#drag1").css("left", drop1_1); 
                $("#drag1").css("top", drop1_2);
              

                if ($("#drag2").position().left == drop1_1 && $("#drag2").position().top == drop1_2) 
                {
                    $("#drag2").animate({ 
                        left: drag2_1,
                        top: drag2_2
                    });
                }
                if ($("#drag3").position().left == drop1_1 && $("#drag3").position().top == drop1_2) {
                    $("#drag3").animate({
                        left: drag3_1,
                        top: drag3_2
                    });
                   
                }
                if ($("#drag4").position().left == drop1_1 && $("#drag4").position().top == drop1_2) {
                    $("#drag4").animate({
                        left: drag4_1,
                        top: drag4_2
                    });
                  
                }
              
                
              }

              
                if (id == 2) 
                {   test1 = 1;
                    check1 = 1;
                    $("#drag2").css("left", drop1_1); 
                    $("#drag2").css("top", drop1_2);
                  
    
                    if ($("#drag1").position().left == drop1_1 && $("#drag1").position().top == drop1_2) 
                    {
                        $("#drag1").animate({ 
                            left: drag1_1,
                            top: drag1_2
                        });
                    }
                    if ($("#drag3").position().left == drop1_1 && $("#drag3").position().top == drop1_2) {
                        $("#drag3").animate({
                            left: drag3_1,
                            top: drag3_2
                        });
                       
                    }
                    if ($("#drag4").position().left == drop1_1 && $("#drag4").position().top == drop1_2) {
                        $("#drag4").animate({
                            left: drag4_1,
                            top: drag4_2
                        });
                      
                    }

                   
                 
                  } 
                  //id ==3
                  if (id == 3) 
                  { test1 = 1;
                    check1 = 0;
                      $("#drag3").css("left", drop1_1); 
                      $("#drag3").css("top", drop1_2);
                    
      
                      if ($("#drag1").position().left == drop1_1 && $("#drag1").position().top == drop1_2) 
                      {
                          $("#drag1").animate({ 
                              left: drag1_1,
                              top: drag1_2
                          });
                      }
                      if ($("#drag2").position().left == drop1_1 && $("#drag2").position().top == drop1_2) {
                          $("#drag2").animate({
                              left: drag2_1,
                              top: drag2_2
                          });
                         
                      }
                      if ($("#drag4").position().left == drop1_1 && $("#drag4").position().top == drop1_2) {
                          $("#drag4").animate({
                              left: drag4_1,
                              top: drag4_2
                          });
                        
                      }
                   
                    }
                    //id ==4
                    if (id == 4) 
                    {   test1 = 1;
                        check1 = 0;
                        $("#drag4").css("left", drop1_1); 
                        $("#drag4").css("top", drop1_2);
                      
        
                        if ($("#drag1").position().left == drop1_1 && $("#drag1").position().top == drop1_2) 
                        {
                            $("#drag1").animate({ 
                                left: drag1_1,
                                top: drag1_2
                            });
                        }
                        if ($("#drag2").position().left == drop1_1 && $("#drag2").position().top == drop1_2) {
                            $("#drag2").animate({
                                left: drag2_1,
                                top: drag2_2
                            });
                           
                        }
                        if ($("#drag3").position().left == drop1_1 && $("#drag3").position().top == drop1_2) {
                            $("#drag3").animate({
                                left: drag3_1,
                                top: drag3_2
                            });
                          
                        }
                       
                     
                      }
                     
                      if(test1 != 0){
                        $("#kiemtra").css("display", "inline");
                        $("#kiemtra").animate({
                           opacity: 1
                        }, 400)
                       
                    }
                    
          }
      });  
              
           
   
            

   
     $("#kiemtra").on("click", function(){
      //  nen.pause();
        click.play();
        click.currentTime = 0
        $("#che").css("display", "inline");
         $("#kiemtra").css("display", "none");
         $("#kiemtra").animate({
            opacity: 0
         }, 400)
         if(check1 == 1){
             tb_dung.play();
             dung.play();
            $("#tieptuc, #tick").css("display", "inline");
            $("#tieptuc, #tick").animate({
               opacity: 1
            }, 400)
         }
         else{
             sai.play();
             sai.currentTime = 0;
             tb_sai.play();
             tb_sai.currentTime = 0;
            $("#lamlai, #x").css("display", "inline");
            $("#lamlai, #x").animate({
               opacity: 1
            }, 400)
         }
       
       
      
     });   
   $("#lamlai").on("click", function(){
    click.play();
    click.currentTime = 0
    sai.pause();
    tb_sai.pause();
  //  nen.play();
  //  nen.currentTime = 0;
    $("#lamlai, #x, #che").css("display", "none");
    $("#lamlai, #x").animate({
       opacity: 0
    }, 400)
    $("#drag4").animate({
        left: drag4_1,
        top: drag4_2
    });
    $("#drag2").animate({
        left: drag2_1,
        top: drag2_2
    });
    $("#drag3").animate({ 
        left: drag3_1,
        top: drag3_2
    });
    $("#drag1").animate({
        left: drag1_1,
        top: drag1_2
    });
    check1 = 0;
    test1 = 0;
   })
     $("#tieptuc").on("click", function(){
        click.play();
        click.currentTime = 0
       window.parent.cpAPIInterface.setVariableValue("cpCmndNextSlide", 1);
    })
            
    
    
    
    

});