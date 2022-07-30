function init() {
    var click = new Audio('voice/click.mp3');
    var tb_dung = new Audio('voice/dung.mp3');
    var tb_sai = new Audio('voice/sai.mp3');
    var dung = new Audio('voice/D3_55.wav');
    var sai = new Audio('voice/D3_54.wav');

    var  test1 = 0;
    var  test2 = 0;
    var  test3 = 0;
   

    var check1 = 0;
    var check2 = 0; 
    var check3 = 0;

   
    $("#cauhoi").animate({
         opacity: 1,
        top:"63px"
    }, 600);



//drop

    //1
    var drop1_1 = $("#dro1").position().left;
    var drop1_2 = $("#dro1").position().top;

    var drop2_1 = $("#dro2").position().left;
    var drop2_2 = $("#dro2").position().top;
   
    var drop3_1 = $("#dro3").position().left;
    var drop3_2 = $("#dro3").position().top;



    var drag1_1 = $("#drag1").position().left;
    var drag1_2 = $("#drag1").position().top;

    var drag2_1 = $("#drag2").position().left;
    var drag2_2 = $("#drag2").position().top;

    var drag3_1 = $("#drag3").position().left;
    var drag3_2 = $("#drag3").position().top;


  
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
            $("#drag1").css("z-index", 200);
        }

    });

    $("#drag2").draggable({

        revert: "invalid",

        drag: function() {
            $("#drag2").css("z-index", 99);
            id = 2;

        },
        stop: function() {
            $("#drag2").css("z-index", 200);

        }

    });
    $("#drag3").draggable({

        revert: "invalid",

        drag: function() {
            $("#drag3").css("z-index", 99);
            id = 3;

        },
        stop: function() {
            $("#drag3").css("z-index", 200);

        }

    });


  
    
  
    $("#dro1").droppable({ 
        drop: function(event, ui) {
           
            if (id == 1) 
            {   test1 = 1;
                check1 = 1;
                $("#drag1").css("left", drop1_1); 
                $("#drag1").css("top", drop1_2);
              

                if ($("#drag2").position().left == drop1_1 && $("#drag2").position().top == drop1_2) 
                {
                    $("#drag2").animate({ 
                        left: drag2_1,
                        top: drag2_2
                    });
                    $("#drag2").css("background", "url('img/drag_2.png') no-repeat");
                }
                if ($("#drag3").position().left == drop1_1 && $("#drag3").position().top == drop1_2) {
                    $("#drag3").animate({
                        left: drag3_1,
                        top: drag3_2
                    });
                    $("#drag3").css("background", "url('img/drag_3.png') no-repeat");
                }
                if ($("#drag4").position().left == drop1_1 && $("#drag4").position().top == drop1_2) {
                    $("#drag4").animate({
                        left: drag4_1,
                        top: drag4_2
                    });
                    $("#drag4").css("background", "url('img/drag_4.png') no-repeat");
                }
                if ($("#drag5").position().left == drop1_1 && $("#drag5").position().top == drop1_2) {
                    $("#drag5").animate({
                        left: drag5_1,
                        top: drag5_2
                    });
                    $("#drag5").css("background", "url('img/drag_5.png') no-repeat");
                }
                if ($("#drag6").position().left == drop1_1 && $("#drag6").position().top == drop1_2) {
                    $("#drag6").animate({
                        left: drag6_1,
                        top: drag6_2
                    });
                    $("#drag6").css("background", "url('img/drag_6.png') no-repeat");
                }
              
              }

              
                if (id == 2) 
                {   test1 = 1;
                    check1 = 2;
                    $("#drag2").css("left", drop1_1); 
                    $("#drag2").css("top", drop1_2);
                  
    
                    if ($("#drag1").position().left == drop1_1 && $("#drag1").position().top == drop1_2) 
                    {
                        $("#drag1").animate({ 
                            left: drag1_1,
                            top: drag1_2
                        });
                        $("#drag1").css("background", "url('img/drag_1.png') no-repeat");
                    }
                    if ($("#drag3").position().left == drop1_1 && $("#drag3").position().top == drop1_2) {
                        $("#drag3").animate({
                            left: drag3_1,
                            top: drag3_2
                        });
                        $("#drag3").css("background", "url('img/drag_3.png') no-repeat");
                       
                    }
                    if ($("#drag4").position().left == drop1_1 && $("#drag4").position().top == drop1_2) {
                        $("#drag4").animate({
                            left: drag4_1,
                            top: drag4_2
                        });
                        $("#drag4").css("background", "url('img/drag_4.png') no-repeat");
                    }
                    if ($("#drag5").position().left == drop1_1 && $("#drag5").position().top == drop1_2) {
                        $("#drag5").animate({
                            left: drag5_1,
                            top: drag5_2
                        });
                        $("#drag5").css("background", "url('img/drag_5.png') no-repeat");
                    }
                      if ($("#drag6").position().left == drop1_1 && $("#drag6").position().top == drop1_2) {
                        $("#drag6").animate({
                            left: drag6_1,
                            top: drag6_2
                        });
                        $("#drag6").css("background", "url('img/drag_6.png') no-repeat");
                    }
                   
                  } 
                  //id ==3
                  if (id == 3) 
                  { test1 = 1;
                    check1 = 3;
                      $("#drag3").css("left", drop1_1); 
                      $("#drag3").css("top", drop1_2);
                    
                      if ($("#drag1").position().left == drop1_1 && $("#drag1").position().top == drop1_2) 
                      {
                          $("#drag1").animate({ 
                              left: drag1_1,
                              top: drag1_2
                          });
                          $("#drag1").css("background", "url('img/drag_1.png') no-repeat");
                      }
                      if ($("#drag2").position().left == drop1_1 && $("#drag2").position().top == drop1_2) {
                          $("#drag2").animate({
                              left: drag2_1,
                              top: drag2_2
                          });
                          $("#drag2").css("background", "url('img/drag_2.png') no-repeat");
                      }
                   
                   
                    if ($("#drag4").position().left == drop1_1 && $("#drag4").position().top == drop1_2) {
                        $("#drag4").animate({
                            left: drag4_1,
                            top: drag4_2
                        });
                        $("#drag4").css("background", "url('img/drag_4.png') no-repeat");
                    }
                    if ($("#drag5").position().left == drop1_1 && $("#drag5").position().top == drop1_2) {
                        $("#drag5").animate({
                            left: drag5_1,
                            top: drag5_2
                        });
                        $("#drag5").css("background", "url('img/drag_5.png') no-repeat");
                    }
                    if ($("#drag6").position().left == drop1_1 && $("#drag6").position().top == drop1_2) {
                        $("#drag6").animate({
                            left: drag6_1,
                            top: drag6_2
                        });
                        $("#drag6").css("background", "url('img/drag_6.png') no-repeat");
                    }
                    
                }
                
            
        
                if(test1 != 0 && test2 != 0  && test3 != 0 ){
                        $("#kiemtra").css("display", "inline");
                 }
                    
          }
      });
       $("#dro2").droppable({ 
                drop: function(event, ui) {
                   
                    if (id == 1) 
                    {   test2 = 1;
                        check2 = 1;
                        $("#drag1").css("left", drop2_1); 
                        $("#drag1").css("top", drop2_2);
                      
        
                        if ($("#drag2").position().left == drop2_1 && $("#drag2").position().top == drop2_2) 
                        {
                            $("#drag2").animate({ 
                                left: drag2_1,
                                top: drag2_2
                            });
                            $("#drag2").css("background", "url('img/drag_2.png') no-repeat");
                        }
                        if ($("#drag3").position().left == drop2_1 && $("#drag3").position().top == drop2_2) {
                            $("#drag3").animate({
                                left: drag3_1,
                                top: drag3_2
                            });
                            $("#drag3").css("background", "url('img/drag_3.png') no-repeat");
                        }
                        if ($("#drag4").position().left == drop2_1 && $("#drag4").position().top == drop2_2) {
                            $("#drag4").animate({
                                left: drag4_1,
                                top: drag4_2
                            });
                            $("#drag4").css("background", "url('img/drag_4.png') no-repeat");
                        }
                        if ($("#drag5").position().left == drop2_1 && $("#drag5").position().top == drop2_2) {
                            $("#drag5").animate({
                                left: drag5_1,
                                top: drag5_2
                            });
                            $("#drag5").css("background", "url('img/drag_5.png') no-repeat");
                        }
                        if ($("#drag6").position().left == drop2_1 && $("#drag6").position().top == drop2_2) {
                            $("#drag6").animate({
                                left: drag6_1,
                                top: drag6_2
                            });
                            $("#drag6").css("background", "url('img/drag_6.png') no-repeat");
                        }
                      
                      }
        
                      
                        if (id == 2) 
                        {   test2 = 1;
                                check2 = 2;
                            $("#drag2").css("left", drop2_1); 
                            $("#drag2").css("top", drop2_2);
                          
            
                            if ($("#drag1").position().left == drop2_1 && $("#drag1").position().top == drop2_2) 
                            {
                                $("#drag1").animate({ 
                                    left: drag1_1,
                                    top: drag1_2
                                });
                                $("#drag1").css("background", "url('img/drag_1.png') no-repeat");
                            }
                            if ($("#drag3").position().left == drop2_1 && $("#drag3").position().top == drop2_2) {
                                $("#drag3").animate({
                                    left: drag3_1,
                                    top: drag3_2
                                });
                                $("#drag3").css("background", "url('img/drag_3.png') no-repeat");
                               
                            }
                            if ($("#drag4").position().left == drop2_1 && $("#drag4").position().top == drop2_2) {
                                $("#drag4").animate({
                                    left: drag4_1,
                                    top: drag4_2
                                });
                                $("#drag4").css("background", "url('img/drag_4.png') no-repeat");
                            }
                            if ($("#drag5").position().left == drop2_1 && $("#drag5").position().top == drop2_2) {
                                $("#drag5").animate({
                                    left: drag5_1,
                                    top: drag5_2
                                });
                                $("#drag5").css("background", "url('img/drag_5.png') no-repeat");
                            }
                              if ($("#drag6").position().left == drop2_1 && $("#drag6").position().top == drop2_2) {
                                $("#drag6").animate({
                                    left: drag6_1,
                                    top: drag6_2
                                });
                                $("#drag6").css("background", "url('img/drag_6.png') no-repeat");
                            }
                           
                          } 
                          //id ==3
                          if (id == 3) 
                          { test2 = 1;
                                check2 = 3;
                              $("#drag3").css("left", drop2_1); 
                              $("#drag3").css("top", drop2_2);
                            
                              if ($("#drag1").position().left == drop2_1 && $("#drag1").position().top == drop2_2) 
                              {
                                  $("#drag1").animate({ 
                                      left: drag1_1,
                                      top: drag1_2
                                  });
                                  $("#drag1").css("background", "url('img/drag_1.png') no-repeat");
                              }
                              if ($("#drag2").position().left == drop2_1 && $("#drag2").position().top == drop2_2) {
                                  $("#drag2").animate({
                                      left: drag2_1,
                                      top: drag2_2
                                  });
                                  $("#drag2").css("background", "url('img/drag_2.png') no-repeat");
                              }
                           
                           
                            if ($("#drag4").position().left == drop2_1 && $("#drag4").position().top == drop2_2) {
                                $("#drag4").animate({
                                    left: drag4_1,
                                    top: drag4_2
                                });
                                $("#drag4").css("background", "url('img/drag_4.png') no-repeat");
                            }
                            if ($("#drag5").position().left == drop2_1 && $("#drag5").position().top == drop2_2) {
                                $("#drag5").animate({
                                    left: drag5_1,
                                    top: drag5_2
                                });
                                $("#drag5").css("background", "url('img/drag_5.png') no-repeat");
                            }
                            if ($("#drag6").position().left == drop2_1 && $("#drag6").position().top == drop2_2) {
                                $("#drag6").animate({
                                    left: drag6_1,
                                    top: drag6_2
                                });
                                $("#drag6").css("background", "url('img/drag_6.png') no-repeat");
                            }
                            
                        }
                        
                        if(test1 != 0 && test2 != 0  && test3 != 0 ){
                                $("#kiemtra").css("display", "inline");
                         }
                            
                  }
              });
         $("#dro3").droppable({ 
                    drop: function(event, ui) {
                       
                        if (id == 1) 
                        {   test3 = 1;
                            check3 = 1;
                            $("#drag1").css("left", drop3_1); 
                            $("#drag1").css("top", drop3_2);
                          
            
                            if ($("#drag2").position().left == drop3_1 && $("#drag2").position().top == drop3_2) 
                            {
                                $("#drag2").animate({ 
                                    left: drag2_1,
                                    top: drag2_2
                                });
                                $("#drag2").css("background", "url('img/drag_2.png') no-repeat");
                            }
                            if ($("#drag3").position().left == drop3_1 && $("#drag3").position().top == drop3_2) {
                                $("#drag3").animate({
                                    left: drag3_1,
                                    top: drag3_2
                                });
                                $("#drag3").css("background", "url('img/drag_3.png') no-repeat");
                            }
                            if ($("#drag4").position().left == drop3_1 && $("#drag4").position().top == drop3_2) {
                                $("#drag4").animate({
                                    left: drag4_1,
                                    top: drag4_2
                                });
                                $("#drag4").css("background", "url('img/drag_4.png') no-repeat");
                            }
                            if ($("#drag5").position().left == drop3_1 && $("#drag5").position().top == drop3_2) {
                                $("#drag5").animate({
                                    left: drag5_1,
                                    top: drag5_2
                                });
                                $("#drag5").css("background", "url('img/drag_5.png') no-repeat");
                            }
                            if ($("#drag6").position().left == drop3_1 && $("#drag6").position().top == drop3_2) {
                                $("#drag6").animate({
                                    left: drag6_1,
                                    top: drag6_2
                                });
                                $("#drag6").css("background", "url('img/drag_6.png') no-repeat");
                            }
                          
                          }
                            
                          
                            if (id == 2) 
                            {   test3 = 1;
                                check3 = 2;
                                $("#drag2").css("left", drop3_1); 
                                $("#drag2").css("top", drop3_2);
                              
                
                                if ($("#drag1").position().left == drop3_1 && $("#drag1").position().top == drop3_2) 
                                {
                                    $("#drag1").animate({ 
                                        left: drag1_1,
                                        top: drag1_2
                                    });
                                    $("#drag1").css("background", "url('img/drag_1.png') no-repeat");
                                }
                                if ($("#drag3").position().left == drop3_1 && $("#drag3").position().top == drop3_2) {
                                    $("#drag3").animate({
                                        left: drag3_1,
                                        top: drag3_2
                                    });
                                    $("#drag3").css("background", "url('img/drag_3.png') no-repeat");
                                   
                                }
                                if ($("#drag4").position().left == drop3_1 && $("#drag4").position().top == drop3_2) {
                                    $("#drag4").animate({
                                        left: drag4_1,
                                        top: drag4_2
                                    });
                                    $("#drag4").css("background", "url('img/drag_4.png') no-repeat");
                                }
                                if ($("#drag5").position().left == drop3_1 && $("#drag5").position().top == drop3_2) {
                                    $("#drag5").animate({
                                        left: drag5_1,
                                        top: drag5_2
                                    });
                                    $("#drag5").css("background", "url('img/drag_5.png') no-repeat");
                                }
                                  if ($("#drag6").position().left == drop3_1 && $("#drag6").position().top == drop3_2) {
                                    $("#drag6").animate({
                                        left: drag6_1,
                                        top: drag6_2
                                    });
                                    $("#drag6").css("background", "url('img/drag_6.png') no-repeat");
                                }
                               
                              } 
                              //id ==3
                              if (id == 3) 
                              { test3 = 1;
                                check3 = 3;
                                  $("#drag3").css("left", drop3_1); 
                                  $("#drag3").css("top", drop3_2);
                                
                                  if ($("#drag1").position().left == drop3_1 && $("#drag1").position().top == drop3_2) 
                                  {
                                      $("#drag1").animate({ 
                                          left: drag1_1,
                                          top: drag1_2
                                      });
                                      $("#drag1").css("background", "url('img/drag_1.png') no-repeat");
                                  }
                                  if ($("#drag2").position().left == drop3_1 && $("#drag2").position().top == drop3_2) {
                                      $("#drag2").animate({
                                          left: drag2_1,
                                          top: drag2_2
                                      });
                                      $("#drag2").css("background", "url('img/drag_2.png') no-repeat");
                                  }
                               
                               
                                if ($("#drag4").position().left == drop3_1 && $("#drag4").position().top == drop3_2) {
                                    $("#drag4").animate({
                                        left: drag4_1,
                                        top: drag4_2
                                    });
                                    $("#drag4").css("background", "url('img/drag_4.png') no-repeat");
                                }
                                if ($("#drag5").position().left == drop3_1 && $("#drag5").position().top == drop3_2) {
                                    $("#drag5").animate({
                                        left: drag5_1,
                                        top: drag5_2
                                    });
                                    $("#drag5").css("background", "url('img/drag_5.png') no-repeat");
                                }
                                if ($("#drag6").position().left == drop3_1 && $("#drag6").position().top == drop3_2) {
                                    $("#drag6").animate({
                                        left: drag6_1,
                                        top: drag6_2
                                    });
                                    $("#drag6").css("background", "url('img/drag_6.png') no-repeat");
                                }
                                
                            }
                         
                            if(test1 != 0 && test2 != 0  && test3 != 0 ){
                                    $("#kiemtra").css("display", "inline");
                             }
                                
                      }
                  });
             
                        
                    
                
            
        
      
        
        $("#kiemtra").on("click", function(){
               
                    click.play();
                    click.currentTime = 0
                 
                     $("#kiemtra, #goiy").css("display", "none");
                     $("#che").css("display", "inline");
                    if(check1 == 1 && check2 == 2 && check3 == 3){
                        tb_dung.play();
                        dung.play();
                        $("#t1,#t2, #t3").css("display", "inline");
                        setTimeout(function(){
                        $("#tieptuc").css("display", "inline");
                        }, 4000);
                        setTimeout(function(){
                            $("#img1").animate({
                                opacity: 1,
                        },400)
                        }, 2000);
                        setTimeout(function(){
                            $("#img2").animate({
                                opacity: 1,
                        },400)
                        }, 2500);
                        
                        setTimeout(function(){
                            $("#img3").animate({
                                opacity: 1,
                        },400)
                        }, 3000);
                        
                   
                    }
                    else{
                            if(check1 == 1){
                                  $("#t1").css("display", "inline");
                            }
                            else{
                                $("#x1").css("display", "inline");
                            }
                            if(check2 == 2){
                                $("#t2").css("display", "inline");
                            }
                            else{
                                $("#x2").css("display", "inline");
                            }
                            if(check3 == 3){
                                $("#t3").css("display", "inline");
                            }
                            else{
                                $("#x3").css("display", "inline");
                            }
                            sai.play();
                            sai.currentTime = 0;
                            tb_sai.play();
                            tb_sai.currentTime = 0;
                            $("#lamlai").css("display", "inline");
                    }
                 
                       
             
                });   
                  
            $("#lamlai").on("click", function(){
                    click.play();
                    click.currentTime = 0
                    sai.pause();
                    tb_sai.pause();
                    tb_sai.currentTime = 0;
                     
                   $("#t1,#t2, #t3,#x1,#x2,#x3").css("display", "none");
                    $("#lamlai,#che").hide();
                    $("#drag1").animate({
                        left: drag1_1,
                        top: drag1_2
                    });
                    $("#drag2").animate({
                        left: drag2_1,
                        top: drag2_2
                    });
                    $("#drag3").animate({
                        left: drag3_1,
                        top: drag3_2
                    });
                   
                
            
                    check1 = 0;
                    check2 = 0;
                    check3 = 0;
                    check4 = 0;
                    check5 = 0;
                    check6 = 0;
                
                    test1 = 0;
                    test2 = 0;
                    test3 = 0;
                    test4 = 0;
                    test5 = 0;
                    test6 = 0;
                   
                });
                
            
     $("#tieptuc").on("click", function(){
        click.play();
        click.currentTime = 0
        setTimeout(function(){
            window.parent.cpAPIInterface.setVariableValue("cpCmndNextSlide", 1);
        }, 500);
      
    })

            
}