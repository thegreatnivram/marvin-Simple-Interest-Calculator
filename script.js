function compute()
{
    const d = new Date();
    let year = d.getFullYear();
    amountofyears = parseInt(document.getElementById("years").value);
    principal = parseFloat(document.getElementById("principal").value);
    if (principal>1) {
        rate = parseFloat(document.getElementById("tasa").value);
        targetyear = parseInt(year) + amountofyears; 
        totalresult = Math.round(principal * ((rate / 100)* amountofyears));
        document.getElementById("showprincipal").innerHTML = principal;
        document.getElementById("showrate").innerHTML = rate;
        document.getElementById("showyear").innerHTML = targetyear;
        document.getElementById("showresult").innerHTML =  totalresult;
        myFunction();    
    } else {

        window.alert("You need to enter a positive number as Amount");
        document.getElementById("principal").focus();
      }
    
}
function show_value(x)
{
 document.getElementById("rate_value").innerHTML=x+"%";
}           
function myFunction() {
    var x = document.getElementById("resulting");
      x.style.display = "block";
  }
        