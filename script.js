var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
    function simple_interest()
    {
    var p,t,r,si;
    p = document.getElementById ("first").value;

   // r = document.getElementById ().value;
    r=slider.value;
    t = document.getElementById ("third").value;
    
    si = parseInt((p*t*r)/100);
    
    y=parseInt(t)+2021;
    
    if(p<=0){
        alert("Please enter a postive number");
      
    }
    else{
    document.getElementById ('num').innerHTML ="If you deposit <mark>" +p+ "</mark> at an interest rate of <mark>"+r+"% </mark>You will receive an amount of <mark>"+si+ "</mark> in the year <mark>"+y+" </mark>";
    }
}

    
    
