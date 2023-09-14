//-----------------------------------------------------------------------------------
// - This block of code will: 
//     * Check if the 'emailbox' field is empty.
//     * Check if email is valid.
//     * Pop up a message with instructions if email entered is invalid.

function submitForm() {



    //var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // Declare validRegex, a in-line list of valid characters.
    let x = document.forms["newsltr-form"]["emailbox"].value; // Declare x, give it the value 'emailbox' from the HTML form.

    /*
    The code below will check
    if the emailbox field is empty.
    
    If it is, a message with instructions
    will pop up, telling the user what to do.

    If it isn't and something is entered,
    validation will proceed to check if the
    email ends correctly.
    */

        
   
    if (x == "") {
      alert("Email must be filled out");
      return false;                             // Email is invalid, user needs to try again, form is not submitted.
    }

    /*
    The code below is for further
    validation.

    This code block below will:
        *Check if email address ends in a valid way.
        *Inform the user if it's invalid.
        *Submit the form if validation process was
         passed successfully.

    */
        else{
          document.getElementById("grid-container").style.display = "none";
          document.getElementById("submit-page").style.display = "flex";

        }
        return true;
    }
function mouseUp(){
  let x = document.forms["newsltr-form"]["emailbox"].value; // Declare x, give it the value 'emailbox' from the HTML form.

  if (x == "") {
    document.getElementById("error-label").style.display=("inline");
    document.getElementById("em-box").style.backgroundColor=("hsl(4, 100%, 94%)")
    document.getElementById("em-box").style.border=("1.5px solid hsl(4, 100%, 67%)")
  }

  else{
    document.getElementById("error-label").style.display=("none");
    document.getElementById("em-box").style.backgroundColor=("#fff");
    document.getElementById("em-box").style.border=("1.5px solid black");
  }
}



//-----------------------------------------------------------------------------------
