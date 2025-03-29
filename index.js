// JQuery is a library of JavaScript
// It is used to simplify the JavaScript code
// text(), html(), append(), prepend(), before(), after(), remove(), empty(), 
// attr(), css(), addClass(), removeClass(), toggleClass(), hasClass(), val()

//$(".myDiv h1").text("Hello World JS");      // For changing text, use text() method
//$("#p").html("Hello <b> World  JS</b>");   // For bold text, use html() method

//var para1 = $("<p></p>").text("This is a paragraph 0");  // Create a new paragraph
//$("#p").append(para1);  // Append the paragraph to the div
//$("#p").prepend("<p>This is a paragraph 2</p>");  // Prepend a paragraph to the div

//$("#link1").attr("href"); // Returns the value of href attribute
//$("a").removeAttr("href"); // Removes the href attribute
//$("#link2").attr("href", "https://www.google.com"); // Sets the value of href attribute

//$("h1").css("color", "red"); // Changes the color of h1 to red
//$("h1").css("font-size", "3rem"); // Changes the font size of h1

//$("h1").css({"color": "red", "font-size": "3rem"}); // Changes the color and font size of h1

//$("h1").addClass("style1 style2"); // Adds class to h1

//$("button").click(function(){
//    $("h1").toggleClass("style1 style2")
//}); 

//$(".myButton").click(function(){
//    var value = this.innerHTML;
//    $("h1").text(value + " is clicked");
//});

//$(".myButton").on("mouseover", function(){
//    var value = this.innerHTML;
//    $("h1").text(value + " is clicked");
//});

//$("#btn1").click(function(){

//    $("#div1").hide(800).show(800);
//});

//$("#btn1").click(function(){
    
//    $("#div1").toggle(800);  // 1000ms=1s
//});

//$("#btn1").click(function(){
//    
//    $("#div1").fadeOut(1000).fadeIn(1000); 
//    $("#div1").fadeToggle(1000);  // samee
//    $("#div1").fadeTo(1000, 0.5);  // 0.5 is opacity
//});

//$("#btn1").click(function(){
        
        //$("#div1").slideUp(1000).slideDown(1000); 
        //$("#div1").slideToggle(1000);  // samee
//});


$("#btn1").click(function(){

    $("#div1").animate({height: "150px", opacity: '0.5'}, 500);
});








