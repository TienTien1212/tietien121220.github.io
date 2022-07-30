function fun_them() {
    var getCSI = window.cpAPIInterface.getCurrentSlideIndex();
    if (getCSI == 1) {
        varGioiThieu = 1;
        varProcess = 0;
    }
    for (i = 1; i <= 46; i++) {
        if (getCSI == i) {
            if ((window.cpAPIInterface.getVariableValue("varProcess") == 1)) {
                window.cpAPIInterface.pause();
                var r = confirm("Bạn có muốn tiếp tục trang đang học không?");
                if (r == true) {
                    window.cpAPIInterface.play();
                    window.cpAPIInterface.setVariableValue("varProcess", 0);
                } else {
                    if ((getCSI >= 38) && (getCSI <= 46)) { /*nếu exit nằm trong khoảng slide đang làm baikiem tra chọn (cancel) thì trả về slide result */
                        window.cpCmndGotoSlideAndResume = 46;
                        window.cpAPIInterface.setVariableValue("varProcess", 0);
                    } else { /* / cancel thì về trang đầu tiên */
                        window.cpCmndGotoSlideAndResume = 0;
                        window.cpAPIInterface.setVariableValue("varProcess", 0);
                    }
                }

            }
        }
    }

    // 
    //Create html cha
    function addElement_parent(id_html) {
        var create_div = document.createElement("div");
        create_div.setAttribute("id", id_html);
        document.getElementById("div_Slide").appendChild(create_div);
    }

    var list_id = ["Header_Parent", "Footer_Parent"];
    var i;
    for (i = 0; i < list_id.length; i++) {
        id_html = list_id[i];
        addElement_parent(id_html);
    }


    //Create html con
    /*
    // div header
    */

    function addElement_child_1(id_html_1) {
        var create_div_1 = document.createElement("div");
        create_div_1.setAttribute("id", id_html_1);
        document.getElementById("Header_Parent").appendChild(create_div_1);
    }
    var list_id_1 = ["Logo_Left", "txtTitle", "btnShowMenu", "btnHideMenu", "divController"];
    var i;
    for (i = 0; i < list_id_1.length; i++) {
        id_html_1 = list_id_1[i];
        addElement_child_1(id_html_1);
    }

    

    var btnShowMenu_img = document.createElement("div");
    btnShowMenu_img.setAttribute("id", "btnShowMenu_img");
    document.getElementById("btnShowMenu").appendChild(btnShowMenu_img);

    var btnHideMenu_img = document.createElement("div");
    btnHideMenu_img.setAttribute("id", "btnHideMenu_img");
    document.getElementById("btnHideMenu").appendChild(btnHideMenu_img);

    var divMenu = document.createElement("div");
    divMenu.setAttribute("id", "divMenu");
    document.getElementById("divController").appendChild(divMenu);
    //create divController 
    function addElement_child_2(id_html_2) {
        var create_div_2 = document.createElement("div");
        create_div_2.setAttribute("id", id_html_2);
        create_div_2.setAttribute("class", "classCustom_Menu");
        document.getElementById("divMenu").appendChild(create_div_2);
    }
    var list_id_2 = ["btnHome", "btnAttach", "btnHelp", "btnReplay", "btnFullScreen", "tbAttachment", "tbHelp", "btnClose_atm", "btnClose_help"];
    var i;
    for (i = 0; i < list_id_2.length; i++) {
        id_html_2 = list_id_2[i];
        addElement_child_2(id_html_2);
    }
    var tieude_slide5 = document.createElement("div");
    tieude_slide5.setAttribute("id", "tieude_slide5");
    document.getElementById("Header_Parent").appendChild(tieude_slide5);


    var btnNext = document.createElement("div");
    btnNext.setAttribute("id", "btnNext");
    document.getElementById("Header_Parent").appendChild(btnNext);

    var btnBack = document.createElement("div");
    btnBack.setAttribute("id", "btnBack");
    document.getElementById("Header_Parent").appendChild(btnBack);


    var parent_MucLuc = document.createElement("div");
    parent_MucLuc.setAttribute("id", "parent_MucLuc");
    document.getElementById("Header_Parent").appendChild(parent_MucLuc);

    var pSoTrang = document.createElement("div");
    pSoTrang.setAttribute("id", "pSoTrang");
    document.getElementById("Header_Parent").appendChild(pSoTrang);

    /*
    //////------------Start xu ly muc luc-------------------------------------------
    */

    var parent_tbMucLuc = document.createElement("div");
    parent_tbMucLuc.setAttribute("id", "parent_tbMucLuc");
    document.getElementById("parent_MucLuc").appendChild(parent_tbMucLuc);

    // var scroll = document.createElement("div");
    // scroll.setAttribute("id", "scroll");
    // document.getElementById("parent_tbMucLuc").appendChild(scroll);

    // var btnGioiThieu = document.createElement("div");
    // btnGioiThieu.setAttribute("id", "btnGioiThieu");
    // document.getElementById("parent_tbMucLuc").appendChild(btnGioiThieu);

    var den = document.createElement("Div");
    den.setAttribute("id", "den");
    document.getElementById("Header_Parent").appendChild(den);

    var divPupop = document.createElement("div");
    divPupop.setAttribute("id", "divPupop");
    document.getElementById("Header_Parent").appendChild(divPupop);

    var btnTieptuc = document.createElement("div");
    btnTieptuc.setAttribute("id", "btnTieptuc");
    document.getElementById("Header_Parent").appendChild(btnTieptuc);

    $("#btnTieptuc").on("click", function() {
            $("#divPupop,#btnTieptuc ").hide();
            window.cpAPIInterface.play();
            $("#den").hide();

        })
        /*tai lieu lop 1*/
    var L1_P1 = document.createElement("A");
    var txt1_1 = document.createTextNode("ĐỀ KIỂM TRA CUỐI TUẦN");
    L1_P1.appendChild(txt1_1);
    L1_P1.setAttribute("href", "tailieu/L1/ĐỀ KIỂM TRA CUỐI TUẦN.pdf");
    L1_P1.setAttribute("id", "L1_P1");
    L1_P1.setAttribute("class", "a_all");
    tbAttachment.appendChild(L1_P1);
    $("#L1_P1").on("click", function() {
        window.open('tailieu/L1/ĐỀ KIỂM TRA CUỐI TUẦN.pdf', 'L1_P1');
    });

    var L1_P2 = document.createElement("B");
    var txt1_2 = document.createTextNode("LUYỆN TẬP");
    L1_P2.appendChild(txt1_2);
    L1_P2.setAttribute("href", "tailieu/L1/LUYỆN TẬP.pdf");
    L1_P2.setAttribute("id", "L1_P2");
    L1_P2.setAttribute("class", "a_all");
    tbAttachment.appendChild(L1_P2);
    $("#L1_P2").on("click", function() {
        window.open('tailieu/L1/LUYỆN TẬP.pdf', 'L1_P2');
    });

    var L1_P3 = document.createElement("C");
    var txt1_3 = document.createTextNode("PHIẾU BÀI TẬP CUỐI TUẦN 1");
    L1_P3.appendChild(txt1_3);
    L1_P3.setAttribute("href", "tailieu/L1/PHIẾU BÀI TẬP CUỐI TUẦN 1.pdf");
    L1_P3.setAttribute("id", "L1_P3");
    L1_P3.setAttribute("class", "a_all");
    tbAttachment.appendChild(L1_P3);
    $("#L1_P3").on("click", function() {
        window.open('tailieu/L1/PHIẾU BÀI TẬP CUỐI TUẦN 1.pdf', 'L1_P3');
    });

    var L1_P4 = document.createElement("D");
    var txt1_4 = document.createTextNode("PHIẾU BÀI TẬP CUỐI TUẦN 2");
    L1_P4.appendChild(txt1_4);
    L1_P4.setAttribute("href", "tailieu/L1/PHIẾU BÀI TẬP CUỐI TUẦN 2.pdf");
    L1_P4.setAttribute("id", "L1_P4");
    L1_P4.setAttribute("class", "a_all");
    tbAttachment.appendChild(L1_P4);
    $("#L1_P4").on("click", function() {
        window.open('tailieu/L1/PHIẾU BÀI TẬP CUỐI TUẦN 2.pdf', 'L1_P4');
    });

    var L1_P5 = document.createElement("E");
    var txt1_5 = document.createTextNode("PHIẾU BÀI TẬP CUỐI TUẦN 3");
    L1_P5.appendChild(txt1_5);
    L1_P5.setAttribute("href", "tailieu/L1/PHIẾU BÀI TẬP CUỐI TUẦN 3.pdf");
    L1_P5.setAttribute("id", "L1_P5");
    L1_P5.setAttribute("class", "a_all");
    tbAttachment.appendChild(L1_P5);
    $("#L1_P5").on("click", function() {
        window.open('tailieu/L1/PHIẾU BÀI TẬP CUỐI TUẦN 3.pdf', 'L1_P5');
    });

    if (getCSI > 2 && getCSI <= 15) {
        $("#L1_P1,#L1_P2,#L1_P3,#L1_P4,#L1_P5").css("display", "inline")
    }
    /*tai lieu lop 2*/
     
    var L2_P1 = document.createElement("A"); 
    var txt2_1 = document.createTextNode("BỘ ĐỀ THI TOÁN LỚP 2"); 
    L2_P1.appendChild(txt2_1); 
    L2_P1.setAttribute("href", "tailieu/L2/BỘ ĐỀ THI TOÁN LỚP 2.pdf"); 
    L2_P1.setAttribute("id", "L2_P1"); 
    L2_P1.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L2_P1); 
    $("#L2_P1").on("click", function() {    window.open('tailieu/L2/BỘ ĐỀ THI TOÁN LỚP 2.pdf', 'L2_P1');  });

     
    var L2_P2 = document.createElement("B"); 
    var txt2_2 = document.createTextNode("BT TOÁN 2 - HKII"); 
    L2_P2.appendChild(txt2_2); 
    L2_P2.setAttribute("href", "tailieu/L2/BT TOÁN 2 - HKII.pdf"); 
    L2_P2.setAttribute("id", "L2_P2"); 
    L2_P2.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L2_P2); 
    $("#L2_P2").on("click", function() {    window.open('tailieu/L2/BT TOÁN 2 - HKII.pdf', 'L2_P2');  });

     
    var L2_P3 = document.createElement("C"); 
    var txt2_3 = document.createTextNode("ĐỀ KIỂM TRA CUỐI KÌ 1"); 
    L2_P3.appendChild(txt2_3); 
    L2_P3.setAttribute("href", "tailieu/L2/ĐỀ KIỂM TRA CUỐI KÌ 1.pdf"); 
    L2_P3.setAttribute("id", "L2_P3"); 
    L2_P3.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L2_P3); 
    $("#L2_P3").on("click", function() {    window.open('tailieu/L2/ĐỀ KIỂM TRA CUỐI KÌ 1.pdf', 'L2_P3');  });

     
    var L2_P4 = document.createElement("D"); 
    var txt2_4 = document.createTextNode("ĐỀ KIỂM TRA CUỐI KÌ 2 - TN"); 
    L2_P4.appendChild(txt2_4); 
    L2_P4.setAttribute("href", "tailieu/L2/ĐỀ KIỂM TRA CUỐI KÌ 2 - TN.pdf"); 
    L2_P4.setAttribute("id", "L2_P4"); 
    L2_P4.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L2_P4); 
    $("#L2_P4").on("click", function() {    window.open('tailieu/L2/ĐỀ KIỂM TRA CUỐI KÌ 2 - TN.pdf', 'L2_P4');  });

     
    var L2_P5 = document.createElement("E"); 
    var txt2_5 = document.createTextNode("ĐỀ KIỂM TRA SÁCH CÁNH DIỀU"); 
    L2_P5.appendChild(txt2_5); 
    L2_P5.setAttribute("href", "tailieu/L2/ĐỀ KIỂM TRA SÁCH CÁNH DIỀU.pdf"); 
    L2_P5.setAttribute("id", "L2_P5"); 
    L2_P5.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L2_P5); 
    $("#L2_P5").on("click", function() {    window.open('tailieu/L2/ĐỀ KIỂM TRA SÁCH CÁNH DIỀU.pdf', 'L2_P5');  });

