   // $(document).ready(function(){
   //   $("#order").hide();

   //   $("#infix").click(function(){
   //      $("#order").show();


 $(document).ready(function(){
     $("#hover1").hide();
      $("#one").hide();
      $("#in").show();
      $("#post").show();
      $("#arrow").hide();
     
     $("#pre").click(function(){
         $("#hover1").show();
         $("#one").show();
          $("#in").hide();
         $("#post").hide();
         $("#arrow").show();
     });
     
 });
  $(document).ready(function(){
     $("#hover1").hide();
      $("#two").hide();
      $("#pre").show();
      $("post").show();
      $("#arrow").hide();

     $("#in").click(function(){
         $("#hover1").show();
         $("#two").show();
         $("#pre").hide();
         $("#post").hide();
         $("#arrow").show();
     });
     
 });
   $(document).ready(function(){
     $("#hover1").hide();
     $("#three").hide();
     $("#pre").show();
     $("in").show();
      $("#arrow").hide();

     $("#post").click(function(){
         $("#hover1").show();
         $("#three").show();
         $("#in").hide();
         $("#pre").hide();
         $("#arrow").show();
     });
     
 });

   $(document).ready(function(){
    $("infix").click(function(){
        $("text").val("Give Expression =>+");
    });
});

//    $(document).ready(function(){
//     $("keyC").click(function(){
//         $("myDiv").empty();
//     });
// });


   