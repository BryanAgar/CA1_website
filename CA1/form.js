window.addEventListener("load", function () {
    
    console.log("load entered");
    var submitBtn = document.getElementById("submit");
    console.log(submitBtn);
    
    submitBtn.addEventListener("click", submitForm);
    //console.log("not breaking");
    
    function submitForm (event) {
        
        //var firstNameData = document.getElementById("firstName").value; //long
        /*
        Instead of declaring a variable firstNameData could do below = shorthand
        firstName.value*/
        if(firstName.value === ""){
        
        //if(firstNameData === ""){           
           firstNameError.innerHTML = "Please enter a first name"; //shorthand
            
            document.getElementById("firstName").style.borderColor = "#f44242";
            document.getElementById("firstNameError").style.borderColor = "#f44242";            
        }
        else{            
            firstName.style.borderColor = "#62f441";
            firstNameError.innerHTML = "&#10003;"
            firstNameError.style.borderColor = "#62f441";
            
        }
        
    if(lastName.value === ""){
        
    //if(firstNameData === ""){           
        lastNameError.innerHTML = "Please enter last name"; //shorthand
            
        document.getElementById("lastName").style.borderColor = "#f44242";
        document.getElementById("lastNameError").style.borderColor = "#f44242";            
        }
    else{            
        lastName.style.borderColor = "#62f441";
        lastNameError.innerHTML = "&#10003;"
        lastNameError.style.borderColor = "#62f441";
            
    }
    
    if(email.value === ""){
        
    //if(firstNameData === ""){           
        emailError.innerHTML = "Please enter a vaild email"; //shorthand
            
        document.getElementById("email").style.borderColor = "#f44242";
        document.getElementById("emailError").style.borderColor = "#f44242";            
        }
    else{            
       email.style.borderColor = "#62f441";
        emailError.innerHTML = "&#10003;"
        emailError.style.borderColor = "#62f441";
            
    }
    
        
    if(jobtitle.value === ""){
        
    //if(firstNameData === ""){           
        jobtitleError.innerHTML = "Please enter a vaild email"; //shorthand
            
        document.getElementById("jobtitle").style.borderColor = "#f44242";
        document.getElementById("jobtitleError").style.borderColor = "#f44242";            
        }
    else{            
        jobtitle.style.borderColor = "#62f441";
        jobtitleError.innerHTML = "&#10003;"
        jobtitleError.style.borderColor = "#62f441";
            
    }
    
    if(storytype.value === ""){
        
    //if(firstNameData === ""){           
        storytypeError.innerHTML = "Please enter a vaild email"; //shorthand
            
        document.getElementById("storytype").style.borderColor = "#f44242";
        document.getElementById("storytypeError").style.borderColor = "#f44242";            
        }
    else{            
        storytype.style.borderColor = "#62f441";
        storytypeError.innerHTML = "&#10003;"
        storytypeError.style.borderColor = "#62f441";
            
    }
    if(storytext.value === ""){
        
    //if(firstNameData === ""){           
        storytextError.innerHTML = "Please enter text"; //shorthand
            
        document.getElementById("storytext").style.borderColor = "#f44242";
        document.getElementById("storytextError").style.borderColor = "#f44242";            
        }
    else{            
        storytext.style.borderColor = "#62f441";
        storytextError.innerHTML = "&#10003;"
        storytextError.style.borderColor = "#62f441";
            
    }
        
        
        
        
        
        
        
        
        if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
        
        
        
        
        console.log("test");
        console.log(event);
        
        event.preventDefault();   
    }
        
    
});