// LOP 3

     
    var L3_P1 = document.createElement("A"); 
    var txt2_1 = document.createTextNode("ĐỀ ÔN TẬP SỐ 1"); 
    L3_P1.appendChild(txt2_1); 
    L3_P1.setAttribute("href", "tailieu/L3/ĐỀ ÔN TẬP SỐ 1.pdf"); 
    L3_P1.setAttribute("id", "L3_P1"); 
    L3_P1.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L3_P1); 
    $("#L3_P1").on("click", function() {    window.open('tailieu/L3/ĐỀ ÔN TẬP SỐ 1.pdf', 'L3_P1');  });

     
    var L3_P2 = document.createElement("B"); 
    var txt2_2 = document.createTextNode("ĐỀ ÔN TẬP SỐ 2"); 
    L3_P2.appendChild(txt2_2); 
    L3_P2.setAttribute("href", "tailieu/L3/ĐỀ ÔN TẬP SỐ 2.pdf"); 
    L3_P2.setAttribute("id", "L3_P2"); 
    L3_P2.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L3_P2); 
    $("#L3_P2").on("click", function() {    window.open('tailieu/L3/ĐỀ ÔN TẬP SỐ 2.pdf', 'L3_P2');  });

     
    var L3_P3 = document.createElement("C"); 
    var txt2_3 = document.createTextNode("ĐỀ ÔN TẬP SỐ 3"); 
    L3_P3.appendChild(txt2_3); 
    L3_P3.setAttribute("href", "tailieu/L3/ĐỀ ÔN TẬP SỐ 3.pdf"); 
    L3_P3.setAttribute("id", "L3_P3"); 
    L3_P3.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L3_P3); 
    $("#L3_P3").on("click", function() {    window.open('tailieu/L3/ĐỀ ÔN TẬP SỐ 3.pdf', 'L3_P3');  });

     
    var L3_P4 = document.createElement("D"); 
    var txt2_4 = document.createTextNode("ĐỀ ÔN TẬP SỐ 4"); 
    L3_P4.appendChild(txt2_4); 
    L3_P4.setAttribute("href", "tailieu/L3/ĐỀ ÔN TẬP SỐ 4.pdf"); 
    L3_P4.setAttribute("id", "L3_P4"); 
    L3_P4.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L3_P4); 
    $("#L3_P4").on("click", function() {    window.open('tailieu/L3/ĐỀ ÔN TẬP SỐ 4.pdf', 'L3_P4');  });

     
    var L3_P5 = document.createElement("E"); 
    var txt2_5 = document.createTextNode("ĐỀ ÔN TẬP SỐ 5"); 
    L3_P5.appendChild(txt2_5); 
    L3_P5.setAttribute("href", "tailieu/L3/ĐỀ ÔN TẬP SỐ 5.pdf"); 
    L3_P5.setAttribute("id", "L3_P5"); 
    L3_P5.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L3_P5); 
    $("#L3_P5").on("click", function() {    window.open('tailieu/L3/ĐỀ ÔN TẬP SỐ 5.pdf', 'L3_P5');  });

