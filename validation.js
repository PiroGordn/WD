function checkpass() {
    var pass=document.getElementById("pass").value;
    var check=document.getElementById("confirm").value;

    if(pass.length>4 && pass.length<16)
    {
        if(pass == check)
            {
                return true;
            }
            else 
            {
                alert("Passwords don't match");
                return false;
            }
    }
    else if(pass.length<4)
    {
        alert("Password must be greater than 4 characters");
        return false;
    }
    else if(pass.length>16)
    {
        alert("Password must be less than 16 characters");
        return false;
    }
    
}

function submit() {
    alert("Your response has been recorded");
}

document.querySelector("form").addEventListener("submit", 
    function (event)
    {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    if (email && password) 
        {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Credentials saved in Local Storage!");
        }
    }
);