
// Form script//
function validateForm() {
            
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var y = document.forms["myForm"]["email"].value;
    if (y == "") {
      alert("Email must be filled out");
      return false;
    }
    var z = document.forms["myForm"]["feedback"].value;
    if (z == "") {
      alert("Please enter a message");
      return false;
    }
  }