// LOP4
     
    var L4_P1 = document.createElement("A"); 
    var txt2_1 = document.createTextNode("Biểu thức có chứa một chữ"); 
    L4_P1.appendChild(txt2_1); 
    L4_P1.setAttribute("href", "tailieu/L4/Biểu thức có chứa một chữ.pdf"); 
    L4_P1.setAttribute("id", "L4_P1"); 
    L4_P1.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L4_P1); 
    $("#L4_P1").on("click", function() {    window.open('tailieu/L4/Biểu thức có chứa một chữ.pdf', 'L4_P1');  });

     
    var L4_P2 = document.createElement("B"); 
    var txt2_2 = document.createTextNode("Tự kiểm tra"); 
    L4_P2.appendChild(txt2_2); 
    L4_P2.setAttribute("href", "tailieu/L4/Tự kiểm tra.pdf"); 
    L4_P2.setAttribute("id", "L4_P2"); 
    L4_P2.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L4_P2); 
    $("#L4_P2").on("click", function() {    window.open('tailieu/L4/Tự kiểm tra.pdf', 'L4_P2');  });

     
    var L4_P3 = document.createElement("C"); 
    var txt2_3 = document.createTextNode("Luyện tập"); 
    L4_P3.appendChild(txt2_3); 
    L4_P3.setAttribute("href", "tailieu/L4/Luyện tập.pdf"); 
    L4_P3.setAttribute("id", "L4_P3"); 
    L4_P3.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L4_P3); 
    $("#L4_P3").on("click", function() {    window.open('tailieu/L4/Luyện tập.pdf', 'L4_P3');  });

     
    var L4_P4 = document.createElement("D"); 
    var txt2_4 = document.createTextNode("Bốn phép tính với các số tự nhiên"); 
    L4_P4.appendChild(txt2_4); 
    L4_P4.setAttribute("href", "tailieu/L4/Bốn phép tính với các số tự nhiên.pdf"); 
    L4_P4.setAttribute("id", "L4_P4"); 
    L4_P4.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L4_P4); 
    $("#L4_P4").on("click", function() {    window.open('tailieu/L4/Bốn phép tính với các số tự nhiên.pdf', 'L4_P4');  });

