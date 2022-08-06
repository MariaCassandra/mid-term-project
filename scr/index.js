function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


/*
contact page:
<button class="contact-submit-btn" onclick="clicked(event)">Submit</button>

JS:
  function clicked(e)
{
    if(!confirm('Your message has been sent!')) {
        e.preventDefault();
    }
}
*/

function validateForm() {
  let validation1 = document.forms["myForm"]["fullname"].value;
  let validation2 = document.forms["myForm"]["emailAddress"].value;
  let validation3 = document.forms["myForm"]["phoneNumber"].value;
  let validation4 = document.forms["myForm"]["messagebox"].value;
  let redirect = "thankyou.html";

  if (validation1 == "" || validation2 == "" || validation3 == "" || validation4 == "") {
    alert("The form can't be sent because you haven't filled in all the fields!");
    return false;
  }
  else {
    alert("Your message has been sent!");
    return true;
  }
}