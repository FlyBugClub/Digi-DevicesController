
var validate,checkEmail;
function btnForgotPassword()
{
    searchByEmail();    
    checkValidate();
    setTimeout(() => {
    
        if(validate)
        {
            
        }
    }
          , 1500);
}
function checkValidate()
{
    var emailID = document.getElementById("txtForgotPasswordEmail").value;
        atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
    if(document.getElementById("txtForgotPasswordEmail").value == "")
    {
        document.getElementById("txtNote").innerHTML = "*Please enter your email";
        validate =  false;
    }
    else if (atpos < 1 || ( dotpos - atpos < 2 )) {
        document.getElementById("txtNote").innerHTML = "*Please enter the correct email format";
        validate =  false;
    }
    else if(checkEmail)
    {  
        document.getElementById("txtForgotPasswordEmail").innerHTML = "*The email is already in use";
        validate =  false;
    }
}
function searchByEmail() {
    replace_email = document.getElementById("txtEmail").value.replace(/\./g,',');
    count = 0;
    axios.get(URL + "/SearchByEmail/"+replace_email).then((response) =>{
        var healthies = response.data;
        for(var human of healthies )
        {
            if(human.Email === replace_email)
            {
                count = count + 1;
            }
        }
    });
    setTimeout(() => {
        if (count >= 1)
    {
        checkEmail = true;
    }
    else checkEmail =  false;
      }, 1500);
}