// lop5


     
    var L5_P1 = document.createElement("A"); 
    var txt2_1 = document.createTextNode("BT CHIA SỐ ĐO THỜI GIAN"); 
    L5_P1.appendChild(txt2_1); 
    L5_P1.setAttribute("href", "tailieu/L5/BÀI TẬP CHIA SỐ ĐO THỜI GIAN.pdf"); 
    L5_P1.setAttribute("id", "L5_P1"); 
    L5_P1.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L5_P1); 
    $("#L5_P1").on("click", function() {    window.open('tailieu/L5/BÀI TẬP CHIA SỐ ĐO THỜI GIAN.pdf', 'L5_P1');  });

     
    var L5_P2 = document.createElement("B"); 
    var txt2_2 = document.createTextNode("BÀI TẬP TN CHƯƠNG 1"); 
    L5_P2.appendChild(txt2_2); 
    L5_P2.setAttribute("href", "tailieu/L5/BÀI TẬP TRẮC NHIỆM CHƯƠNG 1.pdf"); 
    L5_P2.setAttribute("id", "L5_P2"); 
    L5_P2.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L5_P2); 
    $("#L5_P2").on("click", function() {    window.open('tailieu/L5/BÀI TẬP TRẮC NHIỆM CHƯƠNG 1.pdf', 'L5_P2');  });

     
    var L5_P3 = document.createElement("C"); 
    var txt2_3 = document.createTextNode("DẠNG TOÁN SỐ VÀ CHỮ SỐ "); 
    L5_P3.appendChild(txt2_3); 
    L5_P3.setAttribute("href", "tailieu/L5/DẠNG TOÁN SỐ VÀ CHỮ SỐ .pdf"); 
    L5_P3.setAttribute("id", "L5_P3"); 
    L5_P3.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L5_P3); 
    $("#L5_P3").on("click", function() {    window.open('tailieu/L5/DẠNG TOÁN SỐ VÀ CHỮ SỐ .pdf', 'L5_P3');  });

     
    var L5_P4 = document.createElement("D"); 
    var txt2_4 = document.createTextNode("LUYỆN TẬP DIỆN TÍCH"); 
    L5_P4.appendChild(txt2_4); 
    L5_P4.setAttribute("href", "tailieu/L5/LUYỆN TẬP DIỆN TÍCH.pdf"); 
    L5_P4.setAttribute("id", "L5_P4"); 
    L5_P4.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L5_P4); 
    $("#L5_P4").on("click", function() {    window.open('tailieu/L5/LUYỆN TẬP DIỆN TÍCH.pdf', 'L5_P4');  });

     
    var L5_P5 = document.createElement("E"); 
    var txt2_5 = document.createTextNode("PHÉP CỘNG PHÉP TRỪ 2 PHÂN SỐ"); 
    L5_P5.appendChild(txt2_5); 
    L5_P5.setAttribute("href", "tailieu/L5/PHÉP CỘNG PHÉP TRỪ 2 PHÂN SỐ.pdf"); 
    L5_P5.setAttribute("id", "L5_P5"); 
    L5_P5.setAttribute("class", "a_all"); 
    tbAttachment.appendChild(L5_P5); 
    $("#L5_P5").on("click", function() {    window.open('tailieu/L5/PHÉP CỘNG PHÉP TRỪ 2 PHÂN SỐ.pdf', 'L5_P5');  });


    
    var btnNd = document.createElement("div");
    btnNd.setAttribute("id", "btnNd");
    document.getElementById("parent_tbMucLuc").appendChild(btnNd);

    var check_t1 = document.createElement("div");
    check_t1.setAttribute("id", "check_t1");
    document.getElementById("parent_tbMucLuc").appendChild(check_t1);

    function addElement_child_9(id_html_9) {
        var create_div_9 = document.createElement("div");
        create_div_9.setAttribute("id", id_html_9);
        document.getElementById("check_t1").appendChild(create_div_9);
    }
    var list_id_9 = [
        "t1_1",
        "t1_2",
        "t1_3",
        "t1_4",
        "t1_5",
        "t2_1",
        "t2_2",
        "t2_3",
        "t2_4",
        "t2_5",
        "t3_1",
        "t3_2",
        "t3_3",
        "t3_4",
        "t3_5",
        "t4_1",
        "t4_2",
        "t4_3",
        "t4_4",
        "t4_5",
        "t5_1",
        "t5_2",
        "t5_3",
        "t5_4",
     
    ];
    var i;
    for (i = 0; i < list_id_9.length; i++) {
        id_html_9 = list_id_9[i];
        addElement_child_9(id_html_9);
    }

    // var check_t2 = document.createElement("div");
    // check_t2.setAttribute("id", "check_t2");
    // document.getElementById("parent_tbMucLuc").appendChild(check_t2);

    // function addElement_child_9(id_html_9) {
    //     var create_div_9 = document.createElement("div");
    //     create_div_9.setAttribute("id", id_html_9);
    //     document.getElementById("check_t1").appendChild(create_div_9);
    // }
    // var list_id_9 = ["t2_1",
    //     "t2_2",
    //     "t2_3",
    //     "t2_4",
    //     "t2_5",
    // ];
    // var i;
    // for (i = 0; i < list_id_9.length; i++) {
    //     id_html_9 = list_id_9[i];
    //     addElement_child_9(id_html_9);
    // }

    // var check_t3 = document.createElement("div");
    // check_t3.setAttribute("id", "check_t3");
    // document.getElementById("parent_tbMucLuc").appendChild(check_t3);

    // var check_t4 = document.createElement("div");
    // check_t4.setAttribute("id", "check_t4");
    // document.getElementById("parent_tbMucLuc").appendChild(check_t4);

    // var check_t5 = document.createElement("div");
    // check_t5.setAttribute("id", "check_t5");
    // document.getElementById("parent_tbMucLuc").appendChild(check_t5);

    // var btnNd_4 = document.createElement("div");
    // btnNd_4.setAttribute("id", "btnNd_4");
    // document.getElementById("parent_tbMucLuc").appendChild(btnNd_4);


    // var btnNd_5 = document.createElement("div");
    // btnNd_5.setAttribute("id", "btnNd_5");
    // document.getElementById("parent_tbMucLuc").appendChild(btnNd_5);


    // var btnTqt = document.createElement("div");
    // btnTqt.setAttribute("id", "btnTqt");
    // document.getElementById("parent_tbMucLuc").appendChild(btnTqt);

    // var btnHDSD = document.createElement("div");
    // btnHDSD.setAttribute("id", "btnHDSD");
    // document.getElementById("parent_tbMucLuc").appendChild(btnHDSD);




    // var btnMucTieu = document.createElement("div");
    // btnMucTieu.setAttribute("id", "btnMucTieu");
    // document.getElementById("parent_tbMucLuc").appendChild(btnMucTieu);

    // var btnTongKet = document.createElement("div");
    // btnTongKet.setAttribute("id", "btnTongKet");
    // document.getElementById("parent_tbMucLuc").appendChild(btnTongKet);

    //var btnKTCuoi = document.createElement("div");
    //btnKTCuoi.setAttribute("id", "btnKTCuoi");
    //document.getElementById("parent_tbMucLuc").appendChild(btnKTCuoi);

    var btnSdkh = document.createElement("div");
    btnSdkh.setAttribute("id", "btnSdkh");
    document.getElementById("parent_tbMucLuc").appendChild(btnSdkh);

    // var tbMucLuc = document.createElement("div");
    //tbMucLuc.setAttribute("id", "tbMucLuc");
    // document.getElementById("scroll").appendChild(tbMucLuc);

    var btnMucLuc = document.createElement("div");
    btnMucLuc.setAttribute("id", "btnMucLuc");
    document.getElementById("Header_Parent").appendChild(btnMucLuc);
    

    var btnMucLuc_hide = document.createElement("div");
    btnMucLuc_hide.setAttribute("id", "btnMucLuc_hide");
    document.getElementById("Header_Parent").appendChild(btnMucLuc_hide);

    var btnMucLuc_test = document.createElement("div");
    btnMucLuc_test.setAttribute("id", "btnMucLuc_test");
    document.getElementById("Header_Parent").appendChild(btnMucLuc_test);


    /*
    // var close_mucluc = document.createElement("div");
    // close_mucluc.setAttribute("id", "close_mucluc");
    // document.getElementById("parent_MucLuc").appendChild(close_mucluc);
    */

    function addElement_child_2(id_html_2) {
        var create_div_2 = document.createElement("div");
        create_div_2.setAttribute("id", id_html_2);
        create_div_2.setAttribute("class", "classCustom_Menu");
        document.getElementById("divMenu").appendChild(create_div_2);
    }
    // $("#close_mucluc").on("click", function(){	
    // 	$("#parent_MucLuc").css("display", "none");	
    // });




    //Click btnMucLuc 
    var check_btnMucLuc = false;
    $("#btnMucLuc").on("click", function() {

        if (check_btnMucLuc != true) {
            check_btnMucLuc = true;

            $("#btnMucLuc_hide").css("display", "inline");
            setTimeout(function() {
                $("#parent_MucLuc").css("display", "inline");
                $("#btnMucLuc_hide").css("display", "none");
            }, 0);


            const element = document.querySelector('#parent_tbMucLuc');
            element.classList.add('animate__animated', 'animate__fadeInLeft');

            const element1 = document.querySelector('#parent_tbMucLuc');
            element1.classList.remove('animate__fadeOutLeft');
            $("#tbHelp,#btnClose_help").css("display", "none");

            $("#btnHideMenu").css("display", "none");
            $("#divMenu").animate({
                left: "1342px",
            }, 700);

            setTimeout(function() {
                $("#btnShowMenu").css("display", "inline");
            }, 700);


            $("#btnClose_atm").css("display", "none");

            $("#tbAttachment").animate({
                left: "362px",
            }, 700);
            setTimeout(function() {
                $("#tbAttachment").css("display", "none");
            }, 700);
        } else {
            check_btnMucLuc = false;
            $("#btnMucLuc_hide").css("display", "inline");
            setTimeout(function() {
                $("#parent_MucLuc,#btnMucLuc_hide").css("display", "none");
            }, 1000);

            const element0 = document.querySelector('#parent_tbMucLuc');
            element0.classList.remove('animate__fadeInLeft');
            const element1 = document.querySelector('#parent_tbMucLuc');
            element1.classList.add('animate__fadeOutLeft');


        }

    });
    /// ----------------------------xu ly tieu de------------------


    /*
    ////////////////////////////////------end xu ly mục lục-----/////////////////////////////////////
    */
    var btnPause = document.createElement("div");
    btnPause.setAttribute("id", "btnPause");
    document.getElementById("Footer_Parent").appendChild(btnPause);
    //slide 1 add btnpause

    var pSoTrang = document.createElement("div");
    pSoTrang.setAttribute("id", "pSoTrang");
    document.getElementById("Footer_Parent").appendChild(pSoTrang);

    $("#btnNext").on("click", function() {
        window.cpAPIInterface.next();
    });

    $("#btnBack").on("click", function() {
        window.cpAPIInterface.previous();
    });

    $("#btnHome").click(function() {
        window.cpCmndGotoSlideAndResume = 1;
    });

    $("#btnReplay").click(function() {
        window.cpCmndGotoSlideAndResume = 46;
    });

    $("#btnFullScreen").click(function() {
        var elem = document.getElementById('cpDocument');

        if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
            if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    $('#div_Slide').css({
                        'display': 'inline',
                    })
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();

                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();

                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                    $('#div_Slide').css({
                        'align-items': 'center',
                        'justify-content': 'center',
                        'width': '100%',
                        'height': '100%',
                    });

                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen();

                } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();

                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                }

            }
        } else {
            console.log('Fullscreen is not supported on your browser.');
        }
    });
    //Create html các mục trong mục lục
    function addElement_child_4(id_html_4) {
        var create_div_4 = document.createElement("div");
        create_div_4.setAttribute("id", id_html_4);
        // create_div_4.setAttribute("class", "classStatusml" );
        document.getElementById("btnNd").appendChild(create_div_4);
    }
    var list_id_4 = ["Child_Menu_1_1",
        "Child_Menu_1_2",
        "Child_Menu_1_3",
        "Child_Menu_1_4",
        "Child_Menu_1_5",

    ];
    var i;
    for (i = 0; i < list_id_4.length; i++) {
        id_html_4 = list_id_4[i];
        addElement_child_4(id_html_4);
    }

    var btnNd2 = document.createElement("div");
    btnNd2.setAttribute("id", "btnNd2");
    document.getElementById("parent_tbMucLuc").appendChild(btnNd2);

    function addElement_child_5(id_html_5) {
        var create_div_5 = document.createElement("div");
        create_div_5.setAttribute("id", id_html_5);
        document.getElementById("btnNd2").appendChild(create_div_5);
    }
    var list_id_5 = ["Child_Menu_2_1",
        "Child_Menu_2_2",
        "Child_Menu_2_3",
        "Child_Menu_2_4",
        "Child_Menu_2_5",];
    var i;
    for (i = 0; i < list_id_5.length; i++) {
        id_html_5 = list_id_5[i];
        addElement_child_5(id_html_5);
        
    }

    var btnNd3 = document.createElement("div");
    btnNd3.setAttribute("id", "btnNd3");
    document.getElementById("parent_tbMucLuc").appendChild(btnNd3);

