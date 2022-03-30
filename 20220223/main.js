
$(function(){
    $("input").on("click",function(){
    //alert("Hi");
    var numberOfListItem = $("li").length;
    var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    $("h1").text($("li").eq(randomChildNumber).text());
    $("img").attr("src",`image/${randomChildNumber}.jpg`).attr("width","300");
    })
    //console.log(randomChildNumber);
    //debugger;
    });