 $(document).ready(function(){
    $("input").click(function(){
        $(this).css("background-color","lightblue");
    });
    $("#keyequal").click(function(){
        $("#stack").show();
    });  
    $("#keyequal").click(function(){
        $("#demo").css("fontSize", "30px").slideDown(2000);
        $("#demo").css("color", "blue");
        $("#demo1").css("fontSize", "30px");
        $("#demo1").css("color", "black");
        $("#row1").css("fontSize", "40px");
        $("#row1").css("text-align", "center");
        $("#row1").css("color", "blue");
        $("#demo3").css("color", "blue");
        $("#demo3").css("fontSize", "30px");

        //infixToPost();

        //$("#demo1").fadeTo("slow", 0.15);
        //$("#demo2").css("fontSize", "30px");
        //$("#demo").animate({left: "100px"});
        //$("#demo1").animate({left: '100px'});
        //$("#demo1").animate({height: "30px"});
    })    


});

 
    
        