//lop3
function addElement_child_6(id_html_6) {
    var create_div_6 = document.createElement("div");
    create_div_6.setAttribute("id", id_html_6);
    // create_div_4.setAttribute("class", "classStatusml" );
    document.getElementById("btnNd3").appendChild(create_div_6);
}
var list_id_6 = ["Child_Menu_3_1",
    "Child_Menu_3_2",
    "Child_Menu_3_3",
    "Child_Menu_3_4",
    "Child_Menu_3_5",

];
var i;
for (i = 0; i < list_id_6.length; i++) {
    id_html_6 = list_id_6[i];
    addElement_child_6(id_html_6);
}

var btnNd4 = document.createElement("div");
btnNd4.setAttribute("id", "btnNd4");
document.getElementById("parent_tbMucLuc").appendChild(btnNd4);

//lop4
function addElement_child_7(id_html_7) {
    var create_div_7 = document.createElement("div");
    create_div_7.setAttribute("id", id_html_7);
    // create_div_4.setAttribute("class", "classStatusml" );
    document.getElementById("btnNd4").appendChild(create_div_7);
}
var list_id_7 = ["Child_Menu_4_1",
    "Child_Menu_4_2",
    "Child_Menu_4_3",
    "Child_Menu_4_4",
    "Child_Menu_4_5",

];
var i;
for (i = 0; i < list_id_7.length; i++) {
    id_html_7 = list_id_7[i];
    addElement_child_7(id_html_7);
}

var btnNd5 = document.createElement("div");
btnNd5.setAttribute("id", "btnNd5");
document.getElementById("parent_tbMucLuc").appendChild(btnNd5);

