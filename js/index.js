/// <reference types="../@types/jquery"/>

$("a[href^='#']").on("click", (e)=>{
    let secId = $(e.target).attr("href");
    let secOff = $(secId).offset().top;
    $("body").animate({scrollTop : (secOff - 55)}, 1000);
});