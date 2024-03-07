console.log
$("p").on("click", function(){
    $(this).hide();
  });
  $(document).ready(function () {
    var small={width: "503px",height: "80px"};
    var large={width: "503px",height: "232px"};
    var count=1; 
    $("button").css(small).on('mouseenter',function () { 
        $(this).animate((count==1)?large:small);
        count = 1-count;
    });
  

});