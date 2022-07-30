$(document).ready(function() {
    var click = new Audio('voice/click.mp3');
	var goPhim = new Audio('voice/goPhim.mp3');
    var dung = new Audio('voice/S4_Đ.wav')
    var tbsai = new Audio('voice/tiengtlsai.mp3')
    var tbdung = new Audio('voice/dung.mp3')

    var checkas1 = document.getElementById("as_1").value;
    var checkas2 = document.getElementById("as_2").value;
    var checkas3 = document.getElementById("as_3").value;
    var checkcombo = document.getElementById("board1_Cbx1").value;
    var kt1 = kt2 = kt3 = kt4 = 0;
	$("#as_1, #as_2, #as_3").on('keyup',function() {		
		goPhim.curentTime = 0;
		goPhim.play();
    });
    $("#as_1").on('change', function(){
        checkas1 = document.getElementById("as_1").value;
        if(checkas1 == 2){
            kt1 = 1;
        }
        else{
            kt1 = 0;
        }
        if(checkas1 != "" && checkas2 !="" && checkas3 !="" && checkcombo !=""){
            $("#kiemtra").css("display", "inline");
        }
    })
    $("#as_2").on('change', function(){
        checkas2 = document.getElementById("as_2").value;
        if(checkas2 == 2){
            kt2 = 1;
        }
        else{
            kt2 = 0;
        }
        if(checkas1 != "" && checkas2 !="" && checkas3 !="" && checkcombo !=""){
            $("#kiemtra").css("display", "inline");
        }
    })
    $("#as_3").on('change', function(){
        checkas3 = document.getElementById("as_3").value;
        if(checkas3 == 7){
            kt3 = 1;
        }
        else{
            kt3 = 0;
        }
        if(checkas1 != "" && checkas2 !="" && checkas3 !="" && checkcombo !=""){
            $("#kiemtra").css("display", "inline");
        }
    })
    $("#board1_Cbx1").on('change', function(){
        checkcombo = document.getElementById("board1_Cbx1").value;
        if(checkcombo == 1){
            kt4 = 1;
        }
        else{
            kt4 = 0;
        }
        if(checkas1 != "" && checkas2 !="" && checkas3 !="" && checkcombo !=""){
            $("#kiemtra").css("display", "inline");
        }
    })
    $("#kiemtra").on('click', function(){
        click.play();
        click.currentTime = 0;
        $("#kiemtra").css("display", "none");
        $("#che, #tieptuc").css("display", "inline");
        if(kt1 == 1 && kt2 == 1 && kt3 == 1 && kt4 == 1){
            dung.play();
            tbdung.play();
            $("#t1, #t2, #t3, #t4").css("display", "inline");
        }
        else{
            tbsai.play();
        }
        if(kt1 == 1){
            $("#t1").css("display", "inline");
        }
        else{
            $("#x1").css("display", "inline");
        }
        if(kt2 == 1){
            $("#t2").css("display", "inline");
        }
        else{
            $("#x2").css("display", "inline");
        }
        if(kt3 == 1){
            $("#t4").css("display", "inline");
        }
        else{
            $("#x4").css("display", "inline");
        }
        if(kt4 == 1){
            $("#t3").css("display", "inline");
        }
        else{
            $("#x3").css("display", "inline");
        }
    })
    $("#tieptuc").on("click", function(){
		click.play();
		click.currentTime = 0;
        window.parent.cpAPIInterface.setVariableValue("cpCmndGotoSlide",33);
    });
});



