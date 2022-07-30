function init() {
    var hu_dung = new Audio("voice/dung.mp3");
    var hu_sai = new Audio("voice/sai.mp3");
    var click = new Audio("voice/click.mp3");

    var test1 = 0;
    var test2 = 0;
    var test3 = 0;
    var test4 = 0;
    var test5 = 0;
    var test6 = 0;
    var test7 = 0;
    var id = 0;

    //khai bao vi tri tha
    var chon_1_1 = $("#ochon1").position().top;
    var chon_1_2 = $("#ochon1").position().left;

    var chon_2_1 = $("#ochon2").position().top;
    var chon_2_2 = $("#ochon2").position().left;

    var chon_3_1 = $("#ochon3").position().top;
    var chon_3_2 = $("#ochon3").position().left;

    var chon_4_1 = $("#ochon4").position().top;
    var chon_4_2 = $("#ochon4").position().left;

    var chon_5_1 = $("#ochon5").position().top;
    var chon_5_2 = $("#ochon5").position().left;

    var chon_6_1 = $("#ochon6").position().top;
    var chon_6_2 = $("#ochon6").position().left;

    var chon_7_1 = $("#ochon7").position().top;
    var chon_7_2 = $("#ochon7").position().left;

    //Kéo
    var da_1_1 = $("#cau_1").position().top;
    var da_1_2 = $("#cau_1").position().left;

    var da_2_1 = $("#cau_2").position().top;
    var da_2_2 = $("#cau_2").position().left;

    var da_3_1 = $("#cau_3").position().top;
    var da_3_2 = $("#cau_3").position().left;

    var da_4_1 = $("#cau_4").position().top;
    var da_4_2 = $("#cau_4").position().left;

    var da_5_1 = $("#cau_5").position().top;
    var da_5_2 = $("#cau_5").position().left;

    var da_6_1 = $("#cau_6").position().top;
    var da_6_2 = $("#cau_6").position().left;

    var da_7_1 = $("#cau_7").position().top;
    var da_7_2 = $("#cau_7").position().left;

    //Kéo đi
    $("#cau_1").draggable({
        revert: "invalid",
        drag: function() {
            $("#cau_1").css("z-index", 99);
            id = 1;
        },
        stop: function() {
            $("#cau_1").css("z-index", 99);
            click.play();
            if (
                ($("#cau_1").position().top == chon_1_1 &&
                    $("#cau_1").position().left == chon_1_2) ||
                ($("#cau_1").position().top == chon_2_1 &&
                    $("#cau_1").position().left == chon_2_2) ||
                ($("#cau_1").position().top == chon_3_1 &&
                    $("#cau_1").position().left == chon_3_2) ||
                ($("#cau_1").position().top == chon_4_1 &&
                    $("#cau_1").position().left == chon_4_2) ||
                ($("#cau_1").position().top == chon_5_1 &&
                    $("#cau_1").position().left == chon_5_2) ||
                ($("#cau_1").position().top == chon_6_1 &&
                    $("#cau_1").position().left == chon_6_2) ||
                ($("#cau_1").position().top == chon_7_1 &&
                    $("#cau_1").position().left == chon_7_2)
            ) {
                $("#cau_1").css("background", "url('img/da1.png') no-repeat center");
            }
        },
    });

    $("#cau_2").draggable({
        revert: "invalid",
        drag: function() {
            $("#cau_2").css("z-index", 99);
            id = 2;
        },
        stop: function() {
            $("#cau_2").css("z-index", 99);
            click.play();
            if (
                ($("#cau_2").position().top == chon_1_1 &&
                    $("#cau_2").position().left == chon_1_2) ||
                ($("#cau_2").position().top == chon_2_1 &&
                    $("#cau_2").position().left == chon_2_2) ||
                ($("#cau_2").position().top == chon_3_1 &&
                    $("#cau_2").position().left == chon_3_2) ||
                ($("#cau_2").position().top == chon_4_1 &&
                    $("#cau_2").position().left == chon_4_2) ||
                ($("#cau_2").position().top == chon_5_1 &&
                    $("#cau_2").position().left == chon_5_2) ||
                ($("#cau_2").position().top == chon_6_1 &&
                    $("#cau_2").position().left == chon_6_2) ||
                ($("#cau_2").position().top == chon_7_1 &&
                    $("#cau_2").position().left == chon_7_2)
            ) {
                $("#cau_2").css("background", "url('img/da2.png') no-repeat center");
            }
        },
    });

    $("#cau_3").draggable({
        revert: "invalid",
        drag: function() {
            $("#cau_3").css("z-index", 99);
            id = 3;
        },
        stop: function() {
            $("#cau_3").css("z-index", 99);
            click.play();
            if (
                ($("#cau_3").position().top == chon_1_1 &&
                    $("#cau_3").position().left == chon_1_2) ||
                ($("#cau_3").position().top == chon_2_1 &&
                    $("#cau_3").position().left == chon_2_2) ||
                ($("#cau_3").position().top == chon_3_1 &&
                    $("#cau_3").position().left == chon_3_2) ||
                ($("#cau_3").position().top == chon_4_1 &&
                    $("#cau_3").position().left == chon_4_2) ||
                ($("#cau_3").position().top == chon_5_1 &&
                    $("#cau_3").position().left == chon_5_2) ||
                ($("#cau_3").position().top == chon_6_1 &&
                    $("#cau_3").position().left == chon_6_2) ||
                ($("#cau_3").position().top == chon_7_1 &&
                    $("#cau_3").position().left == chon_7_2)
            ) {
                $("#cau_3").css("background", "url('img/da3.png') no-repeat center");
            }
        },
    });

    $("#cau_4").draggable({
        revert: "invalid",
        drag: function() {
            $("#cau_4").css("z-index", 99);
            id = 4;
        },
        stop: function() {
            $("#cau_4").css("z-index", 99);
            click.play();
            if (
                ($("#cau_4").position().top == chon_1_1 &&
                    $("#cau_4").position().left == chon_1_2) ||
                ($("#cau_4").position().top == chon_2_1 &&
                    $("#cau_4").position().left == chon_2_2) ||
                ($("#cau_4").position().top == chon_3_1 &&
                    $("#cau_4").position().left == chon_3_2) ||
                ($("#cau_4").position().top == chon_4_1 &&
                    $("#cau_4").position().left == chon_4_2) ||
                ($("#cau_4").position().top == chon_5_1 &&
                    $("#cau_4").position().left == chon_5_2) ||
                ($("#cau_4").position().top == chon_6_1 &&
                    $("#cau_4").position().left == chon_6_2) ||
                ($("#cau_4").position().top == chon_7_1 &&
                    $("#cau_4").position().left == chon_7_2)
            ) {
                $("#cau_4").css("background", "url('img/da4.png') no-repeat center");
            }
        },
    });

    $("#cau_5").draggable({
        revert: "invalid",
        drag: function() {
            $("#cau_5").css("z-index", 99);
            id = 5;
        },
        stop: function() {
            $("#cau_5").css("z-index", 99);
            click.play();
            if (
                ($("#cau_5").position().top == chon_1_1 &&
                    $("#cau_5").position().left == chon_1_2) ||
                ($("#cau_5").position().top == chon_2_1 &&
                    $("#cau_5").position().left == chon_2_2) ||
                ($("#cau_5").position().top == chon_3_1 &&
                    $("#cau_5").position().left == chon_3_2) ||
                ($("#cau_5").position().top == chon_4_1 &&
                    $("#cau_5").position().left == chon_4_2) ||
                ($("#cau_5").position().top == chon_5_1 &&
                    $("#cau_5").position().left == chon_5_2) ||
                ($("#cau_5").position().top == chon_6_1 &&
                    $("#cau_5").position().left == chon_6_2) ||
                ($("#cau_5").position().top == chon_7_1 &&
                    $("#cau_5").position().left == chon_7_2)
            ) {
                $("#cau_5").css("background", "url('img/da5.png') no-repeat center");
            }
        },
    });

    $("#cau_6").draggable({
        revert: "invalid",
        drag: function() {
            $("#cau_6").css("z-index", 99);
            id = 6;
        },
        stop: function() {
            $("#cau_6").css("z-index", 99);
            click.play();
            if (
                ($("#cau_6").position().top == chon_1_1 &&
                    $("#cau_6").position().left == chon_1_2) ||
                ($("#cau_6").position().top == chon_2_1 &&
                    $("#cau_6").position().left == chon_2_2) ||
                ($("#cau_6").position().top == chon_3_1 &&
                    $("#cau_6").position().left == chon_3_2) ||
                ($("#cau_6").position().top == chon_4_1 &&
                    $("#cau_6").position().left == chon_4_2) ||
                ($("#cau_6").position().top == chon_5_1 &&
                    $("#cau_6").position().left == chon_5_2) ||
                ($("#cau_6").position().top == chon_6_1 &&
                    $("#cau_6").position().left == chon_6_2) ||
                ($("#cau_6").position().top == chon_7_1 &&
                    $("#cau_6").position().left == chon_7_2)
            ) {
                $("#cau_6").css("background", "url('img/da6.png') no-repeat center");
            }
        },
    });

    $("#cau_7").draggable({
        revert: "invalid",
        drag: function() {
            $("#cau_7").css("z-index", 99);
            id = 7;
        },
        stop: function() {
            $("#cau_7").css("z-index", 99);
            click.play();
            if (
                ($("#cau_7").position().top == chon_1_1 &&
                    $("#cau_7").position().left == chon_1_2) ||
                ($("#cau_7").position().top == chon_2_1 &&
                    $("#cau_7").position().left == chon_2_2) ||
                ($("#cau_7").position().top == chon_3_1 &&
                    $("#cau_7").position().left == chon_3_2) ||
                ($("#cau_7").position().top == chon_4_1 &&
                    $("#cau_7").position().left == chon_4_2) ||
                ($("#cau_7").position().top == chon_5_1 &&
                    $("#cau_7").position().left == chon_5_2) ||
                ($("#cau_7").position().top == chon_6_1 &&
                    $("#cau_7").position().left == chon_6_2) ||
                ($("#cau_7").position().top == chon_7_1 &&
                    $("#cau_7").position().left == chon_7_2)
            ) {
                $("#cau_7").css("background", "url('img/da7.png') no-repeat center");
            }
        },
    });
var kt1 = kt2 = kt3 = kt4 = kt5 = kt6 = kt7 = 0;
    //Ô chọn 1
    $("#ochon1").droppable({
        drop: function(event, ui) {
            if (id == 1) {
                kt1 = 1;
                $("#cau_1").css("top", chon_1_1);
                $("#cau_1").css("left", chon_1_2);
                test1 = 1;
                if (
                    $("#cau_2").position().top == chon_1_1 &&
                    $("#cau_2").position().left == chon_1_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_1_1 &&
                    $("#cau_3").position().left == chon_1_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");
                }

                if (
                    $("#cau_4").position().top == chon_1_1 &&
                    $("#cau_4").position().left == chon_1_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_1_1 &&
                    $("#cau_5").position().left == chon_1_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_1_1 &&
                    $("#cau_6").position().left == chon_1_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");
                }

                if (
                    $("#cau_7").position().top == chon_1_1 &&
                    $("#cau_7").position().left == chon_1_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");
                }
            }

            if (id == 2) {
                kt1 = 1;
                $("#cau_2").css("top", chon_1_1);
                $("#cau_2").css("left", chon_1_2);
                test2 = 1;
                if (
                    $("#cau_1").position().top == chon_1_1 &&
                    $("#cau_1").position().left == chon_1_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_1_1 &&
                    $("#cau_3").position().left == chon_1_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");
                }

                if (
                    $("#cau_4").position().top == chon_1_1 &&
                    $("#cau_4").position().left == chon_1_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_1_1 &&
                    $("#cau_5").position().left == chon_1_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_1_1 &&
                    $("#cau_6").position().left == chon_1_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_1_1 &&
                    $("#cau_7").position().left == chon_1_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");
                }

            }

            if (id == 3) {
                $("#cau_3").css("top", chon_1_1);
                $("#cau_3").css("left", chon_1_2);
                test3 = 2;
                if (
                    $("#cau_1").position().top == chon_1_1 &&
                    $("#cau_1").position().left == chon_1_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_1_1 &&
                    $("#cau_2").position().left == chon_1_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_4").position().top == chon_1_1 &&
                    $("#cau_4").position().left == chon_1_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_1_1 &&
                    $("#cau_5").position().left == chon_1_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_1_1 &&
                    $("#cau_6").position().left == chon_1_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_1_1 &&
                    $("#cau_7").position().left == chon_1_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 4) {
                $("#cau_4").css("top", chon_1_1);
                $("#cau_4").css("left", chon_1_2);
                test4 = 2;
                if (
                    $("#cau_1").position().top == chon_1_1 &&
                    $("#cau_1").position().left == chon_1_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_1_1 &&
                    $("#cau_2").position().left == chon_1_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_1_1 &&
                    $("#cau_3").position().left == chon_1_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_5").position().top == chon_1_1 &&
                    $("#cau_5").position().left == chon_1_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_1_1 &&
                    $("#cau_6").position().left == chon_1_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_1_1 &&
                    $("#cau_7").position().left == chon_1_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 5) {
                kt1 = 1;
                $("#cau_5").css("top", chon_1_1);
                $("#cau_5").css("left", chon_1_2);
                test5 = 1;
                if (
                    $("#cau_1").position().top == chon_1_1 &&
                    $("#cau_1").position().left == chon_1_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_1_1 &&
                    $("#cau_2").position().left == chon_1_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_1_1 &&
                    $("#cau_3").position().left == chon_1_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_1_1 &&
                    $("#cau_4").position().left == chon_1_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_1_1 &&
                    $("#cau_6").position().left == chon_1_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_1_1 &&
                    $("#cau_7").position().left == chon_1_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 6) {
                $("#cau_6").css("top", chon_1_1);
                $("#cau_6").css("left", chon_1_2);
                test6 = 1;
                if (
                    $("#cau_1").position().top == chon_1_1 &&
                    $("#cau_1").position().left == chon_1_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_1_1 &&
                    $("#cau_2").position().left == chon_1_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_1_1 &&
                    $("#cau_3").position().left == chon_1_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_1_1 &&
                    $("#cau_4").position().left == chon_1_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_1_1 &&
                    $("#cau_5").position().left == chon_1_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_7").position().top == chon_1_1 &&
                    $("#cau_7").position().left == chon_1_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 7) {
                kt1 = 1;
                $("#cau_7").css("top", chon_1_1);
                $("#cau_7").css("left", chon_1_2);
                test7 = 2;
                if (
                    $("#cau_1").position().top == chon_1_1 &&
                    $("#cau_1").position().left == chon_1_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");
                }

                if (
                    $("#cau_2").position().top == chon_1_1 &&
                    $("#cau_2").position().left == chon_1_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_1_1 &&
                    $("#cau_3").position().left == chon_1_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_1_1 &&
                    $("#cau_4").position().left == chon_1_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_1_1 &&
                    $("#cau_5").position().left == chon_1_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_1_1 &&
                    $("#cau_6").position().left == chon_1_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

            }
            if (test1 != 0 && test2 != 0 && test3 != 0 && test4 != 0 && test5 != 0 && test6 != 0 && test7 != 0) {
                $("#btnKiemtra").css("display", "inline");
            }
        },
    });

    //Ô chọn 2
    $("#ochon2").droppable({
        drop: function(event, ui) {
            if (id == 1) {
                kt2 = 1;
                $("#cau_1").css("top", chon_2_1);
                $("#cau_1").css("left", chon_2_2);
                test1 = 1;
                if (
                    $("#cau_2").position().top == chon_2_1 &&
                    $("#cau_2").position().left == chon_2_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_2_1 &&
                    $("#cau_3").position().left == chon_2_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_2_1 &&
                    $("#cau_4").position().left == chon_2_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_2_1 &&
                    $("#cau_5").position().left == chon_2_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_2_1 &&
                    $("#cau_6").position().left == chon_2_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_2_1 &&
                    $("#cau_7").position().left == chon_2_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 2) {
                kt2 = 1;
                $("#cau_2").css("top", chon_2_1);
                $("#cau_2").css("left", chon_2_2);
                test2 = 1;
                if (
                    $("#cau_1").position().top == chon_2_1 &&
                    $("#cau_1").position().left == chon_2_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_3").position().top == chon_2_1 &&
                    $("#cau_3").position().left == chon_2_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_2_1 &&
                    $("#cau_4").position().left == chon_2_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_2_1 &&
                    $("#cau_5").position().left == chon_2_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_2_1 &&
                    $("#cau_6").position().left == chon_2_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_2_1 &&
                    $("#cau_7").position().left == chon_2_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 3) {
              
                $("#cau_3").css("top", chon_2_1);
                $("#cau_3").css("left", chon_2_2);
                test3 = 2;
                if (
                    $("#cau_1").position().top == chon_2_1 &&
                    $("#cau_1").position().left == chon_2_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_2_1 &&
                    $("#cau_2").position().left == chon_2_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_4").position().top == chon_2_1 &&
                    $("#cau_4").position().left == chon_2_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_2_1 &&
                    $("#cau_5").position().left == chon_2_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_2_1 &&
                    $("#cau_6").position().left == chon_2_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_2_1 &&
                    $("#cau_7").position().left == chon_2_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 4) {
                $("#cau_4").css("top", chon_2_1);
                $("#cau_4").css("left", chon_2_2);
                test4 = 2;
                if (
                    $("#cau_1").position().top == chon_2_1 &&
                    $("#cau_1").position().left == chon_2_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_2_1 &&
                    $("#cau_2").position().left == chon_2_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_2_1 &&
                    $("#cau_3").position().left == chon_2_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_5").position().top == chon_2_1 &&
                    $("#cau_5").position().left == chon_2_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_2_1 &&
                    $("#cau_6").position().left == chon_2_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_2_1 &&
                    $("#cau_7").position().left == chon_2_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 5) {
                kt2 = 1;
                $("#cau_5").css("top", chon_2_1);
                $("#cau_5").css("left", chon_2_2);
                test5 = 1;
                if (
                    $("#cau_1").position().top == chon_2_1 &&
                    $("#cau_1").position().left == chon_2_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_2_1 &&
                    $("#cau_2").position().left == chon_2_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_2_1 &&
                    $("#cau_3").position().left == chon_2_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_2_1 &&
                    $("#cau_4").position().left == chon_2_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_2_1 &&
                    $("#cau_6").position().left == chon_2_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_2_1 &&
                    $("#cau_7").position().left == chon_2_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 6) {

                $("#cau_6").css("top", chon_2_1);
                $("#cau_6").css("left", chon_2_2);
                test6 = 1;
                if (
                    $("#cau_1").position().top == chon_2_1 &&
                    $("#cau_1").position().left == chon_2_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_2_1 &&
                    $("#cau_2").position().left == chon_2_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_2_1 &&
                    $("#cau_3").position().left == chon_2_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_2_1 &&
                    $("#cau_4").position().left == chon_2_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_2_1 &&
                    $("#cau_5").position().left == chon_2_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_7").position().top == chon_2_1 &&
                    $("#cau_7").position().left == chon_2_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 7) {
                kt2 = 1;
                $("#cau_7").css("top", chon_2_1);
                $("#cau_7").css("left", chon_2_2);
                test7 = 2;
                if (
                    $("#cau_1").position().top == chon_2_1 &&
                    $("#cau_1").position().left == chon_2_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_2_1 &&
                    $("#cau_2").position().left == chon_2_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_2_1 &&
                    $("#cau_3").position().left == chon_2_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_2_1 &&
                    $("#cau_4").position().left == chon_2_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_2_1 &&
                    $("#cau_5").position().left == chon_2_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_2_1 &&
                    $("#cau_6").position().left == chon_2_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

            }
            if (test1 != 0 && test2 != 0 && test3 != 0 && test4 != 0 && test5 != 0 && test6 != 0 && test7 != 0) {
                $("#btnKiemtra").css("display", "inline");
            }
        },
    });

    //Ô chọn 3
    $("#ochon3").droppable({
        drop: function(event, ui) {
            if (id == 1) {
                kt3 = 1;
                $("#cau_1").css("top", chon_3_1);
                $("#cau_1").css("left", chon_3_2);
                test1 = 1;
                if (
                    $("#cau_2").position().top == chon_3_1 &&
                    $("#cau_2").position().left == chon_3_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_3_1 &&
                    $("#cau_3").position().left == chon_3_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_3_1 &&
                    $("#cau_4").position().left == chon_3_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_3_1 &&
                    $("#cau_5").position().left == chon_3_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_3_1 &&
                    $("#cau_6").position().left == chon_3_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_3_1 &&
                    $("#cau_7").position().left == chon_3_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 2) {
                kt3 = 1;
                $("#cau_2").css("top", chon_3_1);
                $("#cau_2").css("left", chon_3_2);
                test2 = 1;
                if (
                    $("#cau_1").position().top == chon_3_1 &&
                    $("#cau_1").position().left == chon_3_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_3").position().top == chon_3_1 &&
                    $("#cau_3").position().left == chon_3_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_3_1 &&
                    $("#cau_4").position().left == chon_3_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_3_1 &&
                    $("#cau_5").position().left == chon_3_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_3_1 &&
                    $("#cau_6").position().left == chon_3_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_3_1 &&
                    $("#cau_7").position().left == chon_3_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 3) {

                $("#cau_3").css("top", chon_3_1);
                $("#cau_3").css("left", chon_3_2);
                test3 = 2;
                if (
                    $("#cau_1").position().top == chon_3_1 &&
                    $("#cau_1").position().left == chon_3_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_3_1 &&
                    $("#cau_2").position().left == chon_3_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_4").position().top == chon_3_1 &&
                    $("#cau_4").position().left == chon_3_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_3_1 &&
                    $("#cau_5").position().left == chon_3_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_3_1 &&
                    $("#cau_6").position().left == chon_3_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_3_1 &&
                    $("#cau_7").position().left == chon_3_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 4) {
                $("#cau_4").css("top", chon_3_1);
                $("#cau_4").css("left", chon_3_2);
                test4 = 2;
                if (
                    $("#cau_1").position().top == chon_3_1 &&
                    $("#cau_1").position().left == chon_3_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_3_1 &&
                    $("#cau_2").position().left == chon_3_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_3_1 &&
                    $("#cau_3").position().left == chon_3_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_5").position().top == chon_3_1 &&
                    $("#cau_5").position().left == chon_3_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_3_1 &&
                    $("#cau_6").position().left == chon_3_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_3_1 &&
                    $("#cau_7").position().left == chon_3_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 5) {
                kt3 = 1;
                $("#cau_5").css("top", chon_3_1);
                $("#cau_5").css("left", chon_3_2);
                test5 = 1;
                if (
                    $("#cau_1").position().top == chon_3_1 &&
                    $("#cau_1").position().left == chon_3_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_3_1 &&
                    $("#cau_2").position().left == chon_3_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_3_1 &&
                    $("#cau_3").position().left == chon_3_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_3_1 &&
                    $("#cau_4").position().left == chon_3_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_3_1 &&
                    $("#cau_6").position().left == chon_3_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_3_1 &&
                    $("#cau_7").position().left == chon_3_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 6) {

                $("#cau_6").css("top", chon_3_1);
                $("#cau_6").css("left", chon_3_2);
                test6 = 1;
                if (
                    $("#cau_1").position().top == chon_3_1 &&
                    $("#cau_1").position().left == chon_3_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_3_1 &&
                    $("#cau_2").position().left == chon_3_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_3_1 &&
                    $("#cau_3").position().left == chon_3_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_3_1 &&
                    $("#cau_4").position().left == chon_3_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_3_1 &&
                    $("#cau_5").position().left == chon_3_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_7").position().top == chon_3_1 &&
                    $("#cau_7").position().left == chon_3_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 7) {
                kt3 = 1;
                $("#cau_7").css("top", chon_3_1);
                $("#cau_7").css("left", chon_3_2);
                test7 = 2;
                if (
                    $("#cau_1").position().top == chon_3_1 &&
                    $("#cau_1").position().left == chon_3_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_3_1 &&
                    $("#cau_2").position().left == chon_3_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_3_1 &&
                    $("#cau_3").position().left == chon_3_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_3_1 &&
                    $("#cau_4").position().left == chon_3_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_3_1 &&
                    $("#cau_5").position().left == chon_3_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_3_1 &&
                    $("#cau_6").position().left == chon_3_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

            }
            if (test1 != 0 && test2 != 0 && test3 != 0 && test4 != 0 && test5 != 0 && test6 != 0 && test7 != 0) {
                $("#btnKiemtra").css("display", "inline");
            }
        },
    });

    //Ô chọn 4
    $("#ochon4").droppable({
        drop: function(event, ui) {
            if (id == 1) {
                kt4 = 1;
                $("#cau_1").css("top", chon_4_1);
                $("#cau_1").css("left", chon_4_2);
                test1 = 1;
                if (
                    $("#cau_2").position().top == chon_4_1 &&
                    $("#cau_2").position().left == chon_4_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_4_1 &&
                    $("#cau_3").position().left == chon_4_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_4_1 &&
                    $("#cau_4").position().left == chon_4_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_4_1 &&
                    $("#cau_5").position().left == chon_4_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_4_1 &&
                    $("#cau_6").position().left == chon_4_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_4_1 &&
                    $("#cau_7").position().left == chon_4_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 2) {
                kt4 = 1;
                $("#cau_2").css("top", chon_4_1);
                $("#cau_2").css("left", chon_4_2);
                test2 = 1;
                if (
                    $("#cau_1").position().top == chon_4_1 &&
                    $("#cau_1").position().left == chon_4_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_3").position().top == chon_4_1 &&
                    $("#cau_3").position().left == chon_4_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_4_1 &&
                    $("#cau_4").position().left == chon_4_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_4_1 &&
                    $("#cau_5").position().left == chon_4_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_4_1 &&
                    $("#cau_6").position().left == chon_4_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_4_1 &&
                    $("#cau_7").position().left == chon_4_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 3) {
                $("#cau_3").css("top", chon_4_1);
                $("#cau_3").css("left", chon_4_2);
                test3 = 2;
                if (
                    $("#cau_1").position().top == chon_4_1 &&
                    $("#cau_1").position().left == chon_4_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_4_1 &&
                    $("#cau_2").position().left == chon_4_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_4").position().top == chon_4_1 &&
                    $("#cau_4").position().left == chon_4_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_4_1 &&
                    $("#cau_5").position().left == chon_4_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_4_1 &&
                    $("#cau_6").position().left == chon_4_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_4_1 &&
                    $("#cau_7").position().left == chon_4_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 4) {
                $("#cau_4").css("top", chon_4_1);
                $("#cau_4").css("left", chon_4_2);
                test4 = 2;
                if (
                    $("#cau_1").position().top == chon_4_1 &&
                    $("#cau_1").position().left == chon_4_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_4_1 &&
                    $("#cau_2").position().left == chon_4_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_4_1 &&
                    $("#cau_3").position().left == chon_4_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_5").position().top == chon_4_1 &&
                    $("#cau_5").position().left == chon_4_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_4_1 &&
                    $("#cau_6").position().left == chon_4_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_4_1 &&
                    $("#cau_7").position().left == chon_4_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 5) {
                kt4 = 1;
                $("#cau_5").css("top", chon_4_1);
                $("#cau_5").css("left", chon_4_2);
                test5 = 1;
                if (
                    $("#cau_1").position().top == chon_4_1 &&
                    $("#cau_1").position().left == chon_4_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_4_1 &&
                    $("#cau_2").position().left == chon_4_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_4_1 &&
                    $("#cau_3").position().left == chon_4_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_4_1 &&
                    $("#cau_4").position().left == chon_4_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_4_1 &&
                    $("#cau_6").position().left == chon_4_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_4_1 &&
                    $("#cau_7").position().left == chon_4_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 6) {
                $("#cau_6").css("top", chon_4_1);
                $("#cau_6").css("left", chon_4_2);
                test6 = 1;
                if (
                    $("#cau_1").position().top == chon_4_1 &&
                    $("#cau_1").position().left == chon_4_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_4_1 &&
                    $("#cau_2").position().left == chon_4_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_4_1 &&
                    $("#cau_3").position().left == chon_4_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_4_1 &&
                    $("#cau_4").position().left == chon_4_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_4_1 &&
                    $("#cau_5").position().left == chon_4_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_7").position().top == chon_4_1 &&
                    $("#cau_7").position().left == chon_4_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 7) {
                kt4 = 1;
                $("#cau_7").css("top", chon_4_1);
                $("#cau_7").css("left", chon_4_2);
                test7 = 2;
                if (
                    $("#cau_1").position().top == chon_4_1 &&
                    $("#cau_1").position().left == chon_4_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_4_1 &&
                    $("#cau_2").position().left == chon_4_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_4_1 &&
                    $("#cau_3").position().left == chon_4_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_4_1 &&
                    $("#cau_4").position().left == chon_4_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_4_1 &&
                    $("#cau_5").position().left == chon_4_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_4_1 &&
                    $("#cau_6").position().left == chon_4_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

            }
            if (test1 != 0 && test2 != 0 && test3 != 0 && test4 != 0 && test5 != 0 && test6 != 0 && test7 != 0) {
                $("#btnKiemtra").css("display", "inline");
            }
        },
    });

    //Ô chọn 5
    $("#ochon5").droppable({
        drop: function(event, ui) {
            if (id == 1) {
                $("#cau_1").css("top", chon_5_1);
                $("#cau_1").css("left", chon_5_2);
                test1 = 2;
                if (
                    $("#cau_2").position().top == chon_5_1 &&
                    $("#cau_2").position().left == chon_5_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_5_1 &&
                    $("#cau_3").position().left == chon_5_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_5_1 &&
                    $("#cau_4").position().left == chon_5_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_5_1 &&
                    $("#cau_5").position().left == chon_5_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_5_1 &&
                    $("#cau_6").position().left == chon_5_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_5_1 &&
                    $("#cau_7").position().left == chon_5_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 2) {
                $("#cau_2").css("top", chon_5_1);
                $("#cau_2").css("left", chon_5_2);
                test2 = 2;
                if (
                    $("#cau_1").position().top == chon_5_1 &&
                    $("#cau_1").position().left == chon_5_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_3").position().top == chon_5_1 &&
                    $("#cau_3").position().left == chon_5_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_5_1 &&
                    $("#cau_4").position().left == chon_5_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_5_1 &&
                    $("#cau_5").position().left == chon_5_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_5_1 &&
                    $("#cau_6").position().left == chon_5_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_5_1 &&
                    $("#cau_7").position().left == chon_5_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 3) {
                kt5 = 1;
                $("#cau_3").css("top", chon_5_1);
                $("#cau_3").css("left", chon_5_2);
                test3 = 1;
                if (
                    $("#cau_1").position().top == chon_5_1 &&
                    $("#cau_1").position().left == chon_5_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_5_1 &&
                    $("#cau_2").position().left == chon_5_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_4").position().top == chon_5_1 &&
                    $("#cau_4").position().left == chon_5_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_5_1 &&
                    $("#cau_5").position().left == chon_5_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_5_1 &&
                    $("#cau_6").position().left == chon_5_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_5_1 &&
                    $("#cau_7").position().left == chon_5_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 4) {
                kt5 = 1;
                $("#cau_4").css("top", chon_5_1);
                $("#cau_4").css("left", chon_5_2);
                test4 = 1;
                if (
                    $("#cau_1").position().top == chon_5_1 &&
                    $("#cau_1").position().left == chon_5_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_5_1 &&
                    $("#cau_2").position().left == chon_5_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_5_1 &&
                    $("#cau_3").position().left == chon_5_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_5").position().top == chon_5_1 &&
                    $("#cau_5").position().left == chon_5_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_5_1 &&
                    $("#cau_6").position().left == chon_5_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_5_1 &&
                    $("#cau_7").position().left == chon_5_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 5) {
                $("#cau_5").css("top", chon_5_1);
                $("#cau_5").css("left", chon_5_2);
                test5 = 2;
                if (
                    $("#cau_1").position().top == chon_5_1 &&
                    $("#cau_1").position().left == chon_5_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_5_1 &&
                    $("#cau_2").position().left == chon_5_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_5_1 &&
                    $("#cau_3").position().left == chon_5_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_5_1 &&
                    $("#cau_4").position().left == chon_5_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_5_1 &&
                    $("#cau_6").position().left == chon_5_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_5_1 &&
                    $("#cau_7").position().left == chon_5_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 6) {
                kt5 = 1;
                $("#cau_6").css("top", chon_5_1);
                $("#cau_6").css("left", chon_5_2);
                test6 = 2;
                if (
                    $("#cau_1").position().top == chon_5_1 &&
                    $("#cau_1").position().left == chon_5_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_5_1 &&
                    $("#cau_2").position().left == chon_5_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_5_1 &&
                    $("#cau_3").position().left == chon_5_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_5_1 &&
                    $("#cau_4").position().left == chon_5_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_5_1 &&
                    $("#cau_5").position().left == chon_5_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_7").position().top == chon_5_1 &&
                    $("#cau_7").position().left == chon_5_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 7) {
                $("#cau_7").css("top", chon_5_1);
                $("#cau_7").css("left", chon_5_2);
                test7 = 1;
                if (
                    $("#cau_1").position().top == chon_5_1 &&
                    $("#cau_1").position().left == chon_5_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_5_1 &&
                    $("#cau_2").position().left == chon_5_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_5_1 &&
                    $("#cau_3").position().left == chon_5_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_5_1 &&
                    $("#cau_4").position().left == chon_5_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_5_1 &&
                    $("#cau_5").position().left == chon_5_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_5_1 &&
                    $("#cau_6").position().left == chon_5_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

            }
            if (test1 != 0 && test2 != 0 && test3 != 0 && test4 != 0 && test5 != 0 && test6 != 0 && test7 != 0) {
                $("#btnKiemtra").css("display", "inline");
            }
        },
    });

    //Ô chọn 6
    $("#ochon6").droppable({
        drop: function(event, ui) {
            if (id == 1) {
                $("#cau_1").css("top", chon_6_1);
                $("#cau_1").css("left", chon_6_2);
                test1 = 2;
                if (
                    $("#cau_2").position().top == chon_6_1 &&
                    $("#cau_2").position().left == chon_6_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_6_1 &&
                    $("#cau_3").position().left == chon_6_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_6_1 &&
                    $("#cau_4").position().left == chon_6_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_6_1 &&
                    $("#cau_5").position().left == chon_6_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_6_1 &&
                    $("#cau_6").position().left == chon_6_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_6_1 &&
                    $("#cau_7").position().left == chon_6_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 2) {
                $("#cau_2").css("top", chon_6_1);
                $("#cau_2").css("left", chon_6_2);
                test2 = 2;
                if (
                    $("#cau_1").position().top == chon_6_1 &&
                    $("#cau_1").position().left == chon_6_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_3").position().top == chon_6_1 &&
                    $("#cau_3").position().left == chon_6_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_6_1 &&
                    $("#cau_4").position().left == chon_6_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_6_1 &&
                    $("#cau_5").position().left == chon_6_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_6_1 &&
                    $("#cau_6").position().left == chon_6_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_6_1 &&
                    $("#cau_7").position().left == chon_6_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 3) {
                kt6 = 1;
                $("#cau_3").css("top", chon_6_1);
                $("#cau_3").css("left", chon_6_2);
                test3 = 1;
                if (
                    $("#cau_1").position().top == chon_6_1 &&
                    $("#cau_1").position().left == chon_6_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_6_1 &&
                    $("#cau_2").position().left == chon_6_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_4").position().top == chon_6_1 &&
                    $("#cau_4").position().left == chon_6_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_6_1 &&
                    $("#cau_5").position().left == chon_6_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_6_1 &&
                    $("#cau_6").position().left == chon_6_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_6_1 &&
                    $("#cau_7").position().left == chon_6_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 4) {
                kt6 = 1;
                $("#cau_4").css("top", chon_6_1);
                $("#cau_4").css("left", chon_6_2);
                test4 = 1;
                if (
                    $("#cau_1").position().top == chon_6_1 &&
                    $("#cau_1").position().left == chon_6_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_6_1 &&
                    $("#cau_2").position().left == chon_6_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_6_1 &&
                    $("#cau_3").position().left == chon_6_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_5").position().top == chon_6_1 &&
                    $("#cau_5").position().left == chon_6_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_6_1 &&
                    $("#cau_6").position().left == chon_6_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_6_1 &&
                    $("#cau_7").position().left == chon_6_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 5) {
                $("#cau_5").css("top", chon_6_1);
                $("#cau_5").css("left", chon_6_2);
                test5 = 2;
                if (
                    $("#cau_1").position().top == chon_6_1 &&
                    $("#cau_1").position().left == chon_6_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_6_1 &&
                    $("#cau_2").position().left == chon_6_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_6_1 &&
                    $("#cau_3").position().left == chon_6_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_6_1 &&
                    $("#cau_4").position().left == chon_6_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_6_1 &&
                    $("#cau_6").position().left == chon_6_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_6_1 &&
                    $("#cau_7").position().left == chon_6_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 6) {
                kt6 = 1;
                $("#cau_6").css("top", chon_6_1);
                $("#cau_6").css("left", chon_6_2);
                test6 = 2;
                if (
                    $("#cau_1").position().top == chon_6_1 &&
                    $("#cau_1").position().left == chon_6_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_6_1 &&
                    $("#cau_2").position().left == chon_6_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_6_1 &&
                    $("#cau_3").position().left == chon_6_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_6_1 &&
                    $("#cau_4").position().left == chon_6_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_6_1 &&
                    $("#cau_5").position().left == chon_6_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_7").position().top == chon_6_1 &&
                    $("#cau_7").position().left == chon_6_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 7) {
                $("#cau_7").css("top", chon_6_1);
                $("#cau_7").css("left", chon_6_2);
                test7 = 1;
                if (
                    $("#cau_1").position().top == chon_6_1 &&
                    $("#cau_1").position().left == chon_6_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_6_1 &&
                    $("#cau_2").position().left == chon_6_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_6_1 &&
                    $("#cau_3").position().left == chon_6_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_6_1 &&
                    $("#cau_4").position().left == chon_6_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_6_1 &&
                    $("#cau_5").position().left == chon_6_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_6_1 &&
                    $("#cau_6").position().left == chon_6_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

            }
            if (test1 != 0 && test2 != 0 && test3 != 0 && test4 != 0 && test5 != 0 && test6 != 0 && test7 != 0) {
                $("#btnKiemtra").css("display", "inline");
            }
        },
    });

    //Ô chọn 7
    $("#ochon7").droppable({
        drop: function(event, ui) {
            if (id == 1) {
                $("#cau_1").css("top", chon_7_1);
                $("#cau_1").css("left", chon_7_2);
                test1 = 2;
                if (
                    $("#cau_2").position().top == chon_7_1 &&
                    $("#cau_2").position().left == chon_7_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_7_1 &&
                    $("#cau_3").position().left == chon_7_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_7_1 &&
                    $("#cau_4").position().left == chon_7_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_7_1 &&
                    $("#cau_5").position().left == chon_7_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_7_1 &&
                    $("#cau_6").position().left == chon_7_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_7_1 &&
                    $("#cau_7").position().left == chon_7_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 2) {
                $("#cau_2").css("top", chon_7_1);
                $("#cau_2").css("left", chon_7_2);
                test2 = 2;
                if (
                    $("#cau_1").position().top == chon_7_1 &&
                    $("#cau_1").position().left == chon_7_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_3").position().top == chon_7_1 &&
                    $("#cau_3").position().left == chon_7_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_7_1 &&
                    $("#cau_4").position().left == chon_7_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_7_1 &&
                    $("#cau_5").position().left == chon_7_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_7_1 &&
                    $("#cau_6").position().left == chon_7_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_7_1 &&
                    $("#cau_7").position().left == chon_7_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 3) {
                kt7 = 1;
                $("#cau_3").css("top", chon_7_1);
                $("#cau_3").css("left", chon_7_2);
                test3 = 1;
                if (
                    $("#cau_1").position().top == chon_7_1 &&
                    $("#cau_1").position().left == chon_7_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_7_1 &&
                    $("#cau_2").position().left == chon_7_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_4").position().top == chon_7_1 &&
                    $("#cau_4").position().left == chon_7_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_7_1 &&
                    $("#cau_5").position().left == chon_7_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_7_1 &&
                    $("#cau_6").position().left == chon_7_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_7_1 &&
                    $("#cau_7").position().left == chon_7_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 4) {
                kt7 = 1;
                $("#cau_4").css("top", chon_7_1);
                $("#cau_4").css("left", chon_7_2);
                test4 = 1;
                if (
                    $("#cau_1").position().top == chon_7_1 &&
                    $("#cau_1").position().left == chon_7_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_7_1 &&
                    $("#cau_2").position().left == chon_7_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_7_1 &&
                    $("#cau_3").position().left == chon_7_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_5").position().top == chon_7_1 &&
                    $("#cau_5").position().left == chon_7_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_7_1 &&
                    $("#cau_6").position().left == chon_7_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_7_1 &&
                    $("#cau_7").position().left == chon_7_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 5) {
                $("#cau_5").css("top", chon_7_1);
                $("#cau_5").css("left", chon_7_2);
                test5 = 2;
                if (
                    $("#cau_1").position().top == chon_7_1 &&
                    $("#cau_1").position().left == chon_7_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_7_1 &&
                    $("#cau_2").position().left == chon_7_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_7_1 &&
                    $("#cau_3").position().left == chon_7_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_7_1 &&
                    $("#cau_4").position().left == chon_7_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_7_1 &&
                    $("#cau_6").position().left == chon_7_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }

                if (
                    $("#cau_7").position().top == chon_7_1 &&
                    $("#cau_7").position().left == chon_7_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 6) {
                kt7 = 1;
                $("#cau_6").css("top", chon_7_1);
                $("#cau_6").css("left", chon_7_2);
                test6 = 2;
                if (
                    $("#cau_1").position().top == chon_7_1 &&
                    $("#cau_1").position().left == chon_7_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_7_1 &&
                    $("#cau_2").position().left == chon_7_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_7_1 &&
                    $("#cau_3").position().left == chon_7_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_7_1 &&
                    $("#cau_4").position().left == chon_7_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_7_1 &&
                    $("#cau_5").position().left == chon_7_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_7").position().top == chon_7_1 &&
                    $("#cau_7").position().left == chon_7_2
                ) {
                    $("#cau_7").animate({
                        top: da_7_1,
                        left: da_7_2,
                    });
                    $("#cau_7").css("background", "url('img/da7.png') no-repeat");;
                }

            }

            if (id == 7) {
                $("#cau_7").css("top", chon_7_1);
                $("#cau_7").css("left", chon_7_2);
                test7 = 1;
                if (
                    $("#cau_1").position().top == chon_7_1 &&
                    $("#cau_1").position().left == chon_7_2
                ) {
                    $("#cau_1").animate({
                        top: da_1_1,
                        left: da_1_2,
                    });
                    $("#cau_1").css("background", "url('img/da1.png') no-repeat");;
                }

                if (
                    $("#cau_2").position().top == chon_7_1 &&
                    $("#cau_2").position().left == chon_7_2
                ) {
                    $("#cau_2").animate({
                        top: da_2_1,
                        left: da_2_2,
                    });
                    $("#cau_2").css("background", "url('img/da2.png') no-repeat");
                }

                if (
                    $("#cau_3").position().top == chon_7_1 &&
                    $("#cau_3").position().left == chon_7_2
                ) {
                    $("#cau_3").animate({
                        top: da_3_1,
                        left: da_3_2,
                    });
                    $("#cau_3").css("background", "url('img/da3.png') no-repeat");;
                }

                if (
                    $("#cau_4").position().top == chon_7_1 &&
                    $("#cau_4").position().left == chon_7_2
                ) {
                    $("#cau_4").animate({
                        top: da_4_1,
                        left: da_4_2,
                    });
                    $("#cau_4").css("background", "url('img/da4.png') no-repeat");
                }

                if (
                    $("#cau_5").position().top == chon_7_1 &&
                    $("#cau_5").position().left == chon_7_2
                ) {
                    $("#cau_5").animate({
                        top: da_5_1,
                        left: da_5_2,
                    });
                    $("#cau_5").css("background", "url('img/da5.png') no-repeat");
                }

                if (
                    $("#cau_6").position().top == chon_7_1 &&
                    $("#cau_6").position().left == chon_7_2
                ) {
                    $("#cau_6").animate({
                        top: da_6_1,
                        left: da_6_2,
                    });
                    $("#cau_6").css("background", "url('img/da6.png') no-repeat");;
                }
            }
            if (test1 != 0 && test2 != 0 && test3 != 0 && test4 != 0 && test5 != 0 && test6 != 0 && test7 != 0) {
                $("#btnKiemtra").css("display", "inline");
            }
        },
    });

    $("#btnKiemtra").on("click", function() {
        click.play();
        click.currentTime = 0;
        $("#btnKiemtra").css("display", "none");
        if (kt1 == 1 && kt2 == 1 && kt3 == 1 && kt4 == 1 && kt5 == 1 && kt6 == 1 && kt7 == 1) {
            $("#btnTT, #div_che, #dung").css("display", "inline");
            hu_dung.play();
           
        } else {
            
                hu_sai.play();
                $("#sai,#div_che").css("display", "inline");
                setTimeout(function() {
                $("#cau_1").animate({
                    top: chon_1_1,
                    left: chon_1_2,
                });
                $("#cau_2").animate({
                    top: chon_2_1,
                    left: chon_2_2,
                });
                $("#cau_3").animate({
                    top: chon_5_1,
                    left: chon_5_2,
                });
                $("#cau_4").animate({
                    top: chon_6_1,
                    left: chon_6_2,
                });
                $("#cau_5").animate({
                    top: chon_3_1,
                    left: chon_3_2,
                });
                $("#cau_7").animate({
                    top: chon_4_1,
                    left: chon_4_2,
                });
                $("#cau_6").animate({
                    top: chon_7_1,
                    left: chon_7_2,
                });
            }, 1500);
            $("#btnTT").css("display", "inline");
           
        }
    });
    $("#btnTT").on("click", function() {
        click.play();
        setTimeout(function() {
            window.parent.cpAPIInterface.setVariableValue("cpCmndNextSlide", 1);
        }, 500);
    });
}