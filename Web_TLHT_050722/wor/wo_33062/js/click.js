$(document).ready(function() {
    var cauhoi = new Audio('voice/cauhoi.wav');
    var dung = new Audio('voice/06_D.mp3');
    var sai = new Audio('voice/06_S.mp3');
    var tbsai = new Audio('voice/tiengtlsai.mp3');
    var dung_1 = new Audio('voice/correct.mp3');
    var click = new Audio ('voice/click.mp3');

    var drop1_1 = $("#sticker").position().left;
    var drop1_2 = $("#sticker").position().top;

    var drag1_1 = $("#contho").position().left;
    var drag1_2 = $("#contho").position().top;

    var drag2_1 = $("#conrua").position().left;
    var drag2_2 = $("#conrua").position().top;

    var test1 =  0;
    var id = 0;
    cauhoi.play();
    $("#contho").draggable({

        revert: "invalid",

        drag: function() {
            $("#contho").css("z-index", 99);
            id = 1;
        },
        stop: function() {
            $("#contho").css("z-index", 1);
            $("#contho").css({ "background": "url('img/05.png') no-repeat" });
        }

    });
    $("#conrua").draggable({

        revert: "invalid",

        drag: function() {
            $("#conrua").css("z-index", 99);
            id = 2;

        },
        stop: function() {
            $("#conrua").css("z-index", 1);
            $("#conrua").css({ "background": "url('img/07.png') no-repeat" });
        }

    });
    var check = 0;


    $("#sticker").droppable({
        drop: function(event, ui) {

            if (id == 1) {
                test1 = 1;
                $("#contho").css("left", drop1_1);
                $("#contho").css("top", drop1_2);
                check = 1;

                if ($("#conrua").position().left == drop1_1 && $("#conrua").position().top == drop1_2) {
                    $("#conrua").animate({
                        left: drag2_1,
                        top: drag2_2
                    });
                }
                if(test1 != 0 ){
                    $("#kiemtra").css("display", "inline");
                }
            }
            if (id == 2) {
                test1 = 1;
                $("#conrua").css("left", drop1_1);
                $("#conrua").css("top", drop1_2);
                check = 0;


                if ($("#contho").position().left == drop1_1 && $("#contho").position().top == drop1_2) {
                    $("#contho").animate({
                        left: drag1_1,
                        top: drag1_2
                    });
                }

                if(test1 != 0 ){
                    $("#kiemtra").css("display", "inline");
                }
            }

        }

    });
    $("#kiemtra").on("click", function() {
        cauhoi.pause();
        click.play();
        click.currentTime = 0;
        $("#kiemtra").css("display", "none");
        $("#che").css("display", "inline");
        if (check == 1) {
            $("#dung,#ok,#ditiep").css("display", "inline");
            dung_1.play();
            dung.play();
            cauhoi.pause();
            dung.currentTime = 0;
        } else {
            tbsai.play();
            tbsai.currentTime = 0;
            sai.play();
            sai.currentTime = 0;
            $("#sai, #no,#lamlai").css("display", "inline");

        }
    });
    $("#lamlai").on("click", function() {
        click.play();
        click.currentTime = 0;
        dung_1.pause();
        dung.pause();
        cauhoi.pause();
        sai.pause();
        tbsai.pause();
        $("#lamlai,#sai,#no,#che").css("display", "none");
        $("#contho").animate({
            left: drag1_1,
            top: drag1_2

        });
        $("#conrua").animate({
            left: drag2_1,
            top: drag2_2
        });
    });
 $("#ditiep").on("click", function(){
		click.play();
		click.currentTime = 0;
		setTimeout(function(){
			window.parent.cpAPIInterface.setVariableValue("cpCmndNextSlide", 1);
		}, 400)
		
	})

});