//lop5
function addElement_child_8(id_html_8) {
    var create_div_8 = document.createElement("div");
    create_div_8.setAttribute("id", id_html_8);
    // create_div_4.setAttribute("class", "classStatusml" );
    document.getElementById("btnNd5").appendChild(create_div_8);
}
var list_id_8 = ["Child_Menu_5_1",
    "Child_Menu_5_2",
    "Child_Menu_5_3",
    "Child_Menu_5_4",
    "Child_Menu_5_5",

];
var i;
for (i = 0; i < list_id_8.length; i++) {
    id_html_8 = list_id_8[i];
    addElement_child_8(id_html_8);
}
    //Phần đầu-----------------------------------------------------------------------
    $("#btnGioiThieu").on("click", function() {
        window.cpCmndGotoSlideAndResume = 0;
        if (getCSI == 1) {
            window.cpCmndGotoSlideAndResume = 35;
        }
    });


    $("#btnHDSD").on("click", function() {
        window.cpCmndGotoSlideAndResume = 1;
        if (getCSI == 2) {
            window.cpCmndGotoSlideAndResume = 35;
        }
    });

    $("#btnMucTieu").on("click", function() {
        window.cpCmndGotoSlideAndResume = 2;
        if (getCSI == 3) {
            window.cpCmndGotoSlideAndResume = 35;
        }
    });


    //Phần 1
    $("#Child_Menu_1_1").on("click", function() {
        window.cpCmndGotoSlideAndResume = 2;
        if (getCSI == 3) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_1_2").on("click", function() {
        window.cpCmndGotoSlideAndResume = 3;
        if (getCSI == 4) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_1_3").on("click", function() {
        window.cpCmndGotoSlideAndResume = 5;
        if (getCSI == 6) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_1_4").on("click", function() {
        window.cpCmndGotoSlideAndResume = 7;
        if (getCSI == 8) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    
    //Child Phần 1
    /*$("#Child_Menu_1_1").on("click", function() {
      window.cpCmndGotoSlideAndResume = 7;
        if (getCSI == 8) {
            window.cpCmndGotoSlideAndResume = 35;
        }
    });

  
*/

    //Phần 2
    $("#Child_Menu_2_1").on("click", function() {
        window.cpCmndGotoSlideAndResume = 9;
        if (getCSI == 10) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_2_2").on("click", function() {
        window.cpCmndGotoSlideAndResume = 11;
        if (getCSI == 12) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_2_3").on("click", function() {
        window.cpCmndGotoSlideAndResume = 12;
        if (getCSI == 13) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_2_4").on("click", function() {
        window.cpCmndGotoSlideAndResume = 14;
        if (getCSI == 15) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });

    //p3
     $("#Child_Menu_3_1").on("click", function() {
        window.cpCmndGotoSlideAndResume = 15;
        if (getCSI == 16) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_3_2").on("click", function() {
        window.cpCmndGotoSlideAndResume = 17;
        if (getCSI == 18) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_3_3").on("click", function() {
        window.cpCmndGotoSlideAndResume = 18;
        if (getCSI == 19) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_3_4").on("click", function() {
        window.cpCmndGotoSlideAndResume = 20;
        if (getCSI == 21) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });

    //pp4
    $("#Child_Menu_4_1").on("click", function() {
        window.cpCmndGotoSlideAndResume = 22;
        if (getCSI == 23) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_4_2").on("click", function() {
        window.cpCmndGotoSlideAndResume = 24;
        if (getCSI == 25) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_4_3").on("click", function() {
        window.cpCmndGotoSlideAndResume = 26;
        if (getCSI == 27) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_4_4").on("click", function() {
        window.cpCmndGotoSlideAndResume = 27;
        if (getCSI == 28) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    //p5
    $("#Child_Menu_5_1").on("click", function() {
        window.cpCmndGotoSlideAndResume = 29;
        if (getCSI == 30) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_5_2").on("click", function() {
        window.cpCmndGotoSlideAndResume = 30;
        if (getCSI == 31) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
    $("#Child_Menu_5_3").on("click", function() {
        window.cpCmndGotoSlideAndResume = 31;
        if (getCSI == 32) {
            window.cpCmndGotoSlideAndResume = 46;
        }
    });
  
    //Child phần 3
    // $("#Child_Menu_3").on("click", function() {
    //     window.cpCmndGotoSlideAndResume = 31;
    //     if (getCSI == 32) {
    //         window.cpCmndGotoSlideAndResume = 35;
    //     }
    // });

    // $("#btnTongKet").on("click", function() {
    //     window.cpCmndGotoSlideAndResume = 33;
    //     if (getCSI == 34) {
    //         window.cpCmndGotoSlideAndResume = 35;
    //     }
    // });
    // $("#btnTqt").on("click", function() {
    //     window.cpCmndGotoSlideAndResume = 3;
    //     if (getCSI == 4) {
    //         window.cpCmndGotoSlideAndResume = 35;
    //     }
    // });
    // $("#btnSdkh").on("click", function() {
    //     window.cpCmndGotoSlideAndResume = 34;
    //     if (getCSI == 35) {
    //         window.cpCmndGotoSlideAndResume = 35;
    //     }
    // });

    //------------------------------------------------------------------------------------


    //------------------------------------------------------------------------------------

    //Xử lý sự kiện menu------------------------------------------------------------------
    $("#btnShowMenu").on("click", function() {
        check_btnMucLuc = false;
        $("#divMenu").css("display", "inline");
        $("#parent_MucLuc").css("display", "none");
        $("#btnShowMenu").css("display", "none");
        $("#divMenu").animate({
            left: "1005px",
        }, 700);
        setTimeout(function() {
            $("#btnHideMenu").css("display", "inline");
        }, 700);
    });

    $("#btnHideMenu").on("click", function() {
        $("#btnHideMenu").css("display", "none");
        $("#divMenu").animate({
            left: "1342px",
        }, 700);

        setTimeout(function() {
            $("#btnShowMenu").css("display", "inline");
        }, 700);


        $("#btnClose_atm").css("display", "none");

        $("#tbAttachment").animate({
            left: "362px",
        }, 700);
        setTimeout(function() {
            $("#tbAttachment").css("display", "none");
        }, 700);

        $("#tbHelp,#btnClose_help").css("display", "none");
    });

    // Event btn actach
    $("#btnAttach").on("click", function() {
        $("#tbAttachment").css("display", "inline");
        $("#tbHelp,#btnClose_help").css("display", "none");

        $("#tbAttachment").animate({
            left: "46px",
        }, 700);
        setTimeout(function() {
            $("#btnClose_atm").css("display", "inline");
        }, 700);

    });
    $("#btnClose_atm").on("click", function() {
        $("#btnClose_atm").css("display", "none");

        $("#tbAttachment").animate({
            left: "362px",
        }, 700);
        setTimeout(function() {
            $("#tbAttachment").css("display", "none");
        }, 700);


    });

    $("#btnHelp").on("click", function() {
        $("#tbHelp,#btnClose_help").css("display", "inline");

        $("#btnClose_atm").css("display", "none");

        $("#tbAttachment").animate({
            left: "362px",
        }, 700);
        setTimeout(function() {
            $("#tbAttachment").css("display", "none");
        }, 700);
    });
    $("#btnClose_help").on("click", function() {
        $("#tbHelp,#btnClose_help").css("display", "none");
    });
    //------------------------------------------------------------------------------------
    // Ràng buộc nút next & back----------------------------------------------------------

    var check_Pause = false;
    $("#btnPause").on("click", function() {
        if (check_Pause != true) {
            check_Pause = true;
            window.cpAPIInterface.pause();
            $("#btnPause").css("background", "url('template/btn_Phat.png') no-repeat");
        } else {
            check_Pause = false
            window.cpAPIInterface.play();
            $("#btnPause").css("background", "url('template/btn_Pause.png') no-repeat");
        }

    });

      if ( (getCSI == 9) || (getCSI == 5) ||  (getCSI == 7) ||  (getCSI == 11) ||  (getCSI == 14)||  (getCSI == 17)
        ||  (getCSI == 21) ||  (getCSI == 22) ||  (getCSI == 24)||  (getCSI == 26)||  (getCSI == 29) ||  (getCSI == 33) ||  (getCSI == 34)
        ||  (getCSI == 33)) {
            $("#btnPause,#btnNext,#btnBack").css("display", "none")
        }
        if(getCSI >= 34 && getCSI <= 46){
            $("#btnPause,#btnNext,#btnBack").css("display", "none")
        $("#btnMucLuc").css("display", "none");
        }
    if (getCSI == 15) {
        $("#btnNext").on("click", function() {
            window.cpAPIInterface.setVariableValue("cpCmndGotoSlide",33);
        });
    
    }
    if ((getCSI == 1 )|| (getCSI == 34)) {
        $("#btnMucLuc").css("display", "none");
        $("#btnMucLuc_test").css("display", "inline")

    }
    if (getCSI == 2) {
        $("#btnMucLuc").css("display", "none");
        $("#btnPause,#btnNext,#btnBack").css("display", "none")
    }
    // -------------------------------------------------------------------------------------

    // Show Menu HDSD----------------------------------------------------------------------
    if (getCSI == 1) {
        $("#divMenu").css("display", "inline");
        $("#btnShowMenu").css("display", "none");
        $("#divMenu").animate({
            left: "1005px",
        }, 700);
        setTimeout(function() {
            $("#btnHideMenu").css("display", "inline");
        }, 700);
    }
    if(getCSI >=10 && getCSI <= 15){
        $("#L2_P1,#L2_P2,#L2_P3,#L2_P4,#L2_P5").css("display", "inline");
        $("#t1_1,#t1_2,#t1_3,#t1_4,#t1_5,#t3_1,#t3_2,#t3_3,#t3_4,#t3_5,#t4_1,#t4_2,#t4_3,#t4_4,#t4_5,#t5_1,#t5_2,#t5_3,#t5_4").css("display", "none")
        L1_1 = L1_2 = L1_3 = L1_4 = L1_5 = 0;
        L3_1 = L3_2 = L3_3 = L3_4 = L3_5 = 0;
        L4_1 = L4_2 = L4_3 = L4_4 = L4_5 = 0;
        L5_1 = L5_2 = L5_3 = L5_4 = L5_5 = 0;
    }
    else{
        $("#L2_P1,#L2_P2,#L2_P3,#L2_P4,#L2_P5").css("display", "none");
    }
    if(getCSI >=3 && getCSI <= 9){
        $("#L1_P1,#L1_P2,#L1_P3,#L1_P4,#L1_P5").css("display", "inline");
        $("#t2_1,#t2_2,#t2_3,#t2_4,#t2_5,#t3_1,#t3_2,#t3_3,#t3_4,#t3_5,#t4_1,#t4_2,#t4_3,#t4_4,#t4_5,#t5_1,#t5_2,#t5_3,#t5_4").css("display", "none")
        L2_1 = L2_2 = L2_3 = L2_4 = L2_5 = 0;
        L3_1 = L3_2 = L3_3 = L3_4 = L3_5 = 0;
        L4_1 = L4_2 = L4_3 = L4_4 = L4_5 = 0;
        L5_1 = L5_2 = L5_3 = L5_4 = L5_5 = 0;
    }
    else{
        $("#L1_P1,#L1_P2,#L1_P3,#L1_P4,#L1_P5").css("display", "none");
    }
    if(getCSI >= 16 && getCSI <= 22){
        $("#L3_P1,#L3_P2,#L3_P3,#L3_P4,#L3_P5").css("display", "inline");
        $("#t2_1,#t2_2,#t2_3,#t2_4,#t2_5,#t1_1,#t1_2,#t1_3,#t1_4,#t1_5,#t4_1,#t4_2,#t4_3,#t4_4,#t4_5,#t5_1,#t5_2,#t5_3,#t5_4").css("display", "none")
        L2_1 = L2_2 = L2_3 = L2_4 = L2_5 = 0;
        L1_1 = L1_2 = L1_3 = L1_4 = L1_5 = 0;
        L4_1 = L4_2 = L4_3 = L4_4 = L4_5 = 0;
        L5_1 = L5_2 = L5_3 = L5_4 = L5_5 = 0;
    }
    else{
        $("#L3_P1,#L3_P2,#L3_P3,#L3_P4,#L3_P5").css("display", "none");
    }
    if(getCSI >= 23 && getCSI <= 29){
        $("#L4_P1,#L4_P2,#L4_P3,#L4_P4,#L4_P5").css("display", "inline");
        $("#t2_1,#t2_2,#t2_3,#t2_4,#t2_5,#t1_1,#t1_2,#t1_3,#t1_4,#t1_5,#t3_1,#t3_2,#t3_3,#t3_4,#t3_5,#t5_1,#t5_2,#t5_3,#t5_4").css("display", "none")
        L2_1 = L2_2 = L2_3 = L2_4 = L2_5 = 0;
        L1_1 = L1_2 = L1_3 = L1_4 = L1_5 = 0;
        L3_1 = L3_2 = L3_3 = L3_4 = L3_5 = 0;
        L5_1 = L5_2 = L5_3 = L5_4 = L5_5 = 0;
    }
    else{
        $("#L4_P1,#L4_P2,#L4_P3,#L4_P4,#L4_P5").css("display", "none");
    }
    if(getCSI >= 30 && getCSI <= 33){
        $("#L5_P1,#L5_P2,#L5_P3,#L5_P4,#L5_P5").css("display", "inline");
        $("#t2_1,#t2_2,#t2_3,#t2_4,#t2_5,#t1_1,#t1_2,#t1_3,#t1_4,#t1_5,#t3_1,#t3_2,#t3_3,#t3_4,#t3_5,#t4_1,#t4_2,#t4_3,#t4_4,#t4_5").css("display", "none")
        L2_1 = L2_2 = L2_3 = L2_4 = L2_5 = 0;
        L1_1 = L1_2 = L1_3 = L1_4 = L1_5 = 0;
        L3_1 = L3_2 = L3_3 = L3_4 = L3_5 = 0;
        L4_1 = L4_2 = L4_3 = L4_4 = L4_5 = 0;
    }
    else{
        $("#L5_P1,#L5_P2,#L5_P3,#L5_P4,#L5_P5").css("display", "none");
    }
    if(getCSI >= 3 && getCSI <=9 ){
       
        $("#btnNd").css("display", "inline")
        $("#btnNd2").css("display", "none")
        $("#btnNd3").css("display", "none")
        $("#btnNd4").css("display", "none")
        $("#btnNd5").css("display", "none")
    }
    if(getCSI >= 10 && getCSI <= 15){
        
        $("#parent_tbMucLuc").css({ "background": "url('template/Mucluc_L2.png')no-repeat", "z-index": "999" })
        $("#btnNd").css("display", "none")
        $("#btnNd2").css("display", "inline")
        $("#btnNd3").css("display", "none")
        $("#btnNd4").css("display", "none")
        $("#btnNd5").css("display", "none")
    }
    if(getCSI >= 16 && getCSI <= 22){
     
        $("#parent_tbMucLuc").css({ "background": "url('template/Mucluc_L3.png')no-repeat", "z-index": "999" })
        $("#btnNd").css("display", "none")
        $("#btnNd3").css("display", "inline")
        $("#btnNd2").css("display", "none")
        $("#btnNd4").css("display", "none")
        $("#btnNd5").css("display", "none")
    }
    if(getCSI >= 23 && getCSI <= 28){
        $("#t2_1,#t2_2,#t2_3,#t2_4,#t2_5,#t1_1,#t1_2,#t1_3,#t1_4,#t1_5,#t3_1,#t3_2,#t3_3,#t3_4,#t3_5,#t5_1,#t5_2,#t5_3,#t5_4").css("display", "none")
        $("#parent_tbMucLuc").css({ "background": "url('template/Mucluc_L4.png')no-repeat", "z-index": "999" })
        $("#btnNd").css("display", "none")
        $("#btnNd4").css("display", "inline")
        $("#btnNd3").css("display", "none")
        $("#btnNd2").css("display", "none")
        $("#btnNd5").css("display", "none")
    }
    if(getCSI >= 30 && getCSI <= 33){
        $("#t2_1,#t2_2,#t2_3,#t2_4,#t2_5,#t1_1,#t1_2,#t1_3,#t1_4,#t1_5,#t3_1,#t3_2,#t3_3,#t3_4,#t3_5,#t4_1,#t4_2,#t4_3,#t4_4,#t4_5").css("display", "none")
        $("#parent_tbMucLuc").css({ "background": "url('template/Mucluc_L5.png')no-repeat", "z-index": "999" })
        $("#btnNd").css("display", "none")
        $("#btnNd5").css("display", "inline")
        $("#btnNd3").css("display", "none")
        $("#btnNd2").css("display", "none")
        $("#btnNd4").css("display", "none")
    }
    //--------------------------------------------------------------------------------------

    //Biến Sơ Đồ Khóa Học-------------------------------------------------------------------

    //Phần 1----------------------------------------
    if ((getCSI == 3) && (L1_1 != 1)) {
        L1_1 = 1;
    }
    if(L1_1 == 1){
        $("#t1_1").css("display", "inline")
    }
    if 
    ((getCSI == 5) && (L1_2 != 1)){
        L1_2 = 1;
    }
    if(L1_2 == 1){
        $("#t1_2").css("display", "inline")
    }
    if ((getCSI == 7)&& (L1_3 != 1)) {
        L1_3 = 1;
    }
    if(L1_3 == 1){
        $("#t1_3").css("display", "inline")
    }
    if ((getCSI == 9) && (L1_4 != 1)){
        L1_4 = 1
    }
    if(L1_4 == 1){
        $("#t1_4").css("display", "inline")
    }

        $("#Child_Menu_1_5").on("click", function() {
            
        if(L1_1 == 1 && L1_2 == 1 && L1_3 == 1 && L1_4 == 1){
            window.cpCmndGotoSlideAndResume = 33;
            if (getCSI == 34) {
                window.cpCmndGotoSlideAndResume = 46;
            }
        }
        else{
            $("#divPupop, #den, #btnTieptuc").css("display", "inline");
            window.cpAPIInterface.pause();
        }
        });
        ////p2
        if ((getCSI == 11) && (L2_1 != 1)) {
            L2_1 = 1;
        }
        if(L2_1 == 1){
            $("#t2_1").css("display", "inline")
        }
        if 
        ((getCSI == 12) && (L2_2 != 1)){
            L2_2 = 1;
        }
        if(L2_2 == 1){
            $("#t2_2").css("display", "inline")
        }
        if ((getCSI == 14)&& (L2_3 != 1)) {
            L2_3 = 1;
        }
        if(L2_3 == 1){
            $("#t2_3").css("display", "inline")
        }
        if ((getCSI == 15) && (L2_4 != 1)){
            L2_4 = 1;
        }
        if(L2_4 == 1){
            $("#t2_4").css("display", "inline")
        }
        $("#Child_Menu_2_5").on("click", function() {
            
            if(L2_1 == 1 && L2_2 == 1 && L2_3 == 1 && L2_4 == 1){
                window.cpCmndGotoSlideAndResume = 33;
                if (getCSI == 34) {
                    window.cpCmndGotoSlideAndResume = 46;
                }
            }
            else{
                $("#divPupop, #den, #btnTieptuc").css("display", "inline");
                window.cpAPIInterface.pause();
            }
            });
        

////

            if ((getCSI == 17) && (L3_1 != 1)) {
                L3_1 = 1;
            }
            if(L3_1 == 1){
                $("#t3_1").css("display", "inline")
            }
            if 
            ((getCSI == 18) && (L3_2 != 1)){
                L3_2 = 1;
            }
            if(L3_2 == 1){
                $("#t3_2").css("display", "inline")
            }
        
            if ((getCSI == 20)&& (L3_3 != 1)) {
                L3_3 = 1;
            }
            if(L3_3 == 1){
                $("#t3_3").css("display", "inline")
            }
            if ((getCSI == 22) && (L3_4 != 1)){
                L3_4 = 1;
            }
            if(L3_4 == 1){
                $("#t3_4").css("display", "inline")
            }
            $("#Child_Menu_3_5").on("click", function() {
                
                if(L3_1 == 1 && L3_2 == 1 && L3_3 == 1 && L3_4 == 1){
                    window.cpCmndGotoSlideAndResume = 33;
                    if (getCSI == 34) {
                        window.cpCmndGotoSlideAndResume = 46;
                    }
                }
                else{
                    $("#divPupop, #den, #btnTieptuc").css("display", "inline");
                    window.cpAPIInterface.pause();
                }
                });
            
    

    // 	//-----------------------------------------------


    if ((getCSI == 24) && (L4_1 != 1)) {
        L4_1 = 1;
    }
    if(L4_1 == 1){
        $("#t4_1").css("display", "inline")
    }
    if 
    ((getCSI == 26) && (L4_2 != 1)){
        L4_2 = 1;
    }
    if(L4_2 == 1){
        $("#t4_2").css("display", "inline")
    }
    if ((getCSI == 27)&& (L4_3 != 1)) {
        L4_3 = 1;
    }
    if(L4_3 == 1){
        $("#t4_3").css("display", "inline")
    }
    if ((getCSI == 29) && (L4_4 != 1)){
        L4_4 = 1;
    }
    if(L4_4 == 1){
        $("#t4_4").css("display", "inline")
    }
    $("#Child_Menu_4_5").on("click", function() {
        
        if(L4_1 == 1 && L4_2 == 1 && L4_3 == 1 && L4_4 == 1){
            window.cpCmndGotoSlideAndResume = 33;
            if (getCSI == 34) {
                window.cpCmndGotoSlideAndResume = 46;
            }
        }
        else{
            $("#divPupop, #den, #btnTieptuc").css("display", "inline");
            window.cpAPIInterface.pause();
        }
        });
    

// //---------------------------------------/

        if ((getCSI == 30) && (L5_1 != 1)) {
            L5_1 = 1;
        }
        if(L5_1 == 1){
            $("#t5_1").css("display", "inline")
        }
        if 
        ((getCSI == 31) && (L5_2 != 1)){
            L5_2 = 1;
        }
        if(L5_2 == 1){
            $("#t5_2").css("display", "inline")
        }
        if ((getCSI == 33)&& (L5_3 != 1)) {
            L5_3 = 1;
        }
        if(L5_3 == 1){
            $("#t5_3").css("display", "inline")
        }

        $("#Child_Menu_5_4").on("click", function() {
            
            if(L5_1 == 1 && L5_2 == 1 && L5_3 == 1){
                window.cpCmndGotoSlideAndResume = 33;
                if (getCSI == 34) {
                    window.cpCmndGotoSlideAndResume = 46;
                }
            }
            else{
                $("#divPupop, #den, #btnTieptuc").css("display", "inline");
                window.cpAPIInterface.pause();
            }
            });
        

    // 	//-----------------------------------------------

    // 	//Phần 3-----------------------------------------
 




    //Title-----------------------------------------------------------------------------------
    // if (getCSI == 5) {
    //     $("#tieude_slide5").css({ "width": "501px", "height": "36px", "position": "absolute", "left": "225px", "top": "10px", "background": "url('template/tieude_slide5.png')no-repeat", "z-index": "99999" });
    // }
    // if ((getCSI > 6) && (getCSI < 10)) {
    //     $("#tieude_slide5").css({ "width": "405px", "height": "38px", "position": "absolute", "left": "230px", "top": "10px", "background": "url('template/tieude_slide9.png')no-repeat", "z-index": "99999" });
    // }
    // if ((getCSI > 10) && (getCSI < 25)) {
    //     $("#tieude_slide5").css({ "width": "501px", "height": "36px", "position": "absolute", "left": "230px", "top": "10px", "background": "url('template/tieude_slide11.png')no-repeat", "z-index": "99999" });
    // }
    // if ((getCSI > 26) && (getCSI < 32)) {
    //     $("#tieude_slide5").css({ "width": "501px", "height": "36px", "position": "absolute", "left": "230px", "top": "10px", "background": "url('template/tieude_slide11.png')no-repeat", "z-index": "99999" });
    // }



    //Số trang--------------------------------------------------------------------------------

    // if (getCSI == 2) { pSoTrang.innerHTML = "01/33" }
    // if (getCSI == 3) { pSoTrang.innerHTML = "02/33" }
    // if (getCSI == 4) { pSoTrang.innerHTML = "03/33" }
    // if (getCSI == 5) { pSoTrang.innerHTML = "04/33" }
    // if (getCSI == 6) { pSoTrang.innerHTML = "05/33" }
    // if (getCSI == 7) { pSoTrang.innerHTML = "06/33" }
    // if (getCSI == 8) { pSoTrang.innerHTML = "07/33" }
    // if (getCSI == 9) { pSoTrang.innerHTML = "08/33" }
    // if (getCSI == 10) { pSoTrang.innerHTML = "09/33" }

    // var demtrang = getCSI - 1;
    // for (i = 2; i <= 34; i++) {
    //     if (getCSI == i) { pSoTrang.innerHTML = demtrang + "/33" }
    // }


    //-------------------------------------------------------------------------------

    //chung chi

    var showName = document.createElement("div");
    showName.setAttribute("id", "showName");
    document.getElementById("div_Slide").appendChild(showName);


    // var ngayEng = document.createElement("div");
    // ngayEng.setAttribute("id", "ngayEng");
    // document.getElementById("div_Slide").appendChild(ngayEng);

    var ngayVn = document.createElement("div");
    ngayVn.setAttribute("id", "ngayVn");
    document.getElementById("div_Slide").appendChild(ngayVn);

    if (getCSI == 46) {
        //  var getPoint = window.cpAPIInterface.getVariableValue("cpQuizInfoPointsscored");
        var getName = window.cpAPIInterface.getVariableValue("cpQuizInfoStudentName");
        var newName = getName.split(",");
        newName.reverse();
        name = newName[1] + '' + newName[0];

        // name = "Nguyễn Thương Nguyệt Trường";


        $("#showName").css({
            "display": "inline",
            "position": "absolute",
            "width": "439px",
            "height": "69px",
            "top": "343px",
            "left": "616px",
            "font-family": "arial",
            "font-size": "40px",
            "font-weight": "bold",
            "color": "#860028",
            "text-align": "center",
            "z-index": 999
        });



        showName.innerHTML = name;


        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        // today = 'on ' + dd + '/' + mm + '/' + yyyy;

        today_vn = 'Vào ngày ' + dd + '/' + mm + '/' + yyyy;



        $("#ngayVn").css({
            "display": "inline",
            "position": "absolute",
            "width": "329px",
            "height": "29px",
            "top": "535px",
            "left": "489px",
            "font-family": "arial",
            "font-size": "20px",
            "font-weight": "normal",
            "color": "#860028",
            "text-align": "center",
            "z-index": 99999
        });

        // $("#ngayVn").css({"display":"inline", 
        // "position": "absolute",
        // "width": "329px",
        // "height": "100px",
        // "top": "518px",
        // "left": "489px",       
        // "font-family": "arial",
        // "font-size": "20px",
        // "font-style": "italic",    
        // "color": "#000000", 
        // "text-align": "center",
        // "z-index" : 9});



        // ngayEng.innerHTML = today;
        ngayVn.innerHTML = today_vn;



    }
}

function fun_chungchi() {
    // body...
    $("#showName").hide();
    $("#ngayEng").hide();
    $("#ngayVn").hide();

    var getName = window.cpAPIInterface.getVariableValue("cpQuizInfoStudentName");
    var newName = getName.split(",");
    newName.reverse();
    $name = newName[1] + '' + newName[0];

    // $name = "Nguyễn Thương Nguyệt Trường";

    var canvas = document.getElementById("Image_20c");
    var context = canvas.getContext('2d');
    // Stroke Text
    context.font = "bold 40px Arial";
    context.fillStyle = '#860028';
    context.textAlign = 'center';
    context.fillText($name, 400, 305);


    var canvas = document.getElementById("Image_20c");
    var contexts = canvas.getContext('2d');
    var contextss = canvas.getContext('2d');

    // Stroke Text



    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    // today = 'on ' + dd + '/' + mm + '/' + yyyy;

    today_vn = 'Vào ngày ' + dd+'/'+mm+'/'+yyyy;


    contexts.font = "20px Arial";
    contexts.fillStyle = '#00000';
    contexts.textAlign = 'center';
    contexts.fillText(today_vn, 236, 484);

    //  contextss.font="italic 12px Arial";
    //  contextss.fillStyle = '#000000';
    //  contextss.textAlign='center';
    //  contextss.fillText(today_vn, 376, 514);



    //contextss.fillText(today_vn, 609, 438);
    var dataURL = canvas.toDataURL();

    // set canvasImg image src to dataURL
    // so it can be saved as an image
    document.getElementById('Image_20c').src = dataURL;

    var codeimage = document.getElementById('Image_20c').src;

    var isIE = /*@cc_on!@*/ false || !!document.documentMode;

    if (isIE) {
        var html = '<div style="width: 100%; padding: 0; margin: 0;"';
        html += ' onload="window.print();">';
        html += '<img src="' + codeimage + '" /></div>';
        var printWindow = window.open('', '', 'height=1000,width=800');

        printWindow.document.open();
        printWindow.document.write(html);
    } else {
        var doc = new jsPDF('l', 'mm', [297, 210]);
        /*// doc.addImage(codeimage, 'png', 10, 40, 190, 140); // left top width height*/
        doc.addImage(codeimage, 'png', 0, 0, 297, 210); // left top width height
        doc.save('Giaykhen.pdf');

    }
}