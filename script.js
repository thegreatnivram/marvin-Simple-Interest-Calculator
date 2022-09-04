function compute()
{
    const d = new Date();
    let year = d.getFullYear();
    rate = parseFloat(document.getElementById("tasa").value);
    principal = parseFloat(document.getElementById("principal").value);
    amountofyears = parseInt(document.getElementById("years").value);
    targetyear = parseInt(year) + amountofyears; 
    totalresult = Math.round(principal * ((rate / 100)* amountofyears));
    document.getElementById("showprincipal").innerHTML = principal;
    document.getElementById("showrate").innerHTML = rate;
    document.getElementById("showyear").innerHTML = targetyear;
    document.getElementById("showresult").innerHTML =  totalresult;
    myFunction();
    
}
function show_value(x)
{
 document.getElementById("rate_value").innerHTML=x+"%";
}           
function myFunction() {
    var x = document.getElementById("resulting");
      x.style.display = "block";
  }
        