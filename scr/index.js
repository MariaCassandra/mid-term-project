function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function clicked(e)
{
    if(!confirm('Your message has been sent!')) {
        e.preventDefault();
    }
}