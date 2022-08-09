function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function validateForm() {
  let redirect = window.location.href;
  const newRedirect = redirect.replace("contact.html", "index.html");
  window.location.href = newRedirect;
  }

const submitButton = document.querySelector(".contact-submit-btn");
submitButton.addEventListener("click", validateForm);