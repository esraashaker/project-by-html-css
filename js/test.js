let aboutoffset=$("#about").offset().top;
console.log(aboutoffset);
$(window).scroll(function(){
  let testscroll=  $(window).scrollTop();
    console.log(testscroll);
    if(testscroll>aboutoffset-120){
        $(".cc").css("backgroundColor","brown");
        $(".icoo").fadeIn();
    }
    else{
        $(".cc").css("backgroundColor","transparent");
  $(".icoo").fadeOut();
    }
});

$(".icoo").click(function(){
    $("html,body").animate({scrollTop:0},3000);
})
$(".nav-item").click(function(){
   let x= $(this).attr("href");
   console.log(x);
 let offsetsection=  $(x).offset().top;
 $("html,body").animate({scrollTop:offsetsection},1000);


})
